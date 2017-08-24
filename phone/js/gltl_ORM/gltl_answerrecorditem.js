 function gltl_answerrecorditem()
 {
     DataAccess.call(this);
     this.TableName = "gltl_answerrecorditem";
     this.Fields.push("F_ARIID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fariid");

     this.Fields.push("F_ARID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("farid");

     this.Fields.push("F_ARIQID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fariqid");

     this.Fields.push("F_ARIQANWER");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(65535);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fariqanwer");

     this.Fields.push("F_ARITYPE");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("faritype");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_answerrecorditem = function () { };
 Supergltl_answerrecorditem.prototype = DataAccess.prototype;
 gltl_answerrecorditem.prototype = new Supergltl_answerrecorditem();

gltl_answerrecorditem.prototype.SetF_ARIID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_answerrecorditem.prototype.GetF_ARIID = function()
{
    return this.FieldsValue[0];
}

gltl_answerrecorditem.prototype.SetF_ARID = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_answerrecorditem.prototype.GetF_ARID = function()
{
    return this.FieldsValue[1];
}

gltl_answerrecorditem.prototype.SetF_ARIQID = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_answerrecorditem.prototype.GetF_ARIQID = function()
{
    return this.FieldsValue[2];
}

gltl_answerrecorditem.prototype.SetF_ARIQANWER = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_answerrecorditem.prototype.GetF_ARIQANWER = function()
{
    return this.FieldsValue[3];
}

gltl_answerrecorditem.prototype.SetF_ARITYPE = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_answerrecorditem.prototype.GetF_ARITYPE = function()
{
    return this.FieldsValue[4];
}

gltl_answerrecorditem.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_answerrecorditem.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[5];
}

gltl_answerrecorditem.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_answerrecorditem();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_answerrecorditem.prototype.DownLoadEx = function () {
    var entry = new gltl_answerrecorditem();
    this.DownLoad(entry);
}

gltl_answerrecorditem.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_answerrecorditem();
    this.UpLoadData(entry,callback);
}
