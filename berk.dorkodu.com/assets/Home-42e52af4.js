import{r as n,c as Q,g as m,a as I,b as K,R as z,L as X,d as Z,e as c,j as e,B as p,C as f,_ as q,u as Y,G as h,I as ee,S as E,T as d,A as j,D as re,f as ae,h as oe}from"./index-58909b44.js";import{S as D,L as i}from"./commons-deab9e9f.js";import{S as te}from"./story-6ec1936a.js";import{T as y}from"./Title-c90c911a.js";import{U as se,B as ne}from"./Button-a5791492.js";import{B as u}from"./Badge-193557ff.js";import{I as ie,a as ce,b as le}from"./IconBrandTwitter-94c61bbc.js";import"./ThemeIcon-245e102f.js";var de=Object.defineProperty,he=Object.defineProperties,me=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,ge=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable,M=(r,a,o)=>a in r?de(r,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[a]=o,b=(r,a)=>{for(var o in a||(a={}))ge.call(a,o)&&M(r,o,a[o]);if(C)for(var o of C(a))pe.call(a,o)&&M(r,o,a[o]);return r},P=(r,a)=>he(r,me(a));const ue=["subtle","filled","outline","light","default","transparent","gradient"],g={xs:n(18),sm:n(22),md:n(28),lg:n(34),xl:n(44)};function xe({variant:r,theme:a,color:o,gradient:t}){const s=a.fn.variant({color:o,variant:r,gradient:t});return r==="gradient"?{border:0,backgroundImage:s.background,color:s.color,"&:hover":a.fn.hover({backgroundSize:"200%"})}:ue.includes(r)?b({border:`${n(1)} solid ${s.border}`,backgroundColor:s.background,color:s.color},a.fn.hover({backgroundColor:s.hover})):null}var fe=Q((r,{radius:a,color:o,gradient:t},{variant:s,size:l})=>({root:P(b({position:"relative",borderRadius:r.fn.radius(a),padding:0,lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center",height:m({size:l,sizes:g}),minHeight:m({size:l,sizes:g}),width:m({size:l,sizes:g}),minWidth:m({size:l,sizes:g})},xe({variant:s,theme:r,color:o,gradient:t})),{"&:active":r.activeStyles,"& [data-action-icon-loader]":{maxWidth:"70%"},"&:disabled, &[data-disabled]":{color:r.colors.gray[r.colorScheme==="dark"?6:4],cursor:"not-allowed",backgroundColor:s==="transparent"?void 0:r.fn.themeColor("gray",r.colorScheme==="dark"?8:1),borderColor:s==="transparent"?void 0:r.fn.themeColor("gray",r.colorScheme==="dark"?8:1),backgroundImage:"none",pointerEvents:"none","&:active":{transform:"none"}},"&[data-loading]":{pointerEvents:"none","&::before":P(b({content:'""'},r.fn.cover(n(-1))),{backgroundColor:r.colorScheme==="dark"?r.fn.rgba(r.colors.dark[7],.5):"rgba(255, 255, 255, .5)",borderRadius:r.fn.radius(a),cursor:"not-allowed"})}})}));const ve=fe;var je=Object.defineProperty,x=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,B=(r,a,o)=>a in r?je(r,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[a]=o,O=(r,a)=>{for(var o in a||(a={}))A.call(a,o)&&B(r,o,a[o]);if(x)for(var o of x(a))N.call(a,o)&&B(r,o,a[o]);return r},ye=(r,a)=>{var o={};for(var t in r)A.call(r,t)&&a.indexOf(t)<0&&(o[t]=r[t]);if(r!=null&&x)for(var t of x(r))a.indexOf(t)<0&&N.call(r,t)&&(o[t]=r[t]);return o};const be={color:"gray",size:"md",variant:"subtle"},T=I.forwardRef((r,a)=>{const o=K("ActionIcon",be,r),{className:t,color:s,children:l,radius:L,size:F,variant:k,gradient:R,disabled:w,loaderProps:G,loading:S,unstyled:_,__staticSelector:H}=o,V=ye(o,["className","color","children","radius","size","variant","gradient","disabled","loaderProps","loading","unstyled","__staticSelector"]),{classes:W,cx:$,theme:U}=ve({radius:L,color:s,gradient:R},{name:["ActionIcon",H],unstyled:_,size:F,variant:k}),J=z.createElement(X,O({color:U.fn.variant({color:s,variant:k}).color,size:"100%","data-action-icon-loader":!0},G));return z.createElement(se,O({className:$(W.root,t),ref:a,disabled:w,"data-disabled":w||void 0,"data-loading":S||void 0,unstyled:_},V),S?J:l)});T.displayName="@mantine/core/ActionIcon";const Ie=Z(T);var ke=c("brand-instagram","IconBrandInstagram",[["path",{d:"M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z",key:"svg-0"}],["path",{d:"M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-1"}],["path",{d:"M16.5 7.5l0 .01",key:"svg-2"}]]),we=c("brand-telegram","IconBrandTelegram",[["path",{d:"M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4",key:"svg-0"}]]),Se=c("briefcase","IconBriefcase",[["path",{d:"M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2",key:"svg-1"}],["path",{d:"M12 12l0 .01",key:"svg-2"}],["path",{d:"M3 13a20 20 0 0 0 18 0",key:"svg-3"}]]),_e=c("code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]]),ze=c("globe","IconGlobe",[["path",{d:"M7 9a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M5.75 15a8.015 8.015 0 1 0 9.25 -13",key:"svg-1"}],["path",{d:"M11 17v4",key:"svg-2"}],["path",{d:"M7 21h8",key:"svg-3"}]]),Ce=c("mail","IconMail",[["path",{d:"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z",key:"svg-0"}],["path",{d:"M3 7l9 6l9 -6",key:"svg-1"}]]),Me=c("school","IconSchool",[["path",{d:"M22 9l-10 -4l-10 4l10 4l10 -4v6",key:"svg-0"}],["path",{d:"M6 10.6v5.4a6 3 0 0 0 12 0v-5.4",key:"svg-1"}]]);const Pe=e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",children:[e.jsx("circle",{cx:"18",cy:"18",r:"18",fill:"#88C9F9"}),e.jsx("path",{fill:"#5C913B",d:"M30.13 23.748c-1.017-.39-.836-.248-1.463-1.581c-.627-1.332-1.007-1.761-2.417-1.917c-1.411-.155-1.358-.045-1.75-.75c-.392-.706-1.982.191-3 .584c-1.021.392-.769 1.246-1.083 1.166a4.831 4.831 0 0 1-1.893-.907c-.784-.628.583-1.118.976-1.509c.393-.393-.74-.179-1.133-.416c-.393-.234-1.096.471-1.723-.158c-.628-.627-.235-1.568-.313-2.352c-.079-.785 1.018-.941 1.724-1.098c.705-.156 1.253.001 1.253.941c0 .941.863 1.255.628.156s.235-1.411.55-1.96c.313-.549.862-1.334 1.567-2.51c.706-1.176 1.177-.628 2.039-.544c.863.085 1.098-.083 1.725-.004c.625.079 0-.784.236-1.646c.234-.862 1.097-.706 1.961-.47c.862.235-.864-1.099-1.177-1.804c-.315-.706-1.177 0-1.724-1.176c-.553-1.176-1.324-1.937-2.03-2.042c-.706-.106.225 1.494-.324 2.356c-.551.862-1.395.727-2.26.727c-.861 0-1.661-.727-1.033-1.825c.626-1.097 1.823-.984 2.45-1.925c.628-.94-2.23-.854-3.25-1.167c-1.02-.314-2.244-.311-3.263.473c-1.02.783-3.201 1.028-4.064 1.341c-.862.313-1.017-.52-1.173-1.148c-.07-.279-.388-.367-.836-.357a18.08 18.08 0 0 0-5.666 4.921c.237.807 1.385-.189 1.61-.414c.235-.235 1.411.079 1.567.941c.157.862.079 1.805-.234 2.589c-.314.783.784 1.881 1.411 2.979c.628 1.099 1.333 1.098 1.647 1.098c.313 0 2.117.706 2.038 1.568c-.078.863 1.647 1.646 2.353 2.195c.706.551 1.152 1.092 2.068 1.25c.917.158 1.989 1.657 2.459 1.815c.361.12.972.697 1.341.876c-.485.614-1.424 1.875-1.424 2.456c0 .786 1.025 2.021 1.417 2.334c.391.312 1.517.55 1.75 1.333c.236.784-.164 3.423-.868 4.128c-.708.705-.965 2.372-.965 2.372s.249.541 1.083 0C21.839 34.07 23.383 32.37 24 32a20.768 20.768 0 0 0 3.417-2.583c1.098-1.019.7-1.733 1.25-2.75c.549-1.019 1.259-.973 2.199-1.833c.942-.864.284-.693-.736-1.086z"})]}),Be=e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",children:[e.jsx("path",{fill:"#FFCC4D",d:"M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18S8.059 0 18 0s18 8.059 18 18"}),e.jsx("circle",{cx:"7",cy:"18",r:"5",fill:"#FF7892"}),e.jsx("circle",{cx:"29",cy:"18",r:"5",fill:"#FF7892"}),e.jsx("path",{fill:"#664500",d:"M27.335 21.629a.501.501 0 0 0-.635-.029c-.039.029-3.922 2.9-8.7 2.9c-4.766 0-8.662-2.871-8.7-2.9a.5.5 0 0 0-.729.657C8.7 22.472 11.788 27.5 18 27.5s9.301-5.028 9.429-5.243a.499.499 0 0 0-.094-.628zM7.999 15a1 1 0 0 1-.893-1.448C7.158 13.448 8.424 11 12 11c3.577 0 4.842 2.449 4.894 2.553a1 1 0 0 1-1.783.906C15.068 14.379 14.281 13 12 13c-2.317 0-3.099 1.433-3.106 1.447a.998.998 0 0 1-.895.553zm20.002 0a1 1 0 0 1-.896-.553C27.08 14.401 26.299 13 24 13s-3.08 1.401-3.112 1.46c-.26.481-.859.67-1.345.42a.994.994 0 0 1-.438-1.328C19.157 13.449 20.423 11 24 11s4.843 2.449 4.895 2.553A1 1 0 0 1 28.001 15z"})]}),Oe=e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36",children:[e.jsx("path",{fill:"#DD2E44",d:"M35.885 11.833c0-5.45-4.418-9.868-9.867-9.868c-3.308 0-6.227 1.633-8.018 4.129c-1.791-2.496-4.71-4.129-8.017-4.129c-5.45 0-9.868 4.417-9.868 9.868c0 .772.098 1.52.266 2.241C1.751 22.587 11.216 31.568 18 34.034c6.783-2.466 16.249-11.447 17.617-19.959c.17-.721.268-1.469.268-2.242z"}),e.jsx("path",{fill:"#FDCB58",d:"m34.347 23.894l-3.824-1.416l-1.416-3.824a1 1 0 0 0-1.876-.001l-1.416 3.824l-3.824 1.416a1.001 1.001 0 0 0 0 1.876l3.824 1.416l1.416 3.824a1 1 0 0 0 1.876 0l1.416-3.824l3.824-1.416a1.001 1.001 0 0 0 0-1.875zm-23-16.001l-2.365-.875l-.875-2.365a1 1 0 0 0-1.876 0l-.876 2.365l-2.364.875a1 1 0 0 0 0 1.876l2.365.875l.875 2.365a1 1 0 0 0 1.876 0l.875-2.365l2.365-.875a1 1 0 0 0 0-1.876z"})]}),v=({size:r="auto",emoji:a})=>e.jsx(p,{w:r,h:r,children:a}),Ee=I.lazy(()=>q(()=>import("./Highlights-4ad2bbe1.js"),["assets/Highlights-4ad2bbe1.js","assets/index-58909b44.js","assets/Paper-9f3d08c8.js","assets/ThemeIcon-245e102f.js","assets/IconBrandTwitter-94c61bbc.js","assets/commons-deab9e9f.js","assets/Title-c90c911a.js","assets/Button-a5791492.js"]));function Ke(){return e.jsxs(f,{children:[e.jsx(De,{}),e.jsx(Ne,{}),e.jsx(Ae,{}),e.jsx(Fe,{}),e.jsx(Ee,{}),e.jsx(Le,{})]})}const De=()=>{const r=Y();return e.jsx(D,{size:1,content:[e.jsx(h,{p:10,spacing:10,position:"right",children:e.jsx(ee,{src:"/images/berk-student.jpg",maw:320,mah:320,radius:8})}),e.jsxs(E,{spacing:0,maw:500,mx:"auto",children:[e.jsx(y,{order:1,weight:800,size:36,sx:{letterSpacing:-1},children:"Hello, world!"}),e.jsx(y,{order:2,weight:600,size:20,color:"dimmed",children:"Welcome to my personal website."}),e.jsxs(d,{mt:12,size:"md",children:["I'm Berk Remzi, a ",e.jsx("b",{children:"Creator"}),", ",e.jsx("b",{children:"Technologist"})," and"," ",e.jsx("b",{children:"Founder"})," from ",e.jsx("b",{children:"Istanbul"}),". My focus is on software, games and business."]}),e.jsxs(i,{icon:e.jsx(d,{weight:500,size:18,children:"∗"}),center:!0,spacing:5,mt:10,children:[e.jsx(i.Item,{children:e.jsxs(d,{children:["I build products and manage our software @ ",e.jsx(j,{href:"https://dorkodu.com",color:"blue",weight:600,td:"underline",children:"Dorkodu"}),"."]})}),e.jsxs(i.Item,{children:["I design and develop video games also @ ",e.jsx(j,{href:"https://dorkodu.com",color:"blue",weight:600,td:"underline",children:"Dorkodu"}),"."]})]}),e.jsx(Re,{}),e.jsx(h,{my:5,children:e.jsx(ne,{onClick:()=>r("/portfolio"),size:"md",radius:"lg",children:"See My Portfolio"})})]})]})},Ae=()=>{const r=[{icon:e.jsx(Se,{size:32}),title:e.jsxs(e.Fragment,{children:["I'm the Co-Founder & Chief Technologist @"," ",e.jsx(j,{href:"https://dorkodu.com",color:"blue",td:"underline",children:"Dorkodu"})]}),text:"I lead our technology team, build products and software.",subtext:"We are a humane technology company to create social & gamified products and open source technology to liberate the humankind."},{icon:e.jsx(_e,{size:32}),title:"I have 6+ years of experience in software.",text:e.jsxs(e.Fragment,{children:["Full-stack · Web Development · Product",e.jsx(h,{spacing:4,mt:10,children:["TypeScript","JavaScript","React","VueJS","NextJS","Node.js","Express","Zustand","Redux","WebSockets","Socket.IO","Mantine UI","i18Next","Electron","Vite","HTML","CSS","Postgres","MySQL","SQLite","Redis","MongoDB","Nginx","Linux","Docker","C#","Unity"].map(a=>e.jsx(u,{variant:"dot",color:"gray",size:"md",children:a},a))})]})},{icon:e.jsx(Me,{size:32}),title:"I am a student @ Istanbul University",text:"I am a freshman, and I am studying Linguistics.",subtext:`
        I graduated from Vefa Lisesi, a historical and well-established high school in Istanbul 
        ∗ Computer Science, Industrial Design, Philosophy and Business.
      `},{icon:e.jsx(ze,{size:32}),title:"I want to help the future of human civilization.",text:"By contributing to critical areas like and Informatics-related fields.",subtext:"Agriculture · Water · Green Energy · AI · Space · Education · Genetics"},{icon:"",title:"",text:"",subtext:""},{icon:"",title:"",text:"",subtext:""}];return e.jsxs(f,{size:600,my:50,children:[e.jsx(y,{order:2,children:"In a nutshell"}),e.jsx(re,{mb:25}),e.jsx(E,{spacing:25,mt:10,children:r.map(a=>I.createElement(te,{...a,key:ae()}))})]})},Ne=()=>e.jsx(D,{content:[e.jsx(Te,{}),e.jsxs(p,{children:[e.jsx(u,{variant:"dot",size:"lg",mb:16,children:"My Interests"}),e.jsx(h,{maw:450,mx:"auto",spacing:8,children:[["Software","blue"],["Games","cyan"],["Artificial Intelligence","indigo"],["Theory of Knowledge","violet"],["Psychology","grape"],["UI/UX Design","orange"],["Cryptoeconomics","yellow"],["Gamification","lime"],["Decentralized Web","green"],["Semantics","teal"]].map(r=>e.jsx(u,{variant:"light",color:r[1],radius:6,size:"lg",children:r[0]},r[0]))})]})]}),Te=()=>{const r=oe();return e.jsxs(p,{py:20,pl:12,children:[e.jsxs(p,{mb:10,children:[e.jsx(u,{variant:"dot",size:"lg",my:8,children:"My Life Mission"}),e.jsx(d,{size:24,weight:800,color:r.colorScheme=="dark"?r.white:r.black,children:"Liberate the Humankind;"}),e.jsx(d,{size:20,weight:500,color:"dimmed",children:"with meaningful art & technology."})]}),e.jsxs(i,{spacing:5,center:!0,children:[e.jsx(i.Item,{icon:e.jsx(v,{size:24,emoji:Oe}),children:"Help people find and pursue their life purpose."}),e.jsx(i.Item,{icon:e.jsx(v,{size:24,emoji:Be}),children:"Create a meaningful life experience for everyone."}),e.jsx(i.Item,{icon:e.jsx(v,{size:24,emoji:Pe}),children:"Build the utopian dream of heaven on earth."})]})]})},Le=()=>e.jsx(f,{px:0}),Fe=()=>e.jsx(f,{px:0}),Re=()=>{const r=[{link:"https://twitter.com/bercrobat",icon:e.jsx(ie,{size:30})},{link:"https://instagram.com/bercrobat",icon:e.jsx(ke,{size:32})},{link:"https://github.com/berkcambaz",icon:e.jsx(ce,{size:30})},{link:"https://linkedin.com/in/berkcambaz",icon:e.jsx(le,{size:32})},{link:"https://t.me/bercrobat",icon:e.jsx(we,{size:32})},{link:"mailto:berk@dorkodu.com",icon:e.jsx(Ce,{size:30})}];return e.jsx(h,{spacing:8,my:10,children:r.map(a=>e.jsx("a",{href:a.link,target:"_blank",children:e.jsx(Ie,{variant:"default",radius:12,size:40,children:a.icon})},a.link))})};export{Te as MissionStatement,Ke as default};
