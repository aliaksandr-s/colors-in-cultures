// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('datascript.parser');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('datascript.db');




/**
 * @interface
 */
datascript.parser.ITraversable = function(){};

datascript.parser._collect = (function datascript$parser$_collect(_,pred,acc){
if(((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect$arity$3 == null))))){
return _.datascript$parser$ITraversable$_collect$arity$3(_,pred,acc);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (datascript.parser._collect[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(_,pred,acc) : m__4244__auto__.call(null,_,pred,acc));
} else {
var m__4244__auto____$1 = (datascript.parser._collect["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(_,pred,acc) : m__4244__auto____$1.call(null,_,pred,acc));
} else {
throw cljs.core.missing_protocol("ITraversable.-collect",_);
}
}
}
});

datascript.parser._collect_vars = (function datascript$parser$_collect_vars(_,acc){
if(((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect_vars$arity$2 == null))))){
return _.datascript$parser$ITraversable$_collect_vars$arity$2(_,acc);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (datascript.parser._collect_vars[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(_,acc) : m__4244__auto__.call(null,_,acc));
} else {
var m__4244__auto____$1 = (datascript.parser._collect_vars["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(_,acc) : m__4244__auto____$1.call(null,_,acc));
} else {
throw cljs.core.missing_protocol("ITraversable.-collect-vars",_);
}
}
}
});

datascript.parser._postwalk = (function datascript$parser$_postwalk(_,f){
if(((!((_ == null))) && (!((_.datascript$parser$ITraversable$_postwalk$arity$2 == null))))){
return _.datascript$parser$ITraversable$_postwalk$arity$2(_,f);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (datascript.parser._postwalk[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4244__auto__.call(null,_,f));
} else {
var m__4244__auto____$1 = (datascript.parser._postwalk["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(_,f) : m__4244__auto____$1.call(null,_,f));
} else {
throw cljs.core.missing_protocol("ITraversable.-postwalk",_);
}
}
}
});

datascript.parser.of_size_QMARK_ = (function datascript$parser$of_size_QMARK_(form,size){
return ((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),size)));
});
datascript.parser.parse_seq = (function datascript$parser$parse_seq(parse_el,form){
if(cljs.core.sequential_QMARK_(form)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__22987_SHARP_,p2__22986_SHARP_){
var temp__5718__auto__ = (parse_el.cljs$core$IFn$_invoke$arity$1 ? parse_el.cljs$core$IFn$_invoke$arity$1(p2__22986_SHARP_) : parse_el.call(null,p2__22986_SHARP_));
if(cljs.core.truth_(temp__5718__auto__)){
var parsed = temp__5718__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__22987_SHARP_,parsed);
} else {
return cljs.core.reduced(null);
}
}),cljs.core.PersistentVector.EMPTY,form);
} else {
return null;
}
});
datascript.parser.collect = (function datascript$parser$collect(var_args){
var G__22989 = arguments.length;
switch (G__22989) {
case 2:
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.parser.collect.cljs$core$IFn$_invoke$arity$2 = (function (pred,form){
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred,form,cljs.core.PersistentVector.EMPTY);
});

datascript.parser.collect.cljs$core$IFn$_invoke$arity$3 = (function (pred,form,acc){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(form) : pred.call(null,form)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,form);
} else {
if(((!((form == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$))))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form))){
return datascript.parser._collect(form,pred,acc);
} else {
if(datascript.db.seqable_QMARK_(form)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,form__$1){
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred,form__$1,acc__$1);
}),acc,form);
} else {
return acc;

}
}
}
});

datascript.parser.collect.cljs$lang$maxFixedArity = 3;

datascript.parser.distinct_QMARK_ = (function datascript$parser$distinct_QMARK_(coll){
var or__3949__auto__ = cljs.core.empty_QMARK_(coll);
if(or__3949__auto__){
return or__3949__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,coll);
}
});
datascript.parser.postwalk = (function datascript$parser$postwalk(form,f){
if(((!((form == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$))))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form))){
var G__22995 = datascript.parser._postwalk(form,f);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22995) : f.call(null,G__22995));
} else {
if(cljs.core.map_QMARK_(form)){
var G__22996 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (form__$1,p__22997){
var vec__22998 = p__22997;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22998,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22998,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form__$1,k,(datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2(v,f) : datascript.parser.postwalk.call(null,v,f)));
}),form,form);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22996) : f.call(null,G__22996));
} else {
if(cljs.core.seq_QMARK_(form)){
var G__23001 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22992_SHARP_){
return (datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2(p1__22992_SHARP_,f) : datascript.parser.postwalk.call(null,p1__22992_SHARP_,f));
}),form);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23001) : f.call(null,G__23001));
} else {
if(cljs.core.coll_QMARK_(form)){
var G__23002 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(form),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22993_SHARP_){
return (datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2(p1__22993_SHARP_,f) : datascript.parser.postwalk.call(null,p1__22993_SHARP_,f));
}),form));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23002) : f.call(null,G__23002));
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(form) : f.call(null,form));

}
}
}
}
});
datascript.parser.with_source = (function datascript$parser$with_source(obj,source){
return cljs.core.with_meta(obj,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,source], null));
});
datascript.parser.source = (function datascript$parser$source(obj){
var or__3949__auto__ = cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(obj));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return obj;
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Placeholder = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k23007,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__23011 = k23007;
switch (G__23011) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23007,else__4206__auto__);

}
});

datascript.parser.Placeholder.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.parser.Placeholder{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23006){
var self__ = this;
var G__23006__$1 = this;
return (new cljs.core.RecordIter((0),G__23006__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Placeholder.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Placeholder.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.parser.Placeholder(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__23012 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-528488587 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__23012(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23008,other23009){
var self__ = this;
var this23008__$1 = this;
return ((!((other23009 == null))) && ((this23008__$1.constructor === other23009.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23008__$1.__extmap,other23009.__extmap)));
});

datascript.parser.Placeholder.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__23006){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__23013 = cljs.core.keyword_identical_QMARK_;
var expr__23014 = k__4211__auto__;
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__23006),null));
});

datascript.parser.Placeholder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__23006){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.parser.Placeholder(G__23006,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21799__auto__,f23003){
var self__ = this;
var this__21799__auto____$1 = this;
var new__21800__auto__ = (new datascript.parser.Placeholder(null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__21799__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__21801__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__21800__auto__,meta__21801__auto__);
} else {
return new__21800__auto__;
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21802__auto__,pred23004,acc23005){
var self__ = this;
var ___21802__auto____$1 = this;
return acc23005;
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21802__auto__,acc23005){
var self__ = this;
var ___21802__auto____$1 = this;
return acc23005;
});

datascript.parser.Placeholder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.Placeholder.cljs$lang$type = true;

datascript.parser.Placeholder.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.parser/Placeholder",null,(1),null));
});

datascript.parser.Placeholder.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.parser/Placeholder");
});

/**
 * Positional factory function for datascript.parser/Placeholder.
 */
datascript.parser.__GT_Placeholder = (function datascript$parser$__GT_Placeholder(){
return (new datascript.parser.Placeholder(null,null,null));
});

/**
 * Factory function for datascript.parser/Placeholder, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Placeholder = (function datascript$parser$map__GT_Placeholder(G__23010){
var extmap__4236__auto__ = (function (){var G__23016 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__23010);
if(cljs.core.record_QMARK_(G__23010)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23016);
} else {
return G__23016;
}
})();
return (new datascript.parser.Placeholder(null,cljs.core.not_empty(extmap__4236__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Variable = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k23022,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__23026 = k23022;
var G__23026__$1 = (((G__23026 instanceof cljs.core.Keyword))?G__23026.fqn:null);
switch (G__23026__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23022,else__4206__auto__);

}
});

datascript.parser.Variable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.parser.Variable{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$symbol,self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23021){
var self__ = this;
var G__23021__$1 = this;
return (new cljs.core.RecordIter((0),G__23021__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$symbol], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Variable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Variable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__23027 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (736891289 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__23027(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.parser.Variable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23023,other23024){
var self__ = this;
var this23023__$1 = this;
return ((!((other23024 == null))) && ((this23023__$1.constructor === other23024.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23023__$1.symbol,other23024.symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23023__$1.__extmap,other23024.__extmap)));
});

datascript.parser.Variable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$symbol,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.parser.Variable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__23021){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__23028 = cljs.core.keyword_identical_QMARK_;
var expr__23029 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__23031 = cljs.core.cst$kw$symbol;
var G__23032 = expr__23029;
return (pred__23028.cljs$core$IFn$_invoke$arity$2 ? pred__23028.cljs$core$IFn$_invoke$arity$2(G__23031,G__23032) : pred__23028.call(null,G__23031,G__23032));
})())){
return (new datascript.parser.Variable(G__23021,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__23021),null));
}
});

datascript.parser.Variable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$symbol,self__.symbol,null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__23021){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,G__23021,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21799__auto__,f23018){
var self__ = this;
var this__21799__auto____$1 = this;
var new__21800__auto__ = (new datascript.parser.Variable(datascript.parser.postwalk(self__.symbol,f23018),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__21799__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__21801__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__21800__auto__,meta__21801__auto__);
} else {
return new__21800__auto__;
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21802__auto__,pred23019,acc23020){
var self__ = this;
var ___21802__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23019,self__.symbol,acc23020);
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21802__auto__,acc23020){
var self__ = this;
var ___21802__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc23020,self__.symbol) : datascript.parser.collect_vars_acc.call(null,acc23020,self__.symbol));
});

datascript.parser.Variable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$symbol], null);
});

datascript.parser.Variable.cljs$lang$type = true;

datascript.parser.Variable.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.parser/Variable",null,(1),null));
});

datascript.parser.Variable.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.parser/Variable");
});

/**
 * Positional factory function for datascript.parser/Variable.
 */
datascript.parser.__GT_Variable = (function datascript$parser$__GT_Variable(symbol){
return (new datascript.parser.Variable(symbol,null,null,null));
});

/**
 * Factory function for datascript.parser/Variable, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Variable = (function datascript$parser$map__GT_Variable(G__23025){
var extmap__4236__auto__ = (function (){var G__23033 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23025,cljs.core.cst$kw$symbol);
if(cljs.core.record_QMARK_(G__23025)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23033);
} else {
return G__23033;
}
})();
return (new datascript.parser.Variable(cljs.core.cst$kw$symbol.cljs$core$IFn$_invoke$arity$1(G__23025),null,cljs.core.not_empty(extmap__4236__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.SrcVar = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k23039,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__23043 = k23039;
var G__23043__$1 = (((G__23043 instanceof cljs.core.Keyword))?G__23043.fqn:null);
switch (G__23043__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23039,else__4206__auto__);

}
});

datascript.parser.SrcVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.parser.SrcVar{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$symbol,self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23038){
var self__ = this;
var G__23038__$1 = this;
return (new cljs.core.RecordIter((0),G__23038__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$symbol], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.SrcVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.parser.SrcVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__23044 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1648766309 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__23044(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23040,other23041){
var self__ = this;
var this23040__$1 = this;
return ((!((other23041 == null))) && ((this23040__$1.constructor === other23041.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23040__$1.symbol,other23041.symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23040__$1.__extmap,other23041.__extmap)));
});

datascript.parser.SrcVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$symbol,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__23038){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__23045 = cljs.core.keyword_identical_QMARK_;
var expr__23046 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__23048 = cljs.core.cst$kw$symbol;
var G__23049 = expr__23046;
return (pred__23045.cljs$core$IFn$_invoke$arity$2 ? pred__23045.cljs$core$IFn$_invoke$arity$2(G__23048,G__23049) : pred__23045.call(null,G__23048,G__23049));
})())){
return (new datascript.parser.SrcVar(G__23038,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__23038),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$symbol,self__.symbol,null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__23038){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,G__23038,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21799__auto__,f23035){
var self__ = this;
var this__21799__auto____$1 = this;
var new__21800__auto__ = (new datascript.parser.SrcVar(datascript.parser.postwalk(self__.symbol,f23035),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__21799__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__21801__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__21800__auto__,meta__21801__auto__);
} else {
return new__21800__auto__;
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21802__auto__,pred23036,acc23037){
var self__ = this;
var ___21802__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23036,self__.symbol,acc23037);
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21802__auto__,acc23037){
var self__ = this;
var ___21802__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc23037,self__.symbol) : datascript.parser.collect_vars_acc.call(null,acc23037,self__.symbol));
});

datascript.parser.SrcVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$symbol], null);
});

datascript.parser.SrcVar.cljs$lang$type = true;

datascript.parser.SrcVar.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.parser/SrcVar",null,(1),null));
});

datascript.parser.SrcVar.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.parser/SrcVar");
});

/**
 * Positional factory function for datascript.parser/SrcVar.
 */
datascript.parser.__GT_SrcVar = (function datascript$parser$__GT_SrcVar(symbol){
return (new datascript.parser.SrcVar(symbol,null,null,null));
});

/**
 * Factory function for datascript.parser/SrcVar, taking a map of keywords to field values.
 */
datascript.parser.map__GT_SrcVar = (function datascript$parser$map__GT_SrcVar(G__23042){
var extmap__4236__auto__ = (function (){var G__23050 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23042,cljs.core.cst$kw$symbol);
if(cljs.core.record_QMARK_(G__23042)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23050);
} else {
return G__23050;
}
})();
return (new datascript.parser.SrcVar(cljs.core.cst$kw$symbol.cljs$core$IFn$_invoke$arity$1(G__23042),null,cljs.core.not_empty(extmap__4236__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.DefaultSrc = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k23056,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__23060 = k23056;
switch (G__23060) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23056,else__4206__auto__);

}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.parser.DefaultSrc{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23055){
var self__ = this;
var G__23055__$1 = this;
return (new cljs.core.RecordIter((0),G__23055__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.parser.DefaultSrc(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__23061 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-350962559 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__23061(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23057,other23058){
var self__ = this;
var this23057__$1 = this;
return ((!((other23058 == null))) && ((this23057__$1.constructor === other23058.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23057__$1.__extmap,other23058.__extmap)));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__23055){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__23062 = cljs.core.keyword_identical_QMARK_;
var expr__23063 = k__4211__auto__;
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__23055),null));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__23055){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.parser.DefaultSrc(G__23055,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21799__auto__,f23052){
var self__ = this;
var this__21799__auto____$1 = this;
var new__21800__auto__ = (new datascript.parser.DefaultSrc(null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__21799__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__21801__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__21800__auto__,meta__21801__auto__);
} else {
return new__21800__auto__;
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21802__auto__,pred23053,acc23054){
var self__ = this;
var ___21802__auto____$1 = this;
return acc23054;
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21802__auto__,acc23054){
var self__ = this;
var ___21802__auto____$1 = this;
return acc23054;
});

datascript.parser.DefaultSrc.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.DefaultSrc.cljs$lang$type = true;

datascript.parser.DefaultSrc.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.parser/DefaultSrc",null,(1),null));
});

datascript.parser.DefaultSrc.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.parser/DefaultSrc");
});

/**
 * Positional factory function for datascript.parser/DefaultSrc.
 */
datascript.parser.__GT_DefaultSrc = (function datascript$parser$__GT_DefaultSrc(){
return (new datascript.parser.DefaultSrc(null,null,null));
});

/**
 * Factory function for datascript.parser/DefaultSrc, taking a map of keywords to field values.
 */
datascript.parser.map__GT_DefaultSrc = (function datascript$parser$map__GT_DefaultSrc(G__23059){
var extmap__4236__auto__ = (function (){var G__23065 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__23059);
if(cljs.core.record_QMARK_(G__23059)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23065);
} else {
return G__23065;
}
})();
return (new datascript.parser.DefaultSrc(null,cljs.core.not_empty(extmap__4236__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RulesVar = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k23071,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__23075 = k23071;
switch (G__23075) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23071,else__4206__auto__);

}
});

datascript.parser.RulesVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.parser.RulesVar{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23070){
var self__ = this;
var G__23070__$1 = this;
return (new cljs.core.RecordIter((0),G__23070__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.RulesVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RulesVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.parser.RulesVar(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__23076 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1504050517 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__23076(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23072,other23073){
var self__ = this;
var this23072__$1 = this;
return ((!((other23073 == null))) && ((this23072__$1.constructor === other23073.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23072__$1.__extmap,other23073.__extmap)));
});

datascript.parser.RulesVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__23070){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__23077 = cljs.core.keyword_identical_QMARK_;
var expr__23078 = k__4211__auto__;
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__23070),null));
});

datascript.parser.RulesVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__23070){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.parser.RulesVar(G__23070,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21799__auto__,f23067){
var self__ = this;
var this__21799__auto____$1 = this;
var new__21800__auto__ = (new datascript.parser.RulesVar(null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__21799__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__21801__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__21800__auto__,meta__21801__auto__);
} else {
return new__21800__auto__;
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21802__auto__,pred23068,acc23069){
var self__ = this;
var ___21802__auto____$1 = this;
return acc23069;
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21802__auto__,acc23069){
var self__ = this;
var ___21802__auto____$1 = this;
return acc23069;
});

datascript.parser.RulesVar.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.RulesVar.cljs$lang$type = true;

datascript.parser.RulesVar.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.parser/RulesVar",null,(1),null));
});

datascript.parser.RulesVar.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.parser/RulesVar");
});

/**
 * Positional factory function for datascript.parser/RulesVar.
 */
datascript.parser.__GT_RulesVar = (function datascript$parser$__GT_RulesVar(){
return (new datascript.parser.RulesVar(null,null,null));
});

/**
 * Factory function for datascript.parser/RulesVar, taking a map of keywords to field values.
 */
datascript.parser.map__GT_RulesVar = (function datascript$parser$map__GT_RulesVar(G__23074){
var extmap__4236__auto__ = (function (){var G__23080 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__23074);
if(cljs.core.record_QMARK_(G__23074)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23080);
} else {
return G__23080;
}
})();
return (new datascript.parser.RulesVar(null,cljs.core.not_empty(extmap__4236__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Constant = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k23086,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__23090 = k23086;
var G__23090__$1 = (((G__23090 instanceof cljs.core.Keyword))?G__23090.fqn:null);
switch (G__23090__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23086,else__4206__auto__);

}
});

