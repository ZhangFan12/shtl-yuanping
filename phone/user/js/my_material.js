var public = new Public();
public.header('我的领料',true,true);//显示顶部：标题名，左侧icon，右侧icon
public.footer();//显示底部
public.backBtn();


appcan.ready(function() {
    var sessionStorage = window.sessionStorage;  
    var fRmid=sessionStorage.getItem('fRmid');
    
    appcan.gsoft.ajaxUtil.ajax({
        url : '/FmtunitManager/getFmtunit.json',
        data:'fRmid='+fRmid,
        success : function(data) {
            // alert(JSON.stringify(data));
            var records=data.record;
            if(records){
                 $('#material01').val(records.fMtid.fMtsname);
                $('#material02').val(records.fRmreceivedate);
                $('#material03').val(records.fEid.fEplatenmber);
                $('#material04').val(records.fEid.fEname);
                $('#material05').val(records.fRmquality);
                $('#material06').val(records.fRmuses);
            }
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
        }
    });
});