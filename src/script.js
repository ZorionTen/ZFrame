function navClick(div) {
    $('html, body').animate({scrollTop: $(div).offset().top}, 500);
}
$(window).scroll(function(){
	var hT = $('.about').offset().top,
       	hH = $('.about').outerHeight(),
       	wH = $(window).height(),
       	wS = $(this).scrollTop();
	//console.log(wS-(hT+hH-wH));
	if(wS > (hT+hH-wH))
	{
		$('.plan').each(function(i, obj) {
    		if(i%2==0)
    		{
    			$(this).addClass("slideFromLeft");
    		}	
    		else
    		{
    			$(this).addClass("slideFromRight");
    		}
		});
	}
	else
	{
		$('.plan').each(function(i, obj) {
    		if(i%2==0)
    		{
    			$(this).removeClass("slideFromLeft");
    		}	
    		else
    		{
    			$(this).removeClass("slideFromRight");
    		}
		});
	}
});