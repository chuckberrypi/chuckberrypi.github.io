goog.provide('work_app.events');
work_app.events._GT_evt = re_frame.core.dispatch;
work_app.events._GT_evt_sync = re_frame.core.dispatch_sync;
work_app.events.next_order = (function work_app$events$next_order(maps){
var r = (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"order","order",-1254677256),maps)) + (1));
if(cljs.core.truth_(isNaN(r))){
return (1);
} else {
return r;
}
});
work_app.events.next_order_in = (function work_app$events$next_order_in(m,ks){

return work_app.events.next_order(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,ks)));
});
work_app.events.re_order_map = (function work_app$events$re_order_map(m){

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__52090){
var vec__52093 = p__52090;
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52093,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52093,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(v),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"order","order",-1254677256),o));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.vals(m))));
});
re_frame.core.reg_fx(new cljs.core.Keyword("work-app.events","toast-show","work-app.events/toast-show",1374275404),(function (p__52096){
var vec__52097 = p__52096;
var toast = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52097,(0),null);
var map__52100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52097,(1),null);
var map__52100__$1 = cljs.core.__destructure_map(map__52100);
var severity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52100__$1,new cljs.core.Keyword(null,"severity","severity",175684886));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52100__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var detail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52100__$1,new cljs.core.Keyword(null,"detail","detail",-1545345025));
return toast.show(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"severity","severity",175684886),(function (){var or__5045__auto__ = severity;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "success";
}
})(),new cljs.core.Keyword(null,"summary","summary",380847952),summary,new cljs.core.Keyword(null,"detail","detail",-1545345025),detail], null)));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("work-app.events","copy-text","work-app.events/copy-text",-162880538),(function (p__52108){
var vec__52109 = p__52108;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52109,(0),null);
return navigator.clipboard.writeText(text);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("work-app.events","pprint-db","work-app.events/pprint-db",1647117547),(function (db){
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("work-app.events","log","work-app.events/log",2121905114),(function (entry){
return console.log(entry);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("work-app.events","focus","work-app.events/focus",818984009),(function (el){
return el.focus();
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","log","work-app.events/log",2121905114),(function (_,p__52112){
var vec__52113 = p__52112;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52113,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52113,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","log","work-app.events/log",2121905114),item], null)], null)], null);
}));
re_frame.core.reg_cofx(new cljs.core.Keyword("work-app.events","now","work-app.events/now",-273029917),(function (coeffects,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,new cljs.core.Keyword(null,"now","now",-1650525531),(new Date()));
}));
re_frame.core.reg_cofx(new cljs.core.Keyword("work-app.events","uuid","work-app.events/uuid",-364894821),(function (coeffects,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),cljs.core.random_uuid());
}));
re_frame.core.reg_cofx(new cljs.core.Keyword("work-app.events","uuids","work-app.events/uuids",-134178648),(function (coeffects,num){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,new cljs.core.Keyword(null,"uuids","uuids",1487183590),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(num,cljs.core.random_uuid())));
}));
work_app.events.random_task = (function work_app$events$random_task(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("task","date","task/date",-1460731749),(new Date(((2023) - cljs.core.rand_int((4))),((11) - cljs.core.rand_int((11))),((28) - cljs.core.rand_int((28))))),new cljs.core.Keyword("task","description","task/description",-1431594219),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword("task","time","task/time",1407463183),(cljs.core.rand_int((82)) / (10))], null);
});
re_frame.core.reg_cofx(new cljs.core.Keyword("work-app.events","random-tasks","work-app.events/random-tasks",1819972132),(function (cofx,num){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,new cljs.core.Keyword(null,"random-tasks","random-tasks",-915978142),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(num,work_app.events.random_task()));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","db-pprint","work-app.events/db-pprint",-665827038),(function (p__52130,_){
var map__52135 = p__52130;
var map__52135__$1 = cljs.core.__destructure_map(map__52135);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52135__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","pprint-db","work-app.events/pprint-db",1647117547),db], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","tick","work-app.events/tick",1737052786),(function (p__52138,_){
var map__52139 = p__52138;
var map__52139__$1 = cljs.core.__destructure_map(map__52139);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52139__$1,new cljs.core.Keyword(null,"db","db",993250759));
var elapsed = work_app.schema.schema_get(db,"elapsed");
var ready_events = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__52143){
var map__52144 = p__52143;
var map__52144__$1 = cljs.core.__destructure_map(map__52144);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52144__$1,new cljs.core.Keyword(null,"event","event",301435442));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),event], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__52145){
var map__52146 = p__52145;
var map__52146__$1 = cljs.core.__destructure_map(map__52146);
var interval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52146__$1,new cljs.core.Keyword(null,"interval","interval",1708495417));
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52146__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod((elapsed - offset),interval));
}),cljs.core.flatten(cljs.core.vals(work_app.schema.schema_get(db,"ticker-tasks")))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_update(db,"elapsed",cljs.core.inc),new cljs.core.Keyword(null,"fx","fx",-1237829572),ready_events], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","start-ticker","work-app.events/start-ticker",-10949512),(function (p__52150,p__52151){
var map__52152 = p__52150;
var map__52152__$1 = cljs.core.__destructure_map(map__52152);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52152__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52153 = p__52151;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52153,(0),null);
var name_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52153,(1),null);
var interval = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52153,(2),null);
var interval_id = setInterval((function (){
var G__52156 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","tick","work-app.events/tick",1737052786),interval], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__52156) : work_app.events._GT_evt.call(null,G__52156));
}));
return null;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","enter-pressed","work-app.events/enter-pressed",-1296910468),(function (p__52157,p__52158){
var map__52159 = p__52157;
var map__52159__$1 = cljs.core.__destructure_map(map__52159);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52159__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52160 = p__52158;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52160,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52160,(1),null);
console.log("::enter-pressed");

var temp__5802__auto__ = e.target.attributes.targettype.nodeValue;
if(cljs.core.truth_(temp__5802__auto__)){
var target_type = temp__5802__auto__;
var G__52163 = target_type;
switch (G__52163) {
case "task-text-input":
var matter_id = parseInt(e.target.attributes.matterid.nodeValue);
var task_id = parseInt(e.target.attributes.taskid.nodeValue);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","add-task-after","work-app.time-events/add-task-after",2127952524),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"before-t-id","before-t-id",-1386353354),task_id], null)], null)], null)], null)], null);

break;
default:
return cljs.core.PersistentArrayMap.EMPTY;

}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","enter-ctrl-pressed","work-app.events/enter-ctrl-pressed",2010496870),(function (p__52164,p__52165){
var map__52166 = p__52164;
var map__52166__$1 = cljs.core.__destructure_map(map__52166);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52166__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52167 = p__52165;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52167,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52167,(1),null);
console.log("::enter-ctrl-pressed");

var temp__5802__auto__ = e.target.attributes.targettype.nodeValue;
if(cljs.core.truth_(temp__5802__auto__)){
var target_type = temp__5802__auto__;
var G__52173 = target_type;
switch (G__52173) {
case "task-text-input":
var matter_id = parseInt(e.target.attributes.matterid.nodeValue);
var task_id = parseInt(e.target.attributes.taskid.nodeValue);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","add-task-after","work-app.time-events/add-task-after",2127952524),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before-t-id","before-t-id",-1386353354),task_id,new cljs.core.Keyword(null,"start?","start?",1440714206),true], null)], null)], null)], null)], null);

break;
default:
return cljs.core.PersistentArrayMap.EMPTY;

}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","enter-shift-pressed","work-app.events/enter-shift-pressed",-1786786921),(function (p__52175,p__52176){
var map__52177 = p__52175;
var map__52177__$1 = cljs.core.__destructure_map(map__52177);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52177__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52178 = p__52176;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52178,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52178,(1),null);
console.log("::enter-shift-pressed");

