// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('spec_tools.data_spec');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('spec_tools.impl');
goog.require('spec_tools.core');
goog.require('cljs.spec.alpha');
goog.require('spec_tools.parse');

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
spec_tools.data_spec.OptionalKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
spec_tools.data_spec.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

spec_tools.data_spec.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k26147,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__26151 = k26147;
var G__26151__$1 = (((G__26151 instanceof cljs.core.Keyword))?G__26151.fqn:null);
switch (G__26151__$1) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26147,else__4206__auto__);

}
});

spec_tools.data_spec.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#spec-tools.data-spec.OptionalKey{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

spec_tools.data_spec.OptionalKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26146){
var self__ = this;
var G__26146__$1 = this;
return (new cljs.core.RecordIter((0),G__26146__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$k], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

spec_tools.data_spec.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

spec_tools.data_spec.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new spec_tools.data_spec.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

spec_tools.data_spec.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

spec_tools.data_spec.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__26152 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-261180351 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__26152(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

spec_tools.data_spec.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26148,other26149){
var self__ = this;
var this26148__$1 = this;
return ((!((other26149 == null))) && ((this26148__$1.constructor === other26149.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26148__$1.k,other26149.k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26148__$1.__extmap,other26149.__extmap)));
});

spec_tools.data_spec.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$k,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new spec_tools.data_spec.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

spec_tools.data_spec.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__26146){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__26153 = cljs.core.keyword_identical_QMARK_;
var expr__26154 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__26156 = cljs.core.cst$kw$k;
var G__26157 = expr__26154;
return (pred__26153.cljs$core$IFn$_invoke$arity$2 ? pred__26153.cljs$core$IFn$_invoke$arity$2(G__26156,G__26157) : pred__26153.call(null,G__26156,G__26157));
})())){
return (new spec_tools.data_spec.OptionalKey(G__26146,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.data_spec.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__26146),null));
}
});

spec_tools.data_spec.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$k,self__.k,null))], null),self__.__extmap));
});

spec_tools.data_spec.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__26146){
var self__ = this;
var this__4202__auto____$1 = this;
return (new spec_tools.data_spec.OptionalKey(self__.k,G__26146,self__.__extmap,self__.__hash));
});

spec_tools.data_spec.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

spec_tools.data_spec.OptionalKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k], null);
});

spec_tools.data_spec.OptionalKey.cljs$lang$type = true;

spec_tools.data_spec.OptionalKey.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"spec-tools.data-spec/OptionalKey",null,(1),null));
});

spec_tools.data_spec.OptionalKey.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"spec-tools.data-spec/OptionalKey");
});

/**
 * Positional factory function for spec-tools.data-spec/OptionalKey.
 */
spec_tools.data_spec.__GT_OptionalKey = (function spec_tools$data_spec$__GT_OptionalKey(k){
return (new spec_tools.data_spec.OptionalKey(k,null,null,null));
});

/**
 * Factory function for spec-tools.data-spec/OptionalKey, taking a map of keywords to field values.
 */
spec_tools.data_spec.map__GT_OptionalKey = (function spec_tools$data_spec$map__GT_OptionalKey(G__26150){
var extmap__4236__auto__ = (function (){var G__26158 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26150,cljs.core.cst$kw$k);
if(cljs.core.record_QMARK_(G__26150)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__26158);
} else {
return G__26158;
}
})();
return (new spec_tools.data_spec.OptionalKey(cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(G__26150),null,cljs.core.not_empty(extmap__4236__auto__),null));
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
spec_tools.data_spec.RequiredKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
spec_tools.data_spec.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

spec_tools.data_spec.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k26161,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__26165 = k26161;
var G__26165__$1 = (((G__26165 instanceof cljs.core.Keyword))?G__26165.fqn:null);
switch (G__26165__$1) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26161,else__4206__auto__);

}
});

spec_tools.data_spec.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#spec-tools.data-spec.RequiredKey{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$k,self__.k],null))], null),self__.__extmap));
});

