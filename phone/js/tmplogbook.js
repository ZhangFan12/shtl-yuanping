var fEid = '';var fEexid = '';var fTpid = localStorage.getItem('taskId');
var taskStatus ;
dataTimeWindow(true);//时间选择
dataTimeWindow2(false);//时间选择
selectPage();//选司机选择
stationBox();

//获取初始数据
appcan.ready(function(){
    initUpload();
    //alert("fTpid1:"+fTpid+"----taskStatus:"+taskStatus);
    var fRliid="";
    var statue="";
    var public = new Public();
    public.header('行车日志',true,true);//显示顶部:标题名，左侧icon，右侧icon
    public.footer();//显示底部
    // public.backBtn();

    taskStatus = localStorage.getItem('selectPageLS');
    //alert("fTpid:"+fTpid+"--taskStatus:"+taskStatus);
    $('.back-btn').click(function(){//JSON.stringify(cachePageJsonInfo()) 
        var cacheInfo =   JSON.stringify(cachePageJsonInfo());
        if (taskStatus == 5) {
            localStorage.setItem('logbookCacheInfo'+fTpid,cacheInfo);
        }
        // alert(localStorage.getItem('logbookCacheInfo'))
        // localStorage.removeItem('logbookCacheInfo');
        appcan.window.close(-1);
    })
    
    uexWindow.setReportKey(0,1);// 拦截后退按钮
    uexWindow.onKeyPressed = function(){ 
        var cacheInfo =   JSON.stringify(cachePageJsonInfo());
        if (taskStatus == 5) {
            localStorage.setItem('logbookCacheInfo'+fTpid,cacheInfo);
        }
        appcan.window.close(-1);
    };
    //监听其它按钮对应缓存
    $('.footer li').click(function(){
        var cacheInfo =   JSON.stringify(cachePageJsonInfo());
        if (taskStatus == 5) {
            localStorage.setItem('logbookCacheInfo'+fTpid,cacheInfo);
        }
    })
    if (taskStatus == 6) {
        $('#submit').hide();
        $('#submit2').show();
        $('.input-label').attr('class','input-label');
        $('.input-text').addClass('input-readonly');
        $('.input-text').removeClass('datatime_window datatime_window2 select_driver ');
        $('.input-text').attr('readonly','true');
        //工序组
        $('#work_group1').hide();
        $('#work_group2').show();
        //站点
        $('#btn_addsite').hide();
        $('#station li:last-child').hide();
        //防溜添加按钮
    }else if(taskStatus == 7){
        $('#submit').hide();
        $('.input-label').attr('class','input-label');
        $('.input-text').addClass('input-readonly');
        $('.input-text').removeClass('datatime_window datatime_window2 select_driver ');
        $('.input-text').attr('readonly','true');
        //工序组
        $('#work_group1').hide();
        $('#work_group2').show();
        //站点
        $('#btn_addsite').hide();
        $('#station li:last-child').hide();
        //防溜添加按钮
    };
    //临时出车隐藏计划编号
    appcan.gsoft.ajaxUtil.ajax({
                url : '/gltlTaskplanManager/getTaskInfo.json',
                success : function(data) {
                    if(data.records[0].taskType == 'TE') {
                        $('#fTpworknumber').hide();
                        $('#fTpworknumber_span').hide();
                    }
                },
                error : function(XMLHttpRequest, textStatus, errorThrown) {
                    appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
                }
            });
    
    //获取工序执行流水

    appcan.gsoft.ajaxUtil.ajax({
        url : '/locomotiveInfoManager/getWorkingLog.json',
        data : 'fTpid=' + fTpid,
        success : function(data) {
           //alert("执行流水1: "+JSON.stringify(data));
           var workingLogHTML = "";
           for (var i=0; i < data.records.length; i++) {
            workingLogHTML += '<p > <span class="now_time">' + data.records[i].fWpltime + '</span>&nbsp;<span class="wp_name">' + data.records[i].fWpname + '</span></p> <br />'
           };
           $('#work_group_history').empty();
           $('#work_group_history').append(workingLogHTML);
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
          //  appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
          var worklogSql = "select gl1.F_WPLTIME,gl2.F_WPNAME,gl1.F_WPLID from gltl_workingprocedurelog gl1";
          worklogSql +=" LEFT JOIN gltl_workingprocedure gl2 ON gl1.F_WPID = gl2.F_WPID";
          worklogSql +=" WHERE gl1.F_TPID='"+fTpid+"' ORDER BY  gl1.F_WPLTIME ASC";
          g_DataAccHelper.ExecuteSQLByResult(worklogSql, function (json) {
                var workingLogHTML = "";
                if(json && json.length!=0){
                    for(var i = 0;i<json.length;i++){
                        workingLogHTML += '<p > <span class="now_time">' + json[i].F_WPLTIME + '</span>&nbsp;<span class="wp_name">' + json[i].F_WPNAME + '</span></p> <br />';
                    }
                }
                
                $('#work_group_history').empty();
                $('#work_group_history').append(workingLogHTML);
                
            });
        }
    });

    /**cachePageJsonInfo()
     * 获取缓存信息，若logbookCacheInfo有值则直接获取并赋值到页面中
     * 若logbookCacheInfo无内容 则请求后台服务获取信息
     */                                          
    var logbookCacheInfo = localStorage.getItem('logbookCacheInfo'+fTpid);
    //var logbookCacheInfo = "";
    if(taskStatus == 5){
        
        if(logbookCacheInfo != "" && logbookCacheInfo != null)
        {//如果有缓存  cachePageJsonInfo()
            //alert(logbookCacheInfo);
            //alert("走缓存");
            getCacheInfoToPage(JSON.parse(logbookCacheInfo));
              
        }else{//木有缓存
            //初始化页面信息
           // alert("木有缓存");
            initPageInfo();
            
        }    
    }else{
        initPageInfo();
    }
   
    $("#working li").mousedown(function(){
        //工序高亮
         //alert($(this).index());
        var thisLi = $(this).parent().children();
        for (var i=0; i < thisLi.length; i++) {
        var workGroupName = thisLi.eq(i).children('img').attr('data-name');
          if (i == $(this).index()) {
              thisLi.eq(i).children('img').attr('src','../img/workGroup/active/'+workGroupName+'.png');
              thisLi.eq(i).children('span').removeClass(' text-gray');
              thisLi.eq(i).children('span').addClass(' text-green');
          }else{
              thisLi.eq(i).children('img').attr('src','../img/workGroup/'+workGroupName+'.png');
              thisLi.eq(i).children('span').removeClass(' text-green');
              thisLi.eq(i).children('span').addClass(' text-gray');
          };
        };
        //获取危险源数据
        // alert($(this).attr('name'))
        var wpId = $(this).attr('name');
        appcan.gsoft.ajaxUtil.ajax({
            url : '/locomotiveInfoManager/getHazardByWorking.json',
            data : 'wpId=' + wpId,
            success : function(data) {
                var fDsnameHTML = "";
                for (var i=0; i < data.records.length; i++) {
                    fDsnameHTML = fDsnameHTML + '<p>' + (i+1) + '、' + data.records[i].fDsname + '</p><br />';
                };
                document.getElementById("fDsname").innerHTML = fDsnameHTML;
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
              //  appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
                var dangerSource = new gltl_dangersource();
                var array = [1];
                dangerSource.SetF_WPID(wpId);
                var selectSQL = dangerSource.GetSelectSQL(false,array);
                dangerSource.ExecuteSQLByResult(selectSQL, function (json) {
                    //alert(JSON.stringify(json));
                    var fDsnameHTML = "";
                    var danArray = dangerSource.GetEntryArray(json);
                    for(var i= 0;i<danArray.length;i++){
                        fDsnameHTML = fDsnameHTML + '<p>' + (i+1) + '、' + danArray[i].GetF_DSNAME() + '</p><br />';
                    }
                    document.getElementById("fDsname").innerHTML = fDsnameHTML;
                })
            }
        });
    });
    
    //添加防溜
    $('.add_antiskid').click(function (){
        if ($(this).attr('id') == 0) {
            // alert('fEpaopertaor_' + $('#antiskid_remove .antiskid').length+'/'+'fEpaapprover_' + $('#antiskid_remove .antiskid').length)
            var fEpatimeID = 'fEpatime_0_' + $('#antiskid_remove .antiskid').length; //时间输入id
            var fEpaopertaorID = 'fEpaopertaor_0_' + $('#antiskid_remove .antiskid').length; //操作人姓名id
            var fEpaapproverID = 'fEpaapprover_0_' + $('#antiskid_remove .antiskid').length; //确认人姓名id
            var name = '撤除';
        } else if($(this).attr('id') == 1){
            var fEpatimeID = 'fEpatime_1_' + $('#antiskid_add .antiskid').length; //时间输入id
            var fEpaopertaorID = 'fEpaopertaor_1_' + $('#antiskid_add .antiskid').length; //操作人姓名id
            var fEpaapproverID = 'fEpaapprover_1_' + $('#antiskid_add .antiskid').length; //确认人姓名id
            var name = '安设';
        };
        var antiskidRemoveHTML = '<div class="antiskid"><table>' +
                '<tr>' +
                    '<td style="width:7em;"><span class="input-label text_necessary">防溜' + name + '时间:</span></td>' +
                    '<td style="width:calc(90% - 7em);" colspan="3"><input id="' + fEpatimeID + '" class="datatime_window input-text" type="text" name="'+nowTime()+'" value="'+nowTime()+'" readonly="true" /></td>' +
                    '<td style="width:10%;" rowspan="2">' +
                // '<button onclick="removeParent($(this),\'.antiskid\',\'\')">删除</button>' +
                    '<i class="icon iconfont icon-guanbi2 shanchu-btn" onclick="removeParent($(this),\'.antiskid\',\'\')"></i>' +
                '</td>' +
                '</tr>' +
                '<tr>' +
                    '<td><span class="input-label">' + name + '人员:</span></td>' +
                    '<td style="width:calc(45% - 7em);"><input id="' + fEpaopertaorID + '" class="input-text" value="" /></td>' +
                    '<td style="width:7em;"><span class="input-label">确认人员:</span></td>' +
                    '<td style="width:calc(45% - 7em);"><input id="' + fEpaapproverID + '" class="input-text" value="" /></td>' +
                '</tr>' +
            '</table></div>';
        if ($(this).attr('id') == 0) {
            $('#antiskid_remove').append(antiskidRemoveHTML);
        } else if($(this).attr('id') == 1){
            $('#antiskid_add').append(antiskidRemoveHTML);
        }
    })
    //添加备注
    $('.add_note').click(function (){
        var num = $('#note .block-foot').length;
        var noteID = 'noteID_' + $('#note .block-foot').length;
        var picClass = 'div_upload_'+($('#note .noteClass').length+1);
        var addNoteHTML = '<div class="block-foot noteClass" id="' + noteID + '">'+
                '<table class="table-input memo">'+
                    '<tr>'+
                        '<td style="width:5em;"><span class="input-label">备注:</span></td>'+
                        '<td style="width:calc(50% - 5em);"><textarea id="jsdr" class="input-text input-textarea" rows="3" cols="100"></textarea></td>'+
                        '<td style="width:10%;">'+
                            '<i class="add_note add-note icon iconfont icon-guanbi2" onclick="removeParent($(this),\'.block-foot\',\'备注\')"></i>'+
                        '</td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td><span class="input-label">上传图片:</span></td>'+
                        '<td style="width:calc(100% - 5em);" colspan="2">'+
                            '<div class="'+picClass+'">'+
                                '<div class="div_imglook">'+
                                '<div id="uploadPicture" class="uploadPictureClass lookimg bor-0">'+
                                    '<img src="../img/photo-active.png">'+
                                '</div>'+
                            '</div>'+
                            '</div>'+
                        '</td>'+
                    '</tr>'+
                '</table>'+
            '</div>';
        $('#note').append(addNoteHTML);
    })
});

