// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('colors_in_cultures.views.frontpage');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
goog.require('reitit.frontend.easy');
goog.require('cljss.rum');
goog.require('colors_in_cultures.components.button');
colors_in_cultures.views.frontpage.frontpage = rum.core.build_defc((function (){
return React.createElement("div",({"className": cljss.core.css("css-786370543",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css-786370543{display:flex;flex-direction:column;height:-webkit-fill-available;justify-content:space-around;align-items:center;}"], null),cljs.core.PersistentVector.EMPTY)}),React.createElement("h1",null,React.createElement("span",({"className": cljss.core.css("css--1738467373",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css--1738467373{color:#ea402b;}"], null),cljs.core.PersistentVector.EMPTY)}),"Col"),React.createElement("span",null,"motions")),React.createElement("h2",({"className": cljss.core.css("css--225635339",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css--225635339{padding:20px;max-width:520px;text-align:center;font-weight:500;}"], null),cljs.core.PersistentVector.EMPTY)}),"This is a game that tries to teach you cultural differences using colors. Try to guess what color represents an emotion in different cultures. Or explore the library to see all of them."),React.createElement("div",({"className": cljss.core.css("css--1206791472",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css--1206791472{display:flex;flex-direction:column;align-items:center;margin-bottom:40px;}",".css--1206791472 > *{margin-bottom:16px;}"], null),cljs.core.PersistentVector.EMPTY)}),sablono.interpreter.interpret((function (){var G__26353 = "Start";
var G__26354 = "#5ac76c";
var G__26355 = ((function (G__26353,G__26354){
return (function (){
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$colors_DASH_in_DASH_cultures$core_SLASH_game);
});})(G__26353,G__26354))
;
return (colors_in_cultures.components.button.button.cljs$core$IFn$_invoke$arity$3 ? colors_in_cultures.components.button.button.cljs$core$IFn$_invoke$arity$3(G__26353,G__26354,G__26355) : colors_in_cultures.components.button.button.call(null,G__26353,G__26354,G__26355));
})()),sablono.interpreter.interpret((function (){var G__26356 = "Explore Library";
var G__26357 = "#50ade3";
var G__26358 = ((function (G__26356,G__26357){
return (function (){
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$colors_DASH_in_DASH_cultures$core_SLASH_library);
});})(G__26356,G__26357))
;
return (colors_in_cultures.components.button.button.cljs$core$IFn$_invoke$arity$3 ? colors_in_cultures.components.button.button.cljs$core$IFn$_invoke$arity$3(G__26356,G__26357,G__26358) : colors_in_cultures.components.button.button.call(null,G__26356,G__26357,G__26358));
})())));
}),null,"frontpage");
