
/*************************************/
//需要在之前先引入DivDisplayFrame.js
//************************************/
function QueryListControl(divID, floatRowCount, dataArary,messageStyle) {
    this.MaxDiv = document.getElementById(divID);
    this.floatRowCount = floatRowCount;
    this.DataArray = dataArary;
    this.MessageStyle = messageStyle;
}
QueryListControl.prototype.CreateButtonElement = function (buttonID, parentID, acive, buttonStyle, left, top, busID) {
    var parentDiv = document.getElementById(parentID);
    var button = document.createElement("button");
    switch (buttonStyle) {
        case 1:
            button.innerText = "个人信息";
            button.style.backgroundColor = "#00CC66";
            break;
        case 2:
            button.innerText = "出乘信息";
            button.style.backgroundColor = "#FF9933";
            break;
        case 3:
            button.innerText = "成绩单";
            button.style.backgroundColor = "#00CC66";
            break;
    }

    button.id = buttonID;
    button.style.position = "absolute";
    button.style.top = top;
    button.style.left = left;
    button.style.width = "34%";
    button.style.height = "20%";
    button.style.color = "#FFFFFF";
    button.style.fontSize = "x-small";
    button.addEventListener("click", acive);
    button.setAttribute('BussinessID', busID);
    parentDiv.appendChild(button);
    //<button id = "ryDivBtn1" style="position: absolute; top: 95px; left: 0px; width: 65px; height: 18px; background-color: #00CC66;color: #FFFFFF; right: 146px; margin-top: 0px;">个人信息</button>
}

function g_ActiveMouseOverQueryListControl() {
    if(event.srcElement.id.indexOf("_Close") >= 0)
    {
        var closeDiv = event.srcElement;
        var goToDiv = document.getElementById(event.srcElement.parentElement.id + "_GoOn");
        closeDiv.style.backgroundColor = "#02DF60";
        closeDiv.style.color = "#FFFFFF";
        goToDiv.style.backgroundColor = "#FFFFFF";
        goToDiv.style.color = "#02DF60";
    }
    else 
    {
        var closeDiv = document.getElementById(event.srcElement.parentElement.id + "_Close");
        var goToDiv = event.srcElement;
        closeDiv.style.backgroundColor = "#FFFFFF";
        closeDiv.style.color = "#02DF60";
        goToDiv.style.backgroundColor = "#02DF60";
        goToDiv.style.color = "#FFFFFF";
    }
}