datascript.parser.Constant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.parser.Constant{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23085){
var self__ = this;
var G__23085__$1 = this;
return (new cljs.core.RecordIter((0),G__23085__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Constant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Constant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__23091 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-812884714 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__23091(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.parser.Constant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23087,other23088){
var self__ = this;
var this23087__$1 = this;
return ((!((other23088 == null))) && ((this23087__$1.constructor === other23088.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23087__$1.value,other23088.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23087__$1.__extmap,other23088.__extmap)));
});

datascript.parser.Constant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.parser.Constant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__23085){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__23092 = cljs.core.keyword_identical_QMARK_;
var expr__23093 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__23095 = cljs.core.cst$kw$value;
var G__23096 = expr__23093;
return (pred__23092.cljs$core$IFn$_invoke$arity$2 ? pred__23092.cljs$core$IFn$_invoke$arity$2(G__23095,G__23096) : pred__23092.call(null,G__23095,G__23096));
})())){
return (new datascript.parser.Constant(G__23085,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__23085),null));
}
});

datascript.parser.Constant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$value,self__.value,null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__23085){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,G__23085,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21799__auto__,f23082){
var self__ = this;
var this__21799__auto____$1 = this;
var new__21800__auto__ = (new datascript.parser.Constant(datascript.parser.postwalk(self__.value,f23082),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__21799__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__21801__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__21800__auto__,meta__21801__auto__);
} else {
return new__21800__auto__;
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21802__auto__,pred23083,acc23084){
var self__ = this;
var ___21802__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23083,self__.value,acc23084);
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21802__auto__,acc23084){
var self__ = this;
var ___21802__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc23084,self__.value) : datascript.parser.collect_vars_acc.call(null,acc23084,self__.value));
});

datascript.parser.Constant.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$value], null);
});

datascript.parser.Constant.cljs$lang$type = true;

datascript.parser.Constant.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.parser/Constant",null,(1),null));
});

datascript.parser.Constant.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.parser/Constant");
});

/**
 * Positional factory function for datascript.parser/Constant.
 */
datascript.parser.__GT_Constant = (function datascript$parser$__GT_Constant(value){
return (new datascript.parser.Constant(value,null,null,null));
});

/**
 * Factory function for datascript.parser/Constant, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Constant = (function datascript$parser$map__GT_Constant(G__23089){
var extmap__4236__auto__ = (function (){var G__23097 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23089,cljs.core.cst$kw$value);
if(cljs.core.record_QMARK_(G__23089)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23097);
} else {
return G__23097;
}
})();
return (new datascript.parser.Constant(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__23089),null,cljs.core.not_empty(extmap__4236__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.PlainSymbol = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k23103,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__23107 = k23103;
var G__23107__$1 = (((G__23107 instanceof cljs.core.Keyword))?G__23107.fqn:null);
switch (G__23107__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23103,else__4206__auto__);

}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.parser.PlainSymbol{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$symbol,self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23102){
var self__ = this;
var G__23102__$1 = this;
return (new cljs.core.RecordIter((0),G__23102__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$symbol], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__23108 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1509921913 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__23108(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23104,other23105){
var self__ = this;
var this23104__$1 = this;
return ((!((other23105 == null))) && ((this23104__$1.constructor === other23105.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23104__$1.symbol,other23105.symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23104__$1.__extmap,other23105.__extmap)));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$symbol,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__23102){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__23109 = cljs.core.keyword_identical_QMARK_;
var expr__23110 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__23112 = cljs.core.cst$kw$symbol;
var G__23113 = expr__23110;
return (pred__23109.cljs$core$IFn$_invoke$arity$2 ? pred__23109.cljs$core$IFn$_invoke$arity$2(G__23112,G__23113) : pred__23109.call(null,G__23112,G__23113));
})())){
return (new datascript.parser.PlainSymbol(G__23102,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__23102),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$symbol,self__.symbol,null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__23102){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,G__23102,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21799__auto__,f23099){
var self__ = this;
var this__21799__auto____$1 = this;
var new__21800__auto__ = (new datascript.parser.PlainSymbol(datascript.parser.postwalk(self__.symbol,f23099),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__21799__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__21801__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__21800__auto__,meta__21801__auto__);
} else {
return new__21800__auto__;
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21802__auto__,pred23100,acc23101){
var self__ = this;
var ___21802__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23100,self__.symbol,acc23101);
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21802__auto__,acc23101){
var self__ = this;
var ___21802__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc23101,self__.symbol) : datascript.parser.collect_vars_acc.call(null,acc23101,self__.symbol));
});

datascript.parser.PlainSymbol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$symbol], null);
});

datascript.parser.PlainSymbol.cljs$lang$type = true;

datascript.parser.PlainSymbol.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.parser/PlainSymbol",null,(1),null));
});

datascript.parser.PlainSymbol.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.parser/PlainSymbol");
});

/**
 * Positional factory function for datascript.parser/PlainSymbol.
 */
datascript.parser.__GT_PlainSymbol = (function datascript$parser$__GT_PlainSymbol(symbol){
return (new datascript.parser.PlainSymbol(symbol,null,null,null));
});

/**
 * Factory function for datascript.parser/PlainSymbol, taking a map of keywords to field values.
 */
datascript.parser.map__GT_PlainSymbol = (function datascript$parser$map__GT_PlainSymbol(G__23106){
var extmap__4236__auto__ = (function (){var G__23114 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23106,cljs.core.cst$kw$symbol);
if(cljs.core.record_QMARK_(G__23106)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23114);
} else {
return G__23114;
}
})();
return (new datascript.parser.PlainSymbol(cljs.core.cst$kw$symbol.cljs$core$IFn$_invoke$arity$1(G__23106),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

datascript.parser.parse_placeholder = (function datascript$parser$parse_placeholder(form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,form)){
return (new datascript.parser.Placeholder(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_variable = (function datascript$parser$parse_variable(form){
if((((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.name(form)),"?")))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_src_var = (function datascript$parser$parse_src_var(form){
if((((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.name(form)),"$")))){
return (new datascript.parser.SrcVar(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_rules_var = (function datascript$parser$parse_rules_var(form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_PERCENT_,form)){
return (new datascript.parser.RulesVar(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_constant = (function datascript$parser$parse_constant(form){
if(!((form instanceof cljs.core.Symbol))){
return (new datascript.parser.Constant(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_symbol = (function datascript$parser$parse_plain_symbol(form){
if((((form instanceof cljs.core.Symbol)) && (cljs.core.not(datascript.parser.parse_variable(form))) && (cljs.core.not(datascript.parser.parse_src_var(form))) && (cljs.core.not(datascript.parser.parse_rules_var(form))) && (cljs.core.not(datascript.parser.parse_placeholder(form))))){
return (new datascript.parser.PlainSymbol(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_variable = (function datascript$parser$parse_plain_variable(form){
if(cljs.core.truth_(datascript.parser.parse_plain_symbol(form))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_fn_arg = (function datascript$parser$parse_fn_arg(form){
var or__3949__auto__ = datascript.parser.parse_variable(form);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = datascript.parser.parse_constant(form);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return datascript.parser.parse_src_var(form);
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleVars = (function (required,free,__meta,__extmap,__hash){
this.required = required;
this.free = free;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k23120,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__23124 = k23120;
var G__23124__$1 = (((G__23124 instanceof cljs.core.Keyword))?G__23124.fqn:null);
switch (G__23124__$1) {
case "required":
return self__.required;

break;
case "free":
return self__.free;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23120,else__4206__auto__);

}
});

datascript.parser.RuleVars.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.parser.RuleVars{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$required,self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$free,self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23119){
var self__ = this;
var G__23119__$1 = this;
return (new cljs.core.RecordIter((0),G__23119__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$required,cljs.core.cst$kw$free], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.RuleVars.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleVars.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__23125 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (892963297 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__23125(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23121,other23122){
var self__ = this;
var this23121__$1 = this;
return ((!((other23122 == null))) && ((this23121__$1.constructor === other23122.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23121__$1.required,other23122.required)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23121__$1.free,other23122.free)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23121__$1.__extmap,other23122.__extmap)));
});

datascript.parser.RuleVars.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$free,null,cljs.core.cst$kw$required,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__23119){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__23126 = cljs.core.keyword_identical_QMARK_;
var expr__23127 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__23129 = cljs.core.cst$kw$required;
var G__23130 = expr__23127;
return (pred__23126.cljs$core$IFn$_invoke$arity$2 ? pred__23126.cljs$core$IFn$_invoke$arity$2(G__23129,G__23130) : pred__23126.call(null,G__23129,G__23130));
})())){
return (new datascript.parser.RuleVars(G__23119,self__.free,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23131 = cljs.core.cst$kw$free;
var G__23132 = expr__23127;
return (pred__23126.cljs$core$IFn$_invoke$arity$2 ? pred__23126.cljs$core$IFn$_invoke$arity$2(G__23131,G__23132) : pred__23126.call(null,G__23131,G__23132));
})())){
return (new datascript.parser.RuleVars(self__.required,G__23119,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__23119),null));
}
}
});

datascript.parser.RuleVars.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$required,self__.required,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$free,self__.free,null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__23119){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,G__23119,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21799__auto__,f23116){
var self__ = this;
var this__21799__auto____$1 = this;
var new__21800__auto__ = (new datascript.parser.RuleVars(datascript.parser.postwalk(self__.required,f23116),datascript.parser.postwalk(self__.free,f23116),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__21799__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__21801__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__21800__auto__,meta__21801__auto__);
} else {
return new__21800__auto__;
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21802__auto__,pred23117,acc23118){
var self__ = this;
var ___21802__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23117,self__.free,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23117,self__.required,acc23118));
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21802__auto__,acc23118){
var self__ = this;
var ___21802__auto____$1 = this;
var G__23133 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc23118,self__.required) : datascript.parser.collect_vars_acc.call(null,acc23118,self__.required));
var G__23134 = self__.free;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__23133,G__23134) : datascript.parser.collect_vars_acc.call(null,G__23133,G__23134));
});

datascript.parser.RuleVars.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$required,cljs.core.cst$sym$free], null);
});

datascript.parser.RuleVars.cljs$lang$type = true;

datascript.parser.RuleVars.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.parser/RuleVars",null,(1),null));
});

datascript.parser.RuleVars.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.parser/RuleVars");
});

/**
 * Positional factory function for datascript.parser/RuleVars.
 */
datascript.parser.__GT_RuleVars = (function datascript$parser$__GT_RuleVars(required,free){
return (new datascript.parser.RuleVars(required,free,null,null,null));
});

/**
 * Factory function for datascript.parser/RuleVars, taking a map of keywords to field values.
 */
datascript.parser.map__GT_RuleVars = (function datascript$parser$map__GT_RuleVars(G__23123){
var extmap__4236__auto__ = (function (){var G__23135 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23123,cljs.core.cst$kw$required,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$free], 0));
if(cljs.core.record_QMARK_(G__23123)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23135);
} else {
return G__23135;
}
})();
return (new datascript.parser.RuleVars(cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(G__23123),cljs.core.cst$kw$free.cljs$core$IFn$_invoke$arity$1(G__23123),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

datascript.parser.parse_rule_vars = (function datascript$parser$parse_rule_vars(form){
if(cljs.core.sequential_QMARK_(form)){
var vec__23137 = ((cljs.core.sequential_QMARK_(cljs.core.first(form)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(form),cljs.core.next(form)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,form], null));
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23137,(0),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23137,(1),null);
var required_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_variable,required);
var free_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_variable,rest);
if(((cljs.core.empty_QMARK_(required_STAR_)) && (cljs.core.empty_QMARK_(free_STAR_)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule_DASH_vars,cljs.core.cst$kw$form,form], null));
} else {
}

if(cljs.core.truth_(datascript.parser.distinct_QMARK_(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required_STAR_,free_STAR_)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Rule variables should be distinct"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule_DASH_vars,cljs.core.cst$kw$form,form], null));
}

return (new datascript.parser.RuleVars(required_STAR_,free_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule_DASH_vars,cljs.core.cst$kw$form,form], null));
}
});
datascript.parser.flatten_rule_vars = (function datascript$parser$flatten_rule_vars(rule_vars){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(rule_vars))?(function (){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(rule_vars))], null);

return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,cljs.core.cst$kw$free.cljs$core$IFn$_invoke$arity$1(rule_vars));
})()
:null));
});
datascript.parser.rule_vars_arity = (function datascript$parser$rule_vars_arity(rule_vars){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(rule_vars)),cljs.core.count(cljs.core.cst$kw$free.cljs$core$IFn$_invoke$arity$1(rule_vars))], null);
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindIgnore = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k23144,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__23148 = k23144;
switch (G__23148) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23144,else__4206__auto__);

}
});

datascript.parser.BindIgnore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.parser.BindIgnore{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23143){
var self__ = this;
var G__23143__$1 = this;
return (new cljs.core.RecordIter((0),G__23143__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.BindIgnore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindIgnore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.parser.BindIgnore(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__23149 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-890522983 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__23149(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23145,other23146){
var self__ = this;
var this23145__$1 = this;
return ((!((other23146 == null))) && ((this23145__$1.constructor === other23146.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23145__$1.__extmap,other23146.__extmap)));
});

datascript.parser.BindIgnore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__23143){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__23150 = cljs.core.keyword_identical_QMARK_;
var expr__23151 = k__4211__auto__;
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__23143),null));
});

datascript.parser.BindIgnore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__23143){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.parser.BindIgnore(G__23143,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21799__auto__,f23140){
var self__ = this;
var this__21799__auto____$1 = this;
var new__21800__auto__ = (new datascript.parser.BindIgnore(null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__21799__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__21801__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__21800__auto__,meta__21801__auto__);
} else {
return new__21800__auto__;
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21802__auto__,pred23141,acc23142){
var self__ = this;
var ___21802__auto____$1 = this;
return acc23142;
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21802__auto__,acc23142){
var self__ = this;
var ___21802__auto____$1 = this;
return acc23142;
});

datascript.parser.BindIgnore.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.BindIgnore.cljs$lang$type = true;

datascript.parser.BindIgnore.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.parser/BindIgnore",null,(1),null));
});

datascript.parser.BindIgnore.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.parser/BindIgnore");
});

/**
 * Positional factory function for datascript.parser/BindIgnore.
 */
datascript.parser.__GT_BindIgnore = (function datascript$parser$__GT_BindIgnore(){
return (new datascript.parser.BindIgnore(null,null,null));
});

/**
 * Factory function for datascript.parser/BindIgnore, taking a map of keywords to field values.
 */
datascript.parser.map__GT_BindIgnore = (function datascript$parser$map__GT_BindIgnore(G__23147){
var extmap__4236__auto__ = (function (){var G__23153 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__23147);
if(cljs.core.record_QMARK_(G__23147)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23153);
} else {
return G__23153;
}
})();
return (new datascript.parser.BindIgnore(null,cljs.core.not_empty(extmap__4236__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindScalar = (function (variable,__meta,__extmap,__hash){
this.variable = variable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k23159,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__23163 = k23159;
var G__23163__$1 = (((G__23163 instanceof cljs.core.Keyword))?G__23163.fqn:null);
switch (G__23163__$1) {
case "variable":
return self__.variable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23159,else__4206__auto__);

}
});

datascript.parser.BindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.parser.BindScalar{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$variable,self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23158){
var self__ = this;
var G__23158__$1 = this;
return (new cljs.core.RecordIter((0),G__23158__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$variable], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.BindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__23164 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1522792445 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__23164(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23160,other23161){
var self__ = this;
var this23160__$1 = this;
return ((!((other23161 == null))) && ((this23160__$1.constructor === other23161.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23160__$1.variable,other23161.variable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23160__$1.__extmap,other23161.__extmap)));
});

datascript.parser.BindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$variable,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__23158){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__23165 = cljs.core.keyword_identical_QMARK_;
var expr__23166 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__23168 = cljs.core.cst$kw$variable;
var G__23169 = expr__23166;
return (pred__23165.cljs$core$IFn$_invoke$arity$2 ? pred__23165.cljs$core$IFn$_invoke$arity$2(G__23168,G__23169) : pred__23165.call(null,G__23168,G__23169));
})())){
return (new datascript.parser.BindScalar(G__23158,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__23158),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$variable,self__.variable,null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__23158){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,G__23158,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21799__auto__,f23155){
var self__ = this;
var this__21799__auto____$1 = this;
var new__21800__auto__ = (new datascript.parser.BindScalar(datascript.parser.postwalk(self__.variable,f23155),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__21799__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__21801__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__21800__auto__,meta__21801__auto__);
} else {
return new__21800__auto__;
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21802__auto__,pred23156,acc23157){
var self__ = this;
var ___21802__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23156,self__.variable,acc23157);
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21802__auto__,acc23157){
var self__ = this;
var ___21802__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc23157,self__.variable) : datascript.parser.collect_vars_acc.call(null,acc23157,self__.variable));
});

datascript.parser.BindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$variable], null);
});

datascript.parser.BindScalar.cljs$lang$type = true;

datascript.parser.BindScalar.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.parser/BindScalar",null,(1),null));
});

datascript.parser.BindScalar.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.parser/BindScalar");
});

/**
 * Positional factory function for datascript.parser/BindScalar.
 */
datascript.parser.__GT_BindScalar = (function datascript$parser$__GT_BindScalar(variable){
return (new datascript.parser.BindScalar(variable,null,null,null));
});

/**
 * Factory function for datascript.parser/BindScalar, taking a map of keywords to field values.
 */
