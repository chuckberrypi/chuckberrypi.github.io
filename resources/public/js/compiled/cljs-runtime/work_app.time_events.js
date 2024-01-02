goog.provide('work_app.time_events');
goog.scope(function(){
  work_app.time_events.goog$module$goog$object = goog.module.get('goog.object');
});
work_app.time_events.quot_rem = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.quot,cljs.core.mod);
work_app.time_events.order_step = (64);
work_app.time_events.log_var = (function work_app$time_events$log_var(var$){
return console.log([cljs.core.name(new cljs.core.Symbol(null,"var","var",870848730,null)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(var$)].join(''));
});
work_app.time_events.range_step = (function work_app$time_events$range_step(var_args){
var G__51787 = arguments.length;
switch (G__51787) {
case 0:
return work_app.time_events.range_step.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return work_app.time_events.range_step.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return work_app.time_events.range_step.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return work_app.time_events.range_step.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(work_app.time_events.range_step.cljs$core$IFn$_invoke$arity$0 = (function (){
return work_app.time_events.range_step.cljs$core$IFn$_invoke$arity$1((1));
}));

(work_app.time_events.range_step.cljs$core$IFn$_invoke$arity$1 = (function (step){
return work_app.time_events.range_step.cljs$core$IFn$_invoke$arity$2(step,(0));
}));

(work_app.time_events.range_step.cljs$core$IFn$_invoke$arity$2 = (function (step,start){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(start,work_app.time_events.range_step.cljs$core$IFn$_invoke$arity$2(step,(start + step)));
}),null,null));
}));

(work_app.time_events.range_step.cljs$core$IFn$_invoke$arity$3 = (function (step,start,end){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__51785_SHARP_){
return (end > p1__51785_SHARP_);
}),work_app.time_events.range_step.cljs$core$IFn$_invoke$arity$2(step,start));
}));

(work_app.time_events.range_step.cljs$lang$maxFixedArity = 3);

work_app.time_events.chunks_of_gen = (function work_app$time_events$chunks_of_gen(chunks_of){
return (function (n){
var vec__51789 = work_app.time_events.quot_rem(cljs.core.abs(n),chunks_of);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51789,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51789,(1),null);
var G__51792 = chunks_of;
var G__51792__$1 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(q,G__51792)
;
var G__51792__$2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),r))?cljs.core.cons(r,G__51792__$1):G__51792__$1);
if((n < (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51788_SHARP_){
return (- p1__51788_SHARP_);
}),G__51792__$2);
} else {
return G__51792__$2;
}
});
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.time-events","toggle-move-dialog-visible","work-app.time-events/toggle-move-dialog-visible",1646040719),(function (db,_){
return work_app.schema.schema_update(db,"move-dialog-visible",cljs.core.not);
}));
var G__51793_52071 = new cljs.core.Keyword("work-app.time-events","delete-tasks","work-app.time-events/delete-tasks",1766333016);
var G__51794_52072 = (function (_,p__51795){
var vec__51796 = p__51795;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51796,(0),null);
var t_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51796,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (tid){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retractEntity","db/retractEntity",-1452737935),tid], null);
}),t_ids)], null);
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(G__51793_52071,G__51794_52072) : re_posh.core.reg_event_fx.call(null,G__51793_52071,G__51794_52072));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.time-events","toggle-check","work-app.time-events/toggle-check",-725732796),(function (db,p__51799){
var vec__51800 = p__51799;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51800,(0),null);
var t_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51800,(1),null);
return work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"t-checked",cljs.core.not,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t_id], null)], null)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.time-events","set-selected-code","work-app.time-events/set-selected-code",1261060010),(function (db,p__51803){
var vec__51804 = p__51803;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51804,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51804,(1),null);
var c_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51804,(2),null);
return work_app.schema.schema_assoc(db,"time-selected-code-key-and-id",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,c_id], null));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("work-app.time-events","time-set-selected-date-today","work-app.time-events/time-set-selected-date-today",-420213817),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("work-app.events","now","work-app.events/now",-273029917))], null),(function (p__51807,_){
var map__51808 = p__51807;
var map__51808__$1 = cljs.core.__destructure_map(map__51808);
var now = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51808__$1,new cljs.core.Keyword(null,"now","now",-1650525531));
var year = now.getFullYear();
var month = now.getMonth();
var day = now.getDate();
var new_date = (new Date(year,month,day));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","time-set-selected-date","work-app.time-events/time-set-selected-date",1590370823),new_date], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.time-events","time-set-selected-date","work-app.time-events/time-set-selected-date",1590370823),(function (db,p__51809){
var vec__51810 = p__51809;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51810,(0),null);
var date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51810,(1),null);
return work_app.schema.schema_assoc(db,"time-selected-date",date);
}));
var G__51813_52073 = new cljs.core.Keyword("work-app.time-events","set-matter-last-active-timer","work-app.time-events/set-matter-last-active-timer",1713347100);
var G__51814_52074 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword(null,"ds","ds",-257415859)))], null);
var G__51815_52075 = (function (p__51816,p__51817){
var map__51818 = p__51816;
var map__51818__$1 = cljs.core.__destructure_map(map__51818);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51818__$1,new cljs.core.Keyword(null,"db","db",993250759));
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51818__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var vec__51819 = p__51817;
var seq__51820 = cljs.core.seq(vec__51819);
var first__51821 = cljs.core.first(seq__51820);
var seq__51820__$1 = cljs.core.next(seq__51820);
var _ = first__51821;
var first__51821__$1 = cljs.core.first(seq__51820__$1);
var seq__51820__$2 = cljs.core.next(seq__51820__$1);
var m_id = first__51821__$1;
var vec__51822 = seq__51820__$2;
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51822,(0),null);
var date = work_app.schema.schema_get(db,"time-selected-date");
var max_id = (function (){var G__51825 = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Symbol(null,"?date","?date",1958598684,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Keyword("task","date","task/date",-1460731749),new cljs.core.Symbol(null,"?date","?date",1958598684,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null)], null)], null);
var G__51826 = ds;
var G__51827 = m_id;
var G__51828 = date;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__51825,G__51826,G__51827,G__51828) : datascript.core.q.call(null,G__51825,G__51826,G__51827,G__51828));
})();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(cljs.core.truth_(val)?work_app.schema.schema_assoc.cljs$core$IFn$_invoke$arity$variadic(db,"matter-last-active-timer",val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m_id], 0)):work_app.schema.schema_assoc.cljs$core$IFn$_invoke$arity$variadic(db,"matter-last-active-timer",max_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m_id], 0)))], null);
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__51813_52073,G__51814_52074,G__51815_52075) : re_posh.core.reg_event_fx.call(null,G__51813_52073,G__51814_52074,G__51815_52075));
var G__51829_52076 = new cljs.core.Keyword("work-app.time-events","start-task-timer","work-app.time-events/start-task-timer",-621823040);
var G__51830_52077 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword(null,"ds","ds",-257415859))),(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("work-app.events","now","work-app.events/now",-273029917)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword("work-app.events","now","work-app.events/now",-273029917)))], null);
var G__51831_52078 = (function (p__51832,p__51833){
var map__51834 = p__51832;
var map__51834__$1 = cljs.core.__destructure_map(map__51834);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51834__$1,new cljs.core.Keyword(null,"db","db",993250759));
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51834__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var now = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51834__$1,new cljs.core.Keyword(null,"now","now",-1650525531));
var vec__51835 = p__51833;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51835,(0),null);
var t_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51835,(1),null);
console.log(now);

