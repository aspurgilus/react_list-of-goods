(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{12:function(t,e,s){},14:function(t,e,s){"use strict";s.r(e);var n=s(3),r=s.n(n),o=s(4),i=s(5),c=s(7),l=s(6),a=s(1),u=s.n(a),h=(s(12),s(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],d=function(t){Object(c.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(o.a)(this,s);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={isGoodsVisible:!1,isReversed:!1,isSortedAlphabetically:!1,isSortedByLength:!1},t.setGoodsVisible=function(){return t.setState({isGoodsVisible:!0})},t.reverseGoods=function(){return t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortAlphabetically=function(){return t.setState({isSortedAlphabetically:!0,isSortedByLength:!1})},t.sortByLength=function(){return t.setState({isSortedByLength:!0,isSortedAlphabetically:!1})},t.reset=function(){return t.setState({isSortedAlphabetically:!1,isSortedByLength:!1,isReversed:!1})},t}return Object(i.a)(s,[{key:"render",value:function(){var t=this.state,e=t.isGoodsVisible,s=t.isReversed,n=t.isSortedAlphabetically,r=t.isSortedByLength,o=[].concat(b);return n&&o.sort((function(t,e){return t.localeCompare(e)})),r&&o.sort((function(t,e){return t.length-e.length})),s&&o.reverse(),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Goods"}),e?Object(h.jsx)("ul",{children:o.map((function(t){return Object(h.jsx)("li",{children:t},t)}))}):Object(h.jsx)("button",{type:"button",onClick:this.setGoodsVisible,children:"Start"}),Object(h.jsx)("button",{type:"button",onClick:this.reverseGoods,children:"Reverse"}),Object(h.jsx)("button",{type:"button",onClick:this.sortAlphabetically,children:"Sort alphabetically"}),Object(h.jsx)("button",{type:"button",onClick:this.sortByLength,children:"Sort by length"}),Object(h.jsx)("button",{type:"button",onClick:this.reset,children:"Reset"})]})}}]),s}(u.a.Component),p=d;r.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.03a5278a.chunk.js.map