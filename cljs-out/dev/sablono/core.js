// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__14222__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__14219 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__14220 = cljs.core.seq(vec__14219);
var first__14221 = cljs.core.first(seq__14220);
var seq__14220__$1 = cljs.core.next(seq__14220);
var tag = first__14221;
var body = seq__14220__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__14222 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14223__i = 0, G__14223__a = new Array(arguments.length -  0);
while (G__14223__i < G__14223__a.length) {G__14223__a[G__14223__i] = arguments[G__14223__i + 0]; ++G__14223__i;}
  args = new cljs.core.IndexedSeq(G__14223__a,0,null);
} 
return G__14222__delegate.call(this,args);};
G__14222.cljs$lang$maxFixedArity = 0;
G__14222.cljs$lang$applyTo = (function (arglist__14224){
var args = cljs.core.seq(arglist__14224);
return G__14222__delegate(args);
});
G__14222.cljs$core$IFn$_invoke$arity$variadic = G__14222__delegate;
return G__14222;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4324__auto__ = (function sablono$core$update_arglists_$_iter__14225(s__14226){
return (new cljs.core.LazySeq(null,(function (){
var s__14226__$1 = s__14226;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__14226__$1);
if(temp__5720__auto__){
var s__14226__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14226__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14226__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14228 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14227 = (0);
while(true){
if((i__14227 < size__4323__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14227);
cljs.core.chunk_append(b__14228,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__14229 = (i__14227 + (1));
i__14227 = G__14229;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14228),sablono$core$update_arglists_$_iter__14225(cljs.core.chunk_rest(s__14226__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14228),null);
}
} else {
var args = cljs.core.first(s__14226__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__14225(cljs.core.rest(s__14226__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14235 = arguments.length;
var i__4532__auto___14236 = (0);
while(true){
if((i__4532__auto___14236 < len__4531__auto___14235)){
args__4534__auto__.push((arguments[i__4532__auto___14236]));

var G__14237 = (i__4532__auto___14236 + (1));
i__4532__auto___14236 = G__14237;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4324__auto__ = (function sablono$core$iter__14231(s__14232){
return (new cljs.core.LazySeq(null,(function (){
var s__14232__$1 = s__14232;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__14232__$1);
if(temp__5720__auto__){
var s__14232__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14232__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14232__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14234 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14233 = (0);
while(true){
if((i__14233 < size__4323__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14233);
cljs.core.chunk_append(b__14234,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__14238 = (i__14233 + (1));
i__14233 = G__14238;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14234),sablono$core$iter__14231(cljs.core.chunk_rest(s__14232__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14234),null);
}
} else {
var style = cljs.core.first(s__14232__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__14231(cljs.core.rest(s__14232__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq14230){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14230));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__14239 = goog.dom.getDocument().body;
var G__14240 = (function (){var G__14241 = "script";
var G__14242 = ({"src": src});
return goog.dom.createDom(G__14241,G__14242);
})();
return goog.dom.appendChild(G__14239,G__14240);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to14243 = (function sablono$core$link_to14243(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14246 = arguments.length;
var i__4532__auto___14247 = (0);
while(true){
if((i__4532__auto___14247 < len__4531__auto___14246)){
args__4534__auto__.push((arguments[i__4532__auto___14247]));

var G__14248 = (i__4532__auto___14247 + (1));
i__4532__auto___14247 = G__14248;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to14243.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.link_to14243.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
});

sablono.core.link_to14243.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to14243.cljs$lang$applyTo = (function (seq14244){
var G__14245 = cljs.core.first(seq14244);
var seq14244__$1 = cljs.core.next(seq14244);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14245,seq14244__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to14243);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to14249 = (function sablono$core$mail_to14249(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14256 = arguments.length;
var i__4532__auto___14257 = (0);
while(true){
if((i__4532__auto___14257 < len__4531__auto___14256)){
args__4534__auto__.push((arguments[i__4532__auto___14257]));

var G__14258 = (i__4532__auto___14257 + (1));
i__4532__auto___14257 = G__14258;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to14249.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.mail_to14249.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__14252){
var vec__14253 = p__14252;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14253,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3949__auto__ = content;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to14249.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to14249.cljs$lang$applyTo = (function (seq14250){
var G__14251 = cljs.core.first(seq14250);
var seq14250__$1 = cljs.core.next(seq14250);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14251,seq14250__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to14249);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list14259 = (function sablono$core$unordered_list14259(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__4324__auto__ = (function sablono$core$unordered_list14259_$_iter__14260(s__14261){
return (new cljs.core.LazySeq(null,(function (){
var s__14261__$1 = s__14261;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__14261__$1);
if(temp__5720__auto__){
var s__14261__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14261__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14261__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14263 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14262 = (0);
while(true){
if((i__14262 < size__4323__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14262);
cljs.core.chunk_append(b__14263,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__14264 = (i__14262 + (1));
i__14262 = G__14264;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14263),sablono$core$unordered_list14259_$_iter__14260(cljs.core.chunk_rest(s__14261__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14263),null);
}
} else {
var x = cljs.core.first(s__14261__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list14259_$_iter__14260(cljs.core.rest(s__14261__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list14259);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list14265 = (function sablono$core$ordered_list14265(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__4324__auto__ = (function sablono$core$ordered_list14265_$_iter__14266(s__14267){
return (new cljs.core.LazySeq(null,(function (){
var s__14267__$1 = s__14267;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__14267__$1);
if(temp__5720__auto__){
var s__14267__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14267__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14267__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14269 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14268 = (0);
while(true){
if((i__14268 < size__4323__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14268);
cljs.core.chunk_append(b__14269,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__14270 = (i__14268 + (1));
i__14268 = G__14270;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14269),sablono$core$ordered_list14265_$_iter__14266(cljs.core.chunk_rest(s__14267__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14269),null);
}
} else {
var x = cljs.core.first(s__14267__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list14265_$_iter__14266(cljs.core.rest(s__14267__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list14265);
/**
 * Create an image element.
 */
sablono.core.image14271 = (function sablono$core$image14271(var_args){
var G__14273 = arguments.length;
switch (G__14273) {
case 1:
return sablono.core.image14271.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image14271.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image14271.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
});

sablono.core.image14271.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image14271.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image14271);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__14275_SHARP_,p2__14276_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14275_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__14276_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__14277_SHARP_,p2__14278_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14277_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__14278_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__14280 = arguments.length;
switch (G__14280) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field14282 = (function sablono$core$color_field14282(var_args){
var G__14284 = arguments.length;
switch (G__14284) {
case 1:
return sablono.core.color_field14282.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field14282.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field14282.cljs$core$IFn$_invoke$arity$1 = (function (name__14209__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$color)].join(''),name__14209__auto__);
});

sablono.core.color_field14282.cljs$core$IFn$_invoke$arity$2 = (function (name__14209__auto__,value__14210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$color)].join(''),name__14209__auto__,value__14210__auto__);
});

sablono.core.color_field14282.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field14282);

/**
 * Creates a date input field.
 */
sablono.core.date_field14285 = (function sablono$core$date_field14285(var_args){
var G__14287 = arguments.length;
switch (G__14287) {
case 1:
return sablono.core.date_field14285.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field14285.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field14285.cljs$core$IFn$_invoke$arity$1 = (function (name__14209__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$date)].join(''),name__14209__auto__);
});

sablono.core.date_field14285.cljs$core$IFn$_invoke$arity$2 = (function (name__14209__auto__,value__14210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$date)].join(''),name__14209__auto__,value__14210__auto__);
});

sablono.core.date_field14285.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field14285);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field14288 = (function sablono$core$datetime_field14288(var_args){
var G__14290 = arguments.length;
switch (G__14290) {
case 1:
return sablono.core.datetime_field14288.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field14288.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field14288.cljs$core$IFn$_invoke$arity$1 = (function (name__14209__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime)].join(''),name__14209__auto__);
});

sablono.core.datetime_field14288.cljs$core$IFn$_invoke$arity$2 = (function (name__14209__auto__,value__14210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime)].join(''),name__14209__auto__,value__14210__auto__);
});

sablono.core.datetime_field14288.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field14288);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field14291 = (function sablono$core$datetime_local_field14291(var_args){
var G__14293 = arguments.length;
switch (G__14293) {
case 1:
return sablono.core.datetime_local_field14291.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field14291.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field14291.cljs$core$IFn$_invoke$arity$1 = (function (name__14209__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__14209__auto__);
});

sablono.core.datetime_local_field14291.cljs$core$IFn$_invoke$arity$2 = (function (name__14209__auto__,value__14210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__14209__auto__,value__14210__auto__);
});

sablono.core.datetime_local_field14291.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field14291);

/**
 * Creates a email input field.
 */
sablono.core.email_field14294 = (function sablono$core$email_field14294(var_args){
var G__14296 = arguments.length;
switch (G__14296) {
case 1:
return sablono.core.email_field14294.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field14294.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field14294.cljs$core$IFn$_invoke$arity$1 = (function (name__14209__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$email)].join(''),name__14209__auto__);
});

sablono.core.email_field14294.cljs$core$IFn$_invoke$arity$2 = (function (name__14209__auto__,value__14210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$email)].join(''),name__14209__auto__,value__14210__auto__);
});

sablono.core.email_field14294.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field14294);

/**
 * Creates a file input field.
 */
sablono.core.file_field14297 = (function sablono$core$file_field14297(var_args){
var G__14299 = arguments.length;
switch (G__14299) {
case 1:
return sablono.core.file_field14297.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field14297.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field14297.cljs$core$IFn$_invoke$arity$1 = (function (name__14209__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$file)].join(''),name__14209__auto__);
});

sablono.core.file_field14297.cljs$core$IFn$_invoke$arity$2 = (function (name__14209__auto__,value__14210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$file)].join(''),name__14209__auto__,value__14210__auto__);
});

sablono.core.file_field14297.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field14297);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field14300 = (function sablono$core$hidden_field14300(var_args){
var G__14302 = arguments.length;
switch (G__14302) {
case 1:
return sablono.core.hidden_field14300.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field14300.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field14300.cljs$core$IFn$_invoke$arity$1 = (function (name__14209__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$hidden)].join(''),name__14209__auto__);
});

sablono.core.hidden_field14300.cljs$core$IFn$_invoke$arity$2 = (function (name__14209__auto__,value__14210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$hidden)].join(''),name__14209__auto__,value__14210__auto__);
});

sablono.core.hidden_field14300.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field14300);

/**
 * Creates a month input field.
 */
sablono.core.month_field14303 = (function sablono$core$month_field14303(var_args){
var G__14305 = arguments.length;
switch (G__14305) {
case 1:
return sablono.core.month_field14303.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field14303.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field14303.cljs$core$IFn$_invoke$arity$1 = (function (name__14209__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$month)].join(''),name__14209__auto__);
});

sablono.core.month_field14303.cljs$core$IFn$_invoke$arity$2 = (function (name__14209__auto__,value__14210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$month)].join(''),name__14209__auto__,value__14210__auto__);
});

sablono.core.month_field14303.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field14303);

/**
 * Creates a number input field.
 */
sablono.core.number_field14306 = (function sablono$core$number_field14306(var_args){
var G__14308 = arguments.length;
switch (G__14308) {
case 1:
return sablono.core.number_field14306.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field14306.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field14306.cljs$core$IFn$_invoke$arity$1 = (function (name__14209__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$number)].join(''),name__14209__auto__);
});

sablono.core.number_field14306.cljs$core$IFn$_invoke$arity$2 = (function (name__14209__auto__,value__14210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$number)].join(''),name__14209__auto__,value__14210__auto__);
});

sablono.core.number_field14306.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field14306);

/**
 * Creates a password input field.
 */
sablono.core.password_field14309 = (function sablono$core$password_field14309(var_args){
var G__14311 = arguments.length;
switch (G__14311) {
case 1:
return sablono.core.password_field14309.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field14309.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field14309.cljs$core$IFn$_invoke$arity$1 = (function (name__14209__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$password)].join(''),name__14209__auto__);
});

sablono.core.password_field14309.cljs$core$IFn$_invoke$arity$2 = (function (name__14209__auto__,value__14210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$password)].join(''),name__14209__auto__,value__14210__auto__);
});

sablono.core.password_field14309.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field14309);

/**
 * Creates a range input field.
 */
sablono.core.range_field14312 = (function sablono$core$range_field14312(var_args){
var G__14314 = arguments.length;
switch (G__14314) {
case 1:
return sablono.core.range_field14312.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field14312.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field14312.cljs$core$IFn$_invoke$arity$1 = (function (name__14209__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$range)].join(''),name__14209__auto__);
});

sablono.core.range_field14312.cljs$core$IFn$_invoke$arity$2 = (function (name__14209__auto__,value__14210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$range)].join(''),name__14209__auto__,value__14210__auto__);
});

sablono.core.range_field14312.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field14312);

/**
 * Creates a search input field.
 */
sablono.core.search_field14315 = (function sablono$core$search_field14315(var_args){
var G__14317 = arguments.length;
switch (G__14317) {
case 1:
return sablono.core.search_field14315.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field14315.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field14315.cljs$core$IFn$_invoke$arity$1 = (function (name__14209__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$search)].join(''),name__14209__auto__);
});

sablono.core.search_field14315.cljs$core$IFn$_invoke$arity$2 = (function (name__14209__auto__,value__14210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$search)].join(''),name__14209__auto__,value__14210__auto__);
});

sablono.core.search_field14315.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field14315);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field14318 = (function sablono$core$tel_field14318(var_args){
var G__14320 = arguments.length;
switch (G__14320) {
case 1:
return sablono.core.tel_field14318.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field14318.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field14318.cljs$core$IFn$_invoke$arity$1 = (function (name__14209__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$tel)].join(''),name__14209__auto__);
});

sablono.core.tel_field14318.cljs$core$IFn$_invoke$arity$2 = (function (name__14209__auto__,value__14210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$tel)].join(''),name__14209__auto__,value__14210__auto__);
});

sablono.core.tel_field14318.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field14318);

/**
 * Creates a text input field.
 */
sablono.core.text_field14321 = (function sablono$core$text_field14321(var_args){
var G__14323 = arguments.length;
switch (G__14323) {
case 1:
return sablono.core.text_field14321.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field14321.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field14321.cljs$core$IFn$_invoke$arity$1 = (function (name__14209__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$text)].join(''),name__14209__auto__);
});

sablono.core.text_field14321.cljs$core$IFn$_invoke$arity$2 = (function (name__14209__auto__,value__14210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$text)].join(''),name__14209__auto__,value__14210__auto__);
});

