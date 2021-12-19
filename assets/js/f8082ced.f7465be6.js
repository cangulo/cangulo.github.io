"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[8901],{1294:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return k},assets:function(){return d},toc:function(){return h},default:function(){return f}});var a=n(3117),o=n(102),i=(n(7294),n(3905)),l=n(6785),r=n(6339),s=n(3114),u=n(615),m=["components"],p={slug:"bash/1-interactive-bookmarks",title:"Create an interactive bookmarks menu in your terminal",date:new Date("2020-12-11T00:00:00.000Z"),group:"blog",authors:"cangulo",tags:["linux","productivity","hack","bash","zsh","terminal"]},c=void 0,k={permalink:"/blog/bash/1-interactive-bookmarks",editUrl:"https://github.com/cangulo/cangulo.github.io/blob/main/blog/posts/bash/1-interactive-bookmarks/1-interactive-bookmarks.mdx",source:"@site/blog/posts/bash/1-interactive-bookmarks/1-interactive-bookmarks.mdx",title:"Create an interactive bookmarks menu in your terminal",description:"In this post, I am going to implement an interactive bookmarks menu using fzf in bash Terminal.",date:"2020-12-11T00:00:00.000Z",formattedDate:"December 11, 2020",tags:[{label:"linux",permalink:"/blog/tags/linux"},{label:"productivity",permalink:"/blog/tags/productivity"},{label:"hack",permalink:"/blog/tags/hack"},{label:"bash",permalink:"/blog/tags/bash"},{label:"zsh",permalink:"/blog/tags/zsh"},{label:"terminal",permalink:"/blog/tags/terminal"}],readingTime:2.405,truncated:!0,authors:[{name:"Carlos Angulo Mascarell",title:"Software Engineer",url:"https://github.com/cangulo",imageURL:"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png",key:"cangulo"}],prevItem:{title:"Add shortcuts to your bash terminal",permalink:"/blog/bash/2-add-shortcuts"},nextItem:{title:"How to use the PowerShell Profile to be more productive",permalink:"/blog/ps-profile-productive"}},d={authorsImageUrls:[void 0]},h=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"Demo",id:"demo",children:[],level:2},{value:"Implementation",id:"implementation",children:[{value:"1. Read the bookmarks",id:"1-read-the-bookmarks",children:[],level:3},{value:"2. List the bookmarks",id:"2-list-the-bookmarks",children:[],level:3},{value:"3. Once a bookmark is selected, navigate to it",id:"3-once-a-bookmark-is-selected-navigate-to-it",children:[],level:3}],level:2},{value:"Bonus: execute this every time you open a terminal",id:"bonus-execute-this-every-time-you-open-a-terminal",children:[],level:2}],b={toc:h};function f(e){var t=e.components,c=(0,o.Z)(e,m);return(0,i.kt)("wrapper",(0,a.Z)({},b,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this post, I am going to implement an interactive bookmarks menu using fzf in bash Terminal."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Linux (I'm using ",(0,i.kt)("a",{parentName:"li",href:"https://elementary.io"},"Elementary OS"),", a Ubuntu-based distro, check it!)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/junegunn/fzf"},"fzf")," command-line fuzzy finder"),(0,i.kt)("li",{parentName:"ul"},"Remember to add execution permissions to the scripts through ",(0,i.kt)("inlineCode",{parentName:"li"},"chmod +x"))),(0,i.kt)("h2",{id:"demo"},"Demo"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"goal",src:n(7189).Z})),(0,i.kt)("p",null,"As you see, every time I call ",(0,i.kt)("inlineCode",{parentName:"p"},"listBookmarks")," the following paths are listed interactively:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/home/cangulo/repos/cangulo-tf"),(0,i.kt)("li",{parentName:"ul"},"/home/cangulo/repos/cangulo-nuke")),(0,i.kt)("p",null,"I can move through them using the up/down keys, and navigate into by pressing Enter."),(0,i.kt)("p",null,"On the other hand, in case similar paths are listed, I can filter by typing keywords."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"goal",src:n(1122).Z})),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"file=./code/listbookmarks.sh",file:"./code/listbookmarks.sh"},'#!/bin/bash\n\nlistBookmarks() {\n    local bookmarksFile=./bookmarks.json\n\n    local pathSelected=$(cat $bookmarksFile |\n        jq -r \'.[]\' |\n        fzf)\n\n    if [[ -n "$pathSelected" ]]; then\n        cd $pathSelected\n    else\n        echo "no bookmark selected"\n    fi\n}\n')),(0,i.kt)(l.CaptionDocusaurus,{label:"listBookmarks function",linkIsRelative:!0,link:"posts/bash/1-interactive-bookmarks/code/listbookmarks.sh",mdxType:"CaptionDocusaurus"}),(0,i.kt)("p",null,"Let me define the basic structure:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Read the paths (i.e. ",(0,i.kt)("em",{parentName:"li"},"bookmarks"),")"),(0,i.kt)("li",{parentName:"ol"},"List them in an interactive way"),(0,i.kt)("li",{parentName:"ol"},"Once a bookmark is selected, navigate to it")),(0,i.kt)("p",null,"Now let's dive into the details:"),(0,i.kt)("h3",{id:"1-read-the-bookmarks"},"1. Read the bookmarks"),(0,i.kt)("p",null,"First, in order to make this extensible, the paths are listed in a JSON file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"file=code/bookmarks.json",file:"code/bookmarks.json"},'[\n    "/home/cangulo/repos/cangulo-tf",\n    "/home/cangulo/repos/cangulo-nuke"\n]\n')),(0,i.kt)(l.CaptionDocusaurus,{label:"bookmarks",linkIsRelative:!0,link:"posts/bash/1-interactive-bookmarks/code/bookmarks.json",mdxType:"CaptionDocusaurus"}),(0,i.kt)("p",null,"We can print the file content using ",(0,i.kt)("inlineCode",{parentName:"p"},"cat"),", and then use ",(0,i.kt)("inlineCode",{parentName:"p"},"jq")," to query the array items. "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"cat $bookmarksFile  | jq -r '.[]'")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Why I'm using a JSON file instead of a simple text file. Click here for the answer:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"TODO: Update this with the article link\nIt is because in the next article I will define more advanced bookmarks with different properties used by new features \ud83d\ude01\n"))),(0,i.kt)("h3",{id:"2-list-the-bookmarks"},"2. List the bookmarks"),(0,i.kt)("p",null,"Here is where ",(0,i.kt)("inlineCode",{parentName:"p"},"fzf")," comes up. Anything that ",(0,i.kt)("inlineCode",{parentName:"p"},"fzf"),"  receives is listed interactively. In this case, we pipe the ",(0,i.kt)("inlineCode",{parentName:"p"},"jq")," result to ",(0,i.kt)("inlineCode",{parentName:"p"},"fzf"),", so the bookmarks are listed as shown in the ",(0,i.kt)("a",{parentName:"p",href:"#demo"},"demo")," section."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"cat $bookmarksFile | jq -r '.[]' | fzf")),(0,i.kt)("h3",{id:"3-once-a-bookmark-is-selected-navigate-to-it"},"3. Once a bookmark is selected, navigate to it"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fzf")," returns the path selected, we save it to a variable."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"local pathSelected=$(cat $bookmarksFile | jq -r '.[]' | fzf)")),(0,i.kt)("p",null,"Last, we check if it is not empty (",(0,i.kt)("inlineCode",{parentName:"p"},"-n"),") before moving into:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'if [[ -n "$pathSelected" ]]; then\n    cd $pathSelected\nelse\n    echo "no bookmark selected"\nfi\n')),(0,i.kt)("h2",{id:"bonus-execute-this-every-time-you-open-a-terminal"},"Bonus: execute this every time you open a terminal"),(0,i.kt)("p",null,"You have to add this in your bash or zsh profile (",(0,i.kt)("em",{parentName:"p"},".bashrc"),", ",(0,i.kt)("em",{parentName:"p"},".zshrc")," ). Just append the ",(0,i.kt)("inlineCode",{parentName:"p"},"listBookmarks")," implementation at the end, update the ",(0,i.kt)("inlineCode",{parentName:"p"},"bookmarksFile")," variable to be a full path, and call the function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"listBookmarks() {\n    local bookmarksFile='YOUR_PATH/bookmarks.json'\n    local pathSelected=$(cat $bookmarksFile |\n        jq -r '.[]' |\n        fzf)\n\n    if [[ -n \"$pathSelected\" ]]; then\n        cd $pathSelected\n    else\n        echo \"no bookmark selected\"\n    fi\n}\n\nlistBookmarks\n")),(0,i.kt)("p",null,"And that is all! I hope this saves you some time using the terminal. Do you find this useful? Do you have similar functions? Let me know in the comments below."),(0,i.kt)(r.Z,{id:"xUPOqo6E1XvWXwlCyQ",mdxType:"Gif"}),(0,i.kt)(s.ZP,{mdxType:"AboutMe"}),(0,i.kt)(l.ShareDocusaurus,{preSlug:p.group,slug:p.slug,title:p.title,tags:p.tags,mdxType:"ShareDocusaurus"}),(0,i.kt)(u.Z,{mdxType:"Comments"}))}f.isMDXComponent=!0},615:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(7294),o=n(5697),i=n.n(o);function l(e,t){var n=document.createElement("script");n.src=e,n.id=t,document.body.appendChild(n)}function r(e){var t=document.getElementById(e);e&&t.parentElement.removeChild(t)}var s=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),m=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},p=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},c=function(e){function t(){return s(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m(t,e),u(t,[{key:"setVariables",value:function(){window.HYVOR_TALK_WEBSITE=this.props.websiteId,window.HYVOR_TALK_CONFIG={url:this.props.url||!1,id:this.props.id||!1,title:this.props.title||document.title,loadMode:this.props.loadMode||"default",language:this.props.language||null,sso:this.props.sso||null,palette:this.props.palette||null}}},{key:"addScript",value:function(){document.getElementById("ht-embed-script")&&r("ht-embed-script"),l("//talk.hyvor.com/web-api/embed","ht-embed-script")}},{key:"componentDidMount",value:function(){this.setVariables(),this.addScript()}},{key:"render",value:function(){return a.createElement("div",{id:"hyvor-talk-view"})}}]),t}(a.Component);c.propTypes={websiteId:i().number.isRequired,url:i().any,id:i().any,title:i().string,loadMode:i().any,language:i().string,sso:i().object,palette:i().object};var k=function(e){function t(){return s(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m(t,e),u(t,[{key:"setVariables",value:function(){this.props.websiteId&&(window.HYVOR_TALK_WEBSITE=this.props.websiteId)}},{key:"componentDidMount",value:function(){this.setVariables();var e="ht-comment-count-script";document.getElementById(e)&&r(e),l("//talk.hyvor.com/web-api/count/",e)}},{key:"render",value:function(){return a.createElement("span",{"data-talk-id":this.props.id,"data-talk-mode":this.props.mode||"default"})}}]),t}(a.Component);k.propTypes={id:i().any,mode:i().any,websiteId:i().number};var d={Embed:c,CommentCount:k},h=n(2263),b=function(){var e=(0,h.default)().siteConfig,t=parseInt(e.customFields.hyvorTalkSiteId);return a.createElement("section",null,a.createElement("h2",null,"Comments"),a.createElement(d.Embed,{loadMode:"scroll",websiteId:t}))}},6339:function(e,t,n){var a=n(7294),o=n(5697),i=n.n(o);function l(e){var t=e.id;return a.createElement("div",{style:{textAlign:"center"}},a.createElement("iframe",{src:"https://giphy.com/embed/"+t,width:"480",height:"270",frameBorder:"0",className:"giphy-embed",scrolling:"no"}),a.createElement("p",null,a.createElement("a",{href:"https://giphy.com/gifs/"+t},"via GIPHY")))}l.propTypes={id:i().string.isRequired},t.Z=l},1122:function(e,t,n){t.Z=n.p+"assets/images/demo_filter-512e76936638ae025f1b5a123e9f08be.gif"},7189:function(e,t,n){t.Z=n.p+"assets/images/goal-3323dbe631cfade73171a41aca6dc54e.gif"}}]);