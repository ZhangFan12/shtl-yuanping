function jumpAnswer(farid){
     window.location.href="study_result_detail.html";
     appcan.gsoft.parameterUtils.setPageParams(farid); 
}

  //获取初始数据
appcan.ready(function() {
    // var sessionStorage = window.sessionStorage;  
    var userId = localStorage.getItem('loginUserId');
    if(userId!=null&&userId!=""){
        appcan.gsoft.ajaxUtil.ajax({
            url : '/answerStatManager/sumScores.json',
            data:'userId='+userId,
            success : function(data) {
               var records=data.records;
               // alert(JSON.stringify(records));
               var lis="";
               for(var i=0;i<records.length;i++){
                   var farid = records[i].farid;
                   lis+= "<li onclick=jumpAnswer('"+farid+"') > ";
                   
                   if (records[i].subjectName == '每日答题') {
                       lis+= "   <img src='../img/index/daily-answer.png'/> ";
                   }else if (records[i].subjectName == '每周知识'){
                       lis+= "   <img src='../img/index/weekly-knowledge.png'/> ";
                   }else if (records[i].subjectName == '每月一考'){
                       lis+= "   <img src='../img/index/monthly-exam.png'/> ";
                   };
                   
                   lis+= "   <h3>"+records[i].subjectName+"</h3> "+
                         "    <small>"+records[i].farendtime+"</small> "+
                         "    <span><span class='font-size2 text-green'>"+records[i].correct+"%</span>&nbsp;正确率</span> "+
                         " </li>";
               }
               $('#ulList').html(lis);
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
            }
        });
    }else{
        appcan.gsoft.ajaxUtil.ajax({
            url : '/answerStatManager/sumScores.json',
            success : function(data) {
               var records=data.records;
               // alert(JSON.stringify(records));
               var lis="";
               for(var i=0;i<records.length;i++){
                   var farid = records[i].farid;
                   lis+= "<li onclick=jumpAnswer('"+farid+"') > ";
                   
                   if (records[i].subjectName == '每日答题') {
                       lis+= "   <img src='../img/index/daily-answer.png'/> ";
                   }else if (records[i].subjectName == '每周知识'){
                       lis+= "   <img src='../img/index/weekly-knowledge.png'/> ";
                   }else if (records[i].subjectName == '每月一考'){
                       lis+= "   <img src='../img/index/monthly-exam.png'/> ";
                   };
                   
                   lis+= "   <h3>"+records[i].subjectName+"</h3> "+
                         "    <small>"+records[i].farendtime+"</small> "+
                         "    <span><span class='font-size2 text-green'>"+records[i].correct+"%</span>&nbsp;正确率</span> "+
                         " </li>";
               }
               $('#ulList').html(lis);
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
            }
        });
    }
    sessionStorage.removeItem('fUid');
    fUid="";
});

