// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it.
 */
rum.core.state = (function rum$core$state(comp){
var G__14806 = comp.state;
var G__14807 = ":rum/state";
return goog.object.get(G__14806,G__14807);
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__14808 = cljs.core.seq(props);
var chunk__14810 = null;
var count__14811 = (0);
var i__14812 = (0);
while(true){
if((i__14812 < count__14811)){
var vec__14814 = chunk__14810.cljs$core$IIndexed$_nth$arity$2(null,i__14812);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14814,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14814,(1),null);
if(!((v == null))){
var G__14817_14826 = obj;
var G__14818_14827 = cljs.core.name(k);
var G__14819_14828 = cljs.core.clj__GT_js(v);
goog.object.set(G__14817_14826,G__14818_14827,G__14819_14828);


var G__14829 = seq__14808;
var G__14830 = chunk__14810;
var G__14831 = count__14811;
var G__14832 = (i__14812 + (1));
seq__14808 = G__14829;
chunk__14810 = G__14830;
count__14811 = G__14831;
i__14812 = G__14832;
continue;
} else {
var G__14833 = seq__14808;
var G__14834 = chunk__14810;
var G__14835 = count__14811;
var G__14836 = (i__14812 + (1));
seq__14808 = G__14833;
chunk__14810 = G__14834;
count__14811 = G__14835;
i__14812 = G__14836;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__14808);
if(temp__5720__auto__){
var seq__14808__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14808__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__14808__$1);
var G__14837 = cljs.core.chunk_rest(seq__14808__$1);
var G__14838 = c__4351__auto__;
var G__14839 = cljs.core.count(c__4351__auto__);
var G__14840 = (0);
seq__14808 = G__14837;
chunk__14810 = G__14838;
count__14811 = G__14839;
i__14812 = G__14840;
continue;
} else {
var vec__14820 = cljs.core.first(seq__14808__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14820,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14820,(1),null);
if(!((v == null))){
var G__14823_14841 = obj;
var G__14824_14842 = cljs.core.name(k);
var G__14825_14843 = cljs.core.clj__GT_js(v);
goog.object.set(G__14823_14841,G__14824_14842,G__14825_14843);


var G__14844 = cljs.core.next(seq__14808__$1);
var G__14845 = null;
var G__14846 = (0);
var G__14847 = (0);
seq__14808 = G__14844;
chunk__14810 = G__14845;
count__14811 = G__14846;
i__14812 = G__14847;
continue;
} else {
var G__14848 = cljs.core.next(seq__14808__$1);
var G__14849 = null;
var G__14850 = (0);
var G__14851 = (0);
seq__14808 = G__14848;
chunk__14810 = G__14849;
count__14811 = G__14850;
i__14812 = G__14851;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect(cljs.core.cst$kw$init,mixins);
var will_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$will_DASH_mount,cljs.core.cst$kw$before_DASH_render], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect(cljs.core.cst$kw$wrap_DASH_render,mixins);
var wrapped_render = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (init,will_mount,render__$1,wrap_render){
return (function (p1__14853_SHARP_,p2__14852_SHARP_){
return (p2__14852_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__14852_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__14853_SHARP_) : p2__14852_SHARP_.call(null,p1__14853_SHARP_));
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$did_DASH_mount,cljs.core.cst$kw$after_DASH_render], null),mixins);
var did_remount = rum.util.collect(cljs.core.cst$kw$did_DASH_remount,mixins);
var should_update = rum.util.collect(cljs.core.cst$kw$should_DASH_update,mixins);
var will_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$will_DASH_update,cljs.core.cst$kw$before_DASH_render], null),mixins);
var did_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$did_DASH_update,cljs.core.cst$kw$after_DASH_render], null),mixins);
var did_catch = rum.util.collect(cljs.core.cst$kw$did_DASH_catch,mixins);
var will_unmount = rum.util.collect(cljs.core.cst$kw$will_DASH_unmount,mixins);
var child_context = rum.util.collect(cljs.core.cst$kw$child_DASH_context,mixins);
var class_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(cljs.core.cst$kw$class_DASH_properties,mixins));
var static_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(cljs.core.cst$kw$static_DASH_properties,mixins));
var ctor = ((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props){
return (function (props){
var this$ = this;
var G__14858_14895 = this$;
var G__14859_14896 = "state";
var G__14860_14897 = ({":rum/state": cljs.core.volatile_BANG_(rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(goog.object.get(props,":rum/initial-state"),cljs.core.cst$kw$rum_SLASH_react_DASH_component,this$),init,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0)))});
goog.object.set(G__14858_14895,G__14859_14896,G__14860_14897);

return React.Component.call(this$,props);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props))
;
var _ = goog.inherits(ctor,React.Component);
var prototype = goog.object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_(will_mount)){
} else {
var G__14861_14898 = prototype;
var G__14862_14899 = "componentWillMount";
var G__14863_14900 = ((function (G__14861_14898,G__14862_14899,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_mount));
});})(G__14861_14898,G__14862_14899,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__14861_14898,G__14862_14899,G__14863_14900);
}

