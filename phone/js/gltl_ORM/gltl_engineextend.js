 function gltl_engineextend()
 {
     DataAccess.call(this);
     this.TableName = "gltl_engineextend";
     this.Fields.push("F_EEID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fEeid");

     this.Fields.push("F_EID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fEid");

     this.Fields.push("F_EEFIELDNAME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fEefieldname");

     this.Fields.push("F_EEFIELDTYPE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fEefieldaype");

     this.Fields.push("F_EEFIELDVALUE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(65535);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fEeefieldvalue");

     this.Fields.push("F_EEFIELDINDEX");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fEefieldindex");

     this.Fields.push("F_EEFIELDGROUP");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fEefieldgroup");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_engineextend = function () { };
 Supergltl_engineextend.prototype = DataAccess.prototype;
 gltl_engineextend.prototype = new Supergltl_engineextend();

gltl_engineextend.prototype.SetF_EEID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_engineextend.prototype.GetF_EEID = function()
{
    return this.FieldsValue[0];
}

gltl_engineextend.prototype.SetF_EID = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_engineextend.prototype.GetF_EID = function()
{
    return this.FieldsValue[1];
}

gltl_engineextend.prototype.SetF_EEFIELDNAME = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_engineextend.prototype.GetF_EEFIELDNAME = function()
{
    return this.FieldsValue[2];
}

gltl_engineextend.prototype.SetF_EEFIELDTYPE = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_engineextend.prototype.GetF_EEFIELDTYPE = function()
{
    return this.FieldsValue[3];
}

gltl_engineextend.prototype.SetF_EEFIELDVALUE = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_engineextend.prototype.GetF_EEFIELDVALUE = function()
{
    return this.FieldsValue[4];
}

gltl_engineextend.prototype.SetF_EEFIELDINDEX = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_engineextend.prototype.GetF_EEFIELDINDEX = function()
{
    return this.FieldsValue[5];
}

gltl_engineextend.prototype.SetF_EEFIELDGROUP = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_engineextend.prototype.GetF_EEFIELDGROUP = function()
{
    return this.FieldsValue[6];
}

gltl_engineextend.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_engineextend.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[7];
}

gltl_engineextend.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_engineextend();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_engineextend.prototype.DownLoadEx = function () {
    var entry = new gltl_engineextend();
    this.DownLoad(entry);
}

gltl_engineextend.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_engineextend();
    this.UpLoadData(entry,callback);
}
