 function gltl_engineaccident()
 {
     DataAccess.call(this);
     this.TableName = "gltl_engineaccident";
     this.Fields.push("F_EAID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);

     this.Fields.push("F_EAREMARK");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(65535);
     this.FieldsNotNULL.push(true);

     this.Fields.push("F_UID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);

     this.Fields.push("F_EATIME");
     this.FieldsType.push("DbType.DateTime");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);

     this.Fields.push("F_EID");
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
 var Supergltl_engineaccident = function () { };
 Supergltl_engineaccident.prototype = DataAccess.prototype;
 gltl_engineaccident.prototype = new Supergltl_engineaccident();

gltl_engineaccident.prototype.SetF_EAID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_engineaccident.prototype.GetF_EAID = function()
{
    return this.FieldsValue[0];
}

gltl_engineaccident.prototype.SetF_EAREMARK = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_engineaccident.prototype.GetF_EAREMARK = function()
{
    return this.FieldsValue[1];
}

gltl_engineaccident.prototype.SetF_UID = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_engineaccident.prototype.GetF_UID = function()
{
    return this.FieldsValue[2];
}

gltl_engineaccident.prototype.SetF_EATIME = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_engineaccident.prototype.GetF_EATIME = function()
{
    return this.FieldsValue[3];
}

gltl_engineaccident.prototype.SetF_EID = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_engineaccident.prototype.GetF_EID = function()
{
    return this.FieldsValue[4];
}

gltl_engineaccident.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_engineaccident.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[5];
}

gltl_engineaccident.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_engineaccident();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_engineaccident.prototype.DownLoadEx = function () {
    var entry = new gltl_engineaccident();
    this.DownLoad(entry);
}

gltl_engineaccident.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_engineaccident();
    this.UpLoadData(entry,callback);
}
