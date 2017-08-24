/**
 * 全局变量
 */
var jl_Runlines;  //当前对象引用
var stationArray = [];
/*******************************************************************/
var pointSpacing = 180;                 //点间距
var startPointX = 40;                   //起点坐标X值
var startPointY;                        //起点坐标Y值,默认取外部容器高度的一半,若需自定义,可改49行代码
var lineWidth = 5;                      //站点连线宽度
var pointRadius = 9;                    //站点圆形图标半径
var trainIconWidth = 40;                //火车图标宽度
var trainIconHeight = 50;               //火车图标高度
var canvasBackgroud = "#FFF";           //画布背景颜色
var nStrokeStyle = "#CCCCCC";           //机车未经过时路线颜色
var yStrokeStyle = "#00A035";           //机车经过时路线颜色
var nStationPointStyle = "#CCCCCC";     //站点未经过时颜色
var yStationPointStyle = "#00A035";     //站点已经过时颜色
//var fontStyle = ["字体","起点颜色","终点颜色","未经过时颜色","经过后颜色"];
var fontStylt = ["bold 18px '华文楷体','楷体','微软雅黑'", "#f60", "#D92D2D", "#ACACAC", "#00A035"];
/*******************************************************************/

/**
 * 构造函数
 * @param divId         外部容器div
 * @param imagePath     图片路径
 * @param dataUrl       数据请求url
 * @constructor
 */
function JL_Runlines(divId,imagePath,dataArray,engineMoveInfo){
    this.containerObj = document.getElementById(divId);
    this.imagePath = imagePath;
    this.dataArray = dataArray;
    this.engineMoveInfo = engineMoveInfo;
    //画布对象
    this.canvas = null;
}

/**
 * 创建html元素
 * @param divID         元素Id
 * @param parentDiv     父div对象
 * @param width         宽度
 * @param height        高度
 * @param left          相对定位,距父容器左边距离
 * @param top
 */
JL_Runlines.prototype.createHtmlElement = function(id, parentDiv, width, height, stationNum){
    $("<div id='control'></div>").addClass("control").appendTo(parentDiv);
    startPointY = parentDiv.offsetHeight/2;
    this.canvas = document.createElement('canvas');
    this.canvas.id = id;
    this.canvas.className = 'canvas';
    document.getElementById('control').appendChild(this.canvas);
    this.canvas.width = pointSpacing * stationNum;
    this.canvas.height = parentDiv.offsetHeight * parseInt(height)/100;
}

JL_Runlines.prototype.destory = function(){
     //清楚外部div容器
    var controlObj = document.getElementById("taskContainer");
    controlObj.innerHTML="";
    /*
    document.body.removeChild(controlObj);
        document.body.removeChild(this.canvas);*/
    
}


/** 加载控件 */
JL_Runlines.prototype.load = function(){
    //获取当前对象的引用
    jl_Runlines = this;
    //获取所需要的绘图数据(此方法必须在绘制页面元素前调用)
    jl_Runlines.requestData();   
    //创建所需页面html元素
    jl_Runlines.createHtmlElement("canvas", jl_Runlines.containerObj, "100%", "100%", stationArray.length);
    //开始绘制站点信息(默认绘制列车未出发时轨道信息)
    jl_Runlines.drawPlan();
}

/** 请求数据 */
JL_Runlines.prototype.requestData = function(){
    stationArray = jl_Runlines.dataArray;
}

/**
 * 计算列车当前所在的站点
 * @returns {number} 返回0表示未发车, 返回站点总数表示已到达目的地, 返回i表示正在第i到第i+1站之间跑(0<i<totalStation)
 */
JL_Runlines.prototype.getStationIndex = function(){
    var currentTime = getNowFormatDate();
    var i = 0;
    while((new Date(stationArray[i++].outTime.replace(/-/g,"\/")))<=(new Date(currentTime.replace(/-/g,"\/"))) && i<stationArray.length);
    if((new Date(stationArray[stationArray.length-1].outTime.replace(/-/g,"\/")))<(new Date(currentTime.replace(/-/g,"\/")))){
        return i;
    }
    if(i!=0 && (new Date(stationArray[i-1].arrivalTime.replace(/-/g,"\/")))<=(new Date(currentTime.replace(/-/g,"\/")))){
        return i;
    }
    return i-1;
}

/**
 * 绘制站点信息(计划)
 * @param canvas 画布对象
 */
