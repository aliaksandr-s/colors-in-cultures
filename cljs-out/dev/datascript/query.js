// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('datascript.query');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.reader');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('datascript.db');
goog.require('me.tonsky.persistent_sorted_set.arrays');
goog.require('datascript.lru');
goog.require('datascript.impl.entity');
goog.require('datascript.parser');
goog.require('datascript.pull_api');
goog.require('datascript.pull_parser');
datascript.query.lru_cache_size = (100);



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
datascript.query.Context = (function (rels,sources,rules,__meta,__extmap,__hash){
this.rels = rels;
this.sources = sources;
this.rules = rules;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k24026,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__24030 = k24026;
var G__24030__$1 = (((G__24030 instanceof cljs.core.Keyword))?G__24030.fqn:null);
switch (G__24030__$1) {
case "rels":
return self__.rels;

break;
case "sources":
return self__.sources;

break;
case "rules":
return self__.rules;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24026,else__4206__auto__);

}
});

datascript.query.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.query.Context{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rels,self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$sources,self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rules,self__.rules],null))], null),self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24025){
var self__ = this;
var G__24025__$1 = this;
return (new cljs.core.RecordIter((0),G__24025__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels,cljs.core.cst$kw$sources,cljs.core.cst$kw$rules], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.query.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.query.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.query.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__24031 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1014232958 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__24031(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24027,other24028){
var self__ = this;
var this24027__$1 = this;
return ((!((other24028 == null))) && ((this24027__$1.constructor === other24028.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24027__$1.rels,other24028.rels)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24027__$1.sources,other24028.sources)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24027__$1.rules,other24028.rules)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24027__$1.__extmap,other24028.__extmap)));
});

datascript.query.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$sources,null,cljs.core.cst$kw$rules,null,cljs.core.cst$kw$rels,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__24025){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__24032 = cljs.core.keyword_identical_QMARK_;
var expr__24033 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__24035 = cljs.core.cst$kw$rels;
var G__24036 = expr__24033;
return (pred__24032.cljs$core$IFn$_invoke$arity$2 ? pred__24032.cljs$core$IFn$_invoke$arity$2(G__24035,G__24036) : pred__24032.call(null,G__24035,G__24036));
})())){
return (new datascript.query.Context(G__24025,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24037 = cljs.core.cst$kw$sources;
var G__24038 = expr__24033;
return (pred__24032.cljs$core$IFn$_invoke$arity$2 ? pred__24032.cljs$core$IFn$_invoke$arity$2(G__24037,G__24038) : pred__24032.call(null,G__24037,G__24038));
})())){
return (new datascript.query.Context(self__.rels,G__24025,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24039 = cljs.core.cst$kw$rules;
var G__24040 = expr__24033;
return (pred__24032.cljs$core$IFn$_invoke$arity$2 ? pred__24032.cljs$core$IFn$_invoke$arity$2(G__24039,G__24040) : pred__24032.call(null,G__24039,G__24040));
})())){
return (new datascript.query.Context(self__.rels,self__.sources,G__24025,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__24025),null));
}
}
}
});

datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$rels,self__.rels,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$sources,self__.sources,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$rules,self__.rules,null))], null),self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__24025){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__24025,self__.__extmap,self__.__hash));
});

datascript.query.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.query.Context.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rels,cljs.core.cst$sym$sources,cljs.core.cst$sym$rules], null);
});

datascript.query.Context.cljs$lang$type = true;

datascript.query.Context.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.query/Context",null,(1),null));
});

datascript.query.Context.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.query/Context");
});

/**
 * Positional factory function for datascript.query/Context.
 */
datascript.query.__GT_Context = (function datascript$query$__GT_Context(rels,sources,rules){
return (new datascript.query.Context(rels,sources,rules,null,null,null));
});

/**
 * Factory function for datascript.query/Context, taking a map of keywords to field values.
 */
datascript.query.map__GT_Context = (function datascript$query$map__GT_Context(G__24029){
var extmap__4236__auto__ = (function (){var G__24041 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24029,cljs.core.cst$kw$rels,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$sources,cljs.core.cst$kw$rules], 0));
if(cljs.core.record_QMARK_(G__24029)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24041);
} else {
return G__24041;
}
})();
return (new datascript.query.Context(cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(G__24029),cljs.core.cst$kw$sources.cljs$core$IFn$_invoke$arity$1(G__24029),cljs.core.cst$kw$rules.cljs$core$IFn$_invoke$arity$1(G__24029),null,cljs.core.not_empty(extmap__4236__auto__),null));
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
datascript.query.Relation = (function (attrs,tuples,__meta,__extmap,__hash){
this.attrs = attrs;
this.tuples = tuples;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k24044,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__24048 = k24044;
var G__24048__$1 = (((G__24048 instanceof cljs.core.Keyword))?G__24048.fqn:null);
switch (G__24048__$1) {
case "attrs":
return self__.attrs;

break;
case "tuples":
return self__.tuples;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24044,else__4206__auto__);

}
});

datascript.query.Relation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.query.Relation{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attrs,self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tuples,self__.tuples],null))], null),self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24043){
var self__ = this;
var G__24043__$1 = this;
return (new cljs.core.RecordIter((0),G__24043__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$tuples], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.query.Relation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.query.Relation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.query.Relation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__24049 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1107093117 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__24049(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24045,other24046){
var self__ = this;
var this24045__$1 = this;
return ((!((other24046 == null))) && ((this24045__$1.constructor === other24046.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24045__$1.attrs,other24046.attrs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24045__$1.tuples,other24046.tuples)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24045__$1.__extmap,other24046.__extmap)));
});

datascript.query.Relation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tuples,null,cljs.core.cst$kw$attrs,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__24043){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__24050 = cljs.core.keyword_identical_QMARK_;
var expr__24051 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__24053 = cljs.core.cst$kw$attrs;
var G__24054 = expr__24051;
return (pred__24050.cljs$core$IFn$_invoke$arity$2 ? pred__24050.cljs$core$IFn$_invoke$arity$2(G__24053,G__24054) : pred__24050.call(null,G__24053,G__24054));
})())){
return (new datascript.query.Relation(G__24043,self__.tuples,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24055 = cljs.core.cst$kw$tuples;
var G__24056 = expr__24051;
return (pred__24050.cljs$core$IFn$_invoke$arity$2 ? pred__24050.cljs$core$IFn$_invoke$arity$2(G__24055,G__24056) : pred__24050.call(null,G__24055,G__24056));
})())){
return (new datascript.query.Relation(self__.attrs,G__24043,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__24043),null));
}
}
});

datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$attrs,self__.attrs,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$tuples,self__.tuples,null))], null),self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__24043){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,G__24043,self__.__extmap,self__.__hash));
});

datascript.query.Relation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.query.Relation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$attrs,cljs.core.cst$sym$tuples], null);
});

datascript.query.Relation.cljs$lang$type = true;

datascript.query.Relation.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.query/Relation",null,(1),null));
});

datascript.query.Relation.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.query/Relation");
});

/**
 * Positional factory function for datascript.query/Relation.
 */
datascript.query.__GT_Relation = (function datascript$query$__GT_Relation(attrs,tuples){
return (new datascript.query.Relation(attrs,tuples,null,null,null));
});

/**
 * Factory function for datascript.query/Relation, taking a map of keywords to field values.
 */
datascript.query.map__GT_Relation = (function datascript$query$map__GT_Relation(G__24047){
var extmap__4236__auto__ = (function (){var G__24057 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24047,cljs.core.cst$kw$attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$tuples], 0));
if(cljs.core.record_QMARK_(G__24047)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24057);
} else {
return G__24057;
}
})();
return (new datascript.query.Relation(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(G__24047),cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(G__24047),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

datascript.query.single = (function datascript$query$single(coll){
if((cljs.core.next(coll) == null)){
} else {
throw (new Error(["Assert failed: ","Expected single element","\n","(nil? (next coll))"].join('')));
}

return cljs.core.first(coll);
});
datascript.query.intersect_keys = (function datascript$query$intersect_keys(attrs1,attrs2){
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs1)),cljs.core.set(cljs.core.keys(attrs2)));
});
datascript.query.concatv = (function datascript$query$concatv(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24060 = arguments.length;
var i__4532__auto___24061 = (0);
while(true){
if((i__4532__auto___24061 < len__4531__auto___24060)){
args__4534__auto__.push((arguments[i__4532__auto___24061]));

var G__24062 = (i__4532__auto___24061 + (1));
i__4532__auto___24061 = G__24062;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,xs);
});

datascript.query.concatv.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
datascript.query.concatv.cljs$lang$applyTo = (function (seq24059){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24059));
});

datascript.query.zip = (function datascript$query$zip(var_args){
var G__24067 = arguments.length;
switch (G__24067) {
case 2:
return datascript.query.zip.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4546__auto__ = [];
var len__4531__auto___24069 = arguments.length;
var i__4532__auto___24070 = (0);
while(true){
if((i__4532__auto___24070 < len__4531__auto___24069)){
args_arr__4546__auto__.push((arguments[i__4532__auto___24070]));

var G__24071 = (i__4532__auto___24070 + (1));
i__4532__auto___24070 = G__24071;
continue;
} else {
}
break;
}

var argseq__4547__auto__ = (new cljs.core.IndexedSeq(args_arr__4546__auto__.slice((2)),(0),null));
return datascript.query.zip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4547__auto__);

}
});

datascript.query.zip.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,a,b);
});

datascript.query.zip.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.mapv,cljs.core.vector,a,b,rest);
});

/** @this {Function} */
datascript.query.zip.cljs$lang$applyTo = (function (seq24064){
var G__24065 = cljs.core.first(seq24064);
var seq24064__$1 = cljs.core.next(seq24064);
var G__24066 = cljs.core.first(seq24064__$1);
var seq24064__$2 = cljs.core.next(seq24064__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24065,G__24066,seq24064__$2);
});

datascript.query.zip.cljs$lang$maxFixedArity = (2);

