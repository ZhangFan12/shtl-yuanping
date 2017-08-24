 function gltl_runlineschemeitem()
 {
     DataAccess.call(this);
     this.TableName = "gltl_runlineschemeitem";
     this.Fields.push("F_RLSIID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fRlsiid");

     this.Fields.push("F_RLSID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fRlsid");

     this.Fields.push("F_SID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fSid");

     this.Fields.push("F_RLSIINDEX");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fRlsiindex");

     this.Fields.push("F_RLSIOUTTIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("");

     this.Fields.push("F_RLSIARRIVETIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fRlsiarrivetime");

     this.Fields.push("F_SWID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fSwid");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_runlineschemeitem = function () { };
 Supergltl_runlineschemeitem.prototype = DataAccess.prototype;
 gltl_runlineschemeitem.prototype = new Supergltl_runlineschemeitem();

gltl_runlineschemeitem.prototype.SetF_RLSIID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_runlineschemeitem.prototype.GetF_RLSIID = function()
{
    return this.FieldsValue[0];
}

gltl_runlineschemeitem.prototype.SetF_RLSID = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_runlineschemeitem.prototype.GetF_RLSID = function()
{
    return this.FieldsValue[1];
}

gltl_runlineschemeitem.prototype.SetF_SID = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_runlineschemeitem.prototype.GetF_SID = function()
{
    return this.FieldsValue[2];
}

gltl_runlineschemeitem.prototype.SetF_RLSIINDEX = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_runlineschemeitem.prototype.GetF_RLSIINDEX = function()
{
    return this.FieldsValue[3];
}

gltl_runlineschemeitem.prototype.SetF_RLSIOUTTIME = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_runlineschemeitem.prototype.GetF_RLSIOUTTIME = function()
{
    return this.FieldsValue[4];
}

gltl_runlineschemeitem.prototype.SetF_RLSIARRIVETIME = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_runlineschemeitem.prototype.GetF_RLSIARRIVETIME = function()
{
    return this.FieldsValue[5];
}

gltl_runlineschemeitem.prototype.SetF_SWID = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_runlineschemeitem.prototype.GetF_SWID = function()
{
    return this.FieldsValue[6];
}

gltl_runlineschemeitem.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_runlineschemeitem.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[7];
}

gltl_runlineschemeitem.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_runlineschemeitem();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_runlineschemeitem.prototype.DownLoadEx = function () {
    var entry = new gltl_runlineschemeitem();
    this.DownLoad(entry);
}

gltl_runlineschemeitem.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_runlineschemeitem();
    this.UpLoadData(entry,callback);
}
