import P from"./DocumentDrivenEmpty.18bdc56b.js";import h from"./ContentRenderer.aff8f59b.js";import L from"./DocumentDrivenNotFound.b3bc46bc.js";import{k as R,d as c,G as g,P as k,i as x,H as C,I as b,r as B,J as y,K as N,L as S,M as l,T,N as u,O as j,Q as A,S as w,R as D,U as E,V as O,b as d,c as $,g as f,w as _,W as v}from"./entry.ab91e314.js";import{u as H}from"./head.03541800.js";import"./ContentRendererMarkdown.ba90744b.js";const q=c({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(a,e){const t=await y[a.name]().then(o=>o.default||o);return()=>l(t,a.layoutProps,e.slots)}}),I=c({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(a,e){const t=R(),o=g(k),n=o===x()?C():o,s=b(()=>u(a.name)??n.meta.layout??"default"),r=B();e.expose({layoutRef:r});const m=t.deferHydration();return()=>{const p=s.value&&s.value in y,i=n.meta.layoutTransition??N;return S(T,p&&i,{default:()=>l(w,{suspensible:!0,onResolve:()=>{A(m)}},{default:()=>l(M,{layoutProps:j(e.attrs,{ref:r}),key:s.value,name:s.value,shouldProvide:!a.name,hasTransition:!!i},e.slots)})}).default()}}}),M=c({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(a,e){const t=a.name;return a.shouldProvide&&D(E,{isCurrent:o=>t===(o.meta.layout??"default")}),()=>{var o,n;return!t||typeof t=="string"&&!(t in y)?(n=(o=e.slots).default)==null?void 0:n.call(o):l(q,{key:t,layoutProps:a.layoutProps,name:t},e.slots)}}}),V={class:"document-driven-page"},W=c({__name:"document-driven",setup(a){const{page:e,layout:t}=O();return e.value,H(e),(o,n)=>{const s=P,r=h,m=L,p=I;return d(),$("div",V,[f(p,{name:u(t)||"default"},{default:_(()=>[u(e)?(d(),v(r,{key:u(e)._id,value:u(e)},{empty:_(({value:i})=>[f(s,{value:i},null,8,["value"])]),_:1},8,["value"])):(d(),v(m,{key:1}))]),_:1},8,["name"])])}}});export{W as default};
