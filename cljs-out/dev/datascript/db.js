// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('datascript.db');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.array');
goog.require('clojure.walk');
goog.require('clojure.data');
goog.require('me.tonsky.persistent_sorted_set');
goog.require('me.tonsky.persistent_sorted_set.arrays');
datascript.db.Exception = Error;

datascript.db.IllegalArgumentException = Error;

datascript.db.UnsupportedOperationException = Error;
datascript.db.e0 = (0);
datascript.db.tx0 = (536870912);
datascript.db.emax = (2147483647);
datascript.db.txmax = (2147483647);
datascript.db.implicit_schema = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_ident,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_unique,cljs.core.cst$kw$db$unique_SLASH_identity], null)], null);
datascript.db.seqable_QMARK_ = (function datascript$db$seqable_QMARK_(x){
return ((!(typeof x === 'string')) && (((cljs.core.seqable_QMARK_(x)) || (me.tonsky.persistent_sorted_set.arrays.array_QMARK_(x)))));
});
/**
 * Take the &env from a macro, and tell whether we are expanding into cljs.
 */
datascript.db.cljs_env_QMARK_ = (function datascript$db$cljs_env_QMARK_(env){
return cljs.core.boolean$(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(env));
});
datascript.db.combine_hashes = (function datascript$db$combine_hashes(x,y){
return cljs.core.hash_combine(x,y);
});






/**
 * @interface
 */
datascript.db.IDatom = function(){};

datascript.db.datom_tx = (function datascript$db$datom_tx(this$){
if(((!((this$ == null))) && (!((this$.datascript$db$IDatom$datom_tx$arity$1 == null))))){
return this$.datascript$db$IDatom$datom_tx$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (datascript.db.datom_tx[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (datascript.db.datom_tx["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDatom.datom-tx",this$);
}
}
}
});

datascript.db.datom_added = (function datascript$db$datom_added(this$){
if(((!((this$ == null))) && (!((this$.datascript$db$IDatom$datom_added$arity$1 == null))))){
return this$.datascript$db$IDatom$datom_added$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (datascript.db.datom_added[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (datascript.db.datom_added["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDatom.datom-added",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {datascript.db.IDatom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
datascript.db.Datom = (function (e,a,v,tx,_hash){
this.e = e;
this.a = a;
this.v = v;
this.tx = tx;
this._hash = _hash;
this.cljs$lang$protocol_mask$partition0$ = 2162164496;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
datascript.db.Datom.prototype.datascript$db$IDatom$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.Datom.prototype.datascript$db$IDatom$datom_tx$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
if((self__.tx > (0))){
return self__.tx;
} else {
return (- self__.tx);
}
});

datascript.db.Datom.prototype.datascript$db$IDatom$datom_added$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
return (self__.tx > (0));
});

datascript.db.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
if((self__._hash === (0))){
return self__._hash = (datascript.db.hash_datom.cljs$core$IFn$_invoke$arity$1 ? datascript.db.hash_datom.cljs$core$IFn$_invoke$arity$1(d__$1) : datascript.db.hash_datom.call(null,d__$1));
} else {
return self__._hash;
}
});

datascript.db.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (d,o){
var self__ = this;
var d__$1 = this;
var and__3938__auto__ = (o instanceof datascript.db.Datom);
if(and__3938__auto__){
return (datascript.db.equiv_datom.cljs$core$IFn$_invoke$arity$2 ? datascript.db.equiv_datom.cljs$core$IFn$_invoke$arity$2(d__$1,o) : datascript.db.equiv_datom.call(null,d__$1,o));
} else {
return and__3938__auto__;
}
});

datascript.db.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
return (datascript.db.seq_datom.cljs$core$IFn$_invoke$arity$1 ? datascript.db.seq_datom.cljs$core$IFn$_invoke$arity$1(d__$1) : datascript.db.seq_datom.call(null,d__$1));
});

datascript.db.Datom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (d,k){
var self__ = this;
var d__$1 = this;
return (datascript.db.val_at_datom.cljs$core$IFn$_invoke$arity$3 ? datascript.db.val_at_datom.cljs$core$IFn$_invoke$arity$3(d__$1,k,null) : datascript.db.val_at_datom.call(null,d__$1,k,null));
});

datascript.db.Datom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (d,k,nf){
var self__ = this;
var d__$1 = this;
return (datascript.db.val_at_datom.cljs$core$IFn$_invoke$arity$3 ? datascript.db.val_at_datom.cljs$core$IFn$_invoke$arity$3(d__$1,k,nf) : datascript.db.val_at_datom.call(null,d__$1,k,nf));
});

datascript.db.Datom.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
return (datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2 ? datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2(this$__$1,i) : datascript.db.nth_datom.call(null,this$__$1,i));
});

datascript.db.Datom.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){
var self__ = this;
var this$__$1 = this;
return (datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3 ? datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3(this$__$1,i,not_found) : datascript.db.nth_datom.call(null,this$__$1,i,not_found));
});

datascript.db.Datom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (d,k,v__$1){
var self__ = this;
var d__$1 = this;
return (datascript.db.assoc_datom.cljs$core$IFn$_invoke$arity$3 ? datascript.db.assoc_datom.cljs$core$IFn$_invoke$arity$3(d__$1,k,v__$1) : datascript.db.assoc_datom.call(null,d__$1,k,v__$1));
});

datascript.db.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var self__ = this;
var d__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"#datascript/Datom ["," ","]",opts,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d__$1.e,d__$1.a,d__$1.v,d__$1.datascript$db$IDatom$datom_tx$arity$1(null),d__$1.datascript$db$IDatom$datom_added$arity$1(null)], null));
});

datascript.db.Datom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$e,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$number], null)),cljs.core.cst$sym$a,cljs.core.cst$sym$v,cljs.core.with_meta(cljs.core.cst$sym$tx,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$number], null)),cljs.core.with_meta(cljs.core.cst$sym$_hash,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$sym$number,cljs.core.cst$kw$mutable,true], null))], null);
});

datascript.db.Datom.cljs$lang$type = true;

datascript.db.Datom.cljs$lang$ctorStr = "datascript.db/Datom";

datascript.db.Datom.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"datascript.db/Datom");
});

/**
 * Positional factory function for datascript.db/Datom.
 */
datascript.db.__GT_Datom = (function datascript$db$__GT_Datom(e,a,v,tx,_hash){
return (new datascript.db.Datom(e,a,v,tx,_hash));
});

