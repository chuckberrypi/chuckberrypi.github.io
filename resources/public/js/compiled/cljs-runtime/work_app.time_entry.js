goog.provide('work_app.time_entry');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$primereact$accordion$accordion_cjs=shadow.js.require("module$node_modules$primereact$accordion$accordion_cjs", {});
var module$node_modules$primereact$button$button_cjs=shadow.js.require("module$node_modules$primereact$button$button_cjs", {});
var module$node_modules$primereact$calendar$calendar_cjs=shadow.js.require("module$node_modules$primereact$calendar$calendar_cjs", {});
var module$node_modules$primereact$checkbox$checkbox_cjs=shadow.js.require("module$node_modules$primereact$checkbox$checkbox_cjs", {});
var module$node_modules$primereact$dialog$dialog_cjs=shadow.js.require("module$node_modules$primereact$dialog$dialog_cjs", {});
var module$node_modules$primereact$divider$divider_cjs=shadow.js.require("module$node_modules$primereact$divider$divider_cjs", {});
var module$node_modules$primereact$dropdown$dropdown_cjs=shadow.js.require("module$node_modules$primereact$dropdown$dropdown_cjs", {});
var module$node_modules$primereact$inplace$inplace_cjs=shadow.js.require("module$node_modules$primereact$inplace$inplace_cjs", {});
var module$node_modules$primereact$inputnumber$inputnumber_cjs=shadow.js.require("module$node_modules$primereact$inputnumber$inputnumber_cjs", {});
var module$node_modules$primereact$inputtext$inputtext_cjs=shadow.js.require("module$node_modules$primereact$inputtext$inputtext_cjs", {});
var module$node_modules$primereact$inputtextarea$inputtextarea_cjs=shadow.js.require("module$node_modules$primereact$inputtextarea$inputtextarea_cjs", {});
var module$node_modules$primereact$menu$menu_cjs=shadow.js.require("module$node_modules$primereact$menu$menu_cjs", {});
var module$node_modules$primereact$multistatecheckbox$multistatecheckbox_cjs=shadow.js.require("module$node_modules$primereact$multistatecheckbox$multistatecheckbox_cjs", {});
var module$node_modules$primereact$panel$panel_cjs=shadow.js.require("module$node_modules$primereact$panel$panel_cjs", {});
var module$node_modules$primereact$progressspinner$progressspinner_cjs=shadow.js.require("module$node_modules$primereact$progressspinner$progressspinner_cjs", {});
var module$node_modules$primereact$radiobutton$radiobutton_cjs=shadow.js.require("module$node_modules$primereact$radiobutton$radiobutton_cjs", {});
var module$node_modules$primereact$scrollpanel$scrollpanel_cjs=shadow.js.require("module$node_modules$primereact$scrollpanel$scrollpanel_cjs", {});
var module$node_modules$primereact$slider$slider_cjs=shadow.js.require("module$node_modules$primereact$slider$slider_cjs", {});
var module$node_modules$primereact$speeddial$speeddial_cjs=shadow.js.require("module$node_modules$primereact$speeddial$speeddial_cjs", {});
var module$node_modules$primereact$splitbutton$splitbutton_cjs=shadow.js.require("module$node_modules$primereact$splitbutton$splitbutton_cjs", {});
var module$node_modules$primereact$toolbar$toolbar_cjs=shadow.js.require("module$node_modules$primereact$toolbar$toolbar_cjs", {});
var module$node_modules$primereact$tree$tree_cjs=shadow.js.require("module$node_modules$primereact$tree$tree_cjs", {});
var module$node_modules$primereact$treeselect$treeselect_cjs=shadow.js.require("module$node_modules$primereact$treeselect$treeselect_cjs", {});
var module$node_modules$primereact$tieredmenu$tieredmenu_cjs=shadow.js.require("module$node_modules$primereact$tieredmenu$tieredmenu_cjs", {});
work_app.time_entry.task_slider_ds = (function work_app$time_entry$task_slider_ds(p__53351){
var map__53352 = p__53351;
var map__53352__$1 = cljs.core.__destructure_map(map__53352);
var t_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53352__$1,new cljs.core.Keyword(null,"t-id","t-id",647334507));
var unlocked_tids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53352__$1,new cljs.core.Keyword(null,"unlocked-tids","unlocked-tids",-322813333));
var group_locked_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53352__$1,new cljs.core.Keyword(null,"group-locked?","group-locked?",-281023299));
var map__53354 = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","pull-entity","work-app.subs/pull-entity",-1783949093),t_id], null));
var map__53354__$1 = cljs.core.__destructure_map(map__53354);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53354__$1,new cljs.core.Keyword("task","description","task/description",-1431594219));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53354__$1,new cljs.core.Keyword("task","time","task/time",1407463183));
var tenths = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","time-tenths","work-app.time-subs/time-tenths",-456068459),t_id], null));
var locked = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","t-slider-locked","work-app.subs/t-slider-locked",1751403348),t_id], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$panel$panel_cjs.Panel,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(locked)?"pi pi-lock":"pi pi-lock-open"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"5px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__53357 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","time-task-slider-lock-toggle","work-app.time-events/time-task-slider-lock-toggle",-767637872),t_id], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53357) : work_app.events._GT_evt.call(null,G__53357));
})], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tenths),")"].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$slider$slider_cjs.Slider,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),tenths,new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(10),new cljs.core.Keyword(null,"step","step",1288888124),0.1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),locked,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__53347_SHARP_){
var secs = Math.round(((3600) * p1__53347_SHARP_.value));
if(cljs.core.truth_(group_locked_QMARK_)){
var G__53362 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","slider-change-locked-ds","work-app.time-events/slider-change-locked-ds",-1234641690),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t-id","t-id",647334507),t_id,new cljs.core.Keyword(null,"time","time",1385887882),secs,new cljs.core.Keyword(null,"unlocked","unlocked",-1647242955),unlocked_tids], null)], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53362) : work_app.events._GT_evt.call(null,G__53362));
} else {
var G__53364 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","time-set-task-time-ds","work-app.time-events/time-set-task-time-ds",991078336),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"t-id","t-id",647334507),t_id,new cljs.core.Keyword(null,"time","time",1385887882),secs], null)], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53364) : work_app.events._GT_evt.call(null,G__53364));
}
})], null)], null)], null)], null);
});
work_app.time_entry.task_ds_new = (function work_app$time_entry$task_ds_new(t_id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["ID: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t_id)].join('')], null);
});
work_app.time_entry.task_ds = (function work_app$time_entry$task_ds(_){
var bouncer = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (t_id){
var map__53376 = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","pull-entity","work-app.subs/pull-entity",-1783949093),t_id], null));
var map__53376__$1 = cljs.core.__destructure_map(map__53376);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53376__$1,new cljs.core.Keyword("task","description","task/description",-1431594219));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53376__$1,new cljs.core.Keyword("task","time","task/time",1407463183));
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53376__$1,new cljs.core.Keyword("task","order","task/order",-1270804365));
var vec__53377 = module$node_modules$react$index.useState(description);
var name_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53377,(0),null);
var set_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53377,(1),null);
var m_id = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","m-id-by-t-id","work-app.time-subs/m-id-by-t-id",-621914733),t_id], null));
var checked = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","t-checked","work-app.subs/t-checked",-244046952),t_id], null));
var timer_active_QMARK_ = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","timer-active?","work-app.time-subs/timer-active?",329501450),t_id], null));
var task_matter = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","m-id-by-t-id","work-app.time-subs/m-id-by-t-id",-621914733),t_id], null));
var default_task = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","default-next-task-timer","work-app.time-subs/default-next-task-timer",-1734515123),task_matter], null));
var timer_is_default_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t_id,default_task);
var already_focused = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","t-already-focused","work-app.subs/t-already-focused",1403951896),t_id], null));
var tenths = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","time-tenths","work-app.time-subs/time-tenths",-456068459),t_id], null));
var time_string = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","time-string","work-app.time-subs/time-string",2110865332),t_id], null));
var draggable = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","draggable","work-app.subs/draggable",1935668599),t_id], null));
var dragging_QMARK_ = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","dragging?","work-app.time-subs/dragging?",-244001800),t_id], null));
var dragged_task = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","dragged-task","work-app.subs/dragged-task",-1833010780)], null));
var dragged_over_position = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","drag-over-position","work-app.subs/drag-over-position",1239170817),t_id], null));
var class$ = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dfs-task",(cljs.core.truth_(dragging_QMARK_)?"dfs-dragging":null)], null));
var dragged_over_class = (cljs.core.truth_(dragged_over_position)?(((dragged_over_position < 0.5))?"dfs-drop-target-top":"dfs-drop-target-bottom"):null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"draggable","draggable",1676206163),draggable,new cljs.core.Keyword(null,"id","id",-1388402092),t_id,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),(function (){
var G__53380 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","set-dragged-task","work-app.time-events/set-dragged-task",104057141),t_id], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53380) : work_app.events._GT_evt.call(null,G__53380));
}),new cljs.core.Keyword(null,"on-drag-end","on-drag-end",520272671),(function (p1__53366_SHARP_){
p1__53366_SHARP_.preventDefault();

var G__53381_53621 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","set-draggable","work-app.time-events/set-draggable",634084823),t_id,false], null);
(work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53381_53621) : work_app.events._GT_evt.call(null,G__53381_53621));

var G__53382_53622 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","set-dragged-task","work-app.time-events/set-dragged-task",104057141),false], null);
(work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53382_53622) : work_app.events._GT_evt.call(null,G__53382_53622));

