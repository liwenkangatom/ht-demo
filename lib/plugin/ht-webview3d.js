!function(O){"use strict";function p(O){var f,g,x,Y,Z,I,H,e=[],F=0;f=U.createDiv(),f.style.overflow="hidden";var S=O.getView();S.insertBefore(f,O.getCanvas()),g=m.Default.createDiv(),g.style.WebkitTransformStyle="preserve-3d",g.style.MozTransformStyle="preserve-3d",g.style.transformStyle="preserve-3d",f.appendChild(g),[{event:"mousedown",style:"none"},{event:"mouseup",style:"auto"},{event:"touchstart",style:"none"},{event:"touchend",style:"auto"}].forEach(function(O){var l=O.style;S.addEventListener(O.event,function(){f.style.pointerEvents=l})}),this.updateWebView=function(){var k=O.getCanvas(),i=1*k.style.width.slice(0,-2),S=1*k.style.height.slice(0,-2);(e[0]!==i||e[1]!==S)&&(e[0]=i,e[1]=S,f.style.width=i+"px",f.style.height=S+"px",g.style.width=i+"px",g.style.height=S+"px");var z=O._projectMatrix[5]*e[1]/2;z!==x&&(x=z,f.style.WebkitPerspective=x+"px",f.style.MozPerspective=x+"px",f.style.perspective=x+"px"),I="translateZ("+x+"px)"+r(O._viewMatrix);var T=I+"translate("+e[0]/2+"px,"+e[1]/2+"px)";Y===T||Z||(g.style.WebkitTransform=T,g.style.MozTransform=T,g.style.transform=T,Y=T),F++,H=!1,O.dm().each(function(h){h.isWebView&&s(h)});for(var L,u=g.children,n=[],t=0,d=u.length;d>t;t++)L=u[t],L._isHtWebView&&L._renderCookie!==F&&n.push(L);n.length&&n.forEach(function(M){g.removeChild(M)})};var G=new Array(16),s=function(V){var r=V.getAttach();if(r){r.parentElement!==g&&g.appendChild(r),r._renderCookie=F,H=!0;var j=V.getFinalScale3d(),J=V._prefrenceSize;J&&J[0]?J[1]||(J[1]=J[0]/j[0]*j[1]):J=[j[0],j[1]],r.style.width=J[0]+"px",r.style.height=J[1]+"px";var A=1/J[0],B=1/J[1],b=1,n=V.mat;G[0]=n[0]*A,G[1]=n[1]*A,G[2]=n[2]*A,G[3]=n[3]*A,G[4]=n[4]*B,G[5]=n[5]*B,G[6]=n[6]*B,G[7]=n[7]*B,G[8]=n[8]*b,G[9]=n[9]*b,G[10]=n[10]*b,G[11]=n[11]*b,G[12]=n[12],G[13]=n[13],G[14]=n[14],G[15]=n[15];var Q=t(G,Z?"translate("+e[0]/2+"px,"+e[1]/2+"px)"+I:""),w=r.$a2;w!==Q&&(r.$a2=Q,r.style.WebkitTransform=Q,r.style.MozTransform=Q,r.style.transform=Q)}}}function n(f){return Math.abs(f)<1e-10?0:f}function r(I){var J=I;return"matrix3d("+n(J[0])+","+n(-J[1])+","+n(J[2])+","+n(J[3])+","+n(J[4])+","+n(-J[5])+","+n(J[6])+","+n(J[7])+","+n(J[8])+","+n(-J[9])+","+n(J[10])+","+n(J[11])+","+n(J[12])+","+n(-J[13])+","+n(J[14])+","+n(J[15])+")"}function t(i,H){var F=i,e="matrix3d("+n(F[0])+","+n(F[1])+","+n(F[2])+","+n(F[3])+","+n(-F[4])+","+n(-F[5])+","+n(-F[6])+","+n(-F[7])+","+n(F[8])+","+n(F[9])+","+n(F[10])+","+n(F[11])+","+n(F[12])+","+n(F[13])+","+n(F[14])+","+n(F[15])+")";return"translate(-50%,-50%)"+(H||"")+e}var c="ht",m=O[c],U=m.Default,L=U.getInternal(),G=L.superCall,J=m.graph3d.Graph3dView,z=J.prototype.validateImpl;J.prototype.validateImpl=function(){z.call(this);var s=this._webViewRenderer;s||(s=this._webViewRenderer=new p(this)),s.updateWebView()};var u=m.WebView3d=function(){var y=this;G(u,y),y.s({shape3d:"billboard","shape3d.reverse.flip":!0})},V=[1,1,1,1],q=[0,0,0,0];U.def(c+"."+"WebView3d",m.Node,{ms_ac:["attach"],isWebView:!0,attachDOM:function(d,h,t){if(!d)return this.detachDOM();if("string"==typeof d){var J=document.createElement("iframe");J.src=d,d=J}var p=d.style;p.position="absolute",p.border=0,p.outline=0,p.padding=0,p.margin=0,d._isHtWebView=!0,this.setAttach(d),this._prefrenceSize=[h,t],this.s("shape3d.blend",q)},detachDOM:function(){this.setAttach(null),this.s("shape3d.blend",this.getBgColor())},setBgColor:function(t){this.a("defaultBgColor",t),this.getAttach()||this.s("shape3d.blend",t)},getBgColor:function(){return this.a("defaultBgColor")||V}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);