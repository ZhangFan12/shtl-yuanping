 function gltl_materiel()
 {
     DataAccess.call(this);
     this.TableName = "gltl_materiel";
     this.Fields.push("F_MTID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fMtid");

     this.Fields.push("F_PID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fPid");

     this.Fields.push("F_MTCODE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fMtcode");

     this.Fields.push("F_MTNAME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fMtname");

     this.Fields.push("F_MTSNAME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fMtsname");

     this.Fields.push("F_SPID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fSpid");

     this.Fields.push("F_MTPRICE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fMtprice");

     this.Fields.push("F_MTUNIT");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(30);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fMtunit");

     this.Fields.push("F_MTCREATEPERSON");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fMtcreateperson");

     this.Fields.push("F_MTCREATEDATE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fMtcreatedate");

     this.Fields.push("F_MTUPDATEPERSON");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fMtupdateperson");

     this.Fields.push("F_MTUPDATEDATE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fMtupdatedate");

     this.Fields.push("F_MTMARK");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(200);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fMtmark");

     this.Fields.push("F_MTMODEL");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(200);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fMtmodel");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_materiel = function () { };
 Supergltl_materiel.prototype = DataAccess.prototype;
 gltl_materiel.prototype = new Supergltl_materiel();

gltl_materiel.prototype.SetF_MTID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_materiel.prototype.GetF_MTID = function()
{
    return this.FieldsValue[0];
}

gltl_materiel.prototype.SetF_PID = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_materiel.prototype.GetF_PID = function()
{
    return this.FieldsValue[1];
}

gltl_materiel.prototype.SetF_MTCODE = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_materiel.prototype.GetF_MTCODE = function()
{
    return this.FieldsValue[2];
}

gltl_materiel.prototype.SetF_MTNAME = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_materiel.prototype.GetF_MTNAME = function()
{
    return this.FieldsValue[3];
}

gltl_materiel.prototype.SetF_MTSNAME = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_materiel.prototype.GetF_MTSNAME = function()
{
    return this.FieldsValue[4];
}

gltl_materiel.prototype.SetF_SPID = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_materiel.prototype.GetF_SPID = function()
{
    return this.FieldsValue[5];
}

gltl_materiel.prototype.SetF_MTPRICE = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_materiel.prototype.GetF_MTPRICE = function()
{
    return this.FieldsValue[6];
}

gltl_materiel.prototype.SetF_MTUNIT = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_materiel.prototype.GetF_MTUNIT = function()
{
    return this.FieldsValue[7];
}

gltl_materiel.prototype.SetF_MTCREATEPERSON = function(value)
{
    this.FieldsValue[8] = value;
}

gltl_materiel.prototype.GetF_MTCREATEPERSON = function()
{
    return this.FieldsValue[8];
}

gltl_materiel.prototype.SetF_MTCREATEDATE = function(value)
{
    this.FieldsValue[9] = value;
}

gltl_materiel.prototype.GetF_MTCREATEDATE = function()
{
    return this.FieldsValue[9];
}

gltl_materiel.prototype.SetF_MTUPDATEPERSON = function(value)
{
    this.FieldsValue[10] = value;
}

gltl_materiel.prototype.GetF_MTUPDATEPERSON = function()
{
    return this.FieldsValue[10];
}

gltl_materiel.prototype.SetF_MTUPDATEDATE = function(value)
{
    this.FieldsValue[11] = value;
}

gltl_materiel.prototype.GetF_MTUPDATEDATE = function()
{
    return this.FieldsValue[11];
}

gltl_materiel.prototype.SetF_MTMARK = function(value)
{
    this.FieldsValue[12] = value;
}

gltl_materiel.prototype.GetF_MTMARK = function()
{
    return this.FieldsValue[12];
}

gltl_materiel.prototype.SetF_MTMODEL = function(value)
{
    this.FieldsValue[13] = value;
}

gltl_materiel.prototype.GetF_MTMODEL = function()
{
    return this.FieldsValue[13];
}

gltl_materiel.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[14] = value;
}

gltl_materiel.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[14];
}

gltl_materiel.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_materiel();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_materiel.prototype.DownLoadEx = function () {
    var entry = new gltl_materiel();
    this.DownLoad(entry);
}

gltl_materiel.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_materiel();
    this.UpLoadData(entry,callback);
}
