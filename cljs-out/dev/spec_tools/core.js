// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('spec_tools.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('spec_tools.impl');
goog.require('spec_tools.parse');
goog.require('spec_tools.form');
goog.require('clojure.set');
goog.require('spec_tools.transform');
goog.require('cljs.spec.alpha');
goog.require('goog.date.UtcDateTime');
goog.require('cljs.reader');
goog.require('cljs.spec.gen.alpha');
spec_tools.core.registry = (function spec_tools$core$registry(var_args){
var G__25791 = arguments.length;
switch (G__25791) {
case 0:
return spec_tools.core.registry.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return spec_tools.core.registry.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

spec_tools.core.registry.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.spec.alpha.registry();
});

spec_tools.core.registry.cljs$core$IFn$_invoke$arity$1 = (function (re){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25789_SHARP_){
return cljs.core.re_matches(re,cljs.core.subs.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__25789_SHARP_))].join(''),(1)));
}),cljs.spec.alpha.registry()));
});

spec_tools.core.registry.cljs$lang$maxFixedArity = 1;

/**
 * Finds recursively a spec implementation from the registry
 */
spec_tools.core.get_spec = (function spec_tools$core$get_spec(name){
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.registry(),name);
if(cljs.core.truth_(temp__5718__auto__)){
var spec = temp__5718__auto__;
if((spec instanceof cljs.core.Keyword)){
return (spec_tools.core.get_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.get_spec.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.core.get_spec.call(null,spec));
} else {
return spec;
}
} else {
return null;
}
});
/**
 * Returns a spec from a spec name or spec. Throwns exception
 *   if no spec was found.
 */
spec_tools.core.coerce_spec = (function spec_tools$core$coerce_spec(name_or_spec){
var or__3949__auto__ = (function (){var and__3938__auto__ = (spec_tools.core.spec_QMARK_.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.spec_QMARK_.cljs$core$IFn$_invoke$arity$1(name_or_spec) : spec_tools.core.spec_QMARK_.call(null,name_or_spec));
if(cljs.core.truth_(and__3938__auto__)){
return name_or_spec;
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = spec_tools.core.get_spec(name_or_spec);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["can't coerce to spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_or_spec)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name_DASH_or_DASH_spec,name_or_spec], null));
}
}
});
/**
 * Writes specs into a string that can be read by the reader.
 *   TODO: Should optionally write the realated Registry entries.
 */
spec_tools.core.serialize = (function spec_tools$core$serialize(spec){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.form(spec)], 0));
});
/**
 * Reads specs from a string.
 *   TODO: Should optionally read the realated Registry entries.
 */
spec_tools.core.deserialize = (function spec_tools$core$deserialize(s){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(s);
});
spec_tools.core._STAR_transformer_STAR_ = null;
spec_tools.core._STAR_encode_QMARK__STAR_ = null;

/**
 * @interface
 */
spec_tools.core.Coercion = function(){};

