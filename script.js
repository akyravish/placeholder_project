const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile-img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animatedBg = document.querySelectorAll('.animated-bg');
const animatedBgText = document.querySelectorAll('.animated-bg-text');

setTimeout(() => {
	header.innerHTML = `<img
        src="https://images.unsplash.com/photo-1621864980675-4d7f27420a60?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixlib=rb-1.2.1&q=80&w=800"
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
}, 2500);
