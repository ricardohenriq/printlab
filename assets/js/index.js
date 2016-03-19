$('.bxslider').bxSlider({
	slideWidth: 1130,
	minSlides: 1,
	maxSlides: 1,
	moveSlides: 1,
	auto: true
});

$("#getPortfolioModal1").one('click', function(){
	var settings = [];
	settings['url'] = '/what-we-do/1.html';
	settings['beforeSend'] = '';
	settings['success'] = function(response){
		appendElement('#page-top', response);
		$('#portfolioModal1').modal('show');
	}
	settings['error'] = function(XMLHttpRequest, textStatus, errorThrown){
		defaultAjaxErrorHandler(XMLHttpRequest, textStatus, errorThrown);
	}
	settings['dataType'] = 'html';
	settings['false'] = false;
	functionAjax(settings);
});

$("#getPortfolioModal2").one('click', function(){
	var settings = [];
	settings['url'] = '/what-we-do/2.html';
	settings['beforeSend'] = '';
	settings['success'] = function(response){
		appendElement('#page-top', response);
		$('#portfolioModal2').modal('show');
	}
	settings['error'] = function(XMLHttpRequest, textStatus, errorThrown){
		defaultAjaxErrorHandler(XMLHttpRequest, textStatus, errorThrown);
	}
	settings['dataType'] = 'html';
	settings['false'] = false;
	functionAjax(settings);
});

$("#getPortfolioModal3").one('click', function(){
	var settings = [];
	settings['url'] = '/what-we-do/3.html';
	settings['beforeSend'] = '';
	settings['success'] = function(response){
		appendElement('#page-top', response);
		$('#portfolioModal3').modal('show');
	}
	settings['error'] = function(XMLHttpRequest, textStatus, errorThrown){
		defaultAjaxErrorHandler(XMLHttpRequest, textStatus, errorThrown);
	}
	settings['dataType'] = 'html';
	settings['false'] = false;
	functionAjax(settings);
});

$("#getPortfolioModal4").one('click', function(){
	var settings = [];
	settings['url'] = '/what-we-do/4.html';
	settings['beforeSend'] = '';
	settings['success'] = function(response){
		appendElement('#page-top', response);
		$('#portfolioModal4').modal('show');
	}
	settings['error'] = function(XMLHttpRequest, textStatus, errorThrown){
		defaultAjaxErrorHandler(XMLHttpRequest, textStatus, errorThrown);
	}
	settings['dataType'] = 'html';
	settings['false'] = false;
	functionAjax(settings);
});

$("#getPortfolioModal5").one('click', function(){
	var settings = [];
	settings['url'] = '/what-we-do/5.html';
	settings['beforeSend'] = '';
	settings['success'] = function(response){
		appendElement('#page-top', response);
		$('#portfolioModal5').modal('show');
	}
	settings['error'] = function(XMLHttpRequest, textStatus, errorThrown){
		defaultAjaxErrorHandler(XMLHttpRequest, textStatus, errorThrown);
	}
	settings['dataType'] = 'html';
	settings['false'] = false;
	functionAjax(settings);
});

$("#getPortfolioModal6").one('click', function(){
	var settings = [];
	settings['url'] = '/what-we-do/6.html';
	settings['beforeSend'] = '';
	settings['success'] = function(response){
		appendElement('#page-top', response);
		$('#portfolioModal6').modal('show');
	}
	settings['error'] = function(XMLHttpRequest, textStatus, errorThrown){
		defaultAjaxErrorHandler(XMLHttpRequest, textStatus, errorThrown);
	}
	settings['dataType'] = 'html';
	settings['false'] = false;
	functionAjax(settings);
});