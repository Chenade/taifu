import{_ as u,r as g,o as i,c as p,b as t,Z as C,g as y,F as h,d as z,z as q,Y as x,Q as _,f as j,p as A,h as Y,$ as Q,a0 as k,C as B,a as Z,U as X,V as U,w as V,S as I,t as S}from"./index.92e70ba0.js";import{I as R}from"./ImageComponent.5c6139a6.js";const T={id:"news-create"},E={class:"container"},D=C('<legend data-v-4b000705>\u65B0\u589E</legend><div class="col-md-6" data-v-4b000705><div class="input-group mb-3" data-v-4b000705><span class="input-group-text" data-v-4b000705>\u5E74\u5206</span><input type="number" name="year" class="form-control" data-v-4b000705></div></div><div class="col-md-6" data-v-4b000705><div class="input-group mb-3" data-v-4b000705><span class="input-group-text" data-v-4b000705>\u540D\u7A31</span><input type="text" name="name" class="form-control" data-v-4b000705></div></div><div class="col-md-12" data-v-4b000705><div class="input-group mb-3" data-v-4b000705><span class="input-group-text" data-v-4b000705>\u6A19\u984C</span><input type="text" name="title" class="form-control" data-v-4b000705></div></div>',4),O={__name:"TstarCreate",setup(f){const{proxy:r}=y(),n=g("form");function b(){const o=new FormData(n.value);r.manage.post("/promo/create",o)}return(o,l)=>(i(),p("section",T,[t("div",E,[t("form",{class:"form row g-3 m-0",ref_key:"form",ref:n},[D,t("div",{class:"col-12"},[t("button",{type:"button",onClick:b,class:"send-btn btn btn-primary"}," \u9001\u51FA ")])],512)])]))}};var F=u(O,[["__scopeId","data-v-4b000705"]]);const s=f=>(A("data-v-036f2531"),f=f(),Y(),f),N={class:"container"},$={class:"col-md-6"},G={class:"input-group mb-3"},H=s(()=>t("span",{class:"input-group-text"},"\u5E74\u5206",-1)),L=["onUpdate:modelValue"],J={class:"col-md-6"},M={class:"input-group mb-3"},K=s(()=>t("span",{class:"input-group-text"},"\u540D\u7A31",-1)),P=["onUpdate:modelValue"],W={class:"col-md-12"},tt={class:"input-group mb-3"},at=s(()=>t("span",{class:"input-group-text"},"\u6A19\u984C",-1)),et=["onUpdate:modelValue"],dt={class:"col-md-12"},ot={class:"input-group mb-3"},it=s(()=>t("span",{class:"input-group-text"},"\u5716\u7247",-1)),rt={key:0,class:"col-3"},nt={class:"card text-dark bg-light mb-3"},lt={class:"card-body"},ct={class:"col-12 pb-3"},pt={class:"btn-group",role:"group"},ft=["onClick"],bt=["onClick"],vt=s(()=>t("hr",{class:"border border-secondary"},null,-1)),st={__name:"TstarOne",setup(f){const{proxy:r}=y(),n=g([]),b=g([]),o="promo";function l(){r.api.get(`/${o}/list`).then(e=>{n.value=e})}l();function v(e){const c=n.value.find(d=>d.id===e),a=JSON.parse(JSON.stringify(c));r.manage.put(`/${o}/${e}`,a),w(e)}async function w(e){const c=b.value[e].files[0];if(!c)return;const a=new FormData;a.append("image",c),await r.manage.post(`/${o}/${e}/store-image`,a),l()}async function m(e){if(!confirm("\u78BA\u8A8D\u522A\u9664?"))return;const c=localStorage.getItem("token");await r.manage.delete(`/${o}/${e}/${c}`),l()}return(e,c)=>(i(),p("section",null,[t("div",N,[(i(!0),p(h,null,z(n.value,a=>(i(),p("form",{class:"form row g-3 m-0",key:a.id},[t("div",$,[t("div",G,[H,q(t("input",{type:"number","onUpdate:modelValue":d=>a.year=d,class:"form-control"},null,8,L),[[x,a.year]])])]),t("div",J,[t("div",M,[K,q(t("input",{type:"text","onUpdate:modelValue":d=>a.name=d,class:"form-control"},null,8,P),[[x,a.name]])])]),t("div",W,[t("div",tt,[at,q(t("input",{type:"text","onUpdate:modelValue":d=>a.title=d,class:"form-control"},null,8,et),[[x,a.title]])])]),t("div",dt,[t("div",ot,[it,t("input",{type:"file",accept:"image/*",class:"form-control image",ref_for:!0,ref:d=>{b.value[a.id]=d}},null,512)])]),a.image?(i(),p("div",rt,[t("div",nt,[t("div",lt,[(i(),_(R,{src:a.image,key:a.image},null,8,["src"]))])])])):j("",!0),t("div",ct,[t("div",pt,[t("button",{type:"button",onClick:d=>v(a.id),class:"send-btn btn btn-primary"}," \u4FEE\u6539 ",8,ft),t("button",{type:"button",onClick:d=>m(a.id),class:"send-btn btn btn-danger"}," \u522A\u9664 ",8,bt)])]),vt]))),128))])]))}};var gt=u(st,[["__scopeId","data-v-036f2531"]]);const mt={class:"container"},qt={class:"btn-group pt-4",role:"group"},xt={__name:"TstarView",setup(f){const r=Q(),n=g([{title:"\u65B0\u589E",link:"create"},{title:"\u66F4\u52D5",link:"1"}]),b=k({create:F,1:gt}),o=k(null);l(r.params.chapters);function l(v){o.value=b.value[v]}return B(()=>r.params.chapters,async v=>l(v),{deep:!0}),(v,w)=>{const m=Z("router-link");return i(),p(h,null,[t("div",mt,[t("div",qt,[(i(!0),p(h,null,z(n.value,e=>(i(),_(m,{class:"btn btn-outline-primary",key:e.title,to:e.link},{default:V(()=>[I(S(e.title),1)]),_:2},1032,["to"]))),128))])]),(i(),_(X(U(o))))],64)}}};var ut=u(xt,[["__scopeId","data-v-4d805c9e"]]);export{ut as default};