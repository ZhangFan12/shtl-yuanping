 function gltl_tofquestion()
 {
     DataAccess.call(this);
     this.TableName = "gltl_tofquestion";
     this.Fields.push("F_TQID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("ftqid");

     this.Fields.push("F_TQTYPE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("ftqtype");

     this.Fields.push("F_TQGRADE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("tqgrade");

     this.Fields.push("F_TQCONTENT");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(255);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("tqcontent");

     this.Fields.push("F_TQSORT");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("tqsort");

     this.Fields.push("F_TQNOTE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(255);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("tqnote");

     this.Fields.push("F_TQCREATOR");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("tqcreator");

     this.Fields.push("F_TQCREATETIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("tqcreatetime");

     this.Fields.push("F_TQUPDATETIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("tqupdatetime");

     this.Fields.push("F_TQEXTEND");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(65535);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("");

     this.Fields.push("F_TQISDELETE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_tofquestion = function () { };
 Supergltl_tofquestion.prototype = DataAccess.prototype;
 gltl_tofquestion.prototype = new Supergltl_tofquestion();

gltl_tofquestion.prototype.SetF_TQID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_tofquestion.prototype.GetF_TQID = function()
{
    return this.FieldsValue[0];
}

gltl_tofquestion.prototype.SetF_TQTYPE = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_tofquestion.prototype.GetF_TQTYPE = function()
{
    return this.FieldsValue[1];
}

gltl_tofquestion.prototype.SetF_TQGRADE = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_tofquestion.prototype.GetF_TQGRADE = function()
{
    return this.FieldsValue[2];
}

gltl_tofquestion.prototype.SetF_TQCONTENT = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_tofquestion.prototype.GetF_TQCONTENT = function()
{
    return this.FieldsValue[3];
}

gltl_tofquestion.prototype.SetF_TQSORT = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_tofquestion.prototype.GetF_TQSORT = function()
{
    return this.FieldsValue[4];
}

gltl_tofquestion.prototype.SetF_TQNOTE = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_tofquestion.prototype.GetF_TQNOTE = function()
{
    return this.FieldsValue[5];
}

gltl_tofquestion.prototype.SetF_TQCREATOR = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_tofquestion.prototype.GetF_TQCREATOR = function()
{
    return this.FieldsValue[6];
}

gltl_tofquestion.prototype.SetF_TQCREATETIME = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_tofquestion.prototype.GetF_TQCREATETIME = function()
{
    return this.FieldsValue[7];
}

gltl_tofquestion.prototype.SetF_TQUPDATETIME = function(value)
{
    this.FieldsValue[8] = value;
}

gltl_tofquestion.prototype.GetF_TQUPDATETIME = function()
{
    return this.FieldsValue[8];
}

gltl_tofquestion.prototype.SetF_TQEXTEND = function(value)
{
    this.FieldsValue[9] = value;
}

gltl_tofquestion.prototype.GetF_TQEXTEND = function()
{
    return this.FieldsValue[9];
}

gltl_tofquestion.prototype.SetF_TQISDELETE = function(value)
{
    this.FieldsValue[10] = value;
}

gltl_tofquestion.prototype.GetF_TQISDELETE = function()
{
    return this.FieldsValue[10];
}

gltl_tofquestion.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[11] = value;
}

gltl_tofquestion.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[11];
}

gltl_tofquestion.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_tofquestion();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_tofquestion.prototype.DownLoadEx = function () {
    var entry = new gltl_tofquestion();
    this.DownLoad(entry);
}

gltl_tofquestion.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_tofquestion();
    this.UpLoadData(entry,callback);
}
