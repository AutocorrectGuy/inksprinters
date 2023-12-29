const i=(n,e)=>{const a=n.lineSpacing==="none"?1:2;return n.textWrap?e.map(p=>p.toString().replace(/[\r\n]+/g," ")).join(`
`.repeat(a)):e.join(`
`.repeat(a))};export{i as l};
