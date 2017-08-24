
function InspectprojectList(divID, divInfo) {
    this.MaxDiv = document.getElementById(divID);
    this.DataArray = divInfo;
}

function AllSelectOrAllNotSelect() {
    var bIsAll = false;
    var temp = event.srcElement.id.split("_InspectList_AllCheck");
    if (temp.length < 2) {
        temp = event.srcElement.id.split("_InspectList_AllNotCheck");
        document.getElementById(temp[0] + "_InspectList_AllCheck").checked = false;
    }
    else {
        bIsAll = true;
        document.getElementById(temp[0] + "_InspectList_AllNotCheck").checked = false;
    }
    var maxCount = event.srcElement.getAttribute("CheckMaxCount");
    for (var i = 1; i <= maxCount; i++) {
        var checkBox = document.getElementById(temp[0] + "_InspectList_Project" + i);
        checkBox.checked = bIsAll;
    }

}

//创建控件
InspectprojectList.prototype.Builder = function () {
    var rowHeight = 5;
    var lineStyle = "border: thin ridge #000000;";
    var HTML = '<div id = "' + this.MaxDiv.id + '_InspectList">' +
            '<div style="position: absolute;right: 0;top: -1.75em;">' +
                '<label><span id = "' + this.MaxDiv.id + '_ControlPlan"><input id = "' + this.MaxDiv.id + '_InspectList_AllCheck" type="radio" onclick = "AllSelectOrAllNotSelect();"></input></span>' +
                '<span>全选</span></label>' +
                '<label><span><input id = "' + this.MaxDiv.id + '_InspectList_AllNotCheck" type ="radio" onclick = "AllSelectOrAllNotSelect();"></input></span>' +
                '<span>全不选</span></label>' + 
            '</div>'+
        '<ul class="task-implement-list font-size0875">';
    for (var i = 0; i < this.DataArray.length; i++) {
        var rH = (i + 1) * rowHeight;
        var index = i + 1;
        var text = this.DataArray[i].DisplayText;
        
        var itemHTML = '<li><label>' +
            '<input id = "' + this.MaxDiv.id + '_InspectList_Project' + index + '" type ="checkbox" />' +
            '<span>' + text + '</span>' +
        '</label></li>';
        HTML += itemHTML;
    }
    HTML += "</ul>";
    //HTML += '<input class="btn" type = "button" onclick ="GetCheckBoxState();" value="提交"/>'
    this.MaxDiv.innerHTML = HTML;
    //alert(this.MaxDiv.innerHTML);

    var allSelect = document.getElementById(this.MaxDiv.id + "_InspectList_AllCheck");
    var allNotSelect = document.getElementById(this.MaxDiv.id + "_InspectList_AllNotCheck");


    allSelect.setAttribute('CheckMaxCount', this.DataArray.length);
    allNotSelect.setAttribute('CheckMaxCount', this.DataArray.length);

//    $(this.MaxDiv.id + "_InspectList_AllCheck").change(function () {
//        alert("tt");
//        AllSelectOrAllNotSelect();
//    }
//    );
//    $(this.MaxDiv.id + "_InspectList_AllNotCheck").click(AllSelectOrAllNotSelect);
    //allSelect.addEventListener("change ", AllSelectOrAllNotSelect);
    //allNotSelect.addEventListener("change ", AllSelectOrAllNotSelect);

    //var controlDiv = document.getElementById(this.MaxDiv.id + "_ControlPlan");
    //controlDiv.addEventListener("click ", AllSelectOrAllNotSelect);
    //document.body.addEventListener("click ", AllSelectOrAllNotSelect);
}

InspectprojectList.prototype.GetCheckState = function () {
    var ResultArray = new Array();
    for (var i = 0; i < this.DataArray.length; i++) {
        var index = i + 1;
        var checkID = this.MaxDiv.id + "_InspectList_Project" + index;
        var checkBox = document.getElementById(checkID);
        var item = new DivInfo(null, this.DataArray[i].DisplayText, this.DataArray[i].BussinessID, checkBox.checked + "");
        ResultArray.push(item);
    }
    return ResultArray;
}