form.addEventListener('submit', async (e) => {
	e.preventDefault();

	showLoader();

	const weatherData = await getWeatherData(city.value);

	if (weatherData.cod === '404') {
		errorCity.innerHTML = `<b>${weatherData.message.toUpperCase()}</b>`;
		map.innerHTML = `<b>${weatherData.message.toUpperCase()}</b>`;

		hideLoader();
		clearError();
	} else {
		const { lon, lat } = weatherData.coord;
		const hourlyWeatherData = await getHourlyWeatherData(lat, lon);
		const weekWeatherData = await getWeekWeatherData(lat, lon);

		hideLoader();

		printTempaltes(weatherData, hourlyWeatherData, weekWeatherData);

		initMap(city.value);
	}
});

function clearError() {
	setTimeout(() => {
		errorCity.innerHTML = '';
	}, 4000);
}
