$.fn.extend({imageLoaded:function(i){var n=$(this).find("img"),t=n.length;0==t&&i(),n.each(function(n,a){var a=new Image;a.onload=function(){t--,0==t&&i()},a.onerror=function(){t--,0==t&&i()},a.src=$(a).attr("src")})},gridify:function(i){var n=$(this),i=i||{},t=function(){n.css("position","relative");var t=n.find(i.srcNode),a=((i.transition||"all 0.5s ease")+", height 0, width 0",n.innerWidth()),e=parseInt(i.margin||0),o=parseInt(i.max_width||i.width||220),r=Math.floor(a/(o+e)),s=a%(o+e)/2,h=[];i.max_width&&(r=Math.ceil(a/(o+e)),o=(a-r*e-e)/r,s=e/2);for(var d=0;r>d;d++)h.push(0);t.each(function(n,t){var a=$(t),r=$.inArray(Math.min.apply(Math,h),h);a.css({width:o,position:"absolute",margin:e/2,top:h[r]+e/2,left:(o+e)*r+s,transition:i.transition||"all 0.5s ease"}),h[r]+=a.innerHeight()+e})};if(t(),n.imageLoaded(function(){setTimeout(t,200)}),i.resizable){var a=$(window).on("resize",function(){t(),i.max_width&&setTimeout(t,200)});n.on("remove",a.unbind)}}});