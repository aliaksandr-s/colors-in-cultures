// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('reitit.trie');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('reitit.exception');
reitit.trie.into_set = (function reitit$trie$into_set(x){
if(((cljs.core.set_QMARK_(x)) || (cljs.core.sequential_QMARK_(x)))){
return cljs.core.set(x);
} else {
if((x == null)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,x);

}
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
reitit.trie.Wild = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.trie.Wild.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

reitit.trie.Wild.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k15101,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__15105 = k15101;
var G__15105__$1 = (((G__15105 instanceof cljs.core.Keyword))?G__15105.fqn:null);
switch (G__15105__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15101,else__4206__auto__);

}
});

reitit.trie.Wild.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#reitit.trie.Wild{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null))], null),self__.__extmap));
});

reitit.trie.Wild.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15100){
var self__ = this;
var G__15100__$1 = this;
return (new cljs.core.RecordIter((0),G__15100__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

reitit.trie.Wild.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

reitit.trie.Wild.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new reitit.trie.Wild(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.trie.Wild.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

reitit.trie.Wild.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__15106 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1970880185 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__15106(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

reitit.trie.Wild.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15102,other15103){
var self__ = this;
var this15102__$1 = this;
return ((!((other15103 == null))) && ((this15102__$1.constructor === other15103.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15102__$1.value,other15103.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15102__$1.__extmap,other15103.__extmap)));
});

reitit.trie.Wild.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new reitit.trie.Wild(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

reitit.trie.Wild.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__15100){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__15107 = cljs.core.keyword_identical_QMARK_;
var expr__15108 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__15110 = cljs.core.cst$kw$value;
var G__15111 = expr__15108;
return (pred__15107.cljs$core$IFn$_invoke$arity$2 ? pred__15107.cljs$core$IFn$_invoke$arity$2(G__15110,G__15111) : pred__15107.call(null,G__15110,G__15111));
})())){
return (new reitit.trie.Wild(G__15100,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Wild(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__15100),null));
}
});

reitit.trie.Wild.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$value,self__.value,null))], null),self__.__extmap));
});

reitit.trie.Wild.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__15100){
var self__ = this;
var this__4202__auto____$1 = this;
return (new reitit.trie.Wild(self__.value,G__15100,self__.__extmap,self__.__hash));
});

reitit.trie.Wild.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

reitit.trie.Wild.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$value], null);
});

reitit.trie.Wild.cljs$lang$type = true;

reitit.trie.Wild.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"reitit.trie/Wild",null,(1),null));
});

reitit.trie.Wild.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"reitit.trie/Wild");
});

/**
 * Positional factory function for reitit.trie/Wild.
 */
reitit.trie.__GT_Wild = (function reitit$trie$__GT_Wild(value){
return (new reitit.trie.Wild(value,null,null,null));
});

/**
 * Factory function for reitit.trie/Wild, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Wild = (function reitit$trie$map__GT_Wild(G__15104){
var extmap__4236__auto__ = (function (){var G__15112 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__15104,cljs.core.cst$kw$value);
if(cljs.core.record_QMARK_(G__15104)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15112);
} else {
return G__15112;
}
})();
return (new reitit.trie.Wild(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__15104),null,cljs.core.not_empty(extmap__4236__auto__),null));
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
reitit.trie.CatchAll = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.trie.CatchAll.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

reitit.trie.CatchAll.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k15115,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__15119 = k15115;
var G__15119__$1 = (((G__15119 instanceof cljs.core.Keyword))?G__15119.fqn:null);
switch (G__15119__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15115,else__4206__auto__);

}
});

reitit.trie.CatchAll.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#reitit.trie.CatchAll{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null))], null),self__.__extmap));
});

reitit.trie.CatchAll.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15114){
var self__ = this;
var G__15114__$1 = this;
return (new cljs.core.RecordIter((0),G__15114__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

reitit.trie.CatchAll.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

reitit.trie.CatchAll.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new reitit.trie.CatchAll(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.trie.CatchAll.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

reitit.trie.CatchAll.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__15120 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-987265038 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__15120(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

reitit.trie.CatchAll.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15116,other15117){
var self__ = this;
var this15116__$1 = this;
return ((!((other15117 == null))) && ((this15116__$1.constructor === other15117.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15116__$1.value,other15117.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15116__$1.__extmap,other15117.__extmap)));
});

reitit.trie.CatchAll.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new reitit.trie.CatchAll(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

reitit.trie.CatchAll.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__15114){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__15121 = cljs.core.keyword_identical_QMARK_;
var expr__15122 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__15124 = cljs.core.cst$kw$value;
var G__15125 = expr__15122;
return (pred__15121.cljs$core$IFn$_invoke$arity$2 ? pred__15121.cljs$core$IFn$_invoke$arity$2(G__15124,G__15125) : pred__15121.call(null,G__15124,G__15125));
})())){
return (new reitit.trie.CatchAll(G__15114,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.CatchAll(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__15114),null));
}
});

reitit.trie.CatchAll.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$value,self__.value,null))], null),self__.__extmap));
});

reitit.trie.CatchAll.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__15114){
var self__ = this;
var this__4202__auto____$1 = this;
return (new reitit.trie.CatchAll(self__.value,G__15114,self__.__extmap,self__.__hash));
});

reitit.trie.CatchAll.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

reitit.trie.CatchAll.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$value], null);
});

reitit.trie.CatchAll.cljs$lang$type = true;

reitit.trie.CatchAll.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"reitit.trie/CatchAll",null,(1),null));
});

reitit.trie.CatchAll.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"reitit.trie/CatchAll");
});

/**
 * Positional factory function for reitit.trie/CatchAll.
 */
reitit.trie.__GT_CatchAll = (function reitit$trie$__GT_CatchAll(value){
return (new reitit.trie.CatchAll(value,null,null,null));
});

/**
 * Factory function for reitit.trie/CatchAll, taking a map of keywords to field values.
 */
reitit.trie.map__GT_CatchAll = (function reitit$trie$map__GT_CatchAll(G__15118){
var extmap__4236__auto__ = (function (){var G__15126 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__15118,cljs.core.cst$kw$value);
if(cljs.core.record_QMARK_(G__15118)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15126);
} else {
return G__15126;
}
})();
return (new reitit.trie.CatchAll(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__15118),null,cljs.core.not_empty(extmap__4236__auto__),null));
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
reitit.trie.Match = (function (params,data,__meta,__extmap,__hash){
this.params = params;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.trie.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

reitit.trie.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k15129,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__15133 = k15129;
var G__15133__$1 = (((G__15133 instanceof cljs.core.Keyword))?G__15133.fqn:null);
switch (G__15133__$1) {
case "params":
return self__.params;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15129,else__4206__auto__);

}
});

reitit.trie.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#reitit.trie.Match{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null))], null),self__.__extmap));
});

reitit.trie.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15128){
var self__ = this;
var G__15128__$1 = this;
return (new cljs.core.RecordIter((0),G__15128__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$data], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

reitit.trie.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

reitit.trie.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.trie.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

reitit.trie.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__15134 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1117628764 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__15134(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

reitit.trie.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15130,other15131){
var self__ = this;
var this15130__$1 = this;
return ((!((other15131 == null))) && ((this15130__$1.constructor === other15131.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15130__$1.params,other15131.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15130__$1.data,other15131.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15130__$1.__extmap,other15131.__extmap)));
});

reitit.trie.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params,null,cljs.core.cst$kw$data,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

reitit.trie.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__15128){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__15135 = cljs.core.keyword_identical_QMARK_;
var expr__15136 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__15138 = cljs.core.cst$kw$params;
var G__15139 = expr__15136;
return (pred__15135.cljs$core$IFn$_invoke$arity$2 ? pred__15135.cljs$core$IFn$_invoke$arity$2(G__15138,G__15139) : pred__15135.call(null,G__15138,G__15139));
})())){
return (new reitit.trie.Match(G__15128,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15140 = cljs.core.cst$kw$data;
var G__15141 = expr__15136;
return (pred__15135.cljs$core$IFn$_invoke$arity$2 ? pred__15135.cljs$core$IFn$_invoke$arity$2(G__15140,G__15141) : pred__15135.call(null,G__15140,G__15141));
})())){
return (new reitit.trie.Match(self__.params,G__15128,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__15128),null));
}
}
});

reitit.trie.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$params,self__.params,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$data,self__.data,null))], null),self__.__extmap));
});

