(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){"use strict";(function(e){var o=n(1),r=n.n(o),a=n(2),i=n.n(a),c=n(8);function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?v(e):t}"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e||"undefined"!==typeof self&&self;var g,y,b=(function(e,t){e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,n){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r=n(2),a=n(8),i=n(0),c=function(){function e(t,n){var o=n.location,r=void 0===o?0:o,i=n.distance,c=void 0===i?100:i,l=n.threshold,s=void 0===l?.6:l,u=n.maxPatternLength,h=void 0===u?32:u,p=n.caseSensitive,d=void 0!==p&&p,f=n.tokenSeparator,v=void 0===f?/ +/g:f,m=n.findAllMatches,g=void 0!==m&&m,y=n.minMatchCharLength,b=void 0===y?1:y,x=n.id,C=void 0===x?null:x,k=n.keys,w=void 0===k?[]:k,S=n.shouldSort,E=void 0===S||S,B=n.getFn,O=void 0===B?a:B,j=n.sortFn,F=void 0===j?function(e,t){return e.score-t.score}:j,_=n.tokenize,M=void 0!==_&&_,D=n.matchAllTokens,I=void 0!==D&&D,A=n.includeMatches,L=void 0!==A&&A,N=n.includeScore,P=void 0!==N&&N,T=n.verbose,z=void 0!==T&&T;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:r,distance:c,threshold:s,maxPatternLength:h,isCaseSensitive:d,tokenSeparator:v,findAllMatches:g,minMatchCharLength:b,id:C,keys:w,includeMatches:L,includeScore:P,shouldSort:E,getFn:O,sortFn:F,verbose:z,tokenize:M,matchAllTokens:I},this.setCollection(t)}var t,n;return t=e,(n=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),o=n.tokenSearchers,r=n.fullSearcher,a=this._search(o,r),i=a.weights,c=a.results;return this._computeScore(i,c),this.options.shouldSort&&this._sort(c),t.limit&&"number"==typeof t.limit&&(c=c.slice(0,t.limit)),this._format(c)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),o=0,a=n.length;o<a;o+=1)t.push(new r(n[o],this.options));return{tokenSearchers:t,fullSearcher:new r(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=this.list,o={},r=[];if("string"==typeof n[0]){for(var a=0,i=n.length;a<i;a+=1)this._analyze({key:"",value:n[a],record:a,index:a},{resultMap:o,results:r,tokenSearchers:e,fullSearcher:t});return{weights:null,results:r}}for(var c={},l=0,s=n.length;l<s;l+=1)for(var u=n[l],h=0,p=this.options.keys.length;h<p;h+=1){var d=this.options.keys[h];if("string"!=typeof d){if(c[d.name]={weight:1-d.weight||1},d.weight<=0||d.weight>1)throw new Error("Key weight has to be > 0 and <= 1");d=d.name}else c[d]={weight:1};this._analyze({key:d,value:this.options.getFn(u,d),record:u,index:l},{resultMap:o,results:r,tokenSearchers:e,fullSearcher:t})}return{weights:c,results:r}}},{key:"_analyze",value:function(e,t){var n=e.key,o=e.arrayIndex,r=void 0===o?-1:o,a=e.value,c=e.record,l=e.index,s=t.tokenSearchers,u=void 0===s?[]:s,h=t.fullSearcher,p=void 0===h?[]:h,d=t.resultMap,f=void 0===d?{}:d,v=t.results,m=void 0===v?[]:v;if(null!=a){var g=!1,y=-1,b=0;if("string"==typeof a){this._log("\nKey: ".concat(""===n?"-":n));var x=p.search(a);if(this._log('Full text: "'.concat(a,'", score: ').concat(x.score)),this.options.tokenize){for(var C=a.split(this.options.tokenSeparator),k=[],w=0;w<u.length;w+=1){var S=u[w];this._log('\nPattern: "'.concat(S.pattern,'"'));for(var E=!1,B=0;B<C.length;B+=1){var O=C[B],j=S.search(O),F={};j.isMatch?(F[O]=j.score,g=!0,E=!0,k.push(j.score)):(F[O]=1,this.options.matchAllTokens||k.push(1)),this._log('Token: "'.concat(O,'", score: ').concat(F[O]))}E&&(b+=1)}y=k[0];for(var _=k.length,M=1;M<_;M+=1)y+=k[M];y/=_,this._log("Token score average:",y)}var D=x.score;y>-1&&(D=(D+y)/2),this._log("Score average:",D);var I=!this.options.tokenize||!this.options.matchAllTokens||b>=u.length;if(this._log("\nCheck Matches: ".concat(I)),(g||x.isMatch)&&I){var A=f[l];A?A.output.push({key:n,arrayIndex:r,value:a,score:D,matchedIndices:x.matchedIndices}):(f[l]={item:c,output:[{key:n,arrayIndex:r,value:a,score:D,matchedIndices:x.matchedIndices}]},m.push(f[l]))}}else if(i(a))for(var L=0,N=a.length;L<N;L+=1)this._analyze({key:n,arrayIndex:L,value:a[L],record:c,index:l},{resultMap:f,results:m,tokenSearchers:u,fullSearcher:p})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var n=0,o=t.length;n<o;n+=1){for(var r=t[n].output,a=r.length,i=1,c=1,l=0;l<a;l+=1){var s=e?e[r[l].key].weight:1,u=(1===s?r[l].score:r[l].score||.001)*s;1!==s?c=Math.min(c,u):(r[l].nScore=u,i*=u)}t[n].score=1===c?i:c,this._log(t[n])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,function(e,t){if("object"===o(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t)}return t})),n=null}var r=[];this.options.includeMatches&&r.push(function(e,t){var n=e.output;t.matches=[];for(var o=0,r=n.length;o<r;o+=1){var a=n[o];if(0!==a.matchedIndices.length){var i={indices:a.matchedIndices,value:a.value};a.key&&(i.key=a.key),a.hasOwnProperty("arrayIndex")&&a.arrayIndex>-1&&(i.arrayIndex=a.arrayIndex),t.matches.push(i)}}}),this.options.includeScore&&r.push(function(e,t){t.score=e.score});for(var a=0,i=e.length;a<i;a+=1){var c=e[a];if(this.options.id&&(c.item=this.options.getFn(c.item,this.options.id)[0]),r.length){for(var l={item:c.item},s=0,u=r.length;s<u;s+=1)r[s](c,l);t.push(l)}else t.push(c.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&function(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(t.prototype,n),e}();e.exports=c},function(e,t,n){var o=n(3),r=n(4),a=n(7),i=function(){function e(t,n){var o=n.location,r=void 0===o?0:o,i=n.distance,c=void 0===i?100:i,l=n.threshold,s=void 0===l?.6:l,u=n.maxPatternLength,h=void 0===u?32:u,p=n.isCaseSensitive,d=void 0!==p&&p,f=n.tokenSeparator,v=void 0===f?/ +/g:f,m=n.findAllMatches,g=void 0!==m&&m,y=n.minMatchCharLength,b=void 0===y?1:y;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:r,distance:c,threshold:s,maxPatternLength:h,isCaseSensitive:d,tokenSeparator:v,findAllMatches:g,minMatchCharLength:b},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=h&&(this.patternAlphabet=a(this.pattern))}var t,n;return t=e,(n=[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,n=t.maxPatternLength,a=t.tokenSeparator;if(this.pattern.length>n)return o(e,this.pattern,a);var i=this.options,c=i.location,l=i.distance,s=i.threshold,u=i.findAllMatches,h=i.minMatchCharLength;return r(e,this.pattern,this.patternAlphabet,{location:c,distance:l,threshold:s,findAllMatches:u,minMatchCharLength:h})}}])&&function(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(t.prototype,n),e}();e.exports=i},function(e,t){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,r=new RegExp(t.replace(n,"\\$&").replace(o,"|")),a=e.match(r),i=!!a,c=[];if(i)for(var l=0,s=a.length;l<s;l+=1){var u=a[l];c.push([e.indexOf(u),u.length-1])}return{score:i?.5:1,isMatch:i,matchedIndices:c}}},function(e,t,n){var o=n(5),r=n(6);e.exports=function(e,t,n,a){for(var i=a.location,c=void 0===i?0:i,l=a.distance,s=void 0===l?100:l,u=a.threshold,h=void 0===u?.6:u,p=a.findAllMatches,d=void 0!==p&&p,f=a.minMatchCharLength,v=void 0===f?1:f,m=c,g=e.length,y=h,b=e.indexOf(t,m),x=t.length,C=[],k=0;k<g;k+=1)C[k]=0;if(-1!==b){var w=o(t,{errors:0,currentLocation:b,expectedLocation:m,distance:s});if(y=Math.min(w,y),-1!==(b=e.lastIndexOf(t,m+x))){var S=o(t,{errors:0,currentLocation:b,expectedLocation:m,distance:s});y=Math.min(S,y)}}b=-1;for(var E=[],B=1,O=x+g,j=1<<x-1,F=0;F<x;F+=1){for(var _=0,M=O;_<M;)o(t,{errors:F,currentLocation:m+M,expectedLocation:m,distance:s})<=y?_=M:O=M,M=Math.floor((O-_)/2+_);O=M;var D=Math.max(1,m-M+1),I=d?g:Math.min(m+M,g)+x,A=Array(I+2);A[I+1]=(1<<F)-1;for(var L=I;L>=D;L-=1){var N=L-1,P=n[e.charAt(N)];if(P&&(C[N]=1),A[L]=(A[L+1]<<1|1)&P,0!==F&&(A[L]|=(E[L+1]|E[L])<<1|1|E[L+1]),A[L]&j&&(B=o(t,{errors:F,currentLocation:N,expectedLocation:m,distance:s}))<=y){if(y=B,(b=N)<=m)break;D=Math.max(1,2*m-b)}}if(o(t,{errors:F+1,currentLocation:m,expectedLocation:m,distance:s})>y)break;E=A}return{isMatch:b>=0,score:0===B?.001:B,matchedIndices:r(C,v)}}},function(e,t){e.exports=function(e,t){var n=t.errors,o=void 0===n?0:n,r=t.currentLocation,a=void 0===r?0:r,i=t.expectedLocation,c=void 0===i?0:i,l=t.distance,s=void 0===l?100:l,u=o/e.length,h=Math.abs(c-a);return s?u+h/s:h?1:u}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],o=-1,r=-1,a=0,i=e.length;a<i;a+=1){var c=e[a];c&&-1===o?o=a:c||-1===o||((r=a-1)-o+1>=t&&n.push([o,r]),o=-1)}return e[a-1]&&a-o>=t&&n.push([o,a-1]),n}},function(e,t){e.exports=function(e){for(var t={},n=e.length,o=0;o<n;o+=1)t[e.charAt(o)]=0;for(var r=0;r<n;r+=1)t[e.charAt(r)]|=1<<n-r-1;return t}},function(e,t,n){var o=n(0);e.exports=function(e,t){return function e(t,n,r){if(n){var a=n.indexOf("."),i=n,c=null;-1!==a&&(i=n.slice(0,a),c=n.slice(a+1));var l=t[i];if(null!=l)if(c||"string"!=typeof l&&"number"!=typeof l)if(o(l))for(var s=0,u=l.length;s<u;s+=1)e(l[s],c,r);else c&&e(l,c,r);else r.push(l.toString())}else r.push(t);return r}(e,t,[])}}])}(g={exports:{}},g.exports),g.exports),x=(y=b)&&y.__esModule&&Object.prototype.hasOwnProperty.call(y,"default")?y.default:y,C=(b.Fuse,c.b.input.withConfig({displayName:"styled-component__StyledInput",componentId:"sc-1dsackt-0"})(["font-size:",";padding:10px 20px;height:",";border:1px solid ",";border-radius:5px;color:",";&:focus{outline:none;}"],function(e){return e.inputBoxFontSize},function(e){return e.inputBoxHeight},function(e){return e.inputBoxBorderColor},function(e){return e.inputBoxFontColor})),k=function(e){function t(){return l(this,t),m(this,d(t).apply(this,arguments))}return p(t,o["Component"]),u(t,[{key:"componentDidMount",value:function(){this.props.autoFocus&&this.input.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.placeholder,o=t.value,a=t.onChange,i=t.onFocus,c=t.inputBoxFontColor,l=t.inputBoxBorderColor,s=t.inputBoxFontSize,u=t.inputBoxHeight;return r.a.createElement(C,{type:"text",placeholder:n,value:o,onChange:a,onFocus:i,ref:function(t){e.input=t},inputBoxFontColor:c,inputBoxBorderColor:l,inputBoxFontSize:s,inputBoxHeight:u})}}]),t}();h(k,"propTypes",{placeholder:i.a.string,value:i.a.string,onChange:i.a.func,onFocus:i.a.func,inputBoxFontColor:i.a.string,inputBoxBorderColor:i.a.string,inputBoxFontSize:i.a.string,inputBoxHeight:i.a.string});var w=c.b.div.withConfig({displayName:"styled-component__StyledDropdown",componentId:"sc-160859k-0"})(["margin:10px 0 0;background-color:#fff;box-shadow:rgba(0,0,0,0.1) 0 0 0 0,rgba(0,0,0,0.1) 0px 4px 11px;border-radius:5px;> ul{list-style-type:none;margin:0;padding:0;> li{padding:10px 20px;background-color:#fff;border:1px solid ",";height:40px;display:flex;align-items:center;&:hover{background-color:",";cursor:pointer;}&:first-child{border-top-left-radius:5px;border-top-right-radius:5px;}&:last-child{border-bottom-left-radius:5px;border-bottom-right-radius:5px;}&:not(:first-child){border-top:0;}}}"],function(e){return e.dropDownBorderColor},function(e){return e.dropDownHoverColor}),S=function(e){function t(){return l(this,t),m(this,d(t).apply(this,arguments))}return p(t,o["Component"]),u(t,[{key:"render",value:function(){var e=this.props,t=e.matchedRecords,n=e.onClick,o=e.dropDownHoverColor,a=e.dropDownBorderColor;return r.a.createElement(w,{className:"react-search-box-dropdown",dropDownHoverColor:o,dropDownBorderColor:a},r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",{key:e.key,className:"react-search-box-dropdown-list-item",onClick:function(){return n(e)}},e.value)})))}}]),t}();function E(){var e,t,n=(e=["\n  * {\n    box-sizing: border-box;\n  }\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return E=function(){return n},n}h(S,"propTypes",{onClick:i.a.func,matchedRecords:i.a.array,dropDownHoverColor:i.a.string,dropDownBorderColor:i.a.string}),h(S,"defaultProps",{matchedRecords:[]});var B=Object(c.a)(E()),O=c.b.div.withConfig({displayName:"src__StyledContainer",componentId:"hakmvc-0"})(["display:flex;flex-direction:column;"]),j=function(e){function t(e){var n;l(this,t),h(v(n=m(this,d(t).call(this,e))),"state",{value:"",matchedRecords:[]}),h(v(n),"handleInputChange",function(e){var t=n.props.onChange,o=e.target.value,r=n.fuse.search(o);n.setState({value:o,matchedRecords:r,showDropdown:!0}),t&&t(o)}),h(v(n),"inputNode",function(){var e=n.props,t=e.placeholder,o=e.onFocus,a=e.autoFocus,i=e.inputBoxFontColor,c=e.inputBoxBorderColor,l=e.inputBoxFontSize,s=e.inputBoxHeight,u=n.state.value;return r.a.createElement(k,{type:"text",placeholder:t,value:u,onChange:n.handleInputChange,autoFocus:a||void 0,onFocus:o||void 0,inputBoxFontColor:i,inputBoxBorderColor:c,inputBoxFontSize:l,inputBoxHeight:s})}),h(v(n),"handleDropdownItemClick",function(e){var t=e.value,o=n.props,r=o.onSelect,a=o.onChange;n.setState({value:t,showDropdown:!1}),r&&r(e),a&&a(t)}),h(v(n),"dropdownNode",function(){var e=n.state,t=e.matchedRecords,o=e.showDropdown,a=n.props,i=a.dropDownHoverColor,c=a.dropDownBorderColor;return!!o&&r.a.createElement(S,{matchedRecords:t,onClick:n.handleDropdownItemClick,dropDownHoverColor:i,dropDownBorderColor:c})});var o=e.data,a=e.fuseConfigs;n.defaultFuseConfigs={threshold:.05,location:0,distance:100,minMatchCharLength:1,keys:["value"]};var i=Object.assign({},n.defaultFuseConfigs,a);return n.fuse=new x(o,i),n}return p(t,o["Component"]),u(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.data,o=t.fuseConfigs;if(e.data!==n){var r=Object.assign({},this.defaultFuseConfigs,o);this.fuse=new x(n,r)}}},{key:"render",value:function(){return r.a.createElement(O,null,r.a.createElement(B,null),this.inputNode(),this.dropdownNode())}}]),t}();h(j,"propTypes",{placeholder:i.a.string,data:i.a.array.isRequired,fuseConfigs:i.a.object,autoFocus:i.a.bool,onSelect:i.a.func,onFocus:i.a.func,onChange:i.a.func,inputBoxFontColor:i.a.string,inputBoxBorderColor:i.a.string,inputBoxFontSize:i.a.string,inputBoxHeight:i.a.string,dropDownHoverColor:i.a.string,dropDownBorderColor:i.a.string}),h(j,"defaultProps",{data:[],autoFocus:!1,placeholder:"",inputBoxFontColor:"#000",inputBoxBorderColor:"#cacaca96",inputBoxFontSize:"14px",inputBoxHeight:"40px",dropDownHoverColor:"#ccc",dropDownBorderColor:"#cacaca96"}),t.a=j}).call(this,n(9))},19:function(e){e.exports=[{key:"john",value:"John Doe"},{key:"jane",value:"Jane Doe"},{key:"mary",value:"Mary Phillips"},{key:"robert",value:"Robert"},{key:"karius",value:"Karius"}]},22:function(e,t,n){e.exports=n(35)},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(14),i=n.n(a),c=n(3),l=n(4),s=n(6),u=n(5),h=n(7),p=n(15),d=n(18),f=n.n(d),v=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron-container"},r.a.createElement("div",{className:"title"},"React Search Box"),r.a.createElement("div",{className:"sub-title"},"An autocomplete search box for ReactJS"),r.a.createElement("a",{href:"https://github.com/ghoshnirmalya/react-search-box",className:"button"},"Install from Github"))}}]),t}(o.Component),m=n(19),g=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).reactSearchBoxNode=function(){return r.a.createElement("div",{className:"react-search-box-container"},r.a.createElement(p.a,{placeholder:"Search for John, Jane or Mary",data:m,onSelect:function(e){return console.log(e)},onFocus:function(){console.log("This function is called when is focussed")},onChange:function(e){return console.log(e)},fuseConfigs:{threshold:.05}}))},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){f.a.highlightAll()}},{key:"render",value:function(){return r.a.createElement(o.Fragment,null,r.a.createElement(v,null),r.a.createElement("div",{className:"page-container"},r.a.createElement("section",{className:"section"},r.a.createElement("h2",null,"Getting Started"),r.a.createElement("div",null,"First, you need to install this plugin:",r.a.createElement("pre",null,r.a.createElement("code",{className:"language-shell"},"\n  npm i react-search-box --save\n                  ")),"If you prefer to use yarn, you can do:",r.a.createElement("pre",null,r.a.createElement("code",{className:"language-shell"},"\n  yarn add react-search-box\n                  ")),"Then, you can define the plugin in your component:",r.a.createElement("pre",null,r.a.createElement("code",{className:"language-javascript"},"\n  import React, { Component } from 'react'\n  import ReactSearchBox from 'react-search-box'\n\n  export default class App extends Component {\n    data = [\n      {\n        key: 'john',\n        value: 'John Doe',\n      },\n      {\n        key: 'jane',\n        value: 'Jane Doe',\n      },\n      {\n        key: 'mary',\n        value: 'Mary Phillips',\n      },\n      {\n        key: 'robert',\n        value: 'Robert',\n      },\n      {\n        key: 'karius',\n        value: 'Karius',\n      },\n    ]\n\n    render() {\n      return (\n        <ReactSearchBox\n          placeholder=\"Search for John, Jane or Mary\"\n          data={data}\n          onSelect={record => console.log(record)}\n          onFocus={() => {\n            console.log('This function is called when is focussed')\n          }}\n          onChange={value => console.log(value)}\n          fuseConfigs={{\n            threshold: 0.05,\n          }}\n        />\n      )\n    }\n  }\n                  ")),"That is all that you need to use react-search-box.")),r.a.createElement("section",{className:"section"},r.a.createElement("h2",null,"Demo"),r.a.createElement("div",null,this.reactSearchBoxNode())),r.a.createElement("section",{className:"section"},r.a.createElement("h2",null,"Basic Props"),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("b",null,"placeholder")," - The placeholder text for the input box."),r.a.createElement("p",null,r.a.createElement("b",null,"data")," - An array of objects which acts as the source of data for the dropdown. This prop is required."),r.a.createElement("p",null,r.a.createElement("b",null,"fuseConfigs")," - Configs to override default Fuse configs."),r.a.createElement("p",null,r.a.createElement("b",null,"autoFocus")," - Focus on the input box once the component is mounted."),r.a.createElement("p",null,r.a.createElement("b",null,"onSelect")," - A function which acts as a callback when any record is selected. It is triggered once a dropdown item is clicked."),r.a.createElement("p",null,r.a.createElement("b",null,"onFocus")," - A function which acts as a callback when the input is focussed."),r.a.createElement("p",null,r.a.createElement("b",null,"onChange")," - A function which acts as a callback when the input value is changed."),r.a.createElement("p",null,r.a.createElement("b",null,"inputBoxFontColor")," - Color of the text in the input box."),r.a.createElement("p",null,r.a.createElement("b",null,"inputBoxBorderColor")," - Color of the border of the input box."),r.a.createElement("p",null,r.a.createElement("b",null,"inputBoxFontSize")," - Size of the font of the input box."),r.a.createElement("p",null,r.a.createElement("b",null,"inputBoxHeight")," - Height of the input box."),r.a.createElement("p",null,r.a.createElement("b",null,"dropDownHoverColor")," - Background color on hover of the dropdown list items."),r.a.createElement("p",null,r.a.createElement("b",null,"dropDownBorderColor")," - Border color of the dropdown."))),r.a.createElement("section",{className:"section"},r.a.createElement("h2",null,"License"),r.a.createElement("div",null,"MIT Licensed. Copyright (c) Nirmalya Ghosh 2019."))))}}]),t}(o.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"layout-container"},r.a.createElement(g,null))}}]),t}(o.Component);n(33),n(34);i.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.37560f1c.chunk.js.map