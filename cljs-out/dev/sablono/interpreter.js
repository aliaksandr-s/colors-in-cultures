// Compiled by ClojureScript 1.10.339 {:static-fns true, :optimize-constants true}
goog.provide('sablono.interpreter');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('sablono.normalize');
goog.require('sablono.util');

/**
 * @interface
 */
sablono.interpreter.IInterpreter = function(){};

/**
 * Interpret a Clojure data structure as a React fn call.
 */
sablono.interpreter.interpret = (function sablono$interpreter$interpret(this$){
if(((!((this$ == null))) && (!((this$.sablono$interpreter$IInterpreter$interpret$arity$1 == null))))){
return this$.sablono$interpreter$IInterpreter$interpret$arity$1(this$);
} else {
var x__4243__auto__ = (((this$ == null))?null:this$);
var m__4244__auto__ = (sablono.interpreter.interpret[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return (m__4244__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto__.call(null,this$));
} else {
var m__4244__auto____$1 = (sablono.interpreter.interpret["_"]);
if(!((m__4244__auto____$1 == null))){
return (m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4244__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4244__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IInterpreter.interpret",this$);
}
}
}
});

/**
 * Updates the state of the wrapped input element.
 */
sablono.interpreter.update_state = (function sablono$interpreter$update_state(component,next_props,property,value){
var on_change = goog.object.getValueByKeys(component,"state","onChange");
var next_state = ({});
var G__12521_12524 = next_state;
var G__12522_12525 = next_props;
var G__12523_12526 = ({"onChange": on_change});
goog.object.extend(G__12521_12524,G__12522_12525,G__12523_12526);

goog.object.set(next_state,property,value);

return component.setState(next_state);
});
sablono.interpreter.wrap_form_element = (function sablono$interpreter$wrap_form_element(element,property){
var ctor = (function (props){
var this$ = this;
this$.state = (function (){var state = ({});
var G__12527_12535 = state;
var G__12528_12536 = props;
var G__12529_12537 = ({"onChange": (function (){var G__12530 = goog.object.get(this$,"onChange");
var G__12531 = this$;
return goog.bind(G__12530,G__12531);
})()});
goog.object.extend(G__12527_12535,G__12528_12536,G__12529_12537);

return state;
})();

return React.Component.call(this$,props);
});
ctor.displayName = ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join('');

goog.inherits(ctor,React.Component);

var x12532_12538 = ctor.prototype;
x12532_12538.onChange = ((function (x12532_12538,ctor){
return (function (event){
var this$ = this;
var temp__5720__auto__ = this$.props.onChange;
if(cljs.core.truth_(temp__5720__auto__)){
var handler = temp__5720__auto__;
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(event) : handler.call(null,event));

return sablono.interpreter.update_state(this$,this$.props,property,goog.object.getValueByKeys(event,"target",property));
} else {
return null;
}
});})(x12532_12538,ctor))
;

x12532_12538.componentWillReceiveProps = ((function (x12532_12538,ctor){
return (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state",property);
var element_value = (function (){var G__12533 = ReactDOM.findDOMNode(this$);
var G__12534 = property;
return goog.object.get(G__12533,G__12534);
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return sablono.interpreter.update_state(this$,new_props,property,element_value);
} else {
return sablono.interpreter.update_state(this$,new_props,property,goog.object.get(new_props,property));
}
});})(x12532_12538,ctor))
;

x12532_12538.render = ((function (x12532_12538,ctor){
return (function (){
var this$ = this;
return React.createElement(element,this$.state);
});})(x12532_12538,ctor))
;


return ctor;
});
sablono.interpreter.lazy_load_wrappers = (function sablono$interpreter$lazy_load_wrappers(){
if(cljs.core.truth_(sablono.interpreter.wrapped_textarea)){
return null;
} else {
sablono.interpreter.wrapped_input = sablono.interpreter.wrap_form_element("input","value");

sablono.interpreter.wrapped_checked = sablono.interpreter.wrap_form_element("input","checked");

sablono.interpreter.wrapped_select = sablono.interpreter.wrap_form_element("select","value");

return sablono.interpreter.wrapped_textarea = sablono.interpreter.wrap_form_element("textarea","value");
}
});
/**
 * Returns true if `type` and `props` are used a controlled input,
 *   otherwise false.
 */
sablono.interpreter.controlled_input_QMARK_ = (function sablono$interpreter$controlled_input_QMARK_(type,props){
var and__3938__auto__ = cljs.core.object_QMARK_(props);
if(and__3938__auto__){
var G__12540 = type;
switch (G__12540) {
case "input":
return ((!((props.checked == null))) || (!((props.value == null))));

break;
case "select":
return !((props.value == null));

break;
case "textarea":
return !((props.value == null));

break;
default:
return false;

}
} else {
return and__3938__auto__;
}
});
/**
 * Returns either `type` or a wrapped element for controlled
 *   inputs.
 */
sablono.interpreter.element_class = (function sablono$interpreter$element_class(type,props){
if(sablono.interpreter.controlled_input_QMARK_(type,props)){
sablono.interpreter.lazy_load_wrappers();

var G__12542 = type;
switch (G__12542) {
case "input":
var G__12543 = (function (){var and__3938__auto__ = cljs.core.object_QMARK_(props);
if(and__3938__auto__){
return props.type;
} else {
return and__3938__auto__;
}
})();
switch (G__12543) {
case "radio":
return sablono.interpreter.wrapped_checked;

break;
case "checkbox":
return sablono.interpreter.wrapped_checked;

break;
default:
return sablono.interpreter.wrapped_input;

}

break;
case "select":
return sablono.interpreter.wrapped_select;

break;
case "textarea":
return sablono.interpreter.wrapped_textarea;

break;
default:
return type;

}
} else {
return type;
}
});
/**
 * Create a React element. Returns a JavaScript object when running
 *   under ClojureScript, and a om.dom.Element record in Clojure.
 */
sablono.interpreter.create_element = (function sablono$interpreter$create_element(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12549 = arguments.length;
var i__4532__auto___12550 = (0);
while(true){
if((i__4532__auto___12550 < len__4531__auto___12549)){
args__4534__auto__.push((arguments[i__4532__auto___12550]));

var G__12551 = (i__4532__auto___12550 + (1));
i__4532__auto___12550 = G__12551;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,sablono.interpreter.element_class(type,props),props,children);
});

sablono.interpreter.create_element.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
sablono.interpreter.create_element.cljs$lang$applyTo = (function (seq12546){
var G__12547 = cljs.core.first(seq12546);
var seq12546__$1 = cljs.core.next(seq12546);
var G__12548 = cljs.core.first(seq12546__$1);
var seq12546__$2 = cljs.core.next(seq12546__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12547,G__12548,seq12546__$2);
});

sablono.interpreter.attributes = (function sablono$interpreter$attributes(attrs){
var temp__5720__auto__ = cljs.core.clj__GT_js(sablono.util.html_to_dom_attrs(attrs));
if(cljs.core.truth_(temp__5720__auto__)){
var js_attrs = temp__5720__auto__;
var class$ = js_attrs.className;
var class$__$1 = ((cljs.core.array_QMARK_(class$))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",class$):class$);
if(clojure.string.blank_QMARK_(class$__$1)){
delete js_attrs["className"];
} else {
js_attrs.className = class$__$1;
}

return js_attrs;
} else {
return null;
}
});
/**
 * Eagerly interpret the seq `x` as HTML elements.
 */
sablono.interpreter.interpret_seq = (function sablono$interpreter$interpret_seq(x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(sablono.interpreter.interpret),x);
});
/**
 * Render an element vector as a HTML element.
 */
sablono.interpreter.element = (function sablono$interpreter$element(element){
var vec__12553 = sablono.normalize.element(element);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12553,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12553,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12553,(2),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.interpreter.create_element,type,sablono.interpreter.attributes(attrs),sablono.interpreter.interpret_seq(content));
});
/**
 * Interpret the vector `x` as an HTML element or a the children of an
 *   element.
 */
sablono.interpreter.interpret_vec = (function sablono$interpreter$interpret_vec(x){
if(cljs.core.truth_(sablono.util.element_QMARK_(x))){
return sablono.interpreter.element(x);
} else {
return sablono.interpreter.interpret_seq(x);
}
});
goog.object.set(sablono.interpreter.IInterpreter,"null",true);

var G__12556_12562 = sablono.interpreter.interpret;
var G__12557_12563 = "null";
var G__12558_12564 = ((function (G__12556_12562,G__12557_12563){
return (function (this$){
return null;
});})(G__12556_12562,G__12557_12563))
;
goog.object.set(G__12556_12562,G__12557_12563,G__12558_12564);

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_vec(this$__$1);
});

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

goog.object.set(sablono.interpreter.IInterpreter,"_",true);

var G__12559_12565 = sablono.interpreter.interpret;
var G__12560_12566 = "_";
var G__12561_12567 = ((function (G__12559_12565,G__12560_12566){
return (function (this$){
return this$;
});})(G__12559_12565,G__12560_12566))
;
goog.object.set(G__12559_12565,G__12560_12566,G__12561_12567);

cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_vec(this$__$1);
});

cljs.core.List.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.ChunkedCons.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedCons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});
