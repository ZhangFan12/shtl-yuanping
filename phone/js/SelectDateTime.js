g_SelectDateTimeMonthDays = null;
function SelectDateTime(divID,bIsHaveTime) {
    this.MaxDiv = document.getElementById(divID);
    this.DomArray = new Array();
    this.HaveTime = bIsHaveTime;
    g_SelectDateTimeMonthDays = new Array();
    g_SelectDateTimeMonthDays.push(31);
    g_SelectDateTimeMonthDays.push(28);
    g_SelectDateTimeMonthDays.push(31);
    g_SelectDateTimeMonthDays.push(30);
    g_SelectDateTimeMonthDays.push(31);
    g_SelectDateTimeMonthDays.push(30);
    g_SelectDateTimeMonthDays.push(31);
    g_SelectDateTimeMonthDays.push(31);
    g_SelectDateTimeMonthDays.push(30);
    g_SelectDateTimeMonthDays.push(31);
    g_SelectDateTimeMonthDays.push(30);
    g_SelectDateTimeMonthDays.push(31);
}

function g_SelectDateTimeCreateOption(value,bIsSelect) {
    //保存当前对象的引用
    var option = document.createElement('option');
    option.value = value;
    option.innerText = value;
    //	parentDiv.style.width = "100%";
    //	parentDiv.style.height = "100%";
    //	parentDiv.style.border = "thin groove #FFF";
    if (bIsSelect) {
        option.selected = "selected"
    }
    return option;
}

function g_SelectDateTimeValiateYear(year,month) {
    var bIsLeap = false;
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        bIsLeap = true;
    }
    if (month == 2) {
        if (bIsLeap) {
            g_SelectDateTimeMonthDays[1] = 29;
        }
        else {
            g_SelectDateTimeMonthDays[1] = 28;
        }
    }
}

function g_FillDaysSelect() {
    var eventID = event.srcElement.id;
    var isMonth = eventID.indexOf("Month") > -1 ? true:false;
    var month = 0;
    var year = 0;
    var temp = eventID.split('_');
    if (isMonth) {
        month = parseInt(document.getElementById(eventID).value);
        year = parseInt(document.getElementById(temp[0] + "_Year").value);
    }
    else {
        month = parseInt(document.getElementById(temp[0] + "_Month").value);
        year = parseInt(document.getElementById(eventID).value);
    }

    var daySelect = document.getElementById(temp[0] + "_Day");
    g_SelectDateTimeValiateYear(year, month);
    var monthDays = g_SelectDateTimeMonthDays[month - 1];
    var t = daySelect.value;
    daySelect.innerHTML = "";
    for (var i = 1; i <= monthDays; i++) {
        var value = i > 9 ? "" + i : "0" + i;
        var bIsSelet = value == t ? true : false;
        daySelect.appendChild(g_SelectDateTimeCreateOption(value,bIsSelet));
    }
}

//创建Div
SelectDateTime.prototype.Builder = function () {

    var date = new Date();
    var defYear = date.getFullYear();
    var defMonth = date.getMonth() + 1;
    var defDays = date.getDate();
    var defHour = date.getHours();
    var defMinute = date.getMinutes();

    

    var selectY = document.createElement('select');
    selectY.id = this.MaxDiv + "_Year";

    for (var i = 2008; i <= 2050; i++) {
        var bIsSelect = i == defYear ? true : false;
        selectY.appendChild(g_SelectDateTimeCreateOption(i, bIsSelect));
    }
    this.MaxDiv.appendChild(selectY);
    this.DomArray.push(selectY);
    
    var lableY = document.createElement('label');
    lableY.innerText = "年";
    this.MaxDiv.appendChild(lableY);

    var selectM = document.createElement('select');
    selectM.id = this.MaxDiv + "_Month";

    for (var i = 1; i <= 12; i++) {
        var value = i > 9 ? "" + i : "0" + i;
        var bIsSelect = i == defMonth ? true : false;
        selectM.appendChild(g_SelectDateTimeCreateOption(value, bIsSelect));
    }
    this.MaxDiv.appendChild(selectM);
    this.DomArray.push(selectM);

    var lableM = document.createElement('label');
    lableM.innerText = "月";
    this.MaxDiv.appendChild(lableM);

    var selectD = document.createElement('select');
    selectD.id = this.MaxDiv + "_Day";

    g_SelectDateTimeValiateYear(defYear, defMonth);
    var monthDays = g_SelectDateTimeMonthDays[defMonth - 1];

    for (var i = 1; i <= monthDays; i++) {
        var value = i > 9 ? "" + i : "0" + i;
        var bIsSelect = i == defDays ? true : false;
        selectD.appendChild(g_SelectDateTimeCreateOption(value, bIsSelect));
    }

    this.MaxDiv.appendChild(selectD);
    this.DomArray.push(selectD);

    var lableD = document.createElement('label');
    lableD.innerText = "日";
    this.MaxDiv.appendChild(lableD);
    
    //selectY.addEventListener("change", selectM.change(););

    selectM.addEventListener("change", g_FillDaysSelect);

    selectY.addEventListener("change", g_FillDaysSelect);

    if (this.HaveTime) {
        var selectH = document.createElement('select');
        selectH.id = this.MaxDiv + "_Hour";

        for (var i = 0; i <= 23; i++) {
            var value = i > 9 ? "" + i : "0" + i;
            var bIsSelect = i == defHour ? true : false;
            selectH.appendChild(g_SelectDateTimeCreateOption(value, bIsSelect));
        }
        this.MaxDiv.appendChild(selectH);
        this.DomArray.push(selectH);

        var lableH = document.createElement('label');
        lableH.innerText = "时";
        this.MaxDiv.appendChild(lableH);
        
        var selectMM = document.createElement('select');
        selectMM.id = this.MaxDiv + "_Minute";

        for (var i = 0; i < 60; i++) {
            var value = i > 9 ? "" + i : "0" + i;
            var bIsSelect = i == defMinute ? true : false;
            selectMM.appendChild(g_SelectDateTimeCreateOption(value, bIsSelect));
        }
        this.MaxDiv.appendChild(selectMM);
        this.DomArray.push(selectMM);
        
        var lableMM = document.createElement('label');
        lableMM.innerText = "分";
        this.MaxDiv.appendChild(lableMM);
    }
}

SelectDateTime.prototype.GetValue = function () {
    //保存当前对象的引用
    var str = "";
    if (this.HaveTime) {
        for (var i = 0; i < this.DomArray.length; i++) {
            if (i < 2) {
                str += this.DomArray[i].value + "-";
            }
            else if (i == 2) {
                str += this.DomArray[i].value + " ";
            }
            else {
                str += this.DomArray[i].value + ":";
            }
        }
        str += "00";
    }
    else {
        for (var i = 0; i < this.DomArray.length; i++) {
            if (i < this.DomArray.length - 1) {
                str += this.DomArray[i].value + "-";
            }
            else {
                str += this.DomArray[i].value;
            }
        }
    }
    return str;
}
