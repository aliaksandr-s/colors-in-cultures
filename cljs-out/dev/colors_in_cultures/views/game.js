// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('colors_in_cultures.views.game');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
goog.require('cljss.rum');
goog.require('reitit.frontend.easy');
goog.require('colors_in_cultures.components.color_button');
goog.require('colors_in_cultures.components.button');
goog.require('colors_in_cultures.components.card');
goog.require('cljss.core');
goog.require('colors_in_cultures.db.query');
colors_in_cultures.views.game.total_questions = (10);
colors_in_cultures.views.game.color_choices = (4);
colors_in_cultures.views.game.points_reward = (10);
colors_in_cultures.views.game.init_state = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$score,(0),cljs.core.cst$kw$question_DASH_number,(0),cljs.core.cst$kw$game_DASH_seq,colors_in_cultures.db.query.game_seq(colors_in_cultures.views.game.total_questions),cljs.core.cst$kw$selected_DASH_color,null], null);
if((typeof colors_in_cultures !== 'undefined') && (typeof colors_in_cultures.views !== 'undefined') && (typeof colors_in_cultures.views.game !== 'undefined') && (typeof colors_in_cultures.views.game.state !== 'undefined')){
} else {
colors_in_cultures.views.game.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(colors_in_cultures.views.game.init_state);
}
colors_in_cultures.views.game.game_ended_QMARK_ = (function (){var G__25093 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [colors_in_cultures.views.game.state], null);
var G__25094 = cljs.core.cst$kw$colors_DASH_in_DASH_cultures$views$game_SLASH_game_DASH_ended;
var G__25095 = ((function (G__25093,G__25094){
return (function (state){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$question_DASH_number.cljs$core$IFn$_invoke$arity$1(state),colors_in_cultures.views.game.total_questions);
});})(G__25093,G__25094))
;
return (rum.core.derived_atom.cljs$core$IFn$_invoke$arity$3 ? rum.core.derived_atom.cljs$core$IFn$_invoke$arity$3(G__25093,G__25094,G__25095) : rum.core.derived_atom.call(null,G__25093,G__25094,G__25095));
})();
colors_in_cultures.views.game.current_question = (function (){var G__25096 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [colors_in_cultures.views.game.state], null);
var G__25097 = cljs.core.cst$kw$colors_DASH_in_DASH_cultures$views$game_SLASH_cur_DASH_question;
var G__25098 = ((function (G__25096,G__25097){
return (function (state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colors_in_cultures.views.game.total_questions,cljs.core.cst$kw$question_DASH_number.cljs$core$IFn$_invoke$arity$1(state))){
return null;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$game_DASH_seq.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$question_DASH_number.cljs$core$IFn$_invoke$arity$1(state));
}
});})(G__25096,G__25097))
;
return (rum.core.derived_atom.cljs$core$IFn$_invoke$arity$3 ? rum.core.derived_atom.cljs$core$IFn$_invoke$arity$3(G__25096,G__25097,G__25098) : rum.core.derived_atom.call(null,G__25096,G__25097,G__25098));
})();
colors_in_cultures.views.game.correct_color = (function (){var G__25099 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [colors_in_cultures.views.game.current_question], null);
var G__25100 = cljs.core.cst$kw$colors_DASH_in_DASH_cultures$views$game_SLASH_correct_DASH_color;
var G__25101 = ((function (G__25099,G__25100){
return (function (current_question){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_question,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$correct_DASH_color,cljs.core.cst$kw$color_SLASH_name], null));
});})(G__25099,G__25100))
;
return (rum.core.derived_atom.cljs$core$IFn$_invoke$arity$3 ? rum.core.derived_atom.cljs$core$IFn$_invoke$arity$3(G__25099,G__25100,G__25101) : rum.core.derived_atom.call(null,G__25099,G__25100,G__25101));
})();
colors_in_cultures.views.game.selected_color = (function (){var G__25102 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [colors_in_cultures.views.game.state], null);
var G__25103 = cljs.core.cst$kw$colors_DASH_in_DASH_cultures$views$game_SLASH_selected_DASH_color;
var G__25104 = ((function (G__25102,G__25103){
return (function (state){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_color], null));
});})(G__25102,G__25103))
;
return (rum.core.derived_atom.cljs$core$IFn$_invoke$arity$3 ? rum.core.derived_atom.cljs$core$IFn$_invoke$arity$3(G__25102,G__25103,G__25104) : rum.core.derived_atom.call(null,G__25102,G__25103,G__25104));
})();
colors_in_cultures.views.game.reset_game_BANG_ = (function colors_in_cultures$views$game$reset_game_BANG_(){
return cljs.core.reset_BANG_(colors_in_cultures.views.game.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(colors_in_cultures.views.game.init_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$game_DASH_seq,colors_in_cultures.db.query.game_seq(colors_in_cultures.views.game.total_questions)], null)));
});
colors_in_cultures.views.game.update_score = (function colors_in_cultures$views$game$update_score(correct,selected){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(correct,selected)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(colors_in_cultures.views.game.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$score], null),(function (p1__25105_SHARP_){
return (p1__25105_SHARP_ + colors_in_cultures.views.game.points_reward);
}));
} else {
return null;
}
});
colors_in_cultures.views.game.current_question_inc = (function colors_in_cultures$views$game$current_question_inc(){
if(cljs.core.truth_(cljs.core.deref(colors_in_cultures.views.game.game_ended_QMARK_))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(colors_in_cultures.views.game.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$question_DASH_number], null),cljs.core.inc);
}
});
colors_in_cultures.views.game.handle_color_click = (function colors_in_cultures$views$game$handle_color_click(color){
return (function (){
if(cljs.core.truth_(cljs.core.deref(colors_in_cultures.views.game.selected_color))){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(colors_in_cultures.views.game.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_color], null),(function (){
return cljs.core.cst$kw$color_SLASH_name.cljs$core$IFn$_invoke$arity$1(color);
}));

colors_in_cultures.views.game.update_score(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(colors_in_cultures.views.game.current_question),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$correct_DASH_color,cljs.core.cst$kw$color_SLASH_name], null)),cljs.core.cst$kw$color_SLASH_name.cljs$core$IFn$_invoke$arity$1(color));