//初始化页面信息-PC
function initPageInfo(){
        
        $('#fRlistarttime').val(nowTime());//出库时间
        $('#fRlistarttime').attr("name",nowTime());//出库时间
        $('#fEpatime_0_0').val(nowTime());//防溜撤除时间
        $('#fEpatime_0_0').attr("name",nowTime());//防溜撤除时间
        $('#fEpatime_1_0').val(nowTime());//防溜安设时间
        $('#fEpatime_1_0').attr("name",nowTime());//防溜安设时间
        $('#runlineDate').val(nowTime(false,true));//日志日期
        
    appcan.gsoft.ajaxUtil.ajax({
        url : '/locomotiveInfoManager/getDrivingJournal.json',
        data : 'fTpid=' + fTpid,
        success : function(data) {
            //alert(JSON.stringify(data));
            //alert(JSON.stringify(data.records[0]));
            
            $("#fTpworknumber").val(data.records[0].fTpworknumber);//作业计划号
            $("#fTpnumber").val(data.records[0].fTpnumber);//作业任务号
            $("#fTpgroup").val(data.records[0].fTpgroup);//车辆编组
            $("#fTpsection").val(data.records[0].fTpsection);//施工路段
            $("#fTpcontent").val(data.records[0].fTpcontent);//施工内容及影响范围
            $("#fTpname").val(data.records[0].fTpname);//任务名称
            $("#fTpdate").val(data.records[0].fTpdate);//任务日期
            
            fEid = data.records[0].fEid;//机车id1
            fEexid = data.records[0].fEexid;//机车id1
            
            $("#fTppersonne1").attr('name',data.records[0].fTppersonne1Id);  //正司机ID
            $("#fTppersonne2").attr('name',data.records[0].fTppersonne2Id);  //副司机ID
            $("#fRlioperationor").attr('name',data.records[0].fRlioperationorId);  //实操训练人员ID
            $("#fRlisteward").attr('name',data.records[0].fRlistewardId);  //乘务学习人员ID


            $("#fRlioperationor").attr('name',data.records[0].fRlioperationorId);//实操训练人员ID
            $("#fRlisteward").attr('name',data.records[0].fRlistewardId);//乘务学习人员ID
            $("#fTppersonne1").val(data.records[0].fTppersonne1Name);//正司机Name
            $("#fTppersonne2").val(data.records[0].fTppersonne2Name);//副司机Name
            $("#fRlioperationor").val(data.records[0].fRlioperationorName);//实操训练人员Name
            $("#fRlisteward").val(data.records[0].fRlistewardName);//乘务学习人员Name
            $("#fRlicommand").val(data.records[0].fRlicommand);//调度命令号
            data.records[0].fRlistarttime!==''?$('#fRlistarttime').val(data.records[0].fRlistarttime):'';
            //$('#fRlistarttime').val(data.records[0].fRlistarttime);//出库时间
            
            fRliid=data.records[0].fRliid;//机车运行实例id
            statue=data.records[0].statue;//任务状态
            if(fRliid!=null&&fRliid!=""){//防溜信息
                //alert("hahahahahah");
                $('#antiskid_add').empty();
                $('#antiskid_remove').empty();
                for (var i=0; i < data.records[0].runlineparkingsInfos.length; i++) {
                 // data.records[0].runlineparkingsList[i]   
                 //fEoaactive //动作类型 1:安装 2:撤除
                 //fEpatime;//安装时间
                 //fEpaopertaor;//操作人姓名
                 //fEpaapprover;//确认人姓名
                  var type = data.records[0].runlineparkingsInfos[i].fEoaactive;
                  var name = data.records[0].runlineparkingsInfos[i].fEoaactive == 1 ?'安设':'撤除';
                  var fEpatime = data.records[0].runlineparkingsInfos[i].fEpatime;
                  var fEpaopertaor = data.records[0].runlineparkingsInfos[i].fEpaopertaor;
                  var fEpaapprover = data.records[0].runlineparkingsInfos[i].fEpaapprover;
                  var antiskHTML = '<div class="antiskid"><table>' +
                        '<tr>' +
                            '<td style="width:7em;"><span class="input-label">防溜' + name + '时间:</span></td>' +
                            '<td style="width:calc(90% - 7em);" colspan="3"><input id="" class="datatime_window input-text" type="text" name="" value="' + fEpatime + '" readonly="true" /></td>' +
                            '<td style="width:10%;" rowspan="2">' +
                        '</td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td><span class="input-label">' + name + '人员:</span></td>' +
                            '<td style="width:calc(45% - 7em);"><input id="" class="input-text" value="' + fEpaopertaor + '" /></td>' +
                            '<td style="width:7em;"><span class="input-label">确认人员:</span></td>' +
                            '<td style="width:calc(45% - 7em);"><input id="" class="input-text" value="' + fEpaapprover + '" /></td>' +
                        '</tr>' +
                    '</table></div>';
                  if (type == 1) {
                    $('#antiskid_add').append(antiskHTML);
                  } else if(type == 2){
                    $('#antiskid_remove').append(antiskHTML);
                  }
                 
                };
                if(taskStatus == 6 || taskStatus == 7){
                    $('.antiskid').find('table tr:eq(0) td:eq(2)').remove();
                    $('.antiskid-shell').find('input').addClass('input-readonly');
                    $('.antiskid-shell').find('input').attr('readonly','true');
                    $('.antiskid-shell').find('input').removeClass('datatime_window');
                }
                //获取基础信息
                for (var i=0; i < data.records[0].baseInfos.length; i++) {
                    var itemIndex = data.records[0].baseInfos[i].fRliefieldindex;//
                    switch (itemIndex){
                        case 1://入库时间
                          $("#rksj").val(data.records[0].baseInfos[i].fRliefieldvalue);
                          break;
                        case 2://当次走行时间
                          $("#fRlirunningtime").val(data.records[0].baseInfos[i].fRliefieldvalue);
                          break;
                        case 3://当次走行公里
                          $("#fRlirunningmileage").val(data.records[0].baseInfos[i].fRliefieldvalue);
                          break;
                        case 4://车辆及安全装备状况
                          $("#clanzbzk").val(data.records[0].baseInfos[i].fRliefieldvalue);
                          break;
                        case 5://安全预想
                          $("#aqyx").val(data.records[0].baseInfos[i].fRliefieldvalue);
                          break;
                        case 6://揭示导入
                          $("#jsdr").val(data.records[0].baseInfos[i].fRliefieldvalue);
                          break;
                        case 7://调度命令
                          $("#ddml").val(data.records[0].baseInfos[i].fRliefieldvalue);
                          break;
                        case 8://添乘检查意见
                          $("#tcjcyj").val(data.records[0].baseInfos[i].fRliefieldvalue);
                          break;
                        case 9://日志日期
                          $("#runlineDate").val(data.records[0].baseInfos[i].fRliefieldvalue);
                          break;
                    }
                };
                
                //获取站点
                var stationHTML = '';
                //alert(data.records[0].station.length)//车站ID
                for (var i=0; i < data.records[0].station.length; i++) {
                    stationHTML = stationHTML +
                        '<li><div class="addsite-head">' + data.records[0].station[i].sName + '</div><div class="addsite-body">' +
                        '<table><tr><td width="30%">进站时间:</td>' +
                        '<td width="70%"><input class="datatime_window addsite-right input-text" value="' + data.records[0].station[i].iarriveTime + '" /></td></tr><tr>' +
                          '<td>出站时间:</td>' +
                        '<td><input class="datatime_window addsite-right input-text" value="' + data.records[0].station[i].outTime + '" /></td></tr></table></div></li>';
                };
                if(taskStatus != 6 && taskStatus != 7){
                    stationHTML = stationHTML + '<li onclick="addStation($(this))"><div class="addsite-add"><i class="icon iconfont icon-jiahao"></i><p>添加站点</p></div></li>';
                }
                document.getElementById("station").innerHTML = stationHTML;
                if(taskStatus == 6 || taskStatus == 7){
                    $('.addsite-body').find('input').addClass('input-readonly');
                    $('.addsite-body').find('input').attr('readonly','true');
                    $('.addsite-body').find('input').removeClass('datatime_window');
                }
                //station.fRliiid
                stationBox();
            }
            
            //获取工序
            var workingHTML = '';
            var a = '';var b = '';
            for (var i=0; i < data.records[0].working.length; i++) {
                if (i == 0) {
                    workingHTML = workingHTML + '<li name="' + data.records[0].working[i].wpId + '"><img data-name="'+data.records[0].working[i].fWpindex+'" src="../img/workGroup/active/'+data.records[0].working[i].fWpindex+'.png" /><span class="text-green">' + data.records[0].working[i].wpName + '</span></li>';
                }else{
                    workingHTML = workingHTML + '<li name="' + data.records[0].working[i].wpId + '"><img data-name="'+data.records[0].working[i].fWpindex+'" src="../img/workGroup/'+data.records[0].working[i].fWpindex+'.png" /><span class="text-gray">' + data.records[0].working[i].wpName + '</span></li>';
                };
            };
            document.getElementById("working").innerHTML = workingHTML;
            
            $("#working li").mousedown(function(){
                //工序高亮
                //alert($(this).index());
                var thisLi = $(this).parent().children();
                for (var i=0; i < thisLi.length; i++) {
                  var workGroupName = thisLi.eq(i).children('img').attr('data-name');
                  if (i == $(this).index()) {
                      thisLi.eq(i).children('img').attr('src','../img/workGroup/active/'+workGroupName+'.png');
                      thisLi.eq(i).children('span').removeClass(' text-gray');
                      thisLi.eq(i).children('span').addClass(' text-green');
                  }else{
                      thisLi.eq(i).children('img').attr('src','../img/workGroup/'+workGroupName+'.png');
                      thisLi.eq(i).children('span').removeClass(' text-green');
                      thisLi.eq(i).children('span').addClass(' text-gray');
                  };
                };
                //获取危险源数据
                // alert($(this).attr('name'))
                var wpId = $(this).attr('name');
                appcan.gsoft.ajaxUtil.ajax({
                    url : '/locomotiveInfoManager/getHazardByWorking.json',
                    data : 'wpId=' + wpId,
                    success : function(data) {
                        //alert(JSON.stringify(data));
                        var fDsnameHTML = "";
                        for (var i=0; i < data.records.length; i++) {
                            fDsnameHTML = fDsnameHTML + '<p>' + (i+1) + '、' + data.records[i].fDsname + '</p><br />';
                        };
                        document.getElementById("fDsname").innerHTML = fDsnameHTML;
                    },
                    error : function(XMLHttpRequest, textStatus, errorThrown) {
                      //  appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
                        var dangerSource = new gltl_dangersource();
                        var array = [1];
                        dangerSource.SetF_WPID(wpId);
                        var selectSQL = dangerSource.GetSelectSQL(false,array);
                        dangerSource.ExecuteSQLByResult(selectSQL, function (json) {
                            //alert(JSON.stringify(json));
                            var fDsnameHTML = "";
                            var danArray = dangerSource.GetEntryArray(json);
                            for(var i= 0;i<danArray.length;i++){
                                fDsnameHTML = fDsnameHTML + '<p>' + (i+1) + '、' + danArray[i].GetF_DSNAME() + '</p><br />';
                            }
                            document.getElementById("fDsname").innerHTML = fDsnameHTML;
                        })
                    }
                });
            });
            
            //工序组添加历史记录
            $("#working li").longPress(function(){
                var wpName = $(this).children('span').html();
                var wpId = $(this).attr('name');
                var tanchuang = confirm('确认添加该 【' + wpName + '】 工序吗？');
                if (tanchuang == true){
                    if ($('#workingLog').text() == '此处为工序历史记录') {
                        $('#workingLog').text('');
                    };
                    var workingLogHTML = '<div class="gxDivArea"><p name="' + wpId + '"><i class="logDel icon iconfont icon-guanbi2" onclick="removeHistoryRecord($(this));"></i><span class="now_time">' + nowTime() + '</span><span class="wp_name">' + wpName + '</span></p></div>'
                    $('#workingLog').append(workingLogHTML);
                }
            });

        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
           // appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
           initPageInfofromlocal();
        }
        
    });
        
}

