"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[6530],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87905:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return c},toc:function(){return p},default:function(){return f}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),l=(r(46339),r(26396),r(58215),["components"]),i={slug:"bash/3-load-vars",title:"Load custom variables at Terminal startup",date:new Date("2020-12-15T00:00:00.000Z"),group:"blog",authors:"cangulo",tags:["linux","productivity","hack","bash","zsh","terminal"]},u=void 0,s={permalink:"/blog/bash/3-load-vars",editUrl:"https://github.com/cangulo/cangulo.github.io/blob/main/blog/posts/bash/3-load-vars/3-load-vars.mdx",source:"@site/blog/posts/bash/3-load-vars/3-load-vars.mdx",title:"Load custom variables at Terminal startup",description:"In this post, I will explain how to import custom environment variables from a JSON file.",date:"2020-12-15T00:00:00.000Z",formattedDate:"December 15, 2020",tags:[{label:"linux",permalink:"/blog/tags/linux"},{label:"productivity",permalink:"/blog/tags/productivity"},{label:"hack",permalink:"/blog/tags/hack"},{label:"bash",permalink:"/blog/tags/bash"},{label:"zsh",permalink:"/blog/tags/zsh"},{label:"terminal",permalink:"/blog/tags/terminal"}],readingTime:3.04,truncated:!0,authors:[{name:"Carlos Angulo Mascarell",title:"Software Engineer",url:"https://github.com/cangulo",imageURL:"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png",key:"cangulo"}],prevItem:{title:"How to use a repository for importing your bash scripts and shortcuts",permalink:"/blog/bash/4-create-config-repo"},nextItem:{title:"Add shortcuts to your bash terminal",permalink:"/blog/bash/2-add-shortcuts"}},c={authorsImageUrls:[void 0]},p=[],m={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this post, I will explain how to import custom environment variables from a JSON file.\nI will also improve the shortcuts we create in the previous posts."))}f.isMDXComponent=!0},58215:function(e,t,r){var n=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},26396:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(83117),a=r(67294),o=r(72389),l=r(79443);var i=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=r(53810),s=r(86010),c="tabItem_1uMI";function p(e){var t,r,n,o=e.lazy,l=e.block,p=e.defaultValue,m=e.values,f=e.groupId,d=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),h=(0,u.lx)(v,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(r=b.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(n=b[0])?void 0:n.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=i(),w=y.tabGroupChoices,O=y.setTabGroupChoices,k=(0,a.useState)(g),E=k[0],x=k[1],T=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var I=w[f];null!=I&&I!==E&&v.some((function(e){return e.value===I}))&&x(I)}var P=function(e){var t=e.currentTarget,r=T.indexOf(t),n=v[r].value;n!==E&&(j(t),x(n),null!=f&&O(f,n))},D=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=T.indexOf(e.currentTarget)+1;r=T[n]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;r=T[a]||T[T.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},d)},v.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":E===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:D,onFocus:P,onClick:P},null!=r?r:t)}))),o?(0,a.cloneElement)(b.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,o.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}},46339:function(e,t,r){var n=r(67294),a=r(45697),o=r.n(a);function l(e){var t=e.id;return n.createElement("div",{style:{textAlign:"center"}},n.createElement("iframe",{src:"https://giphy.com/embed/"+t,width:"480",height:"270",frameBorder:"0",className:"giphy-embed",scrolling:"no"}),n.createElement("p",null,n.createElement("a",{href:"https://giphy.com/gifs/"+t},"via GIPHY")))}l.propTypes={id:o().string.isRequired},t.Z=l}}]);