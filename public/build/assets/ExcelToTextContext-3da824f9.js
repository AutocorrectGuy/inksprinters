import{r as t,j as u}from"./app-0839de6f.js";const p={textWrap:!1,lineSpacing:"none",textEncoding:"windows-1252"},E={textWrap:!1,lineSpacing:["none","single"],textEncoding:["windows-1252","utf-8"]},T=()=>{const e=localStorage.getItem("excel-to-text-settings");return e?JSON.parse(e):p},n={excelText:null,setExcelText:()=>{},inputText:"",setInputText:()=>{},foreignChars:{},setForeignChars:()=>{},settings:T(),setSettings:()=>{}},s=t.createContext(n),S=({children:e})=>{const[o,i]=t.useState(n.excelText),[x,a]=t.useState(n.inputText),[r,c]=t.useState({}),[l,g]=t.useState(n.settings);return u.jsx(s.Provider,{value:{excelText:o,setExcelText:i,inputText:x,setInputText:a,foreignChars:r,setForeignChars:c,settings:l,setSettings:g},children:e})},f=Object.freeze(Object.defineProperty({__proto__:null,ExcelToTextContext:s,ExcelToTextContextProvider:S},Symbol.toStringTag,{value:"Module"}));export{S as E,s as a,f as b,E as t};
