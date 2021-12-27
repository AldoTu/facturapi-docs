"use strict";(self.webpackChunkfacturapi_docs=self.webpackChunkfacturapi_docs||[]).push([[922],{3905:function(e,a,n){n.d(a,{Zo:function(){return c},kt:function(){return m}});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function u(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),l=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},c=function(e){var a=l(e.components);return t.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?t.createElement(f,i(i({ref:a},c),{},{components:n})):t.createElement(f,i({ref:a},c))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var u={};for(var s in a)hasOwnProperty.call(a,s)&&(u[s]=a[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,a,n){var t=n(7294);a.Z=function(e){var a=e.children,n=e.hidden,r=e.className;return t.createElement("div",{role:"tabpanel",hidden:n,className:r},a)}},6396:function(e,a,n){n.d(a,{Z:function(){return d}});var t=n(7462),r=n(7294),o=n(2389),i=n(9443);var u=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(3616),l=n(6010),c="tabItem_vU9c";function p(e){var a,n,o,i=e.lazy,p=e.block,d=e.defaultValue,m=e.values,f=e.groupId,v=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:g.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),h=(0,s.lx)(b,(function(e,a){return e.value===a.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(a=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?a:null==(o=g[0])?void 0:o.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=u(),w=k.tabGroupChoices,O=k.setTabGroupChoices,z=(0,r.useState)(y),N=z[0],T=z[1],E=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var P=w[f];null!=P&&P!==N&&b.some((function(e){return e.value===P}))&&T(P)}var C=function(e){var a=e.currentTarget,n=E.indexOf(a),t=b[n].value;t!==N&&(x(a),T(t),null!=f&&O(f,t))},j=function(e){var a,n=null;switch(e.key){case"ArrowRight":var t=E.indexOf(e.currentTarget)+1;n=E[t]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;n=E[r]||E[E.length-1]}null==(a=n)||a.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},v)},b.map((function(e){var a=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:N===a?0:-1,"aria-selected":N===a,key:a,ref:function(e){return E.push(e)},onKeyDown:j,onFocus:C,onClick:C},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":N===a})}),null!=n?n:a)}))),i?(0,r.cloneElement)(g.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==N})}))))}function d(e){var a=(0,o.Z)();return r.createElement(p,(0,t.Z)({key:String(a)},e))}},6797:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var t=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(6396),u=n(8215),s=["components"],l={sidebar_position:6},c="Organizaciones (Multi-RFC)",p={unversionedId:"guides/organizations",id:"guides/organizations",title:"Organizaciones (Multi-RFC)",description:"Registra m\xe1s organizaciones emisoras",source:"@site/docs/guides/organizations.mdx",sourceDirName:"guides",slug:"/guides/organizations",permalink:"/docs/guides/organizations",editUrl:"https://github.com/facturapi/facturapi-docs/edit/main/website/docs/guides/organizations.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Productos",permalink:"/docs/guides/products"},next:{title:"Autofactura",permalink:"/docs/guides/self_invoice"}},d=[{value:"Registra m\xe1s organizaciones emisoras",id:"registra-m\xe1s-organizaciones-emisoras",children:[],level:2}],m={toc:d};function f(e){var a=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"organizaciones-multi-rfc"},"Organizaciones (Multi-RFC)"),(0,o.kt)("h2",{id:"registra-m\xe1s-organizaciones-emisoras"},"Registra m\xe1s organizaciones emisoras"),(0,o.kt)("p",null,"Puedes emitir facturas desde distintos RFC registrando nuevas organizaciones emisoras,\nya sea desde tu dashboard o usando la API, con el m\xe9todo ",(0,o.kt)("a",{parentName:"p",href:"/api#operation/createOrganization"},"Crear Organizaci\xf3n"),",\nas\xed como los dem\xe1s m\xe9todos para configurar datos fiscales, logotipo y colores, certificados, etc."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Recuerda que para crear y administrar organizaciones deber\xe1s autenticarte usando tu User Key,\nque es una llave secreta asociada a toda tu cuenta, la cual puedes encontrar en tu\n",(0,o.kt)("a",{parentName:"p",href:"https://www.facturapi.io/dashboard/integration"},"Centro de Integraci\xf3n"),"."))),(0,o.kt)(i.Z,{groupId:"codeExamples",mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl https://www.facturapi.io/v1/organizations \\\n  -H "Authorization: Bearer sk_user_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n      "name": "Skynet"\n    }\'\n'))),(0,o.kt)(u.Z,{value:"js",label:"Node.js",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const Facturapi = require('facturapi');\nconst facturapi = new Facturapi('sk_user_API_KEY');\nconst organization = await facturapi.organizations.create({\n  name: 'Skynet'\n});\n// recuerda guardar el organization.id en tu propia base de datos\n"))),(0,o.kt)(u.Z,{value:"cs",label:"C#",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var facturapi = new FacturapiClient("sk_user_API_KEY");\nvar organization = await facturapi.Organization.CreateAsync(new Dictionary<string, object>\n{\n  ["name"] = "Skynet"\n});\n// Guarda el organization.Id para asociarlo con tu propia base de datos\n'))),(0,o.kt)(u.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'$facturapi = new Facturapi("sk_user_API_KEY");\n$organization = $facturapi->Organizations->create(array(\n    "name" => "Skynet"\n));\n// recuerda guardar el organization.id en tu propia base de datos\n')))))}f.isMDXComponent=!0}}]);