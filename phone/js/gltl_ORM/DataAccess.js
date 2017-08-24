
function GUID() 
{ 
    this.date = new Date();   /* 判断是否初始化过，如果初始化过以下代码，则以下代码将不再执行，实际中只执行一次 */
    if (typeof this.newGUID != 'function') 
    {   /* 生成GUID码 */
        GUID.prototype.newGUID = function() 
        { 
            this.date = new Date(); 
            var guidStr = ''; 
            sexadecimalDate = this.hexadecimal(this.getGUIDDate(), 16); 
            sexadecimalTime = this.hexadecimal(this.getGUIDTime(), 16); 
            for (var i = 0; i < 9; i++) 
            {
                guidStr += Math.floor(Math.random()*16).toString(16);
            } 
            guidStr += sexadecimalDate; 
            guidStr += sexadecimalTime; 
            while(guidStr.length < 32) 
            {
                guidStr += Math.floor(Math.random()*16).toString(16);
            } 
            return this.formatGUID(guidStr); 
        }   

        /* * 功能：获取当前日期的GUID格式，即8位数的日期：19700101 * 返回值：返回GUID日期格式的字条串 */
        GUID.prototype.getGUIDDate = function() 
        { 
            return this.date.getFullYear() + this.addZero(this.date.getMonth() + 1) + this.addZero(this.date.getDay()); 
        }  

        /* * 功能：获取当前时间的GUID格式，即8位数的时间，包括毫秒，毫秒为2位数：12300933 * 返回值：返回GUID日期格式的字条串 */
        GUID.prototype.getGUIDTime = function() 
        { 
            return this.addZero(this.date.getHours()) + this.addZero(this.date.getMinutes()) + this.addZero(this.date.getSeconds()) + this.addZero( parseInt(this.date.getMilliseconds() / 10 )); 
        }   
        
        /* * 功能: 为一位数的正整数前面添加0，如果是可以转成非NaN数字的字符串也可以实现 * 参数: 参数表示准备再前面添加0的数字或可以转换成数字的字符串 * 返回值: 如果符合条件，返回添加0后的字条串类型，否则返回自身的字符串 */
        GUID.prototype.addZero = function(num) 
        { 
            if (Number(num).toString() != 'NaN' && num >= 0 && num < 10) 
            {
                return '0' + Math.floor(num);
            } 
            else 
            { 
                return num.toString(); 
            } 
         }   
         
         /*  * 功能：将y进制的数值，转换为x进制的数值 * 参数：第1个参数表示欲转换的数值；第2个参数表示欲转换的进制；第3个参数可选，表示当前的进制数，如不写则为10 * 返回值：返回转换后的字符串 */
         GUID.prototype.hexadecimal = function(num, x, y) 
         {
            if (y != undefined) 
            { 
                return parseInt(num.toString(), y).toString(x); 
            } 
            else 
            {
                return parseInt(num.toString()).toString(x); 
            }
        }

        /* * 功能：格式化32位的字符串为GUID模式的字符串 * 参数：第1个参数表示32位的字符串 * 返回值：标准GUID格式的字符串 */
        GUID.prototype.formatGUID = function (guidStr) 
        {
            var str1 = guidStr.slice(0, 8) + '-', str2 = guidStr.slice(8, 12) + '-', str3 = guidStr.slice(12, 16) + '-', str4 = guidStr.slice(16, 20) + '-', str5 = guidStr.slice(20);
            return str1 + str2 + str3 + str4 + str5;
        }
        GUID.prototype.newNumber = function () {
            this.date = new Date();
            var guidStr = '';
            var sexadecimalDate = this.date.getFullYear() + this.addZero(this.date.getMonth() + 1) + this.addZero(this.date.getDate());
            var sexadecimalTime = this.addZero(this.date.getHours()) + this.addZero(this.date.getMinutes()) + this.addZero(this.date.getSeconds());
            var after = this.addZero(this.date.getMilliseconds() % 100);
            return sexadecimalDate + sexadecimalTime + after;
        }
    } 
}

