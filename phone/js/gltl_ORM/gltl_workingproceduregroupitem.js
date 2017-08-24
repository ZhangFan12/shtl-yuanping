 function gltl_workingproceduregroupitem()
 {
     DataAccess.call(this);
     this.TableName = "gltl_workingproceduregroupitem";
     this.Fields.push("F_WPGID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fWpgid");

     this.Fields.push("F_WPID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fWpid");

     this.Fields.push("F_WPGINDEX");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fWpgindex");

     this.Fields.push("F_WPGWPID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("f_wpgwpid");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(3);
 }
 var Supergltl_workingproceduregroupitem = function () { };
 Supergltl_workingproceduregroupitem.prototype = DataAccess.prototype;
 gltl_workingproceduregroupitem.prototype = new Supergltl_workingproceduregroupitem();

gltl_workingproceduregroupitem.prototype.SetF_WPGID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_workingproceduregroupitem.prototype.GetF_WPGID = function()
{
    return this.FieldsValue[0];
}

gltl_workingproceduregroupitem.prototype.SetF_WPID = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_workingproceduregroupitem.prototype.GetF_WPID = function()
{
    return this.FieldsValue[1];
}

gltl_workingproceduregroupitem.prototype.SetF_WPGINDEX = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_workingproceduregroupitem.prototype.GetF_WPGINDEX = function()
{
    return this.FieldsValue[2];
}

gltl_workingproceduregroupitem.prototype.SetF_WPGWPID = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_workingproceduregroupitem.prototype.GetF_WPGWPID = function()
{
    return this.FieldsValue[3];
}

gltl_workingproceduregroupitem.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_workingproceduregroupitem.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[4];
}

gltl_workingproceduregroupitem.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_workingproceduregroupitem();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_workingproceduregroupitem.prototype.DownLoadEx = function () {
    var entry = new gltl_workingproceduregroupitem();
    this.DownLoad(entry);
}

gltl_workingproceduregroupitem.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_workingproceduregroupitem();
    this.UpLoadData(entry,callback);
}
