(this.webpackJsonppilgrim=this.webpackJsonppilgrim||[]).push([[0],{76:function(e,t,s){},82:function(e,t,s){},83:function(e,t,s){"use strict";s.r(t);var r=s(31),a=s.n(r),o=s(13),c=s(0),i=s(2),n=s(17),l=s.n(n),d=s(32),m=s(33),u=s.n(m),p=s(20),j=s(34),x=s.n(j);s(74),s(75),s(76);function h(){var e=Object(i.f)();return Object(c.useCallback)((function(t){return e.push(t)}),[e])}var b=s(1),f={slidesToShow:4,slidesToScroll:1,arrows:!0,lazyLoad:"ondemand",responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]};var v=function(e){var t=h(),s=e.product,r=e.setSelectedProduct;return Object(b.jsx)(x.a,Object(p.a)(Object(p.a)({},f),{},{children:s.map((function(e){return Object(b.jsx)("img",{onClick:function(){return function(e){r(e),t("/pilgrim/product/".concat(e.id))}(e)},className:"object-contain max-h-96",src:e.cover_path,alt:e.title},e.id)}))}))};var g=function(e){var t=Object(c.useState)([]),s=Object(o.a)(t,2),r=s[0],a=s[1];return Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://my-json-server.typicode.com/filipeveronezi/fake-api/categories");case 2:t=e.sent,s=t.data,a(s);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()})),Object(b.jsx)("div",{children:r.slice(0).reverse().map((function(t,s){var r=0===s?"my-8 py-2 bg-pilgrim bg-opacity-20":"my-8 mx-1";return Object(b.jsxs)("div",{className:r,children:[Object(b.jsx)("p",{className:"text-2xl font-sans text-pilgrim font-bold m-2",children:t.title}),Object(b.jsx)(v,{setSelectedProduct:e.setSelectedProduct,product:t.products})]},t.id)}))})};var O=function(e){var t,s=e.selectedProduct,r=s.author,a=s.publisher,o=s.title,i=s.format_type,n=s.cover_path;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(b.jsx)("div",{className:"container mx-auto",children:Object(b.jsxs)("div",{className:"flex flex-col md:flex-row m-10",children:[Object(b.jsx)("div",{className:"flex-shrink",children:Object(b.jsxs)("figure",{className:"rounded-xl relative",children:[Object(b.jsx)("img",{className:"object-contain rounded-lg",src:n,alt:""}),(t=i,"ebook"===t?Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",name:"E-book",className:"absolute top-2 right-2 h-10 w-10 stroke-current stroke-2 text-pilgrim",fill:"none",viewBox:"0 0 24 24",children:Object(b.jsx)("path",{d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}):Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"absolute top-2 right-2 h-10 w-10 stroke-current stroke-2 text-pilgrim",fill:"none",children:Object(b.jsx)("path",{d:"M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"})})),Object(b.jsxs)("button",{onClick:function(){return alert("Item adicionado ao carrinho!")},title:"Adicionar ao carrinho",className:"flex flex-row items-center absolute -bottom-3 -right-3 bg-pilgrim p-1 text-white text-2xl md:text-3xl rounded-xl font-medium",children:[Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 mr-1 fill-current",viewBox:"0 0 24 24",children:Object(b.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})}),"R$ 59,99"]})]})}),Object(b.jsxs)("div",{className:"flex flex-col flex-1 justify-center pt-2 md:ml-5",children:[Object(b.jsx)("p",{className:"text-3xl font-semibold md:text-4xl my-1.5 text-pilgrim text-center md:text-left",children:o}),Object(b.jsx)("p",{className:"text-2xl md:text-4xl text-gray-500 text-center md:text-left",children:r}),Object(b.jsxs)("p",{className:"text-justify mt-5",children:[Object(b.jsx)("span",{className:"font-bold",children:"Descri\xe7\xe3o: "})," O que John Newton, Hudson Taylor, J. Gresham Machen, John Piper, Charles Spurgeon, Agostinho, D.L. Moody e Tim\xf3teo t\xeam em comum? Talvez voc\xea respondesse teologia, piedade ou impacto na sua gera\xe7\xe3o, mas a verdade \xe9 que todos tinham m\xe3es piedosas que intercediam por eles. O renomado escritor Tim Challies nos conta as hist\xf3rias dessas mulheres cujo amor pela B\xedblia moldou os seus primeiros e mais importantes mestres. Essas mulheres, por mais que fossem \xf3timas te\xf3logas por si s\xf3, muitas vezes foram ouvidas apenas por seus filhos. Incluindo relato de m\xe3es solteiras, rec\xe9m-convertidas ou mulheres casadas com um incr\xe9dulo, este livro \xe9 um verdadeiro guia para m\xe3es que querem criar filhos para a honra e gl\xf3ria de Deus na pr\xe1tica, aprendendo da melhor forma poss\xedvel: a obra da gra\xe7a de Deus na vida de crist\xe3os e suas m\xe3es ao longo dos s\xe9culos."]}),Object(b.jsxs)("p",{className:"text-justify mt-5",children:[Object(b.jsx)("span",{className:"font-bold",children:"Editora: "})," ",a]})]})]})})};var w=function(){var e=Object(c.useState)({id:0,title:"",cover_path:"",author:"",publisher:"",format_type:"audiobook"}),t=Object(o.a)(e,2),s=t[0],r=t[1];return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{path:"/pilgrim",render:function(){return Object(b.jsx)(g,{setSelectedProduct:r})},exact:!0}),Object(b.jsx)(i.a,{path:"/pilgrim/product/:id",render:function(){return Object(b.jsx)(O,{selectedProduct:s})}})]})})},N=s(12),k=(s(82),s.p+"static/media/logo.381ed32c.png");var y=function(){var e=Object(i.g)(),t=h();return Object(b.jsxs)("div",{className:"flex flex-row justify-between h-12 px-4 py-2 bg-pilgrim",children:[Object(b.jsx)("img",{src:k,alt:"logo",className:"h-10 w-auto"}),"/pilgrim"!==e.pathname&&Object(b.jsx)("button",{className:"text-white border-2 p-1 rounded-md self-center",onClick:function(){return t("/pilgrim")},children:"Voltar"})]})};a.a.render(Object(b.jsxs)(N.a,{children:[Object(b.jsx)(y,{}),Object(b.jsx)(w,{})]}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.f1d7fab7.chunk.js.map