var restore_topic, //题目
	restore_topic_str, //题目字符串
	restore_question_index, //当前题目数
	restore_tof_index, //当前题目数(判断题)
	restore_answer_str, //答案字符串
	restore_answer_tip, //答案前头的ABCD
	restore_tempObj,
	url,
	re_params;

var restore_questions_arr;//选择题题目ID
var restore_tof_questions_arr;//选择题题目ID	
var restore_arr = ["错","对"];
var restore_option = ["A","B","C","D","E","F"];
function RestoreTest(divId,id,re_type){
	restore_questions_arr="";
	restore_tof_questions_arr="";
	restore_tempObj = this;
	if(typeof(re_type) == "undefined"){
	    url = "/answerRecordManager/restoreTestData.json";
	    re_params = "farid="+id;
	}else{
	    url = "/qustionTemplateManager/getWeekTestData.json";
        re_params = "fqtid="+id;
	}

	appcan.gsoft.ajaxUtil.ajax({
           url : url,
           data : re_params,
           success : function(result) {
                var sort = result.record.sort;
                var questions = result.record.question;
                var tofquestion = result.record.tofquestion;
                var num1 = 0;
                var num3 = 0;
                var fixedLayer = "<div id='topic_all' class='block'>";
                $(fixedLayer).appendTo("#"+divId);
                for(var i=0;i<sort.length;i++){
                    var type = sort[i];
                    if(type=="question"){
                        var qp = '<div class="block-head text-black"><span class="block-title">选择题</span></div>';
                        $(qp).appendTo("#topic_all"); 
                        for(var k=0;k<questions.length;k++){
                            if(num1==0){
                                restore_questions_arr = restore_questions_arr+questions[k].fqid;
                            }else{
                                restore_questions_arr = restore_questions_arr+","+questions[k].fqid;
                            }
                            restore_tempObj.createDiv(divId,questions[k],num1,k+1);
                            ++num1;
                        }
                    }else if(type=="tofquestion"){
                        var tp = '<div class="block-head text-black"><span class="block-title">判断题</span></div>';
                        $(tp).appendTo("#topic_all"); 
                        for(var k=0;k<tofquestion.length;k++){
                            if(num3==0){
                                restore_tof_questions_arr = restore_tof_questions_arr+tofquestion[k].ftqid;
                            }else{
                                restore_tof_questions_arr = restore_tof_questions_arr+","+tofquestion[k].ftqid;
                            }
                            restore_tempObj.createTofDiv(divId,tofquestion[k],num3,k+1);
                            ++num3;
                        }
                    }
                    
                    
                }
                if(typeof(re_type) == "undefined"){
                    restore_tempObj.addEvent2();
                }else{
                    restore_tempObj.addEvent1();
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
RestoreTest.prototype.createDiv = function(divId,question,num1,num2){
	restore_answer_str  ="";
	restore_question_index = num1+1;
	restore_topic  = question.content;
	var options  = question.options;
	var ismutiple = question.ismutiple;
	var do_answer = question.tempAnswer;
	var length = options.length;
	for(var i=0;i<length;i++){
		var j  = options[i].qsort;
		var foid = options[i].foid;
		switch (j) {
		   case 1 :
			   restore_answer_tip = "A";break;
		   case 2 :
			   restore_answer_tip = "B";break;
		   case 3 :
			   restore_answer_tip = "C";break;
		   case 4 :
			   restore_answer_tip = "D";break;
		}
		if(ismutiple==0){
			restore_answer_str += '<p><input name="topic' + restore_question_index + '" type="radio" value="' + foid + '">' + restore_answer_tip + '、' + options[i].option + '</p>';
		}else if(ismutiple==1){
			restore_answer_str += '<p><input name="topic' + restore_question_index + '" type="checkbox" value="' + foid + '">' + restore_answer_tip + '、' + options[i].option + '</p>';
		}
		
	}
	

	//组合题目字符串 begin
	restore_topic_str = '<div id="topic' + restore_question_index + '" class="div_topic cho"><h4>' + num2 + '、' + restore_topic + '<span>答案：<span class="answer_this_tip">' + question.answer + '</span></span></h4>' + restore_answer_str +'<span class="do_answer">'+do_answer+ '</span></div>';
	
	$(restore_topic_str).appendTo("#topic_all");
	
}

/**
 * 判断题
 * @param divId
 * @param question
 * @param num
 */
RestoreTest.prototype.createTofDiv = function(divId,question,num1,num2){
	restore_answer_str  ="";
	restore_tof_index = num1+1;
	restore_topic  = question.tqcontent;
	var options  = question.options;
	var do_answers = question.tempAnswer;
	var do_answer = do_answers.split(",");
	var length = options.length;
	for(var i=0;i<length;i++){
		restore_answer_tip  = options[i].qsort;
		var tindex = parseInt(options[i].otfanswer);
		restore_answer_str += '<div id="tof_div"><span class="tof_input">'+ restore_answer_tip + '、' + options[i].option +'</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="tof_option"><input name="tof_option' + num2+ i + '" type="radio" value="1">' + '对';
		restore_answer_str += '<input name="tof_option' + num2 + i + '" type="radio" value="0">' + '错'+'<span class="do_answer">'+do_answer[i]+'</span><span class="op_answer">  答案：<span class="answer_this_tip">' + restore_arr[tindex] + '</span></span></span>'+ '</div>';
	}

	//组合题目字符串 begin
	restore_topic_str = '<div id="tof_topic' + restore_tof_index + '" class="div_topic tof"><h4>' + num2 + '、' + restore_topic + '</h4>' + restore_answer_str + '</div>';
	
	$(restore_topic_str).appendTo("#topic_all"); 
};

/**
 * 监听事件_成绩查询
 */
RestoreTest.prototype.addEvent2 = function(){
    $('.div_topic').removeClass('odd');
    $('.div_topic:even').addClass('odd');
    
    $(".div_topic.cho").each(function(i,e){//选择题
        answer_this_tip = $(this).find(".answer_this_tip").html();  
        var do_answer = $(this).find(".do_answer").html();
        $(this).find('input[type="radio"]').each(function(j,elem){
            if($(elem).val()==do_answer){
                $(elem).attr("checked","checked");
            }
            if($(elem).val()==answer_this_tip){
                $(e).find(".answer_this_tip").html(restore_option[j]);
            }
        });
        var anchar = "";
        $(this).find('input[type="checkbox"]').each(function(j,elem){//多选题
            var ans = do_answer.split(",");
            for(k in ans){
                if($(elem).val()==ans[k]){
                    $(elem).attr("checked","checked");
                }
            }
            var answers = answer_this_tip.split(",");
            
            for(n in answers){
                if($(elem).val()==answers[n]){
                    anchar+= restore_option[j];
                }
            }
            $(e).find(".answer_this_tip").html(anchar);
        });
        
    });
    $(".div_topic.tof").each(function(i){//判断题
        $(this).find("#tof_div").each(function(j){//判断题
            answer_this_tip = $(this).find(".answer_this_tip").html();
            var index = parseInt(answer_this_tip);
            $(this).find(".answer_this_tip").html(restore_arr[index]);
            var do_answer = $(this).find(".do_answer").html();
            var temp_do_answer = do_answer.split(",");
            for(k in temp_do_answer){
                $(this).find('input[type="radio"]').each(function(j,elem){
                    if($(elem).val()==temp_do_answer[k]){
                        $(elem).attr("checked","checked");
                    }
                });
            }           
    
        });     
    });
    $("h4 span").show();
    $(".op_answer").show();
    
};

/**
 * 监听事件 __每周知识
 */
RestoreTest.prototype.addEvent1 = function(){
    $('.div_topic').removeClass('odd');
    $('.div_topic:even').addClass('odd');
    
    $(".div_topic.cho").each(function(i,e){//选择题
        answer_this_tip = $(this).find(".answer_this_tip").html();  
        $(this).find('input[type="radio"]').each(function(j,elem){
            if($(elem).val()==answer_this_tip){
                $(elem).attr("checked","checked");
            }

        });
        var anchar = "";
        $(this).find('input[type="checkbox"]').each(function(j,elem){//多选题
            var answers = answer_this_tip.split(",");           
            for(n in answers){
                if($(elem).val()==answers[n]){
                    $(elem).attr("checked","checked");
                }
            }
        });
        
    });
    $(".div_topic.tof").each(function(i){//判断题
        $(this).find("#tof_div").each(function(){//判断题
            answer_this_tip = $(this).find(".answer_this_tip").html();
            $(this).find('input[type="radio"]').each(function(j,elem){
                if($(elem).val()==answer_this_tip){
                    $(elem).attr("checked","checked");
                }
            }); 
    
        });     
    });

    
};