spec_tools.core._coerce = (function spec_tools$core$_coerce(this$,value,transformer,options){
if(((!((this$ == null))) && (!((this$.spec_tools$core$Coercion$_coerce$arity$4 == null))))){
return this$.spec_tools$core$Coercion$_coerce$arity$4(this$,value,transformer,options);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (spec_tools.core._coerce[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$4(this$,value,transformer,options) : m__4244__auto__.call(null,this$,value,transformer,options));
} else {
var m__4244__auto____$1 = (spec_tools.core._coerce["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,value,transformer,options) : m__4244__auto____$1.call(null,this$,value,transformer,options));
} else {
throw cljs.core.missing_protocol("Coercion.-coerce",this$);
}
}
}
});


/**
 * @interface
 */
spec_tools.core.Transformer = function(){};

spec_tools.core._name = (function spec_tools$core$_name(this$){
if(((!((this$ == null))) && (!((this$.spec_tools$core$Transformer$_name$arity$1 == null))))){
return this$.spec_tools$core$Transformer$_name$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (spec_tools.core._name[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (spec_tools.core._name["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Transformer.-name",this$);
}
}
}
});

spec_tools.core._options = (function spec_tools$core$_options(this$){
if(((!((this$ == null))) && (!((this$.spec_tools$core$Transformer$_options$arity$1 == null))))){
return this$.spec_tools$core$Transformer$_options$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (spec_tools.core._options[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (spec_tools.core._options["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Transformer.-options",this$);
}
}
}
});

spec_tools.core._encoder = (function spec_tools$core$_encoder(this$,spec,value){
if(((!((this$ == null))) && (!((this$.spec_tools$core$Transformer$_encoder$arity$3 == null))))){
return this$.spec_tools$core$Transformer$_encoder$arity$3(this$,spec,value);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (spec_tools.core._encoder[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(this$,spec,value) : m__4244__auto__.call(null,this$,spec,value));
} else {
var m__4244__auto____$1 = (spec_tools.core._encoder["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,spec,value) : m__4244__auto____$1.call(null,this$,spec,value));
} else {
throw cljs.core.missing_protocol("Transformer.-encoder",this$);
}
}
}
});

spec_tools.core._decoder = (function spec_tools$core$_decoder(this$,spec,value){
if(((!((this$ == null))) && (!((this$.spec_tools$core$Transformer$_decoder$arity$3 == null))))){
return this$.spec_tools$core$Transformer$_decoder$arity$3(this$,spec,value);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (spec_tools.core._decoder[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(this$,spec,value) : m__4244__auto__.call(null,this$,spec,value));
} else {
var m__4244__auto____$1 = (spec_tools.core._decoder["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,spec,value) : m__4244__auto____$1.call(null,this$,spec,value));
} else {
throw cljs.core.missing_protocol("Transformer.-decoder",this$);
}
}
}
});

/**
 * Returns a Transformer instance out of options map or Transformer instances.
 *   Available options:
 * 
 *   | Key                | Description
 *   |--------------------|-----------------
 *   | `:name`            | Name of the transformer
 *   | `:encoders`        | Map of type `type -> transform`
 *   | `:decoders`        | Map of type `type -> transform`
 *   | `:default-encoder` | Default `transform` for encoding
 *   | `:default-decoder` | Default `transform` for decoding
 * 
 *   Example of a JSON type-transformer:
 * 
 *   ```clojure
 *   (require '[spec-tools.core :as st])
 *   (require '[spec-tools.transform :as stt])
 * 
 *   (def json-transformer
 *  (type-transformer
 *    {:name :json
 *     :decoders stt/json-type-decoders
 *     :encoders stt/json-type-encoders
 *     :default-encoder stt/any->any}))
 *   ```
 * 
 *   Composed Strict JSON Transformer:
 * 
 *   ```clojure
 *   (def strict-json-transformer
 *  (st/type-transformer
 *    st/json-transformer
 *    st/strip-extra-keys-transformer
 *    st/strip-extra-values-transformer))
 *   ```
 */
spec_tools.core.type_transformer = (function spec_tools$core$type_transformer(var_args){
var args__4534__auto__ = [];
var len__4531__auto___25803 = arguments.length;
var i__4532__auto___25804 = (0);
while(true){
if((i__4532__auto___25804 < len__4531__auto___25803)){
args__4534__auto__.push((arguments[i__4532__auto___25804]));

var G__25805 = (i__4532__auto___25804 + (1));
i__4532__auto___25804 = G__25805;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic = (function (options_or_transformers){
var __GT_opts = (function (p1__25793_SHARP_){
if(((!((p1__25793_SHARP_ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__25793_SHARP_.spec_tools$core$Transformer$))))?true:(((!p1__25793_SHARP_.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(spec_tools.core.Transformer,p1__25793_SHARP_):false)):cljs.core.native_satisfies_QMARK_(spec_tools.core.Transformer,p1__25793_SHARP_))){
return spec_tools.core._options(p1__25793_SHARP_);
} else {
return p1__25793_SHARP_;
}
});
var map__25795 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(spec_tools.impl.deep_merge,null,cljs.core.map.cljs$core$IFn$_invoke$arity$2(__GT_opts,options_or_transformers));
var map__25795__$1 = ((((!((map__25795 == null)))?(((((map__25795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25795):map__25795);
var options = map__25795__$1;
var transformer_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25795__$1,cljs.core.cst$kw$name);
var encoders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25795__$1,cljs.core.cst$kw$encoders);
var decoders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25795__$1,cljs.core.cst$kw$decoders);
var default_encoder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25795__$1,cljs.core.cst$kw$default_DASH_encoder);
var default_decoder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25795__$1,cljs.core.cst$kw$default_DASH_decoder);
var encode_key = (function (){var G__25798 = transformer_name;
var G__25798__$1 = (((G__25798 == null))?null:cljs.core.name(G__25798));
var G__25798__$2 = (((G__25798__$1 == null))?null:["encode/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25798__$1)].join(''));
if((G__25798__$2 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__25798__$2);
}
})();
var decode_key = (function (){var G__25799 = transformer_name;
var G__25799__$1 = (((G__25799 == null))?null:cljs.core.name(G__25799));
var G__25799__$2 = (((G__25799__$1 == null))?null:["decode/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25799__$1)].join(''));
if((G__25799__$2 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__25799__$2);
}
})();
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.core !== 'undefined') && (typeof spec_tools.core.t_spec_tools$core25800 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {spec_tools.core.Transformer}
 * @implements {cljs.core.IWithMeta}
*/
spec_tools.core.t_spec_tools$core25800 = (function (options,encoders,decoders,map__25795,default_decoder,transformer_name,encode_key,decode_key,__GT_opts,default_encoder,options_or_transformers,meta25801){
this.options = options;
this.encoders = encoders;
this.decoders = decoders;
this.map__25795 = map__25795;
this.default_decoder = default_decoder;
this.transformer_name = transformer_name;
this.encode_key = encode_key;
this.decode_key = decode_key;
this.__GT_opts = __GT_opts;
this.default_encoder = default_encoder;
this.options_or_transformers = options_or_transformers;
this.meta25801 = meta25801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
spec_tools.core.t_spec_tools$core25800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (encode_key,decode_key,__GT_opts,map__25795,map__25795__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder){
return (function (_25802,meta25801__$1){
var self__ = this;
var _25802__$1 = this;
return (new spec_tools.core.t_spec_tools$core25800(self__.options,self__.encoders,self__.decoders,self__.map__25795,self__.default_decoder,self__.transformer_name,self__.encode_key,self__.decode_key,self__.__GT_opts,self__.default_encoder,self__.options_or_transformers,meta25801__$1));
});})(encode_key,decode_key,__GT_opts,map__25795,map__25795__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder))
;

spec_tools.core.t_spec_tools$core25800.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (encode_key,decode_key,__GT_opts,map__25795,map__25795__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder){
return (function (_25802){
var self__ = this;
var _25802__$1 = this;
return self__.meta25801;
});})(encode_key,decode_key,__GT_opts,map__25795,map__25795__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder))
;

spec_tools.core.t_spec_tools$core25800.prototype.spec_tools$core$Transformer$ = cljs.core.PROTOCOL_SENTINEL;

spec_tools.core.t_spec_tools$core25800.prototype.spec_tools$core$Transformer$_name$arity$1 = ((function (encode_key,decode_key,__GT_opts,map__25795,map__25795__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.transformer_name;
});})(encode_key,decode_key,__GT_opts,map__25795,map__25795__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder))
;

spec_tools.core.t_spec_tools$core25800.prototype.spec_tools$core$Transformer$_options$arity$1 = ((function (encode_key,decode_key,__GT_opts,map__25795,map__25795__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.options;
});})(encode_key,decode_key,__GT_opts,map__25795,map__25795__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder))
;

spec_tools.core.t_spec_tools$core25800.prototype.spec_tools$core$Transformer$_encoder$arity$3 = ((function (encode_key,decode_key,__GT_opts,map__25795,map__25795__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder){
return (function (_,spec,___$1){
var self__ = this;
var ___$2 = this;
var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,self__.encode_key);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.encoders,spec_tools.parse.type_dispatch_value(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(spec)));
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return self__.default_encoder;
}
}
});})(encode_key,decode_key,__GT_opts,map__25795,map__25795__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder))
;

spec_tools.core.t_spec_tools$core25800.prototype.spec_tools$core$Transformer$_decoder$arity$3 = ((function (encode_key,decode_key,__GT_opts,map__25795,map__25795__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder){
return (function (_,spec,___$1){
var self__ = this;
var ___$2 = this;
var or__3949__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,self__.decode_key);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.decoders,spec_tools.parse.type_dispatch_value(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(spec)));
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return self__.default_decoder;
}
}
});})(encode_key,decode_key,__GT_opts,map__25795,map__25795__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder))
;

spec_tools.core.t_spec_tools$core25800.getBasis = ((function (encode_key,decode_key,__GT_opts,map__25795,map__25795__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$options,cljs.core.cst$sym$encoders,cljs.core.cst$sym$decoders,cljs.core.cst$sym$map__25795,cljs.core.cst$sym$default_DASH_decoder,cljs.core.cst$sym$transformer_DASH_name,cljs.core.cst$sym$encode_DASH_key,cljs.core.cst$sym$decode_DASH_key,cljs.core.cst$sym$_DASH__GT_opts,cljs.core.cst$sym$default_DASH_encoder,cljs.core.cst$sym$options_DASH_or_DASH_transformers,cljs.core.cst$sym$meta25801], null);
});})(encode_key,decode_key,__GT_opts,map__25795,map__25795__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder))
;

spec_tools.core.t_spec_tools$core25800.cljs$lang$type = true;

spec_tools.core.t_spec_tools$core25800.cljs$lang$ctorStr = "spec-tools.core/t_spec_tools$core25800";

spec_tools.core.t_spec_tools$core25800.cljs$lang$ctorPrWriter = ((function (encode_key,decode_key,__GT_opts,map__25795,map__25795__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"spec-tools.core/t_spec_tools$core25800");
});})(encode_key,decode_key,__GT_opts,map__25795,map__25795__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder))
;

/**
 * Positional factory function for spec-tools.core/t_spec_tools$core25800.
 */
spec_tools.core.__GT_t_spec_tools$core25800 = ((function (encode_key,decode_key,__GT_opts,map__25795,map__25795__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder){
return (function spec_tools$core$__GT_t_spec_tools$core25800(options__$1,encoders__$1,decoders__$1,map__25795__$2,default_decoder__$1,transformer_name__$1,encode_key__$1,decode_key__$1,__GT_opts__$1,default_encoder__$1,options_or_transformers__$1,meta25801){
return (new spec_tools.core.t_spec_tools$core25800(options__$1,encoders__$1,decoders__$1,map__25795__$2,default_decoder__$1,transformer_name__$1,encode_key__$1,decode_key__$1,__GT_opts__$1,default_encoder__$1,options_or_transformers__$1,meta25801));
});})(encode_key,decode_key,__GT_opts,map__25795,map__25795__$1,options,transformer_name,encoders,decoders,default_encoder,default_decoder))
;

}

