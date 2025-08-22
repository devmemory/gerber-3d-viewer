import{a as r}from"./vendor-react-Bifdz3QC.js";import{h as g,u as H,j as b,m as L}from"./vendor-goober-np-fLvOt.js";var S=e=>typeof e=="function",k=(e,t)=>S(e)?e(t):e,F=(()=>{let e=0;return()=>(++e).toString()})(),P=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),B=20,I="default",j=(e,t)=>{let{toastLimit:a}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,a)};case 1:return{...e,toasts:e.toasts.map(s=>s.id===t.toast.id?{...s,...t.toast}:s)};case 2:let{toast:i}=t;return j(e,{type:e.toasts.find(s=>s.id===i.id)?1:0,toast:i});case 3:let{toastId:o}=t;return{...e,toasts:e.toasts.map(s=>s.id===o||o===void 0?{...s,dismissed:!0,visible:!1}:s)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(s=>s.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+n}))}}},$=[],T={toasts:[],pausedAt:void 0,settings:{toastLimit:B}},y={},N=(e,t=I)=>{y[t]=j(y[t]||T,e),$.forEach(([a,i])=>{a===t&&i(y[t])})},M=e=>Object.keys(y).forEach(t=>N(e,t)),U=e=>Object.keys(y).find(t=>y[t].toasts.some(a=>a.id===e)),D=(e=I)=>t=>{N(t,e)},Y={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},K=(e={},t=I)=>{let[a,i]=r.useState(y[t]||T),o=r.useRef(y[t]);r.useEffect(()=>(o.current!==y[t]&&i(y[t]),$.push([t,i]),()=>{let s=$.findIndex(([m])=>m===t);s>-1&&$.splice(s,1)}),[t]);let n=a.toasts.map(s=>{var m,v,h;return{...e,...e[s.type],...s,removeDelay:s.removeDelay||((m=e[s.type])==null?void 0:m.removeDelay)||e?.removeDelay,duration:s.duration||((v=e[s.type])==null?void 0:v.duration)||e?.duration||Y[s.type],style:{...e.style,...(h=e[s.type])==null?void 0:h.style,...s.style}}});return{...a,toasts:n}},Q=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:a?.id||F()}),x=e=>(t,a)=>{let i=Q(t,e,a);return D(i.toasterId||U(i.id))({type:2,toast:i}),i.id},d=(e,t)=>x("blank")(e,t);d.error=x("error");d.success=x("success");d.loading=x("loading");d.custom=x("custom");d.dismiss=(e,t)=>{let a={type:3,toastId:e};t?D(t)(a):M(a)};d.dismissAll=e=>d.dismiss(void 0,e);d.remove=(e,t)=>{let a={type:4,toastId:e};t?D(t)(a):M(a)};d.removeAll=e=>d.remove(void 0,e);d.promise=(e,t,a)=>{let i=d.loading(t.loading,{...a,...a?.loading});return typeof e=="function"&&(e=e()),e.then(o=>{let n=t.success?k(t.success,o):void 0;return n?d.success(n,{id:i,...a,...a?.success}):d.dismiss(i),o}).catch(o=>{let n=t.error?k(t.error,o):void 0;n?d.error(n,{id:i,...a,...a?.error}):d.dismiss(i)}),e};var V=1e3,W=(e,t="default")=>{let{toasts:a,pausedAt:i}=K(e,t),o=r.useRef(new Map).current,n=r.useCallback((l,p=V)=>{if(o.has(l))return;let c=setTimeout(()=>{o.delete(l),s({type:4,toastId:l})},p);o.set(l,c)},[]);r.useEffect(()=>{if(i)return;let l=Date.now(),p=a.map(c=>{if(c.duration===1/0)return;let w=(c.duration||0)+c.pauseDuration-(l-c.createdAt);if(w<0){c.visible&&d.dismiss(c.id);return}return setTimeout(()=>d.dismiss(c.id,t),w)});return()=>{p.forEach(c=>c&&clearTimeout(c))}},[a,i,t]);let s=r.useCallback(D(t),[t]),m=r.useCallback(()=>{s({type:5,time:Date.now()})},[s]),v=r.useCallback((l,p)=>{s({type:1,toast:{id:l,height:p}})},[s]),h=r.useCallback(()=>{i&&s({type:6,time:Date.now()})},[i,s]),u=r.useCallback((l,p)=>{let{reverseOrder:c=!1,gutter:w=8,defaultPosition:O}=p||{},z=a.filter(f=>(f.position||O)===(l.position||O)&&f.height),R=z.findIndex(f=>f.id===l.id),A=z.filter((f,C)=>C<R&&f.visible).length;return z.filter(f=>f.visible).slice(...c?[A+1]:[0,A]).reduce((f,C)=>f+(C.height||0)+w,0)},[a]);return r.useEffect(()=>{a.forEach(l=>{if(l.dismissed)n(l.id,l.removeDelay);else{let p=o.get(l.id);p&&(clearTimeout(p),o.delete(l.id))}})},[a,n]),{toasts:a,handlers:{updateHeight:v,startPause:m,endPause:h,calculateOffset:u}}},Z=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,_=g`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,q=g`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,G=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${_} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${q} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,J=g`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,X=b("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${J} 1s linear infinite;
`,ee=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,te=g`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,ae=b("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ee} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${te} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,se=b("div")`
  position: absolute;
