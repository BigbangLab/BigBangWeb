
	
	


/***************** Waypoints ******************/

$(document).ready(function() {

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInDown');
	}, {
		offset: '55%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});

});

/***************** Slide-In Nav ******************/

$(window).load(function() {

	$('.nav_slide_button').click(function() {
		$('.pull').slideToggle();
	});

});

/***************** Smooth Scrolling ******************/

$(function() {

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 2000);
				return false;
			}
		}
	});

});

/***************** Nav Transformicon ******************/

// document.querySelector("#nav-toggle").addEventListener("click", function() {
// 	this.classList.toggle("active");
// });

/***************** Overlays ******************/

$(document).ready(function(){
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".img").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".img").hasClass("hover")) {
                $(this).closest(".img").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".img").mouseenter(function(){
            $(this).addClass("hover");
        })
        // handle the mouseleave functionality
        .mouseleave(function(){
            $(this).removeClass("hover");
        });
    }
});

/***************** Mail ******************/
$("#input-submit").on("click", function(){
	if($("#form-email")[0].checkValidity())
	{
	    
	var data = {
	    nombre: $('#input-nombre').val(),
        email: $('#input-email').val(),
        telefono: $('#input-telefono').val(),
        subject: $('#input-subject').val(),
        mensaje: $('#input-message').val()
	};

    $.ajax({
        url: 'send_mail.php',
        type:'POST',
        data:data,
        error: function(msg)
        {
        	alert('Error');
        },
        success: function(msg)
        {
            alert('Email Sent');
        }               
    });

	}
	else
	{
	  return 0;
	}
});



/***************** Flexsliders ******************/

$(window).load(function() {


	$('#portfolioSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: false,
		pauseOnHover: false,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#teamSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	

	$(function() {
		$("#menu-container").click(function(){
			$(".nav-list").slideToggle();
			$("#nav-icon").toggleClass('open');
		});
	});

	$(function() {
		$("#menu-container").keypress(function(e){
			if (e.keyCode == 13) {
				$(".nav-list").slideToggle();
				$("#nav-icon").toggleClass('open');
			}
		});
	});

	$(function() {
		$(".navbar-nav li a").click(function(){
			$(".nav-list").slideToggle();
		});
	});

	$(function() {
		$(".navbar-nav li a").keypress(function(e){
			if (e.keyCode == 13) {
				$(".nav-list").slideToggle();
			}
		});
	});



var query = window.matchMedia("(max-width: 780px)");
	query.addListener(mediaChange);

});

function mediaChange(query) {
  if(query.matches) {
    //We are 780px or below, disable flexslider animation
    console.log(" stop");
    
    $('#portfolioSlider').flexslider('pause');
    $('#teamSlider').flexslider('pause');
    $('.flex-control-nav.flex-control-paging').hide();
  } else {
  	console.log("start");
    //We are above 780px, enable flexslider animation
    $('#portfolioSlider').flexslider('play');
    $('#teamSlider').flexslider('play');
    $('.flex-control-nav.flex-control-paging').show();

  }
};

function flexdestroy(selector) {
  var el = $(selector);
  var elClean = el.clone();

  elClean.find('.flex-viewport').children().unwrap();
  elClean
    .removeClass('flexslider')
    .find('.clone, .flex-direction-nav, .flex-control-nav')
      .remove()
      .end()
    .find('*').removeAttr('style').removeClass (function (index, css) {
      return (css.match (/\bflex\S+/g) || []).join(' ');
    });  

  elClean.insertBefore(el);
  el.remove();        
}