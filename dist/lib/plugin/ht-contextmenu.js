!function(L,n){"use strict";var V="ht",W=L[V],R="position",j="absolute",v="px",$="left",r="top",q="innerHTML",y="className",N="width",c="height",_="0",O="display",K="none",e="visibility",o="user-select",w="margin",Y="padding",f=null,U=W.Color,p=W.Default,P=p.getInternal(),s=L.setTimeout,X=L.setInterval,B=L.clearTimeout,t=L.clearInterval,F=L.parseInt,D=p.isLeftButton,k=p.isDragging,H=p.startDragging,l=p.getDistance,A=p.isTouchable,S=U.widgetIconHighlight,Q=U.widgetIconBorder,E=U.widgetIconGradient,Z=function(){return document},G=function(e,A){return e.querySelectorAll(A)},T=function(l){var t=Z().createElement(l);return"ul"===l&&(g(t,R,"relative"),g(t,w,_),g(t,Y,_),g(t,"list-style",K),g(t,"box-sizing","border-box"),g(t,"-moz-box-sizing","border-box"),g(t,O,"inline-block"),g(t,"vertical-align","text-bottom"),g(t,"border","1px solid "+p.contextMenuBorderColor),g(t,"box-shadow","0 0 16px 1px "+p.contextMenuShadowColor),g(t,"overflow","hidden"),p.contextMenuBorderRadius&&g(t,"border-radius",p.contextMenuBorderRadius+v)),t},C=function(j){var U=j.touches[0];return U?U:j.changedTouches[0]},h=function(){return T("div")},x=function(){return T("canvas")},g=function(E,d,J){E.style.setProperty(d,J,f)},m=function(R,v,Q){p.def(W.widget[R],v,Q)},I=function(n,d){n.appendChild(d)},d=function(K,F){K.removeChild(F)},b=p.eventListenerOptionsFalse,J=(p.eventListenerOptionsTrue,function(K,v,Z,i){K.addEventListener(v,Z,i?b:b)}),u=function(m,r,h,G){m.removeEventListener(r,h,G?b:b)};P.addMethod(p,{contextMenuCheckIcon:{width:16,height:16,comps:[{type:"border",rect:[1,1,14,14],width:1,color:Q},{type:"shape",points:[13,3,7,12,4,8],borderWidth:2,borderColor:S}]},contextMenuRadioIcon:{width:16,height:16,comps:[{type:"circle",rect:[2,2,12,12],borderWidth:1,borderColor:Q},{type:"circle",rect:[4,4,8,8],borderWidth:1,borderColor:S,gradient:p.imageGradient,gradientColor:E,background:S}]},contextMenuLabelFont:(A?"16":"13")+"px arial, sans-serif",contextMenuLabelColor:"#000",contextMenuBackground:"#fff",contextMenuDisabledLabelColor:"#888",contextMenuHoverBackground:"#648BFE",contextMenuHoverLabelColor:"#fff",contextMenuSeparatorWidth:1,contextMenuSeparatorColor:"#E5E5E5",contextMenuScrollerColor1:"#FDFDFD",contextMenuScrollerColor2:"#D3D3D3",contextMenuScrollerBorderColor:"#C3C3C3",contextMenuBorderColor:"#C3C3C3",contextMenuShadowColor:"rgba(128, 128, 128, 0.5)",contextMenuBorderRadius:5,contextMenuSubmenuMark:"▶"},!0);var M=function(f){var u=this,z=f._view;if(u.$11b=f,u.addListeners(),J(z,"contextmenu",function(e){e.preventDefault()}),!A){var g=u.$37b=u.$36b.bind(u);J(z,"mouseover",g),J(z,"mouseout",g)}};p.def(M,n,{ms_listener:1,getView:function(){return this.$11b._view},handle_touchstart:function(k){if(p.preventDefault(k),D(k)){for(var F=this,Y=F.$11b,K=F.getView(),h=K.children,u=0;u<h.length;u++){var x=h[u],l=x.$24b,$=x.$25b;if(l&&l.contains(k.target))return Y.scrollUp(x),F.$28b=s(function(){F.$29b=X(function(){Y.scrollUp(x)},100)},500),H(F,k),void 0;if($&&$.contains(k.target))return Y.scrollDown(x),F.$28b=s(function(){F.$29b=X(function(){Y.scrollDown(x)},100)},500),H(F,k),void 0}A&&(k=C(k)),F.$30b={x:k.pageX,y:k.pageY}}},handle_mousedown:function(V){this.handle_touchstart(V)},handle_touchend:function(z){if(D(z)){var $=this,Z=$.$30b,V=A?{x:C(z).pageX,y:C(z).pageY}:{x:z.pageX,y:z.pageY};if(!Z||l(Z,V)>1)return delete $.$30b,void 0;for(var u=$.getView(),w=$.$11b,H=z.target,t=f,E=f,a=w._items,S=u.$26b,q=0;q<S.length;q++)if(E=S[q],E.contains(H)){t=E.getAttribute("data-id");break}if(t&&a){var Y=w.$17b(a,function(B){return B._id===t});if(Y){var r=!1;Y.disabled instanceof Function?r=Y.disabled.call(w,Y):Y.disabled===!0&&(r=!0),r||(Y.items?A&&$.$36b(E,!0):w.$1b(Y,z))}}delete $.$30b}},$36b:function(c,B){if(!k()){var N,q=this,F=q.$11b,X=q.getView(),z=F.$20b||X.children[0],d=F.$19b,u=X.$26b,b=X.children,h=c.target,Z=X.getBoundingClientRect(),Y=p.getWindowInfo(),t=Y.width,C=Y.height,V=function(Z){for(var u=0;u<b.length;u++){var _=b[u],X=new RegExp(Z+"$"),e=_[y];if(e&&(X.test(e)||e.indexOf(Z+" ")>=0))return _}},P=function(w){for(var d=0;d<u.length;d++){var x=u[d],b=new RegExp(w+"$"),l=x[y];if(l&&(b.test(l)||l.indexOf(w+" ")>=0))return x}},J=function(M){var x=P("menu-item"+M.$45b),n=x.getBoundingClientRect(),i=n.top-Z.top,I=n.left-Z.left;g(M,r,i+v),g(M,$,I+n.width+v);var j=M.getBoundingClientRect(),V=j.top,S=j.left,B=j.height,w=j.width,d=V+B+2,L=S+w+2;d>C&&g(M,r,i+C-d+v),L>t&&g(M,$,I-w+v)};if(B)N=c;else{if("mouseover"===c.type){for(var A=0;A<u.length;A++){var O=u[A];if(O.contains(h)){N=O;break}}if(!N&&d){var W=d.parentNode,E=V("submenu"+d.getAttribute("data-id"));(E&&E.contains(h)||W&&W.contains(h))&&(N=d)}}else if("mouseout"===c.type){for(var j=!1,_=c.relatedTarget,A=0;A<b.length;A++){var L=b[A];if("hidden"!==L.style.visibility&&L.contains(_)){j=!0;break}}if(j)return}!N&&z&&(N=P("menu-item"+(z.$45b||"NaN")))}if(N!=d){if(d)for(var M=d;M;){if(M[y]=M[y].replace(" menu-item-hover",""),M[y].indexOf("disabled")<0){var o=F.getItemByProperty("_id",M.getAttribute("data-id"));null!=o.background?o.background instanceof Function?g(M,"background-color",o.background.call(F,o)):g(M,"background-color",o.background):g(M,"background-color",p.contextMenuBackground),g(M,"color",p.contextMenuLabelColor)}var a=V("submenu"+M.getAttribute("data-id"));a&&g(a,e,"hidden");var K=M.parentNode;M=P("menu-item"+(K.$45b||"NaN"))}if(N){for(var Q=N,m=[];Q;){Q[y]+=" menu-item-hover",Q[y].indexOf("disabled")<0&&(g(Q,"background-color",p.contextMenuHoverBackground),g(Q,"color",p.contextMenuHoverLabelColor));var I=V("submenu"+Q.getAttribute("data-id"));I&&(g(I,e,"visible"),m.push(I));var K=Q.parentNode;Q=P("menu-item"+(K.$45b||"NaN"))}m.reverse(),m.forEach(function(Z){J(Z)})}}F.$19b=N,F.$20b=N?N.parentNode:X.children[0]}},handle_mouseup:function(l){this.handle_touchend(l)},handleWindowTouchEnd:function(){var Q=this;Q.$28b!=f&&(B(Q.$28b),delete Q.$28b),Q.$29b!=f&&(t(Q.$29b),delete Q.$29b),delete Q.$34b,delete Q.$30b,delete Q.$35b},handleWindowMouseUp:function(h){this.handleWindowTouchEnd(h)},handle_mousemove:function(w){this.handle_touchmove(w)},handle_touchmove:function(x){if(!k()&&D(x)){for(var Z=this,i=Z.getView().children,Q=f,h=0;h<i.length;h++){var c=i[h];if(c.contains(x.target)){Q=c;break}}var g=Z.$30b,L=A?{x:C(x).pageX,y:C(x).pageY}:{x:x.pageX,y:x.pageY};Q&&g&&l(g,L)>2&&(H(Z,x),Z.$34b=Q,Z.$35b=Q.$18b)}},handleWindowTouchMove:function($){$.preventDefault();var l=this,G=l.$11b,H=l.$34b,d=l.$35b,D=l.$30b;if(D&&H){var O=A?{x:C($).pageX,y:C($).pageY}:{x:$.pageX,y:$.pageY},R=O.y-D.y;R>0?G.scrollUp(H,H.$18b-(d-R)):G.scrollDown(H,d-R-H.$18b)}},handleWindowMouseMove:function(v){this.handleWindowTouchMove(v)},$10b:function(r,X){r.preventDefault();for(var N=this,q=N.getView().children,t=f,s=0;s<q.length;s++){var K=q[s];if(K.contains(r.target)){t=K;break}}if(t){var V=this.$11b,C=V.getRowHeight();Math.abs(X)>.05&&(X>0?V.scrollUp(t,X*C):0>X&&V.scrollDown(t,-X*C))}},handle_mousewheel:function(A){this.$10b(A,A.wheelDelta/40)},handle_DOMMouseScroll:function(s){this.$10b(s,-s.detail)},$44b:function(J){this.getView().contains(J.target)||this.$11b.hide()},$41b:function(g){this.$11b.show(g)},$4b:function(l,t){var w=this.$11b;if(t=t||w._items,t&&t.length&&l.keyCode){var H=[l.keyCode];l.shiftKey&&H.push(16),l.ctrlKey&&H.push(17),l.altKey&&H.push(18),/mac/.test(L.navigator?L.navigator.userAgent.toLowerCase():"")?l.metaKey&&H.push(17):l.metaKey&&H.push(91),H.sort();var s=H.join(),O=w.$17b(t,function(H){if(H.key){var V=H.key.slice(0);return V.sort(),s===V.join()}});if(O){O.preventDefault!==!1&&l.preventDefault();var d=!1;O.disabled instanceof Function?d=O.disabled.call(w,O):O.disabled===!0&&(d=!0),d||w.$1b(O,l)}}},$39b:function(L){var j=this,p=C(L);j.$32b={x:p.pageX,y:p.pageY}},$38b:function(u){var $=this,m=C(u);$.$31b={x:m.pageX,y:m.pageY},$.$33b=s(function(){$.$31b&&($.$32b?l($.$31b,$.$32b)<10&&$.$11b.show(u):$.$11b.show(u)),delete $.$33b,delete $.$31b,delete $.$32b},600)},$40b:function(){var S=this;S.$33b!=f&&(B(S.$33b),delete S.$33b,delete S.$31b,delete S.$32b)}}),W.widget.ContextMenu=function(I){var l=this,d=l._view=P.createView(null,l);d[y]="ht-widget-contextmenu",l.setItems(I),l.$13b=new M(l),g(d,"font",p.contextMenuLabelFont),g(d,R,j),g(d,"cursor","default"),g(d,"-webkit-"+o,K),g(d,"-moz-"+o,K),g(d,"-ms-"+o,K),g(d,o,K),g(d,"box-sizing","border-box"),g(d,"-moz-box-sizing","border-box"),p.baseZIndex!=f&&g(d,"z-index",F(p.baseZIndex)+2+""),l.$3b=function(W){l.$13b.$4b(W)}},m("ContextMenu",n,{$5b:0,_items:f,$21b:f,_enableGlobalKey:!1,ms_v:1,enableGlobalKey:function(){var Q=this,u=Q._enableGlobalKey;u===!1&&(J(Z(),"keydown",Q.$3b),Q._enableGlobalKey=!0)},disableGlobalKey:function(){this._enableGlobalKey=!1,u(Z(),"keydown",this.$3b)},setItems:function(T){this._items=T},getItems:function(){return this._items},setVisibleFunc:function(o){this.$16b=o},setLabelMaxWidth:function(x){this.$43b=x},$1b:function(b,c){var F=this;if("check"===b.type)b.selected=!b.selected;else if("radio"===b.type){var V=b.groupId;F.$17b(F._items,function(i){i.groupId===V&&(i.selected=!1)}),b.selected=!0}if(F.hide(),b.action)b.action.apply(b.scope||F,[b,c]);else if(b.href){var h=b.linkTarget||"_self";L.open(b.href,h)}},getItemById:function(h){return this.getItemByProperty("id",h)},setItemVisible:function(l,N){var R=this.getItemById(l);R&&(R.visible=N)},getItemByProperty:function(g,G,H){var E=this;if(H=H||E._items,!H||0===H.length)return f;var p=E.$17b(H,function(l){return l[g]===G});return p||f},scrollUp:function(B,I){var T=this;if(I=I==f?20:I,I=F(I),0!==I){var b=0;B.$18b>I&&(b=B.$18b-I),T.$42b(B,b),B.scrollTop=b,B.$18b=b}},scrollDown:function(E,$){var B=this;if($=$==f?20:$,$=F($),0!==$){var o=E.$22b,X=E.$23b,V=o-X;X+E.$18b+$<o&&(V=E.$18b+$),B.$42b(E,V),E.scrollTop=V,E.$18b=V}},$42b:function(r,E){E=E==f?r.$18b:E;var T=r.$24b,j=r.$25b;T&&(g(T,"top",E+v),0==E?g(T,O,K):g(T,O,"block")),j&&(g(j,"bottom",-E+v),E==r.$22b-r.$23b?g(j,O,K):g(j,O,"block"))},getRowHeight:function(){return this._view.querySelector(".menu-item").offsetHeight},$17b:function(c,I){for(var h=0;h<c.length;h++){var G=c[h];if(I(G))return G;if(G.items){var B=this.$17b(G.items,I);if(B)return B}}},$2b:function(o,B){for(var H=this,t=0;t<o.length;t++){H.$5b++;var b=o[t];if(b.visible!==!1&&!(p.isFunction(b.visible)&&b.visible()===!1||H.$16b&&!H.$16b.call(H,b))){var L=T("li"),d=H.$5b+"";if(g(L,"white-space","nowrap"),g(L,O,"block"),"separator"===b||b.separator===!0){var V=h();V[y]="separator",g(V,c,p.contextMenuSeparatorWidth+v),g(V,"background",p.contextMenuSeparatorColor),I(L,V)}else{b._id=d,L.setAttribute("data-id",d);var A=T("span"),S=T("span"),$=x(),k=h();if(g(A,O,"inline-block"),g(A,c,"1.2em"),g(S,O,"inline-block"),g(S,c,"1.2em"),g(S,"line-height","1.2em"),$[y]="prefix",g($,O,"inline-block"),g($,N,"1em"),g($,c,"1em"),g($,"vertical-align","middle"),g($,w,"0 0.2em"),"check"===b.type&&b.selected?$[y]+=" check-prefix":"radio"===b.type&&b.selected&&($[y]+=" radio-prefix"),I(L,$),b.icon){var K=x();K[y]="contextmenu-item-icon",g(K,O,"inline-block"),g(K,c,"1.2em"),g(K,N,"1.2em"),g(K,"margin-right","0.2em"),g(K,"float","left"),K.$50b=b.icon,K._item=b,I(A,K)}if(S[q]=b.label,I(A,S),I(L,A),k[y]="suffix",g(k,O,"inline-block"),g(k,"margin-left","1em"),g(k,"margin-right","0.4em"),g(k,"text-align","right"),g(k,"font-size","75%"),b.items&&(k[q]=p.contextMenuSubmenuMark),b.suffix&&(k[q]=b.suffix),I(L,k),L[y]="menu-item menu-item"+d,null!=b.background?b.background instanceof Function?g(L,"background-color",b.background.call(H,b)):g(L,"background-color",b.background):g(L,"background-color",p.contextMenuBackground),g(L,"color",p.contextMenuLabelColor),g(L,Y,"3px 0"),b.disabled instanceof Function){var n=b.disabled.call(H,b);n&&(L[y]+=" disabled",g(L,"color",p.contextMenuDisabledLabelColor))}else b.disabled&&(L[y]+=" disabled",g(L,"color",p.contextMenuDisabledLabelColor));if(b.items){H.$21b||(H.$21b=new W.List);var E=T("ul");E[y]="submenu"+d,E.$45b=d,g(E,e,"hidden"),g(E,R,j),I(H._view,E),H.$21b.add(E),H.$2b(b.items,E)}}I(B,L)}}},rebuild:function(){var o=this,z=o._items,t=o._view;if(t&&(t[q]="",o.$21b=f,o.$5b=0,o.$19b=f,o.$20b=f,t.$26b=f,z&&0!==z.length)){var c=T("ul",o._r);I(t,c),o.$2b(z,c)}},addTo:function(s){if(s){var u=this,N=u.$13b;if(u.$12b=s,u.$9b=function(S){N.$44b(S)},u.$27b=function(O){N.$41b(O)},A){var f=u.$6b=function(V){N.$38b(V)},G=u.$7b=function(I){N.$39b(I)},R=u.$8b=function(k){N.$40b(k)};J(s,"touchstart",f,!0),J(s,"touchmove",G),J(s,"touchend",R)}else J(s,"contextmenu",u.$27b)}},showOnView:function(i,T,E){i=i.getView?i.getView():i;var K=p.getWindowInfo(),q=i.getBoundingClientRect();this.show(q.left+K.left+T,q.top+K.top+E)},show:function(t,c,X){var K=this,X=X==f?!0:!1,U=K._view;if(U){if(K.invalidate(),1===arguments.length){var o=t;if(A){var i=C(o);t=i.pageX,c=i.pageY}else t=o.pageX,c=o.pageY}var z=p.getWindowInfo(),L=z.width,s=z.height,w=z.left,M=z.top,T={pageX:t,pageY:c,clientX:t-w,clientY:c-M,target:1,originEvent:o},S=T.clientX,H=T.clientY,d=function(e){e.style.height=s-6+v;var o=h(),C=h(),d=function(L){g(L,R,j),g(L,"text-align","center"),g(L,N,"100%"),g(L,"font-size",10+v),g(L,"padding","2px 0"),g(L,"border","0px solid "+p.contextMenuScrollerBorderColor),g(L,"background-color",p.contextMenuScrollerColor1),L.style.backgroundImage="-webkit-linear-gradient(top, "+p.contextMenuScrollerColor1+", "+p.contextMenuScrollerColor2+")",L.style.backgroundImage="linear-gradient(to bottom, "+p.contextMenuScrollerColor1+", "+p.contextMenuScrollerColor2+")"};o[y]="menu-arrow-item menu-arrow-item-top",C[y]="menu-arrow-item menu-arrow-item-bottom",d(o),g(o,"top",_),g(o,"left",_),g(o,"border-bottom-width",1+v),o[q]="▲",d(C),g(C,"bottom",_),g(C,"left",_),g(C,"border-top-width",1+v),C[q]="▼",e.$24b=o,e.$25b=C,e.$18b=e.scrollTop,e.$22b=e.scrollHeight,e.$23b=e.clientHeight,I(e,o),I(e,C),K.$42b(e)};K.beforeShow&&K.beforeShow(T);var m=K._items;if(m&&(o&&o.preventDefault(),m.length)){K.rebuild(),p.appendToScreen(U),U.$26b=G(U,".menu-item");var k=U.children[0];k.offsetHeight>s&&d(k);var E=H+(X?1:0),b=S+(X?1:0),u=function(Z){for(var j=0,f=0,H=0,e=K.$43b;H<Z.children.length;H++){var x=Z.children[H];if(x.getAttribute("data-id")){var S=x.children[1],u=x.children[2],s=S.children;if(e){var d=s[0];s.length>1&&(d=s[1]),d.offsetWidth>e&&(d[q]="<marquee scrollamount='3'>"+d[q]+"</marquee>",d.children[0].style.verticalAlign="text-bottom",g(d,N,e+v),g(d,O,"inline-block"))}var p=S.offsetWidth,B=u.offsetWidth;p>j&&(j=p),B>f&&(f=B)}}for(H=0;H<Z.children.length;H++){var x=Z.children[H];if(x.getAttribute("data-id")){var S=x.children[1],u=x.children[2],L=S.children[0],E=S.children[1];!E&&L.style.width&&g(L,N,j+v),g(S,N,j+v),g(u,N,f+v)}}};u(k);var a=H+3+U.offsetHeight,D=S+3+U.offsetWidth;a>s?g(U,r,E-(a-s)+M+v):g(U,r,E+M+v),D>L?g(U,$,b-(D-L)+w+v):g(U,$,b+w+v);var x=K.$21b;x&&x.each(function(n){u(n),n.offsetHeight>s&&d(n)}),K.$9b&&J(Z(),A?"touchstart":"mousedown",K.$9b,!0),K.afterShow&&K.afterShow(T),K.$47b()}}},isShowing:function(){return this._view?this._view.parentNode!=f:!1},getRelatedView:function(){return this.$12b},hide:function(){var _=this,K=_._view;K&&K.parentNode&&(d(K.parentNode,K),u(Z(),A?"touchstart":"mousedown",_.$9b,!0),_.afterHide&&_.afterHide())},dispose:function(){var s=this,b=s.$12b,W=s._view;W&&(W.parentNode&&d(W.parentNode,W),s.disableGlobalKey(),b&&(A?(u(b,"touchstart",s.$6b,!0),u(b,"touchmove",s.$7b),u(b,"touchend",s.$8b)):u(b,"contextmenu",s.$27b)),s._view=s._items=s.$21b=s.$19b=s.$12b=s.beforeShow=s.afterShow=s.afterHide=s.$9b=s.$3b=s.$6b=s.$7b=s.$8b=s.$27b=f)},$46b:function(r,i,g,X,f){var v=P.initContext(r);P.translateAndScale(v,0,0,1),v.clearRect(0,0,g,X),p.drawStretchImage(v,p.getImage(i),"fill",0,0,g,X,f,this),v.restore()},$47b:function(){var S,g,j,U=this,w=U._view;if(U.isShowing()){var n=G(w,".check-prefix");for(j=0;j<n.length;j++){var Q=n[j];S=Q.clientWidth,g=Q.clientHeight,Q.$48b=S,Q.$49b=g,P.setCanvas(Q,S,g)}var f=G(w,".radio-prefix");for(j=0;j<f.length;j++){var p=f[j];S=p.clientWidth,g=p.clientHeight,p.$48b=S,p.$49b=g,P.setCanvas(p,S,g)}var I=G(w,".contextmenu-item-icon");for(j=0;j<I.length;j++){var W=I[j];S=W.clientWidth,g=W.clientHeight,W.$48b=S,W.$49b=g,P.setCanvas(W,S,g)}}},validateImpl:function(){var J,y,K,h=this,m=h._view;if(h.isShowing()){var Y=G(m,".check-prefix");for(K=0;K<Y.length;K++){var d=Y[K];J=d.$48b,y=d.$49b,J&&y&&h.$46b(d,p.contextMenuCheckIcon,J,y)}var w=G(m,".radio-prefix");for(K=0;K<w.length;K++){var A=w[K];J=A.$48b,y=A.$49b,J&&y&&h.$46b(A,p.contextMenuRadioIcon,J,y)}var o=G(m,".contextmenu-item-icon");for(K=0;K<o.length;K++){var f=o[K];J=f.$48b,y=f.$49b,J&&y&&h.$46b(f,p.getImage(f.$50b),J,y,f._item)}}}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);