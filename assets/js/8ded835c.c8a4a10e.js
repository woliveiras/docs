(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{113:function(e,t,n){"use strict";var o=n(0),r=n.n(o),i=n(117),a=n(108),c=n(56),s=n.n(c);var u=37,l=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,d=e.values,p=e.groupId,h=e.className,m=Object(i.a)(),f=m.tabGroupChoices,v=m.setTabGroupChoices,g=Object(o.useState)(c),y=g[0],b=g[1],C=o.Children.toArray(e.children),w=[];if(null!=p){var A=f[p];null!=A&&A!==y&&d.some((function(e){return e.value===A}))&&b(A)}var j=function(e){var t=e.target,n=w.indexOf(t),o=C[n].props.value;b(o),null!=p&&(v(p,o),setTimeout((function(){var e,n,o,r,i,a,c,u;(e=t.getBoundingClientRect(),n=e.top,o=e.left,r=e.bottom,i=e.right,a=window,c=a.innerHeight,u=a.innerWidth,n>=0&&i<=u&&r<=c&&o>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.a.tabItemActive),setTimeout((function(){return t.classList.remove(s.a.tabItemActive)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case l:var o=w.indexOf(e.target)+1;n=w[o]||w[0];break;case u:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(a.a)("tabs",{"tabs--block":n},h)},d.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:Object(a.a)("tabs__item",s.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:O,onFocus:j,onClick:j},n)}))),t?Object(o.cloneElement)(C.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},C.map((function(e,t){return Object(o.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},114:function(e,t,n){"use strict";var o=n(0),r=n.n(o);t.a=function(e){var t=e.children,n=e.hidden,o=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},121:function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(t){i(t)}}function c(e){try{s(o.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.RaguComponent=t.defaultComponentLoader=void 0;const r=n(122),i=n(123),a=n(124),c=n(125),s=n(135);t.defaultComponentLoader=new r.ComponentLoader({dependencyContext:new i.DependencyContext(new a.ScriptLoader),jsonpGateway:new c.JsonpGateway(document),fetchGateway:new s.FetchGateway});t.RaguComponent=class{constructor(e,n=t.defaultComponentLoader){this.element=e,this.componentLoader=n}fetchComponent(e){return o(this,void 0,void 0,(function*(){const t=this.element.querySelector("script[data-ragu-ssr]");t?yield this.fetchComponentFromSSRScript(t):yield this.fetchComponentFromServer(e)}))}fetchComponentFromServer(e){this.disconnectComponent(),this.componentLoader.load(e).then((e=>{this.component=e,this.element.dispatchEvent(new CustomEvent("ragu:fetched",{detail:this.component})),this.element.innerHTML=this.component.html||"",this.render()})).catch((e=>{this.element.dispatchEvent(new CustomEvent("ragu:fetch-fail",{detail:e}))}))}disconnectComponent(){var e,t;this.component&&(null===(t=(e=this.component).disconnect)||void 0===t||t.call(e,this.element))}fetchComponentFromSSRScript(e){return o(this,void 0,void 0,(function*(){const t=JSON.parse(e.textContent||"{}");e.remove(),this.component=yield this.componentLoader.hydrationFactory(t),yield this.render()}))}render(){var e;null===(e=this.component)||void 0===e||e.render(this.element).then((()=>{this.element.dispatchEvent(new CustomEvent("ragu:hydrated",{detail:this.component}))}))}}},122:function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(t){i(t)}}function c(e){try{s(o.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.ComponentLoader=void 0;const r=n(134);t.ComponentLoader=class{constructor(e){this.context=e}load(e){return o(this,void 0,void 0,(function*(){const t=yield this.componentResponseFor(e);return yield this.hydrationFactory(t)}))}componentResponseFor(e){return o(this,void 0,void 0,(function*(){const t=r.parseURL(e);if("json"===t.extension){const n=yield this.context.fetchGateway.fetch(e);return Object.assign(Object.assign({},n),{props:t.props})}return yield this.context.jsonpGateway.fetchJsonp(e)}))}hydrationFactory(e){return o(this,void 0,void 0,(function*(){e.styles&&e.styles.length&&(yield this.context.dependencyContext.loadStyles(e.styles));const t=this.context;return Object.assign(Object.assign({},e),{disconnect(e){var t;return o(this,void 0,void 0,(function*(){const n=this.component;yield this.hydratePromise,null===(t=null==n?void 0:n.disconnect)||void 0===t||t.call(n,e)}))},runtimeComponent(e){return o(this,void 0,void 0,(function*(){const t=e.default||e;return t.resolve?yield e.resolve():t}))},getRenderFunction(){var e,t;return void 0===this.html?null===(e=this.component)||void 0===e?void 0:e.render:null===(t=this.component)||void 0===t?void 0:t.hydrate},render(n){return o(this,void 0,void 0,(function*(){const o=e.dependencies||[];yield t.dependencyContext.loadAll(o),yield t.dependencyContext.load({dependency:e.client});const r=window[e.resolverFunction];this.component=yield this.runtimeComponent(r);const i=this.getRenderFunction();this.hydratePromise=null==i?void 0:i(n,this.props,this.state),yield this.hydratePromise}))}})}))}}},123:function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(t){i(t)}}function c(e){try{s(o.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.DependencyContext=void 0;class r{constructor(e,t,n){this.scriptLoader=e,this.dependency=t,this.globalVariable=n,this.globalVariable&&void 0!==window[this.globalVariable]?this.resolvePromise=Promise.resolve():this.resolvePromise=this.scriptLoader.load(this.dependency)}resolve(){return this.resolvePromise}resolves(e){return e.globalVariable&&e.globalVariable===this.globalVariable||e.dependency===this.dependency}}t.DependencyContext=class{constructor(e){this.scriptLoader=e,this.dependencies=[]}load(e){return this.getOrCreateDependency(e).resolve()}loadAll(e){return o(this,void 0,void 0,(function*(){for(let t of this.groupDependencies(e))yield this.loadDependencyGroup(t)}))}loadStyles(e){return o(this,void 0,void 0,(function*(){yield Promise.all(e.map((e=>this.loadStyle(e))))}))}loadStyle(e){const t=document.createElement("link");return t.setAttribute("href",e),t.setAttribute("rel","stylesheet"),new Promise((n=>{document.head.querySelector(`link[href="${e}"]`)?n():(t.onload=()=>n(),t.onerror=()=>n(),document.head.appendChild(t))}))}loadDependencyGroup(e){return Promise.all(e.map((e=>this.load(e))))}groupDependencies(e){const t={};for(let r of e){const e=r.order||0;t[e]=t[e]||[],t[e].push(r)}const n=Object.keys(t).sort(),o=[];for(let r of n)o.push(t[parseInt(r)]);return Object.values(t)}getOrCreateDependency(e){const t=this.dependencies.find((t=>t.resolves(e)));if(t)return t;const n=new r(this.scriptLoader,e.dependency,e.globalVariable);return this.dependencies.push(n),n}}},124:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ScriptLoader=void 0;t.ScriptLoader=class{load(e){const t=document.createElement("script");t.src=e;const n=new Promise(((e,n)=>{t.onload=()=>e(),t.onerror=n}));return document.head.appendChild(t),n}}},125:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.JsonpGateway=void 0;class o{constructor(e,t){this.document=e,this.url=t,this.id=`${Date.now()}_${Math.ceil(1e7*Math.random())}`,this.script=this.createScript()}createScript(){const e=this.document.createElement("script");return e.src=this.getScriptSRC(),e.id=this.getScriptID(),e}fetch(){const e=new Promise(((e,t)=>{window[this.getCallbackFunctionName()]=t=>{this.cleanup(),e(t)},this.script.onerror=e=>{this.cleanup(),t(e)}}));return this.document.head.appendChild(this.script),e}cleanup(){delete window[this.getCallbackFunctionName()],this.script.remove()}getScriptSRC(){const e=new URL(this.url);return e.searchParams.append("callback",this.getCallbackFunctionName()),e.toString()}getCallbackFunctionName(){return`${o.callbackFunctionPrefix}${this.id}`}getScriptID(){return`${o.scriptIdPrefix}${this.id}`}}o.scriptIdPrefix="ragu_jsonp_script_",o.callbackFunctionPrefix="raguJSONP_";t.JsonpGateway=class{constructor(e){this.document=e}fetchJsonp(e){return new o(this.document,e).fetch()}}},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(115),r=n(113),i=n(114),a=n(0),c=n.n(a),s=function(e){var t=e.url;return c.a.createElement("div",null,c.a.createElement(r.a,{defaultValue:"react",values:[{label:"React",value:"react"},{label:"VueJs",value:"vue"},{label:"Vanilla",value:"vanilla"}]},c.a.createElement(i.a,{value:"react"},c.a.createElement(o.a,{className:"language-jsx"},function(e){return'import {RaguComponent} from "ragu-client-react";\n\n<RaguComponent src="'+e+'" />'}(t))),c.a.createElement(i.a,{value:"vue"},c.a.createElement(o.a,{className:"language-html"},function(e){return'<template>\n    <RaguComponent src="'+e+"\" />\n</template>\n\n<script>\nimport RaguComponent from 'ragu-client-vue';\n\nexport default {\n  name: 'App',\n  components: {\n    RaguComponent\n  }\n}\n<\/script>"}(t))),c.a.createElement(i.a,{value:"vanilla"},c.a.createElement(o.a,{className:"language-html"},function(e){return'<html>\n<head>\n  <script src="https://cdn.jsdelivr.net/npm/ragu-dom@latest/install.js" crossorigin="anonymous"><\/script>\n</head>\n<body>\n  <ragu-component src="'+e+'"></ragu-component>\n</body>\n</html>'}(t)))))}},132:function(e,t,n){"use strict";var o,r=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});t.__esModule=!0,t.RaguComponent=void 0;var i=n(0),a=n(133),c=function(e){function t(t){var n=e.call(this,t)||this;return n.ref=i.createRef(),n}return r(t,e),t.prototype.render=function(){return i.createElement(this.props.wrapper||"div",{ref:this.ref})},t.prototype.componentDidMount=function(){this.registerRaguDom()},t.prototype.shouldComponentUpdate=function(e,t,n){return this.props.src!==e.src&&(this.raguDOMComponent.disconnectComponent(),!0)},t.prototype.registerRaguDom=function(){var e=this;this.props.prefetchResponse&&(this.ref.current.innerHTML=this.props.prefetchResponse),this.ref.current.addEventListener("ragu:fetched",(function(){e.props.onFetchCompleted&&e.props.onFetchCompleted()})),this.ref.current.addEventListener("ragu:fetch-fail",(function(){e.props.onFetchFail&&e.props.onFetchFail()})),this.ref.current.addEventListener("ragu:hydrated",(function(){e.props.onHydrateCompleted&&e.props.onHydrateCompleted()})),this.raguDOMComponent=new a.RaguComponent(this.ref.current,this.props.loader),this.raguDOMComponent.fetchComponent(this.props.src)},t.prototype.componentDidUpdate=function(){this.registerRaguDom()},t.prototype.componentWillUnmount=function(){this.raguDOMComponent.disconnectComponent()},t}(i.Component);t.RaguComponent=c},133:function(e,t,n){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(121),t),r(n(136),t),r(n(122),t),r(n(123),t),r(n(125),t),r(n(124),t)},134:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parseURL=void 0,t.parseURL=e=>{const t=new URL(e);return{url:e,extension:o(t),props:r(t)}};const o=e=>{var t;const n=e.pathname.split(".");if(1!==n.length)return null===(t=null==n?void 0:n.pop())||void 0===t?void 0:t.trim()},r=e=>{const t={};return e.searchParams.forEach(((e,n)=>{t[n]=e})),t}},135:function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(t){i(t)}}function c(e){try{s(o.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.FetchGateway=void 0;t.FetchGateway=class{fetch(e){return o(this,void 0,void 0,(function*(){const t=yield fetch(e);if(!t.ok)throw new Error(`Error on Fetch: ${yield t.text()}`);return yield t.json()}))}}},136:function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{s(o.next(e))}catch(t){i(t)}}function c(e){try{s(o.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.registerRaguComponent=void 0;const r=n(121);t.registerRaguComponent=e=>{class t extends HTMLElement{constructor(){super(),this.firstFetchPerformed=!1,this.component=new r.RaguComponent(this,e)}static get observedAttributes(){return["src"]}attributeChangedCallback(){return o(this,void 0,void 0,(function*(){this.firstFetchPerformed&&(yield this.setRaguComponent())}))}connectedCallback(){return o(this,void 0,void 0,(function*(){yield this.waitToFullParse(),this.firstFetchPerformed=!0,yield this.setRaguComponent()}))}setRaguComponent(){return o(this,void 0,void 0,(function*(){const e=this.getAttribute("src");e&&(yield this.component.fetchComponent(e))}))}waitToFullParse(){return o(this,void 0,void 0,(function*(){yield new Promise((e=>{setTimeout((()=>e()))}))}))}disconnectedCallback(){this.component.disconnectComponent()}}window.customElements.define("ragu-component",t)}},137:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/front-end-injection-281a6822c7f5efaebf61ef4398834530.png"},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n.n(o),i=n(128),a=n(8);var c=function(e){var t=e.children,n=e.fallback;return a.a.canUseDOM&&null!=t?r.a.createElement(r.a.Fragment,null,t()):n||null},s=function(e){var t=e.name,a=e.url,s=e.hideDemo,u=Object(o.useState)(!1),l=u[0],d=u[1],p=Object(o.useState)(!1),h=p[0],m=p[1],f=Object(o.useState)(!1),v=f[0],g=f[1];return r.a.createElement("div",{className:"microfrontend"},r.a.createElement("h4",null,t),!s&&r.a.createElement(i.a,{url:a}),!(l&&h)&&r.a.createElement("div",{className:"microfrontend-placeholder"},r.a.createElement("button",{className:"microfrontend-placeholder-button "+(v?"failed":""),onClick:function(){m(!1),g(!1),d(!0)}},v?'Fail to load "'+a+'" is the micro-frontend server running? Click to try again!':l?"Loading...":"Click to load "+t+" Micro-frontend here.")),l&&r.a.createElement("div",{className:h?"microfrontend-wrapper":""},h&&r.a.createElement("img",{src:"data:image/png;base64,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",className:"microfrontend-close",onClick:function(){m(!1),d(!1)}}),r.a.createElement(c,null,(function(){var e=n(132).RaguComponent;return r.a.createElement(e,{src:a,onFetchCompleted:function(){return m(!0)},onFetchFail:function(){d(!1),g(!0)}})}))))}},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n(0),r=n.n(o),i=n(139),a=function(){return r.a.createElement("div",null,r.a.createElement(i.a,{name:"Onboarding Micro-frontend",url:"https://ragu-framework.github.io/ragu-cli/mfe.json?bg=true"}),r.a.createElement(i.a,{name:"Core Concept Micro-frontend",url:"https://ragu-framework.github.io/ragu/main-features-mfe.json?bg=true"}))}},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var o=n(3),r=n(7),i=(n(0),n(112)),a=n(142),c={title:"Consuming a micro-frontend",slug:"/consuming-a-micro-frontend"},s={unversionedId:"02-02-consuming-a-micro-frontend",id:"02-02-consuming-a-micro-frontend",isDocsHomePage:!1,title:"Consuming a micro-frontend",description:"Ragu can inject a front-end made by any technology into any application.",source:"@site/docs/02-02-consuming-a-micro-frontend.mdx",slug:"/consuming-a-micro-frontend",permalink:"/docs/consuming-a-micro-frontend",editUrl:"https://github.com/ragu-framework/docs/edit/main/docs/02-02-consuming-a-micro-frontend.mdx",version:"current",sidebar:"docs",previous:{title:"Micro-frontends",permalink:"/docs/micro-frontends"},next:{title:"Server Side Rendering",permalink:"/docs/server-side-rendering"}},u=[{value:"Injecting a micro-frontend",id:"injecting-a-micro-frontend",children:[]}],l={toc:u};function d(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Ragu can inject a front-end made by any technology into any application."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Front-end injection",src:n(137).default})),Object(i.b)("p",null,"It is specially useful for legacy system modernization since you don't\nneed to replace your entire application at once."),Object(i.b)("h3",{id:"injecting-a-micro-frontend"},"Injecting a micro-frontend"),Object(i.b)("p",null,"To inject a micro-frontend you must provide a ",Object(i.b)("inlineCode",{parentName:"p"},"manifest")," url for one of the available Ragu clients."),Object(i.b)("p",null,"Parameters should be passed as query parameters at the URL. Check it out some micro-frontends from Ragu's homepage been\nloaded here:"),Object(i.b)(a.a,{mdxType:"RaguWebsiteLoader"}))}d.isMDXComponent=!0}}]);