JL_Runlines.prototype.drawPlan = function(){
    var context = this.canvas.getContext('2d');
    //填充画布的背景颜色
    context.fillStyle = canvasBackgroud;
    context.fillRect(0,0,this.canvas.width, this.canvas.height);
    //绘制线条
    context.beginPath();
    context.moveTo(startPointX,startPointY);
    context.lineTo(startPointX+pointSpacing*(stationArray.length-1),startPointY);
    context.lineWidth = lineWidth;
    context.strokeStyle = nStrokeStyle;
    context.stroke();
    //绘制站点圆形图标
    for(var i=0;i<=stationArray.length-1;i++){
        context.arc(startPointX+pointSpacing*i,startPointY,pointRadius,0,Math.PI*2,true);
        context.fillStyle = nStationPointStyle;
        context.fill();
    }
    
    //绘制机车信息
    context.font = "bold 24px '华文楷体'"
    context.fillStyle = "#000";
    drawLevelWord("机车编号："+jl_Runlines.engineMoveInfo.f_EPLATENUMBER ,startPointX ,startPointY-120, context);
    drawLevelWord("主司机："+jl_Runlines.engineMoveInfo.f_TPPERSONNE1 ,startPointX+300 ,startPointY-120, context);
    drawLevelWord("操作员："+jl_Runlines.engineMoveInfo.f_TPPERSONNE4 ,startPointX+500 ,startPointY-120, context);
    drawLevelWord("出厂时间："+jl_Runlines.engineMoveInfo.f_EBUILDTIME.split(" ")[0] ,startPointX+700 ,startPointY-120, context);
    
    drawLevelWord("机车名称："+jl_Runlines.engineMoveInfo.f_ENAME ,startPointX ,startPointY-80, context);
    drawLevelWord("副司机："+jl_Runlines.engineMoveInfo.f_TPPERSONNE2 ,startPointX+300 ,startPointY-80, context);
    drawLevelWord("学员："+jl_Runlines.engineMoveInfo.f_TPPERSONNE3 ,startPointX+500 ,startPointY-80, context);
    
    
    //绘制站点名称信息
    context.font = fontStylt[0];
    for(var i=0;i<stationArray.length;i++){
        if(i==0){
            context.fillStyle = fontStylt[1];
            drawWord("起点" ,startPointX-10 ,startPointY-40, context);
        }
        context.fillStyle = fontStylt[3];        
        drawWord(stationArray[i].fSname ,startPointX-10+i*pointSpacing ,startPointY+30, context);
        drawTimeWord(stationArray[i].arrivalTime,startPointX+20+i*pointSpacing ,startPointY+30, context);
        drawTimeWord(stationArray[i].outTime,startPointX+20+i*pointSpacing ,startPointY+53, context)
        if(i==stationArray.length-1){
            context.fillStyle = fontStylt[2];
            drawWord("" ,startPointX-10+pointSpacing*(stationArray.length-1) ,startPointY-40, context);
        }
    }
    //获取机车当前运行的站点
    var index = jl_Runlines.getStationIndex();
    if(index!=0){
        if(index==stationArray.length){
            jl_Runlines.drawCurrent(context,index,pointSpacing*(index-1));
        }else{
            var length = pointSpacing*(index-1);
            if(!((new Date(stationArray[index-1].arrivalTime.replace(/-/g,"\/")))<=(new Date(getNowFormatDate().replace(/-/g,"\/"))) && (new Date(stationArray[index-1].goTime.replace(/-/g,"\/")))>=(new Date(getNowFormatDate().replace(/-/g,"\/"))))){
                var d1 = new Date(stationArray[index].arrivalTime);
                var d2 = new Date(stationArray[index-1].goTime);
                var d3 = new Date(getNowFormatDate());
                var d4 = new Date(stationArray[index-1].goTime);
                length = length + pointSpacing*(((d3-d4)/(d1-d2)).toFixed(2));
            }
            jl_Runlines.drawCurrent(context,index,length);
        }
    }
}

/**
 * 绘制正在运行中的站点信息(不刷新页面)
 * @param context 画布上下文对象
 * @param index   站点索引值
 * @param linelength 机车经过的轨道线长度
 */
