(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r,c=n(0),a=n.n(c),i=n(18),s=n.n(i),o=n(8),l=n(2),u=(n(25),n(1)),j=function(){return Object(u.jsx)("div",{className:"app-header",children:Object(u.jsx)("h1",{children:"Note List"})})},d=n(7),f=n.n(d),p=n(9),h=n(12),b=function(e){return new Date(e.updated).toLocaleDateString()},O=function(e){var t=e.body.split("\n")[0];return t.length>45?t.slice(0,45):t},v=function(e){var t=O(e),n=e.body.replaceAll("\n"," ");return(n=n.replaceAll(t,"")).length>45?n.slice(0,45)+"...":n},x=function(e){var t=e.note;return Object(u.jsx)(o.b,{to:"/note/".concat(t.id),children:Object(u.jsxs)("div",{className:"notes-list-item",children:[Object(u.jsx)("h3",{children:O(t)}),Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{children:b(t)}),v(t)]})]})})},m=["title","titleId"];function y(){return(y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function g(e,t){var n=e.title,a=e.titleId,i=w(e,m);return c.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":a},i),void 0===n?c.createElement("title",{id:a},"add"):n?c.createElement("title",{id:a},n):null,r||(r=c.createElement("path",{d:"M16.943 0.943h-1.885v14.115h-14.115v1.885h14.115v14.115h1.885v-14.115h14.115v-1.885h-14.115v-14.115z"})))}var E,N=c.forwardRef(g),k=(n.p,function(){return Object(u.jsx)(o.b,{to:"/note/new",className:"floating-button",children:Object(u.jsx)(N,{})})}),S=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){a()}),[]);var a=function(){var e=Object(p.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/notes/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"notes",children:[Object(u.jsxs)("div",{className:"notes-header",children:[Object(u.jsx)("h2",{className:"notes-title",children:"\u2636 Notes"}),Object(u.jsx)("p",{className:"notes-count",children:n.length})]}),Object(u.jsx)("div",{className:"notes-list",children:n.map((function(e,t){return Object(u.jsx)(x,{note:e},t)}))}),Object(u.jsx)(k,{})]})},P=n(16),C=["title","titleId"];function I(){return(I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function D(e,t){var n=e.title,r=e.titleId,a=T(e,C);return c.createElement("svg",I({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":r},a),void 0===n?c.createElement("title",{id:r},"chevron-left"):n?c.createElement("title",{id:r},n):null,E||(E=c.createElement("path",{d:"M11 16l13-13v-3l-16 16 16 16v-3l-13-13z"})))}var J=c.forwardRef(D),B=(n.p,function(e){var t=e.match,n=e.history,r=t.params.id,a=Object(c.useState)(null),i=Object(h.a)(a,2),s=i[0],o=i[1];Object(c.useEffect)((function(){l()}),[r]);var l=function(){var e=Object(p.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("new"!==r){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("/api/notes/".concat(r,"/"));case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,o(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/notes/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/notes/".concat(r,"/"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("/api/notes/".concat(r,"/"),{method:"DELETE",headers:{"Content-Type":"application/json"}}),n.push("/");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){"new"!==r&&""==s.body?b():"new"!==r?d():"new"===r&&null!==s.body&&j(),n.push("/")};return Object(u.jsxs)("div",{className:"note",children:[Object(u.jsxs)("div",{className:"note-header",children:[Object(u.jsx)("h3",{children:Object(u.jsx)(J,{onClick:O})}),"new"!==r?Object(u.jsx)("button",{onClick:b,children:"Delete"}):Object(u.jsx)("button",{onClick:O,children:"Done"})]}),Object(u.jsx)("textarea",{onChange:function(e){var t;t=e.target.value,o((function(e){return Object(P.a)(Object(P.a)({},e),{},{body:t})}))},value:null===s||void 0===s?void 0:s.body})]})});var L=function(){return Object(u.jsx)(o.a,{children:Object(u.jsx)("div",{className:"container dark",children:Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(j,{}),Object(u.jsx)(l.a,{path:"/",exact:!0,component:S}),Object(u.jsx)(l.a,{path:"/note/:id",component:B})]})})})};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(L,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.06aa0d07.chunk.js.map