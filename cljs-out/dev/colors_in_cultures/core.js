// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('colors_in_cultures.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
goog.require('cljss.rum');
goog.require('reitit.frontend');
goog.require('reitit.frontend.easy');
goog.require('reitit.coercion.spec');
goog.require('colors_in_cultures.views.library');
goog.require('colors_in_cultures.views.frontpage');
goog.require('colors_in_cultures.views.game');
if((typeof colors_in_cultures !== 'undefined') && (typeof colors_in_cultures.core !== 'undefined') && (typeof colors_in_cultures.core.match !== 'undefined')){
} else {
colors_in_cultures.core.match = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
colors_in_cultures.core.container = rum.core.build_defc((function (content){
return React.createElement("div",({"className": cljss.core.css("css-1945615060",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css-1945615060{max-width:var(--md-width);margin:auto auto;}"], null),cljs.core.PersistentVector.EMPTY)}),sablono.interpreter.interpret(content));
}),null,"container");
colors_in_cultures.core.current_page = rum.core.build_defc((function (){
var view = rum.core.react(rum.core.cursor_in(colors_in_cultures.core.match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data,cljs.core.cst$kw$view], null)));
return sablono.interpreter.interpret((function (){var G__26400 = (view.cljs$core$IFn$_invoke$arity$0 ? view.cljs$core$IFn$_invoke$arity$0() : view.call(null));
return (colors_in_cultures.core.container.cljs$core$IFn$_invoke$arity$1 ? colors_in_cultures.core.container.cljs$core$IFn$_invoke$arity$1(G__26400) : colors_in_cultures.core.container.call(null,G__26400));
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"current-page");
colors_in_cultures.core.routes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.cst$kw$colors_DASH_in_DASH_cultures$core_SLASH_frontpage,cljs.core.cst$kw$view,colors_in_cultures.views.frontpage.frontpage], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/library",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.cst$kw$colors_DASH_in_DASH_cultures$core_SLASH_library,cljs.core.cst$kw$view,colors_in_cultures.views.library.library], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/game",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.cst$kw$colors_DASH_in_DASH_cultures$core_SLASH_game,cljs.core.cst$kw$view,colors_in_cultures.views.game.game], null)], null)], null);
colors_in_cultures.core.init_BANG_ = (function colors_in_cultures$core$init_BANG_(){
reitit.frontend.easy.start_BANG_(reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(colors_in_cultures.core.routes,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$coercion,reitit.coercion.spec.coercion], null)], null)),(function (m){
return cljs.core.reset_BANG_(colors_in_cultures.core.match,m);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$use_DASH_fragment,false], null));

return rum.core.mount((colors_in_cultures.core.current_page.cljs$core$IFn$_invoke$arity$0 ? colors_in_cultures.core.current_page.cljs$core$IFn$_invoke$arity$0() : colors_in_cultures.core.current_page.call(null)),document.getElementById("app"));
});
colors_in_cultures.core.init_BANG_();
