//获取初始数据
appcan.ready(function() {
    var sessionStorage = window.sessionStorage;  
     var recordJSON=sessionStorage.getItem('record');
     if(recordJSON){
         var record=JSON.parse(recordJSON);
         document.getElementById('fDpcreateperson').value = record.fDpcreateperson.fUname;//计划发布人
         document.getElementById('fDpcode').value = record.fDpcode;//编号
         document.getElementById('fDpcreatetime').value = record.fDpcreatetime;//计划日期
         document.getElementById('fDpname').value = record.fDpname;//计划名称 
         appcan.gsoft.ajaxUtil.ajax({
            url : '/gltlTaskplanManager/getGltlTaskplansByfDpid.json',
            data:'fDpid='+record.fDpid,
            success : function(data) {
                var records=data.records;
                 var taskHTML='';
                 var taskStatus="";
                if(records){
                    for(var i=0 ;i<records.length;i++){
                       // alert(records.length);
                        if(records[i].fTpstatue==0){
                            taskStatus="待发布";
                        }else if(records[i].fTpstatue==1){
                            taskStatus="待确认";
                        }else if(records[i].fTpstatue==2){
                            taskStatus="司机已确认";
                        }else if(records[i].fTpstatue==4){
                            taskStatus="已确认";
                        }else if(records[i].fTpstatue==5){
                            taskStatus="执行中";
                        }else if(records[i].fTpstatue==6){
                            taskStatus="车辆回库未检查";
                        }else if(records[i].fTpstatue==7){
                            taskStatus="执行完毕";
                        }else if(records[i].fTpstatue==3){
                            taskStatus="副司机已确认";
                        }
                           var num = $('#task_list .block').length;
                             taskHTML += '<!-- 任务' + (num+1) + ' -->' +
                                '<div class="block">' +
                                '<div class="long_press block-head text-black">' +
                                    '<span class="block-title">任务</span><span class="f_Tpindex" id="f_Tpindex_' + num + '"></span><span class="text-green">('+taskStatus+')</span>' +
                                    '<button id="#" class="btn" style="right:5em;" onclick="queryLog(\''+records[i].fTpid+'\',\''+records[i].fTpstatue+'\')">查看行车日志</button>' +
                                    '<i class="icon iconfont fl-r text-gray icon-xiangshang2" onclick="toggle($(this))"></i>' +
                                '</div>' +
                                '<div class="block-toggle">' +
                                    '<div class="block-body">' +
                                        '<table class="table-input">' +
                                            '<tr>' +
                                                '<td style="width: 5em;"><span class="input-label">任务名称:</span></td>' +
                                                '<td style="width: calc(50% - 5em);"><input id="f_Tpname_' + num + '" class="f_Tpname input-text bor-0" type="text" value="'+records[i].fTpname+'" readonly="true"/></td>' +
                                                '<td style="width: 5em;"><span class="input-label">日期:</span></td>' +
                                                '<td style="width: calc(50% - 5em);"><input id="f_Tpdate_' + num + '" class="f_Tpdate datatime_window input-text bor-0" type="text" value="'+records[i].fTpdate+'" readonly="true" /></td>' +
                                            '</tr>' +
                                            '<tr>' +
                                                '<td><span class="input-label">工序组:</span></td>' +
                                                '<td><input id="f_Wpgid' + num + '" class="f_Wpgid select_process1 input-text bor-0" type="text" value="'+(records[i].engineTwo==null?'单车':'双车')+'" readonly="true" /></td>' +
                                                '<td><span class="input-label">任务类型:</span></td>' +
                                                '<td><input id="f_Wpgidextend' + num + '" class="f_Wpgidextend select_process2 input-text bor-0" type="text" value="'+records[i].wpGroupExtend.fWpgname+'" readonly="true" /></td>' +
                                            '</tr>' +
                                            '<tr>' +
                                                '<td><span class="input-label">正司机:</span></td>' +
                                                '<td><input id="f_Tpdriver' + num + '" class="f_Tpdriver input-text bor-0 select_driver" type="text" value="'+records[i].personOne.fUname+'" readonly="true" /></td>' +
                                                '<td><span class="input-label">值乘人员:</span></td>' +
                                                '<td><input id="f_Tppersonone' + num + '" class="f_Tppersonone input-text bor-0 select_driver" type="text" value="'+(records[i].personThree==null?'':records[i].personThree.fUname)+'" readonly="true" /></td>' +
                                            '</tr>' +
                                            '<tr>' +
                                                '<td><span class="input-label">副司机:</span></td>' +
                                                '<td><input id="f_Tpassistantdriver' + num + '" class="f_Tpassistantdriver select_driver input-text bor-0" type="text" value="'+records[i].personTwo.fUname+'" readonly="true" /></td>' +
                                                '<td><span class="input-label">值乘人员:</span></td>' +
                                                '<td><input id="f_Tppersontwo' + num + '" class="f_Tppersontwo select_driver input-text bor-0" type="text" value="'+(records[i].personFour==null?'':records[i].personFour.fUname)+'" readonly="true" /></td>' +
                                            '</tr>' +
                                            '<tr>' +
                                                '<td><span class="input-label" id="f_EidName_' + num + '">机车1:</span></td>' +
                                                '<td><input id="f_Eid_' + num + '" class="f_Eid input-text select_otive bor-0"  type="text" value="'+records[i].engineOne.fEplatenmber+'" readonly="true" /></td>' +
                                                '<td><span class="input-label" id="f_EexidName' + num + '">机车2:</span></td>' +
                                                '<td><input id="f_Eexid' + num + '" class="f_Eexid input-text select_otive bor-0" type="text" value="'+(records[i].engineTwo==null?'':records[i].engineTwo.fEplatenmber)+'" readonly="true" /></td>' +
                                            '</tr>' +
                                        '</table>' +
                                    '</div>' +
                                    '<div class="block-foot">' +
                                        '<table class="table-input">' +
                                            '<tr>' +
                                                '<td style="width: 5em;"><span class="input-label">施工地段:</span></td>' +
                                                '<td style="width: calc(100% - 5em);"><input class="f_Tpsection input-text bor-0" type="text" name="" id="f_Tpsection' + num + '" value="'+records[i].fTpsection+'" /></td>' +
                                            '</tr>' +
                                            '<tr class="f_Tpgroup">' +
                                                '<td><span class="input-label">车辆编组:</span></td>' +
                                                '<td>' +
                                                    '<input class="input-text bor-0" type="text" name="" id="' + num + '" value="'+records[i].fTpgroup+'" />' +
                                                '</td>' +
                                            '</tr>' +
                                            '<tr>' +
                                                '<td valign="top"><span class="input-label">施工内容<br />影响范围:</span></td>' +
                                                '<td><textarea class="f_Tpcontent input-text bor-0" rows="3" id="f_Tpcontent' + num + '">'+records[i].fTpcontent+'</textarea></td>' +
                                            '</tr>' +
                                        '</table>' +
                                    '</div>' +
                                '</div>' +
                            '</div>';  
                      }
                         $('#task_list').append(taskHTML);
                    }
            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
            }
        });
     }
});

function queryLog(fTpid,fTpstatue){
    if(fTpstatue==7){
        window.location.href="myLogBook.html";
        var localStorage = window.localStorage;   
       localStorage.setItem('taskId', fTpid);
        localStorage.setItem('selectPageLS', 7);
    }else{
        alert("任务未执行完毕,无法查询行车日志！");
    }
     
}
