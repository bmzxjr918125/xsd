define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var common = require("$UI/xsd/js/common");
	var Model = function(){
		this.callParent();
	};
	Model.prototype.getCodeBtnClick = function(event){
		var btnObj = this.getElementByXid('getCodeBtn');
		
	    var phoneNumber = this.comp("phoneNumber").val();
	    if(phoneNumber === null || phoneNumber.trim() === ""){
	       alert("请输入注册手机号");
	       return false;
	    }
	  if( !common.checkPhone(phoneNumber)){
	       return false;
	    }
	   
	    common.loadWait("请稍后...");
		$.ajax({
			"type" : "get",
			"dataType" : "jsonp",
			"async" : false,
			"url" : common.apiUrl+"clientUserApiGetRegisterCode?phoneNumber="+phoneNumber,
			"jsonp" : "callback",
			"jsonpCallback" : 'successCallback',
			"data" : {},
			"success" : function(resultData) {
			    common.removeLoadWait();
			   
				if (resultData.code == "400") {
				     justep.Util.hint(resultData.msg,{position: "bottom",type: 'success',delay:2000,style:'color: red;'});
					return false;
				} else if (resultData.code == "300") {
				     justep.Util.hint(resultData.msg,{position: "bottom",type: 'success',delay:2000,style:'color: red;'});
					 return false;
				} else {
				    common.timeChange(btnObj);
				}
				
			},
			"error" : function() {
				alert("请求错误");
				common.removeLoadWait();
			}
		});
	   
	
    };

	
    //注册提交
	Model.prototype.registerSubmitClick = function(event){
	    var phoneNumber = this.comp("phoneNumber").val();
	    var pwd = this.comp("pwd").val();
	    var phoneCode = this.comp("phoneCode").val();
	    if(phoneNumber === null || phoneNumber.trim() === ""){
	       alert("请输入注册手机号");
	       return false;
	    }
	   if( !common.checkPhone(phoneNumber)){
	       return false;
	    }
	    if(pwd === null || pwd.trim() === ""){
	       alert("请输入登录密码");
	       return false;
	    }
	    if(phoneCode === null || phoneCode.trim() === ""){
	    	alert("请输入短信验证码");
	    	return false;
	    }
	    common.loadWait("请稍后...");
		$.ajax({
			"type" : "get",
			"dataType" : "jsonp",
			"async" : false,
			"url" : common.apiUrl+"clientUserApiRegister?phoneNumber="+phoneNumber+"&pwd="+pwd+"&phoneCode="+phoneCode,
			"jsonp" : "callback",
			"jsonpCallback" : 'successCallback1',
			"data" : {},
			"success" : function(resultData) {
			    common.removeLoadWait();
				if (resultData.code == "400") {
				     justep.Util.hint(resultData.msg,{position: "bottom",type: 'success',delay:2000,style:'color: red;'});
					 return false;
				} else if (resultData.code == "300") {
				     justep.Util.hint(resultData.msg,{position: "bottom",type: 'success',delay:2000,style:'color: red;'});
					 return false;
				} else {
				     justep.Util.hint(resultData.msg,{position: "bottom",type: 'success',delay:3000,style:'color: #348b00;'});
				     common.removeLoadWait();
				     common.loadWait("正在跳转登录页，请稍后..");
				     setTimeout(function(){
		    		  common.toLogin();
		    		 }, 2000);
				}
				
			},
			"error" : function() {
				alert("请求错误");
				common.removeLoadWait();
			}
		});
	   
	};

	

	return Model;
});
