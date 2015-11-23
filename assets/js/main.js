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

$('body').on('click', '.page-scroll a', function(event) {
	var $anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $($anchor.attr('href')).offset().top
	}, 1500, 'easeInOutExpo');
	event.preventDefault();
});

$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});