//从sqlite中获取日志数据并初始化页面
function initPageInfofromlocal(){
        getTaskplanInfoLocal(fTpid,function(glT){
            $('#fRlistarttime').val(nowTime());//出库时间
            $('#fRlistarttime').attr("name",nowTime());//出库时间
            $('#fEpatime_0_0').val(nowTime());//防溜撤除时间
            $('#fEpatime_0_0').attr("name",nowTime());//防溜撤除时间
            $('#fEpatime_1_0').val(nowTime());//防溜安设时间
            $('#fEpatime_1_0').attr("name",nowTime());//防溜安设时间
            $('#runlineDate').val(nowTime(false,true));//日志日期
        
            if(glT != null){
                $("#fTpworknumber").val(glT.GetF_TPWORKNUMBER());//作业计划号
                $("#fTpnumber").val(glT.GetF_TPNUMBER());//作业任务号
                $("#fTpgroup").val(glT.GetF_TPGROUP());//车辆编组
                $("#fTpsection").val(glT.GetF_TPSECTION());//施工路段
                $("#fTpcontent").val(glT.GetF_TPCONTENT());//施工内容及影响范围
                $("#fTpname").val(glT.GetF_TPNAME());//任务名称
                $("#fTpdate").val(glT.GetF_TPDATE());//任务日期
            }else{
                appcan.window.openToast('任务信息获取失败！', '2000');
                return ;
            }
            
            fEid = glT.GetF_EID();//机车id1
            fEexid = glT.GetF_EEXID();//机车id1
            
            
            getDriverInfoLocal(glT.GetF_TPPERSONNE1(),function(person1){
                $("#fTppersonne1").attr('name',person1.GetF_UID());  //正司机ID
                $("#fTppersonne1").val(person1.GetF_UNAME());//正司机Name 
            });
            getDriverInfoLocal(glT.GetF_TPPERSONNE2(),function(person2){
                $("#fTppersonne2").attr('name',person2.GetF_UID());  //副司机ID
                $("#fTppersonne2").val(person2.GetF_UNAME());//副司机Name
            });
            
            if(glT.GetF_TPPERSONNE3() != "" && glT.GetF_TPPERSONNE3() != null){
                getDriverInfoLocal(glT.GetF_TPPERSONNE3(),function(person3){
                    $("#fRlioperationor").attr('name',person3.GetF_UID());  //实操训练人员ID
                    $("#fRlioperationor").val(person3.GetF_UNAME());//实操训练人员Name
                });
            }else{
                $("#fRlioperationor").attr('name','');  //实操训练人员ID
                $("#fRlioperationor").val('');//实操训练人员Name
            }
            if(glT.GetF_TPPERSONNE4() != "" && glT.GetF_TPPERSONNE4() != null){
                getDriverInfoLocal(glT.GetF_TPPERSONNE4(),function(person4){
                    $("#fRlisteward").attr('name',person4.GetF_UID());  //乘务学习人员ID
                    $("#fRlisteward").val(person4.GetF_UNAME());//乘务学习人员Name
                });
            }else{
                $("#fRlisteward").attr('name','');  //乘务学习人员ID
                $("#fRlisteward").val('');//乘务学习人员Name
            }
            
            //获取工序
            GetWorkingProcedureArrayByTaskId(fTpid,function(workingProcedure){
                var workingHTML = '';
                var a = '';var b = '';
                for (var i=0; i < workingProcedure.length; i++) {
                    if (i == 0) {
                        workingHTML = workingHTML + '<li name="' + workingProcedure[i].GetF_WPID() + '"><img data-name="'+workingProcedure[i].GetF_WPINDEX()+'" src="../img/workGroup/active/'+workingProcedure[i].GetF_WPINDEX()+'.png" /><span class="text-green">' + workingProcedure[i].GetF_WPNAME() + '</span></li>';
                    }else{
                        workingHTML = workingHTML + '<li name="' + workingProcedure[i].GetF_WPID() + '"><img data-name="'+workingProcedure[i].GetF_WPINDEX()+'" src="../img/workGroup/'+workingProcedure[i].GetF_WPINDEX()+'.png" /><span class="text-gray">' + workingProcedure[i].GetF_WPNAME() + '</span></li>';
                    };
                }
                document.getElementById("working").innerHTML = workingHTML;
                
                //工序历史记录
                getWorkingHistoryLocal(fTpid,function(workHistory){
                   var workingLogHTML = "";
                   if(workHistory){
                       for (var i=0; i < workHistory.length; i++) {
                           var workTime = workHistory[i].GetF_WPLTIME();
                           var workName = "";
                           for (var j=0; j < workingProcedure.length; j++) {
                               if(workHistory[i].GetF_WPID() == workingProcedure[j].GetF_WPID()){
                                   workName = workingProcedure[j].GetF_WPNAME();
                               }
                           }
                        workingLogHTML += '<p > <span class="now_time">' + workTime + '</span>&nbsp;<span class="wp_name">' + workName + '</span></p> <br />'
                       }
                   }
                   
                   $('#work_group_history').empty();
                   $('#work_group_history').append(workingLogHTML);
                });
                
                $("#working li").mousedown(function(){
                    //工序高亮
                    //alert($(this).index());
                    var thisLi = $(this).parent().children();
                    for (var i=0; i < thisLi.length; i++) {
                      var workGroupName = thisLi.eq(i).children('img').attr('data-name');
                      if (i == $(this).index()) {
                          thisLi.eq(i).children('img').attr('src','../img/workGroup/active/'+workGroupName+'.png');
                          thisLi.eq(i).children('span').removeClass(' text-gray');
                          thisLi.eq(i).children('span').addClass(' text-green');
                      }else{
                          thisLi.eq(i).children('img').attr('src','../img/workGroup/'+workGroupName+'.png');
                          thisLi.eq(i).children('span').removeClass(' text-green');
                          thisLi.eq(i).children('span').addClass(' text-gray');
                      };
                    };
                    //获取危险源数据
                    // alert($(this).attr('name'))
                    var wpId = $(this).attr('name');
                    
                    var dangerSource = new gltl_dangersource();
                    var array = [1];
                    dangerSource.SetF_WPID(wpId);
                    var selectSQL = dangerSource.GetSelectSQL(false,array);
                    dangerSource.ExecuteSQLByResult(selectSQL, function (json) {
                        //alert(JSON.stringify(json));
                        var fDsnameHTML = "";
                        var danArray = dangerSource.GetEntryArray(json);
                        for(var i= 0;i<danArray.length;i++){
                            fDsnameHTML = fDsnameHTML + '<p>' + (i+1) + '、' + danArray[i].GetF_DSNAME() + '</p><br />';
                        }
                        document.getElementById("fDsname").innerHTML = fDsnameHTML;
                    });
                });
                    
                //工序组添加历史记录
                $("#working li").longPress(function(){
                    var wpName = $(this).children('span').html();
                    var wpId = $(this).attr('name');
                    var tanchuang = confirm('确认添加该 【' + wpName + '】 工序吗？');
                    if (tanchuang == true){
                        if ($('#workingLog').text() == '此处为工序历史记录') {
                            $('#workingLog').text('');
                        };
                        var workingLogHTML = '<div class="gxDivArea"><p name="' + wpId + '"><i class="logDel icon iconfont icon-guanbi2" onclick="removeHistoryRecord($(this));"></i><span class="now_time">' + nowTime() + '</span><span class="wp_name">' + wpName + '</span></p></div>'
                        $('#workingLog').append(workingLogHTML);
                    }
                });
            });
            
            statue=glT.GetF_TPSTATUE();//任务状态
            if(parseInt(statue) > 5 ){
                getLogInfoLocal(fTpid,function(glR){
                    $("#fRlicommand").val(glR.GetF_RLICOMMAND());//调度命令号
                    $('#fRlistarttime').val(glR.GetF_RLISTARTTIME());//出库时间
                    $('#runlineDate').val(glR.GetF_RUNLINEDATE());//日志日期
                    //$('#fRlistarttime').val(data.records[0].fRlistarttime);//出库时间
                    
                    
                    fRliid=glR.GetF_RLIID();//机车运行实例id
                    if(fRliid!=null&&fRliid!=""){//防溜信息
                        //alert("hahahahahah");
                        $('#antiskid_add').empty();
                        $('#antiskid_remove').empty();
                        getRunlineparkingLocal(fRliid,function(runlineParking){
                            for (var i=0; i < runlineParking.length; i++) {
                             // data.records[0].runlineparkingsList[i]   
                             //fEoaactive //动作类型 1:安装 2:撤除
                             //fEpatime;//安装时间
                             //fEpaopertaor;//操作人姓名
                             //fEpaapprover;//确认人姓名
                              var type = runlineParking[i].GetF_EPAACTIVE();
                              var name = type == 1 ?'安设':'撤除';
                              var fEpatime = runlineParking[i].GetF_EPATIME();
                              var fEpaopertaor = runlineParking[i].GetF_EPAOPERTAOR();
                              var fEpaapprover = runlineParking[i].GetF_EPAAPPROVER();
                              var antiskHTML = '<div class="antiskid"><table>' +
                                    '<tr>' +
                                        '<td style="width:7em;"><span class="input-label">防溜' + name + '时间:</span></td>' +
                                        '<td style="width:calc(90% - 7em);" colspan="3"><input id="" class="datatime_window input-text" type="text" name="" value="' + fEpatime + '" readonly="true" /></td>' +
                                        '<td style="width:10%;" rowspan="2">' +
                                    '</td>' +
                                    '</tr>' +
                                    '<tr>' +
                                        '<td><span class="input-label">' + name + '人员:</span></td>' +
                                        '<td style="width:calc(45% - 7em);"><input id="" class="input-text" value="' + fEpaopertaor + '" /></td>' +
                                        '<td style="width:7em;"><span class="input-label">确认人员:</span></td>' +
                                        '<td style="width:calc(45% - 7em);"><input id="" class="input-text" value="' + fEpaapprover + '" /></td>' +
                                    '</tr>' +
                                '</table></div>';
                              if (type == 1) {
                                $('#antiskid_add').append(antiskHTML);
                              } else if(type == 2){
                                $('#antiskid_remove').append(antiskHTML);
                              }
                             
                            }
                            if(parseInt(statue) > 5){
                                $('.antiskid').find('table tr:eq(0) td:eq(2)').remove();
                                $('.antiskid-shell').find('input').addClass('input-readonly');
                                $('.antiskid-shell').find('input').attr('readonly','true');
                                $('.antiskid-shell').find('input').removeClass('datatime_window');
                            }
                        });
                        //获取基础信息
                        getMarkInfoLocal(fRliid,function(runlineExtend){
                            for (var i=0; i < runlineExtend.length; i++) {
                                var itemIndex = runlineExtend[i].GetF_RLIEFIELDINDEX();//
                                switch (~~itemIndex){
                                    case 1://入库时间
                                      $("#rksj").val(runlineExtend[i].GetF_RLIEFIELDVALUE());
                                      break;
                                    case 2://当次走行时间
                                      $("#fRlirunningtime").val(runlineExtend[i].GetF_RLIEFIELDVALUE());
                                      break;
                                    case 3://当次走行公里
                                      $("#fRlirunningmileage").val(runlineExtend[i].GetF_RLIEFIELDVALUE());
                                      break;
                                    case 4://车辆及安全装备状况
                                      $("#clanzbzk").val(runlineExtend[i].GetF_RLIEFIELDVALUE());
                                      break;
                                    case 5://安全预想
                                      $("#aqyx").val(runlineExtend[i].GetF_RLIEFIELDVALUE());
                                      break;
                                    case 6://揭示导入
                                      $("#jsdr").val(runlineExtend[i].GetF_RLIEFIELDVALUE());
                                      break;
                                    case 7://调度命令
                                      $("#ddml").val(runlineExtend[i].GetF_RLIEFIELDVALUE());
                                      break;
                                    case 8://添乘检查意见
                                      $("#tcjcyj").val(runlineExtend[i].GetF_RLIEFIELDVALUE());
                                      break;
                                    case 9://日志日期
                                      $("#runlineDate").val(runlineExtend[i].GetF_RLIEFIELDVALUE());
                                      break;
                                }
                            }
                         });
                     }
                    
                    getRunlineinstanceitemLocal(fRliid,function(stations){
                        //获取站点
                        var stationHTML = '';
                            //alert(data.records[0].station.length)//车站ID
                        for (var i=0; i < stations.length; i++) {
                            stationHTML = stationHTML +
                                '<li><div class="addsite-head">' + stations[i].GetF_SWID() + '</div><div class="addsite-body">' +
                                '<table><tr><td width="30%">进站时间:</td>' +
                                '<td width="70%"><input class="datatime_window addsite-right input-text" value="' + stations[i].GetF_RLLIARRIVETIME() + '" /></td></tr><tr>' +
                                  '<td>出站时间:</td>' +
                                '<td><input class="datatime_window addsite-right input-text" value="' + stations[i].GetF_RLLOUTTIME() + '" /></td></tr></table></div></li>';
                        };
                        if(taskStatus != 6 && taskStatus != 7){
                            stationHTML = stationHTML + '<li onclick="addStation($(this))"><div class="addsite-add"><i class="icon iconfont icon-jiahao"></i><p>添加站点</p></div></li>';
                        }
                        document.getElementById("station").innerHTML = stationHTML;
                        if(taskStatus == 6 || taskStatus == 7){
                            $('.addsite-body').find('input').addClass('input-readonly');
                            $('.addsite-body').find('input').attr('readonly','true');
                            $('.addsite-body').find('input').removeClass('datatime_window');
                        }
                        stationBox();
                    });
                    //station.fRliiid
                });
            }
            
        });
      
        
}