datascript.parser.map__GT_BindScalar = (function datascript$parser$map__GT_BindScalar(G__23162){
var extmap__4236__auto__ = (function (){var G__23170 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23162,cljs.core.cst$kw$variable);
if(cljs.core.record_QMARK_(G__23162)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23170);
} else {
return G__23170;
}
})();
return (new datascript.parser.BindScalar(cljs.core.cst$kw$variable.cljs$core$IFn$_invoke$arity$1(G__23162),null,cljs.core.not_empty(extmap__4236__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindTuple = (function (bindings,__meta,__extmap,__hash){
this.bindings = bindings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k23176,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__23180 = k23176;
var G__23180__$1 = (((G__23180 instanceof cljs.core.Keyword))?G__23180.fqn:null);
switch (G__23180__$1) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23176,else__4206__auto__);

}
});

datascript.parser.BindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.parser.BindTuple{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$bindings,self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23175){
var self__ = this;
var G__23175__$1 = this;
return (new cljs.core.RecordIter((0),G__23175__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bindings], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.BindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__23181 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1637239347 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__23181(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23177,other23178){
var self__ = this;
var this23177__$1 = this;
return ((!((other23178 == null))) && ((this23177__$1.constructor === other23178.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23177__$1.bindings,other23178.bindings)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23177__$1.__extmap,other23178.__extmap)));
});

datascript.parser.BindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bindings,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__23175){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__23182 = cljs.core.keyword_identical_QMARK_;
var expr__23183 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__23185 = cljs.core.cst$kw$bindings;
var G__23186 = expr__23183;
return (pred__23182.cljs$core$IFn$_invoke$arity$2 ? pred__23182.cljs$core$IFn$_invoke$arity$2(G__23185,G__23186) : pred__23182.call(null,G__23185,G__23186));
})())){
return (new datascript.parser.BindTuple(G__23175,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__23175),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$bindings,self__.bindings,null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__23175){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,G__23175,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21799__auto__,f23172){
var self__ = this;
var this__21799__auto____$1 = this;
var new__21800__auto__ = (new datascript.parser.BindTuple(datascript.parser.postwalk(self__.bindings,f23172),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__21799__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__21801__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__21800__auto__,meta__21801__auto__);
} else {
return new__21800__auto__;
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21802__auto__,pred23173,acc23174){
var self__ = this;
var ___21802__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23173,self__.bindings,acc23174);
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21802__auto__,acc23174){
var self__ = this;
var ___21802__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc23174,self__.bindings) : datascript.parser.collect_vars_acc.call(null,acc23174,self__.bindings));
});

datascript.parser.BindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$bindings], null);
});

datascript.parser.BindTuple.cljs$lang$type = true;

datascript.parser.BindTuple.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.parser/BindTuple",null,(1),null));
});

datascript.parser.BindTuple.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.parser/BindTuple");
});

/**
 * Positional factory function for datascript.parser/BindTuple.
 */
datascript.parser.__GT_BindTuple = (function datascript$parser$__GT_BindTuple(bindings){
return (new datascript.parser.BindTuple(bindings,null,null,null));
});

/**
 * Factory function for datascript.parser/BindTuple, taking a map of keywords to field values.
 */
datascript.parser.map__GT_BindTuple = (function datascript$parser$map__GT_BindTuple(G__23179){
var extmap__4236__auto__ = (function (){var G__23187 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23179,cljs.core.cst$kw$bindings);
if(cljs.core.record_QMARK_(G__23179)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23187);
} else {
return G__23187;
}
})();
return (new datascript.parser.BindTuple(cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(G__23179),null,cljs.core.not_empty(extmap__4236__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindColl = (function (binding,__meta,__extmap,__hash){
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k23193,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__23197 = k23193;
var G__23197__$1 = (((G__23197 instanceof cljs.core.Keyword))?G__23197.fqn:null);
switch (G__23197__$1) {
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23193,else__4206__auto__);

}
});

datascript.parser.BindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.parser.BindColl{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$binding,self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23192){
var self__ = this;
var G__23192__$1 = this;
return (new cljs.core.RecordIter((0),G__23192__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$binding], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.BindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__23198 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1930368089 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__23198(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.parser.BindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23194,other23195){
var self__ = this;
var this23194__$1 = this;
return ((!((other23195 == null))) && ((this23194__$1.constructor === other23195.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23194__$1.binding,other23195.binding)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23194__$1.__extmap,other23195.__extmap)));
});

datascript.parser.BindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$binding,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__23192){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__23199 = cljs.core.keyword_identical_QMARK_;
var expr__23200 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__23202 = cljs.core.cst$kw$binding;
var G__23203 = expr__23200;
return (pred__23199.cljs$core$IFn$_invoke$arity$2 ? pred__23199.cljs$core$IFn$_invoke$arity$2(G__23202,G__23203) : pred__23199.call(null,G__23202,G__23203));
})())){
return (new datascript.parser.BindColl(G__23192,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__23192),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$binding,self__.binding,null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__23192){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,G__23192,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21799__auto__,f23189){
var self__ = this;
var this__21799__auto____$1 = this;
var new__21800__auto__ = (new datascript.parser.BindColl(datascript.parser.postwalk(self__.binding,f23189),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__21799__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__21801__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__21800__auto__,meta__21801__auto__);
} else {
return new__21800__auto__;
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21802__auto__,pred23190,acc23191){
var self__ = this;
var ___21802__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23190,self__.binding,acc23191);
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21802__auto__,acc23191){
var self__ = this;
var ___21802__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc23191,self__.binding) : datascript.parser.collect_vars_acc.call(null,acc23191,self__.binding));
});

datascript.parser.BindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$binding], null);
});

datascript.parser.BindColl.cljs$lang$type = true;

datascript.parser.BindColl.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.parser/BindColl",null,(1),null));
});

datascript.parser.BindColl.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.parser/BindColl");
});

/**
 * Positional factory function for datascript.parser/BindColl.
 */
datascript.parser.__GT_BindColl = (function datascript$parser$__GT_BindColl(binding){
return (new datascript.parser.BindColl(binding,null,null,null));
});

/**
 * Factory function for datascript.parser/BindColl, taking a map of keywords to field values.
 */
datascript.parser.map__GT_BindColl = (function datascript$parser$map__GT_BindColl(G__23196){
var extmap__4236__auto__ = (function (){var G__23204 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23196,cljs.core.cst$kw$binding);
if(cljs.core.record_QMARK_(G__23196)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23204);
} else {
return G__23204;
}
})();
return (new datascript.parser.BindColl(cljs.core.cst$kw$binding.cljs$core$IFn$_invoke$arity$1(G__23196),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

datascript.parser.parse_bind_ignore = (function datascript$parser$parse_bind_ignore(form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,form)){
return datascript.parser.with_source((new datascript.parser.BindIgnore(null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_scalar = (function datascript$parser$parse_bind_scalar(form){
var temp__5720__auto__ = datascript.parser.parse_variable(form);
if(cljs.core.truth_(temp__5720__auto__)){
var var$ = temp__5720__auto__;
return datascript.parser.with_source((new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_coll = (function datascript$parser$parse_bind_coll(form){
if(cljs.core.truth_((function (){var and__3938__auto__ = datascript.parser.of_size_QMARK_(form,(2));
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(form),cljs.core.cst$sym$$$$);
} else {
return and__3938__auto__;
}
})())){
var temp__5718__auto__ = (function (){var G__23206 = cljs.core.first(form);
return (datascript.parser.parse_binding.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_binding.cljs$core$IFn$_invoke$arity$1(G__23206) : datascript.parser.parse_binding.call(null,G__23206));
})();
if(cljs.core.truth_(temp__5718__auto__)){
var sub_bind = temp__5718__auto__;
return datascript.parser.with_source((new datascript.parser.BindColl(sub_bind,null,null,null)),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot parse collection binding"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_binding,cljs.core.cst$kw$form,form], null));
}
} else {
return null;
}
});
datascript.parser.parse_tuple_el = (function datascript$parser$parse_tuple_el(form){
var or__3949__auto__ = datascript.parser.parse_bind_ignore(form);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (datascript.parser.parse_binding.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_binding.cljs$core$IFn$_invoke$arity$1(form) : datascript.parser.parse_binding.call(null,form));
}
});
datascript.parser.parse_bind_tuple = (function datascript$parser$parse_bind_tuple(form){
var temp__5720__auto__ = datascript.parser.parse_seq(datascript.parser.parse_tuple_el,form);
if(cljs.core.truth_(temp__5720__auto__)){
var sub_bindings = temp__5720__auto__;
if(!(cljs.core.empty_QMARK_(sub_bindings))){
return datascript.parser.with_source((new datascript.parser.BindTuple(sub_bindings,null,null,null)),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Tuple binding cannot be empty"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_binding,cljs.core.cst$kw$form,form], null));
}
} else {
return null;
}
});
datascript.parser.parse_bind_rel = (function datascript$parser$parse_bind_rel(form){
if(cljs.core.truth_((function (){var and__3938__auto__ = datascript.parser.of_size_QMARK_(form,(1));
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.sequential_QMARK_(cljs.core.first(form));
} else {
return and__3938__auto__;
}
})())){
return datascript.parser.with_source((new datascript.parser.BindColl(datascript.parser.parse_bind_tuple(cljs.core.first(form)),null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_binding = (function datascript$parser$parse_binding(form){
var or__3949__auto__ = datascript.parser.parse_bind_coll(form);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = datascript.parser.parse_bind_rel(form);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = datascript.parser.parse_bind_tuple(form);
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
var or__3949__auto____$3 = datascript.parser.parse_bind_ignore(form);
if(cljs.core.truth_(or__3949__auto____$3)){
return or__3949__auto____$3;
} else {
var or__3949__auto____$4 = datascript.parser.parse_bind_scalar(form);
if(cljs.core.truth_(or__3949__auto____$4)){
return or__3949__auto____$4;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot parse binding, expected (bind-scalar | bind-tuple | bind-coll | bind-rel)"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_binding,cljs.core.cst$kw$form,form], null));
}
}
}
}
}
});

/**
 * @interface
 */
datascript.parser.IFindVars = function(){};

datascript.parser._find_vars = (function datascript$parser$_find_vars(this$){
if(((!((this$ == null))) && (!((this$.datascript$parser$IFindVars$_find_vars$arity$1 == null))))){
return this$.datascript$parser$IFindVars$_find_vars$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (datascript.parser._find_vars[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (datascript.parser._find_vars["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IFindVars.-find-vars",this$);
}
}
}
});

datascript.parser.Variable.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Variable.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1.symbol], null);
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
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Aggregate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars(cljs.core.last(self__.args));
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k23211,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__23215 = k23211;
var G__23215__$1 = (((G__23215 instanceof cljs.core.Keyword))?G__23215.fqn:null);
switch (G__23215__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23211,else__4206__auto__);

}
});

datascript.parser.Aggregate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.parser.Aggregate{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23210){
var self__ = this;
var G__23210__$1 = this;
return (new cljs.core.RecordIter((0),G__23210__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$args], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Aggregate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Aggregate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__23216 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-91097383 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__23216(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23212,other23213){
var self__ = this;
var this23212__$1 = this;
return ((!((other23213 == null))) && ((this23212__$1.constructor === other23213.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23212__$1.fn,other23213.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23212__$1.args,other23213.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23212__$1.__extmap,other23213.__extmap)));
});

datascript.parser.Aggregate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$fn,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__23210){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__23217 = cljs.core.keyword_identical_QMARK_;
var expr__23218 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__23220 = cljs.core.cst$kw$fn;
var G__23221 = expr__23218;
return (pred__23217.cljs$core$IFn$_invoke$arity$2 ? pred__23217.cljs$core$IFn$_invoke$arity$2(G__23220,G__23221) : pred__23217.call(null,G__23220,G__23221));
})())){
return (new datascript.parser.Aggregate(G__23210,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23222 = cljs.core.cst$kw$args;
var G__23223 = expr__23218;
return (pred__23217.cljs$core$IFn$_invoke$arity$2 ? pred__23217.cljs$core$IFn$_invoke$arity$2(G__23222,G__23223) : pred__23217.call(null,G__23222,G__23223));
})())){
return (new datascript.parser.Aggregate(self__.fn,G__23210,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__23210),null));
}
}
});

datascript.parser.Aggregate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$args,self__.args,null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__23210){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,G__23210,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21799__auto__,f23207){
var self__ = this;
var this__21799__auto____$1 = this;
var new__21800__auto__ = (new datascript.parser.Aggregate(datascript.parser.postwalk(self__.fn,f23207),datascript.parser.postwalk(self__.args,f23207),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__21799__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__21801__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__21800__auto__,meta__21801__auto__);
} else {
return new__21800__auto__;
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21802__auto__,pred23208,acc23209){
var self__ = this;
var ___21802__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23208,self__.args,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23208,self__.fn,acc23209));
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21802__auto__,acc23209){
var self__ = this;
var ___21802__auto____$1 = this;
var G__23224 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc23209,self__.fn) : datascript.parser.collect_vars_acc.call(null,acc23209,self__.fn));
var G__23225 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__23224,G__23225) : datascript.parser.collect_vars_acc.call(null,G__23224,G__23225));
});

datascript.parser.Aggregate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$args], null);
});

datascript.parser.Aggregate.cljs$lang$type = true;

datascript.parser.Aggregate.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.parser/Aggregate",null,(1),null));
});

datascript.parser.Aggregate.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.parser/Aggregate");
});

/**
 * Positional factory function for datascript.parser/Aggregate.
 */
datascript.parser.__GT_Aggregate = (function datascript$parser$__GT_Aggregate(fn,args){
return (new datascript.parser.Aggregate(fn,args,null,null,null));
});

/**
 * Factory function for datascript.parser/Aggregate, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Aggregate = (function datascript$parser$map__GT_Aggregate(G__23214){
var extmap__4236__auto__ = (function (){var G__23226 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23214,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$args], 0));
if(cljs.core.record_QMARK_(G__23214)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23226);
} else {
return G__23226;
}
})();
return (new datascript.parser.Aggregate(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__23214),cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(G__23214),null,cljs.core.not_empty(extmap__4236__auto__),null));
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
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pull = (function (source,variable,pattern,__meta,__extmap,__hash){
this.source = source;
this.variable = variable;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Pull.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Pull.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars(self__.variable);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k23232,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__23236 = k23232;
var G__23236__$1 = (((G__23236 instanceof cljs.core.Keyword))?G__23236.fqn:null);
switch (G__23236__$1) {
case "source":
return self__.source;

break;
case "variable":
return self__.variable;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23232,else__4206__auto__);

}
});

datascript.parser.Pull.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.parser.Pull{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$variable,self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pattern,self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23231){
var self__ = this;
var G__23231__$1 = this;
return (new cljs.core.RecordIter((0),G__23231__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,cljs.core.cst$kw$variable,cljs.core.cst$kw$pattern], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Pull.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pull.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__23237 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-2108867663 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__23237(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.parser.Pull.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23233,other23234){
var self__ = this;
var this23233__$1 = this;
return ((!((other23234 == null))) && ((this23233__$1.constructor === other23234.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23233__$1.source,other23234.source)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23233__$1.variable,other23234.variable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23233__$1.pattern,other23234.pattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23233__$1.__extmap,other23234.__extmap)));
});

datascript.parser.Pull.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$variable,null,cljs.core.cst$kw$source,null,cljs.core.cst$kw$pattern,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.parser.Pull.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__23231){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__23238 = cljs.core.keyword_identical_QMARK_;
var expr__23239 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__23241 = cljs.core.cst$kw$source;
var G__23242 = expr__23239;
return (pred__23238.cljs$core$IFn$_invoke$arity$2 ? pred__23238.cljs$core$IFn$_invoke$arity$2(G__23241,G__23242) : pred__23238.call(null,G__23241,G__23242));
})())){
return (new datascript.parser.Pull(G__23231,self__.variable,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23243 = cljs.core.cst$kw$variable;
var G__23244 = expr__23239;
return (pred__23238.cljs$core$IFn$_invoke$arity$2 ? pred__23238.cljs$core$IFn$_invoke$arity$2(G__23243,G__23244) : pred__23238.call(null,G__23243,G__23244));
})())){
return (new datascript.parser.Pull(self__.source,G__23231,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23245 = cljs.core.cst$kw$pattern;
var G__23246 = expr__23239;
return (pred__23238.cljs$core$IFn$_invoke$arity$2 ? pred__23238.cljs$core$IFn$_invoke$arity$2(G__23245,G__23246) : pred__23238.call(null,G__23245,G__23246));
})())){
return (new datascript.parser.Pull(self__.source,self__.variable,G__23231,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__23231),null));
}
}
}
});

datascript.parser.Pull.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$source,self__.source,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$variable,self__.variable,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$pattern,self__.pattern,null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__23231){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,G__23231,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21799__auto__,f23228){
var self__ = this;
var this__21799__auto____$1 = this;
var new__21800__auto__ = (new datascript.parser.Pull(datascript.parser.postwalk(self__.source,f23228),datascript.parser.postwalk(self__.variable,f23228),datascript.parser.postwalk(self__.pattern,f23228),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__21799__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__21801__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__21800__auto__,meta__21801__auto__);
} else {
return new__21800__auto__;
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21802__auto__,pred23229,acc23230){
var self__ = this;
var ___21802__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23229,self__.pattern,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23229,self__.variable,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23229,self__.source,acc23230)));
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21802__auto__,acc23230){
var self__ = this;
var ___21802__auto____$1 = this;
var G__23247 = (function (){var G__23249 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc23230,self__.source) : datascript.parser.collect_vars_acc.call(null,acc23230,self__.source));
var G__23250 = self__.variable;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__23249,G__23250) : datascript.parser.collect_vars_acc.call(null,G__23249,G__23250));
})();
var G__23248 = self__.pattern;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__23247,G__23248) : datascript.parser.collect_vars_acc.call(null,G__23247,G__23248));
});

datascript.parser.Pull.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$source,cljs.core.cst$sym$variable,cljs.core.cst$sym$pattern], null);
});

datascript.parser.Pull.cljs$lang$type = true;

datascript.parser.Pull.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.parser/Pull",null,(1),null));
});

datascript.parser.Pull.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.parser/Pull");
});

/**
 * Positional factory function for datascript.parser/Pull.
 */
datascript.parser.__GT_Pull = (function datascript$parser$__GT_Pull(source,variable,pattern){
return (new datascript.parser.Pull(source,variable,pattern,null,null,null));
});

