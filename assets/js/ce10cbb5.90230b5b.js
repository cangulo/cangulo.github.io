"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[2986],{9089:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return m},metadata:function(){return p},assets:function(){return h},toc:function(){return d},default:function(){return k}});var o=n(3117),a=n(102),i=(n(7294),n(3905)),l=n(6785),s=n(3114),r=n(4888),u=["components"],c={slug:"cangulo.nuke.prcommitsvalidations",title:"cangulo.nuke.prcommitsvalidations",date:new Date("2021-11-26T00:00:00.000Z"),authors:"cangulo",tags:["nuke","cicd","commits","conventional-commits"]},m=void 0,p={permalink:"/projects/cangulo.nuke.prcommitsvalidations",editUrl:"https://github.com/cangulo/cangulo.github.io/blob/main/blog/projects/nuke/cangulo.nuke.prcommitsvalidations.mdx",source:"@site/blog/projects/nuke/cangulo.nuke.prcommitsvalidations.mdx",title:"cangulo.nuke.prcommitsvalidations",description:"Problem I want to solve",date:"2021-11-26T00:00:00.000Z",formattedDate:"November 26, 2021",tags:[{label:"nuke",permalink:"/projects/tags/nuke"},{label:"cicd",permalink:"/projects/tags/cicd"},{label:"commits",permalink:"/projects/tags/commits"},{label:"conventional-commits",permalink:"/projects/tags/conventional-commits"}],readingTime:1.66,truncated:!0,authors:[{name:"Carlos Angulo Mascarell",title:"Software Engineer",url:"https://github.com/cangulo",imageURL:"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png",key:"cangulo"}],prevItem:{title:"cangulo.changelog",permalink:"/projects/cangulo.changelog"},nextItem:{title:"cangulo.nuke.releasecreator",permalink:"/projects/cangulo.nuke.releasecreator"}},h={authorsImageUrls:[void 0]},d=[{value:"Problem I want to solve",id:"problem-i-want-to-solve",children:[],level:2},{value:"Goals",id:"goals",children:[],level:2},{value:"Approach",id:"approach",children:[],level:2},{value:"Remarks",id:"remarks",children:[],level:2},{value:"How to use it?",id:"how-to-use-it",children:[],level:2},{value:"Where do I use it?",id:"where-do-i-use-it",children:[],level:2},{value:"Repository",id:"repository",children:[],level:2},{value:"GitHub Action",id:"github-action",children:[],level:2}],g={toc:d};function k(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"problem-i-want-to-solve"},"Problem I want to solve"),(0,i.kt)("p",null,"I want to make sure all the commits in a PR follow custom conventions based on the ",(0,i.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/"},"Conventional Commits")," specification. The conventions should be per repository. Let's consider ",(0,i.kt)("em",{parentName:"p"},"fix"),", ",(0,i.kt)("em",{parentName:"p"},"minor _and _major")," as a reference."),(0,i.kt)("p",null,"On the other hand, as I have been playing with ",(0,i.kt)("a",{parentName:"p",href:"https://nuke.build/index.html"},"NUKE")," lately, I want to create a solution based on it."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("a",{parentName:"p",href:"https://nuke.build/index.html"},"NUKE")," is a build automation framework where you define operations as build, test or push NuGets, in a C# project. I found good reviews and some videos in ",(0,i.kt)("a",{parentName:"p",href:"https://channel9.msdn.com/Shows/On-NET/Build-Automation-with-NUKE"},"Channel9")," about it. So, for instance, dotnet commands are predefined methods, and its arguments are extension methods, check the next example:"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"How a NUKE project looks like?"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"Target Pack => _ => _\n    .DependsOn(Clean)\n    .Executes(() => \n    {\n      DotNetTasks\n          .DotNetPack(s => s\n              .SetProject(project.Path)\n              .SetOutputDirectory(outputFolderAbsolutePath)\n              .SetConfiguration(configuration)\n              .SetVersionPrefix(currentPackageVersion)\n              .SetVersionSuffix(versionSuffix)\n              .EnableNoRestore());\n    });\n"))))),(0,i.kt)("h2",{id:"goals"},"Goals"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Validate the commits from a open PR."),(0,i.kt)("li",{parentName:"ul"},"The Solution should be based on NUKE."),(0,i.kt)("li",{parentName:"ul"},"Any repository should be able to use it.")),(0,i.kt)("h2",{id:"approach"},"Approach"),(0,i.kt)("p",null,"cangulo.nuke.prcommitsvalidations will execute the following operations sequentially:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Get the commit list using the GH API Client provided by NUKE"),(0,i.kt)("li",{parentName:"ol"},"Validate they follow the conventions defined in the repo.")),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"I'm not saying NUKE is the best solution, I just want to give it a try \ud83d\ude0a. In the future, I will create another solution based on scripts."),(0,i.kt)("li",{parentName:"ul"},"The conventions are defined in a json file, you can extend the next example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "conventionalCommitTypes": [\n        "fix",\n        "minor",\n        "major"\n    ]\n}\n')),(0,i.kt)("h2",{id:"how-to-use-it"},"How to use it?"),(0,i.kt)("p",null,"Please check the examples given ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cangulo-actions/cangulo.nuke.prcommitsvalidations#example"},"here"),"."),(0,i.kt)("h2",{id:"where-do-i-use-it"},"Where do I use it?"),(0,i.kt)("p",null,"I call this solution through a specific ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cangulo-actions/cangulo.nuke.prcommitsvalidations"},"GH Action")," in the next projects:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cangulo-nugets/cangulo.changelog/blob/v0.0.8/.github/workflows/4-Release-New-Version.yml"},"cangulo-nugets/cangulo.changelog")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cangulo-nugets/cangulo.common.testing/blob/v0.0.2/.github/workflows/4-Release-New-Version.yml"},"cangulo-nugets/cangulo.common.testing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cangulo-nuke/cangulo.nuke.prcommitsvalidations/blob/v0.0.1/.github/workflows/3-Release_New_Version.yml"},"cangulo-nuke/cangulo.nuke.prcommitsvalidations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cangulo-actions/cangulo.nuke.prcommitsvalidations/blob/v0.0.1/.github/workflows/2-release_new_version.yml"},"cangulo-actions/cangulo.nuke.prcommitsvalidations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cangulo-tf/basic-iac/blob/v0.0.2/.github/workflows/3-Release_New_Version.yml"},"cangulo-tf/basic-iac"))),(0,i.kt)("h2",{id:"repository"},"Repository"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cangulo-nuke/cangulo.nuke.prcommitsvalidations"},"cangulo.nuke.prcommitsvalidations repository")),(0,i.kt)("h2",{id:"github-action"},"GitHub Action"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/cangulo-actions/cangulo.nuke.prcommitsvalidations"},"github action to execute in ANY repository")),(0,i.kt)(s.ZP,{mdxType:"AboutMe"}),(0,i.kt)(l.ShareDocusaurus,{preSlug:"projects",slug:c.slug,title:c.title,tags:c.tags,mdxType:"ShareDocusaurus"}),(0,i.kt)(r.Z,{mdxType:"Comments"}))}k.isMDXComponent=!0},4888:function(e,t,n){var o=n(7294),a=n(4610),i=n(2263);t.Z=function(){var e=(0,i.default)().siteConfig,t=parseInt(e.customFields.hyvorTalkSiteId);return o.createElement("section",null,o.createElement("h2",null,"Comments"),o.createElement(a.Z.Embed,{loadMode:"scroll",websiteId:t}))}}}]);