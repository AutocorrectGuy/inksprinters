import{r as p,t as b,W as fe,j as g,a as pe,b as he}from"./app-16988503.js";import{A as ge,F as se,f as ae}from"./AuthenticatedLayout-a4dba31a.js";import"./ApplicationLogo-ab5fc20f.js";import"./transition-dc9bff9e.js";function ue(e){var t,o,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=ue(e[t]))&&(s&&(s+=" "),s+=o);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}function F(){for(var e,t,o=0,s="";o<arguments.length;)(e=arguments[o++])&&(t=ue(e))&&(s&&(s+=" "),s+=t);return s}const V=e=>typeof e=="number"&&!isNaN(e),H=e=>typeof e=="string",O=e=>typeof e=="function",Y=e=>H(e)||O(e)?e:null,ee=e=>p.isValidElement(e)||H(e)||O(e)||V(e);function ye(e,t,o){o===void 0&&(o=300);const{scrollHeight:s,style:d}=e;requestAnimationFrame(()=>{d.minHeight="initial",d.height=s+"px",d.transition=`all ${o}ms`,requestAnimationFrame(()=>{d.height="0",d.padding="0",d.margin="0",setTimeout(t,o)})})}function J(e){let{enter:t,exit:o,appendPosition:s=!1,collapse:d=!0,collapseDuration:l=300}=e;return function(n){let{children:a,position:C,preventExitTransition:E,done:T,nodeRef:v,isIn:N}=n;const i=s?`${t}--${C}`:t,m=s?`${o}--${C}`:o,h=p.useRef(0);return p.useLayoutEffect(()=>{const r=v.current,c=i.split(" "),I=u=>{u.target===v.current&&(r.dispatchEvent(new Event("d")),r.removeEventListener("animationend",I),r.removeEventListener("animationcancel",I),h.current===0&&u.type!=="animationcancel"&&r.classList.remove(...c))};r.classList.add(...c),r.addEventListener("animationend",I),r.addEventListener("animationcancel",I)},[]),p.useEffect(()=>{const r=v.current,c=()=>{r.removeEventListener("animationend",c),d?ye(r,T,l):T()};N||(E?c():(h.current=1,r.className+=` ${m}`,r.addEventListener("animationend",c)))},[N]),b.createElement(b.Fragment,null,a)}}function re(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const k={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const o=this.list.get(e).filter(s=>s!==t);return this.list.set(e,o),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const o=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(o)})}},G=e=>{let{theme:t,type:o,...s}=e;return b.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${o})`,...s})},te={info:function(e){return b.createElement(G,{...e},b.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return b.createElement(G,{...e},b.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return b.createElement(G,{...e},b.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return b.createElement(G,{...e},b.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return b.createElement("div",{className:"Toastify__spinner"})}};function ve(e){const[,t]=p.useReducer(i=>i+1,0),[o,s]=p.useState([]),d=p.useRef(null),l=p.useRef(new Map).current,n=i=>o.indexOf(i)!==-1,a=p.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:n,getToast:i=>l.get(i)}).current;function C(i){let{containerId:m}=i;const{limit:h}=a.props;!h||m&&a.containerId!==m||(a.count-=a.queue.length,a.queue=[])}function E(i){s(m=>i==null?[]:m.filter(h=>h!==i))}function T(){const{toastContent:i,toastProps:m,staleId:h}=a.queue.shift();N(i,m,h)}function v(i,m){let{delay:h,staleId:r,...c}=m;if(!ee(i)||function(R){return!d.current||a.props.enableMultiContainer&&R.containerId!==a.props.containerId||l.has(R.toastId)&&R.updateId==null}(c))return;const{toastId:I,updateId:u,data:f}=c,{props:y}=a,M=()=>E(I),P=u==null;P&&a.count++;const w={...y,style:y.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(c).filter(R=>{let[j,_]=R;return _!=null})),toastId:I,updateId:u,data:f,closeToast:M,isIn:!1,className:Y(c.className||y.toastClassName),bodyClassName:Y(c.bodyClassName||y.bodyClassName),progressClassName:Y(c.progressClassName||y.progressClassName),autoClose:!c.isLoading&&(A=c.autoClose,q=y.autoClose,A===!1||V(A)&&A>0?A:q),deleteToast(){const R=re(l.get(I),"removed");l.delete(I),k.emit(4,R);const j=a.queue.length;if(a.count=I==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),j>0){const _=I==null?a.props.limit:1;if(j===1||_===1)a.displayedToast++,T();else{const S=_>j?j:_;a.displayedToast=S;for(let L=0;L<S;L++)T()}}else t()}};var A,q;w.iconOut=function(R){let{theme:j,type:_,isLoading:S,icon:L}=R,D=null;const B={theme:j,type:_};return L===!1||(O(L)?D=L(B):p.isValidElement(L)?D=p.cloneElement(L,B):H(L)||V(L)?D=L:S?D=te.spinner():(X=>X in te)(_)&&(D=te[_](B))),D}(w),O(c.onOpen)&&(w.onOpen=c.onOpen),O(c.onClose)&&(w.onClose=c.onClose),w.closeButton=y.closeButton,c.closeButton===!1||ee(c.closeButton)?w.closeButton=c.closeButton:c.closeButton===!0&&(w.closeButton=!ee(y.closeButton)||y.closeButton);let $=i;p.isValidElement(i)&&!H(i.type)?$=p.cloneElement(i,{closeToast:M,toastProps:w,data:f}):O(i)&&($=i({closeToast:M,toastProps:w,data:f})),y.limit&&y.limit>0&&a.count>y.limit&&P?a.queue.push({toastContent:$,toastProps:w,staleId:r}):V(h)?setTimeout(()=>{N($,w,r)},h):N($,w,r)}function N(i,m,h){const{toastId:r}=m;h&&l.delete(h);const c={content:i,props:m};l.set(r,c),s(I=>[...I,r].filter(u=>u!==h)),k.emit(4,re(c,c.props.updateId==null?"added":"updated"))}return p.useEffect(()=>(a.containerId=e.containerId,k.cancelEmit(3).on(0,v).on(1,i=>d.current&&E(i)).on(5,C).emit(2,a),()=>{l.clear(),k.emit(3,a)}),[]),p.useEffect(()=>{a.props=e,a.isToastActive=n,a.displayedToast=o.length}),{getToastToRender:function(i){const m=new Map,h=Array.from(l.values());return e.newestOnTop&&h.reverse(),h.forEach(r=>{const{position:c}=r.props;m.has(c)||m.set(c,[]),m.get(c).push(r)}),Array.from(m,r=>i(r[0],r[1]))},containerRef:d,isToastActive:n}}function ie(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function le(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function Te(e){const[t,o]=p.useState(!1),[s,d]=p.useState(!1),l=p.useRef(null),n=p.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=p.useRef(e),{autoClose:C,pauseOnHover:E,closeToast:T,onClick:v,closeOnClick:N}=e;function i(f){if(e.draggable){f.nativeEvent.type==="touchstart"&&f.nativeEvent.preventDefault(),n.didMove=!1,document.addEventListener("mousemove",c),document.addEventListener("mouseup",I),document.addEventListener("touchmove",c),document.addEventListener("touchend",I);const y=l.current;n.canCloseOnClick=!0,n.canDrag=!0,n.boundingRect=y.getBoundingClientRect(),y.style.transition="",n.x=ie(f.nativeEvent),n.y=le(f.nativeEvent),e.draggableDirection==="x"?(n.start=n.x,n.removalDistance=y.offsetWidth*(e.draggablePercent/100)):(n.start=n.y,n.removalDistance=y.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function m(f){if(n.boundingRect){const{top:y,bottom:M,left:P,right:w}=n.boundingRect;f.nativeEvent.type!=="touchend"&&e.pauseOnHover&&n.x>=P&&n.x<=w&&n.y>=y&&n.y<=M?r():h()}}function h(){o(!0)}function r(){o(!1)}function c(f){const y=l.current;n.canDrag&&y&&(n.didMove=!0,t&&r(),n.x=ie(f),n.y=le(f),n.delta=e.draggableDirection==="x"?n.x-n.start:n.y-n.start,n.start!==n.x&&(n.canCloseOnClick=!1),y.style.transform=`translate${e.draggableDirection}(${n.delta}px)`,y.style.opacity=""+(1-Math.abs(n.delta/n.removalDistance)))}function I(){document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",c),document.removeEventListener("touchend",I);const f=l.current;if(n.canDrag&&n.didMove&&f){if(n.canDrag=!1,Math.abs(n.delta)>n.removalDistance)return d(!0),void e.closeToast();f.style.transition="transform 0.2s, opacity 0.2s",f.style.transform=`translate${e.draggableDirection}(0)`,f.style.opacity="1"}}p.useEffect(()=>{a.current=e}),p.useEffect(()=>(l.current&&l.current.addEventListener("d",h,{once:!0}),O(e.onOpen)&&e.onOpen(p.isValidElement(e.children)&&e.children.props),()=>{const f=a.current;O(f.onClose)&&f.onClose(p.isValidElement(f.children)&&f.children.props)}),[]),p.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||r(),window.addEventListener("focus",h),window.addEventListener("blur",r)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",h),window.removeEventListener("blur",r))}),[e.pauseOnFocusLoss]);const u={onMouseDown:i,onTouchStart:i,onMouseUp:m,onTouchEnd:m};return C&&E&&(u.onMouseEnter=r,u.onMouseLeave=h),N&&(u.onClick=f=>{v&&v(f),n.canCloseOnClick&&T()}),{playToast:h,pauseToast:r,isRunning:t,preventExitTransition:s,toastRef:l,eventHandlers:u}}function de(e){let{closeToast:t,theme:o,ariaLabel:s="close"}=e;return b.createElement("button",{className:`Toastify__close-button Toastify__close-button--${o}`,type:"button",onClick:d=>{d.stopPropagation(),t(d)},"aria-label":s},b.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},b.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Ee(e){let{delay:t,isRunning:o,closeToast:s,type:d="default",hide:l,className:n,style:a,controlledProgress:C,progress:E,rtl:T,isIn:v,theme:N}=e;const i=l||C&&E===0,m={...a,animationDuration:`${t}ms`,animationPlayState:o?"running":"paused",opacity:i?0:1};C&&(m.transform=`scaleX(${E})`);const h=F("Toastify__progress-bar",C?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${N}`,`Toastify__progress-bar--${d}`,{"Toastify__progress-bar--rtl":T}),r=O(n)?n({rtl:T,type:d,defaultClassName:h}):F(h,n);return b.createElement("div",{role:"progressbar","aria-hidden":i?"true":"false","aria-label":"notification timer",className:r,style:m,[C&&E>=1?"onTransitionEnd":"onAnimationEnd"]:C&&E<1?null:()=>{v&&s()}})}const be=e=>{const{isRunning:t,preventExitTransition:o,toastRef:s,eventHandlers:d}=Te(e),{closeButton:l,children:n,autoClose:a,onClick:C,type:E,hideProgressBar:T,closeToast:v,transition:N,position:i,className:m,style:h,bodyClassName:r,bodyStyle:c,progressClassName:I,progressStyle:u,updateId:f,role:y,progress:M,rtl:P,toastId:w,deleteToast:A,isIn:q,isLoading:$,iconOut:R,closeOnClick:j,theme:_}=e,S=F("Toastify__toast",`Toastify__toast-theme--${_}`,`Toastify__toast--${E}`,{"Toastify__toast--rtl":P},{"Toastify__toast--close-on-click":j}),L=O(m)?m({rtl:P,position:i,type:E,defaultClassName:S}):F(S,m),D=!!M||!a,B={closeToast:v,type:E,theme:_};let X=null;return l===!1||(X=O(l)?l(B):p.isValidElement(l)?p.cloneElement(l,B):de(B)),b.createElement(N,{isIn:q,done:A,position:i,preventExitTransition:o,nodeRef:s},b.createElement("div",{id:w,onClick:C,className:L,...d,style:h,ref:s},b.createElement("div",{...q&&{role:y},className:O(r)?r({type:E}):F("Toastify__toast-body",r),style:c},R!=null&&b.createElement("div",{className:F("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!$})},R),b.createElement("div",null,n)),X,b.createElement(Ee,{...f&&!D?{key:`pb-${f}`}:{},rtl:P,theme:_,delay:a,isRunning:t,isIn:q,closeToast:v,hide:T,type:E,style:u,className:I,controlledProgress:D,progress:M||0})))},Z=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},xe=J(Z("bounce",!0));J(Z("slide",!0));J(Z("zoom"));J(Z("flip"));const oe=p.forwardRef((e,t)=>{const{getToastToRender:o,containerRef:s,isToastActive:d}=ve(e),{className:l,style:n,rtl:a,containerId:C}=e;function E(T){const v=F("Toastify__toast-container",`Toastify__toast-container--${T}`,{"Toastify__toast-container--rtl":a});return O(l)?l({position:T,rtl:a,defaultClassName:v}):F(v,Y(l))}return p.useEffect(()=>{t&&(t.current=s.current)},[]),b.createElement("div",{ref:s,className:"Toastify",id:C},o((T,v)=>{const N=v.length?{...n}:{...n,pointerEvents:"none"};return b.createElement("div",{className:E(T),style:N,key:`container-${T}`},v.map((i,m)=>{let{content:h,props:r}=i;return b.createElement(be,{...r,isIn:d(r.toastId),style:{...r.style,"--nth":m+1,"--len":v.length},key:`toast-${r.key}`},h)}))}))});oe.displayName="ToastContainer",oe.defaultProps={position:"top-right",transition:xe,autoClose:5e3,closeButton:de,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let ne,z=new Map,Q=[],Ce=1;function me(){return""+Ce++}function Ie(e){return e&&(H(e.toastId)||V(e.toastId))?e.toastId:me()}function W(e,t){return z.size>0?k.emit(0,e,t):Q.push({content:e,options:t}),t.toastId}function K(e,t){return{...t,type:t&&t.type||e,toastId:Ie(t)}}function U(e){return(t,o)=>W(t,K(e,o))}function x(e,t){return W(e,K("default",t))}x.loading=(e,t)=>W(e,K("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),x.promise=function(e,t,o){let s,{pending:d,error:l,success:n}=t;d&&(s=H(d)?x.loading(d,o):x.loading(d.render,{...o,...d}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},C=(T,v,N)=>{if(v==null)return void x.dismiss(s);const i={type:T,...a,...o,data:N},m=H(v)?{render:v}:v;return s?x.update(s,{...i,...m}):x(m.render,{...i,...m}),N},E=O(e)?e():e;return E.then(T=>C("success",n,T)).catch(T=>C("error",l,T)),E},x.success=U("success"),x.info=U("info"),x.error=U("error"),x.warning=U("warning"),x.warn=x.warning,x.dark=(e,t)=>W(e,K("default",{theme:"dark",...t})),x.dismiss=e=>{z.size>0?k.emit(1,e):Q=Q.filter(t=>e!=null&&t.options.toastId!==e)},x.clearWaitingQueue=function(e){return e===void 0&&(e={}),k.emit(5,e)},x.isActive=e=>{let t=!1;return z.forEach(o=>{o.isToastActive&&o.isToastActive(e)&&(t=!0)}),t},x.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const o=function(s,d){let{containerId:l}=d;const n=z.get(l||ne);return n&&n.getToast(s)}(e,t);if(o){const{props:s,content:d}=o,l={delay:100,...s,...t,toastId:t.toastId||e,updateId:me()};l.toastId!==e&&(l.staleId=e);const n=l.render||d;delete l.render,W(n,l)}},0)},x.done=e=>{x.update(e,{progress:1})},x.onChange=e=>(k.on(4,e),()=>{k.off(4,e)}),x.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},x.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},k.on(2,e=>{ne=e.containerId||e,z.set(ne,e),Q.forEach(t=>{k.emit(0,t.content,t.options)}),Q=[]}).on(3,e=>{z.delete(e.containerId||e),z.size===0&&k.off(0).off(1).off(5)});const ce=["PDF","EPS","AI"],Le=({auth:e,posts:t})=>{const{data:o,setData:s}=fe({file:null,from:null,to:null}),[d,l]=p.useState(!1),n=p.useRef(null),[a,C]=p.useState(!1),E=p.useRef(null),[T,v]=p.useState(null),[N,i]=p.useState(!1),m=()=>x.success(`File converted from ${o.from} to ${o.to} successfully!`,{position:"top-center",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"dark"}),h=u=>{u.preventDefault();const f=new FormData;o.file&&f.append("file",o.file),o.from&&f.append("from",o.from),o.to&&f.append("to",o.to),i(!0),he.post("/convert/filetype-via-api",f,{headers:{"Content-Type":"multipart/form-data"}}).then(y=>{window.location.href=y.data.download_url,m()}).catch(y=>console.error("Error:",y)).finally(()=>i(!1))};p.useEffect(()=>{const u=f=>{n.current&&!n.current.contains(f.target)&&l(!1),E.current&&!E.current.contains(f.target)&&C(!1)};return document.addEventListener("click",u),()=>document.removeEventListener("click",u)},[]);const r=u=>{s("from",u),l(!1)},c=u=>{s("to",u),C(!1)},I=u=>{u.target.files&&u.target.files.length>0?(s("file",u.target.files[0]),v(u.target.files[0].name)):(s("file",null),v(null))};return g.jsxs(ge,{user:e.user,header:g.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Converter"}),children:[g.jsx(pe,{title:"Converter"}),g.jsx("div",{className:"py-12",children:g.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:g.jsxs("div",{className:"flex flex-col justify-center bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg p-14",children:[g.jsx("div",{className:"text-gray-900 dark:text-gray-300 text-center text-2xl",children:"Convert your files"}),g.jsxs("form",{className:"flex flex-col justify-center",onSubmit:h,children:[g.jsxs("div",{className:"flex items-center justify-center pt-2 my-12",children:[g.jsxs("div",{className:"file-input-container relative inline-block mr-6",children:[g.jsx("label",{htmlFor:"fileInput",className:"btn btn-outline mb-2 cursor-pointer h-16 px-8 border text-lg shadow-lg",children:"Choose File"}),g.jsx("input",{id:"fileInput",type:"file",className:"file-input file-input-bordered w-full absolute opacity-0 cursor-pointer",style:{position:"absolute",top:0,left:0,height:"100%",width:"100%"},onChange:I})]}),g.jsxs("div",{className:"dropdown",ref:n,children:[g.jsxs("label",{tabIndex:0,className:"btn btn-lg mb-2",onClick:()=>l(!d),children:[o.from??"FROM",g.jsx(se,{icon:ae,className:"ml-1 w-4 h-4"})]}),d&&g.jsx("ul",{tabIndex:0,className:"dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-52",children:ce.filter(u=>u!==o.to).map(u=>g.jsx("li",{onClick:()=>r(u),children:g.jsx("a",{children:u})},u))})]}),g.jsx("div",{className:"text-xl text-gray-300 px-3 mb-2",children:"to"}),g.jsxs("div",{className:"dropdown",ref:E,children:[g.jsxs("label",{tabIndex:0,className:"btn btn-lg mb-2",onClick:()=>C(!a),children:[o.to??"TO",g.jsx(se,{icon:ae,className:"ml-1 w-4 h-4"})]}),a&&g.jsx("ul",{tabIndex:0,className:"dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-52",children:ce.filter(u=>u!==o.from).map(u=>g.jsx("li",{onClick:()=>c(u),children:g.jsx("a",{children:u})},u))})]}),g.jsxs("button",{type:"submit",disabled:N,className:"btn h-14 px-6 text-lg btn-primary shadow-lg mb-2 ml-6",children:["CONVERT",N&&"ing",N&&g.jsx("span",{className:"ml-2 loading loading-spinner loading-md"})]})]}),g.jsxs("div",{className:`mt-2 ${T?"text-gray-200":"text-gray-600"} text-center`,children:["Selected file: ",g.jsx("b",{children:T||"No file selected"})]})]})]})})}),g.jsx(oe,{position:"top-center",autoClose:3e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"})]})};export{Le as default};