return (new spec_tools.core.t_spec_tools$core25800(options,encoders,decoders,map__25795__$1,default_decoder,transformer_name,encode_key,decode_key,__GT_opts,default_encoder,options_or_transformers,cljs.core.PersistentArrayMap.EMPTY));
});

spec_tools.core.type_transformer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
spec_tools.core.type_transformer.cljs$lang$applyTo = (function (seq25794){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25794));
});

/**
 * Transformer that transforms data between JSON and EDN.
 */
spec_tools.core.json_transformer = spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$json,cljs.core.cst$kw$decoders,spec_tools.transform.json_type_decoders,cljs.core.cst$kw$encoders,spec_tools.transform.json_type_encoders,cljs.core.cst$kw$default_DASH_encoder,spec_tools.transform.any__GT_any], null)], 0));
/**
 * Transformer that transforms data between Strings and EDN.
 */
spec_tools.core.string_transformer = spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$string,cljs.core.cst$kw$decoders,spec_tools.transform.string_type_decoders,cljs.core.cst$kw$encoders,spec_tools.transform.string_type_encoders,cljs.core.cst$kw$default_DASH_encoder,spec_tools.transform.any__GT_any], null)], 0));
/**
 * Transformer that drop extra keys from `s/keys` specs.
 */
spec_tools.core.strip_extra_keys_transformer = spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.cst$kw$spec_DASH_tools$core_SLASH_strip_DASH_extra_DASH_keys,cljs.core.cst$kw$decoders,spec_tools.transform.strip_extra_keys_type_decoders], null)], 0));
/**
 * Transformer that drop extra values from `s/tuple` specs.
 */
spec_tools.core.strip_extra_values_transformer = spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.cst$kw$spec_DASH_tools$core_SLASH_strip_DASH_extra_DASH_values,cljs.core.cst$kw$decoders,spec_tools.transform.strip_extra_values_type_decoders], null)], 0));
/**
 * Transformer that fails on extra keys in `s/keys` specs.
 */
spec_tools.core.fail_on_extra_keys_transformer = spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.cst$kw$spec_DASH_tools$core_SLASH_fail_DASH_on_DASH_extra_DASH_keys,cljs.core.cst$kw$decoders,spec_tools.transform.fail_on_extra_keys_type_decoders], null)], 0));
/**
 * Like `clojure.core.alpha/explain` but supports transformers
 */
spec_tools.core.explain = (function spec_tools$core$explain(var_args){
var G__25807 = arguments.length;
switch (G__25807) {
case 2:
return spec_tools.core.explain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return spec_tools.core.explain.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

spec_tools.core.explain.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
return spec_tools.core.explain.cljs$core$IFn$_invoke$arity$3(spec,value,null);
});

spec_tools.core.explain.cljs$core$IFn$_invoke$arity$3 = (function (spec,value,transformer){
var _STAR_transformer_STAR_25808 = spec_tools.core._STAR_transformer_STAR_;
var _STAR_encode_QMARK__STAR_25809 = spec_tools.core._STAR_encode_QMARK__STAR_;
spec_tools.core._STAR_transformer_STAR_ = transformer;

spec_tools.core._STAR_encode_QMARK__STAR_ = false;

try{return cljs.spec.alpha.explain((spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.core.into_spec.call(null,spec)),value);
}finally {spec_tools.core._STAR_encode_QMARK__STAR_ = _STAR_encode_QMARK__STAR_25809;

spec_tools.core._STAR_transformer_STAR_ = _STAR_transformer_STAR_25808;
}});

spec_tools.core.explain.cljs$lang$maxFixedArity = 3;

/**
 * Like `clojure.core.alpha/explain-data` but supports transformers
 */
spec_tools.core.explain_data = (function spec_tools$core$explain_data(var_args){
var G__25812 = arguments.length;
switch (G__25812) {
case 2:
return spec_tools.core.explain_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return spec_tools.core.explain_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

spec_tools.core.explain_data.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
return spec_tools.core.explain_data.cljs$core$IFn$_invoke$arity$3(spec,value,null);
});

spec_tools.core.explain_data.cljs$core$IFn$_invoke$arity$3 = (function (spec,value,transformer){
var _STAR_transformer_STAR_25813 = spec_tools.core._STAR_transformer_STAR_;
var _STAR_encode_QMARK__STAR_25814 = spec_tools.core._STAR_encode_QMARK__STAR_;
spec_tools.core._STAR_transformer_STAR_ = transformer;

spec_tools.core._STAR_encode_QMARK__STAR_ = false;

try{return cljs.spec.alpha.explain_data((spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.core.into_spec.call(null,spec)),value);
}finally {spec_tools.core._STAR_encode_QMARK__STAR_ = _STAR_encode_QMARK__STAR_25814;

spec_tools.core._STAR_transformer_STAR_ = _STAR_transformer_STAR_25813;
}});

spec_tools.core.explain_data.cljs$lang$maxFixedArity = 3;

/**
 * Given a spec and a value, returns the possibly destructured value
 * or ::s/invalid
 */
spec_tools.core.conform = (function spec_tools$core$conform(var_args){
var G__25817 = arguments.length;
switch (G__25817) {
case 2:
return spec_tools.core.conform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return spec_tools.core.conform.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

spec_tools.core.conform.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
return spec_tools.core.conform.cljs$core$IFn$_invoke$arity$3(spec,value,null);
});

spec_tools.core.conform.cljs$core$IFn$_invoke$arity$3 = (function (spec,value,transformer){
var _STAR_transformer_STAR_25818 = spec_tools.core._STAR_transformer_STAR_;
var _STAR_encode_QMARK__STAR_25819 = spec_tools.core._STAR_encode_QMARK__STAR_;
spec_tools.core._STAR_transformer_STAR_ = transformer;

spec_tools.core._STAR_encode_QMARK__STAR_ = false;

try{return cljs.spec.alpha.conform((spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.core.into_spec.call(null,spec)),value);
}finally {spec_tools.core._STAR_encode_QMARK__STAR_ = _STAR_encode_QMARK__STAR_25819;

spec_tools.core._STAR_transformer_STAR_ = _STAR_transformer_STAR_25818;
}});

spec_tools.core.conform.cljs$lang$maxFixedArity = 3;

/**
 * Given a spec and a value, returns the possibly destructured value
 * or fails with ex-info with :type of ::conform. ex-data also contains
 * :problems, :spec and :value. call s/unform on the result to get the
 * actual conformed value.
 */
spec_tools.core.conform_BANG_ = (function spec_tools$core$conform_BANG_(var_args){
var G__25822 = arguments.length;
switch (G__25822) {
case 2:
return spec_tools.core.conform_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return spec_tools.core.conform_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

spec_tools.core.conform_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
return spec_tools.core.conform_BANG_.cljs$core$IFn$_invoke$arity$3(spec,value,null);
});

spec_tools.core.conform_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (spec,value,transformer){
var _STAR_transformer_STAR_25823 = spec_tools.core._STAR_transformer_STAR_;
var _STAR_encode_QMARK__STAR_25824 = spec_tools.core._STAR_encode_QMARK__STAR_;
spec_tools.core._STAR_transformer_STAR_ = transformer;

spec_tools.core._STAR_encode_QMARK__STAR_ = false;

try{var spec_SINGLEQUOTE_ = (spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.core.into_spec.call(null,spec));
var conformed = cljs.spec.alpha.conform(spec_SINGLEQUOTE_,value);
if(cljs.core.not(cljs.spec.alpha.invalid_QMARK_(conformed))){
return conformed;
} else {
var problems = cljs.spec.alpha.explain_data(spec_SINGLEQUOTE_,value);
var data = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$spec_DASH_tools$core_SLASH_conform,cljs.core.cst$kw$problems,cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems.cljs$core$IFn$_invoke$arity$1(problems),cljs.core.cst$kw$spec,spec,cljs.core.cst$kw$value,value], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Spec conform error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join(''),data);
}
}finally {spec_tools.core._STAR_encode_QMARK__STAR_ = _STAR_encode_QMARK__STAR_25824;

spec_tools.core._STAR_transformer_STAR_ = _STAR_transformer_STAR_25823;
}});

spec_tools.core.conform_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Coerces the value using a [[Transformer]]. Returns original value for
 *   those parts of the value that can't be trasformed.
 */
spec_tools.core.coerce = (function spec_tools$core$coerce(var_args){
var G__25827 = arguments.length;
switch (G__25827) {
case 3:
return spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$3 = (function (spec,value,transformer){
return spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$4(spec,value,transformer,null);
});

spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$4 = (function (spec,value,transformer,options){
return spec_tools.core._coerce((spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.core.into_spec.call(null,spec)),value,transformer,options);
});

spec_tools.core.coerce.cljs$lang$maxFixedArity = 4;

/**
 * Decodes a value using a [[Transformer]] from external format to a value
 *   defined by the spec. First, calls [[coerce]] and returns the value if it's
 *   valid - otherwise, calls [[conform]] & [[unform]]. Returns `::s/invalid`
 *   if the value can't be decoded to conform the spec.
 */
spec_tools.core.decode = (function spec_tools$core$decode(var_args){
var G__25830 = arguments.length;
switch (G__25830) {
case 2:
return spec_tools.core.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return spec_tools.core.decode.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

spec_tools.core.decode.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
return spec_tools.core.decode.cljs$core$IFn$_invoke$arity$3(spec,value,null);
});

spec_tools.core.decode.cljs$core$IFn$_invoke$arity$3 = (function (spec,value,transformer){
var spec__$1 = (spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.core.into_spec.call(null,spec));
var coerced = spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$3(spec__$1,value,transformer);
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,coerced))){
return coerced;
} else {
var _STAR_transformer_STAR_25831 = spec_tools.core._STAR_transformer_STAR_;
var _STAR_encode_QMARK__STAR_25832 = spec_tools.core._STAR_encode_QMARK__STAR_;
spec_tools.core._STAR_transformer_STAR_ = transformer;

spec_tools.core._STAR_encode_QMARK__STAR_ = false;

try{var conformed = cljs.spec.alpha.conform(spec__$1,value);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(conformed))){
return conformed;
} else {
return cljs.spec.alpha.unform(spec__$1,conformed);
}
}finally {spec_tools.core._STAR_encode_QMARK__STAR_ = _STAR_encode_QMARK__STAR_25832;

spec_tools.core._STAR_transformer_STAR_ = _STAR_transformer_STAR_25831;
}}
});

