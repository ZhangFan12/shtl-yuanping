var _topic, //题目
    _topic_str, //题目字符串
    question_index, //当前题目数
    tof_index, //当前题目数(判断题)
    _answer_str, //答案字符串
    _answer_tip, //答案前头的ABCD
    tempObj,
    curr_time,//当前时间
    action_status,
    _fqtid;

var questions_arr;//选择题题目ID
var tof_questions_arr;//选择题题目ID 
var questions_arr_answer = [];
var tof_questions_arr_answer = [];
var right_option = ["A","B","C","D","E","F"];
var tof_right_option = ["","对","错"];
function InitTest(divId,fqtid,limitMinutes){
    action_status = 0;
    questions_arr="";
    tof_questions_arr="";
    _fqtid = fqtid;
    curr_time = this.getNowFormatDate();
    tempObj = this;
    appcan.gsoft.ajaxUtil.ajax({
        url : "/qustionTemplateManager/getTestPaperData.json",
        data : "fqtid="+fqtid,
        success : function(result) {
            var sort = result.record.sort;
            if(sort.length==0){
                alert("在题库中没有找到合适的题目");
                appcan.window.close(-1);
                return;
            }
            var limitTime = result.record.limitTime;
            var questions = result.record.question;
            var tofquestion = result.record.tofquestion;
            var num1 = 0;
            var num3 = 0;
            /**
            var fixedLayer = "<div id='fixedLayer'><h5>考试剩余时间：</h5><div id='PINGMU' ><span id='XS'></span></div><div>"
                            +"<div><span id='topic_right'>"
                            +"<span id='fqtid' style='display:none'>"+fqtid+"</span>"
                            +"<input name='check_answer' id='check_answer' type='button' value=' 提交'/></span>"
                            +"<span id='status'></span></p></div></div>"
                            +"</div></div></div><div id='topic_all'></div>";
            */
            var fixedLayer = "<div id='topic_all' class='block'></div>"
                                        // +"<span id='topic_right'>"
                                        +"<input name='check_answer' id='check_answer' type='button' value='提交'/>"
                                        +"<span id='status'></span>";
                
            if(typeof(limitMinutes) != "undefined"){
                fixedLayer+="<div id='PINGMU' ><span id='XS'></span></div>";
            }
            // +"</span>";
            
            $(fixedLayer).appendTo("#"+divId);
            for(var i=0;i<sort.length;i++){
                var type = sort[i];
                if(type=="question"){
                    var qp = '<div class="block-head text-black"><span class="block-title">选择题</span></div>';
                    $(qp).appendTo("#topic_all"); 
                    for(var k=0;k<questions.length;k++){
                        if(num1==0){
                            questions_arr = questions_arr+questions[k].fqid;
                        }else{
                            questions_arr = questions_arr+","+questions[k].fqid;
                        }
                        tempObj.createDiv(divId,questions[k],num1,k+1);
                        ++num1;
                    }
                }else if(type=="tofquestion"){
                    var tp = '<div class="block-head text-black"><span class="block-title">判断题</span></div>';
                    $(tp).appendTo("#topic_all"); 
                    for(var k=0;k<tofquestion.length;k++){
                        if(num3==0){
                            tof_questions_arr = tof_questions_arr+tofquestion[k].ftqid;
                        }else{
                            tof_questions_arr = tof_questions_arr+","+tofquestion[k].ftqid;
                        }
                        tempObj.createTofDiv(divId,tofquestion[k],num3,k+1);
                        ++num3;
                    }
                }
            }
            tempObj.addEvent(limitTime);
            if(typeof(limitMinutes) != "undefined"){
                tempObj.timing(parseInt(limitTime));
            }

        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            appcan.window.openToast("服务器连接失败,请检查网络...", '2000');
        }
    });
    
}
/**
 * 选择题
 * @param divId
 * @param question
 * @param num
 */
