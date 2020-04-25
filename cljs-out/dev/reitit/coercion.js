// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('reitit.coercion');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.walk');
goog.require('reitit.impl');

/**
 * Pluggable coercion protocol
 * @interface
 */
reitit.coercion.Coercion = function(){};

/**
 * Keyword name for the coercion
 */
reitit.coercion._get_name = (function reitit$coercion$_get_name(this$){
if(((!((this$ == null))) && (!((this$.reitit$coercion$Coercion$_get_name$arity$1 == null))))){
return this$.reitit$coercion$Coercion$_get_name$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.coercion._get_name[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (reitit.coercion._get_name["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Coercion.-get-name",this$);
}
}
}
});

/**
 * Coercion options
 */
reitit.coercion._get_options = (function reitit$coercion$_get_options(this$){
if(((!((this$ == null))) && (!((this$.reitit$coercion$Coercion$_get_options$arity$1 == null))))){
return this$.reitit$coercion$Coercion$_get_options$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.coercion._get_options[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (reitit.coercion._get_options["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Coercion.-get-options",this$);
}
}
}
});

/**
 * Returns api documentation
 */
reitit.coercion._get_apidocs = (function reitit$coercion$_get_apidocs(this$,specification,data){
if(((!((this$ == null))) && (!((this$.reitit$coercion$Coercion$_get_apidocs$arity$3 == null))))){
return this$.reitit$coercion$Coercion$_get_apidocs$arity$3(this$,specification,data);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.coercion._get_apidocs[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(this$,specification,data) : m__4244__auto__.call(null,this$,specification,data));
} else {
var m__4244__auto____$1 = (reitit.coercion._get_apidocs["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,specification,data) : m__4244__auto____$1.call(null,this$,specification,data));
} else {
throw cljs.core.missing_protocol("Coercion.-get-apidocs",this$);
}
}
}
});

/**
 * Compiles a model
 */
reitit.coercion._compile_model = (function reitit$coercion$_compile_model(this$,model,name){
if(((!((this$ == null))) && (!((this$.reitit$coercion$Coercion$_compile_model$arity$3 == null))))){
return this$.reitit$coercion$Coercion$_compile_model$arity$3(this$,model,name);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.coercion._compile_model[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(this$,model,name) : m__4244__auto__.call(null,this$,model,name));
} else {
var m__4244__auto____$1 = (reitit.coercion._compile_model["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,model,name) : m__4244__auto____$1.call(null,this$,model,name));
} else {
throw cljs.core.missing_protocol("Coercion.-compile-model",this$);
}
}
}
});

/**
 * Returns a new model which allows extra keys in maps
 */
reitit.coercion._open_model = (function reitit$coercion$_open_model(this$,model){
if(((!((this$ == null))) && (!((this$.reitit$coercion$Coercion$_open_model$arity$2 == null))))){
return this$.reitit$coercion$Coercion$_open_model$arity$2(this$,model);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.coercion._open_model[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,model) : m__4244__auto__.call(null,this$,model));
} else {
var m__4244__auto____$1 = (reitit.coercion._open_model["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,model) : m__4244__auto____$1.call(null,this$,model));
} else {
throw cljs.core.missing_protocol("Coercion.-open-model",this$);
}
}
}
});

/**
 * Converts error in to a serializable format
 */
reitit.coercion._encode_error = (function reitit$coercion$_encode_error(this$,error){
if(((!((this$ == null))) && (!((this$.reitit$coercion$Coercion$_encode_error$arity$2 == null))))){
return this$.reitit$coercion$Coercion$_encode_error$arity$2(this$,error);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.coercion._encode_error[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,error) : m__4244__auto__.call(null,this$,error));
} else {
var m__4244__auto____$1 = (reitit.coercion._encode_error["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,error) : m__4244__auto____$1.call(null,this$,error));
} else {
throw cljs.core.missing_protocol("Coercion.-encode-error",this$);
}
}
}
});