spec_tools.core.decode.cljs$lang$maxFixedArity = 3;

/**
 * Transforms a value (using a [[Transformer]]) from external
 *   format into a value defined by the spec. On error, returns `::s/invalid`.
 */
spec_tools.core.encode = (function spec_tools$core$encode(spec,value,transformer){
var _STAR_transformer_STAR_25834 = spec_tools.core._STAR_transformer_STAR_;
var _STAR_encode_QMARK__STAR_25835 = spec_tools.core._STAR_encode_QMARK__STAR_;
spec_tools.core._STAR_transformer_STAR_ = transformer;

spec_tools.core._STAR_encode_QMARK__STAR_ = true;

try{var spec__$1 = (spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.core.into_spec.call(null,spec));
var conformed = cljs.spec.alpha.conform(spec__$1,value);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(conformed))){
return conformed;
} else {
return cljs.spec.alpha.unform(spec__$1,conformed);
}
}finally {spec_tools.core._STAR_encode_QMARK__STAR_ = _STAR_encode_QMARK__STAR_25835;

spec_tools.core._STAR_transformer_STAR_ = _STAR_transformer_STAR_25834;
}});
/**
 * Best effort to drop recursively all extra keys out of a keys spec value.
 */
spec_tools.core.select_spec = (function spec_tools$core$select_spec(spec,value){
return spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$3(spec,value,spec_tools.core.strip_extra_keys_transformer);
});
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.core !== 'undefined') && (typeof spec_tools.core.walk !== 'undefined')){
} else {
spec_tools.core.walk = (function (){var method_table__4414__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4415__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4416__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4417__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4418__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$spec_DASH_tools$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("spec-tools.core","walk"),((function (method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__){
return (function (p__25836,_,___$1,___$2){
var map__25837 = p__25836;
var map__25837__$1 = ((((!((map__25837 == null)))?(((((map__25837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25837):map__25837);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25837__$1,cljs.core.cst$kw$type);
return spec_tools.parse.type_dispatch_value(type);
});})(method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__,hierarchy__4418__auto__))
,cljs.core.cst$kw$spec_DASH_tools$core_SLASH_default,hierarchy__4418__auto__,method_table__4414__auto__,prefer_table__4415__auto__,method_cache__4416__auto__,cached_hierarchy__4417__auto__));
})();
}
spec_tools.core.walk.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$spec_DASH_tools$core_SLASH_default,(function (spec,value,accept,options){
if(cljs.core.truth_((function (){var and__3938__auto__ = (spec_tools.core.spec_QMARK_.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.spec_QMARK_.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.core.spec_QMARK_.call(null,spec));
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not(cljs.core.cst$kw$skip_QMARK_.cljs$core$IFn$_invoke$arity$1(options));
} else {
return and__3938__auto__;
}
})())){
var G__25839 = spec;
var G__25840 = value;
var G__25841 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,cljs.core.cst$kw$skip_QMARK_,true);
return (accept.cljs$core$IFn$_invoke$arity$3 ? accept.cljs$core$IFn$_invoke$arity$3(G__25839,G__25840,G__25841) : accept.call(null,G__25839,G__25840,G__25841));
} else {
return value;
}
}));
spec_tools.core.walk.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$or,(function (p__25842,value,accept,options){
var map__25843 = p__25842;
var map__25843__$1 = ((((!((map__25843 == null)))?(((((map__25843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25843):map__25843);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25843__$1,cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_items);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__25843,map__25843__$1,items){
return (function (v,item){
var transformed = (accept.cljs$core$IFn$_invoke$arity$3 ? accept.cljs$core$IFn$_invoke$arity$3(item,v,options) : accept.call(null,item,v,options));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(transformed,v)){
return v;
} else {
return cljs.core.reduced(transformed);
}
});})(map__25843,map__25843__$1,items))
,value,items);
}));
spec_tools.core.walk.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$and,(function (p__25845,value,accept,options){
var map__25846 = p__25845;
var map__25846__$1 = ((((!((map__25846 == null)))?(((((map__25846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25846):map__25846);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25846__$1,cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_items);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__25846,map__25846__$1,items){
return (function (v,item){
var transformed = (accept.cljs$core$IFn$_invoke$arity$3 ? accept.cljs$core$IFn$_invoke$arity$3(item,v,options) : accept.call(null,item,v,options));
return transformed;
});})(map__25846,map__25846__$1,items))
,value,items);
}));
spec_tools.core.walk.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nilable,(function (p__25848,value,accept,options){
var map__25849 = p__25848;
var map__25849__$1 = ((((!((map__25849 == null)))?(((((map__25849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25849):map__25849);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25849__$1,cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_item);
return (accept.cljs$core$IFn$_invoke$arity$3 ? accept.cljs$core$IFn$_invoke$arity$3(item,value,options) : accept.call(null,item,value,options));
}));
spec_tools.core.walk.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$vector,(function (p__25851,value,accept,options){
var map__25852 = p__25851;
var map__25852__$1 = ((((!((map__25852 == null)))?(((((map__25852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25852):map__25852);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25852__$1,cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_item);
if(cljs.core.sequential_QMARK_(value)){
var f = ((cljs.core.seq_QMARK_(value))?cljs.core.reverse:cljs.core.identity);
var G__25854 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(value),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (f,map__25852,map__25852__$1,item){
return (function (v){
return (accept.cljs$core$IFn$_invoke$arity$3 ? accept.cljs$core$IFn$_invoke$arity$3(item,v,options) : accept.call(null,item,v,options));
});})(f,map__25852,map__25852__$1,item))
,value));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25854) : f.call(null,G__25854));
} else {
return value;
}
}));
spec_tools.core.walk.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$tuple,(function (p__25855,value,accept,options){
var map__25856 = p__25855;
var map__25856__$1 = ((((!((map__25856 == null)))?(((((map__25856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25856):map__25856);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25856__$1,cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_items);
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(value),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.vector),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__25856,map__25856__$1,items){
return (function (p__25858){
var vec__25859 = p__25858;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25859,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25859,(1),null);
if((i < cljs.core.count(items))){
var G__25862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(items,i);
if((G__25862 == null)){
return null;
} else {
return (accept.cljs$core$IFn$_invoke$arity$3 ? accept.cljs$core$IFn$_invoke$arity$3(G__25862,v,options) : accept.call(null,G__25862,v,options));
}
} else {
return v;
}
});})(map__25856,map__25856__$1,items))
)),value);
} else {
return value;
}
}));
spec_tools.core.walk.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$set,(function (p__25863,value,accept,options){
var map__25864 = p__25863;
var map__25864__$1 = ((((!((map__25864 == null)))?(((((map__25864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25864):map__25864);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25864__$1,cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_item);
if(((cljs.core.set_QMARK_(value)) || (cljs.core.sequential_QMARK_(value)))){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__25864,map__25864__$1,item){
return (function (v){
return (accept.cljs$core$IFn$_invoke$arity$3 ? accept.cljs$core$IFn$_invoke$arity$3(item,v,options) : accept.call(null,item,v,options));
});})(map__25864,map__25864__$1,item))
,value));
} else {
return value;
}
}));
spec_tools.core.walk.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$map,(function (p__25866,value,accept,options){
var map__25867 = p__25866;
var map__25867__$1 = ((((!((map__25867 == null)))?(((((map__25867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25867):map__25867);
var key__GT_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25867__$1,cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_key_DASH__GT_spec);
if(cljs.core.map_QMARK_(value)){
return cljs.core.reduce_kv(((function (map__25867,map__25867__$1,key__GT_spec){
return (function (acc,k,v){
var spec = ((cljs.core.qualified_keyword_QMARK_(k))?cljs.spec.alpha.get_spec(k):cljs.spec.alpha.get_spec(cljs.core.get.cljs$core$IFn$_invoke$arity$2(key__GT_spec,k)));
var value__$1 = (cljs.core.truth_(spec)?(accept.cljs$core$IFn$_invoke$arity$3 ? accept.cljs$core$IFn$_invoke$arity$3(spec,v,options) : accept.call(null,spec,v,options)):v);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,value__$1);
});})(map__25867,map__25867__$1,key__GT_spec))
,value,value);
} else {
return value;
}
}));
spec_tools.core.walk.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$map_DASH_of,(function (p__25869,data,accept,options){
var map__25870 = p__25869;
var map__25870__$1 = ((((!((map__25870 == null)))?(((((map__25870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25870):map__25870);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25870__$1,cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_key);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25870__$1,cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_value);
if(cljs.core.map_QMARK_(data)){
return cljs.core.reduce_kv(((function (map__25870,map__25870__$1,key,value){
return (function (acc,k,v){
var k_SINGLEQUOTE_ = (accept.cljs$core$IFn$_invoke$arity$3 ? accept.cljs$core$IFn$_invoke$arity$3(key,k,options) : accept.call(null,key,k,options));
var v_SINGLEQUOTE_ = (accept.cljs$core$IFn$_invoke$arity$3 ? accept.cljs$core$IFn$_invoke$arity$3(value,v,options) : accept.call(null,value,v,options));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k_SINGLEQUOTE_,v_SINGLEQUOTE_);
});})(map__25870,map__25870__$1,key,value))
,cljs.core.empty(data),data);
} else {
return data;
}
}));
spec_tools.core.extra_spec_map = (function spec_tools$core$extra_spec_map(data){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__25872){
var vec__25873 = p__25872;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25873,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25873,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("spec-tools.parse",cljs.core.namespace(k))){
return acc;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.cst$kw$form,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$spec], 0)));
});
spec_tools.core.fail_on_invoke = (function spec_tools$core$fail_on_invoke(spec){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't invoke spec with a non-function predicate: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,spec], null));
});
spec_tools.core.leaf_QMARK_ = (function spec_tools$core$leaf_QMARK_(spec){
return cljs.core.cst$kw$leaf_QMARK_.cljs$core$IFn$_invoke$arity$1((spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.core.into_spec.call(null,spec)));
});
/**
 * Dynamic conforming can't walk over composite specs like s/and & s/or.
 *   So, we'll use the first type. Examples:
 * 
 *   `[:and [:int :string]]` -> `:int`
 *   `[:or [:string :keyword]]` -> `:string`
 */
spec_tools.core.decompose_spec_type = (function spec_tools$core$decompose_spec_type(spec){
var type = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(spec);
if(cljs.core.sequential_QMARK_(type)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$type,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.second));
} else {
return spec;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {spec_tools.core.Coercion}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
spec_tools.core.Spec = (function (spec,form,type,__meta,__extmap,__hash){
this.spec = spec;
this.form = form;
this.type = type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667595;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
spec_tools.core.Spec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

spec_tools.core.Spec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k25880,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__25885 = k25880;
var G__25885__$1 = (((G__25885 instanceof cljs.core.Keyword))?G__25885.fqn:null);
switch (G__25885__$1) {
case "spec":
return self__.spec;

break;
case "form":
return self__.form;

break;
case "type":
return self__.type;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25880,else__4206__auto__);

}
});

spec_tools.core.Spec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#spec-tools.core.Spec{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$spec,self__.spec],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$form,self__.form],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null))], null),self__.__extmap));
});

