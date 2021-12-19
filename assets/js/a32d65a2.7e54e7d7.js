"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[1501],{1838:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return h},metadata:function(){return f},assets:function(){return b},toc:function(){return g},default:function(){return v}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),s=n(6785),i=n(6339),l=n(3114),u=n(6396),c=n(8215),p=n(615),d=["components"],m={slug:"bash/2-add-shortcuts",title:"Add shortcuts to your bash terminal",date:new Date("2020-12-14T00:00:00.000Z"),authors:"cangulo",tags:["linux","productivity","hack","bash","zsh","terminal"]},h=void 0,f={permalink:"/blog/bash/2-add-shortcuts",editUrl:"https://github.com/cangulo/cangulo.github.io/blob/main/blog/posts/bash/2-add-shortcuts/2-add-shortcuts.mdx",source:"@site/blog/posts/bash/2-add-shortcuts/2-add-shortcuts.mdx",title:"Add shortcuts to your bash terminal",description:"In this post, I will define shortcuts in my bash terminal. The implementation is based on using aliases and functions. Super simple!",date:"2020-12-14T00:00:00.000Z",formattedDate:"December 14, 2020",tags:[{label:"linux",permalink:"/blog/tags/linux"},{label:"productivity",permalink:"/blog/tags/productivity"},{label:"hack",permalink:"/blog/tags/hack"},{label:"bash",permalink:"/blog/tags/bash"},{label:"zsh",permalink:"/blog/tags/zsh"},{label:"terminal",permalink:"/blog/tags/terminal"}],readingTime:1.86,truncated:!0,authors:[{name:"Carlos Angulo Mascarell",title:"Software Engineer",url:"https://github.com/cangulo",imageURL:"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png",key:"cangulo"}],prevItem:{title:"Load custom variables at Terminal startup",permalink:"/blog/bash/3-load-vars"},nextItem:{title:"Create an interactive bookmarks menu in your terminal",permalink:"/blog/bash/1-interactive-bookmarks"}},b={authorsImageUrls:[void 0]},g=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"Aliases",id:"aliases",children:[],level:2},{value:"Functions",id:"functions",children:[],level:2},{value:"How to integrate those shortcuts in the bash terminal?",id:"how-to-integrate-those-shortcuts-in-the-bash-terminal",children:[],level:2}],k={toc:g};function v(e){var t=e.components,h=(0,r.Z)(e,d);return(0,o.kt)("wrapper",(0,a.Z)({},k,h,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this post, I will define shortcuts in my bash terminal. The implementation is based on using aliases and functions. Super simple!"),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Linux (I'm using ",(0,o.kt)("a",{parentName:"li",href:"https://elementary.io"},"Elementary OS"),", a Ubuntu-based distro, check it!)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://code.visualstudio.com"},"VS Code"),". If you don't want to use it, change all the ",(0,o.kt)("inlineCode",{parentName:"li"},"code")," commands in the bash code for your text editor. Alternatives: ",(0,o.kt)("em",{parentName:"li"},"gedit")," or ",(0,o.kt)("a",{parentName:"li",href:"https://gitlab.gnome.org/GNOME/gnome-text-editor"},"gnome-text-editor"),"."),(0,o.kt)("li",{parentName:"ul"},"Remember to add execution permissions to the scripts through ",(0,o.kt)("inlineCode",{parentName:"li"},"chmod +x"))),(0,o.kt)("h2",{id:"aliases"},"Aliases"),(0,o.kt)("p",null,"You can create ",(0,o.kt)("strong",{parentName:"p"},"aliases")," to avoid type long commands. Next are some examples:"),(0,o.kt)(u.Z,{mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"bash",label:"bash",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"file=./code/scripts/aliases-bash.sh#L3-",file:"./code/scripts/aliases-bash.sh#L3-"},'alias tf="terraform"\nalias goToRepos="cd $HOME/repos"\nalias editAwsCredentials="code $HOME/.aws"\nalias editBashProfile="code $HOME/.bashrc"\n')),(0,o.kt)(s.CaptionDocusaurus,{label:"aliases-bash.sh",linkIsRelative:!0,link:"posts/bash/2-add-shortcuts/code/scripts/aliases-bash.sh",mdxType:"CaptionDocusaurus"})),(0,o.kt)(c.Z,{value:"zsh",label:"zsh",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"file=./code/scripts/aliases-zsh.sh#L3-",file:"./code/scripts/aliases-zsh.sh#L3-"},'alias tf="terraform"\nalias goToRepos="cd $HOME/repos"\nalias editAwsCredentials="code $HOME/.aws"\nalias editZshProfile="code $HOME/.zshrc"\n')),(0,o.kt)(s.CaptionDocusaurus,{label:"aliases-zsh.sh",linkIsRelative:!0,link:"posts/bash/2-add-shortcuts/code/scripts/aliases-zsh.sh",mdxType:"CaptionDocusaurus"}))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"goToReposExecution",src:n(5140).Z})),(0,o.kt)("p",null,"Please note ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME")," is an environment variable defined by the system, it refers to your home path, in my case ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/carlos"),"."),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("p",null,"You can also define functions as shortcuts for daily tasks. I have the next ones:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"file=./code/scripts/functions.sh",file:"./code/scripts/functions.sh"},'#!/bin/bash\n\nopenRepoUrl() {\n    local gitUrl=$(git remote get-url --all origin)\n    local repoUrl="${gitUrl%".git"}" # Removing .git prefix\n    if [[ -n "$repoUrl" ]]; then\n        echo "repoUrl:$repoUrl"\n        xdg-open $repoUrl\n    fi\n}\n\n# REQUIRES fzf, this list the current folder interactively\n\nlsf() {\n    local chosenDir=$(ls | fzf)\n    if [[ -n "$chosenDir" ]]; then\n        cd $chosenDir\n    fi\n}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"No need to focus on the implementation, I just want to point out some examples.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"functionsExecution",src:n(2058).Z})),(0,o.kt)("h2",{id:"how-to-integrate-those-shortcuts-in-the-bash-terminal"},"How to integrate those shortcuts in the bash terminal?"),(0,o.kt)("p",null,"In order to load the shortcuts every time we open a terminal, we have to append them in the shell profile (",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.bashrc")," for bash terminal, and ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.zshrc")," for zsh). "),(0,o.kt)("p",null,"However, the profile script will become bigger for every new shortcut we add, to make this extensible we will ",(0,o.kt)("em",{parentName:"p"},"source")," (",(0,o.kt)("a",{parentName:"p",href:"https://linuxize.com/post/bash-source-command/"},"load"),") the shortcuts from separate scripts. Let me list them:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"alias-bash.sh.sh")," /  ",(0,o.kt)("inlineCode",{parentName:"li"},"alias-zsh.sh")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"functions.sh"))),(0,o.kt)("p",null,"Append the next code to your profile:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"file=./code/sourceScripts.sh",file:"./code/sourceScripts.sh"},'# update this to your scripts folder\nscriptsFolder="YOUR_PATH/scripts"\n\n# source all scripts (instead of `source`, we could use `.` both are the same command)\nfor i in $scriptsFolder/*.sh; do source "$i"; done\n')),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Some notes about loading the functions:"),(0,o.kt)("p",null,"if you want to use the functions in scripts that you call manually from the terminal, you have to ",(0,o.kt)("inlineCode",{parentName:"p"},"export")," them as next:"),(0,o.kt)(u.Z,{mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"bash",label:"bash",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"funcName(){\n\n}\nexport -f funcName\n"))),(0,o.kt)(c.Z,{value:"zsh",label:"zsh",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"funcName(){\n\n}\nexport funcName\n")))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.baeldung.com/linux/bash-variables-export"},"reference"))),(0,o.kt)("p",null,"Nothing else! I hope this saves you some time using the terminal. Do you have similar shortcuts? Share them in the comments below."),(0,o.kt)(i.Z,{id:"ZVik7pBtu9dNS",mdxType:"Gif"}),(0,o.kt)(l.ZP,{mdxType:"AboutMe"}),(0,o.kt)(s.ShareDocusaurus,{preSlug:"blog/posts",slug:m.slug,title:m.title,tags:m.tags,mdxType:"ShareDocusaurus"}),(0,o.kt)(p.Z,{mdxType:"Comments"}))}v.isMDXComponent=!0},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(3117),r=n(7294),o=n(2389),s=n(9443);var i=function(){var e=(0,r.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(3810),u=n(6010),c="tabItem_1uMI";function p(e){var t,n,a,o=e.lazy,s=e.block,p=e.defaultValue,d=e.values,m=e.groupId,h=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=i(),y=v.tabGroupChoices,w=v.setTabGroupChoices,E=(0,r.useState)(k),N=E[0],x=E[1],T=[],I=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=y[m];null!=C&&C!==N&&b.some((function(e){return e.value===C}))&&x(C)}var _=function(e){var t=e.currentTarget,n=T.indexOf(t),a=b[n].value;a!==N&&(I(t),x(a),null!=m&&w(m,a))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":s},h)},b.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":N===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:O,onFocus:_,onClick:_},null!=n?n:t)}))),o?(0,r.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function d(e){var t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},615:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(7294),r=n(5697),o=n.n(r);function s(e,t){var n=document.createElement("script");n.src=e,n.id=t,document.body.appendChild(n)}function i(e){var t=document.getElementById(e);e&&t.parentElement.removeChild(t)}var l=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},p=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},d=function(e){function t(){return l(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),u(t,[{key:"setVariables",value:function(){window.HYVOR_TALK_WEBSITE=this.props.websiteId,window.HYVOR_TALK_CONFIG={url:this.props.url||!1,id:this.props.id||!1,title:this.props.title||document.title,loadMode:this.props.loadMode||"default",language:this.props.language||null,sso:this.props.sso||null,palette:this.props.palette||null}}},{key:"addScript",value:function(){document.getElementById("ht-embed-script")&&i("ht-embed-script"),s("//talk.hyvor.com/web-api/embed","ht-embed-script")}},{key:"componentDidMount",value:function(){this.setVariables(),this.addScript()}},{key:"render",value:function(){return a.createElement("div",{id:"hyvor-talk-view"})}}]),t}(a.Component);d.propTypes={websiteId:o().number.isRequired,url:o().any,id:o().any,title:o().string,loadMode:o().any,language:o().string,sso:o().object,palette:o().object};var m=function(e){function t(){return l(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),u(t,[{key:"setVariables",value:function(){this.props.websiteId&&(window.HYVOR_TALK_WEBSITE=this.props.websiteId)}},{key:"componentDidMount",value:function(){this.setVariables();var e="ht-comment-count-script";document.getElementById(e)&&i(e),s("//talk.hyvor.com/web-api/count/",e)}},{key:"render",value:function(){return a.createElement("span",{"data-talk-id":this.props.id,"data-talk-mode":this.props.mode||"default"})}}]),t}(a.Component);m.propTypes={id:o().any,mode:o().any,websiteId:o().number};var h={Embed:d,CommentCount:m},f=n(2263),b=function(){var e=(0,f.default)().siteConfig,t=parseInt(e.customFields.hyvorTalkSiteId);return a.createElement("section",null,a.createElement("h2",null,"Comments"),a.createElement(h.Embed,{loadMode:"scroll",websiteId:t}))}},6339:function(e,t,n){var a=n(7294),r=n(5697),o=n.n(r);function s(e){var t=e.id;return a.createElement("div",{style:{textAlign:"center"}},a.createElement("iframe",{src:"https://giphy.com/embed/"+t,width:"480",height:"270",frameBorder:"0",className:"giphy-embed",scrolling:"no"}),a.createElement("p",null,a.createElement("a",{href:"https://giphy.com/gifs/"+t},"via GIPHY")))}s.propTypes={id:o().string.isRequired},t.Z=s},2058:function(e,t,n){t.Z=n.p+"assets/images/functionsExecution-61eb9d4297eaf66de695a1406632d7f3.gif"},5140:function(e,t,n){t.Z=n.p+"assets/images/goToReposExecution-ff7d0fff9e507c99ef44ac7b7f00907e.gif"}}]);