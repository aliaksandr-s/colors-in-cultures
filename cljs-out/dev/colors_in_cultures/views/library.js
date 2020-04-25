// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('colors_in_cultures.views.library');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
goog.require('colors_in_cultures.components.card');
goog.require('colors_in_cultures.components.search_bar');
goog.require('cljss.rum');
goog.require('colors_in_cultures.utils');
goog.require('colors_in_cultures.db.query');
if((typeof colors_in_cultures !== 'undefined') && (typeof colors_in_cultures.views !== 'undefined') && (typeof colors_in_cultures.views.library !== 'undefined') && (typeof colors_in_cultures.views.library.state !== 'undefined')){
} else {
colors_in_cultures.views.library.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$search_DASH_query,""], null));
}
colors_in_cultures.views.library.search = rum.core.build_defc((function (){
var handle_search = (function (query){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(colors_in_cultures.views.library.state,cljs.core.assoc,cljs.core.cst$kw$search_DASH_query,query);
});
var debounced_search = colors_in_cultures.utils.debounce(handle_search,(10));
return React.createElement("div",({"className": cljss.core.css("css--316213726",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css--316213726{display:flex;justify-content:center;position:sticky;top:0px;padding:10px;z-index:10;background-color:var(--main-color);}"], null),cljs.core.PersistentVector.EMPTY)}),sablono.interpreter.interpret((function (){var G__26369 = debounced_search;
var G__26370 = cljs.core.cst$kw$search_DASH_query.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(colors_in_cultures.views.library.state));
return (colors_in_cultures.components.search_bar.search_bar.cljs$core$IFn$_invoke$arity$2 ? colors_in_cultures.components.search_bar.search_bar.cljs$core$IFn$_invoke$arity$2(G__26369,G__26370) : colors_in_cultures.components.search_bar.search_bar.call(null,G__26369,G__26370));
})()));
}),null,"search");
colors_in_cultures.views.library.nations_list = rum.core.build_defc((function (nations_colors){
return React.createElement("div",({"className": cljss.core.css("css--314018162",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css--314018162{display:flex;flex-direction:column;line-height:14px;}"], null),cljs.core.PersistentVector.EMPTY)}),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = (function colors_in_cultures$views$library$iter__26371(s__26372){
return (new cljs.core.LazySeq(null,(function (){
var s__26372__$1 = s__26372;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26372__$1);
if(temp__5720__auto__){
var s__26372__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26372__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__26372__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__26374 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__26373 = (0);
while(true){
if((i__26373 < size__4323__auto__)){
var nat_col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__26373);
cljs.core.chunk_append(b__26374,(function (){var nation = cljs.core.first(nat_col);
var color = cljs.core.second(nat_col);
return React.createElement("div",({"key": cljs.core.cst$kw$nation_SLASH_name.cljs$core$IFn$_invoke$arity$1(nation), "className": cljss.core.css("css--245709485",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css--245709485{margin-bottom:8px;}"], null),cljs.core.PersistentVector.EMPTY)}),React.createElement("div",({"className": cljss.core.css("css--2062547738",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css--2062547738{display:flex;align-items:center;}"], null),cljs.core.PersistentVector.EMPTY)}),React.createElement("div",({"title": cljs.core.cst$kw$color_SLASH_name.cljs$core$IFn$_invoke$arity$1(color), "className": cljss.core.css("css--799937251",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css--799937251{width:14px;height:11px;border-radius:4px;background-color:var(--var-css--799937251-0);}"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-css--799937251-0",cljs.core.cst$kw$color_SLASH_code.cljs$core$IFn$_invoke$arity$1(color)], null)], null))})),React.createElement("span",({"className": cljss.core.css("css-937606079",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css-937606079{margin-left:8px;font-size:13px;width:100%;}"], null),cljs.core.PersistentVector.EMPTY)}),sablono.interpreter.interpret(cljs.core.cst$kw$nation_SLASH_name.cljs$core$IFn$_invoke$arity$1(nation)))));
})());

var G__26375 = (i__26373 + (1));
i__26373 = G__26375;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26374),colors_in_cultures$views$library$iter__26371(cljs.core.chunk_rest(s__26372__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26374),null);
}
} else {
var nat_col = cljs.core.first(s__26372__$2);
return cljs.core.cons((function (){var nation = cljs.core.first(nat_col);
var color = cljs.core.second(nat_col);
return React.createElement("div",({"key": cljs.core.cst$kw$nation_SLASH_name.cljs$core$IFn$_invoke$arity$1(nation), "className": cljss.core.css("css--245709485",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css--245709485{margin-bottom:8px;}"], null),cljs.core.PersistentVector.EMPTY)}),React.createElement("div",({"className": cljss.core.css("css--2062547738",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css--2062547738{display:flex;align-items:center;}"], null),cljs.core.PersistentVector.EMPTY)}),React.createElement("div",({"title": cljs.core.cst$kw$color_SLASH_name.cljs$core$IFn$_invoke$arity$1(color), "className": cljss.core.css("css--799937251",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css--799937251{width:14px;height:11px;border-radius:4px;background-color:var(--var-css--799937251-0);}"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-css--799937251-0",cljs.core.cst$kw$color_SLASH_code.cljs$core$IFn$_invoke$arity$1(color)], null)], null))})),React.createElement("span",({"className": cljss.core.css("css-937606079",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css-937606079{margin-left:8px;font-size:13px;width:100%;}"], null),cljs.core.PersistentVector.EMPTY)}),sablono.interpreter.interpret(cljs.core.cst$kw$nation_SLASH_name.cljs$core$IFn$_invoke$arity$1(nation)))));
})(),colors_in_cultures$views$library$iter__26371(cljs.core.rest(s__26372__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(nations_colors);
})()));
}),null,"nations-list");
colors_in_cultures.views.library.emotions_list = rum.core.build_defc((function (){
var query = rum.core.react(rum.core.cursor_in(colors_in_cultures.views.library.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$search_DASH_query], null)));
var emotions = colors_in_cultures.db.query.get_emotions(query);
return React.createElement("div",({"className": cljss.core.css("css--1910034223",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css--1910034223{padding-top:30px;display:flex;flex-wrap:wrap;justify-content:center;}",".css--1910034223 > *{margin:8px;}"], null),cljs.core.PersistentVector.EMPTY)}),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (query,emotions){
return (function colors_in_cultures$views$library$iter__26376(s__26377){
return (new cljs.core.LazySeq(null,((function (query,emotions){
return (function (){
var s__26377__$1 = s__26377;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26377__$1);
if(temp__5720__auto__){
var s__26377__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26377__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__26377__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__26379 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__26378 = (0);
while(true){
if((i__26378 < size__4323__auto__)){
var entity = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__26378);
cljs.core.chunk_append(b__26379,sablono.interpreter.interpret(rum.core.with_key((function (){var G__26380 = cljs.core.cst$kw$emotion_SLASH_name.cljs$core$IFn$_invoke$arity$1(cljs.core.first(entity));
var G__26381 = cljs.core.cst$kw$emotion_SLASH_icon.cljs$core$IFn$_invoke$arity$1(cljs.core.first(entity));
var G__26382 = (function (){var G__26383 = cljs.core.second(entity);
return (colors_in_cultures.views.library.nations_list.cljs$core$IFn$_invoke$arity$1 ? colors_in_cultures.views.library.nations_list.cljs$core$IFn$_invoke$arity$1(G__26383) : colors_in_cultures.views.library.nations_list.call(null,G__26383));
})();
return (colors_in_cultures.components.card.card.cljs$core$IFn$_invoke$arity$3 ? colors_in_cultures.components.card.card.cljs$core$IFn$_invoke$arity$3(G__26380,G__26381,G__26382) : colors_in_cultures.components.card.card.call(null,G__26380,G__26381,G__26382));
})(),cljs.core.cst$kw$emotion_SLASH_id.cljs$core$IFn$_invoke$arity$1(cljs.core.first(entity)))));

var G__26388 = (i__26378 + (1));
i__26378 = G__26388;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26379),colors_in_cultures$views$library$iter__26376(cljs.core.chunk_rest(s__26377__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26379),null);
}
} else {
var entity = cljs.core.first(s__26377__$2);
return cljs.core.cons(sablono.interpreter.interpret(rum.core.with_key((function (){var G__26384 = cljs.core.cst$kw$emotion_SLASH_name.cljs$core$IFn$_invoke$arity$1(cljs.core.first(entity));
var G__26385 = cljs.core.cst$kw$emotion_SLASH_icon.cljs$core$IFn$_invoke$arity$1(cljs.core.first(entity));
var G__26386 = (function (){var G__26387 = cljs.core.second(entity);
return (colors_in_cultures.views.library.nations_list.cljs$core$IFn$_invoke$arity$1 ? colors_in_cultures.views.library.nations_list.cljs$core$IFn$_invoke$arity$1(G__26387) : colors_in_cultures.views.library.nations_list.call(null,G__26387));
})();
return (colors_in_cultures.components.card.card.cljs$core$IFn$_invoke$arity$3 ? colors_in_cultures.components.card.card.cljs$core$IFn$_invoke$arity$3(G__26384,G__26385,G__26386) : colors_in_cultures.components.card.card.call(null,G__26384,G__26385,G__26386));
})(),cljs.core.cst$kw$emotion_SLASH_id.cljs$core$IFn$_invoke$arity$1(cljs.core.first(entity)))),colors_in_cultures$views$library$iter__26376(cljs.core.rest(s__26377__$2)));
}
} else {
return null;
}
break;
}
});})(query,emotions))
,null,null));
});})(query,emotions))
;
return iter__4324__auto__(emotions);
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"emotions-list");
colors_in_cultures.views.library.n_list = rum.core.build_defc((function (){
var nations = colors_in_cultures.db.query.get_nations();
return React.createElement("div",({"className": cljss.core.css("css--1910034223",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css--1910034223{padding-top:30px;display:flex;flex-wrap:wrap;justify-content:center;}",".css--1910034223 > *{margin:8px;}"], null),cljs.core.PersistentVector.EMPTY)}),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (nations){
return (function colors_in_cultures$views$library$iter__26389(s__26390){
return (new cljs.core.LazySeq(null,((function (nations){
return (function (){
var s__26390__$1 = s__26390;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26390__$1);
if(temp__5720__auto__){
var s__26390__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26390__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__26390__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__26392 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__26391 = (0);
while(true){
if((i__26391 < size__4323__auto__)){
var entity = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__26391);
cljs.core.chunk_append(b__26392,sablono.interpreter.interpret(rum.core.with_key((function (){var G__26393 = cljs.core.cst$kw$nation_SLASH_name.cljs$core$IFn$_invoke$arity$1(entity);
var G__26394 = cljs.core.cst$kw$nation_SLASH_icon.cljs$core$IFn$_invoke$arity$1(entity);
return (colors_in_cultures.components.card.card.cljs$core$IFn$_invoke$arity$2 ? colors_in_cultures.components.card.card.cljs$core$IFn$_invoke$arity$2(G__26393,G__26394) : colors_in_cultures.components.card.card.call(null,G__26393,G__26394));
})(),cljs.core.cst$kw$nation_SLASH_id.cljs$core$IFn$_invoke$arity$1(entity))));

var G__26397 = (i__26391 + (1));
i__26391 = G__26397;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26392),colors_in_cultures$views$library$iter__26389(cljs.core.chunk_rest(s__26390__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26392),null);
}
} else {
var entity = cljs.core.first(s__26390__$2);
return cljs.core.cons(sablono.interpreter.interpret(rum.core.with_key((function (){var G__26395 = cljs.core.cst$kw$nation_SLASH_name.cljs$core$IFn$_invoke$arity$1(entity);
var G__26396 = cljs.core.cst$kw$nation_SLASH_icon.cljs$core$IFn$_invoke$arity$1(entity);
return (colors_in_cultures.components.card.card.cljs$core$IFn$_invoke$arity$2 ? colors_in_cultures.components.card.card.cljs$core$IFn$_invoke$arity$2(G__26395,G__26396) : colors_in_cultures.components.card.card.call(null,G__26395,G__26396));
})(),cljs.core.cst$kw$nation_SLASH_id.cljs$core$IFn$_invoke$arity$1(entity))),colors_in_cultures$views$library$iter__26389(cljs.core.rest(s__26390__$2)));
}
} else {
return null;
}
break;
}
});})(nations))
,null,null));
});})(nations))
;
return iter__4324__auto__(nations);
})()));
}),null,"n-list");
colors_in_cultures.views.library.library = rum.core.build_defc((function (){
return React.createElement("div",({"className": cljss.core.css("css--527689773",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css--527689773{padding-bottom:30px;}"], null),cljs.core.PersistentVector.EMPTY)}),sablono.interpreter.interpret((colors_in_cultures.views.library.search.cljs$core$IFn$_invoke$arity$0 ? colors_in_cultures.views.library.search.cljs$core$IFn$_invoke$arity$0() : colors_in_cultures.views.library.search.call(null))),sablono.interpreter.interpret((colors_in_cultures.views.library.emotions_list.cljs$core$IFn$_invoke$arity$0 ? colors_in_cultures.views.library.emotions_list.cljs$core$IFn$_invoke$arity$0() : colors_in_cultures.views.library.emotions_list.call(null))));
}),null,"library");
