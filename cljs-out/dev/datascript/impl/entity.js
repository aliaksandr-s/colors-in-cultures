// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('datascript.impl.entity');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');
goog.require('datascript.db');




datascript.impl.entity.entid = (function datascript$impl$entity$entid(db,eid){
if(((typeof eid === 'number') || (cljs.core.sequential_QMARK_(eid)) || ((eid instanceof cljs.core.Keyword)))){
return datascript.db.entid(db,eid);
} else {
return null;
}
});
datascript.impl.entity.entity = (function datascript$impl$entity$entity(db,eid){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

var temp__5720__auto__ = datascript.impl.entity.entid(db,eid);
if(cljs.core.truth_(temp__5720__auto__)){
var e = temp__5720__auto__;
var G__23945 = db;
var G__23946 = e;
var G__23947 = cljs.core.volatile_BANG_(false);
var G__23948 = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
return (datascript.impl.entity.__GT_Entity.cljs$core$IFn$_invoke$arity$4 ? datascript.impl.entity.__GT_Entity.cljs$core$IFn$_invoke$arity$4(G__23945,G__23946,G__23947,G__23948) : datascript.impl.entity.__GT_Entity.call(null,G__23945,G__23946,G__23947,G__23948));
} else {
return null;
}
});
datascript.impl.entity.entity_attr = (function datascript$impl$entity$entity_attr(db,a,datoms){
if(datascript.db.multival_QMARK_(db,a)){
if(datascript.db.ref_QMARK_(db,a)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__23949_SHARP_,p2__23950_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__23949_SHARP_,datascript.impl.entity.entity(db,cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(p2__23950_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__23951_SHARP_,p2__23952_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__23951_SHARP_,cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(p2__23952_SHARP_));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
if(datascript.db.ref_QMARK_(db,a)){
return datascript.impl.entity.entity(db,cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms)));
} else {
return cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms));
}
}
});
datascript.impl.entity._lookup_backwards = (function datascript$impl$entity$_lookup_backwards(db,eid,attr,not_found){
var temp__5718__auto__ = cljs.core.not_empty(datascript.db._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,attr,eid], null)));
if(cljs.core.truth_(temp__5718__auto__)){
var datoms = temp__5718__auto__;
if(datascript.db.component_QMARK_(db,attr)){
return datascript.impl.entity.entity(db,cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (datoms,temp__5718__auto__){
return (function (p1__23953_SHARP_,p2__23954_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__23953_SHARP_,datascript.impl.entity.entity(db,cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(p2__23954_SHARP_)));
});})(datoms,temp__5718__auto__))
,cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
return not_found;
}
});
datascript.impl.entity.multival__GT_js = (function datascript$impl$entity$multival__GT_js(val){
if(cljs.core.truth_(val)){
return cljs.core.to_array(val);
} else {
return null;
}
});
datascript.impl.entity.js_seq = (function datascript$impl$entity$js_seq(e){
(datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1(e) : datascript.impl.entity.touch.call(null,e));

var iter__4324__auto__ = (function datascript$impl$entity$js_seq_$_iter__23955(s__23956){
return (new cljs.core.LazySeq(null,(function (){
var s__23956__$1 = s__23956;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__23956__$1);
if(temp__5720__auto__){
var s__23956__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23956__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__23956__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__23958 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__23957 = (0);
while(true){
if((i__23957 < size__4323__auto__)){
var vec__23959 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__23957);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23959,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23959,(1),null);
cljs.core.chunk_append(b__23958,((datascript.db.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));

var G__23965 = (i__23957 + (1));
i__23957 = G__23965;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23958),datascript$impl$entity$js_seq_$_iter__23955(cljs.core.chunk_rest(s__23956__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23958),null);
}
} else {
var vec__23962 = cljs.core.first(s__23956__$2);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23962,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23962,(1),null);
return cljs.core.cons(((datascript.db.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),datascript$impl$entity$js_seq_$_iter__23955(cljs.core.rest(s__23956__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(cljs.core.deref(e.cache));
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {datascript.impl.entity.Object}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
datascript.impl.entity.Entity = (function (db,eid,touched,cache){
this.db = db;
this.eid = eid;
this.touched = touched;
this.cache = cache;
this.cljs$lang$protocol_mask$partition0$ = 2162164483;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
datascript.impl.entity.Entity.prototype.entry_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,datascript.impl.entity.js_seq(this$)));
});

datascript.impl.entity.Entity.prototype.forEach = (function() {
var G__23991 = null;
var G__23991__1 = (function (f){
var self__ = this;
var this$ = this;
var seq__23967 = cljs.core.seq(datascript.impl.entity.js_seq(this$));
var chunk__23968 = null;
var count__23969 = (0);
var i__23970 = (0);
while(true){
if((i__23970 < count__23969)){
var vec__23971 = chunk__23968.cljs$core$IIndexed$_nth$arity$2(null,i__23970);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23971,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23971,(1),null);
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(v,a,this$) : f.call(null,v,a,this$));


var G__23992 = seq__23967;
var G__23993 = chunk__23968;
var G__23994 = count__23969;
var G__23995 = (i__23970 + (1));
seq__23967 = G__23992;
chunk__23968 = G__23993;
count__23969 = G__23994;
i__23970 = G__23995;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__23967);
if(temp__5720__auto__){
var seq__23967__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23967__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__23967__$1);
var G__23996 = cljs.core.chunk_rest(seq__23967__$1);
var G__23997 = c__4351__auto__;
var G__23998 = cljs.core.count(c__4351__auto__);
var G__23999 = (0);
seq__23967 = G__23996;
chunk__23968 = G__23997;
count__23969 = G__23998;
i__23970 = G__23999;
continue;
} else {
var vec__23974 = cljs.core.first(seq__23967__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23974,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23974,(1),null);
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(v,a,this$) : f.call(null,v,a,this$));


var G__24000 = cljs.core.next(seq__23967__$1);
var G__24001 = null;
var G__24002 = (0);
var G__24003 = (0);
seq__23967 = G__24000;
chunk__23968 = G__24001;
count__23969 = G__24002;
i__23970 = G__24003;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__23991__2 = (function (f,use_as_this){
var self__ = this;
var this$ = this;
var seq__23977 = cljs.core.seq(datascript.impl.entity.js_seq(this$));
var chunk__23978 = null;
var count__23979 = (0);
var i__23980 = (0);
while(true){
if((i__23980 < count__23979)){
var vec__23981 = chunk__23978.cljs$core$IIndexed$_nth$arity$2(null,i__23980);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23981,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23981,(1),null);
f.call(use_as_this,v,a,this$);


var G__24004 = seq__23977;
var G__24005 = chunk__23978;
var G__24006 = count__23979;
var G__24007 = (i__23980 + (1));
seq__23977 = G__24004;
chunk__23978 = G__24005;
count__23979 = G__24006;
i__23980 = G__24007;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__23977);
if(temp__5720__auto__){
var seq__23977__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23977__$1)){
var c__4351__auto__ = cljs.core.chunk_first(seq__23977__$1);
var G__24008 = cljs.core.chunk_rest(seq__23977__$1);
var G__24009 = c__4351__auto__;
var G__24010 = cljs.core.count(c__4351__auto__);
var G__24011 = (0);
seq__23977 = G__24008;
chunk__23978 = G__24009;
count__23979 = G__24010;
i__23980 = G__24011;
continue;
} else {
var vec__23984 = cljs.core.first(seq__23977__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23984,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23984,(1),null);
f.call(use_as_this,v,a,this$);


var G__24012 = cljs.core.next(seq__23977__$1);
var G__24013 = null;
var G__24014 = (0);
var G__24015 = (0);
seq__23977 = G__24012;
chunk__23978 = G__24013;
count__23979 = G__24014;
i__23980 = G__24015;
continue;
}
} else {
return null;
}
}
break;
}
});
G__23991 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__23991__1.call(this,f);
case 2:
return G__23991__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23991.cljs$core$IFn$_invoke$arity$1 = G__23991__1;
G__23991.cljs$core$IFn$_invoke$arity$2 = G__23991__2;
return G__23991;
})()
;

datascript.impl.entity.Entity.prototype.get = (function (attr){
var self__ = this;
var this$ = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,":db/id")){
return self__.eid;
} else {
if(datascript.db.reverse_ref_QMARK_(attr)){
return datascript.impl.entity.multival__GT_js(datascript.impl.entity._lookup_backwards(self__.db,self__.eid,datascript.db.reverse_ref(attr),null));
} else {
var G__23987 = (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2(this$,attr) : datascript.impl.entity.lookup_entity.call(null,this$,attr));
if(datascript.db.multival_QMARK_(self__.db,attr)){
return datascript.impl.entity.multival__GT_js(G__23987);
} else {
return G__23987;
}
}
}
});

datascript.impl.entity.Entity.prototype.key_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array(cljs.core.keys(this$));
});