if(cljs.core.empty_QMARK_(did_mount)){
} else {
var G__14864_14901 = prototype;
var G__14865_14902 = "componentDidMount";
var G__14866_14903 = ((function (G__14864_14901,G__14865_14902,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_mount));
});})(G__14864_14901,G__14865_14902,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__14864_14901,G__14865_14902,G__14866_14903);
}

var G__14867_14904 = prototype;
var G__14868_14905 = "componentWillReceiveProps";
var G__14869_14906 = ((function (G__14867_14904,G__14868_14905,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_state,goog.object.get(next_props,":rum/initial-state")], 0));
var next_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (old_state,state,this$,G__14867_14904,G__14868_14905,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__14855_SHARP_,p2__14854_SHARP_){
return (p2__14854_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__14854_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,p1__14855_SHARP_) : p2__14854_SHARP_.call(null,old_state,p1__14855_SHARP_));
});})(old_state,state,this$,G__14867_14904,G__14868_14905,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_(next_state)}));
});})(G__14867_14904,G__14868_14905,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__14867_14904,G__14868_14905,G__14869_14906);

if(cljs.core.empty_QMARK_(should_update)){
} else {
var G__14870_14907 = prototype;
var G__14871_14908 = "shouldComponentUpdate";
var G__14872_14909 = ((function (G__14870_14907,G__14871_14908,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref(rum.core.state(this$));
var new_state = cljs.core.deref(goog.object.get(next_state,":rum/state"));
var or__3949__auto__ = cljs.core.some(((function (old_state,new_state,this$,G__14870_14907,G__14871_14908,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__14856_SHARP_){
return (p1__14856_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__14856_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,new_state) : p1__14856_SHARP_.call(null,old_state,new_state));
});})(old_state,new_state,this$,G__14870_14907,G__14871_14908,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,should_update);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return false;
}
});})(G__14870_14907,G__14871_14908,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__14870_14907,G__14871_14908,G__14872_14909);
}

if(cljs.core.empty_QMARK_(will_update)){
} else {
var G__14873_14910 = prototype;
var G__14874_14911 = "componentWillUpdate";
var G__14875_14912 = ((function (G__14873_14910,G__14874_14911,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,next_state){
var this$ = this;
var new_state = goog.object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_(new_state,rum.util.call_all(cljs.core._deref(new_state),will_update));
});})(G__14873_14910,G__14874_14911,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__14873_14910,G__14874_14911,G__14875_14912);
}

var G__14876_14913 = prototype;
var G__14877_14914 = "render";
var G__14878_14915 = ((function (G__14876_14913,G__14877_14914,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = rum.core.state(this$);
var vec__14879 = (function (){var G__14882 = cljs.core.deref(state);
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__14882) : wrapped_render.call(null,G__14882));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14879,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14879,(1),null);
cljs.core.vreset_BANG_(state,next_state);

return dom;
});})(G__14876_14913,G__14877_14914,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__14876_14913,G__14877_14914,G__14878_14915);

