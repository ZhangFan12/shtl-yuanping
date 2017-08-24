 function gltl_question()
 {
     DataAccess.call(this);
     this.TableName = "gltl_question";
     this.Fields.push("F_QID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fqid");

     this.Fields.push("F_QTYPE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("type");

     this.Fields.push("F_QCONTENT");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(255);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("content");

     this.Fields.push("F_QSORT");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("serialNumber");

     this.Fields.push("F_QANSWER");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(65535);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("answer");

     this.Fields.push("F_QNOTE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(255);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("note");

     this.Fields.push("F_QCREATOR");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("creator");

     this.Fields.push("F_QCREATETIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("createtime");

     this.Fields.push("F_QUPDATETIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("updatetime");

     this.Fields.push("F_QEXTEND");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("");

     this.Fields.push("F_QGRADE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("grade");

     this.Fields.push("F_QISMUTIPLE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("ismutiple");

     this.Fields.push("F_QISDELETE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_question = function () { };
 Supergltl_question.prototype = DataAccess.prototype;
 gltl_question.prototype = new Supergltl_question();

gltl_question.prototype.SetF_QID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_question.prototype.GetF_QID = function()
{
    return this.FieldsValue[0];
}

gltl_question.prototype.SetF_QTYPE = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_question.prototype.GetF_QTYPE = function()
{
    return this.FieldsValue[1];
}

gltl_question.prototype.SetF_QCONTENT = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_question.prototype.GetF_QCONTENT = function()
{
    return this.FieldsValue[2];
}

gltl_question.prototype.SetF_QSORT = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_question.prototype.GetF_QSORT = function()
{
    return this.FieldsValue[3];
}

gltl_question.prototype.SetF_QANSWER = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_question.prototype.GetF_QANSWER = function()
{
    return this.FieldsValue[4];
}

gltl_question.prototype.SetF_QNOTE = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_question.prototype.GetF_QNOTE = function()
{
    return this.FieldsValue[5];
}

gltl_question.prototype.SetF_QCREATOR = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_question.prototype.GetF_QCREATOR = function()
{
    return this.FieldsValue[6];
}

gltl_question.prototype.SetF_QCREATETIME = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_question.prototype.GetF_QCREATETIME = function()
{
    return this.FieldsValue[7];
}

gltl_question.prototype.SetF_QUPDATETIME = function(value)
{
    this.FieldsValue[8] = value;
}

gltl_question.prototype.GetF_QUPDATETIME = function()
{
    return this.FieldsValue[8];
}

gltl_question.prototype.SetF_QEXTEND = function(value)
{
    this.FieldsValue[9] = value;
}

gltl_question.prototype.GetF_QEXTEND = function()
{
    return this.FieldsValue[9];
}

gltl_question.prototype.SetF_QGRADE = function(value)
{
    this.FieldsValue[10] = value;
}

gltl_question.prototype.GetF_QGRADE = function()
{
    return this.FieldsValue[10];
}

gltl_question.prototype.SetF_QISMUTIPLE = function(value)
{
    this.FieldsValue[11] = value;
}

gltl_question.prototype.GetF_QISMUTIPLE = function()
{
    return this.FieldsValue[11];
}

gltl_question.prototype.SetF_QISDELETE = function(value)
{
    this.FieldsValue[12] = value;
}

gltl_question.prototype.GetF_QISDELETE = function()
{
    return this.FieldsValue[12];
}

gltl_question.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[13] = value;
}

gltl_question.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[13];
}

gltl_question.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_question();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_question.prototype.DownLoadEx = function () {
    var entry = new gltl_question();
    this.DownLoad(entry);
}

gltl_question.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_question();
    this.UpLoadData(entry,callback);
}
