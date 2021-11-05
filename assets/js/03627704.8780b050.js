"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[1970],{7075:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return h},metadata:function(){return p},assets:function(){return u},toc:function(){return g},default:function(){return f}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),l=a(4473),o=a(1147),s=a(4888),c=a(2680),m=["components"],d={slug:"git",title:"Git Cheatsheet",authors:"cangulo",tags:["git","githooks","alias"]},h=void 0,p={permalink:"/cheatsheets/git",source:"@site/blog/cheatsheets/git/git-cheatsheet.mdx",title:"Git Cheatsheet",description:"This post explains the next topics:",date:"2021-11-05T19:22:51.425Z",formattedDate:"November 5, 2021",tags:[{label:"git",permalink:"/cheatsheets/tags/git"},{label:"githooks",permalink:"/cheatsheets/tags/githooks"},{label:"alias",permalink:"/cheatsheets/tags/alias"}],readingTime:2.985,truncated:!0,authors:[{name:"Carlos Angulo Mascarell",title:"Software Engineer",url:"https://github.com/cangulo",imageURL:"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png",key:"cangulo"}]},u={authorsImageUrls:[void 0]},g=[{value:"Git Commands",id:"git-commands",children:[],level:2},{value:"How to configure an Alias",id:"how-to-configure-an-alias",children:[{value:"Using Command Line",id:"using-command-line",children:[],level:3},{value:"Editing the git config file",id:"editing-the-git-config-file",children:[],level:3}],level:2},{value:"Alias configured",id:"alias-configured",children:[],level:2},{value:"References",id:"references",children:[],level:2},{value:"Did you like it? Share it",id:"did-you-like-it-share-it",children:[],level:2}],k={toc:g};function f(e){var t=e.components,a=(0,i.Z)(e,m);return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This post explains the next topics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"git commands"),(0,r.kt)("li",{parentName:"ul"},"git alias -> avoid typing long commands\ud83d\ude01\ud83d\udc4c")),(0,r.kt)("h2",{id:"git-commands"},"Git Commands"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"git checkout --track origin/NAME")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Create a local branch that tracks the remote one")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"git checkout -")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Checkout the previous branch, this can be useful if you go from your feature branch to dev, you update it, and you want to come back to your feature branch to rebase dev")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"git branch --list [<pattern>]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"List all the branches that match the ",(0,r.kt)("inlineCode",{parentName:"td"},"<pattern>"),". e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"*-1234")," list all the branches that end ",(0,r.kt)("inlineCode",{parentName:"td"},"1234"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"gitk")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check Last commits using a GUI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"gitk <filePath>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check ",(0,r.kt)("inlineCode",{parentName:"td"},"<fielPath>")," last commits using a GUI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"git gui blame <filePath>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check ",(0,r.kt)("inlineCode",{parentName:"td"},"<fielPath>")," last commits using a GUI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"gitk")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Check Last commits using a GUI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"git switch")),(0,r.kt)("td",{parentName:"tr",align:"left"},"New git command to change between branches to avoid using checkout. Currently is in status experimental. Check this ",(0,r.kt)("a",{parentName:"td",href:"https://git-scm.com/docs/git-switch/2.23.0"},"link")," and this ",(0,r.kt)("a",{parentName:"td",href:"https://bluecast.tech/blog/git-switch-branch/"},"one"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"git cherry-pick -n <commit>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Let's you inspect the files modified in the commit before cherry pick them. ",(0,r.kt)("a",{parentName:"td",href:"https://stackoverflow.com/questions/5717026/how-to-git-cherry-pick-only-changes-to-certain-files"},"Reference"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"git diff [target-branch] -name-status")),(0,r.kt)("td",{parentName:"tr",align:"left"},"List the files modified and what kind of modification (Added, Deleted, Modified) in your branch using the target branch as reference")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"git diff [target-branch] -name-only")),(0,r.kt)("td",{parentName:"tr",align:"left"},"List the files modified in your branch using the target branch as reference")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"git checkout tags/<tag> -b <branch>")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Checkout a branch starting from the tag provided")))),(0,r.kt)("h2",{id:"how-to-configure-an-alias"},"How to configure an Alias"),(0,r.kt)("h3",{id:"using-command-line"},"Using Command Line"),(0,r.kt)("p",null,"using Command line: "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"git config --global alias.[AliasName] [AliasValue]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"git config --global alias.co checkout"))))),(0,r.kt)("h3",{id:"editing-the-git-config-file"},"Editing the git config file"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open your ",(0,r.kt)("inlineCode",{parentName:"li"},".gitconfig")," file, it is located at your home folder"),(0,r.kt)("li",{parentName:"ol"},"In a new line, add the tag ",(0,r.kt)("inlineCode",{parentName:"li"},"[alias]")),(0,r.kt)("li",{parentName:"ol"},"In the next lines add your alias following the format ",(0,r.kt)("inlineCode",{parentName:"li"},"[TAB space]AliasName = AliasValue"),".")),(0,r.kt)("p",null,"Please note this config file is space/tab sensitive so be sure no spaces are added at the end of each line"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[alias]\n    b = branch\n")),(0,r.kt)("p",null,"Next are my personal alias:"),(0,r.kt)("h2",{id:"alias-configured"},"Alias configured"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'[alias]\n  b = branch\n  bl = branch --list\n  bd = branch -D\n  co = checkout\n  cob = checkout -b\n  cor = checkout --track\n  cp = cherry-pick\n  cp-c = cherry-pick --continue\n  cp-a = cherry-pick --abort\n  re = rebase -i\n  re-c = rebase --continue\n  re-a = rebase --abort\n  re-m = rebase -i --rebase-merges\n  pushf = push --force\n  st = status\n  l = "!f() { git log --oneline -n ${1-15}; }; f"\n  lg = "!f() { git log --oneline --grep=${1-NoArgumentProvided}; }; f"\n  pushr = "!f() { currentBranch=$(git branch --show-current);git push --set-upstream origin $currentBranch; }; f"\n  settings = config --global --edit\n')),(0,r.kt)(o.Z,{label:"Check the file here",relativeLink:"cheatsheets/git/git-alias",mdxType:"Caption"}),(0,r.kt)("p",null,"The one I use the most is ",(0,r.kt)("inlineCode",{parentName:"p"},"cob"),", every time I have to create a new branch I type ",(0,r.kt)("inlineCode",{parentName:"p"},"git cob [BRANCH_NAME]"),". Also the rebase one, ",(0,r.kt)("inlineCode",{parentName:"p"},"git re develop")," , that is how I update my branch with the last changes from develop."),(0,r.kt)("p",null,"Please note the ",(0,r.kt)("inlineCode",{parentName:"p"},"l")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"lg")," are alias defined as Bash functions with input parameters ",(0,r.kt)("inlineCode",{parentName:"p"},"${1-DefaultParameter}"),"."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases"},"official docs - git alias")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://opensource.com/article/20/11/git-aliases"},"8 Git aliases that make me more efficient"))),(0,r.kt)(c.ZP,{mdxType:"AboutMePostArea"}),(0,r.kt)("h2",{id:"did-you-like-it-share-it"},"Did you like it? Share it"),(0,r.kt)(l.Z,{slug:"cheatsheets/git",title:"Git Cheatsheet",tags:["git","githooks","alias"],mdxType:"ShareCard"}),(0,r.kt)(s.Z,{slug:"cheatsheets/git",mdxType:"Comments"}))}f.isMDXComponent=!0},2680:function(e,t,a){a.d(t,{ZP:function(){return s}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),l=["components"],o={toc:[{value:"About me",id:"about-me",children:[],level:2}]};function s(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"about-me"},"About me"),(0,r.kt)("p",null,"I'm a software engineer with experience in .NET Core, Angular, PowerShell and Bash scripting, I love challenges, learning and share knowledge. Feel free to contact me via LinkedIn."),(0,r.kt)("p",{className:"img-centered"},(0,r.kt)("img",{src:"https://github.com/cangulo/cangulo/raw/main/profile_picture_aboutme_post_area.png"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Per aspera ad astra.")),(0,r.kt)("p",null,"LinkedIn - ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/angulomascarell"},"Carlos Angulo Mascarell"),(0,r.kt)("br",{parentName:"p"}),"\n","Twitter - ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/angulomascarell"},"@AnguloMascarell"),(0,r.kt)("br",{parentName:"p"}),"\n","GitHub - ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cangulo"},"Carlos Angulo Mascarell - cangulo")))}s.isMDXComponent=!0},1147:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.label,a=e.relativeLink;if(a){var i=a.includes("http")?a:"https://raw.githubusercontent.com/cangulo/cangulo.github.io/main/blog/".concat(a);return n.createElement("a",{href:i},n.createElement("p",{className:"caption"},null!=t?t:"Link to the file"))}return n.createElement("p",{className:"caption"},null!=t?t:"Link to the file")}},4888:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(5068),i=a(7294),r=a(4610),l=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={slug:a.props.slug},a}return(0,n.Z)(t,e),t.prototype.render=function(){return i.createElement("div",{ref:this.myRef},i.createElement("section",{id:"post-comments"},i.createElement("h2",null,"Comments"),i.createElement(r.Z.Embed,{loadMode:"scroll",websiteId:1142,id:this.state.slug})))},t}(i.Component)},4473:function(e,t,a){var n=a(7294),i=a(3597),r=a(7332),l=a(6616),o=a(7385),s=a(8137),c=a(6339),m=a(2834),d=a(9275),h=a(8168),p=a(4276),u=a(2263);t.Z=function(e){var t=e.slug,a=e.title,g=e.tags,k=((0,u.Z)().siteConfig,"https://cangulo.github.io/"+t);return n.createElement("div",null,n.createElement(i.Z,{url:k,title:a},n.createElement(r.Z,{size:32,round:!0})),n.createElement(l.Z,{url:k,title:a,via:"AnguloMascarell",hashtags:null!=g?g:""},n.createElement(o.Z,{size:32,round:!0})),n.createElement(s.Z,{subject:"Check this post about "+a,body:"Hi there, check the next post: "+a+" \n\n",url:k},n.createElement(c.Z,{size:32,round:!0})),n.createElement(m.Z,{url:k,title:a},n.createElement(d.Z,{size:32,round:!0})),n.createElement(h.Z,{title:a,url:k},n.createElement(p.Z,{size:32,round:!0})))}}}]);