 function gltl_enginerepairextend()
 {
     DataAccess.call(this);
     this.TableName = "gltl_enginerepairextend";
     this.Fields.push("F_EREID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("id");

     this.Fields.push("F_ERID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("eRepair");

     this.Fields.push("F_EREFIELDNAME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fieldName");

     this.Fields.push("F_EREFIELDTYPE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fieldType");

     this.Fields.push("F_EREFIELDVALUE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(65535);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fieldValue");

     this.Fields.push("F_EREFIELDINDEX");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fieldIndex");

     this.Fields.push("F_EREFIELDGROUP");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fieldGroup");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_enginerepairextend = function () { };
 Supergltl_enginerepairextend.prototype = DataAccess.prototype;
 gltl_enginerepairextend.prototype = new Supergltl_enginerepairextend();

gltl_enginerepairextend.prototype.SetF_EREID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_enginerepairextend.prototype.GetF_EREID = function()
{
    return this.FieldsValue[0];
}

gltl_enginerepairextend.prototype.SetF_ERID = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_enginerepairextend.prototype.GetF_ERID = function()
{
    return this.FieldsValue[1];
}

gltl_enginerepairextend.prototype.SetF_EREFIELDNAME = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_enginerepairextend.prototype.GetF_EREFIELDNAME = function()
{
    return this.FieldsValue[2];
}

gltl_enginerepairextend.prototype.SetF_EREFIELDTYPE = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_enginerepairextend.prototype.GetF_EREFIELDTYPE = function()
{
    return this.FieldsValue[3];
}

gltl_enginerepairextend.prototype.SetF_EREFIELDVALUE = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_enginerepairextend.prototype.GetF_EREFIELDVALUE = function()
{
    return this.FieldsValue[4];
}

gltl_enginerepairextend.prototype.SetF_EREFIELDINDEX = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_enginerepairextend.prototype.GetF_EREFIELDINDEX = function()
{
    return this.FieldsValue[5];
}

gltl_enginerepairextend.prototype.SetF_EREFIELDGROUP = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_enginerepairextend.prototype.GetF_EREFIELDGROUP = function()
{
    return this.FieldsValue[6];
}

gltl_enginerepairextend.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_enginerepairextend.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[7];
}

gltl_enginerepairextend.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_enginerepairextend();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_enginerepairextend.prototype.DownLoadEx = function () {
    var entry = new gltl_enginerepairextend();
    this.DownLoad(entry);
}

gltl_enginerepairextend.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_enginerepairextend();
    this.UpLoadData(entry,callback);
}
