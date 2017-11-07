define(function(require) {
	    require("$UI/xsd/js/jquery.cookie");
	    
        var addCookie = function(phone){
        	jQuery.cookie('sxdlogin',phone,{ expires: 1 }); 
	    };
	    var delCookie = function(){
	    	jQuery.cookie('sxdlogin', null); 
	    };
	    var getCookie = function(){
	    	return jQuery.cookie('sxdlogin');
	    };
	    
	    var loginFlag = function(){
	    	
	    	if(getCookie() === null){
	    		return false;
	    	}else{
	    		return true;
	    	}
	    };
	   
		var checkPhone = function(phone) {
			var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
			if (!reg.test(phone)) {
				alert("手机号码格式不正确，请重新输入");
				return false;
			}
			return true;
		};
		var loadWait = function(msg){//数据加载或页面跳转等待的遮挡层 打开（gif图片）
			jQuery(".loadWait").remove();
			var divcss = "style='width:100%;height:100%;position:fixed;background-color:#000;opacity:0.3;top: 0;left: 0;text-align:center;z-index:99999;'";
			var div = "<div id='loadWaitId' class='loadWait' align='center' " + divcss+">" +
						 "<div class='load-container load8'>"+
						    "<div class='loader'></div>"+
						    "<div>"+msg+"</div>"+
					     "</div>" +
				      "</div>";
			//var loadWait = jQuery(".loadWait");
			jQuery("body").append(div);
			jQuery(".load-container").css("margin-top", jQuery(".loadWait").height() /2);
			jQuery(".loadWait").css("display", "block");
		};
		var removeLoadWait = function(){//数据加载或页面跳转等待的遮挡层  关闭
			setTimeout(function(){
				jQuery(".loadWait").remove();
			},200);
          };
        var timeChange = function(btnObj){
        	var mili = 60;
    		var codeIn = setInterval(function(){
    		  mili--;
    		  if(mili === 0){
    		      $(btnObj).attr("disabled",false);
    		      $(btnObj).text("获取短信验证码");
    		      clearInterval(codeIn);
    		  }else{
    		      $(btnObj).attr("disabled",true);
    		      $(btnObj).text(mili+"秒后可再次发送");
    		  }
    		}, 1000);
        }; 
        var toLogin = function(){
        	location.href = require.toUrl("$UI/xsd/user/userLogin.html");
        };
        var toIndex = function(){
        	location.href = require.toUrl("$UI/xsd/user/index.html");
        };
        var toUserEdit = function(){
        	location.href = require.toUrl("$UI/xsd/user/userEdit.html");
        };
        var toUserClub = function(){
        	location.href = require.toUrl("$UI/xsd/user/userClub.html");
        };
        var toIntegral = function(){
        	location.href = require.toUrl("$UI/xsd/user/integral.html");
        };
        var toUserCheck = function(){
        	location.href = require.toUrl("$UI/xsd/user/userCheck.html");
        };
        var toRegister = function(){
        	location.href = require.toUrl("$UI/xsd/user/userRegister.html");
        };
        var toForgetSendCode = function(){
        	location.href = require.toUrl("$UI/xsd/user/userForgetSendCode.html");
        };
        var toForget = function(){
        	location.href = require.toUrl("$UI/xsd/user/userForget.html");
        };
        var toNewsList = function(){
        	location.href = require.toUrl("$UI/xsd/user/newsList.html");
        };
        var toNewInfo = function(newId){
        	location.href = require.toUrl("$UI/xsd/user/newInfo.html?newId="+newId);
        };
        var toUserCheckAdd = function(){
        	location.href = require.toUrl("$UI/xsd/user/addUserCheck.html");
        };
	 return {
		 loginFlag : loginFlag,
		 checkPhone : checkPhone,
		 apiUrl  : "http://192.168.0.103:8080/cxjms/tmu/apiv1/",
		 loadWait : loadWait,
		 removeLoadWait : removeLoadWait,
		 timeChange : timeChange,
		 toLogin : toLogin ,
		 toIndex : toIndex ,
		 toUserEdit : toUserEdit,
		 toUserClub : toUserClub,
		 toIntegral : toIntegral,
		 toUserCheck : toUserCheck,
		 toRegister : toRegister,
		 toForgetSendCode : toForgetSendCode,
		 toForget : toForget,
		 toNewsList : toNewsList,
		 toNewInfo : toNewInfo,
		 toUserCheckAdd : toUserCheckAdd
		 
	 };
});
