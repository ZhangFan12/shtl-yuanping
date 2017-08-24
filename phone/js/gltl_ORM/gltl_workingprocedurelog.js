 function gltl_workingprocedurelog()
 {
     DataAccess.call(this);
     this.TableName = "gltl_workingprocedurelog";
     this.Fields.push("F_WPLID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fWplid");

     this.Fields.push("F_TPID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fTpid");

     this.Fields.push("F_WPID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fWpid");

     this.Fields.push("F_WPLTIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fWpltime");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_workingprocedurelog = function () { };
 Supergltl_workingprocedurelog.prototype = DataAccess.prototype;
 gltl_workingprocedurelog.prototype = new Supergltl_workingprocedurelog();

gltl_workingprocedurelog.prototype.SetF_WPLID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_workingprocedurelog.prototype.GetF_WPLID = function()
{
    return this.FieldsValue[0];
}

gltl_workingprocedurelog.prototype.SetF_TPID = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_workingprocedurelog.prototype.GetF_TPID = function()
{
    return this.FieldsValue[1];
}

gltl_workingprocedurelog.prototype.SetF_WPID = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_workingprocedurelog.prototype.GetF_WPID = function()
{
    return this.FieldsValue[2];
}

gltl_workingprocedurelog.prototype.SetF_WPLTIME = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_workingprocedurelog.prototype.GetF_WPLTIME = function()
{
    return this.FieldsValue[3];
}

gltl_workingprocedurelog.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_workingprocedurelog.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[4];
}

gltl_workingprocedurelog.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_workingprocedurelog();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_workingprocedurelog.prototype.DownLoadEx = function () {
    var entry = new gltl_workingprocedurelog();
    this.DownLoad(entry);
}

gltl_workingprocedurelog.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_workingprocedurelog();
    this.UpLoadData(entry,callback);
}
