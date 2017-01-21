/************ПРЕЛОАДЕР*************/
$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});
/***************************/
$(document).ready(function(){
/**********ЧАСЫ*************/
var s_str = $("#arrow_s");
var m_str = $("#arrow_m");
var h_str = $("#arrow_h");
var intervalTimer = setInterval(interval, 1000);
function interval(){
	var date = new Date();
	var s = date.getSeconds();	
	s_str.attr("style","transform: rotate("+s*6+"deg);");
	var m = date.getMinutes();	
	m_str.attr("style","transform: rotate("+m*6+"deg);");
	var h = date.getHours();	
	h_str.attr("style","transform: rotate("+h*30+"deg);");
}
/******ВРАЩЕНИЕ ШЕСТЕРЕНОК******/
$(".whill").each(function(){
	switch($(this).attr('data-dir')){
		case "left":
		var name ='rotation2';
		break;
		case "right":
		var name ='rotation1';
		break;
		default:
		var name ='rotation1';
		break;
	}
	$(this).css({
		'animation-name': name,
    	'animation-duration': $(this).attr('data-timing'),
    	'animation-iteration-count': 'infinite',
    	'animation-timing-function': 'linear'});
});
/*****КОЛЕБАНИЕ СТРЕЛОК*****/
$(".arrow").each(function(){
	switch($(this).attr('data-anim')){
		case "sway1":
		var name='sway1';
		break;		
		case "sway2":
		var name='sway2';
		break;
		case "sway3":
		var name='sway3';
		break;
		case "sway4":
		var name='sway4';
		break;	
		case "sway5":
		var name='sway5';
		break;	
		case "sway6":
		var name='sway6';
		break;
		case "sway7":
		var name='sway7';
		break;	
		default:
		var name='sway1';
		break;
	}
	$(this).css({
		'animation-name': name,
    	'animation-duration': $(this).attr('data-timing'),
    	'animation-iteration-count': 'infinite',
    	'animation-timing-function': 'linear',
    	'animation-direction': 'alternate',
    	'animation-delay': $(this).attr('data-delay')
    	});
});
/*****ВРАЩЕНИЕ ВЕНТИЛЕЙ*****/
$(".valve").each(function(){
	$(this).css({
		'animation-name': 'valve',
    	'animation-duration': $(this).attr('data-timing'),
    	'animation-iteration-count': 'infinite',
    	'animation-timing-function': 'linear'});
});
/***********АНИМАЦИЯ ПОРГРЕССБАРОВ************/
$(function(){
function ProgBarVert(){
	$("#prog_bar_vert").find("div")
	.animate({height: "1%", top: "100%"},3000)
	.animate({height: "100%", top: 0},1000)
	.animate({height: "80%", top: "20%"}, 1000)
	.animate({height: "1%", top: "100%"}, 2000, ProgBarVert);
}
ProgBarVert();
});
function progressBar(percent, $element) {
	var progressBarWidth = percent * $element.width() / 100;
	$element.find('div')
	.animate({ width: progressBarWidth }, 1000)
	.animate({ width: progressBarWidth-20 }, 500)
	.animate({ width: progressBarWidth+20 }, 400);
}
$(window).scroll(function() {
    if ($(this).scrollTop() > 10) {
    	$(".prog_bar").each(function(){
		var perc = $(this).attr('data-percent'); 
		progressBar(perc, $(this));
		});        
    }
});
/***********************/
});