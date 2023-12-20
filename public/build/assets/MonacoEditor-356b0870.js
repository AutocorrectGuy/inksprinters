import{r as a,c as N,_ as we,j as P}from"./app-0839de6f.js";import{a as ye}from"./ExcelToTextContext-3da824f9.js";function Oe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ae(Object(r),!0).forEach(function(n){Oe(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function je(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function Me(e,t){if(e==null)return{};var r=je(e,t),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Ee(e,t){return Se(e)||Pe(e,t)||Ce(e,t)||xe()}function Se(e){if(Array.isArray(e))return e}function Pe(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var r=[],n=!0,o=!1,i=void 0;try{for(var u=e[Symbol.iterator](),g;!(n=(g=u.next()).done)&&(r.push(g.value),!(t&&r.length===t));n=!0);}catch(h){o=!0,i=h}finally{try{!n&&u.return!=null&&u.return()}finally{if(o)throw i}}return r}}function Ce(e,t){if(e){if(typeof e=="string")return ue(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ue(e,t)}}function ue(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function xe(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Re(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function le(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?se(Object(r),!0).forEach(function(n){Re(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Ie(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){return t.reduceRight(function(o,i){return i(o)},n)}}function W(e){return function t(){for(var r=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var u=arguments.length,g=new Array(u),h=0;h<u;h++)g[h]=arguments[h];return t.apply(r,[].concat(o,g))}}}function Z(e){return{}.toString.call(e).includes("Object")}function Te(e){return!Object.keys(e).length}function Y(e){return typeof e=="function"}function Le(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ae(e,t){return Z(t)||x("changeType"),Object.keys(t).some(function(r){return!Le(e,r)})&&x("changeField"),t}function De(e){Y(e)||x("selectorType")}function $e(e){Y(e)||Z(e)||x("handlerType"),Z(e)&&Object.values(e).some(function(t){return!Y(t)})&&x("handlersType")}function Ve(e){e||x("initialIsRequired"),Z(e)||x("initialType"),Te(e)&&x("initialContent")}function Ne(e,t){throw new Error(e[t]||e.default)}var qe={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},x=W(Ne)(qe),Q={changes:Ae,selector:De,handler:$e,initial:Ve};function Fe(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Q.initial(e),Q.handler(t);var r={current:e},n=W(Ue)(r,t),o=W(ke)(r),i=W(Q.changes)(e),u=W(_e)(r);function g(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(E){return E};return Q.selector(m),m(r.current)}function h(m){Ie(n,o,i,u)(m)}return[g,h]}function _e(e,t){return Y(t)?t(e.current):t}function ke(e,t){return e.current=le(le({},e.current),t),t}function Ue(e,t,r){return Y(t)?t(e.current):Object.keys(r).forEach(function(n){var o;return(o=t[n])===null||o===void 0?void 0:o.call(t,e.current[n])}),r}var ze={create:Fe},He={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}};function We(e){return function t(){for(var r=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var u=arguments.length,g=new Array(u),h=0;h<u;h++)g[h]=arguments[h];return t.apply(r,[].concat(o,g))}}}function Be(e){return{}.toString.call(e).includes("Object")}function Ye(e){return e||fe("configIsRequired"),Be(e)||fe("configType"),e.urls?(Ge(),{paths:{vs:e.urls.monacoBase}}):e}function Ge(){console.warn(de.deprecation)}function Ke(e,t){throw new Error(e[t]||e.default)}var de={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},fe=We(Ke)(de),Je={config:Ye},Qe=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return function(o){return r.reduceRight(function(i,u){return u(i)},o)}};function pe(e,t){return Object.keys(t).forEach(function(r){t[r]instanceof Object&&e[r]&&Object.assign(t[r],pe(e[r],t[r]))}),ce(ce({},e),t)}var Xe={type:"cancelation",msg:"operation is manually canceled"};function re(e){var t=!1,r=new Promise(function(n,o){e.then(function(i){return t?o(Xe):n(i)}),e.catch(o)});return r.cancel=function(){return t=!0},r}var Ze=ze.create({config:He,isInitialized:!1,resolve:null,reject:null,monaco:null}),ge=Ee(Ze,2),G=ge[0],te=ge[1];function et(e){var t=Je.config(e),r=t.monaco,n=Me(t,["monaco"]);te(function(o){return{config:pe(o.config,n),monaco:r}})}function tt(){var e=G(function(t){var r=t.monaco,n=t.isInitialized,o=t.resolve;return{monaco:r,isInitialized:n,resolve:o}});if(!e.isInitialized){if(te({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),re(ne);if(window.monaco&&window.monaco.editor)return he(window.monaco),e.resolve(window.monaco),re(ne);Qe(rt,ot)(it)}return re(ne)}function rt(e){return document.body.appendChild(e)}function nt(e){var t=document.createElement("script");return e&&(t.src=e),t}function ot(e){var t=G(function(n){var o=n.config,i=n.reject;return{config:o,reject:i}}),r=nt("".concat(t.config.paths.vs,"/loader.js"));return r.onload=function(){return e()},r.onerror=t.reject,r}function it(){var e=G(function(r){var n=r.config,o=r.resolve,i=r.reject;return{config:n,resolve:o,reject:i}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(r){he(r),e.resolve(r)},function(r){e.reject(r)})}function he(e){G().monaco||te({monaco:e})}function at(){return G(function(e){var t=e.monaco;return t})}var ne=new Promise(function(e,t){return te({resolve:e,reject:t})}),ee={config:et,init:tt,__getMonacoInstance:at},ct={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},oe=ct,ut={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},st=ut;function lt({children:e}){return N.createElement("div",{style:st.container},e)}var ft=lt,dt=ft;function pt({width:e,height:t,isEditorReady:r,loading:n,_ref:o,className:i,wrapperProps:u}){return N.createElement("section",{style:{...oe.wrapper,width:e,height:t},...u},!r&&N.createElement(dt,null,n),N.createElement("div",{ref:o,style:{...oe.fullWidth,...!r&&oe.hide},className:i}))}var gt=pt,ve=a.memo(gt);function ht(e){a.useEffect(e,[])}var ie=ht;function vt(e,t,r=!0){let n=a.useRef(!0);a.useEffect(n.current||!r?()=>{n.current=!1}:e,t)}var M=vt;function B(){}function V(e,t,r,n){return mt(e,n)||bt(e,t,r,n)}function mt(e,t){return e.editor.getModel(me(e,t))}function bt(e,t,r,n){return e.editor.createModel(t,r,n?me(e,n):void 0)}function me(e,t){return e.Uri.parse(t)}function wt({original:e,modified:t,language:r,originalLanguage:n,modifiedLanguage:o,originalModelPath:i,modifiedModelPath:u,keepCurrentOriginalModel:g=!1,keepCurrentModifiedModel:h=!1,theme:m="light",loading:E="Loading...",options:S={},height:q="100%",width:L="100%",className:F,wrapperProps:p={},beforeMount:R=B,onMount:I=B}){let[b,_]=a.useState(!1),[T,w]=a.useState(!0),y=a.useRef(null),v=a.useRef(null),k=a.useRef(null),O=a.useRef(I),l=a.useRef(R),A=a.useRef(!1);ie(()=>{let c=ee.init();return c.then(f=>(v.current=f)&&w(!1)).catch(f=>(f==null?void 0:f.type)!=="cancelation"&&console.error("Monaco initialization: error:",f)),()=>y.current?U():c.cancel()}),M(()=>{if(y.current&&v.current){let c=y.current.getOriginalEditor(),f=V(v.current,e||"",n||r||"text",i||"");f!==c.getModel()&&c.setModel(f)}},[i],b),M(()=>{if(y.current&&v.current){let c=y.current.getModifiedEditor(),f=V(v.current,t||"",o||r||"text",u||"");f!==c.getModel()&&c.setModel(f)}},[u],b),M(()=>{let c=y.current.getModifiedEditor();c.getOption(v.current.editor.EditorOption.readOnly)?c.setValue(t||""):t!==c.getValue()&&(c.executeEdits("",[{range:c.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),c.pushUndoStop())},[t],b),M(()=>{var c,f;(f=(c=y.current)==null?void 0:c.getModel())==null||f.original.setValue(e||"")},[e],b),M(()=>{let{original:c,modified:f}=y.current.getModel();v.current.editor.setModelLanguage(c,n||r||"text"),v.current.editor.setModelLanguage(f,o||r||"text")},[r,n,o],b),M(()=>{var c;(c=v.current)==null||c.editor.setTheme(m)},[m],b),M(()=>{var c;(c=y.current)==null||c.updateOptions(S)},[S],b);let K=a.useCallback(()=>{var C;if(!v.current)return;l.current(v.current);let c=V(v.current,e||"",n||r||"text",i||""),f=V(v.current,t||"",o||r||"text",u||"");(C=y.current)==null||C.setModel({original:c,modified:f})},[r,t,o,e,n,i,u]),J=a.useCallback(()=>{var c;!A.current&&k.current&&(y.current=v.current.editor.createDiffEditor(k.current,{automaticLayout:!0,...S}),K(),(c=v.current)==null||c.editor.setTheme(m),_(!0),A.current=!0)},[S,m,K]);a.useEffect(()=>{b&&O.current(y.current,v.current)},[b]),a.useEffect(()=>{!T&&!b&&J()},[T,b,J]);function U(){var f,C,D,z;let c=(f=y.current)==null?void 0:f.getModel();g||((C=c==null?void 0:c.original)==null||C.dispose()),h||((D=c==null?void 0:c.modified)==null||D.dispose()),(z=y.current)==null||z.dispose()}return N.createElement(ve,{width:L,height:q,isEditorReady:b,loading:E,_ref:k,className:F,wrapperProps:p})}var yt=wt;a.memo(yt);function Ot(){let[e,t]=a.useState(ee.__getMonacoInstance());return ie(()=>{let r;return e||(r=ee.init(),r.then(n=>{t(n)})),()=>r==null?void 0:r.cancel()}),e}var jt=Ot;function Mt(e){let t=a.useRef();return a.useEffect(()=>{t.current=e},[e]),t.current}var Et=Mt,X=new Map;function St({defaultValue:e,defaultLanguage:t,defaultPath:r,value:n,language:o,path:i,theme:u="light",line:g,loading:h="Loading...",options:m={},overrideServices:E={},saveViewState:S=!0,keepCurrentModel:q=!1,width:L="100%",height:F="100%",className:p,wrapperProps:R={},beforeMount:I=B,onMount:b=B,onChange:_,onValidate:T=B}){let[w,y]=a.useState(!1),[v,k]=a.useState(!0),O=a.useRef(null),l=a.useRef(null),A=a.useRef(null),K=a.useRef(b),J=a.useRef(I),U=a.useRef(),c=a.useRef(n),f=Et(i),C=a.useRef(!1),D=a.useRef(!1);ie(()=>{let s=ee.init();return s.then(d=>(O.current=d)&&k(!1)).catch(d=>(d==null?void 0:d.type)!=="cancelation"&&console.error("Monaco initialization: error:",d)),()=>l.current?be():s.cancel()}),M(()=>{var d,j,H,$;let s=V(O.current,e||n||"",t||o||"",i||r||"");s!==((d=l.current)==null?void 0:d.getModel())&&(S&&X.set(f,(j=l.current)==null?void 0:j.saveViewState()),(H=l.current)==null||H.setModel(s),S&&(($=l.current)==null||$.restoreViewState(X.get(i))))},[i],w),M(()=>{var s;(s=l.current)==null||s.updateOptions(m)},[m],w),M(()=>{!l.current||n===void 0||(l.current.getOption(O.current.editor.EditorOption.readOnly)?l.current.setValue(n):n!==l.current.getValue()&&(D.current=!0,l.current.executeEdits("",[{range:l.current.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),l.current.pushUndoStop(),D.current=!1))},[n],w),M(()=>{var d,j;let s=(d=l.current)==null?void 0:d.getModel();s&&o&&((j=O.current)==null||j.editor.setModelLanguage(s,o))},[o],w),M(()=>{var s;g!==void 0&&((s=l.current)==null||s.revealLine(g))},[g],w),M(()=>{var s;(s=O.current)==null||s.editor.setTheme(u)},[u],w);let z=a.useCallback(()=>{var s;if(!(!A.current||!O.current)&&!C.current){J.current(O.current);let d=i||r,j=V(O.current,n||e||"",t||o||"",d||"");l.current=(s=O.current)==null?void 0:s.editor.create(A.current,{model:j,automaticLayout:!0,...m},E),S&&l.current.restoreViewState(X.get(d)),O.current.editor.setTheme(u),g!==void 0&&l.current.revealLine(g),y(!0),C.current=!0}},[e,t,r,n,o,i,m,E,S,u,g]);a.useEffect(()=>{w&&K.current(l.current,O.current)},[w]),a.useEffect(()=>{!v&&!w&&z()},[v,w,z]),c.current=n,a.useEffect(()=>{var s,d;w&&_&&((s=U.current)==null||s.dispose(),U.current=(d=l.current)==null?void 0:d.onDidChangeModelContent(j=>{D.current||_(l.current.getValue(),j)}))},[w,_]),a.useEffect(()=>{if(w){let s=O.current.editor.onDidChangeMarkers(d=>{var H;let j=(H=l.current.getModel())==null?void 0:H.uri;if(j&&d.find($=>$.path===j.path)){let $=O.current.editor.getModelMarkers({resource:j});T==null||T($)}});return()=>{s==null||s.dispose()}}return()=>{}},[w,T]);function be(){var s,d;(s=U.current)==null||s.dispose(),q?S&&X.set(i,l.current.saveViewState()):(d=l.current.getModel())==null||d.dispose(),l.current.dispose()}return N.createElement(ve,{width:L,height:F,isEditorReady:w,loading:h,_ref:A,className:p,wrapperProps:R})}var Pt=St,Ct=a.memo(Pt);const xt={"windows-1252":new Set(["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~","DEL","€","‚","ƒ","„","…","†","‡","ˆ","‰","Š","‹","Œ","Ž","‘","’","“","”","•","–","—","˜","™","š","›","œ","ž","Ÿ"," ","¡","¢","£","¤","¥","¦","§","¨","©","ª","«","¬","SHY","®","¯","°","±","²","³","´","µ","¶","·","¸","¹","º","»","¼","½","¾","¿","À","Á","Â","Ã","Ä","Å","Æ","Ç","È","É","Ê","Ë","Ì","Í","Î","Ï","Ð","Ñ","Ò","Ó","Ô","Õ","Ö","×","Ø","Ù","Ú","Û","Ü","Ý","Þ","ß","à","á","â","ã","ä","å","æ","ç","è","é","ê","ë","ì","í","î","ï","ð","ñ","ò","ó","ô","õ","ö","÷","ø","ù","ú","û","ü","ý","þ","ÿ"])},Rt=(e,t)=>{const r={};if(t==="utf-8")return r;const n=xt[t];return e.split(`
`).forEach((o,i)=>{for(let u of o)u===`
`||u==="\r"||n.has(u)||(Object.keys(r).includes(u)?r[u].includes(i)||(r[u]=[...r[u],i]):r[u]=[i])}),r};function It(e){let t=new Set;for(let r of Object.values(e))r.forEach(n=>t.add(n));return Array.from(t)}const At=()=>{const{inputText:e,setInputText:t,foreignChars:r,setForeignChars:n,settings:{textEncoding:o}}=a.useContext(ye),[i,u]=a.useState([]),[g,h]=a.useState(!1),m=a.useRef(null),E=jt();a.useEffect(()=>{E&&we(()=>import("./GitHub Dark-6a30d475.js"),[]).then(p=>{E.editor.defineTheme("github-dark",p)}).then(()=>h(!0))},[E]);const S=a.useCallback(p=>{m.current=p},[]),q=p=>({options:{isWholeLine:!0,className:"bg-red-500"},range:new E.Range(p+1,1,p+1,1)}),L=a.useCallback(()=>{if(!E||!m.current)return;const p=Rt(e,o),R=It(p).map(I=>q(I));n(p),u(m.current.deltaDecorations(i,R))},[e,o]);a.useEffect(()=>{L()},[L]);const F=a.useCallback(p=>{t(p)},[]);return P.jsx(P.Fragment,{children:g&&P.jsxs("div",{children:[P.jsx(Ct,{value:e,className:"h-full w-full",height:window.innerHeight-300,theme:"github-dark",options:{minimap:{enabled:!1}},onMount:S,onChange:p=>F(p)}),P.jsxs("div",{className:"py-2 bg-base-200 px-5 h-32 overflow-y-scroll",children:[P.jsxs("div",{children:["Illegal characters (for ",o," encoding): "]}),P.jsx("div",{children:Object.keys(r).length>0?Object.keys(r).map((p,R)=>P.jsxs("div",{children:[P.jsx("span",{className:"text-yellow-400",children:p})," on line",r[p].length>1?"s: ":": ",r[p].map((I,b)=>P.jsxs("span",{children:[P.jsx("span",{className:"text-red-500",children:I+1}),b<r[p].length-1?", ":""]},`illegal-character-line-number-${b}`))]},`illegal-character-${R}`)):P.jsx("span",{className:"text-green-500",children:"None ✅"})})]})]})})};export{At as default};