return console.log("Drag End");
}),new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),(function (e){
e.preventDefault();

var bounding_rect = e.target.getBoundingClientRect();
var relative_pos = ((e.clientY - bounding_rect.top) / bounding_rect.height);
var G__53389 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","set-drag-over-position","work-app.time-events/set-drag-over-position",-1548603921),t_id,relative_pos], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53389) : work_app.events._GT_evt.call(null,G__53389));
}),new cljs.core.Keyword(null,"on-drag-leave","on-drag-leave",-373180078),(function (){
var G__53392 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","set-drag-over-position","work-app.time-events/set-drag-over-position",-1548603921),t_id,false], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53392) : work_app.events._GT_evt.call(null,G__53392));
}),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),(function (p1__53367_SHARP_){
var G__53394_53626 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","task-drop","work-app.time-events/task-drop",-647386245),t_id,dragged_over_position,p1__53367_SHARP_], null);
(work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53394_53626) : work_app.events._GT_evt.call(null,G__53394_53626));

var G__53395 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","set-drag-over-position","work-app.time-events/set-drag-over-position",-1548603921),t_id,false], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53395) : work_app.events._GT_evt.call(null,G__53395));
})], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["dfs-edit-task-container ",dragged_over_class].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"pi pi-bars cursor-pointer ",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (){
var G__53396 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","set-draggable","work-app.time-events/set-draggable",634084823),t_id,true], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53396) : work_app.events._GT_evt.call(null,G__53396));
}),new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),(function (){
var G__53399 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","set-draggable","work-app.time-events/set-draggable",634084823),t_id,false], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53399) : work_app.events._GT_evt.call(null,G__53399));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$checkbox$checkbox_cjs.Checkbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"4px"], null),new cljs.core.Keyword(null,"checked","checked",-50955819),checked,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
var G__53401 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","toggle-check","work-app.time-events/toggle-check",-725732796),t_id], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53401) : work_app.events._GT_evt.call(null,G__53401));
})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$button$button_cjs.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["dfs-button ",(cljs.core.truth_((function (){var or__5045__auto__ = timer_is_default_QMARK_;
if(or__5045__auto__){
return or__5045__auto__;
} else {
return timer_active_QMARK_;
}
})())?"p-button-info":null)].join(''),new cljs.core.Keyword(null,"icon","icon",1679606541),(cljs.core.truth_(timer_active_QMARK_)?"":"pi pi-clock"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__53406 = (cljs.core.truth_(timer_active_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","stop-task-timer","work-app.time-events/stop-task-timer",9551465)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","start-task-timer","work-app.time-events/start-task-timer",-621823040),t_id], null));
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53406) : work_app.events._GT_evt.call(null,G__53406));
})], null),(cljs.core.truth_(timer_active_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$progressspinner$progressspinner_cjs.ProgressSpinner,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"height","height",1025178622),"20px",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null)], null)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$inputtext$inputtext_cjs.InputText,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"class","class",-2030961996),"dfs-task-input-text",new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (p1__53369_SHARP_){
return console.log(p1__53369_SHARP_);
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__53370_SHARP_){
var v = p1__53370_SHARP_.target.value;
var debo = setTimeout((function (){
var G__53409 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","task-set-desc","work-app.time-events/task-set-desc",-583941228),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"task-id","task-id",-1045480126),t_id,new cljs.core.Keyword(null,"desc","desc",2093485764),v], null)], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53409) : work_app.events._GT_evt.call(null,G__53409));
}),(2000));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(bouncer,(function (old_debo){
clearTimeout(old_debo);

return debo;
}));

return (set_name.cljs$core$IFn$_invoke$arity$1 ? set_name.cljs$core$IFn$_invoke$arity$1(v) : set_name.call(null,v));
}),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5045__auto__ = name_val;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"matterid","matterid",-110456507),m_id,new cljs.core.Keyword(null,"taskid","taskid",-1308712014),t_id,new cljs.core.Keyword(null,"targettype","targettype",531509346),"task-text-input",new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__53371_SHARP_){
var G__53410 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","focus-task-if-new","work-app.events/focus-task-if-new",1777666214),t_id,p1__53371_SHARP_], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53410) : work_app.events._GT_evt.call(null,G__53410));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$inputnumber$inputnumber_cjs.InputNumber,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"show-buttons","show-buttons",1922203430),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"min-fraction-digits","min-fraction-digits",-1394316717),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"max-fraction-digits","max-fraction-digits",-185733995),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"step","step",1288888124)],[timer_active_QMARK_,true,tenths,"decimal",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90px"], null),(1),"dfs-time-num-input",(1),(function (p1__53372_SHARP_){
var G__53411 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","time-set-task-time-ds","work-app.time-events/time-set-task-time-ds",991078336),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"t-id","t-id",647334507),t_id,new cljs.core.Keyword(null,"time","time",1385887882),Math.round(((p1__53372_SHARP_.value * (60)) * (60)))], null)], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53411) : work_app.events._GT_evt.call(null,G__53411));
}),0.1])], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(timer_active_QMARK_)?"dfs-task-time-str":"dfs-task-time-str-hidden")], null),["   ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(time_string)].join('')], null)], null);
});
});
work_app.time_entry.task_span = (function work_app$time_entry$task_span(t_id){
var map__53420 = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","pull-entity","work-app.subs/pull-entity",-1783949093),t_id], null));
var map__53420__$1 = cljs.core.__destructure_map(map__53420);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53420__$1,new cljs.core.Keyword("task","description","task/description",-1431594219));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53420__$1,new cljs.core.Keyword("task","time","task/time",1407463183));
var m_id = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","m-id-by-t-id","work-app.time-subs/m-id-by-t-id",-621914733),t_id], null));
var task_matter = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","m-id-by-t-id","work-app.time-subs/m-id-by-t-id",-621914733),t_id], null));
var timer_is_default_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t_id,work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","default-next-task-timer","work-app.time-subs/default-next-task-timer",-1734515123),task_matter], null)));
var timer_active_QMARK_ = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","timer-active?","work-app.time-subs/timer-active?",329501450),t_id], null));
var already_focused = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","t-already-focused","work-app.subs/t-already-focused",1403951896),t_id], null));
var tenths = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","time-tenths","work-app.time-subs/time-tenths",-456068459),t_id], null));
var time_string = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","time-string","work-app.time-subs/time-string",2110865332),t_id], null));
var draggable = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","draggable","work-app.subs/draggable",1935668599),t_id], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__53439 = (cljs.core.truth_(timer_active_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","stop-task-timer","work-app.time-events/stop-task-timer",9551465)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","start-task-timer","work-app.time-events/start-task-timer",-621823040),t_id], null));
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53439) : work_app.events._GT_evt.call(null,G__53439));
})], null),(cljs.core.truth_(timer_active_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$progressspinner$progressspinner_cjs.ProgressSpinner,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__53440 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","stop-task-timer","work-app.time-events/stop-task-timer",9551465),t_id], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53440) : work_app.events._GT_evt.call(null,G__53440));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"margin","margin",-995903681),"4px",new cljs.core.Keyword(null,"height","height",1025178622),"20px",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"middle"], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pi pi-clock dfs-inplace-button"], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"dfs-task-span-description",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),((timer_is_default_QMARK_)?"underline":" ")], null)], null),description], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[". (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tenths),")"].join('')], null)], null);
});
work_app.time_entry.slider_dialog = (function work_app$time_entry$slider_dialog(p__53442){
var map__53443 = p__53442;
var map__53443__$1 = cljs.core.__destructure_map(map__53443);
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53443__$1,new cljs.core.Keyword(null,"header","header",119441134));
var t_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53443__$1,new cljs.core.Keyword(null,"t-ids","t-ids",51005329));
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53443__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
var task_tenths = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","tasks-tenths","work-app.time-subs/tasks-tenths",1318390594),t_ids], null));
var locked = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","slider-dialog-locked","work-app.subs/slider-dialog-locked",-538647722),parent_id], null));
var map__53444 = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","locked-unlocked-tids","work-app.time-subs/locked-unlocked-tids",-134177289),t_ids], null));
var map__53444__$1 = cljs.core.__destructure_map(map__53444);
var locked_tids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53444__$1,true);
var unlocked_tids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53444__$1,false);
var dialog_visible = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","slider-dialog-visible","work-app.subs/slider-dialog-visible",122307784),parent_id], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$dialog$dialog_cjs.Dialog,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"header","header",119441134),header,new cljs.core.Keyword(null,"visible","visible",-1024216805),dialog_visible,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"70%"], null),new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),(function (){
var G__53446 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","gen-toggle-slider-dialog-visible","work-app.events/gen-toggle-slider-dialog-visible",1495620060),parent_id], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53446) : work_app.events._GT_evt.call(null,G__53446));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"5px"], null),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(locked)?"pi pi-lock":"pi pi-lock-open"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__53448 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","slider-dialog-toggle-lock","work-app.events/slider-dialog-toggle-lock",287995487),parent_id], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53448) : work_app.events._GT_evt.call(null,G__53448));
})], null)], null),["Total: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(task_tenths)].join('')], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function work_app$time_entry$slider_dialog_$_iter__53449(s__53450){
return (new cljs.core.LazySeq(null,(function (){
var s__53450__$1 = s__53450;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__53450__$1);
if(temp__5804__auto__){
var s__53450__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53450__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__53450__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__53452 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__53451 = (0);
while(true){
if((i__53451 < size__5522__auto__)){
var t = cljs.core._nth(c__5521__auto__,i__53451);
cljs.core.chunk_append(b__53452,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_app.time_entry.task_slider_ds,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t-id","t-id",647334507),t,new cljs.core.Keyword(null,"group-locked?","group-locked?",-281023299),locked,new cljs.core.Keyword(null,"unlocked-tids","unlocked-tids",-322813333),unlocked_tids], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)));

var G__53636 = (i__53451 + (1));
i__53451 = G__53636;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53452),work_app$time_entry$slider_dialog_$_iter__53449(cljs.core.chunk_rest(s__53450__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53452),null);
}
} else {
var t = cljs.core.first(s__53450__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_app.time_entry.task_slider_ds,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"t-id","t-id",647334507),t,new cljs.core.Keyword(null,"group-locked?","group-locked?",-281023299),locked,new cljs.core.Keyword(null,"unlocked-tids","unlocked-tids",-322813333),unlocked_tids], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)),work_app$time_entry$slider_dialog_$_iter__53449(cljs.core.rest(s__53450__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(t_ids);
})())], null);
});
work_app.time_entry.code_group = (function work_app$time_entry$code_group(m_id,c_id,t_ids){
var code_text = new cljs.core.Keyword("code","label","code/label",1716728861).cljs$core$IFn$_invoke$arity$1(work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","pull-entity","work-app.subs/pull-entity",-1783949093),c_id], null)));
var code_collapsed = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","collapsed","work-app.subs/collapsed",-1436370399),c_id], null));
var code_string = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","tasks-string","work-app.time-subs/tasks-string",980473230),t_ids], null));
var code_group_id = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m_id,c_id], null);
var sliders_visible = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","code-slider-visible","work-app.subs/code-slider-visible",-127433101),code_group_id], null));
var code_checked = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","tasks-filter-checked","work-app.time-subs/tasks-filter-checked",-207106157),t_ids], null));
var code_tenths = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","tasks-tenths","work-app.time-subs/tasks-tenths",1318390594),t_ids], null));
var code_str = [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code_text)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code_tenths),")"].join('');
var edit_mode = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","code-edit-mode","work-app.subs/code-edit-mode",1415576489),c_id], null));
var active_t_id = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","active-timer-t-id","work-app.subs/active-timer-t-id",1088511530)], null));
var dragged_task = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","dragged-task","work-app.subs/dragged-task",-1833010780)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"50px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_app.time_entry.slider_dialog,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",119441134),code_text,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),code_group_id,new cljs.core.Keyword(null,"t-ids","t-ids",51005329),t_ids], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"dfs-h3",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margine","margine",-1550893780),"0px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["dfs-chevron ",(cljs.core.truth_(code_collapsed)?"pi pi-chevron-right":"pi pi-chevron-down")].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__53460 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","toggle-collapsed","work-app.events/toggle-collapsed",263531408),c_id], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53460) : work_app.events._GT_evt.call(null,G__53460));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$splitbutton$splitbutton_cjs.SplitButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),"pi pi-plus",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(code_collapsed)){
var G__53462_53637 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","toggle-collapsed","work-app.events/toggle-collapsed",263531408),c_id], null);
(work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53462_53637) : work_app.events._GT_evt.call(null,G__53462_53637));
} else {
}

