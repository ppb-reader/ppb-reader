$(function(){
	var list =document.getElementsByClassName("zl-navList");
	var box=document.getElementsByClassName("zl-Box");
	for(var i=0;i<list.length;i++){
		list[i].name=i;
		list[i].onclick=function(){
			for(var j=0;j<box.length;j++){
				box[j].className="zl-Box";
				list[j].className="zl-navList";
			}
			box[this.name].className="zl-Box zl-boxActive";
			list[this.name].className="zl-navList zl-active";
		}
	}
})

	

	

	

