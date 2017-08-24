 function gltl_enginemaintian()
 {
     DataAccess.call(this);
     this.TableName = "gltl_enginemaintian";
     this.Fields.push("F_EMID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("id");

     this.Fields.push("F_MPID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("mtPlan");

     this.Fields.push("F_UID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("uid");

     this.Fields.push("F_EMSTARTTIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("startTime");

     this.Fields.push("F_EMNEXTTIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("nextTime");

     this.Fields.push("F_EMENDTIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("endTime");

     this.Fields.push("F_OUTKEYID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("outkeyId");

     this.Fields.push("F_EMTYPE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("emtype");

     this.Fields.push("F_EMSTATE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("emStatus");

     this.Fields.push("F_EMCOST");
     this.FieldsType.push("DbType.Double");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("emCost");

     this.Fields.push("F_EMCOMPANY");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("emCompany");

     this.Fields.push("F_EMNEXTMILEAGE");
     this.FieldsType.push("DbType.Double");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("nextMileage");

     this.Fields.push("F_EMCURRENTM");
     this.FieldsType.push("DbType.Double");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("currentm");

     this.Fields.push("F_EMWORKINGHOURS");
     this.FieldsType.push("DbType.Double");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("hours");

     this.Fields.push("F_EMLOOKOVERCASE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(65535);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("authRmk");

     this.Fields.push("F_EMLOOKOVERIDEAR");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(255);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("authView");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_enginemaintian = function () { };
 Supergltl_enginemaintian.prototype = DataAccess.prototype;
 gltl_enginemaintian.prototype = new Supergltl_enginemaintian();

gltl_enginemaintian.prototype.SetF_EMID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_enginemaintian.prototype.GetF_EMID = function()
{
    return this.FieldsValue[0];
}

gltl_enginemaintian.prototype.SetF_MPID = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_enginemaintian.prototype.GetF_MPID = function()
{
    return this.FieldsValue[1];
}

gltl_enginemaintian.prototype.SetF_UID = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_enginemaintian.prototype.GetF_UID = function()
{
    return this.FieldsValue[2];
}

gltl_enginemaintian.prototype.SetF_EMSTARTTIME = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_enginemaintian.prototype.GetF_EMSTARTTIME = function()
{
    return this.FieldsValue[3];
}

gltl_enginemaintian.prototype.SetF_EMNEXTTIME = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_enginemaintian.prototype.GetF_EMNEXTTIME = function()
{
    return this.FieldsValue[4];
}

gltl_enginemaintian.prototype.SetF_EMENDTIME = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_enginemaintian.prototype.GetF_EMENDTIME = function()
{
    return this.FieldsValue[5];
}

gltl_enginemaintian.prototype.SetF_OUTKEYID = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_enginemaintian.prototype.GetF_OUTKEYID = function()
{
    return this.FieldsValue[6];
}

gltl_enginemaintian.prototype.SetF_EMTYPE = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_enginemaintian.prototype.GetF_EMTYPE = function()
{
    return this.FieldsValue[7];
}

gltl_enginemaintian.prototype.SetF_EMSTATE = function(value)
{
    this.FieldsValue[8] = value;
}

gltl_enginemaintian.prototype.GetF_EMSTATE = function()
{
    return this.FieldsValue[8];
}

gltl_enginemaintian.prototype.SetF_EMCOST = function(value)
{
    this.FieldsValue[9] = value;
}

gltl_enginemaintian.prototype.GetF_EMCOST = function()
{
    return this.FieldsValue[9];
}

gltl_enginemaintian.prototype.SetF_EMCOMPANY = function(value)
{
    this.FieldsValue[10] = value;
}

gltl_enginemaintian.prototype.GetF_EMCOMPANY = function()
{
    return this.FieldsValue[10];
}

gltl_enginemaintian.prototype.SetF_EMNEXTMILEAGE = function(value)
{
    this.FieldsValue[11] = value;
}

gltl_enginemaintian.prototype.GetF_EMNEXTMILEAGE = function()
{
    return this.FieldsValue[11];
}

gltl_enginemaintian.prototype.SetF_EMCURRENTM = function(value)
{
    this.FieldsValue[12] = value;
}

gltl_enginemaintian.prototype.GetF_EMCURRENTM = function()
{
    return this.FieldsValue[12];
}

gltl_enginemaintian.prototype.SetF_EMWORKINGHOURS = function(value)
{
    this.FieldsValue[13] = value;
}

gltl_enginemaintian.prototype.GetF_EMWORKINGHOURS = function()
{
    return this.FieldsValue[13];
}

gltl_enginemaintian.prototype.SetF_EMLOOKOVERCASE = function(value)
{
    this.FieldsValue[14] = value;
}

gltl_enginemaintian.prototype.GetF_EMLOOKOVERCASE = function()
{
    return this.FieldsValue[14];
}

gltl_enginemaintian.prototype.SetF_EMLOOKOVERIDEAR = function(value)
{
    this.FieldsValue[15] = value;
}

gltl_enginemaintian.prototype.GetF_EMLOOKOVERIDEAR = function()
{
    return this.FieldsValue[15];
}

gltl_enginemaintian.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[16] = value;
}

gltl_enginemaintian.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[16];
}

gltl_enginemaintian.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_enginemaintian();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_enginemaintian.prototype.DownLoadEx = function () {
    var entry = new gltl_enginemaintian();
    this.DownLoad(entry);
}

gltl_enginemaintian.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_enginemaintian();
    this.UpLoadData(entry,callback);
}