var G__53463 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","add-task","work-app.time-events/add-task",-1474107965),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"matter-id","matter-id",914791808),m_id,new cljs.core.Keyword(null,"c","c",-1763192079),c_id], null)], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53463) : work_app.events._GT_evt.call(null,G__53463));
}),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Adjust",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Test",new cljs.core.Keyword(null,"icon","icon",1679606541),"pi pi-stop"], null)], null),new cljs.core.Keyword(null,"icon","icon",1679606541),"pi pi-sliders-h",new cljs.core.Keyword(null,"command","command",-894540724),(function (){
var G__53464 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","gen-toggle-slider-dialog-visible","work-app.events/gen-toggle-slider-dialog-visible",1495620060),code_group_id], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53464) : work_app.events._GT_evt.call(null,G__53464));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Copy",new cljs.core.Keyword(null,"icon","icon",1679606541),"pi pi-copy",new cljs.core.Keyword(null,"command","command",-894540724),(function (){
var G__53465 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","copy-text","work-app.events/copy-text",-162880538),code_string], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53465) : work_app.events._GT_evt.call(null,G__53465));
})], null)], null)], null)], null),code_str], null)], null),(cljs.core.truth_(code_collapsed)?((((0) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (el){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,active_t_id);
}),t_ids))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_app.time_entry.task_span,active_t_id], null):null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px"], null)], null),(cljs.core.truth_(edit_mode)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-10"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"pi pi-list",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"3px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__53466 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","toggle-code-edit","work-app.time-events/toggle-code-edit",1359246626),c_id], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53466) : work_app.events._GT_evt.call(null,G__53466));
})], null)], null),(function (){var iter__5523__auto__ = (function work_app$time_entry$code_group_$_iter__53467(s__53468){
return (new cljs.core.LazySeq(null,(function (){
var s__53468__$1 = s__53468;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__53468__$1);
if(temp__5804__auto__){
var s__53468__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53468__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__53468__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__53470 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__53469 = (0);
while(true){
if((i__53469 < size__5522__auto__)){
var t = cljs.core._nth(c__5521__auto__,i__53469);
cljs.core.chunk_append(b__53470,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_app.time_entry.task_span,t], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)));

var G__53638 = (i__53469 + (1));
i__53469 = G__53638;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53470),work_app$time_entry$code_group_$_iter__53467(cljs.core.chunk_rest(s__53468__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53470),null);
}
} else {
var t = cljs.core.first(s__53468__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_app.time_entry.task_span,t], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)),work_app$time_entry$code_group_$_iter__53467(cljs.core.rest(s__53468__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(t_ids);
})()], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-10"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"pi pi-eye",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"3px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__53477 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","toggle-code-edit","work-app.time-events/toggle-code-edit",1359246626),c_id], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53477) : work_app.events._GT_evt.call(null,G__53477));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$multistatecheckbox$multistatecheckbox_cjs.MultiStateCheckbox,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"some",new cljs.core.Keyword(null,"icon","icon",1679606541),"pi pi-minus"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"all",new cljs.core.Keyword(null,"icon","icon",1679606541),"pi pi-check"], null)], null),new cljs.core.Keyword(null,"option-value","option-value",1273906863),"value",new cljs.core.Keyword(null,"value","value",305978217),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(code_checked),cljs.core.count(t_ids)))?"all":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(code_checked)))?false:"some"
)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
var G__53478 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(code_checked),cljs.core.count(t_ids)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","check-tasks","work-app.time-events/check-tasks",-1428636900),t_ids,new cljs.core.Keyword(null,"uncheck","uncheck",-1978442633)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","check-tasks","work-app.time-events/check-tasks",-1428636900),t_ids], null));
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53478) : work_app.events._GT_evt.call(null,G__53478));
})], null)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function work_app$time_entry$code_group_$_iter__53479(s__53480){
return (new cljs.core.LazySeq(null,(function (){
var s__53480__$1 = s__53480;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__53480__$1);
if(temp__5804__auto__){
var s__53480__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53480__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__53480__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__53482 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__53481 = (0);
while(true){
if((i__53481 < size__5522__auto__)){
var t = cljs.core._nth(c__5521__auto__,i__53481);
cljs.core.chunk_append(b__53482,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),work_app.time_entry.task_ds,t], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)));

var G__53639 = (i__53481 + (1));
i__53481 = G__53639;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53482),work_app$time_entry$code_group_$_iter__53479(cljs.core.chunk_rest(s__53480__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53482),null);
}
} else {
var t = cljs.core.first(s__53480__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),work_app.time_entry.task_ds,t], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),t], null)),work_app$time_entry$code_group_$_iter__53479(cljs.core.rest(s__53480__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(t_ids);
})())], null))], null))], null);
});
work_app.time_entry.matter_ds_old = (function work_app$time_entry$matter_ds_old(m_id,matters_tasks_on_date){
var total_time_tenths = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","time-matter-total-time","work-app.time-subs/time-matter-total-time",868316818),m_id], null));
var cm_num_str = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","cm-number-str","work-app.time-subs/cm-number-str",71461370),m_id], null));
var cm_name = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","cm-name","work-app.time-subs/cm-name",-124291299),m_id], null));
var task_codes = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","task-codes","work-app.time-subs/task-codes",-210921290),m_id], null));
var all_matter_code_eids = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","selected-date-matters-codes","work-app.time-subs/selected-date-matters-codes",-781673312)], null));
var matters_and_codes = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keys(matters_tasks_on_date),cljs.core.keys(task_codes)], null));
var map__53486 = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","expanded-map","work-app.time-subs/expanded-map",-815348655),matters_and_codes], null));
var map__53486__$1 = cljs.core.__destructure_map(map__53486);
var expando_map = map__53486__$1;
var expanded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53486__$1,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
var collapsed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53486__$1,new cljs.core.Keyword(null,"collapsed","collapsed",-628494523));
var active_QMARK_ = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","matter-active?","work-app.time-subs/matter-active?",-895143736),m_id], null));
var default_timer = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","default-next-task-timer","work-app.time-subs/default-next-task-timer",-1734515123),m_id], null));
var checked_tasks = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","matter-checked-tasks-ds","work-app.time-subs/matter-checked-tasks-ds",-2098680594),m_id], null));
var matter_collapsed = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","collapsed","work-app.subs/collapsed",-1436370399),m_id], null));
var active_timer_t_id = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","active-timer-t-id","work-app.subs/active-timer-t-id",1088511530)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["task-codes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(task_codes)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["matters-and-codes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(matters_and_codes)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"dfs-h3",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0px",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"padding","padding",1660304693),"4px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["dfs-chevron ",(cljs.core.truth_(matter_collapsed)?"pi pi-chevron-right":"pi pi-chevron-down")].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__53488 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","toggle-collapsed","work-app.events/toggle-collapsed",263531408),m_id], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53488) : work_app.events._GT_evt.call(null,G__53488));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$button$button_cjs.Button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"icon","icon",1679606541),"pi pi-clock",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"4px"], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(default_timer),new cljs.core.Keyword(null,"class","class",-2030961996),["dfs-button ",(cljs.core.truth_(active_QMARK_)?"p-button-info":"p-button")].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__53489 = (cljs.core.truth_(active_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","stop-task-timer","work-app.time-events/stop-task-timer",9551465)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","start-task-timer","work-app.time-events/start-task-timer",-621823040),default_timer], null));
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53489) : work_app.events._GT_evt.call(null,G__53489));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cm_name),"     (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_time_tenths),") "].join('')], null),null], null)], null),((cljs.core.not(matter_collapsed))?cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function work_app$time_entry$matter_ds_old_$_iter__53490(s__53491){
return (new cljs.core.LazySeq(null,(function (){
var s__53491__$1 = s__53491;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__53491__$1);
if(temp__5804__auto__){
var s__53491__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53491__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__53491__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__53493 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__53492 = (0);
while(true){
if((i__53492 < size__5522__auto__)){
var vec__53494 = cljs.core._nth(c__5521__auto__,i__53492);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53494,(0),null);
var tasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53494,(1),null);
cljs.core.chunk_append(b__53493,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_app.time_entry.code_group,m_id,code,cljs.core.vec(tasks)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),code], null)));