goog.exportSymbol("datascript.db.Datom",datascript.db.Datom);
datascript.db.datom = (function datascript$db$datom(var_args){
var G__21450 = arguments.length;
switch (G__21450) {
case 3:
return datascript.db.datom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.db.datom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.db.datom.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.db.datom.cljs$core$IFn$_invoke$arity$3 = (function (e,a,v){
return (new datascript.db.Datom(e,a,v,(536870912),(0)));
});

datascript.db.datom.cljs$core$IFn$_invoke$arity$4 = (function (e,a,v,tx){
return (new datascript.db.Datom(e,a,v,tx,(0)));
});

datascript.db.datom.cljs$core$IFn$_invoke$arity$5 = (function (e,a,v,tx,added){
return (new datascript.db.Datom(e,a,v,(cljs.core.truth_(added)?tx:(- tx)),(0)));
});

datascript.db.datom.cljs$lang$maxFixedArity = 5;

datascript.db.datom_QMARK_ = (function datascript$db$datom_QMARK_(x){
return (x instanceof datascript.db.Datom);
});
datascript.db.hash_datom = (function datascript$db$hash_datom(d){
return datascript.db.combine_hashes(datascript.db.combine_hashes(cljs.core.hash(d.e),cljs.core.hash(d.a)),cljs.core.hash(d.v));
});
datascript.db.equiv_datom = (function datascript$db$equiv_datom(d,o){
return (((d.e === o.e)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d.a,o.a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d.v,o.v)));
});
datascript.db.seq_datom = (function datascript$db$seq_datom(d){
return (new cljs.core.List(null,d.e,(new cljs.core.List(null,d.a,(new cljs.core.List(null,d.v,(new cljs.core.List(null,d.datascript$db$IDatom$datom_tx$arity$1(null),(new cljs.core.List(null,d.datascript$db$IDatom$datom_added$arity$1(null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null));
});
datascript.db.val_at_datom = (function datascript$db$val_at_datom(d,k,not_found){
var G__21452 = k;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$v,G__21452)){
return d.v;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("e",G__21452)){
return d.e;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$added,G__21452)){
return d.datascript$db$IDatom$datom_added$arity$1(null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("v",G__21452)){
return d.v;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$e,G__21452)){
return d.e;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("a",G__21452)){
return d.a;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tx,G__21452)){
return d.datascript$db$IDatom$datom_tx$arity$1(null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("added",G__21452)){
return d.datascript$db$IDatom$datom_added$arity$1(null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("tx",G__21452)){
return d.datascript$db$IDatom$datom_tx$arity$1(null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$a,G__21452)){
return d.a;
} else {
return not_found;

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
});
datascript.db.nth_datom = (function datascript$db$nth_datom(var_args){
var G__21454 = arguments.length;
switch (G__21454) {
case 2:
return datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2 = (function (d,i){
var G__21455 = i;
switch (G__21455) {
case (0):
return d.e;

break;
case (1):
return d.a;

break;
case (2):
return d.v;

break;
case (3):
return d.datascript$db$IDatom$datom_tx$arity$1(null);

break;
case (4):
return d.datascript$db$IDatom$datom_added$arity$1(null);

break;
default:
throw (new Error(["Datom/-nth: Index out of bounds: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')));

}
});

datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3 = (function (d,i,not_found){
var G__21456 = i;
switch (G__21456) {
case (0):
return d.e;

break;
case (1):
return d.a;

break;
case (2):
return d.v;

break;
case (3):
return d.datascript$db$IDatom$datom_tx$arity$1(null);

break;
case (4):
return d.datascript$db$IDatom$datom_added$arity$1(null);

break;
default:
return not_found;

}
});

datascript.db.nth_datom.cljs$lang$maxFixedArity = 3;

datascript.db.assoc_datom = (function datascript$db$assoc_datom(d,k,v){
var G__21460 = k;
var G__21460__$1 = (((G__21460 instanceof cljs.core.Keyword))?G__21460.fqn:null);
switch (G__21460__$1) {
case "e":
return datascript.db.datom.cljs$core$IFn$_invoke$arity$5(v,d.a,d.v,d.datascript$db$IDatom$datom_tx$arity$1(null),d.datascript$db$IDatom$datom_added$arity$1(null));

break;
case "a":
return datascript.db.datom.cljs$core$IFn$_invoke$arity$5(d.e,v,d.v,d.datascript$db$IDatom$datom_tx$arity$1(null),d.datascript$db$IDatom$datom_added$arity$1(null));

break;
case "v":
return datascript.db.datom.cljs$core$IFn$_invoke$arity$5(d.e,d.a,v,d.datascript$db$IDatom$datom_tx$arity$1(null),d.datascript$db$IDatom$datom_added$arity$1(null));

break;
case "tx":
return datascript.db.datom.cljs$core$IFn$_invoke$arity$5(d.e,d.a,d.v,v,d.datascript$db$IDatom$datom_added$arity$1(null));

break;
case "added":
return datascript.db.datom.cljs$core$IFn$_invoke$arity$5(d.e,d.a,d.v,d.datascript$db$IDatom$datom_tx$arity$1(null),v);

break;
default:
throw (new datascript.db.IllegalArgumentException(["invalid key for #datascript/Datom: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));

}
});
datascript.db.datom_from_reader = (function datascript$db$datom_from_reader(vec){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(datascript.db.datom,vec);
});
datascript.db.cmp = (function datascript$db$cmp(o1,o2){
if((o1 == null)){
return (0);
} else {
if((o2 == null)){
return (0);
} else {
return cljs.core.compare(o1,o2);
}
}
});
datascript.db.cmp_datoms_eavt = (function datascript$db$cmp_datoms_eavt(d1,d2){
var c__20904__auto__ = (d1.e - d2.e);
if(((0) === c__20904__auto__)){
var c__20904__auto____$1 = datascript.db.cmp(d1.a,d2.a);
if(((0) === c__20904__auto____$1)){
var c__20904__auto____$2 = datascript.db.cmp(d1.v,d2.v);
if(((0) === c__20904__auto____$2)){
var c__20904__auto____$3 = (d1.datascript$db$IDatom$datom_tx$arity$1(null) - d2.datascript$db$IDatom$datom_tx$arity$1(null));
if(((0) === c__20904__auto____$3)){
return (0);
} else {
return c__20904__auto____$3;
}
} else {
return c__20904__auto____$2;
}
} else {
return c__20904__auto____$1;
}
} else {
return c__20904__auto__;
}
});
datascript.db.cmp_datoms_aevt = (function datascript$db$cmp_datoms_aevt(d1,d2){
var c__20904__auto__ = datascript.db.cmp(d1.a,d2.a);
if(((0) === c__20904__auto__)){
var c__20904__auto____$1 = (d1.e - d2.e);
if(((0) === c__20904__auto____$1)){
var c__20904__auto____$2 = datascript.db.cmp(d1.v,d2.v);
if(((0) === c__20904__auto____$2)){
var c__20904__auto____$3 = (d1.datascript$db$IDatom$datom_tx$arity$1(null) - d2.datascript$db$IDatom$datom_tx$arity$1(null));
if(((0) === c__20904__auto____$3)){
return (0);
} else {
return c__20904__auto____$3;
}
} else {
return c__20904__auto____$2;
}
} else {
return c__20904__auto____$1;
}
} else {
return c__20904__auto__;
}
});
datascript.db.cmp_datoms_avet = (function datascript$db$cmp_datoms_avet(d1,d2){
var c__20904__auto__ = datascript.db.cmp(d1.a,d2.a);
if(((0) === c__20904__auto__)){
var c__20904__auto____$1 = datascript.db.cmp(d1.v,d2.v);
if(((0) === c__20904__auto____$1)){
var c__20904__auto____$2 = (d1.e - d2.e);
if(((0) === c__20904__auto____$2)){
var c__20904__auto____$3 = (d1.datascript$db$IDatom$datom_tx$arity$1(null) - d2.datascript$db$IDatom$datom_tx$arity$1(null));
if(((0) === c__20904__auto____$3)){
return (0);
} else {
return c__20904__auto____$3;
}
} else {
return c__20904__auto____$2;
}
} else {
return c__20904__auto____$1;
}
} else {
return c__20904__auto__;
}
});
datascript.db.cmp_attr_quick = (function datascript$db$cmp_attr_quick(a1,a2){
if((a1 instanceof cljs.core.Keyword)){
return cljs.core._compare(a1,a2);
} else {
return goog.array.defaultCompare(a1,a2);
}
});
datascript.db.cmp_datoms_eavt_quick = (function datascript$db$cmp_datoms_eavt_quick(d1,d2){
var c__20904__auto__ = (d1.e - d2.e);
if(((0) === c__20904__auto__)){
var c__20904__auto____$1 = datascript.db.cmp_attr_quick(d1.a,d2.a);
if(((0) === c__20904__auto____$1)){
var c__20904__auto____$2 = cljs.core.compare(d1.v,d2.v);
if(((0) === c__20904__auto____$2)){
var c__20904__auto____$3 = (d1.datascript$db$IDatom$datom_tx$arity$1(null) - d2.datascript$db$IDatom$datom_tx$arity$1(null));
if(((0) === c__20904__auto____$3)){
return (0);
} else {
return c__20904__auto____$3;
}
} else {
return c__20904__auto____$2;
}
} else {
return c__20904__auto____$1;
}
} else {
return c__20904__auto__;
}
});
datascript.db.cmp_datoms_aevt_quick = (function datascript$db$cmp_datoms_aevt_quick(d1,d2){
var c__20904__auto__ = datascript.db.cmp_attr_quick(d1.a,d2.a);
if(((0) === c__20904__auto__)){
var c__20904__auto____$1 = (d1.e - d2.e);
if(((0) === c__20904__auto____$1)){
var c__20904__auto____$2 = cljs.core.compare(d1.v,d2.v);
if(((0) === c__20904__auto____$2)){
var c__20904__auto____$3 = (d1.datascript$db$IDatom$datom_tx$arity$1(null) - d2.datascript$db$IDatom$datom_tx$arity$1(null));
if(((0) === c__20904__auto____$3)){
return (0);
} else {
return c__20904__auto____$3;
}
} else {
return c__20904__auto____$2;
}
} else {
return c__20904__auto____$1;
}
} else {
return c__20904__auto__;
}
});
datascript.db.cmp_datoms_avet_quick = (function datascript$db$cmp_datoms_avet_quick(d1,d2){
var c__20904__auto__ = datascript.db.cmp_attr_quick(d1.a,d2.a);
if(((0) === c__20904__auto__)){
var c__20904__auto____$1 = cljs.core.compare(d1.v,d2.v);
if(((0) === c__20904__auto____$1)){
var c__20904__auto____$2 = (d1.e - d2.e);
if(((0) === c__20904__auto____$2)){
var c__20904__auto____$3 = (d1.datascript$db$IDatom$datom_tx$arity$1(null) - d2.datascript$db$IDatom$datom_tx$arity$1(null));
if(((0) === c__20904__auto____$3)){
return (0);
} else {
return c__20904__auto____$3;
}
} else {
return c__20904__auto____$2;
}
} else {
return c__20904__auto____$1;
}
} else {
return c__20904__auto__;
}
});
datascript.db.diff_sorted = (function datascript$db$diff_sorted(a,b,cmp){
var only_a = cljs.core.PersistentVector.EMPTY;
var only_b = cljs.core.PersistentVector.EMPTY;
var both = cljs.core.PersistentVector.EMPTY;
var a__$1 = a;
var b__$1 = b;
while(true){
if(cljs.core.empty_QMARK_(a__$1)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(only_a),cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(only_b,b__$1)),cljs.core.not_empty(both)], null);
} else {
if(cljs.core.empty_QMARK_(b__$1)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(only_a,a__$1)),cljs.core.not_empty(only_b),cljs.core.not_empty(both)], null);
} else {
var first_a = cljs.core.first(a__$1);
var first_b = cljs.core.first(b__$1);
var diff = (cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(first_a,first_b) : cmp.call(null,first_a,first_b));
if((diff === (0))){
var G__21463 = only_a;
var G__21464 = only_b;
var G__21465 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(both,first_a);
var G__21466 = cljs.core.next(a__$1);
var G__21467 = cljs.core.next(b__$1);
only_a = G__21463;
only_b = G__21464;
both = G__21465;
a__$1 = G__21466;
b__$1 = G__21467;
continue;
} else {
if((diff < (0))){
var G__21468 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(only_a,first_a);
var G__21469 = only_b;
var G__21470 = both;
var G__21471 = cljs.core.next(a__$1);
var G__21472 = b__$1;
only_a = G__21468;
only_b = G__21469;
both = G__21470;
a__$1 = G__21471;
b__$1 = G__21472;
continue;
} else {
if((diff > (0))){
var G__21473 = only_a;
var G__21474 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(only_b,first_b);
var G__21475 = both;
var G__21476 = a__$1;
var G__21477 = cljs.core.next(b__$1);
only_a = G__21473;
only_b = G__21474;
both = G__21475;
a__$1 = G__21476;
b__$1 = G__21477;
continue;
} else {
return null;
}
}
}

}
}
break;
}
});

/**
 * @interface
 */
datascript.db.ISearch = function(){};

datascript.db._search = (function datascript$db$_search(data,pattern){
if(((!((data == null))) && (!((data.datascript$db$ISearch$_search$arity$2 == null))))){
return data.datascript$db$ISearch$_search$arity$2(data,pattern);
} else {
var x__4243__auto__ = (((data == null))?null:data);
var m__4244__auto__ = (datascript.db._search[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(data,pattern) : m__4244__auto__.call(null,data,pattern));
} else {
var m__4244__auto____$1 = (datascript.db._search["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(data,pattern) : m__4244__auto____$1.call(null,data,pattern));
} else {
throw cljs.core.missing_protocol("ISearch.-search",data);
}
}
}
});


/**
 * @interface
 */
datascript.db.IIndexAccess = function(){};

datascript.db._datoms = (function datascript$db$_datoms(db,index,components){
if(((!((db == null))) && (!((db.datascript$db$IIndexAccess$_datoms$arity$3 == null))))){
return db.datascript$db$IIndexAccess$_datoms$arity$3(db,index,components);
} else {
var x__4243__auto__ = (((db == null))?null:db);
var m__4244__auto__ = (datascript.db._datoms[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(db,index,components) : m__4244__auto__.call(null,db,index,components));
} else {
var m__4244__auto____$1 = (datascript.db._datoms["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(db,index,components) : m__4244__auto____$1.call(null,db,index,components));
} else {
throw cljs.core.missing_protocol("IIndexAccess.-datoms",db);
}
}
}
});

datascript.db._seek_datoms = (function datascript$db$_seek_datoms(db,index,components){
if(((!((db == null))) && (!((db.datascript$db$IIndexAccess$_seek_datoms$arity$3 == null))))){
return db.datascript$db$IIndexAccess$_seek_datoms$arity$3(db,index,components);
} else {
var x__4243__auto__ = (((db == null))?null:db);
var m__4244__auto__ = (datascript.db._seek_datoms[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(db,index,components) : m__4244__auto__.call(null,db,index,components));
} else {
var m__4244__auto____$1 = (datascript.db._seek_datoms["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(db,index,components) : m__4244__auto____$1.call(null,db,index,components));
} else {
throw cljs.core.missing_protocol("IIndexAccess.-seek-datoms",db);
}
}
}
});

datascript.db._rseek_datoms = (function datascript$db$_rseek_datoms(db,index,components){
if(((!((db == null))) && (!((db.datascript$db$IIndexAccess$_rseek_datoms$arity$3 == null))))){
return db.datascript$db$IIndexAccess$_rseek_datoms$arity$3(db,index,components);
} else {
var x__4243__auto__ = (((db == null))?null:db);
var m__4244__auto__ = (datascript.db._rseek_datoms[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(db,index,components) : m__4244__auto__.call(null,db,index,components));
} else {
var m__4244__auto____$1 = (datascript.db._rseek_datoms["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(db,index,components) : m__4244__auto____$1.call(null,db,index,components));
} else {
throw cljs.core.missing_protocol("IIndexAccess.-rseek-datoms",db);
}
}
}
});

datascript.db._index_range = (function datascript$db$_index_range(db,attr,start,end){
if(((!((db == null))) && (!((db.datascript$db$IIndexAccess$_index_range$arity$4 == null))))){
return db.datascript$db$IIndexAccess$_index_range$arity$4(db,attr,start,end);
} else {
var x__4243__auto__ = (((db == null))?null:db);
var m__4244__auto__ = (datascript.db._index_range[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$4(db,attr,start,end) : m__4244__auto__.call(null,db,attr,start,end));
} else {
var m__4244__auto____$1 = (datascript.db._index_range["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4(db,attr,start,end) : m__4244__auto____$1.call(null,db,attr,start,end));
} else {
throw cljs.core.missing_protocol("IIndexAccess.-index-range",db);
}
}
}
});


/**
 * @interface
 */
datascript.db.IDB = function(){};

datascript.db._schema = (function datascript$db$_schema(db){
if(((!((db == null))) && (!((db.datascript$db$IDB$_schema$arity$1 == null))))){
return db.datascript$db$IDB$_schema$arity$1(db);
} else {
var x__4243__auto__ = (((db == null))?null:db);
var m__4244__auto__ = (datascript.db._schema[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(db) : m__4244__auto__.call(null,db));
} else {
var m__4244__auto____$1 = (datascript.db._schema["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(db) : m__4244__auto____$1.call(null,db));
} else {
throw cljs.core.missing_protocol("IDB.-schema",db);
}
}
}
});

datascript.db._attrs_by = (function datascript$db$_attrs_by(db,property){
if(((!((db == null))) && (!((db.datascript$db$IDB$_attrs_by$arity$2 == null))))){
return db.datascript$db$IDB$_attrs_by$arity$2(db,property);
} else {
var x__4243__auto__ = (((db == null))?null:db);
var m__4244__auto__ = (datascript.db._attrs_by[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(db,property) : m__4244__auto__.call(null,db,property));
} else {
var m__4244__auto____$1 = (datascript.db._attrs_by["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(db,property) : m__4244__auto____$1.call(null,db,property));
} else {
throw cljs.core.missing_protocol("IDB.-attrs-by",db);
}
}
}
});








datascript.db.db_transient = (function datascript$db$db_transient(db){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$eavt,cljs.core.transient$),cljs.core.cst$kw$aevt,cljs.core.transient$),cljs.core.cst$kw$avet,cljs.core.transient$);
});
datascript.db.db_persistent_BANG_ = (function datascript$db$db_persistent_BANG_(db){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$eavt,cljs.core.persistent_BANG_),cljs.core.cst$kw$aevt,cljs.core.persistent_BANG_),cljs.core.cst$kw$avet,cljs.core.persistent_BANG_);
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
datascript.db.DB = (function (schema,eavt,aevt,avet,max_eid,max_tx,rschema,hash,__meta,__extmap,__hash){
this.schema = schema;
this.eavt = eavt;
this.aevt = aevt;
this.avet = avet;
this.max_eid = max_eid;
this.max_tx = max_tx;
this.rschema = rschema;
this.hash = hash;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.db.DB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.db.DB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k21480,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__21484 = k21480;
var G__21484__$1 = (((G__21484 instanceof cljs.core.Keyword))?G__21484.fqn:null);
switch (G__21484__$1) {
case "schema":
return self__.schema;

break;
case "eavt":
return self__.eavt;

break;
case "aevt":
return self__.aevt;

break;
case "avet":
return self__.avet;

break;
case "max-eid":
return self__.max_eid;

break;
case "max-tx":
return self__.max_tx;

break;
case "rschema":
return self__.rschema;

break;
case "hash":
return self__.hash;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21480,else__4206__auto__);

}
});

datascript.db.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.db.DB{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$eavt,self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$aevt,self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$avet,self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$max_DASH_eid,self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$max_DASH_tx,self__.max_tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rschema,self__.rschema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$hash,self__.hash],null))], null),self__.__extmap));
});

datascript.db.DB.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21479){
var self__ = this;
var G__21479__$1 = this;
return (new cljs.core.RecordIter((0),G__21479__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$schema,cljs.core.cst$kw$eavt,cljs.core.cst$kw$aevt,cljs.core.cst$kw$avet,cljs.core.cst$kw$max_DASH_eid,cljs.core.cst$kw$max_DASH_tx,cljs.core.cst$kw$rschema,cljs.core.cst$kw$hash], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.db.DB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.db.DB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.db.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
});

datascript.db.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__21485 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1515640948 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__21485(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.db.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21481,other21482){
var self__ = this;
var this21481__$1 = this;
return ((!((other21482 == null))) && ((this21481__$1.constructor === other21482.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21481__$1.schema,other21482.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21481__$1.eavt,other21482.eavt)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21481__$1.aevt,other21482.aevt)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21481__$1.avet,other21482.avet)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21481__$1.max_eid,other21482.max_eid)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21481__$1.max_tx,other21482.max_tx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21481__$1.rschema,other21482.rschema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21481__$1.hash,other21482.hash)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21481__$1.__extmap,other21482.__extmap)));
});

