import{r,j as e}from"./app-e05131b1.js";import{a as x}from"./ExcelToTextContext-3746a05a.js";import{c as i}from"./ExcelContentParser-78f58c95.js";import"./ReactToastify-5b1e8a10.js";const p=({handleNextStep:a})=>{const{workBook:t,workSheetName:s,setWorkSheetName:o,setCells:c}=r.useContext(x);r.useEffect(()=>{o(s??t.SheetNames[0])},[]);const n=()=>{c(i(t,s)),a()};return e.jsxs("div",{className:"h-full flex flex-col",children:[e.jsx("div",{className:`flex-grow overflow-y-auto flex ${t.SheetNames.length>5?"":"items-center"}`,children:e.jsx("div",{className:"flex flex-col w-full",children:t.SheetNames.map((l,m)=>e.jsx("button",{onClick:()=>o(l),className:`btn btn-lg m-4 my-2 ${l===s?"btn-primary":""}`,children:l},`worksheet-name-${m}`))})}),e.jsx("div",{className:"flex justify-end",children:e.jsx("button",{className:"btn btn-primary",onClick:()=>n(),children:"Next"})})]})};export{p as default};
