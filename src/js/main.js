///*********************点击手机版出现二维码*********************
$(function(){
	var $code = $(".show");
	$code.hover(function(){
		$(".code").css("display","block");
		$(".up").css("background-position-x","-195px");
	},function(){
		$(".code").css("display","none");
		$(".up").css("background-position-x","-210px");
	})
})

//*******************二级菜单布局**********************
function fn(){
	$(function(){
		$.getJSON("../src/json/main.json",function(data){					
			for(var attr in data){
				var bigDiv = $create("div");
				var oDiv_L = $create("div");
				var oDiv_R = $create("div");	
				
				$(bigDiv).addClass("list_R");
				$(oDiv_L).addClass("left");
				$(oDiv_R).addClass("right");
				
				$(bigDiv).appendTo($(".big"));
				$(oDiv_L).appendTo($(bigDiv));
				$(oDiv_R).appendTo($(bigDiv));
				
				$(bigDiv).css("display","none");
				
				for(var l=0;l<data[attr].picture.length;l++){
					var oImg = `<img src="../main_img/${data[attr].picture[l]}"/>`;
					$(oImg).appendTo($(oDiv_R));
				}
				
				for(var i =0;i<data[attr].word.length;i++){
					
					var oDiv = $create("div");
					$(oDiv).appendTo($(oDiv_L));					
					$("<p>" +data[attr].word[i]+"</p>").appendTo($(oDiv));
					var oul = document.createElement("ul");
					$(oul).appendTo($(oDiv));	
					
					for(var j=0;j<data[attr].list[i].length;j++){	
						$("<li>" + data[attr].list[i][j]+ "</li>").appendTo($(oul));													
					}					
				}
			}
			fn1(".list_L li",".big .list_R");
		})
	})			
}
//*********************二级菜单匹配*********************
function fn1(ele1,ele2){
	var $tab = $(ele1);
	var $lis = $(ele2);
//	alert($lis.length);
	$lis.eq(0).css("display","block");
	$tab.hover(function(){
		var $index = $(this).index();//获取下标
		$(".big").css("display","block");
		$(this).css({"background":"#f7f7f7","border-right": "none"});
		$(this).find("a").css("color","#ba1f0f");
		$(this).find("span").css("background-position-x","-72px");		
		$lis.eq($index).css("display","block").siblings().css("display","none");
	},function(){
		$(".big").css("display","none");
		$(this).css({"background":"white","border-right": "1px solid ##e6e6e6"});
		$(this).find("a").css("color","black");
		$(this).find("span").css("background-position-x","-35px");
	})
	
	$(".big").hover(function(){
		$(".big").css("display","block");
	},function(){
		$(".big").css("display","none");
	})
}

//*********************轮播图下小图标*********************
$(function(){
	var $dls = $(".picture dl");
	$dls.hover(function(){
		var $index = $(this).index();
		$(this).find("img").attr("src","../main_img/iconts"+($index + 1)+".png");
		$(this).css("color","#333");
	},function(){
		var $index = $(this).index();
		$(this).find("img").attr("src","../main_img/icont"+($index + 1)+".png");
		$(this).css("color","#9c9c9c");
	})
})

//吸顶效果
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
			nav.style.position = "";
			pic.style.position = "";
			$('#pic').find('img').attr("src","../main_img/logo1.jpg");
		}
	}
} 

//倒计时
function timer(){
	var now = new Date();
	var end = new Date("2018-8-8 20:00:00");
	var t = end.getTime() - now.getTime();
	t = t/1000;
	var timer = null;
		
	if(t<0){
		$(".txt").html("秒杀商品已过期");
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
	d = num(d);
//	alert(d + " ,"+h +" ," +m);
	
	var day = document.getElementById("day");
	var hour = document.getElementById("hour");
	var minute = document.getElementById("minute");
	var second = document.getElementById("second");
	
	day.innerHTML = d + "天";
	hour.innerHTML = h;
	minute.innerHTML = m;
	second.innerHTML = s;
}

function num(num){
	if(num<10){
		return "0"+num;
	}else{
		return num;
	}
}





