var G__53640 = (i__53492 + (1));
i__53492 = G__53640;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53493),work_app$time_entry$matter_ds_old_$_iter__53490(cljs.core.chunk_rest(s__53491__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53493),null);
}
} else {
var vec__53498 = cljs.core.first(s__53491__$2);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53498,(0),null);
var tasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53498,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_app.time_entry.code_group,m_id,code,cljs.core.vec(tasks)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),code], null)),work_app$time_entry$matter_ds_old_$_iter__53490(cljs.core.rest(s__53491__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(task_codes));
})()):(cljs.core.truth_(active_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_app.time_entry.task_span,active_timer_t_id], null):null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_app.time_entry.slider_dialog,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",119441134),"Sliders",new cljs.core.Keyword(null,"t-ids","t-ids",51005329),checked_tasks,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),m_id], null)], null)], null);
});
work_app.time_entry.matter_ds = (function work_app$time_entry$matter_ds(m_id,t_ids){
var total_time_tenths = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","time-matter-total-time","work-app.time-subs/time-matter-total-time",868316818),m_id], null));
var cm_name = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","cm-name","work-app.time-subs/cm-name",-124291299),m_id], null));
var task_codes = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","task-codes","work-app.time-subs/task-codes",-210921290),m_id], null));
var tasks = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","pull-entities","work-app.subs/pull-entities",-1870530034),t_ids], null));
var tasks_by_code = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","tasks-by-code","work-app.time-subs/tasks-by-code",-1349429199),t_ids], null));
var non_code_tasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tasks_by_code,null);
var active_QMARK_ = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","matter-active?","work-app.time-subs/matter-active?",-895143736),m_id], null));
var default_timer = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","default-next-task-timer","work-app.time-subs/default-next-task-timer",-1734515123),m_id], null));
var checked_tasks = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","checked-tasks","work-app.time-subs/checked-tasks",-639759814),t_ids], null));
var matter_collapsed = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","collapsed","work-app.subs/collapsed",-1436370399),m_id], null));
var active_timer_t_id = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","active-timer-t-id","work-app.subs/active-timer-t-id",1088511530)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"dfs-h3",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0px",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"padding","padding",1660304693),"4px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["dfs-chevron ",(cljs.core.truth_(matter_collapsed)?"pi pi-chevron-right":"pi pi-chevron-down")].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__53506 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","toggle-collapsed","work-app.events/toggle-collapsed",263531408),m_id], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53506) : work_app.events._GT_evt.call(null,G__53506));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$button$button_cjs.Button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"icon","icon",1679606541),"pi pi-clock",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"4px"], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(default_timer),new cljs.core.Keyword(null,"class","class",-2030961996),["dfs-button ",(cljs.core.truth_(active_QMARK_)?"p-button-info":"p-button")].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__53507 = (cljs.core.truth_(active_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","stop-task-timer","work-app.time-events/stop-task-timer",9551465)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","start-task-timer","work-app.time-events/start-task-timer",-621823040),default_timer], null));
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53507) : work_app.events._GT_evt.call(null,G__53507));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cm_name),"     (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_time_tenths),") "].join('')], null)], null)], null),((cljs.core.not(matter_collapsed))?cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function work_app$time_entry$matter_ds_$_iter__53508(s__53509){
return (new cljs.core.LazySeq(null,(function (){
var s__53509__$1 = s__53509;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__53509__$1);
if(temp__5804__auto__){
var s__53509__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53509__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__53509__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__53511 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__53510 = (0);
while(true){
if((i__53510 < size__5522__auto__)){
var vec__53512 = cljs.core._nth(c__5521__auto__,i__53510);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53512,(0),null);
var tasks__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53512,(1),null);
cljs.core.chunk_append(b__53511,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_app.time_entry.code_group,m_id,code,cljs.core.vec(tasks__$1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),code], null)));

var G__53641 = (i__53510 + (1));
i__53510 = G__53641;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53511),work_app$time_entry$matter_ds_$_iter__53508(cljs.core.chunk_rest(s__53509__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53511),null);
}
} else {
var vec__53515 = cljs.core.first(s__53509__$2);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53515,(0),null);
var tasks__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53515,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_app.time_entry.code_group,m_id,code,cljs.core.vec(tasks__$1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),code], null)),work_app$time_entry$matter_ds_$_iter__53508(cljs.core.rest(s__53509__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(task_codes));
})()):(cljs.core.truth_(active_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_app.time_entry.task_span,active_timer_t_id], null):null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_app.time_entry.slider_dialog,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",119441134),"Sliders",new cljs.core.Keyword(null,"t-ids","t-ids",51005329),checked_tasks,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),m_id], null)], null)], null);
});
work_app.time_entry.key__GT_code_id = (function work_app$time_entry$key__GT_code_id(code_opts,key){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (opt){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(opt));
}),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.tree_seq(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,new cljs.core.Keyword(null,"leaf","leaf",1306118732)),new cljs.core.Keyword(null,"children","children",-940561982),x);
}),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(code_opts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)))))));
});
work_app.time_entry.move_dialog_task = (function work_app$time_entry$move_dialog_task(t_id){
var map__53520 = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","pull-entity","work-app.subs/pull-entity",-1783949093),t_id], null));
var map__53520__$1 = cljs.core.__destructure_map(map__53520);
var t = map__53520__$1;
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53520__$1,new cljs.core.Keyword("task","description","task/description",-1431594219));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$checkbox$checkbox_cjs.Checkbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","t-checked","work-app.subs/t-checked",-244046952),t_id], null)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
var G__53521 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","toggle-check","work-app.time-events/toggle-check",-725732796),t_id], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53521) : work_app.events._GT_evt.call(null,G__53521));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),description], null)], null)], null);
});
work_app.time_entry.move_dialog = (function work_app$time_entry$move_dialog(checked){
var visible = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","move-dialog-visible","work-app.subs/move-dialog-visible",-798684953)], null));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$dialog$dialog_cjs.Dialog,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"header","header",119441134),"Confirm",new cljs.core.Keyword(null,"visible","visible",-1024216805),visible,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"70%"], null),new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),(function (){
var G__53522 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","toggle-move-dialog-visible","work-app.time-events/toggle-move-dialog-visible",1646040719)], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53522) : work_app.events._GT_evt.call(null,G__53522));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Howdyhowdyhowdy"], null),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"div","div",1057191632),["checked: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(checked)].join('')],null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Move: "], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function work_app$time_entry$move_dialog_$_iter__53524(s__53525){
return (new cljs.core.LazySeq(null,(function (){
var s__53525__$1 = s__53525;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__53525__$1);
if(temp__5804__auto__){
var s__53525__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53525__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__53525__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__53527 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__53526 = (0);
while(true){
if((i__53526 < size__5522__auto__)){
var c = cljs.core._nth(c__5521__auto__,i__53526);
cljs.core.chunk_append(b__53527,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_app.time_entry.move_dialog_task,c], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null)));

var G__53642 = (i__53526 + (1));
i__53526 = G__53642;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53527),work_app$time_entry$move_dialog_$_iter__53524(cljs.core.chunk_rest(s__53525__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53527),null);
}
} else {
var c = cljs.core.first(s__53525__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_app.time_entry.move_dialog_task,c], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null)),work_app$time_entry$move_dialog_$_iter__53524(cljs.core.rest(s__53525__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(checked);
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$button$button_cjs.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Update",new cljs.core.Keyword(null,"icon","icon",1679606541),"pi pi-refresh"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$button$button_cjs.Button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Delete",new cljs.core.Keyword(null,"severity","severity",175684886),"danger",new cljs.core.Keyword(null,"icon","icon",1679606541),"pi pi-times"], null)], null)], null)], null);
});
work_app.time_entry.time_entry = (function work_app$time_entry$time_entry(){
var date = (function (){var or__5045__auto__ = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","time-selected-date","work-app.subs/time-selected-date",1257549244)], null));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__53552 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","time-set-selected-date-today","work-app.time-events/time-set-selected-date-today",-420213817)], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53552) : work_app.events._GT_evt.call(null,G__53552));
}
})();
var cm_opts = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","client-matter-opts","work-app.time-subs/client-matter-opts",-1305920262)], null));
var selected_m_id = (function (){var or__5045__auto__ = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","cm-dropdown-val","work-app.subs/cm-dropdown-val",-506889652)], null));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var G__53556 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","time-set-cm-dropdown","work-app.events/time-set-cm-dropdown",1999180215),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cm_opts))], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53556) : work_app.events._GT_evt.call(null,G__53556));
}
})();
var code_opts = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.matter-subs","matter-code-menu-opts","work-app.matter-subs/matter-code-menu-opts",1660266215),selected_m_id], null));
var clj_code_opts = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(code_opts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var all_matter_code_eids = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","selected-date-matters-codes","work-app.time-subs/selected-date-matters-codes",-781673312)], null));
var default_code = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","default-key-and-code","work-app.time-subs/default-key-and-code",1039652816),selected_m_id], null));
var vec__53546 = (function (){var or__5045__auto__ = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.subs","time-selected-code-key-and-id","work-app.subs/time-selected-code-key-and-id",-688504090)], null));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","default-key-and-code","work-app.time-subs/default-key-and-code",1039652816),selected_m_id], null));
}
})();
var selected_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53546,(0),null);
var selected_code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53546,(1),null);
var matters_tasks_on_date = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","matter->task-selected-date","work-app.time-subs/matter->task-selected-date",-192750831)], null));
var task_codes_all = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","task-codes","work-app.time-subs/task-codes",-210921290),cljs.core.keys(matters_tasks_on_date)], null));
var matters_and_codes = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keys(matters_tasks_on_date),cljs.core.keys(task_codes_all)], null));
var checked_on_date = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","checked-on-date","work-app.time-subs/checked-on-date",1505814923)], null));
var map__53549 = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","expanded-map","work-app.time-subs/expanded-map",-815348655),matters_and_codes], null));
var map__53549__$1 = cljs.core.__destructure_map(map__53549);
var expando_map = map__53549__$1;
var expanded = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53549__$1,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
var collapsed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53549__$1,new cljs.core.Keyword(null,"collapsed","collapsed",-628494523));
var codes_in_edit_mode = work_app.shared._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-subs","codes-in-edit-mode","work-app.time-subs/codes-in-edit-mode",896383755)], null));
var edit_mode = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(task_codes_all),cljs.core.count(codes_in_edit_mode));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_app.time_entry.move_dialog,checked_on_date], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$button$button_cjs.Button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Action!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__53560 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","toggle-move-dialog-visible","work-app.time-events/toggle-move-dialog-visible",1646040719)], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53560) : work_app.events._GT_evt.call(null,G__53560));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [work_app.time_entry.slider_dialog,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",119441134),"Checked",new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),"time-entry",new cljs.core.Keyword(null,"t-ids","t-ids",51005329),checked_on_date], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$calendar$calendar_cjs.Calendar,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),date,new cljs.core.Keyword(null,"show-icon","show-icon",-455907784),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__53534_SHARP_){
var G__53561 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","time-set-selected-date","work-app.time-events/time-set-selected-date",1590370823),p1__53534_SHARP_.value], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53561) : work_app.events._GT_evt.call(null,G__53561));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"show-button-bar","show-button-bar",-1563561994),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$dropdown$dropdown_cjs.Dropdown,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"options","options",99638489),cm_opts,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"value","value",305978217),selected_m_id,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__53535_SHARP_){
var G__53562_53643 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","set-matter-selected-code","work-app.events/set-matter-selected-code",-1003669201),selected_m_id,false], null);
(work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53562_53643) : work_app.events._GT_evt.call(null,G__53562_53643));

