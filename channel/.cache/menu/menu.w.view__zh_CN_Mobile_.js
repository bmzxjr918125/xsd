window.__justep.__ResourceEngine.loadCss([{url: '/UI2/v_4370bd2627ed4905868db34f3417ecaal_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/UI2/system/components/bootstrap/lib/css/bootstrap,$model/UI2/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/UI2/v_36fba694aff44100938c59b13fb7c862l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/UI2/system/components/justep/lib/css2/dataControl,$model/UI2/system/components/justep/input/css/datePickerPC,$model/UI2/system/components/justep/messageDialog/css/messageDialog,$model/UI2/system/components/justep/lib/css3/round,$model/UI2/system/components/justep/input/css/datePicker,$model/UI2/system/components/justep/row/css/row,$model/UI2/system/components/justep/attachment/css/attachment,$model/UI2/system/components/justep/barcode/css/barcodeImage,$model/UI2/system/components/bootstrap/dropdown/css/dropdown,$model/UI2/system/components/justep/dataTables/css/dataTables,$model/UI2/system/components/justep/contents/css/contents,$model/UI2/system/components/justep/common/css/forms,$model/UI2/system/components/justep/locker/css/locker,$model/UI2/system/components/justep/menu/css/menu,$model/UI2/system/components/justep/scrollView/css/scrollView,$model/UI2/system/components/justep/loadingBar/loadingBar,$model/UI2/system/components/justep/dialog/css/dialog,$model/UI2/system/components/justep/bar/css/bar,$model/UI2/system/components/justep/popMenu/css/popMenu,$model/UI2/system/components/justep/lib/css/icons,$model/UI2/system/components/justep/lib/css4/e-commerce,$model/UI2/system/components/justep/toolBar/css/toolBar,$model/UI2/system/components/justep/popOver/css/popOver,$model/UI2/system/components/justep/panel/css/panel,$model/UI2/system/components/bootstrap/carousel/css/carousel,$model/UI2/system/components/justep/wing/css/wing,$model/UI2/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/UI2/system/components/justep/titleBar/css/titleBar,$model/UI2/system/components/justep/lib/css1/linear,$model/UI2/system/components/justep/numberSelect/css/numberList,$model/UI2/system/components/justep/list/css/list,$model/UI2/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_0770b0db1071462f83aec21303e80be0l_zh_CNs_d_m/system/core.min.js','/v_f8f3dbdc700b460983558b30ad90b2ael_zh_CNs_d_m/system/common.min.js','/v_5ef13fc263f8479da0104d2cc164328el_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/list/list');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/xsd/channel/menu'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cBN73aq';
	this._flag_='1799c063df12653b09baece9267d91e3';
	this._wCfg_={};
	this._appCfg_={};
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"id":{"define":"id","label":"id","name":"id","relation":"id","type":"String"},"imgSrc":{"define":"imgSrc","label":"imgSrc","name":"imgSrc","relation":"imgSrc","type":"String"},"price":{"define":"price","label":"价格","name":"price","relation":"price","rules":{"number":true},"type":"Float"},"title":{"define":"title","label":"title","name":"title","relation":"title","type":"String"}},"directDelete":false,"events":{},"idColumn":"id","initData":"[{\"id\":\"1\",\"imgSrc\":\"./img/pic1.jpg\",\"title\":\"黑橄榄至尊披萨\",\"price\":85},{\"id\":\"2\",\"imgSrc\":\"./img/pic2.jpg\",\"title\":\"法式奶油焗薯蓉\",\"price\":63},{\"id\":\"3\",\"imgSrc\":\"./img/pic3.jpg\",\"title\":\"意大利培根芝士\",\"price\":52},{\"id\":\"4\",\"imgSrc\":\"./img/pic4.jpg\",\"title\":\"英式提拉米苏\",\"price\":33},{\"id\":\"5\",\"imgSrc\":\"./img/pic5.jpg\",\"title\":\"白灼芥兰\",\"price\":25},{\"id\":\"6\",\"imgSrc\":\"./img/pic6.jpg\",\"title\":\"高性能防水...\",\"price\":36},{\"id\":\"7\",\"imgSrc\":\"./img/pic7.jpg\",\"title\":\"双卡双待入门...\",\"price\":70},{\"id\":\"8\",\"imgSrc\":\"./img/pic8.jpg\",\"title\":\"iOS 7.1新增...\",\"price\":55},{\"id\":\"9\",\"imgSrc\":\"./img/pic9.jpg\",\"title\":\"1299之争 小...\",\"price\":100}]","isMain":false,"limit":20,"xid":"data"});
}}); 
return __result;});