datascript.db.DB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$max_DASH_tx,null,cljs.core.cst$kw$hash,null,cljs.core.cst$kw$aevt,null,cljs.core.cst$kw$avet,null,cljs.core.cst$kw$max_DASH_eid,null,cljs.core.cst$kw$eavt,null,cljs.core.cst$kw$rschema,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.db.DB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__21479){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__21486 = cljs.core.keyword_identical_QMARK_;
var expr__21487 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__21489 = cljs.core.cst$kw$schema;
var G__21490 = expr__21487;
return (pred__21486.cljs$core$IFn$_invoke$arity$2 ? pred__21486.cljs$core$IFn$_invoke$arity$2(G__21489,G__21490) : pred__21486.call(null,G__21489,G__21490));
})())){
return (new datascript.db.DB(G__21479,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21491 = cljs.core.cst$kw$eavt;
var G__21492 = expr__21487;
return (pred__21486.cljs$core$IFn$_invoke$arity$2 ? pred__21486.cljs$core$IFn$_invoke$arity$2(G__21491,G__21492) : pred__21486.call(null,G__21491,G__21492));
})())){
return (new datascript.db.DB(self__.schema,G__21479,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21493 = cljs.core.cst$kw$aevt;
var G__21494 = expr__21487;
return (pred__21486.cljs$core$IFn$_invoke$arity$2 ? pred__21486.cljs$core$IFn$_invoke$arity$2(G__21493,G__21494) : pred__21486.call(null,G__21493,G__21494));
})())){
return (new datascript.db.DB(self__.schema,self__.eavt,G__21479,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21495 = cljs.core.cst$kw$avet;
var G__21496 = expr__21487;
return (pred__21486.cljs$core$IFn$_invoke$arity$2 ? pred__21486.cljs$core$IFn$_invoke$arity$2(G__21495,G__21496) : pred__21486.call(null,G__21495,G__21496));
})())){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,G__21479,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21497 = cljs.core.cst$kw$max_DASH_eid;
var G__21498 = expr__21487;
return (pred__21486.cljs$core$IFn$_invoke$arity$2 ? pred__21486.cljs$core$IFn$_invoke$arity$2(G__21497,G__21498) : pred__21486.call(null,G__21497,G__21498));
})())){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,G__21479,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21499 = cljs.core.cst$kw$max_DASH_tx;
var G__21500 = expr__21487;
return (pred__21486.cljs$core$IFn$_invoke$arity$2 ? pred__21486.cljs$core$IFn$_invoke$arity$2(G__21499,G__21500) : pred__21486.call(null,G__21499,G__21500));
})())){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,G__21479,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21501 = cljs.core.cst$kw$rschema;
var G__21502 = expr__21487;
return (pred__21486.cljs$core$IFn$_invoke$arity$2 ? pred__21486.cljs$core$IFn$_invoke$arity$2(G__21501,G__21502) : pred__21486.call(null,G__21501,G__21502));
})())){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,G__21479,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21503 = cljs.core.cst$kw$hash;
var G__21504 = expr__21487;
return (pred__21486.cljs$core$IFn$_invoke$arity$2 ? pred__21486.cljs$core$IFn$_invoke$arity$2(G__21503,G__21504) : pred__21486.call(null,G__21503,G__21504));
})())){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,G__21479,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__21479),null));
}
}
}
}
}
}
}
}
});

datascript.db.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$schema,self__.schema,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$eavt,self__.eavt,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$aevt,self__.aevt,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$avet,self__.avet,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$max_DASH_eid,self__.max_eid,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$max_DASH_tx,self__.max_tx,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$rschema,self__.rschema,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$hash,self__.hash,null))], null),self__.__extmap));
});

datascript.db.DB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__21479){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,G__21479,self__.__extmap,self__.__hash));
});

datascript.db.DB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.db.DB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$schema,cljs.core.cst$sym$eavt,cljs.core.cst$sym$aevt,cljs.core.cst$sym$avet,cljs.core.cst$sym$max_DASH_eid,cljs.core.cst$sym$max_DASH_tx,cljs.core.cst$sym$rschema,cljs.core.cst$sym$hash], null);
});

datascript.db.DB.cljs$lang$type = true;

datascript.db.DB.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.db/DB",null,(1),null));
});

datascript.db.DB.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.db/DB");
});

/**
 * Positional factory function for datascript.db/DB.
 */
datascript.db.__GT_DB = (function datascript$db$__GT_DB(schema,eavt,aevt,avet,max_eid,max_tx,rschema,hash){
return (new datascript.db.DB(schema,eavt,aevt,avet,max_eid,max_tx,rschema,hash,null,null,null));
});

/**
 * Factory function for datascript.db/DB, taking a map of keywords to field values.
 */
datascript.db.map__GT_DB = (function datascript$db$map__GT_DB(G__21483){
var extmap__4236__auto__ = (function (){var G__21505 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21483,cljs.core.cst$kw$schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$eavt,cljs.core.cst$kw$aevt,cljs.core.cst$kw$avet,cljs.core.cst$kw$max_DASH_eid,cljs.core.cst$kw$max_DASH_tx,cljs.core.cst$kw$rschema,cljs.core.cst$kw$hash], 0));
if(cljs.core.record_QMARK_(G__21483)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__21505);
} else {
return G__21505;
}
})();
return (new datascript.db.DB(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__21483),cljs.core.cst$kw$eavt.cljs$core$IFn$_invoke$arity$1(G__21483),cljs.core.cst$kw$aevt.cljs$core$IFn$_invoke$arity$1(G__21483),cljs.core.cst$kw$avet.cljs$core$IFn$_invoke$arity$1(G__21483),cljs.core.cst$kw$max_DASH_eid.cljs$core$IFn$_invoke$arity$1(G__21483),cljs.core.cst$kw$max_DASH_tx.cljs$core$IFn$_invoke$arity$1(G__21483),cljs.core.cst$kw$rschema.cljs$core$IFn$_invoke$arity$1(G__21483),cljs.core.cst$kw$hash.cljs$core$IFn$_invoke$arity$1(G__21483),null,cljs.core.not_empty(extmap__4236__auto__),null));
});


datascript.db.DB.prototype.clojure$data$Diff$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.clojure$data$Diff$diff_similar$arity$2 = (function (a,b){
var a__$1 = this;
return datascript.db.diff_sorted(cljs.core.cst$kw$eavt.cljs$core$IFn$_invoke$arity$1(a__$1),cljs.core.cst$kw$eavt.cljs$core$IFn$_invoke$arity$1(b),datascript.db.cmp_datoms_eavt_quick);
});

datascript.db.DB.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){
var db__$1 = this;
return (datascript.db.pr_db.cljs$core$IFn$_invoke$arity$3 ? datascript.db.pr_db.cljs$core$IFn$_invoke$arity$3(db__$1,w,opts) : datascript.db.pr_db.call(null,db__$1,w,opts));
});

datascript.db.DB.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (db){
var db__$1 = this;
return cljs.core.count(db__$1.eavt);
});

datascript.db.DB.prototype.cljs$core$IReversible$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (db){
var db__$1 = this;
return cljs.core._rseq(db__$1.eavt);
});

datascript.db.DB.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (db){
var db__$1 = this;
return (datascript.db.hash_db.cljs$core$IFn$_invoke$arity$1 ? datascript.db.hash_db.cljs$core$IFn$_invoke$arity$1(db__$1) : datascript.db.hash_db.call(null,db__$1));
});

datascript.db.DB.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (db,other){
var db__$1 = this;
return (datascript.db.equiv_db.cljs$core$IFn$_invoke$arity$2 ? datascript.db.equiv_db.cljs$core$IFn$_invoke$arity$2(db__$1,other) : datascript.db.equiv_db.call(null,db__$1,other));
});

datascript.db.DB.prototype.cljs$core$IEditableCollection$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (db){
var db__$1 = this;
return datascript.db.db_transient(db__$1);
});

datascript.db.DB.prototype.cljs$core$IEmptyableCollection$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (db){
var db__$1 = this;
return cljs.core.with_meta((function (){var G__21506 = db__$1.schema;
return (datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1(G__21506) : datascript.db.empty_db.call(null,G__21506));
})(),cljs.core.meta(db__$1));
});

datascript.db.DB.prototype.cljs$core$ITransientCollection$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (db,key){
var db__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("datascript.DB/conj! is not supported",cljs.core.PersistentArrayMap.EMPTY);
});

datascript.db.DB.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (db){
var db__$1 = this;
return datascript.db.db_persistent_BANG_(db__$1);
});

datascript.db.DB.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (db){
var db__$1 = this;
return cljs.core._seq(db__$1.eavt);
});

datascript.db.DB.prototype.clojure$data$EqualityPartition$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.clojure$data$EqualityPartition$equality_partition$arity$1 = (function (x){
var x__$1 = this;
return cljs.core.cst$kw$datascript_SLASH_db;
});

datascript.db.DB.prototype.datascript$db$IIndexAccess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.datascript$db$IIndexAccess$_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db__$1,index),(datascript.db.components__GT_pattern.cljs$core$IFn$_invoke$arity$5 ? datascript.db.components__GT_pattern.cljs$core$IFn$_invoke$arity$5(db__$1,index,cs,(0),(536870912)) : datascript.db.components__GT_pattern.call(null,db__$1,index,cs,(0),(536870912))),(datascript.db.components__GT_pattern.cljs$core$IFn$_invoke$arity$5 ? datascript.db.components__GT_pattern.cljs$core$IFn$_invoke$arity$5(db__$1,index,cs,(2147483647),(2147483647)) : datascript.db.components__GT_pattern.call(null,db__$1,index,cs,(2147483647),(2147483647))));
});

datascript.db.DB.prototype.datascript$db$IIndexAccess$_seek_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db__$1,index),(datascript.db.components__GT_pattern.cljs$core$IFn$_invoke$arity$5 ? datascript.db.components__GT_pattern.cljs$core$IFn$_invoke$arity$5(db__$1,index,cs,(0),(536870912)) : datascript.db.components__GT_pattern.call(null,db__$1,index,cs,(0),(536870912))),datascript.db.datom.cljs$core$IFn$_invoke$arity$4((2147483647),null,null,(2147483647)));
});

datascript.db.DB.prototype.datascript$db$IIndexAccess$_rseek_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return me.tonsky.persistent_sorted_set.rslice.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db__$1,index),(datascript.db.components__GT_pattern.cljs$core$IFn$_invoke$arity$5 ? datascript.db.components__GT_pattern.cljs$core$IFn$_invoke$arity$5(db__$1,index,cs,(2147483647),(2147483647)) : datascript.db.components__GT_pattern.call(null,db__$1,index,cs,(2147483647),(2147483647))),datascript.db.datom.cljs$core$IFn$_invoke$arity$4((0),null,null,(536870912)));
});

datascript.db.DB.prototype.datascript$db$IIndexAccess$_index_range$arity$4 = (function (db,attr,start,end){
var db__$1 = this;
if(cljs.core.truth_((datascript.db.indexing_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.db.indexing_QMARK_.cljs$core$IFn$_invoke$arity$2(db__$1,attr) : datascript.db.indexing_QMARK_.call(null,db__$1,attr)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Attribute ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr], 0)))," should be marked as :db/index true"].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

var G__21507_21514 = attr;
var G__21508_21515 = (new cljs.core.List(null,cljs.core.cst$sym$_DASH_index_DASH_range,(new cljs.core.List(null,cljs.core.cst$sym$db,(new cljs.core.List(null,attr,(new cljs.core.List(null,start,(new cljs.core.List(null,end,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null));
(datascript.db.validate_attr.cljs$core$IFn$_invoke$arity$2 ? datascript.db.validate_attr.cljs$core$IFn$_invoke$arity$2(G__21507_21514,G__21508_21515) : datascript.db.validate_attr.call(null,G__21507_21514,G__21508_21515));

return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(db__$1.avet,(datascript.db.resolve_datom.cljs$core$IFn$_invoke$arity$7 ? datascript.db.resolve_datom.cljs$core$IFn$_invoke$arity$7(db__$1,null,attr,start,null,(0),(536870912)) : datascript.db.resolve_datom.call(null,db__$1,null,attr,start,null,(0),(536870912))),(datascript.db.resolve_datom.cljs$core$IFn$_invoke$arity$7 ? datascript.db.resolve_datom.cljs$core$IFn$_invoke$arity$7(db__$1,null,attr,end,null,(2147483647),(2147483647)) : datascript.db.resolve_datom.call(null,db__$1,null,attr,end,null,(2147483647),(2147483647))));
});

datascript.db.DB.prototype.datascript$db$IDB$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.datascript$db$IDB$_schema$arity$1 = (function (db){
var db__$1 = this;
return db__$1.schema;
});

datascript.db.DB.prototype.datascript$db$IDB$_attrs_by$arity$2 = (function (db,property){
var db__$1 = this;
var fexpr__21509 = db__$1.rschema;
return (fexpr__21509.cljs$core$IFn$_invoke$arity$1 ? fexpr__21509.cljs$core$IFn$_invoke$arity$1(property) : fexpr__21509.call(null,property));
});

datascript.db.DB.prototype.datascript$db$ISearch$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.datascript$db$ISearch$_search$arity$2 = (function (db,pattern){
var db__$1 = this;
var vec__21510 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21510,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21510,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21510,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21510,(3),null);
var eavt = db__$1.eavt;
var aevt = db__$1.aevt;
var avet = db__$1.avet;
if(cljs.core.truth_(e)){
if(cljs.core.truth_(a)){
if(!((v == null))){
if(cljs.core.truth_(tx)){
return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,a,v,tx),datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,a,v,tx));
} else {
return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,a,v,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,a,v,(2147483647)));
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__21510,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.datascript$db$IDatom$datom_tx$arity$1(null));
});})(vec__21510,e,a,v,tx,eavt,aevt,avet,db__$1))
,me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,a,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,a,null,(2147483647))));
} else {
return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,a,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,a,null,(2147483647)));
}
}
} else {
if(!((v == null))){
if(cljs.core.truth_(tx)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__21510,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,d.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.datascript$db$IDatom$datom_tx$arity$1(null))));
});})(vec__21510,e,a,v,tx,eavt,aevt,avet,db__$1))
,me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,null,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,null,null,(2147483647))));
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__21510,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,d.v);
});})(vec__21510,e,a,v,tx,eavt,aevt,avet,db__$1))
,me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,null,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,null,null,(2147483647))));
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__21510,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.datascript$db$IDatom$datom_tx$arity$1(null));
});})(vec__21510,e,a,v,tx,eavt,aevt,avet,db__$1))
,me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,null,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,null,null,(2147483647))));
} else {
return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,null,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,null,null,(2147483647)));
}
}
}
} else {
if(cljs.core.truth_(a)){
if(!((v == null))){
if(cljs.core.truth_(tx)){
if(cljs.core.truth_((datascript.db.indexing_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.db.indexing_QMARK_.cljs$core$IFn$_invoke$arity$2(db__$1,a) : datascript.db.indexing_QMARK_.call(null,db__$1,a)))){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__21510,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.datascript$db$IDatom$datom_tx$arity$1(null));
});})(vec__21510,e,a,v,tx,eavt,aevt,avet,db__$1))
,me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(avet,datascript.db.datom.cljs$core$IFn$_invoke$arity$4((0),a,v,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4((2147483647),a,v,(2147483647))));
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__21510,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,d.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.datascript$db$IDatom$datom_tx$arity$1(null))));
});})(vec__21510,e,a,v,tx,eavt,aevt,avet,db__$1))
,me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(aevt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4((0),a,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4((2147483647),a,null,(2147483647))));
}
} else {
if(cljs.core.truth_((datascript.db.indexing_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.db.indexing_QMARK_.cljs$core$IFn$_invoke$arity$2(db__$1,a) : datascript.db.indexing_QMARK_.call(null,db__$1,a)))){
return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(avet,datascript.db.datom.cljs$core$IFn$_invoke$arity$4((0),a,v,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4((2147483647),a,v,(2147483647)));
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__21510,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,d.v);
});})(vec__21510,e,a,v,tx,eavt,aevt,avet,db__$1))
,me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(aevt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4((0),a,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4((2147483647),a,null,(2147483647))));
}
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__21510,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.datascript$db$IDatom$datom_tx$arity$1(null));
});})(vec__21510,e,a,v,tx,eavt,aevt,avet,db__$1))
,me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(aevt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4((0),a,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4((2147483647),a,null,(2147483647))));
} else {
return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(aevt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4((0),a,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4((2147483647),a,null,(2147483647)));
}
}
} else {
if(!((v == null))){
if(cljs.core.truth_(tx)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__21510,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,d.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.datascript$db$IDatom$datom_tx$arity$1(null))));
});})(vec__21510,e,a,v,tx,eavt,aevt,avet,db__$1))
,eavt);
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__21510,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,d.v);
});})(vec__21510,e,a,v,tx,eavt,aevt,avet,db__$1))
,eavt);
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__21510,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx,d.datascript$db$IDatom$datom_tx$arity$1(null));
});})(vec__21510,e,a,v,tx,eavt,aevt,avet,db__$1))
,eavt);
} else {
return eavt;
}
}
}
}
});
datascript.db.db_QMARK_ = (function datascript$db$db_QMARK_(x){
var and__3938__auto__ = ((!((x == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.datascript$db$ISearch$))))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,x):false)):cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,x));
if(and__3938__auto__){
var and__3938__auto____$1 = ((!((x == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.datascript$db$IIndexAccess$))))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IIndexAccess,x):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IIndexAccess,x));
if(and__3938__auto____$1){
if(!((x == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.datascript$db$IDB$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(datascript.db.IDB,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(datascript.db.IDB,x);
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
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
datascript.db.FilteredDB = (function (unfiltered_db,pred,hash,__meta,__extmap,__hash){
this.unfiltered_db = unfiltered_db;
this.pred = pred;
this.hash = hash;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k21525,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__21529 = k21525;
var G__21529__$1 = (((G__21529 instanceof cljs.core.Keyword))?G__21529.fqn:null);
switch (G__21529__$1) {
case "unfiltered-db":
return self__.unfiltered_db;

break;
case "pred":
return self__.pred;

break;
case "hash":
return self__.hash;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21525,else__4206__auto__);

}
});

datascript.db.FilteredDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.db.FilteredDB{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$unfiltered_DASH_db,self__.unfiltered_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pred,self__.pred],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$hash,self__.hash],null))], null),self__.__extmap));
});

