 function gltl_enginemaintianitem()
 {
     DataAccess.call(this);
     this.TableName = "gltl_enginemaintianitem";
     this.Fields.push("F_EMIID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("id");

     this.Fields.push("F_EMIWORKTYPE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("workType");

     this.Fields.push("F_MPIID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("mpiId");

     this.Fields.push("F_UID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("uId");

     this.Fields.push("F_EMISTARTTIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("startTime");

     this.Fields.push("F_EMIENDTIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("endTime");

     this.Fields.push("F_EMIREALCOUNT");
     this.FieldsType.push("DbType.Double");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("realCount");

     this.Fields.push("F_EMIREMARK");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(255);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("remark");

     this.Fields.push("F_EMIOUTID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("outkeyId");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_enginemaintianitem = function () { };
 Supergltl_enginemaintianitem.prototype = DataAccess.prototype;
 gltl_enginemaintianitem.prototype = new Supergltl_enginemaintianitem();

gltl_enginemaintianitem.prototype.SetF_EMIID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_enginemaintianitem.prototype.GetF_EMIID = function()
{
    return this.FieldsValue[0];
}

gltl_enginemaintianitem.prototype.SetF_EMIWORKTYPE = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_enginemaintianitem.prototype.GetF_EMIWORKTYPE = function()
{
    return this.FieldsValue[1];
}

gltl_enginemaintianitem.prototype.SetF_MPIID = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_enginemaintianitem.prototype.GetF_MPIID = function()
{
    return this.FieldsValue[2];
}

gltl_enginemaintianitem.prototype.SetF_UID = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_enginemaintianitem.prototype.GetF_UID = function()
{
    return this.FieldsValue[3];
}

gltl_enginemaintianitem.prototype.SetF_EMISTARTTIME = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_enginemaintianitem.prototype.GetF_EMISTARTTIME = function()
{
    return this.FieldsValue[4];
}

gltl_enginemaintianitem.prototype.SetF_EMIENDTIME = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_enginemaintianitem.prototype.GetF_EMIENDTIME = function()
{
    return this.FieldsValue[5];
}

gltl_enginemaintianitem.prototype.SetF_EMIREALCOUNT = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_enginemaintianitem.prototype.GetF_EMIREALCOUNT = function()
{
    return this.FieldsValue[6];
}

gltl_enginemaintianitem.prototype.SetF_EMIREMARK = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_enginemaintianitem.prototype.GetF_EMIREMARK = function()
{
    return this.FieldsValue[7];
}

gltl_enginemaintianitem.prototype.SetF_EMIOUTID = function(value)
{
    this.FieldsValue[8] = value;
}

gltl_enginemaintianitem.prototype.GetF_EMIOUTID = function()
{
    return this.FieldsValue[8];
}

gltl_enginemaintianitem.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[9] = value;
}

gltl_enginemaintianitem.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[9];
}

gltl_enginemaintianitem.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_enginemaintianitem();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_enginemaintianitem.prototype.DownLoadEx = function () {
    var entry = new gltl_enginemaintianitem();
    this.DownLoad(entry);
}

gltl_enginemaintianitem.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_enginemaintianitem();
    this.UpLoadData(entry,callback);
}
