document.addEventListener('DOMContentLoaded', function() {

	document.getElementById('random-mushrooms').setAttribute('hidden', true);

	window.onload = randomHero;

	var randomImages = new Array(
		'js/images/computer.jpg',
		'js/images/computer2.jpg',
		'js/images/computer3.jpg',
		'js/images/computer4.jpg',
    'js/images/computer5.jpg',
    'js/images/computer6.jpg',
    'js/images/computer7.jpg',
    'js/images/computer8.jpg',
    'js/images/computer9.jpg',
    'js/images/computer10.jpg',
    'js/images/computer11.jpg',
    'js/images/computer12.jpg',
    'js/images/computer13.jpg',
    'js/images/computer14.jpg',
    'js/images/computer15.jpg',
    'js/images/computer16.jpg',
    'js/images/computer17.jpg',
    'js/images/computer18.jpg',
    'js/images/computer19.jpg',
    'js/images/computer20.jpg',
    'js/images/computer21.jpg',
    'js/images/computer22.jpg',
    'js/images/computer23.jpg',
    'js/images/computer23.jpg',
    'js/images/computer24.jpg',
    'js/images/computer25.jpg',
    'js/images/computer26.jpg',
    'js/images/computer27.jpg',
    'js/images/computer28.jpg',
    'js/images/computer29.jpg',
    'js/images/computer30.jpg',
    'js/images/computer31.jpg',
    'js/images/computer32.jpg',
    'js/images/computer33.jpg',
    'js/images/computer34.jpg',
    'js/images/computer35.jpg',
    'js/images/computer36.jpg',
    'js/images/computer37.jpg',
    'js/images/computer38.jpg',
    'js/images/computer39.jpg',
    'js/images/computer40.jpg',
    'js/images/computer41.jpg',
    'js/images/computer42.jpg',
    'js/images/computer43.jpg',
    'js/images/computer44.jpg',
    'js/images/computer45.jpg',
    'js/images/computer46.jpg',
    'js/images/computer47.jpg',
    'js/images/computer48.jpg',
    'js/images/computer49.jpg',
    'js/images/computer50.jpg',
    'js/images/computer51.jpg',
    'js/images/computer52.jpg',
    'js/images/computer53.jpg',
    'js/images/computer54.jpg',
    'js/images/computer55.jpg',
    'js/images/computer56.jpg',
    'js/images/computer57.jpg',
    'js/images/computer58.jpg'
	);

	function randomHero() {
		var randomNum = Math.floor(Math.random() * randomImages.length);
		document.getElementById('random-mushrooms').src = randomImages[randomNum];
		document.getElementById('random-mushrooms').removeAttribute('hidden');
	}

}, false);