var g_DataAccessTables = ["gltl_answerrecord", "gltl_answerrecorditem", "gltl_answerstat", "gltl_applyflow", "gltl_constructionplan", "gltl_dailyplan",
                "gltl_dangersource", "gltl_datainitrule", "gltl_dictionary", "gltl_engine", "gltl_engineaccident", "gltl_engineextend",
                "gltl_enginemaintian", "gltl_enginemaintianitem", "gltl_engineparts", "gltl_enginerepair", "gltl_enginerepairextend",
                "gltl_enginerepairitem", "gltl_enginetrajectoryhistory", "gltl_engineuser", "gltl_flownode", "gltl_functiontemplate",
                "gltl_hiddendanger", "gltl_inspectproject", "gltl_inspectprojectrecord", "gltl_inspectprojectrecorditem", "gltl_maintianproject",
                "gltl_maintianprojectitem", "gltl_messagepush", "gltl_option", "gltl_personadvanced", "gltl_question", "gltl_questiontemplate",
                "gltl_questiontemplateitem", "gltl_runlineinstance", "gltl_runlineinstanceextend", "gltl_runlineinstanceitem", "gltl_runlineparking",
                "gltl_runlinescheme", "gltl_runlineschemeitem", "gltl_spareparts", "gltl_station", "gltl_stationwork", "gltl_taskplan",
                "gltl_taskplanworkinggroup", "gltl_tenant", "gltl_tofquestion", "gltl_uploadenclosuredata", "gltl_user", "gltl_usergroup",
                "gltl_videomonitor", "gltl_workingmonitor", "gltl_workingprocedure", "gltl_workingproceduregroup", "gltl_workingproceduregroupitem",
                "gltl_workingprocedurelog", "gltl_workingproceduredangersource"];
var g_FlgFieldName = "F_BISUPLOAD";

function g_DataAccess_ExecuteSQLByResultCallBack(error, data)
{
    if (error) 
    {
        alert('ExecuteSQLByResult_data出错!');
    } else {
        //alert('ExecuteSQLByResult_data:'+JSON.stringify(data));
        return data;
    }
    db.close();
}
function DataAccessSleep(millis){
     var njf1 = njen(this,arguments,"millis");
     nj:while(1) {
         try
         {
             switch(njf1.cp) 
             { 
                 case 0:njf1._notifier=NjsRuntime.createNotifier();
                     setTimeout(njf1._notifier,njf1._millis);
                     njf1.cp = 1;
                     njf1._notifier.wait(njf1);
                     return;
                 case 1:
                     break nj;
             }
         } 
         catch(ex) 
         { 
             if(!njf1.except(ex,1)) 
             return; 
         }
     } 
     njf1.pf();
 }
 

function DataAccess() {
    this.DataBaseHelper = null;
    this.Fields = new Array();
    this.JavaPropertys = new Array();
    this.FieldsType = new Array();
    this.FieldsValue = new Array();
    this.FieldsLength = new Array();
    this.FieldsNotNULL = new Array();
    this.TableName = "";
    this.KeyIndexs = new Array();
    // for (var i = 0; i < g_DataAccessTables.length; i++) {
        // this.IncludeORM(g_DataAccessTables[i]);
    // }
    //alert(document.getElementsByTagName("head")[0].outerHTML);
    //alert(document.documentElement.outerHTML);
}

//***********************************内部函数***********************************
//******************************************************************************
DataAccess.prototype.IncludeORM = function (className) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "gltl_ORM/" + className + ".js";
    var head = document.getElementsByTagName("head")[0];
    var length = head.childNodes.length;
    head.appendChild(script);
    length = head.childNodes.length;
    var t = length;
}

DataAccess.prototype.GetParameterSQL = function (par, type)
{
    //if(par == "新证无编号"){alert(type);}
    switch (type)
    {
        case "DbType.Object":
        case "DbType.Binary":
            return "";
        case "DbType.Int16":
        case "DbType.Int32":
            if (par == null || par == "undefine")
            {
                return "";
            }
            return par +"";
        case "DbType.UInt64":
            if (par == null || par == "undefine")
            {
                return "";
            }
            return par + "";
        case "DbType.Double":
            if (par == null || par == "undefine")
            {
                return "";
            }
            return par + "";
        case "DbType.Single":
            if (par == null || par == "undefine")
            {
                return "";
            }
            return par + "";
        case "DbType.Boolean":
            if (par == null||par == "undefine")
            {
                return "";
            }
            return par + "";
            break;
        case "DbType.DateTime":
            if (par == null||par == "undefine")
            {
                return "";
            }
            else
            {
                return "'" + par + "'";
            }
    }
    //if(par == "新证无编号"){alert("FFFF");}
    if (par == null || par == "undefine") { return ""; }
    return "'" + par + "'";
}

