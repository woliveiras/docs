(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{110:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(120),i=n(104),s=n(58),l=n.n(s);var c=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,m=e.values,u=e.groupId,d=e.className,b=Object(o.a)(),h=b.tabGroupChoices,v=b.setTabGroupChoices,f=Object(r.useState)(s),g=f[0],j=f[1],O=r.Children.toArray(e.children),w=[];if(null!=u){var y=h[u];null!=y&&y!==g&&m.some((function(e){return e.value===y}))&&j(y)}var N=function(e){var t=e.target,n=w.indexOf(t),r=O[n].props.value;j(r),null!=u&&(v(u,r),setTimeout((function(){var e,n,r,a,o,i,s,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,s=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l.a.tabItemActive),setTimeout((function(){return t.classList.remove(l.a.tabItemActive)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case p:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case c:var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null===(t=n)||void 0===t||t.focus()};return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},m.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:N,onClick:N},n)}))),t?Object(r.cloneElement)(O.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},111:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(109),a=n(110),o=n(111),i=n(0),s=n.n(i),l=function(e){var t=e.url;return s.a.createElement("div",null,s.a.createElement(a.a,{defaultValue:"react",values:[{label:"React",value:"react"},{label:"VueJs",value:"vue"},{label:"Vanilla",value:"vanilla"}]},s.a.createElement(o.a,{value:"react"},s.a.createElement(r.a,{className:"language-jsx"},function(e){return'import {RaguComponent} from "ragu-client-react";\n\n<RaguComponent src="'+e+'" />'}(t))),s.a.createElement(o.a,{value:"vue"},s.a.createElement(r.a,{className:"language-html"},function(e){return'<template>\n    <RaguComponent src="'+e+"\" />\n</template>\n\n<script>\nimport RaguComponent from 'ragu-client-vue';\n\nexport default {\n  name: 'App',\n  components: {\n    RaguComponent\n  }\n}\n<\/script>"}(t))),s.a.createElement(o.a,{value:"vanilla"},s.a.createElement(r.a,{className:"language-html"},function(e){return'<html>\n<head>\n  <script src="https://cdn.jsdelivr.net/npm/ragu-dom@latest/install.js" crossorigin="anonymous"><\/script>\n</head>\n<body>\n  <ragu-component src="'+e+'"></ragu-component>\n</body>\n</html>'}(t)))))}},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(108)),i=(n(122),{title:"Micro-frontends",slug:"/micro-frontends"}),s={unversionedId:"02-01-micro-frontends",id:"02-01-micro-frontends",isDocsHomePage:!1,title:"Micro-frontends",description:"Coined at ThoughtWorks Technology Radar 2016' release. Micro-frontends extends the micro-services ideas into the",source:"@site/docs/02-01-micro-frontends.mdx",slug:"/micro-frontends",permalink:"/docs/micro-frontends",editUrl:"https://github.com/ragu-framework/docs/edit/main/docs/02-01-micro-frontends.mdx",version:"current",sidebar:"docs",previous:{title:"Setting your workspace",permalink:"/docs/setup"},next:{title:"Consuming a micro-frontend",permalink:"/docs/consuming-a-micro-frontend"}},l=[{value:"The micro-frontend API",id:"the-micro-frontend-api",children:[]},{value:"Receiving parameters at the preview",id:"receiving-parameters-at-the-preview",children:[]},{value:"Other properties",id:"other-properties",children:[{value:"props.isServer",id:"propsisserver",children:[]},{value:"props.state",id:"propsstate",children:[]},{value:"From client side",id:"from-client-side",children:[]},{value:"From server side",id:"from-server-side",children:[]}]}],c={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Coined at ThoughtWorks Technology Radar 2016' release. Micro-frontends extends the micro-services ideas into the\nfront-end. Thought composition you can build a distributed front-end with independent deployment and with agnostic\ntechnology."),Object(o.b)("p",null,"Ragu provides a simple and sophisticated API to injects micro-frontend into any application. A Ragu micro-frontend is\nlike a back-end API endpoint where other applications can use. Actually, Ragu micro-frontend usages seems a lot similar\nof using a back-end API."),Object(o.b)("h2",{id:"the-micro-frontend-api"},"The micro-frontend API"),Object(o.b)("p",null,"Now that you have ",Object(o.b)("a",{parentName:"p",href:"/docs/setup"},"setting up our front-end")," let's take a better look into the component API:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="my-mfe.js"',title:'"my-mfe.js"'},"export default () => {\n  return {\n    html: 'Hello, World'\n  }\n}\n")),Object(o.b)("p",null,"To inject the micro-frontend you need to provide the component ",Object(o.b)("inlineCode",{parentName:"p"},"manifest")," URL to one of the clients available."),Object(o.b)("p",null,"You can load your micro-frontend using the vanilla client as showed bellow where ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:3100"),"\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"manifest")," URL:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<html>\n<head>\n  <script src="https://cdn.jsdelivr.net/npm/ragu-dom@latest/install.js" crossorigin="anonymous"><\/script>\n</head>\n<body>\n  <ragu-component src="http://localhost:3100"></ragu-component>\n</body>\n</html>\n')),Object(o.b)("p",null,"The previous example outputs a ",Object(o.b)("inlineCode",{parentName:"p"},"Hello, World")," micro-frontend. Let's say, instead of\n",Object(o.b)("inlineCode",{parentName:"p"},"Hello, World")," we want to receive the name which the micro-frontend will say ",Object(o.b)("inlineCode",{parentName:"p"},"Hello")," to."),Object(o.b)("h1",{id:"receiving-parameters"},"Receiving parameters"),Object(o.b)("p",null,"The micro-frontend receives the name that must be shown by a parameter:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="my-mfe.js"',title:'"my-mfe.js"'},"export default ({params}) => {\n  return {\n    html: `Hello, ${params.name}`\n  }\n}\n")),Object(o.b)("p",null,"To inject the micro-frontend above you must provide the ",Object(o.b)("inlineCode",{parentName:"p"},"params")," as a ",Object(o.b)("inlineCode",{parentName:"p"},"URL")," query parameter:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<ragu-component src="http://localhost:3100/?name=Universe"></ragu-component>\n')),Object(o.b)("h2",{id:"receiving-parameters-at-the-preview"},"Receiving parameters at the preview"),Object(o.b)("p",null,"To receive props at the preview all you must provide them thought query parameters:"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"http://localhost:3100/preview?name=Universe"},"http://localhost:3100/preview?name=Universe")),Object(o.b)("h2",{id:"other-properties"},"Other properties"),Object(o.b)("p",null,"There are few properties that is provided to a micro front-end. This section list them."),Object(o.b)("h3",{id:"propsisserver"},"props.isServer"),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"true")," means that this component is been rendered at the server side:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="my-mfe.js"',title:'"my-mfe.js"'},"export default ({params, isServer}) => {\n  return {\n    html: `Hello, ${params.name} from ${isServer ? 'server' : 'browser'}`\n  }\n}\n")),Object(o.b)("h3",{id:"propsstate"},"props.state"),Object(o.b)("p",null,"This property is used to transit information from server to client. Read more at the Server Side Rendering section."),Object(o.b)("h3",{id:"from-client-side"},"From client side"),Object(o.b)("p",null,"The properties listed bellow are available when ",Object(o.b)("inlineCode",{parentName:"p"},"isServer=false"),"."),Object(o.b)("h4",{id:"propselement"},"props.element"),Object(o.b)("p",null,"The container where the micro-frontend will be injected."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript",metastring:'title="my-mfe.js"',title:'"my-mfe.js"'},"export default ({isServer, element}) => {\n  if (!isServer) {\n    element.addEventListener('click', () => alert('Thanks!'));\n  }\n\n  return {\n    html: `Click me`,\n  }\n}\n")),Object(o.b)("h3",{id:"from-server-side"},"From server side"),Object(o.b)("p",null,"The properties listed bellow are available when ",Object(o.b)("inlineCode",{parentName:"p"},"isServer=true"),"."),Object(o.b)("h4",{id:"propsrequest"},"props.request"),Object(o.b)("p",null,"The express request object: ",Object(o.b)("a",{parentName:"p",href:"https://expressjs.com/pt-br/api.html#req"},"https://expressjs.com/pt-br/api.html#req")),Object(o.b)("h4",{id:"propsconfig"},"props.config"),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ragu-framework/ragu/blob/main/ragu-server/src/config.ts#L34"},"RaguServerConfig"),"."))}p.isMDXComponent=!0}}]);