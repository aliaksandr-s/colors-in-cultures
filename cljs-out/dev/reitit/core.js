// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('reitit.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reitit.impl');
goog.require('reitit.exception');
goog.require('reitit.trie');

/**
 * @interface
 */
reitit.core.Expand = function(){};

reitit.core.expand = (function reitit$core$expand(this$,opts){
if(((!((this$ == null))) && (!((this$.reitit$core$Expand$expand$arity$2 == null))))){
return this$.reitit$core$Expand$expand$arity$2(this$,opts);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.core.expand[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,opts) : m__4244__auto__.call(null,this$,opts));
} else {
var m__4244__auto____$1 = (reitit.core.expand["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,opts) : m__4244__auto____$1.call(null,this$,opts));
} else {
throw cljs.core.missing_protocol("Expand.expand",this$);
}
}
}
});

cljs.core.Keyword.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,this$__$1], null);
});

cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentHashMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
});

goog.object.set(reitit.core.Expand,"function",true);

var G__24722_24728 = reitit.core.expand;
var G__24723_24729 = "function";
var G__24724_24730 = ((function (G__24722_24728,G__24723_24729){
return (function (this$,_){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,this$], null);
});})(G__24722_24728,G__24723_24729))
;
goog.object.set(G__24722_24728,G__24723_24729,G__24724_24730);

goog.object.set(reitit.core.Expand,"null",true);

var G__24725_24731 = reitit.core.expand;
var G__24726_24732 = "null";
var G__24727_24733 = ((function (G__24725_24731,G__24726_24732){
return (function (_,___$1){
return null;
});})(G__24725_24731,G__24726_24732))
;
goog.object.set(G__24725_24731,G__24726_24732,G__24727_24733);

/**
 * @interface
 */
reitit.core.Router = function(){};

reitit.core.router_name = (function reitit$core$router_name(this$){
if(((!((this$ == null))) && (!((this$.reitit$core$Router$router_name$arity$1 == null))))){
return this$.reitit$core$Router$router_name$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.core.router_name[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (reitit.core.router_name["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.router-name",this$);
}
}
}
});

reitit.core.routes = (function reitit$core$routes(this$){
if(((!((this$ == null))) && (!((this$.reitit$core$Router$routes$arity$1 == null))))){
return this$.reitit$core$Router$routes$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.core.routes[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (reitit.core.routes["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.routes",this$);
}
}
}
});

reitit.core.compiled_routes = (function reitit$core$compiled_routes(this$){
if(((!((this$ == null))) && (!((this$.reitit$core$Router$compiled_routes$arity$1 == null))))){
return this$.reitit$core$Router$compiled_routes$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.core.compiled_routes[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (reitit.core.compiled_routes["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.compiled-routes",this$);
}
}
}
});

reitit.core.options = (function reitit$core$options(this$){
if(((!((this$ == null))) && (!((this$.reitit$core$Router$options$arity$1 == null))))){
return this$.reitit$core$Router$options$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.core.options[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (reitit.core.options["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.options",this$);
}
}
}
});

reitit.core.route_names = (function reitit$core$route_names(this$){
if(((!((this$ == null))) && (!((this$.reitit$core$Router$route_names$arity$1 == null))))){
return this$.reitit$core$Router$route_names$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.core.route_names[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (reitit.core.route_names["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.route-names",this$);
}
}
}
});

reitit.core.match_by_path = (function reitit$core$match_by_path(this$,path){
if(((!((this$ == null))) && (!((this$.reitit$core$Router$match_by_path$arity$2 == null))))){
return this$.reitit$core$Router$match_by_path$arity$2(this$,path);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.core.match_by_path[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__4244__auto__.call(null,this$,path));
} else {
var m__4244__auto____$1 = (reitit.core.match_by_path["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,path) : m__4244__auto____$1.call(null,this$,path));
} else {
throw cljs.core.missing_protocol("Router.match-by-path",this$);
}
}
}
});

reitit.core.match_by_name = (function reitit$core$match_by_name(var_args){
var G__24735 = arguments.length;
switch (G__24735) {
case 2:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
if(((!((this$ == null))) && (!((this$.reitit$core$Router$match_by_name$arity$2 == null))))){
return this$.reitit$core$Router$match_by_name$arity$2(this$,name);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.core.match_by_name[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__4244__auto__.call(null,this$,name));
} else {
var m__4244__auto____$1 = (reitit.core.match_by_name["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,name) : m__4244__auto____$1.call(null,this$,name));
} else {
throw cljs.core.missing_protocol("Router.match-by-name",this$);
}
}
}
});

reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
if(((!((this$ == null))) && (!((this$.reitit$core$Router$match_by_name$arity$3 == null))))){
return this$.reitit$core$Router$match_by_name$arity$3(this$,name,path_params);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.core.match_by_name[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(this$,name,path_params) : m__4244__auto__.call(null,this$,name,path_params));
} else {
var m__4244__auto____$1 = (reitit.core.match_by_name["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,name,path_params) : m__4244__auto____$1.call(null,this$,name,path_params));
} else {
throw cljs.core.missing_protocol("Router.match-by-name",this$);
}
}
}
});

reitit.core.match_by_name.cljs$lang$maxFixedArity = 3;


reitit.core.router_QMARK_ = (function reitit$core$router_QMARK_(x){
if(!((x == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.reitit$core$Router$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(reitit.core.Router,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(reitit.core.Router,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.core.Match = (function (template,data,result,path_params,path,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k24739,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__24743 = k24739;
var G__24743__$1 = (((G__24743 instanceof cljs.core.Keyword))?G__24743.fqn:null);
switch (G__24743__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24739,else__4206__auto__);

}
});

reitit.core.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#reitit.core.Match{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$template,self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$result,self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path_DASH_params,self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path,self__.path],null))], null),self__.__extmap));
});

reitit.core.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24738){
var self__ = this;
var G__24738__$1 = this;
return (new cljs.core.RecordIter((0),G__24738__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$template,cljs.core.cst$kw$data,cljs.core.cst$kw$result,cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$path], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

reitit.core.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

reitit.core.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.core.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

reitit.core.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__24744 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (687105853 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__24744(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

reitit.core.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24740,other24741){
var self__ = this;
var this24740__$1 = this;
return ((!((other24741 == null))) && ((this24740__$1.constructor === other24741.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24740__$1.template,other24741.template)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24740__$1.data,other24741.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24740__$1.result,other24741.result)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24740__$1.path_params,other24741.path_params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24740__$1.path,other24741.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24740__$1.__extmap,other24741.__extmap)));
});

reitit.core.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$template,null,cljs.core.cst$kw$result,null,cljs.core.cst$kw$path_DASH_params,null,cljs.core.cst$kw$data,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

reitit.core.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__24738){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__24745 = cljs.core.keyword_identical_QMARK_;
var expr__24746 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__24748 = cljs.core.cst$kw$template;
var G__24749 = expr__24746;
return (pred__24745.cljs$core$IFn$_invoke$arity$2 ? pred__24745.cljs$core$IFn$_invoke$arity$2(G__24748,G__24749) : pred__24745.call(null,G__24748,G__24749));
})())){
return (new reitit.core.Match(G__24738,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24750 = cljs.core.cst$kw$data;
var G__24751 = expr__24746;
return (pred__24745.cljs$core$IFn$_invoke$arity$2 ? pred__24745.cljs$core$IFn$_invoke$arity$2(G__24750,G__24751) : pred__24745.call(null,G__24750,G__24751));
})())){
return (new reitit.core.Match(self__.template,G__24738,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24752 = cljs.core.cst$kw$result;
var G__24753 = expr__24746;
return (pred__24745.cljs$core$IFn$_invoke$arity$2 ? pred__24745.cljs$core$IFn$_invoke$arity$2(G__24752,G__24753) : pred__24745.call(null,G__24752,G__24753));
})())){
return (new reitit.core.Match(self__.template,self__.data,G__24738,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24754 = cljs.core.cst$kw$path_DASH_params;
var G__24755 = expr__24746;
return (pred__24745.cljs$core$IFn$_invoke$arity$2 ? pred__24745.cljs$core$IFn$_invoke$arity$2(G__24754,G__24755) : pred__24745.call(null,G__24754,G__24755));
})())){
return (new reitit.core.Match(self__.template,self__.data,self__.result,G__24738,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24756 = cljs.core.cst$kw$path;
var G__24757 = expr__24746;
return (pred__24745.cljs$core$IFn$_invoke$arity$2 ? pred__24745.cljs$core$IFn$_invoke$arity$2(G__24756,G__24757) : pred__24745.call(null,G__24756,G__24757));
})())){
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,G__24738,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__24738),null));
}
}
}
}
}
});

