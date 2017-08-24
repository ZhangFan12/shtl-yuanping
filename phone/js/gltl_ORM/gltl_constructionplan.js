 function gltl_constructionplan()
 {
     DataAccess.call(this);
     this.TableName = "gltl_constructionplan";
     this.Fields.push("F_CPID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);

     this.Fields.push("F_CPSECTION");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(200);
     this.FieldsNotNULL.push(true);

     this.Fields.push("F_CPDATE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(true);

     this.Fields.push("F_CPTIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(200);
     this.FieldsNotNULL.push(false);

     this.Fields.push("F_CPREMARK");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(65535);
     this.FieldsNotNULL.push(false);

     this.Fields.push("F_CPBECAREFUL");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(300);
     this.FieldsNotNULL.push(false);

     this.Fields.push("F_CPPERSONLIABLE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(false);

     this.Fields.push("F_CPCOMPANY");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(300);
     this.FieldsNotNULL.push(false);

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_constructionplan = function () { };
 Supergltl_constructionplan.prototype = DataAccess.prototype;
 gltl_constructionplan.prototype = new Supergltl_constructionplan();

gltl_constructionplan.prototype.SetF_CPID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_constructionplan.prototype.GetF_CPID = function()
{
    return this.FieldsValue[0];
}

gltl_constructionplan.prototype.SetF_CPSECTION = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_constructionplan.prototype.GetF_CPSECTION = function()
{
    return this.FieldsValue[1];
}

gltl_constructionplan.prototype.SetF_CPDATE = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_constructionplan.prototype.GetF_CPDATE = function()
{
    return this.FieldsValue[2];
}

gltl_constructionplan.prototype.SetF_CPTIME = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_constructionplan.prototype.GetF_CPTIME = function()
{
    return this.FieldsValue[3];
}

gltl_constructionplan.prototype.SetF_CPREMARK = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_constructionplan.prototype.GetF_CPREMARK = function()
{
    return this.FieldsValue[4];
}

gltl_constructionplan.prototype.SetF_CPBECAREFUL = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_constructionplan.prototype.GetF_CPBECAREFUL = function()
{
    return this.FieldsValue[5];
}

gltl_constructionplan.prototype.SetF_CPPERSONLIABLE = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_constructionplan.prototype.GetF_CPPERSONLIABLE = function()
{
    return this.FieldsValue[6];
}

gltl_constructionplan.prototype.SetF_CPCOMPANY = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_constructionplan.prototype.GetF_CPCOMPANY = function()
{
    return this.FieldsValue[7];
}

gltl_constructionplan.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[8] = value;
}

gltl_constructionplan.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[8];
}

gltl_constructionplan.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_constructionplan();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_constructionplan.prototype.DownLoadEx = function () {
    var entry = new gltl_constructionplan();
    this.DownLoad(entry);
}

gltl_constructionplan.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_constructionplan();
    this.UpLoadData(entry,callback);
}
