import{r as a,j as e}from"./app-bacba055.js";const x="/build/assets/daisyui-logo-white-8a83e00f.png",b="/build/assets/hostinger-logo-white-ea894a3a.png",j="/build/assets/inertia-logo-white-af7bec39.png",y="/build/assets/jetstream-logo-white-de24824c.png",$="/build/assets/laravel-logo-white-fd717a9d.png",v="/build/assets/react-logo-white-7f2f2935.png",N="/build/assets/redis-logo-white-15fca93d.png",S="/build/assets/stripe-logo-white-e967e3f2.png",R="/build/assets/tailwind-logo-white-f2ee3a60.png",B=({images:s,name:n,height:c=100,scrollSpeed:d=100,imgClassName:g="",containerClassName:u="mx-auto max-w-7xl w-full bg-black"})=>{const[i,h]=a.useState(0),o=a.useRef(null);a.useEffect(()=>{if(o.current){const l=Array.from(o.current.children).reduce((t,m,p,w)=>t+m.getBoundingClientRect().width+(p!==w.length-1?80:0),0);h(l)}},[s]);const r=[...s,...s],f=i/d;return e.jsx("div",{className:`overflow-hidden ${u}`,children:e.jsx("div",{ref:o,className:"flex",style:{width:`${i}px`,animation:`scroll ${f}s linear infinite`},children:r.map((l,t)=>e.jsx("div",{className:`flex-none ${t!==r.length-1?"mr-20":""}`,style:{height:`${c}px`},children:e.jsx("img",{src:l,alt:`Image ${t}`,className:`w-auto h-full object-cover ${g}`})},`horizontal_scroller_${n}_${t}`))})})},k=()=>e.jsxs("div",{className:"w-full pt-4 bg-black",children:[e.jsx("h3",{className:"text-neutral-400 font-semibold text-center",children:"Powered by"}),e.jsx(B,{name:"poweredBy",imgClassName:"py-8 opacity-50",containerClassName:"w-full",scrollSpeed:100,height:95,images:[x,b,j,y,$,v,N,S,R]})]}),E=k;export{E as default};
