"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[1237],{939:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return h},assets:function(){return d},toc:function(){return f},default:function(){return g}});var n=a(7462),l=a(3366),i=(a(7294),a(3905)),o=a(6785),r=a(4888),s=a(6339),u=a(3114),c=(a(6396),a(8215),["components"]),m={slug:"bash/3-setup-custom-env-vars",title:"Load specific variables at Terminal startup",date:new Date("2020-12-14T00:00:00.000Z"),authors:"cangulo",tags:["linux","productivity","hack","bash","zsh","terminal"]},p=void 0,h={permalink:"/blog/bash/3-setup-custom-env-vars",editUrl:"https://github.com/cangulo/cangulo.github.io/blob/main/blog/posts/bash/3-setup-custom-env-variables/customize-bash-terminal.mdx",source:"@site/blog/posts/bash/3-setup-custom-env-variables/customize-bash-terminal.mdx",title:"Load specific variables at Terminal startup",description:"In this post, I will explain how to load custom variables by reading a JSON file, this will be done every time we open a Terminal. I will also improve the shortcuts we create in the previous posts.",date:"2020-12-14T00:00:00.000Z",formattedDate:"December 14, 2020",tags:[{label:"linux",permalink:"/blog/tags/linux"},{label:"productivity",permalink:"/blog/tags/productivity"},{label:"hack",permalink:"/blog/tags/hack"},{label:"bash",permalink:"/blog/tags/bash"},{label:"zsh",permalink:"/blog/tags/zsh"},{label:"terminal",permalink:"/blog/tags/terminal"}],readingTime:2.865,truncated:!0,authors:[{name:"Carlos Angulo Mascarell",title:"Software Engineer",url:"https://github.com/cangulo",imageURL:"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png",key:"cangulo"}],prevItem:{title:"Add shortcuts to your bash terminal",permalink:"/blog/bash/2-add-shortcuts"},nextItem:{title:"Create an interactive bookmarks menu in your terminal",permalink:"/blog/bash/1-interactive-bookmarks"}},d={authorsImageUrls:[void 0]},f=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"Notes",id:"notes",children:[],level:2},{value:"Variables",id:"variables",children:[],level:2},{value:"Behavior vs Configuration",id:"behavior-vs-configuration",children:[],level:2},{value:"One extra mile: Define the parameters as JSON",id:"one-extra-mile-define-the-parameters-as-json",children:[],level:2}],k={toc:f};function g(e){var t=e.components,m=(0,l.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},k,m,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this post, I will explain how to load custom variables by reading a JSON file, this will be done every time we open a Terminal. I will also improve the shortcuts we create in the previous posts."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Linux (I'm using ",(0,i.kt)("a",{parentName:"li",href:"https://elementary.io"},"Elementary OS"),", a Ubuntu-based distro, check it!)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com"},"VS Code"),". If you don't want to use it, change all the ",(0,i.kt)("inlineCode",{parentName:"li"},"code")," commands in the bash code for your text editor. Alternatives: ",(0,i.kt)("em",{parentName:"li"},"gedit")," or ",(0,i.kt)("a",{parentName:"li",href:"https://gitlab.gnome.org/GNOME/gnome-text-editor"},"gnome-text-editor"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/junegunn/fzf"},"fzf")," command-line fuzzy finder")),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Remember to add execution permissions to the scripts through ",(0,i.kt)("inlineCode",{parentName:"li"},"chmod +x")),(0,i.kt)("li",{parentName:"ul"},"Profile script: ",(0,i.kt)("inlineCode",{parentName:"li"},"$HOME/.bashrc")," for bash terminal and ",(0,i.kt)("inlineCode",{parentName:"li"},"$HOME/.zshrc")," for zsh ")),(0,i.kt)("h2",{id:"variables"},"Variables"),(0,i.kt)("p",null,"Let's say I want to define some variables as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"my local github repositories path"),(0,i.kt)("li",{parentName:"ul"},"my documents path"),(0,i.kt)("li",{parentName:"ul"},"path to a specific file, in this case, the path to a JSON file containing some bookmarks I have, check my ",(0,i.kt)("a",{parentName:"li",href:"/blog/bash/1-interactive-bookmarks"},"previous post"))),(0,i.kt)("p",null,"Then, we define them in the profile script as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"file=./code/1-declare-vars.sh#L3-",file:"./code/1-declare-vars.sh#L3-"},'# add this at the end of your profile\nlocalRepos="$HOME/repos"\nlocalDocuments="$HOME/Documents"\nbookmarksFile="$localRepos/cangulo-blog/cangulo.github.io/blog/posts/bash/3-setup-custom-env-variables/code/4-bookmarks.json"\n')),(0,i.kt)("p",null,"Now we can use them during the terminal session as well as from any defined function. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"using the variables after loading the terminal",src:a(2837).Z})),(0,i.kt)("p",null,"Let's append the next function and alias at the bash profile. Please note those are using the variables defined before."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"file=./code/2-add-functions.sh#L3-",file:"./code/2-add-functions.sh#L3-"},'# add this at the end of your profile, after the variables declaration\n\nalias goToRepos="cd $localRepos"\nalias goToDocs="cd $localDocuments"\n\nlistBookmarks() {\n    local pathSelected=$(cat $bookmarksFile |\n        jq -r \'.[]\' |\n        fzf)\n\n    if [[ -n "$pathSelected" ]]; then\n        cd $pathSelected\n    else\n        echo "no bookmark selected"\n    fi\n}\n')),(0,i.kt)("p",null,"Now, we can use them after opening the Terminal."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"using the variables after loading the terminal",src:a(7751).Z})),(0,i.kt)("h2",{id:"behavior-vs-configuration"},"Behavior vs Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Behavior: Functions as ",(0,i.kt)("inlineCode",{parentName:"li"},"listBookmarks")),(0,i.kt)("li",{parentName:"ul"},"Configuration: Parameters as ",(0,i.kt)("inlineCode",{parentName:"li"},"bookmarksFile")," used in the functions.")),(0,i.kt)("p",null,"If we change the bookmarks location, should we change the ",(0,i.kt)("inlineCode",{parentName:"p"},"listBookmarks")," function ? I think not, we should decouple the configuration from the behavior as much as possible, otherwise we depend on hardcoded values along the functions making it hard to maintain. "),(0,i.kt)("p",null,"On the other hand, I think having a central location for all the parameters is much cleaner, if want to migrate  or share your current setup, you only need to copy the functions and update the parameters. Otherwise, you will have to go function-by-function updating the parameters. "),(0,i.kt)(s.Z,{id:"d3mlE7uhX8KFgEmY",mdxType:"Gif"}),(0,i.kt)("h2",{id:"one-extra-mile-define-the-parameters-as-json"},"One extra mile: Define the parameters as JSON"),(0,i.kt)("p",null,"Let's migrate the variables to a json file as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"file=./code/3-vars.json",file:"./code/3-vars.json"},'{\n    "localRepos": "/home/cangulo/repos",\n    "localDocuments": "/home/cangulo/Documents",\n    "bookmarksFile": "/home/cangulo/repos/cangulo-blog/cangulo.github.io/blog/posts/bash/3-setup-custom-env-variables/code/4-bookmarks.json"\n}\n')),(0,i.kt)("p",null,"To set the json keys as the parameters name we have to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Define the path to the json file. We will consider those as the main settings. "),(0,i.kt)("li",{parentName:"ol"},"Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"jq")," command to retrieve the keys and values."),(0,i.kt)("li",{parentName:"ol"},"Use the ",(0,i.kt)("inlineCode",{parentName:"li"},"eval")," command to execute the ",(0,i.kt)("inlineCode",{parentName:"li"},"key=value"),"  for each one.")),(0,i.kt)("p",null,"Next is the solution, replace the variables declaration in your profile for this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'settingsFile="/home/cangulo/repos/cangulo-blog/cangulo.github.io/blog/posts/bash/3-setup-custom-env-variables/code/3-vars.json"\neval "$(jq -r \'to_entries | .[] | .key + "=" + (.value | @sh)\' <$settingsFile)"\n')),(0,i.kt)("details",null,(0,i.kt)("summary",null,"In case you want to go into details in the solution. Click here."),(0,i.kt)("p",null,"References:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Settings json keys as variables",(0,i.kt)("inlineCode",{parentName:"li"},"jq"),". ",(0,i.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/a/413886"},"Link")),(0,i.kt)("li",{parentName:"ul"},"What ",(0,i.kt)("inlineCode",{parentName:"li"},"@sh")," means in ",(0,i.kt)("inlineCode",{parentName:"li"},"jq"),". Quote string for bash. ",(0,i.kt)("a",{parentName:"li",href:"https://stedolan.github.io/jq/manual/"},"Link"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"jq -r 'to_entries'"),"  structures the json as key/value pair array:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"1-to_entries.png",src:a(4063).Z})),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"jq -r 'to_entries | .[]'"),"  prepare the array items for the iteration:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"2-iterate-over-array-items.png",src:a(4354).Z})),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"jq -r 'to_entries | .[] | .key + \"=\" + .value'")," build the ",(0,i.kt)("inlineCode",{parentName:"p"},"key=value")," expressions "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"3-build-variable-declaration-code.png",src:a(1408).Z})),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"jq -r 'to_entries | .[] | .key + \"=\" + (.value | @sh)'")," format the expression\n",(0,i.kt)("img",{alt:"4-format-declaration.png",src:a(5064).Z}))),(0,i.kt)(u.ZP,{mdxType:"AboutMe"}),(0,i.kt)(o.ShareDocusaurus,{slug:"posts/bash/2-add-shortcuts",title:"Add shortcuts to your bash terminal",tags:["linux","productivity","hack","bash","zsh","terminal"],mdxType:"ShareDocusaurus"}),(0,i.kt)(r.Z,{mdxType:"Comments"}))}g.isMDXComponent=!0},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},t)}},6396:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7462),l=a(7294),i=a(2389),o=a(9443);var r=function(){var e=(0,l.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(9521),u=a(6010),c="tabItem_1uMI";function m(e){var t,a,n,i=e.lazy,o=e.block,m=e.defaultValue,p=e.values,h=e.groupId,d=e.className,f=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=p?p:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,s.lx)(k,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=f[0])?void 0:n.props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=r(),y=v.tabGroupChoices,N=v.setTabGroupChoices,w=(0,l.useState)(b),x=w[0],C=w[1],E=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var Z=y[h];null!=Z&&Z!==x&&k.some((function(e){return e.value===Z}))&&C(Z)}var I=function(e){var t=e.currentTarget,a=E.indexOf(t),n=k[a].value;n!==x&&(T(t),C(n),null!=h&&N(h,n))},j=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;a=E[n]||E[0];break;case"ArrowLeft":var l=E.indexOf(e.currentTarget)-1;a=E[l]||E[E.length-1]}null==(t=a)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":o},d)},k.map((function(e){var t=e.value,a=e.label;return l.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":x===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:j,onFocus:I,onClick:I},null!=a?a:t)}))),i?(0,l.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function p(e){var t=(0,i.Z)();return l.createElement(m,(0,n.Z)({key:String(t)},e))}},4888:function(e,t,a){var n=a(7294),l=a(4610),i=a(2263);t.Z=function(){var e=(0,i.default)().siteConfig,t=parseInt(e.customFields.hyvorTalkSiteId);return n.createElement("section",null,n.createElement("h2",null,"Comments"),n.createElement(l.Z.Embed,{loadMode:"scroll",websiteId:t}))}},6339:function(e,t,a){var n=a(7294),l=a(5697),i=a.n(l);function o(e){var t=e.id;return n.createElement("div",{style:{textAlign:"center"}},n.createElement("iframe",{src:"https://giphy.com/embed/"+t,width:"480",height:"270",frameBorder:"0",className:"giphy-embed",scrolling:"no"}),n.createElement("p",null,n.createElement("a",{href:"https://giphy.com/gifs/"+t},"via GIPHY")))}o.propTypes={id:i().string.isRequired},t.Z=o},4063:function(e,t,a){t.Z=a.p+"assets/images/1-to_entries-4082960636dd1aaf9e075d783ec05178.png"},4354:function(e,t,a){t.Z=a.p+"assets/images/2-iterate-over-array-items-5d3f7d575438227fa02b74587d21a3e9.png"},1408:function(e,t,a){t.Z=a.p+"assets/images/3-build-variable-declaration-code-ec3ce77139529c8fb6733e49085394ad.png"},5064:function(e,t,a){t.Z=a.p+"assets/images/4-format-declaration-c1fe5d41c43007a3643eb5df198f1d57.png"},7751:function(e,t,a){t.Z=a.p+"assets/images/use-gotoRepos-function-2ab80f76faa993a315443f6816e8b80a.gif"},2837:function(e,t,a){t.Z=a.p+"assets/images/use-localrepo-variable-34d5977b3146db7772ad06c461d36716.gif"}}]);