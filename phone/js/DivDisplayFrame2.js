/*********************************/
/*********************************/
function DivInfo(gotoHref,imgPath,BussinessId,displayText1,displayText2,displayText3) {
    this.GoToHref = gotoHref;			//跳转路径
    this.ImgPath = imgPath;				//图片路径
    this.BussinessId = BussinessId;		//业务id
    this.DisplayText1 = displayText1;
    this.DisplayText2 = displayText2;
    this.DisplayText3 = displayText3;
    if( this.DisplayText1==undefined){
        this.DisplayText1 = "";
    }else if( this.DisplayText2==undefined){
        this.DisplayText2 = "";
    }
}

function DivDisplayFrame(divID,floatRowCount,dataArray) {
	this.MaxDiv = document.getElementById(divID);
	this.floatRowCount = floatRowCount;
	this.dataArray = dataArray;
}

//创建Div
DivDisplayFrame.prototype.CreateDivElement = function (divID, parentDiv, dataInfo) {
    var pwidth = this.MaxDiv.offsetWidth;
    var pheight = this.MaxDiv.offsetHeight;

    this.MaxDiv.style.overflowX = "hidden";
    this.MaxDiv.style.overflowY = "auto";

    var div = document.createElement('div');
    div.id = divID;
    div.style.position = 'relative';
    div.style.width = pwidth/(4*this.floatRowCount + this.floatRowCount+1)*4+"px";
    div.style.height = pwidth/(4*this.floatRowCount + this.floatRowCount+1)*4+"px";
    div.style.align = "center";
    div.style.styleFloat="left";
    div.style.fontSize="0.875em";
    div.style.color="#999999";
    div.style.cssFloat="left";
    div.style.cursor = "pointer";
    div.style.marginRight = pwidth/(4*this.floatRowCount + this.floatRowCount+1)+"px";
    div.style.marginBottom = pheight/(4*this.floatRowCount + this.floatRowCount+1)+60+"px";


    //div.innerHTML = "<div style='position: absolute;top:5px;font-size:10px;text-align: center;width:100%;'>"+dataInfo.DisplayText1+" ("+dataInfo.DisplayText2+")"+"</div>";
// alert(dataInfo.DisplayText1)
    var img = document.createElement('img');
	img.style.width = pwidth/(4*this.floatRowCount + this.floatRowCount+1)*4+"px";
    img.style.height = pwidth/(4*this.floatRowCount + this.floatRowCount+1)*4+"px";
    img.src = dataInfo.ImgPath;
    img.setAttribute('BussinessID', dataInfo.BussinessId);
    div.appendChild(img);
    
    /*
    div.style.fontSize = "9px";
        div.style.fontWeight = "bold";
        div.style.textIndent = "10px";
        div.style.borderStyle = "solid";
        div.style.borderWidth = "1px";
        div.style.textAlign = "center";
        div.innerText = dataInfo.DisplayText1+" ("+dataInfo.DisplayText2+")";
    */
    
    var div2 = document.createElement('div');
    div2.style.textAlign = 'center';
    div2.style.marginTop = '0.25em';
    // div2.innerHTML = dataInfo.DisplayText1+'('+dataInfo.DisplayText2+')';
    div2.innerHTML = dataInfo.DisplayText1+'<span style="display:none;">('+dataInfo.DisplayText2+')</span>';
    div.appendChild(div2);
    
    if (dataInfo.DisplayText3 != 1) {
        var div3 = document.createElement('img');
        div3.style.position = 'absolute';
        div3.style.top = '0';
        div3.style.right = '0';
        div3.src = 'img/eStatus'+dataInfo.DisplayText3+'.png';
        div.appendChild(div3);
    };
    
	parentDiv.appendChild(div);
    img.addEventListener("click", function (e) {
        /*appcan.gsoft.ajaxUtil.ajax({
                url : "/engineger/findByEid.json",
                data: "eid="+img.getAttribute("BussinessID"),
                success : function(data) {
                    var engineMoveInfo="";
                    if(data.record.engine.f_TPID!=null){
                        engineMoveInfo = data.record.engine;
                    }
                    var dataArray = [];
                    if(engineMoveInfo!=""&&engineMoveInfo!=null){
                           for(var i=0;i<engineMoveInfo.stationList.length;i++){
                            var station = engineMoveInfo.stationList[i];
                            dataArray.push(station);
                        } 
                    }
                    if(Jl_runlines!=null){
                        Jl_runlines.destory();
                    }
                    Jl_runlines= new JL_Runlines('taskContainer','../img/train.png',dataArray,engineMoveInfo);
                    Jl_runlines.load();
                },
                error : function(XMLHttpRequest, textStatus, errorThrown) {
                    appcan.window.openToast("服务器连接失败,请检查网络...", '2000');
                }
            });*/
        
        for (var i=0; i < this.parentNode.parentNode.childNodes.length; i++) {
          this.parentNode.parentNode.childNodes[i].childNodes[0].src = dataInfo.ImgPath;
          this.parentNode.parentNode.childNodes[i].childNodes[1].style.color='#999999';
        };
        // alert(this.parentNode.innerHTML);
        this.parentNode.childNodes[0].src='img/xingshi-active.png';
        this.parentNode.childNodes[1].style.color='#02a650';
        document.getElementById("fEbuildtime").innerHTML = this.parentNode.childNodes[1].innerHTML;
        document.getElementById("fEbuildtime").childNodes[1].style.display = 'inline-block';
        //获取图标数据
        appcan.gsoft.ajaxUtil.ajax({
            url : "/locomotiveInfoManager/getLocomotiveByEngineId.json",
            data : "engineId="+img.getAttribute("BussinessID"),
            success : function(data) {
                //alert(JSON.stringify(data))
                var pName = new Array();
                var maintain = new Array();
                for (var i=0; i < data.records.length; i++) {
                    pName[i] = data.records[i].pName;
                    if (parseInt(data.records[i].maintain) > 80) {
                        maintain[i] = {y:parseInt(data.records[i].maintain),color:'#F95867'};
                    } else if (parseInt(data.records[i].maintain) < 40){
                        maintain[i] = {y:parseInt(data.records[i].maintain),color:'#03A650'};
                    } else {
                        maintain[i] = {y:parseInt(data.records[i].maintain),color:'#E9AC4E'};
                    };
                };
                // alert(JSON.stringify(maintain))
                tubiao(pName,maintain,maintain,24)
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                appcan.window.openToast("服务器连接失败,请检查网络...", '2000');
            }
        });
        
         appcan.gsoft.ajaxUtil.ajax({
                    url : "/locomotiveInfoManager/getLocomotiveByfEid.json",
                    data : "fEid="+img.getAttribute("BussinessID"),
                    success : function(data) {
                        //alert(JSON.stringify(data));
                        document.getElementById("mileage").innerHTML = data.records[0].mileage;
                        document.getElementById("time").innerHTML = data.records[0].time;
                        document.getElementById("fuel").innerHTML = data.records[0].fuel;
                        document.getElementById("mileageMonth").innerHTML = data.records[0].mileageMonth;
                        document.getElementById("timeMonth").innerHTML = data.records[0].timeMonth;
                        document.getElementById("fuelMonth").innerHTML = data.records[0].fuelMonth;
                    },
                    error : function(XMLHttpRequest, textStatus, errorThrown) {
                        appcan.window.openToast("服务器连接失败,请检查网络...", '2000');
                    }
             });
           
            
            
    });
    return div;
}

DivDisplayFrame.prototype.Load = function () {
	var parentDiv = document.createElement('div');
	parentDiv.style.width = "100%";
	parentDiv.style.height = "100%";
    parentDiv.style.marginLeft = "20px";
    this.MaxDiv.appendChild(parentDiv);
	for(j = 0;j<this.dataArray.length; j++){
        this.CreateDivElement(this.MaxDiv.id +j, parentDiv, this.dataArray[j]);
	}
}
