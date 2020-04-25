// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('reitit.impl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('meta_merge.core');
goog.require('reitit.trie');
goog.require('reitit.exception');
reitit.impl.parse = (function reitit$impl$parse(path,opts){
var path__$1 = reitit.trie.normalize(path,opts);
var path_parts = reitit.trie.split_path(path__$1,opts);
var path_params = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$value,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,path_parts)));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path_DASH_params,path_params,cljs.core.cst$kw$path_DASH_parts,path_parts,cljs.core.cst$kw$path,path__$1], null);
});
reitit.impl.wild_path_QMARK_ = (function reitit$impl$wild_path_QMARK_(path,opts){
return cljs.core.boolean$(cljs.core.seq(cljs.core.cst$kw$path_DASH_params.cljs$core$IFn$_invoke$arity$1(reitit.impl.parse(path,opts))));
});
reitit.impl.__GT_wild_route_QMARK_ = (function reitit$impl$__GT_wild_route_QMARK_(opts){
return (function (p__16198){
var vec__16199 = p__16198;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16199,(0),null);
return cljs.core.boolean$(cljs.core.seq(cljs.core.cst$kw$path_DASH_params.cljs$core$IFn$_invoke$arity$1(reitit.impl.parse(path,opts))));
});
});
/**
 * Applies a function to every value of a map, updates the value if not nil.
 *   Also works on vectors. Maintains key for maps, order for vectors.
 */
