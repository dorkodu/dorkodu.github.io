import{r as s,c as h,g as w,a as S,b as I,R as x,B as $}from"./index-81431031.js";var j=Object.defineProperty,E=Object.defineProperties,N=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?j(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))z.call(r,t)&&d(e,t,r[t]);if(c)for(var t of c(r))T.call(r,t)&&d(e,t,r[t]);return e},R=(e,r)=>E(e,N(r));const C={xs:s(16),sm:s(20),md:s(26),lg:s(32),xl:s(40)},V=["filled","light","gradient","outline","default"];function D({theme:e,variant:r,color:t,gradient:a}){if(!V.includes(r))return null;const o=e.fn.variant({variant:r,color:t||e.primaryColor,gradient:a,primaryFallback:!1});return{backgroundColor:o.background,color:o.color,backgroundImage:r==="gradient"?o.background:void 0,border:`${s(r==="gradient"?0:1)} solid ${o.border}`}}var A=h((e,{color:r,radius:t,gradient:a},{variant:o,size:l})=>{const n=w({size:l,sizes:C});return{root:f(R(f({},e.fn.fontStyles()),{display:"inline-flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",width:n,height:n,minWidth:n,minHeight:n,borderRadius:e.fn.radius(t)}),D({theme:e,variant:o,gradient:a,color:r}))}});const B=A;var H=Object.defineProperty,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?H(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,k=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&p(e,t,r[t]);if(i)for(var t of i(r))_.call(r,t)&&p(e,t,r[t]);return e},F=(e,r)=>{var t={};for(var a in e)u.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&i)for(var a of i(e))r.indexOf(a)<0&&_.call(e,a)&&(t[a]=e[a]);return t};const M={size:"md",variant:"filled"},W=S.forwardRef((e,r)=>{const t=I("ThemeIcon",M,e),{className:a,size:o,radius:l,variant:n,color:m,children:g,gradient:y,unstyled:v}=t,O=F(t,["className","size","radius","variant","color","children","gradient","unstyled"]),{classes:P,cx:b}=B({variant:n,radius:l,color:m,gradient:y},{name:"ThemeIcon",unstyled:v,variant:n,size:o});return x.createElement($,k({className:b(P.root,a),ref:r},O),g)});W.displayName="@mantine/core/ThemeIcon";export{W as T};
