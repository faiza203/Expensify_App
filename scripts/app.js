!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){"use strict";(function(e,n){var o,i=r(1);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:n;var u=Object(i.a)(o);t.a=u}).call(this,r(4),r(5)(e))},function(e,t,r){"use strict";function n(e){var t,r=e.Symbol;return"function"==typeof r?r.observable?t=r.observable:(t=r("observable"),r.observable=t):t="@@observable",t}r.d(t,"a",(function(){return n}))},function(e,t,r){"use strict";var n=r(3),o=r(6);function i(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.description,r=void 0===t?"":t,n=e.note,i=void 0===n?"":n,u=e.amount,a=void 0===u?0:u,c=e.createdAt,f=void 0===c?0:c;return{type:"ADD_EXPENSE",expense:{id:(0,o.v4)(),description:r,note:i,amount:a,createdAt:f}}},a=[],c={text:"",sortBy:"date",startDate:void 0,endDate:void 0},f=(0,n.createStore)((0,n.combineReducers)({expenses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments[1];switch(t.type){case"ADD_EXPENSE":return[].concat(i(e),[t.expense]);case"REMOVE_EXPENSE":return e.filter((function(e){return e.id!==t.id}));default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments[1];return t.type,e}}));f.subscribe((function(){console.log(f.getState())}));var s=f.dispatch(u({description:"Rent",amount:100}));f.dispatch(u({description:"Coffee",amount:300}));f.dispatch(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id;return{type:"REMOVE_EXPENSE",id:t}}({id:s.expense.id}))},function(e,t,r){"use strict";r.r(t),r.d(t,"__DO_NOT_USE__ActionTypes",(function(){return i})),r.d(t,"applyMiddleware",(function(){return h})),r.d(t,"bindActionCreators",(function(){return d})),r.d(t,"combineReducers",(function(){return f})),r.d(t,"compose",(function(){return v})),r.d(t,"createStore",(function(){return a}));var n=r(0),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function u(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function a(e,t,r){var o;if("function"==typeof t&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof t&&void 0===r&&(r=t,t=void 0),void 0!==r){if("function"!=typeof r)throw new Error("Expected the enhancer to be a function.");return r(a)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var c=e,f=t,s=[],d=s,l=!1;function p(){d===s&&(d=s.slice())}function y(){if(l)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return f}function v(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(l)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return p(),d.push(e),function(){if(t){if(l)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,p();var r=d.indexOf(e);d.splice(r,1),s=null}}}function h(e){if(!u(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(l)throw new Error("Reducers may not dispatch actions.");try{l=!0,f=c(f,e)}finally{l=!1}for(var t=s=d,r=0;r<t.length;r++){(0,t[r])()}return e}function b(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");c=e,h({type:i.REPLACE})}function w(){var e,t=v;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function r(){e.next&&e.next(y())}return r(),{unsubscribe:t(r)}}})[n.a]=function(){return this},e}return h({type:i.INIT}),(o={dispatch:h,subscribe:v,getState:y,replaceReducer:b})[n.a]=w,o}function c(e,t){var r=t&&t.type;return"Given "+(r&&'action "'+String(r)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function f(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];0,"function"==typeof e[o]&&(r[o]=e[o])}var u,a=Object.keys(r);try{!function(e){Object.keys(e).forEach((function(t){var r=e[t];if(void 0===r(void 0,{type:i.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===r(void 0,{type:i.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+i.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(r)}catch(e){u=e}return function(e,t){if(void 0===e&&(e={}),u)throw u;for(var n=!1,o={},i=0;i<a.length;i++){var f=a[i],s=r[f],d=e[f],l=s(d,t);if(void 0===l){var p=c(f,t);throw new Error(p)}o[f]=l,n=n||l!==d}return(n=n||a.length!==Object.keys(e).length)?o:e}}function s(e,t){return function(){return t(e.apply(this,arguments))}}function d(e,t){if("function"==typeof e)return s(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var r={};for(var n in e){var o=e[n];"function"==typeof o&&(r[n]=s(o,t))}return r}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e)),t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(r,!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function h(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){var r=e.apply(void 0,arguments),n=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},i=t.map((function(e){return e(o)}));return y({},r,{dispatch:n=v.apply(void 0,i)(r.dispatch)})}}}},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,r){"use strict";r.r(t),r.d(t,"v1",(function(){return v})),r.d(t,"v3",(function(){return I})),r.d(t,"v4",(function(){return x})),r.d(t,"v5",(function(){return N})),r.d(t,"NIL",(function(){return R})),r.d(t,"version",(function(){return C})),r.d(t,"validate",(function(){return a})),r.d(t,"stringify",(function(){return l})),r.d(t,"parse",(function(){return h}));var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),o=new Uint8Array(16);function i(){if(!n)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)}var u=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var a=function(e){return"string"==typeof e&&u.test(e)},c=[],f=0;f<256;++f)c.push((f+256).toString(16).substr(1));var s,d,l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase();if(!a(r))throw TypeError("Stringified UUID is invalid");return r},p=0,y=0;var v=function(e,t,r){var n=t&&r||0,o=t||new Array(16),u=(e=e||{}).node||s,a=void 0!==e.clockseq?e.clockseq:d;if(null==u||null==a){var c=e.random||(e.rng||i)();null==u&&(u=s=[1|c[0],c[1],c[2],c[3],c[4],c[5]]),null==a&&(a=d=16383&(c[6]<<8|c[7]))}var f=void 0!==e.msecs?e.msecs:Date.now(),v=void 0!==e.nsecs?e.nsecs:y+1,h=f-p+(v-y)/1e4;if(h<0&&void 0===e.clockseq&&(a=a+1&16383),(h<0||f>p)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");p=f,y=v,d=a;var b=(1e4*(268435455&(f+=122192928e5))+v)%4294967296;o[n++]=b>>>24&255,o[n++]=b>>>16&255,o[n++]=b>>>8&255,o[n++]=255&b;var w=f/4294967296*1e4&268435455;o[n++]=w>>>8&255,o[n++]=255&w,o[n++]=w>>>24&15|16,o[n++]=w>>>16&255,o[n++]=a>>>8|128,o[n++]=255&a;for(var g=0;g<6;++g)o[n+g]=u[g];return t||l(o)};var h=function(e){if(!a(e))throw TypeError("Invalid UUID");var t,r=new Uint8Array(16);return r[0]=(t=parseInt(e.slice(0,8),16))>>>24,r[1]=t>>>16&255,r[2]=t>>>8&255,r[3]=255&t,r[4]=(t=parseInt(e.slice(9,13),16))>>>8,r[5]=255&t,r[6]=(t=parseInt(e.slice(14,18),16))>>>8,r[7]=255&t,r[8]=(t=parseInt(e.slice(19,23),16))>>>8,r[9]=255&t,r[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,r[11]=t/4294967296&255,r[12]=t>>>24&255,r[13]=t>>>16&255,r[14]=t>>>8&255,r[15]=255&t,r};var b=function(e,t,r){function n(e,n,o,i){if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));for(var t=[],r=0;r<e.length;++r)t.push(e.charCodeAt(r));return t}(e)),"string"==typeof n&&(n=h(n)),16!==n.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var u=new Uint8Array(16+e.length);if(u.set(n),u.set(e,n.length),(u=r(u))[6]=15&u[6]|t,u[8]=63&u[8]|128,o){i=i||0;for(var a=0;a<16;++a)o[i+a]=u[a];return o}return l(u)}try{n.name=e}catch(e){}return n.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",n.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",n};function w(e){return 14+(e+64>>>9<<4)+1}function g(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function m(e,t,r,n,o,i){return g((u=g(g(t,e),g(n,i)))<<(a=o)|u>>>32-a,r);var u,a}function E(e,t,r,n,o,i,u){return m(t&r|~t&n,e,t,o,i,u)}function O(e,t,r,n,o,i,u){return m(t&n|r&~n,e,t,o,i,u)}function j(e,t,r,n,o,i,u){return m(t^r^n,e,t,o,i,u)}function A(e,t,r,n,o,i,u){return m(r^(t|~n),e,t,o,i,u)}var I=b("v3",48,(function(e){if("string"==typeof e){var t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(var r=0;r<t.length;++r)e[r]=t.charCodeAt(r)}return function(e){for(var t=[],r=32*e.length,n=0;n<r;n+=8){var o=e[n>>5]>>>n%32&255,i=parseInt("0123456789abcdef".charAt(o>>>4&15)+"0123456789abcdef".charAt(15&o),16);t.push(i)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[w(t)-1]=t;for(var r=1732584193,n=-271733879,o=-1732584194,i=271733878,u=0;u<e.length;u+=16){var a=r,c=n,f=o,s=i;r=E(r,n,o,i,e[u],7,-680876936),i=E(i,r,n,o,e[u+1],12,-389564586),o=E(o,i,r,n,e[u+2],17,606105819),n=E(n,o,i,r,e[u+3],22,-1044525330),r=E(r,n,o,i,e[u+4],7,-176418897),i=E(i,r,n,o,e[u+5],12,1200080426),o=E(o,i,r,n,e[u+6],17,-1473231341),n=E(n,o,i,r,e[u+7],22,-45705983),r=E(r,n,o,i,e[u+8],7,1770035416),i=E(i,r,n,o,e[u+9],12,-1958414417),o=E(o,i,r,n,e[u+10],17,-42063),n=E(n,o,i,r,e[u+11],22,-1990404162),r=E(r,n,o,i,e[u+12],7,1804603682),i=E(i,r,n,o,e[u+13],12,-40341101),o=E(o,i,r,n,e[u+14],17,-1502002290),n=E(n,o,i,r,e[u+15],22,1236535329),r=O(r,n,o,i,e[u+1],5,-165796510),i=O(i,r,n,o,e[u+6],9,-1069501632),o=O(o,i,r,n,e[u+11],14,643717713),n=O(n,o,i,r,e[u],20,-373897302),r=O(r,n,o,i,e[u+5],5,-701558691),i=O(i,r,n,o,e[u+10],9,38016083),o=O(o,i,r,n,e[u+15],14,-660478335),n=O(n,o,i,r,e[u+4],20,-405537848),r=O(r,n,o,i,e[u+9],5,568446438),i=O(i,r,n,o,e[u+14],9,-1019803690),o=O(o,i,r,n,e[u+3],14,-187363961),n=O(n,o,i,r,e[u+8],20,1163531501),r=O(r,n,o,i,e[u+13],5,-1444681467),i=O(i,r,n,o,e[u+2],9,-51403784),o=O(o,i,r,n,e[u+7],14,1735328473),n=O(n,o,i,r,e[u+12],20,-1926607734),r=j(r,n,o,i,e[u+5],4,-378558),i=j(i,r,n,o,e[u+8],11,-2022574463),o=j(o,i,r,n,e[u+11],16,1839030562),n=j(n,o,i,r,e[u+14],23,-35309556),r=j(r,n,o,i,e[u+1],4,-1530992060),i=j(i,r,n,o,e[u+4],11,1272893353),o=j(o,i,r,n,e[u+7],16,-155497632),n=j(n,o,i,r,e[u+10],23,-1094730640),r=j(r,n,o,i,e[u+13],4,681279174),i=j(i,r,n,o,e[u],11,-358537222),o=j(o,i,r,n,e[u+3],16,-722521979),n=j(n,o,i,r,e[u+6],23,76029189),r=j(r,n,o,i,e[u+9],4,-640364487),i=j(i,r,n,o,e[u+12],11,-421815835),o=j(o,i,r,n,e[u+15],16,530742520),n=j(n,o,i,r,e[u+2],23,-995338651),r=A(r,n,o,i,e[u],6,-198630844),i=A(i,r,n,o,e[u+7],10,1126891415),o=A(o,i,r,n,e[u+14],15,-1416354905),n=A(n,o,i,r,e[u+5],21,-57434055),r=A(r,n,o,i,e[u+12],6,1700485571),i=A(i,r,n,o,e[u+3],10,-1894986606),o=A(o,i,r,n,e[u+10],15,-1051523),n=A(n,o,i,r,e[u+1],21,-2054922799),r=A(r,n,o,i,e[u+8],6,1873313359),i=A(i,r,n,o,e[u+15],10,-30611744),o=A(o,i,r,n,e[u+6],15,-1560198380),n=A(n,o,i,r,e[u+13],21,1309151649),r=A(r,n,o,i,e[u+4],6,-145523070),i=A(i,r,n,o,e[u+11],10,-1120210379),o=A(o,i,r,n,e[u+2],15,718787259),n=A(n,o,i,r,e[u+9],21,-343485551),r=g(r,a),n=g(n,c),o=g(o,f),i=g(i,s)}return[r,n,o,i]}(function(e){if(0===e.length)return[];for(var t=8*e.length,r=new Uint32Array(w(t)),n=0;n<t;n+=8)r[n>>5]|=(255&e[n/8])<<n%32;return r}(e),8*e.length))}));var x=function(e,t,r){var n=(e=e||{}).random||(e.rng||i)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(var o=0;o<16;++o)t[r+o]=n[o];return t}return l(n)};function P(e,t,r,n){switch(e){case 0:return t&r^~t&n;case 1:return t^r^n;case 2:return t&r^t&n^r&n;case 3:return t^r^n}}function S(e,t){return e<<t|e>>>32-t}var N=b("v5",80,(function(e){var t=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){var n=unescape(encodeURIComponent(e));e=[];for(var o=0;o<n.length;++o)e.push(n.charCodeAt(o))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var i=e.length/4+2,u=Math.ceil(i/16),a=new Array(u),c=0;c<u;++c){for(var f=new Uint32Array(16),s=0;s<16;++s)f[s]=e[64*c+4*s]<<24|e[64*c+4*s+1]<<16|e[64*c+4*s+2]<<8|e[64*c+4*s+3];a[c]=f}a[u-1][14]=8*(e.length-1)/Math.pow(2,32),a[u-1][14]=Math.floor(a[u-1][14]),a[u-1][15]=8*(e.length-1)&4294967295;for(var d=0;d<u;++d){for(var l=new Uint32Array(80),p=0;p<16;++p)l[p]=a[d][p];for(var y=16;y<80;++y)l[y]=S(l[y-3]^l[y-8]^l[y-14]^l[y-16],1);for(var v=r[0],h=r[1],b=r[2],w=r[3],g=r[4],m=0;m<80;++m){var E=Math.floor(m/20),O=S(v,5)+P(E,h,b,w)+g+t[E]+l[m]>>>0;g=w,w=b,b=S(h,30)>>>0,h=v,v=O}r[0]=r[0]+v>>>0,r[1]=r[1]+h>>>0,r[2]=r[2]+b>>>0,r[3]=r[3]+w>>>0,r[4]=r[4]+g>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,255&r[0],r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,255&r[1],r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,255&r[2],r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,255&r[3],r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,255&r[4]]})),R="00000000-0000-0000-0000-000000000000";var C=function(e){if(!a(e))throw TypeError("Invalid UUID");return parseInt(e.substr(14,1),16)}}]);