datascript.query.same_keys_QMARK_ = (function datascript$query$same_keys_QMARK_(a,b){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(a),cljs.core.count(b))) && (cljs.core.every_QMARK_((function (p1__24072_SHARP_){
return cljs.core.contains_QMARK_(b,p1__24072_SHARP_);
}),cljs.core.keys(a))) && (cljs.core.every_QMARK_((function (p1__24073_SHARP_){
return cljs.core.contains_QMARK_(b,p1__24073_SHARP_);
}),cljs.core.keys(a))));
});
datascript.query.looks_like_QMARK_ = (function datascript$query$looks_like_QMARK_(pattern,form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,pattern)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null),pattern)){
return cljs.core.sequential_QMARK_(form);
} else {
if((pattern instanceof cljs.core.Symbol)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,pattern);
} else {
if(cljs.core.sequential_QMARK_(pattern)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(pattern),cljs.core.cst$sym$_STAR_)){
return ((cljs.core.sequential_QMARK_(form)) && (cljs.core.every_QMARK_((function (p__24078){
var vec__24079 = p__24078;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24079,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24079,(1),null);
return (datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern_el,form_el) : datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.butlast(pattern),form))));
} else {
return ((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),cljs.core.count(pattern))) && (cljs.core.every_QMARK_((function (p__24086){
var vec__24087 = p__24086;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24087,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24087,(1),null);
return (datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern_el,form_el) : datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,form))));
}
} else {
return (pattern.cljs$core$IFn$_invoke$arity$1 ? pattern.cljs$core$IFn$_invoke$arity$1(form) : pattern.call(null,form));

}
}
}
}
});
datascript.query.source_QMARK_ = (function datascript$query$source_QMARK_(sym){
return (((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("$",cljs.core.first(cljs.core.name(sym)))));
});
datascript.query.free_var_QMARK_ = (function datascript$query$free_var_QMARK_(sym){
return (((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",cljs.core.first(cljs.core.name(sym)))));
});
datascript.query.attr_QMARK_ = (function datascript$query$attr_QMARK_(form){
return (((form instanceof cljs.core.Keyword)) || (typeof form === 'string'));
});
datascript.query.lookup_ref_QMARK_ = (function datascript$query$lookup_ref_QMARK_(form){
return datascript.query.looks_like_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.attr_QMARK_,cljs.core.cst$sym$_], null),form);
});
datascript.query.join_tuples = (function datascript$query$join_tuples(t1,idxs1,t2,idxs2){
var l1 = idxs1.length;
var l2 = idxs2.length;
var res = me.tonsky.persistent_sorted_set.arrays.make_array((l1 + l2));
var n__4408__auto___24090 = l1;
var i_24091 = (0);
while(true){
if((i_24091 < n__4408__auto___24090)){
(res[i_24091] = (t1[(idxs1[i_24091])]));

var G__24092 = (i_24091 + (1));
i_24091 = G__24092;
continue;
} else {
}
break;
}

var n__4408__auto___24093 = l2;
var i_24094 = (0);
while(true){
if((i_24094 < n__4408__auto___24093)){
(res[(l1 + i_24094)] = (t2[(idxs2[i_24094])]));

var G__24095 = (i_24094 + (1));
i_24094 = G__24095;
continue;
} else {
}
break;
}

return res;
});
datascript.query.sum_rel = (function datascript$query$sum_rel(a,b){
var map__24096 = a;
var map__24096__$1 = ((((!((map__24096 == null)))?(((((map__24096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24096):map__24096);
var attrs_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24096__$1,cljs.core.cst$kw$attrs);
var tuples_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24096__$1,cljs.core.cst$kw$tuples);
var map__24097 = b;
var map__24097__$1 = ((((!((map__24097 == null)))?(((((map__24097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24097):map__24097);
var attrs_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24097__$1,cljs.core.cst$kw$attrs);
var tuples_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24097__$1,cljs.core.cst$kw$tuples);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attrs_a,attrs_b)){
return (new datascript.query.Relation(attrs_a,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(tuples_a),tuples_b),null,null,null));
} else {
if(cljs.core.not(datascript.query.same_keys_QMARK_(attrs_a,attrs_b))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can\u2019t sum relations with different attrs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_a], 0)))," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_b], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_where], null));
} else {
if(cljs.core.every_QMARK_(cljs.core.number_QMARK_,cljs.core.vals(attrs_a))){
var idxb__GT_idxa = cljs.core.vec((function (){var iter__4324__auto__ = ((function (map__24096,map__24096__$1,attrs_a,tuples_a,map__24097,map__24097__$1,attrs_b,tuples_b){
return (function datascript$query$sum_rel_$_iter__24100(s__24101){
return (new cljs.core.LazySeq(null,((function (map__24096,map__24096__$1,attrs_a,tuples_a,map__24097,map__24097__$1,attrs_b,tuples_b){
return (function (){
var s__24101__$1 = s__24101;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__24101__$1);
if(temp__5720__auto__){
var s__24101__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24101__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__24101__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__24103 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__24102 = (0);
while(true){
if((i__24102 < size__4323__auto__)){
var vec__24104 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__24102);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24104,(0),null);
var idx_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24104,(1),null);
cljs.core.chunk_append(b__24103,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,(attrs_a.cljs$core$IFn$_invoke$arity$1 ? attrs_a.cljs$core$IFn$_invoke$arity$1(sym) : attrs_a.call(null,sym))], null));

var G__24124 = (i__24102 + (1));
i__24102 = G__24124;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24103),datascript$query$sum_rel_$_iter__24100(cljs.core.chunk_rest(s__24101__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24103),null);
}
} else {
var vec__24107 = cljs.core.first(s__24101__$2);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24107,(0),null);
var idx_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24107,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,(attrs_a.cljs$core$IFn$_invoke$arity$1 ? attrs_a.cljs$core$IFn$_invoke$arity$1(sym) : attrs_a.call(null,sym))], null),datascript$query$sum_rel_$_iter__24100(cljs.core.rest(s__24101__$2)));
}
} else {
return null;
}
break;
}
});})(map__24096,map__24096__$1,attrs_a,tuples_a,map__24097,map__24097__$1,attrs_b,tuples_b))
,null,null));
});})(map__24096,map__24096__$1,attrs_a,tuples_a,map__24097,map__24097__$1,attrs_b,tuples_b))
;
return iter__4324__auto__(attrs_b);
})());
var tlen = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.vals(attrs_a)) + (1));
var tuples_SINGLEQUOTE_ = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (idxb__GT_idxa,tlen,map__24096,map__24096__$1,attrs_a,tuples_a,map__24097,map__24097__$1,attrs_b,tuples_b){
return (function (acc,tuple_b){
var tuple_SINGLEQUOTE_ = me.tonsky.persistent_sorted_set.arrays.make_array(tlen);
var seq__24110_24125 = cljs.core.seq(idxb__GT_idxa);
var chunk__24111_24126 = null;
var count__24112_24127 = (0);
var i__24113_24128 = (0);
while(true){
if((i__24113_24128 < count__24112_24127)){
var vec__24114_24129 = chunk__24111_24126.cljs$core$IIndexed$_nth$arity$2(null,i__24113_24128);
var idx_b_24130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24114_24129,(0),null);
var idx_a_24131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24114_24129,(1),null);
(tuple_SINGLEQUOTE_[idx_a_24131] = (tuple_b[idx_b_24130]));


var G__24132 = seq__24110_24125;
var G__24133 = chunk__24111_24126;
var G__24134 = count__24112_24127;
var G__24135 = (i__24113_24128 + (1));
seq__24110_24125 = G__24132;
chunk__24111_24126 = G__24133;
count__24112_24127 = G__24134;
i__24113_24128 = G__24135;
continue;
} else {
var temp__5720__auto___24136 = cljs.core.seq(seq__24110_24125);
if(temp__5720__auto___24136){
var seq__24110_24137__$1 = temp__5720__auto___24136;
if(cljs.core.chunked_seq_QMARK_(seq__24110_24137__$1)){
var c__4351__auto___24138 = cljs.core.chunk_first(seq__24110_24137__$1);
var G__24139 = cljs.core.chunk_rest(seq__24110_24137__$1);
var G__24140 = c__4351__auto___24138;
var G__24141 = cljs.core.count(c__4351__auto___24138);
var G__24142 = (0);
seq__24110_24125 = G__24139;
chunk__24111_24126 = G__24140;
count__24112_24127 = G__24141;
i__24113_24128 = G__24142;
continue;
} else {
var vec__24117_24143 = cljs.core.first(seq__24110_24137__$1);
var idx_b_24144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24117_24143,(0),null);
var idx_a_24145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24117_24143,(1),null);
(tuple_SINGLEQUOTE_[idx_a_24145] = (tuple_b[idx_b_24144]));


var G__24146 = cljs.core.next(seq__24110_24137__$1);
var G__24147 = null;
var G__24148 = (0);
var G__24149 = (0);
seq__24110_24125 = G__24146;
chunk__24111_24126 = G__24147;
count__24112_24127 = G__24148;
i__24113_24128 = G__24149;
continue;
}
} else {
}
}
break;
}

return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,tuple_SINGLEQUOTE_);
});})(idxb__GT_idxa,tlen,map__24096,map__24096__$1,attrs_a,tuples_a,map__24097,map__24097__$1,attrs_b,tuples_b))
,cljs.core.transient$(cljs.core.vec(tuples_a)),tuples_b));
return (new datascript.query.Relation(attrs_a,tuples_SINGLEQUOTE_,null,null,null));
} else {
var all_attrs = cljs.core.zipmap(cljs.core.keys(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_a,attrs_b], 0))),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var G__24120 = (function (){var G__24122 = (new datascript.query.Relation(all_attrs,cljs.core.PersistentVector.EMPTY,null,null,null));
var G__24123 = a;
return (datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2 ? datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2(G__24122,G__24123) : datascript.query.sum_rel.call(null,G__24122,G__24123));
})();
var G__24121 = b;
return (datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2 ? datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2(G__24120,G__24121) : datascript.query.sum_rel.call(null,G__24120,G__24121));

}
}
}
});
datascript.query.prod_rel = (function datascript$query$prod_rel(var_args){
var G__24151 = arguments.length;
switch (G__24151) {
case 0:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me.tonsky.persistent_sorted_set.arrays.make_array((0))], null),null,null,null));
});

datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2 = (function (rel1,rel2){
var attrs1 = cljs.core.keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel1));
var attrs2 = cljs.core.keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel2));
var idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel1),attrs1));
var idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel2),attrs2));
return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(attrs1,attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attrs1,attrs2,idxs1,idxs2){
return (function (acc,t1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attrs1,attrs2,idxs1,idxs2){
return (function (acc__$1,t2){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datascript.query.join_tuples(t1,idxs1,t2,idxs2));
});})(attrs1,attrs2,idxs1,idxs2))
,acc,cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel2));
});})(attrs1,attrs2,idxs1,idxs2))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel1))),null,null,null));
});

datascript.query.prod_rel.cljs$lang$maxFixedArity = 2;

datascript.query._differ_QMARK_ = (function datascript$query$_differ_QMARK_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24154 = arguments.length;
var i__4532__auto___24155 = (0);
while(true){
if((i__4532__auto___24155 < len__4531__auto___24154)){
args__4534__auto__.push((arguments[i__4532__auto___24155]));

var G__24156 = (i__4532__auto___24155 + (1));
i__4532__auto___24155 = G__24156;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var l = cljs.core.count(xs);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((l / (2)),xs),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((l / (2)),xs));
});

datascript.query._differ_QMARK_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
datascript.query._differ_QMARK_.cljs$lang$applyTo = (function (seq24153){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24153));
});

datascript.query._get_else = (function datascript$query$_get_else(db,e,a,else_val){
if((else_val == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["get-else: nil default value is not supported"].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_where], null));
} else {
}

var temp__5722__auto__ = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if((temp__5722__auto__ == null)){
return else_val;
} else {
var datom = temp__5722__auto__;
return cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(datom);
}
});
datascript.query._get_some = (function datascript$query$_get_some(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24160 = arguments.length;
var i__4532__auto___24161 = (0);
while(true){
if((i__4532__auto___24161 < len__4531__auto___24160)){
args__4534__auto__.push((arguments[i__4532__auto___24161]));

var G__24162 = (i__4532__auto___24161 + (1));
i__4532__auto___24161 = G__24162;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic = (function (db,e,as){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,a){
var temp__5724__auto__ = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if((temp__5724__auto__ == null)){
return null;
} else {
var datom = temp__5724__auto__;
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a.cljs$core$IFn$_invoke$arity$1(datom),cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(datom)], null));
}
}),null,as);
});

datascript.query._get_some.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
datascript.query._get_some.cljs$lang$applyTo = (function (seq24157){
var G__24158 = cljs.core.first(seq24157);
var seq24157__$1 = cljs.core.next(seq24157);
var G__24159 = cljs.core.first(seq24157__$1);
var seq24157__$2 = cljs.core.next(seq24157__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24158,G__24159,seq24157__$2);
});

datascript.query._missing_QMARK_ = (function datascript$query$_missing_QMARK_(db,e,a){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.impl.entity.entity(db,e),a) == null);
});
datascript.query.and_fn = (function datascript$query$and_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24164 = arguments.length;
var i__4532__auto___24165 = (0);
while(true){
if((i__4532__auto___24165 < len__4531__auto___24164)){
args__4534__auto__.push((arguments[i__4532__auto___24165]));

var G__24166 = (i__4532__auto___24165 + (1));
i__4532__auto___24165 = G__24166;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,b){
if(cljs.core.truth_(b)){
return b;
} else {
return cljs.core.reduced(b);
}
}),true,args);
});

datascript.query.and_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
datascript.query.and_fn.cljs$lang$applyTo = (function (seq24163){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24163));
});

datascript.query.or_fn = (function datascript$query$or_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24168 = arguments.length;
var i__4532__auto___24169 = (0);
while(true){
if((i__4532__auto___24169 < len__4531__auto___24168)){
args__4534__auto__.push((arguments[i__4532__auto___24169]));

var G__24170 = (i__4532__auto___24169 + (1));
i__4532__auto___24169 = G__24170;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,b){
if(cljs.core.truth_(b)){
return cljs.core.reduced(b);
} else {
return b;
}
}),null,args);
});

datascript.query.or_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
datascript.query.or_fn.cljs$lang$applyTo = (function (seq24167){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24167));
});

