// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('cljss.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
cljss.utils.dev_QMARK_ = goog.DEBUG;
cljss.utils.pseudo_QMARK_ = (function cljss$utils$pseudo_QMARK_(p__19644){
var vec__19645 = p__19644;
var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19645,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19645,(1),null);
var and__3938__auto__ = cljs.core.re_matches(/&:.*/,cljs.core.name(rule));
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.map_QMARK_(value);
} else {
return and__3938__auto__;
}
});
cljss.utils.nested_QMARK_ = (function cljss$utils$nested_QMARK_(p__19648){
var vec__19649 = p__19648;
var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19649,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19649,(1),null);
return ((typeof rule === 'string') && (cljs.core.map_QMARK_(value)));
});
cljss.utils.literal_QMARK_ = (function cljss$utils$literal_QMARK_(x){
return ((typeof x === 'string') || (typeof x === 'number'));
});
cljss.utils.escape_val = (function cljss$utils$escape_val(rule,val){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rule,cljs.core.cst$kw$content)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val], 0));
} else {
return val;
}
});
cljss.utils.build_css = (function cljss$utils$build_css(cls,styles){
var G__19654 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19655){
var vec__19656 = p__19655;
var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19656,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19656,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(rule)),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljss.utils.escape_val(rule,val)),";"].join('');
}),styles));
var fexpr__19653 = ((function (G__19654){
return (function (p1__19652_SHARP_){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls),"{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19652_SHARP_),"}"].join('');
});})(G__19654))
;
return fexpr__19653(G__19654);
});
cljss.utils.compile_css_rule = (function cljss$utils$compile_css_rule(p__19659){
var vec__19660 = p__19659;
var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19660,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19660,(1),null);
var r = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(rule)),":"].join('')], null);
var r__$1 = ((cljs.core.vector_QMARK_(val))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(r,val):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,val));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r__$1,";");
});
cljss.utils.reduce_str = (function cljss$utils$reduce_str(s){
return cljs.core.reverse(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,s1){
var s0 = cljs.core.first(s__$1);
var srest = cljs.core.rest(s__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = cljss.utils.literal_QMARK_(s1);
if(cljs.core.truth_(and__3938__auto__)){
return typeof s0 === 'string';
} else {
return and__3938__auto__;
}
})())){
return cljs.core.cons([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s0),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s1)].join(''),srest);
} else {
return cljs.core.cons(s1,s__$1);
}
}),(new cljs.core.List(null,"",null,(1),null)),s));
});
