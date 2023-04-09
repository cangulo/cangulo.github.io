"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[3014],{58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(83117),r=n(67294),l=n(72389),s=n(79443);var u=function(){var e=(0,r.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(53810),o=n(86010),c="tabItem_1uMI";function m(e){var t,n,a,l=e.lazy,s=e.block,m=e.defaultValue,d=e.values,p=e.groupId,h=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=u(),N=k.tabGroupChoices,w=k.setTabGroupChoices,y=(0,r.useState)(b),E=y[0],C=y[1],T=[],_=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var x=N[p];null!=x&&x!==E&&v.some((function(e){return e.value===x}))&&C(x)}var A=function(e){var t=e.currentTarget,n=T.indexOf(t),a=v[n].value;a!==E&&(_(t),C(a),null!=p&&w(p,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},h)},v.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,className:(0,o.Z)("tabs__item",c,{"tabs__item--active":E===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:I,onFocus:A,onClick:A},null!=n?n:t)}))),l?(0,r.cloneElement)(f.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function d(e){var t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},51007:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(67294),r="browserWindow_25XZ",l="browserWindowHeader_KqAw",s="buttons_1hjc",u="browserWindowAddressBar_3kU8",i="dot_3vUt",o="browserWindowMenuIcon_62Vr",c="bar_1GUQ",m="browserWindowBody_2pXR";var d=function(e){var t=e.children,n=e.minHeight,d=e.url;return a.createElement("div",{className:r,style:{minHeight:n}},a.createElement("div",{className:l},a.createElement("div",{className:s},a.createElement("span",{className:i,style:{background:"#f25f58"}}),a.createElement("span",{className:i,style:{background:"#fbbe3c"}}),a.createElement("span",{className:i,style:{background:"#58cb42"}})),a.createElement("div",{className:u},d),a.createElement("div",{className:o},a.createElement("div",null,a.createElement("span",{className:c}),a.createElement("span",{className:c}),a.createElement("span",{className:c})))),a.createElement("div",{className:m},t))}},64888:function(e,t,n){var a=n(67294),r=n(84610),l=n(52263);t.Z=function(){var e=(0,l.default)().siteConfig,t=parseInt(e.customFields.hyvorTalkSiteId);return a.createElement("section",null,a.createElement("h2",null,"Comments"),a.createElement(r.Z.Embed,{loadMode:"scroll",websiteId:t}))}},47972:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return h},assets:function(){return f},toc:function(){return v},default:function(){return b}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),s=n(64888),u=n(46785),i=n(59750),o=n(9741),c=n(38705),m=(n(51007),n(26396),n(58215),["components"]),d={slug:"aws",title:"AWS Cheatsheet",group:"cheatsheets",authors:"cangulo",tags:["aws","cloud","scripts"]},p=void 0,h={permalink:"/cheatsheets/aws",editUrl:"https://github.com/cangulo/cangulo.github.io/blob/main/blog/cheatsheets/aws-cheatsheet.mdx",source:"@site/blog/cheatsheets/aws-cheatsheet.mdx",title:"AWS Cheatsheet",description:"This post contains some useful AWS commands and scripts.",date:"2023-04-09T18:20:27.340Z",formattedDate:"April 9, 2023",tags:[{label:"aws",permalink:"/cheatsheets/tags/aws"},{label:"cloud",permalink:"/cheatsheets/tags/cloud"},{label:"scripts",permalink:"/cheatsheets/tags/scripts"}],readingTime:.585,truncated:!0,authors:[{name:"Carlos Angulo Mascarell",title:"Software Engineer",url:"https://github.com/cangulo",imageURL:"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png",key:"cangulo"}],nextItem:{title:"Terraform Cheatsheet",permalink:"/cheatsheets/terraform"}},f={authorsImageUrls:[void 0]},v=[{value:"AWS Commands",id:"aws-commands",children:[{value:"Filtering command output",id:"filtering-command-output",children:[],level:3},{value:"Most used commands",id:"most-used-commands",children:[],level:3}],level:2},{value:"Script to verify credentials",id:"script-to-verify-credentials",children:[],level:2}],g={toc:v};function b(e){var t=e.components,n=(0,r.Z)(e,m);return(0,l.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This post contains some useful AWS commands and scripts."),(0,l.kt)("h2",{id:"aws-commands"},"AWS Commands"),(0,l.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"aws sts get-caller-identity")))))),(0,l.kt)("h3",{id:"filtering-command-output"},"Filtering command output"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--query PROP_PATH"),". Like you're using ",(0,l.kt)("inlineCode",{parentName:"li"},"jq")," for querying JSON string. You can save the initial ",(0,l.kt)("inlineCode",{parentName:"li"},".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--output text|json"),". Output as text print values without quotes.")),(0,l.kt)("h3",{id:"most-used-commands"},"Most used commands"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aws sts get-caller-identity --query Arn --output text")," get current user ARN")),(0,l.kt)("h2",{id:"script-to-verify-credentials"},"Script to verify credentials"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'current_credentials=$(aws sts get-caller-identity --query Arn --output text)\nexpected_credentials="arn:aws:iam::{ACCOUNT_ID}}:user/{USER_NAME}"\n\nif [[ "${current_credentials}" != "${expected_credentials}" ]]; then\n    echo "\\033[31m INVALID CREDENTIALS \\033[0m" # PRINT THIS IN RED\n    return\nfi\n')),(0,l.kt)(c.ZP,{mdxType:"AboutMe"}),(0,l.kt)(o.ZP,{mdxType:"FullExperienceLink"}),(0,l.kt)(i.ZP,{mdxType:"Contact"}),(0,l.kt)(u.ShareDocusaurus,{preSlug:d.group,slug:d.slug,title:d.title,tags:d.tags,mdxType:"ShareDocusaurus"}),(0,l.kt)(s.Z,{mdxType:"Comments"}))}b.isMDXComponent=!0}}]);