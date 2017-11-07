define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var common = require("$UI/xsd/js/common");
	var Model = function(){
		this.callParent();
	};

	
	//图片路径转换
	Model.prototype.getImageUrl = function(url){
		return require.toUrl(url);
	};
	
	Model.prototype.newsDataCustomRefresh = function(event){
		//1、加载新闻数据
		 var perPageNum  = event.limit;
		var newsData = event.source;
		$.ajax({
			"type" : "get",
			"dataType" : "jsonp",
			"async" : false,
			"url" : common.apiUrl+"clientUserApiGetNewList?perPageNum="+perPageNum,
			"jsonp" : "callback",
			"jsonpCallback" : 'successCallback',
			"data" : {},
			"success" : function(resultData) {
				if (resultData.code == "400") {
				    justep.Util.hint(resultData.msg,{position: "bottom",type: 'success',delay:2000,style:'color: red;'});
					return false;
				} else if (resultData.code == "300") {
				     common.toLogin();
					 return false;
				}else{
				  newsData.loadData(resultData.result.newList);
				}
			},
			"error" : function() {
				alert("请求错误");
			}
		});
	};
	Model.prototype.getTitle = function(title) {
		return title.length>10 ? title.substring(0,10) : title;
	};
	Model.prototype.getContent = function(content) {
		return content.length>85 ? content.substring(0,35): content;
	};
	

	

	Model.prototype.userInfoClick = function(event){
	 if(common.loginFlag === true){
		 common.toUserEdit();
	 }else{
		  common.toLogin();
	 }
	};
	 
	
    //下拉刷新页面
	Model.prototype.scrollView1PullDown = function(event){
		location.reload();
	};


	Model.prototype.clubClick = function(event){
		common.toUserClub();
	};

	Model.prototype.integralClick = function(event){
      common.toIntegral();
	};

	Model.prototype.authenLiClick = function(event){
	   var userData = this.comp("userData");
	   var checkStatus = userData.getValue('checkStatus');
	   if(checkStatus !== 0){
		   common.toUserCheck();
	   }else {
	       common.toUserCheckAdd();
	   }
	};

	Model.prototype.button2Click = function(event){ 
		common.toNewsList();
	};

	Model.prototype.li2Click = function(event){
		 var newId = event.bindingContext.$object.val('id');
		 
		 common.toNewInfo(newId);
						
	};

	



	

	



	

	Model.prototype.userDataCreate = function(event){
	if(common.loginFlag === true){
		 var userData = event.source;
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
				}
			},
			"error" : function() {
				alert("请求错误");
			}
		});
	}
	   
	};

	



	

	



	

	return Model;
});
