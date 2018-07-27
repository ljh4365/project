//轮播图
function Slider(id){
	this.Box = $id(id);
	this.ullis = $get($get(this.Box,'ul')[0],'li');
	this.num = this.ullis.length;
	this.ollis = this.createEle();
	this.indexA = 0;
	this.slide();
	this.ltBtn = $id('ltBtn');
	this.rtBtn = $id('rtBtn');
	this.addEvent();
	this.timer = null;
	this.autoPlay();
}		
Slider.prototype.createEle = function(){
	let ol = $create("ol");
	let arr = [];
	for(let i =0;i<this.num;i++){
		let li = $create("li");
		arr.push(li);
		ol.appendChild(li);			
	}
	this.Box.appendChild(ol);
	return arr;
}

Slider.prototype.slide = function(){
	for(let i=0;i<this.num;i++){
		this.ullis[i].style.display = "none";
		this.ollis[i].style.background = "#383838";
		this.ollis[i].style.width = "8px";
	}
	this.ullis[this.indexA].style.display = "block";
	this.ollis[this.indexA].style.background = "white";
	this.ollis[this.indexA].style.width = "54px";
//	startMove(this.ollis[this.indexA], {
//                  width:54,                   
//           });	
}

Slider.prototype.addEvent = function(){
	this.ltBtn.onclick = function(){
		this.indexA--;
		if(this.indexA==-1){
			this.indexA = this.num -1;
		}
		this.slide();
	}.bind(this);
	this.rtBtn.onclick = function(){
		this.indexA++;
		if(this.indexA==this.num){
			this.indexA = 0;
		}
		this.slide();
	}.bind(this);
	for(let i=0;i<this.num;i++){
		this.ollis[i].onmouseover= function(){
			this.indexA = i;
			this.slide();
		}.bind(this);
//		this.ollis[i].onmouseout= function(){
//			this.style.width = '8px';
//		}
	}
}
Slider.prototype.autoPlay = function(){
	this.timer = setInterval(function(){
		this.indexA++;
		if(this.indexA==this.num){
			this.indexA = 0;
		}
		this.slide();
	}.bind(this),3000)
	this.Box.onmouseover = function(){
		clearInterval(this.timer);
	}.bind(this);
	this.Box.onmouseout = function(){
		this.autoPlay();
	}.bind(this);	
}

//二级菜单

$id('list1').onmouseover = function(){
	$id('list_1').style.display = 'block';
	$id('icont1').style.backgroundPosition = '-198px -44px';
//	startMove($id('list_1'), {
//                  height:450,                   
//              });
//	$('#list_1').slideDown(1000);
}
$id('list1').onmouseout = function(){
	$id('list_1').style.display = 'none';
	$id('icont1').style.backgroundPosition = '-214px -44px';
//	startMove($id('list_1'), {
//                  height:0,                   
//              });
}
$id('list2').onmouseover = function(){
	$id('list_2').style.display = 'block';
	$id('icont2').style.backgroundPosition = '-198px -44px';
//	startMove($id('list_2'), {
//                  height:450,                   
//              });
}
$id('list2').onmouseout = function(){
	$id('list_2').style.display = 'none';
	$id('icont2').style.backgroundPosition = '-214px -44px';
//	startMove($id('list_2'), {
//                  height:0,                   
//              });
}
$id('list_1').onmouseover = function(){
	$id('list_1').style.display = 'block';
	$id('icont1').style.backgroundPosition = '-198px -44px';
//	startMove($id('list_1'), {
//                  height:450,                   
//              });
}
$id('list_1').onmouseout = function(){
	$id('list_1').style.display = 'none';
	$id('icont1').style.backgroundPosition = '-214px -44px';
//	startMove($id('list_1'), {
//                  height:0,                   
//              });
}
$id('list_2').onmouseover = function(){
	$id('list_2').style.display = 'block';
	$id('icont2').style.backgroundPosition = '-198px -44px';
//	startMove($id('list_2'), {
//                  height:450,                   
//              });
}
$id('list_2').onmouseout = function(){
	$id('list_2').style.display = 'none';
	$id('icont2').style.backgroundPosition = '-214px -44px';
//	startMove($id('list_2'), {
//                  height:0,                   
//              });
}

//二级菜单滑过
$(function(){
		function fn(ele1,ele2){
			var $tab = $(ele1);
			var $lis = $(ele2);
			$lis.addClass("hide");
			$lis.eq(0).removeClass().addClass("show");
			$tab.hover(function(){
				var $index = $(this).index();//获取下标
//				$(this).animate({opacity:1},500);
				$lis.eq($index).removeClass().addClass("show").siblings().removeClass().addClass("hide");
				$(this).find('img').attr("src","first_img/img"+($index +1) +"_b.png");
				$(this).find('dd').css("color","#333");
				
			},function(){
//				$(this).animate({opacity:0.5},500);
				var $index = $(this).index();	
				$(this).find('img').attr("src","first_img/img"+($index +1) +"_s.png");
				$(this).find('dd').css("color","#888");
			})
		}
		fn("#list_t dl","#list_b .ul_1");
		fn("#list_t2 dl","#list_b2 .ul_2");			
	})

//轮播图下的滑动
var $ali = $('.boxborder ul li');
$ali.hover(function(){	
	var $index = $(this).index();
	$ali.eq($index).fadeToggle(300);
	$ali.eq($index).css({"background-image":"url(first_img/phone.jpg)",
	"border-color":"#ebebeb"});
	$ali.eq($index).find('img').attr("src","first_img/img2.png");
	$ali.eq($index).fadeToggle(500);
	
},function(){
	var $index = $(this).index();
	$ali.eq($index).css({"background":"white","border-color":"white"});
	$ali.eq($index).find('img').attr("src","first_img/imgs2.png");
})











