/**
 * Factory function for datascript.parser/Pull, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Pull = (function datascript$parser$map__GT_Pull(G__23235){
var extmap__4236__auto__ = (function (){var G__23251 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23235,cljs.core.cst$kw$source,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$variable,cljs.core.cst$kw$pattern], 0));
if(cljs.core.record_QMARK_(G__23235)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23251);
} else {
return G__23251;
}
})();
return (new datascript.parser.Pull(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(G__23235),cljs.core.cst$kw$variable.cljs$core$IFn$_invoke$arity$1(G__23235),cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(G__23235),null,cljs.core.not_empty(extmap__4236__auto__),null));
});


/**
 * @interface
 */
datascript.parser.IFindElements = function(){};

datascript.parser.find_elements = (function datascript$parser$find_elements(this$){
if(((!((this$ == null))) && (!((this$.datascript$parser$IFindElements$find_elements$arity$1 == null))))){
return this$.datascript$parser$IFindElements$find_elements$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (datascript.parser.find_elements[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (datascript.parser.find_elements["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IFindElements.find-elements",this$);
}
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindRel = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k23257,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__23261 = k23257;
var G__23261__$1 = (((G__23261 instanceof cljs.core.Keyword))?G__23261.fqn:null);
switch (G__23261__$1) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23257,else__4206__auto__);

}
});

datascript.parser.FindRel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.parser.FindRel{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$elements,self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23256){
var self__ = this;
var G__23256__$1 = this;
return (new cljs.core.RecordIter((0),G__23256__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elements], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.FindRel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindRel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__23262 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (744809563 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__23262(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.parser.FindRel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23258,other23259){
var self__ = this;
var this23258__$1 = this;
return ((!((other23259 == null))) && ((this23258__$1.constructor === other23259.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23258__$1.elements,other23259.elements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23258__$1.__extmap,other23259.__extmap)));
});

datascript.parser.FindRel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elements,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindRel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__23256){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__23263 = cljs.core.keyword_identical_QMARK_;
var expr__23264 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__23266 = cljs.core.cst$kw$elements;
var G__23267 = expr__23264;
return (pred__23263.cljs$core$IFn$_invoke$arity$2 ? pred__23263.cljs$core$IFn$_invoke$arity$2(G__23266,G__23267) : pred__23263.call(null,G__23266,G__23267));
})())){
return (new datascript.parser.FindRel(G__23256,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__23256),null));
}
});

datascript.parser.FindRel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$elements,self__.elements,null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__23256){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,G__23256,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21799__auto__,f23253){
var self__ = this;
var this__21799__auto____$1 = this;
var new__21800__auto__ = (new datascript.parser.FindRel(datascript.parser.postwalk(self__.elements,f23253),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__21799__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__21801__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__21800__auto__,meta__21801__auto__);
} else {
return new__21800__auto__;
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21802__auto__,pred23254,acc23255){
var self__ = this;
var ___21802__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23254,self__.elements,acc23255);
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21802__auto__,acc23255){
var self__ = this;
var ___21802__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc23255,self__.elements) : datascript.parser.collect_vars_acc.call(null,acc23255,self__.elements));
});

datascript.parser.FindRel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elements], null);
});

datascript.parser.FindRel.cljs$lang$type = true;

datascript.parser.FindRel.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.parser/FindRel",null,(1),null));
});

datascript.parser.FindRel.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.parser/FindRel");
});

/**
 * Positional factory function for datascript.parser/FindRel.
 */
datascript.parser.__GT_FindRel = (function datascript$parser$__GT_FindRel(elements){
return (new datascript.parser.FindRel(elements,null,null,null));
});

/**
 * Factory function for datascript.parser/FindRel, taking a map of keywords to field values.
 */
datascript.parser.map__GT_FindRel = (function datascript$parser$map__GT_FindRel(G__23260){
var extmap__4236__auto__ = (function (){var G__23268 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23260,cljs.core.cst$kw$elements);
if(cljs.core.record_QMARK_(G__23260)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23268);
} else {
return G__23268;
}
})();
return (new datascript.parser.FindRel(cljs.core.cst$kw$elements.cljs$core$IFn$_invoke$arity$1(G__23260),null,cljs.core.not_empty(extmap__4236__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindColl = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k23274,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__23278 = k23274;
var G__23278__$1 = (((G__23278 instanceof cljs.core.Keyword))?G__23278.fqn:null);
switch (G__23278__$1) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23274,else__4206__auto__);

}
});

datascript.parser.FindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.parser.FindColl{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$element,self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23273){
var self__ = this;
var G__23273__$1 = this;
return (new cljs.core.RecordIter((0),G__23273__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$element], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.FindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__23279 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (124241361 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__23279(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.parser.FindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23275,other23276){
var self__ = this;
var this23275__$1 = this;
return ((!((other23276 == null))) && ((this23275__$1.constructor === other23276.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23275__$1.element,other23276.element)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23275__$1.__extmap,other23276.__extmap)));
});

datascript.parser.FindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$element,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__23273){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__23280 = cljs.core.keyword_identical_QMARK_;
var expr__23281 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__23283 = cljs.core.cst$kw$element;
var G__23284 = expr__23281;
return (pred__23280.cljs$core$IFn$_invoke$arity$2 ? pred__23280.cljs$core$IFn$_invoke$arity$2(G__23283,G__23284) : pred__23280.call(null,G__23283,G__23284));
})())){
return (new datascript.parser.FindColl(G__23273,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__23273),null));
}
});

datascript.parser.FindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$element,self__.element,null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__23273){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,G__23273,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21799__auto__,f23270){
var self__ = this;
var this__21799__auto____$1 = this;
var new__21800__auto__ = (new datascript.parser.FindColl(datascript.parser.postwalk(self__.element,f23270),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__21799__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__21801__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__21800__auto__,meta__21801__auto__);
} else {
return new__21800__auto__;
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21802__auto__,pred23271,acc23272){
var self__ = this;
var ___21802__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23271,self__.element,acc23272);
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21802__auto__,acc23272){
var self__ = this;
var ___21802__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc23272,self__.element) : datascript.parser.collect_vars_acc.call(null,acc23272,self__.element));
});

datascript.parser.FindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$element], null);
});

datascript.parser.FindColl.cljs$lang$type = true;

datascript.parser.FindColl.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.parser/FindColl",null,(1),null));
});

datascript.parser.FindColl.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.parser/FindColl");
});

/**
 * Positional factory function for datascript.parser/FindColl.
 */
datascript.parser.__GT_FindColl = (function datascript$parser$__GT_FindColl(element){
return (new datascript.parser.FindColl(element,null,null,null));
});

/**
 * Factory function for datascript.parser/FindColl, taking a map of keywords to field values.
 */
datascript.parser.map__GT_FindColl = (function datascript$parser$map__GT_FindColl(G__23277){
var extmap__4236__auto__ = (function (){var G__23285 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23277,cljs.core.cst$kw$element);
if(cljs.core.record_QMARK_(G__23277)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23285);
} else {
return G__23285;
}
})();
return (new datascript.parser.FindColl(cljs.core.cst$kw$element.cljs$core$IFn$_invoke$arity$1(G__23277),null,cljs.core.not_empty(extmap__4236__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindScalar = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k23291,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__23295 = k23291;
var G__23295__$1 = (((G__23295 instanceof cljs.core.Keyword))?G__23295.fqn:null);
switch (G__23295__$1) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23291,else__4206__auto__);

}
});

datascript.parser.FindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.parser.FindScalar{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$element,self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23290){
var self__ = this;
var G__23290__$1 = this;
return (new cljs.core.RecordIter((0),G__23290__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$element], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.FindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__23296 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-661542332 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__23296(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23292,other23293){
var self__ = this;
var this23292__$1 = this;
return ((!((other23293 == null))) && ((this23292__$1.constructor === other23293.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23292__$1.element,other23293.element)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23292__$1.__extmap,other23293.__extmap)));
});

datascript.parser.FindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$element,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__23290){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__23297 = cljs.core.keyword_identical_QMARK_;
var expr__23298 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__23300 = cljs.core.cst$kw$element;
var G__23301 = expr__23298;
return (pred__23297.cljs$core$IFn$_invoke$arity$2 ? pred__23297.cljs$core$IFn$_invoke$arity$2(G__23300,G__23301) : pred__23297.call(null,G__23300,G__23301));
})())){
return (new datascript.parser.FindScalar(G__23290,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__23290),null));
}
});

datascript.parser.FindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$element,self__.element,null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__23290){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,G__23290,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21799__auto__,f23287){
var self__ = this;
var this__21799__auto____$1 = this;
var new__21800__auto__ = (new datascript.parser.FindScalar(datascript.parser.postwalk(self__.element,f23287),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__21799__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__21801__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__21800__auto__,meta__21801__auto__);
} else {
return new__21800__auto__;
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21802__auto__,pred23288,acc23289){
var self__ = this;
var ___21802__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23288,self__.element,acc23289);
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21802__auto__,acc23289){
var self__ = this;
var ___21802__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc23289,self__.element) : datascript.parser.collect_vars_acc.call(null,acc23289,self__.element));
});

datascript.parser.FindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$element], null);
});

datascript.parser.FindScalar.cljs$lang$type = true;

datascript.parser.FindScalar.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.parser/FindScalar",null,(1),null));
});

datascript.parser.FindScalar.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.parser/FindScalar");
});

/**
 * Positional factory function for datascript.parser/FindScalar.
 */
datascript.parser.__GT_FindScalar = (function datascript$parser$__GT_FindScalar(element){
return (new datascript.parser.FindScalar(element,null,null,null));
});

/**
 * Factory function for datascript.parser/FindScalar, taking a map of keywords to field values.
 */
datascript.parser.map__GT_FindScalar = (function datascript$parser$map__GT_FindScalar(G__23294){
var extmap__4236__auto__ = (function (){var G__23302 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23294,cljs.core.cst$kw$element);
if(cljs.core.record_QMARK_(G__23294)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23302);
} else {
return G__23302;
}
})();
return (new datascript.parser.FindScalar(cljs.core.cst$kw$element.cljs$core$IFn$_invoke$arity$1(G__23294),null,cljs.core.not_empty(extmap__4236__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindTuple = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k23308,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__23312 = k23308;
var G__23312__$1 = (((G__23312 instanceof cljs.core.Keyword))?G__23312.fqn:null);
switch (G__23312__$1) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23308,else__4206__auto__);

}
});

datascript.parser.FindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.parser.FindTuple{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$elements,self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23307){
var self__ = this;
var G__23307__$1 = this;
return (new cljs.core.RecordIter((0),G__23307__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elements], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.FindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__23313 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (681530371 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__23313(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23309,other23310){
var self__ = this;
var this23309__$1 = this;
return ((!((other23310 == null))) && ((this23309__$1.constructor === other23310.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23309__$1.elements,other23310.elements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23309__$1.__extmap,other23310.__extmap)));
});

datascript.parser.FindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elements,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__23307){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__23314 = cljs.core.keyword_identical_QMARK_;
var expr__23315 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__23317 = cljs.core.cst$kw$elements;
var G__23318 = expr__23315;
return (pred__23314.cljs$core$IFn$_invoke$arity$2 ? pred__23314.cljs$core$IFn$_invoke$arity$2(G__23317,G__23318) : pred__23314.call(null,G__23317,G__23318));
})())){
return (new datascript.parser.FindTuple(G__23307,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__23307),null));
}
});

datascript.parser.FindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$elements,self__.elements,null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__23307){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,G__23307,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21799__auto__,f23304){
var self__ = this;
var this__21799__auto____$1 = this;
var new__21800__auto__ = (new datascript.parser.FindTuple(datascript.parser.postwalk(self__.elements,f23304),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__21799__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__21801__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__21800__auto__,meta__21801__auto__);
} else {
return new__21800__auto__;
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21802__auto__,pred23305,acc23306){
var self__ = this;
var ___21802__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23305,self__.elements,acc23306);
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21802__auto__,acc23306){
var self__ = this;
var ___21802__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc23306,self__.elements) : datascript.parser.collect_vars_acc.call(null,acc23306,self__.elements));
});

datascript.parser.FindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elements], null);
});

datascript.parser.FindTuple.cljs$lang$type = true;

datascript.parser.FindTuple.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.parser/FindTuple",null,(1),null));
});

datascript.parser.FindTuple.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.parser/FindTuple");
});

/**
 * Positional factory function for datascript.parser/FindTuple.
 */
datascript.parser.__GT_FindTuple = (function datascript$parser$__GT_FindTuple(elements){
return (new datascript.parser.FindTuple(elements,null,null,null));
});

/**
 * Factory function for datascript.parser/FindTuple, taking a map of keywords to field values.
 */
datascript.parser.map__GT_FindTuple = (function datascript$parser$map__GT_FindTuple(G__23311){
var extmap__4236__auto__ = (function (){var G__23319 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23311,cljs.core.cst$kw$elements);
if(cljs.core.record_QMARK_(G__23311)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23319);
} else {
return G__23319;
}
})();
return (new datascript.parser.FindTuple(cljs.core.cst$kw$elements.cljs$core$IFn$_invoke$arity$1(G__23311),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

datascript.parser.find_vars = (function datascript$parser$find_vars(find){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(datascript.parser._find_vars,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.find_elements(find)], 0));
});
datascript.parser.aggregate_QMARK_ = (function datascript$parser$aggregate_QMARK_(element){
return (element instanceof datascript.parser.Aggregate);
});
datascript.parser.pull_QMARK_ = (function datascript$parser$pull_QMARK_(element){
return (element instanceof datascript.parser.Pull);
});
datascript.parser.parse_aggregate = (function datascript$parser$parse_aggregate(form){
if(((cljs.core.sequential_QMARK_(form)) && ((cljs.core.count(form) >= (2))))){
var vec__23321 = form;
var seq__23322 = cljs.core.seq(vec__23321);
var first__23323 = cljs.core.first(seq__23322);
var seq__23322__$1 = cljs.core.next(seq__23322);
var fn = first__23323;
var args = seq__23322__$1;
var fn_STAR_ = datascript.parser.parse_plain_symbol(fn);
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__3938__auto__ = fn_STAR_;
if(cljs.core.truth_(and__3938__auto__)){
return args_STAR_;
} else {
return and__3938__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_aggregate_custom = (function datascript$parser$parse_aggregate_custom(form){
if(((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),cljs.core.cst$sym$aggregate)))){
if((cljs.core.count(form) >= (3))){
var vec__23324 = form;
var seq__23325 = cljs.core.seq(vec__23324);
var first__23326 = cljs.core.first(seq__23325);
var seq__23325__$1 = cljs.core.next(seq__23325);
var _ = first__23326;
var first__23326__$1 = cljs.core.first(seq__23325__$1);
var seq__23325__$2 = cljs.core.next(seq__23325__$1);
var fn = first__23326__$1;
var args = seq__23325__$2;
var fn_STAR_ = datascript.parser.parse_variable(fn);
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__3938__auto__ = fn_STAR_;
if(cljs.core.truth_(and__3938__auto__)){
return args_STAR_;
} else {
return and__3938__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_find,cljs.core.cst$kw$fragment,form], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_find,cljs.core.cst$kw$fragment,form], null));
}
} else {
return null;
}
});
datascript.parser.parse_pull_expr = (function datascript$parser$parse_pull_expr(form){
if(((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),cljs.core.cst$sym$pull)))){
if(((((3) <= cljs.core.count(form))) && ((cljs.core.count(form) <= (4))))){
var long_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(4));
var src = ((long_QMARK_)?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(1)):cljs.core.cst$sym$$);
var vec__23327 = ((long_QMARK_)?cljs.core.nnext(form):cljs.core.next(form));
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23327,(0),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23327,(1),null);
var src_STAR_ = datascript.parser.parse_src_var(src);
var var_STAR_ = datascript.parser.parse_variable(var$);
var pattern_STAR_ = (function (){var or__3949__auto__ = datascript.parser.parse_variable(pattern);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = datascript.parser.parse_plain_variable(pattern);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return datascript.parser.parse_constant(pattern);
}
}
})();
if(cljs.core.truth_((function (){var and__3938__auto__ = src_STAR_;
if(cljs.core.truth_(and__3938__auto__)){
var and__3938__auto____$1 = var_STAR_;
if(cljs.core.truth_(and__3938__auto____$1)){
return pattern_STAR_;
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())){
return (new datascript.parser.Pull(src_STAR_,var_STAR_,pattern_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_find,cljs.core.cst$kw$fragment,form], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_find,cljs.core.cst$kw$fragment,form], null));
}
} else {
return null;
}
});
datascript.parser.parse_find_elem = (function datascript$parser$parse_find_elem(form){
var or__3949__auto__ = datascript.parser.parse_variable(form);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = datascript.parser.parse_pull_expr(form);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = datascript.parser.parse_aggregate_custom(form);
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return datascript.parser.parse_aggregate(form);
}
}
}
});
datascript.parser.parse_find_rel = (function datascript$parser$parse_find_rel(form){
var G__23330 = datascript.parser.parse_seq(datascript.parser.parse_find_elem,form);
if((G__23330 == null)){
return null;
} else {
return (new datascript.parser.FindRel(G__23330,null,null,null));
}
});
datascript.parser.parse_find_coll = (function datascript$parser$parse_find_coll(form){
if(((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(1))))){
var inner = cljs.core.first(form);
if(((cljs.core.sequential_QMARK_(inner)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(inner),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(inner),cljs.core.cst$sym$$$$)))){
var G__23331 = datascript.parser.parse_find_elem(cljs.core.first(inner));
if((G__23331 == null)){
return null;
} else {
return (new datascript.parser.FindColl(G__23331,null,null,null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_find_scalar = (function datascript$parser$parse_find_scalar(form){
if(((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(form),cljs.core.cst$sym$_DOT_)))){
var G__23332 = datascript.parser.parse_find_elem(cljs.core.first(form));
if((G__23332 == null)){
return null;
} else {
return (new datascript.parser.FindScalar(G__23332,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find_tuple = (function datascript$parser$parse_find_tuple(form){
if(((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(1))))){
var inner = cljs.core.first(form);
var G__23333 = datascript.parser.parse_seq(datascript.parser.parse_find_elem,inner);
if((G__23333 == null)){
return null;
} else {
return (new datascript.parser.FindTuple(G__23333,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find = (function datascript$parser$parse_find(form){
var or__3949__auto__ = datascript.parser.parse_find_rel(form);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = datascript.parser.parse_find_coll(form);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = datascript.parser.parse_find_scalar(form);
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
var or__3949__auto____$3 = datascript.parser.parse_find_tuple(form);
if(cljs.core.truth_(or__3949__auto____$3)){
return or__3949__auto____$3;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot parse :find, expected: (find-rel | find-coll | find-tuple | find-scalar)"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_find,cljs.core.cst$kw$fragment,form], null));
}
}
}
}
});
datascript.parser.parse_with = (function datascript$parser$parse_with(form){
var or__3949__auto__ = datascript.parser.parse_seq(datascript.parser.parse_variable,form);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot parse :with clause, expected [ variable+ ]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_with,cljs.core.cst$kw$form,form], null));
}
});
datascript.parser.parse_in_binding = (function datascript$parser$parse_in_binding(form){
var temp__5718__auto__ = (function (){var or__3949__auto__ = datascript.parser.parse_src_var(form);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = datascript.parser.parse_rules_var(form);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return datascript.parser.parse_plain_variable(form);
}
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var var$ = temp__5718__auto__;
return datascript.parser.with_source((new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return datascript.parser.parse_binding(form);
}
});
datascript.parser.parse_in = (function datascript$parser$parse_in(form){
var or__3949__auto__ = datascript.parser.parse_seq(datascript.parser.parse_in_binding,form);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot parse :in clause, expected (src-var | % | plain-symbol | bind-scalar | bind-tuple | bind-coll | bind-rel)"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_in,cljs.core.cst$kw$form,form], null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pattern = (function (source,pattern,__meta,__extmap,__hash){
this.source = source;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k23338,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__23342 = k23338;
var G__23342__$1 = (((G__23342 instanceof cljs.core.Keyword))?G__23342.fqn:null);
switch (G__23342__$1) {
case "source":
return self__.source;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23338,else__4206__auto__);

}
});

datascript.parser.Pattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.parser.Pattern{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pattern,self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23337){
var self__ = this;
var G__23337__$1 = this;
return (new cljs.core.RecordIter((0),G__23337__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,cljs.core.cst$kw$pattern], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Pattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__23343 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (575220587 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__23343(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.parser.Pattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23339,other23340){
var self__ = this;
var this23339__$1 = this;
return ((!((other23340 == null))) && ((this23339__$1.constructor === other23340.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23339__$1.source,other23340.source)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23339__$1.pattern,other23340.pattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23339__$1.__extmap,other23340.__extmap)));
});

datascript.parser.Pattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$source,null,cljs.core.cst$kw$pattern,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.parser.Pattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__23337){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__23344 = cljs.core.keyword_identical_QMARK_;
var expr__23345 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__23347 = cljs.core.cst$kw$source;
var G__23348 = expr__23345;
return (pred__23344.cljs$core$IFn$_invoke$arity$2 ? pred__23344.cljs$core$IFn$_invoke$arity$2(G__23347,G__23348) : pred__23344.call(null,G__23347,G__23348));
})())){
return (new datascript.parser.Pattern(G__23337,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23349 = cljs.core.cst$kw$pattern;
var G__23350 = expr__23345;
return (pred__23344.cljs$core$IFn$_invoke$arity$2 ? pred__23344.cljs$core$IFn$_invoke$arity$2(G__23349,G__23350) : pred__23344.call(null,G__23349,G__23350));
})())){
return (new datascript.parser.Pattern(self__.source,G__23337,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__23337),null));
}
}
});

datascript.parser.Pattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$source,self__.source,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$pattern,self__.pattern,null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__23337){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,G__23337,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21799__auto__,f23334){
var self__ = this;
var this__21799__auto____$1 = this;
var new__21800__auto__ = (new datascript.parser.Pattern(datascript.parser.postwalk(self__.source,f23334),datascript.parser.postwalk(self__.pattern,f23334),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__21799__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__21801__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__21800__auto__,meta__21801__auto__);
} else {
return new__21800__auto__;
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21802__auto__,pred23335,acc23336){
var self__ = this;
var ___21802__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23335,self__.pattern,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23335,self__.source,acc23336));
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21802__auto__,acc23336){
var self__ = this;
var ___21802__auto____$1 = this;
var G__23351 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc23336,self__.source) : datascript.parser.collect_vars_acc.call(null,acc23336,self__.source));
var G__23352 = self__.pattern;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__23351,G__23352) : datascript.parser.collect_vars_acc.call(null,G__23351,G__23352));
});