datascript.impl.entity.Entity.prototype.entries = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_entries_iterator(datascript.impl.entity.js_seq(this$));
});

datascript.impl.entity.Entity.prototype.value_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,datascript.impl.entity.js_seq(this$)));
});

datascript.impl.entity.Entity.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_(this$);
});

datascript.impl.entity.Entity.prototype.keys = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator(cljs.core.keys(this$));
});

datascript.impl.entity.Entity.prototype.values = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,datascript.impl.entity.js_seq(this$)));
});

datascript.impl.entity.Entity.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return (datascript.impl.entity.equiv_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.equiv_entity.cljs$core$IFn$_invoke$arity$2(this$,other) : datascript.impl.entity.equiv_entity.call(null,this$,other));
});

datascript.impl.entity.Entity.prototype.has = (function (attr){
var self__ = this;
var this$ = this;
return !((this$.get(attr) == null));
});

datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,attr){
var self__ = this;
var this$__$1 = this;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$__$1,attr,null) : datascript.impl.entity.lookup_entity.call(null,this$__$1,attr,null));
});

datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,attr,not_found){
var self__ = this;
var this$__$1 = this;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$__$1,attr,not_found) : datascript.impl.entity.lookup_entity.call(null,this$__$1,attr,not_found));
});

datascript.impl.entity.Entity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(self__.cache),cljs.core.cst$kw$db_SLASH_id,self__.eid),writer,opts);
});

