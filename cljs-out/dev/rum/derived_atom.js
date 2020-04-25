// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__12313 = arguments.length;
switch (G__12313) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4(refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__12314 = opts;
var map__12314__$1 = ((((!((map__12314 == null)))?(((((map__12314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12314):map__12314);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12314__$1,cljs.core.cst$kw$ref);
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12314__$1,cljs.core.cst$kw$check_DASH_equals_QMARK_,true);
var recalc = (function (){var G__12316 = cljs.core.count(refs);
switch (G__12316) {
case (1):
var vec__12317 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12317,(0),null);
return ((function (vec__12317,a,G__12316,map__12314,map__12314__$1,ref,check_equals_QMARK_){
return (function (){
var G__12320 = cljs.core.deref(a);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12320) : f.call(null,G__12320));
});
;})(vec__12317,a,G__12316,map__12314,map__12314__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__12321 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12321,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12321,(1),null);
return ((function (vec__12321,a,b,G__12316,map__12314,map__12314__$1,ref,check_equals_QMARK_){
return (function (){
var G__12324 = cljs.core.deref(a);
var G__12325 = cljs.core.deref(b);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12324,G__12325) : f.call(null,G__12324,G__12325));
});
;})(vec__12321,a,b,G__12316,map__12314,map__12314__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__12326 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12326,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12326,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12326,(2),null);
return ((function (vec__12326,a,b,c,G__12316,map__12314,map__12314__$1,ref,check_equals_QMARK_){
return (function (){
var G__12329 = cljs.core.deref(a);
var G__12330 = cljs.core.deref(b);
var G__12331 = cljs.core.deref(c);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12329,G__12330,G__12331) : f.call(null,G__12329,G__12330,G__12331));
});
;})(vec__12326,a,b,c,G__12316,map__12314,map__12314__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__12316,map__12314,map__12314__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});
;})(G__12316,map__12314,map__12314__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__12332 = ref;
cljs.core.reset_BANG_(G__12332,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));

return G__12332;
})():cljs.core.atom.cljs$core$IFn$_invoke$arity$1((recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null))));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__12314,map__12314__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sink),new_val)){
return cljs.core.reset_BANG_(sink,new_val);
} else {
return null;
}
});})(map__12314,map__12314__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__12314,map__12314__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_(sink,(recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null)));
});})(map__12314,map__12314__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__12333_12339 = cljs.core.seq(refs);
var chunk__12334_12340 = null;
var count__12335_12341 = (0);
var i__12336_12342 = (0);
while(true){
if((i__12336_12342 < count__12335_12341)){
var ref_12343__$1 = chunk__12334_12340.cljs$core$IIndexed$_nth$arity$2(null,i__12336_12342);
cljs.core.add_watch(ref_12343__$1,key,watch);


var G__12344 = seq__12333_12339;
var G__12345 = chunk__12334_12340;
var G__12346 = count__12335_12341;
var G__12347 = (i__12336_12342 + (1));
seq__12333_12339 = G__12344;
chunk__12334_12340 = G__12345;
count__12335_12341 = G__12346;
i__12336_12342 = G__12347;
continue;
} else {
var temp__5720__auto___12348 = cljs.core.seq(seq__12333_12339);
if(temp__5720__auto___12348){
var seq__12333_12349__$1 = temp__5720__auto___12348;
if(cljs.core.chunked_seq_QMARK_(seq__12333_12349__$1)){
var c__4351__auto___12350 = cljs.core.chunk_first(seq__12333_12349__$1);
var G__12351 = cljs.core.chunk_rest(seq__12333_12349__$1);
var G__12352 = c__4351__auto___12350;
var G__12353 = cljs.core.count(c__4351__auto___12350);
var G__12354 = (0);
seq__12333_12339 = G__12351;
chunk__12334_12340 = G__12352;
count__12335_12341 = G__12353;
i__12336_12342 = G__12354;
continue;
} else {
var ref_12355__$1 = cljs.core.first(seq__12333_12349__$1);
cljs.core.add_watch(ref_12355__$1,key,watch);


var G__12356 = cljs.core.next(seq__12333_12349__$1);
var G__12357 = null;
var G__12358 = (0);
var G__12359 = (0);
seq__12333_12339 = G__12356;
chunk__12334_12340 = G__12357;
count__12335_12341 = G__12358;
i__12336_12342 = G__12359;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;

