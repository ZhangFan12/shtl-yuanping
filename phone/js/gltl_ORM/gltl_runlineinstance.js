 function gltl_runlineinstance()
 {
     DataAccess.call(this);
     this.TableName = "gltl_runlineinstance";
     this.Fields.push("F_RLIID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fRliid");

     this.Fields.push("F_RLISTARTTIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fRlistarttime");

     this.Fields.push("F_RLIENDTIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fRliendtime");

     this.Fields.push("F_RLSID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fRlsid");

     this.Fields.push("F_RLIOPERATIONOR");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fRloperationor");

     this.Fields.push("F_RLISTEWARD");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fRlisteward");

     this.Fields.push("F_RLICOMMAND");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(255);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fRlicommand");

     this.Fields.push("F_RLITRAINNUMBER");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fRlitrainnumber");

     this.Fields.push("F_RLIRUNNINGTIME");
     this.FieldsType.push("DbType.Double");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fRlirunningtime");

     this.Fields.push("F_RLIRUNNINGMILEAGE");
     this.FieldsType.push("DbType.Double");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fRlirunningmileage");

     this.Fields.push("F_TPID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fTpid");

     this.Fields.push("F_RLIPRINCIPAL");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fRliprincipal");

     this.Fields.push("F_RLIDEPUTY");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fRlideputy");

     this.Fields.push("F_RLLCONSUMEOIL");
     this.FieldsType.push("DbType.Double");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fRllconsumeoil");

     this.Fields.push("F_TPCODE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fTpcode");

     this.Fields.push("F_EID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fEid");

     this.Fields.push("F_EEXID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fEeid");

     this.Fields.push("F_RUNLINEDATE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("runlineDate");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_runlineinstance = function () { };
 Supergltl_runlineinstance.prototype = DataAccess.prototype;
 gltl_runlineinstance.prototype = new Supergltl_runlineinstance();

gltl_runlineinstance.prototype.SetF_RLIID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_runlineinstance.prototype.GetF_RLIID = function()
{
    return this.FieldsValue[0];
}

gltl_runlineinstance.prototype.SetF_RLISTARTTIME = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_runlineinstance.prototype.GetF_RLISTARTTIME = function()
{
    return this.FieldsValue[1];
}

gltl_runlineinstance.prototype.SetF_RLIENDTIME = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_runlineinstance.prototype.GetF_RLIENDTIME = function()
{
    return this.FieldsValue[2];
}

gltl_runlineinstance.prototype.SetF_RLSID = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_runlineinstance.prototype.GetF_RLSID = function()
{
    return this.FieldsValue[3];
}

gltl_runlineinstance.prototype.SetF_RLIOPERATIONOR = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_runlineinstance.prototype.GetF_RLIOPERATIONOR = function()
{
    return this.FieldsValue[4];
}

gltl_runlineinstance.prototype.SetF_RLISTEWARD = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_runlineinstance.prototype.GetF_RLISTEWARD = function()
{
    return this.FieldsValue[5];
}

gltl_runlineinstance.prototype.SetF_RLICOMMAND = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_runlineinstance.prototype.GetF_RLICOMMAND = function()
{
    return this.FieldsValue[6];
}

gltl_runlineinstance.prototype.SetF_RLITRAINNUMBER = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_runlineinstance.prototype.GetF_RLITRAINNUMBER = function()
{
    return this.FieldsValue[7];
}

gltl_runlineinstance.prototype.SetF_RLIRUNNINGTIME = function(value)
{
    this.FieldsValue[8] = value;
}

gltl_runlineinstance.prototype.GetF_RLIRUNNINGTIME = function()
{
    return this.FieldsValue[8];
}

gltl_runlineinstance.prototype.SetF_RLIRUNNINGMILEAGE = function(value)
{
    this.FieldsValue[9] = value;
}

gltl_runlineinstance.prototype.GetF_RLIRUNNINGMILEAGE = function()
{
    return this.FieldsValue[9];
}

gltl_runlineinstance.prototype.SetF_TPID = function(value)
{
    this.FieldsValue[10] = value;
}

gltl_runlineinstance.prototype.GetF_TPID = function()
{
    return this.FieldsValue[10];
}

gltl_runlineinstance.prototype.SetF_RLIPRINCIPAL = function(value)
{
    this.FieldsValue[11] = value;
}

gltl_runlineinstance.prototype.GetF_RLIPRINCIPAL = function()
{
    return this.FieldsValue[11];
}

gltl_runlineinstance.prototype.SetF_RLIDEPUTY = function(value)
{
    this.FieldsValue[12] = value;
}

gltl_runlineinstance.prototype.GetF_RLIDEPUTY = function()
{
    return this.FieldsValue[12];
}

gltl_runlineinstance.prototype.SetF_RLLCONSUMEOIL = function(value)
{
    this.FieldsValue[13] = value;
}

gltl_runlineinstance.prototype.GetF_RLLCONSUMEOIL = function()
{
    return this.FieldsValue[13];
}

gltl_runlineinstance.prototype.SetF_TPCODE = function(value)
{
    this.FieldsValue[14] = value;
}

gltl_runlineinstance.prototype.GetF_TPCODE = function()
{
    return this.FieldsValue[14];
}

gltl_runlineinstance.prototype.SetF_EID = function(value)
{
    this.FieldsValue[15] = value;
}

gltl_runlineinstance.prototype.GetF_EID = function()
{
    return this.FieldsValue[15];
}

gltl_runlineinstance.prototype.SetF_EEXID = function(value)
{
    this.FieldsValue[16] = value;
}

gltl_runlineinstance.prototype.GetF_EEXID = function()
{
    return this.FieldsValue[16];
}

gltl_runlineinstance.prototype.SetF_RUNLINEDATE = function(value)
{
    this.FieldsValue[17] = value;
}

gltl_runlineinstance.prototype.GetF_RUNLINEDATE = function()
{
    return this.FieldsValue[17];
}

gltl_runlineinstance.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[18] = value;
}

gltl_runlineinstance.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[18];
}

gltl_runlineinstance.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_runlineinstance();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_runlineinstance.prototype.DownLoadEx = function () {
    var entry = new gltl_runlineinstance();
    this.DownLoad(entry);
}

gltl_runlineinstance.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_runlineinstance();
    this.UpLoadData(entry,callback);
}
