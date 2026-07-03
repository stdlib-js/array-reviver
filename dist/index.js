"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var y=t(function(T,i){
var o=require('@stdlib/array-float64/dist'),u=require('@stdlib/array-float32/dist'),q=require('@stdlib/array-float16/dist'),v=require('@stdlib/array-int16/dist'),p=require('@stdlib/array-int32/dist'),s=require('@stdlib/array-int8/dist'),l=require('@stdlib/array-uint16/dist'),U=require('@stdlib/array-uint32/dist'),c=require('@stdlib/array-uint8/dist'),m=require('@stdlib/array-uint8c/dist'),x=require('@stdlib/array-complex64/dist'),C=require('@stdlib/array-complex128/dist'),F=require('@stdlib/array-bool/dist'),I={Float64Array:o,Float32Array:u,Float16Array:q,Int32Array:p,Uint32Array:U,Int16Array:v,Uint16Array:l,Int8Array:s,Uint8Array:c,Uint8ClampedArray:m,Complex64Array:x,Complex128Array:C,BooleanArray:F};i.exports=I
});var n=t(function(b,A){
var d=require('@stdlib/assert-is-array/dist'),f=y();function B(e,r){var a;return r&&r.type&&d(r.data)&&(a=f[r.type],a)?new a(r.data):r}A.exports=B
});var k=n();module.exports=k;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
