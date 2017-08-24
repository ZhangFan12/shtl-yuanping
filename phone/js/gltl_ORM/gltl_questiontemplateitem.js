 function gltl_questiontemplateitem()
 {
     DataAccess.call(this);
     this.TableName = "gltl_questiontemplateitem";
     this.Fields.push("F_QTIID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fqtiid");

     this.Fields.push("F_QTYPE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("qtype");

     this.Fields.push("F_QTICOUNT");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("qticount");

     this.Fields.push("F_QTIINDEX");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("qtiindex");

     this.Fields.push("F_QTIRIGHT");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("qtiright");

     this.Fields.push("F_QTID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fqtid");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_questiontemplateitem = function () { };
 Supergltl_questiontemplateitem.prototype = DataAccess.prototype;
 gltl_questiontemplateitem.prototype = new Supergltl_questiontemplateitem();

gltl_questiontemplateitem.prototype.SetF_QTIID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_questiontemplateitem.prototype.GetF_QTIID = function()
{
    return this.FieldsValue[0];
}

gltl_questiontemplateitem.prototype.SetF_QTYPE = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_questiontemplateitem.prototype.GetF_QTYPE = function()
{
    return this.FieldsValue[1];
}

gltl_questiontemplateitem.prototype.SetF_QTICOUNT = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_questiontemplateitem.prototype.GetF_QTICOUNT = function()
{
    return this.FieldsValue[2];
}

gltl_questiontemplateitem.prototype.SetF_QTIINDEX = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_questiontemplateitem.prototype.GetF_QTIINDEX = function()
{
    return this.FieldsValue[3];
}

gltl_questiontemplateitem.prototype.SetF_QTIRIGHT = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_questiontemplateitem.prototype.GetF_QTIRIGHT = function()
{
    return this.FieldsValue[4];
}

gltl_questiontemplateitem.prototype.SetF_QTID = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_questiontemplateitem.prototype.GetF_QTID = function()
{
    return this.FieldsValue[5];
}

gltl_questiontemplateitem.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_questiontemplateitem.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[6];
}

gltl_questiontemplateitem.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_questiontemplateitem();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_questiontemplateitem.prototype.DownLoadEx = function () {
    var entry = new gltl_questiontemplateitem();
    this.DownLoad(entry);
}

gltl_questiontemplateitem.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_questiontemplateitem();
    this.UpLoadData(entry,callback);
}
