jQuery(document).ready(function($){
	$('.homebanner, .testimonials').slick({
	  dots: true,
	  infinite: true,
	  fade: true,
	  autoplay: true,
	  speed: 300,
	  slidesToShow: 1,
	  adaptiveHeight: true
	});

	scrollMagic();
})





function scrollMagic(){
	
	// Init scrollmagic
	var controller = new ScrollMagic.Controller();

	//banner parallax script
	var bannerParallaxscene = new ScrollMagic.Scene({
		triggerElement : '.topbanner',
		triggerHook : 0,
		duration :'100%',
	})
	// .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
	.setTween(TweenMax.from('.s-slide', 1, { backgroundPosition:'center 0px', easeIn:Power0.easeNone}))
    .addTo(controller);

    //banner parallax script
	var bannerParallaxscene = new ScrollMagic.Scene({
		triggerElement : '.topbanner',
		triggerHook : 0,
		duration :'100%',
	})
	.setTween(TweenMax.to('.banner-caption', 1, { y:'-100px', opacity:'.5', easeIn:Power0.easeNone}))
    .addTo(controller);

    // pin header
	var pinIntroscene = new ScrollMagic.Scene({
		triggerElement : '.main-header',
		triggerHook : 0
	})
	.setPin('.main-header', {pushFollowers:false})
	.setClassToggle( '.main-header' ,'fixed-header')     
	.addTo(controller);

	// loop throught each category element for pull up effect

    $('.fadeupeffect').each(function(){
        // build a scene
        var ourscene = new ScrollMagic.Scene({
            triggerElement :this,
            triggerHook: 0.6,
        })
        .setClassToggle( this ,'fade-in') 
        .reverse(false)
        .addTo(controller);
    })



}