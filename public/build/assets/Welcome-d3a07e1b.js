import{q as o,j as e,r as l}from"./app-5337baf9.js";import{F as i,a as n}from"./index-a507f2e1.js";import{M as a}from"./MainLayout-c0836f7f.js";import"./TopNav-2b4b9fe8.js";import"./ExcelToText-2eaeb588.js";import"./ExcelToTextTrigger-74869990.js";import"./ExcelToTextContext-4c4ec1a5.js";import"./MultiStepModal-248c54cd.js";import"./StepSelectSheet-eaff055d.js";import"./lineSpacingHandler-fd100f05.js";import"./StepSelectColumns-3de37dfc.js";import"./TableHeaderCell-314dfd82.js";import"./StepEditAndExport-f4ed6c65.js";import"./TextEditorOptions-f01c4fa3.js";import"./collectForeignCharacters-97d77e93.js";import"./MonacoEditor-21407efc.js";import"./ForgeignCharTerminal-34d9837a.js";import"./useUpdateModalContentHeight-6d8c307a.js";const c="/build/assets/inksprinters-runner-5a41e09b.svg",x={boxShadow:"inset 0 0 14px rgba(0, 0, 0, 0.8)",WebkitBoxShadow:"inset 0 0 14px rgba(0, 0, 0, 0.8)",MozBoxShadow:"inset 0 0 14px rgba(0, 0, 0, 0.8)"},d=()=>{const[t,r]=l.useState("");return e.jsxs("div",{className:"relative flex w-full max-w-[750px] items-center",children:[e.jsx("img",{src:c,className:"absolute right-0 -z-10 translate-x-1/2 overflow-hidden h-[512px]"}),e.jsxs("div",{className:"flex h-40 w-full items-center rounded-[16px] bg-neutral-800 text-[#C7C3BB] outline outline-2 outline-[#666666] focus:border-[#C7C3BB] focus:outline-[#C7C3BB] focus:ring-[#C7C3BB]",style:{...x},children:[e.jsx("div",{className:"flex h-full w-40 items-center justify-center rounded-[16px]",children:e.jsx(i,{icon:n,className:"h-12 w-12 -scale-x-100 text-[#C7C3BB]"})}),e.jsxs("div",{className:"relative mr-8 w-full",children:[e.jsx("input",{onChange:s=>r(s.target.value),defaultValue:"",type:"text",autoFocus:!0,placeholder:"Type keywords here",className:`input m-0 w-full bg-neutral-800 ${t.length>0?"pt-12":"pt-4"} rounded-t-[16px] border-0 pb-12 pl-4 text-5xl
                font-medium text-[#C7C3BB] outline-none ring-0 placeholder:text-neutral-500 focus:border-0 focus:outline-none focus:ring-0`}),t.length===0&&e.jsx("div",{className:"absolute -bottom-4 left-4 text-xl font-medium text-neutral-500",children:'e.g.: "Excel Converter"'})]})]})]})},I=({auth:t})=>{const{url:r}=o();return e.jsx(a,{auth:t,children:r==="/"?e.jsx("div",{className:"flex grow flex-col items-center justify-center overflow-hidden pb-40 pr-20",children:e.jsx("div",{className:"flex w-full items-center justify-center",children:e.jsx(d,{})})}):e.jsxs("div",{className:"flex flex-col grow border my-12",children:["Content wrapper",e.jsxs("div",{className:"max-w-5xl flex flex-col grow w-full mx-auto border",children:["Content container",e.jsxs("div",{className:"flex justify-between bg-white/20 border",children:[e.jsx("div",{className:"border",children:"Crumb"}),e.jsx("div",{className:"border",children:"Nav arrows"})]}),e.jsx("h1",{className:"border bg-white/10",children:"Heading text"}),e.jsx("div",{className:"border flex flex-col grow bg-white/5",children:"content"})]})]})})};export{I as default};