(()=>{"use strict";var e={47464:(e,t,r)=>{r(66992),r(88674),r(19601),r(17727),r(47941);var n=r(49242),o=r(73396),a={id:"app"};function i(e,t,r,n,i,s){var c=(0,o.up)("router-link"),u=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("nav",null,[(0,o.Wm)(c,{to:"/vista-nav"},{default:(0,o.w5)((function(){return[(0,o.Uk)("Entra Aquí ")]})),_:1})]),(0,o.Wm)(u)])}var s=r(95477);const c={name:"viewProduct",components:{ListaProductos:s.Z},data:function(){return{message:""}},methods:{}};var u=r(40089);const l=(0,u.Z)(c,[["render",i]]),d=l;r(41539),r(78783),r(33948);var p=r(22483),m=[{path:"/create-registro",name:"createRegistro",component:function(){return r.e(443).then(r.bind(r,72197))}},{path:"/create-login",name:"createLogin",component:function(){return r.e(443).then(r.bind(r,96579))}},{path:"/carrito-compra",name:"carritoCompra",component:function(){return r.e(443).then(r.bind(r,8523))}},{path:"/view-Product",name:"viewProduct",component:function(){return r.e(443).then(r.bind(r,29766))}},{path:"/vista-nav",name:"vistaNav",component:function(){return r.e(443).then(r.bind(r,25070))}},{path:"/todo-anterior",name:"todoAnterior",component:function(){return r.e(443).then(r.bind(r,67771))}},{path:"/prueba",name:"Prueba",component:function(){return r.e(443).then(r.bind(r,72149))}}],g=(0,p.p7)({history:(0,p.PO)("/"),routes:m});const f=g;r(57658),r(40561),r(34553);var h=r(20065);const v=(0,h.MT)({state:{selectedItems:[]},mutations:{addToSelectedItems:function(e,t){e.selectedItems.push(t)},removeFromSelectedItems:function(e,t){e.selectedItems.splice(t,1)}},actions:{addItem:function(e,t){var r=e.commit;r("addToSelectedItems",t)},removeItem:function(e,t){var r=e.commit,n=e.state,o=n.selectedItems.findIndex((function(e){return e.nombre===t.nombre}));-1!==o&&r("removeFromSelectedItems",o)}},getters:{selectedItems:function(e){return e.selectedItems}}});var b=r(44161),P=r(46423),y=(r(80806),r(48052),r(77795)),w=r(1066),I=r(93866),x=localStorage.getItem("cartItems");x&&v.commit("setCartItems",JSON.parse(x));var C={apiKey:"AIzaSyCQcD0deqdFqF7DlXEqvRGt-TlbpixsVCI",authDomain:"fir-auth-1-9e373.firebaseapp.com",projectId:"fir-auth-1-9e373",storageBucket:"fir-auth-1-9e373.appspot.com",messagingSenderId:"119252909129",appId:"1:119252909129:web:73f83a0ad76b00492f9398"},k=(0,y.ZF)(C),_=((0,w.ad)(k),(0,I.v0)());(0,I.Aj)(_,(function(e){if(e){console.log(e);var t={email:e.email,uid:e.uid};v.dispatch("detectarUsuario",t),console.log(t)}else console.log(e),v.dispatch("detectarUsuario",e)})),(0,n.ri)(d).use(v).use(P.Z,b.Z).use(f).mount("#app")},95477:(e,t,r)=>{r.d(t,{Z:()=>O});var n=r(73396),o=r(87139),a={class:"row"},i={class:"card card-item my-card"},s=["src"],c={class:"card-body"},u={class:"card-title"},l={class:"card-text"},d=["onClick"],p={class:"row"},m={class:"d-flex justify-content-center mt-4"},g=["disabled"],f=["disabled"];function h(e,t,r,h,v,b){var P=(0,n.up)("Pagination");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("form",null,[(0,n._)("div",a,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(v.products,(function(e){return(0,n.wg)(),(0,n.iD)("div",{class:"col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 col p-5",key:e.id},[(0,n._)("div",i,[(0,n._)("img",{src:e.imagen,class:"card-img-top d-flex justify-content-center product-image",alt:"Imagen del producto",id:"cake"},null,8,s),(0,n._)("div",c,[(0,n._)("h5",u,(0,o.zw)(e.nombre),1),(0,n._)("p",l,"Precio: "+(0,o.zw)(e.precio),1)]),(0,n._)("div",null,[(0,n._)("button",{type:"button",onClick:function(t){return b.agregarAlCarrito(e)},class:"btn btn-success mb-2"}," Agregar Carrito ",8,d)])])])})),128))])]),(0,n._)("div",p,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(b.paginatedItems,(function(e){return(0,n.wg)(),(0,n.iD)("div",{class:"col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 col p-5",key:e.id})})),128))]),(0,n._)("div",m,[(0,n._)("button",{class:"btn btn-primary me-2",onClick:t[0]||(t[0]=function(){return b.previousPage&&b.previousPage.apply(b,arguments)}),disabled:1===v.currentPage}," Anterior ",8,g),(0,n._)("button",{class:"btn btn-primary",onClick:t[1]||(t[1]=function(){return b.nextPage&&b.nextPage.apply(b,arguments)}),disabled:v.currentPage===b.totalPages}," Siguiente ",8,f)]),(0,n.Wm)(P,{totalEntries:b.totalEntries,currentPage:v.currentPage,totalPages:b.totalPages,onPageChange:b.handlePageChange},null,8,["totalEntries","currentPage","totalPages","onPageChange"])])}var v=r(50124),b=r(48534),P=(r(38862),r(47042),{class:"pagination"}),y=["onClick"];function w(e,t,r,a,i,s){return(0,n.wg)(),(0,n.iD)("div",P,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.totalPages,(function(e){return(0,n.wg)(),(0,n.iD)("button",{key:e,onClick:function(t){return s.goToPage(e)},class:(0,o.C_)({active:r.currentPage===e})},(0,o.zw)(e),11,y)})),128))])}r(9653);const I={props:{totalEntries:{type:Number,required:!0},currentPage:{type:Number,required:!0},totalPages:{type:Number,required:!0}},methods:{goToPage:function(e){this.$emit("page-change",e)}}};var x=r(40089);const C=(0,x.Z)(I,[["render",w]]),k=C;var _=r(44161);const S={name:"ListaProductos",components:{Pagination:k},data:function(){return{products:[],listProductos:{},currentPage:1,itemsPerPage:6}},mounted:function(){},created:function(){this.getProductos()},methods:{agregarAlCarrito:function(e){this.$store.dispatch("addItem",e),console.log("selectedItems",this.$store.getters.selectedItems),localStorage.setItem("cartItems",JSON.stringify(this.$store.getters.selectedItems))},getProductos:function(){var e=this;return(0,b.Z)((0,v.Z)().mark((function t(){var r;return(0,v.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_.Z.get("https://apiproductos-xhxy.onrender.com/listar");case 3:r=t.sent,e.products=r.data,console.log("response",e.products),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.error("no hay respuesta:",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},previousPage:function(){this.currentPage>1&&(this.currentPage-=1)},nextPage:function(){this.currentPage<this.totalPages&&(this.currentPage+=1)},handlePageChange:function(e){this.currentPage=e}},computed:{totalEntries:function(){return this.products.length},totalPages:function(){return Math.ceil(this.totalEntries/this.itemsPerPage)},paginatedItems:function(){var e=(this.currentPage-1)*this.itemsPerPage,t=e+this.itemsPerPage;return this.products.slice(e,t)}}},E=(0,x.Z)(S,[["render",h],["__scopeId","data-v-9b10b1c6"]]),O=E}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=e,(()=>{r.amdO={}})(),(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(l=0;l<e.length;l++){for(var[n,o,a]=e[l],s=!0,c=0;c<n.length;c++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/about.c50913c7.js"})(),(()=>{r.miniCssF=e=>"css/about.807c0ba0.css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.hmd=e=>(e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e)})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="listaproductos:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var s,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[o];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(m);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,r,n,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=r=>{if(a.onerror=a.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,a.parentNode&&a.parentNode.removeChild(a),o(c)}};return a.onerror=a.onload=i,a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=n=>new Promise(((o,a)=>{var i=r.miniCssF(n),s=r.p+i;if(t(i,s))return o();e(n,s,null,o,a)})),o={143:0};r.f.miniCss=(e,t)=>{var r={443:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),s=new Error,c=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};r.l(i,c,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,s,c]=n,u=0;if(i.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(c)var l=c(r)}for(t&&t(n);u<i.length;u++)a=i[u],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(l)},n=self["webpackChunklistaproductos"]=self["webpackChunklistaproductos"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[998],(()=>r(47464)));n=r.O(n)})();
//# sourceMappingURL=app.c3dbbab3.js.map