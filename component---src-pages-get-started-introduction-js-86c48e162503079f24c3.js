(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{fKWt:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("dI71"),l=a("mXGw"),r=a.n(l),o=a("zLVn"),i=a("Wbzz"),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props,t=(e.children,e.groups),a=Object(o.a)(e,["children","groups"]);return r.a.createElement("aside",Object.assign({className:"MainLayout-sidebar Sidebar"},a),r.a.createElement("div",{className:"Sidebar-inner"},t.map((function(e){return r.a.createElement("div",{key:e.title||e.links[0].label,className:"NavGroup"},e.title&&r.a.createElement("h3",{className:"NavGroup-title"},e.title),r.a.createElement("nav",{className:"NavGroup-nav"},e.links.map((function(e){var t=e.label,a=e.to,n=e.exact;return r.a.createElement(i.a,{key:a,activeClassName:"is-active",to:a,exact:n},t)}))))}))))},t}(l.PureComponent);c.defaultProps={groups:[]};var u=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return r.a.createElement(c,this.props)},t}(l.PureComponent);u.defaultProps={groups:[{links:[{to:"/get-started/introduction",label:"Introduction"},{to:"/get-started/theming",label:"Theming"},{to:"/get-started/v5-migration-guide",label:"Migrating to v5"}]}]}},ntmG:function(e,t,a){"use strict";a.r(t);var n=a("mXGw"),l=a.n(n),r=a("qhky"),o=a("zngv"),i=a("fKWt"),c=a("Vm3X"),u=a("7oih"),s=a("nD8F"),m=function(e){var t=Object.assign({},e);return l.a.createElement("a",Object.assign({target:"_blank",rel:"noopener noreferrer"},t))};t.default=function(){return l.a.createElement(u.a,null,l.a.createElement(r.a,null,l.a.createElement("title",null,"Introduction · MolecularUI")),l.a.createElement("div",{className:"MainLayout"},l.a.createElement(o.a,null),l.a.createElement("main",{className:"MainLayout-main"},l.a.createElement("div",{className:"MainLayout-content"},l.a.createElement("section",{className:"MainLayout-contentRight"},l.a.createElement("div",{className:"Container-nextToSidebar",style:{marginBottom:160}},l.a.createElement("div",{className:"Content"},l.a.createElement("h1",null,"Introduction"),l.a.createElement("p",{className:"p"},"MolecularUI is a pragmatic UI kit for building evolving products on the web.",l.a.createElement("br",null)," It is built and maintained open-source by"," ",l.a.createElement(m,{href:"https://segment.com/"},"Segment"),"."),l.a.createElement("h2",null,"Core beliefs of MolecularUI"),l.a.createElement("p",null,l.a.createElement("strong",null,"MolecularUI is built on the belief that you can never predict all future requirements, only prepare for it.")," ","Instead of creating fixed configurations that work today, MolecularUI promotes building systems that anticipate new and changing design requirements."),l.a.createElement("p",null,l.a.createElement("strong",null,"MolecularUI is built on the belief that things should work out of the box with smart defaults and offer full control when needed.")," ","For example, MolecularUI implements most components on top of a"," ",l.a.createElement(m,{href:"https://github.com/segmentio/ui-box"},"Box primitive")," ","which allows for a lot of customization."),l.a.createElement("p",null,l.a.createElement("strong",null,"MolecularUI is built on the belief that using MolecularUI and contributing to MolecularUI should be a pleasant experience.")," ","We prioritize documentation and all the tools for a solid developer experience. We advocate respect and inclusivity in our writings and interactions."),l.a.createElement("h2",null,"Install and use components"),l.a.createElement("p",null,"MolecularUI is made up of multiple components and tools which you can import one by one. All you need to do is install the ",l.a.createElement("code",null,"molecular-ui")," package:")),l.a.createElement(c.a,null,"\n$ yarn add molecular-ui\n# or\n$ npm install --save molecular-ui\n                ".trim()),l.a.createElement("div",{className:"Content"},l.a.createElement("p",null,"A working version, assuming you are using something like"," ",l.a.createElement(m,{href:"https://github.com/facebookincubator/create-react-app"},"Create React App"),", might look like this:")),l.a.createElement(c.a,null,"\nimport React from 'react'\nimport ReactDOM from 'react-dom'\nimport { Button } from 'molecular-ui'\n\nReactDOM.render(\n  <Button>I am using 🌲 MolecularUI!</Button>,\n  document.getElementById('root')\n)")))),l.a.createElement(i.a,null))),l.a.createElement(s.a,null))}}}]);
//# sourceMappingURL=component---src-pages-get-started-introduction-js-86c48e162503079f24c3.js.map