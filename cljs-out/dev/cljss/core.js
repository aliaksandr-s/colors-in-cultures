// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('cljss.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljss.sheet');
goog.require('cljss.utils');
goog.require('clojure.string');
cljss.core.sheets = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljss.sheet.create_sheet(),null,(1),null)));
cljss.core.remove_styles_BANG_ = (function cljss$core$remove_styles_BANG_(){
cljs.core.run_BANG_(cljss.sheet.flush_BANG_,cljs.core.deref(cljss.core.sheets));

return cljs.core.reset_BANG_(cljss.core.sheets,(new cljs.core.List(null,cljss.sheet.create_sheet(),null,(1),null)));
});
/**
 * Takes class name, static styles and dynamic styles.
 * Injects styles and returns a string of generated class names.
 */
cljss.core.css = (function cljss$core$css(cls,static$,vars){
var static$__$1 = ((typeof static$ === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [static$], null):static$);
var sheet = cljs.core.first(cljs.core.deref(cljss.core.sheets));
if(cljs.core.truth_(cljss.sheet.filled_QMARK_(sheet))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljss.core.sheets,cljs.core.conj,cljss.sheet.create_sheet());

return (cljss.core.css.cljs$core$IFn$_invoke$arity$3 ? cljss.core.css.cljs$core$IFn$_invoke$arity$3(cls,static$__$1,vars) : cljss.core.css.call(null,cls,static$__$1,vars));
} else {
var G__19680_19687 = static$__$1;
var vec__19681_19688 = G__19680_19687;
var seq__19682_19689 = cljs.core.seq(vec__19681_19688);
var first__19683_19690 = cljs.core.first(seq__19682_19689);
var seq__19682_19691__$1 = cljs.core.next(seq__19682_19689);
var s_19692 = first__19683_19690;
var static_19693__$2 = seq__19682_19691__$1;
var idx_19694 = (0);
var G__19680_19695__$1 = G__19680_19687;
var idx_19696__$1 = idx_19694;
while(true){
var vec__19684_19697 = G__19680_19695__$1;
var seq__19685_19698 = cljs.core.seq(vec__19684_19697);
var first__19686_19699 = cljs.core.first(seq__19685_19698);
var seq__19685_19700__$1 = cljs.core.next(seq__19685_19698);
var s_19701__$1 = first__19686_19699;
var static_19702__$3 = seq__19685_19700__$1;
var idx_19703__$2 = idx_19696__$1;
var cls_19704__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx_19703__$2)].join('');
cljss.sheet.insert_BANG_(sheet,s_19701__$1,cls_19704__$1);

if(cljs.core.empty_QMARK_(static_19702__$3)){
} else {
var G__19705 = static_19702__$3;
var G__19706 = (idx_19703__$2 + (1));
G__19680_19695__$1 = G__19705;
idx_19696__$1 = G__19706;
continue;
}
break;
}

if((cljs.core.count(vars) > (0))){
var var_cls = ["vars-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(vars))].join('');
cljss.sheet.insert_BANG_(sheet,((function (var_cls,static$__$1,sheet){
return (function (){
return cljss.utils.build_css(var_cls,vars);
});})(var_cls,static$__$1,sheet))
,var_cls);

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_cls)].join('');
} else {
return cls;
}
}
});
/**
 * Takes CSS animation name, static styles and dynamic styles.
 * Injects styles and returns generated CSS animation name.
 */
