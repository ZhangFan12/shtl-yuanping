function Public() {
    //顶部
    this.header = function (title, leftIcon, rightIcon) {
        var leftIconHTML = '';
        var rightIconHTML = '';
        if (leftIcon) {
            leftIconHTML = '<i class="back-btn icon iconfont icon-xiangzuo1 icon-left text-white"></i>'
        }
        if (rightIcon) {
            rightIconHTML = '<i class="icon iconfont icon-xinxi icon-right text-white"></i>'
        }
        var headerHTML = '<div class="header text-center">' +
            leftIconHTML + '<span class="text-white">' + title + '</span>' + rightIconHTML +
            '</div>';
        $('body').append(headerHTML);//插入HTML
    };
    //底部
    this.footer = function () {
        var footerHTML = '<ul class="footer">' +
            '<li data-name="index">' +
            '<i class="icon iconfont icon-shouyefill"></i>' +
            '<span>首页</span>' +
            '</li>' +
            '<li data-name="work">' +
            '<i class="icon iconfont icon-xiangbao"></i>' +
            '<span>工作</span>' +
            '</li>' +
            '<li data-name="study">' +
            '<i class="icon iconfont icon-bangzhuzhongxin"></i>' +
            '<span>学习</span>' +
            '</li>' +
            '<li data-name="user">' +
            '<i class="icon iconfont icon-yonghufill"></i>' +
            '<span>我的</span>' +
            '</li>' +
            '</ul>';
        $('body').append(footerHTML);//插入HTML

        for (var i = 0; i < $('.footer li').length; i++) {
            $('.footer li').eq(i).removeClass('active');
        }
        ;
        if (window.location.href.indexOf('index') !== -1) {
            $('.footer li').eq(0).addClass('active')
        } else if (window.location.href.indexOf('user') !== -1) {
            $('.footer li').eq(3).addClass('active')
        } else if (window.location.href.indexOf('work') !== -1) {
            $('.footer li').eq(1).addClass('active')
        } else if (window.location.href.indexOf('study') !== -1) {
            $('.footer li').eq(2).addClass('active')
        }

        //点击触发
        $('.footer li').click(function () {
            var name = $(this).attr('data-name');
            var url = name + '.html';
            appcan.window.evaluateScript('index.html', "" +
                "goTo('"+name+"')"
            )
            gotoDir('index.html', 'index.html'/*, {foot: name}*/);
        })
    };
    //返回按钮
    this.backBtn = function () {
        appcan.button(".back-btn", "btn-act", function () {
            appcan.window.close(-1);
        })
    };
}

//下拉显示
$('.select_list').click(function(){
    $(this).parents('li').find('.small-list').slideToggle('fast');
    $(this).find('i').toggleClass('icon-xiangxia2 icon-xiangshang2');
});

//日历
function rili(dates) {  //dates时间格式[mm/dd/yyyy,mm/dd/yyyy]
    var tips = dates;
    $('#calendar').datepicker({
        inline: true,
        firstDay: 1,
        showOtherMonths: true,
        showMonthAfterYear: true,
        monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],  
        dayNamesMin: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        beforeShowDay: function(date) {
            for (var i = 0; i < dates.length; i++) {
                if (new Date(dates[i]).toString() == date.toString()) {
                    return [true, 'highlight', dates[i]];
                }
            }
            return [true, ''];
        }
    });
};
//选择页面跳转
function selectPage() {
    var page_Name = pageName();
    $(document).on('click', '.select_driver', function () {
        var exten = [$('#fTppersonne1').attr('name'), $('#fTppersonne2').attr('name'), $('#fRlioperationor').attr('name'), $('#fRlisteward').attr('name')];
        selectPageLS(page_Name, $(this).attr('id'), 1, '选司机', 0, exten);
        appcan.openWinWithUrl('personnel_select','../personnel_select.html');
        // uexWindow.openPopover('personnel-select', '0', '../personnel-select.html', '', 0, 0, '', '', '', '0', 0);
    });
    $(document).on('click', '.select_otive', function () {
        selectPageLS(page_Name, $(this).attr('id'), 2, '任务选车', 1, '');
        appcan.openWinWithUrl('locomotive_select','../locomotive_select.html');
    });
    $(document).on('click', '.select_process1', function () {
        selectPageLS(page_Name, $(this).attr('id'), 3, '选固定工序组', 0, '');
        appcan.openWinWithUrl('work_group_select','../work_group_select.html');
    });
    $(document).on('click', '.select_process2', function () {
        selectPageLS(page_Name, $(this).attr('id'), 3, '选非固定工序组', 0, '');
        appcan.openWinWithUrl('work_group_select','../work_group_select.html');
    });
    $(document).on('click', '.addsite-head', function () {
        selectPageLS(page_Name, $(this).attr('id'), 4, '', 0, '');//站点选择页面跳转
        appcan.openWinWithUrl('personnel_select','../personnel_select.html');
    });
    $(document).on('click', '.check_select', function () {
        selectPageLS(page_Name, $(this).attr('id'), 1, '选择审批人', 0, '');//站点选择页面跳转
        appcan.openWinWithUrl('personnel_select','../personnel_select.html');
    })
    $(document).on('click', '.materiel_select', function () {
        selectPageLS(page_Name, $(this).attr('id'), 0, '', 0, '');//用料选择页面跳转
        appcan.openWinWithUrl('materiel_select','../materiel_select.html');
    })
}

