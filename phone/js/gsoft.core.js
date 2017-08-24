/**
 * Liupeng
 */
appcan.extend({
    gsoft : {
        serverUrl : 'http://192.168.10.45:8080/gsoft-gltl',
        loginHtml : 'login.html',
        loginUrl : 'login.html',
        uploadUrl : 'upload/upload.html',
        downloadUrl : 'upload/download',
        savePath : '/sdcard/com.gsoft.com/Download',
        logoutUrl : 'ajaxLogout.html',
        esbActionPrefix : '/esb/web',
        ajaxUtil : {
            login : function(data, successHtml) {
                var loginUrl = appcan.gsoft.serverUrl + "/" + appcan.gsoft.loginUrl;
                appcan.locStorage.setVal("username", data.username);
                appcan.locStorage.setVal("password", data.password);
                data = data || {};
                data.loginType = '1';
                appcan.ajax({
                    type : "POST",
                    url : loginUrl,
                    data : data,
                    success : function(result) {
                        var data = JSON.parse(result);
                        // alert(result);
                        if (data.success) {
                            //清除所有缓存
                            sessionStorage.clear();
                      //      localStorage.clear();
                            appcan.locStorage.setVal("online", "online");//在线登录
                            appcan.locStorage.setVal("userId", data.principalConfig.userId);
                            appcan.locStorage.setVal("userType", data.principalConfig.userType);
                            appcan.locStorage.setVal("userTypeName", data.principalConfig.userTypeName);
                            appcan.locStorage.setVal("loginName", data.loginName);
                            appcan.locStorage.setVal("authorization", data.authorization);
                            if (typeof uexJPush != 'undefined') {
                                uexJPush.setAliasAndTags({
                                    alias: data.principalConfig.userId,//string 设置的别名
                                    tags: [data.userTypeName],//Set<String> 设置的标签
                                })
                            }
                            
                            // appcan.window.open(successHtml, successHtml, 0);
                            appcan.window.open({
                                 name:successHtml,
                                 dataType:0,
                                 data:successHtml,
                                 type:4
                            });
                        } else {
                            appcan.window.openToast(data.info, '5000');
                        }
                    },
                    error : function(XMLHttpRequest, textStatus, errorThrown) {
                        //alert("login failed gsoft.core.js");
                        //离线则查询本地sqllite数据库
                        var us = new gltl_user();
                        us.SetF_ULOADNAME(data.username);
                        us.SetF_UPASSWORD(hex_md5(data.password));
                        var selectSQL = us.GetSelectSQL();
                        us.ExecuteSQLByResult(selectSQL, function (json) {
                         //   alert("user:"+JSON.stringify(json));
                            //var userArray = entry.GetEntryArray(json);
                            if(json && json.length == 0){
                                //appcan.window.openToast("服务器连接失败,请检查网络...", '2000');
                                appcan.window.openToast("离线登录，用户信息不存在", '2000');
                            }else{
                                us.FillEntry(json[0]);
                                var userType = new gltl_dictionary();
                                userType.SetF_DID(us.GetF_UTYPE());
                                var userType_selectSQL = userType.GetSelectSQL();
                                userType.ExecuteSQLByResult(userType_selectSQL, function (ujson) {
                                    if(ujson && ujson.length != 0){
                                        //alert("userType:"+JSON.stringify(ujson));
                                        userType.FillEntry(ujson[0]);
                                        appcan.locStorage.setVal("userId",  us.GetF_UID());
                                        appcan.locStorage.setVal("realname",  us.GetF_UNAME());
                                        appcan.locStorage.setVal("userType", userType.GetF_DINDEX());
                                        appcan.locStorage.setVal("userTypeName", userType.GetF_DNAME());
                                        appcan.locStorage.setVal("loginName", us.GetF_ULOADNAME());
                                        appcan.locStorage.setVal("online", "offline");//离线登录
                                        if (typeof uexJPush != 'undefined') {
                                            uexJPush.setAliasAndTags({
                                                alias: us.GetF_UID(),//string 设置的别名
                                                tags: [userType.GetF_DNAME()],//Set<String> 设置的标签
                                            })
                                        }
                                        
                                        appcan.window.open({
                                             name:successHtml,
                                             dataType:0,
                                             data:successHtml,
                                             type:4
                                        }); 
                                    }
                                    else{
                                        appcan.window.openToast("离线登录，用户信息不存在", '2000');
                                    }
                                });
                                    
                                
                            }
                        });
                    }
                });
            },
            logout : function(refresh) {
                var logoutUrl = appcan.gsoft.serverUrl + "/" + appcan.gsoft.logoutUrl;
                var locStorage = appcan.require('locStorage');
                var userId = locStorage.getVal("userId");
                locStorage.remove("authorization");
                appcan.ajax({
                    type : "POST",
                    url : logoutUrl,
                    data : {},
                    success : function(result) {
                        if (refresh) {
                            appcan.window.open('login', appcan.gsoft.loginHtml, 0);
                        }
                    },
                    error : function(XMLHttpRequest, textStatus, errorThrown) {
                        //在离线状态下，退出仅仅是客户端退出，服务端未退出，此时标记为未真正退出，在下次在线登录时判断
                        locStorage.setVal("noLogout"+userId,  "noLogout");
                        if (refresh) {
                            appcan.window.open('login', appcan.gsoft.loginHtml, 0);
                        }
                    }
                });
            },
            nojumpLogin :function(callback){//登录后无跳转，用于离线登录后，在有网络时调用后台服务时，先执行该登录
                var data = {};
                data.username = appcan.locStorage.getVal("username");
                data.password = appcan.locStorage.getVal("password");
                data.loginType = '1';
                var loginUrl = appcan.gsoft.serverUrl + "/" + appcan.gsoft.loginUrl;
                
                appcan.ajax({
                    type : "POST",
                    url: loginUrl,
                    data: data,
                    success: function (result) {
                        var data1 = JSON.parse(result);
                        if (data1.success){
                            appcan.locStorage.setVal("online", "online");//在线登录
                            appcan.locStorage.setVal("userId", data1.principalConfig.userId);
                            appcan.locStorage.setVal("userType", data1.principalConfig.userType);
                            appcan.locStorage.setVal("userTypeName", data1.principalConfig.userTypeName);
                            appcan.locStorage.setVal("loginName", data1.loginName);
                            appcan.locStorage.setVal("authorization", data1.authorization);
                            if (typeof uexJPush != 'undefined') {
                                uexJPush.setAliasAndTags({
                                    alias: data1.principalConfig.userId,//string 设置的别名
                                    tags: [data1.userTypeName],//Set<String> 设置的标签
                                })
                            }
                            
                            callback();
                            
                        }else {
                            appcan.window.openToast(data1.info, '5000');
                        }
                        
                    },
                    error : function(XMLHttpRequest, textStatus, errorThrown) {
                        appcan.window.openToast("服务器连接失败,请检查网络...", '2000');
                    }
               });
            },
            nojumpLogout : function(callback) {
                var logoutUrl = appcan.gsoft.serverUrl + "/" + appcan.gsoft.logoutUrl;
                var locStorage = appcan.require('locStorage');
                var userId = locStorage.getVal("userId");
                locStorage.remove("authorization");
                appcan.ajax({
                    type : "POST",
                    url : logoutUrl,
                    data : {},
                    success : function(result) {
                        callback();
                    },
                    error : function(XMLHttpRequest, textStatus, errorThrown) {
                        appcan.window.openToast("服务器连接失败,请检查网络...", '2000');
                    }
                });
            },
            ajax : function(ajaxOptions, isTimeStamp) {
                if (!ajaxOptions.url) {
                    alert('没有ajax url参数！');
                    return;
                }
                if (ajaxOptions.showLoading == true) {
                    appcan.gsoft.ajaxUtil.showLoading();
                }

                var mockData = ajaxOptions.mockData;
                if (mockData) {
                    if (mockData === 'show') {
                        ajaxOptions.success = function (data) {
                            $('body').html('');
                            $('body').text(JSON.stringify(data));
                        }
                    }else {
                        return ajaxOptions.success(JSON.parse(mockData));
                    }
                }

                isTimeStamp = isTimeStamp || false;
                if (isTimeStamp && ajaxOptions.data) {
                    ajaxOptions.data += ('&gsoft-timeStamp=' + new Date().getTime());
                }
                if (ajaxOptions.url.substring(0, 1) == '/') {
                    if (appcan.gsoft.esbActionPrefix && ajaxOptions.url.indexOf(appcan.gsoft.esbActionPrefix) == -1) {
                        ajaxOptions.url = appcan.gsoft.serverUrl + appcan.gsoft.esbActionPrefix + ajaxOptions.url;
                    } else {
                        ajaxOptions.url = appcan.gsoft.serverUrl + ajaxOptions.url;
                    }
                } else {
                    ajaxOptions.url = appcan.gsoft.serverUrl + "/" + ajaxOptions.url;
                }
                var locStorage = appcan.require('locStorage');
                var authorization = locStorage.getVal("authorization");
                var options = $.extend({}, {
                    dataType : 'json',
                    type : 'POST',
                    contentType : 'application/x-www-form-urlencoded;charset=UTF-8',
                    headers : {
                        'Authorization' : authorization
                    }
                }, ajaxOptions);
                var oldSuccess = options.success ||
                function() {
                };
                var oldError = options.error ||
                function() {
                    appcan.window.openToast("服务器连接失败,请检查网络...", '2000');
                };

                options.complete = function(xhr, status) {
                    appcan.gsoft.ajaxUtil.hideLoading();
                };

                options.success = function(results) {
                    //通用信息处理
                    appcan.gsoft.ajaxUtil.resultsCheck(results, $.extend({}, this, {
                        error : oldError
                    })) && oldSuccess.apply(options, [results]);
                };

                if (options.isPromise) {
                    var _p
                    if (Promise) {
                        _p = new Promise(function(resolve, reject) {
                            var defer = {resolve, reject};
                            var _option = $.extend({}, options, {success: defer.resolve, error: defer.reject})
                            appcan.ajax(_option);
                        })
                        return _p.then(function (res) {
                            options.success(res);
                            return res;
                        }).catch(function (res) {
                            options.error(res);
                            return res;
                        });
                    } else if ($.Deferred) {
                        _p = $.Deferred(function (defer) {
                            var _option = $.extend({}, options, {success: defer.resolve, error: defer.reject})
                            appcan.ajax(_option);
                        })
                        return _p.done(function (res) {
                            options.success(res);
                            return res;
                        }).fail(function (res) {
                            options.error(res);
                            return res;
                        });
                    }
                }
                appcan.ajax(options);
            },
            /**
             * 通用结果集检查
             */
            resultsCheck : function(results, options) {
                if (results == null)
                    return false;
                if (results.hasError) {
                    options.error.apply(options, [results.errorMsg]);
                    return false;
                }

                var message = results.message;
                var checkFlag = true;
                if (message && message.code) {
                    var code = message.code;
                    switch(code) {
                    case '000000':
                        //成功访问
                        if (message.passed == null) {
                            appcan.window.openToast(message.info, 2000);
                        }
                        break;
                    case '111111':
                        //登录过期
                        appcan.window.openToast('登录过期', '2000');
                        checkFlag = false;
                        appcan.window.open('login', 'login.html', 0);
                        return;
                    case '222222':
                        //您已在其他地方登录，您被踢出登录
                        sessionStorage.clear();
                        appcan.gsoft.ajaxUtil.logout(true);
                        //appcan.window.openToast('您已在其他地方登录，您被踢出登录!', '2000');
                        checkFlag = false;
                        appcan.window.open('login', 'login.html', 0);
                        appcan.window.evaluateScript({
                            name:"login", 
                            scriptContent:"alert('您已在其他地方登录，您被踢出登录!');"
                        });
                        
                        return;
                    }
                }
                return checkFlag;
            },
            showLoading : function(msg) {
                uexWindow.createProgressDialog('', msg || '正在加载,请稍候...', 1);
            },
            hideLoading : function() {
                uexWindow.destroyProgressDialog();
            }
        },
        parameterUtils : {
            addParams : function(params, property, value) {
                var pamameters = [];
                if ($.isArray(value)) {
                    $(value).each(function() {
                        if (this != null && property)
                            pamameters.push('' + property + '=' + encodeURIComponent(this));
                    });
                } else {
                    if (property && appcan.gsoft.stringUtils.notEmpty(value))
                        pamameters.push('' + property + '=' + encodeURIComponent(value));
                }
                return ( params ? (params + '&') : '') + pamameters.join('&');
            },
            addPageParams : function(params, pageInex, pageSize) {
                params = appcan.gsoft.parameterUtils.addParams(params, 'pager:pageIndex', pageInex);
                params = appcan.gsoft.parameterUtils.addParams(params, 'pager:pageSize', pageSize);
                return params;
            },
            connectParameter : function(src, property, value) {
                return src + (src.indexOf('?') == -1 ? '?' : '&') + appcan.gsoft.parameterUtils.addParams('', property, value);
            },
            setPageParams : function(value) {
                appcan.locStorage.setVal('gsoft_page_param', value);
            },
            getPageParams : function() {
                var params = appcan.locStorage.getVal('gsoft_page_param');
                try {
                    return JSON.parse(params);
                } catch (e) {
                    return params;
                }
            }
        },
        recordUtils : {
            fillRecord : function(elem, data) {
                if (elem) {
                    elem.find('.gsoft-value').each(function() {
                        var name = $(this).attr('name');
                        if (name && data[name]) {
                            $(this).html(data[name]);
                        }
                    });
                }
            },
            fillInputRecord : function(elem, data) {
                if (elem) {
                    elem.find('.gsoft-value').each(function() {
                        var name = $(this).attr('name');
                        if (name && data[name]) {
                            $(this).val(data[name]); 
                        }
                    });
                }
            },
            getRecord : function(elem) {
                var record = {};
                if (elem) {
                    elem.find('.gsoft-value').each(function() {
                        var name = $(this).attr('name');
                        var value;
                        if ('input' == $(this).attr("tagName")) {
                            value = $(this).val();
                        } else {
                            value = $(this).html();
                        }
                        if (value) {
                            record[name] = value;
                        }
                    });
                }
            },
            getRecordParams : function(elem) {
                var params = '';
                if (elem) {
                    elem.find('.gsoft-value').each(function() {
                        var name = $(this).attr('name');
                        var value;
                        if ('INPUT' == $(this).attr("tagName")) {
                            value = $(this).val();
                        } else {
                            value = $(this).html();
                        }
                        if (value) {
                            params = appcan.gsoft.parameterUtils.addParams(params, name, value);
                        }
                    });
                }
                return params;
            }
        },
        uploadUtils : {
            upload : function(filePath, sort, callBack, inputName, quality, maxWidth) {
                inputName = inputName || 'filePath';
                quality = quality || 0;
                maxWidth = maxWidth || 1080;

                var id = Math.floor(Math.random() * (1000 + 1));

                uexUploaderMgr.createUploader(id, appcan.gsoft.serverUrl + "/" + appcan.gsoft.uploadUrl);

                uexUploaderMgr.cbCreateUploader = function(id, dataType, data) {
                    if (data != 0) {
                        appcan.window.openToast("上传对象创建失败", 2000);
                    }
                };

                uexUploaderMgr.onStatus = function(id, fileSize, percent, responseString, status) {
                    switch (status) {
                    case 0:
                        if(fileSize/1024>0){
                            fileSize = Math.round(fileSize/1024*100)/100 + "kb";
                        }else{
                            fileSize = fileSize +"b";
                        }
                        //appcan.window.openToast("上传包大小:" + fileSize + ",上传进度:" + percent + "%", 0);
                        break;
                    case 1:
                        //appcan.window.openToast("上传成功", 1000);
                        uexUploaderMgr.closeUploader(id);
                        break;
                    case 2:
                        appcan.window.openToast("上传失败...", 2000);
                        uexUploaderMgr.closeUploader(id);
                        break;
                    }
                    if (callBack) {
                        callBack(fileSize, percent, responseString, status, sort);
                    }
                };

                uexUploaderMgr.uploadFile(id, filePath, inputName, quality, maxWidth);
            },
            download : function(filePath, fileName, callBack, savePath) {
                var id = Math.floor(Math.random() * (1000 + 1));
                var downloadUrl = appcan.gsoft.serverUrl + "/" + appcan.gsoft.downloadUrl + "/" + filePath + ".html";
                downloadUrl = downloadUrl.replace('\\', '/');
                savePath = (savePath || appcan.gsoft.savePath) + "/" + fileName;
                uexDownloaderMgr.createDownloader(id);
                uexDownloaderMgr.cbCreateDownloader = function(opCode, dataType, data) {
                    if (data != 0) {
                        appcan.window.openToast("下载对象创建失败", 2000);
                    }
                }
                uexDownloaderMgr.onStatus = function(id, fileSize, percent, status) {
                    switch (status) {
                    case 0:
                        if(fileSize/1024>0){
                            fileSize = Math.round(fileSize/1024*100)/100 + "kb";
                        }else{
                            fileSize = fileSize +"b";
                        }
                        //appcan.window.openToast("文件大小:" + fileSize + ",下载进度:" + percent + "%", 0);
                        break;
                    case 1:
                        //appcan.window.openToast("下载成功", 1000);
                        uexDownloaderMgr.closeDownloader(id);
                        break;
                    case 2:
                        appcan.window.openToast("下载失败", 2000);
                        uexDownloaderMgr.closeDownloader(id);
                        break;
                    case 3:
                        break;
                    }
                    if (callBack) {
                        callBack(fileSize, percent, status);
                    }
                }
                uexDownloaderMgr.download(id, downloadUrl, savePath, 0)
            },
            cancelDownload : function(filePath, msg) {
                var downloadUrl = appcan.gsoft.serverUrl + "/" + appcan.gsoft.uploadUrl + "/" + filePath + ".html";
                uexDownloaderMgr.cancelDownload(serverURL, 1)
                appcan.window.openToast(msg || "取消下载成功", 1000);
            }
        },
        /**
         *字符处理工具
         */
        stringUtils : {

            isEmpty : function(value) {
                return !appcan.gsoft.stringUtils.notEmpty(value);
            },

            notEmpty : function(value) {
                if (value) {
                    return true;
                } else if (value === 0) {
                    return true;
                } else if (value === false) {
                    return true;
                }
                return false;
            },

            fixValue : function(value, defaultValue) {
                var result = value;
                if (appcan.gsoft.stringUtils.isEmpty(value)) {
                    if (appcan.gsoft.stringUtils.isEmpty(defaultValue)) {
                        defaultValue = '';
                    }
                    result = defaultValue;
                }

                return result;
            }
        }
    }
});