datascript.query.built_ins = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$true_QMARK_,cljs.core.cst$sym$and,cljs.core.cst$sym$odd_QMARK_,cljs.core.cst$sym$get_DASH_else,cljs.core.cst$sym$_GT__EQ_,cljs.core.cst$sym$print_DASH_str,cljs.core.cst$sym$_GT_,cljs.core.cst$sym$count,cljs.core.cst$sym$get_DASH_some,cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$inc,cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$quot,cljs.core.cst$sym$false_QMARK_,cljs.core.cst$sym$not,cljs.core.cst$sym$identity,cljs.core.cst$sym$_DASH_differ_QMARK_,cljs.core.cst$sym$re_DASH_seq,cljs.core.cst$sym$_LT__EQ_,cljs.core.cst$sym$clojure$string_SLASH_starts_DASH_with_QMARK_,cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$min,cljs.core.cst$sym$_PLUS_,cljs.core.cst$sym$name,cljs.core.cst$sym$missing_QMARK_,cljs.core.cst$sym$ground,cljs.core.cst$sym$rand_DASH_int,cljs.core.cst$sym$complement,cljs.core.cst$sym$_EQ__EQ_,cljs.core.cst$sym$hash_DASH_map,cljs.core.cst$sym$compare,cljs.core.cst$sym$range,cljs.core.cst$sym$max,cljs.core.cst$sym$empty_QMARK_,cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$pr_DASH_str,cljs.core.cst$sym$println_DASH_str,cljs.core.cst$sym$meta,cljs.core.cst$sym$zero_QMARK_,cljs.core.cst$sym$_BANG__EQ_,cljs.core.cst$sym$prn_DASH_str,cljs.core.cst$sym$dec,cljs.core.cst$sym$re_DASH_pattern,cljs.core.cst$sym$vector,cljs.core.cst$sym$not_EQ_,cljs.core.cst$sym$str,cljs.core.cst$sym$_LT_,cljs.core.cst$sym$namespace,cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$some_QMARK_,cljs.core.cst$sym$pos_QMARK_,cljs.core.cst$sym$rand,cljs.core.cst$sym$re_DASH_matches,cljs.core.cst$sym$list,cljs.core.cst$sym$contains_QMARK_,cljs.core.cst$sym$clojure$string_SLASH_ends_DASH_with_QMARK_,cljs.core.cst$sym$subs,cljs.core.cst$sym$mod,cljs.core.cst$sym$clojure$string_SLASH_includes_QMARK_,cljs.core.cst$sym$array_DASH_map,cljs.core.cst$sym$rem,cljs.core.cst$sym$even_QMARK_,cljs.core.cst$sym$type,cljs.core.cst$sym$neg_QMARK_,cljs.core.cst$sym$clojure$string_SLASH_blank_QMARK_,cljs.core.cst$sym$not_DASH_empty,cljs.core.cst$sym$or,cljs.core.cst$sym$identical_QMARK_,cljs.core.cst$sym$set,cljs.core.cst$sym$re_DASH_find],[cljs.core.true_QMARK_,datascript.query.and_fn,cljs.core.odd_QMARK_,datascript.query._get_else,cljs.core._GT__EQ_,cljs.core.print_str,cljs.core._GT_,cljs.core.count,datascript.query._get_some,cljs.core.nil_QMARK_,cljs.core.inc,cljs.core._SLASH_,cljs.core.quot,cljs.core.false_QMARK_,cljs.core.not,cljs.core.identity,datascript.query._differ_QMARK_,cljs.core.re_seq,cljs.core._LT__EQ_,clojure.string.starts_with_QMARK_,cljs.core._EQ_,cljs.core.min,cljs.core._PLUS_,cljs.core.name,datascript.query._missing_QMARK_,cljs.core.identity,cljs.core.rand_int,cljs.core.complement,cljs.core._EQ__EQ_,cljs.core.hash_map,cljs.core.compare,cljs.core.range,cljs.core.max,cljs.core.empty,cljs.core._STAR_,cljs.core.pr_str,cljs.core.println_str,cljs.core.meta,cljs.core.zero_QMARK_,cljs.core.not_EQ_,cljs.core.prn_str,cljs.core.dec,cljs.core.re_pattern,cljs.core.vector,cljs.core.not_EQ_,cljs.core.str,cljs.core._LT_,cljs.core.namespace,cljs.core._,cljs.core.some_QMARK_,cljs.core.pos_QMARK_,cljs.core.rand,cljs.core.re_matches,cljs.core.list,cljs.core.contains_QMARK_,clojure.string.ends_with_QMARK_,cljs.core.subs,cljs.core.mod,clojure.string.includes_QMARK_,cljs.core.array_map,cljs.core.rem,cljs.core.even_QMARK_,cljs.core.type,cljs.core.neg_QMARK_,clojure.string.blank_QMARK_,cljs.core.not_empty,datascript.query.or_fn,cljs.core.identical_QMARK_,cljs.core.set,cljs.core.re_find]);
datascript.query.built_in_aggregates = (function (){var sum = (function datascript$query$sum(coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),coll);
});
var avg = (function datascript$query$avg(coll){
return (sum(coll) / cljs.core.count(coll));
});
var median = (function datascript$query$median(coll){
var terms = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(coll);
var size = cljs.core.count(coll);
var med = (size >> (1));
var G__24176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,med);
if(cljs.core.even_QMARK_(size)){
return ((G__24176 + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,(med - (1)))) / (2));
} else {
return G__24176;
}
});
var variance = (function datascript$query$variance(coll){
var mean = avg(coll);
var sum__$1 = sum((function (){var iter__4324__auto__ = ((function (mean){
return (function datascript$query$variance_$_iter__24177(s__24178){
return (new cljs.core.LazySeq(null,((function (mean){
return (function (){
var s__24178__$1 = s__24178;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__24178__$1);
if(temp__5720__auto__){
var s__24178__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24178__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__24178__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__24180 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__24179 = (0);
while(true){
if((i__24179 < size__4323__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__24179);
var delta = (x - mean);
cljs.core.chunk_append(b__24180,(delta * delta));

var G__24181 = (i__24179 + (1));
i__24179 = G__24181;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24180),datascript$query$variance_$_iter__24177(cljs.core.chunk_rest(s__24178__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24180),null);
}
} else {
var x = cljs.core.first(s__24178__$2);
var delta = (x - mean);
return cljs.core.cons((delta * delta),datascript$query$variance_$_iter__24177(cljs.core.rest(s__24178__$2)));
}
} else {
return null;
}
break;
}
});})(mean))
,null,null));
});})(mean))
;
return iter__4324__auto__(coll);
})());
return (sum__$1 / cljs.core.count(coll));
});
var stddev = (function datascript$query$stddev(coll){
return Math.sqrt(variance(coll));
});
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$variance,cljs.core.cst$sym$count,cljs.core.cst$sym$median,cljs.core.cst$sym$sum,cljs.core.cst$sym$min,cljs.core.cst$sym$max,cljs.core.cst$sym$count_DASH_distinct,cljs.core.cst$sym$distinct,cljs.core.cst$sym$avg,cljs.core.cst$sym$stddev,cljs.core.cst$sym$rand,cljs.core.cst$sym$sample],[variance,cljs.core.count,median,sum,(function() {
var G__24182 = null;
var G__24182__1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.compare(x,acc) < (0))){
return x;
} else {
return acc;
}
}),cljs.core.first(coll),cljs.core.next(coll));
});
var G__24182__2 = (function (n,coll){
return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.count(acc) < n)){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x));
} else {
if((cljs.core.compare(x,cljs.core.last(acc)) < (0))){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__24182 = function(n,coll){
switch(arguments.length){
case 1:
return G__24182__1.call(this,n);
case 2:
return G__24182__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24182.cljs$core$IFn$_invoke$arity$1 = G__24182__1;
G__24182.cljs$core$IFn$_invoke$arity$2 = G__24182__2;
return G__24182;
})()
,(function() {
var G__24183 = null;
var G__24183__1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.compare(x,acc) > (0))){
return x;
} else {
return acc;
}
}),cljs.core.first(coll),cljs.core.next(coll));
});
var G__24183__2 = (function (n,coll){
return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.count(acc) < n)){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x));
} else {
if((cljs.core.compare(x,cljs.core.first(acc)) > (0))){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.next(acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__24183 = function(n,coll){
switch(arguments.length){
case 1:
return G__24183__1.call(this,n);
case 2:
return G__24183__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24183.cljs$core$IFn$_invoke$arity$1 = G__24183__1;
G__24183.cljs$core$IFn$_invoke$arity$2 = G__24183__2;
return G__24183;
})()
,(function (coll){
return cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(coll));
}),cljs.core.set,avg,stddev,(function() {
var G__24184 = null;
var G__24184__1 = (function (coll){
return cljs.core.rand_nth(coll);
});
var G__24184__2 = (function (n,coll){
return cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){
return cljs.core.rand_nth(coll);
})));
});
G__24184 = function(n,coll){
switch(arguments.length){
case 1:
return G__24184__1.call(this,n);
case 2:
return G__24184__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__24184.cljs$core$IFn$_invoke$arity$1 = G__24184__1;
G__24184.cljs$core$IFn$_invoke$arity$2 = G__24184__2;
return G__24184;
})()
,(function (n,coll){
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.shuffle(coll)));
})]);
})();
datascript.query.parse_rules = (function datascript$query$parse_rules(rules){
var rules__$1 = ((typeof rules === 'string')?cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(rules):rules);
return cljs.core.group_by(cljs.core.ffirst,rules__$1);
});
datascript.query.empty_rel = (function datascript$query$empty_rel(binding){
var vars = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,datascript.parser.collect_vars_distinct(binding));
return (new datascript.query.Relation(cljs.core.zipmap(vars,cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.PersistentVector.EMPTY,null,null,null));
});

/**
 * @interface
 */
datascript.query.IBinding = function(){};

datascript.query.in__GT_rel = (function datascript$query$in__GT_rel(binding,value){
if(((!((binding == null))) && (!((binding.datascript$query$IBinding$in__GT_rel$arity$2 == null))))){
return binding.datascript$query$IBinding$in__GT_rel$arity$2(binding,value);
} else {
var x__4243__auto__ = (((binding == null))?null:binding);
var m__4244__auto__ = (datascript.query.in__GT_rel[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(binding,value) : m__4244__auto__.call(null,binding,value));
} else {
var m__4244__auto____$1 = (datascript.query.in__GT_rel["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(binding,value) : m__4244__auto____$1.call(null,binding,value));
} else {
throw cljs.core.missing_protocol("IBinding.in->rel",binding);
}
}
}
});

datascript.parser.BindIgnore.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindIgnore.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (_,___$1){
var ___$2 = this;
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();
});

datascript.parser.BindScalar.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindScalar.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,value){
var binding__$1 = this;
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(binding__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$variable,cljs.core.cst$kw$symbol], null)),(0)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null))], null),null,null,null));
});

datascript.parser.BindColl.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindColl.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if(!(datascript.db.seqable_QMARK_(coll))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot bind value ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0)))," to collection ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_binding,cljs.core.cst$kw$value,coll,cljs.core.cst$kw$binding,datascript.parser.source(binding__$1)], null));
} else {
if(cljs.core.empty_QMARK_(coll)){
return datascript.query.empty_rel(binding__$1);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (binding__$1){
return (function (p1__24185_SHARP_){
return datascript.query.in__GT_rel(cljs.core.cst$kw$binding.cljs$core$IFn$_invoke$arity$1(binding__$1),p1__24185_SHARP_);
});})(binding__$1))
,coll));

}
}
});

datascript.parser.BindTuple.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindTuple.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if(!(datascript.db.seqable_QMARK_(coll))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot bind value ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0)))," to tuple ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_binding,cljs.core.cst$kw$value,coll,cljs.core.cst$kw$binding,datascript.parser.source(binding__$1)], null));
} else {
if((cljs.core.count(coll) < cljs.core.count(cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(binding__$1)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Not enough elements in a collection ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0)))," to bind tuple ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_binding,cljs.core.cst$kw$value,coll,cljs.core.cst$kw$binding,datascript.parser.source(binding__$1)], null));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (binding__$1){
return (function (p1__24186_SHARP_,p2__24187_SHARP_){
return datascript.query.in__GT_rel(p1__24186_SHARP_,p2__24187_SHARP_);
});})(binding__$1))
,cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(binding__$1),coll));

}
}
});
datascript.query.resolve_in = (function datascript$query$resolve_in(context,p__24188){
var vec__24189 = p__24188;
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24189,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24189,(1),null);
if((((binding instanceof datascript.parser.BindScalar)) && ((cljs.core.cst$kw$variable.cljs$core$IFn$_invoke$arity$1(binding) instanceof datascript.parser.SrcVar)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(context,cljs.core.cst$kw$sources,cljs.core.assoc,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(binding,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$variable,cljs.core.cst$kw$symbol], null)),value);
} else {
if((((binding instanceof datascript.parser.BindScalar)) && ((cljs.core.cst$kw$variable.cljs$core$IFn$_invoke$arity$1(binding) instanceof datascript.parser.RulesVar)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$rules,datascript.query.parse_rules(value));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,cljs.core.cst$kw$rels,cljs.core.conj,datascript.query.in__GT_rel(binding,value));

}
}
});
datascript.query.resolve_ins = (function datascript$query$resolve_ins(context,bindings,values){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_in,context,cljs.core.zipmap(bindings,values));
});
/**
 * List of symbols in current pattern that might potentiall be resolved to refs
 */
datascript.query._STAR_lookup_attrs_STAR_ = null;
/**
 * Default pattern source. Lookup refs, patterns, rules will be resolved with it
 */
