// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('reitit.coercion.spec');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('spec_tools.core');
goog.require('spec_tools.data_spec');
goog.require('spec_tools.swagger.core');
goog.require('reitit.coercion');
goog.require('clojure.set');
reitit.coercion.spec.string_transformer = spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec_tools.core.strip_extra_keys_transformer,spec_tools.core.string_transformer], 0));
reitit.coercion.spec.json_transformer = spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec_tools.core.strip_extra_keys_transformer,spec_tools.core.json_transformer], 0));
reitit.coercion.spec.strip_extra_keys_transformer = spec_tools.core.strip_extra_keys_transformer;
reitit.coercion.spec.no_op_transformer = (function (){
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.spec !== 'undefined') && (typeof reitit.coercion.spec.t_reitit$coercion$spec26295 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {spec_tools.core.Transformer}
 * @implements {cljs.core.IWithMeta}
*/
reitit.coercion.spec.t_reitit$coercion$spec26295 = (function (meta26296){
this.meta26296 = meta26296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.coercion.spec.t_reitit$coercion$spec26295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26297,meta26296__$1){
var self__ = this;
var _26297__$1 = this;
return (new reitit.coercion.spec.t_reitit$coercion$spec26295(meta26296__$1));
});

reitit.coercion.spec.t_reitit$coercion$spec26295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26297){
var self__ = this;
var _26297__$1 = this;
return self__.meta26296;
});

reitit.coercion.spec.t_reitit$coercion$spec26295.prototype.spec_tools$core$Transformer$ = cljs.core.PROTOCOL_SENTINEL;

reitit.coercion.spec.t_reitit$coercion$spec26295.prototype.spec_tools$core$Transformer$_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$reitit$coercion$spec_SLASH_no_DASH_op;
});

reitit.coercion.spec.t_reitit$coercion$spec26295.prototype.spec_tools$core$Transformer$_encoder$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return null;
});

reitit.coercion.spec.t_reitit$coercion$spec26295.prototype.spec_tools$core$Transformer$_decoder$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return null;
});

reitit.coercion.spec.t_reitit$coercion$spec26295.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta26296], null);
});

reitit.coercion.spec.t_reitit$coercion$spec26295.cljs$lang$type = true;

reitit.coercion.spec.t_reitit$coercion$spec26295.cljs$lang$ctorStr = "reitit.coercion.spec/t_reitit$coercion$spec26295";

reitit.coercion.spec.t_reitit$coercion$spec26295.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"reitit.coercion.spec/t_reitit$coercion$spec26295");
});

/**
 * Positional factory function for reitit.coercion.spec/t_reitit$coercion$spec26295.
 */
reitit.coercion.spec.__GT_t_reitit$coercion$spec26295 = (function reitit$coercion$spec$__GT_t_reitit$coercion$spec26295(meta26296){
return (new reitit.coercion.spec.t_reitit$coercion$spec26295(meta26296));
});

}

return (new reitit.coercion.spec.t_reitit$coercion$spec26295(cljs.core.PersistentArrayMap.EMPTY));
})()
;

/**
 * @interface
 */
reitit.coercion.spec.IntoSpec = function(){};

reitit.coercion.spec.into_spec = (function reitit$coercion$spec$into_spec(this$,name){
if(((!((this$ == null))) && (!((this$.reitit$coercion$spec$IntoSpec$into_spec$arity$2 == null))))){
return this$.reitit$coercion$spec$IntoSpec$into_spec$arity$2(this$,name);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.coercion.spec.into_spec[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__4244__auto__.call(null,this$,name));
} else {
var m__4244__auto____$1 = (reitit.coercion.spec.into_spec["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,name) : m__4244__auto____$1.call(null,this$,name));
} else {
throw cljs.core.missing_protocol("IntoSpec.into-spec",this$);
}
}
}
});

reitit.coercion.spec.ensure_name = (function reitit$coercion$spec$ensure_name(_QMARK_name){
var or__3949__auto__ = _QMARK_name;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("spec",cljs.core.name(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("")));
}
});
cljs.core.PersistentArrayMap.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(reitit.coercion.spec.ensure_name(name),this$__$1),cljs.core.cst$kw$name);
});

