(this["webpackJsonpfe62-reactjs"]=this["webpackJsonpfe62-reactjs"]||[]).push([[0],{48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(22),r=a.n(n),c=a(0);var l=a(2),o=a(3),d=a(5),i=a(4);s.Component,s.Component,s.Component,s.Component;var u=a(10),h=(s.Component,s.Component,s.Component,a(23)),b=a(7),j=a.n(b),m=a(8),p=a(11),f=a(13),x=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,n=t.value;s.setState((function(e){return{values:Object(f.a)(Object(f.a)({},e.values),{},Object(p.a)({},a,n))}}))},s.handleSubmit=function(){s.state.values.id?s.props.onUpdateUser(s.state.values):s.props.onAddUser(s.state.values),s.setState({values:{username:"",email:"",phone:"",fullName:"",address:""}})},s.state={values:{username:"",email:"",phone:"",fullName:"",address:""}},s}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(e,t){this.props.user.id&&e.user.id!==this.props.user.id&&this.setState({values:this.props.user})}},{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"modal fade",id:"modelId",tabIndex:-1,role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true",children:Object(c.jsx)("div",{className:"modal-dialog modal-lg",role:"document",children:Object(c.jsxs)("div",{className:"modal-content",children:[Object(c.jsxs)("div",{className:"modal-header",children:[Object(c.jsx)("h5",{className:"modal-title",children:"User Form"}),Object(c.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(c.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(c.jsxs)("div",{className:"modal-body",children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"username"})," Username",Object(c.jsx)("input",{type:"text",value:this.state.values.username,onChange:this.handleChange,name:"username",id:!0,className:"form-control",placeholder:!0,"aria-describedby":"helpId"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"username"})," Email",Object(c.jsx)("input",{type:"text",value:this.state.values.email,onChange:this.handleChange,name:"email",id:!0,className:"form-control",placeholder:!0,"aria-describedby":"helpId"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"username"})," FullName",Object(c.jsx)("input",{type:"text",value:this.state.values.fullName,onChange:this.handleChange,name:"fullName",id:!0,className:"form-control",placeholder:!0,"aria-describedby":"helpId"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"username"})," Phone",Object(c.jsx)("input",{type:"text",value:this.state.values.phone,onChange:this.handleChange,name:"phone",id:!0,className:"form-control",placeholder:!0,"aria-describedby":"helpId"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"username"})," Address",Object(c.jsx)("input",{type:"text",value:this.state.values.address,onChange:this.handleChange,name:"address",id:!0,className:"form-control",placeholder:!0,"aria-describedby":"helpId"})]})]}),Object(c.jsxs)("div",{className:"modal-footer",children:[Object(c.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",children:"Cancel"}),Object(c.jsx)("button",{type:"button",onClick:this.handleSubmit,className:"btn btn-primary",children:"Submit"})]})]})})})})}}]),a}(s.Component),O=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(c.jsxs)("table",{className:"table table-striped",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"ID"}),Object(c.jsx)("th",{children:"UserName"}),Object(c.jsx)("th",{children:"Email"}),Object(c.jsx)("th",{children:"Phone"}),Object(c.jsx)("th",{children:"FullName"}),Object(c.jsx)("th",{children:"Address"}),Object(c.jsx)("th",{children:"Action"})]})}),Object(c.jsx)("tbody",{children:this.props.users.map((function(t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t.id}),Object(c.jsx)("td",{children:t.username}),Object(c.jsx)("td",{children:t.email}),Object(c.jsx)("td",{children:t.phone}),Object(c.jsx)("td",{children:t.fullName}),Object(c.jsx)("td",{children:t.address}),Object(c.jsxs)("td",{children:[Object(c.jsx)("button",{onClick:function(){return e.props.onGetUser(t.id)},"data-toggle":"modal","data-target":"#modelId",className:"btn btn-success mr-4",children:"Update"}),Object(c.jsx)("button",{onClick:function(){return e.props.onDelete(t.id)},className:"btn btn-danger",children:"Delete"})]})]},t.id)}))})]})}}]),a}(s.Component),v=a(9),g=a.n(v),U=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).fetchUsers=Object(m.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g()({method:"GET",url:"https://609ce52c04bffa001792d876.mockapi.io/Users"});case 3:t=e.sent,s.setState({users:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),s.handleAddUser=function(){var e=Object(m.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g()({method:"POST",url:"https://609ce52c04bffa001792d876.mockapi.io/Users",data:t});case 3:s.fetchUsers(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),s.handleUpdateUser=function(){var e=Object(m.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.id,Object(h.a)(t,["id"]),e.prev=1,e.next=4,g()({method:"PUT",url:"https://609ce52c04bffa001792d876.mockapi.io/Users/".concat(a),data:t});case 4:s.fetchUsers(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),s.handleGetUser=function(){var e=Object(m.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g()({method:"GET",url:"https://609ce52c04bffa001792d876.mockapi.io/Users/".concat(t)});case 3:a=e.sent,s.setState({selectedUser:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),s.handleDelete=function(){var e=Object(m.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g()({method:"DELETE",url:"https://609ce52c04bffa001792d876.mockapi.io/Users/".concat(t)});case 3:s.fetchUsers(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),s.state={users:[],selectedUser:{}},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.fetchUsers()}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{className:"text-center",children:"UserManagement"}),Object(c.jsx)("div",{className:"text-right my-4",children:Object(c.jsx)("button",{"data-toggle":"modal","data-target":"#modelId",className:"btn btn-primary",children:"Add User"})}),Object(c.jsx)(O,{users:this.state.users,onGetUser:this.handleGetUser,onDelete:this.handleDelete}),Object(c.jsx)(x,{user:this.state.selectedUser,onAddUser:this.handleAddUser,onUpdateUser:this.handleUpdateUser})]})}}]),a}(s.Component);var N=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(U,{})})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,51)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),r(e),c(e)}))};a(48),a(49);r.a.render(Object(c.jsx)(N,{}),document.getElementById("root")),y()}},[[50,1,2]]]);
//# sourceMappingURL=main.7f5154cf.chunk.js.map