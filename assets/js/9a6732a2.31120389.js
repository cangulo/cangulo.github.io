"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[2736],{64888:function(e,t,s){var n=s(67294),a=s(84610),o=s(52263);t.Z=function(){var e=(0,o.default)().siteConfig,t=parseInt(e.customFields.hyvorTalkSiteId);return n.createElement("section",null,n.createElement("h2",null,"Comments"),n.createElement(a.Z.Embed,{loadMode:"scroll",websiteId:t}))}},76442:function(e,t,s){s.r(t),s.d(t,{frontMatter:function(){return m},contentTitle:function(){return d},metadata:function(){return p},assets:function(){return g},toc:function(){return f},default:function(){return k}});var n=s(83117),a=s(80102),o=(s(67294),s(3905)),r=s(64888),u=s(46785),i=s(59750),c=s(9741),l=s(38705),h=["components"],m={slug:"bash-scripts",title:"Bash Scripts Cheatsheet",group:"cheatsheets",authors:"cangulo",tags:["bash"]},d=void 0,p={permalink:"/cheatsheets/bash-scripts",editUrl:"https://github.com/cangulo/cangulo.github.io/blob/main/blog/cheatsheets/bash-cheatsheet.mdx",source:"@site/blog/cheatsheets/bash-cheatsheet.mdx",title:"Bash Scripts Cheatsheet",description:"This post list bash commands and scripts I use the most.",date:"2023-11-07T11:41:15.527Z",formattedDate:"November 7, 2023",tags:[{label:"bash",permalink:"/cheatsheets/tags/bash"}],readingTime:.365,truncated:!0,authors:[{name:"Carlos Angulo Mascarell",title:"Software Engineer",url:"https://github.com/cangulo",imageURL:"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png",key:"cangulo"}],prevItem:{title:"AWS Cheatsheet",permalink:"/cheatsheets/aws"},nextItem:{title:"Others commands Cheatsheet",permalink:"/cheatsheets/others"}},g={authorsImageUrls:[void 0]},f=[{value:"Execute a command inside subfolders",id:"execute-a-command-inside-subfolders",children:[],level:2}],b={toc:f};function k(e){var t=e.components,s=(0,a.Z)(e,h);return(0,o.kt)("wrapper",(0,n.Z)({},b,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This post list bash commands and scripts I use the most."),(0,o.kt)("h2",{id:"execute-a-command-inside-subfolders"},"Execute a command inside subfolders"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'function recursive_for_loop { \n    ls -1| until ! read f; do\n        if [ -d $f  -a ! -h $f ];\n        then\n            cd -- "$f";\n            recursive_for_loop\n            echo "### Folder $f"; \n            git status; # replace here your command\n\n            # use recursion to navigate the entire tree; git status;\n            cd ..;\n        fi;\n    done;\n};\nrecursive_for_loop\n')),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://www.baeldung.com/linux/execute-command-directories"},"baeldung.com/linux/execute-command-directories")),(0,o.kt)(l.ZP,{mdxType:"AboutMe"}),(0,o.kt)(c.ZP,{mdxType:"FullExperienceLink"}),(0,o.kt)(i.ZP,{mdxType:"Contact"}),(0,o.kt)(u.ShareDocusaurus,{preSlug:m.group,slug:m.slug,title:m.title,tags:m.tags,mdxType:"ShareDocusaurus"}),(0,o.kt)(r.Z,{mdxType:"Comments"}))}k.isMDXComponent=!0}}]);