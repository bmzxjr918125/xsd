define(function(require){
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