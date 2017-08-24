/*********************************/

/*********************************/
  //获取初始数据
appcan.ready(function() {
    // var sessionStorage = window.sessionStorage;
    var fUid = localStorage.getItem('fUid');
    console.log(localStorage.getItem('fUid'));
    if(fUid!=null&&fUid!=""){
        appcan.gsoft.ajaxUtil.ajax({
            url : '/gltlUserManager/getGltlUserByUserId.json',
            data: 'userId='+fUid,
            success : function(data) {
                console.log(data);
                console.log('123');
                var user=data.record.user;
               document.getElementById("fUname").innerHTML = user.fUname==null?"":user.fUname;//姓名
               document.getElementById("fUidcar").innerHTML = user.fUidcar==null?"":user.fUidcar;//身份证号码
               document.getElementById("fUphone").innerHTML = user.fUphone==null?"":user.fUphone;//电话号码
               document.getElementById("fUsex").innerHTML = user.fUsex==null?"":user.fUsex;//性别
               document.getElementById("dtype").innerHTML = user.dtype==null?"":user.dtype;//人员类型
               document.getElementById("ddutie").innerHTML = user.ddutie==null?"":user.ddutie;//等级
               document.getElementById("ddepartment").innerHTML = user.ddepartment==null?"":user.ddepartment;//工作单位
               document.getElementById("workNumber").innerHTML = user.workNumber==null?"":user.workNumber;//工号
               document.getElementById("education").innerHTML = user.education==null?"":user.education;//学历
               document.getElementById("drivingNumber").innerHTML = user.drivingNumber==null?"":user.drivingNumber;//驾驶证号
               document.getElementById("duty").innerHTML = user.duty==null?"":user.duty;//职务
               document.getElementById("fUworktime").innerHTML = user.fUworktime==null?"":user.fUworktime;//参加工作日期
               document.getElementById("ddrivinglicense").innerHTML = user.ddrivinglicense==null?"":user.ddrivinglicense;//驾照类型
               document.getElementById("dfUpoliticalstatus").innerHTML = user.dfUpoliticalstatus==null?"":user.dfUpoliticalstatus;//政治面貌
               document.getElementById("fUaddress").innerHTML = user.fUaddress==null?"":user.fUaddress;//联系地址
               document.getElementById("fUdrivingendtime").innerHTML = "还剩"+user.fUdrivingendtime==null?"":user.fUdrivingendtime+"天到期";//驾照到期时间
               document.getElementById("fUdspecialtypenedtime").innerHTML = "还剩"+ user.fUdspecialtypenedtime==null?"":user.fUdspecialtypenedtime+"天到期";//特种设备到期时间
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
            }
        });
    }else{
         appcan.gsoft.ajaxUtil.ajax({
            url : '/gltlUserManager/getGltlUserByUserId.json',
            success : function(data) {
               var user=data.record.user;
               document.getElementById("fUname").innerHTML = user.fUname==null?"":user.fUname;//姓名
               document.getElementById("fUidcar").innerHTML = user.fUidcar==null?"":user.fUidcar;//身份证号码
               document.getElementById("fUphone").innerHTML = user.fUphone==null?"":user.fUphone;//电话号码
               document.getElementById("fUsex").innerHTML = user.fUsex==null?"":user.fUsex;//性别
               document.getElementById("dtype").innerHTML = user.dtype==null?"":user.dtype;//人员类型
               document.getElementById("ddutie").innerHTML = user.ddutie==null?"":user.ddutie;//等级
               document.getElementById("ddepartment").innerHTML = user.ddepartment==null?"":user.ddepartment;//工作单位
               document.getElementById("workNumber").innerHTML = user.workNumber==null?"":user.workNumber;//工号
               document.getElementById("education").innerHTML = user.education==null?"":user.education;//学历
               document.getElementById("drivingNumber").innerHTML = user.drivingNumber==null?"":user.drivingNumber;//驾驶证号
               document.getElementById("duty").innerHTML = user.duty==null?"":user.duty;//职务
               document.getElementById("fUworktime").innerHTML = user.fUworktime==null?"":user.fUworktime;//参加工作日期
               document.getElementById("ddrivinglicense").innerHTML = user.ddrivinglicense==null?"":user.ddrivinglicense;//驾照类型
               document.getElementById("dfUpoliticalstatus").innerHTML = user.dfUpoliticalstatus==null?"":user.dfUpoliticalstatus;//政治面貌
               document.getElementById("fUaddress").innerHTML = user.fUaddress==null?"":user.fUaddress;//联系地址
               document.getElementById("fUdrivingendtime").innerHTML = "还剩"+user.fUdrivingendtime==null?"":user.fUdrivingendtime+"天到期";//驾照到期时间
               document.getElementById("fUdspecialtypenedtime").innerHTML = "还剩"+ user.fUdspecialtypenedtime==null?"":user.fUdspecialtypenedtime+"天到期";//特种设备到期时间
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
            }
        });
    }
    sessionStorage.removeItem('fUid');
    fUid="";
});