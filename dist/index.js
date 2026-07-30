"use strict";var f=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var t=f(function(I,u){
var s=require('@stdlib/math-base-special-sinpif/dist'),v=require('@stdlib/math-base-assert-is-nanf/dist'),q=require('@stdlib/math-base-assert-is-infinitef/dist'),i=require('@stdlib/number-float64-base-to-float32/dist'),c=require('@stdlib/constants-float32-pi/dist'),o=i(1),n=i(0);function p(r){return r=i(r),v(r)?NaN:q(r)?n:r===n?o:i(s(r)/i(c*r))}u.exports=p
});var N=t();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
