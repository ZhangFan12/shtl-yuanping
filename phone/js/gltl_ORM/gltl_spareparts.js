 function gltl_spareparts()
 {
     DataAccess.call(this);
     this.TableName = "gltl_spareparts";
     this.Fields.push("F_SPID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);

     this.Fields.push("F_SPNAME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(true);

     this.Fields.push("F_SPTYPE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);

     this.Fields.push("F_SPMODELNUMBER");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(255);
     this.FieldsNotNULL.push(false);

     this.Fields.push("F_SPINDEX");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);

     this.Fields.push("F_SPINVENTORY");
     this.FieldsType.push("DbType.Double");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);

     this.Fields.push("F_SPPOSTION");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(255);
     this.FieldsNotNULL.push(false);

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_spareparts = function () { };
 Supergltl_spareparts.prototype = DataAccess.prototype;
 gltl_spareparts.prototype = new Supergltl_spareparts();

gltl_spareparts.prototype.SetF_SPID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_spareparts.prototype.GetF_SPID = function()
{
    return this.FieldsValue[0];
}

gltl_spareparts.prototype.SetF_SPNAME = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_spareparts.prototype.GetF_SPNAME = function()
{
    return this.FieldsValue[1];
}

gltl_spareparts.prototype.SetF_SPTYPE = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_spareparts.prototype.GetF_SPTYPE = function()
{
    return this.FieldsValue[2];
}

gltl_spareparts.prototype.SetF_SPMODELNUMBER = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_spareparts.prototype.GetF_SPMODELNUMBER = function()
{
    return this.FieldsValue[3];
}

gltl_spareparts.prototype.SetF_SPINDEX = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_spareparts.prototype.GetF_SPINDEX = function()
{
    return this.FieldsValue[4];
}

gltl_spareparts.prototype.SetF_SPINVENTORY = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_spareparts.prototype.GetF_SPINVENTORY = function()
{
    return this.FieldsValue[5];
}

gltl_spareparts.prototype.SetF_SPPOSTION = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_spareparts.prototype.GetF_SPPOSTION = function()
{
    return this.FieldsValue[6];
}

gltl_spareparts.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_spareparts.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[7];
}

gltl_spareparts.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_spareparts();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_spareparts.prototype.DownLoadEx = function () {
    var entry = new gltl_spareparts();
    this.DownLoad(entry);
}

gltl_spareparts.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_spareparts();
    this.UpLoadData(entry,callback);
}