datascript.impl.entity.Entity.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
(datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1(this$__$1) : datascript.impl.entity.touch.call(null,this$__$1));

return cljs.core.count(cljs.core.deref(self__.cache));
});

datascript.impl.entity.Entity.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.eid);
});

datascript.impl.entity.Entity.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return (datascript.impl.entity.equiv_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.equiv_entity.cljs$core$IFn$_invoke$arity$2(this$__$1,o) : datascript.impl.entity.equiv_entity.call(null,this$__$1,o));
});

datascript.impl.entity.Entity.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$datascript$impl$entity_SLASH_nf,(function (){var G__23988 = this$__$1;
var G__23989 = k;
var G__23990 = cljs.core.cst$kw$datascript$impl$entity_SLASH_nf;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(G__23988,G__23989,G__23990) : datascript.impl.entity.lookup_entity.call(null,G__23988,G__23989,G__23990));
})());
});

datascript.impl.entity.Entity.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
(datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1(this$__$1) : datascript.impl.entity.touch.call(null,this$__$1));

return cljs.core.seq(cljs.core.deref(self__.cache));
});

datascript.impl.entity.Entity.prototype.call = (function() {
var G__24016 = null;
var G__24016__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2(this$,k) : datascript.impl.entity.lookup_entity.call(null,this$,k));
});
var G__24016__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$,k,not_found) : datascript.impl.entity.lookup_entity.call(null,this$,k,not_found));
});
G__24016 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__24016__2.call(this,self__,k);
case 3:
return G__24016__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__24016.cljs$core$IFn$_invoke$arity$2 = G__24016__2;
G__24016.cljs$core$IFn$_invoke$arity$3 = G__24016__3;
return G__24016;
})()
;

datascript.impl.entity.Entity.prototype.apply = (function (self__,args23966){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args23966)));
});

datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2(this$,k) : datascript.impl.entity.lookup_entity.call(null,this$,k));
});

datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$,k,not_found) : datascript.impl.entity.lookup_entity.call(null,this$,k,not_found));
});

datascript.impl.entity.Entity.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,cljs.core.cst$sym$eid,cljs.core.cst$sym$touched,cljs.core.cst$sym$cache], null);
});

datascript.impl.entity.Entity.cljs$lang$type = true;

