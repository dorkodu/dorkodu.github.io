import{o as P,R as t,p as k,c as R,d as L,U,e as z,h as D,i as N,r as F,f as M,B as V}from"./index-C7r0trfs.js";import{u as Z}from"./use-id-Qie96coG.js";const x=P.forwardRef(({size:o="var(--cb-icon-size, 70%)",style:s,...e},a)=>t.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...s,width:o,height:o},ref:a,...e},t.createElement("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})));x.displayName="@mantine/core/CloseIcon";var j={root:"m_86a44da5","root--subtle":"m_220c80f2"};const I=j,q={variant:"subtle"},G=z((o,{size:s,radius:e,iconSize:a})=>({root:{"--cb-size":D(s,"cb-size"),"--cb-radius":e===void 0?void 0:N(e),"--cb-icon-size":F(a)}})),_=k((o,s)=>{const e=R("CloseButton",q,o),{iconSize:a,children:c,vars:r,radius:E,className:u,classNames:p,style:g,styles:h,unstyled:n,"data-disabled":i,disabled:d,variant:m,icon:b,mod:y,...C}=e,v=L({name:"CloseButton",props:e,className:u,style:g,classes:I,classNames:p,styles:h,unstyled:n,vars:r,varsResolver:G});return t.createElement(U,{ref:s,...C,unstyled:n,variant:m,disabled:d,mod:[{disabled:d||i},y],...v("root",{variant:m,active:!d&&!i})},b||t.createElement(x,null),c)});_.classes=I;_.displayName="@mantine/core/CloseButton";var H={root:"m_66836ed3",wrapper:"m_a5d60502",body:"m_667c2793",title:"m_6a03f287",label:"m_698f4f23",icon:"m_667f2a6a",message:"m_7fa78076",closeButton:"m_87f54839"};const S=H,J={},K=z((o,{radius:s,color:e,variant:a,autoContrast:c})=>{const r=o.variantColorResolver({color:e||o.primaryColor,theme:o,variant:a||"light",autoContrast:c});return{root:{"--alert-radius":s===void 0?void 0:N(s),"--alert-bg":e||a?r.background:void 0,"--alert-color":r.color,"--alert-bd":e||a?r.border:void 0}}}),$=M((o,s)=>{const e=R("Alert",J,o),{classNames:a,className:c,style:r,styles:E,unstyled:u,vars:p,radius:g,color:h,title:n,children:i,id:d,icon:m,withCloseButton:b,onClose:y,closeButtonLabel:C,variant:v,autoContrast:O,...A}=e,l=L({name:"Alert",classes:S,props:e,className:c,style:r,classNames:a,styles:E,unstyled:u,vars:p,varsResolver:K}),f=Z(d),B=n&&`${f}-title`||void 0,w=`${f}-body`;return t.createElement(V,{id:f,...l("root",{variant:v}),variant:v,ref:s,...A,role:"alert","aria-describedby":w,"aria-labelledby":B},t.createElement("div",{...l("wrapper")},m&&t.createElement("div",{...l("icon")},m),t.createElement("div",{...l("body")},n&&t.createElement("div",{...l("title"),"data-with-close-button":b||void 0},t.createElement("span",{id:B,...l("label")},n)),i&&t.createElement("div",{id:w,...l("message"),"data-variant":v},i)),b&&t.createElement(_,{...l("closeButton"),onClick:y,variant:"transparent",size:16,iconSize:16,"aria-label":C,unstyled:u})))});$.classes=S;$.displayName="@mantine/core/Alert";export{$ as A};