spec_tools.data_spec.RequiredKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26160){
var self__ = this;
var G__26160__$1 = this;
return (new cljs.core.RecordIter((0),G__26160__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$k], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

spec_tools.data_spec.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

spec_tools.data_spec.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new spec_tools.data_spec.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

spec_tools.data_spec.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

spec_tools.data_spec.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__26166 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-470971127 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__26166(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

spec_tools.data_spec.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26162,other26163){
var self__ = this;
var this26162__$1 = this;
return ((!((other26163 == null))) && ((this26162__$1.constructor === other26163.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26162__$1.k,other26163.k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26162__$1.__extmap,other26163.__extmap)));
});

spec_tools.data_spec.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$k,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new spec_tools.data_spec.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

spec_tools.data_spec.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__26160){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__26167 = cljs.core.keyword_identical_QMARK_;
var expr__26168 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__26170 = cljs.core.cst$kw$k;
var G__26171 = expr__26168;
return (pred__26167.cljs$core$IFn$_invoke$arity$2 ? pred__26167.cljs$core$IFn$_invoke$arity$2(G__26170,G__26171) : pred__26167.call(null,G__26170,G__26171));
})())){
return (new spec_tools.data_spec.RequiredKey(G__26160,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.data_spec.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__26160),null));
}
});

spec_tools.data_spec.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$k,self__.k,null))], null),self__.__extmap));
});

spec_tools.data_spec.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__26160){
var self__ = this;
var this__4202__auto____$1 = this;
return (new spec_tools.data_spec.RequiredKey(self__.k,G__26160,self__.__extmap,self__.__hash));
});

spec_tools.data_spec.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

spec_tools.data_spec.RequiredKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k], null);
});

spec_tools.data_spec.RequiredKey.cljs$lang$type = true;

spec_tools.data_spec.RequiredKey.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"spec-tools.data-spec/RequiredKey",null,(1),null));
});

spec_tools.data_spec.RequiredKey.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"spec-tools.data-spec/RequiredKey");
});

/**
 * Positional factory function for spec-tools.data-spec/RequiredKey.
 */
spec_tools.data_spec.__GT_RequiredKey = (function spec_tools$data_spec$__GT_RequiredKey(k){
return (new spec_tools.data_spec.RequiredKey(k,null,null,null));
});

/**
 * Factory function for spec-tools.data-spec/RequiredKey, taking a map of keywords to field values.
 */
spec_tools.data_spec.map__GT_RequiredKey = (function spec_tools$data_spec$map__GT_RequiredKey(G__26164){
var extmap__4236__auto__ = (function (){var G__26172 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26164,cljs.core.cst$kw$k);
if(cljs.core.record_QMARK_(G__26164)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__26172);
} else {
return G__26172;
}
})();
return (new spec_tools.data_spec.RequiredKey(cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(G__26164),null,cljs.core.not_empty(extmap__4236__auto__),null));
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
spec_tools.data_spec.Maybe = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
spec_tools.data_spec.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

spec_tools.data_spec.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k26175,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__26179 = k26175;
var G__26179__$1 = (((G__26179 instanceof cljs.core.Keyword))?G__26179.fqn:null);
switch (G__26179__$1) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26175,else__4206__auto__);

}
});

spec_tools.data_spec.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#spec-tools.data-spec.Maybe{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$v,self__.v],null))], null),self__.__extmap));
});

