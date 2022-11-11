import{r as u,o as r,c as f,b as a,t as V,z as q,Y as x,F as w,_ as A,d as y,Q as j,Z as X,p as $,h as Q,g as U,e as T,$ as N,a0 as B,C as R,a as O,U as E,V as D,w as F,S as G}from"./index.92e70ba0.js";import{I as S}from"./ImageComponent.5c6139a6.js";const H={class:"form-label"},J={class:"input-group mb-3"},L=a("span",{class:"input-group-text"},"\u6A19\u984C",-1),M={class:"input-group mb-3"},K=a("span",{class:"input-group-text"},"\u5167\u6587",-1),Z={__name:"NewsContent",props:{title:{type:String,required:!0},inputText:{type:Object,required:!0}},emits:["update:inputText"],setup(b,{emit:l}){const i=b,m=u(i.title),c=u(i.inputText.title),p=u(i.inputText.content.replaceAll("$?",`
`));function n(){const h={title:c.value,content:p.value.replaceAll(`
`,"$?")};l("update:inputText",h)}return(h,v)=>(r(),f(w,null,[a("label",H,V(m.value),1),a("div",J,[L,q(a("input",{type:"text","onUpdate:modelValue":v[0]||(v[0]=s=>c.value=s),onInput:n,class:"form-control"},null,544),[[x,c.value]])]),a("div",M,[K,q(a("textarea",{class:"form-control","onUpdate:modelValue":v[1]||(v[1]=s=>p.value=s),onInput:n,rows:"4"},null,544),[[x,p.value]])])],64))}};const I=b=>($("data-v-4a19c7cc"),b=b(),Q(),b),P={id:"news-create"},W={class:"container"},aa=X('<legend data-v-4a19c7cc>\u65B0\u589E</legend><div class="col-md-12" data-v-4a19c7cc><div class="input-group mb-3" data-v-4a19c7cc><span class="input-group-text" data-v-4a19c7cc>\u985E\u5225</span><select class="form-control" name="category" data-v-4a19c7cc><option value="1" data-v-4a19c7cc>\u6700\u65B0\u6D3B\u52D5\u6D88\u606F</option><option value="2" data-v-4a19c7cc>\u76F8\u95DC\u5831\u5C0E</option></select></div></div><div class="col-md-12" data-v-4a19c7cc><div class="input-group mb-3" data-v-4a19c7cc><span class="input-group-text" data-v-4a19c7cc>\u6A19\u984C</span><input type="text" name="title" class="form-control" data-v-4a19c7cc></div></div>',3),ta={class:"col-md-12"},ea={class:"btn-group",role:"group"},da={class:"col-md-12"},oa=X('<div class="col-md-12" data-v-4a19c7cc><div class="input-group mb-3" data-v-4a19c7cc><span class="input-group-text" data-v-4a19c7cc>\u9023\u7D50</span><input type="text" name="link" class="form-control" data-v-4a19c7cc></div></div><div class="col-md-12" data-v-4a19c7cc><div class="input-group mb-3" data-v-4a19c7cc><span class="input-group-text" data-v-4a19c7cc>\u9023\u7D50\u6587\u5B57</span><input type="text" name="link_alt" class="form-control" data-v-4a19c7cc></div></div>',2),ia={class:"col-md-12"},ra={class:"input-group mb-3"},ca=I(()=>a("span",{class:"input-group-text"},"\u73FE\u5728\u6642\u9593",-1)),na=["value"],la=I(()=>a("div",{class:"col-md-12"},[a("div",{class:"input-group mb-3"},[a("span",{class:"input-group-text"},"\u6392\u5E8F"),a("input",{type:"number",name:"ord",value:"1",class:"form-control"})])],-1)),ba={__name:"NewsCreate",setup(b){const{proxy:l}=U(),i=u([]),m=u("form"),c=u(Math.ceil(+new Date/1e3));p();function p(){i.value.push({title:"",content:""})}function n(){const h=new FormData(m.value);h.append("content",JSON.stringify(i.value)),l.manage.post("/news/create",h)}return(h,v)=>(r(),f("section",P,[a("div",W,[a("form",{class:"form row g-3 m-0",ref_key:"form",ref:m},[aa,a("div",ta,[a("div",ea,[a("button",{type:"button",class:"btn btn-success",onClick:p}," + "),a("button",{type:"button",class:"btn btn-danger",onClick:v[0]||(v[0]=s=>i.value.pop())}," \u2013 ")])]),a("div",da,[(r(!0),f(w,null,y(i.value,(s,k)=>(r(),j(Z,{title:"\u6BB5\u843D"+(k+1),key:k,inputText:i.value[k],"onUpdate:inputText":d=>i.value[k]=d},null,8,["title","inputText","onUpdate:inputText"]))),128))]),oa,a("div",ia,[a("div",ra,[ca,a("input",{type:"number",name:"ts",value:c.value,class:"form-control"},null,8,na)])]),la,a("div",{class:"col-12"},[a("button",{type:"button",onClick:n,class:"send-btn btn btn-primary"}," \u9001\u51FA ")])],512)])]))}};var fa=A(ba,[["__scopeId","data-v-4a19c7cc"]]);const z=b=>($("data-v-d8b93eec"),b=b(),Q(),b),pa={class:"container"},va={class:"col-md-12"},sa={class:"input-group mb-3"},ga=z(()=>a("span",{class:"input-group-text"},"\u6A19\u984C",-1)),ma=["onUpdate:modelValue"],qa={class:"col-md-12"},xa={class:"btn-group",role:"group"},ha=["onClick"],_a=["onClick"],ua={class:"col-md-12"},wa={class:"col-md-12"},ka={class:"input-group mb-3"},ya=z(()=>a("span",{class:"input-group-text"},"\u9023\u7D50",-1)),za=["onUpdate:modelValue"],Ca={class:"col-md-12"},ja={class:"input-group mb-3"},Aa=z(()=>a("span",{class:"input-group-text"},"\u9023\u7D50\u6587\u5B57",-1)),Ya=["onUpdate:modelValue"],$a={class:"col-md-12"},Qa={class:"input-group mb-3"},Ua=z(()=>a("span",{class:"input-group-text"},"\u73FE\u5728\u6642\u9593",-1)),Za=["onUpdate:modelValue"],Ba={class:"col-md-12"},Va={class:"input-group mb-3"},Xa=z(()=>a("span",{class:"input-group-text"},"\u6392\u5E8F",-1)),Ta=["onUpdate:modelValue"],Sa={class:"col-md-12"},Ia={class:"input-group mb-3"},Na=z(()=>a("span",{class:"input-group-text"},"\u5716\u7247",-1)),Ra={class:"card text-dark bg-light mb-3"},Oa={class:"card-header text-end"},Ea=["onClick"],Da={class:"card-body"},Fa={class:"col-12 pb-3"},Ga={class:"btn-group",role:"group"},Ha=["onClick"],Ja=["onClick"],La=z(()=>a("hr",{class:"border border-secondary"},null,-1)),Ma={__name:"NewsOne",setup(b){const{proxy:l}=U(),i=u([]),m=u([]),c="news";function p(d){i.value[d].content.push({title:"",content:""})}function n(){l.api.get(`/${c}/list/cat/1`).then(d=>{i.value=d;for(const o of i.value)o.image=o.image.split(";").filter(t=>t)})}n();function h(d){const o=i.value.find(g=>g.id===d),t=JSON.parse(JSON.stringify(o));t.content=JSON.stringify(t.content),l.manage.put(`/${c}/${d}`,t),v(d)}async function v(d){const o=m.value[d].files;if(!!o.length){for(const t of o){const g=new FormData;g.append("image",t);try{await l.manage.post(`/${c}/${d}/store-image`,g)}catch(e){console.log(e)}}n()}}async function s(d){if(!confirm("\u78BA\u8A8D\u522A\u9664?"))return;const o=localStorage.getItem("token");await l.manage.delete(`/${c}/${d}/${o}`),n()}async function k(d,o){if(!confirm("\u78BA\u8A8D\u522A\u9664?"))return;const t={filename:o};await l.manage.post(`/${c}/${d}/delete-image`,t),n()}return(d,o)=>(r(),f("section",null,[a("div",pa,[(r(!0),f(w,null,y(i.value,(t,g)=>(r(),f("form",{class:"form row g-3 m-0",key:t.id},[a("div",va,[a("div",sa,[ga,q(a("input",{type:"text","onUpdate:modelValue":e=>t.title=e,class:"form-control"},null,8,ma),[[x,t.title]])])]),a("div",qa,[a("div",xa,[a("button",{type:"button",class:"btn btn-success",onClick:e=>p(g)}," + ",8,ha),a("button",{type:"button",class:"btn btn-danger",onClick:e=>t.content.pop()}," \u2013 ",8,_a)])]),a("div",ua,[(r(!0),f(w,null,y(t.content,(e,_)=>(r(),j(Z,{title:"\u6BB5\u843D"+(_+1),inputText:t.content[_],"onUpdate:inputText":Y=>t.content[_]=Y,key:_},null,8,["title","inputText","onUpdate:inputText"]))),128))]),a("div",wa,[a("div",ka,[ya,q(a("input",{type:"text","onUpdate:modelValue":e=>t.link=e,class:"form-control"},null,8,za),[[x,t.link]])])]),a("div",Ca,[a("div",ja,[Aa,q(a("input",{type:"text","onUpdate:modelValue":e=>t.link_alt=e,class:"form-control"},null,8,Ya),[[x,t.link_alt]])])]),a("div",$a,[a("div",Qa,[Ua,q(a("input",{type:"number","onUpdate:modelValue":e=>t.ts=e,class:"form-control"},null,8,Za),[[x,t.ts]])])]),a("div",Ba,[a("div",Va,[Xa,q(a("input",{type:"number","onUpdate:modelValue":e=>t.ord=e,class:"form-control"},null,8,Ta),[[x,t.ord]])])]),a("div",Sa,[a("div",Ia,[Na,a("input",{type:"file",accept:"image/*",class:"form-control image",ref_for:!0,ref:e=>{m.value[t.id]=e}},null,512)])]),(r(!0),f(w,null,y(t.image,e=>(r(),f("div",{class:"col-3",key:e},[a("div",Ra,[a("div",Oa,[a("button",{type:"button",class:"btn btn-danger btn-sm",onClick:_=>k(t.id,e)}," X ",8,Ea)]),a("div",Da,[T(S,{src:e},null,8,["src"])])])]))),128)),a("div",Fa,[a("div",Ga,[a("button",{type:"button",onClick:e=>h(t.id),class:"send-btn btn btn-primary"}," \u4FEE\u6539 ",8,Ha),a("button",{type:"button",onClick:e=>s(t.id),class:"send-btn btn btn-danger"}," \u522A\u9664 ",8,Ja)])]),La]))),128))])]))}};var Ka=A(Ma,[["__scopeId","data-v-d8b93eec"]]);const C=b=>($("data-v-fdeb9be2"),b=b(),Q(),b),Pa={class:"container"},Wa={class:"col-md-12"},at={class:"input-group mb-3"},tt=C(()=>a("span",{class:"input-group-text"},"\u6A19\u984C",-1)),et=["onUpdate:modelValue"],dt={class:"col-md-12"},ot={class:"btn-group",role:"group"},it=["onClick"],rt=["onClick"],ct={class:"col-md-12"},nt={class:"col-md-12"},lt={class:"input-group mb-3"},bt=C(()=>a("span",{class:"input-group-text"},"\u9023\u7D50",-1)),ft=["onUpdate:modelValue"],pt={class:"col-md-12"},vt={class:"input-group mb-3"},st=C(()=>a("span",{class:"input-group-text"},"\u9023\u7D50\u6587\u5B57",-1)),gt=["onUpdate:modelValue"],mt={class:"col-md-12"},qt={class:"input-group mb-3"},xt=C(()=>a("span",{class:"input-group-text"},"\u73FE\u5728\u6642\u9593",-1)),ht=["onUpdate:modelValue"],_t={class:"col-md-12"},ut={class:"input-group mb-3"},wt=C(()=>a("span",{class:"input-group-text"},"\u6392\u5E8F",-1)),kt=["onUpdate:modelValue"],yt={class:"col-md-12"},zt={class:"input-group mb-3"},Ct=C(()=>a("span",{class:"input-group-text"},"\u5716\u7247",-1)),jt={class:"card text-dark bg-light mb-3"},At={class:"card-header text-end"},Yt=["onClick"],$t={class:"card-body"},Qt={class:"col-12 pb-3"},Ut={class:"btn-group",role:"group"},Zt=["onClick"],Bt=["onClick"],Vt=C(()=>a("hr",{class:"border border-secondary"},null,-1)),Xt={__name:"NewsTwo",setup(b){const{proxy:l}=U(),i=u([]),m=u([]),c="news";function p(d){i.value[d].content.push({title:"",content:""})}function n(){l.api.get(`/${c}/list/cat/2`).then(d=>{i.value=d;for(const o of i.value)o.image=o.image.split(";").filter(t=>t)})}n();function h(d){const o=i.value.find(g=>g.id===d),t=JSON.parse(JSON.stringify(o));t.content=JSON.stringify(t.content),l.manage.put(`/${c}/${d}`,t),v(d)}async function v(d){const o=m.value[d].files;if(!!o.length){for(const t of o){const g=new FormData;g.append("image",t);try{await l.manage.post(`/${c}/${d}/store-image`,g)}catch(e){console.log(e)}}n()}}async function s(d){if(!confirm("\u78BA\u8A8D\u522A\u9664?"))return;const o=localStorage.getItem("token");await l.manage.delete(`/${c}/${d}/${o}`),n()}async function k(d,o){if(!confirm("\u78BA\u8A8D\u522A\u9664?"))return;const t={filename:o};await l.manage.post(`/${c}/${d}/delete-image`,t),n()}return(d,o)=>(r(),f("section",null,[a("div",Pa,[(r(!0),f(w,null,y(i.value,(t,g)=>(r(),f("form",{class:"form row g-3 m-0",key:t.id},[a("div",Wa,[a("div",at,[tt,q(a("input",{type:"text","onUpdate:modelValue":e=>t.title=e,class:"form-control"},null,8,et),[[x,t.title]])])]),a("div",dt,[a("div",ot,[a("button",{type:"button",class:"btn btn-success",onClick:e=>p(g)}," + ",8,it),a("button",{type:"button",class:"btn btn-danger",onClick:e=>t.content.pop()}," \u2013 ",8,rt)])]),a("div",ct,[(r(!0),f(w,null,y(t.content,(e,_)=>(r(),j(Z,{title:"\u6BB5\u843D"+(_+1),inputText:t.content[_],"onUpdate:inputText":Y=>t.content[_]=Y,key:_},null,8,["title","inputText","onUpdate:inputText"]))),128))]),a("div",nt,[a("div",lt,[bt,q(a("input",{type:"text","onUpdate:modelValue":e=>t.link=e,class:"form-control"},null,8,ft),[[x,t.link]])])]),a("div",pt,[a("div",vt,[st,q(a("input",{type:"text","onUpdate:modelValue":e=>t.link_alt=e,class:"form-control"},null,8,gt),[[x,t.link_alt]])])]),a("div",mt,[a("div",qt,[xt,q(a("input",{type:"number","onUpdate:modelValue":e=>t.ts=e,class:"form-control"},null,8,ht),[[x,t.ts]])])]),a("div",_t,[a("div",ut,[wt,q(a("input",{type:"number","onUpdate:modelValue":e=>t.ord=e,class:"form-control"},null,8,kt),[[x,t.ord]])])]),a("div",yt,[a("div",zt,[Ct,a("input",{type:"file",accept:"image/*",class:"form-control image",ref_for:!0,ref:e=>{m.value[t.id]=e}},null,512)])]),(r(!0),f(w,null,y(t.image,e=>(r(),f("div",{class:"col-3",key:e},[a("div",jt,[a("div",At,[a("button",{type:"button",class:"btn btn-danger btn-sm",onClick:_=>k(t.id,e)}," X ",8,Yt)]),a("div",$t,[T(S,{src:e},null,8,["src"])])])]))),128)),a("div",Qt,[a("div",Ut,[a("button",{type:"button",onClick:e=>h(t.id),class:"send-btn btn btn-primary"}," \u4FEE\u6539 ",8,Zt),a("button",{type:"button",onClick:e=>s(t.id),class:"send-btn btn btn-danger"}," \u522A\u9664 ",8,Bt)])]),Vt]))),128))])]))}};var Tt=A(Xt,[["__scopeId","data-v-fdeb9be2"]]);const St={class:"container"},It={class:"btn-group pt-4",role:"group"},Nt={__name:"NewsView",setup(b){const l=N(),i=u([{title:"\u65B0\u589E",link:"create"},{title:"\u6700\u65B0\u6D3B\u52D5\u6D88\u606F",link:"1"},{title:"\u76F8\u95DC\u5831\u5C0E",link:"2"}]),m=B({create:fa,1:Ka,2:Tt}),c=B(null);p(l.params.chapters);function p(n){c.value=m.value[n]}return R(()=>l.params.chapters,async n=>p(n),{deep:!0}),(n,h)=>{const v=O("router-link");return r(),f(w,null,[a("div",St,[a("div",It,[(r(!0),f(w,null,y(i.value,s=>(r(),j(v,{class:"btn btn-outline-primary",key:s.title,to:s.link},{default:F(()=>[G(V(s.title),1)]),_:2},1032,["to"]))),128))])]),(r(),j(E(D(c))))],64)}}};var Et=A(Nt,[["__scopeId","data-v-07f4959a"]]);export{Et as default};
