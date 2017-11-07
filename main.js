define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var common = require("$UI/xsd/js/common");
	var Model = function() {
		this.callParent();
	};

	//图片路径转换
	Model.prototype.getImageUrl = function(url){
		return require.toUrl(url);
	};
	
	//兑换
	Model.prototype.storeContentActive = function(event){
		this.loadContainer("storeContainer", "channel/store.html");
	};
	//个人中心
	Model.prototype.userContentActive = function(event){
		this.loadContainer("userContainer", "user/user.html");
	};
	Model.prototype.loadContainer = function(container, url){
		var container = this.comp(container);
		var src = container.get("src");
		if (src != url) {
			container.set({"src" : url});
			container.refresh();
		} 
	};
	
	//促销活动
	Model.prototype.openPageClick = function(event){
		var pageName = $(event.currentTarget).attr("pagename"); 
		justep.Shell.showPage(pageName);
	};
	
	//菜单详细
	Model.prototype.menuDetailedClick = function(event){
		justep.Shell.showPage("detailed");
	};
	//店铺详细
	Model.prototype.storeDetailedClick = function(event){		
		justep.Shell.showPage("detailed");
	};
	
	Model.prototype.button2Click = function(event){ 
		common.toNewsList();
	};

	Model.prototype.li2Click = function(event){
		 var newId = event.bindingContext.$object.val('id');
		 
		 common.toNewInfo(newId);
						
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
	
	return Model;
});