//select页面传值缓存
function selectPageLS(pageName, id, type, convert, bool, exten) {
    localStorage.removeItem('selectPageLS')
    var selectPageLS = {
        'pageName': pageName,
        'id': id,
        'type': type,
        'convert': convert,
        'bool': bool,
        'exten': exten
    };
    localStorage.setItem('selectPageLS', JSON.stringify(selectPageLS));
}
//获取当前页面名称
function pageName(){
    var a = location.href;
    var b = a.split("/");
    var c = b.slice(b.length-1, b.length).toString(String).split(".");
    return c.slice(0, 1);
}
//替换名称和ID
function changeText(id, changeText, changeId) {
    //alert($('#'+id).attr('name'));
    var selectPageLS = JSON.parse(localStorage.getItem('selectPageLS'));
    var name = $('#' + id).attr('id');
    var text = changeText.split("_");
    
    if (changeText == '<span class="text-yellow">取消选择</span>') {
        $('#' + id).val('');
    } else{
        $('#' + id).val(changeText);
    };
    
    if (selectPageLS.type == 2) {
        // $('#' + id).val(changeText);
        $('#' + id).attr('name', changeId);
        if (changeText == '<span class="text-yellow">取消选择</span>') {
            if ((name.indexOf('f_Eid_') >= 0) || (name.indexOf('f_Eid') >= 0)) {
                $('#' + id).parents('.block').find('.car_group1').html('');
                //changeWpCheck(id.slice(6));
    
            } else if (name.indexOf('f_Eexid') >= 0) {
                $('#' + id).parents('.block').find('.car_group2').html('');
                // changeWpCheck(id.slice(7));
            };
        }else{
            if ((name.indexOf('f_Eid_') >= 0) || (name.indexOf('f_Eid') >= 0)) {
                $('#' + id).parents('.block').find('.car_group1').html(text[text.length - 1] + ' + ');
                //changeWpCheck(id.slice(6));
    
            } else if (name.indexOf('f_Eexid') >= 0) {
                $('#' + id).parents('.block').find('.car_group2').html(' + ' + text[text.length - 1]);
                // changeWpCheck(id.slice(7));
            };
        }
    } else if (selectPageLS.type == 4) {
        if (changeText == '<span class="text-yellow">取消选择</span>') {
            $('#' + id).parent().remove();
        }else{
            $('#' + id).html(!changeText?'选择站点':changeText);
            $('#' + id).attr('name', changeId);
        }
    } else if (selectPageLS.type == 3) {
        // $('#' + id).val(changeText);
        $('#' + id).attr('name', changeId);
        carShowOrHide(changeText, id);
    } else if (selectPageLS.type == 0) {
        var arr = $('#' + id).parents('tr').find('input');
        var object = JSON.parse(changeText);
        arr.eq(0).val(object.fMtcode);
        arr.eq(0).attr('name',object.fMtid);
        arr.eq(1).val(object.fMtname);
        arr.eq(2).val(object.fMtmodel);
    } else {
        // $('#' + id).val(changeText);
        $('#' + id).attr('name', changeId);
    };
}
//机车显示控制
function carShowOrHide(changeText, id) {
    var taskNum = id.substr(id.length - 1, 1);
    if (changeText.indexOf('单车') >= 0) {
        $("#f_EidName_" + taskNum).show();
        $("#f_Eid_" + taskNum).show();
        $("#f_EexidName" + taskNum).hide();
        $("#f_Eexid" + taskNum).hide();
        $("#f_Eexid" + taskNum).val("");
        $("#f_Eexid" + taskNum).attr('name', "");
        $("#car_group2" + taskNum).html('');
        
        $("#f_EidName").show();
        $("#f_Eid").show();
        $("#f_EexidName").hide();
        $("#f_Eexid").hide();
        $("#f_Eexid").val("");
        $("#f_Eexid").attr('name', "");
        $("#car_group2").html('');
    } else if (changeText.indexOf('双车') >= 0) {
        $("#f_EidName_" + taskNum).show();
        $("#f_Eid_" + taskNum).show();
        $("#f_EexidName" + taskNum).show();
        $("#f_Eexid" + taskNum).show();
        
        $("#f_EidName").show();
        $("#f_Eid").show();
        $("#f_EexidName").show();
        $("#f_Eexid").show();
    }

}
//给工序组赋值
function changeWpCheck(parm) {
    var f_Eid = $("#f_Eid_" + parm).val();
    var f_Eexid = $("#f_Eexid" + parm).val();
    if (f_Eid != '' && f_Eexid != '') {
        for (var i = 0; i < wpRecords.length; i++) {
            if (wpRecords[i].Text.indexOf('双车') >= 0) {
                $('#f_Wpgid' + parm).val(wpRecords[i].Text);
                $('#f_Wpgid' + parm).attr('name', wpRecords[i].ID);
            }
        }
        ;
    } else {
        for (var i = 0; i < wpRecords.length; i++) {
            if (wpRecords[i].Text.indexOf('单车') >= 0) {
                $('#f_Wpgid' + parm).val(wpRecords[i].Text);
                $('#f_Wpgid' + parm).attr('name', wpRecords[i].ID);
            }
        }
    }
}
//list页面传值缓存
function listPageLS(pageName) {
    localStorage.removeItem('selectPageLS')
    var selectPageLS = pageName;
    localStorage.setItem('selectPageLS', JSON.stringify(selectPageLS));
}

