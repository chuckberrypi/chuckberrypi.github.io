goog.provide('work_app.cal');
var module$node_modules$primereact$button$button_cjs=shadow.js.require("module$node_modules$primereact$button$button_cjs", {});
var module$node_modules$primereact$calendar$calendar_cjs=shadow.js.require("module$node_modules$primereact$calendar$calendar_cjs", {});
work_app.cal.date__GT_str = (function work_app$cal$date__GT_str(date){
var y = date.getFullYear();
var m = (date.getMonth() + (1));
var d = date.getDate();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(d),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('');
});
work_app.cal.cal = (function work_app$cal$cal(){
return (function (){
var cal_val = work_app.subs._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","cal-date","work-app.subs/cal-date",1315360462)], null));
var date_str = work_app.cal.date__GT_str(cal_val);
var search_str = ["sent:",date_str," OR received:",date_str].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$calendar$calendar_cjs.Calendar,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"inline","inline",1399884222),true,new cljs.core.Keyword(null,"value","value",305978217),cal_val,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__52787_SHARP_){
var G__52788 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","cal-set-date","work-app.events/cal-set-date",1953858792),p1__52787_SHARP_.value], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__52788) : work_app.events._GT_evt.call(null,G__52788));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$button$button_cjs.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Copy Date",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__52794 = (function (){var G__52796 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","copy-text","work-app.events/copy-text",-162880538),search_str], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__52796) : work_app.events._GT_evt.call(null,G__52796));
})();
var fexpr__52793 = (function (){var G__52806 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","toast","work-app.events/toast",-1762477261),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"summary","summary",380847952),search_str,new cljs.core.Keyword(null,"detail","detail",-1545345025),"copied to clipboard"], null)], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__52806) : work_app.events._GT_evt.call(null,G__52806));
})();
return (fexpr__52793.cljs$core$IFn$_invoke$arity$1 ? fexpr__52793.cljs$core$IFn$_invoke$arity$1(G__52794) : fexpr__52793.call(null,G__52794));
})], null)], null)], null);
});
});

//# sourceMappingURL=work_app.cal.js.map