/**
 * Returns a `value format => value` request coercion function
 */
reitit.coercion._request_coercer = (function reitit$coercion$_request_coercer(this$,type,model){
if(((!((this$ == null))) && (!((this$.reitit$coercion$Coercion$_request_coercer$arity$3 == null))))){
return this$.reitit$coercion$Coercion$_request_coercer$arity$3(this$,type,model);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.coercion._request_coercer[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$3(this$,type,model) : m__4244__auto__.call(null,this$,type,model));
} else {
var m__4244__auto____$1 = (reitit.coercion._request_coercer["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,type,model) : m__4244__auto____$1.call(null,this$,type,model));
} else {
throw cljs.core.missing_protocol("Coercion.-request-coercer",this$);
}
}
}
});

/**
 * Returns a `value format => value` response coercion function
 */
reitit.coercion._response_coercer = (function reitit$coercion$_response_coercer(this$,model){
if(((!((this$ == null))) && (!((this$.reitit$coercion$Coercion$_response_coercer$arity$2 == null))))){
return this$.reitit$coercion$Coercion$_response_coercer$arity$2(this$,model);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (reitit.coercion._response_coercer[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$2(this$,model) : m__4244__auto__.call(null,this$,model));
} else {
var m__4244__auto____$1 = (reitit.coercion._response_coercer["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,model) : m__4244__auto____$1.call(null,this$,model));
} else {
throw cljs.core.missing_protocol("Coercion.-response-coercer",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.coercion.CoercionError = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.coercion.CoercionError.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

reitit.coercion.CoercionError.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k24919,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__24923 = k24919;
switch (G__24923) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24919,else__4206__auto__);

}
});

reitit.coercion.CoercionError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#reitit.coercion.CoercionError{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

reitit.coercion.CoercionError.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24918){
var self__ = this;
var G__24918__$1 = this;
return (new cljs.core.RecordIter((0),G__24918__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

reitit.coercion.CoercionError.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

reitit.coercion.CoercionError.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new reitit.coercion.CoercionError(self__.__meta,self__.__extmap,self__.__hash));
});

reitit.coercion.CoercionError.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

reitit.coercion.CoercionError.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__24924 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-537525465 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__24924(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

reitit.coercion.CoercionError.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24920,other24921){
var self__ = this;
var this24920__$1 = this;
return ((!((other24921 == null))) && ((this24920__$1.constructor === other24921.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24920__$1.__extmap,other24921.__extmap)));
});

reitit.coercion.CoercionError.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new reitit.coercion.CoercionError(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

reitit.coercion.CoercionError.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__24918){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__24925 = cljs.core.keyword_identical_QMARK_;
var expr__24926 = k__4211__auto__;
return (new reitit.coercion.CoercionError(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__24918),null));
});

reitit.coercion.CoercionError.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

reitit.coercion.CoercionError.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__24918){
var self__ = this;
var this__4202__auto____$1 = this;
return (new reitit.coercion.CoercionError(G__24918,self__.__extmap,self__.__hash));
});

reitit.coercion.CoercionError.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

reitit.coercion.CoercionError.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

reitit.coercion.CoercionError.cljs$lang$type = true;

reitit.coercion.CoercionError.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"reitit.coercion/CoercionError",null,(1),null));
});

reitit.coercion.CoercionError.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"reitit.coercion/CoercionError");
});

/**
 * Positional factory function for reitit.coercion/CoercionError.
 */
reitit.coercion.__GT_CoercionError = (function reitit$coercion$__GT_CoercionError(){
return (new reitit.coercion.CoercionError(null,null,null));
});

/**
 * Factory function for reitit.coercion/CoercionError, taking a map of keywords to field values.
 */
reitit.coercion.map__GT_CoercionError = (function reitit$coercion$map__GT_CoercionError(G__24922){
var extmap__4236__auto__ = (function (){var G__24928 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__24922);
if(cljs.core.record_QMARK_(G__24922)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24928);
} else {
return G__24928;
}
})();
return (new reitit.coercion.CoercionError(null,cljs.core.not_empty(extmap__4236__auto__),null));
});

