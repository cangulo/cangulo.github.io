"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[2736],{64888:function(e,t,n){var s=n(67294),a=n(76243),o=n(52263);t.Z=function(){var e=(0,o.default)().siteConfig,t=parseInt(e.customFields.hyvorTalkSiteId);return s.createElement("section",null,s.createElement("h2",null,"Comments"),s.createElement(a.HW,{loadMode:"scroll","website-id":t,"page-id":""}))}},76442:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return d},metadata:function(){return p},assets:function(){return g},toc:function(){return f},default:function(){return k}});var s=n(83117),a=n(80102),o=(n(67294),n(3905)),r=n(64888),i=n(46785),u=n(26684),c=n(93511),l=n(84964),h=["components"],m={slug:"bash-scripts",title:"Bash Scripts Cheatsheet",group:"cheatsheets",authors:"cangulo",tags:["bash"]},d=void 0,p={permalink:"/cheatsheets/bash-scripts",editUrl:"https://github.com/cangulo/cangulo.github.io/blob/main/blog/cheatsheets/bash-cheatsheet.mdx",source:"@site/blog/cheatsheets/bash-cheatsheet.mdx",title:"Bash Scripts Cheatsheet",description:"This post list bash commands and scripts I use the most.",date:"2024-07-10T01:11:24.048Z",formattedDate:"July 10, 2024",tags:[{label:"bash",permalink:"/cheatsheets/tags/bash"}],readingTime:.365,truncated:!0,authors:[{name:"Carlos Angulo Mascarell",title:"Software Engineer",url:"https://github.com/cangulo",imageURL:"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png",key:"cangulo"}],prevItem:{title:"AWS Cheatsheet",permalink:"/cheatsheets/aws"},nextItem:{title:"Documentation Cheatsheet",permalink:"/cheatsheets/documentation"}},g={authorsImageUrls:[void 0]},f=[{value:"Execute a command inside subfolders",id:"execute-a-command-inside-subfolders",children:[],level:2}],b={toc:f};function k(e){var t=e.components,n=(0,a.Z)(e,h);return(0,o.kt)("wrapper",(0,s.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This post list bash commands and scripts I use the most."),(0,o.kt)("h2",{id:"execute-a-command-inside-subfolders"},"Execute a command inside subfolders"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'function recursive_for_loop { \n    ls -1| until ! read f; do\n        if [ -d $f  -a ! -h $f ];\n        then\n            cd -- "$f";\n            recursive_for_loop\n            echo "### Folder $f"; \n            git status; # replace here your command\n\n            # use recursion to navigate the entire tree; git status;\n            cd ..;\n        fi;\n    done;\n};\nrecursive_for_loop\n')),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://www.baeldung.com/linux/execute-command-directories"},"baeldung.com/linux/execute-command-directories")),(0,o.kt)(l.ZP,{mdxType:"AboutMe"}),(0,o.kt)(c.ZP,{mdxType:"FullExperienceLink"}),(0,o.kt)(u.ZP,{mdxType:"Contact"}),(0,o.kt)(i.ShareDocusaurus,{preSlug:m.group,slug:m.slug,title:m.title,tags:m.tags,mdxType:"ShareDocusaurus"}),(0,o.kt)(r.Z,{mdxType:"Comments"}))}k.isMDXComponent=!0}}]);