reitit.trie.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__15128){
var self__ = this;
var this__4202__auto____$1 = this;
return (new reitit.trie.Match(self__.params,self__.data,G__15128,self__.__extmap,self__.__hash));
});

reitit.trie.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

reitit.trie.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$params,cljs.core.cst$sym$data], null);
});

reitit.trie.Match.cljs$lang$type = true;

reitit.trie.Match.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"reitit.trie/Match",null,(1),null));
});

reitit.trie.Match.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"reitit.trie/Match");
});

/**
 * Positional factory function for reitit.trie/Match.
 */
reitit.trie.__GT_Match = (function reitit$trie$__GT_Match(params,data){
return (new reitit.trie.Match(params,data,null,null,null));
});

/**
 * Factory function for reitit.trie/Match, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Match = (function reitit$trie$map__GT_Match(G__15132){
var extmap__4236__auto__ = (function (){var G__15142 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15132,cljs.core.cst$kw$params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data], 0));
if(cljs.core.record_QMARK_(G__15132)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15142);
} else {
return G__15142;
}
})();
return (new reitit.trie.Match(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__15132),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__15132),null,cljs.core.not_empty(extmap__4236__auto__),null));
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
reitit.trie.Node = (function (children,wilds,catch_all,params,data,__meta,__extmap,__hash){
this.children = children;
this.wilds = wilds;
this.catch_all = catch_all;
this.params = params;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.trie.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

reitit.trie.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k15145,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__15149 = k15145;
var G__15149__$1 = (((G__15149 instanceof cljs.core.Keyword))?G__15149.fqn:null);
switch (G__15149__$1) {
case "children":
return self__.children;

break;
case "wilds":
return self__.wilds;

break;
case "catch-all":
return self__.catch_all;

break;
case "params":
return self__.params;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15145,else__4206__auto__);

}
});

reitit.trie.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#reitit.trie.Node{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$children,self__.children],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$wilds,self__.wilds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$catch_DASH_all,self__.catch_all],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null))], null),self__.__extmap));
});

reitit.trie.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15144){
var self__ = this;
var G__15144__$1 = this;
return (new cljs.core.RecordIter((0),G__15144__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$children,cljs.core.cst$kw$wilds,cljs.core.cst$kw$catch_DASH_all,cljs.core.cst$kw$params,cljs.core.cst$kw$data], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

reitit.trie.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

reitit.trie.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.trie.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

reitit.trie.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__15150 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (33004208 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__15150(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

reitit.trie.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15146,other15147){
var self__ = this;
var this15146__$1 = this;
return ((!((other15147 == null))) && ((this15146__$1.constructor === other15147.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15146__$1.children,other15147.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15146__$1.wilds,other15147.wilds)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15146__$1.catch_all,other15147.catch_all)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15146__$1.params,other15147.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15146__$1.data,other15147.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15146__$1.__extmap,other15147.__extmap)));
});

reitit.trie.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$children,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$wilds,null,cljs.core.cst$kw$catch_DASH_all,null,cljs.core.cst$kw$data,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

reitit.trie.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__15144){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__15151 = cljs.core.keyword_identical_QMARK_;
var expr__15152 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__15154 = cljs.core.cst$kw$children;
var G__15155 = expr__15152;
return (pred__15151.cljs$core$IFn$_invoke$arity$2 ? pred__15151.cljs$core$IFn$_invoke$arity$2(G__15154,G__15155) : pred__15151.call(null,G__15154,G__15155));
})())){
return (new reitit.trie.Node(G__15144,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15156 = cljs.core.cst$kw$wilds;
var G__15157 = expr__15152;
return (pred__15151.cljs$core$IFn$_invoke$arity$2 ? pred__15151.cljs$core$IFn$_invoke$arity$2(G__15156,G__15157) : pred__15151.call(null,G__15156,G__15157));
})())){
return (new reitit.trie.Node(self__.children,G__15144,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15158 = cljs.core.cst$kw$catch_DASH_all;
var G__15159 = expr__15152;
return (pred__15151.cljs$core$IFn$_invoke$arity$2 ? pred__15151.cljs$core$IFn$_invoke$arity$2(G__15158,G__15159) : pred__15151.call(null,G__15158,G__15159));
})())){
return (new reitit.trie.Node(self__.children,self__.wilds,G__15144,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15160 = cljs.core.cst$kw$params;
var G__15161 = expr__15152;
return (pred__15151.cljs$core$IFn$_invoke$arity$2 ? pred__15151.cljs$core$IFn$_invoke$arity$2(G__15160,G__15161) : pred__15151.call(null,G__15160,G__15161));
})())){
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,G__15144,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__15162 = cljs.core.cst$kw$data;
var G__15163 = expr__15152;
return (pred__15151.cljs$core$IFn$_invoke$arity$2 ? pred__15151.cljs$core$IFn$_invoke$arity$2(G__15162,G__15163) : pred__15151.call(null,G__15162,G__15163));
})())){
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,G__15144,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__15144),null));
}
}
}
}
}
});

reitit.trie.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$children,self__.children,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$wilds,self__.wilds,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$catch_DASH_all,self__.catch_all,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$params,self__.params,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$data,self__.data,null))], null),self__.__extmap));
});

reitit.trie.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__15144){
var self__ = this;
var this__4202__auto____$1 = this;
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,G__15144,self__.__extmap,self__.__hash));
});

reitit.trie.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

reitit.trie.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$children,cljs.core.cst$sym$wilds,cljs.core.cst$sym$catch_DASH_all,cljs.core.cst$sym$params,cljs.core.cst$sym$data], null);
});

reitit.trie.Node.cljs$lang$type = true;

reitit.trie.Node.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"reitit.trie/Node",null,(1),null));
});

reitit.trie.Node.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"reitit.trie/Node");
});

/**
 * Positional factory function for reitit.trie/Node.
 */
reitit.trie.__GT_Node = (function reitit$trie$__GT_Node(children,wilds,catch_all,params,data){
return (new reitit.trie.Node(children,wilds,catch_all,params,data,null,null,null));
});

/**
 * Factory function for reitit.trie/Node, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Node = (function reitit$trie$map__GT_Node(G__15148){
var extmap__4236__auto__ = (function (){var G__15164 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15148,cljs.core.cst$kw$children,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$wilds,cljs.core.cst$kw$catch_DASH_all,cljs.core.cst$kw$params,cljs.core.cst$kw$data], 0));
if(cljs.core.record_QMARK_(G__15148)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15164);
} else {
return G__15164;
}
})();
return (new reitit.trie.Node(cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(G__15148),cljs.core.cst$kw$wilds.cljs$core$IFn$_invoke$arity$1(G__15148),cljs.core.cst$kw$catch_DASH_all.cljs$core$IFn$_invoke$arity$1(G__15148),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__15148),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__15148),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

reitit.trie.wild_QMARK_ = (function reitit$trie$wild_QMARK_(x){
return (x instanceof reitit.trie.Wild);
});
reitit.trie.catch_all_QMARK_ = (function reitit$trie$catch_all_QMARK_(x){
return (x instanceof reitit.trie.CatchAll);
});

/**
 * @interface
 */
reitit.trie.Matcher = function(){};

reitit.trie.match = (function reitit$trie$match(this$,i,max,path){
if(((!((this$ == null))) && (!((this$.reitit$trie$Matcher$match$arity$4 == null))))){
return this$.reitit$trie$Matcher$match$arity$4(this$,i,max,path);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.trie.match[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$4(this$,i,max,path) : m__4244__auto__.call(null,this$,i,max,path));
} else {
var m__4244__auto____$1 = (reitit.trie.match["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,i,max,path) : m__4244__auto____$1.call(null,this$,i,max,path));
} else {
throw cljs.core.missing_protocol("Matcher.match",this$);
}
}
}
});

reitit.trie.view = (function reitit$trie$view(this$){
if(((!((this$ == null))) && (!((this$.reitit$trie$Matcher$view$arity$1 == null))))){
return this$.reitit$trie$Matcher$view$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.trie.view[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (reitit.trie.view["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Matcher.view",this$);
}
}
}
});

reitit.trie.depth = (function reitit$trie$depth(this$){
if(((!((this$ == null))) && (!((this$.reitit$trie$Matcher$depth$arity$1 == null))))){
return this$.reitit$trie$Matcher$depth$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.trie.depth[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (reitit.trie.depth["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Matcher.depth",this$);
}
}
}
});