function removeHistoryRecord(obj){
    obj.parents(".gxDivArea").remove();
    
}

//添加站点
function addStation(object){
    var page_Name = pageName();
    selectPageLS(page_Name, 'station_name' + object.index(), 4, '', 0, '');//站点选择页面跳转
    appcan.openWinWithUrl('personnel_select','../personnel_select.html');
    var addStationHTML = '<li>' +
            '<div class="addsite-head" id="station_name' + object.index() + '">选择站点</div>' +
            '<div class="addsite-body">' +
                '<table>' +
                    '<tr>' +
                        '<td width="30%">进站时间:</td>' +
                        '<td width="70%"><input class="datatime_window addsite-right input-text" value="'+nowTime()+'" name="'+nowTime()+'" readonly="true" /></td>' +
                    '</tr>' +
                    '<tr>' +
                        '<td colspan="2"><button onclick="addStationTime($(this))">出站</button></td>' +
                    '</tr>' +
                '</table>' +
            '</div>' +
        '</li>';
    object.before(addStationHTML);
    stationBox();
}
//删除站点
// $('.addsite-head').mousedown(function(){
    // var thisObject = $(this);
    // $(this).longPress(function(){
        // // alert('删除站点');
        // removeParent(thisObject,'li','此站点');//点击的对象，删除的父集对象，对象名称
    // })
// })
//添加出站时间
function addStationTime(object) {
    var nowTimeHTML = '<td>出站时间:</td><td><input class="datatime_window addsite-right input-text" value="'+nowTime()+'" name="'+nowTime()+'" /></td>';
    object.parent().parent().html(nowTimeHTML);
}

//删除站点
function removeStation(object){
    object.parents('.antiskid').remove()
}

//获取当前页面数据为JSON格式
var jsonArray = {};
function logbookJSON(){
    var removeNum = $('#antiskid_remove').children().length;
    var addNum = $('#antiskid_add').children().length;
    if(removeNum != addNum){
        alert("安设与撤除数量不一致，请完善防溜撤除信息！");
        return;
    }
    var runlineinstance = {};//基础信息
    // 'fTpid':'任务ID'
    runlineinstance.fRliprincipal = $("#fTppersonne1").attr('name');  //正司机ID
    runlineinstance.fRlideputy = $("#fTppersonne2").attr('name');  //副司机ID
    runlineinstance.fRlicommand = $("#fRlicommand").val();  //调度命令号
    runlineinstance.fRloperationor = $("#fRlioperationor").attr('name');  //实操训练人员ID
    runlineinstance.fRlisteward = $("#fRlisteward").attr('name');  //乘务学习人员ID
    runlineinstance.fRlistarttime = $("#fRlistarttime").attr('name');  //出库时间
    runlineinstance.fTpid = fTpid;     //任务Id
    
    
    runlineinstance.fRlirunningtime = $("#fRlirunningtime").val();  //本次走行时间
    runlineinstance.fRlirunningmileage = $("#fRlirunningmileage").val();  //本次走行公里
    runlineinstance.fEid1 = fEid;  //机车id1
    runlineinstance.fEid2 = fEexid;  //机车id2
    
    var runlineparking = [];//防溜撤除
    for (var i=0; i < $('#antiskid_remove').children().length; i++) {
        var runlineparkingJSON = {
            'fEpatime':$('#fEpatime_0_' + i).attr('name'),//安装时间
            'fEoaactive':2,
            'fEpapostion':'',//安装位置
            'fEpaopertaor':$('#fEpaopertaor_0_' + i).val(),//确认人姓名
            'fEpaapprover':$('#fEpaapprover_0_' + i).val() //操作人姓名
        };
        runlineparking[i] = runlineparkingJSON;
    };
    for (var i=0; i < $('#antiskid_add').children().length; i++) {
        var runlineparkingJSON = {
            'fEpatime':$('#fEpatime_1_' + i).attr('name'),//安装时间
            'fEoaactive':1,
            'fEpapostion':'',//安装位置
            'fEpaopertaor':$('#fEpaopertaor_1_' + i).val(),//确认人姓名
            'fEpaapprover':$('#fEpaapprover_1_' + i).val() //操作人姓名
        };
        runlineparking[i+$('#antiskid_remove').children().length] = runlineparkingJSON;
    };
    
    var runlineinstanceitem = []//站点
    //console.log($('#station').children().length);
    for (var i=0; i < ($('#station').children().length - 1); i++) {
        var runlineinstanceitemJSON = {
            'fSid':$('#station').children('li:eq('+i+')').find('.addsite-head').attr('name'),//到达车站
            'fRlliarrivetime':$('#station').children('li:eq('+i+')').find('.addsite-right').eq(0).attr('name'),//实际到站时间
            'fRllouttime':$('#station').children('li:eq('+i+')').find('.addsite-right').eq(1).attr('name'),//实际出站时间
            'fSwid':'',//站务工作
            'fRliiid':''//主键
        };
        runlineinstanceitem[i] = runlineinstanceitemJSON;
    };
    
    var workingprocedurelog = []//工序历史记录
    for (var i=1; i < $('#workingLog').find('p').length; i++) {
        var workingprocedurelogJSON = {
            'fTpid':fTpid,
            'fWpid':$('#workingLog').find('p:eq('+i+')').attr('name'),//执行的工序
            'fWpltime':$('#workingLog').find('p:eq('+i+')').find('.now_time').html(),//执行的时间
            'fWplid':''
        };
        workingprocedurelog[i] = workingprocedurelogJSON;
    };
    
    var runlineinstanceextend = []//备注信息
    for (var i=0; i < $('#memo').find('.input-text').length; i++) {
        var runlineinstanceextendJSON = {
            'fieldValue':$('#memo').find('.input-text').eq(i).val(),//内容
            'index':i+1  //序列
        };
        runlineinstanceextend[i] = runlineinstanceextendJSON;
    };
    var runlineinstanceextendJSON2 = {//日志时间
        'fieldValue':$('#runlineDate').val(),//内容
        'index':(runlineinstanceextend.length+1)  //序列
    };
    runlineinstanceextend[runlineinstanceextend.length] = runlineinstanceextendJSON2;
    jsonArray = {
        'runlineinstance':runlineinstance,//基础信息
        'runlineparking':runlineparking,//防溜撤除
        'runlineinstanceitem':runlineinstanceitem,//站点
        'workingprocedurelog':workingprocedurelog,//工序历史记录
        'runlineinstanceextend':runlineinstanceextend//备注信息
        // 'runlineinstanceextend':[
            // {'fieldValue':'入库时间','index':1},//入库时间
            // {'fieldValue':'当次走行时间','index':2},//当次走行时间
            // {'fieldValue':'当次走行公里','index':3},//当次走行公里
            // {'fieldValue':'累计走行时间','index':4},//累计走行时间
            // {'fieldValue':'累计走行公里','index':5},//累计走行公里
            // {'fieldValue':'车辆及安全装备状况','index':6},//车辆及安全装备状况
            // {'fieldValue':'安全预想','index':7},//安全预想
            // {'fieldValue':'揭示导入','index':8},//揭示导入
            // {'fieldValue':'调度命令','index':9},//调度命令
            // {'fieldValue':'添乘检查意见','index':10}//添乘检查意见
        // ]
    };
    //console.log(JSON.stringify(jsonArray))
    // alert(JSON.stringify(jsonArray))
}

