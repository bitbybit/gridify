Element.prototype.imageLoaded=function(t){var e=this.querySelectorAll("img"),n=e.length;0==n&&t();for(var i=0,o=e.length;o>i;i++){var r=new Image;r.onload=function(){n--,0==n&&t()},r.onerror=function(){n--,0==n&&t()},r.src=e[i].getAttribute("src")}},Element.prototype.gridify=function(t){var e=this,t=t||{},n=function(t){for(var e=0,n=1;n<t.length;n++)t[n]<t[e]&&(e=n);return e},i=function(t,e,n){t.attachEvent?t.attachEvent("on"+e,n):t.addEventListener&&t.addEventListener(e,n)},o=function(t,e,n){t.detachEvent?t.detachEvent("on"+e,n):t.removeEventListener&&t.removeEventListener(e,r)},r=function(){e.style.position="relative";var i=e.querySelectorAll(t.srcNode),o=(t.transition||"all 0.5s ease")+", height 0, width 0",r=e.clientWidth,a=parseInt(t.margin||0),s=parseInt(t.max_width||t.width||220),l=Math.floor(r/(s+a)),d=r%(s+a)/2,h=[];t.max_width&&(l=Math.ceil(r/(s+a)),s=(r-l*a-a)/l,d=a/2);for(var c=0;l>c;c++)h.push(0);for(var c=0,v=i.length;v>c;c++){var u=n(h);i[c].setAttribute("style","width: "+s+"px; position: absolute; margin: "+a/2+"px; top: "+(h[u]+a/2)+"px; left: "+((s+a)*u+d)+"px; transition: "+o),h[u]+=i[c].clientHeight+a}};r(),this.imageLoaded(function(){setTimeout(r,200)}),t.resizable&&(i(window,"resize",function(){r(),t.max_width&&setTimeout(r,200)}),i(e,"DOMNodeRemoved",function(){o(window,"resize",r)}))};