return setTimeout((function (){
colors_in_cultures.views.game.current_question_inc();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(colors_in_cultures.views.game.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_color], null),(function (){
return null;
}));
}),(650));
}
});
});
colors_in_cultures.views.game.prep_colors_to_select_from = (function colors_in_cultures$views$game$prep_colors_to_select_from(colors,correct_color,n){
return cljs.core.shuffle(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [correct_color], null),cljs.core.shuffle(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25106_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$color_SLASH_name.cljs$core$IFn$_invoke$arity$1(p1__25106_SHARP_),cljs.core.cst$kw$color_SLASH_name.cljs$core$IFn$_invoke$arity$1(correct_color));
}),colors)))));
});
colors_in_cultures.views.game.get_button_title_color = (function colors_in_cultures$views$game$get_button_title_color(correct,selected,current){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([correct,selected,current], 0));

if(cljs.core.truth_((function (){var and__3938__auto__ = selected;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(correct,current);
} else {
return and__3938__auto__;
}
})())){
return "green";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,current)){
return "red";
} else {
return "black";

}
}
});
colors_in_cultures.views.game.double_card = rum.core.build_defc((function (emotion,nation){
var selected_color = rum.core.react(colors_in_cultures.views.game.selected_color);
var current_question = rum.core.react(colors_in_cultures.views.game.current_question);
var emotion__$1 = cljs.core.cst$kw$emotion.cljs$core$IFn$_invoke$arity$1(current_question);
var nation__$1 = cljs.core.cst$kw$nation.cljs$core$IFn$_invoke$arity$1(current_question);
return React.createElement("div",({"className": cljss.core.css("css--253783176",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css--253783176{display:flex;justify-content:center;align-items:center;position:relative;height:300px;}",".css--253783176 > *{position:absolute !important;opacity:1 !important;}",".css--253783176 > :first-child{transform:translateX(-70px) rotate(-20deg);}",".css--253783176 > :last-child{transform:translateX(70px) rotate(26deg);}"], null),cljs.core.PersistentVector.EMPTY)}),sablono.interpreter.interpret((function (){var G__25107 = cljs.core.cst$kw$emotion_SLASH_name.cljs$core$IFn$_invoke$arity$1(emotion__$1);
var G__25108 = cljs.core.cst$kw$emotion_SLASH_icon.cljs$core$IFn$_invoke$arity$1(emotion__$1);
var G__25109 = null;
var G__25110 = true;
var G__25111 = selected_color;
return (colors_in_cultures.components.card.card.cljs$core$IFn$_invoke$arity$5 ? colors_in_cultures.components.card.card.cljs$core$IFn$_invoke$arity$5(G__25107,G__25108,G__25109,G__25110,G__25111) : colors_in_cultures.components.card.card.call(null,G__25107,G__25108,G__25109,G__25110,G__25111));
})()),sablono.interpreter.interpret((function (){var G__25112 = cljs.core.cst$kw$nation_SLASH_name.cljs$core$IFn$_invoke$arity$1(nation__$1);
var G__25113 = cljs.core.cst$kw$nation_SLASH_icon.cljs$core$IFn$_invoke$arity$1(nation__$1);
var G__25114 = null;
var G__25115 = true;
var G__25116 = selected_color;
return (colors_in_cultures.components.card.card.cljs$core$IFn$_invoke$arity$5 ? colors_in_cultures.components.card.card.cljs$core$IFn$_invoke$arity$5(G__25112,G__25113,G__25114,G__25115,G__25116) : colors_in_cultures.components.card.card.call(null,G__25112,G__25113,G__25114,G__25115,G__25116));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"double-card");
colors_in_cultures.views.game.color_button_with_title = rum.core.build_defc((function (color,on_click,status){
var selected_color = rum.core.react(rum.core.cursor_in(colors_in_cultures.views.game.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$selected_DASH_color], null)));
var title_color = colors_in_cultures.views.game.get_button_title_color(cljs.core.deref(colors_in_cultures.views.game.correct_color),selected_color,cljs.core.cst$kw$color_SLASH_name.cljs$core$IFn$_invoke$arity$1(color));
return React.createElement("div",({"className": cljss.core.css("css--1798423468",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css--1798423468{display:flex;flex-direction:column;}"], null),cljs.core.PersistentVector.EMPTY)}),React.createElement("div",({"className": cljss.core.css("css--1624355151",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css--1624355151{text-align:center;text-transform:capitalize;font-weight:500;color:var(--var-css--1624355151-0);}"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-css--1624355151-0",title_color], null)], null))}),sablono.interpreter.interpret(cljs.core.cst$kw$color_SLASH_name.cljs$core$IFn$_invoke$arity$1(color))),sablono.interpreter.interpret((colors_in_cultures.components.color_button.color_button.cljs$core$IFn$_invoke$arity$2 ? colors_in_cultures.components.color_button.color_button.cljs$core$IFn$_invoke$arity$2(color,on_click) : colors_in_cultures.components.color_button.color_button.call(null,color,on_click))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"color-button-with-title");
colors_in_cultures.views.game.color_range = rum.core.build_defc((function (colors){
var current_question = rum.core.react(colors_in_cultures.views.game.current_question);
var colors__$1 = colors_in_cultures.views.game.prep_colors_to_select_from(colors_in_cultures.db.query.get_colors(),cljs.core.cst$kw$correct_DASH_color.cljs$core$IFn$_invoke$arity$1(current_question),colors_in_cultures.views.game.color_choices);
return React.createElement("div",({"className": cljss.core.css("css--918202881",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css--918202881{padding:10px;}"], null),cljs.core.PersistentVector.EMPTY)}),React.createElement("div",({"className": cljss.core.css("css-76835068",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css-76835068{display:flex;flex-wrap:wrap;justify-content:center;margin:auto;}",".css-76835068 > *{margin:10px;}"], null),cljs.core.PersistentVector.EMPTY)}),cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4324__auto__ = ((function (current_question,colors__$1){
return (function colors_in_cultures$views$game$iter__25117(s__25118){
return (new cljs.core.LazySeq(null,((function (current_question,colors__$1){
return (function (){
var s__25118__$1 = s__25118;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__25118__$1);
if(temp__5720__auto__){
var s__25118__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25118__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__25118__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__25120 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__25119 = (0);
while(true){
if((i__25119 < size__4323__auto__)){
var color = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__25119);
cljs.core.chunk_append(b__25120,sablono.interpreter.interpret(rum.core.with_key((function (){var G__25121 = color;
var G__25122 = colors_in_cultures.views.game.handle_color_click(color);
return (colors_in_cultures.views.game.color_button_with_title.cljs$core$IFn$_invoke$arity$2 ? colors_in_cultures.views.game.color_button_with_title.cljs$core$IFn$_invoke$arity$2(G__25121,G__25122) : colors_in_cultures.views.game.color_button_with_title.call(null,G__25121,G__25122));
})(),cljs.core.cst$kw$color_SLASH_name.cljs$core$IFn$_invoke$arity$1(color))));

var G__25125 = (i__25119 + (1));
i__25119 = G__25125;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25120),colors_in_cultures$views$game$iter__25117(cljs.core.chunk_rest(s__25118__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25120),null);
}
} else {
var color = cljs.core.first(s__25118__$2);
return cljs.core.cons(sablono.interpreter.interpret(rum.core.with_key((function (){var G__25123 = color;
var G__25124 = colors_in_cultures.views.game.handle_color_click(color);
return (colors_in_cultures.views.game.color_button_with_title.cljs$core$IFn$_invoke$arity$2 ? colors_in_cultures.views.game.color_button_with_title.cljs$core$IFn$_invoke$arity$2(G__25123,G__25124) : colors_in_cultures.views.game.color_button_with_title.call(null,G__25123,G__25124));
})(),cljs.core.cst$kw$color_SLASH_name.cljs$core$IFn$_invoke$arity$1(color))),colors_in_cultures$views$game$iter__25117(cljs.core.rest(s__25118__$2)));
}
} else {
return null;
}
break;
}
});})(current_question,colors__$1))
,null,null));
});})(current_question,colors__$1))
;
return iter__4324__auto__(colors__$1);
})())));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"color-range");
colors_in_cultures.views.game.status_line = rum.core.build_defc((function (){
var question_number = rum.core.react(rum.core.cursor_in(colors_in_cultures.views.game.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$question_DASH_number], null)));
var score = rum.core.react(rum.core.cursor_in(colors_in_cultures.views.game.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$score], null)));
return React.createElement("div",({"className": cljss.core.css("css--838317364",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css--838317364{display:flex;justify-content:space-between;font-size:20px;font-weight:500;}"], null),cljs.core.PersistentVector.EMPTY)}),(function (){var attrs25126 = ["Question: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((1) + question_number)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(colors_in_cultures.views.game.total_questions)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs25126))?sablono.interpreter.attributes(attrs25126):null),((cljs.core.map_QMARK_(attrs25126))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25126)], null)));
})(),(function (){var attrs25127 = ["Score: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(score)].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs25127))?sablono.interpreter.attributes(attrs25127):null),((cljs.core.map_QMARK_(attrs25127))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25127)], null)));
})());
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"status-line");
colors_in_cultures.views.game.start_over_banner = rum.core.build_defc((function (score){
var score__$1 = rum.core.cursor_in(colors_in_cultures.views.game.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$score], null));
return React.createElement("div",({"className": cljss.core.css("css--560244772",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css--560244772{font-size:20px;display:flex;flex-direction:column;align-items:center;}"], null),cljs.core.PersistentVector.EMPTY)}),React.createElement("p",({"className": cljss.core.css("css-1640801413",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css-1640801413{font-weight:600;font-size:32px;}"], null),cljs.core.PersistentVector.EMPTY)}),"Game over"),React.createElement("p",({"className": cljss.core.css("css--1970660573",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css--1970660573{font-weight:500;padding-bottom:60px;}"], null),cljs.core.PersistentVector.EMPTY)}),sablono.interpreter.interpret(["Your score is: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(score__$1))].join(''))),React.createElement("div",({"className": cljss.core.css("css--1748662377",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css--1748662377{padding-bottom:16px;}"], null),cljs.core.PersistentVector.EMPTY)}),sablono.interpreter.interpret((function (){var G__25130 = "Play Again";
var G__25131 = "#5ac76c";
var G__25132 = ((function (G__25130,G__25131,score__$1){
return (function (){
return colors_in_cultures.views.game.reset_game_BANG_();
});})(G__25130,G__25131,score__$1))
;
return (colors_in_cultures.components.button.button.cljs$core$IFn$_invoke$arity$3 ? colors_in_cultures.components.button.button.cljs$core$IFn$_invoke$arity$3(G__25130,G__25131,G__25132) : colors_in_cultures.components.button.button.call(null,G__25130,G__25131,G__25132));
})())),sablono.interpreter.interpret((function (){var G__25133 = "Explore Library";
var G__25134 = "#50ade3";
var G__25135 = ((function (G__25133,G__25134,score__$1){
return (function (){
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$colors_DASH_in_DASH_cultures$core_SLASH_library);
});})(G__25133,G__25134,score__$1))
;
return (colors_in_cultures.components.button.button.cljs$core$IFn$_invoke$arity$3 ? colors_in_cultures.components.button.button.cljs$core$IFn$_invoke$arity$3(G__25133,G__25134,G__25135) : colors_in_cultures.components.button.button.call(null,G__25133,G__25134,G__25135));
})()));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"start-over-banner");
colors_in_cultures.views.game.game = rum.core.build_defc((function (){
var game_ended_QMARK_ = rum.core.react(colors_in_cultures.views.game.game_ended_QMARK_);
return React.createElement("div",({"className": cljss.core.css("css--129760672",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css--129760672{display:flex;flex-direction:column;justify-content:space-between;height:-webkit-fill-available;}"], null),cljs.core.PersistentVector.EMPTY)}),React.createElement("div",({"className": cljss.core.css("css--836355667",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css--836355667{padding:20px;}"], null),cljs.core.PersistentVector.EMPTY)}),sablono.interpreter.interpret((cljs.core.truth_(game_ended_QMARK_)?null:(colors_in_cultures.views.game.status_line.cljs$core$IFn$_invoke$arity$0 ? colors_in_cultures.views.game.status_line.cljs$core$IFn$_invoke$arity$0() : colors_in_cultures.views.game.status_line.call(null))))),React.createElement("div",({"className": cljss.core.css("css-1541287592",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css-1541287592{display:flex;justify-content:center;}"], null),cljs.core.PersistentVector.EMPTY)}),(cljs.core.truth_(game_ended_QMARK_)?sablono.interpreter.interpret((colors_in_cultures.views.game.start_over_banner.cljs$core$IFn$_invoke$arity$0 ? colors_in_cultures.views.game.start_over_banner.cljs$core$IFn$_invoke$arity$0() : colors_in_cultures.views.game.start_over_banner.call(null))):sablono.interpreter.interpret((colors_in_cultures.views.game.double_card.cljs$core$IFn$_invoke$arity$0 ? colors_in_cultures.views.game.double_card.cljs$core$IFn$_invoke$arity$0() : colors_in_cultures.views.game.double_card.call(null))))),React.createElement("div",({"className": cljss.core.css("css-608904218",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".css-608904218{padding-bottom:20px;}"], null),cljs.core.PersistentVector.EMPTY)}),sablono.interpreter.interpret((cljs.core.truth_(game_ended_QMARK_)?null:(colors_in_cultures.views.game.color_range.cljs$core$IFn$_invoke$arity$0 ? colors_in_cultures.views.game.color_range.cljs$core$IFn$_invoke$arity$0() : colors_in_cultures.views.game.color_range.call(null))))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"game");
