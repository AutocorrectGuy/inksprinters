import{r as n,j as e,d as m}from"./app-5337baf9.js";import{A as p}from"./ApplicationLogo-dc68619d.js";import{t as y}from"./transition-b4feb3e1.js";import{F as b,b as k}from"./index-a507f2e1.js";const f=n.createContext({open:!1,setOpen:()=>{},toggleOpen:()=>{}}),h=({children:r})=>{const[t,s]=n.useState(!1),a=()=>{s(i=>!i)};return e.jsx(f.Provider,{value:{open:t,setOpen:s,toggleOpen:a},children:e.jsx("div",{className:"relative",children:r})})},j=({children:r})=>{const{open:t,setOpen:s,toggleOpen:a}=n.useContext(f);return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:a,children:r}),t&&e.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>s(!1)})]})},v=({align:r="right",width:t="48",contentClasses:s="py-1 bg-white dark:bg-gray-700",children:a})=>{const{open:i,setOpen:g}=n.useContext(f);let x="origin-top";r==="left"?x="origin-top-left left-0":r==="right"&&(x="origin-top-right right-0");let d="";return t==="48"&&(d="w-48"),e.jsx(e.Fragment,{children:e.jsx(y,{as:n.Fragment,show:i,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${x} ${d}`,onClick:()=>g(!1),children:e.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+s,children:a})})})})},N=({className:r="",children:t,...s})=>e.jsx(m,{...s,className:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-300 dark:hover:bg-gray-800 dark:focus:bg-gray-800 "+r,children:t});h.Trigger=j;h.Content=v;h.Link=N;const c=h;function w({active:r=!1,className:t="",children:s,...a}){return e.jsx(m,{...a,className:"inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(r?"border-indigo-400 text-gray-900 focus:border-indigo-700 dark:border-indigo-600 dark:text-gray-100 ":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700 dark:text-gray-400 dark:hover:border-gray-700 dark:hover:text-gray-300 dark:focus:border-gray-700 dark:focus:text-gray-300 ")+t,children:s})}function u({active:r=!1,className:t="",children:s,...a}){return e.jsx(m,{...a,className:`flex w-full items-start border-l-4 py-2 pl-3 pr-4 ${r?"border-indigo-400 bg-indigo-50 text-indigo-700 focus:border-indigo-700 focus:bg-indigo-100 focus:text-indigo-800 dark:border-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300 dark:focus:border-indigo-300 dark:focus:bg-indigo-900 dark:focus:text-indigo-200":"border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 focus:border-gray-300 focus:bg-gray-50 focus:text-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-200 dark:focus:border-gray-600 dark:focus:bg-gray-700 dark:focus:text-gray-200"} text-base font-medium transition duration-150 ease-in-out focus:outline-none ${t}`,children:s})}const L=()=>e.jsxs("footer",{className:"footer footer-center flex flex-col gap-8 rounded bg-gray-800 p-4 text-base-content",children:[e.jsx("nav",{className:"grid grid-flow-col gap-4",children:e.jsx("a",{href:"mailto:martins.sturainis.lspa@gmail.com",className:"link-hover link",children:"Contact"})}),e.jsx("aside",{children:e.jsxs("p",{className:"text-gray-500",children:["Coded and designed for educational purposes by"," ",e.jsx("a",{className:"font-bold delay-75 duration-200 hover:text-gray-300",href:"https://github.com/AutocorrectGuy",children:"AutocorrectGuy"})]})})]}),C=L,O=["admin","premium","quest"],A=[...O];function E({user:r,header:t,children:s}){const[a,i]=n.useState(!1),[g,x]=n.useState([{title:"Dashboard",routeName:"dashboard",roles:A}]),d=o=>o.includes(r.role);return e.jsxs("div",{className:"flex min-h-screen flex-col bg-gray-100 dark:bg-gray-900",children:[e.jsxs("nav",{className:"border-b border-gray-100 bg-white dark:border-gray-700 dark:bg-gray-800",children:[e.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex h-16 justify-between",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex shrink-0 items-center",children:e.jsx(m,{href:"/",children:e.jsx(p,{className:"ml-2 mt-2 block h-9 w-auto"})})}),e.jsx("div",{className:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex",children:g.filter(({roles:o})=>d(o)).map(({title:o,routeName:l})=>e.jsx(w,{href:route(l),active:route().current(l),children:o}))})]}),e.jsx("div",{className:"hidden sm:ml-6 sm:flex sm:items-center",children:e.jsx("div",{className:"relative ml-3",children:e.jsxs(c,{children:[e.jsx(c.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("button",{type:"button",className:"inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300",children:[r.name," (",r.role,")",e.jsx(b,{icon:k,className:"-mr-0.5 ml-2 h-3 w-3"})]})})}),e.jsxs(c.Content,{children:[e.jsx(c.Link,{href:route("profile.edit"),children:"Profile"}),e.jsx(c.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]})})}),e.jsx("div",{className:"-mr-2 flex items-center sm:hidden",children:e.jsx("button",{onClick:()=>i(o=>!o),className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-400 dark:focus:bg-gray-900 dark:focus:text-gray-400",children:e.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{className:a?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e.jsx("path",{className:a?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),e.jsxs("div",{className:(a?"block":"hidden")+" sm:hidden",children:[e.jsx("div",{className:"space-y-1 pb-3 pt-2",children:g.filter(({roles:o})=>d(o)).map(({title:o,routeName:l})=>e.jsx(u,{href:route(l),active:route().current(l),children:o}))}),e.jsxs("div",{className:"border-t border-gray-200 pb-1 pt-4 dark:border-gray-600",children:[e.jsxs("div",{className:"px-4",children:[e.jsx("div",{className:"text-base font-medium text-gray-800 dark:text-gray-200",children:r.name}),e.jsx("div",{className:"text-sm font-medium text-gray-500",children:r.email})]}),e.jsxs("div",{className:"mt-3 space-y-1",children:[e.jsx(u,{href:route("profile.edit"),children:"Profile"}),e.jsx(u,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})]})]}),t&&e.jsx("header",{className:"bg-white shadow dark:bg-gray-800",children:e.jsx("div",{className:"mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8",children:t})}),e.jsx("main",{className:"flex-grow",children:s}),e.jsx(C,{})]})}export{E as A};