reitit.trie.length = (function reitit$trie$length(this$){
if(((!((this$ == null))) && (!((this$.reitit$trie$Matcher$length$arity$1 == null))))){
return this$.reitit$trie$Matcher$length$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.trie.length[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (reitit.trie.length["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Matcher.length",this$);
}
}
}
});


/**
 * @interface
 */
reitit.trie.TrieCompiler = function(){};

reitit.trie.data_matcher = (function reitit$trie$data_matcher(this$,params,data){
if(((!((this$ == null))) && (!((this$.reitit$trie$TrieCompiler$data_matcher$arity$3 == null))))){
return this$.reitit$trie$TrieCompiler$data_matcher$arity$3(this$,params,data);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.trie.data_matcher[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(this$,params,data) : m__4244__auto__.call(null,this$,params,data));
} else {
var m__4244__auto____$1 = (reitit.trie.data_matcher["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,params,data) : m__4244__auto____$1.call(null,this$,params,data));
} else {
throw cljs.core.missing_protocol("TrieCompiler.data-matcher",this$);
}
}
}
});

reitit.trie.static_matcher = (function reitit$trie$static_matcher(this$,path,matcher){
if(((!((this$ == null))) && (!((this$.reitit$trie$TrieCompiler$static_matcher$arity$3 == null))))){
return this$.reitit$trie$TrieCompiler$static_matcher$arity$3(this$,path,matcher);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.trie.static_matcher[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,matcher) : m__4244__auto__.call(null,this$,path,matcher));
} else {
var m__4244__auto____$1 = (reitit.trie.static_matcher["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,path,matcher) : m__4244__auto____$1.call(null,this$,path,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.static-matcher",this$);
}
}
}
});

reitit.trie.wild_matcher = (function reitit$trie$wild_matcher(this$,key,end,matcher){
if(((!((this$ == null))) && (!((this$.reitit$trie$TrieCompiler$wild_matcher$arity$4 == null))))){
return this$.reitit$trie$TrieCompiler$wild_matcher$arity$4(this$,key,end,matcher);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.trie.wild_matcher[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,end,matcher) : m__4244__auto__.call(null,this$,key,end,matcher));
} else {
var m__4244__auto____$1 = (reitit.trie.wild_matcher["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,key,end,matcher) : m__4244__auto____$1.call(null,this$,key,end,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.wild-matcher",this$);
}
}
}
});

reitit.trie.catch_all_matcher = (function reitit$trie$catch_all_matcher(this$,key,params,data){
if(((!((this$ == null))) && (!((this$.reitit$trie$TrieCompiler$catch_all_matcher$arity$4 == null))))){
return this$.reitit$trie$TrieCompiler$catch_all_matcher$arity$4(this$,key,params,data);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.trie.catch_all_matcher[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,params,data) : m__4244__auto__.call(null,this$,key,params,data));
} else {
var m__4244__auto____$1 = (reitit.trie.catch_all_matcher["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,key,params,data) : m__4244__auto____$1.call(null,this$,key,params,data));
} else {
throw cljs.core.missing_protocol("TrieCompiler.catch-all-matcher",this$);
}
}
}
});

reitit.trie.linear_matcher = (function reitit$trie$linear_matcher(this$,matchers,ordered_QMARK_){
if(((!((this$ == null))) && (!((this$.reitit$trie$TrieCompiler$linear_matcher$arity$3 == null))))){
return this$.reitit$trie$TrieCompiler$linear_matcher$arity$3(this$,matchers,ordered_QMARK_);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.trie.linear_matcher[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(this$,matchers,ordered_QMARK_) : m__4244__auto__.call(null,this$,matchers,ordered_QMARK_));
} else {
var m__4244__auto____$1 = (reitit.trie.linear_matcher["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,matchers,ordered_QMARK_) : m__4244__auto____$1.call(null,this$,matchers,ordered_QMARK_));
} else {
throw cljs.core.missing_protocol("TrieCompiler.linear-matcher",this$);
}
}
}
});

reitit.trie._pretty = (function reitit$trie$_pretty(this$,matcher){
if(((!((this$ == null))) && (!((this$.reitit$trie$TrieCompiler$_pretty$arity$2 == null))))){
return this$.reitit$trie$TrieCompiler$_pretty$arity$2(this$,matcher);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.trie._pretty[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__4244__auto__.call(null,this$,matcher));
} else {
var m__4244__auto____$1 = (reitit.trie._pretty["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__4244__auto____$1.call(null,this$,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.-pretty",this$);
}
}
}
});

reitit.trie._path_matcher = (function reitit$trie$_path_matcher(this$,matcher){
if(((!((this$ == null))) && (!((this$.reitit$trie$TrieCompiler$_path_matcher$arity$2 == null))))){
return this$.reitit$trie$TrieCompiler$_path_matcher$arity$2(this$,matcher);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.trie._path_matcher[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__4244__auto__.call(null,this$,matcher));
} else {
var m__4244__auto____$1 = (reitit.trie._path_matcher["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__4244__auto____$1.call(null,this$,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.-path-matcher",this$);
}
}
}
});

