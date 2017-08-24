 function gltl_inspectprojectrecord()
 {
     DataAccess.call(this);
     this.TableName = "gltl_inspectprojectrecord";
     this.Fields.push("F_IPRID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("id");

     this.Fields.push("F_EID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("engine");

     this.Fields.push("F_IPRTIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("time");

     this.Fields.push("F_IPRPERSON");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("person");

     this.Fields.push("F_TPID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("tpId");

     this.Fields.push("F_IPRAPPLYER");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("applyer");

     this.Fields.push("F_IPRCREATETIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("createTime");

     this.Fields.push("F_IPRTYPE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("type");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_inspectprojectrecord = function () { };
 Supergltl_inspectprojectrecord.prototype = DataAccess.prototype;
 gltl_inspectprojectrecord.prototype = new Supergltl_inspectprojectrecord();

gltl_inspectprojectrecord.prototype.SetF_IPRID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_inspectprojectrecord.prototype.GetF_IPRID = function()
{
    return this.FieldsValue[0];
}

gltl_inspectprojectrecord.prototype.SetF_EID = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_inspectprojectrecord.prototype.GetF_EID = function()
{
    return this.FieldsValue[1];
}

gltl_inspectprojectrecord.prototype.SetF_IPRTIME = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_inspectprojectrecord.prototype.GetF_IPRTIME = function()
{
    return this.FieldsValue[2];
}

gltl_inspectprojectrecord.prototype.SetF_IPRPERSON = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_inspectprojectrecord.prototype.GetF_IPRPERSON = function()
{
    return this.FieldsValue[3];
}

gltl_inspectprojectrecord.prototype.SetF_TPID = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_inspectprojectrecord.prototype.GetF_TPID = function()
{
    return this.FieldsValue[4];
}

gltl_inspectprojectrecord.prototype.SetF_IPRAPPLYER = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_inspectprojectrecord.prototype.GetF_IPRAPPLYER = function()
{
    return this.FieldsValue[5];
}

gltl_inspectprojectrecord.prototype.SetF_IPRCREATETIME = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_inspectprojectrecord.prototype.GetF_IPRCREATETIME = function()
{
    return this.FieldsValue[6];
}

gltl_inspectprojectrecord.prototype.SetF_IPRTYPE = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_inspectprojectrecord.prototype.GetF_IPRTYPE = function()
{
    return this.FieldsValue[7];
}

gltl_inspectprojectrecord.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[8] = value;
}

gltl_inspectprojectrecord.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[8];
}

gltl_inspectprojectrecord.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_inspectprojectrecord();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_inspectprojectrecord.prototype.DownLoadEx = function () {
    var entry = new gltl_inspectprojectrecord();
    this.DownLoad(entry);
}

gltl_inspectprojectrecord.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_inspectprojectrecord();
    this.UpLoadData(entry,callback);
}
