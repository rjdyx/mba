(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e9b7ce7"],{"1dde":function(o,t,s){var e=s("d039"),i=s("b622"),a=s("60ae"),n=i("species");o.exports=function(o){return a>=51||!e((function(){var t=[],s=t.constructor={};return s[n]=function(){return{foo:1}},1!==t[o](Boolean).foo}))}},"7abe":function(o,t,s){"use strict";s.r(t);var e=function(){var o=this,t=o.$createElement,s=o._self._c||t;return s("div",{attrs:{id:"home"}},[s("van-sticky",[s("van-search",{attrs:{placeholder:"请输入搜索关键词",background:"#6e7bd8","show-action":""},on:{focus:o.showSelect},model:{value:o.value,callback:function(t){o.value=t},expression:"value"}},[s("div",{attrs:{slot:"action"},on:{click:o.onSearch},slot:"action"},[s("span",{directives:[{name:"show",rawName:"v-show",value:o.showList,expression:"showList"}],staticClass:"search-btn"},[o._v(" 搜索 ")]),s("span",{directives:[{name:"show",rawName:"v-show",value:!o.showList,expression:"!showList"}],staticClass:"search-btn"},[o._v(" 取消 ")])])])],1),s("transition",{attrs:{name:"fade"}},[s("div",{staticClass:"sort-choose"},[s("div",{staticClass:"van-hairline--bottom"},[s("van-row",{directives:[{name:"show",rawName:"v-show",value:o.showList,expression:"showList"}],staticClass:"sort-row"},[s("van-col",{staticClass:"sort-item",attrs:{span:"6"},on:{click:function(t){return o.sortList(0)}}},[o._v(" 新品 "),s("van-icon",{directives:[{name:"show",rawName:"v-show",value:0===o.showArrowIndex,expression:"showArrowIndex === 0"}],attrs:{name:"arrow-"+o.sortArrow}})],1),s("van-col",{staticClass:"sort-item",attrs:{span:"6"},on:{click:function(t){return o.sortList(1)}}},[o._v(" 名称 "),s("van-icon",{directives:[{name:"show",rawName:"v-show",value:1===o.showArrowIndex,expression:"showArrowIndex === 1"}],attrs:{name:"arrow-"+o.sortArrow}})],1),s("van-col",{staticClass:"sort-item",attrs:{span:"6"},on:{click:function(t){return o.sortList(2)}}},[o._v(" 数量 "),s("van-icon",{directives:[{name:"show",rawName:"v-show",value:2===o.showArrowIndex,expression:"showArrowIndex === 2"}],attrs:{name:"arrow-"+o.sortArrow}})],1),s("van-col",{staticClass:"sort-item",attrs:{span:"6"},on:{click:function(t){return o.sortList(3)}}},[o._v(" 价钱 "),s("van-icon",{directives:[{name:"show",rawName:"v-show",value:3===o.showArrowIndex,expression:"showArrowIndex === 3"}],attrs:{name:"arrow-"+o.sortArrow}})],1)],1)],1),s("van-row",{directives:[{name:"show",rawName:"v-show",value:o.choose&&o.showList,expression:"choose && showList"}],staticClass:"choose-row"},[s("van-col",{staticClass:"choose-tag",attrs:{span:"20"}},[o._v(" 已选分类："),s("van-tag",{attrs:{plain:""}},[o._v(o._s(o.choose))])],1),s("van-col",{staticClass:"choose-close",attrs:{span:"4"},on:{click:function(t){o.choose=""}}},[s("van-icon",{attrs:{name:"close"}})],1)],1)],1)]),s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:!o.showList,expression:"!showList"}]},[s("div",{attrs:{id:"select-choose"}},[o._v("选择分类搜索")]),o._l(2,(function(t){return s("van-row",{key:t,staticClass:"select-list"},o._l(3,(function(e){return s("van-col",{key:e,class:{"van-hairline--right":3!==e,"select-item":!0},attrs:{span:"8"},on:{click:function(s){o.chooseSelect(3*(t-1)+e)}}},[o._v(" 分类"+o._s(3*(t-1)+e)+" ")])})),1)}))],2)]),s("transition-group",{attrs:{name:"fade"}},[s("van-list",{directives:[{name:"show",rawName:"v-show",value:o.showList,expression:"showList"}],key:"list-key",staticClass:"list-model",attrs:{finished:o.finished,"finished-text":"没有更多了"},on:{load:o.onLoad},model:{value:o.loading,callback:function(t){o.loading=t},expression:"loading"}},o._l(o.list,(function(t,e){return s("div",{key:e,staticClass:"list-item van-hairline--bottom"},[s("van-row",{staticClass:"list-item-row"},[s("van-col",{staticClass:"list-item-title van-multi-ellipsis--l2",attrs:{span:"16"},on:{click:function(t){return o.showGoodsDetail(e)}}},[o._v(" "+o._s(t.title)+" ")]),s("van-col",{staticClass:"list-item-num",attrs:{span:"4"}},[s("div",{staticClass:"van-ellipsis"},[o._v("剩:"+o._s(t.left))]),o.showPrice?s("div",{staticClass:"van-ellipsis"},[o._v("￥ "+o._s(t.price))]):o._e()]),s("van-col",{staticClass:"shopping-cart-btn",attrs:{span:"4"}},[s("van-button",{attrs:{plain:"",hairline:"",color:"#46b8da",icon:"shopping-cart-o"}})],1)],1)],1)})),0),s("van-tabbar",{directives:[{name:"show",rawName:"v-show",value:o.showList,expression:"showList"}],key:"tabbar-key",attrs:{id:"tabbar","active-color":"#6e7bd8"},on:{change:o.onChange},model:{value:o.active,callback:function(t){o.active=t},expression:"active"}},[s("van-tabbar-item",{attrs:{name:"home",icon:"home-o"}},[o._v("新品")]),s("van-tabbar-item",{attrs:{name:"code",icon:"coupon-o"}},[o._v("授权码")]),s("van-tabbar-item",{attrs:{name:"delivery",icon:"logistics"}},[o._v("快递")]),s("van-tabbar-item",{attrs:{name:"shoppingCart",icon:"cart-o"}},[o._v("购物车")])],1)],1),s("van-popup",{staticClass:"overlay-model",on:{close:o.hideOverlay},model:{value:o.showOverlay,callback:function(t){o.showOverlay=t},expression:"showOverlay"}},[s("van-image",{staticClass:"goods-image",attrs:{src:o.overlayObj.src},scopedSlots:o._u([{key:"loading",fn:function(){return[s("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0}])}),s("div",{staticClass:"overlay-title van-hairline--bottom",on:{click:function(o){o.stopPropagation()}}},[o._v(" "+o._s(o.overlayObj.title)),s("span",{staticClass:"overlay-price"},[o._v("￥ "+o._s(o.overlayObj.price))])]),s("div",{staticClass:"description",on:{click:function(o){o.stopPropagation()}}},[o._v(" "+o._s(o.overlayObj.description)+" ")])],1),s("van-popup",{staticClass:"code-model",on:{open:function(t){o.codeValue=""},close:o.resectCodeModel},model:{value:o.showCode,callback:function(t){o.showCode=t},expression:"showCode"}},[s("div",{staticClass:"password-input-model van-hairline--surround"},[s("van-password-input",{attrs:{value:o.codeValue,mask:!1,length:6,focused:!0},on:{focus:function(t){o.showKeyboard=!0}}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:!o.codeValidate,expression:"!codeValidate"}],staticClass:"code-tip"},[o._v(o._s(o.codeTip))]),s("van-loading",{directives:[{name:"show",rawName:"v-show",value:o.codeValidate,expression:"codeValidate"}],staticClass:"code-tip",attrs:{size:"24px"}},[o._v("验证中...")])],1),s("van-number-keyboard",{attrs:{show:o.showKeyboard,"z-index":3e3,"safe-area-inset-bottom":""},on:{input:o.onInput,delete:o.onDelete,blur:function(t){o.showKeyboard=!1}}})],1)},i=[],a=(s("fb6a"),{name:"home",data:function(){return{showList:!0,showOverlay:!1,showCode:!1,showKeyboard:!1,choose:"",value:"",codeValue:"",active:"home",list:[],loading:!1,finished:!1,codeValidate:!1,codeTip:"授权码",showPrice:!1,overlayObj:{id:"",src:"",price:"",title:"",description:"",count:0,left:0},sortArrow:"down",showArrowIndex:-1}},methods:{onSearch:function(){this.showList||(this.showList=!0)},sortList:function(o){this.showArrowIndex===o?this.sortArrow="up"===this.sortArrow?"down":"up":(this.showArrowIndex=o,this.sortArrow="down")},chooseSelect:function(o){this.showList=!0,this.choose="分类"+o},onLoad:function(){var o=this,t=[{id:"goods1",src:"http://daji.runcon.cn/_upload/file/2019/07/2019070916284566272878.jpg",price:"1",title:"高丽雅娜 肉毒去纹眼霜 送按摩仪 【授】【一般贸易】",description:"【产品介绍：去黑眼圈 淡化细纹 淡化黑眼圈 滋润紧致 改善眼部暗沉 半透明乳霜质地 延展性好 滋润度高 无惧时光，让眼周肌肤就此冻龄】",count:1,left:10},{id:"goods2",src:"http://daji.runcon.cn/_upload/file/2019/07/2019070916293813669308.jpg",price:"2",title:"高丽雅娜 SHO 7天涂抹式肉毒杆菌安瓶精华 【授】【一般贸易】",description:"淘宝控价价格为【259】  上架最低零售价为【139】【产品介绍：水油平衡  改善皱纹  细致毛孔  修护舒缓  提亮肤色  改善面色 肌肤通透润泽  补水保湿  赋予活力  8大植物成分  滴滴精粹】",count:1,left:10},{id:"goods3",src:"http://daji.runcon.cn/_upload/file/2019/06/2019061815140404520333.jpg",price:"3",title:"香蒲丽海洋水光眼膜 60片/盒 绿色 【授】【一般贸易】",description:"【产品介绍：镇定舒缓，补水紧致，消除浮肿，润泽保湿，去黑眼圈，珍贵深海植萃，天然赋活】",count:1,left:10},{id:"goods4",src:"http://daji.runcon.cn/_upload/file/2019/07/2019070916304395167195.jpg",price:"4",title:"香蒲丽 黄金水光面膜凝胶 金色补水淡斑排毒 新版防伪",description:"【产品介绍：紧致肌肤 修复细纹 补充胶原蛋白 质地柔软 贴合五官 营养完整吸收 提拉亮肤 高倍浓缩成分，维持肌肤年轻状态】",count:1,left:10},{id:"goods5",src:"http://daji.runcon.cn/_upload/file/2019/07/2019070916314008269196.jpg",price:"5",title:"香蒲丽 绿色眼膜",description:"【产品介绍：淡黑眼圈 缓解水肿 温和低敏 改善细纹 密集补水修复 提拉紧致 改善油腻 补水去干纹 黄金凝胶质地 易吸收 不粘腻 珍贵深渊植萃，天然赋活】",count:1,left:10},{id:"goods6",src:"http://daji.runcon.cn/_upload/file/2019/09/2019092214171071182246.jpg",price:"6",title:"香港科士威浪漫身体乳润肤乳 200ml 【一般贸易】",description:"【产品介绍：补水保湿 细腻肌肤 修护肌肤 滋润 持久留香 白色乳液质地 轻薄柔软 不油腻 易推开 吸收快】",count:1,left:10},{id:"goods7",src:"http://daji.runcon.cn/_upload/file/2019/07/2019072917344185429279.jpg",price:"7",title:"飞利浦 5060 剃须刀",description:"【产品介绍：干湿双剃 顺滑3刀头 30分钏续航 一机多用 深层防水设计 可直接冲洗 持久耐用】",count:1,left:10}];setTimeout((function(){o.list.push.apply(o.list,t),o.loading=!1,o.finished=!0}),500)},showSelect:function(){this.showList=!1},showGoodsDetail:function(o){this.showOverlay=!0,Object.assign(this.overlayObj,this.list[o])},hideOverlay:function(){this.showOverlay=!1,this.overlayObj.src=""},resectCodeModel:function(){this.active="home",this.codeValue="",this.showCode=!1,this.showKeyboard=!1,this.codeTip="授权码"},onInput:function(o){var t=this;this.codeValue=(this.codeValue+o).slice(0,6),6===this.codeValue.length&&(this.codeValidate=!0,setTimeout((function(){6===t.codeValue.length?(t.showCode=!1,setTimeout((function(){t.$toast("验证成功"),t.showPrice=!0}),500)):(t.codeValue="",t.codeTip="授权码无效"),t.codeValidate=!1}),1500))},onDelete:function(){this.codeValue=this.codeValue.slice(0,this.codeValue.length-1)},onChange:function(o){switch(o){case"code":this.showCode=!0,this.showKeyboard=!0;break;case"delivery":case"shoppingCart":this.$router.push("/"+o);break}}},watch:{showOverlay:function(o){document.body.style.overflow=o?"hidden":"auto"},showCode:function(o){document.body.style.overflow=o?"hidden":"auto"}}}),n=a,r=(s("958c"),s("2877")),c=Object(r["a"])(n,e,i,!1,null,null,null);t["default"]=c.exports},"818b":function(o,t,s){},8418:function(o,t,s){"use strict";var e=s("c04e"),i=s("9bf2"),a=s("5c6c");o.exports=function(o,t,s){var n=e(t);n in o?i.f(o,n,a(0,s)):o[n]=s}},"958c":function(o,t,s){"use strict";var e=s("818b"),i=s.n(e);i.a},fb6a:function(o,t,s){"use strict";var e=s("23e7"),i=s("861d"),a=s("e8b5"),n=s("23cb"),r=s("50c4"),c=s("fc6a"),l=s("8418"),d=s("1dde"),h=s("b622"),v=h("species"),u=[].slice,w=Math.max;e({target:"Array",proto:!0,forced:!d("slice")},{slice:function(o,t){var s,e,d,h=c(this),p=r(h.length),f=n(o,p),m=n(void 0===t?p:t,p);if(a(h)&&(s=h.constructor,"function"!=typeof s||s!==Array&&!a(s.prototype)?i(s)&&(s=s[v],null===s&&(s=void 0)):s=void 0,s===Array||void 0===s))return u.call(h,f,m);for(e=new(void 0===s?Array:s)(w(m-f,0)),d=0;f<m;f++,d++)f in h&&l(e,d,h[f]);return e.length=d,e}})}}]);
//# sourceMappingURL=chunk-2e9b7ce7.783abdd3.js.map