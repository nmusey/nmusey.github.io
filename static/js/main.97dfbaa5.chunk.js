(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,function(e,t,n){e.exports=n.p+"static/media/profile.478c5a4e.jpeg"},,,,,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),l=n.n(c),i=(n(14),n(15),n(16),function(e){var t=e.title,n=e.children;return r.a.createElement("nav",null,r.a.createElement("a",{href:"#landing"},r.a.createElement("div",{className:"nav-left"},r.a.createElement("h2",null,t))),r.a.createElement("div",{className:"nav-right"},n.map((function(e){var t=e.name,n=e.url,a=e.id;return r.a.createElement("a",{className:"navbar-item",href:n,key:a},r.a.createElement("h3",null,t))}))))}),o=(n(17),function(e){var t=e.children;return r.a.createElement("div",{className:"double-column"},r.a.createElement("div",{className:"left-double-column"},t[0]),r.a.createElement("div",{className:"right-double-column"},t[1]))}),s=n(3),u=n.n(s),m=(n(18),function(e){var t=e.title,n=e.subtitle;return r.a.createElement("div",{className:"landing-bg"},r.a.createElement(o,null,r.a.createElement("img",{src:u.a,alt:"Profile of Nick",className:"profilePicture"}),r.a.createElement("div",{id:"landing-text"},r.a.createElement("h1",null,t),r.a.createElement("h2",null,n))))}),p=n(4),h=n(5),f=n(7),d=n(6),E=n(8),v=(n(19),function(e){var t=e.name,n=e.description,a=e.url;return r.a.createElement("div",{className:"project"},r.a.createElement("a",{href:a,className:"project-link"},r.a.createElement("h3",{className:"project-title"},t),n?r.a.createElement("p",{className:"project-description"},n):null))}),g=(n(20),function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(f.a)(this,Object(d.a)(t).call(this,e))).state={isFetching:!0,projects:[]},n.username=e.username,e.maxRepos?n.maxRepos=e.maxRepos:n.maxRepos=6,n}return Object(E.a)(t,e),Object(h.a)(t,[{key:"fetchRepos",value:function(){var e=this,t=[];return fetch("https://api.github.com/users/".concat(this.props.username,"/repos?per_page=").concat(this.maxRepos)).then((function(e){return e.json()})).then((function(n){n.forEach((function(n){var a=n.name,r=n.description,c=n.id,l="https://www.github.com/".concat(e.username,"/").concat(a);t.push({name:a,description:r,url:l,id:c})})),e.setState({isFetching:!1})})).catch((function(t){console.error(t),e.setState({projects:{name:"Error fetching projects",id:0,url:""}})})),t}},{key:"componentDidMount",value:function(){this.setState({projects:this.fetchRepos()})}},{key:"render",value:function(){return this.state.isFetching?r.a.createElement("div",{className:"project-container"},r.a.createElement("h1",null,"Projects are loading...")):this.state.projects.length?r.a.createElement("div",{className:"project-container"},this.state.projects.map((function(e){return r.a.createElement(v,{name:e.name,description:e.description,key:e.id,url:e.url})}))):r.a.createElement("div",{className:"project-container"},r.a.createElement("h1",null,"No projects were found :("))}}]),t}(r.a.Component)),j=(n(21),function(e){var t=e.title,n=e.array;return r.a.createElement("div",{className:"fancy-list"},r.a.createElement("h1",null,t),r.a.createElement("ul",null,n.map((function(e){return r.a.createElement("li",{key:n.indexOf(e)},e)}))))}),N=(n(22),function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(i,{title:"Nick Musey"},[{name:"Projects",url:"#projects",id:1},{name:"Skills",url:"#skills",id:2}]),r.a.createElement(m,{title:"Nick Musey",subtitle:"Student & Developer"}),r.a.createElement("a",{name:"projects",href:"#projects"},r.a.createElement("h1",null,"Projects")),r.a.createElement(g,{id:"project-container",username:"nmusey"}),r.a.createElement("a",{name:"skills",href:"#skills"},r.a.createElement("h1",null,"Skills")),r.a.createElement(o,null,r.a.createElement(j,{title:"Skills",array:["Front-End Development using React","Back-End Development using Express.js and Node.js","Python for automation","PostgreSQL and MongoDB experience"]}),r.a.createElement(j,{title:"Learning Now",array:["React Hooks","Django","Artificial Intelligence","Database Design"]})))});var k=function(){return r.a.createElement(N,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.97dfbaa5.chunk.js.map