spec_tools.core.Spec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25879){
var self__ = this;
var G__25879__$1 = this;
return (new cljs.core.RecordIter((0),G__25879__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spec,cljs.core.cst$kw$form,cljs.core.cst$kw$type], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

spec_tools.core.Spec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

spec_tools.core.Spec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new spec_tools.core.Spec(self__.spec,self__.form,self__.type,self__.__meta,self__.__extmap,self__.__hash));
});

spec_tools.core.Spec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

spec_tools.core.Spec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__25886 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (344961240 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__25886(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

spec_tools.core.Spec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25881,other25882){
var self__ = this;
var this25881__$1 = this;
return ((!((other25882 == null))) && ((this25881__$1.constructor === other25882.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25881__$1.spec,other25882.spec)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25881__$1.form,other25882.form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25881__$1.type,other25882.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25881__$1.__extmap,other25882.__extmap)));
});

spec_tools.core.Spec.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

spec_tools.core.Spec.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var transformer = spec_tools.core._STAR_transformer_STAR_;
var encode_QMARK_ = spec_tools.core._STAR_encode_QMARK__STAR_;
var temp__5718__auto__ = (cljs.core.truth_(transformer)?(function (){var G__25888 = transformer;
var G__25889 = spec_tools.core.decompose_spec_type(this$__$1);
var G__25890 = x;
var fexpr__25887 = (cljs.core.truth_(encode_QMARK_)?spec_tools.core._encoder:spec_tools.core._decoder);
return (fexpr__25887.cljs$core$IFn$_invoke$arity$3 ? fexpr__25887.cljs$core$IFn$_invoke$arity$3(G__25888,G__25889,G__25890) : fexpr__25887.call(null,G__25888,G__25889,G__25890));
})():null);
if(cljs.core.truth_(temp__5718__auto__)){
var transform = temp__5718__auto__;
var transformed = (transform.cljs$core$IFn$_invoke$arity$2 ? transform.cljs$core$IFn$_invoke$arity$2(this$__$1,x) : transform.call(null,this$__$1,x));
var or__3949__auto__ = (function (){var and__3938__auto__ = cljs.spec.alpha.invalid_QMARK_(transformed);
if(cljs.core.truth_(and__3938__auto__)){
return transformed;
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var conformed = cljs.spec.alpha.conform(self__.spec,transformed);
var or__3949__auto____$1 = (function (){var and__3938__auto__ = encode_QMARK_;
if(cljs.core.truth_(and__3938__auto__)){
var and__3938__auto____$1 = cljs.spec.alpha.invalid_QMARK_(conformed);
if(cljs.core.truth_(and__3938__auto____$1)){
var and__3938__auto____$2 = spec_tools.core.leaf_QMARK_(this$__$1);
if(cljs.core.truth_(and__3938__auto____$2)){
return transformed;
} else {
return and__3938__auto____$2;
}
} else {
return and__3938__auto____$1;
}
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return conformed;
}
}
} else {
return cljs.spec.alpha.conform(self__.spec,x);
}
});

spec_tools.core.Spec.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.unform(self__.spec,x);
});