var vec__51838 = (function (){var G__51841 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m","?m",896026745,null),new cljs.core.Symbol(null,"?time","?time",67392957,null)], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m","?m",896026745,null),new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Keyword("task","time","task/time",1407463183),new cljs.core.Symbol(null,"?time","?time",67392957,null)], null)], null);
var G__51842 = ds;
var G__51843 = t_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__51841,G__51842,G__51843) : datascript.core.q.call(null,G__51841,G__51842,G__51843));
})();
var m_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51838,(0),null);
var starting_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51838,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_assoc.cljs$core$IFn$_invoke$arity$variadic(work_app.schema.schema_assoc(work_app.schema.schema_assoc(db,"active-timer-m-id",m_id),"active-timer-t-id",t_id),"matter-last-active-timer",t_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m_id], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","ticker-set-timed-event","work-app.events/ticker-set-timed-event",-1815171530),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"active-timer","active-timer",-1826303330),new cljs.core.Keyword(null,"interval","interval",1708495417),(1),new cljs.core.Keyword(null,"task-id","task-id",-1045480126),t_id,new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","task-tick","work-app.time-events/task-tick",-1878100393),t_id,now,starting_time], null)], null)], null)], null)], null)], null);
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__51829_52076,G__51830_52077,G__51831_52078) : re_posh.core.reg_event_fx.call(null,G__51829_52076,G__51830_52077,G__51831_52078));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.time-events","stop-task-timer","work-app.time-events/stop-task-timer",9551465),(function (p__51844,_){
var map__51845 = p__51844;
var map__51845__$1 = cljs.core.__destructure_map(map__51845);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51845__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(work_app.schema.schema_assoc(work_app.schema.schema_assoc(db,"active-timer-m-id",false),"active-timer-t-id",false),"ticker-tasks",cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn-args","fn-args",-2034521192),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-timer","active-timer",-1826303330)], null)], null)], 0))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.time-events","set-draggable","work-app.time-events/set-draggable",634084823),(function (p__51847,p__51848){
var map__51849 = p__51847;
var map__51849__$1 = cljs.core.__destructure_map(map__51849);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51849__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51850 = p__51848;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51850,(0),null);
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51850,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51850,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_assoc.cljs$core$IFn$_invoke$arity$variadic(db,"draggable",val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eid], 0))], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.time-events","set-edit-mode","work-app.time-events/set-edit-mode",-1320911621),(function (db,p__51854){
var vec__51855 = p__51854;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51855,(0),null);
var codes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51855,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51855,(2),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,v){
return work_app.schema.schema_assoc.cljs$core$IFn$_invoke$arity$variadic(acc,"code-edit-mode",val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),db,codes);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.time-events","toggle-code-edit","work-app.time-events/toggle-code-edit",1359246626),(function (db,p__51864){
var vec__51865 = p__51864;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51865,(0),null);
var c_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51865,(1),null);
return work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"code-edit-mode",cljs.core.not,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_id], null)], null)], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.time-events","time-task-slider-lock-toggle","work-app.time-events/time-task-slider-lock-toggle",-767637872),(function (p__51868,p__51869){
var map__51870 = p__51868;
var map__51870__$1 = cljs.core.__destructure_map(map__51870);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51870__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51871 = p__51869;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51871,(0),null);
var t_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51871,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),work_app.schema.schema_update.cljs$core$IFn$_invoke$arity$variadic(db,"t-slider-locked",cljs.core.not,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sub-args","sub-args",-1973611866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t_id], null)], null)], 0))], null);
}));
work_app.time_events.candidates_to_tx = (function work_app$time_events$candidates_to_tx(candidates,delta){
var candidates_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(v),v);
}),cljs.core.PersistentArrayMap.EMPTY,candidates);
var G__51878 = work_app.time_events.chunks_of_gen((360))(delta);
var vec__51879 = G__51878;
var seq__51880 = cljs.core.seq(vec__51879);
var first__51881 = cljs.core.first(seq__51880);
var seq__51880__$1 = cljs.core.next(seq__51880);
var d_first = first__51881;
var d_rest = seq__51880__$1;
var cand_map = candidates_map;
var changed = cljs.core.PersistentHashSet.EMPTY;
var G__51878__$1 = G__51878;
var cand_map__$1 = cand_map;
var changed__$1 = changed;
while(true){
var vec__51894 = G__51878__$1;
var seq__51895 = cljs.core.seq(vec__51894);
var first__51896 = cljs.core.first(seq__51895);
var seq__51895__$1 = cljs.core.next(seq__51895);
var d_first__$1 = first__51896;
var d_rest__$1 = seq__51895__$1;
var cand_map__$2 = cand_map__$1;
var changed__$2 = changed__$1;
var target_task = (function (){var G__51898 = cand_map__$2;
var G__51898__$1 = cljs.core.vals(G__51898)
;
var G__51898__$2 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882),G__51898__$1)
;
var G__51898__$3 = (((d_first__$1 > (0)))?cljs.core.reverse(G__51898__$2):G__51898__$2);
var G__51898__$4 = (((delta > (0)))?cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(((function (G__51878__$1,cand_map__$1,changed__$1,G__51898,G__51898__$1,G__51898__$2,G__51898__$3,vec__51894,seq__51895,first__51896,seq__51895__$1,d_first__$1,d_rest__$1,cand_map__$2,changed__$2,G__51878,vec__51879,seq__51880,first__51881,seq__51880__$1,d_first,d_rest,cand_map,changed,candidates_map){
return (function (t){
return (new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(t) < (1));
});})(G__51878__$1,cand_map__$1,changed__$1,G__51898,G__51898__$1,G__51898__$2,G__51898__$3,vec__51894,seq__51895,first__51896,seq__51895__$1,d_first__$1,d_rest__$1,cand_map__$2,changed__$2,G__51878,vec__51879,seq__51880,first__51881,seq__51880__$1,d_first,d_rest,cand_map,changed,candidates_map))
,G__51898__$3):G__51898__$3);
return cljs.core.first(G__51898__$4);

})();
var new_time = (new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(target_task) - d_first__$1);
if((((d_first__$1 == null)) || ((((target_task == null)) || (((0) > new_time)))))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__51878__$1,cand_map__$1,changed__$1,target_task,new_time,vec__51894,seq__51895,first__51896,seq__51895__$1,d_first__$1,d_rest__$1,cand_map__$2,changed__$2,G__51878,vec__51879,seq__51880,first__51881,seq__51880__$1,d_first,d_rest,cand_map,changed,candidates_map){
return (function (p__51903){
var map__51904 = p__51903;
var map__51904__$1 = cljs.core.__destructure_map(map__51904);
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51904__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51904__$1,new cljs.core.Keyword(null,"time","time",1385887882));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e,new cljs.core.Keyword("task","time","task/time",1407463183),time], null);
});})(G__51878__$1,cand_map__$1,changed__$1,target_task,new_time,vec__51894,seq__51895,first__51896,seq__51895__$1,d_first__$1,d_rest__$1,cand_map__$2,changed__$2,G__51878,vec__51879,seq__51880,first__51881,seq__51880__$1,d_first,d_rest,cand_map,changed,candidates_map))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__51878__$1,cand_map__$1,changed__$1,target_task,new_time,vec__51894,seq__51895,first__51896,seq__51895__$1,d_first__$1,d_rest__$1,cand_map__$2,changed__$2,G__51878,vec__51879,seq__51880,first__51881,seq__51880__$1,d_first,d_rest,cand_map,changed,candidates_map){
return (function (p1__51874_SHARP_){
var G__51905 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(p1__51874_SHARP_);
return (changed__$2.cljs$core$IFn$_invoke$arity$1 ? changed__$2.cljs$core$IFn$_invoke$arity$1(G__51905) : changed__$2.call(null,G__51905));
});})(G__51878__$1,cand_map__$1,changed__$1,target_task,new_time,vec__51894,seq__51895,first__51896,seq__51895__$1,d_first__$1,d_rest__$1,cand_map__$2,changed__$2,G__51878,vec__51879,seq__51880,first__51881,seq__51880__$1,d_first,d_rest,cand_map,changed,candidates_map))
,cljs.core.vals(cand_map__$2)));
} else {
var G__52081 = d_rest__$1;
var G__52082 = cljs.core.assoc_in(cand_map__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(target_task),new cljs.core.Keyword(null,"time","time",1385887882)], null),Math.round(new_time));
var G__52083 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(changed__$2,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(target_task));
G__51878__$1 = G__52081;
cand_map__$1 = G__52082;
changed__$1 = G__52083;
continue;
}
break;
}
});
work_app.time_events.time_filter = (function work_app$time_events$time_filter(delt,time){
if((delt > (0))){
return (delt <= time);
} else {
return true;
}
});
var G__51907_52084 = new cljs.core.Keyword("work-app.time-events","slider-change-locked-ds","work-app.time-events/slider-change-locked-ds",-1234641690);
var G__51908_52085 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword(null,"ds","ds",-257415859)))], null);
var G__51909_52086 = (function (p__51910,p__51911){
var map__51912 = p__51910;
var map__51912__$1 = cljs.core.__destructure_map(map__51912);
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51912__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51912__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51913 = p__51911;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51913,(0),null);
var map__51916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51913,(1),null);
var map__51916__$1 = cljs.core.__destructure_map(map__51916);
var t_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51916__$1,new cljs.core.Keyword(null,"t-id","t-id",647334507));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51916__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var unlocked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51916__$1,new cljs.core.Keyword(null,"unlocked","unlocked",-1647242955));
var task = (datascript.core.entity.cljs$core$IFn$_invoke$arity$2 ? datascript.core.entity.cljs$core$IFn$_invoke$arity$2(ds,t_id) : datascript.core.entity.call(null,ds,t_id));
var delta = (time - new cljs.core.Keyword("task","time","task/time",1407463183).cljs$core$IFn$_invoke$arity$1(task));
var recipient_ids = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__51906_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t_id,p1__51906_SHARP_);
}),unlocked);
var recipients = (function (){var G__51917 = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?time","?time",67392957,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"time","time",-1268547887,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Symbol(null,"?delt","?delt",463197883,null),new cljs.core.Symbol(null,"?t-filter","?t-filter",2146081495,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("task","time","task/time",1407463183),new cljs.core.Symbol(null,"?time","?time",67392957,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"?t-filter","?t-filter",2146081495,null),new cljs.core.Symbol(null,"?delt","?delt",463197883,null),new cljs.core.Symbol(null,"?time","?time",67392957,null))], null)], null);
var G__51918 = ds;
var G__51919 = recipient_ids;
var G__51920 = delta;
var G__51921 = work_app.time_events.time_filter;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$5 ? datascript.core.q.cljs$core$IFn$_invoke$arity$5(G__51917,G__51918,G__51919,G__51920,G__51921) : datascript.core.q.call(null,G__51917,G__51918,G__51919,G__51920,G__51921));
})();
var recipient_total_time = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882),recipients));
var transactions = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),t_id,new cljs.core.Keyword("task","time","task/time",1407463183),Math.round(time)], null)], null),work_app.time_events.candidates_to_tx(recipients,delta));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fx","fx",-1237829572),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"transact","transact",-267998670),(((((recipient_total_time < delta)) || ((cljs.core.count(recipients) < (1)))))?cljs.core.PersistentVector.EMPTY:transactions)], null);
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__51907_52084,G__51908_52085,G__51909_52086) : re_posh.core.reg_event_fx.call(null,G__51907_52084,G__51908_52085,G__51909_52086));
var G__51922_52087 = new cljs.core.Keyword("work-app.time-events","time-set-task-time-ds","work-app.time-events/time-set-task-time-ds",991078336);
var G__51923_52088 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword(null,"ds","ds",-257415859)))], null);
var G__51924_52089 = (function (p__51925,p__51926){
var map__51927 = p__51925;
var map__51927__$1 = cljs.core.__destructure_map(map__51927);
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51927__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var vec__51928 = p__51926;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51928,(0),null);
var map__51931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51928,(1),null);
var map__51931__$1 = cljs.core.__destructure_map(map__51931);
var t_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51931__$1,new cljs.core.Keyword(null,"t-id","t-id",647334507));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51931__$1,new cljs.core.Keyword(null,"time","time",1385887882));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),t_id,new cljs.core.Keyword("task","time","task/time",1407463183),Math.round(time)], null)], null)], null);
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__51922_52087,G__51923_52088,G__51924_52089) : re_posh.core.reg_event_fx.call(null,G__51922_52087,G__51923_52088,G__51924_52089));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("work-app.time-events","task-tick","work-app.time-events/task-tick",-1878100393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword(null,"ds","ds",-257415859))),(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("work-app.events","now","work-app.events/now",-273029917)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword("work-app.events","now","work-app.events/now",-273029917)))], null),(function (p__51933,p__51934){
var map__51936 = p__51933;
var map__51936__$1 = cljs.core.__destructure_map(map__51936);
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51936__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var now = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51936__$1,new cljs.core.Keyword(null,"now","now",-1650525531));
var vec__51937 = p__51934;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51937,(0),null);
var t_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51937,(1),null);
var start_timer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51937,(2),null);
var original_time = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51937,(3),null);
var pull_result = (function (){var G__51940 = ds;
var G__51941 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","time","task/time",1407463183)], null);
var G__51942 = t_id;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__51940,G__51941,G__51942) : datascript.core.pull.call(null,G__51940,G__51941,G__51942));
})();
var old_time = new cljs.core.Keyword("task","time","task/time",1407463183).cljs$core$IFn$_invoke$arity$1(pull_result);
var delt = Math.round(((now - start_timer) / (1000)));
var new_time = (original_time + delt);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),t_id,new cljs.core.Keyword("task","time","task/time",1407463183),new_time], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.time-events","set-dragged-task","work-app.time-events/set-dragged-task",104057141),(function (db,p__51945){
var vec__51946 = p__51945;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51946,(0),null);
var t_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51946,(1),null);
return work_app.schema.schema_assoc(db,"dragged-task",t_id);
}));
var G__51949_52105 = new cljs.core.Keyword("work-app.time-events","task-drop","work-app.time-events/task-drop",-647386245);
var G__51950_52106 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword(null,"ds","ds",-257415859)))], null);
var G__51951_52107 = (function (p__51952,p__51953){
var map__51954 = p__51952;
var map__51954__$1 = cljs.core.__destructure_map(map__51954);
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51954__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51954__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51955 = p__51953;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51955,(0),null);
var dropped_on = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51955,(1),null);
var dragged_over_position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51955,(2),null);
var temp__5802__auto__ = work_app.schema.schema_get(db,"dragged-task");
if(cljs.core.truth_(temp__5802__auto__)){
var dragged = temp__5802__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","insert-task-after-or-before","work-app.time-events/insert-task-after-or-before",-1032312742),dragged,dropped_on,(0.5 < dragged_over_position)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","log","work-app.events/log",2121905114),["dragged: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dragged),"\ndropped-on: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dropped_on)].join('')], null)], null)], null);
} else {
return null;
}
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__51949_52105,G__51950_52106,G__51951_52107) : re_posh.core.reg_event_fx.call(null,G__51949_52105,G__51950_52106,G__51951_52107));
work_app.time_events.get_mid_by_tid = (function work_app$time_events$get_mid_by_tid(ds,t_id){
var G__51958 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?mid","?mid",-615418358,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?mid","?mid",-615418358,null),new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null)], null)], null);
var G__51959 = ds;
var G__51960 = t_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__51958,G__51959,G__51960) : datascript.core.q.call(null,G__51958,G__51959,G__51960));
});
work_app.time_events.get_sib_tasks_and_orders = (function work_app$time_events$get_sib_tasks_and_orders(ds,t_id){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"order","order",-1254677256),(function (){var G__51961 = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Symbol(null,"order","order",385854271,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Keyword("task","date","task/date",-1460731749),new cljs.core.Symbol(null,"?date","?date",1958598684,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword("task","date","task/date",-1460731749),new cljs.core.Symbol(null,"?date","?date",1958598684,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Keyword("task","code","task/code",-1647928303),new cljs.core.Symbol(null,"?code","?code",-1914511368,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword("task","code","task/code",-1647928303),new cljs.core.Symbol(null,"?code","?code",-1914511368,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword("task","order","task/order",-1270804365),new cljs.core.Symbol(null,"?order","?order",2076500391,null)], null)], null);
var G__51962 = ds;
var G__51963 = t_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__51961,G__51962,G__51963) : datascript.core.q.call(null,G__51961,G__51962,G__51963));
})());
});
work_app.time_events.re_order_txs = (function work_app$time_events$re_order_txs(t_id,index,sibs){
var beg = cljs.core.take.cljs$core$IFn$_invoke$arity$2(index,sibs);
var end = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(index,sibs);
var new_raw = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(beg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eid","eid",559519930),t_id], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([end], 0));
var txs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__51966){
var map__51967 = p__51966;
var map__51967__$1 = cljs.core.__destructure_map(map__51967);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51967__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var eid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51967__$1,new cljs.core.Keyword(null,"eid","eid",559519930));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("task","order","task/order",-1270804365),order], null);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__51964_SHARP_,p2__51965_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51964_SHARP_,new cljs.core.Keyword(null,"order","order",-1254677256),p2__51965_SHARP_);
}),new_raw,work_app.time_events.range_step.cljs$core$IFn$_invoke$arity$1(work_app.time_events.order_step)));
return txs;
});
var G__51968_52119 = new cljs.core.Keyword("work-app.time-events","insert-task-after-or-before","work-app.time-events/insert-task-after-or-before",-1032312742);
var G__51969_52120 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword(null,"ds","ds",-257415859)))], null);
var G__51970_52121 = (function (p__51971,p__51972){
var map__51973 = p__51971;
var map__51973__$1 = cljs.core.__destructure_map(map__51973);
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51973__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51973__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__51974 = p__51972;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51974,(0),null);
var dragged = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51974,(1),null);
var dropped_on = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51974,(2),null);
var after_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51974,(3),null);
var map__51977 = (function (){var G__51978 = ds;
var G__51979 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("matter","_tasks","matter/_tasks",890577674),new cljs.core.Keyword("task","order","task/order",-1270804365),new cljs.core.Keyword("task","code","task/code",-1647928303),new cljs.core.Keyword("task","date","task/date",-1460731749)], null);
var G__51980 = dropped_on;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__51978,G__51979,G__51980) : datascript.core.pull.call(null,G__51978,G__51979,G__51980));
})();
var map__51977__$1 = cljs.core.__destructure_map(map__51977);
var dropped_on_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51977__$1,new cljs.core.Keyword("task","order","task/order",-1270804365));
var dropped_on_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51977__$1,new cljs.core.Keyword("task","code","task/code",-1647928303));
var dropped_on_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51977__$1,new cljs.core.Keyword("task","date","task/date",-1460731749));
var dropped_on_m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51977__$1,new cljs.core.Keyword("matter","_tasks","matter/_tasks",890577674));
var dropped_on_mid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(dropped_on_m);
var dragged_mid = work_app.time_events.get_mid_by_tid(ds,dragged);
var sibs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__51981){
var map__51982 = p__51981;
var map__51982__$1 = cljs.core.__destructure_map(map__51982);
var eid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51982__$1,new cljs.core.Keyword(null,"eid","eid",559519930));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(eid,dragged);
}),work_app.time_events.get_sib_tasks_and_orders(ds,dropped_on));
var index = cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p__51983){
var map__51984 = p__51983;
var map__51984__$1 = cljs.core.__destructure_map(map__51984);
var o = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51984__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var fexpr__51985 = (cljs.core.truth_(after_QMARK_)?cljs.core._GT__EQ_:cljs.core._GT_);
return (fexpr__51985.cljs$core$IFn$_invoke$arity$2 ? fexpr__51985.cljs$core$IFn$_invoke$arity$2(dropped_on_order,o) : fexpr__51985.call(null,dropped_on_order,o));
}),sibs));
var txs = work_app.time_events.re_order_txs(dragged,index,sibs);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),dragged_mid,new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),dragged], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),dropped_on_mid,new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),dragged], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),dragged,new cljs.core.Keyword("task","code","task/code",-1647928303),dropped_on_code], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),dragged,new cljs.core.Keyword("task","date","task/date",-1460731749),dropped_on_date], null)], null),txs)], null);
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__51968_52119,G__51969_52120,G__51970_52121) : re_posh.core.reg_event_fx.call(null,G__51968_52119,G__51969_52120,G__51970_52121));
var G__51986_52140 = new cljs.core.Keyword("work-app.time-events","re-order-above","work-app.time-events/re-order-above",235436790);
var G__51987_52141 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword(null,"ds","ds",-257415859)))], null);
var G__51988_52142 = (function (p__51989,p__51990){
var map__51991 = p__51989;
var map__51991__$1 = cljs.core.__destructure_map(map__51991);
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51991__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var vec__51992 = p__51990;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51992,(0),null);
var above = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51992,(1),null);
var eids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51992,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","log","work-app.events/log",2121905114),["re-order-above: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(above),cljs.core.str.cljs$core$IFn$_invoke$arity$1(eids)].join('')], null)], null),new cljs.core.Keyword(null,"transact","transact",-267998670),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (order,eid){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("task","order","task/order",-1270804365),order], null);
}),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),work_app.time_events.range_step.cljs$core$IFn$_invoke$arity$2(work_app.time_events.order_step,above)),eids)], null);
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__51986_52140,G__51987_52141,G__51988_52142) : re_posh.core.reg_event_fx.call(null,G__51986_52140,G__51987_52141,G__51988_52142));
var G__51995_52147 = new cljs.core.Keyword("work-app.time-events","add-task","work-app.time-events/add-task",-1474107965);
var G__51996_52148 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword(null,"ds","ds",-257415859)))], null);
var G__51997_52149 = (function (p__51998,p__51999){
var map__52000 = p__51998;
var map__52000__$1 = cljs.core.__destructure_map(map__52000);
var cofx = map__52000__$1;
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52000__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52000__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52001 = p__51999;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52001,(0),null);
var map__52004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52001,(1),null);
var map__52004__$1 = cljs.core.__destructure_map(map__52004);
var args = map__52004__$1;
var start_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52004__$1,new cljs.core.Keyword(null,"start?","start?",1440714206),false);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52004__$1,new cljs.core.Keyword(null,"description","description",-1428560544),"");
var matter_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52004__$1,new cljs.core.Keyword(null,"matter-id","matter-id",914791808));
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52004__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var task_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52004__$1,new cljs.core.Keyword(null,"task-id","task-id",-1045480126));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52004__$1,new cljs.core.Keyword(null,"time","time",1385887882),(1));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52004__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52004__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52004__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var default_c = (function (){var G__52005 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"?c-id","?c-id",348274086,null)),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword("matter","codes","matter/codes",371309178),new cljs.core.Symbol(null,"?c-id","?c-id",348274086,null)], null)], null);
var G__52006 = ds;
var G__52007 = matter_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__52005,G__52006,G__52007) : datascript.core.q.call(null,G__52005,G__52006,G__52007));
})();
var new_t_id = (new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(ds) + (1));
var new_order = (function (){var or__5045__auto__ = order;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = (work_app.time_events.order_step + (function (){var G__52008 = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null)),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Symbol(null,"?date","?date",1958598684,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Keyword("task","date","task/date",-1460731749),new cljs.core.Symbol(null,"?date","?date",1958598684,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Keyword("task","order","task/order",-1270804365),new cljs.core.Symbol(null,"?order","?order",2076500391,null)], null)], null);
var G__52009 = ds;
var G__52010 = matter_id;
var G__52011 = date;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__52008,G__52009,G__52010,G__52011) : datascript.core.q.call(null,G__52008,G__52009,G__52010,G__52011));
})());
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return ((10) * new_t_id);
}
}
})();
var new_matter_order_vec = new cljs.core.Keyword("matter","order-vec","matter/order-vec",-1982086893).cljs$core$IFn$_invoke$arity$1((function (){var G__52012 = ds;
var G__52013 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("matter","order-vec","matter/order-vec",-1982086893)], null);
var G__52014 = matter_id;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__52012,G__52013,G__52014) : datascript.core.pull.call(null,G__52012,G__52013,G__52014));
})());
var new_task = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("db","id","db/id",-1388397098),new_t_id,new cljs.core.Keyword("task","time","task/time",1407463183),time,new cljs.core.Keyword("task","date","task/date",-1460731749),date,new cljs.core.Keyword("task","code","task/code",-1647928303),(function (){var or__5045__auto__ = c;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = default_c;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return "0";
}
}
})(),new cljs.core.Keyword("task","description","task/description",-1431594219),description,new cljs.core.Keyword("task","order","task/order",-1270804365),new_order], null);
console.log(["new-task: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_task)].join(''));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),matter_id,new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new_t_id], null),new_task], null),new cljs.core.Keyword(null,"fx","fx",-1237829572),(cljs.core.truth_(start_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","start-task-timer","work-app.time-events/start-task-timer",-621823040),new_t_id], null)], null)], null):cljs.core.PersistentVector.EMPTY)], null);
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__51995_52147,G__51996_52148,G__51997_52149) : re_posh.core.reg_event_fx.call(null,G__51995_52147,G__51996_52148,G__51997_52149));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.time-events","check-tasks","work-app.time-events/check-tasks",-1428636900),(function (db,p__52015){
var vec__52016 = p__52015;
var seq__52017 = cljs.core.seq(vec__52016);
var first__52018 = cljs.core.first(seq__52017);
var seq__52017__$1 = cljs.core.next(seq__52017);
var _ = first__52018;
var first__52018__$1 = cljs.core.first(seq__52017__$1);
var seq__52017__$2 = cljs.core.next(seq__52017__$1);
var t_ids = first__52018__$1;
var uncheck_QMARK_ = seq__52017__$2;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,v){
return work_app.schema.schema_assoc.cljs$core$IFn$_invoke$arity$variadic(acc,"t-checked",cljs.core.not(uncheck_QMARK_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),db,t_ids);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("work-app.time-events","set-drag-over-position","work-app.time-events/set-drag-over-position",-1548603921),(function (db,p__52019){
var vec__52020 = p__52019;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52020,(0),null);
var t_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52020,(1),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52020,(2),null);
return work_app.schema.schema_assoc.cljs$core$IFn$_invoke$arity$variadic(db,"drag-over-position",pos,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([t_id], 0));
}));
var G__52023_52170 = new cljs.core.Keyword("work-app.time-events","add-task-after","work-app.time-events/add-task-after",2127952524);
var G__52024_52171 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword(null,"ds","ds",-257415859))),(re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("work-app.events","uuid","work-app.events/uuid",-364894821)) : re_posh.core.inject_cofx.call(null,new cljs.core.Keyword("work-app.events","uuid","work-app.events/uuid",-364894821)))], null);
var G__52025_52172 = (function (p__52026,p__52027){
var map__52028 = p__52026;
var map__52028__$1 = cljs.core.__destructure_map(map__52028);
var cofx = map__52028__$1;
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52028__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52028__$1,new cljs.core.Keyword(null,"db","db",993250759));
var uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52028__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var vec__52029 = p__52027;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52029,(0),null);
var map__52032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52029,(1),null);
var map__52032__$1 = cljs.core.__destructure_map(map__52032);
var before_t_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52032__$1,new cljs.core.Keyword(null,"before-t-id","before-t-id",-1386353354));
var start_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52032__$1,new cljs.core.Keyword(null,"start?","start?",1440714206));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52032__$1,new cljs.core.Keyword(null,"description","description",-1428560544),"");
var map__52033 = (function (){var G__52037 = ds;
var G__52038 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("task","code","task/code",-1647928303),new cljs.core.Keyword("task","order","task/order",-1270804365),new cljs.core.Keyword("task","date","task/date",-1460731749),new cljs.core.Keyword("matter","_tasks","matter/_tasks",890577674)], null);
var G__52039 = before_t_id;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__52037,G__52038,G__52039) : datascript.core.pull.call(null,G__52037,G__52038,G__52039));
})();
var map__52033__$1 = cljs.core.__destructure_map(map__52033);
var before_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52033__$1,new cljs.core.Keyword("task","code","task/code",-1647928303));
var before_order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52033__$1,new cljs.core.Keyword("task","order","task/order",-1270804365));
var before_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52033__$1,new cljs.core.Keyword("task","date","task/date",-1460731749));
var matter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52033__$1,new cljs.core.Keyword("matter","_tasks","matter/_tasks",890577674));
var m_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(matter);
var later_tasks = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,(function (){var G__52040 = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?t-id-prev","?t-id-prev",-1373845222,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new cljs.core.Symbol(null,"?t-id-prev","?t-id-prev",-1373845222,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t-id-prev","?t-id-prev",-1373845222,null),new cljs.core.Keyword("task","date","task/date",-1460731749),new cljs.core.Symbol(null,"?date","?date",1958598684,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Keyword("task","order","task/order",-1270804365),new cljs.core.Symbol(null,"?order","?order",2076500391,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t-id-prev","?t-id-prev",-1373845222,null),new cljs.core.Keyword("task","order","task/order",-1270804365),new cljs.core.Symbol(null,"?old-order","?old-order",-821109617,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?m-id","?m-id",-160111202,null),new cljs.core.Keyword("matter","tasks","matter/tasks",-658763313),new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?t-id","?t-id",426715900,null),new cljs.core.Keyword("task","date","task/date",-1460731749),new cljs.core.Symbol(null,"?date","?date",1958598684,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"?old-order","?old-order",-821109617,null),new cljs.core.Symbol(null,"?order","?order",2076500391,null))], null)], null);
var G__52041 = ds;
var G__52042 = before_t_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__52040,G__52041,G__52042) : datascript.core.q.call(null,G__52040,G__52041,G__52042));
})());
var vec__52034 = cljs.core.first(later_tasks);
var next_eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52034,(0),null);
var order_above = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52034,(1),null);
var delt = (order_above - before_order);
var re_order_above = ((2) > delt);
var next_order = ((re_order_above)?(before_order + work_app.time_events.order_step):(before_order + Math.ceil((delt / (2)))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","add-task","work-app.time-events/add-task",-1474107965),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"matter-id","matter-id",914791808),m_id,new cljs.core.Keyword(null,"date","date",-1463434462),before_date,new cljs.core.Keyword(null,"description","description",-1428560544),description,new cljs.core.Keyword(null,"time","time",1385887882),(1),new cljs.core.Keyword(null,"order","order",-1254677256),(before_order + (1)),new cljs.core.Keyword(null,"c","c",-1763192079),before_code,new cljs.core.Keyword(null,"start?","start?",1440714206),start_QMARK_], null)], null)], null)], null),new cljs.core.Keyword(null,"transact","transact",-267998670),((re_order_above)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = (function work_app$time_events$iter__52043(s__52044){
return (new cljs.core.LazySeq(null,(function (){
var s__52044__$1 = s__52044;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__52044__$1);
if(temp__5804__auto__){
var s__52044__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52044__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__52044__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__52046 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__52045 = (0);
while(true){
if((i__52045 < size__5522__auto__)){
var vec__52047 = cljs.core._nth(c__5521__auto__,i__52045);
var t_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52047,(0),null);
var new_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52047,(1),null);
cljs.core.chunk_append(b__52046,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),t_id,new cljs.core.Keyword("task","order","task/order",-1270804365),new_order], null));

var G__52187 = (i__52045 + (1));
i__52045 = G__52187;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52046),work_app$time_events$iter__52043(cljs.core.chunk_rest(s__52044__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52046),null);
}
} else {
var vec__52050 = cljs.core.first(s__52044__$2);
var t_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52050,(0),null);
var new_order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52050,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),t_id,new cljs.core.Keyword("task","order","task/order",-1270804365),new_order], null),work_app$time_events$iter__52043(cljs.core.rest(s__52044__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p__52053,no){
var vec__52054 = p__52053;
var t_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52054,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52054,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t_id,no], null);
}),later_tasks,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),work_app.time_events.range_step.cljs$core$IFn$_invoke$arity$2(work_app.time_events.order_step,next_order))));
})()):cljs.core.PersistentVector.EMPTY)], null);
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__52023_52170,G__52024_52171,G__52025_52172) : re_posh.core.reg_event_fx.call(null,G__52023_52170,G__52024_52171,G__52025_52172));
var G__52057_52188 = new cljs.core.Keyword("work-app.time-events","task-set-desc","work-app.time-events/task-set-desc",-583941228);
var G__52058_52189 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ds","ds",-257415859))], null);
var G__52059_52190 = (function (p__52060,p__52061){
var map__52062 = p__52060;
var map__52062__$1 = cljs.core.__destructure_map(map__52062);
var ds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52062__$1,new cljs.core.Keyword(null,"ds","ds",-257415859));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52062__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__52063 = p__52061;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52063,(0),null);
var map__52066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52063,(1),null);
var map__52066__$1 = cljs.core.__destructure_map(map__52066);
var task_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52066__$1,new cljs.core.Keyword(null,"task-id","task-id",-1045480126));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52066__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transact","transact",-267998670),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),task_id,new cljs.core.Keyword("task","description","task/description",-1431594219),desc], null)], null)], null);
});
(re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3 ? re_posh.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(G__52057_52188,G__52058_52189,G__52059_52190) : re_posh.core.reg_event_fx.call(null,G__52057_52188,G__52058_52189,G__52059_52190));

//# sourceMappingURL=work_app.time_events.js.map
