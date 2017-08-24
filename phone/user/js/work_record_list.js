 function jumpinspectr(fIprid){
     window.location.href="work_record_detail.html";
     var sessionStorage = window.sessionStorage;   
       sessionStorage.setItem('idKey', fIprid);
 }
 function casualChange(fErid,flowNo){
      window.location.href="work_record_detail.html";
     var sessionStorage = window.sessionStorage;   
       sessionStorage.setItem('fErid', fErid);
       sessionStorage.setItem('flowNo', flowNo);
 }
 function overhaulChange(fEpid,flowNo){
      window.location.href="work_record_detail.html";
     var sessionStorage = window.sessionStorage;   
       sessionStorage.setItem('fEpid', fEpid);
       sessionStorage.setItem('flowNo', flowNo);
 }
 
 function maintainChange(fEmid,emStatus){
    window.location.href="work_record_detail.html";
     var sessionStorage = window.sessionStorage;   
       sessionStorage.setItem('fEmid', fEmid);
       sessionStorage.setItem('emStatus', emStatus);    
 }
 
  function taskChange(fTpid){
    window.location.href="work_record_detail.html";
     var sessionStorage = window.sessionStorage;   
       sessionStorage.setItem('fTpid', fTpid);  
 }
 
 function planChange(record){ //行车计划
     window.location.href="work_record_detail2.html";
     var sessionStorage = window.sessionStorage;   
       sessionStorage.setItem('record', record);  
 }
 
 function maintenanceApplication(fEmid){//维保申请审批
     window.location.href="work_record_detail.html";
     var sessionStorage = window.sessionStorage;   
       sessionStorage.setItem('applyId', fEmid); 
 }
 
 function maintenanceInspection(fEmid){//维保验收审批
     window.location.href="work_record_detail.html";
     var sessionStorage = window.sessionStorage;   
       sessionStorage.setItem('inspectionId', fEmid);  
 }

 function material(fRmid){//我的领料
     window.location.href="my_material_detail.html";
     var sessionStorage = window.sessionStorage;   
       sessionStorage.setItem('fRmid', fRmid);  
 }

//初始化页头、页尾、回退按钮
var public = new Public();
public.header('工作记录',true,true);//显示顶部：标题名，左侧icon，右侧icon
public.footer();//显示底部
public.backBtn();//回退按钮



