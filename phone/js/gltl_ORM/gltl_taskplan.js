 function gltl_taskplan()
 {
     DataAccess.call(this);
     this.TableName = "gltl_taskplan";
     this.Fields.push("F_TPID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fTpid");

     this.Fields.push("F_TPNAME");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(200);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fTpname");

     this.Fields.push("F_TPDATE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(20);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fTpdate");

     this.Fields.push("F_TPINDEX");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fTpindex");

     this.Fields.push("F_WPGID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("wpGroup");

     this.Fields.push("F_EID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("engineOne");

     this.Fields.push("F_TPSTATUE");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fTpstatue");

     this.Fields.push("F_TPGROUP");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(500);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fTpgroup");

     this.Fields.push("F_TPPERSONNE1");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("personOne");

     this.Fields.push("F_TPPERSONNE2");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("personTwo");

     this.Fields.push("F_TPPERSONNE3");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("personThree");

     this.Fields.push("F_TPPERSONNE4");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("personFour");

     this.Fields.push("F_TPSECTION");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(100);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fTpsection");

     this.Fields.push("F_TPCONTENT");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(65535);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fTpcontent");

     this.Fields.push("F_EEXID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("engineTwo");

     this.Fields.push("F_TPWORKNUMBER");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fTpworknumber");

     this.Fields.push("F_TPNUMBER");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(50);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("fTpnumber");

     this.Fields.push("F_WPGID1");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(false);
     this.JavaPropertys.push("wpGroupExtend");

     this.Fields.push("F_DPID");
     this.FieldsType.push("DbType.String");
     this.FieldsValue.push(null);
     this.FieldsLength.push(37);
     this.FieldsNotNULL.push(true);
     this.JavaPropertys.push("fDpid");

     this.Fields.push("F_BISUPLOAD");
     this.FieldsType.push("DbType.Int32");
     this.FieldsValue.push(null);
     this.FieldsLength.push(0);
     this.FieldsNotNULL.push(true);
     this.KeyIndexs.push(0);
 }
 var Supergltl_taskplan = function () { };
 Supergltl_taskplan.prototype = DataAccess.prototype;
 gltl_taskplan.prototype = new Supergltl_taskplan();

gltl_taskplan.prototype.SetF_TPID = function(value)
{
    this.FieldsValue[0] = value;
}

gltl_taskplan.prototype.GetF_TPID = function()
{
    return this.FieldsValue[0];
}

gltl_taskplan.prototype.SetF_TPNAME = function(value)
{
    this.FieldsValue[1] = value;
}

gltl_taskplan.prototype.GetF_TPNAME = function()
{
    return this.FieldsValue[1];
}

gltl_taskplan.prototype.SetF_TPDATE = function(value)
{
    this.FieldsValue[2] = value;
}

gltl_taskplan.prototype.GetF_TPDATE = function()
{
    return this.FieldsValue[2];
}

gltl_taskplan.prototype.SetF_TPINDEX = function(value)
{
    this.FieldsValue[3] = value;
}

gltl_taskplan.prototype.GetF_TPINDEX = function()
{
    return this.FieldsValue[3];
}

gltl_taskplan.prototype.SetF_WPGID = function(value)
{
    this.FieldsValue[4] = value;
}

gltl_taskplan.prototype.GetF_WPGID = function()
{
    return this.FieldsValue[4];
}

gltl_taskplan.prototype.SetF_EID = function(value)
{
    this.FieldsValue[5] = value;
}

gltl_taskplan.prototype.GetF_EID = function()
{
    return this.FieldsValue[5];
}

gltl_taskplan.prototype.SetF_TPSTATUE = function(value)
{
    this.FieldsValue[6] = value;
}

gltl_taskplan.prototype.GetF_TPSTATUE = function()
{
    return this.FieldsValue[6];
}

gltl_taskplan.prototype.SetF_TPGROUP = function(value)
{
    this.FieldsValue[7] = value;
}

gltl_taskplan.prototype.GetF_TPGROUP = function()
{
    return this.FieldsValue[7];
}

gltl_taskplan.prototype.SetF_TPPERSONNE1 = function(value)
{
    this.FieldsValue[8] = value;
}

gltl_taskplan.prototype.GetF_TPPERSONNE1 = function()
{
    return this.FieldsValue[8];
}

gltl_taskplan.prototype.SetF_TPPERSONNE2 = function(value)
{
    this.FieldsValue[9] = value;
}

gltl_taskplan.prototype.GetF_TPPERSONNE2 = function()
{
    return this.FieldsValue[9];
}

gltl_taskplan.prototype.SetF_TPPERSONNE3 = function(value)
{
    this.FieldsValue[10] = value;
}

gltl_taskplan.prototype.GetF_TPPERSONNE3 = function()
{
    return this.FieldsValue[10];
}

gltl_taskplan.prototype.SetF_TPPERSONNE4 = function(value)
{
    this.FieldsValue[11] = value;
}

gltl_taskplan.prototype.GetF_TPPERSONNE4 = function()
{
    return this.FieldsValue[11];
}

gltl_taskplan.prototype.SetF_TPSECTION = function(value)
{
    this.FieldsValue[12] = value;
}

gltl_taskplan.prototype.GetF_TPSECTION = function()
{
    return this.FieldsValue[12];
}

gltl_taskplan.prototype.SetF_TPCONTENT = function(value)
{
    this.FieldsValue[13] = value;
}

gltl_taskplan.prototype.GetF_TPCONTENT = function()
{
    return this.FieldsValue[13];
}

gltl_taskplan.prototype.SetF_EEXID = function(value)
{
    this.FieldsValue[14] = value;
}

gltl_taskplan.prototype.GetF_EEXID = function()
{
    return this.FieldsValue[14];
}

gltl_taskplan.prototype.SetF_TPWORKNUMBER = function(value)
{
    this.FieldsValue[15] = value;
}

gltl_taskplan.prototype.GetF_TPWORKNUMBER = function()
{
    return this.FieldsValue[15];
}

gltl_taskplan.prototype.SetF_TPNUMBER = function(value)
{
    this.FieldsValue[16] = value;
}

gltl_taskplan.prototype.GetF_TPNUMBER = function()
{
    return this.FieldsValue[16];
}

gltl_taskplan.prototype.SetF_WPGID1 = function(value)
{
    this.FieldsValue[17] = value;
}

gltl_taskplan.prototype.GetF_WPGID1 = function()
{
    return this.FieldsValue[17];
}

gltl_taskplan.prototype.SetF_DPID = function(value)
{
    this.FieldsValue[18] = value;
}

gltl_taskplan.prototype.GetF_DPID = function()
{
    return this.FieldsValue[18];
}

gltl_taskplan.prototype.SetF_BISUPLOAD = function(value)
{
    this.FieldsValue[19] = value;
}

gltl_taskplan.prototype.GetF_BISUPLOAD = function()
{
    return this.FieldsValue[19];
}

gltl_taskplan.prototype.GetEntryArray = function (json,bIsLocal) {
    if (arguments.length == 1)
    {
        bIsLocal = true;
    }
    var entryArray = new Array();
    if (json != null) {
        for (var i = 0; i < json.length; i++) {
            var item = new gltl_taskplan();
        	item.FillEntry(json[i],bIsLocal);
        	entryArray.push(item);
        }
    }
    return entryArray;
}

gltl_taskplan.prototype.DownLoadEx = function () {
    var entry = new gltl_taskplan();
    this.DownLoad(entry);
}

gltl_taskplan.prototype.UpLoadDataEx = function (callback) {
    if(arguments.length == 0)
    {
        callback = null;
    }
    var entry = new gltl_taskplan();
    this.UpLoadData(entry,callback);
}