if(cljs.core.empty_QMARK_(did_update)){
} else {
var G__14883_14916 = prototype;
var G__14884_14917 = "componentDidUpdate";
var G__14885_14918 = ((function (G__14883_14916,G__14884_14917,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_update));
});})(G__14883_14916,G__14884_14917,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__14883_14916,G__14884_14917,G__14885_14918);
}

if(cljs.core.empty_QMARK_(did_catch)){
} else {
var G__14886_14919 = prototype;
var G__14887_14920 = "componentDidCatch";
var G__14888_14921 = ((function (G__14886_14919,G__14887_14920,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (error,info){
var this$ = this;
cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core._deref(rum.core.state(this$)),did_catch,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([error,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_component_DASH_stack,goog.object.get(info,"componentStack")], null)], 0)));

return this$.forceUpdate();
});})(G__14886_14919,G__14887_14920,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__14886_14919,G__14887_14920,G__14888_14921);
}

var G__14889_14922 = prototype;
var G__14890_14923 = "componentWillUnmount";
var G__14891_14924 = ((function (G__14889_14922,G__14890_14923,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
if(cljs.core.empty_QMARK_(will_unmount)){
} else {
cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_unmount));
}

return goog.object.set(this$,":rum/unmounted?",true);
});})(G__14889_14922,G__14890_14923,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__14889_14922,G__14890_14923,G__14891_14924);

