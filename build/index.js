module.exports=function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var t={};return r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,r,t){Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:t})},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=4)}([function(e,r){e.exports=require("es6-promisify")},function(e,r){e.exports=require("jsonwebtoken")},function(e,r){e.exports=require("koa-unless")},function(e,r){e.exports=require("util")},function(e,r,t){"use strict";function n(e){return function(){var r=e.apply(this,arguments);return new Promise(function(e,t){function n(o,i){try{var u=r[o](i),s=u.value}catch(e){return void t(e)}return u.done?void e(s):Promise.resolve(s).then(function(e){return n("next",e)},function(e){return n("throw",e)})}return n("next")})}}var o=t(1),i=o&&o.__esModule?function(){return o.default}:function(){return o};t.d(i,"a",i);var u=t(2),s=u&&u.__esModule?function(){return u.default}:function(){return u};t.d(s,"a",s);var c=t(3),f=c&&c.__esModule?function(){return c.default}:function(){return c};t.d(f,"a",f);var a=t(0),d=a&&a.__esModule?function(){return a.default}:function(){return a};t.d(d,"a",d);const l=d()(o.verify,i.a);t.o(o,"verify")&&t.d(r,"verify",function(){return o.verify}),t.o(o,"decode")&&t.d(r,"decode",function(){return o.decode}),t.o(o,"sign")&&t.d(r,"sign",function(){return o.sign});const h=!0;r.__esModule=h,r.default=((e={})=>{if(!e.secret)throw new Error("secret must be specified");if(!e.extractToken||!t.i(c.isFunction)(e.extractToken))throw new Error("token extraction strategy must be specified and should be a function");if(e.checkRevoked&&!t.i(c.isFunction)(e.checkRevoked))throw new Error("token revokation check must be a function");if(e.doRefresh&&!t.i(c.isFunction)(e.doRefresh))throw new Error("token refresh strategy must be specified and should be a function");const{secret,key="user",extractToken,checkRevoked=false,doRefresh=false}=e,r=(()=>{var r=n(function*(r,t){try{const n=extractToken(r,e),o=yield l(n,secret,e);checkRevoked&&(yield checkRevoked(o,e)),r.state=r.state||{},r.state[key]=o,yield t()}catch(n){if("jwt expired"===n.message&&doRefresh)try{const n=p(r,e,!0),o=extractToken(r,e),i=yield l(o,secret,{ignoreExpiration:!0});yield doRefresh(r,e,n,i),r.state=r.state||{},r.state[key]=i,yield t()}catch(e){r.throw(401,`Invalid token - ${e.message}`)}else r.throw(401,`Invalid token - ${n.message}`)}});return function(e,t){return r.apply(this,arguments)}})();return r.unless=s.a,r});const p=(e,r,t=false)=>{if(t){if(r.refreshCookie&&e.cookies.get(r.refreshCookie))return e.cookies.get(r.refreshCookie);throw new Error(`the refresh cookie was not found
`)}if(r.cookie&&e.cookies.get(r.cookie))return e.cookies.get(r.cookie);throw new Error(`the specified cookie was not found
`)};r.fromCookies=p;const w=(e,r)=>{if(!e.header||!e.header.authorization)throw new Error(`can't find authorization header`);const t=e.header.authorization.split(" ");if(2===t.length){const e=t[0],r=t[1];if(/^Bearer$/i.test(e))return r;throw new Error(`Bad Authorization header format. Format is "Authorization: Bearer token"
`)}throw new Error(`Bad Authorization header format. Format is "Authorization: Bearer token"
`)};r.fromAuthorizationHeader=w}]);
//# sourceMappingURL=./build/index.js.map