// JScript source code

//***************实时定位JOSN格式说明*****************
//["data":["EntryID":"1","EntryName":"火车1","Lat":112.423434,"Lgt":58.2343243,"Speed":56.34],"data":["EntryID":1,"EntryName":"火车1","Lat":112.423434,"Lgt":58.2343243,"Space":56.34]]
//****************************************************

//***************历史轨迹定位JOSN格式说明*****************
//["data":["EntryID":"1","EntryName":"火车1","PointArray":["Point":["Lat":112.423434,"Lgt":58.2343243,"Space":56.34,"Time":"2017-02-24 10:20:20"],Point":["Lat":112.423434,"Lgt":58.2343243,"Space":56.34,"Time":"2017-02-24 10:20:20"]],
// "data":["EntryID":"1","EntryName":"火车2","PointArray":["Point":["Lat":112.423434,"Lgt":58.2343243,"Space":56.34,"Time":"2017-02-24 10:20:20"],Point":["Lat":112.423434,"Lgt":58.2343243,"Space":56.34,"Time":"2017-02-24 10:20:20"]],]
//****************************************************

function EngineDataInfo(eid,epnumber) {
    this.eID = eid;
    this.ePlatenumber = epnumber;
}
//地图控件全局变量
var JL_mapcontrol;
var map,interval_realtime,interval_history;
var historyArray = [], pointArray = [], linePointArray = [];
var count = 0, tr_str = "";
var g_EIDs, g_EIDPoints;
var g_CurrentEID;
var g_MarkArray = null;
var g_ActiveStyle = 1; //1为开启实时定位，2为实时定位循环

function JL_MapControlByBaiDu(divId, entryDataUrl, entryDataHistory,entryImagePicPath,engines) {
    this.mapControlDiv  = document.getElementById(divId);
    this.EntryDataUrl = entryDataUrl;
    this.EntryDataHistoryUrl = entryDataHistory
    this.EntryImagePicPath = entryImagePicPath;
    this.engines = engines;
    
    this.MapCenterLnt = 114.36079;
    this.MapCenterLat = 30.534399;
    //初始化地图，设置中心点坐标和地图级别
    this.MapScalce = 19;
}

//实时数据请求Url: http://localhost:8080/DataWsRestService/service/rest/realtime/query/参数
//历史数据请求Url: http://localhost:8080/DataWsRestService/service/rest/histroy/query/参数
//zTree树初始Url: http://localhost:8080/DataWsRestService/service/rest/tree/query/参数
//启动后台服务程序Url: http://localhost:8080/DataWsRestService/service/rest/task/start/1
//结束后台服务程序Url: http://localhost:8080/DataWsRestService/service/rest/task/end/1

function JL_MapControlByBaiDuSetMapInfo(engineArray) {
    var minLat = 180;
    var maxLat = 0;
    var minLnt = 180;
    var maxLnt = 0;

    g_EIDs = new Array();

    g_EIDPoints = new Array();
    for (var i = 0; i < engineArray.length; i++) {
        if (minLat > engineArray[i].fElatitude) { minLat = engineArray[i].fElatitude; }
        if (maxLat < engineArray[i].fElatitude) { maxLat = engineArray[i].fElatitude; }
        if (minLnt > engineArray[i].fElonggitude) { minLnt = engineArray[i].fElonggitude; }
        if (maxLnt < engineArray[i].fElonggitude) { maxLnt = engineArray[i].fElonggitude; }
        g_EIDPoints.push(new BMap.Point(engineArray[i].fElonggitude, engineArray[i].fElatitude));
        g_EIDs.push(engineArray[i].fEid);
    }

    var centerLat = (minLat + maxLat) / 2;
    var centerLnt = (minLnt + maxLnt) / 2;

    var point = new BMap.Point(centerLnt, centerLat);
    map.setViewport(g_EIDPoints);　　
    map.panTo(point);　　　
    //var tP = map.getCenter();
    //alert("<2>"+tP.lat + "," + tP.lng);　
    //map.centerAndZoom(point, 15);
}

