    var divClass = "div_upload_0";
    /**
     * 照片上传
     */
    $('.uploadPictureClass').live('click', function() {
           divClass = $(this).parent().parent()[0].className;
           actionsheet();
    });
     //弹出actionSheet
    function actionsheet() {
        uexWindow.actionSheet("选择文件", "取消", ["照相机拍摄", "从相册选取"]);
    }
    
     /* 上传相关 */
    function initUpload() {
        uexWindow.cbActionSheet = function(opId, dataType, data) {
            switch (parseInt(data)) {
            case 0:
                uexCamera.open();
                break;
            case 1:
                 var data = {
                    min:1,
                    max:5,
                    quality:0.8,
                    detailedInfo:true
                }
                var json = JSON.stringify(data);
                uexImage.openPicker(json);
                break;
            case 2:
                break;
            }
        }
        uexImage.onPickerClosed=function(info){
               var filePaths = JSON.parse(info).data;               
               for(i in filePaths){
                   picView(filePaths[i],divClass);
               }               
               
        }

        uexCamera.cbOpen = function(opId, dataType, data) {
            if (dataType == 0) {
                fileUrl = data;
                picView(fileUrl,divClass);
            }
        }

    }
   
    function getFilePaths(flowNo,busType,divClass,callback){
        var num = 0;
        var length = $("."+divClass+" .div_imglook").find('img').length-1;
        if(length>0){
            $("."+divClass+" .div_imglook").find('img').each(function(i){
                if(length!=i){
                    var filePath = $(this).parent().attr("filePath");
                    upload(filePath,i+1,flowNo,busType,function(data){
                             num++;
                    });
                }
                               
            });
        }
        var timeSet = setInterval(function(){
            if(num==length){
                 callback();
                 window.clearInterval(timeSet);
            }
        },1*1000);
        
    }
     /* 上传 */
    function upload(filePath,index,flowNo,busType,callback) {
        appcan.gsoft.uploadUtils.upload(filePath, index, function(fileSize, percent, responseString, status, sort) {
            switch (status) {
            case 1:
                saveUploadMobileFile(responseString,sort,flowNo,busType,callback);
                break;
            }
        });
    }

    /* 上传后保存上传信息 */
    function saveUploadMobileFile(filePath,index,flowNo,busType,callback) {
        appcan.gsoft.ajaxUtil.ajax({
            url : "/mobileFileManager/saveMobileFile.json",
            data : "filePath="+filePath+"&businessId="+flowNo+"&type=1&index="+index+"&busType="+busType,
            success : function(data) {
                if(callback){
                    callback(true);
                }
                
            }
        });
    }
    
    
    function downloadMobileFile(flowNo,busType,divClass,callback) {
            var dnum = 0;
            var dlength = 0;
            var pic_arr = [];
            appcan.gsoft.ajaxUtil.ajax({
                url : "/mobileFileManager/getMobileFiles.json",
                data : "businessId="+flowNo+"&busType="+busType,
                success : function(data) {
                    if(data.records){
                        var records = data.records;
                        dlength = records.length;
                       for(i in records){
                            var filePath = records[i].filePath;
                            var fileName = records[i].fileName;
                            pic_arr.push(fileName);
                            appcan.gsoft.uploadUtils.download(filePath,fileName,function(fileSize, percent, status){
                               if(status==1){
                                   dnum++;
                               }
                            },"/storage/emulated/0/gsoft");
                       } 
                    }
                  
                }
            });
            var dtimeSet = setInterval(function(){
                if(dnum==dlength){
                     window.clearInterval(dtimeSet);
                    for(i in pic_arr){
                        picView("/storage/emulated/0/gsoft/"+pic_arr[i],divClass,1);
                    }
                     callback();
                    
                }
            },1*1000);
           
        }