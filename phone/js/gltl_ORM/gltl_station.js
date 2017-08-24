 function gltl_station()
 {
     DataAccess.call(this);
     this.TableName = "gltl_station";
     this.Fields.push("F_SID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fSid");

     this.Fields.push("F_SNAME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fSname");

     this.Fields.push("F_SNUMBER");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fSnumber");

     this.Fields.push("F_UID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fUid");

     this.Fields.push("F_SLONGITUDE");
     this.FieldsType.push("DbType.Double");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fSlongitude");

     this.Fields.push("F_SLATITUDE");
     this.FieldsType.push("DbType.Double");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fSlatitude");

     this.Fields.push("F_TENANTID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fTenantid");

     this.Fields.push("F_SISDELETE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fSisdelete");

     this.Fields.push("F_SFULLPINYIN");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fullPINYIN");

     this.Fields.push("F_SFIRSTWORD");
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
 var Supergltl_station = function () { };
 Supergltl_station.prototype = DataAccess.prototype;
 gltl_station.prototype = new Supergltl_station();

gltl_station.prototype.SetF_SID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_station.prototype.GetF_SID = function()
{
    return this.FieldsValue[0];
}

gltl_station.prototype.SetF_SNAME = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_station.prototype.GetF_SNAME = function()
{
    return this.FieldsValue[1];
}

gltl_station.prototype.SetF_SNUMBER = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_station.prototype.GetF_SNUMBER = function()
{
    return this.FieldsValue[2];
}

gltl_station.prototype.SetF_UID = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_station.prototype.GetF_UID = function()
{
    return this.FieldsValue[3];
}

gltl_station.prototype.SetF_SLONGITUDE = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_station.prototype.GetF_SLONGITUDE = function()
{
    return this.FieldsValue[4];
}

gltl_station.prototype.SetF_SLATITUDE = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_station.prototype.GetF_SLATITUDE = function()
{
    return this.FieldsValue[5];
}

gltl_station.prototype.SetF_TENANTID = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_station.prototype.GetF_TENANTID = function()
{
    return this.FieldsValue[6];
}

gltl_station.prototype.SetF_SISDELETE = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_station.prototype.GetF_SISDELETE = function()
{
    return this.FieldsValue[7];
}

gltl_station.prototype.SetF_SFULLPINYIN = function(value)
{
    this.FieldsValue[8] = value;
}

gltl_station.prototype.GetF_SFULLPINYIN = function()
{
    return this.FieldsValue[8];
}

gltl_station.prototype.SetF_SFIRSTWORD = function(value)
{
    this.FieldsValue[9] = value;
}

gltl_station.prototype.GetF_SFIRSTWORD = function()
{
    return this.FieldsValue[9];
}

gltl_station.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[10] = value;
}

gltl_station.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[10];
}

gltl_station.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_station();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_station.prototype.DownLoadEx = function () {
    var entry = new gltl_station();
    this.DownLoad(entry);
}

gltl_station.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_station();
    this.UpLoadData(entry,callback);
}