//地图加载
JL_MapControlByBaiDu.prototype.Load = function () {
    JL_mapcontrol = this;
    //创建地图控件容器
    JL_mapcontrol.createHtmlElement();
    //创建地图实例对象
    map = new BMap.Map(this.mapControlDiv.id + "_JLMapControl");
    //创建地图中心点
    var point = new BMap.Point(this.MapCenterLnt, this.MapCenterLat);
    //初始化地图，设置中心点坐标和地图级别
    map.centerAndZoom(point, this.MapScalce);
    //启用滚轮放大缩小
    map.enableScrollWheelZoom(true);
    //向地图中添加缩放控件
    var ctrlNav = new window.BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
        type: BMAP_NAVIGATION_CONTROL_LARGE
    });
    map.addControl(ctrlNav);
    //向地图中添加缩略图控件
    var ctrlOve = new window.BMap.OverviewMapControl({
        anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
        isOpen: 1
    });
    map.addControl(ctrlOve);
    //向地图中添加比例尺控件
    var ctrlSca = new window.BMap.ScaleControl({
        anchor: BMAP_ANCHOR_BOTTOM_LEFT
    });
    map.addControl(ctrlSca);
    //添加地图类型控件
    map.addControl(new BMap.MapTypeControl());
    
	map.addEventListener("load",function(type, target, pixel, point, zoom){
		debugger;
		var point1 = new BMap.Point(JL_mapcontrol.MapCenterLnt, JL_mapcontrol.MapCenterLat);
		map.centerAndZoom(point1,JL_mapcontrol.MapScalce);
	});
    	
    
    //var tP = map.getCenter();
    //alert("<1>"+tP.lat + "," + tP.lng);

    //添加第三方版权控件
    /*var cr = new BMap.CopyrightControl({anchor: BMAP_ANCHOR_TOP_RIGHT, offset:new BMap.Size(200,10)});   //设置版权控件位置
    map.addControl(cr); //添加版权控件
    var bs = map.getBounds();   //返回地图可视区域
    cr.addCopyright({id: 1, content: "<a href='#' style='font-size:20px;text-decoration: none;color: red;'>By:严义栋版权所有</a>", bounds: bs});
    */
    g_MarkArray = new Array();
    
    appcan.gsoft.ajaxUtil.ajax({
        url : "/engineger/getByEid.json",
        data: "eid=0",
        success : function(data) {
             map.clearOverlays();
            JL_mapcontrol.engines = data.records;
             g_MarkArray = new Array();
                JL_MapControlByBaiDuSetMapInfo(data.records);
                var strHTML = "";
                for (var i = 0; i < data.records.length; i++) {
                    var engineMoveInfo = data.records[i];
                    var point = new BMap.Point(engineMoveInfo.fElonggitude, engineMoveInfo.fElatitude);
                    addMarker(engineMoveInfo.fEid,point);
                    var displayName = data.records[i].fEname + data.records[i].fEplatenmber;
                    strHTML += "<li onclick= JL_mapcontrol.MoveToCenterByEngine('" + data.records[i].fEid + "',this)><span class='name'><svg class='icon' aria-hidden='true'><use xlink:href='#icon-huoche'></use></svg>" + displayName+ "</span><svg class='icon right-icon' aria-hidden='true'><use xlink:href='#icon-yanjing'></use></svg></li>";
                }
                
                if(data.records.length >0)
                {
                    g_CurrentEID = g_EIDs[0];
                    //g_CurrentEID = "40288ab05aa320fd015aa3213c9c0003";
                }
                
                $("#"+JL_mapcontrol.mapControlDiv.id + "_EngineList").html(strHTML);
                $("#"+JL_mapcontrol.mapControlDiv.id + "_EngineListLable").html("列车列表^共有"+data.records.length+"辆"); 
                g_ActiveStyle = 2;
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            appcan.window.openToast("服务器连接失败,请检查网络...", '2000');
        }
    });

    //debugger;
    var div = document.getElementById(this.mapControlDiv.id + "_MainMap");
   //alert(div.outerHTML);
    this.UpdateEntryPostion(0);
   
}

JL_MapControlByBaiDu.prototype.MoveToCenterByEngine = function (eID,object) {
  //if( g_EIDs = new Array();
    for (var i=0; i < object.parentNode.childNodes.length; i++) {
      object.parentNode.childNodes[i].style.color = '#666666'
    };
    object.style.color = '#00B83F';
    for(var i=0;i<g_EIDs.length;i++)
    {
    	if(eID == g_EIDs[i])
    	{
    		 map.centerAndZoom(g_EIDPoints[i], this.MapScalce);
    		 g_CurrentEID = eID;
    		 break;
    	}
    }
}

