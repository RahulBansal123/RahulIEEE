(this.webpackJsonprahul=this.webpackJsonprahul||[]).push([[0],{20:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c.n(r),a=c(22),s=c.n(a),i=(c(29),c(7)),o=(c(30),c(12)),l=(c(20),c(31),c(1)),d=function(e){var t=e.item,c=e.onClick,r=e.addCart,n=e.cart,a=e.onRemove,s=r.map((function(e){return e.id===t.id}));return Object(l.jsxs)("div",{className:"Product",children:[Object(l.jsx)("div",{className:"Product__add",children:!n&&Object(l.jsx)("button",{onClick:s.includes(!0)?a:c,children:s.includes(!0)?"Remove From Cart":"Add To Cart"})}),Object(l.jsx)("div",{className:"Product__img",children:Object(l.jsx)("img",{alt:t.title,src:t.image})}),Object(l.jsx)("h2",{className:"Product__title",children:t.title.length>50?"".concat(t.title.slice(0,50),"..."):t.title}),Object(l.jsx)("h2",{className:"Product__brand",children:t.description.length>100?"".concat(t.description.slice(0,100),"..."):t.description}),Object(l.jsx)("div",{className:"Product__description",children:Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:["Price: ",t.price]}),Object(l.jsxs)("li",{children:["Category: ",t.category]})]})}),n&&Object(l.jsx)("div",{className:"Product__add",children:Object(l.jsx)("button",{onClick:a,children:"Remove From Cart"})})]})},u=function(e){var t=e.addCart,c=e.setaddCart;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"Search",children:["Total Price: ",null===t||void 0===t?void 0:t.reduce((function(e,t){return Math.round(100*(e+t.price))/100}),0)]}),Object(l.jsx)("button",{className:"Clear-cart",onClick:function(){c([])},children:"Clear Cart"}),Object(l.jsx)("div",{className:"Home",children:t.length>0?t.map((function(e){return Object(l.jsx)(d,{cart:!0,item:e,addCart:t,onClick:function(){return c((function(){return[].concat(Object(o.a)(t),[e])}))},onRemove:function(){return function(e){c((function(){return t.filter((function(t){return t.id!==e.id}))}))}(e)}},e.id)})):Object(l.jsx)("p",{children:"Add some items in the cart"})})]})},j=c(13),b=c.n(j),h=c(17),O=c(23),m=c.n(O),x=(c(35),function(e){var t=e.addCart,c=e.setaddCart,n=Object(r.useState)(!1),a=Object(i.a)(n,2),s=a[0],u=a[1],j=Object(r.useState)(null),O=Object(i.a)(j,2),x=O[0],f=O[1],v=Object(r.useState)(null),p=Object(i.a)(v,2),C=p[0],g=p[1],S=Object(r.useState)(null),N=Object(i.a)(S,2),k=N[0],_=N[1],y=Object(r.useState)(null),w=Object(i.a)(y,2),P=w[0],A=w[1],R=Object(r.useState)(null),F=Object(i.a)(R,2),I=F[0],J=F[1],H=Object(r.useCallback)(Object(h.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),f(null),e.prev=2,e.next=5,fetch("https://fakestoreapi.com/products");case 5:if((t=e.sent).ok){e.next=8;break}throw Error(t.statusText);case 8:return e.next=10,t.json();case 10:c=e.sent,J(c),u(!1),sessionStorage.setItem("products",JSON.stringify(c)),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),f(e.t0);case 19:case"end":return e.stop()}}),e,null,[[2,16]])}))),[]),L=Object(r.useCallback)(Object(h.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),f(null),e.prev=2,e.next=5,fetch("https://fakestoreapi.com/products/categories");case 5:if((t=e.sent).ok){e.next=8;break}throw Error(t.statusText);case 8:return e.next=10,t.json();case 10:c=e.sent,A(c),u(!1),sessionStorage.setItem("category",JSON.stringify(c)),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),f(e.t0);case 19:case"end":return e.stop()}}),e,null,[[2,16]])}))),[]);Object(r.useEffect)((function(){sessionStorage.getItem("products")?(J(JSON.parse(sessionStorage.getItem("products"))),A(JSON.parse(sessionStorage.getItem("category")))):(H(),L())}),[]);var E=[];if(P)for(var T in P)E.push({value:P[T],label:P[T]});var M=function(e){c((function(){return t.filter((function(t){return t.id!==e.id}))}))};return s?"Loading...":x?"Some error occured. Please try again later...":Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"Search",children:[Object(l.jsx)("div",{className:"Dropdown",children:Object(l.jsx)(m.a,{options:E,onChange:function(e){var t=null===I||void 0===I?void 0:I.filter((function(t){return t.category===e.value}));g(e),_(t)},placeholder:"Select a category",value:C})}),Object(l.jsx)("input",{placeholder:"Search Here...",onChange:function(e){var t=null===I||void 0===I?void 0:I.filter((function(t){return-1!==t.title.toLowerCase().indexOf(e.target.value.toLowerCase())}));_(t)}})]}),Object(l.jsx)("div",{className:"Home",children:I&&Object(l.jsx)(l.Fragment,{children:k?k.map((function(e){return Object(l.jsx)(d,{item:e,addCart:t,onClick:function(){return c((function(){return[].concat(Object(o.a)(t),[e])}))},onRemove:function(){return M(e)}},e.id)})):I.map((function(e){return Object(l.jsx)(d,{item:e,addCart:t,onClick:function(){return c((function(){return[].concat(Object(o.a)(t),[e])}))},onRemove:function(){return M(e)}},e.id)}))})})]})}),f=n.a.memo(x),v=c(11),p=c(2),C=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{className:"App__header",children:Object(l.jsx)("div",{className:"App__navbar",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)(v.b,{to:"/cart",activeStyle:{color:"#000"},children:"Cart"}),Object(l.jsx)(v.b,{to:"/home",activeStyle:{color:"#000"},children:"Home"})]})})}),Object(l.jsx)("hr",{}),Object(l.jsxs)(p.d,{children:[Object(l.jsx)(p.b,{exact:!0,path:"/cart",children:Object(l.jsx)(u,{addCart:c,setaddCart:n})}),Object(l.jsx)(p.b,{exact:!0,path:"/home",children:Object(l.jsx)(f,{addCart:c,setaddCart:n})}),Object(l.jsx)(p.a,{from:"/",to:"/home"})]}),Object(l.jsx)("div",{className:"Footer",children:"Made with love\u2764\ufe0f by RAHUL BANSAL!"})]})};s.a.render(Object(l.jsx)(v.a,{children:Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(C,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.0747f667.chunk.js.map