//获取初始数据
appcan.ready(function() {
    //获取角色
    var userType = appcan.locStorage.getVal("userType");
    if (userType == 1) {
        $('ul.secondNav-list:eq(0)').show();
        
    //日常检查初始数据
    appcan.gsoft.ajaxUtil.ajax({
        url : '/locomotiveInfoManager/inspectionsByUserId.json',
        success : function(data) {
           var records=data.records;
           var lis="";
           for(var i=0;i<records.length;i++){
                 lis+="<li data-src='111' onclick=jumpinspectr('"+records[i].fIprid+"')> "+
                         "   <h4> "+
                         "       <span>"+records[i].nmber+"</span>  "+      //设备编号
                         "       <span>"+records[i].inspectType+"</span> "+  //检查类型
                         "       <span>"+records[i].inspectTime+"</span> "+    //检查时间
                         "  </h4> "+
                         "  <span><i class='icon iconfont icon-xiangyou1 fl-l text-gray'></i></span>"+
                        "</li>";
           }
           $('#inspectUl').html(lis);
           if (lis!='') {
                $('#inspectUl').parents('li').show();
           };
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
        }
    });
    //大修 临修
    appcan.gsoft.ajaxUtil.ajax({
        url : '/eRepairManager/getEngineRepairByUserId.json',
        success : function(data) {
           var records=data.records;
           var overhaulLis="";
           var casualLis="";
           for(var i=0;i<records.length;i++){
                if(records[i].rType==3){//临修
                   casualLis+="<li data-src='#' onclick=casualChange('"+records[i].id+"','"+records[i].recordCode+"')> "+
                            " <h4> "+
                             "  <span>"+records[i].engine.fEplatenmber+"</span> "+     //设备编号
                             "  <span>"+records[i].style+"</span> "+ //修别
                             "  <span>"+(records[i].startTime).split(" ")[0]+"</span> "+ //时间
                           " </h4>"+
                           " <span><i class='icon iconfont icon-xiangyou1 fl-l text-gray'></i></span>"+
                   " </li>";
                   
                            
                }else if(records[i].rType==4){ //大修
                     overhaulLis+=" <li data-src='#' onclick=overhaulChange('"+records[i].id+"','"+records[i].recordCode+"')> "+
                            " <h4> "+
                             "  <span>"+records[i].engine.fEplatenmber+"</span>   "+     //设备编号
                             "  <span>"+records[i].style+"</span> "+ //修别
                             "  <span>"+(records[i].startTime).split(" ")[0]+"</span>  "+ //时间
                           " </h4>"+
                           " <span><i class='icon iconfont icon-xiangyou1 fl-l text-gray'></i></span>"+
                   " </li>";
                   
                            
                }
           }
           if(overhaulLis!=""){
              $('#overhaulUl').html(overhaulLis);
              $('#overhaulUl').parents('li').show();
           }
           if(casualLis!=""){
              $('#casualUl').html(casualLis); 
              $('#casualUl').parents('li').show();
           }
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
        }
    });
    //司机周期保养
     appcan.gsoft.ajaxUtil.ajax({
        url : '/eMainTainManager/getEngineMainTainByUserId.json',
        success : function(data) {
           var records=data.records;
           var lis="";
           for(var i=0;i<records.length;i++){
               if(records[i].maintainCycle){
                   lis+=" <li data-src='#' onclick=maintainChange('"+records[i].fEmid+"','"+records[i].emStatus+"')> "+
                            " <h4> "+
                             "  <span>"+records[i].maintainCycle+"</span>   "+ 
                             "  <span>"+records[i].eName+"</span>   "+     //设备名称
                        /*     "  <span style='display:none'>" + records[i].flowNo + "</span>  " + //鍗曞彿*/
                             "  <span>"+records[i].nmber+"</span> "+ //设备编号
                             "  <span>"+(records[i].startTime).split(" ")[0]+"</span>  "+ //时间
                           " </h4>"+
                           " <span><i class='icon iconfont icon-xiangyou1 fl-l text-gray'></i></span>"+
                   " </li>";
               }
           }
           $('#maintainUl').html(lis);
           if (lis!='') {
                $('#maintainUl').parents('li').show();
           };
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
        }
    });
    //作业任务
    appcan.gsoft.ajaxUtil.ajax({
        url : '/taskplanManager/getTaskplansByUserId.json',
        success : function(data) {
            // console.log(data);
           var records=data.records;
           var lis="";
           for(var i=0;i<records.length;i++){
               var fTpid=records[i].fTpid;
               lis+=" <li data-src='#' onclick=taskChange('"+fTpid+"')> "+
                            " <h4> "+
                             "  <span>"+records[i].fTpname+"</span>   "+ //任务名称
                             "  <span>"+records[i].fTpgroup+"</span> "+ //车辆编组
                             "  <span>"+records[i].fTpdate+"</span>  "+ //任务日期
                           " </h4>"+
                           " <span><i class='icon iconfont icon-xiangyou1 fl-l text-gray'></i></span>"+
                   " </li>";
           }
           $('#taskUl').html(lis);
           if (lis!='') {
                $('#taskUl').parents('li').show();
           };
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
        }
    });
    //行车计划
    appcan.gsoft.ajaxUtil.ajax({
        url : '/gltlDailyplanManager/getGltlDailyplansByUserId.json',
        success : function(data) {
          var records=data.records;
          var lis="";
          if(records){
              for(var i =0 ;i<records.length;i++){
                  lis+=" <li data-src='#' onclick=planChange('"+JSON.stringify(records[i])+"')> "+
                            " <h4> "+
                             "  <span>"+records[i].fDpname+"</span>   "+ //计划名称
                           " </h4>"+
                           " <span><i class='icon iconfont icon-xiangyou1 fl-l text-gray'></i></span>"+
                   " </li>";
              }
              $('#planUl').html(lis);
              if (lis!='') {
                    $('#planUl').parents('li').show();
              };
          }
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
        }
    });
    
    
    
    //我的领料
    appcan.gsoft.ajaxUtil.ajax({
        url : '/FmtunitManager/getPagerFmtunits.json',
        success : function(data) {
           var records=data.records;
           // alert(records);
           var lis="";
           for(var i=0;i<records.length;i++){
               lis+=" <li data-src='#' onclick=material('"+records[i].fRmid+"')> "+
                            " <h4> "+
                             "  <span>"+records[i].fMtid.fMtsname+"</span>   "+ //物料名称
                             "  <span>"+records[i].fRmreceivedate+"</span> "+ //领料时间
                           " </h4>"+
                           " <span><i class='icon iconfont icon-xiangyou1 fl-l text-gray'></i></span>"+
                   " </li>";
           }
           $('#material').html(lis);
           if (lis!='') {
                $('#material').parents('li').show();
           };
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
        }
    });
    
    
    
    
    }else{
        
    $('ul.secondNav-list:eq(1)').show();
    //行车计划
    appcan.gsoft.ajaxUtil.ajax({
        url : '/gltlDailyplanManager/getGltlDailyplansByUserId.json',
        success : function(data) {
          var records=data.records;
          var lis="";
          if(records){
              for(var i =0 ;i<records.length;i++){
                  lis+=" <li data-src='#' onclick=planChange('"+JSON.stringify(records[i])+"')> "+
                            " <h4> "+
                             "  <span>"+records[i].fDpname+"</span>   "+ //计划名称
                           " </h4>"+
                           " <span><i class='icon iconfont icon-xiangyou1 fl-l text-gray'></i></span>"+
                   " </li>";
              }
              $('#planUl').html(lis);
              if (lis!='') {
                    $('#planUl').parents('li').show();
              };
          }
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
        }
    });
    //负责人周期保养
    appcan.gsoft.ajaxUtil.ajax({
        url : '/eMainTainManager/getEngineMainTainCaptainByUserId.json',
        success : function(data) {
           var records=data.records
           if (records) {
               var lis="";
               var inspectedLis="";
               
                for (var i = 0; i < records.length; i++) {
                    if (records[i].falg == 1) {
                        lis += " <li data-src='#' onclick=maintenanceApplication('" + records[i].fEmid + "')> " + " <h4> " + "  <span>维保申请审批</span>   " + "  <span>" + records[i].eName + "</span>   " + //设备名称
                        "  <span>" + records[i].nmber + "</span> " + //设备编号
                        "  <span>" + (records[i].startTime).split(" ")[0] + "</span>  " + //时间
                        " </h4>" + " <span><i class='icon iconfont icon-xiangyou1 fl-l text-gray'></i></span>" + " </li>";
                    } else if (records[i].falg == 2) {
                        inspectedLis += " <li data-src='#' onclick=maintenanceInspection('" + records[i].fEmid + "')> " + " <h4> " + "  <span>维保验收审批</span>   " + "  <span>" + records[i].eName + "</span>   " + //设备名称
                        "  <span>" + records[i].nmber + "</span> " + //设备编号
                        "  <span>" + (records[i].startTime).split(" ")[0] + "</span>  " + //时间
                        " </h4>" + " <span><i class='icon iconfont icon-xiangyou1 fl-l text-gray'></i></span>" + " </li>";
                    } else if (records[i].falg == 3) {
                        if (records[i].eRtype == 3) {
                            if (records[i].falgBool == 1) {
                                
                            //下载图片
                            var flowNo = records[i].flowNo;
                            downloadMobileFile(flowNo,"1","div_download");
                            
                                lis += " <li data-src='#' onclick=casualChange('" + records[i].eRtype + "')> " + " <h4> " + "  <span>临修申请审批</span>   " + "  <span>" + records[i].eName + "</span>   " + //设备名称
                                "  <span>" + records[i].nmber + "</span> " + //设备编号
                                /*"  <span style='display:none'>" + records[i].flowNo + "</span>  " + //鍗曞彿*/
                                "  <span>" + (records[i].startTime).split(" ")[0] + "</span>  " + //时间
                                
                                " </h4>" + " <span><i class='icon iconfont icon-xiangyou1 fl-l text-gray'></i></span>" + " </li>";
                            } else if (records[i].falgBool == 2) {
                                
                            //下载图片
                            var flowNo = records[i].flowNo;
                            downloadMobileFile(flowNo,"1","div_download");
                            
                                inspectedLis += " <li data-src='#' onclick=casualChange('" + records[i].eRtype + "')> " + " <h4> " + "  <span>临修验收审批</span>   " + "  <span>" + records[i].eName + "</span>   " + //设备名称
                                "  <span>" + records[i].nmber + "</span> " + //设备编号
                                "  <span>" + (records[i].startTime).split(" ")[0] + "</span>  " + //时间
                         /*        "  <span style='display:none'>" + records[i].flowNo + "</span>  " + //鍗曞彿*/
                                " </h4>" + " <span><i class='icon iconfont icon-xiangyou1 fl-l text-gray'></i></span>" + " </li>";
                            }
                        } else if (records[i].eRtype == 4) {
                            if (records[i].falgBool == 1) {
                                
                            //下载图片
                            var flowNo = records[i].flowNo;
                            downloadMobileFile(flowNo,"1","div_download");
                            
                                lis += " <li data-src='#' onclick=overhaulChange('" + records[i].eRtype + "')> " + " <h4> " + "  <span>大修申请审批</span>   " + "  <span>" + records[i].eName + "</span>   " + //设备名称
                                "  <span>" + records[i].nmber + "</span> " + //设备编号
                                "  <span>" + (records[i].startTime).split(" ")[0] + "</span>  " + //时间
                          /*      "  <span style='display:none'>" + records[i].flowNo + "</span>  " + //鍗曞彿*/
                                " </h4>" + " <span><i class='icon iconfont icon-xiangyou1 fl-l text-gray'></i></span>" + " </li>";
                            } else if (records[i].falgBool == 2) {
                                
                            //下载图片
                            var flowNo = records[i].flowNo;
                            downloadMobileFile(flowNo,"1","div_download");
                            
                                inspectedLis += " <li data-src='#' onclick=overhaulChange('" + records[i].eRtype + "')> " + " <h4> " + "  <span>大修验收审批</span>   " + "  <span>" + records[i].eName + "</span>   " + //设备名称
                                "  <span>" + records[i].nmber + "</span> " + //设备编号
                                "  <span>" + (records[i].startTime).split(" ")[0] + "</span>  " + //时间
                    /*            "  <span style='display:none'>" + records[i].flowNo + "</span>  " + //鍗曞彿*/
                                " </h4>" + " <span><i class='icon iconfont icon-xiangyou1 fl-l text-gray'></i></span>" + " </li>";
                            }
                        }

                    }
                }

               if (lis!='') {
                    $('#applyMaintenance').html(lis);
                    $('#applyMaintenance').parents('li').show();
               };
               if (inspectedLis!='') {
                    $('#inspectedMaintenance').html(inspectedLis);
                    $('#inspectedMaintenance').parents('li').show();
               };
           };
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
        }
    });
    
    }
    
    
});