InitTest.prototype.createDiv = function(divId,question,num1,num2){
    _answer_str  ="";
    question_index = num1+1;
    _topic  = question.content;
    var options  = question.options;
    var ismutiple = question.ismutiple;
    var length = options.length;
    for(var i=0;i<length;i++){
        var j  = options[i].qsort;
        var foid = options[i].foid;
        switch (j) {
           case 1 :
               _answer_tip = "A";break;
           case 2 :
               _answer_tip = "B";break;
           case 3 :
               _answer_tip = "C";break;
           case 4 :
               _answer_tip = "D";break;
           case 5 :
               _answer_tip = "E";break;
           case 6 :
               _answer_tip = "F";break;
        }
        if(ismutiple==0){
            _answer_str += '<p><input name="topic' + question_index + '" type="radio" value="' + foid + '">' + _answer_tip + '、' + options[i].option + '</p>';
        }else if(ismutiple==1){
            _answer_str += '<p><input name="topic' + question_index + '" type="checkbox" value="' + foid + '">' + _answer_tip + '、' + options[i].option + '</p>';
        }
    }   
    //组合题目字符串 begin
    _topic_str = '<div id="topic' + question_index + '" class="div_topic cho"><h4>' + num2 + '、' + _topic + '<span>答案:<span class="answer_this_tip">' + question.answer + '</span></span></h4>' + _answer_str + '</div>';
    
    $(_topic_str).appendTo("#topic_all");
    
}

/**
 * 判断题
 * @param divId
 * @param question
 * @param num
 */
InitTest.prototype.createTofDiv = function(divId,question,num1,num2){
    _answer_str  ="";
    tof_index = num1+1;
    _topic  = question.tqcontent;
    var options  = question.options;
    var length = options.length;
    for(var i=0;i<length;i++){
        _answer_tip  = options[i].qsort;
        _answer_str += '<div class="tof_div"><span class="tof_input">'+ _answer_tip + '、' + options[i].option +'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tof_option"><span id="tofRight"><input name="tof_option' + num2+ i + '" type="radio" value="1">' + '对</span>';
        _answer_str += '<span id="tofErro"><input name="tof_option' + num2 + i + '" type="radio" value="0">' + '错</span></span>'+'<span class="op_answer"> 答案:<span class="answer_this_tip">' + options[i].otfanswer + '</span></span>'+ '</div>';
    }

    //组合题目字符串 begin
    _topic_str = '<div id="tof_topic' + tof_index + '" class="div_topic tof"><h4>' + num2 + '、' + _topic + '</h4>' + _answer_str + '</div>';
    
    $(_topic_str).appendTo("#topic_all"); 
};

/**
 * 监听事件
 */
InitTest.prototype.addEvent = function(limitTime){
   
    $("#status").html("");
    $('.div_topic').removeClass('odd');
    $('.div_topic:even').addClass('odd');
    $('.div_topic p').click(function(i){
        if($(this).find('input[type="radio"]').val() != undefined){
            $(this).find('input[type="radio"]').attr('checked','checked');              
            var name = $(this).find('input[type="radio"]').attr('name');//获得名称
            $('input[type="radio"][name="' + name + '"]').parents("p").removeClass('qselected');
            $('input[type="radio"][name="' + name + '"]:checked').parents("p").addClass('qselected');
        }
        if($(this).find('input[type="checkbox"]').val() != undefined){
            var isCheck = $(this).find('input[type="checkbox"]').prop("checked");
            if (i.target.localName == 'input') {
                isCheck = !isCheck;
            }
            if(isCheck){
                $(this).find('input[type="checkbox"]').closest("p").removeClass('qselected');
                $(this).find('input[type="checkbox"]').prop("checked",false);
            }else{
                $(this).find('input[type="checkbox"]').prop('checked',true);
                $(this).find('input[type="checkbox"]').parent("p").addClass('qselected');}
        }
    });
    
    $("#check_answer").click(function (e) {
        if(action_status==0){
            appcan.window.alert({
            title : "提示",
            content : "确认提交?",
            buttons : ['确定', '取消'],
            callback : function(err, data, dataType, optId) {
                    if(data==0){
                       subEvent(limitTime);
                        $('#check_answer').hide();
                    }               
                }
            });
        }else{
            subEvent(limitTime); 
        }
        
    });
};

