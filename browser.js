// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString,n=Object.prototype.hasOwnProperty;function i(e,r){return null!=e&&n.call(e,r)}var o="function"==typeof Symbol?Symbol:void 0,a="function"==typeof o?o.toStringTag:"",u=r()?function(e){var r,n,o;if(null==e)return t.call(e);n=e[a],r=i(e,a);try{e[a]=void 0}catch(r){return t.call(e)}return o=t.call(e),r?e[a]=n:delete e[a],o}:function(e){return t.call(e)},f=Array.isArray?Array.isArray:function(e){return"[object Array]"===u(e)},l="function"==typeof Float64Array,c="function"==typeof Float64Array?Float64Array:null,s="function"==typeof Float64Array?Float64Array:void 0,y=function(){var e,r,t;if("function"!=typeof c)return!1;try{r=new c([1,3.14,-3.14,NaN]),t=r,e=(l&&t instanceof Float64Array||"[object Float64Array]"===u(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?s:function(){throw new Error("not implemented")},h="function"==typeof Float32Array,p=Number.POSITIVE_INFINITY,g="function"==typeof Float32Array?Float32Array:null,m="function"==typeof Float32Array?Float32Array:void 0,w=function(){var e,r,t;if("function"!=typeof g)return!1;try{r=new g([1,3.14,-3.14,5e40]),t=r,e=(h&&t instanceof Float32Array||"[object Float32Array]"===u(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===p}catch(r){e=!1}return e}()?m:function(){throw new Error("not implemented")},b="function"==typeof Int16Array,d="function"==typeof Int16Array?Int16Array:null,v="function"==typeof Int16Array?Int16Array:void 0,E=function(){var e,r,t;if("function"!=typeof d)return!1;try{r=new d([1,3.14,-3.14,32768]),t=r,e=(b&&t instanceof Int16Array||"[object Int16Array]"===u(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?v:function(){throw new Error("not implemented")},A="function"==typeof Int32Array,T="function"==typeof Int32Array?Int32Array:null,_="function"==typeof Int32Array?Int32Array:void 0,x=function(){var e,r,t;if("function"!=typeof T)return!1;try{r=new T([1,3.14,-3.14,2147483648]),t=r,e=(A&&t instanceof Int32Array||"[object Int32Array]"===u(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?_:function(){throw new Error("not implemented")},j="function"==typeof Int8Array,k="function"==typeof Int8Array?Int8Array:null,V="function"==typeof Int8Array?Int8Array:void 0,L=function(){var e,r,t;if("function"!=typeof k)return!1;try{r=new k([1,3.14,-3.14,128]),t=r,e=(j&&t instanceof Int8Array||"[object Int8Array]"===u(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?V:function(){throw new Error("not implemented")},R="function"==typeof Uint16Array,S="function"==typeof Uint16Array?Uint16Array:null,B="function"==typeof Uint16Array?Uint16Array:void 0,I=function(){var e,r,t;if("function"!=typeof S)return!1;try{r=new S(r=[1,3.14,-3.14,65536,65537]),t=r,e=(R&&t instanceof Uint16Array||"[object Uint16Array]"===u(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?B:function(){throw new Error("not implemented")},C="function"==typeof Uint32Array,F="function"==typeof Uint32Array?Uint32Array:null,O="function"==typeof Uint32Array?Uint32Array:void 0,M=function(){var e,r,t;if("function"!=typeof F)return!1;try{r=new F(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(C&&t instanceof Uint32Array||"[object Uint32Array]"===u(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?O:function(){throw new Error("not implemented")},U="function"==typeof Uint8Array,N="function"==typeof Uint8Array?Uint8Array:null,P="function"==typeof Uint8Array?Uint8Array:void 0,Y=function(){var e,r,t;if("function"!=typeof N)return!1;try{r=new N(r=[1,3.14,-3.14,256,257]),t=r,e=(U&&t instanceof Uint8Array||"[object Uint8Array]"===u(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?P:function(){throw new Error("not implemented")},W="function"==typeof Uint8ClampedArray,$="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,G="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,Z=function(){var e,r,t;if("function"!=typeof $)return!1;try{r=new $([-1,0,1,3.14,4.99,255,256]),t=r,e=(W&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===u(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?G:function(){throw new Error("not implemented")},X="function"==typeof Object.defineProperty?Object.defineProperty:null,J=Object.defineProperty;function z(e){return"number"==typeof e}function q(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function D(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+q(i):q(i)+e,n&&(e="-"+e)),e}var H=String.prototype.toLowerCase,K=String.prototype.toUpperCase;function Q(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!z(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=D(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=D(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===K.call(e.specifier)?K.call(t):H.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function ee(e){return"string"==typeof e}var re=Math.abs,te=String.prototype.toLowerCase,ne=String.prototype.toUpperCase,ie=String.prototype.replace,oe=/e\+(\d)$/,ae=/e-(\d)$/,ue=/^(\d+)$/,fe=/^(\d+)e/,le=/\.0$/,ce=/\.0*e/,se=/(\..*[^0])0*e/;function ye(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!z(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":re(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=ie.call(t,se,"$1e"),t=ie.call(t,ce,"e"),t=ie.call(t,le,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=ie.call(t,oe,"e+0$1"),t=ie.call(t,ae,"e-0$1"),e.alternate&&(t=ie.call(t,ue,"$1."),t=ie.call(t,fe,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===ne.call(e.specifier)?ne.call(t):te.call(t)}function he(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function pe(e,r,t){var n=r-e.length;return n<0?e:e=t?e+he(n):he(n)+e}var ge=String.fromCharCode,me=isNaN,we=Array.isArray;function be(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function de(e){var r,t,n,i,o,a,u,f,l;if(!we(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",u=1,f=0;f<e.length;f++)if(ee(n=e[f]))a+=n;else{if(r=void 0!==n.precision,!(n=be(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,me(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,me(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=Q(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!me(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=me(o)?String(n.arg):ge(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=ye(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=D(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=pe(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var ve=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ee(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ae(e){var r,t,n,i;for(t=[],i=0,n=ve.exec(e);n;)(r=e.slice(i,ve.lastIndex-n[0].length)).length&&t.push(r),t.push(Ee(n)),i=ve.lastIndex,n=ve.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function Te(e){return"string"==typeof e}function _e(e){var r,t,n;if(!Te(e))throw new TypeError(_e("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Ae(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return de.apply(null,t)}var xe,je=Object.prototype,ke=je.toString,Ve=je.__defineGetter__,Le=je.__defineSetter__,Re=je.__lookupGetter__,Se=je.__lookupSetter__;xe=function(){try{return X({},"x",{}),!0}catch(e){return!1}}()?J:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===ke.call(e))throw new TypeError(_e("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===ke.call(t))throw new TypeError(_e("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Re.call(e,r)||Se.call(e,r)?(n=e.__proto__,e.__proto__=je,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Ve&&Ve.call(e,r,t.get),a&&Le&&Le.call(e,r,t.set),e};var Be=xe;function Ie(e,r,t){Be(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Ce(e){return"number"==typeof e}var Fe=Number,Oe=Fe.prototype.toString,Me=r();function Ue(e){return"object"==typeof e&&(e instanceof Fe||(Me?function(e){try{return Oe.call(e),!0}catch(e){return!1}}(e):"[object Number]"===u(e)))}function Ne(e){return Ce(e)||Ue(e)}Ie(Ne,"isPrimitive",Ce),Ie(Ne,"isObject",Ue);var Pe=Fe.NEGATIVE_INFINITY,Ye=Math.floor;function We(e){return Ye(e)===e}function $e(e){return e<p&&e>Pe&&We(e)}function Ge(e){return Ce(e)&&$e(e)}function Ze(e){return Ue(e)&&$e(e.valueOf())}function Xe(e){return Ge(e)||Ze(e)}function Je(e){return Ge(e)&&e>=0}function ze(e){return Ze(e)&&e.valueOf()>=0}function qe(e){return Je(e)||ze(e)}function De(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&We(e.length)&&e.length>=0&&e.length<=4294967295}function He(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&We(e.length)&&e.length>=0&&e.length<=9007199254740991}Ie(Xe,"isPrimitive",Ge),Ie(Xe,"isObject",Ze),Ie(qe,"isPrimitive",Je),Ie(qe,"isObject",ze);var Ke="function"==typeof ArrayBuffer;function Qe(e){return Ke&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===u(e)}function er(e){return"object"==typeof e&&null!==e&&!f(e)}var rr=/./;function tr(e){return"boolean"==typeof e}var nr=Boolean,ir=Boolean.prototype.toString,or=r();function ar(e){return"object"==typeof e&&(e instanceof nr||(or?function(e){try{return ir.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===u(e)))}function ur(e){return tr(e)||ar(e)}function fr(){return new Function("return this;")()}Ie(ur,"isPrimitive",tr),Ie(ur,"isObject",ar);var lr="object"==typeof self?self:null,cr="object"==typeof window?window:null,sr="object"==typeof globalThis?globalThis:null,yr=function(e){if(arguments.length){if(!tr(e))throw new TypeError(_e("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return fr()}if(sr)return sr;if(lr)return lr;if(cr)return cr;throw new Error("unexpected error. Unable to resolve global object.")}(),hr=yr.document&&yr.document.childNodes,pr=Int8Array;function gr(){return/^\s*function\s*([^(]*)/i}var mr=/^\s*function\s*([^(]*)/i;function wr(e){return null!==e&&"object"==typeof e}function br(e){var r,t,n,i;if(("Object"===(t=u(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=mr.exec(n.toString()))return r[1]}return wr(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}Ie(gr,"REGEXP",mr),Ie(wr,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(_e("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!f(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(wr));var dr="function"==typeof rr||"object"==typeof pr||"function"==typeof hr?function(e){return br(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?br(e).toLowerCase():r};function vr(e){return"function"===dr(e)}function Er(e,r){if(!(this instanceof Er))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Ce(e))throw new TypeError(_e("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Ce(r))throw new TypeError(_e("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return Be(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),Be(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}Ie(Er,"BYTES_PER_ELEMENT",8),Ie(Er.prototype,"BYTES_PER_ELEMENT",8),Ie(Er.prototype,"byteLength",16),Ie(Er.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Ie(Er.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var Ar="function"==typeof Math.fround?Math.fround:null,Tr=new w(1),_r="function"==typeof Ar?Ar:function(e){return Tr[0]=e,Tr[0]};function xr(e,r){if(!(this instanceof xr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Ce(e))throw new TypeError(_e("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Ce(r))throw new TypeError(_e("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return Be(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:_r(e)}),Be(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:_r(r)}),this}function jr(e){return e instanceof Er||e instanceof xr||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function kr(e){return We(e/2)}function Vr(){return"function"==typeof o&&"symbol"==typeof o("foo")&&i(o,"iterator")&&"symbol"==typeof o.iterator}Ie(xr,"BYTES_PER_ELEMENT",4),Ie(xr.prototype,"BYTES_PER_ELEMENT",4),Ie(xr.prototype,"byteLength",8),Ie(xr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Ie(xr.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var Lr=Vr()?Symbol.iterator:null;function Rr(e,r,t){Be(e,r,{configurable:!1,enumerable:!1,get:t})}function Sr(e){return e.re}function Br(e){return e.im}function Ir(e,r){return new w(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function Cr(e,r){return new y(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}var Fr={float64:function(e,r){return e[r]},float32:function(e,r){return e[r]},int32:function(e,r){return e[r]},int16:function(e,r){return e[r]},int8:function(e,r){return e[r]},uint32:function(e,r){return e[r]},uint16:function(e,r){return e[r]},uint8:function(e,r){return e[r]},uint8c:function(e,r){return e[r]},generic:function(e,r){return e[r]},default:function(e,r){return e[r]}};function Or(e){var r=Fr[e];return"function"==typeof r?r:Fr.default}var Mr={complex128:function(e,r){return e.get(r)},complex64:function(e,r){return e.get(r)},default:function(e,r){return e.get(r)}};function Ur(e){var r=Mr[e];return"function"==typeof r?r:Mr.default}function Nr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(De(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!jr(n))return new TypeError(_e("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(Sr(n),Br(n))}return r}function Pr(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,De(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!jr(o))return new TypeError(_e("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Sr(o),Br(o))}return n}function Yr(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!jr(n=r[i]))return null;e[o]=Sr(n),e[o+1]=Br(n),o+=2}return e}var Wr=2*w.BYTES_PER_ELEMENT,$r=Vr();function Gr(e){return e instanceof zr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function Zr(e){return e===zr||"Complex128Array"===e.name}function Xr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Wr}function Jr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*Wr}function zr(){var e,r,t,n;if(r=arguments.length,!(this instanceof zr))return 0===r?new zr:1===r?new zr(arguments[0]):2===r?new zr(arguments[0],arguments[1]):new zr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new w(0);else if(1===r)if(Je(arguments[0]))t=new w(2*arguments[0]);else if(He(arguments[0]))if((n=(t=arguments[0]).length)&&f(t)&&jr(t[0])){if(null===(t=Yr(new w(2*n),t))){if(!kr(n))throw new RangeError(_e("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new w(arguments[0])}}else{if(Xr(t))t=Ir(t,0);else if(Jr(t))t=Cr(t,0);else if(!kr(n))throw new RangeError(_e("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new w(t)}else if(Qe(arguments[0])){if(!We((t=arguments[0]).byteLength/Wr))throw new RangeError(_e("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Wr,t.byteLength));t=new w(t)}else{if(!er(arguments[0]))throw new TypeError(_e("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===$r)throw new TypeError(_e("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!vr(t[Lr]))throw new TypeError(_e("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!vr((t=t[Lr]()).next))throw new TypeError(_e("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=Nr(t))instanceof Error)throw t;t=new w(t)}else{if(!Qe(t=arguments[0]))throw new TypeError(_e("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!Je(e=arguments[1]))throw new TypeError(_e("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!We(e/Wr))throw new RangeError(_e("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Wr,e));if(2===r){if(!We((n=t.byteLength-e)/Wr))throw new RangeError(_e("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Wr,n));t=new w(t,e)}else{if(!Je(n=arguments[2]))throw new TypeError(_e("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*Wr>t.byteLength-e)throw new RangeError(_e("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*Wr));t=new w(t,e,2*n)}}return Ie(this,"_buffer",t),Ie(this,"_length",t.length/2),this}function qr(e){return e.re}function Dr(e){return e.im}function Hr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(De(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!jr(n))return new TypeError(_e("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(qr(n),Dr(n))}return r}function Kr(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,De(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!jr(o))return new TypeError(_e("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(qr(o),Dr(o))}return n}function Qr(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!jr(n=r[i]))return null;e[o]=qr(n),e[o+1]=Dr(n),o+=2}return e}Ie(zr,"BYTES_PER_ELEMENT",Wr),Ie(zr,"name","Complex64Array"),Ie(zr,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,y;if(!vr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Zr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!vr(n=arguments[1]))throw new TypeError(_e("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(Gr(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(jr(c=n.call(r,e.get(s),s)))o[y]=Sr(c),o[y+1]=Br(c);else{if(!(De(c)&&c.length>=2))throw new TypeError(_e("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(He(e)){if(n){for(f=e.length,u=e.get&&e.set?Ur("default"):Or("default"),s=0;s<f;s++)if(!jr(u(e,s))){l=!0;break}if(l){if(!kr(f))throw new RangeError(_e("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(jr(c=n.call(r,u(e,s),s)))o[y]=Sr(c),o[y+1]=Br(c);else{if(!(De(c)&&c.length>=2))throw new TypeError(_e("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(er(e)&&$r&&vr(e[Lr])){if(!vr((o=e[Lr]()).next))throw new TypeError(_e("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?Pr(o,n,r):Nr(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(_e("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),Ie(zr,"of",(function(){var e,r;if(!vr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Zr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Rr(zr.prototype,"buffer",(function(){return this._buffer.buffer})),Rr(zr.prototype,"byteLength",(function(){return this._buffer.byteLength})),Rr(zr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Ie(zr.prototype,"BYTES_PER_ELEMENT",zr.BYTES_PER_ELEMENT),Ie(zr.prototype,"copyWithin",(function(e,r){if(!Gr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),Ie(zr.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!Gr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,Ie(t={},"next",(function(){var r;return o+=1,i||o>=n?{done:!0}:(r=new xr(e[a+=2],e[a+1]),{value:[o,r],done:!1})})),Ie(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),Lr&&Ie(t,Lr,(function(){return r.entries()})),t})),Ie(zr.prototype,"get",(function(e){var r;if(!Gr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Je(e))throw new TypeError(_e("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new xr((r=this._buffer)[e*=2],r[e+1])})),Rr(zr.prototype,"length",(function(){return this._length})),Ie(zr.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!Gr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Je(t=arguments[1]))throw new TypeError(_e("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(jr(e)){if(t>=this._length)throw new RangeError(_e("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Sr(e),void(n[t+1]=Br(e))}if(Gr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*Wr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new w(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!He(e))throw new TypeError(_e("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!jr(e[f])){o=!0;break}if(o){if(!kr(a))throw new RangeError(_e("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*Wr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new w(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Sr(u),n[t+1]=Br(u),t+=2}}));var et=2*y.BYTES_PER_ELEMENT,rt=Vr();function tt(e){return e instanceof at||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function nt(e){return e===at||"Complex64Array"===e.name}function it(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===et/2}function ot(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===et}function at(){var e,r,t,n;if(r=arguments.length,!(this instanceof at))return 0===r?new at:1===r?new at(arguments[0]):2===r?new at(arguments[0],arguments[1]):new at(arguments[0],arguments[1],arguments[2]);if(0===r)t=new y(0);else if(1===r)if(Je(arguments[0]))t=new y(2*arguments[0]);else if(He(arguments[0]))if((n=(t=arguments[0]).length)&&f(t)&&jr(t[0])){if(null===(t=Qr(new y(2*n),t))){if(!kr(n))throw new RangeError(_e("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new y(arguments[0])}}else{if(it(t))t=Ir(t,0);else if(ot(t))t=Cr(t,0);else if(!kr(n))throw new RangeError(_e("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new y(t)}else if(Qe(arguments[0])){if(!We((t=arguments[0]).byteLength/et))throw new RangeError(_e("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",et,t.byteLength));t=new y(t)}else{if(!er(arguments[0]))throw new TypeError(_e("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===rt)throw new TypeError(_e("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!vr(t[Lr]))throw new TypeError(_e("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!vr((t=t[Lr]()).next))throw new TypeError(_e("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=Hr(t))instanceof Error)throw t;t=new y(t)}else{if(!Qe(t=arguments[0]))throw new TypeError(_e("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!Je(e=arguments[1]))throw new TypeError(_e("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!We(e/et))throw new RangeError(_e("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",et,e));if(2===r){if(!We((n=t.byteLength-e)/et))throw new RangeError(_e("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",et,n));t=new y(t,e)}else{if(!Je(n=arguments[2]))throw new TypeError(_e("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*et>t.byteLength-e)throw new RangeError(_e("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*et));t=new y(t,e,2*n)}}return Ie(this,"_buffer",t),Ie(this,"_length",t.length/2),this}Ie(at,"BYTES_PER_ELEMENT",et),Ie(at,"name","Complex128Array"),Ie(at,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,y;if(!vr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!nt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!vr(n=arguments[1]))throw new TypeError(_e("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(tt(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(jr(c=n.call(r,e.get(s),s)))o[y]=qr(c),o[y+1]=Dr(c);else{if(!(De(c)&&c.length>=2))throw new TypeError(_e("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(He(e)){if(n){for(f=e.length,u=e.get&&e.set?Ur("default"):Or("default"),s=0;s<f;s++)if(!jr(u(e,s))){l=!0;break}if(l){if(!kr(f))throw new RangeError(_e("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(jr(c=n.call(r,u(e,s),s)))o[y]=qr(c),o[y+1]=Dr(c);else{if(!(De(c)&&c.length>=2))throw new TypeError(_e("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(er(e)&&rt&&vr(e[Lr])){if(!vr((o=e[Lr]()).next))throw new TypeError(_e("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?Kr(o,n,r):Hr(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(_e("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),Ie(at,"of",(function(){var e,r;if(!vr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!nt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Rr(at.prototype,"buffer",(function(){return this._buffer.buffer})),Rr(at.prototype,"byteLength",(function(){return this._buffer.byteLength})),Rr(at.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Ie(at.prototype,"BYTES_PER_ELEMENT",at.BYTES_PER_ELEMENT),Ie(at.prototype,"copyWithin",(function(e,r){if(!tt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),Ie(at.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!tt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,Ie(t={},"next",(function(){var r;return o+=1,i||o>=n?{done:!0}:(r=new Er(e[a+=2],e[a+1]),{value:[o,r],done:!1})})),Ie(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),Lr&&Ie(t,Lr,(function(){return r.entries()})),t})),Ie(at.prototype,"get",(function(e){var r;if(!tt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Je(e))throw new TypeError(_e("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Er((r=this._buffer)[e*=2],r[e+1])})),Rr(at.prototype,"length",(function(){return this._length})),Ie(at.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!tt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Je(t=arguments[1]))throw new TypeError(_e("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(jr(e)){if(t>=this._length)throw new RangeError(_e("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=qr(e),void(n[t+1]=Dr(e))}if(tt(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*et,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new y(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!He(e))throw new TypeError(_e("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!jr(e[f])){o=!0;break}if(o){if(!kr(a))throw new RangeError(_e("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*et,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new y(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=qr(u),n[t+1]=Dr(u),t+=2}}));var ut={Float64Array:y,Float32Array:w,Int32Array:x,Uint32Array:M,Int16Array:E,Uint16Array:I,Int8Array:L,Uint8Array:Y,Uint8ClampedArray:Z,Complex64Array:zr,Complex128Array:at};return function(e,r){var t;return r&&r.type&&f(r.data)&&(t=ut[r.type])?new t(r.data):r}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).reviveTypedArray=r();
//# sourceMappingURL=browser.js.map
