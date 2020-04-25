// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('colors_in_cultures.components.color_button');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
goog.require('cljss.rum');
colors_in_cultures.components.color_button.color_button = rum.core.build_defcs((function (state,color,on_click){
var local_clicked_QMARK_ = cljs.core.cst$kw$colors_DASH_in_DASH_cultures$components$color_DASH_button_SLASH_clicked_QMARK_.cljs$core$IFn$_invoke$arity$1(state);
var swap_click = ((function (local_clicked_QMARK_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(local_clicked_QMARK_,cljs.core.not);
});})(local_clicked_QMARK_))
;
var handle_click = ((function (local_clicked_QMARK_,swap_click){
return (function (){
swap_click();

setTimeout(swap_click,(150));

return (on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null));
});})(local_clicked_QMARK_,swap_click))
;
return React.createElement("div",({"onClick": handle_click, "className": cljss.core.css("css--228031285",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css--228031285{display:inline-block;}"], null),cljs.core.PersistentVector.EMPTY)}),React.createElement("div",({"className": cljss.core.css("css--1784529270",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css--1784529270{transition:all 150ms ease;width:50px;cursor:pointer;opacity:0.7;position:relative;border:3px solid black;border-radius:20%;height:50px;transform:var(--var-css--1784529270-0);background-color:var(--var-css--1784529270-1);}",".css--1784529270:active{transform:scale(0.9) translateX(5px) translateY(5px);}",".css--1784529270:active:before{transform:translateX(-2px) translateY(-2px);visibility:hidden;}",".css--1784529270:hover{opacity:1;}",".css--1784529270:before{transition:all 100ms;top:-3px;content:\"\";width:50px;position:absolute;border:3px solid transparent;border-radius:20%;height:50px;left:-3px;box-shadow:var(--var-css--1784529270-2);transform:var(--var-css--1784529270-3);visibility:var(--var-css--1784529270-4);}"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-css--1784529270-0",(cljs.core.truth_(cljs.core.deref(local_clicked_QMARK_))?"scale(0.9) translateX(5px) translateY(5px)":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-css--1784529270-1",cljs.core.cst$kw$color_SLASH_code.cljs$core$IFn$_invoke$arity$1(color)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-css--1784529270-2",["2px 2px 0.5px black"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-css--1784529270-3",(cljs.core.truth_(cljs.core.deref(local_clicked_QMARK_))?"translateX(-2px) translateY(-2px)":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-css--1784529270-4",(cljs.core.truth_(cljs.core.deref(local_clicked_QMARK_))?"hidden":null)], null)], null))})));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(false,cljs.core.cst$kw$colors_DASH_in_DASH_cultures$components$color_DASH_button_SLASH_clicked_QMARK_)], null),"color-button");
