const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile-img');
const nameFull = document.getElementById('name');
const date = document.getElementById('date');

const animatedBg = document.querySelectorAll('.animated-bg');
const animatedBgText = document.querySelectorAll('.animated-bg-text');
const randomPic = 'https://source.unsplash.com/random/800x600';

async function randomUser() {
	const res = await fetch('https://randomuser.me/api/');
	const data = await res.json();
	const user = await data.results[0];
	setTimeout(() => {
		showLoading(user);
	}, 1500);
}

const showLoading = (user) => {
	header.innerHTML = `<img
        src= "${randomPic}"
        alt="">`;
	title.innerHTML = `Lorem ipsum dolor sit amet.`;
	excerpt.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, itaque?`;
	profileImg.innerHTML = ` <img src="${user.picture.thumbnail}" alt="">`;
	nameFull.innerHTML = `${user.name.first}`;
	date.innerHTML = `May 16, 2021`;

	animatedBg.forEach((bg) => bg.classList.remove('animated-bg'));
	animatedBgText.forEach((bgtext) =>
		bgtext.classList.remove('animated-bg-text')
	);
	console.log(user);
};

randomUser();
