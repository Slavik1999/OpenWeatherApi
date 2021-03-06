document.addEventListener('DOMContentLoaded', () => {
	const successCallback = async (position) => {
		const { latitude, longitude } = position.coords;
		const city = await ymaps.geolocation
			.get({
				provider: 'yandex',
				autoReverseGeocode: true
			})
			.then((result) => {
				return result.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.AddressDetails
					.Country.AdministrativeArea.AdministrativeAreaName;
			});

		showLoader();

		const weatherData = await getWeatherData(city);
		const hourlyWeatherData = await getHourlyWeatherData(latitude, longitude);
		const weekWeatherData = await getWeekWeatherData(latitude, longitude);

		hideLoader();

		printTempaltes(weatherData, hourlyWeatherData, weekWeatherData);

		initMap(city);
	};

	const errorCallback = async (error) => {
		const [ lat, lon ] = defaultCoord;

		showLoader();

		const weatherData = await getWeatherData(defaultCity);
		const hourlyWeatherData = await getHourlyWeatherData(lat, lon);
		const weekWeatherData = await getWeekWeatherData(lat, lon);

		hideLoader();

		printTempaltes(weatherData, hourlyWeatherData, weekWeatherData);

		initMap(defaultCity);
	};

	navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
});
