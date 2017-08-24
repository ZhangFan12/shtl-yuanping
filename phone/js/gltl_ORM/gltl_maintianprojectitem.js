 function gltl_maintianprojectitem()
 {
     DataAccess.call(this);
     this.TableName = "gltl_maintianprojectitem";
     this.Fields.push("F_MPIID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);

     this.Fields.push("F_SPID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);

     this.Fields.push("F_MPICOUNT");
     this.FieldsType.push("DbType.Double");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);

     this.Fields.push("F_MPINDEX");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);

     this.Fields.push("F_MPIREMARK");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(true);

     this.Fields.push("F_MPIOUTID");
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
 }
 var Supergltl_maintianprojectitem = function () { };
 Supergltl_maintianprojectitem.prototype = DataAccess.prototype;
 gltl_maintianprojectitem.prototype = new Supergltl_maintianprojectitem();

gltl_maintianprojectitem.prototype.SetF_MPIID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_maintianprojectitem.prototype.GetF_MPIID = function()
{
    return this.FieldsValue[0];
}

gltl_maintianprojectitem.prototype.SetF_SPID = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_maintianprojectitem.prototype.GetF_SPID = function()
{
    return this.FieldsValue[1];
}

gltl_maintianprojectitem.prototype.SetF_MPICOUNT = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_maintianprojectitem.prototype.GetF_MPICOUNT = function()
{
    return this.FieldsValue[2];
}

gltl_maintianprojectitem.prototype.SetF_MPINDEX = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_maintianprojectitem.prototype.GetF_MPINDEX = function()
{
    return this.FieldsValue[3];
}

gltl_maintianprojectitem.prototype.SetF_MPIREMARK = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_maintianprojectitem.prototype.GetF_MPIREMARK = function()
{
    return this.FieldsValue[4];
}

gltl_maintianprojectitem.prototype.SetF_MPIOUTID = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_maintianprojectitem.prototype.GetF_MPIOUTID = function()
{
    return this.FieldsValue[5];
}

gltl_maintianprojectitem.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_maintianprojectitem.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[6];
}

gltl_maintianprojectitem.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_maintianprojectitem();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_maintianprojectitem.prototype.DownLoadEx = function () {
    var entry = new gltl_maintianprojectitem();
    this.DownLoad(entry);
}

gltl_maintianprojectitem.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_maintianprojectitem();
    this.UpLoadData(entry,callback);
}
