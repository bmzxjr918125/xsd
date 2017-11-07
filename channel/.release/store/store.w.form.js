define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/xsd/channel/store'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cyEfuI3';
	this._flag_='a8994e32fd8f6b52f241cf07be8d8d7d';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"address":{"define":"address","label":"地址","name":"address","relation":"address","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"imgSrc":{"define":"imgSrc","label":"imgSrc","name":"imgSrc","relation":"imgSrc","type":"String"},"name":{"define":"name","label":"名称","name":"name","relation":"name","type":"String"},"tel":{"define":"tel","label":"电话","name":"tel","relation":"tel","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":\"1\",\"imgSrc\":\"./img/pic1.jpg\",\"name\":\"HappyMiss鲜花饼烘焙坊\",\"address\":\"五华区东风西路顺城购物中心负一楼\",\"tel\":\"0871-65811882\"},{\"id\":\"2\",\"imgSrc\":\"./img/pic2.jpg\",\"name\":\"莱茵家乐自助餐\",\"address\":\"五华区人民中路新西南商业大厦六楼 \",\"tel\":\"0871-65368687\"},{\"id\":\"3\",\"imgSrc\":\"./img/pic3.jpg\",\"name\":\"优私呆素食自助\",\"address\":\"五华区祥云街59号银佳大厦19楼\",\"tel\":\"0871-63389883\"},{\"id\":\"4\",\"imgSrc\":\"./img/pic4.jpg\",\"name\":\"城市花园\",\"address\":\"五华区正义路36号景星恒隆百货6楼\",\"tel\":\"0871-63633899\"},{\"id\":\"5\",\"imgSrc\":\"./img/pic5.jpg\",\"name\":\"莱莎公爵泰国海鲜火锅\",\"address\":\"五华区威远街168号金鹰B座6楼6-02、6-03\",\"tel\":\"0871-63104908/63161001\"},{\"id\":\"6\",\"imgSrc\":\"./img/pic6.jpg\",\"name\":\"芭堤雅泰国海鲜餐厅\",\"address\":\"五华区霖雨路101号\",\"tel\":\"0871-65123399\"},{\"id\":\"7\",\"imgSrc\":\"./img/pic7.jpg\",\"name\":\"莲泰泰国料理（正义坊店）\",\"address\":\"五华区正义路正义坊购物中心北馆3楼\",\"tel\":\"0871-68128899\"},{\"id\":\"8\",\"imgSrc\":\"./img/pic8.jpg\",\"name\":\"大哥笑自助烤肉\",\"address\":\"盘龙区人民东路196号（新文化宫美食广场B1楼）\",\"tel\":\"0871-63363537\"},{\"id\":\"9\",\"imgSrc\":\"./img/pic9.jpg\",\"name\":\"优昙逻树素食餐厅\",\"address\":\"盘龙区欣都龙城V.CPark购物中心1栋2楼汉堡王旁边 \",\"tel\":\"18287163511\"}]","isMain":false,"limit":20,"xid":"data"});
}}); 
return __result;});