reitit.trie.assoc_param = (function reitit$trie$assoc_param(match,k,v){
var params = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(match);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(match,cljs.core.cst$kw$params,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,k,v));
});
reitit.trie.common_prefix = (function reitit$trie$common_prefix(s1,s2){
var max = (function (){var x__4040__auto__ = cljs.core.count(s1);
var y__4041__auto__ = cljs.core.count(s2);
return ((x__4040__auto__ < y__4041__auto__) ? x__4040__auto__ : y__4041__auto__);
})();
var i = (0);
while(true){
if((i > max)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s1,(0),max);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s1,i),cljs.core.get.cljs$core$IFn$_invoke$arity$2(s2,i))){
if(!((i === (0)))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s1,(0),i);
} else {
return null;
}
} else {
var G__15166 = (i + (1));
i = G__15166;
continue;

}
}
break;
}
});
reitit.trie._keyword = (function reitit$trie$_keyword(s){
var temp__5718__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s,"/");
if(cljs.core.truth_(temp__5718__auto__)){
var i = temp__5718__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(i + (1))));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s);
}
});
reitit.trie.split_path = (function reitit$trie$split_path(s,p__15167){
var map__15168 = p__15167;
var map__15168__$1 = ((((!((map__15168 == null)))?(((((map__15168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15168):map__15168);
var syntax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15168__$1,cljs.core.cst$kw$syntax,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$bracket,null], null), null));
var bracket_QMARK_ = cljs.core.cst$kw$bracket.cljs$core$IFn$_invoke$arity$1(reitit.trie.into_set(syntax));
var colon_QMARK_ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(reitit.trie.into_set(syntax));
var _static = ((function (bracket_QMARK_,colon_QMARK_,map__15168,map__15168__$1,syntax){
return (function (from,to){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,to))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,from,to)], null);
} else {
return null;
}
});})(bracket_QMARK_,colon_QMARK_,map__15168,map__15168__$1,syntax))
;
var _wild = ((function (bracket_QMARK_,colon_QMARK_,_static,map__15168,map__15168__$1,syntax){
return (function (from,to){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.__GT_Wild(reitit.trie._keyword(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(from + (1)),to)))], null);
});})(bracket_QMARK_,colon_QMARK_,_static,map__15168,map__15168__$1,syntax))
;
var _catch_all = ((function (bracket_QMARK_,colon_QMARK_,_static,_wild,map__15168,map__15168__$1,syntax){
return (function (from,to){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.__GT_CatchAll(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(from + (1)),to)))], null);
});})(bracket_QMARK_,colon_QMARK_,_static,_wild,map__15168,map__15168__$1,syntax))
;
var ss = null;
var from = (0);
var to = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to,cljs.core.count(s))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(ss,_static(from,to));
} else {
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,to);
if(cljs.core.truth_((function (){var and__3938__auto__ = bracket_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",c);
} else {
return and__3938__auto__;
}
})())){
var to_SINGLEQUOTE_ = (function (){var or__3949__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(s,"}",to);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reitit$trie_SLASH_unclosed_DASH_brackets,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$path,s], null));
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("*",cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,(to + (1))))){
var G__15170 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_catch_all((to + (1)),to_SINGLEQUOTE_)], 0));
var G__15171 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
var G__15172 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
ss = G__15170;
from = G__15171;
to = G__15172;
continue;
} else {
var G__15173 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_wild(to,to_SINGLEQUOTE_)], 0));
var G__15174 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
var G__15175 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
ss = G__15173;
from = G__15174;
to = G__15175;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__3938__auto__ = colon_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",c);
} else {
return and__3938__auto__;
}
})())){
var to_SINGLEQUOTE_ = (function (){var or__3949__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(s,"/",to);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.count(s);
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(to_SINGLEQUOTE_ - to))){
var G__15176 = ss;
var G__15177 = from;
var G__15178 = (to + (1));
ss = G__15176;
from = G__15177;
to = G__15178;
continue;
} else {
var G__15179 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_wild(to,to_SINGLEQUOTE_)], 0));
var G__15180 = cljs.core.long$(to_SINGLEQUOTE_);
var G__15181 = cljs.core.long$(to_SINGLEQUOTE_);
ss = G__15179;
from = G__15180;
to = G__15181;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__3938__auto__ = colon_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("*",c);
} else {
return and__3938__auto__;
}
})())){
var to_SINGLEQUOTE_ = cljs.core.count(s);
var G__15182 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_catch_all(to,to_SINGLEQUOTE_)], 0));
var G__15183 = cljs.core.long$(to_SINGLEQUOTE_);
var G__15184 = cljs.core.long$(to_SINGLEQUOTE_);
ss = G__15182;
from = G__15183;
to = G__15184;
continue;
} else {
var G__15185 = ss;
var G__15186 = from;
var G__15187 = (to + (1));
ss = G__15185;
from = G__15186;
to = G__15187;
continue;

}
}
}
}
break;
}
});
reitit.trie.join_path = (function reitit$trie$join_path(xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((typeof x === 'string')?x:(((x instanceof reitit.trie.Wild))?["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(x))].join(''),(1))),"}"].join(''):(((x instanceof reitit.trie.CatchAll))?["{*",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(x))].join(''),(1))),"}"].join(''):null))))].join('');
}),"",xs);
});
reitit.trie.normalize = (function reitit$trie$normalize(s,opts){
return reitit.trie.join_path(reitit.trie.split_path(s,opts));
});
reitit.trie._slice_start = (function reitit$trie$_slice_start(p__15188,p__15189){
var vec__15190 = p__15188;
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15190,(0),null);
var p1s = vec__15190;
var vec__15193 = p__15189;
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15193,(0),null);
var p2s = vec__15193;
var _split = ((function (vec__15190,p1,p1s,vec__15193,p2,p2s){
return (function (p){
var temp__5718__auto__ = (function (){var and__3938__auto__ = p;
if(cljs.core.truth_(and__3938__auto__)){
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(p,"/");
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var i = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,i)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null);
}
});})(vec__15190,p1,p1s,vec__15193,p2,p2s))
;
var _slash = ((function (_split,vec__15190,p1,p1s,vec__15193,p2,p2s){
return (function (cp,p){
if(!(typeof cp === 'string')){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cp], null);
} else {
if(((typeof cp === 'string') && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cp),cljs.core.count(p))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,cljs.core.count(cp))], null);
} else {
if(((typeof p === 'string') && (cljs.core.not(cp)))){
return _split(p);
} else {
return null;
}
}
}
});})(_split,vec__15190,p1,p1s,vec__15193,p2,p2s))
;
var _postcut = ((function (_split,_slash,vec__15190,p1,p1s,vec__15193,p2,p2s){
return (function (p__15196){
var vec__15197 = p__15196;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15197,(0),null);
var pps = vec__15197;
var i = (function (){var and__3938__auto__ = p;
if(cljs.core.truth_(and__3938__auto__)){
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(p,"/");
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_((function (){var and__3938__auto__ = i;
if(cljs.core.truth_(and__3938__auto__)){
return (i > (0));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,i)], null),cljs.core.rest(pps));
} else {
return pps;
}
});})(_split,_slash,vec__15190,p1,p1s,vec__15193,p2,p2s))
;
var _tailcut = ((function (_split,_slash,_postcut,vec__15190,p1,p1s,vec__15193,p2,p2s){
return (function (cp,p__15200){
var vec__15201 = p__15200;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15201,(0),null);
var ps = vec__15201;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(_slash(cp,p),cljs.core.rest(ps));
});})(_split,_slash,_postcut,vec__15190,p1,p1s,vec__15193,p2,p2s))
;
if((((p1 == null)) || ((p2 == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_postcut(p1s),_postcut(p2s)], null);
} else {
var temp__5718__auto__ = (function (){var and__3938__auto__ = typeof p1 === 'string';
if(and__3938__auto__){
var and__3938__auto____$1 = typeof p2 === 'string';
if(and__3938__auto____$1){
return reitit.trie.common_prefix(p1,p2);
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var cp = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_tailcut(cp,p1s),_tailcut(cp,p2s)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1s,p2s], null);
}
}
});
reitit.trie._slice_end = (function reitit$trie$_slice_end(x,xs){
var i = ((typeof x === 'string')?clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(x,"/"):null);
if(((typeof i === 'number') && ((i > (0))))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(x,i)], null),xs);
} else {
return xs;
}
});
reitit.trie.conflicting_paths_QMARK_ = (function reitit$trie$conflicting_paths_QMARK_(path1,path2,opts){
var parts1 = reitit.trie.split_path(path1,opts);
var parts2 = reitit.trie.split_path(path2,opts);
while(true){
var vec__15204 = reitit.trie._slice_start(parts1,parts2);
var vec__15207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15204,(0),null);
var seq__15208 = cljs.core.seq(vec__15207);
var first__15209 = cljs.core.first(seq__15208);
var seq__15208__$1 = cljs.core.next(seq__15208);
var s1 = first__15209;
var ss1 = seq__15208__$1;
var vec__15210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15204,(1),null);
var seq__15211 = cljs.core.seq(vec__15210);
var first__15212 = cljs.core.first(seq__15211);
var seq__15211__$1 = cljs.core.next(seq__15211);
var s2 = first__15212;
var ss2 = seq__15211__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(s1,s2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0))){
return true;
} else {
if((((s1 == null)) || ((s2 == null)))){
return false;
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = reitit.trie.catch_all_QMARK_(s1);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return reitit.trie.catch_all_QMARK_(s2);
}
})())){
return true;
} else {
if(cljs.core.truth_((function (){var or__3949__auto__ = reitit.trie.wild_QMARK_(s1);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return reitit.trie.wild_QMARK_(s2);
}
})())){
var G__15213 = reitit.trie._slice_end(s1,ss1);
var G__15214 = reitit.trie._slice_end(s2,ss2);
parts1 = G__15213;
parts2 = G__15214;
continue;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s1,s2)){
return false;
} else {
var G__15215 = ss1;
var G__15216 = ss2;
parts1 = G__15215;
parts2 = G__15216;
continue;

}
}
}
}
}
break;
}
});
reitit.trie._node = (function reitit$trie$_node(m){
return reitit.trie.map__GT_Node(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$children,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$wilds,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$catch_DASH_all,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY], null),m], 0)));
});
reitit.trie._insert = (function reitit$trie$_insert(node,p__15217,fp,params,data){
var vec__15218 = p__15217;
var seq__15219 = cljs.core.seq(vec__15218);
var first__15220 = cljs.core.first(seq__15219);
var seq__15219__$1 = cljs.core.next(seq__15219);
var path = first__15220;
var ps = seq__15219__$1;
var node_SINGLEQUOTE_ = (((path == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(node,cljs.core.cst$kw$data,data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params,params], 0)):(((path instanceof reitit.trie.Wild))?(function (){var next = cljs.core.first(ps);
if((((next instanceof reitit.trie.Wild)) || ((next instanceof reitit.trie.CatchAll)))){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reitit$trie_SLASH_following_DASH_parameters,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,fp,cljs.core.cst$kw$parameters,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,next], null))], null));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$wilds,path], null),((function (next,vec__15218,seq__15219,first__15220,seq__15219__$1,path,ps){
return (function (n){
var G__15221 = (function (){var or__3949__auto__ = n;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
}
})();
var G__15222 = ps;
var G__15223 = fp;
var G__15224 = params;
var G__15225 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__15221,G__15222,G__15223,G__15224,G__15225) : reitit.trie._insert.call(null,G__15221,G__15222,G__15223,G__15224,G__15225));
});})(next,vec__15218,seq__15219,first__15220,seq__15219__$1,path,ps))
);
}
})():(((path instanceof reitit.trie.CatchAll))?cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$catch_DASH_all,path], null),reitit.trie._node(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params,params,cljs.core.cst$kw$data,data], null))):((clojure.string.blank_QMARK_(path))?(reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(node,ps,fp,params,data) : reitit.trie._insert.call(null,node,ps,fp,params,data)):(function (){var or__3949__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__15218,seq__15219,first__15220,seq__15219__$1,path,ps){
return (function (_,p__15245){
var vec__15246 = p__15245;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15246,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15246,(1),null);
var temp__5718__auto__ = reitit.trie.common_prefix(p,path);
if(cljs.core.truth_(temp__5718__auto__)){
var cp = temp__5718__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cp,p)){
var n_SINGLEQUOTE_ = (function (){var G__15249 = n;
var G__15250 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ps,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,cljs.core.count(p)));
var G__15251 = fp;
var G__15252 = params;
var G__15253 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__15249,G__15250,G__15251,G__15252,G__15253) : reitit.trie._insert.call(null,G__15249,G__15250,G__15251,G__15252,G__15253));
})();
return cljs.core.reduced(cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$children,p], null),n_SINGLEQUOTE_));
} else {
var rp = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,cljs.core.count(cp));
var rp_SINGLEQUOTE_ = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,cljs.core.count(cp));
var n_SINGLEQUOTE_ = (function (){var G__15254 = reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
var G__15255 = ps;
var G__15256 = fp;
var G__15257 = params;
var G__15258 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__15254,G__15255,G__15256,G__15257,G__15258) : reitit.trie._insert.call(null,G__15254,G__15255,G__15256,G__15257,G__15258));
})();
var n_SINGLEQUOTE__SINGLEQUOTE_ = (function (){var G__15259 = reitit.trie._node(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$children,cljs.core.PersistentArrayMap.createAsIfByAssoc([rp,n,rp_SINGLEQUOTE_,n_SINGLEQUOTE_])], null));
var G__15260 = null;
var G__15261 = null;
var G__15262 = null;
var G__15263 = null;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__15259,G__15260,G__15261,G__15262,G__15263) : reitit.trie._insert.call(null,G__15259,G__15260,G__15261,G__15262,G__15263));
})();
return cljs.core.reduced(cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,cljs.core.cst$kw$children,((function (rp,rp_SINGLEQUOTE_,n_SINGLEQUOTE_,n_SINGLEQUOTE__SINGLEQUOTE_,cp,temp__5718__auto__,vec__15246,p,n,vec__15218,seq__15219,first__15220,seq__15219__$1,path,ps){
return (function (children){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(children,p),cp,n_SINGLEQUOTE__SINGLEQUOTE_);
});})(rp,rp_SINGLEQUOTE_,n_SINGLEQUOTE_,n_SINGLEQUOTE__SINGLEQUOTE_,cp,temp__5718__auto__,vec__15246,p,n,vec__15218,seq__15219,first__15220,seq__15219__$1,path,ps))
));
}
} else {
return null;
}
});})(vec__15218,seq__15219,first__15220,seq__15219__$1,path,ps))
,null,cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$children,path], null),(function (){var G__15264 = reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
var G__15265 = ps;
var G__15266 = fp;
var G__15267 = params;
var G__15268 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__15264,G__15265,G__15266,G__15267,G__15268) : reitit.trie._insert.call(null,G__15264,G__15265,G__15266,G__15267,G__15268));
})());
}
})()
))));
var temp__5718__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$children,""], null));
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(node_SINGLEQUOTE_,cljs.core.cst$kw$data),child], 0)),cljs.core.cst$kw$children,cljs.core.dissoc,"");
} else {
return node_SINGLEQUOTE_;
}
});
reitit.trie.decode = (function reitit$trie$decode(path,start,end,percent_QMARK_){
var param = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(path,start,end);
if(cljs.core.truth_(percent_QMARK_)){
return decodeURIComponent(param);
} else {
return param;
}
});
reitit.trie.clojure_trie_compiler = (function reitit$trie$clojure_trie_compiler(){
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie15269 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.TrieCompiler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie15269 = (function (meta15270){
this.meta15270 = meta15270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.trie.t_reitit$trie15269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15271,meta15270__$1){
var self__ = this;
var _15271__$1 = this;
return (new reitit.trie.t_reitit$trie15269(meta15270__$1));
});

reitit.trie.t_reitit$trie15269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15271){
var self__ = this;
var _15271__$1 = this;
return self__.meta15270;
});

