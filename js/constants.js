const key = '58f28aaca421e551be2bdbc434f08651';
const defaultCity = 'Minsk';
const defaultCoord = [ 54.11, 27.41 ];

const days = [ 'Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thur.', 'Fri', 'Sat.' ];

const N = 'N';
const E = 'E';
const S = 'S';
const W = 'W';

const weatherCardBgImgDay = [
	//Clouds
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
	// Rain
	{
		name: 'moderate rain',
		img: 'https://krot.info/uploads/posts/2020-01/1579432681_24-85.jpg'
	},
	{
		name: 'light rain',
		img: 'https://krot.info/uploads/posts/2020-01/1579432681_24-85.jpg'
	},
	{
		name: 'heavy intensity rain',
		img: 'https://krot.info/uploads/posts/2020-01/1579432681_24-85.jpg'
	},
	{
		name: 'very heavy rain',
		img: 'https://krot.info/uploads/posts/2020-01/1579432681_24-85.jpg'
	},
	{
		name: 'extreme rain',
		img: 'https://krot.info/uploads/posts/2020-01/1579432681_24-85.jpg'
	},
	{
		name: 'freezing rain',
		img: 'https://krot.info/uploads/posts/2020-01/1579432681_24-85.jpg'
	},
	{
		name: 'light intensity shower rain',
		img: 'https://krot.info/uploads/posts/2020-01/1579432681_24-85.jpg'
	},
	{
		name: 'shower rain',
		img: 'https://krot.info/uploads/posts/2020-01/1579432681_24-85.jpg'
	},
	{
		name: 'heavy intensity shower rain',
		img: 'https://krot.info/uploads/posts/2020-01/1579432681_24-85.jpg'
	},
	{
		name: 'ragged shower rain',
		img: 'https://krot.info/uploads/posts/2020-01/1579432681_24-85.jpg'
	},
	//Drizzle
	{
		name: 'light intensity drizzle',
		img: 'https://krot.info/uploads/posts/2020-01/1579432681_24-85.jpg'
	},
	{
		name: 'drizzle',
		img: 'https://krot.info/uploads/posts/2020-01/1579432681_24-85.jpg'
	},
	{
		name: 'heavy intensity drizzle',
		img: 'https://krot.info/uploads/posts/2020-01/1579432681_24-85.jpg'
	},
	{
		name: 'light intensity drizzle rain',
		img: 'https://krot.info/uploads/posts/2020-01/1579432681_24-85.jpg'
	},
	{
		name: 'drizzle rain',
		img: 'https://krot.info/uploads/posts/2020-01/1579432681_24-85.jpg'
	},
	{
		name: 'heavy intensity drizzle rain',
		img: 'https://krot.info/uploads/posts/2020-01/1579432681_24-85.jpg'
	},
	{
		name: 'shower rain and drizzle',
		img: 'https://krot.info/uploads/posts/2020-01/1579432681_24-85.jpg'
	},
	{
		name: 'sheavy shower rain and drizzle',
		img: 'https://krot.info/uploads/posts/2020-01/1579432681_24-85.jpg'
	},
	{
		name: 'shower drizzle',
		img: 'https://krot.info/uploads/posts/2020-01/1579432681_24-85.jpg'
	},
	//Thunderstorm
	{
		name: 'thunderstorm with light rain',
		img: 'http://chapter16.org/wp-content/uploads/2017/12/Colorado-thunderstorm-1.jpg'
	},
	{
		name: 'thunderstorm with rain',
		img: 'http://chapter16.org/wp-content/uploads/2017/12/Colorado-thunderstorm-1.jpg'
	},
	{
		name: 'thunderstorm with heavy rain',
		img: 'http://chapter16.org/wp-content/uploads/2017/12/Colorado-thunderstorm-1.jpg'
	},
	{
		name: 'light thunderstorm',
		img: 'http://chapter16.org/wp-content/uploads/2017/12/Colorado-thunderstorm-1.jpg'
	},
	{
		name: 'thunderstorm',
		img: 'http://chapter16.org/wp-content/uploads/2017/12/Colorado-thunderstorm-1.jpg'
	},
	{
		name: 'heavy thunderstorm',
		img: 'http://chapter16.org/wp-content/uploads/2017/12/Colorado-thunderstorm-1.jpg'
	},
	{
		name: 'ragged thunderstorm',
		img: 'http://chapter16.org/wp-content/uploads/2017/12/Colorado-thunderstorm-1.jpg'
	},
	{
		name: 'thunderstorm with light drizzle',
		img: 'http://chapter16.org/wp-content/uploads/2017/12/Colorado-thunderstorm-1.jpg'
	},
	{
		name: 'thunderstorm with drizzle',
		img: 'http://chapter16.org/wp-content/uploads/2017/12/Colorado-thunderstorm-1.jpg'
	},
	{
		name: 'thunderstorm with heavy drizzle',
		img: 'http://chapter16.org/wp-content/uploads/2017/12/Colorado-thunderstorm-1.jpg'
	},
	//Snow
	{
		name: 'light snow',
		img:
			'https://get.pxhere.com/photo/landscape-tree-nature-branch-snow-cold-winter-white-frost-ice-weather-snowy-lighting-season-snowfall-trees-blizzard-frosty-mood-winter-dream-wintry-winter-magic-winter-forest-freezing-winter-mood-snow-landscape-snowed-in-shadow-play-hispanic-winter-storm-1171454.jpg'
	},
	{
		name: 'snow',
		img:
			'https://get.pxhere.com/photo/landscape-tree-nature-branch-snow-cold-winter-white-frost-ice-weather-snowy-lighting-season-snowfall-trees-blizzard-frosty-mood-winter-dream-wintry-winter-magic-winter-forest-freezing-winter-mood-snow-landscape-snowed-in-shadow-play-hispanic-winter-storm-1171454.jpg'
	},
	{
		name: 'heavy snow',
		img:
			'https://get.pxhere.com/photo/landscape-tree-nature-branch-snow-cold-winter-white-frost-ice-weather-snowy-lighting-season-snowfall-trees-blizzard-frosty-mood-winter-dream-wintry-winter-magic-winter-forest-freezing-winter-mood-snow-landscape-snowed-in-shadow-play-hispanic-winter-storm-1171454.jpg'
	},
	{
		name: 'sleet',
		img:
			'https://get.pxhere.com/photo/landscape-tree-nature-branch-snow-cold-winter-white-frost-ice-weather-snowy-lighting-season-snowfall-trees-blizzard-frosty-mood-winter-dream-wintry-winter-magic-winter-forest-freezing-winter-mood-snow-landscape-snowed-in-shadow-play-hispanic-winter-storm-1171454.jpg'
	},
	{
		name: 'light shower sleet',
		img:
			'https://get.pxhere.com/photo/landscape-tree-nature-branch-snow-cold-winter-white-frost-ice-weather-snowy-lighting-season-snowfall-trees-blizzard-frosty-mood-winter-dream-wintry-winter-magic-winter-forest-freezing-winter-mood-snow-landscape-snowed-in-shadow-play-hispanic-winter-storm-1171454.jpg'
	},
	{
		name: 'shower sleet',
		img:
			'https://get.pxhere.com/photo/landscape-tree-nature-branch-snow-cold-winter-white-frost-ice-weather-snowy-lighting-season-snowfall-trees-blizzard-frosty-mood-winter-dream-wintry-winter-magic-winter-forest-freezing-winter-mood-snow-landscape-snowed-in-shadow-play-hispanic-winter-storm-1171454.jpg'
	},
	{
		name: 'light rain and snow',
		img:
			'https://get.pxhere.com/photo/landscape-tree-nature-branch-snow-cold-winter-white-frost-ice-weather-snowy-lighting-season-snowfall-trees-blizzard-frosty-mood-winter-dream-wintry-winter-magic-winter-forest-freezing-winter-mood-snow-landscape-snowed-in-shadow-play-hispanic-winter-storm-1171454.jpg'
	},
	{
		name: 'rain and snow',
		img:
			'https://get.pxhere.com/photo/landscape-tree-nature-branch-snow-cold-winter-white-frost-ice-weather-snowy-lighting-season-snowfall-trees-blizzard-frosty-mood-winter-dream-wintry-winter-magic-winter-forest-freezing-winter-mood-snow-landscape-snowed-in-shadow-play-hispanic-winter-storm-1171454.jpg'
	},
	{
		name: 'light shower snow',
		img:
			'https://get.pxhere.com/photo/landscape-tree-nature-branch-snow-cold-winter-white-frost-ice-weather-snowy-lighting-season-snowfall-trees-blizzard-frosty-mood-winter-dream-wintry-winter-magic-winter-forest-freezing-winter-mood-snow-landscape-snowed-in-shadow-play-hispanic-winter-storm-1171454.jpg'
	},
	{
		name: 'shower snow',
		img:
			'https://get.pxhere.com/photo/landscape-tree-nature-branch-snow-cold-winter-white-frost-ice-weather-snowy-lighting-season-snowfall-trees-blizzard-frosty-mood-winter-dream-wintry-winter-magic-winter-forest-freezing-winter-mood-snow-landscape-snowed-in-shadow-play-hispanic-winter-storm-1171454.jpg'
	},
	{
		name: 'heavy shower snow',
		img:
			'https://get.pxhere.com/photo/landscape-tree-nature-branch-snow-cold-winter-white-frost-ice-weather-snowy-lighting-season-snowfall-trees-blizzard-frosty-mood-winter-dream-wintry-winter-magic-winter-forest-freezing-winter-mood-snow-landscape-snowed-in-shadow-play-hispanic-winter-storm-1171454.jpg'
	},
	//Atmosphere
	{
		name: 'mist',
		img: 'https://i.pinimg.com/originals/8c/7b/d0/8c7bd09199630aee214ae5e593976599.jpg'
	},
	{
		name: 'smoke',
		img: 'https://i.pinimg.com/originals/8c/7b/d0/8c7bd09199630aee214ae5e593976599.jpg'
	},
	{
		name: 'haze',
		img: 'https://i.pinimg.com/originals/8c/7b/d0/8c7bd09199630aee214ae5e593976599.jpg'
	},
	{
		name: 'sand/dust whirls',
		img: 'https://www.aaa.org/eyepiece/wp-content/uploads/2018/04/Chirag-White-sands-sandstorm.jpgg'
	},
	{
		name: 'fog',
		img: 'https://i.pinimg.com/originals/8c/7b/d0/8c7bd09199630aee214ae5e593976599.jpg'
	},
	{
		name: 'sand',
		img: 'https://www.aaa.org/eyepiece/wp-content/uploads/2018/04/Chirag-White-sands-sandstorm.jpg'
	},
	{
		name: 'dust',
		img: 'https://www.aaa.org/eyepiece/wp-content/uploads/2018/04/Chirag-White-sands-sandstorm.jpg'
	},
	{
		name: 'volcanic ash',
		img: 'https://bigpicture.ru/wp-content/uploads/2011/12/s_v02_0RTXX706.jpg'
	},
	{
		name: 'squalls',
		img: 'https://images.wisegeek.com/squall-line.jpg'
	},
	{
		name: 'tornado',
		img: 'https://mtdata.ru/u26/photo08DE/20671459593-0/original.jpg'
	}
];