datascript.parser.Pattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$source,cljs.core.cst$sym$pattern], null);
});

datascript.parser.Pattern.cljs$lang$type = true;

datascript.parser.Pattern.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.parser/Pattern",null,(1),null));
});

datascript.parser.Pattern.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.parser/Pattern");
});

/**
 * Positional factory function for datascript.parser/Pattern.
 */
datascript.parser.__GT_Pattern = (function datascript$parser$__GT_Pattern(source,pattern){
return (new datascript.parser.Pattern(source,pattern,null,null,null));
});

/**
 * Factory function for datascript.parser/Pattern, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Pattern = (function datascript$parser$map__GT_Pattern(G__23341){
var extmap__4236__auto__ = (function (){var G__23353 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23341,cljs.core.cst$kw$source,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$pattern], 0));
if(cljs.core.record_QMARK_(G__23341)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23353);
} else {
return G__23353;
}
})();
return (new datascript.parser.Pattern(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(G__23341),cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(G__23341),null,cljs.core.not_empty(extmap__4236__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Predicate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k23359,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__23363 = k23359;
var G__23363__$1 = (((G__23363 instanceof cljs.core.Keyword))?G__23363.fqn:null);
switch (G__23363__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23359,else__4206__auto__);

}
});

datascript.parser.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.parser.Predicate{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23358){
var self__ = this;
var G__23358__$1 = this;
return (new cljs.core.RecordIter((0),G__23358__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$args], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__23364 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1523376880 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__23364(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.parser.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23360,other23361){
var self__ = this;
var this23360__$1 = this;
return ((!((other23361 == null))) && ((this23360__$1.constructor === other23361.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23360__$1.fn,other23361.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23360__$1.args,other23361.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23360__$1.__extmap,other23361.__extmap)));
});

datascript.parser.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$fn,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.parser.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__23358){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__23365 = cljs.core.keyword_identical_QMARK_;
var expr__23366 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__23368 = cljs.core.cst$kw$fn;
var G__23369 = expr__23366;
return (pred__23365.cljs$core$IFn$_invoke$arity$2 ? pred__23365.cljs$core$IFn$_invoke$arity$2(G__23368,G__23369) : pred__23365.call(null,G__23368,G__23369));
})())){
return (new datascript.parser.Predicate(G__23358,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23370 = cljs.core.cst$kw$args;
var G__23371 = expr__23366;
return (pred__23365.cljs$core$IFn$_invoke$arity$2 ? pred__23365.cljs$core$IFn$_invoke$arity$2(G__23370,G__23371) : pred__23365.call(null,G__23370,G__23371));
})())){
return (new datascript.parser.Predicate(self__.fn,G__23358,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__23358),null));
}
}
});

datascript.parser.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$args,self__.args,null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__23358){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,G__23358,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21799__auto__,f23355){
var self__ = this;
var this__21799__auto____$1 = this;
var new__21800__auto__ = (new datascript.parser.Predicate(datascript.parser.postwalk(self__.fn,f23355),datascript.parser.postwalk(self__.args,f23355),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__21799__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__21801__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__21800__auto__,meta__21801__auto__);
} else {
return new__21800__auto__;
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21802__auto__,pred23356,acc23357){
var self__ = this;
var ___21802__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23356,self__.args,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23356,self__.fn,acc23357));
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21802__auto__,acc23357){
var self__ = this;
var ___21802__auto____$1 = this;
var G__23372 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc23357,self__.fn) : datascript.parser.collect_vars_acc.call(null,acc23357,self__.fn));
var G__23373 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__23372,G__23373) : datascript.parser.collect_vars_acc.call(null,G__23372,G__23373));
});

datascript.parser.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$args], null);
});

datascript.parser.Predicate.cljs$lang$type = true;

datascript.parser.Predicate.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.parser/Predicate",null,(1),null));
});

datascript.parser.Predicate.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.parser/Predicate");
});

/**
 * Positional factory function for datascript.parser/Predicate.
 */
datascript.parser.__GT_Predicate = (function datascript$parser$__GT_Predicate(fn,args){
return (new datascript.parser.Predicate(fn,args,null,null,null));
});

/**
 * Factory function for datascript.parser/Predicate, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Predicate = (function datascript$parser$map__GT_Predicate(G__23362){
var extmap__4236__auto__ = (function (){var G__23374 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23362,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$args], 0));
if(cljs.core.record_QMARK_(G__23362)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23374);
} else {
return G__23374;
}
})();
return (new datascript.parser.Predicate(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__23362),cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(G__23362),null,cljs.core.not_empty(extmap__4236__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Function = (function (fn,args,binding,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k23380,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__23384 = k23380;
var G__23384__$1 = (((G__23384 instanceof cljs.core.Keyword))?G__23384.fqn:null);
switch (G__23384__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23380,else__4206__auto__);

}
});

datascript.parser.Function.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.parser.Function{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$binding,self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23379){
var self__ = this;
var G__23379__$1 = this;
return (new cljs.core.RecordIter((0),G__23379__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$args,cljs.core.cst$kw$binding], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Function.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Function.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__23385 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (589494199 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__23385(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.parser.Function.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23381,other23382){
var self__ = this;
var this23381__$1 = this;
return ((!((other23382 == null))) && ((this23381__$1.constructor === other23382.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23381__$1.fn,other23382.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23381__$1.args,other23382.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23381__$1.binding,other23382.binding)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23381__$1.__extmap,other23382.__extmap)));
});

datascript.parser.Function.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$binding,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.parser.Function.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__23379){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__23386 = cljs.core.keyword_identical_QMARK_;
var expr__23387 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__23389 = cljs.core.cst$kw$fn;
var G__23390 = expr__23387;
return (pred__23386.cljs$core$IFn$_invoke$arity$2 ? pred__23386.cljs$core$IFn$_invoke$arity$2(G__23389,G__23390) : pred__23386.call(null,G__23389,G__23390));
})())){
return (new datascript.parser.Function(G__23379,self__.args,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23391 = cljs.core.cst$kw$args;
var G__23392 = expr__23387;
return (pred__23386.cljs$core$IFn$_invoke$arity$2 ? pred__23386.cljs$core$IFn$_invoke$arity$2(G__23391,G__23392) : pred__23386.call(null,G__23391,G__23392));
})())){
return (new datascript.parser.Function(self__.fn,G__23379,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23393 = cljs.core.cst$kw$binding;
var G__23394 = expr__23387;
return (pred__23386.cljs$core$IFn$_invoke$arity$2 ? pred__23386.cljs$core$IFn$_invoke$arity$2(G__23393,G__23394) : pred__23386.call(null,G__23393,G__23394));
})())){
return (new datascript.parser.Function(self__.fn,self__.args,G__23379,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__23379),null));
}
}
}
});

datascript.parser.Function.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fn,self__.fn,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$args,self__.args,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$binding,self__.binding,null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__23379){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,G__23379,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Function.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21799__auto__,f23376){
var self__ = this;
var this__21799__auto____$1 = this;
var new__21800__auto__ = (new datascript.parser.Function(datascript.parser.postwalk(self__.fn,f23376),datascript.parser.postwalk(self__.args,f23376),datascript.parser.postwalk(self__.binding,f23376),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__21799__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__21801__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__21800__auto__,meta__21801__auto__);
} else {
return new__21800__auto__;
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21802__auto__,pred23377,acc23378){
var self__ = this;
var ___21802__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23377,self__.binding,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23377,self__.args,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23377,self__.fn,acc23378)));
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21802__auto__,acc23378){
var self__ = this;
var ___21802__auto____$1 = this;
var G__23395 = (function (){var G__23397 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc23378,self__.fn) : datascript.parser.collect_vars_acc.call(null,acc23378,self__.fn));
var G__23398 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__23397,G__23398) : datascript.parser.collect_vars_acc.call(null,G__23397,G__23398));
})();
var G__23396 = self__.binding;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__23395,G__23396) : datascript.parser.collect_vars_acc.call(null,G__23395,G__23396));
});

datascript.parser.Function.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$args,cljs.core.cst$sym$binding], null);
});

datascript.parser.Function.cljs$lang$type = true;

datascript.parser.Function.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.parser/Function",null,(1),null));
});

datascript.parser.Function.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.parser/Function");
});

/**
 * Positional factory function for datascript.parser/Function.
 */
datascript.parser.__GT_Function = (function datascript$parser$__GT_Function(fn,args,binding){
return (new datascript.parser.Function(fn,args,binding,null,null,null));
});

/**
 * Factory function for datascript.parser/Function, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Function = (function datascript$parser$map__GT_Function(G__23383){
var extmap__4236__auto__ = (function (){var G__23399 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23383,cljs.core.cst$kw$fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$args,cljs.core.cst$kw$binding], 0));
if(cljs.core.record_QMARK_(G__23383)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23399);
} else {
return G__23399;
}
})();
return (new datascript.parser.Function(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__23383),cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(G__23383),cljs.core.cst$kw$binding.cljs$core$IFn$_invoke$arity$1(G__23383),null,cljs.core.not_empty(extmap__4236__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleExpr = (function (source,name,args,__meta,__extmap,__hash){
this.source = source;
this.name = name;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k23405,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__23409 = k23405;
var G__23409__$1 = (((G__23409 instanceof cljs.core.Keyword))?G__23409.fqn:null);
switch (G__23409__$1) {
case "source":
return self__.source;

break;
case "name":
return self__.name;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23405,else__4206__auto__);

}
});

datascript.parser.RuleExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.parser.RuleExpr{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23404){
var self__ = this;
var G__23404__$1 = this;
return (new cljs.core.RecordIter((0),G__23404__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,cljs.core.cst$kw$name,cljs.core.cst$kw$args], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.RuleExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__23410 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-444662011 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__23410(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23406,other23407){
var self__ = this;
var this23406__$1 = this;
return ((!((other23407 == null))) && ((this23406__$1.constructor === other23407.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23406__$1.source,other23407.source)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23406__$1.name,other23407.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23406__$1.args,other23407.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23406__$1.__extmap,other23407.__extmap)));
});

datascript.parser.RuleExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$name,null,cljs.core.cst$kw$source,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__23404){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__23411 = cljs.core.keyword_identical_QMARK_;
var expr__23412 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__23414 = cljs.core.cst$kw$source;
var G__23415 = expr__23412;
return (pred__23411.cljs$core$IFn$_invoke$arity$2 ? pred__23411.cljs$core$IFn$_invoke$arity$2(G__23414,G__23415) : pred__23411.call(null,G__23414,G__23415));
})())){
return (new datascript.parser.RuleExpr(G__23404,self__.name,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23416 = cljs.core.cst$kw$name;
var G__23417 = expr__23412;
return (pred__23411.cljs$core$IFn$_invoke$arity$2 ? pred__23411.cljs$core$IFn$_invoke$arity$2(G__23416,G__23417) : pred__23411.call(null,G__23416,G__23417));
})())){
return (new datascript.parser.RuleExpr(self__.source,G__23404,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23418 = cljs.core.cst$kw$args;
var G__23419 = expr__23412;
return (pred__23411.cljs$core$IFn$_invoke$arity$2 ? pred__23411.cljs$core$IFn$_invoke$arity$2(G__23418,G__23419) : pred__23411.call(null,G__23418,G__23419));
})())){
return (new datascript.parser.RuleExpr(self__.source,self__.name,G__23404,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__23404),null));
}
}
}
});

datascript.parser.RuleExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$source,self__.source,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$name,self__.name,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$args,self__.args,null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__23404){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,G__23404,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21799__auto__,f23401){
var self__ = this;
var this__21799__auto____$1 = this;
var new__21800__auto__ = (new datascript.parser.RuleExpr(datascript.parser.postwalk(self__.source,f23401),datascript.parser.postwalk(self__.name,f23401),datascript.parser.postwalk(self__.args,f23401),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__21799__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__21801__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__21800__auto__,meta__21801__auto__);
} else {
return new__21800__auto__;
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21802__auto__,pred23402,acc23403){
var self__ = this;
var ___21802__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23402,self__.args,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23402,self__.name,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23402,self__.source,acc23403)));
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21802__auto__,acc23403){
var self__ = this;
var ___21802__auto____$1 = this;
var G__23420 = (function (){var G__23422 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc23403,self__.source) : datascript.parser.collect_vars_acc.call(null,acc23403,self__.source));
var G__23423 = self__.name;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__23422,G__23423) : datascript.parser.collect_vars_acc.call(null,G__23422,G__23423));
})();
var G__23421 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__23420,G__23421) : datascript.parser.collect_vars_acc.call(null,G__23420,G__23421));
});

datascript.parser.RuleExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$source,cljs.core.cst$sym$name,cljs.core.cst$sym$args], null);
});

datascript.parser.RuleExpr.cljs$lang$type = true;

datascript.parser.RuleExpr.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.parser/RuleExpr",null,(1),null));
});

datascript.parser.RuleExpr.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.parser/RuleExpr");
});

/**
 * Positional factory function for datascript.parser/RuleExpr.
 */
datascript.parser.__GT_RuleExpr = (function datascript$parser$__GT_RuleExpr(source,name,args){
return (new datascript.parser.RuleExpr(source,name,args,null,null,null));
});

/**
 * Factory function for datascript.parser/RuleExpr, taking a map of keywords to field values.
 */