//页面信息缓存 数据格式为Json
function cachePageJsonInfo(){
    //获取当前页面数据为JSON格式
    var cachJsonArray = {};
    var runlineinstance = {};//基础信息
    // 'fTpid':'任务ID'
    
    var onlineType = localStorage.getItem('connectStatus');
    if (onlineType == 'offline' ) {
        fEid = localStorage.getItem('offfEid');
        fEexid = localStorage.getItem('offfEexid');
    }
    
    runlineinstance.fTpname = $("#fTpname").val();//任务名称
    runlineinstance.fTpdate = $("#fTpdate").val();//任务日期
    runlineinstance.fTpnumber = $("#fTpnumber").val();//任务编号
    runlineinstance.runlineDate = $("#runlineDate").val();//日志日期
    runlineinstance.fTpgroup = $("#fTpgroup").val();//车辆编组
    runlineinstance.fTpworknumber = $("#fTpworknumber").val();//计划编号
    runlineinstance.fTpsection = $("#fTpsection").val();//施工地段
    runlineinstance.fTpcontent = $("#fTpcontent").val();//施工内容及影响范围
    
    runlineinstance.fRliprincipal = $("#fTppersonne1").attr('name');  //正司机ID
    runlineinstance.fRliprincipalName = $("#fTppersonne1").val();  //正司机名称
    runlineinstance.fRlideputy = $("#fTppersonne2").attr('name');  //副司机ID
    runlineinstance.fRlideputyName = $("#fTppersonne2").val();  //副司机名称
    runlineinstance.fRlicommand = $("#fRlicommand").val();  //调度命令号
    runlineinstance.fRloperationor = $("#fRlioperationor").attr('name');  //实操训练人员ID
    runlineinstance.fRloperationorName = $("#fRlioperationor").val();  //实操训练人员名称
    runlineinstance.fRlisteward = $("#fRlisteward").attr('name');  //乘务学习人员ID
    runlineinstance.fRlistewardName = $("#fRlisteward").val();  //乘务学习人员名称
    runlineinstance.fRlistarttime = $("#fRlistarttime").val();  //出库时间
    runlineinstance.fRlistarttimeName = $("#fRlistarttime").attr('name');  //出库时间
    runlineinstance.fTpid = fTpid;     //任务Id
    
    
    runlineinstance.fRlirunningtime = $("#fRlirunningtime").val();  //本次走行时间
    runlineinstance.fRlirunningmileage = $("#fRlirunningmileage").val();  //本次走行公里
    runlineinstance.fEid1 = fEid;  //机车id1
    runlineinstance.fEid2 = fEexid;  //机车id2
    
    var runlineparking = [];//防溜撤除
    for (var i=0; i < $('#antiskid_remove').children().length; i++) {
        //alert("remove--"+i+"---"+$('#fEpatime_0_' + i).attr('name'));
        var runlineparkingJSON = {
            'fEpatime':$('#fEpatime_0_' + i).attr('name'),//安装时间
            'fEoaactive':2, //撤除
            'fEpapostion':'',//安装位置
            'antiskIndex':i,
            'fEpaopertaor':$('#fEpaopertaor_0_' + i).val(),//确认人姓名
            'fEpaapprover':$('#fEpaapprover_0_' + i).val() //操作人姓名
        };
        runlineparking[i] = runlineparkingJSON;
    };
    for (var i=0; i < $('#antiskid_add').children().length; i++) {
        //alert("add--"+(i+$('#antiskid_add').children().length)+"---"+$('#fEpatime_1_' + i).attr('name'));
        var runlineparkingJSON = {
            'fEpatime':$('#fEpatime_1_' + i).attr('name'),//安装时间
            'fEoaactive':1,  //安设
            'fEpapostion':'',//安装位置
            'antiskIndex':i,
            'fEpaopertaor':$('#fEpaopertaor_1_' + i).val(),//确认人姓名
            'fEpaapprover':$('#fEpaapprover_1_' + i).val() //操作人姓名
        };
        runlineparking[i+$('#antiskid_remove').children().length] = runlineparkingJSON;
    };
    
    var runlineinstanceitem = []//站点
    //console.log($('#station').children().length);
    for (var i=0; i < ($('#station').children().length - 1); i++) {
        var runlineinstanceitemJSON = {
            'fSid':$('#station').children('li:eq('+i+')').find('.addsite-head').attr('name'),//到达车站
            'fSidName':$('#station').children('li:eq('+i+')').find('.addsite-head').text(),//到达车站名称
            'fRlliarrivetime':$('#station').children('li:eq('+i+')').find('.addsite-right').eq(0).attr('name'),//实际到站时间
            'fRllouttime':$('#station').children('li:eq('+i+')').find('.addsite-right').eq(1).attr('name'),//实际出站时间
            'fSwid':'',//站务工作
            'fRliiid':''//主键
        };
        runlineinstanceitem[i] = runlineinstanceitemJSON;
    };
    
    var workingTeamRecord = []//工序
    for(var i=0; i < $('#working').find('li').length; i++){
        //alert($('#working').find('li:eq('+i+')').attr('name')+"----"+i+"-----"+$('#working').find('li:eq('+i+')').find('span').html());
        workingTeamRecordJson = {
            'workingid':$('#working').find('li:eq('+i+')').attr('name'),//工序id
            'workingname':$('#working').find('li:eq('+i+')').find('span').html(),//工序名称
            'workingindex':$('#working').find('li:eq('+i+')').find('img').attr('data-name')//工序名称
        };
        workingTeamRecord[i] = workingTeamRecordJson;
    }
    
    var workingprocedurelog = []//工序历史记录
    for (var i=0; i < $('#workingLog').find('p').length; i++) {
        if($('#workingLog').text() == '此处为工序历史记录') {
          var workingprocedurelogJSON = {
            'fTpid':fTpid,
            'fWpid':$('#workingLog').find('p:eq('+i+')').attr('name'),//执行的工序
            'fWpltime':'',//执行的时间
            'fWpname':'', //工序名称
            'fWplid':''
            };
        }else {
            var workingprocedurelogJSON = {
                'fTpid':fTpid,
                'fWpid':$('#workingLog').find('p:eq('+i+')').attr('name'),//执行的工序
                'fWpltime':$('#workingLog').find('p:eq('+i+')').find('.now_time').html(),//执行的时间
                'fWpname':$('#workingLog').find('p:eq('+i+')').find('.wp_name').html(), //工序名称
                'fWplid':''
            };
        }
        workingprocedurelog[i] = workingprocedurelogJSON;
    };
    
    var runlineinstanceextend = []//备注信息
    for (var i=0; i < $('.memo').find('.input-text').length; i++) {
        var runlineinstanceextendJSON = {
            'fieldValue':$('.memo').find('.input-text').eq(i).val(),//内容
            'index':i+1  //序列
        };
        runlineinstanceextend[i] = runlineinstanceextendJSON;
    };
    var runlineinstanceextendJSON2 = {//日志时间
        'fieldValue':$('#runlineDate').val(),//内容
        'index':(runlineinstanceextend.length+1)  //序列
    };
    runlineinstanceextend[runlineinstanceextend.length] = runlineinstanceextendJSON2;
    cachJsonArray = {
        'runlineinstance':runlineinstance,//基础信息
        'runlineparking':runlineparking,//防溜撤除
        'runlineinstanceitem':runlineinstanceitem,//站点
        'workingprocedurelog':workingprocedurelog,//工序历史记录
        'runlineinstanceextend':runlineinstanceextend,//备注信息
        'workingTeamRecord':workingTeamRecord//工序信息
    };
    return cachJsonArray;
    // alert(JSON.stringify(jsonArray))
}


//保存数据
$('#save').click(function(){
    logbookJSON();
    localStorage.logbookJSON = JSON.stringify(jsonArray);
    //alert(localStorage.logbookJSON);
    // console.log(localStorage.logbookJSON);
});

