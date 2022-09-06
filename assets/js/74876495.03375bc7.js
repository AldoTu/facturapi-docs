"use strict";(self.webpackChunkfacturapi_docs=self.webpackChunkfacturapi_docs||[]).push([[5049],{3905:function(e,a,n){n.d(a,{Zo:function(){return u},kt:function(){return m}});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=t.createContext({}),s=function(e){var a=t.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},u=function(e){var a=s(e.components);return t.createElement(c.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?t.createElement(f,o(o({ref:a},u),{},{components:n})):t.createElement(f,o({ref:a},u))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(67294),r=n(34334),i="tabItem_Ymn6";function o(e){var a=e.children,n=e.hidden,o=e.className;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},a)}},65488:function(e,a,n){n.d(a,{Z:function(){return m}});var t=n(83117),r=n(67294),i=n(34334),o=n(72389),l=n(67392),c=n(7094),s=n(12466),u="tabList__CuJ",p="tabItem_LNqP";function d(e){var a,n,o=e.lazy,d=e.block,m=e.defaultValue,f=e.values,v=e.groupId,b=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:k.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),g=(0,l.l)(y,(function(e,a){return e.value===a.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===m?m:null!=(a=null!=m?m:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?a:k[0].props.value;if(null!==h&&!y.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,c.U)(),x=T.tabGroupChoices,N=T.setTabGroupChoices,_=(0,r.useState)(h),w=_[0],I=_[1],C=[],A=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var P=x[v];null!=P&&P!==w&&y.some((function(e){return e.value===P}))&&I(P)}var E=function(e){var a=e.currentTarget,n=C.indexOf(a),t=y[n].value;t!==w&&(A(a),I(t),null!=v&&N(v,String(t)))},j=function(e){var a,n=null;switch(e.key){case"ArrowRight":var t,r=C.indexOf(e.currentTarget)+1;n=null!=(t=C[r])?t:C[0];break;case"ArrowLeft":var i,o=C.indexOf(e.currentTarget)-1;n=null!=(i=C[o])?i:C[C.length-1]}null==(a=n)||a.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},b)},y.map((function(e){var a=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:w===a?0:-1,"aria-selected":w===a,key:a,ref:function(e){return C.push(e)},onKeyDown:j,onFocus:E,onClick:E},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":w===a})}),null!=n?n:a)}))),o?(0,r.cloneElement)(k.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==w})}))))}function m(e){var a=(0,o.Z)();return r.createElement(d,(0,t.Z)({key:String(a)},e))}},34235:function(e,a,n){n.r(a),n.d(a,{assets:function(){return d},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var t=n(83117),r=n(80102),i=(n(67294),n(3905)),o=n(65488),l=n(85162),c=["components"],s={sidebar_position:1},u="Inicio r\xe1pido",p={unversionedId:"quickstart",id:"quickstart",title:"Inicio r\xe1pido",description:"Te damos la bienvenida a esta gu\xeda de inicio r\xe1pido donde se muestran los campos m\xednimos requeridos para crear una factura de tipo Ingreso en una sola llamada.",source:"@site/docs/quickstart.mdx",sourceDirName:".",slug:"/quickstart",permalink:"/docs/quickstart",draft:!1,editUrl:"https://github.com/facturapi/facturapi-docs/edit/main/website/docs/quickstart.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Introducci\xf3n",permalink:"/docs/getting-started/intro"}},d={},m=[{value:"\xa1Comencemos!",id:"comencemos",level:2},{value:"\xbfC\xf3mo asegurarme de que la factura se envi\xf3 al SAT y fue timbrada exitosamente?",id:"c\xf3mo-asegurarme-de-que-la-factura-se-envi\xf3-al-sat-y-fue-timbrada-exitosamente",level:2},{value:"Env\xeda la factura por correo electr\xf3nico",id:"env\xeda-la-factura-por-correo-electr\xf3nico",level:2},{value:"Descarga de XML y PDF",id:"descarga-de-xml-y-pdf",level:2},{value:"\xa1Conclu\xedmos!",id:"conclu\xedmos",level:2}],f={toc:m};function v(e){var a=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,t.Z)({},f,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"inicio-r\xe1pido"},"Inicio r\xe1pido"),(0,i.kt)("p",null,"Te damos la bienvenida a esta ",(0,i.kt)("strong",{parentName:"p"},"gu\xeda de inicio r\xe1pido")," donde se muestran los campos m\xednimos requeridos para crear una factura de tipo ",(0,i.kt)("inlineCode",{parentName:"p"},"Ingreso")," en una sola llamada."),(0,i.kt)("p",null,"Para conocer a fondo todas las opciones disponibles al crear una factura, as\xed como una descripci\xf3n\ndetallada de cada campo, consulta la ",(0,i.kt)("a",{parentName:"p",href:"/api/#operation/createInvoice"},"referencia del m\xe9todo Crear Factura")," dentro de nuestra documentaci\xf3n completa."),(0,i.kt)("admonition",{title:"\xa1No olvides esto antes de comenzar!",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"  Recuerda reemplazar nuestra llave de ejemplo ",(0,i.kt)("code",null,"sk_test_API_KEY"),"\ncon tu propia llave secreta.")),(0,i.kt)("h2",{id:"comencemos"},"\xa1Comencemos!"),(0,i.kt)("p",null,"Un Comprobante o factura de Ingreso, se utiliza para dar constancia fiscal de que una empresa o persona ha entregado una mercanc\xeda o un servicio, as\xed como las condiciones del intercambio como la forma de pago y si se recibe en ese momento el pago o se acuerda para cobrarse despu\xe9s."),(0,i.kt)("p",null,"El caso m\xe1s com\xfan es emitir una factura por motivo de una venta, y enviarla por correo electr\xf3nico, o hacer que est\xe9 disponible para su descarga."),(0,i.kt)(o.Z,{groupId:"codeExamples",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"js",label:"Node.js",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const Facturapi = require('facturapi');\nconst facturapi = new Facturapi('sk_test_API_KEY');\n\nconst invoice = await facturapi.invoices.create({\n  customer: {\n    legal_name: 'Dunder Mifflin',\n    email: 'email@example.com',\n    tax_id: 'ABC101010111',\n    tax_system: '601',\n    address: {\n      zip: '85900'\n    }\n  },\n  items: [{\n    quantity: 1,\n    product: {\n      description: 'Ukelele',\n      product_key: '60131324',\n      price: 345.60\n    }\n  }],\n  use: 'G01',\n  payment_form: '28' // Tarjeta de cr\xe9dito\n});\n"))),(0,i.kt)(l.Z,{value:"cs",label:"C#",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'var facturapi = new FacturapiClient("sk_test_API_KEY");\n\nvar invoice = await facturapi.Invoice.CreateAsync(new Dictionary<string, object>\n{\n  ["customer"] = new Dictionary<string, object>\n  {\n    ["legal_name"] = "Dunder Mifflin",\n    ["email"] = "email@example.com",\n    ["tax_id"] = "ABC101010111",\n    ["tax_system"] = "601",\n    ["address"] = new Dictionary<string, object>\n    {\n      ["zip"] = "85900"\n    }\n  },\n  ["items"] = new Dictionary<string, object>[]\n  {\n    new Dictionary<string, object>\n    {\n      ["quantity"] = 1,\n      ["product"] = new Dictionary<string, object>\n      {\n        ["description"] = "Ukelele",\n        ["product_key"] = "60131324",\n        ["price"] = 345.60\n      }\n    }\n  },\n  ["use"] = "G01",\n  ["payment_form"] = "28" // Tarjeta de cr\xe9dito\n});\n'))),(0,i.kt)(l.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'$facturapi = new Facturapi( "sk_test_API_KEY" );\n\n$invoice = $facturapi->Invoices->create([\n  "customer" => [\n    "legal_name" => "Dunder Mifflin",\n    "email" => "email@example.com",\n    "tax_id" => "ABC101010111",\n    "tax_system" => "601",\n    "address" => [\n      "zip" => "85900"\n    ]\n  ],\n  "items" => [\n    [\n      "quantity" => 1,\n      "product" => [\n        "description" => "Ukelele",\n        "product_key" => "60131324",\n        "price" => 345.60\n      ]\n    ],\n  ],\n  "payment_form" => "28" // Tarjeta de cr\xe9dito\n]);\n'))),(0,i.kt)(l.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl https://www.facturapi.io/v1/invoices \\\n  -H "Authorization: Bearer sk_test_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "customer": {\n      "legal_name": "Dunder Mifflin",\n      "email": "email@example.com",\n      "tax_id": "ABC101010111",\n      "tax_system": "601",\n      "address": {\n        "zip": "85900"\n      }\n    },\n    "items": [{\n      "quantity": 1,\n      "product": {\n        "description": "Ukelele",\n        "product_key": "60131324",\n        "price": 345.60\n      }\n    }],\n    "use": "G01",\n    "payment_form": "28" // Tarjeta de cr\xe9dito\n  }\'\n')))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"  Por default se considera que el precio del producto tiene impuestos inclu\xeddos.\nFacturapi se encarga de desglosar los impuestos del producto (siendo 16% de IVA el default)\ny calcular el precio unitario. Si en lugar de eso requieres que el atributo ",(0,i.kt)("inlineCode",{parentName:"p"},"price")," sea\nel precio unitario, debes enviar el par\xe1metro ",(0,i.kt)("inlineCode",{parentName:"p"},"tax_included")," con el valor ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Respuesta: Objeto Invoice"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "58e93bd8e86eb318b019743d",\n  "created_at": "2017-01-01T14:00:08.000Z",\n  "livemode": false,\n  "status": "valid",\n  "cancellation_status": "none",\n  "verification_url": "https://verificacfdi.facturaelectronica.sat.gob.mx/default.aspx?id=45BEC0CA-5F1E-491E-9417-698EA48C382A&re=AAA010101AAA&rr=ABC101010111&tt=345.600000&fe=bWApPw==",\n  "customer": {\n    "id": "58e93bd8e86eb318b0197456",\n    "legal_name": "Dunder Mifflin S.A. de C.V.",\n    "tax_id": "ABC101010111",\n    "tax_system": "601",\n    "address": {\n      "zip": "85900",\n      "country": "MEX"\n    }\n  },\n  "total": 345.60,\n  "uuid": "39c85a3f-275b-4341-b259-e8971d9f8a94",\n  "folio_number": 914,\n  "series": "A",\n  "payment_form": "28",\n  "related": [], \n  "currency": "MXN",\n  "exchange": 1,\n  "items": [{\n    "quantity": 1,\n    "discount": 0,\n    "product": {\n      "description": "Ukelele",\n      "price": 345.60,\n      "tax_included": true,\n      "taxes": [\n        {\n          "type": "IVA",\n          "rate": 0.16\n        }\n      ]\n    }\n  }],\n  "stamp": {\n    "signature": "ZGgQ126+lbo6XxVmeM0Kys1rAllqRaDmaK4yW20B3H5AaVShnItBwKATpxqJuGK1qPmLA2r16B8dAb4UFjR27Xc/+SsNPSwRBYRVKI0AB62jx2Z4uxooiVQBY9Bb6czlgzJb+ftgNvnGwSXzI6QZKpuWRe9LmJvACzqTB3ZdC9QoqaVICDNZ9oaT99txu9ahbJu3ftPhlykXi1SxVTBZ7uUTqsBkc6iEjbSTYpE85bsrhbMw4tDODR7o/PS917whChOFUU0sQenm5sJQMenPcKPyS9JoGQPO/a/4wzxJ2RyWCkw72LNFBbJTsPXcXdOZmEJ06Ixc2Iy24Biz8GEbJg==",\n    "date": "2021-03-30T00:57:48",\n    "sat_cert_number": "20001000000300022323",\n    "sat_signature": "AzYwRdHfDp0BCBaTpT87gtAAE3Q="\n  }\n}\n'))),(0,i.kt)("admonition",{title:"\xa1Listo! \ud83c\udf89",type:"success"},(0,i.kt)("p",{parentName:"admonition"},"En este punto tu factura fue creada exitosamente, y si est\xe1s en ambiente Live, enviada al SAT.")),(0,i.kt)("h2",{id:"c\xf3mo-asegurarme-de-que-la-factura-se-envi\xf3-al-sat-y-fue-timbrada-exitosamente"},"\xbfC\xf3mo asegurarme de que la factura se envi\xf3 al SAT y fue timbrada exitosamente?"),(0,i.kt)("p",null,"La propiedad ",(0,i.kt)("inlineCode",{parentName:"p"},"verification_url")," del objeto Invoice de la respuesta\ncontiene el enlace oficial al portal de verificaci\xf3n del SAT (el mismo que se\nmuestra como QR en la versi\xf3n PDF). Si creaste la factura en ambiente ",(0,i.kt)("strong",{parentName:"p"},"Live"),",\nel portal de verificaci\xf3n te mostrar\xe1 informaci\xf3n b\xe1sica de\nla factura, as\xed como su estatus oficial, si est\xe1 vigente o si ha sido\ncancelada. Las facturas creadas en ambiente Test no aparecer\xe1n en el portal porque\nno son enviadas al SAT."),(0,i.kt)("p",null,"Otras propiedades interesantes que Facturapi a\xf1ade a la respuesta son:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id"),": Identificador \xfanico de la factura en Facturapi. Te recomendamos guardar este valor en tu base de datos para relacionarlo con tus registros."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"created_at"),": Fecha en que la factura fue creada."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"livemode"),": Ambiente en que se cre\xf3."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"total"),": El total, que Facturapi calcula y no es parte del input."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uuid"),": El folio fiscal oficial con el que el SAT identifica tu factura"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stamp"),": Informaci\xf3n del timbre fiscal digital.")),(0,i.kt)("p",null,"A continuaci\xf3n exploraremos c\xf3mo enviar la factura a tu cliente y c\xf3mo descargar los archivos XML y PDF."),(0,i.kt)("h2",{id:"env\xeda-la-factura-por-correo-electr\xf3nico"},"Env\xeda la factura por correo electr\xf3nico"),(0,i.kt)("p",null,"Utilizando el ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," de la factura que acabamos de crear, podemos realizar operaciones como enviar\nlos archivos de la factura al correo electr\xf3nico del cliente a quien se le emiti\xf3."),(0,i.kt)(o.Z,{groupId:"codeExamples",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"js",label:"Node.js",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"await facturapi.invoices.sendByEmail(invoice.id);\n"))),(0,i.kt)(l.Z,{value:"cs",label:"C#",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"await facturapi.Invoice.SendByEmailAsync(invoice.Id);\n"))),(0,i.kt)(l.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$facturapi->Invoices->send_by_email($invoice->id);\n"))),(0,i.kt)(l.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl https://www.facturapi.io/v1/invoices/58e93bd8e86eb318b019743d/email \\\n  -H "Authorization: Bearer sk_test_API_KEY"\n  -X POST\n')))),(0,i.kt)("h2",{id:"descarga-de-xml-y-pdf"},"Descarga de XML y PDF"),(0,i.kt)("p",null,"Si lo necesitas, tambi\xe9n puedes descargar los archivos de la factura en tu servidor."),(0,i.kt)(o.Z,{groupId:"codeExamples",mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"js",label:"Node.js",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const fs = require('fs');\n\n// Descarga PDF y XML comprimidos en archivo ZIP\nconst zipStream = await facturapi.invoices.downloadZip(invoice.id);\n// Guarda la descarga en un archivo\nconst file = fs.createWriteStream('./factura.zip');\nzipStream.pipe(file);\n// O env\xedalo como respuesta a tu cliente (en ExpressJS)\nzipStream.pipe(res);\n"))),(0,i.kt)(l.Z,{value:"cs",label:"C#",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'// Descarga PDF y XML comprimidos en archivo ZIP\nvar zipStream = await facturapi.Invoice.DownloadZipAsync(invoice.Id);\n\n// Guarda la descarga en un archivo\nvar file = new System.IO.FileStream("C:\\\\route\\\\to\\\\save\\\\invoice.zip", FileMode.Create);\nzipStream.CopyTo(file);\nfile.Close();\n'))),(0,i.kt)(l.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$zip = $facturapi->Invoices->download_zip($invoice->id) // stream containing the PDF and XML as a ZIP file or\n\n$pdf = $facturapi->Invoices->download_pdf($invoice->id) // stream containing the PDF file or\n\n$xml = $facturapi->Invoices->download_xml($invoice->id) // stream containing the XML file or\n"))),(0,i.kt)(l.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'## Descargar PDF y XML comprimidos en archivo ZIP\ncurl https://www.facturapi.io/v1/invoices/58e93bd8e86eb318b019743d/zip \\\n  -H "Authorization: Bearer sk_test_API_KEY"\n')))),(0,i.kt)("h2",{id:"conclu\xedmos"},"\xa1Conclu\xedmos!"),(0,i.kt)("p",null,"Ahora ya sabes crear una factura, descargar los archivos PDF y XML; y tambi\xe9n hacer que los archivos est\xe9n disponibles o enviarlos por correo a tus clientes."),(0,i.kt)("p",null,"Con facturapi puedes crear facturas de cualquier tipo, tambi\xe9n hacer uso de complementos y automatizar todo el proceso para tu organizaci\xf3n."),(0,i.kt)("p",null,"Te invitamos a consultar ",(0,i.kt)("a",{parentName:"p",href:"//docs.facturapi.io"},"nuestra documentaci\xf3n completa"),", en ella podr\xe1s explorar todas las posibilidades que tienes disponibles en Facturapi."))}v.isMDXComponent=!0}}]);