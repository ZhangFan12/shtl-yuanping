//初始化页头、页尾、回退按钮
var taskId="";
var taskStatus="";

var public = new Public();
public.footer();//显示底部
//获取初始数据
appcan.ready(function() {
     var sessionStorage = window.sessionStorage;  
     var fTpid=sessionStorage.getItem('fTpid');
     if(fTpid!=""&&fTpid!=null){
           public.header('行车任务',true,true);//显示顶部：标题名，左侧icon，右侧icon
           public.backBtn();//回退按钮
           taskId=fTpid;
           document.getElementById("task").style.display="";
           document.getElementById("workingGroup").style.display="";
           appcan.gsoft.ajaxUtil.ajax({
            data:'fTpid='+fTpid,
            url : '/locomotiveInfoManager/getDrivingJournal.json',
            success : function(data) {
                var records=data.records;
                if(records){
                    document.getElementById("bicycle").value  = records[0].bicycle;
                    document.getElementById("taskType").value  = records[0].taskType;
                    document.getElementById("fTpname").value = records[0].fTpname;
                    document.getElementById("fTpdate").value = records[0].fTpdate;
                    document.getElementById("fEidNmber").value = records[0].fEidNmber;
                    document.getElementById("fEexidNmber").value = records[0].fEexidNmber;
                    document.getElementById("fTppersonne1Name").value = records[0].fTppersonne1Name;
                    document.getElementById("fRlioperationorName").value = records[0].fRlioperationorName==null?"":records[0].fRlioperationorName;
                    document.getElementById("fTppersonne2Name").value = records[0].fTppersonne2Name==null?"":records[0].fTppersonne2Name;
                    document.getElementById("fRlistewardName").value = records[0].fRlistewardName==null?"":records[0].fRlistewardName;
                    document.getElementById("fTpsection").value = records[0].fTpsection==null?"":records[0].fTpsection;
                    document.getElementById("fTpgroup").value = records[0].fTpgroup==null?"":records[0].fTpgroup;
                    document.getElementById("fTpcontent").value = records[0].fTpcontent==null?"":records[0].fTpcontent;
                   if( records[0].statue==0){
                            taskStatus="待发布";
                        }else if( records[0].statue==1){
                            taskStatus="待确认";
                        }else if( records[0].statue==2){
                            taskStatus="司机已确认";
                        }else if( records[0].statue==4){
                            taskStatus="已确认";
                        }else if( records[0].statue==5){
                            taskStatus="执行中";
                        }else if( records[0].statue==6){
                            taskStatus="车辆回库未检查";
                        }else if( records[0].statue==7){
                            taskStatus="执行完毕";
                        }else if( records[0].statue==3){
                            taskStatus="副司机已确认";
                        }
                    document.getElementById("statue").innerHTML = taskStatus;
                    var working=records[0].working;
                    var workingLi="";
                    for(var i=0;i<working.length;i++){
                        workingLi+='<li onclick=workingChange("'+working[i].wpId+'",$(this))>'+
                        '   <img data-name="'+working[i].fWpindex+'" src="../img/workGroup/active/'+working[i].fWpindex+'.png" />'+
                        '    <span class="text-green">'+working[i].wpName+'</span>'+
                        '</li>';
                    }
                     $('#workingUl').html(workingLi);
                }
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
            }
        });
     }
     fTpid="";
     sessionStorage.removeItem('fTpid');
     var fEmid=sessionStorage.getItem('fEmid');
     var emStatus=sessionStorage.getItem('emStatus');
     if(fEmid!=""&&fEmid!=null&&
        (emStatus=="1" || emStatus=="2" || emStatus=="3" || emStatus=="4" || emStatus=="5" )){
         public.header('维保申请',true,true);//显示顶部：标题名，左侧icon，右侧icon
         public.backBtn();//回退按钮
         document.getElementById("maintenance").style.display="";
           appcan.gsoft.ajaxUtil.ajax({
            data:'id='+fEmid,
            url : '/eMainTainManager/getEngineMainTainByfEmid.json',
            success : function(data) {
                var engineMainTain=data.record.engineMainTain;
                if(engineMainTain){
                   document.getElementById("maintenanceType").value="周期维保";
                   document.getElementById("eName").value=engineMainTain.eName;//名称
                   document.getElementById("nmber").value= engineMainTain.nmber;//编号
                   document.getElementById("model").value= engineMainTain.model;//型号
                   document.getElementById("ferunningtime").value= engineMainTain.ferunningtime;//总共累计行走小时数
                   document.getElementById("ferunningmileage").value= engineMainTain.ferunningmileage;//总共累计行走里程
                   document.getElementById("emCompany").value=engineMainTain.emCompany;//保养单位
                }
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
            }
        });
     }else if(fEmid!=""&&fEmid!=null&&
        (emStatus=="6" || emStatus=="8" || emStatus=="9" || emStatus=="10" || emStatus=="11")){
         public.header('维保验收',true,true);//显示顶部：标题名，左侧icon，右侧icon
         document.getElementById("maintenanceInspection").style.display="";
         document.getElementById("applicationProcess").style.display="";
           appcan.gsoft.ajaxUtil.ajax({
            data:'id='+fEmid,
            url : '/eMainTainManager/getMaintenanceInspectionByfEmid.json',
            success : function(data) {
                var engineMainTain=data.record.engineMainTain;
                if(engineMainTain){
                   document.getElementById("hours").value=engineMainTain.hours;//工时
                   document.getElementById("authRmk").value= engineMainTain.authRmk;//验收情况
                   document.getElementById("authView").value= engineMainTain.authView;//验收意见
                   document.getElementById("uName").value=engineMainTain.uName.fUname;//申请人
                   document.getElementById("startTime").value= engineMainTain.startTime;//申请时间
                   document.getElementById("flowUname").value=engineMainTain.flowUname;//审批人
                   document.getElementById("auditOpinion").value=engineMainTain.auditOpinion;//审核意见
                   var flowNo = engineMainTain.flowNo;
                   downloadMobileFile(flowNo,"2","div_download");
                }
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
            }
        });
     }
     
     sessionStorage.removeItem('fEmid');
     fEmid="";
     sessionStorage.removeItem('emStatus');
     emStatus="";
     var fIprid=sessionStorage.getItem('idKey');
     if(fIprid!=null&&fIprid!=""){
         public.header('日常检查',true,true);//显示顶部：标题名，左侧icon，右侧icon
         public.backBtn();//回退按钮
         document.getElementById("dailyCheck").style.display="";
         var dailyCheck="";
         appcan.gsoft.ajaxUtil.ajax({
            data:'fIprid='+fIprid,
            url : '/locomotiveInfoManager/getRoutineInspection.json',
            success : function(data) {
                var records=data.records;
                for(var i=0;i<records.length;i++){
                   dailyCheck+=" <li>"+records[i].fIpmark+"</li>";//检查项目
                }
                    document.getElementById("checkName").value=records[0].uName;//检查人
                    document.getElementById("fEplatenmber").value=records[0].fEplatenmber;//设备编号
                    document.getElementById("fEstandardmodel").value=records[0].fEstandardmodel;//设备型号
                $('#listview2').html(dailyCheck);
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
            }
        });
     }
     sessionStorage.removeItem('idKey');
     fIprid="";
     
      var fErid=sessionStorage.getItem('fErid');
      var flowNo=sessionStorage.getItem('flowNo');
     if(fErid!=null&&fErid!=""){
         public.header('临修',true,true);//显示顶部：标题名，左侧icon，右侧icon
         public.backBtn();//回退按钮
         document.getElementById("maintenance").style.display="";
         appcan.gsoft.ajaxUtil.ajax({
            data:'id='+fErid,
            url : '/eRepairManager/getEngineRepairByid.json',
            success : function(data) {
                var record=data.record;
                if(record){
                   document.getElementById("maintenanceType").value="临修";
                   document.getElementById("eName").value=record.engine.fEname;//名称
                   document.getElementById("nmber").value= record.engine.fEplatenmber;//编号
                   document.getElementById("model").value= record.engine.fEstandardmodel;//型号
                   document.getElementById("ferunningtime").value= record.engine.ferunningtime;//总共累计行走小时数
                   document.getElementById("ferunningmileage").value= record.engine.ferunningmileage;//总共累计行走里程
                   document.getElementById("emCompany").value=record.engine.fEbuildaddress;//保养单位
                   document.getElementById("style").value=record.style;//修别
                   document.getElementById("reason").value=record.reason;//原因
                   document.getElementById("fEmstatus").value=record.engine.status;//状态
                   downloadMobileFile(flowNo,"1","div_download");
                   //document.getElementById("fEmstatus").innerhtml='('+'asd'+')';//状态
                //   $('#fEmstatus').text('asdf');
                //   $("#img_table").hide();
                }
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
            }
        });
     }
     sessionStorage.removeItem('fErid');
     fErid="";
     
      var fEpid=sessionStorage.getItem('fEpid');
     if(fEpid!=null&&fEpid!=""){
         public.header('大修',true,true);//显示顶部：标题名，左侧icon，右侧icon
         public.backBtn();//回退按钮
         document.getElementById("maintenance").style.display="";
         appcan.gsoft.ajaxUtil.ajax({
            data:'id='+fEpid,
            url : '/eRepairManager/getEngineRepairByid.json',
            success : function(data) {
                var record=data.record;
                if(record){
                   document.getElementById("maintenanceType").value="大修";
                   document.getElementById("eName").value=record.engine.fEname;//名称
                   document.getElementById("nmber").value= record.engine.fEplatenmber;//编号
                   document.getElementById("model").value= record.engine.fEstandardmodel;//型号
                   document.getElementById("ferunningtime").value= record.engine.ferunningtime;//总共累计行走小时数
                   document.getElementById("ferunningmileage").value= record.engine.ferunningmileage;//总共累计行走里程
                   document.getElementById("style").value=record.style;//修别
                   document.getElementById("reason").value=record.reason;//原因
                   document.getElementById("fEmstatus").value=record.engine.status;//状态
                   downloadMobileFile(flowNo,"1","div_download");
              //     $("#img_table").hide();
                }
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
            }
        });
     }
     
     sessionStorage.removeItem('fEpid');
     fEpid="";
     var applyId=sessionStorage.getItem('applyId');
     if(applyId!=null&&applyId!=""){
         public.header('维保申请审批',true,true);//显示顶部：标题名，左侧icon，右侧icon
         public.backBtn();//回退按钮
         document.getElementById("maintenance").style.display="";
           appcan.gsoft.ajaxUtil.ajax({
            data:'id='+applyId,
            url : '/eMainTainManager/getEngineMainTainByfEmid.json',
            success : function(data) {
               var engineMainTain=data.record.engineMainTain;
                if(engineMainTain){
                   document.getElementById("maintenanceType").value="周期维保";
                   document.getElementById("eName").value=engineMainTain.eName;//名称
                   document.getElementById("nmber").value= engineMainTain.nmber;//编号
                   document.getElementById("model").value= engineMainTain.model;//型号
                   document.getElementById("ferunningtime").value= engineMainTain.ferunningtime;//总共累计行走小时数
                   document.getElementById("ferunningmileage").value= engineMainTain.ferunningmileage;//总共累计行走里程
                   document.getElementById("emCompany").value=engineMainTain.emCompany;//保养单位
             //      $("#img_table").hide();
                }
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
            }
        });
     }
     sessionStorage.removeItem('applyId');
     applyId="";
     var inspectionId=sessionStorage.getItem('inspectionId');
     if(inspectionId!=null&&inspectionId!=""){
         public.header('维保验收审批',true,true);//显示顶部：标题名，左侧icon，右侧icon
         public.backBtn();//回退按钮
         document.getElementById("maintenanceInspection").style.display="";
         document.getElementById("applicationProcess").style.display="";
           appcan.gsoft.ajaxUtil.ajax({
            data:'id='+inspectionId,
            url : '/eMainTainManager/getMaintenanceInspectionByfEmid.json',
            success : function(data) {
                var engineMainTain=data.record.engineMainTain;
                if(engineMainTain){
                   document.getElementById("hours").value=engineMainTain.hours;//工时
                   document.getElementById("authRmk").value= engineMainTain.authRmk;//验收情况
                   document.getElementById("authView").value= engineMainTain.authView;//验收意见
                   document.getElementById("uName").value=engineMainTain.uName;//申请人
                   document.getElementById("startTime").value= engineMainTain.startTime;//申请时间
                   document.getElementById("flowUname").value=engineMainTain.flowUname;//审批人
                   document.getElementById("auditOpinion").value=engineMainTain.auditOpinion;//审核意见
                   
                }
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
            }
        });
     }
     sessionStorage.removeItem('inspectionId');
     inspectionId="";
     sessionStorage.removeItem('flowNo');

});

function workingChange(wpId,object){
   appcan.gsoft.ajaxUtil.ajax({
            data:'wpId='+wpId,
            url : '/locomotiveInfoManager/getHazardByWorking.json',
            success : function(data) {
                var records=data.records;
                var fDsname="";
                if(records){
                    for(var i=0;i<records.length;i++){
                        fDsname+="<p>"+records[i].fDsname+"</p>";
                    }
                    $('#fDsname').html(fDsname);
                }
                  
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
            }
        }); 
}


function queryLog(){
    if(taskStatus=="执行完毕"){
       window.location.href="myLogBook.html";
       var localStorage = window.localStorage;   
       localStorage.setItem('taskId', taskId);
        localStorage.setItem('selectPageLS', 7); 
    }else{
        alert("任务未执行完毕,无法查询行车日志！");
    }
}
