 function gltl_runlinescheme()
 {
     DataAccess.call(this);
     this.TableName = "gltl_runlinescheme";
     this.Fields.push("F_RLSID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fRlsid");

     this.Fields.push("F_RLSNAME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fRlsame");

     this.Fields.push("F_RLSSTATIONCOUNT");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fRlsstationcount");

     this.Fields.push("F_RLSLENGTH");
     this.FieldsType.push("DbType.Double");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fRlslength");

     this.Fields.push("F_RLSSTARTTIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fRlsstarttime");

     this.Fields.push("F_RLSENDTIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fRlsendtime");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_runlinescheme = function () { };
 Supergltl_runlinescheme.prototype = DataAccess.prototype;
 gltl_runlinescheme.prototype = new Supergltl_runlinescheme();

gltl_runlinescheme.prototype.SetF_RLSID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_runlinescheme.prototype.GetF_RLSID = function()
{
    return this.FieldsValue[0];
}

gltl_runlinescheme.prototype.SetF_RLSNAME = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_runlinescheme.prototype.GetF_RLSNAME = function()
{
    return this.FieldsValue[1];
}

gltl_runlinescheme.prototype.SetF_RLSSTATIONCOUNT = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_runlinescheme.prototype.GetF_RLSSTATIONCOUNT = function()
{
    return this.FieldsValue[2];
}

gltl_runlinescheme.prototype.SetF_RLSLENGTH = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_runlinescheme.prototype.GetF_RLSLENGTH = function()
{
    return this.FieldsValue[3];
}

gltl_runlinescheme.prototype.SetF_RLSSTARTTIME = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_runlinescheme.prototype.GetF_RLSSTARTTIME = function()
{
    return this.FieldsValue[4];
}

gltl_runlinescheme.prototype.SetF_RLSENDTIME = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_runlinescheme.prototype.GetF_RLSENDTIME = function()
{
    return this.FieldsValue[5];
}

gltl_runlinescheme.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_runlinescheme.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[6];
}

gltl_runlinescheme.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_runlinescheme();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_runlinescheme.prototype.DownLoadEx = function () {
    var entry = new gltl_runlinescheme();
    this.DownLoad(entry);
}

gltl_runlinescheme.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_runlinescheme();
    this.UpLoadData(entry,callback);
}
