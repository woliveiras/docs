(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{77:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return d})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return m})),a.d(t,"default",(function(){return b}));var n=a(3),i=a(8),o=(a(0),a(91)),r=a(101),l=a(99),d={title:"Deployment \ud83d\ude80",slug:"/deployment"},c={unversionedId:"03-01-deployment",id:"03-01-deployment",isDocsHomePage:!1,title:"Deployment \ud83d\ude80",description:"When you are ready to deploy your micro-frontend to a remote server, ragu-cli will make it easy.",source:"@site/docs/03-01-deployment.mdx",slug:"/deployment",permalink:"/docs/deployment",editUrl:"https://github.com/ragu-framework/docs/edit/main/docs/03-01-deployment.mdx",version:"current",sidebar:"docs",previous:{title:"Exposing a micro-frontend",permalink:"/docs/vue/exposing-a-micro-frontend"}},m=[{value:"Building the project to production",id:"building-the-project-to-production",children:[{value:"The <code>baseURL</code> \ud83d\udea8",id:"the-baseurl-",children:[]},{value:"Production server",id:"production-server",children:[]}]},{value:"Static Build (a.k.a. CDN deployment)",id:"static-build-aka-cdn-deployment",children:[{value:"Ragu server x Static Build",id:"ragu-server-x-static-build",children:[]}]}],s={toc:m};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When you are ready to deploy your micro-frontend to a remote server, ",Object(o.b)("inlineCode",{parentName:"p"},"ragu-cli")," will make it easy."),Object(o.b)("h2",{id:"building-the-project-to-production"},"Building the project to production"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ragu-cli build")," command creates a production ready build. You should specify the ",Object(o.b)("inlineCode",{parentName:"p"},"--outputPath")," directory and the\n",Object(o.b)("inlineCode",{parentName:"p"},"--baseUrl"),"."),Object(o.b)(r.a,{binExecution:!0,both:"ragu-cli build --file my-mfe.js --baseurl https://my-mfe.my.org/ --outputPath build",mdxType:"PackageManager"}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If you don't specify the ",Object(o.b)("inlineCode",{parentName:"p"},"ouputPath")," it will assume the default directory ",Object(o.b)("inlineCode",{parentName:"p"},".ragu-components"),"."))),Object(o.b)("h3",{id:"the-baseurl-"},"The ",Object(o.b)("inlineCode",{parentName:"h3"},"baseURL")," \ud83d\udea8"),Object(o.b)("p",null,"Ragu micro-frontends can be deployed anywhere, and it does not need to be deployed at the same domain of the main\napplication. The manifest should contain information about where to Ragu should retrieve the static files.\nFor this reason, the ",Object(o.b)("inlineCode",{parentName:"p"},"--baseUrl")," is required."),Object(o.b)("p",null,"In the example above we are telling Ragu that the micro-frontend will be available at\n",Object(o.b)("strong",{parentName:"p"},Object(o.b)("span",null,"https://my-mfe"),".my.org/"),"."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"After you run the ",Object(o.b)("inlineCode",{parentName:"p"},"build")," it will output at the terminal the list of all micro-frontends manifest location\nwhere they will be available after the deployment. Take a look to ensure that the ",Object(o.b)("inlineCode",{parentName:"p"},"--baseUrl")," is configured properly."))),Object(o.b)("h3",{id:"production-server"},"Production server"),Object(o.b)("p",null,"To start the production server, you ",Object(o.b)("strong",{parentName:"p"},"must provide the same parameters")," that were provided to the ",Object(o.b)("inlineCode",{parentName:"p"},"ragu-cli build"),"\ncommand. Optionally you can provide a ",Object(o.b)("inlineCode",{parentName:"p"},"--port")," to define the port where Ragu server should listen to."),Object(o.b)(r.a,{binExecution:!0,both:"ragu-cli serve --file my-mfe.js --baseurl https://my-mfe.my.org/ --outputPath build --port 80",mdxType:"PackageManager"}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"By default Ragu listen to the port ",Object(o.b)("inlineCode",{parentName:"p"},"3100")," when a ",Object(o.b)("inlineCode",{parentName:"p"},"--port")," is not specified."))),Object(o.b)("h2",{id:"static-build-aka-cdn-deployment"},"Static Build (a.k.a. CDN deployment)"),Object(o.b)("p",null,"If your micro-frontend does not require any ",Object(o.b)("inlineCode",{parentName:"p"},"SSR")," feature (",Object(o.b)("a",{parentName:"p",href:"/docs/server-side-rendering"},"Server Side Rendering section"),")\nyou can use the static build. The static build does not require the Ragu serve and can be deployed at any CDN."),Object(o.b)("p",null,"To create a static build all you need is to change the previous build command from ",Object(o.b)("inlineCode",{parentName:"p"},"build")," to ",Object(o.b)("inlineCode",{parentName:"p"},"static"),"."),Object(o.b)(r.a,{binExecution:!0,both:"ragu-cli static --file my-mfe.js --baseurl https://my-mfe.my.org/ --outputPath build",mdxType:"PackageManager"}),Object(o.b)("p",null,"Now you must deploy the content of the ",Object(o.b)("inlineCode",{parentName:"p"},"build")," directory into your static server/CDN in a way where the ",Object(o.b)("inlineCode",{parentName:"p"},"build")," path\ncontent should be available through at the defined ",Object(o.b)("inlineCode",{parentName:"p"},"--baseurl"),"."),Object(o.b)("h4",{id:"consuming-a-micro-frontend-from-static-build"},"Consuming a micro-frontend from static build"),Object(o.b)("p",null,"The manifest file generated as a ",Object(o.b)("inlineCode",{parentName:"p"},"json")," file. The example above will generate a file called ",Object(o.b)("inlineCode",{parentName:"p"},"build/my-mfe.json")," which\nmust be used as manifest file. For example:"),Object(o.b)(l.a,{url:"https://my-mfe.my.org/my-mfe.json",mdxType:"RaguComponentDemo"}),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"When using static build all ",Object(o.b)("inlineCode",{parentName:"p"},"SSR")," features will be disabled. That means that state files will be ignored."))),Object(o.b)("h3",{id:"ragu-server-x-static-build"},"Ragu server x Static Build"),Object(o.b)("p",null,"You should use Ragu server when you want to enable all the ",Object(o.b)("inlineCode",{parentName:"p"},"SSR")," power to your micro-frontends. Otherwise static build\nis just fine."))}b.isMDXComponent=!0},99:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(102),i=a(104),o=a(105),r=a(0),l=a.n(r),d=function(e){var t=e.url;return l.a.createElement("div",null,l.a.createElement(i.a,{defaultValue:"react",values:[{label:"React",value:"react"},{label:"VueJs",value:"vue"},{label:"Vanilla",value:"vanilla"}]},l.a.createElement(o.a,{value:"react"},l.a.createElement(n.a,{className:"language-jsx"},function(e){return'import {RaguComponent} from "ragu-client-react";\n\n<RaguComponent src="'+e+'" />'}(t))),l.a.createElement(o.a,{value:"vue"},l.a.createElement(n.a,{className:"language-html"},function(e){return'<template>\n    <RaguComponent src="'+e+"\" />\n</template>\n\n<script>\nimport RaguComponent from 'ragu-client-vue';\n\nexport default {\n  name: 'App',\n  components: {\n    RaguComponent\n  }\n}\n<\/script>"}(t))),l.a.createElement(o.a,{value:"vanilla"},l.a.createElement(n.a,{className:"language-html"},function(e){return'<html>\n<head>\n  <script src="https://cdn.jsdelivr.net/npm/ragu-dom@latest/install.js" crossorigin="anonymous"><\/script>\n</head>\n<body>\n  <ragu-component src="'+e+'"></ragu-component>\n</body>\n</html>'}(t)))))}}}]);