datascript.parser.map__GT_RuleExpr = (function datascript$parser$map__GT_RuleExpr(G__23408){
var extmap__4236__auto__ = (function (){var G__23424 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23408,cljs.core.cst$kw$source,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$name,cljs.core.cst$kw$args], 0));
if(cljs.core.record_QMARK_(G__23408)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23424);
} else {
return G__23424;
}
})();
return (new datascript.parser.RuleExpr(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(G__23408),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__23408),cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(G__23408),null,cljs.core.not_empty(extmap__4236__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Not = (function (source,vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k23430,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__23434 = k23430;
var G__23434__$1 = (((G__23434 instanceof cljs.core.Keyword))?G__23434.fqn:null);
switch (G__23434__$1) {
case "source":
return self__.source;

break;
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23430,else__4206__auto__);

}
});

datascript.parser.Not.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.parser.Not{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vars,self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clauses,self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23429){
var self__ = this;
var G__23429__$1 = this;
return (new cljs.core.RecordIter((0),G__23429__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,cljs.core.cst$kw$vars,cljs.core.cst$kw$clauses], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Not.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Not.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__23435 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1394671061 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__23435(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.parser.Not.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23431,other23432){
var self__ = this;
var this23431__$1 = this;
return ((!((other23432 == null))) && ((this23431__$1.constructor === other23432.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23431__$1.source,other23432.source)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23431__$1.vars,other23432.vars)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23431__$1.clauses,other23432.clauses)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23431__$1.__extmap,other23432.__extmap)));
});

datascript.parser.Not.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$source,null,cljs.core.cst$kw$clauses,null,cljs.core.cst$kw$vars,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.parser.Not.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__23429){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__23436 = cljs.core.keyword_identical_QMARK_;
var expr__23437 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__23439 = cljs.core.cst$kw$source;
var G__23440 = expr__23437;
return (pred__23436.cljs$core$IFn$_invoke$arity$2 ? pred__23436.cljs$core$IFn$_invoke$arity$2(G__23439,G__23440) : pred__23436.call(null,G__23439,G__23440));
})())){
return (new datascript.parser.Not(G__23429,self__.vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23441 = cljs.core.cst$kw$vars;
var G__23442 = expr__23437;
return (pred__23436.cljs$core$IFn$_invoke$arity$2 ? pred__23436.cljs$core$IFn$_invoke$arity$2(G__23441,G__23442) : pred__23436.call(null,G__23441,G__23442));
})())){
return (new datascript.parser.Not(self__.source,G__23429,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23443 = cljs.core.cst$kw$clauses;
var G__23444 = expr__23437;
return (pred__23436.cljs$core$IFn$_invoke$arity$2 ? pred__23436.cljs$core$IFn$_invoke$arity$2(G__23443,G__23444) : pred__23436.call(null,G__23443,G__23444));
})())){
return (new datascript.parser.Not(self__.source,self__.vars,G__23429,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__23429),null));
}
}
}
});

datascript.parser.Not.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$source,self__.source,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$vars,self__.vars,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$clauses,self__.clauses,null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__23429){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,G__23429,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Not.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21799__auto__,f23426){
var self__ = this;
var this__21799__auto____$1 = this;
var new__21800__auto__ = (new datascript.parser.Not(datascript.parser.postwalk(self__.source,f23426),datascript.parser.postwalk(self__.vars,f23426),datascript.parser.postwalk(self__.clauses,f23426),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__21799__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__21801__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__21800__auto__,meta__21801__auto__);
} else {
return new__21800__auto__;
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21802__auto__,pred23427,acc23428){
var self__ = this;
var ___21802__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23427,self__.clauses,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23427,self__.vars,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23427,self__.source,acc23428)));
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21802__auto__,acc23428){
var self__ = this;
var ___21802__auto____$1 = this;
var G__23445 = (function (){var G__23447 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc23428,self__.source) : datascript.parser.collect_vars_acc.call(null,acc23428,self__.source));
var G__23448 = self__.vars;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__23447,G__23448) : datascript.parser.collect_vars_acc.call(null,G__23447,G__23448));
})();
var G__23446 = self__.clauses;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__23445,G__23446) : datascript.parser.collect_vars_acc.call(null,G__23445,G__23446));
});

datascript.parser.Not.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$source,cljs.core.cst$sym$vars,cljs.core.cst$sym$clauses], null);
});

datascript.parser.Not.cljs$lang$type = true;

datascript.parser.Not.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.parser/Not",null,(1),null));
});

datascript.parser.Not.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.parser/Not");
});

/**
 * Positional factory function for datascript.parser/Not.
 */
datascript.parser.__GT_Not = (function datascript$parser$__GT_Not(source,vars,clauses){
return (new datascript.parser.Not(source,vars,clauses,null,null,null));
});

/**
 * Factory function for datascript.parser/Not, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Not = (function datascript$parser$map__GT_Not(G__23433){
var extmap__4236__auto__ = (function (){var G__23449 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23433,cljs.core.cst$kw$source,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$vars,cljs.core.cst$kw$clauses], 0));
if(cljs.core.record_QMARK_(G__23433)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23449);
} else {
return G__23449;
}
})();
return (new datascript.parser.Not(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(G__23433),cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(G__23433),cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(G__23433),null,cljs.core.not_empty(extmap__4236__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Or = (function (source,rule_vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.rule_vars = rule_vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k23455,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__23459 = k23455;
var G__23459__$1 = (((G__23459 instanceof cljs.core.Keyword))?G__23459.fqn:null);
switch (G__23459__$1) {
case "source":
return self__.source;

break;
case "rule-vars":
return self__.rule_vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23455,else__4206__auto__);

}
});

datascript.parser.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.parser.Or{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rule_DASH_vars,self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clauses,self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23454){
var self__ = this;
var G__23454__$1 = this;
return (new cljs.core.RecordIter((0),G__23454__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,cljs.core.cst$kw$rule_DASH_vars,cljs.core.cst$kw$clauses], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__23460 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1461934571 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__23460(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.parser.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23456,other23457){
var self__ = this;
var this23456__$1 = this;
return ((!((other23457 == null))) && ((this23456__$1.constructor === other23457.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23456__$1.source,other23457.source)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23456__$1.rule_vars,other23457.rule_vars)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23456__$1.clauses,other23457.clauses)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23456__$1.__extmap,other23457.__extmap)));
});

datascript.parser.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$rule_DASH_vars,null,cljs.core.cst$kw$source,null,cljs.core.cst$kw$clauses,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.parser.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__23454){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__23461 = cljs.core.keyword_identical_QMARK_;
var expr__23462 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__23464 = cljs.core.cst$kw$source;
var G__23465 = expr__23462;
return (pred__23461.cljs$core$IFn$_invoke$arity$2 ? pred__23461.cljs$core$IFn$_invoke$arity$2(G__23464,G__23465) : pred__23461.call(null,G__23464,G__23465));
})())){
return (new datascript.parser.Or(G__23454,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23466 = cljs.core.cst$kw$rule_DASH_vars;
var G__23467 = expr__23462;
return (pred__23461.cljs$core$IFn$_invoke$arity$2 ? pred__23461.cljs$core$IFn$_invoke$arity$2(G__23466,G__23467) : pred__23461.call(null,G__23466,G__23467));
})())){
return (new datascript.parser.Or(self__.source,G__23454,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23468 = cljs.core.cst$kw$clauses;
var G__23469 = expr__23462;
return (pred__23461.cljs$core$IFn$_invoke$arity$2 ? pred__23461.cljs$core$IFn$_invoke$arity$2(G__23468,G__23469) : pred__23461.call(null,G__23468,G__23469));
})())){
return (new datascript.parser.Or(self__.source,self__.rule_vars,G__23454,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__23454),null));
}
}
}
});

datascript.parser.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$source,self__.source,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$rule_DASH_vars,self__.rule_vars,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$clauses,self__.clauses,null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__23454){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,G__23454,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Or.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21799__auto__,f23451){
var self__ = this;
var this__21799__auto____$1 = this;
var new__21800__auto__ = (new datascript.parser.Or(datascript.parser.postwalk(self__.source,f23451),datascript.parser.postwalk(self__.rule_vars,f23451),datascript.parser.postwalk(self__.clauses,f23451),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__21799__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__21801__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__21800__auto__,meta__21801__auto__);
} else {
return new__21800__auto__;
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21802__auto__,pred23452,acc23453){
var self__ = this;
var ___21802__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23452,self__.clauses,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23452,self__.rule_vars,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23452,self__.source,acc23453)));
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21802__auto__,acc23453){
var self__ = this;
var ___21802__auto____$1 = this;
var G__23470 = (function (){var G__23472 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc23453,self__.source) : datascript.parser.collect_vars_acc.call(null,acc23453,self__.source));
var G__23473 = self__.rule_vars;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__23472,G__23473) : datascript.parser.collect_vars_acc.call(null,G__23472,G__23473));
})();
var G__23471 = self__.clauses;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__23470,G__23471) : datascript.parser.collect_vars_acc.call(null,G__23470,G__23471));
});

datascript.parser.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$source,cljs.core.cst$sym$rule_DASH_vars,cljs.core.cst$sym$clauses], null);
});

datascript.parser.Or.cljs$lang$type = true;

datascript.parser.Or.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.parser/Or",null,(1),null));
});

datascript.parser.Or.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.parser/Or");
});

/**
 * Positional factory function for datascript.parser/Or.
 */
datascript.parser.__GT_Or = (function datascript$parser$__GT_Or(source,rule_vars,clauses){
return (new datascript.parser.Or(source,rule_vars,clauses,null,null,null));
});

/**
 * Factory function for datascript.parser/Or, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Or = (function datascript$parser$map__GT_Or(G__23458){
var extmap__4236__auto__ = (function (){var G__23474 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23458,cljs.core.cst$kw$source,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rule_DASH_vars,cljs.core.cst$kw$clauses], 0));
if(cljs.core.record_QMARK_(G__23458)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23474);
} else {
return G__23474;
}
})();
return (new datascript.parser.Or(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(G__23458),cljs.core.cst$kw$rule_DASH_vars.cljs$core$IFn$_invoke$arity$1(G__23458),cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(G__23458),null,cljs.core.not_empty(extmap__4236__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.And = (function (clauses,__meta,__extmap,__hash){
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k23480,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__23484 = k23480;
var G__23484__$1 = (((G__23484 instanceof cljs.core.Keyword))?G__23484.fqn:null);
switch (G__23484__$1) {
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23480,else__4206__auto__);

}
});

datascript.parser.And.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.parser.And{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clauses,self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23479){
var self__ = this;
var G__23479__$1 = this;
return (new cljs.core.RecordIter((0),G__23479__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clauses], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.And.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.parser.And.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__23485 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-131856804 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__23485(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.parser.And.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23481,other23482){
var self__ = this;
var this23481__$1 = this;
return ((!((other23482 == null))) && ((this23481__$1.constructor === other23482.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23481__$1.clauses,other23482.clauses)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23481__$1.__extmap,other23482.__extmap)));
});

datascript.parser.And.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.parser.And.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__23479){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__23486 = cljs.core.keyword_identical_QMARK_;
var expr__23487 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__23489 = cljs.core.cst$kw$clauses;
var G__23490 = expr__23487;
return (pred__23486.cljs$core$IFn$_invoke$arity$2 ? pred__23486.cljs$core$IFn$_invoke$arity$2(G__23489,G__23490) : pred__23486.call(null,G__23489,G__23490));
})())){
return (new datascript.parser.And(G__23479,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__23479),null));
}
});

datascript.parser.And.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$clauses,self__.clauses,null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__23479){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,G__23479,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.And.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21799__auto__,f23476){
var self__ = this;
var this__21799__auto____$1 = this;
var new__21800__auto__ = (new datascript.parser.And(datascript.parser.postwalk(self__.clauses,f23476),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__21799__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__21801__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__21800__auto__,meta__21801__auto__);
} else {
return new__21800__auto__;
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21802__auto__,pred23477,acc23478){
var self__ = this;
var ___21802__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23477,self__.clauses,acc23478);
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21802__auto__,acc23478){
var self__ = this;
var ___21802__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc23478,self__.clauses) : datascript.parser.collect_vars_acc.call(null,acc23478,self__.clauses));
});

datascript.parser.And.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$clauses], null);
});

datascript.parser.And.cljs$lang$type = true;

datascript.parser.And.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.parser/And",null,(1),null));
});

datascript.parser.And.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.parser/And");
});

/**
 * Positional factory function for datascript.parser/And.
 */
datascript.parser.__GT_And = (function datascript$parser$__GT_And(clauses){
return (new datascript.parser.And(clauses,null,null,null));
});

/**
 * Factory function for datascript.parser/And, taking a map of keywords to field values.
 */