if(cljs.core.empty_QMARK_(child_context)){
} else {
var G__14892_14925 = prototype;
var G__14893_14926 = "getChildContext";
var G__14894_14927 = ((function (G__14892_14925,G__14893_14926,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = cljs.core.deref(rum.core.state(this$));
return cljs.core.clj__GT_js(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (state,this$,G__14892_14925,G__14893_14926,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__14857_SHARP_){
return (p1__14857_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14857_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__14857_SHARP_.call(null,state));
});})(state,this$,G__14892_14925,G__14893_14926,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(G__14892_14925,G__14893_14926,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
;
goog.object.set(G__14892_14925,G__14893_14926,G__14894_14927);
}

rum.core.extend_BANG_(prototype,class_props);

goog.object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_(ctor,static_props);

return ctor;
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class(render,mixins,display_name);
var key_fn = cljs.core.first(rum.util.collect(cljs.core.cst$kw$key_DASH_fn,mixins));
var ctor = ((!((key_fn == null)))?((function (class$,key_fn){
return (function() { 
var G__14928__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_args,args], null), "key": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(key_fn,args)});
return React.createElement(class$,props);
};
var G__14928 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14929__i = 0, G__14929__a = new Array(arguments.length -  0);
while (G__14929__i < G__14929__a.length) {G__14929__a[G__14929__i] = arguments[G__14929__i + 0]; ++G__14929__i;}
  args = new cljs.core.IndexedSeq(G__14929__a,0,null);
} 
return G__14928__delegate.call(this,args);};
G__14928.cljs$lang$maxFixedArity = 0;
G__14928.cljs$lang$applyTo = (function (arglist__14930){
var args = cljs.core.seq(arglist__14930);
return G__14928__delegate(args);
});
G__14928.cljs$core$IFn$_invoke$arity$variadic = G__14928__delegate;
return G__14928;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__14931__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_args,args], null)});
return React.createElement(class$,props);
};
var G__14931 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14932__i = 0, G__14932__a = new Array(arguments.length -  0);
while (G__14932__i < G__14932__a.length) {G__14932__a[G__14932__i] = arguments[G__14932__i + 0]; ++G__14932__i;}
  args = new cljs.core.IndexedSeq(G__14932__a,0,null);
} 
return G__14931__delegate.call(this,args);};
G__14931.cljs$lang$maxFixedArity = 0;
G__14931.cljs$lang$applyTo = (function (arglist__14933){
var args = cljs.core.seq(arglist__14933);
return G__14931__delegate(args);
});
G__14931.cljs$core$IFn$_invoke$arity$variadic = G__14931__delegate;
return G__14931;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_(mixins)){
var class$ = (function (props){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__14934__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__14934 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14935__i = 0, G__14935__a = new Array(arguments.length -  0);
while (G__14935__i < G__14935__a.length) {G__14935__a[G__14935__i] = arguments[G__14935__i + 0]; ++G__14935__i;}
  args = new cljs.core.IndexedSeq(G__14935__a,0,null);
} 
return G__14934__delegate.call(this,args);};
G__14934.cljs$lang$maxFixedArity = 0;
G__14934.cljs$lang$applyTo = (function (arglist__14936){
var args = cljs.core.seq(arglist__14936);
return G__14934__delegate(args);
});
G__14934.cljs$core$IFn$_invoke$arity$variadic = G__14934__delegate;
return G__14934;
})()
;})(class$,_))
;
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,state,cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.schedule = (function (){var or__3949__auto__ = (function (){var and__3938__auto__ = (typeof window !== 'undefined');
if(and__3938__auto__){
var or__3949__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return ((function (or__3949__auto__){
return (function (p1__14937_SHARP_){
return setTimeout(p1__14937_SHARP_,(16));
});
;})(or__3949__auto__))
}
})();
rum.core.batch = (function (){var or__3949__auto__ = (((typeof ReactNative !== 'undefined'))?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = (((typeof ReactDOM !== 'undefined'))?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return ((function (or__3949__auto____$1,or__3949__auto__){
return (function (f,a){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a));
});
;})(or__3949__auto____$1,or__3949__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_(rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__14938 = cljs.core.seq(queue);
var chunk__14940 = null;
var count__14941 = (0);
var i__14942 = (0);
while(true){
if((i__14942 < count__14941)){
var comp = chunk__14940.cljs$core$IIndexed$_nth$arity$2(null,i__14942);
if(((!((comp == null))) && (cljs.core.not(goog.object.get(comp,":rum/unmounted?"))))){
comp.forceUpdate();


var G__14944 = seq__14938;
var G__14945 = chunk__14940;
var G__14946 = count__14941;
var G__14947 = (i__14942 + (1));
seq__14938 = G__14944;
chunk__14940 = G__14945;
count__14941 = G__14946;
i__14942 = G__14947;
continue;
} else {
var G__14948 = seq__14938;
var G__14949 = chunk__14940;
var G__14950 = count__14941;
var G__14951 = (i__14942 + (1));
seq__14938 = G__14948;
chunk__14940 = G__14949;
count__14941 = G__14950;
i__14942 = G__14951;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__14938);
if(temp__5720__auto__){
var seq__14938__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14938__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__14938__$1);
var G__14952 = cljs.core.chunk_rest(seq__14938__$1);
var G__14953 = c__4351__auto__;
var G__14954 = cljs.core.count(c__4351__auto__);
var G__14955 = (0);
seq__14938 = G__14952;
chunk__14940 = G__14953;
count__14941 = G__14954;
i__14942 = G__14955;
continue;
} else {
var comp = cljs.core.first(seq__14938__$1);
if(((!((comp == null))) && (cljs.core.not(goog.object.get(comp,":rum/unmounted?"))))){
comp.forceUpdate();


var G__14956 = cljs.core.next(seq__14938__$1);
var G__14957 = null;
var G__14958 = (0);
var G__14959 = (0);
seq__14938 = G__14956;
chunk__14940 = G__14957;
count__14941 = G__14958;
i__14942 = G__14959;
continue;
} else {
var G__14960 = cljs.core.next(seq__14938__$1);
var G__14961 = null;
var G__14962 = (0);
var G__14963 = (0);
seq__14938 = G__14960;
chunk__14940 = G__14961;
count__14941 = G__14962;
i__14942 = G__14963;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref(rum.core.render_queue);
cljs.core.vreset_BANG_(rum.core.render_queue,rum.core.empty_queue);

return (rum.core.batch.cljs$core$IFn$_invoke$arity$2 ? rum.core.batch.cljs$core$IFn$_invoke$arity$2(rum.core.render_all,queue) : rum.core.batch.call(null,rum.core.render_all,queue));
});
/**
 * Schedules react component to be rendered on next animation frame.
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_(cljs.core.deref(rum.core.render_queue))){
(rum.core.schedule.cljs$core$IFn$_invoke$arity$1 ? rum.core.schedule.cljs$core$IFn$_invoke$arity$1(rum.core.render) : rum.core.schedule.call(null,rum.core.render));
} else {
}

return cljs.core._vreset_BANG_(rum.core.render_queue,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core.render_queue),component));
});
/**
 * Add element to the DOM tree. Idempotent. Subsequent mounts will just update element.
 */
rum.core.mount = (function rum$core$mount(element,node){
ReactDOM.render(element,node);

return null;
});
/**
 * Removes component from the DOM tree.
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Same as [[mount]] but must be called on DOM tree already rendered by a server via [[render-html]].
 */
rum.core.hydrate = (function rum$core$hydrate(element,node){
return ReactDOM.hydrate(element,node);
});
/**
 * Render `element` in a DOM `node` that is ouside of current DOM hierarchy.
 */
rum.core.portal = (function rum$core$portal(element,node){
return ReactDOM.createPortal(element,node);
});
/**
 * Adds React key to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-key "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_key = (function rum$core$with_key(element,key){
return React.cloneElement(element,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-ref "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_ref = (function rum$core$with_ref(element,ref){
return React.cloneElement(element,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node of component. Call it during lifecycle callbacks. Can’t be called during render.
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component.
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name(key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref.
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref(state,cljs.core.name(key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed. Does equality check (`=`) on all arguments.
 *   
 * ```
 * (rum/defc label < rum/static
 *   [text]
 *   [:div text])
 *   
 * (rum/mount (label "abc") js/document.body)
 * 
 * ;; def != abc, will re-render
 * (rum/mount (label "def") js/document.body)
 * 
 * ;; def == def, won’t re-render
 * (rum/mount (label "def") js/document.body)
 * ```
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$should_DASH_update,(function (old_state,new_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(old_state),cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff during component’s lifecycle. Component will be re-rendered if atom’s value changes. Atom is stored under user-provided key or under `:rum/local` by default.
 *   
 * ```
 * (rum/defcs counter < (rum/local 0 :cnt)
 *   [state label]
 *   (let [*cnt (:cnt state)]
 *     [:div {:on-click (fn [_] (swap! *cnt inc))}
 *       label @*cnt]))
 * 
 * (rum/mount (counter "Click count: "))
 * ```
 */
rum.core.local = (function rum$core$local(var_args){
var G__14965 = arguments.length;
switch (G__14965) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.cljs$core$IFn$_invoke$arity$2(initial,cljs.core.cst$kw$rum_SLASH_local);
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$will_DASH_mount,(function (state){
var local_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial);
var component = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch(local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(component);
});})(local_state,component))
);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with [[react]].
 *   
 * ```
 * (rum/defc comp < rum/reactive
 *   [*counter]
 *   [:div (rum/react counter)])
 * 
 * (def *counter (atom 0))
 * (rum/mount (comp *counter) js/document.body)
 * (swap! *counter inc) ;; will force comp to re-render
 * ```
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$init,(function (state,props){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$rum$reactive_SLASH_key,cljs.core.random_uuid());
}),cljs.core.cst$kw$wrap_DASH_render,(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_14967 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);

try{var comp = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = cljs.core.cst$kw$rum$reactive_SLASH_refs.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__14968 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14968,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14968,(1),null);
var new_reactions = cljs.core.deref(rum.core._STAR_reactions_STAR_);
var key = cljs.core.cst$kw$rum$reactive_SLASH_key.cljs$core$IFn$_invoke$arity$1(state);
var seq__14971_14983 = cljs.core.seq(old_reactions);
var chunk__14972_14984 = null;
var count__14973_14985 = (0);
var i__14974_14986 = (0);
while(true){
if((i__14974_14986 < count__14973_14985)){
var ref_14987 = chunk__14972_14984.cljs$core$IIndexed$_nth$arity$2(null,i__14974_14986);
if(cljs.core.contains_QMARK_(new_reactions,ref_14987)){
} else {
cljs.core.remove_watch(ref_14987,key);
}


var G__14988 = seq__14971_14983;
var G__14989 = chunk__14972_14984;
var G__14990 = count__14973_14985;
var G__14991 = (i__14974_14986 + (1));
seq__14971_14983 = G__14988;
chunk__14972_14984 = G__14989;
count__14973_14985 = G__14990;
i__14974_14986 = G__14991;
continue;
} else {
var temp__5720__auto___14992 = cljs.core.seq(seq__14971_14983);
if(temp__5720__auto___14992){
var seq__14971_14993__$1 = temp__5720__auto___14992;
if(cljs.core.chunked_seq_QMARK_(seq__14971_14993__$1)){
var c__4351__auto___14994 = cljs.core.chunk_first(seq__14971_14993__$1);
var G__14995 = cljs.core.chunk_rest(seq__14971_14993__$1);
var G__14996 = c__4351__auto___14994;
var G__14997 = cljs.core.count(c__4351__auto___14994);
var G__14998 = (0);
seq__14971_14983 = G__14995;
chunk__14972_14984 = G__14996;
count__14973_14985 = G__14997;
i__14974_14986 = G__14998;
continue;
} else {
var ref_14999 = cljs.core.first(seq__14971_14993__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_14999)){
} else {
cljs.core.remove_watch(ref_14999,key);
}


var G__15000 = cljs.core.next(seq__14971_14993__$1);
var G__15001 = null;
var G__15002 = (0);
var G__15003 = (0);
seq__14971_14983 = G__15000;
chunk__14972_14984 = G__15001;
count__14973_14985 = G__15002;
i__14974_14986 = G__15003;
continue;
}
} else {
}
}
break;
}

var seq__14975_15004 = cljs.core.seq(new_reactions);
var chunk__14976_15005 = null;
var count__14977_15006 = (0);
var i__14978_15007 = (0);
while(true){
if((i__14978_15007 < count__14977_15006)){
var ref_15008 = chunk__14976_15005.cljs$core$IIndexed$_nth$arity$2(null,i__14978_15007);
if(cljs.core.contains_QMARK_(old_reactions,ref_15008)){
} else {
cljs.core.add_watch(ref_15008,key,((function (seq__14975_15004,chunk__14976_15005,count__14977_15006,i__14978_15007,ref_15008,comp,old_reactions,vec__14968,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14967){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__14975_15004,chunk__14976_15005,count__14977_15006,i__14978_15007,ref_15008,comp,old_reactions,vec__14968,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14967))
);
}


var G__15009 = seq__14975_15004;
var G__15010 = chunk__14976_15005;
var G__15011 = count__14977_15006;
var G__15012 = (i__14978_15007 + (1));
seq__14975_15004 = G__15009;
chunk__14976_15005 = G__15010;
count__14977_15006 = G__15011;
i__14978_15007 = G__15012;
continue;
} else {
var temp__5720__auto___15013 = cljs.core.seq(seq__14975_15004);
if(temp__5720__auto___15013){
var seq__14975_15014__$1 = temp__5720__auto___15013;
if(cljs.core.chunked_seq_QMARK_(seq__14975_15014__$1)){
var c__4351__auto___15015 = cljs.core.chunk_first(seq__14975_15014__$1);
var G__15016 = cljs.core.chunk_rest(seq__14975_15014__$1);
var G__15017 = c__4351__auto___15015;
var G__15018 = cljs.core.count(c__4351__auto___15015);
var G__15019 = (0);
seq__14975_15004 = G__15016;
chunk__14976_15005 = G__15017;
count__14977_15006 = G__15018;
i__14978_15007 = G__15019;
continue;
} else {
var ref_15020 = cljs.core.first(seq__14975_15014__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_15020)){
} else {
cljs.core.add_watch(ref_15020,key,((function (seq__14975_15004,chunk__14976_15005,count__14977_15006,i__14978_15007,ref_15020,seq__14975_15014__$1,temp__5720__auto___15013,comp,old_reactions,vec__14968,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14967){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__14975_15004,chunk__14976_15005,count__14977_15006,i__14978_15007,ref_15020,seq__14975_15014__$1,temp__5720__auto___15013,comp,old_reactions,vec__14968,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14967))
);
}


var G__15021 = cljs.core.next(seq__14975_15014__$1);
var G__15022 = null;
var G__15023 = (0);
var G__15024 = (0);
seq__14975_15004 = G__15021;
chunk__14976_15005 = G__15022;
count__14977_15006 = G__15023;
i__14978_15007 = G__15024;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,cljs.core.cst$kw$rum$reactive_SLASH_refs,new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_14967;
}});
}),cljs.core.cst$kw$will_DASH_unmount,(function (state){
var key_15025 = cljs.core.cst$kw$rum$reactive_SLASH_key.cljs$core$IFn$_invoke$arity$1(state);
var seq__14979_15026 = cljs.core.seq(cljs.core.cst$kw$rum$reactive_SLASH_refs.cljs$core$IFn$_invoke$arity$1(state));
var chunk__14980_15027 = null;
var count__14981_15028 = (0);
var i__14982_15029 = (0);
while(true){
if((i__14982_15029 < count__14981_15028)){
var ref_15030 = chunk__14980_15027.cljs$core$IIndexed$_nth$arity$2(null,i__14982_15029);
cljs.core.remove_watch(ref_15030,key_15025);


var G__15031 = seq__14979_15026;
var G__15032 = chunk__14980_15027;
var G__15033 = count__14981_15028;
var G__15034 = (i__14982_15029 + (1));
seq__14979_15026 = G__15031;
chunk__14980_15027 = G__15032;
count__14981_15028 = G__15033;
i__14982_15029 = G__15034;
continue;
} else {
var temp__5720__auto___15035 = cljs.core.seq(seq__14979_15026);
if(temp__5720__auto___15035){
var seq__14979_15036__$1 = temp__5720__auto___15035;
if(cljs.core.chunked_seq_QMARK_(seq__14979_15036__$1)){
var c__4351__auto___15037 = cljs.core.chunk_first(seq__14979_15036__$1);
var G__15038 = cljs.core.chunk_rest(seq__14979_15036__$1);
var G__15039 = c__4351__auto___15037;
var G__15040 = cljs.core.count(c__4351__auto___15037);
var G__15041 = (0);
seq__14979_15026 = G__15038;
chunk__14980_15027 = G__15039;
count__14981_15028 = G__15040;
i__14982_15029 = G__15041;
continue;
} else {
var ref_15042 = cljs.core.first(seq__14979_15036__$1);
cljs.core.remove_watch(ref_15042,key_15025);


var G__15043 = cljs.core.next(seq__14979_15036__$1);
var G__15044 = null;
var G__15045 = (0);
var G__15046 = (0);
seq__14979_15026 = G__15043;
chunk__14980_15027 = G__15044;
count__14981_15028 = G__15045;
i__14982_15029 = G__15046;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$rum$reactive_SLASH_refs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rum$reactive_SLASH_key], 0));
})], null);
/**
 * Works in conjunction with [[reactive]] mixin. Use this function instead of `deref` inside render, and your component will subscribe to changes happening to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_(rum.core._STAR_reactions_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref(ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * 
 *           [[derived-atom]] will:
 *        
 *           - Take N “source” refs.
 *           - Set up a watch on each of them.
 *           - Create “sink” atom.
 *           - When any of source refs changes:
 *              - re-run function `f`, passing N dereferenced values of source refs.
 *              - `reset!` result of `f` to the sink atom.
 *           - Return sink atom.
 * 
 *           Example:
 * 
 *           ```
 *           (def *a (atom 0))
 *           (def *b (atom 1))
 *           (def *x (derived-atom [*a *b] ::key
 *                     (fn [a b]
 *                       (str a ":" b))))
 *           
 *           (type *x)  ;; => clojure.lang.Atom
 *           (deref *x) ;; => "0:1"
 *           
 *           (swap! *a inc)
 *           (deref *x) ;; => "1:1"
 *           
 *           (reset! *b 7)
 *           (deref *x) ;; => "1:7"
 *           ```
 * 
 *           Arguments:
 *        
 *           - `refs` - sequence of source refs,
 *           - `key`  - unique key to register watcher, same as in `clojure.core/add-watch`,
 *           - `f`    - function that must accept N arguments (same as number of source refs) and return a value to be written to the sink ref. Note: `f` will be called with already dereferenced values,
 *           - `opts` - optional. Map of:
 *             - `:ref` - use this as sink ref. By default creates new atom,
 *             - `:check-equals?` - Defaults to `true`. If equality check should be run on each source update: `(= @sink (f new-vals))`. When result of recalculating `f` equals to the old value, `reset!` won’t be called. Set to `false` if checking for equality can be expensive.
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 * ```
 * (def db (atom { :users { "Ivan" { :age 30 }}}))
 * 
 * (def ivan (rum/cursor db [:users "Ivan"]))
 * (deref ivan) ;; => { :age 30 }
 * 
 * (swap! ivan update :age inc) ;; => { :age 31 }
 * (deref db) ;; => { :users { "Ivan" { :age 31 }}}
 * 
 * (swap! db update-in [:users "Ivan" :age] inc)
 * ;; => { :users { "Ivan" { :age 32 }}}
 * 
 * (deref ivan) ;; => { :age 32 }
 * ```
 *   
 * Returned value supports `deref`, `swap!`, `reset!`, watches and metadata.
 *   
 * The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15053 = arguments.length;
var i__4532__auto___15054 = (0);
while(true){
if((i__4532__auto___15054 < len__4531__auto___15053)){
args__4534__auto__.push((arguments[i__4532__auto___15054]));

var G__15055 = (i__4532__auto___15054 + (1));
i__4532__auto___15054 = G__15055;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__15050){
var map__15051 = p__15050;
var map__15051__$1 = ((((!((map__15051 == null)))?(((((map__15051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15051):map__15051);
var options = map__15051__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref.path,path),cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor_in.cljs$lang$applyTo = (function (seq15047){
var G__15048 = cljs.core.first(seq15047);
var seq15047__$1 = cljs.core.next(seq15047);
var G__15049 = cljs.core.first(seq15047__$1);
var seq15047__$2 = cljs.core.next(seq15047__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15048,G__15049,seq15047__$2);
});

/**
 * Same as [[cursor-in]] but accepts single key instead of path vector.
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15059 = arguments.length;
var i__4532__auto___15060 = (0);
while(true){
if((i__4532__auto___15060 < len__4531__auto___15059)){
args__4534__auto__.push((arguments[i__4532__auto___15060]));

var G__15061 = (i__4532__auto___15060 + (1));
i__4532__auto___15060 = G__15061;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor.cljs$lang$applyTo = (function (seq15056){
var G__15057 = cljs.core.first(seq15056);
var seq15056__$1 = cljs.core.next(seq15056);
var G__15058 = cljs.core.first(seq15056__$1);
var seq15056__$2 = cljs.core.next(seq15056__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15057,G__15058,seq15056__$2);
});