//删除父元素
function removeParent(object, ParentId, name) {//点击的对象，删除的父集对象，对象名称
    var tanchuang = confirm('确认删除' + name + '吗？');
    if (tanchuang == true) {
        object.parents(ParentId).remove();
    }
}

//获取当前时间:type带年月日、type2无时间
function nowTime(type,type2){
    function p(s) {return s < 10 ? '0' + s: s;}
    var myDate = new Date();
    var year=myDate.getFullYear(); //获取当前年
    var month=myDate.getMonth()+1; //获取当前月
    var date=myDate.getDate();     //获取当前日
    var h=myDate.getHours();       //获取当前小时数(0-23)
    var m=myDate.getMinutes();     //获取当前分钟数(0-59)
    var s=myDate.getSeconds();     //获取当前秒数(0-59)
    if (type) {
        if (type2) {
            var now=year+'年'+p(month)+"月"+p(date)+"日";
        } else{
            var now=year+'年'+p(month)+"月"+p(date)+"日  "+p(h)+':'+p(m);
        };
    } else{
        if (type2) {
            var now=year+'-'+p(month)+"-"+p(date);
        }else{
            var now=year+'-'+p(month)+"-"+p(date)+"  "+p(h)+':'+p(m);
        }
    };
    return now
}
//弹窗：type=1只有确认按钮
function popupWindow(headHTML, bodyHTML, type) {
    if (type == 1) {
        var footHTML = '<button id="popup_confirm" class="btn" style="width:100%;">确认</button>';
    } else {
        var footHTML = '<button id="popup_cancel" class="btn btn-no">取消</button><button id="popup_confirm" class="btn">确认</button>';
    }
    ;
    var WindowHTML = '<div class="popup-window">' +
        '<div class="popup">' +
        '<div class="head">' + headHTML + '</div>' +
        '<div class="body">' + bodyHTML + '</div>' +
        '<div class="foot">' + footHTML + '</div>' +
        '</div>' +
        '</div>';
    $('body').append(WindowHTML);
    $('#popup_cancel').click(function () {
        $('.popup-window').remove();
    })
}
//时间弹窗：val=false/true关闭开启时间选择
function dataTimeWindow(val) {
    $(document).on('click', '.datatime_window', function () {
        var headHTML = '时间';
        var bodyHTML = '<div id="dataTime" class="data-time"></div>';
        popupWindow(headHTML, bodyHTML);
        var time = new SelectDateTime('dataTime', val);
        time.Builder();
        var thisObject = $(this);
        var dataHTML;
        $('#popup_confirm').click(function () {
            dataHTML = $('#dataTime select:eq(0)').val() + '-' + $('#dataTime select:eq(1)').val() + '-' + $('#dataTime select:eq(2)').val();
            if (val) {
                dataHTML = dataHTML + '  ' + $('#dataTime select:eq(3)').val() + ':' + $('#dataTime select:eq(4)').val();
            }
            thisObject.val(dataHTML);
            thisObject.attr('name', time.GetValue());
            $('.popup-window').remove();
        })
    });
}
function dataTimeWindow2(val) {
    $(document).on('click', '.datatime_window2', function () {
        var headHTML = '时间';
        var bodyHTML = '<div id="dataTime" class="data-time"></div>';
        popupWindow(headHTML, bodyHTML);
        var time = new SelectDateTime('dataTime', val);
        time.Builder();
        var thisObject = $(this);
        var dataHTML;
        $('#popup_confirm').click(function () {
            dataHTML = $('#dataTime select:eq(0)').val() + '-' + $('#dataTime select:eq(1)').val() + '-' + $('#dataTime select:eq(2)').val();
            if (val) {
                dataHTML = dataHTML + '  ' + $('#dataTime select:eq(3)').val() + ':' + $('#dataTime select:eq(4)').val();
            }
            thisObject.val(dataHTML);
            thisObject.attr('name', time.GetValue());
            $('.popup-window').remove();
        })
    });
}
function dataTimeWindow3(val) {
    $(document).on('click', '.datatime_window', function () {
        var headHTML = '时间';
        var bodyHTML = '<p>开始时间：</p><div id="dataTime1" class="data-time"></div><p>结束时间：</p><div id="dataTime2" class="data-time"></div>';
        popupWindow(headHTML, bodyHTML);
        var time1 = new SelectDateTime('dataTime1', val);
        time1.Builder();
        var time2 = new SelectDateTime('dataTime2', val);
        time2.Builder();
        var thisObject = $(this);
        $('#popup_confirm').click(function () {
            var dataHTML = $('#dataTime1 select:eq(0)').val() + '-' + $('#dataTime1 select:eq(1)').val() + '-' + $('#dataTime1 select:eq(2)').val();
            if (val) {
                dataHTML += ' ' + $('#dataTime1 select:eq(3)').val() + ':' + $('#dataTime1 select:eq(4)').val();
            }
            dataHTML += ',' + $('#dataTime2 select:eq(0)').val() + '-' + $('#dataTime2 select:eq(1)').val() + '-' + $('#dataTime2 select:eq(2)').val();
            if (val) {
                dataHTML += ' ' + $('#dataTime2 select:eq(3)').val() + ':' + $('#dataTime2 select:eq(4)').val();
            }
            console.log(dataHTML);
            thisObject.val(dataHTML);
            $('.popup-window').remove();
        })
    });
}
//长按效果 
$.fn.longPress = function(fn) {
    var $temThis = this;
    $temThis.each(function() {
        var timeout, target = this;
        var $events = $(this).data("events");
        if(!($events && $events["touchstart"])){
            $(this).on('touchstart',function(e) {
            timeout = setTimeout(function() {
                fn.apply(target);
            }, 800);
            })
            $(this).on('touchend',function(e) {
                clearTimeout(timeout);
            })
        }
    });
}