DataAccess.prototype.GetDataTypeStringBySQLite = function (type, length, bIsNULL) {

    //DROP TABLE IF EXISTS "main"."gltl_user";
    //CREATE TABLE "gltl_user" (
    //"ID"  TEXT(37) NOT NULL,
    //"NAME"  TEXT(50),
    //"IDS"  TEXT(37) NOT NULL,
    //"IDS1"  TEXT(37) NOT NULL,
    //"NUM"  INTEGER,
    //"FLOAT"  REAL,
    //PRIMARY KEY ("ID" ASC, "IDS" ASC, "IDS1" ASC)
    //);
    var sql = "";
    if (type == "DbType.String") {
        sql += " TEXT";
    }
    if (type == "DbType.Int32") {
        sql += " INTEGER ";
    }
    if (type == "DbType.Double") {
        sql += " REAL ";
    }
    if (length > 0) {
        sql += "(" + length + ") ";
    }
    if (bIsNULL) {
        sql += " NOT NULL ";
    }
    return sql;
}

//创建表
DataAccess.prototype.GetCreateTableSQL = function () {
    try {
        var sql = "";
        //        if (this.dataBase.DataBase == DatabaseType.MSSQL)
        //        {
        //            sql = "CREATE TABLE " + TabName == "" ? this.TableName : TabName + " ( ";
        //            for (int i = 0; i < FieldCount; i++)
        //            {
        //                sql += FieldNames[i] + GetDataTypeString(FieldTypes[i]) + " COLLATE Chinese_PRC_CI_AS NULL,";
        //            }
        //            sql += "CONSTRAINT [PK_" + this.TableName + "_1] PRIMARY KEY CLUSTERED ";
        //            sql += " ( ";
        //            sql += " [" + this.FieldNames[0] + "] ASC";
        //            sql += " ) WITH (IGNORE_DUP_KEY = OFF) ON [PRIMARY] ) ON [PRIMARY]";
        //        }
        //        else if (this.dataBase.DataBase == DatabaseType.Oracle)
        //        {
        //            //orcale版本
        //            sql = "CREATE TABLE " + this.TableName + " ( ";
        //            for (int i = 0; i < FieldCount; i++)
        //            {
        //                if (i == FieldCount - 1)
        //                {
        //                    sql += FieldNames[i] + GetDataTypeString(FieldTypes[i]) + ")";
        //                }
        //                else
        //                {
        //                    sql += FieldNames[i] + GetDataTypeString(FieldTypes[i]) + ",";
        //                }
        //            }

        //            ExecuteSQL(sql);
        //            sql = "";
        //            sql += " alter table " + this.TableName;
        //            sql += " add constraint " + this.TableName + "_KEY primary key (ID) ";
        //            sql += " using index ";
        //            sql += " tablespace BJGT_TDZFJC ";
        //            sql += " pctfree 10 ";
        //            sql += " initrans 2 ";
        //            sql += " maxtrans 255 ";
        //            sql += " storage ";
        //            sql += "(";
        //            sql += " initial 64K ";
        //            sql += " minextents 1 ";
        //            sql += " maxextents unlimited )";
        //        }
        //        else if (this.dataBase.DataBase == DatabaseType.KingBase)
        //        {
        //            sql = "CREATE TABLE " + this.TableName + " ( ";
        //            for (int i = 0; i < FieldCount; i++)
        //            {
        //                if (i == FieldCount - 1)
        //                {
        //                    sql += FieldNames[i] + GetDataTypeStringByKingBase(FieldTypes[i]) + ")";
        //                }
        //                else
        //                {
        //                    sql += FieldNames[i] + GetDataTypeStringByKingBase(FieldTypes[i]) + ",";
        //                }
        //            }
        //        }
        //        else if (this.dataBase.DataBase == DatabaseType.SQLite)
        //        {

        //`
        sql = "CREATE TABLE \"" + this.TableName + "\"( ";
        for (var i = 0; i < this.Fields.length; i++) {
            sql += "\"" + this.Fields[i] + "\" " + this.GetDataTypeStringBySQLite(this.FieldsType[i], this.FieldsLength[i], this.FieldsNotNULL[i]) + ",";
        }
        sql += "PRIMARY KEY (";
        for (var i = 0; i < this.KeyIndexs.length; i++) {
            if (i == this.KeyIndexs.length - 1) {
                sql += "\"" + this.Fields[this.KeyIndexs[i]] + "\" ASC));";
            }
            else {
                sql += "\"" + this.Fields[this.KeyIndexs[i]] + "\" ASC,";
            }
        }
        return sql;
    }
    catch (e) {
        alert(e.message);
    }
}


