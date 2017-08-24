 function gltl_user()
 {
     DataAccess.call(this);
     this.TableName = "gltl_user";
     this.Fields.push("F_UID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(32);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("userId");

     this.Fields.push("F_UNAME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fUname");

     this.Fields.push("F_UIDCAR");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(25);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fUidcar");

     this.Fields.push("F_UPHONE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(25);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fUphone");

     this.Fields.push("F_UTYPE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("dtype");

     this.Fields.push("F_ULATITUDE");
     this.FieldsType.push("DbType.Double");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("");

     this.Fields.push("F_ULONGITUDE");
     this.FieldsType.push("DbType.Double");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("");

     this.Fields.push("F_UPHOTOPATH");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(255);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fUphotopath");

     this.Fields.push("F_UDUTIES");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("ddutie");

     this.Fields.push("F_UDEPARTMENT");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(255);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("ddepartment");

     this.Fields.push("F_UWORKTIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fUworktime");

     this.Fields.push("F_UDRIVINGLICENSE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("ddrivinglicense");

     this.Fields.push("F_UDRIVINGTIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fUdrivingtime");

     this.Fields.push("F_USEX");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(3);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fUsex");

     this.Fields.push("F_UPOLITICALSTATUS");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("dfUpoliticalstatus");

     this.Fields.push("F_UADDRESS");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(255);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fUaddress");

     this.Fields.push("F_UMARITALSTATUS");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("dfUmaritalstatus");

     this.Fields.push("F_ULOADNAME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("loginName");

     this.Fields.push("F_UPASSWORD");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("password");

     this.Fields.push("F_UGID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("gUgid");

     this.Fields.push("F_UDRIVINGENDTIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fUdrivingendtime");

     this.Fields.push("F_UDSPECIALTYPEENDTIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fUdspecialtypenedtime");

     this.Fields.push("F_UWORKSTATE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fUworkstate");

     this.Fields.push("F_UISDELETE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fuIsDelete");

     this.Fields.push("F_UWORKNUMBER");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(255);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("workNumber");

     this.Fields.push("F_UEDUCATION");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("education");

     this.Fields.push("F_UDRIVINGNUMBER");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(255);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("drivingNumber");

     this.Fields.push("F_UDUTY");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(255);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("duty");

     this.Fields.push("F_UAGE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("");

     this.Fields.push("F_UFSENDDATE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("");

     this.Fields.push("F_USENDDATE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("");

     this.Fields.push("F_UFILENUMBER");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(255);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("");

     this.Fields.push("F_UFULLPINYIN");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fullPINYIN");

     this.Fields.push("F_UFIRSTWORD");
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
 var Supergltl_user = function () { };
 Supergltl_user.prototype = DataAccess.prototype;
 gltl_user.prototype = new Supergltl_user();

gltl_user.prototype.SetF_UID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_user.prototype.GetF_UID = function()
{
    return this.FieldsValue[0];
}

gltl_user.prototype.SetF_UNAME = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_user.prototype.GetF_UNAME = function()
{
    return this.FieldsValue[1];
}

gltl_user.prototype.SetF_UIDCAR = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_user.prototype.GetF_UIDCAR = function()
{
    return this.FieldsValue[2];
}

gltl_user.prototype.SetF_UPHONE = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_user.prototype.GetF_UPHONE = function()
{
    return this.FieldsValue[3];
}

gltl_user.prototype.SetF_UTYPE = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_user.prototype.GetF_UTYPE = function()
{
    return this.FieldsValue[4];
}

gltl_user.prototype.SetF_ULATITUDE = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_user.prototype.GetF_ULATITUDE = function()
{
    return this.FieldsValue[5];
}

gltl_user.prototype.SetF_ULONGITUDE = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_user.prototype.GetF_ULONGITUDE = function()
{
    return this.FieldsValue[6];
}

gltl_user.prototype.SetF_UPHOTOPATH = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_user.prototype.GetF_UPHOTOPATH = function()
{
    return this.FieldsValue[7];
}

gltl_user.prototype.SetF_UDUTIES = function(value)
{
    this.FieldsValue[8] = value;
}

gltl_user.prototype.GetF_UDUTIES = function()
{
    return this.FieldsValue[8];
}

gltl_user.prototype.SetF_UDEPARTMENT = function(value)
{
    this.FieldsValue[9] = value;
}

gltl_user.prototype.GetF_UDEPARTMENT = function()
{
    return this.FieldsValue[9];
}

gltl_user.prototype.SetF_UWORKTIME = function(value)
{
    this.FieldsValue[10] = value;
}

gltl_user.prototype.GetF_UWORKTIME = function()
{
    return this.FieldsValue[10];
}

gltl_user.prototype.SetF_UDRIVINGLICENSE = function(value)
{
    this.FieldsValue[11] = value;
}

gltl_user.prototype.GetF_UDRIVINGLICENSE = function()
{
    return this.FieldsValue[11];
}

gltl_user.prototype.SetF_UDRIVINGTIME = function(value)
{
    this.FieldsValue[12] = value;
}

gltl_user.prototype.GetF_UDRIVINGTIME = function()
{
    return this.FieldsValue[12];
}

gltl_user.prototype.SetF_USEX = function(value)
{
    this.FieldsValue[13] = value;
}

gltl_user.prototype.GetF_USEX = function()
{
    return this.FieldsValue[13];
}

gltl_user.prototype.SetF_UPOLITICALSTATUS = function(value)
{
    this.FieldsValue[14] = value;
}

gltl_user.prototype.GetF_UPOLITICALSTATUS = function()
{
    return this.FieldsValue[14];
}

gltl_user.prototype.SetF_UADDRESS = function(value)
{
    this.FieldsValue[15] = value;
}

gltl_user.prototype.GetF_UADDRESS = function()
{
    return this.FieldsValue[15];
}

gltl_user.prototype.SetF_UMARITALSTATUS = function(value)
{
    this.FieldsValue[16] = value;
}

gltl_user.prototype.GetF_UMARITALSTATUS = function()
{
    return this.FieldsValue[16];
}

gltl_user.prototype.SetF_ULOADNAME = function(value)
{
    this.FieldsValue[17] = value;
}

gltl_user.prototype.GetF_ULOADNAME = function()
{
    return this.FieldsValue[17];
}

gltl_user.prototype.SetF_UPASSWORD = function(value)
{
    this.FieldsValue[18] = value;
}

gltl_user.prototype.GetF_UPASSWORD = function()
{
    return this.FieldsValue[18];
}

gltl_user.prototype.SetF_UGID = function(value)
{
    this.FieldsValue[19] = value;
}

gltl_user.prototype.GetF_UGID = function()
{
    return this.FieldsValue[19];
}

gltl_user.prototype.SetF_UDRIVINGENDTIME = function(value)
{
    this.FieldsValue[20] = value;
}

gltl_user.prototype.GetF_UDRIVINGENDTIME = function()
{
    return this.FieldsValue[20];
}

gltl_user.prototype.SetF_UDSPECIALTYPEENDTIME = function(value)
{
    this.FieldsValue[21] = value;
}

gltl_user.prototype.GetF_UDSPECIALTYPEENDTIME = function()
{
    return this.FieldsValue[21];
}

gltl_user.prototype.SetF_UWORKSTATE = function(value)
{
    this.FieldsValue[22] = value;
}

gltl_user.prototype.GetF_UWORKSTATE = function()
{
    return this.FieldsValue[22];
}

gltl_user.prototype.SetF_UISDELETE = function(value)
{
    this.FieldsValue[23] = value;
}

gltl_user.prototype.GetF_UISDELETE = function()
{
    return this.FieldsValue[23];
}

gltl_user.prototype.SetF_UWORKNUMBER = function(value)
{
    this.FieldsValue[24] = value;
}

gltl_user.prototype.GetF_UWORKNUMBER = function()
{
    return this.FieldsValue[24];
}

gltl_user.prototype.SetF_UEDUCATION = function(value)
{
    this.FieldsValue[25] = value;
}

gltl_user.prototype.GetF_UEDUCATION = function()
{
    return this.FieldsValue[25];
}

gltl_user.prototype.SetF_UDRIVINGNUMBER = function(value)
{
    this.FieldsValue[26] = value;
}

gltl_user.prototype.GetF_UDRIVINGNUMBER = function()
{
    return this.FieldsValue[26];
}

gltl_user.prototype.SetF_UDUTY = function(value)
{
    this.FieldsValue[27] = value;
}

gltl_user.prototype.GetF_UDUTY = function()
{
    return this.FieldsValue[27];
}

gltl_user.prototype.SetF_UAGE = function(value)
{
    this.FieldsValue[28] = value;
}

gltl_user.prototype.GetF_UAGE = function()
{
    return this.FieldsValue[28];
}

gltl_user.prototype.SetF_UFSENDDATE = function(value)
{
    this.FieldsValue[29] = value;
}

gltl_user.prototype.GetF_UFSENDDATE = function()
{
    return this.FieldsValue[29];
}

gltl_user.prototype.SetF_USENDDATE = function(value)
{
    this.FieldsValue[30] = value;
}

gltl_user.prototype.GetF_USENDDATE = function()
{
    return this.FieldsValue[30];
}

gltl_user.prototype.SetF_UFILENUMBER = function(value)
{
    this.FieldsValue[31] = value;
}

gltl_user.prototype.GetF_UFILENUMBER = function()
{
    return this.FieldsValue[31];
}

gltl_user.prototype.SetF_UFULLPINYIN = function(value)
{
    this.FieldsValue[32] = value;
}

gltl_user.prototype.GetF_UFULLPINYIN = function()
{
    return this.FieldsValue[32];
}

gltl_user.prototype.SetF_UFIRSTWORD = function(value)
{
    this.FieldsValue[33] = value;
}

gltl_user.prototype.GetF_UFIRSTWORD = function()
{
    return this.FieldsValue[33];
}

gltl_user.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[34] = value;
}

gltl_user.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[34];
}

gltl_user.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_user();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_user.prototype.DownLoadEx = function () {
    var entry = new gltl_user();
    this.DownLoad(entry);
}

gltl_user.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_user();
    this.UpLoadData(entry,callback);
}
