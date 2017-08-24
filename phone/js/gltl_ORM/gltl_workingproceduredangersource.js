 function gltl_workingproceduredangersource()
 {
     DataAccess.call(this);
     this.TableName = "gltl_workingproceduredangersource";
     this.Fields.push("F_WPDID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fWpdid");
     this.Fields.push("F_WPID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fWpid");
     this.Fields.push("F_DSID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fDsid");
     this.Fields.push("F_WPINDEX");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fWpindex");
     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(0);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Super = function () { };
 Super.prototype = DataAccess.prototype;
 gltl_user.prototype = new Super();

gltl_workingproceduredangersource.prototype.SetF_WPDID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_workingproceduredangersource.prototype.GetF_WPDID = function()
{
    return this.FieldsValue[0];
}

gltl_workingproceduredangersource.prototype.SetF_WPID = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_workingproceduredangersource.prototype.GetF_WPID = function()
{
    return this.FieldsValue[1];
}

gltl_workingproceduredangersource.prototype.SetF_DSID = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_workingproceduredangersource.prototype.GetF_DSID = function()
{
    return this.FieldsValue[2];
}

gltl_workingproceduredangersource.prototype.SetF_WPINDEX = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_workingproceduredangersource.prototype.GetF_WPINDEX = function()
{
    return this.FieldsValue[3];
}

gltl_workingproceduredangersource.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_workingproceduredangersource.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[4];
}

gltl_workingproceduredangersource.prototype.GetEntryArray = function (json) {
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_workingproceduredangersource();
        	item.FillEntry(json[i]);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_workingproceduredangersource.prototype.DownLoadEx = function () {
    var entry = new gltl_workingproceduredangersource();
    this.DownLoad(entry);
}

gltl_workingproceduredangersource.prototype.UpLoadDataEx = function () {
    var entry = new gltl_workingproceduredangersource();
    this.UpLoadData(entry);
}
