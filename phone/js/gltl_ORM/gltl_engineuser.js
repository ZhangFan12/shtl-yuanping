 function gltl_engineuser()
 {
     DataAccess.call(this);
     this.TableName = "gltl_engineuser";
     this.Fields.push("F_UID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fUid");

     this.Fields.push("F_EID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fEid");

     this.Fields.push("F_EUISMAX");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fEuismax");

     this.Fields.push("F_EUKID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fEukid");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(3);
 }
 var Supergltl_engineuser = function () { };
 Supergltl_engineuser.prototype = DataAccess.prototype;
 gltl_engineuser.prototype = new Supergltl_engineuser();

gltl_engineuser.prototype.SetF_UID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_engineuser.prototype.GetF_UID = function()
{
    return this.FieldsValue[0];
}

gltl_engineuser.prototype.SetF_EID = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_engineuser.prototype.GetF_EID = function()
{
    return this.FieldsValue[1];
}

gltl_engineuser.prototype.SetF_EUISMAX = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_engineuser.prototype.GetF_EUISMAX = function()
{
    return this.FieldsValue[2];
}

gltl_engineuser.prototype.SetF_EUKID = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_engineuser.prototype.GetF_EUKID = function()
{
    return this.FieldsValue[3];
}

gltl_engineuser.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_engineuser.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[4];
}

gltl_engineuser.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_engineuser();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_engineuser.prototype.DownLoadEx = function () {
    var entry = new gltl_engineuser();
    this.DownLoad(entry);
}

gltl_engineuser.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_engineuser();
    this.UpLoadData(entry,callback);
}
