 function gltl_supplier()
 {
     DataAccess.call(this);
     this.TableName = "gltl_supplier";
     this.Fields.push("F_SPID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fUpid");

     this.Fields.push("F_SPNAME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fSpname");

     this.Fields.push("F_SPCODE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fSpcode");

     this.Fields.push("F_SPSNAME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fSpsname");

     this.Fields.push("F_SPMARK");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(200);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fSpmark");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_supplier = function () { };
 Supergltl_supplier.prototype = DataAccess.prototype;
 gltl_supplier.prototype = new Supergltl_supplier();

gltl_supplier.prototype.SetF_SPID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_supplier.prototype.GetF_SPID = function()
{
    return this.FieldsValue[0];
}

gltl_supplier.prototype.SetF_SPNAME = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_supplier.prototype.GetF_SPNAME = function()
{
    return this.FieldsValue[1];
}

gltl_supplier.prototype.SetF_SPCODE = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_supplier.prototype.GetF_SPCODE = function()
{
    return this.FieldsValue[2];
}

gltl_supplier.prototype.SetF_SPSNAME = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_supplier.prototype.GetF_SPSNAME = function()
{
    return this.FieldsValue[3];
}

gltl_supplier.prototype.SetF_SPMARK = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_supplier.prototype.GetF_SPMARK = function()
{
    return this.FieldsValue[4];
}

gltl_supplier.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_supplier.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[5];
}

gltl_supplier.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_supplier();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_supplier.prototype.DownLoadEx = function () {
    var entry = new gltl_supplier();
    this.DownLoad(entry);
}

gltl_supplier.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_supplier();
    this.UpLoadData(entry,callback);
}