var temp__5802__auto__ = e.target.attributes.targettype.nodeValue;
if(cljs.core.truth_(temp__5802__auto__)){
var target_type = temp__5802__auto__;
var G__52181 = target_type;
switch (G__52181) {
case "task-text-input":
var matter_id = parseInt(e.target.attributes.matterid.nodeValue);
var task_id = parseInt(e.target.attributes.taskid.nodeValue);
var text = e.target.attributes.value.nodeValue;
var selection_start = e.target.selectionStart;
var selection_end = e.target.selectionEnd;
var point_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selection_start,selection_end);
var vec__52182 = ((point_QMARK_)?cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.join,cljs.core.split_at(selection_end,text)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var beg = clojure.string.trim(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,(0),selection_start));
var end = clojure.string.trim(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(text,selection_end));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [beg,end], null));
})(),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,selection_start,selection_end)], null));
var keep = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52182,(0),null);
var split = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52182,(1),null);
console.log(["selection-start: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selection_start)].join(''));

console.log(["selection-end: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selection_end)].join(''));

console.log(["keep: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(keep)].join(''));

console.log(["split: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(split)].join(''));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","task-set-desc","work-app.time-events/task-set-desc",-583941228),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"task-id","task-id",-1045480126),task_id,new cljs.core.Keyword(null,"desc","desc",2093485764),keep], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","add-task-after","work-app.time-events/add-task-after",2127952524),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"before-t-id","before-t-id",-1386353354),task_id,new cljs.core.Keyword(null,"description","description",-1428560544),split], null)], null)], null)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52181)].join('')));

}
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","space-shift-pressed","work-app.events/space-shift-pressed",-800148811),(function (p__52191,p__52192){
var map__52193 = p__52191;
var map__52193__$1 = cljs.core.__destructure_map(map__52193);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52193__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52194 = p__52192;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52194,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52194,(1),null);
console.log("::space-shift-pressed");

var temp__5802__auto__ = e.target.attributes.targettype.nodeValue;
if(cljs.core.truth_(temp__5802__auto__)){
var target_type = temp__5802__auto__;
var G__52197 = target_type;
switch (G__52197) {
case "task-text-input":
var matter_id = e.target.attributes.matterid.nodeValue;
var group_id = cljs.core.uuid(e.target.attributes.groupid.nodeValue);
var task_id = cljs.core.uuid(e.target.attributes.taskid.nodeValue);
e.preventDefault();

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","log","work-app.events/log",2121905114),matter_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","time-toggle-task-timer","work-app.events/time-toggle-task-timer",244817524),matter_id,group_id,task_id], null)], null)], null)], null);