reitit.trie.t_reitit$trie15269.prototype.reitit$trie$TrieCompiler$ = cljs.core.PROTOCOL_SENTINEL;

reitit.trie.t_reitit$trie15269.prototype.reitit$trie$TrieCompiler$data_matcher$arity$3 = (function (_,params,data){
var self__ = this;
var ___$1 = this;
var match = reitit.trie.__GT_Match(params,data);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie15272 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie15272 = (function (meta15270,_,params,data,match,meta15273){
this.meta15270 = meta15270;
this._ = _;
this.params = params;
this.data = data;
this.match = match;
this.meta15273 = meta15273;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.trie.t_reitit$trie15272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (match,___$1){
return (function (_15274,meta15273__$1){
var self__ = this;
var _15274__$1 = this;
return (new reitit.trie.t_reitit$trie15272(self__.meta15270,self__._,self__.params,self__.data,self__.match,meta15273__$1));
});})(match,___$1))
;

reitit.trie.t_reitit$trie15272.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (match,___$1){
return (function (_15274){
var self__ = this;
var _15274__$1 = this;
return self__.meta15273;
});})(match,___$1))
;

reitit.trie.t_reitit$trie15272.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL;

reitit.trie.t_reitit$trie15272.prototype.reitit$trie$Matcher$match$arity$4 = ((function (match,___$1){
return (function (___$1,i,max,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,max)){
return self__.match;
} else {
return null;
}
});})(match,___$1))
;

reitit.trie.t_reitit$trie15272.prototype.reitit$trie$Matcher$view$arity$1 = ((function (match,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.data;
});})(match,___$1))
;

reitit.trie.t_reitit$trie15272.prototype.reitit$trie$Matcher$depth$arity$1 = ((function (match,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return (1);
});})(match,___$1))
;

reitit.trie.t_reitit$trie15272.prototype.reitit$trie$Matcher$length$arity$1 = ((function (match,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
});})(match,___$1))
;

reitit.trie.t_reitit$trie15272.getBasis = ((function (match,___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta15270,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$reitit$trie_SLASH_t_reitit$trie15269], null)),cljs.core.cst$sym$params,cljs.core.cst$sym$data,cljs.core.cst$sym$match,cljs.core.cst$sym$meta15273], null);
});})(match,___$1))
;

reitit.trie.t_reitit$trie15272.cljs$lang$type = true;

reitit.trie.t_reitit$trie15272.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie15272";

reitit.trie.t_reitit$trie15272.cljs$lang$ctorPrWriter = ((function (match,___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"reitit.trie/t_reitit$trie15272");
});})(match,___$1))
;

/**
 * Positional factory function for reitit.trie/t_reitit$trie15272.
 */
reitit.trie.__GT_t_reitit$trie15272 = ((function (match,___$1){
return (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie15272(meta15270__$1,___$2,params__$1,data__$1,match__$1,meta15273){
return (new reitit.trie.t_reitit$trie15272(meta15270__$1,___$2,params__$1,data__$1,match__$1,meta15273));
});})(match,___$1))
;

}

return (new reitit.trie.t_reitit$trie15272(self__.meta15270,___$1,params,data,match,cljs.core.PersistentArrayMap.EMPTY));
});

reitit.trie.t_reitit$trie15269.prototype.reitit$trie$TrieCompiler$static_matcher$arity$3 = (function (_,path,matcher){
var self__ = this;
var ___$1 = this;
var size = cljs.core.count(path);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie15275 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie15275 = (function (meta15270,_,path,matcher,size,meta15276){
this.meta15270 = meta15270;
this._ = _;
this.path = path;
this.matcher = matcher;
this.size = size;
this.meta15276 = meta15276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.trie.t_reitit$trie15275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (size,___$1){
return (function (_15277,meta15276__$1){
var self__ = this;
var _15277__$1 = this;
return (new reitit.trie.t_reitit$trie15275(self__.meta15270,self__._,self__.path,self__.matcher,self__.size,meta15276__$1));
});})(size,___$1))
;

reitit.trie.t_reitit$trie15275.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (size,___$1){
return (function (_15277){
var self__ = this;
var _15277__$1 = this;
return self__.meta15276;
});})(size,___$1))
;

