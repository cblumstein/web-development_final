var navBar = document.getElementById("nav");
var article = document.getElementById("projects")

var toggleBtns = Array.from(document.getElementsByClassName("nav-toggle"));

toggleBtns.forEach(function(btn) {
	btn.addEventListener("click", function(e) {
		e.preventDefault();
		navBar.classList.toggle("active");
		article.classList.toggle("active");
	});
});