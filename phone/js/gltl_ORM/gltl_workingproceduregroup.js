 function gltl_workingproceduregroup()
 {
     DataAccess.call(this);
     this.TableName = "gltl_workingproceduregroup";
     this.Fields.push("F_WPGID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fWpgid");

     this.Fields.push("F_WPGNAME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(200);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fWpgname");

     this.Fields.push("F_WPINDEX");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fWpindex");

     this.Fields.push("F_WPGISTEMPLATE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fWpgistemplate");

     this.Fields.push("F_WPGISDELETE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fwpgisdelete");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_workingproceduregroup = function () { };
 Supergltl_workingproceduregroup.prototype = DataAccess.prototype;
 gltl_workingproceduregroup.prototype = new Supergltl_workingproceduregroup();

gltl_workingproceduregroup.prototype.SetF_WPGID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_workingproceduregroup.prototype.GetF_WPGID = function()
{
    return this.FieldsValue[0];
}

gltl_workingproceduregroup.prototype.SetF_WPGNAME = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_workingproceduregroup.prototype.GetF_WPGNAME = function()
{
    return this.FieldsValue[1];
}

gltl_workingproceduregroup.prototype.SetF_WPINDEX = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_workingproceduregroup.prototype.GetF_WPINDEX = function()
{
    return this.FieldsValue[2];
}

gltl_workingproceduregroup.prototype.SetF_WPGISTEMPLATE = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_workingproceduregroup.prototype.GetF_WPGISTEMPLATE = function()
{
    return this.FieldsValue[3];
}

gltl_workingproceduregroup.prototype.SetF_WPGISDELETE = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_workingproceduregroup.prototype.GetF_WPGISDELETE = function()
{
    return this.FieldsValue[4];
}

gltl_workingproceduregroup.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_workingproceduregroup.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[5];
}

gltl_workingproceduregroup.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_workingproceduregroup();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_workingproceduregroup.prototype.DownLoadEx = function () {
    var entry = new gltl_workingproceduregroup();
    this.DownLoad(entry);
}

gltl_workingproceduregroup.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_workingproceduregroup();
    this.UpLoadData(entry,callback);
}
