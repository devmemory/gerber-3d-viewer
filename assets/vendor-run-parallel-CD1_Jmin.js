import{r as P}from"./vendor-queue-microtask-k88_duEE.js";/*! run-parallel. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */var o,h;function p(){if(h)return o;h=1,o=q;const d=P();function q(r,t){let u,i,f,a=!0;Array.isArray(r)?(u=[],i=r.length):(f=Object.keys(r),u={},i=f.length);function c(n){function e(){t&&t(n,u),t=null}a?d(e):e()}function s(n,e,l){u[n]=l,(--i===0||e)&&c(e)}i?f?f.forEach(function(n){r[n](function(e,l){s(n,e,l)})}):r.forEach(function(n,e){n(function(l,y){s(e,l,y)})}):c(null),a=!1}return o}export{p as r};