//***********************************公用函数***********************************
//******************************************************************************
//获取新增的SQL语句
DataAccess.prototype.GetInsertSQL = function (bIsServer) {
    try {
        if (arguments.length == 0) {
            bIsServer = false;
        }
        var sql = "insert into " + this.TableName;
        var fieldCount = this.FieldsValue.length;
        var strFieldName = "";
        var strFieldValue = "";
        var strTemp = "";
        for (var i = 0; i < this.FieldsValue.length; i++) {
            if (bIsServer == true && this.Fields[i] == g_FlgFieldName) { continue; }
            if (this.FieldsValue[i] == null) { continue; }
            strTemp = this.GetParameterSQL(this.FieldsValue[i], this.FieldsType[i]);
            if (strTemp == "") { continue; }
            if (i == fieldCount - 1) {
                strFieldName += this.Fields[i];
                strFieldValue += strTemp;
            }
            else {
                strFieldName += this.Fields[i] + ",";
                strFieldValue += strTemp + ",";

            }
        }
        if (strFieldName.charAt(strFieldName.length - 1) == ',') {
            strFieldName = strFieldName.substring(0, strFieldName.length - 1);
        }
        if (strFieldValue.charAt(strFieldValue.length - 1) == ',') {
            strFieldValue = strFieldValue.substring(0, strFieldValue.length - 1);
        }
        sql += " ( " + strFieldName + ") VALUES ( " + strFieldValue + " )";
        return sql;
    }
    catch (e) {
        alert(e.message);
        //alert(e.description)
        //alert(e.number)
        //alert(e.name) 
    }
    return "";
}

//获取删除的Where条件
DataAccess.prototype.GetDeleteWhere = function () 
{
    var strWhere = "";
    var strTemp = "";
    var keyCount = this.KeyIndexs.length;
    for (var i = 0; i < keyCount; i++)
    {
        strTemp = this.GetParameterSQL(this.FieldsValue[this.KeyIndexs[i]], this.FieldsType[this.KeyIndexs[i]]);
        if (strTemp == "") { continue; }
        if (i == keyCount - 1)
        {
            strWhere = strWhere + this.Fields[this.KeyIndexs[i]] + " = " + strTemp;
        }
        else
        {
            strWhere = strWhere + this.Fields[this.KeyIndexs[i]] + " = " + strTemp + " and ";
        }
    }
    return strWhere;
}

//获取删除的SQL语句
DataAccess.prototype.GetDeleteSQL = function () {
    try
    {
        var sql = "Delete from " + this.TableName;
        var strWhere =  this.GetDeleteWhere();
        if (strWhere != "")
        {
            sql = sql + " where " + strWhere;
        }
        return sql;
    }
    catch (e)
    {
       alert(e.message);
    }
    return "";
}