JL_MapControlByBaiDu.prototype.UpdateEntryPostion = function (eID) {
    var tr_str = "", arr = [], dataNum = 0;
    var count = 0;
    //清除表格里面的内容
    $("#tbody").html("");
    //清除定时器
    clearInterval(interval_realtime);
    //请求实时位置信息

    //定时器

    interval_realtime = setInterval(function () {
        //清除地图上的所有覆盖物
    	if(g_ActiveStyle == 1)
		{
    		map.clearOverlays();
		}
		
		appcan.gsoft.ajaxUtil.ajax({
            url : "/engineger/getByEid.json",
            data:"eid=0",
            success : function(data) {
                 //map.clearOverlays();
                 
                 //var tP = map.getCenter();
                 //alert("<3>"+tP.lat + "," + tP.lng);　
                 for (var i = 0; i < data.records.length; i++) {
                     var engineMoveInfo = data.records[i];
                     var point = new BMap.Point(engineMoveInfo.fElonggitude, engineMoveInfo.fElatitude);
                     if(g_ActiveStyle == 1)
                     {
                         addMarker(engineMoveInfo.fEid,point);
                     }
                     else 
                     {
                         updateMarker(engineMoveInfo.fEid,point);
                     }
                 }
                 JL_mapcontrol.engines = data.records;
                 if(g_ActiveStyle == 1)
                 {
                     JL_MapControlByBaiDuSetMapInfo(data.records);
                     g_ActiveStyle = 2;
                 }
                 //var tP = map.getCenter();
                 //alert("<4>"+tP.lat + "," + tP.lng);
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                appcan.window.openToast("服务器连接失败,请检查网络...", '2000');
            }
        });
		
       /* appcan.gsoft.ajaxUtil.ajax({
            url: "/engineger/getByEid.json",
            data: "eid=0",
            success: function (data) {
                map.clearOverlays();
                JL_MapControlByBaiDuSetMapInfo(data.record);
                for (var i = 0; i < data.record.length; i++) {
                    var engineMoveInfo = data.record[i];
                    var point = new BMap.Point(engineMoveInfo.fElonggitude, engineMoveInfo.fElatitude);
                    addMarker(point);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                appcan.window.openToast("服务器连接失败,请检查网络...", '2000');
            }
        });*/
        /*      tr_str += '<tr><td>'+count+'</td><td>'+info.EntryName+'</td><td>'+info.lgt+'</td><td>'+info.lat+'</td><td>'+info.speed+'km/h</td><td>'+new Date().toLocaleTimeString()+'</td></tr>';
        $("#tbody").html(tr_str);
        if(count==pointArray.length){
        clearInterval(interval_realtime);
        }
        //将表格的滚动条固定在最底端
        var div = document.getElementById("scrollDiv");
        div.scrollTop = div.scrollHeight;*/
    }, 5*1000);
}

JL_MapControlByBaiDu.prototype.HistroyQuery = function () {
	var Time = $("#seletTime").val().split(",");
    var startTimeV = Time[0]+':00';
    var endTimeV = Time[1]+':59';
    console.log(+g_CurrentEID + '/' + startTimeV + '/' + endTimeV);
	//var startTimeV = "2017-04-13 11:00:05";
	//var endTimeV = "2017-04-13 12:00:00";
	historyArray = new Array();
	appcan.gsoft.ajaxUtil.ajax({
        url : "/enginetrajectoryhistorymanager/getEngineTrajectorys.json",
        data:"fEid=" + g_CurrentEID + "&startTime=" + startTimeV + "&endTime=" + endTimeV,
        success : function(data) {
            var eName = "";
            var eNumber = "";
            for(var i =0;i<JL_mapcontrol.engines.length;i++)
            {
                if(JL_mapcontrol.engines[i].fEid == g_CurrentEID)
                {
                    eNumber = JL_mapcontrol.engines[i].fEplatenmber;
                    eName = JL_mapcontrol.engines[i].fEname;
                    break;
                }
            }        
            var info = data.records;
            historyArray.push(info);
            var tableHTML = "";
            pointArray = new Array();
            for(var i=0;i<info.length;i++){
                var point = new BMap.Point(info[i].fEthlng,info[i].fEthlat);
                pointArray.push(point);
                //编号,机车名称,经度,维度,速度,时间
                tableHTML += "<tr><td>"+ eNumber +"</td>" + 
                                  "<td>" + eName + "</td>" +
                                  "<td>" + info[i].fEthlng + "</td>" +
                                  "<td>" + info[i].fEthlat + "</td>" +
                                  "<td>" + info[i].fEthspeed + "</td>" +
                                  "<td>" + info[i].fEtime + "</td></tr>";
            }
            $("#"+JL_mapcontrol.mapControlDiv.id +"_tbody").html(tableHTML);
            
            //var polyline = new BMap.Polyline(pointArray,{strokeColor:"red", strokeWeight:2, strokeOpacity:0.5});
            //map.addOverlay(polyline);
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            appcan.window.openToast("服务器连接失败,请检查网络...", '2000');
        }
    });
	
}

