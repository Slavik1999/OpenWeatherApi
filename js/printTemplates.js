function printTempaltes(weatherData, hourlyWeatherData, weekWeatherData) {
	weatherCard.innerHTML = getCardTemplate(weatherData) + getHourlyWeatherTemplate(hourlyWeatherData);
	weekWeather.innerHTML = getWeekWeatherTemplate(weekWeatherData);
	dailyWeather.innerHTML = getDailyWeatherTemplate(weekWeatherData);
}
