(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),a=n(6),c=n.n(a),r=(n(12),n(13),n(2)),o=n(3),l=n(5),d=n(4),h=(n(14),n(0)),u=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).collapseWidth=e.collapseWidth||600,i.state={collapsed:!0,bigWindow:window.innerWidth>=i.collapseWidth},i}return Object(o.a)(n,[{key:"collapseNav",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"setWindowState",value:function(){this.setState({bigWindow:window.innerWidth>=this.collapseWidth})}},{key:"componentDidMount",value:function(){var e=this;this.setWindowState(),window.addEventListener("resize",(function(){return e.setWindowState()}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,i=t.titleLink,s=t.children;return Object(h.jsxs)("nav",{children:[Object(h.jsxs)("div",{className:"nav-left",children:[Object(h.jsx)("button",{type:"switch",className:"nav-button interactive",onClick:function(){return e.collapseNav()},children:"\u2261 "}),Object(h.jsxs)("a",{href:i,children:[" ",Object(h.jsx)("h2",{children:n})," "]})]}),Object(h.jsx)("div",{className:"nav-drawer ".concat(!this.state.collapsed&&this.state.bigWindow?"nav-drawer-vis":"nav-drawer-invis"),children:!this.state.collapsed&&s.map((function(e){var t=e.name,n=e.url,i=e.id;return Object(h.jsx)("a",{href:n,onClick:function(){return window.dispatchEvent(new CustomEvent("navScroll"))},children:Object(h.jsx)("h3",{className:"nav-item interactive ",children:t})},i)}))})]})}}]),n}(s.a.Component),j=(n(16),function(e){var t=e.children;return Object(h.jsxs)("div",{className:"double-column",children:[Object(h.jsx)("div",{className:"left-double-column",children:t[0]}),Object(h.jsx)("div",{className:"right-double-column",children:t[1]})]})}),m=(n(17),function(e){var t=e.title,n=e.subtitle,i=e.picture,s=e.altText;return Object(h.jsx)("div",{className:"landing-bg",children:Object(h.jsxs)(j,{children:[Object(h.jsx)("img",{src:i,alt:s,className:"profilePicture"}),Object(h.jsxs)("div",{id:"landing-text",children:[Object(h.jsx)("h1",{children:t}),Object(h.jsx)("h3",{children:n})]})]})})}),p=(n(18),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this)).state={yPosition:0,hasAnimated:!1,willAnimate:!1,previousScroll:0,animationHeightBuffer:e.animationheightbuffer||200},i}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=c.a.findDOMNode(this);this.setState({yPosition:t.getBoundingClientRect().y}),window.addEventListener("scroll",(function(){var t=Math.round(window.scrollY)-e.state.animationHeightBuffer,n=t+window.innerHeight,i=e.state.yPosition<n&&e.state.yPosition>t&&!e.state.hasAnimated,s=e.state.hasAnimated||i;e.setState({willAnimate:i,hasAnimated:s})})),window.addEventListener("navScroll",(function(){return e.setState({willAnimate:!0})}))}},{key:"shouldComponentUpdate",value:function(){return this.state.hasAnimated&&window.scrollY>this.state.previousScroll+50||this.state.willAnimate}},{key:"componentDidUpdate",value:function(){this.setState({previousScroll:window.scrollY}),this.state.willAnimate&&this.setState({willAnimate:!1})}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.id,i=e.component,s=this.state,a=s.willAnimate,c=s.hasAnimated;return Object(h.jsxs)("section",{id:n,ref:this.viewRef,className:"scroll-animate ".concat(a||c?"scroll-animate-active":""),children:[Object(h.jsx)("a",{href:"#"+n,name:n,children:Object(h.jsx)("h2",{className:"section-title",id:n+"-title",children:t})}),i]})}}]),n}(s.a.Component)),f=(n(19),function(e){var t=e.name,n=e.description,i=e.url;return Object(h.jsx)("div",{className:"project interactive",children:Object(h.jsxs)("a",{href:i,className:"project-link",children:[Object(h.jsx)("h3",{className:"project-title",children:t}),n?Object(h.jsx)("p",{className:"project-description",children:n}):null]})})}),b=(n(20),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={isFetching:!0,projects:[]},i.username=e.username,e.maxRepos?i.maxRepos=e.maxRepos:i.maxRepos=6,i}return Object(o.a)(n,[{key:"fetchRepos",value:function(){var e=this,t=[];return fetch("https://api.github.com/users/".concat(this.props.username,"/repos?per_page=").concat(this.maxRepos)).then((function(e){return e.json()})).then((function(n){n.forEach((function(n){var i=n.name,s=n.description,a=n.id,c="https://www.github.com/".concat(e.username,"/").concat(i);t.push({name:i,description:s,url:c,id:a})})),e.setState({isFetching:!1})})).catch((function(t){console.error(t),e.setState({projects:{name:"Error fetching projects",id:0,url:""}})})),this.setState({isFetching:!1}),t}},{key:"componentDidMount",value:function(){this.setState({projects:this.fetchRepos()})}},{key:"render",value:function(){return this.state.isFetching?Object(h.jsx)("div",{className:"project-container",children:Object(h.jsx)("h1",{children:"Projects are loading..."})}):this.state.projects.length?Object(h.jsx)("div",{className:"project-container",children:this.state.projects.map((function(e){return Object(h.jsx)(f,{name:e.name,description:e.description,url:e.url},e.id)}))}):Object(h.jsx)("div",{className:"project-container",children:Object(h.jsx)("h1",{children:"No projects were found :("})})}}]),n}(s.a.Component)),v=(n(21),function(e){var t=e.title,n=e.array;return Object(h.jsxs)("div",{className:"list",children:[Object(h.jsx)("span",{className:"list-title",children:Object(h.jsx)("h3",{children:t})}),Object(h.jsx)("ul",{children:n.map((function(e){return Object(h.jsx)("li",{children:e},n.indexOf(e))}))})]})}),O=n.p+"static/media/profile.fea3bd2b.jpeg",x=(n(22),function(){var e=[{name:"Projects",jsx:Object(h.jsx)(b,{id:"project-container",username:"nmusey"})},{name:"Skills",jsx:Object(h.jsxs)(j,{children:[Object(h.jsx)(v,{title:"My Skills",array:["Front-End Development using React","RESTful API Development using Express.js and Node.js","Python","PostgreSQL"]}),Object(h.jsx)(v,{title:"What I'm Learning Now",array:["Machine learning theory & practice"]})]})},{name:"Contact",jsx:Object(h.jsx)("p",{children:"Feel free to contact me through email at nmusey@gmail.com with any questions or comments you might have."})}],t=e.map((function(t){return{name:t.name,url:"#"+t.name.toLowerCase(),id:e.indexOf(t)}}));return Object(h.jsxs)("main",{className:"homepage",children:[Object(h.jsx)(u,{title:"Nick Musey",titleLink:"#landing",children:t}),Object(h.jsx)("section",{id:"landing-section",children:Object(h.jsx)(m,{className:"landing",title:"Hi, I'm Nick",subtitle:"I'm a 4th year Computer Science and Psychology student at the University of Victoria.",picture:O,alt:"Picture of Nick"})}),Object(h.jsx)("div",{className:"personal-information",children:e.map((function(t){return Object(h.jsx)(p,{title:t.name,id:t.name.toLowerCase(),animationheightbuffer:200,component:t.jsx},e.indexOf(t))}))})]})});var w=function(){return Object(h.jsx)(x,{})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(h.jsx)(w,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[23,1,2]]]);
//# sourceMappingURL=main.97d859ca.chunk.js.map