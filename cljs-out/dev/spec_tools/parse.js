// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('spec_tools.parse');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('spec_tools.impl');
goog.require('cljs.spec.alpha');
goog.require('spec_tools.form');
spec_tools.parse.type_dispatch_value = (function spec_tools$parse$type_dispatch_value(type){
var fexpr__19595 = ((cljs.core.sequential_QMARK_(type))?cljs.core.first:cljs.core.identity);
return (fexpr__19595.cljs$core$IFn$_invoke$arity$1 ? fexpr__19595.cljs$core$IFn$_invoke$arity$1(type) : fexpr__19595.call(null,type));
});
spec_tools.parse.collection_type_QMARK_ = (function spec_tools$parse$collection_type_QMARK_(type){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$tuple,null,cljs.core.cst$kw$vector,null,cljs.core.cst$kw$map_DASH_of,null,cljs.core.cst$kw$set,null,cljs.core.cst$kw$map,null], null), null),type);
});
spec_tools.parse.leaf_type_QMARK_ = (function spec_tools$parse$leaf_type_QMARK_(type){
return !(cljs.core.contains_QMARK_((spec_tools.parse.non_leaf_types.cljs$core$IFn$_invoke$arity$0 ? spec_tools.parse.non_leaf_types.cljs$core$IFn$_invoke$arity$0() : spec_tools.parse.non_leaf_types.call(null)),type));
});
/**
 * Parses info out of a spec. Spec can be passed as a name, Spec or a form.
 *   Returns either `nil` or a map, with keys `:type` and other extra keys
 *   (like `:keys` for s/keys specs).
 */