//全选
function checkAll(name) {
    var el = document.getElementsByTagName('input');
    var len = el.length;
    for (var i = 0; i < len; i++) {
        if ((el[i].type == "checkbox") && (el[i].name == name)) {
            el[i].checked = true;
        }
    }
}

//反选
function clearAll(name) {
    var el = document.getElementsByTagName('input');
    var len = el.length;
    for (var i = 0; i < len; i++) {
        if ((el[i].type == "checkbox") && (el[i].name == name)) {
            el[i].checked = false;
        }
    }
}

//添加用料
function addMaterial() {
    var num = $('#material_info tr').index();//tr的个数：用来生产id
    //alert(num);
/*    var materialHTML = '<tr><td><input type="text" class="input-text" /></td>' +
        '<td><input type="text" class="input-text" /></td>' +
        '<td><input type="number" min="0" class="input-text" /></td>' +
        '<td><input type="number" min="0" class="input-text" /></td>' +
        '<td><input type="text" class="input-text" /></td>' +
        '<td><i class="icon iconfont icon-guanbi2 shanchu-btn text-red" onclick="removeMaterial($(this))"></i></td></tr>';
    $('#material_info').append(materialHTML);    
*/    
    var materialHTML = '<tr><td><input id="material_'+num+'" type="text" class="materiel_select input-text" readonly="true" /></td>' +
        '<td><input type="text" class="input-text" /></td>' +
        '<td><input type="text" class="input-text" /></td>' +
        '<td><input type="number" min="0" class="input-text" /></td>' +
        '<td><i class="icon iconfont icon-guanbi2 shanchu-btn text-red" onclick="removeMaterial($(this))"></i></td></tr>';
    $('#material_info').append(materialHTML);
    
    var page_Name = pageName();
    selectPageLS(page_Name, 'material_' + num, 0, '', 0, '');//物料选择页面跳转
    appcan.openWinWithUrl('materiel_select','../../materiel_select.html');
}

