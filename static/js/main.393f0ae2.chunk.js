(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,n,t){e.exports=t(29)},18:function(e,n,t){},20:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),o=t(6),r=t.n(o),l=(t(18),t(2)),s=t(7),i=t(3),u=t.n(i),h=t(8),m=t(4),d=(t(20),t(11)),g=t(10),f=t.n(g),w=(t(21),t(9)),j=t.n(w);var p=function(){var e=Object(a.useState)({english:{Loading:"..."},german:{Loading:"..."}}),n=Object(m.a)(e,2),t=n[0],o=n[1],r=Object(a.useState)("german"),i=Object(m.a)(r,2),g=i[0],w=i[1];return Object(a.useEffect)(function(){Object(h.a)(u.a.mark(function e(){var n,t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./locales/de_DE.json").then(function(e){return e.json()});case 2:return n=e.sent,e.next=5,fetch("./locales/en_US.json").then(function(e){return e.json()});case 5:t=e.sent,o({english:t,german:n});case 7:case"end":return e.stop()}},e)}))()},[]),c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",null,"Antreeb Translation Tool \u2728")),c.a.createElement("div",{className:"sides"},c.a.createElement("div",{className:"lang-toggle"},c.a.createElement("h4",null,"German "),c.a.createElement(j.a,{checked:"english"===g,onChange:function(e){return w("german"===g?"english":"german")}}),c.a.createElement("h4",null,"English "),c.a.createElement("button",{onClick:function(){var e=t[g],n=JSON.stringify(e),a=document.createElement("a");a.download=g+".json",a.href=URL.createObjectURL(new Blob([n],{type:"application/json"})),a.click()}},"Download")),c.a.createElement(d.a,{id:"left",colors:{string:"#DAA520"},locale:f.a,height:"500vh",placeholder:t[g],onChange:function(e){return o(Object(s.a)({},t,Object(l.a)({},g,e.jsObject)))},width:"100%"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.393f0ae2.chunk.js.map