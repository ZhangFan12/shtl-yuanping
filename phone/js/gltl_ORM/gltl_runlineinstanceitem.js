 function gltl_runlineinstanceitem()
 {
     DataAccess.call(this);
     this.TableName = "gltl_runlineinstanceitem";
     this.Fields.push("F_RLIIID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fRliiid");

     this.Fields.push("F_SID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fSid");

     this.Fields.push("F_RLLIARRIVETIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fRlliarrivetime");

     this.Fields.push("F_RLIID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fRliid");

     this.Fields.push("F_SWID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fSwid");

     this.Fields.push("F_RLLOUTTIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fRllouttime");

     this.Fields.push("F_RLLREMARK");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(500);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fRllremark");

     this.Fields.push("F_RLLINDEX");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fRllindex");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_runlineinstanceitem = function () { };
 Supergltl_runlineinstanceitem.prototype = DataAccess.prototype;
 gltl_runlineinstanceitem.prototype = new Supergltl_runlineinstanceitem();

gltl_runlineinstanceitem.prototype.SetF_RLIIID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_runlineinstanceitem.prototype.GetF_RLIIID = function()
{
    return this.FieldsValue[0];
}

gltl_runlineinstanceitem.prototype.SetF_SID = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_runlineinstanceitem.prototype.GetF_SID = function()
{
    return this.FieldsValue[1];
}

gltl_runlineinstanceitem.prototype.SetF_RLLIARRIVETIME = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_runlineinstanceitem.prototype.GetF_RLLIARRIVETIME = function()
{
    return this.FieldsValue[2];
}

gltl_runlineinstanceitem.prototype.SetF_RLIID = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_runlineinstanceitem.prototype.GetF_RLIID = function()
{
    return this.FieldsValue[3];
}

gltl_runlineinstanceitem.prototype.SetF_SWID = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_runlineinstanceitem.prototype.GetF_SWID = function()
{
    return this.FieldsValue[4];
}

gltl_runlineinstanceitem.prototype.SetF_RLLOUTTIME = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_runlineinstanceitem.prototype.GetF_RLLOUTTIME = function()
{
    return this.FieldsValue[5];
}

gltl_runlineinstanceitem.prototype.SetF_RLLREMARK = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_runlineinstanceitem.prototype.GetF_RLLREMARK = function()
{
    return this.FieldsValue[6];
}

gltl_runlineinstanceitem.prototype.SetF_RLLINDEX = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_runlineinstanceitem.prototype.GetF_RLLINDEX = function()
{
    return this.FieldsValue[7];
}

gltl_runlineinstanceitem.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[8] = value;
}

gltl_runlineinstanceitem.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[8];
}

gltl_runlineinstanceitem.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_runlineinstanceitem();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_runlineinstanceitem.prototype.DownLoadEx = function () {
    var entry = new gltl_runlineinstanceitem();
    this.DownLoad(entry);
}

gltl_runlineinstanceitem.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_runlineinstanceitem();
    this.UpLoadData(entry,callback);
}
