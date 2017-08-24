 function gltl_answerstat()
 {
     DataAccess.call(this);
     this.TableName = "gltl_answerstat";
     this.Fields.push("F_ASID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fasid");

     this.Fields.push("F_ARID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("farid");

     this.Fields.push("F_ASSELECTTCOUNT");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("tcount");

     this.Fields.push("F_ASSELECTFCOUNT");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fcount");

     this.Fields.push("F_ASTRUEORFALSETCOUNT");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("srcount");

     this.Fields.push("F_ASTRUEORFALSEFCOUNT");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("trcount");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_answerstat = function () { };
 Supergltl_answerstat.prototype = DataAccess.prototype;
 gltl_answerstat.prototype = new Supergltl_answerstat();

gltl_answerstat.prototype.SetF_ASID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_answerstat.prototype.GetF_ASID = function()
{
    return this.FieldsValue[0];
}

gltl_answerstat.prototype.SetF_ARID = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_answerstat.prototype.GetF_ARID = function()
{
    return this.FieldsValue[1];
}

gltl_answerstat.prototype.SetF_ASSELECTTCOUNT = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_answerstat.prototype.GetF_ASSELECTTCOUNT = function()
{
    return this.FieldsValue[2];
}

gltl_answerstat.prototype.SetF_ASSELECTFCOUNT = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_answerstat.prototype.GetF_ASSELECTFCOUNT = function()
{
    return this.FieldsValue[3];
}

gltl_answerstat.prototype.SetF_ASTRUEORFALSETCOUNT = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_answerstat.prototype.GetF_ASTRUEORFALSETCOUNT = function()
{
    return this.FieldsValue[4];
}

gltl_answerstat.prototype.SetF_ASTRUEORFALSEFCOUNT = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_answerstat.prototype.GetF_ASTRUEORFALSEFCOUNT = function()
{
    return this.FieldsValue[5];
}

gltl_answerstat.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_answerstat.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[6];
}

gltl_answerstat.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_answerstat();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_answerstat.prototype.DownLoadEx = function () {
    var entry = new gltl_answerstat();
    this.DownLoad(entry);
}

gltl_answerstat.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_answerstat();
    this.UpLoadData(entry,callback);
}
