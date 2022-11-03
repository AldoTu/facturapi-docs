"use strict";(self.webpackChunkfacturapi_docs=self.webpackChunkfacturapi_docs||[]).push([[2182],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},l),{},{components:t})):r.createElement(f,i({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(7294),a=t(4334),o="tabItem_Ymn6";function i(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:t},n)}},5488:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(3117),a=t(7294),o=t(4334),i=t(2389),u=t(7392),c=t(7094),s=t(2466),l="tabList__CuJ",d="tabItem_LNqP";function p(e){var n,t,i=e.lazy,p=e.block,m=e.defaultValue,f=e.values,v=e.groupId,b=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,u.l)(y,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(n=null!=m?m:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:g[0].props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var E=(0,c.U)(),O=E.tabGroupChoices,N=E.setTabGroupChoices,w=(0,a.useState)(k),T=w[0],x=w[1],j=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var D=O[v];null!=D&&D!==T&&y.some((function(e){return e.value===D}))&&x(D)}var P=function(e){var n=e.currentTarget,t=j.indexOf(n),r=y[t].value;r!==T&&(C(n),x(r),null!=v&&N(v,String(r)))},I=function(e){var n,t=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":var r,a=j.indexOf(e.currentTarget)+1;t=null!=(r=j[a])?r:j[0];break;case"ArrowLeft":var o,i=j.indexOf(e.currentTarget)-1;t=null!=(o=j[i])?o:j[j.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",l)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},b)},y.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return j.push(e)},onKeyDown:I,onClick:P},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),i?(0,a.cloneElement)(g.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function m(e){var n=(0,i.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}},8328:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return d}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),i=(t(5488),t(5162),["components"]),u={sidebar_position:3,title:"Egreso"},c="Comprobante de Egreso",s={unversionedId:"guides/invoices/egreso",id:"guides/invoices/egreso",title:"Egreso",description:"El Comprobante de egreso, conocido anteriormente como nota de cr\xe9dito, se utiliza para",source:"@site/docs/guides/invoices/egreso.mdx",sourceDirName:"guides/invoices",slug:"/guides/invoices/egreso",permalink:"/docs/guides/invoices/egreso",draft:!1,editUrl:"https://github.com/facturapi/facturapi-docs/edit/main/website/docs/guides/invoices/egreso.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Egreso"},sidebar:"tutorialSidebar",previous:{title:"Pago",permalink:"/docs/guides/invoices/pago"},next:{title:"N\xf3mina",permalink:"/docs/guides/invoices/nomina"}},l={},d=[{value:"Ejemplos",id:"ejemplos",level:2},{value:"Descuento por una venta ya facturada",id:"descuento-por-una-venta-ya-facturada",level:3},{value:"Anulaci\xf3n de un CFDI de ingreso",id:"anulaci\xf3n-de-un-cfdi-de-ingreso",level:3},{value:"Bonificaci\xf3n a una venta futura",id:"bonificaci\xf3n-a-una-venta-futura",level:3}],p={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"comprobante-de-egreso"},"Comprobante de Egreso"),(0,o.kt)("p",null,"El ",(0,o.kt)("strong",{parentName:"p"},"Comprobante de egreso"),", conocido anteriormente como ",(0,o.kt)("em",{parentName:"p"},"nota de cr\xe9dito"),", se utiliza para\namparar salidas de dinero como devoluciones, descuentos y bonificaciones.\nLa funci\xf3n principal de este tipo de comprobantes es la deductibilidad ya que se utilizan para corregir o restar montos de comprobantes de ingresos emitidos con anterioridad."),(0,o.kt)("p",null,'La clave de este tipo de CFDI es comprobante tipo "E".'),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"\xbfUn comprobante de egreso debe relacionarse?")),(0,o.kt)("p",{parentName:"admonition"},"Los CFDI de egreso siempre deben relacionarse con uno o varios comprobantes de ingreso utilizando la clave de relaci\xf3n correspondiente."),(0,o.kt)("p",{parentName:"admonition"},"Es importante mencionar que un comprobante de egreso no sirve para cancelar un comprobante de ingreso.")),(0,o.kt)("h2",{id:"ejemplos"},"Ejemplos"),(0,o.kt)("p",null,"A continuaci\xf3n se listan algunos casos de uso comunes."),(0,o.kt)("p",null,"Para conocer a fondo todas las opciones disponibles al crear una factura, descripciiones\ndetalladas de cada campo y los cat\xe1logos m\xe1s utilizados consulta la\n",(0,o.kt)("a",{parentName:"p",href:"/api/#operation/createInvoice"},"referencia del m\xe9todo Crear Factura"),"."),(0,o.kt)("h3",{id:"descuento-por-una-venta-ya-facturada"},"Descuento por una venta ya facturada"),(0,o.kt)("p",null,"En este ejemplo, se recibi\xf3 un pago de $3,600.00 pesos por un producto con el 10% descuento que tiene un valor de 4,000 pesos, los $400.00 pesos descontados se amparan emitiendo un CFDI de egreso."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("em",{parentName:"mdxAdmonitionTitle"},"Secci\xf3n en construcci\xf3n"))),(0,o.kt)("h3",{id:"anulaci\xf3n-de-un-cfdi-de-ingreso"},"Anulaci\xf3n de un CFDI de ingreso"),(0,o.kt)("p",null,"Para este escenario, se emite un comprobante de egreso por $5000.00 pesos para anular el monto total de un CFDI de ingreso previo con el mismo monto."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("em",{parentName:"mdxAdmonitionTitle"},"Secci\xf3n en construcci\xf3n"))),(0,o.kt)("h3",{id:"bonificaci\xf3n-a-una-venta-futura"},"Bonificaci\xf3n a una venta futura"),(0,o.kt)("p",null,"Es posible ofrecer bonificaciones a ventas por realizarse de forma anticipada, en este ejemplo se emite un CFDI de egreso por $400.00 pesos para amparar un bono que ser\xe1 aplicado a una venta por 2,000.00 pesos."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("em",{parentName:"mdxAdmonitionTitle"},"Secci\xf3n en construcci\xf3n"))))}m.isMDXComponent=!0}}]);