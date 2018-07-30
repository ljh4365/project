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