reitit.impl.maybe_map_values = (function reitit$impl$maybe_map_values(f,coll){
return cljs.core.reduce_kv((function (coll__$1,k,v){
var temp__5722__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
if((temp__5722__auto__ == null)){
return coll__$1;
} else {
var v_SINGLEQUOTE_ = temp__5722__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coll__$1,k,v_SINGLEQUOTE_);
}
}),coll,coll);
});
reitit.impl.walk = (function reitit$impl$walk(raw_routes,p__16204){
var map__16205 = p__16204;
var map__16205__$1 = ((((!((map__16205 == null)))?(((((map__16205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16205):map__16205);
var opts = map__16205__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16205__$1,cljs.core.cst$kw$path);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16205__$1,cljs.core.cst$kw$data,cljs.core.PersistentVector.EMPTY);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16205__$1,cljs.core.cst$kw$routes,cljs.core.PersistentVector.EMPTY);
var expand = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16205__$1,cljs.core.cst$kw$expand);
var walk_many = ((function (map__16205,map__16205__$1,opts,path,data,routes,expand){
return (function reitit$impl$walk_$_walk_many(p,m,r){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__16205,map__16205__$1,opts,path,data,routes,expand){
return (function (p1__16202_SHARP_,p2__16203_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__16202_SHARP_,walk_one(p,m,p2__16203_SHARP_));
});})(map__16205,map__16205__$1,opts,path,data,routes,expand))
,cljs.core.PersistentVector.EMPTY,r);
});})(map__16205,map__16205__$1,opts,path,data,routes,expand))
;
var walk_one = ((function (map__16205,map__16205__$1,opts,path,data,routes,expand){
return (function reitit$impl$walk_$_walk_one(pacc,macc,routes__$1){
if(cljs.core.vector_QMARK_(cljs.core.first(routes__$1))){
return walk_many(pacc,macc,routes__$1);
} else {
if(typeof cljs.core.first(routes__$1) === 'string'){
var vec__16216 = routes__$1;
var seq__16217 = cljs.core.seq(vec__16216);
var first__16218 = cljs.core.first(seq__16217);
var seq__16217__$1 = cljs.core.next(seq__16217);
var path__$1 = first__16218;
var vec__16219 = seq__16217__$1;
var maybe_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16219,(0),null);
var args = vec__16219;
var vec__16222 = ((((cljs.core.vector_QMARK_(maybe_arg)) || (((cljs.core.sequential_QMARK_(maybe_arg)) && (cljs.core.sequential_QMARK_(cljs.core.first(maybe_arg))))) || ((maybe_arg == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maybe_arg,cljs.core.rest(args)], null));
var data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16222,(0),null);
var childs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16222,(1),null);
var macc__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(macc,(expand.cljs$core$IFn$_invoke$arity$2 ? expand.cljs$core$IFn$_invoke$arity$2(data__$1,opts) : expand.call(null,data__$1,opts)));
var child_routes = walk_many([cljs.core.str.cljs$core$IFn$_invoke$arity$1(pacc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)].join(''),macc__$1,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,childs));
if(cljs.core.seq(childs)){
return cljs.core.seq(child_routes);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pacc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)].join(''),macc__$1], null)], null);
}
} else {
return null;
}
}
});})(map__16205,map__16205__$1,opts,path,data,routes,expand))
;
return walk_one(path,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,data),raw_routes);
});
reitit.impl.map_data = (function reitit$impl$map_data(f,routes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__16225){
var vec__16226 = p__16225;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16226,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16226,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p,ds) : f.call(null,p,ds))], null);
}),routes);
});
reitit.impl.merge_data = (function reitit$impl$merge_data(p,x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__16229){
var vec__16230 = p__16229;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16230,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16230,(1),null);
try{return meta_merge.core.meta_merge.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]));
}catch (e16233){if((e16233 instanceof Error)){
var e = e16233;
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reitit$impl_SLASH_merge_DASH_data,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$path,p,cljs.core.cst$kw$left,acc,cljs.core.cst$kw$right,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]),cljs.core.cst$kw$exception,e], null));
} else {
throw e16233;

}
}}),cljs.core.PersistentArrayMap.EMPTY,x);
});
reitit.impl.resolve_routes = (function reitit$impl$resolve_routes(raw_routes,p__16235){
var map__16236 = p__16235;
var map__16236__$1 = ((((!((map__16236 == null)))?(((((map__16236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16236):map__16236);
var opts = map__16236__$1;
var coerce = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16236__$1,cljs.core.cst$kw$coerce);
var G__16238 = reitit.impl.map_data(reitit.impl.merge_data,reitit.impl.walk(raw_routes,opts));
if(cljs.core.truth_(coerce)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(((function (G__16238,map__16236,map__16236__$1,opts,coerce){
return (function (p1__16234_SHARP_){
return (coerce.cljs$core$IFn$_invoke$arity$2 ? coerce.cljs$core$IFn$_invoke$arity$2(p1__16234_SHARP_,opts) : coerce.call(null,p1__16234_SHARP_,opts));
});})(G__16238,map__16236,map__16236__$1,opts,coerce))
),G__16238);
} else {
return G__16238;
}
});
reitit.impl.path_conflicting_routes = (function reitit$impl$path_conflicting_routes(routes,opts){
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (index,route){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [route,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__16239_SHARP_){
return reitit.trie.conflicting_paths_QMARK_(cljs.core.first(route),cljs.core.first(p1__16239_SHARP_),opts);
})),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(routes,(index + (1))))], null);
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.second))),routes));
});
reitit.impl.unresolved_conflicts = (function reitit$impl$unresolved_conflicts(path_conflicting){
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__16240){
var vec__16241 = p__16240;
var vec__16244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16241,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16244,(0),null);
var route_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16244,(1),null);
var conflicts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16241,(1),null);
var and__3938__auto__ = cljs.core.cst$kw$conflicting.cljs$core$IFn$_invoke$arity$1(route_data);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.every_QMARK_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$conflicting,cljs.core.second),conflicts);
} else {
return and__3938__auto__;
}
})),path_conflicting));
});
reitit.impl.conflicting_paths = (function reitit$impl$conflicting_paths(conflicts){
return cljs.core.set(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4324__auto__ = (function reitit$impl$conflicting_paths_$_iter__16247(s__16248){
return (new cljs.core.LazySeq(null,(function (){
var s__16248__$1 = s__16248;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__16248__$1);
if(temp__5720__auto__){
var s__16248__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16248__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__16248__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__16250 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__16249 = (0);
while(true){
if((i__16249 < size__4323__auto__)){
var vec__16251 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__16249);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16251,(0),null);
var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16251,(1),null);
cljs.core.chunk_append(b__16250,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pc),cljs.core.first(p)));

var G__16257 = (i__16249 + (1));
i__16249 = G__16257;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16250),reitit$impl$conflicting_paths_$_iter__16247(cljs.core.chunk_rest(s__16248__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16250),null);
}
} else {
var vec__16254 = cljs.core.first(s__16248__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16254,(0),null);
var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16254,(1),null);
return cljs.core.cons(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pc),cljs.core.first(p)),reitit$impl$conflicting_paths_$_iter__16247(cljs.core.rest(s__16248__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(conflicts);
})()));
});
reitit.impl.name_conflicting_routes = (function reitit$impl$name_conflicting_routes(routes){
var G__16258 = routes;
var G__16258__$1 = (((G__16258 == null))?null:cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,cljs.core.second),G__16258));
var G__16258__$2 = (((G__16258__$1 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.first),G__16258__$1));
var G__16258__$3 = (((G__16258__$2 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pos_QMARK_,cljs.core.count,cljs.core.butlast,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.second], 0)),G__16258__$2));
var G__16258__$4 = (((G__16258__$3 == null))?null:cljs.core.seq(G__16258__$3));
var G__16258__$5 = (((G__16258__$4 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__16258,G__16258__$1,G__16258__$2,G__16258__$3,G__16258__$4){
return (function (p__16259){
var vec__16260 = p__16259;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16260,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16260,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.set(v)], null);
});})(G__16258,G__16258__$1,G__16258__$2,G__16258__$3,G__16258__$4))
,G__16258__$4));
if((G__16258__$5 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16258__$5);
}
});
reitit.impl.find_names = (function reitit$impl$find_names(routes,_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__16263_SHARP_){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__16263_SHARP_));
})),routes);
});
reitit.impl.compile_route = (function reitit$impl$compile_route(p__16264,p__16265){
var vec__16266 = p__16264;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16266,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16266,(1),null);
var route = vec__16266;
var map__16269 = p__16265;
var map__16269__$1 = ((((!((map__16269 == null)))?(((((map__16269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16269):map__16269);
var opts = map__16269__$1;
var compile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16269__$1,cljs.core.cst$kw$compile);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,m,(cljs.core.truth_(compile)?(compile.cljs$core$IFn$_invoke$arity$2 ? compile.cljs$core$IFn$_invoke$arity$2(route,opts) : compile.call(null,route,opts)):null)], null);
});
reitit.impl.compile_routes = (function reitit$impl$compile_routes(routes,opts){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__16271_SHARP_){
return reitit.impl.compile_route(p1__16271_SHARP_,opts);
}),routes));
});
reitit.impl.uncompile_routes = (function reitit$impl$uncompile_routes(routes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take,(2))),routes);
});
reitit.impl.path_for = (function reitit$impl$path_for(route,path_params){
if(cljs.core.truth_(cljs.core.cst$kw$path_DASH_params.cljs$core$IFn$_invoke$arity$1(route))){
var temp__5718__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,part){
if(typeof part === 'string'){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,part);
} else {
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(path_params,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(part));
if(cljs.core.truth_(temp__5718__auto__)){
var p = temp__5718__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return cljs.core.reduced(null);
}
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$path_DASH_parts.cljs$core$IFn$_invoke$arity$1(route));
if(cljs.core.truth_(temp__5718__auto__)){
var parts = temp__5718__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,parts);
} else {
return null;
}
} else {
return cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(route);
}
});
reitit.impl.throw_on_missing_path_params = (function reitit$impl$throw_on_missing_path_params(template,required,path_params){
if(cljs.core.every_QMARK_((function (p1__16272_SHARP_){
return cljs.core.contains_QMARK_(path_params,p1__16272_SHARP_);
}),required)){
return null;
} else {
var defined = cljs.core.set(cljs.core.keys(path_params));
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(required,defined);
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(["missing path-params for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(template)," -> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(missing)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path_DASH_params,path_params,cljs.core.cst$kw$required,required], null));
}
});
reitit.impl.fast_assoc = (function reitit$impl$fast_assoc(a,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,k,v);
});
reitit.impl.fast_map = (function reitit$impl$fast_map(m){
return m;
});
reitit.impl.fast_get = (function reitit$impl$fast_get(m,k){
return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k));
});
reitit.impl.strip_nils = (function reitit$impl$strip_nils(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),m));
});
reitit.impl.url_encode = (function reitit$impl$url_encode(s){
if(cljs.core.truth_(s)){
return encodeURIComponent(s);
} else {
return null;
}
});
reitit.impl.maybe_url_decode = (function reitit$impl$maybe_url_decode(s){
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});
reitit.impl.url_decode = (function reitit$impl$url_decode(s){
var or__3949__auto__ = reitit.impl.maybe_url_decode(s);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return s;
}
});
reitit.impl.form_encode = (function reitit$impl$form_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(encodeURIComponent(s),"%20","+");
} else {
return null;
}
});
reitit.impl.form_decode = (function reitit$impl$form_decode(s){
if(cljs.core.truth_(s)){
return decodeURIComponent(clojure.string.replace(s,"+"," "));
} else {
return null;
}
});
/**
 * URL-decodes maps and vectors
 */
