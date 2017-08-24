 function gltl_runlineinstanceextend()
 {
     DataAccess.call(this);
     this.TableName = "gltl_runlineinstanceextend";
     this.Fields.push("F_RLIEID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fRlieid");

     this.Fields.push("F_RLIID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fRliid");

     this.Fields.push("F_RLIEFIELDNAME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fRliefieldname");

     this.Fields.push("F_RLIEFIELDTYPE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fRliefieldtype");

     this.Fields.push("F_RLIEFIELDVALUE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(65535);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fRliefieldvalue");

     this.Fields.push("F_RLIEFIELDINDEX");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fRliefieldindex");

     this.Fields.push("F_RLIEFIELDGROUP");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fRliefieldgroup");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_runlineinstanceextend = function () { };
 Supergltl_runlineinstanceextend.prototype = DataAccess.prototype;
 gltl_runlineinstanceextend.prototype = new Supergltl_runlineinstanceextend();

gltl_runlineinstanceextend.prototype.SetF_RLIEID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_runlineinstanceextend.prototype.GetF_RLIEID = function()
{
    return this.FieldsValue[0];
}

gltl_runlineinstanceextend.prototype.SetF_RLIID = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_runlineinstanceextend.prototype.GetF_RLIID = function()
{
    return this.FieldsValue[1];
}

gltl_runlineinstanceextend.prototype.SetF_RLIEFIELDNAME = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_runlineinstanceextend.prototype.GetF_RLIEFIELDNAME = function()
{
    return this.FieldsValue[2];
}

gltl_runlineinstanceextend.prototype.SetF_RLIEFIELDTYPE = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_runlineinstanceextend.prototype.GetF_RLIEFIELDTYPE = function()
{
    return this.FieldsValue[3];
}

gltl_runlineinstanceextend.prototype.SetF_RLIEFIELDVALUE = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_runlineinstanceextend.prototype.GetF_RLIEFIELDVALUE = function()
{
    return this.FieldsValue[4];
}

gltl_runlineinstanceextend.prototype.SetF_RLIEFIELDINDEX = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_runlineinstanceextend.prototype.GetF_RLIEFIELDINDEX = function()
{
    return this.FieldsValue[5];
}

gltl_runlineinstanceextend.prototype.SetF_RLIEFIELDGROUP = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_runlineinstanceextend.prototype.GetF_RLIEFIELDGROUP = function()
{
    return this.FieldsValue[6];
}

gltl_runlineinstanceextend.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_runlineinstanceextend.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[7];
}

gltl_runlineinstanceextend.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_runlineinstanceextend();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_runlineinstanceextend.prototype.DownLoadEx = function () {
    var entry = new gltl_runlineinstanceextend();
    this.DownLoad(entry);
}

gltl_runlineinstanceextend.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_runlineinstanceextend();
    this.UpLoadData(entry,callback);
}