spec_tools.parse.parse_spec = (function spec_tools$parse$parse_spec(x){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_unknown,x)){
return null;
} else {
if(cljs.core.qualified_keyword_QMARK_(x)){
var G__19602 = cljs.spec.alpha.form(cljs.spec.alpha.get_spec(x));
x = G__19602;
continue;
} else {
if((x instanceof cljs.core.Symbol)){
var G__19596 = spec_tools.impl.normalize_symbol(x);
var G__19597 = null;
return (spec_tools.parse.parse_form.cljs$core$IFn$_invoke$arity$2 ? spec_tools.parse.parse_form.cljs$core$IFn$_invoke$arity$2(G__19596,G__19597) : spec_tools.parse.parse_form.call(null,G__19596,G__19597));
} else {
if(cljs.core.seq_QMARK_(x)){
var G__19598 = spec_tools.impl.normalize_symbol(cljs.core.first(x));
var G__19599 = x;
return (spec_tools.parse.parse_form.cljs$core$IFn$_invoke$arity$2 ? spec_tools.parse.parse_form.cljs$core$IFn$_invoke$arity$2(G__19598,G__19599) : spec_tools.parse.parse_form.call(null,G__19598,G__19599));
} else {
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_(x))){
var G__19603 = cljs.spec.alpha.form(x);
x = G__19603;
continue;
} else {
if(cljs.core.ifn_QMARK_(x)){
var G__19600 = (spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1 ? spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1(x) : spec_tools.form.resolve_form.call(null,x));
var G__19601 = null;
return (spec_tools.parse.parse_form.cljs$core$IFn$_invoke$arity$2 ? spec_tools.parse.parse_form.cljs$core$IFn$_invoke$arity$2(G__19600,G__19601) : spec_tools.parse.parse_form.call(null,G__19600,G__19601));
} else {
return (spec_tools.parse.parse_form.cljs$core$IFn$_invoke$arity$2 ? spec_tools.parse.parse_form.cljs$core$IFn$_invoke$arity$2(x,null) : spec_tools.parse.parse_form.call(null,x,null));

}
}
}
}
}
}
break;
}
});
spec_tools.parse.parse_spec_with_spec_ref = (function spec_tools$parse$parse_spec_with_spec_ref(x){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec_tools.parse.parse_spec(x),((cljs.core.qualified_keyword_QMARK_(x))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,x], null):null)], 0));
});
spec_tools.parse.get_keys = (function spec_tools$parse$get_keys(parse_data){
var or__3949__auto__ = cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_keys.cljs$core$IFn$_invoke$arity$1(parse_data);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var G__19604 = parse_data;
var G__19604__$1 = (((G__19604 == null))?null:cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_items.cljs$core$IFn$_invoke$arity$1(G__19604));
var G__19604__$2 = (((G__19604__$1 == null))?null:cljs.core.keep.cljs$core$IFn$_invoke$arity$2(spec_tools.parse.get_keys,G__19604__$1));
var G__19604__$3 = (((G__19604__$2 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,G__19604__$2));
var G__19604__$4 = (((G__19604__$3 == null))?null:cljs.core.seq(G__19604__$3));
if((G__19604__$4 == null)){
return null;
} else {
return cljs.core.set(G__19604__$4);
}
}
});
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.parse !== 'undefined') && (typeof spec_tools.parse.parse_form !== 'undefined')){
} else {
spec_tools.parse.parse_form = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("spec-tools.parse","parse-form"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (dispatch,_){
return dispatch;
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_default,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,null], null);
}));
spec_tools.parse.non_leaf_types = (function spec_tools$parse$non_leaf_types(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$or,null,cljs.core.cst$kw$tuple,null,cljs.core.cst$kw$vector,null,cljs.core.cst$kw$map_DASH_of,null,cljs.core.cst$kw$and,null,cljs.core.cst$kw$set,null,cljs.core.cst$kw$map,null,cljs.core.cst$kw$nilable,null], null), null);
});
spec_tools.parse.types = (function spec_tools$parse$types(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 20, [cljs.core.cst$kw$date,null,cljs.core.cst$kw$long,null,cljs.core.cst$kw$double,null,cljs.core.cst$kw$symbol,null,cljs.core.cst$kw$or,null,cljs.core.cst$kw$tuple,null,cljs.core.cst$kw$string,null,cljs.core.cst$kw$vector,null,cljs.core.cst$kw$spec,null,cljs.core.cst$kw$map_DASH_of,null,cljs.core.cst$kw$keyword,null,cljs.core.cst$kw$ratio,null,cljs.core.cst$kw$bigdec,null,cljs.core.cst$kw$and,null,cljs.core.cst$kw$uri,null,cljs.core.cst$kw$uuid,null,cljs.core.cst$kw$set,null,cljs.core.cst$kw$boolean,null,cljs.core.cst$kw$map,null,cljs.core.cst$kw$nilable,null], null), null);
});
spec_tools.parse.type_symbols = (function spec_tools$parse$type_symbols(){
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.keys(cljs.core.methods$(spec_tools.parse.parse_form))));
});
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_any_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,cljs.core.any_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_some_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,cljs.core.some_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_number_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.number_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$double], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_integer_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.integer_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$long], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_int_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.int_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$long], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_pos_DASH_int_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.pos_int_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$long], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_neg_DASH_int_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.neg_int_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$long], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_nat_DASH_int_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.nat_int_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$long], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_float_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.float_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$double], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_double_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.double_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$double], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_boolean_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.boolean_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$boolean], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_string_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.string_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$string], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_ident_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.ident_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$keyword], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_simple_DASH_ident_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.simple_ident_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$keyword], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_qualified_DASH_ident_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.qualified_ident_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$keyword], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_keyword_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.keyword_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$keyword], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_simple_DASH_keyword_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.simple_keyword_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$keyword], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_qualified_DASH_keyword_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.qualified_keyword_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$keyword], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_symbol_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.symbol_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$symbol], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_simple_DASH_symbol_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.simple_symbol_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$symbol], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_qualified_DASH_symbol_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.qualified_symbol_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$symbol], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_uuid_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.uuid_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$uuid], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_inst_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.inst_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$date], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_seqable_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,cljs.core.seqable_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_indexed_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,cljs.core.indexed_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_map_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,cljs.core.map_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_vector_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,cljs.core.vector_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_list_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,cljs.core.list_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_seq_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,cljs.core.seq_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_char_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,cljs.core.char_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_set_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,cljs.core.set_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_nil_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,cljs.core.nil_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_false_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.false_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$boolean], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_true_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.true_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$boolean], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_zero_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.zero_QMARK_,cljs.core.cst$kw$type,cljs.core.cst$kw$long], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_coll_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,cljs.core.coll_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_empty_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,cljs.core.empty_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_associative_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,cljs.core.associative_QMARK_,cljs.core.cst$kw$type,null], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_sequential_QMARK_,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,cljs.core.sequential_QMARK_], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$clojure$spec$alpha_SLASH_unknown,(function (_,___$1){
return null;
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_keys,(function (_,form){
var map__19605 = spec_tools.impl.parse_keys(form);
var map__19605__$1 = ((((!((map__19605 == null)))?(((((map__19605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19605):map__19605);
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19605__$1,cljs.core.cst$kw$req);
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19605__$1,cljs.core.cst$kw$opt);
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19605__$1,cljs.core.cst$kw$req_DASH_un);
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19605__$1,cljs.core.cst$kw$opt_DASH_un);
var key__GT_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19605__$1,cljs.core.cst$kw$key_DASH__GT_spec);
var G__19607 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$map,cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_key_DASH__GT_spec,key__GT_spec,cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_keys,cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(req,opt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req_un,opt_un], 0)))], null);
var G__19607__$1 = (cljs.core.truth_((function (){var or__3949__auto__ = req;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return req_un;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19607,cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_keys_DASH_req,cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req,req_un))):G__19607);
if(cljs.core.truth_((function (){var or__3949__auto__ = opt;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return opt_un;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19607__$1,cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_keys_DASH_opt,cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(opt,opt_un)));
} else {
return G__19607__$1;
}
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_or,(function (_,form){
var specs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(spec_tools.parse.parse_spec_with_spec_ref,cljs.core.second),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(form)));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$or,cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type,specs))))], null),cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_items,specs], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_and,(function (_,form){
var specs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(spec_tools.parse.parse_spec_with_spec_ref,cljs.core.rest(form));
var types = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type,specs))));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$and,types], null),cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_items,specs], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_merge,(function (_,form){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.deep_merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.parse.parse_spec,cljs.core.rest(form)));
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_every,(function (_,form){
var map__19608 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),form));
var map__19608__$1 = ((((!((map__19608 == null)))?(((((map__19608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19608):map__19608);
var into = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19608__$1,cljs.core.cst$kw$into);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_item,spec_tools.parse.parse_spec(cljs.core.second(form)),cljs.core.cst$kw$type,((cljs.core.map_QMARK_(into))?cljs.core.cst$kw$map_DASH_of:((cljs.core.set_QMARK_(into))?cljs.core.cst$kw$set:cljs.core.cst$kw$vector
))], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_coll_DASH_of,(function (_,form){
var map__19610 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),form));
var map__19610__$1 = ((((!((map__19610 == null)))?(((((map__19610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19610):map__19610);
var into = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19610__$1,cljs.core.cst$kw$into);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_item,spec_tools.parse.parse_spec_with_spec_ref(cljs.core.second(form)),cljs.core.cst$kw$type,((cljs.core.map_QMARK_(into))?cljs.core.cst$kw$map_DASH_of:((cljs.core.set_QMARK_(into))?cljs.core.cst$kw$set:cljs.core.cst$kw$vector
))], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_map_DASH_of,(function (_,p__19612){
var vec__19613 = p__19612;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19613,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19613,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19613,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$map_DASH_of,cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_key,spec_tools.parse.parse_spec_with_spec_ref(k),cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_value,spec_tools.parse.parse_spec_with_spec_ref(v)], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$spec_DASH_tools$core_SLASH_spec,(function (_,form){
var parsed = spec_tools.parse.parse_spec(cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(cljs.core.last(form)));
if(cljs.core.truth_(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(parsed))){
return parsed;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$spec], null);
}
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_tuple,(function (_,p__19616){
var vec__19617 = p__19616;
var seq__19618 = cljs.core.seq(vec__19617);
var first__19619 = cljs.core.first(seq__19618);
var seq__19618__$1 = cljs.core.next(seq__19618);
var ___$1 = first__19619;
var values = seq__19618__$1;
var specs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(spec_tools.parse.parse_spec_with_spec_ref,values);
var types = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type,specs);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tuple,types], null),cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_items,specs], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_nilable,(function (_,form){
var spec = spec_tools.parse.parse_spec_with_spec_ref(cljs.core.second(form));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$nilable,cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_item,spec], null);
}));
spec_tools.parse.parse_form.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$spec_DASH_tools$core_SLASH_merge,(function (_,form){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.deep_merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.parse.parse_spec,cljs.core.rest(form)));
}));