`,ie=b("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,re=g`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,oe=b("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${re} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ne=({toast:e})=>{let{icon:t,type:a,iconTheme:i}=e;return t!==void 0?typeof t=="string"?r.createElement(oe,null,t):t:a==="blank"?null:r.createElement(ie,null,r.createElement(X,{...i}),a!=="loading"&&r.createElement(se,null,a==="error"?r.createElement(G,{...i}):r.createElement(ae,{...i})))},le=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,de=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,ce="0%{opacity:0;} 100%{opacity:1;}",ue="0%{opacity:1;} 100%{opacity:0;}",pe=b("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,me=b("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,fe=(e,t)=>{let a=e.includes("top")?1:-1,[i,o]=P()?[ce,ue]:[le(a),de(a)];return{animation:t?`${g(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${g(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ye=r.memo(({toast:e,position:t,style:a,children:i})=>{let o=e.height?fe(e.position||t||"top-center",e.visible):{opacity:0},n=r.createElement(ne,{toast:e}),s=r.createElement(me,{...e.ariaProps},k(e.message,e));return r.createElement(pe,{className:e.className,style:{...o,...a,...e.style}},typeof i=="function"?i({icon:n,message:s}):r.createElement(r.Fragment,null,n,s))});L(r.createElement);var he=({id:e,className:t,style:a,onHeightUpdate:i,children:o})=>{let n=r.useCallback(s=>{if(s){let m=()=>{let v=s.getBoundingClientRect().height;i(e,v)};m(),new MutationObserver(m).observe(s,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return r.createElement("div",{ref:n,className:t,style:a},o)},ge=(e,t)=>{let a=e.includes("top"),i=a?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:P()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...i,...o}},ve=H`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,E=16,we=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:i,children:o,toasterId:n,containerStyle:s,containerClassName:m})=>{let{toasts:v,handlers:h}=W(a,n);return r.createElement("div",{"data-rht-toaster":n||"",style:{position:"fixed",zIndex:9999,top:E,left:E,right:E,bottom:E,pointerEvents:"none",...s},className:m,onMouseEnter:h.startPause,onMouseLeave:h.endPause},v.map(u=>{let l=u.position||t,p=h.calculateOffset(u,{reverseOrder:e,gutter:i,defaultPosition:t}),c=ge(l,p);return r.createElement(he,{id:u.id,key:u.id,onHeightUpdate:h.updateHeight,className:u.visible?ve:"",style:c},u.type==="custom"?k(u.message,u):o?o(u):r.createElement(ye,{toast:u,position:l}))}))},Ee=d;export{we as F,Ee as z};
