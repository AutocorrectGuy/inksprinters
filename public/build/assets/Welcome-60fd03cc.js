import{j as e,r as t,d,a as x}from"./app-e05131b1.js";import{W as n,a as u}from"./WindowUtilsContext-74234c51.js";import{F as m}from"./index.es-3dcf387f.js";import{e as h}from"./index-afbedc42.js";import{D as o}from"./Dropdown-b3550ccc.js";import f from"./HeroBanner-c2fadf73.js";import w from"./TrendingTracksSlider-eaff0981.js";import p from"./PoweredByScroller-12b17c92.js";import j from"./GetStartedCTA-91ab2d05.js";import"./transition-cc57b73e.js";import"./index-de35654f.js";const c=()=>e.jsxs("div",{className:"flex grow",children:[e.jsx("input",{type:"text",placeholder:"What are you looking for?",className:"grow max-w-xs border-y border-l border-r-0 border-neutral-600 rounded-l-full bg-neutral-700 w-full placeholder:text-neutral-400 h-9 text-sm lg:text-base"}),e.jsxs(o,{children:[e.jsx(o.Trigger,{children:e.jsxs("button",{type:"button",className:"text-sm lg:text-base flex items-center whitespace-nowrap font-light rounded-r-full border-y border-r border-neutral-600 text-neutral-400 bg-neutral-700 focus:outline-none transition ease-in-out duration-150 h-9 px-3 -translate-x-1",children:["Click me",e.jsx("svg",{className:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})}),e.jsx(o.Content,{contentClasses:"bg-neutral-700",children:[...Array(5)].map((r,s)=>e.jsxs(o.Link,{className:"text-neutral-200 hover:bg-neutral-600 active:bg-rose-600 focus:bg-rose-600",href:"/",children:["Option ",s+1]},`search-dropdown-value-${s}`))})]})]}),b=()=>{const{isDesktopWidth:r}=t.useContext(n);return e.jsx("div",{className:`w-full border-b border-b-neutral-800 ${r?"py-2":""}`,children:e.jsxs("div",{className:"max-w-7xl w-full mx-auto flex justify-between px-2",children:[e.jsxs("div",{className:"flex w-full gap-3 items-center",children:[e.jsx("div",{className:"lg:hidden",children:e.jsx("label",{htmlFor:"nav-drawer","aria-label":"open sidebar",className:"btn btn-square btn-ghost",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"inline-block w-6 h-6 stroke-current",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})}),e.jsxs("div",{className:"flex lg:grow items-center",children:[e.jsx(m,{icon:h,className:"w-7 h-7 mr-6 text-pink-600"}),r&&e.jsx(c,{})]})]}),e.jsxs("div",{className:"flex gap-3 items-center",children:[e.jsx(d,{href:route("login"),className:"font-semibold whitespace-nowrap text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",children:"Log in"}),e.jsx("div",{className:"border-r border-r-neutral-600 h-4 rounded-full"}),e.jsx(d,{href:route("register"),className:"font-semibold whitespace-nowrap text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500",children:"Register"})]})]})})},v=()=>{const{isDesktopWidth:r,showSecondRow:s,navbarData:a}=t.useContext(n);return r?e.jsx("div",{className:`w-full bg-neutral-800 ${s?"block":"hidden"}`,children:e.jsx("div",{className:"flex gap-8 justify-start max-w-7xl w-full mx-auto px-2 text-neutral-400 font-medium",children:a.rowTwo.map((i,l)=>e.jsx("div",{className:"py-2 border-b border-b-transparent hover:border-b-neutral-200 hover:text-neutral-200 cursor-pointer duration-100",children:i},l))})}):e.jsx("div",{className:"px-4 py-2",children:e.jsx(c,{})})},g=()=>{const{navbarData:r}=t.useContext(n);return e.jsxs("div",{className:"drawer-side",children:[e.jsx("label",{htmlFor:"nav-drawer","aria-label":"close sidebar",className:"drawer-overlay"}),e.jsx("ul",{className:"menu p-4 w-80 min-h-full bg-neutral-900",children:r.rowTwo.map((s,a)=>e.jsxs("li",{children:[e.jsx("a",{href:"#",children:s})," "]},a))})]})},N=()=>{const{isDesktopWidth:r,windowDimensions:s}=t.useContext(n),[a,i]=t.useState(0),l=t.useRef(null);return t.useEffect(()=>{l.current&&i(l.current.clientHeight)},[s]),e.jsxs("div",{children:[e.jsx("div",{ref:l,className:"py-0 fixed top-0 w-full bg-neutral-900 flex flex-col z-50",children:e.jsxs("div",{className:"drawer",children:[e.jsx("input",{id:"nav-drawer",type:"checkbox",className:"drawer-toggle"}),e.jsxs("div",{className:"drawer-content flex flex-col",children:[e.jsx(b,{}),e.jsx(v,{})]}),e.jsx(g,{})]})}),e.jsx("div",{style:{height:`${a}px`}})]})},k=N;function $(){return e.jsxs(u,{children:[e.jsx(x,{title:"Welcome"}),e.jsx(k,{}),e.jsx(f,{}),e.jsx(w,{}),e.jsx(p,{}),e.jsx(j,{})]})}export{$ as default};
