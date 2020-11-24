function getWindDirection(deg) {
	switch (deg) {
		case 0:
			return N;
		case 90:
			return E;
		case 180:
			return S;
		case 270:
			return W;
		case 360:
			return N;
		default:
			return getOtherDirection(deg);
	}
}

function getOtherDirection(deg) {
	if (deg > 0 && deg < 90) {
		return N + E;
	}
	if (deg > 90 && deg < 180) {
		return S + E;
	}
	if (deg > 180 && deg < 270) {
		return S + W;
	}
	if (deg > 270 && deg < 360) {
		return N + W;
	}
}

function getCardImage(weather, dateNow, dayDates) {
	let imgSrc = '';

	getWeatherCardBgArr(dateNow, dayDates).forEach((weatherCard) => {
		weather.forEach((weatherCur) => {
			weatherCard.name === weatherCur.description ? (imgSrc = weatherCard.img) : '';
		});
	});

	return imgSrc;
}

function getWeatherCardBgArr(dateNow, dayDates) {
	if (dateNow < dayDates.sunrise) {
		return (weatherBgArr = weatherCardBgImgNight);
	} else if (dateNow > dayDates.sunrise && dateNow < dayDates.sunset) {
		return (weatherBgArr = weatherCardBgImgDay);
	} else if (dateNow > dayDates.sunset) {
		return (weatherBgArr = weatherCardBgImgNight);
	}
}

function getWeatherDiscription(weather) {
	let weatherDisc = '';

	weather.forEach((weather) => {
		weatherDisc += `${weather.description}`;
	});

	return weatherDisc;
}

function getWeatherIcons(weatherArr) {
	let icons = '';
	let iconWidth = 100 - weatherArr.length * 25;

	weatherArr.forEach((weather) => {
		icons += `<img class="w-${iconWidth}" src="https://openweathermap.org/img/wn/${weather.icon}@2x.png"/>`;
	});

	return icons;
}

function convertTemp(temp) {
	return Math.floor(temp - 272.15);
}
