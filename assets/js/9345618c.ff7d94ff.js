"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[3087],{64888:function(e,t,s){var n=s(67294),a=s(84610),i=s(52263);t.Z=function(){var e=(0,i.default)().siteConfig,t=parseInt(e.customFields.hyvorTalkSiteId);return n.createElement("section",null,n.createElement("h2",null,"Comments"),n.createElement(a.Z.Embed,{loadMode:"scroll",websiteId:t}))}},78087:function(e,t,s){s.r(t),s.d(t,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return d},assets:function(){return f},toc:function(){return g},default:function(){return k}});var n=s(83117),a=s(80102),i=(s(67294),s(3905)),r=s(64888),l=s(46785),o=s(26684),u=s(93511),c=s(84964),h=["components"],m={slug:"wsl",title:"WSL Cheatsheet",group:"cheatsheets",authors:"cangulo",tags:["wsl","linux","windows-terminal"]},p=void 0,d={permalink:"/cheatsheets/wsl",editUrl:"https://github.com/cangulo/cangulo.github.io/blob/main/blog/cheatsheets/wsl/wsl-cheatsheet.mdx",source:"@site/blog/cheatsheets/wsl/wsl-cheatsheet.mdx",title:"WSL Cheatsheet",description:"This post explains the next topics:",date:"2024-07-09T23:41:11.311Z",formattedDate:"July 9, 2024",tags:[{label:"wsl",permalink:"/cheatsheets/tags/wsl"},{label:"linux",permalink:"/cheatsheets/tags/linux"},{label:"windows-terminal",permalink:"/cheatsheets/tags/windows-terminal"}],readingTime:.625,truncated:!0,authors:[{name:"Carlos Angulo Mascarell",title:"Software Engineer",url:"https://github.com/cangulo",imageURL:"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png",key:"cangulo"}],prevItem:{title:"Vivaldi Cheatsheet",permalink:"/cheatsheets/vivaldi"},nextItem:{title:"Terraform Cheatsheet",permalink:"/cheatsheets/terraform"}},f={authorsImageUrls:[void 0]},g=[{value:"Format bash scripts for been used in Ubuntu",id:"format-bash-scripts-for-been-used-in-ubuntu",children:[{value:"User Case",id:"user-case",children:[],level:3}],level:2},{value:"References",id:"references",children:[],level:2}],b={toc:g};function k(e){var t=e.components,s=(0,a.Z)(e,h);return(0,i.kt)("wrapper",(0,n.Z)({},b,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This post explains the next topics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"some tips when using the WSL (Windows Subsystem for Linux)")),(0,i.kt)("h2",{id:"format-bash-scripts-for-been-used-in-ubuntu"},"Format bash scripts for been used in Ubuntu"),(0,i.kt)("h3",{id:"user-case"},"User Case"),(0,i.kt)("p",null,"Let's say you are using Windows but you have some bash scripts for a Pipeline (Bitbucket or GH Action) you need to modify, if you install Ubuntu in the WSL you can call and tests those scripts. The only problems is that sometimes there is a formatting issue when Ubuntu tries to read them, the next code fix it:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sed -i 's/\\r//' scripts/*.sh"),"          ;`"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'bashScripts=$(find ./ -type f -name "*.sh") ;\\\nfor script in "${bashScripts[@]}"; do  \\\n    sed -i \'s/\\r//\' $script; \\\ndone\n')),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/wsl/"},"Windows Subsystem for Linux Documentation - Microsoft"))),(0,i.kt)(c.ZP,{mdxType:"AboutMe"}),(0,i.kt)(u.ZP,{mdxType:"FullExperienceLink"}),(0,i.kt)(o.ZP,{mdxType:"Contact"}),(0,i.kt)(l.ShareDocusaurus,{preSlug:m.group,slug:m.slug,title:m.title,tags:m.tags,mdxType:"ShareDocusaurus"}),(0,i.kt)(r.Z,{mdxType:"Comments"}))}k.isMDXComponent=!0}}]);