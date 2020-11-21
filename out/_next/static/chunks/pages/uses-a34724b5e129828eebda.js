_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"7ljp":function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return u})),n.d(t,"MDXProvider",(function(){return m})),n.d(t,"mdx",(function(){return j})),n.d(t,"useMDXComponents",(function(){return d})),n.d(t,"withMDXComponents",(function(){return p}));var r=n("q1tI"),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){return function(t){var n=d(t.components);return o.a.createElement(e,i({},t,{components:n}))}},d=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"===typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=d(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},y=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,a=l(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,m=u["".concat(i,".").concat(p)]||u[p]||f[p]||c;return n?o.a.createElement(m,s(s({ref:t},a),{},{components:n})):o.a.createElement(m,s({ref:t},a))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var c=n.length,i=new Array(c);i[0]=y;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"===typeof e?e:r,i[1]=a;for(var l=2;l<c;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},J3Rv:function(e,t,n){n("aoOK");const r=n("q1tI"),{mdx:o,MDXProvider:c}=n("7ljp"),{useEffect:i}=n("q1tI");e.exports=function({compiledSource:e,renderedOutput:t,scope:n={}},{components:a}={}){const[s,l]=r.useState(r.createElement("span",{dangerouslySetInnerHTML:{__html:t}}));return"undefined"===typeof window||i(()=>{const t=window.requestIdleCallback(()=>{const i={mdx:o,...a,...n},s=Object.keys(i),u=Object.values(i),p=new Function("React",...s,e+"\n      return React.createElement(MDXContent, {});")(r,...u),d=r.createElement(c,{components:a},p);l(d),window.cancelIdleCallback(t)})},[e]),s}},OeCL:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return u}));var r=n("nKUr"),o=(n("q1tI"),n("vOnD")),c=n("J3Rv"),i=n.n(c),a=n("+ego"),s=n("UYbT"),l=o.d.div.withConfig({displayName:"uses__Content",componentId:"sc-6a1d5v-0"})(["p{margin:0;}img{width:100%;}"]),u=!0;t.default=function(e){var t=e.source,n=i()(t,{components:{}});return Object(r.jsxs)(a.a,{children:[Object(r.jsx)(s.a,{title:"Uses",description:"These are some of the things I use to write code, organize my thoughts, and try to stay productive. I'm always trying out new apps and gadgets, so don't consider this list exhaustive or complete."}),Object(r.jsxs)("section",{children:[Object(r.jsx)("h1",{children:"Uses"}),Object(r.jsx)("p",{children:"These are some of the things I use to write code, organize my thoughts, and try to stay productive. I'm always trying out new apps and gadgets, so don't consider this list exhaustive or complete."}),Object(r.jsx)(l,{children:n})]})]})}},P2hQ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/uses",function(){return n("OeCL")}])},UYbT:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("nKUr"),o=n("nOHt"),c=(n("q1tI"),n("qhky")),i="https://www.kylepollich.com",a="%s | Kyle Pollich",s="",l="Lancaster, PA Full Stack Developer",u="@kylepollich",p=function(e){var t=e.title,n=e.description,p=e.image,d=e.article,m=void 0!==d&&d,f=Object(o.useRouter)().pathname,y={title:t||a,description:n||l,image:"".concat(i).concat(p||s),url:"".concat(i).concat(f)};return Object(r.jsxs)(c.a,{title:y.title,titleTemplate:a,children:[Object(r.jsx)("meta",{name:"description",content:y.description}),Object(r.jsx)("meta",{name:"image",content:y.image}),y.url&&Object(r.jsx)("meta",{property:"og:url",content:y.url}),!m?null:Object(r.jsx)("meta",{property:"og:type",content:"article"}),y.title&&Object(r.jsx)("meta",{property:"og:title",content:y.title}),y.description&&Object(r.jsx)("meta",{property:"og:description",content:y.description}),y.image&&Object(r.jsx)("meta",{property:"og:image",content:y.image}),Object(r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),u&&Object(r.jsx)("meta",{name:"twitter:creator",content:u}),y.title&&Object(r.jsx)("meta",{name:"twitter:title",content:y.title}),y.description&&Object(r.jsx)("meta",{name:"twitter:description",content:y.description}),y.image&&Object(r.jsx)("meta",{name:"twitter:image",content:y.image})]})}},aoOK:function(e,t){"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)})}},[["P2hQ",0,2,1,3]]]);