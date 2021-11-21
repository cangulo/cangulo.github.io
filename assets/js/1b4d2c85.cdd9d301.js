"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[1229],{9207:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return g},contentTitle:function(){return p},metadata:function(){return h},assets:function(){return m},toc:function(){return d},default:function(){return b}});var n=a(7462),l=a(3366),o=(a(7294),a(3905)),r=a(4473),c=a(7440),u=a(4888),i=a(2680),s=["components"],g={slug:"cangulo.changelog",title:"cangulo.changelog",date:new Date("2021-11-26T00:00:00.000Z"),authors:"cangulo",tags:["cicd","cangulo.changelog","personal-nuget-packages","changelog"]},p=void 0,h={permalink:"/projects/cangulo.changelog",editUrl:"https://github.com/cangulo/cangulo.github.io/blob/main/blog/projects/nugets/cangulo.changelog.mdx",source:"@site/blog/projects/nugets/cangulo.changelog.mdx",title:"cangulo.changelog",description:"Problem I want to solve",date:"2021-11-26T00:00:00.000Z",formattedDate:"November 26, 2021",tags:[{label:"cicd",permalink:"/projects/tags/cicd"},{label:"cangulo.changelog",permalink:"/projects/tags/cangulo-changelog"},{label:"personal-nuget-packages",permalink:"/projects/tags/personal-nuget-packages"},{label:"changelog",permalink:"/projects/tags/changelog"}],readingTime:.92,truncated:!0,authors:[{name:"Carlos Angulo Mascarell",title:"Software Engineer",url:"https://github.com/cangulo",imageURL:"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png",key:"cangulo"}],nextItem:{title:"cangulo.nuke.prcommitsvalidations",permalink:"/projects/cangulo.nuke.prcommitsvalidations"}},m={authorsImageUrls:[void 0]},d=[{value:"Problem I want to solve",id:"problem-i-want-to-solve",children:[],level:2},{value:"Goal",id:"goal",children:[],level:2},{value:"Approach",id:"approach",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"Where do I use it?",id:"where-do-i-use-it",children:[],level:2},{value:"Repository",id:"repository",children:[],level:2},{value:"NuGet Package",id:"nuget-package",children:[],level:2}],k={toc:d};function b(e){var t=e.components,a=(0,l.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"problem-i-want-to-solve"},"Problem I want to solve"),(0,o.kt)("p",null,"I have the solution ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cangulo-nuke/cangulo.nuke.releasecreator"},"cangulo.nuke.releasecreator")," to handle releases in my GH repos. However, this doesn't document the changes, for that, I need a solution that updates the Changelog and create release notes, all, having as input the commit messages of the last PR merged."),(0,o.kt)("h2",{id:"goal"},"Goal"),(0,o.kt)("p",null,"Have a custom solution to update changelogs and create release notes."),(0,o.kt)("h2",{id:"approach"},"Approach"),(0,o.kt)("p",null,"Create a NuGet package that can be imported in any C# project. In my case, I will import it in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cangulo-nuke/cangulo.nuke.releasecreator"},"cangulo.nuke.releasecreator"),". "),(0,o.kt)("p",null,"The main interface to call is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"public interface IChangelogBuilder\n{\n    void Build(string version, string[] changes, string path);\n}\n")),(0,o.kt)(c.Z,{label:"Definiton at cangulo.changelog",linkIsRelative:"false",link:"https://github.com/cangulo-nugets/cangulo.changelog/blob/v0.0.8/src/cangulo.changelog/Builders/ChangelogBuilder.cs",mdxType:"Caption"}),(0,o.kt)("p",null,"Please, read the next link page about all the requirements and how to use:"),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"Please check the requirements I set here."),(0,o.kt)("h2",{id:"where-do-i-use-it"},"Where do I use it?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/cangulo-nuke/cangulo.nuke.releasecreator"},"cangulo.nuke.releasecreator")),(0,o.kt)("h2",{id:"repository"},"Repository"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/cangulo-nugets/cangulo.changelog"},"cangulo.changelog repository")),(0,o.kt)("h2",{id:"nuget-package"},"NuGet Package"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/cangulo.changelog/"},"cangulo.changelog")),(0,o.kt)(i.ZP,{mdxType:"AboutMePostArea"}),(0,o.kt)(r.Z,{slug:"projects/cangulo.changelog",title:"cangulo.changelog",tags:["cicd","cangulo.changelog","personal-nuget-packages","changelog"],mdxType:"ShareCard"}),(0,o.kt)(u.Z,{slug:"projects/cangulo.changelog",mdxType:"Comments"}))}b.isMDXComponent=!0},2680:function(e,t,a){a.d(t,{ZP:function(){return u}});var n=a(7462),l=a(3366),o=(a(7294),a(3905)),r=["components"],c={toc:[{value:"About me",id:"about-me",children:[],level:2}]};function u(e){var t=e.components,a=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"about-me"},"About me"),(0,o.kt)("p",null,"I'm a Software Engineer at ",(0,o.kt)("a",{parentName:"p",href:"https://ohpen.com"},"Ohpen"),". I have strong experience with dotnet technologies, AWS and Terraform. I have also worked with Front-End languages as JavaScript, Angular and React. I'm a challenge-seeker person , I think all challenges are opportunities to grow. Feel free to contact me via LinkedIn."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/cangulo/cangulo/raw/main/profile_picture_aboutme_post_area.png",alt:"profile image"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Per aspera ad astra.")),(0,o.kt)("p",null,"LinkedIn - ",(0,o.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/angulomascarell"},"Carlos Angulo Mascarell"),(0,o.kt)("br",{parentName:"p"}),"\n","Twitter - ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/angulomascarell"},"@AnguloMascarell"),(0,o.kt)("br",{parentName:"p"}),"\n","GitHub - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cangulo"},"Carlos Angulo Mascarell - cangulo")))}u.isMDXComponent=!0},7440:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.label,a=e.linkIsRelative,l=e.link;if(l){var o="true"===a?"https://raw.githubusercontent.com/cangulo/cangulo.github.io/main/blog/".concat(l):l;return n.createElement("a",{href:o},n.createElement("p",{className:"text--center"},null!=t?t:"Link to the file"))}return n.createElement("p",{className:"text--center"},null!=t?t:"Link to the file")}},4888:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(5068),l=a(7294),o=a(4610),r=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={slug:a.props.slug},a}return(0,n.Z)(t,e),t.prototype.render=function(){return l.createElement("section",{id:"post-comments"},l.createElement("h2",null,"Comments"),l.createElement(o.Z.Embed,{loadMode:"scroll",websiteId:1142,id:this.state.slug}))},t}(l.Component)},4473:function(e,t,a){var n=a(7294),l=a(3597),o=a(7332),r=a(6616),c=a(7385),u=a(8137),i=a(6339),s=a(2834),g=a(9275),p=a(8168),h=a(4276),m=a(2263);t.Z=function(e){var t=e.slug,a=e.title,d=e.tags,k=((0,m.Z)().siteConfig,"https://cangulo.github.io/"+t);return n.createElement("div",null,n.createElement("h2",null,"Did you like it? Share It!"),n.createElement(l.Z,{url:k,title:a},n.createElement(o.Z,{size:32,round:!0})),n.createElement(r.Z,{url:k,title:a,via:"AnguloMascarell",hashtags:null!=d?d:""},n.createElement(c.Z,{size:32,round:!0})),n.createElement(u.Z,{subject:"Check this post about "+a,body:"Hi there, check the next post: "+a+" \n\n",url:k},n.createElement(i.Z,{size:32,round:!0})),n.createElement(s.Z,{url:k,title:a},n.createElement(g.Z,{size:32,round:!0})),n.createElement(p.Z,{title:a,url:k},n.createElement(h.Z,{size:32,round:!0})),n.createElement("br",{style:{marginBottom:"15px"}}))}}}]);