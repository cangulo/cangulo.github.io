"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[8211],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,d=p["".concat(i,".").concat(f)]||p[f]||m[f]||l;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(3117),a=n(7294),l=n(2389),o=n(9443);var u=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(3810),s=n(6010),c="tabItem_1uMI";function m(e){var t,n,r,l=e.lazy,o=e.block,m=e.defaultValue,p=e.values,f=e.groupId,d=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=h[0])?void 0:r.props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=u(),w=g.tabGroupChoices,E=g.setTabGroupChoices,O=(0,a.useState)(y),k=O[0],x=O[1],T=[],N=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var _=w[f];null!=_&&_!==k&&v.some((function(e){return e.value===_}))&&x(_)}var j=function(e){var t=e.currentTarget,n=T.indexOf(t),r=v[n].value;r!==k&&(N(t),x(r),null!=f&&E(f,r))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;n=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},d)},v.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":k===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:C,onFocus:j,onClick:j},null!=n?n:t)}))),l?(0,a.cloneElement)(h.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}function p(e){var t=(0,l.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},1007:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7294),a="browserWindow_25XZ",l="browserWindowHeader_KqAw",o="buttons_1hjc",u="browserWindowAddressBar_3kU8",i="dot_3vUt",s="browserWindowMenuIcon_62Vr",c="bar_1GUQ",m="browserWindowBody_2pXR";var p=function(e){var t=e.children,n=e.minHeight,p=e.url;return r.createElement("div",{className:a,style:{minHeight:n}},r.createElement("div",{className:l},r.createElement("div",{className:o},r.createElement("span",{className:i,style:{background:"#f25f58"}}),r.createElement("span",{className:i,style:{background:"#fbbe3c"}}),r.createElement("span",{className:i,style:{background:"#58cb42"}})),r.createElement("div",{className:u},p),r.createElement("div",{className:s},r.createElement("div",null,r.createElement("span",{className:c}),r.createElement("span",{className:c}),r.createElement("span",{className:c})))),r.createElement("div",{className:m},t))}},6084:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return s},assets:function(){return c},toc:function(){return m},default:function(){return f}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),o=(n(1007),n(6396),n(8215),["components"]),u={slug:"elementary",title:"Elementary Cheatsheet",group:"cheatsheets",authors:"cangulo",tags:["elementary","linux","os","linux_distribution"]},i=void 0,s={permalink:"/cheatsheets/elementary",editUrl:"https://github.com/cangulo/cangulo.github.io/blob/main/blog/cheatsheets/elementary/elementary-notes.mdx",source:"@site/blog/cheatsheets/elementary/elementary-notes.mdx",title:"Elementary Cheatsheet",description:"This post explains some tips I discovered about the Elementary OS.",date:"2022-05-28T08:56:21.932Z",formattedDate:"May 28, 2022",tags:[{label:"elementary",permalink:"/cheatsheets/tags/elementary"},{label:"linux",permalink:"/cheatsheets/tags/linux"},{label:"os",permalink:"/cheatsheets/tags/os"},{label:"linux_distribution",permalink:"/cheatsheets/tags/linux-distribution"}],readingTime:1.175,truncated:!0,authors:[{name:"Carlos Angulo Mascarell",title:"Software Engineer",url:"https://github.com/cangulo",imageURL:"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png",key:"cangulo"}],prevItem:{title:"Terraform Cheatsheet",permalink:"/cheatsheets/terraform"},nextItem:{title:"Git Cheatsheet",permalink:"/cheatsheets/git"}},c={authorsImageUrls:[void 0]},m=[],p={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This post explains some tips I discovered about the Elementary OS."))}f.isMDXComponent=!0}}]);