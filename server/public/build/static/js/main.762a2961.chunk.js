(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},22:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},52:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),c=n(19),a=n.n(c),o=n(2),r=(n(41),n(7)),l=n.p+"static/media/DILG.ab553d0e.png",h=n.p+"static/media/help.706ccffa.png",j=(n(42),n(0)),d=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"enterHome",children:Object(j.jsx)(o.b,{to:"/home",children:"Click to enter"})}),Object(j.jsxs)("div",{className:"landingText",children:[Object(j.jsxs)("h1",{children:["share your outfit on",Object(j.jsx)("br",{}),"OOTD"]}),Object(j.jsxs)("span",{children:["Outfit ",Object(j.jsx)("br",{}),"Of ",Object(j.jsx)("br",{})," The Dayumnnn"]})]}),Object(j.jsx)("div",{className:"first",id:"first-landing",children:Object(j.jsx)("img",{className:"homeimg",src:l,alt:"ilookgood"})}),Object(j.jsx)("div",{className:"second",id:"second-landing",children:Object(j.jsx)("img",{className:"homeimg",src:h,alt:"plzhelp"})})]})},u=(n(22),function(){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"container",id:"container",children:[Object(j.jsx)("div",{className:"first",id:"first",onClick:function(){window.location.href="/ilookgood"},children:Object(j.jsx)("img",{className:"homeimg",src:l,alt:"ilookgood"})}),Object(j.jsx)("div",{className:"second",id:"second",onClick:function(){window.location.href="/plzhelp"},children:Object(j.jsx)("img",{className:"homeimg",src:h,alt:"plzhelp"})})]})})})}),m=n(3),p=n(4),b=n(6),O=n(5),f=(n(52),n(11)),x=i.a.createContext(),g=function(e){return function(t){return Object(j.jsx)(x.Consumer,{children:function(n){return Object(j.jsx)(e,Object(f.a)(Object(f.a)({},t),{},{context:n}))}})}},v=n(23),N=n.n(v).a.create({baseURL:"https://project-3-ootd.herokuapp.com",withCredentials:!0});function C(e){if(e.response.data)throw console.log(e.response&&e.response.data),e;throw e}var w={service:N,signup:function(e){return N.post("/api/auth/signup",e).then((function(e){return e.data})).catch(C)},signin:function(e){return N.post("/api/auth/signin",e).then((function(e){return e.data})).catch(C)},isLoggedIn:function(){return N.get("/api/users/me").then((function(e){return e.data})).catch(C)},logout:function(){return N.get("/api/auth/signout").then((function(e){return e.data})).catch(C)},getUser:function(){return N.get("/api/users/me").then((function(e){return e.data})).catch(C)},getUserInfos:function(){return N.get("/api/users/me").then((function(e){return e.data})).catch(C)},getUserPosts:function(){return N.get("/api/ilookgood").then((function(e){return e.data})).catch(C)}},y=g((function(e){var t=e.context;return Object(j.jsx)("nav",{className:"NavMain",children:Object(j.jsxs)("ul",{className:"nav-list",children:[t.isLoggedIn&&Object(j.jsx)(i.a.Fragment,{children:Object(j.jsxs)("div",{className:"navbar",children:[Object(j.jsxs)("div",{className:"dropdown",children:[Object(j.jsxs)("button",{class:"dropbtn",children:[Object(j.jsx)("span",{className:"Hi",children:"Hi, "}),t.user&&t.user.userName]}),Object(j.jsxs)("div",{class:"dropdown-content",children:[Object(j.jsx)("li",{className:"profilepage",children:Object(j.jsx)(o.c,{to:"/userprofile",children:"Profile"})}),Object(j.jsx)("li",{className:"userHome",children:Object(j.jsx)(o.c,{to:"/create",children:"Create post"})}),Object(j.jsx)("li",{className:"link-dilg",children:Object(j.jsx)(o.c,{to:"/ilookgood",children:"DILG"})}),Object(j.jsx)("li",{className:"link-plzhelp",children:Object(j.jsx)(o.c,{to:"/plzhelp",children:"Plz help!"})})]})]}),Object(j.jsx)("li",{className:"signout",children:Object(j.jsx)(o.c,{to:"/home",onClick:function(){w.logout().then((function(){t.removeUser()})).catch((function(e){console.log(e)}))},children:" Sign out"})})]})}),!t.isLoggedIn&&Object(j.jsx)(i.a.Fragment,{children:Object(j.jsxs)("div",{className:"navbar",children:[Object(j.jsx)("li",{className:"signup-nav notLoggedIn",children:Object(j.jsx)(o.c,{to:"/signup",children:"Create Account"})}),Object(j.jsx)("li",{className:"signin notLoggedIn",children:Object(j.jsx)(o.c,{to:"/signin",children:"Log In"})})]})})]})})})),k=(n(71),function(){return Object(j.jsx)("div",{className:"footer",children:Object(j.jsx)("p",{className:"footerP",children:" OOTD\xa9 | Digital Fashion Magazine | jinjoo x jessie"})})}),S=(n(72),n(17),w.service),D=g((function(e){var t=e.context;function n(e){e.target.value,e.target.name}return Object(j.jsx)("div",{children:Object(j.jsx)("section",{className:"form-section",children:Object(j.jsxs)("form",{autoComplete:"off",className:"userprofileForm",onSubmit:function(e){var t=this;e.preventDefault();var n=new FormData;n.append("userName",this.state.userName),n.append("password",this.state.password);var s=this.props.match.params.id;S.patch("me/".concat(s),n).then((function(e){t.props.history.push("/userprofile"),console.log(e)})).catch((function(e){console.log(e)}))},children:[Object(j.jsx)("h1",{className:"header",children:" Edit profile "}),Object(j.jsx)("p",{className:"headerTextUser",children:" and check out your posts "}),Object(j.jsxs)("div",{className:"form-container",children:[Object(j.jsxs)("h4",{children:["Update your profile and edit your posts here,"," ",t.user&&t.user.userName," "]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"username",children:"User Name"}),Object(j.jsx)("input",{onChange:n,type:"text",id:"text",name:"username",placeholder:t.user&&t.user.userName,style:{width:"100px"}})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{onChange:n,type:"currentPassword",id:"password",name:"password",placeholder:"password",style:{width:"100px"}})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{onChange:n,type:"email",id:"email",name:"email",placeholder:t.user&&t.user.email,style:{width:"100px"}}),Object(j.jsxs)("button",{className:"profileSubmit",onClick:function(){window.location.href="/userprofile"},children:[" ","Submit"," "]})]})]})]})})})})),F=w.service,I=g(function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(m.a)(this,n);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={coolPosts:[]},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;F.get("/api/users/me/posts").then((function(t){e.setState({coolPosts:t.data}),console.log(e.state.apiResponse.data)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"nav",children:Object(j.jsx)(y,{})}),Object(j.jsxs)("div",{className:"userContainer",children:[Object(j.jsx)("div",{className:"formProfile",children:Object(j.jsx)(D,{})}),this.state.coolPosts.map((function(t){return Object(j.jsx)("div",{className:"mainPageUser",children:Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"mainPostUser",children:Object(j.jsx)(o.b,{to:"/ilookgood/".concat(t._id,"/edit"),children:Object(j.jsx)("img",{src:t.image,alt:"pic here"})})})},e.state.posts)})}))]}),Object(j.jsx)(k,{})]})}}]),n}(i.a.Component)),U=(n(34),w.service),P=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(m.a)(this,n);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={coolPosts:[]},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;U.get("api/ilookgood").then((function(t){e.setState({coolPosts:t.data}),console.log(t)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"nav",children:Object(j.jsx)(y,{})}),Object(j.jsx)("div",{className:"mainPageHeader",children:Object(j.jsx)("h1",{className:"header",children:" OOTD "})}),Object(j.jsx)("div",{className:"mainPage",children:this.state.coolPosts.map((function(e){return Object(j.jsx)("div",{className:"mainContainer",children:Object(j.jsxs)("div",{className:"mainPost",children:[Object(j.jsx)("img",{className:"postImg",src:e.image,alt:e.postingUser.userName}),Object(j.jsx)("div",{className:"overlay",children:Object(j.jsx)(o.b,{to:"/ilookgood/".concat(e._id),children:Object(j.jsxs)("p",{className:"postUser",children:[e.occasionOfOutfit," by"," ",e.postingUser.userName]})})})]},e._id)})}))}),Object(j.jsx)(k,{})]})}}]),n}(i.a.Component),L=n(9),M=(n(18),w.service),R=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(m.a)(this,n);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={postingUser:"",itemDescription:"",itemInformation:"",occasionOfOutfit:"",image:"",previewURL:"",outfitMoodComment:""},e.handleFileOnChange=function(t){t.preventDefault();var n=new FileReader,s=t.target.files[0];console.log(s),n.onloadend=function(){e.setState({image:s,previewURL:n.result})},n.readAsDataURL(s)},e.handleChange=function(t){var n=t.target.value,s=t.target.name;e.setState(Object(L.a)({},s,n))},e.handleSubmit=function(t){t.preventDefault();var n=new FormData;n.append("image",e.state.image),n.append("itemDescription",e.state.itemDescription),n.append("itemInformation",e.state.itemInformation),n.append("occasionOfOutfit",e.state.occasionOfOutfit),n.append("outfitMoodComment",e.state.outfitMoodComment),M.post("/api/ilookgood",n).then((function(t){console.log(t),e.props.history.push("/ilookgood")})).catch((function(e){console.log(e)}))},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;M.get("/api/users/me").then((function(t){console.log(t);var n=t.data;e.setState(Object(f.a)({},n))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=null;return""!==this.state.file&&(e=Object(j.jsx)("img",{className:"file_preview",src:this.state.previewURL,onerror:"this.style.display='none'"})),Object(j.jsxs)("div",{className:"DILG-box",children:[Object(j.jsx)("p",{className:"guideText",children:"share your own"}),Object(j.jsx)("h1",{className:"header",children:"OOTD"}),Object(j.jsx)("div",{className:"form",children:Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsxs)("h2",{className:"DILG-header",children:[this.state.userName," Show us your OOTD!"]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"item",children:"Which item you like the most?"}),Object(j.jsxs)("select",{onChange:this.handleChange,value:this.state.itemDescription,id:"itemDescription",name:"itemDescription",children:[Object(j.jsx)("option",{value:"top",children:"Top"}),Object(j.jsx)("option",{value:"bottom",children:"Bottom"}),Object(j.jsx)("option",{value:"dress",children:"Dress"}),Object(j.jsx)("option",{value:"outer",children:"Outer"}),Object(j.jsx)("option",{value:"shoes",children:"Shoes"}),Object(j.jsx)("option",{value:"accessary",children:"Accessary"}),Object(j.jsx)("option",{value:"other",children:"Other"})]})]}),Object(j.jsx)("label",{htmlFor:"itemInformation",children:"Where is this item from?"}),Object(j.jsx)("input",{onChange:this.handleChange,value:this.state.itemInformation,type:"text",id:"itemInformation",name:"itemInformation"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"occasionOfOutfit",children:"What was the occasion of this outfit?"}),Object(j.jsxs)("select",{onChange:this.handleChange,value:this.state.occasionOfOutfit,id:"occasionOfOutfit",name:"occasionOfOutfit",children:[Object(j.jsx)("option",{value:"office",children:"Office"}),Object(j.jsx)("option",{value:"school",children:"School"}),Object(j.jsx)("option",{value:"sport",children:"Sport"}),Object(j.jsx)("option",{value:"date",children:"Date"}),Object(j.jsx)("option",{value:"festival",children:"Festival"}),Object(j.jsx)("option",{value:"travel",children:"Travel"}),Object(j.jsx)("option",{value:"weekend",children:"Weekend"}),Object(j.jsx)("option",{value:"specialDay",children:"Special day"}),Object(j.jsx)("option",{value:"other",children:"Other"})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"image",children:"Your outfit picture"}),Object(j.jsx)("input",{type:"file",id:"coolPostPic",name:"image",onChange:this.handleFileOnChange})]}),Object(j.jsxs)("div",{className:"outfitCommentbox",children:[Object(j.jsx)("label",{className:"outfitmoodLabel",htmlFor:"outfitMoodComment",children:"add some comments"}),Object(j.jsx)("textarea",{id:"outfitMoodComment",name:"outfitMoodComment",cols:"30",rows:"5",value:this.state.outfitMoodComment,onChange:this.handleChange})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{children:"Submit"})})]})}),Object(j.jsxs)("div",{className:"fileImg",children:["Your outfit pic preview ",e]}),Object(j.jsx)(k,{})]})}}]),n}(s.Component),T=Object(r.g)(g(R)),A=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(y,{}),Object(j.jsx)("div",{children:Object(j.jsx)(T,{})})]})},z=w.service,W=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(m.a)(this,n);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={helpPosts:[]},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;z.get("/api/plzhelp").then((function(t){e.setState({helpPosts:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"nav",children:Object(j.jsx)(y,{})}),Object(j.jsxs)("div",{className:"mainPageHeader",children:[Object(j.jsx)("h1",{className:"header",children:" SOS "}),Object(j.jsx)("p",{className:"headerTextHelp",children:"EMERGENCY"})]}),Object(j.jsx)("div",{className:"mainPage",children:this.state.helpPosts.map((function(e){return Object(j.jsx)("div",{className:"mainContainer",children:Object(j.jsxs)("div",{className:"mainPost",children:[Object(j.jsx)("img",{className:"postImg",src:e.image,alt:e.userName}),Object(j.jsx)("div",{className:"overlay",children:Object(j.jsx)(o.b,{to:"/plzhelp/".concat(e._id),children:Object(j.jsxs)("p",{className:"postUser",children:[e.postingUser.userName," needs help!"]})})})]},e.postingUser.userName)})}))}),Object(j.jsx)(k,{})]})}}]),n}(i.a.Component),_=w.service,E=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(m.a)(this,n);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={userName:"",occasionOfOutfit:"",iamge:"",previewURL:"",problemComment:""},e.handleFileOnChange=function(t){t.preventDefault();var n=new FileReader,s=t.target.files[0];n.onloadend=function(){e.setState({image:s,previewURL:n.result})},n.readAsDataURL(s)},e.handleChange=function(t){var n=t.target.value,s=t.target.name;e.setState(Object(L.a)({},s,n))},e.handleSubmit=function(t){t.preventDefault();var n=new FormData;n.append("image",e.state.image),n.append("occasionOfOutfit",e.state.occasionOfOutfit),n.append("problemComment",e.state.problemComment),_.post("/api/plzhelp",n).then((function(t){e.props.history.push("/plzhelp")})).catch((function(e){console.log(e)}))},e}return Object(p.a)(n,[{key:"render",value:function(){var e=null;return""!==this.state.file&&(e=Object(j.jsx)("img",{className:"file_preview",src:this.state.previewURL,onerror:"this.style.display='none'"})),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"nav",children:[" ",Object(j.jsx)(y,{children:" "})]}),Object(j.jsx)("p",{className:"guideText",children:"share your own"}),Object(j.jsx)("h1",{className:"header",children:"OOTD"}),Object(j.jsxs)("div",{className:"DILG-box",children:[Object(j.jsx)("div",{className:"form",children:Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsx)("h2",{children:" Ask for some advice "}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"occasionOfOutfit",children:"What would be the occasion of this outfit?"}),Object(j.jsx)("input",{onChange:this.handleChange,value:this.state.occasionOfOutfit,type:"text",id:"occasionOfOutfit",name:"occasionOfOutfit"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"image",children:"Show us your outfit!"}),Object(j.jsx)("input",{type:"file",id:"plzHelpPic",name:"image",onChange:this.handleFileOnChange})]}),Object(j.jsx)("label",{htmlFor:"problemComment",children:"some comments?"}),Object(j.jsx)("textarea",{id:"problemComment",name:"problemComment",value:this.state.problemComment,onChange:this.handleChange}),Object(j.jsx)("button",{onClick:function(){window.location.href="/plzhelp"},children:"Submit"})]})}),Object(j.jsxs)("div",{className:"fileImg",children:["Your outfit pic preview ",e]}),Object(j.jsx)(k,{})]})]})}}]),n}(s.Component),H=Object(r.g)(g(E)),B=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(y,{}),Object(j.jsx)("div",{children:Object(j.jsx)(H,{})})]})},G=(n(73),function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"popup",children:Object(j.jsxs)("div",{className:"popup_open",children:[Object(j.jsx)("p",{className:"updated",children:"Updated!"}),Object(j.jsx)("button",{className:"getBackToUser",onClick:function(){window.location.href="/userprofile"},children:"go back to main page!"})]})})}}]),n}(i.a.Component)),Y=w.service,V=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(m.a)(this,n);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={postingUser:"",itemDescription:"",itemInformation:"",occasionOfOutfit:"",image:"",previewURL:"",outfitMoodComment:"",showPopup:!1},e.handleFileOnChange=function(t){t.preventDefault();var n=new FileReader,s=t.target.files[0];console.log(s),n.onloadend=function(){e.setState({image:s,previewURL:n.result})},n.readAsDataURL(s)},e.handleChange=function(t){var n=t.target.value,s=t.target.name;e.setState(Object(L.a)({},s,n))},e.handleSubmit=function(t){t.preventDefault();var n=new FormData;n.append("image",e.state.image),n.append("itemDescription",e.state.itemDescription),n.append("itemInformation",e.state.itemInformation),n.append("occasionOfOutfit",e.state.occasionOfOutfit),n.append("outfitMoodComment",e.state.outfitMoodComment);var s=e.props.match.params.id;Y.patch("/api/ilookgood/".concat(s),n).then((function(t){e.props.history.push("/userprofile"),console.log(t)})).catch((function(e){console.log(e)}))},e.handleDelete=function(){var t=e.props.match.params.id;Y.delete("/api/ilookgood/".concat(t)).then((function(n){e.props.history.push("/userprofile"),console.log(n),e.setState({data:e.state.data.filter((function(e){return e._id!==t}))})})).catch((function(e){console.log(e)}))},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;Y.get("/api/ilookgood/"+t).then((function(t){var n=t.data;e.setState(Object(f.a)({},n))})).catch((function(e){console.log(e)}))}},{key:"togglePopup",value:function(){this.setState({showPopup:!this.state.showPopup})}},{key:"render",value:function(){var e=null;return""!==this.state.file&&(e=Object(j.jsx)("img",{className:"file_preview",src:this.state.previewURL,onerror:"this.style.display='none'"})),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"nav",children:[" ",Object(j.jsx)(y,{children:" "})]}),Object(j.jsxs)("div",{className:"DILG-box",children:[Object(j.jsx)("div",{className:"form",children:Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsxs)("h2",{children:[this.state.postingUser.userName," Show us your OOTD!"]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"item",children:"Which item you like the most?"}),Object(j.jsxs)("select",{onChange:this.handleChange,value:this.state.itemDescription,id:"itemDescription",name:"itemDescription",children:[Object(j.jsx)("option",{value:"top",children:"Top"}),Object(j.jsx)("option",{value:"bottom",children:"Bottom"}),Object(j.jsx)("option",{value:"dress",children:"Dress"}),Object(j.jsx)("option",{value:"outer",children:"Outer"}),Object(j.jsx)("option",{value:"shoes",children:"Shoes"}),Object(j.jsx)("option",{value:"accessary",children:"Accessary"}),Object(j.jsx)("option",{value:"other",children:"Other"})]})]}),Object(j.jsx)("label",{htmlFor:"itemInformation",children:"Where is this item from?"}),Object(j.jsx)("input",{onChange:this.handleChange,value:this.state.itemInformation,type:"text",id:"itemInformation",name:"itemInformation"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"occasionOfOutfit",children:"What was the occasion of this outfit?"}),Object(j.jsxs)("select",{onChange:this.handleChange,value:this.state.occasionOfOutfit,id:"occasionOfOutfit",name:"occasionOfOutfit",children:[Object(j.jsx)("option",{value:"office",children:"Office"}),Object(j.jsx)("option",{value:"school",children:"School"}),Object(j.jsx)("option",{value:"sport",children:"Sport"}),Object(j.jsx)("option",{value:"date",children:"Date"}),Object(j.jsx)("option",{value:"festival",children:"Festival"}),Object(j.jsx)("option",{value:"travel",children:"Travel"}),Object(j.jsx)("option",{value:"weekend",children:"Weekend"}),Object(j.jsx)("option",{value:"specialDay",children:"Special day"}),Object(j.jsx)("option",{value:"other",children:"Other"})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"image",children:"Your outfit picture"}),Object(j.jsx)("input",{type:"file",id:"coolPostPic",name:"image",onChange:this.handleFileOnChange}),Object(j.jsx)("img",{src:this.state.image})]}),Object(j.jsxs)("div",{className:"outfitCommentbox",children:[Object(j.jsx)("label",{htmlFor:"outfitMoodComment",children:"say sth"}),Object(j.jsx)("textarea",{id:"outfitMoodComment",name:"outfitMoodComment",value:this.state.outfitMoodComment,onChange:this.handleChange})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:this.togglePopup.bind(this),children:"Update"}),this.state.showPopup?Object(j.jsx)(G,{text:"update done",closePopup:this.togglePopup.bind(this)}):null]})]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"fileImg",children:[" ","Your outfit pic preview ",e]})}),Object(j.jsx)("div",{className:"deleteButton",children:Object(j.jsx)("button",{onClick:this.handleDelete,children:" Delete "})})]}),Object(j.jsx)(k,{})]})}}]),n}(s.Component),J=Object(r.g)(g(V)),q=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(J,{})})},K=w.service,Q=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(m.a)(this,n);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={userName:"",occasionOfOutfit:"",iamge:"",previewURL:"",problemComment:"",showPopup:!1},e.handleFileOnChange=function(t){t.preventDefault();var n=new FileReader,s=t.target.files[0];n.onloadend=function(){e.setState({image:s,previewURL:n.result})},n.readAsDataURL(s)},e.handleChange=function(t){var n=t.target.value,s=t.target.name;e.setState(Object(L.a)({},s,n))},e.handleSubmit=function(t){t.preventDefault();var n=new FormData;n.append("image",e.state.image),n.append("occasionOfOutfit",e.state.occasionOfOutfit),n.append("problemComment",e.state.problemComment);var s=e.props.match.params.id;K.patch("/api/plzhelp/".concat(s),n).then((function(t){e.props.history.push("/userprofile"),console.log(t)})).catch((function(e){console.log(e)}))},e.handleDelete=function(){var t=e.props.match.params.id;K.delete("/api/plzhelp/".concat(t)),e.props.history.push("/userprofile").then((function(n){console.log(n),e.setState({data:e.state.data.filter((function(e){return e._id!==t}))})})).catch((function(e){console.log(e)}))},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;K.get("/api/plzhelp/"+t).then((function(t){var n=t.data;e.setState(Object(f.a)({},n))})).catch((function(e){console.log(e)}))}},{key:"togglePopup",value:function(){this.setState({showPopup:!this.state.showPopup})}},{key:"render",value:function(){console.log(this.state.image);var e=null;return""!==this.state.file&&(e=Object(j.jsx)("img",{className:"file_preview",src:this.state.previewURL,alt:"preview upload file"})),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsxs)("h2",{children:[this.state.postingUser," Ask for some advice "]}),Object(j.jsx)("label",{htmlFor:"occasionOfOutfit",children:"What would be the occasion of this outfit?"}),Object(j.jsx)("input",{onChange:this.handleChange,value:this.state.occasionOfOutfit,type:"text",id:"occasionOfOutfit",name:"occasionOfOutfit"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"image",children:"Show us your outfit!"}),Object(j.jsx)("input",{type:"file",id:"plzHelpPic",name:"image",onChange:this.handleFileOnChange}),e,Object(j.jsx)("img",{src:this.state.image})]}),Object(j.jsx)("label",{htmlFor:"problemComment",children:"some comments?"}),Object(j.jsx)("textarea",{id:"problemComment",name:"problemComment",value:this.state.problemComment,onChange:this.handleChange}),Object(j.jsx)("button",{onClick:this.togglePopup.bind(this),children:"Update"}),this.state.showPopup?Object(j.jsx)(G,{text:"update done",closePopup:this.togglePopup.bind(this)}):null]}),Object(j.jsx)("button",{onClick:this.handleDelete,children:" Delete "})]})}}]),n}(s.Component),X=Object(r.g)(g(Q)),Z=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Edit pls help "}),Object(j.jsx)(X,{})]})},$=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(m.a)(this,n);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={email:"",password:""},e.handleChange=function(t){var n=t.target.name,s=t.target.value;e.setState(Object(L.a)({},n,s))},e.handleSubmit=function(t){t.preventDefault(),w.signin(e.state).then((function(t){e.props.context.setUser(t)})).catch((function(e){console.log(e)}))},e}return Object(p.a)(n,[{key:"render",value:function(){return this.props.context.user?Object(j.jsx)(r.a,{to:"/userhome"}):Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"form-box",id:"form-box",children:[Object(j.jsx)("div",{className:"first sign",id:"first",children:Object(j.jsx)("form",{onChange:this.handleChange,onSubmit:this.handleSubmit,children:Object(j.jsxs)("div",{className:"first-container",children:[Object(j.jsx)("h2",{children:"SIGN IN"}),Object(j.jsx)("label",{htmlFor:"email"}),Object(j.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Email",className:"email"}),Object(j.jsxs)("p",{children:[" ",Object(j.jsx)("label",{htmlFor:"password"}),Object(j.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"Password",className:"password"})]}),Object(j.jsx)("button",{className:"submit-signin",children:"Submit"})]})})}),Object(j.jsx)("div",{className:"second sign",id:"second",children:Object(j.jsxs)("div",{className:"second-container",children:[Object(j.jsx)("h2",{className:"signUpText",children:" NEED FASHION ADVICE? "}),Object(j.jsxs)(o.c,{to:"signup",className:"signup",children:[" ","SIGN UP"," "]})]})})]})})}}]),n}(s.Component),ee=Object(r.g)(g($)),te=(n(74),function(e){return Object(j.jsx)("div",{children:Object(j.jsx)(ee,{})})}),ne=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(m.a)(this,n);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={email:"",password:"",userName:"",profileImg:""},e.handleFileOnChange=function(t){t.preventDefault();var n=new FileReader,s=t.target.files[0];console.log(s),n.onloaded=function(){e.setState({profileImg:s,previewURL:n.result})},n.readAsDataURL(s)},e.handleChange=function(t){var n=t.target.value,s=t.target.name;e.setState(Object(L.a)({},s,n))},e.handleSubmit=function(t){t.preventDefault();var n=new FormData;n.append("image",e.state.profileImg),n.append("password",e.state.password),n.append("email",e.state.email),n.append("userName",e.state.userName),w.signup(e.state).then((function(){e.props.history.push("/signin")})).catch((function(e){console.log(e)}))},e.handleFileSelect=function(){e.setState({})},e}return Object(p.a)(n,[{key:"render",value:function(){if(this.props.context.user)return Object(j.jsx)(r.a,{to:"/signin"});var e=null;return""!==this.state.file&&(e=Object(j.jsx)("img",{className:"file_preview",src:this.state.previewURL,alt:"preview pic"})),Object(j.jsx)("div",{className:"form-container",children:Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsx)("h2",{children:"Signup"}),Object(j.jsx)("label",{htmlFor:"userName",children:"Username "}),Object(j.jsx)("input",{onChange:this.handleChange,defaultValue:"UserName",type:"userName",id:"userName",name:"userName"}),Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{onChange:this.handleChange,value:this.state.email,type:"email",id:"email",name:"email"}),Object(j.jsx)("label",{htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{onChange:this.handleChange,value:this.state.password,type:"password",id:"password",name:"password"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"profileImg",children:" Your pic here "}),Object(j.jsx)("input",{type:"file",id:"profileImg",name:"profileImg",onChange:this.handleFileOnChange}),e]}),Object(j.jsx)("button",{onClick:function(){window.location.href="/userhome"},children:"Submit"})]})})}}]),n}(s.Component),se=Object(r.g)(g(ne)),ie=(n(75),function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"signUpText",children:" Sign up "}),Object(j.jsx)(se,{})]})}),ce=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"container",id:"container",children:[Object(j.jsx)("div",{className:"first",id:"first",onClick:function(){window.location.href="/ilookgood"},children:Object(j.jsx)("img",{className:"homeimg",src:l,alt:"ilookgood"})}),Object(j.jsx)("div",{className:"second",id:"second",onClick:function(){window.location.href="/plzhelp"},children:Object(j.jsx)("img",{className:"homeimg",src:h,alt:"plzhelp"})})]})})})},ae=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)(i.a.Fragment,{children:Object(j.jsx)("li",{className:"signin",children:Object(j.jsx)(o.c,{to:"/signin",children:"Sign in"})})}),Object(j.jsx)(i.a.Fragment,{children:Object(j.jsx)("li",{className:"signup",children:Object(j.jsx)(o.c,{to:"/signup",children:"Sign up"})})})]})})},oe=(n(76),w.service),re=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(m.a)(this,n);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={postId:e.props.match.params.id,onModel:e.props.model,comment:""},e.handleChange=function(t){e.setState({comment:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var n={postId:e.state.postId,onModel:e.state.onModel,comment:e.state.comment},s=e.props.match.params.id;oe.post("/api/detail/ilookgood/".concat(s),n).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},e.handleRefresh=function(){window.location.reload()},e}return Object(p.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsx)("label",{htmlFor:"comment"}),Object(j.jsx)("input",{type:"text",onChange:this.handleChange,placeholder:"be nice :)",name:"comment"}),Object(j.jsx)("button",{className:"commentSubmit",onClick:this.handleRefresh,children:"post"})]})})}}]),n}(s.Component),le=Object(r.g)(g(re)),he=function(e){var t=e.modelValue;return Object(j.jsx)("div",{children:Object(j.jsx)(le,{model:t})})},je=(n(77),w.service),de=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(m.a)(this,n);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={comments:[]},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;je.get("/api/detail/ilookgood/"+this.props.match.params.id).then((function(t){e.setState({comments:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{className:"hrLine"}),Object(j.jsx)("h1",{className:"comment",children:" comment "}),this.state.comments.map((function(e){return console.log(e.userId.userName),Object(j.jsx)("div",{className:"commentListBox",children:Object(j.jsx)("ul",{children:Object(j.jsxs)("li",{className:"comments",children:[" ",Object(j.jsx)("b",{children:e.userId.userName})," : ",e.comment]})})},e)}))]})}}]),n}(i.a.Component),ue=Object(r.g)(de),me=(n(35),w.service),pe=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(m.a)(this,n);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={detail:[]},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;me.get("/api/ilookgood/").then((function(t){var n=t.data.find((function(t){return t._id===e.props.match.params.id}));e.setState(Object(f.a)({},n))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"nav",children:Object(j.jsx)(y,{})}),Object(j.jsx)("div",{className:"pageContainer",children:Object(j.jsxs)("div",{className:"imageContainer",children:[Object(j.jsx)("p",{children:this.state.user}),Object(j.jsxs)("div",{className:"detailImagebox",children:[" Preview picture here",Object(j.jsx)("img",{src:this.state.image,onerror:"this.style.display='none'"}),Object(j.jsx)("button",{className:"wow",children:"WoW"})]}),Object(j.jsxs)("div",{className:"infoContainer",children:[Object(j.jsxs)("p",{children:[" The item I love the most of this outfit is the ",this.state.itemDescription,"  "]}),Object(j.jsxs)("p",{children:["Item Information : ",this.state.itemInformation]}),Object(j.jsxs)("p",{children:["Occassion of Outfit: ",this.state.occasionOfOutfit]}),Object(j.jsxs)("p",{children:["Outfit mood : ",this.state.outfitMoodComment]}),Object(j.jsxs)("p",{children:["Posting Time: ",this.state.postingTime]}),Object(j.jsxs)("div",{className:"commentBox",children:[Object(j.jsx)(ue,{}),Object(j.jsx)(he,{modelValue:"CoolPost"})]})]})]},this.state.detail)}),Object(j.jsx)(k,{})]})}}]),n}(i.a.Component),be=w.service,Oe=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(m.a)(this,n);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={postingUser:"",image:"",occasionOfOutfit:"",problemComment:"",postingTime:"",_id:""},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;be.get("/api/plzhelp/".concat(t)).then((function(t){var n=t.data;e.setState(Object(f.a)({},n))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"nav",children:Object(j.jsx)(y,{})}),Object(j.jsx)("div",{className:"pageContainer",children:Object(j.jsxs)("div",{className:"imageContainer",children:[Object(j.jsxs)("div",{className:"detailImagebox",children:[Object(j.jsx)("img",{src:this.state.image,alt:"posted picture"}),Object(j.jsx)("button",{className:"wow",children:"WoW"})]}),Object(j.jsxs)("div",{className:"infoContainer",children:[Object(j.jsxs)("h4",{className:"occasionHelp",children:["This outfit is for the ",this.state.occasionOfOutfit]}),Object(j.jsxs)("p",{children:[Object(j.jsxs)("b",{children:[this.state.postingUser.userName,"'s fashion problem : "]}),this.state.problemComment]}),Object(j.jsx)("p",{children:this.state.postingTime}),Object(j.jsxs)("div",{className:"commentBox",children:[Object(j.jsx)(ue,{}),Object(j.jsx)(he,{modelValue:"HelpPost"})]})]})]},this.state.detail)}),Object(j.jsx)(k,{})]})}}]),n}(i.a.Component),fe=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"container",id:"container",children:[Object(j.jsx)("h3",{className:"createClick",children:"Click where you want to post !"}),Object(j.jsx)("div",{className:"first",id:"first",onClick:function(){window.location.href="/ilookgood/post"},children:Object(j.jsx)("img",{className:"homeimg",src:l,alt:"ilookgood"})}),Object(j.jsx)("div",{className:"second",id:"second",onClick:function(){window.location.href="/plzhelp/post"},children:Object(j.jsx)("img",{className:"homeimg",src:h,alt:"plzhelp"})})]})})})};n(78);var xe=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(r.d,{children:[Object(j.jsx)(r.b,{exact:!0,path:"/",component:d}),Object(j.jsx)(r.b,{exact:!0,path:"/home",transition:"glide-right",component:u}),Object(j.jsx)(r.b,{exact:!0,path:"/userhome",component:ce}),Object(j.jsx)(r.b,{exact:!0,path:"/ilookgood",component:P}),Object(j.jsx)(r.b,{exact:!0,path:"/plzhelp",component:W}),Object(j.jsx)(r.b,{exact:!0,path:"/create",component:fe}),Object(j.jsx)(r.b,{exact:!0,path:"/ilookgood/post",component:A}),Object(j.jsx)(r.b,{exact:!0,path:"/plzhelp/post",component:B}),Object(j.jsx)(r.b,{exact:!0,path:"/ilookgood/:id",component:pe}),Object(j.jsx)(r.b,{exact:!0,path:"/plzhelp/:id",component:Oe}),Object(j.jsx)(r.b,{exact:!0,path:"/ilookgood/:id/edit",component:q}),Object(j.jsx)(r.b,{exact:!0,path:"/plzhelp/:id/edit",component:Z}),Object(j.jsx)(r.b,{exact:!0,path:"/signin",component:te}),Object(j.jsx)(r.b,{exact:!0,path:"/signup",component:ie}),Object(j.jsx)(r.b,{exact:!0,path:"/signout",component:ae}),Object(j.jsx)(r.b,{exact:!0,path:"/userprofile",component:I})]})})},ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),s(e),i(e),c(e),a(e)}))},ve=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(m.a)(this,n);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={user:null,isLoggedIn:!1,isLoading:!0},e.removeUser=function(){w.logout().then((function(){e.setState({user:null,isLoggedIn:!1})}))},e.setUser=function(t){e.setState({user:t,isLoggedIn:!0})},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;w.isLoggedIn().then((function(t){e.setState({user:t,isLoggedIn:!0,isLoading:!1})})).catch((function(t){e.setState({isLoggedIn:!1,isLoading:!1})}))}},{key:"render",value:function(){var e={user:this.state.user,isLoggedIn:this.state.isLoggedIn,isLoading:this.state.isLoading,removeUser:this.removeUser,setUser:this.setUser};return Object(j.jsx)(x.Provider,{value:e,children:this.props.children})}}]),n}(i.a.Component);a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(o.a,{children:Object(j.jsx)(ve,{children:Object(j.jsx)(xe,{})})})}),document.getElementById("root")),ge()}},[[79,1,2]]]);
//# sourceMappingURL=main.762a2961.chunk.js.map