var G__53565 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","time-set-cm-dropdown","work-app.events/time-set-cm-dropdown",1999180215),p1__53535_SHARP_.value], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53565) : work_app.events._GT_evt.call(null,G__53565));
}),new cljs.core.Keyword(null,"filter","filter",-948537934),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$treeselect$treeselect_cjs.TreeSelect,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"options","options",99638489),code_opts,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"filter","filter",-948537934),true,new cljs.core.Keyword(null,"value","value",305978217),selected_key,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__53536_SHARP_){
var key = p1__53536_SHARP_.value;
var c_id = work_app.time_entry.key__GT_code_id(code_opts,key);
var G__53567_53644 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","set-selected-code","work-app.time-events/set-selected-code",1261060010),key,c_id], null);
(work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53567_53644) : work_app.events._GT_evt.call(null,G__53567_53644));

var G__53568_53645 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","log","work-app.events/log",2121905114),["code-id: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(work_app.time_entry.key__GT_code_id(code_opts,p1__53536_SHARP_.value))].join('')], null);
(work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53568_53645) : work_app.events._GT_evt.call(null,G__53568_53645));

var G__53570 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","log","work-app.events/log",2121905114),p1__53536_SHARP_.value], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53570) : work_app.events._GT_evt.call(null,G__53570));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$button$button_cjs.Button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon","icon",1679606541),"pi pi-plus",new cljs.core.Keyword(null,"label","label",1718410804),"Task",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2px",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
console.log(["selected-m-id: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selected_m_id)].join(''));

console.log(["selected-code: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selected_code)].join(''));

var G__53573 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","add-task","work-app.time-events/add-task",-1474107965),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"matter-id","matter-id",914791808),selected_m_id,new cljs.core.Keyword(null,"date","date",-1463434462),date,new cljs.core.Keyword(null,"c","c",-1763192079),selected_code], null)], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53573) : work_app.events._GT_evt.call(null,G__53573));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$primereact$splitbutton$splitbutton_cjs.SplitButton,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),"Action",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(cljs.core.count(checked_on_date) < (1)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"2px",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__53574 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","toggle-move-dialog-visible","work-app.time-events/toggle-move-dialog-visible",1646040719)], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53574) : work_app.events._GT_evt.call(null,G__53574));
}),new cljs.core.Keyword(null,"model","model",331153215),cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),"pi pi-directions",new cljs.core.Keyword(null,"label","label",1718410804),"Move Checked",new cljs.core.Keyword(null,"command","command",-894540724),(function (){
var G__53578 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","move-tasks","work-app.events/move-tasks",-2118494196),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tids","tids",-1783124481),checked_on_date,new cljs.core.Keyword(null,"code","code",1586293142),selected_code,new cljs.core.Keyword(null,"m-id","m-id",1795173264),selected_m_id], null)], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53578) : work_app.events._GT_evt.call(null,G__53578));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),"pi pi-sliders-h",new cljs.core.Keyword(null,"label","label",1718410804),"Adjust Checked",new cljs.core.Keyword(null,"command","command",-894540724),(function (){
var G__53579 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","gen-toggle-slider-dialog-visible","work-app.events/gen-toggle-slider-dialog-visible",1495620060),"time-entry"], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53579) : work_app.events._GT_evt.call(null,G__53579));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),"pi pi-times",new cljs.core.Keyword(null,"label","label",1718410804),"Delete Checked",new cljs.core.Keyword(null,"command","command",-894540724),(function (){
var G__53580 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","delete-tasks","work-app.time-events/delete-tasks",1766333016),checked_on_date], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53580) : work_app.events._GT_evt.call(null,G__53580));
})], null)], null))], null)], null)], null)], null),((((0) < cljs.core.count(expando_map)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((edit_mode)?"pi pi-list":"pi pi-eye"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"5px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__53581 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.time-events","set-edit-mode","work-app.time-events/set-edit-mode",-1320911621),cljs.core.keys(task_codes_all),(!(edit_mode))], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53581) : work_app.events._GT_evt.call(null,G__53581));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"small",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline",new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__53585 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","set-collapsed-all","work-app.events/set-collapsed-all",-915394143),all_matter_code_eids,(cljs.core.truth_(collapsed)?new cljs.core.Keyword(null,"expand","expand",595248157):new cljs.core.Keyword(null,"collapse","collapse",-1218136136))], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53585) : work_app.events._GT_evt.call(null,G__53585));
})], null),(cljs.core.truth_(collapsed)?"expand all":"collapse all")], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"matter-csv-dropzone",new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),work_app.shared.allow_drop,new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),work_app.shared.allow_drop,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),(function (p1__53543_SHARP_){
return p1__53543_SHARP_.dataTransfer.setData("text/plain","");
}),new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),(function (p1__53544_SHARP_){
p1__53544_SHARP_.preventDefault();

var G__53586 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("work-app.events","time-drop-csv","work-app.events/time-drop-csv",-409627938),p1__53544_SHARP_], null);
return (work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1 ? work_app.events._GT_evt.cljs$core$IFn$_invoke$arity$1(G__53586) : work_app.events._GT_evt.call(null,G__53586));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"min-height","min-height",398480837),"300px"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function work_app$time_entry$time_entry_$_iter__53589(s__53590){
return (new cljs.core.LazySeq(null,(function (){
var s__53590__$1 = s__53590;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__53590__$1);
if(temp__5804__auto__){
var s__53590__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53590__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__53590__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__53592 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__53591 = (0);
while(true){
if((i__53591 < size__5522__auto__)){
var vec__53597 = cljs.core._nth(c__5521__auto__,i__53591);
var m_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53597,(0),null);
var t_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53597,(1),null);
cljs.core.chunk_append(b__53592,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),work_app.time_entry.matter_ds,m_id,t_ids], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),m_id], null)));

var G__53646 = (i__53591 + (1));
i__53591 = G__53646;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53592),work_app$time_entry$time_entry_$_iter__53589(cljs.core.chunk_rest(s__53590__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53592),null);
}
} else {
var vec__53603 = cljs.core.first(s__53590__$2);
var m_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53603,(0),null);
var t_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53603,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f>","f>",1484564198),work_app.time_entry.matter_ds,m_id,t_ids], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),m_id], null)),work_app$time_entry$time_entry_$_iter__53589(cljs.core.rest(s__53590__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(matters_tasks_on_date);
})())], null)], null);
});

//# sourceMappingURL=work_app.time_entry.js.map