reitit.trie.t_reitit$trie15275.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL;

reitit.trie.t_reitit$trie15275.prototype.reitit$trie$Matcher$match$arity$4 = ((function (size,___$1){
return (function (___$1,i,max,p){
var self__ = this;
var ___$2 = this;
if(!((max < (i + self__.size)))){
var j = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,self__.size)){
return reitit.trie.match(self__.matcher,(i + self__.size),max,p);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,(i + j)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.path,j))){
var G__15292 = (j + (1));
j = G__15292;
continue;
} else {
return null;
}
}
break;
}
} else {
return null;
}
});})(size,___$1))
;

reitit.trie.t_reitit$trie15275.prototype.reitit$trie$Matcher$view$arity$1 = ((function (size,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.path,reitit.trie.view(self__.matcher)], null);
});})(size,___$1))
;

reitit.trie.t_reitit$trie15275.prototype.reitit$trie$Matcher$depth$arity$1 = ((function (size,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return (reitit.trie.depth(self__.matcher) + (1));
});})(size,___$1))
;

reitit.trie.t_reitit$trie15275.prototype.reitit$trie$Matcher$length$arity$1 = ((function (size,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.count(self__.path);
});})(size,___$1))
;

reitit.trie.t_reitit$trie15275.getBasis = ((function (size,___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta15270,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$reitit$trie_SLASH_t_reitit$trie15269], null)),cljs.core.cst$sym$path,cljs.core.cst$sym$matcher,cljs.core.cst$sym$size,cljs.core.cst$sym$meta15276], null);
});})(size,___$1))
;

reitit.trie.t_reitit$trie15275.cljs$lang$type = true;

reitit.trie.t_reitit$trie15275.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie15275";

reitit.trie.t_reitit$trie15275.cljs$lang$ctorPrWriter = ((function (size,___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"reitit.trie/t_reitit$trie15275");
});})(size,___$1))
;

/**
 * Positional factory function for reitit.trie/t_reitit$trie15275.
 */
reitit.trie.__GT_t_reitit$trie15275 = ((function (size,___$1){
return (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie15275(meta15270__$1,___$2,path__$1,matcher__$1,size__$1,meta15276){
return (new reitit.trie.t_reitit$trie15275(meta15270__$1,___$2,path__$1,matcher__$1,size__$1,meta15276));
});})(size,___$1))
;

}

return (new reitit.trie.t_reitit$trie15275(self__.meta15270,___$1,path,matcher,size,cljs.core.PersistentArrayMap.EMPTY));
});

reitit.trie.t_reitit$trie15269.prototype.reitit$trie$TrieCompiler$wild_matcher$arity$4 = (function (_,key,end,matcher){
var self__ = this;
var ___$1 = this;
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie15278 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie15278 = (function (meta15270,_,key,end,matcher,meta15279){
this.meta15270 = meta15270;
this._ = _;
this.key = key;
this.end = end;
this.matcher = matcher;
this.meta15279 = meta15279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.trie.t_reitit$trie15278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15280,meta15279__$1){
var self__ = this;
var _15280__$1 = this;
return (new reitit.trie.t_reitit$trie15278(self__.meta15270,self__._,self__.key,self__.end,self__.matcher,meta15279__$1));
});})(___$1))
;

reitit.trie.t_reitit$trie15278.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15280){
var self__ = this;
var _15280__$1 = this;
return self__.meta15279;
});})(___$1))
;

reitit.trie.t_reitit$trie15278.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL;

reitit.trie.t_reitit$trie15278.prototype.reitit$trie$Matcher$match$arity$4 = ((function (___$1){
return (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
if((((i < max)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(path,i),self__.end)))){
var percent_QMARK_ = false;
var j = i;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max,j)){
var temp__5718__auto__ = reitit.trie.match(self__.matcher,max,max,path);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return reitit.trie.assoc_param(match,self__.key,reitit.trie.decode(path,i,max,percent_QMARK_));
} else {
return null;
}
} else {
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(path,j);
var pred__15281 = cljs.core._EQ_;
var expr__15282 = c;
if(cljs.core.truth_((pred__15281.cljs$core$IFn$_invoke$arity$2 ? pred__15281.cljs$core$IFn$_invoke$arity$2(self__.end,expr__15282) : pred__15281.call(null,self__.end,expr__15282)))){
var temp__5718__auto__ = reitit.trie.match(self__.matcher,j,max,path);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return reitit.trie.assoc_param(match,self__.key,reitit.trie.decode(path,i,j,percent_QMARK_));
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var G__15284 = "%";
var G__15285 = expr__15282;
return (pred__15281.cljs$core$IFn$_invoke$arity$2 ? pred__15281.cljs$core$IFn$_invoke$arity$2(G__15284,G__15285) : pred__15281.call(null,G__15284,G__15285));
})())){
var G__15293 = true;
var G__15294 = (j + (1));
percent_QMARK_ = G__15293;
j = G__15294;
continue;
} else {
var G__15295 = percent_QMARK_;
var G__15296 = (j + (1));
percent_QMARK_ = G__15295;
j = G__15296;
continue;
}
}
}
break;
}
} else {
return null;
}
});})(___$1))
;

reitit.trie.t_reitit$trie15278.prototype.reitit$trie$Matcher$view$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,reitit.trie.view(self__.matcher)], null);
});})(___$1))
;

reitit.trie.t_reitit$trie15278.prototype.reitit$trie$Matcher$depth$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return (reitit.trie.depth(self__.matcher) + (1));
});})(___$1))
;

reitit.trie.t_reitit$trie15278.prototype.reitit$trie$Matcher$length$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
});})(___$1))
;

reitit.trie.t_reitit$trie15278.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta15270,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$reitit$trie_SLASH_t_reitit$trie15269], null)),cljs.core.cst$sym$key,cljs.core.cst$sym$end,cljs.core.cst$sym$matcher,cljs.core.cst$sym$meta15279], null);
});})(___$1))
;

reitit.trie.t_reitit$trie15278.cljs$lang$type = true;

reitit.trie.t_reitit$trie15278.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie15278";

reitit.trie.t_reitit$trie15278.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"reitit.trie/t_reitit$trie15278");
});})(___$1))
;

/**
 * Positional factory function for reitit.trie/t_reitit$trie15278.
 */
reitit.trie.__GT_t_reitit$trie15278 = ((function (___$1){
return (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie15278(meta15270__$1,___$2,key__$1,end__$1,matcher__$1,meta15279){
return (new reitit.trie.t_reitit$trie15278(meta15270__$1,___$2,key__$1,end__$1,matcher__$1,meta15279));
});})(___$1))
;

}

return (new reitit.trie.t_reitit$trie15278(self__.meta15270,___$1,key,end,matcher,cljs.core.PersistentArrayMap.EMPTY));
});

reitit.trie.t_reitit$trie15269.prototype.reitit$trie$TrieCompiler$catch_all_matcher$arity$4 = (function (_,key,params,data){
var self__ = this;
var ___$1 = this;
var match = reitit.trie.__GT_Match(params,data);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie15286 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie15286 = (function (meta15270,_,key,params,data,match,meta15287){
this.meta15270 = meta15270;
this._ = _;
this.key = key;
this.params = params;
this.data = data;
this.match = match;
this.meta15287 = meta15287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.trie.t_reitit$trie15286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (match,___$1){
return (function (_15288,meta15287__$1){
var self__ = this;
var _15288__$1 = this;
return (new reitit.trie.t_reitit$trie15286(self__.meta15270,self__._,self__.key,self__.params,self__.data,self__.match,meta15287__$1));
});})(match,___$1))
;

reitit.trie.t_reitit$trie15286.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (match,___$1){
return (function (_15288){
var self__ = this;
var _15288__$1 = this;
return self__.meta15287;
});})(match,___$1))
;

reitit.trie.t_reitit$trie15286.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL;

reitit.trie.t_reitit$trie15286.prototype.reitit$trie$Matcher$match$arity$4 = ((function (match,___$1){
return (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
if((i <= max)){
return reitit.trie.assoc_param(self__.match,self__.key,reitit.trie.decode(path,i,max,true));
} else {
return null;
}
});})(match,___$1))
;

