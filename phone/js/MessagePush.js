function message(div) {
    var infoArry = [];

    if ($('.msg_pop').length) return
    var onClickDiv = function () {
    };
    var onClickDivId = 'msg__' + new Date().getMilliseconds();
    var _msgHtml = '<div id=' + onClickDivId + ' class="msg_pop" style="position: fixed; top: 0; background: rgba(87, 87, 87, 0.57); width: 100%; height: 100%; z-index: 9999;"></div>'
    appcan.gsoft.ajaxUtil.ajax({
        url: "/MessagePushManager/getPagerMessagesById.json",
        data: "type=0",
        success: function (data) {
            var drives = data.records;
            // alert(JSON.stringify(drives));

            var type = drives[0].fMptype;
            var content = drives[0].fMpcontent;
            if (!type) return
            $('body').append(_msgHtml);
            if (type == 8 || type == 9) {       //type = 1 通知类消息
                var info = new DivInfo(onClickDiv, "img/xingshi.png", 1, "通知类消息#" + content + "");
                infoArry.push(info);
                var g_CheckArray = new QueryListControl(onClickDivId, 4, infoArry, 1);
                g_CheckArray.Load();
            } else if (type == 1 || type == 2 ) {     //系统自动推送消息提醒类
                var info = new DivInfo(onClickDiv, "img/xingshi.png", 1, "系统任务自动派发#" + content + "#稍后申请#去保养");
                infoArry.push(info);
                var g_CheckArray = new QueryListControl(onClickDivId, 2, infoArry, 2);
                g_CheckArray.Load();
            } else if (type == 3) {     //系统自动推送消息提醒类
                var info = new DivInfo(onClickDiv, "img/xingshi.png", 1, "系统任务自动派发#" + content + "#稍后申请#去检查");
                infoArry.push(info);
                var g_CheckArray = new QueryListControl(onClickDivId, 2, infoArry, 2);
                g_CheckArray.Load();
            } else if (type == 4 || type == 5) {          //任务人工派发类消息
                var info = new DivInfo(onClickDiv, "img/xingshi.png", 1, "任务人工派发#" + content + "#稍后确认#去确认");
                infoArry.push(info);
                var g_CheckArray = new QueryListControl(onClickDivId, 4, infoArry, 2);
                g_CheckArray.Load();
            } else if (type == 6 || type == 7) {          //任务人工派发类消息
                var info = new DivInfo(onClickDiv, "img/xingshi.png", 1, "审批消息#" + content + "#稍后审批#去审批");
                infoArry.push(info);
                var g_CheckArray = new QueryListControl(onClickDivId, 4, infoArry, 2);
                g_CheckArray.Load();
            }
            ['.msg_goon', '.msg_close'].map(function (e) {
                $(e).attr('data-BussinessID', drives[0].fMpbusiness);
                $(e).attr('data-type', type);
                $(e).attr('data-fMpid', drives[0].fMpid);
            })
            _clickEvent();
        }
    });
}

function saveMessageById(id) {
    appcan.gsoft.ajaxUtil.ajax({
        url: "/MessagePushManager/saveMessageById.json",
        data: "fMpisread=1&fMpid=" + id,
        success: function (data) {
        }
    })
}

function goTo(type, bussiness) {
    switch (~~type) {
        case 1: // 周期保养
            appcan.gsoft.parameterUtils.setPageParams(bussiness);
            appcan.openWinWithUrl('work', 'work/maintenance.html');
            break
        case 2: // 大修
            appcan.gsoft.parameterUtils.setPageParams(bussiness);
            appcan.openWinWithUrl('work', 'work/maintenance.html');
            break
        case 3: // 回库未检查
            localStorage.setItem('taskId', bussiness.split(',')[0]);
            appcan.openWinWithUrl('work', 'work/task_implement2.html');
            break
        case 4: // 任务确认
            localStorage.setItem('taskId', bussiness.split(',')[0]);
            appcan.openWinWithUrl('work', 'work/task_confirm.html');
            break
        case 5: // 任务确认完成
            localStorage.setItem('taskId', bussiness.split(',')[0]);
            appcan.openWinWithUrl('work', 'work/task_implement.html');
            break
        case 6: // 审批
            
        case 7: // 审批结束
            appcan.gsoft.ajaxUtil.ajax({
                url : '/eMainTainManager/getEMCommon.json',
                data: "flowNo=" + bussiness,
                success : function(data) {
                      var record = data.record;
                      if (record) {
                        appcan.gsoft.parameterUtils.setPageParams(record);
                        switch (record.apprStatus) {
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
            break
        default:
            break;
    }
}

function _clickEvent() {
    $(document).on('click', '.msg_close', function (e) {
        $('.msg_pop').remove();
        var $self = $(this);
        var fMpid = $self.attr('data-fMpid');
        saveMessageById(fMpid);
    })
    $(document).on('click', '.msg_goon', function (e) {
        $('.msg_pop').remove();
        var $self = $(this);
        var fMpid = $self.attr('data-fMpid');
        var type = $self.attr('data-type');
        saveMessageById(fMpid);
        var BussinessID = $self.attr('data-BussinessID');
        goTo(type, BussinessID);
    })
}

function initMsg(time) {
    setInterval(message(), time || 1000);
}