(function(t){function a(a){for(var n,i,c=a[0],o=a[1],l=a[2],d=0,f=[];d<c.length;d++)i=c[d],r[i]&&f.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(a);while(f.length)f.shift()();return s.push.apply(s,l||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],n=!0,c=1;c<e.length;c++){var o=e[c];0!==r[o]&&(n=!1)}n&&(s.splice(a--,1),t=i(i.s=e[0]))}return t}var n={},r={app:0},s=[];function i(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=n,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)i.d(e,n,function(a){return t[a]}.bind(null,n));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/tic-tac-toe/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=a,c=c.slice();for(var l=0;l<c.length;l++)a(c[l]);var u=o;s.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"30db":function(t,a,e){"use strict";var n=e("a4c0"),r=e.n(n);r.a},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("TicTacToe")],1)},s=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"game-board"},[e("div",{directives:[{name:"show",rawName:"v-show",value:"full"!==t.marks,expression:"marks !== 'full'"}],staticClass:"game-board__register"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.playerData.name,expression:"playerData.name"}],attrs:{type:"text",placeholder:"Name"},domProps:{value:t.playerData.name},on:{input:function(a){a.target.composing||t.$set(t.playerData,"name",a.target.value)}}}),t._l(t.marks,function(a,n){return e("button",{key:n,staticClass:"game-board__register-btn",class:{"game-board__register-btn--active":t.playerData.mark===a},on:{click:function(e){return t.markSelected(a)}}},[t._v("\n        "+t._s(a)+"\n      ")])}),e("button",{staticClass:"game-board__register-createBtn",on:{click:t.createUser}},[t._v("Play")])],2),e("div",{staticClass:"game-board__info"},["OFF"===t.gameStat?e("div",{staticClass:"game-board__info-msgContent"},[t._v("\n        "+t._s(t.msg)+"\n      ")]):t._e(),"ON"===t.gameStat?e("div",{staticClass:"game-board__info-board"},[e("div",{staticClass:"game-board__info-board__descriptions"},[e("div",{staticClass:"subtitle"},[t._v("Players")]),e("div",{staticClass:"name"},[t._v(t._s(t.players[0].name))]),e("div",{staticClass:"name"},[t._v(t._s(t.players[1].name))])]),e("div",{staticClass:"game-board__info-board__stats"},[t._m(0),e("div",{},[e("span",{staticStyle:{"font-size":"24px","font-weight":"600","margin-right":"10px"}},[t._v(t._s(this.players[0].ranking.win))]),e("span",{staticStyle:{"font-size":"24px","font-weight":"600"}},[t._v(t._s(this.players[0].ranking.losses))])]),e("div",{},[e("span",{staticStyle:{"font-size":"24px","font-weight":"600","margin-right":"10px"}},[t._v(t._s(this.players[1].ranking.win))]),e("span",{staticStyle:{"font-size":"24px","font-weight":"600"}},[t._v(t._s(this.players[1].ranking.losses))])])]),e("div",{staticClass:"game-board__info-board__turn"},[e("div",{staticClass:"subtitle"},[t._v("Turn")]),e("div",{staticClass:"mark"},[t._v(t._s(this.players[t.turn].mark))])])]):t._e()])]),e("div",{staticClass:"tictactoe-grid"},[e("div",{staticClass:"A0 square",on:{click:function(a){return a.target!==a.currentTarget?null:t.toMark("A","0",t.turn)}}},[e("span",[t._v(t._s(t.tictacBoard.A[0]))])]),e("div",{staticClass:"A1 square",on:{click:function(a){return a.target!==a.currentTarget?null:t.toMark("A","1",t.turn)}}},[e("span",[t._v(t._s(t.tictacBoard.A[1]))])]),e("div",{staticClass:"A2 square",on:{click:function(a){return a.target!==a.currentTarget?null:t.toMark("A","2",t.turn)}}},[e("span",[t._v(t._s(t.tictacBoard.A[2]))])]),e("div",{staticClass:"B0 square",on:{click:function(a){return a.target!==a.currentTarget?null:t.toMark("B","0",t.turn)}}},[e("span",[t._v(t._s(t.tictacBoard.B[0]))])]),e("div",{staticClass:"B1 square",on:{click:function(a){return a.target!==a.currentTarget?null:t.toMark("B","1",t.turn)}}},[e("span",[t._v(t._s(t.tictacBoard.B[1]))])]),e("div",{staticClass:"B2 square",on:{click:function(a){return a.target!==a.currentTarget?null:t.toMark("B","2",t.turn)}}},[e("span",[t._v(t._s(t.tictacBoard.B[2]))])]),e("div",{staticClass:"C0 square",on:{click:function(a){return a.target!==a.currentTarget?null:t.toMark("C","0",t.turn)}}},[e("span",[t._v(t._s(t.tictacBoard.C[0]))])]),e("div",{staticClass:"C1 square",on:{click:function(a){return a.target!==a.currentTarget?null:t.toMark("C","1",t.turn)}}},[e("span",[t._v(t._s(t.tictacBoard.C[1]))])]),e("div",{staticClass:"C2 square",on:{click:function(a){return a.target!==a.currentTarget?null:t.toMark("C","2",t.turn)}}},[e("span",[t._v(t._s(t.tictacBoard.C[2]))])])]),e("transition",{attrs:{name:"modalAnimation"}},[t.winner||9===t.draw?e("Modal",{attrs:{name:t.winner}},[e("button",{staticClass:"btnModal",on:{click:function(a){return t.resetGame(t.turn)}}},[t._v("Reiniciar")])]):t._e()],1)],1)},c=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{},[e("span",{staticClass:"subtitle",staticStyle:{"margin-right":"10px"}},[t._v("W")]),e("span",{staticClass:"subtitle"},[t._v("L")])])}],o=(e("ac6a"),e("7f7f"),e("4917"),e("d225")),l=e("5118"),u=e("7618"),d=function(t){for(var a=[["A0","A1","A2"],["B0","B1","B2"],["C0","C1","C2"],["A0","B0","C0"],["A1","B1","C1"],["A2","B2","C2"],["A0","B1","C2"],["C0","B1","A2"]],e=function(e){var n=0;if(t.historyMoves.forEach(function(r){a[e].indexOf(r)>=0&&t.historyMoves.length>2&&(n+=1)}),n<3&&(n=0),3===n)return{v:!0}},n=0;n<a.length;n++){var r=e(n);if("object"===Object(u["a"])(r))return r.v}},f=function(t,a){var e=a._c;return e("div",{staticClass:"modal"},[e("div",{staticClass:"modal__content"},[a.props.name?e("h2",[a._v(a._s(a.props.name)+" ha ganado!")]):e("h2",[a._v("Empate!")]),a._t("default")],2)])},p=[],m=(e("30db"),e("2877")),v={},h=Object(m["a"])(v,f,p,!0,null,null,null),_=h.exports,g=function t(a,e,n){Object(o["a"])(this,t),this.name=a,this.mark=e,this.ranking={win:0,losses:0},this.historyMoves=[]},y={name:"TicTacToe",components:{Modal:_},data:function(){return{players:[],playerData:{name:"",mark:null},marks:["X","O"],turn:0,tictacBoard:{A:["","",""],B:["","",""],C:["","",""]},msg:null,gameStat:"OFF",winner:"",draw:0}},created:function(){this.markSelected("X")},methods:{createUser:function(){var t=/^\S+(?: \S+)*$/;if(this.players.length<2&&this.playerData.name.match(t)&&this.playerData.mark){var a=this.playerData,e=a.name,n=a.mark,r=new g(e,n,{win:0,losses:0});this.players.push(r),this.playerData.name="",this.marks.splice(this.marks.indexOf(this.playerData.mark),1),this.playerData.mark=null}else this.msg="Por favor introduzca un nombre sin espacios y eliga una marca"},markSelected:function(t){this.playerData.mark=t},toMark:function(t,a,e){if("ON"===this.gameStat){this.draw+=1;var n=this.players[e],r=this.tictacBoard[t],s=this.tictacBoard[t][a];if(!s){n.historyMoves.push("".concat(t+a)),this.$set(r,a,n.mark),document.querySelector(".".concat(t+a)).firstChild.classList.add("animate");var i=d(n);i?(n.ranking.win+=1,this.winner=n.name,0===this.turn?this.turn=1:this.turn=0,this.players[this.turn].ranking.losses+=1):9!==this.draw||this.winner?this.changeTurn():console.log("draw!")}}},changeTurn:function(){switch(this.turn){case 0:this.turn=1;break;case 1:this.turn=0}},resetGame:function(t){var a=document.querySelectorAll(".square");a.forEach(function(t){t.firstChild.classList.remove("animate")});var e={A:["","",""],B:["","",""],C:["","",""]};this.tictacBoard=e,this.draw=0,this.winner="",this.players.forEach(function(t){t.historyMoves=[]})}},watch:{marks:function(){0===this.marks.length&&(this.marks="full",this.gameStat="ON")},msg:function(){var t=this;this.msg&&Object(l["setTimeout"])(function(){t.msg=""},1500)}}},b=y,k=(e("8be2"),Object(m["a"])(b,i,c,!1,null,"57131bf9",null)),C=k.exports,w={name:"app",components:{TicTacToe:C},created:function(){var t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(t,"px"))}},B=w,T=(e("5c0b"),Object(m["a"])(B,r,s,!1,null,null,null)),O=T.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(O)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";var n=e("5e27"),r=e.n(n);r.a},"5e27":function(t,a,e){},"8be2":function(t,a,e){"use strict";var n=e("e631"),r=e.n(n);r.a},a4c0:function(t,a,e){},e631:function(t,a,e){}});
//# sourceMappingURL=app.80707a6b.js.map