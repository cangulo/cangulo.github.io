"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[2686],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,b=m["".concat(u,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(b,l(l({ref:t},s),{},{components:r})):n.createElement(b,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7320:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return s},toc:function(){return p},default:function(){return f}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),l=(r(6339),r(6396),r(8215),["components"]),i={slug:"bash/4-create-config-repo",title:"How to use a repository for importing your bash scripts and shortcuts",date:new Date("2020-12-17T00:00:00.000Z"),group:"blog",authors:"cangulo",tags:["linux","productivity","hack","bash","zsh","terminal"]},u=void 0,c={permalink:"/blog/bash/4-create-config-repo",editUrl:"https://github.com/cangulo/cangulo.github.io/blob/main/blog/posts/bash/4-create-config-repo/4-create-config-repo.mdx",source:"@site/blog/posts/bash/4-create-config-repo/4-create-config-repo.mdx",title:"How to use a repository for importing your bash scripts and shortcuts",description:"In this post, I will explain how to load custom variables by reading a JSON file, this will be done every time we open a Terminal. I will also improve the shortcuts we create in the previous posts.",date:"2020-12-17T00:00:00.000Z",formattedDate:"December 17, 2020",tags:[{label:"linux",permalink:"/blog/tags/linux"},{label:"productivity",permalink:"/blog/tags/productivity"},{label:"hack",permalink:"/blog/tags/hack"},{label:"bash",permalink:"/blog/tags/bash"},{label:"zsh",permalink:"/blog/tags/zsh"},{label:"terminal",permalink:"/blog/tags/terminal"}],readingTime:3.395,truncated:!0,authors:[{name:"Carlos Angulo Mascarell",title:"Software Engineer",url:"https://github.com/cangulo",imageURL:"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png",key:"cangulo"}],prevItem:{title:"Interactive bookmarks menu v2",permalink:"/blog/bash/5-interactive-bookmarks-v2"},nextItem:{title:"Load custom variables at Terminal startup",permalink:"/blog/bash/3-load-vars"}},s={authorsImageUrls:[void 0]},p=[],m={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this post, I will explain how to load custom variables by reading a JSON file, this will be done every time we open a Terminal. I will also improve the shortcuts we create in the previous posts."))}f.isMDXComponent=!0},8215:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},6396:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(3117),a=r(7294),o=r(2389),l=r(9443);var i=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=r(3810),c=r(6010),s="tabItem_1uMI";function p(e){var t,r,n,o=e.lazy,l=e.block,p=e.defaultValue,m=e.values,f=e.groupId,b=e.className,d=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:d.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),h=(0,u.lx)(v,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(r=d.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(n=d[0])?void 0:n.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=i(),w=y.tabGroupChoices,k=y.setTabGroupChoices,O=(0,a.useState)(g),E=O[0],T=O[1],x=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var j=w[f];null!=j&&j!==E&&v.some((function(e){return e.value===j}))&&T(j)}var P=function(e){var t=e.currentTarget,r=x.indexOf(t),n=v[r].value;n!==E&&(I(t),T(n),null!=f&&k(f,n))},D=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=x.indexOf(e.currentTarget)+1;r=x[n]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;r=x[a]||x[x.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":l},b)},v.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,className:(0,c.Z)("tabs__item",s,{"tabs__item--active":E===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:D,onFocus:P,onClick:P},null!=r?r:t)}))),o?(0,a.cloneElement)(d.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,o.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}},6339:function(e,t,r){var n=r(7294),a=r(5697),o=r.n(a);function l(e){var t=e.id;return n.createElement("div",{style:{textAlign:"center"}},n.createElement("iframe",{src:"https://giphy.com/embed/"+t,width:"480",height:"270",frameBorder:"0",className:"giphy-embed",scrolling:"no"}),n.createElement("p",null,n.createElement("a",{href:"https://giphy.com/gifs/"+t},"via GIPHY")))}l.propTypes={id:o().string.isRequired},t.Z=l}}]);