spec_tools.data_spec.Maybe.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26174){
var self__ = this;
var G__26174__$1 = this;
return (new cljs.core.RecordIter((0),G__26174__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

spec_tools.data_spec.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

spec_tools.data_spec.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new spec_tools.data_spec.Maybe(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});

spec_tools.data_spec.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

spec_tools.data_spec.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__26180 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1150224619 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__26180(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

spec_tools.data_spec.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26176,other26177){
var self__ = this;
var this26176__$1 = this;
return ((!((other26177 == null))) && ((this26176__$1.constructor === other26177.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26176__$1.v,other26177.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26176__$1.__extmap,other26177.__extmap)));
});

spec_tools.data_spec.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$v,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new spec_tools.data_spec.Maybe(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

spec_tools.data_spec.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__26174){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__26181 = cljs.core.keyword_identical_QMARK_;
var expr__26182 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__26184 = cljs.core.cst$kw$v;
var G__26185 = expr__26182;
return (pred__26181.cljs$core$IFn$_invoke$arity$2 ? pred__26181.cljs$core$IFn$_invoke$arity$2(G__26184,G__26185) : pred__26181.call(null,G__26184,G__26185));
})())){
return (new spec_tools.data_spec.Maybe(G__26174,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.data_spec.Maybe(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__26174),null));
}
});

spec_tools.data_spec.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$v,self__.v,null))], null),self__.__extmap));
});

spec_tools.data_spec.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__26174){
var self__ = this;
var this__4202__auto____$1 = this;
return (new spec_tools.data_spec.Maybe(self__.v,G__26174,self__.__extmap,self__.__hash));
});

spec_tools.data_spec.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

spec_tools.data_spec.Maybe.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$v], null);
});

spec_tools.data_spec.Maybe.cljs$lang$type = true;

spec_tools.data_spec.Maybe.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"spec-tools.data-spec/Maybe",null,(1),null));
});

spec_tools.data_spec.Maybe.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"spec-tools.data-spec/Maybe");
});

/**
 * Positional factory function for spec-tools.data-spec/Maybe.
 */
spec_tools.data_spec.__GT_Maybe = (function spec_tools$data_spec$__GT_Maybe(v){
return (new spec_tools.data_spec.Maybe(v,null,null,null));
});

/**
 * Factory function for spec-tools.data-spec/Maybe, taking a map of keywords to field values.
 */
spec_tools.data_spec.map__GT_Maybe = (function spec_tools$data_spec$map__GT_Maybe(G__26178){
var extmap__4236__auto__ = (function (){var G__26186 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26178,cljs.core.cst$kw$v);
if(cljs.core.record_QMARK_(G__26178)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__26186);
} else {
return G__26186;
}
})();
return (new spec_tools.data_spec.Maybe(cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(G__26178),null,cljs.core.not_empty(extmap__4236__auto__),null));
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
spec_tools.data_spec.Or = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
spec_tools.data_spec.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

spec_tools.data_spec.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k26189,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__26193 = k26189;
var G__26193__$1 = (((G__26193 instanceof cljs.core.Keyword))?G__26193.fqn:null);
switch (G__26193__$1) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26189,else__4206__auto__);

}
});

spec_tools.data_spec.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#spec-tools.data-spec.Or{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$v,self__.v],null))], null),self__.__extmap));
});

spec_tools.data_spec.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26188){
var self__ = this;
var G__26188__$1 = this;
return (new cljs.core.RecordIter((0),G__26188__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

spec_tools.data_spec.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

spec_tools.data_spec.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new spec_tools.data_spec.Or(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});

spec_tools.data_spec.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

spec_tools.data_spec.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__26194 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1620079539 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__26194(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

spec_tools.data_spec.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26190,other26191){
var self__ = this;
var this26190__$1 = this;
return ((!((other26191 == null))) && ((this26190__$1.constructor === other26191.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26190__$1.v,other26191.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26190__$1.__extmap,other26191.__extmap)));
});

spec_tools.data_spec.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$v,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new spec_tools.data_spec.Or(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

spec_tools.data_spec.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__26188){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__26195 = cljs.core.keyword_identical_QMARK_;
var expr__26196 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__26198 = cljs.core.cst$kw$v;
var G__26199 = expr__26196;
return (pred__26195.cljs$core$IFn$_invoke$arity$2 ? pred__26195.cljs$core$IFn$_invoke$arity$2(G__26198,G__26199) : pred__26195.call(null,G__26198,G__26199));
})())){
return (new spec_tools.data_spec.Or(G__26188,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.data_spec.Or(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__26188),null));
}
});

