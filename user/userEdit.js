define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var common = require("$UI/xsd/js/common");
	require("$UI/xsd/js/jquery-form");
	//加载UI2下的css文件
    //require("css!./css/common").load();
	var Model = function(){
		this.callParent();
	};
	
	
	Model.prototype.uploadfileChange = function(event){
		if (!event.target.files) { // 如果客户没有选择相关文件，直接返回

               return;

        }

        var uploadimage = $(this.getElementByXid('uploadfile')); // 用jQuery拿到input标签

         var file = event.target.files[0]; // 拿到用户选择的文件

         if (/^image\/\w+$/.test(file.type)) { // 如果是图片文件

              this.isimg = true;
              //自动提交
              var submitBtn = this.getElementByXid("button1"); 
              $(submitBtn).click();
              
         } else { // 如果用户选的的不是图片文件

         justep.Util.hint('请选择图片文件！');

         $(uploadimage).val('');

         }
	};
	
	Model.prototype.button1Click = function(event){
                var form = this.getElementByXid("postForm"); // 拿到form表单的js对象
                var imageLook = this.getElementByXid("image1");
                var acturl = common.apiUrl+"clientUserApiUpdateHeaderImg";
                $(form).attr("action",require.toUrl(acturl));
                // 提交表单
                $(form).submit(function() {
                        $(this).ajaxSubmit(function(resultData) {
	                        if (resultData.code == "400") {
								justep.Util.hint(resultData.msg.length > 20 ? resultData.msg.substring(0, 20)+".." : resultData.msg, {
									position : "bottom",
									type : 'success',
									delay : 2000,
									style : 'color: red;'
								});
								return false;
							} else if (resultData.code == "300") {
								common.toLogin();
								return false;
							} else {
								 $(imageLook).attr("src", require.toUrl(resultData.result.img));
							}
                               
                        });
                       return false; // 阻止表单默认提交
               });
	};
	
	
	Model.prototype.userDataCustomRefresh = function(event){
	     var userData = event.source;
	     var addressData = this.comp("addressData");
		$.ajax({
			"type" : "get",
			"dataType" : "jsonp",
			"async" : false,
			"url" : common.apiUrl+"clientUserApiGetUserInfo",
			"jsonp" : "callback",
			"jsonpCallback" : 'successCallback1',
			"data" : {},
			"success" : function(resultData) {
				if (resultData.code == "400") {
				    justep.Util.hint(resultData.msg,{position: "bottom",type: 'success',delay:2000,style:'color: red;'});
					
					return false;
				} else if (resultData.code == "300") {
				     common.toLogin();
					 return false;
				}else{
				 userData.add(resultData.result);
				 addressData.add(resultData.result.addressVo);
				}
			},
			"error" : function() {
				alert("请求错误");
			}
		});
	   
	};
	
	Model.prototype.image1Touchend = function(event){ 
	     var uploadfile = this.getElementByXid("uploadfile"); 
		 $(uploadfile).click();
	 };
	
	//保存修改个人信息
	Model.prototype.editSaveBtnClick = function(event){ 
	     var nickName = this.comp("nickName").val();
	     var sex = this.comp("sexSelect").val();
	     var profession = this.comp("profession").val();
	     var province = this.comp("provinceSelect").val();
	     var city = this.comp("citySelect").val();
	     var area = this.comp("areaSelect").val();
	     var address = this.comp("address").val();
	     
	    // alert(nickName +" "+sex + " "+profession + " "+province+" "+city+" "+area +" "+address);
	    if(nickName === null || nickName.trim() === ""){
	       alert("请输入用户昵称");
	       return false;
	    }
	    if(sex === null || sex.trim() === ""){
	    	alert("请选择用户性别");
	    	return false;
	    }
	   
	    common.loadWait("请稍后...");
		$.ajax({
			"type" : "get",
			"dataType" : "jsonp",
			"async" : false,
			"url" : common.apiUrl+"clientUserApiUpdateUserInfo?nickName="+nickName +"&sex="+sex + "&profession="+profession + "&province="+province+"&city="+city+"&area="+area +"&address="+address,
			"jsonp" : "callback",
			"jsonpCallback" : 'successCallback1',
			"data" : {},
			"success" : function(resultData) {
			     common.removeLoadWait();
				if (resultData.code == "400") {
				    justep.Util.hint(resultData.msg,{position: "bottom",type: 'success',delay:2000,style:'color: red;'});
					return false;
				} else if (resultData.code == "300") {
					common.toLogin();
					 return false;
				}else{
				  common.toIndex();
				}
			},
			"error" : function() {
				alert("请求错误");
			}
		});};
	
	
	
	
	
	
	return Model;
});