datascript.query._STAR_implicit_source_STAR_ = null;
datascript.query.getter_fn = (function datascript$query$getter_fn(attrs,attr){
var idx = (attrs.cljs$core$IFn$_invoke$arity$1 ? attrs.cljs$core$IFn$_invoke$arity$1(attr) : attrs.call(null,attr));
if(cljs.core.contains_QMARK_(datascript.query._STAR_lookup_attrs_STAR_,attr)){
return ((function (idx){
return (function (tuple){
var eid = (tuple[idx]);
if(typeof eid === 'number'){
return eid;
} else {
if(cljs.core.sequential_QMARK_(eid)){
return datascript.db.entid(datascript.query._STAR_implicit_source_STAR_,eid);
} else {
if(me.tonsky.persistent_sorted_set.arrays.array_QMARK_(eid)){
return datascript.db.entid(datascript.query._STAR_implicit_source_STAR_,eid);
} else {
return eid;

}
}
}
});
;})(idx))
} else {
return ((function (idx){
return (function (tuple){
return (tuple[idx]);
});
;})(idx))
}
});
datascript.query.tuple_key_fn = (function datascript$query$tuple_key_fn(getters){
if((cljs.core.count(getters) === (1))){
return cljs.core.first(getters);
} else {
var getters__$1 = cljs.core.to_array(getters);
return ((function (getters__$1){
return (function (tuple){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$1(getters__$1.map(((function (getters__$1){
return (function (p1__24192_SHARP_){
return (p1__24192_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24192_SHARP_.cljs$core$IFn$_invoke$arity$1(tuple) : p1__24192_SHARP_.call(null,tuple));
});})(getters__$1))
));
});
;})(getters__$1))
}
});
datascript.query.hash_attrs = (function datascript$query$hash_attrs(key_fn,tuples){
var tuples__$1 = tuples;
var hash_table = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
var temp__5722__auto__ = cljs.core.first(tuples__$1);
if((temp__5722__auto__ == null)){
return cljs.core.persistent_BANG_(hash_table);
} else {
var tuple = temp__5722__auto__;
var key = (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(tuple) : key_fn.call(null,tuple));
var G__24194 = cljs.core.next(tuples__$1);
var G__24195 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.List.EMPTY),tuple));
tuples__$1 = G__24194;
hash_table = G__24195;
continue;
}
break;
}
});
datascript.query.hash_join = (function datascript$query$hash_join(rel1,rel2){
var tuples1 = cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel1);
var tuples2 = cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel2);
var attrs1 = cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel1);
var attrs2 = cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel2);
var common_attrs = cljs.core.vec(datascript.query.intersect_keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel1),cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel2)));
var common_gtrs1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (tuples1,tuples2,attrs1,attrs2,common_attrs){
return (function (p1__24196_SHARP_){
return datascript.query.getter_fn(attrs1,p1__24196_SHARP_);
});})(tuples1,tuples2,attrs1,attrs2,common_attrs))
,common_attrs);
var common_gtrs2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1){
return (function (p1__24197_SHARP_){
return datascript.query.getter_fn(attrs2,p1__24197_SHARP_);
});})(tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1))
,common_attrs);
var keep_attrs1 = cljs.core.keys(attrs1);
var keep_attrs2 = cljs.core.vec(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs2)),cljs.core.set(cljs.core.keys(attrs1))));
var keep_idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs1,keep_attrs1));
var keep_idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs2,keep_attrs2));
var key_fn1 = datascript.query.tuple_key_fn(common_gtrs1);
var hash = datascript.query.hash_attrs(key_fn1,tuples1);
var key_fn2 = datascript.query.tuple_key_fn(common_gtrs2);
var new_tuples = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2){
return (function (acc,tuple2){
var key = (key_fn2.cljs$core$IFn$_invoke$arity$1 ? key_fn2.cljs$core$IFn$_invoke$arity$1(tuple2) : key_fn2.call(null,tuple2));
var temp__5722__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(hash,key);
if((temp__5722__auto__ == null)){
return acc;
} else {
var tuples1__$1 = temp__5722__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tuples1__$1,temp__5722__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2){
return (function (acc__$1,tuple1){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datascript.query.join_tuples(tuple1,keep_idxs1,tuple2,keep_idxs2));
});})(tuples1__$1,temp__5722__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2))
,acc,tuples1__$1);
}
});})(tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),tuples2));
return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(keep_attrs1,keep_attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),new_tuples,null,null,null));
});
datascript.query.subtract_rel = (function datascript$query$subtract_rel(a,b){
var map__24201 = a;
var map__24201__$1 = ((((!((map__24201 == null)))?(((((map__24201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24201):map__24201);
var attrs_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24201__$1,cljs.core.cst$kw$attrs);
var tuples_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24201__$1,cljs.core.cst$kw$tuples);
var map__24202 = b;
var map__24202__$1 = ((((!((map__24202 == null)))?(((((map__24202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24202):map__24202);
var attrs_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24202__$1,cljs.core.cst$kw$attrs);
var tuples_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24202__$1,cljs.core.cst$kw$tuples);
var attrs = datascript.query.intersect_keys(attrs_a,attrs_b);
var getters_b = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__24201,map__24201__$1,attrs_a,tuples_a,map__24202,map__24202__$1,attrs_b,tuples_b,attrs){
return (function (p1__24198_SHARP_){
return datascript.query.getter_fn(attrs_b,p1__24198_SHARP_);
});})(map__24201,map__24201__$1,attrs_a,tuples_a,map__24202,map__24202__$1,attrs_b,tuples_b,attrs))
,attrs);
var key_fn_b = datascript.query.tuple_key_fn(getters_b);
var hash = datascript.query.hash_attrs(key_fn_b,tuples_b);
var getters_a = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__24201,map__24201__$1,attrs_a,tuples_a,map__24202,map__24202__$1,attrs_b,tuples_b,attrs,getters_b,key_fn_b,hash){
return (function (p1__24199_SHARP_){
return datascript.query.getter_fn(attrs_a,p1__24199_SHARP_);
});})(map__24201,map__24201__$1,attrs_a,tuples_a,map__24202,map__24202__$1,attrs_b,tuples_b,attrs,getters_b,key_fn_b,hash))
,attrs);
var key_fn_a = datascript.query.tuple_key_fn(getters_a);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,cljs.core.cst$kw$tuples,cljs.core.filterv(((function (map__24201,map__24201__$1,attrs_a,tuples_a,map__24202,map__24202__$1,attrs_b,tuples_b,attrs,getters_b,key_fn_b,hash,getters_a,key_fn_a){
return (function (p1__24200_SHARP_){
return ((function (){var G__24205 = (key_fn_a.cljs$core$IFn$_invoke$arity$1 ? key_fn_a.cljs$core$IFn$_invoke$arity$1(p1__24200_SHARP_) : key_fn_a.call(null,p1__24200_SHARP_));
return (hash.cljs$core$IFn$_invoke$arity$1 ? hash.cljs$core$IFn$_invoke$arity$1(G__24205) : hash.call(null,G__24205));
})() == null);
});})(map__24201,map__24201__$1,attrs_a,tuples_a,map__24202,map__24202__$1,attrs_b,tuples_b,attrs,getters_b,key_fn_b,hash,getters_a,key_fn_a))
,tuples_a));
});
datascript.query.lookup_pattern_db = (function datascript$query$lookup_pattern_db(db,pattern){
var search_pattern = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__24206_SHARP_){
if((p1__24206_SHARP_ instanceof cljs.core.Symbol)){
return null;
} else {
return p1__24206_SHARP_;
}
}),pattern);
var datoms = datascript.db._search(db,search_pattern);
var attr__GT_prop = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (search_pattern,datoms){
return (function (p__24207){
var vec__24208 = p__24207;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24208,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24208,(1),null);
return datascript.query.free_var_QMARK_(s);
});})(search_pattern,datoms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","v","tx"], null))));
return (new datascript.query.Relation(attr__GT_prop,datoms,null,null,null));
});
datascript.query.matches_pattern_QMARK_ = (function datascript$query$matches_pattern_QMARK_(pattern,tuple){
var tuple__$1 = tuple;
var pattern__$1 = pattern;
while(true){
if(cljs.core.truth_((function (){var and__3938__auto__ = tuple__$1;
if(cljs.core.truth_(and__3938__auto__)){
return pattern__$1;
} else {
return and__3938__auto__;
}
})())){
var t = cljs.core.first(tuple__$1);
var p = cljs.core.first(pattern__$1);
if((((p instanceof cljs.core.Symbol)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,p)))){
var G__24211 = cljs.core.next(tuple__$1);
var G__24212 = cljs.core.next(pattern__$1);
tuple__$1 = G__24211;
pattern__$1 = G__24212;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
});
datascript.query.lookup_pattern_coll = (function datascript$query$lookup_pattern_coll(coll,pattern){
var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__24213_SHARP_){
return datascript.query.matches_pattern_QMARK_(pattern,p1__24213_SHARP_);
}),coll);
var attr__GT_idx = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (data){
return (function (p__24214){
var vec__24215 = p__24214;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24215,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24215,(1),null);
return datascript.query.free_var_QMARK_(s);
});})(data))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,cljs.core.range.cljs$core$IFn$_invoke$arity$0())));
return (new datascript.query.Relation(attr__GT_idx,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,data),null,null,null));
});
datascript.query.normalize_pattern_clause = (function datascript$query$normalize_pattern_clause(clause){
if(cljs.core.truth_(datascript.query.source_QMARK_(cljs.core.first(clause)))){
return clause;
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$$], null),clause);
}
});
datascript.query.lookup_pattern = (function datascript$query$lookup_pattern(source,pattern){
if(((!((source == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$ISearch$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,source))){
return datascript.query.lookup_pattern_db(source,pattern);
} else {
return datascript.query.lookup_pattern_coll(source,pattern);

}
});
datascript.query.collapse_rels = (function datascript$query$collapse_rels(rels,new_rel){
var rels__$1 = rels;
var new_rel__$1 = new_rel;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5722__auto__ = cljs.core.first(rels__$1);
if((temp__5722__auto__ == null)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new_rel__$1);
} else {
var rel = temp__5722__auto__;
if(cljs.core.truth_(cljs.core.not_empty(datascript.query.intersect_keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(new_rel__$1),cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel))))){
var G__24219 = cljs.core.next(rels__$1);
var G__24220 = datascript.query.hash_join(rel,new_rel__$1);
var G__24221 = acc;
rels__$1 = G__24219;
new_rel__$1 = G__24220;
acc = G__24221;
continue;
} else {
var G__24222 = cljs.core.next(rels__$1);
var G__24223 = new_rel__$1;
var G__24224 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,rel);
rels__$1 = G__24222;
new_rel__$1 = G__24223;
acc = G__24224;
continue;
}
}
break;
}
});
datascript.query.rel_with_attr = (function datascript$query$rel_with_attr(context,sym){
return cljs.core.some((function (p1__24225_SHARP_){
if(cljs.core.contains_QMARK_(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(p1__24225_SHARP_),sym)){
return p1__24225_SHARP_;
} else {
return null;
}
}),cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context));
});
datascript.query.context_resolve_val = (function datascript$query$context_resolve_val(context,sym){
var temp__5724__auto__ = datascript.query.rel_with_attr(context,sym);
if((temp__5724__auto__ == null)){
return null;
} else {
var rel = temp__5724__auto__;
var temp__5724__auto____$1 = cljs.core.first(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel));
if((temp__5724__auto____$1 == null)){
return null;
} else {
var tuple = temp__5724__auto____$1;
return (tuple[(function (){var fexpr__24226 = cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel);
return (fexpr__24226.cljs$core$IFn$_invoke$arity$1 ? fexpr__24226.cljs$core$IFn$_invoke$arity$1(sym) : fexpr__24226.call(null,sym));
})()]);
}
}
});
datascript.query.rel_contains_attrs_QMARK_ = (function datascript$query$rel_contains_attrs_QMARK_(rel,attrs){
return cljs.core.some((function (p1__24227_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel),p1__24227_SHARP_);
}),attrs);
});
datascript.query.rel_prod_by_attrs = (function datascript$query$rel_prod_by_attrs(context,attrs){
var rels = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__24228_SHARP_){
return datascript.query.rel_contains_attrs_QMARK_(p1__24228_SHARP_,attrs);
}),cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context));
var production = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,rels);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$rels,((function (rels,production){
return (function (p1__24229_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(rels),p1__24229_SHARP_);
});})(rels,production))
),production], null);
});
datascript.query._call_fn = (function datascript$query$_call_fn(context,rel,f,args){
var sources = cljs.core.cst$kw$sources.cljs$core$IFn$_invoke$arity$1(context);
var attrs = cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel);
var len = cljs.core.count(args);
var static_args = me.tonsky.persistent_sorted_set.arrays.make_array(len);
var tuples_args = me.tonsky.persistent_sorted_set.arrays.make_array(len);
var n__4408__auto___24230 = len;
var i_24231 = (0);
while(true){
if((i_24231 < n__4408__auto___24230)){
var arg_24232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,i_24231);
if((arg_24232 instanceof cljs.core.Symbol)){
var temp__5722__auto___24233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sources,arg_24232);
if((temp__5722__auto___24233 == null)){
(tuples_args[i_24231] = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,arg_24232));
} else {
var source_24234 = temp__5722__auto___24233;
(static_args[i_24231] = source_24234);
}
} else {
(static_args[i_24231] = arg_24232);
}

var G__24235 = (i_24231 + (1));
i_24231 = G__24235;
continue;
} else {
}
break;
}