cljss.core.css_keyframes = (function cljss$core$css_keyframes(cls,static$,vars){
var sheet = cljs.core.first(cljs.core.deref(cljss.core.sheets));
if(cljs.core.truth_(cljss.sheet.filled_QMARK_(sheet))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljss.core.sheets,cljs.core.conj,cljss.sheet.create_sheet());

return (cljss.core.css_keyframes.cljs$core$IFn$_invoke$arity$3 ? cljss.core.css_keyframes.cljs$core$IFn$_invoke$arity$3(cls,static$,vars) : cljss.core.css_keyframes.call(null,cls,static$,vars));
} else {
var inner = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (sheet){
return (function (s,p__19707){
var vec__19708 = p__19707;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19708,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19708,(1),null);
return clojure.string.replace(s,id,val);
});})(sheet))
,static$,vars);
var anim_name = ["animation-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(vars))].join('');
var keyframes = ["@keyframes ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(anim_name),"{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inner),"}"].join('');
cljss.sheet.insert_BANG_(sheet,keyframes,anim_name);

return anim_name;
}
});
cljss.core._camel_case = (function cljss$core$_camel_case(k){
if((((k instanceof cljs.core.Keyword)) || (typeof k === 'string') || ((k instanceof cljs.core.Symbol)))){
var vec__19711 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k),/-/);
var seq__19712 = cljs.core.seq(vec__19711);
var first__19713 = cljs.core.first(seq__19712);
var seq__19712__$1 = cljs.core.next(seq__19712);
var first_word = first__19713;
var words = seq__19712__$1;
if(((cljs.core.empty_QMARK_(words)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("aria",first_word)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("data",first_word)))){
return k;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,words),first_word)));
}
} else {
return k;
}
});
cljss.core._compile_class_name = (function cljss$core$_compile_class_name(props){
var className = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.vals(cljs.core.select_keys(props,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$className,cljs.core.cst$kw$class,cljs.core.cst$kw$class_DASH_name], null))));
if(cljs.core.empty_QMARK_(className)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",className))," "].join('');
}
});
cljss.core._mk_var_class = (function cljss$core$_mk_var_class(props,vars,cls,static$){
return cljss.core.css(cls,static$,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19715){
var vec__19716 = p__19715;
var cls__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19716,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19716,(1),null);
if((function (){var and__3938__auto__ = cljs.core.ifn_QMARK_(v);
if(and__3938__auto__){
if(!((v == null))){
if((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$)))){
return true;
} else {
if((!v.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,v);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,v);
}
} else {
return and__3938__auto__;
}
})()){
return (new cljs.core.List(null,cls__$1,(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(v,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__19716,cls__$1,v){
return (function (p1__19714_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,p1__19714_SHARP_,null);
});})(vec__19716,cls__$1,v))
,cljs.core.flatten((new cljs.core.List(null,cljs.core.meta(v),null,(1),null))))),null,(1),null)),(2),null));
} else {
if(cljs.core.ifn_QMARK_(v)){
return (new cljs.core.List(null,cls__$1,(new cljs.core.List(null,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(props) : v.call(null,props)),null,(1),null)),(2),null));
} else {
return (new cljs.core.List(null,cls__$1,(new cljs.core.List(null,v,null,(1),null)),(2),null));

}
}
}),vars));
});
cljss.core._meta_attrs = (function cljss$core$_meta_attrs(vars){
return cljs.core.set(cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.meta,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19721_SHARP_){
if(!((p1__19721_SHARP_ == null))){
if((((p1__19721_SHARP_.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === p1__19721_SHARP_.cljs$core$IWithMeta$)))){
return true;
} else {
if((!p1__19721_SHARP_.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,p1__19721_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,p1__19721_SHARP_);
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,vars)))));
});
cljss.core._camel_case_attrs = (function cljss$core$_camel_case_attrs(props){
return cljs.core.reduce_kv((function (m,k,v){
var k__$1 = (function (){var G__19723 = k;
var G__19723__$1 = (((G__19723 instanceof cljs.core.Keyword))?G__19723.fqn:null);
switch (G__19723__$1) {
case "for":
return cljs.core.cst$kw$htmlFor;

break;
default:
return cljss.core._camel_case(k);

}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k__$1,v);
}),cljs.core.PersistentArrayMap.EMPTY,props);
});
cljss.core._styled = (function cljss$core$_styled(cls,static$,vars,attrs,create_element){
var clsn = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cls),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0())].join('');
var static$__$1 = ((cljss.utils.dev_QMARK_)?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (clsn){
return (function (p1__19725_SHARP_){
return clojure.string.replace(p1__19725_SHARP_,cls,clsn);
});})(clsn))
,static$):static$);
var vars__$1 = ((cljss.utils.dev_QMARK_)?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (clsn,static$__$1){
return (function (p__19726){
var vec__19727 = p__19726;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19727,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19727,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace(k,cls,clsn),v], null);
});})(clsn,static$__$1))
,vars):vars);
var cls__$1 = ((cljss.utils.dev_QMARK_)?clsn:cls);
return ((function (clsn,static$__$1,vars__$1,cls__$1){
return (function() { 
var G__19733__delegate = function (props,children){
var vec__19730 = ((cljs.core.map_QMARK_(props))?[props,children]:[cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.array,props,children)]);
var props__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19730,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19730,(1),null);
var var_class = cljss.core._mk_var_class(props__$1,vars__$1,cls__$1,static$__$1);
var meta_attrs = cljss.core._meta_attrs(vars__$1);
var className = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljss.core._compile_class_name(props__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_class)].join('');
var props__$2 = cljss.core._camel_case_attrs(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,props__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(attrs,meta_attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class,cljs.core.cst$kw$class_DASH_name,cljs.core.cst$kw$className], null)], 0))),cljs.core.cst$kw$className,className));
return (create_element.cljs$core$IFn$_invoke$arity$2 ? create_element.cljs$core$IFn$_invoke$arity$2(props__$2,children__$1) : create_element.call(null,props__$2,children__$1));
};
var G__19733 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__19734__i = 0, G__19734__a = new Array(arguments.length -  1);
while (G__19734__i < G__19734__a.length) {G__19734__a[G__19734__i] = arguments[G__19734__i + 1]; ++G__19734__i;}
  children = new cljs.core.IndexedSeq(G__19734__a,0,null);
} 
return G__19733__delegate.call(this,props,children);};
G__19733.cljs$lang$maxFixedArity = 1;
G__19733.cljs$lang$applyTo = (function (arglist__19735){
var props = cljs.core.first(arglist__19735);
var children = cljs.core.rest(arglist__19735);
return G__19733__delegate(props,children);
});
G__19733.cljs$core$IFn$_invoke$arity$variadic = G__19733__delegate;
return G__19733;
})()
;
;})(clsn,static$__$1,vars__$1,cls__$1))
});
