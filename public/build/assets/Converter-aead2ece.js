import{W as O,r as o,j as e,a as D,b as F}from"./app-769e5196.js";import{A as I}from"./AuthenticatedLayout-d4623bbf.js";import{F as b}from"./index.es-4b25b74c.js";import{f as g}from"./index-14966fff.js";import{k as S,Q as E}from"./ReactToastify-072e765c.js";import"./ApplicationLogo-8f9bf9b0.js";import"./Dropdown-6864d083.js";import"./transition-a070e6e6.js";const w=["PDF","EPS","AI"],H=({auth:j})=>{const{data:s,setData:n}=O({file:null,from:null,to:null}),[f,r]=o.useState(!1),a=o.useRef(null),[u,i]=o.useState(!1),d=o.useRef(null),[p,x]=o.useState(null),[c,h]=o.useState(!1),N=()=>E.success(`File converted from ${s.from} to ${s.to} successfully!`,{position:"top-center",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,theme:"dark"}),y=t=>{t.preventDefault();const l=new FormData;s.file&&l.append("file",s.file),s.from&&l.append("from",s.from),s.to&&l.append("to",s.to),h(!0),F.post("/convert/filetype-via-api",l,{headers:{"Content-Type":"multipart/form-data"}}).then(m=>{window.location.href=m.data.download_url,N()}).catch(m=>console.error("Error:",m)).finally(()=>h(!1))};o.useEffect(()=>{const t=l=>{a.current&&!a.current.contains(l.target)&&r(!1),d.current&&!d.current.contains(l.target)&&i(!1)};return document.addEventListener("click",t),()=>document.removeEventListener("click",t)},[]);const v=t=>{n("from",t),r(!1)},C=t=>{n("to",t),i(!1)},k=t=>{t.target.files&&t.target.files.length>0?(n("file",t.target.files[0]),x(t.target.files[0].name)):(n("file",null),x(null))};return e.jsxs(I,{user:j.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Converter"}),children:[e.jsx(D,{title:"Converter"}),e.jsx("div",{className:"max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-8",children:e.jsxs("div",{className:"flex flex-col justify-center bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg p-4 md:p-14 ",children:[e.jsx("div",{className:"text-gray-900 dark:text-gray-300 text-center text-2xl",children:"Convert your files"}),e.jsxs("form",{className:"flex flex-col justify-center",onSubmit:y,children:[e.jsxs("div",{className:"flex items-center justify-center pt-2 my-12 flex-col md:flex-row gap-2 md:gap-0",children:[e.jsxs("div",{className:"file-input-container relative inline-block md:mr-6 w-full md:w-fit",children:[e.jsx("label",{htmlFor:"fileInput",className:"btn btn-outline mb-2 cursor-pointer h-16 px-8 border text-lg shadow-lg w-full md:w-fit",children:"Choose File"}),e.jsx("input",{id:"fileInput",type:"file",className:"file-input file-input-bordered w-full absolute opacity-0 cursor-pointer",style:{position:"absolute",top:0,left:0,height:"100%",width:"100%"},onChange:k})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"dropdown",ref:a,children:[e.jsxs("label",{tabIndex:0,className:"btn btn-lg md:mb-2",onClick:()=>r(!f),children:[s.from??"FROM",e.jsx(b,{icon:g,className:"md:ml-1 w-4 h-4 hidden md:visible"})]}),f&&e.jsx("ul",{tabIndex:0,className:"dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-52",children:w.filter(t=>t!==s.to).map(t=>e.jsx("li",{onClick:()=>v(t),children:e.jsx("a",{children:t})},t))})]}),e.jsx("div",{className:"text-xl text-gray-300 px-3 md:mb-2",children:"to"}),e.jsxs("div",{className:"dropdown",ref:d,children:[e.jsxs("label",{tabIndex:0,className:"btn btn-lg md:mb-2",onClick:()=>i(!u),children:[s.to??"TO",e.jsx(b,{icon:g,className:"md:ml-1 w-4 h-4 hidden md:visible"})]}),u&&e.jsx("ul",{tabIndex:0,className:"dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-52",children:w.filter(t=>t!==s.from).map(t=>e.jsx("li",{onClick:()=>C(t),children:e.jsx("a",{children:t})},t))})]})]}),e.jsxs("button",{type:"submit",disabled:c,className:"btn h-14 px-6 text-lg btn-primary shadow-lg md:mb-2 md:ml-6 md:mt-0 mt-2 w-full md:w-fit",children:["CONVERT",c&&"ing",c&&e.jsx("span",{className:"ml-2 loading loading-spinner loading-md"})]})]}),e.jsxs("div",{className:`mt-2 ${p?"text-gray-200":"text-gray-600"} text-center`,children:["Selected file: ",e.jsx("b",{children:p||"No file selected"})]})]})]})}),e.jsx(S,{position:"top-center",autoClose:3e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"})]})};export{H as default};
