(this.webpackJsonpdjsce_acm=this.webpackJsonpdjsce_acm||[]).push([[5],{582:function(e,t,c){},586:function(e,t,c){"use strict";c.r(t);var s=c(20),n=c(12),a=c(546),i=c(2),j=c(23),m=c(97),l=(c(582),c(29)),r=c.n(l),x=c(1);t.default=function(){var e=Object(i.useState)([]),t=Object(n.a)(e,2),c=t[0],l=t[1],d=Object(i.useState)([]),b=Object(n.a)(d,2),h=b[0],o=b[1],O=Object(j.g)().mainEvent,g=Object(j.e)();return Object(i.useEffect)((function(){window.scrollTo(0,0),r.a.get("https://djacmdev.pythonanywhere.com/api/events/").then((function(e){console.log(e.data),e.data.map((function(e){return e.title.toLowerCase()===O&&l(e),0}))})).catch((function(e){console.log(e)})),r.a.get("https://djacmdev.pythonanywhere.com/api/photos/").then((function(e){console.log(e.data),e.data.map((function(e){return e.event===c.id&&(console.log(e.pic),o((function(t){return[].concat(Object(s.a)(t),[e.pic])}))),0}))})).catch((function(e){console.log(e)}))}),[g,O,c.id]),Object(x.jsxs)("div",{children:[Object(x.jsx)(m.a,{}),Object(x.jsxs)("center",{children:[Object(x.jsxs)("div",{className:"mainEvent",children:[Object(x.jsx)("h1",{children:c.title}),Object(x.jsx)("h2",{children:"What is this event about?"}),Object(x.jsx)("p",{children:c.about}),Object(x.jsx)("div",{style:{borderTop:"2px grey solid",width:"45%"}})]}),Object(x.jsxs)(a.a,{container:!0,spacing:1,style:{padding:"30px 10%"},children:[Object(x.jsx)(a.a,{item:!0,sm:6,children:Object(x.jsx)("img",{className:"MainImg2",src:h[1],alt:"eventImg1"})}),Object(x.jsx)(a.a,{item:!0,sm:6,children:Object(x.jsxs)(a.a,{container:!0,spacing:1,children:[Object(x.jsx)(a.a,{item:!0,xs:12,children:Object(x.jsx)("img",{className:"MainImg",src:h[4],alt:"eventImg2"})}),Object(x.jsx)(a.a,{item:!0,xs:6,children:Object(x.jsx)("img",{className:"MainImg",src:h[2],alt:"eventImg3"})}),Object(x.jsxs)(a.a,{item:!0,xs:6,children:[Object(x.jsx)("img",{className:"MainImg",style:{opacity:".2"},src:h[3],alt:"eventImg4"}),Object(x.jsx)("div",{style:{transform:"translateY(-180px)",fontSize:"2rem",color:"white"},children:"View Gallery"})]})]})})]})]}),Object(x.jsxs)(a.a,{className:"questions",container:!0,spacing:3,children:[Object(x.jsx)(a.a,{item:!0,sm:6,xs:12,children:Object(x.jsx)("h2",{children:"When is it happening?"})}),Object(x.jsx)(a.a,{item:!0,sm:6,xs:12,children:Object(x.jsx)("p",{children:c.when})}),Object(x.jsx)(a.a,{item:!0,sm:6,xs:12,children:Object(x.jsx)("h2",{children:"What's in it for you?"})}),Object(x.jsx)(a.a,{item:!0,sm:6,xs:12,children:Object(x.jsx)("p",{children:c.you})})]}),Object(x.jsxs)(a.a,{container:!0,spacing:1,style:{padding:"5px 10%"},children:[Object(x.jsx)(a.a,{item:!0,sm:6,children:Object(x.jsxs)(a.a,{container:!0,spacing:1,children:[Object(x.jsx)(a.a,{item:!0,xs:12,children:Object(x.jsx)("img",{className:"MainImg",src:h[1],alt:"eventImg5"})}),Object(x.jsx)(a.a,{item:!0,xs:6,children:Object(x.jsx)("img",{className:"MainImg",src:h[2],alt:"eventImg6"})}),Object(x.jsx)(a.a,{item:!0,xs:6,children:Object(x.jsx)("img",{className:"MainImg",src:h[3],alt:"eventImg7"})})]})}),Object(x.jsx)(a.a,{item:!0,sm:6,children:Object(x.jsx)("img",{className:"MainImg2",src:h[4],alt:"eventImg8"})})]}),Object(x.jsxs)(a.a,{container:!0,justifyContent:"center",alignItems:"center",spacing:1,style:{padding:"0 10%"},children:[Object(x.jsx)(a.a,{item:!0,md:3,sm:6,xs:12,children:Object(x.jsx)("img",{className:"MainImg",src:h[4],alt:"eventImg9"})}),Object(x.jsx)(a.a,{item:!0,md:3,sm:6,xs:12,children:Object(x.jsx)("img",{className:"MainImg",src:h[2],alt:"eventImg10"})}),Object(x.jsx)(a.a,{item:!0,md:3,sm:6,xs:12,children:Object(x.jsx)("img",{className:"MainImg",src:h[3],alt:"eventImg11"})}),Object(x.jsx)(a.a,{item:!0,md:3,sm:6,xs:12,children:Object(x.jsx)("img",{className:"MainImg",src:h[5],alt:"eventImg12"})})]})]})}}}]);
//# sourceMappingURL=5.1e425cea.chunk.js.map