 function gltl_workingprocedure()
 {
     DataAccess.call(this);
     this.TableName = "gltl_workingprocedure";
     this.Fields.push("F_WPID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fWpid");

     this.Fields.push("F_WPNAME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fWpname");

     this.Fields.push("F_WPINDEX");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fWpindex");

     this.Fields.push("F_WPISDELETE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fwpisdelete");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_workingprocedure = function () { };
 Supergltl_workingprocedure.prototype = DataAccess.prototype;
 gltl_workingprocedure.prototype = new Supergltl_workingprocedure();

gltl_workingprocedure.prototype.SetF_WPID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_workingprocedure.prototype.GetF_WPID = function()
{
    return this.FieldsValue[0];
}

gltl_workingprocedure.prototype.SetF_WPNAME = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_workingprocedure.prototype.GetF_WPNAME = function()
{
    return this.FieldsValue[1];
}

gltl_workingprocedure.prototype.SetF_WPINDEX = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_workingprocedure.prototype.GetF_WPINDEX = function()
{
    return this.FieldsValue[2];
}

gltl_workingprocedure.prototype.SetF_WPISDELETE = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_workingprocedure.prototype.GetF_WPISDELETE = function()
{
    return this.FieldsValue[3];
}

gltl_workingprocedure.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_workingprocedure.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[4];
}

gltl_workingprocedure.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_workingprocedure();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_workingprocedure.prototype.DownLoadEx = function () {
    var entry = new gltl_workingprocedure();
    this.DownLoad(entry);
}

gltl_workingprocedure.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_workingprocedure();
    this.UpLoadData(entry,callback);
}
