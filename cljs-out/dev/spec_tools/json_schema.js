// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('spec_tools.json_schema');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('spec_tools.visitor');
goog.require('spec_tools.parse');
goog.require('spec_tools.impl');
goog.require('spec_tools.core');
spec_tools.json_schema.only_entry_QMARK_ = (function spec_tools$json_schema$only_entry_QMARK_(key,a_map){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.keys(a_map));
});
spec_tools.json_schema.simplify_all_of = (function spec_tools$json_schema$simplify_all_of(spec){
var subspecs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.cst$kw$allOf.cljs$core$IFn$_invoke$arity$1(spec));
if(cljs.core.empty_QMARK_(subspecs)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec,cljs.core.cst$kw$allOf);
} else {
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(subspecs),(1));
if(and__3938__auto__){
return spec_tools.json_schema.only_entry_QMARK_(cljs.core.cst$kw$allOf,spec);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.first(subspecs);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$allOf,subspecs);

}
}
});
spec_tools.json_schema.spec_dispatch = (function spec_tools$json_schema$spec_dispatch(dispatch,_,___$1,___$2){
return dispatch;
});
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.json_schema !== 'undefined') && (typeof spec_tools.json_schema.accept_spec !== 'undefined')){
} else {
spec_tools.json_schema.accept_spec = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$spec_DASH_tools$json_DASH_schema_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("spec-tools.json-schema","accept-spec"),spec_tools.json_schema.spec_dispatch,cljs.core.cst$kw$spec_DASH_tools$json_DASH_schema_SLASH_default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
spec_tools.json_schema.transform = (function spec_tools$json_schema$transform(var_args){
var G__26088 = arguments.length;
switch (G__26088) {
case 1:
return spec_tools.json_schema.transform.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return spec_tools.json_schema.transform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

spec_tools.json_schema.transform.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return spec_tools.json_schema.transform.cljs$core$IFn$_invoke$arity$2(spec,null);
});

spec_tools.json_schema.transform.cljs$core$IFn$_invoke$arity$2 = (function (spec,options){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(spec,spec_tools.json_schema.accept_spec,options);
});

spec_tools.json_schema.transform.cljs$lang$maxFixedArity = 2;

spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_any_QMARK_,(function (_,___$1,___$2,___$3){
return cljs.core.PersistentArrayMap.EMPTY;
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_some_QMARK_,(function (_,___$1,___$2,___$3){
return cljs.core.PersistentArrayMap.EMPTY;
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_number_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$format,"double"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_pos_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$minimum,(0),cljs.core.cst$kw$exclusiveMinimum,true], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_neg_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$maximum,(0),cljs.core.cst$kw$exclusiveMaximum,true], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_integer_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"integer"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_int_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$format,"int64"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_pos_DASH_int_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$format,"int64",cljs.core.cst$kw$minimum,(1)], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_neg_DASH_int_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$format,"int64",cljs.core.cst$kw$maximum,(-1)], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_nat_DASH_int_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"integer",cljs.core.cst$kw$format,"int64",cljs.core.cst$kw$minimum,(0)], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_float_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"number"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_double_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"number"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_boolean_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"boolean"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_string_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"string"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_ident_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"string"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_simple_DASH_ident_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"string"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_qualified_DASH_ident_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"string"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_keyword_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"string"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_simple_DASH_keyword_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"string"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_qualified_DASH_keyword_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"string"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_symbol_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"string"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_simple_DASH_symbol_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"string"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_qualified_DASH_symbol_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"string"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_uuid_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"string",cljs.core.cst$kw$format,"uuid"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_uri_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"string",cljs.core.cst$kw$format,"uri"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_decimal_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$format,"double"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_inst_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"string",cljs.core.cst$kw$format,"date-time"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_seqable_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"array"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_map_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"array"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_map_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"object"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_vector_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"array"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_list_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"array"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_seq_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"array"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_char_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"string"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_set_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"array",cljs.core.cst$kw$uniqueItems,true], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_nil_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"null"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_false_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"boolean"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_true_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"boolean"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_zero_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"integer"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_coll_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"object"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_empty_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"array",cljs.core.cst$kw$maxItems,(0),cljs.core.cst$kw$minItems,(0)], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_associative_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"object"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_sequential_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"array"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_ratio_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"integer"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$core_SLASH_ratio_QMARK_,(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"string",cljs.core.cst$kw$format,"byte"], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_set,(function (dispatch,spec,children,_){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$enum,children], null);
}));
spec_tools.json_schema.maybe_with_title = (function spec_tools$json_schema$maybe_with_title(schema,spec){
var temp__5718__auto__ = spec_tools.core.spec_name(spec);
if(cljs.core.truth_(temp__5718__auto__)){
var title = temp__5718__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schema,cljs.core.cst$kw$title,spec_tools.impl.qualified_name(title));
} else {
return schema;
}
});
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_keys,(function (_,spec,children,___$1){
var map__26090 = spec_tools.impl.parse_keys(spec_tools.impl.extract_form(spec));
var map__26090__$1 = ((((!((map__26090 == null)))?(((((map__26090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26090):map__26090);
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26090__$1,cljs.core.cst$kw$req);
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26090__$1,cljs.core.cst$kw$req_DASH_un);
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26090__$1,cljs.core.cst$kw$opt);
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26090__$1,cljs.core.cst$kw$opt_DASH_un);
var names_un = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_un,opt_un));
var names = cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.qualified_name,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req,opt));
var required = cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.qualified_name,req);
var required_un = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,req_un);
var all_required = cljs.core.not_empty(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required,required_un));
return spec_tools.json_schema.maybe_with_title(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"object",cljs.core.cst$kw$properties,cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(names,names_un),children)], null),(cljs.core.truth_(all_required)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$required,cljs.core.vec(all_required)], null):null)], 0)),spec);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_or,(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$anyOf,children], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_and,(function (_,___$1,children,___$2){
return spec_tools.json_schema.simplify_all_of(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$allOf,children], null));
}));
spec_tools.json_schema.accept_merge = (function spec_tools$json_schema$accept_merge(children){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"object",cljs.core.cst$kw$properties,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$properties,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(children,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$anyOf,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$allOf,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0))], 0)))),cljs.core.cst$kw$required,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.sorted_set(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$required,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(children,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$allOf,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0))))))], null);
});
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_merge,(function (_,___$1,children,___$2){
return spec_tools.json_schema.accept_merge(children);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$spec_DASH_tools$core_SLASH_merge,(function (_,___$1,children,___$2){
return spec_tools.json_schema.accept_merge(children);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_every,(function (_,spec,children,___$1){
var form = spec_tools.impl.extract_form(spec);
var map__26092 = spec_tools.parse.parse_spec(form);
var map__26092__$1 = ((((!((map__26092 == null)))?(((((map__26092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26092):map__26092);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26092__$1,cljs.core.cst$kw$type);
var G__26094 = type;
var G__26094__$1 = (((G__26094 instanceof cljs.core.Keyword))?G__26094.fqn:null);
switch (G__26094__$1) {
case "map":
return spec_tools.json_schema.maybe_with_title(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"object",cljs.core.cst$kw$additionalProperties,spec_tools.impl.unwrap(children)], null),spec);

break;
case "set":
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"array",cljs.core.cst$kw$uniqueItems,true,cljs.core.cst$kw$items,spec_tools.impl.unwrap(children)], null);

break;
case "vector":
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"array",cljs.core.cst$kw$items,spec_tools.impl.unwrap(children)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26094__$1)].join('')));

}
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_every_DASH_kv,(function (_,spec,children,___$1){
return spec_tools.json_schema.maybe_with_title(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"object",cljs.core.cst$kw$additionalProperties,cljs.core.second(children)], null),spec);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_map_DASH_of,(function (_,spec,children,___$1){
return spec_tools.json_schema.maybe_with_title(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"object",cljs.core.cst$kw$additionalProperties,cljs.core.second(children)], null),spec);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_set_DASH_of,(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"array",cljs.core.cst$kw$items,spec_tools.impl.unwrap(children),cljs.core.cst$kw$uniqueItems,true], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_vector_DASH_of,(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"array",cljs.core.cst$kw$items,spec_tools.impl.unwrap(children)], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH__STAR_,(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"array",cljs.core.cst$kw$items,spec_tools.impl.unwrap(children)], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH__PLUS_,(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"array",cljs.core.cst$kw$items,spec_tools.impl.unwrap(children),cljs.core.cst$kw$minItems,(1)], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH__QMARK_,(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"array",cljs.core.cst$kw$items,spec_tools.impl.unwrap(children),cljs.core.cst$kw$minItems,(0)], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_alt,(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$anyOf,children], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_cat,(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"array",cljs.core.cst$kw$items,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$anyOf,children], null)], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_tuple,(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"array",cljs.core.cst$kw$items,children], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_nilable,(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$oneOf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec_tools.impl.unwrap(children),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,"null"], null)], null)], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clojure$spec$alpha_SLASH_int_DASH_in_DASH_range_QMARK_,(function (_,spec,___$1,___$2){
var vec__26096 = spec_tools.impl.strip_fn_if_needed(spec);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26096,(0),null);
var minimum = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26096,(1),null);
var maximum = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26096,(2),null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26096,(3),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$minimum,minimum,cljs.core.cst$kw$maximum,maximum], null);
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$spec_DASH_tools$visitor_SLASH_spec,(function (_,spec,children,___$1){
var vec__26099 = spec_tools.impl.extract_form(spec);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26099,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26099,(1),null);
var name = spec_tools.core.spec_name(spec);
var synthetic_QMARK_ = cljs.core.cst$kw$spec_DASH_tools$core_SLASH_synthetic_QMARK_.cljs$core$IFn$_invoke$arity$1(spec_tools.core.get_spec(spec));
var json_schema_meta = spec_tools.impl.unlift_keys(data,"json-schema");
var extra_info = (function (){var G__26102 = cljs.core.select_keys(data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$description], null));
if(cljs.core.truth_((function (){var and__3938__auto__ = name;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not(synthetic_QMARK_);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26102,cljs.core.cst$kw$title,spec_tools.impl.qualified_name(name));
} else {
return G__26102;
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec_tools.impl.unwrap(children),extra_info,json_schema_meta], 0));
}));
spec_tools.json_schema.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$spec_DASH_tools$json_DASH_schema_SLASH_default,(function (_,___$1,___$2,___$3){
return cljs.core.PersistentArrayMap.EMPTY;
}));
