var Jl_runlines=null;
// alert($('#text_font_size').css('fontSize'));
appcan.ready(function() {
    var userId = localStorage.getItem('userId');
    var public = new Public2();
    public.header('首页',false,true);//显示顶部：标题名，左侧icon，右侧icon
    public.footer();//显示底部

    init();

    getCarInfo();

    message({isFirst: true});

    // 退出程序
    var c1c = 0;
    uexWindow.setReportKey(0,1);// 拦截后退按钮
    uexWindow.onKeyPressed = function(){ 
        if (c1c > 0) {
            uexWidgetOne.exit();
        }
        else {
            uexWindow.toast(0, 5, '再按一次退出应用', 1000); 
            c1c=1; setTimeout(function(){ c1c=0; }, 2000);
        }
    };
    //角色隐藏显示
    var userType = appcan.locStorage.getVal("userType");
    if (userType == 1) {
        $('#work .secondNav-list').children('li:eq(0)').show();
        $('#work .secondNav-list').children('li:eq(1)').show();
        $('#work .secondNav-list').children('li:eq(2)').show();
        $('#work .secondNav-list').children('li:eq(3)').show();
        $('#work .secondNav-list').children('li:eq(4)').show();
        $('#work .secondNav-list').children('li:eq(5)').show();
        $('#work .secondNav-list').children('li:eq(5)').show();
        $('#work .secondNav-list').children('li:eq(9)').show();
        $('#study .secondNav-list').children('li').show();
        $('#user .secondNav-list').children('li:eq(0)').show();
        $('#user .secondNav-list').children('li:eq(1)').show();
        $('#user .secondNav-list').children('li:eq(2)').show();
        $('#user .secondNav-list').children('li:eq(3)').show();
        $('#user .secondNav-list').children('li:eq(5)').show();
    }else{
        $('#work .secondNav-list').children('li:eq(6)').show();
        $('#work .secondNav-list').children('li:eq(7)').show();
        $('#work .secondNav-list').children('li:eq(8)').show();
        $('#study .secondNav-list').children('li').show();
        $('#user .secondNav-list').children('li:eq(0)').show();
        $('#user .secondNav-list').children('li:eq(1)').show();
        $('#user .secondNav-list').children('li:eq(2)').show();
        $('#user .secondNav-list').children('li:eq(4)').show();
        $('#user .secondNav-list').children('li:eq(5)').show();
    }
    $('#user_type_name').html(appcan.locStorage.getVal("userTypeName"));//角色名称
    $('#driverName2').html(appcan.locStorage.getVal("loginName"));//人员名称
    appcan.gsoft.ajaxUtil.ajax({
        url : '/userCertificateManager/getUserPhotoPathForAPP.json',
        data: 'userid='+userId,
        success : function(data) {
            // alert(JSON.stringify(data));
            if(data.record.file){
                $('#user_message').attr('src',appcan.gsoft.serverUrl + '/common/photo/getPhoto.json?path=' + data.record.file);//人员名称
            }
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
        }
    });
    
    //将本地未上传的数据上传到服务器
    $('#uploadData').on('click',function(){
        var onlineflag = appcan.locStorage.getVal("online");
        if(onlineflag == "offline"){
            var userId = appcan.locStorage.getVal("userId");
            var noLogout = appcan.locStorage.getVal("noLogout"+userId);
            if(noLogout && noLogout == "noLogout"){
                appcan.gsoft.ajaxUtil.nojumpLogout(function(){
                    appcan.gsoft.ajaxUtil.nojumpLogin(function(){
                        uploadData();
                    });
                });
            }else{
                appcan.gsoft.ajaxUtil.nojumpLogin(function(){
                    uploadData();
                });
            }
                
        }
        else if(onlineflag == "online"){
            uploadData();
        }
      /*  else{
            alert("请在有网条件下操作，谢谢！");
            return;
        }
       */ 
    });
    
    /** 将本地未上传的数据上传到服务器
        gltl_runlineinstance 日志主表
        gltl_workingprocedurelog 日志-工序历史
        gltl_runlineparking  防溜
        gltl_runlineinstanceitem  经过站点
        gltl_runlineinstanceextend  扩展表
        
        gltl_taskplan 任务表
        gltl_engine  机车表
    */
    function uploadData(){
        var pEmt = new Promise(function(res) {
            var emt = new gltl_enginemaintian();
            emt.UpLoadDataEx(res);
        });
                            
        var pFn = new Promise(function(res) {
            var fn = new gltl_flownode();
            fn.UpLoadDataEx(res);
        });
                            
        var pmsgh = new Promise(function(res) {
            var msgh = new gltl_messagepush();
            msgh.UpLoadDataEx(res);
        });
                            
        var per = new Promise(function(res) {
            var er = new gltl_enginerepair();
            er.UpLoadDataEx(res);
        });
        
        var pertend = new Promise(function(res) {
            var ertend = new gltl_enginerepairextend();
            ertend.UpLoadDataEx(res);
        });
        
        var prls = new Promise(function(res) {
            var rls = new gltl_runlineinstance();
            rls.UpLoadDataEx(res);
        });
        
        var pwplog = new Promise(function(res) {
            var wplog = new gltl_workingprocedurelog();
            wplog.UpLoadDataEx(res);
        });
        
        var prlp = new Promise(function(res) {
            var rlp = new gltl_runlineparking();
            rlp.UpLoadDataEx(res);
        });
        
        var prlst = new Promise(function(res) {
            var rlst = new gltl_runlineinstanceextend();
            rlst.UpLoadDataEx(res);
        });
        
        var prli = new Promise(function(res) {
            var rli = new gltl_runlineinstanceitem();
            rli.UpLoadDataEx(res);
        });
        
        var ptplan = new Promise(function(res) {
            var tplan = new gltl_taskplan();
            tplan.UpLoadDataEx(res);
        });
        
        var pengine = new Promise(function(res) {
            var engine = new gltl_engine();
            engine.UpLoadDataEx(res);
        });
        
        Promise.all([pEmt, pFn, pmsgh, per, pertend, prli, prlp, prls, prlst, pwplog, ptplan, pengine]).then(function(res){
            //alert(JSON.stringify(res));
            var nolocaldatanum = 0;//无本地数据个数
            var successnum = 0;//成功个数
            var errnum = 0;//失败个数
            for(var i = 0; i < res.length;i++){
                if(res[i]=='0'){
                    successnum++;
                }else if(res[i]=='1'){
                    errnum++;
                }else if(res[i]=='2'){
                    nolocaldatanum++;
                }
                
            }
            
            if(errnum == 0 && successnum != 0){
                alert("数据上传成功");
            }else if(nolocaldatanum != 0 && errnum == 0 && successnum == 0){
                alert("本地无需要上传的数据");
            }
            else{
                alert("数据上传失败");
            }
            
        })
    }
    
    //点击跳转
    $('#work .secondNav-list').children('li').click(function(){
        var src = $(this).attr('data-src');
        if ($(this).index() == 2) {
            //请求任务确认
            appcan.gsoft.ajaxUtil.ajax({
                url : '/gltlTaskplanManager/getTaskInfo.json',
                success : function(data) {
                    // alert(JSON.stringify(data.records[0].taskType));
                    if (data.records[0].hasTask == 1) {
                        if(data.records[0].taskType != 'TE') {
                            localStorage.setItem("taskId",data.records[0].taskId)  //缓存任务id
                            // appcan.openWinWithUrl(src,'work/'+src+'.html');
                            appcan.window.open({
                                 name:src,
                                 dataType:0,
                                 aniId:10,
                                 data:'work/'+src+'.html',
                                 type:4
                            });
                        }else {
                            alert('目前没有需要确认的任务');
                        }
                    }else if (data.records[0].hasTask == 0){
                        alert('目前没有需要确认的任务');
                    };
                },
                error : function(XMLHttpRequest, textStatus, errorThrown) {
                    appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
                }
            });
        }else if($(this).index() == 3){
            //请求任务执行
            appcan.gsoft.ajaxUtil.ajax({
                url : '/gltlTaskplanManager/getTaskInfo.json',
                success : function(data) {
                    // alert(JSON.stringify(data.records[0]));
                    // alert(data.records[0].taskStatus);
                    if ((data.records[0].taskStatus == 2) && (data.records[0].taskType != "TE")) {
                        alert('需等待副司机的确认');
                    }else if ((data.records[0].taskStatus == 3) && (data.records[0].taskType != "TE")) {
                        alert('需等待正司机的确认');
                    }else if ((data.records[0].taskStatus == 4) && (data.records[0].taskType != "TE")) {
                        localStorage.setItem("taskId",data.records[0].taskId)  //缓存任务id
                        // appcan.openWinWithUrl(src,'work/'+src+'.html');
                        appcan.window.open({
                             name:src,
                             dataType:0,
                             aniId:10,
                             data:'work/'+src+'.html',
                             type:4
                        });
                    }else {
                        alert('目前没有需要执行的任务');
                    };
                },
                error : function(XMLHttpRequest, textStatus, errorThrown) {
                   // appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
                   var glT = new gltl_taskplan();
                    var selectSql = "SELECT * FROM  gltl_taskplan WHERE ("
                     +"F_TPPERSONNE1 = '"+userId+"' OR F_TPPERSONNE2 = '"+userId+"') order by F_TPWORKNUMBER desc,F_TPNUMBER desc";
                    
                    glT.ExecuteSQLByResult(selectSql, function (json) {
                        if(json && json.length != 0){
                            glT.FillEntry(json[0]);
                            var taskId = glT.GetF_TPID();
                            var taskStatus = glT.GetF_TPSTATUE();
                            
                            if(parseInt(taskStatus)==2){
                                alert('需等待副司机的确认');
                            }else if(parseInt(taskStatus)==3){
                                alert('需等待正司机的确认');
                            }else if(parseInt(taskStatus)==4){
                                localStorage.setItem("taskId",taskId); //缓存任务id
                                appcan.openWinWithUrl(src,'work/'+src+'.html');
                            }else{
                                alert('目前没有需要执行的任务');
                            }
                        }else{
                            appcan.window.openToast('任务不存在', '2000');
                            return;
                        } 
                    });
                }
            });
        }else if($(this).index() == 4){
            //请求行车日志
           /**
             */
            appcan.gsoft.ajaxUtil.ajax({
                url : '/gltlTaskplanManager/getTaskInfo.json',
                success : function(data) {
                    //alert(JSON.stringify(data.records[0]));
                    //alert(data.records[0].taskStatus);
                    if (5 <= data.records[0].taskStatus && data.records[0].taskStatus <= 7) {
                        //alert("fTpid:"+data.records[0].taskId+"----taskStatus:"+data.records[0].taskStatus);
                        if(data.records[0].taskType == "TE") {
                            alert('目前没有行车日志需要填写');
                        }else {
                            localStorage.setItem("taskId",data.records[0].taskId); //缓存任务id
                            localStorage.setItem("selectPageLS",data.records[0].taskStatus); //任务状态
                            // appcan.openWinWithUrl(src,'work/'+src+'.html');
                            appcan.window.open({
                                 name:src,
                                 dataType:0,
                                 aniId:10,
                                 data:'work/'+src+'.html',
                                 type:4
                            });
                        }
                    }else {
                        alert('目前没有行车日志需要填写');
                    };
                },
                error : function(XMLHttpRequest, textStatus, errorThrown) {
                    //appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
                    var glT = new gltl_taskplan();
                    var selectSql = "SELECT * FROM  gltl_taskplan WHERE ("
                     +"F_TPPERSONNE1 = '"+userId+"' OR F_TPPERSONNE2 = '"+userId+"') order by F_TPWORKNUMBER desc,F_TPNUMBER desc";
                    //+"F_TPPERSONNE1 = '"+userId+"' OR F_TPPERSONNE2 = '"+userId+"') AND F_TPDATE = '"+nowTime()+"'";
                    //var selectSql = "SELECT * FROM  gltl_taskplan WHERE F_TPID = '40288ab55c6148b2015c627c419e0008' ";
                    
                    glT.ExecuteSQLByResult(selectSql, function (json) {
                        if(json && json.length != 0){
                            glT.FillEntry(json[0]);
                            var taskIdtoday = glT.GetF_TPID();
                            var taskStatustoday = glT.GetF_TPSTATUE();
                            //alert("taskId:"+taskId+"--taskStatus:"+taskStatus);
                            if(parseInt(taskStatustoday)>=5){
                                //通过ID查询，数据可保证唯一，故只选择数据列表第一条数据
                                localStorage.setItem("taskId",taskIdtoday); //缓存任务id
                                localStorage.setItem("offfEid",glT.GetF_EID());
                                localStorage.setItem("offfEexid",glT.GetF_EEXID());
                                localStorage.setItem("selectPageLS",taskStatustoday); //任务状态
                                appcan.openWinWithUrl(src,'work/'+src+'.html');
                            }else{
                                alert('目前没有行车日志需要填写');
                            }
                        }else{
                            appcan.window.openToast('任务不存在', '2000');
                            return;
                        } 
                    });
                }
            });
        }else if($(this).index() == 9) {
            appcan.gsoft.ajaxUtil.ajax({
                 url : '/gltlTempTaskplanManager/whereToGo.json',
                success : function(data) {
                    var record = data.record;
                    var fTpid = record.fTpid;
                    localStorage.setItem("taskId",fTpid);
                    var toPage = record.toPage;
                    switch(toPage) {
                        case "newTempTask":
                            appcan.openWinWithUrl('newTempTask', 'work/newTempTask.html');
                            break;
                        case "hasTask":
                            alert("已有计划任务");
                            break;
                        case "outChk":
                            appcan.openWinWithUrl('tmpTask_implement', 'work/tmpTask_implement.html');
                            break;
                        case "logBook":
                            appcan.openWinWithUrl('tmplogbook', 'work/tmplogbook.html');
                            break;
                        case "backChk":
                            appcan.openWinWithUrl('tmpTask_implement2', 'work/tmpTask_implement2.html');
                            break;
                        default:
                            break;
                    }
                }
            });
          }else if($(this).index() == 5){
            // appcan.openWinWithUrl('materiel', 'work/materiel.html');
            appcan.window.open({
                 name:'materiel',
                 dataType:0,
                 aniId:10,
                 data:'work/materiel.html',
                 type:4
            });
        }else if($(this).index() == 1){
            //维保验收申请
            appcan.gsoft.ajaxUtil.ajax({
                url : '/eMainTainManager/getLoginUserAuthAppl.json',
                //showLoading: true,
                success : function(data) {
                    var records = data.records;
                    if (records) {
                        //loading = false;
                        var htmlContent = '';
                        for (var i in records) {
                            var applys = records[i];
                            //alert(JSON.stringify(applys));
                            var small_title = "申请人:"+applys.applyUser+",申请单号:"+applys.flowNo+",申请时间:"+applys.time;
                            htmlContent += '<li data-src="#" id="'+applys.flowNo+'"><h4>'+applys.title+'</h4><small>'+small_title+'</small>'+
                                '<span class="bige"><i class="icon iconfont icon-xiangyou1 fl-l text-gray"></i></span></li>';
                        }
                        if (htmlContent == ''){
                            $('#authApply').empty();
                            alert('目前没有维保验收')
                        }else{
                            $('#authApply').html(htmlContent);
                        }
                    }
                    //loading = false;
                     $('#authApply li').click(function(){
                        //alert($(this).index());
                        var flowNo = $(this).attr("id");
                        appcan.gsoft.ajaxUtil.ajax({
                            url : '/eMainTainManager/getEMCommon.json',
                            data: "flowNo=" + flowNo,
                            success : function(data) {
                                var record = data.record;
                                //alert(JSON.stringify(record));
                                if (record) {
                                    appcan.gsoft.parameterUtils.setPageParams(record);
                                    // appcan.openWinWithUrl('detail', 'work/acceptance/detail.html');
                                    appcan.window.open({
                                         name:'detail',
                                         dataType:0,
                                         aniId:10,
                                         data:'work/acceptance/detail.html',
                                         type:4
                                    });
                                    
                                }
                            },
                            error : function(XMLHttpRequest, textStatus, errorThrown) {
                                appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
                            }
                        });
                        
                    })
                    
                },
                error : function(XMLHttpRequest, textStatus, errorThrown) {
                    appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
                }
            });
        }
        else if($(this).index() == 6){
            //维保申请审批
            appcan.gsoft.ajaxUtil.ajax({
                url : '/eMainTainManager/getLoginUserEMainTain.json',
                //showLoading: true,
                success : function(data) {
                    var records = data.records;
                    if (records) {
                        //loading = false;
                        var htmlContent = '';
                        for (var i in records) {
                            var applys = records[i];
                            //alert(JSON.stringify(applys));
                            var small_title = "申请人:"+applys.applyUser+",申请单号:"+applys.flowNo+",申请时间:"+applys.time;
                            htmlContent += '<li data-src="#" id="'+applys.flowNo+'"><h4>'+applys.title+'</h4><small>'+small_title+'</small>'+
                                '<span class="bige"><i class="icon iconfont icon-xiangyou1 fl-l text-gray"></i></span></li>';
                            
                        }
                        if (htmlContent == ''){
                            $('#maintainlist').empty();
                            alert('目前没有维保申请审批');
                        }else{
                            $('#maintainlist').html(htmlContent);
                        }
                    }
                    //loading = false;
                     $('#maintainlist li').click(function(){
                        //alert($(this).index());
                        var flowNo = $(this).attr("id");
                        appcan.gsoft.ajaxUtil.ajax({
                            url : '/eMainTainManager/getEMCommon.json',
                            data: "flowNo=" + flowNo,
                            success : function(data) {
                                var record = data.record;
                                //alert(JSON.stringify(record));
                                if (record) {
                                    appcan.gsoft.parameterUtils.setPageParams(record);
                                    switch (parseInt(record.apprStatus)) {
                                        case 4:
                                            appcan.openWinWithUrl('detail', 'work/acceptance/detail.html');
                                            break;
                                        case 6:
                                            appcan.openWinWithUrl('acceptance_check', 'work/acceptance/acceptance_check.html');
                                            break;
                                        case 8:
                                            appcan.openWinWithUrl('acceptance_check', 'work/acceptance/acceptance_check.html');
                                            break;
                                        default:
                                            appcan.openWinWithUrl('check', 'work/check/check.html');
                                            break;
                                    }
                                }
                            },
                            error : function(XMLHttpRequest, textStatus, errorThrown) {
                                appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
                            }
                        });
                        
                    })
                    
                },
                error : function(XMLHttpRequest, textStatus, errorThrown) {
                    appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
                }
            });
        }else if($(this).index() == 7){
            //维保验收审批
            appcan.gsoft.ajaxUtil.ajax({
                url : '/eMainTainManager/getLoginUserAuthAppl.json',
                //showLoading: true,
                success : function(data) {
                    var records = data.records;
                    if (records) {
                        //loading = false;
                        var htmlContent = '';
                        for (var i in records) {
                            var applys = records[i];
                            //alert(JSON.stringify(applys));
                            var small_title = "申请人:"+applys.applyUser+",申请单号:"+applys.flowNo+",申请时间:"+applys.time;
                            htmlContent += '<li data-src="#" id="'+applys.flowNo+'"><h4>'+applys.title+'</h4><small>'+small_title+'</small>'+
                                '<span class="bige"><i class="icon iconfont icon-xiangyou1 fl-l text-gray"></i></span></li>';
                            
                        }
                        if (htmlContent == ''){
                            $('#authlist').empty();
                            alert('目前没有维保验收审批')
                        }else{
                            $('#authlist').html(htmlContent);
                        }
                    }
                    //loading = false;
                     $('#authlist li').click(function(){
                        //alert($(this).index());
                        var flowNo = $(this).attr("id");
                        appcan.gsoft.ajaxUtil.ajax({
                            url : '/eMainTainManager/getEMCommon.json',
                            data: "flowNo=" + flowNo,
                            success : function(data) {
                                var record = data.record;
                                //alert(JSON.stringify(record));
                                if (record) {
                                    appcan.gsoft.parameterUtils.setPageParams(record);
                                    switch (parseInt(record.apprStatus)) {
                                        case 4:
                                            appcan.openWinWithUrl('detail', 'work/acceptance/detail.html');
                                            break;
                                        case 6:
                                            appcan.openWinWithUrl('acceptance_check', 'work/acceptance/acceptance_check.html');
                                            break;
                                        case 8:
                                            appcan.openWinWithUrl('acceptance_check', 'work/acceptance/acceptance_check.html');
                                            break;
                                        default:
                                            appcan.openWinWithUrl('check', 'work/check/check.html');
                                            break;
                                    }
                                }
                            },
                            error : function(XMLHttpRequest, textStatus, errorThrown) {
                                appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
                            }
                        });
                        
                    })
                    
                },
                error : function(XMLHttpRequest, textStatus, errorThrown) {
                    appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
                }
            });
        }
        else if($(this).index() == 0 || $(this).index() == 8){
            appcan.openWinWithUrl(src,'work/'+src+'.html');
            appcan.window.open({
                 name:src,
                 dataType:0,
                 aniId:10,
                 data:'work/'+src+'.html',
                 type:4
            });
        };
    })
    // $('#work .secondNav-list').find('.small-list li').click(function(){
        //alert($(this).index());
    // })
    /**
     * 学习
     */
    $('#study .secondNav-list').children('li').click(function(){
        appcan.openWinWithUrl($(this).attr('data-src'),'study/test/'+$(this).attr('data-src')+'.html');
    });
    $('#user_message').click(function(){
        appcan.openWinWithUrl($(this).attr('data-src'),'user/'+$(this).attr('data-src')+'.html');
    });
    $('#user .secondNav-list').children('li').click(function(){
        if ($(this).attr('data-src') == 'password') {
            uexWindow.openPopover($(this).attr('data-src'),'0','user/'+$(this).attr('data-src')+'.html','',0,0,'','','','0',0);
        } else{
            appcan.openWinWithUrl($(this).attr('data-src'),'user/'+$(this).attr('data-src')+'.html');
        };
    });
    appcan.button("#logout", "ani-act", function() {
        logout();
    });
})

