"use strict";(self.webpackChunkfacturapi_docs=self.webpackChunkfacturapi_docs||[]).push([[5190],{3905:(e,a,o)=>{o.d(a,{Zo:()=>p,kt:()=>u});var n=o(7294);function t(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){t(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,n,t=function(e,a){if(null==e)return{};var o,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var l=n.createContext({}),c=function(e){var a=n.useContext(l),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},p=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var o=e.components,t=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(o),u=t,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return o?n.createElement(f,i(i({ref:a},p),{},{components:o})):n.createElement(f,i({ref:a},p))}));function u(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=o.length,i=new Array(r);i[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9522:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=o(7462),t=(o(7294),o(3905));const r={sidebar_position:4,title:"N\xf3mina"},i="Comprobante de N\xf3mina",s={unversionedId:"guides/invoices/nomina",id:"guides/invoices/nomina",title:"N\xf3mina",description:"Un comprobante de n\xf3mina se utiliza para dar constancia que avale el pago ante la legislaci\xf3n laboral.",source:"@site/docs/guides/invoices/nomina.mdx",sourceDirName:"guides/invoices",slug:"/guides/invoices/nomina",permalink:"/docs/guides/invoices/nomina",draft:!1,editUrl:"https://github.com/facturapi/facturapi-docs/edit/main/website/docs/guides/invoices/nomina.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"N\xf3mina"},sidebar:"tutorialSidebar",previous:{title:"Egreso",permalink:"/docs/guides/invoices/egreso"},next:{title:"Traslado",permalink:"/docs/guides/invoices/traslado"}},l={},c=[{value:"Ejemplos",id:"ejemplos",level:2},{value:"Comprobante emitido para amparar el servicio prestado por un empleado",id:"comprobante-emitido-para-amparar-el-servicio-prestado-por-un-empleado",level:3}],p={toc:c};function d(e){let{components:a,...o}=e;return(0,t.kt)("wrapper",(0,n.Z)({},p,o,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"comprobante-de-n\xf3mina"},"Comprobante de N\xf3mina"),(0,t.kt)("p",null,"Un comprobante de n\xf3mina se utiliza para dar constancia que avale el pago ante la legislaci\xf3n laboral.\nEste tipo de CFDI debe emitirse por cada pago realizado por el concepto de remuneraciones de sueldos, salarios y asimilados a estos y su objetivo es formalizar la relaci\xf3n entre empleador y empleado, adem\xe1s de ser un requisito para cumplir con las normativas fiscales impuestas por la ley."),(0,t.kt)("admonition",{title:"Los recibos de n\xf3mina tambi\xe9n sirven para deducci\xf3n de impuestos de una empresa",type:"info"},(0,t.kt)("p",{parentName:"admonition"},"Con ellos se comprueban aportaciones patronales realizadas al Instituto Mexicano del Seguro social (IMSS), Instituto del Fondo Nacional de la Vivienda para los Trabajadores (INFONAVIT) as\xed como el pago del impuesto sobre la n\xf3mina.")),(0,t.kt)("p",null,'El CFDI de n\xf3mina puede identificarse como tipo de comprobante "N"'),(0,t.kt)("h2",{id:"ejemplos"},"Ejemplos"),(0,t.kt)("p",null,"Para conocer a fondo todas las opciones disponibles al crear una factura, descripciiones\ndetalladas de cada campo y los cat\xe1logos m\xe1s utilizados consulta la\n",(0,t.kt)("a",{parentName:"p",href:"/api/#operation/createInvoice"},"referencia del m\xe9todo Crear Factura"),"."),(0,t.kt)("h3",{id:"comprobante-emitido-para-amparar-el-servicio-prestado-por-un-empleado"},"Comprobante emitido para amparar el servicio prestado por un empleado"),(0,t.kt)("p",null,"En este escenario se emite un CFDI que comprueba el servicio que ha prestado un empleado en un periodo determinado. "),(0,t.kt)("admonition",{type:"caution"},(0,t.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,t.kt)("em",{parentName:"mdxAdmonitionTitle"},"Secci\xf3n en construcci\xf3n"))))}d.isMDXComponent=!0}}]);