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
	this.__cid='cbInMvi';
	this._flag_='36bc46bf44f42824d4fea449c92804e5';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"address":{"define":"address","label":"地址","name":"address","relation":"address","type":"String"},"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"imgSrc":{"define":"imgSrc","label":"imgSrc","name":"imgSrc","relation":"imgSrc","type":"String"},"name":{"define":"name","label":"名称","name":"name","relation":"name","type":"String"},"tel":{"define":"tel","label":"电话","name":"tel","relation":"tel","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":\"1\",\"imgSrc\":\"./img/pic1.jpg\",\"name\":\"兑换商品名称1111\",\"address\":\"兑换商品一句话的简单描述\",\"tel\":\"兑换: 10积分\"},{\"id\":\"2\",\"imgSrc\":\"./img/pic2.jpg\",\"name\":\"兑换商品名称2222\",\"address\":\"兑换商品一句话的简单描述\",\"tel\":\"兑换: 80积分\"},{\"id\":\"3\",\"imgSrc\":\"./img/pic3.jpg\",\"name\":\"兑换商品名称33333\",\"address\":\"兑换商品一句话的简单描述\",\"tel\":\"兑换: 300积分\"},{\"id\":\"4\",\"imgSrc\":\"./img/pic4.jpg\",\"name\":\"兑换商品名称1111兑换商品名称1111\",\"address\":\"兑换商品一句话的简单描述\",\"tel\":\"兑换: 1000积分\"},{\"id\":\"5\",\"imgSrc\":\"./img/pic5.jpg\",\"name\":\"兑换商品名称11111231\",\"address\":\"兑换商品一句话的简单描述\",\"tel\":\"兑换: 99积分\"},{\"id\":\"6\",\"imgSrc\":\"./img/pic6.jpg\",\"name\":\"兑换商品名称1111\",\"address\":\"兑换商品一句话的简单描述\",\"tel\":\"兑换: 356积分\"},{\"id\":\"7\",\"imgSrc\":\"./img/pic7.jpg\",\"name\":\"兑换商品名称1111\",\"address\":\"兑换商品一句话的简单描述\",\"tel\":\"兑换: 700积分\"},{\"id\":\"8\",\"imgSrc\":\"./img/pic8.jpg\",\"name\":\"兑换商品名称1111\",\"address\":\"兑换商品一句话的简单描述\",\"tel\":\"兑换: 60积分\"},{\"id\":\"9\",\"imgSrc\":\"./img/pic9.jpg\",\"name\":\"兑换商品名称1111\",\"address\":\"兑换商品一句话的简单描述\",\"tel\":\"兑换: 40积分\"}]","isMain":false,"limit":20,"xid":"data"});
}}); 
return __result;});