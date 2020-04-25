// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('colors_in_cultures.components.button');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
goog.require('cljss.rum');
colors_in_cultures.components.button.button = rum.core.build_defcs((function (state,title,color,on_click){
var local_clicked_QMARK_ = cljs.core.cst$kw$colors_DASH_in_DASH_cultures$components$button_SLASH_clicked_QMARK_.cljs$core$IFn$_invoke$arity$1(state);
var swap_click = ((function (local_clicked_QMARK_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(local_clicked_QMARK_,cljs.core.not);
});})(local_clicked_QMARK_))
;
var handle_click = ((function (local_clicked_QMARK_,swap_click){
return (function (){
swap_click();

return setTimeout(((function (local_clicked_QMARK_,swap_click){
return (function (){
swap_click();

return (on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null));
});})(local_clicked_QMARK_,swap_click))
,(150));
});})(local_clicked_QMARK_,swap_click))
;
return React.createElement("button",({"onClick": handle_click, "className": cljss.core.css("css--544052598",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css--544052598{min-width:100px;text-align:center;font-size:18px;transition:all 150ms ease;font-weight:600;cursor:pointer;padding:8px 14px;outline:none;position:relative;border:2px solid black;border-radius:6px;user-select:none;box-shadow:var(--var-css--544052598-0);transform:var(--var-css--544052598-1);background-color:var(--var-css--544052598-2);}",".css--544052598:active{transform:scale(0.9) translateX(5px) translateY(5px);box-shadow:var(--var-css--544052598-3);}",".css--544052598:hover{color:white;}"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-css--544052598-0",((cljs.core.not(cljs.core.deref(local_clicked_QMARK_)))?["2px 2px 0.5px black"].join(''):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-css--544052598-1",(cljs.core.truth_(cljs.core.deref(local_clicked_QMARK_))?"scale(0.9) translateX(5px) translateY(5px)":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-css--544052598-2",color], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-css--544052598-3",["0px 0px 0.5px black"].join('')], null)], null))}),sablono.interpreter.interpret(title));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(false,cljs.core.cst$kw$colors_DASH_in_DASH_cultures$components$button_SLASH_clicked_QMARK_)], null),"button");