datascript.impl.entity.Entity.cljs$lang$ctorStr = "datascript.impl.entity/Entity";

datascript.impl.entity.Entity.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write(writer__4193__auto__,"datascript.impl.entity/Entity");
});

/**
 * Positional factory function for datascript.impl.entity/Entity.
 */
datascript.impl.entity.__GT_Entity = (function datascript$impl$entity$__GT_Entity(db,eid,touched,cache){
return (new datascript.impl.entity.Entity(db,eid,touched,cache));
});

datascript.impl.entity.entity_QMARK_ = (function datascript$impl$entity$entity_QMARK_(x){
return (x instanceof datascript.impl.entity.Entity);
});
datascript.impl.entity.equiv_entity = (function datascript$impl$entity$equiv_entity(this$,that){
return (((that instanceof datascript.impl.entity.Entity)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$.eid,that.eid)));
});
datascript.impl.entity.lookup_entity = (function datascript$impl$entity$lookup_entity(var_args){
var G__24018 = arguments.length;
switch (G__24018) {
case 2:
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 = (function (this$,attr){
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$,attr,null);
});

datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 = (function (this$,attr,not_found){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,cljs.core.cst$kw$db_SLASH_id)){
return this$.eid;
} else {
if(datascript.db.reverse_ref_QMARK_(attr)){
return datascript.impl.entity._lookup_backwards(this$.db,this$.eid,datascript.db.reverse_ref(attr),not_found);
} else {
var temp__5722__auto__ = (function (){var fexpr__24019 = cljs.core.deref(this$.cache);
return (fexpr__24019.cljs$core$IFn$_invoke$arity$1 ? fexpr__24019.cljs$core$IFn$_invoke$arity$1(attr) : fexpr__24019.call(null,attr));
})();
if((temp__5722__auto__ == null)){
if(cljs.core.truth_(cljs.core.deref(this$.touched))){
return not_found;
} else {
var temp__5722__auto____$1 = cljs.core.not_empty(datascript.db._search(this$.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$.eid,attr], null)));
if((temp__5722__auto____$1 == null)){
return not_found;
} else {
var datoms = temp__5722__auto____$1;
var value = datascript.impl.entity.entity_attr(this$.db,attr,datoms);
cljs.core.vreset_BANG_(this$.cache,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(this$.cache),attr,value));

return value;
}
}
} else {
var v = temp__5722__auto__;
return v;
}
}
}
});

datascript.impl.entity.lookup_entity.cljs$lang$maxFixedArity = 3;

datascript.impl.entity.touch_components = (function datascript$impl$entity$touch_components(db,a__GT_v){
return cljs.core.reduce_kv((function (acc,a,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,a,((datascript.db.component_QMARK_(db,a))?((datascript.db.multival_QMARK_(db,a))?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(datascript.impl.entity.touch,v)):(datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1(v) : datascript.impl.entity.touch.call(null,v))):v));
}),cljs.core.PersistentArrayMap.EMPTY,a__GT_v);
});
datascript.impl.entity.datoms__GT_cache = (function datascript$impl$entity$datoms__GT_cache(db,datoms){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,part){
var a = cljs.core.cst$kw$a.cljs$core$IFn$_invoke$arity$1(cljs.core.first(part));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,a,datascript.impl.entity.entity_attr(db,a,part));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$a,datoms));
});
datascript.impl.entity.touch = (function datascript$impl$entity$touch(e){
if(cljs.core.truth_(datascript.impl.entity.entity_QMARK_(e))){
} else {
throw (new Error("Assert failed: (entity? e)"));
}

if(cljs.core.truth_(cljs.core.deref(e.touched))){
} else {
var temp__5720__auto___24021 = cljs.core.not_empty(datascript.db._search(e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));
if(cljs.core.truth_(temp__5720__auto___24021)){
var datoms_24022 = temp__5720__auto___24021;
cljs.core.vreset_BANG_(e.cache,datascript.impl.entity.touch_components(e.db,datascript.impl.entity.datoms__GT_cache(e.db,datoms_24022)));

cljs.core.vreset_BANG_(e.touched,true);
} else {
}
}

return e;
});
goog.exportSymbol("datascript.impl.entity.Entity",datascript.impl.entity.Entity);
