"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[4822],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),g=a,b=m["".concat(l,".").concat(g)]||m[g]||p[g]||o;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7691:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return u},toc:function(){return p},default:function(){return g}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=(r(6339),["components"]),c={slug:"bash/5-interactive-bookmarks-v2",title:"Interactive bookmarks menu v2",date:new Date("2020-12-20T00:00:00.000Z"),group:"blog",authors:"cangulo",tags:["linux","productivity","hack","bash","zsh","terminal"]},l=void 0,s={permalink:"/blog/bash/5-interactive-bookmarks-v2",editUrl:"https://github.com/cangulo/cangulo.github.io/blob/main/blog/posts/bash/5-interactive-bookmarks-v2/5-interactive-bookmarks-v2.mdx",source:"@site/blog/posts/bash/5-interactive-bookmarks-v2/5-interactive-bookmarks-v2.mdx",title:"Interactive bookmarks menu v2",description:"In this post, I am going to improve the interactive bookmark I created in a previous post.",date:"2020-12-20T00:00:00.000Z",formattedDate:"December 20, 2020",tags:[{label:"linux",permalink:"/blog/tags/linux"},{label:"productivity",permalink:"/blog/tags/productivity"},{label:"hack",permalink:"/blog/tags/hack"},{label:"bash",permalink:"/blog/tags/bash"},{label:"zsh",permalink:"/blog/tags/zsh"},{label:"terminal",permalink:"/blog/tags/terminal"}],readingTime:1.89,truncated:!0,authors:[{name:"Carlos Angulo Mascarell",title:"Software Engineer",url:"https://github.com/cangulo",imageURL:"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png",key:"cangulo"}],nextItem:{title:"How to use a repository for importing your bash scripts and shortcuts",permalink:"/blog/bash/4-create-config-repo"}},u={authorsImageUrls:[void 0]},p=[],m={toc:p};function g(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this post, I am going to improve the interactive bookmark I created in a ",(0,o.kt)("a",{parentName:"p",href:"/blog/bash/1-interactive-bookmarks"},"previous post"),"."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"under constructiON")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"})))}g.isMDXComponent=!0},6339:function(e,t,r){var n=r(7294),a=r(5697),o=r.n(a);function i(e){var t=e.id;return n.createElement("div",{style:{textAlign:"center"}},n.createElement("iframe",{src:"https://giphy.com/embed/"+t,width:"480",height:"270",frameBorder:"0",className:"giphy-embed",scrolling:"no"}),n.createElement("p",null,n.createElement("a",{href:"https://giphy.com/gifs/"+t},"via GIPHY")))}i.propTypes={id:o().string.isRequired},t.Z=i}}]);