var t,e,n,r,o,_,i,u={},l=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(t,e){for(var n in e)t[n]=e[n];return t}function f(t){var e=t.parentNode;e&&e.removeChild(t)}function s(e,n,r){var o,_,i,u={};for(i in n)"key"==i?o=n[i]:"ref"==i?_=n[i]:u[i]=n[i];if(arguments.length>2&&(u.children=arguments.length>3?t.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(i in e.defaultProps)void 0===u[i]&&(u[i]=e.defaultProps[i]);return p(e,u,o,_,null)}function p(t,r,o,_,i){var u={type:t,props:r,key:o,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==i?++n:i};return null!=e.vnode&&e.vnode(u),u}function h(t){return t.children}function d(t,e){this.props=t,this.context=e}function v(t,e){if(null==e)return t.__?v(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?v(t):null}function y(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return y(t)}}function m(t){(!t.__d&&(t.__d=!0)&&r.push(t)&&!g.__r++||_!==e.debounceRendering)&&((_=e.debounceRendering)||o)(g)}function g(){for(var t;g.__r=r.length;)t=r.sort((function(t,e){return t.__v.__b-e.__v.__b})),r=[],t.some((function(t){var e,n,r,o,_,i;t.__d&&(_=(o=(e=t).__v).__e,(i=e.__P)&&(n=[],(r=a({},o)).__v=o.__v+1,E(i,o,r,e.__n,void 0!==i.ownerSVGElement,null!=o.__h?[_]:null,n,null==_?v(o):_,o.__h),H(n,o),o.__e!=_&&y(o)))}))}function k(t,e,n,r,o,_,i,c,a,f){var s,d,y,m,g,k,C,U=r&&r.__k||l,A=U.length;for(n.__k=[],s=0;s<e.length;s++)if(null!=(m=n.__k[s]=null==(m=e[s])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?p(null,m,null,null,m):Array.isArray(m)?p(h,{children:m},null,null,null):m.__b>0?p(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(y=U[s])||y&&m.key==y.key&&m.type===y.type)U[s]=void 0;else for(d=0;d<A;d++){if((y=U[d])&&m.key==y.key&&m.type===y.type){U[d]=void 0;break}y=null}E(t,m,y=y||u,o,_,i,c,a,f),g=m.__e,(d=m.ref)&&y.ref!=d&&(C||(C=[]),y.ref&&C.push(y.ref,null,m),C.push(d,m.__c||g,m)),null!=g?(null==k&&(k=g),"function"==typeof m.type&&null!=m.__k&&m.__k===y.__k?m.__d=a=b(m,a,t):a=x(t,m,y,U,g,a),f||"option"!==n.type?"function"==typeof n.type&&(n.__d=a):t.value=""):a&&y.__e==a&&a.parentNode!=t&&(a=v(y))}for(n.__e=k,s=A;s--;)null!=U[s]&&("function"==typeof n.type&&null!=U[s].__e&&U[s].__e==n.__d&&(n.__d=v(r,s+1)),w(U[s],U[s]));if(C)for(s=0;s<C.length;s++)T(C[s],C[++s],C[++s])}function b(t,e,n){var r,o;for(r=0;r<t.__k.length;r++)(o=t.__k[r])&&(o.__=t,e="function"==typeof o.type?b(o,e,n):x(n,o,o,t.__k,o.__e,e));return e}function C(t,e){return e=e||[],null==t||"boolean"==typeof t||(Array.isArray(t)?t.some((function(t){C(t,e)})):e.push(t)),e}function x(t,e,n,r,o,_){var i,u,l;if(void 0!==e.__d)i=e.__d,e.__d=void 0;else if(null==n||o!=_||null==o.parentNode)t:if(null==_||_.parentNode!==t)t.appendChild(o),i=null;else{for(u=_,l=0;(u=u.nextSibling)&&l<r.length;l+=2)if(u==o)break t;t.insertBefore(o,_),i=_}return void 0!==i?i:o.nextSibling}function U(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]=null==n?"":"number"!=typeof n||c.test(e)?n:n+"px"}function A(t,e,n,r,o){var _;t:if("style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||U(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||U(t.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])_=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+_]=n,n?r||t.addEventListener(e,_?S:P,_):t.removeEventListener(e,_?S:P,_);else if("dangerouslySetInnerHTML"!==e){if(o)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in t)try{t[e]=null==n?"":n;break t}catch(i){}"function"==typeof n||(null!=n&&(!1!==n||"a"===e[0]&&"r"===e[1])?t.setAttribute(e,n):t.removeAttribute(e))}}function P(t){this.l[t.type+!1](e.event?e.event(t):t)}function S(t){this.l[t.type+!0](e.event?e.event(t):t)}function E(n,r,o,_,i,l,c,s,p){var y,m,g,b,C,x,U,P,S,E,H,T=r.type;if(void 0!==r.constructor)return null;null!=o.__h&&(p=o.__h,s=r.__e=o.__e,r.__h=null,l=[s]),(y=e.__b)&&y(r);try{t:if("function"==typeof T){if(P=r.props,S=(y=T.contextType)&&_[y.__c],E=y?S?S.props.value:y.__:_,o.__c?U=(m=r.__c=o.__c).__=m.__E:("prototype"in T&&T.prototype.render?r.__c=m=new T(P,E):(r.__c=m=new d(P,E),m.constructor=T,m.render=D),S&&S.sub(m),m.props=P,m.state||(m.state={}),m.context=E,m.__n=_,g=m.__d=!0,m.__h=[]),null==m.__s&&(m.__s=m.state),null!=T.getDerivedStateFromProps&&(m.__s==m.state&&(m.__s=a({},m.__s)),a(m.__s,T.getDerivedStateFromProps(P,m.__s))),b=m.props,C=m.state,g)null==T.getDerivedStateFromProps&&null!=m.componentWillMount&&m.componentWillMount(),null!=m.componentDidMount&&m.__h.push(m.componentDidMount);else{if(null==T.getDerivedStateFromProps&&P!==b&&null!=m.componentWillReceiveProps&&m.componentWillReceiveProps(P,E),!m.__e&&null!=m.shouldComponentUpdate&&!1===m.shouldComponentUpdate(P,m.__s,E)||r.__v===o.__v){m.props=P,m.state=m.__s,r.__v!==o.__v&&(m.__d=!1),m.__v=r,r.__e=o.__e,r.__k=o.__k,r.__k.forEach((function(t){t&&(t.__=r)})),m.__h.length&&c.push(m);break t}null!=m.componentWillUpdate&&m.componentWillUpdate(P,m.__s,E),null!=m.componentDidUpdate&&m.__h.push((function(){m.componentDidUpdate(b,C,x)}))}m.context=E,m.props=P,m.state=m.__s,(y=e.__r)&&y(r),m.__d=!1,m.__v=r,m.__P=n,y=m.render(m.props,m.state,m.context),m.state=m.__s,null!=m.getChildContext&&(_=a(a({},_),m.getChildContext())),g||null==m.getSnapshotBeforeUpdate||(x=m.getSnapshotBeforeUpdate(b,C)),H=null!=y&&y.type===h&&null==y.key?y.props.children:y,k(n,Array.isArray(H)?H:[H],r,o,_,i,l,c,s,p),m.base=r.__e,r.__h=null,m.__h.length&&c.push(m),U&&(m.__E=m.__=null),m.__e=!1}else null==l&&r.__v===o.__v?(r.__k=o.__k,r.__e=o.__e):r.__e=function(e,n,r,o,_,i,l,c){var a,s,p,h=r.props,d=n.props,y=n.type,m=0;if("svg"===y&&(_=!0),null!=i)for(;m<i.length;m++)if((a=i[m])&&(a===e||(y?a.localName==y:3==a.nodeType))){e=a,i[m]=null;break}if(null==e){if(null===y)return document.createTextNode(d);e=_?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,d.is&&d),i=null,c=!1}if(null===y)h===d||c&&e.data===d||(e.data=d);else{if(i=i&&t.call(e.childNodes),s=(h=r.props||u).dangerouslySetInnerHTML,p=d.dangerouslySetInnerHTML,!c){if(null!=i)for(h={},m=0;m<e.attributes.length;m++)h[e.attributes[m].name]=e.attributes[m].value;(p||s)&&(p&&(s&&p.__html==s.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(function(t,e,n,r,o){var _;for(_ in n)"children"===_||"key"===_||_ in e||A(t,_,null,n[_],r);for(_ in e)o&&"function"!=typeof e[_]||"children"===_||"key"===_||"value"===_||"checked"===_||n[_]===e[_]||A(t,_,e[_],n[_],r)}(e,d,h,_,c),p)n.__k=[];else if(m=n.props.children,k(e,Array.isArray(m)?m:[m],n,r,o,_&&"foreignObject"!==y,i,l,i?i[0]:r.__k&&v(r,0),c),null!=i)for(m=i.length;m--;)null!=i[m]&&f(i[m]);c||("value"in d&&void 0!==(m=d.value)&&(m!==e.value||"progress"===y&&!m)&&A(e,"value",m,h.value,!1),"checked"in d&&void 0!==(m=d.checked)&&m!==e.checked&&A(e,"checked",m,h.checked,!1))}return e}(o.__e,r,o,_,i,l,c,p);(y=e.diffed)&&y(r)}catch(w){r.__v=null,(p||null!=l)&&(r.__e=s,r.__h=!!p,l[l.indexOf(s)]=null),e.__e(w,r,o)}}function H(t,n){e.__c&&e.__c(n,t),t.some((function(n){try{t=n.__h,n.__h=[],t.some((function(t){t.call(n)}))}catch(r){e.__e(r,n.__v)}}))}function T(t,n,r){try{"function"==typeof t?t(n):t.current=n}catch(o){e.__e(o,r)}}function w(t,n,r){var o,_;if(e.unmount&&e.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||T(o,null,n)),null!=(o=t.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(i){e.__e(i,n)}o.base=o.__P=null}if(o=t.__k)for(_=0;_<o.length;_++)o[_]&&w(o[_],n,"function"!=typeof t.type);r||null==t.__e||f(t.__e),t.__e=t.__d=void 0}function D(t,e,n){return this.constructor(t,n)}function L(n,r,o){var _,i,l;e.__&&e.__(n,r),i=(_="function"==typeof o)?null:o&&o.__k||r.__k,l=[],E(r,n=(!_&&o||r).__k=s(h,null,[n]),i||u,u,void 0!==r.ownerSVGElement,!_&&o?[o]:i?null:r.firstChild?t.call(r.childNodes):null,l,!_&&o?o:i?i.__e:r.firstChild,_),H(l,n)}function M(t,e){var n={__c:e="__cC"+i++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var n,r;return this.getChildContext||(n=[],(r={})[e]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&n.some(m)},this.sub=function(t){n.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){n.splice(n.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Provider.__=n.Consumer.contextType=n}t=l.slice,e={__e:function(t,e){for(var n,r,o;e=e.__;)if((n=e.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(t)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(t),o=n.__d),o)return n.__E=n}catch(_){t=_}throw t}},n=0,d.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof t&&(t=t(a({},n),this.props)),t&&a(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),m(this))},d.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),m(this))},d.prototype.render=h,r=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0,i=0;var R={};function W(t,e){for(var n in e)t[n]=e[n];return t}function N(t,e,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,_=t.match(o),i={};if(_&&_[1])for(var u=_[1].split("&"),l=0;l<u.length;l++){var c=u[l].split("=");i[decodeURIComponent(c[0])]=decodeURIComponent(c.slice(1).join("="))}t=O(t.replace(o,"")),e=O(e||"");for(var a=Math.max(t.length,e.length),f=0;f<a;f++)if(e[f]&&":"===e[f].charAt(0)){var s=e[f].replace(/(^:|[+*?]+$)/g,""),p=(e[f].match(/[+*?]+$/)||R)[0]||"",h=~p.indexOf("+"),d=~p.indexOf("*"),v=t[f]||"";if(!v&&!d&&(p.indexOf("?")<0||h)){r=!1;break}if(i[s]=decodeURIComponent(v),h||d){i[s]=t.slice(f).map(decodeURIComponent).join("/");break}}else if(e[f]!==t[f]){r=!1;break}return(!0===n.default||!1!==r)&&i}function F(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function I(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,O(e).map(K).join(""));var e}(t),t.props}function O(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function K(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var $=null,j=[],q=[],B={};function G(){var t;return""+((t=$&&$.location?$.location:$&&$.getCurrentLocation?$.getCurrentLocation():"undefined"!=typeof location?location:B).pathname||"")+(t.search||"")}function V(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=j.length;e--;)if(j[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),$&&$[e]?$[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),z(t)}function z(t){for(var e=!1,n=0;n<j.length;n++)!0===j[n].routeTo(t)&&(e=!0);for(var r=q.length;r--;)q[r](t);return e}function J(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return V(e)}}function Q(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return J(t.currentTarget||t.target||this),X(t)}function X(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function Y(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(J(e))return X(t)}}while(e=e.parentNode)}}var Z=!1;var tt=function(e){function n(t){e.call(this,t),t.history&&($=t.history),this.state={url:t.url||G()},Z||("function"==typeof addEventListener&&($||addEventListener("popstate",(function(){z(G())})),addEventListener("click",Y)),Z=!0)}return e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n,n.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},n.prototype.canRoute=function(t){var e=C(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},n.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},n.prototype.componentWillMount=function(){j.push(this),this.updating=!0},n.prototype.componentDidMount=function(){var t=this;$&&(this.unlisten=$.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},n.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),j.splice(j.indexOf(this),1)},n.prototype.componentWillUpdate=function(){this.updating=!0},n.prototype.componentDidUpdate=function(){this.updating=!1},n.prototype.getMatchingChildren=function(e,n,r){return e.filter(I).sort(F).map((function(e){var o=N(n,e.props.path,e.props);if(o){if(!1!==r){var _={url:n,matches:o};return W(_,o),delete _.ref,delete _.key,function(e,n,r){var o,_,i,u=a({},e.props);for(i in n)"key"==i?o=n[i]:"ref"==i?_=n[i]:u[i]=n[i];return arguments.length>2&&(u.children=arguments.length>3?t.call(arguments,2):r),p(e.type,u,o||e.key,_||e.ref,null)}(e,_)}return e}})).filter(Boolean)},n.prototype.render=function(t,e){var n=t.children,r=t.onChange,o=e.url,_=this.getMatchingChildren(C(n),o,!0),i=_[0]||null,u=this.previousUrl;return o!==u&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:u,active:_,current:i})),i},n}(d),et=function(t){return s(t.component,t)};tt.subscribers=q,tt.getCurrentUrl=G,tt.route=V,tt.Router=tt,tt.Route=et,tt.Link=function(t){return s("a",W({onClick:Q},t))},tt.exec=N;var nt,rt,ot,_t=0,it=[],ut=e.__b,lt=e.__r,ct=e.diffed,at=e.__c,ft=e.unmount;function st(t,n){e.__h&&e.__h(rt,t,_t||n),_t=0;var r=rt.__H||(rt.__H={__:[],__h:[]});return t>=r.__.length&&r.__.push({}),r.__[t]}function pt(t){return _t=1,function(t,e,n){var r=st(nt++,2);return r.t=t,r.__c||(r.__=[n?n(e):kt(void 0,e),function(t){var e=r.t(r.__[0],t);r.__[0]!==e&&(r.__=[e,r.__[1]],r.__c.setState({}))}],r.__c=rt),r.__}(kt,t)}function ht(t,n){var r,o,_=st(nt++,3);!e.__s&&(r=_.__H,o=n,!r||r.length!==o.length||o.some((function(t,e){return t!==r[e]})))&&(_.__=t,_.__H=n,rt.__H.__h.push(_))}function dt(t){var e=rt.context[t.__c],n=st(nt++,9);return n.c=t,e?(null==n.__&&(n.__=!0,e.sub(rt)),e.props.value):t.__}function vt(){it.forEach((function(t){if(t.__P)try{t.__H.__h.forEach(mt),t.__H.__h.forEach(gt),t.__H.__h=[]}catch(n){t.__H.__h=[],e.__e(n,t.__v)}})),it=[]}e.__b=function(t){rt=null,ut&&ut(t)},e.__r=function(t){lt&&lt(t),nt=0;var e=(rt=t.__c).__H;e&&(e.__h.forEach(mt),e.__h.forEach(gt),e.__h=[])},e.diffed=function(t){ct&&ct(t);var n=t.__c;n&&n.__H&&n.__H.__h.length&&(1!==it.push(n)&&ot===e.requestAnimationFrame||((ot=e.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),yt&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);yt&&(e=requestAnimationFrame(n))})(vt)),rt=void 0},e.__c=function(t,n){n.some((function(t){try{t.__h.forEach(mt),t.__h=t.__h.filter((function(t){return!t.__||gt(t)}))}catch(r){n.some((function(t){t.__h&&(t.__h=[])})),n=[],e.__e(r,t.__v)}})),at&&at(t,n)},e.unmount=function(t){ft&&ft(t);var n=t.__c;if(n&&n.__H)try{n.__H.__.forEach(mt)}catch(r){e.__e(r,n.__v)}};var yt="function"==typeof requestAnimationFrame;function mt(t){var e=rt;"function"==typeof t.__c&&t.__c(),rt=e}function gt(t){var e=rt;t.__c=t.__(),rt=e}function kt(t,e){return"function"==typeof e?e(t):e}export{M as D,dt as F,tt as R,L as S,et as a,h as d,pt as l,V as r,s as v,ht as y};