datascript.db.FilteredDB.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21524){
var self__ = this;
var G__21524__$1 = this;
return (new cljs.core.RecordIter((0),G__21524__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unfiltered_DASH_db,cljs.core.cst$kw$pred,cljs.core.cst$kw$hash], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.db.FilteredDB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.db.FilteredDB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.hash,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.db.FilteredDB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

datascript.db.FilteredDB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__21530 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-351969977 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__21530(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.db.FilteredDB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21526,other21527){
var self__ = this;
var this21526__$1 = this;
return ((!((other21527 == null))) && ((this21526__$1.constructor === other21527.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21526__$1.unfiltered_db,other21527.unfiltered_db)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21526__$1.pred,other21527.pred)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21526__$1.hash,other21527.hash)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21526__$1.__extmap,other21527.__extmap)));
});

datascript.db.FilteredDB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$hash,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$unfiltered_DASH_db,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.hash,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.db.FilteredDB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__21524){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__21531 = cljs.core.keyword_identical_QMARK_;
var expr__21532 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__21534 = cljs.core.cst$kw$unfiltered_DASH_db;
var G__21535 = expr__21532;
return (pred__21531.cljs$core$IFn$_invoke$arity$2 ? pred__21531.cljs$core$IFn$_invoke$arity$2(G__21534,G__21535) : pred__21531.call(null,G__21534,G__21535));
})())){
return (new datascript.db.FilteredDB(G__21524,self__.pred,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21536 = cljs.core.cst$kw$pred;
var G__21537 = expr__21532;
return (pred__21531.cljs$core$IFn$_invoke$arity$2 ? pred__21531.cljs$core$IFn$_invoke$arity$2(G__21536,G__21537) : pred__21531.call(null,G__21536,G__21537));
})())){
return (new datascript.db.FilteredDB(self__.unfiltered_db,G__21524,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21538 = cljs.core.cst$kw$hash;
var G__21539 = expr__21532;
return (pred__21531.cljs$core$IFn$_invoke$arity$2 ? pred__21531.cljs$core$IFn$_invoke$arity$2(G__21538,G__21539) : pred__21531.call(null,G__21538,G__21539));
})())){
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,G__21524,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.hash,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__21524),null));
}
}
}
});

datascript.db.FilteredDB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$unfiltered_DASH_db,self__.unfiltered_db,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$pred,self__.pred,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$hash,self__.hash,null))], null),self__.__extmap));
});

datascript.db.FilteredDB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__21524){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.hash,G__21524,self__.__extmap,self__.__hash));
});

datascript.db.FilteredDB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.db.FilteredDB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$unfiltered_DASH_db,cljs.core.cst$sym$pred,cljs.core.cst$sym$hash], null);
});

datascript.db.FilteredDB.cljs$lang$type = true;

datascript.db.FilteredDB.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.db/FilteredDB",null,(1),null));
});

datascript.db.FilteredDB.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.db/FilteredDB");
});

/**
 * Positional factory function for datascript.db/FilteredDB.
 */
datascript.db.__GT_FilteredDB = (function datascript$db$__GT_FilteredDB(unfiltered_db,pred,hash){
return (new datascript.db.FilteredDB(unfiltered_db,pred,hash,null,null,null));
});

/**
 * Factory function for datascript.db/FilteredDB, taking a map of keywords to field values.
 */
datascript.db.map__GT_FilteredDB = (function datascript$db$map__GT_FilteredDB(G__21528){
var extmap__4236__auto__ = (function (){var G__21540 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21528,cljs.core.cst$kw$unfiltered_DASH_db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$pred,cljs.core.cst$kw$hash], 0));
if(cljs.core.record_QMARK_(G__21528)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__21540);
} else {
return G__21540;
}
})();
return (new datascript.db.FilteredDB(cljs.core.cst$kw$unfiltered_DASH_db.cljs$core$IFn$_invoke$arity$1(G__21528),cljs.core.cst$kw$pred.cljs$core$IFn$_invoke$arity$1(G__21528),cljs.core.cst$kw$hash.cljs$core$IFn$_invoke$arity$1(G__21528),null,cljs.core.not_empty(extmap__4236__auto__),null));
});


datascript.db.FilteredDB.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,___$1){
var ___$2 = this;
throw (new Error("-lookup is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,___$1,___$2){
var ___$3 = this;
throw (new Error("-lookup is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){
var db__$1 = this;
return (datascript.db.pr_db.cljs$core$IFn$_invoke$arity$3 ? datascript.db.pr_db.cljs$core$IFn$_invoke$arity$3(db__$1,w,opts) : datascript.db.pr_db.call(null,db__$1,w,opts));
});

datascript.db.FilteredDB.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$ICounted$_count$arity$1 = (function (db){
var db__$1 = this;
return cljs.core.count(datascript.db._datoms(db__$1,cljs.core.cst$kw$eavt,cljs.core.PersistentVector.EMPTY));
});

datascript.db.FilteredDB.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$IHash$_hash$arity$1 = (function (db){
var db__$1 = this;
return (datascript.db.hash_fdb.cljs$core$IFn$_invoke$arity$1 ? datascript.db.hash_fdb.cljs$core$IFn$_invoke$arity$1(db__$1) : datascript.db.hash_fdb.call(null,db__$1));
});

datascript.db.FilteredDB.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (db,other){
var db__$1 = this;
return (datascript.db.equiv_db.cljs$core$IFn$_invoke$arity$2 ? datascript.db.equiv_db.cljs$core$IFn$_invoke$arity$2(db__$1,other) : datascript.db.equiv_db.call(null,db__$1,other));
});

datascript.db.FilteredDB.prototype.cljs$core$IEmptyableCollection$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var ___$1 = this;
throw (new Error("-empty is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$IAssociative$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,___$1){
var ___$2 = this;
throw (new Error("-contains-key? is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,___$1,___$2){
var ___$3 = this;
throw (new Error("-assoc is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (db){
var db__$1 = this;
return cljs.core.seq(datascript.db._datoms(db__$1,cljs.core.cst$kw$eavt,cljs.core.PersistentVector.EMPTY));
});

datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(db__$1.pred,datascript.db._datoms(db__$1.unfiltered_db,index,cs));
});

datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$_seek_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(db__$1.pred,datascript.db._seek_datoms(db__$1.unfiltered_db,index,cs));
});

datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$_rseek_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(db__$1.pred,datascript.db._rseek_datoms(db__$1.unfiltered_db,index,cs));
});

datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$_index_range$arity$4 = (function (db,attr,start,end){
var db__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(db__$1.pred,datascript.db._index_range(db__$1.unfiltered_db,attr,start,end));
});

datascript.db.FilteredDB.prototype.datascript$db$IDB$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.datascript$db$IDB$_schema$arity$1 = (function (db){
var db__$1 = this;
return datascript.db._schema(db__$1.unfiltered_db);
});

datascript.db.FilteredDB.prototype.datascript$db$IDB$_attrs_by$arity$2 = (function (db,property){
var db__$1 = this;
return datascript.db._attrs_by(db__$1.unfiltered_db,property);
});

datascript.db.FilteredDB.prototype.datascript$db$ISearch$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.datascript$db$ISearch$_search$arity$2 = (function (db,pattern){
var db__$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(db__$1.pred,datascript.db._search(db__$1.unfiltered_db,pattern));
});
datascript.db.attr__GT_properties = (function datascript$db$attr__GT_properties(k,v){
var G__21542 = v;
var G__21542__$1 = (((G__21542 instanceof cljs.core.Keyword))?G__21542.fqn:null);
switch (G__21542__$1) {
case "db.unique/identity":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_unique,cljs.core.cst$kw$db$unique_SLASH_identity,cljs.core.cst$kw$db_SLASH_index], null);

break;
case "db.unique/value":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_unique,cljs.core.cst$kw$db$unique_SLASH_value,cljs.core.cst$kw$db_SLASH_index], null);

break;
case "db.cardinality/many":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db$cardinality_SLASH_many], null);

break;
case "db.type/ref":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db$type_SLASH_ref,cljs.core.cst$kw$db_SLASH_index], null);

break;
default:
if(v === true){
var G__21543 = k;
var G__21543__$1 = (((G__21543 instanceof cljs.core.Keyword))?G__21543.fqn:null);
switch (G__21543__$1) {
case "db/isComponent":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_isComponent], null);

break;
case "db/index":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_index], null);

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
} else {
return null;
}

}
});
datascript.db.rschema = (function datascript$db$rschema(schema){
return cljs.core.reduce_kv((function (m,attr,keys__GT_values){
return cljs.core.reduce_kv((function (m__$1,key,value){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$2,prop){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$2,prop,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$2,prop,cljs.core.PersistentHashSet.EMPTY),attr));
}),m__$1,datascript.db.attr__GT_properties(key,value));
}),m,keys__GT_values);
}),cljs.core.PersistentArrayMap.EMPTY,schema);
});
datascript.db.validate_schema_key = (function datascript$db$validate_schema_key(a,k,v,expected){
if((((v == null)) || (cljs.core.contains_QMARK_(expected,v)))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad attribute specification for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([a,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v])])], 0))),", expected one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected)].join(''),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$error,cljs.core.cst$kw$schema_SLASH_validation,cljs.core.cst$kw$attribute,a,cljs.core.cst$kw$key,k,cljs.core.cst$kw$value,v], null));
}
});
datascript.db.validate_schema = (function datascript$db$validate_schema(schema){
var seq__21546 = cljs.core.seq(schema);
var chunk__21547 = null;
var count__21548 = (0);
var i__21549 = (0);
while(true){
if((i__21549 < count__21548)){
var vec__21550 = chunk__21547.cljs$core$IIndexed$_nth$arity$2(null,i__21549);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21550,(0),null);
var kv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21550,(1),null);
var comp_QMARK__21556 = cljs.core.cst$kw$db_SLASH_isComponent.cljs$core$IFn$_invoke$arity$2(kv,false);
datascript.db.validate_schema_key(a,cljs.core.cst$kw$db_SLASH_isComponent,cljs.core.cst$kw$db_SLASH_isComponent.cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [true,null,false,null], null), null));

if(cljs.core.truth_((function (){var and__3938__auto__ = comp_QMARK__21556;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db_SLASH_valueType.cljs$core$IFn$_invoke$arity$1(kv),cljs.core.cst$kw$db$type_SLASH_ref);
} else {
return and__3938__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad attribute specification for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),": {:db/isComponent true} should also have {:db/valueType :db.type/ref}"].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$schema_SLASH_validation,cljs.core.cst$kw$attribute,a,cljs.core.cst$kw$key,cljs.core.cst$kw$db_SLASH_isComponent], null));
} else {
}

datascript.db.validate_schema_key(a,cljs.core.cst$kw$db_SLASH_unique,cljs.core.cst$kw$db_SLASH_unique.cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db$unique_SLASH_identity,null,cljs.core.cst$kw$db$unique_SLASH_value,null], null), null));

