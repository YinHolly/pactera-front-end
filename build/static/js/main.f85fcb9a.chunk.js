(this["webpackJsonppactera-front-end"]=this["webpackJsonppactera-front-end"]||[]).push([[0],{31:function(e,t,a){e.exports=a(59)},59:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(29),r=a.n(c),i=a(7),s=a(8),o=a(10),u=a(9),d=a(14),h=a(1),m=a(15),b=a(13),E=a.n(b),p=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handelSubmit=function(e){e.preventDefault(),console.log(n.state.name,n.state.city)},n.state={city:"",cityInfoList:[{id:"",cityId:"",cityEngName:"",cityChiName:"",country:""}],weatherObject:{city:"",updateTime:"",weather:"",temperature:"",wind:""},isLoaded:!1},n.getWehtherInfo=n.getWehtherInfo.bind(Object(m.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("http://59.110.143.99:8081/pactera/dev/city/getCityList").then((function(t){console.log(t.data.data),e.setState({cityInfoList:t.data.data,isLoaded:!1})})).catch((function(e){console.log(e)}))}},{key:"getWehtherInfo",value:function(e){var t=this;if(t.setState({city:e.target.value,isLoaded:!0}),e.target.value.length>0){var a="http://59.110.143.99:8081/pactera/dev/weatherAPI/getWehtherInfo?city="+e.target.value;E.a.get(a).then((function(e){console.log(e.data.data),t.setState({weatherObject:e.data.data,isLoaded:!0})})).catch((function(e){console.log(e)}))}}},{key:"render",value:function(){var e=this;return this.state.isLoaded?l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("p",null,"\u5929\u6c14\u67e5\u8be2"),l.a.createElement("form",{onSubmit:this.handelSubmit},l.a.createElement("br",null),l.a.createElement("label",null,"\u5f53\u524d\u57ce\u5e02:"),l.a.createElement("select",{value:this.state.city,onChange:function(t){return e.getWehtherInfo(t)}},this.state.cityInfoList.map((function(e){return l.a.createElement("option",{key:e.id},e.cityEngName)}))),l.a.createElement("br",null))),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("table",{style:{background:"#eee",width:"400px",border:"1px solid #C40000"}},l.a.createElement("tr",null,l.a.createElement("td",null,Object.keys(this.state.weatherObject)[0]),l.a.createElement("td",null,this.state.weatherObject.city)),l.a.createElement("tr",null,l.a.createElement("td",null,Object.keys(this.state.weatherObject)[1]),l.a.createElement("td",null,this.state.weatherObject.updateTime)),l.a.createElement("tr",null,l.a.createElement("td",null,Object.keys(this.state.weatherObject)[2]),l.a.createElement("td",null,this.state.weatherObject.weather)),l.a.createElement("tr",null,l.a.createElement("td",null,Object.keys(this.state.weatherObject)[3]),l.a.createElement("td",null,this.state.weatherObject.temperature)),l.a.createElement("tr",null,l.a.createElement("td",null,Object.keys(this.state.weatherObject)[4]),l.a.createElement("td",null,this.state.weatherObject.wind))))):l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("p",null,"\u5929\u6c14\u67e5\u8be2"),l.a.createElement("form",{onSubmit:this.handelSubmit},l.a.createElement("br",null),l.a.createElement("label",null,"\u5f53\u524d\u57ce\u5e02: "),l.a.createElement("select",{value:this.state.city,onChange:function(t){return e.getWehtherInfo(t)}},this.state.cityInfoList.map((function(e){return l.a.createElement("option",{key:e.id},e.cityEngName)}))),l.a.createElement("br",null)))}}]),a}(l.a.Component),y=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={genderType:[],catsList:{},isLoaded:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state;t.genderType,t.catsList,t.isLoaded;return l.a.createElement("div",null,l.a.createElement("ul",null,this.state.genderType.map((function(t){return l.a.createElement("li",{key:t},t,l.a.createElement("ul",null,Object.keys(e.state.catsList[t]).map((function(a,n){return l.a.createElement("li",{key:n},e.state.catsList[t][a].name)}))))}))))}},{key:"componentDidMount",value:function(){var e=this;E.a.get("http://59.110.143.99:8081/pactera/dev/petsApi/getCatsList").then((function(t){console.log(t.data.data),console.log(Object.keys(t.data.data)),e.setState({genderType:Object.keys(t.data.data),catsList:t.data.data,isLoaded:!0}),console.log(this.state.genderType),console.log(this.state.catsList)})).catch((function(e){console.log(e)}))}}]),a}(l.a.Component),f=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,"This is Pacter project Main page!"),l.a.createElement("div",null,l.a.createElement(d.b,{to:"/Pets/",style:{color:"black"}},l.a.createElement("div",null,"\u70b9\u51fb\u8df3\u8f6c\u5230Pets\u9875\u9762")),l.a.createElement(d.b,{to:"/Weather/",style:{color:"black"}},l.a.createElement("div",null,"\u70b9\u51fb\u8df3\u8f6c\u5230Weather\u9875\u9762"))))}}]),a}(l.a.Component),v=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement(h.a,{exact:!0,path:"/",component:f}),l.a.createElement(h.a,{path:"/Pets",component:y}),l.a.createElement(h.a,{path:"/Weather",component:p})))}}]),a}(l.a.Component);r.a.render(l.a.createElement(v,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.f85fcb9a.chunk.js.map