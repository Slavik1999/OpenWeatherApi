const formatDate = (dateSec) => {
	const date = new Date(dateSec * 1000);

	let day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
	let month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;

	return `${days[date.getDay()]}<br>  ${day}.${month}`;
};

const formatHourlyDate = (dateSec) => {
	const date = new Date(dateSec * 1000);

	let hours = date.getHours();
	let minutes = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`;

	return `${days[date.getDay()]}<br>${hours}:${minutes}`;
};

const formatDailyDayStart = (dateSec) => {
	const date = new Date(dateSec * 1000);

	let hours = date.getHours();
	let minutes = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`;

	return `${hours}:${minutes}`;
};

const formatDailyDayLong = (dateSec) => {
	const date = new Date(dateSec * 1000);

	let hours = date.getHours() - 3;
	let minutes = date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`;

	return `${hours} h ${minutes} min`;
};