spec_tools.core.Spec.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
var problems = (cljs.core.truth_((function (){var or__3949__auto__ = cljs.spec.alpha.spec_QMARK_(self__.spec);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.spec.alpha.regex_QMARK_(self__.spec);
}
})())?(function (){var conformed = this$__$1.cljs$spec$alpha$Spec$conform_STAR_$arity$2(null,x);
var vec__25891 = (cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(conformed))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.invalid_QMARK_(spec_tools.core.conform.cljs$core$IFn$_invoke$arity$2(this$__$1,x)),x], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.spec.alpha.unform(self__.spec,conformed)], null));
var explain_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25891,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25891,(1),null);
if(cljs.core.truth_(explain_QMARK_)){
return cljs.spec.alpha.explain_STAR_(cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(self__.spec),path,via,in$,val);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,self__.form,cljs.core.cst$kw$val,val,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
})():(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(this$__$1.cljs$spec$alpha$Spec$conform_STAR_$arity$2(null,x)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,self__.form,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null):null));
var spec_reason = cljs.core.cst$kw$reason.cljs$core$IFn$_invoke$arity$1(this$__$1);
var with_reason = ((function (problems,spec_reason,this$__$1){
return (function (problem){
var G__25894 = problem;
if(cljs.core.truth_(spec_reason)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__25894,cljs.core.cst$kw$reason,spec_reason);
} else {
return G__25894;
}
});})(problems,spec_reason,this$__$1))
;
if(cljs.core.truth_(problems)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(with_reason,problems);
} else {
return null;
}
});

spec_tools.core.Spec.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (this$,overrides,path,rmap){
var self__ = this;
var this$__$1 = this;
var temp__5718__auto__ = cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var gen = temp__5718__auto__;
return (gen.cljs$core$IFn$_invoke$arity$0 ? gen.cljs$core$IFn$_invoke$arity$0() : gen.call(null));
} else {
var or__3949__auto__ = cljs.spec.gen.alpha.gen_for_pred(self__.spec);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.spec.alpha.gen_STAR_((function (){var or__3949__auto____$1 = cljs.spec.alpha.spec_QMARK_(self__.spec);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(self__.spec);
}
})(),overrides,path,rmap);
}
}
});

spec_tools.core.Spec.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (this$,gfn){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.cst$kw$gen,gfn);
});

spec_tools.core.Spec.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var data = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,self__.form], null),spec_tools.core.extra_spec_map(this$__$1)], 0));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$spec_DASH_tools$core_SLASH_spec,null,(1),null)),(new cljs.core.List(null,data,null,(1),null)))));
});

spec_tools.core.Spec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,null,cljs.core.cst$kw$spec,null,cljs.core.cst$kw$form,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new spec_tools.core.Spec(self__.spec,self__.form,self__.type,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

spec_tools.core.Spec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__25879){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__25895 = cljs.core.keyword_identical_QMARK_;
var expr__25896 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__25898 = cljs.core.cst$kw$spec;
var G__25899 = expr__25896;
return (pred__25895.cljs$core$IFn$_invoke$arity$2 ? pred__25895.cljs$core$IFn$_invoke$arity$2(G__25898,G__25899) : pred__25895.call(null,G__25898,G__25899));
})())){
return (new spec_tools.core.Spec(G__25879,self__.form,self__.type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25900 = cljs.core.cst$kw$form;
var G__25901 = expr__25896;
return (pred__25895.cljs$core$IFn$_invoke$arity$2 ? pred__25895.cljs$core$IFn$_invoke$arity$2(G__25900,G__25901) : pred__25895.call(null,G__25900,G__25901));
})())){
return (new spec_tools.core.Spec(self__.spec,G__25879,self__.type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25902 = cljs.core.cst$kw$type;
var G__25903 = expr__25896;
return (pred__25895.cljs$core$IFn$_invoke$arity$2 ? pred__25895.cljs$core$IFn$_invoke$arity$2(G__25902,G__25903) : pred__25895.call(null,G__25902,G__25903));
})())){
return (new spec_tools.core.Spec(self__.spec,self__.form,G__25879,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.core.Spec(self__.spec,self__.form,self__.type,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__25879),null));
}
}
}
});