reitit.core.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$template,self__.template,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$data,self__.data,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$result,self__.result,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$path_DASH_params,self__.path_params,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$path,self__.path,null))], null),self__.__extmap));
});

reitit.core.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__24738){
var self__ = this;
var this__4202__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,G__24738,self__.__extmap,self__.__hash));
});

reitit.core.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

reitit.core.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$template,cljs.core.cst$sym$data,cljs.core.cst$sym$result,cljs.core.cst$sym$path_DASH_params,cljs.core.cst$sym$path], null);
});

reitit.core.Match.cljs$lang$type = true;

reitit.core.Match.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"reitit.core/Match",null,(1),null));
});

reitit.core.Match.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"reitit.core/Match");
});

/**
 * Positional factory function for reitit.core/Match.
 */
reitit.core.__GT_Match = (function reitit$core$__GT_Match(template,data,result,path_params,path){
return (new reitit.core.Match(template,data,result,path_params,path,null,null,null));
});

/**
 * Factory function for reitit.core/Match, taking a map of keywords to field values.
 */
reitit.core.map__GT_Match = (function reitit$core$map__GT_Match(G__24742){
var extmap__4236__auto__ = (function (){var G__24758 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24742,cljs.core.cst$kw$template,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,cljs.core.cst$kw$result,cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$path], 0));
if(cljs.core.record_QMARK_(G__24742)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24758);
} else {
return G__24758;
}
})();
return (new reitit.core.Match(cljs.core.cst$kw$template.cljs$core$IFn$_invoke$arity$1(G__24742),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__24742),cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(G__24742),cljs.core.cst$kw$path_DASH_params.cljs$core$IFn$_invoke$arity$1(G__24742),cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(G__24742),null,cljs.core.not_empty(extmap__4236__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.core.PartialMatch = (function (template,data,result,path_params,required,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.required = required;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k24761,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__24765 = k24761;
var G__24765__$1 = (((G__24765 instanceof cljs.core.Keyword))?G__24765.fqn:null);
switch (G__24765__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "required":
return self__.required;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24761,else__4206__auto__);

}
});

reitit.core.PartialMatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#reitit.core.PartialMatch{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$template,self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$result,self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$path_DASH_params,self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$required,self__.required],null))], null),self__.__extmap));
});

reitit.core.PartialMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24760){
var self__ = this;
var G__24760__$1 = this;
return (new cljs.core.RecordIter((0),G__24760__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$template,cljs.core.cst$kw$data,cljs.core.cst$kw$result,cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$required], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

reitit.core.PartialMatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

reitit.core.PartialMatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.core.PartialMatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

reitit.core.PartialMatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__24766 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (492095938 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__24766(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

reitit.core.PartialMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24762,other24763){
var self__ = this;
var this24762__$1 = this;
return ((!((other24763 == null))) && ((this24762__$1.constructor === other24763.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24762__$1.template,other24763.template)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24762__$1.data,other24763.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24762__$1.result,other24763.result)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24762__$1.path_params,other24763.path_params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24762__$1.required,other24763.required)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24762__$1.__extmap,other24763.__extmap)));
});

reitit.core.PartialMatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$template,null,cljs.core.cst$kw$result,null,cljs.core.cst$kw$path_DASH_params,null,cljs.core.cst$kw$required,null,cljs.core.cst$kw$data,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

reitit.core.PartialMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__24760){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__24767 = cljs.core.keyword_identical_QMARK_;
var expr__24768 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__24770 = cljs.core.cst$kw$template;
var G__24771 = expr__24768;
return (pred__24767.cljs$core$IFn$_invoke$arity$2 ? pred__24767.cljs$core$IFn$_invoke$arity$2(G__24770,G__24771) : pred__24767.call(null,G__24770,G__24771));
})())){
return (new reitit.core.PartialMatch(G__24760,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24772 = cljs.core.cst$kw$data;
var G__24773 = expr__24768;
return (pred__24767.cljs$core$IFn$_invoke$arity$2 ? pred__24767.cljs$core$IFn$_invoke$arity$2(G__24772,G__24773) : pred__24767.call(null,G__24772,G__24773));
})())){
return (new reitit.core.PartialMatch(self__.template,G__24760,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24774 = cljs.core.cst$kw$result;
var G__24775 = expr__24768;
return (pred__24767.cljs$core$IFn$_invoke$arity$2 ? pred__24767.cljs$core$IFn$_invoke$arity$2(G__24774,G__24775) : pred__24767.call(null,G__24774,G__24775));
})())){
return (new reitit.core.PartialMatch(self__.template,self__.data,G__24760,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24776 = cljs.core.cst$kw$path_DASH_params;
var G__24777 = expr__24768;
return (pred__24767.cljs$core$IFn$_invoke$arity$2 ? pred__24767.cljs$core$IFn$_invoke$arity$2(G__24776,G__24777) : pred__24767.call(null,G__24776,G__24777));
})())){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,G__24760,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24778 = cljs.core.cst$kw$required;
var G__24779 = expr__24768;
return (pred__24767.cljs$core$IFn$_invoke$arity$2 ? pred__24767.cljs$core$IFn$_invoke$arity$2(G__24778,G__24779) : pred__24767.call(null,G__24778,G__24779));
})())){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,G__24760,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__24760),null));
}
}
}
}
}
});

reitit.core.PartialMatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$template,self__.template,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$data,self__.data,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$result,self__.result,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$path_DASH_params,self__.path_params,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$required,self__.required,null))], null),self__.__extmap));
});

reitit.core.PartialMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__24760){
var self__ = this;
var this__4202__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,G__24760,self__.__extmap,self__.__hash));
});

reitit.core.PartialMatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

reitit.core.PartialMatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$template,cljs.core.cst$sym$data,cljs.core.cst$sym$result,cljs.core.cst$sym$path_DASH_params,cljs.core.cst$sym$required], null);
});

reitit.core.PartialMatch.cljs$lang$type = true;

reitit.core.PartialMatch.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"reitit.core/PartialMatch",null,(1),null));
});

reitit.core.PartialMatch.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"reitit.core/PartialMatch");
});

/**
 * Positional factory function for reitit.core/PartialMatch.
 */
