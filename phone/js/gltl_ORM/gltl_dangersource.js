 function gltl_dangersource()
 {
     DataAccess.call(this);
     this.TableName = "gltl_dangersource";
     this.Fields.push("F_DSID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fDsid");

     this.Fields.push("F_DSNAME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(200);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fDsname");

     this.Fields.push("F_WPID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fWpid");

     this.Fields.push("F_DSINDEX");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fDsindex");

     this.Fields.push("F_DSBECAREFUL");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(65535);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fDsbecareful");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_dangersource = function () { };
 Supergltl_dangersource.prototype = DataAccess.prototype;
 gltl_dangersource.prototype = new Supergltl_dangersource();

gltl_dangersource.prototype.SetF_DSID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_dangersource.prototype.GetF_DSID = function()
{
    return this.FieldsValue[0];
}

gltl_dangersource.prototype.SetF_DSNAME = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_dangersource.prototype.GetF_DSNAME = function()
{
    return this.FieldsValue[1];
}

gltl_dangersource.prototype.SetF_WPID = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_dangersource.prototype.GetF_WPID = function()
{
    return this.FieldsValue[2];
}

gltl_dangersource.prototype.SetF_DSINDEX = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_dangersource.prototype.GetF_DSINDEX = function()
{
    return this.FieldsValue[3];
}

gltl_dangersource.prototype.SetF_DSBECAREFUL = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_dangersource.prototype.GetF_DSBECAREFUL = function()
{
    return this.FieldsValue[4];
}

gltl_dangersource.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_dangersource.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[5];
}

gltl_dangersource.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_dangersource();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_dangersource.prototype.DownLoadEx = function () {
    var entry = new gltl_dangersource();
    this.DownLoad(entry);
}

gltl_dangersource.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_dangersource();
    this.UpLoadData(entry,callback);
}
