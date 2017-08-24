 function gltl_receivematerial()
 {
     DataAccess.call(this);
     this.TableName = "gltl_receivematerial";
     this.Fields.push("F_RMID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fRmid");

     this.Fields.push("F_MTID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(200);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fMtid");

     this.Fields.push("F_RMQUALITY");
     this.FieldsType.push("DbType.Double");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fRmquality");

     this.Fields.push("F_RMUSES");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(200);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fRmuses");

     this.Fields.push("F_EID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fEid");

     this.Fields.push("F_RMRECEIVEPERSON");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fRmreceiveperson");

     this.Fields.push("F_RMRECEIVEDATE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fRmreceivedate");

     this.Fields.push("F_APPROVER");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fApprover");

     this.Fields.push("F_STATUS");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fStatus");

     this.Fields.push("F_APPROVALOPINION");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(200);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fApprovalopinion");

     this.Fields.push("F_APPROVALTIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("");

     this.Fields.push("F_MTNAME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(200);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fMtname");

     this.Fields.push("F_CONFIRMPER");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fConfirmPer");

     this.Fields.push("F_CONFIRMPEROPINION");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(200);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fConfirmperopinion");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_receivematerial = function () { };
 Supergltl_receivematerial.prototype = DataAccess.prototype;
 gltl_receivematerial.prototype = new Supergltl_receivematerial();

gltl_receivematerial.prototype.SetF_RMID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_receivematerial.prototype.GetF_RMID = function()
{
    return this.FieldsValue[0];
}

gltl_receivematerial.prototype.SetF_MTID = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_receivematerial.prototype.GetF_MTID = function()
{
    return this.FieldsValue[1];
}

gltl_receivematerial.prototype.SetF_RMQUALITY = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_receivematerial.prototype.GetF_RMQUALITY = function()
{
    return this.FieldsValue[2];
}

gltl_receivematerial.prototype.SetF_RMUSES = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_receivematerial.prototype.GetF_RMUSES = function()
{
    return this.FieldsValue[3];
}

gltl_receivematerial.prototype.SetF_EID = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_receivematerial.prototype.GetF_EID = function()
{
    return this.FieldsValue[4];
}

gltl_receivematerial.prototype.SetF_RMRECEIVEPERSON = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_receivematerial.prototype.GetF_RMRECEIVEPERSON = function()
{
    return this.FieldsValue[5];
}

gltl_receivematerial.prototype.SetF_RMRECEIVEDATE = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_receivematerial.prototype.GetF_RMRECEIVEDATE = function()
{
    return this.FieldsValue[6];
}

gltl_receivematerial.prototype.SetF_APPROVER = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_receivematerial.prototype.GetF_APPROVER = function()
{
    return this.FieldsValue[7];
}

gltl_receivematerial.prototype.SetF_STATUS = function(value)
{
    this.FieldsValue[8] = value;
}

gltl_receivematerial.prototype.GetF_STATUS = function()
{
    return this.FieldsValue[8];
}

gltl_receivematerial.prototype.SetF_APPROVALOPINION = function(value)
{
    this.FieldsValue[9] = value;
}

gltl_receivematerial.prototype.GetF_APPROVALOPINION = function()
{
    return this.FieldsValue[9];
}

gltl_receivematerial.prototype.SetF_APPROVALTIME = function(value)
{
    this.FieldsValue[10] = value;
}

gltl_receivematerial.prototype.GetF_APPROVALTIME = function()
{
    return this.FieldsValue[10];
}

gltl_receivematerial.prototype.SetF_MTNAME = function(value)
{
    this.FieldsValue[11] = value;
}

gltl_receivematerial.prototype.GetF_MTNAME = function()
{
    return this.FieldsValue[11];
}

gltl_receivematerial.prototype.SetF_CONFIRMPER = function(value)
{
    this.FieldsValue[12] = value;
}

gltl_receivematerial.prototype.GetF_CONFIRMPER = function()
{
    return this.FieldsValue[12];
}

gltl_receivematerial.prototype.SetF_CONFIRMPEROPINION = function(value)
{
    this.FieldsValue[13] = value;
}

gltl_receivematerial.prototype.GetF_CONFIRMPEROPINION = function()
{
    return this.FieldsValue[13];
}

gltl_receivematerial.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[14] = value;
}

gltl_receivematerial.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[14];
}

gltl_receivematerial.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_receivematerial();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_receivematerial.prototype.DownLoadEx = function () {
    var entry = new gltl_receivematerial();
    this.DownLoad(entry);
}

gltl_receivematerial.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_receivematerial();
    this.UpLoadData(entry,callback);
}
