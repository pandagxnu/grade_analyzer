var pt_utility=pt_logout={ret:0,appDomain:"",mainDomain:"",httpWhiteDomain:{"qq.com":1,"soso.com":1,"paipai.com":1,"tenpay.com":1,"taotao.com":1,"tencent.com":1,"oa.com":1,"webdev.com":1,"3366.com":1,"imqq.com":1,"pengyou.com":1,"qplus.com":1,"qzone.com":1,"server.com":1,"myapp.com":1,"kuyoo.cn":1,"weiyun.com":1,"wechatapp.com":1,"51buy.com":1,"qcloud.com":1,"wechat.com":1},httpsWhiteDomain:{"qq.com":1,"tenpay.com":1,"3366.com":1,"soso.com":1,"paipai.com":1,"pengyou.com":1,"imqq.com":1,"qzone.com":1,"qcloud.com":1,"51buy.com":1,"weiyun.com":1,"myapp.com":1},getCookie:function(b){var a=document.cookie.match(new RegExp("(^| )"+b+"=([^;]*)(;|$)"));return !a?"":decodeURIComponent(a[2])},delCooike:function(a,b,c){document.cookie=a+"=; expires=Mon, 26 Jul 1997 05:00:00 GMT; path="+(c?c:"/")+"; "+(b?("domain="+b+";"):"")},jsonp:function(b){var a=document.createElement("script");a.setAttribute("src",b);document.getElementsByTagName("head")[0].appendChild(a)},nlog:function(g,c,f){if(location.protocol=="http:"&&Math.random()<(f||1)){var d=location.href;var e=encodeURIComponent(g+"|_|"+d+"|_|"+window.navigator.userAgent);var b="http://badjs.qq.com/cgi-bin/js_report?bid=110&mid="+c+"&msg="+e+"&v="+Math.random();var a=new Image();a.src=b}},init:function(){var a=location.hostname.match(/\w+(\.\w+){2}$/);pt_logout.appDomain=a?a[0]:"";if(/^\w\w\w\./.test(pt_logout.appDomain)){pt_logout.appDomain=pt_logout.appDomain.substr(4)}var b=location.host.match(/\w*\.(com|cn)$/);pt_logout.mainDomain=b?b[0]:""},getLogoutUrl:function(){var d=pt_logout.getCookie("pt4_token");var a=pt_logout.getCookie("skey");var b=pt_logout.time33(a);if(!d&&!a){return""}var c="";if(location.protocol=="https:"){c="https://ssl.ptlogin2."+(pt_logout.httpsWhiteDomain[pt_logout.mainDomain]?pt_logout.mainDomain:"qq.com")+"/logout?"}else{c="http://ptlogin2."+(pt_logout.httpWhiteDomain[pt_logout.mainDomain]?pt_logout.mainDomain:"qq.com")+"/logout?"}c+=("pt4_token="+d+"&pt4_hkey="+b+"&deep_logout=1");return c},time33:function(d){var c=0;for(var a=0,b=d.length;a<b;a++){c=c*33+d.charCodeAt(a)}return c%4294967296},set_ret:function(d,b){try{var a=pt_logout.getCookie("pt4_token");if(d>0){pt_logout.delCooike("p_uin",b);pt_logout.delCooike("p_skey",b);pt_logout.delCooike("pt4_token",b);if(pt_logout.appDomain!=""&&pt_logout.getCookie("skey_m")!=""){pt_logout.delCooike("uin_m",pt_logout.appDomain);pt_logout.delCooike("skey_m",pt_logout.appDomain)}}else{pt_logout.nlog("logout fail","285851",0.1)}if(typeof pt_logout.callback=="function"){pt_logout.callback(d)}if(b!=pt_logout.appDomain){pt_logout.nlog("domain unsame:n="+d+":pt4_token="+a+":cgi_domain="+b+":js_domain="+pt_logout.appDomain,"285852",0.1)}}catch(c){return}},logout:function(a,c){pt_logout.init();if(typeof c=="function"){pt_logout.callback=c}var b=pt_logout.getLogoutUrl();if(!b){return 1}if(!pt_logout.mainDomain){return 2}pt_logout.jsonp(b);return 0}};