//提交数据
var ajaxFlag = true;
appcan.button("#submit ", "ani-act", function() {
    
    //logbookJSON()=jsonArray;
    if(ajaxFlag){
        if(($('#workingLog').find('p').length == 0) || ($('#workingLog').text() == '此处为工序历史记录')) {
            alert('请添加工序组');
            return;
        }
        else if ($("#rksj").val() == '') {
            alert('请选择入库时间');
            return;
        }else if ($("#fRlirunningtime").val() == '') {
            alert('请填写当次时间');
            return;
        }else if ($("#fRlirunningmileage").val() == '') {
            alert('请填写当次公里');
            return;
        }
        
        var pageInfo = cachePageJsonInfo();
        var bussinessId = pageInfo.runlineinstance.fTpnumber;
        getFilePaths(bussinessId,0,"div_upload_0",function(){
            $('#note .noteClass').each(function(i){
                getFilePaths($("#fTpnumber").val(),(i+1),"div_upload_"+(i+1),function(){});//备注
            });
        });//调度命令
        
        appcan.gsoft.ajaxUtil.ajax({
            url : '/runlineinstanceManager/saveRunlineinstance.json',
            data : 'jsonArray=' + JSON.stringify(pageInfo),
            success : function(data) {
                //alert(JSON.stringify(data));
                if(data.record == null){
                    alert('提交错误');
                }else {
                    alert("日志提交成功！");
                    ajaxFlag = true;
                    localStorage.setItem('logbookCacheInfo'+fTpid,'');
                    uexWindow.close(0);
                    appcan.window.open({
                        name:'tmpTask_implement2',
                        dataType:0,
                        data:'tmpTask_implement2.html'
                    });
                    
                };
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                //appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
                /*
                var dbHanddle = new DataAccess();
                var sqlArray = logbookSaveSQL(0);
                dbHanddle.ExecuteSQLByTrans(sqlArray);
                alert("日志提交成功！");
                */
                logbookSaveSQL(0);
                ajaxFlag = true;
            }
        });
        ajaxFlag=false;
    }else{
        appcan.window.alert({
            title: '提示',
            content: '数据处理中，请勿重复提交！',
            buttons: '确定'
        });
    }
});
appcan.button("#submit2", "ani-act", function() {
    uexWindow.close(0);
    appcan.window.open({
        name:'task_implement2',
        dataType:0,
        data:'task_implement2.html'
    });
})
$('#btn_history').click(function(){
    if($(this).attr('name') == '编辑'){
        $('.logDel').show();
        $(this).toggleClass("icon-queren");
        $(this).attr('name','确定');
    }else if($(this).attr('name') == '确定') {
        $('.logDel').hide();
        $(this).toggleClass("icon-queren")
        $(this).attr('name','编辑')
    }
})
$('#btn_addsite').click(function(){
    var removesiteHTML = '<div class="removesite">'+
                '<i class="icon iconfont icon-shanchu"></i>'+
            '</div>';
    if($(this).attr('name') == '编辑'){
        $(this).toggleClass("icon-queren");
        $(this).attr('name','确定')
        for (var i=0; i < ($('#station li').length-1); i++) {
            $(removesiteHTML).appendTo($('#station li').eq(i))
        };
        $('#station li:last-child').hide();
    }else if($(this).attr('name') == '确定') {
        $(this).toggleClass("icon-queren");
        $(this).attr('name','编辑')
        $('#station li .removesite').remove()
        $('#station li:last-child').show();
    }
})
$(document).on("click",".removesite",function(){
    if(confirm("确认删除站点吗?")){
        $(this).parents('li').remove();
        stationBox();
    };
});

//站点
function stationBox(){
    var stationWidth = $('#station').parent().width();
    var stationLength = $('#station li').index()+1;
    // alert($('#station li').index())
    if($('#station li').index() > 1){
        $('#station').css('width',(stationWidth/2)*stationLength);
        $('#station li').css('width',stationWidth/2);
    }else{
        $('#station').css('width','100%');
        $('#station li').css('width','50%');
    }
    $("#station").parent().scrollLeft((stationWidth/2)*(stationLength-2));
}

//获取缓存信息 并把信息放置于页面元素中
function getCacheInfoToPage(logbookCacheInfo){
    //var logbookCacheInfo = localStorage.getItem('logbookCacheInfo');
    //任务相关信息
    $("#fTpworknumber").val(logbookCacheInfo.runlineinstance.fTpworknumber);//作业计划号
    $("#fTpnumber").val(logbookCacheInfo.runlineinstance.fTpnumber);//作业任务号
    $("#fTpgroup").val(logbookCacheInfo.runlineinstance.fTpgroup);//车辆编组
    $("#fTpsection").val(logbookCacheInfo.runlineinstance.fTpsection);//施工路段
    $("#fTpcontent").val(logbookCacheInfo.runlineinstance.fTpcontent);//施工内容及影响范围
    $("#fTpname").val(logbookCacheInfo.runlineinstance.fTpname);//任务名称
    $("#fTpdate").val(logbookCacheInfo.runlineinstance.fTpdate);//任务日期
    $("#fTpdate").val(logbookCacheInfo.runlineinstance.runlineDate);//日志日期
    //基本信息    
    $("#fTppersonne1").attr('name',logbookCacheInfo.runlineinstance.fRliprincipal);  //正司机ID
    $("#fTppersonne1").val(logbookCacheInfo.runlineinstance.fRliprincipalName);//正司机姓名
    $("#fTppersonne2").attr('name',logbookCacheInfo.runlineinstance.fRlideputy);  //副司机ID
    $("#fTppersonne2").val(logbookCacheInfo.runlineinstance.fRlideputyName);//正司机姓名
    $("#fRlioperationor").attr('name',logbookCacheInfo.runlineinstance.fRloperationor);  //实操训练人员ID
    $("#fRlioperationor").val(logbookCacheInfo.runlineinstance.fRloperationorName);//正司机姓名
    $("#fRlisteward").attr('name',logbookCacheInfo.runlineinstance.fRlisteward);  //乘务学习人员ID
    $("#fRlisteward").val(logbookCacheInfo.runlineinstance.fRlistewardName);//正司机姓名
    $("#fRlicommand").val(logbookCacheInfo.runlineinstance.fRlicommand);  //调度命令号
    $("#fRlistarttime").val(logbookCacheInfo.runlineinstance.fRlistarttime);  //出库时间
    $("#fRlistarttime").html(logbookCacheInfo.runlineinstance.fRlistarttimeName);  //出库时间
      
    //防溜  
    $('#antiskid_add').empty();
    $('#antiskid_remove').empty();
    for (var i=0; i < logbookCacheInfo.runlineparking.length; i++) {
        var flType = logbookCacheInfo.runlineparking[i].fEoaactive;
        var fEpatime = logbookCacheInfo.runlineparking[i].fEpatime;//安装时间
        var fEpaopertaor = logbookCacheInfo.runlineparking[i].fEpaopertaor;//确认人姓名
        var fEpaapprover = logbookCacheInfo.runlineparking[i].fEpaapprover;//操作人姓名
        var antiskIndex = logbookCacheInfo.runlineparking[i].antiskIndex;//排序
        var fEpatimeID = ''; //时间输入id
        var fEpaopertaorID = ''; //操作人姓名id
        var fEpaapproverID = ''; //确认人姓名id
        var name = '';//防溜名称
        var butHtml = '';
        if (flType == 1) {
            fEpatimeID = 'fEpatime_1_' + antiskIndex; //时间输入id
            fEpaopertaorID = 'fEpaopertaor_1_' + antiskIndex; //操作人姓名id
            fEpaapproverID = 'fEpaapprover_1_' + antiskIndex; //确认人姓名id
            name = '安设';
            butHtml = '<i class="icon iconfont icon-guanbi2 shanchu-btn" onclick="removeParent($(this),\'.antiskid\',\'\')"></i>';
        } else if(flType == 2){
            fEpatimeID = 'fEpatime_0_' + antiskIndex; //时间输入id
            fEpaopertaorID = 'fEpaopertaor_0_' + antiskIndex; //操作人姓名id
            fEpaapproverID = 'fEpaapprover_0_' + antiskIndex; //确认人姓名id
            name = '撤除';
            butHtml = '<i class="icon iconfont icon-guanbi2 shanchu-btn" onclick="removeParent($(this),\'.antiskid\',\'\')"></i>';
        };
        var antiskHTML = '<div class="antiskid"><table>' +
            '<tr>' +
                '<td style="width:7em;"><span class="input-label text_necessary">防溜'+name+'时间:</span></td>' +
                '<td style="width:calc(90% - 7em);" colspan="3"><input id="'+fEpatimeID+'" class="datatime_window input-text" type="text" name="'+fEpatime+'" value="'+fEpatime+'" readonly="true" /></td>' +
                '<td style="width:10%;" rowspan="2">' +butHtml+
            '</td>' +
            '</tr>' +
            '<tr>' +
                '<td><span class="input-label">' + name + '人员:</span></td>' +
                '<td style="width:calc(45% - 7em);"><input id="'+fEpaopertaorID+'" class="input-text" value="' + fEpaopertaor + '" name="' + fEpaopertaor + '"/></td>' +
                '<td style="width:7em;"><span class="input-label">确认人员:</span></td>' +
                '<td style="width:calc(45% - 7em);"><input id="'+fEpaapproverID+'" class="input-text" value="' + fEpaapprover + '" name="' + fEpaopertaor + '"/></td>' +
            '</tr>' +
        '</table></div>';
        if(flType == 1){
            $('#antiskid_add').append(antiskHTML);
        }else if(flType == 2){
            $('#antiskid_remove').append(antiskHTML);
        }
        // '<i class="icon iconfont icon-guanbi2 shanchu-btn" onclick="removeParent($(this),\'.antiskid\',\'\')"></i>' +
    };
    $('#antiskid_add').find('.antiskid:eq(0) i').parent().html('<i class="add_antiskid icon iconfont icon-jiahao" id="1"></i>');
    $('#antiskid_remove').find('.antiskid:eq(0) i').parent().html('<i class="add_antiskid icon iconfont icon-jiahao" id="0"></i>');
    //获取基础信息
    for (var i=0; i < logbookCacheInfo.runlineinstanceextend.length; i++) {
        var itemIndex = logbookCacheInfo.runlineinstanceextend[i].index;//序号
        var inputValue = logbookCacheInfo.runlineinstanceextend[i].fieldValue;//输入框中的值
        switch (itemIndex){
            case 1://入库时间
              $("#rksj").val(inputValue);
              break;
            case 2://当次走行时间
              $("#fRlirunningtime").val(inputValue);
              break;
            case 3://当次走行公里
              $("#fRlirunningmileage").val(inputValue);
              break;
            case 4://车辆及安全装备状况
              $("#clanzbzk").val(inputValue);
              break;
            case 5://安全预想
              $("#aqyx").val(inputValue);
              break;
            case 6://揭示导入
              $("#jsdr").val(inputValue);
              break;
            case 7://调度命令
              $("#ddml").val(inputValue);
              break;
            case 8://添乘检查意见
              $("#tcjcyj").val(inputValue);
              break;
            case 9://日志日期
              $("#runlineDate").val(inputValue);
              break;
        }
    };
    
    //站点runlineinstanceitem
    var addStationHTML = '';
    for (var i=0; i < logbookCacheInfo.runlineinstanceitem.length; i++) {
        var stationId = logbookCacheInfo.runlineinstanceitem[i].fSid;//站点id
        var stationName = logbookCacheInfo.runlineinstanceitem[i].fSidName;//站点名称
        var arrivetime = logbookCacheInfo.runlineinstanceitem[i].fRlliarrivetime//实际到站时间
        var outtime = logbookCacheInfo.runlineinstanceitem[i].fRllouttime//实际出站时间
        addStationHTML += '<li>' +
        '<div class="addsite-head" id="station_name' + i + '" name="'+ stationId +'">'+ stationName +'</div>' +
        '<div class="addsite-body">' +
            '<table>' +
                '<tr>' +
                    '<td width="30%">进站时间:</td>' +
                    '<td width="70%"><input class="datatime_window addsite-right input-text" value="'+arrivetime+'" name="'+arrivetime+'" readonly="true" /></td>' +
                '</tr>' +
                '<tr>';
         if(outtime != null && outtime != ''){
            addStationHTML += '<td>出站时间:</td>' +
                    '<td><input class="datatime_window addsite-right input-text" value="'+outtime+'" name="'+outtime+'" /></td>';
         } else{
            addStationHTML += '<td colspan="2"><button onclick="addStationTime($(this))">出站</button></td>';
         }
                   
         addStationHTML += '</tr>' +
                '</table>' +
            '</div>' +
        '</li>';
        
        
        //document.getElementById("station").innerHTML = addStationHTML;
    }
    addStationHTML += '<li onclick="addStation($(this))">'+
                    '<div class="addsite-add">'+
                        '<i class="icon iconfont icon-jiahao"></i>'+
                        '<p>添加站点</p>'+
                    '</div>'+
                '</li>';
    document.getElementById("station").innerHTML = addStationHTML;
    stationBox();
    //缓存获取工序组列表
    var workingHTML="";
    // alert(JSON.stringify(logbookCacheInfo.workingTeamRecord));
    for (var i=0; i < logbookCacheInfo.workingTeamRecord.length; i++) {
        if (i == 0) {
            workingHTML += '<li name="' + logbookCacheInfo.workingTeamRecord[i].workingid + '"><img data-name="'+logbookCacheInfo.workingTeamRecord[i].workingindex+'" src="../img/workGroup/active/'+logbookCacheInfo.workingTeamRecord[i].workingindex+'.png" /><span class="text-green">' + logbookCacheInfo.workingTeamRecord[i].workingname + '</span></li>';
        }else{
            workingHTML += '<li name="' + logbookCacheInfo.workingTeamRecord[i].workingid + '"><img data-name="'+logbookCacheInfo.workingTeamRecord[i].workingindex+'" src="../img/workGroup/'+logbookCacheInfo.workingTeamRecord[i].workingindex+'.png" /><span class="text-gray">' + logbookCacheInfo.workingTeamRecord[i].workingname + '</span></li>';
        };
    };
    //$("#working").empty();
    document.getElementById("working").innerHTML = workingHTML;
    
    //工序历史记录
    $('#workingLog').empty();
    if(logbookCacheInfo.workingprocedurelog.length == 0 ){
        $('#workingLog').append('<p>此处为工序历史记录</p>');
    }else{
        for (var i=0; i < logbookCacheInfo.workingprocedurelog.length; i++) {
            var wpId = logbookCacheInfo.workingprocedurelog[i].fWpid;//执行的工序iD
            var fWpltime = logbookCacheInfo.workingprocedurelog[i].fWpltime;//执行的时间
            var fWpname = logbookCacheInfo.workingprocedurelog[i].fWpname;//工序名称
            var workingLogHTML = '<div class="gxDivArea"><p name="' + wpId + '"><i class="logDel icon iconfont icon-guanbi2" onclick="removeHistoryRecord($(this));"></i><span class="now_time">' + fWpltime + '</span><span class="wp_name">' + fWpname + '</span></p></div>'
            if(fWpltime == "") {
                $('#workingLog').append('<p>此处为工序历史记录</p>');
            }else {
                $('#workingLog').append(workingLogHTML);
            }
        }
    }
    
    //工序组添加历史记录
    $("#working li").longPress(function(){
        var wpName = $(this).children('span').html();
        var wpId = $(this).attr('name');
        var tanchuang = confirm('确认添加该 【' + wpName + '】 工序吗？');
        if (tanchuang == true){
            if ($('#workingLog').text() == '此处为工序历史记录') {
                $('#workingLog').text('');
            };
            var workingLogHTML = '<div class="gxDivArea"><p name="' + wpId + '"><i class="logDel icon iconfont icon-guanbi2" onclick="removeHistoryRecord($(this));"></i><span class="now_time">' + nowTime() + '</span><span class="wp_name">' + wpName + '</span></p></div>'
            $('#workingLog').append(workingLogHTML);
        }
    });
}

