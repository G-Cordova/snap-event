
// event = new Event('build');

// elem.addEventListener('build'), function (echo "ayye");

// elem.dispatchEvent(event);

let makeblue = function(elem, callback) {
	elem.classList.add('blue');
	if (callback and typeof callback === 'function') {
		callback (elem);
	}
};

let elem = document.querySelector('.not-blue');
makeblue(elem, function(elem) {
	elem.classList.add('color-changed');
});

