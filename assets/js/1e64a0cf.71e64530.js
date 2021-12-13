"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[681],{3031:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return f},assets:function(){return b},toc:function(){return g},default:function(){return v}});var n=a(7462),s=a(3366),r=(a(7294),a(3905)),l=a(6785),o=a(4888),i=a(6339),u=a(3114),c=a(6396),h=a(8215),m=["components"],p={slug:"bash/2-add-shortcuts",title:"Add shortcuts to your bash terminal",date:new Date("2020-12-14T00:00:00.000Z"),authors:"cangulo",tags:["linux","productivity","hack","bash","zsh","terminal"]},d=void 0,f={permalink:"/blog/bash/2-add-shortcuts",editUrl:"https://github.com/cangulo/cangulo.github.io/blob/main/blog/posts/bash/2-add-shortcuts/customize-bash-terminal.mdx",source:"@site/blog/posts/bash/2-add-shortcuts/customize-bash-terminal.mdx",title:"Add shortcuts to your bash terminal",description:"In this post, I will add shortcuts and other cool features to my bash terminal.",date:"2020-12-14T00:00:00.000Z",formattedDate:"December 14, 2020",tags:[{label:"linux",permalink:"/blog/tags/linux"},{label:"productivity",permalink:"/blog/tags/productivity"},{label:"hack",permalink:"/blog/tags/hack"},{label:"bash",permalink:"/blog/tags/bash"},{label:"zsh",permalink:"/blog/tags/zsh"},{label:"terminal",permalink:"/blog/tags/terminal"}],readingTime:1.795,truncated:!0,authors:[{name:"Carlos Angulo Mascarell",title:"Software Engineer",url:"https://github.com/cangulo",imageURL:"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png",key:"cangulo"}],nextItem:{title:"Load specific variables at Terminal startup",permalink:"/blog/bash/3-setup-custom-env-vars"}},b={authorsImageUrls:[void 0]},g=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"Aliases",id:"aliases",children:[],level:2},{value:"Functions",id:"functions",children:[],level:2},{value:"How to integrate those shortcuts in the bash terminal?",id:"how-to-integrate-those-shortcuts-in-the-bash-terminal",children:[],level:2}],k={toc:g};function v(e){var t=e.components,p=(0,s.Z)(e,m);return(0,r.kt)("wrapper",(0,n.Z)({},k,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this post, I will add shortcuts and other cool features to my bash terminal."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Linux (I'm using ",(0,r.kt)("a",{parentName:"li",href:"https://elementary.io"},"Elementary OS"),", a Ubuntu-based distro, check it!)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://code.visualstudio.com"},"VS Code"),". If you don't want to use it, change all the ",(0,r.kt)("inlineCode",{parentName:"li"},"code")," commands in the bash code for your text editor. Alternatives: ",(0,r.kt)("em",{parentName:"li"},"gedit")," or ",(0,r.kt)("a",{parentName:"li",href:"https://gitlab.gnome.org/GNOME/gnome-text-editor"},"gnome-text-editor"),"."),(0,r.kt)("li",{parentName:"ul"},"Remember to add execution permissions to the scripts through ",(0,r.kt)("inlineCode",{parentName:"li"},"chmod +x"))),(0,r.kt)("h2",{id:"aliases"},"Aliases"),(0,r.kt)("p",null,"You can create ",(0,r.kt)("strong",{parentName:"p"},"aliases")," to avoid type long commands. Next are some examples:"),(0,r.kt)(c.Z,{mdxType:"Tabs"},(0,r.kt)(h.Z,{value:"bash",label:"bash",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"file=./code/scripts/aliases-bash.sh#L3-",file:"./code/scripts/aliases-bash.sh#L3-"},'alias tf="terraform"\nalias goToRepos="cd $HOME/repos"\nalias editAwsCredentials="code $HOME/.aws"\nalias editBashProfile="code $HOME/.bashrc"\n')),(0,r.kt)(l.CaptionDocusaurus,{label:"aliases-bash.sh",linkIsRelative:!0,link:"posts/bash/2-add-shortcuts/code/scripts/aliases-bash.sh",mdxType:"CaptionDocusaurus"})),(0,r.kt)(h.Z,{value:"zsh",label:"zsh",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"file=./code/scripts/aliases-zsh.sh#L3-",file:"./code/scripts/aliases-zsh.sh#L3-"},'alias tf="terraform"\nalias goToRepos="cd $HOME/repos"\nalias editAwsCredentials="code $HOME/.aws"\nalias editZshProfile="code $HOME/.zshrc"\n')),(0,r.kt)(l.CaptionDocusaurus,{label:"aliases-zsh.sh",linkIsRelative:!0,link:"posts/bash/2-add-shortcuts/code/scripts/aliases-zsh.sh",mdxType:"CaptionDocusaurus"}))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"goal",src:a(4405).Z})),(0,r.kt)("p",null,"Please note ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME")," is an environment variable defined by the system, it refers to your home path, in my case ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/carlos"),"."),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("p",null,"You can also define functions as shortcuts for daily tasks. I have the next ones:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"file=./code/scripts/functions.sh",file:"./code/scripts/functions.sh"},'#!/bin/bash\n\nopenRepoUrl() {\n    gitUrl=$(git remote get-url --all origin)\n    repoUrl="${gitUrl%".git"}" # Removing .git prefix\n    if [[ -n "$repoUrl" ]]; then\n        echo "repoUrl:$repoUrl"\n        xdg-open $repoUrl\n    fi\n}\n\n# REQUIRES fzf, this list the current folder interactively\n\nlsf() {\n    local chosenDir=$(ls | fzf)\n    if [[ -n "$chosenDir" ]]; then\n        cd $chosenDir\n    fi\n}\n')),(0,r.kt)("h2",{id:"how-to-integrate-those-shortcuts-in-the-bash-terminal"},"How to integrate those shortcuts in the bash terminal?"),(0,r.kt)("p",null,"In order to load the shortcuts every time we open a terminal, we have to append them in the shell profile (",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.bashrc")," for bash terminal, and ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.zshrc")," for zsh). "),(0,r.kt)("p",null,"However, the profile script will become bigger for every new shortcut we add, to make this extensible we will ",(0,r.kt)("em",{parentName:"p"},"source")," (",(0,r.kt)("a",{parentName:"p",href:"https://linuxize.com/post/bash-source-command/"},"load"),") the shortcuts from separate scripts. Let me list them:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"alias-bash.sh.sh")," /  ",(0,r.kt)("inlineCode",{parentName:"li"},"alias-zsh.sh")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"functions.sh"))),(0,r.kt)("p",null,"Append the next code to your profile:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"file=./code/sourceScripts.sh",file:"./code/sourceScripts.sh"},'# update this to your scripts folder\nscriptsFolder="YOUR_PATH/scripts"\n\n# source all scripts (instead of `source`, we could use `.` both are the same command)\nfor i in $scriptsFolder/*.sh; do source "$i"; done\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Some notes about loading the functions:"),(0,r.kt)("p",null,"if you want to use the functions in scripts that you call manually from the terminal, you have to ",(0,r.kt)("inlineCode",{parentName:"p"},"export")," them as next:"),(0,r.kt)(c.Z,{mdxType:"Tabs"},(0,r.kt)(h.Z,{value:"bash",label:"bash",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"funcName(){\n\n}\nexport -f funcName\n"))),(0,r.kt)(h.Z,{value:"zsh",label:"zsh",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"funcName(){\n\n}\nexport funcName\n")))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.baeldung.com/linux/bash-variables-export"},"reference"))),(0,r.kt)("p",null,"Nothing else! I hope this saves you some time using the terminal. Do you have similar shortcuts? Share them in the comments below."),(0,r.kt)(i.Z,{id:"ZVik7pBtu9dNS",mdxType:"Gif"}),(0,r.kt)(u.ZP,{mdxType:"AboutMe"}),(0,r.kt)(l.ShareDocusaurus,{slug:"posts/bash/2-add-shortcuts",title:"Add shortcuts to your bash terminal",tags:["linux","productivity","hack","bash","zsh","terminal"],mdxType:"ShareDocusaurus"}),(0,r.kt)(o.Z,{mdxType:"Comments"}))}v.isMDXComponent=!0},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,s=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:s},t)}},6396:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7462),s=a(7294),r=a(2389),l=a(9443);var o=function(){var e=(0,s.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(9521),u=a(6010),c="tabItem_1uMI";function h(e){var t,a,n,r=e.lazy,l=e.block,h=e.defaultValue,m=e.values,p=e.groupId,d=e.className,f=s.Children.map(e.children,(function(e){if((0,s.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,i.lx)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===h?h:null!=(t=null!=h?h:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=f[0])?void 0:n.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=o(),y=v.tabGroupChoices,N=v.setTabGroupChoices,x=(0,s.useState)(k),w=x[0],T=x[1],E=[],C=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var I=y[p];null!=I&&I!==w&&b.some((function(e){return e.value===I}))&&T(I)}var Z=function(e){var t=e.currentTarget,a=E.indexOf(t),n=b[a].value;n!==w&&(C(t),T(n),null!=p&&N(p,n))},z=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;a=E[n]||E[0];break;case"ArrowLeft":var s=E.indexOf(e.currentTarget)-1;a=E[s]||E[E.length-1]}null==(t=a)||t.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":l},d)},b.map((function(e){var t=e.value,a=e.label;return s.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":w===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:z,onFocus:Z,onClick:Z},null!=a?a:t)}))),r?(0,s.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function m(e){var t=(0,r.Z)();return s.createElement(h,(0,n.Z)({key:String(t)},e))}},4888:function(e,t,a){var n=a(7294),s=a(4610),r=a(2263);t.Z=function(){var e=(0,r.default)().siteConfig,t=parseInt(e.customFields.hyvorTalkSiteId);return n.createElement("section",null,n.createElement("h2",null,"Comments"),n.createElement(s.Z.Embed,{loadMode:"scroll",websiteId:t}))}},6339:function(e,t,a){var n=a(7294),s=a(5697),r=a.n(s);function l(e){var t=e.id;return n.createElement("div",{style:{textAlign:"center"}},n.createElement("iframe",{src:"https://giphy.com/embed/"+t,width:"480",height:"270",frameBorder:"0",className:"giphy-embed",scrolling:"no"}),n.createElement("p",null,n.createElement("a",{href:"https://giphy.com/gifs/"+t},"via GIPHY")))}l.propTypes={id:r().string.isRequired},t.Z=l},4405:function(e,t,a){t.Z=a.p+"assets/images/goToReposExecution-ff7d0fff9e507c99ef44ac7b7f00907e.gif"}}]);