break;
default:
return cljs.core.PersistentArrayMap.EMPTY;

}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","key-press","work-app.events/key-press",-1858630462),(function (p__52199,p__52200){
var map__52202 = p__52199;
var map__52202__$1 = cljs.core.__destructure_map(map__52202);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52202__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52203 = p__52200;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52203,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52203,(1),null);
var key = e.keyCode;
var ctrl = e.ctrlKey;
var alt = e.altKey;
var shift = e.shiftKey;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","log","work-app.events/log",2121905114),["::keyppress (key, ctrl, alt, shift): (",cljs.core.str.cljs$core$IFn$_invoke$arity$1([key,ctrl,alt,shift].join(", ")),")"].join('')], null)], null),(function (){var G__52206 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,ctrl,alt,shift], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),false,false,false], null),G__52206)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","enter-pressed","work-app.events/enter-pressed",-1296910468),e], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","log","work-app.events/log",2121905114),e], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),true,false,false], null),G__52206)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","enter-ctrl-pressed","work-app.events/enter-ctrl-pressed",2010496870),e], null)], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),false,false,true], null),G__52206)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","enter-shift-pressed","work-app.events/enter-shift-pressed",-1786786921),e], null)], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),false,false,true], null),G__52206)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","space-shift-pressed","work-app.events/space-shift-pressed",-800148811),e], null)], null)], null);
} else {
return cljs.core.PersistentVector.EMPTY;

}
}
}
}
})())], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","dialog-toggle","work-app.events/dialog-toggle",788448125),(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.Keyword(null,"dialog-visible","dialog-visible",-855829135)], null),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","dialog-confirm-then","work-app.events/dialog-confirm-then",735015961),(function (db,p__52208){
var vec__52209 = p__52208;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52209,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52209,(1),null);
var next_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52209,(2),null);
return work_app.schema.schema_update(work_app.schema.schema_assoc(work_app.schema.schema_assoc(db,"dialog-body",message),"dialog-confirm-event",next_event),"dialog-visible",cljs.core.not);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","dialog-confirmed","work-app.events/dialog-confirmed",-1275411289),(function (p__52212,_){
var map__52213 = p__52212;
var map__52213__$1 = cljs.core.__destructure_map(map__52213);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52213__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),work_app.schema.schema_get(db,"dialog-confirm-event")], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","matters-toggle-edit-dialog-showing","work-app.events/matters-toggle-edit-dialog-showing",1661565174),(function (p__52214,p__52215){
var map__52216 = p__52214;
var map__52216__$1 = cljs.core.__destructure_map(map__52216);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52216__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52217 = p__52215;
var seq__52218 = cljs.core.seq(vec__52217);
var first__52219 = cljs.core.first(seq__52218);
var seq__52218__$1 = cljs.core.next(seq__52218);
var _ = first__52219;
var vec__52220 = seq__52218__$1;
var map__52223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52220,(0),null);
var map__52223__$1 = cljs.core.__destructure_map(map__52223);
var data = map__52223__$1;
var client_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52223__$1,new cljs.core.Keyword(null,"client-name","client-name",1843891115));
var client_num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52223__$1,new cljs.core.Keyword(null,"client-num","client-num",-1900559089));
var matter_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52223__$1,new cljs.core.Keyword(null,"matter-name","matter-name",-359115844));
var matter_num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52223__$1,new cljs.core.Keyword(null,"matter-num","matter-num",-1351918268));
var cm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52223__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
console.log(["Data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join(''));

work_app.schema.path("matter-new-cm-dialog-showing");

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"matter-new-cm-dialog-showing",cljs.core.not,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [client_num,matter_num], null)], null)], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),cljs.core.PersistentVector.EMPTY], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","matters-toggle-new-or-existing-cm","work-app.events/matters-toggle-new-or-existing-cm",-1782470261),(function (db,p__52226){
var vec__52229 = p__52226;
var seq__52230 = cljs.core.seq(vec__52229);
var first__52231 = cljs.core.first(seq__52230);
var seq__52230__$1 = cljs.core.next(seq__52230);
var _ = first__52231;
var vec__52232 = seq__52230__$1;
var map__52235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52232,(0),null);
var map__52235__$1 = cljs.core.__destructure_map(map__52235);
var c_num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52235__$1,new cljs.core.Keyword(null,"c-num","c-num",1611632000));
var c_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52235__$1,new cljs.core.Keyword(null,"c-name","c-name",-1471300880));
var m_num = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52235__$1,new cljs.core.Keyword(null,"m-num","m-num",81000627));
var m_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52235__$1,new cljs.core.Keyword(null,"m-name","m-name",-1838368401));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"matters","matters",-108834512),new cljs.core.Keyword(null,"new-dialog-cm?","new-dialog-cm?",-971526197)], null),cljs.core.not);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","matters-edit-matter","work-app.events/matters-edit-matter",53605894),(function (p__52236,p__52237){
var map__52238 = p__52236;
var map__52238__$1 = cljs.core.__destructure_map(map__52238);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52238__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52239 = p__52237;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52239,(0),null);
var map__52242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52239,(1),null);
var map__52242__$1 = cljs.core.__destructure_map(map__52242);
var new$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52242__$1,new cljs.core.Keyword(null,"new","new",-2085437848));
var old = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52242__$1,new cljs.core.Keyword(null,"old","old",-1825222690));
var diffs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (k){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new$,k),cljs.core.get.cljs$core$IFn$_invoke$arity$2(old,k));
}),cljs.core.keys(new$));
console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(diffs));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"fx","fx",-1237829572),cljs.core.PersistentVector.EMPTY], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("work-app.events","new-client","work-app.events/new-client",1017512663),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("work-app.events","uuid","work-app.events/uuid",-364894821))], null),(function (p__52243,p__52244){
var map__52245 = p__52243;
var map__52245__$1 = cljs.core.__destructure_map(map__52245);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52245__$1,new cljs.core.Keyword(null,"db","db",993250759));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52245__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var vec__52246 = p__52244;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52246,(0),null);
var map__52249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52246,(1),null);
var map__52249__$1 = cljs.core.__destructure_map(map__52249);
var info = map__52249__$1;
var c_name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52249__$1,new cljs.core.Keyword(null,"c-name","c-name",-1471300880),"Client");
var c_num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52249__$1,new cljs.core.Keyword(null,"c-num","c-num",1611632000),"111111");
var new_client = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),uuid,new cljs.core.Keyword(null,"name","name",1843675177),c_name,new cljs.core.Keyword(null,"c-num","c-num",1611632000),c_num,new cljs.core.Keyword(null,"matters","matters",-108834512),cljs.core.PersistentVector.EMPTY], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_assoc.cljs$core$IFn$_invoke$arity$variadic(db,"clients",new_client,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([uuid], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","new-client-ds","work-app.events/new-client-ds",-1528691438),c_name,c_num,uuid], null)], null)], null)], null);
}));
var G__52250_52834 = new cljs.core.Keyword("work-app.events","new-client-ds","work-app.events/new-client-ds",-1528691438);
var G__52251_52835 = (function (ds,p__52252){
var vec__52253 = p__52252;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52253,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52253,(1),null);
var number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52253,(2),null);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52253,(3),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("client","id","client/id",441165449),client_id,new cljs.core.Keyword("client","name","client/name",924271622),name,new cljs.core.Keyword("client","number","client/number",-1936785665),number], null)], null);
});
(re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2(G__52250_52834,G__52251_52835) : re_posh.core.reg_event_ds.call(null,G__52250_52834,G__52251_52835));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","matters-delete-matter","work-app.events/matters-delete-matter",1722746536),(function (p__52256,p__52257){
var map__52258 = p__52256;
var map__52258__$1 = cljs.core.__destructure_map(map__52258);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52258__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52259 = p__52257;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52259,(0),null);
var map__52262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52259,(1),null);
var map__52262__$1 = cljs.core.__destructure_map(map__52262);
var args = map__52262__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52262__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var matter_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52262__$1,new cljs.core.Keyword(null,"matter-id","matter-id",914791808));
console.log(["client id: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(client_id),"\nmatter id: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matter_id)].join(''));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),((((1) < cljs.core.count(work_app.schema.schema_get.cljs$core$IFn$_invoke$arity$variadic(db,"client-matters",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([client_id], 0)))))?work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"client-matters",cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn-args","fn-args",-2034521192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id], null),new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client_id], null)], null)], 0)):work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"clients",cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn-args","fn-args",-2034521192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client_id], null)], null)], 0))),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","matters-delete-matter-ds","work-app.events/matters-delete-matter-ds",772179376),args], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","ticker-set-timed-event","work-app.events/ticker-set-timed-event",-1815171530),(function (db,p__52265){
var vec__52266 = p__52265;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52266,(0),null);
var map__52269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52266,(1),null);
var map__52269__$1 = cljs.core.__destructure_map(map__52269);
var evt = map__52269__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52269__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var interval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52269__$1,new cljs.core.Keyword(null,"interval","interval",1708495417));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52269__$1,new cljs.core.Keyword(null,"event","event",301435442));
var new_event = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(evt,new cljs.core.Keyword(null,"offset","offset",296498311),work_app.schema.schema_get(db,"elapsed"));
return work_app.schema.schema_assoc(db,"active-timer",new_event);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","ticker-clear-events","work-app.events/ticker-clear-events",768571950),(function (db,p__52275){
var vec__52276 = p__52275;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52276,(0),null);
return work_app.schema.schema_assoc(db,"ticker-tasks",cljs.core.PersistentArrayMap.EMPTY);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","ticker-clear-event","work-app.events/ticker-clear-event",730420673),(function (db,p__52280){
var vec__52281 = p__52280;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52281,(0),null);
var ticker_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52281,(1),null);
return work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"ticker-tasks",cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn-args","fn-args",-2034521192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ticker_id], null)], null)], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("work-app.events","initialize-db","work-app.events/initialize-db",1599662938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("work-app.events","now","work-app.events/now",-273029917))], null),(function (p__52284,_){
var map__52285 = p__52284;
var map__52285__$1 = cljs.core.__destructure_map(map__52285);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52285__$1,new cljs.core.Keyword(null,"db","db",993250759));
var now = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52285__$1,new cljs.core.Keyword(null,"now","now",-1650525531));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_assoc(work_app.schema.schema_assoc(db,"cal-date",now),"nrls",cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.matter-events","add-default-codes","work-app.matter-events/add-default-codes",619856960)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.matter-events","add-new-client-matter","work-app.matter-events/add-new-client-matter",204426496),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"c-num","c-num",1611632000),"123456",new cljs.core.Keyword(null,"c-name","c-name",-1471300880),"Sven B\u00F8rgensson",new cljs.core.Keyword(null,"m-num","m-num",81000627),"654321",new cljs.core.Keyword(null,"m-name","m-name",-1838368401),"Recipe Trademark"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.matter-events","add-new-client-matter","work-app.matter-events/add-new-client-matter",204426496),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"c-num","c-num",1611632000),"122222",new cljs.core.Keyword(null,"c-name","c-name",-1471300880),"Mega Corp.",new cljs.core.Keyword(null,"m-num","m-num",81000627),"655555",new cljs.core.Keyword(null,"m-name","m-name",-1838368401),"Child 'Death' Litigation"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.matter-events","add-new-client-matter","work-app.matter-events/add-new-client-matter",204426496),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"c-num","c-num",1611632000),"888444",new cljs.core.Keyword(null,"c-name","c-name",-1471300880),"Abe's Lube Shop",new cljs.core.Keyword(null,"m-num","m-num",81000627),"434343",new cljs.core.Keyword(null,"m-name","m-name",-1838368401),"Slip and Fall Case"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","initialize-ds","work-app.events/initialize-ds",-1135461052)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","set-sidebar-filter","work-app.events/set-sidebar-filter",-654236613),(function (p__52286,p__52287){
var map__52288 = p__52286;
var map__52288__$1 = cljs.core.__destructure_map(map__52288);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52288__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52289 = p__52287;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52289,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52289,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_assoc(db,"sidebar-filter",v)], null);
}));
var G__52292_52838 = new cljs.core.Keyword("work-app.events","initialize-ds","work-app.events/initialize-ds",-1135461052);
var G__52293_52839 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","random-tasks","work-app.events/random-tasks",1819972132),(5000)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword("work-app.events","random-tasks","work-app.events/random-tasks",1819972132),(5000))),(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword(null,"ds","ds",-257415859)))], null);
var G__52294_52840 = (function (p__52295,_){
var map__52296 = p__52295;
var map__52296__$1 = cljs.core.__destructure_map(map__52296);
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52296__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var random_tasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52296__$1,new cljs.core.Keyword(null,"random-tasks","random-tasks",-915978142));
return cljs.core.PersistentArrayMap.EMPTY;
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__52292_52838,G__52293_52839,G__52294_52840) : re_posh.core.reg_event_fx.call(null,G__52292_52838,G__52293_52839,G__52294_52840));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","set-toast","work-app.events/set-toast",1818151911),(function (db,p__52302){
var vec__52304 = p__52302;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52304,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52304,(1),null);
return work_app.schema.schema_assoc(db,"toast",t);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","toast","work-app.events/toast",-1762477261),(function (p__52307,p__52308){
var map__52309 = p__52307;
var map__52309__$1 = cljs.core.__destructure_map(map__52309);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52309__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52310 = p__52308;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52310,(0),null);
var toast_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52310,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","toast-show","work-app.events/toast-show",1374275404),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_app.schema.schema_get(db,"toast"),toast_map], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","cal-set-date","work-app.events/cal-set-date",1953858792),(function (db,p__52313){
var vec__52314 = p__52313;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52314,(0),null);
var new_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52314,(1),null);
return work_app.schema.schema_assoc(db,"cal-date",new_date);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","copy-text","work-app.events/copy-text",-162880538),(function (_,p__52317){
var vec__52318 = p__52317;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52318,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52318,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","copy-text","work-app.events/copy-text",-162880538),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","toast","work-app.events/toast",-1762477261),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"detail","detail",-1545345025),"copied",new cljs.core.Keyword(null,"summary","summary",380847952),t], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","nrl-remove-all","work-app.events/nrl-remove-all",-18302133),(function (db,_){
return work_app.schema.schema_assoc(db,"nrls",cljs.core.PersistentVector.EMPTY);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","nrl-remove","work-app.events/nrl-remove",-98893484),(function (db,p__52321){
var vec__52322 = p__52321;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52322,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52322,(1),null);
return work_app.schema.schema_update(db,"nrls",(function (nrls){
return cljs.core.filterv((function (nrl){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(nrl));
}),nrls);
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","nrl-add","work-app.events/nrl-add",-1595075211),(function (db,p__52338){
var vec__52339 = p__52338;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52339,(0),null);
var nrl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52339,(1),null);
return work_app.schema.schema_update(db,"nrls",(function (nrls){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nrls,nrl);
}));
}));
work_app.events.time_get_matter = (function work_app$events$time_get_matter(db,matter_id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"matters","matters",-108834512),matter_id], null));
});
work_app.events.time_get_group = (function work_app$events$time_get_group(db,matter_id,group_id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(work_app.events.time_get_matter(db,matter_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"groups","groups",-136896102),group_id], null));
});
work_app.events.time_get_task = (function work_app$events$time_get_task(db,matter_id,group_id,task_id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(work_app.events.time_get_group(db,matter_id,group_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tasks","tasks",-1754368880),task_id], null));
});
work_app.events.time_line__GT_task = (function work_app$events$time_line__GT_task(line){
var num_paren_re = /\(\d+\.?\d*\)/;
var time_re = /(?<=\()\d+\.?\d*(?=\))/;
var times = cljs.core.re_seq(time_re,line);
var total_time = (((60) * (60)) * cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseFloat,times)));
var description = (function (){var $ = line;
var $__$1 = clojure.string.split.cljs$core$IFn$_invoke$arity$2($,num_paren_re);
var $__$2 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",$__$1);
var $__$3 = clojure.string.replace($__$2,/\s+/," ");
return clojure.string.trim($__$3);
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"not-yet-focused","not-yet-focused",-1793704582),false,new cljs.core.Keyword(null,"time","time",1385887882),total_time,new cljs.core.Keyword(null,"description","description",-1428560544),description], null);
});
work_app.events.move_keys_and_reorder = (function work_app$events$move_keys_and_reorder(m,from_path,to_path,keys){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (acc,p__52361){
var vec__52362 = p__52361;
var o = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52362,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52362,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(acc,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(to_path,v),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(from_path,v)),new cljs.core.Keyword(null,"order","order",-1254677256),o)),from_path,cljs.core.dissoc,v);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(work_app.events.next_order_in(m,to_path),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),keys));
});
work_app.events.m_id_by_t_id = (function work_app$events$m_id_by_t_id(ds,t_id){
var G__52365 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null)], null)], null);
var G__52366 = ds;
var G__52367 = t_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__52365,G__52366,G__52367) : datascript.core.q.call(null,G__52365,G__52366,G__52367));
});
var G__52374_52843 = new cljs.core.Keyword("work-app.events","move-tasks","work-app.events/move-tasks",-2118494196);
var G__52375_52844 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword(null,"ds","ds",-257415859)))], null);
var G__52376_52845 = (function (p__52377,p__52378){
var map__52379 = p__52377;
var map__52379__$1 = cljs.core.__destructure_map(map__52379);
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52379__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var vec__52380 = p__52378;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52380,(0),null);
var map__52383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52380,(1),null);
var map__52383__$1 = cljs.core.__destructure_map(map__52383);
var tids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52383__$1,new cljs.core.Keyword(null,"tids","tids",-1783124481));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52383__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var m_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52383__$1,new cljs.core.Keyword(null,"m-id","m-id",1795173264));
var matter_tasks = cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (tid){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),work_app.events.m_id_by_t_id(ds,tid),new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),tid], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),m_id,new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),tid], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),tid,new cljs.core.Keyword("task","code","task/code",-1647928303),code], null)], null);
}),tids)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transact","transact",-267998670),matter_tasks,new cljs.core.Keyword(null,"fx","fx",-1237829572),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (t_id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","t-task-toggle-check","work-app.time-events/t-task-toggle-check",231376808),t_id], null)], null);
}),tids)], null);
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__52374_52843,G__52375_52844,G__52376_52845) : re_posh.core.reg_event_fx.call(null,G__52374_52843,G__52375_52844,G__52376_52845));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","toggle-collapsed","work-app.events/toggle-collapsed",263531408),(function (db,p__52384){
var vec__52385 = p__52384;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52385,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52385,(1),null);
return work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"collapsed",cljs.core.not,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null)], null)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","set-collapsed-all","work-app.events/set-collapsed-all",-915394143),(function (db,p__52388){
var vec__52389 = p__52388;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52389,(0),null);
var c_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52389,(1),null);
var expand_or_collapse = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52389,(2),null);
console.log(["c-ids: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_ids)].join(''));

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,v){
return work_app.schema.schema_assoc.cljs$core$IFn$_invoke$arity$variadic(acc,"collapsed",cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expand_or_collapse,new cljs.core.Keyword(null,"collapse","collapse",-1218136136)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),db,c_ids);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-matter-toggle-name-edit","work-app.events/time-matter-toggle-name-edit",2092332495),(function (db,p__52398){
var vec__52399 = p__52398;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52399,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52399,(1),null);
return work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"matter-name-edit",cljs.core.not,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id], null)], null)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-delete-matter","work-app.events/time-delete-matter",-203867831),(function (db,p__52402){
var vec__52403 = p__52402;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52403,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52403,(1),null);
return work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"time-matters",cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn-args","fn-args",-2034521192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id], null)], null)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","group-set-code","work-app.events/group-set-code",395926374),(function (db,p__52406){
var vec__52407 = p__52406;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52407,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52407,(1),null);
var group_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52407,(2),null);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52407,(3),null);
return work_app.schema.schema_assoc.cljs$core$IFn$_invoke$arity$variadic(db,"group-selected-code",code,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([matter_id,group_id], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-task-toggle-check","work-app.events/time-task-toggle-check",-1149460991),(function (db,p__52410){
var vec__52411 = p__52410;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52411,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52411,(1),null);
var group_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52411,(2),null);
var task_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52411,(3),null);
return work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"task-checked",cljs.core.not,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id,group_id,task_id], null)], null)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","set-matter-selected-code-old","work-app.events/set-matter-selected-code-old",300621104),(function (db,p__52414){
var vec__52415 = p__52414;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52415,(0),null);
var m_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52415,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52415,(2),null);
return work_app.schema.schema_assoc.cljs$core$IFn$_invoke$arity$variadic(db,"matter-selected-code",val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m_id], 0));
}));
work_app.events.code_unpack = (function work_app$events$code_unpack(p__52424){
var map__52425 = p__52424;
var map__52425__$1 = cljs.core.__destructure_map(map__52425);
var m = map__52425__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52425__$1,new cljs.core.Keyword("code","key","code/key",-1519659910));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52425__$1,new cljs.core.Keyword("code","children","code/children",-945628113));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52425__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,(work_app.events.code_unpack.cljs$core$IFn$_invoke$arity$1 ? work_app.events.code_unpack.cljs$core$IFn$_invoke$arity$1(v) : work_app.events.code_unpack.call(null,v)));
}),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"key","key",-1516042587),key], null)]),children);
});
work_app.events.matter_code_maps = (function work_app$events$matter_code_maps(ds,m_id){
var m = (function (){var G__52426 = ds;
var G__52427 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("code","key","code/key",-1519659910),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("matter","codes","matter/codes",371309178),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("code","children","code/children",-945628113),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
var G__52428 = m_id;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__52426,G__52427,G__52428) : datascript.core.pull.call(null,G__52426,G__52427,G__52428));
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__52429){
var map__52430 = p__52429;
var map__52430__$1 = cljs.core.__destructure_map(map__52430);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52430__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52430__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.assoc_in(cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ek","ek",1710621665),id], null),key),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ke","ke",388998741),key], null),id);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(work_app.events.code_unpack,new cljs.core.Keyword("matter","codes","matter/codes",371309178).cljs$core$IFn$_invoke$arity$1(m))));
});
var G__52431_52856 = new cljs.core.Keyword("work-app.events","set-matter-selected-code","work-app.events/set-matter-selected-code",-1003669201);
var G__52432_52857 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword(null,"ds","ds",-257415859)))], null);
var G__52433_52858 = (function (p__52434,p__52435){
var map__52436 = p__52434;
var map__52436__$1 = cljs.core.__destructure_map(map__52436);
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52436__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52436__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52437 = p__52435;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52437,(0),null);
var m_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52437,(1),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52437,(2),null);
var map__52442 = work_app.events.matter_code_maps(ds,m_id);
var map__52442__$1 = cljs.core.__destructure_map(map__52442);
var ek = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52442__$1,new cljs.core.Keyword(null,"ek","ek",1710621665));
var ke = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52442__$1,new cljs.core.Keyword(null,"ke","ke",388998741));
var code_eid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ke,k);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_assoc.cljs$core$IFn$_invoke$arity$variadic(db,"matter-selected-code",code_eid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m_id], 0))], null);
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__52431_52856,G__52432_52857,G__52433_52858) : re_posh.core.reg_event_fx.call(null,G__52431_52856,G__52432_52857,G__52433_52858));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","gen-toggle-slider-dialog-visible","work-app.events/gen-toggle-slider-dialog-visible",1495620060),(function (db,p__52443){
var vec__52444 = p__52443;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52444,(0),null);
var p_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52444,(1),null);
return work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"slider-dialog-visible",cljs.core.not,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_id], null)], null)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","slider-dialog-toggle-lock","work-app.events/slider-dialog-toggle-lock",287995487),(function (db,p__52447){
var vec__52448 = p__52447;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52448,(0),null);
var p_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52448,(1),null);
return work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"slider-dialog-locked",cljs.core.not,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_id], null)], null)], 0));
}));
var G__52451_52859 = new cljs.core.Keyword("work-app.events","delete-tasks","work-app.events/delete-tasks",754826470);
var G__52452_52860 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword(null,"ds","ds",-257415859)))], null);
var G__52453_52861 = (function (p__52455,p__52456){
var map__52458 = p__52455;
var map__52458__$1 = cljs.core.__destructure_map(map__52458);
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52458__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52458__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52459 = p__52456;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52459,(0),null);
var map__52462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52459,(1),null);
var map__52462__$1 = cljs.core.__destructure_map(map__52462);
var matter_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52462__$1,new cljs.core.Keyword(null,"matter-id","matter-id",914791808));
var group_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52462__$1,new cljs.core.Keyword(null,"group-id","group-id",-1316082778));
var d = work_app.schema.schema_get(db,"time-selected-date");
var task_ids = (function (){var G__52463 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Symbol(null,"?d","?d",-1851543854,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m","?m",896026745,null),new cljs.core.Keyword("matter","id","matter/id",-355841133),new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m","?m",896026745,null),new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t","?t",1786819229,null),new cljs.core.Keyword("task","date","task/date",-1460731749),new cljs.core.Symbol(null,"?d","?d",-1851543854,null)], null)], null);
var G__52464 = ds;
var G__52465 = matter_id;
var G__52466 = d;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__52463,G__52464,G__52465,G__52466) : datascript.core.q.call(null,G__52463,G__52464,G__52465,G__52466));
})();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (tid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),tid], null);
}),task_ids)], null);
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__52451_52859,G__52452_52860,G__52453_52861) : re_posh.core.reg_event_fx.call(null,G__52451_52859,G__52452_52860,G__52453_52861));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-matter-start-last-timer","work-app.events/time-matter-start-last-timer",-1592201096),(function (p__52467,p__52468){
var map__52469 = p__52467;
var map__52469__$1 = cljs.core.__destructure_map(map__52469);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52469__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52470 = p__52468;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52470,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52470,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","time-task-start-timer","work-app.events/time-task-start-timer",257274648)], null),work_app.schema.schema_get.cljs$core$IFn$_invoke$arity$variadic(db,"matter-last-active-task",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([matter_id], 0)))], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-task-start-timer","work-app.events/time-task-start-timer",257274648),(function (p__52473,p__52474){
var map__52475 = p__52473;
var map__52475__$1 = cljs.core.__destructure_map(map__52475);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52475__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52476 = p__52474;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52476,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52476,(1),null);
var group_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52476,(2),null);
var task_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52476,(3),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_assoc.cljs$core$IFn$_invoke$arity$variadic(db,"matter-last-active-task",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id,group_id,task_id], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([matter_id], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","ticker-set-timed-event","work-app.events/ticker-set-timed-event",-1815171530),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"active-timer","active-timer",-1826303330),new cljs.core.Keyword(null,"interval","interval",1708495417),(1),new cljs.core.Keyword(null,"task-id","task-id",-1045480126),task_id,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","time-task-tick","work-app.events/time-task-tick",-527991373),matter_id,group_id,task_id], null)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-toggle-task-timer","work-app.events/time-toggle-task-timer",244817524),(function (p__52479,p__52480){
var map__52481 = p__52479;
var map__52481__$1 = cljs.core.__destructure_map(map__52481);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52481__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52482 = p__52480;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52482,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52482,(1),null);
var group_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52482,(2),null);
var task_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52482,(3),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(task_id,work_app.schema.schema_get(db,"active-timer-task-id")))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","time-task-stop-timer","work-app.events/time-task-stop-timer",816957465)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","time-task-start-timer","work-app.events/time-task-start-timer",257274648),matter_id,group_id,task_id], null))], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-group-toggle-dialog","work-app.events/time-group-toggle-dialog",-632846757),(function (db,p__52485){
var vec__52486 = p__52485;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52486,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52486,(1),null);
var group_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52486,(2),null);
return work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"group-dialog-visible",cljs.core.not,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id,group_id], null)], null)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-delete-group","work-app.events/time-delete-group",-1756649924),(function (db,p__52492){
var vec__52493 = p__52492;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52493,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52493,(1),null);
var group_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52493,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"matters","matters",-108834512),matter_id,new cljs.core.Keyword(null,"groups","groups",-136896102)], null),cljs.core.dissoc,group_id);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-delete-task","work-app.events/time-delete-task",1162179194),(function (db,p__52499){
var vec__52500 = p__52499;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52500,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52500,(1),null);
var group_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52500,(2),null);
var task_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52500,(3),null);
return work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"group-tasks",cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id,group_id], null),new cljs.core.Keyword(null,"fn-args","fn-args",-2034521192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [task_id], null)], null)], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-set-task-time","work-app.events/time-set-task-time",-1295199340),(function (p__52506,p__52507){
var map__52508 = p__52506;
var map__52508__$1 = cljs.core.__destructure_map(map__52508);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52508__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52509 = p__52507;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52509,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52509,(1),null);
var group_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52509,(2),null);
var task_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52509,(3),null);
var time_secs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52509,(4),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_assoc.cljs$core$IFn$_invoke$arity$variadic(db,"task-time",Math.round(time_secs),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([matter_id,group_id,task_id], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","time-set-task-time-ds","work-app.events/time-set-task-time-ds",-288831090),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"t-id","t-id",647334507),task_id,new cljs.core.Keyword(null,"time","time",1385887882),time_secs], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-group-delete-checked-tasks","work-app.events/time-group-delete-checked-tasks",-1235791158),(function (p__52513,p__52514){
var map__52515 = p__52513;
var map__52515__$1 = cljs.core.__destructure_map(map__52515);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52515__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52516 = p__52514;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52516,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52516,(1),null);
var group_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52516,(2),null);
var checked_tasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52516,(3),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"group-tasks",(function (p1__52512_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,p1__52512_SHARP_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),checked_tasks));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id,group_id], null)], null)], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","time-delete-group-if-empty","work-app.events/time-delete-group-if-empty",-1987626068),matter_id,group_id], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","time-delete-checked-tasks-ds","work-app.events/time-delete-checked-tasks-ds",977655651),checked_tasks], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-group-set-tiered-menu","work-app.events/time-group-set-tiered-menu",1979859079),(function (db,p__52521){
var vec__52522 = p__52521;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52522,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52522,(1),null);
var group_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52522,(2),null);
var menu_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52522,(3),null);
if(cljs.core.truth_(work_app.schema.schema_get.cljs$core$IFn$_invoke$arity$variadic(db,"group-id",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([matter_id,group_id], 0)))){
return work_app.schema.schema_assoc.cljs$core$IFn$_invoke$arity$variadic(db,"group-tiered-menu-ref",menu_ref,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([matter_id,group_id], 0));
} else {
return db;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-focus-task-if-new","work-app.events/time-focus-task-if-new",399249538),(function (p__52525,p__52526){
var map__52527 = p__52525;
var map__52527__$1 = cljs.core.__destructure_map(map__52527);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52527__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52528 = p__52526;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52528,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52528,(1),null);
var group_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52528,(2),null);
var task_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52528,(3),null);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52528,(4),null);
if(cljs.core.truth_(work_app.schema.schema_get.cljs$core$IFn$_invoke$arity$variadic(db,"task-already-focused",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([matter_id,group_id,task_id], 0)))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"task-already-focused",cljs.core.not,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id,group_id,task_id], null)], null)], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","focus","work-app.events/focus",818984009),el], null)], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","focus-task-if-new","work-app.events/focus-task-if-new",1777666214),(function (p__52536,p__52537){
var map__52538 = p__52536;
var map__52538__$1 = cljs.core.__destructure_map(map__52538);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52538__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52539 = p__52537;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52539,(0),null);
var t_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52539,(1),null);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52539,(2),null);
if(cljs.core.truth_(work_app.schema.schema_get.cljs$core$IFn$_invoke$arity$variadic(db,"t-already-focused",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t_id], 0)))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"t-already-focused",cljs.core.not,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t_id], null)], null)], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","focus","work-app.events/focus",818984009),el], null)], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-delete-group-if-empty","work-app.events/time-delete-group-if-empty",-1987626068),(function (p__52542,p__52543){
var map__52544 = p__52542;
var map__52544__$1 = cljs.core.__destructure_map(map__52544);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52544__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52545 = p__52543;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52545,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52545,(1),null);
var group_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52545,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(work_app.schema.schema_get.cljs$core$IFn$_invoke$arity$variadic(db,"group-tasks",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([matter_id,group_id], 0)))))?work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"matter-group-map",cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn-args","fn-args",-2034521192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_id], null),new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id], null)], null)], 0)):db)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-move-tasks-to-new-group","work-app.events/time-move-tasks-to-new-group",59285684),(function (p__52548,p__52549){
var map__52550 = p__52548;
var map__52550__$1 = cljs.core.__destructure_map(map__52550);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52550__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52551 = p__52549;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52551,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52551,(1),null);
var group_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52551,(2),null);
var checked_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52551,(3),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"group-tasks",cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id,group_id], null),new cljs.core.Keyword(null,"fn-args","fn-args",-2034521192),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),checked_set)], null)], 0)),"group-tasks",work_app.events.re_order_map,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id,group_id], null)], null)], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","time-add-group","work-app.events/time-add-group",1651711675),matter_id,checked_set], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","time-delete-group-if-empty","work-app.events/time-delete-group-if-empty",-1987626068),matter_id,group_id], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-move-tasks-to","work-app.events/time-move-tasks-to",-960294608),(function (p__52554,p__52555){
var map__52557 = p__52554;
var map__52557__$1 = cljs.core.__destructure_map(map__52557);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52557__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52558 = p__52555;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52558,(0),null);
var checked_tasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52558,(1),null);
var group_to_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52558,(2),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52558,(3),null);
var group_from_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52558,(4),null);
var checked = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (t){
return cljs.core.assoc_in(t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ephem","ephem",-1036634383),new cljs.core.Keyword(null,"task-checked","task-checked",1480874420)], null),false);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (o,t){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(t,new cljs.core.Keyword(null,"order","order",-1254677256),o);
}),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(work_app.schema.schema_next_order.cljs$core$IFn$_invoke$arity$variadic("matter-group-map",matter_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group_to_id], 0)),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),checked_tasks));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"group-tasks",cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id,group_from_id], null),new cljs.core.Keyword(null,"fn-args","fn-args",-2034521192),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),checked)], null)], 0)),"group-tasks",work_app.events.re_order_map,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id,group_from_id], null)], null)], 0)),"group-tasks",(function (task_map){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(v),v);
}),task_map,checked);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id,group_to_id], null)], null)], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","time-delete-group-if-empty","work-app.events/time-delete-group-if-empty",-1987626068),matter_id,group_from_id], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-group-toggle-slider","work-app.events/time-group-toggle-slider",-1153516595),(function (p__52564,p__52565){
var map__52566 = p__52564;
var map__52566__$1 = cljs.core.__destructure_map(map__52566);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52566__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52567 = p__52565;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52567,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52567,(1),null);
var group_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52567,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"group-sliders-showing",cljs.core.not,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id,group_id], null)], null)], 0))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","code-slider-visible-toggle","work-app.events/code-slider-visible-toggle",99119913),(function (p__52570,p__52571){
var map__52572 = p__52570;
var map__52572__$1 = cljs.core.__destructure_map(map__52572);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52572__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52573 = p__52571;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52573,(0),null);
var code_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52573,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"code-slider-visible",cljs.core.not,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [code_id], null)], null)], 0))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-group-slider-lock-toggle","work-app.events/time-group-slider-lock-toggle",1423047774),(function (p__52576,p__52577){
var map__52578 = p__52576;
var map__52578__$1 = cljs.core.__destructure_map(map__52578);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52578__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52579 = p__52577;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52579,(0),null);
var matter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52579,(1),null);
var group_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52579,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"group-slider-locked",cljs.core.not,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matter_id,group_id], null)], null)], 0))], null);
}));
var G__52582_52913 = new cljs.core.Keyword("work-app.events","time-task-slide-change-ds","work-app.events/time-task-slide-change-ds",-1750929867);
var G__52583_52914 = (function (p__52584,p__52585){
var map__52586 = p__52584;
var map__52586__$1 = cljs.core.__destructure_map(map__52586);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52586__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52587 = p__52585;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52587,(0),null);
var t_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52587,(1),null);
var tenths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52587,(2),null);
var secs = Math.round(((3600) * tenths));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","log","work-app.events/log",2121905114),["Secs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(secs)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","time-set-task-time-ds","work-app.events/time-set-task-time-ds",-288831090),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"task-id","task-id",-1045480126),t_id,new cljs.core.Keyword(null,"time","time",1385887882),secs], null)], null)], null)], null)], null);
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(G__52582_52913,G__52583_52914) : re_posh.core.reg_event_fx.call(null,G__52582_52913,G__52583_52914));
work_app.events.get_all_group_map = (function work_app$events$get_all_group_map(db){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (matter_id){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__52590){
var vec__52591 = p__52590;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52591,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52591,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52594){
var vec__52595 = p__52594;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52595,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52595,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"matter-id","matter-id",914791808),matter_id)], null);
}),work_app.schema.schema_get.cljs$core$IFn$_invoke$arity$variadic(db,"matter-group-map",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([matter_id], 0))));
}),cljs.core.keys(work_app.schema.schema_get(db,"time-matters"))));
});
work_app.events.get_all_task_map = (function work_app$events$get_all_task_map(db){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52598){
var map__52599 = p__52598;
var map__52599__$1 = cljs.core.__destructure_map(map__52599);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52599__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var matter_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52599__$1,new cljs.core.Keyword(null,"matter-id","matter-id",914791808));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__52600){
var vec__52601 = p__52600;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52601,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52601,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52604){
var vec__52605 = p__52604;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52605,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52605,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v,new cljs.core.Keyword(null,"matter-id","matter-id",914791808),matter_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"group-id","group-id",-1316082778),id], 0))], null);
}),work_app.schema.schema_get.cljs$core$IFn$_invoke$arity$variadic(db,"group-tasks",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([matter_id,id], 0))));
}),cljs.core.vals(work_app.events.get_all_group_map(db))));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-drop-csv","work-app.events/time-drop-csv",-409627938),(function (p__52610,p__52611){
var map__52612 = p__52610;
var map__52612__$1 = cljs.core.__destructure_map(map__52612);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52612__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52613 = p__52611;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52613,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52613,(1),null);
var files = e.dataTransfer.files;
var temp__5802__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52609_SHARP_){
return files.item(p1__52609_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(files.length)));
if(cljs.core.truth_(temp__5802__auto__)){
var file = temp__5802__auto__;
var freader = (new FileReader());
(freader.onload = (function (){
var G__52616 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","time-load-matters-csv","work-app.events/time-load-matters-csv",-567386341),freader.result], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__52616) : work_app.events._GT_evt.call(null,G__52616));
}));

return freader.readAsBinaryString(file);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","log","work-app.events/log",2121905114),"No acceptable file"], null)], null)], null)], null);
}
}));
work_app.events.csv_lines__GT_map = (function work_app$events$csv_lines__GT_map(lines){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__52619){
var vec__52620 = p__52619;
var date_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52620,(0),null);
var client_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52620,(1),null);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52620,(2),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52620,(3),null);
var timer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52620,(4),null);
var client = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52620,(5),null);
var matter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52620,(6),null);
var matter_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52620,(7),null);
var narrative = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52620,(8),null);
var task_code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52620,(9),null);
var code_description = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52620,(10),null);
var activity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52620,(11),null);
var u3_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52620,(12),null);
var u5_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52620,(13),null);
var work_location = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52620,(14),null);
var time_card_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52620,(15),null);
var code = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [task_code,code_description], null));
var vec__52624 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(matter,/-/);
var c_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52624,(0),null);
var m_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52624,(1),null);
var task = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"desc","desc",2093485764),narrative,new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(date_str)),new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"location","location",1815599388),work_location,new cljs.core.Keyword(null,"time","time",1385887882),Math.round((parseFloat(hours) * (3600))),new cljs.core.Keyword(null,"client-name","client-name",1843891115),client_name,new cljs.core.Keyword(null,"c-num","c-num",1611632000),c_num,new cljs.core.Keyword(null,"m-num","m-num",81000627),m_num], null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_num,new cljs.core.Keyword(null,"name","name",1843675177)], null),client_name),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_num,new cljs.core.Keyword(null,"matters","matters",-108834512),m_num,new cljs.core.Keyword(null,"name","name",1843675177)], null),matter_name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_num,new cljs.core.Keyword(null,"matters","matters",-108834512),m_num,code,new cljs.core.Keyword(null,"tasks","tasks",-1754368880)], null),(function (t_list){
if(cljs.core.empty_QMARK_(t_list)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [task], null);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(t_list,task);
}
}));
}),cljs.core.PersistentArrayMap.EMPTY,lines);
});
work_app.events.client__GT_txs = (function work_app$events$client__GT_txs(ds,p__52629){
var vec__52630 = p__52629;
var c_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52630,(0),null);
var map__52633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52630,(1),null);
var map__52633__$1 = cljs.core.__destructure_map(map__52633);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52633__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var matters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52633__$1,new cljs.core.Keyword(null,"matters","matters",-108834512));
var c_id = (function (){var or__5045__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__52634 = ds;
var G__52635 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null);
var G__52636 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("client","number","client/number",-1936785665),c_num], null);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__52634,G__52635,G__52636) : datascript.core.pull.call(null,G__52634,G__52635,G__52636));
})());
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (-1);
}
})();
var base = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),c_id,new cljs.core.Keyword("client","number","client/number",-1936785665),c_num,new cljs.core.Keyword("client","name","client/name",924271622),name,new cljs.core.Keyword("client","matters","client/matters",-896248603),cljs.core.PersistentVector.EMPTY], null)], null);
console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_num)," c-id: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_id)].join(''));