spec_tools.data_spec.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$v,self__.v,null))], null),self__.__extmap));
});

spec_tools.data_spec.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__26188){
var self__ = this;
var this__4202__auto____$1 = this;
return (new spec_tools.data_spec.Or(self__.v,G__26188,self__.__extmap,self__.__hash));
});

spec_tools.data_spec.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

spec_tools.data_spec.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$v], null);
});

spec_tools.data_spec.Or.cljs$lang$type = true;

spec_tools.data_spec.Or.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"spec-tools.data-spec/Or",null,(1),null));
});

spec_tools.data_spec.Or.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"spec-tools.data-spec/Or");
});

/**
 * Positional factory function for spec-tools.data-spec/Or.
 */
spec_tools.data_spec.__GT_Or = (function spec_tools$data_spec$__GT_Or(v){
return (new spec_tools.data_spec.Or(v,null,null,null));
});

/**
 * Factory function for spec-tools.data-spec/Or, taking a map of keywords to field values.
 */
spec_tools.data_spec.map__GT_Or = (function spec_tools$data_spec$map__GT_Or(G__26192){
var extmap__4236__auto__ = (function (){var G__26200 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26192,cljs.core.cst$kw$v);
if(cljs.core.record_QMARK_(G__26192)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__26200);
} else {
return G__26200;
}
})();
return (new spec_tools.data_spec.Or(cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(G__26192),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

/**
 * Makes a key optional:
 * 
 *   ```clojure
 *   {:name string?
 * (ds/opt :age) int?}
 *   ```
 */
spec_tools.data_spec.opt = (function spec_tools$data_spec$opt(k){
return spec_tools.data_spec.__GT_OptionalKey(k);
});
/**
 * Test if the key is wrapped with [[opt]]
 */
spec_tools.data_spec.opt_QMARK_ = (function spec_tools$data_spec$opt_QMARK_(x){
return (x instanceof spec_tools.data_spec.OptionalKey);
});
/**
 * Makes a key required:
 * 
 *   ```clojure
 *   {:name string?
 * (ds/req :age) int?}
 *   ```
 */
spec_tools.data_spec.req = (function spec_tools$data_spec$req(k){
return spec_tools.data_spec.__GT_RequiredKey(k);
});
/**
 * Test if the key is wrapped with [[req]]
 */
spec_tools.data_spec.req_QMARK_ = (function spec_tools$data_spec$req_QMARK_(x){
return cljs.core.not(spec_tools.data_spec.opt_QMARK_(x));
});
/**
 * Makes a value nillable:
 * 
 *   ```clojure
 *   {:name string?
 * :age (ds/maybe int?)}
 *   ```
 */
spec_tools.data_spec.maybe = (function spec_tools$data_spec$maybe(v){
return spec_tools.data_spec.__GT_Maybe(v);
});
/**
 * Test if the value is wrapped with [[maybe]]
 */
spec_tools.data_spec.maybe_QMARK_ = (function spec_tools$data_spec$maybe_QMARK_(x){
return (x instanceof spec_tools.data_spec.Maybe);
});
spec_tools.data_spec.or = (function spec_tools$data_spec$or(v){
return spec_tools.data_spec.__GT_Or(v);
});
spec_tools.data_spec.or_QMARK_ = (function spec_tools$data_spec$or_QMARK_(x){
return (x instanceof spec_tools.data_spec.Or);
});
/**
 * Test if the key is wrapped with [[opt]] or [[req]]
 */
spec_tools.data_spec.wrapped_key_QMARK_ = (function spec_tools$data_spec$wrapped_key_QMARK_(x){
var or__3949__auto__ = spec_tools.data_spec.opt_QMARK_(x);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (x instanceof spec_tools.data_spec.RequiredKey);
}
});
/**
 * Unwrap the [[opt]] or [[req]] key.
 */
spec_tools.data_spec.unwrap_key = (function spec_tools$data_spec$unwrap_key(x){
if(cljs.core.truth_(spec_tools.data_spec.wrapped_key_QMARK_(x))){
return cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
spec_tools.data_spec._nested_key = (function spec_tools$data_spec$_nested_key(n,k){
if(cljs.core.qualified_keyword_QMARK_(n)){
} else {
throw (new Error(["Assert failed: ","spec must have a qualified name","\n","(qualified-keyword? n)"].join('')));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(n)),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5718__auto__ = cljs.core.namespace(k);
if(cljs.core.truth_(temp__5718__auto__)){
var kns = temp__5718__auto__;
return ["$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kns)].join('');
} else {
return null;
}
})()),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))].join(''));
});
spec_tools.data_spec._map_spec = (function spec_tools$data_spec$_map_spec(data,p__26203){
var map__26204 = p__26203;
var map__26204__$1 = ((((!((map__26204 == null)))?(((((map__26204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26204):map__26204);
var opts = map__26204__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26204__$1,cljs.core.cst$kw$name);
var keys_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26204__$1,cljs.core.cst$kw$keys_DASH_spec,spec_tools.impl.keys_spec);
var keys_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26204__$1,cljs.core.cst$kw$keys_DASH_default);
var temp__5718__auto__ = (function (){var and__3938__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(data));
if(and__3938__auto__){
var vec__26209 = cljs.core.first(data);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26209,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26209,(1),null);
var and__3938__auto____$1 = cljs.core.not((function (){var or__3949__auto__ = (k instanceof cljs.core.Keyword);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return spec_tools.data_spec.wrapped_key_QMARK_(k);
}
})());
if(and__3938__auto____$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var vec__26212 = temp__5718__auto__;
var k_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26212,(0),null);
var v_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26212,(1),null);
return spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,spec_tools.impl.map_of_spec((spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2 ? spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(n,k_SINGLEQUOTE_) : spec_tools.data_spec.spec.call(null,n,k_SINGLEQUOTE_)),(function (){var G__26215 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,n,cljs.core.cst$kw$spec,v_SINGLEQUOTE_], null);
return (spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1(G__26215) : spec_tools.data_spec.spec.call(null,G__26215));
})())], null));
} else {
var m = cljs.core.reduce_kv(((function (temp__5718__auto__,map__26204,map__26204__$1,opts,n,keys_spec,keys_default){
return (function (acc,k,v){
var k__$1 = (cljs.core.truth_((function (){var and__3938__auto__ = keys_default;
if(cljs.core.truth_(and__3938__auto__)){
return (k instanceof cljs.core.Keyword);
} else {
return and__3938__auto__;
}
})())?(keys_default.cljs$core$IFn$_invoke$arity$1 ? keys_default.cljs$core$IFn$_invoke$arity$1(k) : keys_default.call(null,k)):k);
var kv = spec_tools.data_spec.unwrap_key(k__$1);
var rk = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(spec_tools.data_spec.req_QMARK_(k__$1))?"req":"opt")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((!(cljs.core.qualified_keyword_QMARK_(kv)))?"-un":null))].join(''));
var vec__26216 = (cljs.core.truth_(spec_tools.data_spec.maybe_QMARK_(v))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(v),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (k__$1,kv,rk,temp__5718__auto__,map__26204,map__26204__$1,opts,n,keys_spec,keys_default){
return (function (p1__26202_SHARP_){
return spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,p1__26202_SHARP_], null));
});})(k__$1,kv,rk,temp__5718__auto__,map__26204,map__26204__$1,opts,n,keys_spec,keys_default))
,spec_tools.impl.nilable_spec)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.identity], null));
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26216,(0),null);
var wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26216,(1),null);
var vec__26219 = ((cljs.core.qualified_keyword_QMARK_(kv))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kv,((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(kv,v__$1))?kv:null)], null):(function (){var k_SINGLEQUOTE_ = spec_tools.data_spec._nested_key(n,spec_tools.data_spec.unwrap_key(kv));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_SINGLEQUOTE_,k_SINGLEQUOTE_], null);
})());
var k_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26219,(0),null);
var n_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26219,(1),null);
var v_SINGLEQUOTE_ = (cljs.core.truth_(n_SINGLEQUOTE_)?(function (){var G__26222 = (function (){var G__26223 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$name,n_SINGLEQUOTE_),cljs.core.cst$kw$spec,v__$1);
return (spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1(G__26223) : spec_tools.data_spec.spec.call(null,G__26223));
})();
return (wrap.cljs$core$IFn$_invoke$arity$1 ? wrap.cljs$core$IFn$_invoke$arity$1(G__26222) : wrap.call(null,G__26222));
})():null);
var G__26224 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,rk,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),k_SINGLEQUOTE_);
if(cljs.core.truth_(v_SINGLEQUOTE_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__26224,cljs.core.cst$kw$spec_DASH_tools$data_DASH_spec_SLASH_defs,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_SINGLEQUOTE_,v_SINGLEQUOTE_], null));
} else {
return G__26224;
}
});})(temp__5718__auto__,map__26204,map__26204__$1,opts,n,keys_spec,keys_default))
,cljs.core.PersistentArrayMap.EMPTY,data);
var defs = cljs.core.cst$kw$spec_DASH_tools$data_DASH_spec_SLASH_defs.cljs$core$IFn$_invoke$arity$1(m);
var data__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$spec_DASH_tools$data_DASH_spec_SLASH_defs)));
var seq__26225_26237 = cljs.core.seq(defs);
var chunk__26226_26238 = null;
var count__26227_26239 = (0);
var i__26228_26240 = (0);
while(true){
if((i__26228_26240 < count__26227_26239)){
var vec__26229_26241 = chunk__26226_26238.cljs$core$IIndexed$_nth$arity$2(null,i__26228_26240);
var k_26242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26229_26241,(0),null);
var s_26243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26229_26241,(1),null);
var synthetic_QMARK__26244 = (function (){var and__3938__auto__ = spec_tools.core.spec_QMARK_(s_26243);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not(spec_tools.parse.collection_type_QMARK_(s_26243));
} else {
return and__3938__auto__;
}
})();
spec_tools.impl.register_spec_BANG_(k_26242,(function (){var G__26232 = s_26243;
if(cljs.core.truth_(synthetic_QMARK__26244)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26232,cljs.core.cst$kw$spec_DASH_tools$core_SLASH_synthetic_QMARK_,true);
} else {
return G__26232;
}
})());


