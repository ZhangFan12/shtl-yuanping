 function gltl_option()
 {
     DataAccess.call(this);
     this.TableName = "gltl_option";
     this.Fields.push("F_OID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("foid");

     this.Fields.push("F_QUESTIONID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fqid");

     this.Fields.push("F_OPTION");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(255);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("option");

     this.Fields.push("F_OTFANSWER");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("otfanswer");

     this.Fields.push("F_OSORT");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("qsort");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_option = function () { };
 Supergltl_option.prototype = DataAccess.prototype;
 gltl_option.prototype = new Supergltl_option();

gltl_option.prototype.SetF_OID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_option.prototype.GetF_OID = function()
{
    return this.FieldsValue[0];
}

gltl_option.prototype.SetF_QUESTIONID = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_option.prototype.GetF_QUESTIONID = function()
{
    return this.FieldsValue[1];
}

gltl_option.prototype.SetF_OPTION = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_option.prototype.GetF_OPTION = function()
{
    return this.FieldsValue[2];
}

gltl_option.prototype.SetF_OTFANSWER = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_option.prototype.GetF_OTFANSWER = function()
{
    return this.FieldsValue[3];
}

gltl_option.prototype.SetF_OSORT = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_option.prototype.GetF_OSORT = function()
{
    return this.FieldsValue[4];
}

gltl_option.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_option.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[5];
}

gltl_option.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_option();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_option.prototype.DownLoadEx = function () {
    var entry = new gltl_option();
    this.DownLoad(entry);
}

gltl_option.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_option();
    this.UpLoadData(entry,callback);
}