function getCarInfo() {
    appcan.gsoft.ajaxUtil.ajax({
        // url: "/CsWindowsManager/ListScal.json",
        url: "/GetDataSourceManager/getDictionary.json",
        success: function (_data) { //1是维保2是大修
            // alert(JSON.stringify(_data.records));
            var scaleArray = _data.records || [0.75,0.90,0.98];
            appcan.gsoft.ajaxUtil.ajax({
                url: "/locomotiveInfoManager/getMaintenance.json",
                success: function (data) { //1是维保2是大修
                    // alert(JSON.stringify(data));
                    var closrArray = ['locomotive-img01'];
                    var length = scaleArray.length;
                    for(var i = 0; i < length; i++) {
                        closrArray.push('locomotive-img0' + (i+2))
                    }
                    var res = data.records;
                    if (!res) return;
                    res.map(function (e) {
                        var res = GetScaleSide(scaleArray, +e.proportion, closrArray)
                        if (e.mpType == 1) {
                            $('#maintenance').attr('src', 'img/' + res + '.png');
                        } else if(e.mpType == 2) {
                            $('#overhaul').attr('src', 'img/' + res + '.png');
                        }
                    });
                    
                    var userId = localStorage.getItem('userId');
                    localStorage.setItem('indexscaleArray'+userId,scaleArray);
                    localStorage.setItem('indexgetMaintenance'+userId,JSON.stringify(data.records));
                }
            });
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            //appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
            var userId = localStorage.getItem('userId');
            var scaleArray = localStorage.getItem('indexscaleArray'+userId);
            var getMaintenance = localStorage.getItem('indexgetMaintenance'+userId);
            var closrArray = ['locomotive-img01'];
            var length = scaleArray.length;
            for(var i = 0; i < length; i++) {
                closrArray.push('locomotive-img0' + (i+2))
            }
            var res = getMaintenance;
            if (!res) return;
            res.map(function (e) {
                var res = GetScaleSide(scaleArray, +e.proportion, closrArray)
                if (e.mpType == 1) {
                    $('#maintenance').attr('src', 'img/' + res + '.png');
                } else if(e.mpType == 2) {
                    $('#overhaul').attr('src', 'img/' + res + '.png');
                }
           });
        }
    });
}

