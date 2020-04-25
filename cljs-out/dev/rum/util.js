// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('rum.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
rum.util.collect = (function rum$util$collect(key,mixins){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (m){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
})),mixins);
});
rum.util.collect_STAR_ = (function rum$util$collect_STAR_(keys,mixins){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (m){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
}),keys);
})),mixins);
});
rum.util.call_all = (function rum$util$call_all(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14400 = arguments.length;
var i__4532__auto___14401 = (0);
while(true){
if((i__4532__auto___14401 < len__4531__auto___14400)){
args__4534__auto__.push((arguments[i__4532__auto___14401]));

var G__14402 = (i__4532__auto___14401 + (1));
i__4532__auto___14401 = G__14402;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,fn){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fn,state__$1,args);
}),state,fns);
});

rum.util.call_all.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.util.call_all.cljs$lang$applyTo = (function (seq14397){
var G__14398 = cljs.core.first(seq14397);
var seq14397__$1 = cljs.core.next(seq14397);
var G__14399 = cljs.core.first(seq14397__$1);
var seq14397__$2 = cljs.core.next(seq14397__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14398,G__14399,seq14397__$2);
});

