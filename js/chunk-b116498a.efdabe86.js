(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b116498a"],{"13d7":function(t,e,a){"use strict";var n=a("2acb"),i=a.n(n);i.a},"2acb":function(t,e,a){},"36c9":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Heading"),a("div",{staticClass:"wrapper"},[t.loaded?a("Report"):a("Spinner")],1)],1)},i=[],r=a("b43e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("AppHeader"),a("div",{staticClass:"row"},t._l(t.paginatedResults,(function(t,e){return a("CountryCard",{key:e,attrs:{countryData:t}})})),1),t.results.length?a("Paginator",{attrs:{"per-page":t.perPage,results:t.results},on:{updatePage:t.updatePage}}):t._e()],1)},c=[],l=(a("fb6a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-between mb-3"},[a("WorldTotal"),a("Search")],1)}),o=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column text-left pl-4",staticStyle:{width:"fit-content"},attrs:{id:"sidebar"}},[a("p",{staticStyle:{color:"#1d8fd3"}},[a("span",[t._v("Total Confirmed:")]),t._v(" "),a("span",[t._v(t._s(t.worldTotals.confirmed))])]),a("p",{staticStyle:{color:"#429b9a"}},[a("span",[t._v("Total Recovered:")]),t._v(" "),a("span",[t._v(t._s(t.worldTotals.recovered))])]),a("p",{staticStyle:{color:"#ba3937"}},[a("span",[t._v("Total Deaths:")]),t._v(" "),a("span",[t._v(t._s(t.worldTotals.deaths))])])])},p=[],g={name:"WorldTotal",data:function(){return{}},computed:{worldTotals:function(){return this.$store.getters.reportTotals}}},f=g,d=(a("7943"),a("2877")),h=Object(d["a"])(f,u,p,!1,null,"a1465ea4",null),v=h.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex",attrs:{id:"search"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"align-self-end form-control",attrs:{type:"text","aria-describedby":"search",placeholder:"Country..."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})])},_=[],m=(a("ac1f"),a("841c"),a("b012")),C={name:"Search",components:{WorldTotal:v},data:function(){return{search:""}},watch:{search:Object(m["debounce"])((function(t){this.$store.dispatch("search",this.search)}),500)}},b=C,k=(a("13d7"),Object(d["a"])(b,P,_,!1,null,"6e9becde",null)),y=k.exports,x={name:"Header",components:{WorldTotal:v,Search:y}},w=x,N=Object(d["a"])(w,l,o,!1,null,"7a5b3897",null),E=N.exports,T=a("15c3"),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("PaginationLinks",{attrs:{pagination:t.pagination},on:{paginationUpdate:t.updatePagination}})},I=[],S=(a("a9e3"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"d-flex justify-content-end w-100"},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:!t.pagination.prevPage}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.linkClick(t.pagination.currentPage-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),a("span",{staticClass:"sr-only"},[t._v("Previous")])])]),a("li",{key:1,staticClass:"page-item",class:{active:1===t.pagination.currentPage}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.linkClick(1)}}},[t._v("1")])]),t.pagination.currentPage>4?a("li",{staticClass:"page-item disabled",attrs:{"aria-disabled":"true"}},[a("span",{staticClass:"page-link"},[t._v("...")])]):t._e(),t.calculateLowerBound(t.pagination.currentPage,2)?a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.linkClick(t.pagination.currentPage-2)}}},[t._v(" "+t._s(t.pagination.currentPage-2)+" ")])]):t._e(),t.calculateLowerBound(t.pagination.currentPage,1)?a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.linkClick(t.pagination.currentPage-1)}}},[t._v(" "+t._s(t.pagination.currentPage-1)+" ")])]):t._e(),1!==t.pagination.currentPage&&t.pagination.currentPage!==t.pagination.lastPage?a("li",{staticClass:"page-item",class:{active:t.pagination.currentPage}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.linkClick(t.pagination.currentPage)}}},[t._v(" "+t._s(t.pagination.currentPage)+" ")])]):t._e(),t.calculateUpperBound(t.pagination.currentPage,1)?a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.linkClick(t.pagination.currentPage+1)}}},[t._v(" "+t._s(t.pagination.currentPage+1)+" ")])]):t._e(),t.calculateUpperBound(t.pagination.currentPage,2)?a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.linkClick(t.pagination.currentPage+2)}}},[t._v(" "+t._s(t.pagination.currentPage+2)+" ")])]):t._e(),t.pagination.currentPage<t.pagination.lastPage-3?a("li",{staticClass:"page-item disabled",attrs:{"aria-disabled":"true"}},[a("span",{staticClass:"page-link"},[t._v("...")])]):t._e(),1!==t.pagination.lastPage?a("li",{key:t.pagination.lastPage,staticClass:"page-item",class:{active:t.pagination.currentPage===t.pagination.lastPage}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.linkClick(t.pagination.lastPage)}}},[t._v(" "+t._s(t.pagination.lastPage)+" ")])]):t._e(),a("li",{staticClass:"page-item",class:{disabled:!t.pagination.nextPage}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.linkClick(t.pagination.currentPage+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),a("span",{staticClass:"sr-only"},[t._v("Next")])])])])])}),$=[],D={name:"PaginationLinks",props:{pagination:{type:Object}},data:function(){return{}},methods:{linkClick:function(t){this.$emit("paginationUpdate",t)},calculateLowerBound:function(t,e){return t-e!==0&&t-e!==1&&t-e!==-1},calculateUpperBound:function(t,e){return t+e<this.pagination.lastPage}}},O=D,R=(a("36ec"),Object(d["a"])(O,S,$,!1,null,"017547f5",null)),j=R.exports,L={name:"Paginator",components:{PaginationLinks:j},props:{results:{type:Array,default:function(){return[]}},perPage:{type:Number}},data:function(){return{pages:[],pagination:{}}},watch:{results:{deep:!0,handler:function(){this.pagination={currentPage:1,lastPage:Math.ceil(this.results.length/this.perPage),total:this.results.length,nextPage:2,prevPage:0}}}},methods:{updatePagination:function(t){t>this.pagination.lastPage?this.pagination.nextPage=null:(this.pagination.nextPage=t+1,this.pagination.prevPage=t-1,this.pagination.currentPage=t,t===this.pagination.lastPage&&(this.pagination.nextPage=null),this.$emit("updatePage",{page:t,perPage:this.perPage}))}},created:function(){this.pagination={currentPage:1,lastPage:Math.ceil(this.results.length/this.perPage),total:this.results.length,nextPage:2,prevPage:0}}},M=L,U=Object(d["a"])(M,A,I,!1,null,"d2a9dd2c",null),B=U.exports,F={name:"Report",components:{CountryCard:T["a"],Paginator:B,AppHeader:E},data:function(){return{results:[],page:1,perPage:6}},computed:{reports:function(){return this.$store.getters.report},paginatedResults:function(){return this.results=this.reports,this.paginate(this.reports)}},methods:{updatePage:function(t){var e=t.page,a=t.perPage;this.page=e,this.perPage=a},paginate:function(t){return t.slice(this.page*this.perPage-this.perPage,this.page*this.perPage)}},created:function(){this.results=this.$store.getters.report}},H=F,W=Object(d["a"])(H,s,c,!1,null,"ec74ab28",null),V=W.exports,G=a("2375"),J={name:"World",components:{Heading:r["a"],Report:V,Spinner:G["a"]},data:function(){return{loaded:!1}},created:function(){var t=this;this.$store.dispatch("fetchReport").then((function(e){t.loaded=!0})).catch((function(t){}))}},X=J,Y=Object(d["a"])(X,n,i,!1,null,null,null);e["default"]=Y.exports},"36ec":function(t,e,a){"use strict";var n=a("c187"),i=a.n(n);i.a},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var n=a("1d80"),i=a("5899"),r="["+i+"]",s=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),l=function(t){return function(e){var a=String(n(e));return 1&t&&(a=a.replace(s,"")),2&t&&(a=a.replace(c,"")),a}};t.exports={start:l(1),end:l(2),trim:l(3)}},7156:function(t,e,a){var n=a("861d"),i=a("d2bb");t.exports=function(t,e,a){var r,s;return i&&"function"==typeof(r=e.constructor)&&r!==a&&n(s=r.prototype)&&s!==a.prototype&&i(t,s),t}},7943:function(t,e,a){"use strict";var n=a("9f20"),i=a.n(n);i.a},"9f20":function(t,e,a){},a9e3:function(t,e,a){"use strict";var n=a("83ab"),i=a("da84"),r=a("94ca"),s=a("6eeb"),c=a("5135"),l=a("c6b6"),o=a("7156"),u=a("c04e"),p=a("d039"),g=a("7c73"),f=a("241c").f,d=a("06cf").f,h=a("9bf2").f,v=a("58a8").trim,P="Number",_=i[P],m=_.prototype,C=l(g(m))==P,b=function(t){var e,a,n,i,r,s,c,l,o=u(t,!1);if("string"==typeof o&&o.length>2)if(o=v(o),e=o.charCodeAt(0),43===e||45===e){if(a=o.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(o.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+o}for(r=o.slice(2),s=r.length,c=0;c<s;c++)if(l=r.charCodeAt(c),l<48||l>i)return NaN;return parseInt(r,n)}return+o};if(r(P,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var k,y=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof y&&(C?p((function(){m.valueOf.call(a)})):l(a)!=P)?o(new _(b(e)),a,y):b(e)},x=n?f(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;x.length>w;w++)c(_,k=x[w])&&!c(y,k)&&h(y,k,d(_,k));y.prototype=m,m.constructor=y,s(i,P,y)}},b012:function(t,e){function a(t,e,a){var n,i,r,s,c;function l(){var o=Date.now()-s;o<e&&o>=0?n=setTimeout(l,e-o):(n=null,a||(c=t.apply(r,i),r=i=null))}null==e&&(e=100);var o=function(){r=this,i=arguments,s=Date.now();var o=a&&!n;return n||(n=setTimeout(l,e)),o&&(c=t.apply(r,i),r=i=null),c};return o.clear=function(){n&&(clearTimeout(n),n=null)},o.flush=function(){n&&(c=t.apply(r,i),r=i=null,clearTimeout(n),n=null)},o}a.debounce=a,t.exports=a},c187:function(t,e,a){},fb6a:function(t,e,a){"use strict";var n=a("23e7"),i=a("861d"),r=a("e8b5"),s=a("23cb"),c=a("50c4"),l=a("fc6a"),o=a("8418"),u=a("b622"),p=a("1dde"),g=a("ae40"),f=p("slice"),d=g("slice",{ACCESSORS:!0,0:0,1:2}),h=u("species"),v=[].slice,P=Math.max;n({target:"Array",proto:!0,forced:!f||!d},{slice:function(t,e){var a,n,u,p=l(this),g=c(p.length),f=s(t,g),d=s(void 0===e?g:e,g);if(r(p)&&(a=p.constructor,"function"!=typeof a||a!==Array&&!r(a.prototype)?i(a)&&(a=a[h],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return v.call(p,f,d);for(n=new(void 0===a?Array:a)(P(d-f,0)),u=0;f<d;f++,u++)f in p&&o(n,u,p[f]);return n.length=u,n}})}}]);
//# sourceMappingURL=chunk-b116498a.efdabe86.js.map