import{H as Wt}from"./HeaderMain.cfb61ca4.js";import{I as bt}from"./ImageComponent.dcfd7584.js";import{r as Q,a as te,o as k,c as y,b as s,t as Y,F as N,d as K,e as E,w as I,f as at,g as V,_ as J,p as dt,h as nt,i as pt,n as ee,m as Zt,j as ae,P as oe,k as W,l as ie,q as re,s as et,u as ct,v as gt,x as O,y as rt,z as Pt,A as g,B as b,C as G,D as de,T as Xt,K as ne,E as mt,G as It,H as Tt,I as xt,J as le,L as pe,M as Ot,N as _t,O as ce,Q as se,R as fe,S as vt}from"./index.ee3bd8bb.js";var be="/assets/\u5275\u6703\u6703\u9577.b213450a.jpg";const ge={class:"container py-4"},me={class:"box"},ve={class:"region"},qe={class:"text-header"},xe={class:"text-content"},he={class:"list-group list-group-flush"},_e={key:0,class:"image-box"},ue={class:"banner"},we={key:0,class:"image-box"},ke={class:"banner"},ye={__name:"AboutBlock",setup(t){const{proxy:e}=V(),a=Q({}),d=Q({});return e.api.get("/banner/latest").then(n=>{a.value=n.news,d.value=n.activity}),(n,o)=>{const r=te("router-link");return k(),y("div",ge,[s("div",me,[s("div",ve,[s("div",qe,Y(n.$t("about.header")),1),s("div",xe,[s("ul",he,[(k(!0),y(N,null,K(n.$i18n.messages[n.$i18n.locale].about.content,i=>(k(),y("li",{class:"list-group-item",key:i},Y(i),1))),128))])])]),E(r,{class:"region",to:"/active"},{default:I(()=>[a.value.image?(k(),y("div",_e,[E(bt,{src:a.value.image},null,8,["src"]),s("div",ue,Y(a.value.title),1)])):at("",!0)]),_:1}),E(r,{class:"region",to:"/active"},{default:I(()=>[d.value.image?(k(),y("div",we,[E(bt,{src:d.value.image},null,8,["src"]),s("div",ke,Y(d.value.title),1)])):at("",!0)]),_:1})])])}}};var ze="/assets/\u7DE3\u8D77.8762a74f.jpg",Ce="/assets/temp.07122d64.png";const je={},Lt=t=>(dt("data-v-3464e225"),t=t(),nt(),t),Ae={class:"container"},Ye={class:"introduce-box"},$e={class:"introduce-content"},Be={class:"text-title"},Se={class:"text-content"},Ee={class:"flex-list flex-right"},Qe=Lt(()=>s("div",{class:"flex-img"},[s("img",{src:ze,alt:"\u7DE3\u8D77"})],-1)),Re={class:"flex-text"},Ze={class:"flex-list flex-left"},Pe=Lt(()=>s("div",{class:"flex-img"},[s("img",{src:Ce,alt:"\u7DE3\u8D77"})],-1)),Xe={class:"flex-text"};function Ie(t,e){return k(),y("div",Ae,[s("div",Ye,[s("div",$e,[s("h5",Be,Y(t.$t("origin.header")),1),s("div",Se,[s("div",Ee,[Qe,s("span",Re,Y(t.$t("origin.content[0]")),1)]),s("div",Ze,[Pe,s("span",Xe,Y(t.$t("origin.content[1]")),1)])])])])])}var Te=J(je,[["render",Ie],["__scopeId","data-v-3464e225"]]);const Oe={},Le=t=>(dt("data-v-3df99b51"),t=t(),nt(),t),Ve={class:"container"},Ne={class:"purpose-box"},Fe={class:"purpose-content"},Ue={class:"text-title"},De={class:"text-content"},Me={class:"left-group"},He=Le(()=>s("div",{class:"line"},null,-1)),Ge={class:"right-group"},Ke={class:"list-group-title"},Je={class:"list-group list-group-flush mb-2"};function We(t,e){return k(),y("div",Ve,[s("div",Ne,[s("div",Fe,[s("h5",Ue,Y(t.$t("purposr.header")),1),s("div",De,[s("div",Me,[(k(!0),y(N,null,K(t.$i18n.messages[t.$i18n.locale].purposr.content.description,a=>(k(),y("p",{class:"group-text",key:a},Y(a),1))),128))]),He,s("div",Ge,[s("span",Ke,Y(t.$t("purposr.content.activity.header")),1),s("ul",Je,[(k(!0),y(N,null,K(t.$i18n.messages[t.$i18n.locale].purposr.content.activity.content,a=>(k(),y("li",{class:"list-group-item",key:a},Y(a),1))),128))])])])])])])}var ta=J(Oe,[["render",We],["__scopeId","data-v-3df99b51"]]);const ea={class:"container pb-4"},aa={class:"box-inside"},oa={class:"img-box"},ia={class:"text-box"},ra={class:"text-title"},da={class:"text-content"},ut={__name:"ChairmanBlock",props:{side:String},setup(t){const a=Q(t.side==="right");return(d,n)=>(k(),y("div",ea,[s("div",{class:ee(["box-outside",{right:a.value}])},[s("div",aa,[s("div",oa,[pt(d.$slots,"image")]),s("div",ia,[s("h4",ra,[pt(d.$slots,"title")]),s("div",da,[pt(d.$slots,"text")])])])],2)]))}},ot=t=>Zt(ae(t)),Vt=t=>Zt(t),ht={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},na=Object.keys(ht);ht.all=!0;function wt(t){const e={};for(const a of na)t[a]===!0&&(e[a]=!0);return Object.keys(e).length===0?ht:(e.horizontal===!0?e.left=e.right=!0:e.left===!0&&e.right===!0&&(e.horizontal=!0),e.vertical===!0?e.up=e.down=!0:e.up===!0&&e.down===!0&&(e.vertical=!0),e.horizontal===!0&&e.vertical===!0&&(e.all=!0),e)}function kt(t,e){return e.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof e.handler=="function"&&t.target.nodeName.toUpperCase()!=="INPUT"&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(e.uid)===-1)}function la(){if(window.getSelection!==void 0){const t=window.getSelection();t.empty!==void 0?t.empty():t.removeAllRanges!==void 0&&(t.removeAllRanges(),oe.is.mobile!==!0&&t.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function pa(t){const e=[.06,6,50];return typeof t=="string"&&t.length&&t.split(":").forEach((a,d)=>{const n=parseFloat(a);n&&(e[d]=n)}),e}var ca=Vt({name:"touch-swipe",beforeMount(t,{value:e,arg:a,modifiers:d}){if(d.mouse!==!0&&W.has.touch!==!0)return;const n=d.mouseCapture===!0?"Capture":"",o={handler:e,sensitivity:pa(a),direction:wt(d),noop:ie,mouseStart(r){kt(r,o)&&re(r)&&(et(o,"temp",[[document,"mousemove","move",`notPassive${n}`],[document,"mouseup","end","notPassiveCapture"]]),o.start(r,!0))},touchStart(r){if(kt(r,o)){const i=r.target;et(o,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","notPassiveCapture"],[i,"touchend","end","notPassiveCapture"]]),o.start(r)}},start(r,i){W.is.firefox===!0&&ct(t,!0);const v=gt(r);o.event={x:v.left,y:v.top,time:Date.now(),mouse:i===!0,dir:!1}},move(r){if(o.event===void 0)return;if(o.event.dir!==!1){O(r);return}const i=Date.now()-o.event.time;if(i===0)return;const v=gt(r),w=v.left-o.event.x,f=Math.abs(w),u=v.top-o.event.y,q=Math.abs(u);if(o.event.mouse!==!0){if(f<o.sensitivity[1]&&q<o.sensitivity[1]){o.end(r);return}}else if(f<o.sensitivity[2]&&q<o.sensitivity[2])return;const l=f/i,C=q/i;o.direction.vertical===!0&&f<q&&f<100&&C>o.sensitivity[0]&&(o.event.dir=u<0?"up":"down"),o.direction.horizontal===!0&&f>q&&q<100&&l>o.sensitivity[0]&&(o.event.dir=w<0?"left":"right"),o.direction.up===!0&&f<q&&u<0&&f<100&&C>o.sensitivity[0]&&(o.event.dir="up"),o.direction.down===!0&&f<q&&u>0&&f<100&&C>o.sensitivity[0]&&(o.event.dir="down"),o.direction.left===!0&&f>q&&w<0&&q<100&&l>o.sensitivity[0]&&(o.event.dir="left"),o.direction.right===!0&&f>q&&w>0&&q<100&&l>o.sensitivity[0]&&(o.event.dir="right"),o.event.dir!==!1?(O(r),o.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),la(),o.styleCleanup=z=>{o.styleCleanup=void 0,document.body.classList.remove("non-selectable");const m=()=>{document.body.classList.remove("no-pointer-events--children")};z===!0?setTimeout(m,50):m()}),o.handler({evt:r,touch:o.event.mouse!==!0,mouse:o.event.mouse,direction:o.event.dir,duration:i,distance:{x:f,y:q}})):o.end(r)},end(r){o.event!==void 0&&(rt(o,"temp"),W.is.firefox===!0&&ct(t,!1),o.styleCleanup!==void 0&&o.styleCleanup(!0),r!==void 0&&o.event.dir!==!1&&O(r),o.event=void 0)}};t.__qtouchswipe=o,d.mouse===!0&&et(o,"main",[[t,"mousedown","mouseStart",`passive${n}`]]),W.has.touch===!0&&et(o,"main",[[t,"touchstart","touchStart",`passive${d.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,e){const a=t.__qtouchswipe;a!==void 0&&(e.oldValue!==e.value&&(typeof e.value!="function"&&a.end(),a.handler=e.value),a.direction=wt(e.modifiers))},beforeUnmount(t){const e=t.__qtouchswipe;e!==void 0&&(rt(e,"main"),rt(e,"temp"),W.is.firefox===!0&&ct(t,!1),e.styleCleanup!==void 0&&e.styleCleanup(),delete t.__qtouchswipe)}});function sa(){const t=new Map;return{getCache:function(e,a){return t[e]===void 0?t[e]=a:t[e]},getCacheWithFn:function(e,a){return t[e]===void 0?t[e]=a():t[e]}}}function lt(t,e){return t!==void 0&&t()||e}function H(t,e){return t!==void 0?e.concat(t()):e}function fa(t,e,a,d,n,o){e.key=d+n;const r=g(t,e,a);return n===!0?Pt(r,o()):r}function Nt(t,e){typeof e.type=="symbol"?Array.isArray(e.children)===!0&&e.children.forEach(a=>{Nt(t,a)}):t.add(e)}function ba(t){const e=new Set;return t.forEach(a=>{Nt(e,a)}),Array.from(e)}function Ft(t){return t.appContext.config.globalProperties.$router!==void 0}const ga={name:{required:!0},disable:Boolean},yt={setup(t,{slots:e}){return()=>g("div",{class:"q-panel scroll",role:"tabpanel"},lt(e.default))}},ma={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},va=["update:modelValue","before-transition","transition"];function qa(){const{props:t,emit:e,proxy:a}=V(),{getCacheWithFn:d}=sa();let n,o;const r=Q(null),i=Q(null);function v(c){const h=t.vertical===!0?"up":"left";P((a.$q.lang.rtl===!0?-1:1)*(c.direction===h?1:-1))}const w=b(()=>[[ca,v,void 0,{horizontal:t.vertical!==!0,vertical:t.vertical,mouse:!0}]]),f=b(()=>t.transitionPrev||`slide-${t.vertical===!0?"down":"right"}`),u=b(()=>t.transitionNext||`slide-${t.vertical===!0?"up":"left"}`),q=b(()=>`--q-transition-duration: ${t.transitionDuration}ms`),l=b(()=>typeof t.modelValue=="string"||typeof t.modelValue=="number"?t.modelValue:String(t.modelValue)),C=b(()=>({include:t.keepAliveInclude,exclude:t.keepAliveExclude,max:t.keepAliveMax})),z=b(()=>t.keepAliveInclude!==void 0||t.keepAliveExclude!==void 0);G(()=>t.modelValue,(c,h)=>{const p=B(c)===!0?$(c):-1;o!==!0&&Z(p===-1?0:p<$(h)?-1:1),r.value!==p&&(r.value=p,e("before-transition",c,h),de(()=>{e("transition",c,h)}))});function m(){P(1)}function x(){P(-1)}Object.assign(a,{next:m,previous:x,goTo:A});function A(c){e("update:modelValue",c)}function B(c){return c!=null&&c!==""}function $(c){return n.findIndex(h=>h.props.name===c&&h.props.disable!==""&&h.props.disable!==!0)}function X(){return n.filter(c=>c.props.disable!==""&&c.props.disable!==!0)}function Z(c){const h=c!==0&&t.animated===!0&&r.value!==-1?"q-transition--"+(c===-1?f.value:u.value):null;i.value!==h&&(i.value=h)}function P(c,h=r.value){let p=h+c;for(;p>-1&&p<n.length;){const _=n[p];if(_!==void 0&&_.props.disable!==""&&_.props.disable!==!0){Z(c),o=!0,e("update:modelValue",_.props.name),setTimeout(()=>{o=!1});return}p+=c}t.infinite===!0&&n.length>0&&h!==-1&&h!==n.length&&P(c,c===-1?n.length:-1)}function L(){const c=$(t.modelValue);return r.value!==c&&(r.value=c),!0}function F(){const c=B(t.modelValue)===!0&&L()&&n[r.value];return t.keepAlive===!0?[g(ne,C.value,[g(z.value===!0?d(l.value,()=>({...yt,name:l.value})):yt,{key:l.value,style:q.value},()=>c)])]:[g("div",{class:"q-panel scroll",style:q.value,key:l.value,role:"tabpanel"},[c])]}function j(){if(n.length!==0)return t.animated===!0?[g(Xt,{name:i.value},F)]:F()}function T(c){return n=ba(lt(c.default,[])).filter(h=>h.props!==null&&h.props.slot===void 0&&B(h.props.name)===!0),n.length}function S(){return n}return{panelIndex:r,panelDirectives:w,updatePanelsList:T,updatePanelIndex:L,getPanelContent:j,getEnabledPanels:X,getPanels:S,isValidPanelName:B,keepAliveProps:C,needsUniqueKeepAliveWrapper:z,goToPanelByOffset:P,goToPanel:A,nextPanel:m,previousPanel:x}}var xa=ot({name:"QCarouselSlide",props:{...ga,imgSrc:String},setup(t,{slots:e}){const a=b(()=>t.imgSrc?{backgroundImage:`url("${t.imgSrc}")`}:{});return()=>g("div",{class:"q-carousel__slide",style:a.value},lt(e.default))}});const qt={xs:18,sm:24,md:32,lg:38,xl:46},Ut={size:String};function Dt(t,e=qt){return b(()=>t.size!==void 0?{fontSize:t.size in e?`${e[t.size]}px`:t.size}:null)}const zt="0 0 24 24",Ct=t=>t,st=t=>`ionicons ${t}`,Mt={"mdi-":t=>`mdi ${t}`,"icon-":Ct,"bt-":t=>`bt ${t}`,"eva-":t=>`eva ${t}`,"ion-md":st,"ion-ios":st,"ion-logo":st,"iconfont ":Ct,"ti-":t=>`themify-icon ${t}`,"bi-":t=>`bootstrap-icons ${t}`},Ht={o_:"-outlined",r_:"-round",s_:"-sharp"},Gt={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},ha=new RegExp("^("+Object.keys(Mt).join("|")+")"),_a=new RegExp("^("+Object.keys(Ht).join("|")+")"),jt=new RegExp("^("+Object.keys(Gt).join("|")+")"),ua=/^[Mm]\s?[-+]?\.?\d/,wa=/^img:/,ka=/^svguse:/,ya=/^ion-/,za=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var At=ot({name:"QIcon",props:{...Ut,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(t,{slots:e}){const{proxy:{$q:a}}=V(),d=Dt(t),n=b(()=>"q-icon"+(t.left===!0?" on-left":"")+(t.right===!0?" on-right":"")+(t.color!==void 0?` text-${t.color}`:"")),o=b(()=>{let r,i=t.name;if(i==="none"||!i)return{none:!0};if(a.iconMapFn!==null){const f=a.iconMapFn(i);if(f!==void 0)if(f.icon!==void 0){if(i=f.icon,i==="none"||!i)return{none:!0}}else return{cls:f.cls,content:f.content!==void 0?f.content:" "}}if(ua.test(i)===!0){const[f,u=zt]=i.split("|");return{svg:!0,viewBox:u,nodes:f.split("&&").map(q=>{const[l,C,z]=q.split("@@");return g("path",{style:C,d:l,transform:z})})}}if(wa.test(i)===!0)return{img:!0,src:i.substring(4)};if(ka.test(i)===!0){const[f,u=zt]=i.split("|");return{svguse:!0,src:f.substring(7),viewBox:u}}let v=" ";const w=i.match(ha);if(w!==null)r=Mt[w[1]](i);else if(za.test(i)===!0)r=i;else if(ya.test(i)===!0)r=`ionicons ion-${a.platform.is.ios===!0?"ios":"md"}${i.substring(3)}`;else if(jt.test(i)===!0){r="notranslate material-symbols";const f=i.match(jt);f!==null&&(i=i.substring(6),r+=Gt[f[1]]),v=i}else{r="notranslate material-icons";const f=i.match(_a);f!==null&&(i=i.substring(2),r+=Ht[f[1]]),v=i}return{cls:r,content:v}});return()=>{const r={class:n.value,style:d.value,"aria-hidden":"true",role:"presentation"};return o.value.none===!0?g(t.tag,r,lt(e.default)):o.value.img===!0?g("span",r,H(e.default,[g("img",{src:o.value.src})])):o.value.svg===!0?g("span",r,H(e.default,[g("svg",{viewBox:o.value.viewBox||"0 0 24 24"},o.value.nodes)])):o.value.svguse===!0?g("span",r,H(e.default,[g("svg",{viewBox:o.value.viewBox},[g("use",{"xlink:href":o.value.src})])])):(o.value.cls!==void 0&&(r.class+=" "+o.value.cls),g(t.tag,r,H(e.default,[o.value.content])))}}});const Ca={size:{type:[Number,String],default:"1em"},color:String};function ja(t){return{cSize:b(()=>t.size in qt?`${qt[t.size]}px`:t.size),classes:b(()=>"q-spinner"+(t.color?` text-${t.color}`:""))}}var Aa=ot({name:"QSpinner",props:{...Ca,thickness:{type:Number,default:5}},setup(t){const{cSize:e,classes:a}=ja(t);return()=>g("svg",{class:a.value+" q-spinner-mat",width:e.value,height:e.value,viewBox:"25 25 50 50"},[g("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":t.thickness,"stroke-miterlimit":"10"})])}});function Ya(t,e){const a=t.style;for(const d in e)a[d]=e[d]}function $a(t,e=250){let a=!1,d;return function(){return a===!1&&(a=!0,setTimeout(()=>{a=!1},e),d=t.apply(this,arguments)),d}}function Yt(t,e,a,d){a.modifiers.stop===!0&&It(t);const n=a.modifiers.color;let o=a.modifiers.center;o=o===!0||d===!0;const r=document.createElement("span"),i=document.createElement("span"),v=gt(t),{left:w,top:f,width:u,height:q}=e.getBoundingClientRect(),l=Math.sqrt(u*u+q*q),C=l/2,z=`${(u-l)/2}px`,m=o?z:`${v.left-w-C}px`,x=`${(q-l)/2}px`,A=o?x:`${v.top-f-C}px`;i.className="q-ripple__inner",Ya(i,{height:`${l}px`,width:`${l}px`,transform:`translate3d(${m},${A},0) scale3d(.2,.2,1)`,opacity:0}),r.className=`q-ripple${n?" text-"+n:""}`,r.setAttribute("dir","ltr"),r.appendChild(i),e.appendChild(r);const B=()=>{r.remove(),clearTimeout($)};a.abort.push(B);let $=setTimeout(()=>{i.classList.add("q-ripple__inner--enter"),i.style.transform=`translate3d(${z},${x},0) scale3d(1,1,1)`,i.style.opacity=.2,$=setTimeout(()=>{i.classList.remove("q-ripple__inner--enter"),i.classList.add("q-ripple__inner--leave"),i.style.opacity=0,$=setTimeout(()=>{r.remove(),a.abort.splice(a.abort.indexOf(B),1)},275)},250)},50)}function $t(t,{modifiers:e,value:a,arg:d}){const n=Object.assign({},t.cfg.ripple,e,a);t.modifiers={early:n.early===!0,stop:n.stop===!0,center:n.center===!0,color:n.color||d,keyCodes:[].concat(n.keyCodes||13)}}var Ba=Vt({name:"ripple",beforeMount(t,e){const a={cfg:e.instance.$.appContext.config.globalProperties.$q.config,enabled:e.value!==!1,modifiers:{},abort:[],start(d){a.enabled===!0&&d.qSkipRipple!==!0&&d.type===(a.modifiers.early===!0?"pointerdown":"click")&&Yt(d,t,a,d.qKeyEvent===!0)},keystart:$a(d=>{a.enabled===!0&&d.qSkipRipple!==!0&&mt(d,a.modifiers.keyCodes)===!0&&d.type===`key${a.modifiers.early===!0?"down":"up"}`&&Yt(d,t,a,!0)},300)};$t(a,e),t.__qripple=a,et(a,"main",[[t,"pointerdown","start","passive"],[t,"click","start","passive"],[t,"keydown","keystart","passive"],[t,"keyup","keystart","passive"]])},updated(t,e){if(e.oldValue!==e.value){const a=t.__qripple;a.enabled=e.value!==!1,a.enabled===!0&&Object(e.value)===e.value&&$t(a,e)}},beforeUnmount(t){const e=t.__qripple;e.abort.forEach(a=>{a()}),rt(e,"main"),delete t._qripple}});const Kt={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Sa=Object.keys(Kt),Ea={align:{type:String,validator:t=>Sa.includes(t)}};function Qa(t){return b(()=>{const e=t.align===void 0?t.vertical===!0?"stretch":"left":t.align;return`${t.vertical===!0?"items":"justify"}-${Kt[e]}`})}function Bt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}function St(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ra(t,e){for(const a in e){const d=e[a],n=t[a];if(typeof d=="string"){if(d!==n)return!1}else if(Array.isArray(n)===!1||n.length!==d.length||d.some((o,r)=>o!==n[r]))return!1}return!0}function Et(t,e){return Array.isArray(e)===!0?t.length===e.length&&t.every((a,d)=>a===e[d]):t.length===1&&t[0]===e}function Za(t,e){return Array.isArray(t)===!0?Et(t,e):Array.isArray(e)===!0?Et(e,t):t===e}function Pa(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const a in t)if(Za(t[a],e[a])===!1)return!1;return!0}const Xa={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Ia(t){const e=V(),{props:a,proxy:d}=e,n=Ft(e),o=b(()=>a.disable!==!0&&a.href!==void 0),r=b(()=>n===!0&&a.disable!==!0&&o.value!==!0&&a.to!==void 0&&a.to!==null&&a.to!==""),i=b(()=>{if(r.value===!0)try{return d.$router.resolve(a.to)}catch{}return null}),v=b(()=>i.value!==null),w=b(()=>o.value===!0||v.value===!0),f=b(()=>a.type==="a"||w.value===!0?"a":a.tag||t||"div"),u=b(()=>o.value===!0?{href:a.href,target:a.target}:v.value===!0?{href:i.value.href,target:a.target}:{}),q=b(()=>{if(v.value===!1)return null;const{matched:x}=i.value,{length:A}=x,B=x[A-1];if(B===void 0)return-1;const $=d.$route.matched;if($.length===0)return-1;const X=$.findIndex(St.bind(null,B));if(X>-1)return X;const Z=Bt(x[A-2]);return A>1&&Bt(B)===Z&&$[$.length-1].path!==Z?$.findIndex(St.bind(null,x[A-2])):X}),l=b(()=>v.value===!0&&q.value>-1&&Ra(d.$route.params,i.value.params)),C=b(()=>l.value===!0&&q.value===d.$route.matched.length-1&&Pa(d.$route.params,i.value.params)),z=b(()=>v.value===!0?C.value===!0?` ${a.exactActiveClass} ${a.activeClass}`:a.exact===!0?"":l.value===!0?` ${a.activeClass}`:"":"");function m(x){return a.disable===!0||x.metaKey||x.altKey||x.ctrlKey||x.shiftKey||x.__qNavigate!==!0&&x.defaultPrevented===!0||x.button!==void 0&&x.button!==0||a.target==="_blank"?!1:(Tt(x),d.$router[a.replace===!0?"replace":"push"](a.to).catch(A=>A))}return{hasRouterLink:v,hasHrefLink:o,hasLink:w,linkTag:f,linkRoute:i,linkIsActive:l,linkIsExactActive:C,linkClass:z,linkProps:u,navigateToRouterLink:m}}const Qt={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Ta={xs:8,sm:10,md:14,lg:20,xl:24},Oa=["button","submit","reset"],La=/[^\s]\/[^\s]/,Va={...Ut,...Xa,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,round:Boolean,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Ea.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Na(t){const e=Dt(t,Ta),a=Qa(t),{hasRouterLink:d,hasLink:n,linkTag:o,linkProps:r,navigateToRouterLink:i}=Ia("button"),v=b(()=>{const m=t.fab===!1&&t.fabMini===!1?e.value:{};return t.padding!==void 0?Object.assign({},m,{padding:t.padding.split(/\s+/).map(x=>x in Qt?Qt[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):m}),w=b(()=>t.rounded===!0||t.fab===!0||t.fabMini===!0),f=b(()=>t.disable!==!0&&t.loading!==!0),u=b(()=>f.value===!0?t.tabindex||0:-1),q=b(()=>t.flat===!0?"flat":t.outline===!0?"outline":t.push===!0?"push":t.unelevated===!0?"unelevated":"standard"),l=b(()=>{const m={tabindex:u.value};return n.value===!0?Object.assign(m,r.value):Oa.includes(t.type)===!0&&(m.type=t.type),o.value==="a"?(t.disable===!0?m["aria-disabled"]="true":m.href===void 0&&(m.role="button"),d.value!==!0&&La.test(t.type)===!0&&(m.type=t.type)):t.disable===!0&&(m.disabled="",m["aria-disabled"]="true"),t.loading===!0&&t.percentage!==void 0&&Object.assign(m,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":t.percentage}),m}),C=b(()=>{let m;return t.color!==void 0?t.flat===!0||t.outline===!0?m=`text-${t.textColor||t.color}`:m=`bg-${t.color} text-${t.textColor||"white"}`:t.textColor&&(m=`text-${t.textColor}`),`q-btn--${q.value} q-btn--${t.round===!0?"round":`rectangle${w.value===!0?" q-btn--rounded":""}`}`+(m!==void 0?" "+m:"")+(f.value===!0?" q-btn--actionable q-focusable q-hoverable":t.disable===!0?" disabled":"")+(t.fab===!0?" q-btn--fab":t.fabMini===!0?" q-btn--fab-mini":"")+(t.noCaps===!0?" q-btn--no-uppercase":"")+(t.dense===!0?" q-btn--dense":"")+(t.stretch===!0?" no-border-radius self-stretch":"")+(t.glossy===!0?" glossy":"")}),z=b(()=>a.value+(t.stack===!0?" column":" row")+(t.noWrap===!0?" no-wrap text-no-wrap":"")+(t.loading===!0?" q-btn__content--hidden":""));return{classes:C,style:v,innerClasses:z,attributes:l,hasRouterLink:d,hasLink:n,linkTag:o,navigateToRouterLink:i,isActionable:f}}const{passiveCapture:R}=le;let U=null,D=null,M=null;var ft=ot({name:"QBtn",props:{...Va,percentage:Number,darkPercentage:Boolean},emits:["click","keydown","touchstart","mousedown","keyup"],setup(t,{slots:e,emit:a}){const{proxy:d}=V(),{classes:n,style:o,innerClasses:r,attributes:i,hasRouterLink:v,hasLink:w,linkTag:f,navigateToRouterLink:u,isActionable:q}=Na(t),l=Q(null),C=Q(null);let z=null,m,x;const A=b(()=>t.label!==void 0&&t.label!==null&&t.label!==""),B=b(()=>t.disable===!0||t.ripple===!1?!1:{keyCodes:w.value===!0?[13,32]:[13],...t.ripple===!0?{}:t.ripple}),$=b(()=>({center:t.round})),X=b(()=>{const p=Math.max(0,Math.min(100,t.percentage));return p>0?{transition:"transform 0.6s",transform:`translateX(${p-100}%)`}:{}}),Z=b(()=>t.loading===!0?{onMousedown:h,onTouchstartPassive:h,onClick:h,onKeydown:h,onKeyup:h}:q.value===!0?{onClick:L,onKeydown:F,onMousedown:T,onTouchstart:j}:{onClick:O}),P=b(()=>({ref:l,class:"q-btn q-btn-item non-selectable no-outline "+n.value,style:o.value,...i.value,...Z.value}));function L(p){if(l.value!==null){if(p!==void 0){if(p.defaultPrevented===!0)return;const _=document.activeElement;if(t.type==="submit"&&_!==document.body&&l.value.contains(_)===!1&&_.contains(l.value)===!1){l.value.focus();const it=()=>{document.removeEventListener("keydown",O,!0),document.removeEventListener("keyup",it,R),l.value!==null&&l.value.removeEventListener("blur",it,R)};document.addEventListener("keydown",O,!0),document.addEventListener("keyup",it,R),l.value.addEventListener("blur",it,R)}}if(v.value===!0){const _=()=>{p.__qNavigate=!0,u(p)};a("click",p,_),p.defaultPrevented!==!0&&_()}else a("click",p)}}function F(p){l.value!==null&&(a("keydown",p),mt(p,[13,32])===!0&&D!==l.value&&(D!==null&&c(),p.defaultPrevented!==!0&&(l.value.focus(),D=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("keyup",S,!0),l.value.addEventListener("blur",S,R)),O(p)))}function j(p){l.value!==null&&(a("touchstart",p),p.defaultPrevented!==!0&&(U!==l.value&&(U!==null&&c(),U=l.value,z=p.target,z.addEventListener("touchcancel",S,R),z.addEventListener("touchend",S,R)),m=!0,clearTimeout(x),x=setTimeout(()=>{m=!1},200)))}function T(p){l.value!==null&&(p.qSkipRipple=m===!0,a("mousedown",p),p.defaultPrevented!==!0&&M!==l.value&&(M!==null&&c(),M=l.value,l.value.classList.add("q-btn--active"),document.addEventListener("mouseup",S,R)))}function S(p){if(l.value!==null&&!(p!==void 0&&p.type==="blur"&&document.activeElement===l.value)){if(p!==void 0&&p.type==="keyup"){if(D===l.value&&mt(p,[13,32])===!0){const _=new MouseEvent("click",p);_.qKeyEvent=!0,p.defaultPrevented===!0&&Tt(_),p.cancelBubble===!0&&It(_),l.value.dispatchEvent(_),O(p),p.qKeyEvent=!0}a("keyup",p)}c()}}function c(p){const _=C.value;p!==!0&&(U===l.value||M===l.value)&&_!==null&&_!==document.activeElement&&(_.setAttribute("tabindex",-1),_.focus()),U===l.value&&(z!==null&&(z.removeEventListener("touchcancel",S,R),z.removeEventListener("touchend",S,R)),U=z=null),M===l.value&&(document.removeEventListener("mouseup",S,R),M=null),D===l.value&&(document.removeEventListener("keyup",S,!0),l.value!==null&&l.value.removeEventListener("blur",S,R),D=null),l.value!==null&&l.value.classList.remove("q-btn--active")}function h(p){O(p),p.qSkipRipple=!0}return xt(()=>{c(!0)}),Object.assign(d,{click:L}),()=>{let p=[];t.icon!==void 0&&p.push(g(At,{name:t.icon,left:t.stack===!1&&A.value===!0,role:"img","aria-hidden":"true"})),A.value===!0&&p.push(g("span",{class:"block"},[t.label])),p=H(e.default,p),t.iconRight!==void 0&&t.round===!1&&p.push(g(At,{name:t.iconRight,right:t.stack===!1&&A.value===!0,role:"img","aria-hidden":"true"}));const _=[g("span",{class:"q-focus-helper",ref:C})];return t.loading===!0&&t.percentage!==void 0&&_.push(g("span",{class:"q-btn__progress absolute-full overflow-hidden"+(t.darkPercentage===!0?" q-btn__progress--dark":"")},[g("span",{class:"q-btn__progress-indicator fit block",style:X.value})])),_.push(g("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+r.value},p)),t.loading!==null&&_.push(g(Xt,{name:"q-transition--fade"},()=>t.loading===!0?[g("span",{key:"loading",class:"absolute-full flex flex-center"},e.loading!==void 0?e.loading():[g(Aa)])]:null)),Pt(g(f.value,P.value,_),[[Ba,B.value,void 0,$.value]])}}});const Fa={dark:{type:Boolean,default:null}};function Ua(t,e){return b(()=>t.dark===null?e.dark.isActive:t.dark)}let tt=0;const Da={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Ma=["update:fullscreen","fullscreen"];function Ha(){const t=V(),{props:e,emit:a,proxy:d}=t;let n,o,r;const i=Q(!1);Ft(t)===!0&&G(()=>d.$route.fullPath,()=>{e.noRouteFullscreenExit!==!0&&f()}),G(()=>e.fullscreen,u=>{i.value!==u&&v()}),G(i,u=>{a("update:fullscreen",u),a("fullscreen",u)});function v(){i.value===!0?f():w()}function w(){i.value!==!0&&(i.value=!0,r=d.$el.parentNode,r.replaceChild(o,d.$el),document.body.appendChild(d.$el),tt++,tt===1&&document.body.classList.add("q-body--fullscreen-mixin"),n={handler:f},_t.add(n))}function f(){i.value===!0&&(n!==void 0&&(_t.remove(n),n=void 0),r.replaceChild(d.$el,o),i.value=!1,tt=Math.max(0,tt-1),tt===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),d.$el.scrollIntoView!==void 0&&setTimeout(()=>{d.$el.scrollIntoView()})))}return pe(()=>{o=document.createElement("span")}),Ot(()=>{e.fullscreen===!0&&w()}),xt(f),Object.assign(d,{toggleFullscreen:v,setFullscreen:w,exitFullscreen:f}),{inFullscreen:i,toggleFullscreen:v}}const Ga=["top","right","bottom","left"],Ka=["regular","flat","outline","push","unelevated"];var Ja=ot({name:"QCarousel",props:{...Fa,...ma,...Da,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:t=>Ka.includes(t),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:t=>Ga.includes(t)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Ma,...va],setup(t,{slots:e}){const{proxy:{$q:a}}=V(),d=Ua(t,a);let n,o;const{updatePanelsList:r,getPanelContent:i,panelDirectives:v,goToPanel:w,previousPanel:f,nextPanel:u,getEnabledPanels:q,panelIndex:l}=qa(),{inFullscreen:C}=Ha(),z=b(()=>C.value!==!0&&t.height!==void 0?{height:t.height}:{}),m=b(()=>t.vertical===!0?"vertical":"horizontal"),x=b(()=>`q-carousel q-panel-parent q-carousel--with${t.padding===!0?"":"out"}-padding`+(C.value===!0?" fullscreen":"")+(d.value===!0?" q-carousel--dark q-dark":"")+(t.arrows===!0?` q-carousel--arrows-${m.value}`:"")+(t.navigation===!0?` q-carousel--navigation-${X.value}`:"")),A=b(()=>{const j=[t.prevIcon||a.iconSet.carousel[t.vertical===!0?"up":"left"],t.nextIcon||a.iconSet.carousel[t.vertical===!0?"down":"right"]];return t.vertical===!1&&a.lang.rtl===!0?j.reverse():j}),B=b(()=>t.navigationIcon||a.iconSet.carousel.navigationIcon),$=b(()=>t.navigationActiveIcon||B.value),X=b(()=>t.navigationPosition||(t.vertical===!0?"right":"bottom")),Z=b(()=>({color:t.controlColor,textColor:t.controlTextColor,round:!0,[t.controlType]:!0,dense:!0}));G(()=>t.modelValue,()=>{t.autoplay&&(clearInterval(n),P())}),G(()=>t.autoplay,j=>{j?P():clearInterval(n)});function P(){const j=ce(t.autoplay)===!0?t.autoplay:5e3;n=setTimeout(j>=0?u:f,Math.abs(j))}Ot(()=>{t.autoplay&&P()}),xt(()=>{clearInterval(n)});function L(j,T){return g("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${j} q-carousel__navigation--${X.value}`+(t.controlColor!==void 0?` text-${t.controlColor}`:"")},[g("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},q().map(T))])}function F(){const j=[];if(t.navigation===!0){const T=e["navigation-icon"]!==void 0?e["navigation-icon"]:c=>g(ft,{key:"nav"+c.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${c.active===!0?"":"in"}active`,...c.btnProps,onClick:c.onClick}),S=o-1;j.push(L("buttons",(c,h)=>{const p=c.props.name,_=l.value===h;return T({index:h,maxIndex:S,name:p,active:_,btnProps:{icon:_===!0?$.value:B.value,size:"sm",...Z.value},onClick:()=>{w(p)}})}))}else if(t.thumbnails===!0){const T=t.controlColor!==void 0?` text-${t.controlColor}`:"";j.push(L("thumbnails",S=>{const c=S.props;return g("img",{key:"tmb#"+c.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${c.name===t.modelValue?"":"in"}active`+T,src:c.imgSrc||c["img-src"],onClick:()=>{w(c.name)}})}))}return t.arrows===!0&&l.value>=0&&((t.infinite===!0||l.value>0)&&j.push(g("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${m.value} absolute flex flex-center`},[g(ft,{icon:A.value[0],...Z.value,onClick:f})])),(t.infinite===!0||l.value<o-1)&&j.push(g("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${m.value} absolute flex flex-center`},[g(ft,{icon:A.value[1],...Z.value,onClick:u})]))),H(e.control,j)}return()=>(o=r(e),g("div",{class:x.value,style:z.value},[fa("div",{class:"q-carousel__slides-container"},i(),"sl-cont",t.swipeable,()=>v.value)].concat(F())))}});const Wa={class:"container q-pa-md"},to={class:"absolute-bottom custom-caption"},eo={class:"text-h5"},ao={class:"text-subtitle1"},oo={__name:"OrganizeBlock",props:{data:{type:Array,required:!0}},setup(t){const e=t,a=Q(0),d=Q(e.data);return(n,o)=>(k(),y("div",Wa,[E(Ja,{arrows:"",animated:"","control-color":"white",navigation:"",infinite:"",autoplay:"","transition-prev":"slide-right","transition-next":"slide-left",modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=r=>a.value=r),height:"450px",class:"carousel"},{default:I(()=>[(k(!0),y(N,null,K(d.value,(r,i)=>(k(),se(xa,{name:i,"img-src":"/public/Image/"+r.image,key:r.image},{default:I(()=>[s("div",to,[s("div",eo,Y(r.role)+Y(r.name),1),s("div",ao,Y(r.title),1)])]),_:2},1032,["name","img-src"]))),128))]),_:1},8,["modelValue"])]))}};var Rt=J(oo,[["__scopeId","data-v-e211345c"]]);const io={},ro={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},no=s("path",{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},null,-1),lo=[no];function po(t,e){return k(),y("svg",ro,lo)}var co=J(io,[["render",po]]);const Jt=t=>(dt("data-v-19e8636e"),t=t(),nt(),t),so={class:"bg-gradient text-center text-white"},fo={class:"p-3",style:{"background-color":"rgba(0, 0, 0, 0.2)"}},bo={class:"footer-list"},go={class:"footer-group footer-link"},mo=["href"],vo={class:"footer-group"},qo={class:"footer-key"},xo=Jt(()=>s("div",{class:"footer-val"},"ptjeanliu@gmail.com",-1)),ho=Jt(()=>s("div",{class:"footer-group"},"\xA9 2020 Copyright",-1)),_o={__name:"FooterMain",setup(t){const e=Q([{color:"#3b5998",href:"#"}]);return(a,d)=>(k(),y("footer",so,[s("div",fo,[s("div",bo,[s("section",go,[(k(!0),y(N,null,K(e.value,(n,o)=>(k(),y("a",{class:"btn btn-primary rounded router-link",style:fe({"background-color":n.color}),href:n.href,key:o},[E(co,{width:"14",fill:"white"})],12,mo))),128))]),s("div",vo,[s("div",qo,Y(a.$t("footer.email")),1),xo]),ho])])]))}};var uo=J(_o,[["__scopeId","data-v-19e8636e"]]);const wo=t=>(dt("data-v-66353928"),t=t(),nt(),t),ko={class:"page"},yo={class:"block"},zo={class:"block"},Co={class:"block"},jo={key:0,class:"block"},Ao=vt(" \u7406\u4E8B\u9577\uFF5C\u694A\u5927\u5FB7 "),Yo={class:"block"},$o=wo(()=>s("img",{class:"chairman-img",src:be,width:"400",height:"300"},null,-1)),Bo={key:1,class:"block"},So={key:2,class:"block"},Eo={__name:"HomeView",setup(t){const{proxy:e}=V(),a=Q(null),d=Q([]),n=Q([]);return e.api.get("/board/leader").then(o=>{a.value=o}),e.api.get("/teams/list").then(o=>{d.value=o}),e.api.get("/promo/list").then(o=>{n.value=o,console.log(o)}),(o,r)=>(k(),y(N,null,[E(Wt),s("main",null,[s("div",ko,[s("div",yo,[E(ye)]),s("div",zo,[E(Te)]),s("div",Co,[E(ta)]),a.value?(k(),y("div",jo,[E(ut,null,{image:I(()=>[E(bt,{src:a.value.image},null,8,["src"])]),title:I(()=>[Ao]),text:I(()=>[vt(Y(a.value.content),1)]),_:1})])):at("",!0),s("div",Yo,[E(ut,{side:"right"},{image:I(()=>[$o]),title:I(()=>[vt(Y(o.$t("history.header")),1)]),text:I(()=>[(k(!0),y(N,null,K(o.$i18n.messages[o.$i18n.locale].history.content,i=>(k(),y("p",{key:i},Y(i),1))),128))]),_:1})]),d.value.length?(k(),y("div",Bo,[E(Rt,{data:d.value},null,8,["data"])])):at("",!0),n.value.length?(k(),y("div",So,[E(Rt,{data:n.value},null,8,["data"])])):at("",!0),E(uo)])])],64))}};var Po=J(Eo,[["__scopeId","data-v-66353928"]]);export{Po as default};