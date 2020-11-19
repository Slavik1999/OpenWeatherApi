const form = document.querySelector('#form');
const city = document.querySelector('#city');
const weather = document.querySelector('#weather');
const weatherCard = document.querySelector('#weatherCard');
const geoWeatherCard = document.querySelector('#geoWeatherCard');
const dailyWeather = document.querySelector('#dailyWeather');

const key = '58f28aaca421e551be2bdbc434f08651';

const formatDate = (dateSec) => {
	const date = new Date(dateSec * 1000);

	let days = [ 'Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thurs.', 'Fri', 'Sat.' ];

	let hours = date.getHours();
	let minutes = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`;
	let day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
	let month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;

	return `${days[date.getDay()]}<br>  ${day}.${month}`;
};

const formatHourlyDate = (dateSec) => {
	const date = new Date(dateSec * 1000);

	let days = [ 'Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thurs.', 'Fri', 'Sat.' ];

	let hours = date.getHours();
	let minutes = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`;

	return `${days[date.getDay()]}<br>${hours}:${minutes}`;
};

const getWeatherData = async (city) => {
	let weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
	let weatherData = await weatherRes.json();
	console.log(weatherData);

	return weatherData;
};

const getHourlyWeatherData = async (latitude, longitude) => {
	let hourlyWeatherRes = await fetch(
		`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={hourly}&appid=${key}`
	);
	let hourlyWeatherData = await hourlyWeatherRes.json();
	console.log(hourlyWeatherData);

	return hourlyWeatherData.hourly;
};

const getDailyWeatherData = async (latitude, longitude) => {
	let hourlyWeatherRes = await fetch(
		`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={hourly}&appid=${key}`
	);
	let hourlyWeatherData = await hourlyWeatherRes.json();
	console.log(hourlyWeatherData.daily);

	return hourlyWeatherData.daily;
};

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

		const weatherData = await getWeatherData(city);
		const hourlyWeatherData = await getHourlyWeatherData(latitude, longitude);
		const dailyWeatherData = await getDailyWeatherData(latitude, longitude);

		weatherCard.innerHTML = getCardTemplate(weatherData) + getHourlyWeatherTemplate(hourlyWeatherData);
		dailyWeather.innerHTML = getDailyWeatherTemplate(dailyWeatherData);

		initMap(city);
	};

	const errorCallback = (error) => {
		console.error(error);
	};

	navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
});

function getDailyWeatherTemplate(hourlyWeatherData) {
	let daily = '';

	hourlyWeatherData.map((dailyWeather) => {
		daily += getDailyTemplate(dailyWeather);
	});

	return daily;
}

function getDailyTemplate(daily) {
	const pressure = Math.floor(daily.pressure * 0.75);

	return `	
	<div class=" d-flex flex-column align-items-center justify-content-around pr-2 pl-4">
		<div>${formatDate(daily.dt)}</div>
			<div class='d-flex'>
				<div class='d-flex justify-content-center'>${getWeatherIcons(daily.weather)}</div>
			</div>
			<div class="d-flex">
				<h6 class='mr-1'>d. ${convertTemp(daily.temp.day)}</h6>
				<h6><i class="fa fa-circle-o" aria-hidden="true">
				</i></h6>
			</div>
			<div class="d-flex">
				<span class='mr-1'>n. ${convertTemp(daily.temp.night)}</span>
				<small><i class="fa fa-circle-o" aria-hidden="true">
				</i></small>
			</div>
			<div>
				<span>${getWeatherDiscription(daily.weather)}</span>
			</div>
	</div>
	`;
}

function getHourlyWeatherTemplate(hourlyWeatherData) {
	let hourly = '';

	hourlyWeatherData.map((hourlyWeather) => {
		hourly += getHourlyTemplate(hourlyWeather);
	});

	return `
				<div class="container-fluid ">
					<div class="row flex-row flex-nowrap overflow-auto hourlyContainer">
						${hourly}
					</div>
				</div>
			</div>
		</div>
`;
}

