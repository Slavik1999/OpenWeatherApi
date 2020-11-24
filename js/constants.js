const key = '58f28aaca421e551be2bdbc434f08651';
const defaultCity = 'Minsk';
const defaultCoord = [ 54.11, 27.41 ];

const days = [ 'Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thur.', 'Fri', 'Sat.' ];

const N = 'N';
const E = 'E';
const S = 'S';
const W = 'W';

const weatherCardBgImgDay = [
	{
		name: 'broken clouds',
		img: 'https://cs11.pikabu.ru/post_img/2018/11/02/7/og_og_1541153448221168344.jpg'
	},
	{
		name: 'overcast clouds',
		img: 'https://cs11.pikabu.ru/post_img/2018/11/02/7/og_og_1541153448221168344.jpg'
	},
	{
		name: 'few clouds',
		img: 'https://www.publicdomainpictures.net/pictures/150000/velka/scattered-clouds-in-a-blue-sky.jpg'
	},
	{
		name: 'scattered clouds',
		img: 'https://www.publicdomainpictures.net/pictures/150000/velka/scattered-clouds-in-a-blue-sky.jpg'
	},
	{
		name: 'clear sky',
		img: 'http://getwallpapers.com/wallpaper/full/f/4/8/833910-simple-desktop-wallpaper-1920x1080-for-hd-1080p.jpg'
	},
	{
		name: 'rain',
		img: 'https://krot.info/uploads/posts/2020-01/1579432681_24-85.jpg'
	},
	{
		name: 'light rain',
		img: 'https://krot.info/uploads/posts/2020-01/1579432681_24-85.jpg'
	},
	{
		name: 'shower rain',
		img: 'https://krot.info/uploads/posts/2020-01/1579432681_24-85.jpg'
	},
	{
		name: 'thunderstorm',
		img: 'http://chapter16.org/wp-content/uploads/2017/12/Colorado-thunderstorm-1.jpg'
	},
	{
		name: 'snow',
		img:
			'https://get.pxhere.com/photo/landscape-tree-nature-branch-snow-cold-winter-white-frost-ice-weather-snowy-lighting-season-snowfall-trees-blizzard-frosty-mood-winter-dream-wintry-winter-magic-winter-forest-freezing-winter-mood-snow-landscape-snowed-in-shadow-play-hispanic-winter-storm-1171454.jpg'
	},
	{
		name: 'mist',
		img: 'https://i.pinimg.com/originals/8c/7b/d0/8c7bd09199630aee214ae5e593976599.jpg'
	}
];

const weatherCardBgImgNight = [
	{
		name: 'broken clouds',
		img: 'https://cs11.pikabu.ru/post_img/2018/11/02/7/og_og_1541153448221168344.jpg'
	},
	{
		name: 'overcast clouds',
		img: 'https://cs11.pikabu.ru/post_img/2018/11/02/7/og_og_1541153448221168344.jpg'
	},
	{
		name: 'few clouds',
		img:
			'http://getwallpapers.com/wallpaper/full/8/9/f/1098174-widescreen-dark-clouds-wallpaper-3000x2000-photo.jpg'
	},
	{
		name: 'scattered clouds',
		img:
			'http://getwallpapers.com/wallpaper/full/8/9/f/1098174-widescreen-dark-clouds-wallpaper-3000x2000-photo.jpg'
	},
	{
		name: 'clear sky',
		img:
			'https://mocah.org/uploads/posts/4559753-nature-landscape-night-stars-long-exposure-clear-sky-tower-trees-milky-way-wheels-silhouette.jpg'
	},
	{
		name: 'rain',
		img:
			'https://st2.depositphotos.com/1008589/9516/i/950/depositphotos_95164214-stock-photo-window-with-drops-of-night.jpg'
	},
	{
		name: 'light rain',
		img:
			'https://st2.depositphotos.com/1008589/9516/i/950/depositphotos_95164214-stock-photo-window-with-drops-of-night.jpg'
	},
	{
		name: 'shower rain',
		img:
			'https://st2.depositphotos.com/1008589/9516/i/950/depositphotos_95164214-stock-photo-window-with-drops-of-night.jpg'
	},
	{
		name: 'thunderstorm',
		img: 'http://chapter16.org/wp-content/uploads/2017/12/Colorado-thunderstorm-1.jpg'
	},
	{
		name: 'snow',
		img: 'https://www.pixel-creation.com/wp-content/uploads/winter-night-wallpapers-wallpaper-cave-3.jpg'
	},
	{
		name: 'mist',
		img: 'https://staticdelivery.nexusmods.com/images/101/1518707-1493462307.jpg'
	}
];
