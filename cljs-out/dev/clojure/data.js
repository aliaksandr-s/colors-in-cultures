// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__20631){
var vec__20632 = p__20631;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20632,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20632,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__20635 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20635,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20635,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20635,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__20639 = arguments.length;
switch (G__20639) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4037__auto__ = cljs.core.count(a);
var y__4038__auto__ = cljs.core.count(b);
return ((x__4037__auto__ > y__4038__auto__) ? x__4037__auto__ : y__4038__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if(((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4243__auto__ = (((x == null))?null:x);
var m__4244__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto__.call(null,x));
} else {
var m__4244__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4244__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if(((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4243__auto__ = (((a == null))?null:a);
var m__4244__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4244__auto__.call(null,a,b));
} else {
var m__4244__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4244__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__20641_20665 = clojure.data.equality_partition;
var G__20642_20666 = "null";
var G__20643_20667 = ((function (G__20641_20665,G__20642_20666){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__20641_20665,G__20642_20666))
;
goog.object.set(G__20641_20665,G__20642_20666,G__20643_20667);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__20644_20668 = clojure.data.equality_partition;
var G__20645_20669 = "string";
var G__20646_20670 = ((function (G__20644_20668,G__20645_20669){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__20644_20668,G__20645_20669))
;
goog.object.set(G__20644_20668,G__20645_20669,G__20646_20670);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__20647_20671 = clojure.data.equality_partition;
var G__20648_20672 = "number";
var G__20649_20673 = ((function (G__20647_20671,G__20648_20672){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__20647_20671,G__20648_20672))
;
goog.object.set(G__20647_20671,G__20648_20672,G__20649_20673);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__20650_20674 = clojure.data.equality_partition;
var G__20651_20675 = "array";
var G__20652_20676 = ((function (G__20650_20674,G__20651_20675){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__20650_20674,G__20651_20675))
;
goog.object.set(G__20650_20674,G__20651_20675,G__20652_20676);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__20653_20677 = clojure.data.equality_partition;
var G__20654_20678 = "function";
var G__20655_20679 = ((function (G__20653_20677,G__20654_20678){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__20653_20677,G__20654_20678))
;
goog.object.set(G__20653_20677,G__20654_20678,G__20655_20679);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__20656_20680 = clojure.data.equality_partition;
var G__20657_20681 = "boolean";
var G__20658_20682 = ((function (G__20656_20680,G__20657_20681){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__20656_20680,G__20657_20681))
;
goog.object.set(G__20656_20680,G__20657_20681,G__20658_20682);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__20659_20683 = clojure.data.equality_partition;
var G__20660_20684 = "_";
var G__20661_20685 = ((function (G__20659_20683,G__20660_20684){
return (function (x){
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__20659_20683,G__20660_20684))
;
goog.object.set(G__20659_20683,G__20660_20684,G__20661_20685);
goog.object.set(clojure.data.Diff,"null",true);

var G__20686_20710 = clojure.data.diff_similar;
var G__20687_20711 = "null";
var G__20688_20712 = ((function (G__20686_20710,G__20687_20711){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__20686_20710,G__20687_20711))
;
goog.object.set(G__20686_20710,G__20687_20711,G__20688_20712);

goog.object.set(clojure.data.Diff,"string",true);

var G__20689_20713 = clojure.data.diff_similar;
var G__20690_20714 = "string";
var G__20691_20715 = ((function (G__20689_20713,G__20690_20714){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__20689_20713,G__20690_20714))
;
goog.object.set(G__20689_20713,G__20690_20714,G__20691_20715);

goog.object.set(clojure.data.Diff,"number",true);

var G__20692_20716 = clojure.data.diff_similar;
var G__20693_20717 = "number";
var G__20694_20718 = ((function (G__20692_20716,G__20693_20717){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__20692_20716,G__20693_20717))
;
goog.object.set(G__20692_20716,G__20693_20717,G__20694_20718);

goog.object.set(clojure.data.Diff,"array",true);

var G__20695_20719 = clojure.data.diff_similar;
var G__20696_20720 = "array";
var G__20697_20721 = ((function (G__20695_20719,G__20696_20720){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__20695_20719,G__20696_20720))
;
goog.object.set(G__20695_20719,G__20696_20720,G__20697_20721);

goog.object.set(clojure.data.Diff,"function",true);

var G__20698_20722 = clojure.data.diff_similar;
var G__20699_20723 = "function";
var G__20700_20724 = ((function (G__20698_20722,G__20699_20723){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__20698_20722,G__20699_20723))
;
goog.object.set(G__20698_20722,G__20699_20723,G__20700_20724);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__20701_20725 = clojure.data.diff_similar;
var G__20702_20726 = "boolean";
var G__20703_20727 = ((function (G__20701_20725,G__20702_20726){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__20701_20725,G__20702_20726))
;
goog.object.set(G__20701_20725,G__20702_20726,G__20703_20727);

goog.object.set(clojure.data.Diff,"_",true);

var G__20704_20728 = clojure.data.diff_similar;
var G__20705_20729 = "_";
var G__20706_20730 = ((function (G__20704_20728,G__20705_20729){
return (function (a,b){
var fexpr__20708 = (function (){var G__20709 = clojure.data.equality_partition(a);
var G__20709__$1 = (((G__20709 instanceof cljs.core.Keyword))?G__20709.fqn:null);
switch (G__20709__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20709__$1)].join('')));

}
})();
return (fexpr__20708.cljs$core$IFn$_invoke$arity$2 ? fexpr__20708.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__20708.call(null,a,b));
});})(G__20704_20728,G__20705_20729))
;
goog.object.set(G__20704_20728,G__20705_20729,G__20706_20730);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
