import{_ as g,g as m,r as l,o as i,c as p,b as t,z as q,Y as x,Q as h,f as _,p as u,h as w}from"./index.92e70ba0.js";import{I as k}from"./ImageComponent.5c6139a6.js";const r=e=>(u("data-v-77bfdbb0"),e=e(),w(),e),y={id:"board-leader"},z={class:"container"},C={class:"form row g-3"},j=r(()=>t("legend",null,"\u7406\u4E8B\u9577\uFF5C\u694A\u5927\u5FB7",-1)),A={class:"col-md-12"},Y=r(()=>t("label",{class:"form-label"},"\u5167\u5BB9",-1)),B={class:"col-md-12"},Q=r(()=>t("label",{class:"form-label"},"\u5716\u7247",-1)),I={key:0,class:"col-3"},Z={class:"card text-dark bg-light mb-3"},X={class:"card-body"},S={__name:"BoardLeader",setup(e){const{proxy:o}=m(),a=l({}),n=l(null);f();function f(){o.api.get("/board/leader").then(b=>{a.value=b})}async function v(){const b=n.value.files[0];if(b===void 0)return;const d=new FormData;d.append("image",b),await o.manage.post("/board/1/store-image",d),f()}function c(){o.manage.put("/board/leader",{content:a.value.content}),v()}return(b,d)=>(i(),p("section",y,[t("div",z,[t("form",C,[j,t("div",A,[Y,q(t("textarea",{class:"form-control","onUpdate:modelValue":d[0]||(d[0]=s=>a.value.content=s),rows:"8",placeholder:"Content"},null,512),[[x,a.value.content]])]),t("div",B,[Q,t("input",{class:"form-control",ref_key:"image",ref:n,type:"file",accept:"image/*"},null,512)]),a.value.image?(i(),p("div",I,[t("div",Z,[t("div",X,[(i(),h(k,{src:a.value.image,key:a.value.image},null,8,["src"]))])])])):_("",!0),t("div",{class:"col-12"},[t("button",{type:"button",onClick:c,class:"send-btn btn btn-primary border-danger"}," \u9001\u51FA ")])])])]))}};var U=g(S,[["__scopeId","data-v-77bfdbb0"]]);export{U as default};
