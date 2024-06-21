// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int16@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int8@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint16@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8c@v0.2.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-bool@v0.0.1-esm/index.mjs";var v={Float64Array:t,Float32Array:s,Int32Array:i,Uint32Array:d,Int16Array:e,Uint16Array:m,Int8Array:n,Uint8Array:a,Uint8ClampedArray:o,Complex64Array:j,Complex128Array:l,BooleanArray:p};function y(t,s){var e;return s&&s.type&&r(s.data)&&(e=v[s.type])?new e(s.data):s}export{y as default};
//# sourceMappingURL=index.mjs.map
