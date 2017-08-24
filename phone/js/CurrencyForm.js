var g_CurrentForm = null;
function FieldCommit()
{
    this.Field;
    this.CommitContent;
}

function gl_DropDownListData(busID,text,typeID)
{
    this.CommitBusID = busID;
    this.Text = text;
    this.TypeID = typeID;
}

function CurrencyForm(fieldsArray,fieldTypeArray,inputTypeArray,inputCssArray,divIDArray,downListDataArray) 
{
    this.FieldsArray = fieldsArray;
    this.FieldTypeArray = fieldTypeArray;
    this.InputTypeArray = inputTypeArray;
    this.InputCssArray = inputCssArray;
    this.DivIDArray = divIDArray;
    this.DownListDataArray = downListDataArray;
    this.DropDownDivID = "SelectDivSide";
    this.ElementArray = new Array();

    g_CurrentForm = this;
}

//将下拉的选项存在Dom元素中，并关掉选择区域Div
CurrencyForm.prototype.SelectDivOnClickDiv = function () {
    var busiD = window.event.srcElement.getAttribute("BussinessID");
    var text = window.event.srcElement.innerText;
    var array = busiD.split(',');
    busiD = array[0];
    var field = array[1];
    var form = g_CurrentForm;
    for (var i = 0; i < form.FieldsArray.length; i++) {
        if (form.FieldsArray[i] == field) {
            form.ElementArray[i].value = text;
            form.ElementArray[i].setAttribute('BussinessID', busiD);
            break;
        }
    }
    var selectDiv = document.getElementById(form.DropDownDivID + field);
    document.body.removeChild(selectDiv);
}

//开启选择区域Div
CurrencyForm.prototype.CreateSelectDiv = function (downListData, field) {
    var width = document.body.offsetWidth;
    var height = document.body.offsetHeight;
    var selectDiv = document.createElement("div");
    selectDiv.id = this.DropDownDivID + field;
    selectDiv.style.left = width / 10 + "px";
    selectDiv.style.top = height / 10 + "px";
    selectDiv.style.width = width / 10 * 8 + "px";
    selectDiv.style.height = height / 10 * 8 + "px";
    selectDiv.style.position = "absolute";
    selectDiv.style.zIndex = 9999;
   
    //selectDiv.style.position = "absolute";
    document.body.appendChild(selectDiv);
    var infoArry = new Array();
    for (var i = 0; i < downListData.length; i++) {
        var info = new DivInfo(this.SelectDivOnClickDiv, "", downListData[i].CommitBusID + "," + downListData[i].TypeID, downListData[i].Text);
        infoArry.push(info);
    }
    var divD = new DivDisplayFrame(this.DropDownDivID + field, 8, "", infoArry);
    divD.Load();
}

//创建表单元素
CurrencyForm.prototype.CreateElement = function (parentID, field, inputType, inputCss) {

    var parentDiv = document.getElementById(parentID);
    var element = null;
    if (inputType == "dateTime") {
        element = document.createElement("button");
    }
    else {
        element = document.createElement("input");
    }
    element.id = field;
    element.class = inputCss;
    parentDiv.appendChild(element);

    var dropDownData = null;
    for (var i = 0; i < this.DownListDataArray.length; i++) {
        if (this.FieldsArray[i] == field) {
            dropDownData = this.DownListDataArray[i];
            break;
        }
    }
    if (inputType == "select") {
        //belement.addEventListener("focus", this.CreateSelectDiv(dropDownData, field));
        element.addEventListener("click", this.CreateSelectDiv(dropDownData, field)); 
    }
    else if (inputType == "dateTime") {
    }
    return element;
}

CurrencyForm.prototype.CreateForm = function () 
{
    for (var i = 0; i < this.FieldsArray.length; i++) {
        this.ElementArray.push(this.CreateElement(this.DivIDArray[i], this.FieldsArray[i], this.InputTypeArray[i], this.InputCssArray[i]));
    }
}

CurrencyForm.prototype.GetCommitData = function () {
    var commitArray = new Array();
    for (var i = 0; i < this.ElementArray.length; i++) {
        var dom = this.ElementArray[i];
        var commitItem = new FieldCommit();
        commitItem.Field = this.FieldsArray[i];

        if (this.InputTypeArray[i] == "select") {
            commitItem.CommitContent = dom.getAttribute("BussinessID");
        }
        else if (this.InputTypeArray[i] == "input") {
            if (this.FieldTypeArray[i] == "text") {
                commitItem.CommitContent = dom.value;
            }
            else if (this.FieldTypeArray[i] == "int") {
                commitItem.CommitContent = parseInt(dom.value);
            }
            else if (this.FieldTypeArray[i] == "float") {
                commitItem.CommitContent = parseFloat(dom.value);
            }
        }
        commitArray.push(commitItem);
    }
    return commitItem;
}

