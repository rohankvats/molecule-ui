(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"Ob+p":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("dI71"),o=n("mXGw"),r=n.n(o),i=n("Wbzz"),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.children;return r.a.createElement("div",{className:"PropTypeWrapper"},e)},t}(o.PureComponent),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.children;return r.a.createElement("div",{className:"PropTypeDescription"},e)},t}(o.PureComponent),p=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.defaultValue,n=e.name,a=e.required,o=e.type,i=e.isArrayOf;return r.a.createElement("div",{className:"PropTypeHeading"},r.a.createElement("code",null,r.a.createElement("span",{className:"PropTypeHeading-name"},n),r.a.createElement("span",{className:"PropTypeHeading-propType"},function e(t){var n=t.name,a=t.value;switch(n){case"enum":return a.map((function(e){return e.value})).join(" | ");case"union":return a.map((function(t){return e(t)})).join(" | ");case"arrayOf":return"Array<"+e(a)+">";case"shape":return"object"==typeof a?"{ "+Object.keys(a).map((function(t){return t+(a[t].required?"":"?")+": "+e(a[t])})).join(", ")+" }":a;default:return n}}(o)),i&&r.a.createElement("span",{className:"PropTypeHeading-arrayOf"},i)),t?r.a.createElement("code",{className:"PropTypeHeading-defaultValue"}," ","= ",t.value):null,a?r.a.createElement("span",{className:"PropTypeHeading-required"},"required"):null)},t}(o.PureComponent),s=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).isArrayOf=function(e){if(e.type&&"arrayOf"===e.type.name&&"object"==typeof e.type.value&&"string"==typeof e.type.value.raw)return e.type.value.raw},t.getDocsForComponent=function(e){var n=e.allComponentMetadata.edges.find((function(e){return e.node.displayName===t.props.of}));return n?n.node:null},t}return Object(a.a)(t,e),t.prototype.render=function(){var e=this;return r.a.createElement(i.b,{query:"3894714669",render:function(t){var n=e.getDocsForComponent(t);return n?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Content"},r.a.createElement("h2",{className:"h2"},r.a.createElement("code",{className:"code"},e.props.rename||n.displayName)," ","Props"),n&&n.composes&&n.composes.length>0&&r.a.createElement("div",{className:"PropTypesTable-composes"},r.a.createElement("p",null,r.a.createElement("strong",null,"This component composes "),n.composes.map((function(e){return r.a.createElement("code",{key:e},e.slice(e.indexOf("/")+1))}))))),n.props.map((function(t){var n=e.isArrayOf(t);return r.a.createElement(c,{key:t.name},r.a.createElement(p,{name:t.name,required:t.required,defaultValue:t.defaultValue,type:t.type||{},isArrayOf:n}),t.docblock?r.a.createElement(l,null,t.docblock):null)}))):r.a.createElement("div",null,r.a.createElement("p",null,"The properties table for this component can’t be rendered at the moment, due to a bug."))}})},t}(o.PureComponent)},TzUa:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n("zLVn"),o=(n("mXGw"),n("7ljp")),r=n("uVCN"),i=n("Ob+p"),c={},l={_frontmatter:c},p=r.a;function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(p,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"Introduction"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Tooltip")," component is used to describe icon buttons.\nIn some cases tooltips are used to show more content, this should\nbe used cautiously since it is ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://inclusive-components.design/tooltips-toggletips/"}),"hard to be completely accessible"),"."),Object(o.b)("h2",null,"Tooltip with IconButton"),Object(o.b)("p",null,"Each ",Object(o.b)("inlineCode",{parentName:"p"},"IconButton")," should always be wrapped in a ",Object(o.b)("inlineCode",{parentName:"p"},"Tooltip"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<Tooltip content="Edit title">\n  <IconButton icon={EditIcon} />\n</Tooltip>\n')),Object(o.b)("h2",null,"Tooltip to show some content"),Object(o.b)("p",null,"Use with caution, it’s ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://inclusive-components.design/tooltips-toggletips/"}),"hard to be completely accessible"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<Tooltip content="Learn more about a feature">\n  <InfoSignIcon />\n</Tooltip>\n')),Object(o.b)("h2",null,"Tooltip with card appearance"),Object(o.b)("p",null,"Use with caution, it’s ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://inclusive-components.design/tooltips-toggletips/"}),"hard to be completely accessible"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<Tooltip\n  content={\n    <Paragraph margin={40}>Card appearance</Paragraph>\n  }\n  appearance="card"\n>\n  <InfoSignIcon />\n</Tooltip>\n')),Object(o.b)("h2",null,"Positioning the Tooltip"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Tooltip")," can be positioned on the following positions using the ",Object(o.b)("inlineCode",{parentName:"p"},"position")," prop:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Position.TOP")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Position.TOP_LEFT")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Position.TOP_RIGHT")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Position.BOTTOM")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Position.BOTTOM_LEFT")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Position.BOTTOM_RIGHT")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Position.LEFT")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"Position.RIGHT"))),Object(o.b)("p",null,"For a ",Object(o.b)("inlineCode",{parentName:"p"},"Tooltip")," the only really useful sides are ",Object(o.b)("inlineCode",{parentName:"p"},"TOP"),", ",Object(o.b)("inlineCode",{parentName:"p"},"RIGHT"),", ",Object(o.b)("inlineCode",{parentName:"p"},"BOTTOM")," and ",Object(o.b)("inlineCode",{parentName:"p"},"LEFT")," as shown below."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<Pane display="flex" justifyContent="space-between">\n  <Tooltip content="Top" position={Position.TOP}>\n    <IconButton icon={ArrowUpIcon} />\n  </Tooltip>\n  <Tooltip content="Right" position={Position.RIGHT}>\n    <IconButton icon={ArrowRightIcon} />\n  </Tooltip>\n  <Tooltip content="Bottom" position={Position.BOTTOM}>\n    <IconButton icon={ArrowDownIcon} />\n  </Tooltip>\n  <Tooltip content="Left" position={Position.LEFT}>\n    <IconButton icon={ArrowLeftIcon} />\n  </Tooltip>\n</Pane>\n')),Object(o.b)(i.a,{of:"Tooltip",mdxType:"PropsTable"}))}s.isMDXComponent=!0},uVCN:function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));var a=n("dI71"),o=n("rePB"),r=n("KQm4"),i=n("mXGw"),c=n.n(i),l=n("qhky"),p=n("Wbzz"),s=n("YwZP"),u=n("ruUZ"),m=n("Onqc"),b=n("vMZD"),d=n("552S"),O=n("fUAp"),f=n("hPyG"),j=n("zngv"),h=n("7oih"),g=n("Whaq"),y=n("nD8F");function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=[].concat(Object(r.a)(O.a.foundation.items.map((function(e){return N(N({},e),{},{related:[].concat(Object(r.a)(e.related||[]),Object(r.a)(O.a.foundation.items.map((function(e){return e.id})).filter((function(t){return t!==e.id}))))})}))),Object(r.a)(O.a.components.items.reduce((function(e,t){return[].concat(Object(r.a)(e),Object(r.a)(t.items.map((function(e){return N(N({},e),{},{related:[].concat(Object(r.a)(e.related||[]),Object(r.a)(t.items.map((function(e){return e.id})).filter((function(t){return t!==e.id}))))})}))))}),[]))),v=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).getMetaInfo=function(){var e=t.props.location.pathname.split("/")[2];return E.find((function(t){return t.id===e}))},t.getRelatedItems=function(e){return(e.related||[]).map((function(e){return E.find((function(t){return t.id===e}))}))},t}Object(a.a)(t,e);var n=t.prototype;return n.componentDidCatch=function(e,t){console.error(e,t)},n.render=function(){var e=this.getMetaInfo();if(!e)return null;var t=this.getRelatedItems(e);return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,null,c.a.createElement("title",null,e.name," · MolecularUI"),c.a.createElement("meta",{property:"og:title",content:e.name+" · MolecularUI"}),c.a.createElement("meta",{property:"twitter:title",content:e.name+" · MolecularUI"})),c.a.createElement("div",null,c.a.createElement(j.a,null),c.a.createElement("main",null,c.a.createElement("article",{className:"MDXPage"},c.a.createElement("header",{className:"MDXPage-header"},c.a.createElement("div",{className:"bg-tint1"},c.a.createElement("div",{className:"MDXPage-headerContent Container Container--narrow"},c.a.createElement("div",{className:"MDXPage-headerContentLeft"},c.a.createElement(u.a,{content:"Back to Overview"},c.a.createElement(m.a,{autoFocus:!0,onClick:function(){Object(s.navigate)("/components")},marginLeft:-54,marginRight:16,display:"inline-flex",icon:b.a,height:40})),c.a.createElement("h1",null,e.name)),c.a.createElement(d.a,{is:"a",height:40,href:e.github,target:"_blank"},"View on GitHub")))),c.a.createElement("div",{className:"Container Container--narrow",style:{marginBottom:120}},c.a.createElement(f.a,null,this.props.children))),t.length>0&&c.a.createElement("div",{className:"Overview-group Container Container--narrow",style:{marginBottom:120}},c.a.createElement("h3",{className:"Overview-groupTitle"},"Related"),c.a.createElement("div",{className:"Overview-groupItems"},t.map((function(e){return c.a.createElement(g.a,{key:e.name,id:e.id,image:e.image},e.name)})))),c.a.createElement("div",{className:"Container Container--narrow",style:{marginBottom:120}},c.a.createElement(d.a,{is:p.a,to:"/components",display:"inline-flex",iconBefore:b.a,height:40},"Back to Overview")))),c.a.createElement(y.a,null))},t}(c.a.Component),P=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this;return c.a.createElement(h.a,null,c.a.createElement(s.Location,null,(function(t){var n=t.location;return c.a.createElement(v,Object.assign({location:n},e.props))})))},t}(c.a.Component)}}]);
//# sourceMappingURL=component---src-pages-components-tooltip-mdx-ff35be2f5bf76bc960d8.js.map