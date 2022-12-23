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