sablono.core.text_field14321.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field14321);

/**
 * Creates a time input field.
 */
sablono.core.time_field14324 = (function sablono$core$time_field14324(var_args){
var G__14326 = arguments.length;
switch (G__14326) {
case 1:
return sablono.core.time_field14324.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field14324.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field14324.cljs$core$IFn$_invoke$arity$1 = (function (name__14209__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$time)].join(''),name__14209__auto__);
});

sablono.core.time_field14324.cljs$core$IFn$_invoke$arity$2 = (function (name__14209__auto__,value__14210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$time)].join(''),name__14209__auto__,value__14210__auto__);
});

sablono.core.time_field14324.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field14324);

/**
 * Creates a url input field.
 */
sablono.core.url_field14327 = (function sablono$core$url_field14327(var_args){
var G__14329 = arguments.length;
switch (G__14329) {
case 1:
return sablono.core.url_field14327.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field14327.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field14327.cljs$core$IFn$_invoke$arity$1 = (function (name__14209__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$url)].join(''),name__14209__auto__);
});

sablono.core.url_field14327.cljs$core$IFn$_invoke$arity$2 = (function (name__14209__auto__,value__14210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$url)].join(''),name__14209__auto__,value__14210__auto__);
});

sablono.core.url_field14327.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field14327);

