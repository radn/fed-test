(function ($) { 
    $('.left-container a').each(function() {
    	$(this).click(function() {
    		$('.left-container a').removeClass('active');
    		$(this).addClass('active');
    		var aa = $(this).attr('data-section');
    		if($('.articles').hasClass('active-section')) {
	    		$('body').removeClass('events-section');
    			$('body').removeClass('articles-section');
    			$('body').addClass(aa);
    		}
    	});
    });
})(jQuery)