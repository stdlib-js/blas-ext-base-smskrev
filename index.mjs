// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.1-esm/index.mjs";function t(r,e,t,n,s,d,i){var o,f,a,m,l,u,p;if(r<=0)return e;for(f=0,m=n,l=n+(o=r-1)*t,u=i,p=i+o*d;f<o;){for(;f<o&&0!==s[u];)f+=1,m+=t,u+=d;for(;o>f&&0!==s[p];)o-=1,l-=t,p-=d;if(f>=o)break;a=e[m],e[m]=e[l],e[l]=a,f+=1,m+=t,u+=d,o-=1,l-=t,p-=d}return e}function n(r,n,s,d,i){return t(r,n,s,e(r,s),d,i,e(r,i))}r(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
