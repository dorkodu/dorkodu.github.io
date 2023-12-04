import{a as R,N as Ge,c as ue,m as oe,r as f,R as n,y as fe,b as K,s as me,g as ve,O as ge,B as A,f as Le,p as Ae,w as Be,o as ae}from"./index-7b5acefe.js";import{d as Ve,u as ye,b as Pe,e as He,h as Ue,o as qe,f as We,c as Xe,i as Ye,j as Ze,k as Je,m as Ke,n as Qe,p as er,q as rr,a as or,g as ar,F as tr}from"./get-floating-position-717958fa.js";const te={xs:R(3),sm:R(5),md:R(8),lg:R(12),xl:R(16)},nr=Ge({from:{backgroundPosition:"0 0"},to:{backgroundPosition:`${R(40)} 0`}});var sr=ue((e,{color:r,radius:o},{size:a})=>({root:{position:"relative",height:oe({size:a,sizes:te}),backgroundColor:e.colorScheme==="dark"?e.colors.dark[4]:e.colors.gray[2],borderRadius:e.fn.radius(o),overflow:"hidden"},bar:{position:"absolute",top:0,bottom:0,left:0,height:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:e.fn.variant({variant:"filled",primaryFallback:!1,color:r||e.primaryColor}).background,transition:"width 100ms linear","&[data-animate]":{animation:`${nr} 1000ms linear infinite`},"&[data-striped]":{backgroundSize:`${R(20)} ${R(20)}`,backgroundImage:"linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)"},"&:last-of-type":{borderTopRightRadius:e.fn.radius(o),borderBottomRightRadius:e.fn.radius(o)},"&:first-of-type":{borderTopLeftRadius:e.fn.radius(o),borderBottomLeftRadius:e.fn.radius(o)},"@media (prefers-reduced-motion)":{transitionDuration:e.respectReducedMotion?"0ms":void 0}},label:{color:e.white,fontSize:`calc(${oe({size:a,sizes:te})} * 0.65)`,fontWeight:700,userSelect:"none",overflow:"hidden",whiteSpace:"nowrap"}}));const lr=sr,be=f.createContext(!1),ir=be.Provider,cr=()=>f.useContext(be);function we({children:e,openDelay:r=0,closeDelay:o=0}){return n.createElement(ir,{value:!0},n.createElement(Ve,{delay:{open:r,close:o}},e))}we.displayName="@mantine/core/TooltipGroup";var pr=Object.defineProperty,dr=Object.defineProperties,ur=Object.getOwnPropertyDescriptors,ne=Object.getOwnPropertySymbols,fr=Object.prototype.hasOwnProperty,mr=Object.prototype.propertyIsEnumerable,se=(e,r,o)=>r in e?pr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,le=(e,r)=>{for(var o in r||(r={}))fr.call(r,o)&&se(e,o,r[o]);if(ne)for(var o of ne(r))mr.call(r,o)&&se(e,o,r[o]);return e},vr=(e,r)=>dr(e,ur(r));function gr(e,r){if(!r)return{backgroundColor:e.colorScheme==="dark"?e.colors.gray[2]:e.colors.gray[9],color:e.colorScheme==="dark"?e.black:e.white};const o=e.fn.variant({variant:"filled",color:r,primaryFallback:!1});return{backgroundColor:o.background,color:o.color}}var yr=ue((e,{color:r,radius:o,width:a,multiline:s})=>({tooltip:vr(le(le({},e.fn.fontStyles()),gr(e,r)),{lineHeight:e.lineHeight,fontSize:e.fontSizes.sm,borderRadius:e.fn.radius(o),padding:`calc(${e.spacing.xs} / 2) ${e.spacing.xs}`,position:"absolute",whiteSpace:s?"unset":"nowrap",pointerEvents:"none",width:a}),arrow:{backgroundColor:"inherit",border:0,zIndex:1}}));const _e=yr,Oe={children:"Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported"};function Pr({offset:e,position:r}){const[o,a]=f.useState(!1),s=f.useRef(),{x:i,y:m,reference:g,floating:y,refs:l,update:v,placement:w}=ye({placement:r,middleware:[Pe({crossAxis:!0,padding:5,rootBoundary:"document"})]}),_=w.includes("right")?e:r.includes("left")?e*-1:0,O=w.includes("bottom")?e:r.includes("top")?e*-1:0,p=f.useCallback(({clientX:t,clientY:c})=>{g({getBoundingClientRect(){return{width:0,height:0,x:t,y:c,left:t+_,top:c+O,right:t,bottom:c}}})},[g]);return f.useEffect(()=>{if(l.floating.current){const t=s.current;t.addEventListener("mousemove",p);const c=He(l.floating.current);return c.forEach(P=>{P.addEventListener("scroll",v)}),()=>{t.removeEventListener("mousemove",p),c.forEach(P=>{P.removeEventListener("scroll",v)})}}},[g,l.floating.current,v,p,o]),{handleMouseMove:p,x:i,y:m,opened:o,setOpened:a,boundaryRef:s,floating:y}}var br=Object.defineProperty,wr=Object.defineProperties,_r=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,he=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable,ie=(e,r,o)=>r in e?br(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,G=(e,r)=>{for(var o in r||(r={}))he.call(r,o)&&ie(e,o,r[o]);if(B)for(var o of B(r))Ee.call(r,o)&&ie(e,o,r[o]);return e},L=(e,r)=>wr(e,_r(r)),Or=(e,r)=>{var o={};for(var a in e)he.call(e,a)&&r.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&B)for(var a of B(e))r.indexOf(a)<0&&Ee.call(e,a)&&(o[a]=e[a]);return o};const hr={refProp:"ref",withinPortal:!0,offset:10,position:"right",zIndex:fe("popover")};function $e(e){var r;const o=K("TooltipFloating",hr,e),{children:a,refProp:s,withinPortal:i,portalProps:m,style:g,className:y,classNames:l,styles:v,unstyled:w,radius:_,color:O,label:p,offset:t,position:c,multiline:P,width:d,zIndex:h,disabled:E,variant:D}=o,$=Or(o,["children","refProp","withinPortal","portalProps","style","className","classNames","styles","unstyled","radius","color","label","offset","position","multiline","width","zIndex","disabled","variant"]),{handleMouseMove:N,x:u,y:S,opened:M,boundaryRef:z,floating:x,setOpened:T}=Pr({offset:t,position:c}),{classes:j,cx:q}=_e({radius:_,color:O,multiline:P,width:d},{name:"TooltipFloating",classNames:l,styles:v,unstyled:w,variant:D});if(!me(a))throw new Error(Oe.children);const W=ve(z,a.ref),X=F=>{var C,k;(k=(C=a.props).onMouseEnter)==null||k.call(C,F),N(F),T(!0)},Y=F=>{var C,k;(k=(C=a.props).onMouseLeave)==null||k.call(C,F),T(!1)};return n.createElement(n.Fragment,null,n.createElement(ge,L(G({},m),{withinPortal:i}),n.createElement(A,L(G({},$),{ref:x,className:q(j.tooltip,y),style:L(G({},g),{zIndex:h,display:!E&&M?"block":"none",top:S??"",left:(r=Math.round(u))!=null?r:""})}),p)),f.cloneElement(a,L(G({},a.props),{[s]:W,onMouseEnter:X,onMouseLeave:Y})))}$e.displayName="@mantine/core/TooltipFloating";function Er(e){const[r,o]=f.useState(!1),s=typeof e.opened=="boolean"?e.opened:r,i=cr(),m=Le(),{delay:g,currentId:y,setCurrentId:l}=Ue(),v=f.useCallback(u=>{o(u),u&&l(m)},[l,m]),{x:w,y:_,reference:O,floating:p,context:t,refs:c,update:P,placement:d,middlewareData:{arrow:{x:h,y:E}={}}}=ye({placement:e.position,open:s,onOpenChange:v,middleware:[qe(e.offset),Pe({padding:8}),We(),Xe({element:e.arrowRef,padding:e.arrowOffset}),...e.inline?[Ye()]:[]]}),{getReferenceProps:D,getFloatingProps:$}=Ze([Je(t,{enabled:e.events.hover,delay:i?g:{open:e.openDelay,close:e.closeDelay},mouseOnly:!e.events.touch}),Ke(t,{enabled:e.events.focus,keyboardOnly:!0}),Qe(t,{role:"tooltip"}),er(t,{enabled:typeof e.opened===void 0}),rr(t,{id:m})]);return or({opened:s,position:e.position,positionDependencies:e.positionDependencies,floating:{refs:c,update:P}}),Ae(()=>{var u;(u=e.onPositionChange)==null||u.call(e,d)},[d]),{x:w,y:_,arrowX:h,arrowY:E,reference:O,floating:p,getFloatingProps:$,getReferenceProps:D,isGroupPhase:s&&y&&y!==m,opened:s,placement:d}}var $r=Object.defineProperty,xr=Object.defineProperties,Rr=Object.getOwnPropertyDescriptors,V=Object.getOwnPropertySymbols,xe=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable,ce=(e,r,o)=>r in e?$r(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,I=(e,r)=>{for(var o in r||(r={}))xe.call(r,o)&&ce(e,o,r[o]);if(V)for(var o of V(r))Re.call(r,o)&&ce(e,o,r[o]);return e},Z=(e,r)=>xr(e,Rr(r)),Dr=(e,r)=>{var o={};for(var a in e)xe.call(e,a)&&r.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&V)for(var a of V(e))r.indexOf(a)<0&&Re.call(e,a)&&(o[a]=e[a]);return o};const Nr={position:"top",refProp:"ref",withinPortal:!1,inline:!1,arrowSize:4,arrowOffset:5,arrowRadius:0,arrowPosition:"side",offset:5,transitionProps:{duration:100,transition:"fade"},width:"auto",events:{hover:!0,focus:!1,touch:!1},zIndex:fe("popover"),positionDependencies:[]},U=f.forwardRef((e,r)=>{var o;const a=f.useRef(null),s=K("Tooltip",Nr,e),{children:i,position:m,refProp:g,label:y,openDelay:l,closeDelay:v,onPositionChange:w,opened:_,withinPortal:O,portalProps:p,radius:t,color:c,classNames:P,styles:d,unstyled:h,style:E,className:D,withArrow:$,arrowSize:N,arrowOffset:u,arrowRadius:S,arrowPosition:M,offset:z,transitionProps:x,multiline:T,width:j,events:q,zIndex:W,disabled:X,positionDependencies:Y,onClick:F,onMouseEnter:C,onMouseLeave:k,inline:Ce,variant:ke,keepMounted:Ie}=s,Te=Dr(s,["children","position","refProp","label","openDelay","closeDelay","onPositionChange","opened","withinPortal","portalProps","radius","color","classNames","styles","unstyled","style","className","withArrow","arrowSize","arrowOffset","arrowRadius","arrowPosition","offset","transitionProps","multiline","width","events","zIndex","disabled","positionDependencies","onClick","onMouseEnter","onMouseLeave","inline","variant","keepMounted"]),{classes:Q,cx:je,theme:Fe}=_e({radius:t,color:c,width:j,multiline:T},{name:"Tooltip",classNames:P,styles:d,unstyled:h,variant:ke}),b=Er({position:ar(Fe.dir,m),closeDelay:v,openDelay:l,onPositionChange:w,opened:_,events:q,arrowRef:a,arrowOffset:u,offset:z+($?N/2:0),positionDependencies:[...Y,i],inline:Ce});if(!me(i))throw new Error(Oe.children);const Me=ve(b.reference,i.ref,r);return n.createElement(n.Fragment,null,n.createElement(ge,Z(I({},p),{withinPortal:O}),n.createElement(Be,Z(I({keepMounted:Ie,mounted:!X&&b.opened},x),{transition:x.transition||"fade",duration:b.isGroupPhase?10:(o=x.duration)!=null?o:100}),ze=>{var ee,re;return n.createElement(A,I(I({},Te),b.getFloatingProps({ref:b.floating,className:Q.tooltip,style:Z(I(I({},E),ze),{zIndex:W,top:(ee=b.y)!=null?ee:0,left:(re=b.x)!=null?re:0})})),y,n.createElement(tr,{ref:a,arrowX:b.arrowX,arrowY:b.arrowY,visible:$,position:b.placement,arrowSize:N,arrowOffset:u,arrowRadius:S,arrowPosition:M,className:Q.arrow}))})),f.cloneElement(i,b.getReferenceProps(I({onClick:F,onMouseEnter:C,onMouseLeave:k,onMouseMove:e.onMouseMove,onPointerDown:e.onPointerDown,onPointerEnter:e.onPointerEnter,[g]:Me,className:je(D,i.props.className)},i.props))))});U.Group=we;U.Floating=$e;U.displayName="@mantine/core/Tooltip";const Sr=U;var Cr=Object.defineProperty,kr=Object.defineProperties,Ir=Object.getOwnPropertyDescriptors,H=Object.getOwnPropertySymbols,De=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable,pe=(e,r,o)=>r in e?Cr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,J=(e,r)=>{for(var o in r||(r={}))De.call(r,o)&&pe(e,o,r[o]);if(H)for(var o of H(r))Ne.call(r,o)&&pe(e,o,r[o]);return e},Se=(e,r)=>kr(e,Ir(r)),de=(e,r)=>{var o={};for(var a in e)De.call(e,a)&&r.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&H)for(var a of H(e))r.indexOf(a)<0&&Ne.call(e,a)&&(o[a]=e[a]);return o};function Tr(e){return e.reduce((r,o)=>(r.sections.push(Se(J({},o),{accumulated:r.accumulated})),r.accumulated+=o.value,r),{accumulated:0,sections:[]}).sections}const jr={size:"md",radius:"sm",striped:!1,animate:!1,label:""},Fr=f.forwardRef((e,r)=>{const o=K("Progress",jr,e),{className:a,value:s,color:i,size:m,radius:g,striped:y,animate:l,label:v,"aria-label":w,classNames:_,styles:O,sections:p,unstyled:t,variant:c}=o,P=de(o,["className","value","color","size","radius","striped","animate","label","aria-label","classNames","styles","sections","unstyled","variant"]),{classes:d,cx:h,theme:E}=lr({color:i,radius:g},{name:"Progress",classNames:_,styles:O,unstyled:t,variant:c,size:m}),D=Array.isArray(p)?Tr(p).map(($,N)=>{var u=$,{tooltip:S,accumulated:M,value:z,label:x,color:T}=u,j=de(u,["tooltip","accumulated","value","label","color"]);return n.createElement(Sr.Floating,{label:S,disabled:!S,key:N},n.createElement(A,Se(J({},j),{className:h(d.bar,j.className),"data-striped":y||l||void 0,"data-animate":l||void 0,sx:{width:`${z}%`,left:`${M}%`,backgroundColor:E.fn.variant({variant:"filled",primaryFallback:!1,color:T||E.primaryColor}).background}}),x&&n.createElement(ae,{className:d.label},x)))}):null;return n.createElement(A,J({className:h(d.root,a),ref:r},P),D||n.createElement("div",{role:"progressbar","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":s,"aria-label":w,className:d.bar,style:{width:`${s}%`},"data-striped":y||l||void 0,"data-animate":l||void 0},v?n.createElement(ae,{className:d.label},v):""))});Fr.displayName="@mantine/core/Progress";export{Fr as P};