reitit.impl.url_decode_coll = (function reitit$impl$url_decode_coll(coll){
return reitit.impl.maybe_map_values(reitit.impl.maybe_url_decode,coll);
});

/**
 * @interface
 */
reitit.impl.IntoString = function(){};

reitit.impl.into_string = (function reitit$impl$into_string(_){
if(((!((_ == null))) && (!((_.reitit$impl$IntoString$into_string$arity$1 == null))))){
return _.reitit$impl$IntoString$into_string$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (reitit.impl.into_string[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto__.call(null,_));
} else {
var m__4244__auto____$1 = (reitit.impl.into_string["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4244__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("IntoString.into-string",_);
}
}
}
});

goog.object.set(reitit.impl.IntoString,"string",true);

var G__16274_16289 = reitit.impl.into_string;
var G__16275_16290 = "string";
var G__16276_16291 = ((function (G__16274_16289,G__16275_16290){
return (function (this$){
return this$;
});})(G__16274_16289,G__16275_16290))
;
goog.object.set(G__16274_16289,G__16275_16290,G__16276_16291);

cljs.core.Keyword.prototype.reitit$impl$IntoString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.reitit$impl$IntoString$into_string$arity$1 = (function (this$){
var this$__$1 = this;
var ns = cljs.core.namespace(this$__$1);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(ns)?"/":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(this$__$1))].join('');
});

