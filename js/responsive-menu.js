const btn=document.querySelector('#responsive-btn');
const menu=document.querySelector('.mwrap');
const links=document.querySelectorAll('.mwrap li');

btn.addEventListener('click',function(){
	console.log(menu)
	menu.classList.toggle('mwrap-active');
	links.forEach(function(link,index){
	link.style.animation='navLinkFade 0.5s ease forwards'+index/7+2+'s;';
	console.log(index/2)
})
})