if((f === cljs.core.vector)){
return ((function (sources,attrs,len,static_args,tuples_args){
return (function (tuple){
var args__$1 = me.tonsky.persistent_sorted_set.arrays.aclone(static_args);
var n__4408__auto___24236 = len;
var i_24237 = (0);
while(true){
if((i_24237 < n__4408__auto___24236)){
var temp__5724__auto___24238 = (tuples_args[i_24237]);
if((temp__5724__auto___24238 == null)){
} else {
var tuple_idx_24239 = temp__5724__auto___24238;
var v_24240 = (tuple[tuple_idx_24239]);
(args__$1[i_24237] = v_24240);
}

var G__24241 = (i_24237 + (1));
i_24237 = G__24241;
continue;
} else {
}
break;
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});
;})(sources,attrs,len,static_args,tuples_args))
} else {
return ((function (sources,attrs,len,static_args,tuples_args){
return (function (tuple){
var n__4408__auto___24242 = len;
var i_24243 = (0);
while(true){
if((i_24243 < n__4408__auto___24242)){
var temp__5724__auto___24244 = (tuples_args[i_24243]);
if((temp__5724__auto___24244 == null)){
} else {
var tuple_idx_24245 = temp__5724__auto___24244;
var v_24246 = (tuple[tuple_idx_24245]);
(static_args[i_24243] = v_24246);
}

var G__24247 = (i_24243 + (1));
i_24243 = G__24247;
continue;
} else {
}
break;
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,static_args);
});
;})(sources,attrs,len,static_args,tuples_args))
}
});
datascript.query.resolve_sym = (function datascript$query$resolve_sym(sym){
return null;
});
datascript.query.filter_by_pred = (function datascript$query$filter_by_pred(context,clause){
var vec__24249 = clause;
var vec__24252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24249,(0),null);
var seq__24253 = cljs.core.seq(vec__24252);
var first__24254 = cljs.core.first(seq__24253);
var seq__24253__$1 = cljs.core.next(seq__24253);
var f = first__24254;
var args = seq__24253__$1;
var pred = (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = datascript.query.context_resolve_val(context,f);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = datascript.query.resolve_sym(f);
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
if((datascript.query.rel_with_attr(context,f) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown predicate '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0)))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_where,cljs.core.cst$kw$form,clause,cljs.core.cst$kw$var,f], null));
} else {
return null;
}
}
}
}
})();
var vec__24255 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24255,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24255,(1),null);
var new_rel = (cljs.core.truth_(pred)?(function (){var tuple_pred = datascript.query._call_fn(context__$1,production,pred,args);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(production,cljs.core.cst$kw$tuples,((function (tuple_pred,vec__24249,vec__24252,seq__24253,first__24254,seq__24253__$1,f,args,pred,vec__24255,context__$1,production){
return (function (p1__24248_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(tuple_pred,p1__24248_SHARP_);
});})(tuple_pred,vec__24249,vec__24252,seq__24253,first__24254,seq__24253__$1,f,args,pred,vec__24255,context__$1,production))
);
})():cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,cljs.core.cst$kw$tuples,cljs.core.PersistentVector.EMPTY));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context__$1,cljs.core.cst$kw$rels,cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function datascript$query$bind_by_fn(context,clause){
var vec__24258 = clause;
var vec__24261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24258,(0),null);
var seq__24262 = cljs.core.seq(vec__24261);
var first__24263 = cljs.core.first(seq__24262);
var seq__24262__$1 = cljs.core.next(seq__24262);
var f = first__24263;
var args = seq__24262__$1;
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24258,(1),null);
var binding = datascript.parser.parse_binding(out);
var fun = (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = datascript.query.context_resolve_val(context,f);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = datascript.query.resolve_sym(f);
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
if((datascript.query.rel_with_attr(context,f) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown function '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0)))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_where,cljs.core.cst$kw$form,clause,cljs.core.cst$kw$var,f], null));
} else {
return null;
}
}
}
}
})();
var vec__24264 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24264,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24264,(1),null);
var new_rel = (cljs.core.truth_(fun)?(function (){var tuple_fn = datascript.query._call_fn(context__$1,production,fun,args);
var rels = (function (){var iter__4324__auto__ = ((function (tuple_fn,vec__24258,vec__24261,seq__24262,first__24263,seq__24262__$1,f,args,out,binding,fun,vec__24264,context__$1,production){
return (function datascript$query$bind_by_fn_$_iter__24267(s__24268){
return (new cljs.core.LazySeq(null,((function (tuple_fn,vec__24258,vec__24261,seq__24262,first__24263,seq__24262__$1,f,args,out,binding,fun,vec__24264,context__$1,production){
return (function (){
var s__24268__$1 = s__24268;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__24268__$1);
if(temp__5720__auto__){
var s__24268__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24268__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__24268__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__24270 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__24269 = (0);
while(true){
if((i__24269 < size__4323__auto__)){
var tuple = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__24269);
var val = (tuple_fn.cljs$core$IFn$_invoke$arity$1 ? tuple_fn.cljs$core$IFn$_invoke$arity$1(tuple) : tuple_fn.call(null,tuple));
if(!((val == null))){
cljs.core.chunk_append(b__24270,datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)));

var G__24271 = (i__24269 + (1));
i__24269 = G__24271;
continue;
} else {
var G__24272 = (i__24269 + (1));
i__24269 = G__24272;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24270),datascript$query$bind_by_fn_$_iter__24267(cljs.core.chunk_rest(s__24268__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24270),null);
}
} else {
var tuple = cljs.core.first(s__24268__$2);
var val = (tuple_fn.cljs$core$IFn$_invoke$arity$1 ? tuple_fn.cljs$core$IFn$_invoke$arity$1(tuple) : tuple_fn.call(null,tuple));
if(!((val == null))){
return cljs.core.cons(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)),datascript$query$bind_by_fn_$_iter__24267(cljs.core.rest(s__24268__$2)));
} else {
var G__24273 = cljs.core.rest(s__24268__$2);
s__24268__$1 = G__24273;
continue;
}
}
} else {
return null;
}
break;
}
});})(tuple_fn,vec__24258,vec__24261,seq__24262,first__24263,seq__24262__$1,f,args,out,binding,fun,vec__24264,context__$1,production))
,null,null));
});})(tuple_fn,vec__24258,vec__24261,seq__24262,first__24263,seq__24262__$1,f,args,out,binding,fun,vec__24264,context__$1,production))
;
return iter__4324__auto__(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(production));
})();
if(cljs.core.empty_QMARK_(rels)){
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2(production,datascript.query.empty_rel(binding));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels);
}
})():datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,cljs.core.cst$kw$tuples,cljs.core.PersistentVector.EMPTY),datascript.query.empty_rel(binding)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context__$1,cljs.core.cst$kw$rels,datascript.query.collapse_rels,new_rel);
});
datascript.query.rule_QMARK_ = (function datascript$query$rule_QMARK_(context,clause){
return ((cljs.core.sequential_QMARK_(clause)) && (cljs.core.contains_QMARK_(cljs.core.cst$kw$rules.cljs$core$IFn$_invoke$arity$1(context),(cljs.core.truth_(datascript.query.source_QMARK_(cljs.core.first(clause)))?cljs.core.second(clause):cljs.core.first(clause)))));
});
datascript.query.rule_seqid = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
datascript.query.expand_rule = (function datascript$query$expand_rule(clause,context,used_args){
var vec__24275 = clause;
var seq__24276 = cljs.core.seq(vec__24275);
var first__24277 = cljs.core.first(seq__24276);
var seq__24276__$1 = cljs.core.next(seq__24276);
var rule = first__24277;
var call_args = seq__24276__$1;
var seqid = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(datascript.query.rule_seqid,cljs.core.inc);
var branches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rules.cljs$core$IFn$_invoke$arity$1(context),rule);
var iter__4324__auto__ = ((function (vec__24275,seq__24276,first__24277,seq__24276__$1,rule,call_args,seqid,branches){
return (function datascript$query$expand_rule_$_iter__24278(s__24279){
return (new cljs.core.LazySeq(null,((function (vec__24275,seq__24276,first__24277,seq__24276__$1,rule,call_args,seqid,branches){
return (function (){
var s__24279__$1 = s__24279;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__24279__$1);
if(temp__5720__auto__){
var s__24279__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24279__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__24279__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__24281 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__24280 = (0);
while(true){
if((i__24280 < size__4323__auto__)){
var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__24280);
var vec__24282 = branch;
var seq__24283 = cljs.core.seq(vec__24282);
var first__24284 = cljs.core.first(seq__24283);
var seq__24283__$1 = cljs.core.next(seq__24283);
var vec__24285 = first__24284;
var seq__24286 = cljs.core.seq(vec__24285);
var first__24287 = cljs.core.first(seq__24286);
var seq__24286__$1 = cljs.core.next(seq__24286);
var _ = first__24287;
var rule_args = seq__24286__$1;
var clauses = seq__24283__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
cljs.core.chunk_append(b__24281,clojure.walk.postwalk(((function (i__24280,vec__24282,seq__24283,first__24284,seq__24283__$1,vec__24285,seq__24286,first__24287,seq__24286__$1,_,rule_args,clauses,replacements,branch,c__4322__auto__,size__4323__auto__,b__24281,s__24279__$2,temp__5720__auto__,vec__24275,seq__24276,first__24277,seq__24276__$1,rule,call_args,seqid,branches){
return (function (p1__24274_SHARP_){
if(cljs.core.truth_(datascript.query.free_var_QMARK_(p1__24274_SHARP_))){
var x__20798__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__24274_SHARP_) : replacements.call(null,p1__24274_SHARP_));
if((x__20798__auto__ == null)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__24274_SHARP_)),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__20798__auto__;
}
} else {
return p1__24274_SHARP_;
}
});})(i__24280,vec__24282,seq__24283,first__24284,seq__24283__$1,vec__24285,seq__24286,first__24287,seq__24286__$1,_,rule_args,clauses,replacements,branch,c__4322__auto__,size__4323__auto__,b__24281,s__24279__$2,temp__5720__auto__,vec__24275,seq__24276,first__24277,seq__24276__$1,rule,call_args,seqid,branches))
,clauses));

var G__24294 = (i__24280 + (1));
i__24280 = G__24294;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24281),datascript$query$expand_rule_$_iter__24278(cljs.core.chunk_rest(s__24279__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24281),null);
}
} else {
var branch = cljs.core.first(s__24279__$2);
var vec__24288 = branch;
var seq__24289 = cljs.core.seq(vec__24288);
var first__24290 = cljs.core.first(seq__24289);
var seq__24289__$1 = cljs.core.next(seq__24289);
var vec__24291 = first__24290;
var seq__24292 = cljs.core.seq(vec__24291);
var first__24293 = cljs.core.first(seq__24292);
var seq__24292__$1 = cljs.core.next(seq__24292);
var _ = first__24293;
var rule_args = seq__24292__$1;
var clauses = seq__24289__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
return cljs.core.cons(clojure.walk.postwalk(((function (vec__24288,seq__24289,first__24290,seq__24289__$1,vec__24291,seq__24292,first__24293,seq__24292__$1,_,rule_args,clauses,replacements,branch,s__24279__$2,temp__5720__auto__,vec__24275,seq__24276,first__24277,seq__24276__$1,rule,call_args,seqid,branches){
return (function (p1__24274_SHARP_){
if(cljs.core.truth_(datascript.query.free_var_QMARK_(p1__24274_SHARP_))){
var x__20798__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__24274_SHARP_) : replacements.call(null,p1__24274_SHARP_));
if((x__20798__auto__ == null)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__24274_SHARP_)),"__auto__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
} else {
return x__20798__auto__;
}
} else {
return p1__24274_SHARP_;
}
});})(vec__24288,seq__24289,first__24290,seq__24289__$1,vec__24291,seq__24292,first__24293,seq__24292__$1,_,rule_args,clauses,replacements,branch,s__24279__$2,temp__5720__auto__,vec__24275,seq__24276,first__24277,seq__24276__$1,rule,call_args,seqid,branches))
,clauses),datascript$query$expand_rule_$_iter__24278(cljs.core.rest(s__24279__$2)));
}
} else {
return null;
}
break;
}
});})(vec__24275,seq__24276,first__24277,seq__24276__$1,rule,call_args,seqid,branches))
,null,null));
});})(vec__24275,seq__24276,first__24277,seq__24276__$1,rule,call_args,seqid,branches))
;
return iter__4324__auto__(branches);
});
datascript.query.remove_pairs = (function datascript$query$remove_pairs(xs,ys){
var pairs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__24295){
var vec__24296 = p__24295;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24296,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24296,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,ys));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function datascript$query$rule_gen_guards(rule_clause,used_args){
var vec__24299 = rule_clause;
var seq__24300 = cljs.core.seq(vec__24299);
var first__24301 = cljs.core.first(seq__24300);
var seq__24300__$1 = cljs.core.next(seq__24300);
var rule = first__24301;
var call_args = seq__24300__$1;
var prev_call_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(used_args,rule);
var iter__4324__auto__ = ((function (vec__24299,seq__24300,first__24301,seq__24300__$1,rule,call_args,prev_call_args){
return (function datascript$query$rule_gen_guards_$_iter__24302(s__24303){
return (new cljs.core.LazySeq(null,((function (vec__24299,seq__24300,first__24301,seq__24300__$1,rule,call_args,prev_call_args){
return (function (){
var s__24303__$1 = s__24303;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__24303__$1);
if(temp__5720__auto__){
var s__24303__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24303__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__24303__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__24305 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__24304 = (0);
while(true){
if((i__24304 < size__4323__auto__)){
var prev_args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__24304);
var vec__24306 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24306,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24306,(1),null);
cljs.core.chunk_append(b__24305,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_DASH_differ_QMARK_], null),call_args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_args__$1], 0))], null));

var G__24312 = (i__24304 + (1));
i__24304 = G__24312;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24305),datascript$query$rule_gen_guards_$_iter__24302(cljs.core.chunk_rest(s__24303__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24305),null);
}
} else {
var prev_args = cljs.core.first(s__24303__$2);
var vec__24309 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24309,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24309,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_DASH_differ_QMARK_], null),call_args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_args__$1], 0))], null),datascript$query$rule_gen_guards_$_iter__24302(cljs.core.rest(s__24303__$2)));
}
} else {
return null;
}
break;
}
});})(vec__24299,seq__24300,first__24301,seq__24300__$1,rule,call_args,prev_call_args))
,null,null));
});})(vec__24299,seq__24300,first__24301,seq__24300__$1,rule,call_args,prev_call_args))
;
return iter__4324__auto__(prev_call_args);
});
datascript.query.walk_collect = (function datascript$query$walk_collect(form,pred){
var res = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk(((function (res){
return (function (p1__24313_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__24313_SHARP_) : pred.call(null,p1__24313_SHARP_)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.conj,p1__24313_SHARP_);
} else {
}

return p1__24313_SHARP_;
});})(res))
,form);