JL_MapControlByBaiDu.prototype.GetEngineNameByID = function (ID)
{
	var parArry = new Array();
	
    for(var i =0;i<this.engines.length;i++)
	{
    	if(this.engines[i].fEid == ID)
		{
    		parArry.push(this.engines[i].fEname);
    		parArry.push(this.engines[i].fEplatenmber);
    		break;
		}
	}       
    
    return parArry;
}

JL_MapControlByBaiDu.prototype.BuilderPointInfoRow = function(count,eName,infoPoint)
{
	var tr_str = "<tr><td>"+ count +"</td>" + 
    "<td>" + eName + "</td>" +
    "<td>" + infoPoint.fEthlng + "</td>" +
    "<td>" + infoPoint.fEthlat + "</td>" +
    "<td>" + infoPoint.fEthspeed + "</td>" +
    "<td>" + infoPoint.fEtime + "</td></tr>";      
    return tr_str;
}

JL_MapControlByBaiDu.prototype.HistroyPlay = function () {

    clearInterval(interval_history);
    count = 0;
    tr_str = "";
    if(historyArray.length == 0){return}
    $("#historyPlay").html("历史轨迹暂停");
    $("#historyPlay").attr("href","javascript:JL_mapcontrol.HistroyPause()");
    var info = historyArray[0];
    var parArray= this.GetEngineNameByID(g_CurrentEID);
    linePointArray = new Array();
    interval_history = setInterval(function(){
        map.clearOverlays();
        var infoPoint = info[count];
        var pointInfo = pointArray[count++];
        
        tr_str += JL_mapcontrol.BuilderPointInfoRow(count,parArray[0],infoPoint);
        $("#tbody").html(tr_str);
 
        var point = new BMap.Point( pointInfo.lng,pointInfo.lat);
        addMarker(g_CurrentEID,point);
        linePointArray.push(point);
        var polyline = new BMap.Polyline(linePointArray,{strokeColor:"red", strokeWeight:2, strokeOpacity:0.5});
        map.addOverlay(polyline);
        if(count==pointArray.length){
            clearInterval(interval_history);
            $("#historyPlay").html("历史轨迹播放");
            $("#historyPlay").attr("href","javascript:JL_mapcontrol.HistroyPlay()");
        }
        var div = document.getElementById(JL_mapcontrol.mapControlDiv.id + "_scrollDiv");
        div.scrollTop = div.scrollHeight;
    },500);
}

JL_MapControlByBaiDu.prototype.HistroyPause = function () {
    $("#historyPlay").html("历史轨迹继续");
    $("#historyPlay").attr("href","javascript:JL_mapcontrol.HistroyGoOn()");
    clearInterval(interval_history);
}

JL_MapControlByBaiDu.prototype.HistroyGoOn = function () {
    $("#historyPlay").html("历史轨迹暂停");
    $("#historyPlay").attr("href","javascript:JL_mapcontrol.HistroyPause()");
    var info = historyArray[0];
    var parArray= this.GetEngineNameByID(g_CurrentEID);
    interval_history = setInterval(function(){
        map.clearOverlays();
        
        var pointInfo = info[count++];
        tr_str += JL_mapcontrol.BuilderPointInfoRow(count,parArray[0],pointInfo);
        //tr_str += '<tr><td>'+count+'</td><td>'+info.EntryName+'</td><td>'+pointInfo.point.lgt+'</td><td>'+pointInfo.point.lat+'</td><td>'+pointInfo.point.speed+'km/h</td><td>'+pointInfo.point.time+'</td></tr>';
        $("#tbody").html(tr_str);
        var point = new BMap.Point( pointInfo.lng,pointInfo.lat);
        addMarker(g_CurrentEID,oint);
        linePointArray.push(point);
        var polyline = new BMap.Polyline(linePointArray,{strokeColor:"red", strokeWeight:2, strokeOpacity:0.5});
        map.addOverlay(polyline);
        if(count==pointArray.length){
            clearInterval(interval_history);
            $("#historyPlay").html("历史轨迹播放");
            $("#historyPlay").attr("href","javascript:JL_mapcontrol.HistroyPlay()");
        }
        var div = document.getElementById(this.mapControlDiv.id + "_scrollDiv");
        div.scrollTop = div.scrollHeight;
    },500);
}

JL_MapControlByBaiDu.prototype.HistroyClear = function () {
    map.clearOverlays();
}

