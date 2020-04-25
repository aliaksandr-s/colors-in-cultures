// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('colors_in_cultures.components.search_bar');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
goog.require('cljss.rum');
colors_in_cultures.components.search_bar.search_bar = rum.core.build_defc((function (on_select,value){
return sablono.interpreter.create_element("input",({"type": "search", "placeholder": "Search...", "value": value, "onChange": (function (e){
var G__26366 = e.target.value;
return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(G__26366) : on_select.call(null,G__26366));
}), "className": cljss.core.css("css-391543928",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css-391543928{box-shadow:1px 1px black;font-size:20px;font-weight:600;width:18rem;max-width:18rem;padding:6px 12px;outline:none;border:2px solid black;border-radius:15px;}"], null),cljs.core.PersistentVector.EMPTY)}));
}),null,"search-bar");
