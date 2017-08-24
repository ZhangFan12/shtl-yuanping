 function gltl_answerrecord()
 {
     DataAccess.call(this);
     this.TableName = "gltl_answerrecord";
     this.Fields.push("F_ARID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("farid");

     this.Fields.push("F_UID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fuid");

     this.Fields.push("F_QTID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fqtid");

     this.Fields.push("F_ARPERIODS");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("farperiods");

     this.Fields.push("F_ARSTARTTIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("farstarttime");

     this.Fields.push("F_ARENDTIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("farendtime");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_answerrecord = function () { };
 Supergltl_answerrecord.prototype = DataAccess.prototype;
 gltl_answerrecord.prototype = new Supergltl_answerrecord();

gltl_answerrecord.prototype.SetF_ARID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_answerrecord.prototype.GetF_ARID = function()
{
    return this.FieldsValue[0];
}

gltl_answerrecord.prototype.SetF_UID = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_answerrecord.prototype.GetF_UID = function()
{
    return this.FieldsValue[1];
}

gltl_answerrecord.prototype.SetF_QTID = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_answerrecord.prototype.GetF_QTID = function()
{
    return this.FieldsValue[2];
}

gltl_answerrecord.prototype.SetF_ARPERIODS = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_answerrecord.prototype.GetF_ARPERIODS = function()
{
    return this.FieldsValue[3];
}

gltl_answerrecord.prototype.SetF_ARSTARTTIME = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_answerrecord.prototype.GetF_ARSTARTTIME = function()
{
    return this.FieldsValue[4];
}

gltl_answerrecord.prototype.SetF_ARENDTIME = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_answerrecord.prototype.GetF_ARENDTIME = function()
{
    return this.FieldsValue[5];
}

gltl_answerrecord.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_answerrecord.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[6];
}

gltl_answerrecord.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_answerrecord();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_answerrecord.prototype.DownLoadEx = function () {
    var entry = new gltl_answerrecord();
    this.DownLoad(entry);
}

gltl_answerrecord.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_answerrecord();
    this.UpLoadData(entry,callback);
}
