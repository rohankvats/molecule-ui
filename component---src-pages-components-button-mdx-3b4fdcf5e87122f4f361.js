(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"Ob+p":function(n,e,t){"use strict";t.d(e,"a",(function(){return p}));var a=t("dI71"),o=t("mXGw"),i=t.n(o),r=t("Wbzz"),c=function(n){function e(){return n.apply(this,arguments)||this}return Object(a.a)(e,n),e.prototype.render=function(){var n=this.props.children;return i.a.createElement("div",{className:"PropTypeWrapper"},n)},e}(o.PureComponent),l=function(n){function e(){return n.apply(this,arguments)||this}return Object(a.a)(e,n),e.prototype.render=function(){var n=this.props.children;return i.a.createElement("div",{className:"PropTypeDescription"},n)},e}(o.PureComponent),u=function(n){function e(){return n.apply(this,arguments)||this}return Object(a.a)(e,n),e.prototype.render=function(){var n=this.props,e=n.defaultValue,t=n.name,a=n.required,o=n.type,r=n.isArrayOf;return i.a.createElement("div",{className:"PropTypeHeading"},i.a.createElement("code",null,i.a.createElement("span",{className:"PropTypeHeading-name"},t),i.a.createElement("span",{className:"PropTypeHeading-propType"},function n(e){var t=e.name,a=e.value;switch(t){case"enum":return a.map((function(n){return n.value})).join(" | ");case"union":return a.map((function(e){return n(e)})).join(" | ");case"arrayOf":return"Array<"+n(a)+">";case"shape":return"object"==typeof a?"{ "+Object.keys(a).map((function(e){return e+(a[e].required?"":"?")+": "+n(a[e])})).join(", ")+" }":a;default:return t}}(o)),r&&i.a.createElement("span",{className:"PropTypeHeading-arrayOf"},r)),e?i.a.createElement("code",{className:"PropTypeHeading-defaultValue"}," ","= ",e.value):null,a?i.a.createElement("span",{className:"PropTypeHeading-required"},"required"):null)},e}(o.PureComponent),p=function(n){function e(){for(var e,t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))||this).isArrayOf=function(n){if(n.type&&"arrayOf"===n.type.name&&"object"==typeof n.type.value&&"string"==typeof n.type.value.raw)return n.type.value.raw},e.getDocsForComponent=function(n){var t=n.allComponentMetadata.edges.find((function(n){return n.node.displayName===e.props.of}));return t?t.node:null},e}return Object(a.a)(e,n),e.prototype.render=function(){var n=this;return i.a.createElement(r.b,{query:"3894714669",render:function(e){var t=n.getDocsForComponent(e);return t?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"Content"},i.a.createElement("h2",{className:"h2"},i.a.createElement("code",{className:"code"},n.props.rename||t.displayName)," ","Props"),t&&t.composes&&t.composes.length>0&&i.a.createElement("div",{className:"PropTypesTable-composes"},i.a.createElement("p",null,i.a.createElement("strong",null,"This component composes "),t.composes.map((function(n){return i.a.createElement("code",{key:n},n.slice(n.indexOf("/")+1))}))))),t.props.map((function(e){var t=n.isArrayOf(e);return i.a.createElement(c,{key:e.name},i.a.createElement(u,{name:e.name,required:e.required,defaultValue:e.defaultValue,type:e.type||{},isArrayOf:t}),e.docblock?i.a.createElement(l,null,e.docblock):null)}))):i.a.createElement("div",null,i.a.createElement("p",null,"The properties table for this component can’t be rendered at the moment, due to a bug."))}})},e}(o.PureComponent)},q3rD:function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return c})),t.d(e,"default",(function(){return p}));var a=t("zLVn"),o=(t("mXGw"),t("7ljp")),i=t("uVCN"),r=t("Ob+p"),c={},l={_frontmatter:c},u=i.a;function p(n){var e=n.components,t=Object(a.a)(n,["components"]);return Object(o.b)(u,Object.assign({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"MolecularUI exports multiple button components"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Button"),": most commonly used, can have a icon on the left or right side."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"IconButton"),": a button that holds a single icon."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"BackButton"),": a preset of the ",Object(o.b)("inlineCode",{parentName:"li"},"Button")," component."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"TextDropdownButton"),": a bare-bones button that is used primarily in table headers.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Button"),", ",Object(o.b)("inlineCode",{parentName:"p"},"IconButton")," and ",Object(o.b)("inlineCode",{parentName:"p"},"BackButton")," all share a very similar API and look.\n",Object(o.b)("inlineCode",{parentName:"p"},"TextDropdownButton")," is a bit different."),Object(o.b)("h1",null,"Button"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Button")," component is the most common button component.\nIt contains a label and optional icons before or after the label."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<Button appearance="primary">Hi MolecularUI!</Button>\n')),Object(o.b)("h2",null,"All button variations"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"collapse",collapse:!0}),'<Component\n  initialState={{\n    options: [\n      { label: \'Height 24\', value: 24 },\n      { label: \'Height 32\', value: 32 },\n      { label: \'Height 40\', value: 40 },\n    ],\n    value: 32,\n  }}\n>\n  {({ state, setState }) => (\n    <React.Fragment>\n      <SegmentedControl\n        name="button-size"\n        width={280}\n        options={state.options}\n        value={state.value}\n        onChange={(value) => setState({ value: Number(value) })}\n      />\n      <Heading marginTop="default">Default Appearance</Heading>\n      <Pane marginTop={12}>\n        <Button height={state.value} marginRight={16}>\n          Default\n        </Button>\n        <Button height={state.value} marginRight={16} intent="success">\n          Success\n        </Button>\n        <Button height={state.value} marginRight={16} intent="warning">\n          Warning\n        </Button>\n        <Button height={state.value} marginRight={16} intent="danger">\n          Danger\n        </Button>\n        <Button height={state.value} marginRight={16} iconBefore={EditIcon}>\n          Icon Before\n        </Button>\n        <Button height={state.value} iconAfter={ArrowRightIcon}>\n          Icon After\n        </Button>\n      </Pane>\n      <Heading marginTop="default">Primary Appearance</Heading>\n      <Pane marginTop={12}>\n        <Button height={state.value} appearance="primary" marginRight={16}>\n          Default\n        </Button>\n        <Button\n          height={state.value}\n          appearance="primary"\n          marginRight={16}\n          intent="success"\n        >\n          Success\n        </Button>\n        <Button\n          height={state.value}\n          appearance="primary"\n          marginRight={16}\n          intent="warning"\n        >\n          Warning\n        </Button>\n        <Button\n          height={state.value}\n          marginRight={16}\n          appearance="primary"\n          intent="danger"\n        >\n          Danger\n        </Button>\n        <Button\n          height={state.value}\n          marginRight={16}\n          appearance="primary"\n          intent="success"\n          iconBefore={AddIcon}\n        >\n          Icon Before\n        </Button>\n        <Button\n          height={state.value}\n          appearance="primary"\n          iconAfter={ArrowRightIcon}\n        >\n          Icon After\n        </Button>\n      </Pane>\n      <Heading marginTop="default">Minimal Appearance</Heading>\n      <Pane marginTop={12}>\n        <Button height={state.value} appearance="minimal" marginRight={16}>\n          Default\n        </Button>\n        <Button\n          height={state.value}\n          appearance="minimal"\n          marginRight={16}\n          intent="success"\n        >\n          Success\n        </Button>\n        <Button\n          height={state.value}\n          appearance="minimal"\n          marginRight={16}\n          intent="warning"\n        >\n          Warning\n        </Button>\n        <Button\n          height={state.value}\n          marginRight={16}\n          appearance="minimal"\n          intent="danger"\n        >\n          Danger\n        </Button>\n        <Button\n          height={state.value}\n          marginRight={16}\n          appearance="minimal"\n          iconBefore={EditIcon}\n        >\n          Icon Before\n        </Button>\n        <Button\n          height={state.value}\n          appearance="minimal"\n          iconAfter={CaretDownIcon}\n        >\n          Icon After\n        </Button>\n      </Pane>\n    </React.Fragment>\n  )}\n</Component>\n')),Object(o.b)("h2",null,"Button Appearances"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Button")," component has a ",Object(o.b)("inlineCode",{parentName:"p"},"appearance")," property with 3 available values:"),Object(o.b)("h3",null,"Appearances"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"default")," — this is the default."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"primary")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"minimal"))),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<>\n  <Button marginRight={16}>Default</Button>\n  <Button marginRight={16} appearance="primary">\n    Primary\n  </Button>\n  <Button marginRight={16} appearance="minimal">\n    Minimal\n  </Button>\n</>\n')),Object(o.b)("h2",null,"Button Intent"),Object(o.b)("p",null,"In addition to the ",Object(o.b)("inlineCode",{parentName:"p"},"appearance")," — a ",Object(o.b)("inlineCode",{parentName:"p"},"Button")," can also have a ",Object(o.b)("inlineCode",{parentName:"p"},"intent")," property.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"intent")," property is a slightly abstract API that maps to the following values:"),Object(o.b)("h3",null,"Intent"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"none")," — this is the default."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"success")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"warning")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"danger"))),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<>\n  <Button marginRight={16} intent="none">\n    None\n  </Button>\n  <Button marginRight={16} intent="success">\n    Success\n  </Button>\n  <Button marginRight={16} intent="warning">\n    Warning\n  </Button>\n  <Button marginRight={16} intent="danger">\n    Danger\n  </Button>\n</>\n')),Object(o.b)("h2",null,"Mixing appearance and intent"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"intent")," property works with any ",Object(o.b)("inlineCode",{parentName:"p"},"appearance"),"."),Object(o.b)("h3",null,"Primary with Intent"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<>\n  <Button marginRight={16} appearance="primary" intent="none">\n    None\n  </Button>\n  <Button marginRight={16} appearance="primary" intent="success">\n    Success\n  </Button>\n  <Button marginRight={16} appearance="primary" intent="warning">\n    Warning\n  </Button>\n  <Button marginRight={16} appearance="primary" intent="danger">\n    Danger\n  </Button>\n</>\n')),Object(o.b)("h3",null,"Minimal with Intent"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<>\n  <Button marginRight={16} appearance="minimal" intent="none">\n    None\n  </Button>\n  <Button marginRight={16} appearance="minimal" intent="success">\n    Success\n  </Button>\n  <Button marginRight={16} appearance="minimal" intent="warning">\n    Warning\n  </Button>\n  <Button marginRight={16} appearance="minimal" intent="danger">\n    Danger\n  </Button>\n</>\n')),Object(o.b)("h2",null,"Button Sizes"),Object(o.b)("p",null,"By default buttons and controls have a height of ",Object(o.b)("inlineCode",{parentName:"p"},"32px"),".\nIt is possible to change this to any height and the text style and spacing will adjust.\nYou should however keep the height on the ",Object(o.b)("inlineCode",{parentName:"p"},"8px")," or in some cases the ",Object(o.b)("inlineCode",{parentName:"p"},"4px")," grid.\nYou should only need the following recommended heights."),Object(o.b)("h3",null,"Recommended heights"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"24")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"32")," — default height"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"40"))),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"<>\n  <Button marginRight={12} height={20}>\n    Height 20\n  </Button>\n  <Button marginRight={12} height={24}>\n    Height 24\n  </Button>\n  <Button marginRight={12} height={32}>\n    Height 32\n  </Button>\n  <Button marginRight={12} height={40}>\n    Height 40\n  </Button>\n  <Button marginRight={12} height={48}>\n    Height 48\n  </Button>\n  <Button marginRight={12} height={56}>\n    Height 56\n  </Button>\n</>\n")),Object(o.b)("h2",null,"Buttons with an Icon"),Object(o.b)("p",null,"Buttons support an icon on either before or after the label. Avoid using two icons in a button."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<>\n  <Button marginY={8} marginRight={12} iconBefore={CogIcon}>\n    Settings\n  </Button>\n  <Button marginY={8} marginRight={12} iconBefore={EditIcon}>\n    Edit\n  </Button>\n  <Button marginY={8} marginRight={12} iconBefore={ManualIcon}>\n    Docs\n  </Button>\n  <Button marginY={8} marginRight={12} iconBefore={ArrowLeftIcon}>\n    Back\n  </Button>\n  <Button marginY={8} marginRight={12} iconBefore={DownloadIcon}>\n    Download...\n  </Button>\n  <Button marginY={8} marginRight={12} iconBefore={TrashIcon} intent="danger">\n    Delete...\n  </Button>\n  <Button marginY={8} marginRight={12} iconBefore={SearchIcon}>\n    Search\n  </Button>\n  <Button marginY={8} marginRight={12} iconAfter={CaretDownIcon}>\n    Filter\n  </Button>\n</>\n')),Object(o.b)("div",{id:"api"},Object(o.b)(r.a,{of:"Button",mdxType:"PropsTable"})),Object(o.b)("h1",null,"IconButton"),Object(o.b)("p",null,"For the use case of creating a button with a single icon MolecularUI exports the ",Object(o.b)("inlineCode",{parentName:"p"},"IconButton")," component."),Object(o.b)("h2",null,"Simple IconButton example"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<IconButton icon={TrashIcon} intent="danger" />\n')),Object(o.b)("h2",null,"Use the height property to resize the icon button"),Object(o.b)("p",null,"Use the ",Object(o.b)("inlineCode",{parentName:"p"},"height")," property on the ",Object(o.b)("inlineCode",{parentName:"p"},"IconButton")," component to resize the component.\nThe icon will automatically resize for the given height."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"<IconButton icon={CrossIcon} height={40} />\n")),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"<IconButton icon={CrossIcon} height={24} />\n")),Object(o.b)("h2",null,"Specifically override the icon size"),Object(o.b)("p",null,"In some rare cases you might need to override the icon size.\nUse the ",Object(o.b)("inlineCode",{parentName:"p"},"iconSize")," property to do this."),Object(o.b)("p",null,"This is not a required property, the icon will automatically resize based on the given height."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<IconButton appearance="minimal" icon={NotificationsIcon} iconSize={18} />\n')),Object(o.b)("h2",null,"Common icon buttons"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"collapse",collapse:!0}),'<Pane clearfix>\n  <Pane borderRight paddingRight={24} marginRight={24} float="left">\n    <Heading marginBottom={16}>Height 32</Heading>\n    <Pane float="left" marginRight={16}>\n      <IconButton marginBottom={16} icon={CogIcon} />\n      <IconButton marginBottom={16} icon={PlusIcon} />\n      <IconButton marginBottom={16} icon={FilterIcon} />\n      <IconButton marginBottom={16} icon={EditIcon} />\n      <IconButton marginBottom={16} icon={RefreshIcon} />\n    </Pane>\n    <Pane float="left">\n      <IconButton marginBottom={16} appearance="minimal" icon={CrossIcon} />\n      <IconButton marginBottom={16} appearance="minimal" icon={MoreIcon} />\n      <IconButton marginBottom={16} appearance="minimal" icon={PlusIcon} />\n      <IconButton marginBottom={16} appearance="minimal" icon={EditIcon} />\n      <IconButton marginBottom={16} appearance="minimal" icon={SearchIcon} />\n    </Pane>\n  </Pane>\n  <Pane float="left">\n    <Heading marginBottom={16}>Height 24</Heading>\n    <Pane float="left" marginRight={16}>\n      <IconButton marginBottom={16} height={24} icon={CogIcon} />\n      <IconButton marginBottom={16} height={24} icon={PlusIcon} />\n      <IconButton marginBottom={16} height={24} icon={FilterIcon} />\n      <IconButton marginBottom={16} height={24} icon={EditIcon} />\n      <IconButton marginBottom={16} height={24} icon={ChevronLeftIcon} />\n      <IconButton marginBottom={16} height={24} icon={ChevronRightIcon} />\n    </Pane>\n    <Pane float="left" marginRight={16}>\n      <IconButton\n        marginBottom={16}\n        appearance="minimal"\n        height={24}\n        icon={CrossIcon}\n      />\n      <IconButton\n        marginBottom={16}\n        appearance="minimal"\n        height={24}\n        icon={MoreIcon}\n      />\n      <IconButton\n        marginBottom={16}\n        appearance="minimal"\n        height={24}\n        icon={PlusIcon}\n      />\n      <IconButton\n        marginBottom={16}\n        appearance="minimal"\n        height={24}\n        icon={TrashIcon}\n        intent="danger"\n      />\n      <IconButton\n        marginBottom={16}\n        appearance="minimal"\n        height={24}\n        icon={FilterIcon}\n      />\n      <IconButton\n        marginBottom={16}\n        appearance="minimal"\n        height={24}\n        icon={EditIcon}\n      />\n    </Pane>\n    <Pane float="left">\n      <IconButton\n        marginBottom={16}\n        appearance="minimal"\n        height={24}\n        icon={ClipboardIcon}\n      />\n      <IconButton\n        marginBottom={16}\n        appearance="minimal"\n        height={24}\n        icon={CalendarIcon}\n      />\n      <IconButton\n        marginBottom={16}\n        appearance="minimal"\n        height={24}\n        icon={LockIcon}\n      />\n      <IconButton\n        marginBottom={16}\n        appearance="minimal"\n        height={24}\n        icon={UnlockIcon}\n      />\n      <IconButton\n        marginBottom={16}\n        appearance="minimal"\n        height={24}\n        icon={NotificationsIcon}\n      />\n      <IconButton\n        marginBottom={16}\n        appearance="minimal"\n        height={24}\n        icon={ManualIcon}\n      />\n    </Pane>\n  </Pane>\n</Pane>\n')),Object(o.b)(r.a,{of:"IconButton",mdxType:"PropsTable"}),Object(o.b)("h1",null,"BackButton component"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"BackButton")," component is a preset based on the ",Object(o.b)("inlineCode",{parentName:"p"},"Button")," component."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"<BackButton />\n")),Object(o.b)(r.a,{of:"BackButton",mdxType:"PropsTable"}),Object(o.b)("h1",null,"Buttons as links"),Object(o.b)("p",null,"Buttons can be used as links by using the optional ",Object(o.b)("inlineCode",{parentName:"p"},"is")," property with a value such as ",Object(o.b)("inlineCode",{parentName:"p"},"Link")," from ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/ReactTraining/react-router"}),"react-router"),", or an ",Object(o.b)("inlineCode",{parentName:"p"},"a")," tag."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),'<Button is="a" href="#">\n  Link\n</Button>\n')),Object(o.b)("h1",null,"TextDropdownButton component"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"TextDropdownButton")," is different from the other types of buttons.\nIt doesn’t work with a height, instead the dimensions are based on the text size.\nThis component is used inside of table header cells."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"<Pane>\n  <TextDropdownButton marginRight={16}>Table Header</TextDropdownButton>\n  <TextDropdownButton marginRight={16} icon={ArrowUpIcon}>\n    Ascending\n  </TextDropdownButton>\n  <TextDropdownButton icon={ArrowDownIcon}>Descending</TextDropdownButton>\n</Pane>\n")),Object(o.b)(r.a,{of:"TextDropdownButton",mdxType:"PropsTable"}))}p.isMDXComponent=!0},uVCN:function(n,e,t){"use strict";t.d(e,"a",(function(){return C}));var a=t("dI71"),o=t("rePB"),i=t("KQm4"),r=t("mXGw"),c=t.n(r),l=t("qhky"),u=t("Wbzz"),p=t("YwZP"),m=t("ruUZ"),s=t("Onqc"),g=t("vMZD"),b=t("552S"),h=t("fUAp"),d=t("hPyG"),B=t("zngv"),j=t("7oih"),O=t("Whaq"),f=t("nD8F");function N(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function I(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?N(Object(t),!0).forEach((function(e){Object(o.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var y=[].concat(Object(i.a)(h.a.foundation.items.map((function(n){return I(I({},n),{},{related:[].concat(Object(i.a)(n.related||[]),Object(i.a)(h.a.foundation.items.map((function(n){return n.id})).filter((function(e){return e!==n.id}))))})}))),Object(i.a)(h.a.components.items.reduce((function(n,e){return[].concat(Object(i.a)(n),Object(i.a)(e.items.map((function(n){return I(I({},n),{},{related:[].concat(Object(i.a)(n.related||[]),Object(i.a)(e.items.map((function(n){return n.id})).filter((function(e){return e!==n.id}))))})}))))}),[]))),v=function(n){function e(){for(var e,t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))||this).getMetaInfo=function(){var n=e.props.location.pathname.split("/")[2];return y.find((function(e){return e.id===n}))},e.getRelatedItems=function(n){return(n.related||[]).map((function(n){return y.find((function(e){return e.id===n}))}))},e}Object(a.a)(e,n);var t=e.prototype;return t.componentDidCatch=function(n,e){console.error(n,e)},t.render=function(){var n=this.getMetaInfo();if(!n)return null;var e=this.getRelatedItems(n);return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,null,c.a.createElement("title",null,n.name," · MolecularUI"),c.a.createElement("meta",{property:"og:title",content:n.name+" · MolecularUI"}),c.a.createElement("meta",{property:"twitter:title",content:n.name+" · MolecularUI"})),c.a.createElement("div",null,c.a.createElement(B.a,null),c.a.createElement("main",null,c.a.createElement("article",{className:"MDXPage"},c.a.createElement("header",{className:"MDXPage-header"},c.a.createElement("div",{className:"bg-tint1"},c.a.createElement("div",{className:"MDXPage-headerContent Container Container--narrow"},c.a.createElement("div",{className:"MDXPage-headerContentLeft"},c.a.createElement(m.a,{content:"Back to Overview"},c.a.createElement(s.a,{autoFocus:!0,onClick:function(){Object(p.navigate)("/components")},marginLeft:-54,marginRight:16,display:"inline-flex",icon:g.a,height:40})),c.a.createElement("h1",null,n.name)),c.a.createElement(b.a,{is:"a",height:40,href:n.github,target:"_blank"},"View on GitHub")))),c.a.createElement("div",{className:"Container Container--narrow",style:{marginBottom:120}},c.a.createElement(d.a,null,this.props.children))),e.length>0&&c.a.createElement("div",{className:"Overview-group Container Container--narrow",style:{marginBottom:120}},c.a.createElement("h3",{className:"Overview-groupTitle"},"Related"),c.a.createElement("div",{className:"Overview-groupItems"},e.map((function(n){return c.a.createElement(O.a,{key:n.name,id:n.id,image:n.image},n.name)})))),c.a.createElement("div",{className:"Container Container--narrow",style:{marginBottom:120}},c.a.createElement(b.a,{is:u.a,to:"/components",display:"inline-flex",iconBefore:g.a,height:40},"Back to Overview")))),c.a.createElement(f.a,null))},e}(c.a.Component),C=function(n){function e(){return n.apply(this,arguments)||this}return Object(a.a)(e,n),e.prototype.render=function(){var n=this;return c.a.createElement(j.a,null,c.a.createElement(p.Location,null,(function(e){var t=e.location;return c.a.createElement(v,Object.assign({location:t},n.props))})))},e}(c.a.Component)}}]);
//# sourceMappingURL=component---src-pages-components-button-mdx-3b4fdcf5e87122f4f361.js.map