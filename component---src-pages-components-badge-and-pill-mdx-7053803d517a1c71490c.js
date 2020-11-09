(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{G2ow:function(e,n,a){"use strict";a.r(n),a.d(n,"_frontmatter",(function(){return c})),a.d(n,"default",(function(){return u}));var t=a("zLVn"),r=(a("mXGw"),a("7ljp")),l=a("uVCN"),o=a("Ob+p"),c={},i={_frontmatter:c},s=l.a;function u(e){var n=e.components,a=Object(t.a)(e,["components"]);return Object(r.b)(s,Object.assign({},i,a,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Introduction"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"Badge")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Pill")," components are labels with a background color."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Badge"),": Used for state and text. Slightly rounded corners."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Pill"),": Used only for numbers. Circular.")),Object(r.b)("h1",null,"Badge"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"Badge")," component should only be used for state and general text labels.\nNot for numbers."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<Badge color="green">Success</Badge>\n')),Object(r.b)("h2",null,"Color options"),Object(r.b)("h3",null,"Solid badges"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"collapse",collapse:!0}),'<Pane>\n  <Badge color="neutral" isSolid marginRight={8}>neutral</Badge>\n  <Badge color="green" isSolid marginRight={8}>green</Badge>\n  <Badge color="blue" isSolid marginRight={8}>blue</Badge>\n  <Badge color="red" isSolid marginRight={8}>red</Badge>\n  <Badge color="orange" isSolid marginRight={8}>orange</Badge>\n  <Badge color="purple" isSolid marginRight={8}>purple</Badge>\n  <Badge color="yellow" isSolid marginRight={8}>yellow</Badge>\n  <Badge color="teal" isSolid marginRight={8}>teal</Badge>\n</Pane>\n')),Object(r.b)("h3",null,"Subtle badges"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"collapse",collapse:!0}),'<Pane>\n  <Badge color="neutral" marginRight={8}>neutral</Badge>\n  <Badge color="green" marginRight={8}>green</Badge>\n  <Badge color="blue" marginRight={8}>blue</Badge>\n  <Badge color="red" marginRight={8}>red</Badge>\n  <Badge color="orange" marginRight={8}>orange</Badge>\n  <Badge color="purple" marginRight={8}>purple</Badge>\n  <Badge color="yellow" marginRight={8}>yellow</Badge>\n  <Badge color="teal" marginRight={8}>teal</Badge>\n</Pane>\n')),Object(r.b)("h2",null,"When to use what badge"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"collapse",collapse:!0}),'<Pane display="flex">\n  <Pane flexBasis={120}>\n    <Badge color="green">Success</Badge>\n  </Pane>\n  <Pane flexBasis={120}>\n    <Badge color="green" isSolid>Success</Badge>\n  </Pane>\n  <Pane>\n    <Strong>Operational, available, done, approved, added</Strong>\n  </Pane>\n</Pane>\n')),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"collapse",collapse:!0}),'<Pane display="flex">\n  <Pane flexBasis={120}>\n    <Badge color="red">Removed</Badge>\n  </Pane>\n  <Pane flexBasis={120}>\n    <Badge color="red" isSolid>Removed</Badge>\n  </Pane>\n  <Pane>\n    <Strong>Errors, declined, failed, removed, critical</Strong>\n  </Pane>\n</Pane>\n')),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"collapse",collapse:!0}),'<Pane display="flex">\n  <Pane flexBasis={120}>\n    <Badge color="blue">In progress</Badge>\n  </Pane>\n  <Pane flexBasis={120}>\n    <Badge color="blue" isSolid>In progress</Badge>\n  </Pane>\n  <Pane>\n    <Strong>In progress, open, modified</Strong>\n  </Pane>\n</Pane>\n')),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"collapse",collapse:!0}),'<Pane display="flex">\n  <Pane flexBasis={120}>\n    <Badge color="purple">Trial</Badge>\n  </Pane>\n  <Pane flexBasis={120}>\n    <Badge color="purple" isSolid>Trial</Badge>\n  </Pane>\n  <Pane>\n    <Strong>Trial, new, information, help</Strong>\n  </Pane>\n</Pane>\n')),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"collapse",collapse:!0}),'<Pane display="flex">\n  <Pane flexBasis={120}>\n    <Badge color="yellow">Moved</Badge>\n  </Pane>\n  <Pane flexBasis={120}>\n    <Badge color="yellow" isSolid>Moved</Badge>\n  </Pane>\n  <Pane>\n    <Strong>Busy, blocked, missing, warning</Strong>\n  </Pane>\n</Pane>\n')),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"collapse",collapse:!0}),'<Pane display="flex">\n  <Pane flexBasis={120}>\n    <Badge color="neutral">Beta</Badge>\n  </Pane>\n  <Pane flexBasis={120}>\n    <Badge color="neutral" isSolid>Beta</Badge>\n  </Pane>\n  <Pane>\n    <Strong>Betag</Strong>\n  </Pane>\n</Pane>\n')),Object(r.b)(o.a,{of:"Badge",mdxType:"PropsTable"}),Object(r.b)("h1",null,"Pill"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"Pill")," component should only be used for numbers. "),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<Pane>\n  <Pill display="inline-flex" margin={8}>0</Pill>\n  <Pill display="inline-flex" margin={8} color="red" isSolid>24</Pill>\n</Pane>\n')),Object(r.b)(o.a,{of:"Pill",mdxType:"PropsTable"}))}u.isMDXComponent=!0},"Ob+p":function(e,n,a){"use strict";a.d(n,"a",(function(){return u}));var t=a("dI71"),r=a("mXGw"),l=a.n(r),o=a("Wbzz"),c=function(e){function n(){return e.apply(this,arguments)||this}return Object(t.a)(n,e),n.prototype.render=function(){var e=this.props.children;return l.a.createElement("div",{className:"PropTypeWrapper"},e)},n}(r.PureComponent),i=function(e){function n(){return e.apply(this,arguments)||this}return Object(t.a)(n,e),n.prototype.render=function(){var e=this.props.children;return l.a.createElement("div",{className:"PropTypeDescription"},e)},n}(r.PureComponent),s=function(e){function n(){return e.apply(this,arguments)||this}return Object(t.a)(n,e),n.prototype.render=function(){var e=this.props,n=e.defaultValue,a=e.name,t=e.required,r=e.type,o=e.isArrayOf;return l.a.createElement("div",{className:"PropTypeHeading"},l.a.createElement("code",null,l.a.createElement("span",{className:"PropTypeHeading-name"},a),l.a.createElement("span",{className:"PropTypeHeading-propType"},function e(n){var a=n.name,t=n.value;switch(a){case"enum":return t.map((function(e){return e.value})).join(" | ");case"union":return t.map((function(n){return e(n)})).join(" | ");case"arrayOf":return"Array<"+e(t)+">";case"shape":return"object"==typeof t?"{ "+Object.keys(t).map((function(n){return n+(t[n].required?"":"?")+": "+e(t[n])})).join(", ")+" }":t;default:return a}}(r)),o&&l.a.createElement("span",{className:"PropTypeHeading-arrayOf"},o)),n?l.a.createElement("code",{className:"PropTypeHeading-defaultValue"}," ","= ",n.value):null,t?l.a.createElement("span",{className:"PropTypeHeading-required"},"required"):null)},n}(r.PureComponent),u=function(e){function n(){for(var n,a=arguments.length,t=new Array(a),r=0;r<a;r++)t[r]=arguments[r];return(n=e.call.apply(e,[this].concat(t))||this).isArrayOf=function(e){if(e.type&&"arrayOf"===e.type.name&&"object"==typeof e.type.value&&"string"==typeof e.type.value.raw)return e.type.value.raw},n.getDocsForComponent=function(e){var a=e.allComponentMetadata.edges.find((function(e){return e.node.displayName===n.props.of}));return a?a.node:null},n}return Object(t.a)(n,e),n.prototype.render=function(){var e=this;return l.a.createElement(o.b,{query:"3894714669",render:function(n){var a=e.getDocsForComponent(n);return a?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"Content"},l.a.createElement("h2",{className:"h2"},l.a.createElement("code",{className:"code"},e.props.rename||a.displayName)," ","Props"),a&&a.composes&&a.composes.length>0&&l.a.createElement("div",{className:"PropTypesTable-composes"},l.a.createElement("p",null,l.a.createElement("strong",null,"This component composes "),a.composes.map((function(e){return l.a.createElement("code",{key:e},e.slice(e.indexOf("/")+1))}))))),a.props.map((function(n){var a=e.isArrayOf(n);return l.a.createElement(c,{key:n.name},l.a.createElement(s,{name:n.name,required:n.required,defaultValue:n.defaultValue,type:n.type||{},isArrayOf:a}),n.docblock?l.a.createElement(i,null,n.docblock):null)}))):l.a.createElement("div",null,l.a.createElement("p",null,"The properties table for this component can’t be rendered at the moment, due to a bug."))}})},n}(r.PureComponent)},uVCN:function(e,n,a){"use strict";a.d(n,"a",(function(){return N}));var t=a("dI71"),r=a("rePB"),l=a("KQm4"),o=a("mXGw"),c=a.n(o),i=a("qhky"),s=a("Wbzz"),u=a("YwZP"),p=a("ruUZ"),d=a("Onqc"),m=a("vMZD"),g=a("552S"),b=a("fUAp"),f=a("hPyG"),O=a("zngv"),j=a("7oih"),h=a("Whaq"),P=a("nD8F");function y(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function B(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?y(Object(a),!0).forEach((function(n){Object(r.a)(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}var v=[].concat(Object(l.a)(b.a.foundation.items.map((function(e){return B(B({},e),{},{related:[].concat(Object(l.a)(e.related||[]),Object(l.a)(b.a.foundation.items.map((function(e){return e.id})).filter((function(n){return n!==e.id}))))})}))),Object(l.a)(b.a.components.items.reduce((function(e,n){return[].concat(Object(l.a)(e),Object(l.a)(n.items.map((function(e){return B(B({},e),{},{related:[].concat(Object(l.a)(e.related||[]),Object(l.a)(n.items.map((function(e){return e.id})).filter((function(n){return n!==e.id}))))})}))))}),[]))),E=function(e){function n(){for(var n,a=arguments.length,t=new Array(a),r=0;r<a;r++)t[r]=arguments[r];return(n=e.call.apply(e,[this].concat(t))||this).getMetaInfo=function(){var e=n.props.location.pathname.split("/")[2];return v.find((function(n){return n.id===e}))},n.getRelatedItems=function(e){return(e.related||[]).map((function(e){return v.find((function(n){return n.id===e}))}))},n}Object(t.a)(n,e);var a=n.prototype;return a.componentDidCatch=function(e,n){console.error(e,n)},a.render=function(){var e=this.getMetaInfo();if(!e)return null;var n=this.getRelatedItems(e);return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,null,c.a.createElement("title",null,e.name," · MolecularUI"),c.a.createElement("meta",{property:"og:title",content:e.name+" · MolecularUI"}),c.a.createElement("meta",{property:"twitter:title",content:e.name+" · MolecularUI"})),c.a.createElement("div",null,c.a.createElement(O.a,null),c.a.createElement("main",null,c.a.createElement("article",{className:"MDXPage"},c.a.createElement("header",{className:"MDXPage-header"},c.a.createElement("div",{className:"bg-tint1"},c.a.createElement("div",{className:"MDXPage-headerContent Container Container--narrow"},c.a.createElement("div",{className:"MDXPage-headerContentLeft"},c.a.createElement(p.a,{content:"Back to Overview"},c.a.createElement(d.a,{autoFocus:!0,onClick:function(){Object(u.navigate)("/components")},marginLeft:-54,marginRight:16,display:"inline-flex",icon:m.a,height:40})),c.a.createElement("h1",null,e.name)),c.a.createElement(g.a,{is:"a",height:40,href:e.github,target:"_blank"},"View on GitHub")))),c.a.createElement("div",{className:"Container Container--narrow",style:{marginBottom:120}},c.a.createElement(f.a,null,this.props.children))),n.length>0&&c.a.createElement("div",{className:"Overview-group Container Container--narrow",style:{marginBottom:120}},c.a.createElement("h3",{className:"Overview-groupTitle"},"Related"),c.a.createElement("div",{className:"Overview-groupItems"},n.map((function(e){return c.a.createElement(h.a,{key:e.name,id:e.id,image:e.image},e.name)})))),c.a.createElement("div",{className:"Container Container--narrow",style:{marginBottom:120}},c.a.createElement(g.a,{is:s.a,to:"/components",display:"inline-flex",iconBefore:m.a,height:40},"Back to Overview")))),c.a.createElement(P.a,null))},n}(c.a.Component),N=function(e){function n(){return e.apply(this,arguments)||this}return Object(t.a)(n,e),n.prototype.render=function(){var e=this;return c.a.createElement(j.a,null,c.a.createElement(u.Location,null,(function(n){var a=n.location;return c.a.createElement(E,Object.assign({location:a},e.props))})))},n}(c.a.Component)}}]);
//# sourceMappingURL=component---src-pages-components-badge-and-pill-mdx-7053803d517a1c71490c.js.map