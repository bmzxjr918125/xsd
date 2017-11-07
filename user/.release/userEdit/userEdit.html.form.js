define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/distpicker/districtSelect');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/distpicker/provinceSelect');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/row/row');
require('$model/UI2/system/components/justep/select/select');
require('$model/UI2/system/components/justep/distpicker/distpicker');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/distpicker/citySelect');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/xsd/user/userEdit'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cU7ruee';
	this._flag_='882fdd391578d881ce101f7a3dc2abec';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"name":{"define":"name","label":"选项名称","name":"name","relation":"name","type":"String"},"value":{"define":"value","label":"选中值","name":"value","relation":"value","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{},"idColumn":"value","initData":"[{\"value\":1,\"name\":\"男\"},{\"value\":2,\"name\":\"女\"},{\"value\":3,\"name\":\"其它\"}]","isMain":false,"limit":20,"xid":"sexData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","name":"id","relation":"id","type":"String"},"img":{"define":"img","name":"img","relation":"img","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","isMain":false,"limit":20,"xid":"imgData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"col0":{"define":"col0","name":"col0","relation":"col0","type":"String"},"col1":{"define":"col1","name":"col1","relation":"col1","type":"String"},"col2":{"define":"col2","name":"col2","relation":"col2","type":"String"}},"directDelete":false,"events":{},"idColumn":"col0","initData":"[{\"col0\":\"\",\"col1\":\"\",\"col2\":\"\"}]","isMain":false,"limit":20,"xid":"addressData"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"address":{"define":"address","name":"address","relation":"address","type":"String"},"checkStatus":{"define":"checkStatus","label":"认证状态","name":"checkStatus","relation":"checkStatus","rules":{"integer":true},"type":"Integer"},"checkStatusDesc":{"define":"checkStatusDesc","label":"认证状态描述","name":"checkStatusDesc","relation":"checkStatusDesc","type":"String"},"grade":{"define":"grade","label":"等级","name":"grade","relation":"grade","type":"String"},"gradeDesc":{"define":"gradeDesc","label":"等级描述","name":"gradeDesc","relation":"gradeDesc","type":"String"},"id":{"define":"id","label":"用户id","name":"id","relation":"id","rules":{"integer":true},"type":"Integer"},"img":{"define":"img","label":"头像路径","name":"img","relation":"img","type":"String"},"integral":{"define":"integral","label":"积分","name":"integral","relation":"integral","rules":{"number":true},"type":"Float"},"myCode":{"define":"myCode","label":"推荐码","name":"myCode","relation":"myCode","type":"String"},"nickName":{"define":"nickName","label":"昵称","name":"nickName","relation":"nickName","type":"String"},"profession":{"define":"profession","name":"profession","relation":"profession","type":"String"},"sexDesc":{"define":"sexDesc","name":"sexDesc","relation":"sexDesc","type":"String"},"sexId":{"define":"sexId","name":"sexId","relation":"sexId","rules":{"integer":true},"type":"Integer"}},"directDelete":false,"events":{"onCustomRefresh":"userDataCustomRefresh"},"idColumn":"id","isMain":false,"limit":20,"xid":"userData"});
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
}}); 
return __result;});