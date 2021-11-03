"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[3813],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(a),h=r,u=d["".concat(c,".").concat(h)]||d[h]||m[h]||i;return a?n.createElement(u,o(o({ref:t},p),{},{components:a})):n.createElement(u,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5546:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return m},toc:function(){return d},default:function(){return g}});var n,r=a(7462),i=a(3366),o=(a(7294),a(3905)),l=["components"],c={slug:"cheatsheets/git-cheatsheet",title:"Git Cheatsheet",authors:"cangulo",tags:["hola","docusaurus"]},s=void 0,p={permalink:"/cheatsheets/cheatsheets/git-cheatsheet",source:"@site/blog/cheatsheets/git-cheatsheet.mdx",title:"Git Cheatsheet",description:"Git Commands",date:"2021-11-03T20:33:58.497Z",formattedDate:"November 3, 2021",tags:[{label:"hola",permalink:"/cheatsheets/tags/hola"},{label:"docusaurus",permalink:"/cheatsheets/tags/docusaurus"}],readingTime:5.26,truncated:!1,authors:[{name:"Carlos Angulo Mascarell",title:"Software Engineer",url:"https://github.com/cangulo",imageURL:"profile_picture_1.png",key:"cangulo"}]},m={authorsImageUrls:[void 0]},d=[{value:"Git Commands",id:"git-commands",children:[],level:2},{value:"How to configure an Alias",id:"how-to-configure-an-alias",children:[{value:"Using Command Line:",id:"using-command-line",children:[],level:3},{value:"Configuring the git config file",id:"configuring-the-git-config-file",children:[],level:3}],level:2},{value:"Alias configured",id:"alias-configured",children:[],level:2},{value:"Githooks",id:"githooks",children:[{value:"Problem",id:"problem",children:[],level:3},{value:"Solution",id:"solution",children:[],level:3},{value:"Example Pre Commit file example",id:"example-pre-commit-file-example",children:[],level:3}],level:2}],h=(n="CaptionRender",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),u={toc:d};function g(e){var t=e.components,a=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"git-commands"},"Git Commands"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Command"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"git checkout --track origin/NAME")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Create a local branch that tracks the remote one")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"git checkout -")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Checkout the previous branch, this can be useful if you go from your feature branch to dev, you update it, and you want to come back to your feature branch to rebase dev")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"git branch --list [<pattern>]")),(0,o.kt)("td",{parentName:"tr",align:"left"},"List all the branches that match the ",(0,o.kt)("inlineCode",{parentName:"td"},"<pattern>"),". e.g. ",(0,o.kt)("inlineCode",{parentName:"td"},"*-1234")," list all the branches that end ",(0,o.kt)("inlineCode",{parentName:"td"},"1234"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"gitk")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Check Last commits using a GUI")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"gitk <filePath>")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Check ",(0,o.kt)("inlineCode",{parentName:"td"},"<fielPath>")," last commits using a GUI")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"git gui blame <filePath>")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Check ",(0,o.kt)("inlineCode",{parentName:"td"},"<fielPath>")," last commits using a GUI")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"gitk")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Check Last commits using a GUI")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"git switch")),(0,o.kt)("td",{parentName:"tr",align:"left"},"New git command to change between branches to avoid using checkout. Currently is in status experimental. Check this ",(0,o.kt)("a",{parentName:"td",href:"https://git-scm.com/docs/git-switch/2.23.0"},"link")," and this ",(0,o.kt)("a",{parentName:"td",href:"https://bluecast.tech/blog/git-switch-branch/"},"one"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"git cherry-pick -n <commit>")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Let's you inspect the files modified in the commit before cherry pick them. ",(0,o.kt)("a",{parentName:"td",href:"https://stackoverflow.com/questions/5717026/how-to-git-cherry-pick-only-changes-to-certain-files"},"Reference"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"git diff [target-branch] -name-status")),(0,o.kt)("td",{parentName:"tr",align:"left"},"List the files modified and what kind of modification (Added, Deleted, Modified) in your branch using the target branch as reference")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"git diff [target-branch] -name-only")),(0,o.kt)("td",{parentName:"tr",align:"left"},"List the files modified in your branch using the target branch as reference")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"git checkout tags/<tag> -b <branch>")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Checkout a branch starting from the tag provided")))),(0,o.kt)("h2",{id:"how-to-configure-an-alias"},"How to configure an Alias"),(0,o.kt)("h3",{id:"using-command-line"},"Using Command Line:"),(0,o.kt)("p",null,"using Command line: "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Command"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"git config --global alias.[AliasName] [AliasValue]")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"git config --global alias.co checkout"))))),(0,o.kt)("h3",{id:"configuring-the-git-config-file"},"Configuring the git config file"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open your ",(0,o.kt)("inlineCode",{parentName:"li"},".gitconfig")," file, it is located at your home folder"),(0,o.kt)("li",{parentName:"ol"},"In a new line, add the tag ",(0,o.kt)("inlineCode",{parentName:"li"},"[alias]")),(0,o.kt)("li",{parentName:"ol"},"In the next lines add your alias following the format ",(0,o.kt)("inlineCode",{parentName:"li"},"[TAB space]AliasName = AliasValue"),".")),(0,o.kt)("p",null,"Please note this config file is space/tab sensitive so be sure no spaces are added at the end of each line"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[alias]\n    b = branch\n")),(0,o.kt)("p",null,"Next are my personal alias:"),(0,o.kt)("h2",{id:"alias-configured"},"Alias configured"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'[alias]\n  b = branch\n  bl = branch --list\n  bd = branch -D\n  co = checkout\n  cob = checkout -b\n  cor = checkout --track\n  cp = cherry-pick\n  cp-c = cherry-pick --continue\n  cp-a = cherry-pick --abort\n  re = rebase -i\n  re-c = rebase --continue\n  re-a = rebase --abort\n  re-m = rebase -i --rebase-merges\n  pushf = push --force\n  st = status\n  l = "!f() { git log --oneline -n ${1-15}; }; f"\n  lg = "!f() { git log --oneline --grep=${1-No Argument Provided}; }; f"\n  pushr = "!f() { currentBranch=$(git branch --show-current);git push --set-upstream origin $currentBranch; }; f"\n  settings = config --global --edit\n[fetch]\n  prune = true\n')),(0,o.kt)(h,{label:"Check the file here",link:"posts/cheatsheets/resources/git/git-alias",mdxType:"CaptionRender"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"l")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"lg")," are alias with input parameters defined as Bash functions"),(0,o.kt)("h2",{id:"githooks"},"Githooks"),(0,o.kt)("h3",{id:"problem"},"Problem"),(0,o.kt)("p",null,"Perform actions before or after any commit, let's say, automatize actions following the git workflow. \\\nIn my case, I want to make sure that all my markdown files has any code reference updated. For that, I execute a bash file called ",(0,o.kt)("inlineCode",{parentName:"p"},"update_sh_code_in_md_files.sh"),"."),(0,o.kt)("h3",{id:"solution"},"Solution"),(0,o.kt)("p",null,"Create a githook that is executed before doing a commit."),(0,o.kt)("p",null,"By default, git create the next set of samples in  ",(0,o.kt)("inlineCode",{parentName:"p"},".git/hooks"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"applypatch-msg.sample\ncommit-msg.sample\nfsmonitor-watchman.sample\npost-update.sample\npre-applypatch.sample\npre-commit.sample\nprepare-commit-msg.sample\npre-push.sample\npre-rebase.sample\npre-receive.sample\nupdate.sample\n")),(0,o.kt)("p",null,"If a common policy for pre-commit needs to be updated to the repository the ",(0,o.kt)("inlineCode",{parentName:"p"},"pre-commit")," should be located outside the ",(0,o.kt)("inlineCode",{parentName:"p"},".git")," folder, this will ensure the folder will be tracked in git. Then, we have to configure git to use that path as the source for hooks, this could be done as next:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git config --local core.hooksPath ./githooks\n")),(0,o.kt)("p",null,"In case we want to set a global policy, it could be done with the same command but adding ",(0,o.kt)("inlineCode",{parentName:"p"},"--global")," as parameter. In my case, all my repositories contains markdown files with reference to code that I want to update "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git config --global core.hooksPath ./githooks\n")),(0,o.kt)("p",null,"If the hook is set as ",(0,o.kt)("em",{parentName:"p"},"global")," the configuration file modified will be  ",(0,o.kt)("inlineCode",{parentName:"p"},".gitconfig "),", at the home user directory. \\\nOn the other hand, if it is ",(0,o.kt)("em",{parentName:"p"},"local"),", the file modified will be ",(0,o.kt)("inlineCode",{parentName:"p"},".config")," in  the ",(0,o.kt)("inlineCode",{parentName:"p"},".git")," folder of the repository."),(0,o.kt)("p",null,"Next are the lines to be added in the file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[core]\n    hooksPath = /home/carlos/Documents/github_repositories/cheatsheet/GitCheatsheet/resources/githooks/\n")),(0,o.kt)("h3",{id:"example-pre-commit-file-example"},"Example Pre Commit file example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/sh\n\necho "### PRE-COMMIT GLOBAL PROCESS"\n\n/home/carlos/Documents/github_repositories/bashScripts/markdown_helpers/update_code_in_docs/update_sh_code_in_md_files.sh\nexecutionResult=$?\n\nif [ $executionResult -eq 0 ]; then\n    echo "###      RESULT OK"\nelse\n    echo "###      RESULT NOT OK"\nfi\n\necho "### PRE-COMMIT GLOBAL PROCESS END"\nexit $executionResult\n')))}g.isMDXComponent=!0}}]);