 function gltl_user_certificate()
 {
     DataAccess.call(this);
     this.TableName = "gltl_user_certificate";
     this.Fields.push("ID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(32);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("id");

     this.Fields.push("CERTIFICATE_NAME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(128);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("cName");

     this.Fields.push("CERTIFICATE_TYPE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(4);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("cType");

     this.Fields.push("CERTIFICATE_CODE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(36);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("cCode");

     this.Fields.push("CERTIFICATE_DATE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(16);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("cDate");

     this.Fields.push("USER_ID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(32);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("userId");

     this.Fields.push("FILE_ID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(32);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fileId");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_user_certificate = function () { };
 Supergltl_user_certificate.prototype = DataAccess.prototype;
 gltl_user_certificate.prototype = new Supergltl_user_certificate();

gltl_user_certificate.prototype.SetID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_user_certificate.prototype.GetID = function()
{
    return this.FieldsValue[0];
}

gltl_user_certificate.prototype.SetCERTIFICATE_NAME = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_user_certificate.prototype.GetCERTIFICATE_NAME = function()
{
    return this.FieldsValue[1];
}

gltl_user_certificate.prototype.SetCERTIFICATE_TYPE = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_user_certificate.prototype.GetCERTIFICATE_TYPE = function()
{
    return this.FieldsValue[2];
}

gltl_user_certificate.prototype.SetCERTIFICATE_CODE = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_user_certificate.prototype.GetCERTIFICATE_CODE = function()
{
    return this.FieldsValue[3];
}

gltl_user_certificate.prototype.SetCERTIFICATE_DATE = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_user_certificate.prototype.GetCERTIFICATE_DATE = function()
{
    return this.FieldsValue[4];
}

gltl_user_certificate.prototype.SetUSER_ID = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_user_certificate.prototype.GetUSER_ID = function()
{
    return this.FieldsValue[5];
}

gltl_user_certificate.prototype.SetFILE_ID = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_user_certificate.prototype.GetFILE_ID = function()
{
    return this.FieldsValue[6];
}

gltl_user_certificate.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_user_certificate.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[7];
}

gltl_user_certificate.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_user_certificate();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_user_certificate.prototype.DownLoadEx = function () {
    var entry = new gltl_user_certificate();
    this.DownLoad(entry);
}

gltl_user_certificate.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_user_certificate();
    this.UpLoadData(entry,callback);
}
