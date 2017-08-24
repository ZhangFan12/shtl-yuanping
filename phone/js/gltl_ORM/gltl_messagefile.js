 function gltl_messagefile()
 {
     DataAccess.call(this);
     this.TableName = "gltl_messagefile";
     this.Fields.push("OWNER_ID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("ownerId");

     this.Fields.push("F_MPRECEIVE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(200);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fMpreceive");

     this.Fields.push("F_MPISREAD");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(11);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fMpisread");

     this.Fields.push("F_MPTITLE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(200);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fMptitle");

     this.Fields.push("F_MPCONTENT");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(200);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fMpcontent");

     this.Fields.push("F_MPREADPERSON");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(200);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fMpreadperson");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_messagefile = function () { };
 Supergltl_messagefile.prototype = DataAccess.prototype;
 gltl_messagefile.prototype = new Supergltl_messagefile();

gltl_messagefile.prototype.SetOWNER_ID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_messagefile.prototype.GetOWNER_ID = function()
{
    return this.FieldsValue[0];
}

gltl_messagefile.prototype.SetF_MPRECEIVE = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_messagefile.prototype.GetF_MPRECEIVE = function()
{
    return this.FieldsValue[1];
}

gltl_messagefile.prototype.SetF_MPISREAD = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_messagefile.prototype.GetF_MPISREAD = function()
{
    return this.FieldsValue[2];
}

gltl_messagefile.prototype.SetF_MPTITLE = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_messagefile.prototype.GetF_MPTITLE = function()
{
    return this.FieldsValue[3];
}

gltl_messagefile.prototype.SetF_MPCONTENT = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_messagefile.prototype.GetF_MPCONTENT = function()
{
    return this.FieldsValue[4];
}

gltl_messagefile.prototype.SetF_MPREADPERSON = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_messagefile.prototype.GetF_MPREADPERSON = function()
{
    return this.FieldsValue[5];
}

gltl_messagefile.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_messagefile.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[6];
}

gltl_messagefile.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_messagefile();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_messagefile.prototype.DownLoadEx = function () {
    var entry = new gltl_messagefile();
    this.DownLoad(entry);
}

gltl_messagefile.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_messagefile();
    this.UpLoadData(entry,callback);
}
