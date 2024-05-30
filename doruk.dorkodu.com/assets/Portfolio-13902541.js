import{e as g,h as j,j as e,G as t,S as a,T as s,A as d,B as c,I as u,C as l,D as p}from"./index-81431031.js";import{C as x}from"./Card-78e14871.js";import{B as k}from"./Badge-18a0ba28.js";import{S as y,L as h}from"./commons-8fdaa613.js";import{T as o}from"./Title-4a90f1f6.js";import{B as m}from"./Button-1e813f00.js";import{a as w,I as b,b as z}from"./IconBrandTwitter-d1cc6ae2.js";import{S as f}from"./SimpleGrid-7e799917.js";import"./Paper-91b27bd0.js";var I=g("external-link","IconExternalLink",[["path",{d:"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6",key:"svg-0"}],["path",{d:"M11 13l9 -9",key:"svg-1"}],["path",{d:"M15 4h5v5",key:"svg-2"}]]),v=g("link","IconLink",[["path",{d:"M9 15l6 -6",key:"svg-0"}],["path",{d:"M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464",key:"svg-1"}],["path",{d:"M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463",key:"svg-2"}]]);function B({work:i}){const n=j();return e.jsxs(x,{withBorder:!0,shadow:"xs",children:[e.jsxs(t,{position:"apart",align:"flex-start",children:[e.jsxs(a,{spacing:0,children:[e.jsx(s,{weight:750,size:"xl",children:i.company}),e.jsxs(t,{spacing:4,noWrap:!0,align:"center",children:[e.jsx(d,{href:i.link.to,color:"blue",children:i.link.text}),e.jsx(I,{size:20,color:n.fn.themeColor("blue")})]}),e.jsx(s,{mt:10,color:"dimmed",children:i.role})]}),e.jsxs(a,{spacing:2,children:[e.jsx(s,{weight:500,align:"right",size:"sm",children:i.timeFrame}),e.jsx(s,{color:"dimmed",weight:500,align:"right",size:"sm",children:i.location})]})]}),e.jsx(c,{my:16,children:i.description}),e.jsx(t,{mt:8,spacing:4,align:"center",children:i.tags.map(r=>e.jsx(k,{color:"green",radius:5,size:"md",variant:"light",children:r},r))})]})}function S({edu:i}){return e.jsx(c,{maw:400,children:e.jsxs(x,{withBorder:!0,shadow:"xs",py:"sm",px:"md",children:[e.jsxs(t,{spacing:8,noWrap:!0,align:"center",position:"apart",children:[e.jsxs(a,{spacing:2,children:[e.jsx(s,{weight:750,size:"lg",children:i.place}),e.jsx(s,{color:"dimmed",weight:600,children:i.role})]}),e.jsx(u,{src:i.image,maw:60,mah:60,radius:4})]}),e.jsxs(t,{position:"apart",mt:"md",spacing:2,children:[e.jsx(s,{size:"sm",weight:450,children:i.timeFrame}),e.jsx(s,{color:"dimmed",weight:500,size:"sm",children:i.status})]})]})})}function P({project:i}){const n=j();return e.jsx(c,{maw:400,children:e.jsxs(x,{withBorder:!0,shadow:"xs",py:"sm",px:"md",children:[e.jsxs(a,{spacing:2,children:[e.jsx(s,{weight:750,size:"lg",children:i.title}),e.jsx(s,{color:"dimmed",weight:600,children:i.tagline}),e.jsxs(t,{mt:5,spacing:8,align:"center",children:[e.jsx(v,{color:n.fn.themeColor("blue")}),i.links.map(r=>e.jsx(d,{title:r.text,href:r.to,target:"_blank",color:"blue",td:"underline",weight:500,children:r.text},r.to))]})]}),i.description,e.jsx(a,{spacing:8,my:10,children:i.workList.map(r=>e.jsxs(t,{spacing:6,noWrap:!0,children:[e.jsx(s,{weight:500,size:16,children:"∗"}),e.jsx(s,{size:"sm",children:r})]},r))}),e.jsx(t,{mt:16,spacing:4,align:"center",children:i.tags.map(r=>e.jsx(k,{color:"green",radius:5,size:"md",variant:"light",children:r},r))})]})})}const M=[{company:"Dorkodu",role:"Founder & Chief",description:`
      I founded Dorkodu to create social & gamified productivity apps, 
      also build open-source technology on decentralized web, semantic data, cryptoeconomics.
    `,timeFrame:"June 2018 – Present",location:"Istanbul, TR",link:{text:"dorkodu.com",to:"https://dorkodu.com"},tags:["Software Engineering (Web)","UI/UX Design","Graphics","Business","Product Management","Marketing","Social Media"]}],D=[{place:"Boğaziçi University",role:"BA, Primary Education",timeFrame:"2023 – Present",status:"Freshman",image:"/images/logo-bogazici.png"},{place:"Vefa Lisesi",role:"High School",timeFrame:"2018 – 2023",status:"3.85/4.0 GPA",image:"/images/logo-vefa.png"}],L=[{title:"Wander",tagline:"Decentralized Knowledge Protocol",description:e.jsx(e.Fragment,{}),links:[{text:"Website",to:"https://wander.dorkodu.com"},{text:"GitHub",to:"https://github.com/dorkodu/protocol"}],workList:["Designed and wrote specifications/docs.","Built all-in-one SDK in TypeScript.","Implemented Decentralized Sync","Local-first offline PWA framework.","Open source maintainer.","Published package to NPM."],tags:["TypeScript","Node.js","Zustand","Postgres","Nginx","Docker"]},{title:"Mindgarden",tagline:"Social & Gamified Note-taking App",description:e.jsx(e.Fragment,{}),links:[{text:"App",to:"https://mind.dorkodu.com"},{text:"GitHub",to:"https://github.com/dorkodu/mindgarden"}],workList:["Applied gamification features on UX","Created Recommendation Algorithm","Created a new Markup Language","Built Collaborative Block-based Editor","Responsive/Adaptive UI Design ","Deployed on a self-hosted server."],tags:["TypeScript","React","Node.js","Zustand","Mantine UI","i18next","Postgres","Nginx","Docker"]}];function K(){return e.jsxs(l,{children:[e.jsx(E,{}),e.jsx(C,{}),e.jsx(T,{})]})}const E=()=>e.jsx(y,{size:1,content:[e.jsx(t,{p:10,spacing:10,position:"right",children:e.jsx(u,{src:"/images/doruk-music.jpg",maw:250,mah:250,radius:12})}),e.jsxs(a,{spacing:0,children:[e.jsx(o,{order:1,weight:800,size:36,sx:{letterSpacing:-1},children:"Portfolio"}),e.jsx(o,{order:2,weight:600,size:20,color:"dimmed",children:"My projects, skills and passion."}),e.jsxs(h,{icon:e.jsx(s,{weight:500,size:18,children:"∗"}),center:!0,spacing:5,mt:10,children:[e.jsx(h.Item,{children:e.jsxs(s,{children:["I design products and build software @ ",e.jsx(d,{href:"https://dorkodu.com",color:"blue",weight:600,td:"underline",children:"Dorkodu"}),"."]})}),e.jsxs(h.Item,{children:["I sing, write songs and play guitar @ ",e.jsx(d,{href:"https://instagram.com/theterraspark",color:"blue",weight:600,td:"underline",children:"Terraspark"}),"."]})]}),e.jsxs(t,{my:"md",spacing:"xs",children:[e.jsx(m,{component:"a",href:"https://github.com/dorukeray",target:"_blank",radius:12,color:"dark",leftIcon:e.jsx(w,{size:26}),children:"GitHub"}),e.jsx(m,{component:"a",href:"https://twitter.com/d0rukeray",target:"_blank",radius:12,color:"blue",leftIcon:e.jsx(b,{size:26}),children:"Twitter"}),e.jsx(m,{component:"a",href:"https://linkedin.com/in/dorukeray",target:"_blank",size:"sm",radius:12,color:"cyan",leftIcon:e.jsx(z,{size:26}),children:"LinkedIn"})]})]})]}),C=()=>{const i=()=>e.jsxs(l,{size:768,my:50,children:[e.jsx(o,{order:2,children:"Skills"}),e.jsx(p,{mb:25})]});return e.jsxs(l,{size:768,my:25,children:[e.jsx(o,{order:2,children:"Resume"}),e.jsx(p,{mb:25}),e.jsx(s,{my:25,color:"dimmed",children:"Cover letter will be here."}),e.jsxs(c,{my:25,children:[e.jsx(o,{order:3,children:"Work Experience"}),e.jsx(s,{children:"I am an indie hacker, so I only worked freelance or for our own startup."}),e.jsx(a,{my:20,spacing:16,children:M.map(n=>e.jsx(B,{work:n},n.timeFrame))})]}),e.jsxs(c,{my:40,children:[e.jsx(o,{order:3,children:"Education"}),e.jsxs(s,{children:["I've always learnt independent from school, as a ",e.jsx("b",{children:"self-taught"}),"."]}),e.jsx(f,{my:20,breakpoints:[{cols:2,minWidth:640}],children:D.map(n=>e.jsx(S,{edu:n},n.timeFrame))})]}),e.jsx(i,{})]})},T=()=>e.jsxs(l,{size:768,my:50,children:[e.jsx(o,{order:2,children:"Projects"}),e.jsx(p,{mb:25}),e.jsx(f,{breakpoints:[{cols:2,minWidth:720}],children:L.map(i=>e.jsx(P,{project:i},i.title))})]});export{K as default};