reitit.coercion.error_QMARK_ = (function reitit$coercion$error_QMARK_(x){
return (x instanceof reitit.coercion.CoercionError);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.coercion.ParameterCoercion = (function (in$,style,keywordize_QMARK_,open_QMARK_,__meta,__extmap,__hash){
this.in$ = in$;
this.style = style;
this.keywordize_QMARK_ = keywordize_QMARK_;
this.open_QMARK_ = open_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.coercion.ParameterCoercion.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4203__auto__,k__4204__auto__){
var self__ = this;
var this__4203__auto____$1 = this;
return this__4203__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4204__auto__,null);
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4205__auto__,k24931,else__4206__auto__){
var self__ = this;
var this__4205__auto____$1 = this;
var G__24935 = k24931;
var G__24935__$1 = (((G__24935 instanceof cljs.core.Keyword))?G__24935.fqn:null);
switch (G__24935__$1) {
case "in":
return self__.in$;

break;
case "style":
return self__.style;

break;
case "keywordize?":
return self__.keywordize_QMARK_;

break;
case "open?":
return self__.open_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24931,else__4206__auto__);

}
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4217__auto__,writer__4218__auto__,opts__4219__auto__){
var self__ = this;
var this__4217__auto____$1 = this;
var pr_pair__4220__auto__ = ((function (this__4217__auto____$1){
return (function (keyval__4221__auto__){
return cljs.core.pr_sequential_writer(writer__4218__auto__,cljs.core.pr_writer,""," ","",opts__4219__auto__,keyval__4221__auto__);
});})(this__4217__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4218__auto__,pr_pair__4220__auto__,"#reitit.coercion.ParameterCoercion{",", ","}",opts__4219__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$in,self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$style,self__.style],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$keywordize_QMARK_,self__.keywordize_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$open_QMARK_,self__.open_QMARK_],null))], null),self__.__extmap));
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24930){
var self__ = this;
var G__24930__$1 = this;
return (new cljs.core.RecordIter((0),G__24930__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in,cljs.core.cst$kw$style,cljs.core.cst$kw$keywordize_QMARK_,cljs.core.cst$kw$open_QMARK_], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4201__auto__){
var self__ = this;
var this__4201__auto____$1 = this;
return self__.__meta;
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4198__auto__){
var self__ = this;
var this__4198__auto____$1 = this;
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4207__auto__){
var self__ = this;
var this__4207__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4199__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
var h__4061__auto__ = self__.__hash;
if(!((h__4061__auto__ == null))){
return h__4061__auto__;
} else {
var h__4061__auto____$1 = (function (){var fexpr__24936 = ((function (h__4061__auto__,this__4199__auto____$1){
return (function (coll__4200__auto__){
return (-1253949273 ^ cljs.core.hash_unordered_coll(coll__4200__auto__));
});})(h__4061__auto__,this__4199__auto____$1))
;
return fexpr__24936(this__4199__auto____$1);
})();
self__.__hash = h__4061__auto____$1;

return h__4061__auto____$1;
}
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24932,other24933){
var self__ = this;
var this24932__$1 = this;
return ((!((other24933 == null))) && ((this24932__$1.constructor === other24933.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24932__$1.in,other24933.in)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24932__$1.style,other24933.style)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24932__$1.keywordize_QMARK_,other24933.keywordize_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24932__$1.open_QMARK_,other24933.open_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24932__$1.__extmap,other24933.__extmap)));
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4212__auto__,k__4213__auto__){
var self__ = this;
var this__4212__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$keywordize_QMARK_,null,cljs.core.cst$kw$style,null,cljs.core.cst$kw$open_QMARK_,null,cljs.core.cst$kw$in,null], null), null),k__4213__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4212__auto____$1),self__.__meta),k__4213__auto__);
} else {
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4213__auto__)),null));
}
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4210__auto__,k__4211__auto__,G__24930){
var self__ = this;
var this__4210__auto____$1 = this;
var pred__24937 = cljs.core.keyword_identical_QMARK_;
var expr__24938 = k__4211__auto__;
if(cljs.core.truth_((function (){var G__24940 = cljs.core.cst$kw$in;
var G__24941 = expr__24938;
return (pred__24937.cljs$core$IFn$_invoke$arity$2 ? pred__24937.cljs$core$IFn$_invoke$arity$2(G__24940,G__24941) : pred__24937.call(null,G__24940,G__24941));
})())){
return (new reitit.coercion.ParameterCoercion(G__24930,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24942 = cljs.core.cst$kw$style;
var G__24943 = expr__24938;
return (pred__24937.cljs$core$IFn$_invoke$arity$2 ? pred__24937.cljs$core$IFn$_invoke$arity$2(G__24942,G__24943) : pred__24937.call(null,G__24942,G__24943));
})())){
return (new reitit.coercion.ParameterCoercion(self__.in$,G__24930,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24944 = cljs.core.cst$kw$keywordize_QMARK_;
var G__24945 = expr__24938;
return (pred__24937.cljs$core$IFn$_invoke$arity$2 ? pred__24937.cljs$core$IFn$_invoke$arity$2(G__24944,G__24945) : pred__24937.call(null,G__24944,G__24945));
})())){
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,G__24930,self__.open_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24946 = cljs.core.cst$kw$open_QMARK_;
var G__24947 = expr__24938;
return (pred__24937.cljs$core$IFn$_invoke$arity$2 ? pred__24937.cljs$core$IFn$_invoke$arity$2(G__24946,G__24947) : pred__24937.call(null,G__24946,G__24947));
})())){
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,G__24930,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4211__auto__,G__24930),null));
}
}
}
}
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4215__auto__){
var self__ = this;
var this__4215__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$in,self__.in$,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$style,self__.style,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$keywordize_QMARK_,self__.keywordize_QMARK_,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$open_QMARK_,self__.open_QMARK_,null))], null),self__.__extmap));
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4202__auto__,G__24930){
var self__ = this;
var this__4202__auto____$1 = this;
return (new reitit.coercion.ParameterCoercion(self__.in$,self__.style,self__.keywordize_QMARK_,self__.open_QMARK_,G__24930,self__.__extmap,self__.__hash));
});

