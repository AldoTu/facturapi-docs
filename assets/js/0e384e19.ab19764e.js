"use strict";(self.webpackChunkfacturapi_docs=self.webpackChunkfacturapi_docs||[]).push([[9671],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>d});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),c=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=c(e.components);return r.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=n,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(k,o(o({ref:a},p),{},{components:t})):r.createElement(k,o({ref:a},p))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9881:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),n=(t(7294),t(3905));const i={sidebar_position:1},o="Introducci\xf3n",l={unversionedId:"intro",id:"intro",title:"Introducci\xf3n",description:"El servicio web de Facturapi te permite interactuar con comprobantes fiscales digitales (CFDI) de una manera simple, f\xe1cil de entender y menos costosa de mantener.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/facturapi/facturapi-docs/edit/main/website/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Inicio r\xe1pido",permalink:"/docs/quickstart"}},s={},c=[{value:"\xbfC\xf3mo integro mi servicio a Facturapi?",id:"c\xf3mo-integro-mi-servicio-a-facturapi",level:2},{value:"C\xf3mo empezar",id:"c\xf3mo-empezar",level:2},{value:"Caracter\xedsticas soportadas por Facturapi",id:"caracter\xedsticas-soportadas-por-facturapi",level:2}],p={toc:c};function u(e){let{components:a,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,i,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introducci\xf3n"},"Introducci\xf3n"),(0,n.kt)("p",null,"El servicio web de Facturapi te permite interactuar con comprobantes fiscales digitales (CFDI) de una manera simple, f\xe1cil de entender y menos costosa de mantener."),(0,n.kt)("p",null,"Aspiramos a ser una alternativa moderna frente a los PCCFDI (Proveedor de certificaci\xf3n de Comprobante Fiscal Digital por Internet, antes PAC) tradicionales, que requieren de una gran cantidad de tiempo y experiencia para implementarse."),(0,n.kt)("p",null,"Nuestro objetivo es brindar una experiencia de desarrollo simple, y a la vez poderosa, capaz de cubrir todos los casos de uso, de escalar con tu crecimiento y de cumplir con los principales est\xe1ndares de seguridad."),(0,n.kt)("p",null,"Facturapi usa ",(0,n.kt)("strong",{parentName:"p"},"PCCFDI (antes PAC) autorizados por el SAT")," para timbrar tus facturas y darles validez fiscal."),(0,n.kt)("h2",{id:"c\xf3mo-integro-mi-servicio-a-facturapi"},"\xbfC\xf3mo integro mi servicio a Facturapi?"),(0,n.kt)("p",null,"Facturapi es un servicio web que se comunica con tu sistema a trav\xe9s de una API RESTful. Esto significa que puedes usar cualquier lenguaje de programaci\xf3n para integrar tu servicio a Facturapi."),(0,n.kt)("p",null,"Las llamadas a la API de Facturapi se realizan desde tu servidor, por lo que no es necesario que tu cliente tenga una conexi\xf3n directa con Facturapi."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.facturapi.io"},(0,n.kt)("img",{alt:"Facturapi",src:t(6749).Z,width:"2369",height:"1688"}))),(0,n.kt)("h2",{id:"c\xf3mo-empezar"},"C\xf3mo empezar"),(0,n.kt)("p",null,"Lo \xfanico que necesitas para empezar a usar Facturapi es una cuenta de usuario y una API Key."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://www.facturapi.io/register"},"Crea una cuenta")," en Facturapi."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://dashboard.facturapi.io/integration/apikeys"},"Obt\xe9n tu API Key"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/getting-started/install/"},"Instala el SDK")," de tu lenguaje de programaci\xf3n favorito."),(0,n.kt)("li",{parentName:"ol"},"Empieza por ",(0,n.kt)("a",{parentName:"li",href:"/docs/guides/invoices/ingreso/"},"un ejemplo"),"."),(0,n.kt)("li",{parentName:"ol"},"Consulta la ",(0,n.kt)("a",{parentName:"li",href:"/api/"},"referencia completa de la API"),".")),(0,n.kt)("h2",{id:"caracter\xedsticas-soportadas-por-facturapi"},"Caracter\xedsticas soportadas por Facturapi"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"E-receipts"),". Emite ",(0,n.kt)("a",{parentName:"li",href:"/docs/guides/receipts/"},"recibos digitales facturables")," por cada venta que realices.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Factura global"),". Emite una sola factura por todos los e-receipts que no se facturaron durante un periodo."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Autofactura")," Proporciona un portal para que tus clientes completen los datos de su factura por si mismos."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Factura electr\xf3nica"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"CFDI versi\xf3n 4.0")," (vigente desde Enero de 2022)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("del",{parentName:"li"},(0,n.kt)("strong",{parentName:"del"},"CFDI versi\xf3n 3.3"))," (descontinuada en Marzo de 2023)."),(0,n.kt)("li",{parentName:"ul"},"Todos los tipos de comprobantes (CFDI):",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Ingreso")," (Factura)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Egreso")," (Nota de cr\xe9dito)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Pago")," (Complemento de pago)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"N\xf3mina")," (Recibo de n\xf3mina)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Traslado")," (Traslado de mercanc\xeda)"))),(0,n.kt)("li",{parentName:"ul"},"Inserta cualquier ",(0,n.kt)("strong",{parentName:"li"},"complemento")," y/o ",(0,n.kt)("strong",{parentName:"li"},"addenda"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Acreditamiento de IEPS"),(0,n.kt)("li",{parentName:"ul"},"Instituciones Educativas"),(0,n.kt)("li",{parentName:"ul"},"Aerol\xedneas"),(0,n.kt)("li",{parentName:"ul"},"Certificado de destrucci\xf3n"),(0,n.kt)("li",{parentName:"ul"},"Comercio Exterior"),(0,n.kt)("li",{parentName:"ul"},"Divisas"),(0,n.kt)("li",{parentName:"ul"},"Consumo de combustibles"),(0,n.kt)("li",{parentName:"ul"},"Donatarias"),(0,n.kt)("li",{parentName:"ul"},"Estado de cuenta combustible"),(0,n.kt)("li",{parentName:"ul"},"Gastos en hidrocarburos"),(0,n.kt)("li",{parentName:"ul"},"INE"),(0,n.kt)("li",{parentName:"ul"},"Leyendas fiscales"),(0,n.kt)("li",{parentName:"ul"},"Notarios p\xfablicos"),(0,n.kt)("li",{parentName:"ul"},"Obras de arte"),(0,n.kt)("li",{parentName:"ul"},"Impuestos locales"),(0,n.kt)("li",{parentName:"ul"},"Pago en especie"),(0,n.kt)("li",{parentName:"ul"},"PF integrante coordinado"),(0,n.kt)("li",{parentName:"ul"},"Renovaci\xf3n y sustituci\xf3n de veh\xedculos"),(0,n.kt)("li",{parentName:"ul"},"Detallista"),(0,n.kt)("li",{parentName:"ul"},"Servicio parcial de construcci\xf3n"),(0,n.kt)("li",{parentName:"ul"},"SPEI Tercero"),(0,n.kt)("li",{parentName:"ul"},"Por cuenta de terceros"),(0,n.kt)("li",{parentName:"ul"},"Turista pasajero extranjero"),(0,n.kt)("li",{parentName:"ul"},"Vales de despensa"),(0,n.kt)("li",{parentName:"ul"},"Veh\xedculo usado"),(0,n.kt)("li",{parentName:"ul"},"Venta de veh\xedculos"),(0,n.kt)("li",{parentName:"ul"},"Ingresos en hidrocarburos"),(0,n.kt)("li",{parentName:"ul"},"Registro Fiscal"),(0,n.kt)("li",{parentName:"ul"},"N\xf3mina"),(0,n.kt)("li",{parentName:"ul"},"Pagos"),(0,n.kt)("li",{parentName:"ul"},"Carta Porte"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Comprobante de Retenci\xf3n"),". (Incluyendo el complemento de Plataformas Tecnol\xf3gicas)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cancelaciones"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Multi RFC"),". Registra m\xfaltiples organizaciones bajo una misma cuenta y emite facturas usando distintos RFC.")))}u.isMDXComponent=!0},6749:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/facturapi-integration-diagram-cec47a21b3036a1a4ba95da591f645a0.jpeg"}}]);