const weatherCardBgImgNight = [
	//Clouds
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
	//Rain
	{
		name: 'moderate rain',
		img:
			'https://st2.depositphotos.com/1008589/9516/i/950/depositphotos_95164214-stock-photo-window-with-drops-of-night.jpg'
	},
	{
		name: 'light rain',
		img:
			'https://st2.depositphotos.com/1008589/9516/i/950/depositphotos_95164214-stock-photo-window-with-drops-of-night.jpg'
	},
	{
		name: 'heavy intensity rain',
		img:
			'https://st2.depositphotos.com/1008589/9516/i/950/depositphotos_95164214-stock-photo-window-with-drops-of-night.jpg'
	},
	{
		name: 'very heavy rain',
		img:
			'https://st2.depositphotos.com/1008589/9516/i/950/depositphotos_95164214-stock-photo-window-with-drops-of-night.jpg'
	},
	{
		name: 'extreme rain',
		img:
			'https://st2.depositphotos.com/1008589/9516/i/950/depositphotos_95164214-stock-photo-window-with-drops-of-night.jpg'
	},
	{
		name: 'freezing rain',
		img:
			'https://st2.depositphotos.com/1008589/9516/i/950/depositphotos_95164214-stock-photo-window-with-drops-of-night.jpg'
	},
	{
		name: 'light intensity shower rain',
		img:
			'https://st2.depositphotos.com/1008589/9516/i/950/depositphotos_95164214-stock-photo-window-with-drops-of-night.jpg'
	},
	{
		name: 'shower rain',
		img:
			'https://st2.depositphotos.com/1008589/9516/i/950/depositphotos_95164214-stock-photo-window-with-drops-of-night.jpg'
	},
	{
		name: 'heavy intensity shower rain',
		img:
			'https://st2.depositphotos.com/1008589/9516/i/950/depositphotos_95164214-stock-photo-window-with-drops-of-night.jpg'
	},
	{
		name: 'ragged shower rain',
		img:
			'https://st2.depositphotos.com/1008589/9516/i/950/depositphotos_95164214-stock-photo-window-with-drops-of-night.jpg'
	},
	{
		name: 'light intensity drizzle',
		img:
			'https://st2.depositphotos.com/1008589/9516/i/950/depositphotos_95164214-stock-photo-window-with-drops-of-night.jpg'
	},
	{
		name: 'drizzle',
		img:
			'https://st2.depositphotos.com/1008589/9516/i/950/depositphotos_95164214-stock-photo-window-with-drops-of-night.jpg'
	},
	{
		name: 'heavy intensity drizzle',
		img:
			'https://st2.depositphotos.com/1008589/9516/i/950/depositphotos_95164214-stock-photo-window-with-drops-of-night.jpg'
	},
	{
		name: 'light intensity drizzle rain',
		img:
			'https://st2.depositphotos.com/1008589/9516/i/950/depositphotos_95164214-stock-photo-window-with-drops-of-night.jpg'
	},
	{
		name: 'drizzle rain',
		img:
			'https://st2.depositphotos.com/1008589/9516/i/950/depositphotos_95164214-stock-photo-window-with-drops-of-night.jpg'
	},
	{
		name: 'heavy intensity drizzle rain',
		img:
			'https://st2.depositphotos.com/1008589/9516/i/950/depositphotos_95164214-stock-photo-window-with-drops-of-night.jpg'
	},
	{
		name: 'shower rain and drizzle',
		img:
			'https://st2.depositphotos.com/1008589/9516/i/950/depositphotos_95164214-stock-photo-window-with-drops-of-night.jpg'
	},
	{
		name: 'sheavy shower rain and drizzle',
		img:
			'https://st2.depositphotos.com/1008589/9516/i/950/depositphotos_95164214-stock-photo-window-with-drops-of-night.jpg'
	},
	{
		name: 'shower drizzle',
		img:
			'https://st2.depositphotos.com/1008589/9516/i/950/depositphotos_95164214-stock-photo-window-with-drops-of-night.jpg'
	},
	//Thunderstorm
	{
		name: 'thunderstorm with light rain',
		img: 'http://chapter16.org/wp-content/uploads/2017/12/Colorado-thunderstorm-1.jpg'
	},
	{
		name: 'thunderstorm with rain',
		img: 'http://chapter16.org/wp-content/uploads/2017/12/Colorado-thunderstorm-1.jpg'
	},
	{
		name: 'thunderstorm with heavy rain',
		img: 'http://chapter16.org/wp-content/uploads/2017/12/Colorado-thunderstorm-1.jpg'
	},
	{
		name: 'light thunderstorm',
		img: 'http://chapter16.org/wp-content/uploads/2017/12/Colorado-thunderstorm-1.jpg'
	},
	{
		name: 'thunderstorm',
		img: 'http://chapter16.org/wp-content/uploads/2017/12/Colorado-thunderstorm-1.jpg'
	},
	{
		name: 'heavy thunderstorm',
		img: 'http://chapter16.org/wp-content/uploads/2017/12/Colorado-thunderstorm-1.jpg'
	},
	{
		name: 'ragged thunderstorm',
		img: 'http://chapter16.org/wp-content/uploads/2017/12/Colorado-thunderstorm-1.jpg'
	},
	{
		name: 'thunderstorm with light drizzle',
		img: 'http://chapter16.org/wp-content/uploads/2017/12/Colorado-thunderstorm-1.jpg'
	},
	{
		name: 'thunderstorm with drizzle',
		img: 'http://chapter16.org/wp-content/uploads/2017/12/Colorado-thunderstorm-1.jpg'
	},
	{
		name: 'thunderstorm with heavy drizzle',
		img: 'http://chapter16.org/wp-content/uploads/2017/12/Colorado-thunderstorm-1.jpg'
	},
	//Snow
	{
		name: 'snow',
		img: 'https://www.pixel-creation.com/wp-content/uploads/winter-night-wallpapers-wallpaper-cave-3.jpg'
	},
	{
		name: 'light snow',
		img: 'https://www.pixel-creation.com/wp-content/uploads/winter-night-wallpapers-wallpaper-cave-3.jpg'
	},
	{
		name: 'snow',
		img: 'https://www.pixel-creation.com/wp-content/uploads/winter-night-wallpapers-wallpaper-cave-3.jpg'
	},
	{
		name: 'heavy snow',
		img: 'https://www.pixel-creation.com/wp-content/uploads/winter-night-wallpapers-wallpaper-cave-3.jpg'
	},
	{
		name: 'sleet',
		img: 'https://www.pixel-creation.com/wp-content/uploads/winter-night-wallpapers-wallpaper-cave-3.jpg'
	},
	{
		name: 'light shower sleet',
		img: 'https://www.pixel-creation.com/wp-content/uploads/winter-night-wallpapers-wallpaper-cave-3.jpg'
	},
	{
		name: 'shower sleet',
		img: 'https://www.pixel-creation.com/wp-content/uploads/winter-night-wallpapers-wallpaper-cave-3.jpg'
	},
	{
		name: 'light rain and snow',
		img: 'https://www.pixel-creation.com/wp-content/uploads/winter-night-wallpapers-wallpaper-cave-3.jpg'
	},
	{
		name: 'rain and snow',
		img: 'https://www.pixel-creation.com/wp-content/uploads/winter-night-wallpapers-wallpaper-cave-3.jpg'
	},
	{
		name: 'light shower snow',
		img: 'https://www.pixel-creation.com/wp-content/uploads/winter-night-wallpapers-wallpaper-cave-3.jpg'
	},
	{
		name: 'shower snow',
		img: 'https://www.pixel-creation.com/wp-content/uploads/winter-night-wallpapers-wallpaper-cave-3.jpg'
	},
	{
		name: 'heavy shower snow',
		img: 'https://www.pixel-creation.com/wp-content/uploads/winter-night-wallpapers-wallpaper-cave-3.jpg'
	},
	//Atmosphere
	{
		name: 'mist',
		img: 'https://staticdelivery.nexusmods.com/images/101/1518707-1493462307.jpg'
	},
	{
		name: 'smoke',
		img: 'https://staticdelivery.nexusmods.com/images/101/1518707-1493462307.jpg'
	},
	{
		name: 'haze',
		img: 'https://staticdelivery.nexusmods.com/images/101/1518707-1493462307.jpg'
	},
	{
		name: 'sand/dust whirls',
		img: 'https://i.ytimg.com/vi/_o105S5AERQ/maxresdefault.jpg'
	},
	{
		name: 'fog',
		img: 'https://staticdelivery.nexusmods.com/images/101/1518707-1493462307.jpg'
	},
	{
		name: 'sand',
		img: 'https://i.ytimg.com/vi/_o105S5AERQ/maxresdefault.jpg'
	},
	{
		name: 'dust',
		img: 'https://i.ytimg.com/vi/_o105S5AERQ/maxresdefault.jpg'
	},
	{
		name: 'volcanic ash',
		img: 'https://bigpicture.ru/wp-content/uploads/2011/12/s_v02_0RTXX706.jpg'
	},
	{
		name: 'squalls',
		img: 'https://images.wisegeek.com/squall-line.jpg'
	},
	{
		name: 'tornado',
		img: 'https://www.onsolve.com/wp-content/uploads/2019/06/OnSolve_Blog_1000x668_tornado.jpg'
	}
];
