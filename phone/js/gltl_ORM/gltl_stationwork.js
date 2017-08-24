 function gltl_stationwork()
 {
     DataAccess.call(this);
     this.TableName = "gltl_stationwork";
     this.Fields.push("F_SWID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);

     this.Fields.push("F_SWNAME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(true);

     this.Fields.push("F_SWREMARK");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(65535);
     this.FieldsNotNULL.push(false);

     this.Fields.push("F_ISDELETE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_stationwork = function () { };
 Supergltl_stationwork.prototype = DataAccess.prototype;
 gltl_stationwork.prototype = new Supergltl_stationwork();

gltl_stationwork.prototype.SetF_SWID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_stationwork.prototype.GetF_SWID = function()
{
    return this.FieldsValue[0];
}

gltl_stationwork.prototype.SetF_SWNAME = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_stationwork.prototype.GetF_SWNAME = function()
{
    return this.FieldsValue[1];
}

gltl_stationwork.prototype.SetF_SWREMARK = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_stationwork.prototype.GetF_SWREMARK = function()
{
    return this.FieldsValue[2];
}

gltl_stationwork.prototype.SetF_ISDELETE = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_stationwork.prototype.GetF_ISDELETE = function()
{
    return this.FieldsValue[3];
}

gltl_stationwork.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_stationwork.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[4];
}

gltl_stationwork.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_stationwork();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_stationwork.prototype.DownLoadEx = function () {
    var entry = new gltl_stationwork();
    this.DownLoad(entry);
}

gltl_stationwork.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_stationwork();
    this.UpLoadData(entry,callback);
}
