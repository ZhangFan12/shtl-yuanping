 function gltl_enginerepairitem()
 {
     DataAccess.call(this);
     this.TableName = "gltl_enginerepairitem";
     this.Fields.push("F_ERITID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("id");

     this.Fields.push("F_ERITNAME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("name");

     this.Fields.push("F_ERITMODEL");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("model");

     this.Fields.push("F_ERITCOUNT");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("count");

     this.Fields.push("F_ERITUNITPRICE");
     this.FieldsType.push("DbType.Double");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("price");

     this.Fields.push("F_ERITMANUFACTURER");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(255);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("manufacturer");

     this.Fields.push("F_ERID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("repair");

     this.Fields.push("F_ERITINDEX");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("index");

     this.Fields.push("F_MTID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("materiel");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_enginerepairitem = function () { };
 Supergltl_enginerepairitem.prototype = DataAccess.prototype;
 gltl_enginerepairitem.prototype = new Supergltl_enginerepairitem();

gltl_enginerepairitem.prototype.SetF_ERITID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_enginerepairitem.prototype.GetF_ERITID = function()
{
    return this.FieldsValue[0];
}

gltl_enginerepairitem.prototype.SetF_ERITNAME = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_enginerepairitem.prototype.GetF_ERITNAME = function()
{
    return this.FieldsValue[1];
}

gltl_enginerepairitem.prototype.SetF_ERITMODEL = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_enginerepairitem.prototype.GetF_ERITMODEL = function()
{
    return this.FieldsValue[2];
}

gltl_enginerepairitem.prototype.SetF_ERITCOUNT = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_enginerepairitem.prototype.GetF_ERITCOUNT = function()
{
    return this.FieldsValue[3];
}

gltl_enginerepairitem.prototype.SetF_ERITUNITPRICE = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_enginerepairitem.prototype.GetF_ERITUNITPRICE = function()
{
    return this.FieldsValue[4];
}

gltl_enginerepairitem.prototype.SetF_ERITMANUFACTURER = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_enginerepairitem.prototype.GetF_ERITMANUFACTURER = function()
{
    return this.FieldsValue[5];
}

gltl_enginerepairitem.prototype.SetF_ERID = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_enginerepairitem.prototype.GetF_ERID = function()
{
    return this.FieldsValue[6];
}

gltl_enginerepairitem.prototype.SetF_ERITINDEX = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_enginerepairitem.prototype.GetF_ERITINDEX = function()
{
    return this.FieldsValue[7];
}

gltl_enginerepairitem.prototype.SetF_MTID = function(value)
{
    this.FieldsValue[8] = value;
}

gltl_enginerepairitem.prototype.GetF_MTID = function()
{
    return this.FieldsValue[8];
}

gltl_enginerepairitem.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[9] = value;
}

gltl_enginerepairitem.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[9];
}

gltl_enginerepairitem.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_enginerepairitem();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_enginerepairitem.prototype.DownLoadEx = function () {
    var entry = new gltl_enginerepairitem();
    this.DownLoad(entry);
}

gltl_enginerepairitem.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_enginerepairitem();
    this.UpLoadData(entry,callback);
}
