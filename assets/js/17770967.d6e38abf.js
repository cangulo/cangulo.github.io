"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[9797],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(d,l(l({ref:t},i),{},{components:n})):r.createElement(d,l({ref:t},i))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(83117),a=n(67294),o=n(72389),l=n(79443);var u=function(){var e=(0,a.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(53810),s=n(86010),i="tabItem_1uMI";function m(e){var t,n,r,o=e.lazy,l=e.block,m=e.defaultValue,p=e.values,f=e.groupId,d=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,c.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=u(),w=y.tabGroupChoices,E=y.setTabGroupChoices,O=(0,a.useState)(g),k=O[0],T=O[1],N=[],x=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var _=w[f];null!=_&&_!==k&&h.some((function(e){return e.value===_}))&&T(_)}var j=function(e){var t=e.currentTarget,n=N.indexOf(t),r=h[n].value;r!==k&&(x(t),T(r),null!=f&&E(f,r))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.currentTarget)+1;n=N[r]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.currentTarget)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},d)},h.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,s.Z)("tabs__item",i,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:C,onFocus:j,onClick:j},null!=n?n:t)}))),o?(0,a.cloneElement)(v.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}function p(e){var t=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},51007:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(67294),a="browserWindow_25XZ",o="browserWindowHeader_KqAw",l="buttons_1hjc",u="browserWindowAddressBar_3kU8",c="dot_3vUt",s="browserWindowMenuIcon_62Vr",i="bar_1GUQ",m="browserWindowBody_2pXR";var p=function(e){var t=e.children,n=e.minHeight,p=e.url;return r.createElement("div",{className:a,style:{minHeight:n}},r.createElement("div",{className:o},r.createElement("div",{className:l},r.createElement("span",{className:c,style:{background:"#f25f58"}}),r.createElement("span",{className:c,style:{background:"#fbbe3c"}}),r.createElement("span",{className:c,style:{background:"#58cb42"}})),r.createElement("div",{className:u},p),r.createElement("div",{className:s},r.createElement("div",null,r.createElement("span",{className:i}),r.createElement("span",{className:i}),r.createElement("span",{className:i})))),r.createElement("div",{className:m},t))}},4180:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return i},toc:function(){return m},default:function(){return f}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),l=(n(51007),n(26396),n(58215),["components"]),u={slug:"aws",title:"AWS Cheatsheet",group:"cheatsheets",authors:"cangulo",tags:["aws","cloud","scripts"]},c=void 0,s={permalink:"/cheatsheets/aws",editUrl:"https://github.com/cangulo/cangulo.github.io/blob/main/blog/cheatsheets/aws-cheatsheet.mdx",source:"@site/blog/cheatsheets/aws-cheatsheet.mdx",title:"AWS Cheatsheet",description:"This post contains some useful AWS commands and scripts.",date:"2023-04-09T18:20:27.340Z",formattedDate:"April 9, 2023",tags:[{label:"aws",permalink:"/cheatsheets/tags/aws"},{label:"cloud",permalink:"/cheatsheets/tags/cloud"},{label:"scripts",permalink:"/cheatsheets/tags/scripts"}],readingTime:.585,truncated:!0,authors:[{name:"Carlos Angulo Mascarell",title:"Software Engineer",url:"https://github.com/cangulo",imageURL:"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png",key:"cangulo"}],nextItem:{title:"Terraform Cheatsheet",permalink:"/cheatsheets/terraform"}},i={authorsImageUrls:[void 0]},m=[],p={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This post contains some useful AWS commands and scripts."))}f.isMDXComponent=!0}}]);