(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.19579303.svg"},function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),c=a.n(r),o=(a(11),a(2)),i=l.a.createContext(),m=function(e){var t=e.children,a=Object(n.useState)(!1),r=Object(o.a)(a,2),c=r[0],m=r[1],u=Object(n.useState)(!1),s=Object(o.a)(u,2),d=s[0],E=s[1];return l.a.createElement(i.Provider,{value:{isMODALOpen:d,isSiderbarOpen:c,openModal:function(){E(!0)},openSiderBar:function(){m(!0)},closeModal:function(){E(!1)},closeSiderBar:function(){m(!1)}}},t)},u=function(){return Object(n.useContext)(i)},s=a(1),d=function(){var e=u(),t=e.isMODALOpen,a=e.closeModal;return l.a.createElement("div",{className:" ".concat(t?"show-modal modal-overlay":"modal-overlay"," ")},l.a.createElement("div",{className:"modal-container"},l.a.createElement("h3",null,"modal content"),l.a.createElement("button",{className:"close-modal-btn",onClick:a},l.a.createElement(s.i,null))))},E=a(5),w=a.n(E),p=[{id:1,url:"/",text:"home",icon:l.a.createElement(s.f,null)},{id:2,url:"/team",text:"team",icon:l.a.createElement(s.k,null)},{id:3,url:"/projects",text:"projects",icon:l.a.createElement(s.e,null)},{id:4,url:"/calendar",text:"calendar",icon:l.a.createElement(s.c,null)},{id:5,url:"/documents",text:"documents",icon:l.a.createElement(s.l,null)}],b=[{id:1,url:"https://www.twitter.com",icon:l.a.createElement(s.d,null)},{id:2,url:"https://www.twitter.com",icon:l.a.createElement(s.j,null)},{id:3,url:"https://www.twitter.com",icon:l.a.createElement(s.g,null)},{id:4,url:"https://www.twitter.com",icon:l.a.createElement(s.b,null)},{id:5,url:"https://www.twitter.com",icon:l.a.createElement(s.h,null)}],f=function(){var e=u(),t=e.isSiderbarOpen,a=e.closeSiderBar;return l.a.createElement("aside",{className:" sidebar ".concat(t&&"show-sidebar"," ")},l.a.createElement("div",{className:"sidebar-header"},l.a.createElement("img",{src:w.a,className:"logo",alt:"jewelme"}),l.a.createElement("button",{className:"close-btn",onClick:a}," ",l.a.createElement(s.i,null))),l.a.createElement("ul",{className:"links"},p.map((function(e){var t=e.id,a=e.url,n=e.text,r=e.icon;return l.a.createElement("li",{key:t},l.a.createElement("a",{href:a},r,n))}))),l.a.createElement("ul",{className:"social-icons"},b.map((function(e){var t=e.id,a=e.url,n=e.icon;return l.a.createElement("li",{key:t},l.a.createElement("a",{href:a}," ",n))}))))},h=function(){var e=u(),t=e.openSiderBar,a=e.openModal;return l.a.createElement("main",null,l.a.createElement("button",{className:"sidebar-toggle",onClick:t},l.a.createElement(s.a,null)),l.a.createElement("button",{onClick:a,className:"btn"}," Show Modal"))};var v=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,null),l.a.createElement(d,null),l.a.createElement(f,null))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m,null,l.a.createElement(v,null))),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.9d1f374b.chunk.js.map