var G__26245 = seq__26225_26237;
var G__26246 = chunk__26226_26238;
var G__26247 = count__26227_26239;
var G__26248 = (i__26228_26240 + (1));
seq__26225_26237 = G__26245;
chunk__26226_26238 = G__26246;
count__26227_26239 = G__26247;
i__26228_26240 = G__26248;
continue;
} else {
var temp__5720__auto___26249 = cljs.core.seq(seq__26225_26237);
if(temp__5720__auto___26249){
var seq__26225_26250__$1 = temp__5720__auto___26249;
if(cljs.core.chunked_seq_QMARK_(seq__26225_26250__$1)){
var c__4351__auto___26251 = cljs.core.chunk_first(seq__26225_26250__$1);
var G__26252 = cljs.core.chunk_rest(seq__26225_26250__$1);
var G__26253 = c__4351__auto___26251;
var G__26254 = cljs.core.count(c__4351__auto___26251);
var G__26255 = (0);
seq__26225_26237 = G__26252;
chunk__26226_26238 = G__26253;
count__26227_26239 = G__26254;
i__26228_26240 = G__26255;
continue;
} else {
var vec__26233_26256 = cljs.core.first(seq__26225_26250__$1);
var k_26257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26233_26256,(0),null);
var s_26258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26233_26256,(1),null);
var synthetic_QMARK__26259 = (function (){var and__3938__auto__ = spec_tools.core.spec_QMARK_(s_26258);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not(spec_tools.parse.collection_type_QMARK_(s_26258));
} else {
return and__3938__auto__;
}
})();
spec_tools.impl.register_spec_BANG_(k_26257,(function (){var G__26236 = s_26258;
if(cljs.core.truth_(synthetic_QMARK__26259)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26236,cljs.core.cst$kw$spec_DASH_tools$core_SLASH_synthetic_QMARK_,true);
} else {
return G__26236;
}
})());


