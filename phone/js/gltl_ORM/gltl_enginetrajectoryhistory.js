 function gltl_enginetrajectoryhistory()
 {
     DataAccess.call(this);
     this.TableName = "gltl_enginetrajectoryhistory";
     this.Fields.push("F_ETHID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fEthid");

     this.Fields.push("F_EID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fEid");

     this.Fields.push("F_ETHLAT");
     this.FieldsType.push("DbType.Double");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fEthlat");

     this.Fields.push("F_ETHLGT");
     this.FieldsType.push("DbType.Double");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fEthlng");

     this.Fields.push("F_ETHSPEED");
     this.FieldsType.push("DbType.Double");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fEthspeed");

     this.Fields.push("F_ETHTIME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fEtime");

     this.Fields.push("F_ETHSPARE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(500);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fEthspare");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_enginetrajectoryhistory = function () { };
 Supergltl_enginetrajectoryhistory.prototype = DataAccess.prototype;
 gltl_enginetrajectoryhistory.prototype = new Supergltl_enginetrajectoryhistory();

gltl_enginetrajectoryhistory.prototype.SetF_ETHID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_enginetrajectoryhistory.prototype.GetF_ETHID = function()
{
    return this.FieldsValue[0];
}

gltl_enginetrajectoryhistory.prototype.SetF_EID = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_enginetrajectoryhistory.prototype.GetF_EID = function()
{
    return this.FieldsValue[1];
}

gltl_enginetrajectoryhistory.prototype.SetF_ETHLAT = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_enginetrajectoryhistory.prototype.GetF_ETHLAT = function()
{
    return this.FieldsValue[2];
}

gltl_enginetrajectoryhistory.prototype.SetF_ETHLGT = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_enginetrajectoryhistory.prototype.GetF_ETHLGT = function()
{
    return this.FieldsValue[3];
}

gltl_enginetrajectoryhistory.prototype.SetF_ETHSPEED = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_enginetrajectoryhistory.prototype.GetF_ETHSPEED = function()
{
    return this.FieldsValue[4];
}

gltl_enginetrajectoryhistory.prototype.SetF_ETHTIME = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_enginetrajectoryhistory.prototype.GetF_ETHTIME = function()
{
    return this.FieldsValue[5];
}

gltl_enginetrajectoryhistory.prototype.SetF_ETHSPARE = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_enginetrajectoryhistory.prototype.GetF_ETHSPARE = function()
{
    return this.FieldsValue[6];
}

gltl_enginetrajectoryhistory.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_enginetrajectoryhistory.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[7];
}

gltl_enginetrajectoryhistory.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_enginetrajectoryhistory();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_enginetrajectoryhistory.prototype.DownLoadEx = function () {
    var entry = new gltl_enginetrajectoryhistory();
    this.DownLoad(entry);
}

gltl_enginetrajectoryhistory.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_enginetrajectoryhistory();
    this.UpLoadData(entry,callback);
}
