 function gltl_runlineparking()
 {
     DataAccess.call(this);
     this.TableName = "gltl_runlineparking";
     this.Fields.push("F_EPAID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fEpaid");

     this.Fields.push("F_RLIID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fRliid");

     this.Fields.push("F_EPATIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fEpatime");

     this.Fields.push("F_EPAACTIVE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fEoaactive");

     this.Fields.push("F_EPAPOSTION");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fEpapostion");

     this.Fields.push("F_EPAOPERTAOR");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fEpaopertaor");

     this.Fields.push("F_EPAAPPROVER");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fEpaapprover");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_runlineparking = function () { };
 Supergltl_runlineparking.prototype = DataAccess.prototype;
 gltl_runlineparking.prototype = new Supergltl_runlineparking();

gltl_runlineparking.prototype.SetF_EPAID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_runlineparking.prototype.GetF_EPAID = function()
{
    return this.FieldsValue[0];
}

gltl_runlineparking.prototype.SetF_RLIID = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_runlineparking.prototype.GetF_RLIID = function()
{
    return this.FieldsValue[1];
}

gltl_runlineparking.prototype.SetF_EPATIME = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_runlineparking.prototype.GetF_EPATIME = function()
{
    return this.FieldsValue[2];
}

gltl_runlineparking.prototype.SetF_EPAACTIVE = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_runlineparking.prototype.GetF_EPAACTIVE = function()
{
    return this.FieldsValue[3];
}

gltl_runlineparking.prototype.SetF_EPAPOSTION = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_runlineparking.prototype.GetF_EPAPOSTION = function()
{
    return this.FieldsValue[4];
}

gltl_runlineparking.prototype.SetF_EPAOPERTAOR = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_runlineparking.prototype.GetF_EPAOPERTAOR = function()
{
    return this.FieldsValue[5];
}

gltl_runlineparking.prototype.SetF_EPAAPPROVER = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_runlineparking.prototype.GetF_EPAAPPROVER = function()
{
    return this.FieldsValue[6];
}

gltl_runlineparking.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_runlineparking.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[7];
}

gltl_runlineparking.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_runlineparking();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_runlineparking.prototype.DownLoadEx = function () {
    var entry = new gltl_runlineparking();
    this.DownLoad(entry);
}

gltl_runlineparking.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_runlineparking();
    this.UpLoadData(entry,callback);
}
