import{a as tr,c as ie}from"./vendor-@tracespace-_ibhTgpc.js";import{r as Ke}from"./vendor-events-DQ172AOg.js";import{r as Oe}from"./vendor-buffer-Be-il6ZS.js";import{r as X}from"./vendor-inherits-BICa84dG.js";import{r as ir}from"./vendor-util-deprecate-B2OF2CkE.js";import{r as De}from"./vendor-string_decoder-DZPR7MxD.js";var te={exports:{}},ce,Ne;function $e(){return Ne||(Ne=1,ce=Ke().EventEmitter),ce}const nr={},ar=Object.freeze(Object.defineProperty({__proto__:null,default:nr},Symbol.toStringTag,{value:"Module"})),ze=tr(ar);var pe,qe;function fr(){if(qe)return pe;qe=1;function A(p,y){var s=Object.keys(p);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(p);y&&(c=c.filter(function(E){return Object.getOwnPropertyDescriptor(p,E).enumerable})),s.push.apply(s,c)}return s}function w(p){for(var y=1;y<arguments.length;y++){var s=arguments[y]!=null?arguments[y]:{};y%2?A(Object(s),!0).forEach(function(c){S(p,c,s[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(p,Object.getOwnPropertyDescriptors(s)):A(Object(s)).forEach(function(c){Object.defineProperty(p,c,Object.getOwnPropertyDescriptor(s,c))})}return p}function S(p,y,s){return y=h(y),y in p?Object.defineProperty(p,y,{value:s,enumerable:!0,configurable:!0,writable:!0}):p[y]=s,p}function j(p,y){if(!(p instanceof y))throw new TypeError("Cannot call a class as a function")}function q(p,y){for(var s=0;s<y.length;s++){var c=y[s];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(p,h(c.key),c)}}function l(p,y,s){return q(p.prototype,y),Object.defineProperty(p,"prototype",{writable:!1}),p}function h(p){var y=a(p,"string");return typeof y=="symbol"?y:String(y)}function a(p,y){if(typeof p!="object"||p===null)return p;var s=p[Symbol.toPrimitive];if(s!==void 0){var c=s.call(p,y);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(p)}var n=Oe(),u=n.Buffer,g=ze,b=g.inspect,d=b&&b.custom||"inspect";function M(p,y,s){u.prototype.copy.call(p,y,s)}return pe=function(){function p(){j(this,p),this.head=null,this.tail=null,this.length=0}return l(p,[{key:"push",value:function(s){var c={data:s,next:null};this.length>0?this.tail.next=c:this.head=c,this.tail=c,++this.length}},{key:"unshift",value:function(s){var c={data:s,next:this.head};this.length===0&&(this.tail=c),this.head=c,++this.length}},{key:"shift",value:function(){if(this.length!==0){var s=this.head.data;return this.length===1?this.head=this.tail=null:this.head=this.head.next,--this.length,s}}},{key:"clear",value:function(){this.head=this.tail=null,this.length=0}},{key:"join",value:function(s){if(this.length===0)return"";for(var c=this.head,E=""+c.data;c=c.next;)E+=s+c.data;return E}},{key:"concat",value:function(s){if(this.length===0)return u.alloc(0);for(var c=u.allocUnsafe(s>>>0),E=this.head,R=0;E;)M(E.data,c,R),R+=E.data.length,E=E.next;return c}},{key:"consume",value:function(s,c){var E;return s<this.head.data.length?(E=this.head.data.slice(0,s),this.head.data=this.head.data.slice(s)):s===this.head.data.length?E=this.shift():E=c?this._getString(s):this._getBuffer(s),E}},{key:"first",value:function(){return this.head.data}},{key:"_getString",value:function(s){var c=this.head,E=1,R=c.data;for(s-=R.length;c=c.next;){var v=c.data,T=s>v.length?v.length:s;if(T===v.length?R+=v:R+=v.slice(0,s),s-=T,s===0){T===v.length?(++E,c.next?this.head=c.next:this.head=this.tail=null):(this.head=c,c.data=v.slice(T));break}++E}return this.length-=E,R}},{key:"_getBuffer",value:function(s){var c=u.allocUnsafe(s),E=this.head,R=1;for(E.data.copy(c),s-=E.data.length;E=E.next;){var v=E.data,T=s>v.length?v.length:s;if(v.copy(c,c.length-s,0,T),s-=T,s===0){T===v.length?(++R,E.next?this.head=E.next:this.head=this.tail=null):(this.head=E,E.data=v.slice(T));break}++R}return this.length-=R,c}},{key:d,value:function(s,c){return b(this,w(w({},c),{},{depth:0,customInspect:!1}))}}]),p}(),pe}var be,je;function Xe(){if(je)return be;je=1;function A(h,a){var n=this,u=this._readableState&&this._readableState.destroyed,g=this._writableState&&this._writableState.destroyed;return u||g?(a?a(h):h&&(this._writableState?this._writableState.errorEmitted||(this._writableState.errorEmitted=!0,process.nextTick(q,this,h)):process.nextTick(q,this,h)),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(h||null,function(b){!a&&b?n._writableState?n._writableState.errorEmitted?process.nextTick(S,n):(n._writableState.errorEmitted=!0,process.nextTick(w,n,b)):process.nextTick(w,n,b):a?(process.nextTick(S,n),a(b)):process.nextTick(S,n)}),this)}function w(h,a){q(h,a),S(h)}function S(h){h._writableState&&!h._writableState.emitClose||h._readableState&&!h._readableState.emitClose||h.emit("close")}function j(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finalCalled=!1,this._writableState.prefinished=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)}function q(h,a){h.emit("error",a)}function l(h,a){var n=h._readableState,u=h._writableState;n&&n.autoDestroy||u&&u.autoDestroy?h.destroy(a):h.emit("error",a)}return be={destroy:A,undestroy:j,errorOrDestroy:l},be}var _e={},Ce;function K(){if(Ce)return _e;Ce=1;function A(a,n){a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.__proto__=n}var w={};function S(a,n,u){u||(u=Error);function g(d,M,p){return typeof n=="string"?n:n(d,M,p)}var b=function(d){A(M,d);function M(p,y,s){return d.call(this,g(p,y,s))||this}return M}(u);b.prototype.name=u.name,b.prototype.code=a,w[a]=b}function j(a,n){if(Array.isArray(a)){var u=a.length;return a=a.map(function(g){return String(g)}),u>2?"one of ".concat(n," ").concat(a.slice(0,u-1).join(", "),", or ")+a[u-1]:u===2?"one of ".concat(n," ").concat(a[0]," or ").concat(a[1]):"of ".concat(n," ").concat(a[0])}else return"of ".concat(n," ").concat(String(a))}function q(a,n,u){return a.substr(0,n.length)===n}function l(a,n,u){return(u===void 0||u>a.length)&&(u=a.length),a.substring(u-n.length,u)===n}function h(a,n,u){return typeof u!="number"&&(u=0),u+n.length>a.length?!1:a.indexOf(n,u)!==-1}return S("ERR_INVALID_OPT_VALUE",function(a,n){return'The value "'+n+'" is invalid for option "'+a+'"'},TypeError),S("ERR_INVALID_ARG_TYPE",function(a,n,u){var g;typeof n=="string"&&q(n,"not ")?(g="must not be",n=n.replace(/^not /,"")):g="must be";var b;if(l(a," argument"))b="The ".concat(a," ").concat(g," ").concat(j(n,"type"));else{var d=h(a,".")?"property":"argument";b='The "'.concat(a,'" ').concat(d," ").concat(g," ").concat(j(n,"type"))}return b+=". Received type ".concat(typeof u),b},TypeError),S("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF"),S("ERR_METHOD_NOT_IMPLEMENTED",function(a){return"The "+a+" method is not implemented"}),S("ERR_STREAM_PREMATURE_CLOSE","Premature close"),S("ERR_STREAM_DESTROYED",function(a){return"Cannot call "+a+" after a stream was destroyed"}),S("ERR_MULTIPLE_CALLBACK","Callback called multiple times"),S("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable"),S("ERR_STREAM_WRITE_AFTER_END","write after end"),S("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError),S("ERR_UNKNOWN_ENCODING",function(a){return"Unknown encoding: "+a},TypeError),S("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event"),_e.codes=w,_e}var ge,Ie;function Je(){if(Ie)return ge;Ie=1;var A=K().codes.ERR_INVALID_OPT_VALUE;function w(j,q,l){return j.highWaterMark!=null?j.highWaterMark:q?j[l]:null}function S(j,q,l,h){var a=w(q,h,l);if(a!=null){if(!(isFinite(a)&&Math.floor(a)===a)||a<0){var n=h?l:"highWaterMark";throw new A(n,a)}return Math.floor(a)}return j.objectMode?16:16*1024}return ge={getHighWaterMark:S},ge}var ye,ke;function Qe(){if(ke)return ye;ke=1,ye=N;function A(i){var t=this;this.next=null,this.entry=null,this.finish=function(){ue(t,i)}}var w;N.WritableState=O;var S={deprecate:ir()},j=$e(),q=Oe().Buffer,l=(typeof ie<"u"?ie:typeof window<"u"?window:typeof self<"u"?self:{}).Uint8Array||function(){};function h(i){return q.from(i)}function a(i){return q.isBuffer(i)||i instanceof l}var n=Xe(),u=Je(),g=u.getHighWaterMark,b=K().codes,d=b.ERR_INVALID_ARG_TYPE,M=b.ERR_METHOD_NOT_IMPLEMENTED,p=b.ERR_MULTIPLE_CALLBACK,y=b.ERR_STREAM_CANNOT_PIPE,s=b.ERR_STREAM_DESTROYED,c=b.ERR_STREAM_NULL_VALUES,E=b.ERR_STREAM_WRITE_AFTER_END,R=b.ERR_UNKNOWN_ENCODING,v=n.errorOrDestroy;X()(N,j);function T(){}function O(i,t,o){w=w||Y(),i=i||{},typeof o!="boolean"&&(o=t instanceof w),this.objectMode=!!i.objectMode,o&&(this.objectMode=this.objectMode||!!i.writableObjectMode),this.highWaterMark=g(this,i,"writableHighWaterMark",o),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var m=i.decodeStrings===!1;this.decodeStrings=!m,this.defaultEncoding=i.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(D){fe(t,D)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.emitClose=i.emitClose!==!1,this.autoDestroy=!!i.autoDestroy,this.bufferedRequestCount=0,this.corkedRequestsFree=new A(this)}O.prototype.getBuffer=function(){for(var t=this.bufferedRequest,o=[];t;)o.push(t),t=t.next;return o},function(){try{Object.defineProperty(O.prototype,"buffer",{get:S.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch{}}();var k;typeof Symbol=="function"&&Symbol.hasInstance&&typeof Function.prototype[Symbol.hasInstance]=="function"?(k=Function.prototype[Symbol.hasInstance],Object.defineProperty(N,Symbol.hasInstance,{value:function(t){return k.call(this,t)?!0:this!==N?!1:t&&t._writableState instanceof O}})):k=function(t){return t instanceof this};function N(i){w=w||Y();var t=this instanceof w;if(!t&&!k.call(N,this))return new N(i);this._writableState=new O(i,this,t),this.writable=!0,i&&(typeof i.write=="function"&&(this._write=i.write),typeof i.writev=="function"&&(this._writev=i.writev),typeof i.destroy=="function"&&(this._destroy=i.destroy),typeof i.final=="function"&&(this._final=i.final)),j.call(this)}N.prototype.pipe=function(){v(this,new y)};function L(i,t){var o=new E;v(i,o),process.nextTick(t,o)}function B(i,t,o,m){var D;return o===null?D=new c:typeof o!="string"&&!t.objectMode&&(D=new d("chunk",["string","Buffer"],o)),D?(v(i,D),process.nextTick(m,D),!1):!0}N.prototype.write=function(i,t,o){var m=this._writableState,D=!1,e=!m.objectMode&&a(i);return e&&!q.isBuffer(i)&&(i=h(i)),typeof t=="function"&&(o=t,t=null),e?t="buffer":t||(t=m.defaultEncoding),typeof o!="function"&&(o=T),m.ending?L(this,o):(e||B(this,m,i,o))&&(m.pendingcb++,D=ne(this,m,e,i,t,o)),D},N.prototype.cork=function(){this._writableState.corked++},N.prototype.uncork=function(){var i=this._writableState;i.corked&&(i.corked--,!i.writing&&!i.corked&&!i.bufferProcessing&&i.bufferedRequest&&F(this,i))},N.prototype.setDefaultEncoding=function(t){if(typeof t=="string"&&(t=t.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((t+"").toLowerCase())>-1))throw new R(t);return this._writableState.defaultEncoding=t,this},Object.defineProperty(N.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}});function $(i,t,o){return!i.objectMode&&i.decodeStrings!==!1&&typeof t=="string"&&(t=q.from(t,o)),t}Object.defineProperty(N.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}});function ne(i,t,o,m,D,e){if(!o){var r=$(t,m,D);m!==r&&(o=!0,D="buffer",m=r)}var f=t.objectMode?1:m.length;t.length+=f;var _=t.length<t.highWaterMark;if(_||(t.needDrain=!0),t.writing||t.corked){var I=t.lastBufferedRequest;t.lastBufferedRequest={chunk:m,encoding:D,isBuf:o,callback:e,next:null},I?I.next=t.lastBufferedRequest:t.bufferedRequest=t.lastBufferedRequest,t.bufferedRequestCount+=1}else U(i,t,!1,f,m,D,e);return _}function U(i,t,o,m,D,e,r){t.writelen=m,t.writecb=r,t.writing=!0,t.sync=!0,t.destroyed?t.onwrite(new s("write")):o?i._writev(D,t.onwrite):i._write(D,e,t.onwrite),t.sync=!1}function ae(i,t,o,m,D){--t.pendingcb,o?(process.nextTick(D,m),process.nextTick(x,i,t),i._writableState.errorEmitted=!0,v(i,m)):(D(m),i._writableState.errorEmitted=!0,v(i,m),x(i,t))}function J(i){i.writing=!1,i.writecb=null,i.length-=i.writelen,i.writelen=0}function fe(i,t){var o=i._writableState,m=o.sync,D=o.writecb;if(typeof D!="function")throw new p;if(J(o),t)ae(i,o,m,t,D);else{var e=Z(o)||i.destroyed;!e&&!o.corked&&!o.bufferProcessing&&o.bufferedRequest&&F(i,o),m?process.nextTick(W,i,o,e,D):W(i,o,e,D)}}function W(i,t,o,m){o||Q(i,t),t.pendingcb--,m(),x(i,t)}function Q(i,t){t.length===0&&t.needDrain&&(t.needDrain=!1,i.emit("drain"))}function F(i,t){t.bufferProcessing=!0;var o=t.bufferedRequest;if(i._writev&&o&&o.next){var m=t.bufferedRequestCount,D=new Array(m),e=t.corkedRequestsFree;e.entry=o;for(var r=0,f=!0;o;)D[r]=o,o.isBuf||(f=!1),o=o.next,r+=1;D.allBuffers=f,U(i,t,!0,t.length,D,"",e.finish),t.pendingcb++,t.lastBufferedRequest=null,e.next?(t.corkedRequestsFree=e.next,e.next=null):t.corkedRequestsFree=new A(t),t.bufferedRequestCount=0}else{for(;o;){var _=o.chunk,I=o.encoding,P=o.callback,C=t.objectMode?1:_.length;if(U(i,t,!1,C,_,I,P),o=o.next,t.bufferedRequestCount--,t.writing)break}o===null&&(t.lastBufferedRequest=null)}t.bufferedRequest=o,t.bufferProcessing=!1}N.prototype._write=function(i,t,o){o(new M("_write()"))},N.prototype._writev=null,N.prototype.end=function(i,t,o){var m=this._writableState;return typeof i=="function"?(o=i,i=null,t=null):typeof t=="function"&&(o=t,t=null),i!=null&&this.write(i,t),m.corked&&(m.corked=1,this.uncork()),m.ending||le(this,m,o),this},Object.defineProperty(N.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}});function Z(i){return i.ending&&i.length===0&&i.bufferedRequest===null&&!i.finished&&!i.writing}function oe(i,t){i._final(function(o){t.pendingcb--,o&&v(i,o),t.prefinished=!0,i.emit("prefinish"),x(i,t)})}function ee(i,t){!t.prefinished&&!t.finalCalled&&(typeof i._final=="function"&&!t.destroyed?(t.pendingcb++,t.finalCalled=!0,process.nextTick(oe,i,t)):(t.prefinished=!0,i.emit("prefinish")))}function x(i,t){var o=Z(t);if(o&&(ee(i,t),t.pendingcb===0&&(t.finished=!0,i.emit("finish"),t.autoDestroy))){var m=i._readableState;(!m||m.autoDestroy&&m.endEmitted)&&i.destroy()}return o}function le(i,t,o){t.ending=!0,x(i,t),o&&(t.finished?process.nextTick(o):i.once("finish",o)),t.ended=!0,i.writable=!1}function ue(i,t,o){var m=i.entry;for(i.entry=null;m;){var D=m.callback;t.pendingcb--,D(o),m=m.next}t.corkedRequestsFree.next=i}return Object.defineProperty(N.prototype,"destroyed",{enumerable:!1,get:function(){return this._writableState===void 0?!1:this._writableState.destroyed},set:function(t){this._writableState&&(this._writableState.destroyed=t)}}),N.prototype.destroy=n.destroy,N.prototype._undestroy=n.undestroy,N.prototype._destroy=function(i,t){t(i)},ye}var ve,Be;function Y(){if(Be)return ve;Be=1;var A=Object.keys||function(u){var g=[];for(var b in u)g.push(b);return g};ve=h;var w=Ze(),S=Qe();X()(h,w);for(var j=A(S.prototype),q=0;q<j.length;q++){var l=j[q];h.prototype[l]||(h.prototype[l]=S.prototype[l])}function h(u){if(!(this instanceof h))return new h(u);w.call(this,u),S.call(this,u),this.allowHalfOpen=!0,u&&(u.readable===!1&&(this.readable=!1),u.writable===!1&&(this.writable=!1),u.allowHalfOpen===!1&&(this.allowHalfOpen=!1,this.once("end",a)))}Object.defineProperty(h.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(h.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(h.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}});function a(){this._writableState.ended||process.nextTick(n,this)}function n(u){u.end()}return Object.defineProperty(h.prototype,"destroyed",{enumerable:!1,get:function(){return this._readableState===void 0||this._writableState===void 0?!1:this._readableState.destroyed&&this._writableState.destroyed},set:function(g){this._readableState===void 0||this._writableState===void 0||(this._readableState.destroyed=g,this._writableState.destroyed=g)}}),ve}var we,We;function Ae(){if(We)return we;We=1;var A=K().codes.ERR_STREAM_PREMATURE_CLOSE;function w(l){var h=!1;return function(){if(!h){h=!0;for(var a=arguments.length,n=new Array(a),u=0;u<a;u++)n[u]=arguments[u];l.apply(this,n)}}}function S(){}function j(l){return l.setHeader&&typeof l.abort=="function"}function q(l,h,a){if(typeof h=="function")return q(l,null,h);h||(h={}),a=w(a||S);var n=h.readable||h.readable!==!1&&l.readable,u=h.writable||h.writable!==!1&&l.writable,g=function(){l.writable||d()},b=l._writableState&&l._writableState.finished,d=function(){u=!1,b=!0,n||a.call(l)},M=l._readableState&&l._readableState.endEmitted,p=function(){n=!1,M=!0,u||a.call(l)},y=function(R){a.call(l,R)},s=function(){var R;if(n&&!M)return(!l._readableState||!l._readableState.ended)&&(R=new A),a.call(l,R);if(u&&!b)return(!l._writableState||!l._writableState.ended)&&(R=new A),a.call(l,R)},c=function(){l.req.on("finish",d)};return j(l)?(l.on("complete",d),l.on("abort",s),l.req?c():l.on("request",c)):u&&!l._writableState&&(l.on("end",g),l.on("close",g)),l.on("end",p),l.on("finish",d),h.error!==!1&&l.on("error",y),l.on("close",s),function(){l.removeListener("complete",d),l.removeListener("abort",s),l.removeListener("request",c),l.req&&l.req.removeListener("finish",d),l.removeListener("end",g),l.removeListener("close",g),l.removeListener("finish",d),l.removeListener("end",p),l.removeListener("error",y),l.removeListener("close",s)}}return we=q,we}var Re,xe;function or(){if(xe)return Re;xe=1;var A;function w(R,v,T){return v=S(v),v in R?Object.defineProperty(R,v,{value:T,enumerable:!0,configurable:!0,writable:!0}):R[v]=T,R}function S(R){var v=j(R,"string");return typeof v=="symbol"?v:String(v)}function j(R,v){if(typeof R!="object"||R===null)return R;var T=R[Symbol.toPrimitive];if(T!==void 0){var O=T.call(R,v||"default");if(typeof O!="object")return O;throw new TypeError("@@toPrimitive must return a primitive value.")}return(v==="string"?String:Number)(R)}var q=Ae(),l=Symbol("lastResolve"),h=Symbol("lastReject"),a=Symbol("error"),n=Symbol("ended"),u=Symbol("lastPromise"),g=Symbol("handlePromise"),b=Symbol("stream");function d(R,v){return{value:R,done:v}}function M(R){var v=R[l];if(v!==null){var T=R[b].read();T!==null&&(R[u]=null,R[l]=null,R[h]=null,v(d(T,!1)))}}function p(R){process.nextTick(M,R)}function y(R,v){return function(T,O){R.then(function(){if(v[n]){T(d(void 0,!0));return}v[g](T,O)},O)}}var s=Object.getPrototypeOf(function(){}),c=Object.setPrototypeOf((A={get stream(){return this[b]},next:function(){var v=this,T=this[a];if(T!==null)return Promise.reject(T);if(this[n])return Promise.resolve(d(void 0,!0));if(this[b].destroyed)return new Promise(function(L,B){process.nextTick(function(){v[a]?B(v[a]):L(d(void 0,!0))})});var O=this[u],k;if(O)k=new Promise(y(O,this));else{var N=this[b].read();if(N!==null)return Promise.resolve(d(N,!1));k=new Promise(this[g])}return this[u]=k,k}},w(A,Symbol.asyncIterator,function(){return this}),w(A,"return",function(){var v=this;return new Promise(function(T,O){v[b].destroy(null,function(k){if(k){O(k);return}T(d(void 0,!0))})})}),A),s),E=function(v){var T,O=Object.create(c,(T={},w(T,b,{value:v,writable:!0}),w(T,l,{value:null,writable:!0}),w(T,h,{value:null,writable:!0}),w(T,a,{value:null,writable:!0}),w(T,n,{value:v._readableState.endEmitted,writable:!0}),w(T,g,{value:function(N,L){var B=O[b].read();B?(O[u]=null,O[l]=null,O[h]=null,N(d(B,!1))):(O[l]=N,O[h]=L)},writable:!0}),T));return O[u]=null,q(v,function(k){if(k&&k.code!=="ERR_STREAM_PREMATURE_CLOSE"){var N=O[h];N!==null&&(O[u]=null,O[l]=null,O[h]=null,N(k)),O[a]=k;return}var L=O[l];L!==null&&(O[u]=null,O[l]=null,O[h]=null,L(d(void 0,!0))),O[n]=!0}),v.on("readable",p.bind(null,O)),O};return Re=E,Re}var Ee,Ue;function lr(){return Ue||(Ue=1,Ee=function(){throw new Error("Readable.from is not available in the browser")}),Ee}var Se,Fe;function Ze(){if(Fe)return Se;Fe=1,Se=L;var A;L.ReadableState=N,Ke().EventEmitter;var w=function(r,f){return r.listeners(f).length},S=$e(),j=Oe().Buffer,q=(typeof ie<"u"?ie:typeof window<"u"?window:typeof self<"u"?self:{}).Uint8Array||function(){};function l(e){return j.from(e)}function h(e){return j.isBuffer(e)||e instanceof q}var a=ze,n;a&&a.debuglog?n=a.debuglog("stream"):n=function(){};var u=fr(),g=Xe(),b=Je(),d=b.getHighWaterMark,M=K().codes,p=M.ERR_INVALID_ARG_TYPE,y=M.ERR_STREAM_PUSH_AFTER_EOF,s=M.ERR_METHOD_NOT_IMPLEMENTED,c=M.ERR_STREAM_UNSHIFT_AFTER_END_EVENT,E,R,v;X()(L,S);var T=g.errorOrDestroy,O=["error","close","destroy","pause","resume"];function k(e,r,f){if(typeof e.prependListener=="function")return e.prependListener(r,f);!e._events||!e._events[r]?e.on(r,f):Array.isArray(e._events[r])?e._events[r].unshift(f):e._events[r]=[f,e._events[r]]}function N(e,r,f){A=A||Y(),e=e||{},typeof f!="boolean"&&(f=r instanceof A),this.objectMode=!!e.objectMode,f&&(this.objectMode=this.objectMode||!!e.readableObjectMode),this.highWaterMark=d(this,e,"readableHighWaterMark",f),this.buffer=new u,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.paused=!0,this.emitClose=e.emitClose!==!1,this.autoDestroy=!!e.autoDestroy,this.destroyed=!1,this.defaultEncoding=e.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(E||(E=De().StringDecoder),this.decoder=new E(e.encoding),this.encoding=e.encoding)}function L(e){if(A=A||Y(),!(this instanceof L))return new L(e);var r=this instanceof A;this._readableState=new N(e,this,r),this.readable=!0,e&&(typeof e.read=="function"&&(this._read=e.read),typeof e.destroy=="function"&&(this._destroy=e.destroy)),S.call(this)}Object.defineProperty(L.prototype,"destroyed",{enumerable:!1,get:function(){return this._readableState===void 0?!1:this._readableState.destroyed},set:function(r){this._readableState&&(this._readableState.destroyed=r)}}),L.prototype.destroy=g.destroy,L.prototype._undestroy=g.undestroy,L.prototype._destroy=function(e,r){r(e)},L.prototype.push=function(e,r){var f=this._readableState,_;return f.objectMode?_=!0:typeof e=="string"&&(r=r||f.defaultEncoding,r!==f.encoding&&(e=j.from(e,r),r=""),_=!0),B(this,e,r,!1,_)},L.prototype.unshift=function(e){return B(this,e,null,!0,!1)};function B(e,r,f,_,I){n("readableAddChunk",r);var P=e._readableState;if(r===null)P.reading=!1,fe(e,P);else{var C;if(I||(C=ne(P,r)),C)T(e,C);else if(P.objectMode||r&&r.length>0)if(typeof r!="string"&&!P.objectMode&&Object.getPrototypeOf(r)!==j.prototype&&(r=l(r)),_)P.endEmitted?T(e,new c):$(e,P,r,!0);else if(P.ended)T(e,new y);else{if(P.destroyed)return!1;P.reading=!1,P.decoder&&!f?(r=P.decoder.write(r),P.objectMode||r.length!==0?$(e,P,r,!1):F(e,P)):$(e,P,r,!1)}else _||(P.reading=!1,F(e,P))}return!P.ended&&(P.length<P.highWaterMark||P.length===0)}function $(e,r,f,_){r.flowing&&r.length===0&&!r.sync?(r.awaitDrain=0,e.emit("data",f)):(r.length+=r.objectMode?1:f.length,_?r.buffer.unshift(f):r.buffer.push(f),r.needReadable&&W(e)),F(e,r)}function ne(e,r){var f;return!h(r)&&typeof r!="string"&&r!==void 0&&!e.objectMode&&(f=new p("chunk",["string","Buffer","Uint8Array"],r)),f}L.prototype.isPaused=function(){return this._readableState.flowing===!1},L.prototype.setEncoding=function(e){E||(E=De().StringDecoder);var r=new E(e);this._readableState.decoder=r,this._readableState.encoding=this._readableState.decoder.encoding;for(var f=this._readableState.buffer.head,_="";f!==null;)_+=r.write(f.data),f=f.next;return this._readableState.buffer.clear(),_!==""&&this._readableState.buffer.push(_),this._readableState.length=_.length,this};var U=1073741824;function ae(e){return e>=U?e=U:(e--,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e++),e}function J(e,r){return e<=0||r.length===0&&r.ended?0:r.objectMode?1:e!==e?r.flowing&&r.length?r.buffer.head.data.length:r.length:(e>r.highWaterMark&&(r.highWaterMark=ae(e)),e<=r.length?e:r.ended?r.length:(r.needReadable=!0,0))}L.prototype.read=function(e){n("read",e),e=parseInt(e,10);var r=this._readableState,f=e;if(e!==0&&(r.emittedReadable=!1),e===0&&r.needReadable&&((r.highWaterMark!==0?r.length>=r.highWaterMark:r.length>0)||r.ended))return n("read: emitReadable",r.length,r.ended),r.length===0&&r.ended?o(this):W(this),null;if(e=J(e,r),e===0&&r.ended)return r.length===0&&o(this),null;var _=r.needReadable;n("need readable",_),(r.length===0||r.length-e<r.highWaterMark)&&(_=!0,n("length less than watermark",_)),r.ended||r.reading?(_=!1,n("reading or ended",_)):_&&(n("do read"),r.reading=!0,r.sync=!0,r.length===0&&(r.needReadable=!0),this._read(r.highWaterMark),r.sync=!1,r.reading||(e=J(f,r)));var I;return e>0?I=t(e,r):I=null,I===null?(r.needReadable=r.length<=r.highWaterMark,e=0):(r.length-=e,r.awaitDrain=0),r.length===0&&(r.ended||(r.needReadable=!0),f!==e&&r.ended&&o(this)),I!==null&&this.emit("data",I),I};function fe(e,r){if(n("onEofChunk"),!r.ended){if(r.decoder){var f=r.decoder.end();f&&f.length&&(r.buffer.push(f),r.length+=r.objectMode?1:f.length)}r.ended=!0,r.sync?W(e):(r.needReadable=!1,r.emittedReadable||(r.emittedReadable=!0,Q(e)))}}function W(e){var r=e._readableState;n("emitReadable",r.needReadable,r.emittedReadable),r.needReadable=!1,r.emittedReadable||(n("emitReadable",r.flowing),r.emittedReadable=!0,process.nextTick(Q,e))}function Q(e){var r=e._readableState;n("emitReadable_",r.destroyed,r.length,r.ended),!r.destroyed&&(r.length||r.ended)&&(e.emit("readable"),r.emittedReadable=!1),r.needReadable=!r.flowing&&!r.ended&&r.length<=r.highWaterMark,i(e)}function F(e,r){r.readingMore||(r.readingMore=!0,process.nextTick(Z,e,r))}function Z(e,r){for(;!r.reading&&!r.ended&&(r.length<r.highWaterMark||r.flowing&&r.length===0);){var f=r.length;if(n("maybeReadMore read 0"),e.read(0),f===r.length)break}r.readingMore=!1}L.prototype._read=function(e){T(this,new s("_read()"))},L.prototype.pipe=function(e,r){var f=this,_=this._readableState;switch(_.pipesCount){case 0:_.pipes=e;break;case 1:_.pipes=[_.pipes,e];break;default:_.pipes.push(e);break}_.pipesCount+=1,n("pipe count=%d opts=%j",_.pipesCount,r);var I=(!r||r.end!==!1)&&e!==process.stdout&&e!==process.stderr,P=I?H:z;_.endEmitted?process.nextTick(P):f.once("end",P),e.on("unpipe",C);function C(G,V){n("onunpipe"),G===f&&V&&V.hasUnpiped===!1&&(V.hasUnpiped=!0,rr())}function H(){n("onend"),e.end()}var re=oe(f);e.on("drain",re);var Le=!1;function rr(){n("cleanup"),e.removeListener("close",de),e.removeListener("finish",he),e.removeListener("drain",re),e.removeListener("error",se),e.removeListener("unpipe",C),f.removeListener("end",H),f.removeListener("end",z),f.removeListener("data",Pe),Le=!0,_.awaitDrain&&(!e._writableState||e._writableState.needDrain)&&re()}f.on("data",Pe);function Pe(G){n("ondata");var V=e.write(G);n("dest.write",V),V===!1&&((_.pipesCount===1&&_.pipes===e||_.pipesCount>1&&D(_.pipes,e)!==-1)&&!Le&&(n("false write response, pause",_.awaitDrain),_.awaitDrain++),f.pause())}function se(G){n("onerror",G),z(),e.removeListener("error",se),w(e,"error")===0&&T(e,G)}k(e,"error",se);function de(){e.removeListener("finish",he),z()}e.once("close",de);function he(){n("onfinish"),e.removeListener("close",de),z()}e.once("finish",he);function z(){n("unpipe"),f.unpipe(e)}return e.emit("pipe",f),_.flowing||(n("pipe resume"),f.resume()),e};function oe(e){return function(){var f=e._readableState;n("pipeOnDrain",f.awaitDrain),f.awaitDrain&&f.awaitDrain--,f.awaitDrain===0&&w(e,"data")&&(f.flowing=!0,i(e))}}L.prototype.unpipe=function(e){var r=this._readableState,f={hasUnpiped:!1};if(r.pipesCount===0)return this;if(r.pipesCount===1)return e&&e!==r.pipes?this:(e||(e=r.pipes),r.pipes=null,r.pipesCount=0,r.flowing=!1,e&&e.emit("unpipe",this,f),this);if(!e){var _=r.pipes,I=r.pipesCount;r.pipes=null,r.pipesCount=0,r.flowing=!1;for(var P=0;P<I;P++)_[P].emit("unpipe",this,{hasUnpiped:!1});return this}var C=D(r.pipes,e);return C===-1?this:(r.pipes.splice(C,1),r.pipesCount-=1,r.pipesCount===1&&(r.pipes=r.pipes[0]),e.emit("unpipe",this,f),this)},L.prototype.on=function(e,r){var f=S.prototype.on.call(this,e,r),_=this._readableState;return e==="data"?(_.readableListening=this.listenerCount("readable")>0,_.flowing!==!1&&this.resume()):e==="readable"&&!_.endEmitted&&!_.readableListening&&(_.readableListening=_.needReadable=!0,_.flowing=!1,_.emittedReadable=!1,n("on readable",_.length,_.reading),_.length?W(this):_.reading||process.nextTick(x,this)),f},L.prototype.addListener=L.prototype.on,L.prototype.removeListener=function(e,r){var f=S.prototype.removeListener.call(this,e,r);return e==="readable"&&process.nextTick(ee,this),f},L.prototype.removeAllListeners=function(e){var r=S.prototype.removeAllListeners.apply(this,arguments);return(e==="readable"||e===void 0)&&process.nextTick(ee,this),r};function ee(e){var r=e._readableState;r.readableListening=e.listenerCount("readable")>0,r.resumeScheduled&&!r.paused?r.flowing=!0:e.listenerCount("data")>0&&e.resume()}function x(e){n("readable nexttick read 0"),e.read(0)}L.prototype.resume=function(){var e=this._readableState;return e.flowing||(n("resume"),e.flowing=!e.readableListening,le(this,e)),e.paused=!1,this};function le(e,r){r.resumeScheduled||(r.resumeScheduled=!0,process.nextTick(ue,e,r))}function ue(e,r){n("resume",r.reading),r.reading||e.read(0),r.resumeScheduled=!1,e.emit("resume"),i(e),r.flowing&&!r.reading&&e.read(0)}L.prototype.pause=function(){return n("call pause flowing=%j",this._readableState.flowing),this._readableState.flowing!==!1&&(n("pause"),this._readableState.flowing=!1,this.emit("pause")),this._readableState.paused=!0,this};function i(e){var r=e._readableState;for(n("flow",r.flowing);r.flowing&&e.read()!==null;);}L.prototype.wrap=function(e){var r=this,f=this._readableState,_=!1;e.on("end",function(){if(n("wrapped end"),f.decoder&&!f.ended){var C=f.decoder.end();C&&C.length&&r.push(C)}r.push(null)}),e.on("data",function(C){if(n("wrapped data"),f.decoder&&(C=f.decoder.write(C)),!(f.objectMode&&C==null)&&!(!f.objectMode&&(!C||!C.length))){var H=r.push(C);H||(_=!0,e.pause())}});for(var I in e)this[I]===void 0&&typeof e[I]=="function"&&(this[I]=function(H){return function(){return e[H].apply(e,arguments)}}(I));for(var P=0;P<O.length;P++)e.on(O[P],this.emit.bind(this,O[P]));return this._read=function(C){n("wrapped _read",C),_&&(_=!1,e.resume())},this},typeof Symbol=="function"&&(L.prototype[Symbol.asyncIterator]=function(){return R===void 0&&(R=or()),R(this)}),Object.defineProperty(L.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),Object.defineProperty(L.prototype,"readableBuffer",{enumerable:!1,get:function(){return this._readableState&&this._readableState.buffer}}),Object.defineProperty(L.prototype,"readableFlowing",{enumerable:!1,get:function(){return this._readableState.flowing},set:function(r){this._readableState&&(this._readableState.flowing=r)}}),L._fromList=t,Object.defineProperty(L.prototype,"readableLength",{enumerable:!1,get:function(){return this._readableState.length}});function t(e,r){if(r.length===0)return null;var f;return r.objectMode?f=r.buffer.shift():!e||e>=r.length?(r.decoder?f=r.buffer.join(""):r.buffer.length===1?f=r.buffer.first():f=r.buffer.concat(r.length),r.buffer.clear()):f=r.buffer.consume(e,r.decoder),f}function o(e){var r=e._readableState;n("endReadable",r.endEmitted),r.endEmitted||(r.ended=!0,process.nextTick(m,r,e))}function m(e,r){if(n("endReadableNT",e.endEmitted,e.length),!e.endEmitted&&e.length===0&&(e.endEmitted=!0,r.readable=!1,r.emit("end"),e.autoDestroy)){var f=r._writableState;(!f||f.autoDestroy&&f.finished)&&r.destroy()}}typeof Symbol=="function"&&(L.from=function(e,r){return v===void 0&&(v=lr()),v(L,e,r)});function D(e,r){for(var f=0,_=e.length;f<_;f++)if(e[f]===r)return f;return-1}return Se}var me,He;function er(){if(He)return me;He=1,me=a;var A=K().codes,w=A.ERR_METHOD_NOT_IMPLEMENTED,S=A.ERR_MULTIPLE_CALLBACK,j=A.ERR_TRANSFORM_ALREADY_TRANSFORMING,q=A.ERR_TRANSFORM_WITH_LENGTH_0,l=Y();X()(a,l);function h(g,b){var d=this._transformState;d.transforming=!1;var M=d.writecb;if(M===null)return this.emit("error",new S);d.writechunk=null,d.writecb=null,b!=null&&this.push(b),M(g);var p=this._readableState;p.reading=!1,(p.needReadable||p.length<p.highWaterMark)&&this._read(p.highWaterMark)}function a(g){if(!(this instanceof a))return new a(g);l.call(this,g),this._transformState={afterTransform:h.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,g&&(typeof g.transform=="function"&&(this._transform=g.transform),typeof g.flush=="function"&&(this._flush=g.flush)),this.on("prefinish",n)}function n(){var g=this;typeof this._flush=="function"&&!this._readableState.destroyed?this._flush(function(b,d){u(g,b,d)}):u(this,null,null)}a.prototype.push=function(g,b){return this._transformState.needTransform=!1,l.prototype.push.call(this,g,b)},a.prototype._transform=function(g,b,d){d(new w("_transform()"))},a.prototype._write=function(g,b,d){var M=this._transformState;if(M.writecb=d,M.writechunk=g,M.writeencoding=b,!M.transforming){var p=this._readableState;(M.needTransform||p.needReadable||p.length<p.highWaterMark)&&this._read(p.highWaterMark)}},a.prototype._read=function(g){var b=this._transformState;b.writechunk!==null&&!b.transforming?(b.transforming=!0,this._transform(b.writechunk,b.writeencoding,b.afterTransform)):b.needTransform=!0},a.prototype._destroy=function(g,b){l.prototype._destroy.call(this,g,function(d){b(d)})};function u(g,b,d){if(b)return g.emit("error",b);if(d!=null&&g.push(d),g._writableState.length)throw new q;if(g._transformState.transforming)throw new j;return g.push(null)}return me}var Te,Ge;function ur(){if(Ge)return Te;Ge=1,Te=w;var A=er();X()(w,A);function w(S){if(!(this instanceof w))return new w(S);A.call(this,S)}return w.prototype._transform=function(S,j,q){q(null,S)},Te}var Me,Ve;function sr(){if(Ve)return Me;Ve=1;var A;function w(d){var M=!1;return function(){M||(M=!0,d.apply(void 0,arguments))}}var S=K().codes,j=S.ERR_MISSING_ARGS,q=S.ERR_STREAM_DESTROYED;function l(d){if(d)throw d}function h(d){return d.setHeader&&typeof d.abort=="function"}function a(d,M,p,y){y=w(y);var s=!1;d.on("close",function(){s=!0}),A===void 0&&(A=Ae()),A(d,{readable:M,writable:p},function(E){if(E)return y(E);s=!0,y()});var c=!1;return function(E){if(!s&&!c){if(c=!0,h(d))return d.abort();if(typeof d.destroy=="function")return d.destroy();y(E||new q("pipe"))}}}function n(d){d()}function u(d,M){return d.pipe(M)}function g(d){return!d.length||typeof d[d.length-1]!="function"?l:d.pop()}function b(){for(var d=arguments.length,M=new Array(d),p=0;p<d;p++)M[p]=arguments[p];var y=g(M);if(Array.isArray(M[0])&&(M=M[0]),M.length<2)throw new j("streams");var s,c=M.map(function(E,R){var v=R<M.length-1,T=R>0;return a(E,v,T,function(O){s||(s=O),O&&c.forEach(n),!v&&(c.forEach(n),y(s))})});return M.reduce(u)}return Me=b,Me}var Ye;function gr(){return Ye||(Ye=1,function(A,w){w=A.exports=Ze(),w.Stream=w,w.Readable=w,w.Writable=Qe(),w.Duplex=Y(),w.Transform=er(),w.PassThrough=ur(),w.finished=Ae(),w.pipeline=sr()}(te,te.exports)),te.exports}export{gr as r};
