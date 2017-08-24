 function gltl_usergroup()
 {
     DataAccess.call(this);
     this.TableName = "gltl_usergroup";
     this.Fields.push("F_UGID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fugid");

     this.Fields.push("F_UGNAME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fugname");

     this.Fields.push("F_UGPID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fugpid");

     this.Fields.push("F_UGMEMBER");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(2000);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fugmember");

     this.Fields.push("F_UGISDELETE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fugisdelete");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_usergroup = function () { };
 Supergltl_usergroup.prototype = DataAccess.prototype;
 gltl_usergroup.prototype = new Supergltl_usergroup();

gltl_usergroup.prototype.SetF_UGID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_usergroup.prototype.GetF_UGID = function()
{
    return this.FieldsValue[0];
}

gltl_usergroup.prototype.SetF_UGNAME = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_usergroup.prototype.GetF_UGNAME = function()
{
    return this.FieldsValue[1];
}

gltl_usergroup.prototype.SetF_UGPID = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_usergroup.prototype.GetF_UGPID = function()
{
    return this.FieldsValue[2];
}

gltl_usergroup.prototype.SetF_UGMEMBER = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_usergroup.prototype.GetF_UGMEMBER = function()
{
    return this.FieldsValue[3];
}

gltl_usergroup.prototype.SetF_UGISDELETE = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_usergroup.prototype.GetF_UGISDELETE = function()
{
    return this.FieldsValue[4];
}

gltl_usergroup.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_usergroup.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[5];
}

gltl_usergroup.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_usergroup();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_usergroup.prototype.DownLoadEx = function () {
    var entry = new gltl_usergroup();
    this.DownLoad(entry);
}

gltl_usergroup.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_usergroup();
    this.UpLoadData(entry,callback);
}