spec_tools.core.Spec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$spec,self__.spec,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$form,self__.form,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$type,self__.type,null))], null),self__.__extmap));
});

spec_tools.core.Spec.prototype.spec_tools$core$Coercion$ = cljs.core.PROTOCOL_SENTINEL;

spec_tools.core.Spec.prototype.spec_tools$core$Coercion$_coerce$arity$4 = (function (this$,value,transformer,options){
var self__ = this;
var this$__$1 = this;
var specify = ((function (this$__$1){
return (function (x){
while(true){
if((x instanceof cljs.core.Keyword)){
var G__25912 = cljs.spec.alpha.get_spec(x);
x = G__25912;
continue;
} else {
if(cljs.core.truth_((spec_tools.core.spec_QMARK_.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.spec_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : spec_tools.core.spec_QMARK_.call(null,x)))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_(x))){
var G__25904 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,x], null);
return (spec_tools.core.create_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.create_spec.cljs$core$IFn$_invoke$arity$1(G__25904) : spec_tools.core.create_spec.call(null,G__25904));
} else {
if(cljs.core.map_QMARK_(x)){
if(cljs.core.qualified_keyword_QMARK_(cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(x))){
var G__25913 = cljs.spec.alpha.get_spec(cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(x));
x = G__25913;
continue;
} else {
var G__25905 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(x,cljs.core.cst$kw$spec,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.any_QMARK_));
return (spec_tools.core.create_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.create_spec.cljs$core$IFn$_invoke$arity$1(G__25905) : spec_tools.core.create_spec.call(null,G__25905));
}
} else {
return null;
}
}
}
}
break;
}
});})(this$__$1))
;
var transformed = (function (){var temp__5718__auto__ = (cljs.core.truth_((function (){var and__3938__auto__ = transformer;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not(cljs.core.cst$kw$skip_QMARK_.cljs$core$IFn$_invoke$arity$1(options));
} else {
return and__3938__auto__;
}
})())?spec_tools.core._decoder(transformer,this$__$1,value):null);
if(cljs.core.truth_(temp__5718__auto__)){
var transform = temp__5718__auto__;
return (transform.cljs$core$IFn$_invoke$arity$2 ? transform.cljs$core$IFn$_invoke$arity$2(this$__$1,value) : transform.call(null,this$__$1,value));
} else {
return value;
}
})();
var G__25906 = this$__$1;
var G__25907 = transformed;
var G__25908 = ((function (G__25906,G__25907,specify,transformed,this$__$1){
return (function (p1__25876_SHARP_,p2__25877_SHARP_,p3__25878_SHARP_){
return spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$4(specify(p1__25876_SHARP_),p2__25877_SHARP_,transformer,p3__25878_SHARP_);
});})(G__25906,G__25907,specify,transformed,this$__$1))
;
var G__25909 = options;
return (spec_tools.core.walk.cljs$core$IFn$_invoke$arity$4 ? spec_tools.core.walk.cljs$core$IFn$_invoke$arity$4(G__25906,G__25907,G__25908,G__25909) : spec_tools.core.walk.call(null,G__25906,G__25907,G__25908,G__25909));
});

spec_tools.core.Spec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__25879){
var self__ = this;
var this__4202__auto____$1 = this;
return (new spec_tools.core.Spec(self__.spec,self__.form,self__.type,G__25879,self__.__extmap,self__.__hash));
});

spec_tools.core.Spec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

spec_tools.core.Spec.prototype.call = (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
if(cljs.core.ifn_QMARK_(self__.spec)){
return (self__.spec.cljs$core$IFn$_invoke$arity$1 ? self__.spec.cljs$core$IFn$_invoke$arity$1(x) : self__.spec.call(null,x));
} else {
return spec_tools.core.fail_on_invoke(this$);
}
});

spec_tools.core.Spec.prototype.apply = (function (self__,args25884){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args25884)));
});

spec_tools.core.Spec.prototype.cljs$core$IFn$_invoke$arity$1 = (function (x){
var self__ = this;
var this$ = this;
if(cljs.core.ifn_QMARK_(self__.spec)){
return (self__.spec.cljs$core$IFn$_invoke$arity$1 ? self__.spec.cljs$core$IFn$_invoke$arity$1(x) : self__.spec.call(null,x));
} else {
return spec_tools.core.fail_on_invoke(this$);
}
});

spec_tools.core.Spec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$spec,cljs.core.cst$sym$form,cljs.core.cst$sym$type], null);
});

spec_tools.core.Spec.cljs$lang$type = true;

spec_tools.core.Spec.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"spec-tools.core/Spec",null,(1),null));
});

spec_tools.core.Spec.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"spec-tools.core/Spec");
});

/**
 * Positional factory function for spec-tools.core/Spec.
 */
spec_tools.core.__GT_Spec = (function spec_tools$core$__GT_Spec(spec,form,type){
return (new spec_tools.core.Spec(spec,form,type,null,null,null));
});

/**
 * Factory function for spec-tools.core/Spec, taking a map of keywords to field values.
 */
spec_tools.core.map__GT_Spec = (function spec_tools$core$map__GT_Spec(G__25883){
var extmap__4236__auto__ = (function (){var G__25910 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25883,cljs.core.cst$kw$spec,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$form,cljs.core.cst$kw$type], 0));
if(cljs.core.record_QMARK_(G__25883)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__25910);
} else {
return G__25910;
}
})();
return (new spec_tools.core.Spec(cljs.core.cst$kw$spec.cljs$core$IFn$_invoke$arity$1(G__25883),cljs.core.cst$kw$form.cljs$core$IFn$_invoke$arity$1(G__25883),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__25883),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

spec_tools.core.spec_QMARK_ = (function spec_tools$core$spec_QMARK_(x){
if((x instanceof spec_tools.core.Spec)){
return x;
} else {
return null;
}
});
/**
 * Returns a spec name. Like the private clojure.spec.alpha/spec-name
 */
spec_tools.core.spec_name = (function spec_tools$core$spec_name(spec){
if(cljs.core.ident_QMARK_(spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(spec))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_name.cljs$core$IFn$_invoke$arity$1(spec);
} else {
if(cljs.core.truth_((function (){var and__3938__auto__ = spec_tools.core.spec_QMARK_(spec);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(spec);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(spec);
} else {
if(((!((spec == null)))?(((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$))))?true:false):false)){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(spec));
} else {
return null;

}
}
}
}
});
/**
 * Returns a spec description.
 */
spec_tools.core.spec_description = (function spec_tools$core$spec_description(spec){
if(cljs.core.truth_(spec_tools.core.spec_QMARK_(spec))){
return cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(spec);
} else {
return null;
}
});
/**
 * Creates a Spec intance from a map containing the following keys:
 * 
 *         :spec  the wrapped spec predicate (default to `any?`)
 *         :form  source code of the spec predicate, if :spec is a spec,
 *                :form is read with `s/form` out of it. For non-spec
 *                preds, spec-tools.form/resolve-form is called, if still
 *                not available, spec-creation will fail.
 *         :type  optional type for the spec. if not set, will be auto-
 *                resolved via spec-tools.parse/parse-spec (optional)
 *       :reason  reason to be added to problems with s/explain (optional)
 *          :gen  generator function for the spec (optional)
 *         :name  name of the spec (optional)
 *  :description  description of the spec (optional)
 *        :xx/yy  any qualified keys can be added (optional)
 */
