 function gltl_maintianproject()
 {
     DataAccess.call(this);
     this.TableName = "gltl_maintianproject";
     this.Fields.push("F_MPID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("id");

     this.Fields.push("F_ETYPE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("eType");

     this.Fields.push("F_MPKILOMETRES");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("kilometres");

     this.Fields.push("F_MPREMARK");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(255);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("remark");

     this.Fields.push("F_MPTIMECYCLE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("timecycle");

     this.Fields.push("F_MPTYPE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("mpType");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_maintianproject = function () { };
 Supergltl_maintianproject.prototype = DataAccess.prototype;
 gltl_maintianproject.prototype = new Supergltl_maintianproject();

gltl_maintianproject.prototype.SetF_MPID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_maintianproject.prototype.GetF_MPID = function()
{
    return this.FieldsValue[0];
}

gltl_maintianproject.prototype.SetF_ETYPE = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_maintianproject.prototype.GetF_ETYPE = function()
{
    return this.FieldsValue[1];
}

gltl_maintianproject.prototype.SetF_MPKILOMETRES = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_maintianproject.prototype.GetF_MPKILOMETRES = function()
{
    return this.FieldsValue[2];
}

gltl_maintianproject.prototype.SetF_MPREMARK = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_maintianproject.prototype.GetF_MPREMARK = function()
{
    return this.FieldsValue[3];
}

gltl_maintianproject.prototype.SetF_MPTIMECYCLE = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_maintianproject.prototype.GetF_MPTIMECYCLE = function()
{
    return this.FieldsValue[4];
}

gltl_maintianproject.prototype.SetF_MPTYPE = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_maintianproject.prototype.GetF_MPTYPE = function()
{
    return this.FieldsValue[5];
}

gltl_maintianproject.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_maintianproject.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[6];
}

gltl_maintianproject.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_maintianproject();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_maintianproject.prototype.DownLoadEx = function () {
    var entry = new gltl_maintianproject();
    this.DownLoad(entry);
}

gltl_maintianproject.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_maintianproject();
    this.UpLoadData(entry,callback);
}
