function getDailyWeatherTemplate(dailyWeatherData) {
	let daily = '';

	dailyWeatherData.map((dailyWeather) => {
		daily += getDailyTemplate(dailyWeather);
	});

	return daily;
}

function getDailyTemplate(daily) {
	const { dt, feels_like, humidity, pressure, temp, weather, wind_deg, wind_speed, sunrise, sunset } = daily;
	const convertPressure = Math.floor(pressure * 0.75);

	return `
	<div class="d-flex flex-wrap p-3 mt-5 justify-content-center" id='dailyWeatherItem'>
		<div class='dailyWeatherData'>
			<div class='dailyWeatherHeader d-flex flex-column mb-3  ml-3'>
				<div>
					<b>
						${formatDate(dt)}
					</b>
				</div>
				<div class='dayTemperatureHeaders d-flex justify-content-between'>
						<span>Day Part</span>
						<span>Temp</span>
						<span>Feels like</span>
				</div>
			</div>
			<div class='dayTemperature d-flex justify-content-between ml-3'>
				<div>
					<div>Morning</div>
					<div>Day</div>
					<div>Evening</div>
					<div>Night</div>
				</div>
				<div class='mr-4 d-flex flex-column align-items-end'>
					${getDayPartTempTemplate(temp.morn)}
					${getDayPartTempTemplate(temp.day)}
					${getDayPartTempTemplate(temp.eve)}
					${getDayPartTempTemplate(temp.night)}
				</div>
				<div class='mr-3 d-flex flex-column align-items-end'>
					${getDayPartTempTemplate(feels_like.morn)}
					${getDayPartTempTemplate(feels_like.day)}
					${getDayPartTempTemplate(feels_like.eve)}
					${getDayPartTempTemplate(feels_like.night)}
				</div>
			</div>
		</div>
		<div class='dailyWeatherIconsContainer d-flex justify-content-center align-items-center mt-5'>
			<div class='dailyWeatherIcons'>
				${getWeatherIcons(weather)}
			</div>
		</div>
		<div class='dailyWeatherDiscription mt-5 d-flex flex-column align-items-start justify-content-around'>
			<div>
				<span><b>Pressure, mmHg: </b></span>
				<span>${convertPressure}</span>
			</div>
			<div>
				<span><b>Humidity, %: </b></span>
				<span>${humidity}</span>
			</div>
			<div>
				<span><b>Wind: </b></span>
				<span>${wind_speed} m/s </span>
				<span>${getWindDirection(wind_deg)}</span>
			</div>
		</div>
		<div class='dailyDayTime mt-5 d-flex flex-column align-items-center justify-content-around'>
			<div>
				<img src='./img/day-and-night.png'/>
			</div>
			<div class='d-flex'>
				<div class='mr-2 d-flex flex-column align-items-center'>
					<img src='./img/sunrise.png'/>
					<div>${formatDailyDayStart(sunrise)}</div>
				</div>
				<div class='mr-2 text-center'>
					<div><b>Daylight hours</b></div>
					<div>${formatDailyDayLong(sunset - sunrise)}</div>
				</div>
				<div class='d-flex flex-column align-items-center'>
					<img src='./img/sunset.png'/>
					<div>${formatDailyDayStart(sunset)}</div>
				</div>
			</div>
		</div>
	</div>
	`;
}

function getDayPartTempTemplate(temp) {
	return `
		<div>
			${convertTemp(temp)}
			<small><i class="fa fa-circle-o" aria-hidden="true">
			</i></small>
		</div>
	`;
}

function getWeekWeatherTemplate(hourlyWeatherData) {
	let daily = '';

	hourlyWeatherData.map((dailyWeather) => {
		daily += getWeekTemplate(dailyWeather);
	});

	weekWeather.style.background = 'white';

	return daily;
}

function getWeekTemplate(daily) {
	return `	
	<div class=" d-flex flex-column align-items-center justify-content-around mt-4 mb-4">
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
			<div class='text-center'>
				<span>${getWeatherDiscription(daily.weather)}</span>
			</div>
	</div>
	`;
}

function getHourlyWeatherTemplate(hourlyWeatherData) {
	let hourly = '';
	let hourlyDay = '23:00';

	hourlyWeatherData.map((hourlyWeather) => {
		let border = formatHourlyDateForBorder(hourlyWeather.dt) === hourlyDay ? true : false;

		hourly += getHourlyTemplate(hourlyWeather, border);
	});

	return `
			<div class="container">
				<div class="row flex-row flex-nowrap overflow-auto hourlyContainer">
					${hourly}
				</div>
			</div>
		</div>
	</div>
	`;
}

function getHourlyTemplate(hourly, border) {
	return `
	<div class="
	${border ? 'hourlyCardItemBorder' : ''} 
	d-flex flex-column align-items-center justify-content-around pr-2 pl-4 mb-2 text-center">
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

function getCardTemplate(weatherData) {
	const { name, main, weather, wind, dt, sys } = weatherData;

	const pressure = Math.floor(main.pressure * 0.75);

	return `
	<div class="card bg-dark text-white">
		<img src=${getCardImage(weather, dt, sys)} class="card-img" alt="...">
		<div class="card-img-overlay d-flex flex-column justify-content-around" id='weatherCard'>
			<div>
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
