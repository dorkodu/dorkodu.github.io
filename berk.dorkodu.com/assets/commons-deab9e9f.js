import{a as u,R as s,b as h,B as j,n as Q,c as z,o as E,g as C,k as X,j as w,C as Y}from"./index-58909b44.js";function q(e){const t=u.createContext(null);return[({children:n,value:i})=>s.createElement(t.Provider,{value:i},n),()=>{const n=u.useContext(t);if(n===null)throw new Error(e);return n}]}function J(e){return Array.isArray(e)?e:[e]}const K={gap:{type:"spacing",property:"gap"},rowGap:{type:"spacing",property:"rowGap"},columnGap:{type:"spacing",property:"columnGap"},align:{type:"identity",property:"alignItems"},justify:{type:"identity",property:"justifyContent"},wrap:{type:"identity",property:"flexWrap"},direction:{type:"identity",property:"flexDirection"}};var U=Object.defineProperty,Z=Object.defineProperties,k=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,b=(e,t,r)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ee=(e,t)=>{for(var r in t||(t={}))D.call(t,r)&&b(e,r,t[r]);if(O)for(var r of O(t))G.call(t,r)&&b(e,r,t[r]);return e},te=(e,t)=>Z(e,k(t)),re=(e,t)=>{var r={};for(var a in e)D.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&O)for(var a of O(e))t.indexOf(a)<0&&G.call(e,a)&&(r[a]=e[a]);return r};const ae={},F=u.forwardRef((e,t)=>{const r=h("Flex",ae,e),{gap:a,rowGap:n,columnGap:i,align:o,justify:l,wrap:p,direction:c,sx:y}=r,d=re(r,["gap","rowGap","columnGap","align","justify","wrap","direction","sx"]);return s.createElement(j,te(ee({},d),{sx:[{display:"flex"},f=>Q({gap:a,rowGap:n,columnGap:i,align:o,justify:l,wrap:p,direction:c},f,K),...J(y)],ref:t}))});F.displayName="@mantine/core/Flex";const[ne,ie]=q("List component was not found in tree");var se=z((e,{spacing:t,center:r})=>({itemWrapper:{ref:E("itemWrapper"),display:"inline-flex",flexDirection:"column",whiteSpace:"normal"},item:{whiteSpace:"nowrap",lineHeight:r?1:e.lineHeight,"&:not(:first-of-type)":{marginTop:C({size:t,sizes:e.spacing})},"&[data-with-icon]":{listStyle:"none",[`& .${E("itemWrapper")}`]:{display:"inline-flex",alignItems:r?"center":"flex-start",flexDirection:"row"}}},itemIcon:{display:"inline-block",verticalAlign:"middle",marginRight:e.spacing.sm}}));const oe=se;var le=Object.defineProperty,x=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,N=(e,t,r)=>t in e?le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,pe=(e,t)=>{for(var r in t||(t={}))T.call(t,r)&&N(e,r,t[r]);if(x)for(var r of x(t))W.call(t,r)&&N(e,r,t[r]);return e},ce=(e,t)=>{var r={};for(var a in e)T.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&x)for(var a of x(e))t.indexOf(a)<0&&W.call(e,a)&&(r[a]=e[a]);return r};const fe={},H=u.forwardRef((e,t)=>{const r=h("ListItem",fe,e),{className:a,children:n,icon:i}=r,o=ce(r,["className","children","icon"]),{icon:l,spacing:p,center:c,listStyleType:y,size:d,withPadding:f,classNames:v,styles:g,unstyled:P,variant:$}=ie(),m=i||l,{classes:_,cx:M}=oe({withPadding:f,listStyleType:y,center:c,spacing:p},{classNames:v,styles:g,unstyled:P,name:"List",variant:$,size:d});return s.createElement(j,pe({component:"li",className:M(_.item,a),"data-with-icon":!!m||void 0,ref:t},o),s.createElement("div",{className:_.itemWrapper},m&&s.createElement("span",{className:_.itemIcon},m),s.createElement("span",null,n)))});H.displayName="@mantine/core/ListItem";var ye=Object.defineProperty,de=Object.defineProperties,me=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,_e=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable,L=(e,t,r)=>t in e?ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ve=(e,t)=>{for(var r in t||(t={}))_e.call(t,r)&&L(e,r,t[r]);if(I)for(var r of I(t))ue.call(t,r)&&L(e,r,t[r]);return e},ge=(e,t)=>de(e,me(t)),Pe=z((e,{withPadding:t,listStyleType:r},{size:a})=>({root:ge(ve({},e.fn.fontStyles()),{listStyleType:r,color:e.colorScheme==="dark"?e.colors.dark[0]:e.black,fontSize:C({size:a,sizes:e.fontSizes}),lineHeight:e.lineHeight,margin:0,paddingLeft:t?e.spacing.xl:0,listStylePosition:"inside"})}));const we=Pe;var Oe=Object.defineProperty,S=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,R=(e,t,r)=>t in e?Oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,xe=(e,t)=>{for(var r in t||(t={}))V.call(t,r)&&R(e,r,t[r]);if(S)for(var r of S(t))A.call(t,r)&&R(e,r,t[r]);return e},Se=(e,t)=>{var r={};for(var a in e)V.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&S)for(var a of S(e))t.indexOf(a)<0&&A.call(e,a)&&(r[a]=e[a]);return r};const $e={type:"unordered",size:"md",spacing:0},B=u.forwardRef((e,t)=>{const r=h("List",$e,e),{children:a,type:n,size:i,listStyleType:o,withPadding:l,center:p,spacing:c,icon:y,className:d,styles:f,classNames:v,unstyled:g,variant:P}=r,$=Se(r,["children","type","size","listStyleType","withPadding","center","spacing","icon","className","styles","classNames","unstyled","variant"]),{classes:m,cx:_}=we({withPadding:l,listStyleType:o,center:p,spacing:c},{classNames:v,styles:f,name:"List",unstyled:g,size:i,variant:P});return s.createElement(ne,{value:{spacing:c,center:p,icon:y,listStyleType:o,size:i,withPadding:l,classNames:v,styles:f,unstyled:g,variant:P}},s.createElement(j,xe({component:n==="unordered"?"ul":"ol",className:_(m.root,d),ref:t},$),a))});B.Item=H;B.displayName="@mantine/core/List";const je=({content:e,noCenter:t=!1,size:r=1})=>{const a=X("(max-width: 720px)");return w.jsx(Y,{py:40,px:0,children:w.jsxs(F,{direction:a?"column":"row",align:t?"flex-start":"center",justify:t?"flex-start":"center",gap:20,children:[w.jsx("div",{style:{flex:r},children:e[0]}),w.jsx("div",{style:{flex:1},children:e[1]})]})})};export{F,B as L,je as S};
