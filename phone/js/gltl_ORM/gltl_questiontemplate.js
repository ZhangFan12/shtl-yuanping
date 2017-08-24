 function gltl_questiontemplate()
 {
     DataAccess.call(this);
     this.TableName = "gltl_questiontemplate";
     this.Fields.push("F_QTID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fqtid");

     this.Fields.push("F_QTNAME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("qtname");

     this.Fields.push("F_QTINDEX");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("qtindex");

     this.Fields.push("F_QTTIMECYCLE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("timecycle");

     this.Fields.push("F_QTBUILDER");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("builder");

     this.Fields.push("F_QTBUILDDATE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("buildDate");

     this.Fields.push("F_QTISON");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fqtison");

     this.Fields.push("F_QTSTARTDATE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("startDate");

     this.Fields.push("F_QTENDDATE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("endDate");

     this.Fields.push("F_QTISTIMELIMIT");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("");

     this.Fields.push("F_QTLIMITMINUTES");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("limitMinutes");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_questiontemplate = function () { };
 Supergltl_questiontemplate.prototype = DataAccess.prototype;
 gltl_questiontemplate.prototype = new Supergltl_questiontemplate();

gltl_questiontemplate.prototype.SetF_QTID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_questiontemplate.prototype.GetF_QTID = function()
{
    return this.FieldsValue[0];
}

gltl_questiontemplate.prototype.SetF_QTNAME = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_questiontemplate.prototype.GetF_QTNAME = function()
{
    return this.FieldsValue[1];
}

gltl_questiontemplate.prototype.SetF_QTINDEX = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_questiontemplate.prototype.GetF_QTINDEX = function()
{
    return this.FieldsValue[2];
}

gltl_questiontemplate.prototype.SetF_QTTIMECYCLE = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_questiontemplate.prototype.GetF_QTTIMECYCLE = function()
{
    return this.FieldsValue[3];
}

gltl_questiontemplate.prototype.SetF_QTBUILDER = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_questiontemplate.prototype.GetF_QTBUILDER = function()
{
    return this.FieldsValue[4];
}

gltl_questiontemplate.prototype.SetF_QTBUILDDATE = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_questiontemplate.prototype.GetF_QTBUILDDATE = function()
{
    return this.FieldsValue[5];
}

gltl_questiontemplate.prototype.SetF_QTISON = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_questiontemplate.prototype.GetF_QTISON = function()
{
    return this.FieldsValue[6];
}

gltl_questiontemplate.prototype.SetF_QTSTARTDATE = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_questiontemplate.prototype.GetF_QTSTARTDATE = function()
{
    return this.FieldsValue[7];
}

gltl_questiontemplate.prototype.SetF_QTENDDATE = function(value)
{
    this.FieldsValue[8] = value;
}

gltl_questiontemplate.prototype.GetF_QTENDDATE = function()
{
    return this.FieldsValue[8];
}

gltl_questiontemplate.prototype.SetF_QTISTIMELIMIT = function(value)
{
    this.FieldsValue[9] = value;
}

gltl_questiontemplate.prototype.GetF_QTISTIMELIMIT = function()
{
    return this.FieldsValue[9];
}

gltl_questiontemplate.prototype.SetF_QTLIMITMINUTES = function(value)
{
    this.FieldsValue[10] = value;
}

gltl_questiontemplate.prototype.GetF_QTLIMITMINUTES = function()
{
    return this.FieldsValue[10];
}

gltl_questiontemplate.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[11] = value;
}

gltl_questiontemplate.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[11];
}

gltl_questiontemplate.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_questiontemplate();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_questiontemplate.prototype.DownLoadEx = function () {
    var entry = new gltl_questiontemplate();
    this.DownLoad(entry);
}

gltl_questiontemplate.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_questiontemplate();
    this.UpLoadData(entry,callback);
}
