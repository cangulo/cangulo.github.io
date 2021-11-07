"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[7777],{2680:function(e,t,a){a.d(t,{ZP:function(){return s}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),o=["components"],i={toc:[{value:"About me",id:"about-me",children:[],level:2}]};function s(e){var t=e.components,a=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"about-me"},"About me"),(0,r.kt)("p",null,"I'm a Software Engineer at ",(0,r.kt)("a",{parentName:"p",href:"https://ohpen.com"},"Ohpen"),". I have strong experience with dotnet technologies, AWS and Terraform. I have also worked with Front-End languages as JavaScript, Angular and React. I'm a challenge-seeker person , I think all challenges are opportunities to grow. Feel free to contact me via LinkedIn."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/cangulo/cangulo/raw/main/profile_picture_aboutme_post_area.png",alt:"profile image"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Per aspera ad astra.")),(0,r.kt)("p",null,"LinkedIn - ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/angulomascarell"},"Carlos Angulo Mascarell"),(0,r.kt)("br",{parentName:"p"}),"\n","Twitter - ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/angulomascarell"},"@AnguloMascarell"),(0,r.kt)("br",{parentName:"p"}),"\n","GitHub - ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cangulo"},"Carlos Angulo Mascarell - cangulo")))}s.isMDXComponent=!0},4888:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(5068),l=a(7294),r=a(4610),o=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={slug:a.props.slug},a}return(0,n.Z)(t,e),t.prototype.render=function(){return l.createElement("section",{id:"post-comments"},l.createElement("h2",null,"Comments"),l.createElement(r.Z.Embed,{loadMode:"scroll",websiteId:1142,id:this.state.slug}))},t}(l.Component)},4473:function(e,t,a){var n=a(7294),l=a(3597),r=a(7332),o=a(6616),i=a(7385),s=a(8137),p=a(6339),u=a(2834),c=a(9275),m=a(8168),h=a(4276),d=a(2263);t.Z=function(e){var t=e.slug,a=e.title,g=e.tags,k=((0,d.Z)().siteConfig,"https://cangulo.github.io/"+t);return n.createElement("div",null,n.createElement("h2",null,"Did you like it? Share It!"),n.createElement(l.Z,{url:k,title:a},n.createElement(r.Z,{size:32,round:!0})),n.createElement(o.Z,{url:k,title:a,via:"AnguloMascarell",hashtags:null!=g?g:""},n.createElement(i.Z,{size:32,round:!0})),n.createElement(s.Z,{subject:"Check this post about "+a,body:"Hi there, check the next post: "+a+" \n\n",url:k},n.createElement(p.Z,{size:32,round:!0})),n.createElement(u.Z,{url:k,title:a},n.createElement(c.Z,{size:32,round:!0})),n.createElement(m.Z,{title:a,url:k},n.createElement(h.Z,{size:32,round:!0})),n.createElement("br",{style:{marginBottom:"15px"}}))}},862:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return m},assets:function(){return h},toc:function(){return d},default:function(){return k}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),o=a(4473),i=a(4888),s=a(2680),p=["components"],u={slug:"mdx-blog-post",title:"How to use the PowerShell Profile to be more productive",date:new Date("2020-08-24T00:00:00.000Z"),authors:"cangulo",tags:["windows10","productivity","hack","powershell"]},c=void 0,m={permalink:"/blog/mdx-blog-post",source:"@site/blog/posts/powershell/configuring-powershell-profile/configuring-powershell-profile.mdx",title:"How to use the PowerShell Profile to be more productive",description:"In this post, I will explain how to set up shortcuts in the PowerShell Profile. Everything in this article works for PowerShell 5.1 and later.",date:"2020-08-24T00:00:00.000Z",formattedDate:"August 24, 2020",tags:[{label:"windows10",permalink:"/blog/tags/windows-10"},{label:"productivity",permalink:"/blog/tags/productivity"},{label:"hack",permalink:"/blog/tags/hack"},{label:"powershell",permalink:"/blog/tags/powershell"}],readingTime:3.265,truncated:!0,authors:[{name:"Carlos Angulo Mascarell",title:"Software Engineer",url:"https://github.com/cangulo",imageURL:"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png",key:"cangulo"}]},h={authorsImageUrls:[void 0]},d=[{value:"What is the PS Profile?",id:"what-is-the-ps-profile",children:[],level:2},{value:"Shortcuts",id:"shortcuts",children:[{value:"Creating the profile",id:"creating-the-profile",children:[],level:3}],level:2},{value:"References",id:"references",children:[],level:2}],g={toc:d};function k(e){var t=e.components,u=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},g,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this post, I will explain how to set up shortcuts in the PowerShell Profile. Everything in this article works for PowerShell 5.1 and later."),(0,r.kt)("p",null,"If you are a PowerShell (a.k.a. PS) user, I'm sure at some point you repeat operations as navigating to a specific folder (e.g. your local GitHub repository). Maybe you run a script to clean or prepare your environment. Let's define those two scenarios as next:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to your local git repository folder.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Code to execute: ",(0,r.kt)("inlineCode",{parentName:"li"},"cd .\\source\\repos\\")))),(0,r.kt)("li",{parentName:"ol"},"Execute a script.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Code to execute: ",(0,r.kt)("inlineCode",{parentName:"li"},"$HOME\\source\\repos\\TaskManager\\startTaskManagerScript.ps1"))))),(0,r.kt)("h2",{id:"what-is-the-ps-profile"},"What is the PS Profile?"),(0,r.kt)("p",null,"The PS Profile is a script that is run when the console starts, setting custom user settings as variables, aliases or functions. We can also use it to execute custom commands to prepare our local environment. Check your ",(0,r.kt)("inlineCode",{parentName:"p"},"$Profile")," variable to know where your profile is stored."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Profile variables",src:a(4229).Z})),(0,r.kt)("h2",{id:"shortcuts"},"Shortcuts"),(0,r.kt)("p",null,"The shortcuts we are going to set are functions or aliases depending on the following situations:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If we want to create a shortcut for a command with a set of parameters, we will write a function. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"goToCustomName")," as a shortcut for ",(0,r.kt)("inlineCode",{parentName:"p"},"cd [PATH]"),". The code will be:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"function goToCustomName { cd [PATH] }")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If we want to create a shortcut for a command that we use regularly, but with different parameters, we will define an alias. For example, instead of writing ",(0,r.kt)("inlineCode",{parentName:"p"},"Select-String"),", we can write ",(0,r.kt)("inlineCode",{parentName:"p"},"ss"),". In our case, the command is a script we execute, and we want to avoid writing the full path, for that we will use the next code:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"New-Alias -Name [SCRIPT-ALIAS] -Value [SCRIPT-FULL-PATH]"))))),(0,r.kt)("h3",{id:"creating-the-profile"},"Creating the profile"),(0,r.kt)("p",null,"Let's create and open the script file using VS Code by executing the next command in PS: ",(0,r.kt)("inlineCode",{parentName:"p"},"code $PROFILE"),", you should see the code editor empty."),(0,r.kt)("p",null,"Next are the shortcuts we want to add:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"shortcut"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"full command"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"goToRepos")),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cd $HOME\\source\\repos"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"startTaskManagerAPI")),(0,r.kt)("td",{parentName:"tr",align:null},"alias"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$HOME\\source\\repos\\TaskManager\\startTaskManagerScript.ps1"))))),(0,r.kt)("p",null,"But, as both commands share the ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME\\source\\repos")," path, we could define a variable to make them shorter. Here is the table updated:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"shortcut"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"full command"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"localrepo")),(0,r.kt)("td",{parentName:"tr",align:null},"variable"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"$HOME + '\\source\\repos'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"goToRepos")),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"function goToRepos { cd $localRepo }"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"startTaskManagerAPI")),(0,r.kt)("td",{parentName:"tr",align:null},"alias"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"New-Alias -Name startTaskManagerAPI -Value $localRepo\\TaskManager\\startTaskManagerScript.ps1"))))),(0,r.kt)("p",null,"Please note the ",(0,r.kt)("inlineCode",{parentName:"p"},"$localrepo")," variable will be available in the PS session so that you can use it anytime as the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME"),". Paste the next code in your profile and save it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"# Variables\n\n$localRepo = $HOME + '\\source\\repos'\n\n# Functions\n\nfunction goToRepos { cd $localRepo }\n\n# Alias\n\nNew-Alias -Name startTaskManagerAPI -Value $localRepo\\TaskManager\\startTaskManagerScript.ps1\n")),(0,r.kt)("p",null,"Open a new PS window. Maybe the next error will show up:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Problem Signature Profile",src:a(4100).Z})),(0,r.kt)("p",null,"That is because PS has an execution policy that only accepts signed scripts (",(0,r.kt)("inlineCode",{parentName:"p"},"AllSigned"),"). We need to change it to ",(0,r.kt)("inlineCode",{parentName:"p"},"RemoteSigned")," to verify the signature for remote scripts, but not locals. We have to do it using the following command:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Set-ExecutionPolicy RemoteSigned -Scope CurrentUser"),". Now we are good to go, open a new PS and try to execute the shortcuts we defined."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Shortcuts execution",src:a(8926).Z})),(0,r.kt)("p",null,"And we're done! I hope this helps you to save time when using PS. Do you know any other tweak to be more productive? Feel free to share it in the comments!"),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles?view=powershell-5.1"},"PowerShell Profiles Reference for PS 5.1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_profiles?view=powershell-5.1#the-profile-files"},"Profiles Files in PS 5.1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/set-alias?view=powershell-5.1#example-4--create-an-alias-to-an-executable-file"},"Example 4: Create an alias to an executable file")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/set-alias?view=powershell-5.1#example-4--create-an-alias-to-an-executable-file"},"Example 5: Create an alias for a command with parameters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.tenforums.com/general-support/107659-how-sign-powershell-profile-w-self-signed-certificate.html"},"How to sign PowerShell profile w/ self-signed certificate?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.hanselman.com/blog/SigningPowerShellScripts.aspx"},"Signing PowerShell Scripts"))),(0,r.kt)(s.ZP,{mdxType:"AboutMePostArea"}),(0,r.kt)(o.Z,{slug:"cheatsheets/git",title:"Git Cheatsheet",tags:["git","githooks","alias"],mdxType:"ShareCard"}),(0,r.kt)(i.Z,{slug:"cheatsheets/git",mdxType:"Comments"}))}k.isMDXComponent=!0},4229:function(e,t,a){t.Z=a.p+"assets/images/Profile-variable-dd83c13875811f6393b2199c793769a6.png"},4100:function(e,t,a){t.Z=a.p+"assets/images/digitally-signed-problem-49df164e10bccd4d474971d4266fc8f4.png"},8926:function(e,t,a){t.Z=a.p+"assets/images/shortcuts-execution-e5ac37252d767203df954d218174d824.png"}}]);