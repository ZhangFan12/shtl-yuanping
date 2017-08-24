var UP_IMGCOUNT = 0;//上传图片张数记录


function picView(filePath,divClass,flag){
        //创建预览外层
        var _prevdiv = document.createElement("div");
        _prevdiv.setAttribute("class", "lookimg");
        //创建内层img对象
        var preview = document.createElement("img");
        $(_prevdiv).append(preview);
        //创建删除按钮
        var IMG_DELBTN = document.createElement("div");
        IMG_DELBTN.setAttribute("class", "lookimg_delBtn");
        IMG_DELBTN.innerHTML = "移除";
        $(_prevdiv).append(IMG_DELBTN);
       
        //记录此对象对应编号
        _prevdiv.setAttribute("num", UP_IMGCOUNT);
        //记录此对象对应路径
        _prevdiv.setAttribute("filePath", filePath);
        
        UP_IMGCOUNT++;
        
        //对象注入界面
        $("."+divClass+" .div_imglook").children("div:last").before(_prevdiv);

        //预览功能 start 
        preview.src = filePath;
        //预览功能 end
        if(typeof(flag)=='undefined'){
            addEvent(divClass);
        }else{
            addEvent_dowm(divClass);
        }
    
}

function addEvent(divClass){
    //删除选中图片
    $("."+divClass+" .lookimg_delBtn").live("click", function () {
        $(this).parent().remove();//移除图片显示
    });
    
    //删除按钮移入移出效果
    $("."+divClass+" .lookimg").live("mouseover", function () {
            $(this).children(".lookimg_delBtn").eq(0).css("display", "block");
    });
    $("."+divClass+" .lookimg").live("mouseout", function () {
        $(this).children(".lookimg_delBtn").eq(0).css("display", "none");
    });
}

function addEvent_dowm(divClass){
    $("."+divClass+" .lookimg").live("click", function () {
            var filePath = $(this).attr("filePath");
            pictureReview(filePath);
    });
}

function pictureReview(filePath){
    var data ={
    displayActionButton:false,
    displayNavArrows:false,
    enableGrid:false,
    //startOnGrid:true,
    startIndex:0,
    data:[filePath],
        style:1,
        gridBackgroundColor:"#4A88C1",  // style为1时生效
        gridBrowserTitle:"图片浏览",
        
}
uexImage.openBrowser(data,function(){
    //alert("browser closed!");
});
}