cljs.core.PersistentHashMap.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(reitit.coercion.spec.ensure_name(name),this$__$1),cljs.core.cst$kw$name);
});

cljs.core.PersistentVector.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(reitit.coercion.spec.ensure_name(name),this$__$1),cljs.core.cst$kw$name);
});

spec_tools.data_spec.Maybe.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL;

spec_tools.data_spec.Maybe.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(reitit.coercion.spec.ensure_name(name),this$__$1);
});

spec_tools.core.Spec.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL;

spec_tools.core.Spec.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
});

goog.object.set(reitit.coercion.spec.IntoSpec,"_",true);

var G__26298_26304 = reitit.coercion.spec.into_spec;
var G__26299_26305 = "_";
var G__26300_26306 = ((function (G__26298_26304,G__26299_26305){
return (function (this$,_){
return spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,this$], null));
});})(G__26298_26304,G__26299_26305))
;
goog.object.set(G__26298_26304,G__26299_26305,G__26300_26306);

goog.object.set(reitit.coercion.spec.IntoSpec,"null",true);

var G__26301_26307 = reitit.coercion.spec.into_spec;
var G__26302_26308 = "null";
var G__26303_26309 = ((function (G__26301_26307,G__26302_26308){
return (function (this$,_){
return null;
});})(G__26301_26307,G__26302_26308))
;
goog.object.set(G__26301_26307,G__26302_26308,G__26303_26309);
reitit.coercion.spec.stringify_pred = (function reitit$coercion$spec$stringify_pred(pred){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.seq_QMARK_(pred))?cljs.core.seq(pred):pred))].join('');
});
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.spec !== 'undefined') && (typeof reitit.coercion.spec.coerce_response_QMARK_ !== 'undefined')){
} else {
reitit.coercion.spec.coerce_response_QMARK_ = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$reitit$coercion$spec_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reitit.coercion.spec","coerce-response?"),cljs.core.identity,cljs.core.cst$kw$reitit$coercion$spec_SLASH_default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
reitit.coercion.spec.coerce_response_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$reitit$coercion$spec_SLASH_default,(function (_){
return true;
}));
reitit.coercion.spec.default_options = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$coerce_DASH_response_QMARK_,reitit.coercion.spec.coerce_response_QMARK_,cljs.core.cst$kw$transformers,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$body,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$default,reitit.coercion.spec.strip_extra_keys_transformer,cljs.core.cst$kw$formats,new cljs.core.PersistentArrayMap(null, 1, ["application/json",reitit.coercion.spec.json_transformer], null)], null),cljs.core.cst$kw$string,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,reitit.coercion.spec.string_transformer], null),cljs.core.cst$kw$response,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,reitit.coercion.spec.no_op_transformer], null)], null)], null);
reitit.coercion.spec.create = (function reitit$coercion$spec$create(p__26312){
var map__26313 = p__26312;
var map__26313__$1 = ((((!((map__26313 == null)))?(((((map__26313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26313):map__26313);
var opts = map__26313__$1;
var transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26313__$1,cljs.core.cst$kw$transformers);
var coerce_response_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26313__$1,cljs.core.cst$kw$coerce_DASH_response_QMARK_);
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.spec !== 'undefined') && (typeof reitit.coercion.spec.t_reitit$coercion$spec26315 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {reitit.coercion.Coercion}
*/
reitit.coercion.spec.t_reitit$coercion$spec26315 = (function (p__26312,map__26313,opts,transformers,coerce_response_QMARK_,meta26316){
this.p__26312 = p__26312;
this.map__26313 = map__26313;
this.opts = opts;
this.transformers = transformers;
this.coerce_response_QMARK_ = coerce_response_QMARK_;
this.meta26316 = meta26316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.coercion.spec.t_reitit$coercion$spec26315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_){
return (function (_26317,meta26316__$1){
var self__ = this;
var _26317__$1 = this;
return (new reitit.coercion.spec.t_reitit$coercion$spec26315(self__.p__26312,self__.map__26313,self__.opts,self__.transformers,self__.coerce_response_QMARK_,meta26316__$1));
});})(map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_))
;

reitit.coercion.spec.t_reitit$coercion$spec26315.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_){
return (function (_26317){
var self__ = this;
var _26317__$1 = this;
return self__.meta26316;
});})(map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_))
;

reitit.coercion.spec.t_reitit$coercion$spec26315.prototype.reitit$coercion$Coercion$ = cljs.core.PROTOCOL_SENTINEL;

reitit.coercion.spec.t_reitit$coercion$spec26315.prototype.reitit$coercion$Coercion$_get_name$arity$1 = ((function (map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$spec;
});})(map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_))
;

