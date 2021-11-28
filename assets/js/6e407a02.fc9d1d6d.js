"use strict";(self.webpackChunkfacturapi_docs=self.webpackChunkfacturapi_docs||[]).push([[159],{8215:function(e,a,t){var n=t(7294);a.Z=function(e){var a=e.children,t=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}},6396:function(e,a,t){t.d(a,{Z:function(){return p}});var n=t(3117),r=t(7294),l=t(2389),u=t(9443);var i=function(){var e=(0,r.useContext)(u.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=t(9521),s=t(6010),c="tabItem_1uMI";function d(e){var a,t,n,l=e.lazy,u=e.block,d=e.defaultValue,p=e.values,m=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:f.map((function(e){var a=e.props;return{value:a.value,label:a.label}})),b=(0,o.lx)(h,(function(e,a){return e.value===a.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(a=null!=d?d:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?a:null==(n=f[0])?void 0:n.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=i(),g=T.tabGroupChoices,E=T.setTabGroupChoices,w=(0,r.useState)(k),N=w[0],y=w[1],x=[],I=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=g[m];null!=C&&C!==N&&h.some((function(e){return e.value===C}))&&y(C)}var Z=function(e){var a=e.currentTarget,t=x.indexOf(a),n=h[t].value;n!==N&&(I(a),y(n),null!=m&&E(m,n))},_=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n=x.indexOf(e.currentTarget)+1;t=x[n]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;t=x[r]||x[x.length-1]}null==(a=t)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},v)},h.map((function(e){var a=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:N===a?0:-1,"aria-selected":N===a,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":N===a}),key:a,ref:function(e){return x.push(e)},onKeyDown:_,onFocus:Z,onClick:Z},null!=t?t:a)}))),l?(0,r.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==N})}))))}function p(e){var a=(0,l.Z)();return r.createElement(d,(0,n.Z)({key:String(a)},e))}},4691:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return v}});var n=t(3117),r=t(102),l=(t(7294),t(3905)),u=t(6396),i=t(8215),o=["components"],s={sidebar_position:3},c="Autenticaci\xf3n",d={unversionedId:"authenticate",id:"authenticate",isDocsHomePage:!1,title:"Autenticaci\xf3n",description:"Para poder llamar a cualquier m\xe9todo de la API, necesitar\xe1s identificarte",source:"@site/docs/authenticate.mdx",sourceDirName:".",slug:"/authenticate",permalink:"/docs/authenticate",editUrl:"https://github.com/facturapi/facturapi-docs/edit/main/website/docs/authenticate.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Instalaci\xf3n",permalink:"/docs/install"},next:{title:"Facturas",permalink:"/docs/started/invoices"}},p=[{value:"Usando una de nuestras librer\xedas",id:"usando-una-de-nuestras-librer\xedas",children:[],level:2},{value:"Usando tu propio cliente HTTP",id:"usando-tu-propio-cliente-http",children:[],level:2}],m={toc:p};function v(e){var a=e.components,t=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"autenticaci\xf3n"},"Autenticaci\xf3n"),(0,l.kt)("p",null,"Para poder llamar a cualquier m\xe9todo de la API, necesitar\xe1s identificarte\nusando una ",(0,l.kt)("strong",{parentName:"p"},"Llave Secreta"),". Te recomendamos leer la secci\xf3n de\n",(0,l.kt)("a",{parentName:"p",href:"/docs/intro#llaves-secretas"},"llaves secretas")," antes de leer este art\xedculo."),(0,l.kt)("h2",{id:"usando-una-de-nuestras-librer\xedas"},"Usando una de nuestras librer\xedas"),(0,l.kt)("p",null,"Usa la llave secreta al momento de crear la instancia del cliiente"),(0,l.kt)(u.Z,{groupId:"codeExamples",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"js",label:"Node.js",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const Facturapi = require('facturapi');\nconst facturapi = new Facturapi('<SECRET_KEY>');\n"))),(0,l.kt)(i.Z,{value:"cs",label:"C#",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var facturapi = new FacturapiClient("<SECRET_KEY>");\n'))),(0,l.kt)(i.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'$facturapi = new Facturapi( "<SECRET_KEY>" );\n')))),(0,l.kt)("h2",{id:"usando-tu-propio-cliente-http"},"Usando tu propio cliente HTTP"),(0,l.kt)("p",null,"Facturapi utiliza el m\xe9todo de autenticaci\xf3n HTTP\n",(0,l.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/authentication/bearer-authentication/"},"Bearer Token"),"."),(0,l.kt)("p",null,"El token a utilizar es una de las 3 ",(0,l.kt)("strong",{parentName:"p"},"Llaves Secretas"),", explicadas con detalle\nen la secci\xf3n de ",(0,l.kt)("a",{parentName:"p",href:"/docs/intro#llaves-secretas"},"llaves secretas"),"."),(0,l.kt)(u.Z,{groupId:"codeExamples",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,l.kt)("p",null,"Cada petici\xf3n deber\xe1 incluir tu llave secreta en el\nencabezado de autorizaci\xf3n."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl https://www.facturapi.io/v1/<endpoint_method> \\\n  -H "Authorization: Bearer <SECRET_KEY>" \\\n')))))}v.isMDXComponent=!0}}]);