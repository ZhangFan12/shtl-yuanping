 function gltl_enginerepair()
 {
     DataAccess.call(this);
     this.TableName = "gltl_enginerepair";
     this.Fields.push("F_ERID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("id");

     this.Fields.push("F_EID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("engine");

     this.Fields.push("F_ERSTARTTIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("startTime");

     this.Fields.push("F_ERENDTIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("endTime");

     this.Fields.push("F_UID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("uid");

     this.Fields.push("F_ERTYPE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("rType");

     this.Fields.push("F_ERRUN");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("run");

     this.Fields.push("F_ERCASE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(255);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("reason");

     this.Fields.push("F_ERSTYLE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(255);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("style");

     this.Fields.push("F_ERSTATUE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("status");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_enginerepair = function () { };
 Supergltl_enginerepair.prototype = DataAccess.prototype;
 gltl_enginerepair.prototype = new Supergltl_enginerepair();

gltl_enginerepair.prototype.SetF_ERID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_enginerepair.prototype.GetF_ERID = function()
{
    return this.FieldsValue[0];
}

gltl_enginerepair.prototype.SetF_EID = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_enginerepair.prototype.GetF_EID = function()
{
    return this.FieldsValue[1];
}

gltl_enginerepair.prototype.SetF_ERSTARTTIME = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_enginerepair.prototype.GetF_ERSTARTTIME = function()
{
    return this.FieldsValue[2];
}

gltl_enginerepair.prototype.SetF_ERENDTIME = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_enginerepair.prototype.GetF_ERENDTIME = function()
{
    return this.FieldsValue[3];
}

gltl_enginerepair.prototype.SetF_UID = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_enginerepair.prototype.GetF_UID = function()
{
    return this.FieldsValue[4];
}

gltl_enginerepair.prototype.SetF_ERTYPE = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_enginerepair.prototype.GetF_ERTYPE = function()
{
    return this.FieldsValue[5];
}

gltl_enginerepair.prototype.SetF_ERRUN = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_enginerepair.prototype.GetF_ERRUN = function()
{
    return this.FieldsValue[6];
}

gltl_enginerepair.prototype.SetF_ERCASE = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_enginerepair.prototype.GetF_ERCASE = function()
{
    return this.FieldsValue[7];
}

gltl_enginerepair.prototype.SetF_ERSTYLE = function(value)
{
    this.FieldsValue[8] = value;
}

gltl_enginerepair.prototype.GetF_ERSTYLE = function()
{
    return this.FieldsValue[8];
}

gltl_enginerepair.prototype.SetF_ERSTATUE = function(value)
{
    this.FieldsValue[9] = value;
}

gltl_enginerepair.prototype.GetF_ERSTATUE = function()
{
    return this.FieldsValue[9];
}

gltl_enginerepair.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[10] = value;
}

gltl_enginerepair.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[10];
}

gltl_enginerepair.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_enginerepair();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_enginerepair.prototype.DownLoadEx = function () {
    var entry = new gltl_enginerepair();
    this.DownLoad(entry);
}

gltl_enginerepair.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_enginerepair();
    this.UpLoadData(entry,callback);
}
