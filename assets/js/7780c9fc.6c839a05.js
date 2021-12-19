"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[6530],{7905:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return c},toc:function(){return m},default:function(){return d}});var n=a(3117),r=a(102),l=(a(7294),a(3905)),o=(a(6785),a(6339),a(3114),a(6396),a(8215),["components"]),i={slug:"bash/3-load-vars",title:"Load custom variables at Terminal startup",date:new Date("2020-12-15T00:00:00.000Z"),group:"blog",authors:"cangulo",tags:["linux","productivity","hack","bash","zsh","terminal"]},u=void 0,s={permalink:"/blog/bash/3-load-vars",editUrl:"https://github.com/cangulo/cangulo.github.io/blob/main/blog/posts/bash/3-load-vars/3-load-vars.mdx",source:"@site/blog/posts/bash/3-load-vars/3-load-vars.mdx",title:"Load custom variables at Terminal startup",description:"In this post, I will explain how to import custom environment variables from a JSON file.",date:"2020-12-15T00:00:00.000Z",formattedDate:"December 15, 2020",tags:[{label:"linux",permalink:"/blog/tags/linux"},{label:"productivity",permalink:"/blog/tags/productivity"},{label:"hack",permalink:"/blog/tags/hack"},{label:"bash",permalink:"/blog/tags/bash"},{label:"zsh",permalink:"/blog/tags/zsh"},{label:"terminal",permalink:"/blog/tags/terminal"}],readingTime:3.125,truncated:!0,authors:[{name:"Carlos Angulo Mascarell",title:"Software Engineer",url:"https://github.com/cangulo",imageURL:"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png",key:"cangulo"}],prevItem:{title:"How to use a repository for importing your bash scripts and shortcuts",permalink:"/blog/bash/4-create-config-repo"},nextItem:{title:"Add shortcuts to your bash terminal",permalink:"/blog/bash/2-add-shortcuts"}},c={authorsImageUrls:[void 0]},m=[],p={toc:m};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In this post, I will explain how to import custom environment variables from a JSON file.\nI will also improve the shortcuts we create in the previous posts."))}d.isMDXComponent=!0},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},6396:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(3117),r=a(7294),l=a(2389),o=a(9443);var i=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=a(3810),s=a(6010),c="tabItem_1uMI";function m(e){var t,a,n,l=e.lazy,o=e.block,m=e.defaultValue,p=e.values,d=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),f=(0,u.lx)(b,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(t=null!=m?m:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=v[0])?void 0:n.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=i(),w=k.tabGroupChoices,y=k.setTabGroupChoices,E=(0,r.useState)(g),T=E[0],x=E[1],I=[],N=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var Z=w[d];null!=Z&&Z!==T&&b.some((function(e){return e.value===Z}))&&x(Z)}var _=function(e){var t=e.currentTarget,a=I.indexOf(t),n=b[a].value;n!==T&&(N(t),x(n),null!=d&&y(d,n))},C=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=I.indexOf(e.currentTarget)+1;a=I[n]||I[0];break;case"ArrowLeft":var r=I.indexOf(e.currentTarget)-1;a=I[r]||I[I.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},h)},b.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":T===t}),key:t,ref:function(e){return I.push(e)},onKeyDown:C,onFocus:_,onClick:_},null!=a?a:t)}))),l?(0,r.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function p(e){var t=(0,l.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},6339:function(e,t,a){var n=a(7294),r=a(5697),l=a.n(r);function o(e){var t=e.id;return n.createElement("div",{style:{textAlign:"center"}},n.createElement("iframe",{src:"https://giphy.com/embed/"+t,width:"480",height:"270",frameBorder:"0",className:"giphy-embed",scrolling:"no"}),n.createElement("p",null,n.createElement("a",{href:"https://giphy.com/gifs/"+t},"via GIPHY")))}o.propTypes={id:l().string.isRequired},t.Z=o}}]);