function subEvent(limitTime){
    document.getElementById("check_answer").disabled=true;
    $("#status").html("");
    $("h4").css("color","#22536A");
    var answer_this_tip,set_answer,_temp_tip;
    _temp_tip = "yes";

    var tall = 0;
    var tof_tall = 0;

    $(".div_topic.cho").each(function(i){
        if($(this).find('input[type="radio"]:checked').val() == undefined){
            _temp_tip = "no";
            //$(this).find("h4").css("color","green");
        }
        tall++;
    });

    $(".tof_option").each(function(i){
        if($(this).find('input[type="radio"]:checked').val() == undefined){
            _temp_tip = "no";
            //$(this).find("h4").css("color","green");
        }
        tof_tall++;
    });

    if(_temp_tip == "no"){
        //$("#status").html("还有题目没完成！");
        //return;
    }
    if(limitTime!= '0'){
        if(action_status==0){
            tempObj.stopTiming();//计时暂停
        }
    }
    

    var err = 0;
    var tof_err = 0;

    $(".div_topic.cho").each(function(i){//选择题
        answer_this_tip = $(this).find(".answer_this_tip").html();
        set_answer = $(this).find('input[type="radio"]:checked').val();
        var set_answer2 = [];
        var chck_items = $(this).find('input[type="checkbox"]');//多选
        if(chck_items){
            for(k in chck_items){
                if(chck_items[k].checked)
                    set_answer2.push(chck_items[k].value);
            };
        }
        if(set_answer2.length!=0){
            if(set_answer2.length==0){
                questions_arr_answer.push("undo");
            }else if(set_answer2.length==1){
                questions_arr_answer.push(set_answer2);
            }else{
                var temp_answer  = set_answer2.toString().split(",").join('_');
                questions_arr_answer.push("["+temp_answer+"]");
            }

        }else if(typeof(set_answer)!="undefined"){
            questions_arr_answer.push(set_answer);
        }else {
            questions_arr_answer.push("undo");
        }
        //$(this).find('input[type="radio"]').val() != undefined
        if(answer_this_tip != set_answer&&answer_this_tip !=set_answer2 ){
            $(this).find("h4").css("color","red");
            err++;
        }
    });
    $(".div_topic.tof").each(function(i){//判断题
        var temp_tofanswer = [];
        $(this).find(".tof_div").each(function(j){//判断题
            temp_tofanswer.splice(0,temp_tofanswer.length);
            answer_this_tip = $(this).find(".answer_this_tip").html();
            set_answer = $(this).find('input[type="radio"]:checked').val();
            if(typeof(set_answer)=="undefined"){
                temp_tofanswer.push("undo");
            }else{
                temp_tofanswer.push(set_answer);
            }
            if(answer_this_tip != set_answer){
                $(this).prev().css("color","red");
                tof_err++;
            }

        });
        var tofans  = temp_tofanswer.toString().split(",").join('_');
        tof_questions_arr_answer.push("["+tofans+"]");
    });
    /**********************************显示正确答案start*********************************************/
    $(".div_topic.cho").each(function(i,e){//选择题
        answer_this_tip = $(this).find(".answer_this_tip").html();
        $(this).find('input[type="radio"]').each(function(j,elem){
            if($(elem).val()==answer_this_tip){
                $(e).find(".answer_this_tip").html(right_option[j]);
            }
        });
        var anchar = "";
        $(this).find('input[type="checkbox"]').each(function(j,elem){//多选题

            var answers = answer_this_tip.split(",");

            for(n in answers){
                if($(elem).val()==answers[n]){
                    anchar+= right_option[j];
                }
            }
            $(e).find(".answer_this_tip").html(anchar);
        });

    });
    $(".div_topic.tof").each(function(i){//判断题
        $(this).find(".tof_div").each(function(j){//判断题
            answer_this_tip = $(this).find(".answer_this_tip").html();
            var index = parseInt(answer_this_tip);
            $(this).find(".answer_this_tip").html(tof_right_option[index]);

        });
    });
    $("h4 span").show();//选择题答案显示
    $(".op_answer").show();//判断题答案显示
    /**********************************显示正确答案end*********************************************/
    var tcount = tall-err;
    var srcount = tof_tall-tof_err;
    var status_html = "";
    if(tall!=0){
        status_html = status_html+"选择题答对:"+(tall-err)+"个！"+"选择题错误：" + err + "个！错误率：" + (err / tall * 100).toFixed(2) + "%；";
    }
    if(tof_tall!=0){
        status_html = status_html+"  判断题答对:"+(tof_tall-tof_err)+"个！"+"判断题错误：" + tof_err + "个！错误率：" + (tof_err / tof_tall * 100).toFixed(2) + "%";
    }
    $("#status").html(status_html);

    //将答题情况提交给后台  模板ID fqtid 题目ID fqid  题目类型 faritype  答对选择题数量tcount 答错选择题数量fcount  答对判断题数量srcount 答错判断题数量trcount
    appcan.gsoft.ajaxUtil.ajax({
        url : "/answerRecordManager/saveTestSituation.json",
        data : "fqtid="+_fqtid+"&startTime="+curr_time+"&fqid="+questions_arr+"&ftqid="+tof_questions_arr+"&tcount="+tcount+"&fcount="+err+"&srcount="+srcount+"&trcount="+tof_err+"&qanswer="+questions_arr_answer.toString()+"&tofanswer="+tof_questions_arr_answer.toString(),
        success : function(data) {
            alert("提交成功");
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            appcan.window.openToast("服务器连接失败,请检查网络...", '2000');
        }
    });
}

