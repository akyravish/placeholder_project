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
	console.log(user);
}

const showLoading = () => {
	header.innerHTML = `<img
        src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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
};

setTimeout(showLoading, 2500);
randomUser();
