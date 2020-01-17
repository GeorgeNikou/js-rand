// ON click listener
$("h1").on("click", function(){
	$(this).css("color", "steelblue");
});

// ON mouseenter listener
$("input").on("mouseenter", function(){
	$(this).css("fontWeight", "bold");
});

// ON mouseleave listener
$("input").on("mouseleave", function(){
	$(this).css("fontWeight", "normal");
});