reitit.coercion.spec.t_reitit$coercion$spec26315.prototype.reitit$coercion$Coercion$_get_options$arity$1 = ((function (map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_))
;

reitit.coercion.spec.t_reitit$coercion$spec26315.prototype.reitit$coercion$Coercion$_get_apidocs$arity$3 = ((function (map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_){
return (function (this$,specification,p__26318){
var self__ = this;
var map__26319 = p__26318;
var map__26319__$1 = ((((!((map__26319 == null)))?(((((map__26319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26319):map__26319);
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26319__$1,cljs.core.cst$kw$parameters);
var responses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26319__$1,cljs.core.cst$kw$responses);
var this$__$1 = this;
var G__26321 = specification;
var G__26321__$1 = (((G__26321 instanceof cljs.core.Keyword))?G__26321.fqn:null);
switch (G__26321__$1) {
case "swagger":
return spec_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(parameters)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec_DASH_tools$swagger$core_SLASH_parameters,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(parameters),(function (){var iter__4324__auto__ = ((function (G__26321,G__26321__$1,this$__$1,map__26319,map__26319__$1,parameters,responses,map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_){
return (function reitit$coercion$spec$create_$_iter__26322(s__26323){
return (new cljs.core.LazySeq(null,((function (G__26321,G__26321__$1,this$__$1,map__26319,map__26319__$1,parameters,responses,map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_){
return (function (){
var s__26323__$1 = s__26323;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26323__$1);
if(temp__5720__auto__){
var s__26323__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26323__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__26323__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__26325 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__26324 = (0);
while(true){
if((i__26324 < size__4323__auto__)){
var vec__26326 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__26324);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26326,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26326,(1),null);
cljs.core.chunk_append(b__26325,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,v,null)], null));

var G__26345 = (i__26324 + (1));
i__26324 = G__26345;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26325),reitit$coercion$spec$create_$_iter__26322(cljs.core.chunk_rest(s__26323__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26325),null);
}
} else {
var vec__26329 = cljs.core.first(s__26323__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26329,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26329,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,v,null)], null),reitit$coercion$spec$create_$_iter__26322(cljs.core.rest(s__26323__$2)));
}
} else {
return null;
}
break;
}
});})(G__26321,G__26321__$1,this$__$1,map__26319,map__26319__$1,parameters,responses,map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_))
,null,null));
});})(G__26321,G__26321__$1,this$__$1,map__26319,map__26319__$1,parameters,responses,map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_))
;
return iter__4324__auto__(parameters);
})())], null):null),(cljs.core.truth_(responses)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec_DASH_tools$swagger$core_SLASH_responses,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(responses),(function (){var iter__4324__auto__ = ((function (G__26321,G__26321__$1,this$__$1,map__26319,map__26319__$1,parameters,responses,map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_){
return (function reitit$coercion$spec$create_$_iter__26332(s__26333){
return (new cljs.core.LazySeq(null,((function (G__26321,G__26321__$1,this$__$1,map__26319,map__26319__$1,parameters,responses,map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_){
return (function (){
var s__26333__$1 = s__26333;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26333__$1);
if(temp__5720__auto__){
var s__26333__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26333__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__26333__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__26335 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__26334 = (0);
while(true){
if((i__26334 < size__4323__auto__)){
var vec__26336 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__26334);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26336,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26336,(1),null);
cljs.core.chunk_append(b__26335,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var $ = response;
var $__$1 = clojure.set.rename_keys($,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$body,cljs.core.cst$kw$schema], null));
if(cljs.core.truth_(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1($__$1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3($__$1,cljs.core.cst$kw$schema,((function (i__26334,$,$__$1,vec__26336,k,response,c__4322__auto__,size__4323__auto__,b__26335,s__26333__$2,temp__5720__auto__,G__26321,G__26321__$1,this$__$1,map__26319,map__26319__$1,parameters,responses,map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_){
return (function (p1__26310_SHARP_){
return this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,p1__26310_SHARP_,null);
});})(i__26334,$,$__$1,vec__26336,k,response,c__4322__auto__,size__4323__auto__,b__26335,s__26333__$2,temp__5720__auto__,G__26321,G__26321__$1,this$__$1,map__26319,map__26319__$1,parameters,responses,map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_))
);
} else {
return $__$1;
}
})()], null));

var G__26346 = (i__26334 + (1));
i__26334 = G__26346;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26335),reitit$coercion$spec$create_$_iter__26332(cljs.core.chunk_rest(s__26333__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26335),null);
}
} else {
var vec__26339 = cljs.core.first(s__26333__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26339,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26339,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var $ = response;
var $__$1 = clojure.set.rename_keys($,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$body,cljs.core.cst$kw$schema], null));
if(cljs.core.truth_(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1($__$1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3($__$1,cljs.core.cst$kw$schema,((function ($,$__$1,vec__26339,k,response,s__26333__$2,temp__5720__auto__,G__26321,G__26321__$1,this$__$1,map__26319,map__26319__$1,parameters,responses,map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_){
return (function (p1__26310_SHARP_){
return this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,p1__26310_SHARP_,null);
});})($,$__$1,vec__26339,k,response,s__26333__$2,temp__5720__auto__,G__26321,G__26321__$1,this$__$1,map__26319,map__26319__$1,parameters,responses,map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_))
);
} else {
return $__$1;
}
})()], null),reitit$coercion$spec$create_$_iter__26332(cljs.core.rest(s__26333__$2)));
}
} else {
return null;
}
break;
}
});})(G__26321,G__26321__$1,this$__$1,map__26319,map__26319__$1,parameters,responses,map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_))
,null,null));
});})(G__26321,G__26321__$1,this$__$1,map__26319,map__26319__$1,parameters,responses,map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_))
;
return iter__4324__auto__(responses);
})())], null):null)], 0)));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't produce Spec apidocs for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(specification)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$specification,specification,cljs.core.cst$kw$coercion,cljs.core.cst$kw$spec], null));

}
});})(map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_))
;

