 function gltl_messagepush()
 {
     DataAccess.call(this);
     this.TableName = "gltl_messagepush";
     this.Fields.push("F_MPID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fMpid");

     this.Fields.push("F_MPCONTENT");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(65535);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fMpcontent");

     this.Fields.push("F_MPTITLE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(200);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fMptitle");

     this.Fields.push("F_MPINDEX");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fMpindex");

     this.Fields.push("F_MPISREAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fMpisread");

     this.Fields.push("F_MPBUSINESS");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(2000);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fMpbusiness");

     this.Fields.push("F_MPSENDSOURCE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fMpsendsource");

     this.Fields.push("F_MPRECEIVE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fMpreceive");

     this.Fields.push("F_MPSENDTIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fMpsendtime");

     this.Fields.push("F_MPREADTIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fMpreadtime");

     this.Fields.push("F_MPTASKSTATE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fMptaskstate");

     this.Fields.push("F_MPTYPE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fMptype");

     this.Fields.push("OWNER_ID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("ownerId");

     this.Fields.push("F_MPHANDLE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(2);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fMphandle");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_messagepush = function () { };
 Supergltl_messagepush.prototype = DataAccess.prototype;
 gltl_messagepush.prototype = new Supergltl_messagepush();

gltl_messagepush.prototype.SetF_MPID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_messagepush.prototype.GetF_MPID = function()
{
    return this.FieldsValue[0];
}

gltl_messagepush.prototype.SetF_MPCONTENT = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_messagepush.prototype.GetF_MPCONTENT = function()
{
    return this.FieldsValue[1];
}

gltl_messagepush.prototype.SetF_MPTITLE = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_messagepush.prototype.GetF_MPTITLE = function()
{
    return this.FieldsValue[2];
}

gltl_messagepush.prototype.SetF_MPINDEX = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_messagepush.prototype.GetF_MPINDEX = function()
{
    return this.FieldsValue[3];
}

gltl_messagepush.prototype.SetF_MPISREAD = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_messagepush.prototype.GetF_MPISREAD = function()
{
    return this.FieldsValue[4];
}

gltl_messagepush.prototype.SetF_MPBUSINESS = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_messagepush.prototype.GetF_MPBUSINESS = function()
{
    return this.FieldsValue[5];
}

gltl_messagepush.prototype.SetF_MPSENDSOURCE = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_messagepush.prototype.GetF_MPSENDSOURCE = function()
{
    return this.FieldsValue[6];
}

gltl_messagepush.prototype.SetF_MPRECEIVE = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_messagepush.prototype.GetF_MPRECEIVE = function()
{
    return this.FieldsValue[7];
}

gltl_messagepush.prototype.SetF_MPSENDTIME = function(value)
{
    this.FieldsValue[8] = value;
}

gltl_messagepush.prototype.GetF_MPSENDTIME = function()
{
    return this.FieldsValue[8];
}

gltl_messagepush.prototype.SetF_MPREADTIME = function(value)
{
    this.FieldsValue[9] = value;
}

gltl_messagepush.prototype.GetF_MPREADTIME = function()
{
    return this.FieldsValue[9];
}

gltl_messagepush.prototype.SetF_MPTASKSTATE = function(value)
{
    this.FieldsValue[10] = value;
}

gltl_messagepush.prototype.GetF_MPTASKSTATE = function()
{
    return this.FieldsValue[10];
}

gltl_messagepush.prototype.SetF_MPTYPE = function(value)
{
    this.FieldsValue[11] = value;
}

gltl_messagepush.prototype.GetF_MPTYPE = function()
{
    return this.FieldsValue[11];
}

gltl_messagepush.prototype.SetOWNER_ID = function(value)
{
    this.FieldsValue[12] = value;
}

gltl_messagepush.prototype.GetOWNER_ID = function()
{
    return this.FieldsValue[12];
}

gltl_messagepush.prototype.SetF_MPHANDLE = function(value)
{
    this.FieldsValue[13] = value;
}

gltl_messagepush.prototype.GetF_MPHANDLE = function()
{
    return this.FieldsValue[13];
}

gltl_messagepush.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[14] = value;
}

gltl_messagepush.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[14];
}

gltl_messagepush.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_messagepush();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_messagepush.prototype.DownLoadEx = function () {
    var entry = new gltl_messagepush();
    this.DownLoad(entry);
}

gltl_messagepush.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_messagepush();
    this.UpLoadData(entry,callback);
}
