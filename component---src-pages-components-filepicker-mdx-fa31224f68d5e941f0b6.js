(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"1Wkc":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n("zLVn"),r=(n("mXGw"),n("7ljp")),o=n("uVCN"),c=n("Ob+p"),l={},i={_frontmatter:l},u=o.a;function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)(u,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Introduction"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"Filepicker")," component is used to select one or multiple files from the file system."),Object(r.b)("h2",null,"Basic multiple example"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<FilePicker\n  multiple\n  width={250}\n  marginBottom={32}\n  onChange={files => console.log(files)}\n  placeholder="Select the file here!"\n/>\n')),Object(r.b)("h2",null,"Changing the height"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"<FilePicker multiple width={350} height={24} marginBottom={32} />\n")),Object(r.b)("h2",null,"Disabled"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"<FilePicker disabled width={250} marginBottom={32} />\n")),Object(r.b)(c.a,{of:"FilePicker",mdxType:"PropsTable"}))}s.isMDXComponent=!0},"Ob+p":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("dI71"),r=n("mXGw"),o=n.n(r),c=n("Wbzz"),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",{className:"PropTypeWrapper"},e)},t}(r.PureComponent),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",{className:"PropTypeDescription"},e)},t}(r.PureComponent),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.defaultValue,n=e.name,a=e.required,r=e.type,c=e.isArrayOf;return o.a.createElement("div",{className:"PropTypeHeading"},o.a.createElement("code",null,o.a.createElement("span",{className:"PropTypeHeading-name"},n),o.a.createElement("span",{className:"PropTypeHeading-propType"},function e(t){var n=t.name,a=t.value;switch(n){case"enum":return a.map((function(e){return e.value})).join(" | ");case"union":return a.map((function(t){return e(t)})).join(" | ");case"arrayOf":return"Array<"+e(a)+">";case"shape":return"object"==typeof a?"{ "+Object.keys(a).map((function(t){return t+(a[t].required?"":"?")+": "+e(a[t])})).join(", ")+" }":a;default:return n}}(r)),c&&o.a.createElement("span",{className:"PropTypeHeading-arrayOf"},c)),t?o.a.createElement("code",{className:"PropTypeHeading-defaultValue"}," ","= ",t.value):null,a?o.a.createElement("span",{className:"PropTypeHeading-required"},"required"):null)},t}(r.PureComponent),s=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).isArrayOf=function(e){if(e.type&&"arrayOf"===e.type.name&&"object"==typeof e.type.value&&"string"==typeof e.type.value.raw)return e.type.value.raw},t.getDocsForComponent=function(e){var n=e.allComponentMetadata.edges.find((function(e){return e.node.displayName===t.props.of}));return n?n.node:null},t}return Object(a.a)(t,e),t.prototype.render=function(){var e=this;return o.a.createElement(c.b,{query:"3894714669",render:function(t){var n=e.getDocsForComponent(t);return n?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"Content"},o.a.createElement("h2",{className:"h2"},o.a.createElement("code",{className:"code"},e.props.rename||n.displayName)," ","Props"),n&&n.composes&&n.composes.length>0&&o.a.createElement("div",{className:"PropTypesTable-composes"},o.a.createElement("p",null,o.a.createElement("strong",null,"This component composes "),n.composes.map((function(e){return o.a.createElement("code",{key:e},e.slice(e.indexOf("/")+1))}))))),n.props.map((function(t){var n=e.isArrayOf(t);return o.a.createElement(l,{key:t.name},o.a.createElement(u,{name:t.name,required:t.required,defaultValue:t.defaultValue,type:t.type||{},isArrayOf:n}),t.docblock?o.a.createElement(i,null,t.docblock):null)}))):o.a.createElement("div",null,o.a.createElement("p",null,"The properties table for this component can’t be rendered at the moment, due to a bug."))}})},t}(r.PureComponent)},uVCN:function(e,t,n){"use strict";n.d(t,"a",(function(){return N}));var a=n("dI71"),r=n("rePB"),o=n("KQm4"),c=n("mXGw"),l=n.n(c),i=n("qhky"),u=n("Wbzz"),s=n("YwZP"),m=n("ruUZ"),p=n("Onqc"),d=n("vMZD"),f=n("552S"),b=n("fUAp"),h=n("hPyG"),y=n("zngv"),g=n("7oih"),O=n("Whaq"),v=n("nD8F");function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=[].concat(Object(o.a)(b.a.foundation.items.map((function(e){return E(E({},e),{},{related:[].concat(Object(o.a)(e.related||[]),Object(o.a)(b.a.foundation.items.map((function(e){return e.id})).filter((function(t){return t!==e.id}))))})}))),Object(o.a)(b.a.components.items.reduce((function(e,t){return[].concat(Object(o.a)(e),Object(o.a)(t.items.map((function(e){return E(E({},e),{},{related:[].concat(Object(o.a)(e.related||[]),Object(o.a)(t.items.map((function(e){return e.id})).filter((function(t){return t!==e.id}))))})}))))}),[]))),P=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).getMetaInfo=function(){var e=t.props.location.pathname.split("/")[2];return w.find((function(t){return t.id===e}))},t.getRelatedItems=function(e){return(e.related||[]).map((function(e){return w.find((function(t){return t.id===e}))}))},t}Object(a.a)(t,e);var n=t.prototype;return n.componentDidCatch=function(e,t){console.error(e,t)},n.render=function(){var e=this.getMetaInfo();if(!e)return null;var t=this.getRelatedItems(e);return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null,l.a.createElement("title",null,e.name," · MolecularUI"),l.a.createElement("meta",{property:"og:title",content:e.name+" · MolecularUI"}),l.a.createElement("meta",{property:"twitter:title",content:e.name+" · MolecularUI"})),l.a.createElement("div",null,l.a.createElement(y.a,null),l.a.createElement("main",null,l.a.createElement("article",{className:"MDXPage"},l.a.createElement("header",{className:"MDXPage-header"},l.a.createElement("div",{className:"bg-tint1"},l.a.createElement("div",{className:"MDXPage-headerContent Container Container--narrow"},l.a.createElement("div",{className:"MDXPage-headerContentLeft"},l.a.createElement(m.a,{content:"Back to Overview"},l.a.createElement(p.a,{autoFocus:!0,onClick:function(){Object(s.navigate)("/components")},marginLeft:-54,marginRight:16,display:"inline-flex",icon:d.a,height:40})),l.a.createElement("h1",null,e.name)),l.a.createElement(f.a,{is:"a",height:40,href:e.github,target:"_blank"},"View on GitHub")))),l.a.createElement("div",{className:"Container Container--narrow",style:{marginBottom:120}},l.a.createElement(h.a,null,this.props.children))),t.length>0&&l.a.createElement("div",{className:"Overview-group Container Container--narrow",style:{marginBottom:120}},l.a.createElement("h3",{className:"Overview-groupTitle"},"Related"),l.a.createElement("div",{className:"Overview-groupItems"},t.map((function(e){return l.a.createElement(O.a,{key:e.name,id:e.id,image:e.image},e.name)})))),l.a.createElement("div",{className:"Container Container--narrow",style:{marginBottom:120}},l.a.createElement(f.a,{is:u.a,to:"/components",display:"inline-flex",iconBefore:d.a,height:40},"Back to Overview")))),l.a.createElement(v.a,null))},t}(l.a.Component),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this;return l.a.createElement(g.a,null,l.a.createElement(s.Location,null,(function(t){var n=t.location;return l.a.createElement(P,Object.assign({location:n},e.props))})))},t}(l.a.Component)}}]);
//# sourceMappingURL=component---src-pages-components-filepicker-mdx-fa31224f68d5e941f0b6.js.map