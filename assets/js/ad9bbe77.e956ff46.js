"use strict";(self.webpackChunkfacturapi_docs=self.webpackChunkfacturapi_docs||[]).push([[5190],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>m});var t=a(7294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=t.createContext({}),l=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(a),m=o,_=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?t.createElement(_,i(i({ref:n},p),{},{components:a})):t.createElement(_,i({ref:n},p))}));function m(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=a[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,n,a)=>{a.d(n,{Z:()=>i});var t=a(7294),o=a(6010);const r="tabItem_Ymn6";function i(e){let{children:n,hidden:a,className:i}=e;return t.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:a},n)}},4866:(e,n,a)=>{a.d(n,{Z:()=>E});var t=a(7462),o=a(7294),r=a(6010),i=a(6775),c=a(1980),s=a(7392),l=a(12);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:o}}=e;return{value:n,label:a,attributes:t,default:o}}))}function u(e){const{values:n,children:a}=e;return(0,o.useMemo)((()=>{const e=n??p(a);return function(e){const n=(0,s.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function d(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const t=(0,i.k6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,c._X)(r),(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})}),[r,t])]}function _(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,r=u(e),[i,c]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[s,p]=m({queryString:a,groupId:t}),[_,g]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,r]=(0,l.Nk)(a);return[t,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:t}),f=(()=>{const e=s??_;return d({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{f&&c(f)}),[f]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),p(e),g(e)}),[p,g,r]),tabValues:r}}var g=a(2466),f=a(2389);const b="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:n,block:a,selectedValue:i,selectValue:c,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:p}=(0,g.o5)(),u=e=>{const n=e.currentTarget,a=l.indexOf(n),t=s[a].value;t!==i&&(p(n),c(t))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;n=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;n=l[a]??l[l.length-1];break}}n?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n)},s.map((e=>{let{value:n,label:a,attributes:c}=e;return o.createElement("li",(0,t.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>l.push(e),onKeyDown:d,onClick:u},c,{className:(0,r.Z)("tabs__item",v,c?.className,{"tabs__item--active":i===n})}),a??n)})))}function h(e){let{lazy:n,children:a,selectedValue:t}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===t));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function A(e){const n=_(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",b)},o.createElement(y,(0,t.Z)({},e,n)),o.createElement(h,(0,t.Z)({},e,n)))}function E(e){const n=(0,f.Z)();return o.createElement(A,(0,t.Z)({key:String(n)},e))}},9522:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var t=a(7462),o=(a(7294),a(3905)),r=a(4866),i=a(5162);const c={sidebar_position:4,title:"N\xf3mina"},s="Recibo de N\xf3mina",l={unversionedId:"guides/invoices/nomina",id:"guides/invoices/nomina",title:"N\xf3mina",description:"Un comprobante de tipo N\xf3mina, tambi\xe9n llamado recibo de n\xf3mina, se utiliza para dar constancia que avale el pago ante la legislaci\xf3n laboral.",source:"@site/docs/guides/invoices/nomina.mdx",sourceDirName:"guides/invoices",slug:"/guides/invoices/nomina",permalink:"/docs/guides/invoices/nomina",draft:!1,editUrl:"https://github.com/facturapi/facturapi-docs/edit/main/website/docs/guides/invoices/nomina.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"N\xf3mina"},sidebar:"tutorialSidebar",previous:{title:"Egreso",permalink:"/docs/guides/invoices/egreso"},next:{title:"Traslado",permalink:"/docs/guides/invoices/traslado"}},p={},u=[{value:"Ejemplos",id:"ejemplos",level:2},{value:"Comprobante emitido para amparar el servicio prestado por un empleado",id:"comprobante-emitido-para-amparar-el-servicio-prestado-por-un-empleado",level:3}],d={toc:u};function m(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"recibo-de-n\xf3mina"},"Recibo de N\xf3mina"),(0,o.kt)("p",null,"Un comprobante de tipo N\xf3mina, tambi\xe9n llamado ",(0,o.kt)("strong",{parentName:"p"},"recibo de n\xf3mina"),", se utiliza para dar constancia que avale el pago ante la legislaci\xf3n laboral.\nEste tipo de CFDI debe emitirse por cada pago realizado por el concepto de remuneraciones de sueldos, salarios y asimilados a estos y su objetivo es formalizar la relaci\xf3n entre empleador y empleado, adem\xe1s de ser un requisito para cumplir con las normativas fiscales impuestas por la ley."),(0,o.kt)("admonition",{title:"Los recibos de n\xf3mina tambi\xe9n sirven para deducci\xf3n de impuestos de una empresa",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Con ellos se comprueban aportaciones patronales realizadas al Instituto Mexicano del Seguro social (IMSS), Instituto del Fondo Nacional de la Vivienda para los Trabajadores (INFONAVIT) as\xed como el pago del impuesto sobre la n\xf3mina.")),(0,o.kt)("p",null,'El CFDI de n\xf3mina puede identificarse como tipo de comprobante "N"'),(0,o.kt)("h2",{id:"ejemplos"},"Ejemplos"),(0,o.kt)("p",null,"Para conocer a fondo todas las opciones disponibles al crear una factura, descripciiones\ndetalladas de cada campo y los cat\xe1logos m\xe1s utilizados consulta la\n",(0,o.kt)("a",{parentName:"p",href:"/api/#operation/createInvoice"},"referencia del m\xe9todo Crear Factura"),"."),(0,o.kt)("h3",{id:"comprobante-emitido-para-amparar-el-servicio-prestado-por-un-empleado"},"Comprobante emitido para amparar el servicio prestado por un empleado"),(0,o.kt)("p",null,"En este escenario se emite un CFDI que comprueba el servicio que ha prestado un empleado en un periodo determinado. "),(0,o.kt)(r.Z,{groupId:"codeExamples",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"js",label:"Node.js",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const Facturapi = require(\'facturapi\');\nconst facturapi = new Facturapi(\'sk_test_API_KEY\');\n\nconst invoice = await facturapi.invoices.create({\n  type: \'N\',\n  folio_number: 1580,\n  series: \'N\',\n  customer: {\n    legal_name: \'SAUL EUSEBIO LOPEZ GARCIA\',\n    tax_id: \'ABCD990714A23\',\n    tax_system: \'605\',\n    address: {\n      country: \'MEX\',\n      zip: \'31066\',\n    },\n  },\n  complements: [\n    {\n      type: \'nomina\',\n      data: {\n        fecha_pago: "2023-08-31T17:07:35.690Z",\n        fecha_inicial_pago: \'2023-08-28T06:00:00.000Z\',\n        fecha_final_pago: \'2023-09-03T06:00:00.000Z\',\n        num_dias_pagados: 7,\n        emisor: {\n          curp: "DCBA531412HSACAP01",\n          registro_patronal: "A7025105103",\n          rfc_patron_origen: "DCBA531412AP0"\n        },\n        receptor: {\n          curp: "ABCD990714HSRABS06",\n          tipo_contrato: "01",\n          tipo_regimen: "02",\n          num_empleado: "021",\n          periodicidad_pago: "02",\n          clave_ent_fed: "HID",\n          num_seguridad_social: "72826484110",\n          fecha_inicio_rel_laboral: "2023-07-03T06:00:00.000Z",\n          tipo_jornada: "01",\n          departamento: "CONTABILIDAD",\n          puesto: "ASISTENTE DE CONTADOR",\n          riesgo_puesto: "2",\n          salario_diario_integrado: 228.16,\n          antiguedad: true\n        },\n        percepciones: {\n          percepcion: {\n            tipo_percepcion: "001",\n            clave: "5400-001",\n            importe_gravado: 1522.08,\n            importe_exento: 0\n          }\n        },\n        deducciones: [\n          {\n            tipo_deduccion: "002",\n            clave: "1450-002",\n            importe: 92.58\n          },\n          {\n            tipo_deduccion: "021",\n            clave: "1450-021",\n            importe: 37.93\n          }\n        ],\n        otros_pagos: [\n          {\n            tipo_otro_pago: "002",\n            clave: "1350-002",\n            importe: 58.38,\n            subsidio_causado: 58.38,\n            concepto: "Subsidio para el empleo (efectivamente entregado al trabajador)."\n          }\n        ]\n      }\n    }\n  ]\n});\n'))),(0,o.kt)(i.Z,{value:"cs",label:"C#",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'var facturapi = new Facturapi.Client("sk_test_API_KEY");\n\nvar invoice = await facturapi.Invoice.CreateAsync(new Dictionary<string, object>\n{\n  ["type"] = "N",\n  ["folio_number"] = 1580,\n  ["series"] = "N",\n  ["customer"] = new Dictionary<string, object>\n  {\n    ["legal_name"] = "SAUL EUSEBIO LOPEZ GARCIA",\n    ["tax_id"] = "ABCD990714A23",\n    ["tax_system"] = "605",\n    ["address"] = new Dictionary<string, object>\n    {\n      ["country"] = "MEX",\n      ["zip"] = "31066"\n    }\n  },\n  ["complements"] = new List<Dictionary<string, object>>\n  {\n    new Dictionary<string, object>\n    {\n      ["type"] = "nomina",\n      ["data"] = new Dictionary<string, object>\n      {\n        ["fecha_pago"] = "2023-08-31T17:07:35.690Z",\n        ["fecha_inicial_pago"] = "2023-08-28T06:00:00.000Z",\n        ["fecha_final_pago"] = "2023-09-03T06:00:00.000Z",\n        ["num_dias_pagados"] = 7,\n        ["emisor"] = new Dictionary<string, object>\n        {\n          ["curp"] = "DCBA531412HSACAP01",\n          ["registro_patronal"] = "A7025105103",\n          ["rfc_patron_origen"] = "DCBA531412AP0"\n        },\n        ["receptor"] = new Dictionary<string, object>\n        {\n          ["curp"] = "ABCD990714HSRABS06",\n          ["tipo_contrato"] = "01",\n          ["tipo_regimen"] = "02",\n          ["num_empleado"] = "021",\n          ["periodicidad_pago"] = "02",\n          ["clave_ent_fed"] = "HID",\n          ["num_seguridad_social"] = "72826484110",\n          ["fecha_inicio_rel_laboral"] = "2023-07-03T06:00:00.000Z",\n          ["tipo_jornada"] = "01",\n          ["departamento"] = "CONTABILIDAD",\n          ["puesto"] = "ASISTENTE DE CONTADOR",\n          ["riesgo_puesto"] = "2",\n          ["salario_diario_integrado"] = 228.16,\n          ["antiguedad"] = true\n        },\n        ["percepciones"] = new Dictionary<string, object>\n        {\n          ["percepcion"] = new Dictionary<string, object>\n          {\n            ["tipo_percepcion"] = "001",\n            ["clave"] = "5400-001",\n            ["importe_gravado"] = 1522.08,\n            ["importe_exento"] = 0\n          }\n        },\n        ["deducciones"] = new List<Dictionary<string, object>>\n        {\n          new Dictionary<string, object>\n          {\n            ["tipo_deduccion"] = "002",\n            ["clave"] = "1450-002",\n            ["importe"] = 92.58\n          },\n          new Dictionary<string, object>\n          {\n            ["tipo_deduccion"] = "021",\n            ["clave"] = "1450-021",\n            ["importe"] = 37.93\n          }\n        },\n        ["otros_pagos"] = new List<Dictionary<string, object>>\n        {\n          new Dictionary<string, object>\n          {\n            ["tipo_otro_pago"] = "002",\n            ["clave"] = "1350-002",\n            ["importe"] = 58.38,\n            ["subsidio_causado"] = 58.38,\n            ["concepto"] = "Subsidio para el empleo (efectivamente entregado al trabajador)."\n          }\n        }\n      }\n    }\n  }\n});\n'))),(0,o.kt)(i.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'$facturapi = new Facturapi("sk_test_API_KEY");\n\n$invoice = $facturapi->Invoices->create([\n  "type" => "N",\n  "folio_number" => 1580,\n  "series" => "N",\n  "customer" => [\n    "legal_name" => "SAUL EUSEBIO LOPEZ GARCIA",\n    "tax_id" => "ABCD990714A23",\n    "tax_system" => "605",\n    "address" => [\n      "country" => "MEX",\n      "zip" => "31066",\n    ],\n  ],\n  "complements" => [\n    [\n      "type" => "nomina",\n      "data" => [\n        "fecha_pago" => "2023-08-31T17:07:35.690Z",\n        "fecha_inicial_pago" => "2023-08-28T06:00:00.000Z",\n        "fecha_final_pago" => "2023-09-03T06:00:00.000Z",\n        "num_dias_pagados" => 7,\n        "emisor" => [\n          "curp" => "DCBA531412HSACAP01",\n          "registro_patronal" => "A7025105103",\n          "rfc_patron_origen" => "DCBA531412AP0"\n        ],\n        "receptor" => [\n          "curp" => "ABCD990714HSRABS06",\n          "tipo_contrato" => "01",\n          "tipo_regimen" => "02",\n          "num_empleado" => "021",\n          "periodicidad_pago" => "02",\n          "clave_ent_fed" => "HID",\n          "num_seguridad_social" => "72826484110",\n          "fecha_inicio_rel_laboral" => "2023-07-03T06:00:00.000Z",\n          "tipo_jornada" => "01",\n          "departamento" => "CONTABILIDAD",\n          "puesto" => "ASISTENTE DE CONTADOR",\n          "riesgo_puesto" => "2",\n          "salario_diario_integrado" => 228.16,\n          "antiguedad" => true\n        ],\n        "percepciones" => [\n          "percepcion" => [\n            "tipo_percepcion" => "001",\n            "clave" => "5400-001",\n            "importe_gravado" => 1522.08,\n            "importe_exento" => 0\n          ]\n        ],\n        "deducciones" => [\n          [\n            "tipo_deduccion" => "002",\n            "clave" => "1450-002",\n            "importe" => 92.58\n          ],\n          [\n            "tipo_deduccion" => "021",\n            "clave" => "1450-021",\n            "importe" => 37.93\n          ]\n        ],\n        "otros_pagos" => [\n          [\n            "tipo_otro_pago" => "002",\n            "clave" => "1350-002",\n            "importe" => 58.38,\n            "subsidio_causado" => 58.38,\n            "concepto" => "Subsidio para el empleo (efectivamente entregado al trabajador)."\n          ]\n        ]\n      ]\n    ]\n  ]\n]);\n'))),(0,o.kt)(i.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl https://www.facturapi.io/v2/invoices \\\n  -H "Authorization: Bearer sk_test_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "type": "N",\n    "folio_number": 1580,\n    "series": "N",\n    "customer": {\n      "legal_name": "SAUL EUSEBIO LOPEZ GARCIA",\n      "tax_id": "ABCD990714A23",\n      "tax_system": "605",\n      "address": {\n        "country": "MEX",\n        "zip": "31066"\n      }\n    },\n    "complements": [\n      {\n        "type": "nomina",\n        "data": {\n          "fecha_pago": "2023-08-31T17:07:35.690Z",\n          "fecha_inicial_pago": "2023-08-28T06:00:00.000Z",\n          "fecha_final_pago": "2023-09-03T06:00:00.000Z",\n          "num_dias_pagados": 7,\n          "emisor": {\n            "curp": "DCBA531412HSACAP01",\n            "registro_patronal": "A7025105103",\n            "rfc_patron_origen": "DCBA531412AP0"\n          },\n          "receptor": {\n            "curp": "ABCD990714HSRABS06",\n            "tipo_contrato": "01",\n            "tipo_regimen": "02",\n            "num_empleado": "021",\n            "periodicidad_pago": "02",\n            "clave_ent_fed": "HID",\n            "num_seguridad_social": "72826484110",\n            "fecha_inicio_rel_laboral": "2023-07-03T06:00:00.000Z",\n            "tipo_jornada": "01",\n            "departamento": "CONTABILIDAD",\n            "puesto": "ASISTENTE DE CONTADOR",\n            "riesgo_puesto": "2",\n            "salario_diario_integrado": 228.16,\n            "antiguedad": true\n          },\n          "percepciones": {\n            "percepcion": {\n              "tipo_percepcion": "001",\n              "clave": "5400-001",\n              "importe_gravado": 1522.08,\n              "importe_exento": 0\n            }\n          },\n          "deducciones": [\n            {\n              "tipo_deduccion": "002",\n              "clave": "1450-002",\n              "importe": 92.58\n            },\n            {\n              "tipo_deduccion": "021",\n              "clave": "1450-021",\n              "importe": 37.93\n            }\n          ],\n          "otros_pagos": [\n            {\n              "tipo_otro_pago": "002",\n              "clave": "1350-002",\n              "importe": 58.38,\n              "subsidio_causado": 58.38,\n              "concepto": "Subsidio para el empleo (efectivamente entregado al trabajador)."\n            }\n          ]\n        }\n      }\n    ]\n  }\'\n')))))}m.isMDXComponent=!0}}]);