//***************************底部**************************
function bottom(){
	$(function(){	
		//************语言选择******************
		 $(".choose").hover(function(){
			$(".language").css("display","block");
		},function(){
			$(".language").css("display","none");
		})
		  $(".language").hover(function(){
			$(".language").css("display","block");
		},function(){
			$(".language").css("display","none");
		})
		 
		 //************微博图标******************
		 var aspan = $(".blog span");
		 aspan.hover(function(){
		 	$(this).css("background-position-y","-155px");
		 },function(){
		 	$(this).css("background-position-y","-129px");
		 })	 	 
	})
}

