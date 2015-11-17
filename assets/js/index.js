$('.bxslider').bxSlider({
	slideWidth: 1130,
	minSlides: 1,
	maxSlides: 1,
	moveSlides: 1,
	auto: true
});

$("#getPortfolioModal1").click(function(){
	console.log('#portfolioModal1');
	var settings = [];
	settings['url'] = 'http://localhost/PROJETOS/PrintLab/what-we-do/6.html';
	settings['beforeSend'] = '';
	settings['success'] = function(response){
		console.log('sucesso');
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

function functionAjax(settings){
    $.ajax({
        url: settings['url'],
		beforeSend: settings['beforeSend'],
        success: settings['success'],
        error: settings['error'],
        dataType: settings['dataType'],
        global: settings['false']
    });
}

function defaultAjaxErrorHandler(XMLHttpRequest, textStatus, errorThrown){
	console.log(XMLHttpRequest);
	console.log(textStatus);
	console.log(errorThrown);
}

function appendElement(parentID, element){
	$(parentID).append(element);
}
