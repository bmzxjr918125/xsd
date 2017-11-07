define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var common = require("$UI/xsd/js/common");
	require("css!./css/userLogin").load();
	var Model = function(){
		this.callParent();
	};
	
    /**
     *点击登录
     */
	Model.prototype.button1Click = function(event){
	    var phoneNumber = this.comp("phoneNumber").val();
	    var pwd = this.comp("pwd").val();
	    if(phoneNumber === null || phoneNumber.trim() === ""){
	       alert("请输入登录手机号");
	       return false;
	    }
	  if( !common.checkPhone(phoneNumber)){
	       return false;
	    }
	    if(pwd === null || pwd.trim() === ""){
	       alert("请输入登录密码");
	       return false;
	    }
	    common.loadWait("请稍后...");
		$.ajax({
			"type" : "get",
			"dataType" : "jsonp",
			"async" : false,
			"url" : common.apiUrl+"clientUserApiLogin?phoneNumber="+phoneNumber+"&pwd="+pwd,
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
				     common.toLogin();
					 return false;
				} else {
				     justep.Util.hint(resultData.msg,{position: "bottom",type: 'success',delay:2000,style:'color: #348b00;'});
				     common.toIndex();
				}
				
			},
			"error" : function() {
				alert("请求错误");
				common.removeLoadWait();
			}
		});
	   
	};
    //跳转注册页面
	Model.prototype.button2Click = function(event){
	     common.toRegister();
	};

	
    //跳转密码修改页面
	Model.prototype.button3Click = function(event){
		 common.toForgetSendCode();
	};

	

	return Model;
});
