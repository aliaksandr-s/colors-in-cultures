// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('colors_in_cultures.components.card');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
goog.require('cljss.rum');
goog.require('cljss.core');
colors_in_cultures.components.card.rotate_show = (function colors_in_cultures$components$card$rotate_show(){
return cljss.core.css_keyframes("colors-in-cultures_components_card__rotate-show","0%{opacity:0;transform:translateX(0px) rotate(0deg);}100%{opacity:1;}",[]);
});
colors_in_cultures.components.card.rotate_hide = (function colors_in_cultures$components$card$rotate_hide(){
return cljss.core.css_keyframes("colors-in-cultures_components_card__rotate-hide","0%{opacity:1;}100%{opacity:0;transform:translateX(0px) rotate(0deg);}",[]);
});
colors_in_cultures.components.card.card = rum.core.build_defcs((function (state,title,icon_url,back_side,show_animation_QMARK_,hide_animation_QMARK_){
var local_selected_QMARK_ = cljs.core.cst$kw$colors_DASH_in_DASH_cultures$components$card_SLASH_selected_QMARK_.cljs$core$IFn$_invoke$arity$1(state);
var has_animation_QMARK_ = (function (){var or__3949__auto__ = show_animation_QMARK_;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return hide_animation_QMARK_;
}
})();
return React.createElement("div",({"onClick": (cljs.core.truth_(back_side)?((function (local_selected_QMARK_,has_animation_QMARK_){
return (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(local_selected_QMARK_,cljs.core.not);
});})(local_selected_QMARK_,has_animation_QMARK_))
:null), "style": ({"animation": (cljs.core.truth_(has_animation_QMARK_)?(cljs.core.truth_(hide_animation_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(colors_in_cultures.components.card.rotate_hide())," ","650ms ease"].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(colors_in_cultures.components.card.rotate_show())," ","650ms ease"].join('')):null)}), "className": cljss.core.css("css-1980288277",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css-1980288277{text-transform:Capitalize;font-size:16px;transition:all 150ms ease;background-color:var(--accent-color);width:120px;padding:10px;display:inline-block;position:relative;border:3px solid black;border-radius:15%;user-select:none;height:195px;transform:var(--var-css-1980288277-0);cursor:var(--var-css-1980288277-1);opacity:var(--var-css-1980288277-2);}",".css-1980288277:hover{opacity:1;}",".css-1980288277:before{transition:all 100ms;top:-3px;content:\"\";width:120px;padding:10px;position:absolute;border:3px solid black;border-radius:15%;height:195px;left:-3px;box-shadow:var(--var-css-1980288277-3);transform:var(--var-css-1980288277-4);opacity:var(--var-css-1980288277-5);visibility:var(--var-css-1980288277-6);}"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-css-1980288277-0",(cljs.core.truth_(cljs.core.deref(local_selected_QMARK_))?"translateX(5px) translateY(5px)":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-css-1980288277-1",(cljs.core.truth_(back_side)?"pointer":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-css-1980288277-2",(cljs.core.truth_(cljs.core.deref(local_selected_QMARK_))?(1):0.7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-css-1980288277-3",["2px 2px"," ","black"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-css-1980288277-4",(cljs.core.truth_(cljs.core.deref(local_selected_QMARK_))?"translateX(-1px) translateY(-1px)":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-css-1980288277-5",(cljs.core.truth_(cljs.core.deref(local_selected_QMARK_))?"0":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-css-1980288277-6",(cljs.core.truth_(cljs.core.deref(local_selected_QMARK_))?"hidden":null)], null)], null))}),React.createElement("div",({"className": cljss.core.css("css-476364660",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css-476364660{text-align:center;padding-top:6px;padding-bottom:18px;line-height:20px;font-size:18px;font-weight:500;}"], null),cljs.core.PersistentVector.EMPTY)}),sablono.interpreter.interpret(title)),(function (){var attrs24719 = (cljs.core.truth_(cljs.core.deref(local_selected_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,back_side], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,icon_url,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"100%"], null)], null)], null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs24719))?sablono.interpreter.attributes(attrs24719):null),((cljs.core.map_QMARK_(attrs24719))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24719)], null)));
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.cljs$core$IFn$_invoke$arity$2(false,cljs.core.cst$kw$colors_DASH_in_DASH_cultures$components$card_SLASH_selected_QMARK_)], null),"card");
