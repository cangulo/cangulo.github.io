"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[4022],{64888:function(e,t,a){var o=a(67294),r=a(84610),n=a(52263);t.Z=function(){var e=(0,n.default)().siteConfig,t=parseInt(e.customFields.hyvorTalkSiteId);return o.createElement("section",null,o.createElement("h2",null,"Comments"),o.createElement(r.Z.Embed,{loadMode:"scroll",websiteId:t}))}},80472:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return m},contentTitle:function(){return k},metadata:function(){return h},assets:function(){return d},toc:function(){return g},default:function(){return b}});var o=a(83117),r=a(80102),n=(a(67294),a(3905)),l=a(64888),i=a(46785),s=a(59750),c=a(9741),u=a(38705),p=["components"],m={slug:"vivaldi",title:"Vivaldi Cheatsheet",group:"cheatsheets",authors:"cangulo",tags:["vivaldi","web-browser","browser","productivity"]},k=void 0,h={permalink:"/cheatsheets/vivaldi",editUrl:"https://github.com/cangulo/cangulo.github.io/blob/main/blog/cheatsheets/vivaldi/vivadi-cheatsheet.mdx",source:"@site/blog/cheatsheets/vivaldi/vivadi-cheatsheet.mdx",title:"Vivaldi Cheatsheet",description:"This post explains the next topics:",date:"2023-08-01T06:27:56.225Z",formattedDate:"August 1, 2023",tags:[{label:"vivaldi",permalink:"/cheatsheets/tags/vivaldi"},{label:"web-browser",permalink:"/cheatsheets/tags/web-browser"},{label:"browser",permalink:"/cheatsheets/tags/browser"},{label:"productivity",permalink:"/cheatsheets/tags/productivity"}],readingTime:.92,truncated:!0,authors:[{name:"Carlos Angulo Mascarell",title:"Software Engineer",url:"https://github.com/cangulo",imageURL:"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png",key:"cangulo"}],nextItem:{title:"WSL Cheatsheet",permalink:"/cheatsheets/wsl"}},d={authorsImageUrls:[void 0]},g=[{value:"How to create a bookmarklets that copy JIRA tickets from the url",id:"how-to-create-a-bookmarklets-that-copy-jira-tickets-from-the-url",children:[],level:2},{value:"References",id:"references",children:[],level:2}],v={toc:g};function b(e){var t=e.components,k=(0,r.Z)(e,p);return(0,n.kt)("wrapper",(0,o.Z)({},v,k,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This post explains the next topics:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"some tips for using ",(0,n.kt)("a",{parentName:"li",href:"https://vivaldi.com"},"Vivalid Web Browser")," as creating macros, bookmarklets and shortcuts")),(0,n.kt)("h2",{id:"how-to-create-a-bookmarklets-that-copy-jira-tickets-from-the-url"},"How to create a bookmarklets that copy JIRA tickets from the url"),(0,n.kt)("p",null,"target JIRA urls: ",(0,n.kt)("a",{parentName:"p",href:"https://cangulo.atlassian.net/browse/BLOG-8"},"https://cangulo.atlassian.net/browse/BLOG-8")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to bookmarks"),(0,n.kt)("li",{parentName:"ol"},"Create a new one"),(0,n.kt)("li",{parentName:"ol"},"In the url part, ",(0,n.kt)("strong",{parentName:"li"},"paste but do not save")," the next code")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"javascript:(function() {\n  var url = window.location.href;\n  var pattern = /\\/browse\\/([^\\/]+)/;\n  var match = pattern.exec(url);\n  var key = match ? match[1] : null;\n  if (key) {\n    var tempInput = document.createElement('input');\n    document.body.appendChild(tempInput);\n    tempInput.value = key;\n    tempInput.select();\n    document.execCommand('copy');\n    document.body.removeChild(tempInput);\n    alert('Key copied: ' + key);\n    location.reload();\n  } else {\n    alert('No key found in the URL.');\n    location.reload();\n  }\n})();\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Code generate using ChatGPT. Request: give me a  Bookmarklets for Vivaldi Web Browser which copy current url")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Navigate to the begining, the ",(0,n.kt)("inlineCode",{parentName:"li"},"javascript")," part was deleted, type a space and rewrite ",(0,n.kt)("inlineCode",{parentName:"li"},"javascript"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"added-bookmark",src:a(94900).Z})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"add a nickname so it is easy to call, in my case ccu (copy current url)"),(0,n.kt)("li",{parentName:"ol"},"Test it")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"test-bookmarklets.gif",src:a(30204).Z})),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://forum.vivaldi.net/topic/84388/strange-behavior-for-bookmarklets"},"Strange behavior for bookmarklets")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://forum.vivaldi.net/topic/54337/guide-useful-bookmarklets"},"Guide | Useful Bookmarklets"))),(0,n.kt)(u.ZP,{mdxType:"AboutMe"}),(0,n.kt)(c.ZP,{mdxType:"FullExperienceLink"}),(0,n.kt)(s.ZP,{mdxType:"Contact"}),(0,n.kt)(i.ShareDocusaurus,{preSlug:m.group,slug:m.slug,title:m.title,tags:m.tags,mdxType:"ShareDocusaurus"}),(0,n.kt)(l.Z,{mdxType:"Comments"}))}b.isMDXComponent=!0},94900:function(e,t,a){t.Z=a.p+"assets/images/added-bookmark-cf016eeed2981b03d0052555de5a5c8b.gif"},30204:function(e,t,a){t.Z=a.p+"assets/images/test-bookmarklets-ca8f056b3043f0c1f5e613ab477d1131.gif"}}]);