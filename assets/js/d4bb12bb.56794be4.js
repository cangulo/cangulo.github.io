"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[6358],{2680:function(e,t,n){n.d(t,{ZP:function(){return s}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],u={toc:[{value:"About me",id:"about-me",children:[],level:2}]};function s(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"about-me"},"About me"),(0,l.kt)("p",null,"I'm a Software Engineer at ",(0,l.kt)("a",{parentName:"p",href:"https://ohpen.com"},"Ohpen"),". I have strong experience with dotnet technologies, AWS and Terraform. I have also worked with Front-End languages as JavaScript, Angular and React. I'm a challenge-seeker person , I think all challenges are opportunities to grow. Feel free to contact me via LinkedIn."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/cangulo/cangulo/raw/main/profile_picture_aboutme_post_area.png",alt:"profile image"})),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Per aspera ad astra.")),(0,l.kt)("p",null,"LinkedIn - ",(0,l.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/angulomascarell"},"Carlos Angulo Mascarell"),(0,l.kt)("br",{parentName:"p"}),"\n","Twitter - ",(0,l.kt)("a",{parentName:"p",href:"https://twitter.com/angulomascarell"},"@AnguloMascarell"),(0,l.kt)("br",{parentName:"p"}),"\n","GitHub - ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/cangulo"},"Carlos Angulo Mascarell - cangulo")))}s.isMDXComponent=!0},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7462),r=n(7294),l=n(2389),o=n(9443);var u=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(9521),i=n(6010),c="tabItem_1uMI";function m(e){var t,n,a,l=e.lazy,o=e.block,m=e.defaultValue,p=e.values,h=e.groupId,d=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,s.lx)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=u(),E=k.tabGroupChoices,w=k.setTabGroupChoices,N=(0,r.useState)(b),Z=N[0],y=N[1],T=[],_=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var C=E[h];null!=C&&C!==Z&&v.some((function(e){return e.value===C}))&&y(C)}var I=function(e){var t=e.currentTarget,n=T.indexOf(t),a=v[n].value;a!==Z&&(_(t),y(a),null!=h&&w(h,a))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},d)},v.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:Z===t?0:-1,"aria-selected":Z===t,className:(0,i.Z)("tabs__item",c,{"tabs__item--active":Z===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:x,onFocus:I,onClick:I},null!=n?n:t)}))),l?(0,r.cloneElement)(f.filter((function(e){return e.props.value===Z}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==Z})}))))}function p(e){var t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},1007:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),r="browserWindow_25XZ",l="browserWindowHeader_KqAw",o="buttons_1hjc",u="browserWindowAddressBar_3kU8",s="dot_3vUt",i="browserWindowMenuIcon_62Vr",c="bar_1GUQ",m="browserWindowBody_2pXR";var p=function(e){var t=e.children,n=e.minHeight,p=e.url;return a.createElement("div",{className:r,style:{minHeight:n}},a.createElement("div",{className:l},a.createElement("div",{className:o},a.createElement("span",{className:s,style:{background:"#f25f58"}}),a.createElement("span",{className:s,style:{background:"#fbbe3c"}}),a.createElement("span",{className:s,style:{background:"#58cb42"}})),a.createElement("div",{className:u},p),a.createElement("div",{className:i},a.createElement("div",null,a.createElement("span",{className:c}),a.createElement("span",{className:c}),a.createElement("span",{className:c})))),a.createElement("div",{className:m},t))}},4888:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(5068),r=n(7294),l=n(4610),o=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={slug:n.props.slug},n}return(0,a.Z)(t,e),t.prototype.render=function(){return r.createElement("section",{id:"post-comments"},r.createElement("h2",null,"Comments"),r.createElement(l.Z.Embed,{loadMode:"scroll",websiteId:1142,id:this.state.slug}))},t}(r.Component)},4473:function(e,t,n){var a=n(7294),r=n(3597),l=n(7332),o=n(6616),u=n(7385),s=n(8137),i=n(6339),c=n(2834),m=n(9275),p=n(8168),h=n(4276),d=n(2263);t.Z=function(e){var t=e.slug,n=e.title,f=e.tags,v=((0,d.Z)().siteConfig,"https://cangulo.github.io/"+t);return a.createElement("div",null,a.createElement("h2",null,"Did you like it? Share It!"),a.createElement(r.Z,{url:v,title:n},a.createElement(l.Z,{size:32,round:!0})),a.createElement(o.Z,{url:v,title:n,via:"AnguloMascarell",hashtags:null!=f?f:""},a.createElement(u.Z,{size:32,round:!0})),a.createElement(s.Z,{subject:"Check this post about "+n,body:"Hi there, check the next post: "+n+" \n\n",url:v},a.createElement(i.Z,{size:32,round:!0})),a.createElement(c.Z,{url:v,title:n},a.createElement(m.Z,{size:32,round:!0})),a.createElement(p.Z,{title:n,url:v},a.createElement(h.Z,{size:32,round:!0})),a.createElement("br",{style:{marginBottom:"15px"}}))}},3319:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return i},assets:function(){return c},toc:function(){return m},default:function(){return h}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=(n(2680),n(4473),n(4888),n(1007),n(6396),n(8215),["components"]),u={slug:"terraform",title:"Terraform Cheatsheet",date:new Date("2021-11-08T00:00:00.000Z"),authors:"cangulo",tags:["terraform"]},s=void 0,i={permalink:"/cheatsheets/terraform",editUrl:"https://github.com/cangulo/cangulo.github.io/blob/main/blog/cheatsheets/terraform-cheatsheet.mdx",source:"@site/blog/cheatsheets/terraform-cheatsheet.mdx",title:"Terraform Cheatsheet",description:"This post explains the next topics:",date:"2021-11-08T00:00:00.000Z",formattedDate:"November 8, 2021",tags:[{label:"terraform",permalink:"/cheatsheets/tags/terraform"}],readingTime:.77,truncated:!0,authors:[{name:"Carlos Angulo Mascarell",title:"Software Engineer",url:"https://github.com/cangulo",imageURL:"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png",key:"cangulo"}],prevItem:{title:"Git Cheatsheet",permalink:"/cheatsheets/git"}},c={authorsImageUrls:[void 0]},m=[],p={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This post explains the next topics:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"How to set up a shortcut for Terraform in the Terminal"),(0,l.kt)("li",{parentName:"ul"},"The Terraform commands I use the most")))}h.isMDXComponent=!0}}]);