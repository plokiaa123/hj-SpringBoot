$.extend($.fn,{initJerichoTab:function(b){var c=$.fn.extend({renderTo:null,uniqueId:null,tabs:[],activeTabIndex:0,contentCss:{height:"500px"},loadOnce:true,tabWidth:110,loader:"righttag",slidersWidth:19,titleHeight:26,isCookieTabsetting:false,isCookieLoadData:false,cookieTabsetting:"jtabsetting",cookieTabLast:"jtablast",fn_beforeAddTab:null,fn_afterTabMouseup:null,fn_afterTabLoad:null,openWithNewWidowAfterDblClick:true,fn_tabDblClick:null},b);function a(){if(c.renderTo==null){alert("you must set the 'renderTo' property\r\t--JeirchoTab");return}if(c.uniqueId==null){alert("you must set the 'uniqueId' property\r\t--JeirchoTab");return}if($("#"+c.uniqueId).length>0){alert("you must set the 'uniqueId' property as unique\r\t--JeirchoTab");return}var f=$('<div id="'+c.uniqueId+'" class="jericho_tab"><div class="tab_pages" ><div class="tabs"><ul /></div></div><div class="tab_content"><div id="jerichotab_contentholder" class="content" /></div></div>').appendTo($(c.renderTo));$(".tab_content>.content",f).css(c.contentCss);$.fn.jerichoTab={master:f,tabWidth:c.tabWidth,tabPageWidth:$(".tab_pages",f).width(),slidersWidth:c.slidersWidth,loader:c.loader,loadOnce:c.loadOnce,uniqueId:c.uniqueId,isCookieTabsetting:c.isCookieTabsetting,isCookieLoadData:c.isCookieLoadData,cookieTabsetting:c.cookieTabsetting,cookieTabLast:c.cookieTabLast,fn_beforeAddTab:c.fn_beforeAddTab,fn_afterTabMouseup:c.fn_afterTabMouseup,fn_afterTabLoad:c.fn_afterTabLoad,openWithNewWidowAfterDblClick:c.openWithNewWidowAfterDblClick,fn_tabDblClick:c.fn_tabDblClick,curDatalink:null,tabpage:$(".tab_pages>.tabs>ul",f),addTab:function(i){if($.fn.jerichoTab.fn_beforeAddTab){$.fn.jerichoTab.fn_beforeAddTab.call()}tagGuid=(typeof tagGuid=="undefined"?0:tagGuid+1);var g=tagGuid;var h=$.fn.extend({tabFirer:null,tabFirerRef:null,title:"新增页签"+(g+1),data:{dataType:"",dataLink:""},iconImg:"",closeable:true,onLoadCompleted:null,name:""},i);var e;if(h.tabFirer!=null&&h.tabFirer.attr!=undefined){e=h.tabFirer.attr("jerichotabindex");if(typeof e!="undefined"&&$("#jerichotab_"+e).length>0){return $.fn.setTabActive(e).adaptSlider().loadData()
}h.tabFirer.attr("jerichotabindex",g)}else{if($.fn.jerichoTab.isCookieTabsetting&&h.tabFirerRef){$(h.tabFirerRef).attr("jerichotabindex",g)}}if($.fn.jerichoTab.isCookieTabsetting){if(h.tabFirerRef!=null){e=null;$.fn.jerichoTab.curDatalink=h.data.dataLink;$("#"+$.fn.jerichoTab.uniqueId).find('li[tabfirerref="'+h.tabFirerRef+'"]').each(function(k,l){if($.fn.jerichoTab.curDatalink==$(l).attr("datalink")){e=$(l).attr("jerichotabindex")}});if(e){return $.fn.setTabActive(e).adaptSlider().loadData()}}}if(h.name==""){h.name=h.title}var j=$('<li name="'+h.name+'" class="jericho_tabs tab_selected" style="width:0px"  tabfirerref="'+h.tabFirerRef+'"  jerichotabindex="'+g+'"  id="jerichotab_'+g+'" dataType="'+h.data.dataType+'" dataLink="'+h.data.dataLink+'"><div class="tab_left"  style="width:'+(c.tabWidth-5)+'px"  >'+(h.iconImg==""?"":'<div class="tab_icon" style="background-image:url('+h.iconImg+')">&nbsp;</div>')+'<div class="tab_text" title="'+h.title+'"  style="width:'+(c.tabWidth-45+(h.iconImg==""?25:0))+'px"  >'+h.title.cut(c.tabWidth/10-1)+'</div>  <div class="tab_close">'+(h.closeable?'<a href="javascript:" title="关闭">&nbsp;</a>':"")+'</div></div><div class="tab_right">&nbsp;</div></li>').appendTo($.fn.jerichoTab.tabpage).css("opacity","0").applyHover().applyCloseEvent().animate({opacity:"1",width:c.tabWidth},100,function(){$.fn.setTabActive(g)});tabHash=(typeof tabHash=="undefined"?[]:tabHash);tabHash.push({index:g,tabFirer:h.tabFirer,tabId:"jerichotab_"+g,holderId:"jerichotabholder_"+g,iframeId:"jerichotabiframe_"+g,onCompleted:h.onLoadCompleted,tab:h});if($.fn.jerichoTab.isCookieTabsetting){$.fn.applyCookieTabsetting(tabHash)}if($.fn.jerichoTab.isCookieLoadData){return j.applySlider().setTabActive(g).loadData()}return j.applySlider()},closeCurrentTab:function(e){$(".tab_selected .tab_close>a").click()},};if(c.isCookieTabsetting&&cookie(c.cookieTabsetting)!=null&&cookie(c.cookieTabsetting)!="null"){c.tabs=JSON.parse(cookie(c.cookieTabsetting))}$.each(c.tabs,function(e,g){$.fn.jerichoTab.addTab(g)});try{if(tabHash.length==0){f.css({display:"none"})
}}catch(d){}}a();if(c.isCookieTabsetting){c.activeTabIndex=(typeof tagGuid=="undefined"?0:tagGuid)}$.fn.setTabActive(c.activeTabIndex).loadData();$.fn.jerichoTab.resize=function(){$.fn.jerichoTab.tabPageWidth=$(".tab_pages",$.fn.jerichoTab.master).width()-(($(".jericho_slider").length>0)?($.fn.jerichoTab.slidersWidth*2):0);$(".tabs",$.fn.jerichoTab.master).width($.fn.jerichoTab.tabPageWidth).applySlider().adaptSlider();var d=-2;$("#jerichotab_contentholder").height($(c.renderTo).height()-c.titleHeight-5-d);$(".jericho_tab iframe").height($(".jericho_tab").parent().height()-c.titleHeight-d)};$(window).resize(function(){$.fn.jerichoTab.resize()})},setTabActiveByOrder:function(b){var a=$.fn.jerichoTab.tabpage.children("li").filter(".tab_selected");if(a.length>0){a.swapTabEnable()}return $("#jericho_tabs").filter(":nth-child("+b+")").swapTabEnable()},setTabActive:function(b){var a=$.fn.jerichoTab.tabpage.children("li").filter(".tab_selected");if(a.length>0){a.swapTabEnable()}return $("#jerichotab_"+b).swapTabEnable()},addEvent:function(c,a){var b=this.get(0);if(b.addEventListener){b.addEventListener(c,a,false)}else{if(b.attachEvent){b.attachEvent("on"+c,a)}}},buildIFrame:function(a){return this.each(function(){var c=null,b="";var f;for(var e in tabHash){if(tabHash[e].holderId==$(this).attr("id")){c=tabHash[e].onCompleted;b=tabHash[e].iframeId;f=tabHash[e].tab.tabFirerRef;break}}a+=(a.indexOf("?")==-1?"?":"&")+"tabPageId="+b;var d=$('<iframe id="'+b+'" name="'+b+'" src="'+a+'" frameborder="0" scrolling="auto" />').css({width:"100%",height:$(this).parent().height(),border:0}).appendTo($(this));$("#"+b).addEvent("load",function(){!!c?c(arguments[1]):true;$.fn.removeLoader(f)})})},loadData:function(a){return this.each(function(){$(".jericho_tab .tab_selected").css("background-color",$("body").css("background-color"));$("#jerichotab_contentholder").showLoader();var j=null,d="",b="";for(var c in tabHash){if(tabHash[c].tabId==$(this).attr("id")){j=tabHash[c].onCompleted;d="#"+tabHash[c].holderId;b="#"+tabHash[c].tabId;break}}var g=$(this).attr("dataType");
var h=$(this).attr("dataLink");if(typeof g=="undefined"||g==""||g=="undefined"){e();return}$("#jerichotab_contentholder").children("div[class=curholder]").attr("class","holder").css({display:"none"});var f=$(d);if(f.length==0){f=$('<div class="curholder" id="'+d.replace("#","")+'" />').appendTo($("#jerichotab_contentholder"));i(f)}else{f.attr("class","curholder").css({display:"block"});if($.fn.jerichoTab.loadOnce&&!a){e()}else{f.html("");i(f)}}function i(l){switch(g){case"formtag":$(h).css("display","none");var k=$(h).clone(true).appendTo(l).css("display","block");e(f);break;case"html":f.load(h+"?t="+Math.floor(Math.random()),function(){e(f)});break;case"iframe":f.buildIFrame(h,f);break;case"ajax":$.ajax({url:h,data:{t:Math.floor(Math.random())},error:function(m){f.html("数据加载失败！");e(f)},success:function(m){f.html(m);e(f)}});break}}function e(k){!!j?j(k):true;$.fn.removeLoader()}})},attachSliderEvent:function(){return this.each(function(){var a=this;$(a).hover(function(){$(a).swapClass("jericho_slider"+$(a).attr("pos")+"_enable","jericho_slider"+$(a).attr("pos")+"_hover")},function(){$(a).swapClass("jericho_slider"+$(a).attr("pos")+"_hover","jericho_slider"+$(a).attr("pos")+"_enable")}).mouseup(function(){if($(a).is("[slide=no]")){return}var c=parseInt($.fn.jerichoTab.tabpage.css("left"));var b=tabHash.length*$.fn.jerichoTab.tabWidth-$.fn.jerichoTab.tabPageWidth+($.fn.jerichoTab.slidersWidth*2);switch($(a).attr("pos")){case"left":if(c+$.fn.jerichoTab.tabWidth<0){$.fn.jerichoTab.tabpage.animate({left:c+$.fn.jerichoTab.tabWidth},100)}else{$.fn.jerichoTab.tabpage.animate({left:0},100,function(){$(a).attr({slide:"no","class":"jericho_sliders jericho_sliderleft_disable"})})}$(".jericho_sliders[pos=right]").attr({slide:"yes","class":"jericho_sliders jericho_sliderright_enable"});break;case"right":if(c-$.fn.jerichoTab.tabWidth>-b){$.fn.jerichoTab.tabpage.animate({left:c-$.fn.jerichoTab.tabWidth},100)}else{$.fn.jerichoTab.tabpage.animate({left:-b},100,function(){$(a).attr({slide:"no","class":"jericho_sliders jericho_sliderright_disable"})
})}$(".jericho_sliders[pos=left]").attr({slide:"yes","class":"jericho_sliders jericho_sliderleft_enable"});break}})})},applySlider:function(){return this.each(function(){if(typeof tabHash=="undefined"||tabHash.length==0){return}var a=tabHash.length*$.fn.jerichoTab.tabWidth-$.fn.jerichoTab.tabPageWidth+($.fn.jerichoTab.slidersWidth*2);if(tabHash.length>0&&a>0){$.fn.jerichoTab.tabpage.parent().css({width:$.fn.jerichoTab.tabPageWidth-($.fn.jerichoTab.slidersWidth*2)});$.fn.jerichoTab.tabpage.css({width:a+$.fn.jerichoTab.tabPageWidth-($.fn.jerichoTab.slidersWidth*2)}).animate({left:-a},0,function(){if($(".jericho_sliders").length<=0){var b='onclick="if(document.selection && document.selection.empty) {document.selection.empty();}else if(window.getSelection) {var sel = window.getSelection();sel.removeAllRanges();}"';$.fn.jerichoTab.tabpage.parent().before($('<div class="jericho_sliders jericho_sliderleft_enable" slide="yes" pos="left" '+b+"></div>"));$.fn.jerichoTab.tabpage.parent().after($('<div class="jericho_sliders jericho_sliderright_disable" pos="right" slide="yes" '+b+"></div>"));$(".jericho_sliders").attachSliderEvent()}})}else{if(tabHash.length>0&&a<=0){$(".jericho_sliders").remove();$.fn.jerichoTab.tabpage.parent().css({width:$.fn.jerichoTab.tabPageWidth});$.fn.jerichoTab.tabpage.css({width:-a+$.fn.jerichoTab.tabPageWidth}).animate({left:0},0)}}})},adaptSlider:function(){return this.each(function(){if($(".jericho_sliders").length>0){var e=parseInt($.fn.jerichoTab.tabpage.css("left"));var h="#",c=0;for(var d in tabHash){if(tabHash[d].tabId==$(this).attr("id")){h+=tabHash[d].tabId;c=parseInt(d);break}}var b=$.fn.jerichoTab.tabPageWidth-($.fn.jerichoTab.slidersWidth*2);var a=$.fn.jerichoTab.tabWidth*c+e;var g=$.fn.jerichoTab.tabWidth*(c+1)+e;function f(j,i){$(".jericho_sliders[pos="+j+"]").attr({slide:(i?"yes":"no"),"class":"jericho_sliders jericho_slider"+j+"_"+(i?"enable":"disable")})}if((a<0&&a>-$.fn.jerichoTab.tabWidth)&&(g>0&&g<$.fn.jerichoTab.tabWidth)){$.fn.jerichoTab.tabpage.animate({left:-$.fn.jerichoTab.tabWidth*c},0,function(){if(c==0){f("left",false)
}else{f("left",true)}f("right",true)})}if((a<b&&a>b-$.fn.jerichoTab.tabWidth)&&(g>b&&g<b+$.fn.jerichoTab.tabWidth)){$.fn.jerichoTab.tabpage.animate({left:-$.fn.jerichoTab.tabWidth*(c+1)+b},0,function(){if(c==tabHash.length-1){f("right",false)}else{f("left",true)}f("left",true)})}}})},applyCloseEvent:function(){return this.each(function(){var a=this;$(".tab_close>a",this).click(function(b){b.stopPropagation();if($(this).length==0){return}$(a).animate({opacity:"0",width:"0px"},100,function(){var c=$.fn.jerichoTab.tabpage.children("li").filter(".tab_selected");if(c.attr("id")==$(this).attr("id")){if($(this).prev().text()!=""){$(this).prev().swapTabEnable().loadData()}else{$(this).next().swapTabEnable().loadData()}}for(var d in tabHash){if(tabHash[d].tabId==$(a).attr("id")){if(tabHash[d].tabFirer!=null&&tabHash[d].tabFirer.removeAttr!=undefined){tabHash[d].tabFirer.removeAttr("jerichotabindex")}tabHash.splice(d,1)}}$(a).applySlider().remove();$("#jerichotabholder_"+$(a).attr("id").replace("jerichotab_","")).remove();if($.fn.jerichoTab.isCookieTabsetting){$.fn.applyCookieTabsetting(tabHash)}})});$(this).RightMenu("jerichotabmenu",{menuList:[{menuName:"刷新当前",clickEvent:"$('.tab_selected').loadData(true);"},{menuName:"关闭其它",clickEvent:"$('.tab_unselect .tab_close>a').click();setTimeout('$.fn.jerichoTab.resize();setTimeout(\\'$.fn.jerichoTab.resize();setTimeout(\\\\\\'$.fn.jerichoTab.resize();\\\\\\',1000);\\',500);',500);"}]})})},applyHover:function(){return this.each(function(){$(this).hover(function(){if($(this).hasClass("tab_unselect")){$(this).addClass("tab_unselect_h")}},function(){if($(this).hasClass("tab_unselect_h")){$(this).removeClass("tab_unselect_h")}}).mouseup(function(){if($(this).hasClass("tab_selected")){return}var a=$.fn.jerichoTab.tabpage.children("li").filter(".tab_selected");a.attr("class","jericho_tabs tab_unselect");$("#jerichotabholder_"+a.attr("id").replace("jerichotab_","")).css({display:"none"});$(this).attr("class","jericho_tabs tab_selected").loadData().adaptSlider();if($.fn.jerichoTab.fn_afterTabMouseup){$.fn.jerichoTab.fn_afterTabMouseup.call(this,$(this).attr("tabfirerref"))
}if($.fn.jerichoTab.cookieTabLast){cookie($.fn.jerichoTab.cookieTabLast,$(this).attr("tabfirerref"));window.console&&window.console.debug("[jqeuery.jerichotab.js]cookieTabLast=",cookie($.fn.jerichoTab.cookieTabLast))}}).dblclick(function(){if($.fn.jerichoTab.fn_tabDblClick){$.fn.jerichoTab.fn_tabDblClick.call()}if($.fn.jerichoTab.openWithNewWidowAfterDblClick){window.open($(this).attr("datalink"),"_blank")}})})},swapTabEnable:function(){return this.each(function(){if($(this).hasClass("tab_selected")){$(this).swapClass("tab_selected","tab_unselect")}else{if($(this).hasClass("tab_unselect")){$(this).swapClass("tab_unselect","tab_selected")}}})},swapClass:function(b,a){return this.each(function(){$(this).removeClass(b).addClass(a)})},showLoader:function(){return this.each(function(){switch($.fn.jerichoTab.loader){case"usebg":$(this).addClass("loading");break;case"righttag":if($("#jerichotab_contentholder>.righttag").length==0){$('<div class="righttag">正在加载...</div>').appendTo($(this))}else{$("#jerichotab_contentholder>.righttag").css({display:"block"})}break}})},removeLoader:function(a){switch($.fn.jerichoTab.loader){case"usebg":$("#jerichotab_contentholder").removeClass("loading");break;case"righttag":$("#jerichotab_contentholder>.righttag").css({display:"none"});break}if($.fn.jerichoTab.fn_afterTabLoad&&a){$.fn.jerichoTab.fn_afterTabLoad.call(this,a)}},applyCookieTabsetting:function(a){var b=[];$.each(a,function(d,e){delete e.tab.tabFirer;b.push(e.tab)});var c=JSON.stringify(b);cookie($.fn.jerichoTab.cookieTabsetting,c);window.console&&window.console.debug("[jqeuery.jerichotab.js]applyCookieTabsetting=",cookie($.fn.jerichoTab.cookieTabsetting))}});String.prototype.cut=function(c){var b=0;var a=[];var e="";for(var d=0;d<this.length;d++){if(b>=c){e="...";break}if(this.charCodeAt(d)>255){b+=2;a.push(this.substr(d,1))}else{b++;a.push(this.substr(d,1))}}return a.join("")+e};$(function(){document.oncontextmenu=function(){return false};document.onmousemove=mouseMove});var mx=0,my=0;function mouseMove(b){Ev=b||window.event;
var a=mouseCoords(Ev);mx=a.x;my=a.y}function mouseCoords(a){if(a.pageX||a.pageY){return{x:a.pageX,y:a.pageY}}return{x:a.clientX,y:a.clientY+$(document).scrollTop()}}$.fn.extend({RightMenu:function(e,a){a=$.extend({menuList:[]},a);var d=a.menuList.length;if(!$("#"+e)[0]){var c='<div id="'+e+'" class="div_RightMenu"><div><ul class=\'ico\'>';for(var b=0;b<d;b++){c+='<li class="'+a.menuList[b].menuclass+'" onclick="'+a.menuList[b].clickEvent+'">'+a.menuList[b].menuName+"</li>"}c+="</ul></div><div>";$("body").append(c).find("#"+e).hide().find("li").bind("mouseover",function(){$(this).addClass("RM_mouseover")}).bind("mouseout",function(){$(this).removeClass("RM_mouseover")});$(document).click(function(){$("#"+e).hide()})}return this.each(function(){this.oncontextmenu=function(){var l=$("body").width(),k=$("html").height(),j=$("body").height(),f=$("#"+e).width(),i=$("#"+e).height(),g=(k>j)?k:j;if(g<i+my){my=g-i}if(l<f+mx){mx=l-f}$("#"+e).hide().css({top:my,left:mx}).show();$.fn.jerichoTab.resize()}})}});