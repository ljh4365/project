//*************************轮播图********************
$(function(){
	var obig = $("#top li");
	var osmall = $("#small_ul li");
	var nowPic = 0;
	var btn_L = $(".btn_L");
	var btn_R = $(".btn_R");
	
	obig.eq(0).css("display","block");
	osmall.click(function(){		
		nowPic = $(this).index();
		$(this).css("border-color","#333").siblings().css("border-color","#eee");
		obig.eq(nowPic).css("display","block").siblings().css("display","none");		
	})
	
	btn_L.click(function(){
		nowPic--;
		if(nowPic<0){
			nowPic = obig.length - 1;
		}
		osmall.eq(nowPic).css("border-color","#333").siblings().css("border-color","#eee");
		obig.eq(nowPic).css("display","block").siblings().css("display","none");		
		
	})
	
	btn_R.click(function(){
		nowPic++;
		if(nowPic>6){
			nowPic = 0;
		}
		osmall.eq(nowPic).css("border-color","#333").siblings().css("border-color","#eee");
		obig.eq(nowPic).css("display","block").siblings().css("display","none");		
	})	
})

//*************************倒计时******************************
function timer(){
	var now = new Date();
	var end = new Date("2018-8-8 20:00:00");
	var t = end.getTime() - now.getTime();
	t = t/1000;
	var timer = null;
		
	if(t<0){
		clearInterval(timer);
	}else{
		
		timer=setInterval(function(){
			showtime(t);
			t--;			
		},1000)
	}
	
}
timer();

function showtime(t){
	var s = parseInt(t%60);
	var m = parseInt(parseInt(t/60)%60);
	var h = parseInt(parseInt(t/3600)%24);
	var d = parseInt(parseInt(t/3600)/24);
	s = num(s);
	m = num(m);
	h = num(h);
	
	var day = document.getElementById("day");
	var hour = document.getElementById("hour");
	var minute = document.getElementById("minute");
	var second = document.getElementById("second");
	
	day.innerHTML = d + "天";
	hour.innerHTML = h + "小时";
	minute.innerHTML = m + "分";
	second.innerHTML = s + "秒";
}

function num(num){
	if(num<10){
		return "0"+num;
	}else{
		return num;
	}
}

//**************************选项************************
$(function(){
	var processor = $(".pro span");
	var memory = $(".mem span");
	processor.eq(0).css("border-color","#ff0000");
	memory.eq(0).css("border-color","#ff0000");
	
	processor.each(function(){
//			alert(processor.length);
//			alert(memory.length);
		$(this).click(function(){			
			$(this).css("border-color","#ff0000").siblings().css("border-color","#c9c9c9");
		})	
	})
	
	memory.click(function(){
		$(this).css("border-color","#ff0000").siblings().css("border-color","#c9c9c9");
	})
	
})

//***********************列表*****************************
$(function(){
	var list = $(".list ul li");
	list.eq(0).find("a").css("color","#e2231a");
	list.hover(function(){
		$(this).find("a").css("color","#e2231a");
		$(this).siblings().find("a").css("color","black")
	})
})

//***********************吸顶效果************************
function ceiling(h){
	var nav = document.getElementById("nav");
	var pic = document.getElementById("pic");
	window.onscroll = function(){
		//获取页面滚走的距离 
		var sTop = document.documentElement.scrollTop || document.body.scrollTop;
		if( sTop>h ){
			nav.style.position = "fixed";
			nav.style.top = 0;
			pic.style.position = "fixed";
			pic.style.top = 0;
			$('#pic').find('img').attr("src","../main_img/logo2.jpg");
		}else{
			nav.style.position = "absolute";
			nav.style.top ="34px";
			pic.style.position = "absolute";
			$('#pic').find('img').attr("src","../main_img/logo1.jpg");
		}
	}
} 

//************************右边导航出现***************************
function stairs(){
	var logo = document.getElementById("logo");
	window.onscroll = function(){
		//获取页面滚走的距离 
		var sTop = document.documentElement.scrollTop || document.body.scrollTop;
		if( sTop>1000){			
			logo.style.display = "block";
		}else{			
			logo.style.display = "none";
		}			
	}
}

//************************右边导航*************************
$("#logo ul li").eq(0).hover(function(){
	$(".p_1").css("display","block");
},function(){
	$(".p_1").css("display","none");
})

$("#logo ul li").eq(1).hover(function(){
	$(".p_2").css("display","block");
},function(){
	$(".p_2").css("display","none");
})

$("#logo ul li").eq(4).hover(function(){
	$(".p_3").css("display","block");
},function(){
	$(".p_3").css("display","none");
})

//**************************数量**************************
$(function(){
	var p_L = $(".p_L");
	var p_C = $(".p_C");
	var p_R = $(".p_R");
	
	p_L.click(function(){
		var value = parseInt(p_C.html());
		if((value - 1)<0){
			p_C.html(0);
		}else{
			p_C.html(value - 1); 
		}				
	})
	p_R.click(function(){
		var value = parseInt(p_C.html());
		p_C.html(value + 1); 
	})
	
	$(".buy").click(function(){
		window.location = "shoppingCar.html";
	})	
})







































