"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[2644],{7838:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return d},assets:function(){return k},toc:function(){return h},default:function(){return b}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=n(6785),l=n(6339),s=n(3114),u=n(615),c=["components"],m={slug:"bash/5-interactive-bookmarks-v2",title:"Interactive bookmarks menu v2",date:new Date("2020-12-20T00:00:00.000Z"),group:"blog",authors:"cangulo",tags:["linux","productivity","hack","bash","zsh","terminal"]},p=void 0,d={permalink:"/blog/bash/5-interactive-bookmarks-v2",editUrl:"https://github.com/cangulo/cangulo.github.io/blob/main/blog/posts/bash/5-interactive-bookmarks-v2/5-interactive-bookmarks-v2.mdx",source:"@site/blog/posts/bash/5-interactive-bookmarks-v2/5-interactive-bookmarks-v2.mdx",title:"Interactive bookmarks menu v2",description:"In this post, I am going to improve the interactive bookmark I created in a previous post.",date:"2020-12-20T00:00:00.000Z",formattedDate:"December 20, 2020",tags:[{label:"linux",permalink:"/blog/tags/linux"},{label:"productivity",permalink:"/blog/tags/productivity"},{label:"hack",permalink:"/blog/tags/hack"},{label:"bash",permalink:"/blog/tags/bash"},{label:"zsh",permalink:"/blog/tags/zsh"},{label:"terminal",permalink:"/blog/tags/terminal"}],readingTime:1.98,truncated:!0,authors:[{name:"Carlos Angulo Mascarell",title:"Software Engineer",url:"https://github.com/cangulo",imageURL:"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png",key:"cangulo"}],nextItem:{title:"How to use a repository for importing your bash scripts and shortcuts",permalink:"/blog/bash/4-create-config-repo"}},k={authorsImageUrls:[void 0]},h=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"Improvements to introduce",id:"improvements-to-introduce",children:[{value:"Add one directory layer",id:"add-one-directory-layer",children:[],level:3},{value:"Open VS Code in the repository",id:"open-vs-code-in-the-repository",children:[],level:3},{value:"Demo",id:"demo",children:[],level:3}],level:2},{value:"Implementation",id:"implementation",children:[{value:"1. Read the bookmarks",id:"1-read-the-bookmarks",children:[],level:3}],level:2}],g={toc:h};function b(e){var t=e.components,p=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},g,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this post, I am going to improve the interactive bookmark I created in a ",(0,r.kt)("a",{parentName:"p",href:"/blog/bash/1-interactive-bookmarks"},"previous post"),"."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"under constructiON")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"})),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Linux (I'm using ",(0,r.kt)("a",{parentName:"li",href:"https://elementary.io"},"Elementary OS"),", a Ubuntu-based distro, check it!)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/junegunn/fzf"},"fzf")," command-line fuzzy finder"),(0,r.kt)("li",{parentName:"ul"},"Remember to add execution permissions to the scripts through ",(0,r.kt)("inlineCode",{parentName:"li"},"chmod +x")),(0,r.kt)("li",{parentName:"ul"},"This article is improve the interactive bookmark menu implemented in the previous post: ",(0,r.kt)("a",{parentName:"li",href:"/blog/bash/1-interactive-bookmarks"},(0,r.kt)("em",{parentName:"a"},"Create an interactive bookmarks menu in your terminal")))),(0,r.kt)("h2",{id:"improvements-to-introduce"},"Improvements to introduce"),(0,r.kt)("h3",{id:"add-one-directory-layer"},"Add one directory layer"),(0,r.kt)("p",null,"I have a global path for all the repositories I clone locally, it is ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/cangulo/repos"),". I would like to group them into folders per organization or custom name."),(0,r.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Organization/ custom name"),(0,r.kt)("th",{parentName:"tr",align:null},"Repository"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cangulo-actions"),(0,r.kt)("td",{parentName:"tr",align:null},"cangulo.nuke.prcommitsvalidations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cangulo-actions"),(0,r.kt)("td",{parentName:"tr",align:null},"cangulo.nuke.releasecreator")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cangulo-actions"),(0,r.kt)("td",{parentName:"tr",align:null},"workflows")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cangulo-nugets"),(0,r.kt)("td",{parentName:"tr",align:null},"cangulo.changelog")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cangulo-nugets"),(0,r.kt)("td",{parentName:"tr",align:null},"cangulo.changelog.github.io")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cangulo-nugets"),(0,r.kt)("td",{parentName:"tr",align:null},"cangulo.common.testing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"old-projects"),(0,r.kt)("td",{parentName:"tr",align:null},"cangulo.build")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"old-projects"),(0,r.kt)("td",{parentName:"tr",align:null},"cangulo.cicd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"old-projects"),(0,r.kt)("td",{parentName:"tr",align:null},"cangulo.cicd-gh-action")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"temps"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"any temporary repository")))))),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"organization / custom name")," will be the first layer, while the repositories are the second one. Next is the folder structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 cangulo-actions\n\u2502\xa0\xa0 \u251c\u2500\u2500 cangulo.nuke.prcommitsvalidations\n\u2502\xa0\xa0 \u251c\u2500\u2500 cangulo.nuke.releasecreator\n\u2502\xa0\xa0 \u2514\u2500\u2500 workflows\n\u251c\u2500\u2500 cangulo-nugets\n\u2502\xa0\xa0 \u251c\u2500\u2500 cangulo.changelog\n\u2502\xa0\xa0 \u251c\u2500\u2500 cangulo.changelog.github.io\n\u2502\xa0\xa0 \u251c\u2500\u2500 cangulo.common.testing\n\u2502\xa0\xa0 \u2514\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 old-projects\n\u2502\xa0\xa0 \u251c\u2500\u2500 cangulo.build\n\u2502\xa0\xa0 \u251c\u2500\u2500 cangulo.cicd\n\u2502\xa0\xa0 \u2514\u2500\u2500 cangulo.cicd-gh-action\n\u2514\u2500\u2500 temp\n    \u251c\u2500\u2500 dotnet-docker\n    \u2514\u2500\u2500 gsd\n")),(0,r.kt)("h3",{id:"open-vs-code-in-the-repository"},"Open VS Code in the repository"),(0,r.kt)("p",null,"Once I choose a repository, I would like to open it using VS Code. "),(0,r.kt)("h3",{id:"demo"},"Demo"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"goal",src:n(4708).Z})),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"file=./code/listbookmarks.sh",file:"./code/listbookmarks.sh"},'#!/bin/bash\n\nlistBookmarks() {\n    local selectedBookmark=$(\n        cat $BOOKMARKS_FILE |\n            jq -r \'["NAME", "PATH"], (.[] |\n            [.name,.path]) |\n            @tsv\' |\n            column -t |\n            fzf --tac\n    )\n\n    if [[ -n $selectedBookmark ]]; then\n        cd $(\n            echo $selectedBookmark |\n                tr -s \' \' |\n                cut -f2 -d \' \'\n        )\n        lsf "code"\n    else\n        cd $LOCAL_REPOS\n    fi\n}\nexport listBookmarks\n\nlsf() {\n    local command=$1\n\n    local chosenDir=$(ls | fzf)\n    if [[ -n $chosenDir ]]; then\n        cd $chosenDir\n        if [[ -n $command ]]; then\n            eval "\\$command ."\n        fi\n\n    fi\n}\nexport lsf\n')),(0,r.kt)(i.CaptionDocusaurus,{label:"listBookmarks function",linkIsRelative:!0,link:"posts/bash/5-interactive-bookmarks-v2/code/listbookmarks.sh",mdxType:"CaptionDocusaurus"}),(0,r.kt)("p",null,"Let me write down the changes introduced:"),(0,r.kt)("p",null,"Now let's dive into the details:"),(0,r.kt)("h3",{id:"1-read-the-bookmarks"},"1. Read the bookmarks"),(0,r.kt)("p",null,"First, in order to make this extensible, the paths are listed in a JSON file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"file=code/bookmarks.json",file:"code/bookmarks.json"},'[\n\n    {\n        "name": "Actions",\n        "path": "/home/cangulo/repos/cangulo-actions"\n    },\n    {\n        "name": "Nugets",\n        "path": "/home/cangulo/repos/cangulo-nugets"\n    },\n    {\n        "name": "oldprojects",\n        "path": "/home/cangulo/repos/old-projects"\n    },\n    {\n        "name": "temp",\n        "path": "/home/cangulo/repos/temp"\n    }\n]\n')),(0,r.kt)(i.CaptionDocusaurus,{label:"bookmarks",linkIsRelative:!0,link:"posts/bash/5-interactive-bookmarks-v2/code/bookmarks.json",mdxType:"CaptionDocusaurus"}),(0,r.kt)("p",null,"We can print the file content using ",(0,r.kt)("inlineCode",{parentName:"p"},"cat"),", and then use ",(0,r.kt)("inlineCode",{parentName:"p"},"jq")," to query the array items. "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cat $bookmarksFile  | jq -r '.[]'")),(0,r.kt)("p",null,"And that is all! I hope this saves you some time using the terminal. Do you find this useful? Do you have similar functions? Let me know in the comments below."),(0,r.kt)(l.Z,{id:"xUPOqo6E1XvWXwlCyQ",mdxType:"Gif"}),(0,r.kt)(s.ZP,{mdxType:"AboutMe"}),(0,r.kt)(i.ShareDocusaurus,{preSlug:m.group,slug:m.slug,title:m.title,tags:m.tags,mdxType:"ShareDocusaurus"}),(0,r.kt)(u.Z,{mdxType:"Comments"}))}b.isMDXComponent=!0},615:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(7294),o=n(5697),r=n.n(o);function i(e,t){var n=document.createElement("script");n.src=e,n.id=t,document.body.appendChild(n)}function l(e){var t=document.getElementById(e);e&&t.parentElement.removeChild(t)}var s=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},m=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},p=function(e){function t(){return s(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),u(t,[{key:"setVariables",value:function(){window.HYVOR_TALK_WEBSITE=this.props.websiteId,window.HYVOR_TALK_CONFIG={url:this.props.url||!1,id:this.props.id||!1,title:this.props.title||document.title,loadMode:this.props.loadMode||"default",language:this.props.language||null,sso:this.props.sso||null,palette:this.props.palette||null}}},{key:"addScript",value:function(){document.getElementById("ht-embed-script")&&l("ht-embed-script"),i("//talk.hyvor.com/web-api/embed","ht-embed-script")}},{key:"componentDidMount",value:function(){this.setVariables(),this.addScript()}},{key:"render",value:function(){return a.createElement("div",{id:"hyvor-talk-view"})}}]),t}(a.Component);p.propTypes={websiteId:r().number.isRequired,url:r().any,id:r().any,title:r().string,loadMode:r().any,language:r().string,sso:r().object,palette:r().object};var d=function(e){function t(){return s(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),u(t,[{key:"setVariables",value:function(){this.props.websiteId&&(window.HYVOR_TALK_WEBSITE=this.props.websiteId)}},{key:"componentDidMount",value:function(){this.setVariables();var e="ht-comment-count-script";document.getElementById(e)&&l(e),i("//talk.hyvor.com/web-api/count/",e)}},{key:"render",value:function(){return a.createElement("span",{"data-talk-id":this.props.id,"data-talk-mode":this.props.mode||"default"})}}]),t}(a.Component);d.propTypes={id:r().any,mode:r().any,websiteId:r().number};var k={Embed:p,CommentCount:d},h=n(2263),g=function(){var e=(0,h.default)().siteConfig,t=parseInt(e.customFields.hyvorTalkSiteId);return a.createElement("section",null,a.createElement("h2",null,"Comments"),a.createElement(k.Embed,{loadMode:"scroll",websiteId:t}))}},6339:function(e,t,n){var a=n(7294),o=n(5697),r=n.n(o);function i(e){var t=e.id;return a.createElement("div",{style:{textAlign:"center"}},a.createElement("iframe",{src:"https://giphy.com/embed/"+t,width:"480",height:"270",frameBorder:"0",className:"giphy-embed",scrolling:"no"}),a.createElement("p",null,a.createElement("a",{href:"https://giphy.com/gifs/"+t},"via GIPHY")))}i.propTypes={id:r().string.isRequired},t.Z=i},4708:function(e,t,n){t.Z=n.p+"assets/images/goal-3209654b17f67062aa6245e5842b3e81.gif"}}]);