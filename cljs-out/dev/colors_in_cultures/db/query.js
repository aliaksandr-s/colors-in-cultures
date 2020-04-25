// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('colors_in_cultures.db.query');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('datascript.core');
goog.require('clojure.string');
goog.require('colors_in_cultures.db.core');
colors_in_cultures.db.query.get_colors = (function colors_in_cultures$db$query$get_colors(){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$color_SLASH_name,(function (){var G__24697 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$pull,cljs.core.cst$sym$_QMARK_color_DASH_e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$color_SLASH_name,cljs.core.cst$kw$color_SLASH_code], null)),cljs.core.cst$sym$$$$], null),cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_color_DASH_e,cljs.core.cst$kw$color_SLASH_name,cljs.core.cst$sym$_], null)], null);
var G__24698 = cljs.core.deref(colors_in_cultures.db.core.conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__24697,G__24698) : datascript.core.q.call(null,G__24697,G__24698));
})());
});
colors_in_cultures.db.query.get_color_code = (function colors_in_cultures$db$query$get_color_code(color_name){
var G__24699 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.cst$sym$_QMARK_color_DASH_code,cljs.core.cst$sym$_DOT_,cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_color_DASH_name,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_c_DASH_entity,cljs.core.cst$kw$color_SLASH_name,cljs.core.cst$sym$_QMARK_color_DASH_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_c_DASH_entity,cljs.core.cst$kw$color_SLASH_code,cljs.core.cst$sym$_QMARK_color_DASH_code], null)], null);
var G__24700 = cljs.core.deref(colors_in_cultures.db.core.conn);
var G__24701 = color_name;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__24699,G__24700,G__24701) : datascript.core.q.call(null,G__24699,G__24700,G__24701));
});
colors_in_cultures.db.query.has_color_QMARK_ = (function colors_in_cultures$db$query$has_color_QMARK_(relations,color){
return cljs.core.some((function (rel){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$color_SLASH_name.cljs$core$IFn$_invoke$arity$1(cljs.core.second(rel)),color);
}),relations);
});
colors_in_cultures.db.query.get_nations = (function colors_in_cultures$db$query$get_nations(){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$nation_SLASH_name,(function (){var G__24702 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$pull,cljs.core.cst$sym$_QMARK_nation_DASH_e,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null)),cljs.core.cst$sym$$$$], null),cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_nation_DASH_e,cljs.core.cst$kw$nation_SLASH_name,cljs.core.cst$sym$_], null)], null);
var G__24703 = cljs.core.deref(colors_in_cultures.db.core.conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__24702,G__24703) : datascript.core.q.call(null,G__24702,G__24703));
})());
});
colors_in_cultures.db.query.get_nation = (function colors_in_cultures$db$query$get_nation(nation_id){
var G__24704 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.list(cljs.core.cst$sym$pull,cljs.core.cst$sym$_QMARK_e,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null)),cljs.core.cst$sym$_DOT_,cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_nation_DASH_id,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$kw$nation_SLASH_id,cljs.core.cst$sym$_QMARK_nation_DASH_id], null)], null);
var G__24705 = cljs.core.deref(colors_in_cultures.db.core.conn);
var G__24706 = nation_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__24704,G__24705,G__24706) : datascript.core.q.call(null,G__24704,G__24705,G__24706));
});
colors_in_cultures.db.query.get_color = (function colors_in_cultures$db$query$get_color(color_name){
var G__24707 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.list(cljs.core.cst$sym$pull,cljs.core.cst$sym$_QMARK_e,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null)),cljs.core.cst$sym$_DOT_,cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_color_DASH_name,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$kw$color_SLASH_name,cljs.core.cst$sym$_QMARK_color_DASH_name], null)], null);
var G__24708 = cljs.core.deref(colors_in_cultures.db.core.conn);
var G__24709 = color_name;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__24707,G__24708,G__24709) : datascript.core.q.call(null,G__24707,G__24708,G__24709));
});
colors_in_cultures.db.query.transform_relations = (function colors_in_cultures$db$query$transform_relations(relations){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24710_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[colors_in_cultures.db.query.get_nation(cljs.core.first(p1__24710_SHARP_)),colors_in_cultures.db.query.get_color(cljs.core.second(p1__24710_SHARP_))],null));
}),relations);
});
colors_in_cultures.db.query.starts_with_QMARK_ = (function colors_in_cultures$db$query$starts_with_QMARK_(orig_str,query){
return clojure.string.starts_with_QMARK_(clojure.string.lower_case(orig_str),clojure.string.lower_case(query));
});
colors_in_cultures.db.query.get_emotions = (function colors_in_cultures$db$query$get_emotions(query){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__24711_SHARP_){
return cljs.core.cst$kw$emotion_SLASH_name.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__24711_SHARP_));
}),(function (){var G__24712 = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.list(cljs.core.cst$sym$pull,cljs.core.cst$sym$_QMARK_e,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$emotion_SLASH_id,cljs.core.cst$kw$emotion_SLASH_name,cljs.core.cst$kw$emotion_SLASH_icon], null)),cljs.core.cst$sym$_QMARK_transformed_DASH_rel,cljs.core.cst$kw$in,cljs.core.cst$sym$$,cljs.core.cst$sym$_QMARK_query,cljs.core.cst$sym$starts_DASH_with_QMARK_,cljs.core.cst$sym$transform_DASH_relations,cljs.core.cst$kw$where,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$kw$emotion_SLASH_name,cljs.core.cst$sym$_QMARK_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_QMARK_e,cljs.core.cst$kw$emotion_SLASH_relations,cljs.core.cst$sym$_QMARK_rel], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$starts_DASH_with_QMARK_,cljs.core.cst$sym$_QMARK_name,cljs.core.cst$sym$_QMARK_query)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$transform_DASH_relations,cljs.core.cst$sym$_QMARK_rel),cljs.core.cst$sym$_QMARK_transformed_DASH_rel], null)], null);
var G__24713 = cljs.core.deref(colors_in_cultures.db.core.conn);
var G__24714 = query;
var G__24715 = colors_in_cultures.db.query.starts_with_QMARK_;
var G__24716 = colors_in_cultures.db.query.transform_relations;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__24712,G__24713,G__24714,G__24715,G__24716) : datascript.core.q.call(null,G__24712,G__24713,G__24714,G__24715,G__24716));
})());
});
colors_in_cultures.db.query.game_seq = (function colors_in_cultures$db$query$game_seq(n){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (el){
var random_rel = cljs.core.shuffle(cljs.core.second(el));
var nation = cljs.core.ffirst(random_rel);
var correct_color = cljs.core.second(cljs.core.first(random_rel));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$emotion,cljs.core.first(el),cljs.core.cst$kw$nation,nation,cljs.core.cst$kw$correct_DASH_color,correct_color], null);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.shuffle(colors_in_cultures.db.query.get_emotions(""))));
});
