var nav = (function() {
	var navTimer;
	$('.depth1').on('mouseenter', function() {
		if (navTimer) {
			clearTimeout(navTimer);
		}

		$('.navigation').addClass('over');
		TweenMax.to($('.navigation .nav-wrapper'), 0.5, {
			height: 300,
			ease: Cubic.easeOut
		});
	});

	$('.depth1').on('focusin', function() {
		if (navTimer) {
			clearTimeout(navTimer);
		}

		$('.navigation').addClass('over');
		TweenMax.to($('.navigation .nav-wrapper'), 0.5, {
			height: 300,
			ease: Cubic.easeOut
		});
	});

	$('.navigation .nav-wrapper').on('mouseleave', function() {
		if (navTimer) {
			clearTimeout(navTimer);
		}

		navTimer = setTimeout(function() {
			$('.navigation').removeClass('over');
			TweenMax.to($('.navigation .nav-wrapper'), 0.5, {
				height: 80,
				ease: Cubic.easeOut,
				onComplete: function() {}
			});
		}, 200);
	});

	$('.navigation .nav-wrapper').on('focusout', function() {
		if (navTimer) {
			clearTimeout(navTimer);
		}

		navTimer = setTimeout(function() {
			$('.navigation').removeClass('over');
			TweenMax.to($('.navigation .nav-wrapper'), 0.5, {
				height: 80,
				ease: Cubic.easeOut,
				onComplete: function() {}
			});
		}, 200);
	});
})();

//Side NAV
function openNav() {
	document.getElementById("SideNav").style.width = "300px";
}

function closeNav() {
	document.getElementById("SideNav").style.width = "0";
}

//accordion
jQuery(document).ready(function ($) {
	$(".accor-nav-title").click(function () {
		$(".accor-nav-title").removeClass("active");
		$(".accor-nav-content").slideUp("normal");
		if ($(this).next().is(":hidden") == true) {
			$(this).addClass("active");
			$(this).next().slideDown("normal");
		}
	});
	$(".accor-nav-content").hide();
});




$(document).ready(function(){
  $("#regApass").change(function(){	  
    if($("#regApass").is(":checked")){
      $('body').css("overflowY", "hidden");
	  //alert($(document).scrollTop());
	  var $target = $(".regApass .md-wrapper");
	  var m_top = parseInt($target.css("margin-top"), 10);	  
	  var add_top = $(document).scrollTop();

	  if(m_top > 130) {
		m_top -= 170;
	  }

	  $target.css("margin-top", (m_top + add_top) + "px");
    }else{
      $('body').css("overflowY", "scroll");
	  
    }
  });
});



var dropdowns = $(".select-drdn");

// Onclick on a dropdown, toggle visibility
dropdowns.find(".select-drdn-current").click(function() {
	var target_select = $(this).parents().children(":eq(1)").children(":eq(0)").css("display");
	dropdowns.find(".select-drdn-wrapper .select-drdn-items").hide();
	$(this).next().children().toggle();
	if (target_select=='block') $(".select-drdn .select-drdn-wrapper .select-drdn-items").hide();
});

// Clic handler for dropdown
dropdowns.find(".select-drdn-wrapper .select-drdn-items li a").click(function() {
	var leSpan = $(this).parents(".select-drdn").find(".select-drdn-current a");

	// Remove selected class
	$(this).parents(".select-drdn").find('.select-drdn-wrapper').each(function() {
		$(this).removeClass('selected');
	});

	// Update selected value
	leSpan.html($(this).html());

	// If back to default, remove selected class else addclass on right element
	if ($(this).hasClass('default')) {
		leSpan.removeClass('selected')
	} else {
		leSpan.addClass('selected');
		$(this).addClass('selected');
	}

	// Close dropdown
	$(this).parents(".select-drdn-items").hide();
});

// Close all dropdown onclick on another element
$(document).bind('click', function(e) {
	if (!$(e.target).parents().hasClass("select-drdn")) $(".select-drdn .select-drdn-wrapper .select-drdn-items").hide();
});


$(window).scroll(function() {
	//button hide and show on scroll
	if( $(this).scrollTop() > 640 ){
		$('.tothe-top').fadeIn();
	} else {
		$('.tothe-top').fadeOut();
	}
});

//activation scrollTop with animation
$('.tothe-top').click(function(){
	$('html, body').animate({
		scrollTop: 0
	}, 500);
});
