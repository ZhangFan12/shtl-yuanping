$('.popup-window,#popup_cancel').click(function(event){
    appcan.window.close(-1);
})
//阻止冒泡
$('.popup').click(function(event){
    event.stopPropagation();
})
$('#popup_confirm').click(function(){
        var oldPassword = $("#oldPassword").val();
        var password = $("#password").val();
        var confirmPassword = $("#confirmPassword").val();
       appcan.gsoft.ajaxUtil.ajax({
        url : '/gltlUserManager/setPassword.json',
        data:"oldPassword="+oldPassword+"&password="+password+"&confirmPassword="+confirmPassword,
        success : function(data) {
            alert(JSON.stringify(data));
            if(data.message==null){
               alert('修改成功！'); 
            }else{
                alert(data.message.info);
            }
            
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
        }
    });
 })