JL_Runlines.prototype.drawCurrent = function(context,index,linelength){
    //动态填充站点图标,字体颜色
    context.beginPath();
    for(var i=0;i<index;i++){
        if(linelength>15){
            context.fillStyle = fontStylt[1];
            drawWord("起点" ,startPointX-10 ,startPointY-40, context);
        }
        context.arc(startPointX+i*pointSpacing,startPointY,pointRadius-2,0,Math.PI*2,true);
        context.fillStyle = yStationPointStyle;
        context.fill();
        context.fillStyle = "#FFF";  //纯白色，遮掩
        drawWord(stationArray[i].fSname ,(startPointX-10)+i*pointSpacing ,startPointY+30, context);
        context.fillStyle = fontStylt[4];
        drawWord(stationArray[i].fSname ,(startPointX-10)+i*pointSpacing ,startPointY+30, context);
    }
    //动态填充线条颜色
    context.moveTo(startPointX,startPointY);
    context.lineTo(startPointX+2+linelength,startPointY);
    context.lineWidth = lineWidth;
    context.strokeStyle = yStrokeStyle;
    context.stroke();

    //创建火车图标
    var myImage = new Image();
    myImage.onload = function() {
        if(i!=0){
            context.fillStyle = "#FFF";
            context.fillRect(startPointX-20+linelength,startPointY-60,trainIconWidth,trainIconHeight);
        }
        context.drawImage(myImage,startPointX-20+linelength,startPointY-60,trainIconWidth,trainIconHeight);
    }
    myImage.src = jl_Runlines.imagePath.toString();
    if(startPointX-20+linelength>jl_Runlines.containerObj.offsetWidth/2){
        document.getElementById("control").scrollLeft = (startPointX-20+linelength) - (jl_Runlines.containerObj.offsetWidth/2);
    }
}

/**
 * 注: 不使用此方法
 * 绘制正在运行中的站点信息(刷新页面)
 * @param context 画布上下文对象
 * @param index   站点索引值
 */
JL_Runlines.prototype.drawCurrentInterval = function(context,index){
    var count = 0,marker = 0;
    //动态填充线条颜色
    context.beginPath();
    var setInterval_ = setInterval(function(){
        if(count>=15){
            context.fillStyle = fontStylt[1];
            drawWord("起点" ,startPointX-10 ,startPointY-40, context);
        }
        if(2*count%pointSpacing==0){
            context.arc(startPointX+2*count,startPointY,pointRadius-2,0,Math.PI*2,true);
            context.fillStyle = yStationPointStyle;
            context.fill();
            context.fillStyle = "#FFF";  //纯白色，遮掩
            drawWord(stationArray[marker].f_sname ,(startPointX-10)+marker*pointSpacing ,startPointY+30, context);
            context.fillStyle = fontStylt[4];
            drawWord(stationArray[marker].f_sname ,(startPointX-10)+marker*pointSpacing ,startPointY+30, context);
            marker++;
        }
        context.moveTo(startPointX+2*count,startPointY);
        context.lineTo(startPointX+2+2*count,startPointY);
        context.lineWidth = lineWidth;
        context.strokeStyle = yStrokeStyle;
        context.stroke();

        //创建火车图标
        var myImage = new Image();
        myImage.onload = function() {
            if(count!=0){
                context.fillStyle = "#FFF";
                context.fillRect(startPointX-20+2*(count-1),startPointY-60,trainIconWidth,trainIconHeight);
            }
            context.drawImage(myImage,startPointX-20+2*count,startPointY-60,trainIconWidth,trainIconHeight);
        }
        myImage.src = jl_Runlines.imagePath.toString();
        if(startPointX-20+2*(count-1)>jl_Runlines.containerObj.offsetWidth/2){
            document.getElementById("control").scrollLeft = (startPointX-20+2*(count-1)) - (jl_Runlines.containerObj.offsetWidth/2);
        }
        count++;
        if(2*count>pointSpacing*(stationArray.length-1)){
            clearInterval(setInterval_);
        }
    },1);
}

/**
 * 绘制竖直文字
 * @param word      字符串
 * @param x         离画布原点width
 * @param y         离画布原点height
 * @param context   canvas上下文对象
 */
function drawWord(word, x, y, context){
    var charArr = [];
    for(var i=0;i<word.length;i++){
        var c = word.substring(i,i+1);
        context.fillText(c ,x ,y+20*i);
    }
}

/**
 * 绘制水平文字 
 * @param word      字符串
 * @param x         离画布原点width
 * @param y         离画布原点height
 * @param context   canvas上下文对象
 */
function drawLevelWord(word, x, y, context){
    context.fillText(word ,x ,y);
}

/**
 * 绘制特定格式的日期
 * @param word      字符串
 * @param x         离画布原点width
 * @param y         离画布原点height
 * @param context   canvas上下文对象
 */
function drawTimeWord(word, x, y, context){
    if(word=='' || word==null){
        context.fillText("********" ,x ,y);
    }else{
        var month = word.split(" ")[0].split("-")[1];
        var day = word.split(" ")[0].split("-")[2];
        var date = new Date(Date.parse(word.replace(/-/g,"/")));
        var formatDate = parseInt(month)+"/"+parseInt(day)+"  "+date.getHours()+":"+word.split(" ")[1].split(":")[1];
        context.fillText(formatDate ,x ,y);
    }
}

/**
 * 获取当前系统时间
 * @returns {string} YYYY-MM-DD HH:mm:ss
 */
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();

    //return "2017-03-10 08:38:00";
    return currentdate;
}

