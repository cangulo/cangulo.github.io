"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[4432],{8215:function(e,t,a){var r=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},6396:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(3117),n=a(7294),l=a(2389),o=a(9443);var s=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(3810),u=a(6010),c="tabItem_1uMI";function m(e){var t,a,r,l=e.lazy,o=e.block,m=e.defaultValue,p=e.values,d=e.groupId,f=e.className,h=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),k=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(r=h[0])?void 0:r.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=s(),N=g.tabGroupChoices,E=g.setTabGroupChoices,y=(0,n.useState)(b),T=y[0],w=y[1],C=[],_=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var R=N[d];null!=R&&R!==T&&v.some((function(e){return e.value===R}))&&w(R)}var x=function(e){var t=e.currentTarget,a=C.indexOf(t),r=v[a].value;r!==T&&(_(t),w(r),null!=d&&E(d,r))},I=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.currentTarget)+1;a=C[r]||C[0];break;case"ArrowLeft":var n=C.indexOf(e.currentTarget)-1;a=C[n]||C[C.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":o},f)},v.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":T===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:I,onFocus:x,onClick:x},null!=a?a:t)}))),l?(0,n.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function p(e){var t=(0,l.Z)();return n.createElement(m,(0,r.Z)({key:String(t)},e))}},1007:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(7294),n="browserWindow_25XZ",l="browserWindowHeader_KqAw",o="buttons_1hjc",s="browserWindowAddressBar_3kU8",i="dot_3vUt",u="browserWindowMenuIcon_62Vr",c="bar_1GUQ",m="browserWindowBody_2pXR";var p=function(e){var t=e.children,a=e.minHeight,p=e.url;return r.createElement("div",{className:n,style:{minHeight:a}},r.createElement("div",{className:l},r.createElement("div",{className:o},r.createElement("span",{className:i,style:{background:"#f25f58"}}),r.createElement("span",{className:i,style:{background:"#fbbe3c"}}),r.createElement("span",{className:i,style:{background:"#58cb42"}})),r.createElement("div",{className:s},p),r.createElement("div",{className:u},r.createElement("div",null,r.createElement("span",{className:c}),r.createElement("span",{className:c}),r.createElement("span",{className:c})))),r.createElement("div",{className:m},t))}},4888:function(e,t,a){var r=a(7294),n=a(4610),l=a(2263);t.Z=function(){var e=(0,l.default)().siteConfig,t=parseInt(e.customFields.hyvorTalkSiteId);return r.createElement("section",null,r.createElement("h2",null,"Comments"),r.createElement(n.Z.Embed,{loadMode:"scroll",websiteId:t}))}},8884:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return h},contentTitle:function(){return v},metadata:function(){return k},assets:function(){return b},toc:function(){return g},default:function(){return E}});var r=a(3117),n=a(102),l=(a(7294),a(3905)),o=a(4888),s=a(6785),i=a(9750),u=a(9741),c=a(8705),m=a(1007),p=a(6396),d=a(8215),f=["components"],h={slug:"terraform",title:"Terraform Cheatsheet",group:"cheatsheets",authors:"cangulo",tags:["terraform","iac"]},v=void 0,k={permalink:"/cheatsheets/terraform",editUrl:"https://github.com/cangulo/cangulo.github.io/blob/main/blog/cheatsheets/terraform-cheatsheet.mdx",source:"@site/blog/cheatsheets/terraform-cheatsheet.mdx",title:"Terraform Cheatsheet",description:"This post explains the next topics:",date:"2023-01-10T23:07:01.886Z",formattedDate:"January 10, 2023",tags:[{label:"terraform",permalink:"/cheatsheets/tags/terraform"},{label:"iac",permalink:"/cheatsheets/tags/iac"}],readingTime:1.26,truncated:!0,authors:[{name:"Carlos Angulo Mascarell",title:"Software Engineer",url:"https://github.com/cangulo",imageURL:"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png",key:"cangulo"}],prevItem:{title:"AWS Cheatsheet",permalink:"/cheatsheets/aws"},nextItem:{title:"Elementary Cheatsheet",permalink:"/cheatsheets/elementary"}},b={authorsImageUrls:[void 0]},g=[{value:"Create an alias for TF in your Terminal",id:"create-an-alias-for-tf-in-your-terminal",children:[],level:2},{value:"TF Commands",id:"tf-commands",children:[{value:"Examples",id:"examples",children:[{value:"TF IMPORT",id:"tf-import",children:[],level:4}],level:3}],level:2},{value:"References",id:"references",children:[],level:2}],N={toc:g};function E(e){var t=e.components,a=(0,n.Z)(e,f);return(0,l.kt)("wrapper",(0,r.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This post explains the next topics:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"How to set up a shortcut for Terraform in the Terminal"),(0,l.kt)("li",{parentName:"ul"},"The Terraform commands I use the most")),(0,l.kt)("h2",{id:"create-an-alias-for-tf-in-your-terminal"},"Create an alias for TF in your Terminal"),(0,l.kt)("p",null,"Please add the next code to your profile depending if you are using PowerShell or bash:"),(0,l.kt)(m.Z,{mdxType:"BrowserWindow"},(0,l.kt)(p.Z,{mdxType:"Tabs"},(0,l.kt)(d.Z,{value:"ps",label:"PowerShell",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"New-Alias -Name tf -Value terraform -Force\nfunction tffmt { tf fmt -recursive }\nfunction tfa { tf apply -auto-approve }\nfunction tfd { tf destroy -auto-approve }\n"))),(0,l.kt)(d.Z,{value:"sh",label:"Bash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'alias tf=terraform\nalias tffmt="tf fmt -recursive"\nalias tfa="tf apply -auto-approve"\nalias tfd="tf destroy -auto-approve"\n'))))),(0,l.kt)("h2",{id:"tf-commands"},"TF Commands"),(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tf init"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tf fmt --recursive"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tf plan -out plan.out"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tf apply -auto-approve "))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tf destroy -auto-approve"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tf state ls"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tf state rm ADDR"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tf import -var-file=[FILENAME].tfvars ADDR ID ")))))),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("h4",{id:"tf-import"},"TF IMPORT"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"terraform [global options] import [options] ADDR ID")," -> Is the resource path as ",(0,l.kt)("inlineCode",{parentName:"p"},"RESOURCE_TYPE.RESOURCE_NAME"),". Examples:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'aws_resourcegroups_group.main\naws_organizations_organizational_unit.apps["journalbot"] -> Resources created without foreach.\nmodule.app_envs["temp-app-envs"].aws_organizations_organizational_unit.envs["prd"] -> Resources created **with foreach**.\n')),(0,l.kt)("p",null,"Using the ADDR in tf import:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"tf import -var-file=base.tfvars RESOURCE_TYPE.RESOURCE_NAME ID_OR_ARN # Resources created without foreach.\ntf import -var-file=base.tfvars 'RESOURCE_TYPE.RESOURCE_NAME[\"RESOURCE_KEY\"]' ID_OR_ARN #  Resources created **with foreach**. Please note the `''` for the resource path.\n")),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://dzone.com/articles/terraform-cli-cheat-sheet"},"TF Cheatsheet"))),(0,l.kt)(c.ZP,{mdxType:"AboutMe"}),(0,l.kt)(u.ZP,{mdxType:"FullExperienceLink"}),(0,l.kt)(i.ZP,{mdxType:"Contact"}),(0,l.kt)(s.ShareDocusaurus,{preSlug:h.group,slug:h.slug,title:h.title,tags:h.tags,mdxType:"ShareDocusaurus"}),(0,l.kt)(o.Z,{mdxType:"Comments"}))}E.isMDXComponent=!0}}]);