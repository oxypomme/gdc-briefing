(function(e){function t(t){for(var r,i,o=t[0],u=t[1],l=t[2],b=0,d=[];b<o.length;b++)i=o[b],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&d.push(c[i][0]),c[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/GDCBriefing/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var s=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"2edf":function(e,t,n){"use strict";n("c4e9")},"32c1":function(e,t,n){"use strict";n("71b8")},"71b8":function(e,t,n){},c4e9:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("93e8"),c=(n("d263"),n("7a23"));function a(e,t,n,r,a,i){var o=Object(c["F"])("App"),u=Object(c["F"])("n-config-provider");return Object(c["z"])(),Object(c["i"])(u,{hljs:e.hljs},{default:Object(c["K"])((function(){return[Object(c["n"])(o)]})),_:1},8,["hljs"])}var i=n("1020"),o=n.n(i),u=n("e2a7"),l=n.n(u),s=n("5927");function b(e,t,n,r,a,i){var o=Object(c["F"])("DiaryRecords"),u=Object(c["F"])("AddDiaryButton"),l=Object(c["F"])("n-layout-sider"),s=Object(c["F"])("ContentEditor"),b=Object(c["F"])("n-tab-pane"),d=Object(c["F"])("SQFView"),f=Object(c["F"])("n-tabs"),j=Object(c["F"])("n-layout");return Object(c["z"])(),Object(c["i"])(j,{"has-sider":""},{default:Object(c["K"])((function(){return[Object(c["n"])(l,{bordered:"",height:"100%"},{default:Object(c["K"])((function(){return[Object(c["n"])(o),Object(c["n"])(u)]})),_:1}),Object(c["n"])(j,{style:{margin:"0 1rem"}},{default:Object(c["K"])((function(){return[e.isCurrentDiary?(Object(c["z"])(),Object(c["i"])(f,{key:0,animated:""},{default:Object(c["K"])((function(){return[Object(c["n"])(b,{name:"content",tab:"Editeur"},{default:Object(c["K"])((function(){return[Object(c["n"])(s)]})),_:1}),Object(c["n"])(b,{name:"sqf",tab:"SQF"},{default:Object(c["K"])((function(){return[Object(c["n"])(d)]})),_:1}),e.unsaved?(Object(c["z"])(),Object(c["i"])(b,{key:0,name:"nsaved",tab:"Modifications non enregistrées",disabled:""})):Object(c["j"])("",!0)]})),_:1})):Object(c["j"])("",!0)]})),_:1})]})),_:1})}var d=n("15fd"),f=n("5530"),j=(n("a4d3"),n("e01a"),n("d3b7"),n("c740"),n("a434"),n("e9c4"),n("d81d"),n("b0c0"),n("53ca")),O=n("3835"),p=(n("4fad"),n("99af"),n("ac1f"),n("5319"),n("5b81"),function(e){var t,n={};e.color&&(n.font=Object(f["a"])(Object(f["a"])({},null!==(t=n.font)&&void 0!==t?t:{}),{},{color:null===e||void 0===e?void 0:e.color}));if(e.size){var r,c;switch(e.size){case"small":c=9.75;break;case"large":c=27.69;break;case"huge":c=32.5;break;default:c=13;break}n.font=Object(f["a"])(Object(f["a"])({},null!==(r=n.font)&&void 0!==r?r:{}),{},{size:c})}return n}),v=function(e,t,n){for(var r="<"+e,c=r,a=0,i=Object.entries(t);a<i.length;a++){var o=Object(O["a"])(i[a],2),u=o[0],l=o[1];c+=" ".concat(u,"='").concat(l,"'")}return n?"".concat(c,">").concat(n).concat(r,"/>"):"".concat(c," />")},y=function(e,t){var n='player createDiaryRecord ["Diary", ["'.concat(e,'", "');if(null!==t&&void 0!==t&&t.ops){for(var r=0;r<t.ops.length;r++){var c=t.ops[r],a=c.insert,i=c.attributes;if("string"===typeof a){var o=a;if(null!==i&&void 0!==i&&i.header||(o=o.replaceAll("\n","\n<br/>")),i)for(var u=p(i),l=0,s=Object.entries(u);l<s.length;l++){var b=Object(O["a"])(s[l],2),d=b[0],f=b[1];o=v(d,f,o)}n+=o}else console.error("Type of insert: %s (value: %s)",Object(j["a"])(a),JSON.stringify(a))}n=n.replace(/\n<br\/>$/,"")}return n+'"]];'},g=n("ec26"),m=n("5502"),h=["key"],D="gdcBriefingDiaries",k=Object(g["a"])(),F={diaries:[{key:k,name:"Entrée 0"}],currentDiary:0,editPending:!1},C=Object(f["a"])({},F),_=localStorage.getItem(D);_&&(C.diaries=JSON.parse(_));var w=Symbol(),K=Object(m["a"])({state:C,mutations:{setCurrentDiary:function(e,t){var n=t.key,r=e.diaries.findIndex((function(e){var t=e.key;return t===n}));r>=0&&(e.currentDiary=r)},setDiary:function(e,t){var n,r=t.key,c=Object(d["a"])(t,h),a=e.diaries.findIndex((function(e){var t=e.key;return t===r}));a<0&&(a=e.diaries.length),e.diaries[a]=Object(f["a"])(Object(f["a"])({},null!==(n=e.diaries[a])&&void 0!==n?n:{key:r}),c)},deleteDiary:function(e,t){var n=t.key,r=e.diaries.findIndex((function(e){var t=e.key;return t===n}));r>=0&&(e.diaries.splice(r,1),e.currentDiary===r&&(e.currentDiary=r-1))},setUnsavedStatus:function(e,t){var n=t.status;e.editPending=n},clearData:function(e){e.currentDiary=F.currentDiary,e.diaries=F.diaries,e.editPending=F.editPending}},actions:{saveState:function(e){var t=e.state;localStorage.setItem(D,JSON.stringify(t.diaries))},addDiary:function(e){var t=e.commit,n=e.dispatch,r=e.state,c=Object(g["a"])();n("setDiary",{key:c,name:"Entrée ".concat(r.diaries.length)}),t("setCurrentDiary",{key:c})},setDiary:function(e,t){var n=e.commit,r=e.dispatch;n("setDiary",t),r("saveState"),n("setUnsavedStatus",{status:!1})},deleteDiary:function(e,t){var n=e.commit,r=e.dispatch;n("deleteDiary",t),r("saveState")},clearData:function(e){var t=e.commit,n=e.dispatch;t("clearData"),n("saveState")}},getters:{getDiariesList:function(e){return e.diaries.map((function(e){var t=e.name,n=e.key;return{name:t,key:n}}))},getCurrentDiary:function(e,t){var n;return null!==(n=t.getDiariesList[e.currentDiary])&&void 0!==n?n:{}},getCurrentDiaryContent:function(e){if(e.diaries[e.currentDiary]){var t=e.diaries[e.currentDiary],n=t.key,r=t.content;return{key:n,content:r}}return{}},getSQF:function(e){return e.diaries.map((function(e){var t=e.name,n=e.content;return y(t,n)}))},getCurrentDiarySQF:function(e,t){return t.getSQF[e.currentDiary]},getUnsaved:function(e){return e.editPending}}});function S(){return Object(m["b"])(w)}var P=n("48da"),q=n("8c9c"),x=Object(c["m"])(" Ajouter une entrée ");function z(e,t,n,r,a,i){var o=Object(c["F"])("Plus"),u=Object(c["F"])("n-icon"),l=Object(c["F"])("n-button");return Object(c["z"])(),Object(c["i"])(l,{onClick:e.onAddClicked,ghost:"",type:"primary",style:{display:"flex",margin:"0 auto"}},{icon:Object(c["K"])((function(){return[Object(c["n"])(u,null,{default:Object(c["K"])((function(){return[Object(c["n"])(o)]})),_:1})]})),default:Object(c["K"])((function(){return[x]})),_:1},8,["onClick"])}var L=n("9929"),A=Object(c["o"])({components:{Plus:L["a"]},setup:function(){var e=S();return{onAddClicked:function(){e.dispatch("addDiary")}}}}),N=n("6b0d"),U=n.n(N);const B=U()(A,[["render",z]]);var Q=B;function I(e,t,n,r,a,i){var o=Object(c["F"])("quill-editor"),u=Object(c["F"])("n-gi"),l=Object(c["F"])("n-code"),s=Object(c["F"])("n-scrollbar"),b=Object(c["F"])("n-card"),d=Object(c["F"])("n-grid");return Object(c["z"])(),Object(c["i"])(d,{"x-gap":"12",cols:2},{default:Object(c["K"])((function(){return[Object(c["n"])(u,{style:{height:"fit-content"}},{default:Object(c["K"])((function(){return[Object(c["n"])(o,{ref:"editor",content:e.content,"onUpdate:content":t[0]||(t[0]=function(t){return e.content=t}),options:e.options},null,8,["content","options"])]})),_:1}),Object(c["n"])(u,{style:{height:"100%"}},{default:Object(c["K"])((function(){return[Object(c["n"])(b,{style:{height:"100%"}},{default:Object(c["K"])((function(){return[Object(c["n"])(s,null,{default:Object(c["K"])((function(){return[Object(c["n"])(l,{code:e.sqf,language:"sqf"},null,8,["code"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})}var T,M=n("1da1"),R=(n("96cf"),n("2ef0")),E=n("646f"),J=n("2649"),G=n("402b"),V={modules:{toolbar:[{color:[]},{header:[4,!1]},{size:[]}]}},$=Object(R["debounce"])((function(e,t){var n;return null===(n=T)||void 0===n?void 0:n.dispatch("setDiary",{key:e,content:t})}),1e3),H=Object(c["o"])({components:{NGrid:E["a"],NGi:J["a"],NScrollbar:G["a"]},setup:function(){T=S();var e=Object(c["g"])((function(){return T.getters.getCurrentDiaryContent})),t=Object(c["g"])((function(){return T.getters.getCurrentDiarySQF})),n=!1,r=!1,a=Object(c["D"])(null);Object(c["I"])(e,(function(e){n?n=!1:(r=!0,a.value.setContents(e.content,"silent"),r=!1)}));var i=Object(c["D"])(e.value.content);return Object(c["I"])(i,function(){var t=Object(M["a"])(regeneratorRuntime.mark((function t(c){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.value&&!r&&(T.commit("setUnsavedStatus",{status:!0}),n=!0,$(e.value.key,c));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),{options:V,content:i,sqf:t,editor:a}}});const W=U()(H,[["render",I]]);var X=W;function Y(e,t,n,r,a,i){var o=Object(c["F"])("n-menu");return Object(c["z"])(),Object(c["i"])(o,{value:e.currentDiary.key,"onUpdate:value":e.onDiarySelected,options:e.diaries},null,8,["value","onUpdate:value","options"])}var Z=n("ac9a"),ee=n("c678");function te(e,t,n,r,a,i){var o=Object(c["F"])("n-input"),u=Object(c["F"])("TrashAlt"),l=Object(c["F"])("n-icon"),s=Object(c["F"])("n-button"),b=Object(c["F"])("n-input-group");return Object(c["z"])(),Object(c["i"])(b,null,{default:Object(c["K"])((function(){return[Object(c["n"])(o,{value:e.content,"onUpdate:value":e.onContentChange},null,8,["value","onUpdate:value"]),Object(c["n"])(s,{ghost:"",type:"error",onClick:e.onDeletePressed,disabled:e.disabled},{default:Object(c["K"])((function(){return[Object(c["n"])(l,null,{default:Object(c["K"])((function(){return[Object(c["n"])(u)]})),_:1})]})),_:1},8,["onClick","disabled"])]})),_:1})}var ne,re=n("4df5"),ce=Object(R["debounce"])(function(){var e=Object(M["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,null===(r=ne)||void 0===r?void 0:r.dispatch("setDiary",{key:t,name:n});case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),1e3),ae=Object(c["o"])({components:{TrashAlt:re["a"]},props:{diary:Object,disabled:{type:Boolean,required:!1,default:!1}},setup:function(e){var t;ne=S();var n=Object(c["D"])(null===e||void 0===e||null===(t=e.diary)||void 0===t?void 0:t.name);return{content:n,onContentChange:function(t){null!==e&&void 0!==e&&e.diary&&(n.value=t,ne.commit("setUnsavedStatus",{status:!0}),ce(e.diary.key,n.value))},onDeletePressed:function(){null!==e&&void 0!==e&&e.diary&&ne.dispatch("deleteDiary",{key:e.diary.key})}}}});const ie=U()(ae,[["render",te]]);var oe=ie,ue=function(e){return function(){return Object(c["q"])(ee["a"],null,{default:function(){return Object(c["q"])(e)}})}},le=Object(c["o"])({setup:function(){var e=S();return{diaries:Object(c["g"])((function(){var t=e.getters.getDiariesList;return t.map((function(e){return Object(f["a"])(Object(f["a"])({},e),{},{icon:ue(Z["a"]),label:function(){return Object(c["q"])(oe,{diary:e,disabled:1===t.length})}})}))})),currentDiary:Object(c["g"])((function(){return e.getters.getCurrentDiary})),onDiarySelected:function(t){e.commit("setCurrentDiary",{key:t})}}}});const se=U()(le,[["render",Y]]);var be=se,de=Object(c["m"])(" briefing.sqf "),fe=Object(c["m"])(" Tout supprimer "),je=Object(c["m"])(" Cette action supprimera toute les données et est irréversible, voulez-vous continuer ? "),Oe=Object(c["l"])("br",null,null,-1),pe=Object(c["m"])(" (un rechargemnt de la page est parfois nécéssaire pour voir les changements) ");function ve(e,t,n,r,a,i){var o=Object(c["F"])("Download"),u=Object(c["F"])("n-icon"),l=Object(c["F"])("n-button"),s=Object(c["F"])("CaretDown"),b=Object(c["F"])("n-dropdown"),d=Object(c["F"])("n-button-group"),f=Object(c["F"])("Times"),j=Object(c["F"])("n-popconfirm"),O=Object(c["F"])("n-space"),p=Object(c["F"])("n-code"),v=Object(c["F"])("n-card");return Object(c["z"])(),Object(c["i"])(O,{vertical:""},{default:Object(c["K"])((function(){return[Object(c["n"])(O,null,{default:Object(c["K"])((function(){return[Object(c["n"])(d,null,{default:Object(c["K"])((function(){return[Object(c["n"])(l,{ghost:"",type:"primary",onClick:e.downloadBriefing},{icon:Object(c["K"])((function(){return[Object(c["n"])(u,null,{default:Object(c["K"])((function(){return[Object(c["n"])(o)]})),_:1})]})),default:Object(c["K"])((function(){return[de]})),_:1},8,["onClick"]),Object(c["n"])(b,{trigger:"hover",options:e.options,"render-label":e.renderDropdownLabel},{default:Object(c["K"])((function(){return[Object(c["n"])(l,{ghost:"",type:"primary",style:{padding:"6px"}},{icon:Object(c["K"])((function(){return[Object(c["n"])(u,null,{default:Object(c["K"])((function(){return[Object(c["n"])(s)]})),_:1})]})),_:1})]})),_:1},8,["options","render-label"])]})),_:1}),Object(c["n"])(j,{"show-icon":!1,"negative-text":null,onPositiveClick:e.clearData},{activator:Object(c["K"])((function(){return[Object(c["n"])(l,{type:"error",ghost:""},{icon:Object(c["K"])((function(){return[Object(c["n"])(u,null,{default:Object(c["K"])((function(){return[Object(c["n"])(f)]})),_:1})]})),default:Object(c["K"])((function(){return[fe]})),_:1})]})),default:Object(c["K"])((function(){return[je,Oe,pe]})),_:1},8,["onPositiveClick"])]})),_:1}),Object(c["n"])(v,null,{default:Object(c["K"])((function(){return[Object(c["n"])(p,{code:e.sqf,language:"sqf"},null,8,["code"])]})),_:1})]})),_:1})}var ye=n("2909"),ge=(n("a15b"),n("58c2")),me=n("db38"),he=n("78e8"),De=n("21a6"),ke=n("cdba"),Fe=n("9381"),Ce=n("9c97"),_e=n("17f7"),we=function(e){return function(){return Object(c["q"])(ee["a"],null,{default:function(){return Object(c["q"])(e)}})}},Ke=function(e,t){return Object(De["saveAs"])(new Blob([t],{type:"text/plain;charset=utf-8"}),e)},Se=[{label:"initPlayerLocal.sqf",key:"initPlayerLocal",icon:we(ge["a"]),tooltip:"Pour le chargement du briefing",props:{onClick:function(){Ke("initPlayerLocal.sqf",'execVM "briefing.sqf";\n')}}}],Pe=Object(c["o"])({components:{Download:ge["a"],Times:me["a"],NDropdown:ke["a"],NButtonGroup:Fe["b"],CaretDown:he["a"],NPopconfirm:Ce["a"]},setup:function(){var e=S(),t=Object(c["g"])((function(){var t=Object(ye["a"])(e.getters.getSQF).reverse();return t.join("\n\n")}));return{options:Se,sqf:t,renderDropdownLabel:function(e){return e.tooltip?Object(c["q"])(_e["a"],null,{trigger:function(){return e.label},default:function(){return e.tooltip}}):e.tooltip},downloadBriefing:function(){Ke("briefing.sqf",t.value)},downloadInitPlayerLocal:function(){Object(De["saveAs"])(new Blob(['execVM "briefing.sqf";\n'],{type:"text/plain;charset=utf-8"}),"initPlayerLocal.sqf")},clearData:function(){e.dispatch("clearData")}}}});const qe=U()(Pe,[["render",ve]]);var xe=qe,ze=Object(c["o"])({components:{DiaryRecords:be,ContentEditor:X,SQFView:xe,AddDiaryButton:Q,NLayout:P["a"],NLayoutSider:q["a"]},setup:function(){var e=S();return{isCurrentDiary:Object(c["g"])((function(){var t;return null===(t=e.getters.getCurrentDiary)||void 0===t?void 0:t.key})),unsaved:Object(c["g"])((function(){return e.getters.getUnsaved}))}}});n("2edf");const Le=U()(ze,[["render",b]]);var Ae=Le;o.a.registerLanguage("sqf",l.a);var Ne=Object(c["o"])({components:{App:Ae,NConfigProvider:s["a"]},setup:function(){return{hljs:o.a}}});n("32c1");const Ue=U()(Ne,[["render",a]]);var Be=Ue,Qe=n("6c4e"),Ie=n("b6e9"),Te=n("7965"),Me=n("3519"),Re=n("26e2"),Ee=n("434c"),Je=n("6acb"),Ge=n("a9d8"),Ve=n("4951"),$e=n("c872"),He=n("aac6"),We=[Qe["a"],Ie["a"],Te["a"],Me["a"],ee["a"],Re["a"],Ee["a"],Je["a"],Ge["a"],Ve["a"],$e["a"]],Xe=Object(He["a"])({components:We}),Ye=Xe;Object(c["h"])(Be).use(Ye).component("QuillEditor",r["a"]).use(K,w).mount("#app")}});
//# sourceMappingURL=app.deabfaf7.js.map