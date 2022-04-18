"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[8777],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return g}});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=o.createContext({}),l=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=l(t.components);return o.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=l(n),g=r,f=m["".concat(c,".").concat(g)]||m[g]||p[g]||a;return n?o.createElement(f,s(s({ref:e},u),{},{components:n})):o.createElement(f,s({ref:e},u))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4976:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return g}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),s=["components"],i={slug:"aws/2-aws-ct-aft-costs",title:"not finished - AWS Control Tower (AFT) Costs",date:new Date("2022-04-22T00:00:00.000Z"),group:"blog",authors:"cangulo",tags:["aws","projects","accounts","setup","costs"]},c=void 0,l={permalink:"/blog/aws/2-aws-ct-aft-costs",editUrl:"https://github.com/cangulo/cangulo.github.io/blob/main/blog/posts/aws/aft-costs/aws-control-tower-aft-costs.mdx",source:"@site/blog/posts/aws/aft-costs/aws-control-tower-aft-costs.mdx",title:"not finished - AWS Control Tower (AFT) Costs",description:"In this post I'm going to talk about the costs I faced using AWS Control Tower the latest 3 months. I recommend you read my previous posts before continuing. Basic knowledge about AWS Control Tower is required.",date:"2022-04-22T00:00:00.000Z",formattedDate:"April 22, 2022",tags:[{label:"aws",permalink:"/blog/tags/aws"},{label:"projects",permalink:"/blog/tags/projects"},{label:"accounts",permalink:"/blog/tags/accounts"},{label:"setup",permalink:"/blog/tags/setup"},{label:"costs",permalink:"/blog/tags/costs"}],readingTime:2.815,truncated:!0,authors:[{name:"Carlos Angulo Mascarell",title:"Software Engineer",url:"https://github.com/cangulo",imageURL:"https://github.com/cangulo/cangulo/raw/main/profile_picture_preview_icon.png",key:"cangulo"}],nextItem:{title:"Reducing costs when using AWS Control Tower AFT",permalink:"/blog/aws/1-aws-ct-aft-reduce-cost"}},u={authorsImageUrls:[void 0]},p=[],m={toc:p};function g(t){var e=t.components,n=(0,r.Z)(t,s);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"In this post I'm going to talk about the costs I faced using AWS Control Tower the latest 3 months. I recommend you read my ",(0,a.kt)("a",{parentName:"p",href:"/blog/aws/1-aws-ct-aft-reduce-cost"},"previous posts")," before continuing. Basic knowledge about AWS Control Tower is required."))))}g.isMDXComponent=!0}}]);