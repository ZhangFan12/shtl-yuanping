 function gltl_inspectprojectrecorditem()
 {
     DataAccess.call(this);
     this.TableName = "gltl_inspectprojectrecorditem";
     this.Fields.push("F_IPRIID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("id");

     this.Fields.push("F_IPRIISCOMPLETE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("isComplete");

     this.Fields.push("F_IPRID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("ipRecord");

     this.Fields.push("F_IPID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("ip");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_inspectprojectrecorditem = function () { };
 Supergltl_inspectprojectrecorditem.prototype = DataAccess.prototype;
 gltl_inspectprojectrecorditem.prototype = new Supergltl_inspectprojectrecorditem();

gltl_inspectprojectrecorditem.prototype.SetF_IPRIID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_inspectprojectrecorditem.prototype.GetF_IPRIID = function()
{
    return this.FieldsValue[0];
}

gltl_inspectprojectrecorditem.prototype.SetF_IPRIISCOMPLETE = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_inspectprojectrecorditem.prototype.GetF_IPRIISCOMPLETE = function()
{
    return this.FieldsValue[1];
}

gltl_inspectprojectrecorditem.prototype.SetF_IPRID = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_inspectprojectrecorditem.prototype.GetF_IPRID = function()
{
    return this.FieldsValue[2];
}

gltl_inspectprojectrecorditem.prototype.SetF_IPID = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_inspectprojectrecorditem.prototype.GetF_IPID = function()
{
    return this.FieldsValue[3];
}

gltl_inspectprojectrecorditem.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_inspectprojectrecorditem.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[4];
}

gltl_inspectprojectrecorditem.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_inspectprojectrecorditem();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_inspectprojectrecorditem.prototype.DownLoadEx = function () {
    var entry = new gltl_inspectprojectrecorditem();
    this.DownLoad(entry);
}

gltl_inspectprojectrecorditem.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_inspectprojectrecorditem();
    this.UpLoadData(entry,callback);
}
