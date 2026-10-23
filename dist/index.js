"use strict";var l=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var p=l(function(I,f){
function E(a,r,e,o,n,i,q){var v,u,y,t,m,s,c;if(a<=0)return r;for(u=0,v=a-1,t=o,m=o+v*e,s=q,c=q+v*i;u<v;){for(;u<v&&n[s]!==0;)u+=1,t+=e,s+=i;for(;v>u&&n[c]!==0;)v-=1,m-=e,c-=i;if(u>=v)break;y=r[t],r[t]=r[m],r[m]=y,u+=1,t+=e,s+=i,v-=1,m-=e,c-=i}return r}f.exports=E
});var x=l(function(J,w){
var h=require('@stdlib/strided-base-stride2offset/dist'),O=p();function z(a,r,e,o,n){var i=h(a,e),q=h(a,n);return O(a,r,e,i,o,n,q)}w.exports=z
});var b=l(function(K,_){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=x(),B=p();A(R,"ndarray",B);_.exports=R
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=b(),j,g=D(C(__dirname,"./native.js"));F(g)?j=G:j=g;module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
