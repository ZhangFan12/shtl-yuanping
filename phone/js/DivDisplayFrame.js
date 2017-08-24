
/*********************************/
function DivInfo(activeFun,imgPath,bussinessId,displayText) {
    this.ActiveFun = activeFun; 		//跳转路径
    this.ImgPath =imgPath;				//图片路径
    this.BussinessID = bussinessId; 	//业务id
    this.DisplayText = displayText;
    if( this.DisplayText == undefined)
    {
        this.DisplayText = "";
    }
}
//*******************************/

function DivDisplayFrame(divID, floatRowCount, imageUrl, dataArary) {
	this.MaxDiv = document.getElementById(divID);
	this.floatRowCount = floatRowCount;
	this.imageUrl = imageUrl;
	this.DataArray = dataArary;
}

//创建Div
DivDisplayFrame.prototype.CreateDivElement = function (divID, parentDiv, dataInfo) {
    var pwidth = this.MaxDiv.offsetWidth;
    var pheight = this.MaxDiv.offsetHeight;

    var div = document.createElement('li');
    div.id = divID;
    // div.style.width = pwidth / (4 * this.floatRowCount + this.floatRowCount + 1) * 4 + "px";
    // div.style.height = pwidth / (4 * this.floatRowCount + this.floatRowCount + 1) * 4 + "px";
    // div.style.align = "center";
    // div.style.styleFloat = "left";
    // div.style.cssFloat = "left";
    // div.style.cursor = "pointer";
    // div.style.marginLeft = pwidth / (4 * this.floatRowCount + this.floatRowCount + 1) + "px";
    // div.style.marginBottom = pheight / (4 * this.floatRowCount + this.floatRowCount + 1) + "px";

    if (dataInfo.ImgPath == "") {
        div.innerHTML = dataInfo.DisplayText;
        // div.style.fontSize = "14px";
        // div.style.fontWeight = "bold";
        // div.style.color = "#FF6600;";
        // div.style.textIndent = "10px";
        // div.style.backgroundColor = "#DAEEF8";
        // div.style.lineHeight = "24px";
        // div.style.borderStyle = "solid";
        // div.style.borderWidth = "1px";
        //        div.style.
        //.1_div {
        //font-size: 12px;
        //font-weight: bold;
        //color: #FF6600;
        //text-indent: 10px;
        //background-color: #DAEEF8;
        //line-height: 24px;
        //height: 24px;
        //}

        //        var lable = document.createElement('lable');
        //        lable.style.width = pwidth / (4 * this.floatRowCount + this.floatRowCount + 1) * 4 + "px";
        //        lable.style.height = pwidth / (4 * this.floatRowCount + this.floatRowCount + 1) * 4 + "px";
        //        lable.value = dataInfo.
        //        img.setAttribute('BussinessID', dataInfo.BussinessID);
        //        div.appendChild(img);
        div.setAttribute('BussinessID', dataInfo.BussinessID);
        div.setAttribute('DisplayText', dataInfo.DisplayText);
    }
    else {
        /*    div.style.backgroundImage = 'url('+objReference.imageUrl+')';
        div.style.backgroundRepeat = 'no-repeat';*/
        var img = document.createElement('img');
        img.style.width = pwidth / (4 * this.floatRowCount + this.floatRowCount + 1) * 4 + "px";
        img.style.height = pwidth / (4 * this.floatRowCount + this.floatRowCount + 1) * 4 + "px";
        img.src = dataInfo.ImgPath;
        img.setAttribute('BussinessID', dataInfo.BussinessID);
        div.appendChild(img);
    }
    parentDiv.appendChild(div);
    div.addEventListener("click", dataInfo.ActiveFun);
    return div;
}

DivDisplayFrame.prototype.Load = function () {
    //保存当前对象的引用
	var parentDiv = document.createElement('ul');
	// parentDiv.style.width = "100%";
	// parentDiv.style.height = "100%";
	// parentDiv.style.border = "thin groove #FFF";
	parentDiv.className = 'select-list clear'
	this.MaxDiv.appendChild(parentDiv);
	for (j = 0; j < this.DataArray.length; j++) {
	    this.CreateDivElement(this.MaxDiv.id + j, parentDiv, this.DataArray[j]);
	}
}
