(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(8),r=a.n(l),s=a(6),m=a(2),i=a(3),o=a(5),u=a(4),d=a(1),E=a.n(d),p=(a(15),function(){return c.a.createElement("div",{className:"header"},c.a.createElement("h4",{className:"title"},"Expense Tracker"),c.a.createElement("div",{className:"balance_block"},c.a.createElement("h6",{className:"your_balance"},"Your Balance"),c.a.createElement("span",{className:"balance"},"$260.00")))}),h=(a(16),function(){return c.a.createElement("div",{className:"counter_money"},c.a.createElement("div",{className:"income"},c.a.createElement("div",{className:"special_container"},c.a.createElement("h6",{className:"counter_title"},"Income"),c.a.createElement("span",{className:"income_balance"},"$500.00"))),c.a.createElement("div",{className:"expense"},c.a.createElement("h6",{className:"counter_title"},"Expense"),c.a.createElement("span",{className:"expense_balance"},"$200.00")))}),b=a(9),f=(a(17),function(e){var t=e.label,a=e.cash,n=e.onDelete;return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"name"},t),c.a.createElement("span",{className:"money"},"$",a),c.a.createElement("button",{onClick:n,className:"delete"},"x")))}),v=(a(18),function(e){var t=e.items,a=e.onDelete,n=t.map((function(e){var t=e.id,n=Object(b.a)(e,["id"]);return c.a.createElement("div",{key:t},c.a.createElement(f,Object.assign({},n,{onDelete:function(){return a(t)}})))}));return c.a.createElement("div",{className:"history"},c.a.createElement("h5",{className:"title"},"History"),c.a.createElement("hr",{className:"line"}),c.a.createElement("ul",{className:"list-group"},n))}),N=(a(19),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={text:"",money:""},n.onLabelChange=function(e){n.setState({text:e.target.value})},n.onSumChange=function(e){n.setState({money:e.target.value})},n.onSubmit=function(e){e.preventDefault(),n.props.onAdd(n.state.text,n.state.money),n.setState({text:"",money:""})},n}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"post-form"},c.a.createElement("h5",{className:"title"},"Add transaction"),c.a.createElement("hr",{className:"line"}),c.a.createElement("form",{onSubmit:this.onSubmit},c.a.createElement("span",null,"Text"),c.a.createElement("input",{onChange:this.onLabelChange,className:"enter-field",placeholder:"Enter text...",value:this.state.text}),c.a.createElement("span",null,"Amount",c.a.createElement("br",null),"(negative - expense, positive - income)"),c.a.createElement("input",{onChange:this.onSumChange,type:"number",className:"enter-field",placeholder:"Enter amount...",value:this.state.money}),c.a.createElement("button",{className:"btn-add"},"Add transaction")))}}]),a}(n.Component)),x=(a(20),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={data:[{label:"Test",cash:15,id:E()()},{label:"Test2",cash:35,id:E()()},{label:"Test3",cash:75,id:E()()}]},e.onAddItem=function(t,a){var n={label:t,cash:a,id:E()()};e.setState((function(e){var t=e.data;return{data:[n].concat(Object(s.a)(t))}}))},e.onDeleteItem=function(t){e.setState((function(e){var a=e.data,n=a.findIndex((function(e){return e.id===t}));return{data:[].concat(Object(s.a)(a.slice(0,n)),Object(s.a)(a.slice(n+1)))}}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.data;return c.a.createElement("div",{className:"app"},c.a.createElement(p,null),c.a.createElement(h,null),c.a.createElement(v,{items:e,onDelete:this.onDeleteItem}),c.a.createElement(N,{onAdd:this.onAddItem}))}}]),a}(n.Component));r.a.render(c.a.createElement(x,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.7d354cf8.chunk.js.map