reitit.core.__GT_PartialMatch = (function reitit$core$__GT_PartialMatch(template,data,result,path_params,required){
return (new reitit.core.PartialMatch(template,data,result,path_params,required,null,null,null));
});

/**
 * Factory function for reitit.core/PartialMatch, taking a map of keywords to field values.
 */
reitit.core.map__GT_PartialMatch = (function reitit$core$map__GT_PartialMatch(G__24764){
var extmap__4236__auto__ = (function (){var G__24780 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24764,cljs.core.cst$kw$template,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,cljs.core.cst$kw$result,cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$required], 0));
if(cljs.core.record_QMARK_(G__24764)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24780);
} else {
return G__24780;
}
})();
return (new reitit.core.PartialMatch(cljs.core.cst$kw$template.cljs$core$IFn$_invoke$arity$1(G__24764),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__24764),cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(G__24764),cljs.core.cst$kw$path_DASH_params.cljs$core$IFn$_invoke$arity$1(G__24764),cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(G__24764),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

reitit.core.partial_match_QMARK_ = (function reitit$core$partial_match_QMARK_(x){
return (x instanceof reitit.core.PartialMatch);
});
reitit.core.match_by_name_BANG_ = (function reitit$core$match_by_name_BANG_(var_args){
var G__24783 = arguments.length;
switch (G__24783) {
case 2:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3(this$,name,null);
});

reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
var temp__5718__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(this$,name,path_params);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
if(cljs.core.not(reitit.core.partial_match_QMARK_(match))){
return match;
} else {
return reitit.impl.throw_on_missing_path_params(cljs.core.cst$kw$template.cljs$core$IFn$_invoke$arity$1(match),cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(match),path_params);
}
} else {
return null;
}
});

reitit.core.match_by_name_BANG_.cljs$lang$maxFixedArity = 3;

reitit.core.match__GT_path = (function reitit$core$match__GT_path(var_args){
var G__24786 = arguments.length;
switch (G__24786) {
case 1:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (match){
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2(match,null);
});

reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (match,query_params){
var G__24787 = match;
var G__24787__$1 = (((G__24787 == null))?null:cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(G__24787));
if((G__24787__$1 == null)){
return null;
} else {
var G__24788 = G__24787__$1;
if(cljs.core.seq(query_params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24788),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.query_string(query_params))].join('');
} else {
return G__24788;
}
}
});

reitit.core.match__GT_path.cljs$lang$maxFixedArity = 2;

/**
 * Creates a linear-router from resolved routes and optional
 *   expanded options. See [[router]] for available options, plus the following:
 * 
 *   | key                          | description |
 *   | -----------------------------|-------------|
 *   | `:reitit.trie/trie-compiler` | Optional trie-compiler.
 *   | `:reitit.trie/parameters`    | Optional function to create empty map(-like) path parameters value from sequence of keys.
 */
