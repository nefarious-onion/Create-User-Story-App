(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{29:function(e,t,n){e.exports=n(66)},52:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(27),o=n.n(c),u=n(1),s=n.n(u),i=n(5),l=n(3),p=n(10),m=n(2),f=n(11),v=n.n(f),d="/api/epic/",E=function(){return v.a.get(d).then((function(e){return e.data}))},b=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={title:t},e.prev=1,e.next=4,v.a.post(d,n);case 4:a=e.sent,console.log("epic saved",a.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("epic not saved",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),h=function(e){return v.a.get(d+e).then((function(e){return e.data}))},y=function(){var e=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.delete(d+t);case 3:n=e.sent,console.log("epic deleted",n.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("epic not deleted",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(i.a)(s.a.mark((function e(t,n){var a,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=d+"".concat(n,"/userstory"),r={title:t},e.prev=2,e.next=5,v.a.post(a,r);case 5:c=e.sent,console.log("story saved",c.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log("story not saved",e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.a)(s.a.mark((function e(t,n){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=d+"".concat(t,"/userstory/").concat(n),e.prev=1,e.next=4,v.a.delete(a);case 4:r=e.sent,console.log("story deleted",r.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("story not deleted",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(i.a)(s.a.mark((function e(t,n){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=d+"".concat(t,"/userstory/").concat(n),e.prev=1,e.next=4,v.a.get(a);case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),x=function(e){var t=e.onEpicCreate,n=Object(a.useState)(""),c=Object(l.a)(n,2),o=c[0],u=c[1];return r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{className:"epic-form",onSubmit:function(e){e.preventDefault(),o.length>2&&(u(""),t(o))}},r.a.createElement("h4",null,"Create new Epic:"),r.a.createElement("div",{className:"form__input-field"},r.a.createElement("input",{type:"text",name:"name",value:o,onChange:function(e){return u(e.target.value)}})),r.a.createElement("input",{type:"submit",value:"Save Epic",className:"button submit-epic-button"})))},N=(n(52),function(e){var t=e.epics.map((function(e){return r.a.createElement(p.b,{to:"/epic/".concat(e._id),className:"list__item",key:e._id},e.title)}));return r.a.createElement("div",{className:"epiclist list-container"},t)}),g=function(e){var t=e.epics,n=e.onEpicCreate;return r.a.createElement("div",{className:"sidebar-container"},r.a.createElement(x,{onEpicCreate:n}),r.a.createElement(N,{epics:t}))},k=(n(58),function(e){var t=e.title;return r.a.createElement("div",{className:"topnav-container"},r.a.createElement(p.b,{to:"/",className:"link"},r.a.createElement("h2",{className:"logo"},"Create Userstories")),r.a.createElement("h2",{className:"topnav-title"},t),r.a.createElement(p.b,{to:"/",className:"link"},r.a.createElement("h2",null,"About app")))}),S=(n(59),function(e){var t=e.onEpicCreate;return r.a.createElement("div",{className:"landingview-container"},r.a.createElement("h1",null,"Welcome to Create User Stories App!"),r.a.createElement("p",null,"Start by creating a new epic or choose an existing one from the sidebar"),r.a.createElement(x,{onEpicCreate:t}))}),C=(n(60),function(e){var t=e.title,n=e.onStoryClick,a=e.id;return r.a.createElement("div",{className:"list__item",onClick:function(){console.log(a),n(a)}},r.a.createElement("p",null,t))}),_=(n(61),function(e){var t=e.stories,n=e.onStoryClick,a=t.map((function(e){return r.a.createElement(C,{id:e._id,onStoryClick:n,key:e._id,title:e.title})}));return r.a.createElement("div",{className:"list-container"},a)}),D=(n(62),function(e){var t=e.onStoryCreate,n=Object(a.useState)(""),c=Object(l.a)(n,2),o=c[0],u=c[1],s=Object(a.useState)(""),i=Object(l.a)(s,2),p=i[0],m=i[1],f=Object(a.useState)(""),v=Object(l.a)(f,2),d=v[0],E=v[1],b=Object(a.useRef)(null);return r.a.createElement("div",{className:"form-container"},r.a.createElement("form",{className:"userstory-form",onSubmit:function(e){e.preventDefault();var n="As a ".concat(o,", I want to ").concat(p,", so that ").concat(d);console.log(n),t(n),u(""),m(""),E(""),b.current.focus()}},r.a.createElement("div",{className:"form__input-field"},r.a.createElement("label",null,"As a"),r.a.createElement("input",{className:"user__input",type:"text",name:"storyUser",value:o,onChange:function(e){return u(e.target.value)},autoFocus:!0,ref:b,required:!0})),r.a.createElement("div",{className:"form__input-field"},r.a.createElement("label",null,"I want to"),r.a.createElement("input",{className:"user__input",type:"text",name:"storyWant",value:p,onChange:function(e){return m(e.target.value)},required:!0})),r.a.createElement("div",{className:"form__input-field"},r.a.createElement("label",null,"so that"),r.a.createElement("input",{className:"user__input",type:"text",name:"storyValue",value:d,onChange:function(e){return E(e.target.value)},required:!0})),r.a.createElement("input",{type:"submit",value:"Add userstory",className:"button submit-userstory-button"})))}),A=function(e){var t=e.story,n=e.onStoryDelete,a="";t&&(a=t.title);return r.a.createElement("div",{className:""},r.a.createElement("h2",null,"Edit userstory:"),r.a.createElement("p",null,a),r.a.createElement("button",{className:"button",onClick:function(){n()}},"Delete Userstory"))},I=(n(63),function(e){var t=e.onEpicLoad,n=e.onEpicDelete,c=Object(a.useState)(),o=Object(l.a)(c,2),u=o[0],p=o[1],f=Object(a.useState)([]),v=Object(l.a)(f,2),d=v[0],E=v[1],b=Object(a.useState)(""),y=Object(l.a)(b,2),x=y[0],N=y[1],g=Object(a.useState)(!1),k=Object(l.a)(g,2),S=(k[0],k[1]),C=Object(a.useState)(""),I=Object(l.a)(C,2),U=I[0],q=I[1],J=Object(a.useState)(""),L=Object(l.a)(J,2),W=L[0],B=L[1],F=Object(m.f)().epicId,R=function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(F);case 2:t=e.sent,p(t),E(t.stories),N(u.title);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("create new story",t),e.next=3,j(t,F);case 3:R();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S(!0),q(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(F,U);case 2:q(""),B(""),S(!1),R();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){h(F).then((function(e){p(e),E(e.stories),N(e.title),t(e),q("")}))}),[F]),Object(a.useEffect)((function(){w(F,U).then((function(e){B(e)}))}),[U]),r.a.createElement("div",{className:"epicview-container"},r.a.createElement("div",{className:"userstoryview-container"},r.a.createElement("button",{className:"button delete-button",onClick:function(e){window.confirm("Are you sure you want to delete this epic?")&&(n(F),p(""),N(""),E([]))}},"Delete epic ",x),r.a.createElement(D,{onStoryCreate:V}),r.a.createElement(_,{stories:d,onStoryClick:z})),r.a.createElement("div",{className:"editview-container"},W&&r.a.createElement(A,{story:W,onStoryDelete:G})))}),U=(n(64),function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(),u=Object(l.a)(o,2),f=u[0],v=u[1],d=function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("create new epic",t),e.next=3,b(t);case 3:d();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t);case 2:v(""),d();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){E().then((function(e){return c(e)}))}),[]),r.a.createElement(p.a,null,r.a.createElement("div",{className:"app-container"},r.a.createElement(k,{title:f}),r.a.createElement("div",{className:"main-content"},r.a.createElement(g,{className:"sidebar",epics:n,onEpicCreate:h}),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",exact:!0},r.a.createElement(S,{onEpicCreate:h})),r.a.createElement(m.a,{path:"/epic/:epicId"},r.a.createElement(I,{onEpicLoad:function(e){return v(e.title)},onEpicDelete:j}))))))});n(65);o.a.render(r.a.createElement(U,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.4f02e6fb.chunk.js.map