reitit.trie.t_reitit$trie15286.prototype.reitit$trie$Matcher$view$arity$1 = ((function (match,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.data], null)], null);
});})(match,___$1))
;

reitit.trie.t_reitit$trie15286.prototype.reitit$trie$Matcher$depth$arity$1 = ((function (match,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return (1);
});})(match,___$1))
;

reitit.trie.t_reitit$trie15286.prototype.reitit$trie$Matcher$length$arity$1 = ((function (match,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
});})(match,___$1))
;

reitit.trie.t_reitit$trie15286.getBasis = ((function (match,___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta15270,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$reitit$trie_SLASH_t_reitit$trie15269], null)),cljs.core.cst$sym$key,cljs.core.cst$sym$params,cljs.core.cst$sym$data,cljs.core.cst$sym$match,cljs.core.cst$sym$meta15287], null);
});})(match,___$1))
;

reitit.trie.t_reitit$trie15286.cljs$lang$type = true;

reitit.trie.t_reitit$trie15286.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie15286";

reitit.trie.t_reitit$trie15286.cljs$lang$ctorPrWriter = ((function (match,___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"reitit.trie/t_reitit$trie15286");
});})(match,___$1))
;

/**
 * Positional factory function for reitit.trie/t_reitit$trie15286.
 */
reitit.trie.__GT_t_reitit$trie15286 = ((function (match,___$1){
return (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie15286(meta15270__$1,___$2,key__$1,params__$1,data__$1,match__$1,meta15287){
return (new reitit.trie.t_reitit$trie15286(meta15270__$1,___$2,key__$1,params__$1,data__$1,match__$1,meta15287));
});})(match,___$1))
;

}

return (new reitit.trie.t_reitit$trie15286(self__.meta15270,___$1,key,params,data,match,cljs.core.PersistentArrayMap.EMPTY));
});

reitit.trie.t_reitit$trie15269.prototype.reitit$trie$TrieCompiler$linear_matcher$arity$3 = (function (_,matchers,ordered_QMARK_){
var self__ = this;
var ___$1 = this;
var matchers__$1 = cljs.core.vec((cljs.core.truth_(ordered_QMARK_)?matchers:cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(reitit.trie.depth,reitit.trie.length),matchers))));
var size = cljs.core.count(matchers__$1);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie15289 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie15289 = (function (meta15270,_,matchers,ordered_QMARK_,size,meta15290){
this.meta15270 = meta15270;
this._ = _;
this.matchers = matchers;
this.ordered_QMARK_ = ordered_QMARK_;
this.size = size;
this.meta15290 = meta15290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.trie.t_reitit$trie15289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (matchers__$1,size,___$1){
return (function (_15291,meta15290__$1){
var self__ = this;
var _15291__$1 = this;
return (new reitit.trie.t_reitit$trie15289(self__.meta15270,self__._,self__.matchers,self__.ordered_QMARK_,self__.size,meta15290__$1));
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie15289.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (matchers__$1,size,___$1){
return (function (_15291){
var self__ = this;
var _15291__$1 = this;
return self__.meta15290;
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie15289.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL;

reitit.trie.t_reitit$trie15289.prototype.reitit$trie$Matcher$match$arity$4 = ((function (matchers__$1,size,___$1){
return (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
var j = (0);
while(true){
if((j < self__.size)){
var or__3949__auto__ = reitit.trie.match(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.matchers,j),i,max,path);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var G__15297 = (j + (1));
j = G__15297;
continue;
}
} else {
return null;
}
break;
}
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie15289.prototype.reitit$trie$Matcher$view$arity$1 = ((function (matchers__$1,size,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(reitit.trie.view,self__.matchers);
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie15289.prototype.reitit$trie$Matcher$depth$arity$1 = ((function (matchers__$1,size,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reitit.trie.depth,self__.matchers)) + (1));
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie15289.prototype.reitit$trie$Matcher$length$arity$1 = ((function (matchers__$1,size,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie15289.getBasis = ((function (matchers__$1,size,___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta15270,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$reitit$trie_SLASH_t_reitit$trie15269], null)),cljs.core.cst$sym$matchers,cljs.core.cst$sym$ordered_QMARK_,cljs.core.cst$sym$size,cljs.core.cst$sym$meta15290], null);
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie15289.cljs$lang$type = true;

reitit.trie.t_reitit$trie15289.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie15289";

reitit.trie.t_reitit$trie15289.cljs$lang$ctorPrWriter = ((function (matchers__$1,size,___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"reitit.trie/t_reitit$trie15289");
});})(matchers__$1,size,___$1))
;

/**
 * Positional factory function for reitit.trie/t_reitit$trie15289.
 */
reitit.trie.__GT_t_reitit$trie15289 = ((function (matchers__$1,size,___$1){
return (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie15289(meta15270__$1,___$2,matchers__$2,ordered_QMARK___$1,size__$1,meta15290){
return (new reitit.trie.t_reitit$trie15289(meta15270__$1,___$2,matchers__$2,ordered_QMARK___$1,size__$1,meta15290));
});})(matchers__$1,size,___$1))
;

}

return (new reitit.trie.t_reitit$trie15289(self__.meta15270,___$1,matchers__$1,ordered_QMARK_,size,cljs.core.PersistentArrayMap.EMPTY));
});

reitit.trie.t_reitit$trie15269.prototype.reitit$trie$TrieCompiler$_pretty$arity$2 = (function (_,matcher){
var self__ = this;
var ___$1 = this;
return reitit.trie.view(matcher);
});

reitit.trie.t_reitit$trie15269.prototype.reitit$trie$TrieCompiler$_path_matcher$arity$2 = (function (_,matcher){
var self__ = this;
var ___$1 = this;
return ((function (___$1){
return (function (path){
var temp__5718__auto__ = reitit.trie.match(matcher,(0),cljs.core.count(path),path);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return reitit.trie.__GT_Match(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(match),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(match));
} else {
return null;
}
});
;})(___$1))
});

reitit.trie.t_reitit$trie15269.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta15270], null);
});

reitit.trie.t_reitit$trie15269.cljs$lang$type = true;

reitit.trie.t_reitit$trie15269.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie15269";

reitit.trie.t_reitit$trie15269.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"reitit.trie/t_reitit$trie15269");
});

/**
 * Positional factory function for reitit.trie/t_reitit$trie15269.
 */
reitit.trie.__GT_t_reitit$trie15269 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie15269(meta15270){
return (new reitit.trie.t_reitit$trie15269(meta15270));
});

}

return (new reitit.trie.t_reitit$trie15269(cljs.core.PersistentArrayMap.EMPTY));
});
reitit.trie.map_parameters = (function reitit$trie$map_parameters(keys){
return cljs.core.zipmap(keys,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));
});
/**
 * Returns a trie with routes added to it.
 */
reitit.trie.insert = (function reitit$trie$insert(var_args){
var G__15299 = arguments.length;
switch (G__15299) {
case 1:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.trie.insert.cljs$core$IFn$_invoke$arity$1 = (function (routes){
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$2(null,routes);
});

reitit.trie.insert.cljs$core$IFn$_invoke$arity$2 = (function (node,routes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__15300){
var vec__15301 = p__15300;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15301,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15301,(1),null);
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$3(acc,p,d);
}),node,routes);
});

reitit.trie.insert.cljs$core$IFn$_invoke$arity$3 = (function (node,path,data){
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(node,path,data,null);
});

