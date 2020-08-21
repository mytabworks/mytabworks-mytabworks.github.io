(this["webpackJsonpbitter-code"]=this["webpackJsonpbitter-code"]||[]).push([[20],{552:function(e,a,n){"use strict";n.d(a,"a",(function(){return m}));var t=n(7),r=n(2),l=n(0),s=n.n(l),c=n(21),i=n(22),m=function(e){var a=e.settingsAllowed,n=e.localkey,l=e.allowConvex,m=e.allowEngrave,o=e.allowEngraveWithConcave,d=e.allowFloat,u=e.max,g=e.min,E=Object(c.b)(n),h=E.getLocal,v=E.setLocal,p=h();return u=Object(r.a)({distance:10,blur:20,intensity:100,radius:50,border:10},u),g=Object(r.a)({distance:1,blur:2,intensity:10,radius:0,border:1},g),s.a.createElement(s.a.Fragment,null,l&&s.a.createElement("li",null,s.a.createElement("div",{className:"px-3 py-2"},s.a.createElement("div",{className:"n-switch"},s.a.createElement("input",{id:"switch-convex",type:"checkbox",checked:p.convex,onChange:function(e){v((function(e){return Object(r.a)({},e,{convex:!e.convex,distance:2,blur:4})}))}}),s.a.createElement("label",{className:"n-switch-label",htmlFor:"switch-convex"},"convex")))),m&&s.a.createElement("li",null,s.a.createElement("div",{className:"px-3 py-2"},s.a.createElement("div",{className:"n-switch"},s.a.createElement("input",{id:"switch-engrave",type:"checkbox",checked:p.engrave,onChange:function(e){v((function(e){return Object(r.a)({},e,{engrave:!e.engrave})}))}}),s.a.createElement("label",{className:"n-switch-label",htmlFor:"switch-engrave"},"engrave")))),o&&s.a.createElement("li",null,s.a.createElement("div",{className:"px-3 py-2"},s.a.createElement("div",{className:"n-switch"},s.a.createElement("input",{id:"switch-engrave",type:"checkbox",checked:p.engrave,onChange:function(e){v((function(e){return Object(r.a)({},e,{concave:e.engrave,engrave:!e.engrave,border:2})}))}}),s.a.createElement("label",{className:"n-switch-label",htmlFor:"switch-engrave"},"engrave")))),d&&s.a.createElement("li",null,s.a.createElement("div",{className:"px-3 py-2"},s.a.createElement("div",{className:"n-switch"},s.a.createElement("input",{id:"switch-float",type:"checkbox",checked:p.float,onChange:function(e){v((function(e){return Object(r.a)({},e,{float:!e.float})}))}}),s.a.createElement("label",{className:"n-switch-label",htmlFor:"switch-float"},"float")))),a.map((function(e){return s.a.createElement("li",{key:e},s.a.createElement("div",{className:"px-3 py-2"},s.a.createElement("label",null,e),s.a.createElement(i.a,{variant:"dark",message:"".concat(p[e]),placement:"left"},s.a.createElement("input",{type:"range",value:p[e],min:g[e],max:u[e],className:"n-form-control",onChange:function(a){var n=parseInt(a.target.value);v((function(a){return"distance"===e?Object(r.a)({},a,{distance:n,blur:2*n}):Object(r.a)({},a,Object(t.a)({},e,n))}))}}))))})))}},778:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(13),s=n(552),c=n(9),i='<h6>defaults</h6>\n<div class="n-progress">\n    <div class="n-progress-bar" style="width: 100%" />\n</div>\n<h6>success</h6>\n<div class="n-progress">\n    <div class="n-progress-bar n-success" style="width: 60%" />\n</div>\n<h6>warning</h6>\n<div class="n-progress">\n    <div class="n-progress-bar n-warning" style="width: 30%" />\n</div>\n<h6>danger</h6>\n<div class="n-progress">\n    <div class="n-progress-bar n-danger" style="width: 90%" />\n</div>',m='<h6>default</h6>\n<div class="n-progress">\n    <div class="n-progress-bar" data-percentage="100%" style="width: 100%" />\n</div>\n<h6>success</h6>\n<div class="n-progress">\n    <div class="n-progress-bar n-success" data-percentage="60%" style="width: 60%" />\n</div>\n<h6>warning</h6>\n<div class="n-progress">\n    <div class="n-progress-bar n-warning" data-percentage="30%" style="width: 30%" />\n</div>\n<h6>danger</h6>\n<div class="n-progress">\n    <div class="n-progress-bar n-danger" data-percentage="90%" style="width: 90%" />\n</div>',o=function(){return r.a.createElement(l.l,{title:"Example",context:r.a.createElement(r.a.Fragment,null,"progress bar examples with variant of ",r.a.createElement("b",null,"success"),", ",r.a.createElement("b",null,"warning"),", and ",r.a.createElement("b",null,"danger"),".")},r.a.createElement(l.f,{code:i},r.a.createElement(l.c,{code:i})),r.a.createElement("h6",null,"default"),r.a.createElement("div",{className:"n-progress"},r.a.createElement("div",{className:"n-progress-bar",style:{width:"100%"}})),r.a.createElement("br",null),r.a.createElement("h6",null,"success"),r.a.createElement("div",{className:"n-progress"},r.a.createElement("div",{className:"n-progress-bar n-success",style:{width:"60%"}})),r.a.createElement("br",null),r.a.createElement("h6",null,"warning"),r.a.createElement("div",{className:"n-progress"},r.a.createElement("div",{className:"n-progress-bar n-warning",style:{width:"30%"}})),r.a.createElement("br",null),r.a.createElement("h6",null,"danger"),r.a.createElement("div",{className:"n-progress"},r.a.createElement("div",{className:"n-progress-bar n-danger",style:{width:"90%"}})))},d=function(){return r.a.createElement(l.l,{title:"Progress bar with percentage",context:r.a.createElement(r.a.Fragment,null,"you can also show the percentage by adding a attribute ",r.a.createElement("b",null,'data-percentage="60%"')," on ",r.a.createElement("b",null,".n-progress-bar")," class.")},r.a.createElement(l.f,{code:m},r.a.createElement(l.c,{code:m})),r.a.createElement("br",null),r.a.createElement("h6",null,"default"),r.a.createElement("div",{className:"n-progress"},r.a.createElement("div",{className:"n-progress-bar","data-percentage":"100%",style:{width:"100%"}})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h6",null,"success"),r.a.createElement("div",{className:"n-progress"},r.a.createElement("div",{className:"n-progress-bar n-success","data-percentage":"60%",style:{width:"60%"}})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h6",null,"warning"),r.a.createElement("div",{className:"n-progress"},r.a.createElement("div",{className:"n-progress-bar n-warning","data-percentage":"30%",style:{width:"30%"}})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h6",null,"danger"),r.a.createElement("div",{className:"n-progress"},r.a.createElement("div",{className:"n-progress-bar n-danger","data-percentage":"90%",style:{width:"90%"}})))},u=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,null),r.a.createElement(d,null))},g=function(){return r.a.createElement("ul",{className:"scroll-nav"},r.a.createElement("li",null,r.a.createElement("h6",{className:"px-3 py-2 mb-0"},"Progress Bar Style")),r.a.createElement(s.a,{localkey:c.b.progress,settingsAllowed:["distance","blur","intensity","border"],allowEngraveWithConcave:!0}))};a.default=function(){var e="it is a progression bar that use to see the progress.";return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.e,null,r.a.createElement(l.e.Meta,{title:"".concat("Progress Bar"," - Neumorphism Project | Mytabworks"),description:e,image:"/images/icons/icon-512x512.png"})),r.a.createElement(l.i,{title:"Progress Bar",context:e,main:r.a.createElement(u,null),side:r.a.createElement(g,null),style:{backgroundColor:"transparent"}}))}}}]);
//# sourceMappingURL=20.5a638ef6.chunk.js.map