datascript.db.validate_schema_key(a,cljs.core.cst$kw$db_SLASH_valueType,cljs.core.cst$kw$db_SLASH_valueType.cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db$type_SLASH_ref,null], null), null));

datascript.db.validate_schema_key(a,cljs.core.cst$kw$db_SLASH_cardinality,cljs.core.cst$kw$db_SLASH_cardinality.cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db$cardinality_SLASH_many,null,cljs.core.cst$kw$db$cardinality_SLASH_one,null], null), null));


var G__21557 = seq__21546;
var G__21558 = chunk__21547;
var G__21559 = count__21548;
var G__21560 = (i__21549 + (1));
seq__21546 = G__21557;
chunk__21547 = G__21558;
count__21548 = G__21559;
i__21549 = G__21560;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__21546);
if(temp__5720__auto__){
var seq__21546__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21546__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__21546__$1);
var G__21561 = cljs.core.chunk_rest(seq__21546__$1);
var G__21562 = c__4351__auto__;
var G__21563 = cljs.core.count(c__4351__auto__);
var G__21564 = (0);
seq__21546 = G__21561;
chunk__21547 = G__21562;
count__21548 = G__21563;
i__21549 = G__21564;
continue;
} else {
var vec__21553 = cljs.core.first(seq__21546__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21553,(0),null);
var kv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21553,(1),null);
var comp_QMARK__21565 = cljs.core.cst$kw$db_SLASH_isComponent.cljs$core$IFn$_invoke$arity$2(kv,false);
datascript.db.validate_schema_key(a,cljs.core.cst$kw$db_SLASH_isComponent,cljs.core.cst$kw$db_SLASH_isComponent.cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [true,null,false,null], null), null));

if(cljs.core.truth_((function (){var and__3938__auto__ = comp_QMARK__21565;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$db_SLASH_valueType.cljs$core$IFn$_invoke$arity$1(kv),cljs.core.cst$kw$db$type_SLASH_ref);
} else {
return and__3938__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad attribute specification for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),": {:db/isComponent true} should also have {:db/valueType :db.type/ref}"].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$schema_SLASH_validation,cljs.core.cst$kw$attribute,a,cljs.core.cst$kw$key,cljs.core.cst$kw$db_SLASH_isComponent], null));
} else {
}

datascript.db.validate_schema_key(a,cljs.core.cst$kw$db_SLASH_unique,cljs.core.cst$kw$db_SLASH_unique.cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db$unique_SLASH_identity,null,cljs.core.cst$kw$db$unique_SLASH_value,null], null), null));

datascript.db.validate_schema_key(a,cljs.core.cst$kw$db_SLASH_valueType,cljs.core.cst$kw$db_SLASH_valueType.cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db$type_SLASH_ref,null], null), null));

datascript.db.validate_schema_key(a,cljs.core.cst$kw$db_SLASH_cardinality,cljs.core.cst$kw$db_SLASH_cardinality.cljs$core$IFn$_invoke$arity$1(kv),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db$cardinality_SLASH_many,null,cljs.core.cst$kw$db$cardinality_SLASH_one,null], null), null));


var G__21566 = cljs.core.next(seq__21546__$1);
var G__21567 = null;
var G__21568 = (0);
var G__21569 = (0);
seq__21546 = G__21566;
chunk__21547 = G__21567;
count__21548 = G__21568;
i__21549 = G__21569;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.db.empty_db = (function datascript$db$empty_db(var_args){
var G__21571 = arguments.length;
switch (G__21571) {
case 0:
return datascript.db.empty_db.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.db.empty_db.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1(null);
});

datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1 = (function (schema){
if((((schema == null)) || (cljs.core.map_QMARK_(schema)))){
} else {
throw (new Error("Assert failed: (or (nil? schema) (map? schema))"));
}

datascript.db.validate_schema(schema);

return datascript.db.map__GT_DB(new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$schema,schema,cljs.core.cst$kw$rschema,datascript.db.rschema(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_ident,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_unique,cljs.core.cst$kw$db$unique_SLASH_identity], null)], null),schema], 0))),cljs.core.cst$kw$eavt,me.tonsky.persistent_sorted_set.sorted_set_by.cljs$core$IFn$_invoke$arity$1(datascript.db.cmp_datoms_eavt),cljs.core.cst$kw$aevt,me.tonsky.persistent_sorted_set.sorted_set_by.cljs$core$IFn$_invoke$arity$1(datascript.db.cmp_datoms_aevt),cljs.core.cst$kw$avet,me.tonsky.persistent_sorted_set.sorted_set_by.cljs$core$IFn$_invoke$arity$1(datascript.db.cmp_datoms_avet),cljs.core.cst$kw$max_DASH_eid,(0),cljs.core.cst$kw$max_DASH_tx,(536870912),cljs.core.cst$kw$hash,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null));
});

datascript.db.empty_db.cljs$lang$maxFixedArity = 1;

datascript.db.init_max_eid = (function datascript$db$init_max_eid(eavt){
var or__3949__auto__ = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(cljs.core.first(me.tonsky.persistent_sorted_set.rslice.cljs$core$IFn$_invoke$arity$3(eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(((536870912) - (1)),null,null,(2147483647)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4((0),null,null,(536870912)))));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
});
datascript.db.init_db = (function datascript$db$init_db(var_args){
var G__21574 = arguments.length;
switch (G__21574) {
case 1:
return datascript.db.init_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.db.init_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.db.init_db.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datascript.db.init_db.cljs$core$IFn$_invoke$arity$2(datoms,null);
});

datascript.db.init_db.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
datascript.db.validate_schema(schema);

var rschema = datascript.db.rschema(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_ident,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db_SLASH_unique,cljs.core.cst$kw$db$unique_SLASH_identity], null)], null),schema], 0)));
var indexed = cljs.core.cst$kw$db_SLASH_index.cljs$core$IFn$_invoke$arity$1(rschema);
var arr = (function (){var G__21575 = datoms;
if(!(me.tonsky.persistent_sorted_set.arrays.array_QMARK_(datoms))){
return me.tonsky.persistent_sorted_set.arrays.into_array(G__21575);
} else {
return G__21575;
}
})();
var _ = me.tonsky.persistent_sorted_set.arrays.asort(arr,datascript.db.cmp_datoms_eavt_quick);
var eavt = me.tonsky.persistent_sorted_set.from_sorted_array(datascript.db.cmp_datoms_eavt,arr);
var ___$1 = me.tonsky.persistent_sorted_set.arrays.asort(arr,datascript.db.cmp_datoms_aevt_quick);
var aevt = me.tonsky.persistent_sorted_set.from_sorted_array(datascript.db.cmp_datoms_aevt,arr);
var avet_datoms = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (rschema,indexed,arr,_,eavt,___$1,aevt){
return (function (d){
return cljs.core.contains_QMARK_(indexed,d.a);
});})(rschema,indexed,arr,_,eavt,___$1,aevt))
,datoms);
var avet_arr = cljs.core.to_array(avet_datoms);
var ___$2 = me.tonsky.persistent_sorted_set.arrays.asort(avet_arr,datascript.db.cmp_datoms_avet_quick);
var avet = me.tonsky.persistent_sorted_set.from_sorted_array(datascript.db.cmp_datoms_avet,avet_arr);
var max_eid = datascript.db.init_max_eid(eavt);
var max_tx = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (rschema,indexed,arr,_,eavt,___$1,aevt,avet_datoms,avet_arr,___$2,avet,max_eid){
return (function (d){
return d.datascript$db$IDatom$datom_tx$arity$1(null);
});})(rschema,indexed,arr,_,eavt,___$1,aevt,avet_datoms,avet_arr,___$2,avet,max_eid))
),cljs.core.max,(536870912),eavt);
return datascript.db.map__GT_DB(new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$schema,schema,cljs.core.cst$kw$rschema,rschema,cljs.core.cst$kw$eavt,eavt,cljs.core.cst$kw$aevt,aevt,cljs.core.cst$kw$avet,avet,cljs.core.cst$kw$max_DASH_eid,max_eid,cljs.core.cst$kw$max_DASH_tx,max_tx,cljs.core.cst$kw$hash,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0))], null));
});

datascript.db.init_db.cljs$lang$maxFixedArity = 2;

datascript.db.equiv_db_index = (function datascript$db$equiv_db_index(x,y){
var xs = cljs.core.seq(x);
var ys = cljs.core.seq(y);
while(true){
if((xs == null)){
return (ys == null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs),cljs.core.first(ys))){
var G__21577 = cljs.core.next(xs);
var G__21578 = cljs.core.next(ys);
xs = G__21577;
ys = G__21578;
continue;
} else {
return false;

}
}
break;
}
});
datascript.db.hash_db = (function datascript$db$hash_db(db){
var h = cljs.core.deref(db.hash);
if((h === (0))){
return cljs.core.reset_BANG_(db.hash,datascript.db.combine_hashes(cljs.core.hash(db.schema),cljs.core.hash(db.eavt)));
} else {
return h;
}
});
datascript.db.hash_fdb = (function datascript$db$hash_fdb(db){
var h = cljs.core.deref(db.hash);
var datoms = (function (){var or__3949__auto__ = datascript.db._datoms(db,cljs.core.cst$kw$eavt,cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if((h === (0))){
var datoms__$1 = (function (){var or__3949__auto__ = datascript.db._datoms(db,cljs.core.cst$kw$eavt,cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
return cljs.core.reset_BANG_(db.hash,datascript.db.combine_hashes(cljs.core.hash(datascript.db._schema(db)),cljs.core.hash_unordered_coll(datoms__$1)));
} else {
return h;
}
});
datascript.db.equiv_db = (function datascript$db$equiv_db(db,other){
var and__3938__auto__ = (((other instanceof datascript.db.DB)) || ((other instanceof datascript.db.FilteredDB)));
if(and__3938__auto__){
var and__3938__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(datascript.db._schema(db),datascript.db._schema(other));
if(and__3938__auto____$1){
return datascript.db.equiv_db_index(datascript.db._datoms(db,cljs.core.cst$kw$eavt,cljs.core.PersistentVector.EMPTY),datascript.db._datoms(other,cljs.core.cst$kw$eavt,cljs.core.PersistentVector.EMPTY));
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
});
datascript.db.pr_db = (function datascript$db$pr_db(db,w,opts){
cljs.core._write(w,"#datascript/DB {");

cljs.core._write(w,":schema ");

cljs.core.pr_writer(datascript.db._schema(db),w,opts);

cljs.core._write(w,", :datoms ");

cljs.core.pr_sequential_writer(w,(function (d,w__$1,opts__$1){
return cljs.core.pr_sequential_writer(w__$1,cljs.core.pr_writer,"["," ","]",opts__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.e,d.a,d.v,datascript.db.datom_tx(d)], null));
}),"["," ","]",opts,datascript.db._datoms(db,cljs.core.cst$kw$eavt,cljs.core.PersistentVector.EMPTY));

return cljs.core._write(w,"}");
});
datascript.db.db_from_reader = (function datascript$db$db_from_reader(p__21579){
var map__21580 = p__21579;
var map__21580__$1 = ((((!((map__21580 == null)))?(((((map__21580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21580):map__21580);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21580__$1,cljs.core.cst$kw$schema);
var datoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21580__$1,cljs.core.cst$kw$datoms);
return datascript.db.init_db.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__21580,map__21580__$1,schema,datoms){
return (function (p__21582){
var vec__21583 = p__21582;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21583,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21583,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21583,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21583,(3),null);
return datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e,a,v,tx);
});})(map__21580,map__21580__$1,schema,datoms))
,datoms),schema);
});


datascript.db.resolve_datom = (function datascript$db$resolve_datom(db,e,a,v,t,default_e,default_tx){
if(cljs.core.truth_(a)){
var G__21586_21588 = a;
var G__21587_21589 = (new cljs.core.List(null,cljs.core.cst$sym$resolve_DASH_datom,(new cljs.core.List(null,cljs.core.cst$sym$db,(new cljs.core.List(null,e,(new cljs.core.List(null,a,(new cljs.core.List(null,v,(new cljs.core.List(null,t,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null));
(datascript.db.validate_attr.cljs$core$IFn$_invoke$arity$2 ? datascript.db.validate_attr.cljs$core$IFn$_invoke$arity$2(G__21586_21588,G__21587_21589) : datascript.db.validate_attr.call(null,G__21586_21588,G__21587_21589));
} else {
}

return datascript.db.datom.cljs$core$IFn$_invoke$arity$4((function (){var or__3949__auto__ = (datascript.db.entid_some.cljs$core$IFn$_invoke$arity$2 ? datascript.db.entid_some.cljs$core$IFn$_invoke$arity$2(db,e) : datascript.db.entid_some.call(null,db,e));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return default_e;
}
})(),a,(cljs.core.truth_((function (){var and__3938__auto__ = !((v == null));
if(and__3938__auto__){
return (datascript.db.ref_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.db.ref_QMARK_.cljs$core$IFn$_invoke$arity$2(db,a) : datascript.db.ref_QMARK_.call(null,db,a));
} else {
return and__3938__auto__;
}
})())?(datascript.db.entid_strict.cljs$core$IFn$_invoke$arity$2 ? datascript.db.entid_strict.cljs$core$IFn$_invoke$arity$2(db,v) : datascript.db.entid_strict.call(null,db,v)):v),(function (){var or__3949__auto__ = (datascript.db.entid_some.cljs$core$IFn$_invoke$arity$2 ? datascript.db.entid_some.cljs$core$IFn$_invoke$arity$2(db,t) : datascript.db.entid_some.call(null,db,t));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return default_tx;
}
})());
});
datascript.db.components__GT_pattern = (function datascript$db$components__GT_pattern(db,index,p__21590,default_e,default_tx){
var vec__21591 = p__21590;
var c0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21591,(0),null);
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21591,(1),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21591,(2),null);
var c3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21591,(3),null);
var G__21594 = index;
var G__21594__$1 = (((G__21594 instanceof cljs.core.Keyword))?G__21594.fqn:null);
switch (G__21594__$1) {
case "eavt":
return datascript.db.resolve_datom(db,c0,c1,c2,c3,default_e,default_tx);

break;
case "aevt":
return datascript.db.resolve_datom(db,c1,c0,c2,c3,default_e,default_tx);

break;
case "avet":
return datascript.db.resolve_datom(db,c2,c0,c1,c3,default_e,default_tx);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21594__$1)].join('')));

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
datascript.db.TxReport = (function (db_before,db_after,tx_data,tempids,tx_meta,__meta,__extmap,__hash){
this.db_before = db_before;
this.db_after = db_after;
this.tx_data = tx_data;
this.tempids = tempids;
this.tx_meta = tx_meta;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.db.TxReport.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

datascript.db.TxReport.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k21597,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__21601 = k21597;
var G__21601__$1 = (((G__21601 instanceof cljs.core.Keyword))?G__21601.fqn:null);
switch (G__21601__$1) {
case "db-before":
return self__.db_before;

break;
case "db-after":
return self__.db_after;

break;
case "tx-data":
return self__.tx_data;

break;
case "tempids":
return self__.tempids;

break;
case "tx-meta":
return self__.tx_meta;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21597,else__4206__auto__);

}
});

datascript.db.TxReport.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#datascript.db.TxReport{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$db_DASH_before,self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$db_DASH_after,self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tx_DASH_data,self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tempids,self__.tempids],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tx_DASH_meta,self__.tx_meta],null))], null),self__.__extmap));
});

datascript.db.TxReport.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21596){
var self__ = this;
var G__21596__$1 = this;
return (new cljs.core.RecordIter((0),G__21596__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_DASH_before,cljs.core.cst$kw$db_DASH_after,cljs.core.cst$kw$tx_DASH_data,cljs.core.cst$kw$tempids,cljs.core.cst$kw$tx_DASH_meta], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.db.TxReport.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

datascript.db.TxReport.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.db.TxReport.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

datascript.db.TxReport.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__21602 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-2022644885 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__21602(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

datascript.db.TxReport.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21598,other21599){
var self__ = this;
var this21598__$1 = this;
return ((!((other21599 == null))) && ((this21598__$1.constructor === other21599.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21598__$1.db_before,other21599.db_before)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21598__$1.db_after,other21599.db_after)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21598__$1.tx_data,other21599.tx_data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21598__$1.tempids,other21599.tempids)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21598__$1.tx_meta,other21599.tx_meta)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this21598__$1.__extmap,other21599.__extmap)));
});

