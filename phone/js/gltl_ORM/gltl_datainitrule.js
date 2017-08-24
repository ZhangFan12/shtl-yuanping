 function gltl_datainitrule()
 {
     DataAccess.call(this);
     this.TableName = "gltl_datainitrule";
     this.Fields.push("F_DIRID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);

     this.Fields.push("F_DIRNAME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(200);
     this.FieldsNotNULL.push(true);

     this.Fields.push("F_DIRWHERE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(500);
     this.FieldsNotNULL.push(true);

     this.Fields.push("F_DIRREMARK");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(500);
     this.FieldsNotNULL.push(false);

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_datainitrule = function () { };
 Supergltl_datainitrule.prototype = DataAccess.prototype;
 gltl_datainitrule.prototype = new Supergltl_datainitrule();

gltl_datainitrule.prototype.SetF_DIRID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_datainitrule.prototype.GetF_DIRID = function()
{
    return this.FieldsValue[0];
}

gltl_datainitrule.prototype.SetF_DIRNAME = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_datainitrule.prototype.GetF_DIRNAME = function()
{
    return this.FieldsValue[1];
}

gltl_datainitrule.prototype.SetF_DIRWHERE = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_datainitrule.prototype.GetF_DIRWHERE = function()
{
    return this.FieldsValue[2];
}

gltl_datainitrule.prototype.SetF_DIRREMARK = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_datainitrule.prototype.GetF_DIRREMARK = function()
{
    return this.FieldsValue[3];
}

gltl_datainitrule.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_datainitrule.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[4];
}

gltl_datainitrule.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_datainitrule();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_datainitrule.prototype.DownLoadEx = function () {
    var entry = new gltl_datainitrule();
    this.DownLoad(entry);
}

gltl_datainitrule.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_datainitrule();
    this.UpLoadData(entry,callback);
}
