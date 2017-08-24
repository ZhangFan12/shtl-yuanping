 function gltl_uploadenclosuredata()
 {
     DataAccess.call(this);
     this.TableName = "gltl_uploadenclosuredata";
     this.Fields.push("F_UEDID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("id");

     this.Fields.push("F_UEDBUSID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("businessId");

     this.Fields.push("F_UETYPE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("type");

     this.Fields.push("F_UEINDEX");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("index");

     this.Fields.push("F_UEPATH");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(500);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("filePath");

     this.Fields.push("F_UEDBUSTYPE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("busType");

     this.Fields.push("F_UEDREALNAME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(200);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fileName");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_uploadenclosuredata = function () { };
 Supergltl_uploadenclosuredata.prototype = DataAccess.prototype;
 gltl_uploadenclosuredata.prototype = new Supergltl_uploadenclosuredata();

gltl_uploadenclosuredata.prototype.SetF_UEDID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_uploadenclosuredata.prototype.GetF_UEDID = function()
{
    return this.FieldsValue[0];
}

gltl_uploadenclosuredata.prototype.SetF_UEDBUSID = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_uploadenclosuredata.prototype.GetF_UEDBUSID = function()
{
    return this.FieldsValue[1];
}

gltl_uploadenclosuredata.prototype.SetF_UETYPE = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_uploadenclosuredata.prototype.GetF_UETYPE = function()
{
    return this.FieldsValue[2];
}

gltl_uploadenclosuredata.prototype.SetF_UEINDEX = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_uploadenclosuredata.prototype.GetF_UEINDEX = function()
{
    return this.FieldsValue[3];
}

gltl_uploadenclosuredata.prototype.SetF_UEPATH = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_uploadenclosuredata.prototype.GetF_UEPATH = function()
{
    return this.FieldsValue[4];
}

gltl_uploadenclosuredata.prototype.SetF_UEDBUSTYPE = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_uploadenclosuredata.prototype.GetF_UEDBUSTYPE = function()
{
    return this.FieldsValue[5];
}

gltl_uploadenclosuredata.prototype.SetF_UEDREALNAME = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_uploadenclosuredata.prototype.GetF_UEDREALNAME = function()
{
    return this.FieldsValue[6];
}

gltl_uploadenclosuredata.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_uploadenclosuredata.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[7];
}

gltl_uploadenclosuredata.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_uploadenclosuredata();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_uploadenclosuredata.prototype.DownLoadEx = function () {
    var entry = new gltl_uploadenclosuredata();
    this.DownLoad(entry);
}

gltl_uploadenclosuredata.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_uploadenclosuredata();
    this.UpLoadData(entry,callback);
}
