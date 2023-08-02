"use strict";(self.webpackChunkfacturapi_docs=self.webpackChunkfacturapi_docs||[]).push([[5049],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>m});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),s=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=s(e.components);return n.createElement(c.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return t?n.createElement(f,l(l({ref:a},u),{},{components:t})):n.createElement(f,l({ref:a},u))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(7294),r=t(6010);const i="tabItem_Ymn6";function l(e){let{children:a,hidden:t,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:t},a)}},4866:(e,a,t)=>{t.d(a,{Z:()=>I});var n=t(7462),r=t(7294),i=t(6010),l=t(6775),o=t(1980),c=t(7392),s=t(12);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}function p(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??u(t);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function d(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:t}=e;const n=(0,l.k6)(),i=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,o._X)(i),(0,r.useCallback)((e=>{if(!i)return;const a=new URLSearchParams(n.location.search);a.set(i,e),n.replace({...n.location,search:a.toString()})}),[i,n])]}function f(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,i=p(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:i}))),[c,u]=m({queryString:t,groupId:n}),[f,b]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,i]=(0,s.Nk)(t);return[n,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:n}),v=(()=>{const e=c??f;return d({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var b=t(2466),v=t(2389);const g="tabList__CuJ",y="tabItem_LNqP";function k(e){let{className:a,block:t,selectedValue:l,selectValue:o,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,b.o5)(),p=e=>{const a=e.currentTarget,t=s.indexOf(a),n=c[t].value;n!==l&&(u(a),o(n))},d=e=>{let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;a=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;a=s[t]??s[s.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},a)},c.map((e=>{let{value:a,label:t,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===a?0:-1,"aria-selected":l===a,key:a,ref:e=>s.push(e),onKeyDown:d,onClick:p},o,{className:(0,i.Z)("tabs__item",y,o?.className,{"tabs__item--active":l===a})}),t??a)})))}function h(e){let{lazy:a,children:t,selectedValue:n}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function T(e){const a=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g)},r.createElement(k,(0,n.Z)({},e,a)),r.createElement(h,(0,n.Z)({},e,a)))}function I(e){const a=(0,v.Z)();return r.createElement(T,(0,n.Z)({key:String(a)},e))}},4235:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(7462),r=(t(7294),t(3905)),i=t(4866),l=t(5162);const o={sidebar_position:2},c="Inicio r\xe1pido",s={unversionedId:"quickstart",id:"quickstart",title:"Inicio r\xe1pido",description:"1. Instala el paquete",source:"@site/docs/quickstart.mdx",sourceDirName:".",slug:"/quickstart",permalink:"/docs/quickstart",draft:!1,editUrl:"https://github.com/facturapi/facturapi-docs/edit/main/website/docs/quickstart.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introducci\xf3n",permalink:"/docs/intro"},next:{title:"Conceptos de la API",permalink:"/docs/getting-started/concepts"}},u={},p=[{value:"1. Instala el paquete",id:"1-instala-el-paquete",level:3},{value:"2. Crea tu primer factura",id:"2-crea-tu-primer-factura",level:3},{value:"3. Env\xeda la factura por correo electr\xf3nico",id:"3-env\xeda-la-factura-por-correo-electr\xf3nico",level:3},{value:"4. Descarga de XML y PDF",id:"4-descarga-de-xml-y-pdf",level:3},{value:"Siguientes pasos",id:"siguientes-pasos",level:2}],d={toc:p};function m(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"inicio-r\xe1pido"},"Inicio r\xe1pido"),(0,r.kt)("h3",{id:"1-instala-el-paquete"},"1. Instala el paquete"),(0,r.kt)(i.Z,{groupId:"codeExamples",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"js",label:"Node.js",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install facturapi\n"))),(0,r.kt)(l.Z,{value:"cs",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet add package Facturapi\n"))),(0,r.kt)(l.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"composer require facturapi/facturapi-php\n"))),(0,r.kt)(l.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# No es necesario instalar nada\n")))),(0,r.kt)("h3",{id:"2-crea-tu-primer-factura"},"2. Crea tu primer factura"),(0,r.kt)(i.Z,{groupId:"codeExamples",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"js",label:"Node.js",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// a) Importa el paquete\nconst Facturapi = require('facturapi');\n// b) Crea una instancia del cliente, usando la llave secreta\n//    de la organizaci\xf3n emisora (https://dashboard.facturapi.io/integration/apikeys)\nconst facturapi = new Facturapi('sk_test_API_KEY');\n// c) Crea una factura\nconst invoice = await facturapi.invoices.create({\n  customer: {\n    legal_name: 'Dunder Mifflin',\n    email: 'email@example.com',\n    tax_id: 'ABC101010111',\n    tax_system: '601',\n    address: {\n      zip: '85900'\n    }\n  },\n  items: [{\n    quantity: 1,\n    product: {\n      description: 'Ukelele',\n      product_key: '60131324',\n      price: 345.60\n    }\n  }],\n  use: 'G01',\n  payment_form: '28' // Tarjeta de cr\xe9dito\n});\n"))),(0,r.kt)(l.Z,{value:"cs",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// a) Importa el paquete\nusing Facturapi;\n// b) Crea una instancia del cliente, usando la llave secreta\n//    de la organizaci\xf3n emisora (https://dashboard.facturapi.io/integration/apikeys)\nvar facturapi = new FacturapiClient("sk_test_API_KEY");\n// c) Crea una factura\nvar invoice = await facturapi.Invoice.CreateAsync(new Dictionary<string, object>\n{\n  ["customer"] = new Dictionary<string, object>\n  {\n    ["legal_name"] = "Dunder Mifflin",\n    ["email"] = "email@example.com",\n    ["tax_id"] = "ABC101010111",\n    ["tax_system"] = "601",\n    ["address"] = new Dictionary<string, object>\n    {\n      ["zip"] = "85900"\n    }\n  },\n  ["items"] = new Dictionary<string, object>[]\n  {\n    new Dictionary<string, object>\n    {\n      ["quantity"] = 1,\n      ["product"] = new Dictionary<string, object>\n      {\n        ["description"] = "Ukelele",\n        ["product_key"] = "60131324",\n        ["price"] = 345.60\n      }\n    }\n  },\n  ["use"] = "G01",\n  ["payment_form"] = "28" // Tarjeta de cr\xe9dito\n});\n'))),(0,r.kt)(l.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'// a) Importa el paquete\nuse Facturapi\\Facturapi;\n// b) Crea una instancia del cliente, usando la llave secreta\n//    de la organizaci\xf3n emisora (https://dashboard.facturapi.io/integration/apikeys)\n$facturapi = new Facturapi( "sk_test_API_KEY" );\n// c) Crea una factura\n$invoice = $facturapi->Invoices->create([\n  "customer" => [\n    "legal_name" => "Dunder Mifflin",\n    "email" => "email@example.com",\n    "tax_id" => "ABC101010111",\n    "tax_system" => "601",\n    "address" => [\n      "zip" => "85900"\n    ]\n  ],\n  "items" => [\n    [\n      "quantity" => 1,\n      "product" => [\n        "description" => "Ukelele",\n        "product_key" => "60131324",\n        "price" => 345.60\n      ]\n    ],\n  ],\n  "payment_form" => "28" // Tarjeta de cr\xe9dito\n]);\n'))),(0,r.kt)(l.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl https://www.facturapi.io/v1/invoices \\\n  # a) Autent\xedcate con la API Key de la organizaci\xf3n emisora\n  -H "Authorization: Bearer sk_test_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  # b) Crea una factura\n  -d \'{\n    "customer": {\n      "legal_name": "Dunder Mifflin",\n      "email": "email@example.com",\n      "tax_id": "ABC101010111",\n      "tax_system": "601",\n      "address": {\n        "zip": "85900"\n      }\n    },\n    "items": [{\n      "quantity": 1,\n      "product": {\n        "description": "Ukelele",\n        "product_key": "60131324",\n        "price": 345.60\n      }\n    }],\n    "use": "G01",\n    "payment_form": "28" // Tarjeta de cr\xe9dito\n  }\'\n')))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"  Por default se considera que el precio del producto tiene impuestos inclu\xeddos.\nFacturapi se encarga de desglosar los impuestos del producto (siendo 16% de IVA el default)\ny calcular el precio unitario. Si en lugar de eso requieres que el atributo ",(0,r.kt)("inlineCode",{parentName:"p"},"price")," sea\nel precio unitario, debes enviar el par\xe1metro ",(0,r.kt)("inlineCode",{parentName:"p"},"tax_included")," con el valor ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Respuesta: Objeto Invoice"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "58e93bd8e86eb318b019743d",\n  "created_at": "2017-01-01T14:00:08.000Z",\n  "livemode": false,\n  "status": "valid",\n  "cancellation_status": "none",\n  "verification_url": "https://verificacfdi.facturaelectronica.sat.gob.mx/default.aspx?id=45BEC0CA-5F1E-491E-9417-698EA48C382A&re=AAA010101AAA&rr=ABC101010111&tt=345.600000&fe=bWApPw==",\n  "customer": {\n    "id": "58e93bd8e86eb318b0197456",\n    "legal_name": "Dunder Mifflin S.A. de C.V.",\n    "tax_id": "ABC101010111",\n    "tax_system": "601",\n    "address": {\n      "zip": "85900",\n      "country": "MEX"\n    }\n  },\n  "total": 345.60,\n  "uuid": "39c85a3f-275b-4341-b259-e8971d9f8a94",\n  "folio_number": 914,\n  "series": "A",\n  "payment_form": "28",\n  "related": [], \n  "currency": "MXN",\n  "exchange": 1,\n  "items": [{\n    "quantity": 1,\n    "discount": 0,\n    "product": {\n      "description": "Ukelele",\n      "price": 345.60,\n      "tax_included": true,\n      "taxes": [\n        {\n          "type": "IVA",\n          "rate": 0.16\n        }\n      ]\n    }\n  }],\n  "stamp": {\n    "signature": "ZGgQ126+lbo6XxVmeM0Kys1rAllqRaDmaK4yW20B3H5AaVShnItBwKATpxqJuGK1qPmLA2r16B8dAb4UFjR27Xc/+SsNPSwRBYRVKI0AB62jx2Z4uxooiVQBY9Bb6czlgzJb+ftgNvnGwSXzI6QZKpuWRe9LmJvACzqTB3ZdC9QoqaVICDNZ9oaT99txu9ahbJu3ftPhlykXi1SxVTBZ7uUTqsBkc6iEjbSTYpE85bsrhbMw4tDODR7o/PS917whChOFUU0sQenm5sJQMenPcKPyS9JoGQPO/a/4wzxJ2RyWCkw72LNFBbJTsPXcXdOZmEJ06Ixc2Iy24Biz8GEbJg==",\n    "date": "2021-03-30T00:57:48",\n    "sat_cert_number": "20001000000300022323",\n    "sat_signature": "AzYwRdHfDp0BCBaTpT87gtAAE3Q="\n  }\n}\n'))),(0,r.kt)("h3",{id:"3-env\xeda-la-factura-por-correo-electr\xf3nico"},"3. Env\xeda la factura por correo electr\xf3nico"),(0,r.kt)(i.Z,{groupId:"codeExamples",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"js",label:"Node.js",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"await facturapi.invoices.sendByEmail(invoice.id);\n"))),(0,r.kt)(l.Z,{value:"cs",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"await facturapi.Invoice.SendByEmailAsync(invoice.Id);\n"))),(0,r.kt)(l.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$facturapi->Invoices->send_by_email($invoice->id);\n"))),(0,r.kt)(l.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl https://www.facturapi.io/v1/invoices/58e93bd8e86eb318b019743d/email \\\n  -H "Authorization: Bearer sk_test_API_KEY"\n  -X POST\n')))),(0,r.kt)("h3",{id:"4-descarga-de-xml-y-pdf"},"4. Descarga de XML y PDF"),(0,r.kt)(i.Z,{groupId:"codeExamples",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"js",label:"Node.js",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const fs = require('fs');\n\n// Descarga PDF y XML comprimidos en archivo ZIP\nconst zipStream = await facturapi.invoices.downloadZip(invoice.id);\n// Guarda la descarga en un archivo\nconst file = fs.createWriteStream('./factura.zip');\nzipStream.pipe(file);\n// O env\xedalo como respuesta a tu cliente (en ExpressJS)\nzipStream.pipe(res);\n"))),(0,r.kt)(l.Z,{value:"cs",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// Descarga PDF y XML comprimidos en archivo ZIP\nvar zipStream = await facturapi.Invoice.DownloadZipAsync(invoice.Id);\n\n// Guarda la descarga en un archivo\nvar file = new System.IO.FileStream("C:\\\\route\\\\to\\\\save\\\\invoice.zip", FileMode.Create);\nzipStream.CopyTo(file);\nfile.Close();\n'))),(0,r.kt)(l.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$zip = $facturapi->Invoices->download_zip($invoice->id) // stream containing the PDF and XML as a ZIP file or\n\n$pdf = $facturapi->Invoices->download_pdf($invoice->id) // stream containing the PDF file or\n\n$xml = $facturapi->Invoices->download_xml($invoice->id) // stream containing the XML file or\n"))),(0,r.kt)(l.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'## Descargar PDF y XML comprimidos en archivo ZIP\ncurl https://www.facturapi.io/v1/invoices/58e93bd8e86eb318b019743d/zip \\\n  -H "Authorization: Bearer sk_test_API_KEY"\n')))),(0,r.kt)("h2",{id:"siguientes-pasos"},"Siguientes pasos"),(0,r.kt)("p",null,"Este fue un vistazo r\xe1pido del uso de Facturapi."),(0,r.kt)("p",null,"Te invitamos a consultar nuestra ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/customers"},"secci\xf3n de ejemplos"),",\nas\xed como ver la ",(0,r.kt)("a",{parentName:"p",href:"/api"},"referencia completa de la API"),", donde podr\xe1s explorar todos\nlos endpoints disponibles en Facturapi."))}m.isMDXComponent=!0}}]);