return cljs.core.deref(res);
});
datascript.query.collect_vars = (function datascript$query$collect_vars(clause){
return cljs.core.set(datascript.query.walk_collect(clause,datascript.query.free_var_QMARK_));
});
datascript.query.split_guards = (function datascript$query$split_guards(clauses,guards){
var bound_vars = datascript.query.collect_vars(clauses);
var pred = ((function (bound_vars){
return (function (p__24314){
var vec__24315 = p__24314;
var vec__24318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24315,(0),null);
var seq__24319 = cljs.core.seq(vec__24318);
var first__24320 = cljs.core.first(seq__24319);
var seq__24319__$1 = cljs.core.next(seq__24319);
var _ = first__24320;
var vars = seq__24319__$1;
return cljs.core.every_QMARK_(bound_vars,vars);
});})(bound_vars))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,guards),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pred,guards)], null);
});
datascript.query.solve_rule = (function datascript$query$solve_rule(context,clause){
var final_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,clause);
var final_attrs_map = cljs.core.zipmap(final_attrs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var solve = ((function (final_attrs,final_attrs_map){
return (function (prefix_context,clauses){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query._resolve_clause,prefix_context,clauses);
});})(final_attrs,final_attrs_map))
;
var empty_rels_QMARK_ = ((function (final_attrs,final_attrs_map,solve){
return (function (context__$1){
return cljs.core.some(((function (final_attrs,final_attrs_map,solve){
return (function (p1__24321_SHARP_){
return cljs.core.empty_QMARK_(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(p1__24321_SHARP_));
});})(final_attrs,final_attrs_map,solve))
,cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context__$1));
});})(final_attrs,final_attrs_map,solve))
;
var stack = (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$prefix_DASH_clauses,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$prefix_DASH_context,context,cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$used_DASH_args,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$pending_DASH_guards,cljs.core.PersistentArrayMap.EMPTY], null),null,(1),null));
var rel = (new datascript.query.Relation(final_attrs_map,cljs.core.PersistentVector.EMPTY,null,null,null));
while(true){
var temp__5722__auto__ = cljs.core.first(stack);
if((temp__5722__auto__ == null)){
return rel;
} else {
var frame = temp__5722__auto__;
var vec__24324 = cljs.core.split_with(((function (stack,rel,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__24322_SHARP_){
return cljs.core.not(datascript.query.rule_QMARK_(context,p1__24322_SHARP_));
});})(stack,rel,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(frame));
var clauses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24324,(0),null);
var vec__24327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24324,(1),null);
var seq__24328 = cljs.core.seq(vec__24327);
var first__24329 = cljs.core.first(seq__24328);
var seq__24328__$1 = cljs.core.next(seq__24328);
var rule_clause = first__24329;
var next_clauses = seq__24328__$1;
if((rule_clause == null)){
var context__$1 = solve(cljs.core.cst$kw$prefix_DASH_context.cljs$core$IFn$_invoke$arity$1(frame),clauses);
var tuples = (datascript.query._collect.cljs$core$IFn$_invoke$arity$2 ? datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context__$1,final_attrs) : datascript.query._collect.call(null,context__$1,final_attrs));
var new_rel = (new datascript.query.Relation(final_attrs_map,tuples,null,null,null));
var G__24340 = cljs.core.next(stack);
var G__24341 = datascript.query.sum_rel(rel,new_rel);
stack = G__24340;
rel = G__24341;
continue;
} else {
var vec__24330 = rule_clause;
var seq__24331 = cljs.core.seq(vec__24330);
var first__24332 = cljs.core.first(seq__24331);
var seq__24331__$1 = cljs.core.next(seq__24331);
var rule = first__24332;
var call_args = seq__24331__$1;
var guards = datascript.query.rule_gen_guards(rule_clause,cljs.core.cst$kw$used_DASH_args.cljs$core$IFn$_invoke$arity$1(frame));
var vec__24333 = datascript.query.split_guards(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$prefix_DASH_clauses.cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(guards,cljs.core.cst$kw$pending_DASH_guards.cljs$core$IFn$_invoke$arity$1(frame)));
var active_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24333,(0),null);
var pending_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24333,(1),null);
if(cljs.core.truth_(cljs.core.some(((function (stack,rel,vec__24330,seq__24331,first__24332,seq__24331__$1,rule,call_args,guards,vec__24333,active_gs,pending_gs,vec__24324,clauses,vec__24327,seq__24328,first__24329,seq__24328__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__24323_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__24323_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$_DASH_differ_QMARK_)], null));
});})(stack,rel,vec__24330,seq__24331,first__24332,seq__24331__$1,rule,call_args,guards,vec__24333,active_gs,pending_gs,vec__24324,clauses,vec__24327,seq__24328,first__24329,seq__24328__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs))){
var G__24342 = cljs.core.next(stack);
var G__24343 = rel;
stack = G__24342;
rel = G__24343;
continue;
} else {
var prefix_clauses = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clauses,active_gs);
var prefix_context = solve(cljs.core.cst$kw$prefix_DASH_context.cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);
if(cljs.core.truth_(empty_rels_QMARK_(prefix_context))){
var G__24344 = cljs.core.next(stack);
var G__24345 = rel;
stack = G__24344;
rel = G__24345;
continue;
} else {
var used_args = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$used_DASH_args.cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$used_DASH_args.cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));
var branches = datascript.query.expand_rule(rule_clause,context,used_args);
var G__24346 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4324__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__24330,seq__24331,first__24332,seq__24331__$1,rule,call_args,guards,vec__24333,active_gs,pending_gs,vec__24324,clauses,vec__24327,seq__24328,first__24329,seq__24328__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function datascript$query$solve_rule_$_iter__24336(s__24337){
return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__24330,seq__24331,first__24332,seq__24331__$1,rule,call_args,guards,vec__24333,active_gs,pending_gs,vec__24324,clauses,vec__24327,seq__24328,first__24329,seq__24328__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){
var s__24337__$1 = s__24337;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__24337__$1);
if(temp__5720__auto__){
var s__24337__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24337__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__24337__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__24339 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__24338 = (0);
while(true){
if((i__24338 < size__4323__auto__)){
var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__24338);
cljs.core.chunk_append(b__24339,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$prefix_DASH_clauses,prefix_clauses,cljs.core.cst$kw$prefix_DASH_context,prefix_context,cljs.core.cst$kw$clauses,datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,next_clauses], 0)),cljs.core.cst$kw$used_DASH_args,used_args,cljs.core.cst$kw$pending_DASH_guards,pending_gs], null));

var G__24348 = (i__24338 + (1));
i__24338 = G__24348;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24339),datascript$query$solve_rule_$_iter__24336(cljs.core.chunk_rest(s__24337__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24339),null);
}
} else {
var branch = cljs.core.first(s__24337__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$prefix_DASH_clauses,prefix_clauses,cljs.core.cst$kw$prefix_DASH_context,prefix_context,cljs.core.cst$kw$clauses,datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,next_clauses], 0)),cljs.core.cst$kw$used_DASH_args,used_args,cljs.core.cst$kw$pending_DASH_guards,pending_gs], null),datascript$query$solve_rule_$_iter__24336(cljs.core.rest(s__24337__$2)));
}
} else {
return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__24330,seq__24331,first__24332,seq__24331__$1,rule,call_args,guards,vec__24333,active_gs,pending_gs,vec__24324,clauses,vec__24327,seq__24328,first__24329,seq__24328__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__24330,seq__24331,first__24332,seq__24331__$1,rule,call_args,guards,vec__24333,active_gs,pending_gs,vec__24324,clauses,vec__24327,seq__24328,first__24329,seq__24328__$1,rule_clause,next_clauses,frame,temp__5722__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;
return iter__4324__auto__(branches);
})(),cljs.core.next(stack));
var G__24347 = rel;
stack = G__24346;
rel = G__24347;
continue;
}
}
}
}
break;
}
});
datascript.query.resolve_pattern_lookup_refs = (function datascript$query$resolve_pattern_lookup_refs(source,pattern){
if(((!((source == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source))){
var vec__24350 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24350,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24350,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24350,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24350,(3),null);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__3949__auto__ = datascript.query.lookup_ref_QMARK_(e);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return datascript.query.attr_QMARK_(e);
}
})())?datascript.db.entid_strict(source,e):e),a,(cljs.core.truth_((function (){var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
var and__3938__auto____$1 = datascript.query.attr_QMARK_(a);
if(cljs.core.truth_(and__3938__auto____$1)){
var and__3938__auto____$2 = datascript.db.ref_QMARK_(source,a);
if(and__3938__auto____$2){
var or__3949__auto__ = datascript.query.lookup_ref_QMARK_(v);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return datascript.query.attr_QMARK_(v);
}
} else {
return and__3938__auto____$2;
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())?datascript.db.entid_strict(source,v):v),(cljs.core.truth_(datascript.query.lookup_ref_QMARK_(tx))?datascript.db.entid_strict(source,tx):tx)], null),(0),cljs.core.count(pattern));
} else {
return pattern;
}
});
datascript.query.dynamic_lookup_attrs = (function datascript$query$dynamic_lookup_attrs(source,pattern){
var vec__24353 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24353,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24353,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24353,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24353,(3),null);
var G__24356 = cljs.core.PersistentHashSet.EMPTY;
var G__24356__$1 = (cljs.core.truth_(datascript.query.free_var_QMARK_(e))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__24356,e):G__24356);
var G__24356__$2 = (cljs.core.truth_(datascript.query.free_var_QMARK_(tx))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__24356__$1,tx):G__24356__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = datascript.query.free_var_QMARK_(v);
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not(datascript.query.free_var_QMARK_(a))) && (datascript.db.ref_QMARK_(source,a)));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__24356__$2,v);
} else {
return G__24356__$2;
}
});
datascript.query.limit_rel = (function datascript$query$limit_rel(rel,vars){
var temp__5724__auto__ = cljs.core.not_empty(cljs.core.select_keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel),vars));
if((temp__5724__auto__ == null)){
return null;
} else {
var attrs_SINGLEQUOTE_ = temp__5724__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rel,cljs.core.cst$kw$attrs,attrs_SINGLEQUOTE_);
}
});
datascript.query.limit_context = (function datascript$query$limit_context(context,vars){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$rels,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__24357_SHARP_){
return datascript.query.limit_rel(p1__24357_SHARP_,vars);
}),cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context)));
});
datascript.query.check_bound = (function datascript$query$check_bound(context,vars,form){
var bound = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__24358_SHARP_){
return cljs.core.keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(p1__24358_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context)], 0)));
if(cljs.core.truth_(clojure.set.subset_QMARK_(vars,bound))){
return null;
} else {
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(vars),bound);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Insufficient bindings: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing], 0)))," not bound in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_where,cljs.core.cst$kw$form,form,cljs.core.cst$kw$vars,missing], null));
}
});
datascript.query._resolve_clause = (function datascript$query$_resolve_clause(var_args){
var G__24365 = arguments.length;
switch (G__24365) {
case 2:
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2 = (function (context,clause){
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3(context,clause,clause);
});

datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3 = (function (context,clause,orig_clause){
while(true){
var pred__24366 = datascript.query.looks_like_QMARK_;
var expr__24367 = clause;
if(cljs.core.truth_((function (){var G__24369 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.cst$sym$_STAR_], null)], null);
var G__24370 = expr__24367;
return (pred__24366.cljs$core$IFn$_invoke$arity$2 ? pred__24366.cljs$core$IFn$_invoke$arity$2(G__24369,G__24370) : pred__24366.call(null,G__24369,G__24370));
})())){
return datascript.query.filter_by_pred(context,clause);
} else {
if(cljs.core.truth_((function (){var G__24371 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.cst$sym$_STAR_], null),cljs.core.cst$sym$_], null);
var G__24372 = expr__24367;
return (pred__24366.cljs$core$IFn$_invoke$arity$2 ? pred__24366.cljs$core$IFn$_invoke$arity$2(G__24371,G__24372) : pred__24366.call(null,G__24371,G__24372));
})())){
return datascript.query.bind_by_fn(context,clause);
} else {
if(cljs.core.truth_((function (){var G__24373 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.source_QMARK_,cljs.core.cst$sym$_STAR_], null);
var G__24374 = expr__24367;
return (pred__24366.cljs$core$IFn$_invoke$arity$2 ? pred__24366.cljs$core$IFn$_invoke$arity$2(G__24373,G__24374) : pred__24366.call(null,G__24373,G__24374));
})())){
var vec__24375 = clause;
var seq__24376 = cljs.core.seq(vec__24375);
var first__24377 = cljs.core.first(seq__24376);
var seq__24376__$1 = cljs.core.next(seq__24376);
var source_sym = first__24377;
var rest = seq__24376__$1;
var _STAR_implicit_source_STAR_24378 = datascript.query._STAR_implicit_source_STAR_;
datascript.query._STAR_implicit_source_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sources.cljs$core$IFn$_invoke$arity$1(context),source_sym);

