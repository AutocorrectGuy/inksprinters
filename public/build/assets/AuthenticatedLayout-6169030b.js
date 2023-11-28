import{j as e,d as l,r as g}from"./app-bacba055.js";import{A as h}from"./ApplicationLogo-4cc723ec.js";import{D as n}from"./Dropdown-491034e6.js";import{F as u}from"./index.es-249012e5.js";import{f}from"./index-1498aa60.js";function b({active:a=!1,className:s="",children:o,...t}){return e.jsx(l,{...t,className:"inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(a?"border-indigo-400 dark:border-indigo-600 text-gray-900 dark:text-gray-100 focus:border-indigo-700 ":"border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 ")+s,children:o})}function d({active:a=!1,className:s="",children:o,...t}){return e.jsx(l,{...t,className:`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${a?"border-indigo-400 dark:border-indigo-600 text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300":"border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${s}`,children:o})}const y=()=>e.jsxs("footer",{className:"footer footer-center p-4 bg-gray-800 text-base-content rounded flex flex-col gap-8",children:[e.jsx("nav",{className:"grid grid-flow-col gap-4",children:e.jsx("a",{href:"mailto:martins.sturainis.lspa@gmail.com",className:"link link-hover",children:"Contact"})}),e.jsx("aside",{children:e.jsxs("p",{className:"text-gray-500",children:["Coded and designed for educational purposes by ",e.jsx("a",{className:"font-bold hover:text-gray-300 delay-75 duration-200",href:"https://github.com/AutocorrectGuy",children:"AutocorrectGuy"})]})})]}),p=y,j=["admin","premium","quest"],k=[...j];function R({user:a,header:s,children:o}){const[t,m]=g.useState(!1),[c,v]=g.useState([{title:"Dashboard",routeName:"dashboard",roles:k},{title:"Converter",routeName:"converter",roles:["premium","admin"]}]),x=r=>r.includes(a.role);return e.jsxs("div",{className:"min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900",children:[e.jsxs("nav",{className:"bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700",children:[e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between h-16",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"shrink-0 flex items-center",children:e.jsx(l,{href:"/",children:e.jsx(h,{className:"block h-9 w-auto ml-2 mt-2"})})}),e.jsx("div",{className:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex",children:c.filter(({roles:r})=>x(r)).map(({title:r,routeName:i})=>e.jsx(b,{href:route(i),active:route().current(i),children:r}))})]}),e.jsx("div",{className:"hidden sm:flex sm:items-center sm:ml-6",children:e.jsx("div",{className:"ml-3 relative",children:e.jsxs(n,{children:[e.jsx(n.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150",children:[a.name," (",a.role,")",e.jsx(u,{icon:f,className:"ml-2 -mr-0.5 h-3 w-3"})]})})}),e.jsxs(n.Content,{children:[e.jsx(n.Link,{href:route("profile.edit"),children:"Profile"}),e.jsx(n.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]})})}),e.jsx("div",{className:"-mr-2 flex items-center sm:hidden",children:e.jsx("button",{onClick:()=>m(r=>!r),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out",children:e.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{className:t?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e.jsx("path",{className:t?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),e.jsxs("div",{className:(t?"block":"hidden")+" sm:hidden",children:[e.jsx("div",{className:"pt-2 pb-3 space-y-1",children:c.filter(({roles:r})=>x(r)).map(({title:r,routeName:i})=>e.jsx(d,{href:route(i),active:route().current(i),children:r}))}),e.jsxs("div",{className:"pt-4 pb-1 border-t border-gray-200 dark:border-gray-600",children:[e.jsxs("div",{className:"px-4",children:[e.jsx("div",{className:"font-medium text-base text-gray-800 dark:text-gray-200",children:a.name}),e.jsx("div",{className:"font-medium text-sm text-gray-500",children:a.email})]}),e.jsxs("div",{className:"mt-3 space-y-1",children:[e.jsx(d,{href:route("profile.edit"),children:"Profile"}),e.jsx(d,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})]})]}),s&&e.jsx("header",{className:"bg-white dark:bg-gray-800 shadow",children:e.jsx("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:s})}),e.jsx("main",{className:"flex-grow",children:o}),e.jsx(p,{})]})}export{R as A};