var G__26260 = cljs.core.next(seq__26225_26250__$1);
var G__26261 = null;
var G__26262 = (0);
var G__26263 = (0);
seq__26225_26237 = G__26260;
chunk__26226_26238 = G__26261;
count__26227_26239 = G__26262;
i__26228_26240 = G__26263;
continue;
}
} else {
}
}
break;
}

return spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,(keys_spec.cljs$core$IFn$_invoke$arity$1 ? keys_spec.cljs$core$IFn$_invoke$arity$1(data__$1) : keys_spec.call(null,data__$1))], null));
}
});
spec_tools.data_spec._coll_spec = (function spec_tools$data_spec$_coll_spec(data,p__26264){
var map__26265 = p__26264;
var map__26265__$1 = ((((!((map__26265 == null)))?(((((map__26265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26265):map__26265);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26265__$1,cljs.core.cst$kw$name);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26265__$1,cljs.core.cst$kw$kind);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(data))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["data-spec collection ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind)," should be homogeneous, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(data))," values found"].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,n,cljs.core.cst$kw$kind,kind,cljs.core.cst$kw$values,data], null));
}

var spec = (function (){var G__26267 = n;
var G__26268 = cljs.core.first(data);
return (spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2 ? spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(G__26267,G__26268) : spec_tools.data_spec.spec.call(null,G__26267,G__26268));
})();
return spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,spec_tools.impl.coll_of_spec(spec,kind)], null));
});
spec_tools.data_spec._or_spec = (function spec_tools$data_spec$_or_spec(n,v){
if(((cljs.core.map_QMARK_(v)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(v))))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["data-spec or must be a map of keyword keys -> specs, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)," found"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,n,cljs.core.cst$kw$value,v], null));
}

return spec_tools.impl.or_spec(cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var iter__4324__auto__ = (function spec_tools$data_spec$_or_spec_$_iter__26269(s__26270){
return (new cljs.core.LazySeq(null,(function (){
var s__26270__$1 = s__26270;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26270__$1);
if(temp__5720__auto__){
var s__26270__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26270__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__26270__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__26272 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__26271 = (0);
while(true){
if((i__26271 < size__4323__auto__)){
var vec__26273 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__26271);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26273,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26273,(1),null);
cljs.core.chunk_append(b__26272,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__26276 = spec_tools.data_spec._nested_key(n,k);
var G__26277 = v__$1;
return (spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2 ? spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(G__26276,G__26277) : spec_tools.data_spec.spec.call(null,G__26276,G__26277));
})()], null));

var G__26283 = (i__26271 + (1));
i__26271 = G__26283;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26272),spec_tools$data_spec$_or_spec_$_iter__26269(cljs.core.chunk_rest(s__26270__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26272),null);
}
} else {
var vec__26278 = cljs.core.first(s__26270__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26278,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26278,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__26281 = spec_tools.data_spec._nested_key(n,k);
var G__26282 = v__$1;
return (spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2 ? spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(G__26281,G__26282) : spec_tools.data_spec.spec.call(null,G__26281,G__26282));
})()], null),spec_tools$data_spec$_or_spec_$_iter__26269(cljs.core.rest(s__26270__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(v);
})(),cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Creates a `clojure.spec.alpha/Spec` out of a data-spec. Supports 2 arities:
 * 
 *   ```clojure
 *   ;; arity1
 *   (ds/spec
 *  {:spec {:i int?}
 *   :name ::map})
 * 
 *   ;; arity2 (legacy)
 *   (ds/spec ::map {:i int?})
 *   ```
 * 
 *   The following options are valid for the 1 arity case:
 * 
 *   | Key              | Description
 *   | -----------------|----------------
 *   | `:spec`          | The wrapped data-spec.
 *   | `:name`          | Qualified root spec name - used to generate unique names for sub-specs.
 *   | `:keys-spec`     | Function to wrap not-wrapped keys, e.g. [[opt]] to make keys optional by default.
 *   | `:keys-default`  | Function to generate the keys-specs, default [[keys-specs]].
 */
