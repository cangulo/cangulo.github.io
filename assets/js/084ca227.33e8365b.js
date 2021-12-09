"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[2885],{4538:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(7294)),l=r(n(5697));function r(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.label,n=e.link;return n?a.default.createElement("a",{href:n},a.default.createElement("p",{style:{textAlign:"center"}},null!=t?t:"File Link")):a.default.createElement("p",{style:{textAlign:"center"}},null!=t?t:"")}i.propTypes={label:l.default.string.isRequired,link:l.default.string};var o=i;t.default=o},6785:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"CaptionComponent",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"CaptionDocusaurus",{enumerable:!0,get:function(){return l.default}});var a=r(n(4538)),l=r(n(9318));function r(e){return e&&e.__esModule?e:{default:e}}},2680:function(e,t,n){n.d(t,{ZP:function(){return u}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=["components"],o={toc:[{value:"About me",id:"about-me",children:[],level:2}]};function u(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"about-me"},"About me"),(0,r.kt)("p",null,"I'm a Software Engineer at ",(0,r.kt)("a",{parentName:"p",href:"https://ohpen.com"},"Ohpen"),". I have strong experience with dotnet technologies, AWS and Terraform. I have also worked with Front-End languages as JavaScript, Angular and React. I'm a challenge-seeker person , I think all challenges are opportunities to grow. Feel free to contact me via LinkedIn."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/cangulo/cangulo/raw/main/profile_picture_aboutme_post_area.png",alt:"profile image"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Per aspera ad astra.")),(0,r.kt)("p",null,"LinkedIn - ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/angulomascarell"},"Carlos Angulo Mascarell"),(0,r.kt)("br",{parentName:"p"}),"\n","Twitter - ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/angulomascarell"},"@AnguloMascarell"),(0,r.kt)("br",{parentName:"p"}),"\n","GitHub - ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cangulo"},"Carlos Angulo Mascarell - cangulo"),(0,r.kt)("br",{parentName:"p"}),"\n","Personal Web Site - ",(0,r.kt)("a",{parentName:"p",href:"https://cangulo.github.io"},"cangulo.github.io")))}u.isMDXComponent=!0},9318:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(7294)),l=o(n(5697)),r=o(n(2263)),i=n(6785);function o(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.label,n=e.link,l=e.linkIsRelative,o=(0,r.default)().siteConfig.customFields.rawGitUrl,u=l?o.concat(n):n;return a.default.createElement(i.CaptionComponent,{label:t,link:u})}u.propTypes={label:l.default.string.isRequired,link:l.default.string.isRequired,linkIsRelative:l.default.bool.isRequired};var s=u;t.default=s},4888:function(e,t,n){var a=n(7294),l=n(4610),r=n(2263);t.Z=function(){var e=(0,r.default)().siteConfig,t=parseInt(e.customFields.hyvorTalkSiteId);return a.createElement("section",null,a.createElement("h2",null,"Comments"),a.createElement(l.Z.Embed,{loadMode:"scroll",websiteId:t}))}},4473:function(e,t,n){var a=n(7294),l=n(5697),r=n.n(l),i=n(3597),o=n(7332),u=n(6616),s=n(7385),c=n(8137),p=n(6339),m=n(2834),g=n(9275),d=n(8168),h=n(4276),f=n(2263);function k(e){var t=e.slug,n=e.title,l=e.tags,r=(0,f.default)().siteConfig.url+"/"+t;return a.createElement("div",null,a.createElement("h2",null,"Did you like it? Share It!"),a.createElement(i.Z,{url:r,title:n},a.createElement(o.Z,{size:32,round:!0})),a.createElement(u.Z,{url:r,title:n,via:"AnguloMascarell",hashtags:null!=l?l:""},a.createElement(s.Z,{size:32,round:!0})),a.createElement(c.Z,{subject:"Check this post about "+n,body:"Hi there, check the next post: "+n+" \n\n",url:r},a.createElement(p.Z,{size:32,round:!0})),a.createElement(m.Z,{url:r,title:n},a.createElement(g.Z,{size:32,round:!0})),a.createElement(d.Z,{title:n,url:r},a.createElement(h.Z,{size:32,round:!0})),a.createElement("br",{style:{marginBottom:"15px"}}))}k.propTypes={slug:r().string.isRequired,title:r().string.isRequired,tags:r().array.isRequired},t.Z=k},1663:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return c},toc:function(){return p},default:function(){return g}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=(n(4473),n(6785),n(4888),n(2680),["components"]),o={slug:"git",title:"Git Cheatsheet",authors:"cangulo",tags:["git","githooks","alias"]},u=void 0,s={permalink:"/cheatsheets/git",editUrl:"https://github.com/cangulo/cangulo.github.io/blob/main/blog/cheatsheets/git/git-cheatsheet.mdx",source:"@site/blog/cheatsheets/git/git-cheatsheet.mdx",title:"Git Cheatsheet",description:"This post explains the next topics:",date:"2021-12-09T01:38:13.581Z",formattedDate:"December 9, 2021",tags:[{label:"git",permalink:"/cheatsheets/tags/git"},{label:"githooks",permalink:"/cheatsheets/tags/githooks"},{label:"alias",permalink:"/cheatsheets/tags/alias"}],readingTime:2.9,truncated:!0,authors:[{name:"Carlos Angulo Mascarell",title:"Software Engineer",url:"https://github.com/cangulo",imageURL:"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png",key:"cangulo"}],nextItem:{title:"Terraform Cheatsheet",permalink:"/cheatsheets/terraform"}},c={authorsImageUrls:[void 0]},p=[],m={toc:p};function g(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This post explains the next topics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the git commands I use the most"),(0,r.kt)("li",{parentName:"ul"},"some git ",(0,r.kt)("em",{parentName:"li"},"alias")," to avoid typing long commands\ud83d\ude01\ud83d\udc4c")))}g.isMDXComponent=!0}}]);