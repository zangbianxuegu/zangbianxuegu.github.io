(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=a,e.useAmp=function(){return a(o.default.useContext(s.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},s=n("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,s=t.hasQuery;return n||o&&(void 0!==s&&s)}},"2LNF":function(t){t.exports=JSON.parse('{"fileMap":{"content/index.json":{"siteTitle":"Next Blog","description":"A blog built using next and processmd","stylesheets":["https://unpkg.com/tachyons@4.7.4/css/tachyons.min.css"],"topLinks":[{"text":"Blog","href":"/"},{"text":"Github","href":"https://github.com/tscanlin/"}],"backgroundClass":"bg-dark-gray","copyright":"Tim Scanlin","siteId":"","dir":"content","base":"index.json","ext":".json","sourceBase":"index.md","sourceExt":".md"},"content/posts/2017/first-post.json":{"title":"First post","date":"2017-06-01T00:00:00.000Z","preview":"First post!\\n\\nCheckout github to see my other projects\\n\\nanother page","dir":"content/posts/2017","base":"first-post.json","ext":".json","sourceBase":"first-post.md","sourceExt":".md"},"content/custom-post.json":{"title":"Custom post","date":"2017-06-01T00:00:00.000Z","page":"post","paths":["/custom-post","/custom-post-alias","/subpath/custom-post-alias"],"preview":"An alias\\n\\nAnd another alias","dir":"content","base":"custom-post.json","ext":".json","sourceBase":"custom-post.md","sourceExt":".md"},"content/posts/2017/post-two.json":{"title":"Post two","date":"2017-06-12T00:00:00.000Z","preview":"Second post!\\n\\nCheck out GitHub to see my other projects","dir":"content/posts/2017","base":"post-two.json","ext":".json","sourceBase":"post-two.md","sourceExt":".md"}},"sourceFileArray":["content/custom-post.md","content/index.md","content/posts/2017/first-post.md","content/posts/2017/post-two.md"]}')},"8Kt/":function(t,e,n){"use strict";e.__esModule=!0,e.defaultHead=u,e.default=void 0;var r=c(n("q1tI")),o=c(n("Xuae")),s=n("lwAK"),a=n("FYa8"),i=n("/0+H");function c(t){return t&&t.__esModule?t:{default:t}}function u(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[r.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function l(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===r.default.Fragment?t.concat(r.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var p=["name","httpEquiv","charSet","itemProp"];function f(t,e){return t.reduce((function(t,e){var n=r.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(l,[]).reverse().concat(u(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var s=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);t.has(a)?s=!1:t.add(a)}switch(o.type){case"title":case"base":e.has(o.type)?s=!1:e.add(o.type);break;case"meta":for(var i=0,c=p.length;i<c;i++){var u=p[i];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?s=!1:n.add(u);else{var l=o.props[u],f=r[u]||new Set;f.has(l)?s=!1:(f.add(l),r[u]=f)}}}return s}}()).reverse().map((function(t,e){var n=t.key||e;return r.default.cloneElement(t,{key:n})}))}var d=(0,o.default)();function h(t){var e=t.children;return(r.default.createElement(s.AmpStateContext.Consumer,null,(function(t){return r.default.createElement(a.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(d,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:(0,i.isInAmpMode)(t)},e)}))})))}h.rewind=d.rewind;var m=h;e.default=m},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),s=n("ZhPi"),a=n("Bnag");t.exports=function(t){return r(t)||o(t)||s(t)||a()}},"XLj/":function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),s=n("YFqc"),a=n.n(s),i=o.a.createElement;function c(t){return i(a.a,{href:"post?fullUrl=".concat(t.href),as:t.href},i("a",{className:"b black o-80 glow no-underline lh-solid ".concat(t.className)},t.children))}e.a=function(t){return i("div",{className:"mb4 pb2 bb b--light-gray"},i(c,{href:t.href,className:"f3"},t.title),t.preview&&i("p",{className:"mv1 o-60"},t.preview,i(c,{href:t.href},i("span",null," \xbb"))),t.date&&i("small",{className:"db ttu o-40"},i("time",{key:new Date(t.date).toISOString()},t.date)))}},Xuae:function(t,e,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),s=n("W8MJ"),a=n("7W2i"),i=n("a1gu"),c=n("Nsbk"),u=n("RIqP");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}e.__esModule=!0,e.default=void 0;var p=n("q1tI"),f=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(u(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return(function(i){a(u,i);var c=l(u);function u(t){var s;return r(this,u),s=c.call(this,t),f&&(e.add(o(s)),n(o(s))),s}return s(u,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),s(u,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),u}(p.Component))}},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),s=n("7W2i"),a=n("a1gu"),i=n("Nsbk");function c(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}var u=n("TqRt"),l=n("284h");e.__esModule=!0,e.default=void 0;var p,f=l(n("q1tI")),d=n("QmWs"),h=n("g/15"),m=u(n("nOHt")),v=n("elyg");function y(t){return t&&"object"===typeof t?(0,h.formatWithValidation)(t):t}var g=new Map,b=window.IntersectionObserver,w={};function k(){return p||(b?p=new b((function(t){t.forEach((function(t){if(g.has(t.target)){var e=g.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(p.unobserve(t.target),g.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var x=function(t){s(n,t);var e=c(n);function n(t){var o;return r(this,n),(o=e.call(this,t)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(t){var e=null,n=null,r=null;return function(o,s){if(r&&o===e&&s===n)return r;var a=t(o,s);return e=o,n=s,r=a,a}}((function(t,e){return{href:(0,v.addBasePath)(y(t)),as:e?(0,v.addBasePath)(y(e)):e}})),o.linkClicked=function(t){var e=t.currentTarget,n=e.nodeName,r=e.target;if("A"!==n||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var s=o.formatUrls(o.props.href,o.props.as),a=s.href,i=s.as;if(function(t){var e=(0,d.parse)(t,!1,!0),n=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(a)){var c=window.location.pathname;a=(0,d.resolve)(c,a),i=i?(0,d.resolve)(c,i):a,t.preventDefault();var u=o.props.scroll;null==u&&(u=i.indexOf("#")<0),m.default[o.props.replace?"replace":"push"](a,i,{shallow:o.props.shallow}).then((function(t){t&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==t.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,d.resolve)(t,n);return[o,r?(0,d.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&b&&t&&t.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=k();return n?(n.observe(t),g.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}g.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();m.default.prefetch(e[0],e[1],t).catch((function(t){0})),w[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=f.default.createElement("a",null,e));var s=f.Children.only(e),a={ref:function(e){t.handleRef(e),s&&"object"===typeof s&&s.ref&&("function"===typeof s.ref?s.ref(e):"object"===typeof s.ref&&(s.ref.current=e))},onMouseEnter:function(e){s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==s.type||"href"in s.props)||(a.href=o||r),f.default.cloneElement(s,a)}}]),n}(f.Component);e.default=x},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o},uVCN:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),s=n("8Kt/"),a=n.n(s),i=o.a.createElement;var c=function(t){return i(a.a,null,i("title",null,t.siteTitle),i("meta",{name:"description",content:t.description}),i("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.stylesheets&&t.stylesheets.length>0&&t.stylesheets.map((function(t,e){return i("link",{key:e,rel:"stylesheet",href:t})})),i("style",null,"\n          body {\n            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;\n          }\n      "))},u=n("YFqc"),l=n.n(u),p=o.a.createElement;function f(t){return p("div",{className:"relative tc ".concat(t.backgroundClass)},p("div",{className:"mw7 center white pv4"},p("div",{className:"pv4"},p("h1",{className:"f1 normal lh-title ma0 pa0"},p(l.a,{href:"/"},p("a",{className:"white no-underline",href:"/"},t.heroTitle))),p("h4",{className:"normal o-70 ma0 pt2 pb3 ph1"},t.subtitle),p("div",null,t.topLinks&&t.topLinks.length>0&&t.topLinks.map((function(t,e){return-1===t.href.indexOf("http")?p(l.a,{href:t.href,key:e},p("a",{className:"dib f6 white no-underline pa1 ma1",key:e},t.text)):p("a",{className:"dib f6 white no-underline pa1 ma1",href:t.href,key:e},t.text)}))))))}f.defaultProps={backgroundClass:"bg-mid-gray",topLinks:[],heroTitle:"",subtitle:""};var d=f,h=o.a.createElement;var m=function(t){var e=new Date;return h("footer",{className:"center w5 f6 tc mt4"},h("p",null,h("span",null,"\xa9 "),h("span",null,e.getFullYear()," "),h("span",null,t.copyright)))},v=o.a.createElement;var y=function(t){return v("div",null,v("script",{dangerouslySetInnerHTML:{__html:(e=t.siteId,"\n  (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=\n  function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;\n  e=o.createElement(i);r=o.getElementsByTagName(i)[0];\n  e.src='https://www.google-analytics.com/analytics.js';\n  r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));\n  ga('create','".concat(e,"','auto');ga('send','pageview');\n"))}}));var e},g=o.a.createElement;function b(t){return g("div",null,g(c,{siteTitle:t.siteTitle,description:t.description,stylesheets:t.stylesheets}),g("main",{className:"lh-copy"},g(d,{heroTitle:t.heroTitle,subtitle:t.description,topLinks:t.topLinks,backgroundClass:t.backgroundClass}),t.body,g(m,{copyright:t.copyright}),t.siteId&&g(y,{siteId:t.siteId})))}b.defaultProps={heroTitle:"",description:"",stylesheets:["https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css"],backgroundClass:"bg-dark-gray"};e.a=b},vivp:function(t){t.exports=JSON.parse('{"siteTitle":"Next Blog","description":"A blog built using next and processmd","stylesheets":["https://unpkg.com/tachyons@4.7.4/css/tachyons.min.css"],"topLinks":[{"text":"Blog","href":"/"},{"text":"Github","href":"https://github.com/tscanlin/"}],"backgroundClass":"bg-dark-gray","copyright":"Tim Scanlin","siteId":"","bodyContent":"","bodyHtml":"","dir":"content","base":"index.json","ext":".json","sourceBase":"index.md","sourceExt":".md"}')},xGbm:function(t,e,n){"use strict";function r(t){return new Date(t).toUTCString().split(" ").slice(1,4).join(" ")}n.d(e,"a",(function(){return r}))}}]);