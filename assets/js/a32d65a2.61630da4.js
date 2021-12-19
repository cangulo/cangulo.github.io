"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[1501],{1838:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return h},contentTitle:function(){return d},metadata:function(){return f},assets:function(){return b},toc:function(){return g},default:function(){return v}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),l=a(6785),i=a(6339),s=a(6396),u=a(8215),c=a(3114),p=a(615),m=["components"],h={slug:"bash/2-add-shortcuts",title:"Add shortcuts to your bash terminal",date:new Date("2020-12-14T00:00:00.000Z"),group:"blog",authors:"cangulo",tags:["linux","productivity","hack","bash","zsh","terminal"]},d=void 0,f={permalink:"/blog/bash/2-add-shortcuts",editUrl:"https://github.com/cangulo/cangulo.github.io/blob/main/blog/posts/bash/2-add-shortcuts/2-add-shortcuts.mdx",source:"@site/blog/posts/bash/2-add-shortcuts/2-add-shortcuts.mdx",title:"Add shortcuts to your bash terminal",description:"In this post, I will define shortcuts in my bash terminal. The implementation is based on using aliases and functions. Super simple!",date:"2020-12-14T00:00:00.000Z",formattedDate:"December 14, 2020",tags:[{label:"linux",permalink:"/blog/tags/linux"},{label:"productivity",permalink:"/blog/tags/productivity"},{label:"hack",permalink:"/blog/tags/hack"},{label:"bash",permalink:"/blog/tags/bash"},{label:"zsh",permalink:"/blog/tags/zsh"},{label:"terminal",permalink:"/blog/tags/terminal"}],readingTime:1.8,truncated:!0,authors:[{name:"Carlos Angulo Mascarell",title:"Software Engineer",url:"https://github.com/cangulo",imageURL:"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png",key:"cangulo"}],prevItem:{title:"Load custom variables at Terminal startup",permalink:"/blog/bash/3-load-vars"},nextItem:{title:"Create an interactive bookmarks menu in your terminal",permalink:"/blog/bash/1-interactive-bookmarks"}},b={authorsImageUrls:[void 0]},g=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"Aliases",id:"aliases",children:[],level:2},{value:"Functions",id:"functions",children:[],level:2},{value:"How to integrate those shortcuts in the bash terminal?",id:"how-to-integrate-those-shortcuts-in-the-bash-terminal",children:[],level:2}],k={toc:g};function v(e){var t=e.components,d=(0,r.Z)(e,m);return(0,o.kt)("wrapper",(0,n.Z)({},k,d,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this post, I will define shortcuts in my bash terminal. The implementation is based on using aliases and functions. Super simple!"),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Linux (I'm using ",(0,o.kt)("a",{parentName:"li",href:"https://elementary.io"},"Elementary OS"),", a Ubuntu-based distro, check it!)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://code.visualstudio.com"},"VS Code"),". If you don't want to use it, change all the ",(0,o.kt)("inlineCode",{parentName:"li"},"code")," commands in the bash code for your text editor. Alternatives: ",(0,o.kt)("em",{parentName:"li"},"gedit")," or ",(0,o.kt)("a",{parentName:"li",href:"https://gitlab.gnome.org/GNOME/gnome-text-editor"},"gnome-text-editor"),"."),(0,o.kt)("li",{parentName:"ul"},"Remember to add execution permissions to the scripts through ",(0,o.kt)("inlineCode",{parentName:"li"},"chmod +x"))),(0,o.kt)("h2",{id:"aliases"},"Aliases"),(0,o.kt)("p",null,"You can create ",(0,o.kt)("strong",{parentName:"p"},"aliases")," to avoid type long commands. Next are some examples:"),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"bash",label:"bash",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"file=./code/scripts/aliases-bash.sh#L3-",file:"./code/scripts/aliases-bash.sh#L3-"},'alias tf="terraform"\nalias goToRepos="cd $HOME/repos"\nalias editAwsCredentials="code $HOME/.aws"\nalias editBashProfile="code $HOME/.bashrc"\n')),(0,o.kt)(l.CaptionDocusaurus,{label:"aliases-bash.sh",linkIsRelative:!0,link:"posts/bash/2-add-shortcuts/code/scripts/aliases-bash.sh",mdxType:"CaptionDocusaurus"})),(0,o.kt)(u.Z,{value:"zsh",label:"zsh",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"file=./code/scripts/aliases-zsh.sh#L3-",file:"./code/scripts/aliases-zsh.sh#L3-"},'alias tf="terraform"\nalias goToRepos="cd $HOME/repos"\nalias editAwsCredentials="code $HOME/.aws"\nalias editZshProfile="code $HOME/.zshrc"\n')),(0,o.kt)(l.CaptionDocusaurus,{label:"aliases-zsh.sh",linkIsRelative:!0,link:"posts/bash/2-add-shortcuts/code/scripts/aliases-zsh.sh",mdxType:"CaptionDocusaurus"}))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"goToReposExecution",src:a(5140).Z})),(0,o.kt)("p",null,"Please note ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME")," is an environment variable defined by the system, it refers to your home path, in my case ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/carlos"),"."),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("p",null,"You can also define functions as shortcuts for daily tasks. I have the next ones:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"file=./code/scripts/functions.sh",file:"./code/scripts/functions.sh"},'#!/bin/bash\n\nopenRepoUrl() {\n    local gitUrl=$(git remote get-url --all origin)\n    local repoUrl="${gitUrl%".git"}" # Removing .git prefix\n    if [[ -n "$repoUrl" ]]; then\n        echo "repoUrl:$repoUrl"\n        xdg-open $repoUrl\n    fi\n}\n\n# REQUIRES fzf, this list the current folder interactively\n\nlsf() {\n    local chosenDir=$(ls | fzf)\n    if [[ -n "$chosenDir" ]]; then\n        cd $chosenDir\n    fi\n}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"No need to focus on the implementation, I just want to point out some examples.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"functionsExecution",src:a(2058).Z})),(0,o.kt)("h2",{id:"how-to-integrate-those-shortcuts-in-the-bash-terminal"},"How to integrate those shortcuts in the bash terminal?"),(0,o.kt)("p",null,"In order to load the shortcuts every time we open a terminal, we have to append them in the shell profile (",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.bashrc")," for bash terminal, and ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.zshrc")," for zsh). "),(0,o.kt)("p",null,"However, the profile script will become bigger for every new shortcut we add, to make this extensible we will ",(0,o.kt)("em",{parentName:"p"},"source")," (",(0,o.kt)("a",{parentName:"p",href:"https://linuxize.com/post/bash-source-command/"},"load"),") the shortcuts from separate scripts. Let me list them:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"alias-bash.sh.sh")," /  ",(0,o.kt)("inlineCode",{parentName:"li"},"alias-zsh.sh")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"functions.sh"))),(0,o.kt)("p",null,"Append the next code to your profile:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"file=./code/sourceScripts.sh",file:"./code/sourceScripts.sh"},'# update this to your scripts folder\nscriptsFolder="YOUR_PATH/scripts"\n\n# source all scripts (instead of `source`, we could use `.` both are the same command)\nfor i in $scriptsFolder/*.sh; do source "$i"; done\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Some notes about loading the functions:"),(0,o.kt)("p",null,"if you want to use the functions in scripts that you call manually from the terminal, you have to ",(0,o.kt)("inlineCode",{parentName:"p"},"export")," them as next:"),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"bash",label:"bash",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"funcName(){\n\n}\nexport -f funcName\n"))),(0,o.kt)(u.Z,{value:"zsh",label:"zsh",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"funcName(){\n\n}\nexport funcName\n")))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.baeldung.com/linux/bash-variables-export"},"reference"))),(0,o.kt)("p",null,"Nothing else! I hope this saves you some time using the terminal. Do you have similar shortcuts? Share them in the comments below."),(0,o.kt)(i.Z,{id:"ZVik7pBtu9dNS",mdxType:"Gif"}),(0,o.kt)(c.ZP,{mdxType:"AboutMe"}),(0,o.kt)(l.ShareDocusaurus,{preSlug:h.group,slug:h.slug,title:h.title,tags:h.tags,mdxType:"ShareDocusaurus"}),(0,o.kt)(p.Z,{mdxType:"Comments"}))}v.isMDXComponent=!0},3114:function(e,t,a){a.d(t,{ZP:function(){return s}});var n=a(3117),r=a(102),o=(a(7294),a(3905)),l=["components"],i={toc:[{value:"About me",id:"about-me",children:[{value:"Experience",id:"experience",children:[],level:3},{value:"Personal Projects:",id:"personal-projects",children:[],level:3}],level:2}]};function s(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"about-me"},"About me"),(0,o.kt)("p",null,"I'm a Software Engineer with experience as Developer and DevOps. I define myself as a challenge-seeker person and team player. I simply give it all to deliver high-quality solutions. On the other hand, I like to analyze and improve processes, promote ",(0,o.kt)("a",{parentName:"p",href:"https://cangulo.github.io/blog/tags/productivity"},"productivity")," and ",(0,o.kt)("a",{parentName:"p",href:"https://cangulo.github.io/meetups/vscode-for-documentation"},"document implementations")," (yes, I'm a developer that likes to document \ud83e\uddd1\u200d\ud83d\udcbb). Feel free to contact me via LinkedIn."),(0,o.kt)("h3",{id:"experience"},"Experience"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"C# (BE developer), Terraform (IaC), Bash and Powershell scripts "),(0,o.kt)("li",{parentName:"ul"},"AWS (AWS Developer Associate Certified ) and Azure"),(0,o.kt)("li",{parentName:"ul"},"DevOps: Bitbucket Pipelines and GitHub Actions for Continuous Integration and Deployment. "),(0,o.kt)("li",{parentName:"ul"},"NUKE for implementing release processes, also done using Bash scripts")),(0,o.kt)("h3",{id:"personal-projects"},"Personal Projects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cangulo.github.io"},"Personal Blog")," (react, docusaurus)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/cangulo-nugets"},"Nuget Packages")),(0,o.kt)("li",{parentName:"ul"},"Projects for CICD:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/cangulo-nuke/cangulo.nuke.releasecreator"},"cangulo.nuke.releasecreator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/cangulo-nuke/cangulo.nuke.prcommitsvalidations"},"cangulo.nuke.prcommitsvalidations")))),(0,o.kt)("li",{parentName:"ul"},"GH Actions: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/cangulo-actions"},"cangulo-actions")),(0,o.kt)("li",{parentName:"ul"},"npm packages: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/cangulo/blog-components"},"blog-components")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cangulo.github.io/projects/"},"Full List"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/cangulo/cangulo/raw/main/profile_picture_aboutme_post_area.png",alt:"profile image"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Per aspera ad astra.")),(0,o.kt)("p",null,"LinkedIn - ",(0,o.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/angulomascarell"},"Carlos Angulo Mascarell"),(0,o.kt)("br",{parentName:"p"}),"\n","Twitter - ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/angulomascarell"},"@AnguloMascarell"),(0,o.kt)("br",{parentName:"p"}),"\n","GitHub - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cangulo"},"Carlos Angulo Mascarell - cangulo"),(0,o.kt)("br",{parentName:"p"}),"\n","Personal Blog - ",(0,o.kt)("a",{parentName:"p",href:"https://cangulo.github.io"},"cangulo.github.io")))}s.isMDXComponent=!0},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},6396:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(3117),r=a(7294),o=a(2389),l=a(9443);var i=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(3810),u=a(6010),c="tabItem_1uMI";function p(e){var t,a,n,o=e.lazy,l=e.block,p=e.defaultValue,m=e.values,h=e.groupId,d=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,s.lx)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=f[0])?void 0:n.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=i(),y=v.tabGroupChoices,N=v.setTabGroupChoices,w=(0,r.useState)(k),E=w[0],x=w[1],T=[],I=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var C=y[h];null!=C&&C!==E&&b.some((function(e){return e.value===C}))&&x(C)}var _=function(e){var t=e.currentTarget,a=T.indexOf(t),n=b[a].value;n!==E&&(I(t),x(n),null!=h&&N(h,n))},O=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=T.indexOf(e.currentTarget)+1;a=T[n]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;a=T[r]||T[T.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":l},d)},b.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":E===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:O,onFocus:_,onClick:_},null!=a?a:t)}))),o?(0,r.cloneElement)(f.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,o.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},615:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(7294),r=a(5697),o=a.n(r);function l(e,t){var a=document.createElement("script");a.src=e,a.id=t,document.body.appendChild(a)}function i(e){var t=document.getElementById(e);e&&t.parentElement.removeChild(t)}var s=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},p=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},m=function(e){function t(){return s(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),u(t,[{key:"setVariables",value:function(){window.HYVOR_TALK_WEBSITE=this.props.websiteId,window.HYVOR_TALK_CONFIG={url:this.props.url||!1,id:this.props.id||!1,title:this.props.title||document.title,loadMode:this.props.loadMode||"default",language:this.props.language||null,sso:this.props.sso||null,palette:this.props.palette||null}}},{key:"addScript",value:function(){document.getElementById("ht-embed-script")&&i("ht-embed-script"),l("//talk.hyvor.com/web-api/embed","ht-embed-script")}},{key:"componentDidMount",value:function(){this.setVariables(),this.addScript()}},{key:"render",value:function(){return n.createElement("div",{id:"hyvor-talk-view"})}}]),t}(n.Component);m.propTypes={websiteId:o().number.isRequired,url:o().any,id:o().any,title:o().string,loadMode:o().any,language:o().string,sso:o().object,palette:o().object};var h=function(e){function t(){return s(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),u(t,[{key:"setVariables",value:function(){this.props.websiteId&&(window.HYVOR_TALK_WEBSITE=this.props.websiteId)}},{key:"componentDidMount",value:function(){this.setVariables();var e="ht-comment-count-script";document.getElementById(e)&&i(e),l("//talk.hyvor.com/web-api/count/",e)}},{key:"render",value:function(){return n.createElement("span",{"data-talk-id":this.props.id,"data-talk-mode":this.props.mode||"default"})}}]),t}(n.Component);h.propTypes={id:o().any,mode:o().any,websiteId:o().number};var d={Embed:m,CommentCount:h},f=a(2263),b=function(){var e=(0,f.default)().siteConfig,t=parseInt(e.customFields.hyvorTalkSiteId);return n.createElement("section",null,n.createElement("h2",null,"Comments"),n.createElement(d.Embed,{loadMode:"scroll",websiteId:t}))}},6339:function(e,t,a){var n=a(7294),r=a(5697),o=a.n(r);function l(e){var t=e.id;return n.createElement("div",{style:{textAlign:"center"}},n.createElement("iframe",{src:"https://giphy.com/embed/"+t,width:"480",height:"270",frameBorder:"0",className:"giphy-embed",scrolling:"no"}),n.createElement("p",null,n.createElement("a",{href:"https://giphy.com/gifs/"+t},"via GIPHY")))}l.propTypes={id:o().string.isRequired},t.Z=l},2058:function(e,t,a){t.Z=a.p+"assets/images/functionsExecution-61eb9d4297eaf66de695a1406632d7f3.gif"},5140:function(e,t,a){t.Z=a.p+"assets/images/goToReposExecution-ff7d0fff9e507c99ef44ac7b7f00907e.gif"}}]);