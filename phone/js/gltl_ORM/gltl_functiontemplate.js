 function gltl_functiontemplate()
 {
     DataAccess.call(this);
     this.TableName = "gltl_functiontemplate";
     this.Fields.push("F_FTID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fFtid");

     this.Fields.push("F_FTNAME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fFtname");

     this.Fields.push("F_FTINDEX");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fFtindex");

     this.Fields.push("F_FTBUILDER");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fFtbuilder");

     this.Fields.push("F_FTBUILDDATE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fFtbuilddate");

     this.Fields.push("F_FTREMARK");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(500);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fFtremark");

     this.Fields.push("F_ROLEID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fRoleid");

     this.Fields.push("F_FTDIVHTML");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(65535);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fFtdivhtml");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_functiontemplate = function () { };
 Supergltl_functiontemplate.prototype = DataAccess.prototype;
 gltl_functiontemplate.prototype = new Supergltl_functiontemplate();

gltl_functiontemplate.prototype.SetF_FTID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_functiontemplate.prototype.GetF_FTID = function()
{
    return this.FieldsValue[0];
}

gltl_functiontemplate.prototype.SetF_FTNAME = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_functiontemplate.prototype.GetF_FTNAME = function()
{
    return this.FieldsValue[1];
}

gltl_functiontemplate.prototype.SetF_FTINDEX = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_functiontemplate.prototype.GetF_FTINDEX = function()
{
    return this.FieldsValue[2];
}

gltl_functiontemplate.prototype.SetF_FTBUILDER = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_functiontemplate.prototype.GetF_FTBUILDER = function()
{
    return this.FieldsValue[3];
}

gltl_functiontemplate.prototype.SetF_FTBUILDDATE = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_functiontemplate.prototype.GetF_FTBUILDDATE = function()
{
    return this.FieldsValue[4];
}

gltl_functiontemplate.prototype.SetF_FTREMARK = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_functiontemplate.prototype.GetF_FTREMARK = function()
{
    return this.FieldsValue[5];
}

gltl_functiontemplate.prototype.SetF_ROLEID = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_functiontemplate.prototype.GetF_ROLEID = function()
{
    return this.FieldsValue[6];
}

gltl_functiontemplate.prototype.SetF_FTDIVHTML = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_functiontemplate.prototype.GetF_FTDIVHTML = function()
{
    return this.FieldsValue[7];
}

gltl_functiontemplate.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[8] = value;
}

gltl_functiontemplate.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[8];
}

gltl_functiontemplate.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_functiontemplate();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_functiontemplate.prototype.DownLoadEx = function () {
    var entry = new gltl_functiontemplate();
    this.DownLoad(entry);
}

gltl_functiontemplate.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_functiontemplate();
    this.UpLoadData(entry,callback);
}
