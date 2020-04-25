// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('colors_in_cultures.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.async.Debouncer');
colors_in_cultures.utils.debounce = (function colors_in_cultures$utils$debounce(f,interval){
var dbnc = (new goog.async.Debouncer(f,interval));
return ((function (dbnc){
return (function() { 
var G__26361__delegate = function (args){
return dbnc.fire.apply(dbnc,cljs.core.to_array(args));
};
var G__26361 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26362__i = 0, G__26362__a = new Array(arguments.length -  0);
while (G__26362__i < G__26362__a.length) {G__26362__a[G__26362__i] = arguments[G__26362__i + 0]; ++G__26362__i;}
  args = new cljs.core.IndexedSeq(G__26362__a,0,null);
} 
return G__26361__delegate.call(this,args);};
G__26361.cljs$lang$maxFixedArity = 0;
G__26361.cljs$lang$applyTo = (function (arglist__26363){
var args = cljs.core.seq(arglist__26363);
return G__26361__delegate(args);
});
G__26361.cljs$core$IFn$_invoke$arity$variadic = G__26361__delegate;
return G__26361;
})()
;
;})(dbnc))
});
