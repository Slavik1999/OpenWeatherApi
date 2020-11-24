function initMap(city) {
	ymaps.ready(init);

	function init() {
		var myGeocoder = ymaps.geocode(city);
		myGeocoder.then(
			function(res) {
				const coords = res.geoObjects.get(0).geometry.getCoordinates();

				map.innerHTML = '';

				var myMap = new ymaps.Map('map', {
					center: [ coords[0], coords[1] ],
					zoom: 10
				});
				myPlacemarkWithContent = new ymaps.Placemark([ coords[0], coords[1] ]);
				myMap.geoObjects.add(myPlacemarkWithContent);
			},
			function(err) {
				console.log('Error');
			}
		);
	}
}
