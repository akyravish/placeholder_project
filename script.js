const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile-img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animatedBg = document.querySelectorAll('.animated-bg');
const animatedBgText = document.querySelectorAll('.animated-bg-text');

async function randomUser() {
	const res = await fetch('https://randomuser.me/api/');
	const data = await res.json();
	const user = await data.results[0];
	const mainPic = `https://source.unsplash.com/random/1280x720`;
	console.log(mainPic);
	setTimeout(() => {
		showLoading(user, mainPic);
	}, 1500);
}

const showLoading = (user, pic) => {
	header.innerHTML = `<img
        src="${pic}"
        alt="">`;
	title.innerHTML = `Lorem ipsum dolor sit amet.`;
	excerpt.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, itaque?`;
	profileImg.innerHTML = ` <img src="https://randomuser.me/api/portraits/thumb/men/75.jpg" alt="">`;
	name.innerHTML = `Jonny Steve`;
	date.innerHTML = `May 16, 2021`;

	animatedBg.forEach((bg) => bg.classList.remove('animated-bg'));
	animatedBgText.forEach((bgtext) =>
		bgtext.classList.remove('animated-bg-text')
	);
	console.log(user);
};

randomUser();
