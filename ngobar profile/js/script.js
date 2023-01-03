const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function(){
	console.log(window.scrolly);
	if (window.scrolly > 1) {
		navbar.classList.replace('bg-transparent', 'nav-color');
	}
});