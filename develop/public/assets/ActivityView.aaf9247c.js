import{_ as j,r as _,o as i,c,b as a,t as I,z as u,a1 as D,Q as z,w as R,Y as k,U as O,F as x,p as A,h as Y,Z as E,d as w,g as $,e as S,$ as G,a0 as V,C as H,a as J,V as L,S as M}from"./index.92e70ba0.js";import{I as T}from"./ImageComponent.5c6139a6.js";const N=l=>(A("data-v-0b5b1cf6"),l=l(),Y(),l),K={class:"form-label"},P={class:"input-group mb-3"},W=N(()=>a("span",{class:"input-group-text"},"\u6A23\u5F0F",-1)),aa=E('<option value="normal" selected data-v-0b5b1cf6>\u4E00\u822C</option><option value="b" data-v-0b5b1cf6>\u7C97\u9AD4</option><option value="i" data-v-0b5b1cf6>\u659C\u9AD4</option><option value="u" data-v-0b5b1cf6>\u5E95\u7DDA</option><option value="s" data-v-0b5b1cf6>\u522A\u9664\u7DDA</option>',5),ta=[aa],ea={class:"input-group mb-3"},da=N(()=>a("span",{class:"input-group-text"},"\u5167\u6587",-1)),oa={__name:"ActivityContent",props:{title:{type:String,required:!0},inputText:{type:Object,required:!0}},emits:["update:inputText"],setup(l,{emit:f}){const r=l,s=_(r.title),n=_(r.inputText.format||"normal"),g=_(r.inputText.content.replaceAll("$?",`
`));function b(){const h={format:n.value,content:g.value.replaceAll(`
`,"$?")};f("update:inputText",h)}return(h,m)=>(i(),c(x,null,[a("label",K,I(s.value),1),a("div",P,[W,u(a("select",{"onUpdate:modelValue":m[0]||(m[0]=q=>n.value=q),onChange:b,class:"form-control"},ta,544),[[D,n.value]])]),a("div",ea,[da,(i(),z(O(n.value),{class:"style"},{default:R(()=>[u(a("textarea",{class:"form-control","onUpdate:modelValue":m[1]||(m[1]=q=>g.value=q),onInput:b,rows:"4"},null,544),[[k,g.value]])]),_:1}))])],64))}};var Q=j(oa,[["__scopeId","data-v-0b5b1cf6"]]);const F=l=>(A("data-v-449705c0"),l=l(),Y(),l),ia={id:"news-create"},ra={class:"container"},na=E('<legend data-v-449705c0>\u65B0\u589E</legend><div class="col-md-12" data-v-449705c0><div class="input-group mb-3" data-v-449705c0><span class="input-group-text" data-v-449705c0>\u985E\u5225</span><select class="form-control" name="category" data-v-449705c0><option value="1" data-v-449705c0>\u6703\u54E1\u5927\u6703/\u65B0\u5275\u8AD6\u58C7</option><option value="2" data-v-449705c0>\u6BCF\u6708\u5206\u4EAB\u6703</option><option value="3" data-v-449705c0>\u4F01\u696D\u3001\u5B78\u8853\u6A5F\u69CB\u53C3\u8A2A</option><option value="4" data-v-449705c0>\u5916\u9928\u62DC\u8A2A\u3001\u570B\u969B\u4EA4\u6D41\u6216\u5176\u4ED6</option></select></div></div><div class="col-md-12" data-v-449705c0><div class="input-group mb-3" data-v-449705c0><span class="input-group-text" data-v-449705c0>\u6A19\u984C</span><input type="text" name="title" class="form-control" data-v-449705c0></div></div>',3),la={class:"col-md-12"},fa={class:"btn-group",role:"group"},ca={class:"col-md-12"},ba={class:"col-md-12"},pa={class:"input-group mb-3"},va=F(()=>a("span",{class:"input-group-text"},"\u73FE\u5728\u6642\u9593",-1)),sa=["value"],ga=F(()=>a("div",{class:"col-md-12"},[a("div",{class:"input-group mb-3"},[a("span",{class:"input-group-text"},"\u6392\u5E8F"),a("input",{type:"number",name:"ord",value:"1",class:"form-control"})])],-1)),ma={__name:"ActivityCreate",setup(l){const{proxy:f}=$(),r=_([]),s=_("form"),n=_(Math.ceil(+new Date/1e3));g();function g(){r.value.push({title:"",content:""})}function b(){const h=new FormData(s.value);h.append("content",JSON.stringify(r.value)),f.manage.post("/activity/create",h)}return(h,m)=>(i(),c("section",ia,[a("div",ra,[a("form",{class:"form row g-3 m-0",ref_key:"form",ref:s},[na,a("div",la,[a("div",fa,[a("button",{type:"button",class:"btn btn-success",onClick:g}," + "),a("button",{type:"button",class:"btn btn-danger",onClick:m[0]||(m[0]=q=>r.value.pop())}," \u2013 ")])]),a("div",ca,[(i(!0),c(x,null,w(r.value,(q,y)=>(i(),z(Q,{title:"\u6BB5\u843D"+(y+1),key:y,inputText:r.value[y],"onUpdate:inputText":d=>r.value[y]=d},null,8,["title","inputText","onUpdate:inputText"]))),128))]),a("div",ba,[a("div",pa,[va,a("input",{type:"number",name:"ts",value:n.value,class:"form-control"},null,8,sa)])]),ga,a("div",{class:"col-12"},[a("button",{type:"button",onClick:b,class:"send-btn btn btn-primary"}," \u9001\u51FA ")])],512)])]))}};var qa=j(ma,[["__scopeId","data-v-449705c0"]]);const Z=l=>(A("data-v-0e129df8"),l=l(),Y(),l),xa={class:"container"},ha={class:"col-md-12"},_a={class:"input-group mb-3"},ua=Z(()=>a("span",{class:"input-group-text"},"\u6A19\u984C",-1)),wa=["onUpdate:modelValue"],ka={class:"col-md-12"},ya={class:"btn-group",role:"group"},za=["onClick"],Ca=["onClick"],ja={class:"col-md-12"},Aa={class:"col-md-12"},Ya={class:"input-group mb-3"},$a=Z(()=>a("span",{class:"input-group-text"},"\u73FE\u5728\u6642\u9593",-1)),Qa=["onUpdate:modelValue"],Za={class:"col-md-12"},Ba={class:"input-group mb-3"},Xa=Z(()=>a("span",{class:"input-group-text"},"\u6392\u5E8F",-1)),Ua=["onUpdate:modelValue"],Sa={class:"col-md-12"},Ta={class:"input-group mb-3"},Va=Z(()=>a("span",{class:"input-group-text"},"\u5716\u7247",-1)),Ia={class:"card text-dark bg-light mb-3"},Ra={class:"card-header text-end"},Oa=["onClick"],Ea={class:"card-body"},Na={class:"col-12 pb-3"},Fa={class:"btn-group",role:"group"},Da=["onClick"],Ga=["onClick"],Ha=Z(()=>a("hr",{class:"border border-secondary"},null,-1)),Ja={__name:"ActivityOne",setup(l){const{proxy:f}=$(),r=_([]),s=_([]),n="activity";function g(d){r.value[d].content.push({format:"",content:""})}function b(){f.api.get(`/${n}/list/cat/1`).then(d=>{r.value=d;for(const o of r.value)o.image=o.image.split(";").filter(t=>t)})}b();function h(d){const o=r.value.find(p=>p.id===d),t=JSON.parse(JSON.stringify(o));t.content=JSON.stringify(t.content),f.manage.put(`/${n}/${d}`,t),m(d)}async function m(d){const o=s.value[d].files;if(!!o.length){for(const t of o){const p=new FormData;p.append("image",t);try{await f.manage.post(`/${n}/${d}/store-image`,p)}catch(e){console.log(e)}}b()}}async function q(d){if(!confirm("\u78BA\u8A8D\u522A\u9664?"))return;const o=localStorage.getItem("token");await f.manage.delete(`/${n}/${d}/${o}`),b()}async function y(d,o){if(!confirm("\u78BA\u8A8D\u522A\u9664?"))return;const t={filename:o};await f.manage.post(`/${n}/${d}/delete-image`,t),b()}return(d,o)=>(i(),c("section",null,[a("div",xa,[(i(!0),c(x,null,w(r.value,(t,p)=>(i(),c("form",{class:"form row g-3 m-0",key:t.id},[a("div",ha,[a("div",_a,[ua,u(a("input",{type:"text","onUpdate:modelValue":e=>t.title=e,class:"form-control"},null,8,wa),[[k,t.title]])])]),a("div",ka,[a("div",ya,[a("button",{type:"button",class:"btn btn-success",onClick:e=>g(p)}," + ",8,za),a("button",{type:"button",class:"btn btn-danger",onClick:e=>t.content.pop()}," \u2013 ",8,Ca)])]),a("div",ja,[(i(!0),c(x,null,w(t.content,(e,v)=>(i(),z(Q,{title:"\u6BB5\u843D"+(v+1),inputText:t.content[v],"onUpdate:inputText":C=>t.content[v]=C,key:v},null,8,["title","inputText","onUpdate:inputText"]))),128))]),a("div",Aa,[a("div",Ya,[$a,u(a("input",{type:"number","onUpdate:modelValue":e=>t.ts=e,class:"form-control"},null,8,Qa),[[k,t.ts]])])]),a("div",Za,[a("div",Ba,[Xa,u(a("input",{type:"number","onUpdate:modelValue":e=>t.ord=e,class:"form-control"},null,8,Ua),[[k,t.ord]])])]),a("div",Sa,[a("div",Ta,[Va,a("input",{type:"file",accept:"image/*",class:"form-control image",multiple:"",ref_for:!0,ref:e=>{s.value[t.id]=e}},null,512)])]),(i(!0),c(x,null,w(t.image,e=>(i(),c("div",{class:"col-3",key:e},[a("div",Ia,[a("div",Ra,[a("button",{type:"button",class:"btn btn-danger btn-sm",onClick:v=>y(t.id,e)}," X ",8,Oa)]),a("div",Ea,[S(T,{src:e},null,8,["src"])])])]))),128)),a("div",Na,[a("div",Fa,[a("button",{type:"button",onClick:e=>h(t.id),class:"send-btn btn btn-primary"}," \u4FEE\u6539 ",8,Da),a("button",{type:"button",onClick:e=>q(t.id),class:"send-btn btn btn-danger"}," \u522A\u9664 ",8,Ga)])]),Ha]))),128))])]))}};var La=j(Ja,[["__scopeId","data-v-0e129df8"]]);const B=l=>(A("data-v-90ba1b74"),l=l(),Y(),l),Ma={class:"container"},Ka={class:"col-md-12"},Pa={class:"input-group mb-3"},Wa=B(()=>a("span",{class:"input-group-text"},"\u6A19\u984C",-1)),at=["onUpdate:modelValue"],tt={class:"col-md-12"},et={class:"btn-group",role:"group"},dt=["onClick"],ot=["onClick"],it={class:"col-md-12"},rt={class:"col-md-12"},nt={class:"input-group mb-3"},lt=B(()=>a("span",{class:"input-group-text"},"\u73FE\u5728\u6642\u9593",-1)),ft=["onUpdate:modelValue"],ct={class:"col-md-12"},bt={class:"input-group mb-3"},pt=B(()=>a("span",{class:"input-group-text"},"\u6392\u5E8F",-1)),vt=["onUpdate:modelValue"],st={class:"col-md-12"},gt={class:"input-group mb-3"},mt=B(()=>a("span",{class:"input-group-text"},"\u5716\u7247",-1)),qt={class:"card text-dark bg-light mb-3"},xt={class:"card-header text-end"},ht=["onClick"],_t={class:"card-body"},ut={class:"col-12 pb-3"},wt={class:"btn-group",role:"group"},kt=["onClick"],yt=["onClick"],zt=B(()=>a("hr",{class:"border border-secondary"},null,-1)),Ct={__name:"ActivityTwo",setup(l){const{proxy:f}=$(),r=_([]),s=_([]),n="activity";function g(d){r.value[d].content.push({format:"",content:""})}function b(){f.api.get(`/${n}/list/cat/2`).then(d=>{r.value=d;for(const o of r.value)o.image=o.image.split(";").filter(t=>t)})}b();function h(d){const o=r.value.find(p=>p.id===d),t=JSON.parse(JSON.stringify(o));t.content=JSON.stringify(t.content),f.manage.put(`/${n}/${d}`,t),m(d)}async function m(d){const o=s.value[d].files;if(!!o.length)for(const t of o){const p=new FormData;p.append("image",t);try{await f.manage.post(`/${n}/${d}/store-image`,p)}catch(e){console.log(e)}}}async function q(d){if(!confirm("\u78BA\u8A8D\u522A\u9664?"))return;const o=localStorage.getItem("token");await f.manage.delete(`/${n}/${d}/${o}`),b()}async function y(d,o){if(!confirm("\u78BA\u8A8D\u522A\u9664?"))return;const t={filename:o};await f.manage.post(`/${n}/${d}/delete-image`,t),b()}return(d,o)=>(i(),c("section",null,[a("div",Ma,[(i(!0),c(x,null,w(r.value,(t,p)=>(i(),c("form",{class:"form row g-3 m-0",key:t.id},[a("div",Ka,[a("div",Pa,[Wa,u(a("input",{type:"text","onUpdate:modelValue":e=>t.title=e,class:"form-control"},null,8,at),[[k,t.title]])])]),a("div",tt,[a("div",et,[a("button",{type:"button",class:"btn btn-success",onClick:e=>g(p)}," + ",8,dt),a("button",{type:"button",class:"btn btn-danger",onClick:e=>t.content.pop()}," \u2013 ",8,ot)])]),a("div",it,[(i(!0),c(x,null,w(t.content,(e,v)=>(i(),z(Q,{title:"\u6BB5\u843D"+(v+1),inputText:t.content[v],"onUpdate:inputText":C=>t.content[v]=C,key:v},null,8,["title","inputText","onUpdate:inputText"]))),128))]),a("div",rt,[a("div",nt,[lt,u(a("input",{type:"number","onUpdate:modelValue":e=>t.ts=e,class:"form-control"},null,8,ft),[[k,t.ts]])])]),a("div",ct,[a("div",bt,[pt,u(a("input",{type:"number","onUpdate:modelValue":e=>t.ord=e,class:"form-control"},null,8,vt),[[k,t.ord]])])]),a("div",st,[a("div",gt,[mt,a("input",{type:"file",accept:"image/*",class:"form-control image",multiple:"",ref_for:!0,ref:e=>{s.value[t.id]=e}},null,512)])]),(i(!0),c(x,null,w(t.image,e=>(i(),c("div",{class:"col-3",key:e},[a("div",qt,[a("div",xt,[a("button",{type:"button",class:"btn btn-danger btn-sm",onClick:v=>y(t.id,e)}," X ",8,ht)]),a("div",_t,[S(T,{src:e},null,8,["src"])])])]))),128)),a("div",ut,[a("div",wt,[a("button",{type:"button",onClick:e=>h(t.id),class:"send-btn btn btn-primary"}," \u4FEE\u6539 ",8,kt),a("button",{type:"button",onClick:e=>q(t.id),class:"send-btn btn btn-danger"}," \u522A\u9664 ",8,yt)])]),zt]))),128))])]))}};var jt=j(Ct,[["__scopeId","data-v-90ba1b74"]]);const X=l=>(A("data-v-7e076a8a"),l=l(),Y(),l),At={class:"container"},Yt={class:"col-md-12"},$t={class:"input-group mb-3"},Qt=X(()=>a("span",{class:"input-group-text"},"\u6A19\u984C",-1)),Zt=["onUpdate:modelValue"],Bt={class:"col-md-12"},Xt={class:"btn-group",role:"group"},Ut=["onClick"],St=["onClick"],Tt={class:"col-md-12"},Vt={class:"col-md-12"},It={class:"input-group mb-3"},Rt=X(()=>a("span",{class:"input-group-text"},"\u73FE\u5728\u6642\u9593",-1)),Ot=["onUpdate:modelValue"],Et={class:"col-md-12"},Nt={class:"input-group mb-3"},Ft=X(()=>a("span",{class:"input-group-text"},"\u6392\u5E8F",-1)),Dt=["onUpdate:modelValue"],Gt={class:"col-md-12"},Ht={class:"input-group mb-3"},Jt=X(()=>a("span",{class:"input-group-text"},"\u5716\u7247",-1)),Lt={class:"card text-dark bg-light mb-3"},Mt={class:"card-header text-end"},Kt=["onClick"],Pt={class:"card-body"},Wt={class:"col-12 pb-3"},ae={class:"btn-group",role:"group"},te=["onClick"],ee=["onClick"],de=X(()=>a("hr",{class:"border border-secondary"},null,-1)),oe={__name:"ActivityThree",setup(l){const{proxy:f}=$(),r=_([]),s=_([]),n="activity";function g(d){r.value[d].content.push({format:"",content:""})}function b(){f.api.get(`/${n}/list/cat/3`).then(d=>{r.value=d;for(const o of r.value)o.image=o.image.split(";").filter(t=>t)})}b();function h(d){const o=r.value.find(p=>p.id===d),t=JSON.parse(JSON.stringify(o));t.content=JSON.stringify(t.content),f.manage.put(`/${n}/${d}`,t),m(d)}async function m(d){const o=s.value[d].files;if(!!o.length){for(const t of o){const p=new FormData;p.append("image",t);try{await f.manage.post(`/${n}/${d}/store-image`,p)}catch(e){console.log(e)}}b()}}async function q(d){if(!confirm("\u78BA\u8A8D\u522A\u9664?"))return;const o=localStorage.getItem("token");await f.manage.delete(`/${n}/${d}/${o}`),b()}async function y(d,o){if(!confirm("\u78BA\u8A8D\u522A\u9664?"))return;const t={filename:o};await f.manage.post(`/${n}/${d}/delete-image`,t),b()}return(d,o)=>(i(),c("section",null,[a("div",At,[(i(!0),c(x,null,w(r.value,(t,p)=>(i(),c("form",{class:"form row g-3 m-0",key:t.id},[a("div",Yt,[a("div",$t,[Qt,u(a("input",{type:"text","onUpdate:modelValue":e=>t.title=e,class:"form-control"},null,8,Zt),[[k,t.title]])])]),a("div",Bt,[a("div",Xt,[a("button",{type:"button",class:"btn btn-success",onClick:e=>g(p)}," + ",8,Ut),a("button",{type:"button",class:"btn btn-danger",onClick:e=>t.content.pop()}," \u2013 ",8,St)])]),a("div",Tt,[(i(!0),c(x,null,w(t.content,(e,v)=>(i(),z(Q,{title:"\u6BB5\u843D"+(v+1),inputText:t.content[v],"onUpdate:inputText":C=>t.content[v]=C,key:v},null,8,["title","inputText","onUpdate:inputText"]))),128))]),a("div",Vt,[a("div",It,[Rt,u(a("input",{type:"number","onUpdate:modelValue":e=>t.ts=e,class:"form-control"},null,8,Ot),[[k,t.ts]])])]),a("div",Et,[a("div",Nt,[Ft,u(a("input",{type:"number","onUpdate:modelValue":e=>t.ord=e,class:"form-control"},null,8,Dt),[[k,t.ord]])])]),a("div",Gt,[a("div",Ht,[Jt,a("input",{type:"file",accept:"image/*",class:"form-control image",multiple:"",ref_for:!0,ref:e=>{s.value[t.id]=e}},null,512)])]),(i(!0),c(x,null,w(t.image,e=>(i(),c("div",{class:"col-3",key:e},[a("div",Lt,[a("div",Mt,[a("button",{type:"button",class:"btn btn-danger btn-sm",onClick:v=>y(t.id,e)}," X ",8,Kt)]),a("div",Pt,[S(T,{src:e},null,8,["src"])])])]))),128)),a("div",Wt,[a("div",ae,[a("button",{type:"button",onClick:e=>h(t.id),class:"send-btn btn btn-primary"}," \u4FEE\u6539 ",8,te),a("button",{type:"button",onClick:e=>q(t.id),class:"send-btn btn btn-danger"}," \u522A\u9664 ",8,ee)])]),de]))),128))])]))}};var ie=j(oe,[["__scopeId","data-v-7e076a8a"]]);const U=l=>(A("data-v-121da7f6"),l=l(),Y(),l),re={class:"container"},ne={class:"col-md-12"},le={class:"input-group mb-3"},fe=U(()=>a("span",{class:"input-group-text"},"\u6A19\u984C",-1)),ce=["onUpdate:modelValue"],be={class:"col-md-12"},pe={class:"btn-group",role:"group"},ve=["onClick"],se=["onClick"],ge={class:"col-md-12"},me={class:"col-md-12"},qe={class:"input-group mb-3"},xe=U(()=>a("span",{class:"input-group-text"},"\u73FE\u5728\u6642\u9593",-1)),he=["onUpdate:modelValue"],_e={class:"col-md-12"},ue={class:"input-group mb-3"},we=U(()=>a("span",{class:"input-group-text"},"\u6392\u5E8F",-1)),ke=["onUpdate:modelValue"],ye={class:"col-md-12"},ze={class:"input-group mb-3"},Ce=U(()=>a("span",{class:"input-group-text"},"\u5716\u7247",-1)),je={class:"card text-dark bg-light mb-3"},Ae={class:"card-header text-end"},Ye=["onClick"],$e={class:"card-body"},Qe={class:"col-12 pb-3"},Ze={class:"btn-group",role:"group"},Be=["onClick"],Xe=["onClick"],Ue=U(()=>a("hr",{class:"border border-secondary"},null,-1)),Se={__name:"ActivityFour",setup(l){const{proxy:f}=$(),r=_([]),s=_([]),n="activity";function g(d){r.value[d].content.push({format:"",content:""})}function b(){f.api.get(`/${n}/list/cat/4`).then(d=>{r.value=d;for(const o of r.value)o.image=o.image.split(";").filter(t=>t)})}b();function h(d){const o=r.value.find(p=>p.id===d),t=JSON.parse(JSON.stringify(o));t.content=JSON.stringify(t.content),f.manage.put(`/${n}/${d}`,t),m(d)}async function m(d){const o=s.value[d].files;if(!!o.length){for(const t of o){const p=new FormData;p.append("image",t);try{await f.manage.post(`/${n}/${d}/store-image`,p)}catch(e){console.log(e)}}b()}}async function q(d){if(!confirm("\u78BA\u8A8D\u522A\u9664?"))return;const o=localStorage.getItem("token");await f.manage.delete(`/${n}/${d}/${o}`),b()}async function y(d,o){if(!confirm("\u78BA\u8A8D\u522A\u9664?"))return;const t={filename:o};await f.manage.post(`/${n}/${d}/delete-image`,t),b()}return(d,o)=>(i(),c("section",null,[a("div",re,[(i(!0),c(x,null,w(r.value,(t,p)=>(i(),c("form",{class:"form row g-3 m-0",key:t.id},[a("div",ne,[a("div",le,[fe,u(a("input",{type:"text","onUpdate:modelValue":e=>t.title=e,class:"form-control"},null,8,ce),[[k,t.title]])])]),a("div",be,[a("div",pe,[a("button",{type:"button",class:"btn btn-success",onClick:e=>g(p)}," + ",8,ve),a("button",{type:"button",class:"btn btn-danger",onClick:e=>t.content.pop()}," \u2013 ",8,se)])]),a("div",ge,[(i(!0),c(x,null,w(t.content,(e,v)=>(i(),z(Q,{title:"\u6BB5\u843D"+(v+1),inputText:t.content[v],"onUpdate:inputText":C=>t.content[v]=C,key:v},null,8,["title","inputText","onUpdate:inputText"]))),128))]),a("div",me,[a("div",qe,[xe,u(a("input",{type:"number","onUpdate:modelValue":e=>t.ts=e,class:"form-control"},null,8,he),[[k,t.ts]])])]),a("div",_e,[a("div",ue,[we,u(a("input",{type:"number","onUpdate:modelValue":e=>t.ord=e,class:"form-control"},null,8,ke),[[k,t.ord]])])]),a("div",ye,[a("div",ze,[Ce,a("input",{type:"file",accept:"image/*",class:"form-control image",multiple:"",ref_for:!0,ref:e=>{s.value[t.id]=e}},null,512)])]),(i(!0),c(x,null,w(t.image,e=>(i(),c("div",{class:"col-3",key:e},[a("div",je,[a("div",Ae,[a("button",{type:"button",class:"btn btn-danger btn-sm",onClick:v=>y(t.id,e)}," X ",8,Ye)]),a("div",$e,[S(T,{src:e},null,8,["src"])])])]))),128)),a("div",Qe,[a("div",Ze,[a("button",{type:"button",onClick:e=>h(t.id),class:"send-btn btn btn-primary"}," \u4FEE\u6539 ",8,Be),a("button",{type:"button",onClick:e=>q(t.id),class:"send-btn btn btn-danger"}," \u522A\u9664 ",8,Xe)])]),Ue]))),128))])]))}};var Te=j(Se,[["__scopeId","data-v-121da7f6"]]);const Ve={class:"container"},Ie={class:"btn-group pt-4",role:"group"},Re={__name:"ActivityView",setup(l){const f=G(),r=_([{title:"\u65B0\u589E",link:"create"},{title:"\u6703\u54E1\u5927\u6703/\u65B0\u5275\u8AD6\u58C7",link:"1"},{title:"\u6BCF\u6708\u5206\u4EAB\u6703",link:"2"},{title:"\u4F01\u696D\u3001\u5B78\u8853\u6A5F\u69CB\u53C3\u8A2A",link:"3"},{title:"\u5916\u9928\u62DC\u8A2A\u3001\u570B\u969B\u4EA4\u6D41\u6216\u5176\u4ED6",link:"4"}]),s=V({create:qa,1:La,2:jt,3:ie,4:Te}),n=V(null);g(f.params.chapters);function g(b){n.value=s.value[b]}return H(()=>f.params.chapters,async b=>g(b),{deep:!0}),(b,h)=>{const m=J("router-link");return i(),c(x,null,[a("div",Ve,[a("div",Ie,[(i(!0),c(x,null,w(r.value,q=>(i(),z(m,{class:"btn btn-outline-primary",key:q.title,to:q.link},{default:R(()=>[M(I(q.title),1)]),_:2},1032,["to"]))),128))])]),(i(),z(O(L(n))))],64)}}};var Ne=j(Re,[["__scopeId","data-v-3ff8ca12"]]);export{Ne as default};
