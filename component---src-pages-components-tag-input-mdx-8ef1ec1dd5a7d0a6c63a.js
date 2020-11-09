(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"Ob+p":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("dI71"),r=n("mXGw"),o=n.n(r),l=n("Wbzz"),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",{className:"PropTypeWrapper"},e)},t}(r.PureComponent),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",{className:"PropTypeDescription"},e)},t}(r.PureComponent),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.defaultValue,n=e.name,a=e.required,r=e.type,l=e.isArrayOf;return o.a.createElement("div",{className:"PropTypeHeading"},o.a.createElement("code",null,o.a.createElement("span",{className:"PropTypeHeading-name"},n),o.a.createElement("span",{className:"PropTypeHeading-propType"},function e(t){var n=t.name,a=t.value;switch(n){case"enum":return a.map((function(e){return e.value})).join(" | ");case"union":return a.map((function(t){return e(t)})).join(" | ");case"arrayOf":return"Array<"+e(a)+">";case"shape":return"object"==typeof a?"{ "+Object.keys(a).map((function(t){return t+(a[t].required?"":"?")+": "+e(a[t])})).join(", ")+" }":a;default:return n}}(r)),l&&o.a.createElement("span",{className:"PropTypeHeading-arrayOf"},l)),t?o.a.createElement("code",{className:"PropTypeHeading-defaultValue"}," ","= ",t.value):null,a?o.a.createElement("span",{className:"PropTypeHeading-required"},"required"):null)},t}(r.PureComponent),u=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).isArrayOf=function(e){if(e.type&&"arrayOf"===e.type.name&&"object"==typeof e.type.value&&"string"==typeof e.type.value.raw)return e.type.value.raw},t.getDocsForComponent=function(e){var n=e.allComponentMetadata.edges.find((function(e){return e.node.displayName===t.props.of}));return n?n.node:null},t}return Object(a.a)(t,e),t.prototype.render=function(){var e=this;return o.a.createElement(l.b,{query:"3894714669",render:function(t){var n=e.getDocsForComponent(t);return n?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"Content"},o.a.createElement("h2",{className:"h2"},o.a.createElement("code",{className:"code"},e.props.rename||n.displayName)," ","Props"),n&&n.composes&&n.composes.length>0&&o.a.createElement("div",{className:"PropTypesTable-composes"},o.a.createElement("p",null,o.a.createElement("strong",null,"This component composes "),n.composes.map((function(e){return o.a.createElement("code",{key:e},e.slice(e.indexOf("/")+1))}))))),n.props.map((function(t){var n=e.isArrayOf(t);return o.a.createElement(i,{key:t.name},o.a.createElement(c,{name:t.name,required:t.required,defaultValue:t.defaultValue,type:t.type||{},isArrayOf:n}),t.docblock?o.a.createElement(s,null,t.docblock):null)}))):o.a.createElement("div",null,o.a.createElement("p",null,"The properties table for this component can’t be rendered at the moment, due to a bug."))}})},t}(r.PureComponent)},TTSV:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n("zLVn"),r=(n("mXGw"),n("7ljp")),o=n("uVCN"),l=n("Ob+p"),i={},s={_frontmatter:i},c=o.a;function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)(c,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"TagInput")," component is a text input component that adds values as tags."),Object(r.b)("h2",null,"Highlights"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Backspace (when cursor is at position 0 in the input) removes items"),Object(r.b)("li",{parentName:"ul"},"Enter keypress appends items to the list"),Object(r.b)("li",{parentName:"ul"},"Define (or disable) a ",Object(r.b)("inlineCode",{parentName:"li"},"separator")," to add multiple items at once (splits on comma and new line by default)"),Object(r.b)("li",{parentName:"ul"},"Values prop is controlled,  it's up to consumers to control adding/removing items via ",Object(r.b)("inlineCode",{parentName:"li"},"onAdd"),", ",Object(r.b)("inlineCode",{parentName:"li"},"onRemove"),", or conveniently using ",Object(r.b)("inlineCode",{parentName:"li"},"onChange")," to get the new array."),Object(r.b)("li",{parentName:"ul"},"Prevent input clearing (for instance if an item is invalid) by returning ",Object(r.b)("inlineCode",{parentName:"li"},"false")," during ",Object(r.b)("inlineCode",{parentName:"li"},"onAdd")," or ",Object(r.b)("inlineCode",{parentName:"li"},"onChange"))),Object(r.b)("h2",null,"Basic controlled TagInput"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"<Component initialState={{ values: ['Kauri', 'Willow'] }}>\n  {({ state, setState }) => (\n    <TagInput\n      inputProps={{ placeholder: 'Add trees...' }}\n      values={state.values}\n      onChange={values => {\n        setState({ values })\n      }}\n    />\n  )}\n</Component>\n")),Object(r.b)("h2",null,"Custom tag submit key"),Object(r.b)("p",null,"You can customize the key to submit a new tag by either passing in ",Object(r.b)("inlineCode",{parentName:"p"},"space")," or ",Object(r.b)("inlineCode",{parentName:"p"},"enter"),".\nThis will be the key by which to submit a tag as a user is typing in the input."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"<Component initialState={{ values: ['Kauri', 'Willow'] }}>\n  {({ state, setState }) => (\n    <TagInput\n      inputProps={{ placeholder: 'Add a tree...(then press space)' }}\n      width=\"100%\"\n      tagSubmitKey=\"space\"\n      values={state.values}\n      onChange={values => {\n        setState({ values })\n      }}\n    />\n  )}\n</Component>\n")),Object(r.b)("h2",null,"Full width TagInput"),Object(r.b)("p",null,"Use the ",Object(r.b)("inlineCode",{parentName:"p"},"width")," property to control the width of the ",Object(r.b)("inlineCode",{parentName:"p"},"TagInput"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"<Component initialState={{ values: ['Kauri', 'Willow'] }}>\n  {({ state, setState }) => (\n    <TagInput\n      inputProps={{ placeholder: 'Add trees...' }}\n      width=\"100%\"\n      values={state.values}\n      onChange={values => {\n        setState({ values })\n      }}\n    />\n  )}\n</Component>\n")),Object(r.b)("h2",null,"Disabled TagInput"),Object(r.b)("p",null,"Use the ",Object(r.b)("inlineCode",{parentName:"p"},"disabled")," property to disable interactions with the ",Object(r.b)("inlineCode",{parentName:"p"},"TagInput"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"<Component initialState={{ values: ['Kauri', 'Willow'] }}>\n  {({ state, setState }) => (\n    <TagInput\n      disabled\n      inputProps={{ placeholder: 'Add trees...' }}\n      values={state.values}\n      onChange={values => {\n        setState({ values })\n      }}\n    />\n  )}\n</Component>\n")),Object(r.b)("h2",null,"Change props of tags"),Object(r.b)("p",null,"Use the ",Object(r.b)("inlineCode",{parentName:"p"},"tagProps")," to change properties of a tag.\nThis is useful in cases when you want to create red tags for example."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"<Component initialState={{ values: ['Kauri', 'Willow'] }}>\n  {({ state, setState }) => (\n    <TagInput\n      tagProps={{\n        color: 'red',\n        isSolid: true\n      }}\n      inputProps={{ placeholder: 'Add red items...' }}\n      values={state.values}\n      onChange={values => {\n        setState({ values })\n      }}\n    />\n  )}\n</Component>\n")),Object(r.b)("h2",null,"Change props of tags based on the value"),Object(r.b)("p",null,"In some cases you might want to change the props of a tag based on the input.\nPass a function to the ",Object(r.b)("inlineCode",{parentName:"p"},"tagProps")," to achieve this."),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"<Component initialState={{ values: ['matt@awesome.com', 'troll_mailer'] }}>\n  {({ state, setState }) => (\n    <TagInput\n      tagProps={value => {\n        if (!value.includes('@')) return { color: 'red', isSolid: true }\n        return {}\n      }}\n      inputProps={{ placeholder: 'Add email...' }}\n      values={state.values}\n      onChange={values => {\n        setState({ values })\n      }}\n    />\n  )}\n</Component>\n")),Object(r.b)("h2",null,"Using onAdd and onRemove (advanced)"),Object(r.b)("p",null,"In more delicate use cases you can use ",Object(r.b)("inlineCode",{parentName:"p"},"onAdd")," and ",Object(r.b)("inlineCode",{parentName:"p"},"onRemove")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"onChange"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"onAdd/onChange")," will give you strings that were entered and split (based on ",Object(r.b)("inlineCode",{parentName:"li"},"separator"),") and trimmed"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"onRemove/onChange")," will give you the ",Object(r.b)("inlineCode",{parentName:"li"},"this.props.values")," with the item removed at a particular index, which could contain jsx if your ",Object(r.b)("inlineCode",{parentName:"li"},"props.values")," included it")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"If you are using an array of strings for use ",Object(r.b)("inlineCode",{parentName:"em"},"onChange")," safely"),", otherwise use ",Object(r.b)("inlineCode",{parentName:"p"},"onAdd/onRemove")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"<Component initialState={{ values: ['matt@awesome.com'] }}>\n  {({ state, setState }) => (\n    <TagInput\n      inputProps={{ placeholder: 'Add email...' }}\n      values={state.values}\n      onAdd={value => {\n        if (!value.includes('@')) {\n          toaster.danger('Oops, you tried entering a invalid email. Try again.')\n          return\n        }\n        setState({\n          values: [...state.values, value]\n        })\n      }}\n      onRemove={(_value, index) => {\n        setState({\n          values: state.values.filter((_, i) => i !== index)\n        })\n      }}\n    />\n  )}\n</Component>\n")),Object(r.b)(l.a,{of:"TagInput",mdxType:"PropsTable"}))}u.isMDXComponent=!0},uVCN:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var a=n("dI71"),r=n("rePB"),o=n("KQm4"),l=n("mXGw"),i=n.n(l),s=n("qhky"),c=n("Wbzz"),u=n("YwZP"),p=n("ruUZ"),m=n("Onqc"),d=n("vMZD"),b=n("552S"),g=n("fUAp"),h=n("hPyG"),O=n("zngv"),f=n("7oih"),v=n("Whaq"),j=n("nD8F");function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=[].concat(Object(o.a)(g.a.foundation.items.map((function(e){return C(C({},e),{},{related:[].concat(Object(o.a)(e.related||[]),Object(o.a)(g.a.foundation.items.map((function(e){return e.id})).filter((function(t){return t!==e.id}))))})}))),Object(o.a)(g.a.components.items.reduce((function(e,t){return[].concat(Object(o.a)(e),Object(o.a)(t.items.map((function(e){return C(C({},e),{},{related:[].concat(Object(o.a)(e.related||[]),Object(o.a)(t.items.map((function(e){return e.id})).filter((function(t){return t!==e.id}))))})}))))}),[]))),w=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).getMetaInfo=function(){var e=t.props.location.pathname.split("/")[2];return N.find((function(t){return t.id===e}))},t.getRelatedItems=function(e){return(e.related||[]).map((function(e){return N.find((function(t){return t.id===e}))}))},t}Object(a.a)(t,e);var n=t.prototype;return n.componentDidCatch=function(e,t){console.error(e,t)},n.render=function(){var e=this.getMetaInfo();if(!e)return null;var t=this.getRelatedItems(e);return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,null,i.a.createElement("title",null,e.name," · MolecularUI"),i.a.createElement("meta",{property:"og:title",content:e.name+" · MolecularUI"}),i.a.createElement("meta",{property:"twitter:title",content:e.name+" · MolecularUI"})),i.a.createElement("div",null,i.a.createElement(O.a,null),i.a.createElement("main",null,i.a.createElement("article",{className:"MDXPage"},i.a.createElement("header",{className:"MDXPage-header"},i.a.createElement("div",{className:"bg-tint1"},i.a.createElement("div",{className:"MDXPage-headerContent Container Container--narrow"},i.a.createElement("div",{className:"MDXPage-headerContentLeft"},i.a.createElement(p.a,{content:"Back to Overview"},i.a.createElement(m.a,{autoFocus:!0,onClick:function(){Object(u.navigate)("/components")},marginLeft:-54,marginRight:16,display:"inline-flex",icon:d.a,height:40})),i.a.createElement("h1",null,e.name)),i.a.createElement(b.a,{is:"a",height:40,href:e.github,target:"_blank"},"View on GitHub")))),i.a.createElement("div",{className:"Container Container--narrow",style:{marginBottom:120}},i.a.createElement(h.a,null,this.props.children))),t.length>0&&i.a.createElement("div",{className:"Overview-group Container Container--narrow",style:{marginBottom:120}},i.a.createElement("h3",{className:"Overview-groupTitle"},"Related"),i.a.createElement("div",{className:"Overview-groupItems"},t.map((function(e){return i.a.createElement(v.a,{key:e.name,id:e.id,image:e.image},e.name)})))),i.a.createElement("div",{className:"Container Container--narrow",style:{marginBottom:120}},i.a.createElement(b.a,{is:c.a,to:"/components",display:"inline-flex",iconBefore:d.a,height:40},"Back to Overview")))),i.a.createElement(j.a,null))},t}(i.a.Component),E=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this;return i.a.createElement(f.a,null,i.a.createElement(u.Location,null,(function(t){var n=t.location;return i.a.createElement(w,Object.assign({location:n},e.props))})))},t}(i.a.Component)}}]);
//# sourceMappingURL=component---src-pages-components-tag-input-mdx-8ef1ec1dd5a7d0a6c63a.js.map