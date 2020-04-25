// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('spec_tools.impl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.analyzer.api');
goog.require('cljs.spec.alpha');
goog.require('spec_tools.form');
goog.require('clojure.walk');
spec_tools.impl.cljs_sym = (function spec_tools$impl$cljs_sym(x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
spec_tools.impl.clj_sym = (function spec_tools$impl$clj_sym(x){
if(cljs.core.var_QMARK_(x)){
var v = x;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v.ns().name())].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v.sym())].join(''));
} else {
return x;
}
});
spec_tools.impl.__GT_sym = (function spec_tools$impl$__GT_sym(x){
return spec_tools.impl.cljs_sym(x);
});
spec_tools.impl.unfn = (function spec_tools$impl$unfn(cljs_QMARK_,expr){
if(((cljs.core.seq_QMARK_(expr)) && ((cljs.core.first(expr) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("fn*",cljs.core.name(cljs.core.first(expr)))))){
var vec__19553 = cljs.core.rest(expr);
var seq__19554 = cljs.core.seq(vec__19553);
var first__19555 = cljs.core.first(seq__19554);
var seq__19554__$1 = cljs.core.next(seq__19554);
var vec__19556 = first__19555;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19556,(0),null);
var form = seq__19554__$1;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(clojure.walk.postwalk_replace(cljs.core.PersistentArrayMap.createAsIfByAssoc([s,cljs.core.cst$sym$_PERCENT_]),form),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs_QMARK_)?cljs.core.cst$sym$cljs$core_SLASH_fn:cljs.core.cst$sym$clojure$core_SLASH_fn)], 0));
} else {
return expr;
}
});
spec_tools.impl.polish = (function spec_tools$impl$polish(x){
if(cljs.core.seq_QMARK_(x)){
return cljs.core.flatten(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish,x));
} else {
if((x instanceof cljs.core.Symbol)){
return null;
} else {
return x;

}
}
});
spec_tools.impl.polish_un = (function spec_tools$impl$polish_un(x){
var G__19559 = x;
var G__19559__$1 = (((G__19559 == null))?null:spec_tools.impl.polish(G__19559));
var G__19559__$2 = (((G__19559__$1 == null))?null:cljs.core.name(G__19559__$1));
if((G__19559__$2 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__19559__$2);
}
});
spec_tools.impl.un_key = (function spec_tools$impl$un_key(x){
var G__19560 = x;
var G__19560__$1 = (((G__19560 == null))?null:cljs.core.name(G__19560));
if((G__19560__$1 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__19560__$1);
}
});
spec_tools.impl.with_key__GT_spec = (function spec_tools$impl$with_key__GT_spec(p__19561){
var map__19562 = p__19561;
var map__19562__$1 = ((((!((map__19562 == null)))?(((((map__19562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19562):map__19562);
var data = map__19562__$1;
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19562__$1,cljs.core.cst$kw$req);
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19562__$1,cljs.core.cst$kw$req_DASH_un);
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19562__$1,cljs.core.cst$kw$opt);
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19562__$1,cljs.core.cst$kw$opt_DASH_un);
var key__GT_spec = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.identity),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(opt,req)));
var un_key__GT_spec = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.un_key,cljs.core.identity),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(opt_un,req_un)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$key_DASH__GT_spec,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key__GT_spec,un_key__GT_spec], 0)));
});
spec_tools.impl.with_real_keys = (function spec_tools$impl$with_real_keys(p__19564){
var map__19565 = p__19564;
var map__19565__$1 = ((((!((map__19565 == null)))?(((((map__19565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19565):map__19565);
var data = map__19565__$1;
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19565__$1,cljs.core.cst$kw$req_DASH_un);
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19565__$1,cljs.core.cst$kw$opt_DASH_un);
var G__19567 = data;
var G__19567__$1 = (cljs.core.truth_(req_un)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__19567,cljs.core.cst$kw$req_DASH_un,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,spec_tools.impl.un_key)):G__19567);
if(cljs.core.truth_(opt_un)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__19567__$1,cljs.core.cst$kw$opt_DASH_un,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,spec_tools.impl.un_key));
} else {
return G__19567__$1;
}
});
spec_tools.impl.parse_keys = (function spec_tools$impl$parse_keys(form){
var m = (function (){var G__19571 = form;
var G__19571__$1 = (((G__19571 == null))?null:cljs.core.rest(G__19571));
if((G__19571__$1 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,G__19571__$1);
}
})();
var G__19572 = m;
var G__19572__$1 = (cljs.core.truth_(cljs.core.cst$kw$req.cljs$core$IFn$_invoke$arity$1(m))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__19572,cljs.core.cst$kw$req,((function (G__19572,m){
return (function (p1__19568_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish,cljs.core.flatten(p1__19568_SHARP_)));
});})(G__19572,m))
):G__19572);
var G__19572__$2 = (cljs.core.truth_(cljs.core.cst$kw$req_DASH_un.cljs$core$IFn$_invoke$arity$1(m))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__19572__$1,cljs.core.cst$kw$req_DASH_un,((function (G__19572,G__19572__$1,m){
return (function (p1__19569_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish,cljs.core.flatten(p1__19569_SHARP_)));
});})(G__19572,G__19572__$1,m))
):G__19572__$1);
var G__19572__$3 = (cljs.core.truth_(cljs.core.cst$kw$opt_DASH_un.cljs$core$IFn$_invoke$arity$1(m))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__19572__$2,cljs.core.cst$kw$opt_DASH_un,((function (G__19572,G__19572__$1,G__19572__$2,m){
return (function (p1__19570_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish,p1__19570_SHARP_));
});})(G__19572,G__19572__$1,G__19572__$2,m))
):G__19572__$2);
return spec_tools.impl.with_real_keys(spec_tools.impl.with_key__GT_spec(G__19572__$3));

});
spec_tools.impl.extract_keys = (function spec_tools$impl$extract_keys(form){
var map__19573 = (function (){var G__19574 = form;
var G__19574__$1 = (((G__19574 == null))?null:cljs.core.rest(G__19574));
if((G__19574__$1 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,G__19574__$1);
}
})();
var map__19573__$1 = ((((!((map__19573 == null)))?(((((map__19573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19573):map__19573);
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19573__$1,cljs.core.cst$kw$req);
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19573__$1,cljs.core.cst$kw$opt);
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19573__$1,cljs.core.cst$kw$req_DASH_un);
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19573__$1,cljs.core.cst$kw$opt_DASH_un);
return cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(req,opt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req_un,opt_un], 0))));
});
spec_tools.impl.extract_pred_and_info = (function spec_tools$impl$extract_pred_and_info(x){
if(cljs.core.map_QMARK_(x)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(x),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(x,cljs.core.cst$kw$spec)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.PersistentArrayMap.EMPTY], null);
}
});
spec_tools.impl.strip_fn_if_needed = (function spec_tools$impl$strip_fn_if_needed(form){
var head = cljs.core.first(form);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(3))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(head,cljs.core.cst$sym$cljs$core_SLASH_fn)))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2));
} else {
return form;
}
});
spec_tools.impl.normalize_symbol = (function spec_tools$impl$normalize_symbol(kw){
var G__19576 = (function (){var and__3938__auto__ = (kw instanceof cljs.core.Symbol);
if(and__3938__auto__){
return cljs.core.namespace(kw);
} else {
return and__3938__auto__;
}
})();
switch (G__19576) {
case "spec-tools.spec":
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("clojure.core",cljs.core.name(kw));

break;
case "cljs.core":
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("clojure.core",cljs.core.name(kw));

break;
case "cljs.spec.alpha":
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("clojure.spec.alpha",cljs.core.name(kw));

break;
default:
return kw;

}
});
spec_tools.impl.extract_form = (function spec_tools$impl$extract_form(spec){
if(cljs.core.seq_QMARK_(spec)){
return spec;
} else {
return cljs.spec.alpha.form(spec);
}
});
spec_tools.impl.qualified_name = (function spec_tools$impl$qualified_name(key){
if((key instanceof cljs.core.Keyword)){
var temp__5718__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5718__auto__)){
var nn = temp__5718__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(nn),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join('');
} else {
return cljs.core.name(key);
}
} else {
return key;
}
});
spec_tools.impl.nilable_spec_QMARK_ = (function spec_tools$impl$nilable_spec_QMARK_(spec){
var form = (function (){var and__3938__auto__ = spec;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.spec.alpha.form(spec);
} else {
return and__3938__auto__;
}
})();
return cljs.core.boolean$(((cljs.core.seq_QMARK_(form))?(function (){var G__19578 = form;
var G__19578__$1 = (((G__19578 == null))?null:cljs.core.seq(G__19578));
var G__19578__$2 = (((G__19578__$1 == null))?null:cljs.core.first(G__19578__$1));
if((G__19578__$2 == null)){
return null;
} else {
var fexpr__19579 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable,null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_nilable,null], null), null);
return (fexpr__19579.cljs$core$IFn$_invoke$arity$1 ? fexpr__19579.cljs$core$IFn$_invoke$arity$1(G__19578__$2) : fexpr__19579.call(null,G__19578__$2));
}
})():null));
});
/**
 * Unwrap [x] to x. Asserts that coll has exactly one element.
 */
