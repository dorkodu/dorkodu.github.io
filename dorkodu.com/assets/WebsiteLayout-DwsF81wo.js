import{o as i,f as q,c as Q,d as J,R as b,B as w,e as X,E as he,G as ge,i as ve,m as xe,h as be,q as ye,H as je,j as o,C as _,O as ke,I as Re,A as R,l as E,b as we,a as k}from"./index-C7r0trfs.js";import{a as Ie,F as p}from"./Website.css-CnBRRNkb.js";import{u as Ce}from"./use-id-Qie96coG.js";import{C as U}from"./Center-CKgvA_Ti.js";import{c as L}from"./createReactComponent-DQNum-rn.js";import{a as Te,I as _e}from"./IconBrandYoutube-CnxFBXsj.js";import{a as Se,I as Ee}from"./IconBrandTelegram-MnkuVlIQ.js";import{P as W}from"./Paper-jJNNVcEL.js";import{I as K}from"./Image-B0TmwE2R.js";import{G as N,S as Ne}from"./SimpleGrid-DFZuG0c-.js";import{S as T}from"./Stack-Chtf9tjy.js";function Le(e,t){typeof e=="function"?e(t):typeof e=="object"&&e!==null&&"current"in e&&(e.current=t)}function Me(...e){return t=>{e.forEach(s=>Le(s,t))}}function Z(...e){return i.useCallback(Me(...e),e)}function ze({value:e,defaultValue:t,finalValue:s,onChange:n=()=>{}}){const[a,c]=i.useState(t!==void 0?t:s),d=(g,...v)=>{c(g),n==null||n(g,...v)};return e!==void 0?[e,n,!0]:[a,d,!1]}function Be(e,t,s={autoInvoke:!1}){const n=i.useRef(null),a=i.useCallback((...d)=>{n.current||(n.current=window.setTimeout(()=>{e(d),n.current=null},t))},[t]),c=i.useCallback(()=>{n.current&&(window.clearTimeout(n.current),n.current=null)},[]);return i.useEffect(()=>(s.autoInvoke&&a(),c),[c,a]),{start:a,clear:c}}function $e(e,t,s){const n=i.useRef(),a=i.useRef(null);return i.useEffect(()=>{const c=typeof s=="function"?s():s;return(c||a.current)&&(n.current=new MutationObserver(e),n.current.observe(c||a.current,t)),()=>{var d;(d=n.current)==null||d.disconnect()}},[e,t]),a}function Fe(){const[e,t]=i.useState(!1);return i.useEffect(()=>t(!0),[]),e}var Pe={};function Ae(){return typeof process<"u"&&Pe?"production":"development"}function Ge(e,t){if(!t||!e)return!1;let s=t.parentNode;for(;s!=null;){if(s===e)return!0;s=s.parentNode}return!1}function Oe({target:e,parent:t,ref:s,displayAfterTransitionEnd:n}){const a=i.useRef(),[c,d]=i.useState(!1),[g,v]=i.useState(typeof n=="boolean"?n:!1),m=()=>{if(!e||!t)return;const l=e.getBoundingClientRect(),u=t.getBoundingClientRect(),f={top:l.top-u.top,left:l.left-u.left,width:l.width,height:l.height};s.current&&(s.current.style.transform=`translateY(${f.top}px) translateX(${f.left}px)`,s.current.style.width=`${f.width}px`,s.current.style.height=`${f.height}px`)},h=()=>{window.clearTimeout(a.current),s.current&&(s.current.style.transitionDuration="0ms"),m(),a.current=window.setTimeout(()=>{s.current&&(s.current.style.transitionDuration="")},30)},y=i.useRef(),x=i.useRef();return i.useEffect(()=>{if(m(),e)return y.current=new ResizeObserver(h),y.current.observe(e),x.current=new ResizeObserver(h),x.current.observe(t),()=>{var l,u;(l=y.current)==null||l.disconnect(),(u=x.current)==null||u.disconnect()}},[t,e]),i.useEffect(()=>{if(t){const l=u=>{Ge(u.target,t)&&(h(),v(!1))};return document.addEventListener("transitionend",l),()=>{document.removeEventListener("transitionend",l)}}},[t]),Be(()=>{Ae()!=="test"&&d(!0)},20,{autoInvoke:!0}),$e(l=>{l.forEach(u=>{u.type==="attributes"&&u.attributeName==="dir"&&h()})},{attributes:!0,attributeFilter:["dir"]},()=>document.documentElement),{initialized:c,hidden:g}}var De={root:"m_96b553a6"};const ee=De,He={},Ve=X((e,{transitionDuration:t})=>({root:{"--transition-duration":typeof t=="number"?`${t}ms`:t}})),P=q((e,t)=>{const s=Q("FloatingIndicator",He,e),{classNames:n,className:a,style:c,styles:d,unstyled:g,vars:v,target:m,parent:h,transitionDuration:y,mod:x,displayAfterTransitionEnd:l,...u}=s,f=J({name:"FloatingIndicator",classes:ee,props:s,className:a,style:c,classNames:n,styles:d,unstyled:g,vars:v,varsResolver:Ve}),I=i.useRef(null),{initialized:M,hidden:S}=Oe({target:m,parent:h,ref:I,displayAfterTransitionEnd:l}),G=Z(t,I);return!m||!h?null:b.createElement(w,{ref:G,mod:[{initialized:M,hidden:S},x],...f("root"),...u})});P.displayName="@mantine/core/FloatingIndicator";P.classes=ee;var Ye={root:"m_cf365364",indicator:"m_9e182ccd",label:"m_1738fcb2",input:"m_1714d588",control:"m_69686b9b",innerLabel:"m_78882f40"};const te=Ye,Ue={withItemsBorders:!0},We=X((e,{radius:t,color:s,transitionDuration:n,size:a,transitionTimingFunction:c})=>({root:{"--sc-radius":t===void 0?void 0:ve(t),"--sc-color":s?xe(s,e):void 0,"--sc-shadow":s?void 0:"var(--mantine-shadow-xs)","--sc-transition-duration":n===void 0?void 0:`${n}ms`,"--sc-transition-timing-function":c,"--sc-padding":be(a,"sc-padding"),"--sc-font-size":ye(a)}})),A=q((e,t)=>{var V,Y;const s=Q("SegmentedControl",Ue,e),{classNames:n,className:a,style:c,styles:d,unstyled:g,vars:v,data:m,value:h,defaultValue:y,onChange:x,size:l,name:u,disabled:f,readOnly:I,fullWidth:M,orientation:S,radius:G,color:O,transitionDuration:ot,transitionTimingFunction:st,variant:oe,autoContrast:se,withItemsBorders:ne,mod:re,...ae}=s,j=J({name:"SegmentedControl",props:s,classes:te,className:a,style:c,classNames:n,styles:d,unstyled:g,vars:v,varsResolver:We}),D=he(),H=m.map(r=>typeof r=="string"?{label:r,value:r}:r),ie=Fe(),[ce,le]=i.useState(null),[z,ue]=i.useState({}),de=(r,$)=>{z[$]=r,ue(z)},[C,me]=ze({value:h,defaultValue:y,finalValue:Array.isArray(m)?((V=H.find(r=>!r.disabled))==null?void 0:V.value)??((Y=m[0])==null?void 0:Y.value)??null:null,onChange:x}),B=Ce(u),fe=H.map(r=>b.createElement(w,{...j("control"),mod:{active:C===r.value,orientation:S},key:r.value},b.createElement("input",{...j("input"),disabled:f||r.disabled,type:"radio",name:B,value:r.value,id:`${B}-${r.value}`,checked:C===r.value,onChange:()=>!I&&me(r.value),"data-focus-ring":D.focusRing}),b.createElement(w,{component:"label",...j("label"),mod:{active:C===r.value&&!(f||r.disabled),disabled:f||r.disabled,"read-only":I},htmlFor:`${B}-${r.value}`,ref:$=>de($,r.value),__vars:{"--sc-label-color":O!==void 0?ge({color:O,theme:D,autoContrast:se}):void 0}},b.createElement("span",{...j("innerLabel")},r.label)))),pe=Z(t,r=>le(r));return m.length===0?null:b.createElement(w,{...j("root"),variant:oe,size:l,ref:pe,mod:[{"full-width":M,orientation:S,initialized:ie,"with-items-borders":ne},re],...ae,role:"radiogroup"},typeof C=="string"&&b.createElement(P,{target:z[C],parent:ce,component:"span",transitionDuration:"var(--sc-transition-duration)",...j("indicator")}),fe)});A.classes=te;A.displayName="@mantine/core/SegmentedControl";/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var qe=L("outline","bookmarks","IconBookmarks",[["path",{d:"M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z",key:"svg-0"}],["path",{d:"M11 3h5a3 3 0 0 1 3 3v11",key:"svg-1"}]]);/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Qe=L("outline","brand-twitter","IconBrandTwitter",[["path",{d:"M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z",key:"svg-0"}]]);/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Je=L("outline","moon","IconMoon",[["path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",key:"svg-0"}]]);/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xe=L("outline","sun","IconSun",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",key:"svg-1"}]]),F={Root:"my7nxb0",Aside:"my7nxb1",Nav:"my7nxb2",Main:"my7nxb3",Header:"my7nxb4",Body:"my7nxb5",Footer:"my7nxb6"};function Ke({size:e="md"}){const{colorScheme:t,setColorScheme:s}=je(),n=a=>{a!=="light"&&a!=="dark"||s(a)};return o.jsx(A,{radius:"md",value:t,size:e,onChange:n,data:[{value:"light",label:o.jsx(U,{children:o.jsx(Xe,{size:18,stroke:3,color:t=="light"?_.colors.yellow[6]:_.colors.dimmed})})},{value:"dark",label:o.jsx(U,{children:o.jsx(Je,{size:18,stroke:3,color:t=="dark"?_.colors.blue[3]:_.colors.dimmed})})}]})}const Ze=[{text:"Twitter",to:"https://twitter.com/dorkodu",icon:Qe},{text:"Instagram",to:"https://instagram.com/dorkodu",icon:Te},{text:"GitHub",to:"https://github.com/dorkodu",icon:Se},{text:"Telegram",to:"https://t.me/dorkodu",icon:Ee},{text:"YouTube",to:"https://youtube.com/@dorkodu",icon:_e},{text:"Substack",to:"https://dorkodu.substack.com",icon:qe}];function ht(){return o.jsxs("div",{className:F.Root,children:[o.jsx(et,{}),o.jsx("div",{className:F.Body,children:o.jsx("main",{className:F.Main,children:o.jsx("div",{children:o.jsx(ke,{})})})}),o.jsx(tt,{})]})}function et(){const e=Re(_.smallerThan("sm"));return o.jsx(W,{p:10,radius:"lg",children:o.jsxs(w,{style:{display:"flex",justifyContent:"space-between",flexDirection:e?"column":"row",gap:10,alignContent:"center",justifyItems:"center",alignItems:"center"},children:[o.jsx(K,{src:"/images/dorkodu_Logo_Colorful.svg",h:"auto",w:250,px:"md"}),o.jsx(W,{py:4,px:10,children:o.jsx(N,{gap:2,children:[["About","/#about"],["Products","/#products"],["Blog","https://dorkodu.substack.com"]].map(t=>o.jsx(R,{component:E,to:t[1],className:Ie.Link,children:t[0]},t[1]))})}),o.jsxs(N,{gap:8,children:[o.jsx(we,{size:"sm",radius:14,component:"a",href:"#products",children:"GET STARTED"}),o.jsx(Ke,{size:"xs"})]})]})})}function tt(){return o.jsx(w,{className:p.Root,children:o.jsxs(N,{align:"flex-start",children:[o.jsxs(T,{gap:0,px:10,w:"30%",miw:200,children:[o.jsx(R,{display:"block",href:"https://dorkodu.com",target:"_blank",children:o.jsx(K,{src:"/images/dorkodu_Logo_Colorful.svg",w:150,h:"auto",display:"block"})}),o.jsx(k,{className:p.DorkoduMotto,mt:16,my:4,size:"sm",children:"The Life Gamification Company."}),o.jsxs(k,{c:"dimmed",fw:500,children:["Dorkodu © ",new Date().getFullYear()]})]}),o.jsxs(Ne,{style:{flexGrow:1},spacing:"xs",cols:{base:2,xs:2,sm:4},children:[o.jsxs(T,{gap:4,p:10,children:[o.jsx(k,{className:p.ListTitle,children:"Company"}),[["About","/#about"],["Mission","/#mission"],["Team","/#team"],["FAQs","/#faq"]].map(e=>o.jsx(R,{component:E,to:e[1],className:p.Link,children:e[0]},e[1]))]}),o.jsxs(T,{gap:4,p:10,children:[o.jsx(k,{className:p.ListTitle,children:"Resources"}),[["Blog","https://dorkodu.substack.com"],["Community","https://t.me/dorkodu"],["Jobs","/jobs"],["Press","/press"],["Contact","/#contact"]].map(e=>o.jsx(R,{component:E,to:e[1],className:p.Link,children:e[0]},e[1]))]}),o.jsxs(T,{gap:4,p:10,children:[o.jsx(k,{className:p.ListTitle,children:"Legal"}),[["Terms","/legal/terms"],["Privacy","/legal/privacy"],["Community Rules","/legal/community-rules"],["Cookie Policy","/legal/cookie-policy"],["Refund Policy","/legal/refund-policy"]].map(e=>o.jsx(R,{component:E,to:e[1],classNames:{root:p.Link},children:e[0]},e[1]))]}),o.jsxs(T,{gap:4,p:10,children:[o.jsx(k,{className:p.ListTitle,children:"Social"}),Ze.map(e=>o.jsx(R,{href:e.to,classNames:{root:p.Link},children:o.jsxs(N,{wrap:"nowrap",gap:4,children:[o.jsx("span",{children:o.jsx(e.icon,{})}),o.jsx("span",{children:e.text})]})},e.text))]})]})]})})}export{ht as default};