try{return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3(context,rest,clause);
}finally {datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR_24378;
}} else {
if(cljs.core.truth_((function (){var G__24379 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$or,cljs.core.cst$sym$_STAR_], null);
var G__24380 = expr__24367;
return (pred__24366.cljs$core$IFn$_invoke$arity$2 ? pred__24366.cljs$core$IFn$_invoke$arity$2(G__24379,G__24380) : pred__24366.call(null,G__24379,G__24380));
})())){
var vec__24381 = clause;
var seq__24382 = cljs.core.seq(vec__24381);
var first__24383 = cljs.core.first(seq__24382);
var seq__24382__$1 = cljs.core.next(seq__24382);
var _ = first__24383;
var branches = seq__24382__$1;
var contexts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__24381,seq__24382,first__24383,seq__24382__$1,_,branches,pred__24366,expr__24367){
return (function (p1__24359_SHARP_){
return (datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(context,p1__24359_SHARP_) : datascript.query.resolve_clause.call(null,context,p1__24359_SHARP_));
});})(context,clause,orig_clause,vec__24381,seq__24382,first__24383,seq__24382__$1,_,branches,pred__24366,expr__24367))
,branches);
var rels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__24381,seq__24382,first__24383,seq__24382__$1,_,branches,contexts,pred__24366,expr__24367){
return (function (p1__24360_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(p1__24360_SHARP_));
});})(context,clause,orig_clause,vec__24381,seq__24382,first__24383,seq__24382__$1,_,branches,contexts,pred__24366,expr__24367))
,contexts);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(contexts),cljs.core.cst$kw$rels,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels)], null));
} else {
if(cljs.core.truth_((function (){var G__24384 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$or_DASH_join,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null),cljs.core.cst$sym$_STAR_], null),cljs.core.cst$sym$_STAR_], null);
var G__24385 = expr__24367;
return (pred__24366.cljs$core$IFn$_invoke$arity$2 ? pred__24366.cljs$core$IFn$_invoke$arity$2(G__24384,G__24385) : pred__24366.call(null,G__24384,G__24385));
})())){
var vec__24386 = clause;
var seq__24387 = cljs.core.seq(vec__24386);
var first__24388 = cljs.core.first(seq__24387);
var seq__24387__$1 = cljs.core.next(seq__24387);
var _ = first__24388;
var first__24388__$1 = cljs.core.first(seq__24387__$1);
var seq__24387__$2 = cljs.core.next(seq__24387__$1);
var vec__24389 = first__24388__$1;
var seq__24390 = cljs.core.seq(vec__24389);
var first__24391 = cljs.core.first(seq__24390);
var seq__24390__$1 = cljs.core.next(seq__24390);
var req_vars = first__24391;
var vars = seq__24390__$1;
var branches = seq__24387__$2;
datascript.query.check_bound(context,req_vars,orig_clause);

var G__24417 = context;
var G__24418 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$or_DASH_join,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_vars,vars),branches);
var G__24419 = clause;
context = G__24417;
clause = G__24418;
orig_clause = G__24419;
continue;
} else {
if(cljs.core.truth_((function (){var G__24392 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$or_DASH_join,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null),cljs.core.cst$sym$_STAR_], null);
var G__24393 = expr__24367;
return (pred__24366.cljs$core$IFn$_invoke$arity$2 ? pred__24366.cljs$core$IFn$_invoke$arity$2(G__24392,G__24393) : pred__24366.call(null,G__24392,G__24393));
})())){
var vec__24394 = clause;
var seq__24395 = cljs.core.seq(vec__24394);
var first__24396 = cljs.core.first(seq__24395);
var seq__24395__$1 = cljs.core.next(seq__24395);
var _ = first__24396;
var first__24396__$1 = cljs.core.first(seq__24395__$1);
var seq__24395__$2 = cljs.core.next(seq__24395__$1);
var vars = first__24396__$1;
var branches = seq__24395__$2;
var vars__$1 = cljs.core.set(vars);
var join_context = datascript.query.limit_context(context,vars__$1);
var contexts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__24394,seq__24395,first__24396,seq__24395__$1,_,first__24396__$1,seq__24395__$2,vars,branches,vars__$1,join_context,pred__24366,expr__24367){
return (function (p1__24361_SHARP_){
return datascript.query.limit_context((datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(join_context,p1__24361_SHARP_) : datascript.query.resolve_clause.call(null,join_context,p1__24361_SHARP_)),vars__$1);
});})(context,clause,orig_clause,vec__24394,seq__24395,first__24396,seq__24395__$1,_,first__24396__$1,seq__24395__$2,vars,branches,vars__$1,join_context,pred__24366,expr__24367))
,branches);
var rels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__24394,seq__24395,first__24396,seq__24395__$1,_,first__24396__$1,seq__24395__$2,vars,branches,vars__$1,join_context,contexts,pred__24366,expr__24367){
return (function (p1__24362_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(p1__24362_SHARP_));
});})(context,clause,orig_clause,vec__24394,seq__24395,first__24396,seq__24395__$1,_,first__24396__$1,seq__24395__$2,vars,branches,vars__$1,join_context,contexts,pred__24366,expr__24367))
,contexts);
var sum_rel = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,cljs.core.cst$kw$rels,datascript.query.collapse_rels,sum_rel);
} else {
if(cljs.core.truth_((function (){var G__24397 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$and,cljs.core.cst$sym$_STAR_], null);
var G__24398 = expr__24367;
return (pred__24366.cljs$core$IFn$_invoke$arity$2 ? pred__24366.cljs$core$IFn$_invoke$arity$2(G__24397,G__24398) : pred__24366.call(null,G__24397,G__24398));
})())){
var vec__24399 = clause;
var seq__24400 = cljs.core.seq(vec__24399);
var first__24401 = cljs.core.first(seq__24400);
var seq__24400__$1 = cljs.core.next(seq__24400);
var _ = first__24401;
var clauses = seq__24400__$1;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context,clauses);
} else {
if(cljs.core.truth_((function (){var G__24402 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$not,cljs.core.cst$sym$_STAR_], null);
var G__24403 = expr__24367;
return (pred__24366.cljs$core$IFn$_invoke$arity$2 ? pred__24366.cljs$core$IFn$_invoke$arity$2(G__24402,G__24403) : pred__24366.call(null,G__24402,G__24403));
})())){
var vec__24404 = clause;
var seq__24405 = cljs.core.seq(vec__24404);
var first__24406 = cljs.core.first(seq__24405);
var seq__24405__$1 = cljs.core.next(seq__24405);
var _ = first__24406;
var clauses = seq__24405__$1;
var bound_vars = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (context,clause,orig_clause,vec__24404,seq__24405,first__24406,seq__24405__$1,_,clauses,pred__24366,expr__24367){
return (function (p1__24363_SHARP_){
return cljs.core.keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(p1__24363_SHARP_));
});})(context,clause,orig_clause,vec__24404,seq__24405,first__24406,seq__24405__$1,_,clauses,pred__24366,expr__24367))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context)], 0)));
var negation_vars = datascript.query.collect_vars(clauses);
var ___$1 = ((cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(bound_vars,negation_vars)))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Insufficient bindings: none of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([negation_vars], 0)))," is bound in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([orig_clause], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_where,cljs.core.cst$kw$form,orig_clause], null))})():null);
var context_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$rels,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context))], null));
var negation_context = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context_SINGLEQUOTE_,clauses);
var negation = datascript.query.subtract_rel(datascript.query.single(cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context_SINGLEQUOTE_,cljs.core.cst$kw$rels,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_((function (){var G__24407 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$not_DASH_join,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null),cljs.core.cst$sym$_STAR_], null);
var G__24408 = expr__24367;
return (pred__24366.cljs$core$IFn$_invoke$arity$2 ? pred__24366.cljs$core$IFn$_invoke$arity$2(G__24407,G__24408) : pred__24366.call(null,G__24407,G__24408));
})())){
var vec__24409 = clause;
var seq__24410 = cljs.core.seq(vec__24409);
var first__24411 = cljs.core.first(seq__24410);
var seq__24410__$1 = cljs.core.next(seq__24410);
var _ = first__24411;
var first__24411__$1 = cljs.core.first(seq__24410__$1);
var seq__24410__$2 = cljs.core.next(seq__24410__$1);
var vars = first__24411__$1;
var clauses = seq__24410__$2;
var ___$1 = datascript.query.check_bound(context,vars,orig_clause);
var context_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$rels,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context))], null));
var join_context = datascript.query.limit_context(context_SINGLEQUOTE_,vars);
var negation_context = datascript.query.limit_context(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,join_context,clauses),vars);
var negation = datascript.query.subtract_rel(datascript.query.single(cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context_SINGLEQUOTE_,cljs.core.cst$kw$rels,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_((function (){var G__24412 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null);
var G__24413 = expr__24367;
return (pred__24366.cljs$core$IFn$_invoke$arity$2 ? pred__24366.cljs$core$IFn$_invoke$arity$2(G__24412,G__24413) : pred__24366.call(null,G__24412,G__24413));
})())){
var source = datascript.query._STAR_implicit_source_STAR_;
var pattern = datascript.query.resolve_pattern_lookup_refs(source,clause);
var relation = datascript.query.lookup_pattern(source,pattern);
var _STAR_lookup_attrs_STAR_24414 = datascript.query._STAR_lookup_attrs_STAR_;
datascript.query._STAR_lookup_attrs_STAR_ = ((((!((source == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source)))?datascript.query.dynamic_lookup_attrs(source,pattern):datascript.query._STAR_lookup_attrs_STAR_);

try{return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,cljs.core.cst$kw$rels,datascript.query.collapse_rels,relation);
}finally {datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR_24414;
}} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__24367)].join('')));
}
}
}
}
}
}
}
}
}
}
break;
}
});

datascript.query._resolve_clause.cljs$lang$maxFixedArity = 3;

datascript.query.resolve_clause = (function datascript$query$resolve_clause(context,clause){
if(cljs.core.truth_(datascript.query.rule_QMARK_(context,clause))){
if(cljs.core.truth_(datascript.query.source_QMARK_(cljs.core.first(clause)))){
var _STAR_implicit_source_STAR_24420 = datascript.query._STAR_implicit_source_STAR_;
datascript.query._STAR_implicit_source_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sources.cljs$core$IFn$_invoke$arity$1(context),cljs.core.first(clause));

try{var G__24421 = context;
var G__24422 = cljs.core.next(clause);
return (datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(G__24421,G__24422) : datascript.query.resolve_clause.call(null,G__24421,G__24422));
}finally {datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR_24420;
}} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,cljs.core.cst$kw$rels,datascript.query.collapse_rels,datascript.query.solve_rule(context,clause));
}
} else {
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2(context,clause);
}
});
datascript.query._q = (function datascript$query$_q(context,clauses){
var _STAR_implicit_source_STAR_24423 = datascript.query._STAR_implicit_source_STAR_;
datascript.query._STAR_implicit_source_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sources.cljs$core$IFn$_invoke$arity$1(context),cljs.core.cst$sym$$);

try{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context,clauses);
}finally {datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR_24423;
}});
datascript.query._collect = (function datascript$query$_collect(var_args){
var G__24426 = arguments.length;
switch (G__24426) {
case 2:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.query._collect.cljs$core$IFn$_invoke$arity$2 = (function (context,symbols){
var rels = cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context);
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me.tonsky.persistent_sorted_set.arrays.make_array(cljs.core.count(symbols))], null),rels,symbols);
});

datascript.query._collect.cljs$core$IFn$_invoke$arity$3 = (function (acc,rels,symbols){
while(true){
var temp__5722__auto__ = cljs.core.first(rels);
if((temp__5722__auto__ == null)){
return acc;
} else {
var rel = temp__5722__auto__;
var keep_attrs = cljs.core.select_keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel),symbols);
if(cljs.core.empty_QMARK_(keep_attrs)){
var G__24434 = acc;
var G__24435 = cljs.core.next(rels);
var G__24436 = symbols;
acc = G__24434;
rels = G__24435;
symbols = G__24436;
continue;
} else {
var copy_map = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (acc,rels,symbols,keep_attrs,rel,temp__5722__auto__){
return (function (p1__24424_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(keep_attrs,p1__24424_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel,temp__5722__auto__))
,symbols));
var len = cljs.core.count(symbols);
var G__24437 = (function (){var iter__4324__auto__ = ((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5722__auto__){
return (function datascript$query$iter__24427(s__24428){
return (new cljs.core.LazySeq(null,((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5722__auto__){
return (function (){
var s__24428__$1 = s__24428;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__24428__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var t1 = cljs.core.first(xs__6277__auto__);
var iterys__4320__auto__ = ((function (s__24428__$1,acc,rels,symbols,t1,xs__6277__auto__,temp__5720__auto__,copy_map,len,keep_attrs,rel,temp__5722__auto__){
return (function datascript$query$iter__24427_$_iter__24429(s__24430){
return (new cljs.core.LazySeq(null,((function (s__24428__$1,acc,rels,symbols,t1,xs__6277__auto__,temp__5720__auto__,copy_map,len,keep_attrs,rel,temp__5722__auto__){
return (function (){
var s__24430__$1 = s__24430;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__24430__$1);
if(temp__5720__auto____$1){
var s__24430__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__24430__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__24430__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__24432 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__24431 = (0);
while(true){
if((i__24431 < size__4323__auto__)){
var t2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__24431);
cljs.core.chunk_append(b__24432,(function (){var res = cljs.core.aclone(t1);
var n__4408__auto___24440 = len;
var i_24441 = (0);
while(true){
if((i_24441 < n__4408__auto___24440)){
var temp__5724__auto___24442 = (copy_map[i_24441]);
if((temp__5724__auto___24442 == null)){
} else {
var idx_24443 = temp__5724__auto___24442;
(res[i_24441] = (t2[idx_24443]));
}

var G__24444 = (i_24441 + (1));
i_24441 = G__24444;
continue;
} else {
}
break;
}

return res;
})());

var G__24445 = (i__24431 + (1));
i__24431 = G__24445;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24432),datascript$query$iter__24427_$_iter__24429(cljs.core.chunk_rest(s__24430__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24432),null);
}
} else {
var t2 = cljs.core.first(s__24430__$2);
return cljs.core.cons((function (){var res = cljs.core.aclone(t1);
var n__4408__auto___24446 = len;
var i_24447 = (0);
while(true){
if((i_24447 < n__4408__auto___24446)){
var temp__5724__auto___24448 = (copy_map[i_24447]);
if((temp__5724__auto___24448 == null)){
} else {
var idx_24449 = temp__5724__auto___24448;
(res[i_24447] = (t2[idx_24449]));
}

var G__24450 = (i_24447 + (1));
i_24447 = G__24450;
continue;
} else {
}
break;
}

return res;
})(),datascript$query$iter__24427_$_iter__24429(cljs.core.rest(s__24430__$2)));
}
} else {
return null;
}
break;
}
});})(s__24428__$1,acc,rels,symbols,t1,xs__6277__auto__,temp__5720__auto__,copy_map,len,keep_attrs,rel,temp__5722__auto__))
,null,null));
});})(s__24428__$1,acc,rels,symbols,t1,xs__6277__auto__,temp__5720__auto__,copy_map,len,keep_attrs,rel,temp__5722__auto__))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel)));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,datascript$query$iter__24427(cljs.core.rest(s__24428__$1)));
} else {
var G__24451 = cljs.core.rest(s__24428__$1);
s__24428__$1 = G__24451;
continue;
}
} else {
return null;
}
break;
}
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5722__auto__))
,null,null));
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__5722__auto__))
;
return iter__4324__auto__(acc);
})();
var G__24438 = cljs.core.next(rels);
var G__24439 = symbols;
acc = G__24437;
rels = G__24438;
symbols = G__24439;
continue;
}
}
break;
}
});