goog.object.set(reitit.impl.IntoString,"boolean",true);

var G__16277_16292 = reitit.impl.into_string;
var G__16278_16293 = "boolean";
var G__16279_16294 = ((function (G__16277_16292,G__16278_16293){
return (function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
});})(G__16277_16292,G__16278_16293))
;
goog.object.set(G__16277_16292,G__16278_16293,G__16279_16294);

goog.object.set(reitit.impl.IntoString,"number",true);

var G__16280_16295 = reitit.impl.into_string;
var G__16281_16296 = "number";
var G__16282_16297 = ((function (G__16280_16295,G__16281_16296){
return (function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
});})(G__16280_16295,G__16281_16296))
;
goog.object.set(G__16280_16295,G__16281_16296,G__16282_16297);

goog.object.set(reitit.impl.IntoString,"object",true);

var G__16283_16298 = reitit.impl.into_string;
var G__16284_16299 = "object";
var G__16285_16300 = ((function (G__16283_16298,G__16284_16299){
return (function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
});})(G__16283_16298,G__16284_16299))
;
goog.object.set(G__16283_16298,G__16284_16299,G__16285_16300);

goog.object.set(reitit.impl.IntoString,"null",true);

var G__16286_16301 = reitit.impl.into_string;
var G__16287_16302 = "null";
var G__16288_16303 = ((function (G__16286_16301,G__16287_16302){
return (function (_){
return null;
});})(G__16286_16301,G__16287_16302))
;
goog.object.set(G__16286_16301,G__16287_16302,G__16288_16303);
/**
 * Convert parameters' values into URL-encoded strings, suitable for URL paths
 */
reitit.impl.path_params = (function reitit$impl$path_params(params){
return reitit.impl.maybe_map_values((function (p1__16304_SHARP_){
return reitit.impl.url_encode(reitit.impl.into_string(p1__16304_SHARP_));
}),params);
});
reitit.impl.query_parameter = (function reitit$impl$query_parameter(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.form_encode(reitit.impl.into_string(k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.form_encode(reitit.impl.into_string(v)))].join('');
});
/**
 * shallow transform of query parameters into query string
 */
reitit.impl.query_string = (function reitit$impl$query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16305){
var vec__16306 = p__16305;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16306,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16306,(1),null);
if(((cljs.core.sequential_QMARK_(v)) || (cljs.core.set_QMARK_(v)))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$3(reitit.impl.query_parameter,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(k),v));
} else {
return reitit.impl.query_parameter(k,v);
}
}),params));
});
var ret__4565__auto___16315 = (function (){
reitit.impl.goog_extend = (function reitit$impl$goog_extend(var_args){
var args__4534__auto__ = [];
var len__4531__auto___16316 = arguments.length;
var i__4532__auto___16317 = (0);
while(true){
if((i__4532__auto___16317 < len__4531__auto___16316)){
args__4534__auto__.push((arguments[i__4532__auto___16317]));

var G__16318 = (i__4532__auto___16317 + (1));
i__4532__auto___16317 = G__16318;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((5) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((5)),(0),null)):null);
return reitit.impl.goog_extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4535__auto__);
});

reitit.impl.goog_extend.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,base_type,ctor,methods$){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$def,null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),ctor))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$goog_SLASH_inherits,null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,base_type,null,(1),null))], 0)))),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$set_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$$$,null,(1),null)),(new cljs.core.List(null,type,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$reitit$impl_SLASH__DASH_prototype,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(method))].join('')),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),cljs.core.rest(method)))),null,(1),null))], 0))));
}),methods$)], 0))));
});

reitit.impl.goog_extend.cljs$lang$maxFixedArity = (5);

/** @this {Function} */
reitit.impl.goog_extend.cljs$lang$applyTo = (function (seq16309){
var G__16310 = cljs.core.first(seq16309);
var seq16309__$1 = cljs.core.next(seq16309);
var G__16311 = cljs.core.first(seq16309__$1);
var seq16309__$2 = cljs.core.next(seq16309__$1);
var G__16312 = cljs.core.first(seq16309__$2);
var seq16309__$3 = cljs.core.next(seq16309__$2);
var G__16313 = cljs.core.first(seq16309__$3);
var seq16309__$4 = cljs.core.next(seq16309__$3);
var G__16314 = cljs.core.first(seq16309__$4);
var seq16309__$5 = cljs.core.next(seq16309__$4);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16310,G__16311,G__16312,G__16313,G__16314,seq16309__$5);
});

return null;
})()
;
reitit.impl.goog_extend.cljs$lang$macro = true;

