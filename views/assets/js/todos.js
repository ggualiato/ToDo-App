
//Check Off Specifics Todos By Clicking
$('ul').on("click","li", function(){
	$(this).toggleClass("completed");
});

//Click on X to Delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// $("input[type='text']").keypress(function(event){
// 	if(event.which === 13){
// 		//pegar o texto do Input
// 		var todoText = $(this).val();
// 		// $(this).val("");
// 		//Criar um novo li e adicionar ao ul
// 		$("ul").append("<li><Span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
//
// 		// $('#notepad').submit();
// 	}
// });

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
