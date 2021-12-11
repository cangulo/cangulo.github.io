"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[1970],{4888:function(e,t,a){var i=a(7294),n=a(4610),l=a(2263);t.Z=function(){var e=(0,l.default)().siteConfig,t=parseInt(e.customFields.hyvorTalkSiteId);return i.createElement("section",null,i.createElement("h2",null,"Comments"),i.createElement(n.Z.Embed,{loadMode:"scroll",websiteId:t}))}},7209:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return h},contentTitle:function(){return u},metadata:function(){return m},assets:function(){return p},toc:function(){return k},default:function(){return g}});var i=a(7462),n=a(3366),l=(a(7294),a(3905)),r=a(6785),o=a(4888),s=a(3114),c=["components"],h={slug:"git",title:"Git Cheatsheet",authors:"cangulo",tags:["git","githooks","alias"]},u=void 0,m={permalink:"/cheatsheets/git",editUrl:"https://github.com/cangulo/cangulo.github.io/blob/main/blog/cheatsheets/git/git-cheatsheet.mdx",source:"@site/blog/cheatsheets/git/git-cheatsheet.mdx",title:"Git Cheatsheet",description:"This post explains the next topics:",date:"2021-12-11T00:10:59.991Z",formattedDate:"December 11, 2021",tags:[{label:"git",permalink:"/cheatsheets/tags/git"},{label:"githooks",permalink:"/cheatsheets/tags/githooks"},{label:"alias",permalink:"/cheatsheets/tags/alias"}],readingTime:2.88,truncated:!0,authors:[{name:"Carlos Angulo Mascarell",title:"Software Engineer",url:"https://github.com/cangulo",imageURL:"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png",key:"cangulo"}],nextItem:{title:"Terraform Cheatsheet",permalink:"/cheatsheets/terraform"}},p={authorsImageUrls:[void 0]},k=[{value:"Git Commands",id:"git-commands",children:[{value:"Git Checkout",id:"git-checkout",children:[],level:3},{value:"Git Branch",id:"git-branch",children:[],level:3},{value:"Gitk",id:"gitk",children:[],level:3},{value:"Git Cherry Pick",id:"git-cherry-pick",children:[],level:3},{value:"Git diff",id:"git-diff",children:[],level:3},{value:"Git rebase",id:"git-rebase",children:[],level:3}],level:2},{value:"How to configure an Alias",id:"how-to-configure-an-alias",children:[{value:"Using Command Line",id:"using-command-line",children:[],level:3},{value:"Editing the git config file",id:"editing-the-git-config-file",children:[],level:3}],level:2},{value:"Alias configured",id:"alias-configured",children:[],level:2},{value:"References",id:"references",children:[],level:2}],d={toc:k};function g(e){var t=e.components,a=(0,n.Z)(e,c);return(0,l.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This post explains the next topics:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the git commands I use the most"),(0,l.kt)("li",{parentName:"ul"},"some git ",(0,l.kt)("em",{parentName:"li"},"alias")," to avoid typing long commands\ud83d\ude01\ud83d\udc4c")),(0,l.kt)("h2",{id:"git-commands"},"Git Commands"),(0,l.kt)("h3",{id:"git-checkout"},"Git Checkout"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git checkout --track origin/NAME"),"      "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create a local branch that tracks the remote one                                                                                                                                                                                    ")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git checkout -"),"                        "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Checkout the previous branch, this can be useful if you go from your feature branch to dev, you update it, and you want to come back to your feature branch to rebase dev                                                           ")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git checkout tags/<tag> -b <branch>"),"   "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Checkout a branch starting from the tag provided                                                                                                                                                                                    ")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git switch"),"                            "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"New git command to change between branches to avoid using checkout. Currently is in status experimental. "),(0,l.kt)("li",{parentName:"ul"},"Check this ",(0,l.kt)("a",{parentName:"li",href:"https://git-scm.com/docs/git-switch/2.23.0"},"link")," and this ",(0,l.kt)("a",{parentName:"li",href:"https://bluecast.tech/blog/git-switch-branch/"},"one"))),(0,l.kt)("h3",{id:"git-branch"},"Git Branch"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git branch --list [<pattern>]"),"         "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"List all the branches that match the ",(0,l.kt)("inlineCode",{parentName:"li"},"<pattern>"),". e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"*-1234")," list all the branches that end ",(0,l.kt)("inlineCode",{parentName:"li"},"1234"),"                                                                                                                               ")),(0,l.kt)("h3",{id:"gitk"},"Gitk"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"gitk"),"                                  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Check Last commits using a GUI                                                                                                                                                                                                      ")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"gitk <filePath>"),"                       "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Check ",(0,l.kt)("inlineCode",{parentName:"li"},"<filePath>")," last commits using a GUI                                                                                                                                                                                         ")),(0,l.kt)("h3",{id:"git-cherry-pick"},"Git Cherry Pick"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git cherry-pick -n <commit>"),"           "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Let's you inspect the files modified in the commit before cherry-pick them. ",(0,l.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/5717026/how-to-git-cherry-pick-only-changes-to-certain-files"},"Reference"),"                                           ")),(0,l.kt)("h3",{id:"git-diff"},"Git diff"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git diff [target-branch] -name-status")," "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"List the files modified and what kind of modification (Added, Deleted, Modified) in your branch using the target branch as reference                                                                                                ")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git diff [target-branch] -name-only"),"   "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"List the files modified in your branch using the target branch as reference                                                                                                                                                         ")),(0,l.kt)("h3",{id:"git-rebase"},"Git rebase"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"git rebase -i --root")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"DO IT UNDER YOUR RISK. Do a git rebase since the first commit. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/22992543/how-do-i-git-rebase-the-first-commit/23000315"},"https://stackoverflow.com/questions/22992543/how-do-i-git-rebase-the-first-commit/23000315"))),(0,l.kt)("h2",{id:"how-to-configure-an-alias"},"How to configure an Alias"),(0,l.kt)("h3",{id:"using-command-line"},"Using Command Line"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"git config --global alias.[AliasName] [AliasValue]")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"git config --global alias.co checkout"))))),(0,l.kt)("h3",{id:"editing-the-git-config-file"},"Editing the git config file"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Open your ",(0,l.kt)("inlineCode",{parentName:"li"},".gitconfig")," file, it is located in your home folder"),(0,l.kt)("li",{parentName:"ol"},"In a new line, add the tag ",(0,l.kt)("inlineCode",{parentName:"li"},"[alias]")),(0,l.kt)("li",{parentName:"ol"},"In the next lines add your alias following the format ",(0,l.kt)("inlineCode",{parentName:"li"},"[TAB space]AliasName = AliasValue"),".")),(0,l.kt)("p",null,"Please note this config file is space/tab sensitive so be sure no spaces are added at the end of each line"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"[alias]\n    b = branch\n")),(0,l.kt)("p",null,"Next are my personal alias:"),(0,l.kt)("h2",{id:"alias-configured"},"Alias configured"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'[alias]\n  b = branch\n  bl = branch --list\n  bd = branch -D\n  co = checkout\n  cob = checkout -b\n  cor = checkout --track\n  cp = cherry-pick\n  cp-c = cherry-pick --continue\n  cp-a = cherry-pick --abort\n  re = rebase -i\n  re-c = rebase --continue\n  re-a = rebase --abort\n  re-m = rebase -i --rebase-merges\n  pushf = push --force\n  st = status\n  l = "!f() { git log --oneline -n ${1-15}; }; f"\n  lg = "!f() { git log --oneline --grep=${1-NoArgumentProvided}; }; f"\n  pushr = "!f() { currentBranch=$(git branch --show-current);git push --set-upstream origin $currentBranch; }; f"\n  settings = config --global --edit\n')),(0,l.kt)(r.CaptionDocusaurus,{label:"Check the file here",linkIsRelative:!0,link:"cheatsheets/git/git-alias",mdxType:"CaptionDocusaurus"}),(0,l.kt)("p",null,"The one I use the most is ",(0,l.kt)("inlineCode",{parentName:"p"},"cob"),", every time I have to create a new branch I type ",(0,l.kt)("inlineCode",{parentName:"p"},"git cob [BRANCH_NAME]"),". Also the rebase one, ",(0,l.kt)("inlineCode",{parentName:"p"},"git re develop")," , that is how I update my branch with the last changes from develop."),(0,l.kt)("p",null,"Please note the ",(0,l.kt)("inlineCode",{parentName:"p"},"l")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"lg")," are alias defined as Bash functions with input parameters ",(0,l.kt)("inlineCode",{parentName:"p"},"${1-DefaultParameter}"),"."),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases"},"official docs - git alias")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://opensource.com/article/20/11/git-aliases"},"8 Git aliases that make me more efficient"))),(0,l.kt)(s.ZP,{mdxType:"AboutMe"}),(0,l.kt)(r.ShareDocusaurus,{slug:"cheatsheets/git",title:"Git Cheatsheet",tags:["git","githooks","alias"],mdxType:"ShareDocusaurus"}),(0,l.kt)(o.Z,{mdxType:"Comments"}))}g.isMDXComponent=!0}}]);