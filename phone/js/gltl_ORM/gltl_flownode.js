 function gltl_flownode()
 {
     DataAccess.call(this);
     this.TableName = "gltl_flownode";
     this.Fields.push("F_FWNID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("id");

     this.Fields.push("F_BUSINESSID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("businessId");

     this.Fields.push("F_FWNSTATE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("flowStatus");

     this.Fields.push("F_FWNSENDER");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("flowSender");

     this.Fields.push("F_FWNSENDEE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("flowReceiver");

     this.Fields.push("F_MPID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("workId");

     this.Fields.push("F_ISSUCCESS");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("isSuccess");

     this.Fields.push("F_FWORDERNUMBER");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("flowNo");

     this.Fields.push("F_FWINDEX");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("index");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_flownode = function () { };
 Supergltl_flownode.prototype = DataAccess.prototype;
 gltl_flownode.prototype = new Supergltl_flownode();

gltl_flownode.prototype.SetF_FWNID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_flownode.prototype.GetF_FWNID = function()
{
    return this.FieldsValue[0];
}

gltl_flownode.prototype.SetF_BUSINESSID = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_flownode.prototype.GetF_BUSINESSID = function()
{
    return this.FieldsValue[1];
}

gltl_flownode.prototype.SetF_FWNSTATE = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_flownode.prototype.GetF_FWNSTATE = function()
{
    return this.FieldsValue[2];
}

gltl_flownode.prototype.SetF_FWNSENDER = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_flownode.prototype.GetF_FWNSENDER = function()
{
    return this.FieldsValue[3];
}

gltl_flownode.prototype.SetF_FWNSENDEE = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_flownode.prototype.GetF_FWNSENDEE = function()
{
    return this.FieldsValue[4];
}

gltl_flownode.prototype.SetF_MPID = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_flownode.prototype.GetF_MPID = function()
{
    return this.FieldsValue[5];
}

gltl_flownode.prototype.SetF_ISSUCCESS = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_flownode.prototype.GetF_ISSUCCESS = function()
{
    return this.FieldsValue[6];
}

gltl_flownode.prototype.SetF_FWORDERNUMBER = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_flownode.prototype.GetF_FWORDERNUMBER = function()
{
    return this.FieldsValue[7];
}

gltl_flownode.prototype.SetF_FWINDEX = function(value)
{
    this.FieldsValue[8] = value;
}

gltl_flownode.prototype.GetF_FWINDEX = function()
{
    return this.FieldsValue[8];
}

gltl_flownode.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[9] = value;
}

gltl_flownode.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[9];
}

gltl_flownode.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_flownode();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_flownode.prototype.DownLoadEx = function () {
    var entry = new gltl_flownode();
    this.DownLoad(entry);
}

gltl_flownode.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_flownode();
    this.UpLoadData(entry,callback);
}
