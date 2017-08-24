 function gltl_dailyplan()
 {
     DataAccess.call(this);
     this.TableName = "gltl_dailyplan";
     this.Fields.push("F_DPID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fDpid");

     this.Fields.push("F_DPCODE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fDpcode");

     this.Fields.push("F_DPNAME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(200);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fDpname");

     this.Fields.push("F_DPCREATEPERSON");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fDpcreateperson");

     this.Fields.push("F_DPCREATETIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fDpcreatetime");

     this.Fields.push("F_DPSTATUS");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(10);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fDpstatus");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_dailyplan = function () { };
 Supergltl_dailyplan.prototype = DataAccess.prototype;
 gltl_dailyplan.prototype = new Supergltl_dailyplan();

gltl_dailyplan.prototype.SetF_DPID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_dailyplan.prototype.GetF_DPID = function()
{
    return this.FieldsValue[0];
}

gltl_dailyplan.prototype.SetF_DPCODE = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_dailyplan.prototype.GetF_DPCODE = function()
{
    return this.FieldsValue[1];
}

gltl_dailyplan.prototype.SetF_DPNAME = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_dailyplan.prototype.GetF_DPNAME = function()
{
    return this.FieldsValue[2];
}

gltl_dailyplan.prototype.SetF_DPCREATEPERSON = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_dailyplan.prototype.GetF_DPCREATEPERSON = function()
{
    return this.FieldsValue[3];
}

gltl_dailyplan.prototype.SetF_DPCREATETIME = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_dailyplan.prototype.GetF_DPCREATETIME = function()
{
    return this.FieldsValue[4];
}

gltl_dailyplan.prototype.SetF_DPSTATUS = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_dailyplan.prototype.GetF_DPSTATUS = function()
{
    return this.FieldsValue[5];
}

gltl_dailyplan.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_dailyplan.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[6];
}

gltl_dailyplan.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_dailyplan();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_dailyplan.prototype.DownLoadEx = function () {
    var entry = new gltl_dailyplan();
    this.DownLoad(entry);
}

gltl_dailyplan.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_dailyplan();
    this.UpLoadData(entry,callback);
}
