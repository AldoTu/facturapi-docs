"use strict";(self.webpackChunkfacturapi_docs=self.webpackChunkfacturapi_docs||[]).push([[22],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(7462),a=n(7294),o=n(2389),i=n(9443);var l=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(3616),s=n(6010),c="tabItem_vU9c";function p(e){var t,n,o,i=e.lazy,p=e.block,d=e.defaultValue,m=e.values,f=e.groupId,v=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,u.lx)(g,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===d?d:null!=(t=null!=d?d:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=b[0])?void 0:o.props.value;if(null!==h&&!g.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=l(),k=w.tabGroupChoices,x=w.setTabGroupChoices,C=(0,a.useState)(h),O=C[0],T=C[1],E=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var N=k[f];null!=N&&N!==O&&g.some((function(e){return e.value===N}))&&T(N)}var _=function(e){var t=e.currentTarget,n=E.indexOf(t),r=g[n].value;r!==O&&(j(t),T(r),null!=f&&x(f,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;n=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;n=E[a]||E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},v)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:_,onClick:_},o,{className:(0,s.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(b.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function d(e){var t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},1284:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(6396),l=n(8215),u=["components"],s={sidebar_position:4},c="Clientes",p={unversionedId:"guides/customers",id:"guides/customers",title:"Clientes",description:"Registra a tus clientes (opcional)",source:"@site/docs/guides/customers.mdx",sourceDirName:"guides",slug:"/guides/customers",permalink:"/docs/guides/customers",editUrl:"https://github.com/facturapi/facturapi-docs/edit/main/website/docs/guides/customers.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Recibos",permalink:"/docs/guides/receipts"},next:{title:"Productos",permalink:"/docs/guides/products"}},d=[{value:"Registra a tus clientes (opcional)",id:"registra-a-tus-clientes-opcional",children:[],level:2}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"clientes"},"Clientes"),(0,o.kt)("h2",{id:"registra-a-tus-clientes-opcional"},"Registra a tus clientes (opcional)"),(0,o.kt)("p",null,"Si quieres evitar tener que enviar los datos fiscales de tu cliente repetidamente en cada factura, tambi\xe9n tienes la opci\xf3n de registrarlo de manera separada."),(0,o.kt)("p",null,"El objeto de respuesta contiene un campo ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," que deber\xe1s utilizar al momento de crear facturas para el mismo cliente sin tener que volver a introducir sus datos fiscales."),(0,o.kt)("p",null,"Para conocer qu\xe9 otros datos puedes incluir, consulta la ",(0,o.kt)("a",{parentName:"p",href:"/api/#operation/createCustomer"},"referencia del m\xe9todo Crear Cliente"),"."),(0,o.kt)(i.Z,{groupId:"codeExamples",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Para clientes nacionales\ncurl https://www.facturapi.io/v1/customers \\\n  -H "Authorization: Bearer sk_test_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n      "legal_name": "Juan Perez",\n      "email": "juan@example.com",\n      "tax_id": "ABCD111111CBA"\n    }\'\n\n# Para clientes extranjeros.\n# N\xf3tese que no necesitas usar el RFC gen\xe9rico para extranjeros. Nosotros lo\n# pondremos por ti donde haga falta, siempre y cuando env\xedes el c\xf3digo del pa\xeds\ncurl https://www.facturapi.io/v1/customers \\\n  -H "Authorization: Bearer sk_test_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n      "legal_name": "IKEO",\n      "email": "email@example.com",\n      "tax_id": "198912171234",\n      "address": {\n        "country": "SWE",\n        "zip": "17123"\n      }\n    }\'\n'))),(0,o.kt)(l.Z,{value:"js",label:"Node.js",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const customer = await facturapi.customers.create({\n  legal_name: 'Dunder Mifflin S.A. de C.V.', // Raz\xf3n social\n  email: 'email@example.com',\n  tax_id: 'ABCD101010XYZ', // RFC\n  address: {\n    zip: '44940',\n    street: 'Sunset Blvd'\n  }\n});\n// save the customer.id in your database\n"))),(0,o.kt)(l.Z,{value:"cs",label:"C#",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var customer = await facturapi.Customer.CreateAsync(new Dictionary<string, object>\n{\n  ["legal_name"] = "Dunder Mifflin S.A. de C.V.",\n  ["email"] = "email@example.com",\n  ["tax_id"] = "ABCD101010XYZ",\n  ["address"] = new Dictionary<string, object>\n  {\n    ["zip"] = "44940",\n    ["street"] = "Sunset Blvd"\n  }\n});\n'))),(0,o.kt)(l.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'$customer = array(\n  "email" => "walterwhite@gmail.com", //Optional but useful\n  "legal_name" => "Walter White", // Raz\xf3n social\n  "tax_id" => "WIWA761018", //RFC\n  "address" => array(\n    "zip" => "06800",\n    "street" => "Av. de los Rosales"\n  )\n);\n\n$new_customer = $facturapi->Customers->create($customer);\n')))))}f.isMDXComponent=!0}}]);