function initParams() {
    appcan.window.on('resume',function () {
        appcan.window.getUrlQuery(function (data) {
            function parseQueryString(url) {
                var obj = {};
                var keyvalue = [];
                var key = "",
                    value = "";
                var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
                for (var i in paraString) {
                    keyvalue = paraString[i].split("=");
                    key = keyvalue[0];
                    value = keyvalue[1];
                    obj[key] = value;
                }
                return obj;
            }
            var _index = parseQueryString(data).foot || '';
            if (!_index) return
            var $index = $('#' + _index);
            if ($index.length) {
                $('.footer li').removeClass('active');
                $('.footer li:[data-name='+_index+']').addClass('active');
                // $(this).addClass('active');
                $('[data-index]').hide();
                $index.show();
                $('.header').find('span').html($('.footer li:[data-name='+_index+']').find('span').html())
            }
        });
    })
}

function goTo(_index) {
    if (!_index) return
    var $index = $('#' + _index);
    if ($index.length) {
        $('.footer li').removeClass('active');
        $('.footer li:[data-name='+_index+']').addClass('active');
        // $(this).addClass('active');
        $('[data-index]').hide();
        $index.show();
        $('.header').find('span').html($('.footer li:[data-name='+_index+']').find('span').html())
    }
}

function Public2(){
    //顶部
    this.header = function(title,leftIcon,rightIcon){
        var leftIconHTML = '';var rightIconHTML = '';
        if (leftIcon){leftIconHTML = '<i class="back-btn icon iconfont icon-xiangzuo1 icon-left text-white"></i>'}
        if (rightIcon){rightIconHTML = '<i class="icon iconfont icon-xinxi icon-right text-white"></i>'}
        var headerHTML = '<div class="header text-center">' +
            leftIconHTML + '<span class="text-white">' + title + '</span>' + rightIconHTML +
        '</div>';
        $('body').append(headerHTML);//插入HTML
    };
    //底部
    this.footer = function(){
        
        var footerHTML = '<ul class="footer">' +
            '<li class="active" data-name="index">' +
                '<i class="icon iconfont icon-shouyefill"></i>' +
                '<span>首页</span>' +
            '</li>' +
            '<li data-name="work">' +
                '<i class="icon iconfont icon-xiangbao"></i>' +
                '<span>工作</span>' +
            '</li>' +
            '<li data-name="study">' +
                '<i class="icon iconfont icon-bangzhuzhongxin"></i>' +
                '<span>学习</span>' +
            '</li>' +
            '<li data-name="user">' +
                '<i class="icon iconfont icon-yonghufill"></i>' +
                '<span>我的</span>' +
            '</li>' +
        '</ul>';
        $('body').append(footerHTML);//插入HTML
        //点击触发
        $('.footer li').click(function(){
            $('.footer li').removeClass('active');
            $(this).addClass('active');
            $('[data-index]').hide();
            $('[data-index]').eq($(this).index()).show();
            
            $('.header').find('span').html($(this).find('span').html())
        })
    };
}
//注销
function logout() {
    // sessionStorage.clear();
    appcan.gsoft.ajaxUtil.logout(true);
    // localStorage.removeItem('session');
}
//初始化
function init(){
    var userType = appcan.locStorage.getVal("userType");
    // alert(userType);
    if (userType == 1) {
        // alert('司机');
        $('#userRole1').css('display','block');
        $('#userRole2').remove();
        // $('div[name="userRole2"]').remove();
        // work(userType);
        // user(userType);
        diverInit()//用户角色：司机
    }else{
        // alert('工队长,科长');       
        $('#userRole2').css('display','block');
        $('#userRole1').remove();
        // $('div[name="userRole1"]').remove();
        // work(userType);
        // user(userType);
        otherInit(userType);//用户角色：其他
    };
}
//用户角色：司机
function diverInit(){
    var startTime = nowTime() + ' 00:00:00';
    var endTime =  nowTime() + ' 23:59:59';
    appcan.gsoft.ajaxUtil.ajax({
        url : "/locomotiveInfoManager/getMileage.json",
        success : function(data) {
            //alert(JSON.stringify(data));
            document.getElementById("mileage").innerHTML = data.records[0].mileage;
            document.getElementById("time").innerHTML = data.records[0].time;
            document.getElementById("mileage2").innerHTML = data.records[0].mileage;
            document.getElementById("time2").innerHTML = data.records[0].time;
            document.getElementById("fuel").innerHTML = data.records[0].fuel;
            document.getElementById("mileageMonth").innerHTML = data.records[0].mileageMonth;
            document.getElementById("timeMonth").innerHTML = data.records[0].timeMonth;
            document.getElementById("mileageMonth2").innerHTML = data.records[0].mileageMonth;
            document.getElementById("timeMonth2").innerHTML = data.records[0].timeMonth;
            document.getElementById("fuelMonth").innerHTML = data.records[0].fuelMonth;
            
            var userId = localStorage.getItem('userId');
            localStorage.setItem('indexgetMileage'+userId,JSON.stringify(data.records[0]));
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            //appcan.window.openToast("服务器连接失败,请检查网络...", '2000');
            var userId = localStorage.getItem('userId');
            var getMileagerecords = JSON.parse(localStorage.getItem('indexgetMileage'+userId));
            if(getMileagerecords){
                document.getElementById("mileage").innerHTML = getMileagerecords.mileage;
                document.getElementById("time").innerHTML = getMileagerecords.time;
                document.getElementById("mileage2").innerHTML = getMileagerecords.mileage;
                document.getElementById("time2").innerHTML = getMileagerecords.time;
                document.getElementById("fuel").innerHTML = getMileagerecords.fuel;
                document.getElementById("mileageMonth").innerHTML = getMileagerecords.mileageMonth;
                document.getElementById("timeMonth").innerHTML = getMileagerecords.timeMonth;
                document.getElementById("mileageMonth2").innerHTML = getMileagerecords.mileageMonth;
                document.getElementById("timeMonth2").innerHTML = getMileagerecords.timeMonth;
                document.getElementById("fuelMonth").innerHTML = getMileagerecords.fuelMonth;
            }
            
            
        }
    });
    appcan.gsoft.ajaxUtil.ajax({
        url : "/locomotiveInfoManager/getEngineByFeid.json",
        success : function(data) {
            //alert(JSON.stringify(data));
            // alert(data.record.engine.fEbuildtime);
            document.getElementById("fEbuildtime").innerHTML = data.record.engine.fEbuildtime;  //时间
            document.getElementById("fEstatue").innerHTML = data.record.engine.fEstatue;  //机车状态
            document.getElementById("fUdties").innerHTML = data.record.engine.fUdties;  //人员等级
            document.getElementById("driverName").innerHTML = '（' + data.record.engine.fUname + '）';  //人员名称
            
            var userId = localStorage.getItem('userId');
            localStorage.setItem('indexgetEngineByFeid'+userId,JSON.stringify(data));
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            //appcan.window.openToast("服务器连接失败,请检查网络...", '2000');
            var userId = localStorage.getItem('userId');
            var getEngineByFeid = JSON.parse(localStorage.getItem('indexgetEngineByFeid'+userId));
            if(getEngineByFeid){
                document.getElementById("fEbuildtime").innerHTML = data.record.engine.fEbuildtime;  //时间
                document.getElementById("fEstatue").innerHTML = data.record.engine.fEstatue;  //机车状态
                document.getElementById("fUdties").innerHTML = data.record.engine.fUdties;  //人员等级
                document.getElementById("driverName").innerHTML = '(' + data.record.engine.fUname + ')';  //人员等级
                
            }
            
        }
    });
    //获取日历数据
    appcan.gsoft.ajaxUtil.ajax({
        url : "/locomotiveInfoManager/getMonthPlan.json",
        data : "startTime="+startTime+"&endTime="+endTime,
        success : function(data) {
            document.getElementById("countTime").innerHTML = data.records.length==0?"0":data.records[0].countTime;
            var dates = new Array();
            for (var i=0; i < data.records.length; i++) {
                a = data.records[i].glTime.split('-'); //修改时间格式
                dates[i] = a[1]+'/'+a[2]+'/'+a[0]
            };
            //alert(dates);
            rili(dates);
            
            var userId = localStorage.getItem('userId');
            localStorage.setItem('indexgetMonthPlan'+userId,JSON.stringify(data));
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            //appcan.window.openToast("服务器连接失败,请检查网络...", '2000');
            var userId = localStorage.getItem('userId');
            var getMonthPlandata = JSON.parse(localStorage.getItem('indexgetMonthPlan'+userId));
            if(getMonthPlandata){
                document.getElementById("countTime").innerHTML = getMonthPlandata.records.length==0?"0":getMonthPlandata.records[0].countTime;
                var dates = new Array();
                for (var i=0; i < getMonthPlandata.records.length; i++) {
                    a = getMonthPlandata.records[i].glTime.split('-'); //修改时间格式
                    dates[i] = a[1]+'/'+a[2]+'/'+a[0]
                };
                //alert(dates);
                rili(dates);
            }
        }
    });
    //获取图标数据
    appcan.gsoft.ajaxUtil.ajax({
        url : "/locomotiveInfoManager/getLocomotive.json",
        data : "startTime="+startTime+"&endTime="+endTime,
        success : function(data) {
            //alert(data.records[0].pName)
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
            tubiao(pName,maintain,maintain,parseInt($('html').css('fontSize'))*0.875);
            
            var userId = localStorage.getItem('userId');
            localStorage.setItem('indexgetLocomotive'+userId,JSON.stringify(data));
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            //appcan.window.openToast("服务器连接失败,请检查网络...", '2000');
            var userId = localStorage.getItem('userId');
            var getLocomotivedata = JSON.parse(localStorage.getItem('indexgetLocomotive'+userId));
            if(getLocomotivedata){
                var pName = new Array();
                var maintain = new Array();
                for (var i=0; i < getLocomotivedata.records.length; i++) {
                    pName[i] = getLocomotivedata.records[i].pName;
                    if (parseInt(getLocomotivedata.records[i].maintain) > 80) {
                        maintain[i] = {y:parseInt(getLocomotivedata.records[i].maintain),color:'#F95867'};
                    } else if (parseInt(getLocomotivedata.records[i].maintain) < 40){
                        maintain[i] = {y:parseInt(getLocomotivedata.records[i].maintain),color:'#03A650'};
                    } else {
                        maintain[i] = {y:parseInt(getLocomotivedata.records[i].maintain),color:'#E9AC4E'};
                    };
                };
                // alert(JSON.stringify(maintain))
                tubiao(pName,maintain,maintain,parseInt($('html').css('fontSize'))*0.875);
            }
            
        }
    });
}

