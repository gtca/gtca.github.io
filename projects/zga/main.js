window.onload = function() {
	var lastScrollTop = 0;
	const html = document.getElementsByTagName("html")[0];
	html.style.scrolling = false;
	const footer = document.getElementsByTagName("footer")[0];
	const fheight = footer.scrollHeight || 250;
	const pill = document.getElementById("nav_pill");
	var scrollY;
	function scrollingBehaviour() {
		scrollY = html.scrollTop;
		if (html.style.scrolling === false) {
			html.style.scrolling = true;
			// Fade out the navigation pill
			// upon scrolling the page towards the footer
			if (scrollY - lastScrollTop >= 1) {
				pill.style.opacity = 0;
				html.scrollTo({top: fheight, behavior: 'smooth'});
				Array.from(footer.children[0].children).map(function(e) {e.style.pointerEvents = "auto"});
			} else if (scrollY - lastScrollTop <= -1) {
				pill.style.opacity = .5;
				html.scrollTo({top: 0, behavior: 'smooth'});
				Array.from(footer.children[0].children).map(function(e) {e.style.pointerEvents = "none"});
			}
			lastScrollTop = scrollY;
		} else if (scrollY === 0 || scrollY === fheight) {
			html.style.scrolling = false;
			lastScrollTop = html.scrollTop;
		}
	}

	document.addEventListener("scroll", function(event) {
		scrollingBehaviour();
	});

	pill.addEventListener("click", function(event) {
		html.scrollTo({top: fheight, behavior: 'smooth'});
	});
}