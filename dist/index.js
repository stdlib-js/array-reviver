"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var y=t(function(w,i){
var o=require('@stdlib/array-float64/dist'),u=require('@stdlib/array-float32/dist'),q=require('@stdlib/array-int16/dist'),v=require('@stdlib/array-int32/dist'),p=require('@stdlib/array-int8/dist'),s=require('@stdlib/array-uint16/dist'),U=require('@stdlib/array-uint32/dist'),c=require('@stdlib/array-uint8/dist'),m=require('@stdlib/array-uint8c/dist'),x=require('@stdlib/array-complex64/dist'),C=require('@stdlib/array-complex128/dist'),I={Float64Array:o,Float32Array:u,Int32Array:v,Uint32Array:U,Int16Array:q,Uint16Array:s,Int8Array:p,Uint8Array:c,Uint8ClampedArray:m,Complex64Array:x,Complex128Array:C};i.exports=I
});var n=t(function(T,A){
var d=require('@stdlib/assert-is-array/dist'),l=y();function F(e,r){var a;return r&&r.type&&d(r.data)&&(a=l[r.type],a)?new a(r.data):r}A.exports=F
});var f=n();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