//添加用料，回显
function addMaterial1() {
    var num = $('#material_info tr').index();//tr的个数：用来生产id
   
    var materialHTML = '<tr><td><input id="material_'+num+'" type="text" class="materiel_select input-text" readonly="true" /></td>' +
        '<td><input type="text" class="input-text" /></td>' +
        '<td><input type="text" class="input-text" /></td>' +
        '<td><input type="number" min="0" class="input-text" /></td>' +
        '<td><i class="icon iconfont icon-guanbi2 shanchu-btn text-red" onclick="removeMaterial($(this))"></i></td></tr>';
    $('#material_info').append(materialHTML);
    
}

function addMaterial2() {
    var num = $('#material_info tr').index();//tr的个数：用来生产id
    //alert(num);
    var materialHTML = '<tr><td><input id="material_'+num+'" type="text" class="materiel_select input-text" readonly="true" /></td>' +
        '<td><input type="text" class="input-text" /></td>' +
        '<td><input type="text" class="input-text" /></td>' +
        '<td><input type="number" min="0" class="input-text" /></td>' +
        '<td><i class="icon iconfont icon-guanbi2 shanchu-btn text-red" onclick="removeMaterial($(this))"></i></td></tr>';
    $('#material_info').append(materialHTML);
    
    var page_Name = pageName();
    selectPageLS(page_Name, 'material_' + num, 0, '', 0, '');//站点选择页面跳转
    appcan.openWinWithUrl('materiel_select','../materiel_select.html');
}
//删除用料
function removeMaterial(object) {
    object.parents('tr').remove();
}

/*******************************************/
// 消息模块

