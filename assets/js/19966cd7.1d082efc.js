"use strict";(self.webpackChunkfacturapi_docs=self.webpackChunkfacturapi_docs||[]).push([[5533],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return a?r.createElement(f,u(u({ref:t},c),{},{components:a})):r.createElement(f,u({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,u=new Array(l);u[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,u[1]=o;for(var s=2;s<l;s++)u[s]=a[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(7294),n=a(6010);const l="tabItem_Ymn6";function u(e){let{children:t,hidden:a,className:u}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,u),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>E});var r=a(7462),n=a(7294),l=a(6010),u=a(6775),o=a(1980),i=a(7392),s=a(12);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=p(e),[u,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,c]=m({queryString:a,groupId:r}),[f,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,s.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),g=(()=>{const e=i??f;return d({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:u,selectValue:(0,n.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),b(e)}),[c,b,l]),tabValues:l}}var b=a(2466),g=a(2389);const h="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:u,selectValue:o,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,b.o5)(),p=e=>{const t=e.currentTarget,a=s.indexOf(t),r=i[a].value;r!==u&&(c(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;t=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;t=s[a]??s[s.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>s.push(e),onKeyDown:d,onClick:p},o,{className:(0,l.Z)("tabs__item",v,o?.className,{"tabs__item--active":u===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",h)},n.createElement(y,(0,r.Z)({},e,t)),n.createElement(k,(0,r.Z)({},e,t)))}function E(e){const t=(0,g.Z)();return n.createElement(w,(0,r.Z)({key:String(t)},e))}},1864:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905)),l=a(4866),u=a(5162);const o={sidebar_position:3},i="Autenticaci\xf3n",s={unversionedId:"getting-started/authenticate",id:"getting-started/authenticate",title:"Autenticaci\xf3n",description:"Para poder llamar a cualquier m\xe9todo de la API, necesitar\xe1s identificarte",source:"@site/docs/getting-started/authenticate.mdx",sourceDirName:"getting-started",slug:"/getting-started/authenticate",permalink:"/docs/getting-started/authenticate",draft:!1,editUrl:"https://github.com/facturapi/facturapi-docs/edit/main/website/docs/getting-started/authenticate.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Instalaci\xf3n",permalink:"/docs/getting-started/install"},next:{title:"Clientes",permalink:"/docs/guides/customers"}},c={},p=[{value:"Usando una de nuestras librer\xedas",id:"usando-una-de-nuestras-librer\xedas",level:2},{value:"Usando tu propio cliente HTTP",id:"usando-tu-propio-cliente-http",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"autenticaci\xf3n"},"Autenticaci\xf3n"),(0,n.kt)("p",null,"Para poder llamar a cualquier m\xe9todo de la API, necesitar\xe1s identificarte\nusando una de las 3 ",(0,n.kt)("a",{parentName:"p",href:"/docs/getting-started/concepts/#llaves-secretas"},"llaves secretas"),"."),(0,n.kt)("p",null,"Obtenen tus llave secretas creando una cuenta gratuita en\n",(0,n.kt)("a",{parentName:"p",href:"https://www.facturapi.io/register?utm_source=facturapi-docs&utm_medium=GithubPages"},"Facturapi"),"."),(0,n.kt)("h2",{id:"usando-una-de-nuestras-librer\xedas"},"Usando una de nuestras librer\xedas"),(0,n.kt)("p",null,"Usa la llave secreta al momento de crear la instancia del cliiente"),(0,n.kt)(l.Z,{groupId:"codeExamples",mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"js",label:"Node.js",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const Facturapi = require('facturapi');\nconst facturapi = new Facturapi('<SECRET_KEY>');\n"))),(0,n.kt)(u.Z,{value:"cs",label:"C#",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'var facturapi = new FacturapiClient("<SECRET_KEY>");\n'))),(0,n.kt)(u.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},'$facturapi = new Facturapi( "<SECRET_KEY>" );\n')))),(0,n.kt)("h2",{id:"usando-tu-propio-cliente-http"},"Usando tu propio cliente HTTP"),(0,n.kt)("p",null,"Facturapi utiliza el m\xe9todo de autenticaci\xf3n HTTP\n",(0,n.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/authentication/bearer-authentication/"},"Bearer Token"),"."),(0,n.kt)("p",null,"El token a utilizar es una de las 3 ",(0,n.kt)("strong",{parentName:"p"},"Llaves Secretas"),", explicadas con detalle\nen la secci\xf3n de ",(0,n.kt)("a",{parentName:"p",href:"/docs/getting-started/concepts/#llaves-secretas"},"llaves secretas"),"."),(0,n.kt)(l.Z,{groupId:"codeExamples",mdxType:"Tabs"},(0,n.kt)(u.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,n.kt)("p",null,"Cada petici\xf3n deber\xe1 incluir tu llave secreta en el\nencabezado de autorizaci\xf3n."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl https://www.facturapi.io/v1/<endpoint_method> \\\n  -H "Authorization: Bearer <SECRET_KEY>" \\\n')))))}m.isMDXComponent=!0}}]);