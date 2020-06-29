(this["webpackJsonpteam-052-frontend"]=this["webpackJsonpteam-052-frontend"]||[]).push([[0],{113:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(16),s=a(22),i=(a(85),a(39)),m=a(40);function u(){var e=Object(i.a)(["\n  margin-top: 3%;\n  margin-bottom: 3%;\n  width: 100%;\n"]);return u=function(){return e},e}var p=m.a.div(u()),d=a(7),g=a.n(d),E=a(17),b=a(24),v=a(6),h=a(12),f=a(13),N=a.n(f),O="https://team052-api.herokuapp.com/api/v1",y="".concat(O,"/guest/reports"),w="".concat(O,"/reports"),S="".concat(O,"/guest/metrics"),T=function(e,t){var a=t.type,n=t.payload;switch(a){case"LOADING_STARTS":return Object(v.a)(Object(v.a)({},e),{},{loading:!0});case"LOADING_STOPS":return Object(v.a)(Object(v.a)({},e),{},{loading:!1});case"GET_ALL_REPORTS":return Object(v.a)(Object(v.a)({},e),{},{reports:n,loading:!1});case"GET_GUEST_REPORTS":return Object(v.a)(Object(v.a)({},e),{},{guestReports:n,loading:!1});default:return e}},A=a(8),k=function(){var e={name:"",description:"",location:"",loaded:0},t=Object(n.useReducer)(T,{loading:!0,reports:[],guestReports:[]}),a=Object(h.a)(t,2),r=a[0],c=r.reports,o=r.loading,l=r.guestReports,s=a[1],i=Object(n.useState)(e),m=Object(h.a)(i,2),u=m[0],p=m[1],d=Object(n.useState)(null),f=Object(h.a)(d,2),O=f[0],k=f[1],j=Object(n.useState)(!1),R=Object(h.a)(j,2),C=R[0],x=R[1],_=Object(n.useState)({}),I=Object(h.a)(_,2),L=I[0],G=I[1],P=function(){var e=Object(E.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"LOADING_STARTS"}),e.prev=1,e.next=4,N.a.get("".concat(w),{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("ApiToken")),"Content-Type":"application/json",Accept:"application/json"}});case 4:return e.abrupt("return",e.sent);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(E.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"LOADING_STARTS"}),e.prev=1,e.next=4,N.a.get("".concat(y));case 4:return e.abrupt("return",e.sent);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(E.a)(g.a.mark((function e(t,a){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s({type:"LOADING_STARTS"}),!sessionStorage.getItem("ApiToken")){e.next=14;break}return e.prev=2,e.next=5,N.a.get("".concat(w,"?status=").concat(t),{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("ApiToken")),"Content-Type":"application/json",Accept:"application/json"}});case 5:(n=e.sent).data?s({type:"GET_ALL_REPORTS",payload:n.data.data}):(A.b.error("Unable to get reports!"),s({type:"LOADING_STOPS"})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),"unauthorized."===e.t0.response.data.message?(A.b.error("Token Expired, Login Again!"),s({type:"LOADING_STOPS"}),setTimeout((function(){a.push("/login")}),2e3)):(A.b.error("Something went wrong!"),s({type:"LOADING_STOPS"}));case 12:e.next=27;break;case 14:return e.prev=14,e.next=17,N.a.get("".concat(y,"?status=").concat(t));case 17:(r=e.sent).data&&s({type:"GET_GUEST_REPORTS",payload:r.data.data}),A.b.error("Something went wrong!"),s({type:"LOADING_STOPS"}),e.next=27;break;case 23:e.prev=23,e.t1=e.catch(14),A.b.error("Something went wrong!"),s({type:"LOADING_STOPS"});case 27:case"end":return e.stop()}}),e,null,[[2,9],[14,23]])})));return function(t,a){return e.apply(this,arguments)}}(),M=function(){var t=Object(E.a)(g.a.mark((function t(a,n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x(!0),t.prev=1,t.next=4,N.a.post("".concat(w),a);case 4:t.sent.data.message&&(x(!1),A.b.success("Incident Reported!"),p(e),k(null),setTimeout((function(){n.push("/")}),2e3)),x(!1),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),x(!1),A.b.info("Something went wrong!");case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,a){return t.apply(this,arguments)}}(),F=function(){var e=Object(E.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("".concat(w,"/").concat(t),{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("ApiToken")),"Content-Type":"application/json",Accept:"application/json"}});case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(E.a)(g.a.mark((function e(t,a,n){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={status:a,_method:"PATCH"},e.prev=1,e.next=4,N.a.post("".concat(w,"/").concat(t),r,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("ApiToken"))}});case 4:204===e.sent.status?n.push("/all-reports"):A.b.info("Unable to update status"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),A.b.error("Something went wrong");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a,n){return e.apply(this,arguments)}}(),H=function(){var e=Object(E.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s({type:"LOADING_STARTS"}),e.next=4,N.a.get("".concat(S));case 4:return e.abrupt("return",e.sent);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){P().then((function(e){s({type:"GET_ALL_REPORTS",payload:e.data.data})})).catch((function(){s({type:"LOADING_STOPS"})})),D().then((function(e){s({type:"GET_GUEST_REPORTS",payload:e.data.data})})).catch((function(){s({type:"LOADING_STOPS"})})),H().then((function(e){G(e.data)})).catch((function(){s({type:"LOADING_STOPS"})}))}),[]),{reports:c,loading:o,onReportChange:function(e){var t=e.target,a=t.name,n=t.value;p(Object(v.a)(Object(v.a)({},u),{},Object(b.a)({},a,n)))},report:u,guestReports:l,getFilteredReport:U,createReport:M,onFileChange:function(e){var t=e.target.files;k(t[0])},file:O,loadingReport:C,getReport:F,updateStatus:B,metrics:L}},j=a(14),R=function(e){switch(e){case"acknowledged":return"green";case"pending":return"blue";case"enroute":return"yellow"}},C=a(45),x=a(53),_={CREATE_REPORT:"/create-report",AUTH_HOME:"/all-reports",SINGLE_REPORT:"/report/:slug",LOGIN:"/login",CREATE_ADMIN:"/create-admin",HOME:"/",METRICS:"/metrics"},I=a(68),L=a(71),G=Object(n.createContext)({}),P=Object(s.h)((function(e){var t=e.history,a=Object(n.useContext)(G).logoutUser;return r.a.createElement(C.a,{expand:"lg",className:"navbar"},r.a.createElement(l.b,{to:sessionStorage.getItem("ApiToken")?"/all-reports":"/",className:"navbar-brand"},"Response52"),r.a.createElement(C.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(C.a.Collapse,{id:"basic-navbar-nav"},sessionStorage.getItem("ApiToken")?r.a.createElement(x.a,{className:"mr-auto navbar-links-container"},r.a.createElement("div",{className:"nav-navlinks"},r.a.createElement(l.b,{to:_.CREATE_REPORT,className:"navbar-links",style:{color:"beige"}},"Create Report")),r.a.createElement("div",{className:"nav-navlinks"},r.a.createElement(l.b,{to:_.CREATE_ADMIN,className:"navbar-links",style:{color:"beige"}},"Create Admin")),r.a.createElement("div",{className:"nav-navlinks"},r.a.createElement(l.b,{to:_.METRICS,className:"navbar-links",style:{color:"beige"}},"Metrics")),r.a.createElement("div",{className:"nav-navlinks"},r.a.createElement("div",{className:"logout",onClick:function(){return a(t)}},r.a.createElement(I.a,{icon:L.a})))):r.a.createElement(x.a,{className:"mr-auto navbar-links-container"},r.a.createElement(l.b,{to:_.CREATE_REPORT,className:"navbar-links-unauth",style:{color:"beige"}},"Create Report"),r.a.createElement(l.b,{to:_.METRICS,className:"navbar-links-unauth",style:{color:"beige"}},"Metrics"))))})),D=function(e){var t=e.history,a=k(),c=a.reports,o=a.loading,s=a.getFilteredReport;console.log(c);return r.a.createElement(n.Fragment,null,r.a.createElement(P,null),r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"container filter"},r.a.createElement(j.a,null,r.a.createElement(j.a.Toggle,{style:{width:"100%"},variant:"success",id:"dropdown-basic"},"Filter by status"),r.a.createElement(j.a.Menu,null,r.a.createElement(j.a.Item,{onClick:function(){return s("pending",t)}},"Pending"),r.a.createElement(j.a.Item,{onClick:function(){return s("enroute",t)}},"Enroute"),r.a.createElement(j.a.Item,{onClick:function(){return s("acknowledged",t)}},"Acknowledged")))),r.a.createElement("div",{className:"container"},r.a.createElement(p,null,r.a.createElement("div",{className:"row"},o?r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"}):c&&c.length?c.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-md-6 mb-4 report"},r.a.createElement("div",{className:"card shadow card-report"},r.a.createElement("div",{className:"reports-image m-4"},r.a.createElement("img",{src:e.visual_image,className:"card-img-top image"})),r.a.createElement("div",{className:"card-body pt-2"},r.a.createElement("p",{className:"card-title text-center"},r.a.createElement(l.b,{style:{textDecoration:"none"},to:{pathname:"/report/".concat(e.title.replace(/ /g,"-").toLowerCase()),state:{report:e}}},r.a.createElement("strong",{className:"report-title"},e.title.toUpperCase()))),r.a.createElement("hr",null),r.a.createElement("div",{className:"report-detail"},r.a.createElement("div",{className:"status",style:{backgroundColor:R(e.status)}},r.a.createElement("span",{className:"report-status"},e.status.toUpperCase())),r.a.createElement("span",{className:"text-right ml-auto report-location"},e.location)))))})):"no reports")))))},U=function(e){var t=e.history,a=Object(n.useContext)(G),c=a.report,o=a.createReport,l=a.onReportChange,s=a.onFileChange,i=a.file,m=a.loadingReport,u=c.location,p=c.name;c.description,c.loaded;return r.a.createElement(n.Fragment,null,r.a.createElement(P,null),r.a.createElement("div",{className:"container mt-3 pt-3 pb-3 shadow form-container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=new FormData;a.append("visual_image",i),a.append("location",u),a.append("title",p),o(a,t)}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 mb-5"},r.a.createElement("input",{name:"name",value:p,onChange:l,type:"text",className:"form-control",placeholder:"Title example; severe accident at ojota"})),r.a.createElement("div",{className:"col-12 mb-5"},r.a.createElement("input",{type:"file",name:"file",onChange:s,className:"form-control"})),r.a.createElement("div",{className:"col-12 mb-5"},r.a.createElement("input",{name:"location",value:u,onChange:l,type:"text",className:"form-control",placeholder:"Location e.g Lekki Epe"}))),r.a.createElement("div",{className:"text-center"},m?r.a.createElement("button",{disabled:m,type:"submit",className:"btn btn-success btn-lg"},"Reporting..."):r.a.createElement("button",{disabled:!(u.length>0&&null!==i),type:"submit",className:"btn btn-success btn-lg"},"Submit")))),r.a.createElement(A.a,null))},M=function(e){var t=e.history,a=e.location,c=Object(n.useContext)(G),o=c.onChange,l=c.login,s=c.loginUser,i=c.loadingLogin,m=l.email,u=l.password;return r.a.createElement(n.Fragment,null,r.a.createElement(P,null),r.a.createElement("div",{className:"container mt-3 pt-3 pb-3 login-container"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),s(l,t,a)}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 mb-5"},r.a.createElement("input",{type:"email",name:"email",value:m,onChange:o,className:"form-control",placeholder:"Enter email"})),r.a.createElement("div",{className:"col-12 mb-5"},r.a.createElement("input",{type:"password",name:"password",value:u,onChange:o,className:"form-control",placeholder:"Enter password"}))),r.a.createElement("div",{className:"text-center"},i?r.a.createElement("button",{disabled:i,type:"submit",className:"btn btn-success btn-lg"},"Submitting..."):r.a.createElement("button",{disabled:!(m.length>0&&u.length>0),type:"submit",className:"btn btn-success btn-lg"},"Submit")))),r.a.createElement(A.a,null))},F=a(123),B=a(122),H=a(75),Y=a.n(H),z=function(){return r.a.createElement("div",null,r.a.createElement(B.a,{src:Y.a,alt:"",width:"100%",height:"250"}))},J=function(e){var t=e.history,a=Object(n.useContext)(G),c=a.admin,o=a.createAdminChange,l=a.createAdmin,s=a.creatingAdmin,i=c.name,m=c.email,u=c.password;return r.a.createElement(n.Fragment,null,r.a.createElement(P,null),r.a.createElement(z,null),r.a.createElement("div",{className:"container form"},r.a.createElement(F.a,{onSubmit:function(e){e.preventDefault(),l(c,t)}},r.a.createElement(F.a.Group,{controlId:"formBasicEmail"},r.a.createElement(F.a.Group,{controlId:"formBasicPassword"},r.a.createElement(F.a.Label,{className:"form-label"},"Name"),r.a.createElement(F.a.Control,{name:"name",value:i,onChange:o,type:"text",placeholder:"Name"})),r.a.createElement(F.a.Label,null,"Email"),r.a.createElement(F.a.Control,{name:"email",value:m,onChange:o,type:"email",placeholder:"Enter email"})),r.a.createElement(F.a.Group,{controlId:"formBasicPassword"},r.a.createElement(F.a.Label,null,"Password"),r.a.createElement(F.a.Control,{name:"password",value:u,onChange:o,type:"password",placeholder:"Password"})),r.a.createElement("div",{className:"submit-container"},s?r.a.createElement("button",{disabled:s,className:"button"},"Creating Admin..."):r.a.createElement("button",{className:"button",disabled:!(m.length>0&&u.length>0&&u.length)},"Create Admin"))),r.a.createElement(A.a,null)))},W=a(78),$=function(e){var t=e.component,a=Object(W.a)(e,["component"]);return r.a.createElement(s.b,Object.assign({},a,{render:function(e){return sessionStorage.getItem("ApiToken")?r.a.createElement(t,e):r.a.createElement(s.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},q=function(){var e=k(),t=(e.reports,e.guestReports),a=e.loading,c=e.getFilteredReport;console.log(t);return r.a.createElement(n.Fragment,null,r.a.createElement(P,null),r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"container filter"},r.a.createElement(j.a,null,r.a.createElement(j.a.Toggle,{style:{width:"100%"},variant:"success",id:"dropdown-basic"},"Filter by status"),r.a.createElement(j.a.Menu,null,r.a.createElement(j.a.Item,{onClick:function(){return c("pending")}},"Pending"),r.a.createElement(j.a.Item,{onClick:function(){return c("enroute")}},"Enroute"),r.a.createElement(j.a.Item,{onClick:function(){return c("acknowledged")}},"Acknowledged")))),r.a.createElement("div",{className:"container "},r.a.createElement(p,null,r.a.createElement("div",{className:"row"},a?r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"}):t&&t.length?t.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-md-6 mb-4 report"},r.a.createElement("div",{className:"card shadow card-report"},r.a.createElement("div",{className:"reports-image m-4"},r.a.createElement("img",{src:e.visual_image,className:"card-img-top image"})),r.a.createElement("div",{className:"card-body pt-2"},r.a.createElement("p",{className:"card-title text-center"},r.a.createElement("strong",{className:"report-title"},e.title.toUpperCase())),r.a.createElement("hr",null),r.a.createElement("div",{className:"report-detail"},r.a.createElement("div",{className:"status",style:{backgroundColor:R(e.status)}},r.a.createElement("span",{className:"report-status"})),r.a.createElement("span",{className:"text-right ml-auto report-location"},e.location)))))})):"no reports")))))};function K(){var e=Object(i.a)(["\n  margin: auto;\n  width: 59%;\n\n  @media only screen and (max-width: 767px) {\n    width: 100%;\n  }\n"]);return K=function(){return e},e}var Q=m.a.div(K()),V=a(52),X=a.n(V),Z=function(e){var t=e.history,a=Object(n.useState)({}),c=Object(h.a)(a,2),o=c[0],l=c[1],i=k().updateStatus,m=Object(s.g)();return Object(n.useEffect)((function(){if(m.state&&m.state.report){var e=m.state.report;console.log(e),l(e)}else t.push("/all-reports")}),[t,m]),r.a.createElement(n.Fragment,null,r.a.createElement(P,null),r.a.createElement("div",{className:"container"},r.a.createElement(Q,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{key:o.id,className:"col-md-12 mb-4",style:{width:"18rem"}},r.a.createElement("div",{className:"card",style:{border:"white"}},r.a.createElement("div",{className:"reports-image m-4"},r.a.createElement("img",{src:o.visual_image,className:"card-img-top image"})),r.a.createElement("div",{className:"card-body pt-2"},r.a.createElement("p",{className:"card-title text-center"},r.a.createElement("strong",null,o.title)),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("div",{className:"report-info"},r.a.createElement("p",null,"STATUS"),"- ",r.a.createElement("span",{className:"text-info"},o.status),r.a.createElement("select",{onChange:function(e){return i(o.id,e.target.value,t)},className:"update-status"},r.a.createElement("option",null,"Update Status"),r.a.createElement("option",{value:"pending"},"Pending"),r.a.createElement("option",{value:"acknowledged"},"Acknowledged"),r.a.createElement("option",{value:"enroute"},"Enroute"))),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("p",null,"Location"),"- ",r.a.createElement("span",{className:"text-info"},o.location)),r.a.createElement("div",{className:"report-reported"},r.a.createElement("p",null,"Time Reported-"),r.a.createElement(X.a,{format:"YYYY-MM-DD"},o.time_of_report)),r.a.createElement("div",{className:"report-updated"},r.a.createElement("p",null,"Time Updated-")," ",r.a.createElement(X.a,{format:"YYYY-MM-DD"},o.status_updated_at))))))))))},ee=function(){var e=k(),t=e.loading,a=e.metrics;return r.a.createElement(n.Fragment,null,r.a.createElement(P,null),t?r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"}):r.a.createElement("div",{className:"container metrics-container"},r.a.createElement("div",{className:"card metric"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"count"},a.reported_cases),r.a.createElement("h5",{className:"card-title metric-item",style:{color:"#f48824"}},"Reported Cases"))),r.a.createElement("div",{className:"card metric"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"count"},a.pending_cases),r.a.createElement("h5",{className:"card-title metric-item",style:{color:"#f45c38"}},"Pending Cases"))),r.a.createElement("div",{className:"card metric"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"count"},a.enroute_cases),r.a.createElement("h5",{className:"card-title metric-item"},"Enroute Cases"))),r.a.createElement("div",{className:"card metric"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"count"},a.onsite_cases),r.a.createElement("h5",{className:"card-title metric-item"},"Onsite Cases"))),r.a.createElement("div",{className:"card metric"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"count"},a.acknowledged_cases),r.a.createElement("h5",{className:"card-title metric-item",style:{color:"#673fbb"}},"Acknowledged Cases")))))},te=function(){return r.a.createElement(l.a,null,r.a.createElement(s.d,null,r.a.createElement($,{exact:!0,path:_.AUTH_HOME,component:D}),r.a.createElement(s.b,{exact:!0,path:_.HOME,component:q}),r.a.createElement(s.b,{exact:!0,path:_.CREATE_REPORT,component:U}),r.a.createElement(s.b,{exact:!0,path:_.LOGIN,component:M}),r.a.createElement(s.b,{exact:!0,path:_.METRICS,component:ee}),r.a.createElement($,{exact:!0,path:_.CREATE_ADMIN,component:J}),r.a.createElement($,{exact:!0,path:_.SINGLE_REPORT,component:Z})))},ae=(a(113),a(114),"".concat(O,"/auth/login")),ne="".concat(O,"/auth/logout"),re=function(e,t){switch(t.type){case"LOADING_STARTS":return Object(v.a)(Object(v.a)({},e),{},{loadingLogin:!0});case"LOADING_STOPS":return Object(v.a)(Object(v.a)({},e),{},{loadingLogin:!1});default:return e;case"LOGIN_USER":return Object(v.a)(Object(v.a)({},e),{},{loadingLogin:!0})}},ce=function(){var e=Object(n.useReducer)(re,{loadingLogin:!1}),t=Object(h.a)(e,2),a=t[0].loadingLogin,r=t[1],c=Object(n.useState)({email:"",password:""}),o=Object(h.a)(c,2),l=o[0],s=o[1];return{onChange:function(e){var t=e.target,a=t.name,n=t.value;s(Object(v.a)(Object(v.a)({},l),{},Object(b.a)({},a,n)))},login:l,loginUser:function(){var e=Object(E.a)(g.a.mark((function e(t,a,n){var c,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.state?n.state.from.pathname:"".concat(_.AUTH_HOME),r({type:"LOGIN_USER"}),e.prev=2,e.next=5,N.a.post("".concat(ae),t);case 5:"login successful"===(o=e.sent).data.message&&(sessionStorage.setItem("ApiToken",o.data.data.api_token),a.push(c)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),e.t0.response&&e.t0.response.data.errors?(r({type:"LOADING_STOPS"}),A.b.error("Invalid credentials")):r({type:"LOADING_STOPS"});case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,a,n){return e.apply(this,arguments)}}(),loadingLogin:a,logoutUser:function(){var e=Object(E.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.post("".concat(ne));case 3:"logout successful"===e.sent.data.message&&(sessionStorage.removeItem("ApiToken"),t.push("".concat(_.HOME))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),A.b.error("Something went wrong!");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}},oe="".concat(O,"/users"),le=function(){var e=Object(n.useState)({name:"",email:"",password:"",admin_role:"superadmin"}),t=Object(h.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),o=Object(h.a)(c,2),l=o[0],s=o[1];return{admin:a,createAdmin:function(){var e=Object(E.a)(g.a.mark((function e(t,a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.prev=1,e.next=4,N.a.post("".concat(oe),t,{headers:{Authorization:"Bearer ".concat(sessionStorage.getItem("ApiToken"))}});case 4:"created"===e.sent.data.message&&(s(!1),a.push("/admin-users")),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),e.t0.response.data.errors&&"object"===typeof e.t0.response.data.errors.email&&A.b.info("Email already exists"),"unauthorized."===e.t0.response.data.message&&(A.b.info("Token Expired!"),setTimeout((function(){a.push("login")}),2e3)),s(!1);case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}(),createAdminChange:function(e){var t=e.target,n=t.name,c=t.value;r(Object(v.a)(Object(v.a)({},a),{},Object(b.a)({},n,c)))},creatingAdmin:l}},se=function(e){var t=e.children,a=G.Provider,n=k(),c=n.reports,o=n.loading,l=n.report,s=n.createReport,i=n.onReportChange,m=n.onFileChange,u=n.file,p=n.loadingReport,d=ce(),g=d.onChange,E=d.login,b=d.loginUser,v=d.loadingLogin,h=d.logoutUser,f=le(),N=f.admin,O=f.createAdminChange,y=f.createAdmin,w=f.creatingAdmin;return r.a.createElement(a,{value:{reports:c,loading:o,report:l,onChange:g,login:E,loginUser:b,loadingLogin:v,admin:N,createAdminChange:O,createAdmin:y,creatingAdmin:w,logoutUser:h,createReport:s,onReportChange:i,onFileChange:m,file:u,loadingReport:p}},t)};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(se,null,r.a.createElement(te,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){}))},75:function(e,t,a){e.exports=a.p+"static/media/clean accident image .dce0dcc3.jpg"},80:function(e,t,a){e.exports=a(115)}},[[80,1,2]]]);
//# sourceMappingURL=main.b88e098b.chunk.js.map