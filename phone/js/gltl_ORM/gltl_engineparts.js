 function gltl_engineparts()
 {
     DataAccess.call(this);
     this.TableName = "gltl_engineparts";
     this.Fields.push("F_EPID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fEpid");

     this.Fields.push("F_EID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fEid");

     this.Fields.push("F_EPNAME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fEpname");

     this.Fields.push("F_EPMODEL");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fEpmodel");

     this.Fields.push("F_EPNUMBER");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fEpnumber");

     this.Fields.push("F_EPCOUNT");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(11);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fEpcount");

     this.Fields.push("F_EPMANUFACTURER");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fEpmanufacturer");

     this.Fields.push("F_ERISMAINTIAN");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_engineparts = function () { };
 Supergltl_engineparts.prototype = DataAccess.prototype;
 gltl_engineparts.prototype = new Supergltl_engineparts();

gltl_engineparts.prototype.SetF_EPID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_engineparts.prototype.GetF_EPID = function()
{
    return this.FieldsValue[0];
}

gltl_engineparts.prototype.SetF_EID = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_engineparts.prototype.GetF_EID = function()
{
    return this.FieldsValue[1];
}

gltl_engineparts.prototype.SetF_EPNAME = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_engineparts.prototype.GetF_EPNAME = function()
{
    return this.FieldsValue[2];
}

gltl_engineparts.prototype.SetF_EPMODEL = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_engineparts.prototype.GetF_EPMODEL = function()
{
    return this.FieldsValue[3];
}

gltl_engineparts.prototype.SetF_EPNUMBER = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_engineparts.prototype.GetF_EPNUMBER = function()
{
    return this.FieldsValue[4];
}

gltl_engineparts.prototype.SetF_EPCOUNT = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_engineparts.prototype.GetF_EPCOUNT = function()
{
    return this.FieldsValue[5];
}

gltl_engineparts.prototype.SetF_EPMANUFACTURER = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_engineparts.prototype.GetF_EPMANUFACTURER = function()
{
    return this.FieldsValue[6];
}

gltl_engineparts.prototype.SetF_ERISMAINTIAN = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_engineparts.prototype.GetF_ERISMAINTIAN = function()
{
    return this.FieldsValue[7];
}

gltl_engineparts.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[8] = value;
}

gltl_engineparts.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[8];
}

gltl_engineparts.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_engineparts();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_engineparts.prototype.DownLoadEx = function () {
    var entry = new gltl_engineparts();
    this.DownLoad(entry);
}

gltl_engineparts.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_engineparts();
    this.UpLoadData(entry,callback);
}
