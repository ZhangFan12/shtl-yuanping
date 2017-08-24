 function gltl_taskplanworkinggroup()
 {
     DataAccess.call(this);
     this.TableName = "gltl_taskplanworkinggroup";
     this.Fields.push("F_TPID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);

     this.Fields.push("F_WPGID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
     this.KeyIndexs.push(1);
 }
 var Supergltl_taskplanworkinggroup = function () { };
 Supergltl_taskplanworkinggroup.prototype = DataAccess.prototype;
 gltl_taskplanworkinggroup.prototype = new Supergltl_taskplanworkinggroup();

gltl_taskplanworkinggroup.prototype.SetF_TPID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_taskplanworkinggroup.prototype.GetF_TPID = function()
{
    return this.FieldsValue[0];
}

gltl_taskplanworkinggroup.prototype.SetF_WPGID = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_taskplanworkinggroup.prototype.GetF_WPGID = function()
{
    return this.FieldsValue[1];
}

gltl_taskplanworkinggroup.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_taskplanworkinggroup.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[2];
}

gltl_taskplanworkinggroup.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_taskplanworkinggroup();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_taskplanworkinggroup.prototype.DownLoadEx = function () {
    var entry = new gltl_taskplanworkinggroup();
    this.DownLoad(entry);
}

gltl_taskplanworkinggroup.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_taskplanworkinggroup();
    this.UpLoadData(entry,callback);
}