reitit.coercion.ParameterCoercion.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4208__auto__,entry__4209__auto__){
var self__ = this;
var this__4208__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4209__auto__)){
return this__4208__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4209__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4208__auto____$1,entry__4209__auto__);
}
});

reitit.coercion.ParameterCoercion.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$in,cljs.core.cst$sym$style,cljs.core.cst$sym$keywordize_QMARK_,cljs.core.cst$sym$open_QMARK_], null);
});

reitit.coercion.ParameterCoercion.cljs$lang$type = true;

reitit.coercion.ParameterCoercion.cljs$lang$ctorPrSeq = (function (this__4240__auto__){
return (new cljs.core.List(null,"reitit.coercion/ParameterCoercion",null,(1),null));
});

reitit.coercion.ParameterCoercion.cljs$lang$ctorPrWriter = (function (this__4240__auto__,writer__4241__auto__){
return cljs.core._write(writer__4241__auto__,"reitit.coercion/ParameterCoercion");
});

/**
 * Positional factory function for reitit.coercion/ParameterCoercion.
 */
reitit.coercion.__GT_ParameterCoercion = (function reitit$coercion$__GT_ParameterCoercion(in$,style,keywordize_QMARK_,open_QMARK_){
return (new reitit.coercion.ParameterCoercion(in$,style,keywordize_QMARK_,open_QMARK_,null,null,null));
});

/**
 * Factory function for reitit.coercion/ParameterCoercion, taking a map of keywords to field values.
 */
