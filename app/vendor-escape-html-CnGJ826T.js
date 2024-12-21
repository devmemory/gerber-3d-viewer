/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var c,i;function v(){if(i)return c;i=1;var u=/["'&<>]/;c=l;function l(m){var a=""+m,n=u.exec(a);if(!n)return a;var r,s="",e=0,t=0;for(e=n.index;e<a.length;e++){switch(a.charCodeAt(e)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 39:r="&#39;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}t!==e&&(s+=a.substring(t,e)),t=e+1,s+=r}return t!==e?s+a.substring(t,e):s}return c}export{v as r};
