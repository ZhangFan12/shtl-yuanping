 function gltl_engine()
 {
     DataAccess.call(this);
     this.TableName = "gltl_engine";
     this.Fields.push("F_EID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fEid");

     this.Fields.push("F_EBUILDTIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fEbuildtime");

     this.Fields.push("F_EPLATENUMBER");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fEplatenmber");

     this.Fields.push("F_ENAME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fEname");

     this.Fields.push("F_ELATITUDE");
     this.FieldsType.push("DbType.Double");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fElatitude");

     this.Fields.push("F_ELONGITUDE");
     this.FieldsType.push("DbType.Double");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fElonggitude");

     this.Fields.push("F_ESTATUE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fEstatue");

     this.Fields.push("F_EBUILDADDRESS");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(255);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fEbuildaddress");

     this.Fields.push("F_ESTANDARDMODEL");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fEstandardmodel");

     this.Fields.push("F_BUILDNUMBER");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fBuildnumber");

     this.Fields.push("F_ERUNNINGTIME");
     this.FieldsType.push("DbType.Double");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("ferunningtime");

     this.Fields.push("F_ERUNNINGMILEAGE");
     this.FieldsType.push("DbType.Double");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("ferunningmileage");

     this.Fields.push("F_ETOTALFUEL");
     this.FieldsType.push("DbType.Double");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fetotalfuel");

     this.Fields.push("F_TENANTID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("ftenantid");

     this.Fields.push("F_ETYPE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fetype");

     this.Fields.push("F_ETRAVELSIDE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("");

     this.Fields.push("F_EISDELETE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("feIsDelete");

     this.Fields.push("F_EFULLPINYIN");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fullPINYIN");

     this.Fields.push("F_EFIRSTWORD");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("firstWord");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_engine = function () { };
 Supergltl_engine.prototype = DataAccess.prototype;
 gltl_engine.prototype = new Supergltl_engine();

gltl_engine.prototype.SetF_EID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_engine.prototype.GetF_EID = function()
{
    return this.FieldsValue[0];
}

gltl_engine.prototype.SetF_EBUILDTIME = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_engine.prototype.GetF_EBUILDTIME = function()
{
    return this.FieldsValue[1];
}

gltl_engine.prototype.SetF_EPLATENUMBER = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_engine.prototype.GetF_EPLATENUMBER = function()
{
    return this.FieldsValue[2];
}

gltl_engine.prototype.SetF_ENAME = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_engine.prototype.GetF_ENAME = function()
{
    return this.FieldsValue[3];
}

gltl_engine.prototype.SetF_ELATITUDE = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_engine.prototype.GetF_ELATITUDE = function()
{
    return this.FieldsValue[4];
}

gltl_engine.prototype.SetF_ELONGITUDE = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_engine.prototype.GetF_ELONGITUDE = function()
{
    return this.FieldsValue[5];
}

gltl_engine.prototype.SetF_ESTATUE = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_engine.prototype.GetF_ESTATUE = function()
{
    return this.FieldsValue[6];
}

gltl_engine.prototype.SetF_EBUILDADDRESS = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_engine.prototype.GetF_EBUILDADDRESS = function()
{
    return this.FieldsValue[7];
}

gltl_engine.prototype.SetF_ESTANDARDMODEL = function(value)
{
    this.FieldsValue[8] = value;
}

gltl_engine.prototype.GetF_ESTANDARDMODEL = function()
{
    return this.FieldsValue[8];
}

gltl_engine.prototype.SetF_BUILDNUMBER = function(value)
{
    this.FieldsValue[9] = value;
}

gltl_engine.prototype.GetF_BUILDNUMBER = function()
{
    return this.FieldsValue[9];
}

gltl_engine.prototype.SetF_ERUNNINGTIME = function(value)
{
    this.FieldsValue[10] = value;
}

gltl_engine.prototype.GetF_ERUNNINGTIME = function()
{
    return this.FieldsValue[10];
}

gltl_engine.prototype.SetF_ERUNNINGMILEAGE = function(value)
{
    this.FieldsValue[11] = value;
}

gltl_engine.prototype.GetF_ERUNNINGMILEAGE = function()
{
    return this.FieldsValue[11];
}

gltl_engine.prototype.SetF_ETOTALFUEL = function(value)
{
    this.FieldsValue[12] = value;
}

gltl_engine.prototype.GetF_ETOTALFUEL = function()
{
    return this.FieldsValue[12];
}

gltl_engine.prototype.SetF_TENANTID = function(value)
{
    this.FieldsValue[13] = value;
}

gltl_engine.prototype.GetF_TENANTID = function()
{
    return this.FieldsValue[13];
}

gltl_engine.prototype.SetF_ETYPE = function(value)
{
    this.FieldsValue[14] = value;
}

gltl_engine.prototype.GetF_ETYPE = function()
{
    return this.FieldsValue[14];
}

gltl_engine.prototype.SetF_ETRAVELSIDE = function(value)
{
    this.FieldsValue[15] = value;
}

gltl_engine.prototype.GetF_ETRAVELSIDE = function()
{
    return this.FieldsValue[15];
}

gltl_engine.prototype.SetF_EISDELETE = function(value)
{
    this.FieldsValue[16] = value;
}

gltl_engine.prototype.GetF_EISDELETE = function()
{
    return this.FieldsValue[16];
}

gltl_engine.prototype.SetF_EFULLPINYIN = function(value)
{
    this.FieldsValue[17] = value;
}

gltl_engine.prototype.GetF_EFULLPINYIN = function()
{
    return this.FieldsValue[17];
}

gltl_engine.prototype.SetF_EFIRSTWORD = function(value)
{
    this.FieldsValue[18] = value;
}

gltl_engine.prototype.GetF_EFIRSTWORD = function()
{
    return this.FieldsValue[18];
}

gltl_engine.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[19] = value;
}

gltl_engine.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[19];
}

gltl_engine.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_engine();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_engine.prototype.DownLoadEx = function () {
    var entry = new gltl_engine();
    this.DownLoad(entry);
}

gltl_engine.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_engine();
    this.UpLoadData(entry,callback);
}