spec_tools.core.create_spec = (function spec_tools$core$create_spec(p__25915){
var map__25916 = p__25915;
var map__25916__$1 = ((((!((map__25916 == null)))?(((((map__25916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25916):map__25916);
var m = map__25916__$1;
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25916__$1,cljs.core.cst$kw$spec);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25916__$1,cljs.core.cst$kw$type);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25916__$1,cljs.core.cst$kw$form);
if(cljs.core.qualified_keyword_QMARK_(spec)){
if(cljs.core.truth_(spec_tools.core.get_spec(spec))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([" Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec)].join('')),"\n","(get-spec spec)"].join('')));
}
} else {
}

var spec__$1 = (function (){var or__3949__auto__ = spec;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.any_QMARK_;
}
})();
var spec__$2 = ((cljs.core.qualified_keyword_QMARK_(spec__$1))?spec_tools.core.get_spec(spec__$1):(((spec__$1 instanceof cljs.core.Symbol))?(spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1 ? spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1(spec__$1) : spec_tools.form.resolve_form.call(null,spec__$1)):spec__$1
));
var form__$1 = (function (){var or__3949__auto__ = ((cljs.core.qualified_keyword_QMARK_(form))?cljs.spec.alpha.form(form):null);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = form;
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = (function (){var form__$1 = cljs.spec.alpha.form(spec__$2);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_unknown))){
return form__$1;
} else {
return null;
}
})();
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
var or__3949__auto____$3 = (spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1 ? spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1(spec__$2) : spec_tools.form.resolve_form.call(null,spec__$2));
if(cljs.core.truth_(or__3949__auto____$3)){
return or__3949__auto____$3;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_unknown;
}
}
}
}
})();
var info = spec_tools.parse.parse_spec(form__$1);
var type__$1 = ((cljs.core.contains_QMARK_(m,cljs.core.cst$kw$type))?type:cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(info));
var name = cljs.core.cst$kw$cljs$spec$alpha_SLASH_name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(spec__$2));
var record = spec_tools.core.map__GT_Spec(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,info,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$spec,spec__$2,cljs.core.cst$kw$form,form__$1,cljs.core.cst$kw$type,type__$1,cljs.core.cst$kw$leaf_QMARK_,spec_tools.parse.leaf_type_QMARK_(type__$1)], null)], 0)));
var G__25918 = record;
if(cljs.core.truth_(name)){
return cljs.core.with_meta(G__25918,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_name,name], null));
} else {
return G__25918;
}
});
spec_tools.core.into_spec = (function spec_tools$core$into_spec(x){
while(true){
if(cljs.core.truth_(spec_tools.core.spec_QMARK_(x))){
return x;
} else {
if((x instanceof cljs.core.Keyword)){
var G__25921 = cljs.spec.alpha.get_spec(x);
x = G__25921;
continue;
} else {
return spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$spec,x], null));

}
}
break;
}
});
spec_tools.core.map_spec_keys = (function spec_tools$core$map_spec_keys(spec){
var spec__$1 = (function (){var or__3949__auto__ = ((cljs.core.qualified_keyword_QMARK_(spec))?cljs.spec.alpha.form(spec):null);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return spec;
}
})();
var info = spec_tools.parse.parse_spec(spec__$1);
return cljs.core.select_keys(info,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_keys,cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_keys_DASH_req,cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_keys_DASH_opt], null));
});
spec_tools.core.merge_impl = (function spec_tools$core$merge_impl(forms,spec_form,merge_spec){
var form_keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.core.map_spec_keys,forms);
var spec = (function (){
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.core !== 'undefined') && (typeof spec_tools.core.t_spec_tools$core25925 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
spec_tools.core.t_spec_tools$core25925 = (function (forms,spec_form,merge_spec,form_keys,meta25926){
this.forms = forms;
this.spec_form = spec_form;
this.merge_spec = merge_spec;
this.form_keys = form_keys;
this.meta25926 = meta25926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
spec_tools.core.t_spec_tools$core25925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (form_keys){
return (function (_25927,meta25926__$1){
var self__ = this;
var _25927__$1 = this;
return (new spec_tools.core.t_spec_tools$core25925(self__.forms,self__.spec_form,self__.merge_spec,self__.form_keys,meta25926__$1));
});})(form_keys))
;

spec_tools.core.t_spec_tools$core25925.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (form_keys){
return (function (_25927){
var self__ = this;
var _25927__$1 = this;
return self__.meta25926;
});})(form_keys))
;

spec_tools.core.t_spec_tools$core25925.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

spec_tools.core.t_spec_tools$core25925.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (form_keys){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var conformed_vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (___$1,form_keys){
return (function (p1__25922_SHARP_){
return cljs.spec.alpha.conform(p1__25922_SHARP_,x);
});})(___$1,form_keys))
,self__.forms);
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid,null], null), null),conformed_vals))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,x,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (conformed_vals,___$1,form_keys){
return (function (p1__25923_SHARP_,p2__25924_SHARP_){
return cljs.core.select_keys(p1__25923_SHARP_,p2__25924_SHARP_);
});})(conformed_vals,___$1,form_keys))
,conformed_vals,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$spec_DASH_tools$parse_SLASH_keys,self__.form_keys)));
}
});})(form_keys))
;

spec_tools.core.t_spec_tools$core25925.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (form_keys){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.unform_STAR_(self__.merge_spec,x);
});})(form_keys))
;

spec_tools.core.t_spec_tools$core25925.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (form_keys){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_STAR_(self__.merge_spec,path,via,in$,x);
});})(form_keys))
;

spec_tools.core.t_spec_tools$core25925.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (form_keys){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.gen_STAR_(self__.merge_spec,overrides,path,rmap);
});})(form_keys))
;

spec_tools.core.t_spec_tools$core25925.getBasis = ((function (form_keys){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$spec_DASH_form,cljs.core.cst$sym$merge_DASH_spec,cljs.core.cst$sym$form_DASH_keys,cljs.core.cst$sym$meta25926], null);
});})(form_keys))
;

spec_tools.core.t_spec_tools$core25925.cljs$lang$type = true;

spec_tools.core.t_spec_tools$core25925.cljs$lang$ctorStr = "spec-tools.core/t_spec_tools$core25925";

spec_tools.core.t_spec_tools$core25925.cljs$lang$ctorPrWriter = ((function (form_keys){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"spec-tools.core/t_spec_tools$core25925");
});})(form_keys))
;

/**
 * Positional factory function for spec-tools.core/t_spec_tools$core25925.
 */
spec_tools.core.__GT_t_spec_tools$core25925 = ((function (form_keys){
return (function spec_tools$core$merge_impl_$___GT_t_spec_tools$core25925(forms__$1,spec_form__$1,merge_spec__$1,form_keys__$1,meta25926){
return (new spec_tools.core.t_spec_tools$core25925(forms__$1,spec_form__$1,merge_spec__$1,form_keys__$1,meta25926));
});})(form_keys))
;

}

return (new spec_tools.core.t_spec_tools$core25925(forms,spec_form,merge_spec,form_keys,cljs.core.PersistentArrayMap.EMPTY));
})()
;
return spec_tools.core.create_spec(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$spec,spec,cljs.core.cst$kw$form,spec_form,cljs.core.cst$kw$type,cljs.core.cst$kw$map], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,clojure.set.union,form_keys)], 0)));
});