spec_tools.impl.unwrap = (function spec_tools$impl$unwrap(coll){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(coll))){
} else {
throw (new Error("Assert failed: (= 1 (count coll))"));
}

return cljs.core.first(coll);
});
spec_tools.impl.deep_merge = (function spec_tools$impl$deep_merge(var_args){
var args__4534__auto__ = [];
var len__4531__auto___19581 = arguments.length;
var i__4532__auto___19582 = (0);
while(true){
if((i__4532__auto___19582 < len__4531__auto___19581)){
args__4534__auto__.push((arguments[i__4532__auto___19582]));

var G__19583 = (i__4532__auto___19582 + (1));
i__4532__auto___19582 = G__19583;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return spec_tools.impl.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

spec_tools.impl.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (values){
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,values)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,spec_tools.impl.deep_merge,values);
} else {
if(cljs.core.every_QMARK_(cljs.core.coll_QMARK_,values)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.into,values);
} else {
return cljs.core.last(values);

}
}
});

spec_tools.impl.deep_merge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
spec_tools.impl.deep_merge.cljs$lang$applyTo = (function (seq19580){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19580));
});

spec_tools.impl.unlift_keys = (function spec_tools$impl$unlift_keys(data,ns_name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__19584){
var vec__19585 = p__19584;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19585,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19585,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_name,cljs.core.namespace(k))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,data);
});
spec_tools.impl.register_spec_BANG_ = (function spec_tools$impl$register_spec_BANG_(k,s){
return cljs.spec.alpha.def_impl(k,cljs.spec.alpha.form(s),s);
});
spec_tools.impl.coll_of_spec = (function spec_tools$impl$coll_of_spec(pred,type){
var form = (spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1 ? spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1(pred) : spec_tools.form.resolve_form.call(null,pred));
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(form,pred,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$into,type,cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH_coll_DASH_of,null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$into,null,(1),null)),(new cljs.core.List(null,type,null,(1),null))], 0)))),cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,cljs.core.coll_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null], null),null);
});
spec_tools.impl.map_of_spec = (function spec_tools$impl$map_of_spec(kpred,vpred){
var forms = cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.form.resolve_form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kpred,vpred], null));
var tuple = cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(forms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kpred,vpred], null));
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple,null,(1),null)),forms))),tuple,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$conform_DASH_keys,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn,((function (forms,tuple){
return (function (_,v){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0));
});})(forms,tuple))
,cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all,true,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$spec$alpha_SLASH_map_DASH_of,null,(1),null)),forms,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$conform_DASH_keys,null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0)))),cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred,cljs.core.coll_QMARK_,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form,null], null),null);
});
spec_tools.impl.keys_spec = (function spec_tools$impl$keys_spec(p__19590){
var map__19591 = p__19590;
var map__19591__$1 = ((((!((map__19591 == null)))?(((((map__19591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19591):map__19591);
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19591__$1,cljs.core.cst$kw$req);
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19591__$1,cljs.core.cst$kw$opt);
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19591__$1,cljs.core.cst$kw$req_DASH_un);
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19591__$1,cljs.core.cst$kw$opt_DASH_un);
var req_specs = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req,req_un)));
var opt_specs = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(opt,opt_un)));
var req_keys = cljs.core.flatten(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish,req),cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish_un,req_un)));
var opt_keys = cljs.core.flatten(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish,opt),cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish_un,opt_un)));
var pred_exprs = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (req_specs,opt_specs,req_keys,opt_keys,map__19591,map__19591__$1,req,opt,req_un,opt_un){
return (function (p1__19588_SHARP_){
return cljs.core.map_QMARK_(p1__19588_SHARP_);
});})(req_specs,opt_specs,req_keys,opt_keys,map__19591,map__19591__$1,req,opt,req_un,opt_un))
], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (req_specs,opt_specs,req_keys,opt_keys,map__19591,map__19591__$1,req,opt,req_un,opt_un){
return (function (x){
return ((function (req_specs,opt_specs,req_keys,opt_keys,map__19591,map__19591__$1,req,opt,req_un,opt_un){
return (function (p1__19589_SHARP_){
return cljs.core.contains_QMARK_(p1__19589_SHARP_,x);
});
;})(req_specs,opt_specs,req_keys,opt_keys,map__19591,map__19591__$1,req,opt,req_un,opt_un))
});})(req_specs,opt_specs,req_keys,opt_keys,map__19591,map__19591__$1,req,opt,req_un,opt_un))
,req_keys));
var pred_forms = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$_PERCENT_,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_PERCENT_,null,(1),null))))),null,(1),null))], 0))))], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (req_specs,opt_specs,req_keys,opt_keys,pred_exprs,map__19591,map__19591__$1,req,opt,req_un,opt_un){
return (function (k){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$_PERCENT_,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_contains_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_PERCENT_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null))], 0)))),null,(1),null))], 0))));
});})(req_specs,opt_specs,req_keys,opt_keys,pred_exprs,map__19591,map__19591__$1,req,opt,req_un,opt_un))
,req_keys));
var keys_pred = ((function (req_specs,opt_specs,req_keys,opt_keys,pred_exprs,pred_forms,map__19591,map__19591__$1,req,opt,req_un,opt_un){
return (function (x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (req_specs,opt_specs,req_keys,opt_keys,pred_exprs,pred_forms,map__19591,map__19591__$1,req,opt,req_un,opt_un){
return (function (_,p){
var or__3949__auto__ = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(x) : p.call(null,x));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.reduced(false);
}
});})(req_specs,opt_specs,req_keys,opt_keys,pred_exprs,pred_forms,map__19591,map__19591__$1,req,opt,req_un,opt_un))
,true,pred_exprs);
});})(req_specs,opt_specs,req_keys,opt_keys,pred_exprs,pred_forms,map__19591,map__19591__$1,req,opt,req_un,opt_un))
;
return cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[req_un,opt_un,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms,opt]));
});
spec_tools.impl.nilable_spec = (function spec_tools$impl$nilable_spec(pred){
var form = (spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1 ? spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1(pred) : spec_tools.form.resolve_form.call(null,pred));
return cljs.spec.alpha.nilable_impl(form,pred,null);
});
spec_tools.impl.or_spec = (function spec_tools$impl$or_spec(v){
var ks = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v);
var preds = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,v);
var forms = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(spec_tools.form.resolve_form,preds);
return cljs.spec.alpha.or_spec_impl(ks,forms,preds,null);
});