JL_MapControlByBaiDu.prototype.createHtmlElement = function () {
     $("<div id='" + this.mapControlDiv.id + "_MainMap'></div>").addClass("map").appendTo(this.mapControlDiv);
     var str = "";
     str += '<div class="left_menu">';
     str += '<div class="l_m_ztree"><div id = "' + this.mapControlDiv.id + '_EngineListLable" class="title">&nbsp;列车列表^显示0/共0</div>';
     str += '<div class="list"><ul id ="' + this.mapControlDiv.id + '_EngineList" class="l_content">';
     
     //for(var i=0;i<data.records.length;i++){
         //str += "<div onclick= JL_mapcontrol.MoveToCenterByEngine('" + data.records[i].eId + "',this) style='width:90%;height:25px;margin: 0 auto;padding-top:10px;'><div style='float: left;width:70%;'><svg class='icon' aria-hidden='true'><use xlink:href='#icon-huoche'></use></svg>&nbsp;&nbsp;" + JL_mapcontrol.engines[i].ePlatenumber + "</div><div style='float: right;font-size:24px;width:30%;'><svg class='icon' aria-hidden='true'><use xlink:href='#icon-yanjing'></use></svg></div></div>";
     //}
     str += '</ul></div>';
     str += '</div>';
     str += '<div class="l_m_query"><div class="sbtn">';
     str += '<div class="input-btn-group"><input id="seletTime" class="datatime_window text-left" type="text" value="" readonly="true" autocomplete="off" placeholder="历史轨迹查询"/>';
     //str += '<input type="text" id="' + this.mapControlDiv.id + '_startTime" autocomplete="off" placeholder="请输入开始时间"/><input type="text" id="' + this.mapControlDiv.id + '_endTime" autocomplete="off" placeholder="请输入结束时间"/>';
     str += '<a class="btn-right" href="javascript:JL_mapcontrol.HistroyQuery()"><i class="icon iconfont icon-sousuo icon-right text-white"></i></a></div><a id="historyPlay" href="javascript:JL_mapcontrol.HistroyPlay()">历史轨迹播放</a><a href="javascript:JL_mapcontrol.StartRealPotion()">实时定位</a></div></div>';
     str += '</div>';
     str += '<div class="right_container">';
     str += "<div class='r_c_map' id='" + this.mapControlDiv.id + "_JLMapControl"+ "'></div>";
     str += "<div class='r_c_info'><div id='" + this.mapControlDiv.id + "_scrollDiv'><table><thead><tr><th width='5%'>编号</th><th width='15%'>机车名称</th><th width='20%'>经度</th><th width='20%'>维度</th><th width='15%'>速度</th><th width='25%'>时间</th></tr></thead><tbody id='"+this.mapControlDiv.id +"_tbody'></tbody></table></div></div>";
     str += "</div>";
     $("#"+this.mapControlDiv.id + "_MainMap").html(str);
     
    dataTimeWindow3(true);
}

function addMarker(eID,point){
	var tetA = JL_mapcontrol.GetEngineNameByID(eID);
    var myIcon = new BMap.Icon("engineMap/img/train.png", new BMap.Size(26,29));
    var marker = new BMap.Marker(point,{icon:myIcon});  // 创建标注
    marker.setOffset(new BMap.Size(-1,-14));
    map.addOverlay(marker);//[]
    g_MarkArray.push(marker);
    map.panTo(point);
    var label = new BMap.Label(tetA[1]);
    label.setStyle({color:"#00A035",border:"none",background:"rgba(255,255,255,0)"});
    label.setOffset(new BMap.Size(-8,-15));
    marker.setLabel(label);
}

function updateMarker(eID,point){
    for(var i =0;i<g_EIDs.length;i++)
    {
    	if(g_EIDs[i] == eID)
    	{
    		g_MarkArray[i].setPosition(point);
    		break;
    	}
    }
}

function getNowFormatDate() {
    var date = new Date();

    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();

    //return "2017-03-10 08:38:00";
    return currentdate;
}


//启动后台服务程序
JL_MapControlByBaiDu.prototype.startTask = function () {}

//结束后台服务程序 
JL_MapControlByBaiDu.prototype.endTask = function () {}

JL_MapControlByBaiDu.prototype.StartRealPotion = function()
{
	this.UpdateEntryPostion(0);
	var point1 = new BMap.Point(JL_mapcontrol.MapCenterLnt, JL_mapcontrol.MapCenterLat);
	map.centerAndZoom(point1,JL_mapcontrol.MapScalce);
}