(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"0WnX":function(e,t,a){e.exports={cardContainer:"blog-list-template-module--cardContainer--3IZ1s",evocImg:"blog-list-template-module--evoc-img--KXvOW",cards:"blog-list-template-module--cards--14gvX",more:"blog-list-template-module--more--3YcPX",fadeIn:"blog-list-template-module--fadeIn--3EmeB",overlay:"blog-list-template-module--overlay--38cqi",icons:"blog-list-template-module--icons--3I1vV",icon:"blog-list-template-module--icon--2SXqQ",figText:"blog-list-template-module--fig-text--1pcHv",zoom:"blog-list-template-module--zoom--1O-lB",titleAdd:"blog-list-template-module--title-add--1HOgk",overlaya:"blog-list-template-module--overlaya--3uJOJ",pagination:"blog-list-template-module--pagination--3Kbgu",btn:"blog-list-template-module--btn--smISf",btnMove:"blog-list-template-module--btnMove--3XN_8",btnMove2:"blog-list-template-module--btnMove2--3X1gY",fadeInUp:"blog-list-template-module--fadeInUp--1GZJe",fadeOut:"blog-list-template-module--fadeOut--1PPPX"}},"tJ/O":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var l=a("dI71"),n=a("q1tI"),o=a.n(n),r=a("5Epl"),m=a("Bl7J"),s=a("hIod"),i=a("kOA+"),c=a.n(i),d=a("0WnX"),p=a.n(d),u=a("X13+"),g=a("qtta"),b=function(e){function t(){return e.apply(this,arguments)||this}return Object(l.a)(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges,t=this.props.pageContext,a=t.currentPage,l=1===a,n=a===t.numPages,i=a-1==1?"/posts/1":"/posts/"+(a-1),d="/posts/"+(a+1);return o.a.createElement(m.a,null,o.a.createElement(s.a,{title:"Archiv"}),o.a.createElement("div",{className:p.a.cardContainer},e.map((function(e){var t=e.node;return o.a.createElement("div",{className:p.a.cards,key:t.id},o.a.createElement("figure",{className:p.a.evocImg},t.frontmatter.screenshot&&o.a.createElement(r.a,{src:t.frontmatter.screenshot.relativePath,className:p.a.zoom}),o.a.createElement("figcaption",null,o.a.createElement("div",{className:p.a.overlay+" "+p.a.icons},o.a.createElement("a",{className:p.a.icon,href:t.frontmatter.screenshot.childImageSharp.original.src,target:"_blank",rel:"noreferrer"},o.a.createElement(u.a,null)),o.a.createElement(c.a,{fade:!0,className:p.a.icon,to:"/blog/"+t.fields.slug},o.a.createElement(g.a,null))),o.a.createElement("div",{className:p.a.figText},o.a.createElement("h3",null,t.frontmatter.title),o.a.createElement("p",null,t.frontmatter.progress)))))}))),o.a.createElement("div",{className:p.a.pagination,key:"pagination"},!l&&o.a.createElement(c.a,{fade:!0,className:p.a.btn+" "+p.a.btnMove+" "+p.a.btnMove2,to:i,rel:"prev"},o.a.createElement("span",null,"Neuer"),o.a.createElement("span",null,"←")),!n&&o.a.createElement(c.a,{fade:!0,className:p.a.btn+" "+p.a.btnMove+" "+p.a.btnMove2,to:d,rel:"next"},o.a.createElement("span",null,"Älter"),o.a.createElement("span",null,"→"))))},t}(o.a.Component)}}]);
//# sourceMappingURL=component---src-templates-blog-list-template-js-a484f1b69ab63dde4bfe.js.map