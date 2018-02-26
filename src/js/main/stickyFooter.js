/**
 * Remove any gap below the foote ron short pages
 * @param  {String} selector Selector for the footer
 */
var stickyFooter = function (selector) {

	// Variables
	var footer = document.querySelector(selector);
	if (!footer) return;
	var timeout;

	/**
	 * Get an element's distance from the top of the Document.
	 * @param  {Node} elem The element
	 * @return {Number}    Distance from the top in pixels
	 */
	var getOffsetTop = function (elem) {
		var location = 0;
		if (elem.offsetParent) {
			do {
				location += elem.offsetTop;
				elem = elem.offsetParent;
			} while (elem);
		}
		return location >= 0 ? location : 0;
	};

	/**
	 * Get the distance to push the footer down on the page
	 * @return {Integer} The distance to to push the footer
	 */
	var getPush = function () {
		footer.style.marginTop = '';
		var winHeight = window.innerHeight || document.documentElement.clientHeight;
		var footerHeight = parseInt(window.getComputedStyle(footer).height, 10) - parseInt(window.getComputedStyle(footer).marginTop, 10);
		var footerOffset = getOffsetTop(footer);
		return winHeight - footerOffset - footerHeight;
	};

	/**
	 * Add a top margin to the footer to push it down the page
	 */
	var setPush = function () {
		var push = getPush();
		if (push > 0) {
			footer.style.marginTop = push + 'px';
		} else {
			footer.style.marginTop = '';
		}
	}

	/**
	 * Debounce browser resize events for performance
	 * @param  {[type]} event [description]
	 * @return {[type]}       [description]
	 */
	var resizeDebounce = function (event) {

			// If there's a timer, cancel it
			if (timeout) {
				window.cancelAnimationFrame(timeout);
			}

			// Restick footer
			timeout = window.requestAnimationFrame(function () {
				setPush();
			});

	};

	// Make footer sticky
	setPush();
	window.removeEventListener('resize', resizeDebounce, false);
	window.addEventListener('resize', resizeDebounce, false);

};