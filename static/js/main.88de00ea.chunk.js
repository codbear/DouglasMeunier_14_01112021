(this["webpackJsonphr-net"]=this["webpackJsonphr-net"]||[]).push([[0],{160:function(e,a,t){},174:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(49),b=t.n(r),o=(t(160),t(227)),s=t(233),c=t(62),l=t(24),d={EMPLOYEE:{INDEX:"/",CREATE:"/create"}},m=t(11),j=t(57),u=t(9),h=t(237),v=t(243),O=t(181),x=t(236),f=t(242),p=t(229),y=t(231),E=t(239),g=t(63),C={ZIP_CODE:/^[0-9]{5}$/},M=function(e){return function(a){var t;return e?(e.some((function(e){return!!(t=e(a))})),t):t}},N=function(e){if(!e)return"This field is required"},S=function(e){if(!Object(g.a)(e))return"Use a valid date mm/dd/yyyy"},A=function(e){if(!C.ZIP_CODE.test(e))return"Use a valid zip code"},D=t(84),I=t.n(D),R="employees",F=[{name:"Alabama",abbreviation:"AL"},{name:"Alaska",abbreviation:"AK"},{name:"American Samoa",abbreviation:"AS"},{name:"Arizona",abbreviation:"AZ"},{name:"Arkansas",abbreviation:"AR"},{name:"California",abbreviation:"CA"},{name:"Colorado",abbreviation:"CO"},{name:"Connecticut",abbreviation:"CT"},{name:"Delaware",abbreviation:"DE"},{name:"District Of Columbia",abbreviation:"DC"},{name:"Federated States Of Micronesia",abbreviation:"FM"},{name:"Florida",abbreviation:"FL"},{name:"Georgia",abbreviation:"GA"},{name:"Guam",abbreviation:"GU"},{name:"Hawaii",abbreviation:"HI"},{name:"Idaho",abbreviation:"ID"},{name:"Illinois",abbreviation:"IL"},{name:"Indiana",abbreviation:"IN"},{name:"Iowa",abbreviation:"IA"},{name:"Kansas",abbreviation:"KS"},{name:"Kentucky",abbreviation:"KY"},{name:"Louisiana",abbreviation:"LA"},{name:"Maine",abbreviation:"ME"},{name:"Marshall Islands",abbreviation:"MH"},{name:"Maryland",abbreviation:"MD"},{name:"Massachusetts",abbreviation:"MA"},{name:"Michigan",abbreviation:"MI"},{name:"Minnesota",abbreviation:"MN"},{name:"Mississippi",abbreviation:"MS"},{name:"Missouri",abbreviation:"MO"},{name:"Montana",abbreviation:"MT"},{name:"Nebraska",abbreviation:"NE"},{name:"Nevada",abbreviation:"NV"},{name:"New Hampshire",abbreviation:"NH"},{name:"New Jersey",abbreviation:"NJ"},{name:"New Mexico",abbreviation:"NM"},{name:"New York",abbreviation:"NY"},{name:"North Carolina",abbreviation:"NC"},{name:"North Dakota",abbreviation:"ND"},{name:"Northern Mariana Islands",abbreviation:"MP"},{name:"Ohio",abbreviation:"OH"},{name:"Oklahoma",abbreviation:"OK"},{name:"Oregon",abbreviation:"OR"},{name:"Palau",abbreviation:"PW"},{name:"Pennsylvania",abbreviation:"PA"},{name:"Puerto Rico",abbreviation:"PR"},{name:"Rhode Island",abbreviation:"RI"},{name:"South Carolina",abbreviation:"SC"},{name:"South Dakota",abbreviation:"SD"},{name:"Tennessee",abbreviation:"TN"},{name:"Texas",abbreviation:"TX"},{name:"Utah",abbreviation:"UT"},{name:"Vermont",abbreviation:"VT"},{name:"Virgin Islands",abbreviation:"VI"},{name:"Virginia",abbreviation:"VA"},{name:"Washington",abbreviation:"WA"},{name:"West Virginia",abbreviation:"WV"},{name:"Wisconsin",abbreviation:"WI"},{name:"Wyoming",abbreviation:"WY"}],P=function(){try{var e=JSON.parse(I.a.getItem(R));return Array.isArray(e)?e:[]}catch(a){return[]}},W=t(20),T=t(132),q=function(e){var a=P(),t=Object(W.a)(Object(W.a)({},e),{},{birthDate:Object(T.a)(e.birthDate,"yyyy/MM/dd"),startDate:Object(T.a)(e.startDate,"yyyy/MM/dd")});a.push(t),I.a.setItem(R,JSON.stringify(a))},L=t(18),k=t(48),w=t(234),V=t(1),Y=function(e){var a=e.name,t=e.label,n=e.type,i=e.isRequired,r=e.validators,b=Object(k.a)(e,["name","label","type","isRequired","validators"]),o=[].concat(Object(L.a)(i?[N]:[]),Object(L.a)(r));return Object(V.jsx)(j.a,{name:a,validate:M(o),children:function(e){var a=e.form,i=e.field,r=a.touched[i.name]&&a.errors[i.name];return Object(V.jsx)(w.a,Object(W.a)(Object(W.a)(Object(W.a)({},e.field),b),{},{id:"field".concat(i.name),label:t,error:Boolean(r),variant:"outlined",type:n,helperText:r||""}))}})};Y.defaultProps={type:"text",validators:[],isRequired:!1};var H=Y,z=t(232),B=function(e){var a=e.name,t=e.label,n=e.isRequired,i=e.validators,r=Object(k.a)(e,["name","label","isRequired","validators"]),b=[].concat(Object(L.a)(n?[N]:[]),Object(L.a)(i));return Object(V.jsx)(j.a,{name:a,validate:M(b),children:function(e){var n=e.form,i=e.field,b=n.touched[i.name]&&n.errors[i.name];return Object(V.jsx)(z.a,Object(W.a)(Object(W.a)({},e.field),{},{onChange:function(t){e.form.setFieldValue(a,t)},label:t,variant:"outlined",renderInput:function(e){return Object(V.jsx)(w.a,Object(W.a)(Object(W.a)(Object(W.a)({},e),r),{},{helperText:b||"",error:Boolean(b)}))}}))}})};B.defaultProps={validators:[],isRequired:!1};var J=B,K=function(e){var a=e.options,t=e.children,n=Object(k.a)(e,["options","children"]);return Object(V.jsxs)(H,Object(W.a)(Object(W.a)({select:!0},n),{},{defaultValue:"",children:[a&&a.map((function(e){return Object(V.jsx)(x.a,{value:e,children:e},e)})),t]}))};K.defaultProps={options:null,children:null};var G=K,U=t(240),X=t(241),Z=t(230),_=t.p+"static/media/hr_net_logo.28da81e4.svg",$=Object(u.a)("div")((function(e){return e.theme.mixins.toolbar})),Q=function(e){var a=e.action,t=e.children;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(U.a,{sx:{backgroundColor:"white"},children:Object(V.jsxs)(X.a,{sx:{justifyContent:"space-between"},children:[Object(V.jsx)(f.a,{component:"img",src:_,alt:"",sx:{maxHeight:48,m:1}}),Object(V.jsx)(O.a,{variant:"h1",style:Z.a,children:"HR Net"}),a]})}),Object(V.jsx)($,{}),Object(V.jsx)(f.a,{component:"main",sx:{p:5},children:t})]})},ee=function(){var e=Object(l.f)(),a=Object(n.useState)(!1),t=Object(m.a)(a,2),i=t[0],r=t[1],b=Object(u.a)("div")((function(e){return{display:"grid",gridTemplateColumns:"1fr 1fr",gap:e.theme.spacing(4)}}));return Object(V.jsxs)(Q,{action:Object(V.jsx)(h.a,{variant:"contained",component:c.b,to:d.EMPLOYEE.INDEX,children:"Employees list"}),children:[Object(V.jsx)(j.c,{initialValues:{firstName:"",lastName:"",birthDate:"",startDate:"",street:"",city:"",state:"",zipCode:"",department:""},onSubmit:function(e,a){q(e),a.resetForm(),r(!0)},children:function(){return Object(V.jsxs)(v.a,{sx:{m:"auto",px:8,py:4},children:[Object(V.jsx)(O.a,{variant:"h2",sx:{mb:4,textAlign:"center"},children:"Create employee"}),Object(V.jsxs)(j.b,{children:[Object(V.jsxs)(b,{children:[Object(V.jsx)(H,{name:"firstName",label:"First name",fullWidth:!0,isRequired:!0}),Object(V.jsx)(H,{name:"lastName",label:"Last name",fullWidth:!0,isRequired:!0}),Object(V.jsx)(J,{name:"birthDate",label:"Date of birth",fullWidth:!0,isRequired:!0,validators:[S]}),Object(V.jsx)(J,{name:"startDate",label:"Start date",fullWidth:!0,sx:{gridColumn:1},isRequired:!0,validators:[S]}),Object(V.jsx)(G,{name:"department",label:"Department",fullWidth:!0,isRequired:!0,options:["Sales","Marketing","Engineering","Human Resources","Legal"]}),Object(V.jsx)(O.a,{variant:"h5",component:"h3",children:"Address"}),Object(V.jsx)(H,{name:"street",label:"Street",fullWidth:!0,sx:{gridColumn:"1 / span 2"},isRequired:!0}),Object(V.jsx)(H,{name:"city",label:"City",fullWidth:!0,isRequired:!0}),Object(V.jsx)(G,{name:"state",label:"State",fullWidth:!0,isRequired:!0,children:F.map((function(e){return Object(V.jsx)(x.a,{value:e.abbreviation,children:e.name},e.abbreviation)}))}),Object(V.jsx)(H,{name:"zipCode",label:"Zip Code",fullWidth:!0,isRequired:!0,validators:[A]})]}),Object(V.jsx)(f.a,{sx:{display:"flex",justifyContent:"center",mt:8},children:Object(V.jsx)(h.a,{type:"submit",variant:"contained",size:"large",children:"Save"})})]})]})}}),Object(V.jsxs)(p.a,{open:i,children:[Object(V.jsx)(y.a,{sx:{textAlign:"center"},children:"Employee created!"}),Object(V.jsxs)(E.a,{children:[Object(V.jsx)(h.a,{onClick:function(){return r(!1)},children:"Add new employee"}),Object(V.jsx)(h.a,{onClick:function(){e.push(d.EMPLOYEE.INDEX)},autoFocus:!0,variant:"contained",children:"Go to employees list"})]})]})]})},ae=t(130),te=[{dataField:"firstName",header:"First name",isSortable:!0},{dataField:"lastName",header:"Last name",isSortable:!0},{dataField:"birthDate",header:"Birthdate",isSortable:!0},{dataField:"startDate",header:"Start date",isSortable:!0},{dataField:"department",header:"Department",isSortable:!0},{dataField:"street",header:"Street",isSortable:!0},{dataField:"city",header:"City",isSortable:!0},{dataField:"state",header:"State",isSortable:!0},{dataField:"zipCode",header:"ZIP code",isSortable:!0}],ne=function(){var e=P();return Object(V.jsx)(Q,{action:Object(V.jsx)(h.a,{variant:"contained",component:c.b,to:d.EMPLOYEE.CREATE,children:"Add new employee"}),children:Object(V.jsxs)(v.a,{sx:{m:"auto",px:2,py:4},children:[Object(V.jsx)(O.a,{variant:"h2",sx:{textAlign:"center"},children:"Current Employees"}),Object(V.jsx)(ae.a,{data:e,columns:te,hasSearchBar:!0})]})})},ie=function(){return Object(V.jsx)(c.a,{children:Object(V.jsxs)(l.c,{children:[Object(V.jsx)(l.a,{exact:!0,path:d.EMPLOYEE.CREATE,children:Object(V.jsx)(ee,{})}),Object(V.jsx)(l.a,{path:d.EMPLOYEE.INDEX,children:Object(V.jsx)(ne,{})})]})})},re=function(){return Object(V.jsx)(o.b,{dateAdapter:s.a,children:Object(V.jsx)(ie,{})})},be=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,244)).then((function(a){var t=a.getCLS,n=a.getFID,i=a.getFCP,r=a.getLCP,b=a.getTTFB;t(e),n(e),i(e),r(e),b(e)}))};b.a.render(Object(V.jsx)(i.a.StrictMode,{children:Object(V.jsx)(re,{})}),document.getElementById("root")),be()}},[[174,1,2]]]);
//# sourceMappingURL=main.88de00ea.chunk.js.map