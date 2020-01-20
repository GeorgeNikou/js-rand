// user input
var newTodo

// simpler way!
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
})

// --------------------------------------------------------------------------------------------------------------------

// click on x to delete todo
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
	});
e.stopPropagation();
});


$("input[type='text']").on("keyup", function(e){
	if(e.which == 13){
		newTodo = $(this).val();
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + newTodo + " </li>");
		$(this).val("");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(500);
});