datascript.parser.map__GT_And = (function datascript$parser$map__GT_And(G__23483){
var extmap__4236__auto__ = (function (){var G__23491 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23483,cljs.core.cst$kw$clauses);
if(cljs.core.record_QMARK_(G__23483)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23491);
} else {
return G__23491;
}
})();
return (new datascript.parser.And(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(G__23483),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

datascript.parser.parse_pattern_el = (function datascript$parser$parse_pattern_el(form){
var or__3949__auto__ = datascript.parser.parse_placeholder(form);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = datascript.parser.parse_variable(form);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return datascript.parser.parse_constant(form);
}
}
});
datascript.parser.take_source = (function datascript$parser$take_source(form){
if(cljs.core.sequential_QMARK_(form)){
var temp__5718__auto__ = datascript.parser.parse_src_var(cljs.core.first(form));
if(cljs.core.truth_(temp__5718__auto__)){
var source_STAR_ = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_STAR_,cljs.core.next(form)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.parser.DefaultSrc(null,null,null)),form], null);
}
} else {
return null;
}
});
datascript.parser.parse_pattern = (function datascript$parser$parse_pattern(form){
var temp__5720__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__23493 = temp__5720__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23493,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23493,(1),null);
var temp__5720__auto____$1 = datascript.parser.parse_seq(datascript.parser.parse_pattern_el,next_form);
if(cljs.core.truth_(temp__5720__auto____$1)){
var pattern_STAR_ = temp__5720__auto____$1;
if(!(cljs.core.empty_QMARK_(pattern_STAR_))){
return datascript.parser.with_source((new datascript.parser.Pattern(source_STAR_,pattern_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Pattern could not be empty"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_call = (function datascript$parser$parse_call(form){
if(cljs.core.sequential_QMARK_(form)){
var vec__23496 = form;
var seq__23497 = cljs.core.seq(vec__23496);
var first__23498 = cljs.core.first(seq__23497);
var seq__23497__$1 = cljs.core.next(seq__23497);
var fn = first__23498;
var args = seq__23497__$1;
var args__$1 = (((args == null))?cljs.core.PersistentVector.EMPTY:args);
var fn_STAR_ = (function (){var or__3949__auto__ = datascript.parser.parse_plain_symbol(fn);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return datascript.parser.parse_variable(fn);
}
})();
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_fn_arg,args__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = fn_STAR_;
if(cljs.core.truth_(and__3938__auto__)){
return args_STAR_;
} else {
return and__3938__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_STAR_,args_STAR_], null);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_pred = (function datascript$parser$parse_pred(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_(form,(1)))){
var temp__5720__auto__ = datascript.parser.parse_call(cljs.core.first(form));
if(cljs.core.truth_(temp__5720__auto__)){
var vec__23499 = temp__5720__auto__;
var fn_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23499,(0),null);
var args_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23499,(1),null);
return datascript.parser.with_source((new datascript.parser.Predicate(fn_STAR_,args_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_fn = (function datascript$parser$parse_fn(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_(form,(2)))){
var vec__23502 = form;
var call = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23502,(0),null);
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23502,(1),null);
var temp__5720__auto__ = datascript.parser.parse_call(call);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__23505 = temp__5720__auto__;
var fn_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23505,(0),null);
var args_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23505,(1),null);
var temp__5720__auto____$1 = datascript.parser.parse_binding(binding);
if(cljs.core.truth_(temp__5720__auto____$1)){
var binding_STAR_ = temp__5720__auto____$1;
return datascript.parser.with_source((new datascript.parser.Function(fn_STAR_,args_STAR_,binding_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_rule_expr = (function datascript$parser$parse_rule_expr(form){
var temp__5720__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__23508 = temp__5720__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23508,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23508,(1),null);
var vec__23511 = next_form;
var seq__23512 = cljs.core.seq(vec__23511);
var first__23513 = cljs.core.first(seq__23512);
var seq__23512__$1 = cljs.core.next(seq__23512);
var name = first__23513;
var args = seq__23512__$1;
var name_STAR_ = datascript.parser.parse_plain_symbol(name);
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_pattern_el,args);
if(cljs.core.truth_(name_STAR_)){
if(cljs.core.empty_QMARK_(args)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["rule-expr requires at least one argument"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
} else {
if((args_STAR_ == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot parse rule-expr arguments, expected [ (variable | constant | '_')+ ]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
} else {
return (new datascript.parser.RuleExpr(source_STAR_,name_STAR_,args_STAR_,null,null,null));

}
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.collect_vars_acc = (function datascript$parser$collect_vars_acc(acc,form){
if((form instanceof datascript.parser.Variable)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,form);
} else {
if((form instanceof datascript.parser.Not)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(form));
} else {
if((form instanceof datascript.parser.Or)){
var G__23514 = acc;
var G__23515 = cljs.core.cst$kw$rule_DASH_vars.cljs$core$IFn$_invoke$arity$1(form);
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__23514,G__23515) : datascript.parser.collect_vars_acc.call(null,G__23514,G__23515));
} else {
if(((!((form == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$))))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form))){
return datascript.parser._collect_vars(form,acc);
} else {
if(cljs.core.sequential_QMARK_(form)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.parser.collect_vars_acc,acc,form);
} else {
return acc;

}
}
}
}
}
});
datascript.parser.collect_vars = (function datascript$parser$collect_vars(form){
return datascript.parser.collect_vars_acc(cljs.core.PersistentVector.EMPTY,form);
});
datascript.parser.collect_vars_distinct = (function datascript$parser$collect_vars_distinct(form){
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(datascript.parser.collect_vars(form)));
});
datascript.parser.validate_join_vars = (function datascript$parser$validate_join_vars(vars,clauses,form){
var undeclared_23517 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(vars),cljs.core.set(datascript.parser.collect_vars(clauses)));
if(cljs.core.empty_QMARK_(undeclared_23517)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Join variable not declared inside clauses: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,undeclared_23517)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
}

if(cljs.core.empty_QMARK_(vars)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Join variables should not be empty"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
} else {
return null;
}
});
datascript.parser.validate_not = (function datascript$parser$validate_not(clause,form){
datascript.parser.validate_join_vars(cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(clause),cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(clause),form);

return clause;
});
datascript.parser.parse_not = (function datascript$parser$parse_not(form){
var temp__5720__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__23518 = temp__5720__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23518,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23518,(1),null);
var vec__23521 = next_form;
var seq__23522 = cljs.core.seq(vec__23521);
var first__23523 = cljs.core.first(seq__23522);
var seq__23522__$1 = cljs.core.next(seq__23522);
var sym = first__23523;
var clauses = seq__23522__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$not,sym)){
var temp__5718__auto__ = (datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1(clauses) : datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_(temp__5718__auto__)){
var clauses_STAR_ = temp__5718__auto__;
return datascript.parser.validate_not(datascript.parser.with_source((new datascript.parser.Not(source_STAR_,datascript.parser.collect_vars_distinct(clauses_STAR_),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot parse 'not' clause, expected [ src-var? 'not' clause+ ]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_not_join = (function datascript$parser$parse_not_join(form){
var temp__5720__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__23524 = temp__5720__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23524,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23524,(1),null);
var vec__23527 = next_form;
var seq__23528 = cljs.core.seq(vec__23527);
var first__23529 = cljs.core.first(seq__23528);
var seq__23528__$1 = cljs.core.next(seq__23528);
var sym = first__23529;
var first__23529__$1 = cljs.core.first(seq__23528__$1);
var seq__23528__$2 = cljs.core.next(seq__23528__$1);
var vars = first__23529__$1;
var clauses = seq__23528__$2;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$not_DASH_join,sym)){
var vars_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_variable,vars);
var clauses_STAR_ = (datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1(clauses) : datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_((function (){var and__3938__auto__ = vars_STAR_;
if(cljs.core.truth_(and__3938__auto__)){
return clauses_STAR_;
} else {
return and__3938__auto__;
}
})())){
return datascript.parser.validate_not(datascript.parser.with_source((new datascript.parser.Not(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot parse 'not-join' clause, expected [ src-var? 'not-join' [variable+] clause+ ]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.validate_or = (function datascript$parser$validate_or(clause,form){
var map__23530 = clause;
var map__23530__$1 = ((((!((map__23530 == null)))?(((((map__23530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23530):map__23530);
var map__23531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23530__$1,cljs.core.cst$kw$rule_DASH_vars);
var map__23531__$1 = ((((!((map__23531 == null)))?(((((map__23531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23531):map__23531);
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23531__$1,cljs.core.cst$kw$required);
var free = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23531__$1,cljs.core.cst$kw$free);
var clauses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23530__$1,cljs.core.cst$kw$clauses);
var vars = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required,free);
var seq__23534_23538 = cljs.core.seq(clauses);
var chunk__23535_23539 = null;
var count__23536_23540 = (0);
var i__23537_23541 = (0);
while(true){
if((i__23537_23541 < count__23536_23540)){
var clause_23542__$1 = chunk__23535_23539.cljs$core$IIndexed$_nth$arity$2(null,i__23537_23541);
datascript.parser.validate_join_vars(vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_23542__$1], null),form);


var G__23543 = seq__23534_23538;
var G__23544 = chunk__23535_23539;
var G__23545 = count__23536_23540;
var G__23546 = (i__23537_23541 + (1));
seq__23534_23538 = G__23543;
chunk__23535_23539 = G__23544;
count__23536_23540 = G__23545;
i__23537_23541 = G__23546;
continue;
} else {
var temp__5720__auto___23547 = cljs.core.seq(seq__23534_23538);
if(temp__5720__auto___23547){
var seq__23534_23548__$1 = temp__5720__auto___23547;
if(cljs.core.chunked_seq_QMARK_(seq__23534_23548__$1)){
var c__4351__auto___23549 = cljs.core.chunk_first(seq__23534_23548__$1);
var G__23550 = cljs.core.chunk_rest(seq__23534_23548__$1);
var G__23551 = c__4351__auto___23549;
var G__23552 = cljs.core.count(c__4351__auto___23549);
var G__23553 = (0);
seq__23534_23538 = G__23550;
chunk__23535_23539 = G__23551;
count__23536_23540 = G__23552;
i__23537_23541 = G__23553;
continue;
} else {
var clause_23554__$1 = cljs.core.first(seq__23534_23548__$1);
datascript.parser.validate_join_vars(vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_23554__$1], null),form);


var G__23555 = cljs.core.next(seq__23534_23548__$1);
var G__23556 = null;
var G__23557 = (0);
var G__23558 = (0);
seq__23534_23538 = G__23555;
chunk__23535_23539 = G__23556;
count__23536_23540 = G__23557;
i__23537_23541 = G__23558;
continue;
}
} else {
}
}
break;
}

return clause;
});
datascript.parser.parse_and = (function datascript$parser$parse_and(form){
if(((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$and,cljs.core.first(form))))){
var clauses_STAR_ = (function (){var G__23559 = cljs.core.next(form);
return (datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1(G__23559) : datascript.parser.parse_clauses.call(null,G__23559));
})();
if(cljs.core.truth_(cljs.core.not_empty(clauses_STAR_))){
return (new datascript.parser.And(clauses_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot parse 'and' clause, expected [ 'and' clause+ ]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
}
} else {
return null;
}
});
datascript.parser.parse_or = (function datascript$parser$parse_or(form){
var temp__5720__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__23560 = temp__5720__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23560,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23560,(1),null);
var vec__23563 = next_form;
var seq__23564 = cljs.core.seq(vec__23563);
var first__23565 = cljs.core.first(seq__23564);
var seq__23564__$1 = cljs.core.next(seq__23564);
var sym = first__23565;
var clauses = seq__23564__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$or,sym)){
var temp__5718__auto__ = datascript.parser.parse_seq(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_(temp__5718__auto__)){
var clauses_STAR_ = temp__5718__auto__;
return datascript.parser.validate_or(datascript.parser.with_source((new datascript.parser.Or(source_STAR_,(new datascript.parser.RuleVars(null,datascript.parser.collect_vars_distinct(clauses_STAR_),null,null,null)),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot parse 'or' clause, expected [ src-var? 'or' clause+ ]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_or_join = (function datascript$parser$parse_or_join(form){
var temp__5720__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__23566 = temp__5720__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23566,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23566,(1),null);
var vec__23569 = next_form;
var seq__23570 = cljs.core.seq(vec__23569);
var first__23571 = cljs.core.first(seq__23570);
var seq__23570__$1 = cljs.core.next(seq__23570);
var sym = first__23571;
var first__23571__$1 = cljs.core.first(seq__23570__$1);
var seq__23570__$2 = cljs.core.next(seq__23570__$1);
var vars = first__23571__$1;
var clauses = seq__23570__$2;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$or_DASH_join,sym)){
var vars_STAR_ = datascript.parser.parse_rule_vars(vars);
var clauses_STAR_ = datascript.parser.parse_seq(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_((function (){var and__3938__auto__ = vars_STAR_;
if(cljs.core.truth_(and__3938__auto__)){
return clauses_STAR_;
} else {
return and__3938__auto__;
}
})())){
return datascript.parser.validate_or(datascript.parser.with_source((new datascript.parser.Or(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot parse 'or-join' clause, expected [ src-var? 'or-join' [variable+] clause+ ]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_clause = (function datascript$parser$parse_clause(form){
var or__3949__auto__ = datascript.parser.parse_not(form);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = datascript.parser.parse_not_join(form);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = datascript.parser.parse_or(form);
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
var or__3949__auto____$3 = datascript.parser.parse_or_join(form);
if(cljs.core.truth_(or__3949__auto____$3)){
return or__3949__auto____$3;
} else {
var or__3949__auto____$4 = datascript.parser.parse_pred(form);
if(cljs.core.truth_(or__3949__auto____$4)){
return or__3949__auto____$4;
} else {
var or__3949__auto____$5 = datascript.parser.parse_fn(form);
if(cljs.core.truth_(or__3949__auto____$5)){
return or__3949__auto____$5;
} else {
var or__3949__auto____$6 = datascript.parser.parse_rule_expr(form);
if(cljs.core.truth_(or__3949__auto____$6)){
return or__3949__auto____$6;
} else {
var or__3949__auto____$7 = datascript.parser.parse_pattern(form);
if(cljs.core.truth_(or__3949__auto____$7)){
return or__3949__auto____$7;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot parse clause, expected (data-pattern | pred-expr | fn-expr | rule-expr | not-clause | not-join-clause | or-clause | or-join-clause)"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
}
}
}
}
}
}
}
}
});
datascript.parser.parse_clauses = (function datascript$parser$parse_clauses(clauses){
return datascript.parser.parse_seq(datascript.parser.parse_clause,clauses);
});
datascript.parser.parse_where = (function datascript$parser$parse_where(form){
var or__3949__auto__ = datascript.parser.parse_clauses(form);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot parse :where clause, expected [clause+]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleBranch = (function (vars,clauses,__meta,__extmap,__hash){
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k23577,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__23581 = k23577;
var G__23581__$1 = (((G__23581 instanceof cljs.core.Keyword))?G__23581.fqn:null);
switch (G__23581__$1) {
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23577,else__4206__auto__);

}
});

datascript.parser.RuleBranch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.parser.RuleBranch{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vars,self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clauses,self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23576){
var self__ = this;
var G__23576__$1 = this;
return (new cljs.core.RecordIter((0),G__23576__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vars,cljs.core.cst$kw$clauses], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.RuleBranch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleBranch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__23582 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (1024755006 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__23582(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23578,other23579){
var self__ = this;
var this23578__$1 = this;
return ((!((other23579 == null))) && ((this23578__$1.constructor === other23579.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23578__$1.vars,other23579.vars)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23578__$1.clauses,other23579.clauses)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23578__$1.__extmap,other23579.__extmap)));
});

datascript.parser.RuleBranch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$clauses,null,cljs.core.cst$kw$vars,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__23576){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__23583 = cljs.core.keyword_identical_QMARK_;
var expr__23584 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__23586 = cljs.core.cst$kw$vars;
var G__23587 = expr__23584;
return (pred__23583.cljs$core$IFn$_invoke$arity$2 ? pred__23583.cljs$core$IFn$_invoke$arity$2(G__23586,G__23587) : pred__23583.call(null,G__23586,G__23587));
})())){
return (new datascript.parser.RuleBranch(G__23576,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23588 = cljs.core.cst$kw$clauses;
var G__23589 = expr__23584;
return (pred__23583.cljs$core$IFn$_invoke$arity$2 ? pred__23583.cljs$core$IFn$_invoke$arity$2(G__23588,G__23589) : pred__23583.call(null,G__23588,G__23589));
})())){
return (new datascript.parser.RuleBranch(self__.vars,G__23576,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__23576),null));
}
}
});

datascript.parser.RuleBranch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$vars,self__.vars,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$clauses,self__.clauses,null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__23576){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,G__23576,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21799__auto__,f23573){
var self__ = this;
var this__21799__auto____$1 = this;
var new__21800__auto__ = (new datascript.parser.RuleBranch(datascript.parser.postwalk(self__.vars,f23573),datascript.parser.postwalk(self__.clauses,f23573),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__21799__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__21801__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__21800__auto__,meta__21801__auto__);
} else {
return new__21800__auto__;
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21802__auto__,pred23574,acc23575){
var self__ = this;
var ___21802__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23574,self__.clauses,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23574,self__.vars,acc23575));
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21802__auto__,acc23575){
var self__ = this;
var ___21802__auto____$1 = this;
return datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(acc23575,self__.vars),self__.clauses);
});

datascript.parser.RuleBranch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$vars,cljs.core.cst$sym$clauses], null);
});

datascript.parser.RuleBranch.cljs$lang$type = true;

datascript.parser.RuleBranch.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.parser/RuleBranch",null,(1),null));
});

datascript.parser.RuleBranch.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.parser/RuleBranch");
});

/**
 * Positional factory function for datascript.parser/RuleBranch.
 */
datascript.parser.__GT_RuleBranch = (function datascript$parser$__GT_RuleBranch(vars,clauses){
return (new datascript.parser.RuleBranch(vars,clauses,null,null,null));
});

/**
 * Factory function for datascript.parser/RuleBranch, taking a map of keywords to field values.
 */
datascript.parser.map__GT_RuleBranch = (function datascript$parser$map__GT_RuleBranch(G__23580){
var extmap__4236__auto__ = (function (){var G__23590 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23580,cljs.core.cst$kw$vars,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$clauses], 0));
if(cljs.core.record_QMARK_(G__23580)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23590);
} else {
return G__23590;
}
})();
return (new datascript.parser.RuleBranch(cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(G__23580),cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(G__23580),null,cljs.core.not_empty(extmap__4236__auto__),null));
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Rule = (function (name,branches,__meta,__extmap,__hash){
this.name = name;
this.branches = branches;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k23596,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__23600 = k23596;
var G__23600__$1 = (((G__23600 instanceof cljs.core.Keyword))?G__23600.fqn:null);
switch (G__23600__$1) {
case "name":
return self__.name;

break;
case "branches":
return self__.branches;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23596,else__4206__auto__);

}
});

datascript.parser.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.parser.Rule{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$branches,self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23595){
var self__ = this;
var G__23595__$1 = this;
return (new cljs.core.RecordIter((0),G__23595__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$branches], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__23601 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-900273052 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__23601(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.parser.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23597,other23598){
var self__ = this;
var this23597__$1 = this;
return ((!((other23598 == null))) && ((this23597__$1.constructor === other23598.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23597__$1.name,other23598.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23597__$1.branches,other23598.branches)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23597__$1.__extmap,other23598.__extmap)));
});

datascript.parser.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,null,cljs.core.cst$kw$branches,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.parser.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__23595){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__23602 = cljs.core.keyword_identical_QMARK_;
var expr__23603 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__23605 = cljs.core.cst$kw$name;
var G__23606 = expr__23603;
return (pred__23602.cljs$core$IFn$_invoke$arity$2 ? pred__23602.cljs$core$IFn$_invoke$arity$2(G__23605,G__23606) : pred__23602.call(null,G__23605,G__23606));
})())){
return (new datascript.parser.Rule(G__23595,self__.branches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23607 = cljs.core.cst$kw$branches;
var G__23608 = expr__23603;
return (pred__23602.cljs$core$IFn$_invoke$arity$2 ? pred__23602.cljs$core$IFn$_invoke$arity$2(G__23607,G__23608) : pred__23602.call(null,G__23607,G__23608));
})())){
return (new datascript.parser.Rule(self__.name,G__23595,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__23595),null));
}
}
});

datascript.parser.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$name,self__.name,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$branches,self__.branches,null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__23595){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,G__23595,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21799__auto__,f23592){
var self__ = this;
var this__21799__auto____$1 = this;
var new__21800__auto__ = (new datascript.parser.Rule(datascript.parser.postwalk(self__.name,f23592),datascript.parser.postwalk(self__.branches,f23592),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__21799__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__21801__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__21800__auto__,meta__21801__auto__);
} else {
return new__21800__auto__;
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21802__auto__,pred23593,acc23594){
var self__ = this;
var ___21802__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23593,self__.branches,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23593,self__.name,acc23594));
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21802__auto__,acc23594){
var self__ = this;
var ___21802__auto____$1 = this;
return datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(acc23594,self__.name),self__.branches);
});

datascript.parser.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$branches], null);
});

datascript.parser.Rule.cljs$lang$type = true;

datascript.parser.Rule.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.parser/Rule",null,(1),null));
});

datascript.parser.Rule.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.parser/Rule");
});

/**
 * Positional factory function for datascript.parser/Rule.
 */
datascript.parser.__GT_Rule = (function datascript$parser$__GT_Rule(name,branches){
return (new datascript.parser.Rule(name,branches,null,null,null));
});