reitit.coercion.map__GT_ParameterCoercion = (function reitit$coercion$map__GT_ParameterCoercion(G__24934){
var extmap__4236__auto__ = (function (){var G__24948 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24934,cljs.core.cst$kw$in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$style,cljs.core.cst$kw$keywordize_QMARK_,cljs.core.cst$kw$open_QMARK_], 0));
if(cljs.core.record_QMARK_(G__24934)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__24948);
} else {
return G__24948;
}
})();
return (new reitit.coercion.ParameterCoercion(cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(G__24934),cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(G__24934),cljs.core.cst$kw$keywordize_QMARK_.cljs$core$IFn$_invoke$arity$1(G__24934),cljs.core.cst$kw$open_QMARK_.cljs$core$IFn$_invoke$arity$1(G__24934),null,cljs.core.not_empty(extmap__4236__auto__),null));
});

reitit.coercion.default_parameter_coercion = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$query,reitit.coercion.__GT_ParameterCoercion(cljs.core.cst$kw$query_DASH_params,cljs.core.cst$kw$string,true,true),cljs.core.cst$kw$body,reitit.coercion.__GT_ParameterCoercion(cljs.core.cst$kw$body_DASH_params,cljs.core.cst$kw$body,false,false),cljs.core.cst$kw$form,reitit.coercion.__GT_ParameterCoercion(cljs.core.cst$kw$form_DASH_params,cljs.core.cst$kw$string,true,true),cljs.core.cst$kw$header,reitit.coercion.__GT_ParameterCoercion(cljs.core.cst$kw$headers,cljs.core.cst$kw$string,true,true),cljs.core.cst$kw$path,reitit.coercion.__GT_ParameterCoercion(cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$string,true,true)], null);
reitit.coercion.request_coercion_failed_BANG_ = (function reitit$coercion$request_coercion_failed_BANG_(result,coercion,value,in$,request){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Request coercion failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0)))].join(''),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,result),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$coercion_SLASH_request_DASH_coercion,cljs.core.cst$kw$coercion,coercion,cljs.core.cst$kw$value,value,cljs.core.cst$kw$in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$request,in$], null),cljs.core.cst$kw$request,request], null)], 0)));
});
reitit.coercion.response_coercion_failed_BANG_ = (function reitit$coercion$response_coercion_failed_BANG_(result,coercion,value,request,response){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Response coercion failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0)))].join(''),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,result),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type,cljs.core.cst$kw$reitit$coercion_SLASH_response_DASH_coercion,cljs.core.cst$kw$coercion,coercion,cljs.core.cst$kw$value,value,cljs.core.cst$kw$in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$response,cljs.core.cst$kw$body], null),cljs.core.cst$kw$request,request,cljs.core.cst$kw$response,response], null)], 0)));
});
reitit.coercion.extract_request_format_default = (function reitit$coercion$extract_request_format_default(request){
return cljs.core.cst$kw$format.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$muuntaja_SLASH_request.cljs$core$IFn$_invoke$arity$1(request));
});
reitit.coercion.request_coercer = (function reitit$coercion$request_coercer(coercion,type,model,p__24950){
var map__24951 = p__24950;
var map__24951__$1 = ((((!((map__24951 == null)))?(((((map__24951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24951):map__24951);
var extract_request_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24951__$1,cljs.core.cst$kw$reitit$coercion_SLASH_extract_DASH_request_DASH_format,reitit.coercion.extract_request_format_default);
var parameter_coercion = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24951__$1,cljs.core.cst$kw$reitit$coercion_SLASH_parameter_DASH_coercion,reitit.coercion.default_parameter_coercion);
if(cljs.core.truth_(coercion)){
var temp__5718__auto__ = (parameter_coercion.cljs$core$IFn$_invoke$arity$1 ? parameter_coercion.cljs$core$IFn$_invoke$arity$1(type) : parameter_coercion.call(null,type));
if(cljs.core.truth_(temp__5718__auto__)){
var map__24953 = temp__5718__auto__;
var map__24953__$1 = ((((!((map__24953 == null)))?(((((map__24953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24953):map__24953);
var keywordize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24953__$1,cljs.core.cst$kw$keywordize_QMARK_);
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24953__$1,cljs.core.cst$kw$open_QMARK_);
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24953__$1,cljs.core.cst$kw$in);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24953__$1,cljs.core.cst$kw$style);
var transform = cljs.core.comp.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(keywordize_QMARK_)?clojure.walk.keywordize_keys:cljs.core.identity),in$);
var model__$1 = (cljs.core.truth_(open_QMARK_)?reitit.coercion._open_model(coercion,model):model);
var coercer = reitit.coercion._request_coercer(coercion,style,model__$1);
return ((function (transform,model__$1,coercer,map__24953,map__24953__$1,keywordize_QMARK_,open_QMARK_,in$,style,temp__5718__auto__,map__24951,map__24951__$1,extract_request_format,parameter_coercion){
return (function (request){
var value = (transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(request) : transform.call(null,request));
var format = (extract_request_format.cljs$core$IFn$_invoke$arity$1 ? extract_request_format.cljs$core$IFn$_invoke$arity$1(request) : extract_request_format.call(null,request));
var result = (coercer.cljs$core$IFn$_invoke$arity$2 ? coercer.cljs$core$IFn$_invoke$arity$2(value,format) : coercer.call(null,value,format));
if(cljs.core.truth_(reitit.coercion.error_QMARK_(result))){
return reitit.coercion.request_coercion_failed_BANG_(result,coercion,value,in$,request);
} else {
return result;
}
});
;})(transform,model__$1,coercer,map__24953,map__24953__$1,keywordize_QMARK_,open_QMARK_,in$,style,temp__5718__auto__,map__24951,map__24951__$1,extract_request_format,parameter_coercion))
} else {
return null;
}
} else {
return null;
}
});
reitit.coercion.extract_response_format_default = (function reitit$coercion$extract_response_format_default(request,_){
return cljs.core.cst$kw$format.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$muuntaja_SLASH_response.cljs$core$IFn$_invoke$arity$1(request));
});
reitit.coercion.response_coercer = (function reitit$coercion$response_coercer(coercion,body,p__24955){
var map__24956 = p__24955;
var map__24956__$1 = ((((!((map__24956 == null)))?(((((map__24956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24956):map__24956);
var extract_response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24956__$1,cljs.core.cst$kw$extract_DASH_response_DASH_format,reitit.coercion.extract_response_format_default);
if(cljs.core.truth_(coercion)){
var temp__5718__auto__ = reitit.coercion._response_coercer(coercion,body);
if(cljs.core.truth_(temp__5718__auto__)){
var coercer = temp__5718__auto__;
return ((function (coercer,temp__5718__auto__,map__24956,map__24956__$1,extract_response_format){
return (function (request,response){
var format = (extract_response_format.cljs$core$IFn$_invoke$arity$2 ? extract_response_format.cljs$core$IFn$_invoke$arity$2(request,response) : extract_response_format.call(null,request,response));
var value = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(response);
var result = (coercer.cljs$core$IFn$_invoke$arity$2 ? coercer.cljs$core$IFn$_invoke$arity$2(value,format) : coercer.call(null,value,format));
if(cljs.core.truth_(reitit.coercion.error_QMARK_(result))){
return reitit.coercion.response_coercion_failed_BANG_(result,coercion,value,request,response);
} else {
return result;
}
});
;})(coercer,temp__5718__auto__,map__24956,map__24956__$1,extract_response_format))
} else {
return null;
}
} else {
return null;
}
});
reitit.coercion.encode_error = (function reitit$coercion$encode_error(data){
return reitit.coercion._encode_error(cljs.core.cst$kw$coercion.cljs$core$IFn$_invoke$arity$1(data),cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.cst$kw$request,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$response], 0)),cljs.core.cst$kw$coercion,reitit.coercion._get_name));
});
reitit.coercion.coerce_request = (function reitit$coercion$coerce_request(coercers,request){
return cljs.core.reduce_kv((function (acc,k,coercer){
return reitit.impl.fast_assoc(acc,k,(coercer.cljs$core$IFn$_invoke$arity$1 ? coercer.cljs$core$IFn$_invoke$arity$1(request) : coercer.call(null,request)));
}),cljs.core.PersistentArrayMap.EMPTY,coercers);
});
reitit.coercion.coerce_response = (function reitit$coercion$coerce_response(coercers,request,response){
if(cljs.core.truth_(response)){
var temp__5718__auto__ = (function (){var or__3949__auto__ = (function (){var G__24959 = cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response);
return (coercers.cljs$core$IFn$_invoke$arity$1 ? coercers.cljs$core$IFn$_invoke$arity$1(G__24959) : coercers.call(null,G__24959));
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var G__24960 = cljs.core.cst$kw$default;
return (coercers.cljs$core$IFn$_invoke$arity$1 ? coercers.cljs$core$IFn$_invoke$arity$1(G__24960) : coercers.call(null,G__24960));
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var coercer = temp__5718__auto__;
return reitit.impl.fast_assoc(response,cljs.core.cst$kw$body,(coercer.cljs$core$IFn$_invoke$arity$2 ? coercer.cljs$core$IFn$_invoke$arity$2(request,response) : coercer.call(null,request,response)));
} else {
return response;
}
} else {
return null;
}
});
reitit.coercion.request_coercers = (function reitit$coercion$request_coercers(coercion,parameters,opts){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,(function (){var iter__4324__auto__ = (function reitit$coercion$request_coercers_$_iter__24961(s__24962){
return (new cljs.core.LazySeq(null,(function (){
var s__24962__$1 = s__24962;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__24962__$1);
if(temp__5720__auto__){
var s__24962__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24962__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__24962__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__24964 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__24963 = (0);
while(true){
if((i__24963 < size__4323__auto__)){
var vec__24965 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__24963);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24965,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24965,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__24964,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reitit.coercion.request_coercer(coercion,k,v,opts)], null));

var G__24971 = (i__24963 + (1));
i__24963 = G__24971;
continue;
} else {
var G__24972 = (i__24963 + (1));
i__24963 = G__24972;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24964),reitit$coercion$request_coercers_$_iter__24961(cljs.core.chunk_rest(s__24962__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24964),null);
}
} else {
var vec__24968 = cljs.core.first(s__24962__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24968,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24968,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reitit.coercion.request_coercer(coercion,k,v,opts)], null),reitit$coercion$request_coercers_$_iter__24961(cljs.core.rest(s__24962__$2)));
} else {
var G__24973 = cljs.core.rest(s__24962__$2);
s__24962__$1 = G__24973;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(parameters);
})()));
});
reitit.coercion.response_coercers = (function reitit$coercion$response_coercers(coercion,responses,opts){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,(function (){var iter__4324__auto__ = (function reitit$coercion$response_coercers_$_iter__24974(s__24975){
return (new cljs.core.LazySeq(null,(function (){
var s__24975__$1 = s__24975;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__24975__$1);
if(temp__5720__auto__){
var s__24975__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24975__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__24975__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__24977 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__24976 = (0);
while(true){
if((i__24976 < size__4323__auto__)){
var vec__24978 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__24976);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24978,(0),null);
var map__24981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24978,(1),null);
var map__24981__$1 = ((((!((map__24981 == null)))?(((((map__24981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24981):map__24981);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24981__$1,cljs.core.cst$kw$body);
if(cljs.core.truth_(body)){
cljs.core.chunk_append(b__24977,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,reitit.coercion.response_coercer(coercion,body,opts)], null));

var G__24988 = (i__24976 + (1));
i__24976 = G__24988;
continue;
} else {
var G__24989 = (i__24976 + (1));
i__24976 = G__24989;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24977),reitit$coercion$response_coercers_$_iter__24974(cljs.core.chunk_rest(s__24975__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24977),null);
}
} else {
var vec__24983 = cljs.core.first(s__24975__$2);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24983,(0),null);
var map__24986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24983,(1),null);
var map__24986__$1 = ((((!((map__24986 == null)))?(((((map__24986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24986):map__24986);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24986__$1,cljs.core.cst$kw$body);
if(cljs.core.truth_(body)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,reitit.coercion.response_coercer(coercion,body,opts)], null),reitit$coercion$response_coercers_$_iter__24974(cljs.core.rest(s__24975__$2)));
} else {
var G__24990 = cljs.core.rest(s__24975__$2);
s__24975__$1 = G__24990;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(responses);
})()));
});
reitit.coercion.get_apidocs = (function reitit$coercion$get_apidocs(coercion,specification,data){
var swagger_parameter = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$query,cljs.core.cst$kw$query,cljs.core.cst$kw$body,cljs.core.cst$kw$body,cljs.core.cst$kw$form,cljs.core.cst$kw$formData,cljs.core.cst$kw$header,cljs.core.cst$kw$header,cljs.core.cst$kw$path,cljs.core.cst$kw$path,cljs.core.cst$kw$multipart,cljs.core.cst$kw$formData], null);
var G__24991 = specification;
var G__24991__$1 = (((G__24991 instanceof cljs.core.Keyword))?G__24991.fqn:null);
switch (G__24991__$1) {
case "swagger":
return reitit.coercion._get_apidocs(coercion,specification,cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$parameters,((function (G__24991,G__24991__$1,swagger_parameter){
return (function (parameters){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__24991,G__24991__$1,swagger_parameter){
return (function (p__24992){
var vec__24993 = p__24992;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24993,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24993,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(swagger_parameter.cljs$core$IFn$_invoke$arity$1 ? swagger_parameter.cljs$core$IFn$_invoke$arity$1(k) : swagger_parameter.call(null,k)),v], null);
});})(G__24991,G__24991__$1,swagger_parameter))
,parameters)));
});})(G__24991,G__24991__$1,swagger_parameter))
));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24991__$1)].join('')));

}
});
/**
 * A router :compile implementation which reads the `:parameters`
 *   and `:coercion` data to create compiled coercers into Match under
 *   `:result. A pre-requisite to use [[coerce!]].
 */