reitit.core.linear_router = (function reitit$core$linear_router(var_args){
var G__24792 = arguments.length;
switch (G__24792) {
case 1:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var compiler = cljs.core.cst$kw$reitit$trie_SLASH_trie_DASH_compiler.cljs$core$IFn$_invoke$arity$2(opts,reitit.trie.compiler());
var names = reitit.impl.find_names(compiled_routes,opts);
var vec__24793 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (compiler,names){
return (function (p__24796,p__24797){
var vec__24798 = p__24796;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24798,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24798,(1),null);
var vec__24801 = p__24797;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24801,(0),null);
var map__24804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24801,(1),null);
var map__24804__$1 = ((((!((map__24804 == null)))?(((((map__24804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24804):map__24804);
var data = map__24804__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24804__$1,cljs.core.cst$kw$name);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24801,(2),null);
var map__24806 = reitit.impl.parse(p,opts);
var map__24806__$1 = ((((!((map__24806 == null)))?(((((map__24806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24806):map__24806);
var route = map__24806__$1;
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24806__$1,cljs.core.cst$kw$path_DASH_params);
var f = ((function (map__24806,map__24806__$1,route,path_params,vec__24798,pl,nl,vec__24801,p,map__24804,map__24804__$1,data,name,result,compiler,names){
return (function (p1__24790_SHARP_){
var temp__5718__auto__ = reitit.impl.path_for(route,p1__24790_SHARP_);
if(cljs.core.truth_(temp__5718__auto__)){
var path = temp__5718__auto__;
return reitit.core.__GT_Match(p,data,result,reitit.impl.url_decode_coll(p1__24790_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch(p,data,result,reitit.impl.url_decode_coll(p1__24790_SHARP_),path_params);
}
});})(map__24806,map__24806__$1,route,path_params,vec__24798,pl,nl,vec__24801,p,map__24804,map__24804__$1,data,name,result,compiler,names))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pl,reitit.trie.compile.cljs$core$IFn$_invoke$arity$1(reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(null,p,reitit.core.__GT_Match(p,data,result,null,null),opts))),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,f):nl)], null);
});})(compiler,names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24793,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24793,(1),null);
var lookup = reitit.impl.fast_map(nl);
var matcher = reitit.trie.linear_matcher(compiler,pl,true);
var match_by_path = reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(matcher,compiler);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core24808 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core24808 = (function (matcher,names,compiled_routes,vec__24793,routes,lookup,pl,nl,match_by_path,compiler,opts,meta24809){
this.matcher = matcher;
this.names = names;
this.compiled_routes = compiled_routes;
this.vec__24793 = vec__24793;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.nl = nl;
this.match_by_path = match_by_path;
this.compiler = compiler;
this.opts = opts;
this.meta24809 = meta24809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core24808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (compiler,names,vec__24793,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_24810,meta24809__$1){
var self__ = this;
var _24810__$1 = this;
return (new reitit.core.t_reitit$core24808(self__.matcher,self__.names,self__.compiled_routes,self__.vec__24793,self__.routes,self__.lookup,self__.pl,self__.nl,self__.match_by_path,self__.compiler,self__.opts,meta24809__$1));
});})(compiler,names,vec__24793,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core24808.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (compiler,names,vec__24793,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_24810){
var self__ = this;
var _24810__$1 = this;
return self__.meta24809;
});})(compiler,names,vec__24793,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core24808.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core24808.prototype.reitit$core$Router$router_name$arity$1 = ((function (compiler,names,vec__24793,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$linear_DASH_router;
});})(compiler,names,vec__24793,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core24808.prototype.reitit$core$Router$routes$arity$1 = ((function (compiler,names,vec__24793,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(compiler,names,vec__24793,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core24808.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (compiler,names,vec__24793,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(compiler,names,vec__24793,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core24808.prototype.reitit$core$Router$options$arity$1 = ((function (compiler,names,vec__24793,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(compiler,names,vec__24793,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core24808.prototype.reitit$core$Router$route_names$arity$1 = ((function (compiler,names,vec__24793,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(compiler,names,vec__24793,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core24808.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (compiler,names,vec__24793,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = (self__.match_by_path.cljs$core$IFn$_invoke$arity$1 ? self__.match_by_path.cljs$core$IFn$_invoke$arity$1(path) : self__.match_by_path.call(null,path));
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(match),cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(match)),cljs.core.cst$kw$path,path);
} else {
return null;
}
});})(compiler,names,vec__24793,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core24808.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (compiler,names,vec__24793,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
});})(compiler,names,vec__24793,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core24808.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (compiler,names,vec__24793,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
var G__24811 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__24811) : match.call(null,G__24811));
} else {
return null;
}
});})(compiler,names,vec__24793,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core24808.getBasis = ((function (compiler,names,vec__24793,pl,nl,lookup,matcher,match_by_path,routes){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$matcher,cljs.core.cst$sym$names,cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$vec__24793,cljs.core.cst$sym$routes,cljs.core.cst$sym$lookup,cljs.core.cst$sym$pl,cljs.core.cst$sym$nl,cljs.core.cst$sym$match_DASH_by_DASH_path,cljs.core.cst$sym$compiler,cljs.core.cst$sym$opts,cljs.core.cst$sym$meta24809], null);
});})(compiler,names,vec__24793,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core24808.cljs$lang$type = true;

reitit.core.t_reitit$core24808.cljs$lang$ctorStr = "reitit.core/t_reitit$core24808";

reitit.core.t_reitit$core24808.cljs$lang$ctorPrWriter = ((function (compiler,names,vec__24793,pl,nl,lookup,matcher,match_by_path,routes){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"reitit.core/t_reitit$core24808");
});})(compiler,names,vec__24793,pl,nl,lookup,matcher,match_by_path,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core24808.
 */
reitit.core.__GT_t_reitit$core24808 = ((function (compiler,names,vec__24793,pl,nl,lookup,matcher,match_by_path,routes){
return (function reitit$core$__GT_t_reitit$core24808(matcher__$1,names__$1,compiled_routes__$1,vec__24793__$1,routes__$1,lookup__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta24809){
return (new reitit.core.t_reitit$core24808(matcher__$1,names__$1,compiled_routes__$1,vec__24793__$1,routes__$1,lookup__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta24809));
});})(compiler,names,vec__24793,pl,nl,lookup,matcher,match_by_path,routes))
;

}

return (new reitit.core.t_reitit$core24808(matcher,names,compiled_routes,vec__24793,routes,lookup,pl,nl,match_by_path,compiler,opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
});

reitit.core.linear_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a lookup-router from resolved routes and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.lookup_router = (function reitit$core$lookup_router(var_args){
var G__24815 = arguments.length;
switch (G__24815) {
case 1:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var temp__5720__auto___24834 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(reitit.impl.__GT_wild_route_QMARK_(opts),compiled_routes));
if(temp__5720__auto___24834){
var wilds_24835 = temp__5720__auto___24834;
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(["can't create :lookup-router with wildcard routes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wilds_24835)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$wilds,wilds_24835,cljs.core.cst$kw$routes,compiled_routes], null));
} else {
}

var names = reitit.impl.find_names(compiled_routes,opts);
var vec__24816 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (names){
return (function (p__24819,p__24820){
var vec__24821 = p__24819;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24821,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24821,(1),null);
var vec__24824 = p__24820;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24824,(0),null);
var map__24827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24824,(1),null);
var map__24827__$1 = ((((!((map__24827 == null)))?(((((map__24827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24827):map__24827);
var data = map__24827__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24827__$1,cljs.core.cst$kw$name);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24824,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pl,p,reitit.core.__GT_Match(p,data,result,cljs.core.PersistentArrayMap.EMPTY,p)),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,((function (vec__24821,pl,nl,vec__24824,p,map__24827,map__24827__$1,data,name,result,names){
return (function (p1__24813_SHARP_){
return reitit.core.__GT_Match(p,data,result,p1__24813_SHARP_,p);
});})(vec__24821,pl,nl,vec__24824,p,map__24827,map__24827__$1,data,name,result,names))
):nl)], null);
});})(names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24816,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24816,(1),null);
var data = reitit.impl.fast_map(pl);
var lookup = reitit.impl.fast_map(nl);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core24829 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core24829 = (function (vec__24816,names,data,compiled_routes,routes,lookup,pl,nl,opts,meta24830){
this.vec__24816 = vec__24816;
this.names = names;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.nl = nl;
this.opts = opts;
this.meta24830 = meta24830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core24829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (names,vec__24816,pl,nl,data,lookup,routes){
return (function (_24831,meta24830__$1){
var self__ = this;
var _24831__$1 = this;
return (new reitit.core.t_reitit$core24829(self__.vec__24816,self__.names,self__.data,self__.compiled_routes,self__.routes,self__.lookup,self__.pl,self__.nl,self__.opts,meta24830__$1));
});})(names,vec__24816,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core24829.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (names,vec__24816,pl,nl,data,lookup,routes){
return (function (_24831){
var self__ = this;
var _24831__$1 = this;
return self__.meta24830;
});})(names,vec__24816,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core24829.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core24829.prototype.reitit$core$Router$router_name$arity$1 = ((function (names,vec__24816,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$lookup_DASH_router;
});})(names,vec__24816,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core24829.prototype.reitit$core$Router$routes$arity$1 = ((function (names,vec__24816,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(names,vec__24816,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core24829.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (names,vec__24816,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(names,vec__24816,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core24829.prototype.reitit$core$Router$options$arity$1 = ((function (names,vec__24816,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(names,vec__24816,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core24829.prototype.reitit$core$Router$route_names$arity$1 = ((function (names,vec__24816,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(names,vec__24816,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core24829.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (names,vec__24816,pl,nl,data,lookup,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
return reitit.impl.fast_get(self__.data,path);
});})(names,vec__24816,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core24829.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (names,vec__24816,pl,nl,data,lookup,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
});})(names,vec__24816,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core24829.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (names,vec__24816,pl,nl,data,lookup,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
var G__24832 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__24832) : match.call(null,G__24832));
} else {
return null;
}
});})(names,vec__24816,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core24829.getBasis = ((function (names,vec__24816,pl,nl,data,lookup,routes){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$vec__24816,cljs.core.cst$sym$names,cljs.core.cst$sym$data,cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$routes,cljs.core.cst$sym$lookup,cljs.core.cst$sym$pl,cljs.core.cst$sym$nl,cljs.core.cst$sym$opts,cljs.core.cst$sym$meta24830], null);
});})(names,vec__24816,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core24829.cljs$lang$type = true;

reitit.core.t_reitit$core24829.cljs$lang$ctorStr = "reitit.core/t_reitit$core24829";

reitit.core.t_reitit$core24829.cljs$lang$ctorPrWriter = ((function (names,vec__24816,pl,nl,data,lookup,routes){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"reitit.core/t_reitit$core24829");
});})(names,vec__24816,pl,nl,data,lookup,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core24829.
 */
reitit.core.__GT_t_reitit$core24829 = ((function (names,vec__24816,pl,nl,data,lookup,routes){
return (function reitit$core$__GT_t_reitit$core24829(vec__24816__$1,names__$1,data__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,opts__$1,meta24830){
return (new reitit.core.t_reitit$core24829(vec__24816__$1,names__$1,data__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,opts__$1,meta24830));
});})(names,vec__24816,pl,nl,data,lookup,routes))
;

}

return (new reitit.core.t_reitit$core24829(vec__24816,names,data,compiled_routes,routes,lookup,pl,nl,opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
});

reitit.core.lookup_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a special prefix-tree router from resolved routes and optional
 *   expanded options. See [[router]] for available options, plus the following:
 * 
 *   | key                          | description |
 *   | -----------------------------|-------------|
 *   | `:reitit.trie/trie-compiler` | Optional trie-compiler.
 *   | `:reitit.trie/parameters`    | Optional function to create empty map(-like) path parameters value from sequence of keys.
 */
reitit.core.trie_router = (function reitit$core$trie_router(var_args){
var G__24838 = arguments.length;
switch (G__24838) {
case 1:
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.trie_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var compiler = cljs.core.cst$kw$reitit$trie_SLASH_trie_DASH_compiler.cljs$core$IFn$_invoke$arity$2(opts,reitit.trie.compiler());
var names = reitit.impl.find_names(compiled_routes,opts);
var vec__24839 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (compiler,names){
return (function (p__24842,p__24843){
var vec__24844 = p__24842;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24844,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24844,(1),null);
var vec__24847 = p__24843;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24847,(0),null);
var map__24850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24847,(1),null);
var map__24850__$1 = ((((!((map__24850 == null)))?(((((map__24850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24850):map__24850);
var data = map__24850__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24850__$1,cljs.core.cst$kw$name);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24847,(2),null);
var map__24852 = reitit.impl.parse(p,opts);
var map__24852__$1 = ((((!((map__24852 == null)))?(((((map__24852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24852):map__24852);
var route = map__24852__$1;
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24852__$1,cljs.core.cst$kw$path_DASH_params);
var f = ((function (map__24852,map__24852__$1,route,path_params,vec__24844,pl,nl,vec__24847,p,map__24850,map__24850__$1,data,name,result,compiler,names){
return (function (p1__24836_SHARP_){
var temp__5718__auto__ = reitit.impl.path_for(route,p1__24836_SHARP_);
if(cljs.core.truth_(temp__5718__auto__)){
var path = temp__5718__auto__;
return reitit.core.__GT_Match(p,data,result,reitit.impl.url_decode_coll(p1__24836_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch(p,data,result,reitit.impl.url_decode_coll(p1__24836_SHARP_),path_params);
}
});})(map__24852,map__24852__$1,route,path_params,vec__24844,pl,nl,vec__24847,p,map__24850,map__24850__$1,data,name,result,compiler,names))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(pl,p,reitit.core.__GT_Match(p,data,result,null,null),opts),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,f):nl)], null);
});})(compiler,names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24839,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24839,(1),null);
var matcher = reitit.trie.compile.cljs$core$IFn$_invoke$arity$2(pl,compiler);
var match_by_path = reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(matcher,compiler);
var lookup = reitit.impl.fast_map(nl);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core24854 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core24854 = (function (vec__24839,matcher,names,compiled_routes,routes,lookup,pl,nl,match_by_path,compiler,opts,meta24855){
this.vec__24839 = vec__24839;
this.matcher = matcher;
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.nl = nl;
this.match_by_path = match_by_path;
this.compiler = compiler;
this.opts = opts;
this.meta24855 = meta24855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core24854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (compiler,names,vec__24839,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_24856,meta24855__$1){
var self__ = this;
var _24856__$1 = this;
return (new reitit.core.t_reitit$core24854(self__.vec__24839,self__.matcher,self__.names,self__.compiled_routes,self__.routes,self__.lookup,self__.pl,self__.nl,self__.match_by_path,self__.compiler,self__.opts,meta24855__$1));
});})(compiler,names,vec__24839,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core24854.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (compiler,names,vec__24839,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_24856){
var self__ = this;
var _24856__$1 = this;
return self__.meta24855;
});})(compiler,names,vec__24839,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core24854.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core24854.prototype.reitit$core$Router$router_name$arity$1 = ((function (compiler,names,vec__24839,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$trie_DASH_router;
});})(compiler,names,vec__24839,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core24854.prototype.reitit$core$Router$routes$arity$1 = ((function (compiler,names,vec__24839,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(compiler,names,vec__24839,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core24854.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (compiler,names,vec__24839,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(compiler,names,vec__24839,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core24854.prototype.reitit$core$Router$options$arity$1 = ((function (compiler,names,vec__24839,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(compiler,names,vec__24839,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core24854.prototype.reitit$core$Router$route_names$arity$1 = ((function (compiler,names,vec__24839,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(compiler,names,vec__24839,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core24854.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (compiler,names,vec__24839,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = (self__.match_by_path.cljs$core$IFn$_invoke$arity$1 ? self__.match_by_path.cljs$core$IFn$_invoke$arity$1(path) : self__.match_by_path.call(null,path));
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(match),cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(match)),cljs.core.cst$kw$path,path);
} else {
return null;
}
});})(compiler,names,vec__24839,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core24854.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (compiler,names,vec__24839,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
});})(compiler,names,vec__24839,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core24854.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (compiler,names,vec__24839,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
var G__24857 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__24857) : match.call(null,G__24857));
} else {
return null;
}
});})(compiler,names,vec__24839,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core24854.getBasis = ((function (compiler,names,vec__24839,pl,nl,matcher,match_by_path,lookup,routes){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$vec__24839,cljs.core.cst$sym$matcher,cljs.core.cst$sym$names,cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$routes,cljs.core.cst$sym$lookup,cljs.core.cst$sym$pl,cljs.core.cst$sym$nl,cljs.core.cst$sym$match_DASH_by_DASH_path,cljs.core.cst$sym$compiler,cljs.core.cst$sym$opts,cljs.core.cst$sym$meta24855], null);
});})(compiler,names,vec__24839,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core24854.cljs$lang$type = true;

reitit.core.t_reitit$core24854.cljs$lang$ctorStr = "reitit.core/t_reitit$core24854";

reitit.core.t_reitit$core24854.cljs$lang$ctorPrWriter = ((function (compiler,names,vec__24839,pl,nl,matcher,match_by_path,lookup,routes){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"reitit.core/t_reitit$core24854");
});})(compiler,names,vec__24839,pl,nl,matcher,match_by_path,lookup,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core24854.
 */
reitit.core.__GT_t_reitit$core24854 = ((function (compiler,names,vec__24839,pl,nl,matcher,match_by_path,lookup,routes){
return (function reitit$core$__GT_t_reitit$core24854(vec__24839__$1,matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta24855){
return (new reitit.core.t_reitit$core24854(vec__24839__$1,matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,meta24855));
});})(compiler,names,vec__24839,pl,nl,matcher,match_by_path,lookup,routes))
;

}

return (new reitit.core.t_reitit$core24854(vec__24839,matcher,names,compiled_routes,routes,lookup,pl,nl,match_by_path,compiler,opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
});

reitit.core.trie_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a fast router of 1 static route(s) and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.single_static_path_router = (function reitit$core$single_static_path_router(var_args){
var G__24860 = arguments.length;
switch (G__24860) {
case 1:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
if(cljs.core.truth_((function (){var or__3949__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(compiled_routes),(1));
if(or__3949__auto__){
return or__3949__auto__;
} else {
return cljs.core.some(reitit.impl.__GT_wild_route_QMARK_(opts),compiled_routes);
}
})())){
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2([":single-static-path-router requires exactly 1 static route: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(compiled_routes)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$routes,compiled_routes], null));
} else {
}

var vec__24861 = reitit.impl.find_names(compiled_routes,opts);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24861,(0),null);
var names = vec__24861;
var vec__24864 = compiled_routes;
var vec__24867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24864,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24867,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24867,(1),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24867,(2),null);
var p__$1 = p;
var match = reitit.core.__GT_Match(p__$1,data,result,cljs.core.PersistentArrayMap.EMPTY,p__$1);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core24870 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core24870 = (function (p,names,match,data,compiled_routes,vec__24867,routes,n,vec__24861,result,opts,vec__24864,meta24871){
this.p = p;
this.names = names;
this.match = match;
this.data = data;
this.compiled_routes = compiled_routes;
this.vec__24867 = vec__24867;
this.routes = routes;
this.n = n;
this.vec__24861 = vec__24861;
this.result = result;
this.opts = opts;
this.vec__24864 = vec__24864;
this.meta24871 = meta24871;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core24870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__24861,n,names,vec__24864,vec__24867,p,data,result,p__$1,match,routes){
return (function (_24872,meta24871__$1){
var self__ = this;
var _24872__$1 = this;
return (new reitit.core.t_reitit$core24870(self__.p,self__.names,self__.match,self__.data,self__.compiled_routes,self__.vec__24867,self__.routes,self__.n,self__.vec__24861,self__.result,self__.opts,self__.vec__24864,meta24871__$1));
});})(vec__24861,n,names,vec__24864,vec__24867,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core24870.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__24861,n,names,vec__24864,vec__24867,p,data,result,p__$1,match,routes){
return (function (_24872){
var self__ = this;
var _24872__$1 = this;
return self__.meta24871;
});})(vec__24861,n,names,vec__24864,vec__24867,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core24870.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core24870.prototype.reitit$core$Router$router_name$arity$1 = ((function (vec__24861,n,names,vec__24864,vec__24867,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$single_DASH_static_DASH_path_DASH_router;
});})(vec__24861,n,names,vec__24864,vec__24867,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core24870.prototype.reitit$core$Router$routes$arity$1 = ((function (vec__24861,n,names,vec__24864,vec__24867,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(vec__24861,n,names,vec__24864,vec__24867,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core24870.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (vec__24861,n,names,vec__24864,vec__24867,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(vec__24861,n,names,vec__24864,vec__24867,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core24870.prototype.reitit$core$Router$options$arity$1 = ((function (vec__24861,n,names,vec__24864,vec__24867,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(vec__24861,n,names,vec__24864,vec__24867,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core24870.prototype.reitit$core$Router$route_names$arity$1 = ((function (vec__24861,n,names,vec__24864,vec__24867,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(vec__24861,n,names,vec__24864,vec__24867,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core24870.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (vec__24861,n,names,vec__24864,vec__24867,p,data,result,p__$1,match,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p,path)){
return self__.match;
} else {
return null;
}
});})(vec__24861,n,names,vec__24864,vec__24867,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core24870.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (vec__24861,n,names,vec__24864,vec__24867,p,data,result,p__$1,match,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.n,name)){
return self__.match;
} else {
return null;
}
});})(vec__24861,n,names,vec__24864,vec__24867,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core24870.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (vec__24861,n,names,vec__24864,vec__24867,p,data,result,p__$1,match,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.n,name)){
return reitit.impl.fast_assoc(self__.match,cljs.core.cst$kw$path_DASH_params,reitit.impl.path_params(path_params));
} else {
return null;
}
});})(vec__24861,n,names,vec__24864,vec__24867,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core24870.getBasis = ((function (vec__24861,n,names,vec__24864,vec__24867,p,data,result,p__$1,match,routes){
return (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$names,cljs.core.cst$sym$match,cljs.core.cst$sym$data,cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$vec__24867,cljs.core.cst$sym$routes,cljs.core.cst$sym$n,cljs.core.cst$sym$vec__24861,cljs.core.cst$sym$result,cljs.core.cst$sym$opts,cljs.core.cst$sym$vec__24864,cljs.core.cst$sym$meta24871], null);
});})(vec__24861,n,names,vec__24864,vec__24867,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core24870.cljs$lang$type = true;

reitit.core.t_reitit$core24870.cljs$lang$ctorStr = "reitit.core/t_reitit$core24870";

reitit.core.t_reitit$core24870.cljs$lang$ctorPrWriter = ((function (vec__24861,n,names,vec__24864,vec__24867,p,data,result,p__$1,match,routes){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"reitit.core/t_reitit$core24870");
});})(vec__24861,n,names,vec__24864,vec__24867,p,data,result,p__$1,match,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core24870.
 */
reitit.core.__GT_t_reitit$core24870 = ((function (vec__24861,n,names,vec__24864,vec__24867,p,data,result,p__$1,match,routes){
return (function reitit$core$__GT_t_reitit$core24870(p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,vec__24867__$1,routes__$1,n__$1,vec__24861__$1,result__$1,opts__$1,vec__24864__$1,meta24871){
return (new reitit.core.t_reitit$core24870(p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,vec__24867__$1,routes__$1,n__$1,vec__24861__$1,result__$1,opts__$1,vec__24864__$1,meta24871));
});})(vec__24861,n,names,vec__24864,vec__24867,p,data,result,p__$1,match,routes))
;

}

return (new reitit.core.t_reitit$core24870(p__$1,names,match,data,compiled_routes,vec__24867,routes,n,vec__24861,result,opts,vec__24864,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
});

reitit.core.single_static_path_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates two routers: [[lookup-router]] or [[single-static-path-router]] for
 *   static routes and [[segment-router]] for wildcard routes. All
 *   routes should be non-conflicting. Takes resolved routes and optional
 *   expanded options. See [[router]] for options.
 */
reitit.core.mixed_router = (function reitit$core$mixed_router(var_args){
var G__24875 = arguments.length;
switch (G__24875) {
case 1:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var map__24876 = cljs.core.group_by(reitit.impl.__GT_wild_route_QMARK_(opts),compiled_routes);
var map__24876__$1 = ((((!((map__24876 == null)))?(((((map__24876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24876):map__24876);
var wild = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24876__$1,true);
var lookup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24876__$1,false);
var __GT_static_router = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(lookup)))?reitit.core.single_static_path_router:reitit.core.lookup_router);
var wildcard_router = reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2(wild,opts);
var static_router = (__GT_static_router.cljs$core$IFn$_invoke$arity$2 ? __GT_static_router.cljs$core$IFn$_invoke$arity$2(lookup,opts) : __GT_static_router.call(null,lookup,opts));
var names = reitit.impl.find_names(compiled_routes,opts);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core24878 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core24878 = (function (names,compiled_routes,routes,__GT_static_router,lookup,map__24876,wild,static_router,opts,wildcard_router,meta24879){
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.__GT_static_router = __GT_static_router;
this.lookup = lookup;
this.map__24876 = map__24876;
this.wild = wild;
this.static_router = static_router;
this.opts = opts;
this.wildcard_router = wildcard_router;
this.meta24879 = meta24879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core24878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24876,map__24876__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_24880,meta24879__$1){
var self__ = this;
var _24880__$1 = this;
return (new reitit.core.t_reitit$core24878(self__.names,self__.compiled_routes,self__.routes,self__.__GT_static_router,self__.lookup,self__.map__24876,self__.wild,self__.static_router,self__.opts,self__.wildcard_router,meta24879__$1));
});})(map__24876,map__24876__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core24878.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24876,map__24876__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_24880){
var self__ = this;
var _24880__$1 = this;
return self__.meta24879;
});})(map__24876,map__24876__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core24878.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core24878.prototype.reitit$core$Router$router_name$arity$1 = ((function (map__24876,map__24876__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$mixed_DASH_router;
});})(map__24876,map__24876__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core24878.prototype.reitit$core$Router$routes$arity$1 = ((function (map__24876,map__24876__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(map__24876,map__24876__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core24878.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (map__24876,map__24876__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(map__24876,map__24876__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core24878.prototype.reitit$core$Router$options$arity$1 = ((function (map__24876,map__24876__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(map__24876,map__24876__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core24878.prototype.reitit$core$Router$route_names$arity$1 = ((function (map__24876,map__24876__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(map__24876,map__24876__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core24878.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (map__24876,map__24876__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
var or__3949__auto__ = reitit.core.match_by_path(self__.static_router,path);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return reitit.core.match_by_path(self__.wildcard_router,path);
}
});})(map__24876,map__24876__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core24878.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (map__24876,map__24876__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var or__3949__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.static_router,name);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.wildcard_router,name);
}
});})(map__24876,map__24876__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core24878.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (map__24876,map__24876__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__3949__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.static_router,name,path_params);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.wildcard_router,name,path_params);
}
});})(map__24876,map__24876__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core24878.getBasis = ((function (map__24876,map__24876__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$names,cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$routes,cljs.core.cst$sym$_DASH__GT_static_DASH_router,cljs.core.cst$sym$lookup,cljs.core.cst$sym$map__24876,cljs.core.cst$sym$wild,cljs.core.cst$sym$static_DASH_router,cljs.core.cst$sym$opts,cljs.core.cst$sym$wildcard_DASH_router,cljs.core.cst$sym$meta24879], null);
});})(map__24876,map__24876__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core24878.cljs$lang$type = true;

reitit.core.t_reitit$core24878.cljs$lang$ctorStr = "reitit.core/t_reitit$core24878";

reitit.core.t_reitit$core24878.cljs$lang$ctorPrWriter = ((function (map__24876,map__24876__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"reitit.core/t_reitit$core24878");
});})(map__24876,map__24876__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core24878.
 */
reitit.core.__GT_t_reitit$core24878 = ((function (map__24876,map__24876__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function reitit$core$__GT_t_reitit$core24878(names__$1,compiled_routes__$1,routes__$1,__GT_static_router__$1,lookup__$1,map__24876__$2,wild__$1,static_router__$1,opts__$1,wildcard_router__$1,meta24879){
return (new reitit.core.t_reitit$core24878(names__$1,compiled_routes__$1,routes__$1,__GT_static_router__$1,lookup__$1,map__24876__$2,wild__$1,static_router__$1,opts__$1,wildcard_router__$1,meta24879));
});})(map__24876,map__24876__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

}

return (new reitit.core.t_reitit$core24878(names,compiled_routes,routes,__GT_static_router,lookup,map__24876__$1,wild,static_router,opts,wildcard_router,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
});

reitit.core.mixed_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates two routers: [[mixed-router]] for non-conflicting routes
 *   and [[linear-router]] for conflicting routes. Takes resolved routes
 *   and optional expanded options. See [[router]] for options.
 */
reitit.core.quarantine_router = (function reitit$core$quarantine_router(var_args){
var G__24884 = arguments.length;
switch (G__24884) {
case 1:
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var conflicting_paths = reitit.impl.conflicting_paths(reitit.impl.path_conflicting_routes(compiled_routes,opts));
var conflicting_QMARK_ = ((function (conflicting_paths){
return (function (p1__24882_SHARP_){
return cljs.core.contains_QMARK_(conflicting_paths,cljs.core.first(p1__24882_SHARP_));
});})(conflicting_paths))
;
var map__24885 = cljs.core.group_by(conflicting_QMARK_,compiled_routes);
var map__24885__$1 = ((((!((map__24885 == null)))?(((((map__24885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24885):map__24885);
var conflicting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24885__$1,true);
var non_conflicting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24885__$1,false);
var linear_router = reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2(conflicting,opts);
var mixed_router = reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2(non_conflicting,opts);
var names = reitit.impl.find_names(compiled_routes,opts);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core24887 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core24887 = (function (non_conflicting,names,conflicting_paths,compiled_routes,conflicting,routes,conflicting_QMARK_,map__24885,mixed_router,linear_router,opts,meta24888){
this.non_conflicting = non_conflicting;
this.names = names;
this.conflicting_paths = conflicting_paths;
this.compiled_routes = compiled_routes;
this.conflicting = conflicting;
this.routes = routes;
this.conflicting_QMARK_ = conflicting_QMARK_;
this.map__24885 = map__24885;
this.mixed_router = mixed_router;
this.linear_router = linear_router;
this.opts = opts;
this.meta24888 = meta24888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core24887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conflicting_paths,conflicting_QMARK_,map__24885,map__24885__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_24889,meta24888__$1){
var self__ = this;
var _24889__$1 = this;
return (new reitit.core.t_reitit$core24887(self__.non_conflicting,self__.names,self__.conflicting_paths,self__.compiled_routes,self__.conflicting,self__.routes,self__.conflicting_QMARK_,self__.map__24885,self__.mixed_router,self__.linear_router,self__.opts,meta24888__$1));
});})(conflicting_paths,conflicting_QMARK_,map__24885,map__24885__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core24887.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__24885,map__24885__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_24889){
var self__ = this;
var _24889__$1 = this;
return self__.meta24888;
});})(conflicting_paths,conflicting_QMARK_,map__24885,map__24885__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core24887.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core24887.prototype.reitit$core$Router$router_name$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__24885,map__24885__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$quarantine_DASH_router;
});})(conflicting_paths,conflicting_QMARK_,map__24885,map__24885__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core24887.prototype.reitit$core$Router$routes$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__24885,map__24885__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(conflicting_paths,conflicting_QMARK_,map__24885,map__24885__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core24887.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__24885,map__24885__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(conflicting_paths,conflicting_QMARK_,map__24885,map__24885__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core24887.prototype.reitit$core$Router$options$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__24885,map__24885__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(conflicting_paths,conflicting_QMARK_,map__24885,map__24885__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core24887.prototype.reitit$core$Router$route_names$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__24885,map__24885__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(conflicting_paths,conflicting_QMARK_,map__24885,map__24885__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core24887.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (conflicting_paths,conflicting_QMARK_,map__24885,map__24885__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
var or__3949__auto__ = reitit.core.match_by_path(self__.mixed_router,path);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return reitit.core.match_by_path(self__.linear_router,path);
}
});})(conflicting_paths,conflicting_QMARK_,map__24885,map__24885__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core24887.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (conflicting_paths,conflicting_QMARK_,map__24885,map__24885__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var or__3949__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.mixed_router,name);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.linear_router,name);
}
});})(conflicting_paths,conflicting_QMARK_,map__24885,map__24885__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core24887.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (conflicting_paths,conflicting_QMARK_,map__24885,map__24885__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__3949__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.mixed_router,name,path_params);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.linear_router,name,path_params);
}
});})(conflicting_paths,conflicting_QMARK_,map__24885,map__24885__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core24887.getBasis = ((function (conflicting_paths,conflicting_QMARK_,map__24885,map__24885__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$non_DASH_conflicting,cljs.core.cst$sym$names,cljs.core.cst$sym$conflicting_DASH_paths,cljs.core.cst$sym$compiled_DASH_routes,cljs.core.cst$sym$conflicting,cljs.core.cst$sym$routes,cljs.core.cst$sym$conflicting_QMARK_,cljs.core.cst$sym$map__24885,cljs.core.cst$sym$mixed_DASH_router,cljs.core.cst$sym$linear_DASH_router,cljs.core.cst$sym$opts,cljs.core.cst$sym$meta24888], null);
});})(conflicting_paths,conflicting_QMARK_,map__24885,map__24885__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core24887.cljs$lang$type = true;

reitit.core.t_reitit$core24887.cljs$lang$ctorStr = "reitit.core/t_reitit$core24887";

reitit.core.t_reitit$core24887.cljs$lang$ctorPrWriter = ((function (conflicting_paths,conflicting_QMARK_,map__24885,map__24885__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"reitit.core/t_reitit$core24887");
});})(conflicting_paths,conflicting_QMARK_,map__24885,map__24885__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core24887.
 */
reitit.core.__GT_t_reitit$core24887 = ((function (conflicting_paths,conflicting_QMARK_,map__24885,map__24885__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function reitit$core$__GT_t_reitit$core24887(non_conflicting__$1,names__$1,conflicting_paths__$1,compiled_routes__$1,conflicting__$1,routes__$1,conflicting_QMARK___$1,map__24885__$2,mixed_router__$1,linear_router__$1,opts__$1,meta24888){
return (new reitit.core.t_reitit$core24887(non_conflicting__$1,names__$1,conflicting_paths__$1,compiled_routes__$1,conflicting__$1,routes__$1,conflicting_QMARK___$1,map__24885__$2,mixed_router__$1,linear_router__$1,opts__$1,meta24888));
});})(conflicting_paths,conflicting_QMARK_,map__24885,map__24885__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

}

return (new reitit.core.t_reitit$core24887(non_conflicting,names,conflicting_paths,compiled_routes,conflicting,routes,conflicting_QMARK_,map__24885__$1,mixed_router,linear_router,opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$core_SLASH_router], null)));
});

