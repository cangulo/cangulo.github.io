"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[3412],{4344:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return h},toc:function(){return d},default:function(){return g}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),l=a(6785),r=a(4888),s=a(6339),m=a(3114),k=["components"],u={slug:"bash/interactive-bookmarks",title:"Create an interactive bookmarks menu in your terminal",date:new Date("2020-12-11T00:00:00.000Z"),authors:"cangulo",tags:["linux","productivity","hack","bash","zsh","terminal"]},c=void 0,p={permalink:"/blog/bash/interactive-bookmarks",editUrl:"https://github.com/cangulo/cangulo.github.io/blob/main/blog/posts/bash/interactive-bookmarks/interactive-bookmarks.mdx",source:"@site/blog/posts/bash/interactive-bookmarks/interactive-bookmarks.mdx",title:"Create an interactive bookmarks menu in your terminal",description:"In this post, I am going to implement an interactive bookmarks menu using fzf.",date:"2020-12-11T00:00:00.000Z",formattedDate:"December 11, 2020",tags:[{label:"linux",permalink:"/blog/tags/linux"},{label:"productivity",permalink:"/blog/tags/productivity"},{label:"hack",permalink:"/blog/tags/hack"},{label:"bash",permalink:"/blog/tags/bash"},{label:"zsh",permalink:"/blog/tags/zsh"},{label:"terminal",permalink:"/blog/tags/terminal"}],readingTime:2.21,truncated:!0,authors:[{name:"Carlos Angulo Mascarell",title:"Software Engineer",url:"https://github.com/cangulo",imageURL:"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png",key:"cangulo"}],nextItem:{title:"How to use the PowerShell Profile to be more productive",permalink:"/blog/ps-profile-productive"}},h={authorsImageUrls:[void 0]},d=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"Demo",id:"demo",children:[],level:2},{value:"Implementation",id:"implementation",children:[{value:"1. Read the bookmarks",id:"1-read-the-bookmarks",children:[],level:3},{value:"2. List the bookmarks",id:"2-list-the-bookmarks",children:[],level:3},{value:"3. Once a bookmark is selected, navigate to it",id:"3-once-a-bookmark-is-selected-navigate-to-it",children:[],level:3}],level:2},{value:"Bonus: execute this every time you open a terminal",id:"bonus-execute-this-every-time-you-open-a-terminal",children:[],level:2}],b={toc:d};function g(e){var t=e.components,u=(0,o.Z)(e,k);return(0,i.kt)("wrapper",(0,n.Z)({},b,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this post, I am going to implement an interactive bookmarks menu using fzf."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Linux (I'm using ",(0,i.kt)("a",{parentName:"li",href:"https://elementary.io"},"Elementary OS"),", a Ubuntu based distro, check it!)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/junegunn/fzf"},"fzf")," command-line fuzzy finder")),(0,i.kt)("h2",{id:"demo"},"Demo"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"goal",src:a(5662).Z})),(0,i.kt)("p",null,"As you see, every time I call the function ",(0,i.kt)("inlineCode",{parentName:"p"},"listBookmarks")," the following paths are listed interactively. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/home/cangulo/repos/cangulo-tf"),(0,i.kt)("li",{parentName:"ul"},"/home/cangulo/repos/cangulo-nuke")),(0,i.kt)("p",null,"I can move through them using the up/down keys, and navigate into by pressing Enter."),(0,i.kt)("p",null,"On the other hand, in case similar paths are listed, I can filter by typing keywords."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"goal",src:a(8826).Z})),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"file=./code/listbookmarks.sh",file:"./code/listbookmarks.sh"},'#!/bin/bash\n\nlistBookmarks() {\n    local bookmarksFile=./bookmarks.json\n\n    local pathSelected=$(cat $bookmarksFile |\n        jq -r \'.[]\' |\n        fzf)\n\n    if [[ -n "${pathSelected}" ]]; then\n        cd $pathSelected\n    else\n        echo "no bookmark selected"\n    fi\n}\n')),(0,i.kt)(l.CaptionDocusaurus,{label:"listBookmarks function",linkIsRelative:!0,link:"posts/bash/interactive-bookmarks/code/listbookmarks.sh",mdxType:"CaptionDocusaurus"}),(0,i.kt)("p",null,"Let me define the basic structure:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Read the paths (let's call them ",(0,i.kt)("em",{parentName:"li"},"bookmarks"),")"),(0,i.kt)("li",{parentName:"ol"},"List them in a interactive way"),(0,i.kt)("li",{parentName:"ol"},"Once a bookmark is selected, navigate to it")),(0,i.kt)("p",null,"Now let's dive into the details:"),(0,i.kt)("h3",{id:"1-read-the-bookmarks"},"1. Read the bookmarks"),(0,i.kt)("p",null,"First, in order to make this extensible, the paths are listed in a json file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"file=code/bookmarks.json",file:"code/bookmarks.json"},'[\n    "/home/cangulo/repos/cangulo-tf",\n    "/home/cangulo/repos/cangulo-nuke"\n]\n')),(0,i.kt)(l.CaptionDocusaurus,{label:"bookmarks",linkIsRelative:!0,link:"posts/bash/interactive-bookmarks/code/bookmarks.json",mdxType:"CaptionDocusaurus"}),(0,i.kt)("p",null,"We can print the file content using ",(0,i.kt)("inlineCode",{parentName:"p"},"cat"),", and then use ",(0,i.kt)("inlineCode",{parentName:"p"},"jq")," to query the array items. "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"cat $bookmarksFile  | jq -r '.[]'")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"If you are asking why I'm using a json file instead of a simple text file. click here for the answer:"),(0,i.kt)("p",null,"  It is becaus in the next article I will define more advanced bookmarks with different properties used by new features \ud83d\ude01")),(0,i.kt)("h3",{id:"2-list-the-bookmarks"},"2. List the bookmarks"),(0,i.kt)("p",null,"Here is where fzf comes up, by piping the bookmarks to fzf, they will be output them as an interactive list."),(0,i.kt)("h3",{id:"3-once-a-bookmark-is-selected-navigate-to-it"},"3. Once a bookmark is selected, navigate to it"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fzf")," returns the path selected, we save it to a variable."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"local pathSelected=$(cat $bookmarksFile | jq -r '.[]' | fzf)")),(0,i.kt)("p",null,"We check if it is not empty (",(0,i.kt)("inlineCode",{parentName:"p"},"-n"),") before moving into:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'if [[ -n "${pathSelected}" ]]; then\n    cd $pathSelected\nelse\n    echo "no bookmark selected"\nfi\n')),(0,i.kt)("h2",{id:"bonus-execute-this-every-time-you-open-a-terminal"},"Bonus: execute this every time you open a terminal"),(0,i.kt)("p",null,"You can add this in your bash or zsh profile (",(0,i.kt)("em",{parentName:"p"},".bashrc"),", ",(0,i.kt)("em",{parentName:"p"},".zshrc")," ). Just append the ",(0,i.kt)("inlineCode",{parentName:"p"},"listBookmarks")," implementation, update the ",(0,i.kt)("inlineCode",{parentName:"p"},"bookmarksFile")," variable to be a full path, and call the function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"listBookmarks() {\n    local bookmarksFile='/home/cangulo/repos/FULL_PATH/code/bookmarks.json'\n    local pathSelected=$(cat $bookmarksFile |\n        jq -r '.[]' |\n        fzf)\n\n    if [[ -n \"${pathSelected}\" ]]; then\n        cd $pathSelected\n    else\n        echo \"no bookmark selected\"\n    fi\n}\n\nlistBookmarks\n")),(0,i.kt)("p",null,"And that is all! I hope this saves you some time using the terminal. "),(0,i.kt)(s.Z,{id:"xUPOqo6E1XvWXwlCyQ",mdxType:"Gif"}),(0,i.kt)(m.ZP,{mdxType:"AboutMe"}),(0,i.kt)(l.ShareDocusaurus,{slug:"posts/bash/interactive-bookmarks",title:"Create an interactive bookmarks menu in your terminal",tags:["linux","productivity","hack","zsh","bash","terminal"],mdxType:"ShareDocusaurus"}),(0,i.kt)(r.Z,{mdxType:"Comments"}))}g.isMDXComponent=!0},4888:function(e,t,a){var n=a(7294),o=a(4610),i=a(2263);t.Z=function(){var e=(0,i.default)().siteConfig,t=parseInt(e.customFields.hyvorTalkSiteId);return n.createElement("section",null,n.createElement("h2",null,"Comments"),n.createElement(o.Z.Embed,{loadMode:"scroll",websiteId:t}))}},6339:function(e,t,a){var n=a(7294),o=a(5697),i=a.n(o);function l(e){var t=e.id;return n.createElement("div",{style:{textAlign:"center"}},n.createElement("iframe",{src:"https://giphy.com/embed/"+t,width:"480",height:"270",frameBorder:"0",className:"giphy-embed",scrolling:"no"}),n.createElement("p",null,n.createElement("a",{href:"https://giphy.com/gifs/"+t},"via GIPHY")))}l.propTypes={id:i().string.isRequired},t.Z=l},8826:function(e,t,a){t.Z=a.p+"assets/images/demo_filter-512e76936638ae025f1b5a123e9f08be.gif"},5662:function(e,t,a){t.Z=a.p+"assets/images/goal-3323dbe631cfade73171a41aca6dc54e.gif"}}]);