datascript.db.TxReport.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$tempids,null,cljs.core.cst$kw$db_DASH_after,null,cljs.core.cst$kw$db_DASH_before,null,cljs.core.cst$kw$tx_DASH_data,null,cljs.core.cst$kw$tx_DASH_meta,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

datascript.db.TxReport.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__21596){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__21603 = cljs.core.keyword_identical_QMARK_;
var expr__21604 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__21606 = cljs.core.cst$kw$db_DASH_before;
var G__21607 = expr__21604;
return (pred__21603.cljs$core$IFn$_invoke$arity$2 ? pred__21603.cljs$core$IFn$_invoke$arity$2(G__21606,G__21607) : pred__21603.call(null,G__21606,G__21607));
})())){
return (new datascript.db.TxReport(G__21596,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21608 = cljs.core.cst$kw$db_DASH_after;
var G__21609 = expr__21604;
return (pred__21603.cljs$core$IFn$_invoke$arity$2 ? pred__21603.cljs$core$IFn$_invoke$arity$2(G__21608,G__21609) : pred__21603.call(null,G__21608,G__21609));
})())){
return (new datascript.db.TxReport(self__.db_before,G__21596,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21610 = cljs.core.cst$kw$tx_DASH_data;
var G__21611 = expr__21604;
return (pred__21603.cljs$core$IFn$_invoke$arity$2 ? pred__21603.cljs$core$IFn$_invoke$arity$2(G__21610,G__21611) : pred__21603.call(null,G__21610,G__21611));
})())){
return (new datascript.db.TxReport(self__.db_before,self__.db_after,G__21596,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21612 = cljs.core.cst$kw$tempids;
var G__21613 = expr__21604;
return (pred__21603.cljs$core$IFn$_invoke$arity$2 ? pred__21603.cljs$core$IFn$_invoke$arity$2(G__21612,G__21613) : pred__21603.call(null,G__21612,G__21613));
})())){
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,G__21596,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21614 = cljs.core.cst$kw$tx_DASH_meta;
var G__21615 = expr__21604;
return (pred__21603.cljs$core$IFn$_invoke$arity$2 ? pred__21603.cljs$core$IFn$_invoke$arity$2(G__21614,G__21615) : pred__21603.call(null,G__21614,G__21615));
})())){
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,G__21596,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__21596),null));
}
}
}
}
}
});

datascript.db.TxReport.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$db_DASH_before,self__.db_before,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$db_DASH_after,self__.db_after,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$tx_DASH_data,self__.tx_data,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$tempids,self__.tempids,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$tx_DASH_meta,self__.tx_meta,null))], null),self__.__extmap));
});

datascript.db.TxReport.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__21596){
var self__ = this;
var this__4202__auto____$1 = this;
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,G__21596,self__.__extmap,self__.__hash));
});

datascript.db.TxReport.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

datascript.db.TxReport.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db_DASH_before,cljs.core.cst$sym$db_DASH_after,cljs.core.cst$sym$tx_DASH_data,cljs.core.cst$sym$tempids,cljs.core.cst$sym$tx_DASH_meta], null);
});

datascript.db.TxReport.cljs$lang$type = true;

datascript.db.TxReport.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"datascript.db/TxReport",null,(1),null));
});

datascript.db.TxReport.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"datascript.db/TxReport");
});

/**
 * Positional factory function for datascript.db/TxReport.
 */
datascript.db.__GT_TxReport = (function datascript$db$__GT_TxReport(db_before,db_after,tx_data,tempids,tx_meta){
return (new datascript.db.TxReport(db_before,db_after,tx_data,tempids,tx_meta,null,null,null));
});

/**
 * Factory function for datascript.db/TxReport, taking a map of keywords to field values.
 */
datascript.db.map__GT_TxReport = (function datascript$db$map__GT_TxReport(G__21600){
var extmap__4236__auto__ = (function (){var G__21616 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21600,cljs.core.cst$kw$db_DASH_before,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$db_DASH_after,cljs.core.cst$kw$tx_DASH_data,cljs.core.cst$kw$tempids,cljs.core.cst$kw$tx_DASH_meta], 0));
if(cljs.core.record_QMARK_(G__21600)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__21616);
} else {
return G__21616;
}
})();
return (new datascript.db.TxReport(cljs.core.cst$kw$db_DASH_before.cljs$core$IFn$_invoke$arity$1(G__21600),cljs.core.cst$kw$db_DASH_after.cljs$core$IFn$_invoke$arity$1(G__21600),cljs.core.cst$kw$tx_DASH_data.cljs$core$IFn$_invoke$arity$1(G__21600),cljs.core.cst$kw$tempids.cljs$core$IFn$_invoke$arity$1(G__21600),cljs.core.cst$kw$tx_DASH_meta.cljs$core$IFn$_invoke$arity$1(G__21600),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

datascript.db.is_attr_QMARK_ = (function datascript$db$is_attr_QMARK_(db,attr,property){
return cljs.core.contains_QMARK_(datascript.db._attrs_by(db,property),attr);
});
datascript.db.multival_QMARK_ = (function datascript$db$multival_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_(db,attr,cljs.core.cst$kw$db$cardinality_SLASH_many);
});
datascript.db.ref_QMARK_ = (function datascript$db$ref_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_(db,attr,cljs.core.cst$kw$db$type_SLASH_ref);
});
datascript.db.component_QMARK_ = (function datascript$db$component_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_(db,attr,cljs.core.cst$kw$db_SLASH_isComponent);
});
datascript.db.indexing_QMARK_ = (function datascript$db$indexing_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_(db,attr,cljs.core.cst$kw$db_SLASH_index);
});
datascript.db.entid = (function datascript$db$entid(db,eid){
while(true){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db? db)"));
}

if(((typeof eid === 'number') && ((eid > (0))))){
return eid;
} else {
if(cljs.core.sequential_QMARK_(eid)){
var vec__21618 = eid;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21618,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21618,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(eid),(2))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Lookup ref should contain 2 elements: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eid], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$lookup_DASH_ref_SLASH_syntax,cljs.core.cst$kw$entity_DASH_id,eid], null));
} else {
if(!(datascript.db.is_attr_QMARK_(db,attr,cljs.core.cst$kw$db_SLASH_unique))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Lookup ref attribute should be marked as :db/unique: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eid], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$lookup_DASH_ref_SLASH_unique,cljs.core.cst$kw$entity_DASH_id,eid], null));
} else {
if((value == null)){
return null;
} else {
return cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.db._datoms(db,cljs.core.cst$kw$avet,eid)));

}
}
}
} else {
if(cljs.core.array_QMARK_(eid)){
var G__21621 = db;
var G__21622 = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(eid);
db = G__21621;
eid = G__21622;
continue;
} else {
if((eid instanceof cljs.core.Keyword)){
return cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.db._datoms(db,cljs.core.cst$kw$avet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_ident,eid], null))));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Expected number or lookup ref for entity id, got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eid], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$entity_DASH_id_SLASH_syntax,cljs.core.cst$kw$entity_DASH_id,eid], null));

}
}
}
}
break;
}
});
datascript.db.entid_strict = (function datascript$db$entid_strict(db,eid){
var or__3949__auto__ = datascript.db.entid(db,eid);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Nothing found for entity id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eid], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$entity_DASH_id_SLASH_missing,cljs.core.cst$kw$entity_DASH_id,eid], null));
}
});
datascript.db.entid_some = (function datascript$db$entid_some(db,eid){
if(cljs.core.truth_(eid)){
return datascript.db.entid_strict(db,eid);
} else {
return null;
}
});
datascript.db.validate_datom = (function datascript$db$validate_datom(db,datom){
if(cljs.core.truth_((function (){var and__3938__auto__ = datom.datascript$db$IDatom$datom_added$arity$1(null);
if(cljs.core.truth_(and__3938__auto__)){
return datascript.db.is_attr_QMARK_(db,datom.a,cljs.core.cst$kw$db_SLASH_unique);
} else {
return and__3938__auto__;
}
})())){
var temp__5724__auto__ = cljs.core.not_empty(datascript.db._datoms(db,cljs.core.cst$kw$avet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datom.a,datom.v], null)));
if((temp__5724__auto__ == null)){
return null;
} else {
var found = temp__5724__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot add ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datom], 0)))," because of unique constraint: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([found], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_unique,cljs.core.cst$kw$attribute,datom.a,cljs.core.cst$kw$datom,datom], null));
}
} else {
return null;
}
});
datascript.db.validate_eid = (function datascript$db$validate_eid(eid,at){
if(typeof eid === 'number'){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad entity id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eid], 0)))," at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([at], 0))),", expected number"].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$entity_DASH_id,eid,cljs.core.cst$kw$context,at], null));
}
});
datascript.db.validate_attr = (function datascript$db$validate_attr(attr,at){
if((((attr instanceof cljs.core.Keyword)) || (typeof attr === 'string'))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad entity attribute ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr], 0)))," at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([at], 0))),", expected keyword or string"].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$attribute,attr,cljs.core.cst$kw$context,at], null));
}
});
datascript.db.validate_val = (function datascript$db$validate_val(v,at){
if((v == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot store nil as a value at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([at], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$value,v,cljs.core.cst$kw$context,at], null));
} else {
return null;
}
});
datascript.db.current_tx = (function datascript$db$current_tx(report){
return (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_DASH_before,cljs.core.cst$kw$max_DASH_tx], null)) + (1));
});
datascript.db.next_eid = (function datascript$db$next_eid(db){
return (cljs.core.cst$kw$max_DASH_eid.cljs$core$IFn$_invoke$arity$1(db) + (1));
});
datascript.db.tx_id_QMARK_ = (function datascript$db$tx_id_QMARK_(e){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,cljs.core.cst$kw$db_SLASH_current_DASH_tx)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,":db/current-tx")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,"datomic.tx")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,"datascript.tx")));
});
datascript.db.tempid_QMARK_ = (function datascript$db$tempid_QMARK_(x){
return ((((typeof x === 'number') && ((x < (0))))) || (typeof x === 'string'));
});
datascript.db.new_eid_QMARK_ = (function datascript$db$new_eid_QMARK_(db,eid){
return (((eid > cljs.core.cst$kw$max_DASH_eid.cljs$core$IFn$_invoke$arity$1(db))) && ((eid < (536870912))));
});
datascript.db.advance_max_eid = (function datascript$db$advance_max_eid(db,eid){
var G__21623 = db;
if(cljs.core.truth_(datascript.db.new_eid_QMARK_(db,eid))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21623,cljs.core.cst$kw$max_DASH_eid,eid);
} else {
return G__21623;
}
});
datascript.db.allocate_eid = (function datascript$db$allocate_eid(var_args){
var G__21625 = arguments.length;
switch (G__21625) {
case 2:
return datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$2 = (function (report,eid){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_DASH_after], null),datascript.db.advance_max_eid,eid);
});

datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3 = (function (report,e,eid){
var G__21626 = report;
var G__21626__$1 = ((datascript.db.tx_id_QMARK_(e))?cljs.core.assoc_in(G__21626,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempids,e], null),eid):G__21626);
var G__21626__$2 = ((datascript.db.tempid_QMARK_(e))?cljs.core.assoc_in(G__21626__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempids,e], null),eid):G__21626__$1);
var G__21626__$3 = (cljs.core.truth_((function (){var and__3938__auto__ = !(datascript.db.tempid_QMARK_(e));
if(and__3938__auto__){
return datascript.db.new_eid_QMARK_(cljs.core.cst$kw$db_DASH_after.cljs$core$IFn$_invoke$arity$1(report),eid);
} else {
return and__3938__auto__;
}
})())?cljs.core.assoc_in(G__21626__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempids,eid], null),eid):G__21626__$2);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__21626__$3,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_DASH_after], null),datascript.db.advance_max_eid,eid);

});

datascript.db.allocate_eid.cljs$lang$maxFixedArity = 3;

