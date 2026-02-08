"use strict";var a=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var t=a(function(E,u){
var f=require('@stdlib/math-base-special-sinpif/dist'),s=require('@stdlib/math-base-assert-is-nanf/dist'),v=require('@stdlib/math-base-assert-is-infinitef/dist'),e=require('@stdlib/number-float64-base-to-float32/dist'),q=require('@stdlib/constants-float32-pi/dist'),c=e(1),n=e(0);function o(r){return r=e(r),s(r)?NaN:v(r)?n:r===n?c:e(f(r)/e(q*r))}u.exports=o
});var p=t();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
