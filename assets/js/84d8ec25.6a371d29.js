"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[6617],{1528:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return d},assets:function(){return m},toc:function(){return h},default:function(){return g}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=n(4473),i=(n(1147),n(4888)),s=n(2680),u=["components"],c={slug:"devops",title:"What I have learn as DevOps",authors:"cangulo",tags:["devops","deployment","deliver","cicd"]},p=void 0,d={permalink:"/values/devops",source:"@site/blog/values/devops/index.mdx",title:"What I have learn as DevOps",description:"Devops - definition",date:"2021-11-05T22:56:28.901Z",formattedDate:"November 5, 2021",tags:[{label:"devops",permalink:"/values/tags/devops"},{label:"deployment",permalink:"/values/tags/deployment"},{label:"deliver",permalink:"/values/tags/deliver"},{label:"cicd",permalink:"/values/tags/cicd"}],readingTime:1.25,truncated:!0,authors:[{name:"Carlos Angulo Mascarell",title:"Software Engineer",url:"https://github.com/cangulo",imageURL:"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png",key:"cangulo"}],prevItem:{title:"What have I learnt as Developer?",permalink:"/values/developer"},nextItem:{title:"What is documentation ?",permalink:"/values/documentation"}},m={authorsImageUrls:[void 0]},h=[{value:"Devops - definition",id:"devops---definition",children:[],level:2},{value:"Did you like it? Share it",id:"did-you-like-it-share-it",children:[],level:2}],v={toc:h};function g(e){var t=e.components,n=(0,o.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"devops---definition"},"Devops - definition"),(0,r.kt)("p",null,"You know how happy I was when I discovered Terraform (TF) and deployment pipelines? A lot, but why? simple, before the Infrastructure as Code (IaC) concept, developers should provide the executable file to sys admins, then, they deploy it into the servers for each environment.  This was quite a manual process. "),(0,r.kt)("p",null,"Then the IaC concept appears, developers code the infrastructure they need (Lambdas, EC2 instance, etc) and link the solution code to those. When a feature was delivered, a pipeline to deploy the IaC and the solution code is executed. The first environment to be deployed is TST, once it has been fully tested, we can promote the same code to ACC, again, once it has been tested, it can be promoted to PRD. In all the process, we are sure all the Infrastructure and the solution is the same for all the environments. Any resource that is created in TST, will also be created in all the other envs, in other words, we trust IaC framework to make sure the infrastructure is the same for all the envs.\nThis simplifies the deployment process making developers own the features in all the environments, ensuring the same solution will be deployed to different envs without requiring manual intervention. "),(0,r.kt)(s.ZP,{mdxType:"AboutMePostArea"}),(0,r.kt)("h2",{id:"did-you-like-it-share-it"},"Did you like it? Share it"),(0,r.kt)(l.Z,{slug:"values/devops",title:"What I have learn as DevOps",tags:["devops","experience"],mdxType:"ShareCard"}),(0,r.kt)(i.Z,{slug:"values/devops",mdxType:"Comments"}))}g.isMDXComponent=!0},2680:function(e,t,n){n.d(t,{ZP:function(){return s}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=["components"],i={toc:[{value:"About me",id:"about-me",children:[],level:2}]};function s(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"about-me"},"About me"),(0,r.kt)("p",null,"I'm a software engineer with experience in .NET Core, Angular, PowerShell and Bash scripting, I love challenges, learning and share knowledge. Feel free to contact me via LinkedIn."),(0,r.kt)("p",{className:"img-centered"},(0,r.kt)("img",{src:"https://github.com/cangulo/cangulo/raw/main/profile_picture_aboutme_post_area.png"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Per aspera ad astra.")),(0,r.kt)("p",null,"LinkedIn - ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/angulomascarell"},"Carlos Angulo Mascarell"),(0,r.kt)("br",{parentName:"p"}),"\n","Twitter - ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/angulomascarell"},"@AnguloMascarell"),(0,r.kt)("br",{parentName:"p"}),"\n","GitHub - ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cangulo"},"Carlos Angulo Mascarell - cangulo")))}s.isMDXComponent=!0},1147:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.label,n=e.relativeLink;if(n){var o=n.includes("http")?n:"https://raw.githubusercontent.com/cangulo/cangulo.github.io/main/blog/".concat(n);return a.createElement("a",{href:o},a.createElement("p",{className:"caption"},null!=t?t:"Link to the file"))}return a.createElement("p",{className:"caption"},null!=t?t:"Link to the file")}},4888:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(5068),o=n(7294),r=n(4610),l=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={slug:n.props.slug},n}return(0,a.Z)(t,e),t.prototype.render=function(){return o.createElement("div",{ref:this.myRef},o.createElement("section",{id:"post-comments"},o.createElement("h2",null,"Comments"),o.createElement(r.Z.Embed,{loadMode:"scroll",websiteId:1142,id:this.state.slug})))},t}(o.Component)},4473:function(e,t,n){var a=n(7294),o=n(3597),r=n(7332),l=n(6616),i=n(7385),s=n(8137),u=n(6339),c=n(2834),p=n(9275),d=n(8168),m=n(4276),h=n(2263);t.Z=function(e){var t=e.slug,n=e.title,v=e.tags,g=((0,h.Z)().siteConfig,"https://cangulo.github.io/"+t);return a.createElement("div",null,a.createElement(o.Z,{url:g,title:n},a.createElement(r.Z,{size:32,round:!0})),a.createElement(l.Z,{url:g,title:n,via:"AnguloMascarell",hashtags:null!=v?v:""},a.createElement(i.Z,{size:32,round:!0})),a.createElement(s.Z,{subject:"Check this post about "+n,body:"Hi there, check the next post: "+n+" \n\n",url:g},a.createElement(u.Z,{size:32,round:!0})),a.createElement(c.Z,{url:g,title:n},a.createElement(p.Z,{size:32,round:!0})),a.createElement(d.Z,{title:n,url:g},a.createElement(m.Z,{size:32,round:!0})))}}}]);