datascript.db.with_datom = (function datascript$db$with_datom(db,datom){
datascript.db.validate_datom(db,datom);

var indexing_QMARK_ = datascript.db.indexing_QMARK_(db,datom.a);
if(cljs.core.truth_(datom.datascript$db$IDatom$datom_added$arity$1(null))){
var G__21628 = db;
var G__21628__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__21628,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$eavt], null),me.tonsky.persistent_sorted_set.conj,datom,datascript.db.cmp_datoms_eavt_quick)
;
var G__21628__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__21628__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aevt], null),me.tonsky.persistent_sorted_set.conj,datom,datascript.db.cmp_datoms_aevt_quick)
;
var G__21628__$3 = ((indexing_QMARK_)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__21628__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$avet], null),me.tonsky.persistent_sorted_set.conj,datom,datascript.db.cmp_datoms_avet_quick):G__21628__$2);
var G__21628__$4 = datascript.db.advance_max_eid(G__21628__$3,datom.e)
;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21628__$4,cljs.core.cst$kw$hash,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)));

} else {
var temp__5722__auto__ = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datom.e,datom.a,datom.v], null)));
if((temp__5722__auto__ == null)){
return db;
} else {
var removing = temp__5722__auto__;
var G__21629 = db;
var G__21629__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__21629,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$eavt], null),me.tonsky.persistent_sorted_set.disj,removing,datascript.db.cmp_datoms_eavt_quick)
;
var G__21629__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__21629__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aevt], null),me.tonsky.persistent_sorted_set.disj,removing,datascript.db.cmp_datoms_aevt_quick)
;
var G__21629__$3 = ((indexing_QMARK_)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(G__21629__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$avet], null),me.tonsky.persistent_sorted_set.disj,removing,datascript.db.cmp_datoms_avet_quick):G__21629__$2);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21629__$3,cljs.core.cst$kw$hash,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)));

}
}
});
datascript.db.transact_report = (function datascript$db$transact_report(report,datom){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_DASH_after], null),datascript.db.with_datom,datom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tx_DASH_data], null),cljs.core.conj,datom);
});
datascript.db.reverse_ref_QMARK_ = (function datascript$db$reverse_ref_QMARK_(attr){
if((attr instanceof cljs.core.Keyword)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.name(attr),(0)));
} else {
if(typeof attr === 'string'){
return cljs.core.boolean$(cljs.core.re_matches(/(?:([^\/]+)\/)?_([^\/]+)/,attr));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad attribute type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr], 0))),", expected keyword or string"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$attribute,attr], null));

}
}
});
datascript.db.reverse_ref = (function datascript$db$reverse_ref(attr){
if((attr instanceof cljs.core.Keyword)){
if(datascript.db.reverse_ref_QMARK_(attr)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(attr),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(attr),(1)));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(attr),["_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr))].join(''));
}
} else {
if(typeof attr === 'string'){
var vec__21630 = cljs.core.re_matches(/(?:([^\/]+)\/)?([^\/]+)/,attr);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21630,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21630,(1),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21630,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(name,(0)))){
if(cljs.core.truth_(ns)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(name,(1)))].join('');
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(name,(1));
}
} else {
if(cljs.core.truth_(ns)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
} else {
return ["_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
}
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad attribute type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr], 0))),", expected keyword or string"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$attribute,attr], null));

}
}
});
datascript.db.check_upsert_conflict = (function datascript$db$check_upsert_conflict(entity,acc){
var vec__21633 = acc;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21633,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21633,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21633,(2),null);
var _e = cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(entity);
if((((_e == null)) || (datascript.db.tempid_QMARK_(_e)) || ((acc == null)) || ((_e === e)))){
return acc;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Conflicting upsert: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)], 0)))," resolves to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0))),", but entity already has :db/id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_e], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_upsert,cljs.core.cst$kw$entity,entity,cljs.core.cst$kw$assertion,acc], null));
}
});
datascript.db.upsert_reduce_fn = (function datascript$db$upsert_reduce_fn(db,eav,a,v){
var e = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.db._datoms(db,cljs.core.cst$kw$avet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null))));
if((e == null)){
return eav;
} else {
if((eav == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(eav,(0)),e)){
return eav;
} else {
var vec__21636 = eav;
var _e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21636,(0),null);
var _a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21636,(1),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21636,(2),null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Conflicting upserts: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_a,_v], null)], 0)))," resolves to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_e], 0))),", but ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)], 0)))," resolves to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_upsert,cljs.core.cst$kw$assertion,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null),cljs.core.cst$kw$conflict,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_e,_a,_v], null)], null));

}
}
}
});
datascript.db.upsert_eid = (function datascript$db$upsert_eid(db,entity){
var temp__5724__auto__ = cljs.core.not_empty(datascript.db._attrs_by(db,cljs.core.cst$kw$db$unique_SLASH_identity));
if((temp__5724__auto__ == null)){
return null;
} else {
var idents = temp__5724__auto__;
return cljs.core.first(datascript.db.check_upsert_conflict(entity,cljs.core.reduce_kv(((function (idents,temp__5724__auto__){
return (function (eav,a,v){
if(!(cljs.core.contains_QMARK_(idents,a))){
return eav;
} else {
if(((datascript.db.multival_QMARK_(db,a)) && (((me.tonsky.persistent_sorted_set.arrays.array_QMARK_(v)) || (((cljs.core.coll_QMARK_(v)) && (!(cljs.core.map_QMARK_(v))))))))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (idents,temp__5724__auto__){
return (function (p1__21639_SHARP_,p2__21640_SHARP_){
return datascript.db.upsert_reduce_fn(db,p1__21639_SHARP_,a,p2__21640_SHARP_);
});})(idents,temp__5724__auto__))
,eav,v);
} else {
return datascript.db.upsert_reduce_fn(db,eav,a,v);

}
}
});})(idents,temp__5724__auto__))
,null,entity)));
}
});
datascript.db.maybe_wrap_multival = (function datascript$db$maybe_wrap_multival(db,a,vs){
if(!(((datascript.db.reverse_ref_QMARK_(a)) || (datascript.db.multival_QMARK_(db,a))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
if(!(((me.tonsky.persistent_sorted_set.arrays.array_QMARK_(vs)) || (((cljs.core.coll_QMARK_(vs)) && (!(cljs.core.map_QMARK_(vs)))))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(vs),(2))) && (datascript.db.is_attr_QMARK_(db,cljs.core.first(vs),cljs.core.cst$kw$db$unique_SLASH_identity)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
return vs;

}
}
}
});
datascript.db.explode = (function datascript$db$explode(db,entity){
var eid = cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(entity);
var iter__4324__auto__ = ((function (eid){
return (function datascript$db$explode_$_iter__21641(s__21642){
return (new cljs.core.LazySeq(null,((function (eid){
return (function (){
var s__21642__$1 = s__21642;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__21642__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__21647 = cljs.core.first(xs__6277__auto__);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21647,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21647,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.cst$kw$db_SLASH_id)){
var _ = datascript.db.validate_attr(a,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$db_SLASH_id,eid,a,vs]));
var reverse_QMARK_ = datascript.db.reverse_ref_QMARK_(a);
var straight_a = ((reverse_QMARK_)?datascript.db.reverse_ref(a):a);
var ___$1 = ((((reverse_QMARK_) && (!(datascript.db.ref_QMARK_(db,straight_a)))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad attribute ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))),": reverse attribute name requires {:db/valueType :db.type/ref} in schema"].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$attribute,a,cljs.core.cst$kw$context,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$db_SLASH_id,eid,a,vs])], null))})():null);
var iterys__4320__auto__ = ((function (s__21642__$1,_,reverse_QMARK_,straight_a,___$1,vec__21647,a,vs,xs__6277__auto__,temp__5720__auto__,eid){
return (function datascript$db$explode_$_iter__21641_$_iter__21643(s__21644){
return (new cljs.core.LazySeq(null,((function (s__21642__$1,_,reverse_QMARK_,straight_a,___$1,vec__21647,a,vs,xs__6277__auto__,temp__5720__auto__,eid){
return (function (){
var s__21644__$1 = s__21644;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__21644__$1);
if(temp__5720__auto____$1){
var s__21644__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21644__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__21644__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__21646 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__21645 = (0);
while(true){
if((i__21645 < size__4323__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__21645);
cljs.core.chunk_append(b__21646,((((datascript.db.ref_QMARK_(db,straight_a)) && (cljs.core.map_QMARK_(v))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,datascript.db.reverse_ref(a),eid):((reverse_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,v,straight_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,eid,straight_a,v], null))));

var G__21650 = (i__21645 + (1));
i__21645 = G__21650;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21646),datascript$db$explode_$_iter__21641_$_iter__21643(cljs.core.chunk_rest(s__21644__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21646),null);
}
} else {
var v = cljs.core.first(s__21644__$2);
return cljs.core.cons(((((datascript.db.ref_QMARK_(db,straight_a)) && (cljs.core.map_QMARK_(v))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,datascript.db.reverse_ref(a),eid):((reverse_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,v,straight_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,eid,straight_a,v], null))),datascript$db$explode_$_iter__21641_$_iter__21643(cljs.core.rest(s__21644__$2)));
}
} else {
return null;
}
break;
}
});})(s__21642__$1,_,reverse_QMARK_,straight_a,___$1,vec__21647,a,vs,xs__6277__auto__,temp__5720__auto__,eid))
,null,null));
});})(s__21642__$1,_,reverse_QMARK_,straight_a,___$1,vec__21647,a,vs,xs__6277__auto__,temp__5720__auto__,eid))
;
var fs__4321__auto__ = cljs.core.seq(iterys__4320__auto__(datascript.db.maybe_wrap_multival(db,a,vs)));
if(fs__4321__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4321__auto__,datascript$db$explode_$_iter__21641(cljs.core.rest(s__21642__$1)));
} else {
var G__21651 = cljs.core.rest(s__21642__$1);
s__21642__$1 = G__21651;
continue;
}
} else {
var G__21652 = cljs.core.rest(s__21642__$1);
s__21642__$1 = G__21652;
continue;
}
} else {
return null;
}
break;
}
});})(eid))
,null,null));
});})(eid))
;
return iter__4324__auto__(entity);
});
datascript.db.transact_add = (function datascript$db$transact_add(report,p__21653){
var vec__21654 = p__21653;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21654,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21654,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21654,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21654,(3),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21654,(4),null);
var ent = vec__21654;
datascript.db.validate_attr(a,ent);

datascript.db.validate_val(v,ent);

var tx__$1 = (function (){var or__3949__auto__ = tx;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return datascript.db.current_tx(report);
}
})();
var db = cljs.core.cst$kw$db_DASH_after.cljs$core$IFn$_invoke$arity$1(report);
var e__$1 = datascript.db.entid_strict(db,e);
var v__$1 = ((datascript.db.ref_QMARK_(db,a))?datascript.db.entid_strict(db,v):v);
var new_datom = datascript.db.datom.cljs$core$IFn$_invoke$arity$4(e__$1,a,v__$1,tx__$1);
if(datascript.db.multival_QMARK_(db,a)){
if(cljs.core.empty_QMARK_(datascript.db._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a,v__$1], null)))){
return datascript.db.transact_report(report,new_datom);
} else {
return report;
}
} else {
var temp__5722__auto__ = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a], null)));
if((temp__5722__auto__ == null)){
return datascript.db.transact_report(report,new_datom);
} else {
var old_datom = temp__5722__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_datom.v,v__$1)){
return report;
} else {
return datascript.db.transact_report(datascript.db.transact_report(report,datascript.db.datom.cljs$core$IFn$_invoke$arity$5(e__$1,a,old_datom.v,tx__$1,false)),new_datom);
}
}
}
});
datascript.db.transact_retract_datom = (function datascript$db$transact_retract_datom(report,d){
var tx = datascript.db.current_tx(report);
return datascript.db.transact_report(report,datascript.db.datom.cljs$core$IFn$_invoke$arity$5(d.e,d.a,d.v,tx,false));
});
datascript.db.retract_components = (function datascript$db$retract_components(db,datoms){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (d){
return datascript.db.component_QMARK_(db,d.a);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db$fn_SLASH_retractEntity,d.v], null);
}))),datoms);
});
datascript.db.retry_with_tempid = (function datascript$db$retry_with_tempid(initial_report,report,es,tempid,upserted_eid){
if(cljs.core.contains_QMARK_(cljs.core.cst$kw$tempids.cljs$core$IFn$_invoke$arity$1(initial_report),tempid)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Conflicting upsert: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tempid], 0)))," resolves"," both to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([upserted_eid], 0)))," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(initial_report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempids,tempid], null))], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_upsert], null));
} else {
var tempids_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$tempids.cljs$core$IFn$_invoke$arity$1(report),tempid,upserted_eid);
var report_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(initial_report,cljs.core.cst$kw$tempids,tempids_SINGLEQUOTE_);
return (datascript.db.transact_tx_data.cljs$core$IFn$_invoke$arity$2 ? datascript.db.transact_tx_data.cljs$core$IFn$_invoke$arity$2(report_SINGLEQUOTE_,es) : datascript.db.transact_tx_data.call(null,report_SINGLEQUOTE_,es));
}
});
datascript.db.builtin_fn_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$db$fn_SLASH_call,null,cljs.core.cst$kw$db_SLASH_cas,null,cljs.core.cst$kw$db$fn_SLASH_retractEntity,null,cljs.core.cst$kw$db_SLASH_retractEntity,null,cljs.core.cst$kw$db_SLASH_retract,null,cljs.core.cst$kw$db$fn_SLASH_retractAttribute,null,cljs.core.cst$kw$db$fn_SLASH_cas,null,cljs.core.cst$kw$db_SLASH_add,null], null), null);
datascript.db.transact_tx_data = (function datascript$db$transact_tx_data(initial_report,initial_es){
if((((initial_es == null)) || (cljs.core.sequential_QMARK_(initial_es)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad transaction data ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([initial_es], 0))),", expected sequential collection"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$tx_DASH_data,initial_es], null));
}

