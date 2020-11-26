const getWeatherData = async (city) => {
	let weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
	let weatherData = await weatherRes.json();

	return weatherData;
};

const getHourlyWeatherData = async (latitude, longitude) => {
	let hourlyWeatherRes = await fetch(
		`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={hourly}&appid=${key}`
	);
	let hourlyWeatherData = await hourlyWeatherRes.json();

	return hourlyWeatherData.hourly;
};

const getWeekWeatherData = async (latitude, longitude) => {
	let hourlyWeatherRes = await fetch(
		`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={daily}&appid=${key}`
	);
	let hourlyWeatherData = await hourlyWeatherRes.json();
	return hourlyWeatherData.daily;
};
