import{j as l}from"./app-d17d0cc2.js";const b=(e,t)=>e.length===0||t<0?[]:e.map(r=>r.length>t?r[t]:""),n=(e,t,r)=>{if(typeof e=="string"){r(s=>s.map(()=>!0));return}r(s=>{const a=[...s];return t.ctrlKey||t.metaKey?a[e]=!a[e]:(a.fill(!1),a[e]=!0),a})},i=({isSelected:e,columnIndex:t,setSelectedColumns:r})=>{const s=e?{cellText:"",tdClassName:"bg-gray-600 text-white",btnClassName:"btn-primary",btnText:"Selected"}:{tdClassName:"bg-base-100",btnClassName:"btn-secondary",btnText:"Pick"};return l.jsxs("td",{onClick:a=>n(t-1,a,r),className:`w-40 cursor-pointer select-none border-x border-gray-600 text-center outline outline-1 -outline-offset-1 outline-gray-600 ${s.tdClassName}`,children:[l.jsx("div",{className:"pb-1",children:`Column ${t}`}),l.jsx("button",{className:`btn btn-xs ${s.btnClassName}`,children:s.btnText})]})},c=Object.freeze(Object.defineProperty({__proto__:null,default:i},Symbol.toStringTag,{value:"Module"}));export{i as T,c as a,b as e,n as p};
