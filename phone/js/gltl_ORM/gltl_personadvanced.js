 function gltl_personadvanced()
 {
     DataAccess.call(this);
     this.TableName = "gltl_personadvanced";
     this.Fields.push("F_PAID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);

     this.Fields.push("F_UID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);

     this.Fields.push("F_PAGRADECOUNT");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);

     this.Fields.push("F_PAGRADE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);

     this.Fields.push("F_PARISETIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(false);

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_personadvanced = function () { };
 Supergltl_personadvanced.prototype = DataAccess.prototype;
 gltl_personadvanced.prototype = new Supergltl_personadvanced();

gltl_personadvanced.prototype.SetF_PAID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_personadvanced.prototype.GetF_PAID = function()
{
    return this.FieldsValue[0];
}

gltl_personadvanced.prototype.SetF_UID = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_personadvanced.prototype.GetF_UID = function()
{
    return this.FieldsValue[1];
}

gltl_personadvanced.prototype.SetF_PAGRADECOUNT = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_personadvanced.prototype.GetF_PAGRADECOUNT = function()
{
    return this.FieldsValue[2];
}

gltl_personadvanced.prototype.SetF_PAGRADE = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_personadvanced.prototype.GetF_PAGRADE = function()
{
    return this.FieldsValue[3];
}

gltl_personadvanced.prototype.SetF_PARISETIME = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_personadvanced.prototype.GetF_PARISETIME = function()
{
    return this.FieldsValue[4];
}

gltl_personadvanced.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_personadvanced.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[5];
}

gltl_personadvanced.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_personadvanced();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_personadvanced.prototype.DownLoadEx = function () {
    var entry = new gltl_personadvanced();
    this.DownLoad(entry);
}

gltl_personadvanced.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_personadvanced();
    this.UpLoadData(entry,callback);
}
