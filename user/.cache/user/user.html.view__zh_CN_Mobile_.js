window.__justep.__ResourceEngine.loadCss([{url: '/UI2/v_5cb4516c841e49839720abe75fe20f96l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/UI2/system/components/bootstrap/lib/css/bootstrap,$model/UI2/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/UI2/v_387fa88417ed4b62a1b9e52cac58a6dcl_zh_CNs_d_m/system/components/comp.min.css', include: '$model/UI2/system/components/justep/lib/css2/dataControl,$model/UI2/system/components/justep/input/css/datePickerPC,$model/UI2/system/components/justep/messageDialog/css/messageDialog,$model/UI2/system/components/justep/lib/css3/round,$model/UI2/system/components/justep/input/css/datePicker,$model/UI2/system/components/justep/row/css/row,$model/UI2/system/components/justep/attachment/css/attachment,$model/UI2/system/components/justep/barcode/css/barcodeImage,$model/UI2/system/components/bootstrap/dropdown/css/dropdown,$model/UI2/system/components/justep/dataTables/css/dataTables,$model/UI2/system/components/justep/contents/css/contents,$model/UI2/system/components/justep/common/css/forms,$model/UI2/system/components/justep/locker/css/locker,$model/UI2/system/components/justep/menu/css/menu,$model/UI2/system/components/justep/scrollView/css/scrollView,$model/UI2/system/components/justep/loadingBar/loadingBar,$model/UI2/system/components/justep/dialog/css/dialog,$model/UI2/system/components/justep/bar/css/bar,$model/UI2/system/components/justep/popMenu/css/popMenu,$model/UI2/system/components/justep/lib/css/icons,$model/UI2/system/components/justep/lib/css4/e-commerce,$model/UI2/system/components/justep/toolBar/css/toolBar,$model/UI2/system/components/justep/popOver/css/popOver,$model/UI2/system/components/justep/panel/css/panel,$model/UI2/system/components/bootstrap/carousel/css/carousel,$model/UI2/system/components/justep/wing/css/wing,$model/UI2/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/UI2/system/components/justep/titleBar/css/titleBar,$model/UI2/system/components/justep/lib/css1/linear,$model/UI2/system/components/justep/numberSelect/css/numberList,$model/UI2/system/components/justep/list/css/list,$model/UI2/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_52d58e3d533f422f9e34b26f85c2cf22l_zh_CNs_d_m/system/core.min.js','/v_6bcc843cd86a458cb68dc93efd96cbbcl_zh_CNs_d_m/system/common.min.js','/v_6b28bb523084481ca6f47b6dfefdfdf5l_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/scrollView/scrollView');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/xsd/user/user'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cBFjemi';
	this._flag_='253d32e3a3ca25f3bd4433cd935a94d8';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"checkStatus":{"define":"checkStatus","label":"认证状态","name":"checkStatus","relation":"checkStatus","rules":{"integer":true},"type":"Integer"},"checkStatusDesc":{"define":"checkStatusDesc","label":"认证状态描述","name":"checkStatusDesc","relation":"checkStatusDesc","type":"String"},"grade":{"define":"grade","label":"等级","name":"grade","relation":"grade","type":"String"},"gradeDesc":{"define":"gradeDesc","label":"等级描述","name":"gradeDesc","relation":"gradeDesc","type":"String"},"id":{"define":"id","label":"用户id","name":"id","relation":"id","rules":{"integer":true},"type":"Integer"},"img":{"define":"img","label":"头像路径","name":"img","relation":"img","type":"String"},"integral":{"define":"integral","label":"积分","name":"integral","relation":"integral","rules":{"number":true},"type":"Float"},"myCode":{"define":"myCode","label":"推荐码","name":"myCode","relation":"myCode","type":"String"},"nickName":{"define":"nickName","label":"昵称","name":"nickName","relation":"nickName","type":"String"}},"directDelete":false,"events":{"onCreate":"userDataCreate"},"idColumn":"id","initData":"[{\"id\":0,\"img\":\"img/profile.png\",\"nickName\":\"登录/注册\",\"gradeDesc\":\"无\",\"grade\":\"无\",\"integral\":0,\"myCode\":\"0000\",\"checkStatusDesc\":\"0\",\"checkStatus\":0}]","isMain":false,"limit":20,"xid":"userData"});
}}); 
return __result;});
