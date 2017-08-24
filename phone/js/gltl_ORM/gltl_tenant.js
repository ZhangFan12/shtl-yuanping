 function gltl_tenant()
 {
     DataAccess.call(this);
     this.TableName = "gltl_tenant";
     this.Fields.push("F_TENANTID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);

     this.Fields.push("F_TENAME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(false);

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_tenant = function () { };
 Supergltl_tenant.prototype = DataAccess.prototype;
 gltl_tenant.prototype = new Supergltl_tenant();

gltl_tenant.prototype.SetF_TENANTID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_tenant.prototype.GetF_TENANTID = function()
{
    return this.FieldsValue[0];
}

gltl_tenant.prototype.SetF_TENAME = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_tenant.prototype.GetF_TENAME = function()
{
    return this.FieldsValue[1];
}

gltl_tenant.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_tenant.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[2];
}

gltl_tenant.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_tenant();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_tenant.prototype.DownLoadEx = function () {
    var entry = new gltl_tenant();
    this.DownLoad(entry);
}

gltl_tenant.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_tenant();
    this.UpLoadData(entry,callback);
}