function getHourlyTemplate(hourly) {
	return `
	<div class=" d-flex flex-column align-items-center justify-content-around pr-2 pl-4">
		<div>${formatHourlyDate(hourly.dt)}</div>
		<div class='d-flex'>
			<div class='smallWeatherIcon d-flex justify-content-center'>${getWeatherIcons(hourly.weather)}</div>
		</div>
		<div class="d-flex">
			<span class='mr-1'>${convertTemp(hourly.dew_point)}</span>
			<small><i class="fa fa-circle-o" aria-hidden="true">
			</i></small>
		</div>
	</div>
	`;
}

function initMap(city) {
	ymaps.ready(init);

	function init() {
		var myGeocoder = ymaps.geocode(city);
		myGeocoder.then(
			function(res) {
				const coords = res.geoObjects.get(0).geometry.getCoordinates();
				var myMap = new ymaps.Map('map', {
					center: [ coords[0], coords[1] ],
					zoom: 10
				});
				myPlacemarkWithContent = new ymaps.Placemark([ coords[0], coords[1] ]);
				myMap.geoObjects.add(myPlacemarkWithContent);
			},
			function(err) {
				console.log('Ошибка');
			}
		);
	}
}

form.addEventListener('submit', async (e) => {
	e.preventDefault();
	const weatherData = await getWeatherData(city.value);
	document.querySelector('#map').innerHTML = '';
	const { lon, lat } = weatherData.coord;
	const hourlyWeatherData = await getHourlyWeatherData(lat, lon);
	const dailyWeatherData = await getDailyWeatherData(lat, lon);

	weatherCard.innerHTML = getCardTemplate(weatherData) + getHourlyWeatherTemplate(hourlyWeatherData);
	dailyWeather.innerHTML = getDailyWeatherTemplate(dailyWeatherData);

	initMap(city.value);
});

function getWindDirection(deg) {
	switch (deg) {
		case 0:
			return 'N';
		case 90:
			return 'E';
		case 180:
			return 'S';
		case 270:
			return 'W';
		case 360:
			return 'N';
		default:
			return getOtherDirection(deg);
	}
}

function getOtherDirection(deg) {
	if (deg > 0 && deg < 90) {
		return 'NE';
	}
	if (deg > 90 && deg < 180) {
		return 'SE';
	}
	if (deg > 180 && deg < 270) {
		return 'SW';
	}
	if (deg > 270 && deg < 360) {
		return 'NW';
	}
}

function getCardTemplate(weatherData) {
	const { name, main, weather, wind } = weatherData;

	const pressure = Math.floor(main.pressure * 0.75);
	return `
	<div class="card bg-dark text-white">
		<img src="https://cs11.pikabu.ru/post_img/2018/11/02/7/og_og_1541153448221168344.jpg" class="card-img" alt="...">
		<div class="card-img-overlay d-flex flex-column justify-content-around" id='weatherCard'>
			<div class=''>
				<h2>${name}</h2>
			</div>
			<div class="d-flex align-items-center justify-content-around pr-2 pl-4" id="tempRow">
				<div class="d-flex">
					<h3 class='mr-1'>${convertTemp(main.temp)}</h3>
					<i class="fa fa-circle-o" aria-hidden="true">
					</i>
				</div>
				<div class='d-flex'>
					<div class='weatherIcon d-flex justify-content-center'>${getWeatherIcons(weather)}</div>
					<div class='d-flex flex-column justify-content-center'>
						<span>${getWeatherDiscription(weather)}</span>
						<div class='d-flex'>
							<div class='mr-1'>Feels like ${convertTemp(main.feels_like)}</div>
							<div class='degree mb-2'>
								<i class="fa fa-circle-o" aria-hidden="true">
								</i>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row d-flex justify-content-around">
				<div>
					<img src='./img/wind.png' alt=''/>
					<span>${wind.speed}m/s, ${getWindDirection(wind.deg)}</span>
				</div>
				<div>
					<img src='./img/drop.png' alt=''/>
					<span>${main.humidity}%</span>
				</div>
				<div>
					<img src='./img/gauge.png' alt=''/>
					<span>${pressure} mmHg</span>
				</div>
			</div>
	`;
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
