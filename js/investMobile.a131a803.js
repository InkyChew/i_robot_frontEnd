(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["investMobile"],{5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var a=s("1d80"),i=s("5899"),n="["+i+"]",r=RegExp("^"+n+n+"*"),o=RegExp(n+n+"*$"),c=function(t){return function(e){var s=String(a(e));return 1&t&&(s=s.replace(r,"")),2&t&&(s=s.replace(o,"")),s}};t.exports={start:c(1),end:c(2),trim:c(3)}},"6a5d":function(t,e,s){},7156:function(t,e,s){var a=s("861d"),i=s("d2bb");t.exports=function(t,e,s){var n,r;return i&&"function"==typeof(n=e.constructor)&&n!==s&&a(r=n.prototype)&&r!==s.prototype&&i(t,r),t}},a9e3:function(t,e,s){"use strict";var a=s("83ab"),i=s("da84"),n=s("94ca"),r=s("6eeb"),o=s("5135"),c=s("c6b6"),l=s("7156"),u=s("c04e"),p=s("d039"),d=s("7c73"),v=s("241c").f,m=s("06cf").f,f=s("9bf2").f,b=s("58a8").trim,g="Number",x=i[g],_=x.prototype,h=c(d(_))==g,C=function(t){var e,s,a,i,n,r,o,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=b(l),e=l.charCodeAt(0),43===e||45===e){if(s=l.charCodeAt(2),88===s||120===s)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+l}for(n=l.slice(2),r=n.length,o=0;o<r;o++)if(c=n.charCodeAt(o),c<48||c>i)return NaN;return parseInt(n,a)}return+l};if(n(g,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var N,I=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof I&&(h?p((function(){_.valueOf.call(s)})):c(s)!=g)?l(new x(C(e)),s,I):C(e)},y=a?v(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;y.length>A;A++)o(x,N=y[A])&&!o(I,N)&&f(I,N,m(x,N));I.prototype=_,_.constructor=I,r(i,g,I)}},b35d:function(t,e,s){"use strict";var a=s("6a5d"),i=s.n(a);i.a},bb2b:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"investMobile"},[s("div",{staticClass:"container"},[s("div",{staticClass:"capital my-2"},[s("div",{staticClass:"mb-1"},[t._v("用愛發財總資本額: "+t._s(t.totalAssets))]),s("div",[t._v("增加資本額")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputAssets,expression:"inputAssets"}],attrs:{type:"text"},domProps:{value:t.inputAssets},on:{input:function(e){e.target.composing||(t.inputAssets=e.target.value)}}}),s("div",{staticClass:"mt-1"},[t._v(" 可分配報酬率: "+t._s(t.PayoutRatio)+" % ")])]),s("div",{staticClass:"stopLossPoint mb-2"},[s("div",[t._v("設定停損點")]),s("div",{staticClass:"d-flex align-items-center"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.stopLossPoint,expression:"stopLossPoint"}],attrs:{type:"number",id:"stopLossPoint",name:"stopLossPoint",min:"5",max:"15"},domProps:{value:t.stopLossPoint},on:{input:function(e){e.target.composing||(t.stopLossPoint=e.target.value)}}}),s("div",{staticClass:"ml-1"},[t._v("%")])])]),t._m(0),t._m(1),s("div",{staticClass:"btn",on:{click:t.sendCode}},[t._v("立即投資")])])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"credit mb-2"},[s("div",[t._v("信用卡號")]),s("div",{staticClass:"d-flex align-items-center mb-1"},[s("div",{staticClass:"d-flex mr-2"},[s("input",{attrs:{type:"text",maxlength:"4"}}),s("label",{staticClass:"mx-1"},[t._v("-")]),s("input",{attrs:{type:"text",maxlength:"4"}}),s("label",{staticClass:"mx-1"},[t._v("-")]),s("input",{attrs:{type:"text",maxlength:"4"}}),s("label",{staticClass:"mx-1"},[t._v("-")]),s("input",{attrs:{type:"text",maxlength:"4"}})]),s("i",{staticClass:"icon icon-sm icon-visa"}),s("i",{staticClass:"icon icon-sm icon-mastercard"}),s("i",{staticClass:"icon icon-sm icon-jcb"})]),s("div",[t._v("背面末三碼")]),s("div",{staticClass:"d-flex align-items-center"},[s("input",{attrs:{type:"text",maxlength:"3"}}),s("i",{staticClass:"icon icon-sm icon-backThree ml-1"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"check mb-2"},[s("input",{attrs:{type:"checkbox"}}),t._v(" 請再次確認「匯款資訊」，匯款完成後將方送通知信至您的E-mail信箱或LINE ")])}],n=(s("a9e3"),s("ac1f"),s("5319"),s("96cf"),s("1da1")),r={name:"InvestMobile",data:function(){return{totalAssets:"10,000",stopLossPoint:15,inputAssets:"請輸入資金"}},computed:{PayoutRatio:function(){var t=Number(this.totalAssets.replace(/[^0-9-]+/g,"")),e=Number(this.inputAssets.replace(/[^0-9-]+/g,""));return t+=e,e/t*100}},methods:{sendCode:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$modal("VerifyModal",!0);try{t.$apiLoading(!0)}catch(s){t.$err({err:s})}finally{t.$apiLoading(!1)}case 2:case"end":return e.stop()}}),e)})))()}}},o=r,c=(s("b35d"),s("2877")),l=Object(c["a"])(o,a,i,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=investMobile.a131a803.js.map