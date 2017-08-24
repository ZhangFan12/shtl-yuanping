 function gltl_dictionary()
 {
     DataAccess.call(this);
     this.TableName = "gltl_dictionary";
     this.Fields.push("F_DID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fdid");

     this.Fields.push("F_DNAME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("name");

     this.Fields.push("F_DINDEX");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("index");

     this.Fields.push("F_PDID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("pdid");

     this.Fields.push("F_DREMARK");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(255);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("remark");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_dictionary = function () { };
 Supergltl_dictionary.prototype = DataAccess.prototype;
 gltl_dictionary.prototype = new Supergltl_dictionary();

gltl_dictionary.prototype.SetF_DID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_dictionary.prototype.GetF_DID = function()
{
    return this.FieldsValue[0];
}

gltl_dictionary.prototype.SetF_DNAME = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_dictionary.prototype.GetF_DNAME = function()
{
    return this.FieldsValue[1];
}

gltl_dictionary.prototype.SetF_DINDEX = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_dictionary.prototype.GetF_DINDEX = function()
{
    return this.FieldsValue[2];
}

gltl_dictionary.prototype.SetF_PDID = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_dictionary.prototype.GetF_PDID = function()
{
    return this.FieldsValue[3];
}

gltl_dictionary.prototype.SetF_DREMARK = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_dictionary.prototype.GetF_DREMARK = function()
{
    return this.FieldsValue[4];
}

gltl_dictionary.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_dictionary.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[5];
}

gltl_dictionary.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_dictionary();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_dictionary.prototype.DownLoadEx = function () {
    var entry = new gltl_dictionary();
    this.DownLoad(entry);
}

gltl_dictionary.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_dictionary();
    this.UpLoadData(entry,callback);
}