reitit.trie.insert.cljs$core$IFn$_invoke$arity$4 = (function (node,path,data,p__15304){
var map__15305 = p__15304;
var map__15305__$1 = ((((!((map__15305 == null)))?(((((map__15305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15305):map__15305);
var opts = map__15305__$1;
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15305__$1,cljs.core.cst$kw$reitit$trie_SLASH_parameters,reitit.trie.map_parameters);
var parts = reitit.trie.split_path(path,opts);
var params = (function (){var G__15307 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,parts));
return (parameters.cljs$core$IFn$_invoke$arity$1 ? parameters.cljs$core$IFn$_invoke$arity$1(G__15307) : parameters.call(null,G__15307));
})();
return reitit.trie._insert((function (){var or__3949__auto__ = node;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
}
})(),reitit.trie.split_path(path,opts),path,params,data);
});

reitit.trie.insert.cljs$lang$maxFixedArity = 4;

/**
 * Returns a default [[TrieCompiler]].
 */
reitit.trie.compiler = (function reitit$trie$compiler(){
return reitit.trie.clojure_trie_compiler();
});
/**
 * Returns a compiled trie, to be used with [[pretty]] or [[path-matcher]].
 */
reitit.trie.compile = (function reitit$trie$compile(var_args){
var G__15310 = arguments.length;
switch (G__15310) {
case 1:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.trie.compile.cljs$core$IFn$_invoke$arity$1 = (function (options){
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$2(options,reitit.trie.compiler());
});

reitit.trie.compile.cljs$core$IFn$_invoke$arity$2 = (function (options,compiler){
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(options,compiler,cljs.core.PersistentVector.EMPTY);
});

reitit.trie.compile.cljs$core$IFn$_invoke$arity$3 = (function (p__15311,compiler,cp){
var map__15312 = p__15311;
var map__15312__$1 = ((((!((map__15312 == null)))?(((((map__15312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15312):map__15312);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15312__$1,cljs.core.cst$kw$data);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15312__$1,cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15312__$1,cljs.core.cst$kw$children);
var wilds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15312__$1,cljs.core.cst$kw$wilds);
var catch_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15312__$1,cljs.core.cst$kw$catch_DASH_all);
var ends = ((function (map__15312,map__15312__$1,data,params,children,wilds,catch_all){
return (function (p__15314){
var map__15315 = p__15314;
var map__15315__$1 = ((((!((map__15315 == null)))?(((((map__15315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15315):map__15315);
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15315__$1,cljs.core.cst$kw$children);
var or__3949__auto__ = cljs.core.keys(children__$1);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/"], null);
}
});})(map__15312,map__15312__$1,data,params,children,wilds,catch_all))
;
var matchers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__15317 = cljs.core.PersistentVector.EMPTY;
if(cljs.core.truth_(data)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__15317,reitit.trie.data_matcher(compiler,params,data));
} else {
return G__15317;
}
})(),(function (){var iter__4324__auto__ = ((function (ends,map__15312,map__15312__$1,data,params,children,wilds,catch_all){
return (function reitit$trie$iter__15318(s__15319){
return (new cljs.core.LazySeq(null,((function (ends,map__15312,map__15312__$1,data,params,children,wilds,catch_all){
return (function (){
var s__15319__$1 = s__15319;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__15319__$1);
if(temp__5720__auto__){
var s__15319__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15319__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__15319__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__15321 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__15320 = (0);
while(true){
if((i__15320 < size__4323__auto__)){
var vec__15322 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__15320);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15322,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15322,(1),null);
cljs.core.chunk_append(b__15321,reitit.trie.static_matcher(compiler,p,reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))));

var G__15349 = (i__15320 + (1));
i__15320 = G__15349;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15321),reitit$trie$iter__15318(cljs.core.chunk_rest(s__15319__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15321),null);
}
} else {
var vec__15325 = cljs.core.first(s__15319__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15325,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15325,(1),null);
return cljs.core.cons(reitit.trie.static_matcher(compiler,p,reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))),reitit$trie$iter__15318(cljs.core.rest(s__15319__$2)));
}
} else {
return null;
}
break;
}
});})(ends,map__15312,map__15312__$1,data,params,children,wilds,catch_all))
,null,null));
});})(ends,map__15312,map__15312__$1,data,params,children,wilds,catch_all))
;
return iter__4324__auto__(children);
})()),(function (){var iter__4324__auto__ = ((function (ends,map__15312,map__15312__$1,data,params,children,wilds,catch_all){
return (function reitit$trie$iter__15328(s__15329){
return (new cljs.core.LazySeq(null,((function (ends,map__15312,map__15312__$1,data,params,children,wilds,catch_all){
return (function (){
var s__15329__$1 = s__15329;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__15329__$1);
if(temp__5720__auto__){
var s__15329__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15329__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__15329__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__15331 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__15330 = (0);
while(true){
if((i__15330 < size__4323__auto__)){
var vec__15332 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__15330);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15332,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15332,(1),null);
cljs.core.chunk_append(b__15331,(function (){var pv = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(p);
var ends__$1 = ends(c);
if(cljs.core.next(ends__$1)){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reitit$trie_SLASH_multiple_DASH_terminators,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$terminators,ends__$1,cljs.core.cst$kw$path,reitit.trie.join_path(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))], null));
} else {
return reitit.trie.wild_matcher(compiler,pv,cljs.core.ffirst(ends__$1),reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,pv)));
}
})());

var G__15350 = (i__15330 + (1));
i__15330 = G__15350;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15331),reitit$trie$iter__15328(cljs.core.chunk_rest(s__15329__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15331),null);
}
} else {
var vec__15335 = cljs.core.first(s__15329__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15335,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15335,(1),null);
return cljs.core.cons((function (){var pv = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(p);
var ends__$1 = ends(c);
if(cljs.core.next(ends__$1)){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reitit$trie_SLASH_multiple_DASH_terminators,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$terminators,ends__$1,cljs.core.cst$kw$path,reitit.trie.join_path(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))], null));
} else {
return reitit.trie.wild_matcher(compiler,pv,cljs.core.ffirst(ends__$1),reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,pv)));
}
})(),reitit$trie$iter__15328(cljs.core.rest(s__15329__$2)));
}
} else {
return null;
}
break;
}
});})(ends,map__15312,map__15312__$1,data,params,children,wilds,catch_all))
,null,null));
});})(ends,map__15312,map__15312__$1,data,params,children,wilds,catch_all))
;
return iter__4324__auto__(wilds);
})()),(function (){var iter__4324__auto__ = ((function (ends,map__15312,map__15312__$1,data,params,children,wilds,catch_all){
return (function reitit$trie$iter__15338(s__15339){
return (new cljs.core.LazySeq(null,((function (ends,map__15312,map__15312__$1,data,params,children,wilds,catch_all){
return (function (){
var s__15339__$1 = s__15339;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__15339__$1);
if(temp__5720__auto__){
var s__15339__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15339__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__15339__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__15341 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__15340 = (0);
while(true){
if((i__15340 < size__4323__auto__)){
var vec__15342 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__15340);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15342,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15342,(1),null);
cljs.core.chunk_append(b__15341,reitit.trie.catch_all_matcher(compiler,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(p),params,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(c)));

var G__15351 = (i__15340 + (1));
i__15340 = G__15351;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15341),reitit$trie$iter__15338(cljs.core.chunk_rest(s__15339__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15341),null);
}
} else {
var vec__15345 = cljs.core.first(s__15339__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15345,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15345,(1),null);
return cljs.core.cons(reitit.trie.catch_all_matcher(compiler,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(p),params,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(c)),reitit$trie$iter__15338(cljs.core.rest(s__15339__$2)));
}
} else {
return null;
}
break;
}
});})(ends,map__15312,map__15312__$1,data,params,children,wilds,catch_all))
,null,null));
});})(ends,map__15312,map__15312__$1,data,params,children,wilds,catch_all))
;
return iter__4324__auto__(catch_all);
})());
if((cljs.core.count(matchers) > (1))){
return reitit.trie.linear_matcher(compiler,matchers,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(matchers),(1))){
return cljs.core.first(matchers);
} else {
return reitit.trie.data_matcher(compiler,cljs.core.PersistentArrayMap.EMPTY,null);

}
}
});

reitit.trie.compile.cljs$lang$maxFixedArity = 3;

/**
 * Returns a simplified EDN structure of a compiled trie for printing purposes.
 */
reitit.trie.pretty = (function reitit$trie$pretty(var_args){
var G__15353 = arguments.length;
switch (G__15353) {
case 1:
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.trie.pretty.cljs$core$IFn$_invoke$arity$1 = (function (compiled_trie){
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2(compiled_trie,reitit.trie.compiler());
});

reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2 = (function (compiled_trie,compiler){
return reitit.trie._pretty(compiler,compiled_trie);
});

reitit.trie.pretty.cljs$lang$maxFixedArity = 2;

/**
 * Returns a function of `path -> Match` from a compiled trie.
 */
reitit.trie.path_matcher = (function reitit$trie$path_matcher(var_args){
var G__15356 = arguments.length;
switch (G__15356) {
case 1:
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$1 = (function (compiled_trie){
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(compiled_trie,reitit.trie.compiler());
});

reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2 = (function (compiled_trie,compiler){
return reitit.trie._path_matcher(compiler,compiled_trie);
});

reitit.trie.path_matcher.cljs$lang$maxFixedArity = 2;