datascript.query._collect.cljs$lang$maxFixedArity = 3;

datascript.query.collect = (function datascript$query$collect(context,symbols){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context,symbols)));
});

/**
 * @interface
 */
datascript.query.IContextResolve = function(){};

datascript.query._context_resolve = (function datascript$query$_context_resolve(var$,context){
if(((!((var$ == null))) && (!((var$.datascript$query$IContextResolve$_context_resolve$arity$2 == null))))){
return var$.datascript$query$IContextResolve$_context_resolve$arity$2(var$,context);
} else {
var x__4243__auto__ = (((var$ == null))?null:var$);
var m__4244__auto__ = (datascript.query._context_resolve[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(var$,context) : m__4244__auto__.call(null,var$,context));
} else {
var m__4244__auto____$1 = (datascript.query._context_resolve["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(var$,context) : m__4244__auto____$1.call(null,var$,context));
} else {
throw cljs.core.missing_protocol("IContextResolve.-context-resolve",var$);
}
}
}
});

datascript.parser.Variable.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Variable.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return datascript.query.context_resolve_val(context,var$__$1.symbol);
});

datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sources,var$__$1.symbol], null));
});

datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_in_aggregates,var$__$1.symbol);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return datascript.query.resolve_sym(var$__$1.symbol);
}
});

datascript.parser.Constant.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Constant.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
return var$__$1.value;
});
datascript.query._aggregate = (function datascript$query$_aggregate(find_elements,context,tuples){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4((function (element,fixed_value,i){
if(cljs.core.truth_(datascript.parser.aggregate_QMARK_(element))){
var f = datascript.query._context_resolve(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(element),context);
var args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (f){
return (function (p1__24452_SHARP_){
return datascript.query._context_resolve(p1__24452_SHARP_,context);
});})(f))
,cljs.core.butlast(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(element)));
var vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (f,args){
return (function (p1__24453_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__24453_SHARP_,i);
});})(f,args))
,tuples);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else {
return fixed_value;
}
}),find_elements,cljs.core.first(tuples),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
datascript.query.idxs_of = (function datascript$query$idxs_of(pred,coll){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__24454_SHARP_,p2__24455_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__24454_SHARP_) : pred.call(null,p1__24454_SHARP_)))){
return p2__24455_SHARP_;
} else {
return null;
}
}),coll,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
datascript.query.aggregate = (function datascript$query$aggregate(find_elements,context,resultset){
var group_idxs = datascript.query.idxs_of(cljs.core.complement(datascript.parser.aggregate_QMARK_),find_elements);
var group_fn = ((function (group_idxs){
return (function (tuple){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (group_idxs){
return (function (p1__24456_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tuple,p1__24456_SHARP_);
});})(group_idxs))
,group_idxs);
});})(group_idxs))
;
var grouped = cljs.core.group_by(group_fn,resultset);
var iter__4324__auto__ = ((function (group_idxs,group_fn,grouped){
return (function datascript$query$aggregate_$_iter__24457(s__24458){
return (new cljs.core.LazySeq(null,((function (group_idxs,group_fn,grouped){
return (function (){
var s__24458__$1 = s__24458;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__24458__$1);
if(temp__5720__auto__){
var s__24458__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24458__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__24458__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__24460 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__24459 = (0);
while(true){
if((i__24459 < size__4323__auto__)){
var vec__24461 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__24459);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24461,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24461,(1),null);
cljs.core.chunk_append(b__24460,datascript.query._aggregate(find_elements,context,tuples));

var G__24467 = (i__24459 + (1));
i__24459 = G__24467;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24460),datascript$query$aggregate_$_iter__24457(cljs.core.chunk_rest(s__24458__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24460),null);
}
} else {
var vec__24464 = cljs.core.first(s__24458__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24464,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24464,(1),null);
return cljs.core.cons(datascript.query._aggregate(find_elements,context,tuples),datascript$query$aggregate_$_iter__24457(cljs.core.rest(s__24458__$2)));
}
} else {
return null;
}
break;
}
});})(group_idxs,group_fn,grouped))
,null,null));
});})(group_idxs,group_fn,grouped))
;
return iter__4324__auto__(grouped);
});

/**
 * @interface
 */
datascript.query.IPostProcess = function(){};

datascript.query._post_process = (function datascript$query$_post_process(find,tuples){
if(((!((find == null))) && (!((find.datascript$query$IPostProcess$_post_process$arity$2 == null))))){
return find.datascript$query$IPostProcess$_post_process$arity$2(find,tuples);
} else {
var x__4243__auto__ = (((find == null))?null:find);
var m__4244__auto__ = (datascript.query._post_process[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(find,tuples) : m__4244__auto__.call(null,find,tuples));
} else {
var m__4244__auto____$1 = (datascript.query._post_process["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(find,tuples) : m__4244__auto____$1.call(null,find,tuples));
} else {
throw cljs.core.missing_protocol("IPostProcess.-post-process",find);
}
}
}
});

datascript.parser.FindRel.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindRel.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return tuples;
});

datascript.parser.FindColl.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindColl.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),tuples);
});

datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.ffirst(tuples);
});

datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.first(tuples);
});
datascript.query.pull = (function datascript$query$pull(find_elements,context,resultset){
var resolved = (function (){var iter__4324__auto__ = (function datascript$query$pull_$_iter__24468(s__24469){
return (new cljs.core.LazySeq(null,(function (){
var s__24469__$1 = s__24469;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__24469__$1);
if(temp__5720__auto__){
var s__24469__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24469__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__24469__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__24471 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__24470 = (0);
while(true){
if((i__24470 < size__4323__auto__)){
var find = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__24470);
cljs.core.chunk_append(b__24471,(cljs.core.truth_(datascript.parser.pull_QMARK_(find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull(datascript.query._context_resolve(cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(find),context))], null):null));

var G__24482 = (i__24470 + (1));
i__24470 = G__24482;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24471),datascript$query$pull_$_iter__24468(cljs.core.chunk_rest(s__24469__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24471),null);
}
} else {
var find = cljs.core.first(s__24469__$2);
return cljs.core.cons((cljs.core.truth_(datascript.parser.pull_QMARK_(find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull(datascript.query._context_resolve(cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(find),context))], null):null),datascript$query$pull_$_iter__24468(cljs.core.rest(s__24469__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(find_elements);
})();
var iter__4324__auto__ = ((function (resolved){
return (function datascript$query$pull_$_iter__24472(s__24473){
return (new cljs.core.LazySeq(null,((function (resolved){
return (function (){
var s__24473__$1 = s__24473;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__24473__$1);
if(temp__5720__auto__){
var s__24473__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24473__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__24473__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__24475 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__24474 = (0);
while(true){
if((i__24474 < size__4323__auto__)){
var tuple = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__24474);
cljs.core.chunk_append(b__24475,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (i__24474,tuple,c__4322__auto__,size__4323__auto__,b__24475,s__24473__$2,temp__5720__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__24476 = env;
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24476,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24476,(1),null);
return datascript.pull_api.pull_spec(src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(i__24474,tuple,c__4322__auto__,size__4323__auto__,b__24475,s__24473__$2,temp__5720__auto__,resolved))
,resolved,tuple));

var G__24483 = (i__24474 + (1));
i__24474 = G__24483;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24475),datascript$query$pull_$_iter__24472(cljs.core.chunk_rest(s__24473__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24475),null);
}
} else {
var tuple = cljs.core.first(s__24473__$2);
return cljs.core.cons(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (tuple,s__24473__$2,temp__5720__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__24479 = env;
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24479,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24479,(1),null);
return datascript.pull_api.pull_spec(src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(tuple,s__24473__$2,temp__5720__auto__,resolved))
,resolved,tuple),datascript$query$pull_$_iter__24472(cljs.core.rest(s__24473__$2)));
}
} else {
return null;
}
break;
}
});})(resolved))
,null,null));
});})(resolved))
;
return iter__4324__auto__(resultset);
});
datascript.query.query_cache = cljs.core.volatile_BANG_(datascript.lru.lru((100)));
datascript.query.memoized_parse_query = (function datascript$query$memoized_parse_query(q){
var temp__5722__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(datascript.query.query_cache),q,null);
if((temp__5722__auto__ == null)){
var qp = datascript.parser.parse_query(q);
cljs.core._vreset_BANG_(datascript.query.query_cache,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(datascript.query.query_cache),q,qp));

return qp;
} else {
var cached = temp__5722__auto__;
return cached;
}
});
datascript.query.q = (function datascript$query$q(var_args){
var args__4534__auto__ = [];
var len__4531__auto___24489 = arguments.length;
var i__4532__auto___24490 = (0);
while(true){
if((i__4532__auto___24490 < len__4531__auto___24489)){
args__4534__auto__.push((arguments[i__4532__auto___24490]));

var G__24491 = (i__4532__auto___24490 + (1));
i__4532__auto___24490 = G__24491;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return datascript.query.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

datascript.query.q.cljs$core$IFn$_invoke$arity$variadic = (function (q,inputs){
var parsed_q = datascript.query.memoized_parse_query(q);
var find = cljs.core.cst$kw$qfind.cljs$core$IFn$_invoke$arity$1(parsed_q);
var find_elements = datascript.parser.find_elements(find);
var find_vars = datascript.parser.find_vars(find);
var result_arity = cljs.core.count(find_elements);
var with$ = cljs.core.cst$kw$qwith.cljs$core$IFn$_invoke$arity$1(parsed_q);
var all_vars = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(find_vars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,with$));
var q__$1 = (function (){var G__24487 = q;
if(cljs.core.sequential_QMARK_(q)){
return datascript.parser.query__GT_map(G__24487);
} else {
return G__24487;
}
})();
var wheres = cljs.core.cst$kw$where.cljs$core$IFn$_invoke$arity$1(q__$1);
var context = datascript.query.resolve_ins((new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),cljs.core.cst$kw$qin.cljs$core$IFn$_invoke$arity$1(parsed_q),inputs);
var resultset = datascript.query.collect(datascript.query._q(context,wheres),all_vars);
var G__24488 = resultset;
var G__24488__$1 = (cljs.core.truth_(cljs.core.cst$kw$with.cljs$core$IFn$_invoke$arity$1(q__$1))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__24488,parsed_q,find,find_elements,find_vars,result_arity,with$,all_vars,q__$1,wheres,context,resultset){
return (function (p1__24484_SHARP_){
return cljs.core.vec(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p1__24484_SHARP_,(0),result_arity));
});})(G__24488,parsed_q,find,find_elements,find_vars,result_arity,with$,all_vars,q__$1,wheres,context,resultset))
,G__24488):G__24488);
var G__24488__$2 = (cljs.core.truth_(cljs.core.some(datascript.parser.aggregate_QMARK_,find_elements))?datascript.query.aggregate(find_elements,context,G__24488__$1):G__24488__$1);
var G__24488__$3 = (cljs.core.truth_(cljs.core.some(datascript.parser.pull_QMARK_,find_elements))?datascript.query.pull(find_elements,context,G__24488__$2):G__24488__$2);
return datascript.query._post_process(find,G__24488__$3);

});

datascript.query.q.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
datascript.query.q.cljs$lang$applyTo = (function (seq24485){
var G__24486 = cljs.core.first(seq24485);
var seq24485__$1 = cljs.core.next(seq24485);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24486,seq24485__$1);
});