//创建Div
QueryListControl.prototype.CreateDivElement = function (divID, parentDiv, dataInfo, i) {
    var pwidth = this.MaxDiv.offsetWidth;
    var pheight = this.MaxDiv.offsetHeight;
    var intervalW = pwidth / (this.floatRowCount * 5 + 1);
    var intervalH = pheight / (this.floatRowCount * 5 + 1);
    var div = document.createElement('div');
    div.id = divID;
    div.style.position = "relative";
    div.style.width = intervalW * 4 + "px";
    div.style.height = intervalH * 4 + "px";
    div.style.width = "16em";
    div.style.height = "12em";
    //div.style.align = "center";
    //div.style.styleFloat = "left";
    //div.style.cssFloat = "left";
    //div.style.cursor = "pointer";

    var leftIndex = i % this.floatRowCount;
    var topIndex = i % this.floatRowCount == 0 ? i / this.floatRowCount : parseInt(i / this.floatRowCount);
    // div.style.left = (intervalW * (leftIndex + 1) + intervalW * this.floatRowCount * leftIndex) + "px";
    // div.style.top = (intervalH * (topIndex + 1) + intervalH * this.floatRowCount * topIndex) + "px";
    // div.style.borderStyle = "inherit";

    var imgDiv = document.createElement('div');
    if (this.MessageStyle != undefined) {
        parentDiv.appendChild(div);
        var temp = dataInfo.DisplayText.split("#");
        var upDiv = document.createElement('div');
        upDiv.style.position = "absolute";
        upDiv.style.width = "100%";
        upDiv.style.height = "15%";
        upDiv.style.top = "0%";
        upDiv.style.left = "0%";
        upDiv.style.backgroundColor = "#DFDFDF";
        upDiv.style.fontSize = "small";
        upDiv.style.textAlign = "center";
        //upDiv.style.borderStyle = "solid"; 
        upDiv.innerText = temp[0];
        upDiv.className = 'up'
        div.appendChild(upDiv);

        var middelDiv = document.createElement('div');
        middelDiv.style.position = "absolute";
        middelDiv.style.width = "100%";
        middelDiv.style.height = "70%";
        middelDiv.style.top = "15%";
        middelDiv.style.left = "0%";
        middelDiv.style.backgroundColor = "#FFFFFF";
        //middelDiv.style.borderStyle = "solid"; 
        div.appendChild(middelDiv);

        var textDiv = document.createElement('div');
        textDiv.style.position = "absolute";
        textDiv.style.width = "84%";
        textDiv.style.height = "70%";
        textDiv.style.top = "15%";
        textDiv.style.left = "8%";
        textDiv.style.backgroundColor = "#FFFFFF";
        textDiv.style.textAlign = "left";
        textDiv.style.lineHeight = "1.8";
        textDiv.innerText = temp[1];
        middelDiv.appendChild(textDiv);

        if (this.MessageStyle == 1) {
            var closeDiv = document.createElement('div');
            closeDiv.className = 'msg_close'
            closeDiv.style.position = "absolute";
            closeDiv.style.width = "100%";
            closeDiv.style.height = "15%";
            closeDiv.style.top = "85%";
            closeDiv.style.left = "0%";
            closeDiv.style.backgroundColor = "#02DF60";
            closeDiv.style.fontSize = "small";
            closeDiv.style.textAlign = "center";
            closeDiv.style.color = "#FFFFFF";
            //upDiv.style.borderStyle = "solid"; 
            closeDiv.innerText = "关闭消息";
            // closeDiv.style.lineHeight = "1";
            closeDiv.style.cursor = "pointer"; 
            //closeDiv.style.borderStyle = "solid";
            div.appendChild(closeDiv);
        }
        else {
            var closeDiv = document.createElement('div');
            closeDiv.className = 'msg_close'
            closeDiv.id = div.id + "_Close";
            closeDiv.style.position = "absolute";
            closeDiv.style.width = "50%";
            closeDiv.style.height = "15%";
            closeDiv.style.top = "85%";
            closeDiv.style.left = "0%";
            closeDiv.style.backgroundColor = "#FFFFFF";
            closeDiv.style.fontSize = "small";
            closeDiv.style.textAlign = "center";
            closeDiv.style.color = "#02DF60";
            //upDiv.style.borderStyle = "solid"; 
            closeDiv.innerText = temp[2];
            // closeDiv.style.lineHeight = "1";
            closeDiv.style.cursor = "pointer"; 
            //closeDiv.style.borderStyle = "solid";
            div.appendChild(closeDiv);

            var goToDiv = document.createElement('div');
            goToDiv.id = div.id + "_GoOn";
            goToDiv.className = 'msg_goon'
            goToDiv.style.position = "absolute";
            goToDiv.style.width = "50%";
            goToDiv.style.height = "15%";
            goToDiv.style.top = "85%";
            goToDiv.style.left = "50%";
            goToDiv.style.backgroundColor = "#02DF60";
            goToDiv.style.fontSize = "small";
            goToDiv.style.textAlign = "center";
            goToDiv.style.color = "#FFFFFF";
            //upDiv.style.borderStyle = "solid"; 
            goToDiv.innerText = temp[3];
            // goToDiv.style.lineHeight = "1";
            goToDiv.style.cursor = "pointer"; 
            //closeDiv.style.borderStyle = "solid";
            div.appendChild(goToDiv);

            closeDiv.addEventListener("mouseover", g_ActiveMouseOverQueryListControl);
            goToDiv.addEventListener("mouseover", g_ActiveMouseOverQueryListControl);
        }

        //        div.innerText = dataInfo.DisplayText;
        //        div.style.fontSize = "14px";
        //        div.style.fontWeight = "bold";
        //        div.style.color = "#FF6600;";
        //        div.style.textIndent = "10px";
        //        div.style.backgroundColor = "#DAEEF8";
        //        div.style.lineHeight = "24px";
        //        div.style.borderStyle = "solid";
        //        div.style.borderWidth = "1px";
        //        div.setAttribute('BussinessID', dataInfo.BussinessID);
    }
    else {

        imgDiv.style.position = "absolute";
        imgDiv.style.top = "0%";
        imgDiv.style.left = "25%";
        imgDiv.style.width = "50%";
        imgDiv.style.height = "80%";
        /*    div.style.backgroundImage = 'url('+objReference.imageUrl+')';
        div.style.backgroundRepeat = 'no-repeat';*/
        var img = document.createElement('img');
        //        img.style.position = "absolute";
        //        img.style.top = "0%";
        //        img.style.left = "%0";
        img.style.width = "100%";
        img.style.height = "85%";
        img.src = dataInfo.ImgPath;

        var lableName = document.createElement("label");
        lableName.innerText = dataInfo.DisplayText;
        //lableName.style.position = "absolute";
        lableName.style.top = "60%";
        lableName.style.width = "50%"
        lableName.style.fontSize = "xx-small";
        lableName.style.fontWeight = "bolder";
        lableName.style.left = (intervalW * 4 - lableName.style.width) / 2 + "%";
        imgDiv.appendChild(img);
        imgDiv.appendChild(lableName);
        //img.setAttribute('BussinessID', dataInfo.BussinessID);

        parentDiv.appendChild(div);
        div.appendChild(imgDiv);
        div.style.backgroundColor = "#DAEEF8";
        //div.addEventListener("click", dataInfo.ActiveFun);

        this.CreateButtonElement(div.id + "_1", div.id, dataInfo.ActiveFun, 1, "0%", "80%", dataInfo.BussinessID);
        this.CreateButtonElement(div.id + "_2", div.id, dataInfo.ActiveFun, 2, "34%", "80%", dataInfo.BussinessID);
        this.CreateButtonElement(div.id + "_3", div.id, dataInfo.ActiveFun, 3, "67%", "80%", dataInfo.BussinessID);
    }
    return div;
}

QueryListControl.prototype.Load = function () {
    //保存当前对象的引用
    var parentDiv = document.createElement('div');
    parentDiv.style.width = "100%";
    parentDiv.style.height = "100%";
    // parentDiv.style.border = "thin groove #FFF";
    parentDiv.className = 'select-list clear';
    this.MaxDiv.appendChild(parentDiv);
    for (j = 0; j < this.DataArray.length; j++) {
        this.CreateDivElement(this.MaxDiv.id + j, parentDiv, this.DataArray[j],j);
    }
}
