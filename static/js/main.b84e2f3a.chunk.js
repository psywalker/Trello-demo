(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){},39:function(e,t,a){e.exports=a(57)},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(35),i=a(7),c=a(9),l=a(37),d=a(32),o=a(34),u=a(19),m=a(10),k=a(11),p=a(15),f=a(12),h=a(16),b=a(17),E=a.n(b),v=a(28),T=a.n(v),_=3,g=a(21),N=(a(49),function(e){var t=e.children,a=Object(g.a)(e,["children"]);return s.a.createElement("button",a,t)}),y=(a(50),function(e){var t=e.children,a=e.level,n=Object(g.a)(e,["children","level"]);switch(a){case"h1":return s.a.createElement("h1",n,t);case"h2":return s.a.createElement("h2",n,t);case"h3":default:return s.a.createElement("h3",n,t)}}),O=function(e){switch(e){case"big":return" size_big";case"middle":default:return" size_middle"}},S=(a(51),s.a.forwardRef(function(e,t){return s.a.createElement("textarea",Object.assign({ref:t},e))})),w=function(e){switch(e){case"primary":return" button_type_primary";case"close":return" button_type_close";case"ellipsis":return" button_type_ellipsis";case"long":return" button_type_long";case"link":return" button_type_link";case"dark":return" button_type_dark";case"visible":return" button_type_visible";default:return" button"}},I=(a(31),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).taskMenuHide=function(){a.setState({taskEditBtnShow:!1})},a.taskMenuToggle=function(){var e=a.state.taskEditBtnShow;a.setState({taskEditBtnShow:!e})},a.handleEditTask=function(e){e.preventDefault()},a.handleRemoveTask=function(e){e.preventDefault();var t=a.props,n=t.id,s=t.listId;(0,t.removeTask)(n,s),a.taskMenuHide()},a.state={taskEditBtnShow:!1},a.taskContainer=s.a.createRef(),a.taskMenuWrapper=s.a.createRef(),a.taskMenuTextArea=s.a.createRef(),a}return Object(h.a)(t,e),Object(k.a)(t,[{key:"componentDidUpdate",value:function(){if(this.taskMenuTextArea.current||this.taskMenuWrapper.current){this.taskMenuTextArea.current.focus();var e=this.taskContainer.current.getBoundingClientRect().y;this.taskMenuWrapper.current.style.top=e+"px"}}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.text,n=this.state.taskEditBtnShow;return s.a.createElement("div",{className:"task",ref:this.taskContainer},s.a.createElement(N,{type:"button",className:w("visible"),onClick:this.taskMenuToggle},s.a.createElement("i",{className:"fas fa-pen"})),s.a.createElement(y,{level:"h3",classes:O("middle")},t,": ",a),s.a.createElement(E.a,{className:"clickOutSide",onClickOutside:this.taskMenuHide},n&&s.a.createElement("div",{className:"task-menu-wrapper",ref:this.taskMenuWrapper},s.a.createElement("div",{className:"task-menu-wrapper__fade",onClick:this.taskMenuToggle}),s.a.createElement("div",{className:"task-menu-wrapper__inner"},s.a.createElement("form",{action:"#",className:"task-menu-fields"},s.a.createElement(S,{className:"task-menu-fields__textarea",ref:this.taskMenuTextArea}),s.a.createElement(N,{type:"button",className:w("primary"),onClick:this.handleEditTask},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")),s.a.createElement("ul",{className:"task-menu"},s.a.createElement("li",{className:"task-menu__item"},s.a.createElement(N,{type:"button",className:w("dark"),onClick:this.handleRemoveTask},s.a.createElement("i",{className:"far fa-file-archive button__icon"}),"\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u0442\u044c")))))))}}]),t}(n.Component)),x={removeTask:function(e,t){return{type:"REMOVE_TASK",taskId:e,listId:t}}},A=Object(i.b)(function(e,t){var a=T.a.get(t,["match","params","id"])||t.id;return{id:a,text:T.a.get(e,["tasks","".concat(a-1),"text"])}},x)(I),j=(a(52),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).boardMenuHide=function(){a.setState({boardMenuShow:!1})},a.boardMenuToggle=function(){var e=a.state.boardMenuShow;a.setState({boardMenuShow:!e})},a.addTaskFormHide=function(e){e.preventDefault(),a.setState({addTaskFormShow:!1})},a.addTaskFormToggle=function(){var e=a.state.addTaskFormShow;a.setState({addTaskFormShow:!e})},a.handleKeyPressAddTask=function(e){var t=a.props,n=t.listId,s=t.addTask;"Enter"===e.key&&(e.preventDefault(),s(n,a.addTaskTextArea.current.value),a.setState({addTaskFormShow:!1}))},a.handleRemoveList=function(e){var t=a.props,n=t.listId,s=t.removeList;e.preventDefault(),s(n)},a.handleAddTask=function(e){var t=a.props,n=t.listId,s=t.addTask;a.addTaskFormHide(e),s(n,a.addTaskTextArea.current.value)},a.state={boardMenuShow:!1,addTaskFormShow:!1},a.addTaskTextArea=s.a.createRef(),a}return Object(h.a)(t,e),Object(k.a)(t,[{key:"componentDidUpdate",value:function(){this.addTaskTextArea.current&&this.addTaskTextArea.current.focus()}},{key:"render",value:function(){var e=this.props,t=e.name,a=e.tasks,n=e.listId,r=this.state,i=r.boardMenuShow,c=r.addTaskFormShow;return s.a.createElement("div",{className:"board boards__item"},s.a.createElement(E.a,{className:"clickOutSide",onClickOutside:this.boardMenuHide},s.a.createElement(N,{className:w("ellipsis"),onClick:this.boardMenuToggle}),i&&s.a.createElement("div",{className:"board-menu-wrapper"},s.a.createElement(N,{type:"button",className:w("close"),onClick:this.boardMenuToggle},"\u2716"),s.a.createElement("span",{className:"board-menu-wrapper__title"},"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441\u043e \u0441\u043f\u0438\u0441\u043a\u043e\u043c"),s.a.createElement("ul",{className:"board-menu"},s.a.createElement("li",{className:"board-menu__item"},s.a.createElement(N,{type:"button",className:w("long"),onClick:this.handleRemoveList},"\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a"))))),s.a.createElement(y,{level:"h3",className:O("middle")},t),s.a.createElement("div",{className:"tasks tasks-wrapper"},s.a.createElement("div",{className:"tasks-wrapper__inner"},a.map(function(e){var t=e.id,a=e.text;return s.a.createElement(A,{key:t,text:a,id:t,listId:n})}))),s.a.createElement("div",{className:"task-adding"},s.a.createElement(E.a,{className:"clickOutSide",onClickOutside:this.addTaskFormHide},!c&&s.a.createElement(N,{type:"button",className:w("link"),onClick:this.addTaskFormToggle},s.a.createElement("span",{className:"button__text"},"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0435\u0449\u0451 \u043e\u0434\u043d\u0443 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443")),c&&s.a.createElement("form",{action:"#",className:"task-adding-form"},s.a.createElement(S,{onKeyPress:this.handleKeyPressAddTask,ref:this.addTaskTextArea,className:"task-adding-form__input",placeholder:"\u0412\u0432\u0435\u0441\u0442\u0438 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0434\u043b\u044f \u044d\u0442\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438"}),s.a.createElement(N,{type:"button",className:w("primary"),onClick:this.handleAddTask},"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"),s.a.createElement(N,{type:"button",className:w("close"),onClick:this.addTaskFormToggle},"\u2716")))))}}]),t}(n.Component)),M={removeList:function(e){return{type:"REMOVE_LIST",id:e}},addTask:function(e,t){return{type:"ADD_TASK",listId:e,text:t}}},C=Object(i.b)(function(e,t){var a=e.lists.filter(function(e,a){return t.listId===e.id}),n=a[0].name,s=a[0].tasksId,r=a[0].id,i=e.tasks;return{tasks:s.map(function(e){for(var t=0;t<i.length;t++)if(e===i[t].id)return i[t];return!1}),name:n,listId:r}},M)(j),L=(a(53),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).openFormAddList=function(e){return e.preventDefault(),a.setState({addListForm:!a.state.addListForm}),!1},a.handleAddList=function(e){(0,a.props.addList)(a.listTitleInput.current.value),a.openFormAddList(e)},a.state={addListForm:!1},a.listTitleInput=s.a.createRef(),a}return Object(h.a)(t,e),Object(k.a)(t,[{key:"componentDidUpdate",value:function(){this.listTitleInput.current&&this.listTitleInput.current.focus()}},{key:"render",value:function(){var e=this.props.lists,t=this.state.addListForm;return s.a.createElement("div",{className:"boards-wrapper"},s.a.createElement("div",{className:"boards"},e.map(function(e){var t=e.id;return s.a.createElement(C,{listId:t,key:t})})),s.a.createElement("div",{className:"board-adding"},!t&&s.a.createElement(N,{onClick:this.openFormAddList},"+ \u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0435\u0449\u0451 \u043e\u0434\u043d\u0443 \u043a\u043e\u043b\u043e\u043d\u043a\u0443"),t&&s.a.createElement("form",{className:"board-adding-form"},s.a.createElement("input",{ref:this.listTitleInput,className:"board-adding-form__input",placeholder:"\u0412\u0432\u0435\u0441\u0442\u0438 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u043f\u0438\u0441\u043a\u0430"}),s.a.createElement(N,{onClick:this.handleAddList,className:w("primary")},"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0441\u043f\u0438\u0441\u043e\u043a"),s.a.createElement(N,{className:w("close"),onClick:this.openFormAddList},"\u2716"))))}}]),t}(n.Component)),D={addList:function(e){return{type:"ADD_LIST",id:_++,text:e}}},F=Object(i.b)(function(e){return{lists:e.lists}},D)(L),R=(a(54),function(){return s.a.createElement("div",{className:"page404"},"Page not found ")}),K=(a(55),function(){return s.a.createElement(d.a,{basename:"/Trello-Demo"},s.a.createElement(l.LastLocationProvider,null,s.a.createElement("div",null,s.a.createElement(o.a,null,s.a.createElement(u.a,{path:"/",exact:!0,component:F}),s.a.createElement(u.a,{path:"/task/:id",component:A}),s.a.createElement(u.a,{path:"*",component:R})))))}),H=a(29),B=a(18),P=6,V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LIST":return[].concat(Object(B.a)(e),[{id:t.id,name:t.text,tasksId:[]}]);case"REMOVE_LIST":return e.filter(function(e){return e.id!==t.id});case"ADD_TASK":return e.map(function(e){return e.id===t.listId?Object(H.a)({},e,{tasksId:[].concat(Object(B.a)(e.tasksId),[P++])}):e});case"REMOVE_TASK":return e.map(function(e){return e.id===t.listId?Object(H.a)({},e,{tasksId:e.tasksId.filter(function(e){return e!==t.taskId})}):e});default:return e}},W=6,U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TASK":return[].concat(Object(B.a)(e),[{id:W++,text:t.text}]);case"REMOVE_TASK":return e.filter(function(e){return e.id!==t.taskId});default:return e}},z=Object(c.b)({lists:V,tasks:U}),J={lists:[{id:1,name:"list1",tasksId:[4,2,3]},{id:2,name:"list2",tasksId:[1,5]}],tasks:[{id:1,text:"task1"},{id:2,text:"task2"},{id:3,text:"task3"},{id:4,text:"task4"},{id:5,text:"task5"}]},q=Object(c.c)(z,J);Object(r.render)(s.a.createElement(i.a,{store:q},s.a.createElement(K,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.b84e2f3a.chunk.js.map