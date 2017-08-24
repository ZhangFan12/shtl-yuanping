 function gltl_inspectproject()
 {
     DataAccess.call(this);
     this.TableName = "gltl_inspectproject";
     this.Fields.push("F_IPID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fIpid");

     this.Fields.push("F_IPMARK");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(300);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fIpmark");

     this.Fields.push("F_IPTYPE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fIptype");

     this.Fields.push("F_IPENGINETYPE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fIpenginetype");

     this.Fields.push("F_IPINDEX");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fIpindex");

     this.Fields.push("F_IPISDELETE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fIpisdelete");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_inspectproject = function () { };
 Supergltl_inspectproject.prototype = DataAccess.prototype;
 gltl_inspectproject.prototype = new Supergltl_inspectproject();

gltl_inspectproject.prototype.SetF_IPID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_inspectproject.prototype.GetF_IPID = function()
{
    return this.FieldsValue[0];
}

gltl_inspectproject.prototype.SetF_IPMARK = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_inspectproject.prototype.GetF_IPMARK = function()
{
    return this.FieldsValue[1];
}

gltl_inspectproject.prototype.SetF_IPTYPE = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_inspectproject.prototype.GetF_IPTYPE = function()
{
    return this.FieldsValue[2];
}

gltl_inspectproject.prototype.SetF_IPENGINETYPE = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_inspectproject.prototype.GetF_IPENGINETYPE = function()
{
    return this.FieldsValue[3];
}

gltl_inspectproject.prototype.SetF_IPINDEX = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_inspectproject.prototype.GetF_IPINDEX = function()
{
    return this.FieldsValue[4];
}

gltl_inspectproject.prototype.SetF_IPISDELETE = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_inspectproject.prototype.GetF_IPISDELETE = function()
{
    return this.FieldsValue[5];
}

gltl_inspectproject.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_inspectproject.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[6];
}

gltl_inspectproject.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_inspectproject();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_inspectproject.prototype.DownLoadEx = function () {
    var entry = new gltl_inspectproject();
    this.DownLoad(entry);
}

gltl_inspectproject.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_inspectproject();
    this.UpLoadData(entry,callback);
}
