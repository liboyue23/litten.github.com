!function(e,t){"function"==typeof define&&define.amd?define(["jquery"],t):t(e.jQuery)}(this,function(e){e.fn.lazyload=function(t){return this.each(function(){t=t||{};var n={},i=e.extend({},n,t),o=e(this),a=this,r=t.srcSign||"lazy-src",s=t.errCallBack||function(){},l=t.container||e(window),c=function(){},d=function(e,t,n){t[0].src&&(t[0].src.indexOf("img-err.png")>0||t[0].src.indexOf("img-err2.png")>0)||(t.width(),t.height(),t[0].src="/img/img-err.png",n())},p=function(e){e.width(),e.height(),e.offset().top,e.offset().left;var t=e.clone().addClass("lazy-loding").insertBefore(e);t[0].src="/img/img-loading.png",e.hide()},h=function(e,n,i){if(!e.attr("src"))if(1==t.cache){console.log(e);var o,a=document.getElementById("canvas1"),r=a.getContext("2d");image=new Image,image.src=e.attr(n),image.onload=function(){r.drawImage(image,0,0),o=r.getImageData(0,0,500,250),console.log(o)}}else{p(e);var s=e.attr(n);e[0].onerror=function(t){d(t,e,i,s)},e[0].onload=function(t){e.parent().find(".lazy-loding").remove(),e.show(),c(t,e)},e[0].src=s}};if(i.cache=[],"IMG"==a.tagName){var f={obj:o,tag:"img",url:o.attr(r)};i.cache.push(f)}else{var u=o.find("img");u.each(function(t){var n=this.nodeName.toLowerCase(),o=e(this).attr(r),a={obj:u.eq(t),tag:n,url:o};i.cache.push(a)})}var g=function(){var t,n=l.height();t=e(window).get(0)===window?e(window).scrollTop():l.offset().top,e.each(i.cache,function(e,i){var o,a,l=i.obj,c=i.tag,d=i.url;l&&(o=l.offset().top-t,o+l.height(),(o>=0&&n>o||a>0&&n>=a)&&(d&&"img"===c&&h(l,r,s),i.obj=null))})};g(),l.bind("scroll",g),l.bind("resize",g)})}});