reitit.coercion.compile_request_coercers = (function reitit$coercion$compile_request_coercers(p__24997,opts){
var vec__24998 = p__24997;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24998,(0),null);
var map__25001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24998,(1),null);
var map__25001__$1 = ((((!((map__25001 == null)))?(((((map__25001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25001):map__25001);
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25001__$1,cljs.core.cst$kw$parameters);
var coercion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25001__$1,cljs.core.cst$kw$coercion);
if(cljs.core.truth_((function (){var and__3938__auto__ = parameters;
if(cljs.core.truth_(and__3938__auto__)){
return coercion;
} else {
return and__3938__auto__;
}
})())){
return reitit.coercion.request_coercers(coercion,parameters,opts);
} else {
return null;
}
});
/**
 * Returns a map of coerced input parameters using pre-compiled
 *   coercers under `:result` (provided by [[compile-request-coercers]].
 *   Throws `ex-info` if parameters can't be coerced
 *   If coercion or parameters are not defined, return `nil`
 */
reitit.coercion.coerce_BANG_ = (function reitit$coercion$coerce_BANG_(match){
var temp__5718__auto__ = cljs.core.cst$kw$result.cljs$core$IFn$_invoke$arity$1(match);
if(cljs.core.truth_(temp__5718__auto__)){
var coercers = temp__5718__auto__;
return reitit.coercion.coerce_request(coercers,match);
} else {
return null;
}
});
