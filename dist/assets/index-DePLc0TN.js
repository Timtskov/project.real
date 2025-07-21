(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=a(o);fetch(o.href,l)}})();var Ob={exports:{}},JM={},Ub={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lr=Symbol.for("react.element"),DI=Symbol.for("react.portal"),NI=Symbol.for("react.fragment"),TI=Symbol.for("react.strict_mode"),VI=Symbol.for("react.profiler"),FI=Symbol.for("react.provider"),EI=Symbol.for("react.context"),BI=Symbol.for("react.forward_ref"),RI=Symbol.for("react.suspense"),OI=Symbol.for("react.memo"),UI=Symbol.for("react.lazy"),zL=Symbol.iterator;function $I(e){return e===null||typeof e!="object"?null:(e=zL&&e[zL]||e["@@iterator"],typeof e=="function"?e:null)}var $b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_b=Object.assign,Zb={};function cn(e,t,a){this.props=e,this.context=t,this.refs=Zb,this.updater=a||$b}cn.prototype.isReactComponent={};cn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};cn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Wb(){}Wb.prototype=cn.prototype;function Dw(e,t,a){this.props=e,this.context=t,this.refs=Zb,this.updater=a||$b}var Nw=Dw.prototype=new Wb;Nw.constructor=Dw;_b(Nw,cn.prototype);Nw.isPureReactComponent=!0;var qL=Array.isArray,Gb=Object.prototype.hasOwnProperty,Tw={current:null},Kb={key:!0,ref:!0,__self:!0,__source:!0};function Xb(e,t,a){var r,o={},l=null,c=null;if(t!=null)for(r in t.ref!==void 0&&(c=t.ref),t.key!==void 0&&(l=""+t.key),t)Gb.call(t,r)&&!Kb.hasOwnProperty(r)&&(o[r]=t[r]);var d=arguments.length-2;if(d===1)o.children=a;else if(1<d){for(var s=Array(d),y=0;y<d;y++)s[y]=arguments[y+2];o.children=s}if(e&&e.defaultProps)for(r in d=e.defaultProps,d)o[r]===void 0&&(o[r]=d[r]);return{$$typeof:Lr,type:e,key:l,ref:c,props:o,_owner:Tw.current}}function _I(e,t){return{$$typeof:Lr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Vw(e){return typeof e=="object"&&e!==null&&e.$$typeof===Lr}function ZI(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var AL=/\/+/g;function k9(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ZI(""+e.key):t.toString(36)}function Zr(e,t,a,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var c=!1;if(e===null)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case Lr:case DI:c=!0}}if(c)return c=e,o=o(c),e=r===""?"."+k9(c,0):r,qL(o)?(a="",e!=null&&(a=e.replace(AL,"$&/")+"/"),Zr(o,t,a,"",function(y){return y})):o!=null&&(Vw(o)&&(o=_I(o,a+(!o.key||c&&c.key===o.key?"":(""+o.key).replace(AL,"$&/")+"/")+e)),t.push(o)),1;if(c=0,r=r===""?".":r+":",qL(e))for(var d=0;d<e.length;d++){l=e[d];var s=r+k9(l,d);c+=Zr(l,t,a,s,o)}else if(s=$I(e),typeof s=="function")for(e=s.call(e),d=0;!(l=e.next()).done;)l=l.value,s=r+k9(l,d++),c+=Zr(l,t,a,s,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function Hr(e,t,a){if(e==null)return e;var r=[],o=0;return Zr(e,r,"","",function(l){return t.call(a,l,o++)}),r}function WI(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Le={current:null},Wr={transition:null},GI={ReactCurrentDispatcher:Le,ReactCurrentBatchConfig:Wr,ReactCurrentOwner:Tw};function Qb(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:Hr,forEach:function(e,t,a){Hr(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return Hr(e,function(){t++}),t},toArray:function(e){return Hr(e,function(t){return t})||[]},only:function(e){if(!Vw(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Z.Component=cn;Z.Fragment=NI;Z.Profiler=VI;Z.PureComponent=Dw;Z.StrictMode=TI;Z.Suspense=RI;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GI;Z.act=Qb;Z.cloneElement=function(e,t,a){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_b({},e.props),o=e.key,l=e.ref,c=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,c=Tw.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var d=e.type.defaultProps;for(s in t)Gb.call(t,s)&&!Kb.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&d!==void 0?d[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=a;else if(1<s){d=Array(s);for(var y=0;y<s;y++)d[y]=arguments[y+2];r.children=d}return{$$typeof:Lr,type:e.type,key:o,ref:l,props:r,_owner:c}};Z.createContext=function(e){return e={$$typeof:EI,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:FI,_context:e},e.Consumer=e};Z.createElement=Xb;Z.createFactory=function(e){var t=Xb.bind(null,e);return t.type=e,t};Z.createRef=function(){return{current:null}};Z.forwardRef=function(e){return{$$typeof:BI,render:e}};Z.isValidElement=Vw;Z.lazy=function(e){return{$$typeof:UI,_payload:{_status:-1,_result:e},_init:WI}};Z.memo=function(e,t){return{$$typeof:OI,type:e,compare:t===void 0?null:t}};Z.startTransition=function(e){var t=Wr.transition;Wr.transition={};try{e()}finally{Wr.transition=t}};Z.unstable_act=Qb;Z.useCallback=function(e,t){return Le.current.useCallback(e,t)};Z.useContext=function(e){return Le.current.useContext(e)};Z.useDebugValue=function(){};Z.useDeferredValue=function(e){return Le.current.useDeferredValue(e)};Z.useEffect=function(e,t){return Le.current.useEffect(e,t)};Z.useId=function(){return Le.current.useId()};Z.useImperativeHandle=function(e,t,a){return Le.current.useImperativeHandle(e,t,a)};Z.useInsertionEffect=function(e,t){return Le.current.useInsertionEffect(e,t)};Z.useLayoutEffect=function(e,t){return Le.current.useLayoutEffect(e,t)};Z.useMemo=function(e,t){return Le.current.useMemo(e,t)};Z.useReducer=function(e,t,a){return Le.current.useReducer(e,t,a)};Z.useRef=function(e){return Le.current.useRef(e)};Z.useState=function(e){return Le.current.useState(e)};Z.useSyncExternalStore=function(e,t,a){return Le.current.useSyncExternalStore(e,t,a)};Z.useTransition=function(){return Le.current.useTransition()};Z.version="18.3.1";Ub.exports=Z;var T=Ub.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KI=T,XI=Symbol.for("react.element"),QI=Symbol.for("react.fragment"),JI=Object.prototype.hasOwnProperty,YI=KI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ej={key:!0,ref:!0,__self:!0,__source:!0};function Jb(e,t,a){var r,o={},l=null,c=null;a!==void 0&&(l=""+a),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(c=t.ref);for(r in t)JI.call(t,r)&&!ej.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:XI,type:e,key:l,ref:c,props:o,_owner:YI.current}}JM.Fragment=QI;JM.jsx=Jb;JM.jsxs=Jb;Ob.exports=JM;var i=Ob.exports,Yb={exports:{}},Ve={},eC={exports:{}},tC={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,L){var F=M.length;M.push(L);e:for(;0<F;){var B=F-1>>>1,W=M[B];if(0<o(W,L))M[B]=L,M[F]=W,F=B;else break e}}function a(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var L=M[0],F=M.pop();if(F!==L){M[0]=F;e:for(var B=0,W=M.length,ke=W>>>1;B<ke;){var Ce=2*(B+1)-1,yt=M[Ce],et=Ce+1,Wt=M[et];if(0>o(yt,F))et<W&&0>o(Wt,yt)?(M[B]=Wt,M[et]=F,B=et):(M[B]=yt,M[Ce]=F,B=Ce);else if(et<W&&0>o(Wt,F))M[B]=Wt,M[et]=F,B=et;else break e}}return L}function o(M,L){var F=M.sortIndex-L.sortIndex;return F!==0?F:M.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();e.unstable_now=function(){return c.now()-d}}var s=[],y=[],g=1,v=null,m=3,j=!1,f=!1,w=!1,A=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(M){for(var L=a(y);L!==null;){if(L.callback===null)r(y);else if(L.startTime<=M)r(y),L.sortIndex=L.expirationTime,t(s,L);else break;L=a(y)}}function k(M){if(w=!1,h(M),!f)if(a(s)!==null)f=!0,U(I);else{var L=a(y);L!==null&&O(k,L.startTime-M)}}function I(M,L){f=!1,w&&(w=!1,p(C),C=-1),j=!0;var F=m;try{for(h(L),v=a(s);v!==null&&(!(v.expirationTime>L)||M&&!R());){var B=v.callback;if(typeof B=="function"){v.callback=null,m=v.priorityLevel;var W=B(v.expirationTime<=L);L=e.unstable_now(),typeof W=="function"?v.callback=W:v===a(s)&&r(s),h(L)}else r(s);v=a(s)}if(v!==null)var ke=!0;else{var Ce=a(y);Ce!==null&&O(k,Ce.startTime-L),ke=!1}return ke}finally{v=null,m=F,j=!1}}var z=!1,b=null,C=-1,V=5,S=-1;function R(){return!(e.unstable_now()-S<V)}function E(){if(b!==null){var M=e.unstable_now();S=M;var L=!0;try{L=b(!0,M)}finally{L?_():(z=!1,b=null)}}else z=!1}var _;if(typeof u=="function")_=function(){u(E)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,q=Ae.port2;Ae.port1.onmessage=E,_=function(){q.postMessage(null)}}else _=function(){A(E,0)};function U(M){b=M,z||(z=!0,_())}function O(M,L){C=A(function(){M(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){f||j||(f=!0,U(I))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return a(s)},e.unstable_next=function(M){switch(m){case 1:case 2:case 3:var L=3;break;default:L=m}var F=m;m=L;try{return M()}finally{m=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,L){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var F=m;m=M;try{return L()}finally{m=F}},e.unstable_scheduleCallback=function(M,L,F){var B=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?B+F:B):F=B,M){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=F+W,M={id:g++,callback:L,priorityLevel:M,startTime:F,expirationTime:W,sortIndex:-1},F>B?(M.sortIndex=F,t(y,M),a(s)===null&&M===a(y)&&(w?(p(C),C=-1):w=!0,O(k,F-B))):(M.sortIndex=W,t(s,M),f||j||(f=!0,U(I))),M},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(M){var L=m;return function(){var F=m;m=L;try{return M.apply(this,arguments)}finally{m=F}}}})(tC);eC.exports=tC;var tj=eC.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aj=T,Te=tj;function H(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var aC=new Set,ir={};function Sa(e,t){en(e,t),en(e+"Capture",t)}function en(e,t){for(ir[e]=t,e=0;e<t.length;e++)aC.add(t[e])}var Mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),R9=Object.prototype.hasOwnProperty,nj=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,PL={},DL={};function rj(e){return R9.call(DL,e)?!0:R9.call(PL,e)?!1:nj.test(e)?DL[e]=!0:(PL[e]=!0,!1)}function oj(e,t,a,r){if(a!==null&&a.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ij(e,t,a,r){if(t===null||typeof t>"u"||oj(e,t,a,r))return!0;if(r)return!1;if(a!==null)switch(a.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function be(e,t,a,r,o,l,c){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=a,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=c}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new be(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fw=/[\-:]([a-z])/g;function Ew(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fw,Ew);pe[t]=new be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fw,Ew);pe[t]=new be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fw,Ew);pe[t]=new be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new be(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new be(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bw(e,t,a,r){var o=pe.hasOwnProperty(t)?pe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ij(t,a,o,r)&&(a=null),r||o===null?rj(t)&&(a===null?e.removeAttribute(t):e.setAttribute(t,""+a)):o.mustUseProperty?e[o.propertyName]=a===null?o.type===3?!1:"":a:(t=o.attributeName,r=o.attributeNamespace,a===null?e.removeAttribute(t):(o=o.type,a=o===3||o===4&&a===!0?"":""+a,r?e.setAttributeNS(r,t,a):e.setAttribute(t,a))))}var Ct=aj.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zr=Symbol.for("react.element"),Ha=Symbol.for("react.portal"),za=Symbol.for("react.fragment"),Rw=Symbol.for("react.strict_mode"),O9=Symbol.for("react.profiler"),nC=Symbol.for("react.provider"),rC=Symbol.for("react.context"),Ow=Symbol.for("react.forward_ref"),U9=Symbol.for("react.suspense"),$9=Symbol.for("react.suspense_list"),Uw=Symbol.for("react.memo"),jt=Symbol.for("react.lazy"),oC=Symbol.for("react.offscreen"),NL=Symbol.iterator;function hn(e){return e===null||typeof e!="object"?null:(e=NL&&e[NL]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,g9;function fn(e){if(g9===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);g9=t&&t[1]||""}return`
`+g9+e}var m9=!1;function x9(e,t){if(!e||m9)return"";m9=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(y){var r=y}Reflect.construct(e,[],t)}else{try{t.call()}catch(y){r=y}e.call(t.prototype)}else{try{throw Error()}catch(y){r=y}e()}}catch(y){if(y&&r&&typeof y.stack=="string"){for(var o=y.stack.split(`
`),l=r.stack.split(`
`),c=o.length-1,d=l.length-1;1<=c&&0<=d&&o[c]!==l[d];)d--;for(;1<=c&&0<=d;c--,d--)if(o[c]!==l[d]){if(c!==1||d!==1)do if(c--,d--,0>d||o[c]!==l[d]){var s=`
`+o[c].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=c&&0<=d);break}}}finally{m9=!1,Error.prepareStackTrace=a}return(e=e?e.displayName||e.name:"")?fn(e):""}function lj(e){switch(e.tag){case 5:return fn(e.type);case 16:return fn("Lazy");case 13:return fn("Suspense");case 19:return fn("SuspenseList");case 0:case 2:case 15:return e=x9(e.type,!1),e;case 11:return e=x9(e.type.render,!1),e;case 1:return e=x9(e.type,!0),e;default:return""}}function _9(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case za:return"Fragment";case Ha:return"Portal";case O9:return"Profiler";case Rw:return"StrictMode";case U9:return"Suspense";case $9:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case rC:return(e.displayName||"Context")+".Consumer";case nC:return(e._context.displayName||"Context")+".Provider";case Ow:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Uw:return t=e.displayName||null,t!==null?t:_9(e.type)||"Memo";case jt:t=e._payload,e=e._init;try{return _9(e(t))}catch{}}return null}function cj(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _9(t);case 8:return t===Rw?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ot(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function iC(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function dj(e){var t=iC(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,l=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(c){r=""+c,l.call(this,c)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(c){r=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qr(e){e._valueTracker||(e._valueTracker=dj(e))}function lC(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),r="";return e&&(r=iC(e)?e.checked?"true":"false":e.value),e=r,e!==a?(t.setValue(e),!0):!1}function IM(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Z9(e,t){var a=t.checked;return re({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??e._wrapperState.initialChecked})}function TL(e,t){var a=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;a=Ot(t.value!=null?t.value:a),e._wrapperState={initialChecked:r,initialValue:a,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cC(e,t){t=t.checked,t!=null&&Bw(e,"checked",t,!1)}function W9(e,t){cC(e,t);var a=Ot(t.value),r=t.type;if(a!=null)r==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+a):e.value!==""+a&&(e.value=""+a);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?G9(e,t.type,a):t.hasOwnProperty("defaultValue")&&G9(e,t.type,Ot(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function VL(e,t,a){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,a||t===e.value||(e.value=t),e.defaultValue=t}a=e.name,a!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,a!==""&&(e.name=a)}function G9(e,t,a){(t!=="number"||IM(e.ownerDocument)!==e)&&(a==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+a&&(e.defaultValue=""+a))}var vn=Array.isArray;function Ra(e,t,a,r){if(e=e.options,t){t={};for(var o=0;o<a.length;o++)t["$"+a[o]]=!0;for(a=0;a<e.length;a++)o=t.hasOwnProperty("$"+e[a].value),e[a].selected!==o&&(e[a].selected=o),o&&r&&(e[a].defaultSelected=!0)}else{for(a=""+Ot(a),t=null,o=0;o<e.length;o++){if(e[o].value===a){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function K9(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(H(91));return re({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function FL(e,t){var a=t.value;if(a==null){if(a=t.children,t=t.defaultValue,a!=null){if(t!=null)throw Error(H(92));if(vn(a)){if(1<a.length)throw Error(H(93));a=a[0]}t=a}t==null&&(t=""),a=t}e._wrapperState={initialValue:Ot(a)}}function dC(e,t){var a=Ot(t.value),r=Ot(t.defaultValue);a!=null&&(a=""+a,a!==e.value&&(e.value=a),t.defaultValue==null&&e.defaultValue!==a&&(e.defaultValue=a)),r!=null&&(e.defaultValue=""+r)}function EL(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function sC(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function X9(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?sC(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ar,hC=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,a,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,a,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ar=Ar||document.createElement("div"),Ar.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ar.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function lr(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sj=["Webkit","ms","Moz","O"];Object.keys(Ln).forEach(function(e){sj.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ln[t]=Ln[e]})});function yC(e,t,a){return t==null||typeof t=="boolean"||t===""?"":a||typeof t!="number"||t===0||Ln.hasOwnProperty(e)&&Ln[e]?(""+t).trim():t+"px"}function uC(e,t){e=e.style;for(var a in t)if(t.hasOwnProperty(a)){var r=a.indexOf("--")===0,o=yC(a,t[a],r);a==="float"&&(a="cssFloat"),r?e.setProperty(a,o):e[a]=o}}var hj=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Q9(e,t){if(t){if(hj[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(H(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(H(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(H(61))}if(t.style!=null&&typeof t.style!="object")throw Error(H(62))}}function J9(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Y9=null;function $w(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ew=null,Oa=null,Ua=null;function BL(e){if(e=Sr(e)){if(typeof ew!="function")throw Error(H(280));var t=e.stateNode;t&&(t=n9(t),ew(e.stateNode,e.type,t))}}function pC(e){Oa?Ua?Ua.push(e):Ua=[e]:Oa=e}function kC(){if(Oa){var e=Oa,t=Ua;if(Ua=Oa=null,BL(e),t)for(e=0;e<t.length;e++)BL(t[e])}}function gC(e,t){return e(t)}function mC(){}var f9=!1;function xC(e,t,a){if(f9)return e(t,a);f9=!0;try{return gC(e,t,a)}finally{f9=!1,(Oa!==null||Ua!==null)&&(mC(),kC())}}function cr(e,t){var a=e.stateNode;if(a===null)return null;var r=n9(a);if(r===null)return null;a=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(H(231,t,typeof a));return a}var tw=!1;if(Mt)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){tw=!0}}),window.addEventListener("test",yn,yn),window.removeEventListener("test",yn,yn)}catch{tw=!1}function yj(e,t,a,r,o,l,c,d,s){var y=Array.prototype.slice.call(arguments,3);try{t.apply(a,y)}catch(g){this.onError(g)}}var bn=!1,jM=null,HM=!1,aw=null,uj={onError:function(e){bn=!0,jM=e}};function pj(e,t,a,r,o,l,c,d,s){bn=!1,jM=null,yj.apply(uj,arguments)}function kj(e,t,a,r,o,l,c,d,s){if(pj.apply(this,arguments),bn){if(bn){var y=jM;bn=!1,jM=null}else throw Error(H(198));HM||(HM=!0,aw=y)}}function Ia(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function fC(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function RL(e){if(Ia(e)!==e)throw Error(H(188))}function gj(e){var t=e.alternate;if(!t){if(t=Ia(e),t===null)throw Error(H(188));return t!==e?null:e}for(var a=e,r=t;;){var o=a.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){a=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===a)return RL(o),e;if(l===r)return RL(o),t;l=l.sibling}throw Error(H(188))}if(a.return!==r.return)a=o,r=l;else{for(var c=!1,d=o.child;d;){if(d===a){c=!0,a=o,r=l;break}if(d===r){c=!0,r=o,a=l;break}d=d.sibling}if(!c){for(d=l.child;d;){if(d===a){c=!0,a=l,r=o;break}if(d===r){c=!0,r=l,a=o;break}d=d.sibling}if(!c)throw Error(H(189))}}if(a.alternate!==r)throw Error(H(190))}if(a.tag!==3)throw Error(H(188));return a.stateNode.current===a?e:t}function vC(e){return e=gj(e),e!==null?MC(e):null}function MC(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=MC(e);if(t!==null)return t;e=e.sibling}return null}var wC=Te.unstable_scheduleCallback,OL=Te.unstable_cancelCallback,mj=Te.unstable_shouldYield,xj=Te.unstable_requestPaint,ie=Te.unstable_now,fj=Te.unstable_getCurrentPriorityLevel,_w=Te.unstable_ImmediatePriority,LC=Te.unstable_UserBlockingPriority,zM=Te.unstable_NormalPriority,vj=Te.unstable_LowPriority,bC=Te.unstable_IdlePriority,YM=null,lt=null;function Mj(e){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(YM,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:bj,wj=Math.log,Lj=Math.LN2;function bj(e){return e>>>=0,e===0?32:31-(wj(e)/Lj|0)|0}var Pr=64,Dr=4194304;function Mn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qM(e,t){var a=e.pendingLanes;if(a===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,c=a&268435455;if(c!==0){var d=c&~o;d!==0?r=Mn(d):(l&=c,l!==0&&(r=Mn(l)))}else c=a&~o,c!==0?r=Mn(c):l!==0&&(r=Mn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=a&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)a=31-Qe(t),o=1<<a,r|=e[a],t&=~o;return r}function Cj(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sj(e,t){for(var a=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var c=31-Qe(l),d=1<<c,s=o[c];s===-1?(!(d&a)||d&r)&&(o[c]=Cj(d,t)):s<=t&&(e.expiredLanes|=d),l&=~d}}function nw(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function CC(){var e=Pr;return Pr<<=1,!(Pr&4194240)&&(Pr=64),e}function v9(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function br(e,t,a){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qe(t),e[t]=a}function Ij(e,t){var a=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<a;){var o=31-Qe(a),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,a&=~l}}function Zw(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var r=31-Qe(a),o=1<<r;o&t|e[r]&t&&(e[r]|=t),a&=~o}}var K=0;function SC(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var IC,Ww,jC,HC,zC,rw=!1,Nr=[],Dt=null,Nt=null,Tt=null,dr=new Map,sr=new Map,zt=[],jj="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function UL(e,t){switch(e){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":Nt=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":dr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":sr.delete(t.pointerId)}}function un(e,t,a,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:a,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Sr(t),t!==null&&Ww(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Hj(e,t,a,r,o){switch(t){case"focusin":return Dt=un(Dt,e,t,a,r,o),!0;case"dragenter":return Nt=un(Nt,e,t,a,r,o),!0;case"mouseover":return Tt=un(Tt,e,t,a,r,o),!0;case"pointerover":var l=o.pointerId;return dr.set(l,un(dr.get(l)||null,e,t,a,r,o)),!0;case"gotpointercapture":return l=o.pointerId,sr.set(l,un(sr.get(l)||null,e,t,a,r,o)),!0}return!1}function qC(e){var t=ya(e.target);if(t!==null){var a=Ia(t);if(a!==null){if(t=a.tag,t===13){if(t=fC(a),t!==null){e.blockedOn=t,zC(e.priority,function(){jC(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=ow(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Y9=r,a.target.dispatchEvent(r),Y9=null}else return t=Sr(a),t!==null&&Ww(t),e.blockedOn=a,!1;t.shift()}return!0}function $L(e,t,a){Gr(e)&&a.delete(t)}function zj(){rw=!1,Dt!==null&&Gr(Dt)&&(Dt=null),Nt!==null&&Gr(Nt)&&(Nt=null),Tt!==null&&Gr(Tt)&&(Tt=null),dr.forEach($L),sr.forEach($L)}function pn(e,t){e.blockedOn===t&&(e.blockedOn=null,rw||(rw=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,zj)))}function hr(e){function t(o){return pn(o,e)}if(0<Nr.length){pn(Nr[0],e);for(var a=1;a<Nr.length;a++){var r=Nr[a];r.blockedOn===e&&(r.blockedOn=null)}}for(Dt!==null&&pn(Dt,e),Nt!==null&&pn(Nt,e),Tt!==null&&pn(Tt,e),dr.forEach(t),sr.forEach(t),a=0;a<zt.length;a++)r=zt[a],r.blockedOn===e&&(r.blockedOn=null);for(;0<zt.length&&(a=zt[0],a.blockedOn===null);)qC(a),a.blockedOn===null&&zt.shift()}var $a=Ct.ReactCurrentBatchConfig,AM=!0;function qj(e,t,a,r){var o=K,l=$a.transition;$a.transition=null;try{K=1,Gw(e,t,a,r)}finally{K=o,$a.transition=l}}function Aj(e,t,a,r){var o=K,l=$a.transition;$a.transition=null;try{K=4,Gw(e,t,a,r)}finally{K=o,$a.transition=l}}function Gw(e,t,a,r){if(AM){var o=ow(e,t,a,r);if(o===null)z9(e,t,r,PM,a),UL(e,r);else if(Hj(o,e,t,a,r))r.stopPropagation();else if(UL(e,r),t&4&&-1<jj.indexOf(e)){for(;o!==null;){var l=Sr(o);if(l!==null&&IC(l),l=ow(e,t,a,r),l===null&&z9(e,t,r,PM,a),l===o)break;o=l}o!==null&&r.stopPropagation()}else z9(e,t,r,null,a)}}var PM=null;function ow(e,t,a,r){if(PM=null,e=$w(r),e=ya(e),e!==null)if(t=Ia(e),t===null)e=null;else if(a=t.tag,a===13){if(e=fC(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return PM=e,null}function AC(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fj()){case _w:return 1;case LC:return 4;case zM:case vj:return 16;case bC:return 536870912;default:return 16}default:return 16}}var At=null,Kw=null,Kr=null;function PC(){if(Kr)return Kr;var e,t=Kw,a=t.length,r,o="value"in At?At.value:At.textContent,l=o.length;for(e=0;e<a&&t[e]===o[e];e++);var c=a-e;for(r=1;r<=c&&t[a-r]===o[l-r];r++);return Kr=o.slice(e,1<r?1-r:void 0)}function Xr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tr(){return!0}function _L(){return!1}function Fe(e){function t(a,r,o,l,c){this._reactName=a,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=c,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(a=e[d],this[d]=a?a(l):l[d]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Tr:_L,this.isPropagationStopped=_L,this}return re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Tr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Tr)},persist:function(){},isPersistent:Tr}),t}var dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xw=Fe(dn),Cr=re({},dn,{view:0,detail:0}),Pj=Fe(Cr),M9,w9,kn,e9=re({},Cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qw,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kn&&(kn&&e.type==="mousemove"?(M9=e.screenX-kn.screenX,w9=e.screenY-kn.screenY):w9=M9=0,kn=e),M9)},movementY:function(e){return"movementY"in e?e.movementY:w9}}),ZL=Fe(e9),Dj=re({},e9,{dataTransfer:0}),Nj=Fe(Dj),Tj=re({},Cr,{relatedTarget:0}),L9=Fe(Tj),Vj=re({},dn,{animationName:0,elapsedTime:0,pseudoElement:0}),Fj=Fe(Vj),Ej=re({},dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bj=Fe(Ej),Rj=re({},dn,{data:0}),WL=Fe(Rj),Oj={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uj={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$j={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _j(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$j[e])?!!t[e]:!1}function Qw(){return _j}var Zj=re({},Cr,{key:function(e){if(e.key){var t=Oj[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Uj[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qw,charCode:function(e){return e.type==="keypress"?Xr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wj=Fe(Zj),Gj=re({},e9,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),GL=Fe(Gj),Kj=re({},Cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qw}),Xj=Fe(Kj),Qj=re({},dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jj=Fe(Qj),Yj=re({},e9,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),eH=Fe(Yj),tH=[9,13,27,32],Jw=Mt&&"CompositionEvent"in window,Cn=null;Mt&&"documentMode"in document&&(Cn=document.documentMode);var aH=Mt&&"TextEvent"in window&&!Cn,DC=Mt&&(!Jw||Cn&&8<Cn&&11>=Cn),KL=" ",XL=!1;function NC(e,t){switch(e){case"keyup":return tH.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function TC(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qa=!1;function nH(e,t){switch(e){case"compositionend":return TC(t);case"keypress":return t.which!==32?null:(XL=!0,KL);case"textInput":return e=t.data,e===KL&&XL?null:e;default:return null}}function rH(e,t){if(qa)return e==="compositionend"||!Jw&&NC(e,t)?(e=PC(),Kr=Kw=At=null,qa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return DC&&t.locale!=="ko"?null:t.data;default:return null}}var oH={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function QL(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!oH[e.type]:t==="textarea"}function VC(e,t,a,r){pC(r),t=DM(t,"onChange"),0<t.length&&(a=new Xw("onChange","change",null,a,r),e.push({event:a,listeners:t}))}var Sn=null,yr=null;function iH(e){GC(e,0)}function t9(e){var t=Da(e);if(lC(t))return e}function lH(e,t){if(e==="change")return t}var FC=!1;if(Mt){var b9;if(Mt){var C9="oninput"in document;if(!C9){var JL=document.createElement("div");JL.setAttribute("oninput","return;"),C9=typeof JL.oninput=="function"}b9=C9}else b9=!1;FC=b9&&(!document.documentMode||9<document.documentMode)}function YL(){Sn&&(Sn.detachEvent("onpropertychange",EC),yr=Sn=null)}function EC(e){if(e.propertyName==="value"&&t9(yr)){var t=[];VC(t,yr,e,$w(e)),xC(iH,t)}}function cH(e,t,a){e==="focusin"?(YL(),Sn=t,yr=a,Sn.attachEvent("onpropertychange",EC)):e==="focusout"&&YL()}function dH(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return t9(yr)}function sH(e,t){if(e==="click")return t9(t)}function hH(e,t){if(e==="input"||e==="change")return t9(t)}function yH(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ye=typeof Object.is=="function"?Object.is:yH;function ur(e,t){if(Ye(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),r=Object.keys(t);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var o=a[r];if(!R9.call(t,o)||!Ye(e[o],t[o]))return!1}return!0}function eb(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tb(e,t){var a=eb(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=t&&r>=t)return{node:a,offset:t-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=eb(a)}}function BC(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?BC(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function RC(){for(var e=window,t=IM();t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=IM(e.document)}return t}function Yw(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function uH(e){var t=RC(),a=e.focusedElem,r=e.selectionRange;if(t!==a&&a&&a.ownerDocument&&BC(a.ownerDocument.documentElement,a)){if(r!==null&&Yw(a)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in a)a.selectionStart=t,a.selectionEnd=Math.min(e,a.value.length);else if(e=(t=a.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=a.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=tb(a,l);var c=tb(a,r);o&&c&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(c.node,c.offset)):(t.setEnd(c.node,c.offset),e.addRange(t)))}}for(t=[],e=a;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<t.length;a++)e=t[a],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var pH=Mt&&"documentMode"in document&&11>=document.documentMode,Aa=null,iw=null,In=null,lw=!1;function ab(e,t,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;lw||Aa==null||Aa!==IM(r)||(r=Aa,"selectionStart"in r&&Yw(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),In&&ur(In,r)||(In=r,r=DM(iw,"onSelect"),0<r.length&&(t=new Xw("onSelect","select",null,t,a),e.push({event:t,listeners:r}),t.target=Aa)))}function Vr(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Pa={animationend:Vr("Animation","AnimationEnd"),animationiteration:Vr("Animation","AnimationIteration"),animationstart:Vr("Animation","AnimationStart"),transitionend:Vr("Transition","TransitionEnd")},S9={},OC={};Mt&&(OC=document.createElement("div").style,"AnimationEvent"in window||(delete Pa.animationend.animation,delete Pa.animationiteration.animation,delete Pa.animationstart.animation),"TransitionEvent"in window||delete Pa.transitionend.transition);function a9(e){if(S9[e])return S9[e];if(!Pa[e])return e;var t=Pa[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in OC)return S9[e]=t[a];return e}var UC=a9("animationend"),$C=a9("animationiteration"),_C=a9("animationstart"),ZC=a9("transitionend"),WC=new Map,nb="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $t(e,t){WC.set(e,t),Sa(t,[e])}for(var I9=0;I9<nb.length;I9++){var j9=nb[I9],kH=j9.toLowerCase(),gH=j9[0].toUpperCase()+j9.slice(1);$t(kH,"on"+gH)}$t(UC,"onAnimationEnd");$t($C,"onAnimationIteration");$t(_C,"onAnimationStart");$t("dblclick","onDoubleClick");$t("focusin","onFocus");$t("focusout","onBlur");$t(ZC,"onTransitionEnd");en("onMouseEnter",["mouseout","mouseover"]);en("onMouseLeave",["mouseout","mouseover"]);en("onPointerEnter",["pointerout","pointerover"]);en("onPointerLeave",["pointerout","pointerover"]);Sa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sa("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mH=new Set("cancel close invalid load scroll toggle".split(" ").concat(wn));function rb(e,t,a){var r=e.type||"unknown-event";e.currentTarget=a,kj(r,t,void 0,e),e.currentTarget=null}function GC(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var c=r.length-1;0<=c;c--){var d=r[c],s=d.instance,y=d.currentTarget;if(d=d.listener,s!==l&&o.isPropagationStopped())break e;rb(o,d,y),l=s}else for(c=0;c<r.length;c++){if(d=r[c],s=d.instance,y=d.currentTarget,d=d.listener,s!==l&&o.isPropagationStopped())break e;rb(o,d,y),l=s}}}if(HM)throw e=aw,HM=!1,aw=null,e}function J(e,t){var a=t[yw];a===void 0&&(a=t[yw]=new Set);var r=e+"__bubble";a.has(r)||(KC(t,e,2,!1),a.add(r))}function H9(e,t,a){var r=0;t&&(r|=4),KC(a,e,r,t)}var Fr="_reactListening"+Math.random().toString(36).slice(2);function pr(e){if(!e[Fr]){e[Fr]=!0,aC.forEach(function(a){a!=="selectionchange"&&(mH.has(a)||H9(a,!1,e),H9(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fr]||(t[Fr]=!0,H9("selectionchange",!1,t))}}function KC(e,t,a,r){switch(AC(t)){case 1:var o=qj;break;case 4:o=Aj;break;default:o=Gw}a=o.bind(null,t,a,e),o=void 0,!tw||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,a,{capture:!0,passive:o}):e.addEventListener(t,a,!0):o!==void 0?e.addEventListener(t,a,{passive:o}):e.addEventListener(t,a,!1)}function z9(e,t,a,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var c=r.tag;if(c===3||c===4){var d=r.stateNode.containerInfo;if(d===o||d.nodeType===8&&d.parentNode===o)break;if(c===4)for(c=r.return;c!==null;){var s=c.tag;if((s===3||s===4)&&(s=c.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;c=c.return}for(;d!==null;){if(c=ya(d),c===null)return;if(s=c.tag,s===5||s===6){r=l=c;continue e}d=d.parentNode}}r=r.return}xC(function(){var y=l,g=$w(a),v=[];e:{var m=WC.get(e);if(m!==void 0){var j=Xw,f=e;switch(e){case"keypress":if(Xr(a)===0)break e;case"keydown":case"keyup":j=Wj;break;case"focusin":f="focus",j=L9;break;case"focusout":f="blur",j=L9;break;case"beforeblur":case"afterblur":j=L9;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=ZL;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Nj;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Xj;break;case UC:case $C:case _C:j=Fj;break;case ZC:j=Jj;break;case"scroll":j=Pj;break;case"wheel":j=eH;break;case"copy":case"cut":case"paste":j=Bj;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=GL}var w=(t&4)!==0,A=!w&&e==="scroll",p=w?m!==null?m+"Capture":null:m;w=[];for(var u=y,h;u!==null;){h=u;var k=h.stateNode;if(h.tag===5&&k!==null&&(h=k,p!==null&&(k=cr(u,p),k!=null&&w.push(kr(u,k,h)))),A)break;u=u.return}0<w.length&&(m=new j(m,f,null,a,g),v.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",m&&a!==Y9&&(f=a.relatedTarget||a.fromElement)&&(ya(f)||f[wt]))break e;if((j||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,j?(f=a.relatedTarget||a.toElement,j=y,f=f?ya(f):null,f!==null&&(A=Ia(f),f!==A||f.tag!==5&&f.tag!==6)&&(f=null)):(j=null,f=y),j!==f)){if(w=ZL,k="onMouseLeave",p="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(w=GL,k="onPointerLeave",p="onPointerEnter",u="pointer"),A=j==null?m:Da(j),h=f==null?m:Da(f),m=new w(k,u+"leave",j,a,g),m.target=A,m.relatedTarget=h,k=null,ya(g)===y&&(w=new w(p,u+"enter",f,a,g),w.target=h,w.relatedTarget=A,k=w),A=k,j&&f)t:{for(w=j,p=f,u=0,h=w;h;h=ja(h))u++;for(h=0,k=p;k;k=ja(k))h++;for(;0<u-h;)w=ja(w),u--;for(;0<h-u;)p=ja(p),h--;for(;u--;){if(w===p||p!==null&&w===p.alternate)break t;w=ja(w),p=ja(p)}w=null}else w=null;j!==null&&ob(v,m,j,w,!1),f!==null&&A!==null&&ob(v,A,f,w,!0)}}e:{if(m=y?Da(y):window,j=m.nodeName&&m.nodeName.toLowerCase(),j==="select"||j==="input"&&m.type==="file")var I=lH;else if(QL(m))if(FC)I=hH;else{I=dH;var z=cH}else(j=m.nodeName)&&j.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(I=sH);if(I&&(I=I(e,y))){VC(v,I,a,g);break e}z&&z(e,m,y),e==="focusout"&&(z=m._wrapperState)&&z.controlled&&m.type==="number"&&G9(m,"number",m.value)}switch(z=y?Da(y):window,e){case"focusin":(QL(z)||z.contentEditable==="true")&&(Aa=z,iw=y,In=null);break;case"focusout":In=iw=Aa=null;break;case"mousedown":lw=!0;break;case"contextmenu":case"mouseup":case"dragend":lw=!1,ab(v,a,g);break;case"selectionchange":if(pH)break;case"keydown":case"keyup":ab(v,a,g)}var b;if(Jw)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else qa?NC(e,a)&&(C="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(C="onCompositionStart");C&&(DC&&a.locale!=="ko"&&(qa||C!=="onCompositionStart"?C==="onCompositionEnd"&&qa&&(b=PC()):(At=g,Kw="value"in At?At.value:At.textContent,qa=!0)),z=DM(y,C),0<z.length&&(C=new WL(C,e,null,a,g),v.push({event:C,listeners:z}),b?C.data=b:(b=TC(a),b!==null&&(C.data=b)))),(b=aH?nH(e,a):rH(e,a))&&(y=DM(y,"onBeforeInput"),0<y.length&&(g=new WL("onBeforeInput","beforeinput",null,a,g),v.push({event:g,listeners:y}),g.data=b))}GC(v,t)})}function kr(e,t,a){return{instance:e,listener:t,currentTarget:a}}function DM(e,t){for(var a=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=cr(e,a),l!=null&&r.unshift(kr(e,l,o)),l=cr(e,t),l!=null&&r.push(kr(e,l,o))),e=e.return}return r}function ja(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ob(e,t,a,r,o){for(var l=t._reactName,c=[];a!==null&&a!==r;){var d=a,s=d.alternate,y=d.stateNode;if(s!==null&&s===r)break;d.tag===5&&y!==null&&(d=y,o?(s=cr(a,l),s!=null&&c.unshift(kr(a,s,d))):o||(s=cr(a,l),s!=null&&c.push(kr(a,s,d)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var xH=/\r\n?/g,fH=/\u0000|\uFFFD/g;function ib(e){return(typeof e=="string"?e:""+e).replace(xH,`
`).replace(fH,"")}function Er(e,t,a){if(t=ib(t),ib(e)!==t&&a)throw Error(H(425))}function NM(){}var cw=null,dw=null;function sw(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hw=typeof setTimeout=="function"?setTimeout:void 0,vH=typeof clearTimeout=="function"?clearTimeout:void 0,lb=typeof Promise=="function"?Promise:void 0,MH=typeof queueMicrotask=="function"?queueMicrotask:typeof lb<"u"?function(e){return lb.resolve(null).then(e).catch(wH)}:hw;function wH(e){setTimeout(function(){throw e})}function q9(e,t){var a=t,r=0;do{var o=a.nextSibling;if(e.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(r===0){e.removeChild(o),hr(t);return}r--}else a!=="$"&&a!=="$?"&&a!=="$!"||r++;a=o}while(a);hr(t)}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function cb(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}var sn=Math.random().toString(36).slice(2),ot="__reactFiber$"+sn,gr="__reactProps$"+sn,wt="__reactContainer$"+sn,yw="__reactEvents$"+sn,LH="__reactListeners$"+sn,bH="__reactHandles$"+sn;function ya(e){var t=e[ot];if(t)return t;for(var a=e.parentNode;a;){if(t=a[wt]||a[ot]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=cb(e);e!==null;){if(a=e[ot])return a;e=cb(e)}return t}e=a,a=e.parentNode}return null}function Sr(e){return e=e[ot]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Da(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(H(33))}function n9(e){return e[gr]||null}var uw=[],Na=-1;function _t(e){return{current:e}}function Y(e){0>Na||(e.current=uw[Na],uw[Na]=null,Na--)}function Q(e,t){Na++,uw[Na]=e.current,e.current=t}var Ut={},fe=_t(Ut),He=_t(!1),Ma=Ut;function tn(e,t){var a=e.type.contextTypes;if(!a)return Ut;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in a)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ze(e){return e=e.childContextTypes,e!=null}function TM(){Y(He),Y(fe)}function db(e,t,a){if(fe.current!==Ut)throw Error(H(168));Q(fe,t),Q(He,a)}function XC(e,t,a){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return a;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(H(108,cj(e)||"Unknown",o));return re({},a,r)}function VM(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ut,Ma=fe.current,Q(fe,e),Q(He,He.current),!0}function sb(e,t,a){var r=e.stateNode;if(!r)throw Error(H(169));a?(e=XC(e,t,Ma),r.__reactInternalMemoizedMergedChildContext=e,Y(He),Y(fe),Q(fe,e)):Y(He),Q(He,a)}var kt=null,r9=!1,A9=!1;function QC(e){kt===null?kt=[e]:kt.push(e)}function CH(e){r9=!0,QC(e)}function Zt(){if(!A9&&kt!==null){A9=!0;var e=0,t=K;try{var a=kt;for(K=1;e<a.length;e++){var r=a[e];do r=r(!0);while(r!==null)}kt=null,r9=!1}catch(o){throw kt!==null&&(kt=kt.slice(e+1)),wC(_w,Zt),o}finally{K=t,A9=!1}}return null}var Ta=[],Va=0,FM=null,EM=0,Be=[],Re=0,wa=null,gt=1,mt="";function Gt(e,t){Ta[Va++]=EM,Ta[Va++]=FM,FM=e,EM=t}function JC(e,t,a){Be[Re++]=gt,Be[Re++]=mt,Be[Re++]=wa,wa=e;var r=gt;e=mt;var o=32-Qe(r)-1;r&=~(1<<o),a+=1;var l=32-Qe(t)+o;if(30<l){var c=o-o%5;l=(r&(1<<c)-1).toString(32),r>>=c,o-=c,gt=1<<32-Qe(t)+o|a<<o|r,mt=l+e}else gt=1<<l|a<<o|r,mt=e}function eL(e){e.return!==null&&(Gt(e,1),JC(e,1,0))}function tL(e){for(;e===FM;)FM=Ta[--Va],Ta[Va]=null,EM=Ta[--Va],Ta[Va]=null;for(;e===wa;)wa=Be[--Re],Be[Re]=null,mt=Be[--Re],Be[Re]=null,gt=Be[--Re],Be[Re]=null}var Ne=null,De=null,ee=!1,Ke=null;function YC(e,t){var a=Oe(5,null,null,0);a.elementType="DELETED",a.stateNode=t,a.return=e,t=e.deletions,t===null?(e.deletions=[a],e.flags|=16):t.push(a)}function hb(e,t){switch(e.tag){case 5:var a=e.type;return t=t.nodeType!==1||a.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,De=Vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,De=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(a=wa!==null?{id:gt,overflow:mt}:null,e.memoizedState={dehydrated:t,treeContext:a,retryLane:1073741824},a=Oe(18,null,null,0),a.stateNode=t,a.return=e,e.child=a,Ne=e,De=null,!0):!1;default:return!1}}function pw(e){return(e.mode&1)!==0&&(e.flags&128)===0}function kw(e){if(ee){var t=De;if(t){var a=t;if(!hb(e,t)){if(pw(e))throw Error(H(418));t=Vt(a.nextSibling);var r=Ne;t&&hb(e,t)?YC(r,a):(e.flags=e.flags&-4097|2,ee=!1,Ne=e)}}else{if(pw(e))throw Error(H(418));e.flags=e.flags&-4097|2,ee=!1,Ne=e}}}function yb(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function Br(e){if(e!==Ne)return!1;if(!ee)return yb(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!sw(e.type,e.memoizedProps)),t&&(t=De)){if(pw(e))throw eS(),Error(H(418));for(;t;)YC(e,t),t=Vt(t.nextSibling)}if(yb(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(H(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"){if(t===0){De=Vt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++}e=e.nextSibling}De=null}}else De=Ne?Vt(e.stateNode.nextSibling):null;return!0}function eS(){for(var e=De;e;)e=Vt(e.nextSibling)}function an(){De=Ne=null,ee=!1}function aL(e){Ke===null?Ke=[e]:Ke.push(e)}var SH=Ct.ReactCurrentBatchConfig;function gn(e,t,a){if(e=a.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(H(309));var r=a.stateNode}if(!r)throw Error(H(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(c){var d=o.refs;c===null?delete d[l]:d[l]=c},t._stringRef=l,t)}if(typeof e!="string")throw Error(H(284));if(!a._owner)throw Error(H(290,e))}return e}function Rr(e,t){throw e=Object.prototype.toString.call(t),Error(H(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ub(e){var t=e._init;return t(e._payload)}function tS(e){function t(p,u){if(e){var h=p.deletions;h===null?(p.deletions=[u],p.flags|=16):h.push(u)}}function a(p,u){if(!e)return null;for(;u!==null;)t(p,u),u=u.sibling;return null}function r(p,u){for(p=new Map;u!==null;)u.key!==null?p.set(u.key,u):p.set(u.index,u),u=u.sibling;return p}function o(p,u){return p=Rt(p,u),p.index=0,p.sibling=null,p}function l(p,u,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<u?(p.flags|=2,u):h):(p.flags|=2,u)):(p.flags|=1048576,u)}function c(p){return e&&p.alternate===null&&(p.flags|=2),p}function d(p,u,h,k){return u===null||u.tag!==6?(u=E9(h,p.mode,k),u.return=p,u):(u=o(u,h),u.return=p,u)}function s(p,u,h,k){var I=h.type;return I===za?g(p,u,h.props.children,k,h.key):u!==null&&(u.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===jt&&ub(I)===u.type)?(k=o(u,h.props),k.ref=gn(p,u,h),k.return=p,k):(k=n2(h.type,h.key,h.props,null,p.mode,k),k.ref=gn(p,u,h),k.return=p,k)}function y(p,u,h,k){return u===null||u.tag!==4||u.stateNode.containerInfo!==h.containerInfo||u.stateNode.implementation!==h.implementation?(u=B9(h,p.mode,k),u.return=p,u):(u=o(u,h.children||[]),u.return=p,u)}function g(p,u,h,k,I){return u===null||u.tag!==7?(u=ga(h,p.mode,k,I),u.return=p,u):(u=o(u,h),u.return=p,u)}function v(p,u,h){if(typeof u=="string"&&u!==""||typeof u=="number")return u=E9(""+u,p.mode,h),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case zr:return h=n2(u.type,u.key,u.props,null,p.mode,h),h.ref=gn(p,null,u),h.return=p,h;case Ha:return u=B9(u,p.mode,h),u.return=p,u;case jt:var k=u._init;return v(p,k(u._payload),h)}if(vn(u)||hn(u))return u=ga(u,p.mode,h,null),u.return=p,u;Rr(p,u)}return null}function m(p,u,h,k){var I=u!==null?u.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return I!==null?null:d(p,u,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case zr:return h.key===I?s(p,u,h,k):null;case Ha:return h.key===I?y(p,u,h,k):null;case jt:return I=h._init,m(p,u,I(h._payload),k)}if(vn(h)||hn(h))return I!==null?null:g(p,u,h,k,null);Rr(p,h)}return null}function j(p,u,h,k,I){if(typeof k=="string"&&k!==""||typeof k=="number")return p=p.get(h)||null,d(u,p,""+k,I);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case zr:return p=p.get(k.key===null?h:k.key)||null,s(u,p,k,I);case Ha:return p=p.get(k.key===null?h:k.key)||null,y(u,p,k,I);case jt:var z=k._init;return j(p,u,h,z(k._payload),I)}if(vn(k)||hn(k))return p=p.get(h)||null,g(u,p,k,I,null);Rr(u,k)}return null}function f(p,u,h,k){for(var I=null,z=null,b=u,C=u=0,V=null;b!==null&&C<h.length;C++){b.index>C?(V=b,b=null):V=b.sibling;var S=m(p,b,h[C],k);if(S===null){b===null&&(b=V);break}e&&b&&S.alternate===null&&t(p,b),u=l(S,u,C),z===null?I=S:z.sibling=S,z=S,b=V}if(C===h.length)return a(p,b),ee&&Gt(p,C),I;if(b===null){for(;C<h.length;C++)b=v(p,h[C],k),b!==null&&(u=l(b,u,C),z===null?I=b:z.sibling=b,z=b);return ee&&Gt(p,C),I}for(b=r(p,b);C<h.length;C++)V=j(b,p,C,h[C],k),V!==null&&(e&&V.alternate!==null&&b.delete(V.key===null?C:V.key),u=l(V,u,C),z===null?I=V:z.sibling=V,z=V);return e&&b.forEach(function(R){return t(p,R)}),ee&&Gt(p,C),I}function w(p,u,h,k){var I=hn(h);if(typeof I!="function")throw Error(H(150));if(h=I.call(h),h==null)throw Error(H(151));for(var z=I=null,b=u,C=u=0,V=null,S=h.next();b!==null&&!S.done;C++,S=h.next()){b.index>C?(V=b,b=null):V=b.sibling;var R=m(p,b,S.value,k);if(R===null){b===null&&(b=V);break}e&&b&&R.alternate===null&&t(p,b),u=l(R,u,C),z===null?I=R:z.sibling=R,z=R,b=V}if(S.done)return a(p,b),ee&&Gt(p,C),I;if(b===null){for(;!S.done;C++,S=h.next())S=v(p,S.value,k),S!==null&&(u=l(S,u,C),z===null?I=S:z.sibling=S,z=S);return ee&&Gt(p,C),I}for(b=r(p,b);!S.done;C++,S=h.next())S=j(b,p,C,S.value,k),S!==null&&(e&&S.alternate!==null&&b.delete(S.key===null?C:S.key),u=l(S,u,C),z===null?I=S:z.sibling=S,z=S);return e&&b.forEach(function(E){return t(p,E)}),ee&&Gt(p,C),I}function A(p,u,h,k){if(typeof h=="object"&&h!==null&&h.type===za&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case zr:e:{for(var I=h.key,z=u;z!==null;){if(z.key===I){if(I=h.type,I===za){if(z.tag===7){a(p,z.sibling),u=o(z,h.props.children),u.return=p,p=u;break e}}else if(z.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===jt&&ub(I)===z.type){a(p,z.sibling),u=o(z,h.props),u.ref=gn(p,z,h),u.return=p,p=u;break e}a(p,z);break}else t(p,z);z=z.sibling}h.type===za?(u=ga(h.props.children,p.mode,k,h.key),u.return=p,p=u):(k=n2(h.type,h.key,h.props,null,p.mode,k),k.ref=gn(p,u,h),k.return=p,p=k)}return c(p);case Ha:e:{for(z=h.key;u!==null;){if(u.key===z)if(u.tag===4&&u.stateNode.containerInfo===h.containerInfo&&u.stateNode.implementation===h.implementation){a(p,u.sibling),u=o(u,h.children||[]),u.return=p,p=u;break e}else{a(p,u);break}else t(p,u);u=u.sibling}u=B9(h,p.mode,k),u.return=p,p=u}return c(p);case jt:return z=h._init,A(p,u,z(h._payload),k)}if(vn(h))return f(p,u,h,k);if(hn(h))return w(p,u,h,k);Rr(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,u!==null&&u.tag===6?(a(p,u.sibling),u=o(u,h),u.return=p,p=u):(a(p,u),u=E9(h,p.mode,k),u.return=p,p=u),c(p)):a(p,u)}return A}var nn=tS(!0),aS=tS(!1),BM=_t(null),RM=null,Fa=null,nL=null;function rL(){nL=Fa=RM=null}function oL(e){var t=BM.current;Y(BM),e._currentValue=t}function gw(e,t,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===a)break;e=e.return}}function _a(e,t){RM=e,nL=Fa=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(je=!0),e.firstContext=null)}function $e(e){var t=e._currentValue;if(nL!==e)if(e={context:e,memoizedValue:t,next:null},Fa===null){if(RM===null)throw Error(H(308));Fa=e,RM.dependencies={lanes:0,firstContext:e}}else Fa=Fa.next=e;return t}var ua=null;function iL(e){ua===null?ua=[e]:ua.push(e)}function nS(e,t,a,r){var o=t.interleaved;return o===null?(a.next=a,iL(t)):(a.next=o.next,o.next=a),t.interleaved=a,Lt(e,r)}function Lt(e,t){e.lanes|=t;var a=e.alternate;for(a!==null&&(a.lanes|=t),a=e,e=e.return;e!==null;)e.childLanes|=t,a=e.alternate,a!==null&&(a.childLanes|=t),a=e,e=e.return;return a.tag===3?a.stateNode:null}var Ht=!1;function lL(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rS(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ft(e,t,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Lt(e,a)}return o=r.interleaved,o===null?(t.next=t,iL(r)):(t.next=o.next,o.next=t),r.interleaved=t,Lt(e,a)}function Qr(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,a|=r,t.lanes=a,Zw(e,a)}}function pb(e,t){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var o=null,l=null;if(a=a.firstBaseUpdate,a!==null){do{var c={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};l===null?o=l=c:l=l.next=c,a=a.next}while(a!==null);l===null?o=l=t:l=l.next=t}else o=l=t;a={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}function OM(e,t,a,r){var o=e.updateQueue;Ht=!1;var l=o.firstBaseUpdate,c=o.lastBaseUpdate,d=o.shared.pending;if(d!==null){o.shared.pending=null;var s=d,y=s.next;s.next=null,c===null?l=y:c.next=y,c=s;var g=e.alternate;g!==null&&(g=g.updateQueue,d=g.lastBaseUpdate,d!==c&&(d===null?g.firstBaseUpdate=y:d.next=y,g.lastBaseUpdate=s))}if(l!==null){var v=o.baseState;c=0,g=y=s=null,d=l;do{var m=d.lane,j=d.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:j,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var f=e,w=d;switch(m=t,j=a,w.tag){case 1:if(f=w.payload,typeof f=="function"){v=f.call(j,v,m);break e}v=f;break e;case 3:f.flags=f.flags&-65537|128;case 0:if(f=w.payload,m=typeof f=="function"?f.call(j,v,m):f,m==null)break e;v=re({},v,m);break e;case 2:Ht=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[d]:m.push(d))}else j={eventTime:j,lane:m,tag:d.tag,payload:d.payload,callback:d.callback,next:null},g===null?(y=g=j,s=v):g=g.next=j,c|=m;if(d=d.next,d===null){if(d=o.shared.pending,d===null)break;m=d,d=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(g===null&&(s=v),o.baseState=s,o.firstBaseUpdate=y,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do c|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);ba|=c,e.lanes=c,e.memoizedState=v}}function kb(e,t,a){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=a,typeof o!="function")throw Error(H(191,o));o.call(r)}}}var Ir={},ct=_t(Ir),mr=_t(Ir),xr=_t(Ir);function pa(e){if(e===Ir)throw Error(H(174));return e}function cL(e,t){switch(Q(xr,t),Q(mr,e),Q(ct,Ir),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:X9(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=X9(t,e)}Y(ct),Q(ct,t)}function rn(){Y(ct),Y(mr),Y(xr)}function oS(e){pa(xr.current);var t=pa(ct.current),a=X9(t,e.type);t!==a&&(Q(mr,e),Q(ct,a))}function dL(e){mr.current===e&&(Y(ct),Y(mr))}var ae=_t(0);function UM(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var P9=[];function sL(){for(var e=0;e<P9.length;e++)P9[e]._workInProgressVersionPrimary=null;P9.length=0}var Jr=Ct.ReactCurrentDispatcher,D9=Ct.ReactCurrentBatchConfig,La=0,ne=null,ce=null,se=null,$M=!1,jn=!1,fr=0,IH=0;function ge(){throw Error(H(321))}function hL(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Ye(e[a],t[a]))return!1;return!0}function yL(e,t,a,r,o,l){if(La=l,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Jr.current=e===null||e.memoizedState===null?qH:AH,e=a(r,o),jn){l=0;do{if(jn=!1,fr=0,25<=l)throw Error(H(301));l+=1,se=ce=null,t.updateQueue=null,Jr.current=PH,e=a(r,o)}while(jn)}if(Jr.current=_M,t=ce!==null&&ce.next!==null,La=0,se=ce=ne=null,$M=!1,t)throw Error(H(300));return e}function uL(){var e=fr!==0;return fr=0,e}function rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?ne.memoizedState=se=e:se=se.next=e,se}function _e(){if(ce===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=se===null?ne.memoizedState:se.next;if(t!==null)se=t,ce=e;else{if(e===null)throw Error(H(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},se===null?ne.memoizedState=se=e:se=se.next=e}return se}function vr(e,t){return typeof t=="function"?t(e):t}function N9(e){var t=_e(),a=t.queue;if(a===null)throw Error(H(311));a.lastRenderedReducer=e;var r=ce,o=r.baseQueue,l=a.pending;if(l!==null){if(o!==null){var c=o.next;o.next=l.next,l.next=c}r.baseQueue=o=l,a.pending=null}if(o!==null){l=o.next,r=r.baseState;var d=c=null,s=null,y=l;do{var g=y.lane;if((La&g)===g)s!==null&&(s=s.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),r=y.hasEagerState?y.eagerState:e(r,y.action);else{var v={lane:g,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};s===null?(d=s=v,c=r):s=s.next=v,ne.lanes|=g,ba|=g}y=y.next}while(y!==null&&y!==l);s===null?c=r:s.next=d,Ye(r,t.memoizedState)||(je=!0),t.memoizedState=r,t.baseState=c,t.baseQueue=s,a.lastRenderedState=r}if(e=a.interleaved,e!==null){o=e;do l=o.lane,ne.lanes|=l,ba|=l,o=o.next;while(o!==e)}else o===null&&(a.lanes=0);return[t.memoizedState,a.dispatch]}function T9(e){var t=_e(),a=t.queue;if(a===null)throw Error(H(311));a.lastRenderedReducer=e;var r=a.dispatch,o=a.pending,l=t.memoizedState;if(o!==null){a.pending=null;var c=o=o.next;do l=e(l,c.action),c=c.next;while(c!==o);Ye(l,t.memoizedState)||(je=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),a.lastRenderedState=l}return[l,r]}function iS(){}function lS(e,t){var a=ne,r=_e(),o=t(),l=!Ye(r.memoizedState,o);if(l&&(r.memoizedState=o,je=!0),r=r.queue,pL(sS.bind(null,a,r,e),[e]),r.getSnapshot!==t||l||se!==null&&se.memoizedState.tag&1){if(a.flags|=2048,Mr(9,dS.bind(null,a,r,o,t),void 0,null),he===null)throw Error(H(349));La&30||cS(a,t,o)}return o}function cS(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function dS(e,t,a,r){t.value=a,t.getSnapshot=r,hS(t)&&yS(e)}function sS(e,t,a){return a(function(){hS(t)&&yS(e)})}function hS(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Ye(e,a)}catch{return!0}}function yS(e){var t=Lt(e,1);t!==null&&Je(t,e,1,-1)}function gb(e){var t=rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vr,lastRenderedState:e},t.queue=e,e=e.dispatch=zH.bind(null,ne,e),[t.memoizedState,e]}function Mr(e,t,a,r){return e={tag:e,create:t,destroy:a,deps:r,next:null},t=ne.updateQueue,t===null?(t={lastEffect:null,stores:null},ne.updateQueue=t,t.lastEffect=e.next=e):(a=t.lastEffect,a===null?t.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,t.lastEffect=e)),e}function uS(){return _e().memoizedState}function Yr(e,t,a,r){var o=rt();ne.flags|=e,o.memoizedState=Mr(1|t,a,void 0,r===void 0?null:r)}function o9(e,t,a,r){var o=_e();r=r===void 0?null:r;var l=void 0;if(ce!==null){var c=ce.memoizedState;if(l=c.destroy,r!==null&&hL(r,c.deps)){o.memoizedState=Mr(t,a,l,r);return}}ne.flags|=e,o.memoizedState=Mr(1|t,a,l,r)}function mb(e,t){return Yr(8390656,8,e,t)}function pL(e,t){return o9(2048,8,e,t)}function pS(e,t){return o9(4,2,e,t)}function kS(e,t){return o9(4,4,e,t)}function gS(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mS(e,t,a){return a=a!=null?a.concat([e]):null,o9(4,4,gS.bind(null,t,e),a)}function kL(){}function xS(e,t){var a=_e();t=t===void 0?null:t;var r=a.memoizedState;return r!==null&&t!==null&&hL(t,r[1])?r[0]:(a.memoizedState=[e,t],e)}function fS(e,t){var a=_e();t=t===void 0?null:t;var r=a.memoizedState;return r!==null&&t!==null&&hL(t,r[1])?r[0]:(e=e(),a.memoizedState=[e,t],e)}function vS(e,t,a){return La&21?(Ye(a,t)||(a=CC(),ne.lanes|=a,ba|=a,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=a)}function jH(e,t){var a=K;K=a!==0&&4>a?a:4,e(!0);var r=D9.transition;D9.transition={};try{e(!1),t()}finally{K=a,D9.transition=r}}function MS(){return _e().memoizedState}function HH(e,t,a){var r=Bt(e);if(a={lane:r,action:a,hasEagerState:!1,eagerState:null,next:null},wS(e))LS(t,a);else if(a=nS(e,t,a,r),a!==null){var o=we();Je(a,e,r,o),bS(a,t,r)}}function zH(e,t,a){var r=Bt(e),o={lane:r,action:a,hasEagerState:!1,eagerState:null,next:null};if(wS(e))LS(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var c=t.lastRenderedState,d=l(c,a);if(o.hasEagerState=!0,o.eagerState=d,Ye(d,c)){var s=t.interleaved;s===null?(o.next=o,iL(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}a=nS(e,t,o,r),a!==null&&(o=we(),Je(a,e,r,o),bS(a,t,r))}}function wS(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function LS(e,t){jn=$M=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function bS(e,t,a){if(a&4194240){var r=t.lanes;r&=e.pendingLanes,a|=r,t.lanes=a,Zw(e,a)}}var _M={readContext:$e,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},qH={readContext:$e,useCallback:function(e,t){return rt().memoizedState=[e,t===void 0?null:t],e},useContext:$e,useEffect:mb,useImperativeHandle:function(e,t,a){return a=a!=null?a.concat([e]):null,Yr(4194308,4,gS.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Yr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Yr(4,2,e,t)},useMemo:function(e,t){var a=rt();return t=t===void 0?null:t,e=e(),a.memoizedState=[e,t],e},useReducer:function(e,t,a){var r=rt();return t=a!==void 0?a(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=HH.bind(null,ne,e),[r.memoizedState,e]},useRef:function(e){var t=rt();return e={current:e},t.memoizedState=e},useState:gb,useDebugValue:kL,useDeferredValue:function(e){return rt().memoizedState=e},useTransition:function(){var e=gb(!1),t=e[0];return e=jH.bind(null,e[1]),rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,a){var r=ne,o=rt();if(ee){if(a===void 0)throw Error(H(407));a=a()}else{if(a=t(),he===null)throw Error(H(349));La&30||cS(r,t,a)}o.memoizedState=a;var l={value:a,getSnapshot:t};return o.queue=l,mb(sS.bind(null,r,l,e),[e]),r.flags|=2048,Mr(9,dS.bind(null,r,l,a,t),void 0,null),a},useId:function(){var e=rt(),t=he.identifierPrefix;if(ee){var a=mt,r=gt;a=(r&~(1<<32-Qe(r)-1)).toString(32)+a,t=":"+t+"R"+a,a=fr++,0<a&&(t+="H"+a.toString(32)),t+=":"}else a=IH++,t=":"+t+"r"+a.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},AH={readContext:$e,useCallback:xS,useContext:$e,useEffect:pL,useImperativeHandle:mS,useInsertionEffect:pS,useLayoutEffect:kS,useMemo:fS,useReducer:N9,useRef:uS,useState:function(){return N9(vr)},useDebugValue:kL,useDeferredValue:function(e){var t=_e();return vS(t,ce.memoizedState,e)},useTransition:function(){var e=N9(vr)[0],t=_e().memoizedState;return[e,t]},useMutableSource:iS,useSyncExternalStore:lS,useId:MS,unstable_isNewReconciler:!1},PH={readContext:$e,useCallback:xS,useContext:$e,useEffect:pL,useImperativeHandle:mS,useInsertionEffect:pS,useLayoutEffect:kS,useMemo:fS,useReducer:T9,useRef:uS,useState:function(){return T9(vr)},useDebugValue:kL,useDeferredValue:function(e){var t=_e();return ce===null?t.memoizedState=e:vS(t,ce.memoizedState,e)},useTransition:function(){var e=T9(vr)[0],t=_e().memoizedState;return[e,t]},useMutableSource:iS,useSyncExternalStore:lS,useId:MS,unstable_isNewReconciler:!1};function We(e,t){if(e&&e.defaultProps){t=re({},t),e=e.defaultProps;for(var a in e)t[a]===void 0&&(t[a]=e[a]);return t}return t}function mw(e,t,a,r){t=e.memoizedState,a=a(r,t),a=a==null?t:re({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var i9={isMounted:function(e){return(e=e._reactInternals)?Ia(e)===e:!1},enqueueSetState:function(e,t,a){e=e._reactInternals;var r=we(),o=Bt(e),l=ft(r,o);l.payload=t,a!=null&&(l.callback=a),t=Ft(e,l,o),t!==null&&(Je(t,e,o,r),Qr(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var r=we(),o=Bt(e),l=ft(r,o);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=Ft(e,l,o),t!==null&&(Je(t,e,o,r),Qr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=we(),r=Bt(e),o=ft(a,r);o.tag=2,t!=null&&(o.callback=t),t=Ft(e,o,r),t!==null&&(Je(t,e,r,a),Qr(t,e,r))}};function xb(e,t,a,r,o,l,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,c):t.prototype&&t.prototype.isPureReactComponent?!ur(a,r)||!ur(o,l):!0}function CS(e,t,a){var r=!1,o=Ut,l=t.contextType;return typeof l=="object"&&l!==null?l=$e(l):(o=ze(t)?Ma:fe.current,r=t.contextTypes,l=(r=r!=null)?tn(e,o):Ut),t=new t(a,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=i9,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function fb(e,t,a,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,r),t.state!==e&&i9.enqueueReplaceState(t,t.state,null)}function xw(e,t,a,r){var o=e.stateNode;o.props=a,o.state=e.memoizedState,o.refs={},lL(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=$e(l):(l=ze(t)?Ma:fe.current,o.context=tn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(mw(e,t,l,a),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&i9.enqueueReplaceState(o,o.state,null),OM(e,a,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function on(e,t){try{var a="",r=t;do a+=lj(r),r=r.return;while(r);var o=a}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function V9(e,t,a){return{value:e,source:null,stack:a??null,digest:t??null}}function fw(e,t){try{console.error(t.value)}catch(a){setTimeout(function(){throw a})}}var DH=typeof WeakMap=="function"?WeakMap:Map;function SS(e,t,a){a=ft(-1,a),a.tag=3,a.payload={element:null};var r=t.value;return a.callback=function(){WM||(WM=!0,Hw=r),fw(e,t)},a}function IS(e,t,a){a=ft(-1,a),a.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;a.payload=function(){return r(o)},a.callback=function(){fw(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(a.callback=function(){fw(e,t),typeof r!="function"&&(Et===null?Et=new Set([this]):Et.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})}),a}function vb(e,t,a){var r=e.pingCache;if(r===null){r=e.pingCache=new DH;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(a)||(o.add(a),e=GH.bind(null,e,t,a),t.then(e,e))}function Mb(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function wb(e,t,a,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(t=ft(-1,1),t.tag=2,Ft(a,t,1))),a.lanes|=1),e)}var NH=Ct.ReactCurrentOwner,je=!1;function Me(e,t,a,r){t.child=e===null?aS(t,null,a,r):nn(t,e.child,a,r)}function Lb(e,t,a,r,o){a=a.render;var l=t.ref;return _a(t,o),r=yL(e,t,a,r,l,o),a=uL(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,bt(e,t,o)):(ee&&a&&eL(t),t.flags|=1,Me(e,t,r,o),t.child)}function bb(e,t,a,r,o){if(e===null){var l=a.type;return typeof l=="function"&&!LL(l)&&l.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(t.tag=15,t.type=l,jS(e,t,l,r,o)):(e=n2(a.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var c=l.memoizedProps;if(a=a.compare,a=a!==null?a:ur,a(c,r)&&e.ref===t.ref)return bt(e,t,o)}return t.flags|=1,e=Rt(l,r),e.ref=t.ref,e.return=t,t.child=e}function jS(e,t,a,r,o){if(e!==null){var l=e.memoizedProps;if(ur(l,r)&&e.ref===t.ref)if(je=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(je=!0);else return t.lanes=e.lanes,bt(e,t,o)}return vw(e,t,a,r,o)}function HS(e,t,a){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(Ba,Pe),Pe|=a;else{if(!(a&1073741824))return e=l!==null?l.baseLanes|a:a,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(Ba,Pe),Pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:a,Q(Ba,Pe),Pe|=r}else l!==null?(r=l.baseLanes|a,t.memoizedState=null):r=a,Q(Ba,Pe),Pe|=r;return Me(e,t,o,a),t.child}function zS(e,t){var a=t.ref;(e===null&&a!==null||e!==null&&e.ref!==a)&&(t.flags|=512,t.flags|=2097152)}function vw(e,t,a,r,o){var l=ze(a)?Ma:fe.current;return l=tn(t,l),_a(t,o),a=yL(e,t,a,r,l,o),r=uL(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,bt(e,t,o)):(ee&&r&&eL(t),t.flags|=1,Me(e,t,a,o),t.child)}function Cb(e,t,a,r,o){if(ze(a)){var l=!0;VM(t)}else l=!1;if(_a(t,o),t.stateNode===null)e2(e,t),CS(t,a,r),xw(t,a,r,o),r=!0;else if(e===null){var c=t.stateNode,d=t.memoizedProps;c.props=d;var s=c.context,y=a.contextType;typeof y=="object"&&y!==null?y=$e(y):(y=ze(a)?Ma:fe.current,y=tn(t,y));var g=a.getDerivedStateFromProps,v=typeof g=="function"||typeof c.getSnapshotBeforeUpdate=="function";v||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(d!==r||s!==y)&&fb(t,c,r,y),Ht=!1;var m=t.memoizedState;c.state=m,OM(t,r,c,o),s=t.memoizedState,d!==r||m!==s||He.current||Ht?(typeof g=="function"&&(mw(t,a,g,r),s=t.memoizedState),(d=Ht||xb(t,a,d,r,m,s,y))?(v||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),c.props=r,c.state=s,c.context=y,r=d):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{c=t.stateNode,rS(e,t),d=t.memoizedProps,y=t.type===t.elementType?d:We(t.type,d),c.props=y,v=t.pendingProps,m=c.context,s=a.contextType,typeof s=="object"&&s!==null?s=$e(s):(s=ze(a)?Ma:fe.current,s=tn(t,s));var j=a.getDerivedStateFromProps;(g=typeof j=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(d!==v||m!==s)&&fb(t,c,r,s),Ht=!1,m=t.memoizedState,c.state=m,OM(t,r,c,o);var f=t.memoizedState;d!==v||m!==f||He.current||Ht?(typeof j=="function"&&(mw(t,a,j,r),f=t.memoizedState),(y=Ht||xb(t,a,y,r,m,f,s)||!1)?(g||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,f,s),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,f,s)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||d===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=f),c.props=r,c.state=f,c.context=s,r=y):(typeof c.componentDidUpdate!="function"||d===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Mw(e,t,a,r,l,o)}function Mw(e,t,a,r,o,l){zS(e,t);var c=(t.flags&128)!==0;if(!r&&!c)return o&&sb(t,a,!1),bt(e,t,l);r=t.stateNode,NH.current=t;var d=c&&typeof a.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&c?(t.child=nn(t,e.child,null,l),t.child=nn(t,null,d,l)):Me(e,t,d,l),t.memoizedState=r.state,o&&sb(t,a,!0),t.child}function qS(e){var t=e.stateNode;t.pendingContext?db(e,t.pendingContext,t.pendingContext!==t.context):t.context&&db(e,t.context,!1),cL(e,t.containerInfo)}function Sb(e,t,a,r,o){return an(),aL(o),t.flags|=256,Me(e,t,a,r),t.child}var ww={dehydrated:null,treeContext:null,retryLane:0};function Lw(e){return{baseLanes:e,cachePool:null,transitions:null}}function AS(e,t,a){var r=t.pendingProps,o=ae.current,l=!1,c=(t.flags&128)!==0,d;if((d=c)||(d=e!==null&&e.memoizedState===null?!1:(o&2)!==0),d?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Q(ae,o&1),e===null)return kw(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(c=r.children,e=r.fallback,l?(r=t.mode,l=t.child,c={mode:"hidden",children:c},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=c):l=d9(c,r,0,null),e=ga(e,r,a,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Lw(a),t.memoizedState=ww,e):gL(t,c));if(o=e.memoizedState,o!==null&&(d=o.dehydrated,d!==null))return TH(e,t,c,r,d,o,a);if(l){l=r.fallback,c=t.mode,o=e.child,d=o.sibling;var s={mode:"hidden",children:r.children};return!(c&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Rt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),d!==null?l=Rt(d,l):(l=ga(l,c,a,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,c=e.child.memoizedState,c=c===null?Lw(a):{baseLanes:c.baseLanes|a,cachePool:null,transitions:c.transitions},l.memoizedState=c,l.childLanes=e.childLanes&~a,t.memoizedState=ww,r}return l=e.child,e=l.sibling,r=Rt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=a),r.return=t,r.sibling=null,e!==null&&(a=t.deletions,a===null?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=r,t.memoizedState=null,r}function gL(e,t){return t=d9({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Or(e,t,a,r){return r!==null&&aL(r),nn(t,e.child,null,a),e=gL(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function TH(e,t,a,r,o,l,c){if(a)return t.flags&256?(t.flags&=-257,r=V9(Error(H(422))),Or(e,t,c,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=d9({mode:"visible",children:r.children},o,0,null),l=ga(l,o,c,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&nn(t,e.child,null,c),t.child.memoizedState=Lw(c),t.memoizedState=ww,l);if(!(t.mode&1))return Or(e,t,c,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var d=r.dgst;return r=d,l=Error(H(419)),r=V9(l,r,void 0),Or(e,t,c,r)}if(d=(c&e.childLanes)!==0,je||d){if(r=he,r!==null){switch(c&-c){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|c)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Lt(e,o),Je(r,e,o,-1))}return wL(),r=V9(Error(H(421))),Or(e,t,c,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=KH.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,De=Vt(o.nextSibling),Ne=t,ee=!0,Ke=null,e!==null&&(Be[Re++]=gt,Be[Re++]=mt,Be[Re++]=wa,gt=e.id,mt=e.overflow,wa=t),t=gL(t,r.children),t.flags|=4096,t)}function Ib(e,t,a){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),gw(e.return,t,a)}function F9(e,t,a,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=a,l.tailMode=o)}function PS(e,t,a){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(Me(e,t,r.children,a),r=ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ib(e,a,t);else if(e.tag===19)Ib(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(ae,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(a=t.child,o=null;a!==null;)e=a.alternate,e!==null&&UM(e)===null&&(o=a),a=a.sibling;a=o,a===null?(o=t.child,t.child=null):(o=a.sibling,a.sibling=null),F9(t,!1,o,a,l);break;case"backwards":for(a=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&UM(e)===null){t.child=o;break}e=o.sibling,o.sibling=a,a=o,o=e}F9(t,!0,a,null,l);break;case"together":F9(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function e2(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function bt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ba|=t.lanes,!(a&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(H(153));if(t.child!==null){for(e=t.child,a=Rt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Rt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function VH(e,t,a){switch(t.tag){case 3:qS(t),an();break;case 5:oS(t);break;case 1:ze(t.type)&&VM(t);break;case 4:cL(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Q(BM,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Q(ae,ae.current&1),t.flags|=128,null):a&t.child.childLanes?AS(e,t,a):(Q(ae,ae.current&1),e=bt(e,t,a),e!==null?e.sibling:null);Q(ae,ae.current&1);break;case 19:if(r=(a&t.childLanes)!==0,e.flags&128){if(r)return PS(e,t,a);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Q(ae,ae.current),r)break;return null;case 22:case 23:return t.lanes=0,HS(e,t,a)}return bt(e,t,a)}var DS,bw,NS,TS;DS=function(e,t){for(var a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};bw=function(){};NS=function(e,t,a,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,pa(ct.current);var l=null;switch(a){case"input":o=Z9(e,o),r=Z9(e,r),l=[];break;case"select":o=re({},o,{value:void 0}),r=re({},r,{value:void 0}),l=[];break;case"textarea":o=K9(e,o),r=K9(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=NM)}Q9(a,r);var c;a=null;for(y in o)if(!r.hasOwnProperty(y)&&o.hasOwnProperty(y)&&o[y]!=null)if(y==="style"){var d=o[y];for(c in d)d.hasOwnProperty(c)&&(a||(a={}),a[c]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(ir.hasOwnProperty(y)?l||(l=[]):(l=l||[]).push(y,null));for(y in r){var s=r[y];if(d=o!=null?o[y]:void 0,r.hasOwnProperty(y)&&s!==d&&(s!=null||d!=null))if(y==="style")if(d){for(c in d)!d.hasOwnProperty(c)||s&&s.hasOwnProperty(c)||(a||(a={}),a[c]="");for(c in s)s.hasOwnProperty(c)&&d[c]!==s[c]&&(a||(a={}),a[c]=s[c])}else a||(l||(l=[]),l.push(y,a)),a=s;else y==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,d=d?d.__html:void 0,s!=null&&d!==s&&(l=l||[]).push(y,s)):y==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(y,""+s):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(ir.hasOwnProperty(y)?(s!=null&&y==="onScroll"&&J("scroll",e),l||d===s||(l=[])):(l=l||[]).push(y,s))}a&&(l=l||[]).push("style",a);var y=l;(t.updateQueue=y)&&(t.flags|=4)}};TS=function(e,t,a,r){a!==r&&(t.flags|=4)};function mn(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(t)for(var o=e.child;o!==null;)a|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)a|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=a,t}function FH(e,t,a){var r=t.pendingProps;switch(tL(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return ze(t.type)&&TM(),me(t),null;case 3:return r=t.stateNode,rn(),Y(He),Y(fe),sL(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Br(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ke!==null&&(Aw(Ke),Ke=null))),bw(e,t),me(t),null;case 5:dL(t);var o=pa(xr.current);if(a=t.type,e!==null&&t.stateNode!=null)NS(e,t,a,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(H(166));return me(t),null}if(e=pa(ct.current),Br(t)){r=t.stateNode,a=t.type;var l=t.memoizedProps;switch(r[ot]=t,r[gr]=l,e=(t.mode&1)!==0,a){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(o=0;o<wn.length;o++)J(wn[o],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":TL(r,l),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},J("invalid",r);break;case"textarea":FL(r,l),J("invalid",r)}Q9(a,l),o=null;for(var c in l)if(l.hasOwnProperty(c)){var d=l[c];c==="children"?typeof d=="string"?r.textContent!==d&&(l.suppressHydrationWarning!==!0&&Er(r.textContent,d,e),o=["children",d]):typeof d=="number"&&r.textContent!==""+d&&(l.suppressHydrationWarning!==!0&&Er(r.textContent,d,e),o=["children",""+d]):ir.hasOwnProperty(c)&&d!=null&&c==="onScroll"&&J("scroll",r)}switch(a){case"input":qr(r),VL(r,l,!0);break;case"textarea":qr(r),EL(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=NM)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=sC(a)),e==="http://www.w3.org/1999/xhtml"?a==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=c.createElement(a,{is:r.is}):(e=c.createElement(a),a==="select"&&(c=e,r.multiple?c.multiple=!0:r.size&&(c.size=r.size))):e=c.createElementNS(e,a),e[ot]=t,e[gr]=r,DS(e,t,!1,!1),t.stateNode=e;e:{switch(c=J9(a,r),a){case"dialog":J("cancel",e),J("close",e),o=r;break;case"iframe":case"object":case"embed":J("load",e),o=r;break;case"video":case"audio":for(o=0;o<wn.length;o++)J(wn[o],e);o=r;break;case"source":J("error",e),o=r;break;case"img":case"image":case"link":J("error",e),J("load",e),o=r;break;case"details":J("toggle",e),o=r;break;case"input":TL(e,r),o=Z9(e,r),J("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=re({},r,{value:void 0}),J("invalid",e);break;case"textarea":FL(e,r),o=K9(e,r),J("invalid",e);break;default:o=r}Q9(a,o),d=o;for(l in d)if(d.hasOwnProperty(l)){var s=d[l];l==="style"?uC(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&hC(e,s)):l==="children"?typeof s=="string"?(a!=="textarea"||s!=="")&&lr(e,s):typeof s=="number"&&lr(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(ir.hasOwnProperty(l)?s!=null&&l==="onScroll"&&J("scroll",e):s!=null&&Bw(e,l,s,c))}switch(a){case"input":qr(e),VL(e,r,!1);break;case"textarea":qr(e),EL(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ot(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Ra(e,!!r.multiple,l,!1):r.defaultValue!=null&&Ra(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=NM)}switch(a){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)TS(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(H(166));if(a=pa(xr.current),pa(ct.current),Br(t)){if(r=t.stateNode,a=t.memoizedProps,r[ot]=t,(l=r.nodeValue!==a)&&(e=Ne,e!==null))switch(e.tag){case 3:Er(r.nodeValue,a,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Er(r.nodeValue,a,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(a.nodeType===9?a:a.ownerDocument).createTextNode(r),r[ot]=t,t.stateNode=r}return me(t),null;case 13:if(Y(ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&De!==null&&t.mode&1&&!(t.flags&128))eS(),an(),t.flags|=98560,l=!1;else if(l=Br(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(H(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(H(317));l[ot]=t}else an(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),l=!1}else Ke!==null&&(Aw(Ke),Ke=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=a,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ae.current&1?de===0&&(de=3):wL())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return rn(),bw(e,t),e===null&&pr(t.stateNode.containerInfo),me(t),null;case 10:return oL(t.type._context),me(t),null;case 17:return ze(t.type)&&TM(),me(t),null;case 19:if(Y(ae),l=t.memoizedState,l===null)return me(t),null;if(r=(t.flags&128)!==0,c=l.rendering,c===null)if(r)mn(l,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=UM(e),c!==null){for(t.flags|=128,mn(l,!1),r=c.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=a,a=t.child;a!==null;)l=a,e=r,l.flags&=14680066,c=l.alternate,c===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=c.childLanes,l.lanes=c.lanes,l.child=c.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=c.memoizedProps,l.memoizedState=c.memoizedState,l.updateQueue=c.updateQueue,l.type=c.type,e=c.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a=a.sibling;return Q(ae,ae.current&1|2),t.child}e=e.sibling}l.tail!==null&&ie()>ln&&(t.flags|=128,r=!0,mn(l,!1),t.lanes=4194304)}else{if(!r)if(e=UM(c),e!==null){if(t.flags|=128,r=!0,a=e.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),mn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!ee)return me(t),null}else 2*ie()-l.renderingStartTime>ln&&a!==1073741824&&(t.flags|=128,r=!0,mn(l,!1),t.lanes=4194304);l.isBackwards?(c.sibling=t.child,t.child=c):(a=l.last,a!==null?a.sibling=c:t.child=c,l.last=c)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ie(),t.sibling=null,a=ae.current,Q(ae,r?a&1|2:a&1),t):(me(t),null);case 22:case 23:return ML(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Pe&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(H(156,t.tag))}function EH(e,t){switch(tL(t),t.tag){case 1:return ze(t.type)&&TM(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return rn(),Y(He),Y(fe),sL(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return dL(t),null;case 13:if(Y(ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(H(340));an()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(ae),null;case 4:return rn(),null;case 10:return oL(t.type._context),null;case 22:case 23:return ML(),null;case 24:return null;default:return null}}var Ur=!1,xe=!1,BH=typeof WeakSet=="function"?WeakSet:Set,N=null;function Ea(e,t){var a=e.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(r){oe(e,t,r)}else a.current=null}function Cw(e,t,a){try{a()}catch(r){oe(e,t,r)}}var jb=!1;function RH(e,t){if(cw=AM,e=RC(),Yw(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var c=0,d=-1,s=-1,y=0,g=0,v=e,m=null;t:for(;;){for(var j;v!==a||o!==0&&v.nodeType!==3||(d=c+o),v!==l||r!==0&&v.nodeType!==3||(s=c+r),v.nodeType===3&&(c+=v.nodeValue.length),(j=v.firstChild)!==null;)m=v,v=j;for(;;){if(v===e)break t;if(m===a&&++y===o&&(d=c),m===l&&++g===r&&(s=c),(j=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=j}a=d===-1||s===-1?null:{start:d,end:s}}else a=null}a=a||{start:0,end:0}}else a=null;for(dw={focusedElem:e,selectionRange:a},AM=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var f=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(f!==null){var w=f.memoizedProps,A=f.memoizedState,p=t.stateNode,u=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:We(t.type,w),A);p.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(k){oe(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return f=jb,jb=!1,f}function Hn(e,t,a){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Cw(t,a,l)}o=o.next}while(o!==r)}}function l9(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var a=t=t.next;do{if((a.tag&e)===e){var r=a.create;a.destroy=r()}a=a.next}while(a!==t)}}function Sw(e){var t=e.ref;if(t!==null){var a=e.stateNode;switch(e.tag){case 5:e=a;break;default:e=a}typeof t=="function"?t(e):t.current=e}}function VS(e){var t=e.alternate;t!==null&&(e.alternate=null,VS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ot],delete t[gr],delete t[yw],delete t[LH],delete t[bH])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function FS(e){return e.tag===5||e.tag===3||e.tag===4}function Hb(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||FS(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Iw(e,t,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?a.nodeType===8?a.parentNode.insertBefore(e,t):a.insertBefore(e,t):(a.nodeType===8?(t=a.parentNode,t.insertBefore(e,a)):(t=a,t.appendChild(e)),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=NM));else if(r!==4&&(e=e.child,e!==null))for(Iw(e,t,a),e=e.sibling;e!==null;)Iw(e,t,a),e=e.sibling}function jw(e,t,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(jw(e,t,a),e=e.sibling;e!==null;)jw(e,t,a),e=e.sibling}var ye=null,Ge=!1;function It(e,t,a){for(a=a.child;a!==null;)ES(e,t,a),a=a.sibling}function ES(e,t,a){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(YM,a)}catch{}switch(a.tag){case 5:xe||Ea(a,t);case 6:var r=ye,o=Ge;ye=null,It(e,t,a),ye=r,Ge=o,ye!==null&&(Ge?(e=ye,a=a.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)):ye.removeChild(a.stateNode));break;case 18:ye!==null&&(Ge?(e=ye,a=a.stateNode,e.nodeType===8?q9(e.parentNode,a):e.nodeType===1&&q9(e,a),hr(e)):q9(ye,a.stateNode));break;case 4:r=ye,o=Ge,ye=a.stateNode.containerInfo,Ge=!0,It(e,t,a),ye=r,Ge=o;break;case 0:case 11:case 14:case 15:if(!xe&&(r=a.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,c=l.destroy;l=l.tag,c!==void 0&&(l&2||l&4)&&Cw(a,t,c),o=o.next}while(o!==r)}It(e,t,a);break;case 1:if(!xe&&(Ea(a,t),r=a.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=a.memoizedProps,r.state=a.memoizedState,r.componentWillUnmount()}catch(d){oe(a,t,d)}It(e,t,a);break;case 21:It(e,t,a);break;case 22:a.mode&1?(xe=(r=xe)||a.memoizedState!==null,It(e,t,a),xe=r):It(e,t,a);break;default:It(e,t,a)}}function zb(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var a=e.stateNode;a===null&&(a=e.stateNode=new BH),t.forEach(function(r){var o=XH.bind(null,e,r);a.has(r)||(a.add(r),r.then(o,o))})}}function Ze(e,t){var a=t.deletions;if(a!==null)for(var r=0;r<a.length;r++){var o=a[r];try{var l=e,c=t,d=c;e:for(;d!==null;){switch(d.tag){case 5:ye=d.stateNode,Ge=!1;break e;case 3:ye=d.stateNode.containerInfo,Ge=!0;break e;case 4:ye=d.stateNode.containerInfo,Ge=!0;break e}d=d.return}if(ye===null)throw Error(H(160));ES(l,c,o),ye=null,Ge=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(y){oe(o,t,y)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)BS(t,e),t=t.sibling}function BS(e,t){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ze(t,e),tt(e),r&4){try{Hn(3,e,e.return),l9(3,e)}catch(w){oe(e,e.return,w)}try{Hn(5,e,e.return)}catch(w){oe(e,e.return,w)}}break;case 1:Ze(t,e),tt(e),r&512&&a!==null&&Ea(a,a.return);break;case 5:if(Ze(t,e),tt(e),r&512&&a!==null&&Ea(a,a.return),e.flags&32){var o=e.stateNode;try{lr(o,"")}catch(w){oe(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,c=a!==null?a.memoizedProps:l,d=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{d==="input"&&l.type==="radio"&&l.name!=null&&cC(o,l),J9(d,c);var y=J9(d,l);for(c=0;c<s.length;c+=2){var g=s[c],v=s[c+1];g==="style"?uC(o,v):g==="dangerouslySetInnerHTML"?hC(o,v):g==="children"?lr(o,v):Bw(o,g,v,y)}switch(d){case"input":W9(o,l);break;case"textarea":dC(o,l);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var j=l.value;j!=null?Ra(o,!!l.multiple,j,!1):m!==!!l.multiple&&(l.defaultValue!=null?Ra(o,!!l.multiple,l.defaultValue,!0):Ra(o,!!l.multiple,l.multiple?[]:"",!1))}o[gr]=l}catch(w){oe(e,e.return,w)}}break;case 6:if(Ze(t,e),tt(e),r&4){if(e.stateNode===null)throw Error(H(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(w){oe(e,e.return,w)}}break;case 3:if(Ze(t,e),tt(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{hr(t.containerInfo)}catch(w){oe(e,e.return,w)}break;case 4:Ze(t,e),tt(e);break;case 13:Ze(t,e),tt(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(fL=ie())),r&4&&zb(e);break;case 22:if(g=a!==null&&a.memoizedState!==null,e.mode&1?(xe=(y=xe)||g,Ze(t,e),xe=y):Ze(t,e),tt(e),r&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!g&&e.mode&1)for(N=e,g=e.child;g!==null;){for(v=N=g;N!==null;){switch(m=N,j=m.child,m.tag){case 0:case 11:case 14:case 15:Hn(4,m,m.return);break;case 1:Ea(m,m.return);var f=m.stateNode;if(typeof f.componentWillUnmount=="function"){r=m,a=m.return;try{t=r,f.props=t.memoizedProps,f.state=t.memoizedState,f.componentWillUnmount()}catch(w){oe(r,a,w)}}break;case 5:Ea(m,m.return);break;case 22:if(m.memoizedState!==null){Ab(v);continue}}j!==null?(j.return=m,N=j):Ab(v)}g=g.sibling}e:for(g=null,v=e;;){if(v.tag===5){if(g===null){g=v;try{o=v.stateNode,y?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(d=v.stateNode,s=v.memoizedProps.style,c=s!=null&&s.hasOwnProperty("display")?s.display:null,d.style.display=yC("display",c))}catch(w){oe(e,e.return,w)}}}else if(v.tag===6){if(g===null)try{v.stateNode.nodeValue=y?"":v.memoizedProps}catch(w){oe(e,e.return,w)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;g===v&&(g=null),v=v.return}g===v&&(g=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Ze(t,e),tt(e),r&4&&zb(e);break;case 21:break;default:Ze(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{e:{for(var a=e.return;a!==null;){if(FS(a)){var r=a;break e}a=a.return}throw Error(H(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(lr(o,""),r.flags&=-33);var l=Hb(e);jw(e,l,o);break;case 3:case 4:var c=r.stateNode.containerInfo,d=Hb(e);Iw(e,d,c);break;default:throw Error(H(161))}}catch(s){oe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function OH(e,t,a){N=e,RS(e)}function RS(e,t,a){for(var r=(e.mode&1)!==0;N!==null;){var o=N,l=o.child;if(o.tag===22&&r){var c=o.memoizedState!==null||Ur;if(!c){var d=o.alternate,s=d!==null&&d.memoizedState!==null||xe;d=Ur;var y=xe;if(Ur=c,(xe=s)&&!y)for(N=o;N!==null;)c=N,s=c.child,c.tag===22&&c.memoizedState!==null?Pb(o):s!==null?(s.return=c,N=s):Pb(o);for(;l!==null;)N=l,RS(l),l=l.sibling;N=o,Ur=d,xe=y}qb(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,N=l):qb(e)}}function qb(e){for(;N!==null;){var t=N;if(t.flags&8772){var a=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||l9(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xe)if(a===null)r.componentDidMount();else{var o=t.elementType===t.type?a.memoizedProps:We(t.type,a.memoizedProps);r.componentDidUpdate(o,a.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&kb(t,l,r);break;case 3:var c=t.updateQueue;if(c!==null){if(a=null,t.child!==null)switch(t.child.tag){case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}kb(t,c,a)}break;case 5:var d=t.stateNode;if(a===null&&t.flags&4){a=d;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&a.focus();break;case"img":s.src&&(a.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var y=t.alternate;if(y!==null){var g=y.memoizedState;if(g!==null){var v=g.dehydrated;v!==null&&hr(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}xe||t.flags&512&&Sw(t)}catch(m){oe(t,t.return,m)}}if(t===e){N=null;break}if(a=t.sibling,a!==null){a.return=t.return,N=a;break}N=t.return}}function Ab(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var a=t.sibling;if(a!==null){a.return=t.return,N=a;break}N=t.return}}function Pb(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var a=t.return;try{l9(4,t)}catch(s){oe(t,a,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){oe(t,o,s)}}var l=t.return;try{Sw(t)}catch(s){oe(t,l,s)}break;case 5:var c=t.return;try{Sw(t)}catch(s){oe(t,c,s)}}}catch(s){oe(t,t.return,s)}if(t===e){N=null;break}var d=t.sibling;if(d!==null){d.return=t.return,N=d;break}N=t.return}}var UH=Math.ceil,ZM=Ct.ReactCurrentDispatcher,mL=Ct.ReactCurrentOwner,Ue=Ct.ReactCurrentBatchConfig,G=0,he=null,le=null,ue=0,Pe=0,Ba=_t(0),de=0,wr=null,ba=0,c9=0,xL=0,zn=null,Ie=null,fL=0,ln=1/0,pt=null,WM=!1,Hw=null,Et=null,$r=!1,Pt=null,GM=0,qn=0,zw=null,t2=-1,a2=0;function we(){return G&6?ie():t2!==-1?t2:t2=ie()}function Bt(e){return e.mode&1?G&2&&ue!==0?ue&-ue:SH.transition!==null?(a2===0&&(a2=CC()),a2):(e=K,e!==0||(e=window.event,e=e===void 0?16:AC(e.type)),e):1}function Je(e,t,a,r){if(50<qn)throw qn=0,zw=null,Error(H(185));br(e,a,r),(!(G&2)||e!==he)&&(e===he&&(!(G&2)&&(c9|=a),de===4&&qt(e,ue)),qe(e,r),a===1&&G===0&&!(t.mode&1)&&(ln=ie()+500,r9&&Zt()))}function qe(e,t){var a=e.callbackNode;Sj(e,t);var r=qM(e,e===he?ue:0);if(r===0)a!==null&&OL(a),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(a!=null&&OL(a),t===1)e.tag===0?CH(Db.bind(null,e)):QC(Db.bind(null,e)),MH(function(){!(G&6)&&Zt()}),a=null;else{switch(SC(r)){case 1:a=_w;break;case 4:a=LC;break;case 16:a=zM;break;case 536870912:a=bC;break;default:a=zM}a=KS(a,OS.bind(null,e))}e.callbackPriority=t,e.callbackNode=a}}function OS(e,t){if(t2=-1,a2=0,G&6)throw Error(H(327));var a=e.callbackNode;if(Za()&&e.callbackNode!==a)return null;var r=qM(e,e===he?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=KM(e,r);else{t=r;var o=G;G|=2;var l=$S();(he!==e||ue!==t)&&(pt=null,ln=ie()+500,ka(e,t));do try{ZH();break}catch(d){US(e,d)}while(!0);rL(),ZM.current=l,G=o,le!==null?t=0:(he=null,ue=0,t=de)}if(t!==0){if(t===2&&(o=nw(e),o!==0&&(r=o,t=qw(e,o))),t===1)throw a=wr,ka(e,0),qt(e,r),qe(e,ie()),a;if(t===6)qt(e,r);else{if(o=e.current.alternate,!(r&30)&&!$H(o)&&(t=KM(e,r),t===2&&(l=nw(e),l!==0&&(r=l,t=qw(e,l))),t===1))throw a=wr,ka(e,0),qt(e,r),qe(e,ie()),a;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(H(345));case 2:Kt(e,Ie,pt);break;case 3:if(qt(e,r),(r&130023424)===r&&(t=fL+500-ie(),10<t)){if(qM(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=hw(Kt.bind(null,e,Ie,pt),t);break}Kt(e,Ie,pt);break;case 4:if(qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var c=31-Qe(r);l=1<<c,c=t[c],c>o&&(o=c),r&=~l}if(r=o,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*UH(r/1960))-r,10<r){e.timeoutHandle=hw(Kt.bind(null,e,Ie,pt),r);break}Kt(e,Ie,pt);break;case 5:Kt(e,Ie,pt);break;default:throw Error(H(329))}}}return qe(e,ie()),e.callbackNode===a?OS.bind(null,e):null}function qw(e,t){var a=zn;return e.current.memoizedState.isDehydrated&&(ka(e,t).flags|=256),e=KM(e,t),e!==2&&(t=Ie,Ie=a,t!==null&&Aw(t)),e}function Aw(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function $H(e){for(var t=e;;){if(t.flags&16384){var a=t.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var r=0;r<a.length;r++){var o=a[r],l=o.getSnapshot;o=o.value;try{if(!Ye(l(),o))return!1}catch{return!1}}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qt(e,t){for(t&=~xL,t&=~c9,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var a=31-Qe(t),r=1<<a;e[a]=-1,t&=~r}}function Db(e){if(G&6)throw Error(H(327));Za();var t=qM(e,0);if(!(t&1))return qe(e,ie()),null;var a=KM(e,t);if(e.tag!==0&&a===2){var r=nw(e);r!==0&&(t=r,a=qw(e,r))}if(a===1)throw a=wr,ka(e,0),qt(e,t),qe(e,ie()),a;if(a===6)throw Error(H(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kt(e,Ie,pt),qe(e,ie()),null}function vL(e,t){var a=G;G|=1;try{return e(t)}finally{G=a,G===0&&(ln=ie()+500,r9&&Zt())}}function Ca(e){Pt!==null&&Pt.tag===0&&!(G&6)&&Za();var t=G;G|=1;var a=Ue.transition,r=K;try{if(Ue.transition=null,K=1,e)return e()}finally{K=r,Ue.transition=a,G=t,!(G&6)&&Zt()}}function ML(){Pe=Ba.current,Y(Ba)}function ka(e,t){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;if(a!==-1&&(e.timeoutHandle=-1,vH(a)),le!==null)for(a=le.return;a!==null;){var r=a;switch(tL(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&TM();break;case 3:rn(),Y(He),Y(fe),sL();break;case 5:dL(r);break;case 4:rn();break;case 13:Y(ae);break;case 19:Y(ae);break;case 10:oL(r.type._context);break;case 22:case 23:ML()}a=a.return}if(he=e,le=e=Rt(e.current,null),ue=Pe=t,de=0,wr=null,xL=c9=ba=0,Ie=zn=null,ua!==null){for(t=0;t<ua.length;t++)if(a=ua[t],r=a.interleaved,r!==null){a.interleaved=null;var o=r.next,l=a.pending;if(l!==null){var c=l.next;l.next=o,r.next=c}a.pending=r}ua=null}return e}function US(e,t){do{var a=le;try{if(rL(),Jr.current=_M,$M){for(var r=ne.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}$M=!1}if(La=0,se=ce=ne=null,jn=!1,fr=0,mL.current=null,a===null||a.return===null){de=1,wr=t,le=null;break}e:{var l=e,c=a.return,d=a,s=t;if(t=ue,d.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var y=s,g=d,v=g.tag;if(!(g.mode&1)&&(v===0||v===11||v===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var j=Mb(c);if(j!==null){j.flags&=-257,wb(j,c,d,l,t),j.mode&1&&vb(l,y,t),t=j,s=y;var f=t.updateQueue;if(f===null){var w=new Set;w.add(s),t.updateQueue=w}else f.add(s);break e}else{if(!(t&1)){vb(l,y,t),wL();break e}s=Error(H(426))}}else if(ee&&d.mode&1){var A=Mb(c);if(A!==null){!(A.flags&65536)&&(A.flags|=256),wb(A,c,d,l,t),aL(on(s,d));break e}}l=s=on(s,d),de!==4&&(de=2),zn===null?zn=[l]:zn.push(l),l=c;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=SS(l,s,t);pb(l,p);break e;case 1:d=s;var u=l.type,h=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Et===null||!Et.has(h)))){l.flags|=65536,t&=-t,l.lanes|=t;var k=IS(l,d,t);pb(l,k);break e}}l=l.return}while(l!==null)}ZS(a)}catch(I){t=I,le===a&&a!==null&&(le=a=a.return);continue}break}while(!0)}function $S(){var e=ZM.current;return ZM.current=_M,e===null?_M:e}function wL(){(de===0||de===3||de===2)&&(de=4),he===null||!(ba&268435455)&&!(c9&268435455)||qt(he,ue)}function KM(e,t){var a=G;G|=2;var r=$S();(he!==e||ue!==t)&&(pt=null,ka(e,t));do try{_H();break}catch(o){US(e,o)}while(!0);if(rL(),G=a,ZM.current=r,le!==null)throw Error(H(261));return he=null,ue=0,de}function _H(){for(;le!==null;)_S(le)}function ZH(){for(;le!==null&&!mj();)_S(le)}function _S(e){var t=GS(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,t===null?ZS(e):le=t,mL.current=null}function ZS(e){var t=e;do{var a=t.alternate;if(e=t.return,t.flags&32768){if(a=EH(a,t),a!==null){a.flags&=32767,le=a;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,le=null;return}}else if(a=FH(a,t,Pe),a!==null){le=a;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);de===0&&(de=5)}function Kt(e,t,a){var r=K,o=Ue.transition;try{Ue.transition=null,K=1,WH(e,t,a,r)}finally{Ue.transition=o,K=r}return null}function WH(e,t,a,r){do Za();while(Pt!==null);if(G&6)throw Error(H(327));a=e.finishedWork;var o=e.finishedLanes;if(a===null)return null;if(e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error(H(177));e.callbackNode=null,e.callbackPriority=0;var l=a.lanes|a.childLanes;if(Ij(e,l),e===he&&(le=he=null,ue=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||$r||($r=!0,KS(zM,function(){return Za(),null})),l=(a.flags&15990)!==0,a.subtreeFlags&15990||l){l=Ue.transition,Ue.transition=null;var c=K;K=1;var d=G;G|=4,mL.current=null,RH(e,a),BS(a,e),uH(dw),AM=!!cw,dw=cw=null,e.current=a,OH(a),xj(),G=d,K=c,Ue.transition=l}else e.current=a;if($r&&($r=!1,Pt=e,GM=o),l=e.pendingLanes,l===0&&(Et=null),Mj(a.stateNode),qe(e,ie()),t!==null)for(r=e.onRecoverableError,a=0;a<t.length;a++)o=t[a],r(o.value,{componentStack:o.stack,digest:o.digest});if(WM)throw WM=!1,e=Hw,Hw=null,e;return GM&1&&e.tag!==0&&Za(),l=e.pendingLanes,l&1?e===zw?qn++:(qn=0,zw=e):qn=0,Zt(),null}function Za(){if(Pt!==null){var e=SC(GM),t=Ue.transition,a=K;try{if(Ue.transition=null,K=16>e?16:e,Pt===null)var r=!1;else{if(e=Pt,Pt=null,GM=0,G&6)throw Error(H(331));var o=G;for(G|=4,N=e.current;N!==null;){var l=N,c=l.child;if(N.flags&16){var d=l.deletions;if(d!==null){for(var s=0;s<d.length;s++){var y=d[s];for(N=y;N!==null;){var g=N;switch(g.tag){case 0:case 11:case 15:Hn(8,g,l)}var v=g.child;if(v!==null)v.return=g,N=v;else for(;N!==null;){g=N;var m=g.sibling,j=g.return;if(VS(g),g===y){N=null;break}if(m!==null){m.return=j,N=m;break}N=j}}}var f=l.alternate;if(f!==null){var w=f.child;if(w!==null){f.child=null;do{var A=w.sibling;w.sibling=null,w=A}while(w!==null)}}N=l}}if(l.subtreeFlags&2064&&c!==null)c.return=l,N=c;else e:for(;N!==null;){if(l=N,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Hn(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,N=p;break e}N=l.return}}var u=e.current;for(N=u;N!==null;){c=N;var h=c.child;if(c.subtreeFlags&2064&&h!==null)h.return=c,N=h;else e:for(c=u;N!==null;){if(d=N,d.flags&2048)try{switch(d.tag){case 0:case 11:case 15:l9(9,d)}}catch(I){oe(d,d.return,I)}if(d===c){N=null;break e}var k=d.sibling;if(k!==null){k.return=d.return,N=k;break e}N=d.return}}if(G=o,Zt(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(YM,e)}catch{}r=!0}return r}finally{K=a,Ue.transition=t}}return!1}function Nb(e,t,a){t=on(a,t),t=SS(e,t,1),e=Ft(e,t,1),t=we(),e!==null&&(br(e,1,t),qe(e,t))}function oe(e,t,a){if(e.tag===3)Nb(e,e,a);else for(;t!==null;){if(t.tag===3){Nb(t,e,a);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Et===null||!Et.has(r))){e=on(a,e),e=IS(t,e,1),t=Ft(t,e,1),e=we(),t!==null&&(br(t,1,e),qe(t,e));break}}t=t.return}}function GH(e,t,a){var r=e.pingCache;r!==null&&r.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&a,he===e&&(ue&a)===a&&(de===4||de===3&&(ue&130023424)===ue&&500>ie()-fL?ka(e,0):xL|=a),qe(e,t)}function WS(e,t){t===0&&(e.mode&1?(t=Dr,Dr<<=1,!(Dr&130023424)&&(Dr=4194304)):t=1);var a=we();e=Lt(e,t),e!==null&&(br(e,t,a),qe(e,a))}function KH(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),WS(e,a)}function XH(e,t){var a=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(a=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(t),WS(e,a)}var GS;GS=function(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)je=!0;else{if(!(e.lanes&a)&&!(t.flags&128))return je=!1,VH(e,t,a);je=!!(e.flags&131072)}else je=!1,ee&&t.flags&1048576&&JC(t,EM,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;e2(e,t),e=t.pendingProps;var o=tn(t,fe.current);_a(t,a),o=yL(null,t,r,e,o,a);var l=uL();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ze(r)?(l=!0,VM(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,lL(t),o.updater=i9,t.stateNode=o,o._reactInternals=t,xw(t,r,e,a),t=Mw(null,t,r,!0,l,a)):(t.tag=0,ee&&l&&eL(t),Me(null,t,o,a),t=t.child),t;case 16:r=t.elementType;e:{switch(e2(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=JH(r),e=We(r,e),o){case 0:t=vw(null,t,r,e,a);break e;case 1:t=Cb(null,t,r,e,a);break e;case 11:t=Lb(null,t,r,e,a);break e;case 14:t=bb(null,t,r,We(r.type,e),a);break e}throw Error(H(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),vw(e,t,r,o,a);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),Cb(e,t,r,o,a);case 3:e:{if(qS(t),e===null)throw Error(H(387));r=t.pendingProps,l=t.memoizedState,o=l.element,rS(e,t),OM(t,r,null,a);var c=t.memoizedState;if(r=c.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=on(Error(H(423)),t),t=Sb(e,t,r,a,o);break e}else if(r!==o){o=on(Error(H(424)),t),t=Sb(e,t,r,a,o);break e}else for(De=Vt(t.stateNode.containerInfo.firstChild),Ne=t,ee=!0,Ke=null,a=aS(t,null,r,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(an(),r===o){t=bt(e,t,a);break e}Me(e,t,r,a)}t=t.child}return t;case 5:return oS(t),e===null&&kw(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,c=o.children,sw(r,o)?c=null:l!==null&&sw(r,l)&&(t.flags|=32),zS(e,t),Me(e,t,c,a),t.child;case 6:return e===null&&kw(t),null;case 13:return AS(e,t,a);case 4:return cL(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=nn(t,null,r,a):Me(e,t,r,a),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),Lb(e,t,r,o,a);case 7:return Me(e,t,t.pendingProps,a),t.child;case 8:return Me(e,t,t.pendingProps.children,a),t.child;case 12:return Me(e,t,t.pendingProps.children,a),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,c=o.value,Q(BM,r._currentValue),r._currentValue=c,l!==null)if(Ye(l.value,c)){if(l.children===o.children&&!He.current){t=bt(e,t,a);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var d=l.dependencies;if(d!==null){c=l.child;for(var s=d.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=ft(-1,a&-a),s.tag=2;var y=l.updateQueue;if(y!==null){y=y.shared;var g=y.pending;g===null?s.next=s:(s.next=g.next,g.next=s),y.pending=s}}l.lanes|=a,s=l.alternate,s!==null&&(s.lanes|=a),gw(l.return,a,t),d.lanes|=a;break}s=s.next}}else if(l.tag===10)c=l.type===t.type?null:l.child;else if(l.tag===18){if(c=l.return,c===null)throw Error(H(341));c.lanes|=a,d=c.alternate,d!==null&&(d.lanes|=a),gw(c,a,t),c=l.sibling}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===t){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}Me(e,t,o.children,a),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,_a(t,a),o=$e(o),r=r(o),t.flags|=1,Me(e,t,r,a),t.child;case 14:return r=t.type,o=We(r,t.pendingProps),o=We(r.type,o),bb(e,t,r,o,a);case 15:return jS(e,t,t.type,t.pendingProps,a);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),e2(e,t),t.tag=1,ze(r)?(e=!0,VM(t)):e=!1,_a(t,a),CS(t,r,o),xw(t,r,o,a),Mw(null,t,r,!0,e,a);case 19:return PS(e,t,a);case 22:return HS(e,t,a)}throw Error(H(156,t.tag))};function KS(e,t){return wC(e,t)}function QH(e,t,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(e,t,a,r){return new QH(e,t,a,r)}function LL(e){return e=e.prototype,!(!e||!e.isReactComponent)}function JH(e){if(typeof e=="function")return LL(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ow)return 11;if(e===Uw)return 14}return 2}function Rt(e,t){var a=e.alternate;return a===null?(a=Oe(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&14680064,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a}function n2(e,t,a,r,o,l){var c=2;if(r=e,typeof e=="function")LL(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case za:return ga(a.children,o,l,t);case Rw:c=8,o|=8;break;case O9:return e=Oe(12,a,t,o|2),e.elementType=O9,e.lanes=l,e;case U9:return e=Oe(13,a,t,o),e.elementType=U9,e.lanes=l,e;case $9:return e=Oe(19,a,t,o),e.elementType=$9,e.lanes=l,e;case oC:return d9(a,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case nC:c=10;break e;case rC:c=9;break e;case Ow:c=11;break e;case Uw:c=14;break e;case jt:c=16,r=null;break e}throw Error(H(130,e==null?e:typeof e,""))}return t=Oe(c,a,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function ga(e,t,a,r){return e=Oe(7,e,r,t),e.lanes=a,e}function d9(e,t,a,r){return e=Oe(22,e,r,t),e.elementType=oC,e.lanes=a,e.stateNode={isHidden:!1},e}function E9(e,t,a){return e=Oe(6,e,null,t),e.lanes=a,e}function B9(e,t,a){return t=Oe(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function YH(e,t,a,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=v9(0),this.expirationTimes=v9(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=v9(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function bL(e,t,a,r,o,l,c,d,s){return e=new YH(e,t,a,d,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Oe(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},lL(l),e}function ez(e,t,a){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ha,key:r==null?null:""+r,children:e,containerInfo:t,implementation:a}}function XS(e){if(!e)return Ut;e=e._reactInternals;e:{if(Ia(e)!==e||e.tag!==1)throw Error(H(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(H(171))}if(e.tag===1){var a=e.type;if(ze(a))return XC(e,a,t)}return t}function QS(e,t,a,r,o,l,c,d,s){return e=bL(a,r,!0,e,o,l,c,d,s),e.context=XS(null),a=e.current,r=we(),o=Bt(a),l=ft(r,o),l.callback=t??null,Ft(a,l,o),e.current.lanes=o,br(e,o,r),qe(e,r),e}function s9(e,t,a,r){var o=t.current,l=we(),c=Bt(o);return a=XS(a),t.context===null?t.context=a:t.pendingContext=a,t=ft(l,c),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ft(o,t,c),e!==null&&(Je(e,o,c,l),Qr(e,o,c)),c}function XM(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Tb(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function CL(e,t){Tb(e,t),(e=e.alternate)&&Tb(e,t)}function tz(){return null}var JS=typeof reportError=="function"?reportError:function(e){console.error(e)};function SL(e){this._internalRoot=e}h9.prototype.render=SL.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(H(409));s9(e,t,null,null)};h9.prototype.unmount=SL.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ca(function(){s9(null,e,null,null)}),t[wt]=null}};function h9(e){this._internalRoot=e}h9.prototype.unstable_scheduleHydration=function(e){if(e){var t=HC();e={blockedOn:null,target:e,priority:t};for(var a=0;a<zt.length&&t!==0&&t<zt[a].priority;a++);zt.splice(a,0,e),a===0&&qC(e)}};function IL(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function y9(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vb(){}function az(e,t,a,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var y=XM(c);l.call(y)}}var c=QS(t,r,e,0,null,!1,!1,"",Vb);return e._reactRootContainer=c,e[wt]=c.current,pr(e.nodeType===8?e.parentNode:e),Ca(),c}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var d=r;r=function(){var y=XM(s);d.call(y)}}var s=bL(e,0,!1,null,null,!1,!1,"",Vb);return e._reactRootContainer=s,e[wt]=s.current,pr(e.nodeType===8?e.parentNode:e),Ca(function(){s9(t,s,a,r)}),s}function u9(e,t,a,r,o){var l=a._reactRootContainer;if(l){var c=l;if(typeof o=="function"){var d=o;o=function(){var s=XM(c);d.call(s)}}s9(t,c,e,o)}else c=az(a,t,e,o,r);return XM(c)}IC=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var a=Mn(t.pendingLanes);a!==0&&(Zw(t,a|1),qe(t,ie()),!(G&6)&&(ln=ie()+500,Zt()))}break;case 13:Ca(function(){var r=Lt(e,1);if(r!==null){var o=we();Je(r,e,1,o)}}),CL(e,1)}};Ww=function(e){if(e.tag===13){var t=Lt(e,134217728);if(t!==null){var a=we();Je(t,e,134217728,a)}CL(e,134217728)}};jC=function(e){if(e.tag===13){var t=Bt(e),a=Lt(e,t);if(a!==null){var r=we();Je(a,e,t,r)}CL(e,t)}};HC=function(){return K};zC=function(e,t){var a=K;try{return K=e,t()}finally{K=a}};ew=function(e,t,a){switch(t){case"input":if(W9(e,a),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<a.length;t++){var r=a[t];if(r!==e&&r.form===e.form){var o=n9(r);if(!o)throw Error(H(90));lC(r),W9(r,o)}}}break;case"textarea":dC(e,a);break;case"select":t=a.value,t!=null&&Ra(e,!!a.multiple,t,!1)}};gC=vL;mC=Ca;var nz={usingClientEntryPoint:!1,Events:[Sr,Da,n9,pC,kC,vL]},xn={findFiberByHostInstance:ya,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rz={bundleType:xn.bundleType,version:xn.version,rendererPackageName:xn.rendererPackageName,rendererConfig:xn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ct.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=vC(e),e===null?null:e.stateNode},findFiberByHostInstance:xn.findFiberByHostInstance||tz,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_r.isDisabled&&_r.supportsFiber)try{YM=_r.inject(rz),lt=_r}catch{}}Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nz;Ve.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!IL(t))throw Error(H(200));return ez(e,t,null,a)};Ve.createRoot=function(e,t){if(!IL(e))throw Error(H(299));var a=!1,r="",o=JS;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=bL(e,1,!1,null,null,a,!1,r,o),e[wt]=t.current,pr(e.nodeType===8?e.parentNode:e),new SL(t)};Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(H(188)):(e=Object.keys(e).join(","),Error(H(268,e)));return e=vC(t),e=e===null?null:e.stateNode,e};Ve.flushSync=function(e){return Ca(e)};Ve.hydrate=function(e,t,a){if(!y9(t))throw Error(H(200));return u9(null,e,t,!0,a)};Ve.hydrateRoot=function(e,t,a){if(!IL(e))throw Error(H(405));var r=a!=null&&a.hydratedSources||null,o=!1,l="",c=JS;if(a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onRecoverableError!==void 0&&(c=a.onRecoverableError)),t=QS(t,null,e,1,a??null,o,!1,l,c),e[wt]=t.current,pr(e),r)for(e=0;e<r.length;e++)a=r[e],o=a._getVersion,o=o(a._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[a,o]:t.mutableSourceEagerHydrationData.push(a,o);return new h9(t)};Ve.render=function(e,t,a){if(!y9(t))throw Error(H(200));return u9(null,e,t,!1,a)};Ve.unmountComponentAtNode=function(e){if(!y9(e))throw Error(H(40));return e._reactRootContainer?(Ca(function(){u9(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1};Ve.unstable_batchedUpdates=vL;Ve.unstable_renderSubtreeIntoContainer=function(e,t,a,r){if(!y9(a))throw Error(H(200));if(e==null||e._reactInternals===void 0)throw Error(H(38));return u9(e,t,a,!1,r)};Ve.version="18.3.1-next-f1338f8080-20240426";function YS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(YS)}catch(e){console.error(e)}}YS(),Yb.exports=Ve;var oz=Yb.exports,eI,Fb=oz;eI=Fb.createRoot,Fb.hydrateRoot;class iz{constructor(){this.baseKey="estonian-learning-cloud",this.saveQueue=new Map,this.isOnline=navigator.onLine,this.deviceId=this.getOrCreateDeviceId(),this.setupOnlineListener(),this.startPeriodicSync()}getOrCreateDeviceId(){let t=localStorage.getItem("device-id");return t||(t="device-"+Math.random().toString(36).substr(2,9)+"-"+Date.now(),localStorage.setItem("device-id",t)),t}setupOnlineListener(){window.addEventListener("online",()=>{this.isOnline=!0,this.syncPendingData()}),window.addEventListener("offline",()=>{this.isOnline=!1})}startPeriodicSync(){setInterval(()=>{this.isOnline&&this.saveQueue.size>0&&this.syncPendingData()},3e4)}async saveUserData(t,a){try{const r=await this.loadUserData(t),o=r?r.version+1:1,l={...a,lastUpdated:Date.now(),deviceId:this.deviceId,version:o};return localStorage.setItem(`${this.baseKey}-${t.toLowerCase()}`,JSON.stringify(l)),this.saveQueue.set(t,l),this.isOnline&&await this.syncToCloud(t,l),{success:!0,message:"Andmed salvestatud edukalt"}}catch(r){return console.error("Failed to save user data:",r),{success:!1,message:"Salvestamine ebaõnnestus"}}}async syncToCloud(t,a){await new Promise(r=>setTimeout(r,500)),console.log(`Data synced to cloud for user: ${t}`,{version:a.version,deviceId:a.deviceId,timestamp:a.lastUpdated}),this.saveQueue.delete(t)}async loadUserData(t){try{const a=localStorage.getItem(`${this.baseKey}-${t.toLowerCase()}`);let r=null;if(a&&(r=JSON.parse(a)),this.isOnline){const o=await this.loadFromCloud(t);o&&(!r||o.version>r.version)&&(r=o,localStorage.setItem(`${this.baseKey}-${t.toLowerCase()}`,JSON.stringify(r)))}return r}catch(a){return console.error("Failed to load user data:",a),null}}async loadFromCloud(t){try{return await new Promise(a=>setTimeout(a,300)),null}catch(a){return console.error("Failed to load from cloud:",a),null}}async syncUserData(t){if(!this.isOnline)return this.loadUserData(t);try{const a=await this.loadUserData(t),r=await this.loadFromCloud(t);if(!a&&!r)return null;if(!a)return r;if(!r)return a;const o=a.version>=r.version?a:r;return localStorage.setItem(`${this.baseKey}-${t.toLowerCase()}`,JSON.stringify(o)),await this.syncToCloud(t,o),o}catch(a){return console.error("Failed to sync user data:",a),this.loadUserData(t)}}async syncPendingData(){const t=Array.from(this.saveQueue.entries()).map(([a,r])=>this.syncToCloud(a,r));try{await Promise.all(t)}catch(a){console.error("Failed to sync pending data:",a)}}async deleteUserData(t){try{localStorage.removeItem(`${this.baseKey}-${t.toLowerCase()}`),this.saveQueue.delete(t),console.log(`Data deleted for user: ${t}`)}catch(a){console.error("Failed to delete user data:",a)}}getConnectionStatus(){return this.isOnline}getPendingSyncCount(){return this.saveQueue.size}}const QM=new iz,Pw={currentMode:"home",selectedSubject:null,selectedChapter:null,settings:{darkMode:!0,fontSize:"medium",audioEnabled:!0,backgroundColor:"#1e40af",language:"et"},progress:[],customSubjects:[],currentUser:null,isLoading:!1,saveStatus:{status:"idle",message:"",timestamp:0},selectedText:null,showDefinitionModal:!1},tI=T.createContext(null);function lz(e,t){switch(t.type){case"SET_MODE":return{...e,currentMode:t.payload};case"SET_SUBJECT":return{...e,selectedSubject:t.payload};case"SET_CHAPTER":return{...e,selectedChapter:t.payload};case"UPDATE_SETTINGS":return{...e,settings:{...e.settings,...t.payload}};case"UPDATE_PROGRESS":const a=e.progress.findIndex(h=>h.subjectId===t.payload.subjectId),r=[...e.progress];return a>=0?r[a]=t.payload:r.push(t.payload),{...e,progress:r};case"ADD_CUSTOM_SUBJECT":return{...e,customSubjects:[...e.customSubjects,t.payload]};case"ADD_CUSTOM_CHAPTER":const o=e.customSubjects.map(h=>h.id===t.payload.subjectId?{...h,chapters:[...h.chapters,t.payload.chapter]}:h);return{...e,customSubjects:o};case"ADD_CUSTOM_EXERCISE":const l=e.customSubjects.map(h=>h.id===t.payload.subjectId?{...h,chapters:h.chapters.map(k=>k.id===t.payload.chapterId?{...k,exercises:[...k.exercises,t.payload.exercise]}:k)}:h);return{...e,customSubjects:l};case"ADD_BOOK_HEADING":const c=e.customSubjects.map(h=>h.id===t.payload.subjectId?{...h,bookHeadings:[...h.bookHeadings||[],t.payload.heading]}:h);return{...e,customSubjects:c};case"UPDATE_BOOK_HEADING":const d=e.customSubjects.map(h=>h.id===t.payload.subjectId?{...h,bookHeadings:(h.bookHeadings||[]).map(k=>k.id===t.payload.headingId?{...k,...t.payload.heading}:k)}:h);return{...e,customSubjects:d};case"DELETE_BOOK_HEADING":const s=e.customSubjects.map(h=>h.id===t.payload.subjectId?{...h,bookHeadings:(h.bookHeadings||[]).filter(k=>k.id!==t.payload.headingId),chapters:h.chapters.map(k=>k.bookHeadingId===t.payload.headingId?{...k,bookHeadingId:void 0}:k)}:h);return{...e,customSubjects:s};case"ASSIGN_CHAPTER_TO_HEADING":const y=e.customSubjects.map(h=>h.id===t.payload.subjectId?{...h,chapters:h.chapters.map(k=>k.id===t.payload.chapterId?{...k,bookHeadingId:t.payload.headingId}:k)}:h);return{...e,customSubjects:y};case"MOVE_CHAPTER":const g=e.customSubjects.map(h=>h.id===t.payload.subjectId?{...h,chapters:h.chapters.map(k=>k.id===t.payload.chapterId?{...k,bookHeadingId:t.payload.newHeadingId,order:t.payload.newOrder}:k)}:h);return{...e,customSubjects:g};case"DELETE_CUSTOM_SUBJECT":const v=e.customSubjects.filter(h=>h.id!==t.payload),m=e.progress.filter(h=>h.subjectId!==t.payload);return{...e,customSubjects:v,progress:m,selectedSubject:e.selectedSubject===t.payload?null:e.selectedSubject};case"DELETE_CUSTOM_CHAPTER":const j=e.customSubjects.map(h=>h.id===t.payload.subjectId?{...h,chapters:h.chapters.filter(k=>k.id!==t.payload.chapterId)}:h),f=e.progress.map(h=>h.subjectId===t.payload.subjectId?{...h,completedChapters:h.completedChapters.filter(k=>k!==t.payload.chapterId),exerciseScores:Object.fromEntries(Object.entries(h.exerciseScores).filter(([k])=>k!==t.payload.chapterId))}:h);return{...e,customSubjects:j,progress:f,selectedChapter:e.selectedChapter===t.payload.chapterId?null:e.selectedChapter};case"DELETE_CUSTOM_EXERCISE":const w=e.customSubjects.map(h=>h.id===t.payload.subjectId?{...h,chapters:h.chapters.map(k=>k.id===t.payload.chapterId?{...k,exercises:k.exercises.filter(I=>I.id!==t.payload.exerciseId)}:k)}:h);return{...e,customSubjects:w};case"ADD_DEFINITION":const A=e.customSubjects.map(h=>h.id===t.payload.subjectId?{...h,definitions:[...h.definitions||[],t.payload.definition]}:h);return{...e,customSubjects:A};case"DELETE_DEFINITION":const p=e.customSubjects.map(h=>h.id===t.payload.subjectId?{...h,definitions:(h.definitions||[]).filter(k=>k.id!==t.payload.definitionId)}:h);return{...e,customSubjects:p};case"SET_SELECTED_TEXT":return{...e,selectedText:t.payload};case"SET_SHOW_DEFINITION_MODAL":return{...e,showDefinitionModal:t.payload};case"SET_USER":return{...e,currentUser:t.payload};case"LOGOUT":return{...Pw,currentUser:null};case"SET_LOADING":return{...e,isLoading:t.payload};case"SET_SAVE_STATUS":return{...e,saveStatus:t.payload};case"LOAD_USER_DATA":const u=(t.payload.customSubjects||[]).map(h=>({...h,bookHeadings:h.bookHeadings||[],definitions:h.definitions||[],chapters:(h.chapters||[]).map(k=>({...k,order:k.order||0}))}));return{...e,settings:t.payload.settings,progress:t.payload.progress,customSubjects:u};default:return e}}function cz({children:e}){const[t,a]=T.useReducer(lz,Pw),r=T.useCallback(async()=>{if(!(!t.currentUser||t.isLoading)){a({type:"SET_SAVE_STATUS",payload:{status:"saving",message:"Salvestamine...",timestamp:Date.now()}});try{const l=await QM.saveUserData(t.currentUser,{settings:t.settings,progress:t.progress,customSubjects:t.customSubjects});a({type:"SET_SAVE_STATUS",payload:{status:l.success?"saved":"error",message:l.message,timestamp:Date.now()}}),setTimeout(()=>{a({type:"SET_SAVE_STATUS",payload:{status:"idle",message:"",timestamp:Date.now()}})},3e3)}catch{a({type:"SET_SAVE_STATUS",payload:{status:"error",message:"Salvestamine ebaõnnestus",timestamp:Date.now()}})}}},[t.currentUser,t.settings,t.progress,t.customSubjects,t.isLoading]);T.useEffect(()=>{t.currentUser&&o(t.currentUser)},[t.currentUser]),T.useEffect(()=>{if(!t.currentUser)return;const l=setInterval(r,6e4);return()=>clearInterval(l)},[r,t.currentUser]),T.useEffect(()=>{if(!t.currentUser||t.isLoading)return;const l=setTimeout(r,2e3);return()=>clearTimeout(l)},[t.settings,t.progress,t.customSubjects,r,t.currentUser,t.isLoading]);const o=async l=>{a({type:"SET_LOADING",payload:!0});try{const c=await QM.syncUserData(l);c&&a({type:"LOAD_USER_DATA",payload:{settings:c.settings||Pw.settings,progress:c.progress||[],customSubjects:c.customSubjects||[]}})}catch(c){console.error("Failed to load user data:",c),a({type:"SET_SAVE_STATUS",payload:{status:"error",message:"Andmete laadimine ebaõnnestus",timestamp:Date.now()}})}finally{a({type:"SET_LOADING",payload:!1})}};return i.jsx(tI.Provider,{value:{state:t,dispatch:a},children:e})}function Ee(){const e=T.useContext(tI);if(!e)throw new Error("useApp must be used within AppProvider");return e}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dz={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sz=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),n=(e,t)=>{const a=T.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:c,className:d="",children:s,...y},g)=>T.createElement("svg",{ref:g,...dz,width:o,height:o,stroke:r,strokeWidth:c?Number(l)*24/Number(o):l,className:["lucide",`lucide-${sz(e)}`,d].join(" "),...y},[...t.map(([v,m])=>T.createElement(v,m)),...Array.isArray(s)?s:[s]]));return a.displayName=`${e}`,a};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=n("AArrowDown",[["path",{d:"M3.5 13h6",key:"p1my2r"}],["path",{d:"m2 16 4.5-9 4.5 9",key:"ndf0b3"}],["path",{d:"M18 7v9",key:"pknjwm"}],["path",{d:"m14 12 4 4 4-4",key:"buelq4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=n("AArrowUp",[["path",{d:"M3.5 13h6",key:"p1my2r"}],["path",{d:"m2 16 4.5-9 4.5 9",key:"ndf0b3"}],["path",{d:"M18 16V7",key:"ty0viw"}],["path",{d:"m14 11 4-4 4 4",key:"1pu57t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=n("ALargeSmall",[["path",{d:"M21 14h-5",key:"1vh23k"}],["path",{d:"M16 16v-3.5a2.5 2.5 0 0 1 5 0V16",key:"1wh10o"}],["path",{d:"M4.5 13h6",key:"dfilno"}],["path",{d:"m3 16 4.5-9 4.5 9",key:"2dxa0e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=n("Accessibility",[["circle",{cx:"16",cy:"4",r:"1",key:"1grugj"}],["path",{d:"m18 19 1-7-6 1",key:"r0i19z"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5",key:"9ptxx2"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6",key:"10kmtu"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6",key:"2qq6rc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=n("ActivitySquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M17 12h-2l-2 5-2-10-2 5H7",key:"15hlnc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=n("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=n("AirVent",[["path",{d:"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"larmp2"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12",key:"1bo8pg"}],["path",{d:"M6.6 15.6A2 2 0 1 0 10 17v-5",key:"t9h90c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=n("Airplay",[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",key:"ns4c3b"}],["polygon",{points:"12 15 17 21 7 21 12 15",key:"1sy95i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=n("AlarmClockCheck",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"m9 13 2 2 4-4",key:"6343dt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=n("AlarmClockMinus",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"M9 13h6",key:"1uhe8q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=n("AlarmClockOff",[["path",{d:"M6.87 6.87a8 8 0 1 0 11.26 11.26",key:"3on8tj"}],["path",{d:"M19.9 14.25a8 8 0 0 0-9.15-9.15",key:"15ghsc"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.26 18.67 4 21",key:"yzmioq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M4 4 2 6",key:"1ycko6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=n("AlarmClockPlus",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=n("AlarmClock",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M12 9v4l2 2",key:"1c63tq"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=n("AlarmSmoke",[["path",{d:"M4 8a2 2 0 0 1-2-2V3h20v3a2 2 0 0 1-2 2Z",key:"2c4fvq"}],["path",{d:"m19 8-.8 3c-.1.6-.6 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L5 8",key:"1vrndv"}],["path",{d:"M16 21c0-2.5 2-2.5 2-5",key:"1o3eny"}],["path",{d:"M11 21c0-2.5 2-2.5 2-5",key:"1sicvv"}],["path",{d:"M6 21c0-2.5 2-2.5 2-5",key:"i3w1gp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=n("Album",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["polyline",{points:"11 3 11 11 14 8 17 11 17 3",key:"1wcwz3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=n("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=n("AlertOctagon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=n("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=n("AlignCenterHorizontal",[["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4",key:"11f1s0"}],["path",{d:"M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4",key:"t14dx9"}],["path",{d:"M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1",key:"1w07xs"}],["path",{d:"M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1",key:"1apec2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=n("AlignCenterVertical",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4",key:"14d6g8"}],["path",{d:"M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4",key:"1e2lrw"}],["path",{d:"M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1",key:"1fkdwx"}],["path",{d:"M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1",key:"1euafb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=n("AlignCenter",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"17",x2:"7",y1:"12",y2:"12",key:"rsh8ii"}],["line",{x1:"19",x2:"5",y1:"18",y2:"18",key:"1t0tuv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=n("AlignEndHorizontal",[["rect",{width:"6",height:"16",x:"4",y:"2",rx:"2",key:"z5wdxg"}],["rect",{width:"6",height:"9",x:"14",y:"9",rx:"2",key:"um7a8w"}],["path",{d:"M22 22H2",key:"19qnx5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=n("AlignEndVertical",[["rect",{width:"16",height:"6",x:"2",y:"4",rx:"2",key:"10wcwx"}],["rect",{width:"9",height:"6",x:"9",y:"14",rx:"2",key:"4p5bwg"}],["path",{d:"M22 22V2",key:"12ipfv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=n("AlignHorizontalDistributeCenter",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M17 22v-5",key:"4b6g73"}],["path",{d:"M17 7V2",key:"hnrr36"}],["path",{d:"M7 22v-3",key:"1r4jpn"}],["path",{d:"M7 5V2",key:"liy1u9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=n("AlignHorizontalDistributeEnd",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M10 2v20",key:"uyc634"}],["path",{d:"M20 2v20",key:"1tx262"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=n("AlignHorizontalDistributeStart",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M4 2v20",key:"gtpd5x"}],["path",{d:"M14 2v20",key:"tg6bpw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=n("AlignHorizontalJustifyCenter",[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2",key:"dy24zr"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2",key:"13zkjt"}],["path",{d:"M12 2v20",key:"t6zp3m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=n("AlignHorizontalJustifyEnd",[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2",key:"dy24zr"}],["rect",{width:"6",height:"10",x:"12",y:"7",rx:"2",key:"1ht384"}],["path",{d:"M22 2v20",key:"40qfg1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=n("AlignHorizontalJustifyStart",[["rect",{width:"6",height:"14",x:"6",y:"5",rx:"2",key:"hsirpf"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2",key:"13zkjt"}],["path",{d:"M2 2v20",key:"1ivd8o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=n("AlignHorizontalSpaceAround",[["rect",{width:"6",height:"10",x:"9",y:"7",rx:"2",key:"yn7j0q"}],["path",{d:"M4 22V2",key:"tsjzd3"}],["path",{d:"M20 22V2",key:"1bnhr8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=n("AlignHorizontalSpaceBetween",[["rect",{width:"6",height:"14",x:"3",y:"5",rx:"2",key:"j77dae"}],["rect",{width:"6",height:"10",x:"15",y:"7",rx:"2",key:"bq30hj"}],["path",{d:"M3 2v20",key:"1d2pfg"}],["path",{d:"M21 2v20",key:"p059bm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=n("AlignJustify",[["line",{x1:"3",x2:"21",y1:"6",y2:"6",key:"4m8b97"}],["line",{x1:"3",x2:"21",y1:"12",y2:"12",key:"10d38w"}],["line",{x1:"3",x2:"21",y1:"18",y2:"18",key:"kwyyxn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=n("AlignLeft",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}],["line",{x1:"17",x2:"3",y1:"18",y2:"18",key:"1awlsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=n("AlignRight",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}],["line",{x1:"21",x2:"7",y1:"18",y2:"18",key:"1g9eri"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=n("AlignStartHorizontal",[["rect",{width:"6",height:"16",x:"4",y:"6",rx:"2",key:"1n4dg1"}],["rect",{width:"6",height:"9",x:"14",y:"6",rx:"2",key:"17khns"}],["path",{d:"M22 2H2",key:"fhrpnj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=n("AlignStartVertical",[["rect",{width:"9",height:"6",x:"6",y:"14",rx:"2",key:"lpm2y7"}],["rect",{width:"16",height:"6",x:"6",y:"4",rx:"2",key:"rdj6ps"}],["path",{d:"M2 2v20",key:"1ivd8o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=n("AlignVerticalDistributeCenter",[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M22 7h-5",key:"o2endc"}],["path",{d:"M7 7H1",key:"105l6j"}],["path",{d:"M22 17h-3",key:"1lwga1"}],["path",{d:"M5 17H2",key:"1gx9xc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=n("AlignVerticalDistributeEnd",[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"M2 10h20",key:"1ir3d8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=n("AlignVerticalDistributeStart",[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M2 4h20",key:"mda7wb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=n("AlignVerticalJustifyCenter",[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2",key:"1i8z2d"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2",key:"ypihtt"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=n("AlignVerticalJustifyEnd",[["rect",{width:"14",height:"6",x:"5",y:"12",rx:"2",key:"4l4tp2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2",key:"ypihtt"}],["path",{d:"M2 22h20",key:"272qi7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=n("AlignVerticalJustifyStart",[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2",key:"1i8z2d"}],["rect",{width:"10",height:"6",x:"7",y:"6",rx:"2",key:"13squh"}],["path",{d:"M2 2h20",key:"1ennik"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=n("AlignVerticalSpaceAround",[["rect",{width:"10",height:"6",x:"7",y:"9",rx:"2",key:"b1zbii"}],["path",{d:"M22 20H2",key:"1p1f7z"}],["path",{d:"M22 4H2",key:"1b7qnq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=n("AlignVerticalSpaceBetween",[["rect",{width:"14",height:"6",x:"5",y:"15",rx:"2",key:"1w91an"}],["rect",{width:"10",height:"6",x:"7",y:"3",rx:"2",key:"17wqzy"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M2 3h20",key:"91anmk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=n("Ambulance",[["path",{d:"M10 10H6",key:"1bsnug"}],["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14",key:"lrkjwd"}],["path",{d:"M8 8v4",key:"1fwk8c"}],["path",{d:"M9 18h6",key:"x1upvd"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=n("Ampersand",[["path",{d:"M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13",key:"1o9ehi"}],["path",{d:"M16 12h3",key:"4uvgyw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=n("Ampersands",[["path",{d:"M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",key:"12lh1k"}],["path",{d:"M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",key:"173c68"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=n("Anchor",[["path",{d:"M12 22V8",key:"qkxhtm"}],["path",{d:"M5 12H2a10 10 0 0 0 20 0h-3",key:"1hv3nh"}],["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=n("Angry",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["path",{d:"M7.5 8 10 9",key:"olxxln"}],["path",{d:"m14 9 2.5-1",key:"1j6cij"}],["path",{d:"M9 10h0",key:"1vxvly"}],["path",{d:"M15 10h0",key:"1j6oav"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=n("Annoyed",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 15h8",key:"45n4r"}],["path",{d:"M8 9h2",key:"1g203m"}],["path",{d:"M14 9h2",key:"116p9w"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=n("Antenna",[["path",{d:"M2 12 7 2",key:"117k30"}],["path",{d:"m7 12 5-10",key:"1tvx22"}],["path",{d:"m12 12 5-10",key:"ev1o1a"}],["path",{d:"m17 12 5-10",key:"1e4ti3"}],["path",{d:"M4.5 7h15",key:"vlsxkz"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=n("Anvil",[["path",{d:"M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4",key:"1hjpb6"}],["path",{d:"M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z",key:"1qn45f"}],["path",{d:"M9 12v5",key:"3anwtq"}],["path",{d:"M15 12v5",key:"5xh3zn"}],["path",{d:"M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1",key:"1fi4x8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=n("Aperture",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14.31 8 5.74 9.94",key:"1y6ab4"}],["path",{d:"M9.69 8h11.48",key:"1wxppr"}],["path",{d:"m7.38 12 5.74-9.94",key:"1grp0k"}],["path",{d:"M9.69 16 3.95 6.06",key:"libnyf"}],["path",{d:"M14.31 16H2.83",key:"x5fava"}],["path",{d:"m16.62 12-5.74 9.94",key:"1vwawt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=n("AppWindow",[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=n("Apple",[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",key:"3s7exb"}],["path",{d:"M10 2c1 .5 2 2 2 5",key:"fcco2y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=n("ArchiveRestore",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2",key:"tvwodi"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2",key:"1gkqxj"}],["path",{d:"m9 15 3-3 3 3",key:"1pd0qc"}],["path",{d:"M12 12v9",key:"192myk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=n("ArchiveX",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"m9.5 17 5-5",key:"nakeu6"}],["path",{d:"m9.5 12 5 5",key:"1hccrj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=n("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=n("AreaChart",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M7 12v5h12V8l-5 5-4-4Z",key:"zxz28u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=n("Armchair",[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",key:"irtipd"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z",key:"1e01m0"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=n("ArrowBigDownDash",[["path",{d:"M15 5H9",key:"1tp3ed"}],["path",{d:"M15 9v3h4l-7 7-7-7h4V9z",key:"ncdc4b"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=n("ArrowBigDown",[["path",{d:"M15 6v6h4l-7 7-7-7h4V6h6z",key:"1thax2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=n("ArrowBigLeftDash",[["path",{d:"M19 15V9",key:"1hci5f"}],["path",{d:"M15 15h-3v4l-7-7 7-7v4h3v6z",key:"16tjna"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=n("ArrowBigLeft",[["path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z",key:"lbrdak"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=n("ArrowBigRightDash",[["path",{d:"M5 9v6",key:"158jrl"}],["path",{d:"M9 9h3V5l7 7-7 7v-4H9V9z",key:"1sg2xn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=n("ArrowBigRight",[["path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z",key:"7fvt9c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=n("ArrowBigUpDash",[["path",{d:"M9 19h6",key:"456am0"}],["path",{d:"M9 15v-3H5l7-7 7 7h-4v3H9z",key:"1r2uve"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=n("ArrowBigUp",[["path",{d:"M9 18v-6H5l7-7 7 7h-4v6H9z",key:"1x06kx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=n("ArrowDown01",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2",key:"1bwicg"}],["path",{d:"M17 20v-6h-2",key:"1qp1so"}],["path",{d:"M15 20h4",key:"1j968p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=n("ArrowDown10",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M17 10V4h-2",key:"zcsr5x"}],["path",{d:"M15 10h4",key:"id2lce"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2",key:"33xykx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=n("ArrowDownAZ",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M20 8h-5",key:"1vsyxs"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10",key:"ag13bf"}],["path",{d:"M15 14h5l-5 6h5",key:"ur5jdg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=n("ArrowDownCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=n("ArrowDownFromLine",[["path",{d:"M19 3H5",key:"1236rx"}],["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m6 15 6 6 6-6",key:"h15q88"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=n("ArrowDownLeftFromCircle",[["path",{d:"M2 12a10 10 0 1 1 10 10",key:"1yn6ov"}],["path",{d:"m2 22 10-10",key:"28ilpk"}],["path",{d:"M8 22H2v-6",key:"sulq54"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=n("ArrowDownLeftFromSquare",[["path",{d:"M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6",key:"14qz4y"}],["path",{d:"m3 21 9-9",key:"1jfql5"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=n("ArrowDownLeftSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 8-8 8",key:"166keh"}],["path",{d:"M16 16H8V8",key:"1w2ppm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=n("ArrowDownLeft",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=n("ArrowDownNarrowWide",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=n("ArrowDownRightFromCircle",[["path",{d:"M12 22a10 10 0 1 1 10-10",key:"130bv5"}],["path",{d:"M22 22 12 12",key:"131aw7"}],["path",{d:"M22 16v6h-6",key:"1gvm70"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=n("ArrowDownRightFromSquare",[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"14rsvq"}],["path",{d:"m21 21-9-9",key:"1et2py"}],["path",{d:"M21 15v6h-6",key:"1jko0i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=n("ArrowDownRightSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m8 8 8 8",key:"1imecy"}],["path",{d:"M16 8v8H8",key:"1lbpgo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=n("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=n("ArrowDownSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=n("ArrowDownToDot",[["path",{d:"M12 2v14",key:"jyx4ut"}],["path",{d:"m19 9-7 7-7-7",key:"1oe3oy"}],["circle",{cx:"12",cy:"21",r:"1",key:"o0uj5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=n("ArrowDownToLine",[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=n("ArrowDownUp",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"m21 8-4-4-4 4",key:"1c9v7m"}],["path",{d:"M17 4v16",key:"7dpous"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=n("ArrowDownWideNarrow",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h10",key:"1w87gc"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h4",key:"q8tih4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=n("ArrowDownZA",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M15 4h5l-5 6h5",key:"8asdl1"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",key:"r6l5cz"}],["path",{d:"M20 18h-5",key:"18j1r2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=n("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=n("ArrowLeftCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=n("ArrowLeftFromLine",[["path",{d:"m9 6-6 6 6 6",key:"7v63n9"}],["path",{d:"M3 12h14",key:"13k4hi"}],["path",{d:"M21 19V5",key:"b4bplr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=n("ArrowLeftRight",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=n("ArrowLeftSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}],["path",{d:"M16 12H8",key:"1fr5h0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=n("ArrowLeftToLine",[["path",{d:"M3 19V5",key:"rwsyhb"}],["path",{d:"m13 6-6 6 6 6",key:"1yhaz7"}],["path",{d:"M7 12h14",key:"uoisry"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=n("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=n("ArrowRightCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=n("ArrowRightFromLine",[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M21 12H7",key:"13ipq5"}],["path",{d:"m15 18 6-6-6-6",key:"6tx3qv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=n("ArrowRightLeft",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=n("ArrowRightSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=n("ArrowRightToLine",[["path",{d:"M17 12H3",key:"8awo09"}],["path",{d:"m11 18 6-6-6-6",key:"8c2y43"}],["path",{d:"M21 5v14",key:"nzette"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=n("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=n("ArrowUp01",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2",key:"1bwicg"}],["path",{d:"M17 20v-6h-2",key:"1qp1so"}],["path",{d:"M15 20h4",key:"1j968p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=n("ArrowUp10",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M17 10V4h-2",key:"zcsr5x"}],["path",{d:"M15 10h4",key:"id2lce"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2",key:"33xykx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=n("ArrowUpAZ",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M20 8h-5",key:"1vsyxs"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10",key:"ag13bf"}],["path",{d:"M15 14h5l-5 6h5",key:"ur5jdg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=n("ArrowUpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=n("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=n("ArrowUpFromDot",[["path",{d:"m5 9 7-7 7 7",key:"1hw5ic"}],["path",{d:"M12 16V2",key:"ywoabb"}],["circle",{cx:"12",cy:"21",r:"1",key:"o0uj5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=n("ArrowUpFromLine",[["path",{d:"m18 9-6-6-6 6",key:"kcunyi"}],["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=n("ArrowUpLeftFromCircle",[["path",{d:"M2 8V2h6",key:"hiwtdz"}],["path",{d:"m2 2 10 10",key:"1oh8rs"}],["path",{d:"M12 2A10 10 0 1 1 2 12",key:"rrk4fa"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=n("ArrowUpLeftFromSquare",[["path",{d:"M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6",key:"14mv1t"}],["path",{d:"m3 3 9 9",key:"rks13r"}],["path",{d:"M3 9V3h6",key:"ira0h2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=n("ArrowUpLeftSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 16V8h8",key:"19xb1h"}],["path",{d:"M16 16 8 8",key:"1qdy8n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=n("ArrowUpLeft",[["path",{d:"M7 17V7h10",key:"11bw93"}],["path",{d:"M17 17 7 7",key:"2786uv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=n("ArrowUpNarrowWide",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h4",key:"q8tih4"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h10",key:"jvxblo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=n("ArrowUpRightFromCircle",[["path",{d:"M22 12A10 10 0 1 1 12 2",key:"1fm58d"}],["path",{d:"M22 2 12 12",key:"yg2myt"}],["path",{d:"M16 2h6v6",key:"zan5cs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=n("ArrowUpRightFromSquare",[["path",{d:"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6",key:"y09zxi"}],["path",{d:"m21 3-9 9",key:"mpx6sq"}],["path",{d:"M15 3h6v6",key:"1q9fwt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=n("ArrowUpRightSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 8h8v8",key:"b65dnt"}],["path",{d:"m8 16 8-8",key:"13b9ih"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=n("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ei=n("ArrowUpSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=n("ArrowUpToLine",[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=n("ArrowUpWideNarrow",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h4",key:"1krc32"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=n("ArrowUpZA",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M15 4h5l-5 6h5",key:"8asdl1"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",key:"r6l5cz"}],["path",{d:"M20 18h-5",key:"18j1r2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=n("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=n("ArrowsUpFromLine",[["path",{d:"m4 6 3-3 3 3",key:"9aidw8"}],["path",{d:"M7 17V3",key:"19qxw1"}],["path",{d:"m14 6 3-3 3 3",key:"6iy689"}],["path",{d:"M17 17V3",key:"o0fmgi"}],["path",{d:"M4 21h16",key:"1h09gz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=n("AsteriskSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8.5 14 7-4",key:"12hpby"}],["path",{d:"m8.5 10 7 4",key:"wwy2dy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi=n("Asterisk",[["path",{d:"M12 6v12",key:"1vza4d"}],["path",{d:"M17.196 9 6.804 15",key:"1ah31z"}],["path",{d:"m6.804 9 10.392 6",key:"1b6pxd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=n("AtSign",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=n("Atom",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=n("AudioLines",[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=n("AudioWaveform",[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",key:"57tc96"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=n("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=n("Axe",[["path",{d:"m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9",key:"csbz4o"}],["path",{d:"M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z",key:"113wfo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=n("Axis3d",[["path",{d:"M4 4v16h16",key:"1s015l"}],["path",{d:"m4 20 7-7",key:"17qe9y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=n("Baby",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=n("Backpack",[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z",key:"wvr1b5"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}],["path",{d:"M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5",key:"xk3gvk"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=n("BadgeAlert",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=n("BadgeCent",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M15.4 10a4 4 0 1 0 0 4",key:"2eqtx8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=n("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=n("BadgeDollarSign",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=n("BadgeEuro",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M7 12h5",key:"gblrwe"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2",key:"1makmb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=n("BadgeHelp",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["line",{x1:"12",x2:"12.01",y1:"17",y2:"17",key:"io3f8k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=n("BadgeIndianRupee",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M8 8h8",key:"1bis0t"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m13 17-5-1h1a4 4 0 0 0 0-8",key:"nu2bwa"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=n("BadgeInfo",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"16",y2:"12",key:"1y1yb1"}],["line",{x1:"12",x2:"12.01",y1:"8",y2:"8",key:"110wyk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=n("BadgeJapaneseYen",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 8 3 3v7",key:"17yadx"}],["path",{d:"m12 11 3-3",key:"p4cfq1"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M9 16h6",key:"8wimt3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=n("BadgeMinus",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=n("BadgePercent",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=n("BadgePlus",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"8",y2:"16",key:"10p56q"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=n("BadgePoundSterling",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M8 12h4",key:"qz6y1c"}],["path",{d:"M10 16V9.5a2.5 2.5 0 0 1 5 0",key:"3mlbjk"}],["path",{d:"M8 16h7",key:"sbedsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=n("BadgeRussianRuble",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M9 16h5",key:"1syiyw"}],["path",{d:"M9 12h5a2 2 0 1 0 0-4h-3v9",key:"1ge9c1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=n("BadgeSwissFranc",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M11 17V8h4",key:"1bfq6y"}],["path",{d:"M11 12h3",key:"2eqnfz"}],["path",{d:"M9 16h4",key:"1skf3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=n("BadgeX",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=n("Badge",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=n("BaggageClaim",[["path",{d:"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2",key:"4irg2o"}],["path",{d:"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10",key:"14fcyx"}],["rect",{width:"13",height:"8",x:"8",y:"6",rx:"1",key:"o6oiis"}],["circle",{cx:"18",cy:"20",r:"2",key:"t9985n"}],["circle",{cx:"9",cy:"20",r:"2",key:"e5v82j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=n("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=n("Banana",[["path",{d:"M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5",key:"1cscit"}],["path",{d:"M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z",key:"1y1nbv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=n("Banknote",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=n("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=n("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=n("BarChart4",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M13 17V9",key:"1fwyjl"}],["path",{d:"M18 17V5",key:"sfb6ij"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=n("BarChartBig",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["rect",{width:"4",height:"7",x:"7",y:"10",rx:"1",key:"14u6mf"}],["rect",{width:"4",height:"12",x:"15",y:"5",rx:"1",key:"b3pek6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=n("BarChartHorizontalBig",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["rect",{width:"12",height:"4",x:"7",y:"5",rx:"1",key:"936jl1"}],["rect",{width:"7",height:"4",x:"7",y:"13",rx:"1",key:"jqfkpy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=n("BarChartHorizontal",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M7 16h8",key:"srdodz"}],["path",{d:"M7 11h12",key:"127s9w"}],["path",{d:"M7 6h3",key:"w9rmul"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=n("BarChart",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=n("Barcode",[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M8 5v14",key:"1ybrkv"}],["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"M17 5v14",key:"ycjyhj"}],["path",{d:"M21 5v14",key:"nzette"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=n("Baseline",[["path",{d:"M4 20h16",key:"14thso"}],["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=n("Bath",[["path",{d:"M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",key:"1r8yf5"}],["line",{x1:"10",x2:"8",y1:"5",y2:"7",key:"h5g8z4"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"7",x2:"7",y1:"19",y2:"21",key:"16jp00"}],["line",{x1:"17",x2:"17",y1:"19",y2:"21",key:"1pxrnk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=n("BatteryCharging",[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",key:"1sdynx"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1",key:"1gkd3k"}],["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=n("BatteryFull",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13",key:"haxvl5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"13",key:"c6fn6x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=n("BatteryLow",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=n("BatteryMedium",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13",key:"haxvl5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=n("BatteryWarning",[["path",{d:"M14 7h2a2 2 0 0 1 2 2v6c0 1-1 2-2 2h-2",key:"1if82c"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6c0 1 1 2 2 2h2",key:"2pdlyl"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"10",x2:"10",y1:"7",y2:"13",key:"1uzyus"}],["line",{x1:"10",x2:"10",y1:"17",y2:"17.01",key:"1y8k4g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=n("Battery",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=n("Beaker",[["path",{d:"M4.5 3h15",key:"c7n0jr"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",key:"m1uhx7"}],["path",{d:"M6 14h12",key:"4cwo0f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=n("BeanOff",[["path",{d:"M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1",key:"bq3udt"}],["path",{d:"M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66",key:"17ccse"}],["path",{d:"M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04",key:"18zqgq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=n("Bean",[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z",key:"1tvzk7"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28",key:"2cyri2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=n("BedDouble",[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=n("BedSingle",[["path",{d:"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8",key:"1wm6mi"}],["path",{d:"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4",key:"4k93s5"}],["path",{d:"M3 18h18",key:"1h113x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=n("Bed",[["path",{d:"M2 4v16",key:"vw9hq8"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10",key:"1dgv2r"}],["path",{d:"M2 17h20",key:"18nfp3"}],["path",{d:"M6 8v9",key:"1yriud"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=n("Beef",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=n("Beer",[["path",{d:"M17 11h1a3 3 0 0 1 0 6h-1",key:"1yp76v"}],["path",{d:"M9 12v6",key:"1u1cab"}],["path",{d:"M13 12v6",key:"1sugkk"}],["path",{d:"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z",key:"1510fo"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",key:"19jb7n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=n("BellDot",[["path",{d:"M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3",key:"xcehk"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["circle",{cx:"18",cy:"8",r:"3",key:"1g0gzu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=n("BellElectric",[["path",{d:"M18.8 4A6.3 8.7 0 0 1 20 9",key:"xve1fh"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["circle",{cx:"9",cy:"9",r:"7",key:"p2h5vp"}],["rect",{width:"10",height:"6",x:"4",y:"16",rx:"2",key:"17f3te"}],["path",{d:"M14 19c3 0 4.6-1.6 4.6-1.6",key:"n7odp6"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=n("BellMinus",[["path",{d:"M18.4 12c.8 3.8 2.6 5 2.6 5H3s3-2 3-9c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2",key:"eck70s"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M15 8h6",key:"8ybuxh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=n("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=n("BellPlus",[["path",{d:"M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7",key:"guizqy"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M15 8h6",key:"8ybuxh"}],["path",{d:"M18 5v6",key:"g5ayrv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=n("BellRing",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=n("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=n("BetweenHorizontalEnd",[["rect",{width:"13",height:"7",x:"3",y:"3",rx:"1",key:"11xb64"}],["path",{d:"m22 15-3-3 3-3",key:"26chmm"}],["rect",{width:"13",height:"7",x:"3",y:"14",rx:"1",key:"k6ky7n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=n("BetweenHorizontalStart",[["rect",{width:"13",height:"7",x:"8",y:"3",rx:"1",key:"pkso9a"}],["path",{d:"m2 9 3 3-3 3",key:"1agib5"}],["rect",{width:"13",height:"7",x:"8",y:"14",rx:"1",key:"1q5fc1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=n("BetweenVerticalEnd",[["rect",{width:"7",height:"13",x:"3",y:"3",rx:"1",key:"1fdu0f"}],["path",{d:"m9 22 3-3 3 3",key:"17z65a"}],["rect",{width:"7",height:"13",x:"14",y:"3",rx:"1",key:"1squn4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=n("BetweenVerticalStart",[["rect",{width:"7",height:"13",x:"3",y:"8",rx:"1",key:"1fjrkv"}],["path",{d:"m15 2-3 3-3-3",key:"1uh6eb"}],["rect",{width:"7",height:"13",x:"14",y:"8",rx:"1",key:"w3fjg8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=n("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=n("Binary",[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=n("Biohazard",[["circle",{cx:"12",cy:"11.9",r:"2",key:"e8h31w"}],["path",{d:"M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6",key:"17bolr"}],["path",{d:"m8.9 10.1 1.4.8",key:"15ezny"}],["path",{d:"M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5",key:"wtwa5u"}],["path",{d:"m15.1 10.1-1.4.8",key:"1r0b28"}],["path",{d:"M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2",key:"m7qszh"}],["path",{d:"M12 13.9v1.6",key:"zfyyim"}],["path",{d:"M13.5 5.4c-1-.2-2-.2-3 0",key:"1bi9q0"}],["path",{d:"M17 16.4c.7-.7 1.2-1.6 1.5-2.5",key:"1rhjqw"}],["path",{d:"M5.5 13.9c.3.9.8 1.8 1.5 2.5",key:"8gsud3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=n("Bird",[["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",key:"oj1oa8"}],["path",{d:"m20 7 2 .5-2 .5",key:"12nv4d"}],["path",{d:"M10 18v3",key:"1yea0a"}],["path",{d:"M14 17.75V21",key:"1pymcb"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61",key:"1npnn0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=n("Bitcoin",[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",key:"yr8idg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=n("Blend",[["circle",{cx:"9",cy:"9",r:"7",key:"p2h5vp"}],["circle",{cx:"15",cy:"15",r:"7",key:"19ennj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=n("Blinds",[["path",{d:"M3 3h18",key:"o7r712"}],["path",{d:"M20 7H8",key:"gd2fo2"}],["path",{d:"M20 11H8",key:"1ynp89"}],["path",{d:"M10 19h10",key:"19hjk5"}],["path",{d:"M8 15h12",key:"1yqzne"}],["path",{d:"M4 3v14",key:"fggqzn"}],["circle",{cx:"4",cy:"19",r:"2",key:"p3m9r0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=n("Blocks",[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=n("BluetoothConnected",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}],["line",{x1:"18",x2:"21",y1:"12",y2:"12",key:"1rsjjs"}],["line",{x1:"3",x2:"6",y1:"12",y2:"12",key:"11yl8c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=n("BluetoothOff",[["path",{d:"m17 17-5 5V12l-5 5",key:"v5aci6"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M14.5 9.5 17 7l-5-5v4.5",key:"1kddfz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=n("BluetoothSearching",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}],["path",{d:"M20.83 14.83a4 4 0 0 0 0-5.66",key:"k8tn1j"}],["path",{d:"M18 12h.01",key:"yjnet6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=n("Bluetooth",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=n("Bold",[["path",{d:"M14 12a4 4 0 0 0 0-8H6v8",key:"v2sylx"}],["path",{d:"M15 20a4 4 0 0 0 0-8H6v8Z",key:"1ef5ya"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=n("Bolt",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=n("Bomb",[["circle",{cx:"11",cy:"13",r:"9",key:"hd149"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95",key:"jp4j1b"}],["path",{d:"m22 2-1.5 1.5",key:"ay92ug"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=n("Bone",[["path",{d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z",key:"w610uw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=n("BookA",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"m8 13 4-7 4 7",key:"4rari8"}],["path",{d:"M9.1 11h5.7",key:"1gkovt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=n("BookAudio",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M8 8v3",key:"1qzp49"}],["path",{d:"M12 6v7",key:"1f6ttz"}],["path",{d:"M16 8v3",key:"gejaml"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=n("BookCheck",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"m9 9.5 2 2 4-4",key:"1dth82"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=n("BookCopy",[["path",{d:"M2 16V4a2 2 0 0 1 2-2h11",key:"spzkk5"}],["path",{d:"M5 14H4a2 2 0 1 0 0 4h1",key:"16gqf9"}],["path",{d:"M22 18H11a2 2 0 1 0 0 4h11V6H11a2 2 0 0 0-2 2v12",key:"1owzki"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=n("BookDashed",[["path",{d:"M20 22h-2",key:"1rpnb6"}],["path",{d:"M20 15v2h-2",key:"fph276"}],["path",{d:"M4 19.5V15",key:"6gr39e"}],["path",{d:"M20 8v3",key:"deu0bs"}],["path",{d:"M18 2h2v2",key:"180o53"}],["path",{d:"M4 11V9",key:"v3xsx8"}],["path",{d:"M12 2h2",key:"cvn524"}],["path",{d:"M12 22h2",key:"kn7ki6"}],["path",{d:"M12 17h2",key:"13u4lk"}],["path",{d:"M8 22H6.5a2.5 2.5 0 0 1 0-5H8",key:"fiseg2"}],["path",{d:"M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8",key:"wywhs9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=n("BookDown",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m9 10 3 3 3-3",key:"zt5b4y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=n("BookHeadphones",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["path",{d:"M8 12v-2a4 4 0 0 1 8 0v2",key:"1vsqkj"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=n("BookHeart",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M16 8.2C16 7 15 6 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9C9 6 8 7 8 8.2c0 .6.3 1.2.7 1.6h0C10 11.1 12 13 12 13s2-1.9 3.3-3.1h0c.4-.4.7-1 .7-1.7z",key:"1dlbw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=n("BookImage",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["circle",{cx:"10",cy:"8",r:"2",key:"2qkj4p"}],["path",{d:"m20 13.7-2.1-2.1c-.8-.8-2-.8-2.8 0L9.7 17",key:"160say"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=n("BookKey",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14",key:"1gfsgw"}],["path",{d:"M20 8v14H6.5a2.5 2.5 0 0 1 0-5H20",key:"zb0ngp"}],["circle",{cx:"14",cy:"8",r:"2",key:"u49eql"}],["path",{d:"m20 2-4.5 4.5",key:"1sppr8"}],["path",{d:"m19 3 1 1",key:"ze14oc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=n("BookLock",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10",key:"18wgow"}],["path",{d:"M20 15v7H6.5a2.5 2.5 0 0 1 0-5H20",key:"dpch1j"}],["rect",{width:"8",height:"5",x:"12",y:"6",rx:"1",key:"9nqwug"}],["path",{d:"M18 6V4a2 2 0 1 0-4 0v2",key:"1aquzs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=n("BookMarked",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["polyline",{points:"10 2 10 10 13 7 16 10 16 2",key:"13o6vz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=n("BookMinus",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=n("BookOpenCheck",[["path",{d:"M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z",key:"1i8u0n"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3",key:"jb5l51"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=n("BookOpenText",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}],["path",{d:"M6 8h2",key:"30oboj"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M16 12h2",key:"7q9ll5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=n("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=n("BookPlus",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 7v6",key:"lw1j43"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=n("BookText",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M8 7h6",key:"1f0q6e"}],["path",{d:"M8 11h8",key:"vwpz6n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=n("BookType",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M16 8V6H8v2",key:"x8j6u4"}],["path",{d:"M12 6v7",key:"1f6ttz"}],["path",{d:"M10 13h4",key:"ytezjc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=n("BookUp2",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2",key:"1lorq7"}],["path",{d:"M18 2h2v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"1nfm9i"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=n("BookUp",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=n("BookUser",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M15 13a3 3 0 1 0-6 0",key:"10j68g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=n("BookX",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"m14.5 7-5 5",key:"dy991v"}],["path",{d:"m9.5 7 5 5",key:"s45iea"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=n("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=n("BookmarkCheck",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=n("BookmarkMinus",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=n("BookmarkPlus",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13",key:"1cppfj"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=n("BookmarkX",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=n("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=n("BoomBox",[["path",{d:"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"vvzvr1"}],["path",{d:"M8 8v1",key:"xcqmfk"}],["path",{d:"M12 8v1",key:"1rj8u4"}],["path",{d:"M16 8v1",key:"1q12zr"}],["rect",{width:"20",height:"12",x:"2",y:"9",rx:"2",key:"igpb89"}],["circle",{cx:"8",cy:"15",r:"2",key:"fa4a8s"}],["circle",{cx:"16",cy:"15",r:"2",key:"14c3ya"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=n("BotMessageSquare",[["path",{d:"M12 6V2H8",key:"1155em"}],["path",{d:"m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z",key:"w2lp3e"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M9 11v2",key:"1ueba0"}],["path",{d:"M15 11v2",key:"i11awn"}],["path",{d:"M20 12h2",key:"1q8mjw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=n("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=n("BoxSelect",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=n("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=n("Boxes",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=n("Braces",[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=n("Brackets",[["path",{d:"M16 3h3v18h-3",key:"1yor1f"}],["path",{d:"M8 21H5V3h3",key:"1qrfwo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=n("BrainCircuit",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ll=n("BrainCog",[["path",{d:"M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.028-.13.306-.13.335 0a3.2 3.2 0 0 0 .163.546 4 4 0 0 0 7.636-2.106 4 4 0 0 0 .556-6.588 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5",key:"1kgmhc"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m15.7 10.4-.9.4",key:"ayzo6p"}],["path",{d:"m9.2 13.2-.9.4",key:"1uzb3g"}],["path",{d:"m13.6 15.7-.4-.9",key:"11ifqf"}],["path",{d:"m10.8 9.2-.4-.9",key:"1pmk2v"}],["path",{d:"m15.7 13.5-.9-.4",key:"7ng02m"}],["path",{d:"m9.2 10.9-.9-.4",key:"1x66zd"}],["path",{d:"m10.5 15.7.4-.9",key:"3js94g"}],["path",{d:"m13.1 9.2.4-.9",key:"18n7mc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cl=n("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=n("BrickWall",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 9v6",key:"199k2o"}],["path",{d:"M16 15v6",key:"8rj2es"}],["path",{d:"M16 3v6",key:"1j6rpj"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 15v6",key:"1stoo3"}],["path",{d:"M8 3v6",key:"vlvjmk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=n("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=n("BringToFront",[["rect",{x:"8",y:"8",width:"8",height:"8",rx:"2",key:"yj20xf"}],["path",{d:"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2",key:"1ltk23"}],["path",{d:"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2",key:"1q24h9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=n("Brush",[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",key:"1styjt"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",key:"z0l1mu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=n("BugOff",[["path",{d:"M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2",key:"vl8zik"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M22 13h-4v-2a4 4 0 0 0-4-4h-1.3",key:"1ou0bd"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13",key:"1njkjs"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=n("BugPlay",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5",key:"1tjixy"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"m12 12 8 5-8 5Z",key:"1ydf81"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=n("Bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=n("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=n("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=n("BusFront",[["path",{d:"M4 6 2 7",key:"1mqr15"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"m22 7-2-1",key:"1umjhc"}],["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M6 19v2",key:"1loha6"}],["path",{d:"M18 21v-2",key:"sqyl04"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl=n("Bus",[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=n("CableCar",[["path",{d:"M10 3h.01",key:"lbucoy"}],["path",{d:"M14 2h.01",key:"1k8aa1"}],["path",{d:"m2 9 20-5",key:"1kz0j5"}],["path",{d:"M12 12V6.5",key:"1vbrij"}],["rect",{width:"16",height:"10",x:"4",y:"12",rx:"3",key:"if91er"}],["path",{d:"M9 12v5",key:"3anwtq"}],["path",{d:"M15 12v5",key:"5xh3zn"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=n("Cable",[["path",{d:"M4 9a2 2 0 0 1-2-2V5h6v2a2 2 0 0 1-2 2Z",key:"1s6oa5"}],["path",{d:"M3 5V3",key:"1k5hjh"}],["path",{d:"M7 5V3",key:"1t1388"}],["path",{d:"M19 15V6.5a3.5 3.5 0 0 0-7 0v11a3.5 3.5 0 0 1-7 0V9",key:"1ytv72"}],["path",{d:"M17 21v-2",key:"ds4u3f"}],["path",{d:"M21 21v-2",key:"eo0ou"}],["path",{d:"M22 19h-6v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z",key:"sdz6o8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=n("CakeSlice",[["circle",{cx:"9",cy:"7",r:"2",key:"1305pl"}],["path",{d:"M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6",key:"xle13f"}],["path",{d:"M16 13H3",key:"1wpj08"}],["path",{d:"M16 17H3",key:"3lvfcd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=n("Cake",[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",key:"1w3rig"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",key:"n2jgmb"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M7 8v3",key:"1qtyvj"}],["path",{d:"M12 8v3",key:"hwp4zt"}],["path",{d:"M17 8v3",key:"1i6e5u"}],["path",{d:"M7 4h0.01",key:"hsw7lv"}],["path",{d:"M12 4h0.01",key:"1e3d8f"}],["path",{d:"M17 4h0.01",key:"p7cxgy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=n("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=n("CalendarCheck2",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"bce9hv"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m16 20 2 2 4-4",key:"13tcca"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=n("CalendarCheck",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=n("CalendarClock",[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=n("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=n("CalendarFold",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z",key:"kg77oy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M15 22v-4a2 2 0 0 1 2-2h4",key:"1gnbqr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=n("CalendarHeart",[["path",{d:"M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7",key:"136lmk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",key:"1t7hil"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=n("CalendarMinus2",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M10 16h4",key:"17e571"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=n("CalendarMinus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=n("CalendarOff",[["path",{d:"M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18",key:"16swn3"}],["path",{d:"M21 15.5V6a2 2 0 0 0-2-2H9.5",key:"yhw86o"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h7",key:"1wap6i"}],["path",{d:"M21 10h-5.5",key:"quycpq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=n("CalendarPlus2",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M10 16h4",key:"17e571"}],["path",{d:"M12 14v4",key:"1thi36"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=n("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=n("CalendarRange",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M17 14h-6",key:"bkmgh3"}],["path",{d:"M13 18H7",key:"bb0bb7"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 18h.01",key:"1bdyru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=n("CalendarSearch",[["path",{d:"M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.5",key:"1e09qw"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h18",key:"8toen8"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.5-1.5",key:"1x83k4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=n("CalendarX2",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m17 22 5-5",key:"1k6ppv"}],["path",{d:"m17 17 5 5",key:"p7ous7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=n("CalendarX",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m14 14-4 4",key:"rymu2i"}],["path",{d:"m10 14 4 4",key:"3sz06r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=n("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=n("CameraOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16",key:"qmtpty"}],["path",{d:"M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5",key:"1ufyfc"}],["path",{d:"M14.121 15.121A3 3 0 1 1 9.88 10.88",key:"11zox6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=n("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=n("CandlestickChart",[["path",{d:"M9 5v4",key:"14uxtq"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1",key:"f4fvz0"}],["path",{d:"M9 15v2",key:"r5rk32"}],["path",{d:"M17 3v2",key:"1l2re6"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1",key:"z38je5"}],["path",{d:"M17 13v3",key:"5l0wba"}],["path",{d:"M3 3v18h18",key:"1s2lah"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=n("CandyCane",[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z",key:"isaq8g"}],["path",{d:"M17.75 7 15 2.1",key:"12x7e8"}],["path",{d:"M10.9 4.8 13 9",key:"100a87"}],["path",{d:"m7.9 9.7 2 4.4",key:"ntfhaj"}],["path",{d:"M4.9 14.7 7 18.9",key:"1x43jy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=n("CandyOff",[["path",{d:"m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1",key:"1ff4ui"}],["path",{d:"M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657",key:"1sbrv4"}],["path",{d:"M14 16.5V14",key:"1maf8j"}],["path",{d:"M14 6.5v1.843",key:"1a6u6t"}],["path",{d:"M10 10v7.5",key:"80pj65"}],["path",{d:"m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1",key:"11a9mt"}],["path",{d:"m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1",key:"3mjmon"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=n("Candy",[["path",{d:"m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z",key:"ue6khb"}],["path",{d:"M14 6.5v10",key:"5xnk7c"}],["path",{d:"M10 7.5v10",key:"1uew51"}],["path",{d:"m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1",key:"b9cp6k"}],["path",{d:"m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1",key:"5lney8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=n("CaptionsOff",[["path",{d:"M10.5 5H19a2 2 0 0 1 2 2v8.5",key:"jqtk4d"}],["path",{d:"M17 11h-.5",key:"1961ue"}],["path",{d:"M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2",key:"1keqsi"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M7 11h4",key:"1o1z6v"}],["path",{d:"M7 15h2.5",key:"1ina1g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=n("Captions",[["rect",{width:"18",height:"14",x:"3",y:"5",rx:"2",ry:"2",key:"12ruh7"}],["path",{d:"M7 15h4M15 15h2M7 11h2M13 11h4",key:"1ueiar"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=n("CarFront",[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=n("CarTaxiFront",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=n("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=n("Caravan",[["rect",{width:"4",height:"4",x:"2",y:"9",key:"1vcvhd"}],["rect",{width:"4",height:"10",x:"10",y:"9",key:"1b7ev2"}],["path",{d:"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2",key:"19jm3t"}],["circle",{cx:"8",cy:"19",r:"2",key:"t8fc5s"}],["path",{d:"M10 19h12v-2",key:"1yu2qx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=n("Carrot",[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",key:"rfqxbe"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z",key:"6b25w4"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z",key:"fn65lo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=n("CaseLower",[["circle",{cx:"7",cy:"12",r:"3",key:"12clwm"}],["path",{d:"M10 9v6",key:"17i7lo"}],["circle",{cx:"17",cy:"12",r:"3",key:"gl7c2s"}],["path",{d:"M14 7v8",key:"dl84cr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=n("CaseSensitive",[["path",{d:"m3 15 4-8 4 8",key:"1vwr6u"}],["path",{d:"M4 13h6",key:"1r9ots"}],["circle",{cx:"18",cy:"12",r:"3",key:"1kchzo"}],["path",{d:"M21 9v6",key:"anns31"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=n("CaseUpper",[["path",{d:"m3 15 4-8 4 8",key:"1vwr6u"}],["path",{d:"M4 13h6",key:"1r9ots"}],["path",{d:"M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4",key:"1sqfas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=n("CassetteTape",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["circle",{cx:"8",cy:"10",r:"2",key:"1xl4ub"}],["path",{d:"M8 12h8",key:"1wcyev"}],["circle",{cx:"16",cy:"10",r:"2",key:"r14t7q"}],["path",{d:"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3",key:"l01ucn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=n("Cast",[["path",{d:"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6",key:"3zrzxg"}],["path",{d:"M2 12a9 9 0 0 1 8 8",key:"g6cvee"}],["path",{d:"M2 16a5 5 0 0 1 4 4",key:"1y1dii"}],["line",{x1:"2",x2:"2.01",y1:"20",y2:"20",key:"xu2jvo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=n("Castle",[["path",{d:"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z",key:"109fe4"}],["path",{d:"M18 11V4H6v7",key:"mon5oj"}],["path",{d:"M15 22v-4a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4",key:"jdggr9"}],["path",{d:"M22 11V9",key:"3zbp94"}],["path",{d:"M2 11V9",key:"1x5rnq"}],["path",{d:"M6 4V2",key:"1rsq15"}],["path",{d:"M18 4V2",key:"1jsdo1"}],["path",{d:"M10 4V2",key:"75d9ly"}],["path",{d:"M14 4V2",key:"8nj3z6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=n("Cat",[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z",key:"x6xyqk"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=n("Cctv",[["path",{d:"M7 9h.01",key:"19b3jx"}],["path",{d:"M16.75 12H22l-3.5 7-3.09-4.32",key:"1h9vqe"}],["path",{d:"M18 9.5l-4 8-10.39-5.2a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3Z",key:"q5d122"}],["path",{d:"M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15",key:"19bib8"}],["path",{d:"M2 21v-4",key:"l40lih"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=n("CheckCheck",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=n("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=n("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=n("CheckSquare2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=n("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=n("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=n("ChefHat",[["path",{d:"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z",key:"z3ra2g"}],["line",{x1:"6",x2:"18",y1:"17",y2:"17",key:"12q60k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=n("Cherry",[["path",{d:"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",key:"cvxqlc"}],["path",{d:"M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",key:"1ostrc"}],["path",{d:"M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12",key:"hqx58h"}],["path",{d:"M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z",key:"eykp1o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=n("ChevronDownCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 10-4 4-4-4",key:"894hmk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=n("ChevronDownSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 10-4 4-4-4",key:"894hmk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=n("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=n("ChevronFirst",[["path",{d:"m17 18-6-6 6-6",key:"1yerx2"}],["path",{d:"M7 6v12",key:"1p53r6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=n("ChevronLast",[["path",{d:"m7 18 6-6-6-6",key:"lwmzdw"}],["path",{d:"M17 6v12",key:"1o0aio"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=n("ChevronLeftCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14 16-4-4 4-4",key:"ojs7w8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=n("ChevronLeftSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m14 16-4-4 4-4",key:"ojs7w8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=n("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=n("ChevronRightCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m10 8 4 4-4 4",key:"1wy4r4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=n("ChevronRightSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m10 8 4 4-4 4",key:"1wy4r4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=n("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=n("ChevronUpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m8 14 4-4 4 4",key:"fy2ptz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=n("ChevronUpSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m8 14 4-4 4 4",key:"fy2ptz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=n("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=n("ChevronsDownUp",[["path",{d:"m7 20 5-5 5 5",key:"13a0gw"}],["path",{d:"m7 4 5 5 5-5",key:"1kwcof"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=n("ChevronsDown",[["path",{d:"m7 6 5 5 5-5",key:"1lc07p"}],["path",{d:"m7 13 5 5 5-5",key:"1d48rs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=n("ChevronsLeftRight",[["path",{d:"m9 7-5 5 5 5",key:"j5w590"}],["path",{d:"m15 7 5 5-5 5",key:"1bl6da"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=n("ChevronsLeft",[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=n("ChevronsRightLeft",[["path",{d:"m20 17-5-5 5-5",key:"30x0n2"}],["path",{d:"m4 17 5-5-5-5",key:"16spf4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=n("ChevronsRight",[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=n("ChevronsUpDown",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=n("ChevronsUp",[["path",{d:"m17 11-5-5-5 5",key:"e8nh98"}],["path",{d:"m17 18-5-5-5 5",key:"2avn1x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=n("Chrome",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=n("Church",[["path",{d:"m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2",key:"gy5gyo"}],["path",{d:"M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4",key:"cpkuc4"}],["path",{d:"M18 22V5l-6-3-6 3v17",key:"1hsnhq"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M10 9h4",key:"u4k05v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=n("CigaretteOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M12 12H2v4h14",key:"91gsaq"}],["path",{d:"M22 12v4",key:"142cbu"}],["path",{d:"M18 12h-.5",key:"12ymji"}],["path",{d:"M7 12v4",key:"jqww69"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5",key:"1il607"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5",key:"1gah44"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=n("Cigarette",[["path",{d:"M18 12H2v4h16",key:"2rt1hm"}],["path",{d:"M22 12v4",key:"142cbu"}],["path",{d:"M7 12v4",key:"jqww69"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5",key:"1il607"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5",key:"1gah44"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=n("CircleDashed",[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0",key:"5ilxe3"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0",key:"11zvb9"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7",key:"1iw5b2"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8",key:"c0bmvh"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69",key:"1ruxm7"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8",key:"qkgqxc"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69",key:"1mcia2"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7",key:"1fvljs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=n("CircleDollarSign",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=n("CircleDotDashed",[["path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0",key:"1qdqn0"}],["path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7",key:"1bq7p6"}],["path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8",key:"1rlaqf"}],["path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69",key:"1xk03u"}],["path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0",key:"l7re25"}],["path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7",key:"1v18p6"}],["path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8",key:"xdo6bj"}],["path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69",key:"1jjmaz"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=n("CircleDot",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=n("CircleEllipsis",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M7 12h.01",key:"eqddd0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=n("CircleEqual",[["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M7 14h10",key:"1mhdw3"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=n("CircleFadingPlus",[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75",key:"175t95"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3",key:"1vce0s"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4",key:"o3fkw4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857",key:"1szpfk"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38",key:"9yhvd4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=n("CircleOff",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.35 2.69A10 10 0 0 1 21.3 15.65",key:"1pfsoa"}],["path",{d:"M19.08 19.08A10 10 0 1 1 4.92 4.92",key:"1ablyi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=n("CircleSlash2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M22 2 2 22",key:"y4kqgn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=n("CircleSlash",[["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=n("CircleUserRound",[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=n("CircleUser",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=n("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=n("CircuitBoard",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=n("Citrus",[["path",{d:"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z",key:"4ite01"}],["path",{d:"M19.65 15.66A8 8 0 0 1 8.35 4.34",key:"1gxipu"}],["path",{d:"m14 10-5.5 5.5",key:"92pfem"}],["path",{d:"M14 17.85V10H6.15",key:"xqmtsk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=n("Clapperboard",[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=n("ClipboardCheck",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=n("ClipboardCopy",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=n("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=n("ClipboardMinus",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 14h6",key:"159ibu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=n("ClipboardPaste",[["path",{d:"M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z",key:"1pp7kr"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10",key:"2ik1ml"}],["path",{d:"m17 10 4 4-4 4",key:"vp2hj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=n("ClipboardPenLine",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",key:"1but9f"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1",key:"1p8n7l"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M18.4 9.6a2 2 0 0 1 3 3L17 17l-4 1 1-4Z",key:"yg2pdb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=n("ClipboardPen",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M10.4 12.6a2 2 0 0 1 3 3L8 21l-4 1 1-4Z",key:"hnx206"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5",key:"cereej"}],["path",{d:"M4 13.5V6a2 2 0 0 1 2-2h2",key:"5ua5vh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=n("ClipboardPlus",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 14h6",key:"159ibu"}],["path",{d:"M12 17v-6",key:"1y8rbf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=n("ClipboardType",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 12v-1h6v1",key:"iehl6m"}],["path",{d:"M11 17h2",key:"12w5me"}],["path",{d:"M12 11v6",key:"1bwqyc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=n("ClipboardX",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m15 11-6 6",key:"1toa9n"}],["path",{d:"m9 11 6 6",key:"wlibny"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=n("Clipboard",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=n("Clock1",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 14.5 8",key:"12zbmj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=n("Clock10",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 8 10",key:"atfzqc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=n("Clock11",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 9.5 8",key:"l5bg6f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=n("Clock12",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12",key:"1fub01"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=n("Clock2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 10",key:"1g230d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=n("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=n("Clock4",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=n("Clock5",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 14.5 16",key:"1pcbox"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=n("Clock6",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 12 16.5",key:"hb2qv6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=n("Clock7",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 9.5 16",key:"ka3394"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=n("Clock8",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 8 14",key:"tmc9b4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=n("Clock9",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 7.5 12",key:"1k60p0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=n("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=n("CloudCog",[["circle",{cx:"12",cy:"17",r:"3",key:"1spfwm"}],["path",{d:"M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2",key:"zaobp"}],["path",{d:"m15.7 18.4-.9-.3",key:"4qxpbn"}],["path",{d:"m9.2 15.9-.9-.3",key:"17q7o2"}],["path",{d:"m10.6 20.7.3-.9",key:"1pf4s2"}],["path",{d:"m13.1 14.2.3-.9",key:"1mnuqm"}],["path",{d:"m13.6 20.7-.4-1",key:"1jpd1m"}],["path",{d:"m10.8 14.3-.4-1",key:"17ugyy"}],["path",{d:"m8.3 18.6 1-.4",key:"s42vdx"}],["path",{d:"m14.7 15.8 1-.4",key:"2wizun"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=n("CloudDrizzle",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M8 19v1",key:"1dk2by"}],["path",{d:"M8 14v1",key:"84yxot"}],["path",{d:"M16 19v1",key:"v220m7"}],["path",{d:"M16 14v1",key:"g12gj6"}],["path",{d:"M12 21v1",key:"q8vafk"}],["path",{d:"M12 16v1",key:"1mx6rx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=n("CloudFog",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 17H7",key:"pygtm1"}],["path",{d:"M17 21H9",key:"1u2q02"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=n("CloudHail",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v2",key:"a1is7l"}],["path",{d:"M8 14v2",key:"1e9m6t"}],["path",{d:"M16 20h.01",key:"xwek51"}],["path",{d:"M8 20h.01",key:"1vjney"}],["path",{d:"M12 16v2",key:"z66u1j"}],["path",{d:"M12 22h.01",key:"1urd7a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=n("CloudLightning",[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973",key:"1cez44"}],["path",{d:"m13 12-3 5h4l-3 5",key:"1t22er"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=n("CloudMoonRain",[["path",{d:"M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197",key:"u82z8m"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",key:"1qmrp3"}],["path",{d:"M11 20v2",key:"174qtz"}],["path",{d:"M7 19v2",key:"12npes"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=n("CloudMoon",[["path",{d:"M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z",key:"p44pc9"}],["path",{d:"M10.1 9A6 6 0 0 1 16 4a4.24 4.24 0 0 0 6 6 6 6 0 0 1-3 5.197",key:"16nha0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=n("CloudOff",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193",key:"yfwify"}],["path",{d:"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07",key:"jlfiyv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=n("CloudRainWind",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m9.2 22 3-7",key:"sb5f6j"}],["path",{d:"m9 13-3 7",key:"500co5"}],["path",{d:"m17 13-3 7",key:"8t2fiy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=n("CloudRain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=n("CloudSnow",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M8 19h.01",key:"puxtts"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M12 21h.01",key:"h35vbk"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M16 19h.01",key:"1vcnzz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=n("CloudSunRain",[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",key:"1qmrp3"}],["path",{d:"M11 20v2",key:"174qtz"}],["path",{d:"M7 19v2",key:"12npes"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=n("CloudSun",[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z",key:"s09mg5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=n("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=n("Cloudy",[["path",{d:"M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"gqqjvc"}],["path",{d:"M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5",key:"1p2s76"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=n("Clover",[["path",{d:"M16.17 7.83 2 22",key:"t58vo8"}],["path",{d:"M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12",key:"17k36q"}],["path",{d:"m7.83 7.83 8.34 8.34",key:"1d7sxk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=n("Club",[["path",{d:"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z",key:"27yuqz"}],["path",{d:"M12 17.66L12 22",key:"ogfahf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=n("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=n("CodeSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m10 10-2 2 2 2",key:"p6et6i"}],["path",{d:"m14 14 2-2-2-2",key:"m075q2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=n("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=n("Codepen",[["polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2",key:"srzb37"}],["line",{x1:"12",x2:"12",y1:"22",y2:"15.5",key:"1t73f2"}],["polyline",{points:"22 8.5 12 15.5 2 8.5",key:"ajlxae"}],["polyline",{points:"2 15.5 12 8.5 22 15.5",key:"susrui"}],["line",{x1:"12",x2:"12",y1:"2",y2:"8.5",key:"2cldga"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=n("Codesandbox",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["polyline",{points:"7.5 4.21 12 6.81 16.5 4.21",key:"fabo96"}],["polyline",{points:"7.5 19.79 7.5 14.6 3 12",key:"z377f1"}],["polyline",{points:"21 12 16.5 14.6 16.5 19.79",key:"9nrev1"}],["polyline",{points:"3.27 6.96 12 12.01 20.73 6.96",key:"1180pa"}],["line",{x1:"12",x2:"12",y1:"22.08",y2:"12",key:"3z3uq6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=n("Coffee",[["path",{d:"M17 8h1a4 4 0 1 1 0 8h-1",key:"jx4kbh"}],["path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",key:"1bxrl0"}],["line",{x1:"6",x2:"6",y1:"2",y2:"4",key:"1cr9l3"}],["line",{x1:"10",x2:"10",y1:"2",y2:"4",key:"170wym"}],["line",{x1:"14",x2:"14",y1:"2",y2:"4",key:"1c5f70"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=n("Cog",[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",key:"sobvz5"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",key:"11i496"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=n("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=n("Columns2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=n("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=n("Columns4",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7.5 3v18",key:"w0wo6v"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M16.5 3v18",key:"10tjh1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=n("Combine",[["rect",{width:"8",height:"8",x:"2",y:"2",rx:"2",key:"z1hh3n"}],["path",{d:"M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"83orz6"}],["path",{d:"M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"k86dmt"}],["path",{d:"M10 18H5c-1.7 0-3-1.3-3-3v-1",key:"6vokjl"}],["polyline",{points:"7 21 10 18 7 15",key:"1k02g0"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2",key:"1fa9i4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=n("Command",[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=n("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=n("Component",[["path",{d:"M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z",key:"1kciei"}],["path",{d:"m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z",key:"1ome0g"}],["path",{d:"M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z",key:"vbupec"}],["path",{d:"m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z",key:"16csic"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=n("Computer",[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=n("ConciergeBell",[["path",{d:"M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z",key:"1pvr1r"}],["path",{d:"M20 16a8 8 0 1 0-16 0",key:"1pa543"}],["path",{d:"M12 4v4",key:"1bq03y"}],["path",{d:"M10 4h4",key:"1xpv9s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=n("Cone",[["path",{d:"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98",key:"53pte7"}],["ellipse",{cx:"12",cy:"19",rx:"9",ry:"3",key:"1ji25f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=n("Construction",[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1",key:"1estib"}],["path",{d:"M17 14v7",key:"7m2elx"}],["path",{d:"M7 14v7",key:"1cm7wv"}],["path",{d:"M17 3v3",key:"1v4jwn"}],["path",{d:"M7 3v3",key:"7o6guu"}],["path",{d:"M10 14 2.3 6.3",key:"1023jk"}],["path",{d:"m14 6 7.7 7.7",key:"1s8pl2"}],["path",{d:"m8 6 8 8",key:"hl96qh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=n("Contact2",[["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}],["circle",{cx:"12",cy:"11",r:"3",key:"itu57m"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["line",{x1:"8",x2:"8",y1:"2",y2:"4",key:"1ff9gb"}],["line",{x1:"16",x2:"16",y1:"2",y2:"4",key:"1ufoma"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=n("Contact",[["path",{d:"M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2",key:"1mghuy"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["circle",{cx:"12",cy:"10",r:"2",key:"1yojzk"}],["line",{x1:"8",x2:"8",y1:"2",y2:"4",key:"1ff9gb"}],["line",{x1:"16",x2:"16",y1:"2",y2:"4",key:"1ufoma"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=n("Container",[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",key:"1t2lqe"}],["path",{d:"M10 21.9V14L2.1 9.1",key:"o7czzq"}],["path",{d:"m10 14 11.9-6.9",key:"zm5e20"}],["path",{d:"M14 19.8v-8.1",key:"159ecu"}],["path",{d:"M18 17.5V9.4",key:"11uown"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=n("Contrast",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z",key:"j4l70d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=n("Cookie",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=n("CookingPot",[["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",key:"u0tga0"}],["path",{d:"m4 8 16-4",key:"16g0ng"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8",key:"12cejc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=n("CopyCheck",[["path",{d:"m12 15 2 2 4-4",key:"2c609p"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=n("CopyMinus",[["line",{x1:"12",x2:"18",y1:"15",y2:"15",key:"1nscbv"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=n("CopyPlus",[["line",{x1:"15",x2:"15",y1:"12",y2:"18",key:"1p7wdc"}],["line",{x1:"12",x2:"18",y1:"15",y2:"15",key:"1nscbv"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=n("CopySlash",[["line",{x1:"12",x2:"18",y1:"18",y2:"12",key:"ebkxgr"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=n("CopyX",[["line",{x1:"12",x2:"18",y1:"12",y2:"18",key:"1rg63v"}],["line",{x1:"12",x2:"18",y1:"18",y2:"12",key:"ebkxgr"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=n("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=n("Copyleft",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.17 14.83a4 4 0 1 0 0-5.66",key:"1sveal"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=n("Copyright",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M14.83 14.83a4 4 0 1 1 0-5.66",key:"1i56pz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=n("CornerDownLeft",[["polyline",{points:"9 10 4 15 9 20",key:"r3jprv"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=n("CornerDownRight",[["polyline",{points:"15 10 20 15 15 20",key:"1q7qjw"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12",key:"z08zvw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=n("CornerLeftDown",[["polyline",{points:"14 15 9 20 4 15",key:"nkc4i"}],["path",{d:"M20 4h-7a4 4 0 0 0-4 4v12",key:"nbpdq2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=n("CornerLeftUp",[["polyline",{points:"14 9 9 4 4 9",key:"m9oyvo"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4",key:"1blwi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=n("CornerRightDown",[["polyline",{points:"10 15 15 20 20 15",key:"axus6l"}],["path",{d:"M4 4h7a4 4 0 0 1 4 4v12",key:"wcbgct"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=n("CornerRightUp",[["polyline",{points:"10 9 15 4 20 9",key:"1lr6px"}],["path",{d:"M4 20h7a4 4 0 0 0 4-4V4",key:"1plgdj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=n("CornerUpLeft",[["polyline",{points:"9 14 4 9 9 4",key:"881910"}],["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4",key:"1nkjon"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=n("CornerUpRight",[["polyline",{points:"15 14 20 9 15 4",key:"1tbx3s"}],["path",{d:"M4 20v-7a4 4 0 0 1 4-4h12",key:"1lu4f8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=n("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=n("CreativeCommons",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",key:"1ss3eq"}],["path",{d:"M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",key:"1od56t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=n("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=n("Croissant",[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",key:"1ozxlb"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",key:"ffuyb5"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",key:"osnpzi"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",key:"1vubaw"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",key:"wxr772"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=n("Crop",[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14",key:"ron5a4"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2",key:"7s9ehn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=n("Cross",[["path",{d:"M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z",key:"1t5g7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=n("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=n("Crown",[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",key:"zkxr6b"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=n("Cuboid",[["path",{d:"m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z",key:"1u2ovd"}],["path",{d:"M10 22v-8L2.25 9.15",key:"11pn4q"}],["path",{d:"m10 14 11.77-6.87",key:"1kt1wh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=n("CupSoda",[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",key:"8166m8"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"yjz344"}],["path",{d:"m12 8 1-6h2",key:"3ybfa4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=n("Currency",[["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}],["line",{x1:"3",x2:"6",y1:"3",y2:"6",key:"1jkytn"}],["line",{x1:"21",x2:"18",y1:"3",y2:"6",key:"14zfjt"}],["line",{x1:"3",x2:"6",y1:"21",y2:"18",key:"iusuec"}],["line",{x1:"21",x2:"18",y1:"21",y2:"18",key:"yj2dd7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=n("Cylinder",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5",key:"aqi0yr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=n("DatabaseBackup",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 12a9 3 0 0 0 5 2.69",key:"1ui2ym"}],["path",{d:"M21 9.3V5",key:"6k6cib"}],["path",{d:"M3 5v14a9 3 0 0 0 6.47 2.88",key:"i62tjy"}],["path",{d:"M12 12v4h4",key:"1bxaet"}],["path",{d:"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16",key:"1f4ei9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=n("DatabaseZap",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 15 21.84",key:"14ibmq"}],["path",{d:"M21 5V8",key:"1marbg"}],["path",{d:"M21 12L18 17H22L19 22",key:"zafso"}],["path",{d:"M3 12A9 3 0 0 0 14.59 14.87",key:"1y4wr8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=n("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=n("Delete",[["path",{d:"M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z",key:"1oy587"}],["line",{x1:"18",x2:"12",y1:"9",y2:"15",key:"1olkx5"}],["line",{x1:"12",x2:"18",y1:"9",y2:"15",key:"1n50pc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs=n("Dessert",[["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}],["path",{d:"M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8",key:"lfo06j"}],["path",{d:"M3.2 14.8a9 9 0 0 0 17.6 0",key:"12xarc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=n("Diameter",[["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["circle",{cx:"5",cy:"5",r:"2",key:"1gwv83"}],["path",{d:"M6.48 3.66a10 10 0 0 1 13.86 13.86",key:"xr8kdq"}],["path",{d:"m6.41 6.41 11.18 11.18",key:"uhpjw7"}],["path",{d:"M3.66 6.48a10 10 0 0 0 13.86 13.86",key:"cldpwv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=n("Diamond",[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=n("Dice1",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=n("Dice2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M15 9h.01",key:"x1ddxp"}],["path",{d:"M9 15h.01",key:"fzyn71"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=n("Dice3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=n("Dice4",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 16h.01",key:"18s6g9"}],["path",{d:"M16 16h.01",key:"1f9h7w"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=n("Dice5",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 16h.01",key:"18s6g9"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=n("Dice6",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=n("Dices",[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=n("Diff",[["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=n("Disc2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=n("Disc3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2",key:"oqkarx"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2",key:"1eah9h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=n("DiscAlbum",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"12",r:"5",key:"nd82uf"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=n("Disc",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=n("DivideCircle",[["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16",key:"aqc6ln"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8",key:"1mkcni"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ys=n("DivideSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16",key:"aqc6ln"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8",key:"1mkcni"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=n("Divide",[["circle",{cx:"12",cy:"6",r:"1",key:"1bh7o1"}],["line",{x1:"5",x2:"19",y1:"12",y2:"12",key:"13b5wn"}],["circle",{cx:"12",cy:"18",r:"1",key:"lqb9t5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=n("DnaOff",[["path",{d:"M15 2c-1.35 1.5-2.092 3-2.5 4.5M9 22c1.35-1.5 2.092-3 2.5-4.5",key:"sxiaad"}],["path",{d:"M2 15c3.333-3 6.667-3 10-3m10-3c-1.5 1.35-3 2.092-4.5 2.5",key:"yn4bs1"}],["path",{d:"m17 6-2.5-2.5",key:"5cdfhj"}],["path",{d:"m14 8-1.5-1.5",key:"1ohn8i"}],["path",{d:"m7 18 2.5 2.5",key:"16tu1a"}],["path",{d:"m3.5 14.5.5.5",key:"hapbhd"}],["path",{d:"m20 9 .5.5",key:"1n7z02"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m10 16 1.5 1.5",key:"11lckj"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=n("Dna",[["path",{d:"M2 15c6.667-6 13.333 0 20-6",key:"1pyr53"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993",key:"q3hbxp"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",key:"80uv8i"}],["path",{d:"m17 6-2.5-2.5",key:"5cdfhj"}],["path",{d:"m14 8-1-1",key:"15nbz5"}],["path",{d:"m7 18 2.5 2.5",key:"16tu1a"}],["path",{d:"m3.5 14.5.5.5",key:"hapbhd"}],["path",{d:"m20 9 .5.5",key:"1n7z02"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m10 16 1.5 1.5",key:"11lckj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=n("Dog",[["path",{d:"M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5",key:"19br0u"}],["path",{d:"M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",key:"11n1an"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306",key:"wsu29d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=n("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=n("Donut",[["path",{d:"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3",key:"19sr3x"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=n("DoorClosed",[["path",{d:"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14",key:"36qu9e"}],["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"M14 12v.01",key:"xfcn54"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=n("DoorOpen",[["path",{d:"M13 4h3a2 2 0 0 1 2 2v14",key:"hrm0s9"}],["path",{d:"M2 20h3",key:"1gaodv"}],["path",{d:"M13 20h9",key:"s90cdi"}],["path",{d:"M10 12v.01",key:"vx6srw"}],["path",{d:"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z",key:"199qr4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=n("DotSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=n("Dot",[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=n("DownloadCloud",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m8 17 4 4 4-4",key:"1ul180"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=n("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=n("DraftingCompass",[["circle",{cx:"12",cy:"5",r:"2",key:"f1ur92"}],["path",{d:"m3 21 8.02-14.26",key:"1ssaw4"}],["path",{d:"m12.99 6.74 1.93 3.44",key:"iwagvd"}],["path",{d:"M19 12c-3.87 4-10.13 4-14 0",key:"1tsu18"}],["path",{d:"m21 21-2.16-3.84",key:"vylbct"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=n("Drama",[["path",{d:"M10 11h.01",key:"d2at3l"}],["path",{d:"M14 6h.01",key:"k028ub"}],["path",{d:"M18 6h.01",key:"1v4wsw"}],["path",{d:"M6.5 13.1h.01",key:"1748ia"}],["path",{d:"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3",key:"172yzv"}],["path",{d:"M17.4 9.9c-.8.8-2 .8-2.8 0",key:"1obv0w"}],["path",{d:"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7",key:"rqjl8i"}],["path",{d:"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4",key:"1mr6wy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=n("Dribbble",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94",key:"hpej1"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32",key:"1tr44o"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72",key:"kbh691"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=n("Drill",[["path",{d:"M14 9c0 .6-.4 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9c.6 0 1 .4 1 1Z",key:"b6nnkj"}],["path",{d:"M18 6h4",key:"66u95g"}],["path",{d:"M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3",key:"105ega"}],["path",{d:"m5 10-2 8",key:"xt2lic"}],["path",{d:"M12 10v3c0 .6-.4 1-1 1H8",key:"mwpjnk"}],["path",{d:"m7 18 2-8",key:"1bzku2"}],["path",{d:"M5 22c-1.7 0-3-1.3-3-3 0-.6.4-1 1-1h7c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z",key:"117add"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=n("Droplet",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=n("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=n("Drum",[["path",{d:"m2 2 8 8",key:"1v6059"}],["path",{d:"m22 2-8 8",key:"173r8a"}],["ellipse",{cx:"12",cy:"9",rx:"10",ry:"5",key:"liohsx"}],["path",{d:"M7 13.4v7.9",key:"1yi6u9"}],["path",{d:"M12 14v8",key:"1tn2tj"}],["path",{d:"M17 13.4v7.9",key:"eqz2v3"}],["path",{d:"M2 9v8a10 5 0 0 0 20 0V9",key:"1750ul"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=n("Drumstick",[["path",{d:"M15.45 15.4c-2.13.65-4.3.32-5.7-1.1-2.29-2.27-1.76-6.5 1.17-9.42 2.93-2.93 7.15-3.46 9.43-1.18 1.41 1.41 1.74 3.57 1.1 5.71-1.4-.51-3.26-.02-4.64 1.36-1.38 1.38-1.87 3.23-1.36 4.63z",key:"1o96s0"}],["path",{d:"m11.25 15.6-2.16 2.16a2.5 2.5 0 1 1-4.56 1.73 2.49 2.49 0 0 1-1.41-4.24 2.5 2.5 0 0 1 3.14-.32l2.16-2.16",key:"14vv5h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=n("Dumbbell",[["path",{d:"m6.5 6.5 11 11",key:"f7oqzb"}],["path",{d:"m21 21-1-1",key:"cpc6if"}],["path",{d:"m3 3 1 1",key:"d3rpuf"}],["path",{d:"m18 22 4-4",key:"1e32o6"}],["path",{d:"m2 6 4-4",key:"189tqz"}],["path",{d:"m3 10 7-7",key:"1bxui2"}],["path",{d:"m14 21 7-7",key:"16x78n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=n("EarOff",[["path",{d:"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46",key:"1qngmn"}],["path",{d:"M6 8.5c0-.75.13-1.47.36-2.14",key:"b06bma"}],["path",{d:"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76",key:"g10hsz"}],["path",{d:"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18",key:"ygzou7"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=n("Ear",[["path",{d:"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0",key:"1dfaln"}],["path",{d:"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4",key:"1qnva7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=n("EarthLock",[["path",{d:"M7 3.34V5a3 3 0 0 0 3 3",key:"w732o8"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"f02343"}],["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M12 2a10 10 0 1 0 9.54 13",key:"zjsr6q"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2",key:"1of5e8"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1",key:"1fmf51"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=n("Earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17",key:"1fi5u6"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"xsiumc"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=n("Eclipse",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a7 7 0 1 0 10 10",key:"1yuj32"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=n("EggFried",[["circle",{cx:"11.5",cy:"12.5",r:"3.5",key:"1cl1mi"}],["path",{d:"M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z",key:"165ef9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=n("EggOff",[["path",{d:"M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625",key:"6et380"}],["path",{d:"M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297",key:"gcdc3f"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=n("Egg",[["path",{d:"M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z",key:"1c39pg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=n("EqualNot",[["line",{x1:"5",x2:"19",y1:"9",y2:"9",key:"1nwqeh"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15",key:"g8yjpy"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=n("EqualSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M7 14h10",key:"1mhdw3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=n("Equal",[["line",{x1:"5",x2:"19",y1:"9",y2:"9",key:"1nwqeh"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15",key:"g8yjpy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=n("Eraser",[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",key:"182aya"}],["path",{d:"M22 21H7",key:"t4ddhn"}],["path",{d:"m5 11 9 9",key:"1mo9qw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=n("Euro",[["path",{d:"M4 10h12",key:"1y6xl8"}],["path",{d:"M4 14h9",key:"1loblj"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",key:"1j6lzo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=n("Expand",[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8",key:"1c15vz"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6",key:"1fsnz2"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6",key:"hawz9i"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6",key:"u9ee12"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=n("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=n("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=n("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=n("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=n("Factory",[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"159hny"}],["path",{d:"M17 18h1",key:"uldtlt"}],["path",{d:"M12 18h1",key:"s9uhes"}],["path",{d:"M7 18h1",key:"1neino"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=n("Fan",[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",key:"484a7f"}],["path",{d:"M12 12v.01",key:"u5ubse"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=n("FastForward",[["polygon",{points:"13 19 22 12 13 5 13 19",key:"587y9g"}],["polygon",{points:"2 19 11 12 2 5 2 19",key:"3pweh0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=n("Feather",[["path",{d:"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z",key:"u4sw5n"}],["line",{x1:"16",x2:"2",y1:"8",y2:"22",key:"1c47m2"}],["line",{x1:"17.5",x2:"9",y1:"15",y2:"15",key:"2fj3pr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=n("Fence",[["path",{d:"M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"1n2rgs"}],["path",{d:"M6 8h4",key:"utf9t1"}],["path",{d:"M6 18h4",key:"12yh4b"}],["path",{d:"m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"3ha7mj"}],["path",{d:"M14 8h4",key:"1r8wg2"}],["path",{d:"M14 18h4",key:"1t3kbu"}],["path",{d:"m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"dfd4e2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=n("FerrisWheel",[["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m6.8 15-3.5 2",key:"hjy98k"}],["path",{d:"m20.7 7-3.5 2",key:"f08gto"}],["path",{d:"M6.8 9 3.3 7",key:"1aevh4"}],["path",{d:"m20.7 17-3.5-2",key:"1liqo3"}],["path",{d:"m9 22 3-8 3 8",key:"wees03"}],["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M18 18.7a9 9 0 1 0-12 0",key:"dhzg4g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=n("Figma",[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",key:"1340ok"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z",key:"1hz3m3"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",key:"1oz8n2"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",key:"1ff65i"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",key:"pdip6e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=n("FileArchive",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v18",key:"1oywqq"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"20",r:"2",key:"1xzdoj"}],["path",{d:"M10 7V6",key:"dljcrl"}],["path",{d:"M10 12v-1",key:"v7bkov"}],["path",{d:"M10 18v-2",key:"1cjy8d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=n("FileAudio2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"3",cy:"17",r:"1",key:"vo6nti"}],["path",{d:"M2 17v-3a4 4 0 0 1 8 0v3",key:"1ggdre"}],["circle",{cx:"9",cy:"17",r:"1",key:"bc1fq4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=n("FileAudio",[["path",{d:"M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"rslqgf"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0",key:"9f7x3i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=n("FileAxis3d",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 18 4-4",key:"12zab0"}],["path",{d:"M8 10v8h8",key:"tlaukw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=n("FileBadge2",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14 12.5 1 5.5-3-1-3 1 1-5.5",key:"14xlky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=n("FileBadge",[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"12ixgl"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",key:"u0c8gj"}],["path",{d:"M7 16.5 8 22l-3-1-3 1 1-5.5",key:"5gm2nr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=n("FileBarChart2",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 18v-1",key:"zg0ygc"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"M16 18v-3",key:"j5jt4h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=n("FileBarChart",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 18v-2",key:"qcmpov"}],["path",{d:"M12 18v-4",key:"q1q25u"}],["path",{d:"M16 18v-6",key:"15y0np"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=n("FileBox",[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"16lz6z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z",key:"99pj1s"}],["path",{d:"M7 17v5",key:"1yj1jh"}],["path",{d:"M11.7 14.2 7 17l-4.7-2.8",key:"1yk8tc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=n("FileCheck2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=n("FileCheck",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=n("FileClock",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"37hlfg"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"8",cy:"16",r:"6",key:"10v15b"}],["path",{d:"M9.5 17.5 8 16.25V14",key:"1o80t2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=n("FileCode2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=n("FileCode",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 13-2 2 2 2",key:"17smn8"}],["path",{d:"m14 17 2-2-2-2",key:"14mezr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=n("FileCog",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"6",cy:"14",r:"3",key:"a1xfv6"}],["path",{d:"M6 10v1",key:"xs0f9j"}],["path",{d:"M6 17v1",key:"idyhc0"}],["path",{d:"M10 14H9",key:"m5fm2q"}],["path",{d:"M3 14H2",key:"19ot09"}],["path",{d:"m9 11-.88.88",key:"lhul2b"}],["path",{d:"M3.88 16.12 3 17",key:"169z9n"}],["path",{d:"m9 17-.88-.88",key:"5io96w"}],["path",{d:"M3.88 11.88 3 11",key:"1ynhy1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=n("FileDiff",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M9 17h6",key:"r8uit2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=n("FileDigit",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"4",height:"6",x:"2",y:"12",rx:"2",key:"jm304g"}],["path",{d:"M10 12h2v6",key:"12zw74"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=n("FileDown",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=n("FileHeart",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",key:"1c1fso"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=n("FileImage",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=n("FileInput",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 15h10",key:"jfw4w8"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=n("FileJson2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"fq0c9t"}],["path",{d:"M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"4gibmv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=n("FileJson",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=n("FileKey2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6",key:"rc0qvx"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"4",cy:"16",r:"2",key:"1ehqvc"}],["path",{d:"m10 10-4.5 4.5",key:"7fwrp6"}],["path",{d:"m9 11 1 1",key:"wa6s5q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=n("FileKey",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["circle",{cx:"10",cy:"16",r:"2",key:"4ckbqe"}],["path",{d:"m16 10-4.5 4.5",key:"7p3ebg"}],["path",{d:"m15 11 1 1",key:"1bsyx3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=n("FileLineChart",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m16 13-3.5 3.5-2-2L8 17",key:"zz7yod"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=n("FileLock2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1",key:"jmtmu2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"8",height:"5",x:"2",y:"13",rx:"1",key:"10y5wo"}],["path",{d:"M8 13v-2a2 2 0 1 0-4 0v2",key:"1pdxzg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=n("FileLock",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["rect",{width:"8",height:"6",x:"8",y:"12",rx:"1",key:"3yr8at"}],["path",{d:"M10 12v-2a2 2 0 1 1 4 0v2",key:"j4i8d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=n("FileMinus2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=n("FileMinus",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=n("FileMusic",[["circle",{cx:"14",cy:"16",r:"2",key:"1bzzi3"}],["circle",{cx:"6",cy:"18",r:"2",key:"1fncim"}],["path",{d:"M4 12.4V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-7.5",key:"skc018"}],["path",{d:"M8 18v-7.7L16 9v7",key:"1oie6o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=n("FileOutput",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2",key:"1vk7w2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6",key:"1jink5"}],["path",{d:"m5 11-3 3",key:"1dgrs4"}],["path",{d:"m5 17-3-3h10",key:"1mvvaf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=n("FilePenLine",[["path",{d:"m18 5-3-3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2",key:"h0fsxq"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M18.4 9.6a2 2 0 1 1 3 3L17 17l-4 1 1-4Z",key:"dyo8mm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=n("FilePen",[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10",key:"x7tsz2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z",key:"o3xyfb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=n("FilePieChart",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"37hlfg"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 11.5a6.02 6.02 0 1 0 8.5 8.5",key:"unkkko"}],["path",{d:"M14 16c0-3.3-2.7-6-6-6v6Z",key:"bym002"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=n("FilePlus2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}],["path",{d:"M6 12v6",key:"1u72j0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=n("FilePlus",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}],["path",{d:"M12 18v-6",key:"17g6i2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=n("FileQuestion",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",key:"1umxtm"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=n("FileScan",[["path",{d:"M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4",key:"1rdf37"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M16 14a2 2 0 0 0-2 2",key:"ceaadl"}],["path",{d:"M20 14a2 2 0 0 1 2 2",key:"1ny6zw"}],["path",{d:"M20 22a2 2 0 0 0 2-2",key:"1l9q4k"}],["path",{d:"M16 22a2 2 0 0 1-2-2",key:"1wqh5n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=n("FileSearch2",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5",key:"1bq0ko"}],["path",{d:"M13.3 16.3 15 18",key:"2quom7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=n("FileSearch",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"1vg67v"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=n("FileSliders",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M10 11v2",key:"1s651w"}],["path",{d:"M8 17h8",key:"wh5c61"}],["path",{d:"M14 16v2",key:"12fp5e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=n("FileSpreadsheet",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=n("FileStack",[["path",{d:"M21 7h-3a2 2 0 0 1-2-2V2",key:"9rb54x"}],["path",{d:"M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z",key:"1059l0"}],["path",{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15",key:"16874u"}],["path",{d:"M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11",key:"k2ox98"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=n("FileSymlink",[["path",{d:"m10 18 3-3-3-3",key:"18f6ys"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",key:"50q2rw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=n("FileTerminal",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 16 2-2-2-2",key:"10vzyd"}],["path",{d:"M12 18h4",key:"1wd2n7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=n("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=n("FileType2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 13v-1h6v1",key:"1dh9dg"}],["path",{d:"M5 12v6",key:"150t9c"}],["path",{d:"M4 18h2",key:"1xrofg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=n("FileType",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 13v-1h6v1",key:"1bb014"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M11 18h2",key:"12mj7e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=n("FileUp",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=n("FileVideo2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"8",height:"6",x:"2",y:"12",rx:"1",key:"1a6c1e"}],["path",{d:"m10 15.5 4 2.5v-6l-4 2.5",key:"t7cp39"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=n("FileVideo",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 11 5 3-5 3v-6Z",key:"7ntvm4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=n("FileVolume2",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M11.5 13.5a2.5 2.5 0 0 1 0 3",key:"1fccat"}],["path",{d:"M15 12a5 5 0 0 1 0 6",key:"ps46cm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=n("FileVolume",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"1vg67v"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m7 10-3 2H2v4h2l3 2Z",key:"fiq8l4"}],["path",{d:"M11 11a5 5 0 0 1 0 6",key:"193qb2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=n("FileWarning",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=n("FileX2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 12.5-5 5",key:"b853mi"}],["path",{d:"m3 12.5 5 5",key:"1qls4r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=n("FileX",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14.5 12.5-5 5",key:"b62r18"}],["path",{d:"m9.5 12.5 5 5",key:"1rk7el"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=n("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=n("Files",[["path",{d:"M20 7h-3a2 2 0 0 1-2-2V2",key:"x099mo"}],["path",{d:"M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z",key:"18t6ie"}],["path",{d:"M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8",key:"1nja0z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=n("Film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=n("FilterX",[["path",{d:"M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055",key:"1fi1da"}],["path",{d:"m22 3-5 5",key:"12jva0"}],["path",{d:"m17 3 5 5",key:"k36vhe"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=n("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=n("Fingerprint",[["path",{d:"M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4",key:"1jc9o5"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2",key:"1mxgy1"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2",key:"1fgabc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=n("FireExtinguisher",[["path",{d:"M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5",key:"sqyvz"}],["path",{d:"M9 18h8",key:"i7pszb"}],["path",{d:"M18 3h-3",key:"7idoqj"}],["path",{d:"M11 3a6 6 0 0 0-6 6v11",key:"1v5je3"}],["path",{d:"M5 13h4",key:"svpcxo"}],["path",{d:"M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z",key:"vsjego"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=n("FishOff",[["path",{d:"M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058",key:"1j1hse"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618",key:"1q46z8"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20",key:"1407gh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=n("FishSymbol",[["path",{d:"M2 16s9-15 20-4C11 23 2 8 2 8",key:"h4oh4o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=n("Fish",[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",key:"15baut"}],["path",{d:"M18 12v.5",key:"18hhni"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86",key:"16dt7o"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",key:"l9di03"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4",key:"1kjonw"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98",key:"1zlm23"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=n("FlagOff",[["path",{d:"M8 2c3 0 5 2 8 2s4-1 4-1v11",key:"9rwyz9"}],["path",{d:"M4 22V4",key:"1plyxx"}],["path",{d:"M4 15s1-1 4-1 5 2 8 2",key:"1myooe"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=n("FlagTriangleLeft",[["path",{d:"M17 22V2L7 7l10 5",key:"1rmf0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=n("FlagTriangleRight",[["path",{d:"M7 22V2l10 5-10 5",key:"17n18y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=n("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=n("FlameKindling",[["path",{d:"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z",key:"1ir223"}],["path",{d:"m5 22 14-4",key:"1brv4h"}],["path",{d:"m5 18 14 4",key:"lgyyje"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=n("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=n("FlashlightOff",[["path",{d:"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4",key:"1r120k"}],["path",{d:"M7 2h11v4c0 2-2 2-2 4v1",key:"dz1920"}],["line",{x1:"11",x2:"18",y1:"6",y2:"6",key:"bi1vpe"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=n("Flashlight",[["path",{d:"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z",key:"1orkel"}],["line",{x1:"6",x2:"18",y1:"6",y2:"6",key:"1z11jq"}],["line",{x1:"12",x2:"12",y1:"12",y2:"12",key:"1f4yc1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=n("FlaskConicalOff",[["path",{d:"M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542",key:"59ek9y"}],["path",{d:"M10 2v2.343",key:"15t272"}],["path",{d:"M14 2v6.343",key:"sxr80q"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h9",key:"t5njau"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=n("FlaskConical",[["path",{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",key:"pzvekw"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=n("FlaskRound",[["path",{d:"M10 2v7.31",key:"5d1hyh"}],["path",{d:"M14 9.3V1.99",key:"14k4l0"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14 9.3a6.5 6.5 0 1 1-4 0",key:"1r8fvy"}],["path",{d:"M5.52 16h12.96",key:"46hh1i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=n("FlipHorizontal2",[["path",{d:"m3 7 5 5-5 5V7",key:"couhi7"}],["path",{d:"m21 7-5 5 5 5V7",key:"6ouia7"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=n("FlipHorizontal",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3",key:"1i73f7"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3",key:"saxlbk"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=n("FlipVertical2",[["path",{d:"m17 3-5 5-5-5h10",key:"1ftt6x"}],["path",{d:"m17 21-5-5-5 5h10",key:"1m0wmu"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=n("FlipVertical",[["path",{d:"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3",key:"14bfxa"}],["path",{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3",key:"14rx03"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=n("Flower2",[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=n("Flower",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5",key:"14wa3c"}],["path",{d:"M12 7.5V9",key:"1oy5b0"}],["path",{d:"M7.5 12H9",key:"eltsq1"}],["path",{d:"M16.5 12H15",key:"vk5kw4"}],["path",{d:"M12 16.5V15",key:"k7eayi"}],["path",{d:"m8 8 1.88 1.88",key:"nxy4qf"}],["path",{d:"M14.12 9.88 16 8",key:"1lst6k"}],["path",{d:"m8 16 1.88-1.88",key:"h2eex1"}],["path",{d:"M14.12 14.12 16 16",key:"uqkrx3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=n("Focus",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=n("FoldHorizontal",[["path",{d:"M2 12h6",key:"1wqiqv"}],["path",{d:"M22 12h-6",key:"1eg9hc"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m19 9-3 3 3 3",key:"12ol22"}],["path",{d:"m5 15 3-3-3-3",key:"1kdhjc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=n("FoldVertical",[["path",{d:"M12 22v-6",key:"6o8u61"}],["path",{d:"M12 8V2",key:"1wkif3"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}],["path",{d:"m15 19-3-3-3 3",key:"e37ymu"}],["path",{d:"m15 5-3 3-3-3",key:"19d6lf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=n("FolderArchive",[["circle",{cx:"15",cy:"19",r:"2",key:"u2pros"}],["path",{d:"M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1",key:"1jj40k"}],["path",{d:"M15 11v-1",key:"cntcp"}],["path",{d:"M15 17v-2",key:"1279jj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=n("FolderCheck",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"m9 13 2 2 4-4",key:"6343dt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=n("FolderClock",[["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}],["path",{d:"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2",key:"1urifu"}],["path",{d:"M16 14v2l1 1",key:"xth2jh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=n("FolderClosed",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M2 10h20",key:"1ir3d8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=n("FolderCog",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3",key:"1k8050"}],["path",{d:"m21.7 19.4-.9-.3",key:"1qgwi9"}],["path",{d:"m15.2 16.9-.9-.3",key:"1t7mvx"}],["path",{d:"m16.6 21.7.3-.9",key:"1j67ps"}],["path",{d:"m19.1 15.2.3-.9",key:"18r7jp"}],["path",{d:"m19.6 21.7-.4-1",key:"z2vh2"}],["path",{d:"m16.8 15.3-.4-1",key:"1ei7r6"}],["path",{d:"m14.3 19.6 1-.4",key:"11sv9r"}],["path",{d:"m20.7 16.8 1-.4",key:"19m87a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=n("FolderDot",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["circle",{cx:"12",cy:"13",r:"1",key:"49l61u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=n("FolderDown",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m15 13-3 3-3-3",key:"6j2sf0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=n("FolderGit2",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=n("FolderGit",[["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M14 13h3",key:"1dgedf"}],["path",{d:"M7 13h3",key:"1pygq7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=n("FolderHeart",[["path",{d:"M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5",key:"6hud8k"}],["path",{d:"M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01v0c.95.95 1 2.53-.2 3.74L17.5 21Z",key:"vgq86i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=n("FolderInput",[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",key:"fm4g5t"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m9 16 3-3-3-3",key:"6m91ic"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=n("FolderKanban",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=n("FolderKey",[["circle",{cx:"16",cy:"20",r:"2",key:"1vifvg"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2",key:"3hgo9p"}],["path",{d:"m22 14-4.5 4.5",key:"1ef6z8"}],["path",{d:"m21 15 1 1",key:"1ejcpy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=n("FolderLock",[["rect",{width:"8",height:"5",x:"14",y:"17",rx:"1",key:"19aais"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5",key:"1w6v7t"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2",key:"pwaxnr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=n("FolderMinus",[["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=n("FolderOpenDot",[["path",{d:"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2",key:"1nmvlm"}],["circle",{cx:"14",cy:"15",r:"1",key:"1gm4qj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=n("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=n("FolderOutput",[["path",{d:"M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5",key:"1yk7aj"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m5 10-3 3 3 3",key:"1r8ie0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=n("FolderPen",[["path",{d:"M8.4 10.6a2 2 0 0 1 3 3L6 19l-4 1 1-4Z",key:"dakro8"}],["path",{d:"M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5",key:"a8xqs0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=n("FolderPlus",[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=n("FolderRoot",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}],["path",{d:"M12 15v5",key:"11xva1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=n("FolderSearch2",[["circle",{cx:"11.5",cy:"12.5",r:"2.5",key:"1ea5ju"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M13.3 14.3 15 16",key:"1y4v1n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=n("FolderSearch",[["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["path",{d:"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1",key:"1bw5m7"}],["path",{d:"m21 21-1.5-1.5",key:"3sg1j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=n("FolderSymlink",[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",key:"x1c07l"}],["path",{d:"m8 16 3-3-3-3",key:"rlqrt1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=n("FolderSync",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5",key:"1dkoa9"}],["path",{d:"M12 10v4h4",key:"1czhmt"}],["path",{d:"m12 14 1.535-1.605a5 5 0 0 1 8 1.5",key:"lvuxfi"}],["path",{d:"M22 22v-4h-4",key:"1ewp4q"}],["path",{d:"m22 18-1.535 1.605a5 5 0 0 1-8-1.5",key:"14ync0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=n("FolderTree",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=n("FolderUp",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m9 13 3-3 3 3",key:"1pxg3c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=n("FolderX",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"m9.5 10.5 5 5",key:"ra9qjz"}],["path",{d:"m14.5 10.5-5 5",key:"l2rkpq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=n("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=n("Folders",[["path",{d:"M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z",key:"4u7rpt"}],["path",{d:"M2 8v11a2 2 0 0 0 2 2h14",key:"1eicx1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=n("Footprints",[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=n("Forklift",[["path",{d:"M12 12H5a2 2 0 0 0-2 2v5",key:"7zsz91"}],["circle",{cx:"13",cy:"19",r:"2",key:"wjnkru"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5",key:"13bk1p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=n("FormInput",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M7 12h.01",key:"eqddd0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=n("Forward",[["polyline",{points:"15 17 20 12 15 7",key:"1w3sku"}],["path",{d:"M4 18v-2a4 4 0 0 1 4-4h12",key:"jmiej9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=n("Frame",[["line",{x1:"22",x2:"2",y1:"6",y2:"6",key:"15w7dq"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18",key:"1ip48p"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22",key:"a2lnyx"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22",key:"8vb6jd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=n("Framer",[["path",{d:"M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7",key:"1a2nng"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=n("Frown",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=n("Fuel",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"8ur5zv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=n("Fullscreen",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["rect",{width:"10",height:"8",x:"7",y:"8",rx:"1",key:"vys8me"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=n("FunctionSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3",key:"m1af9g"}],["path",{d:"M9 11.2h5.7",key:"3zgcl2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=n("GalleryHorizontalEnd",[["path",{d:"M2 7v10",key:"a2pl2d"}],["path",{d:"M6 5v14",key:"1kq3d7"}],["rect",{width:"12",height:"18",x:"10",y:"3",rx:"2",key:"13i7bc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=n("GalleryHorizontal",[["path",{d:"M2 3v18",key:"pzttux"}],["rect",{width:"12",height:"18",x:"6",y:"3",rx:"2",key:"btr8bg"}],["path",{d:"M22 3v18",key:"6jf3v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=n("GalleryThumbnails",[["rect",{width:"18",height:"14",x:"3",y:"3",rx:"2",key:"74y24f"}],["path",{d:"M4 21h1",key:"16zlid"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M19 21h1",key:"edywat"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=n("GalleryVerticalEnd",[["path",{d:"M7 2h10",key:"nczekb"}],["path",{d:"M5 6h14",key:"u2x4p"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2",key:"l0tzu3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=n("GalleryVertical",[["path",{d:"M3 2h18",key:"15qxfx"}],["rect",{width:"18",height:"12",x:"3",y:"6",rx:"2",key:"1439r6"}],["path",{d:"M3 22h18",key:"8prr45"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=n("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=n("Gamepad",[["line",{x1:"6",x2:"10",y1:"12",y2:"12",key:"161bw2"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13",key:"dqpgro"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11",key:"meh2c"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=n("GanttChartSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 8h7",key:"kbo1nt"}],["path",{d:"M8 12h6",key:"ikassy"}],["path",{d:"M11 16h5",key:"oq65wt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=n("GanttChart",[["path",{d:"M8 6h10",key:"9lnwnk"}],["path",{d:"M6 12h9",key:"1g9pqf"}],["path",{d:"M11 18h7",key:"c8dzvl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=n("GaugeCircle",[["path",{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7",key:"1e0p6d"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M13.4 10.6 19 5",key:"1kr7tw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=n("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=n("Gavel",[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8",key:"15492f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m9 7 8 8",key:"5jnvq1"}],["path",{d:"m21 11-8-8",key:"z4y7zo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=n("Gem",[["path",{d:"M6 3h12l4 6-10 13L2 9Z",key:"1pcd5k"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6",key:"1fcu3u"}],["path",{d:"M2 9h20",key:"16fsjt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=n("Ghost",[["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",key:"uwwb07"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=n("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=n("GitBranchPlus",[["path",{d:"M6 3v12",key:"qpgusn"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"1d02ji"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"chk6ph"}],["path",{d:"M15 6a9 9 0 0 0-9 9",key:"or332x"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=n("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=n("GitCommitHorizontal",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=n("GitCommitVertical",[["path",{d:"M12 3v6",key:"1holv5"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M12 15v6",key:"a9ows0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=n("GitCompareArrows",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9",key:"16sdep"}],["path",{d:"m9 15 3 3-3 3",key:"1m3kbl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=n("GitCompare",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=n("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=n("GitGraph",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v6",key:"158jrl"}],["circle",{cx:"5",cy:"18",r:"3",key:"104gr9"}],["path",{d:"M12 3v18",key:"108xh3"}],["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9",key:"1e3vqb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=n("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=n("GitPullRequestArrow",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v12",key:"ih889a"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=n("GitPullRequestClosed",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 9v12",key:"1sc30k"}],["path",{d:"m21 3-6 6",key:"16nqsk"}],["path",{d:"m21 9-6-6",key:"9j17rh"}],["path",{d:"M18 11.5V15",key:"65xf6f"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=n("GitPullRequestCreateArrow",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v12",key:"ih889a"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v3",key:"1rbwk6"}],["path",{d:"M19 15v6",key:"10aioa"}],["path",{d:"M22 18h-6",key:"1d5gi5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=n("GitPullRequestCreate",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 9v12",key:"1sc30k"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v3",key:"1jb6z3"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=n("GitPullRequestDraft",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M18 6V5",key:"1oao2s"}],["path",{d:"M18 11v-1",key:"11c8tz"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=n("GitPullRequest",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=n("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=n("Gitlab",[["path",{d:"m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z",key:"148pdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=n("GlassWater",[["path",{d:"M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z",key:"48rfw3"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",key:"mjntcy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=n("Glasses",[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=n("GlobeLock",[["path",{d:"M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13",key:"qkt0x6"}],["path",{d:"M2 12h8.5",key:"ovaggd"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2",key:"1of5e8"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1",key:"1fmf51"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=n("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=n("Goal",[["path",{d:"M12 13V2l8 4-8 4",key:"5wlwwj"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29",key:"1c0wjv"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02",key:"gb1g7m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=n("Grab",[["path",{d:"M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4",key:"n5nng"}],["path",{d:"M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2",key:"185i9d"}],["path",{d:"M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5",key:"11pz95"}],["path",{d:"M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",key:"16yk7l"}],["path",{d:"M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0",key:"nzvb1c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=n("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=n("Grape",[["path",{d:"M22 5V2l-5.89 5.89",key:"1eenpo"}],["circle",{cx:"16.6",cy:"15.89",r:"3",key:"xjtalx"}],["circle",{cx:"8.11",cy:"7.4",r:"3",key:"u2fv6i"}],["circle",{cx:"12.35",cy:"11.65",r:"3",key:"i6i8g7"}],["circle",{cx:"13.91",cy:"5.85",r:"3",key:"6ye0dv"}],["circle",{cx:"18.15",cy:"10.09",r:"3",key:"snx9no"}],["circle",{cx:"6.56",cy:"13.2",r:"3",key:"17x4xg"}],["circle",{cx:"10.8",cy:"17.44",r:"3",key:"1hogw9"}],["circle",{cx:"5",cy:"19",r:"3",key:"1sn6vo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=n("Grid2x2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M12 3v18",key:"108xh3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=n("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=n("GripHorizontal",[["circle",{cx:"12",cy:"9",r:"1",key:"124mty"}],["circle",{cx:"19",cy:"9",r:"1",key:"1ruzo2"}],["circle",{cx:"5",cy:"9",r:"1",key:"1a8b28"}],["circle",{cx:"12",cy:"15",r:"1",key:"1e56xg"}],["circle",{cx:"19",cy:"15",r:"1",key:"1a92ep"}],["circle",{cx:"5",cy:"15",r:"1",key:"5r1jwy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=n("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=n("Grip",[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"19",cy:"5",r:"1",key:"w8mnmm"}],["circle",{cx:"5",cy:"5",r:"1",key:"lttvr7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}],["circle",{cx:"19",cy:"19",r:"1",key:"shf9b7"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=n("Group",[["path",{d:"M3 7V5c0-1.1.9-2 2-2h2",key:"adw53z"}],["path",{d:"M17 3h2c1.1 0 2 .9 2 2v2",key:"an4l38"}],["path",{d:"M21 17v2c0 1.1-.9 2-2 2h-2",key:"144t0e"}],["path",{d:"M7 21H5c-1.1 0-2-.9-2-2v-2",key:"rtnfgi"}],["rect",{width:"7",height:"5",x:"7",y:"7",rx:"1",key:"1eyiv7"}],["rect",{width:"7",height:"5",x:"10",y:"12",rx:"1",key:"1qlmkx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=n("Guitar",[["path",{d:"m20 7 1.7-1.7a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0L17 4v3Z",key:"15ixgv"}],["path",{d:"m17 7-5.1 5.1",key:"l9guh7"}],["circle",{cx:"11.5",cy:"12.5",r:".5",fill:"currentColor",key:"16onso"}],["path",{d:"M6 12a2 2 0 0 0 1.8-1.2l.4-.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4",key:"x9fguj"}],["path",{d:"m6 16 2 2",key:"16qmzd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=n("Hammer",[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9",key:"eefl8a"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"b7pghm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=n("HandCoins",[["path",{d:"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17",key:"geh8rc"}],["path",{d:"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"1fto5m"}],["path",{d:"m2 16 6 6",key:"1pfhp9"}],["circle",{cx:"16",cy:"9",r:"2.9",key:"1n0dlu"}],["circle",{cx:"6",cy:"5",r:"3",key:"151irh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=n("HandHeart",[["path",{d:"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16",key:"1ifwr1"}],["path",{d:"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"17abbs"}],["path",{d:"m2 15 6 6",key:"10dquu"}],["path",{d:"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z",key:"1h3036"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=n("HandHelping",[["path",{d:"M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14",key:"1j4xps"}],["path",{d:"m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"uospg8"}],["path",{d:"m2 13 6 6",key:"16e5sb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=n("HandMetal",[["path",{d:"M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4",key:"7eki13"}],["path",{d:"M14 11V9a2 2 0 1 0-4 0v2",key:"94qvcw"}],["path",{d:"M10 10.5V5a2 2 0 1 0-4 0v9",key:"m1ah89"}],["path",{d:"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5",key:"t1skq1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=n("HandPlatter",[["path",{d:"M12 3V2",key:"ar7q03"}],["path",{d:"M5 10a7.1 7.1 0 0 1 14 0",key:"1t9y3n"}],["path",{d:"M4 10h16",key:"img6z1"}],["path",{d:"M2 14h12a2 2 0 1 1 0 4h-2",key:"loyjft"}],["path",{d:"m15.4 17.4 3.2-2.8a2 2 0 0 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2L5 18",key:"1rixiy"}],["path",{d:"M5 14v7H2",key:"3mujks"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=n("Hand",[["path",{d:"M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",key:"aigmz7"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2",key:"1n6bmn"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8",key:"a9iiix"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=n("Handshake",[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=n("HardDriveDownload",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 18h.01",key:"h775k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=n("HardDriveUpload",[["path",{d:"m16 6-4-4-4 4",key:"13yo43"}],["path",{d:"M12 2v8",key:"1q4o3n"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 18h.01",key:"h775k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=n("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=n("HardHat",[["path",{d:"M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z",key:"1dej2m"}],["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6h0",key:"1uc279"}],["path",{d:"M14 6h0a6 6 0 0 1 6 6v3",key:"1j9mnm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=n("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=n("Haze",[["path",{d:"m5.2 6.2 1.4 1.4",key:"17imol"}],["path",{d:"M2 13h2",key:"13gyu8"}],["path",{d:"M20 13h2",key:"16rner"}],["path",{d:"m17.4 7.6 1.4-1.4",key:"t4xlah"}],["path",{d:"M22 17H2",key:"1gtaj3"}],["path",{d:"M22 21H2",key:"1gy6en"}],["path",{d:"M16 13a4 4 0 0 0-8 0",key:"1dyczq"}],["path",{d:"M12 5V2.5",key:"1vytko"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=n("HdmiPort",[["path",{d:"M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z",key:"2128wb"}],["path",{d:"M7.5 12h9",key:"1t0ckc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ek=n("Heading1",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"m17 12 3-2v8",key:"1hhhft"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tk=n("Heading2",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1",key:"9jr5yi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ak=n("Heading3",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2",key:"68ncm8"}],["path",{d:"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2",key:"1ejuhz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nk=n("Heading4",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 10v4h4",key:"13sv97"}],["path",{d:"M21 10v8",key:"1kdml4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rk=n("Heading5",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 13v-3h4",key:"1nvgqp"}],["path",{d:"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17",key:"2nebdn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok=n("Heading6",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["circle",{cx:"19",cy:"16",r:"2",key:"15mx69"}],["path",{d:"M20 10c-2 2-3 3.5-3 6",key:"f35dl0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ik=n("Heading",[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lk=n("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ck=n("Headset",[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",key:"12oyoe"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5",key:"1x7m43"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dk=n("HeartCrack",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"m12 13-1-1 2-2-3-3 2-2",key:"xjdxli"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sk=n("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hk=n("HeartOff",[["line",{x1:"2",y1:"2",x2:"22",y2:"22",key:"1w4vcy"}],["path",{d:"M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35",key:"3mpagl"}],["path",{d:"M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17",key:"1gh3v3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=n("HeartPulse",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=n("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=n("Heater",[["path",{d:"M11 8c2-3-2-3 0-6",key:"1ldv5m"}],["path",{d:"M15.5 8c2-3-2-3 0-6",key:"1otqoz"}],["path",{d:"M6 10h.01",key:"1lbq93"}],["path",{d:"M6 14h.01",key:"zudwn7"}],["path",{d:"M10 16v-4",key:"1c25yv"}],["path",{d:"M14 16v-4",key:"1dkbt8"}],["path",{d:"M18 16v-4",key:"1yg9me"}],["path",{d:"M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3",key:"1ubg90"}],["path",{d:"M5 20v2",key:"1abpe8"}],["path",{d:"M19 20v2",key:"kqn6ft"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=n("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=n("Hexagon",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=n("Highlighter",[["path",{d:"m9 11-6 6v3h9l3-3",key:"1a3l36"}],["path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4",key:"14a9rk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=n("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk=n("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xk=n("HopOff",[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27",key:"qyzcap"}],["path",{d:"M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28",key:"y078lb"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26",key:"1utre3"}],["path",{d:"M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25",key:"17o9hm"}],["path",{d:"M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75",key:"1d1n4p"}],["path",{d:"M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24",key:"9uv3tt"}],["path",{d:"M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28",key:"1292wz"}],["path",{d:"M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05",key:"7ozu9p"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=n("Hop",[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18",key:"18lxf1"}],["path",{d:"M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88",key:"vtfxrw"}],["path",{d:"M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36",key:"13hl71"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87",key:"1sl8oj"}],["path",{d:"M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08",key:"19c6kt"}],["path",{d:"M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57",key:"85ghs3"}],["path",{d:"M4.93 4.93 3 3a.7.7 0 0 1 0-1",key:"x087yj"}],["path",{d:"M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15",key:"11xdqo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=n("Hotel",[["path",{d:"M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z",key:"p9z69c"}],["path",{d:"m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16",key:"1bvcvh"}],["path",{d:"M8 7h.01",key:"1vti4s"}],["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M12 7h.01",key:"1ivr5q"}],["path",{d:"M12 11h.01",key:"z322tv"}],["path",{d:"M16 11h.01",key:"xkw8gn"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M10 22v-6.5m4 0V22",key:"16gs4s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk=n("Hourglass",[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M5 2h14",key:"pdyrp9"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",key:"1d314k"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2",key:"1vvvr6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wk=n("IceCream2",[["path",{d:"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6Zm-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0",key:"g86ewz"}],["path",{d:"M12.14 11a3.5 3.5 0 1 1 6.71 0",key:"4k3m1s"}],["path",{d:"M15.5 6.5a3.5 3.5 0 1 0-7 0",key:"zmuahr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk=n("IceCream",[["path",{d:"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11",key:"1v6356"}],["path",{d:"M17 7A5 5 0 0 0 7 7",key:"151p3v"}],["path",{d:"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4",key:"1sdaij"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk=n("ImageDown",[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19 3 3v-5.5",key:"9ldu5r"}],["path",{d:"m17 22 3-3",key:"1nkfve"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=n("ImageMinus",[["path",{d:"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"m87ecr"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5",key:"ez7e4s"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=n("ImageOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=n("ImagePlus",[["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"31hg93"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5",key:"ez7e4s"}],["line",{x1:"19",x2:"19",y1:"2",y2:"8",key:"1gkr8c"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk=n("ImageUp",[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19.5 3-3 3 3",key:"9vmjn0"}],["path",{d:"M17 22v-5.5",key:"1aa6fl"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk=n("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=n("Images",[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk=n("Import",[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m8 11 4 4 4-4",key:"1dohi6"}],["path",{d:"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",key:"1ywtjm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=n("Inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk=n("Indent",[["polyline",{points:"3 8 7 12 3 16",key:"f3rxhf"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12",key:"1fxxak"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6",key:"asgu94"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18",key:"13dsj7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=n("IndianRupee",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk=n("Infinity",[["path",{d:"M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z",key:"1z0uae"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk=n("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk=n("InspectionPanel",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7h.01",key:"7u93v4"}],["path",{d:"M17 7h.01",key:"14a9sn"}],["path",{d:"M7 17h.01",key:"19xn7k"}],["path",{d:"M17 17h.01",key:"1sd3ek"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=n("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=n("Italic",[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=n("IterationCcw",[["path",{d:"M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8",key:"4znkd0"}],["polyline",{points:"16 14 20 18 16 22",key:"11njsm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk=n("IterationCw",[["path",{d:"M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4",key:"tuf4su"}],["polyline",{points:"8 22 4 18 8 14",key:"evkj9s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=n("JapaneseYen",[["path",{d:"M12 9.5V21m0-11.5L6 3m6 6.5L18 3",key:"2ej80x"}],["path",{d:"M6 15h12",key:"1hwgt5"}],["path",{d:"M6 11h12",key:"wf4gp6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok=n("Joystick",[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=n("KanbanSquareDashed",[["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}],["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M21 14v1",key:"169vum"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M3 9v1",key:"1r0deq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=n("KanbanSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk=n("Kanban",[["path",{d:"M6 5v11",key:"mdvv1e"}],["path",{d:"M12 5v6",key:"14ar3b"}],["path",{d:"M18 5v14",key:"7ji314"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k=n("KeyRound",[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z",key:"167ctg"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=n("KeySquare",[["path",{d:"M12.4 2.7c.9-.9 2.5-.9 3.4 0l5.5 5.5c.9.9.9 2.5 0 3.4l-3.7 3.7c-.9.9-2.5.9-3.4 0L8.7 9.8c-.9-.9-.9-2.5 0-3.4Z",key:"9li5bk"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M9.4 10.6 2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4",key:"1ym3zm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk=n("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=n("KeyboardMusic",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M6 8h4",key:"utf9t1"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M6 12v4",key:"dy92yo"}],["path",{d:"M10 12v4",key:"1fxnav"}],["path",{d:"M14 12v4",key:"1hft58"}],["path",{d:"M18 12v4",key:"tjjnbz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=n("Keyboard",[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=n("LampCeiling",[["path",{d:"M12 2v5",key:"nd4vlx"}],["path",{d:"M6 7h12l4 9H2l4-9Z",key:"123d64"}],["path",{d:"M9.17 16a3 3 0 1 0 5.66 0",key:"1061mw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk=n("LampDesk",[["path",{d:"m14 5-3 3 2 7 8-8-7-2Z",key:"1b0msb"}],["path",{d:"m14 5-3 3-3-3 3-3 3 3Z",key:"1uemms"}],["path",{d:"M9.5 6.5 4 12l3 6",key:"1bx08v"}],["path",{d:"M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z",key:"wap775"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk=n("LampFloor",[["path",{d:"M9 2h6l3 7H6l3-7Z",key:"wcx6mj"}],["path",{d:"M12 9v13",key:"3n1su1"}],["path",{d:"M9 22h6",key:"1rlq3v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk=n("LampWallDown",[["path",{d:"M11 13h6l3 7H8l3-7Z",key:"9n3qlo"}],["path",{d:"M14 13V8a2 2 0 0 0-2-2H8",key:"1hu4hb"}],["path",{d:"M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z",key:"s053bc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk=n("LampWallUp",[["path",{d:"M11 4h6l3 7H8l3-7Z",key:"11x1ee"}],["path",{d:"M14 11v5a2 2 0 0 1-2 2H8",key:"eutp5o"}],["path",{d:"M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z",key:"1iuthr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e4=n("Lamp",[["path",{d:"M8 2h8l4 10H4L8 2Z",key:"9dma5w"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z",key:"mwf4oh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t4=n("LandPlot",[["path",{d:"m12 8 6-3-6-3v10",key:"mvpnpy"}],["path",{d:"m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12",key:"ek95tt"}],["path",{d:"m6.49 12.85 11.02 6.3",key:"1kt42w"}],["path",{d:"M17.51 12.85 6.5 19.15",key:"v55bdg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a4=n("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n4=n("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r4=n("Laptop2",[["rect",{width:"18",height:"12",x:"3",y:"4",rx:"2",ry:"2",key:"1qhy41"}],["line",{x1:"2",x2:"22",y1:"20",y2:"20",key:"ni3hll"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o4=n("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i4=n("LassoSelect",[["path",{d:"M7 22a5 5 0 0 1-2-4",key:"umushi"}],["path",{d:"M7 16.93c.96.43 1.96.74 2.99.91",key:"ybbtv3"}],["path",{d:"M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2",key:"gt5e1w"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",key:"bq3ynw"}],["path",{d:"M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14v0z",key:"1bawls"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l4=n("Lasso",[["path",{d:"M7 22a5 5 0 0 1-2-4",key:"umushi"}],["path",{d:"M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1",key:"146dds"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",key:"bq3ynw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c4=n("Laugh",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z",key:"b2q4dd"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d4=n("Layers2",[["path",{d:"m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12",key:"1cuww1"}],["path",{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z",key:"pdlvxu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s4=n("Layers3",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",key:"1e5n1m"}],["path",{d:"m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",key:"1iwflc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h4=n("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y4=n("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u4=n("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p4=n("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k4=n("LayoutPanelLeft",[["rect",{width:"7",height:"18",x:"3",y:"3",rx:"1",key:"2obqm"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g4=n("LayoutPanelTop",[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m4=n("LayoutTemplate",[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x4=n("Leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f4=n("LeafyGreen",[["path",{d:"M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22",key:"1134nt"}],["path",{d:"M2 22 17 7",key:"1q7jp2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=n("LibraryBig",[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1",key:"oynpb5"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",key:"1qboyk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M4=n("LibrarySquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7v10",key:"d5nglc"}],["path",{d:"M11 7v10",key:"pptsnr"}],["path",{d:"m15 7 2 10",key:"1m7qm5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w4=n("Library",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L4=n("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b4=n("Ligature",[["path",{d:"M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2",key:"1rtphz"}],["path",{d:"M6 12h4",key:"a4o3ry"}],["path",{d:"M14 12h2v8",key:"c1fccl"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 20h4",key:"lzx1xo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C4=n("LightbulbOff",[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",key:"1fkcox"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",key:"10m8kw"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S4=n("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=n("LineChart",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j4=n("Link2Off",[["path",{d:"M9 17H7A5 5 0 0 1 7 7",key:"10o201"}],["path",{d:"M15 7h2a5 5 0 0 1 4 8",key:"1d3206"}],["line",{x1:"8",x2:"12",y1:"12",y2:"12",key:"rvw6j4"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H4=n("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z4=n("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q4=n("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A4=n("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P4=n("ListCollapse",[["path",{d:"m3 10 2.5-2.5L3 5",key:"i6eama"}],["path",{d:"m3 19 2.5-2.5L3 14",key:"w2gmor"}],["path",{d:"M10 6h11",key:"c7qv1k"}],["path",{d:"M10 12h11",key:"6m4ad9"}],["path",{d:"M10 18h11",key:"11hvi2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=n("ListEnd",[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M10 18H3",key:"13769t"}],["path",{d:"M21 6v10a2 2 0 0 1-2 2h-5",key:"ilrcs8"}],["path",{d:"m16 16-2 2 2 2",key:"kkc6pm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N4=n("ListFilter",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T4=n("ListMinus",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M21 12h-6",key:"bt1uis"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V4=n("ListMusic",[["path",{d:"M21 15V6",key:"h1cx4g"}],["path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",key:"8saifv"}],["path",{d:"M12 12H3",key:"18klou"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M12 18H3",key:"11ftsu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=n("ListOrdered",[["line",{x1:"10",x2:"21",y1:"6",y2:"6",key:"76qw6h"}],["line",{x1:"10",x2:"21",y1:"12",y2:"12",key:"16nom4"}],["line",{x1:"10",x2:"21",y1:"18",y2:"18",key:"u3jurt"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4=n("ListPlus",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M18 9v6",key:"1twb98"}],["path",{d:"M21 12h-6",key:"bt1uis"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E4=n("ListRestart",[["path",{d:"M21 6H3",key:"1jwq7v"}],["path",{d:"M7 12H3",key:"13ou7f"}],["path",{d:"M7 18H3",key:"1sijw9"}],["path",{d:"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14",key:"qth677"}],["path",{d:"M11 10v4h4",key:"172dkj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B4=n("ListStart",[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M10 6H3",key:"lf8lx7"}],["path",{d:"M21 18V8a2 2 0 0 0-2-2h-5",key:"1hghli"}],["path",{d:"m16 8-2-2 2-2",key:"160uvd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=n("ListTodo",[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O4=n("ListTree",[["path",{d:"M21 12h-8",key:"1bmf0i"}],["path",{d:"M21 6H8",key:"1pqkrb"}],["path",{d:"M21 18h-8",key:"1tm79t"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3",key:"1ywdgy"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3",key:"2wc746"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U4=n("ListVideo",[["path",{d:"M12 12H3",key:"18klou"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M12 18H3",key:"11ftsu"}],["path",{d:"m16 12 5 3-5 3v-6Z",key:"zpskkp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $4=n("ListX",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"m19 10-4 4",key:"1tz659"}],["path",{d:"m15 10 4 4",key:"1n7nei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=n("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=n("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=n("Loader",[["line",{x1:"12",x2:"12",y1:"2",y2:"6",key:"gza1u7"}],["line",{x1:"12",x2:"12",y1:"18",y2:"22",key:"1qhbu9"}],["line",{x1:"4.93",x2:"7.76",y1:"4.93",y2:"7.76",key:"xae44r"}],["line",{x1:"16.24",x2:"19.07",y1:"16.24",y2:"19.07",key:"bxnmvf"}],["line",{x1:"2",x2:"6",y1:"12",y2:"12",key:"89khin"}],["line",{x1:"18",x2:"22",y1:"12",y2:"12",key:"pb8tfm"}],["line",{x1:"4.93",x2:"7.76",y1:"19.07",y2:"16.24",key:"1uxjnu"}],["line",{x1:"16.24",x2:"19.07",y1:"7.76",y2:"4.93",key:"6duxfx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z4=n("LocateFixed",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W4=n("LocateOff",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["path",{d:"M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11",key:"1oh7ia"}],["path",{d:"M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29",key:"3qdecy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G4=n("Locate",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K4=n("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=n("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=n("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=n("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X4=n("Lollipop",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}],["path",{d:"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0",key:"107gwy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=n("Luggage",[["path",{d:"M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0",key:"1h5fkc"}],["path",{d:"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14",key:"1l99gc"}],["path",{d:"M10 20h4",key:"ni2waw"}],["circle",{cx:"16",cy:"20",r:"2",key:"1vifvg"}],["circle",{cx:"8",cy:"20",r:"2",key:"ckkr5m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J4=n("MSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 16V8l4 4 4-4v8",key:"141u4e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y4=n("Magnet",[["path",{d:"m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15",key:"1i3lhw"}],["path",{d:"m5 8 4 4",key:"j6kj7e"}],["path",{d:"m12 15 4 4",key:"lnac28"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e5=n("MailCheck",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t5=n("MailMinus",[["path",{d:"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"fuxbkv"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M16 19h6",key:"xwg31i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a5=n("MailOpen",[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",key:"1jhwl8"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10",key:"1qfld7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n5=n("MailPlus",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M16 19h6",key:"xwg31i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r5=n("MailQuestion",[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",key:"e61zoh"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",key:"7z9rxb"}],["path",{d:"M20 22v.01",key:"12bgn6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o5=n("MailSearch",[["path",{d:"M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5",key:"w80f2v"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z",key:"mgbru4"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.5-1.5",key:"1x83k4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i5=n("MailWarning",[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",key:"e61zoh"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M20 14v4",key:"1hm744"}],["path",{d:"M20 22v.01",key:"12bgn6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l5=n("MailX",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9",key:"1j9vog"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m17 17 4 4",key:"1b3523"}],["path",{d:"m21 17-4 4",key:"uinynz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c5=n("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d5=n("Mailbox",[["path",{d:"M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z",key:"1lbycx"}],["polyline",{points:"15,9 18,9 18,11",key:"1pm9c0"}],["path",{d:"M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0",key:"n6nfvi"}],["line",{x1:"6",x2:"7",y1:"10",y2:"10",key:"1e2scm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s5=n("Mails",[["rect",{width:"16",height:"13",x:"6",y:"4",rx:"2",key:"1drq3f"}],["path",{d:"m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7",key:"xn252p"}],["path",{d:"M2 8v11c0 1.1.9 2 2 2h14",key:"n13cji"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h5=n("MapPinOff",[["path",{d:"M5.43 5.43A8.06 8.06 0 0 0 4 10c0 6 8 12 8 12a29.94 29.94 0 0 0 5-5",key:"12a8pk"}],["path",{d:"M19.18 13.52A8.66 8.66 0 0 0 20 10a8 8 0 0 0-8-8 7.88 7.88 0 0 0-3.52.82",key:"1r9f6y"}],["path",{d:"M9.13 9.13A2.78 2.78 0 0 0 9 10a3 3 0 0 0 3 3 2.78 2.78 0 0 0 .87-.13",key:"erynq7"}],["path",{d:"M14.9 9.25a3 3 0 0 0-2.15-2.16",key:"1hwwmx"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y5=n("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u5=n("MapPinned",[["path",{d:"M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0",key:"yrbn30"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835",key:"112zkj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p5=n("Map",[["polygon",{points:"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21",key:"ok2ie8"}],["line",{x1:"9",x2:"9",y1:"3",y2:"18",key:"w34qz5"}],["line",{x1:"15",x2:"15",y1:"6",y2:"21",key:"volv9a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k5=n("Martini",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M12 11v11",key:"ur9y6a"}],["path",{d:"m19 3-7 8-7-8Z",key:"1sgpiw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g5=n("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m5=n("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x5=n("Medal",[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f5=n("MegaphoneOff",[["path",{d:"M9.26 9.26 3 11v3l14.14 3.14",key:"3429n"}],["path",{d:"M21 15.34V6l-7.31 2.03",key:"4o1dh8"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v5=n("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M5=n("Meh",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"8",x2:"16",y1:"15",y2:"15",key:"1xb1d9"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w5=n("MemoryStick",[["path",{d:"M6 19v-3",key:"1nvgqn"}],["path",{d:"M10 19v-3",key:"iu8nkm"}],["path",{d:"M14 19v-3",key:"kcehxu"}],["path",{d:"M18 19v-3",key:"1vh91z"}],["path",{d:"M8 11V9",key:"63erz4"}],["path",{d:"M16 11V9",key:"fru6f3"}],["path",{d:"M12 11V9",key:"ha00sb"}],["path",{d:"M2 15h20",key:"16ne18"}],["path",{d:"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z",key:"lhddv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L5=n("MenuSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 8h10",key:"1jw688"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b5=n("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C5=n("Merge",[["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22",key:"1hyw0i"}],["path",{d:"m20 22-5-5",key:"1m27yz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S5=n("MessageCircleCode",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"m10 10-2 2 2 2",key:"p6et6i"}],["path",{d:"m14 10 2 2-2 2",key:"1kkmpt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I5=n("MessageCircleDashed",[["path",{d:"M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1",key:"16ll65"}],["path",{d:"M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1",key:"1nq77a"}],["path",{d:"M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5",key:"1sf7wn"}],["path",{d:"M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1",key:"x1hs5g"}],["path",{d:"M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1",key:"19m18z"}],["path",{d:"M3.5 17.5 2 22l4.5-1.5",key:"1f36qi"}],["path",{d:"M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5",key:"1vz3ju"}],["path",{d:"M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1",key:"19f9do"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j5=n("MessageCircleHeart",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7",key:"43lnbm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H5=n("MessageCircleMore",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z5=n("MessageCircleOff",[["path",{d:"M20.5 14.9A9 9 0 0 0 9.1 3.5",key:"1iebmn"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7",key:"1ov8ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q5=n("MessageCirclePlus",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A5=n("MessageCircleQuestion",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P5=n("MessageCircleReply",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}],["path",{d:"M7 12h7a2 2 0 0 1 2 2v1",key:"1gheu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D5=n("MessageCircleWarning",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N5=n("MessageCircleX",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T5=n("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V5=n("MessageSquareCode",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m10 8-2 2 2 2",key:"19bv1o"}],["path",{d:"m14 8 2 2-2 2",key:"1whylv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F5=n("MessageSquareDashed",[["path",{d:"M3 6V5c0-1.1.9-2 2-2h2",key:"9usibi"}],["path",{d:"M11 3h3",key:"1c3ji7"}],["path",{d:"M18 3h1c1.1 0 2 .9 2 2",key:"19esxn"}],["path",{d:"M21 9v2",key:"p14lih"}],["path",{d:"M21 15c0 1.1-.9 2-2 2h-1",key:"1fo1j8"}],["path",{d:"M14 17h-3",key:"1w4p2m"}],["path",{d:"m7 17-4 4v-5",key:"ph9x1h"}],["path",{d:"M3 12v-2",key:"856n1q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E5=n("MessageSquareDiff",[["path",{d:"m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2",key:"1xuzuj"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 17h6",key:"r8uit2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B5=n("MessageSquareDot",[["path",{d:"M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7",key:"uodpkb"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R5=n("MessageSquareHeart",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8",key:"1blaws"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O5=n("MessageSquareMore",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M16 10h.01",key:"1m94wz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U5=n("MessageSquareOff",[["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10",key:"pwpm4a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $5=n("MessageSquarePlus",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _5=n("MessageSquareQuote",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 12a2 2 0 0 0 2-2V8H8",key:"1jfesj"}],["path",{d:"M14 12a2 2 0 0 0 2-2V8h-2",key:"1dq9mh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z5=n("MessageSquareReply",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m10 7-3 3 3 3",key:"1eugdv"}],["path",{d:"M17 13v-1a2 2 0 0 0-2-2H7",key:"ernfh3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W5=n("MessageSquareShare",[["path",{d:"M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7",key:"tqtdkg"}],["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"m16 8 5-5",key:"15mbrl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G5=n("MessageSquareText",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M13 8H7",key:"14i4kc"}],["path",{d:"M17 12H7",key:"16if0g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K5=n("MessageSquareWarning",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v2",key:"stiyo7"}],["path",{d:"M12 13h.01",key:"y0uutt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X5=n("MessageSquareX",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q5=n("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J5=n("MessagesSquare",[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z",key:"16vlm8"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",key:"1cx29u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y5=n("Mic2",[["path",{d:"m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12",key:"zoua8r"}],["circle",{cx:"17",cy:"7",r:"5",key:"1fomce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e3=n("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t3=n("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a3=n("Microscope",[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n3=n("Microwave",[["rect",{width:"20",height:"15",x:"2",y:"4",rx:"2",key:"2no95f"}],["rect",{width:"8",height:"7",x:"6",y:"8",rx:"1",key:"zh9wx"}],["path",{d:"M18 8v7",key:"o5zi4n"}],["path",{d:"M6 19v2",key:"1loha6"}],["path",{d:"M18 19v2",key:"1dawf0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r3=n("Milestone",[["path",{d:"M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z",key:"1mp5s7"}],["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M12 3v3",key:"1n5kay"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o3=n("MilkOff",[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3",key:"y0ejgx"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435",key:"iaxqsy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i3=n("Milk",[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2",key:"qtp12x"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"ygeh44"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l3=n("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c3=n("Minimize",[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d3=n("MinusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s3=n("MinusSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h3=n("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y3=n("MonitorCheck",[["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u3=n("MonitorDot",[["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9",key:"1fet9y"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p3=n("MonitorDown",[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m15 10-3 3-3-3",key:"lzhmyn"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k3=n("MonitorOff",[["path",{d:"M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2",key:"k0q8oc"}],["path",{d:"M22 15V5a2 2 0 0 0-2-2H9",key:"cp1ac0"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g3=n("MonitorPause",[["path",{d:"M10 13V7",key:"1u13u9"}],["path",{d:"M14 13V7",key:"1vj9om"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m3=n("MonitorPlay",[["path",{d:"m10 7 5 3-5 3Z",key:"29ljg6"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x3=n("MonitorSmartphone",[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",key:"10dyio"}],["path",{d:"M10 19v-3.96 3.15",key:"1irgej"}],["path",{d:"M7 19h5",key:"qswx4l"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2",key:"1egngj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f3=n("MonitorSpeaker",[["path",{d:"M5.5 20H8",key:"1k40s5"}],["path",{d:"M17 9h.01",key:"1j24nn"}],["rect",{width:"10",height:"16",x:"12",y:"4",rx:"2",key:"ixliua"}],["path",{d:"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4",key:"1mp6e1"}],["circle",{cx:"17",cy:"15",r:"1",key:"tqvash"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v3=n("MonitorStop",[["rect",{x:"9",y:"7",width:"6",height:"6",key:"4xvc6r"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M3=n("MonitorUp",[["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}],["path",{d:"M12 13V7",key:"h0r20n"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w3=n("MonitorX",[["path",{d:"m14.5 12.5-5-5",key:"1jahn5"}],["path",{d:"m9.5 12.5 5-5",key:"1k2t7b"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=n("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b3=n("MoonStar",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}],["path",{d:"M19 3v4",key:"vgv24u"}],["path",{d:"M21 5h-4",key:"1wcg1f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=n("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C3=n("MoreHorizontal",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S3=n("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=n("MountainSnow",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}],["path",{d:"M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19",key:"1pvmmp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j3=n("Mountain",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3=n("MousePointer2",[["path",{d:"m4 4 7.07 17 2.51-7.39L21 11.07z",key:"1vqm48"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3=n("MousePointerClick",[["path",{d:"m9 9 5 12 1.8-5.2L21 14Z",key:"1b76lo"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=n("MousePointerSquareDashed",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"m12 12 4 10 1.7-4.3L22 16Z",key:"64ilsv"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h2",key:"1qve2z"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v2",key:"p14lih"}],["path",{d:"M3 14v1",key:"vnatye"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=n("MousePointerSquare",[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"14rsvq"}],["path",{d:"m12 12 4 10 1.7-4.3L22 16Z",key:"64ilsv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A3=n("MousePointer",[["path",{d:"m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z",key:"y2ucgo"}],["path",{d:"m13 13 6 6",key:"1nhxnf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=n("Mouse",[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7",key:"11ol66"}],["path",{d:"M12 6v4",key:"16clxf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=n("Move3d",[["path",{d:"M5 3v16h16",key:"1mqmf9"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}],["path",{d:"m2 6 3-3 3 3",key:"tkyvxa"}],["path",{d:"m18 16 3 3-3 3",key:"1d4glt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=n("MoveDiagonal2",[["polyline",{points:"5 11 5 5 11 5",key:"ncfzxk"}],["polyline",{points:"19 13 19 19 13 19",key:"1mk7hk"}],["line",{x1:"5",x2:"19",y1:"5",y2:"19",key:"mcyte3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=n("MoveDiagonal",[["polyline",{points:"13 5 19 5 19 11",key:"11219e"}],["polyline",{points:"11 19 5 19 5 13",key:"sfq3wq"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T3=n("MoveDownLeft",[["path",{d:"M11 19H5V13",key:"1akmht"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V3=n("MoveDownRight",[["path",{d:"M19 13V19H13",key:"10vkzq"}],["path",{d:"M5 5L19 19",key:"5zm2fv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=n("MoveDown",[["path",{d:"M8 18L12 22L16 18",key:"cskvfv"}],["path",{d:"M12 2V22",key:"r89rzk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3=n("MoveHorizontal",[["polyline",{points:"18 8 22 12 18 16",key:"1hqrds"}],["polyline",{points:"6 8 2 12 6 16",key:"f0ernq"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3=n("MoveLeft",[["path",{d:"M6 8L2 12L6 16",key:"kyvwex"}],["path",{d:"M2 12H22",key:"1m8cig"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3=n("MoveRight",[["path",{d:"M18 8L22 12L18 16",key:"1r0oui"}],["path",{d:"M2 12H22",key:"1m8cig"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=n("MoveUpLeft",[["path",{d:"M5 11V5H11",key:"3q78g9"}],["path",{d:"M5 5L19 19",key:"5zm2fv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U3=n("MoveUpRight",[["path",{d:"M13 5H19V11",key:"1n1gyv"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=n("MoveUp",[["path",{d:"M8 6L12 2L16 6",key:"1yvkyx"}],["path",{d:"M12 2V22",key:"r89rzk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _3=n("MoveVertical",[["polyline",{points:"8 18 12 22 16 18",key:"1uutw3"}],["polyline",{points:"8 6 12 2 16 6",key:"d60sxy"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=n("Move",[["polyline",{points:"5 9 2 12 5 15",key:"1r5uj5"}],["polyline",{points:"9 5 12 2 15 5",key:"5v383o"}],["polyline",{points:"15 19 12 22 9 19",key:"g7qi8m"}],["polyline",{points:"19 9 22 12 19 15",key:"tpp73q"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=n("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=n("Music3",[["circle",{cx:"12",cy:"18",r:"4",key:"m3r9ws"}],["path",{d:"M16 18V2",key:"40x2m5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3=n("Music4",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["path",{d:"m9 9 12-2",key:"1e64n2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=n("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X3=n("Navigation2Off",[["path",{d:"M9.31 9.31 5 21l7-4 7 4-1.17-3.17",key:"qoq2o2"}],["path",{d:"M14.53 8.88 12 2l-1.17 3.17",key:"k3sjzy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3=n("Navigation2",[["polygon",{points:"12 2 19 21 12 17 5 21 12 2",key:"x8c0qg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J3=n("NavigationOff",[["path",{d:"M8.43 8.43 3 11l8 2 2 8 2.57-5.43",key:"1vdtb7"}],["path",{d:"M17.39 11.73 22 2l-9.73 4.61",key:"tya3r6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y3=n("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e6=n("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=n("Newspaper",[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=n("Nfc",[["path",{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36",key:"9iaqei"}],["path",{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58",key:"1yha7l"}],["path",{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8",key:"4iu2gk"}],["path",{d:"M16.37 2a20.16 20.16 0 0 1 0 20",key:"sap9u2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n6=n("NotebookPen",[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",key:"re6nr2"}],["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["path",{d:"M18.4 2.6a2.17 2.17 0 0 1 3 3L16 11l-4 1 1-4Z",key:"1dba1m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=n("NotebookTabs",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M15 2v20",key:"dcj49h"}],["path",{d:"M15 7h5",key:"1xj5lc"}],["path",{d:"M15 12h5",key:"w5shd9"}],["path",{d:"M15 17h5",key:"1qaofu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6=n("NotebookText",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M9.5 8h5",key:"11mslq"}],["path",{d:"M9.5 12H16",key:"ktog6x"}],["path",{d:"M9.5 16H14",key:"p1seyn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=n("Notebook",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M16 2v20",key:"rotuqe"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6=n("NotepadTextDashed",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v2",key:"j91f56"}],["path",{d:"M20 12v2",key:"w8o0tu"}],["path",{d:"M20 18v2a2 2 0 0 1-2 2h-1",key:"1c9ggx"}],["path",{d:"M13 22h-2",key:"191ugt"}],["path",{d:"M7 22H6a2 2 0 0 1-2-2v-2",key:"1rt9px"}],["path",{d:"M4 14v-2",key:"1v0sqh"}],["path",{d:"M4 8V6a2 2 0 0 1 2-2h2",key:"1mwabg"}],["path",{d:"M8 10h6",key:"3oa6kw"}],["path",{d:"M8 14h8",key:"1fgep2"}],["path",{d:"M8 18h5",key:"17enja"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=n("NotepadText",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"16",height:"18",x:"4",y:"4",rx:"2",key:"1u9h20"}],["path",{d:"M8 10h6",key:"3oa6kw"}],["path",{d:"M8 14h8",key:"1fgep2"}],["path",{d:"M8 18h5",key:"17enja"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=n("NutOff",[["path",{d:"M12 4V2",key:"1k5q1u"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939",key:"1xcvy9"}],["path",{d:"M19 10v3.343",key:"163tfc"}],["path",{d:"M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192",key:"17914v"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s6=n("Nut",[["path",{d:"M12 4V2",key:"1k5q1u"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4",key:"1tgyif"}],["path",{d:"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z",key:"tnsqj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=n("Octagon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y6=n("Option",[["path",{d:"M3 3h6l6 18h6",key:"ph9rgk"}],["path",{d:"M14 3h7",key:"16f0ms"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=n("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=n("Outdent",[["polyline",{points:"7 8 3 12 7 16",key:"2j60jr"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12",key:"1fxxak"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6",key:"asgu94"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18",key:"13dsj7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k6=n("Package2",[["path",{d:"M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z",key:"1ront0"}],["path",{d:"m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9",key:"19h2x1"}],["path",{d:"M12 3v6",key:"1holv5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g6=n("PackageCheck",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m6=n("PackageMinus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x6=n("PackageOpen",[["path",{d:"M12 22v-9",key:"x3hkom"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",key:"2ntwy6"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",key:"1pmm1c"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",key:"12ttoo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=n("PackagePlus",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M19 13v6",key:"85cyf1"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=n("PackageSearch",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5",key:"b5zd12"}],["path",{d:"M20.27 17.27 22 19",key:"1l4muz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M6=n("PackageX",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["path",{d:"m17 13 5 5m-5 0 5-5",key:"im3w4b"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=n("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L6=n("PaintBucket",[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z",key:"irua1i"}],["path",{d:"m5 2 5 5",key:"1lls2c"}],["path",{d:"M2 13h15",key:"1hkzvu"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z",key:"xk76lq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b6=n("PaintRoller",[["rect",{width:"16",height:"6",x:"2",y:"2",rx:"2",key:"jcyz7m"}],["path",{d:"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",key:"1b9h7c"}],["rect",{width:"4",height:"6",x:"8",y:"16",rx:"1",key:"d6e7yl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C6=n("Paintbrush2",[["path",{d:"M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z",key:"1c8kta"}],["path",{d:"M6 12V2h12v10",key:"1esbnf"}],["path",{d:"M14 2v4",key:"qmzblu"}],["path",{d:"M10 2v2",key:"7u0qdc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S6=n("Paintbrush",[["path",{d:"M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z",key:"m6k5sh"}],["path",{d:"M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7",key:"arzq70"}],["path",{d:"M14.5 17.5 4.5 15",key:"s7fvrz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=n("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I6=n("Palmtree",[["path",{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4",key:"foxbe7"}],["path",{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3",key:"18arnh"}],["path",{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z",key:"epoumf"}],["path",{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14",key:"ft0feo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j6=n("PanelBottomClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"m15 8-3 3-3-3",key:"1oxy1z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=n("PanelBottomDashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M14 15h1",key:"171nev"}],["path",{d:"M19 15h2",key:"1vnucp"}],["path",{d:"M3 15h2",key:"8bym0q"}],["path",{d:"M9 15h1",key:"1tg3ks"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H6=n("PanelBottomOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z6=n("PanelBottom",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=n("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=n("PanelLeftDashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 14v1",key:"askpd8"}],["path",{d:"M9 19v2",key:"16tejx"}],["path",{d:"M9 3v2",key:"1noubl"}],["path",{d:"M9 9v1",key:"19ebxg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=n("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=n("PanelLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q6=n("PanelRightClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m8 9 3 3-3 3",key:"12hl5m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=n("PanelRightDashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 14v1",key:"ilsfch"}],["path",{d:"M15 19v2",key:"1fst2f"}],["path",{d:"M15 3v2",key:"z204g4"}],["path",{d:"M15 9v1",key:"z2a8b1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A6=n("PanelRightOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P6=n("PanelRight",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D6=n("PanelTopClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m9 16 3-3 3 3",key:"1idcnm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=n("PanelTopDashed",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M14 9h1",key:"l0svgy"}],["path",{d:"M19 9h2",key:"te2zfg"}],["path",{d:"M3 9h2",key:"1h4ldw"}],["path",{d:"M9 9h1",key:"15jzuz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N6=n("PanelTopOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m15 14-3 3-3-3",key:"g215vf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T6=n("PanelTop",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V6=n("PanelsLeftBottom",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M9 15h12",key:"5ijen5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F6=n("PanelsRightBottom",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h12",key:"1wkqb3"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=n("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E6=n("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B6=n("Parentheses",[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R6=n("ParkingCircleOff",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m5 5 14 14",key:"11anup"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2",key:"uoagbd"}],["path",{d:"M9 17v-2.34",key:"a9qo08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O6=n("ParkingCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9",key:"1dfk2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U6=n("ParkingMeter",[["path",{d:"M9 9a3 3 0 1 1 6 0",key:"jdoeu8"}],["path",{d:"M12 12v3",key:"158kv8"}],["path",{d:"M11 15h2",key:"199qp6"}],["path",{d:"M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3",key:"1l50wn"}],["path",{d:"M12 19v3",key:"npa21l"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $6=n("ParkingSquareOff",[["path",{d:"M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41",key:"9l1ft6"}],["path",{d:"M3 8.7V19a2 2 0 0 0 2 2h10.3",key:"17knke"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2",key:"uoagbd"}],["path",{d:"M9 17v-2.3",key:"1jxgo2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _6=n("ParkingSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9",key:"1dfk2c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z6=n("PartyPopper",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"bpx1uq"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17",key:"1pd0s7"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7",key:"zq5xbz"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W6=n("PauseCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G6=n("PauseOctagon",[["path",{d:"M10 15V9",key:"1lckn7"}],["path",{d:"M14 15V9",key:"1muqhk"}],["path",{d:"M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714L7.714 2z",key:"1m7qra"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K6=n("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X6=n("PawPrint",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q6=n("PcCase",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",key:"1uq1d7"}],["path",{d:"M15 14h.01",key:"1kp3bh"}],["path",{d:"M9 6h6",key:"dgm16u"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=n("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=n("PenTool",[["path",{d:"m12 19 7-7 3 3-7 7-3-3z",key:"rklqx2"}],["path",{d:"m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z",key:"1et58u"}],["path",{d:"m2 2 7.586 7.586",key:"etlp93"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=n("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J6=n("PencilLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}],["path",{d:"m15 5 3 3",key:"1w25hb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y6=n("PencilRuler",[["path",{d:"m15 5 4 4",key:"1mk7zo"}],["path",{d:"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13",key:"orapub"}],["path",{d:"m8 6 2-2",key:"115y1s"}],["path",{d:"m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z",key:"hes763"}],["path",{d:"m18 16 2-2",key:"ee94s4"}],["path",{d:"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17",key:"cfq27r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=n("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=n("Pentagon",[["path",{d:"M3.5 8.7c-.7.5-1 1.4-.7 2.2l2.8 8.7c.3.8 1 1.4 1.9 1.4h9.1c.9 0 1.6-.6 1.9-1.4l2.8-8.7c.3-.8 0-1.7-.7-2.2l-7.4-5.3a2.1 2.1 0 0 0-2.4 0Z",key:"hsj90r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=n("PercentCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=n("PercentDiamond",[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z",key:"1tpxz2"}],["path",{d:"M9.2 9.2h.01",key:"1b7bvt"}],["path",{d:"m14.5 9.5-5 5",key:"17q4r4"}],["path",{d:"M14.7 14.8h.01",key:"17nsh4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=n("PercentSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=n("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=n("PersonStanding",[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=n("PhoneCall",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=n("PhoneForwarded",[["polyline",{points:"18 2 22 6 18 10",key:"6vjanh"}],["line",{x1:"14",x2:"22",y1:"6",y2:"6",key:"1jsywh"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=n("PhoneIncoming",[["polyline",{points:"16 2 16 8 22 8",key:"1ygljm"}],["line",{x1:"22",x2:"16",y1:"2",y2:"8",key:"1xzwqn"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=n("PhoneMissed",[["line",{x1:"22",x2:"16",y1:"2",y2:"8",key:"1xzwqn"}],["line",{x1:"16",x2:"22",y1:"2",y2:"8",key:"13zxdn"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=n("PhoneOff",[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",key:"z86iuo"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22",key:"11kh81"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=n("PhoneOutgoing",[["polyline",{points:"22 8 22 2 16 2",key:"1g204g"}],["line",{x1:"16",x2:"22",y1:"8",y2:"2",key:"1ggias"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=n("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=n("PiSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7h10",key:"udp07y"}],["path",{d:"M10 7v10",key:"i1d9ee"}],["path",{d:"M16 17a2 2 0 0 1-2-2V7",key:"ftwdc7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=n("Pi",[["line",{x1:"9",x2:"9",y1:"4",y2:"20",key:"ovs5a5"}],["path",{d:"M4 7c0-1.7 1.3-3 3-3h13",key:"10pag4"}],["path",{d:"M18 20c-1.7 0-3-1.3-3-3V4",key:"1gaosr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=n("Piano",[["path",{d:"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8",key:"lag0yf"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M6 14v4",key:"9ng0ue"}],["path",{d:"M10 14v4",key:"1v8uk5"}],["path",{d:"M14 14v4",key:"1tqops"}],["path",{d:"M18 14v4",key:"18uqwm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=n("Pickaxe",[["path",{d:"M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912",key:"we99rg"}],["path",{d:"M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393",key:"1w6hck"}],["path",{d:"M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z",key:"15hgfx"}],["path",{d:"M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319",key:"452b4h"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=n("PictureInPicture2",[["path",{d:"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4",key:"daa4of"}],["rect",{width:"10",height:"7",x:"12",y:"13",rx:"2",key:"1nb8gs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=n("PictureInPicture",[["path",{d:"M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3",key:"bcd8fb"}],["rect",{width:"10",height:"7",x:"12",y:"13.5",ry:"2",key:"136fx3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=n("PieChart",[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z",key:"1rfc4y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=n("PiggyBank",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z",key:"uf6l00"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h0",key:"k2aug8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=n("PilcrowSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 12H9.5a2.5 2.5 0 0 1 0-5H17",key:"1l9586"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M16 7v10",key:"lavkr4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=n("Pilcrow",[["path",{d:"M13 4v16",key:"8vvj80"}],["path",{d:"M17 4v16",key:"7dpous"}],["path",{d:"M19 4H9.5a4.5 4.5 0 0 0 0 9H13",key:"sh4n9v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=n("Pill",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=n("PinOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["line",{x1:"12",x2:"12",y1:"17",y2:"22",key:"1jrz49"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12",key:"13x2n8"}],["path",{d:"M15 9.34V6h1a2 2 0 0 0 0-4H7.89",key:"reo3ki"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=n("Pin",[["line",{x1:"12",x2:"12",y1:"17",y2:"22",key:"1jrz49"}],["path",{d:"M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z",key:"13yl11"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=n("Pipette",[["path",{d:"m2 22 1-1h3l9-9",key:"1sre89"}],["path",{d:"M3 21v-3l9-9",key:"hpe2y6"}],["path",{d:"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z",key:"196du1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=n("Pizza",[["path",{d:"M15 11h.01",key:"rns66s"}],["path",{d:"M11 15h.01",key:"k85uqc"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"m2 16 20 6-6-20A20 20 0 0 0 2 16",key:"e4slt2"}],["path",{d:"M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4",key:"rerf8f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=n("PlaneLanding",[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z",key:"1ma21e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=n("PlaneTakeoff",[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z",key:"fkigj9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=n("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=n("PlayCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=n("PlaySquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 8 6 4-6 4Z",key:"f1r3lt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=n("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=n("Plug2",[["path",{d:"M9 2v6",key:"17ngun"}],["path",{d:"M15 2v6",key:"s7yy2p"}],["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M6 11V8h12v3a6 6 0 1 1-12 0v0Z",key:"nd4hoy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=n("PlugZap2",[["path",{d:"m13 2-2 2.5h3L12 7",key:"1me98u"}],["path",{d:"M10 14v-3",key:"1mllf3"}],["path",{d:"M14 14v-3",key:"1l3fkq"}],["path",{d:"M11 19c-1.7 0-3-1.3-3-3v-2h8v2c0 1.7-1.3 3-3 3Z",key:"jd5pat"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=n("PlugZap",[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=n("Plug",[["path",{d:"M12 22v-5",key:"1ega77"}],["path",{d:"M9 8V2",key:"14iosj"}],["path",{d:"M15 8V2",key:"18g5xt"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z",key:"osxo6l"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=n("PlusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=n("PlusSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=n("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=n("PocketKnife",[["path",{d:"M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2",key:"19w3oe"}],["path",{d:"M18 6h.01",key:"1v4wsw"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z",key:"6fykxj"}],["path",{d:"M18 11.66V22a4 4 0 0 0 4-4V6",key:"1utzek"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=n("Pocket",[["path",{d:"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z",key:"1mz881"}],["polyline",{points:"8 10 12 14 16 10",key:"w4mbv5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=n("Podcast",[["circle",{cx:"12",cy:"11",r:"1",key:"1gvufo"}],["path",{d:"M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z",key:"1n5fvv"}],["path",{d:"M8 14a5 5 0 1 1 8 0",key:"fc81rn"}],["path",{d:"M17 18.5a9 9 0 1 0-10 0",key:"jqtxkf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=n("PointerOff",[["path",{d:"M10 4.5V4a2 2 0 0 0-2.41-1.957",key:"jsi14n"}],["path",{d:"M13.9 8.4a2 2 0 0 0-1.26-1.295",key:"hirc7f"}],["path",{d:"M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158",key:"1jxb2e"}],["path",{d:"m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343",key:"10r7hm"}],["path",{d:"M6 6v8",key:"tv5xkp"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=n("Pointer",[["path",{d:"M22 14a8 8 0 0 1-8 8",key:"56vcr3"}],["path",{d:"M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",key:"1pp0yd"}],["path",{d:"M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1",key:"u654g"}],["path",{d:"M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10",key:"1e2dtv"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"g6ys72"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=n("Popcorn",[["path",{d:"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4",key:"10td1f"}],["path",{d:"M10 22 9 8",key:"yjptiv"}],["path",{d:"m14 22 1-14",key:"8jwc8b"}],["path",{d:"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z",key:"1qo33t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=n("Popsicle",[["path",{d:"M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z",key:"1o68ps"}],["path",{d:"m22 22-5.5-5.5",key:"17o70y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=n("PoundSterling",[["path",{d:"M18 7c0-5.333-8-5.333-8 0",key:"1prm2n"}],["path",{d:"M10 7v14",key:"18tmcs"}],["path",{d:"M6 21h12",key:"4dkmi1"}],["path",{d:"M6 13h10",key:"ybwr4a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=n("PowerCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 12V6",key:"30zewn"}],["path",{d:"M8 7.5A6.1 6.1 0 0 0 12 18a6 6 0 0 0 4-10.5",key:"1r0tk2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=n("PowerOff",[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15",key:"dxknvb"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68",key:"1x7qb5"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=n("PowerSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M8 9a5.14 5.14 0 0 0 4 8 4.95 4.95 0 0 0 4-8",key:"15eubv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=n("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=n("Presentation",[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e8=n("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t8=n("Projector",[["path",{d:"M5 7 3 5",key:"1yys58"}],["path",{d:"M9 6V3",key:"1ptz9u"}],["path",{d:"m13 7 2-2",key:"1w3vmq"}],["circle",{cx:"9",cy:"13",r:"3",key:"1mma13"}],["path",{d:"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17",key:"2frwzc"}],["path",{d:"M16 16h2",key:"dnq2od"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a8=n("Puzzle",[["path",{d:"M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z",key:"i0oyt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n8=n("Pyramid",[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",key:"aenxs0"}],["path",{d:"M12 2v20",key:"t6zp3m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r8=n("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o8=n("Quote",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i8=n("Rabbit",[["path",{d:"M13 16a3 3 0 0 1 2.24 5",key:"1epib5"}],["path",{d:"M18 12h.01",key:"yjnet6"}],["path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3",key:"ue9ozu"}],["path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3",key:"49iql8"}],["path",{d:"M7.612 12.524a3 3 0 1 0-1.6 4.3",key:"1e33i0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l8=n("Radar",[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34",key:"z3du51"}],["path",{d:"M4 6h.01",key:"oypzma"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35",key:"qzzz0"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67",key:"1yjesh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67",key:"1u2y91"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"m13.41 10.59 5.66-5.66",key:"mhq4k0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c8=n("Radiation",[["path",{d:"M12 12h0.01",key:"6ztbls"}],["path",{d:"M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z",key:"wy49g3"}],["path",{d:"M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z",key:"vklnvr"}],["path",{d:"M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z",key:"wkdf1o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d8=n("Radical",[["path",{d:"M3 12h4l3 9 4-17h7",key:"bpxjrx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s8=n("RadioReceiver",[["path",{d:"M5 16v2",key:"g5qcv5"}],["path",{d:"M19 16v2",key:"1gbaio"}],["rect",{width:"20",height:"8",x:"2",y:"8",rx:"2",key:"vjsjur"}],["path",{d:"M18 12h0",key:"1ucjzd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h8=n("RadioTower",[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9",key:"s0qx1y"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5",key:"1idnkw"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47",key:"ojru2q"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1",key:"rhi7fg"}],["path",{d:"M9.5 18h5",key:"mfy3pd"}],["path",{d:"m8 22 4-11 4 11",key:"25yftu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y8=n("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u8=n("Radius",[["path",{d:"M20.34 17.52a10 10 0 1 0-2.82 2.82",key:"fydyku"}],["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["path",{d:"m13.41 13.41 4.18 4.18",key:"1gqbwc"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p8=n("RailSymbol",[["path",{d:"M5 15h14",key:"m0yey3"}],["path",{d:"M5 9h14",key:"7tsvo6"}],["path",{d:"m14 20-5-5 6-6-5-5",key:"1jo42i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k8=n("Rainbow",[["path",{d:"M22 17a10 10 0 0 0-20 0",key:"ozegv"}],["path",{d:"M6 17a6 6 0 0 1 12 0",key:"5giftw"}],["path",{d:"M10 17a2 2 0 0 1 4 0",key:"gnsikk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g8=n("Rat",[["path",{d:"M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7v0c0 2.2 1.8 4 4 4",key:"16aj0u"}],["path",{d:"M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3",key:"1crdmb"}],["path",{d:"M13.2 18a3 3 0 0 0-2.2-5",key:"1ol3lk"}],["path",{d:"M13 22H4a2 2 0 0 1 0-4h12",key:"bt3f23"}],["path",{d:"M16 9h.01",key:"1bdo4e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m8=n("Ratio",[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x8=n("ReceiptCent",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M12 6.5v11",key:"ecfhkf"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2",key:"1makmb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f8=n("ReceiptEuro",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 12h5",key:"1g6qi8"}],["path",{d:"M16 9.5a4 4 0 1 0 0 5.2",key:"b2px4r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v8=n("ReceiptIndianRupee",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 7h8",key:"i86dvs"}],["path",{d:"M12 17.5 8 15h1a4 4 0 0 0 0-8",key:"grpkl4"}],["path",{d:"M8 11h8",key:"vwpz6n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M8=n("ReceiptJapaneseYen",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"m12 10 3-3",key:"1mc12w"}],["path",{d:"m9 7 3 3v7.5",key:"39i0xv"}],["path",{d:"M9 11h6",key:"1fldmi"}],["path",{d:"M9 15h6",key:"cctwl0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w8=n("ReceiptPoundSterling",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 13h5",key:"1k9z8w"}],["path",{d:"M10 17V9.5a2.5 2.5 0 0 1 5 0",key:"1dzgp0"}],["path",{d:"M8 17h7",key:"8mjdqu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L8=n("ReceiptRussianRuble",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 15h5",key:"vxg57a"}],["path",{d:"M8 11h5a2 2 0 1 0 0-4h-3v10",key:"1usi5u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b8=n("ReceiptSwissFranc",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M10 17V7h5",key:"k7jq18"}],["path",{d:"M10 11h4",key:"1i0mka"}],["path",{d:"M8 15h5",key:"vxg57a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C8=n("ReceiptText",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S8=n("Receipt",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I8=n("RectangleHorizontal",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j8=n("RectangleVertical",[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H8=n("Recycle",[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",key:"x6z5xu"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",key:"1x4zh5"}],["path",{d:"m14 16-3 3 3 3",key:"f6jyew"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598",key:"wf1obh"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",key:"9tzpgr"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096",key:"1oe83g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z8=n("Redo2",[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13",key:"19mnr4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q8=n("RedoDot",[["circle",{cx:"12",cy:"17",r:"1",key:"1ixnty"}],["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A8=n("Redo",[["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P8=n("RefreshCcwDot",[["path",{d:"M3 2v6h6",key:"18ldww"}],["path",{d:"M21 12A9 9 0 0 0 6 5.3L3 8",key:"1pbrqz"}],["path",{d:"M21 22v-6h-6",key:"usdfbe"}],["path",{d:"M3 12a9 9 0 0 0 15 6.7l3-2.7",key:"1hosoe"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D8=n("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N8=n("RefreshCwOff",[["path",{d:"M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47",key:"1krf6h"}],["path",{d:"M8 16H3v5",key:"1cv678"}],["path",{d:"M3 12C3 9.51 4 7.26 5.64 5.64",key:"ruvoct"}],["path",{d:"m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64",key:"19q130"}],["path",{d:"M21 12c0 1-.16 1.97-.47 2.87",key:"4w8emr"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M22 22 2 2",key:"1r8tn9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T8=n("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V8=n("Refrigerator",[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z",key:"fpq118"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M15 7v6",key:"1nx30x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F8=n("Regex",[["path",{d:"M17 3v10",key:"15fgeh"}],["path",{d:"m12.67 5.5 8.66 5",key:"1gpheq"}],["path",{d:"m12.67 10.5 8.66-5",key:"1dkfa6"}],["path",{d:"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z",key:"swwfx4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E8=n("RemoveFormatting",[["path",{d:"M4 7V4h16v3",key:"9msm58"}],["path",{d:"M5 20h6",key:"1h6pxn"}],["path",{d:"M13 4 8 20",key:"kqq6aj"}],["path",{d:"m15 15 5 5",key:"me55sn"}],["path",{d:"m20 15-5 5",key:"11p7ol"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B8=n("Repeat1",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}],["path",{d:"M11 10h1v4",key:"70cz1p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R8=n("Repeat2",[["path",{d:"m2 9 3-3 3 3",key:"1ltn5i"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6",key:"1r6tfw"}],["path",{d:"m22 15-3 3-3-3",key:"4rnwn2"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10",key:"2f72bc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O8=n("Repeat",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U8=n("ReplaceAll",[["path",{d:"M14 4c0-1.1.9-2 2-2",key:"1mvvbw"}],["path",{d:"M20 2c1.1 0 2 .9 2 2",key:"1mj6oe"}],["path",{d:"M22 8c0 1.1-.9 2-2 2",key:"v1wql3"}],["path",{d:"M16 10c-1.1 0-2-.9-2-2",key:"821ux0"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5c0-1.7 1.3-3 3-3h1",key:"13af7h"}],["rect",{width:"8",height:"8",x:"2",y:"14",rx:"2",key:"17ihk4"}],["path",{d:"M14 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"1w9p8c"}],["path",{d:"M20 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"m45eaa"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $8=n("Replace",[["path",{d:"M14 4c0-1.1.9-2 2-2",key:"1mvvbw"}],["path",{d:"M20 2c1.1 0 2 .9 2 2",key:"1mj6oe"}],["path",{d:"M22 8c0 1.1-.9 2-2 2",key:"v1wql3"}],["path",{d:"M16 10c-1.1 0-2-.9-2-2",key:"821ux0"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5c0-1.7 1.3-3 3-3h1",key:"13af7h"}],["rect",{width:"8",height:"8",x:"2",y:"14",rx:"2",key:"17ihk4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _8=n("ReplyAll",[["polyline",{points:"7 17 2 12 7 7",key:"t83bqg"}],["polyline",{points:"12 17 7 12 12 7",key:"1g4ajm"}],["path",{d:"M22 18v-2a4 4 0 0 0-4-4H7",key:"1fcyog"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z8=n("Reply",[["polyline",{points:"9 17 4 12 9 7",key:"hvgpf2"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4",key:"5vmcpk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W8=n("Rewind",[["polygon",{points:"11 19 2 12 11 5 11 19",key:"14yba5"}],["polygon",{points:"22 19 13 12 22 5 22 19",key:"1pi1cj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G8=n("Ribbon",[["path",{d:"M17.75 9.01c-.52 2.08-1.83 3.64-3.18 5.49l-2.6 3.54-2.97 4-3.5-2.54 3.85-4.97c-1.86-2.61-2.8-3.77-3.16-5.44",key:"1njedg"}],["path",{d:"M17.75 9.01A7 7 0 0 0 6.2 9.1C6.06 8.5 6 7.82 6 7c0-3.5 2.83-5 5.98-5C15.24 2 18 3.5 18 7c0 .73-.09 1.4-.25 2.01Z",key:"10len7"}],["path",{d:"m9.35 14.53 2.64-3.31",key:"1wfi09"}],["path",{d:"m11.97 18.04 2.99 4 3.54-2.54-3.93-5",key:"1ezyge"}],["path",{d:"M14 8c0 1-1 2-2.01 3.22C11 10 10 9 10 8a2 2 0 1 1 4 0",key:"aw0zq5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K8=n("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X8=n("RockingChair",[["polyline",{points:"3.5 2 6.5 12.5 18 12.5",key:"y3iy52"}],["line",{x1:"9.5",x2:"5.5",y1:"12.5",y2:"20",key:"19vg5i"}],["line",{x1:"15",x2:"18.5",y1:"12.5",y2:"20",key:"1inpmv"}],["path",{d:"M2.75 18a13 13 0 0 0 18.5 0",key:"1nquas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q8=n("RollerCoaster",[["path",{d:"M6 19V5",key:"1r845m"}],["path",{d:"M10 19V6.8",key:"9j2tfs"}],["path",{d:"M14 19v-7.8",key:"10s8qv"}],["path",{d:"M18 5v4",key:"1tajlv"}],["path",{d:"M18 19v-6",key:"ielfq3"}],["path",{d:"M22 19V9",key:"158nzp"}],["path",{d:"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65",key:"1930oh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=n("Rotate3d",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=n("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J8=n("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y8=n("RouteOff",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5c.4 0 .9-.1 1.3-.2",key:"1effex"}],["path",{d:"M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12",key:"k9y2ds"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M21 15.3a3.5 3.5 0 0 0-3.3-3.3",key:"11nlu2"}],["path",{d:"M15 5h-4.3",key:"6537je"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=n("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=n("Router",[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6.01 18H6",key:"19vcac"}],["path",{d:"M10.01 18H10",key:"uamcmx"}],["path",{d:"M15 10v4",key:"qjz1xs"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0",key:"1rif40"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0",key:"6a5xfq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=n("Rows2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=n("Rows3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=n("Rows4",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 7.5H3",key:"1hm9pq"}],["path",{d:"M21 12H3",key:"2avoz0"}],["path",{d:"M21 16.5H3",key:"n7jzkj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=n("Rss",[["path",{d:"M4 11a9 9 0 0 1 9 9",key:"pv89mb"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"k0647b"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=n("Ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=n("RussianRuble",[["path",{d:"M6 11h8a4 4 0 0 0 0-8H9v18",key:"18ai8t"}],["path",{d:"M6 15h8",key:"1y8f6l"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=n("Sailboat",[["path",{d:"M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z",key:"1404fh"}],["path",{d:"M21 14 10 2 3 14h18Z",key:"1nzg7v"}],["path",{d:"M10 2v16",key:"1labyt"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=n("Salad",[["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1",key:"10xrj0"}],["path",{d:"m13 12 4-4",key:"1hckqy"}],["path",{d:"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2",key:"1p4srx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=n("Sandwich",[["path",{d:"M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3",key:"34v9d7"}],["path",{d:"M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83",key:"1k5vfb"}],["path",{d:"m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z",key:"1oe7l6"}],["path",{d:"M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z",key:"1ts2ri"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=n("SatelliteDish",[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z",key:"1fzpp3"}],["path",{d:"m9 15 3-3",key:"88sc13"}],["path",{d:"M17 13a6 6 0 0 0-6-6",key:"15cc6u"}],["path",{d:"M21 13A10 10 0 0 0 11 3",key:"11nf8s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=n("Satellite",[["path",{d:"M13 7 9 3 5 7l4 4",key:"vyckw6"}],["path",{d:"m17 11 4 4-4 4-4-4",key:"rchckc"}],["path",{d:"m8 12 4 4 6-6-4-4Z",key:"1sshf7"}],["path",{d:"m16 8 3-3",key:"x428zp"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=n("SaveAll",[["path",{d:"M6 4a2 2 0 0 1 2-2h10l4 4v10.2a2 2 0 0 1-2 1.8H8a2 2 0 0 1-2-2Z",key:"1unput"}],["path",{d:"M10 2v4h6",key:"1p5sg6"}],["path",{d:"M18 18v-7h-8v7",key:"1oniuk"}],["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=n("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=n("Scale3d",[["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["circle",{cx:"5",cy:"5",r:"2",key:"1gwv83"}],["path",{d:"M5 7v12h12",key:"vtaa4r"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=n("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=n("Scaling",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M14 15H9v-5",key:"pi4jk9"}],["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M21 3 9 15",key:"15kdhq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=n("ScanBarcode",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 7v10",key:"23sfjj"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M17 7v10",key:"578dap"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=n("ScanEye",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5",key:"nhuolu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=n("ScanFace",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 9h.01",key:"x1ddxp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=n("ScanLine",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=n("ScanSearch",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m16 16-1.9-1.9",key:"1dq9hf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=n("ScanText",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 8h8",key:"1jbsf9"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M7 16h6",key:"1vyc9m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=n("Scan",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=n("ScatterChart",[["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}],["circle",{cx:"18.5",cy:"5.5",r:".5",fill:"currentColor",key:"lysivs"}],["circle",{cx:"11.5",cy:"11.5",r:".5",fill:"currentColor",key:"byv1b8"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor",key:"nkw3mc"}],["circle",{cx:"17.5",cy:"14.5",r:".5",fill:"currentColor",key:"1gjh6j"}],["path",{d:"M3 3v18h18",key:"1s2lah"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=n("School2",[["circle",{cx:"12",cy:"10",r:"1",key:"1gnqs8"}],["path",{d:"M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z",key:"8z0lq4"}],["path",{d:"M6 17v.01",key:"roodi6"}],["path",{d:"M6 13v.01",key:"67c122"}],["path",{d:"M18 17v.01",key:"12ktxm"}],["path",{d:"M18 13v.01",key:"tn1rt1"}],["path",{d:"M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5",key:"jfgdp0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=n("School",[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4",key:"hhkicm"}],["path",{d:"m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2",key:"1vwozw"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"m4 6 8-4 8 4",key:"1q0ilc"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=n("ScissorsLineDashed",[["path",{d:"M5.42 9.42 8 12",key:"12pkuq"}],["circle",{cx:"4",cy:"8",r:"2",key:"107mxr"}],["path",{d:"m14 6-8.58 8.58",key:"gvzu5l"}],["circle",{cx:"4",cy:"16",r:"2",key:"1ehqvc"}],["path",{d:"M10.8 14.8 14 18",key:"ax7m9r"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=n("ScissorsSquareDashedBottom",[["path",{d:"M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2",key:"1vzg26"}],["path",{d:"M10 22H8",key:"euku7a"}],["path",{d:"M16 22h-2",key:"18d249"}],["circle",{cx:"8",cy:"8",r:"2",key:"14cg06"}],["path",{d:"M9.414 9.414 12 12",key:"qz4lzr"}],["path",{d:"M14.8 14.8 18 18",key:"11flf1"}],["circle",{cx:"8",cy:"16",r:"2",key:"1acxsx"}],["path",{d:"m18 6-8.586 8.586",key:"11kzk1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=n("ScissorsSquare",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"2",key:"1btzen"}],["circle",{cx:"8",cy:"8",r:"2",key:"14cg06"}],["path",{d:"M9.414 9.414 12 12",key:"qz4lzr"}],["path",{d:"M14.8 14.8 18 18",key:"11flf1"}],["circle",{cx:"8",cy:"16",r:"2",key:"1acxsx"}],["path",{d:"m18 6-8.586 8.586",key:"11kzk1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=n("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=n("ScreenShareOff",[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",key:"i8wdob"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m22 3-5 5",key:"12jva0"}],["path",{d:"m17 3 5 5",key:"k36vhe"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=n("ScreenShare",[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",key:"i8wdob"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m17 8 5-5",key:"fqif7o"}],["path",{d:"M17 3h5v5",key:"1o3tu8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=n("ScrollText",[["path",{d:"M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4",key:"13a6an"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M15 12h-5",key:"r7krc0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=n("Scroll",[["path",{d:"M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4",key:"13a6an"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=n("SearchCheck",[["path",{d:"m8 11 2 2 4-4",key:"1sed1v"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=n("SearchCode",[["path",{d:"m9 9-2 2 2 2",key:"17gsfh"}],["path",{d:"m13 13 2-2-2-2",key:"186z8k"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=n("SearchSlash",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=n("SearchX",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=n("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=n("SendHorizontal",[["path",{d:"m3 3 3 9-3 9 19-9Z",key:"1aobqy"}],["path",{d:"M6 12h16",key:"s4cdu5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=n("SendToBack",[["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2",key:"1b0bso"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2",key:"1x09vl"}],["path",{d:"M7 14v1a2 2 0 0 0 2 2h1",key:"pao6x6"}],["path",{d:"M14 7h1a2 2 0 0 1 2 2v1",key:"19tdru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=n("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=n("SeparatorHorizontal",[["line",{x1:"3",x2:"21",y1:"12",y2:"12",key:"10d38w"}],["polyline",{points:"8 8 12 4 16 8",key:"zo8t4w"}],["polyline",{points:"16 16 12 20 8 16",key:"1oyrid"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=n("SeparatorVertical",[["line",{x1:"12",x2:"12",y1:"3",y2:"21",key:"1efggb"}],["polyline",{points:"8 8 4 12 8 16",key:"bnfmv4"}],["polyline",{points:"16 16 20 12 16 8",key:"u90052"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=n("ServerCog",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5",key:"tn8das"}],["path",{d:"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5",key:"1g2pve"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m15.7 13.4-.9-.3",key:"1jwmzr"}],["path",{d:"m9.2 10.9-.9-.3",key:"qapnim"}],["path",{d:"m10.6 15.7.3-.9",key:"quwk0k"}],["path",{d:"m13.6 15.7-.4-1",key:"cb9xp7"}],["path",{d:"m10.8 9.3-.4-1",key:"1uaiz5"}],["path",{d:"m8.3 13.6 1-.4",key:"s6srou"}],["path",{d:"m14.7 10.8 1-.4",key:"4d31cq"}],["path",{d:"m13.4 8.3-.3.9",key:"1bm987"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=n("ServerCrash",[["path",{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2",key:"4b9dqc"}],["path",{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2",key:"22nnkd"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m13 6-4 6h6l-4 6",key:"14hqih"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=n("ServerOff",[["path",{d:"M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5",key:"bt2siv"}],["path",{d:"M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z",key:"1hjrv1"}],["path",{d:"M22 17v-1a2 2 0 0 0-2-2h-1",key:"1iynyr"}],["path",{d:"M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z",key:"161ggg"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=n("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=n("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=n("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=n("Shapes",[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=n("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=n("Share",[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["polyline",{points:"16 6 12 2 8 6",key:"m901s6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15",key:"1p0rca"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=n("Sheet",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9",key:"1vqk6q"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15",key:"o2sbyz"}],["line",{x1:"9",x2:"9",y1:"9",y2:"21",key:"1ib60c"}],["line",{x1:"15",x2:"15",y1:"9",y2:"21",key:"1n26ft"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=n("Shell",[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",key:"1cn552"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=n("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=n("ShieldBan",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m4.243 5.21 14.39 12.472",key:"1c9a7c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=n("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=n("ShieldEllipsis",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=n("ShieldHalf",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 22V2",key:"zs6s6o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=n("ShieldMinus",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9 12h6",key:"1c52cq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=n("ShieldOff",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71",key:"1jlk70"}],["path",{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264",key:"18rp1v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=n("ShieldPlus",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M12 9v6",key:"199k2o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=n("ShieldQuestion",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",key:"mhlwft"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=n("ShieldX",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m14.5 9.5-5 5",key:"17q4r4"}],["path",{d:"m9.5 9.5 5 5",key:"18nt4w"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=n("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=n("ShipWheel",[["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}],["path",{d:"M12 2v7.5",key:"1e5rl5"}],["path",{d:"m19 5-5.23 5.23",key:"1ezxxf"}],["path",{d:"M22 12h-7.5",key:"le1719"}],["path",{d:"m19 19-5.23-5.23",key:"p3fmgn"}],["path",{d:"M12 14.5V22",key:"dgcmos"}],["path",{d:"M10.23 13.77 5 19",key:"qwopd4"}],["path",{d:"M9.5 12H2",key:"r7bup8"}],["path",{d:"M10.23 10.23 5 5",key:"k2y7lj"}],["circle",{cx:"12",cy:"12",r:"2.5",key:"ix0uyj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=n("Ship",[["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"iegodh"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76",key:"fp8vka"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6",key:"qpkstq"}],["path",{d:"M12 10v4",key:"1kjpxc"}],["path",{d:"M12 2v3",key:"qbqxhf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=n("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=n("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=n("ShoppingBasket",[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=n("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=n("Shovel",[["path",{d:"M2 22v-5l5-5 5 5-5 5z",key:"1fh25c"}],["path",{d:"M9.5 14.5 16 8",key:"1smz5x"}],["path",{d:"m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2",key:"1q8uv5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=n("ShowerHead",[["path",{d:"m4 4 2.5 2.5",key:"uv2vmf"}],["path",{d:"M13.5 6.5a4.95 4.95 0 0 0-7 7",key:"frdkwv"}],["path",{d:"M15 5 5 15",key:"1ag8rq"}],["path",{d:"M14 17v.01",key:"eokfpp"}],["path",{d:"M10 16v.01",key:"14uyyl"}],["path",{d:"M13 13v.01",key:"1v1k97"}],["path",{d:"M16 10v.01",key:"5169yg"}],["path",{d:"M11 20v.01",key:"cj92p8"}],["path",{d:"M17 14v.01",key:"11cswd"}],["path",{d:"M20 11v.01",key:"19e0od"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=n("Shrink",[["path",{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8",key:"17vawe"}],["path",{d:"M9 19.8V15m0 0H4.2M9 15l-6 6",key:"chjx8e"}],["path",{d:"M15 4.2V9m0 0h4.8M15 9l6-6",key:"lav6yq"}],["path",{d:"M9 4.2V9m0 0H4.2M9 9 3 3",key:"1pxi2q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=n("Shrub",[["path",{d:"M12 22v-7l-2-2",key:"eqv9mc"}],["path",{d:"M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z",key:"12jcau"}],["path",{d:"m14 14-2 2",key:"847xa2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=n("Shuffle",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=n("SigmaSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M16 8.9V7H8l4 5-4 5h8v-1.9",key:"9nih0i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=n("Sigma",[["path",{d:"M18 7V4H6l6 8-6 8h12v-3",key:"zis8ev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=n("SignalHigh",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=n("SignalLow",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=n("SignalMedium",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=n("SignalZero",[["path",{d:"M2 20h.01",key:"4haj6o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=n("Signal",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}],["path",{d:"M22 4v16",key:"sih9yq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=n("SignpostBig",[["path",{d:"M10 9H4L2 7l2-2h6",key:"1hq7x2"}],["path",{d:"M14 5h6l2 2-2 2h-6",key:"bv62ej"}],["path",{d:"M10 22V4a2 2 0 1 1 4 0v18",key:"eqpcf2"}],["path",{d:"M8 22h8",key:"rmew8v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=n("Signpost",[["path",{d:"M12 3v3",key:"1n5kay"}],["path",{d:"M18.5 13h-13L2 9.5 5.5 6h13L22 9.5Z",key:"27os56"}],["path",{d:"M12 13v8",key:"1l5pq0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=n("Siren",[["path",{d:"M7 18v-6a5 5 0 1 1 10 0v6",key:"pcx96s"}],["path",{d:"M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z",key:"1b4s83"}],["path",{d:"M21 12h1",key:"jtio3y"}],["path",{d:"M18.5 4.5 18 5",key:"g5sp9y"}],["path",{d:"M2 12h1",key:"1uaihz"}],["path",{d:"M12 2v1",key:"11qlp1"}],["path",{d:"m4.929 4.929.707.707",key:"1i51kw"}],["path",{d:"M12 12v6",key:"3ahymv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=n("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=n("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=n("Skull",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["path",{d:"M8 20v2h8v-2",key:"ded4og"}],["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20",key:"xq9p5u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=n("Slack",[["rect",{width:"3",height:"8",x:"13",y:"2",rx:"1.5",key:"diqz80"}],["path",{d:"M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5",key:"183iwg"}],["rect",{width:"3",height:"8",x:"8",y:"14",rx:"1.5",key:"hqg7r1"}],["path",{d:"M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5",key:"76g71w"}],["rect",{width:"8",height:"3",x:"14",y:"13",rx:"1.5",key:"1kmz0a"}],["path",{d:"M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5",key:"jc4sz0"}],["rect",{width:"8",height:"3",x:"2",y:"8",rx:"1.5",key:"1omvl4"}],["path",{d:"M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5",key:"16f3cl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=n("SlashSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=n("Slash",[["path",{d:"M22 2 2 22",key:"y4kqgn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=n("Slice",[["path",{d:"m8 14-6 6h9v-3",key:"zo3j9a"}],["path",{d:"M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z",key:"1dzx0j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=n("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=n("Sliders",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=n("SmartphoneCharging",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12.667 8 10 12h4l-2.667 4",key:"h9lk2d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=n("SmartphoneNfc",[["rect",{width:"7",height:"12",x:"2",y:"6",rx:"1",key:"5nje8w"}],["path",{d:"M13 8.32a7.43 7.43 0 0 1 0 7.36",key:"1g306n"}],["path",{d:"M16.46 6.21a11.76 11.76 0 0 1 0 11.58",key:"uqvjvo"}],["path",{d:"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8",key:"ujntz3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=n("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=n("SmilePlus",[["path",{d:"M22 11v1a10 10 0 1 1-9-10",key:"ew0xw9"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}],["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=n("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=n("Snail",[["path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0",key:"hneq2s"}],["circle",{cx:"10",cy:"13",r:"8",key:"194lz3"}],["path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6",key:"ixqyt7"}],["path",{d:"M18 3 19.1 5.2",key:"9tjm43"}],["path",{d:"M22 3 20.9 5.2",key:"j3odrs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=n("Snowflake",[["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"m20 16-4-4 4-4",key:"rquw4f"}],["path",{d:"m4 8 4 4-4 4",key:"12s3z9"}],["path",{d:"m16 4-4 4-4-4",key:"1tumq1"}],["path",{d:"m8 20 4-4 4 4",key:"9p200w"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=n("Sofa",[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3",key:"1dgpiv"}],["path",{d:"M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z",key:"u5qfb7"}],["path",{d:"M4 18v2",key:"jwo5n2"}],["path",{d:"M20 18v2",key:"1ar1qi"}],["path",{d:"M12 4v9",key:"oqhhn3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=n("Soup",[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M19.5 12 22 6",key:"shfsr5"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62",key:"rpc6vp"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62",key:"1lf63m"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62",key:"97tijn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=n("Space",[["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",key:"lt2kga"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=n("Spade",[["path",{d:"M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z",key:"40bo9n"}],["path",{d:"M12 18v4",key:"jadmvz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=n("Sparkle",[["path",{d:"m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z",key:"nraa5p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=n("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=n("Speaker",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["circle",{cx:"12",cy:"14",r:"4",key:"1jruaj"}],["path",{d:"M12 14h.01",key:"1etili"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=n("Speech",[["path",{d:"M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20",key:"11atix"}],["path",{d:"M19.8 17.8a7.5 7.5 0 0 0 .003-10.603",key:"yol142"}],["path",{d:"M17 15a3.5 3.5 0 0 0-.025-4.975",key:"ssbmkc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=n("SpellCheck2",[["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1",key:"8mdmtu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=n("SpellCheck",[["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m16 20 2 2 4-4",key:"13tcca"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=n("Spline",[["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M5 17A12 12 0 0 1 17 5",key:"1okkup"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=n("SplitSquareHorizontal",[["path",{d:"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3",key:"lubmu8"}],["path",{d:"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3",key:"1ag34g"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e7=n("SplitSquareVertical",[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",key:"1pi83i"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",key:"ido5k7"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t7=n("Split",[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M8 3H3v5",key:"15dfkv"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3",key:"1qrqzj"}],["path",{d:"m15 9 6-6",key:"ko1vev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a7=n("SprayCan",[["path",{d:"M3 3h.01",key:"159qn6"}],["path",{d:"M7 5h.01",key:"1hq22a"}],["path",{d:"M11 7h.01",key:"1osv80"}],["path",{d:"M3 7h.01",key:"1xzrh3"}],["path",{d:"M7 9h.01",key:"19b3jx"}],["path",{d:"M3 11h.01",key:"1eifu7"}],["rect",{width:"4",height:"4",x:"15",y:"5",key:"mri9e4"}],["path",{d:"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2",key:"aib6hk"}],["path",{d:"m13 14 8-2",key:"1d7bmk"}],["path",{d:"m13 19 8-2",key:"1y2vml"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n7=n("Sprout",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r7=n("SquareDashedBottomCode",[["path",{d:"m10 10-2 2 2 2",key:"p6et6i"}],["path",{d:"m14 14 2-2-2-2",key:"m075q2"}],["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",key:"as5y1o"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o7=n("SquareDashedBottom",[["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",key:"as5y1o"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=n("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i7=n("SquareRadical",[["path",{d:"M7 12h2l2 5 2-10h4",key:"1fxv6h"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l7=n("SquareStack",[["path",{d:"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",key:"4i38lg"}],["path",{d:"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",key:"mlte4a"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2",key:"1fa9i4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=n("SquareUserRound",[["path",{d:"M18 21a6 6 0 0 0-12 0",key:"kaz2du"}],["circle",{cx:"12",cy:"11",r:"4",key:"1gt34v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=n("SquareUser",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1m6ac2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c7=n("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d7=n("Squircle",[["path",{d:"M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9",key:"garfkc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s7=n("Squirrel",[["path",{d:"M15.236 22a3 3 0 0 0-2.2-5",key:"21bitc"}],["path",{d:"M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4",key:"oh0fg0"}],["path",{d:"M18 13h.01",key:"9veqaj"}],["path",{d:"M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10",key:"980v8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h7=n("Stamp",[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z",key:"1sy9ra"}],["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13",key:"cnxgux"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y7=n("StarHalf",[["path",{d:"M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2",key:"nare05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u7=n("StarOff",[["path",{d:"M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43",key:"16m0ql"}],["path",{d:"M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91",key:"1vt8nq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p7=n("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k7=n("StepBack",[["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["polygon",{points:"14,20 4,12 14,4",key:"ypakod"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g7=n("StepForward",[["line",{x1:"6",x2:"6",y1:"4",y2:"20",key:"fy8qot"}],["polygon",{points:"10,4 20,12 10,20",key:"1mc1pf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m7=n("Stethoscope",[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",key:"1jd90r"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4",key:"126ukv"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x7=n("Sticker",[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z",key:"1wis1t"}],["path",{d:"M14 3v4a2 2 0 0 0 2 2h4",key:"36rjfy"}],["path",{d:"M8 13h0",key:"jdup5h"}],["path",{d:"M16 13h0",key:"l4i2ga"}],["path",{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1",key:"1vvgv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f7=n("StickyNote",[["path",{d:"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z",key:"qazsjp"}],["path",{d:"M15 3v4a2 2 0 0 0 2 2h4",key:"40519r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v7=n("StopCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{width:"6",height:"6",x:"9",y:"9",key:"1wrtvo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M7=n("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w7=n("StretchHorizontal",[["rect",{width:"20",height:"6",x:"2",y:"4",rx:"2",key:"qdearl"}],["rect",{width:"20",height:"6",x:"2",y:"14",rx:"2",key:"1xrn6j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L7=n("StretchVertical",[["rect",{width:"6",height:"20",x:"4",y:"2",rx:"2",key:"19qu7m"}],["rect",{width:"6",height:"20",x:"14",y:"2",rx:"2",key:"24v0nk"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b7=n("Strikethrough",[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4",key:"43sutm"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6",key:"nlfj13"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C7=n("Subscript",[["path",{d:"m4 5 8 8",key:"1eunvl"}],["path",{d:"m12 5-8 8",key:"1ah0jp"}],["path",{d:"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07",key:"e8ta8j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S7=n("SunDim",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M20 12h.01",key:"1ykeid"}],["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M4 12h.01",key:"158zrr"}],["path",{d:"M17.657 6.343h.01",key:"31pqzk"}],["path",{d:"M17.657 17.657h.01",key:"jehnf4"}],["path",{d:"M6.343 17.657h.01",key:"gdk6ow"}],["path",{d:"M6.343 6.343h.01",key:"1uurf0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I7=n("SunMedium",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 3v1",key:"1asbbs"}],["path",{d:"M12 20v1",key:"1wcdkc"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M20 12h1",key:"1vloll"}],["path",{d:"m18.364 5.636-.707.707",key:"1hakh0"}],["path",{d:"m6.343 17.657-.707.707",key:"18m9nf"}],["path",{d:"m5.636 5.636.707.707",key:"1xv1c5"}],["path",{d:"m17.657 17.657.707.707",key:"vl76zb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j7=n("SunMoon",[["path",{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4",key:"1fu5g2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.9 4.9 1.4 1.4",key:"b9915j"}],["path",{d:"m17.7 17.7 1.4 1.4",key:"qc3ed3"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.3 17.7-1.4 1.4",key:"5gca6"}],["path",{d:"m19.1 4.9-1.4 1.4",key:"wpu9u6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H7=n("SunSnow",[["path",{d:"M10 9a3 3 0 1 0 0 6",key:"6zmtdl"}],["path",{d:"M2 12h1",key:"1uaihz"}],["path",{d:"M14 21V3",key:"1llu3z"}],["path",{d:"M10 4V3",key:"pkzwkn"}],["path",{d:"M10 21v-1",key:"1u8rkd"}],["path",{d:"m3.64 18.36.7-.7",key:"105rm9"}],["path",{d:"m4.34 6.34-.7-.7",key:"d3unjp"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"m17 4-3 3",key:"15jcng"}],["path",{d:"m14 17 3 3",key:"6tlq38"}],["path",{d:"m21 15-3-3 3-3",key:"1nlnje"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=n("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z7=n("Sunrise",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q7=n("Sunset",[["path",{d:"M12 10V2",key:"16sf7g"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A7=n("Superscript",[["path",{d:"m4 19 8-8",key:"hr47gm"}],["path",{d:"m12 19-8-8",key:"1dhhmo"}],["path",{d:"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06",key:"1dfcux"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P7=n("SwatchBook",[["path",{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z",key:"1ldrpk"}],["path",{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7",key:"11i5po"}],["path",{d:"M 7 17h0.01",key:"10821z"}],["path",{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8",key:"o2gii7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D7=n("SwissFranc",[["path",{d:"M10 21V3h8",key:"br2l0g"}],["path",{d:"M6 16h9",key:"2py0wn"}],["path",{d:"M10 9.5h7",key:"13dmhz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N7=n("SwitchCamera",[["path",{d:"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5",key:"mtk2lu"}],["path",{d:"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5",key:"120jsl"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m18 22-3-3 3-3",key:"kgdoj7"}],["path",{d:"m6 2 3 3-3 3",key:"1fnbkv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T7=n("Sword",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V7=n("Swords",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F7=n("Syringe",[["path",{d:"m18 2 4 4",key:"22kx64"}],["path",{d:"m17 7 3-3",key:"1w1zoj"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",key:"1exhtz"}],["path",{d:"m9 11 4 4",key:"rovt3i"}],["path",{d:"m5 19-3 3",key:"59f2uf"}],["path",{d:"m14 4 6 6",key:"yqp9t2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E7=n("Table2",[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",key:"gugj83"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B7=n("TableCellsMerge",[["path",{d:"M12 21v-6",key:"lihzve"}],["path",{d:"M12 9V3",key:"da5inc"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R7=n("TableCellsSplit",[["path",{d:"M12 15V9",key:"8c7uyn"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O7=n("TableColumnsSplit",[["path",{d:"M14 14v2",key:"w2a1xv"}],["path",{d:"M14 20v2",key:"1lq872"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M14 8v2",key:"i67w9a"}],["path",{d:"M2 15h8",key:"82wtch"}],["path",{d:"M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2",key:"up0l64"}],["path",{d:"M2 9h8",key:"yelfik"}],["path",{d:"M22 15h-4",key:"1es58f"}],["path",{d:"M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2",key:"pdjoqf"}],["path",{d:"M22 9h-4",key:"1luja7"}],["path",{d:"M5 3v18",key:"14hmio"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U7=n("TableProperties",[["path",{d:"M15 3v18",key:"14nvp0"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $7=n("TableRowsSplit",[["path",{d:"M14 10h2",key:"1lstlu"}],["path",{d:"M15 22v-8",key:"1fwwgm"}],["path",{d:"M15 2v4",key:"1044rn"}],["path",{d:"M2 10h2",key:"1r8dkt"}],["path",{d:"M20 10h2",key:"1ug425"}],["path",{d:"M3 19h18",key:"awlh7x"}],["path",{d:"M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6",key:"ibqhof"}],["path",{d:"M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2",key:"1uenja"}],["path",{d:"M8 10h2",key:"66od0"}],["path",{d:"M9 22v-8",key:"fmnu31"}],["path",{d:"M9 2v4",key:"j1yeou"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _7=n("Table",[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z7=n("TabletSmartphone",[["rect",{width:"10",height:"14",x:"3",y:"8",rx:"2",key:"1vrsiq"}],["path",{d:"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4",key:"1j4zmg"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W7=n("Tablet",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G7=n("Tablets",[["circle",{cx:"7",cy:"7",r:"5",key:"x29byf"}],["circle",{cx:"17",cy:"17",r:"5",key:"1op1d2"}],["path",{d:"M12 17h10",key:"ls21zv"}],["path",{d:"m3.46 10.54 7.08-7.08",key:"1rehiu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K7=n("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X7=n("Tags",[["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",key:"1cbfv1"}],["path",{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z",key:"135mg7"}],["circle",{cx:"6.5",cy:"9.5",r:".5",fill:"currentColor",key:"5pm5xn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q7=n("Tally1",[["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J7=n("Tally2",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y7=n("Tally3",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=n("Tally4",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}],["path",{d:"M19 4v16",key:"8ij5ei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=n("Tally5",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}],["path",{d:"M19 4v16",key:"8ij5ei"}],["path",{d:"M22 6 2 18",key:"h9moai"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=n("Tangent",[["circle",{cx:"17",cy:"4",r:"2",key:"y5j2s2"}],["path",{d:"M15.59 5.41 5.41 15.59",key:"l0vprr"}],["circle",{cx:"4",cy:"17",r:"2",key:"9p4efm"}],["path",{d:"M12 22s-4-9-1.5-11.5S22 12 22 12",key:"1twk4o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=n("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=n("Telescope",[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",key:"k4qptu"}],["path",{d:"m13.56 11.747 4.332-.924",key:"19l80z"}],["path",{d:"m16 21-3.105-6.21",key:"7oh9d"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",key:"m7xp4m"}],["path",{d:"m6.158 8.633 1.114 4.456",key:"74o979"}],["path",{d:"m8 21 3.105-6.21",key:"1fvxut"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=n("TentTree",[["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}],["path",{d:"m14 5 3-3 3 3",key:"1sorif"}],["path",{d:"m14 10 3-3 3 3",key:"1jyi9h"}],["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M17 14H7l-5 8h20Z",key:"13ar7p"}],["path",{d:"M8 14v8",key:"1ghmqk"}],["path",{d:"m9 14 5 8",key:"13pgi6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=n("Tent",[["path",{d:"M3.5 21 14 3",key:"1szst5"}],["path",{d:"M20.5 21 10 3",key:"1310c3"}],["path",{d:"M15.5 21 12 15l-3.5 6",key:"1ddtfw"}],["path",{d:"M2 21h20",key:"1nyx9w"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=n("TerminalSquare",[["path",{d:"m7 11 2-2-2-2",key:"1lz0vl"}],["path",{d:"M11 13h4",key:"1p7l4v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=n("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=n("TestTube2",[["path",{d:"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3",key:"dg8b2p"}],["path",{d:"m16 2 6 6",key:"1gw87d"}],["path",{d:"M12 16H4",key:"1cjfip"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=n("TestTube",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=n("TestTubes",[["path",{d:"M9 2v17.5A2.5 2.5 0 0 1 6.5 22v0A2.5 2.5 0 0 1 4 19.5V2",key:"12z67u"}],["path",{d:"M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5V2",key:"1q2nfy"}],["path",{d:"M3 2h7",key:"7s29d5"}],["path",{d:"M14 2h7",key:"7sicin"}],["path",{d:"M9 16H4",key:"1bfye3"}],["path",{d:"M20 16h-5",key:"ddnjpe"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=n("TextCursorInput",[["path",{d:"M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1",key:"18xjzo"}],["path",{d:"M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5",key:"fj48gi"}],["path",{d:"M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1",key:"1n9rhb"}],["path",{d:"M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7",key:"13ksps"}],["path",{d:"M9 7v10",key:"1vc8ob"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=n("TextCursor",[["path",{d:"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1",key:"uvaxm9"}],["path",{d:"M7 22h1a4 4 0 0 0 4-4v-1",key:"11xy8d"}],["path",{d:"M7 2h1a4 4 0 0 1 4 4v1",key:"1uw06m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=n("TextQuote",[["path",{d:"M17 6H3",key:"16j9eg"}],["path",{d:"M21 12H8",key:"scolzb"}],["path",{d:"M21 18H8",key:"1wfozv"}],["path",{d:"M3 12v6",key:"fv4c87"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=n("TextSearch",[["path",{d:"M21 6H3",key:"1jwq7v"}],["path",{d:"M10 12H3",key:"1ulcyk"}],["path",{d:"M10 18H3",key:"13769t"}],["circle",{cx:"17",cy:"15",r:"3",key:"1upz2a"}],["path",{d:"m21 19-1.9-1.9",key:"dwi7p8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=n("TextSelect",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}],["line",{x1:"7",x2:"15",y1:"8",y2:"8",key:"1758g8"}],["line",{x1:"7",x2:"17",y1:"12",y2:"12",key:"197423"}],["line",{x1:"7",x2:"13",y1:"16",y2:"16",key:"37cgm6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=n("Text",[["path",{d:"M17 6.1H3",key:"wptmhv"}],["path",{d:"M21 12.1H3",key:"1j38uz"}],["path",{d:"M15.1 18H3",key:"1nb16a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=n("Theater",[["path",{d:"M2 10s3-3 3-8",key:"3xiif0"}],["path",{d:"M22 10s-3-3-3-8",key:"ioaa5q"}],["path",{d:"M10 2c0 4.4-3.6 8-8 8",key:"16fkpi"}],["path",{d:"M14 2c0 4.4 3.6 8 8 8",key:"b9eulq"}],["path",{d:"M2 10s2 2 2 5",key:"1au1lb"}],["path",{d:"M22 10s-2 2-2 5",key:"qi2y5e"}],["path",{d:"M8 15h8",key:"45n4r"}],["path",{d:"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",key:"1vsc2m"}],["path",{d:"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",key:"hrha4u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=n("ThermometerSnowflake",[["path",{d:"M2 12h10",key:"19562f"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"m3 9 3 3-3 3",key:"1sas0l"}],["path",{d:"M12 6 9 9 6 6",key:"pfrgxu"}],["path",{d:"m6 18 3-3 1.5 1.5",key:"1e277p"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"iof6y5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=n("ThermometerSun",[["path",{d:"M12 9a4 4 0 0 0-2 7.5",key:"1jvsq6"}],["path",{d:"M12 3v2",key:"1w22ol"}],["path",{d:"m6.6 18.4-1.4 1.4",key:"w2yidj"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"iof6y5"}],["path",{d:"M4 13H2",key:"118le4"}],["path",{d:"M6.34 7.34 4.93 5.93",key:"1brd51"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=n("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=n("ThumbsDown",[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z",key:"s6e0r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=n("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",key:"y3tblf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=n("TicketCheck",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=n("TicketMinus",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M9 12h6",key:"1c52cq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=n("TicketPercent",[["path",{d:"M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"1l48ns"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=n("TicketPlus",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M12 9v6",key:"199k2o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=n("TicketSlash",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9.5 14.5 5-5",key:"qviqfa"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=n("TicketX",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9.5 14.5 5-5",key:"qviqfa"}],["path",{d:"m9.5 9.5 5 5",key:"18nt4w"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=n("Ticket",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=n("TimerOff",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7",key:"10he05"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2",key:"15f7sh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M12 12v-2",key:"fwoke6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=n("TimerReset",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M12 14v-4",key:"1evpnu"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6",key:"1ts96g"}],["path",{d:"M9 17H4v5",key:"8t5av"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=n("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=n("ToggleLeft",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"8",cy:"12",r:"2",key:"1nvbw3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=n("ToggleRight",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=n("Tornado",[["path",{d:"M21 4H3",key:"1hwok0"}],["path",{d:"M18 8H6",key:"41n648"}],["path",{d:"M19 12H9",key:"1g4lpz"}],["path",{d:"M16 16h-6",key:"1j5d54"}],["path",{d:"M11 20H9",key:"39obr8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=n("Torus",[["ellipse",{cx:"12",cy:"11",rx:"3",ry:"2",key:"1b2qxu"}],["ellipse",{cx:"12",cy:"12.5",rx:"10",ry:"8.5",key:"h8emeu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=n("TouchpadOff",[["path",{d:"M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16",key:"lnt0bk"}],["path",{d:"M2 14h12",key:"d8icqz"}],["path",{d:"M22 14h-2",key:"jrx26d"}],["path",{d:"M12 20v-6",key:"1rm09r"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M22 16V6a2 2 0 0 0-2-2H10",key:"11y8e4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=n("Touchpad",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M12 20v-6",key:"1rm09r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=n("TowerControl",[["path",{d:"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z",key:"1pledb"}],["path",{d:"M8 13v9",key:"hmv0ci"}],["path",{d:"M16 22v-9",key:"ylnf1u"}],["path",{d:"m9 6 1 7",key:"dpdgam"}],["path",{d:"m15 6-1 7",key:"ls7zgu"}],["path",{d:"M12 6V2",key:"1pj48d"}],["path",{d:"M13 2h-2",key:"mj6ths"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=n("ToyBrick",[["rect",{width:"18",height:"12",x:"3",y:"8",rx:"1",key:"158fvp"}],["path",{d:"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3",key:"s0042v"}],["path",{d:"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3",key:"9wmeh2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=n("Tractor",[["path",{d:"m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1",key:"2w242w"}],["path",{d:"M16 18h-5",key:"bq60fd"}],["path",{d:"M18 5a1 1 0 0 0-1 1v5.573",key:"1kv8ia"}],["path",{d:"M3 4h9l1 7.246",key:"d639it"}],["path",{d:"M4 11V4",key:"9ft8pt"}],["path",{d:"M7 15h.01",key:"k5ht0j"}],["path",{d:"M8 10.1V4",key:"1jgyzo"}],["circle",{cx:"18",cy:"18",r:"2",key:"1emm8v"}],["circle",{cx:"7",cy:"15",r:"5",key:"ddtuc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=n("TrafficCone",[["path",{d:"M9.3 6.2a4.55 4.55 0 0 0 5.4 0",key:"flyxqv"}],["path",{d:"M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3",key:"1nlxxg"}],["path",{d:"M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z",key:"vz7x1l"}],["path",{d:"m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8",key:"1xfzlw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=n("TrainFrontTunnel",[["path",{d:"M2 22V12a10 10 0 1 1 20 0v10",key:"o0fyp0"}],["path",{d:"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8",key:"m8q3n9"}],["path",{d:"M10 15h.01",key:"44in9x"}],["path",{d:"M14 15h.01",key:"5mohn5"}],["path",{d:"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z",key:"hckbmu"}],["path",{d:"m9 19-2 3",key:"iij7hm"}],["path",{d:"m15 19 2 3",key:"npx8sa"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=n("TrainFront",[["path",{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1",key:"1v71zp"}],["path",{d:"m9 15-1-1",key:"1yrq24"}],["path",{d:"m15 15 1-1",key:"1t0d6s"}],["path",{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z",key:"1p0hjs"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m16 19 2 3",key:"xo31yx"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=n("TrainTrack",[["path",{d:"M2 17 17 2",key:"18b09t"}],["path",{d:"m2 14 8 8",key:"1gv9hu"}],["path",{d:"m5 11 8 8",key:"189pqp"}],["path",{d:"m8 8 8 8",key:"1imecy"}],["path",{d:"m11 5 8 8",key:"ummqn6"}],["path",{d:"m14 2 8 8",key:"1vk7dn"}],["path",{d:"M7 22 22 7",key:"15mb1i"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=n("TramFront",[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h0",key:"q9eq1f"}],["path",{d:"M16 15h0",key:"pzrbjg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=n("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=n("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=n("TreeDeciduous",[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",key:"oadzkq"}],["path",{d:"M12 19v3",key:"npa21l"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=n("TreePine",[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",key:"cpyugq"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=n("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"yh07w9"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=n("Trello",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["rect",{width:"3",height:"9",x:"7",y:"7",key:"14n3xi"}],["rect",{width:"3",height:"5",x:"14",y:"7",key:"s4azjd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=n("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=n("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=n("TriangleRight",[["path",{d:"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z",key:"183wce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=n("Triangle",[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=n("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=n("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=n("Turtle",[["path",{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z",key:"1lbbv7"}],["path",{d:"M4.82 7.9 8 10",key:"m9wose"}],["path",{d:"M15.18 7.9 12 10",key:"p8dp2u"}],["path",{d:"M16.93 10H20a2 2 0 0 1 0 4H2",key:"12nsm7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=n("Tv2",[["path",{d:"M7 21h10",key:"1b0cd5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=n("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=n("Twitch",[["path",{d:"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7",key:"c0yzno"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=n("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=n("Type",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=n("UmbrellaOff",[["path",{d:"M12 2v1",key:"11qlp1"}],["path",{d:"M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575",key:"eki10q"}],["path",{d:"M17.5 12H22A10 10 0 0 0 9.004 3.455",key:"n2ayka"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=n("Umbrella",[["path",{d:"M22 12a10.06 10.06 1 0 0-20 0Z",key:"1teyop"}],["path",{d:"M12 12v8a2 2 0 0 0 4 0",key:"ulpmoc"}],["path",{d:"M12 2v1",key:"11qlp1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=n("Underline",[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=n("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11",key:"llx8ln"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=n("UndoDot",[["circle",{cx:"12",cy:"17",r:"1",key:"1ixnty"}],["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=n("Undo",[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=n("UnfoldHorizontal",[["path",{d:"M16 12h6",key:"15xry1"}],["path",{d:"M8 12H2",key:"1jqql6"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m19 15 3-3-3-3",key:"wjy7rq"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=n("UnfoldVertical",[["path",{d:"M12 22v-6",key:"6o8u61"}],["path",{d:"M12 8V2",key:"1wkif3"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m15 5-3-3-3 3",key:"itvq4r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=n("Ungroup",[["rect",{width:"8",height:"6",x:"5",y:"4",rx:"1",key:"nzclkv"}],["rect",{width:"8",height:"6",x:"11",y:"14",rx:"1",key:"4tytwb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=n("Unlink2",[["path",{d:"M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2",key:"1re2ne"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=n("Unlink",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=n("UnlockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 9.33-2.5",key:"car5b7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=n("Unlock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=n("Unplug",[["path",{d:"m19 5 3-3",key:"yk6iyv"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z",key:"1snsnr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=n("UploadCloud",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m16 16-4-4-4 4",key:"119tzi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=n("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=n("Usb",[["circle",{cx:"10",cy:"7",r:"1",key:"dypaad"}],["circle",{cx:"4",cy:"20",r:"1",key:"22iqad"}],["path",{d:"M4.7 19.3 19 5",key:"1enqfc"}],["path",{d:"m21 3-3 1 2 2Z",key:"d3ov82"}],["path",{d:"M9.26 7.68 5 12l2 5",key:"1esawj"}],["path",{d:"m10 14 5 2 3.5-3.5",key:"v8oal5"}],["path",{d:"m18 12 1-1 1 1-1 1Z",key:"1bh22v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=n("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=n("UserCog",[["circle",{cx:"18",cy:"15",r:"3",key:"gjjjvw"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M10 15H6a4 4 0 0 0-4 4v2",key:"1nfge6"}],["path",{d:"m21.7 16.4-.9-.3",key:"12j9ji"}],["path",{d:"m15.2 13.9-.9-.3",key:"1fdjdi"}],["path",{d:"m16.6 18.7.3-.9",key:"heedtr"}],["path",{d:"m19.1 12.2.3-.9",key:"1af3ki"}],["path",{d:"m19.6 18.7-.4-1",key:"1x9vze"}],["path",{d:"m16.8 12.3-.4-1",key:"vqeiwj"}],["path",{d:"m14.3 16.6 1-.4",key:"1qlj63"}],["path",{d:"m20.7 13.8 1-.4",key:"1v5t8k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=n("UserMinus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=n("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=n("UserRoundCheck",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=n("UserRoundCog",[["path",{d:"M2 21a8 8 0 0 1 10.434-7.62",key:"1yezr2"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m19.5 14.3-.4.9",key:"1eb35c"}],["path",{d:"m16.9 20.8-.4.9",key:"dfjc4z"}],["path",{d:"m21.7 19.5-.9-.4",key:"q4dx6b"}],["path",{d:"m15.2 16.9-.9-.4",key:"1r0w5f"}],["path",{d:"m21.7 16.5-.9.4",key:"1knoei"}],["path",{d:"m15.2 19.1-.9.4",key:"j188fs"}],["path",{d:"m19.5 21.7-.4-.9",key:"1tonu5"}],["path",{d:"m16.9 15.2-.4-.9",key:"699xu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=n("UserRoundMinus",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 19h-6",key:"vcuq98"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=n("UserRoundPlus",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M22 19h-6",key:"vcuq98"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=n("UserRoundSearch",[["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M2 21a8 8 0 0 1 10.434-7.62",key:"1yezr2"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.9-1.9",key:"1e5ubv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=n("UserRoundX",[["path",{d:"M2 21a8 8 0 0 1 11.873-7",key:"74fkxq"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m17 17 5 5",key:"p7ous7"}],["path",{d:"m22 17-5 5",key:"gqnmv0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=n("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=n("UserSearch",[["circle",{cx:"10",cy:"7",r:"4",key:"e45bow"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2",key:"3bnktk"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["path",{d:"m21 21-1.9-1.9",key:"1g2n9r"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=n("UserX",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=n("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=n("UsersRound",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=n("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=n("UtensilsCrossed",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=n("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=n("UtilityPole",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"M2 5h20",key:"1fs1ex"}],["path",{d:"M3 3v2",key:"9imdir"}],["path",{d:"M7 3v2",key:"n0os7"}],["path",{d:"M17 3v2",key:"1l2re6"}],["path",{d:"M21 3v2",key:"1duuac"}],["path",{d:"m19 5-7 7-7-7",key:"133zxf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=n("Variable",[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=n("Vault",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}],["path",{d:"m7.9 7.9 2.7 2.7",key:"hpeyl3"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}],["path",{d:"m13.4 10.6 2.7-2.7",key:"264c1n"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor",key:"nkw3mc"}],["path",{d:"m7.9 16.1 2.7-2.7",key:"p81g5e"}],["circle",{cx:"16.5",cy:"16.5",r:".5",fill:"currentColor",key:"fubopw"}],["path",{d:"m13.4 13.4 2.7 2.7",key:"abhel3"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=n("Vegan",[["path",{d:"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14",key:"qiv7li"}],["path",{d:"M16 8c4 0 6-2 6-6-4 0-6 2-6 6",key:"n7eohy"}],["path",{d:"M17.41 3.6a10 10 0 1 0 3 3",key:"1dion0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=n("VenetianMask",[["path",{d:"M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z",key:"1g6z3j"}],["path",{d:"M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z",key:"c2lwnf"}],["path",{d:"M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z",key:"njd9zo"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=n("VibrateOff",[["path",{d:"m2 8 2 2-2 2 2 2-2 2",key:"sv1b1"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2",key:"101i4y"}],["path",{d:"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2",key:"1hbad5"}],["path",{d:"M16 10.34V6c0-.55-.45-1-1-1h-4.34",key:"1x5tf0"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=n("Vibrate",[["path",{d:"m2 8 2 2-2 2 2 2-2 2",key:"sv1b1"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2",key:"101i4y"}],["rect",{width:"8",height:"14",x:"8",y:"5",rx:"1",key:"1oyrl4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=n("VideoOff",[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8",key:"ubwiq0"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z",key:"1l10zd"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=n("Video",[["path",{d:"m22 8-6 4 6 4V8Z",key:"50v9me"}],["rect",{width:"14",height:"12",x:"2",y:"6",rx:"2",ry:"2",key:"1rqjg6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=n("Videotape",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M2 8h20",key:"d11cs7"}],["circle",{cx:"8",cy:"14",r:"2",key:"1k2qr5"}],["path",{d:"M8 12h8",key:"1wcyev"}],["circle",{cx:"16",cy:"14",r:"2",key:"14k7lr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=n("View",[["path",{d:"M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z",key:"vptub8"}],["path",{d:"M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",key:"10lhjs"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2",key:"mrq65r"}],["path",{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2",key:"be3xqs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=n("Voicemail",[["circle",{cx:"6",cy:"12",r:"4",key:"1ehtga"}],["circle",{cx:"18",cy:"12",r:"4",key:"4vafl8"}],["line",{x1:"6",x2:"18",y1:"16",y2:"16",key:"pmt8us"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=n("Volume1",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=n("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=n("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=n("Volume",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=n("Vote",[["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}],["path",{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z",key:"1ezoue"}],["path",{d:"M22 19H2",key:"nuriw5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=n("Wallet2",[["path",{d:"M17 14h.01",key:"7oqj8z"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14",key:"u1rqew"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=n("WalletCards",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2",key:"4125el"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",key:"1dpki6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=n("Wallet",[["path",{d:"M21 12V7H5a2 2 0 0 1 0-4h14v4",key:"195gfw"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h16v-5",key:"195n9w"}],["path",{d:"M18 12a2 2 0 0 0 0 4h4v-4Z",key:"vllfpd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=n("Wallpaper",[["circle",{cx:"8",cy:"9",r:"2",key:"gjzl9d"}],["path",{d:"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2",key:"69xh40"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=n("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=n("Wand",[["path",{d:"M15 4V2",key:"z1p9b7"}],["path",{d:"M15 16v-2",key:"px0unx"}],["path",{d:"M8 9h2",key:"1g203m"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M17.8 11.8 19 13",key:"yihg8r"}],["path",{d:"M15 9h0",key:"kg5t1u"}],["path",{d:"M17.8 6.2 19 5",key:"fd4us0"}],["path",{d:"m3 21 9-9",key:"1jfql5"}],["path",{d:"M12.2 6.2 11 5",key:"i3da3b"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=n("Warehouse",[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",key:"gksnxg"}],["path",{d:"M6 18h12",key:"9pbo8z"}],["path",{d:"M6 14h12",key:"4cwo0f"}],["rect",{width:"12",height:"12",x:"6",y:"10",key:"apd30q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=n("WashingMachine",[["path",{d:"M3 6h3",key:"155dbl"}],["path",{d:"M17 6h.01",key:"e2y6kg"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2",key:"od3kk9"}],["circle",{cx:"12",cy:"13",r:"5",key:"nlbqau"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5",key:"17lach"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=n("Watch",[["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["polyline",{points:"12 10 12 12 13 13",key:"19dquz"}],["path",{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05",key:"18k57s"}],["path",{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05",key:"16ny36"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=n("Waves",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=n("Waypoints",[["circle",{cx:"12",cy:"4.5",r:"2.5",key:"r5ysbb"}],["path",{d:"m10.2 6.3-3.9 3.9",key:"1nzqf6"}],["circle",{cx:"4.5",cy:"12",r:"2.5",key:"jydg6v"}],["path",{d:"M7 12h10",key:"b7w52i"}],["circle",{cx:"19.5",cy:"12",r:"2.5",key:"1piiel"}],["path",{d:"m13.8 17.7 3.9-3.9",key:"1wyg1y"}],["circle",{cx:"12",cy:"19.5",r:"2.5",key:"13o1pw"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=n("Webcam",[["circle",{cx:"12",cy:"10",r:"8",key:"1gshiw"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 22h10",key:"10w4w3"}],["path",{d:"M12 22v-4",key:"1utk9m"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=n("WebhookOff",[["path",{d:"M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15",key:"1tvl6x"}],["path",{d:"M9 3.4a4 4 0 0 1 6.52.66",key:"q04jfq"}],["path",{d:"m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05",key:"azowf0"}],["path",{d:"M20.3 20.3a4 4 0 0 1-2.3.7",key:"5joiws"}],["path",{d:"M18.6 13a4 4 0 0 1 3.357 3.414",key:"cangb8"}],["path",{d:"m12 6 .6 1",key:"tpjl1n"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=n("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=n("Weight",[["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z",key:"56o5sh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=n("WheatOff",[["path",{d:"m2 22 10-10",key:"28ilpk"}],["path",{d:"m16 8-1.17 1.17",key:"1qqm82"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97",key:"4wz8re"}],["path",{d:"M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62",key:"rves66"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98",key:"ak46r"}],["path",{d:"M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28",key:"1tw520"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=n("Wheat",[["path",{d:"M2 22 16 8",key:"60hf96"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1sdzmb"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"eoatbi"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"2m8kc5"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"vex3ng"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=n("WholeWord",[["circle",{cx:"7",cy:"12",r:"3",key:"12clwm"}],["path",{d:"M10 9v6",key:"17i7lo"}],["circle",{cx:"17",cy:"12",r:"3",key:"gl7c2s"}],["path",{d:"M14 7v8",key:"dl84cr"}],["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",key:"lt2kga"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=n("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=n("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=n("Wind",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=n("WineOff",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h3m7 0h-1.343",key:"v48bem"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198",key:"1ymjlu"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=n("Wine",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z",key:"10ffi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=n("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=n("WrapText",[["line",{x1:"3",x2:"21",y1:"6",y2:"6",key:"4m8b97"}],["path",{d:"M3 12h15a3 3 0 1 1 0 6h-4",key:"1cl7v7"}],["polyline",{points:"16 16 14 18 16 20",key:"1jznyi"}],["line",{x1:"3",x2:"10",y1:"18",y2:"18",key:"1h33wv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=n("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=n("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=n("XOctagon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=n("XSquare",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=n("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=n("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=n("ZapOff",[["polyline",{points:"12.41 6.75 13 2 10.57 4.92",key:"122m05"}],["polyline",{points:"18.57 12.91 21 10 15.66 10",key:"16r43o"}],["polyline",{points:"8 8 3 14 12 14 11 22 16 16",key:"tmh4bc"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=n("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=n("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=n("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hz=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:r2,AArrowUp:o2,ALargeSmall:i2,Accessibility:l2,Activity:d2,ActivitySquare:c2,AirVent:s2,Airplay:h2,AlarmClock:u2,AlarmClockCheck:Xt,AlarmClockMinus:Qt,AlarmClockOff:y2,AlarmClockPlus:Jt,AlarmSmoke:p2,Album:k2,AlertCircle:g2,AlertOctagon:m2,AlertTriangle:An,AlignCenter:Pn,AlignCenterHorizontal:x2,AlignCenterVertical:f2,AlignEndHorizontal:v2,AlignEndVertical:M2,AlignHorizontalDistributeCenter:w2,AlignHorizontalDistributeEnd:L2,AlignHorizontalDistributeStart:b2,AlignHorizontalJustifyCenter:C2,AlignHorizontalJustifyEnd:S2,AlignHorizontalJustifyStart:I2,AlignHorizontalSpaceAround:j2,AlignHorizontalSpaceBetween:H2,AlignJustify:z2,AlignLeft:Dn,AlignRight:Nn,AlignStartHorizontal:q2,AlignStartVertical:A2,AlignVerticalDistributeCenter:P2,AlignVerticalDistributeEnd:D2,AlignVerticalDistributeStart:N2,AlignVerticalJustifyCenter:T2,AlignVerticalJustifyEnd:V2,AlignVerticalJustifyStart:F2,AlignVerticalSpaceAround:E2,AlignVerticalSpaceBetween:B2,Ambulance:R2,Ampersand:O2,Ampersands:U2,Anchor:$2,Angry:_2,Annoyed:Z2,Antenna:W2,Anvil:G2,Aperture:K2,AppWindow:X2,Apple:Q2,Archive:eo,ArchiveRestore:J2,ArchiveX:Y2,AreaChart:to,Armchair:ao,ArrowBigDown:ro,ArrowBigDownDash:no,ArrowBigLeft:io,ArrowBigLeftDash:oo,ArrowBigRight:co,ArrowBigRightDash:lo,ArrowBigUp:ho,ArrowBigUpDash:so,ArrowDown:Ho,ArrowDown01:yo,ArrowDown10:uo,ArrowDownAZ:Yt,ArrowDownCircle:po,ArrowDownFromLine:ko,ArrowDownLeft:fo,ArrowDownLeftFromCircle:go,ArrowDownLeftFromSquare:mo,ArrowDownLeftSquare:xo,ArrowDownNarrowWide:vo,ArrowDownRight:bo,ArrowDownRightFromCircle:Mo,ArrowDownRightFromSquare:wo,ArrowDownRightSquare:Lo,ArrowDownSquare:Co,ArrowDownToDot:So,ArrowDownToLine:Io,ArrowDownUp:jo,ArrowDownWideNarrow:e1,ArrowDownZA:t1,ArrowLeft:vt,ArrowLeftCircle:zo,ArrowLeftFromLine:qo,ArrowLeftRight:Ao,ArrowLeftSquare:Po,ArrowLeftToLine:Do,ArrowRight:ma,ArrowRightCircle:No,ArrowRightFromLine:To,ArrowRightLeft:Vo,ArrowRightSquare:Fo,ArrowRightToLine:Eo,ArrowUp:ni,ArrowUp01:Bo,ArrowUp10:Ro,ArrowUpAZ:a1,ArrowUpCircle:Oo,ArrowUpDown:Uo,ArrowUpFromDot:$o,ArrowUpFromLine:_o,ArrowUpLeft:Ko,ArrowUpLeftFromCircle:Zo,ArrowUpLeftFromSquare:Wo,ArrowUpLeftSquare:Go,ArrowUpNarrowWide:n1,ArrowUpRight:Yo,ArrowUpRightFromCircle:Xo,ArrowUpRightFromSquare:Qo,ArrowUpRightSquare:Jo,ArrowUpSquare:ei,ArrowUpToLine:ti,ArrowUpWideNarrow:ai,ArrowUpZA:r1,ArrowsUpFromLine:ri,Asterisk:oi,AsteriskSquare:o1,AtSign:ii,Atom:li,AudioLines:ci,AudioWaveform:di,Award:Tn,Axe:si,Axis3d:i1,Baby:hi,Backpack:yi,Badge:ji,BadgeAlert:ui,BadgeCent:pi,BadgeCheck:l1,BadgeDollarSign:ki,BadgeEuro:gi,BadgeHelp:mi,BadgeIndianRupee:xi,BadgeInfo:fi,BadgeJapaneseYen:vi,BadgeMinus:Mi,BadgePercent:wi,BadgePlus:Li,BadgePoundSterling:bi,BadgeRussianRuble:Ci,BadgeSwissFranc:Si,BadgeX:Ii,BaggageClaim:Hi,Ban:zi,Banana:qi,Banknote:Ai,BarChart:Ei,BarChart2:Pi,BarChart3:Di,BarChart4:Ni,BarChartBig:Ti,BarChartHorizontal:Fi,BarChartHorizontalBig:Vi,Barcode:Bi,Baseline:Ri,Bath:Oi,Battery:Gi,BatteryCharging:Ui,BatteryFull:$i,BatteryLow:_i,BatteryMedium:Zi,BatteryWarning:Wi,Beaker:Ki,Bean:Qi,BeanOff:Xi,Bed:e0,BedDouble:Ji,BedSingle:Yi,Beef:t0,Beer:a0,Bell:d0,BellDot:n0,BellElectric:r0,BellMinus:o0,BellOff:i0,BellPlus:l0,BellRing:c0,BetweenHorizontalEnd:c1,BetweenHorizontalStart:d1,BetweenVerticalEnd:s0,BetweenVerticalStart:h0,Bike:y0,Binary:u0,Biohazard:p0,Bird:k0,Bitcoin:g0,Blend:m0,Blinds:x0,Blocks:f0,Bluetooth:L0,BluetoothConnected:v0,BluetoothOff:M0,BluetoothSearching:w0,Bold:Vn,Bolt:b0,Bomb:C0,Bone:S0,Book:Fn,BookA:I0,BookAudio:j0,BookCheck:H0,BookCopy:z0,BookDashed:s1,BookDown:q0,BookHeadphones:A0,BookHeart:P0,BookImage:D0,BookKey:N0,BookLock:T0,BookMarked:V0,BookMinus:F0,BookOpen:dt,BookOpenCheck:E0,BookOpenText:B0,BookPlus:R0,BookText:O0,BookType:U0,BookUp:_0,BookUp2:$0,BookUser:Z0,BookX:W0,Bookmark:J0,BookmarkCheck:G0,BookmarkMinus:K0,BookmarkPlus:X0,BookmarkX:Q0,BoomBox:Y0,Bot:tl,BotMessageSquare:el,Box:nl,BoxSelect:al,Boxes:rl,Braces:h1,Brackets:ol,Brain:cl,BrainCircuit:il,BrainCog:ll,BrickWall:dl,Briefcase:sl,BringToFront:hl,Brush:yl,Bug:kl,BugOff:ul,BugPlay:pl,Building:ml,Building2:gl,Bus:fl,BusFront:xl,Cable:Ml,CableCar:vl,Cake:Ll,CakeSlice:wl,Calculator:bl,Calendar:Bl,CalendarCheck:Sl,CalendarCheck2:Cl,CalendarClock:Il,CalendarDays:jl,CalendarFold:Hl,CalendarHeart:zl,CalendarMinus:Al,CalendarMinus2:ql,CalendarOff:Pl,CalendarPlus:Nl,CalendarPlus2:Dl,CalendarRange:Tl,CalendarSearch:Vl,CalendarX:El,CalendarX2:Fl,Camera:Ol,CameraOff:Rl,CandlestickChart:Ul,Candy:Zl,CandyCane:$l,CandyOff:_l,Captions:y1,CaptionsOff:Wl,Car:Xl,CarFront:Gl,CarTaxiFront:Kl,Caravan:Ql,Carrot:Jl,CaseLower:Yl,CaseSensitive:ec,CaseUpper:tc,CassetteTape:ac,Cast:nc,Castle:rc,Cat:oc,Cctv:ic,Check:hc,CheckCheck:lc,CheckCircle:st,CheckCircle2:cc,CheckSquare:sc,CheckSquare2:dc,ChefHat:yc,Cherry:uc,ChevronDown:gc,ChevronDownCircle:pc,ChevronDownSquare:kc,ChevronFirst:mc,ChevronLast:xc,ChevronLeft:Mc,ChevronLeftCircle:fc,ChevronLeftSquare:vc,ChevronRight:En,ChevronRightCircle:wc,ChevronRightSquare:Lc,ChevronUp:Sc,ChevronUpCircle:bc,ChevronUpSquare:Cc,ChevronsDown:jc,ChevronsDownUp:Ic,ChevronsLeft:zc,ChevronsLeftRight:Hc,ChevronsRight:Ac,ChevronsRightLeft:qc,ChevronsUp:Dc,ChevronsUpDown:Pc,Chrome:Nc,Church:Tc,Cigarette:Fc,CigaretteOff:Vc,Circle:Gc,CircleDashed:Ec,CircleDollarSign:Bc,CircleDot:Oc,CircleDotDashed:Rc,CircleEllipsis:Uc,CircleEqual:$c,CircleFadingPlus:_c,CircleOff:Zc,CircleSlash:Wc,CircleSlash2:u1,CircleUser:k1,CircleUserRound:p1,CircuitBoard:Kc,Citrus:Xc,Clapperboard:Qc,Clipboard:id,ClipboardCheck:Jc,ClipboardCopy:Yc,ClipboardList:ed,ClipboardMinus:td,ClipboardPaste:ad,ClipboardPen:m1,ClipboardPenLine:g1,ClipboardPlus:nd,ClipboardType:rd,ClipboardX:od,Clock:fd,Clock1:ld,Clock10:cd,Clock11:dd,Clock12:sd,Clock2:hd,Clock3:yd,Clock4:ud,Clock5:pd,Clock6:kd,Clock7:gd,Clock8:md,Clock9:xd,Cloud:Pd,CloudCog:vd,CloudDrizzle:Md,CloudFog:wd,CloudHail:Ld,CloudLightning:bd,CloudMoon:Sd,CloudMoonRain:Cd,CloudOff:Id,CloudRain:Hd,CloudRainWind:jd,CloudSnow:zd,CloudSun:Ad,CloudSunRain:qd,Cloudy:Dd,Clover:Nd,Club:Td,Code:Fd,Code2:Vd,CodeSquare:x1,Codepen:Ed,Codesandbox:Bd,Coffee:Rd,Cog:Od,Coins:Ud,Columns2:f1,Columns3:v1,Columns4:$d,Combine:_d,Command:Zd,Compass:Wd,Component:Gd,Computer:Kd,ConciergeBell:Xd,Cone:Qd,Construction:Jd,Contact:es,Contact2:Yd,Container:ts,Contrast:as,Cookie:ns,CookingPot:rs,Copy:ss,CopyCheck:os,CopyMinus:is,CopyPlus:ls,CopySlash:cs,CopyX:ds,Copyleft:hs,Copyright:ys,CornerDownLeft:us,CornerDownRight:ps,CornerLeftDown:ks,CornerLeftUp:gs,CornerRightDown:ms,CornerRightUp:xs,CornerUpLeft:fs,CornerUpRight:vs,Cpu:Ms,CreativeCommons:ws,CreditCard:Ls,Croissant:bs,Crop:Cs,Cross:Ss,Crosshair:Is,Crown:js,Cuboid:Hs,CupSoda:zs,Currency:qs,Cylinder:As,Database:Ns,DatabaseBackup:Ps,DatabaseZap:Ds,Delete:Ts,Dessert:Vs,Diameter:Fs,Diamond:Es,Dice1:Bs,Dice2:Rs,Dice3:Os,Dice4:Us,Dice5:$s,Dice6:_s,Dices:Zs,Diff:Ws,Disc:Qs,Disc2:Gs,Disc3:Ks,DiscAlbum:Xs,Divide:eh,DivideCircle:Js,DivideSquare:Ys,Dna:ah,DnaOff:th,Dog:nh,DollarSign:rh,Donut:oh,DoorClosed:ih,DoorOpen:lh,Dot:ch,DotSquare:M1,Download:sh,DownloadCloud:dh,DraftingCompass:hh,Drama:yh,Dribbble:uh,Drill:ph,Droplet:kh,Droplets:gh,Drum:mh,Drumstick:xh,Dumbbell:fh,Ear:Mh,EarOff:vh,Earth:w1,EarthLock:wh,Eclipse:Lh,Egg:Sh,EggFried:bh,EggOff:Ch,Equal:jh,EqualNot:Ih,EqualSquare:L1,Eraser:Hh,Euro:zh,Expand:qh,ExternalLink:Ah,Eye:Wa,EyeOff:Bn,Facebook:Ph,Factory:Dh,Fan:Nh,FastForward:Th,Feather:Vh,Fence:Fh,FerrisWheel:Eh,Figma:Bh,File:Ey,FileArchive:Rh,FileAudio:Uh,FileAudio2:Oh,FileAxis3d:b1,FileBadge:_h,FileBadge2:$h,FileBarChart:Wh,FileBarChart2:Zh,FileBox:Gh,FileCheck:Xh,FileCheck2:Kh,FileClock:Qh,FileCode:Yh,FileCode2:Jh,FileCog:C1,FileDiff:ey,FileDigit:ty,FileDown:ay,FileHeart:ny,FileImage:ry,FileInput:oy,FileJson:ly,FileJson2:iy,FileKey:dy,FileKey2:cy,FileLineChart:sy,FileLock:yy,FileLock2:hy,FileMinus:py,FileMinus2:uy,FileMusic:ky,FileOutput:gy,FilePen:I1,FilePenLine:S1,FilePieChart:my,FilePlus:fy,FilePlus2:xy,FileQuestion:vy,FileScan:My,FileSearch:Ly,FileSearch2:wy,FileSliders:by,FileSpreadsheet:Cy,FileStack:Sy,FileSymlink:Iy,FileTerminal:jy,FileText:Rn,FileType:zy,FileType2:Hy,FileUp:qy,FileVideo:Py,FileVideo2:Ay,FileVolume:Ny,FileVolume2:Dy,FileWarning:Ty,FileX:Fy,FileX2:Vy,Files:By,Film:Ry,Filter:Uy,FilterX:Oy,Fingerprint:$y,FireExtinguisher:_y,Fish:Gy,FishOff:Zy,FishSymbol:Wy,Flag:Jy,FlagOff:Ky,FlagTriangleLeft:Xy,FlagTriangleRight:Qy,Flame:eu,FlameKindling:Yy,Flashlight:au,FlashlightOff:tu,FlaskConical:ru,FlaskConicalOff:nu,FlaskRound:ou,FlipHorizontal:lu,FlipHorizontal2:iu,FlipVertical:du,FlipVertical2:cu,Flower:hu,Flower2:su,Focus:yu,FoldHorizontal:uu,FoldVertical:pu,Folder:Ru,FolderArchive:ku,FolderCheck:gu,FolderClock:mu,FolderClosed:xu,FolderCog:j1,FolderDot:fu,FolderDown:vu,FolderGit:wu,FolderGit2:Mu,FolderHeart:Lu,FolderInput:bu,FolderKanban:Cu,FolderKey:Su,FolderLock:Iu,FolderMinus:ju,FolderOpen:zu,FolderOpenDot:Hu,FolderOutput:qu,FolderPen:H1,FolderPlus:Au,FolderRoot:Pu,FolderSearch:Nu,FolderSearch2:Du,FolderSymlink:Tu,FolderSync:Vu,FolderTree:Fu,FolderUp:Eu,FolderX:Bu,Folders:Ou,Footprints:Uu,Forklift:$u,FormInput:_u,Forward:Zu,Frame:Wu,Framer:Gu,Frown:Ku,Fuel:Xu,Fullscreen:Qu,FunctionSquare:Ju,GalleryHorizontal:ep,GalleryHorizontalEnd:Yu,GalleryThumbnails:tp,GalleryVertical:np,GalleryVerticalEnd:ap,Gamepad:op,Gamepad2:rp,GanttChart:ip,GanttChartSquare:at,Gauge:cp,GaugeCircle:lp,Gavel:dp,Gem:sp,Ghost:hp,Gift:yp,GitBranch:pp,GitBranchPlus:up,GitCommitHorizontal:z1,GitCommitVertical:kp,GitCompare:mp,GitCompareArrows:gp,GitFork:xp,GitGraph:fp,GitMerge:vp,GitPullRequest:Sp,GitPullRequestArrow:Mp,GitPullRequestClosed:wp,GitPullRequestCreate:bp,GitPullRequestCreateArrow:Lp,GitPullRequestDraft:Cp,Github:Ip,Gitlab:jp,GlassWater:Hp,Glasses:zp,Globe:Ga,GlobeLock:qp,Goal:Ap,Grab:Pp,GraduationCap:Dp,Grape:Np,Grid2x2:q1,Grid3x3:nt,Grip:Vp,GripHorizontal:Tp,GripVertical:Ka,Group:Fp,Guitar:Ep,Hammer:Bp,Hand:_p,HandCoins:Rp,HandHeart:Op,HandHelping:A1,HandMetal:Up,HandPlatter:$p,Handshake:Zp,HardDrive:Kp,HardDriveDownload:Wp,HardDriveUpload:Gp,HardHat:Xp,Hash:Qp,Haze:Jp,HdmiPort:Yp,Heading:ik,Heading1:ek,Heading2:tk,Heading3:ak,Heading4:nk,Heading5:rk,Heading6:ok,Headphones:lk,Headset:ck,Heart:uk,HeartCrack:dk,HeartHandshake:sk,HeartOff:hk,HeartPulse:yk,Heater:pk,HelpCircle:On,Hexagon:kk,Highlighter:Un,History:gk,Home:mk,Hop:fk,HopOff:xk,Hotel:vk,Hourglass:Mk,IceCream:Lk,IceCream2:wk,Image:Hk,ImageDown:bk,ImageMinus:Ck,ImageOff:Sk,ImagePlus:Ik,ImageUp:jk,Images:zk,Import:qk,Inbox:Ak,Indent:Pk,IndianRupee:Dk,Infinity:Nk,Info:Tk,InspectionPanel:Vk,Instagram:Fk,Italic:$n,IterationCcw:Ek,IterationCw:Bk,JapaneseYen:Rk,Joystick:Ok,Kanban:Uk,KanbanSquare:D1,KanbanSquareDashed:P1,Key:Zk,KeyRound:$k,KeySquare:_k,Keyboard:Gk,KeyboardMusic:Wk,Lamp:e4,LampCeiling:Kk,LampDesk:Xk,LampFloor:Qk,LampWallDown:Jk,LampWallUp:Yk,LandPlot:t4,Landmark:a4,Languages:n4,Laptop:o4,Laptop2:r4,Lasso:l4,LassoSelect:i4,Laugh:c4,Layers:h4,Layers2:d4,Layers3:s4,LayoutDashboard:y4,LayoutGrid:u4,LayoutList:p4,LayoutPanelLeft:k4,LayoutPanelTop:g4,LayoutTemplate:m4,Leaf:x4,LeafyGreen:f4,Library:w4,LibraryBig:v4,LibrarySquare:M4,LifeBuoy:L4,Ligature:b4,Lightbulb:S4,LightbulbOff:C4,LineChart:I4,Link:z4,Link2:H4,Link2Off:j4,Linkedin:q4,List:Xa,ListChecks:A4,ListCollapse:P4,ListEnd:D4,ListFilter:N4,ListMinus:T4,ListMusic:V4,ListOrdered:_n,ListPlus:F4,ListRestart:E4,ListStart:B4,ListTodo:R4,ListTree:O4,ListVideo:U4,ListX:$4,Loader:_4,Loader2:Zn,Locate:G4,LocateFixed:Z4,LocateOff:W4,Lock:Wn,LockKeyhole:K4,LogIn:Gn,LogOut:Kn,Lollipop:X4,Luggage:Q4,MSquare:J4,Magnet:Y4,Mail:c5,MailCheck:e5,MailMinus:t5,MailOpen:a5,MailPlus:n5,MailQuestion:r5,MailSearch:o5,MailWarning:i5,MailX:l5,Mailbox:d5,Mails:s5,Map:p5,MapPin:y5,MapPinOff:h5,MapPinned:u5,Martini:k5,Maximize:m5,Maximize2:g5,Medal:x5,Megaphone:v5,MegaphoneOff:f5,Meh:M5,MemoryStick:w5,Menu:b5,MenuSquare:L5,Merge:C5,MessageCircle:T5,MessageCircleCode:S5,MessageCircleDashed:I5,MessageCircleHeart:j5,MessageCircleMore:H5,MessageCircleOff:z5,MessageCirclePlus:q5,MessageCircleQuestion:A5,MessageCircleReply:P5,MessageCircleWarning:D5,MessageCircleX:N5,MessageSquare:Q5,MessageSquareCode:V5,MessageSquareDashed:F5,MessageSquareDiff:E5,MessageSquareDot:B5,MessageSquareHeart:R5,MessageSquareMore:O5,MessageSquareOff:U5,MessageSquarePlus:$5,MessageSquareQuote:_5,MessageSquareReply:Z5,MessageSquareShare:W5,MessageSquareText:G5,MessageSquareWarning:K5,MessageSquareX:X5,MessagesSquare:J5,Mic:t3,Mic2:Y5,MicOff:e3,Microscope:a3,Microwave:n3,Milestone:r3,Milk:i3,MilkOff:o3,Minimize:c3,Minimize2:l3,Minus:h3,MinusCircle:d3,MinusSquare:s3,Monitor:L3,MonitorCheck:y3,MonitorDot:u3,MonitorDown:p3,MonitorOff:k3,MonitorPause:g3,MonitorPlay:m3,MonitorSmartphone:x3,MonitorSpeaker:f3,MonitorStop:v3,MonitorUp:M3,MonitorX:w3,Moon:Xn,MoonStar:b3,MoreHorizontal:C3,MoreVertical:S3,Mountain:j3,MountainSnow:I3,Mouse:P3,MousePointer:A3,MousePointer2:H3,MousePointerClick:z3,MousePointerSquare:N1,MousePointerSquareDashed:q3,Move:xa,Move3d:T1,MoveDiagonal:N3,MoveDiagonal2:D3,MoveDown:F3,MoveDownLeft:T3,MoveDownRight:V3,MoveHorizontal:E3,MoveLeft:B3,MoveRight:R3,MoveUp:$3,MoveUpLeft:O3,MoveUpRight:U3,MoveVertical:_3,Music:K3,Music2:Z3,Music3:W3,Music4:G3,Navigation:Y3,Navigation2:Q3,Navigation2Off:X3,NavigationOff:J3,Network:e6,Newspaper:t6,Nfc:a6,Notebook:i6,NotebookPen:n6,NotebookTabs:r6,NotebookText:o6,NotepadText:c6,NotepadTextDashed:l6,Nut:s6,NutOff:d6,Octagon:h6,Option:y6,Orbit:u6,Outdent:p6,Package:w6,Package2:k6,PackageCheck:g6,PackageMinus:m6,PackageOpen:x6,PackagePlus:f6,PackageSearch:v6,PackageX:M6,PaintBucket:L6,PaintRoller:b6,Paintbrush:S6,Paintbrush2:C6,Palette:Qn,Palmtree:I6,PanelBottom:z6,PanelBottomClose:j6,PanelBottomDashed:V1,PanelBottomOpen:H6,PanelLeft:R1,PanelLeftClose:F1,PanelLeftDashed:E1,PanelLeftOpen:B1,PanelRight:P6,PanelRightClose:q6,PanelRightDashed:O1,PanelRightOpen:A6,PanelTop:T6,PanelTopClose:D6,PanelTopDashed:U1,PanelTopOpen:N6,PanelsLeftBottom:V6,PanelsRightBottom:F6,PanelsTopLeft:$1,Paperclip:E6,Parentheses:B6,ParkingCircle:O6,ParkingCircleOff:R6,ParkingMeter:U6,ParkingSquare:_6,ParkingSquareOff:$6,PartyPopper:Z6,Pause:K6,PauseCircle:W6,PauseOctagon:G6,PawPrint:X6,PcCase:Q6,Pen:Z1,PenLine:_1,PenTool:Jn,Pencil:eg,PencilLine:J6,PencilRuler:Y6,Pentagon:tg,Percent:og,PercentCircle:ag,PercentDiamond:ng,PercentSquare:rg,PersonStanding:ig,Phone:ug,PhoneCall:lg,PhoneForwarded:cg,PhoneIncoming:dg,PhoneMissed:sg,PhoneOff:hg,PhoneOutgoing:yg,Pi:kg,PiSquare:pg,Piano:gg,Pickaxe:mg,PictureInPicture:fg,PictureInPicture2:xg,PieChart:vg,PiggyBank:Mg,Pilcrow:Lg,PilcrowSquare:wg,Pill:bg,Pin:Sg,PinOff:Cg,Pipette:Ig,Pizza:jg,Plane:qg,PlaneLanding:Hg,PlaneTakeoff:zg,Play:Dg,PlayCircle:Ag,PlaySquare:Pg,Plug:Fg,Plug2:Ng,PlugZap:Vg,PlugZap2:Tg,Plus:it,PlusCircle:Eg,PlusSquare:Bg,Pocket:Og,PocketKnife:Rg,Podcast:Ug,Pointer:_g,PointerOff:$g,Popcorn:Zg,Popsicle:Wg,PoundSterling:Gg,Power:Jg,PowerCircle:Kg,PowerOff:Xg,PowerSquare:Qg,Presentation:Yg,Printer:e8,Projector:t8,Puzzle:a8,Pyramid:n8,QrCode:r8,Quote:o8,Rabbit:i8,Radar:l8,Radiation:c8,Radical:d8,Radio:y8,RadioReceiver:s8,RadioTower:h8,Radius:u8,RailSymbol:p8,Rainbow:k8,Rat:g8,Ratio:m8,Receipt:S8,ReceiptCent:x8,ReceiptEuro:f8,ReceiptIndianRupee:v8,ReceiptJapaneseYen:M8,ReceiptPoundSterling:w8,ReceiptRussianRuble:L8,ReceiptSwissFranc:b8,ReceiptText:C8,RectangleHorizontal:I8,RectangleVertical:j8,Recycle:H8,Redo:A8,Redo2:z8,RedoDot:q8,RefreshCcw:D8,RefreshCcwDot:P8,RefreshCw:T8,RefreshCwOff:N8,Refrigerator:V8,Regex:F8,RemoveFormatting:E8,Repeat:O8,Repeat1:B8,Repeat2:R8,Replace:$8,ReplaceAll:U8,Reply:Z8,ReplyAll:_8,Rewind:W8,Ribbon:G8,Rocket:K8,RockingChair:X8,RollerCoaster:Q8,Rotate3d:W1,RotateCcw:Yn,RotateCw:J8,Route:em,RouteOff:Y8,Router:tm,Rows2:G1,Rows3:K1,Rows4:am,Rss:nm,Ruler:rm,RussianRuble:om,Sailboat:im,Salad:lm,Sandwich:cm,Satellite:sm,SatelliteDish:dm,Save:xt,SaveAll:hm,Scale:ym,Scale3d:X1,Scaling:um,Scan:vm,ScanBarcode:pm,ScanEye:km,ScanFace:gm,ScanLine:mm,ScanSearch:xm,ScanText:fm,ScatterChart:Mm,School:Lm,School2:wm,Scissors:Im,ScissorsLineDashed:bm,ScissorsSquare:Sm,ScissorsSquareDashedBottom:Cm,ScreenShare:Hm,ScreenShareOff:jm,Scroll:qm,ScrollText:zm,Search:Tm,SearchCheck:Am,SearchCode:Pm,SearchSlash:Dm,SearchX:Nm,Send:Fm,SendHorizontal:Q1,SendToBack:Vm,SeparatorHorizontal:Em,SeparatorVertical:Bm,Server:$m,ServerCog:Rm,ServerCrash:Om,ServerOff:Um,Settings:er,Settings2:_m,Shapes:Zm,Share:Gm,Share2:Wm,Sheet:Km,Shell:Xm,Shield:ix,ShieldAlert:Qm,ShieldBan:Jm,ShieldCheck:Ym,ShieldEllipsis:ex,ShieldHalf:tx,ShieldMinus:ax,ShieldOff:nx,ShieldPlus:rx,ShieldQuestion:ox,ShieldX:J1,Ship:cx,ShipWheel:lx,Shirt:dx,ShoppingBag:sx,ShoppingBasket:hx,ShoppingCart:yx,Shovel:ux,ShowerHead:px,Shrink:kx,Shrub:gx,Shuffle:mx,Sigma:fx,SigmaSquare:xx,Signal:bx,SignalHigh:vx,SignalLow:Mx,SignalMedium:wx,SignalZero:Lx,Signpost:Sx,SignpostBig:Cx,Siren:Ix,SkipBack:jx,SkipForward:Hx,Skull:zx,Slack:qx,Slash:Ax,SlashSquare:Y1,Slice:Px,Sliders:Nx,SlidersHorizontal:Dx,Smartphone:Fx,SmartphoneCharging:Tx,SmartphoneNfc:Vx,Smile:Bx,SmilePlus:Ex,Snail:Rx,Snowflake:Ox,Sofa:Ux,Soup:$x,Space:_x,Spade:Zx,Sparkle:Wx,Sparkles:ea,Speaker:Gx,Speech:Kx,SpellCheck:Qx,SpellCheck2:Xx,Spline:Jx,Split:t7,SplitSquareHorizontal:Yx,SplitSquareVertical:e7,SprayCan:a7,Sprout:n7,Square:c7,SquareDashedBottom:o7,SquareDashedBottomCode:r7,SquarePen:Se,SquareRadical:i7,SquareStack:l7,SquareUser:aa,SquareUserRound:ta,Squircle:d7,Squirrel:s7,Stamp:h7,Star:p7,StarHalf:y7,StarOff:u7,StepBack:k7,StepForward:g7,Stethoscope:m7,Sticker:x7,StickyNote:f7,StopCircle:v7,Store:M7,StretchHorizontal:w7,StretchVertical:L7,Strikethrough:b7,Subscript:C7,Sun:tr,SunDim:S7,SunMedium:I7,SunMoon:j7,SunSnow:H7,Sunrise:z7,Sunset:q7,Superscript:A7,SwatchBook:P7,SwissFranc:D7,SwitchCamera:N7,Sword:T7,Swords:V7,Syringe:F7,Table:_7,Table2:E7,TableCellsMerge:B7,TableCellsSplit:R7,TableColumnsSplit:O7,TableProperties:U7,TableRowsSplit:$7,Tablet:W7,TabletSmartphone:Z7,Tablets:G7,Tag:K7,Tags:X7,Tally1:Q7,Tally2:J7,Tally3:Y7,Tally4:ef,Tally5:tf,Tangent:af,Target:nf,Telescope:rf,Tent:lf,TentTree:of,Terminal:df,TerminalSquare:cf,TestTube:hf,TestTube2:sf,TestTubes:yf,Text:mf,TextCursor:pf,TextCursorInput:uf,TextQuote:kf,TextSearch:gf,TextSelect:na,Theater:xf,Thermometer:Mf,ThermometerSnowflake:ff,ThermometerSun:vf,ThumbsDown:wf,ThumbsUp:Lf,Ticket:zf,TicketCheck:bf,TicketMinus:Cf,TicketPercent:Sf,TicketPlus:If,TicketSlash:jf,TicketX:Hf,Timer:Pf,TimerOff:qf,TimerReset:Af,ToggleLeft:Df,ToggleRight:Nf,Tornado:Tf,Torus:Vf,Touchpad:Ef,TouchpadOff:Ff,TowerControl:Bf,ToyBrick:Rf,Tractor:Of,TrafficCone:Uf,TrainFront:_f,TrainFrontTunnel:$f,TrainTrack:Zf,TramFront:ra,Trash:Wf,Trash2:Xe,TreeDeciduous:Gf,TreePine:Kf,Trees:Xf,Trello:Qf,TrendingDown:Jf,TrendingUp:Yf,Triangle:tv,TriangleRight:ev,Trophy:av,Truck:nv,Turtle:rv,Tv:iv,Tv2:ov,Twitch:lv,Twitter:cv,Type:ar,Umbrella:sv,UmbrellaOff:dv,Underline:nr,Undo:uv,Undo2:hv,UndoDot:yv,UnfoldHorizontal:pv,UnfoldVertical:kv,Ungroup:gv,Unlink:xv,Unlink2:mv,Unlock:vv,UnlockKeyhole:fv,Unplug:Mv,Upload:Lv,UploadCloud:wv,Usb:bv,User:fa,UserCheck:Cv,UserCog:Sv,UserMinus:Iv,UserPlus:jv,UserRound:sa,UserRoundCheck:oa,UserRoundCog:ia,UserRoundMinus:la,UserRoundPlus:ca,UserRoundSearch:Hv,UserRoundX:da,UserSearch:zv,UserX:qv,Users:Av,UsersRound:ha,Utensils:Dv,UtensilsCrossed:Pv,UtilityPole:Nv,Variable:Tv,Vault:Vv,Vegan:Fv,VenetianMask:Ev,Vibrate:Rv,VibrateOff:Bv,Video:Uv,VideoOff:Ov,Videotape:$v,View:_v,Voicemail:Zv,Volume:Gv,Volume1:Wv,Volume2:Qa,VolumeX:Ja,Vote:Kv,Wallet:Jv,Wallet2:Xv,WalletCards:Qv,Wallpaper:Yv,Wand:tM,Wand2:eM,Warehouse:aM,WashingMachine:nM,Watch:rM,Waves:oM,Waypoints:iM,Webcam:lM,Webhook:dM,WebhookOff:cM,Weight:sM,Wheat:yM,WheatOff:hM,WholeWord:uM,Wifi:or,WifiOff:rr,Wind:pM,Wine:gM,WineOff:kM,Workflow:mM,WrapText:xM,Wrench:fM,X:Ya,XCircle:va,XOctagon:vM,XSquare:MM,Youtube:wM,Zap:bM,ZapOff:LM,ZoomIn:CM,ZoomOut:SM},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yz=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:r2,AArrowDownIcon:r2,AArrowUp:o2,AArrowUpIcon:o2,ALargeSmall:i2,ALargeSmallIcon:i2,Accessibility:l2,AccessibilityIcon:l2,Activity:d2,ActivityIcon:d2,ActivitySquare:c2,ActivitySquareIcon:c2,AirVent:s2,AirVentIcon:s2,Airplay:h2,AirplayIcon:h2,AlarmCheck:Xt,AlarmCheckIcon:Xt,AlarmClock:u2,AlarmClockCheck:Xt,AlarmClockCheckIcon:Xt,AlarmClockIcon:u2,AlarmClockMinus:Qt,AlarmClockMinusIcon:Qt,AlarmClockOff:y2,AlarmClockOffIcon:y2,AlarmClockPlus:Jt,AlarmClockPlusIcon:Jt,AlarmMinus:Qt,AlarmMinusIcon:Qt,AlarmPlus:Jt,AlarmPlusIcon:Jt,AlarmSmoke:p2,AlarmSmokeIcon:p2,Album:k2,AlbumIcon:k2,AlertCircle:g2,AlertCircleIcon:g2,AlertOctagon:m2,AlertOctagonIcon:m2,AlertTriangle:An,AlertTriangleIcon:An,AlignCenter:Pn,AlignCenterHorizontal:x2,AlignCenterHorizontalIcon:x2,AlignCenterIcon:Pn,AlignCenterVertical:f2,AlignCenterVerticalIcon:f2,AlignEndHorizontal:v2,AlignEndHorizontalIcon:v2,AlignEndVertical:M2,AlignEndVerticalIcon:M2,AlignHorizontalDistributeCenter:w2,AlignHorizontalDistributeCenterIcon:w2,AlignHorizontalDistributeEnd:L2,AlignHorizontalDistributeEndIcon:L2,AlignHorizontalDistributeStart:b2,AlignHorizontalDistributeStartIcon:b2,AlignHorizontalJustifyCenter:C2,AlignHorizontalJustifyCenterIcon:C2,AlignHorizontalJustifyEnd:S2,AlignHorizontalJustifyEndIcon:S2,AlignHorizontalJustifyStart:I2,AlignHorizontalJustifyStartIcon:I2,AlignHorizontalSpaceAround:j2,AlignHorizontalSpaceAroundIcon:j2,AlignHorizontalSpaceBetween:H2,AlignHorizontalSpaceBetweenIcon:H2,AlignJustify:z2,AlignJustifyIcon:z2,AlignLeft:Dn,AlignLeftIcon:Dn,AlignRight:Nn,AlignRightIcon:Nn,AlignStartHorizontal:q2,AlignStartHorizontalIcon:q2,AlignStartVertical:A2,AlignStartVerticalIcon:A2,AlignVerticalDistributeCenter:P2,AlignVerticalDistributeCenterIcon:P2,AlignVerticalDistributeEnd:D2,AlignVerticalDistributeEndIcon:D2,AlignVerticalDistributeStart:N2,AlignVerticalDistributeStartIcon:N2,AlignVerticalJustifyCenter:T2,AlignVerticalJustifyCenterIcon:T2,AlignVerticalJustifyEnd:V2,AlignVerticalJustifyEndIcon:V2,AlignVerticalJustifyStart:F2,AlignVerticalJustifyStartIcon:F2,AlignVerticalSpaceAround:E2,AlignVerticalSpaceAroundIcon:E2,AlignVerticalSpaceBetween:B2,AlignVerticalSpaceBetweenIcon:B2,Ambulance:R2,AmbulanceIcon:R2,Ampersand:O2,AmpersandIcon:O2,Ampersands:U2,AmpersandsIcon:U2,Anchor:$2,AnchorIcon:$2,Angry:_2,AngryIcon:_2,Annoyed:Z2,AnnoyedIcon:Z2,Antenna:W2,AntennaIcon:W2,Anvil:G2,AnvilIcon:G2,Aperture:K2,ApertureIcon:K2,AppWindow:X2,AppWindowIcon:X2,Apple:Q2,AppleIcon:Q2,Archive:eo,ArchiveIcon:eo,ArchiveRestore:J2,ArchiveRestoreIcon:J2,ArchiveX:Y2,ArchiveXIcon:Y2,AreaChart:to,AreaChartIcon:to,Armchair:ao,ArmchairIcon:ao,ArrowBigDown:ro,ArrowBigDownDash:no,ArrowBigDownDashIcon:no,ArrowBigDownIcon:ro,ArrowBigLeft:io,ArrowBigLeftDash:oo,ArrowBigLeftDashIcon:oo,ArrowBigLeftIcon:io,ArrowBigRight:co,ArrowBigRightDash:lo,ArrowBigRightDashIcon:lo,ArrowBigRightIcon:co,ArrowBigUp:ho,ArrowBigUpDash:so,ArrowBigUpDashIcon:so,ArrowBigUpIcon:ho,ArrowDown:Ho,ArrowDown01:yo,ArrowDown01Icon:yo,ArrowDown10:uo,ArrowDown10Icon:uo,ArrowDownAZ:Yt,ArrowDownAZIcon:Yt,ArrowDownAz:Yt,ArrowDownAzIcon:Yt,ArrowDownCircle:po,ArrowDownCircleIcon:po,ArrowDownFromLine:ko,ArrowDownFromLineIcon:ko,ArrowDownIcon:Ho,ArrowDownLeft:fo,ArrowDownLeftFromCircle:go,ArrowDownLeftFromCircleIcon:go,ArrowDownLeftFromSquare:mo,ArrowDownLeftFromSquareIcon:mo,ArrowDownLeftIcon:fo,ArrowDownLeftSquare:xo,ArrowDownLeftSquareIcon:xo,ArrowDownNarrowWide:vo,ArrowDownNarrowWideIcon:vo,ArrowDownRight:bo,ArrowDownRightFromCircle:Mo,ArrowDownRightFromCircleIcon:Mo,ArrowDownRightFromSquare:wo,ArrowDownRightFromSquareIcon:wo,ArrowDownRightIcon:bo,ArrowDownRightSquare:Lo,ArrowDownRightSquareIcon:Lo,ArrowDownSquare:Co,ArrowDownSquareIcon:Co,ArrowDownToDot:So,ArrowDownToDotIcon:So,ArrowDownToLine:Io,ArrowDownToLineIcon:Io,ArrowDownUp:jo,ArrowDownUpIcon:jo,ArrowDownWideNarrow:e1,ArrowDownWideNarrowIcon:e1,ArrowDownZA:t1,ArrowDownZAIcon:t1,ArrowDownZa:t1,ArrowDownZaIcon:t1,ArrowLeft:vt,ArrowLeftCircle:zo,ArrowLeftCircleIcon:zo,ArrowLeftFromLine:qo,ArrowLeftFromLineIcon:qo,ArrowLeftIcon:vt,ArrowLeftRight:Ao,ArrowLeftRightIcon:Ao,ArrowLeftSquare:Po,ArrowLeftSquareIcon:Po,ArrowLeftToLine:Do,ArrowLeftToLineIcon:Do,ArrowRight:ma,ArrowRightCircle:No,ArrowRightCircleIcon:No,ArrowRightFromLine:To,ArrowRightFromLineIcon:To,ArrowRightIcon:ma,ArrowRightLeft:Vo,ArrowRightLeftIcon:Vo,ArrowRightSquare:Fo,ArrowRightSquareIcon:Fo,ArrowRightToLine:Eo,ArrowRightToLineIcon:Eo,ArrowUp:ni,ArrowUp01:Bo,ArrowUp01Icon:Bo,ArrowUp10:Ro,ArrowUp10Icon:Ro,ArrowUpAZ:a1,ArrowUpAZIcon:a1,ArrowUpAz:a1,ArrowUpAzIcon:a1,ArrowUpCircle:Oo,ArrowUpCircleIcon:Oo,ArrowUpDown:Uo,ArrowUpDownIcon:Uo,ArrowUpFromDot:$o,ArrowUpFromDotIcon:$o,ArrowUpFromLine:_o,ArrowUpFromLineIcon:_o,ArrowUpIcon:ni,ArrowUpLeft:Ko,ArrowUpLeftFromCircle:Zo,ArrowUpLeftFromCircleIcon:Zo,ArrowUpLeftFromSquare:Wo,ArrowUpLeftFromSquareIcon:Wo,ArrowUpLeftIcon:Ko,ArrowUpLeftSquare:Go,ArrowUpLeftSquareIcon:Go,ArrowUpNarrowWide:n1,ArrowUpNarrowWideIcon:n1,ArrowUpRight:Yo,ArrowUpRightFromCircle:Xo,ArrowUpRightFromCircleIcon:Xo,ArrowUpRightFromSquare:Qo,ArrowUpRightFromSquareIcon:Qo,ArrowUpRightIcon:Yo,ArrowUpRightSquare:Jo,ArrowUpRightSquareIcon:Jo,ArrowUpSquare:ei,ArrowUpSquareIcon:ei,ArrowUpToLine:ti,ArrowUpToLineIcon:ti,ArrowUpWideNarrow:ai,ArrowUpWideNarrowIcon:ai,ArrowUpZA:r1,ArrowUpZAIcon:r1,ArrowUpZa:r1,ArrowUpZaIcon:r1,ArrowsUpFromLine:ri,ArrowsUpFromLineIcon:ri,Asterisk:oi,AsteriskIcon:oi,AsteriskSquare:o1,AsteriskSquareIcon:o1,AtSign:ii,AtSignIcon:ii,Atom:li,AtomIcon:li,AudioLines:ci,AudioLinesIcon:ci,AudioWaveform:di,AudioWaveformIcon:di,Award:Tn,AwardIcon:Tn,Axe:si,AxeIcon:si,Axis3D:i1,Axis3DIcon:i1,Axis3d:i1,Axis3dIcon:i1,Baby:hi,BabyIcon:hi,Backpack:yi,BackpackIcon:yi,Badge:ji,BadgeAlert:ui,BadgeAlertIcon:ui,BadgeCent:pi,BadgeCentIcon:pi,BadgeCheck:l1,BadgeCheckIcon:l1,BadgeDollarSign:ki,BadgeDollarSignIcon:ki,BadgeEuro:gi,BadgeEuroIcon:gi,BadgeHelp:mi,BadgeHelpIcon:mi,BadgeIcon:ji,BadgeIndianRupee:xi,BadgeIndianRupeeIcon:xi,BadgeInfo:fi,BadgeInfoIcon:fi,BadgeJapaneseYen:vi,BadgeJapaneseYenIcon:vi,BadgeMinus:Mi,BadgeMinusIcon:Mi,BadgePercent:wi,BadgePercentIcon:wi,BadgePlus:Li,BadgePlusIcon:Li,BadgePoundSterling:bi,BadgePoundSterlingIcon:bi,BadgeRussianRuble:Ci,BadgeRussianRubleIcon:Ci,BadgeSwissFranc:Si,BadgeSwissFrancIcon:Si,BadgeX:Ii,BadgeXIcon:Ii,BaggageClaim:Hi,BaggageClaimIcon:Hi,Ban:zi,BanIcon:zi,Banana:qi,BananaIcon:qi,Banknote:Ai,BanknoteIcon:Ai,BarChart:Ei,BarChart2:Pi,BarChart2Icon:Pi,BarChart3:Di,BarChart3Icon:Di,BarChart4:Ni,BarChart4Icon:Ni,BarChartBig:Ti,BarChartBigIcon:Ti,BarChartHorizontal:Fi,BarChartHorizontalBig:Vi,BarChartHorizontalBigIcon:Vi,BarChartHorizontalIcon:Fi,BarChartIcon:Ei,Barcode:Bi,BarcodeIcon:Bi,Baseline:Ri,BaselineIcon:Ri,Bath:Oi,BathIcon:Oi,Battery:Gi,BatteryCharging:Ui,BatteryChargingIcon:Ui,BatteryFull:$i,BatteryFullIcon:$i,BatteryIcon:Gi,BatteryLow:_i,BatteryLowIcon:_i,BatteryMedium:Zi,BatteryMediumIcon:Zi,BatteryWarning:Wi,BatteryWarningIcon:Wi,Beaker:Ki,BeakerIcon:Ki,Bean:Qi,BeanIcon:Qi,BeanOff:Xi,BeanOffIcon:Xi,Bed:e0,BedDouble:Ji,BedDoubleIcon:Ji,BedIcon:e0,BedSingle:Yi,BedSingleIcon:Yi,Beef:t0,BeefIcon:t0,Beer:a0,BeerIcon:a0,Bell:d0,BellDot:n0,BellDotIcon:n0,BellElectric:r0,BellElectricIcon:r0,BellIcon:d0,BellMinus:o0,BellMinusIcon:o0,BellOff:i0,BellOffIcon:i0,BellPlus:l0,BellPlusIcon:l0,BellRing:c0,BellRingIcon:c0,BetweenHorizonalEnd:c1,BetweenHorizonalEndIcon:c1,BetweenHorizonalStart:d1,BetweenHorizonalStartIcon:d1,BetweenHorizontalEnd:c1,BetweenHorizontalEndIcon:c1,BetweenHorizontalStart:d1,BetweenHorizontalStartIcon:d1,BetweenVerticalEnd:s0,BetweenVerticalEndIcon:s0,BetweenVerticalStart:h0,BetweenVerticalStartIcon:h0,Bike:y0,BikeIcon:y0,Binary:u0,BinaryIcon:u0,Biohazard:p0,BiohazardIcon:p0,Bird:k0,BirdIcon:k0,Bitcoin:g0,BitcoinIcon:g0,Blend:m0,BlendIcon:m0,Blinds:x0,BlindsIcon:x0,Blocks:f0,BlocksIcon:f0,Bluetooth:L0,BluetoothConnected:v0,BluetoothConnectedIcon:v0,BluetoothIcon:L0,BluetoothOff:M0,BluetoothOffIcon:M0,BluetoothSearching:w0,BluetoothSearchingIcon:w0,Bold:Vn,BoldIcon:Vn,Bolt:b0,BoltIcon:b0,Bomb:C0,BombIcon:C0,Bone:S0,BoneIcon:S0,Book:Fn,BookA:I0,BookAIcon:I0,BookAudio:j0,BookAudioIcon:j0,BookCheck:H0,BookCheckIcon:H0,BookCopy:z0,BookCopyIcon:z0,BookDashed:s1,BookDashedIcon:s1,BookDown:q0,BookDownIcon:q0,BookHeadphones:A0,BookHeadphonesIcon:A0,BookHeart:P0,BookHeartIcon:P0,BookIcon:Fn,BookImage:D0,BookImageIcon:D0,BookKey:N0,BookKeyIcon:N0,BookLock:T0,BookLockIcon:T0,BookMarked:V0,BookMarkedIcon:V0,BookMinus:F0,BookMinusIcon:F0,BookOpen:dt,BookOpenCheck:E0,BookOpenCheckIcon:E0,BookOpenIcon:dt,BookOpenText:B0,BookOpenTextIcon:B0,BookPlus:R0,BookPlusIcon:R0,BookTemplate:s1,BookTemplateIcon:s1,BookText:O0,BookTextIcon:O0,BookType:U0,BookTypeIcon:U0,BookUp:_0,BookUp2:$0,BookUp2Icon:$0,BookUpIcon:_0,BookUser:Z0,BookUserIcon:Z0,BookX:W0,BookXIcon:W0,Bookmark:J0,BookmarkCheck:G0,BookmarkCheckIcon:G0,BookmarkIcon:J0,BookmarkMinus:K0,BookmarkMinusIcon:K0,BookmarkPlus:X0,BookmarkPlusIcon:X0,BookmarkX:Q0,BookmarkXIcon:Q0,BoomBox:Y0,BoomBoxIcon:Y0,Bot:tl,BotIcon:tl,BotMessageSquare:el,BotMessageSquareIcon:el,Box:nl,BoxIcon:nl,BoxSelect:al,BoxSelectIcon:al,Boxes:rl,BoxesIcon:rl,Braces:h1,BracesIcon:h1,Brackets:ol,BracketsIcon:ol,Brain:cl,BrainCircuit:il,BrainCircuitIcon:il,BrainCog:ll,BrainCogIcon:ll,BrainIcon:cl,BrickWall:dl,BrickWallIcon:dl,Briefcase:sl,BriefcaseIcon:sl,BringToFront:hl,BringToFrontIcon:hl,Brush:yl,BrushIcon:yl,Bug:kl,BugIcon:kl,BugOff:ul,BugOffIcon:ul,BugPlay:pl,BugPlayIcon:pl,Building:ml,Building2:gl,Building2Icon:gl,BuildingIcon:ml,Bus:fl,BusFront:xl,BusFrontIcon:xl,BusIcon:fl,Cable:Ml,CableCar:vl,CableCarIcon:vl,CableIcon:Ml,Cake:Ll,CakeIcon:Ll,CakeSlice:wl,CakeSliceIcon:wl,Calculator:bl,CalculatorIcon:bl,Calendar:Bl,CalendarCheck:Sl,CalendarCheck2:Cl,CalendarCheck2Icon:Cl,CalendarCheckIcon:Sl,CalendarClock:Il,CalendarClockIcon:Il,CalendarDays:jl,CalendarDaysIcon:jl,CalendarFold:Hl,CalendarFoldIcon:Hl,CalendarHeart:zl,CalendarHeartIcon:zl,CalendarIcon:Bl,CalendarMinus:Al,CalendarMinus2:ql,CalendarMinus2Icon:ql,CalendarMinusIcon:Al,CalendarOff:Pl,CalendarOffIcon:Pl,CalendarPlus:Nl,CalendarPlus2:Dl,CalendarPlus2Icon:Dl,CalendarPlusIcon:Nl,CalendarRange:Tl,CalendarRangeIcon:Tl,CalendarSearch:Vl,CalendarSearchIcon:Vl,CalendarX:El,CalendarX2:Fl,CalendarX2Icon:Fl,CalendarXIcon:El,Camera:Ol,CameraIcon:Ol,CameraOff:Rl,CameraOffIcon:Rl,CandlestickChart:Ul,CandlestickChartIcon:Ul,Candy:Zl,CandyCane:$l,CandyCaneIcon:$l,CandyIcon:Zl,CandyOff:_l,CandyOffIcon:_l,Captions:y1,CaptionsIcon:y1,CaptionsOff:Wl,CaptionsOffIcon:Wl,Car:Xl,CarFront:Gl,CarFrontIcon:Gl,CarIcon:Xl,CarTaxiFront:Kl,CarTaxiFrontIcon:Kl,Caravan:Ql,CaravanIcon:Ql,Carrot:Jl,CarrotIcon:Jl,CaseLower:Yl,CaseLowerIcon:Yl,CaseSensitive:ec,CaseSensitiveIcon:ec,CaseUpper:tc,CaseUpperIcon:tc,CassetteTape:ac,CassetteTapeIcon:ac,Cast:nc,CastIcon:nc,Castle:rc,CastleIcon:rc,Cat:oc,CatIcon:oc,Cctv:ic,CctvIcon:ic,Check:hc,CheckCheck:lc,CheckCheckIcon:lc,CheckCircle:st,CheckCircle2:cc,CheckCircle2Icon:cc,CheckCircleIcon:st,CheckIcon:hc,CheckSquare:sc,CheckSquare2:dc,CheckSquare2Icon:dc,CheckSquareIcon:sc,ChefHat:yc,ChefHatIcon:yc,Cherry:uc,CherryIcon:uc,ChevronDown:gc,ChevronDownCircle:pc,ChevronDownCircleIcon:pc,ChevronDownIcon:gc,ChevronDownSquare:kc,ChevronDownSquareIcon:kc,ChevronFirst:mc,ChevronFirstIcon:mc,ChevronLast:xc,ChevronLastIcon:xc,ChevronLeft:Mc,ChevronLeftCircle:fc,ChevronLeftCircleIcon:fc,ChevronLeftIcon:Mc,ChevronLeftSquare:vc,ChevronLeftSquareIcon:vc,ChevronRight:En,ChevronRightCircle:wc,ChevronRightCircleIcon:wc,ChevronRightIcon:En,ChevronRightSquare:Lc,ChevronRightSquareIcon:Lc,ChevronUp:Sc,ChevronUpCircle:bc,ChevronUpCircleIcon:bc,ChevronUpIcon:Sc,ChevronUpSquare:Cc,ChevronUpSquareIcon:Cc,ChevronsDown:jc,ChevronsDownIcon:jc,ChevronsDownUp:Ic,ChevronsDownUpIcon:Ic,ChevronsLeft:zc,ChevronsLeftIcon:zc,ChevronsLeftRight:Hc,ChevronsLeftRightIcon:Hc,ChevronsRight:Ac,ChevronsRightIcon:Ac,ChevronsRightLeft:qc,ChevronsRightLeftIcon:qc,ChevronsUp:Dc,ChevronsUpDown:Pc,ChevronsUpDownIcon:Pc,ChevronsUpIcon:Dc,Chrome:Nc,ChromeIcon:Nc,Church:Tc,ChurchIcon:Tc,Cigarette:Fc,CigaretteIcon:Fc,CigaretteOff:Vc,CigaretteOffIcon:Vc,Circle:Gc,CircleDashed:Ec,CircleDashedIcon:Ec,CircleDollarSign:Bc,CircleDollarSignIcon:Bc,CircleDot:Oc,CircleDotDashed:Rc,CircleDotDashedIcon:Rc,CircleDotIcon:Oc,CircleEllipsis:Uc,CircleEllipsisIcon:Uc,CircleEqual:$c,CircleEqualIcon:$c,CircleFadingPlus:_c,CircleFadingPlusIcon:_c,CircleIcon:Gc,CircleOff:Zc,CircleOffIcon:Zc,CircleSlash:Wc,CircleSlash2:u1,CircleSlash2Icon:u1,CircleSlashIcon:Wc,CircleSlashed:u1,CircleSlashedIcon:u1,CircleUser:k1,CircleUserIcon:k1,CircleUserRound:p1,CircleUserRoundIcon:p1,CircuitBoard:Kc,CircuitBoardIcon:Kc,Citrus:Xc,CitrusIcon:Xc,Clapperboard:Qc,ClapperboardIcon:Qc,Clipboard:id,ClipboardCheck:Jc,ClipboardCheckIcon:Jc,ClipboardCopy:Yc,ClipboardCopyIcon:Yc,ClipboardEdit:m1,ClipboardEditIcon:m1,ClipboardIcon:id,ClipboardList:ed,ClipboardListIcon:ed,ClipboardMinus:td,ClipboardMinusIcon:td,ClipboardPaste:ad,ClipboardPasteIcon:ad,ClipboardPen:m1,ClipboardPenIcon:m1,ClipboardPenLine:g1,ClipboardPenLineIcon:g1,ClipboardPlus:nd,ClipboardPlusIcon:nd,ClipboardSignature:g1,ClipboardSignatureIcon:g1,ClipboardType:rd,ClipboardTypeIcon:rd,ClipboardX:od,ClipboardXIcon:od,Clock:fd,Clock1:ld,Clock10:cd,Clock10Icon:cd,Clock11:dd,Clock11Icon:dd,Clock12:sd,Clock12Icon:sd,Clock1Icon:ld,Clock2:hd,Clock2Icon:hd,Clock3:yd,Clock3Icon:yd,Clock4:ud,Clock4Icon:ud,Clock5:pd,Clock5Icon:pd,Clock6:kd,Clock6Icon:kd,Clock7:gd,Clock7Icon:gd,Clock8:md,Clock8Icon:md,Clock9:xd,Clock9Icon:xd,ClockIcon:fd,Cloud:Pd,CloudCog:vd,CloudCogIcon:vd,CloudDrizzle:Md,CloudDrizzleIcon:Md,CloudFog:wd,CloudFogIcon:wd,CloudHail:Ld,CloudHailIcon:Ld,CloudIcon:Pd,CloudLightning:bd,CloudLightningIcon:bd,CloudMoon:Sd,CloudMoonIcon:Sd,CloudMoonRain:Cd,CloudMoonRainIcon:Cd,CloudOff:Id,CloudOffIcon:Id,CloudRain:Hd,CloudRainIcon:Hd,CloudRainWind:jd,CloudRainWindIcon:jd,CloudSnow:zd,CloudSnowIcon:zd,CloudSun:Ad,CloudSunIcon:Ad,CloudSunRain:qd,CloudSunRainIcon:qd,Cloudy:Dd,CloudyIcon:Dd,Clover:Nd,CloverIcon:Nd,Club:Td,ClubIcon:Td,Code:Fd,Code2:Vd,Code2Icon:Vd,CodeIcon:Fd,CodeSquare:x1,CodeSquareIcon:x1,Codepen:Ed,CodepenIcon:Ed,Codesandbox:Bd,CodesandboxIcon:Bd,Coffee:Rd,CoffeeIcon:Rd,Cog:Od,CogIcon:Od,Coins:Ud,CoinsIcon:Ud,Columns:f1,Columns2:f1,Columns2Icon:f1,Columns3:v1,Columns3Icon:v1,Columns4:$d,Columns4Icon:$d,ColumnsIcon:f1,Combine:_d,CombineIcon:_d,Command:Zd,CommandIcon:Zd,Compass:Wd,CompassIcon:Wd,Component:Gd,ComponentIcon:Gd,Computer:Kd,ComputerIcon:Kd,ConciergeBell:Xd,ConciergeBellIcon:Xd,Cone:Qd,ConeIcon:Qd,Construction:Jd,ConstructionIcon:Jd,Contact:es,Contact2:Yd,Contact2Icon:Yd,ContactIcon:es,Container:ts,ContainerIcon:ts,Contrast:as,ContrastIcon:as,Cookie:ns,CookieIcon:ns,CookingPot:rs,CookingPotIcon:rs,Copy:ss,CopyCheck:os,CopyCheckIcon:os,CopyIcon:ss,CopyMinus:is,CopyMinusIcon:is,CopyPlus:ls,CopyPlusIcon:ls,CopySlash:cs,CopySlashIcon:cs,CopyX:ds,CopyXIcon:ds,Copyleft:hs,CopyleftIcon:hs,Copyright:ys,CopyrightIcon:ys,CornerDownLeft:us,CornerDownLeftIcon:us,CornerDownRight:ps,CornerDownRightIcon:ps,CornerLeftDown:ks,CornerLeftDownIcon:ks,CornerLeftUp:gs,CornerLeftUpIcon:gs,CornerRightDown:ms,CornerRightDownIcon:ms,CornerRightUp:xs,CornerRightUpIcon:xs,CornerUpLeft:fs,CornerUpLeftIcon:fs,CornerUpRight:vs,CornerUpRightIcon:vs,Cpu:Ms,CpuIcon:Ms,CreativeCommons:ws,CreativeCommonsIcon:ws,CreditCard:Ls,CreditCardIcon:Ls,Croissant:bs,CroissantIcon:bs,Crop:Cs,CropIcon:Cs,Cross:Ss,CrossIcon:Ss,Crosshair:Is,CrosshairIcon:Is,Crown:js,CrownIcon:js,Cuboid:Hs,CuboidIcon:Hs,CupSoda:zs,CupSodaIcon:zs,CurlyBraces:h1,CurlyBracesIcon:h1,Currency:qs,CurrencyIcon:qs,Cylinder:As,CylinderIcon:As,Database:Ns,DatabaseBackup:Ps,DatabaseBackupIcon:Ps,DatabaseIcon:Ns,DatabaseZap:Ds,DatabaseZapIcon:Ds,Delete:Ts,DeleteIcon:Ts,Dessert:Vs,DessertIcon:Vs,Diameter:Fs,DiameterIcon:Fs,Diamond:Es,DiamondIcon:Es,Dice1:Bs,Dice1Icon:Bs,Dice2:Rs,Dice2Icon:Rs,Dice3:Os,Dice3Icon:Os,Dice4:Us,Dice4Icon:Us,Dice5:$s,Dice5Icon:$s,Dice6:_s,Dice6Icon:_s,Dices:Zs,DicesIcon:Zs,Diff:Ws,DiffIcon:Ws,Disc:Qs,Disc2:Gs,Disc2Icon:Gs,Disc3:Ks,Disc3Icon:Ks,DiscAlbum:Xs,DiscAlbumIcon:Xs,DiscIcon:Qs,Divide:eh,DivideCircle:Js,DivideCircleIcon:Js,DivideIcon:eh,DivideSquare:Ys,DivideSquareIcon:Ys,Dna:ah,DnaIcon:ah,DnaOff:th,DnaOffIcon:th,Dog:nh,DogIcon:nh,DollarSign:rh,DollarSignIcon:rh,Donut:oh,DonutIcon:oh,DoorClosed:ih,DoorClosedIcon:ih,DoorOpen:lh,DoorOpenIcon:lh,Dot:ch,DotIcon:ch,DotSquare:M1,DotSquareIcon:M1,Download:sh,DownloadCloud:dh,DownloadCloudIcon:dh,DownloadIcon:sh,DraftingCompass:hh,DraftingCompassIcon:hh,Drama:yh,DramaIcon:yh,Dribbble:uh,DribbbleIcon:uh,Drill:ph,DrillIcon:ph,Droplet:kh,DropletIcon:kh,Droplets:gh,DropletsIcon:gh,Drum:mh,DrumIcon:mh,Drumstick:xh,DrumstickIcon:xh,Dumbbell:fh,DumbbellIcon:fh,Ear:Mh,EarIcon:Mh,EarOff:vh,EarOffIcon:vh,Earth:w1,EarthIcon:w1,EarthLock:wh,EarthLockIcon:wh,Eclipse:Lh,EclipseIcon:Lh,Edit:Se,Edit2:Z1,Edit2Icon:Z1,Edit3:_1,Edit3Icon:_1,EditIcon:Se,Egg:Sh,EggFried:bh,EggFriedIcon:bh,EggIcon:Sh,EggOff:Ch,EggOffIcon:Ch,Equal:jh,EqualIcon:jh,EqualNot:Ih,EqualNotIcon:Ih,EqualSquare:L1,EqualSquareIcon:L1,Eraser:Hh,EraserIcon:Hh,Euro:zh,EuroIcon:zh,Expand:qh,ExpandIcon:qh,ExternalLink:Ah,ExternalLinkIcon:Ah,Eye:Wa,EyeIcon:Wa,EyeOff:Bn,EyeOffIcon:Bn,Facebook:Ph,FacebookIcon:Ph,Factory:Dh,FactoryIcon:Dh,Fan:Nh,FanIcon:Nh,FastForward:Th,FastForwardIcon:Th,Feather:Vh,FeatherIcon:Vh,Fence:Fh,FenceIcon:Fh,FerrisWheel:Eh,FerrisWheelIcon:Eh,Figma:Bh,FigmaIcon:Bh,File:Ey,FileArchive:Rh,FileArchiveIcon:Rh,FileAudio:Uh,FileAudio2:Oh,FileAudio2Icon:Oh,FileAudioIcon:Uh,FileAxis3D:b1,FileAxis3DIcon:b1,FileAxis3d:b1,FileAxis3dIcon:b1,FileBadge:_h,FileBadge2:$h,FileBadge2Icon:$h,FileBadgeIcon:_h,FileBarChart:Wh,FileBarChart2:Zh,FileBarChart2Icon:Zh,FileBarChartIcon:Wh,FileBox:Gh,FileBoxIcon:Gh,FileCheck:Xh,FileCheck2:Kh,FileCheck2Icon:Kh,FileCheckIcon:Xh,FileClock:Qh,FileClockIcon:Qh,FileCode:Yh,FileCode2:Jh,FileCode2Icon:Jh,FileCodeIcon:Yh,FileCog:C1,FileCog2:C1,FileCog2Icon:C1,FileCogIcon:C1,FileDiff:ey,FileDiffIcon:ey,FileDigit:ty,FileDigitIcon:ty,FileDown:ay,FileDownIcon:ay,FileEdit:I1,FileEditIcon:I1,FileHeart:ny,FileHeartIcon:ny,FileIcon:Ey,FileImage:ry,FileImageIcon:ry,FileInput:oy,FileInputIcon:oy,FileJson:ly,FileJson2:iy,FileJson2Icon:iy,FileJsonIcon:ly,FileKey:dy,FileKey2:cy,FileKey2Icon:cy,FileKeyIcon:dy,FileLineChart:sy,FileLineChartIcon:sy,FileLock:yy,FileLock2:hy,FileLock2Icon:hy,FileLockIcon:yy,FileMinus:py,FileMinus2:uy,FileMinus2Icon:uy,FileMinusIcon:py,FileMusic:ky,FileMusicIcon:ky,FileOutput:gy,FileOutputIcon:gy,FilePen:I1,FilePenIcon:I1,FilePenLine:S1,FilePenLineIcon:S1,FilePieChart:my,FilePieChartIcon:my,FilePlus:fy,FilePlus2:xy,FilePlus2Icon:xy,FilePlusIcon:fy,FileQuestion:vy,FileQuestionIcon:vy,FileScan:My,FileScanIcon:My,FileSearch:Ly,FileSearch2:wy,FileSearch2Icon:wy,FileSearchIcon:Ly,FileSignature:S1,FileSignatureIcon:S1,FileSliders:by,FileSlidersIcon:by,FileSpreadsheet:Cy,FileSpreadsheetIcon:Cy,FileStack:Sy,FileStackIcon:Sy,FileSymlink:Iy,FileSymlinkIcon:Iy,FileTerminal:jy,FileTerminalIcon:jy,FileText:Rn,FileTextIcon:Rn,FileType:zy,FileType2:Hy,FileType2Icon:Hy,FileTypeIcon:zy,FileUp:qy,FileUpIcon:qy,FileVideo:Py,FileVideo2:Ay,FileVideo2Icon:Ay,FileVideoIcon:Py,FileVolume:Ny,FileVolume2:Dy,FileVolume2Icon:Dy,FileVolumeIcon:Ny,FileWarning:Ty,FileWarningIcon:Ty,FileX:Fy,FileX2:Vy,FileX2Icon:Vy,FileXIcon:Fy,Files:By,FilesIcon:By,Film:Ry,FilmIcon:Ry,Filter:Uy,FilterIcon:Uy,FilterX:Oy,FilterXIcon:Oy,Fingerprint:$y,FingerprintIcon:$y,FireExtinguisher:_y,FireExtinguisherIcon:_y,Fish:Gy,FishIcon:Gy,FishOff:Zy,FishOffIcon:Zy,FishSymbol:Wy,FishSymbolIcon:Wy,Flag:Jy,FlagIcon:Jy,FlagOff:Ky,FlagOffIcon:Ky,FlagTriangleLeft:Xy,FlagTriangleLeftIcon:Xy,FlagTriangleRight:Qy,FlagTriangleRightIcon:Qy,Flame:eu,FlameIcon:eu,FlameKindling:Yy,FlameKindlingIcon:Yy,Flashlight:au,FlashlightIcon:au,FlashlightOff:tu,FlashlightOffIcon:tu,FlaskConical:ru,FlaskConicalIcon:ru,FlaskConicalOff:nu,FlaskConicalOffIcon:nu,FlaskRound:ou,FlaskRoundIcon:ou,FlipHorizontal:lu,FlipHorizontal2:iu,FlipHorizontal2Icon:iu,FlipHorizontalIcon:lu,FlipVertical:du,FlipVertical2:cu,FlipVertical2Icon:cu,FlipVerticalIcon:du,Flower:hu,Flower2:su,Flower2Icon:su,FlowerIcon:hu,Focus:yu,FocusIcon:yu,FoldHorizontal:uu,FoldHorizontalIcon:uu,FoldVertical:pu,FoldVerticalIcon:pu,Folder:Ru,FolderArchive:ku,FolderArchiveIcon:ku,FolderCheck:gu,FolderCheckIcon:gu,FolderClock:mu,FolderClockIcon:mu,FolderClosed:xu,FolderClosedIcon:xu,FolderCog:j1,FolderCog2:j1,FolderCog2Icon:j1,FolderCogIcon:j1,FolderDot:fu,FolderDotIcon:fu,FolderDown:vu,FolderDownIcon:vu,FolderEdit:H1,FolderEditIcon:H1,FolderGit:wu,FolderGit2:Mu,FolderGit2Icon:Mu,FolderGitIcon:wu,FolderHeart:Lu,FolderHeartIcon:Lu,FolderIcon:Ru,FolderInput:bu,FolderInputIcon:bu,FolderKanban:Cu,FolderKanbanIcon:Cu,FolderKey:Su,FolderKeyIcon:Su,FolderLock:Iu,FolderLockIcon:Iu,FolderMinus:ju,FolderMinusIcon:ju,FolderOpen:zu,FolderOpenDot:Hu,FolderOpenDotIcon:Hu,FolderOpenIcon:zu,FolderOutput:qu,FolderOutputIcon:qu,FolderPen:H1,FolderPenIcon:H1,FolderPlus:Au,FolderPlusIcon:Au,FolderRoot:Pu,FolderRootIcon:Pu,FolderSearch:Nu,FolderSearch2:Du,FolderSearch2Icon:Du,FolderSearchIcon:Nu,FolderSymlink:Tu,FolderSymlinkIcon:Tu,FolderSync:Vu,FolderSyncIcon:Vu,FolderTree:Fu,FolderTreeIcon:Fu,FolderUp:Eu,FolderUpIcon:Eu,FolderX:Bu,FolderXIcon:Bu,Folders:Ou,FoldersIcon:Ou,Footprints:Uu,FootprintsIcon:Uu,Forklift:$u,ForkliftIcon:$u,FormInput:_u,FormInputIcon:_u,Forward:Zu,ForwardIcon:Zu,Frame:Wu,FrameIcon:Wu,Framer:Gu,FramerIcon:Gu,Frown:Ku,FrownIcon:Ku,Fuel:Xu,FuelIcon:Xu,Fullscreen:Qu,FullscreenIcon:Qu,FunctionSquare:Ju,FunctionSquareIcon:Ju,GalleryHorizontal:ep,GalleryHorizontalEnd:Yu,GalleryHorizontalEndIcon:Yu,GalleryHorizontalIcon:ep,GalleryThumbnails:tp,GalleryThumbnailsIcon:tp,GalleryVertical:np,GalleryVerticalEnd:ap,GalleryVerticalEndIcon:ap,GalleryVerticalIcon:np,Gamepad:op,Gamepad2:rp,Gamepad2Icon:rp,GamepadIcon:op,GanttChart:ip,GanttChartIcon:ip,GanttChartSquare:at,GanttChartSquareIcon:at,GanttSquare:at,GanttSquareIcon:at,Gauge:cp,GaugeCircle:lp,GaugeCircleIcon:lp,GaugeIcon:cp,Gavel:dp,GavelIcon:dp,Gem:sp,GemIcon:sp,Ghost:hp,GhostIcon:hp,Gift:yp,GiftIcon:yp,GitBranch:pp,GitBranchIcon:pp,GitBranchPlus:up,GitBranchPlusIcon:up,GitCommit:z1,GitCommitHorizontal:z1,GitCommitHorizontalIcon:z1,GitCommitIcon:z1,GitCommitVertical:kp,GitCommitVerticalIcon:kp,GitCompare:mp,GitCompareArrows:gp,GitCompareArrowsIcon:gp,GitCompareIcon:mp,GitFork:xp,GitForkIcon:xp,GitGraph:fp,GitGraphIcon:fp,GitMerge:vp,GitMergeIcon:vp,GitPullRequest:Sp,GitPullRequestArrow:Mp,GitPullRequestArrowIcon:Mp,GitPullRequestClosed:wp,GitPullRequestClosedIcon:wp,GitPullRequestCreate:bp,GitPullRequestCreateArrow:Lp,GitPullRequestCreateArrowIcon:Lp,GitPullRequestCreateIcon:bp,GitPullRequestDraft:Cp,GitPullRequestDraftIcon:Cp,GitPullRequestIcon:Sp,Github:Ip,GithubIcon:Ip,Gitlab:jp,GitlabIcon:jp,GlassWater:Hp,GlassWaterIcon:Hp,Glasses:zp,GlassesIcon:zp,Globe:Ga,Globe2:w1,Globe2Icon:w1,GlobeIcon:Ga,GlobeLock:qp,GlobeLockIcon:qp,Goal:Ap,GoalIcon:Ap,Grab:Pp,GrabIcon:Pp,GraduationCap:Dp,GraduationCapIcon:Dp,Grape:Np,GrapeIcon:Np,Grid:nt,Grid2X2:q1,Grid2X2Icon:q1,Grid2x2:q1,Grid2x2Icon:q1,Grid3X3:nt,Grid3X3Icon:nt,Grid3x3:nt,Grid3x3Icon:nt,GridIcon:nt,Grip:Vp,GripHorizontal:Tp,GripHorizontalIcon:Tp,GripIcon:Vp,GripVertical:Ka,GripVerticalIcon:Ka,Group:Fp,GroupIcon:Fp,Guitar:Ep,GuitarIcon:Ep,Hammer:Bp,HammerIcon:Bp,Hand:_p,HandCoins:Rp,HandCoinsIcon:Rp,HandHeart:Op,HandHeartIcon:Op,HandHelping:A1,HandHelpingIcon:A1,HandIcon:_p,HandMetal:Up,HandMetalIcon:Up,HandPlatter:$p,HandPlatterIcon:$p,Handshake:Zp,HandshakeIcon:Zp,HardDrive:Kp,HardDriveDownload:Wp,HardDriveDownloadIcon:Wp,HardDriveIcon:Kp,HardDriveUpload:Gp,HardDriveUploadIcon:Gp,HardHat:Xp,HardHatIcon:Xp,Hash:Qp,HashIcon:Qp,Haze:Jp,HazeIcon:Jp,HdmiPort:Yp,HdmiPortIcon:Yp,Heading:ik,Heading1:ek,Heading1Icon:ek,Heading2:tk,Heading2Icon:tk,Heading3:ak,Heading3Icon:ak,Heading4:nk,Heading4Icon:nk,Heading5:rk,Heading5Icon:rk,Heading6:ok,Heading6Icon:ok,HeadingIcon:ik,Headphones:lk,HeadphonesIcon:lk,Headset:ck,HeadsetIcon:ck,Heart:uk,HeartCrack:dk,HeartCrackIcon:dk,HeartHandshake:sk,HeartHandshakeIcon:sk,HeartIcon:uk,HeartOff:hk,HeartOffIcon:hk,HeartPulse:yk,HeartPulseIcon:yk,Heater:pk,HeaterIcon:pk,HelpCircle:On,HelpCircleIcon:On,HelpingHand:A1,HelpingHandIcon:A1,Hexagon:kk,HexagonIcon:kk,Highlighter:Un,HighlighterIcon:Un,History:gk,HistoryIcon:gk,Home:mk,HomeIcon:mk,Hop:fk,HopIcon:fk,HopOff:xk,HopOffIcon:xk,Hotel:vk,HotelIcon:vk,Hourglass:Mk,HourglassIcon:Mk,IceCream:Lk,IceCream2:wk,IceCream2Icon:wk,IceCreamIcon:Lk,Image:Hk,ImageDown:bk,ImageDownIcon:bk,ImageIcon:Hk,ImageMinus:Ck,ImageMinusIcon:Ck,ImageOff:Sk,ImageOffIcon:Sk,ImagePlus:Ik,ImagePlusIcon:Ik,ImageUp:jk,ImageUpIcon:jk,Images:zk,ImagesIcon:zk,Import:qk,ImportIcon:qk,Inbox:Ak,InboxIcon:Ak,Indent:Pk,IndentIcon:Pk,IndianRupee:Dk,IndianRupeeIcon:Dk,Infinity:Nk,InfinityIcon:Nk,Info:Tk,InfoIcon:Tk,Inspect:N1,InspectIcon:N1,InspectionPanel:Vk,InspectionPanelIcon:Vk,Instagram:Fk,InstagramIcon:Fk,Italic:$n,ItalicIcon:$n,IterationCcw:Ek,IterationCcwIcon:Ek,IterationCw:Bk,IterationCwIcon:Bk,JapaneseYen:Rk,JapaneseYenIcon:Rk,Joystick:Ok,JoystickIcon:Ok,Kanban:Uk,KanbanIcon:Uk,KanbanSquare:D1,KanbanSquareDashed:P1,KanbanSquareDashedIcon:P1,KanbanSquareIcon:D1,Key:Zk,KeyIcon:Zk,KeyRound:$k,KeyRoundIcon:$k,KeySquare:_k,KeySquareIcon:_k,Keyboard:Gk,KeyboardIcon:Gk,KeyboardMusic:Wk,KeyboardMusicIcon:Wk,Lamp:e4,LampCeiling:Kk,LampCeilingIcon:Kk,LampDesk:Xk,LampDeskIcon:Xk,LampFloor:Qk,LampFloorIcon:Qk,LampIcon:e4,LampWallDown:Jk,LampWallDownIcon:Jk,LampWallUp:Yk,LampWallUpIcon:Yk,LandPlot:t4,LandPlotIcon:t4,Landmark:a4,LandmarkIcon:a4,Languages:n4,LanguagesIcon:n4,Laptop:o4,Laptop2:r4,Laptop2Icon:r4,LaptopIcon:o4,Lasso:l4,LassoIcon:l4,LassoSelect:i4,LassoSelectIcon:i4,Laugh:c4,LaughIcon:c4,Layers:h4,Layers2:d4,Layers2Icon:d4,Layers3:s4,Layers3Icon:s4,LayersIcon:h4,Layout:$1,LayoutDashboard:y4,LayoutDashboardIcon:y4,LayoutGrid:u4,LayoutGridIcon:u4,LayoutIcon:$1,LayoutList:p4,LayoutListIcon:p4,LayoutPanelLeft:k4,LayoutPanelLeftIcon:k4,LayoutPanelTop:g4,LayoutPanelTopIcon:g4,LayoutTemplate:m4,LayoutTemplateIcon:m4,Leaf:x4,LeafIcon:x4,LeafyGreen:f4,LeafyGreenIcon:f4,Library:w4,LibraryBig:v4,LibraryBigIcon:v4,LibraryIcon:w4,LibrarySquare:M4,LibrarySquareIcon:M4,LifeBuoy:L4,LifeBuoyIcon:L4,Ligature:b4,LigatureIcon:b4,Lightbulb:S4,LightbulbIcon:S4,LightbulbOff:C4,LightbulbOffIcon:C4,LineChart:I4,LineChartIcon:I4,Link:z4,Link2:H4,Link2Icon:H4,Link2Off:j4,Link2OffIcon:j4,LinkIcon:z4,Linkedin:q4,LinkedinIcon:q4,List:Xa,ListChecks:A4,ListChecksIcon:A4,ListCollapse:P4,ListCollapseIcon:P4,ListEnd:D4,ListEndIcon:D4,ListFilter:N4,ListFilterIcon:N4,ListIcon:Xa,ListMinus:T4,ListMinusIcon:T4,ListMusic:V4,ListMusicIcon:V4,ListOrdered:_n,ListOrderedIcon:_n,ListPlus:F4,ListPlusIcon:F4,ListRestart:E4,ListRestartIcon:E4,ListStart:B4,ListStartIcon:B4,ListTodo:R4,ListTodoIcon:R4,ListTree:O4,ListTreeIcon:O4,ListVideo:U4,ListVideoIcon:U4,ListX:$4,ListXIcon:$4,Loader:_4,Loader2:Zn,Loader2Icon:Zn,LoaderIcon:_4,Locate:G4,LocateFixed:Z4,LocateFixedIcon:Z4,LocateIcon:G4,LocateOff:W4,LocateOffIcon:W4,Lock:Wn,LockIcon:Wn,LockKeyhole:K4,LockKeyholeIcon:K4,LogIn:Gn,LogInIcon:Gn,LogOut:Kn,LogOutIcon:Kn,Lollipop:X4,LollipopIcon:X4,LucideAArrowDown:r2,LucideAArrowUp:o2,LucideALargeSmall:i2,LucideAccessibility:l2,LucideActivity:d2,LucideActivitySquare:c2,LucideAirVent:s2,LucideAirplay:h2,LucideAlarmCheck:Xt,LucideAlarmClock:u2,LucideAlarmClockCheck:Xt,LucideAlarmClockMinus:Qt,LucideAlarmClockOff:y2,LucideAlarmClockPlus:Jt,LucideAlarmMinus:Qt,LucideAlarmPlus:Jt,LucideAlarmSmoke:p2,LucideAlbum:k2,LucideAlertCircle:g2,LucideAlertOctagon:m2,LucideAlertTriangle:An,LucideAlignCenter:Pn,LucideAlignCenterHorizontal:x2,LucideAlignCenterVertical:f2,LucideAlignEndHorizontal:v2,LucideAlignEndVertical:M2,LucideAlignHorizontalDistributeCenter:w2,LucideAlignHorizontalDistributeEnd:L2,LucideAlignHorizontalDistributeStart:b2,LucideAlignHorizontalJustifyCenter:C2,LucideAlignHorizontalJustifyEnd:S2,LucideAlignHorizontalJustifyStart:I2,LucideAlignHorizontalSpaceAround:j2,LucideAlignHorizontalSpaceBetween:H2,LucideAlignJustify:z2,LucideAlignLeft:Dn,LucideAlignRight:Nn,LucideAlignStartHorizontal:q2,LucideAlignStartVertical:A2,LucideAlignVerticalDistributeCenter:P2,LucideAlignVerticalDistributeEnd:D2,LucideAlignVerticalDistributeStart:N2,LucideAlignVerticalJustifyCenter:T2,LucideAlignVerticalJustifyEnd:V2,LucideAlignVerticalJustifyStart:F2,LucideAlignVerticalSpaceAround:E2,LucideAlignVerticalSpaceBetween:B2,LucideAmbulance:R2,LucideAmpersand:O2,LucideAmpersands:U2,LucideAnchor:$2,LucideAngry:_2,LucideAnnoyed:Z2,LucideAntenna:W2,LucideAnvil:G2,LucideAperture:K2,LucideAppWindow:X2,LucideApple:Q2,LucideArchive:eo,LucideArchiveRestore:J2,LucideArchiveX:Y2,LucideAreaChart:to,LucideArmchair:ao,LucideArrowBigDown:ro,LucideArrowBigDownDash:no,LucideArrowBigLeft:io,LucideArrowBigLeftDash:oo,LucideArrowBigRight:co,LucideArrowBigRightDash:lo,LucideArrowBigUp:ho,LucideArrowBigUpDash:so,LucideArrowDown:Ho,LucideArrowDown01:yo,LucideArrowDown10:uo,LucideArrowDownAZ:Yt,LucideArrowDownAz:Yt,LucideArrowDownCircle:po,LucideArrowDownFromLine:ko,LucideArrowDownLeft:fo,LucideArrowDownLeftFromCircle:go,LucideArrowDownLeftFromSquare:mo,LucideArrowDownLeftSquare:xo,LucideArrowDownNarrowWide:vo,LucideArrowDownRight:bo,LucideArrowDownRightFromCircle:Mo,LucideArrowDownRightFromSquare:wo,LucideArrowDownRightSquare:Lo,LucideArrowDownSquare:Co,LucideArrowDownToDot:So,LucideArrowDownToLine:Io,LucideArrowDownUp:jo,LucideArrowDownWideNarrow:e1,LucideArrowDownZA:t1,LucideArrowDownZa:t1,LucideArrowLeft:vt,LucideArrowLeftCircle:zo,LucideArrowLeftFromLine:qo,LucideArrowLeftRight:Ao,LucideArrowLeftSquare:Po,LucideArrowLeftToLine:Do,LucideArrowRight:ma,LucideArrowRightCircle:No,LucideArrowRightFromLine:To,LucideArrowRightLeft:Vo,LucideArrowRightSquare:Fo,LucideArrowRightToLine:Eo,LucideArrowUp:ni,LucideArrowUp01:Bo,LucideArrowUp10:Ro,LucideArrowUpAZ:a1,LucideArrowUpAz:a1,LucideArrowUpCircle:Oo,LucideArrowUpDown:Uo,LucideArrowUpFromDot:$o,LucideArrowUpFromLine:_o,LucideArrowUpLeft:Ko,LucideArrowUpLeftFromCircle:Zo,LucideArrowUpLeftFromSquare:Wo,LucideArrowUpLeftSquare:Go,LucideArrowUpNarrowWide:n1,LucideArrowUpRight:Yo,LucideArrowUpRightFromCircle:Xo,LucideArrowUpRightFromSquare:Qo,LucideArrowUpRightSquare:Jo,LucideArrowUpSquare:ei,LucideArrowUpToLine:ti,LucideArrowUpWideNarrow:ai,LucideArrowUpZA:r1,LucideArrowUpZa:r1,LucideArrowsUpFromLine:ri,LucideAsterisk:oi,LucideAsteriskSquare:o1,LucideAtSign:ii,LucideAtom:li,LucideAudioLines:ci,LucideAudioWaveform:di,LucideAward:Tn,LucideAxe:si,LucideAxis3D:i1,LucideAxis3d:i1,LucideBaby:hi,LucideBackpack:yi,LucideBadge:ji,LucideBadgeAlert:ui,LucideBadgeCent:pi,LucideBadgeCheck:l1,LucideBadgeDollarSign:ki,LucideBadgeEuro:gi,LucideBadgeHelp:mi,LucideBadgeIndianRupee:xi,LucideBadgeInfo:fi,LucideBadgeJapaneseYen:vi,LucideBadgeMinus:Mi,LucideBadgePercent:wi,LucideBadgePlus:Li,LucideBadgePoundSterling:bi,LucideBadgeRussianRuble:Ci,LucideBadgeSwissFranc:Si,LucideBadgeX:Ii,LucideBaggageClaim:Hi,LucideBan:zi,LucideBanana:qi,LucideBanknote:Ai,LucideBarChart:Ei,LucideBarChart2:Pi,LucideBarChart3:Di,LucideBarChart4:Ni,LucideBarChartBig:Ti,LucideBarChartHorizontal:Fi,LucideBarChartHorizontalBig:Vi,LucideBarcode:Bi,LucideBaseline:Ri,LucideBath:Oi,LucideBattery:Gi,LucideBatteryCharging:Ui,LucideBatteryFull:$i,LucideBatteryLow:_i,LucideBatteryMedium:Zi,LucideBatteryWarning:Wi,LucideBeaker:Ki,LucideBean:Qi,LucideBeanOff:Xi,LucideBed:e0,LucideBedDouble:Ji,LucideBedSingle:Yi,LucideBeef:t0,LucideBeer:a0,LucideBell:d0,LucideBellDot:n0,LucideBellElectric:r0,LucideBellMinus:o0,LucideBellOff:i0,LucideBellPlus:l0,LucideBellRing:c0,LucideBetweenHorizonalEnd:c1,LucideBetweenHorizonalStart:d1,LucideBetweenHorizontalEnd:c1,LucideBetweenHorizontalStart:d1,LucideBetweenVerticalEnd:s0,LucideBetweenVerticalStart:h0,LucideBike:y0,LucideBinary:u0,LucideBiohazard:p0,LucideBird:k0,LucideBitcoin:g0,LucideBlend:m0,LucideBlinds:x0,LucideBlocks:f0,LucideBluetooth:L0,LucideBluetoothConnected:v0,LucideBluetoothOff:M0,LucideBluetoothSearching:w0,LucideBold:Vn,LucideBolt:b0,LucideBomb:C0,LucideBone:S0,LucideBook:Fn,LucideBookA:I0,LucideBookAudio:j0,LucideBookCheck:H0,LucideBookCopy:z0,LucideBookDashed:s1,LucideBookDown:q0,LucideBookHeadphones:A0,LucideBookHeart:P0,LucideBookImage:D0,LucideBookKey:N0,LucideBookLock:T0,LucideBookMarked:V0,LucideBookMinus:F0,LucideBookOpen:dt,LucideBookOpenCheck:E0,LucideBookOpenText:B0,LucideBookPlus:R0,LucideBookTemplate:s1,LucideBookText:O0,LucideBookType:U0,LucideBookUp:_0,LucideBookUp2:$0,LucideBookUser:Z0,LucideBookX:W0,LucideBookmark:J0,LucideBookmarkCheck:G0,LucideBookmarkMinus:K0,LucideBookmarkPlus:X0,LucideBookmarkX:Q0,LucideBoomBox:Y0,LucideBot:tl,LucideBotMessageSquare:el,LucideBox:nl,LucideBoxSelect:al,LucideBoxes:rl,LucideBraces:h1,LucideBrackets:ol,LucideBrain:cl,LucideBrainCircuit:il,LucideBrainCog:ll,LucideBrickWall:dl,LucideBriefcase:sl,LucideBringToFront:hl,LucideBrush:yl,LucideBug:kl,LucideBugOff:ul,LucideBugPlay:pl,LucideBuilding:ml,LucideBuilding2:gl,LucideBus:fl,LucideBusFront:xl,LucideCable:Ml,LucideCableCar:vl,LucideCake:Ll,LucideCakeSlice:wl,LucideCalculator:bl,LucideCalendar:Bl,LucideCalendarCheck:Sl,LucideCalendarCheck2:Cl,LucideCalendarClock:Il,LucideCalendarDays:jl,LucideCalendarFold:Hl,LucideCalendarHeart:zl,LucideCalendarMinus:Al,LucideCalendarMinus2:ql,LucideCalendarOff:Pl,LucideCalendarPlus:Nl,LucideCalendarPlus2:Dl,LucideCalendarRange:Tl,LucideCalendarSearch:Vl,LucideCalendarX:El,LucideCalendarX2:Fl,LucideCamera:Ol,LucideCameraOff:Rl,LucideCandlestickChart:Ul,LucideCandy:Zl,LucideCandyCane:$l,LucideCandyOff:_l,LucideCaptions:y1,LucideCaptionsOff:Wl,LucideCar:Xl,LucideCarFront:Gl,LucideCarTaxiFront:Kl,LucideCaravan:Ql,LucideCarrot:Jl,LucideCaseLower:Yl,LucideCaseSensitive:ec,LucideCaseUpper:tc,LucideCassetteTape:ac,LucideCast:nc,LucideCastle:rc,LucideCat:oc,LucideCctv:ic,LucideCheck:hc,LucideCheckCheck:lc,LucideCheckCircle:st,LucideCheckCircle2:cc,LucideCheckSquare:sc,LucideCheckSquare2:dc,LucideChefHat:yc,LucideCherry:uc,LucideChevronDown:gc,LucideChevronDownCircle:pc,LucideChevronDownSquare:kc,LucideChevronFirst:mc,LucideChevronLast:xc,LucideChevronLeft:Mc,LucideChevronLeftCircle:fc,LucideChevronLeftSquare:vc,LucideChevronRight:En,LucideChevronRightCircle:wc,LucideChevronRightSquare:Lc,LucideChevronUp:Sc,LucideChevronUpCircle:bc,LucideChevronUpSquare:Cc,LucideChevronsDown:jc,LucideChevronsDownUp:Ic,LucideChevronsLeft:zc,LucideChevronsLeftRight:Hc,LucideChevronsRight:Ac,LucideChevronsRightLeft:qc,LucideChevronsUp:Dc,LucideChevronsUpDown:Pc,LucideChrome:Nc,LucideChurch:Tc,LucideCigarette:Fc,LucideCigaretteOff:Vc,LucideCircle:Gc,LucideCircleDashed:Ec,LucideCircleDollarSign:Bc,LucideCircleDot:Oc,LucideCircleDotDashed:Rc,LucideCircleEllipsis:Uc,LucideCircleEqual:$c,LucideCircleFadingPlus:_c,LucideCircleOff:Zc,LucideCircleSlash:Wc,LucideCircleSlash2:u1,LucideCircleSlashed:u1,LucideCircleUser:k1,LucideCircleUserRound:p1,LucideCircuitBoard:Kc,LucideCitrus:Xc,LucideClapperboard:Qc,LucideClipboard:id,LucideClipboardCheck:Jc,LucideClipboardCopy:Yc,LucideClipboardEdit:m1,LucideClipboardList:ed,LucideClipboardMinus:td,LucideClipboardPaste:ad,LucideClipboardPen:m1,LucideClipboardPenLine:g1,LucideClipboardPlus:nd,LucideClipboardSignature:g1,LucideClipboardType:rd,LucideClipboardX:od,LucideClock:fd,LucideClock1:ld,LucideClock10:cd,LucideClock11:dd,LucideClock12:sd,LucideClock2:hd,LucideClock3:yd,LucideClock4:ud,LucideClock5:pd,LucideClock6:kd,LucideClock7:gd,LucideClock8:md,LucideClock9:xd,LucideCloud:Pd,LucideCloudCog:vd,LucideCloudDrizzle:Md,LucideCloudFog:wd,LucideCloudHail:Ld,LucideCloudLightning:bd,LucideCloudMoon:Sd,LucideCloudMoonRain:Cd,LucideCloudOff:Id,LucideCloudRain:Hd,LucideCloudRainWind:jd,LucideCloudSnow:zd,LucideCloudSun:Ad,LucideCloudSunRain:qd,LucideCloudy:Dd,LucideClover:Nd,LucideClub:Td,LucideCode:Fd,LucideCode2:Vd,LucideCodeSquare:x1,LucideCodepen:Ed,LucideCodesandbox:Bd,LucideCoffee:Rd,LucideCog:Od,LucideCoins:Ud,LucideColumns:f1,LucideColumns2:f1,LucideColumns3:v1,LucideColumns4:$d,LucideCombine:_d,LucideCommand:Zd,LucideCompass:Wd,LucideComponent:Gd,LucideComputer:Kd,LucideConciergeBell:Xd,LucideCone:Qd,LucideConstruction:Jd,LucideContact:es,LucideContact2:Yd,LucideContainer:ts,LucideContrast:as,LucideCookie:ns,LucideCookingPot:rs,LucideCopy:ss,LucideCopyCheck:os,LucideCopyMinus:is,LucideCopyPlus:ls,LucideCopySlash:cs,LucideCopyX:ds,LucideCopyleft:hs,LucideCopyright:ys,LucideCornerDownLeft:us,LucideCornerDownRight:ps,LucideCornerLeftDown:ks,LucideCornerLeftUp:gs,LucideCornerRightDown:ms,LucideCornerRightUp:xs,LucideCornerUpLeft:fs,LucideCornerUpRight:vs,LucideCpu:Ms,LucideCreativeCommons:ws,LucideCreditCard:Ls,LucideCroissant:bs,LucideCrop:Cs,LucideCross:Ss,LucideCrosshair:Is,LucideCrown:js,LucideCuboid:Hs,LucideCupSoda:zs,LucideCurlyBraces:h1,LucideCurrency:qs,LucideCylinder:As,LucideDatabase:Ns,LucideDatabaseBackup:Ps,LucideDatabaseZap:Ds,LucideDelete:Ts,LucideDessert:Vs,LucideDiameter:Fs,LucideDiamond:Es,LucideDice1:Bs,LucideDice2:Rs,LucideDice3:Os,LucideDice4:Us,LucideDice5:$s,LucideDice6:_s,LucideDices:Zs,LucideDiff:Ws,LucideDisc:Qs,LucideDisc2:Gs,LucideDisc3:Ks,LucideDiscAlbum:Xs,LucideDivide:eh,LucideDivideCircle:Js,LucideDivideSquare:Ys,LucideDna:ah,LucideDnaOff:th,LucideDog:nh,LucideDollarSign:rh,LucideDonut:oh,LucideDoorClosed:ih,LucideDoorOpen:lh,LucideDot:ch,LucideDotSquare:M1,LucideDownload:sh,LucideDownloadCloud:dh,LucideDraftingCompass:hh,LucideDrama:yh,LucideDribbble:uh,LucideDrill:ph,LucideDroplet:kh,LucideDroplets:gh,LucideDrum:mh,LucideDrumstick:xh,LucideDumbbell:fh,LucideEar:Mh,LucideEarOff:vh,LucideEarth:w1,LucideEarthLock:wh,LucideEclipse:Lh,LucideEdit:Se,LucideEdit2:Z1,LucideEdit3:_1,LucideEgg:Sh,LucideEggFried:bh,LucideEggOff:Ch,LucideEqual:jh,LucideEqualNot:Ih,LucideEqualSquare:L1,LucideEraser:Hh,LucideEuro:zh,LucideExpand:qh,LucideExternalLink:Ah,LucideEye:Wa,LucideEyeOff:Bn,LucideFacebook:Ph,LucideFactory:Dh,LucideFan:Nh,LucideFastForward:Th,LucideFeather:Vh,LucideFence:Fh,LucideFerrisWheel:Eh,LucideFigma:Bh,LucideFile:Ey,LucideFileArchive:Rh,LucideFileAudio:Uh,LucideFileAudio2:Oh,LucideFileAxis3D:b1,LucideFileAxis3d:b1,LucideFileBadge:_h,LucideFileBadge2:$h,LucideFileBarChart:Wh,LucideFileBarChart2:Zh,LucideFileBox:Gh,LucideFileCheck:Xh,LucideFileCheck2:Kh,LucideFileClock:Qh,LucideFileCode:Yh,LucideFileCode2:Jh,LucideFileCog:C1,LucideFileCog2:C1,LucideFileDiff:ey,LucideFileDigit:ty,LucideFileDown:ay,LucideFileEdit:I1,LucideFileHeart:ny,LucideFileImage:ry,LucideFileInput:oy,LucideFileJson:ly,LucideFileJson2:iy,LucideFileKey:dy,LucideFileKey2:cy,LucideFileLineChart:sy,LucideFileLock:yy,LucideFileLock2:hy,LucideFileMinus:py,LucideFileMinus2:uy,LucideFileMusic:ky,LucideFileOutput:gy,LucideFilePen:I1,LucideFilePenLine:S1,LucideFilePieChart:my,LucideFilePlus:fy,LucideFilePlus2:xy,LucideFileQuestion:vy,LucideFileScan:My,LucideFileSearch:Ly,LucideFileSearch2:wy,LucideFileSignature:S1,LucideFileSliders:by,LucideFileSpreadsheet:Cy,LucideFileStack:Sy,LucideFileSymlink:Iy,LucideFileTerminal:jy,LucideFileText:Rn,LucideFileType:zy,LucideFileType2:Hy,LucideFileUp:qy,LucideFileVideo:Py,LucideFileVideo2:Ay,LucideFileVolume:Ny,LucideFileVolume2:Dy,LucideFileWarning:Ty,LucideFileX:Fy,LucideFileX2:Vy,LucideFiles:By,LucideFilm:Ry,LucideFilter:Uy,LucideFilterX:Oy,LucideFingerprint:$y,LucideFireExtinguisher:_y,LucideFish:Gy,LucideFishOff:Zy,LucideFishSymbol:Wy,LucideFlag:Jy,LucideFlagOff:Ky,LucideFlagTriangleLeft:Xy,LucideFlagTriangleRight:Qy,LucideFlame:eu,LucideFlameKindling:Yy,LucideFlashlight:au,LucideFlashlightOff:tu,LucideFlaskConical:ru,LucideFlaskConicalOff:nu,LucideFlaskRound:ou,LucideFlipHorizontal:lu,LucideFlipHorizontal2:iu,LucideFlipVertical:du,LucideFlipVertical2:cu,LucideFlower:hu,LucideFlower2:su,LucideFocus:yu,LucideFoldHorizontal:uu,LucideFoldVertical:pu,LucideFolder:Ru,LucideFolderArchive:ku,LucideFolderCheck:gu,LucideFolderClock:mu,LucideFolderClosed:xu,LucideFolderCog:j1,LucideFolderCog2:j1,LucideFolderDot:fu,LucideFolderDown:vu,LucideFolderEdit:H1,LucideFolderGit:wu,LucideFolderGit2:Mu,LucideFolderHeart:Lu,LucideFolderInput:bu,LucideFolderKanban:Cu,LucideFolderKey:Su,LucideFolderLock:Iu,LucideFolderMinus:ju,LucideFolderOpen:zu,LucideFolderOpenDot:Hu,LucideFolderOutput:qu,LucideFolderPen:H1,LucideFolderPlus:Au,LucideFolderRoot:Pu,LucideFolderSearch:Nu,LucideFolderSearch2:Du,LucideFolderSymlink:Tu,LucideFolderSync:Vu,LucideFolderTree:Fu,LucideFolderUp:Eu,LucideFolderX:Bu,LucideFolders:Ou,LucideFootprints:Uu,LucideForklift:$u,LucideFormInput:_u,LucideForward:Zu,LucideFrame:Wu,LucideFramer:Gu,LucideFrown:Ku,LucideFuel:Xu,LucideFullscreen:Qu,LucideFunctionSquare:Ju,LucideGalleryHorizontal:ep,LucideGalleryHorizontalEnd:Yu,LucideGalleryThumbnails:tp,LucideGalleryVertical:np,LucideGalleryVerticalEnd:ap,LucideGamepad:op,LucideGamepad2:rp,LucideGanttChart:ip,LucideGanttChartSquare:at,LucideGanttSquare:at,LucideGauge:cp,LucideGaugeCircle:lp,LucideGavel:dp,LucideGem:sp,LucideGhost:hp,LucideGift:yp,LucideGitBranch:pp,LucideGitBranchPlus:up,LucideGitCommit:z1,LucideGitCommitHorizontal:z1,LucideGitCommitVertical:kp,LucideGitCompare:mp,LucideGitCompareArrows:gp,LucideGitFork:xp,LucideGitGraph:fp,LucideGitMerge:vp,LucideGitPullRequest:Sp,LucideGitPullRequestArrow:Mp,LucideGitPullRequestClosed:wp,LucideGitPullRequestCreate:bp,LucideGitPullRequestCreateArrow:Lp,LucideGitPullRequestDraft:Cp,LucideGithub:Ip,LucideGitlab:jp,LucideGlassWater:Hp,LucideGlasses:zp,LucideGlobe:Ga,LucideGlobe2:w1,LucideGlobeLock:qp,LucideGoal:Ap,LucideGrab:Pp,LucideGraduationCap:Dp,LucideGrape:Np,LucideGrid:nt,LucideGrid2X2:q1,LucideGrid2x2:q1,LucideGrid3X3:nt,LucideGrid3x3:nt,LucideGrip:Vp,LucideGripHorizontal:Tp,LucideGripVertical:Ka,LucideGroup:Fp,LucideGuitar:Ep,LucideHammer:Bp,LucideHand:_p,LucideHandCoins:Rp,LucideHandHeart:Op,LucideHandHelping:A1,LucideHandMetal:Up,LucideHandPlatter:$p,LucideHandshake:Zp,LucideHardDrive:Kp,LucideHardDriveDownload:Wp,LucideHardDriveUpload:Gp,LucideHardHat:Xp,LucideHash:Qp,LucideHaze:Jp,LucideHdmiPort:Yp,LucideHeading:ik,LucideHeading1:ek,LucideHeading2:tk,LucideHeading3:ak,LucideHeading4:nk,LucideHeading5:rk,LucideHeading6:ok,LucideHeadphones:lk,LucideHeadset:ck,LucideHeart:uk,LucideHeartCrack:dk,LucideHeartHandshake:sk,LucideHeartOff:hk,LucideHeartPulse:yk,LucideHeater:pk,LucideHelpCircle:On,LucideHelpingHand:A1,LucideHexagon:kk,LucideHighlighter:Un,LucideHistory:gk,LucideHome:mk,LucideHop:fk,LucideHopOff:xk,LucideHotel:vk,LucideHourglass:Mk,LucideIceCream:Lk,LucideIceCream2:wk,LucideImage:Hk,LucideImageDown:bk,LucideImageMinus:Ck,LucideImageOff:Sk,LucideImagePlus:Ik,LucideImageUp:jk,LucideImages:zk,LucideImport:qk,LucideInbox:Ak,LucideIndent:Pk,LucideIndianRupee:Dk,LucideInfinity:Nk,LucideInfo:Tk,LucideInspect:N1,LucideInspectionPanel:Vk,LucideInstagram:Fk,LucideItalic:$n,LucideIterationCcw:Ek,LucideIterationCw:Bk,LucideJapaneseYen:Rk,LucideJoystick:Ok,LucideKanban:Uk,LucideKanbanSquare:D1,LucideKanbanSquareDashed:P1,LucideKey:Zk,LucideKeyRound:$k,LucideKeySquare:_k,LucideKeyboard:Gk,LucideKeyboardMusic:Wk,LucideLamp:e4,LucideLampCeiling:Kk,LucideLampDesk:Xk,LucideLampFloor:Qk,LucideLampWallDown:Jk,LucideLampWallUp:Yk,LucideLandPlot:t4,LucideLandmark:a4,LucideLanguages:n4,LucideLaptop:o4,LucideLaptop2:r4,LucideLasso:l4,LucideLassoSelect:i4,LucideLaugh:c4,LucideLayers:h4,LucideLayers2:d4,LucideLayers3:s4,LucideLayout:$1,LucideLayoutDashboard:y4,LucideLayoutGrid:u4,LucideLayoutList:p4,LucideLayoutPanelLeft:k4,LucideLayoutPanelTop:g4,LucideLayoutTemplate:m4,LucideLeaf:x4,LucideLeafyGreen:f4,LucideLibrary:w4,LucideLibraryBig:v4,LucideLibrarySquare:M4,LucideLifeBuoy:L4,LucideLigature:b4,LucideLightbulb:S4,LucideLightbulbOff:C4,LucideLineChart:I4,LucideLink:z4,LucideLink2:H4,LucideLink2Off:j4,LucideLinkedin:q4,LucideList:Xa,LucideListChecks:A4,LucideListCollapse:P4,LucideListEnd:D4,LucideListFilter:N4,LucideListMinus:T4,LucideListMusic:V4,LucideListOrdered:_n,LucideListPlus:F4,LucideListRestart:E4,LucideListStart:B4,LucideListTodo:R4,LucideListTree:O4,LucideListVideo:U4,LucideListX:$4,LucideLoader:_4,LucideLoader2:Zn,LucideLocate:G4,LucideLocateFixed:Z4,LucideLocateOff:W4,LucideLock:Wn,LucideLockKeyhole:K4,LucideLogIn:Gn,LucideLogOut:Kn,LucideLollipop:X4,LucideLuggage:Q4,LucideMSquare:J4,LucideMagnet:Y4,LucideMail:c5,LucideMailCheck:e5,LucideMailMinus:t5,LucideMailOpen:a5,LucideMailPlus:n5,LucideMailQuestion:r5,LucideMailSearch:o5,LucideMailWarning:i5,LucideMailX:l5,LucideMailbox:d5,LucideMails:s5,LucideMap:p5,LucideMapPin:y5,LucideMapPinOff:h5,LucideMapPinned:u5,LucideMartini:k5,LucideMaximize:m5,LucideMaximize2:g5,LucideMedal:x5,LucideMegaphone:v5,LucideMegaphoneOff:f5,LucideMeh:M5,LucideMemoryStick:w5,LucideMenu:b5,LucideMenuSquare:L5,LucideMerge:C5,LucideMessageCircle:T5,LucideMessageCircleCode:S5,LucideMessageCircleDashed:I5,LucideMessageCircleHeart:j5,LucideMessageCircleMore:H5,LucideMessageCircleOff:z5,LucideMessageCirclePlus:q5,LucideMessageCircleQuestion:A5,LucideMessageCircleReply:P5,LucideMessageCircleWarning:D5,LucideMessageCircleX:N5,LucideMessageSquare:Q5,LucideMessageSquareCode:V5,LucideMessageSquareDashed:F5,LucideMessageSquareDiff:E5,LucideMessageSquareDot:B5,LucideMessageSquareHeart:R5,LucideMessageSquareMore:O5,LucideMessageSquareOff:U5,LucideMessageSquarePlus:$5,LucideMessageSquareQuote:_5,LucideMessageSquareReply:Z5,LucideMessageSquareShare:W5,LucideMessageSquareText:G5,LucideMessageSquareWarning:K5,LucideMessageSquareX:X5,LucideMessagesSquare:J5,LucideMic:t3,LucideMic2:Y5,LucideMicOff:e3,LucideMicroscope:a3,LucideMicrowave:n3,LucideMilestone:r3,LucideMilk:i3,LucideMilkOff:o3,LucideMinimize:c3,LucideMinimize2:l3,LucideMinus:h3,LucideMinusCircle:d3,LucideMinusSquare:s3,LucideMonitor:L3,LucideMonitorCheck:y3,LucideMonitorDot:u3,LucideMonitorDown:p3,LucideMonitorOff:k3,LucideMonitorPause:g3,LucideMonitorPlay:m3,LucideMonitorSmartphone:x3,LucideMonitorSpeaker:f3,LucideMonitorStop:v3,LucideMonitorUp:M3,LucideMonitorX:w3,LucideMoon:Xn,LucideMoonStar:b3,LucideMoreHorizontal:C3,LucideMoreVertical:S3,LucideMountain:j3,LucideMountainSnow:I3,LucideMouse:P3,LucideMousePointer:A3,LucideMousePointer2:H3,LucideMousePointerClick:z3,LucideMousePointerSquare:N1,LucideMousePointerSquareDashed:q3,LucideMove:xa,LucideMove3D:T1,LucideMove3d:T1,LucideMoveDiagonal:N3,LucideMoveDiagonal2:D3,LucideMoveDown:F3,LucideMoveDownLeft:T3,LucideMoveDownRight:V3,LucideMoveHorizontal:E3,LucideMoveLeft:B3,LucideMoveRight:R3,LucideMoveUp:$3,LucideMoveUpLeft:O3,LucideMoveUpRight:U3,LucideMoveVertical:_3,LucideMusic:K3,LucideMusic2:Z3,LucideMusic3:W3,LucideMusic4:G3,LucideNavigation:Y3,LucideNavigation2:Q3,LucideNavigation2Off:X3,LucideNavigationOff:J3,LucideNetwork:e6,LucideNewspaper:t6,LucideNfc:a6,LucideNotebook:i6,LucideNotebookPen:n6,LucideNotebookTabs:r6,LucideNotebookText:o6,LucideNotepadText:c6,LucideNotepadTextDashed:l6,LucideNut:s6,LucideNutOff:d6,LucideOctagon:h6,LucideOption:y6,LucideOrbit:u6,LucideOutdent:p6,LucidePackage:w6,LucidePackage2:k6,LucidePackageCheck:g6,LucidePackageMinus:m6,LucidePackageOpen:x6,LucidePackagePlus:f6,LucidePackageSearch:v6,LucidePackageX:M6,LucidePaintBucket:L6,LucidePaintRoller:b6,LucidePaintbrush:S6,LucidePaintbrush2:C6,LucidePalette:Qn,LucidePalmtree:I6,LucidePanelBottom:z6,LucidePanelBottomClose:j6,LucidePanelBottomDashed:V1,LucidePanelBottomInactive:V1,LucidePanelBottomOpen:H6,LucidePanelLeft:R1,LucidePanelLeftClose:F1,LucidePanelLeftDashed:E1,LucidePanelLeftInactive:E1,LucidePanelLeftOpen:B1,LucidePanelRight:P6,LucidePanelRightClose:q6,LucidePanelRightDashed:O1,LucidePanelRightInactive:O1,LucidePanelRightOpen:A6,LucidePanelTop:T6,LucidePanelTopClose:D6,LucidePanelTopDashed:U1,LucidePanelTopInactive:U1,LucidePanelTopOpen:N6,LucidePanelsLeftBottom:V6,LucidePanelsLeftRight:v1,LucidePanelsRightBottom:F6,LucidePanelsTopBottom:K1,LucidePanelsTopLeft:$1,LucidePaperclip:E6,LucideParentheses:B6,LucideParkingCircle:O6,LucideParkingCircleOff:R6,LucideParkingMeter:U6,LucideParkingSquare:_6,LucideParkingSquareOff:$6,LucidePartyPopper:Z6,LucidePause:K6,LucidePauseCircle:W6,LucidePauseOctagon:G6,LucidePawPrint:X6,LucidePcCase:Q6,LucidePen:Z1,LucidePenBox:Se,LucidePenLine:_1,LucidePenSquare:Se,LucidePenTool:Jn,LucidePencil:eg,LucidePencilLine:J6,LucidePencilRuler:Y6,LucidePentagon:tg,LucidePercent:og,LucidePercentCircle:ag,LucidePercentDiamond:ng,LucidePercentSquare:rg,LucidePersonStanding:ig,LucidePhone:ug,LucidePhoneCall:lg,LucidePhoneForwarded:cg,LucidePhoneIncoming:dg,LucidePhoneMissed:sg,LucidePhoneOff:hg,LucidePhoneOutgoing:yg,LucidePi:kg,LucidePiSquare:pg,LucidePiano:gg,LucidePickaxe:mg,LucidePictureInPicture:fg,LucidePictureInPicture2:xg,LucidePieChart:vg,LucidePiggyBank:Mg,LucidePilcrow:Lg,LucidePilcrowSquare:wg,LucidePill:bg,LucidePin:Sg,LucidePinOff:Cg,LucidePipette:Ig,LucidePizza:jg,LucidePlane:qg,LucidePlaneLanding:Hg,LucidePlaneTakeoff:zg,LucidePlay:Dg,LucidePlayCircle:Ag,LucidePlaySquare:Pg,LucidePlug:Fg,LucidePlug2:Ng,LucidePlugZap:Vg,LucidePlugZap2:Tg,LucidePlus:it,LucidePlusCircle:Eg,LucidePlusSquare:Bg,LucidePocket:Og,LucidePocketKnife:Rg,LucidePodcast:Ug,LucidePointer:_g,LucidePointerOff:$g,LucidePopcorn:Zg,LucidePopsicle:Wg,LucidePoundSterling:Gg,LucidePower:Jg,LucidePowerCircle:Kg,LucidePowerOff:Xg,LucidePowerSquare:Qg,LucidePresentation:Yg,LucidePrinter:e8,LucideProjector:t8,LucidePuzzle:a8,LucidePyramid:n8,LucideQrCode:r8,LucideQuote:o8,LucideRabbit:i8,LucideRadar:l8,LucideRadiation:c8,LucideRadical:d8,LucideRadio:y8,LucideRadioReceiver:s8,LucideRadioTower:h8,LucideRadius:u8,LucideRailSymbol:p8,LucideRainbow:k8,LucideRat:g8,LucideRatio:m8,LucideReceipt:S8,LucideReceiptCent:x8,LucideReceiptEuro:f8,LucideReceiptIndianRupee:v8,LucideReceiptJapaneseYen:M8,LucideReceiptPoundSterling:w8,LucideReceiptRussianRuble:L8,LucideReceiptSwissFranc:b8,LucideReceiptText:C8,LucideRectangleHorizontal:I8,LucideRectangleVertical:j8,LucideRecycle:H8,LucideRedo:A8,LucideRedo2:z8,LucideRedoDot:q8,LucideRefreshCcw:D8,LucideRefreshCcwDot:P8,LucideRefreshCw:T8,LucideRefreshCwOff:N8,LucideRefrigerator:V8,LucideRegex:F8,LucideRemoveFormatting:E8,LucideRepeat:O8,LucideRepeat1:B8,LucideRepeat2:R8,LucideReplace:$8,LucideReplaceAll:U8,LucideReply:Z8,LucideReplyAll:_8,LucideRewind:W8,LucideRibbon:G8,LucideRocket:K8,LucideRockingChair:X8,LucideRollerCoaster:Q8,LucideRotate3D:W1,LucideRotate3d:W1,LucideRotateCcw:Yn,LucideRotateCw:J8,LucideRoute:em,LucideRouteOff:Y8,LucideRouter:tm,LucideRows:G1,LucideRows2:G1,LucideRows3:K1,LucideRows4:am,LucideRss:nm,LucideRuler:rm,LucideRussianRuble:om,LucideSailboat:im,LucideSalad:lm,LucideSandwich:cm,LucideSatellite:sm,LucideSatelliteDish:dm,LucideSave:xt,LucideSaveAll:hm,LucideScale:ym,LucideScale3D:X1,LucideScale3d:X1,LucideScaling:um,LucideScan:vm,LucideScanBarcode:pm,LucideScanEye:km,LucideScanFace:gm,LucideScanLine:mm,LucideScanSearch:xm,LucideScanText:fm,LucideScatterChart:Mm,LucideSchool:Lm,LucideSchool2:wm,LucideScissors:Im,LucideScissorsLineDashed:bm,LucideScissorsSquare:Sm,LucideScissorsSquareDashedBottom:Cm,LucideScreenShare:Hm,LucideScreenShareOff:jm,LucideScroll:qm,LucideScrollText:zm,LucideSearch:Tm,LucideSearchCheck:Am,LucideSearchCode:Pm,LucideSearchSlash:Dm,LucideSearchX:Nm,LucideSend:Fm,LucideSendHorizonal:Q1,LucideSendHorizontal:Q1,LucideSendToBack:Vm,LucideSeparatorHorizontal:Em,LucideSeparatorVertical:Bm,LucideServer:$m,LucideServerCog:Rm,LucideServerCrash:Om,LucideServerOff:Um,LucideSettings:er,LucideSettings2:_m,LucideShapes:Zm,LucideShare:Gm,LucideShare2:Wm,LucideSheet:Km,LucideShell:Xm,LucideShield:ix,LucideShieldAlert:Qm,LucideShieldBan:Jm,LucideShieldCheck:Ym,LucideShieldClose:J1,LucideShieldEllipsis:ex,LucideShieldHalf:tx,LucideShieldMinus:ax,LucideShieldOff:nx,LucideShieldPlus:rx,LucideShieldQuestion:ox,LucideShieldX:J1,LucideShip:cx,LucideShipWheel:lx,LucideShirt:dx,LucideShoppingBag:sx,LucideShoppingBasket:hx,LucideShoppingCart:yx,LucideShovel:ux,LucideShowerHead:px,LucideShrink:kx,LucideShrub:gx,LucideShuffle:mx,LucideSidebar:R1,LucideSidebarClose:F1,LucideSidebarOpen:B1,LucideSigma:fx,LucideSigmaSquare:xx,LucideSignal:bx,LucideSignalHigh:vx,LucideSignalLow:Mx,LucideSignalMedium:wx,LucideSignalZero:Lx,LucideSignpost:Sx,LucideSignpostBig:Cx,LucideSiren:Ix,LucideSkipBack:jx,LucideSkipForward:Hx,LucideSkull:zx,LucideSlack:qx,LucideSlash:Ax,LucideSlashSquare:Y1,LucideSlice:Px,LucideSliders:Nx,LucideSlidersHorizontal:Dx,LucideSmartphone:Fx,LucideSmartphoneCharging:Tx,LucideSmartphoneNfc:Vx,LucideSmile:Bx,LucideSmilePlus:Ex,LucideSnail:Rx,LucideSnowflake:Ox,LucideSofa:Ux,LucideSortAsc:n1,LucideSortDesc:e1,LucideSoup:$x,LucideSpace:_x,LucideSpade:Zx,LucideSparkle:Wx,LucideSparkles:ea,LucideSpeaker:Gx,LucideSpeech:Kx,LucideSpellCheck:Qx,LucideSpellCheck2:Xx,LucideSpline:Jx,LucideSplit:t7,LucideSplitSquareHorizontal:Yx,LucideSplitSquareVertical:e7,LucideSprayCan:a7,LucideSprout:n7,LucideSquare:c7,LucideSquareAsterisk:o1,LucideSquareCode:x1,LucideSquareDashedBottom:o7,LucideSquareDashedBottomCode:r7,LucideSquareDot:M1,LucideSquareEqual:L1,LucideSquareGantt:at,LucideSquareKanban:D1,LucideSquareKanbanDashed:P1,LucideSquarePen:Se,LucideSquareRadical:i7,LucideSquareSlash:Y1,LucideSquareStack:l7,LucideSquareUser:aa,LucideSquareUserRound:ta,LucideSquircle:d7,LucideSquirrel:s7,LucideStamp:h7,LucideStar:p7,LucideStarHalf:y7,LucideStarOff:u7,LucideStars:ea,LucideStepBack:k7,LucideStepForward:g7,LucideStethoscope:m7,LucideSticker:x7,LucideStickyNote:f7,LucideStopCircle:v7,LucideStore:M7,LucideStretchHorizontal:w7,LucideStretchVertical:L7,LucideStrikethrough:b7,LucideSubscript:C7,LucideSubtitles:y1,LucideSun:tr,LucideSunDim:S7,LucideSunMedium:I7,LucideSunMoon:j7,LucideSunSnow:H7,LucideSunrise:z7,LucideSunset:q7,LucideSuperscript:A7,LucideSwatchBook:P7,LucideSwissFranc:D7,LucideSwitchCamera:N7,LucideSword:T7,LucideSwords:V7,LucideSyringe:F7,LucideTable:_7,LucideTable2:E7,LucideTableCellsMerge:B7,LucideTableCellsSplit:R7,LucideTableColumnsSplit:O7,LucideTableProperties:U7,LucideTableRowsSplit:$7,LucideTablet:W7,LucideTabletSmartphone:Z7,LucideTablets:G7,LucideTag:K7,LucideTags:X7,LucideTally1:Q7,LucideTally2:J7,LucideTally3:Y7,LucideTally4:ef,LucideTally5:tf,LucideTangent:af,LucideTarget:nf,LucideTelescope:rf,LucideTent:lf,LucideTentTree:of,LucideTerminal:df,LucideTerminalSquare:cf,LucideTestTube:hf,LucideTestTube2:sf,LucideTestTubes:yf,LucideText:mf,LucideTextCursor:pf,LucideTextCursorInput:uf,LucideTextQuote:kf,LucideTextSearch:gf,LucideTextSelect:na,LucideTextSelection:na,LucideTheater:xf,LucideThermometer:Mf,LucideThermometerSnowflake:ff,LucideThermometerSun:vf,LucideThumbsDown:wf,LucideThumbsUp:Lf,LucideTicket:zf,LucideTicketCheck:bf,LucideTicketMinus:Cf,LucideTicketPercent:Sf,LucideTicketPlus:If,LucideTicketSlash:jf,LucideTicketX:Hf,LucideTimer:Pf,LucideTimerOff:qf,LucideTimerReset:Af,LucideToggleLeft:Df,LucideToggleRight:Nf,LucideTornado:Tf,LucideTorus:Vf,LucideTouchpad:Ef,LucideTouchpadOff:Ff,LucideTowerControl:Bf,LucideToyBrick:Rf,LucideTractor:Of,LucideTrafficCone:Uf,LucideTrain:ra,LucideTrainFront:_f,LucideTrainFrontTunnel:$f,LucideTrainTrack:Zf,LucideTramFront:ra,LucideTrash:Wf,LucideTrash2:Xe,LucideTreeDeciduous:Gf,LucideTreePine:Kf,LucideTrees:Xf,LucideTrello:Qf,LucideTrendingDown:Jf,LucideTrendingUp:Yf,LucideTriangle:tv,LucideTriangleRight:ev,LucideTrophy:av,LucideTruck:nv,LucideTurtle:rv,LucideTv:iv,LucideTv2:ov,LucideTwitch:lv,LucideTwitter:cv,LucideType:ar,LucideUmbrella:sv,LucideUmbrellaOff:dv,LucideUnderline:nr,LucideUndo:uv,LucideUndo2:hv,LucideUndoDot:yv,LucideUnfoldHorizontal:pv,LucideUnfoldVertical:kv,LucideUngroup:gv,LucideUnlink:xv,LucideUnlink2:mv,LucideUnlock:vv,LucideUnlockKeyhole:fv,LucideUnplug:Mv,LucideUpload:Lv,LucideUploadCloud:wv,LucideUsb:bv,LucideUser:fa,LucideUser2:sa,LucideUserCheck:Cv,LucideUserCheck2:oa,LucideUserCircle:k1,LucideUserCircle2:p1,LucideUserCog:Sv,LucideUserCog2:ia,LucideUserMinus:Iv,LucideUserMinus2:la,LucideUserPlus:jv,LucideUserPlus2:ca,LucideUserRound:sa,LucideUserRoundCheck:oa,LucideUserRoundCog:ia,LucideUserRoundMinus:la,LucideUserRoundPlus:ca,LucideUserRoundSearch:Hv,LucideUserRoundX:da,LucideUserSearch:zv,LucideUserSquare:aa,LucideUserSquare2:ta,LucideUserX:qv,LucideUserX2:da,LucideUsers:Av,LucideUsers2:ha,LucideUsersRound:ha,LucideUtensils:Dv,LucideUtensilsCrossed:Pv,LucideUtilityPole:Nv,LucideVariable:Tv,LucideVault:Vv,LucideVegan:Fv,LucideVenetianMask:Ev,LucideVerified:l1,LucideVibrate:Rv,LucideVibrateOff:Bv,LucideVideo:Uv,LucideVideoOff:Ov,LucideVideotape:$v,LucideView:_v,LucideVoicemail:Zv,LucideVolume:Gv,LucideVolume1:Wv,LucideVolume2:Qa,LucideVolumeX:Ja,LucideVote:Kv,LucideWallet:Jv,LucideWallet2:Xv,LucideWalletCards:Qv,LucideWallpaper:Yv,LucideWand:tM,LucideWand2:eM,LucideWarehouse:aM,LucideWashingMachine:nM,LucideWatch:rM,LucideWaves:oM,LucideWaypoints:iM,LucideWebcam:lM,LucideWebhook:dM,LucideWebhookOff:cM,LucideWeight:sM,LucideWheat:yM,LucideWheatOff:hM,LucideWholeWord:uM,LucideWifi:or,LucideWifiOff:rr,LucideWind:pM,LucideWine:gM,LucideWineOff:kM,LucideWorkflow:mM,LucideWrapText:xM,LucideWrench:fM,LucideX:Ya,LucideXCircle:va,LucideXOctagon:vM,LucideXSquare:MM,LucideYoutube:wM,LucideZap:bM,LucideZapOff:LM,LucideZoomIn:CM,LucideZoomOut:SM,Luggage:Q4,LuggageIcon:Q4,MSquare:J4,MSquareIcon:J4,Magnet:Y4,MagnetIcon:Y4,Mail:c5,MailCheck:e5,MailCheckIcon:e5,MailIcon:c5,MailMinus:t5,MailMinusIcon:t5,MailOpen:a5,MailOpenIcon:a5,MailPlus:n5,MailPlusIcon:n5,MailQuestion:r5,MailQuestionIcon:r5,MailSearch:o5,MailSearchIcon:o5,MailWarning:i5,MailWarningIcon:i5,MailX:l5,MailXIcon:l5,Mailbox:d5,MailboxIcon:d5,Mails:s5,MailsIcon:s5,Map:p5,MapIcon:p5,MapPin:y5,MapPinIcon:y5,MapPinOff:h5,MapPinOffIcon:h5,MapPinned:u5,MapPinnedIcon:u5,Martini:k5,MartiniIcon:k5,Maximize:m5,Maximize2:g5,Maximize2Icon:g5,MaximizeIcon:m5,Medal:x5,MedalIcon:x5,Megaphone:v5,MegaphoneIcon:v5,MegaphoneOff:f5,MegaphoneOffIcon:f5,Meh:M5,MehIcon:M5,MemoryStick:w5,MemoryStickIcon:w5,Menu:b5,MenuIcon:b5,MenuSquare:L5,MenuSquareIcon:L5,Merge:C5,MergeIcon:C5,MessageCircle:T5,MessageCircleCode:S5,MessageCircleCodeIcon:S5,MessageCircleDashed:I5,MessageCircleDashedIcon:I5,MessageCircleHeart:j5,MessageCircleHeartIcon:j5,MessageCircleIcon:T5,MessageCircleMore:H5,MessageCircleMoreIcon:H5,MessageCircleOff:z5,MessageCircleOffIcon:z5,MessageCirclePlus:q5,MessageCirclePlusIcon:q5,MessageCircleQuestion:A5,MessageCircleQuestionIcon:A5,MessageCircleReply:P5,MessageCircleReplyIcon:P5,MessageCircleWarning:D5,MessageCircleWarningIcon:D5,MessageCircleX:N5,MessageCircleXIcon:N5,MessageSquare:Q5,MessageSquareCode:V5,MessageSquareCodeIcon:V5,MessageSquareDashed:F5,MessageSquareDashedIcon:F5,MessageSquareDiff:E5,MessageSquareDiffIcon:E5,MessageSquareDot:B5,MessageSquareDotIcon:B5,MessageSquareHeart:R5,MessageSquareHeartIcon:R5,MessageSquareIcon:Q5,MessageSquareMore:O5,MessageSquareMoreIcon:O5,MessageSquareOff:U5,MessageSquareOffIcon:U5,MessageSquarePlus:$5,MessageSquarePlusIcon:$5,MessageSquareQuote:_5,MessageSquareQuoteIcon:_5,MessageSquareReply:Z5,MessageSquareReplyIcon:Z5,MessageSquareShare:W5,MessageSquareShareIcon:W5,MessageSquareText:G5,MessageSquareTextIcon:G5,MessageSquareWarning:K5,MessageSquareWarningIcon:K5,MessageSquareX:X5,MessageSquareXIcon:X5,MessagesSquare:J5,MessagesSquareIcon:J5,Mic:t3,Mic2:Y5,Mic2Icon:Y5,MicIcon:t3,MicOff:e3,MicOffIcon:e3,Microscope:a3,MicroscopeIcon:a3,Microwave:n3,MicrowaveIcon:n3,Milestone:r3,MilestoneIcon:r3,Milk:i3,MilkIcon:i3,MilkOff:o3,MilkOffIcon:o3,Minimize:c3,Minimize2:l3,Minimize2Icon:l3,MinimizeIcon:c3,Minus:h3,MinusCircle:d3,MinusCircleIcon:d3,MinusIcon:h3,MinusSquare:s3,MinusSquareIcon:s3,Monitor:L3,MonitorCheck:y3,MonitorCheckIcon:y3,MonitorDot:u3,MonitorDotIcon:u3,MonitorDown:p3,MonitorDownIcon:p3,MonitorIcon:L3,MonitorOff:k3,MonitorOffIcon:k3,MonitorPause:g3,MonitorPauseIcon:g3,MonitorPlay:m3,MonitorPlayIcon:m3,MonitorSmartphone:x3,MonitorSmartphoneIcon:x3,MonitorSpeaker:f3,MonitorSpeakerIcon:f3,MonitorStop:v3,MonitorStopIcon:v3,MonitorUp:M3,MonitorUpIcon:M3,MonitorX:w3,MonitorXIcon:w3,Moon:Xn,MoonIcon:Xn,MoonStar:b3,MoonStarIcon:b3,MoreHorizontal:C3,MoreHorizontalIcon:C3,MoreVertical:S3,MoreVerticalIcon:S3,Mountain:j3,MountainIcon:j3,MountainSnow:I3,MountainSnowIcon:I3,Mouse:P3,MouseIcon:P3,MousePointer:A3,MousePointer2:H3,MousePointer2Icon:H3,MousePointerClick:z3,MousePointerClickIcon:z3,MousePointerIcon:A3,MousePointerSquare:N1,MousePointerSquareDashed:q3,MousePointerSquareDashedIcon:q3,MousePointerSquareIcon:N1,Move:xa,Move3D:T1,Move3DIcon:T1,Move3d:T1,Move3dIcon:T1,MoveDiagonal:N3,MoveDiagonal2:D3,MoveDiagonal2Icon:D3,MoveDiagonalIcon:N3,MoveDown:F3,MoveDownIcon:F3,MoveDownLeft:T3,MoveDownLeftIcon:T3,MoveDownRight:V3,MoveDownRightIcon:V3,MoveHorizontal:E3,MoveHorizontalIcon:E3,MoveIcon:xa,MoveLeft:B3,MoveLeftIcon:B3,MoveRight:R3,MoveRightIcon:R3,MoveUp:$3,MoveUpIcon:$3,MoveUpLeft:O3,MoveUpLeftIcon:O3,MoveUpRight:U3,MoveUpRightIcon:U3,MoveVertical:_3,MoveVerticalIcon:_3,Music:K3,Music2:Z3,Music2Icon:Z3,Music3:W3,Music3Icon:W3,Music4:G3,Music4Icon:G3,MusicIcon:K3,Navigation:Y3,Navigation2:Q3,Navigation2Icon:Q3,Navigation2Off:X3,Navigation2OffIcon:X3,NavigationIcon:Y3,NavigationOff:J3,NavigationOffIcon:J3,Network:e6,NetworkIcon:e6,Newspaper:t6,NewspaperIcon:t6,Nfc:a6,NfcIcon:a6,Notebook:i6,NotebookIcon:i6,NotebookPen:n6,NotebookPenIcon:n6,NotebookTabs:r6,NotebookTabsIcon:r6,NotebookText:o6,NotebookTextIcon:o6,NotepadText:c6,NotepadTextDashed:l6,NotepadTextDashedIcon:l6,NotepadTextIcon:c6,Nut:s6,NutIcon:s6,NutOff:d6,NutOffIcon:d6,Octagon:h6,OctagonIcon:h6,Option:y6,OptionIcon:y6,Orbit:u6,OrbitIcon:u6,Outdent:p6,OutdentIcon:p6,Package:w6,Package2:k6,Package2Icon:k6,PackageCheck:g6,PackageCheckIcon:g6,PackageIcon:w6,PackageMinus:m6,PackageMinusIcon:m6,PackageOpen:x6,PackageOpenIcon:x6,PackagePlus:f6,PackagePlusIcon:f6,PackageSearch:v6,PackageSearchIcon:v6,PackageX:M6,PackageXIcon:M6,PaintBucket:L6,PaintBucketIcon:L6,PaintRoller:b6,PaintRollerIcon:b6,Paintbrush:S6,Paintbrush2:C6,Paintbrush2Icon:C6,PaintbrushIcon:S6,Palette:Qn,PaletteIcon:Qn,Palmtree:I6,PalmtreeIcon:I6,PanelBottom:z6,PanelBottomClose:j6,PanelBottomCloseIcon:j6,PanelBottomDashed:V1,PanelBottomDashedIcon:V1,PanelBottomIcon:z6,PanelBottomInactive:V1,PanelBottomInactiveIcon:V1,PanelBottomOpen:H6,PanelBottomOpenIcon:H6,PanelLeft:R1,PanelLeftClose:F1,PanelLeftCloseIcon:F1,PanelLeftDashed:E1,PanelLeftDashedIcon:E1,PanelLeftIcon:R1,PanelLeftInactive:E1,PanelLeftInactiveIcon:E1,PanelLeftOpen:B1,PanelLeftOpenIcon:B1,PanelRight:P6,PanelRightClose:q6,PanelRightCloseIcon:q6,PanelRightDashed:O1,PanelRightDashedIcon:O1,PanelRightIcon:P6,PanelRightInactive:O1,PanelRightInactiveIcon:O1,PanelRightOpen:A6,PanelRightOpenIcon:A6,PanelTop:T6,PanelTopClose:D6,PanelTopCloseIcon:D6,PanelTopDashed:U1,PanelTopDashedIcon:U1,PanelTopIcon:T6,PanelTopInactive:U1,PanelTopInactiveIcon:U1,PanelTopOpen:N6,PanelTopOpenIcon:N6,PanelsLeftBottom:V6,PanelsLeftBottomIcon:V6,PanelsLeftRight:v1,PanelsLeftRightIcon:v1,PanelsRightBottom:F6,PanelsRightBottomIcon:F6,PanelsTopBottom:K1,PanelsTopBottomIcon:K1,PanelsTopLeft:$1,PanelsTopLeftIcon:$1,Paperclip:E6,PaperclipIcon:E6,Parentheses:B6,ParenthesesIcon:B6,ParkingCircle:O6,ParkingCircleIcon:O6,ParkingCircleOff:R6,ParkingCircleOffIcon:R6,ParkingMeter:U6,ParkingMeterIcon:U6,ParkingSquare:_6,ParkingSquareIcon:_6,ParkingSquareOff:$6,ParkingSquareOffIcon:$6,PartyPopper:Z6,PartyPopperIcon:Z6,Pause:K6,PauseCircle:W6,PauseCircleIcon:W6,PauseIcon:K6,PauseOctagon:G6,PauseOctagonIcon:G6,PawPrint:X6,PawPrintIcon:X6,PcCase:Q6,PcCaseIcon:Q6,Pen:Z1,PenBox:Se,PenBoxIcon:Se,PenIcon:Z1,PenLine:_1,PenLineIcon:_1,PenSquare:Se,PenSquareIcon:Se,PenTool:Jn,PenToolIcon:Jn,Pencil:eg,PencilIcon:eg,PencilLine:J6,PencilLineIcon:J6,PencilRuler:Y6,PencilRulerIcon:Y6,Pentagon:tg,PentagonIcon:tg,Percent:og,PercentCircle:ag,PercentCircleIcon:ag,PercentDiamond:ng,PercentDiamondIcon:ng,PercentIcon:og,PercentSquare:rg,PercentSquareIcon:rg,PersonStanding:ig,PersonStandingIcon:ig,Phone:ug,PhoneCall:lg,PhoneCallIcon:lg,PhoneForwarded:cg,PhoneForwardedIcon:cg,PhoneIcon:ug,PhoneIncoming:dg,PhoneIncomingIcon:dg,PhoneMissed:sg,PhoneMissedIcon:sg,PhoneOff:hg,PhoneOffIcon:hg,PhoneOutgoing:yg,PhoneOutgoingIcon:yg,Pi:kg,PiIcon:kg,PiSquare:pg,PiSquareIcon:pg,Piano:gg,PianoIcon:gg,Pickaxe:mg,PickaxeIcon:mg,PictureInPicture:fg,PictureInPicture2:xg,PictureInPicture2Icon:xg,PictureInPictureIcon:fg,PieChart:vg,PieChartIcon:vg,PiggyBank:Mg,PiggyBankIcon:Mg,Pilcrow:Lg,PilcrowIcon:Lg,PilcrowSquare:wg,PilcrowSquareIcon:wg,Pill:bg,PillIcon:bg,Pin:Sg,PinIcon:Sg,PinOff:Cg,PinOffIcon:Cg,Pipette:Ig,PipetteIcon:Ig,Pizza:jg,PizzaIcon:jg,Plane:qg,PlaneIcon:qg,PlaneLanding:Hg,PlaneLandingIcon:Hg,PlaneTakeoff:zg,PlaneTakeoffIcon:zg,Play:Dg,PlayCircle:Ag,PlayCircleIcon:Ag,PlayIcon:Dg,PlaySquare:Pg,PlaySquareIcon:Pg,Plug:Fg,Plug2:Ng,Plug2Icon:Ng,PlugIcon:Fg,PlugZap:Vg,PlugZap2:Tg,PlugZap2Icon:Tg,PlugZapIcon:Vg,Plus:it,PlusCircle:Eg,PlusCircleIcon:Eg,PlusIcon:it,PlusSquare:Bg,PlusSquareIcon:Bg,Pocket:Og,PocketIcon:Og,PocketKnife:Rg,PocketKnifeIcon:Rg,Podcast:Ug,PodcastIcon:Ug,Pointer:_g,PointerIcon:_g,PointerOff:$g,PointerOffIcon:$g,Popcorn:Zg,PopcornIcon:Zg,Popsicle:Wg,PopsicleIcon:Wg,PoundSterling:Gg,PoundSterlingIcon:Gg,Power:Jg,PowerCircle:Kg,PowerCircleIcon:Kg,PowerIcon:Jg,PowerOff:Xg,PowerOffIcon:Xg,PowerSquare:Qg,PowerSquareIcon:Qg,Presentation:Yg,PresentationIcon:Yg,Printer:e8,PrinterIcon:e8,Projector:t8,ProjectorIcon:t8,Puzzle:a8,PuzzleIcon:a8,Pyramid:n8,PyramidIcon:n8,QrCode:r8,QrCodeIcon:r8,Quote:o8,QuoteIcon:o8,Rabbit:i8,RabbitIcon:i8,Radar:l8,RadarIcon:l8,Radiation:c8,RadiationIcon:c8,Radical:d8,RadicalIcon:d8,Radio:y8,RadioIcon:y8,RadioReceiver:s8,RadioReceiverIcon:s8,RadioTower:h8,RadioTowerIcon:h8,Radius:u8,RadiusIcon:u8,RailSymbol:p8,RailSymbolIcon:p8,Rainbow:k8,RainbowIcon:k8,Rat:g8,RatIcon:g8,Ratio:m8,RatioIcon:m8,Receipt:S8,ReceiptCent:x8,ReceiptCentIcon:x8,ReceiptEuro:f8,ReceiptEuroIcon:f8,ReceiptIcon:S8,ReceiptIndianRupee:v8,ReceiptIndianRupeeIcon:v8,ReceiptJapaneseYen:M8,ReceiptJapaneseYenIcon:M8,ReceiptPoundSterling:w8,ReceiptPoundSterlingIcon:w8,ReceiptRussianRuble:L8,ReceiptRussianRubleIcon:L8,ReceiptSwissFranc:b8,ReceiptSwissFrancIcon:b8,ReceiptText:C8,ReceiptTextIcon:C8,RectangleHorizontal:I8,RectangleHorizontalIcon:I8,RectangleVertical:j8,RectangleVerticalIcon:j8,Recycle:H8,RecycleIcon:H8,Redo:A8,Redo2:z8,Redo2Icon:z8,RedoDot:q8,RedoDotIcon:q8,RedoIcon:A8,RefreshCcw:D8,RefreshCcwDot:P8,RefreshCcwDotIcon:P8,RefreshCcwIcon:D8,RefreshCw:T8,RefreshCwIcon:T8,RefreshCwOff:N8,RefreshCwOffIcon:N8,Refrigerator:V8,RefrigeratorIcon:V8,Regex:F8,RegexIcon:F8,RemoveFormatting:E8,RemoveFormattingIcon:E8,Repeat:O8,Repeat1:B8,Repeat1Icon:B8,Repeat2:R8,Repeat2Icon:R8,RepeatIcon:O8,Replace:$8,ReplaceAll:U8,ReplaceAllIcon:U8,ReplaceIcon:$8,Reply:Z8,ReplyAll:_8,ReplyAllIcon:_8,ReplyIcon:Z8,Rewind:W8,RewindIcon:W8,Ribbon:G8,RibbonIcon:G8,Rocket:K8,RocketIcon:K8,RockingChair:X8,RockingChairIcon:X8,RollerCoaster:Q8,RollerCoasterIcon:Q8,Rotate3D:W1,Rotate3DIcon:W1,Rotate3d:W1,Rotate3dIcon:W1,RotateCcw:Yn,RotateCcwIcon:Yn,RotateCw:J8,RotateCwIcon:J8,Route:em,RouteIcon:em,RouteOff:Y8,RouteOffIcon:Y8,Router:tm,RouterIcon:tm,Rows:G1,Rows2:G1,Rows2Icon:G1,Rows3:K1,Rows3Icon:K1,Rows4:am,Rows4Icon:am,RowsIcon:G1,Rss:nm,RssIcon:nm,Ruler:rm,RulerIcon:rm,RussianRuble:om,RussianRubleIcon:om,Sailboat:im,SailboatIcon:im,Salad:lm,SaladIcon:lm,Sandwich:cm,SandwichIcon:cm,Satellite:sm,SatelliteDish:dm,SatelliteDishIcon:dm,SatelliteIcon:sm,Save:xt,SaveAll:hm,SaveAllIcon:hm,SaveIcon:xt,Scale:ym,Scale3D:X1,Scale3DIcon:X1,Scale3d:X1,Scale3dIcon:X1,ScaleIcon:ym,Scaling:um,ScalingIcon:um,Scan:vm,ScanBarcode:pm,ScanBarcodeIcon:pm,ScanEye:km,ScanEyeIcon:km,ScanFace:gm,ScanFaceIcon:gm,ScanIcon:vm,ScanLine:mm,ScanLineIcon:mm,ScanSearch:xm,ScanSearchIcon:xm,ScanText:fm,ScanTextIcon:fm,ScatterChart:Mm,ScatterChartIcon:Mm,School:Lm,School2:wm,School2Icon:wm,SchoolIcon:Lm,Scissors:Im,ScissorsIcon:Im,ScissorsLineDashed:bm,ScissorsLineDashedIcon:bm,ScissorsSquare:Sm,ScissorsSquareDashedBottom:Cm,ScissorsSquareDashedBottomIcon:Cm,ScissorsSquareIcon:Sm,ScreenShare:Hm,ScreenShareIcon:Hm,ScreenShareOff:jm,ScreenShareOffIcon:jm,Scroll:qm,ScrollIcon:qm,ScrollText:zm,ScrollTextIcon:zm,Search:Tm,SearchCheck:Am,SearchCheckIcon:Am,SearchCode:Pm,SearchCodeIcon:Pm,SearchIcon:Tm,SearchSlash:Dm,SearchSlashIcon:Dm,SearchX:Nm,SearchXIcon:Nm,Send:Fm,SendHorizonal:Q1,SendHorizonalIcon:Q1,SendHorizontal:Q1,SendHorizontalIcon:Q1,SendIcon:Fm,SendToBack:Vm,SendToBackIcon:Vm,SeparatorHorizontal:Em,SeparatorHorizontalIcon:Em,SeparatorVertical:Bm,SeparatorVerticalIcon:Bm,Server:$m,ServerCog:Rm,ServerCogIcon:Rm,ServerCrash:Om,ServerCrashIcon:Om,ServerIcon:$m,ServerOff:Um,ServerOffIcon:Um,Settings:er,Settings2:_m,Settings2Icon:_m,SettingsIcon:er,Shapes:Zm,ShapesIcon:Zm,Share:Gm,Share2:Wm,Share2Icon:Wm,ShareIcon:Gm,Sheet:Km,SheetIcon:Km,Shell:Xm,ShellIcon:Xm,Shield:ix,ShieldAlert:Qm,ShieldAlertIcon:Qm,ShieldBan:Jm,ShieldBanIcon:Jm,ShieldCheck:Ym,ShieldCheckIcon:Ym,ShieldClose:J1,ShieldCloseIcon:J1,ShieldEllipsis:ex,ShieldEllipsisIcon:ex,ShieldHalf:tx,ShieldHalfIcon:tx,ShieldIcon:ix,ShieldMinus:ax,ShieldMinusIcon:ax,ShieldOff:nx,ShieldOffIcon:nx,ShieldPlus:rx,ShieldPlusIcon:rx,ShieldQuestion:ox,ShieldQuestionIcon:ox,ShieldX:J1,ShieldXIcon:J1,Ship:cx,ShipIcon:cx,ShipWheel:lx,ShipWheelIcon:lx,Shirt:dx,ShirtIcon:dx,ShoppingBag:sx,ShoppingBagIcon:sx,ShoppingBasket:hx,ShoppingBasketIcon:hx,ShoppingCart:yx,ShoppingCartIcon:yx,Shovel:ux,ShovelIcon:ux,ShowerHead:px,ShowerHeadIcon:px,Shrink:kx,ShrinkIcon:kx,Shrub:gx,ShrubIcon:gx,Shuffle:mx,ShuffleIcon:mx,Sidebar:R1,SidebarClose:F1,SidebarCloseIcon:F1,SidebarIcon:R1,SidebarOpen:B1,SidebarOpenIcon:B1,Sigma:fx,SigmaIcon:fx,SigmaSquare:xx,SigmaSquareIcon:xx,Signal:bx,SignalHigh:vx,SignalHighIcon:vx,SignalIcon:bx,SignalLow:Mx,SignalLowIcon:Mx,SignalMedium:wx,SignalMediumIcon:wx,SignalZero:Lx,SignalZeroIcon:Lx,Signpost:Sx,SignpostBig:Cx,SignpostBigIcon:Cx,SignpostIcon:Sx,Siren:Ix,SirenIcon:Ix,SkipBack:jx,SkipBackIcon:jx,SkipForward:Hx,SkipForwardIcon:Hx,Skull:zx,SkullIcon:zx,Slack:qx,SlackIcon:qx,Slash:Ax,SlashIcon:Ax,SlashSquare:Y1,SlashSquareIcon:Y1,Slice:Px,SliceIcon:Px,Sliders:Nx,SlidersHorizontal:Dx,SlidersHorizontalIcon:Dx,SlidersIcon:Nx,Smartphone:Fx,SmartphoneCharging:Tx,SmartphoneChargingIcon:Tx,SmartphoneIcon:Fx,SmartphoneNfc:Vx,SmartphoneNfcIcon:Vx,Smile:Bx,SmileIcon:Bx,SmilePlus:Ex,SmilePlusIcon:Ex,Snail:Rx,SnailIcon:Rx,Snowflake:Ox,SnowflakeIcon:Ox,Sofa:Ux,SofaIcon:Ux,SortAsc:n1,SortAscIcon:n1,SortDesc:e1,SortDescIcon:e1,Soup:$x,SoupIcon:$x,Space:_x,SpaceIcon:_x,Spade:Zx,SpadeIcon:Zx,Sparkle:Wx,SparkleIcon:Wx,Sparkles:ea,SparklesIcon:ea,Speaker:Gx,SpeakerIcon:Gx,Speech:Kx,SpeechIcon:Kx,SpellCheck:Qx,SpellCheck2:Xx,SpellCheck2Icon:Xx,SpellCheckIcon:Qx,Spline:Jx,SplineIcon:Jx,Split:t7,SplitIcon:t7,SplitSquareHorizontal:Yx,SplitSquareHorizontalIcon:Yx,SplitSquareVertical:e7,SplitSquareVerticalIcon:e7,SprayCan:a7,SprayCanIcon:a7,Sprout:n7,SproutIcon:n7,Square:c7,SquareAsterisk:o1,SquareAsteriskIcon:o1,SquareCode:x1,SquareCodeIcon:x1,SquareDashedBottom:o7,SquareDashedBottomCode:r7,SquareDashedBottomCodeIcon:r7,SquareDashedBottomIcon:o7,SquareDot:M1,SquareDotIcon:M1,SquareEqual:L1,SquareEqualIcon:L1,SquareGantt:at,SquareGanttIcon:at,SquareIcon:c7,SquareKanban:D1,SquareKanbanDashed:P1,SquareKanbanDashedIcon:P1,SquareKanbanIcon:D1,SquarePen:Se,SquarePenIcon:Se,SquareRadical:i7,SquareRadicalIcon:i7,SquareSlash:Y1,SquareSlashIcon:Y1,SquareStack:l7,SquareStackIcon:l7,SquareUser:aa,SquareUserIcon:aa,SquareUserRound:ta,SquareUserRoundIcon:ta,Squircle:d7,SquircleIcon:d7,Squirrel:s7,SquirrelIcon:s7,Stamp:h7,StampIcon:h7,Star:p7,StarHalf:y7,StarHalfIcon:y7,StarIcon:p7,StarOff:u7,StarOffIcon:u7,Stars:ea,StarsIcon:ea,StepBack:k7,StepBackIcon:k7,StepForward:g7,StepForwardIcon:g7,Stethoscope:m7,StethoscopeIcon:m7,Sticker:x7,StickerIcon:x7,StickyNote:f7,StickyNoteIcon:f7,StopCircle:v7,StopCircleIcon:v7,Store:M7,StoreIcon:M7,StretchHorizontal:w7,StretchHorizontalIcon:w7,StretchVertical:L7,StretchVerticalIcon:L7,Strikethrough:b7,StrikethroughIcon:b7,Subscript:C7,SubscriptIcon:C7,Subtitles:y1,SubtitlesIcon:y1,Sun:tr,SunDim:S7,SunDimIcon:S7,SunIcon:tr,SunMedium:I7,SunMediumIcon:I7,SunMoon:j7,SunMoonIcon:j7,SunSnow:H7,SunSnowIcon:H7,Sunrise:z7,SunriseIcon:z7,Sunset:q7,SunsetIcon:q7,Superscript:A7,SuperscriptIcon:A7,SwatchBook:P7,SwatchBookIcon:P7,SwissFranc:D7,SwissFrancIcon:D7,SwitchCamera:N7,SwitchCameraIcon:N7,Sword:T7,SwordIcon:T7,Swords:V7,SwordsIcon:V7,Syringe:F7,SyringeIcon:F7,Table:_7,Table2:E7,Table2Icon:E7,TableCellsMerge:B7,TableCellsMergeIcon:B7,TableCellsSplit:R7,TableCellsSplitIcon:R7,TableColumnsSplit:O7,TableColumnsSplitIcon:O7,TableIcon:_7,TableProperties:U7,TablePropertiesIcon:U7,TableRowsSplit:$7,TableRowsSplitIcon:$7,Tablet:W7,TabletIcon:W7,TabletSmartphone:Z7,TabletSmartphoneIcon:Z7,Tablets:G7,TabletsIcon:G7,Tag:K7,TagIcon:K7,Tags:X7,TagsIcon:X7,Tally1:Q7,Tally1Icon:Q7,Tally2:J7,Tally2Icon:J7,Tally3:Y7,Tally3Icon:Y7,Tally4:ef,Tally4Icon:ef,Tally5:tf,Tally5Icon:tf,Tangent:af,TangentIcon:af,Target:nf,TargetIcon:nf,Telescope:rf,TelescopeIcon:rf,Tent:lf,TentIcon:lf,TentTree:of,TentTreeIcon:of,Terminal:df,TerminalIcon:df,TerminalSquare:cf,TerminalSquareIcon:cf,TestTube:hf,TestTube2:sf,TestTube2Icon:sf,TestTubeIcon:hf,TestTubes:yf,TestTubesIcon:yf,Text:mf,TextCursor:pf,TextCursorIcon:pf,TextCursorInput:uf,TextCursorInputIcon:uf,TextIcon:mf,TextQuote:kf,TextQuoteIcon:kf,TextSearch:gf,TextSearchIcon:gf,TextSelect:na,TextSelectIcon:na,TextSelection:na,TextSelectionIcon:na,Theater:xf,TheaterIcon:xf,Thermometer:Mf,ThermometerIcon:Mf,ThermometerSnowflake:ff,ThermometerSnowflakeIcon:ff,ThermometerSun:vf,ThermometerSunIcon:vf,ThumbsDown:wf,ThumbsDownIcon:wf,ThumbsUp:Lf,ThumbsUpIcon:Lf,Ticket:zf,TicketCheck:bf,TicketCheckIcon:bf,TicketIcon:zf,TicketMinus:Cf,TicketMinusIcon:Cf,TicketPercent:Sf,TicketPercentIcon:Sf,TicketPlus:If,TicketPlusIcon:If,TicketSlash:jf,TicketSlashIcon:jf,TicketX:Hf,TicketXIcon:Hf,Timer:Pf,TimerIcon:Pf,TimerOff:qf,TimerOffIcon:qf,TimerReset:Af,TimerResetIcon:Af,ToggleLeft:Df,ToggleLeftIcon:Df,ToggleRight:Nf,ToggleRightIcon:Nf,Tornado:Tf,TornadoIcon:Tf,Torus:Vf,TorusIcon:Vf,Touchpad:Ef,TouchpadIcon:Ef,TouchpadOff:Ff,TouchpadOffIcon:Ff,TowerControl:Bf,TowerControlIcon:Bf,ToyBrick:Rf,ToyBrickIcon:Rf,Tractor:Of,TractorIcon:Of,TrafficCone:Uf,TrafficConeIcon:Uf,Train:ra,TrainFront:_f,TrainFrontIcon:_f,TrainFrontTunnel:$f,TrainFrontTunnelIcon:$f,TrainIcon:ra,TrainTrack:Zf,TrainTrackIcon:Zf,TramFront:ra,TramFrontIcon:ra,Trash:Wf,Trash2:Xe,Trash2Icon:Xe,TrashIcon:Wf,TreeDeciduous:Gf,TreeDeciduousIcon:Gf,TreePine:Kf,TreePineIcon:Kf,Trees:Xf,TreesIcon:Xf,Trello:Qf,TrelloIcon:Qf,TrendingDown:Jf,TrendingDownIcon:Jf,TrendingUp:Yf,TrendingUpIcon:Yf,Triangle:tv,TriangleIcon:tv,TriangleRight:ev,TriangleRightIcon:ev,Trophy:av,TrophyIcon:av,Truck:nv,TruckIcon:nv,Turtle:rv,TurtleIcon:rv,Tv:iv,Tv2:ov,Tv2Icon:ov,TvIcon:iv,Twitch:lv,TwitchIcon:lv,Twitter:cv,TwitterIcon:cv,Type:ar,TypeIcon:ar,Umbrella:sv,UmbrellaIcon:sv,UmbrellaOff:dv,UmbrellaOffIcon:dv,Underline:nr,UnderlineIcon:nr,Undo:uv,Undo2:hv,Undo2Icon:hv,UndoDot:yv,UndoDotIcon:yv,UndoIcon:uv,UnfoldHorizontal:pv,UnfoldHorizontalIcon:pv,UnfoldVertical:kv,UnfoldVerticalIcon:kv,Ungroup:gv,UngroupIcon:gv,Unlink:xv,Unlink2:mv,Unlink2Icon:mv,UnlinkIcon:xv,Unlock:vv,UnlockIcon:vv,UnlockKeyhole:fv,UnlockKeyholeIcon:fv,Unplug:Mv,UnplugIcon:Mv,Upload:Lv,UploadCloud:wv,UploadCloudIcon:wv,UploadIcon:Lv,Usb:bv,UsbIcon:bv,User:fa,User2:sa,User2Icon:sa,UserCheck:Cv,UserCheck2:oa,UserCheck2Icon:oa,UserCheckIcon:Cv,UserCircle:k1,UserCircle2:p1,UserCircle2Icon:p1,UserCircleIcon:k1,UserCog:Sv,UserCog2:ia,UserCog2Icon:ia,UserCogIcon:Sv,UserIcon:fa,UserMinus:Iv,UserMinus2:la,UserMinus2Icon:la,UserMinusIcon:Iv,UserPlus:jv,UserPlus2:ca,UserPlus2Icon:ca,UserPlusIcon:jv,UserRound:sa,UserRoundCheck:oa,UserRoundCheckIcon:oa,UserRoundCog:ia,UserRoundCogIcon:ia,UserRoundIcon:sa,UserRoundMinus:la,UserRoundMinusIcon:la,UserRoundPlus:ca,UserRoundPlusIcon:ca,UserRoundSearch:Hv,UserRoundSearchIcon:Hv,UserRoundX:da,UserRoundXIcon:da,UserSearch:zv,UserSearchIcon:zv,UserSquare:aa,UserSquare2:ta,UserSquare2Icon:ta,UserSquareIcon:aa,UserX:qv,UserX2:da,UserX2Icon:da,UserXIcon:qv,Users:Av,Users2:ha,Users2Icon:ha,UsersIcon:Av,UsersRound:ha,UsersRoundIcon:ha,Utensils:Dv,UtensilsCrossed:Pv,UtensilsCrossedIcon:Pv,UtensilsIcon:Dv,UtilityPole:Nv,UtilityPoleIcon:Nv,Variable:Tv,VariableIcon:Tv,Vault:Vv,VaultIcon:Vv,Vegan:Fv,VeganIcon:Fv,VenetianMask:Ev,VenetianMaskIcon:Ev,Verified:l1,VerifiedIcon:l1,Vibrate:Rv,VibrateIcon:Rv,VibrateOff:Bv,VibrateOffIcon:Bv,Video:Uv,VideoIcon:Uv,VideoOff:Ov,VideoOffIcon:Ov,Videotape:$v,VideotapeIcon:$v,View:_v,ViewIcon:_v,Voicemail:Zv,VoicemailIcon:Zv,Volume:Gv,Volume1:Wv,Volume1Icon:Wv,Volume2:Qa,Volume2Icon:Qa,VolumeIcon:Gv,VolumeX:Ja,VolumeXIcon:Ja,Vote:Kv,VoteIcon:Kv,Wallet:Jv,Wallet2:Xv,Wallet2Icon:Xv,WalletCards:Qv,WalletCardsIcon:Qv,WalletIcon:Jv,Wallpaper:Yv,WallpaperIcon:Yv,Wand:tM,Wand2:eM,Wand2Icon:eM,WandIcon:tM,Warehouse:aM,WarehouseIcon:aM,WashingMachine:nM,WashingMachineIcon:nM,Watch:rM,WatchIcon:rM,Waves:oM,WavesIcon:oM,Waypoints:iM,WaypointsIcon:iM,Webcam:lM,WebcamIcon:lM,Webhook:dM,WebhookIcon:dM,WebhookOff:cM,WebhookOffIcon:cM,Weight:sM,WeightIcon:sM,Wheat:yM,WheatIcon:yM,WheatOff:hM,WheatOffIcon:hM,WholeWord:uM,WholeWordIcon:uM,Wifi:or,WifiIcon:or,WifiOff:rr,WifiOffIcon:rr,Wind:pM,WindIcon:pM,Wine:gM,WineIcon:gM,WineOff:kM,WineOffIcon:kM,Workflow:mM,WorkflowIcon:mM,WrapText:xM,WrapTextIcon:xM,Wrench:fM,WrenchIcon:fM,X:Ya,XCircle:va,XCircleIcon:va,XIcon:Ya,XOctagon:vM,XOctagonIcon:vM,XSquare:MM,XSquareIcon:MM,Youtube:wM,YoutubeIcon:wM,Zap:bM,ZapIcon:bM,ZapOff:LM,ZapOffIcon:LM,ZoomIn:CM,ZoomInIcon:CM,ZoomOut:SM,ZoomOutIcon:SM,createLucideIcon:n,icons:hz},Symbol.toStringTag,{value:"Module"}));function ht(){const{state:e}=Ee(),t=T.useCallback((c,d,s="sine")=>{if(e.settings.audioEnabled)try{const y=new(window.AudioContext||window.webkitAudioContext),g=y.createOscillator(),v=y.createGain();g.connect(v),v.connect(y.destination),g.frequency.value=c,g.type=s,v.gain.setValueAtTime(.3,y.currentTime),v.gain.exponentialRampToValueAtTime(.01,y.currentTime+d),g.start(y.currentTime),g.stop(y.currentTime+d)}catch(y){console.warn("Audio not supported:",y)}},[e.settings.audioEnabled]),a=T.useCallback(()=>{t(523.25,.1),setTimeout(()=>t(659.25,.1),100),setTimeout(()=>t(783.99,.2),200)},[t]),r=T.useCallback(()=>{t(329.63,.3,"square"),setTimeout(()=>t(293.66,.3,"square"),150)},[t]),o=T.useCallback(()=>{t(800,.1,"square")},[t]),l=T.useCallback(()=>{t(1e3,.05,"sine")},[t]);return{playSuccess:a,playError:r,playClick:o,playHover:l}}function uz({onLogin:e}){const[t,a]=T.useState(""),[r,o]=T.useState(""),[l,c]=T.useState(!1),[d,s]=T.useState(""),[y,g]=T.useState(!1),{playClick:v,playHover:m,playError:j,playSuccess:f}=ht(),w=async A=>{A.preventDefault(),g(!0),s(""),await new Promise(h=>setTimeout(h,1e3));const p={tim:"tim17",user1:"pass123",user2:"secure456",user3:"mypass789",user4:"login2024",user5:"password1",user6:"access999",user7:"key2023",user8:"secret888",user9:"code777",user10:"auth666",user11:"entry555",user12:"token444",user13:"verify333",user14:"check222",user15:"valid111",user16:"open000",user17:"start999",user18:"begin888",user19:"enter777",user20:"login666"},u=t.toLowerCase();p[u]&&r===p[u]?(f(),e(t)):(j(),s("Vale kasutajanimi või parool"),g(!1))};return i.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4",children:i.jsxs("div",{className:"w-full max-w-md",children:[i.jsxs("div",{className:"text-center mb-8",children:[i.jsx("div",{className:"w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4",children:i.jsx(fa,{className:"w-10 h-10 text-white"})}),i.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"Eesti Keele Õpe"}),i.jsx("p",{className:"text-gray-300",children:"8. Klassi Platvorm"})]}),i.jsxs("div",{className:"bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 shadow-2xl",children:[i.jsxs("form",{onSubmit:w,className:"space-y-6",children:[i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Kasutajanimi"}),i.jsxs("div",{className:"relative",children:[i.jsx(fa,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),i.jsx("input",{type:"text",value:t,onChange:A=>a(A.target.value),className:"w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300",placeholder:"Sisesta kasutajanimi",required:!0})]})]}),i.jsxs("div",{children:[i.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Parool"}),i.jsxs("div",{className:"relative",children:[i.jsx(Wn,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"}),i.jsx("input",{type:l?"text":"password",value:r,onChange:A=>o(A.target.value),className:"w-full pl-10 pr-12 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all duration-300",placeholder:"Sisesta parool",required:!0}),i.jsx("button",{type:"button",onClick:()=>c(!l),onMouseEnter:m,className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors",children:l?i.jsx(Bn,{className:"w-5 h-5"}):i.jsx(Wa,{className:"w-5 h-5"})})]})]}),d&&i.jsx("div",{className:"bg-red-500/20 border border-red-500/50 rounded-xl p-3 text-red-300 text-sm",children:d}),i.jsx("button",{type:"submit",disabled:y,onMouseEnter:m,className:`w-full flex items-center justify-center space-x-2 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${y?"bg-gray-600 text-gray-400 cursor-not-allowed":"bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-xl"}`,children:y?i.jsx("div",{className:"w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"}):i.jsxs(i.Fragment,{children:[i.jsx(Gn,{className:"w-5 h-5"}),i.jsx("span",{children:"Logi sisse"})]})})]}),i.jsx("div",{className:"mt-6 p-4 bg-blue-600/20 border border-blue-500/30 rounded-xl",children:i.jsxs("div",{className:"text-blue-300 text-sm",children:[i.jsx("p",{className:"font-bold text-center mb-3",children:"Demo kasutajad:"}),i.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[i.jsx("div",{}),i.jsx("div",{})]})]})})]})]})})}const Eb={en:{home:"Home",learn:"Learn",practice:"Practice",settings:"Settings",back:"Back",appTitle:"Estonian Learning",appSubtitle:"8th Grade Platform",chooseYourPath:"Choose Your Path",startLearningDescription:"Start learning or practice what you've learned",learnDescription:"Explore subjects and master new concepts",practiceDescription:"Test your knowledge with interactive exercises",yourProgress:"Your Progress",chooseSubjectLearn:"Choose Subject to Learn",chooseSubjectPractice:"Choose Subject to Practice",selectSubjectLearn:"Select a subject to explore",selectSubjectPractice:"Select a subject to test your knowledge",chaptersCompleted:"chapters completed",progress:"Progress",learningChapter:"Learning Chapter",chooseChapterLearn:"Choose a chapter to learn",subjectProgress:"Subject Progress",markAsComplete:"Mark as Complete",chapterCompleted:"Chapter Completed!",completed:"Completed",notStarted:"Not started",tableOfContents:"Table of Contents",practiceExercises:"Practice Exercises",chooseChapterPractice:"Choose a chapter to practice",practiceComplete:"Practice Complete!",youScored:"You scored",outOf:"out of",tryAgain:"Try Again",backToChapters:"Back to Chapters",question:"Question",score:"Score",submitAnswer:"Submit Answer",correct:"Correct!",incorrect:"Incorrect",correctAnswer:"Correct answer:",exercises:"exercises",customizeExperience:"Customize your learning experience",appearance:"Appearance",darkMode:"Dark Mode",darkModeDescription:"Switch to dark theme for better night viewing",accentColor:"Accent Color",textSettings:"Text Settings",fontSize:"Font Size",small:"Small",medium:"Medium",large:"Large",audioSettings:"Audio Settings",soundEffects:"Sound Effects",soundEffectsDescription:"Enable audio feedback for interactions",language:"Language",languageDescription:"Choose your preferred language",english:"English",estonian:"Estonian",preview:"Preview",sampleContent:"Sample Learning Content",sampleDescription:"This is how your learning content will appear with the current settings. You can adjust the font size, theme, and other preferences to match your learning style.",addContent:"Add Content",addContentDescription:"Create your own learning materials and exercises",addSubject:"Add Subject",addChapter:"Add Chapter",addExercise:"Add Exercise",addBookHeading:"Add Book Heading",createSubject:"Create New Subject",createChapter:"Create New Chapter",createExercise:"Create New Exercise",createBookHeading:"Create Book Heading",subjectName:"Subject Name",subjectDescription:"Subject Description",chapterTitle:"Chapter Title",chapterContent:"Chapter Content",chapterImages:"Chapter Images",bookHeadings:"Book Headings",bookHeadingTitle:"Book Heading Title",bookHeadingContent:"Book Heading Content",assignToHeading:"Assign to Book Heading",noHeading:"No heading (standalone chapter)",addImage:"Add Image",imageUrl:"Image URL",imageDescription:"Image Description",imageAlt:"Image Alt Text",removeImage:"Remove Image",exerciseQuestion:"Exercise Question",exerciseType:"Exercise Type",multipleChoice:"Multiple Choice",fillBlank:"Fill in the Blank",options:"Options",correctAnswerLabel:"Correct Answer",explanation:"Explanation",save:"Save",cancel:"Cancel",addOption:"Add Option",removeOption:"Remove Option",selectSubject:"Select Subject",selectChapter:"Select Chapter",customContent:"Custom Content",mainHeadings:"Main Headings",subHeadings:"Subheadings",addMainHeading:"Add Main Heading",addSubHeading:"Add Subheading",mainHeadingTitle:"Main Heading Title",subHeadingTitle:"Subheading Title",mainHeadingContent:"Main Heading Content",subHeadingContent:"Subheading Content",subHeadingLevel:"Heading Level",level1:"Level 1 (Large)",level2:"Level 2 (Medium)",level3:"Level 3 (Small)",exerciseImages:"Exercise Images",imagePosition:"Image Position",positionLeft:"Left",positionCenter:"Center",positionRight:"Right",imageWidth:"Width (px)",imageHeight:"Height (px)",dragDropImages:"Drag & drop images here or click to browse",supportedFormats:"Supported: JPG, PNG, SVG",dragChapter:"Drag Chapter",dropHere:"Drop here",moveToStandalone:"Move to Standalone",moveToHeading:"Move to",chapterMoved:"Chapter moved successfully",addDefinition:"Add Definition",selectTextFirst:"Select text first to add definition",wordDefinition:"Word Definition",highlightColor:"Highlight Color",yellow:"Yellow",green:"Green",blue:"Blue",pink:"Pink",orange:"Orange",createDefinition:"Create Definition",editDefinition:"Edit Definition",deleteDefinition:"Delete Definition",definitionFor:"Definition for",editChapter:"Edit Chapter",editExercise:"Edit Exercise",editSubject:"Edit Subject",chapters:"chapters",delete:"Delete",deleteSubject:"Delete Subject",deleteChapter:"Delete Chapter",deleteExercise:"Delete Exercise",deleteBookHeading:"Delete Book Heading",confirmDelete:"Confirm Delete",confirmDeleteSubject:"Are you sure you want to delete this subject? This will permanently remove all chapters and exercises.",confirmDeleteChapter:"Are you sure you want to delete this chapter? This will permanently remove all exercises in this chapter.",confirmDeleteExercise:"Are you sure you want to delete this exercise? This action cannot be undone.",confirmDeleteBookHeading:"Are you sure you want to delete this book heading? Chapters assigned to it will become standalone.",deleteWarning:"This action cannot be undone!",blue:"Blue",purple:"Purple",red:"Red",physics:"Physics",mathematics:"Mathematics",estonianLanguage:"Estonian Language",chemistry:"Chemistry",physicsDescription:"Explore the fundamental laws of nature",mathematicsDescription:"Master algebraic concepts and problem-solving",estonianLanguageDescription:"Improve grammar, vocabulary, and literature understanding",chemistryDescription:"Discover atoms, molecules, and chemical reactions"},et:{home:"Avaleht",learn:"Õpi",practice:"Harjuta",settings:"Seaded",back:"Tagasi",appTitle:"Eesti Keele Õpe",appSubtitle:"8. Klassi Platvorm",chooseYourPath:"Vali Oma Tee",startLearningDescription:"Alusta õppimist või harjuta õpitut",learnDescription:"Uuri aineid ja omanda uusi teadmisi",practiceDescription:"Testi oma teadmisi interaktiivsete harjutustega",yourProgress:"Sinu Edenemine",chooseSubjectLearn:"Vali Õppeaine",chooseSubjectPractice:"Vali Harjutusaine",selectSubjectLearn:"Vali aine, mida uurida",selectSubjectPractice:"Vali aine, milles end testida",chaptersCompleted:"peatükki lõpetatud",progress:"Edenemine",learningChapter:"Õppepeatükk",chooseChapterLearn:"Vali peatükk õppimiseks",subjectProgress:"Aine Edenemine",markAsComplete:"Märgi Lõpetatuks",chapterCompleted:"Peatükk Lõpetatud!",completed:"Lõpetatud",notStarted:"Alustamata",tableOfContents:"Sisukord",practiceExercises:"Harjutusülesanded",chooseChapterPractice:"Vali peatükk harjutamiseks",practiceComplete:"Harjutus Lõpetatud!",youScored:"Sa said",outOf:"punkti",tryAgain:"Proovi Uuesti",backToChapters:"Tagasi Peatükkide Juurde",question:"Küsimus",score:"Tulemus",submitAnswer:"Esita Vastus",correct:"Õige!",incorrect:"Vale",correctAnswer:"Õige vastus:",exercises:"harjutust",customizeExperience:"Kohanda oma õppimiskogemust",appearance:"Välimus",darkMode:"Tume Režiim",darkModeDescription:"Lülitu tumeda teema peale paremaks öiseks vaatamiseks",accentColor:"Rõhuvärv",textSettings:"Teksti Seaded",fontSize:"Fondi Suurus",small:"Väike",medium:"Keskmine",large:"Suur",audioSettings:"Heli Seaded",soundEffects:"Heliefektid",soundEffectsDescription:"Luba heli tagasiside interaktsioonide jaoks",language:"Keel",languageDescription:"Vali oma eelistatud keel",english:"Inglise",estonian:"Eesti",preview:"Eelvaade",sampleContent:"Näidis Õppesisu",sampleDescription:"Nii näeb välja sinu õppesisu praeguste seadetega. Sa saad kohandada fondi suurust, teemat ja teisi eelistusi vastavalt oma õppistiilile.",addContent:"Lisa Sisu",addContentDescription:"Loo oma õppematerjale ja harjutusi",addSubject:"Lisa Aine",addChapter:"Lisa Peatükk",addExercise:"Lisa Harjutus",addBookHeading:"Lisa Raamatu Pealkiri",createSubject:"Loo Uus Aine",createChapter:"Loo Uus Peatükk",createExercise:"Loo Uus Harjutus",createBookHeading:"Loo Raamatu Pealkiri",subjectName:"Aine Nimi",subjectDescription:"Aine Kirjeldus",chapterTitle:"Peatüki Pealkiri",chapterContent:"Peatüki Sisu",chapterImages:"Peatüki Pildid",bookHeadings:"Raamatu Pealkirjad",bookHeadingTitle:"Raamatu Pealkirja Pealkiri",bookHeadingContent:"Raamatu Pealkirja Sisu",assignToHeading:"Määra raamatu pealkirjale",noHeading:"Ilma pealkirjata (eraldiseisev peatükk)",addImage:"Lisa Pilt",imageUrl:"Pildi URL",imageDescription:"Pildi Kirjeldus",imageAlt:"Pildi Alt Tekst",removeImage:"Eemalda Pilt",exerciseQuestion:"Harjutuse Küsimus",exerciseType:"Harjutuse Tüüp",multipleChoice:"Valikvastus",fillBlank:"Täida Lünk",options:"Valikud",correctAnswerLabel:"Õige Vastus",explanation:"Selgitus",save:"Salvesta",cancel:"Tühista",addOption:"Lisa Valik",removeOption:"Eemalda Valik",selectSubject:"Vali Aine",selectChapter:"Vali Peatükk",customContent:"Kohandatud Sisu",mainHeadings:"Peapealkirjad",subHeadings:"Alapealkirjad",addMainHeading:"Lisa Peapealkiri",addSubHeading:"Lisa Alapealkirja",mainHeadingTitle:"Peapealkirja Pealkiri",subHeadingTitle:"Alapealkirja Pealkiri",mainHeadingContent:"Peapealkirja Sisu",subHeadingContent:"Alapealkirja Sisu",subHeadingLevel:"Pealkirja Tase",level1:"Tase 1 (Suur)",level2:"Tase 2 (Keskmine)",level3:"Tase 3 (Väike)",exerciseImages:"Harjutuse Pildid",imagePosition:"Pildi Asend",positionLeft:"Vasakul",positionCenter:"Keskel",positionRight:"Paremal",imageWidth:"Laius (px)",imageHeight:"Kõrgus (px)",dragDropImages:"Lohista pildid siia või kliki sirvimiseks",supportedFormats:"Toetatud: JPG, PNG, SVG",dragChapter:"Lohista Peatükk",dropHere:"Kukuta siia",moveToStandalone:"Tee eraldiseisvaks",moveToHeading:"Liiguta",chapterMoved:"Peatükk edukalt liigutatud",addDefinition:"Lisa Definitsioon",selectTextFirst:"Vali esmalt tekst definitsiooni lisamiseks",wordDefinition:"Sõna Definitsioon",highlightColor:"Esiletõstu Värv",yellow:"Kollane",green:"Roheline",blue:"Sinine",pink:"Roosa",orange:"Oranž",createDefinition:"Loo Definitsioon",editDefinition:"Muuda Definitsiooni",deleteDefinition:"Kustuta Definitsioon",definitionFor:"Definitsioon sõnale",editChapter:"Muuda Peatükki",editExercise:"Muuda Harjutust",editSubject:"Muuda Ainet",chapters:"peatükki",delete:"Kustuta",deleteSubject:"Kustuta Aine",deleteChapter:"Kustuta Peatükk",deleteExercise:"Kustuta Harjutus",deleteBookHeading:"Kustuta Raamatu Pealkiri",confirmDelete:"Kinnita Kustutamine",confirmDeleteSubject:"Kas oled kindel, et soovid selle aine kustutada? See eemaldab jäädavalt kõik peatükid ja harjutused.",confirmDeleteChapter:"Kas oled kindel, et soovid selle peatüki kustutada? See eemaldab jäädavalt kõik selle peatüki harjutused.",confirmDeleteExercise:"Kas oled kindel, et soovid selle harjutuse kustutada? Seda tegevust ei saa tagasi võtta.",confirmDeleteBookHeading:"Kas oled kindel, et soovid selle raamatu pealkirja kustutada? Sellele määratud peatükid muutuvad eraldiseisvaks.",deleteWarning:"Seda tegevust ei saa tagasi võtta!",blue:"Sinine",purple:"Lilla",red:"Punane",physics:"Füüsika",mathematics:"Matemaatika",estonianLanguage:"Eesti Keel",chemistry:"Keemia",physicsDescription:"Uuri looduse põhilisi seadusi",mathematicsDescription:"Omanda algebralised mõisted ja probleemilahendus",estonianLanguageDescription:"Paranda grammatikat, sõnavara ja kirjanduse mõistmist",chemistryDescription:"Avasta aatomid, molekulid ja keemilised reaktsioonid"}};function pz(e,t){const a=e.split(".");let r=Eb[t];for(const o of a)if(r&&typeof r=="object"&&o in r)r=r[o];else{r=Eb.en;for(const l of a)if(r&&typeof r=="object"&&l in r)r=r[l];else return e;break}return typeof r=="string"?r:e}function St(){const{state:e}=Ee();return{t:a=>pz(a,e.settings.language)}}function Bb(){const{state:e,dispatch:t}=Ee(),{playClick:a,playHover:r}=ht(),{t:o}=St(),l=s=>{a(),t({type:"SET_MODE",payload:s})},c=()=>{a(),t({type:"SET_MODE",payload:"settings"})},d=()=>{a(),t({type:"SET_MODE",payload:"add-content"})};return i.jsx("div",{className:`min-h-screen transition-all duration-500 ${e.settings.darkMode?"bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900":"bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"}`,style:{backgroundColor:e.settings.darkMode?void 0:e.settings.backgroundColor+"10"},children:i.jsxs("div",{className:"container mx-auto px-4 py-8",children:[i.jsxs("header",{className:"flex justify-between items-center mb-12",children:[i.jsxs("div",{className:"flex items-center space-x-3",children:[i.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center ${e.settings.darkMode?"bg-indigo-600":"bg-white shadow-lg"}`,children:i.jsx(dt,{className:`w-6 h-6 ${e.settings.darkMode?"text-white":"text-indigo-600"}`})}),i.jsxs("div",{children:[i.jsx("h1",{className:`text-2xl font-bold ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:o("appTitle")}),i.jsx("p",{className:`text-sm ${e.settings.darkMode?"text-gray-300":"text-gray-600"}`,children:o("appSubtitle")})]})]}),i.jsxs("div",{className:"flex space-x-2",children:[i.jsx("button",{onClick:d,onMouseEnter:r,className:`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${e.settings.darkMode?"bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white":"bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 shadow-lg hover:shadow-xl"}`,children:i.jsx(it,{className:"w-6 h-6"})}),i.jsx("button",{onClick:c,onMouseEnter:r,className:`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${e.settings.darkMode?"bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white":"bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 shadow-lg hover:shadow-xl"}`,children:i.jsx(er,{className:"w-6 h-6"})})]})]}),i.jsxs("div",{className:"flex flex-col items-center justify-center space-y-8 py-20",children:[i.jsxs("div",{className:"text-center mb-12",children:[i.jsx("h2",{className:`text-4xl md:text-5xl font-bold mb-4 ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:o("chooseYourPath")}),i.jsx("p",{className:`text-lg md:text-xl ${e.settings.darkMode?"text-gray-300":"text-gray-600"}`,children:o("startLearningDescription")})]}),i.jsxs("div",{className:"grid md:grid-cols-2 gap-8 w-full max-w-4xl",children:[i.jsxs("button",{onClick:()=>l("learn"),onMouseEnter:r,className:`group relative overflow-hidden p-12 rounded-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${e.settings.darkMode?"bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700":"bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600"} shadow-2xl hover:shadow-3xl`,children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),i.jsxs("div",{className:"relative z-10 flex flex-col items-center space-y-6",children:[i.jsx("div",{className:"w-20 h-20 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300",children:i.jsx(dt,{className:"w-10 h-10 text-white"})}),i.jsxs("div",{className:"text-center",children:[i.jsx("h3",{className:"text-3xl font-bold text-white mb-2",children:o("learn")}),i.jsx("p",{className:"text-blue-100 text-lg",children:o("learnDescription")})]})]}),i.jsx("div",{className:"absolute -bottom-2 -right-2 w-32 h-32 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"})]}),i.jsxs("button",{onClick:()=>l("practice"),onMouseEnter:r,className:`group relative overflow-hidden p-12 rounded-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${e.settings.darkMode?"bg-gradient-to-br from-green-600 to-green-800 hover:from-green-500 hover:to-green-700":"bg-gradient-to-br from-green-500 to-green-700 hover:from-green-400 hover:to-green-600"} shadow-2xl hover:shadow-3xl`,children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),i.jsxs("div",{className:"relative z-10 flex flex-col items-center space-y-6",children:[i.jsx("div",{className:"w-20 h-20 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300",children:i.jsx(Jn,{className:"w-10 h-10 text-white"})}),i.jsxs("div",{className:"text-center",children:[i.jsx("h3",{className:"text-3xl font-bold text-white mb-2",children:o("practice")}),i.jsx("p",{className:"text-green-100 text-lg",children:o("practiceDescription")})]})]}),i.jsx("div",{className:"absolute -bottom-2 -right-2 w-32 h-32 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"})]})]}),i.jsxs("div",{className:`mt-16 p-8 rounded-2xl ${e.settings.darkMode?"bg-gray-800/50 backdrop-blur-sm":"bg-white/50 backdrop-blur-sm"} border ${e.settings.darkMode?"border-gray-700":"border-white/20"} shadow-xl`,children:[i.jsx("h3",{className:`text-xl font-semibold mb-4 text-center ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:o("yourProgress")}),i.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:e.progress.map(s=>i.jsxs("div",{className:"text-center",children:[i.jsxs("div",{className:`text-2xl font-bold ${e.settings.darkMode?"text-indigo-400":"text-indigo-600"}`,children:[Math.round(s.totalScore),"%"]}),i.jsx("div",{className:`text-sm capitalize ${e.settings.darkMode?"text-gray-300":"text-gray-600"}`,children:s.subjectId})]},s.subjectId))})]})]})]})})}function Rb({mode:e}){const{state:t,dispatch:a}=Ee(),{playClick:r,playHover:o}=ht(),{t:l}=St(),c=g=>{r(),a({type:"SET_SUBJECT",payload:g})},d=()=>{r(),a({type:"SET_MODE",payload:"home"})},s=g=>t.progress.find(m=>m.subjectId===g)||{subjectId:g,completedChapters:[],exerciseScores:{},totalScore:0},y=t.customSubjects;return i.jsx("div",{className:`min-h-screen transition-all duration-500 ${t.settings.darkMode?"bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900":"bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"}`,children:i.jsxs("div",{className:"container mx-auto px-4 py-8",children:[i.jsx("header",{className:"flex items-center justify-between mb-12",children:i.jsxs("div",{className:"flex items-center space-x-4",children:[i.jsx("button",{onClick:d,onMouseEnter:o,className:`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${t.settings.darkMode?"bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white":"bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 shadow-lg hover:shadow-xl"}`,children:i.jsx(vt,{className:"w-6 h-6"})}),i.jsxs("div",{children:[i.jsx("h1",{className:`text-3xl font-bold ${t.settings.darkMode?"text-white":"text-gray-900"}`,children:l(e==="learn"?"chooseSubjectLearn":"chooseSubjectPractice")}),i.jsx("p",{className:`text-lg ${t.settings.darkMode?"text-gray-300":"text-gray-600"}`,children:l(e==="learn"?"selectSubjectLearn":"selectSubjectPractice")})]})]})}),y.length===0?i.jsxs("div",{className:"text-center py-20",children:[i.jsx("div",{className:`text-6xl mb-6 ${t.settings.darkMode?"text-gray-600":"text-gray-400"}`,children:"📚"}),i.jsx("h2",{className:`text-2xl font-bold mb-4 ${t.settings.darkMode?"text-white":"text-gray-900"}`,children:"Veel pole aineid lisatud"}),i.jsx("p",{className:`text-lg mb-8 ${t.settings.darkMode?"text-gray-300":"text-gray-600"}`,children:"Mine seadetesse ja lisa oma esimene õppeaine!"}),i.jsx("button",{onClick:()=>{r(),a({type:"SET_MODE",payload:"settings"})},onMouseEnter:o,className:`px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${t.settings.darkMode?"bg-blue-600 hover:bg-blue-500 text-white":"bg-blue-500 hover:bg-blue-400 text-white"} shadow-lg hover:shadow-xl`,children:"Mine seadetesse"})]}):i.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto",children:y.map(g=>{const v=yz[g.icon],m=s(g.id);return i.jsxs("button",{onClick:()=>c(g.id),onMouseEnter:o,className:`group relative overflow-hidden p-8 rounded-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${t.settings.darkMode?"bg-gray-800/80 hover:bg-gray-700/80":"bg-white/80 hover:bg-white/90"} backdrop-blur-sm border ${t.settings.darkMode?"border-gray-700":"border-white/20"} shadow-2xl hover:shadow-3xl`,style:{background:t.settings.darkMode?void 0:`linear-gradient(135deg, ${g.color}15, ${g.color}25)`},children:[i.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),i.jsxs("div",{className:"relative z-10 flex flex-col items-center space-y-6",children:[i.jsx("div",{className:"w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300",style:{backgroundColor:g.color+"20"},children:i.jsx(v,{className:"w-10 h-10",style:{color:g.color}})}),i.jsxs("div",{className:"text-center",children:[i.jsx("h3",{className:`text-2xl font-bold mb-2 ${t.settings.darkMode?"text-white":"text-gray-900"}`,children:g.name}),i.jsx("p",{className:`text-base mb-4 ${t.settings.darkMode?"text-gray-300":"text-gray-600"}`,children:g.description}),i.jsxs("div",{className:"space-y-2",children:[i.jsxs("div",{className:"flex justify-between items-center",children:[i.jsx("span",{className:`text-sm ${t.settings.darkMode?"text-gray-400":"text-gray-500"}`,children:l("progress")}),i.jsxs("span",{className:`text-sm font-semibold ${t.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:[Math.round(m.totalScore),"%"]})]}),i.jsx("div",{className:`w-full h-2 rounded-full ${t.settings.darkMode?"bg-gray-700":"bg-gray-200"}`,children:i.jsx("div",{className:"h-full rounded-full transition-all duration-500",style:{width:`${m.totalScore}%`,backgroundColor:g.color}})})]}),i.jsxs("div",{className:`mt-4 text-sm ${t.settings.darkMode?"text-gray-400":"text-gray-500"}`,children:[m.completedChapters.length," ",l("outOf")," ",g.chapters.length," ",l("chaptersCompleted"),i.jsx("span",{className:`ml-2 px-2 py-1 rounded-full text-xs ${t.settings.darkMode?"bg-blue-600 text-white":"bg-blue-100 text-blue-800"}`,children:l("customContent")})]})]})]}),i.jsx("div",{className:"absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500",style:{backgroundColor:g.color}}),i.jsx("div",{className:"absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500",style:{backgroundColor:g.color}})]},g.id)})})]})})}function kz(){const{state:e,dispatch:t}=Ee(),{playClick:a,playHover:r}=ht(),{t:o}=St(),[l,c]=T.useState(""),[d,s]=T.useState(""),[y,g]=T.useState("yellow");T.useEffect(()=>{var f;(f=e.selectedText)!=null&&f.text&&c(e.selectedText.text)},[e.selectedText]);const v=()=>{a(),t({type:"SET_SHOW_DEFINITION_MODAL",payload:!1}),t({type:"SET_SELECTED_TEXT",payload:null}),c(""),s(""),g("yellow")},m=()=>{var p;if(!l.trim()||!d.trim()||!e.selectedSubject)return;a();const f=e.customSubjects.find(u=>u.id===e.selectedSubject),w=e.selectedChapter||((p=f==null?void 0:f.chapters[0])==null?void 0:p.id);if(!w){console.error("No chapter available for definition");return}const A={id:`def-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,word:l.trim(),definition:d.trim(),highlightColor:y,chapterId:w,position:e.selectedText?{start:e.selectedText.start,end:e.selectedText.end,elementId:e.selectedText.elementId}:{start:0,end:l.length,elementId:"main-content"}};t({type:"ADD_DEFINITION",payload:{subjectId:e.selectedSubject,definition:A}}),v()},j=[{value:"yellow",label:o("yellow"),bgClass:"bg-yellow-300"},{value:"green",label:o("green"),bgClass:"bg-green-300"},{value:"blue",label:o("blue"),bgClass:"bg-blue-300"},{value:"pink",label:o("pink"),bgClass:"bg-pink-300"},{value:"orange",label:o("orange"),bgClass:"bg-orange-300"}];return e.showDefinitionModal?i.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4",children:i.jsxs("div",{className:`max-w-md w-full rounded-3xl p-8 ${e.settings.darkMode?"bg-gray-800 border border-gray-700":"bg-white border border-gray-200"} shadow-2xl`,children:[i.jsxs("div",{className:"flex items-center justify-between mb-6",children:[i.jsx("h3",{className:`text-xl font-bold ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:o("addDefinition")}),i.jsx("button",{onClick:v,onMouseEnter:r,className:`p-2 rounded-xl transition-all duration-300 hover:scale-110 ${e.settings.darkMode?"bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white":"bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900"}`,children:i.jsx(Ya,{className:"w-5 h-5"})})]}),i.jsxs("div",{className:"mb-6",children:[i.jsx("label",{className:`block text-sm font-medium mb-2 ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:"Sõna"}),i.jsx("input",{type:"text",value:l,onChange:f=>c(f.target.value),placeholder:"Sisesta sõna",className:`w-full p-3 rounded-xl border-2 transition-all duration-300 ${e.settings.darkMode?"border-gray-600 bg-gray-700 text-white focus:border-blue-500":"border-gray-300 bg-white text-gray-900 focus:border-blue-500"} focus:outline-none`})]}),i.jsxs("div",{className:"mb-6",children:[i.jsx("label",{className:`block text-sm font-medium mb-2 ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:o("wordDefinition")}),i.jsx("textarea",{value:d,onChange:f=>s(f.target.value),placeholder:o("wordDefinition"),rows:4,className:`w-full p-3 rounded-xl border-2 transition-all duration-300 ${e.settings.darkMode?"border-gray-600 bg-gray-700 text-white focus:border-blue-500":"border-gray-300 bg-white text-gray-900 focus:border-blue-500"} focus:outline-none resize-none`})]}),i.jsxs("div",{className:"mb-8",children:[i.jsx("label",{className:`block text-sm font-medium mb-3 ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:o("highlightColor")}),i.jsx("div",{className:"flex space-x-3",children:j.map(f=>i.jsxs("button",{onClick:()=>g(f.value),onMouseEnter:r,className:`flex-1 p-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${y===f.value?"ring-4 ring-blue-500 ring-offset-2":""} ${e.settings.darkMode?"ring-offset-gray-800":"ring-offset-white"}`,children:[i.jsx("div",{className:`w-full h-8 rounded-lg ${f.bgClass} mb-2`}),i.jsx("p",{className:`text-xs font-medium ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:f.label})]},f.value))})]}),i.jsxs("div",{className:"flex space-x-3",children:[i.jsx("button",{onClick:v,onMouseEnter:r,className:`flex-1 px-4 py-3 rounded-xl transition-all duration-300 ${e.settings.darkMode?"bg-gray-700 hover:bg-gray-600 text-gray-300":"bg-gray-200 hover:bg-gray-300 text-gray-700"}`,children:o("cancel")}),i.jsx("button",{onClick:m,disabled:!l.trim()||!d.trim(),onMouseEnter:r,className:`flex-1 px-4 py-3 rounded-xl transition-all duration-300 ${l.trim()&&d.trim()?e.settings.darkMode?"bg-blue-600 hover:bg-blue-500 text-white":"bg-blue-500 hover:bg-blue-400 text-white":e.settings.darkMode?"bg-gray-600 text-gray-400 cursor-not-allowed":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:o("createDefinition")})]}),i.jsx("div",{className:`mt-4 p-3 rounded-xl ${e.settings.darkMode?"bg-blue-900/20":"bg-blue-50"}`,children:i.jsxs("p",{className:`text-sm ${e.settings.darkMode?"text-blue-300":"text-blue-800"}`,children:["💡 Vihje: ",e.selectedText?`Valitud tekst: "${e.selectedText.text}"`:'Vali tekst peatükis ja klõpsa siis "Lisa definitsioon" nuppu, et luua automaatselt definitsioon valitud tekstile.']})})]})}):null}function gz({chapter:e,subjectId:t,onClose:a}){var z;const{state:r,dispatch:o}=Ee(),{playClick:l,playHover:c}=ht(),{t:d}=St(),[s,y]=T.useState(e.title),[g,v]=T.useState(e.content),[m,j]=T.useState(!1),f=T.useRef(null),w=()=>{var V;l();const b={...e,title:s,content:((V=f.current)==null?void 0:V.innerHTML)||g},C=r.customSubjects.map(S=>S.id===t?{...S,chapters:S.chapters.map(R=>R.id===e.id?b:R)}:S);o({type:"LOAD_USER_DATA",payload:{settings:r.settings,progress:r.progress,customSubjects:C}}),a()},A=(b,C)=>{var V;document.execCommand(b,!1,C),(V=f.current)==null||V.focus()},p=b=>{if(b.ctrlKey||b.metaKey)switch(b.key){case"b":b.preventDefault(),A("bold");break;case"i":b.preventDefault(),A("italic");break;case"u":b.preventDefault(),A("underline");break;case"s":b.preventDefault(),w();break}},u=[{command:"bold",icon:Vn,title:"Bold (Ctrl+B)"},{command:"italic",icon:$n,title:"Italic (Ctrl+I)"},{command:"underline",icon:nr,title:"Underline (Ctrl+U)"}],h=[{command:"justifyLeft",icon:Dn,title:"Align Left"},{command:"justifyCenter",icon:Pn,title:"Align Center"},{command:"justifyRight",icon:Nn,title:"Align Right"}],k=[{command:"insertUnorderedList",icon:Xa,title:"Bullet List"},{command:"insertOrderedList",icon:_n,title:"Numbered List"}],I=[{value:"1",label:"Väike"},{value:"3",label:"Tavaline"},{value:"4",label:"Suur"},{value:"5",label:"Väga suur"},{value:"6",label:"Pealkiri"}];return T.useEffect(()=>{f.current&&!m&&(f.current.innerHTML=g)},[g,m]),i.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4",children:i.jsxs("div",{className:"w-full max-w-6xl h-[90vh] bg-white rounded-3xl shadow-2xl flex flex-col",children:[i.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200",children:[i.jsxs("div",{className:"flex items-center space-x-4",children:[i.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:d("editChapter")}),i.jsxs("div",{className:"flex items-center space-x-2",children:[i.jsx("button",{onClick:()=>j(!1),className:`px-4 py-2 rounded-lg transition-all duration-300 ${m?"bg-gray-100 text-gray-600 hover:bg-gray-200":"bg-blue-500 text-white"}`,children:"Muuda"}),i.jsxs("button",{onClick:()=>j(!0),className:`px-4 py-2 rounded-lg transition-all duration-300 ${m?"bg-blue-500 text-white":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:[i.jsx(Wa,{className:"w-4 h-4 mr-2 inline"}),"Eelvaade"]})]})]}),i.jsxs("div",{className:"flex items-center space-x-3",children:[i.jsxs("button",{onClick:w,onMouseEnter:c,className:"flex items-center space-x-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-white rounded-xl transition-all duration-300 transform hover:scale-105",children:[i.jsx(xt,{className:"w-5 h-5"}),i.jsx("span",{children:d("save")})]}),i.jsx("button",{onClick:a,onMouseEnter:c,className:"p-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110",children:i.jsx(Ya,{className:"w-6 h-6"})})]})]}),i.jsx("div",{className:"p-6 border-b border-gray-200",children:i.jsx("input",{type:"text",value:s,onChange:b=>y(b.target.value),placeholder:"Peatüki pealkiri",className:"w-full text-3xl font-bold text-gray-900 bg-transparent border-none outline-none placeholder-gray-400"})}),!m&&i.jsxs("div",{className:"flex items-center space-x-4 p-4 border-b border-gray-200 bg-gray-50",children:[i.jsxs("select",{onChange:b=>A("fontSize",b.target.value),className:"px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:border-blue-500",children:[i.jsx("option",{value:"",children:"Fondi suurus"}),I.map(b=>i.jsx("option",{value:b.value,children:b.label},b.value))]}),i.jsx("div",{className:"w-px h-6 bg-gray-300"}),i.jsx("div",{className:"flex items-center space-x-1",children:u.map(b=>i.jsx("button",{onClick:()=>A(b.command),onMouseEnter:c,title:b.title,className:"p-2 rounded-lg hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-all duration-300",children:i.jsx(b.icon,{className:"w-5 h-5"})},b.command))}),i.jsx("div",{className:"w-px h-6 bg-gray-300"}),i.jsx("div",{className:"flex items-center space-x-1",children:h.map(b=>i.jsx("button",{onClick:()=>A(b.command),onMouseEnter:c,title:b.title,className:"p-2 rounded-lg hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-all duration-300",children:i.jsx(b.icon,{className:"w-5 h-5"})},b.command))}),i.jsx("div",{className:"w-px h-6 bg-gray-300"}),i.jsx("div",{className:"flex items-center space-x-1",children:k.map(b=>i.jsx("button",{onClick:()=>A(b.command),onMouseEnter:c,title:b.title,className:"p-2 rounded-lg hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-all duration-300",children:i.jsx(b.icon,{className:"w-5 h-5"})},b.command))}),i.jsx("div",{className:"w-px h-6 bg-gray-300"}),i.jsx("input",{type:"color",onChange:b=>A("foreColor",b.target.value),className:"w-10 h-8 rounded border border-gray-300 cursor-pointer",title:"Teksti värv"}),i.jsx("input",{type:"color",onChange:b=>A("hiliteColor",b.target.value),className:"w-10 h-8 rounded border border-gray-300 cursor-pointer",title:"Tausta värv"})]}),i.jsx("div",{className:"flex-1 p-6 overflow-auto",children:m?i.jsxs("div",{className:"prose prose-lg max-w-none",children:[i.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-6",children:s}),i.jsx("div",{className:"text-gray-700 leading-relaxed",dangerouslySetInnerHTML:{__html:((z=f.current)==null?void 0:z.innerHTML)||g}})]}):i.jsx("div",{ref:f,contentEditable:!0,onKeyDown:p,className:"w-full min-h-full p-4 text-gray-900 leading-relaxed focus:outline-none border-2 border-dashed border-gray-200 rounded-xl",style:{fontSize:"16px",lineHeight:"1.6"},suppressContentEditableWarning:!0})}),!m&&i.jsx("div",{className:"p-4 border-t border-gray-200 bg-gray-50",children:i.jsxs("div",{className:"flex items-center justify-between text-sm text-gray-600",children:[i.jsxs("div",{className:"flex items-center space-x-4",children:[i.jsxs("span",{children:[i.jsx("kbd",{className:"px-2 py-1 bg-gray-200 rounded",children:"Ctrl+B"})," Paks"]}),i.jsxs("span",{children:[i.jsx("kbd",{className:"px-2 py-1 bg-gray-200 rounded",children:"Ctrl+I"})," Kaldkiri"]}),i.jsxs("span",{children:[i.jsx("kbd",{className:"px-2 py-1 bg-gray-200 rounded",children:"Ctrl+U"})," Allajoonitud"]}),i.jsxs("span",{children:[i.jsx("kbd",{className:"px-2 py-1 bg-gray-200 rounded",children:"Ctrl+S"})," Salvesta"]})]}),i.jsx("span",{children:"Vali tekst ja kasuta tööriistariba vormindamiseks"})]})})]})})}function mz(){var Ae;const{state:e,dispatch:t}=Ee(),{playClick:a,playHover:r}=ht(),{t:o}=St(),[l,c]=T.useState(null),[d,s]=T.useState(!1),[y,g]=T.useState(null),[v,m]=T.useState(null),f=e.customSubjects.find(q=>q.id===e.selectedSubject),w=f==null?void 0:f.chapters.find(q=>q.id===l),A=((Ae=f==null?void 0:f.definitions)==null?void 0:Ae.filter(q=>q.chapterId===l))||[],p=()=>{a(),l?c(null):t({type:"SET_SUBJECT",payload:null})},u=q=>{a(),c(q)},h=()=>{l&&m(l)},k=()=>{if(!f||!l)return;a();const q=e.progress.find(M=>M.subjectId===f.id)||{subjectId:f.id,completedChapters:[],exerciseScores:{},totalScore:0},U=q.completedChapters.includes(l)?q.completedChapters:[...q.completedChapters,l],O={...q,completedChapters:U,totalScore:U.length/f.chapters.length*100};t({type:"UPDATE_PROGRESS",payload:O}),c(null)},I=()=>{a(),t({type:"SET_SELECTED_TEXT",payload:null}),t({type:"SET_SHOW_DEFINITION_MODAL",payload:!0})},z=()=>{const q=window.getSelection();if(!q||q.isCollapsed||!l||!e.selectedSubject)return;const U=q.toString().trim();if(U.length<2)return;const O=q.getRangeAt(0),M=O.commonAncestorContainer;let L=M.nodeType===Node.TEXT_NODE?M.parentElement:M;for(;L&&!L.id;)L=L.parentElement;(!L||!L.id)&&(L={id:"main-content"}),t({type:"SET_SELECTED_TEXT",payload:{text:U,chapterId:l,elementId:L.id,start:O.startOffset,end:O.endOffset}}),t({type:"SET_SHOW_DEFINITION_MODAL",payload:!0}),q.removeAllRanges()},b=(q,U)=>{if(!A.length)return q;let O=q;const M=A.filter(L=>L.position.elementId===U);return M.sort((L,F)=>F.position.start-L.position.start),M.forEach(L=>{const F=O.substring(0,L.position.start),B=O.substring(L.position.start,L.position.end),W=O.substring(L.position.end);O=F+`<span 
          class="highlighted-term cursor-help px-1 rounded ${{yellow:"bg-yellow-200 dark:bg-yellow-600/30",green:"bg-green-200 dark:bg-green-600/30",blue:"bg-blue-200 dark:bg-blue-600/30",pink:"bg-pink-200 dark:bg-pink-600/30",orange:"bg-orange-200 dark:bg-orange-600/30"}[L.highlightColor]} relative" 
          data-definition-id="${L.id}"
          data-definition="${L.definition}"
          style="text-decoration: underline; text-decoration-style: dotted;"
        >${B}</span>`+W}),O},C=q=>{const U=document.getElementById(q);U&&(U.scrollIntoView({behavior:"smooth",block:"start"}),s(!1),a())},V=()=>f?e.progress.find(q=>q.subjectId===f.id)||{subjectId:f.id,completedChapters:[],exerciseScores:{},totalScore:0}:null,S=()=>{if(!w)return null;const q=[];if(w.content){const M=b(w.content,"main-content");q.push(i.jsx("div",{id:"main-content",className:`prose prose-lg max-w-none scroll-mt-24 ${e.settings.darkMode?"prose-invert":""} ${e.settings.fontSize==="small"?"text-sm":e.settings.fontSize==="large"?"text-xl":"text-base"}`,dangerouslySetInnerHTML:{__html:M},onMouseUp:z},"main-content"))}return[...w.mainHeadings||[]].sort((M,L)=>M.order-L.order).forEach(M=>{q.push(i.jsxs("div",{className:"mt-12",children:[i.jsx("h2",{id:M.id,className:`text-3xl font-bold mb-6 scroll-mt-24 ${e.settings.darkMode?"text-white":"text-gray-900"} ${e.settings.fontSize==="small"?"text-2xl":e.settings.fontSize==="large"?"text-4xl":"text-3xl"}`,children:M.title}),M.content&&i.jsx("div",{className:`prose prose-lg max-w-none mb-8 ${e.settings.darkMode?"prose-invert":""} ${e.settings.fontSize==="small"?"text-sm":e.settings.fontSize==="large"?"text-xl":"text-base"}`,dangerouslySetInnerHTML:{__html:b(M.content,M.id)},onMouseUp:z}),M.images&&M.images.length>0&&i.jsx("div",{className:"mb-8 space-y-6",children:M.images.map(L=>i.jsxs("div",{className:`rounded-2xl overflow-hidden ${e.settings.darkMode?"bg-gray-700/50":"bg-gray-50"} ${L.position==="left"?"mr-auto":L.position==="right"?"ml-auto":"mx-auto"}`,style:{width:L.width?`${L.width}px`:"auto",maxWidth:"100%"},children:[i.jsx("img",{src:L.url,alt:L.alt||L.description,className:"w-full h-auto object-cover",style:{height:L.height?`${L.height}px`:"auto"},onError:F=>{F.currentTarget.style.display="none"}}),L.description&&i.jsx("div",{className:"p-4",children:i.jsx("p",{className:`text-sm ${e.settings.darkMode?"text-gray-300":"text-gray-600"} ${e.settings.fontSize==="small"?"text-xs":e.settings.fontSize==="large"?"text-base":"text-sm"}`,children:L.description})})]},L.id))}),M.subHeadings&&M.subHeadings.length>0&&i.jsx("div",{className:"space-y-8",children:[...M.subHeadings||[]].sort((L,F)=>L.order-F.order).map(L=>{const F=`h${L.level+2}`;return i.jsxs("div",{className:"ml-4",children:[i.jsx(F,{id:L.id,className:`font-bold mb-4 scroll-mt-24 ${e.settings.darkMode?"text-white":"text-gray-900"} ${L.level===1?"text-2xl":L.level===2?"text-xl":"text-lg"} ${e.settings.fontSize==="small"?L.level===1?"text-xl":L.level===2?"text-lg":"text-base":e.settings.fontSize==="large"?L.level===1?"text-3xl":L.level===2?"text-2xl":"text-xl":L.level===1?"text-2xl":L.level===2?"text-xl":"text-lg"}`,children:L.title}),L.content&&i.jsx("div",{className:`prose prose-lg max-w-none mb-6 ${e.settings.darkMode?"prose-invert":""} ${e.settings.fontSize==="small"?"text-sm":e.settings.fontSize==="large"?"text-xl":"text-base"}`,dangerouslySetInnerHTML:{__html:b(L.content,L.id)},onMouseUp:z}),L.images&&L.images.length>0&&i.jsx("div",{className:"mb-6 space-y-4",children:L.images.map(B=>i.jsxs("div",{className:`rounded-2xl overflow-hidden ${e.settings.darkMode?"bg-gray-700/50":"bg-gray-50"} ${B.position==="left"?"mr-auto":B.position==="right"?"ml-auto":"mx-auto"}`,style:{width:B.width?`${B.width}px`:"auto",maxWidth:"100%"},children:[i.jsx("img",{src:B.url,alt:B.alt||B.description,className:"w-full h-auto object-cover",style:{height:B.height?`${B.height}px`:"auto"},onError:W=>{W.currentTarget.style.display="none"}}),B.description&&i.jsx("div",{className:"p-4",children:i.jsx("p",{className:`text-sm ${e.settings.darkMode?"text-gray-300":"text-gray-600"} ${e.settings.fontSize==="small"?"text-xs":e.settings.fontSize==="large"?"text-base":"text-sm"}`,children:B.description})})]},B.id))})]},L.id)})})]},`main-heading-${M.id}`))}),w.images&&w.images.length>0&&q.push(i.jsxs("div",{className:"mt-12 space-y-6",children:[i.jsx("h3",{className:`text-xl font-bold ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:"Pildid"}),w.images.map(M=>i.jsxs("div",{className:`rounded-2xl overflow-hidden ${e.settings.darkMode?"bg-gray-700/50":"bg-gray-50"} ${M.position==="left"?"mr-auto":M.position==="right"?"ml-auto":"mx-auto"}`,style:{width:M.width?`${M.width}px`:"auto",maxWidth:"100%"},children:[i.jsx("img",{src:M.url,alt:M.alt||M.description,className:"w-full h-auto object-cover",style:{height:M.height?`${M.height}px`:"auto"},onError:L=>{L.currentTarget.style.display="none"}}),M.description&&i.jsx("div",{className:"p-4",children:i.jsx("p",{className:`text-sm ${e.settings.darkMode?"text-gray-300":"text-gray-600"} ${e.settings.fontSize==="small"?"text-xs":e.settings.fontSize==="large"?"text-base":"text-sm"}`,children:M.description})})]},M.id))]},"chapter-images")),q},R=()=>{if(!w)return[];const q=[];return w.content&&q.push({id:"main-content",title:"Sissejuhatus",level:0}),[...w.mainHeadings||[]].sort((M,L)=>M.order-L.order).forEach(M=>{q.push({id:M.id,title:M.title,level:1}),M.subHeadings&&M.subHeadings.length>0&&[...M.subHeadings||[]].sort((B,W)=>B.order-W.order).forEach(B=>{q.push({id:B.id,title:B.title,level:B.level+1})})}),q};if(T.useEffect(()=>{const q=O=>{const M=O.target;if(M&&M.classList&&M.classList.contains("highlighted-term")){const L=M.getAttribute("data-definition-id");L&&g(L)}},U=O=>{const M=O.target;M&&M.classList&&M.classList.contains("highlighted-term")&&g(null)};return document.addEventListener("mouseenter",q,!0),document.addEventListener("mouseleave",U,!0),()=>{document.removeEventListener("mouseenter",q,!0),document.removeEventListener("mouseleave",U,!0)}},[]),!f)return null;const E=V(),_=R();return i.jsxs("div",{className:`min-h-screen transition-all duration-500 ${e.settings.darkMode?"bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900":"bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"}`,children:[i.jsx(kz,{}),v&&w&&i.jsx(gz,{chapter:w,subjectId:e.selectedSubject,onClose:()=>m(null)}),y&&i.jsx("div",{className:"fixed z-50 pointer-events-none",children:A.map(q=>q.id!==y?null:i.jsxs("div",{className:`absolute transform -translate-x-1/2 -translate-y-full mb-2 px-3 py-2 rounded-lg shadow-lg max-w-xs ${e.settings.darkMode?"bg-gray-800 text-white border border-gray-600":"bg-white text-gray-900 border border-gray-200"}`,style:{left:"50%",top:"0"},children:[i.jsx("p",{className:"text-sm font-medium mb-1",children:q.word}),i.jsx("p",{className:"text-xs",children:q.definition})]},q.id))}),i.jsxs("div",{className:"container mx-auto px-4 py-8",children:[i.jsxs("header",{className:"flex items-center justify-between mb-8",children:[i.jsxs("div",{className:"flex items-center space-x-4",children:[i.jsx("button",{onClick:p,onMouseEnter:r,className:`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${e.settings.darkMode?"bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white":"bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 shadow-lg hover:shadow-xl"}`,children:i.jsx(vt,{className:"w-6 h-6"})}),i.jsxs("div",{children:[i.jsx("h1",{className:`text-3xl font-bold ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:l?w==null?void 0:w.title:f.name}),i.jsx("p",{className:`text-lg ${e.settings.darkMode?"text-gray-300":"text-gray-600"}`,children:o(l?"learningChapter":"chooseChapterLearn")})]})]}),i.jsxs("div",{className:"flex space-x-2",children:[l&&i.jsxs(i.Fragment,{children:[i.jsxs("button",{onClick:h,onMouseEnter:r,className:`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 ${e.settings.darkMode?"bg-orange-600 hover:bg-orange-500 text-white":"bg-orange-500 hover:bg-orange-400 text-white"} shadow-lg hover:shadow-xl`,children:[i.jsx(Se,{className:"w-5 h-5"}),i.jsx("span",{children:o("editChapter")})]}),i.jsxs("button",{onClick:I,onMouseEnter:r,className:`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 ${e.settings.darkMode?"bg-purple-600 hover:bg-purple-500 text-white":"bg-purple-500 hover:bg-purple-400 text-white"} shadow-lg hover:shadow-xl`,children:[i.jsx(Un,{className:"w-5 h-5"}),i.jsx("span",{children:o("addDefinition")})]})]}),l&&_.length>0&&i.jsxs("button",{onClick:()=>s(!d),onMouseEnter:r,className:`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 ${e.settings.darkMode?"bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white":"bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 shadow-lg hover:shadow-xl"}`,children:[i.jsx(Xa,{className:"w-5 h-5"}),i.jsx("span",{children:o("tableOfContents")})]})]})]}),l&&w?i.jsx("div",{className:"max-w-6xl mx-auto",children:i.jsxs("div",{className:"flex gap-8",children:[d&&_.length>0&&i.jsxs("div",{className:`w-80 flex-shrink-0 ${e.settings.darkMode?"bg-gray-800/80 border border-gray-700":"bg-white/80 border border-white/20"} backdrop-blur-sm shadow-2xl rounded-3xl p-6 h-fit sticky top-8`,children:[i.jsx("h3",{className:`text-lg font-bold mb-4 ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:o("tableOfContents")}),i.jsx("div",{className:"space-y-2",children:_.map(q=>i.jsx("button",{onClick:()=>C(q.id),className:`w-full text-left p-2 rounded-lg transition-all duration-300 hover:scale-102 ${e.settings.darkMode?"hover:bg-gray-700 text-gray-300 hover:text-white":"hover:bg-gray-100 text-gray-600 hover:text-gray-900"}`,style:{paddingLeft:`${q.level*12+8}px`},children:i.jsxs("div",{className:"flex items-center space-x-2",children:[i.jsx(En,{className:"w-4 h-4"}),i.jsx("span",{className:`text-sm ${q.level===0?"font-bold":q.level===1?"font-semibold":q.level===2?"font-medium":"font-normal"}`,children:q.title})]})},q.id))})]}),i.jsxs("div",{className:`flex-1 rounded-3xl p-8 ${e.settings.darkMode?"bg-gray-800/80 border border-gray-700":"bg-white/80 border border-white/20"} backdrop-blur-sm shadow-2xl`,children:[i.jsx("div",{className:"space-y-8",children:S()}),i.jsx("div",{className:"mt-12 flex justify-center",children:i.jsx("button",{onClick:k,onMouseEnter:r,className:`flex items-center space-x-3 px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${E!=null&&E.completedChapters.includes(l)?e.settings.darkMode?"bg-green-700 hover:bg-green-600 text-white":"bg-green-500 hover:bg-green-400 text-white":e.settings.darkMode?"bg-blue-600 hover:bg-blue-500 text-white":"bg-blue-500 hover:bg-blue-400 text-white"} shadow-lg hover:shadow-xl`,children:E!=null&&E.completedChapters.includes(l)?i.jsxs(i.Fragment,{children:[i.jsx(st,{className:"w-6 h-6"}),i.jsx("span",{className:"text-lg font-semibold",children:o("chapterCompleted")})]}):i.jsxs(i.Fragment,{children:[i.jsx(dt,{className:"w-6 h-6"}),i.jsx("span",{className:"text-lg font-semibold",children:o("markAsComplete")})]})})})]})]})}):i.jsx("div",{className:"max-w-4xl mx-auto",children:f.chapters.length===0?i.jsxs("div",{className:"text-center py-20",children:[i.jsx("div",{className:`text-6xl mb-6 ${e.settings.darkMode?"text-gray-600":"text-gray-400"}`,children:"📖"}),i.jsx("h2",{className:`text-2xl font-bold mb-4 ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:"Selles aines pole veel peatükke"}),i.jsx("p",{className:`text-lg mb-8 ${e.settings.darkMode?"text-gray-300":"text-gray-600"}`,children:"Lisa peatükke seadetes!"}),i.jsx("button",{onClick:()=>{a(),t({type:"SET_MODE",payload:"add-content"})},onMouseEnter:r,className:`px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${e.settings.darkMode?"bg-blue-600 hover:bg-blue-500 text-white":"bg-blue-500 hover:bg-blue-400 text-white"} shadow-lg hover:shadow-xl`,children:"Lisa peatükk"})]}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:`mb-8 p-6 rounded-2xl ${e.settings.darkMode?"bg-gray-800/80 border border-gray-700":"bg-white/80 border border-white/20"} backdrop-blur-sm shadow-xl`,children:[i.jsxs("div",{className:"flex justify-between items-center mb-4",children:[i.jsx("h3",{className:`text-xl font-semibold ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:o("subjectProgress")}),i.jsxs("span",{className:`text-2xl font-bold ${f.color?"text-blue-600":e.settings.darkMode?"text-gray-300":"text-gray-700"}`,style:{color:f.color},children:[Math.round((E==null?void 0:E.totalScore)||0),"%"]})]}),i.jsx("div",{className:`w-full h-3 rounded-full ${e.settings.darkMode?"bg-gray-700":"bg-gray-200"}`,children:i.jsx("div",{className:"h-full rounded-full transition-all duration-500",style:{width:`${(E==null?void 0:E.totalScore)||0}%`,backgroundColor:f.color}})})]}),i.jsxs("div",{className:"space-y-8",children:[(f.bookHeadings||[]).map(q=>{const U=f.chapters.filter(O=>O.bookHeadingId===q.id).sort((O,M)=>(O.order||0)-(M.order||0));return U.length===0?null:i.jsxs("div",{className:`rounded-3xl ${e.settings.darkMode?"bg-gray-800/80 border border-gray-700":"bg-white/80 border border-white/20"} backdrop-blur-sm shadow-xl overflow-hidden`,children:[i.jsxs("div",{className:`p-6 ${e.settings.darkMode?"bg-gray-700/50":"bg-gray-50/80"} border-b ${e.settings.darkMode?"border-gray-600":"border-gray-200"}`,children:[i.jsxs("div",{className:"flex items-center space-x-4",children:[i.jsx("div",{className:`w-12 h-12 rounded-full flex items-center justify-center ${e.settings.darkMode?"bg-blue-600":"bg-blue-500"}`,children:i.jsx(dt,{className:"w-6 h-6 text-white"})}),i.jsxs("div",{children:[i.jsx("h3",{className:`text-2xl font-bold ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:q.title}),i.jsxs("p",{className:`text-sm ${e.settings.darkMode?"text-gray-400":"text-gray-600"}`,children:[U.length," peatükki"]})]})]}),q.content&&i.jsx("div",{className:`mt-4 p-4 rounded-xl ${e.settings.darkMode?"bg-gray-800/50":"bg-white/50"}`,children:i.jsx("p",{className:`text-sm ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:q.content.length>200?q.content.substring(0,200)+"...":q.content})})]}),i.jsx("div",{className:"p-6 space-y-4",children:U.map((O,M)=>{var ke;const L=E==null?void 0:E.completedChapters.includes(O.id),F=O.mainHeadings||[],B=O.images||[],W=((ke=f.definitions)==null?void 0:ke.filter(Ce=>Ce.chapterId===O.id))||[];return i.jsx("button",{onClick:()=>u(O.id),onMouseEnter:r,className:`group w-full p-4 rounded-xl transition-all duration-300 transform hover:scale-102 hover:-translate-y-1 ${e.settings.darkMode?"bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600":"bg-gray-50/50 hover:bg-gray-100/50 border border-gray-200"} shadow-lg hover:shadow-xl text-left`,children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center space-x-4",children:[i.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center ${L?"bg-green-500 text-white":e.settings.darkMode?"bg-gray-600 text-gray-300":"bg-gray-200 text-gray-600"}`,children:L?i.jsx(st,{className:"w-5 h-5"}):i.jsx("span",{className:"font-bold text-sm",children:M+1})}),i.jsxs("div",{children:[i.jsx("h4",{className:`text-lg font-semibold ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:O.title}),i.jsxs("div",{className:"flex flex-wrap gap-2 mt-1",children:[i.jsx("p",{className:`text-xs ${e.settings.darkMode?"text-gray-400":"text-gray-600"}`,children:o(L?"completed":"notStarted")}),F.length>0&&i.jsxs("span",{className:`px-2 py-1 rounded-full text-xs ${e.settings.darkMode?"bg-purple-600 text-white":"bg-purple-100 text-purple-800"}`,children:[F.length," peapealkirja"]}),B.length>0&&i.jsxs("span",{className:`px-2 py-1 rounded-full text-xs ${e.settings.darkMode?"bg-green-600 text-white":"bg-green-100 text-green-800"}`,children:[B.length," pilti"]}),W.length>0&&i.jsxs("span",{className:`px-2 py-1 rounded-full text-xs ${e.settings.darkMode?"bg-yellow-600 text-white":"bg-yellow-100 text-yellow-800"}`,children:[W.length," definitsiooni"]})]})]})]}),i.jsx(ma,{className:`w-5 h-5 transition-transform group-hover:translate-x-1 ${e.settings.darkMode?"text-gray-400":"text-gray-600"}`})]})},O.id)})})]},q.id)}),(()=>{const q=f.chapters.filter(U=>!U.bookHeadingId).sort((U,O)=>(U.order||0)-(O.order||0));return q.length===0?null:i.jsxs("div",{className:`rounded-3xl ${e.settings.darkMode?"bg-gray-800/80 border border-gray-700":"bg-white/80 border border-white/20"} backdrop-blur-sm shadow-xl overflow-hidden`,children:[i.jsx("div",{className:`p-6 ${e.settings.darkMode?"bg-gray-700/50":"bg-gray-50/80"} border-b ${e.settings.darkMode?"border-gray-600":"border-gray-200"}`,children:i.jsxs("div",{className:"flex items-center space-x-4",children:[i.jsx("div",{className:`w-12 h-12 rounded-full flex items-center justify-center ${e.settings.darkMode?"bg-green-600":"bg-green-500"}`,children:i.jsx(dt,{className:"w-6 h-6 text-white"})}),i.jsxs("div",{children:[i.jsx("h3",{className:`text-2xl font-bold ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:"Eraldiseisvad peatükid"}),i.jsxs("p",{className:`text-sm ${e.settings.darkMode?"text-gray-400":"text-gray-600"}`,children:[q.length," peatükki"]})]})]})}),i.jsx("div",{className:"p-6 space-y-4",children:q.map((U,O)=>{var W;const M=E==null?void 0:E.completedChapters.includes(U.id),L=U.mainHeadings||[],F=U.images||[],B=((W=f.definitions)==null?void 0:W.filter(ke=>ke.chapterId===U.id))||[];return i.jsx("button",{onClick:()=>u(U.id),onMouseEnter:r,className:`group w-full p-4 rounded-xl transition-all duration-300 transform hover:scale-102 hover:-translate-y-1 ${e.settings.darkMode?"bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600":"bg-gray-50/50 hover:bg-gray-100/50 border border-gray-200"} shadow-lg hover:shadow-xl text-left`,children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center space-x-4",children:[i.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center ${M?"bg-green-500 text-white":e.settings.darkMode?"bg-gray-600 text-gray-300":"bg-gray-200 text-gray-600"}`,children:M?i.jsx(st,{className:"w-5 h-5"}):i.jsx("span",{className:"font-bold text-sm",children:O+1})}),i.jsxs("div",{children:[i.jsx("h4",{className:`text-lg font-semibold ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:U.title}),i.jsxs("div",{className:"flex flex-wrap gap-2 mt-1",children:[i.jsx("p",{className:`text-xs ${e.settings.darkMode?"text-gray-400":"text-gray-600"}`,children:o(M?"completed":"notStarted")}),L.length>0&&i.jsxs("span",{className:`px-2 py-1 rounded-full text-xs ${e.settings.darkMode?"bg-purple-600 text-white":"bg-purple-100 text-purple-800"}`,children:[L.length," peapealkirja"]}),F.length>0&&i.jsxs("span",{className:`px-2 py-1 rounded-full text-xs ${e.settings.darkMode?"bg-green-600 text-white":"bg-green-100 text-green-800"}`,children:[F.length," pilti"]}),B.length>0&&i.jsxs("span",{className:`px-2 py-1 rounded-full text-xs ${e.settings.darkMode?"bg-yellow-600 text-white":"bg-yellow-100 text-yellow-800"}`,children:[B.length," definitsiooni"]})]})]})]}),i.jsx(ma,{className:`w-5 h-5 transition-transform group-hover:translate-x-1 ${e.settings.darkMode?"text-gray-400":"text-gray-600"}`})]})},U.id)})})]})})()]})]})})]})]})}function xz(){const{state:e,dispatch:t}=Ee(),{playClick:a,playHover:r,playSuccess:o,playError:l}=ht(),{t:c}=St(),[d,s]=T.useState(null),[y,g]=T.useState({currentExercise:0,answers:[],showResults:!1,score:0}),[v,m]=T.useState(""),f=e.customSubjects.find(S=>S.id===e.selectedSubject),w=f==null?void 0:f.chapters.find(S=>S.id===d),A=(w==null?void 0:w.exercises)||[],p=A[y.currentExercise],u=()=>{a(),d?(s(null),g({currentExercise:0,answers:[],showResults:!1,score:0})):t({type:"SET_SUBJECT",payload:null})},h=S=>{a(),s(S),g({currentExercise:0,answers:[],showResults:!1,score:0}),m("")},k=S=>{const R=Array.isArray(p.correctAnswer)?Array.isArray(S)&&p.correctAnswer.every(E=>S.includes(E))&&S.every(E=>p.correctAnswer.includes(E)):S===p.correctAnswer;return R?o():l(),R},I=()=>{if(!p)return;const S=k(v),R=[...y.answers];R[y.currentExercise]=v,g(E=>({...E,answers:R,score:E.score+(S?1:0)})),setTimeout(()=>{y.currentExercise<A.length-1?(g(E=>({...E,currentExercise:E.currentExercise+1})),m("")):(g(E=>({...E,showResults:!0})),z())},1500)},z=()=>{if(!f||!d)return;const S=e.progress.find(q=>q.subjectId===f.id)||{subjectId:f.id,completedChapters:[],exerciseScores:{},totalScore:0},R=Math.round(y.score/A.length*100),E={...S.exerciseScores,[d]:R},_=Object.values(E).reduce((q,U)=>q+U,0)/Object.values(E).length,Ae={...S,exerciseScores:E,totalScore:_||0};t({type:"UPDATE_PROGRESS",payload:Ae})},b=()=>{a(),g({currentExercise:0,answers:[],showResults:!1,score:0}),m("")},C=S=>{var Ae;const R=y.answers[y.currentExercise]!==void 0,E=y.answers[y.currentExercise],_=R&&k(E);switch(S.type){case"multiple-choice":return i.jsxs("div",{className:"space-y-4",children:[i.jsx("h3",{className:`text-xl font-semibold mb-6 ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:S.question}),i.jsx("div",{className:"grid gap-3",children:(Ae=S.options)==null?void 0:Ae.map((q,U)=>i.jsx("button",{onClick:()=>!R&&m(q),disabled:R,className:`p-4 rounded-xl text-left transition-all duration-300 ${R?q===S.correctAnswer?"bg-green-500 text-white":q===E?"bg-red-500 text-white":e.settings.darkMode?"bg-gray-700 text-gray-300":"bg-gray-100 text-gray-600":v===q?e.settings.darkMode?"bg-blue-600 text-white":"bg-blue-500 text-white":e.settings.darkMode?"bg-gray-700 hover:bg-gray-600 text-gray-300":"bg-gray-100 hover:bg-gray-200 text-gray-700"}`,children:q},U))}),R&&i.jsxs("div",{className:`mt-4 p-4 rounded-xl ${_?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:[i.jsxs("div",{className:"flex items-center space-x-2 mb-2",children:[_?i.jsx(st,{className:"w-5 h-5"}):i.jsx(va,{className:"w-5 h-5"}),i.jsx("span",{className:"font-semibold",children:c(_?"correct":"incorrect")})]}),i.jsx("p",{className:"text-sm",children:S.explanation})]})]});case"fill-blank":return i.jsxs("div",{className:"space-y-4",children:[i.jsx("h3",{className:`text-xl font-semibold mb-6 ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:S.question}),i.jsx("input",{type:"text",value:v,onChange:q=>!R&&m(q.target.value),disabled:R,placeholder:"Kirjuta oma vastus siia...",className:`w-full p-4 rounded-xl border-2 transition-all duration-300 ${R?_?"border-green-500 bg-green-50 text-green-800":"border-red-500 bg-red-50 text-red-800":e.settings.darkMode?"border-gray-600 bg-gray-700 text-white focus:border-blue-500":"border-gray-300 bg-white text-gray-900 focus:border-blue-500"} focus:outline-none`}),R&&i.jsxs("div",{className:`mt-4 p-4 rounded-xl ${_?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:[i.jsxs("div",{className:"flex items-center space-x-2 mb-2",children:[_?i.jsx(st,{className:"w-5 h-5"}):i.jsx(va,{className:"w-5 h-5"}),i.jsx("span",{className:"font-semibold",children:c(_?"correct":"incorrect")})]}),!_&&i.jsxs("p",{className:"text-sm mb-2",children:[c("correctAnswer"),": ",S.correctAnswer]}),i.jsx("p",{className:"text-sm",children:S.explanation})]})]});default:return i.jsx("div",{children:"Exercise type not supported"})}};if(!f)return null;const V=e.progress.find(S=>S.subjectId===f.id);return i.jsx("div",{className:`min-h-screen transition-all duration-500 ${e.settings.darkMode?"bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900":"bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"}`,children:i.jsxs("div",{className:"container mx-auto px-4 py-8",children:[i.jsx("header",{className:"flex items-center justify-between mb-8",children:i.jsxs("div",{className:"flex items-center space-x-4",children:[i.jsx("button",{onClick:u,onMouseEnter:r,className:`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${e.settings.darkMode?"bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white":"bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 shadow-lg hover:shadow-xl"}`,children:i.jsx(vt,{className:"w-6 h-6"})}),i.jsxs("div",{children:[i.jsx("h1",{className:`text-3xl font-bold ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:d?w==null?void 0:w.title:f.name}),i.jsx("p",{className:`text-lg ${e.settings.darkMode?"text-gray-300":"text-gray-600"}`,children:c(d?"practiceExercises":"chooseChapterPractice")})]})]})}),d&&w?i.jsx("div",{className:"max-w-4xl mx-auto",children:A.length===0?i.jsxs("div",{className:"text-center py-20",children:[i.jsx("div",{className:`text-6xl mb-6 ${e.settings.darkMode?"text-gray-600":"text-gray-400"}`,children:"❓"}),i.jsx("h2",{className:`text-2xl font-bold mb-4 ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:"Selles peatükis pole veel harjutusi"}),i.jsx("p",{className:`text-lg mb-8 ${e.settings.darkMode?"text-gray-300":"text-gray-600"}`,children:"Lisa harjutusi seadetes!"}),i.jsx("button",{onClick:()=>{a(),t({type:"SET_MODE",payload:"add-content"})},onMouseEnter:r,className:`px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${e.settings.darkMode?"bg-blue-600 hover:bg-blue-500 text-white":"bg-blue-500 hover:bg-blue-400 text-white"} shadow-lg hover:shadow-xl`,children:"Lisa harjutus"})]}):y.showResults?i.jsxs("div",{className:`rounded-3xl p-8 text-center ${e.settings.darkMode?"bg-gray-800/80 border border-gray-700":"bg-white/80 border border-white/20"} backdrop-blur-sm shadow-2xl`,children:[i.jsxs("div",{className:"mb-8",children:[i.jsx(Tn,{className:`w-20 h-20 mx-auto mb-4 ${y.score/A.length>=.8?"text-yellow-500":y.score/A.length>=.6?"text-blue-500":"text-gray-500"}`}),i.jsx("h2",{className:`text-3xl font-bold mb-2 ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:c("practiceComplete")}),i.jsxs("p",{className:`text-xl ${e.settings.darkMode?"text-gray-300":"text-gray-600"}`,children:[c("youScored")," ",y.score," ",c("outOf")," ",A.length]})]}),i.jsxs("div",{className:`text-6xl font-bold mb-8 ${y.score/A.length>=.8?"text-green-500":y.score/A.length>=.6?"text-yellow-500":"text-red-500"}`,children:[Math.round(y.score/A.length*100),"%"]}),i.jsxs("div",{className:"flex justify-center space-x-4",children:[i.jsxs("button",{onClick:b,onMouseEnter:r,className:`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${e.settings.darkMode?"bg-blue-600 hover:bg-blue-500 text-white":"bg-blue-500 hover:bg-blue-400 text-white"} shadow-lg hover:shadow-xl`,children:[i.jsx(Yn,{className:"w-5 h-5"}),i.jsx("span",{children:c("tryAgain")})]}),i.jsx("button",{onClick:u,onMouseEnter:r,className:`px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${e.settings.darkMode?"bg-gray-700 hover:bg-gray-600 text-gray-300":"bg-gray-200 hover:bg-gray-300 text-gray-700"} shadow-lg hover:shadow-xl`,children:c("backToChapters")})]})]}):i.jsxs("div",{className:`rounded-3xl p-8 ${e.settings.darkMode?"bg-gray-800/80 border border-gray-700":"bg-white/80 border border-white/20"} backdrop-blur-sm shadow-2xl`,children:[i.jsxs("div",{className:"mb-8",children:[i.jsxs("div",{className:"flex justify-between items-center mb-2",children:[i.jsxs("span",{className:`text-sm font-medium ${e.settings.darkMode?"text-gray-300":"text-gray-600"}`,children:[c("question")," ",y.currentExercise+1," ",c("outOf")," ",A.length]}),i.jsxs("span",{className:`text-sm font-medium ${e.settings.darkMode?"text-gray-300":"text-gray-600"}`,children:[c("score"),": ",y.score]})]}),i.jsx("div",{className:`w-full h-2 rounded-full ${e.settings.darkMode?"bg-gray-700":"bg-gray-200"}`,children:i.jsx("div",{className:"h-full rounded-full bg-blue-500 transition-all duration-300",style:{width:`${(y.currentExercise+1)/A.length*100}%`}})})]}),p&&C(p),!y.answers[y.currentExercise]&&i.jsx("div",{className:"mt-8 flex justify-center",children:i.jsx("button",{onClick:I,onMouseEnter:r,disabled:!v,className:`px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${v?e.settings.darkMode?"bg-green-600 hover:bg-green-500 text-white":"bg-green-500 hover:bg-green-400 text-white":e.settings.darkMode?"bg-gray-700 text-gray-500 cursor-not-allowed":"bg-gray-200 text-gray-400 cursor-not-allowed"} text-lg font-semibold shadow-lg`,children:c("submitAnswer")})})]})}):i.jsx("div",{className:"max-w-4xl mx-auto",children:f.chapters.length===0?i.jsxs("div",{className:"text-center py-20",children:[i.jsx("div",{className:`text-6xl mb-6 ${e.settings.darkMode?"text-gray-600":"text-gray-400"}`,children:"📝"}),i.jsx("h2",{className:`text-2xl font-bold mb-4 ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:"Selles aines pole veel peatükke"}),i.jsx("p",{className:`text-lg mb-8 ${e.settings.darkMode?"text-gray-300":"text-gray-600"}`,children:"Lisa peatükke seadetes!"}),i.jsx("button",{onClick:()=>{a(),t({type:"SET_MODE",payload:"add-content"})},onMouseEnter:r,className:`px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${e.settings.darkMode?"bg-blue-600 hover:bg-blue-500 text-white":"bg-blue-500 hover:bg-blue-400 text-white"} shadow-lg hover:shadow-xl`,children:"Lisa peatükk"})]}):i.jsx("div",{className:"grid gap-6",children:f.chapters.map((S,R)=>{const E=V==null?void 0:V.exerciseScores[S.id];return i.jsx("button",{onClick:()=>h(S.id),onMouseEnter:r,className:`group p-6 rounded-2xl transition-all duration-300 transform hover:scale-102 hover:-translate-y-1 ${e.settings.darkMode?"bg-gray-800/80 hover:bg-gray-700/80 border border-gray-700":"bg-white/80 hover:bg-white/90 border border-white/20"} backdrop-blur-sm shadow-xl hover:shadow-2xl text-left`,children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{className:"flex items-center space-x-4",children:[i.jsx("div",{className:`w-12 h-12 rounded-full flex items-center justify-center ${E!==void 0?E>=80?"bg-green-500 text-white":E>=60?"bg-yellow-500 text-white":"bg-red-500 text-white":e.settings.darkMode?"bg-gray-700 text-gray-300":"bg-gray-100 text-gray-600"}`,children:E!==void 0?i.jsxs("span",{className:"text-sm font-bold",children:[E,"%"]}):i.jsx("span",{className:"font-bold",children:R+1})}),i.jsxs("div",{children:[i.jsx("h3",{className:`text-xl font-semibold ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:S.title}),i.jsxs("p",{className:`text-sm ${e.settings.darkMode?"text-gray-400":"text-gray-600"}`,children:[S.exercises.length," ",c("exercises"),i.jsx("span",{className:`ml-2 px-2 py-1 rounded-full text-xs ${e.settings.darkMode?"bg-blue-600 text-white":"bg-blue-100 text-blue-800"}`,children:c("customContent")})]})]})]}),i.jsx(ma,{className:`w-6 h-6 transition-transform group-hover:translate-x-1 ${e.settings.darkMode?"text-gray-400":"text-gray-600"}`})]})},S.id)})})})]})})}function fz({subjectId:e,chapters:t,bookHeadings:a}){const{state:r,dispatch:o}=Ee(),{playClick:l,playHover:c,playSuccess:d}=ht(),{t:s}=St(),[y,g]=T.useState(null),[v,m]=T.useState(null),j=(k,I)=>{g(I),k.dataTransfer.effectAllowed="move",k.dataTransfer.setData("text/plain",I)},f=k=>{k.preventDefault(),k.dataTransfer.dropEffect="move"},w=(k,I)=>{k.preventDefault(),m(I)},A=k=>{k.currentTarget.contains(k.relatedTarget)||m(null)},p=(k,I)=>{if(k.preventDefault(),!y||!t.find(V=>V.id===y))return;const C=t.filter(V=>V.bookHeadingId===I).length;o({type:"MOVE_CHAPTER",payload:{subjectId:e,chapterId:y,newHeadingId:I,newOrder:C}}),d(),g(null),m(null)},u=k=>t.filter(I=>I.bookHeadingId===k).sort((I,z)=>(I.order||0)-(z.order||0)),h=u(null);return i.jsxs("div",{className:`p-6 rounded-2xl ${r.settings.darkMode?"bg-gray-800/80 border border-gray-700":"bg-white/80 border border-white/20"} backdrop-blur-sm shadow-xl`,children:[i.jsx("h3",{className:`text-xl font-bold mb-6 ${r.settings.darkMode?"text-white":"text-gray-900"}`,children:s("dragChapter")}),i.jsxs("div",{className:"space-y-6",children:[a.map(k=>{const I=u(k.id);return i.jsxs("div",{className:`border-2 border-dashed rounded-xl p-4 transition-all duration-300 ${v===k.id?"border-blue-500 bg-blue-50 dark:bg-blue-900/20":r.settings.darkMode?"border-gray-600 hover:border-gray-500":"border-gray-300 hover:border-gray-400"}`,onDragOver:f,onDragEnter:z=>w(z,k.id),onDragLeave:A,onDrop:z=>p(z,k.id),children:[i.jsxs("div",{className:"flex items-center justify-between mb-3",children:[i.jsxs("h4",{className:`font-semibold ${r.settings.darkMode?"text-white":"text-gray-900"}`,children:["📚 ",k.title]}),i.jsxs("span",{className:`text-sm px-2 py-1 rounded-full ${r.settings.darkMode?"bg-blue-600 text-white":"bg-blue-100 text-blue-800"}`,children:[I.length," ",s("chapters")]})]}),I.length===0?i.jsxs("div",{className:`text-center py-8 ${r.settings.darkMode?"text-gray-400":"text-gray-500"}`,children:[i.jsx(xa,{className:"w-8 h-8 mx-auto mb-2 opacity-50"}),i.jsx("p",{className:"text-sm",children:s("dropHere")})]}):i.jsx("div",{className:"space-y-2",children:I.map(z=>i.jsxs("div",{draggable:!0,onDragStart:b=>j(b,z.id),className:`flex items-center space-x-3 p-3 rounded-lg cursor-move transition-all duration-300 ${y===z.id?"opacity-50 scale-95":r.settings.darkMode?"bg-gray-700 hover:bg-gray-600":"bg-gray-50 hover:bg-gray-100"}`,children:[i.jsx(Ka,{className:`w-5 h-5 ${r.settings.darkMode?"text-gray-400":"text-gray-500"}`}),i.jsxs("div",{className:"flex-1",children:[i.jsx("p",{className:`font-medium ${r.settings.darkMode?"text-white":"text-gray-900"}`,children:z.title}),i.jsxs("p",{className:`text-sm ${r.settings.darkMode?"text-gray-400":"text-gray-600"}`,children:[z.exercises.length," ",s("exercises")]})]})]},z.id))})]},k.id)}),i.jsxs("div",{className:`border-2 border-dashed rounded-xl p-4 transition-all duration-300 ${v==="standalone"?"border-green-500 bg-green-50 dark:bg-green-900/20":r.settings.darkMode?"border-gray-600 hover:border-gray-500":"border-gray-300 hover:border-gray-400"}`,onDragOver:f,onDragEnter:k=>w(k,"standalone"),onDragLeave:A,onDrop:k=>p(k,null),children:[i.jsxs("div",{className:"flex items-center justify-between mb-3",children:[i.jsxs("h4",{className:`font-semibold ${r.settings.darkMode?"text-white":"text-gray-900"}`,children:["📄 ",s("moveToStandalone")]}),i.jsxs("span",{className:`text-sm px-2 py-1 rounded-full ${r.settings.darkMode?"bg-green-600 text-white":"bg-green-100 text-green-800"}`,children:[h.length," ",s("chapters")]})]}),h.length===0?i.jsxs("div",{className:`text-center py-8 ${r.settings.darkMode?"text-gray-400":"text-gray-500"}`,children:[i.jsx(xa,{className:"w-8 h-8 mx-auto mb-2 opacity-50"}),i.jsx("p",{className:"text-sm",children:s("dropHere")})]}):i.jsx("div",{className:"space-y-2",children:h.map(k=>i.jsxs("div",{draggable:!0,onDragStart:I=>j(I,k.id),className:`flex items-center space-x-3 p-3 rounded-lg cursor-move transition-all duration-300 ${y===k.id?"opacity-50 scale-95":r.settings.darkMode?"bg-gray-700 hover:bg-gray-600":"bg-gray-50 hover:bg-gray-100"}`,children:[i.jsx(Ka,{className:`w-5 h-5 ${r.settings.darkMode?"text-gray-400":"text-gray-500"}`}),i.jsxs("div",{className:"flex-1",children:[i.jsx("p",{className:`font-medium ${r.settings.darkMode?"text-white":"text-gray-900"}`,children:k.title}),i.jsxs("p",{className:`text-sm ${r.settings.darkMode?"text-gray-400":"text-gray-600"}`,children:[k.exercises.length," ",s("exercises")]})]})]},k.id))})]}),i.jsx("div",{className:`p-4 rounded-xl ${r.settings.darkMode?"bg-blue-900/20":"bg-blue-50"}`,children:i.jsxs("p",{className:`text-sm ${r.settings.darkMode?"text-blue-300":"text-blue-800"}`,children:["💡 ",s("dragChapter"),": Lohista peatükke erinevate raamatu pealkirjade vahel või tee need eraldiseisvaks."]})})]})]})}function vz(){const{state:e,dispatch:t}=Ee(),{playClick:a,playHover:r,playError:o}=ht(),{t:l}=St(),[c,d]=T.useState(null),[s,y]=T.useState(null),g=()=>{a(),t({type:"SET_MODE",payload:"home"})},v=()=>{a(),t({type:"SET_MODE",payload:"add-content"})},m=()=>{a(),t({type:"LOGOUT"})},j=()=>{a(),t({type:"UPDATE_SETTINGS",payload:{darkMode:!e.settings.darkMode}})},f=()=>{a(),t({type:"UPDATE_SETTINGS",payload:{audioEnabled:!e.settings.audioEnabled}})},w=C=>{a(),t({type:"UPDATE_SETTINGS",payload:{language:C}})},A=C=>{a(),t({type:"UPDATE_SETTINGS",payload:{fontSize:C}})},p=C=>{a(),t({type:"UPDATE_SETTINGS",payload:{backgroundColor:C}})},u=(C,V)=>{d({type:"subject",id:C,name:V})},h=(C,V,S)=>{d({type:"chapter",id:V,subjectId:C,name:S})},k=(C,V,S,R)=>{d({type:"exercise",id:S,subjectId:C,chapterId:V,name:R})},I=()=>{if(c){switch(o(),c.type){case"subject":t({type:"DELETE_CUSTOM_SUBJECT",payload:c.id});break;case"chapter":t({type:"DELETE_CUSTOM_CHAPTER",payload:{subjectId:c.subjectId,chapterId:c.id}});break;case"exercise":t({type:"DELETE_CUSTOM_EXERCISE",payload:{subjectId:c.subjectId,chapterId:c.chapterId,exerciseId:c.id}});break}d(null)}},z=()=>{a(),d(null)},b=[{name:l("blue"),value:"#3B82F6"},{name:l("green"),value:"#10B981"},{name:l("purple"),value:"#8B5CF6"},{name:l("pink"),value:"#EC4899"},{name:l("orange"),value:"#F59E0B"},{name:l("red"),value:"#EF4444"}];return i.jsxs("div",{className:`min-h-screen transition-all duration-500 ${e.settings.darkMode?"bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900":"bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"}`,children:[c&&i.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4",children:i.jsx("div",{className:`max-w-md w-full rounded-3xl p-8 ${e.settings.darkMode?"bg-gray-800 border border-gray-700":"bg-white border border-gray-200"} shadow-2xl`,children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4",children:i.jsx(An,{className:"w-8 h-8 text-red-600"})}),i.jsx("h3",{className:`text-xl font-bold mb-2 ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:l("confirmDelete")}),i.jsxs("p",{className:`text-sm mb-6 ${e.settings.darkMode?"text-gray-300":"text-gray-600"}`,children:[c.type==="subject"&&l("confirmDeleteSubject"),c.type==="chapter"&&l("confirmDeleteChapter"),c.type==="exercise"&&l("confirmDeleteExercise")]}),i.jsxs("div",{className:`p-4 rounded-xl mb-6 ${e.settings.darkMode?"bg-red-900/20":"bg-red-50"}`,children:[i.jsxs("p",{className:`font-semibold ${e.settings.darkMode?"text-red-300":"text-red-800"}`,children:['"',c.name,'"']}),i.jsx("p",{className:`text-sm mt-1 ${e.settings.darkMode?"text-red-400":"text-red-600"}`,children:l("deleteWarning")})]}),i.jsxs("div",{className:"flex space-x-3",children:[i.jsx("button",{onClick:z,onMouseEnter:r,className:`flex-1 px-4 py-3 rounded-xl transition-all duration-300 ${e.settings.darkMode?"bg-gray-700 hover:bg-gray-600 text-gray-300":"bg-gray-200 hover:bg-gray-300 text-gray-700"}`,children:l("cancel")}),i.jsx("button",{onClick:I,onMouseEnter:r,className:"flex-1 px-4 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white transition-all duration-300",children:l("delete")})]})]})})}),i.jsxs("div",{className:"container mx-auto px-4 py-8",children:[i.jsxs("header",{className:"flex items-center justify-between mb-12",children:[i.jsxs("div",{className:"flex items-center space-x-4",children:[i.jsx("button",{onClick:g,onMouseEnter:r,className:`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${e.settings.darkMode?"bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white":"bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 shadow-lg hover:shadow-xl"}`,children:i.jsx(vt,{className:"w-6 h-6"})}),i.jsxs("div",{children:[i.jsx("h1",{className:`text-3xl font-bold ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:l("settings")}),i.jsx("p",{className:`text-lg ${e.settings.darkMode?"text-gray-300":"text-gray-600"}`,children:l("customizeExperience")})]})]}),i.jsxs("div",{className:"flex space-x-2",children:[i.jsxs("button",{onClick:v,onMouseEnter:r,className:`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 ${e.settings.darkMode?"bg-blue-600 hover:bg-blue-500 text-white":"bg-blue-500 hover:bg-blue-400 text-white"} shadow-lg hover:shadow-xl`,children:[i.jsx(it,{className:"w-5 h-5"}),i.jsx("span",{children:l("addContent")})]}),i.jsxs("button",{onClick:m,onMouseEnter:r,className:`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 ${e.settings.darkMode?"bg-red-600 hover:bg-red-500 text-white":"bg-red-500 hover:bg-red-400 text-white"} shadow-lg hover:shadow-xl`,children:[i.jsx(Kn,{className:"w-5 h-5"}),i.jsx("span",{children:"Logi välja"})]})]})]}),i.jsx("div",{className:`mb-8 p-6 rounded-2xl ${e.settings.darkMode?"bg-gray-800/80 border border-gray-700":"bg-white/80 border border-white/20"} backdrop-blur-sm shadow-xl`,children:i.jsxs("div",{className:"flex items-center space-x-4",children:[i.jsx("div",{className:`w-12 h-12 rounded-full flex items-center justify-center ${e.settings.darkMode?"bg-blue-600":"bg-blue-500"}`,children:i.jsx(fa,{className:"w-6 h-6 text-white"})}),i.jsxs("div",{children:[i.jsxs("h3",{className:`text-xl font-semibold ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:["Tere, ",e.currentUser,"!"]}),i.jsx("p",{className:`text-sm ${e.settings.darkMode?"text-gray-400":"text-gray-600"}`,children:"Sinu andmed salvestatakse automaatselt"})]})]})}),i.jsxs("div",{className:"max-w-4xl mx-auto space-y-8",children:[i.jsxs("div",{className:`p-8 rounded-3xl ${e.settings.darkMode?"bg-gray-800/80 border border-gray-700":"bg-white/80 border border-white/20"} backdrop-blur-sm shadow-2xl`,children:[i.jsxs("h2",{className:`text-2xl font-bold mb-6 flex items-center space-x-3 ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:[i.jsx(Ga,{className:"w-6 h-6"}),i.jsx("span",{children:l("language")})]}),i.jsxs("div",{className:"flex items-center justify-between p-4 rounded-xl mb-6 transition-all duration-300 hover:bg-gray-50 hover:bg-opacity-10",children:[i.jsxs("div",{className:"flex items-center space-x-3",children:[i.jsx(Ga,{className:`w-6 h-6 ${e.settings.darkMode?"text-blue-400":"text-blue-600"}`}),i.jsxs("div",{children:[i.jsx("h3",{className:`font-semibold ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:l("language")}),i.jsx("p",{className:`text-sm ${e.settings.darkMode?"text-gray-400":"text-gray-600"}`,children:l("languageDescription")})]})]}),i.jsxs("div",{className:"flex space-x-2",children:[i.jsx("button",{onClick:()=>w("en"),onMouseEnter:r,className:`px-4 py-2 rounded-xl transition-all duration-300 ${e.settings.language==="en"?e.settings.darkMode?"bg-blue-600 text-white":"bg-blue-500 text-white":e.settings.darkMode?"bg-gray-700 hover:bg-gray-600 text-gray-300":"bg-gray-100 hover:bg-gray-200 text-gray-700"}`,children:l("english")}),i.jsx("button",{onClick:()=>w("et"),onMouseEnter:r,className:`px-4 py-2 rounded-xl transition-all duration-300 ${e.settings.language==="et"?e.settings.darkMode?"bg-blue-600 text-white":"bg-blue-500 text-white":e.settings.darkMode?"bg-gray-700 hover:bg-gray-600 text-gray-300":"bg-gray-100 hover:bg-gray-200 text-gray-700"}`,children:l("estonian")})]})]})]}),i.jsxs("div",{className:`p-8 rounded-3xl ${e.settings.darkMode?"bg-gray-800/80 border border-gray-700":"bg-white/80 border border-white/20"} backdrop-blur-sm shadow-2xl`,children:[i.jsxs("h2",{className:`text-2xl font-bold mb-6 flex items-center space-x-3 ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:[i.jsx(Qn,{className:"w-6 h-6"}),i.jsx("span",{children:l("appearance")})]}),i.jsxs("div",{className:"flex items-center justify-between p-4 rounded-xl mb-6 transition-all duration-300 hover:bg-gray-50 hover:bg-opacity-10",children:[i.jsxs("div",{className:"flex items-center space-x-3",children:[e.settings.darkMode?i.jsx(Xn,{className:`w-6 h-6 ${e.settings.darkMode?"text-blue-400":"text-gray-600"}`}):i.jsx(tr,{className:"w-6 h-6 text-yellow-500"}),i.jsxs("div",{children:[i.jsx("h3",{className:`font-semibold ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:l("darkMode")}),i.jsx("p",{className:`text-sm ${e.settings.darkMode?"text-gray-400":"text-gray-600"}`,children:l("darkModeDescription")})]})]}),i.jsx("button",{onClick:j,onMouseEnter:r,className:`relative w-16 h-8 rounded-full transition-all duration-300 ${e.settings.darkMode?"bg-blue-600":"bg-gray-300"}`,children:i.jsx("div",{className:`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 transform ${e.settings.darkMode?"translate-x-9":"translate-x-1"}`})})]}),i.jsxs("div",{className:"mb-6",children:[i.jsx("h3",{className:`font-semibold mb-4 ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:l("accentColor")}),i.jsx("div",{className:"grid grid-cols-6 gap-3",children:b.map(C=>i.jsx("button",{onClick:()=>p(C.value),onMouseEnter:r,className:`w-12 h-12 rounded-full transition-all duration-300 transform hover:scale-110 ${e.settings.backgroundColor===C.value?"ring-4 ring-offset-2 ring-offset-transparent ring-white":""}`,style:{backgroundColor:C.value},title:C.name},C.value))})]})]}),i.jsxs("div",{className:`p-8 rounded-3xl ${e.settings.darkMode?"bg-gray-800/80 border border-gray-700":"bg-white/80 border border-white/20"} backdrop-blur-sm shadow-2xl`,children:[i.jsxs("h2",{className:`text-2xl font-bold mb-6 flex items-center space-x-3 ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:[i.jsx(ar,{className:"w-6 h-6"}),i.jsx("span",{children:l("textSettings")})]}),i.jsxs("div",{className:"mb-6",children:[i.jsx("h3",{className:`font-semibold mb-4 ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:l("fontSize")}),i.jsx("div",{className:"grid grid-cols-3 gap-3",children:[{key:"small",label:l("small"),size:"text-sm"},{key:"medium",label:l("medium"),size:"text-base"},{key:"large",label:l("large"),size:"text-lg"}].map(C=>i.jsx("button",{onClick:()=>A(C.key),onMouseEnter:r,className:`p-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${e.settings.fontSize===C.key?e.settings.darkMode?"bg-blue-600 text-white":"bg-blue-500 text-white":e.settings.darkMode?"bg-gray-700 hover:bg-gray-600 text-gray-300":"bg-gray-100 hover:bg-gray-200 text-gray-700"}`,children:i.jsx("div",{className:`${C.size} font-medium`,children:C.label})},C.key))})]})]}),i.jsxs("div",{className:`p-8 rounded-3xl ${e.settings.darkMode?"bg-gray-800/80 border border-gray-700":"bg-white/80 border border-white/20"} backdrop-blur-sm shadow-2xl`,children:[i.jsxs("h2",{className:`text-2xl font-bold mb-6 flex items-center space-x-3 ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:[e.settings.audioEnabled?i.jsx(Qa,{className:"w-6 h-6"}):i.jsx(Ja,{className:"w-6 h-6"}),i.jsx("span",{children:l("audioSettings")})]}),i.jsxs("div",{className:"flex items-center justify-between p-4 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:bg-opacity-10",children:[i.jsxs("div",{className:"flex items-center space-x-3",children:[e.settings.audioEnabled?i.jsx(Qa,{className:`w-6 h-6 ${e.settings.darkMode?"text-green-400":"text-green-600"}`}):i.jsx(Ja,{className:`w-6 h-6 ${e.settings.darkMode?"text-red-400":"text-red-600"}`}),i.jsxs("div",{children:[i.jsx("h3",{className:`font-semibold ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:l("soundEffects")}),i.jsx("p",{className:`text-sm ${e.settings.darkMode?"text-gray-400":"text-gray-600"}`,children:l("soundEffectsDescription")})]})]}),i.jsx("button",{onClick:f,onMouseEnter:r,className:`relative w-16 h-8 rounded-full transition-all duration-300 ${e.settings.audioEnabled?"bg-green-600":"bg-gray-300"}`,children:i.jsx("div",{className:`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 transform ${e.settings.audioEnabled?"translate-x-9":"translate-x-1"}`})})]})]}),e.customSubjects.length>0&&i.jsxs("div",{className:`p-8 rounded-3xl ${e.settings.darkMode?"bg-gray-800/80 border border-gray-700":"bg-white/80 border border-white/20"} backdrop-blur-sm shadow-2xl`,children:[i.jsx("h2",{className:`text-2xl font-bold mb-6 ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:l("customContent")}),i.jsx("div",{className:"space-y-4",children:e.customSubjects.map(C=>{var V;return i.jsxs("div",{className:`border rounded-xl ${e.settings.darkMode?"border-gray-600":"border-gray-200"}`,children:[i.jsx("div",{className:`p-4 ${e.settings.darkMode?"bg-gray-700/50":"bg-gray-50"} rounded-t-xl`,children:i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("div",{children:[i.jsx("h3",{className:`font-semibold ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:C.name}),i.jsxs("p",{className:`text-sm ${e.settings.darkMode?"text-gray-400":"text-gray-600"}`,children:[C.chapters.length," peatükki, ",((V=C.definitions)==null?void 0:V.length)||0," definitsiooni"]})]}),i.jsxs("div",{className:"flex space-x-2",children:[i.jsx("button",{onClick:()=>y(s===C.id?null:C.id),onMouseEnter:r,className:`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${e.settings.darkMode?"bg-blue-600 hover:bg-blue-500 text-white":"bg-blue-500 hover:bg-blue-400 text-white"}`,children:i.jsx(xa,{className:"w-4 h-4"})}),i.jsx("button",{onClick:()=>u(C.id,C.name),onMouseEnter:r,className:`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${e.settings.darkMode?"bg-red-600 hover:bg-red-500 text-white":"bg-red-500 hover:bg-red-400 text-white"}`,children:i.jsx(Xe,{className:"w-4 h-4"})})]})]})}),s===C.id&&i.jsx("div",{className:"p-4",children:i.jsx(fz,{subjectId:C.id,chapters:C.chapters,bookHeadings:C.bookHeadings||[]})}),C.chapters.length>0&&s!==C.id&&i.jsx("div",{className:"p-4 space-y-3",children:C.chapters.map(S=>{var R,E;return i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center justify-between p-3 rounded-lg bg-gray-50 bg-opacity-50",children:[i.jsxs("div",{children:[i.jsx("h4",{className:`font-medium ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:S.title}),i.jsxs("p",{className:`text-sm ${e.settings.darkMode?"text-gray-400":"text-gray-600"}`,children:[S.exercises.length," harjutust",S.images.length>0&&`, ${S.images.length} pilti`,((R=C.definitions)==null?void 0:R.filter(_=>_.chapterId===S.id).length)>0&&`, ${(E=C.definitions)==null?void 0:E.filter(_=>_.chapterId===S.id).length} definitsiooni`]})]}),i.jsx("button",{onClick:()=>h(C.id,S.id,S.title),onMouseEnter:r,className:`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${e.settings.darkMode?"bg-red-600 hover:bg-red-500 text-white":"bg-red-500 hover:bg-red-400 text-white"}`,children:i.jsx(Xe,{className:"w-3 h-3"})})]}),S.exercises.length>0&&i.jsx("div",{className:"ml-4 mt-2 space-y-2",children:S.exercises.map(_=>i.jsxs("div",{className:"flex items-center justify-between p-2 rounded-lg bg-gray-100 bg-opacity-30",children:[i.jsxs("div",{children:[i.jsx("p",{className:`text-sm font-medium ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:_.question.length>50?_.question.substring(0,50)+"...":_.question}),i.jsx("p",{className:`text-xs ${e.settings.darkMode,"text-gray-500"}`,children:_.type==="multiple-choice"?"Valikvastus":"Täida lünk"})]}),i.jsx("button",{onClick:()=>k(C.id,S.id,_.id,_.question),onMouseEnter:r,className:`p-1 rounded transition-all duration-300 hover:scale-110 ${e.settings.darkMode?"bg-red-600 hover:bg-red-500 text-white":"bg-red-500 hover:bg-red-400 text-white"}`,children:i.jsx(Xe,{className:"w-3 h-3"})})]},_.id))})]},S.id)})})]},C.id)})})]}),i.jsxs("div",{className:`p-8 rounded-3xl ${e.settings.darkMode?"bg-gray-800/80 border border-gray-700":"bg-white/80 border border-white/20"} backdrop-blur-sm shadow-2xl`,children:[i.jsx("h2",{className:`text-2xl font-bold mb-6 ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:l("preview")}),i.jsxs("div",{className:`p-6 rounded-2xl ${e.settings.darkMode?"bg-gray-700":"bg-gray-50"}`,children:[i.jsx("h3",{className:`text-xl font-semibold mb-2 ${e.settings.darkMode?"text-white":"text-gray-900"} ${e.settings.fontSize==="small"?"text-lg":e.settings.fontSize==="large"?"text-2xl":"text-xl"}`,children:l("sampleContent")}),i.jsx("p",{className:`${e.settings.darkMode?"text-gray-300":"text-gray-600"} ${e.settings.fontSize==="small"?"text-sm":e.settings.fontSize==="large"?"text-lg":"text-base"}`,children:l("sampleDescription")})]})]})]})]})]})}function Mz(){const{state:e,dispatch:t}=Ee(),{playClick:a,playHover:r}=ht(),{t:o}=St(),[l,c]=T.useState("subject"),[d,s]=T.useState(""),[y,g]=T.useState(""),[v,m]=T.useState("BookOpen"),[j,f]=T.useState("#3B82F6"),[w,A]=T.useState(""),[p,u]=T.useState(""),[h,k]=T.useState(""),[I,z]=T.useState([]),[b,C]=T.useState(""),[V,S]=T.useState([]),[R,E]=T.useState(""),[_,Ae]=T.useState(""),[q,U]=T.useState("multiple-choice"),[O,M]=T.useState(["",""]),[L,F]=T.useState(""),[B,W]=T.useState(""),[ke,Ce]=T.useState([]),[yt,et]=T.useState(""),[Wt,jL]=T.useState(""),aI=()=>{a(),t({type:"SET_MODE",payload:"home"})},nI=()=>{s(""),g(""),m("BookOpen"),f("#3B82F6")},rI=()=>{A(""),u(""),k(""),z([]),C(""),S([])},oI=()=>{A(""),E(""),Ae(""),U("multiple-choice"),M(["",""]),F(""),W(""),Ce([])},iI=()=>{A(""),et(""),jL("")},lI=()=>{if(!d.trim())return;a();const x={id:`subject-${Date.now()}`,name:d.trim(),description:y.trim(),icon:v,color:j,chapters:[],bookHeadings:[],definitions:[],isCustom:!0};t({type:"ADD_CUSTOM_SUBJECT",payload:x}),nI()},cI=()=>{if(!w||!p.trim())return;a();const x=e.customSubjects.find(D=>D.id===w);if(!x)return;const P={id:`chapter-${Date.now()}`,title:p.trim(),content:h.trim(),mainHeadings:V,images:I,exercises:[],bookHeadingId:b||void 0,order:x.chapters.length,isCustom:!0};t({type:"ADD_CUSTOM_CHAPTER",payload:{subjectId:w,chapter:P}}),rI()},dI=()=>{if(!w||!R||!_.trim())return;a();const x={id:`exercise-${Date.now()}`,question:_.trim(),type:q,options:q==="multiple-choice"?O.filter(P=>P.trim()):void 0,correctAnswer:L.trim(),explanation:B.trim(),images:ke,isCustom:!0};t({type:"ADD_CUSTOM_EXERCISE",payload:{subjectId:w,chapterId:R,exercise:x}}),oI()},sI=()=>{if(!w||!yt.trim())return;a();const x=e.customSubjects.find(D=>D.id===w);if(!x)return;const P={id:`heading-${Date.now()}`,title:yt.trim(),content:Wt.trim(),order:(x.bookHeadings||[]).length,chapterIds:[]};t({type:"ADD_BOOK_HEADING",payload:{subjectId:w,heading:P}}),iI()},hI=()=>{const x={id:`img-${Date.now()}`,url:"",description:"",alt:"",width:void 0,height:void 0,position:"center"};z([...I,x])},yI=(x,P,D)=>{const $=[...I];$[x]={...$[x],[P]:D},z($)},uI=x=>{z(I.filter((P,D)=>D!==x))},pI=()=>{const x={id:`img-${Date.now()}`,url:"",description:"",alt:"",width:void 0,height:void 0,position:"center"};Ce([...ke,x])},kI=(x,P,D)=>{const $=[...ke];$[x]={...$[x],[P]:D},Ce($)},gI=x=>{Ce(ke.filter((P,D)=>D!==x))},mI=()=>{const x={id:`main-${Date.now()}`,title:"",content:"",subHeadings:[],images:[],order:V.length};S([...V,x])},HL=(x,P,D)=>{const $=[...V];$[x]={...$[x],[P]:D},S($)},xI=x=>{S(V.filter((P,D)=>D!==x))},fI=x=>{const P={id:`sub-${Date.now()}`,title:"",level:1,content:"",images:[],order:V[x].subHeadings.length},D=[...V];D[x].subHeadings.push(P),S(D)},p9=(x,P,D,$)=>{const X=[...V];X[x].subHeadings[P]={...X[x].subHeadings[P],[D]:$},S(X)},vI=(x,P)=>{const D=[...V];D[x].subHeadings=D[x].subHeadings.filter(($,X)=>X!==P),S(D)},MI=x=>{const P={id:`img-${Date.now()}`,url:"",description:"",alt:"",width:void 0,height:void 0,position:"center"},D=[...V];D[x].images.push(P),S(D)},wI=(x,P,D,$)=>{const X=[...V];X[x].images[P]={...X[x].images[P],[D]:$},S(X)},LI=(x,P)=>{const D=[...V];D[x].images=D[x].images.filter(($,X)=>X!==P),S(D)},bI=(x,P)=>{const D={id:`img-${Date.now()}`,url:"",description:"",alt:"",width:void 0,height:void 0,position:"center"},$=[...V];$[x].subHeadings[P].images.push(D),S($)},CI=(x,P,D,$,X)=>{const te=[...V];te[x].subHeadings[P].images[D]={...te[x].subHeadings[P].images[D],[$]:X},S(te)},SI=(x,P,D)=>{const $=[...V];$[x].subHeadings[P].images=$[x].subHeadings[P].images.filter((X,te)=>te!==D),S($)},II=()=>{M([...O,""])},jI=(x,P)=>{const D=[...O];D[x]=P,M(D)},HI=x=>{O.length>2&&M(O.filter((P,D)=>D!==x))},zI=x=>{const P=e.customSubjects.find(D=>D.id===x);return(P==null?void 0:P.chapters)||[]},qI=x=>{const P=e.customSubjects.find(D=>D.id===x);return(P==null?void 0:P.bookHeadings)||[]},AI=["BookOpen","Calculator","Atom","Globe","Microscope","Music","Palette","Camera"],PI=[{name:o("blue"),value:"#3B82F6"},{name:o("green"),value:"#10B981"},{name:o("purple"),value:"#8B5CF6"},{name:o("pink"),value:"#EC4899"},{name:o("orange"),value:"#F59E0B"},{name:o("red"),value:"#EF4444"}],jr=(x,P,D,$,X)=>i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("h4",{className:`font-semibold ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:X}),i.jsxs("button",{onClick:P,onMouseEnter:r,className:`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${e.settings.darkMode?"bg-blue-600 hover:bg-blue-500 text-white":"bg-blue-500 hover:bg-blue-400 text-white"}`,children:[i.jsx(it,{className:"w-4 h-4"}),i.jsx("span",{children:o("addImage")})]})]}),x.map((te,ut)=>i.jsxs("div",{className:`p-4 rounded-xl border ${e.settings.darkMode?"border-gray-600 bg-gray-700/50":"border-gray-300 bg-gray-50"}`,children:[i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{className:`block text-sm font-medium mb-2 ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:o("imageUrl")}),i.jsx("input",{type:"url",value:te.url,onChange:ve=>D(ut,"url",ve.target.value),placeholder:"https://example.com/image.jpg",className:`w-full p-3 rounded-xl border-2 transition-all duration-300 ${e.settings.darkMode?"border-gray-600 bg-gray-700 text-white focus:border-blue-500":"border-gray-300 bg-white text-gray-900 focus:border-blue-500"} focus:outline-none`})]}),i.jsxs("div",{children:[i.jsx("label",{className:`block text-sm font-medium mb-2 ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:o("imageAlt")}),i.jsx("input",{type:"text",value:te.alt,onChange:ve=>D(ut,"alt",ve.target.value),placeholder:"Pildi kirjeldus ligipääsetavuse jaoks",className:`w-full p-3 rounded-xl border-2 transition-all duration-300 ${e.settings.darkMode?"border-gray-600 bg-gray-700 text-white focus:border-blue-500":"border-gray-300 bg-white text-gray-900 focus:border-blue-500"} focus:outline-none`})]}),i.jsxs("div",{className:"md:col-span-2",children:[i.jsx("label",{className:`block text-sm font-medium mb-2 ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:o("imageDescription")}),i.jsx("textarea",{value:te.description||"",onChange:ve=>D(ut,"description",ve.target.value),placeholder:"Detailne pildi kirjeldus",rows:3,className:`w-full p-3 rounded-xl border-2 transition-all duration-300 ${e.settings.darkMode?"border-gray-600 bg-gray-700 text-white focus:border-blue-500":"border-gray-300 bg-white text-gray-900 focus:border-blue-500"} focus:outline-none resize-none`})]}),i.jsxs("div",{children:[i.jsx("label",{className:`block text-sm font-medium mb-2 ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:o("imagePosition")}),i.jsxs("select",{value:te.position||"center",onChange:ve=>D(ut,"position",ve.target.value),className:`w-full p-3 rounded-xl border-2 transition-all duration-300 ${e.settings.darkMode?"border-gray-600 bg-gray-700 text-white focus:border-blue-500":"border-gray-300 bg-white text-gray-900 focus:border-blue-500"} focus:outline-none`,children:[i.jsx("option",{value:"left",children:o("positionLeft")}),i.jsx("option",{value:"center",children:o("positionCenter")}),i.jsx("option",{value:"right",children:o("positionRight")})]})]}),i.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[i.jsxs("div",{children:[i.jsx("label",{className:`block text-sm font-medium mb-2 ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:o("imageWidth")}),i.jsx("input",{type:"number",value:te.width??"",onChange:ve=>D(ut,"width",ve.target.value?parseInt(ve.target.value):void 0),placeholder:"400",className:`w-full p-3 rounded-xl border-2 transition-all duration-300 ${e.settings.darkMode?"border-gray-600 bg-gray-700 text-white focus:border-blue-500":"border-gray-300 bg-white text-gray-900 focus:border-blue-500"} focus:outline-none`})]}),i.jsxs("div",{children:[i.jsx("label",{className:`block text-sm font-medium mb-2 ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:o("imageHeight")}),i.jsx("input",{type:"number",value:te.height??"",onChange:ve=>D(ut,"height",ve.target.value?parseInt(ve.target.value):void 0),placeholder:"300",className:`w-full p-3 rounded-xl border-2 transition-all duration-300 ${e.settings.darkMode?"border-gray-600 bg-gray-700 text-white focus:border-blue-500":"border-gray-300 bg-white text-gray-900 focus:border-blue-500"} focus:outline-none`})]})]})]}),i.jsx("div",{className:"mt-4 flex justify-end",children:i.jsxs("button",{onClick:()=>$(ut),onMouseEnter:r,className:`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${e.settings.darkMode?"bg-red-600 hover:bg-red-500 text-white":"bg-red-500 hover:bg-red-400 text-white"}`,children:[i.jsx(Xe,{className:"w-4 h-4"}),i.jsx("span",{children:o("removeImage")})]})}),te.url&&i.jsxs("div",{className:"mt-4",children:[i.jsx("img",{src:te.url,alt:te.alt||te.description,className:"max-w-full h-auto rounded-lg",style:{width:te.width??"auto",height:te.height??"auto",maxWidth:"300px",maxHeight:"200px"},onError:ve=>{ve.currentTarget.style.display="none"}}),te.description&&i.jsx("p",{className:`text-sm mt-2 ${e.settings.darkMode?"text-gray-400":"text-gray-600"}`,children:te.description})]})]},te.id))]});return i.jsx("div",{className:`min-h-screen transition-all duration-500 ${e.settings.darkMode?"bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900":"bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"}`,children:i.jsxs("div",{className:"container mx-auto px-4 py-8",children:[i.jsx("header",{className:"flex items-center justify-between mb-12",children:i.jsxs("div",{className:"flex items-center space-x-4",children:[i.jsx("button",{onClick:aI,onMouseEnter:r,className:`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${e.settings.darkMode?"bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white":"bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 shadow-lg hover:shadow-xl"}`,children:i.jsx(vt,{className:"w-6 h-6"})}),i.jsxs("div",{children:[i.jsx("h1",{className:`text-3xl font-bold ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:o("addContent")}),i.jsx("p",{className:`text-lg ${e.settings.darkMode?"text-gray-300":"text-gray-600"}`,children:o("addContentDescription")})]})]})}),i.jsx("div",{className:"flex space-x-2 mb-8",children:[{key:"subject",label:o("addSubject"),icon:dt},{key:"chapter",label:o("addChapter"),icon:Rn},{key:"exercise",label:o("addExercise"),icon:On},{key:"heading",label:o("addBookHeading"),icon:Fn}].map(x=>i.jsxs("button",{onClick:()=>{a(),c(x.key)},onMouseEnter:r,className:`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${l===x.key?e.settings.darkMode?"bg-blue-600 text-white":"bg-blue-500 text-white":e.settings.darkMode?"bg-gray-700 hover:bg-gray-600 text-gray-300":"bg-white hover:bg-gray-50 text-gray-600 shadow-lg"}`,children:[i.jsx(x.icon,{className:"w-5 h-5"}),i.jsx("span",{children:x.label})]},x.key))}),i.jsxs("div",{className:"max-w-4xl mx-auto",children:[l==="subject"&&i.jsxs("div",{className:`p-8 rounded-3xl ${e.settings.darkMode?"bg-gray-800/80 border border-gray-700":"bg-white/80 border border-white/20"} backdrop-blur-sm shadow-2xl`,children:[i.jsx("h2",{className:`text-2xl font-bold mb-6 ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:o("createSubject")}),i.jsxs("div",{className:"space-y-6",children:[i.jsxs("div",{children:[i.jsx("label",{className:`block text-sm font-medium mb-2 ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:o("subjectName")}),i.jsx("input",{type:"text",value:d,onChange:x=>s(x.target.value),placeholder:"Nt. Matemaatika",className:`w-full p-3 rounded-xl border-2 transition-all duration-300 ${e.settings.darkMode?"border-gray-600 bg-gray-700 text-white focus:border-blue-500":"border-gray-300 bg-white text-gray-900 focus:border-blue-500"} focus:outline-none`})]}),i.jsxs("div",{children:[i.jsx("label",{className:`block text-sm font-medium mb-2 ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:o("subjectDescription")}),i.jsx("textarea",{value:y,onChange:x=>g(x.target.value),placeholder:"Lühike kirjeldus aine kohta",rows:3,className:`w-full p-3 rounded-xl border-2 transition-all duration-300 ${e.settings.darkMode?"border-gray-600 bg-gray-700 text-white focus:border-blue-500":"border-gray-300 bg-white text-gray-900 focus:border-blue-500"} focus:outline-none resize-none`})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[i.jsxs("div",{children:[i.jsx("label",{className:`block text-sm font-medium mb-2 ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:"Ikoon"}),i.jsx("select",{value:v,onChange:x=>m(x.target.value),className:`w-full p-3 rounded-xl border-2 transition-all duration-300 ${e.settings.darkMode?"border-gray-600 bg-gray-700 text-white focus:border-blue-500":"border-gray-300 bg-white text-gray-900 focus:border-blue-500"} focus:outline-none`,children:AI.map(x=>i.jsx("option",{value:x,children:x},x))})]}),i.jsxs("div",{children:[i.jsx("label",{className:`block text-sm font-medium mb-2 ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:"Värv"}),i.jsx("div",{className:"flex space-x-2",children:PI.map(x=>i.jsx("button",{onClick:()=>f(x.value),onMouseEnter:r,className:`w-12 h-12 rounded-full transition-all duration-300 transform hover:scale-110 ${j===x.value?"ring-4 ring-offset-2 ring-offset-transparent ring-white":""}`,style:{backgroundColor:x.value},title:x.name},x.value))})]})]}),i.jsxs("button",{onClick:lI,disabled:!d.trim(),onMouseEnter:r,className:`w-full flex items-center justify-center space-x-2 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${d.trim()?e.settings.darkMode?"bg-green-600 hover:bg-green-500 text-white":"bg-green-500 hover:bg-green-400 text-white":e.settings.darkMode?"bg-gray-600 text-gray-400 cursor-not-allowed":"bg-gray-300 text-gray-500 cursor-not-allowed"} text-lg font-semibold shadow-lg`,children:[i.jsx(xt,{className:"w-6 h-6"}),i.jsx("span",{children:o("save")})]})]})]}),l==="chapter"&&i.jsxs("div",{className:`p-8 rounded-3xl ${e.settings.darkMode?"bg-gray-800/80 border border-gray-700":"bg-white/80 border border-white/20"} backdrop-blur-sm shadow-2xl`,children:[i.jsx("h2",{className:`text-2xl font-bold mb-6 ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:o("createChapter")}),i.jsxs("div",{className:"space-y-6",children:[i.jsxs("div",{children:[i.jsx("label",{className:`block text-sm font-medium mb-2 ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:o("selectSubject")}),i.jsxs("select",{value:w,onChange:x=>A(x.target.value),className:`w-full p-3 rounded-xl border-2 transition-all duration-300 ${e.settings.darkMode?"border-gray-600 bg-gray-700 text-white focus:border-blue-500":"border-gray-300 bg-white text-gray-900 focus:border-blue-500"} focus:outline-none`,children:[i.jsx("option",{value:"",children:o("selectSubject")}),e.customSubjects.map(x=>i.jsx("option",{value:x.id,children:x.name},x.id))]})]}),w&&i.jsxs("div",{children:[i.jsx("label",{className:`block text-sm font-medium mb-2 ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:o("assignToHeading")}),i.jsxs("select",{value:b,onChange:x=>C(x.target.value),className:`w-full p-3 rounded-xl border-2 transition-all duration-300 ${e.settings.darkMode?"border-gray-600 bg-gray-700 text-white focus:border-blue-500":"border-gray-300 bg-white text-gray-900 focus:border-blue-500"} focus:outline-none`,children:[i.jsx("option",{value:"",children:o("noHeading")}),qI(w).map(x=>i.jsx("option",{value:x.id,children:x.title},x.id))]})]}),i.jsxs("div",{children:[i.jsx("label",{className:`block text-sm font-medium mb-2 ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:o("chapterTitle")}),i.jsx("input",{type:"text",value:p,onChange:x=>u(x.target.value),placeholder:"Nt. Algebralised avaldised",className:`w-full p-3 rounded-xl border-2 transition-all duration-300 ${e.settings.darkMode?"border-gray-600 bg-gray-700 text-white focus:border-blue-500":"border-gray-300 bg-white text-gray-900 focus:border-blue-500"} focus:outline-none`})]}),i.jsxs("div",{children:[i.jsx("label",{className:`block text-sm font-medium mb-2 ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:o("chapterContent")}),i.jsx("textarea",{value:h,onChange:x=>k(x.target.value),placeholder:"Peatüki põhisisu...",rows:6,className:`w-full p-3 rounded-xl border-2 transition-all duration-300 ${e.settings.darkMode?"border-gray-600 bg-gray-700 text-white focus:border-blue-500":"border-gray-300 bg-white text-gray-900 focus:border-blue-500"} focus:outline-none resize-none`})]}),i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("h3",{className:`text-lg font-semibold ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:o("mainHeadings")}),i.jsxs("button",{onClick:mI,onMouseEnter:r,className:`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${e.settings.darkMode?"bg-purple-600 hover:bg-purple-500 text-white":"bg-purple-500 hover:bg-purple-400 text-white"}`,children:[i.jsx(it,{className:"w-4 h-4"}),i.jsx("span",{children:o("addMainHeading")})]})]}),V.map((x,P)=>i.jsx("div",{className:`p-4 rounded-xl border ${e.settings.darkMode?"border-gray-600 bg-gray-700/30":"border-gray-300 bg-gray-50/50"}`,children:i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("h4",{className:`font-medium ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:["Peapealkiri ",P+1]}),i.jsx("button",{onClick:()=>xI(P),onMouseEnter:r,className:`p-2 rounded-lg transition-all duration-300 ${e.settings.darkMode?"bg-red-600 hover:bg-red-500 text-white":"bg-red-500 hover:bg-red-400 text-white"}`,children:i.jsx(Xe,{className:"w-4 h-4"})})]}),i.jsx("input",{type:"text",value:x.title,onChange:D=>HL(P,"title",D.target.value),placeholder:o("mainHeadingTitle"),className:`w-full p-3 rounded-xl border-2 transition-all duration-300 ${e.settings.darkMode?"border-gray-600 bg-gray-700 text-white focus:border-blue-500":"border-gray-300 bg-white text-gray-900 focus:border-blue-500"} focus:outline-none`}),i.jsx("textarea",{value:x.content,onChange:D=>HL(P,"content",D.target.value),placeholder:o("mainHeadingContent"),rows:4,className:`w-full p-3 rounded-xl border-2 transition-all duration-300 ${e.settings.darkMode?"border-gray-600 bg-gray-700 text-white focus:border-blue-500":"border-gray-300 bg-white text-gray-900 focus:border-blue-500"} focus:outline-none resize-none`}),jr(x.images,()=>MI(P),(D,$,X)=>wI(P,D,$,X),D=>LI(P,D),"Peapealkirja pildid"),i.jsxs("div",{className:"space-y-3",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsx("h5",{className:`font-medium ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:o("subHeadings")}),i.jsxs("button",{onClick:()=>fI(P),onMouseEnter:r,className:`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${e.settings.darkMode?"bg-green-600 hover:bg-green-500 text-white":"bg-green-500 hover:bg-green-400 text-white"}`,children:[i.jsx(it,{className:"w-4 h-4"}),i.jsx("span",{children:o("addSubHeading")})]})]}),x.subHeadings.map((D,$)=>i.jsx("div",{className:`p-3 rounded-lg border ${e.settings.darkMode?"border-gray-500 bg-gray-600/30":"border-gray-200 bg-white/50"}`,children:i.jsxs("div",{className:"space-y-3",children:[i.jsxs("div",{className:"flex items-center justify-between",children:[i.jsxs("span",{className:`text-sm font-medium ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:["Alapealkirja ",$+1]}),i.jsx("button",{onClick:()=>vI(P,$),onMouseEnter:r,className:`p-1 rounded transition-all duration-300 ${e.settings.darkMode?"bg-red-600 hover:bg-red-500 text-white":"bg-red-500 hover:bg-red-400 text-white"}`,children:i.jsx(Xe,{className:"w-3 h-3"})})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[i.jsx("input",{type:"text",value:D.title,onChange:X=>p9(P,$,"title",X.target.value),placeholder:o("subHeadingTitle"),className:`md:col-span-2 p-2 rounded-lg border transition-all duration-300 ${e.settings.darkMode?"border-gray-500 bg-gray-600 text-white focus:border-blue-500":"border-gray-200 bg-white text-gray-900 focus:border-blue-500"} focus:outline-none`}),i.jsxs("select",{value:D.level,onChange:X=>p9(P,$,"level",parseInt(X.target.value)),className:`p-2 rounded-lg border transition-all duration-300 ${e.settings.darkMode?"border-gray-500 bg-gray-600 text-white focus:border-blue-500":"border-gray-200 bg-white text-gray-900 focus:border-blue-500"} focus:outline-none`,children:[i.jsx("option",{value:1,children:o("level1")}),i.jsx("option",{value:2,children:o("level2")}),i.jsx("option",{value:3,children:o("level3")})]})]}),i.jsx("textarea",{value:D.content,onChange:X=>p9(P,$,"content",X.target.value),placeholder:o("subHeadingContent"),rows:3,className:`w-full p-2 rounded-lg border transition-all duration-300 ${e.settings.darkMode?"border-gray-500 bg-gray-600 text-white focus:border-blue-500":"border-gray-200 bg-white text-gray-900 focus:border-blue-500"} focus:outline-none resize-none`}),jr(D.images,()=>bI(P,$),(X,te,ut)=>CI(P,$,X,te,ut),X=>SI(P,$,X),"Alapealkirja pildid")]})},D.id))]})]})},x.id))]}),jr(I,hI,yI,uI,o("chapterImages")),i.jsxs("button",{onClick:cI,disabled:!w||!p.trim(),onMouseEnter:r,className:`w-full flex items-center justify-center space-x-2 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${w&&p.trim()?e.settings.darkMode?"bg-green-600 hover:bg-green-500 text-white":"bg-green-500 hover:bg-green-400 text-white":e.settings.darkMode?"bg-gray-600 text-gray-400 cursor-not-allowed":"bg-gray-300 text-gray-500 cursor-not-allowed"} text-lg font-semibold shadow-lg`,children:[i.jsx(xt,{className:"w-6 h-6"}),i.jsx("span",{children:o("save")})]})]})]}),l==="exercise"&&i.jsxs("div",{className:`p-8 rounded-3xl ${e.settings.darkMode?"bg-gray-800/80 border border-gray-700":"bg-white/80 border border-white/20"} backdrop-blur-sm shadow-2xl`,children:[i.jsx("h2",{className:`text-2xl font-bold mb-6 ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:o("createExercise")}),i.jsxs("div",{className:"space-y-6",children:[i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[i.jsxs("div",{children:[i.jsx("label",{className:`block text-sm font-medium mb-2 ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:o("selectSubject")}),i.jsxs("select",{value:w,onChange:x=>{A(x.target.value),E("")},className:`w-full p-3 rounded-xl border-2 transition-all duration-300 ${e.settings.darkMode?"border-gray-600 bg-gray-700 text-white focus:border-blue-500":"border-gray-300 bg-white text-gray-900 focus:border-blue-500"} focus:outline-none`,children:[i.jsx("option",{value:"",children:o("selectSubject")}),e.customSubjects.map(x=>i.jsx("option",{value:x.id,children:x.name},x.id))]})]}),i.jsxs("div",{children:[i.jsx("label",{className:`block text-sm font-medium mb-2 ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:o("selectChapter")}),i.jsxs("select",{value:R,onChange:x=>E(x.target.value),disabled:!w,className:`w-full p-3 rounded-xl border-2 transition-all duration-300 ${e.settings.darkMode?"border-gray-600 bg-gray-700 text-white focus:border-blue-500":"border-gray-300 bg-white text-gray-900 focus:border-blue-500"} focus:outline-none disabled:opacity-50`,children:[i.jsx("option",{value:"",children:o("selectChapter")}),w&&zI(w).map(x=>i.jsx("option",{value:x.id,children:x.title},x.id))]})]})]}),i.jsxs("div",{children:[i.jsx("label",{className:`block text-sm font-medium mb-2 ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:o("exerciseQuestion")}),i.jsx("textarea",{value:_,onChange:x=>Ae(x.target.value),placeholder:"Kirjuta harjutuse küsimus...",rows:3,className:`w-full p-3 rounded-xl border-2 transition-all duration-300 ${e.settings.darkMode?"border-gray-600 bg-gray-700 text-white focus:border-blue-500":"border-gray-300 bg-white text-gray-900 focus:border-blue-500"} focus:outline-none resize-none`})]}),i.jsxs("div",{children:[i.jsx("label",{className:`block text-sm font-medium mb-2 ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:o("exerciseType")}),i.jsxs("select",{value:q,onChange:x=>U(x.target.value),className:`w-full p-3 rounded-xl border-2 transition-all duration-300 ${e.settings.darkMode?"border-gray-600 bg-gray-700 text-white focus:border-blue-500":"border-gray-300 bg-white text-gray-900 focus:border-blue-500"} focus:outline-none`,children:[i.jsx("option",{value:"multiple-choice",children:o("multipleChoice")}),i.jsx("option",{value:"fill-blank",children:o("fillBlank")})]})]}),q==="multiple-choice"&&i.jsxs("div",{children:[i.jsxs("div",{className:"flex items-center justify-between mb-4",children:[i.jsx("label",{className:`block text-sm font-medium ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:o("options")}),i.jsxs("button",{onClick:II,onMouseEnter:r,className:`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${e.settings.darkMode?"bg-blue-600 hover:bg-blue-500 text-white":"bg-blue-500 hover:bg-blue-400 text-white"}`,children:[i.jsx(it,{className:"w-4 h-4"}),i.jsx("span",{children:o("addOption")})]})]}),i.jsx("div",{className:"space-y-3",children:O.map((x,P)=>i.jsxs("div",{className:"flex items-center space-x-3",children:[i.jsx("input",{type:"text",value:x,onChange:D=>jI(P,D.target.value),placeholder:`Valik ${P+1}`,className:`flex-1 p-3 rounded-xl border-2 transition-all duration-300 ${e.settings.darkMode?"border-gray-600 bg-gray-700 text-white focus:border-blue-500":"border-gray-300 bg-white text-gray-900 focus:border-blue-500"} focus:outline-none`}),O.length>2&&i.jsx("button",{onClick:()=>HI(P),onMouseEnter:r,className:`p-3 rounded-xl transition-all duration-300 ${e.settings.darkMode?"bg-red-600 hover:bg-red-500 text-white":"bg-red-500 hover:bg-red-400 text-white"}`,children:i.jsx(Xe,{className:"w-5 h-5"})})]},P))})]}),i.jsxs("div",{children:[i.jsx("label",{className:`block text-sm font-medium mb-2 ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:o("correctAnswerLabel")}),q==="multiple-choice"?i.jsxs("select",{value:L,onChange:x=>F(x.target.value),className:`w-full p-3 rounded-xl border-2 transition-all duration-300 ${e.settings.darkMode?"border-gray-600 bg-gray-700 text-white focus:border-blue-500":"border-gray-300 bg-white text-gray-900 focus:border-blue-500"} focus:outline-none`,children:[i.jsx("option",{value:"",children:"Vali õige vastus"}),O.filter(x=>x.trim()).map((x,P)=>i.jsx("option",{value:x,children:x},P))]}):i.jsx("input",{type:"text",value:L,onChange:x=>F(x.target.value),placeholder:"Õige vastus",className:`w-full p-3 rounded-xl border-2 transition-all duration-300 ${e.settings.darkMode?"border-gray-600 bg-gray-700 text-white focus:border-blue-500":"border-gray-300 bg-white text-gray-900 focus:border-blue-500"} focus:outline-none`})]}),i.jsxs("div",{children:[i.jsx("label",{className:`block text-sm font-medium mb-2 ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:o("explanation")}),i.jsx("textarea",{value:B,onChange:x=>W(x.target.value),placeholder:"Selgita, miks see vastus on õige...",rows:3,className:`w-full p-3 rounded-xl border-2 transition-all duration-300 ${e.settings.darkMode?"border-gray-600 bg-gray-700 text-white focus:border-blue-500":"border-gray-300 bg-white text-gray-900 focus:border-blue-500"} focus:outline-none resize-none`})]}),jr(ke,pI,kI,gI,o("exerciseImages")),i.jsxs("button",{onClick:dI,disabled:!w||!R||!_.trim()||!L.trim(),onMouseEnter:r,className:`w-full flex items-center justify-center space-x-2 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${w&&R&&_.trim()&&L.trim()?e.settings.darkMode?"bg-green-600 hover:bg-green-500 text-white":"bg-green-500 hover:bg-green-400 text-white":e.settings.darkMode?"bg-gray-600 text-gray-400 cursor-not-allowed":"bg-gray-300 text-gray-500 cursor-not-allowed"} text-lg font-semibold shadow-lg`,children:[i.jsx(xt,{className:"w-6 h-6"}),i.jsx("span",{children:o("save")})]})]})]}),l==="heading"&&i.jsxs("div",{className:`p-8 rounded-3xl ${e.settings.darkMode?"bg-gray-800/80 border border-gray-700":"bg-white/80 border border-white/20"} backdrop-blur-sm shadow-2xl`,children:[i.jsx("h2",{className:`text-2xl font-bold mb-6 ${e.settings.darkMode?"text-white":"text-gray-900"}`,children:o("createBookHeading")}),i.jsxs("div",{className:"space-y-6",children:[i.jsxs("div",{children:[i.jsx("label",{className:`block text-sm font-medium mb-2 ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:o("selectSubject")}),i.jsxs("select",{value:w,onChange:x=>A(x.target.value),className:`w-full p-3 rounded-xl border-2 transition-all duration-300 ${e.settings.darkMode?"border-gray-600 bg-gray-700 text-white focus:border-blue-500":"border-gray-300 bg-white text-gray-900 focus:border-blue-500"} focus:outline-none`,children:[i.jsx("option",{value:"",children:o("selectSubject")}),e.customSubjects.map(x=>i.jsx("option",{value:x.id,children:x.name},x.id))]})]}),i.jsxs("div",{children:[i.jsx("label",{className:`block text-sm font-medium mb-2 ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:o("bookHeadingTitle")}),i.jsx("input",{type:"text",value:yt,onChange:x=>et(x.target.value),placeholder:"Nt. 1. peatükk - Sissejuhatus",className:`w-full p-3 rounded-xl border-2 transition-all duration-300 ${e.settings.darkMode?"border-gray-600 bg-gray-700 text-white focus:border-blue-500":"border-gray-300 bg-white text-gray-900 focus:border-blue-500"} focus:outline-none`})]}),i.jsxs("div",{children:[i.jsx("label",{className:`block text-sm font-medium mb-2 ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:o("bookHeadingContent")}),i.jsx("textarea",{value:Wt,onChange:x=>jL(x.target.value),placeholder:"Raamatu pealkirja kirjeldus või sissejuhatus...",rows:4,className:`w-full p-3 rounded-xl border-2 transition-all duration-300 ${e.settings.darkMode?"border-gray-600 bg-gray-700 text-white focus:border-blue-500":"border-gray-300 bg-white text-gray-900 focus:border-blue-500"} focus:outline-none resize-none`})]}),i.jsxs("button",{onClick:sI,disabled:!w||!yt.trim(),onMouseEnter:r,className:`w-full flex items-center justify-center space-x-2 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${w&&yt.trim()?e.settings.darkMode?"bg-green-600 hover:bg-green-500 text-white":"bg-green-500 hover:bg-green-400 text-white":e.settings.darkMode?"bg-gray-600 text-gray-400 cursor-not-allowed":"bg-gray-300 text-gray-500 cursor-not-allowed"} text-lg font-semibold shadow-lg`,children:[i.jsx(xt,{className:"w-6 h-6"}),i.jsx("span",{children:o("save")})]})]})]})]})]})})}function wz(){const{state:e}=Ee(),t=QM.getConnectionStatus(),a=QM.getPendingSyncCount(),r=()=>{switch(e.saveStatus.status){case"saving":return i.jsx(Zn,{className:"w-4 h-4 animate-spin text-blue-500"});case"saved":return i.jsx(st,{className:"w-4 h-4 text-green-500"});case"error":return i.jsx(va,{className:"w-4 h-4 text-red-500"});default:return null}},o=()=>e.saveStatus.status==="idle"?!t&&a>0?`${a} muudatust ootab sünkroniseerimist`:"":e.saveStatus.message;return e.saveStatus.status==="idle"&&t&&a===0?null:i.jsxs("div",{className:`fixed top-4 right-4 z-50 flex items-center space-x-2 px-4 py-2 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300 ${e.settings.darkMode?"bg-gray-800/90 border border-gray-700":"bg-white/90 border border-gray-200"}`,children:[i.jsx("div",{className:"flex items-center space-x-1",children:t?i.jsx(or,{className:"w-4 h-4 text-green-500"}):i.jsx(rr,{className:"w-4 h-4 text-red-500"})}),r()&&i.jsxs("div",{className:"flex items-center space-x-2",children:[r(),i.jsx("span",{className:`text-sm font-medium ${e.settings.darkMode?"text-gray-300":"text-gray-700"}`,children:o()})]}),!t&&i.jsx("span",{className:`text-xs ${e.settings.darkMode?"text-gray-400":"text-gray-500"}`,children:"Võrguühenduseta"})]})}function Lz(){const{state:e,dispatch:t}=Ee(),a=o=>{t({type:"SET_USER",payload:o})},r=()=>{switch(e.currentMode){case"home":return i.jsx(Bb,{});case"learn":return e.selectedSubject?i.jsx(mz,{}):i.jsx(Rb,{mode:"learn"});case"practice":return e.selectedSubject?i.jsx(xz,{}):i.jsx(Rb,{mode:"practice"});case"settings":return i.jsx(vz,{});case"add-content":return i.jsx(Mz,{});default:return i.jsx(Bb,{})}};return e.currentUser?e.isLoading?i.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center",children:i.jsxs("div",{className:"text-center",children:[i.jsx("div",{className:"w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"}),i.jsx("p",{className:"text-white text-lg",children:"Andmete laadimine..."})]})}):i.jsxs("div",{className:"font-sans antialiased",children:[i.jsx(wz,{}),r()]}):i.jsx(uz,{onLogin:a})}function bz(){return i.jsx(cz,{children:i.jsx(Lz,{})})}eI(document.getElementById("root")).render(i.jsx(T.StrictMode,{children:i.jsx(bz,{})}));
