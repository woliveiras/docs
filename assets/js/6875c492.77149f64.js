(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{105:function(e,a,t){"use strict";var r=t(0),l=t.n(r),n=t(103),s=t(110),i=t(7),c=t(100),m=t(102),o=t(101),u=(t(56),t(57)),d=t.n(u),g=function(e){return function(a){var t,r=a.id,n=Object(i.a)(a,["id"]),s=Object(o.useThemeConfig)().navbar.hideOnScroll;return r?l.a.createElement(e,n,l.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(c.a)("anchor",(t={},t[d.a.enhancedAnchor]=!s,t)),id:r}),n.children,l.a.createElement("a",{className:"hash-link",href:"#"+r,title:Object(m.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.a.createElement(e,n)}},h={code:function(e){var a=e.children;return"string"==typeof a?a.includes("\n")?l.a.createElement(s.a,e):l.a.createElement("code",e):a},a:function(e){return l.a.createElement(n.a,e)},pre:function(e){var a=e.children;return l.a.createElement(s.a,Object(r.isValidElement)(a)?null==a?void 0:a.props:{children:a})},h1:g("h1"),h2:g("h2"),h3:g("h3"),h4:g("h4"),h5:g("h5"),h6:g("h6")};a.a=h},108:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var r=t(0),l=t.n(r),n=t(100),s=t(103),i=t(58),c=t.n(i);function m(e){var a=e.sidebar;return 0===a.items.length?null:l.a.createElement("div",{className:Object(n.a)(c.a.sidebar,"thin-scrollbar")},l.a.createElement("h3",{className:c.a.sidebarItemTitle},a.title),l.a.createElement("ul",{className:c.a.sidebarItemList},a.items.map((function(e){return l.a.createElement("li",{key:e.permalink,className:c.a.sidebarItem},l.a.createElement(s.a,{isNavLink:!0,to:e.permalink,className:c.a.sidebarItemLink,activeClassName:c.a.sidebarItemLinkActive},e.title))}))))}},113:function(e,a,t){"use strict";var r=t(0),l=t.n(r),n=t(100),s=t(104),i=t(102),c=t(103),m=t(105),o=t(112),u=t(60),d=t.n(u),g=t(101);a.a=function(e){var a,t,r=(a=Object(g.usePluralForm)().selectMessage,function(e){var t=Math.ceil(e);return a(t,Object(i.b)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),u=e.children,h=e.frontMatter,p=e.metadata,E=e.truncated,b=e.isBlogPostPage,v=void 0!==b&&b,f=p.date,N=p.formattedDate,k=p.permalink,w=p.tags,T=p.readingTime,_=h.author,O=h.title,P=h.image,j=h.keywords,y=h.author_url||h.authorURL,L=h.author_title||h.authorTitle,M=h.author_image_url||h.authorImageURL;return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{keywords:j,image:P}),l.a.createElement("article",{className:v?void 0:"margin-bottom--xl"},(t=v?"h1":"h2",l.a.createElement("header",null,l.a.createElement(t,{className:Object(n.a)("margin-bottom--sm",d.a.blogPostTitle)},v?O:l.a.createElement(c.a,{to:k},O)),l.a.createElement("div",{className:"margin-vert--md"},l.a.createElement("time",{dateTime:f,className:d.a.blogPostDate},N,T&&l.a.createElement(l.a.Fragment,null," \xb7 ",r(T)))),l.a.createElement("div",{className:"avatar margin-vert--md"},M&&l.a.createElement(c.a,{className:"avatar__photo-link avatar__photo",href:y},l.a.createElement("img",{src:M,alt:_})),l.a.createElement("div",{className:"avatar__intro"},_&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",{className:"avatar__name"},l.a.createElement(c.a,{href:y},_)),l.a.createElement("small",{className:"avatar__subtitle"},L)))))),l.a.createElement("div",{className:"markdown"},l.a.createElement(s.a,{components:m.a},u)),(w.length>0||E)&&l.a.createElement("footer",{className:"row margin-vert--lg"},w.length>0&&l.a.createElement("div",{className:"col"},l.a.createElement("strong",null,l.a.createElement(i.a,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),w.map((function(e){var a=e.label,t=e.permalink;return l.a.createElement(c.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),E&&l.a.createElement("div",{className:"col text--right"},l.a.createElement(c.a,{to:p.permalink,"aria-label":"Read more about "+O},l.a.createElement("strong",null,l.a.createElement(i.a,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},85:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),n=t(107),s=t(113),i=t(103),c=t(108),m=t(102),o=t(101);function u(e){var a,t=e.tagName,r=e.count,n=(a=Object(o.usePluralForm)().selectMessage,function(e){return a(e,Object(m.b)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return l.a.createElement(m.a,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:n(r),tagName:t}},'{nPosts} tagged with "{tagName}"')}a.default=function(e){var a=e.metadata,t=e.items,r=e.sidebar,o=a.allTagsPath,d=a.name,g=a.count;return l.a.createElement(n.a,{title:'Posts tagged "'+d+'"',description:'Blog | Tagged "'+d+'"',wrapperClassName:"blog-wrapper",searchMetadatas:{tag:"blog_tags_posts"}},l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--3"},l.a.createElement(c.a,{sidebar:r})),l.a.createElement("main",{className:"col col--7"},l.a.createElement("h1",null,l.a.createElement(u,{count:g,tagName:d})),l.a.createElement(i.a,{href:o},l.a.createElement(m.a,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags")),l.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return l.a.createElement(s.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},l.a.createElement(a,null))})))))))}}}]);