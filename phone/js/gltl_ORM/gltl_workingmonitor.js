 function gltl_workingmonitor()
 {
     DataAccess.call(this);
     this.TableName = "gltl_workingmonitor";
     this.Fields.push("F_WMID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fWmid");

     this.Fields.push("F_WMNEEDANALYSISFILE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(11);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fWmneedanalysisfile");

     this.Fields.push("F_WMREALANALYSISFILE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(11);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fWmrealanalysisfile");

     this.Fields.push("F_WMLOSEFILE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(11);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fWmlosefile");

     this.Fields.push("F_WMUNIT");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fWmunit");

     this.Fields.push("F_WMEMERGENCYSTOP");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(11);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fWmemergencystop");

     this.Fields.push("F_WMCOMMONBRAKE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(11);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fWmcommonbrake");

     this.Fields.push("F_WMSHUTDOWN");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(11);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fWmshutdown");

     this.Fields.push("F_WMLIBRARYNOTEST");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(11);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fWmlibrarynotest");

     this.Fields.push("F_WMPIPEPRESSUREANTISLIP");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(11);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fWmpipepressureantislip");

     this.Fields.push("F_WMDATAERROR");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(11);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fWmdataerror");

     this.Fields.push("F_WMILLEGALUNLOCK");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(11);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fWmillegalunlock");

     this.Fields.push("F_WMABNORMALPARKING");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(11);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fWmabnormalparking");

     this.Fields.push("F_WMOFFROADPARKING");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(11);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fWmoffroadparking");

     this.Fields.push("F_WMUSEMODEERROR");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(11);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fWmusemodeerror");

     this.Fields.push("F_WMOTHERPROBLEM");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(11);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fWmotherproblem");

     this.Fields.push("F_WMPROBLEMFILEANALYSIS");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(500);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fWmproblemfileanalysis");

     this.Fields.push("F_WMRECORDTIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fWmrecordtime");

     this.Fields.push("F_WMANALYSISCYCLE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fWmanalysiscycle");

     this.Fields.push("F_VMNo");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fVno");

     this.Fields.push("F_VMCom");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fVMCom");

     this.Fields.push("F_VMUser");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fVUser");

     this.Fields.push("F_VMTime");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fVTime");

     this.Fields.push("F_VMTimeData");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fVTimeData");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_workingmonitor = function () { };
 Supergltl_workingmonitor.prototype = DataAccess.prototype;
 gltl_workingmonitor.prototype = new Supergltl_workingmonitor();

gltl_workingmonitor.prototype.SetF_WMID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_workingmonitor.prototype.GetF_WMID = function()
{
    return this.FieldsValue[0];
}

gltl_workingmonitor.prototype.SetF_WMNEEDANALYSISFILE = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_workingmonitor.prototype.GetF_WMNEEDANALYSISFILE = function()
{
    return this.FieldsValue[1];
}

gltl_workingmonitor.prototype.SetF_WMREALANALYSISFILE = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_workingmonitor.prototype.GetF_WMREALANALYSISFILE = function()
{
    return this.FieldsValue[2];
}

gltl_workingmonitor.prototype.SetF_WMLOSEFILE = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_workingmonitor.prototype.GetF_WMLOSEFILE = function()
{
    return this.FieldsValue[3];
}

gltl_workingmonitor.prototype.SetF_WMUNIT = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_workingmonitor.prototype.GetF_WMUNIT = function()
{
    return this.FieldsValue[4];
}

gltl_workingmonitor.prototype.SetF_WMEMERGENCYSTOP = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_workingmonitor.prototype.GetF_WMEMERGENCYSTOP = function()
{
    return this.FieldsValue[5];
}

gltl_workingmonitor.prototype.SetF_WMCOMMONBRAKE = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_workingmonitor.prototype.GetF_WMCOMMONBRAKE = function()
{
    return this.FieldsValue[6];
}

gltl_workingmonitor.prototype.SetF_WMSHUTDOWN = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_workingmonitor.prototype.GetF_WMSHUTDOWN = function()
{
    return this.FieldsValue[7];
}

gltl_workingmonitor.prototype.SetF_WMLIBRARYNOTEST = function(value)
{
    this.FieldsValue[8] = value;
}

gltl_workingmonitor.prototype.GetF_WMLIBRARYNOTEST = function()
{
    return this.FieldsValue[8];
}

gltl_workingmonitor.prototype.SetF_WMPIPEPRESSUREANTISLIP = function(value)
{
    this.FieldsValue[9] = value;
}

gltl_workingmonitor.prototype.GetF_WMPIPEPRESSUREANTISLIP = function()
{
    return this.FieldsValue[9];
}

gltl_workingmonitor.prototype.SetF_WMDATAERROR = function(value)
{
    this.FieldsValue[10] = value;
}

gltl_workingmonitor.prototype.GetF_WMDATAERROR = function()
{
    return this.FieldsValue[10];
}

gltl_workingmonitor.prototype.SetF_WMILLEGALUNLOCK = function(value)
{
    this.FieldsValue[11] = value;
}

gltl_workingmonitor.prototype.GetF_WMILLEGALUNLOCK = function()
{
    return this.FieldsValue[11];
}

gltl_workingmonitor.prototype.SetF_WMABNORMALPARKING = function(value)
{
    this.FieldsValue[12] = value;
}

gltl_workingmonitor.prototype.GetF_WMABNORMALPARKING = function()
{
    return this.FieldsValue[12];
}

gltl_workingmonitor.prototype.SetF_WMOFFROADPARKING = function(value)
{
    this.FieldsValue[13] = value;
}

gltl_workingmonitor.prototype.GetF_WMOFFROADPARKING = function()
{
    return this.FieldsValue[13];
}

gltl_workingmonitor.prototype.SetF_WMUSEMODEERROR = function(value)
{
    this.FieldsValue[14] = value;
}

gltl_workingmonitor.prototype.GetF_WMUSEMODEERROR = function()
{
    return this.FieldsValue[14];
}

gltl_workingmonitor.prototype.SetF_WMOTHERPROBLEM = function(value)
{
    this.FieldsValue[15] = value;
}

gltl_workingmonitor.prototype.GetF_WMOTHERPROBLEM = function()
{
    return this.FieldsValue[15];
}

gltl_workingmonitor.prototype.SetF_WMPROBLEMFILEANALYSIS = function(value)
{
    this.FieldsValue[16] = value;
}

gltl_workingmonitor.prototype.GetF_WMPROBLEMFILEANALYSIS = function()
{
    return this.FieldsValue[16];
}

gltl_workingmonitor.prototype.SetF_WMRECORDTIME = function(value)
{
    this.FieldsValue[17] = value;
}

gltl_workingmonitor.prototype.GetF_WMRECORDTIME = function()
{
    return this.FieldsValue[17];
}

gltl_workingmonitor.prototype.SetF_WMANALYSISCYCLE = function(value)
{
    this.FieldsValue[18] = value;
}

gltl_workingmonitor.prototype.GetF_WMANALYSISCYCLE = function()
{
    return this.FieldsValue[18];
}

gltl_workingmonitor.prototype.SetF_VMNo = function(value)
{
    this.FieldsValue[19] = value;
}

gltl_workingmonitor.prototype.GetF_VMNo = function()
{
    return this.FieldsValue[19];
}

gltl_workingmonitor.prototype.SetF_VMCom = function(value)
{
    this.FieldsValue[20] = value;
}

gltl_workingmonitor.prototype.GetF_VMCom = function()
{
    return this.FieldsValue[20];
}

gltl_workingmonitor.prototype.SetF_VMUser = function(value)
{
    this.FieldsValue[21] = value;
}

gltl_workingmonitor.prototype.GetF_VMUser = function()
{
    return this.FieldsValue[21];
}

gltl_workingmonitor.prototype.SetF_VMTime = function(value)
{
    this.FieldsValue[22] = value;
}

gltl_workingmonitor.prototype.GetF_VMTime = function()
{
    return this.FieldsValue[22];
}

gltl_workingmonitor.prototype.SetF_VMTimeData = function(value)
{
    this.FieldsValue[23] = value;
}

gltl_workingmonitor.prototype.GetF_VMTimeData = function()
{
    return this.FieldsValue[23];
}

gltl_workingmonitor.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[24] = value;
}

gltl_workingmonitor.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[24];
}

gltl_workingmonitor.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_workingmonitor();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_workingmonitor.prototype.DownLoadEx = function () {
    var entry = new gltl_workingmonitor();
    this.DownLoad(entry);
}

gltl_workingmonitor.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_workingmonitor();
    this.UpLoadData(entry,callback);
}
