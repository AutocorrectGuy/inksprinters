import{r as h,j as l}from"./app-d17d0cc2.js";import{u}from"./ExcelToTextContext-55bccc66.js";import{l as p}from"./lineSpacingHandler-c2184f67.js";const g=({handleNextStep:n})=>{const{workBook:s,sheetName:r,setSheetName:o,setSheetData:c,setEditorText:m,setColumnValues:x,appSettings:i}=u();h.useEffect(()=>o(r??s.sheetNames[0]),[]);const f=t=>{const e=s.sheets[t],a=e.length>1?1:2;a===1?(o(t),c(e)):(x(e[0]),m(p(i,e[0]))),n(a)};return l.jsx("div",{className:"flex h-full flex-col",children:l.jsx("div",{className:`flex flex-grow overflow-y-auto ${s.sheetNames.length>5?"":"items-center"}`,children:l.jsx("div",{className:"flex w-full flex-col",children:s.sheetNames.map((t,e)=>l.jsx("button",{onClick:()=>f(t),className:"btn btn-lg m-4 my-2",children:t},`worksheet-name-${e}`))})})})};export{g as default};