reitit.coercion.spec.t_reitit$coercion$spec26315.prototype.reitit$coercion$Coercion$_compile_model$arity$3 = ((function (map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_){
return (function (_,model,name){
var self__ = this;
var ___$1 = this;
return reitit.coercion.spec.into_spec(model,name);
});})(map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_))
;

reitit.coercion.spec.t_reitit$coercion$spec26315.prototype.reitit$coercion$Coercion$_open_model$arity$2 = ((function (map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_){
return (function (_,spec){
var self__ = this;
var ___$1 = this;
return spec;
});})(map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_))
;

reitit.coercion.spec.t_reitit$coercion$spec26315.prototype.reitit$coercion$Coercion$_encode_error$arity$2 = ((function (map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_){
return (function (_,error){
var self__ = this;
var ___$1 = this;
var problems = cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$problems.cljs$core$IFn$_invoke$arity$1(error));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(error,cljs.core.cst$kw$spec,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.spec.alpha.form)),cljs.core.cst$kw$problems,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (problems,___$1,map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_){
return (function (p1__26311_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__26311_SHARP_,cljs.core.cst$kw$pred,reitit.coercion.spec.stringify_pred);
});})(problems,___$1,map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_))
,problems));
});})(map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_))
;

reitit.coercion.spec.t_reitit$coercion$spec26315.prototype.reitit$coercion$Coercion$_request_coercer$arity$3 = ((function (map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_){
return (function (this$,type,spec){
var self__ = this;
var this$__$1 = this;
var spec__$1 = this$__$1.reitit$coercion$Coercion$_compile_model$arity$3(null,spec,null);
var map__26342 = (self__.transformers.cljs$core$IFn$_invoke$arity$1 ? self__.transformers.cljs$core$IFn$_invoke$arity$1(type) : self__.transformers.call(null,type));
var map__26342__$1 = ((((!((map__26342 == null)))?(((((map__26342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26342):map__26342);
var formats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26342__$1,cljs.core.cst$kw$formats);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26342__$1,cljs.core.cst$kw$default);
return ((function (spec__$1,map__26342,map__26342__$1,formats,default$,this$__$1,map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_){
return (function (value,format){
var temp__5718__auto__ = (function (){var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(formats,format);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return default$;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var transformer = temp__5718__auto__;
var coerced = spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$3(spec__$1,value,transformer);
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,coerced))){
return coerced;
} else {
var transformed = spec_tools.core.conform.cljs$core$IFn$_invoke$arity$3(spec__$1,coerced,transformer);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(transformed))){
var problems = spec_tools.core.explain_data.cljs$core$IFn$_invoke$arity$3(spec__$1,coerced,transformer);
return reitit.coercion.map__GT_CoercionError(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$spec,spec__$1,cljs.core.cst$kw$problems,problems], null));
} else {
return cljs.spec.alpha.unform(spec__$1,transformed);
}
}
} else {
return value;
}
});
;})(spec__$1,map__26342,map__26342__$1,formats,default$,this$__$1,map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_))
});})(map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_))
;