var report = cljs.core.update.cljs$core$IFn$_invoke$arity$3(initial_report,cljs.core.cst$kw$db_DASH_after,cljs.core.transient$);
var es = initial_es;
while(true){
var vec__21657 = es;
var seq__21658 = cljs.core.seq(vec__21657);
var first__21659 = cljs.core.first(seq__21658);
var seq__21658__$1 = cljs.core.next(seq__21658);
var entity = first__21659;
var entities = seq__21658__$1;
var db = cljs.core.cst$kw$db_DASH_after.cljs$core$IFn$_invoke$arity$1(report);
var map__21660 = report;
var map__21660__$1 = ((((!((map__21660 == null)))?(((((map__21660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21660):map__21660);
var tempids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21660__$1,cljs.core.cst$kw$tempids);
if(cljs.core.empty_QMARK_(es)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tempids,cljs.core.cst$kw$db_SLASH_current_DASH_tx], null),datascript.db.current_tx(report)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_DASH_after,cljs.core.cst$kw$max_DASH_tx], null),cljs.core.inc),cljs.core.cst$kw$db_DASH_after,cljs.core.persistent_BANG_);
} else {
if((entity == null)){
var G__21674 = report;
var G__21675 = entities;
report = G__21674;
es = G__21675;
continue;
} else {
if(cljs.core.map_QMARK_(entity)){
var old_eid = cljs.core.cst$kw$db_SLASH_id.cljs$core$IFn$_invoke$arity$1(entity);
if(datascript.db.tx_id_QMARK_(old_eid)){
var id = datascript.db.current_tx(report);
var G__21676 = datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,old_eid,id);
var G__21677 = cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,cljs.core.cst$kw$db_SLASH_id,id),entities);
report = G__21676;
es = G__21677;
continue;
} else {
if(cljs.core.sequential_QMARK_(old_eid)){
var id = datascript.db.entid_strict(db,old_eid);
var G__21678 = report;
var G__21679 = cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,cljs.core.cst$kw$db_SLASH_id,id),entities);
report = G__21678;
es = G__21679;
continue;
} else {
var upserted_eid = datascript.db.upsert_eid(db,entity);
if(!((upserted_eid == null))){
if(((datascript.db.tempid_QMARK_(old_eid)) && (cljs.core.contains_QMARK_(tempids,old_eid)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(upserted_eid,cljs.core.get.cljs$core$IFn$_invoke$arity$2(tempids,old_eid))))){
return datascript.db.retry_with_tempid(initial_report,report,initial_es,old_eid,upserted_eid);
} else {
var G__21680 = datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,old_eid,upserted_eid);
var G__21681 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.db.explode(db,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,cljs.core.cst$kw$db_SLASH_id,upserted_eid)),entities);
report = G__21680;
es = G__21681;
continue;
}
} else {
if(((typeof old_eid === 'number') || ((old_eid == null)) || (typeof old_eid === 'string'))){
var new_eid = (((old_eid == null))?datascript.db.next_eid(db):((datascript.db.tempid_QMARK_(old_eid))?(function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tempids,old_eid);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return datascript.db.next_eid(db);
}
})():old_eid
));
var new_entity = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entity,cljs.core.cst$kw$db_SLASH_id,new_eid);
var G__21682 = datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,old_eid,new_eid);
var G__21683 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.db.explode(db,new_entity),entities);
report = G__21682;
es = G__21683;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Expected number, string or lookup ref for :db/id, got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_eid], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$entity_DASH_id_SLASH_syntax,cljs.core.cst$kw$entity,entity], null));

}
}
}
}
} else {
if(cljs.core.sequential_QMARK_(entity)){
var vec__21662 = entity;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21662,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21662,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21662,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21662,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$db$fn_SLASH_call)){
var vec__21665 = entity;
var seq__21666 = cljs.core.seq(vec__21665);
var first__21667 = cljs.core.first(seq__21666);
var seq__21666__$1 = cljs.core.next(seq__21666);
var _ = first__21667;
var first__21667__$1 = cljs.core.first(seq__21666__$1);
var seq__21666__$2 = cljs.core.next(seq__21666__$1);
var f = first__21667__$1;
var args = seq__21666__$2;
var G__21684 = report;
var G__21685 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,db,args),entities);
report = G__21684;
es = G__21685;
continue;
} else {
if((((op instanceof cljs.core.Keyword)) && (cljs.core.not((datascript.db.builtin_fn_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.db.builtin_fn_QMARK_.cljs$core$IFn$_invoke$arity$1(op) : datascript.db.builtin_fn_QMARK_.call(null,op)))))){
var temp__5722__auto__ = datascript.db.entid(db,op);
if((temp__5722__auto__ == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can\u2019t find entity for transaction fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([op], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$operation,cljs.core.cst$kw$db$fn_SLASH_call,cljs.core.cst$kw$tx_DASH_data,entity], null));
} else {
var ident = temp__5722__auto__;
var fun = cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ident,cljs.core.cst$kw$db_SLASH_fn], null))));
var args = cljs.core.next(entity);
if(cljs.core.fn_QMARK_(fun)){
var G__21686 = report;
var G__21687 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fun,db,args),entities);
report = G__21686;
es = G__21687;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Entity ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([op], 0)))," expected to have :db/fn attribute with fn? value"].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$operation,cljs.core.cst$kw$db$fn_SLASH_call,cljs.core.cst$kw$tx_DASH_data,entity], null));
}
}
} else {
if(((datascript.db.tempid_QMARK_(e)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$db_SLASH_add)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't use tempid in '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity], 0))),"'. Tempids are allowed in :db/add only"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$op,entity], null));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$db$fn_SLASH_cas)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$db_SLASH_cas)))){
var vec__21668 = entity;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21668,(0),null);
var e__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21668,(1),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21668,(2),null);
var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21668,(3),null);
var nv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21668,(4),null);
var e__$2 = datascript.db.entid_strict(db,e__$1);
var ___$1 = datascript.db.validate_attr(a__$1,entity);
var ov__$1 = ((datascript.db.ref_QMARK_(db,a__$1))?datascript.db.entid_strict(db,ov):ov);
var nv__$1 = ((datascript.db.ref_QMARK_(db,a__$1))?datascript.db.entid_strict(db,nv):nv);
var ___$2 = datascript.db.validate_val(nv__$1,entity);
var datoms = cljs.core.vec(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$2,a__$1], null)));
if(datascript.db.multival_QMARK_(db,a__$1)){
if(cljs.core.truth_(cljs.core.some(((function (report,es,vec__21668,_,e__$1,a__$1,ov,nv,e__$2,___$1,ov__$1,nv__$1,___$2,datoms,vec__21662,op,e,a,v,vec__21657,seq__21658,first__21659,seq__21658__$1,entity,entities,db,map__21660,map__21660__$1,tempids){
return (function (d){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d.v,ov__$1);
});})(report,es,vec__21668,_,e__$1,a__$1,ov,nv,e__$2,___$1,ov__$1,nv__$1,___$2,datoms,vec__21662,op,e,a,v,vec__21657,seq__21658,first__21659,seq__21658__$1,entity,entities,db,map__21660,map__21660__$1,tempids))
,datoms))){
var G__21688 = datascript.db.transact_add(report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,e__$2,a__$1,nv__$1], null));
var G__21689 = entities;
report = G__21688;
es = G__21689;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":db.fn/cas failed on datom [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e__$2], 0)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1], 0)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$v,datoms)], 0))),"], expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ov__$1], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_cas,cljs.core.cst$kw$old,datoms,cljs.core.cst$kw$expected,ov__$1,cljs.core.cst$kw$new,nv__$1], null));
}
} else {
var v__$1 = cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v__$1,ov__$1)){
var G__21690 = datascript.db.transact_add(report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,e__$2,a__$1,nv__$1], null));
var G__21691 = entities;
report = G__21690;
es = G__21691;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":db.fn/cas failed on datom [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e__$2], 0)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1], 0)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v__$1], 0))),"], expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ov__$1], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_cas,cljs.core.cst$kw$old,cljs.core.first(datoms),cljs.core.cst$kw$expected,ov__$1,cljs.core.cst$kw$new,nv__$1], null));
}
}
} else {
if(datascript.db.tx_id_QMARK_(e)){
var G__21692 = datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,e,datascript.db.current_tx(report));
var G__21693 = cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,datascript.db.current_tx(report),a,v], null),entities);
report = G__21692;
es = G__21693;
continue;
} else {
if(((datascript.db.ref_QMARK_(db,a)) && (datascript.db.tx_id_QMARK_(v)))){
var G__21694 = datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,v,datascript.db.current_tx(report));
var G__21695 = cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,datascript.db.current_tx(report)], null),entities);
report = G__21694;
es = G__21695;
continue;
} else {
if(((datascript.db.ref_QMARK_(db,a)) && (datascript.db.tempid_QMARK_(v)))){
var temp__5722__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tempids,v);
if((temp__5722__auto__ == null)){
var G__21696 = datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,v,datascript.db.next_eid(db));
var G__21697 = es;
report = G__21696;
es = G__21697;
continue;
} else {
var vid = temp__5722__auto__;
var G__21698 = report;
var G__21699 = cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,vid], null),entities);
report = G__21698;
es = G__21699;
continue;
}
} else {
if(datascript.db.tempid_QMARK_(e)){
var upserted_eid = ((datascript.db.is_attr_QMARK_(db,a,cljs.core.cst$kw$db$unique_SLASH_identity))?cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datascript.db._datoms(db,cljs.core.cst$kw$avet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)))):null);
var allocated_eid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tempids,e);
if(cljs.core.truth_((function (){var and__3938__auto__ = upserted_eid;
if(cljs.core.truth_(and__3938__auto__)){
var and__3938__auto____$1 = allocated_eid;
if(cljs.core.truth_(and__3938__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(upserted_eid,allocated_eid);
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})())){
return datascript.db.retry_with_tempid(initial_report,report,initial_es,e,upserted_eid);
} else {
var eid = (function (){var or__3949__auto__ = upserted_eid;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = allocated_eid;
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return datascript.db.next_eid(db);
}
}
})();
var G__21700 = datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3(report,e,eid);
var G__21701 = cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,eid,a,v], null),entities);
report = G__21700;
es = G__21701;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$db_SLASH_add)){
var G__21702 = datascript.db.transact_add(report,entity);
var G__21703 = entities;
report = G__21702;
es = G__21703;
continue;
} else {
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$db_SLASH_retract);
if(and__3938__auto__){
return v;
} else {
return and__3938__auto__;
}
})())){
var temp__5722__auto__ = datascript.db.entid(db,e);
if((temp__5722__auto__ == null)){
var G__21704 = report;
var G__21705 = entities;
report = G__21704;
es = G__21705;
continue;
} else {
var e__$1 = temp__5722__auto__;
var v__$1 = ((datascript.db.ref_QMARK_(db,a))?datascript.db.entid_strict(db,v):v);
datascript.db.validate_attr(a,entity);

datascript.db.validate_val(v__$1,entity);

var temp__5722__auto____$1 = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a,v__$1], null)));
if((temp__5722__auto____$1 == null)){
var G__21706 = report;
var G__21707 = entities;
report = G__21706;
es = G__21707;
continue;
} else {
var old_datom = temp__5722__auto____$1;
var G__21708 = datascript.db.transact_retract_datom(report,old_datom);
var G__21709 = entities;
report = G__21708;
es = G__21709;
continue;
}
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$db$fn_SLASH_retractAttribute)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$db_SLASH_retract)))){
var temp__5722__auto__ = datascript.db.entid(db,e);
if((temp__5722__auto__ == null)){
var G__21710 = report;
var G__21711 = entities;
report = G__21710;
es = G__21711;
continue;
} else {
var e__$1 = temp__5722__auto__;
var _ = datascript.db.validate_attr(a,entity);
var datoms = cljs.core.vec(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a], null)));
var G__21712 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.db.transact_retract_datom,report,datoms);
var G__21713 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.db.retract_components(db,datoms),entities);
report = G__21712;
es = G__21713;
continue;
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$db$fn_SLASH_retractEntity)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,cljs.core.cst$kw$db_SLASH_retractEntity)))){
var temp__5722__auto__ = datascript.db.entid(db,e);
if((temp__5722__auto__ == null)){
var G__21714 = report;
var G__21715 = entities;
report = G__21714;
es = G__21715;
continue;
} else {
var e__$1 = temp__5722__auto__;
var e_datoms = cljs.core.vec(datascript.db._search(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1], null)));
var v_datoms = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (report,es,e_datoms,e__$1,temp__5722__auto__,vec__21662,op,e,a,v,vec__21657,seq__21658,first__21659,seq__21658__$1,entity,entities,db,map__21660,map__21660__$1,tempids){
return (function (a__$1){
return datascript.db._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,a__$1,e__$1], null));
});})(report,es,e_datoms,e__$1,temp__5722__auto__,vec__21662,op,e,a,v,vec__21657,seq__21658,first__21659,seq__21658__$1,entity,entities,db,map__21660,map__21660__$1,tempids))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.db._attrs_by(db,cljs.core.cst$kw$db$type_SLASH_ref)], 0)));
var G__21716 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.db.transact_retract_datom,report,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(e_datoms,v_datoms));
var G__21717 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(datascript.db.retract_components(db,e_datoms),entities);
report = G__21716;
es = G__21717;
continue;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unknown operation at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity], 0))),", expected :db/add, :db/retract, :db.fn/call, :db.fn/retractAttribute, :db.fn/retractEntity or an ident corresponding to an installed transaction function (e.g. {:db/ident <keyword> :db/fn <Ifn>}, usage of :db/ident requires {:db/unique :db.unique/identity} in schema)"].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$operation,op,cljs.core.cst$kw$tx_DASH_data,entity], null));

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
}
}
} else {
if(cljs.core.truth_(datascript.db.datom_QMARK_(entity))){
var vec__21671 = entity;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21671,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21671,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21671,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21671,(3),null);
var added = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21671,(4),null);
if(cljs.core.truth_(added)){
var G__21718 = datascript.db.transact_add(report,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_add,e,a,v,tx], null));
var G__21719 = entities;
report = G__21718;
es = G__21719;
continue;
} else {
var G__21720 = report;
var G__21721 = cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db_SLASH_retract,e,a,v], null),entities);
report = G__21720;
es = G__21721;
continue;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Bad entity type at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entity], 0))),", expected map or vector"].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$transact_SLASH_syntax,cljs.core.cst$kw$tx_DASH_data,entity], null));

}
}
}
}
}
break;
}
});
