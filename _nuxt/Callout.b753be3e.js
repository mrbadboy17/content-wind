import{d as i,I as d,b as s,c as l,W as p,N as _,f as r,e as n,n as f,Y as m,k as y}from"./entry.8196bba8.js";import"./MDCSlot.06db07c6.js";import{r as a}from"./slot.e3850760.js";const v={class:"callout-content-wrapper content"},$={key:0,class:"callout-title"},k={class:"callout-content"},C=i({__name:"Callout",props:{type:{type:String,default:"neutral",validator(t){return["info","success","warning","danger","primary","secondary","neutral"].includes(t)}},icon:{type:[String,Boolean],default:!1}},setup(t){const o=t,c=d(()=>o.icon===!1?"":o.icon===!0?`type:${o.type}`:o.icon);return(e,g)=>{const u=m;return s(),l("div",{class:f(["callout",[t.type]])},[t.icon?(s(),p(u,{key:0,name:_(c),class:"callout-icon"},null,8,["name"])):r("",!0),n("div",v,[e.$slots.title?(s(),l("div",$,[n("h5",null,[a(e.$slots,"default",{use:e.$slots.title,unwrap:"p"},void 0,!0)])])):r("",!0),n("div",k,[a(e.$slots,"default",{use:e.$slots.content,unwrap:"p"},()=>[a(e.$slots,"default",{use:e.$slots.default},void 0,!0)],!0)])])],2)}}});const N=y(C,[["__scopeId","data-v-938015e5"]]);export{N as default};