/**
 * 定时器
 */
var miao=60;
InitTest.prototype.timing = function(Fen){
        miao=60;
        timer=setInterval(
                function()
                {
                    if(Fen==0&&miao==1)//分钟数=0的时候
                    {
                        action_status = 1;
                        $("#XS").html="00:00"
                        clearInterval(timer);
                        $("#check_answer").click();
                    }
                    if(Fen>=0&&Fen<=10)//分钟数0~10
                    {
                        miao--;
                        if(miao==0)//秒数等于0的时候
                        {
                            miao=60;
                            $("#XS").get(0).innerHTML="0"+Fen+":"+"00";
                        }
                        if(miao>0&&miao<10)//秒数0~10的时候
                        {
                            miao="0"+miao;
                            $("#XS").get(0).innerHTML="0"+Fen+":"+miao;
                        }
                        if(miao>=10&&miao!=60)//秒数大于等于10的时候
                        {
                            if(miao==59)
                            {
                                Fen--
                            }
                            $("#XS").get(0).innerHTML="0"+Fen+":"+miao;
                        }
                    }
                    if(Fen>10)//分钟数大于10的时候
                    {
                        miao--;
                        if(miao==0)//秒数等于0的时候
                        {
                            miao=60;
                            $("#XS").get(0).innerHTML=Fen+":"+"00";
                        }
                        if(miao>0&&miao<10)//秒数0~10的时候
                        {
                            miao="0"+miao;
                            $("#XS").get(0).innerHTML=Fen+":"+miao;
                        }
                        if(miao>=10&&miao!=60)//秒数大于等于10的时候
                        {
                            if(miao==59)
                            {
                                Fen--
                            }
                            $("#XS").get(0).innerHTML=Fen+":"+miao;
                        }
                    }
                },
                1000
                );
};
InitTest.prototype.stopTiming = function(){
    miao=60;
    /*$("#Fen").get(0).disabled=false;
    $("audio").replaceWith("");
    $("#XS").get(0).innerHTML="00:00"*/
    clearInterval(timer);
}

/**
 * 获取当前时间
 * @returns {String}
 */
InitTest.prototype.getNowFormatDate = function() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if (hours >= 0 && hours <= 9) {
        hours = "0" + hours;
    }
    if (minutes >= 0 && minutes <= 9) {
        minutes = "0" + minutes;
    }
    if (seconds >= 0 && seconds <= 9) {
        seconds = "0" + seconds;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + hours + seperator2 + minutes
            + seperator2 + seconds;
    return currentdate;
}


