// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('colors_in_cultures.db.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('datascript.core');
goog.require('clojure.string');
goog.require('colors_in_cultures.db.init_data');
if((typeof colors_in_cultures !== 'undefined') && (typeof colors_in_cultures.db !== 'undefined') && (typeof colors_in_cultures.db.core !== 'undefined') && (typeof colors_in_cultures.db.core.conn !== 'undefined')){
} else {
colors_in_cultures.db.core.conn = datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(colors_in_cultures.db.init_data.schema);
}
colors_in_cultures.db.core.load_db_BANG_ = (function colors_in_cultures$db$core$load_db_BANG_(conn,data){
datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(conn,(datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(colors_in_cultures.db.init_data.schema) : datascript.core.empty_db.call(null,colors_in_cultures.db.init_data.schema)));

var seq__24679 = cljs.core.seq(data);
var chunk__24680 = null;
var count__24681 = (0);
var i__24682 = (0);
while(true){
if((i__24682 < count__24681)){
var d = chunk__24680.cljs$core$IIndexed$_nth$arity$2(null,i__24682);
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,d);


var G__24683 = seq__24679;
var G__24684 = chunk__24680;
var G__24685 = count__24681;
var G__24686 = (i__24682 + (1));
seq__24679 = G__24683;
chunk__24680 = G__24684;
count__24681 = G__24685;
i__24682 = G__24686;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__24679);
if(temp__5720__auto__){
var seq__24679__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24679__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__24679__$1);
var G__24687 = cljs.core.chunk_rest(seq__24679__$1);
var G__24688 = c__4351__auto__;
var G__24689 = cljs.core.count(c__4351__auto__);
var G__24690 = (0);
seq__24679 = G__24687;
chunk__24680 = G__24688;
count__24681 = G__24689;
i__24682 = G__24690;
continue;
} else {
var d = cljs.core.first(seq__24679__$1);
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,d);


var G__24691 = cljs.core.next(seq__24679__$1);
var G__24692 = null;
var G__24693 = (0);
var G__24694 = (0);
seq__24679 = G__24691;
chunk__24680 = G__24692;
count__24681 = G__24693;
i__24682 = G__24694;
continue;
}
} else {
return null;
}
}
break;
}
});
colors_in_cultures.db.core.load_db_BANG_(colors_in_cultures.db.core.conn,colors_in_cultures.db.init_data.init_data);
