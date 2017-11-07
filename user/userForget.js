define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var common = require("$UI/xsd/js/common");
	var Model = function(){
		this.callParent();
	};
    //重置密码提交
	Model.prototype.forgetSubmitClick = function(event){
	    var newPwd = this.comp("newPwd").val();
	    var newPwdAgin = this.comp("newPwdAgin").val();
	   
	    if(newPwd === null || newPwd.trim() === ""){
	       alert("请输入新登录密码");
	       return false;
	    }
	    if(newPwdAgin === null || newPwdAgin.trim() === ""){
	    	alert("请再次输入新登录密码");
	    	return false;
	    }
	    if(newPwdAgin !== newPwd){
	    	alert("请确认两次输入登录密码一致");
	    	return false;
	    }
	    common.loadWait("请稍后...");
		$.ajax({
			"type" : "get",
			"dataType" : "jsonp",
			"async" : false,
			"url" : common.apiUrl+"clientUserApiUpdatePwd?newPwd="+newPwd+"&newPwdAgin="+newPwdAgin,
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
