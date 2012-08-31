/*-------------------------------------------------------
					Pages JS
-------------------------------------------------------*/

/*
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,e,b){var c="hashchange",h=document,f,g=$.event.special,i=h.documentMode,d="on"+c in e&&(i===b||i>7);function a(j){j=j||location.href;return"#"+j.replace(/^[^#]*#?(.*)$/,"$1")}$.fn[c]=function(j){return j?this.bind(c,j):this.trigger(c)};$.fn[c].delay=50;g[c]=$.extend(g[c],{setup:function(){if(d){return false}$(f.start)},teardown:function(){if(d){return false}$(f.stop)}});f=(function(){var j={},p,m=a(),k=function(q){return q},l=k,o=k;j.start=function(){p||n()};j.stop=function(){p&&clearTimeout(p);p=b};function n(){var r=a(),q=o(m);if(r!==m){l(m=r,q);$(e).trigger(c)}else{if(q!==m){location.href=location.href.replace(/#.*/,"")+q}}p=setTimeout(n,$.fn[c].delay)}$.browser.msie&&!d&&(function(){var q,r;j.start=function(){if(!q){r=$.fn[c].src;r=r&&r+a();q=$('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){r||l(a());n()}).attr("src",r||"javascript:0").insertAfter("body")[0].contentWindow;h.onpropertychange=function(){try{if(event.propertyName==="title"){q.document.title=h.title}}catch(s){}}}};j.stop=k;o=function(){return a(q.location.href)};l=function(v,s){var u=q.document,t=$.fn[c].domain;if(v!==s){u.title=h.title;u.open();t&&u.write('<script>document.domain="'+t+'"<\/script>');u.close();q.location.hash=v}}})();return j})()})(jQuery,this);


function showContent(department, animate) {
	
	if (department === "") {
		$(".content").hide();
		$("#top_footer").show();
	}
	
	if (department != "projects" && department != "work" && department != "social" && department != "contact") {
		return;
	}
	
	window.location.hash = department;

	$(".content." + department).show();
	$("#top_footer").hide();

	if ($(window).scrollTop() < 300 && animate !== false) {
		$("html, body").stop().animate({
			scrollTop: $("#nav").offset().top + 20}, 500);
	}


	if (window._currentDepartment && window._currentDepartment != department) {
		$(".content." + window._currentDepartment).hide();
	}

	window._currentDepartment = department;
	_gaq.push(['_trackPageview', '/#' + department]);
}

function veryReady() {
	
	// Show the right content on load and hide all other content

	var hash = window.location.hash.replace("#", "");

	if (hash) {
		showContent(hash, false);
	}

	$(".show").click(function() {
		showContent($(this).attr("content"));
	});

	// Detect hash changes

	$(window).hashchange(function() {
		showContent(location.hash.replace("#", ""), false);
	});
}


//$('document').ready(function() {
	//veryReady();
//});

/*-------------------------------------------------------
					Quarter Tabs JS
-------------------------------------------------------*/
$(document).ready(function(){
	veryReady();
	switchTab();
});

var content_tabs = ['quarter1', 'quarter2', 'quarter3', 'quarter4', 'quarter5'];

function switchTab(tab) {
	$('.quarters ul li a').removeClass("selected");
	var tabs = $('.quarters ul li');
	for(var i=0; i<tabs.length; i++) {
		if(tab == i){$(tabs[i]).find('a').addClass("selected")}
		if(tab == i) $('#' + content_tabs[i]).show(); 
		else $('#' + content_tabs[i]).hide();
	}
};	