reitit.coercion.spec.t_reitit$coercion$spec26315.prototype.reitit$coercion$Coercion$_response_coercer$arity$2 = ((function (map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_){
return (function (this$,spec){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.coerce_response_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.coerce_response_QMARK_.cljs$core$IFn$_invoke$arity$1(spec) : self__.coerce_response_QMARK_.call(null,spec)))){
return this$__$1.reitit$coercion$Coercion$_request_coercer$arity$3(null,cljs.core.cst$kw$response,spec);
} else {
return null;
}
});})(map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_))
;

reitit.coercion.spec.t_reitit$coercion$spec26315.getBasis = ((function (map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p__26312,cljs.core.cst$sym$map__26313,cljs.core.cst$sym$opts,cljs.core.cst$sym$transformers,cljs.core.cst$sym$coerce_DASH_response_QMARK_,cljs.core.cst$sym$meta26316], null);
});})(map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_))
;

reitit.coercion.spec.t_reitit$coercion$spec26315.cljs$lang$type = true;

reitit.coercion.spec.t_reitit$coercion$spec26315.cljs$lang$ctorStr = "reitit.coercion.spec/t_reitit$coercion$spec26315";

reitit.coercion.spec.t_reitit$coercion$spec26315.cljs$lang$ctorPrWriter = ((function (map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"reitit.coercion.spec/t_reitit$coercion$spec26315");
});})(map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_))
;

/**
 * Positional factory function for reitit.coercion.spec/t_reitit$coercion$spec26315.
 */
reitit.coercion.spec.__GT_t_reitit$coercion$spec26315 = ((function (map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_){
return (function reitit$coercion$spec$create_$___GT_t_reitit$coercion$spec26315(p__26312__$1,map__26313__$2,opts__$1,transformers__$1,coerce_response_QMARK___$1,meta26316){
return (new reitit.coercion.spec.t_reitit$coercion$spec26315(p__26312__$1,map__26313__$2,opts__$1,transformers__$1,coerce_response_QMARK___$1,meta26316));
});})(map__26313,map__26313__$1,opts,transformers,coerce_response_QMARK_))
;

}

return (new reitit.coercion.spec.t_reitit$coercion$spec26315(p__26312,map__26313__$1,opts,transformers,coerce_response_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$coercion_SLASH_coercion], null)));
});
reitit.coercion.spec.coercion = reitit.coercion.spec.create(reitit.coercion.spec.default_options);
