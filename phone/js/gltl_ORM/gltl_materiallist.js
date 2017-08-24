 function gltl_materiallist()
 {
     DataAccess.call(this);
     this.TableName = "gltl_materiallist";
     this.Fields.push("F_MTID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(255);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fMtid");

     this.Fields.push("F_RMID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(255);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fRmid");

     this.Fields.push("F_RMQUALITY");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(30);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fRmquality");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
 }
 var Supergltl_materiallist = function () { };
 Supergltl_materiallist.prototype = DataAccess.prototype;
 gltl_materiallist.prototype = new Supergltl_materiallist();

gltl_materiallist.prototype.SetF_MTID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_materiallist.prototype.GetF_MTID = function()
{
    return this.FieldsValue[0];
}

gltl_materiallist.prototype.SetF_RMID = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_materiallist.prototype.GetF_RMID = function()
{
    return this.FieldsValue[1];
}

gltl_materiallist.prototype.SetF_RMQUALITY = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_materiallist.prototype.GetF_RMQUALITY = function()
{
    return this.FieldsValue[2];
}

gltl_materiallist.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_materiallist.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[3];
}

gltl_materiallist.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_materiallist();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_materiallist.prototype.DownLoadEx = function () {
    var entry = new gltl_materiallist();
    this.DownLoad(entry);
}

gltl_materiallist.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_materiallist();
    this.UpLoadData(entry,callback);
}