//用户角色：其他
function otherInit(userType){
    var engines=[];
    var userId = localStorage.getItem('userId');
    
    appcan.gsoft.ajaxUtil.ajax({
        url : "/engineger/getAllEngineInfo.json",
        success : function(data) {
            localStorage.setItem('indexgetAllEngineInfo'+userId,JSON.stringify(data));
            var engineRecords = data.records;
            //alert(JSON.stringify(engineRecords));
            for(var i=0;i<engineRecords.length;i++){
                 engines.push(engineRecords[i]);         //eId: 机车id ePlatenumber: 机车编号  eName: 机车名称 eStatue: 机车状态
            }
            if(engines!=null){
                fnName(engines);
            }
            //第一辆机车高亮
            $('#container').find('img:eq(0)').attr('src','img/xingshi-active.png');
            $('#container').find('img:eq(0)').next().css('color','#02a650');
            //初始化第一辆机车信息
            document.getElementById("fEbuildtime").innerHTML = engineRecords[0].ePlatenumber + ' (' + engineRecords[0].eStatue + ')';
            //获取图标数据
            appcan.gsoft.ajaxUtil.ajax({
                url : "/locomotiveInfoManager/getLocomotiveByEngineId.json",
                data : "engineId="+engineRecords[0].eId,
                success : function(data) {
                    localStorage.setItem('indexgetLocomotiveByEngineId'+userId,JSON.stringify(data));
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
                    tubiao(pName,maintain,maintain,parseInt($('html').css('fontSize'))*0.875)
                },
                error : function(XMLHttpRequest, textStatus, errorThrown) {
                    appcan.window.openToast("服务器连接失败,请检查网络...", '2000');
                }
            });
           /* appcan.gsoft.ajaxUtil.ajax({
                url : "/engineger/findByEid.json",
                data: "eid="+engineRecords[0].eid,
                success : function(data) {
                   //alert(JSON.stringify(data));
                   var engineMoveInfo = data.record.engine;
                    // alert("机车名称："+engineMoveInfo.f_ENAME);
                    // alert("机车编号："+engineMoveInfo.f_EPLATENUMBER);
                    // alert("机车状态："+engineMoveInfo.f_DNAME);
                    // alert("路线id："+engineMoveInfo.f_RLSID);
                    // alert("正司机："+engineMoveInfo.f_TPPERSONNE1);
                    // alert("副司机："+engineMoveInfo.f_TPPERSONNE2);
                    // alert("学员："+engineMoveInfo.f_TPPERSONNE3);
                    // alert("操作员："+engineMoveInfo.f_TPPERSONNE4);
                    // alert("出厂时间："+engineMoveInfo.f_EBUILDTIME);
                    // alert("站点集合："+engineMoveInfo.stationList); 
                    var dataArray = [];           
                    for(var i=0;i<engineMoveInfo.stationList.length;i++){
                        var station = engineMoveInfo.stationList[i];
                        dataArray.push(station);
                        //站点id     station.fSid 
                        //站点名               station.fSname
                        //站点编号          station.fSnumber 
                        //到站时间          station.arrivalTime
                        //出站时间          station.outTime
                        //负责人id   station.fUid 
                        //经度                    station.fSlatitude 
                        //维度                    station.fSlongitude
                        //租借人id   station.fTenantid
                    }
                    Jl_runlines= new JL_Runlines('taskContainer','../img/train.png',dataArray,engineMoveInfo);
                    Jl_runlines.load();
                },
                error : function(XMLHttpRequest, textStatus, errorThrown) {
                    appcan.window.openToast("服务器连接失败,请检查网络...", '2000');
                }
            });*/
            appcan.gsoft.ajaxUtil.ajax({
                    url : "/locomotiveInfoManager/getLocomotiveByfEid.json",
                    data : "fEid=" + engineRecords[0].eId,
                    success : function(data) {
                        // alert(JSON.stringify(data));
                        localStorage.setItem('indexgetLocomotiveByfEid'+userId,JSON.stringify(data));
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
            
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            //appcan.window.openToast("服务器连接失败,请检查网络...", '2000');
            var getAllEngineInfodata = JSON.parse(localStorage.getItem('indexgetAllEngineInfo'+userId));
            var getLocomotiveByEngineIddata = JSON.parse(localStorage.getItem('indexgetLocomotiveByEngineId'+userId));
            var getLocomotiveByfEiddata = JSON.parse(localStorage.getItem('indexgetLocomotiveByfEid'+userId));
            if(getAllEngineInfodata){
                var engineRecords = getAllEngineInfodata.records;
                //alert(JSON.stringify(engineRecords));
                for(var i=0;i<engineRecords.length;i++){
                     engines.push(engineRecords[i]);         //eId: 机车id ePlatenumber: 机车编号  eName: 机车名称 eStatue: 机车状态
                }
                if(engines!=null){
                    fnName(engines);
                }
                //第一辆机车高亮
                $('#container').find('img:eq(0)').attr('src','img/xingshi-active.png');
                $('#container').find('img:eq(0)').next().css('color','#02a650');
                //初始化第一辆机车信息
                document.getElementById("fEbuildtime").innerHTML = engineRecords[0].eName + engineRecords[0].ePlatenumber + ' (' + engineRecords[0].eStatue + ')';
            }
            
            if(getLocomotiveByEngineIddata){
                var pName = new Array();
                var maintain = new Array();
                for (var i=0; i < getLocomotiveByEngineIddata.records.length; i++) {
                    pName[i] = getLocomotiveByEngineIddata.records[i].pName;
                    if (parseInt(getLocomotiveByEngineIddata.records[i].maintain) > 80) {
                        maintain[i] = {y:parseInt(getLocomotiveByEngineIddata.records[i].maintain),color:'#F95867'};
                    } else if (parseInt(getLocomotiveByEngineIddata.records[i].maintain) < 40){
                        maintain[i] = {y:parseInt(getLocomotiveByEngineIddata.records[i].maintain),color:'#03A650'};
                    } else {
                        maintain[i] = {y:parseInt(getLocomotiveByEngineIddata.records[i].maintain),color:'#E9AC4E'};
                    };
                };
                tubiao(pName,maintain,maintain,parseInt($('html').css('fontSize'))*0.875);
            }
            
            if(getLocomotiveByfEiddata){
                document.getElementById("mileage").innerHTML = getLocomotiveByfEiddata.records[0].mileage;
                document.getElementById("time").innerHTML = getLocomotiveByfEiddata.records[0].time;
                document.getElementById("fuel").innerHTML = getLocomotiveByfEiddata.records[0].fuel;
                document.getElementById("mileageMonth").innerHTML = getLocomotiveByfEiddata.records[0].mileageMonth;
                document.getElementById("timeMonth").innerHTML = getLocomotiveByfEiddata.records[0].timeMonth;
                document.getElementById("fuelMonth").innerHTML = getLocomotiveByfEiddata.records[0].fuelMonth;  
            }
            
                    
        }
    });
    var driverTable=document.getElementById("driver");
    appcan.gsoft.ajaxUtil.ajax({
        url : "/locomotiveInfoManager/getDrivers.json",
        data:"userType="+userType,
        success : function(data) {
            localStorage.setItem('indexgetDrivers'+userId,JSON.stringify(data));
            var drives=data.records;
            var driverTr="<thead><tr>"+
                            "<th>姓名</th>"+
                            "<th>状态</th>"+
                            "<th>等级</th>"+
                            "<th>驾照到期</th>"+
                        "</tr></thead>";
            driverTr+="<tbody>";
            for(var i=0;i<drives.length;i++){
               driverTr+="<tr>"+
              "<td>"+drives[i].fUname+"</td>"+
              "<td>"+drives[i].itemCaption+"</td>"+
              "<td>"+drives[i].fUduties+"</td>";
              if (drives[i].fUdrivingegendtime < drives[i].fUdspecialtypeendtime) {
                driverTr+="<td>"+drives[i].fUdrivingegendtime+"天</td>";/*驾照*/
              }else{
                driverTr+="<td>"+drives[i].fUdspecialtypeendtime+"天</td>";/*特种驾照*/
              };
              driverTr+="</tr>";
            }
            driverTr+="</tbody>";
            driverTable.innerHTML=driverTr;
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            //appcan.window.openToast("服务器连接失败,请检查网络...", '2000');
            var getDriversdata = JSON.parse(localStorage.getItem('indexgetDrivers'+userId));
            if(getDriversdata){
                var drives=getDriversdata.records;
                var driverTr="<thead><tr>"+
                                "<th>姓名</th>"+
                                "<th>状态</th>"+
                                "<th>等级</th>"+
                                "<th>驾照到期时间</th>"+
                            "</tr></thead>";
                driverTr+="<tbody>";
                for(var i=0;i<drives.length;i++){
                   driverTr+="<tr>"+
                  "<td>"+drives[i].fUname+"</td>"+
                  "<td>"+drives[i].itemCaption+"</td>"+
                  "<td>"+drives[i].fUduties+"</td>";
                  if (drives[i].fUdrivingegendtime < drives[i].fUdspecialtypeendtime) {
                    driverTr+="<td>驾照到期，还差"+drives[i].fUdrivingegendtime+"天</td>";
                  }else{
                    driverTr+="<td>特种驾照到期，还差"+drives[i].fUdspecialtypeendtime+"天</td>";
                  };
                  driverTr+="</tr>";
                }
                driverTr+="</tbody>";
                driverTable.innerHTML=driverTr;
            }
        }
    });
    
    // appcan.gsoft.ajaxUtil.ajax({
        // url : "/engineger/getAllEngineInfo.json",
        // success : function(data) {
            // localStorage.setItem('indexgetAllEngineInfo2'+userId,JSON.stringify(data));
            // var engines2 = [];
            // var engineRecords = data.records;
            // //alert(engineRecords)
            // for(var i=0;i<engineRecords.length;i++){
                 // engines2.push(engineRecords[i]);         //eId: 机车id ePlatenumber: 机车编号  eName: 机车名称 eStatue: 机车状态
            // }
            // // appcan.ready(function() {
            // var MapCenterLnt = 114.280271;   //经度
            // var MapCenterLat = 30.564934;    //纬度
            // var MapScalce = 15;              //地图缩放级别
            // var EntryImagePicPath = "img/object.pic";
            // mapControl = new JL_MapControlByBaiDu("mapControl","实时数据请求url", "历史路径数据请求url", MapCenterLnt, MapCenterLat, MapScalce, EntryImagePicPath, engines2);
            // /**
             // * 加载地图数据
             // */
            // mapControl.Load();
        // },
        // error : function(XMLHttpRequest, textStatus, errorThrown) {
            // //appcan.window.openToast("服务器连接失败,请检查网络...", '2000');
            // var getAllEngineInfo2data = JSON.parse(localStorage.getItem('indexgetAllEngineInfo2'+userId));
            // if(getAllEngineInfo2data){
                // var engines2 = [];
                // var engineRecords = getAllEngineInfo2data.records;
                // //alert(engineRecords)
                // for(var i=0;i<engineRecords.length;i++){
                     // engines2.push(engineRecords[i]);         //eId: 机车id ePlatenumber: 机车编号  eName: 机车名称 eStatue: 机车状态
                // }
                // // appcan.ready(function() {
                // var MapCenterLnt = 114.280271;   //经度
                // var MapCenterLat = 30.564934;    //纬度
                // var MapScalce = 15;              //地图缩放级别
                // var EntryImagePicPath = "img/object.pic";
                // mapControl = new JL_MapControlByBaiDu("mapControl","实时数据请求url", "历史路径数据请求url", MapCenterLnt, MapCenterLat, MapScalce, EntryImagePicPath, engines2);
                // /**
                 // * 加载地图数据
                 // */
                // mapControl.Load();
            // }
        // }
    // }); 
    // })

    // $('#mapControl').hide();
    // $('#btn_car_list').click(function(){
        // $('#container').show();
        // $('#mapControl').hide();
        // $(this).addClass('active');
        // $('#btn_car_map').removeClass('active');
    // });
    // $('#btn_car_map').click(function(){
        // $('#container').hide();
        // $('#mapControl').show();
        // $(this).addClass('active');
        // $('#btn_car_list').removeClass('active');
    // });
    
    $('#btn_car_map').click(function(){
        appcan.openWinWithUrl('map','map.html');
    });
}

function fnName(result){
    var infoArray = [];
    for(var i=0;i<result.length;i++)
    {
        var info = new DivInfo("","img/xingshi.png",result[i].eId,result[i].ePlatenumber,result[i].eStatue,result[i].eStatus);
        infoArray.push(info);
    }
    var frame = new DivDisplayFrame("container", 6, infoArray);
    frame.Load();
}

//图表
function tubiao(pName,y1,y2,fontSize) {
    Highcharts.chart('engine_echart', {
        chart: {
            marginTop: 60,
            type: 'column'
        },
        xAxis: {
            // categories: pName,
            categories: [
                '发动机',
                '离合器',
                '机械变速箱',
                '换向箱'
            ],
            gridLineWidth: 1,
            tickLength: 0,
            labels: {
                style: {
                    fontSize: fontSize
                },
                y: fontSize*1.5
            }
        },
        scrollbar: {
            enabled: true
        },
        yAxis: {
            min: 0,
            max: 100,
            tickAmount: 5,
            title: {text: null},//取消y轴名称
            labels: {//y轴刻度文字标签  
                formatter: function () {  
                    return this.value + '%';//y轴加上%  
                },
                style: {
                    fontSize: fontSize
                }
            },
        },
//          tooltip: {
//              headerFormat: '<span style='font-size:10px'>{point.key}</span><table>',
//              pointFormat: '<tr><td style='color:{series.color};padding:0'>{series.name}: </td>' +
//                  '<td style='padding:0'><b>{point.y:.1f} mm</b></td></tr>',
//              footerFormat: '</table>',
//              shared: true,
//              useHTML: true
//          },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: '时间',
            data: y1,
            // data: [
                // {y:71.5,color:'#f95665'},
                // {y:71.5,color:'#f95665'},
                // {y:71.5,color:'#f95665'},
                // {y:71.5,color:'#f95665'}
            // ],
            dataLabels: {
                enabled: true,
                format: '时间',
                style: {
                    fontSize: fontSize*0.75,
                    fontWeight: 100
                }
            }
            }, {
            name: '里程',
            data: y2,
            dataLabels: {
                enabled: true,
                format: '里程',
                style: {
                    fontSize: fontSize*0.75,
                    fontWeight: 100
                }
            }
        }],
        title: {text: ''},//取消标题显示
        legend: {enabled: false},//取消图例
        credits: {enabled: false},//取消版权信息
        exporting: {enabled: false}//取消导出模块
    });
};


//list页面传值缓存
function listPageLS(pageName){
    localStorage.removeItem('selectPageLS')
    var selectPageLS = pageName;
    localStorage.setItem('selectPageLS',selectPageLS);
}

//获取当前日期
function nowTime(){
    function p(s) {return s < 10 ? '0' + s: s;}
    var myDate = new Date();
    var year=myDate.getFullYear(); //获取当前年
    var month=myDate.getMonth()+1; //获取当前月
    var date=myDate.getDate();     //获取当前日
    var now=year+'-'+p(month)+"-"+p(date);
    return now
}