import{c as n}from"./vendor-@tracespace-_ibhTgpc.js";var a,c;function f(){if(c)return a;c=1,a=i;function i(e,r){if(t("noDeprecation"))return e;var o=!1;function u(){if(!o){if(t("throwDeprecation"))throw new Error(r);t("traceDeprecation")?console.trace(r):console.warn(r),o=!0}return e.apply(this,arguments)}return u}function t(e){try{if(!n.localStorage)return!1}catch{return!1}var r=n.localStorage[e];return r==null?!1:String(r).toLowerCase()==="true"}return a}export{f as r};