/**
 * Factory function for datascript.parser/Rule, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Rule = (function datascript$parser$map__GT_Rule(G__23599){
var extmap__4236__auto__ = (function (){var G__23609 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23599,cljs.core.cst$kw$name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$branches], 0));
if(cljs.core.record_QMARK_(G__23599)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23609);
} else {
return G__23609;
}
})();
return (new datascript.parser.Rule(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__23599),cljs.core.cst$kw$branches.cljs$core$IFn$_invoke$arity$1(G__23599),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

datascript.parser.validate_vars = (function datascript$parser$validate_vars(vars,clauses,form){
var declared_vars = datascript.parser.collect.cljs$core$IFn$_invoke$arity$3((function (p1__23611_SHARP_){
return (p1__23611_SHARP_ instanceof datascript.parser.Variable);
}),vars,cljs.core.PersistentHashSet.EMPTY);
var used_vars = datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(((function (declared_vars){
return (function (p1__23612_SHARP_){
return (p1__23612_SHARP_ instanceof datascript.parser.Variable);
});})(declared_vars))
,clauses,cljs.core.PersistentHashSet.EMPTY);
var undeclared_vars = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(used_vars,declared_vars);
if(cljs.core.empty_QMARK_(undeclared_vars)){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Reference to the unknown variables: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,undeclared_vars)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule,cljs.core.cst$kw$form,form,cljs.core.cst$kw$vars,undeclared_vars], null));
}
});
datascript.parser.parse_rule = (function datascript$parser$parse_rule(form){
if(cljs.core.sequential_QMARK_(form)){
var vec__23613 = form;
var seq__23614 = cljs.core.seq(vec__23613);
var first__23615 = cljs.core.first(seq__23614);
var seq__23614__$1 = cljs.core.next(seq__23614);
var head = first__23615;
var clauses = seq__23614__$1;
if(cljs.core.sequential_QMARK_(head)){
var vec__23616 = head;
var seq__23617 = cljs.core.seq(vec__23616);
var first__23618 = cljs.core.first(seq__23617);
var seq__23617__$1 = cljs.core.next(seq__23617);
var name = first__23618;
var vars = seq__23617__$1;
var name_STAR_ = (function (){var or__3949__auto__ = datascript.parser.parse_plain_symbol(name);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot parse rule name, expected plain-symbol"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule,cljs.core.cst$kw$form,form], null));
}
})();
var vars_STAR_ = datascript.parser.parse_rule_vars(vars);
var clauses_STAR_ = (function (){var or__3949__auto__ = cljs.core.not_empty(datascript.parser.parse_clauses(clauses));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Rule branch should have clauses"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule,cljs.core.cst$kw$form,form], null));
}
})();
datascript.parser.validate_vars(vars_STAR_,clauses_STAR_,form);

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,name_STAR_,cljs.core.cst$kw$vars,vars_STAR_,cljs.core.cst$kw$clauses,clauses_STAR_], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot parse rule head, expected [rule-name rule-vars]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule,cljs.core.cst$kw$form,form], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot parse rule, expected [rule-head clause+]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule,cljs.core.cst$kw$form,form], null));
}
});
datascript.parser.validate_arity = (function datascript$parser$validate_arity(name,branches){
var vars0 = cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(cljs.core.first(branches));
var arity0 = datascript.parser.rule_vars_arity(vars0);
var seq__23619 = cljs.core.seq(cljs.core.next(branches));
var chunk__23621 = null;
var count__23622 = (0);
var i__23623 = (0);
while(true){
if((i__23623 < count__23622)){
var b = chunk__23621.cljs$core$IIndexed$_nth$arity$2(null,i__23623);
var vars_23625 = cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(arity0,datascript.parser.rule_vars_arity(vars_23625))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Arity mismatch for rule '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$symbol.cljs$core$IFn$_invoke$arity$1(name)], 0))),"': ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.flatten_rule_vars(vars0)], 0)))," vs. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.flatten_rule_vars(vars_23625)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule,cljs.core.cst$kw$rule,name], null));
} else {
}


var G__23626 = seq__23619;
var G__23627 = chunk__23621;
var G__23628 = count__23622;
var G__23629 = (i__23623 + (1));
seq__23619 = G__23626;
chunk__23621 = G__23627;
count__23622 = G__23628;
i__23623 = G__23629;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__23619);
if(temp__5720__auto__){
var seq__23619__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23619__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__23619__$1);
var G__23630 = cljs.core.chunk_rest(seq__23619__$1);
var G__23631 = c__4351__auto__;
var G__23632 = cljs.core.count(c__4351__auto__);
var G__23633 = (0);
seq__23619 = G__23630;
chunk__23621 = G__23631;
count__23622 = G__23632;
i__23623 = G__23633;
continue;
} else {
var b = cljs.core.first(seq__23619__$1);
var vars_23634 = cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(arity0,datascript.parser.rule_vars_arity(vars_23634))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Arity mismatch for rule '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$symbol.cljs$core$IFn$_invoke$arity$1(name)], 0))),"': ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.flatten_rule_vars(vars0)], 0)))," vs. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.flatten_rule_vars(vars_23634)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule,cljs.core.cst$kw$rule,name], null));
} else {
}


var G__23635 = cljs.core.next(seq__23619__$1);
var G__23636 = null;
var G__23637 = (0);
var G__23638 = (0);
seq__23619 = G__23635;
chunk__23621 = G__23636;
count__23622 = G__23637;
i__23623 = G__23638;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.parser.parse_rules = (function datascript$parser$parse_rules(form){
return cljs.core.vec((function (){var iter__4324__auto__ = (function datascript$parser$parse_rules_$_iter__23640(s__23641){
return (new cljs.core.LazySeq(null,(function (){
var s__23641__$1 = s__23641;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__23641__$1);
if(temp__5720__auto__){
var s__23641__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23641__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__23641__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__23643 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__23642 = (0);
while(true){
if((i__23642 < size__4323__auto__)){
var vec__23644 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__23642);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23644,(0),null);
var branches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23644,(1),null);
var branches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__23642,vec__23644,name,branches,c__4322__auto__,size__4323__auto__,b__23643,s__23641__$2,temp__5720__auto__){
return (function (p1__23639_SHARP_){
return (new datascript.parser.RuleBranch(cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(p1__23639_SHARP_),cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(p1__23639_SHARP_),null,null,null));
});})(i__23642,vec__23644,name,branches,c__4322__auto__,size__4323__auto__,b__23643,s__23641__$2,temp__5720__auto__))
,branches);
cljs.core.chunk_append(b__23643,(function (){
datascript.parser.validate_arity(name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
);

var G__23650 = (i__23642 + (1));
i__23642 = G__23650;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23643),datascript$parser$parse_rules_$_iter__23640(cljs.core.chunk_rest(s__23641__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23643),null);
}
} else {
var vec__23647 = cljs.core.first(s__23641__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23647,(0),null);
var branches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23647,(1),null);
var branches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__23647,name,branches,s__23641__$2,temp__5720__auto__){
return (function (p1__23639_SHARP_){
return (new datascript.parser.RuleBranch(cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(p1__23639_SHARP_),cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(p1__23639_SHARP_),null,null,null));
});})(vec__23647,name,branches,s__23641__$2,temp__5720__auto__))
,branches);
return cljs.core.cons((function (){
datascript.parser.validate_arity(name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
,datascript$parser$parse_rules_$_iter__23640(cljs.core.rest(s__23641__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.group_by(cljs.core.cst$kw$name,datascript.parser.parse_seq(datascript.parser.parse_rule,form)));
})());
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
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Query = (function (qfind,qwith,qin,qwhere,__meta,__extmap,__hash){
this.qfind = qfind;
this.qwith = qwith;
this.qin = qin;
this.qwhere = qwhere;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k23655,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__23659 = k23655;
var G__23659__$1 = (((G__23659 instanceof cljs.core.Keyword))?G__23659.fqn:null);
switch (G__23659__$1) {
case "qfind":
return self__.qfind;

break;
case "qwith":
return self__.qwith;

break;
case "qin":
return self__.qin;

break;
case "qwhere":
return self__.qwhere;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23655,else__4206__auto__);

}
});

datascript.parser.Query.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.parser.Query{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$qfind,self__.qfind],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$qwith,self__.qwith],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$qin,self__.qin],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$qwhere,self__.qwhere],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23654){
var self__ = this;
var G__23654__$1 = this;
return (new cljs.core.RecordIter((0),G__23654__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$qfind,cljs.core.cst$kw$qwith,cljs.core.cst$kw$qin,cljs.core.cst$kw$qwhere], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Query.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Query.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__23660 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (181307977 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__23660(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.parser.Query.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23656,other23657){
var self__ = this;
var this23656__$1 = this;
return ((!((other23657 == null))) && ((this23656__$1.constructor === other23657.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23656__$1.qfind,other23657.qfind)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23656__$1.qwith,other23657.qwith)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23656__$1.qin,other23657.qin)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23656__$1.qwhere,other23657.qwhere)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23656__$1.__extmap,other23657.__extmap)));
});

datascript.parser.Query.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$qfind,null,cljs.core.cst$kw$qwhere,null,cljs.core.cst$kw$qin,null,cljs.core.cst$kw$qwith,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qin,self__.qwhere,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.parser.Query.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__23654){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__23661 = cljs.core.keyword_identical_QMARK_;
var expr__23662 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__23664 = cljs.core.cst$kw$qfind;
var G__23665 = expr__23662;
return (pred__23661.cljs$core$IFn$_invoke$arity$2 ? pred__23661.cljs$core$IFn$_invoke$arity$2(G__23664,G__23665) : pred__23661.call(null,G__23664,G__23665));
})())){
return (new datascript.parser.Query(G__23654,self__.qwith,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23666 = cljs.core.cst$kw$qwith;
var G__23667 = expr__23662;
return (pred__23661.cljs$core$IFn$_invoke$arity$2 ? pred__23661.cljs$core$IFn$_invoke$arity$2(G__23666,G__23667) : pred__23661.call(null,G__23666,G__23667));
})())){
return (new datascript.parser.Query(self__.qfind,G__23654,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23668 = cljs.core.cst$kw$qin;
var G__23669 = expr__23662;
return (pred__23661.cljs$core$IFn$_invoke$arity$2 ? pred__23661.cljs$core$IFn$_invoke$arity$2(G__23668,G__23669) : pred__23661.call(null,G__23668,G__23669));
})())){
return (new datascript.parser.Query(self__.qfind,self__.qwith,G__23654,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23670 = cljs.core.cst$kw$qwhere;
var G__23671 = expr__23662;
return (pred__23661.cljs$core$IFn$_invoke$arity$2 ? pred__23661.cljs$core$IFn$_invoke$arity$2(G__23670,G__23671) : pred__23661.call(null,G__23670,G__23671));
})())){
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qin,G__23654,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qin,self__.qwhere,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__23654),null));
}
}
}
}
});

datascript.parser.Query.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$qfind,self__.qfind,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$qwith,self__.qwith,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$qin,self__.qin,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$qwhere,self__.qwhere,null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__23654){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qin,self__.qwhere,G__23654,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Query.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__21799__auto__,f23651){
var self__ = this;
var this__21799__auto____$1 = this;
var new__21800__auto__ = (new datascript.parser.Query(datascript.parser.postwalk(self__.qfind,f23651),datascript.parser.postwalk(self__.qwith,f23651),datascript.parser.postwalk(self__.qin,f23651),datascript.parser.postwalk(self__.qwhere,f23651),null,null,null));
var temp__5718__auto__ = cljs.core.meta(this__21799__auto____$1);
if(cljs.core.truth_(temp__5718__auto__)){
var meta__21801__auto__ = temp__5718__auto__;
return cljs.core.with_meta(new__21800__auto__,meta__21801__auto__);
} else {
return new__21800__auto__;
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___21802__auto__,pred23652,acc23653){
var self__ = this;
var ___21802__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23652,self__.qwhere,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23652,self__.qin,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23652,self__.qwith,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred23652,self__.qfind,acc23653))));
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___21802__auto__,acc23653){
var self__ = this;
var ___21802__auto____$1 = this;
return datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(acc23653,self__.qfind),self__.qwith),self__.qin),self__.qwhere);
});

datascript.parser.Query.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$qfind,cljs.core.cst$sym$qwith,cljs.core.cst$sym$qin,cljs.core.cst$sym$qwhere], null);
});

datascript.parser.Query.cljs$lang$type = true;

datascript.parser.Query.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.parser/Query",null,(1),null));
});

datascript.parser.Query.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.parser/Query");
});

/**
 * Positional factory function for datascript.parser/Query.
 */
datascript.parser.__GT_Query = (function datascript$parser$__GT_Query(qfind,qwith,qin,qwhere){
return (new datascript.parser.Query(qfind,qwith,qin,qwhere,null,null,null));
});

/**
 * Factory function for datascript.parser/Query, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Query = (function datascript$parser$map__GT_Query(G__23658){
var extmap__4236__auto__ = (function (){var G__23672 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23658,cljs.core.cst$kw$qfind,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$qwith,cljs.core.cst$kw$qin,cljs.core.cst$kw$qwhere], 0));
if(cljs.core.record_QMARK_(G__23658)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23672);
} else {
return G__23672;
}
})();
return (new datascript.parser.Query(cljs.core.cst$kw$qfind.cljs$core$IFn$_invoke$arity$1(G__23658),cljs.core.cst$kw$qwith.cljs$core$IFn$_invoke$arity$1(G__23658),cljs.core.cst$kw$qin.cljs$core$IFn$_invoke$arity$1(G__23658),cljs.core.cst$kw$qwhere.cljs$core$IFn$_invoke$arity$1(G__23658),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

datascript.parser.query__GT_map = (function datascript$parser$query__GT_map(query){
var parsed = cljs.core.PersistentArrayMap.EMPTY;
var key = null;
var qs = query;
while(true){
var temp__5718__auto__ = cljs.core.first(qs);
if(cljs.core.truth_(temp__5718__auto__)){
var q = temp__5718__auto__;
if((q instanceof cljs.core.Keyword)){
var G__23674 = parsed;
var G__23675 = q;
var G__23676 = cljs.core.next(qs);
parsed = G__23674;
key = G__23675;
qs = G__23676;
continue;
} else {
var G__23677 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__23678 = key;
var G__23679 = cljs.core.next(qs);
parsed = G__23677;
key = G__23678;
qs = G__23679;
continue;
}
} else {
return parsed;
}
break;
}
});
datascript.parser.validate_query = (function datascript$parser$validate_query(q,form){
var find_vars_23686 = cljs.core.set(datascript.parser.collect_vars(cljs.core.cst$kw$qfind.cljs$core$IFn$_invoke$arity$1(q)));
var with_vars_23687 = cljs.core.set(cljs.core.cst$kw$qwith.cljs$core$IFn$_invoke$arity$1(q));
var in_vars_23688 = cljs.core.set(datascript.parser.collect_vars(cljs.core.cst$kw$qin.cljs$core$IFn$_invoke$arity$1(q)));
var where_vars_23689 = cljs.core.set(datascript.parser.collect_vars(cljs.core.cst$kw$qwhere.cljs$core$IFn$_invoke$arity$1(q)));
var unknown_23690 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.union.cljs$core$IFn$_invoke$arity$2(find_vars_23686,with_vars_23687),clojure.set.union.cljs$core$IFn$_invoke$arity$2(where_vars_23689,in_vars_23688));
var shared_23691 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(find_vars_23686,with_vars_23687);
if(cljs.core.empty_QMARK_(unknown_23690)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Query for unknown vars: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,unknown_23690)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$vars,unknown_23690,cljs.core.cst$kw$form,form], null));
}

if(cljs.core.empty_QMARK_(shared_23691)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":find and :with should not use same variables: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,shared_23691)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$vars,shared_23691,cljs.core.cst$kw$form,form], null));
}

var in_vars_23692 = datascript.parser.collect_vars(cljs.core.cst$kw$qin.cljs$core$IFn$_invoke$arity$1(q));
var in_sources_23693 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$2(((function (in_vars_23692){
return (function (p1__23680_SHARP_){
return (p1__23680_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_vars_23692))
,cljs.core.cst$kw$qin.cljs$core$IFn$_invoke$arity$1(q));
var in_rules_23694 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$2(((function (in_vars_23692,in_sources_23693){
return (function (p1__23681_SHARP_){
return (p1__23681_SHARP_ instanceof datascript.parser.RulesVar);
});})(in_vars_23692,in_sources_23693))
,cljs.core.cst$kw$qin.cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_((function (){var and__3938__auto__ = datascript.parser.distinct_QMARK_(in_vars_23692);
if(cljs.core.truth_(and__3938__auto__)){
var and__3938__auto____$1 = datascript.parser.distinct_QMARK_(in_sources_23693);
if(cljs.core.truth_(and__3938__auto____$1)){
return datascript.parser.distinct_QMARK_(in_rules_23694);
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Vars used in :in should be distinct"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$form,form], null));
}

var with_vars_23695 = datascript.parser.collect_vars(cljs.core.cst$kw$qwith.cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(datascript.parser.distinct_QMARK_(with_vars_23695))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Vars used in :with should be distinct"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$form,form], null));
}

var in_sources_23696 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$3((function (p1__23682_SHARP_){
return (p1__23682_SHARP_ instanceof datascript.parser.SrcVar);
}),cljs.core.cst$kw$qin.cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var where_sources_23697 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(((function (in_sources_23696){
return (function (p1__23683_SHARP_){
return (p1__23683_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_sources_23696))
,cljs.core.cst$kw$qwhere.cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var unknown_23698 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(where_sources_23697,in_sources_23696);
if(cljs.core.empty_QMARK_(unknown_23698)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Where uses unknown source vars: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,unknown_23698)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$vars,unknown_23698,cljs.core.cst$kw$form,form], null));
}

var rule_exprs = datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((function (p1__23684_SHARP_){
return (p1__23684_SHARP_ instanceof datascript.parser.RuleExpr);
}),cljs.core.cst$kw$qwhere.cljs$core$IFn$_invoke$arity$1(q));
var rules_vars = datascript.parser.collect.cljs$core$IFn$_invoke$arity$2(((function (rule_exprs){
return (function (p1__23685_SHARP_){
return (p1__23685_SHARP_ instanceof datascript.parser.RulesVar);
});})(rule_exprs))
,cljs.core.cst$kw$qin.cljs$core$IFn$_invoke$arity$1(q));
if(((!(cljs.core.empty_QMARK_(rule_exprs))) && (cljs.core.empty_QMARK_(rules_vars)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Missing rules var '%' in :in"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$form,form], null));
} else {
return null;
}
});
datascript.parser.parse_query = (function datascript$parser$parse_query(q){
var qm = ((cljs.core.map_QMARK_(q))?q:((cljs.core.sequential_QMARK_(q))?datascript.parser.query__GT_map(q):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Query should be a vector or a map"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$form,q], null))})()
));
var res = datascript.parser.map__GT_Query(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$qfind,datascript.parser.parse_find(cljs.core.cst$kw$find.cljs$core$IFn$_invoke$arity$1(qm)),cljs.core.cst$kw$qwith,(function (){var temp__5720__auto__ = cljs.core.cst$kw$with.cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(temp__5720__auto__)){
var with$ = temp__5720__auto__;
return datascript.parser.parse_with(with$);
} else {
return null;
}
})(),cljs.core.cst$kw$qin,datascript.parser.parse_in(cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$2(qm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$$], null))),cljs.core.cst$kw$qwhere,datascript.parser.parse_where(cljs.core.cst$kw$where.cljs$core$IFn$_invoke$arity$2(qm,cljs.core.PersistentVector.EMPTY))], null));
datascript.parser.validate_query(res,q);

return res;
});
