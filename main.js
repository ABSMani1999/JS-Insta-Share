var share = document.querySelector(".share");


		share.addEventListener("click",shareBtn);
		
		
	function shareBtn(e){
		show = e.target.parentNode.parentNode.querySelector(".sub");
			// console.log(show);
		
		if(show.classList.contains("sub")){
			show.style.top="10%";
			// console.log(show);
			show.style.transition="all 0.5s";
		}
	}
	
	
var btn = document.querySelector(".btns");

		btn.addEventListener("click",closeDiv);
		
	function closeDiv(e){
		clse = e.target.parentNode.parentNode;
		//console.log(clse);
		
		if(clse.classList.contains("sub")){
			clse.style.top="100%";
			 //console.log(clse);
			 show.style.transition="all 0.5s";
		}
		
	}