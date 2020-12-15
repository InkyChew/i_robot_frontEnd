(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["exhibit"],{"0462":function(e,t,s){"use strict";var r=s("15a8"),i=s.n(r);i.a},"15a8":function(e,t,s){},"2def":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"Exhibit"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("div",{staticClass:"exhibitForm"},[s("div",{staticClass:"asset mt-4"},[e._v(" 本金 : 10,000,000 元 ")]),s("div",{staticClass:"name mt-2 d-flex align-items-center"},[s("div",{staticClass:"mr-3"},[e._v("Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text"},domProps:{value:e.name},on:{blur:e.$v.name.$touch,input:function(t){t.target.composing||(e.name=t.target.value)}}}),e.$v.name.$error?s("div",[e.$v.name.required?e._e():s("div",{staticClass:"errMsg"},[e._v("Name is required")])]):e._e()]),s("div",{staticClass:"stopLossPoint mt-2"},[s("div",{staticClass:"d-flex align-items-center"},[s("div",{staticClass:"mr-3"},[e._v("設定停損點")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.stopLossPoint,expression:"stopLossPoint",modifiers:{number:!0}}],attrs:{type:"number",id:"stopLossPoint",name:"stopLossPoint",placeholder:"0-100"},domProps:{value:e.stopLossPoint},on:{blur:[e.$v.stopLossPoint.$touch,function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||(e.stopLossPoint=e._n(t.target.value))}}}),s("div",{staticClass:"ml-1"},[e._v("%")]),e.$v.stopLossPoint.$error?s("div",[e.$v.stopLossPoint.required?e._e():s("div",{staticClass:"errMsg"},[e._v("停損點 is required")]),e.$v.stopLossPoint.integer?e._e():s("div",{staticClass:"errMsg"},[e._v("停損點 should be integer")]),e.$v.stopLossPoint.between?e._e():s("div",{staticClass:"errMsg"},[e._v("停損點 should between 0-100")])]):e._e()])]),s("div",{staticClass:"stopEarnPoint mt-2"},[s("div",{staticClass:"d-flex align-items-center"},[s("div",{staticClass:"mr-3"},[e._v("設定停利點")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.stopEarnPoint,expression:"stopEarnPoint",modifiers:{number:!0}}],attrs:{type:"number",id:"stopEarnPoint",name:"stopEarnPoint",placeholder:"0-100"},domProps:{value:e.stopEarnPoint},on:{blur:[e.$v.stopEarnPoint.$touch,function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||(e.stopEarnPoint=e._n(t.target.value))}}}),s("div",{staticClass:"ml-1"},[e._v("%")]),e.$v.stopEarnPoint.$error?s("div",[e.$v.stopEarnPoint.required?e._e():s("div",{staticClass:"errMsg"},[e._v("停利點 is required")]),e.$v.stopEarnPoint.integer?e._e():s("div",{staticClass:"errMsg"},[e._v("停利點 should be integer")]),e.$v.stopEarnPoint.between?e._e():s("div",{staticClass:"errMsg"},[e._v("停利點 should between 0-100")])]):e._e()])]),s("div",{staticClass:"buyPercentage mt-2"},[s("div",{staticClass:"d-flex align-items-center"},[s("div",{staticClass:"mr-3"},[e._v("買入比例")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.buyPercentage,expression:"buyPercentage",modifiers:{number:!0}}],attrs:{type:"number",id:"buyPercentage",name:"buyPercentage",min:"4",max:"100",placeholder:"4-100"},domProps:{value:e.buyPercentage},on:{blur:[e.$v.buyPercentage.$touch,function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||(e.buyPercentage=e._n(t.target.value))}}}),s("div",{staticClass:"ml-1"},[e._v("%")]),e.$v.buyPercentage.$error?s("div",[e.$v.buyPercentage.required?e._e():s("div",{staticClass:"errMsg"},[e._v("買入比例 is required")]),e.$v.buyPercentage.integer?e._e():s("div",{staticClass:"errMsg"},[e._v("買入比例 should be integer")]),e.$v.buyPercentage.between?e._e():s("div",{staticClass:"errMsg"},[e._v("買入比例 should between 4-100")])]):e._e()])]),s("div",{staticClass:"sold mt-2"},[s("div",{staticClass:"d-flex align-items-center"},[s("div",{staticClass:"mr-3"},[e._v("賣出交易數")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:e.sold,expression:"sold",modifiers:{number:!0}}],attrs:{type:"number",id:"sold",name:"sold",min:"0",max:"10",placeholder:"0-10"},domProps:{value:e.sold},on:{blur:[e.$v.sold.$touch,function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||(e.sold=e._n(t.target.value))}}}),s("div",{staticClass:"ml-1"},[e._v("個")]),e.$v.sold.$error?s("div",[e.$v.sold.required?e._e():s("div",{staticClass:"errMsg"},[e._v("賣出交易數 is required")]),e.$v.sold.integer?e._e():s("div",{staticClass:"errMsg"},[e._v("賣出交易數 should be integer")]),e.$v.sold.between?e._e():s("div",{staticClass:"errMsg"},[e._v("賣出交易數 should between 0-100")])]):e._e()])]),s("div",{staticClass:"btn mt-3",on:{click:e.validateForm}},[e._v("送出")])]),s("hr"),s("div",{staticClass:"mt-3"},[s("div",{staticClass:"result d-flex"},[e._v(" 投資報酬率: "+e._s(e.ROI)+"% ")])])]),s("div",{staticClass:"exhibitRank col-6"},[s("div",{staticClass:"title text-center mt-2"},[e._v("排行榜")]),s("div",{staticClass:"tScroll"},[s("table",{staticClass:"table"},[e._m(0),s("tbody",[e._l(e.ranks,(function(t,r){return[s("tr",{key:r},[s("th",{attrs:{scope:"row"}},[e._v(e._s(r+1))]),s("td",[e._v(e._s(t.name))]),s("td",[e._v(e._s(t.rate)+"%")])])]}))],2)])])])])])])},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[e._v("#")]),s("th",{attrs:{scope:"col"}},[e._v("Name")]),s("th",{attrs:{scope:"col"}},[e._v("報酬率")])])])}],n=(s("b0c0"),s("96cf"),s("1da1")),a=s("5194"),o=s("b5ae"),l={name:"Exhibit",data:function(){return{name:"",stopLossPoint:null,stopEarnPoint:null,buyPercentage:null,sold:null,ROI:0,ranks:null}},validations:{name:{required:o["required"]},stopLossPoint:{required:o["required"],integer:o["integer"],between:Object(o["between"])(0,100)},stopEarnPoint:{required:o["required"],integer:o["integer"],between:Object(o["between"])(0,100)},buyPercentage:{required:o["required"],integer:o["integer"],between:Object(o["between"])(4,100)},sold:{required:o["required"],integer:o["integer"],between:Object(o["between"])(0,10)}},methods:{validateForm:function(){this.$v.$touch(),this.$v.$anyError?this.$alertMsg("輸入資料格式有誤"):this.sendExhibitForm()},sendExhibitForm:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=a["a"].postExhibitForm,t.prev=1,e.$apiLoading(!0),r={name:e.name,loss:e.stopLossPoint,profit:e.stopEarnPoint,buy:e.buyPercentage,sell:e.sold},t.next=6,s(r);case 6:i=t.sent,e.ROI=i.data.total_profit_rate,e.name="",e.getRank(),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](1),e.$err({err:t.t0});case 15:return t.prev=15,e.$apiLoading(!1),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[1,12,15,18]])})))()},getRank:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=a["a"].getExhibitRank,t.prev=1,t.next=4,s();case 4:r=t.sent,e.ranks=JSON.parse(r.data.exhibit_rank),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),e.$err({err:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()}},mounted:function(){this.getRank()}},c=l,d=(s("0462"),s("2877")),u=Object(d["a"])(c,r,i,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=exhibit.1aa8fe52.js.map