reitit.core.quarantine_router.cljs$lang$maxFixedArity = 2;

reitit.core.default_router_options = (function reitit$core$default_router_options(){
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$lookup,(function reitit$core$default_router_options_$_lookup(p__24891,_){
var vec__24892 = p__24891;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24892,(0),null);
var map__24895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24892,(1),null);
var map__24895__$1 = ((((!((map__24895 == null)))?(((((map__24895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24895):map__24895);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24895__$1,cljs.core.cst$kw$name);
if(cljs.core.truth_(name)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([name]);
} else {
return null;
}
}),cljs.core.cst$kw$expand,reitit.core.expand,cljs.core.cst$kw$coerce,(function reitit$core$default_router_options_$_coerce(route,_){
return route;
}),cljs.core.cst$kw$compile,(function reitit$core$default_router_options_$_compile(p__24897,_){
var vec__24898 = p__24897;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24898,(0),null);
var map__24901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24898,(1),null);
var map__24901__$1 = ((((!((map__24901 == null)))?(((((map__24901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24901):map__24901);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24901__$1,cljs.core.cst$kw$handler);
return handler;
}),cljs.core.cst$kw$exception,reitit.exception.exception,cljs.core.cst$kw$conflicts,(function reitit$core$default_router_options_$_throw_BANG_(conflicts){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$path_DASH_conflicts,conflicts);
})], null);
});
/**
 * Create a [[Router]] from raw route data and optionally an options map.
 *   Selects implementation based on route details. The following options
 *   are available:
 * 
 *   | key          | description
 *   | -------------|-------------
 *   | `:path`      | Base-path for routes
 *   | `:routes`    | Initial resolved routes (default `[]`)
 *   | `:data`      | Initial route data (default `{}`)
 *   | `:spec`      | clojure.spec definition for a route data, see `reitit.spec` on how to use this
 *   | `:syntax`    | Path-parameter syntax as keyword or set of keywords (default #{:bracket :colon})
 *   | `:expand`    | Function of `arg opts => data` to expand route arg to route data (default `reitit.core/expand`)
 *   | `:coerce`    | Function of `route opts => route` to coerce resolved route, can throw or return `nil`
 *   | `:compile`   | Function of `route opts => result` to compile a route handler
 *   | `:validate`  | Function of `routes opts => ()` to validate route (data) via side-effects
 *   | `:conflicts` | Function of `{route #{route}} => ()` to handle conflicting routes
 *   | `:exception` | Function of `Exception => Exception ` to handle creation time exceptions (default `reitit.exception/exception`)
 *   | `:router`    | Function of `routes opts => router` to override the actual router implementation
 */
reitit.core.router = (function reitit$core$router(var_args){
var G__24904 = arguments.length;
switch (G__24904) {
case 1:
return reitit.core.router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.router.cljs$core$IFn$_invoke$arity$1 = (function (raw_routes){
return reitit.core.router.cljs$core$IFn$_invoke$arity$2(raw_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.router.cljs$core$IFn$_invoke$arity$2 = (function (raw_routes,opts){
var map__24905 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reitit.core.default_router_options(),opts], 0));
var map__24905__$1 = ((((!((map__24905 == null)))?(((((map__24905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24905):map__24905);
var opts__$1 = map__24905__$1;
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24905__$1,cljs.core.cst$kw$router);
try{var routes = reitit.impl.resolve_routes(raw_routes,opts__$1);
var path_conflicting = reitit.impl.path_conflicting_routes(routes,opts__$1);
var name_conflicting = reitit.impl.name_conflicting_routes(routes);
var compiled_routes = reitit.impl.compile_routes(routes,opts__$1);
var wilds_QMARK_ = cljs.core.boolean$(cljs.core.some(reitit.impl.__GT_wild_route_QMARK_(opts__$1),compiled_routes));
var all_wilds_QMARK_ = cljs.core.every_QMARK_(reitit.impl.__GT_wild_route_QMARK_(opts__$1),compiled_routes);
var router__$1 = (cljs.core.truth_(router)?router:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(compiled_routes))) && (!(wilds_QMARK_))))?reitit.core.single_static_path_router:(cljs.core.truth_(path_conflicting)?reitit.core.quarantine_router:((!(wilds_QMARK_))?reitit.core.lookup_router:((all_wilds_QMARK_)?reitit.core.trie_router:reitit.core.mixed_router
)))));
var temp__5720__auto___24910 = cljs.core.cst$kw$conflicts.cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5720__auto___24910)){
var conflicts_24911 = temp__5720__auto___24910;
var temp__5720__auto___24912__$1 = reitit.impl.unresolved_conflicts(path_conflicting);
if(cljs.core.truth_(temp__5720__auto___24912__$1)){
var conflict_report_24913 = temp__5720__auto___24912__$1;
(conflicts_24911.cljs$core$IFn$_invoke$arity$1 ? conflicts_24911.cljs$core$IFn$_invoke$arity$1(conflict_report_24913) : conflicts_24911.call(null,conflict_report_24913));
} else {
}
} else {
}

if(cljs.core.truth_(name_conflicting)){
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name_DASH_conflicts,name_conflicting);
} else {
}

var temp__5720__auto___24914 = cljs.core.cst$kw$validate.cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5720__auto___24914)){
var validate_24915 = temp__5720__auto___24914;
(validate_24915.cljs$core$IFn$_invoke$arity$2 ? validate_24915.cljs$core$IFn$_invoke$arity$2(compiled_routes,opts__$1) : validate_24915.call(null,compiled_routes,opts__$1));
} else {
}

return (router__$1.cljs$core$IFn$_invoke$arity$2 ? router__$1.cljs$core$IFn$_invoke$arity$2(compiled_routes,opts__$1) : router__$1.call(null,compiled_routes,opts__$1));
}catch (e24907){if((e24907 instanceof Error)){
var e = e24907;
throw (function (){var fexpr__24908 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts__$1,cljs.core.cst$kw$exception,cljs.core.identity);
return (fexpr__24908.cljs$core$IFn$_invoke$arity$1 ? fexpr__24908.cljs$core$IFn$_invoke$arity$1(e) : fexpr__24908.call(null,e));
})();
} else {
throw e24907;

}
}});

reitit.core.router.cljs$lang$maxFixedArity = 2;

