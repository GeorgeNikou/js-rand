// console.log entered BEFORE the fade out
$("button").on("click", function(){
	$("div").fadeOut(1000);
	console.log("string entered");
});

// console.log entered AFTER the fade out
$("button").on("click", function(){
	$("div").fadeOut(1000, function(){
		console.log("string entered");
	});
});

// removes all 'div' elements
$("button").on("click", function(){
	$("div").fadeOut(1000, function(){
		$(this).remove();
	});
});

// Fade in and fade out
$("button").on("click", function(){
	$("div").fadeOut(1000, function(){
		$(this).fadeIn(1000);
	});
});

// Fade toggle
$("button").first().on("click", function(){
	$("div").fadeToggle(1000);
});

$("button").last().on("click", function(){
	$("#na").fadeIn(3000);
});

// slideUp and slideDown
$("button:nth-of-type(3)").on("click", function(){
	$("div").slideDown(1000, function(){
		$("div").slideUp(1000);
	});
});

// slideUp and slideDown
$("button:nth-of-type(3)").on("click", function(){
	$("div").slideToggle(1000);
});