//获取修改的SQL语句
DataAccess.prototype.GetUpdateSQL = function (bIsServer) {
    try {
        if (arguments.length == 0) {
            bIsServer = false;
        }
        var sql = "update " + this.TableName + " set ";
        var fieldCount = this.Fields.length;
        var strFieldName = "";
        var strTemp = "";
        for (var i = 1; i < fieldCount; i++) {
            if (bIsServer == true && this.Fields[i] == g_FlgFieldName) { continue; }
            strTemp = this.GetParameterSQL(this.FieldsValue[i], this.FieldsType[i]);
            if (strTemp == "") { continue; }
            if (i == fieldCount - 1) {
                strFieldName += this.Fields[i] + " = " + strTemp;
            }
            else {
                strFieldName += this.Fields[i] + " = " + strTemp + ",";
            }
        }
        var strWhere = this.GetDeleteWhere();

        if (strFieldName.charAt(strFieldName.length - 1) == ',') {
            strFieldName = strFieldName.substring(0, strFieldName.length - 1);
        }

        sql = sql + strFieldName + " where " + strWhere;
        return sql;
    }
    catch (e) {
        alert(e.message);
    }
    return "";
}

//获取多个组合条件的Select语句
DataAccess.prototype.GetSelectSQLEx = function (bIsServer, arrResultFieldIndex, customWhereArray, orderIndexArray, bIsAscArray) {
    try {
        if (arguments.length == 0) {
            bIsServer = false;
        }
        var sql = this.GetSelectSQLBefore(bIsServer, arrResultFieldIndex);
        if (arguments.length >= 3) {
            for (var i = 0; i < customWhereArray.length; i++) {
                sql += " and " + customWhereArray[i];
            }
        }

        if (arguments.length == 5) {
            sql += " order by ";
            for (var i = 0; i < orderIndexArray.length; i++) {
                sql += this.Fields[orderIndexArray[i]];
                sql += (bIsAscArray[i] == true ? " ASC" : " DESC");
                if (i < orderIndexArray.length - 1) {
                    sql += ",";
                }
            }
        }
        return sql;
    }
    catch (e) {
        alert(e.Message);
    }
    return "";
}


DataAccess.prototype.GetSelectSQLBefore = function (bIsServer,arrResultFieldIndex)
{ 
    try
    {        
        var sql = "select ";
        var strWhere = "";
        var strField = "";
        var strTemp = "";
        if(arguments.length == 0)
        {
            bIsServer = false;
        }

        for (var i = 0; i < this.FieldsValue.length; i++)
        {
            if (bIsServer == true && this.Fields[i] == g_FlgFieldName) { continue; }
            strTemp = this.GetParameterSQL(this.FieldsValue[i], this.FieldsType[i]);
            if (strTemp == "") { continue; }
            strWhere += this.Fields[i];
            strWhere += " = ";
            strWhere += strTemp;
            strWhere += " and ";
        }
        if (strWhere != "")
        {
            strWhere = strWhere.substring(0,strWhere.length - 5);
        }
           
        if (arrResultFieldIndex == null)
        {
            var bIsDropBinaryField = false;
            for (var i = 0; i < this.Fields.length; i++)
            {
                if (this.FieldsType[i] == "DbType.Binary")
                {
                    bIsDropBinaryField = true;
                    break;
                }
            }
            if (bIsDropBinaryField)
            {
                for (var i = 0; i < this.Fields.length; i++)
                {
                    if (this.FieldsType[i] == "DbType.Binary") { continue; }
                    if (i == FieldCount - 1)
                    {

                        strField += this.Fields[i];
                    }
                    else
                    {
                        strField += this.Fields[i] + ",";
                    }
                }
                if (strField != "" && strField[strField.length - 1] == ',')
                {
                    strField.substring(strField.length - 1, 1);
                }
            }
            else
            {
                strField += " * ";
            }
        }
        else
        {
            for (var i = 0; i < arrResultFieldIndex.length; i++)
            {
                if (i == arrResultFieldIndex.length - 1)
                {
                    strField += this.Fields[arrResultFieldIndex[i]];
                }
                else
                {
                    strField += this.Fields[arrResultFieldIndex[i]] + ",";
                }
            }
        }
        sql += strField;
        sql += " from ";
        sql += this.TableName;
        if (strWhere != "")
        {
            sql += " where ";
            sql += strWhere;
        }
        return sql;
    }
    catch(e)
    {
       alert(e.Message);
    }
    return "";
}


