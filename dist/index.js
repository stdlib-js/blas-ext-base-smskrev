"use strict";var l=function(v,r){return function(){return r||v((r={exports:{}}).exports,r),r.exports}};var p=l(function(I,f){
function E(v,r,a,o,n,i,q){var e,u,y,t,m,s,c;if(v<=0)return r;for(u=0,e=v-1,t=o,m=o+e*a,s=q,c=q+e*i;u<e;){for(;u<e&&n[s]!==0;)u+=1,t+=a,s+=i;for(;e>u&&n[c]!==0;)e-=1,m-=a,c-=i;if(u>=e)break;y=r[t],r[t]=r[m],r[m]=y,u+=1,t+=a,s+=i,e-=1,m-=a,c-=i}return r}f.exports=E
});var x=l(function(J,w){
var h=require('@stdlib/strided-base-stride2offset/dist'),O=p();function z(v,r,a,o,n){var i=h(v,a),q=h(v,n);return O(v,r,a,i,o,n,q)}w.exports=z
});var b=l(function(K,_){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=x(),B=p();A(R,"ndarray",B);_.exports=R
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=b(),j,g=D(C(__dirname,"./native.js"));F(g)?j=G:j=g;module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
