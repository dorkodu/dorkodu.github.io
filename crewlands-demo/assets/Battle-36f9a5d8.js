import{k as y,r as h,j as e,F as r,I as s,i as a,T as i,A as x}from"./index-7b5acefe.js";import{u as f,g as n}from"./game-f5e190a9.js";import{B as l}from"./Button-2e435760.js";import{P as p}from"./Progress-dab0c7a7.js";import"./get-floating-position-717958fa.js";function C(){const u=y(),m=()=>{f.setState(t=>{const o={id:"1",name:"Player 1",color:a.playerColors[3]??"#000",avatar:t.data.player.avatar,banner:t.data.player.banner,character:t.data.player.character,hero:t.data.player.hero,banners:0},w={id:"2",name:"Player 2",color:a.playerColors[6]??"#fff",avatar:n.random.percent(t.data.match,Object.keys(n.avatars).map(c=>({percent:1,result:c})))??"baby",banner:n.random.percent(t.data.match,Object.keys(n.banners).map(c=>({percent:1,result:c})))??"hut",character:n.random.percent(t.data.match,Object.keys(n.characters).map(c=>({percent:1,result:c})))??"face3",hero:n.random.percent(t.data.match,Object.keys(n.heroes).map(c=>({percent:1,result:c})))??"evil",banners:0};n.events.createMatch.act(t.data,{modeProps:{mode:"competitive",width:0,height:0,players:[o,w],seed:Date.now()}}),n.events.startMatch.act(t.data,{})}),u("/game")},[d,j]=h.useState(0);return h.useLayoutEffect(()=>{const t=()=>{const o=window.innerHeight-428;j(o>0?o/2:0)};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),e.jsxs(r,{direction:"column",align:"center",justify:"center",gap:"xs",w:"100%",children:[e.jsxs(r,{gap:"xs",w:"100%",h:48,children:[e.jsx(l,{variant:"default",px:"xs",h:"auto",styles:{root:{flex:1},label:{flex:1}},children:e.jsxs(r,{align:"center",gap:"xs",w:"100%",children:[e.jsx(s,{src:a.avatars.baby,width:32}),e.jsxs(r,{direction:"column",style:{flex:1,display:"grid",gridTemplateColumns:"auto"},children:[e.jsx(i,{order:6,truncate:!0,children:"Player"}),e.jsx(i,{order:6,truncate:!0,children:"Clan"})]}),e.jsxs(r,{align:"center",children:[e.jsx(s,{src:a.misc.trophy,width:32}),e.jsx(i,{order:4,children:"999"})]})]})}),e.jsx(x,{variant:"default",w:48,h:48,children:e.jsx(s,{src:a.misc.settings,width:32})})]}),e.jsxs(r,{gap:"xs",w:"100%",h:48,children:[e.jsx(l,{variant:"default",px:"xs",h:"auto",styles:{root:{flex:1},label:{flex:1}},children:e.jsxs(r,{direction:"column",align:"center",w:"100%",children:[e.jsx(s,{src:a.misc.ticket,width:32,pos:"absolute",bottom:26}),e.jsxs(r,{justify:"space-between",w:"100%",children:[e.jsx(i,{order:6,truncate:!0,children:"Game Pass"}),e.jsx(s,{src:a.misc.trophy,width:16})]}),e.jsxs(r,{align:"center",justify:"center",w:"100%",children:[e.jsx(p,{w:"100%"}),e.jsx(i,{order:6,truncate:!0,pos:"absolute",children:"0/500"})]})]})}),e.jsx(l,{variant:"default",px:"xs",h:"auto",styles:{root:{flex:1},label:{flex:1}},children:e.jsxs(r,{direction:"column",align:"center",w:"100%",children:[e.jsx(s,{src:a.misc.scroll,width:32,pos:"absolute",bottom:32}),e.jsxs(r,{justify:"space-between",w:"100%",children:[e.jsx(i,{order:6,truncate:!0,children:"Missions"}),e.jsx(s,{src:a.misc.bullseye,width:16})]}),e.jsxs(r,{align:"center",justify:"center",w:"100%",children:[e.jsx(p,{w:"100%"}),e.jsx(i,{order:6,truncate:!0,pos:"absolute",children:"0/10"})]})]})}),e.jsx(x,{variant:"default",w:48,h:48,children:e.jsx(s,{src:a.misc.friends,width:32})})]}),e.jsxs(r,{w:128,h:128,pos:"relative",mt:d,children:[e.jsx(s,{src:a.tileTypes.grass,width:128,pos:"absolute"}),e.jsx(s,{src:a.banners.hut,width:128,pos:"absolute"}),e.jsx(s,{src:a.characters.face3,width:128,pos:"absolute",style:{transform:"scale(0.5)"}})]}),e.jsx(l,{onClick:m,w:128,h:40,mb:d,children:"Battle"})]})}export{C as default};