function message(option) {
    var infoArry = [];
    option = option || {};
    var isFirst = option.isFirst || false;

    if (isFirst) {
        localStorage.setItem('__dirPathDeep', location.pathname.split('/').length)
    }

    if ($('.msg_pop').length) return
    var onClickDiv = function () {
    };
    appcan.gsoft.ajaxUtil.ajax({
        url: "/MessagePushManager/getPagerMessagesById.json",
        data: "",
        success: function (data) {
            var drives = data.records;

            var infoCount = 0;
            $.map(drives, function (e) {
                if (e.fMpisread == 0) {
                    infoCount++
                }
            })
            if (!infoCount) {
                cleanInfo();
                return
            }
            var type = drives[0].fMptype;
            var content = drives[0].fMpcontent;
            var _flag = false;
            var $info = $('.info-tip');
            localStorage.setItem('__infoCount', infoCount);
            if (option.noPop) {
                return
            }
            var newCount = drives.length;
            // drives.map(function (e) {
            //     // alert(sessionStorage.getItem(e.fMpid) );
            //     // 判断消息是否提醒过,若没有则弹窗
            //     var _oldList = localStorage.getItem('infoIdList');
            //     if (!_oldList) {
            //         localStorage.setItem('infoIdList', '');
            //         _oldList = ''
            //     }
            //     if (_oldList.indexOf(e.fMpid) == -1) {
            //         _flag = true;
            //         newCount++;
            //         localStorage.setItem('infoIdList', _oldList + e.fMpid + ',')
            //     }
            //     // sessionStorage.setItem(e.fMpid, 1);
            // })
            // if (!_flag) return
            var onClickDivId = 'msg__' + new Date().getMilliseconds();
            var _msgHtml = '<div id=' + onClickDivId + ' class="msg_pop" style="position: fixed; top: 0; background: rgba(87, 87, 87, 0.57); width: 100%; height: 100%; z-index: 9999;"></div>'
            // var $lastBody = $('iframe:last', window.parent.document)[0].contentWindow.document.body;
            var $lastBody = $('body')[0];

            $($lastBody).append(_msgHtml);
            var _content = isFirst ? '您有' + infoCount + '条未读消息。'
                : '您有' + newCount + '条新消息。'
            var _btnHtml =
                type == 8 || type == 9 ? '<div class="msg_close">关闭</div>'
                    : '<div class="shaohou msg_close">稍后再看</div><div class="msg_goon">去查看</div>'
            _btnHtml = '<div class="shaohou msg_close">稍后再看</div><div class="msg_goon">去查看</div>';
            var ___msgHtmlTpl = '<div>' +
                '<div class="msg_title">新消息</div>' +
                '<div class="msg_content">' + _content + '</div>' +
                '<div class="msg_foot">' +
                _btnHtml +
                '</div>' +
                '</div>';
            $($lastBody).find('#' + onClickDivId).html(___msgHtmlTpl);
            ['.msg_goon', '.msg_close'].map(function (e) {
                $(e).attr('data-BussinessID', drives[0].fMpbusiness);
                $(e).attr('data-type', type);
                $(e).attr('data-fMpid', drives[0].fMpid);
            })
            _clickEvent($lastBody);
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
    // var oldList = localStorage.getItem('infoIdList');
    // if (oldList) {
    //     var index = oldList.indexOf(id);
    //     var newList = oldList.slice(0, ~~index) + oldList.slice(~~index + (id+'').length + 1)
    //     localStorage.setItem('infoIdList', newList);
    // }
    var oldCount = localStorage.getItem('__infoCount');
    localStorage.setItem('__infoCount', oldCount - 1);
}

function goTo(type, bussiness) {
    switch (~~type) {
        case 1: // 周期保养
            appcan.gsoft.parameterUtils.setPageParams(bussiness);
            appcan.openWinWithUrl('work', '../work/maintenance.html');
            break
        case 2: // 大修
            appcan.gsoft.parameterUtils.setPageParams(bussiness);
            appcan.openWinWithUrl('work', '../work/maintenance.html');
            break
        case 3: // 回库未检查
            localStorage.setItem('taskId', bussiness.split(',')[0]);
            appcan.openWinWithUrl('work' + bussiness, '../work/task_implement2.html');
            break
        case 4: // 任务确认
            localStorage.setItem('taskId', bussiness.split(',')[0]);
            appcan.openWinWithUrl('work' + bussiness, '../work/task_confirm.html');
            break
        case 5: // 任务确认完成
            localStorage.setItem('taskId', bussiness.split(',')[0]);
            appcan.openWinWithUrl('work' + bussiness, '../work/task_implement.html');
            break
        case 6: // 审批

        case 7: // 审批结束
            appcan.gsoft.ajaxUtil.ajax({
                url: '/eMainTainManager/getEMCommon.json',
                data: "flowNo=" + bussiness.split(',')[0],
                success: function (data) {
                    var record = data.record;
                    if (record) {
                        appcan.gsoft.parameterUtils.setPageParams(record);
                        switch (~~record.apprStatus) {
                            case 4:
                                appcan.openWinWithUrl('detail', '../work/acceptance/detail.html');
                                break;
                            case 6:
                                appcan.openWinWithUrl('acceptance_check', '../work/acceptance/acceptance_check.html');
                                break;
                            case 8:
                                appcan.openWinWithUrl('acceptance_check', '../work/acceptance/acceptance_check.html');
                                break;
                            default:
                                appcan.openWinWithUrl('check', '../work/check/check.html');
                                break;
                        }
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
                }
            });
            break
        default:
            break;
    }
}

function _clickEvent($lastBody) {
    $($lastBody).on('click', '.msg_close', function (e) {
        $($lastBody).find('.msg_pop').remove();
        var $self = $(this);
        var fMpid = $self.attr('data-fMpid');
        // saveMessageById(fMpid);
    })
    $($lastBody).on('click', '.msg_goon', function (e) {
        $($lastBody).find('.msg_pop').remove();
        // appcan.openWinWithUrl('user', 'user/user_info_list.html');
        gotoDir();
        // $('.msg_pop').remove();
        // var $self = $(this);
        // var fMpid = $self.attr('data-fMpid');
        // var type = $self.attr('data-type');
        // saveMessageById(fMpid);
        // var BussinessID = $self.attr('data-BussinessID');
        // goTo(type, BussinessID);
    })
}

function initMsg(time) {
    // 定时监听 localstorge变化

    setInterval(function () {
        var infoCount = localStorage.getItem('__infoCount');
        var $info = $('.info-tip');
        // var infoCount = sessionStorage.getItem('__infoCount');
        if (!infoCount || infoCount == '0' || ~~infoCount < 0) {
            $info.remove();
            localStorage.setItem('__infoCount', 0);
        }else {
            if ($info.length) {
                $info.text(infoCount);
            } else {
                $('.icon-xinxi').append('<i class="info-tip">' + infoCount + '</i>')
            }
        }

        var onlineType = localStorage.getItem('connectStatus');
        if (onlineType == 'offline' ) {
            if (!$('#offlineDiv').length) {
                var onlineTypeHTML = '<div id="offlineDiv" style="position:fixed;right:0;bottom:0;padding:.25em .5em;font-size:.75em;color:#fff;background-color:rgba(0, 0, 0, 0.3);">当前离线状态...</div>'
                $('body').append(onlineTypeHTML);
            }
        }else {
            $('#offlineDiv').remove();
        };

    }, 500)

    // setInterval(function () {
    //     appcan.window.getState(function (err, data) { //data:返回的状态值，0：前台；1：后台；
    //         if (data == 0) {
    //             message();
    //         }
    //     });
    // }, time || 10000);

    // localStorage.setItem('_intervalId', _intervalId);
    // 前后台切换时 切换定时器状态
    // appcan.window.stateChange(function (data) {
    //     clearInterval(localStorage.getItem('_intervalId'));
    // })
}

function gotoDir(name, url, data) {
    var _params = ''
    function setQueryConfig(queryConfig){
        var _str = "";
        for(var o in queryConfig){
            if(queryConfig[o] != -1){
                _str += o + "=" + queryConfig[o] + "&";
            }
        }
        _str = _str.substring(0, _str.length-1);
        return _str;
    }
    if (data && appcan._.isObject(data)) {
        _params = setQueryConfig(data);
    }
    var upCount = location.pathname.split('/').length - (localStorage.getItem('__dirPathDeep') || 3);
    var _str = ''
    while (upCount--) {
        _str += '../'
    }
    var _url = _str + (url || 'user/user_info_list.html');
    if (_params) {
        _url = _url + '?' + _params;
    }
    appcan.window.open({
        name: name || 'user_info_list',
        data: _url,
        dataType: 0,
        type: 4,
        aniId: 2
    })
}

function cleanInfo() {
    // $('.info-tip').remove();
    localStorage.removeItem('__infoCount')
    localStorage.removeItem('infoIdList')
}

var info_flag__ = true
appcan.ready(function () {
    if (info_flag__) {
        $(document).on('click', '.header .icon-xinxi', function (e) {
            gotoDir();
        })
        setTimeout(function () {
                initMsg()
            }, 500
        );
        appcan.window.subscribe('callMsg', function () {
            appcan.window.getState(function (err, data) {
                // alert('login:' + data);
                if (data == 0) {
                    message();
                }
            });
        })
        // initMsg();
    }

    // 下拉框箭头样式
    $('select').on('click', function (e) {
        $(this).addClass('flipy')
    })
    $('select').on('focusout', function (e) {
        $(this).removeClass('flipy');
    })
    $('select').on('change', function (e) {
        $(this).removeClass('flipy');
    })

})

/*******************************************/

// 机车颜色
// var scaleArray = new Array(0.75,0.90,0.98);
// var closrArray = new Array("0","#fffff1","#fffff2","#ffff3");
// var rs = GetScaleSide(scaleArray,7800/10000,closrArray);

function GetScaleSide(scaleArray,scale,ColorArray) {
    var res = ColorArray[0] || '';
    for (var i = 0; i < scaleArray.length; i++) {
        if (scale >= +scaleArray[i]) {
            res = ColorArray[i + 1];
        }
    }
    return res;
}