//获取单个组合条件的Select语句
DataAccess.prototype.GetSelectSQL = function (bIsServer, arrResultFieldIndex, customWhere, orderIndex, bIsAsc) {
    try {
        if (arguments.length == 0) {
            bIsServer = false;
        }
        var sql = this.GetSelectSQLBefore(bIsServer, arrResultFieldIndex);
        if (arguments.length >= 3) {
            if (customWhere != "") {
                sql += " and " + customWhere;
            }
        }

        if (arguments.length == 5) {
            sql += " order by " + this.Fields[orderIndex];
            sql += (bIsAsc == true ? " ASC" : " DESC");
        }
        return sql;
    }
    catch (e) {
        alert(e.Message);
    }
    return "";
}

//开启事务执行SQL语句
DataAccess.prototype.ExecuteSQLByTrans = function (sql,callback) {
    if (arguments.length == 1) {
        callback = null;
    }
    var db = uexDataBaseMgr.open("musicEx.db", 1017);
    if (db != null) {
       // sql = ["Delete from gltl_user where F_UID = '40288ad85b8592cf015b85b78ea900ea'","insert into gltl_user ( F_UID,F_UNAME,F_UIDCAR,F_UTYPE,F_UDUTIES,F_UDRIVINGLICENSE,F_USEX,F_ULOADNAME,F_UDRIVINGENDTIME,F_UWORKSTATE,F_UISDELETE,F_UWORKNUMBER,F_UEDUCATION,F_UDRIVINGNUMBER) VALUES ( '40288ad85b8592cf015b85b78ea900ea','王宏伟','130129198204250014','22E6BDFA-5518-4CE6-8A66-82457D292EF1','E8C13028-7513-4D23-AEC3-B19DBC6D1194','401','男','王宏伟','2022-06-27',2,0,'443.0','1015','新证无编号' )"];
       // alert('ExecuteSQL:'+sql+'/'+JSON.stringify(db));
        uexDataBaseMgr.transactionEx(db, JSON.stringify(sql), function (error) {
            uexDataBaseMgr.close(db);
            if(callback != null)
            {
                callback(error);
            }
            // if(error != "0")
            // {
                // //alert('ExecuteSQLByTrans出错!sql='+sql);
                // return false;
            // }
            // else 
            // {
                // logicFun(data);
                // return true;
            // }
        
     }); 
     
    } else {
        alert('打开数据库出错！');
        return false;
    }
}



//执行SQL语句(insert,update,delete)
DataAccess.prototype.ExecuteSQL = function (sql) {
    var db = uexDataBaseMgr.open("musicEx.db", 1017);
    if (db != null) {
        uexDataBaseMgr.sql(db, sql, function (error) {
            if (!error) {
                //alert('执行成功')
                return true;
            }
            else {
                alert('执行失败！SQL' + sql);
                return false;
            }
            db.close();
        });
    }
    else {
        alert("打开数据库出错!");
        return false;
    }
}

//    function New(f) {
//        //返回一个func
//        return function () {
//            var o = { "__proto__": f.prototype };
//            f.apply(o, arguments); //继承父类的属性

