// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('spec_tools.visitor');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('spec_tools.core');
goog.require('spec_tools.parse');
goog.require('spec_tools.impl');
goog.require('spec_tools.form');
spec_tools.visitor.spec_dispatch = (function spec_tools$visitor$spec_dispatch(spec,accept,options){
if(cljs.core.truth_((function (){var or__3949__auto__ = cljs.spec.alpha.spec_QMARK_(spec);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = cljs.spec.alpha.regex_QMARK_(spec);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return (spec instanceof cljs.core.Keyword);
}
}
})())){
var form = cljs.spec.alpha.form(spec);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,cljs.core.cst$kw$cljs$spec$alpha_SLASH_unknown)){
if(cljs.core.seq_QMARK_(form)){
return spec_tools.impl.normalize_symbol(cljs.core.first(form));
} else {
return (spec_tools.visitor.spec_dispatch.cljs$core$IFn$_invoke$arity$3 ? spec_tools.visitor.spec_dispatch.cljs$core$IFn$_invoke$arity$3(form,accept,options) : spec_tools.visitor.spec_dispatch.call(null,form,accept,options));
}
} else {
return spec;
}
} else {
if(cljs.core.set_QMARK_(spec)){
return cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_set;
} else {
if(cljs.core.seq_QMARK_(spec)){
return spec_tools.impl.normalize_symbol(cljs.core.first(spec_tools.impl.strip_fn_if_needed(spec)));
} else {
if((spec instanceof cljs.core.Symbol)){
return spec_tools.impl.normalize_symbol(spec);
} else {
return spec_tools.impl.normalize_symbol((spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1 ? spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.form.resolve_form.call(null,spec)));

}
}
}
}
});
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.visitor !== 'undefined') && (typeof spec_tools.visitor.visit_spec !== 'undefined')){
} else {
spec_tools.visitor.visit_spec = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("spec-tools.visitor","visit-spec"),spec_tools.visitor.spec_dispatch,cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
/**
 * Walk a spec definition. Takes 2-3 arguments, the spec and the accept
 *   function, and optionally a options map, and returns the result of
 *   calling the accept function. Options map can be used to pass in context-
 *   specific information to to sub-visits & accepts.
 * 
 *   The accept function is called with 4 arguments: the dispatch term for the
 *   spec (see below), the spec itself, vector with the results of
 *   recursively walking the children of the spec and the options map.
 * 
 *   The dispatch term is one of the following
 *   * if the spec is a function call: a fully qualified symbol for the function
 *  with the following exceptions:
 *  - cljs.core symbols are converted to clojure.core symbols
 *  - cljs.spec.alpha symbols are converted to clojure.spec.alpha symbols
 *   * if the spec is a set: :spec-tools.visitor/set
 *   * otherwise: the spec itself
 */
spec_tools.visitor.visit = (function spec_tools$visitor$visit(var_args){
var G__25933 = arguments.length;
switch (G__25933) {
case 2:
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$2 = (function (spec,accept){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(spec,accept,null);
});

spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3 = (function (spec,accept,p__25934){
var map__25935 = p__25934;
var map__25935__$1 = ((((!((map__25935 == null)))?(((((map__25935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25935):map__25935);
var options = map__25935__$1;
var visited = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25935__$1,cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_visited);
if(cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(visited,spec))){
var options__$1 = (((spec instanceof cljs.core.Keyword))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(options,cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_visited,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),spec):options);
return (spec_tools.visitor.visit_spec.cljs$core$IFn$_invoke$arity$3 ? spec_tools.visitor.visit_spec.cljs$core$IFn$_invoke$arity$3(spec,accept,options__$1) : spec_tools.visitor.visit_spec.call(null,spec,accept,options__$1));
} else {
return (spec_tools.visitor.visit_spec.cljs$core$IFn$_invoke$arity$3 ? spec_tools.visitor.visit_spec.cljs$core$IFn$_invoke$arity$3(null,accept,options) : spec_tools.visitor.visit_spec.call(null,null,accept,options));
}
});

spec_tools.visitor.visit.cljs$lang$maxFixedArity = 3;

spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_set,(function (spec,accept,options){
var G__25938 = cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_set;
var G__25939 = spec;
var G__25940 = cljs.core.vec((((spec instanceof cljs.core.Keyword))?spec_tools.impl.extract_form(spec):spec));
var G__25941 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__25938,G__25939,G__25940,G__25941) : accept.call(null,G__25938,G__25939,G__25940,G__25941));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_keys,(function (spec,accept,options){
var keys = spec_tools.impl.extract_keys(spec_tools.impl.extract_form(spec));
var G__25943 = cljs.core.cst$sym$clojure$spec$alpha_SLASH_keys;
var G__25944 = spec;
var G__25945 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__25943,G__25944,keys){
return (function (p1__25942_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__25942_SHARP_,accept,options);
});})(G__25943,G__25944,keys))
,keys);
var G__25946 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__25943,G__25944,G__25945,G__25946) : accept.call(null,G__25943,G__25944,G__25945,G__25946));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_or,(function (spec,accept,options){
var vec__25948 = spec_tools.impl.extract_form(spec);
var seq__25949 = cljs.core.seq(vec__25948);
var first__25950 = cljs.core.first(seq__25949);
var seq__25949__$1 = cljs.core.next(seq__25949);
var _ = first__25950;
var map__25951 = seq__25949__$1;
var map__25951__$1 = ((((!((map__25951 == null)))?(((((map__25951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25951):map__25951);
var inner_spec_map = map__25951__$1;
var G__25953 = cljs.core.cst$sym$clojure$spec$alpha_SLASH_or;
var G__25954 = spec;
var G__25955 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__25953,G__25954,vec__25948,seq__25949,first__25950,seq__25949__$1,_,map__25951,map__25951__$1,inner_spec_map){
return (function (p1__25947_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__25947_SHARP_,accept,options);
});})(G__25953,G__25954,vec__25948,seq__25949,first__25950,seq__25949__$1,_,map__25951,map__25951__$1,inner_spec_map))
,cljs.core.vals(inner_spec_map));
var G__25956 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__25953,G__25954,G__25955,G__25956) : accept.call(null,G__25953,G__25954,G__25955,G__25956));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_and,(function (spec,accept,options){
var vec__25958 = spec_tools.impl.extract_form(spec);
var seq__25959 = cljs.core.seq(vec__25958);
var first__25960 = cljs.core.first(seq__25959);
var seq__25959__$1 = cljs.core.next(seq__25959);
var _ = first__25960;
var inner_specs = seq__25959__$1;
var G__25961 = cljs.core.cst$sym$clojure$spec$alpha_SLASH_and;
var G__25962 = spec;
var G__25963 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__25961,G__25962,vec__25958,seq__25959,first__25960,seq__25959__$1,_,inner_specs){
return (function (p1__25957_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__25957_SHARP_,accept,options);
});})(G__25961,G__25962,vec__25958,seq__25959,first__25960,seq__25959__$1,_,inner_specs))
,inner_specs);
var G__25964 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__25961,G__25962,G__25963,G__25964) : accept.call(null,G__25961,G__25962,G__25963,G__25964));
}));
spec_tools.visitor.visit_merge = (function spec_tools$visitor$visit_merge(spec,accept,options){
var vec__25966 = spec_tools.impl.extract_form(spec);
var seq__25967 = cljs.core.seq(vec__25966);
var first__25968 = cljs.core.first(seq__25967);
var seq__25967__$1 = cljs.core.next(seq__25967);
var _ = first__25968;
var inner_specs = seq__25967__$1;
var G__25969 = cljs.core.cst$sym$clojure$spec$alpha_SLASH_merge;
var G__25970 = spec;
var G__25971 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__25969,G__25970,vec__25966,seq__25967,first__25968,seq__25967__$1,_,inner_specs){
return (function (p1__25965_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__25965_SHARP_,accept,options);
});})(G__25969,G__25970,vec__25966,seq__25967,first__25968,seq__25967__$1,_,inner_specs))
,inner_specs);
var G__25972 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__25969,G__25970,G__25971,G__25972) : accept.call(null,G__25969,G__25970,G__25971,G__25972));
});
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_merge,(function (spec,accept,options){
return spec_tools.visitor.visit_merge(spec,accept,options);
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$spec_DASH_tools$core_SLASH_merge,(function (spec,accept,options){
return spec_tools.visitor.visit_merge(spec,accept,options);
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_every,(function (spec,accept,options){
var vec__25973 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25973,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25973,(1),null);
var G__25976 = cljs.core.cst$sym$clojure$spec$alpha_SLASH_every;
var G__25977 = spec;
var G__25978 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__25979 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__25976,G__25977,G__25978,G__25979) : accept.call(null,G__25976,G__25977,G__25978,G__25979));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_every_DASH_kv,(function (spec,accept,options){
var vec__25981 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25981,(0),null);
var inner_spec1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25981,(1),null);
var inner_spec2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25981,(2),null);
var G__25984 = cljs.core.cst$sym$clojure$spec$alpha_SLASH_every_DASH_kv;
var G__25985 = spec;
var G__25986 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__25984,G__25985,vec__25981,_,inner_spec1,inner_spec2){
return (function (p1__25980_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__25980_SHARP_,accept,options);
});})(G__25984,G__25985,vec__25981,_,inner_spec1,inner_spec2))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [inner_spec1,inner_spec2], null));
var G__25987 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__25984,G__25985,G__25986,G__25987) : accept.call(null,G__25984,G__25985,G__25986,G__25987));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_coll_DASH_of,(function (spec,accept,options){
var form = spec_tools.impl.extract_form(spec);
var pred = cljs.core.second(form);
var map__25988 = spec_tools.parse.parse_spec(form);
var map__25988__$1 = ((((!((map__25988 == null)))?(((((map__25988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25988):map__25988);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25988__$1,cljs.core.cst$kw$type);
var dispatch = (function (){var G__25990 = type;
var G__25990__$1 = (((G__25990 instanceof cljs.core.Keyword))?G__25990.fqn:null);
switch (G__25990__$1) {
case "map-of":
return cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_map_DASH_of;

break;
case "set":
return cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_set_DASH_of;

break;
case "vector":
return cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_vector_DASH_of;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25990__$1)].join('')));

}
})();
var G__25991 = dispatch;
var G__25992 = spec;
var G__25993 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(pred,accept,options)], null);
var G__25994 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__25991,G__25992,G__25993,G__25994) : accept.call(null,G__25991,G__25992,G__25993,G__25994));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_map_DASH_of,(function (spec,accept,options){
var vec__25997 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25997,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25997,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25997,(2),null);
var G__26000 = cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_map_DASH_of;
var G__26001 = spec;
var G__26002 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__26000,G__26001,vec__25997,_,k,v){
return (function (p1__25996_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__25996_SHARP_,accept,options);
});})(G__26000,G__26001,vec__25997,_,k,v))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
var G__26003 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__26000,G__26001,G__26002,G__26003) : accept.call(null,G__26000,G__26001,G__26002,G__26003));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH__STAR_,(function (spec,accept,options){
var vec__26004 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26004,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26004,(1),null);
var G__26007 = cljs.core.cst$sym$clojure$spec$alpha_SLASH__STAR_;
var G__26008 = spec;
var G__26009 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__26010 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__26007,G__26008,G__26009,G__26010) : accept.call(null,G__26007,G__26008,G__26009,G__26010));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH__PLUS_,(function (spec,accept,options){
var vec__26011 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26011,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26011,(1),null);
var G__26014 = cljs.core.cst$sym$clojure$spec$alpha_SLASH__PLUS_;
var G__26015 = spec;
var G__26016 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__26017 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__26014,G__26015,G__26016,G__26017) : accept.call(null,G__26014,G__26015,G__26016,G__26017));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH__QMARK_,(function (spec,accept,options){
var vec__26018 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26018,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26018,(1),null);
var G__26021 = cljs.core.cst$sym$clojure$spec$alpha_SLASH__QMARK_;
var G__26022 = spec;
var G__26023 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__26024 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__26021,G__26022,G__26023,G__26024) : accept.call(null,G__26021,G__26022,G__26023,G__26024));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_alt,(function (spec,accept,options){
var vec__26026 = spec_tools.impl.extract_form(spec);
var seq__26027 = cljs.core.seq(vec__26026);
var first__26028 = cljs.core.first(seq__26027);
var seq__26027__$1 = cljs.core.next(seq__26027);
var _ = first__26028;
var map__26029 = seq__26027__$1;
var map__26029__$1 = ((((!((map__26029 == null)))?(((((map__26029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26029):map__26029);
var inner_spec_map = map__26029__$1;
var G__26031 = cljs.core.cst$sym$clojure$spec$alpha_SLASH_alt;
var G__26032 = spec;
var G__26033 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__26031,G__26032,vec__26026,seq__26027,first__26028,seq__26027__$1,_,map__26029,map__26029__$1,inner_spec_map){
return (function (p1__26025_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__26025_SHARP_,accept,options);
});})(G__26031,G__26032,vec__26026,seq__26027,first__26028,seq__26027__$1,_,map__26029,map__26029__$1,inner_spec_map))
,cljs.core.vals(inner_spec_map));
var G__26034 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__26031,G__26032,G__26033,G__26034) : accept.call(null,G__26031,G__26032,G__26033,G__26034));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_cat,(function (spec,accept,options){
var vec__26036 = spec_tools.impl.extract_form(spec);
var seq__26037 = cljs.core.seq(vec__26036);
var first__26038 = cljs.core.first(seq__26037);
var seq__26037__$1 = cljs.core.next(seq__26037);
var _ = first__26038;
var map__26039 = seq__26037__$1;
var map__26039__$1 = ((((!((map__26039 == null)))?(((((map__26039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26039):map__26039);
var inner_spec_map = map__26039__$1;
var G__26041 = cljs.core.cst$sym$clojure$spec$alpha_SLASH_cat;
var G__26042 = spec;
var G__26043 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__26041,G__26042,vec__26036,seq__26037,first__26038,seq__26037__$1,_,map__26039,map__26039__$1,inner_spec_map){
return (function (p1__26035_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__26035_SHARP_,accept,options);
});})(G__26041,G__26042,vec__26036,seq__26037,first__26038,seq__26037__$1,_,map__26039,map__26039__$1,inner_spec_map))
,cljs.core.vals(inner_spec_map));
var G__26044 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__26041,G__26042,G__26043,G__26044) : accept.call(null,G__26041,G__26042,G__26043,G__26044));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH__AMPERSAND_,(function (spec,accept,options){
var vec__26045 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26045,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26045,(1),null);
var G__26048 = cljs.core.cst$sym$clojure$spec$alpha_SLASH__AMPERSAND_;
var G__26049 = spec;
var G__26050 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__26051 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__26048,G__26049,G__26050,G__26051) : accept.call(null,G__26048,G__26049,G__26050,G__26051));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_tuple,(function (spec,accept,options){
var vec__26053 = spec_tools.impl.extract_form(spec);
var seq__26054 = cljs.core.seq(vec__26053);
var first__26055 = cljs.core.first(seq__26054);
var seq__26054__$1 = cljs.core.next(seq__26054);
var _ = first__26055;
var inner_specs = seq__26054__$1;
var G__26056 = cljs.core.cst$sym$clojure$spec$alpha_SLASH_tuple;
var G__26057 = spec;
var G__26058 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__26056,G__26057,vec__26053,seq__26054,first__26055,seq__26054__$1,_,inner_specs){
return (function (p1__26052_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__26052_SHARP_,accept,options);
});})(G__26056,G__26057,vec__26053,seq__26054,first__26055,seq__26054__$1,_,inner_specs))
,inner_specs);
var G__26059 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__26056,G__26057,G__26058,G__26059) : accept.call(null,G__26056,G__26057,G__26058,G__26059));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_keys_STAR_,(function (spec,accept,options){
var keys = spec_tools.impl.extract_keys(spec_tools.impl.extract_form(spec));
var G__26061 = cljs.core.cst$sym$clojure$spec$alpha_SLASH_keys_STAR_;
var G__26062 = spec;
var G__26063 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__26061,G__26062,keys){
return (function (p1__26060_SHARP_){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(p1__26060_SHARP_,accept,options);
});})(G__26061,G__26062,keys))
,keys);
var G__26064 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__26061,G__26062,G__26063,G__26064) : accept.call(null,G__26061,G__26062,G__26063,G__26064));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_nilable,(function (spec,accept,options){
var vec__26065 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26065,(0),null);
var inner_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26065,(1),null);
var G__26068 = cljs.core.cst$sym$clojure$spec$alpha_SLASH_nilable;
var G__26069 = spec;
var G__26070 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__26071 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__26068,G__26069,G__26070,G__26071) : accept.call(null,G__26068,G__26069,G__26070,G__26071));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$spec_DASH_tools$core_SLASH_spec,(function (spec,accept,options){
var vec__26072 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26072,(0),null);
var map__26075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26072,(1),null);
var map__26075__$1 = ((((!((map__26075 == null)))?(((((map__26075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26075):map__26075);
var inner_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26075__$1,cljs.core.cst$kw$spec);
var G__26077 = cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_spec;
var G__26078 = spec;
var G__26079 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(inner_spec,accept,options)], null);
var G__26080 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__26077,G__26078,G__26079,G__26080) : accept.call(null,G__26077,G__26078,G__26079,G__26080));
}));
spec_tools.visitor.visit_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_default,(function (spec,accept,options){
var G__26081 = spec_tools.visitor.spec_dispatch(spec,accept,options);
var G__26082 = spec;
var G__26083 = null;
var G__26084 = options;
return (accept.cljs$core$IFn$_invoke$arity$4 ? accept.cljs$core$IFn$_invoke$arity$4(G__26081,G__26082,G__26083,G__26084) : accept.call(null,G__26081,G__26082,G__26083,G__26084));
}));
/**
 * a visitor that collects all registered specs. Returns
 *   a map of spec-name => spec.
 */
spec_tools.visitor.spec_collector = (function spec_tools$visitor$spec_collector(){
var specs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return ((function (specs){
return (function (_,spec,___$1,___$2){
var temp__5718__auto__ = cljs.spec.alpha.get_spec(spec);
if(cljs.core.truth_(temp__5718__auto__)){
var s = temp__5718__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(specs,cljs.core.assoc,spec,s);
} else {
return cljs.core.deref(specs);
}
});
;})(specs))
});
