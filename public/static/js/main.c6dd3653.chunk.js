(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{35:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c,i,r=t(6),a=t.n(r),s=t(27),j=t.n(s),l=(t(35),t(54)),o=t(56),d=t(53),b=t(57),u=t(23),O=t(55),h=Object(O.a)(c||(c=Object(u.a)(["\n  {\n    movies {\n      title\n      genre\n      description\n      id\n    }\n  }\n"]))),x=Object(O.a)(i||(i=Object(u.a)(["\n  {\n    genres {\n      genre\n      id\n    }\n  }\n"]))),g=t(2),v=function(){var e=Object(b.a)(h),n=e.loading,t=e.error,c=e.data;return n?Object(g.jsx)("p",{children:"Loading...."}):t?Object(g.jsx)("p",{children:"Something Went Wrong"}):c.movies.map((function(e){return Object(g.jsx)("li",{children:e.title},e.id)}))},f=t(19),p=function(e,n){return e?Object(g.jsx)("option",{disabled:!0,children:"Loading genres"}):n.genres.map((function(e){return Object(g.jsx)("option",{value:e.id,children:e.genre},e.id)}))},m=function(){var e=Object(r.useState)(""),n=Object(f.a)(e,2),t=n[0],c=n[1],i=Object(r.useState)(""),a=Object(f.a)(i,2),s=a[0],j=a[1],l=Object(r.useState)(""),o=Object(f.a)(l,2),d=o[0],u=o[1],O=Object(b.a)(x),h=O.loading,v=O.data;return Object(g.jsxs)("form",{id:"add-title",onSubmit:function(e){e.preventDefault(),console.log(t,s,d)},children:[Object(g.jsxs)("div",{className:"field",children:[Object(g.jsx)("label",{children:"Movie Name:"}),Object(g.jsx)("input",{type:"text",value:t,onChange:function(e){return c(e.target.value)}})]}),Object(g.jsxs)("div",{className:"field",children:[Object(g.jsx)("label",{children:"Description"}),Object(g.jsx)("input",{type:"text",value:d,onChange:function(e){return u(e.target.value)}})]}),Object(g.jsxs)("div",{className:"field",children:[Object(g.jsx)("label",{children:"Genre:"}),Object(g.jsxs)("select",{value:s,onChange:function(e){return j(e.target.value)},children:[Object(g.jsx)("option",{children:"Select Genre"}),p(h,v)]})]}),Object(g.jsx)("button",{children:"+"})]})},S=new l.a({uri:"/graphql",cache:new o.a});var C=function(){return Object(g.jsx)(d.a,{client:S,children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)("h1",{id:"headingText",children:"Abhishek Movie List \ud83c\udfa5"}),Object(g.jsxs)("div",{className:"movie-container",children:[Object(g.jsx)(v,{}),Object(g.jsx)(m,{})]})]})})},N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,59)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),c(e),i(e),r(e),a(e)}))};j.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(C,{})}),document.getElementById("root")),N()}},[[39,1,2]]]);
//# sourceMappingURL=main.c6dd3653.chunk.js.map