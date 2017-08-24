 function gltl_applyflow()
 {
     DataAccess.call(this);
     this.TableName = "gltl_applyflow";
     this.Fields.push("F_AID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);

     this.Fields.push("F_APPLYNO");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(32);
     this.FieldsNotNULL.push(false);

     this.Fields.push("F_APPLYNAME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(300);
     this.FieldsNotNULL.push(false);

     this.Fields.push("F_APPLYOR");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(false);

     this.Fields.push("F_AMTTIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(false);

     this.Fields.push("F_AMTTYPE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(2);
     this.FieldsNotNULL.push(false);

     this.Fields.push("F_APPLYSTATUS");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(2);
     this.FieldsNotNULL.push(false);

     this.Fields.push("F_ACREATETIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(false);

     this.Fields.push("F_ARMK");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(500);
     this.FieldsNotNULL.push(false);

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_applyflow = function () { };
 Supergltl_applyflow.prototype = DataAccess.prototype;
 gltl_applyflow.prototype = new Supergltl_applyflow();

gltl_applyflow.prototype.SetF_AID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_applyflow.prototype.GetF_AID = function()
{
    return this.FieldsValue[0];
}

gltl_applyflow.prototype.SetF_APPLYNO = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_applyflow.prototype.GetF_APPLYNO = function()
{
    return this.FieldsValue[1];
}

gltl_applyflow.prototype.SetF_APPLYNAME = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_applyflow.prototype.GetF_APPLYNAME = function()
{
    return this.FieldsValue[2];
}

gltl_applyflow.prototype.SetF_APPLYOR = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_applyflow.prototype.GetF_APPLYOR = function()
{
    return this.FieldsValue[3];
}

gltl_applyflow.prototype.SetF_AMTTIME = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_applyflow.prototype.GetF_AMTTIME = function()
{
    return this.FieldsValue[4];
}

gltl_applyflow.prototype.SetF_AMTTYPE = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_applyflow.prototype.GetF_AMTTYPE = function()
{
    return this.FieldsValue[5];
}

gltl_applyflow.prototype.SetF_APPLYSTATUS = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_applyflow.prototype.GetF_APPLYSTATUS = function()
{
    return this.FieldsValue[6];
}

gltl_applyflow.prototype.SetF_ACREATETIME = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_applyflow.prototype.GetF_ACREATETIME = function()
{
    return this.FieldsValue[7];
}

gltl_applyflow.prototype.SetF_ARMK = function(value)
{
    this.FieldsValue[8] = value;
}

gltl_applyflow.prototype.GetF_ARMK = function()
{
    return this.FieldsValue[8];
}

gltl_applyflow.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[9] = value;
}

gltl_applyflow.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[9];
}

gltl_applyflow.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_applyflow();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_applyflow.prototype.DownLoadEx = function () {
    var entry = new gltl_applyflow();
    this.DownLoad(entry);
}

gltl_applyflow.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_applyflow();
    this.UpLoadData(entry,callback);
}
