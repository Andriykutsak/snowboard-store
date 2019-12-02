(function () {
	const slide=document.querySelectorAll('.slider-item');
	const next=document.querySelector('#next');
	const prew=document.querySelector("#prew");
	const w=document.querySelector('.carousel-window');
	let counter=1;
//next image heandler
next.addEventListener('click',function(){
	if (counter>=slide.length-1) {
		return;
	}
w.style.transition="0.5s ease";
counter++;
w.style.transform="translateX("+(-slide[0].clientWidth*counter)+"px)";
check(counter)
})

prew.addEventListener('click',function(){
	if (counter<=0) {
		return;
	}
w.style.transition="0.5s ease";
counter--
w.style.transform="translateX("+(-slide[0].clientWidth*counter)+"px)";
check(counter)
})
w.addEventListener('transitionend',function(){
	if (slide[counter].id==slide.length-1) {
		w.style.transition="none";
		counter=slide.length-2;
		w.style.transform="translateX("+(-slide[0].clientWidth*counter)+"px)";
	}
		if (slide[counter]==0) {
		w.style.transition="none";
		counter=slide.length-counter;
		w.style.transform="translateX("+(-slide[0].clientWidth*counter)+"px)";
	}
})
 function check(counter) {
 	var a=2;
 	a++;
 	
 	slide[a].className="active"
 	 }



	})();