return console.log(["adding c-num: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_num),"\nc-name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"\nbase: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base)].join(''));
});
work_app.events.lines__GT_txs = (function work_app$events$lines__GT_txs(ds,lines){
var G__52652 = lines;
var vec__52654 = G__52652;
var seq__52655 = cljs.core.seq(vec__52654);
var first__52656 = cljs.core.first(seq__52655);
var seq__52655__$1 = cljs.core.next(seq__52655);
var vec__52657 = first__52656;
var date_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52657,(0),null);
var client_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52657,(1),null);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52657,(2),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52657,(3),null);
var timer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52657,(4),null);
var client = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52657,(5),null);
var matter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52657,(6),null);
var matter_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52657,(7),null);
var narrative = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52657,(8),null);
var task_code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52657,(9),null);
var code_description = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52657,(10),null);
var activity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52657,(11),null);
var u3_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52657,(12),null);
var u5_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52657,(13),null);
var work_location = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52657,(14),null);
var time_card_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52657,(15),null);
var l = vec__52657;
var rest_lines = seq__52655__$1;
var txs = cljs.core.PersistentVector.EMPTY;
var new_clients = cljs.core.PersistentArrayMap.EMPTY;
var new_matters = cljs.core.PersistentArrayMap.EMPTY;
var new_codes = cljs.core.PersistentArrayMap.EMPTY;
var G__52653 = work_app.time_events.range_step.cljs$core$IFn$_invoke$arity$2((-1),(-1));
var vec__52660 = G__52653;
var seq__52661 = cljs.core.seq(vec__52660);
var first__52662 = cljs.core.first(seq__52661);
var seq__52661__$1 = cljs.core.next(seq__52661);
var new_client_id = first__52662;
var first__52662__$1 = cljs.core.first(seq__52661__$1);
var seq__52661__$2 = cljs.core.next(seq__52661__$1);
var new_m_id = first__52662__$1;
var first__52662__$2 = cljs.core.first(seq__52661__$2);
var seq__52661__$3 = cljs.core.next(seq__52661__$2);
var new_code_id = first__52662__$2;
var first__52662__$3 = cljs.core.first(seq__52661__$3);
var seq__52661__$4 = cljs.core.next(seq__52661__$3);
var new_t_id = first__52662__$3;
var rest_ids = seq__52661__$4;
var G__52652__$1 = G__52652;
var txs__$1 = txs;
var new_clients__$1 = new_clients;
var new_matters__$1 = new_matters;
var new_codes__$1 = new_codes;
var G__52653__$1 = G__52653;
while(true){
var vec__52693 = G__52652__$1;
var seq__52694 = cljs.core.seq(vec__52693);
var first__52695 = cljs.core.first(seq__52694);
var seq__52694__$1 = cljs.core.next(seq__52694);
var vec__52696 = first__52695;
var date_str__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52696,(0),null);
var client_name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52696,(1),null);
var status__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52696,(2),null);
var hours__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52696,(3),null);
var timer__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52696,(4),null);
var client__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52696,(5),null);
var matter__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52696,(6),null);
var matter_name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52696,(7),null);
var narrative__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52696,(8),null);
var task_code__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52696,(9),null);
var code_description__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52696,(10),null);
var activity__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52696,(11),null);
var u3_name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52696,(12),null);
var u5_name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52696,(13),null);
var work_location__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52696,(14),null);
var time_card_id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52696,(15),null);
var l__$1 = vec__52696;
var rest_lines__$1 = seq__52694__$1;
var txs__$2 = txs__$1;
var new_clients__$2 = new_clients__$1;
var new_matters__$2 = new_matters__$1;
var new_codes__$2 = new_codes__$1;
var vec__52699 = G__52653__$1;
var seq__52700 = cljs.core.seq(vec__52699);
var first__52701 = cljs.core.first(seq__52700);
var seq__52700__$1 = cljs.core.next(seq__52700);
var new_client_id__$1 = first__52701;
var first__52701__$1 = cljs.core.first(seq__52700__$1);
var seq__52700__$2 = cljs.core.next(seq__52700__$1);
var new_m_id__$1 = first__52701__$1;
var first__52701__$2 = cljs.core.first(seq__52700__$2);
var seq__52700__$3 = cljs.core.next(seq__52700__$2);
var new_code_id__$1 = first__52701__$2;
var first__52701__$3 = cljs.core.first(seq__52700__$3);
var seq__52700__$4 = cljs.core.next(seq__52700__$3);
var new_t_id__$1 = first__52701__$3;
var rest_ids__$1 = seq__52700__$4;
if((l__$1 == null)){
return txs__$2;
} else {
var code_str = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [task_code__$1,code_description__$1], null));
var vec__52702 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(matter__$1,/-/);
var c_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52702,(0),null);
var m_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52702,(1),null);
var date = (new Date(date_str__$1));
var time = Math.round((parseFloat(hours__$1) * (3600)));
var task = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"desc","desc",2093485764),narrative__$1,new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(date_str__$1)),new cljs.core.Keyword(null,"code","code",1586293142),code_str,new cljs.core.Keyword(null,"location","location",1815599388),work_location__$1,new cljs.core.Keyword(null,"time","time",1385887882),time,new cljs.core.Keyword(null,"client-name","client-name",1843891115),client_name__$1,new cljs.core.Keyword(null,"c-num","c-num",1611632000),c_num,new cljs.core.Keyword(null,"m-num","m-num",81000627),m_num], null);
var c_id_ds = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__52705 = ds;
var G__52706 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null);
var G__52707 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("client","number","client/number",-1936785665),c_num], null);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__52705,G__52706,G__52707) : datascript.core.pull.call(null,G__52705,G__52706,G__52707));
})());
var c_id_news = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_clients__$2,c_num);
var c_id = (function (){var or__5045__auto__ = c_id_ds;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = c_id_news;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return new_client_id__$1;
}
}
})();
var m_id_ds = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__52709 = ds;
var G__52710 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null);
var G__52711 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("matter","id","matter/id",-355841133),m_num], null);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__52709,G__52710,G__52711) : datascript.core.pull.call(null,G__52709,G__52710,G__52711));
})());
var m_id_news = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_matters__$2,m_num);
var m_id = (function (){var or__5045__auto__ = m_id_ds;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = m_id_news;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return new_m_id__$1;
}
}
})();
var new_txs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__52652__$1,txs__$1,new_clients__$1,new_matters__$1,new_codes__$1,G__52653__$1,code_str,vec__52702,c_num,m_num,date,time,task,c_id_ds,c_id_news,c_id,m_id_ds,m_id_news,m_id,vec__52693,seq__52694,first__52695,seq__52694__$1,vec__52696,date_str__$1,client_name__$1,status__$1,hours__$1,timer__$1,client__$1,matter__$1,matter_name__$1,narrative__$1,task_code__$1,code_description__$1,activity__$1,u3_name__$1,u5_name__$1,work_location__$1,time_card_id__$1,l__$1,rest_lines__$1,txs__$2,new_clients__$2,new_matters__$2,new_codes__$2,vec__52699,seq__52700,first__52701,seq__52700__$1,new_client_id__$1,first__52701__$1,seq__52700__$2,new_m_id__$1,first__52701__$2,seq__52700__$3,new_code_id__$1,first__52701__$3,seq__52700__$4,new_t_id__$1,rest_ids__$1,G__52652,vec__52654,seq__52655,first__52656,seq__52655__$1,vec__52657,date_str,client_name,status,hours,timer,client,matter,matter_name,narrative,task_code,code_description,activity,u3_name,u5_name,work_location,time_card_id,l,rest_lines,txs,new_clients,new_matters,new_codes,G__52653,vec__52660,seq__52661,first__52662,seq__52661__$1,new_client_id,first__52662__$1,seq__52661__$2,new_m_id,first__52662__$2,seq__52661__$3,new_code_id,first__52662__$3,seq__52661__$4,new_t_id,rest_ids){
return (function (p__52712){
var vec__52713 = p__52712;
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52713,(0),null);
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52713,(1),null);
var att = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52713,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52713,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,eid,att,(function (){var or__5045__auto__ = v;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "placeholder";
}
})()], null);
});})(G__52652__$1,txs__$1,new_clients__$1,new_matters__$1,new_codes__$1,G__52653__$1,code_str,vec__52702,c_num,m_num,date,time,task,c_id_ds,c_id_news,c_id,m_id_ds,m_id_news,m_id,vec__52693,seq__52694,first__52695,seq__52694__$1,vec__52696,date_str__$1,client_name__$1,status__$1,hours__$1,timer__$1,client__$1,matter__$1,matter_name__$1,narrative__$1,task_code__$1,code_description__$1,activity__$1,u3_name__$1,u5_name__$1,work_location__$1,time_card_id__$1,l__$1,rest_lines__$1,txs__$2,new_clients__$2,new_matters__$2,new_codes__$2,vec__52699,seq__52700,first__52701,seq__52700__$1,new_client_id__$1,first__52701__$1,seq__52700__$2,new_m_id__$1,first__52701__$2,seq__52700__$3,new_code_id__$1,first__52701__$3,seq__52700__$4,new_t_id__$1,rest_ids__$1,G__52652,vec__52654,seq__52655,first__52656,seq__52655__$1,vec__52657,date_str,client_name,status,hours,timer,client,matter,matter_name,narrative,task_code,code_description,activity,u3_name,u5_name,work_location,time_card_id,l,rest_lines,txs,new_clients,new_matters,new_codes,G__52653,vec__52660,seq__52661,first__52662,seq__52661__$1,new_client_id,first__52662__$1,seq__52661__$2,new_m_id,first__52662__$2,seq__52661__$3,new_code_id,first__52662__$3,seq__52661__$4,new_t_id,rest_ids))
,(function (){var G__52716 = txs__$2;
var G__52716__$1 = ((((cljs.core.not(c_id_ds)) && (cljs.core.not(c_id_news))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__52716,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),c_id,new cljs.core.Keyword("client","name","client/name",924271622),client_name__$1], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),c_id,new cljs.core.Keyword("client","number","client/number",-1936785665),c_num], null)], 0)):G__52716);
var G__52716__$2 = ((((cljs.core.not(m_id_ds)) && (cljs.core.not(m_id_news))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__52716__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),c_id,new cljs.core.Keyword("client","matters","client/matters",-896248603),m_id], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),m_id,new cljs.core.Keyword("matter","name","matter/name",643423984),matter_name__$1], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),m_id,new cljs.core.Keyword("matter","number","matter/number",-1659652091),m_num], null)], 0)):G__52716__$1);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__52716__$2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),m_id,new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new_t_id__$1], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new_t_id__$1,new cljs.core.Keyword("task","date","task/date",-1460731749),date], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new_t_id__$1,new cljs.core.Keyword("task","description","task/description",-1431594219),narrative__$1], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new_t_id__$1,new cljs.core.Keyword("task","work-location","task/work-location",-2021975962),work_location__$1], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new_t_id__$1,new cljs.core.Keyword("task","time","task/time",1407463183),time], null)], 0));

})());
var G__52945 = rest_lines__$1;
var G__52946 = new_txs;
var G__52947 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_clients__$2,c_num,c_id);
var G__52948 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_matters__$2,m_num,m_id);
var G__52949 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_codes__$2,new cljs.core.Keyword(null,"a","a",-2123407586),(1));
var G__52950 = rest_ids__$1;
G__52652__$1 = G__52945;
txs__$1 = G__52946;
new_clients__$1 = G__52947;
new_matters__$1 = G__52948;
new_codes__$1 = G__52949;
G__52653__$1 = G__52950;
continue;
}
break;
}
});
var G__52720_52951 = new cljs.core.Keyword("work-app.events","time-load-csv-line","work-app.events/time-load-csv-line",1517976357);
var G__52721_52952 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859))], null);
var G__52722_52953 = (function (p__52723,p__52724){
var map__52725 = p__52723;
var map__52725__$1 = cljs.core.__destructure_map(map__52725);
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52725__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52725__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52728 = p__52724;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52728,(0),null);
var vec__52731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52728,(1),null);
var date_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52731,(0),null);
var client_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52731,(1),null);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52731,(2),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52731,(3),null);
var timer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52731,(4),null);
var client = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52731,(5),null);
var matter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52731,(6),null);
var matter_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52731,(7),null);
var narrative = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52731,(8),null);
var task_code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52731,(9),null);
var code_description = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52731,(10),null);
var activity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52731,(11),null);
var u3_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52731,(12),null);
var u5_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52731,(13),null);
var work_location = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52731,(14),null);
var time_card_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52731,(15),null);
var row = vec__52731;
var vec__52734 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(matter,/-/));
var c_num_cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52734,(0),null);
var m_num_cont = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52734,(1),null);
var c_num = (function (){var or__5045__auto__ = c_num_cont;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "x";
}
})();
var m_num = (function (){var or__5045__auto__ = m_num_cont;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "y";
}
})();
var c_id = (function (){var or__5045__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__52737 = ds;
var G__52738 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null);
var G__52739 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("client","number","client/number",-1936785665),client], null);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__52737,G__52738,G__52739) : datascript.core.pull.call(null,G__52737,G__52738,G__52739));
})());
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (-1);
}
})();
var m_id = (function (){var or__5045__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1((function (){var G__52740 = ds;
var G__52741 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098)], null);
var G__52742 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("matter","number","matter/number",-1659652091),matter], null);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__52740,G__52741,G__52742) : datascript.core.pull.call(null,G__52740,G__52741,G__52742));
})());
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (-2);
}
})();
var secs = parseFloat(hours);
var txs = (function (){var G__52743 = cljs.core.PersistentVector.EMPTY;
var G__52743__$1 = (((c_id < (0)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__52743,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),c_id,new cljs.core.Keyword("client","name","client/name",924271622),client_name], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),c_id,new cljs.core.Keyword("client","number","client/number",-1936785665),c_num], null)], null)):G__52743);
var G__52743__$2 = (((m_id < (0)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__52743__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),c_id,new cljs.core.Keyword("client","matters","client/matters",-896248603),m_id], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),m_id,new cljs.core.Keyword("matter","name","matter/name",643423984),matter_name], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),m_id,new cljs.core.Keyword("matter","number","matter/number",-1659652091),m_num], null)], null)):G__52743__$1);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__52743__$2,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),m_id,new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),(-3)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-3),new cljs.core.Keyword("task","date","task/date",-1460731749),(new Date(date_str))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-3),new cljs.core.Keyword("task","description","task/description",-1431594219),narrative], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-3),new cljs.core.Keyword("task","code","task/code",-1647928303),(3)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(-3),new cljs.core.Keyword("task","time","task/time",1407463183),secs], null)], null));

})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transact","transact",-267998670),txs,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"lines-processed","lines-processed",1425313555),cljs.core.inc)], null);
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__52720_52951,G__52721_52952,G__52722_52953) : re_posh.core.reg_event_fx.call(null,G__52720_52951,G__52721_52952,G__52722_52953));
var G__52744_52956 = new cljs.core.Keyword("work-app.events","time-load-matters-csv","work-app.events/time-load-matters-csv",-567386341);
var G__52745_52957 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859))], null);
var G__52746_52958 = (function (p__52747,p__52748){
var map__52749 = p__52747;
var map__52749__$1 = cljs.core.__destructure_map(map__52749);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52749__$1,new cljs.core.Keyword(null,"db","db",993250759));
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52749__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var vec__52750 = p__52748;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52750,(0),null);
var csv_contents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52750,(1),null);
var temp__5804__auto__ = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),goog.labs.format.csv.parse(csv_contents));
if(cljs.core.truth_(temp__5804__auto__)){
var matter_lines = temp__5804__auto__;
var cm_map = work_app.events.csv_lines__GT_map(matter_lines);
var txs = work_app.events.lines__GT_txs(ds,matter_lines);
console.log(cljs.core.clj__GT_js(txs));

cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function work_app$events$iter__52753(s__52754){
return (new cljs.core.LazySeq(null,(function (){
var s__52754__$1 = s__52754;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__52754__$1);
if(temp__5804__auto____$1){
var s__52754__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52754__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__52754__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__52756 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__52755 = (0);
while(true){
if((i__52755 < size__5522__auto__)){
var cs = cljs.core._nth(c__5521__auto__,i__52755);
cljs.core.chunk_append(b__52756,work_app.events.client__GT_txs(ds,cs));

var G__52959 = (i__52755 + (1));
i__52755 = G__52959;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52756),work_app$events$iter__52753(cljs.core.chunk_rest(s__52754__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52756),null);
}
} else {
var cs = cljs.core.first(s__52754__$2);
return cljs.core.cons(work_app.events.client__GT_txs(ds,cs),work_app$events$iter__52753(cljs.core.rest(s__52754__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cm_map);
})());

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fx","fx",-1237829572),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"transact","transact",-267998670),txs,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"lines-total","lines-total",-2132996403),cljs.core.count(matter_lines),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lines-processed","lines-processed",1425313555),(0),new cljs.core.Keyword(null,"progress-visible","progress-visible",1979040181),true], 0))], null);
} else {
return null;
}
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__52744_52956,G__52745_52957,G__52746_52958) : re_posh.core.reg_event_fx.call(null,G__52744_52956,G__52745_52957,G__52746_52958));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-add-known-matter","work-app.events/time-add-known-matter",1982262937),(function (p__52758,p__52759){
var map__52760 = p__52758;
var map__52760__$1 = cljs.core.__destructure_map(map__52760);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52760__$1,new cljs.core.Keyword(null,"db","db",993250759));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52760__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var vec__52761 = p__52759;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52761,(0),null);
var vec__52764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52761,(1),null);
var client_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52764,(0),null);
var matter_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52764,(1),null);
var client_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52764,(2),null);
var matter_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52764,(3),null);
var line = vec__52764;
console.log(line);