//sqlite 日志保存所涉及的所有需要操作数据库的sql
function logbookSaveSQL(internetType){
    //var logBookPageInfo = cachePageJsonInfo();//获取日志页面数据信息
    var fRlirunningtime = $("#fRlirunningtime").val();
    var fRlirunningmileage = $("#fRlirunningmileage").val();
    var endtime = $("#rksj").val();
    if (fRlirunningtime == "") {
        alert("请填写当次走行时间，此项内容为必填项，内容格式为数值!");
        return false;
    } 
    if (fRlirunningmileage == "") {
        alert("请填写当次走行公里，此项内容为必填项，内容格式为数值!");
        return false;
    }
    if (endtime == "") {
        alert("请填写入库时间，此项内容为必填项!");
        return false;
    }
    var sqlArray = new Array();
    //主体表SQL-runlineinstance 
    var guid = new GUID();
    var glR = new gltl_runlineinstance();
    var frliid = guid.newGUID(); 
    glR.SetF_RLIID(frliid);     //ID
    glR.SetF_RLISTARTTIME($("#fRlistarttime").val());//出库时间
    glR.SetF_RLIENDTIME(endtime);//入库时间
    glR.SetF_RLSID(""); //运行线路方案
    glR.SetF_RLIOPERATIONOR($("#fRlioperationor").attr('name'));//实操训练人员
    glR.SetF_RLISTEWARD($("#fRlisteward").attr('name'));//乘务学习人员
    glR.SetF_RLICOMMAND($("#fRlicommand").val());//调度命令号
    glR.SetF_RLITRAINNUMBER("");//车次号
    glR.SetF_RLIRUNNINGTIME($("#fRlirunningtime").val());//本次行驶小时数
    glR.SetF_RLIRUNNINGMILEAGE($("#fRlirunningmileage").val());//本次行驶里程数
    glR.SetF_TPID(fTpid);//对应的出车任务ID
    glR.SetF_RLIPRINCIPAL($("#fTppersonne1").attr('name'));//正司机
    glR.SetF_RLIDEPUTY($("#fTppersonne2").attr('name'));//副司机
    glR.SetF_RLLCONSUMEOIL("0");//本次行驶消耗燃油
    glR.SetF_TPCODE($("#fTpnumber").val());  //对应的出车任务code
    glR.SetF_EID(fEid);//主车ID 
    glR.SetF_EEXID(fEexid);//副车ID
    glR.SetF_RUNLINEDATE($("#runlineDate").val());//日志日期
    glR.SetF_BISUPLOAD(internetType);//1-服务器同步    0-未同步，只存在于本地
    var glRinsertSQL = glR.GetInsertSQL();
    sqlArray.push(glRinsertSQL);
    
   //工序执行流水  workingprocedurelog
   //var glWinsertSQL = "";
   for(var i=0; i < $('#workingLog').find('p').length; i++){
        var glW = new gltl_workingprocedurelog();
        glW.SetF_WPLID(guid.newGUID());//id
        glW.SetF_TPID(fTpid);//任务ID
        glW.SetF_WPID($('#workingLog').find('p:eq('+i+')').attr('name'));//执行的工序
        glW.SetF_WPLTIME($('#workingLog').find('p:eq('+i+')').find('.now_time').html());//执行的时间
        glW.SetF_BISUPLOAD(internetType);//1-服务器同步    0-未同步，只存在于本地
        var glWinsertSQL = glW.GetInsertSQL();
        sqlArray.push(glWinsertSQL);
    } 
    
    
   //防溜信息  runlineparking
   //var glPinsertSQL = "";
   for (var i=0; i < $('#antiskid_remove').children().length; i++) {//防溜撤除部分
        var glP = new gltl_runlineparking();
        glP.SetF_EPAID(guid.newGUID());//主键
        glP.SetF_RLIID(frliid);//出车实例ID
        glP.SetF_EPATIME($('#fEpatime_0_' + i).attr('name'));//安装时间
        glP.SetF_EPAACTIVE("2");//动作类型 1:安装 2:撤除
        glP.SetF_EPAPOSTION("");//安装位置（目前没有，以备以后使用）
        glP.SetF_EPAOPERTAOR($('#fEpaopertaor_0_' + i).val());//操作人姓名
        glP.SetF_EPAAPPROVER($('#fEpaapprover_0_' + i).val());//确认人姓名
        glP.SetF_BISUPLOAD(internetType);//1-服务器同步    0-未同步，只存在于本地
        var glPinsertSQL = glP.GetInsertSQL();
        sqlArray.push(glPinsertSQL);
    }
    for (var i=0; i < $('#antiskid_add').children().length; i++) {//防溜安装部分
        var glP = new gltl_runlineparking();
        glP.SetF_EPAID(guid.newGUID());//主键
        glP.SetF_RLIID(frliid);//出车实例ID
        glP.SetF_EPATIME($('#fEpatime_1_' + i).attr('name'));//安装时间
        glP.SetF_EPAACTIVE("1");//动作类型 1:安装 2:撤除
        glP.SetF_EPAPOSTION("");//安装位置（目前没有，以备以后使用）
        glP.SetF_EPAOPERTAOR($('#fEpaopertaor_1_' + i).val());//操作人姓名
        glP.SetF_EPAAPPROVER($('#fEpaapprover_1_' + i).val());//确认人姓名
        glP.SetF_BISUPLOAD(internetType);//1-服务器同步    0-未同步，只存在于本地
        var glPinsertSQL = glP.GetInsertSQL();
        sqlArray.push(glPinsertSQL);
    }
    
   
   //站点记录明细 runlineinstanceitem
   //var glIinsertSQL = "";
   for (var i=0; i < ($('#station').children().length - 1); i++) {
       var glI = new gltl_runlineinstanceitem();
       glI.SetF_RLIIID(guid.newGUID());//id
       glI.SetF_RLIID(frliid);//运行线路实例
       glI.SetF_SID($('#station').children('li:eq('+i+')').find('.addsite-head').attr('name'));//到达车站
       glI.SetF_RLLIARRIVETIME($('#station').children('li:eq('+i+')').find('.addsite-right').eq(0).attr('name'));//实际到站时间
       glI.SetF_RLLOUTTIME($('#station').children('li:eq('+i+')').find('.addsite-right').eq(1).attr('name'));//实际出站时间
       glI.SetF_RLLINDEX(i+"");//本次出行站点序号
       glI.SetF_RLLREMARK("");//备注描述
       glI.SetF_SWID("");//站务工作
       glI.SetF_BISUPLOAD(internetType);//1-服务器同步    0-未同步，只存在于本地
       var glIinsertSQL = glI.GetInsertSQL();   
       sqlArray.push(glIinsertSQL);
    }
   
   
   //机车行驶扩展表（备注信息）Runlineinstanceextend
   //var glEinsertSQL = "";
   for (var i=0; i < $('#memo').find('.input-text').length; i++) {
       var glE = new gltl_runlineinstanceextend();
       glE.SetF_RLIEID(guid.newGUID());//ID
       glE.SetF_RLIID(frliid);//主表ID
       glE.SetF_RLIEFIELDNAME("");//字段名称
       glE.SetF_RLIEFIELDTYPE(0);//字段类型（1整型，2字符，3日期，4精度，5二进制）
       glE.SetF_RLIEFIELDVALUE($('#memo').find('.input-text').eq(i).val());//对应的字段值
       glE.SetF_RLIEFIELDINDEX((i+1));//字段显示时的索引
       glE.SetF_RLIEFIELDGROUP(1);//数据分类（暂时只有1类,全为1）
       glE.SetF_BISUPLOAD(internetType);//1-服务器同步    0-未同步，只存在于本地
       var glEinsertSQL = glE.GetInsertSQL();
       sqlArray.push(glEinsertSQL);
    }
    
    var glritend = new gltl_runlineinstanceextend();
    glritend.SetF_RLIEID(guid.newGUID());//ID
    glritend.SetF_RLIID(frliid);//主表ID
    glritend.SetF_RLIEFIELDNAME("");//字段名称
    glritend.SetF_RLIEFIELDTYPE(0);//字段类型（1整型，2字符，3日期，4精度，5二进制）
    glritend.SetF_RLIEFIELDVALUE($('#runlineDate').val());//对应的字段值
    glritend.SetF_RLIEFIELDINDEX(($('#memo').find('.input-text').length+1));//字段显示时的索引
    glritend.SetF_RLIEFIELDGROUP(1);//数据分类（暂时只有1类,全为1）
    glritend.SetF_BISUPLOAD(internetType);//1-服务器同步    0-未同步，只存在于本地
    var glritendinsertSQL = glritend.GetInsertSQL();
    sqlArray.push(glritendinsertSQL);
    
    var taskUpdateSqlstr = new Promise(function(res) {
            if(fTpid){
                taskUpdateSql(fTpid,res);
            }else{res(null);}
    });
    
    var fEidUpdateSqlstr = new Promise(function(res) {
            if(fEid){
                engineUpdateSql(fEid,fRlirunningtime,fRlirunningmileage,res);
            }else{res(null);}
    });
    
    var fEexidUpdateSqlstr = new Promise(function(res) {
            if(fEexid){
                engineUpdateSql(fEexid,fRlirunningtime,fRlirunningmileage,res);
            }else{res(null);}
    });
    
    Promise.all([taskUpdateSqlstr,fEidUpdateSqlstr,fEexidUpdateSqlstr]).then(function(res){
        for(var i = 0; i < res.length;i++){
            if(res[i]){
                sqlArray.push(res[i]);
            }
            
        }
        
        var dataAccHelper = new DataAccess();
        dataAccHelper.ExecuteSQLByTrans(sqlArray, function (error) {
                if(error!= "0"){
                    appcan.window.alert({
                        title: '提示',
                        content: '数据库错误',
                        buttons: '确定'
                    });
                }else{
                   alert("日志提交成功！");
                    uexWindow.close(0);
                   /* appcan.window.open({
                        name:'task_implement2',
                        dataType:0,
                        data:'task_implement2.html'
                    });*/
            }
        });    
        
    });
    
    //var excuteSQL = glRinsertSQL + glWinsertSQL + glPinsertSQL 
    //    + glIinsertSQL + glEinsertSQL + taskUpdateSqlstr 
    //    + fEidUpdateSqlstr + fEexidUpdateSqlstr;
    //glR.ExecuteSQL(insertSQL);
    //glR.ExecuteSQLByTrans(insertSQL); //带事务执行操作
    //return sqlArray;
}