/**
 * Creates a week input field.
 */
sablono.core.week_field14330 = (function sablono$core$week_field14330(var_args){
var G__14332 = arguments.length;
switch (G__14332) {
case 1:
return sablono.core.week_field14330.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field14330.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field14330.cljs$core$IFn$_invoke$arity$1 = (function (name__14209__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$week)].join(''),name__14209__auto__);
});

sablono.core.week_field14330.cljs$core$IFn$_invoke$arity$2 = (function (name__14209__auto__,value__14210__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$week)].join(''),name__14209__auto__,value__14210__auto__);
});

sablono.core.week_field14330.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field14330);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box14350 = (function sablono$core$check_box14350(var_args){
var G__14352 = arguments.length;
switch (G__14352) {
case 1:
return sablono.core.check_box14350.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box14350.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box14350.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box14350.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
});

sablono.core.check_box14350.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box14350.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box14350.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box14350);
/**
 * Creates a radio button.
 */
sablono.core.radio_button14354 = (function sablono$core$radio_button14354(var_args){
var G__14356 = arguments.length;
switch (G__14356) {
case 1:
return sablono.core.radio_button14354.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button14354.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button14354.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button14354.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
});

sablono.core.radio_button14354.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button14354.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button14354.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button14354);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__14358 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__14358);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options14359 = (function sablono$core$select_options14359(coll){
var iter__4324__auto__ = (function sablono$core$select_options14359_$_iter__14360(s__14361){
return (new cljs.core.LazySeq(null,(function (){
var s__14361__$1 = s__14361;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__14361__$1);
if(temp__5720__auto__){
var s__14361__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14361__$2)){
var c__4322__auto__ = cljs.core.chunk_first(s__14361__$2);
var size__4323__auto__ = cljs.core.count(c__4322__auto__);
var b__14363 = cljs.core.chunk_buffer(size__4323__auto__);
if((function (){var i__14362 = (0);
while(true){
if((i__14362 < size__4323__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4322__auto__,i__14362);
cljs.core.chunk_append(b__14363,((cljs.core.sequential_QMARK_(x))?(function (){var vec__14364 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14364,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14364,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14364,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options14359.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options14359.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options14359.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__14370 = (i__14362 + (1));
i__14362 = G__14370;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14363),sablono$core$select_options14359_$_iter__14360(cljs.core.chunk_rest(s__14361__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14363),null);
}
} else {
var x = cljs.core.first(s__14361__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__14367 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14367,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14367,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14367,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options14359.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options14359.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options14359.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options14359_$_iter__14360(cljs.core.rest(s__14361__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options14359);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down14371 = (function sablono$core$drop_down14371(var_args){
var G__14373 = arguments.length;
switch (G__14373) {
case 2:
return sablono.core.drop_down14371.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down14371.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down14371.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down14371.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down14371.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down14371.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down14371);
/**
 * Creates a text area element.
 */
sablono.core.text_area14375 = (function sablono$core$text_area14375(var_args){
var G__14377 = arguments.length;
switch (G__14377) {
case 1:
return sablono.core.text_area14375.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area14375.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area14375.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null)], null);
});

sablono.core.text_area14375.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area14375.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area14375);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label14379 = (function sablono$core$label14379(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label14379);
/**
 * Creates a submit button.
 */
sablono.core.submit_button14380 = (function sablono$core$submit_button14380(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button14380);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button14381 = (function sablono$core$reset_button14381(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button14381);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to14382 = (function sablono$core$form_to14382(var_args){
var args__4534__auto__ = [];
var len__4531__auto___14392 = arguments.length;
var i__4532__auto___14393 = (0);
while(true){
if((i__4532__auto___14393 < len__4531__auto___14392)){
args__4534__auto__.push((arguments[i__4532__auto___14393]));

var G__14394 = (i__4532__auto___14393 + (1));
i__4532__auto___14393 = G__14394;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to14382.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.form_to14382.cljs$core$IFn$_invoke$arity$variadic = (function (p__14385,body){
var vec__14386 = p__14385;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14386,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14386,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__14389 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__14390 = "_method";
var G__14391 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__14389,G__14390,G__14391) : sablono.core.hidden_field.call(null,G__14389,G__14390,G__14391));
})()], null)),body));
});

sablono.core.form_to14382.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to14382.cljs$lang$applyTo = (function (seq14383){
var G__14384 = cljs.core.first(seq14383);
var seq14383__$1 = cljs.core.next(seq14383);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14384,seq14383__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to14382);