if(cljs.core.truth_(cljs.core.some(clojure.string.blank_QMARK_,cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),line)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","log","work-app.events/log",2121905114),"Bad line"], null)], null)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_assoc_map_of.cljs$core$IFn$_invoke$arity$variadic(work_app.schema.schema_assoc_map_of(db,"time-matters",uuid,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),uuid,new cljs.core.Keyword(null,"name","name",1843675177),client_name,new cljs.core.Keyword(null,"number","number",1570378438),client_number], null)),"matter-group-map",matter_name,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),matter_name,new cljs.core.Keyword(null,"number","number",1570378438),matter_number], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [uuid], null)], null)], 0))], null);
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","time-set-cm-dropdown","work-app.events/time-set-cm-dropdown",1999180215),(function (db,p__52767){
var vec__52768 = p__52767;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52768,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52768,(1),null);
return work_app.schema.schema_assoc(db,"cm-dropdown-val",v);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.events","test","work-app.events/test",102856063),(function (p__52773,_){
var map__52774 = p__52773;
var map__52774__$1 = cljs.core.__destructure_map(map__52774);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52774__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","log","work-app.events/log",2121905114),cljs.core.str.cljs$core$IFn$_invoke$arity$1(work_app.schema.schema_next_order(db,"time-matters"))], null)], null)], null);
}));

//# sourceMappingURL=work_app.events.js.map