/**
 * 给定任务ID 查询相对应的任务数据
 * 状态值改为 6-会枯未检查
 * 生成更新SQL 返回SQL字符串
 * @param String fTpid 任务ID
 */
function taskUpdateSql(fTpid,callback){
    var glT = new gltl_taskplan();
    glT.SetF_TPID(fTpid);
    //查询返回json结果集合
    glT.ExecuteSQLByResult(glT.GetSelectSQL(), function (json) {
        if(json && json.length != 0){
            //通过ID查询，数据可保证唯一，故只选择数据列表第一条数据
            glT.FillEntry(json[0]);
            glT.SetF_TPSTATUE('6');
            //var taskUpdateSqlstr = glT.GetUpdateSQL();
            var taskUpdateSqlstr = "update gltl_taskplan set F_TPSTATUE='6',F_BISUPLOAD=0 where F_TPID = '"+glT.GetF_TPID()+"'";
            callback(taskUpdateSqlstr);
        }else{
            callback(null);
        } 
    });
    
}

/**
 * 给定机车ID 查询相对应的任务数据
 * 状态值改为 7-回库
 * 生成更新SQL 返回SQL字符串
 * @param String fTpid 任务ID
 */
function engineUpdateSql(feid,runningtime,runningmilege,callback){
    var glE = new gltl_engine();
    glE.SetF_EID(feid);
    //查询返回json结果集合
    glE.ExecuteSQLByResult(glE.GetSelectSQL(), function (json) {
        if(json && json.length != 0){
            //通过ID查询，数据可保证唯一，故只选择数据列表第一条数据
            glE.FillEntry(json[0]);
            //glE实体需要修改的字段设置新的值
            var F_ERUNNINGTIME = parseFloat(glE.GetF_ERUNNINGTIME())+parseFloat(runningtime);
            var F_ERUNNINGMILEAGE = parseFloat(glE.GetF_ERUNNINGMILEAGE())+parseFloat(runningmilege);
            
            var engineUpdateSqlstr = "update gltl_engine set F_ESTATUE = 7,F_ERUNNINGTIME = "+F_ERUNNINGTIME+" ,F_ERUNNINGMILEAGE = "+F_ERUNNINGMILEAGE+" ,F_BISUPLOAD=0 where F_EID = '"+glE.GetF_EID()+"'";
            callback(engineUpdateSqlstr);
        }else{
            callback(null);
        } 
    });
    
}

/**
 *获取任务实体 
 * @param {Object} fTpid
 */
function getTaskplanInfoLocal(fTpid,callback){
    //获取任务信息，初始化页面中关于任务的信息
    var gltask = new gltl_taskplan();
    gltask.SetF_TPID(fTpid);
    var selectSql = gltask.GetSelectSQL();
   // alert(selectSql);
    //查询返回json结果集合
    gltask.ExecuteSQLByResult(selectSql, function (json) {
        if(json && json.length == 0){
            appcan.window.openToast('任务不存在', '2000');
             callback(null);
        }else{
            //通过ID查询，数据可保证唯一，故只选择数据列表第一条数据
            gltask.FillEntry(json[0]);
            callback(gltask);
        }
    });
}
/**
 *获取用户 
 * @param {Object} driverId
 */
function getDriverInfoLocal(driverId,callback){
    var glU = new gltl_user();
    glU.SetF_UID(driverId)
    glU.ExecuteSQLByResult(glU.GetSelectSQL(), function (json) {
        if(json && json.length == 0){
            callback(null);
            appcan.window.openToast('司机不存在', '2000');
        }else{
            glU.FillEntry(json[0]);
            callback(glU);
        }
    });
    
}

/**
 * 根据任务ID获取日志 
 * @param {Object} fTpid
 */
function getLogInfoLocal(fTpid,callback){
    var  glR = new gltl_runlineinstance();
    glR.SetF_TPID(fTpid);
    glR.ExecuteSQLByResult(glR.GetSelectSQL(), function (json) {
        if(json && json.length != 0){
            glR.FillEntry(json[0]);
            callback(glR);
        }else{
            appcan.window.openToast('日志不存在', '2000');
            callback(null);
        } 
    });
   
}

/**
 * 获取工序历史记录 
 * @param {Object} fTpid
 */
function getWorkingHistoryLocal(fTpid,callback){
    var item = new gltl_workingprocedurelog();
    item.SetF_TPID(fTpid);
    item.ExecuteSQLByResult(item.GetSelectSQL(), function (json) {
        if(json && json.length != 0){
            var workHistoryArray = item.GetEntryArray(json);
            callback(workHistoryArray);
        }else{
            callback(null);
        }
    });
    
}

/**
 *获取日志中记录的站点信息 
 * @param {Object} logid
 */
function getRunlineinstanceitemLocal(logid,callback){
    //var item = new gltl_runlineinstanceitem();
   // item.SetF_RLIID(logid);
    //var stations = item.ExecuteSQLByResult(item.GetSelectSQL(false,null));
    //var stationArray = item.GetEntryArray(stations);
    //return stationArray;
    var selectSql = "SELECT a.F_RLIIID,a.F_SID,a.F_RLLIARRIVETIME,a.F_RLIID,s.F_SNAME as F_SWID,a.F_RLLOUTTIME,a.F_RLLREMARK,a.F_RLLINDEX,a.F_BISUPLOAD "
                +"FROM gltl_runlineinstanceitem a LEFT JOIN gltl_station s "
                +"ON a.F_SID = s.F_SID WHERE a.F_RLIID = '"+logid+"' ORDER BY a.F_RLLINDEX ";
    var item = new gltl_runlineinstanceitem();
    g_DataAccHelper.ExecuteSQLByResult(selectSql, function (json) {
        //var gltl_wrok = new gltl_workingprocedure();
        if(json && json.length != 0){
            var stationArray = item.GetEntryArray(json);
            callback(stationArray);
        }else{
            callback(null);
        }
    });
}

/**
 *获取日志中记录的防溜信息 
 * @param {Object} logid
 */
function getRunlineparkingLocal(logid,callback){
    var item = new gltl_runlineparking();
    item.SetF_RLIID(logid);
    item.ExecuteSQLByResult(item.GetSelectSQL(), function (json) {
        if(json && json.length != 0){
            var parkingArray = item.GetEntryArray(json);
            callback(parkingArray);
        }else{
            callback(null);
        } 
    });
    
}


/**
 *获取备注信息 
 * @param {Object} logid
 */
function getMarkInfoLocal(logid,callback){
    var item = new gltl_runlineinstanceextend();
    item.SetF_RLIID(logid);
    item.ExecuteSQLByResult(item.GetSelectSQL(), function (json) {
        if(json && json.length != 0){
            var markinfoArray = item.GetEntryArray(json);
            callback(markinfoArray);
        }else{
            callback(null);
        }
    });
}

/**
 * 
 * @param {Object} taskID 固定工序
 */
function GetWorkingProcedureArrayByTaskId(taskID,callback) {
    var sql = "select a1.* from gltl_workingprocedure a1 inner join gltl_workingproceduregroupitem a2 on a1.F_WPID = a2.F_WPID " +
               "inner join gltl_workingproceduregroup a3 on a2.F_WPGID = a3.F_WPGID where a3.F_WPGID in ( " +
              "select F_WPGID1 from gltl_taskplan where gltl_taskplan.F_TPID = '" + taskID + "' union all " +
              "select F_WPGID from gltl_taskplan where gltl_taskplan.F_TPID = '" + taskID + "') order by a3.F_WPGID,a2.F_WPGINDEX";
    g_DataAccHelper.ExecuteSQLByResult(sql, function (json) {
        if(json && json.length!=0){
           var gltl_wrok = new gltl_workingprocedure();
            var userArray = gltl_wrok.GetEntryArray(json);
            callback(userArray); 
        }else{
            callback(null);
        }
        
    });
}
