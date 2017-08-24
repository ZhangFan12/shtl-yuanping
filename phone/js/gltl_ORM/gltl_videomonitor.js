 function gltl_videomonitor()
 {
     DataAccess.call(this);
     this.TableName = "gltl_videomonitor";
     this.Fields.push("F_VMID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fVmid");

     this.Fields.push("F_EID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fEid");

     this.Fields.push("F_VMDEPARTMENT");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fVmdepartment");

     this.Fields.push("F_VMDRIVER");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fVmdriver");

     this.Fields.push("F_VMASSISTANTDRIVER");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fVmassistantdriver");

     this.Fields.push("F_VMDRIVETIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fVmdrivetime");

     this.Fields.push("F_VMTRAIN");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fVmtrain");

     this.Fields.push("F_VMSECTION");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fVmsection");

     this.Fields.push("F_VMTASKCONTENT");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fVmtaskcontent");

     this.Fields.push("F_VMCHECKFILE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fVmcheckfile");

     this.Fields.push("F_VMOPINION");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fVmopinion");

     this.Fields.push("F_VMPROBLEM");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(500);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fVmproblem");

     this.Fields.push("F_VMENCLOSURE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fVmenclosure");

     this.Fields.push("F_VMANALYSISMAN");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fVmanalysisman");

     this.Fields.push("F_VMANALYSISTIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fVmanalysistime");

     this.Fields.push("F_VMREVIEWER");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fVmreviewer");

     this.Fields.push("F_VMANALYSISRECORD");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(500);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fVmanalysisrecord");

     this.Fields.push("F_VMREVIEWOPINION");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(500);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("FVMREVIEWOPINION");

     this.Fields.push("OWNER_ID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("ownerId");

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
 var Supergltl_videomonitor = function () { };
 Supergltl_videomonitor.prototype = DataAccess.prototype;
 gltl_videomonitor.prototype = new Supergltl_videomonitor();

gltl_videomonitor.prototype.SetF_VMID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_videomonitor.prototype.GetF_VMID = function()
{
    return this.FieldsValue[0];
}

gltl_videomonitor.prototype.SetF_EID = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_videomonitor.prototype.GetF_EID = function()
{
    return this.FieldsValue[1];
}

gltl_videomonitor.prototype.SetF_VMDEPARTMENT = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_videomonitor.prototype.GetF_VMDEPARTMENT = function()
{
    return this.FieldsValue[2];
}

gltl_videomonitor.prototype.SetF_VMDRIVER = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_videomonitor.prototype.GetF_VMDRIVER = function()
{
    return this.FieldsValue[3];
}

gltl_videomonitor.prototype.SetF_VMASSISTANTDRIVER = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_videomonitor.prototype.GetF_VMASSISTANTDRIVER = function()
{
    return this.FieldsValue[4];
}

gltl_videomonitor.prototype.SetF_VMDRIVETIME = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_videomonitor.prototype.GetF_VMDRIVETIME = function()
{
    return this.FieldsValue[5];
}

gltl_videomonitor.prototype.SetF_VMTRAIN = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_videomonitor.prototype.GetF_VMTRAIN = function()
{
    return this.FieldsValue[6];
}

gltl_videomonitor.prototype.SetF_VMSECTION = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_videomonitor.prototype.GetF_VMSECTION = function()
{
    return this.FieldsValue[7];
}

gltl_videomonitor.prototype.SetF_VMTASKCONTENT = function(value)
{
    this.FieldsValue[8] = value;
}

gltl_videomonitor.prototype.GetF_VMTASKCONTENT = function()
{
    return this.FieldsValue[8];
}

gltl_videomonitor.prototype.SetF_VMCHECKFILE = function(value)
{
    this.FieldsValue[9] = value;
}

gltl_videomonitor.prototype.GetF_VMCHECKFILE = function()
{
    return this.FieldsValue[9];
}

gltl_videomonitor.prototype.SetF_VMOPINION = function(value)
{
    this.FieldsValue[10] = value;
}

gltl_videomonitor.prototype.GetF_VMOPINION = function()
{
    return this.FieldsValue[10];
}

gltl_videomonitor.prototype.SetF_VMPROBLEM = function(value)
{
    this.FieldsValue[11] = value;
}

gltl_videomonitor.prototype.GetF_VMPROBLEM = function()
{
    return this.FieldsValue[11];
}

gltl_videomonitor.prototype.SetF_VMENCLOSURE = function(value)
{
    this.FieldsValue[12] = value;
}

gltl_videomonitor.prototype.GetF_VMENCLOSURE = function()
{
    return this.FieldsValue[12];
}

gltl_videomonitor.prototype.SetF_VMANALYSISMAN = function(value)
{
    this.FieldsValue[13] = value;
}

gltl_videomonitor.prototype.GetF_VMANALYSISMAN = function()
{
    return this.FieldsValue[13];
}

gltl_videomonitor.prototype.SetF_VMANALYSISTIME = function(value)
{
    this.FieldsValue[14] = value;
}

gltl_videomonitor.prototype.GetF_VMANALYSISTIME = function()
{
    return this.FieldsValue[14];
}

gltl_videomonitor.prototype.SetF_VMREVIEWER = function(value)
{
    this.FieldsValue[15] = value;
}

gltl_videomonitor.prototype.GetF_VMREVIEWER = function()
{
    return this.FieldsValue[15];
}

gltl_videomonitor.prototype.SetF_VMANALYSISRECORD = function(value)
{
    this.FieldsValue[16] = value;
}

gltl_videomonitor.prototype.GetF_VMANALYSISRECORD = function()
{
    return this.FieldsValue[16];
}

gltl_videomonitor.prototype.SetF_VMREVIEWOPINION = function(value)
{
    this.FieldsValue[17] = value;
}

gltl_videomonitor.prototype.GetF_VMREVIEWOPINION = function()
{
    return this.FieldsValue[17];
}

gltl_videomonitor.prototype.SetOWNER_ID = function(value)
{
    this.FieldsValue[18] = value;
}

gltl_videomonitor.prototype.GetOWNER_ID = function()
{
    return this.FieldsValue[18];
}

gltl_videomonitor.prototype.SetF_VMNo = function(value)
{
    this.FieldsValue[19] = value;
}

gltl_videomonitor.prototype.GetF_VMNo = function()
{
    return this.FieldsValue[19];
}

gltl_videomonitor.prototype.SetF_VMCom = function(value)
{
    this.FieldsValue[20] = value;
}

gltl_videomonitor.prototype.GetF_VMCom = function()
{
    return this.FieldsValue[20];
}

gltl_videomonitor.prototype.SetF_VMUser = function(value)
{
    this.FieldsValue[21] = value;
}

gltl_videomonitor.prototype.GetF_VMUser = function()
{
    return this.FieldsValue[21];
}

gltl_videomonitor.prototype.SetF_VMTime = function(value)
{
    this.FieldsValue[22] = value;
}

gltl_videomonitor.prototype.GetF_VMTime = function()
{
    return this.FieldsValue[22];
}

gltl_videomonitor.prototype.SetF_VMTimeData = function(value)
{
    this.FieldsValue[23] = value;
}

gltl_videomonitor.prototype.GetF_VMTimeData = function()
{
    return this.FieldsValue[23];
}

gltl_videomonitor.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[24] = value;
}

gltl_videomonitor.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[24];
}

gltl_videomonitor.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_videomonitor();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_videomonitor.prototype.DownLoadEx = function () {
    var entry = new gltl_videomonitor();
    this.DownLoad(entry);
}

gltl_videomonitor.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_videomonitor();
    this.UpLoadData(entry,callback);
}
