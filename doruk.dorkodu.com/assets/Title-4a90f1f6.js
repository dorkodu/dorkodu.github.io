import{c as h,r as m,a as w,b as S,R as $,T as b}from"./index-81431031.js";var j=Object.defineProperty,z=Object.defineProperties,T=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,l=(e,r,t)=>r in e?j(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,x=(e,r)=>{for(var t in r||(r={}))E.call(r,t)&&l(e,t,r[t]);if(s)for(var t of s(r))N.call(r,t)&&l(e,t,r[t]);return e},H=(e,r)=>z(e,T(r));function I(e,r,t){return typeof e<"u"?e in t.headings.sizes?t.headings.sizes[e].fontSize:m(e):t.headings.sizes[r].fontSize}function R(e,r,t){return typeof e<"u"&&e in t.headings.sizes?t.headings.sizes[e].lineHeight:t.headings.sizes[r].lineHeight}var D=h((e,{element:r,weight:t,inline:n},{size:a})=>({root:H(x({},e.fn.fontStyles()),{fontFamily:e.headings.fontFamily,fontWeight:t||e.headings.sizes[r].fontWeight||e.headings.fontWeight,fontSize:I(a,r,e),lineHeight:n?1:R(a,r,e),margin:0})}));const F=D;var W=Object.defineProperty,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,f=(e,r,t)=>r in e?W(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,V=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&f(e,t,r[t]);if(i)for(var t of i(r))d.call(r,t)&&f(e,t,r[t]);return e},C=(e,r)=>{var t={};for(var n in e)p.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&i)for(var n of i(e))r.indexOf(n)<0&&d.call(e,n)&&(t[n]=e[n]);return t};const L={order:1},q=w.forwardRef((e,r)=>{const t=S("Title",L,e),{className:n,order:a,children:c,unstyled:_,size:g,weight:u,inline:v,variant:o}=t,y=C(t,["className","order","children","unstyled","size","weight","inline","variant"]),{classes:O,cx:P}=F({element:`h${a}`,weight:u,inline:v},{name:"Title",unstyled:_,variant:o,size:g});return[1,2,3,4,5,6].includes(a)?$.createElement(b,V({variant:o,component:`h${a}`,ref:r,className:P(O.root,n)},y),c):null});q.displayName="@mantine/core/Title";export{q as T};
