$("#showSidebar").hide();
if($("body").width() < 768){
	$("#sidebar-wrapper").css("width", "0");
	$("#showSidebar").show();
}
$("#showSidebar").click(function(){
	$("#sidebar-wrapper").css("width", "250px");
});
$("#sidebar-wrapper").click(function(){
	if($("body").width() < 768){
		$("#sidebar-wrapper").css("width", "0");
	}
});

$("#menu-toggle").click(function(e) {
	e.preventDefault();
	$("#wrapper").toggleClass("toggled");
});

$(window).resize(function(){
	if($("body").width() < 768){
		$("#sidebar-wrapper").css("width", "0");
		$("#showSidebar").show();
	} else {
		$("#showSidebar").hide();
		$("#sidebar-wrapper").css("width", "250px");
	}
});