spec_tools.data_spec.spec = (function spec_tools$data_spec$spec(var_args){
var G__26287 = arguments.length;
switch (G__26287) {
case 1:
return spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1 = (function (p__26288){
var map__26289 = p__26288;
var map__26289__$1 = ((((!((map__26289 == null)))?(((((map__26289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26289):map__26289);
var opts = map__26289__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26289__$1,cljs.core.cst$kw$spec);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26289__$1,cljs.core.cst$kw$name);
var nested_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26289__$1,cljs.core.cst$kw$spec_DASH_tools$data_DASH_spec_SLASH_nested_QMARK_);
if(cljs.core.truth_(spec_tools.data_spec.spec)){
} else {
throw (new Error(["Assert failed: ","missing :spec predicate in data-spec","\n","spec"].join('')));
}

var opts__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$name,name),cljs.core.cst$kw$spec);
var named_spec = ((function (opts__$1,map__26289,map__26289__$1,opts,data,name,nested_QMARK_){
return (function (p1__26284_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26284_SHARP_,cljs.core.cst$kw$name,name);
});})(opts__$1,map__26289,map__26289__$1,opts,data,name,nested_QMARK_))
;
var maybe_named_spec = ((function (opts__$1,named_spec,map__26289,map__26289__$1,opts,data,name,nested_QMARK_){
return (function (p1__26285_SHARP_){
var G__26291 = p1__26285_SHARP_;
if(cljs.core.not(nested_QMARK_)){
return named_spec(G__26291);
} else {
return G__26291;
}
});})(opts__$1,named_spec,map__26289,map__26289__$1,opts,data,name,nested_QMARK_))
;
var nested_opts = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,cljs.core.cst$kw$spec_DASH_tools$data_DASH_spec_SLASH_nested_QMARK_,true);
if(cljs.core.truth_(spec_tools.core.spec_QMARK_(data))){
return maybe_named_spec(data);
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(data))){
return data;
} else {
if(cljs.core.truth_(spec_tools.data_spec.or_QMARK_(data))){
return spec_tools.data_spec._or_spec(name,cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(data));
} else {
if(cljs.core.truth_(spec_tools.data_spec.maybe_QMARK_(data))){
return spec_tools.impl.nilable_spec(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(name,cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(data)));
} else {
if(cljs.core.map_QMARK_(data)){
return named_spec(spec_tools.data_spec._map_spec(data,nested_opts));
} else {
if(cljs.core.set_QMARK_(data)){
return maybe_named_spec(spec_tools.data_spec._coll_spec(data,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nested_opts,cljs.core.cst$kw$kind,cljs.core.PersistentHashSet.EMPTY)));
} else {
if(cljs.core.vector_QMARK_(data)){
return maybe_named_spec(spec_tools.data_spec._coll_spec(data,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nested_opts,cljs.core.cst$kw$kind,cljs.core.PersistentVector.EMPTY)));
} else {
return maybe_named_spec(spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,data], null)));

}
}
}
}
}
}
}
});

spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2 = (function (name,data){
return spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$spec,data], null));
});

spec_tools.data_spec.spec.cljs$lang$maxFixedArity = 2;