//            return o; //返回一个Object
//        }
//    }

 DataAccess.prototype.IsJson = function (obj) {
    var isjson = typeof (obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
    return isjson;
}
//使用JSON对像填充实体(insert,update,delete)

DataAccess.prototype.FillEntry = function (dataItem,bIsLocal) {
    if (arguments.length == 1) {
            bIsLocal = true;
    }
    this.FieldsValue = new Array();
    for (var i = 0; i < this.JavaPropertys.length; i++) {
        for (var item in dataItem) {
            var bIsFind = false;
            if(bIsLocal == false && item.toUpperCase() == this.JavaPropertys[i].toUpperCase())
            {bIsFind = true;}
            if(bIsLocal == true && item.toUpperCase() == this.Fields[i].toUpperCase())
            {bIsFind = true;}
            if (bIsFind) {
                if (this.IsJson(dataItem[item])) {
                    var tJSon = dataItem[item];
                    for (var k in tJSon) {
                        this.FieldsValue[i] = tJSon[k];
                        break;
                    }
                }
                else {
                    this.FieldsValue[i] = dataItem[item];
                }
                break;
            }
        }
    }
}

// DataAccess.prototype.FillEntry = function (dataItem) {
    // if(dataItem["userId"] == "40288ad85b8592cf015b85b78ea900ea")
    // {
        // popupWindow('123',JSON.stringify(dataItem));
        // alert("FillEntry1_"+JSON.stringify(dataItem));
        // //console.log("FillEntry1_"+JSON.stringify(dataItem));
    // }
//     
    // this.FieldsValue = new Array();
    // alert("FillEntry6_"+this.JavaPropertys.length);
    // for (var i = 0; i < this.JavaPropertys.length; i++) {
         // alert("FillEntry7_"+this.JavaPropertys[i].toUpperCase());
        // for (var item in dataItem) {
            // alert("FillEntry5_"+item.toUpperCase()+"," + this.JavaPropertys[i].toUpperCase());
            // if (item.toUpperCase() == this.JavaPropertys[i].toUpperCase()) {
                // if (this.IsJson(dataItem[0][item])) {
                    // if(dataItem["userId"] == "40288ad85b8592cf015b85b78ea900ea")
                    // {
                        // alert("FillEntry2_"+JSON.stringify(dataItem[0]));
                    // }
                    // var tJSon = dataItem[0][item];
                    // for (var k in tJSon) {
                        // alert("FillEntry4_"+this.JavaPropertys[i] + ":" + tJSon[k]);
                        // this.FieldsValue.push(tJSon[k]);
                        // break;
                    // }
                // }
                // else {
                    // alert("FillEntry3_"+this.JavaPropertys[i] + ":" + dataItem[0][item]);
                    // this.FieldsValue.push(dataItem[0][item]);
                // }
                // break;
            // }
        // }
    // }
// }


DataAccess.prototype.ExecuteSQLByResult = function (sql, logicFun) {
        var db = uexDataBaseMgr.open("musicEx.db", 1017);
        if (db != null) {
           // alert('ExecuteSQL:' + sql + '/' + JSON.stringify(db));

            uexDataBaseMgr.select(db, sql, function (error, data) {
                if (error) {
                    alert('ExecuteSQLByResult_data出错!');
                } else {
                    logicFun(data);
                  //  alert('ExecuteSQLByResult_data:'+JSON.stringify(data));
                }
                uexDataBaseMgr.close(db);
            });
        } else {
            alert('打开数据库出错！');
        }
    }

    //连接数据库
DataAccess.prototype.OpenDataBase = function () {
    uexDataBaseMgr.copyDataBaseFile("res://musicEx.db",function (error) {
        if (!error) {
            localStorage.setItem('g_DataAccessBIsOpen', 'true');
            //alert('打开数据库成功：' + localStorage.getItem('g_DataAccessBIsOpen'));
        }else{
            alert('数据库文件不存在！');
        }
    });
}

//获取比较范围的过滤条件
// downSide,  upSide,  fieldName, bIsTime = false, downBIsEv = true, upSideBIsEv = true
DataAccess.prototype.GetCompareSideFilter = function (downSide,upSide,fieldName,bIsTime,downBIsEv,upSideBIsEv) 
{
    if(arguments.length < 6)
    {
       upSideBIsEv = true;
    }
    if(arguments.length < 5)
    {
        downBIsEv = true;
    }
    if(arguments.length < 4)
    {
        bIsTime = false;
    }
    if (bIsTime == true)
    {
        return "(" + this.TableName + "." + fieldName + (downBIsEv ? ">='" : ">'") + downSide + "' and " + this.TableName + "." + fieldName + (upSideBIsEv == true ? "<='" : "<'") + upSide + "')";
    }
    else
    {
        return "(" + this.TableName + "." + fieldName + (downBIsEv ? ">=" : ">") + downSide + " and " + this.TableName + "." + fieldName + (upSideBIsEv == true ? "<=" : "<") + upSide + ")";
    }
}

// 获取日期上下限的过滤条件
 //startDT,  endDT,  fieldName, startBIsEv = true, endBIsEv = true
DataAccess.prototype.DateTimeSideFilter = function( startDT,  endDT,  fieldName, startBIsEv, endBIsEv)
{
    if(arguments.length < 5)
    {
        endBIsEv = true;
    }
    if(arguments.length < 4)
    {
        startBIsEv = true;
    }
    return this.GetCompareSideFilter(startDT, endDT, fieldName,true, startBIsEv,endBIsEv);
}

//获取二元操作符的对达式（>, <, >=, <=, <>, like)
DataAccess.prototype.GetCompareFilter = function(fieldName, relation, objValue)
{
    var fieldType = null;
    for(var i=0;i<this.Fields.length;i++)
    {
        if(fieldName == this.Fields[i])
        {
            fieldType = this.FieldsType[i];
            break;
        }
    }

    switch (fieldType)
    {
        case "DbType.Object":
        case "DbType.Binary":
            return "";
        case "DbType.Int16":
        case "DbType.Int32":
        case "DbType.UInt64":
        case "DbType.Double":
        case "DbType.Single":
            //return fieldName + " " + relation + " " + objValue; 
        case "DbType.Boolean":
            return fieldName + " " + relation + " " + objValue; 
        case "DbType.DateTime":
            return fieldName + " " + relation + " '" + objValue+"'"; 
    }
    return "";
}

//上传本地数据到服务器
DataAccess.prototype.UpLoadData = function (entry,callBack) {
    if(arguments.length == 1)
    {
        callBack = null;
    }
    entry.SetF_BISUPLOAD(0);
    var selectSQL = entry.GetSelectSQL(null);
    entry.ExecuteSQLByResult(selectSQL, function (json) {
        //alert("UpLoadData:执行选择结果"+JSON.stringify(json));
        if(json && json.length !=0){
            var userArray = entry.GetEntryArray(json);

            var sql = "";
            for (var i = 0; i < userArray.length; i++) {
                sql += userArray[i].GetDeleteSQL() + ";";
                sql += userArray[i].GetInsertSQL() + ";";
            }
            sql = sql.substr(0, sql.length - 1);
            var tt = sql;
            //alert("UpLoadDataSQL:" + sql);
            //调用ajax服务执行事物处理
            appcan.gsoft.ajaxUtil.ajax({
                url: '/dataSyncManager/saveSyncData.json',
                data: 'saveSql=' + sql,
                success: function (data) {
                    
                    //alert("上传成功！");
                    //alert(JSON.stringify(data.records[0].hasTask));
                    //            if (data.records[0].hasTask == 1) {
                    //                localStorage.setItem("taskId", data.records[0].taskId)  //缓存任务id
                    //                appcan.openWinWithUrl(src, 'work/' + src + '.html');
                    //            } else if (data.records[0].hasTask == 0) {
                    //                alert('目前没有需要确认的任务');
                    //            };
                    var sqlArray = new Array();
                    for (var i = 0; i < userArray.length; i++) {
                        userArray[i].SetF_BISUPLOAD(1);
                        sqlArray.push(userArray[i].GetUpdateSQL());
                    }
                    g_DataAccHelper.ExecuteSQLByTrans(sqlArray);
                    if(callBack != null)
                    {
                        callBack('0');
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
                    if(callBack != null)
                    {
                        callBack('1');
                    }
                }
            });
        }else{
            if(callBack != null)
            {
                callBack('2');
            }
        }
        
    });

}

//下载服务器的数据到本地
DataAccess.prototype.DownLoad = function (entry) {
    //调用ajax服务执行事物处理
    var selectSql = "select * from " + this.TableName;
    //alert("DownLoadSQL = " + selectSql);

     var tbName = this.TableName;
    appcan.gsoft.ajaxUtil.ajax({
        url: '/dataSyncManager/getSyncData.json',
        data: 'querySql=' + selectSql + '&tableName=' + tbName,
        success: function (data) {
            //alert(JSON.stringify(data));
            var enArray = entry.GetEntryArray(data.records,false);
            var sql = new Array();
            for (var i = 0; i < enArray.length; i++) {
                sql.push(enArray[i].GetDeleteSQL());
                enArray[i].SetF_BISUPLOAD(1);
                sql.push(enArray[i].GetInsertSQL());
            }
            //alert("DownLoadTransSQL = " + sql);
            g_DataAccHelper.ExecuteSQLByTrans(sql);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            appcan.window.openToast('服务器连接失败,请检查网络...', '2000');
        }
    });
}
var g_DataAccHelper = new DataAccess();