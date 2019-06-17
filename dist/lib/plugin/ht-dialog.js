!function(H,U){"use strict";var K="ht",T=H[K],Q="px",z="left",C="top",f="bottom",J="right",a="innerHTML",I="className",Z="",s="width",O="height",v="string",M="position",q="absolute",t="0",k="opacity",g="background",n=T.Default,p=n.getInternal(),m=T.Color,L=n.animate,$=n.isTouchable,E=null,G=(Math.sqrt,H.parseInt),w=H.setTimeout,R=(Math.round,m.titleIconBackground),Y=function(B){return typeof B===v||B instanceof String},c=function(){return document},P=function(d){return c().createElement(d)},X=function(){var S=P("div");return S.tabIndex=-1,S.style.outline="none",S},A=function(){return P("canvas")},V=function(k,o){S(k,"-webkit-transform",o),S(k,"-ms-transform",o),S(k,"transform",o)},S=function(D,$,b){D.style.setProperty($,b,E)},y=function(l,Y,Z){n.def(T.widget[l],Y,Z)},B=function(l,g){l.appendChild(g)},l=function(){return c().documentElement},b=function(){return l().clientWidth},N=function(){return l().clientHeight},r=n.eventListenerOptionsFalse,e=(n.eventListenerOptionsTrue,function(W,X,L,K){W.addEventListener(X,L,K?r:r)}),x=function(c,R,i,N){c.removeEventListener(R,i,N?r:r)},i=function(C){var b=C.touches[0];return b?b:C.changedTouches[0]};p.addMethod(n,{dialogCloseIcon:{width:100,height:100,comps:[{type:"shape",points:[10,10,90,90],segments:[1,2],borderWidth:8,borderColor:R},{type:"shape",points:[90,10,10,90],segments:[1,2],borderWidth:8,borderColor:R}]},dialogMaximizeIcon:{width:100,height:100,comps:[{type:"rect",rect:[10,15,80,75],borderWidth:6,borderColor:R},{type:"rect",rect:[10,10,80,20],background:R}]},dialogRestoreIcon:{width:100,height:100,comps:[{type:"rect",rect:[10,34,56,56],borderWidth:8,borderColor:R},{type:"rect",rect:[10,34,56,14],background:R},{type:"rect",rect:[34,10,56,14],background:R},{type:"rect",rect:[82,10,8,56],background:R},{type:"rect",rect:[66,62,24,8],background:R}]},dialogTitleLabelColor:n.labelSelectColor,dialogTitleLabelFont:($?"18":"14")+"px arial, sans-serif",dialogContentLabelFont:n.labelFont,dialogTitleBackground:m.titleBackground,dialogHeaderBackground:m.headerBackground,dialogButtonBackground:"#1ABC9C",dialogButtonSelectBackground:"#16A085",dialogButtonLabelColor:"#fff"},!0);var u=function(V){var c=this;c.$1d=V,c.addListeners()};n.def(u,U,{ms_listener:1,getView:function(){return this.$1d.getView()},clear:function(){delete this.$2d,delete this.$3d,delete this.$4d,delete this.$5d},handle_touchstart:function(O){var G=this,b=G.$1d,Z=b.$6d,q=b._config,v=b.$7d,j=O,a=O.target;if(v.contains(a)||n.preventDefault(O),n.isLeftButton(O)){$&&(j=i(O));var B=G.$8d={x:j.pageX,y:j.pageY};G.$9d={x:B.x,y:B.y},!q.maximized&&q.draggable&&Z.contains(a)&&(G.$4d=!0,n.startDragging(G,O)),G.handle_mousemove(O)&&(G.$2d=!0,n.startDragging(G,O)),v.contains(O.target)||b.$41d.focus()}},handle_mousedown:function(i){this.handle_touchstart(i)},handle_touchend:function(u){if(n.isLeftButton(u)&&!this.$5d&&!this.$3d){var A=this,N=A.$1d,r=u.target,o=N._config,q=N.$18d,C=N.$16d;for(o.closable&&q.contains(r)&&N.hide(),o.maximizable&&C.contains(r)&&(o.maximized?N.restore():N.maximize());r&&(r.className||"").indexOf("dialog-button")<0;)r=r.parentNode;r&&r.buttonItem&&N.action&&N.action(r.buttonItem,u),delete A.$8d,delete A.$9d}},handle_mouseup:function(J){this.handle_touchend(J)},handleWindowTouchEnd:function(Y){var C=this,c=C.$1d,J=c.$10d;C.$2d&&C.$3d?J.fire({kind:"endResize",target:c,originEvent:Y}):C.$4d&&C.$5d&&J.fire({kind:"endMove",target:c,originEvent:Y}),this.clear()},handleWindowMouseUp:function(O){this.handleWindowTouchEnd(O)},handle_mousemove:function(z){var r=this.$1d._config;if(r.maximized)return!1;if("w"!==r.resizeMode&&"h"!==r.resizeMode&&"wh"!==r.resizeMode)return!1;var I=this,F=I.getView(),j=F.querySelector(".resize-area"),p=j.getBoundingClientRect(),u={x:p.left,y:p.top,width:p.width,height:p.height};z=$?i(z):z;var W=z.clientX,R=z.clientY,w={x:W,y:R};return n.containsPoint(u,w)?(S(F,"cursor","nwse-resize"),!0):(S(F,"cursor",Z),void 0)},handleWindowTouchMove:function(Z){Z.preventDefault();var M=Z;$&&(M=i(Z));var h=this,e=h.$8d,g=h.$9d;if(!(g.x==e.x&&g.y==e.y&&n.getDistance(g,{x:M.pageX,y:M.pageY})<=1)){var k=h.$1d,r=k._config,D=k.$21d,l=r.resizeMode||"wh",s=M.pageX-e.x,K=M.pageY-e.y;if(h.$2d){var P=D.offsetWidth,f=D.offsetHeight,V=P+s,y=f+K;if(V=Math.max(V,50),y=Math.max(y,50),"center"===r.position||r.position==E){var w={},o=D.getBoundingClientRect();w.x=o.left,w.y=o.top,r.position=w}"w"===l?(k.setSize(V,f),e.x+=V-P):"h"===l?(k.setSize(P,y),e.y+=y-f):"wh"===l&&(k.setSize(V,y),e.x+=V-P,e.y+=y-f),h.$3d?k.$10d.fire({kind:"betweenResize",target:k,originEvent:Z}):(h.$3d=!0,k.$10d.fire({kind:"beginResize",target:k,originEvent:Z}))}else if(h.$4d){var p=D.getBoundingClientRect(),q=p.width,m=p.height,Y=b(),U=N(),L=G(D.style.left)||0,j=G(D.style.top)||0,t=L+s,c=j+K,T=k.adjustPosition({x:t,y:c},{width:q,height:m},{width:Y,height:U});T&&(t=T.x,c=T.y);var H=t-L,F=c-j;S(D,z,t+Q),S(D,C,c+Q),e.x+=H,e.y+=F,r.position={x:t,y:c},h.$5d?k.$10d.fire({kind:"betweenMove",target:k,originEvent:Z}):(h.$5d=!0,k.$10d.fire({kind:"beginMove",target:k,originEvent:Z}))}}},handleWindowMouseMove:function(z){this.handleWindowTouchMove(z)},handleWindowResize:function(){var g=this,v=g,E=v._config,R=v.$21d,w=b(),j=N(),P=E.width,f=E.height,F=E.position||"center";E.maximized?(S(R,s,w+Q),S(R,O,j+Q),S(R,C,t),S(R,z,t)):(S(R,s,P+Q),S(R,O,f+Q),"center"===F?(S(R,z,(w-P)/2+Q),S(R,C,(j-f)/2+Q)):(S(R,z,F.x+Q),S(R,C,F.y+Q))),v.iv()},handle_mousewheel:function(y){y.stopPropagation()},handle_DOMMouseScroll:function(K){K.stopPropagation()}}),T.widget.Dialog=function(F){var g=this,J=g._view=p.createView(null,g);J[I]="ht-widget-dialog",S(J,M,q),n.baseZIndex!=E&&S(J,"z-index",n.baseZIndex+"");var L=g.$11d=new u(g);g.bindingHandleWindowResize=L.handleWindowResize.bind(g),g.$10d=new T.Notifier,F&&g.setConfig(F)},y("Dialog",U,{ms_v:1,ms_fire:1,setTitle:function(l){this._config.title=l,this.getView().querySelector(".dialog-container-title span").innerHTML=l},clearNodes:function(X){if(X)for(;X.firstChild;)X.removeChild(X.firstChild)},$31d:function(){var b=this,V=b.$6d=X(),M=b._config,w=b.$12d=b.$13d();V[I]="dialog-container-title",S(V,"cursor","default"),S(V,"white-space","nowrap"),S(V,"overflow","hidden"),S(V,"font",n.dialogTitleLabelFont),S(V,g,M.titleBackground||n.dialogTitleBackground),S(V,"color",M.titleColor||n.dialogTitleLabelColor);var J=P("span"),v=b.$25d();if(M.titleAlign&&S(V,"text-align",M.titleAlign),M.titleIcon){var o=b.$14d=b.$15d();B(V,o)}if(M.title&&M.title.trim&&(M.title=M.title.trim()),J[a]=M.title||"&nbsp;",B(V,J),M.maximizable){var L=b.$16d=b.$17d();B(w,L)}if(M.closable){var U=b.$18d=b.$19d();B(w,U)}return B(V,w),S(V,"display","block"),S(V,"line-height",v+Q),V},$13d:function(){var i=X();return S(i,M,q),S(i,z,t),S(i,J,5+Q),S(i,C,t),S(i,f,t),S(i,"text-align",J),S(i,"white-space","nowrap"),i[I]="dialog-title-controls",i},$20d:function(){var C=this.$21d=X(),u=this._config,y=u.borderWidth;return S(C,M,"fixed"),S(C,"box-shadow","rgba(0, 0, 0, 0.2) 0px 5px 10px 0px"),S(C,"padding",t+" "+y+Q+" "+y+Q+" "+y+Q),S(C,"box-sizing","border-box"),S(C,"-moz-box-sizing","border-box"),C[I]="dialog-container",S(C,g,u.titleBackground||n.dialogTitleBackground),C},$22d:function(){var $,W=this,R=W._config,u=W.$7d=X(),t=R.content,c=0,o=R.contentPadding||0;R.buttons!=E&&R.buttons.length>0&&(c=32),Y(t)?u[a]=t:t.getView?($=t.getView(),B(u,$)):($=t,B(u,$)),S(u,M,q),S(u,"font",n.dialogContentLabelFont),T.Default.appendToScreen(u);var D=u.offsetWidth+1,v=u.offsetHeight,j=W.$25d();return R.width==E&&(R.width=D+10+2*o),R.height==E&&(R.height=v+j+c+5+2*o),T.Default.removeHTML(u),$&&(S($,"box-sizing","border-box"),S($,"-moz-box-sizing","border-box"),S($,s,"100%"),S($,O,"100%")),u[I]="dialog-content",S(u,C,j+o+Q),S(u,f,c+o+Q),S(u,z,o+Q),S(u,J,o+Q),S(u,"overflow","hidden"),u},getOverlayDiv:function(){return this.$41d},$23d:function(){var V=this.$41d=X();return V[I]="dialog-overlay",S(V,s,"100%"),S(V,O,"100%"),S(V,M,"fixed"),S(V,C,t),S(V,z,t),S(V,g,"rgba(235, 235, 235, 0.7)"),V},_config:E,setSize:function(S,W){var n=this,$=n._config;$&&($.width=S,$.height=W,n.isShowing()&&(n.bindingHandleWindowResize(),n.iv()))},getConfig:function(){return this._config},$24d:function(){var Q=this._config,O=Q.titleIconSize||16;return $&&(O*=1.2),O},$25d:function(){var B=this._config,Y=B.titleHeight||n.widgetTitleHeight;return Y},$26d:function(G){S(G,"cursor","pointer"),S(G,"display","inline-block"),S(G,"margin-right",($?8:4)+Q),S(G,"vertical-align",C)},$27d:function(){var g=this.$30d=X(),o=10;return $&&(o=20),S(g,s,o+Q),S(g,O,o+Q),S(g,M,q),S(g,f,t),S(g,J,t),g[I]="resize-area",g},$15d:function(){var f=this,l=A();l[I]="dialog-title-control dialog-title-control-icon";var b=f.$25d(),k=f.$24d();return f.$26d(l),p.setCanvas(l,k,b),l},$17d:function(){var i=A();i[I]="dialog-title-control dialog-title-control-maximize";var U=this.$25d(),w=this.$24d();return this.$26d(i),p.setCanvas(i,w,U),i},$19d:function(){var k=A();k[I]="dialog-title-control dialog-title-control-close";var c=this.$25d(),v=this.$24d();return this.$26d(k),p.setCanvas(k,v,c),k},$28d:function(){var Y=X();return S(Y,g,"white"),S(Y,s,"100%"),S(Y,O,"100%"),S(Y,M,"relative"),Y},$29d:function(){var x=this,G=X();S(G,"line-height",32+Q),S(G,M,q),S(G,f,t),S(G,z,t),S(G,"white-space","nowrap"),S(G,"overflow","hidden"),S(G,J,t),S(G,g,n.dialogHeaderBackground),G[I]="dialog-container-buttons";var u=this._config,N=u.buttonsAlign||J,b=0;return S(G,"text-align",N),x.$42d=[],u.buttons.forEach(function(R){var O=new T.widget.Button,c=O.getView();c[I]="dialog-button "+R.className,c.buttonItem=R,x.$42d.push(O),O.setBorderColor(E),O.setBackground(n.dialogButtonBackground),O.setSelectBackground(n.dialogButtonSelectBackground),O.setLabelColor(n.dialogButtonLabelColor),S(c,M,"relative"),S(c,"display","inline-block"),S(c,"text-align",z),S(c,"height",24+Q);var F=$?10:5;N===z||N===J?S(c,"margin-"+N,F+Q):0===b||S(c,"margin-"+z,F+Q),S(c,"vertical-align","middle");var Z=n.getTextSize(O.getLabelFont(),R.label).width+10;O.onClicked=function(p){R.action&&R.action.call(x,R,p)},O.setLabel(R.label),O.setDisabled(R.disabled),S(c,s,Z+Q),B(G,O.getView()),b++}),G},setConfig:function(v){if(v){var T=this,C=T._view;T._config=v,T.action=v.action,T.clearNodes(C),v.borderWidth==E&&(v.borderWidth=5);var F=T.$23d(),d=T.$28d(),i=T.$31d(),r=T.$22d(),N=T.$20d(),H=T.$30d=T.$27d();if(B(C,F),B(C,N),B(N,d),B(d,i),B(d,r),v.buttons!=E&&v.buttons.length>0){var U=T.$29d();B(d,U)}B(N,H),v.maximized?(v.maximized=!1,T.bindingHandleWindowResize(),T.maximize(!0)):T.bindingHandleWindowResize(),T.isShowing()&&T.iv()}},hide:function(){var C=this,f=C.$21d,W=C.$41d,r=C._view;r[I]="ht-widget-dialog",L(f).duration(200).scale(.7).set(k,t).end(function(){C.onHidden&&C.onHidden(),T.Default.removeHTML(r),C.$10d.fire({kind:"hide",target:C})}),L(W).duration(200).set(k,t).end(),x(H,"resize",C.bindingHandleWindowResize)},isShowing:function(){return!!this._view.parentNode},setModal:function(d){this.$41d.style.display=d?"block":"none"},isModal:function(){return"none"!==this.$41d.style.display},$32d:function(){var O=this,U=O._config,n=O.$21d;V(n,Z),O.iv(),U.maximized?O.$10d.fire({kind:"maximize",target:O}):O.$10d.fire({kind:"restore",target:O})},maximize:function(F){var f=this,Z=f.$21d,D=f._config;if(!D.maximized){D.maximized=!0,f.$33d(),f.$16d[I]="dialog-title-control dialog-title-control-minimize";var n=b(),v=N(),P=D.width,T=D.height,i=G(Z.style.left)||0,H=G(Z.style.top)||0;f.$36d=P,f.$37d=T,f.$34d=i,f.$35d=H;var x=F?0:200;L(Z).duration(x).set(z,t).set(C,t).set(s,n+Q).set(O,v+Q).end(function(){f.$32d()})}},restore:function(){var l=this,m=l.$34d,W=l.$35d,N=l.$36d,H=l.$37d,S=l._config;if(S.maximized&&(S.maximized=!1,l.$33d(),l.$16d[I]="dialog-title-control dialog-title-control-maximize",l.isShowing()&&m!=E&&W!=E&&N!=E&&H!=E)){var g=l.$21d;L(g).duration(200).set(z,m+Q).set(C,W+Q).set(s,N+Q).set(O,H+Q).end(function(){l.$32d()})}delete l.$34d,delete l.$35d,delete l.$36d,delete l.$37d},show:function(){var z=this,h=z._view,y=z._config,i=z.$21d,X=z.$41d;y&&y.zIndex!=E&&S(h,"z-index",y.zIndex+Z),T.Default.appendToScreen(h),V(i,"scale(0.7)"),S(i,k,t),z.iv(),z.validate(),z._view[I]+=" dialog-show",w(function(){L(i).duration(200).scale(1).set(k,"1").end(function(){S(i,s,i.clientWidth+Q),S(i,O,i.clientHeight+Q),z.onShown&&z.onShown(),z.$10d.fire({kind:"show",target:z});var K=y&&y.content;K&&K.iv&&K.iv()}),L(X).duration(200).set(k,"1").end(),e(H,"resize",z.bindingHandleWindowResize)},30)},setPosition:function(b){var q=this.$21d;q.style.left=b.x+"px",q.style.top=b.y+"px"},addEventListener:function(N,j,K){this.$10d.add(N,j,K)},removeEventListener:function(J,c){this.$10d.remove(J,c)},$38d:function(g,R,A,w){var m=p.initContext(g);p.translateAndScale(m,0,0,1),m.clearRect(0,0,A,A);var e=(A-w)/2;n.drawStretchImage(m,n.getImage(R),"fill",0,e,w,w),m.restore()},$33d:function(){var d=this,D=d._config,G=d.$16d,s=D.maximized?n.dialogRestoreIcon:n.dialogMaximizeIcon;if(G&&s){var m=d.$25d(),y=d.$24d();d.$38d(G,n.getImage(s),m,y)}},$39d:function(){var H=this,O=H._config,R=H.$14d,P=O.titleIcon;if(R&&P){var s=H.$25d(),T=H.$24d();H.$38d(R,n.getImage(P),s,T)}},$40d:function(){var v=this,l=v.$18d,Y=n.dialogCloseIcon;if(l&&Y){var x=v.$25d(),$=v.$24d();v.$38d(l,n.getImage(Y),x,$)}},invalidate:function(d){var _=this,T=_.$42d;_._68I||(_._68I=1,n.callLater(_.validate,_,E,d),_.onInvalidated&&_.onInvalidated(),_.fireViewEvent("invalidate"));var U=_._config.content;U.invalidate&&U.invalidate(),T&&T.forEach(function($){$.iv()})},validateImpl:function(){var $=this;$.$40d(),$.$33d(),$.$39d();var D=$._config.content;D.initView&&(D.setX(0),D.setY(0),D.setWidth($.$7d.clientWidth),D.setHeight($.$7d.clientHeight))},adjustPosition:function(z,e,y){var Z=e.width,C=e.height,v=y.width,t=y.height,b=z.x,U=z.y,M=this._config,Y=M.minDragSize||20;return"inside"===M.dragMode?(b+Z>v&&(b=v-Z),U+C>t&&(U=t-C),0>b&&(b=0),0>U&&(U=0)):(null==M.dragMode||"none"===M.dragMode)&&(-Z+Y>b&&(b=-Z+Y),b>v-Y&&(b=v-Y),U>t-Y&&(U=t-Y),0>U&&(U=0)),{x:b,y:U}}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);