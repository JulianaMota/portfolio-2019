let projectID = param.get('projectid');

// fixed bar variavles
const fixedBack = document.querySelector('.header-back');
const nav = document.querySelector('.project-container #menu');
const logo = document.querySelector('#moveheader');
const aNav = document.querySelectorAll('.atag');
const jmoLogo = document.querySelectorAll('.jmologo');
const navATag = document.querySelectorAll('nav a');
// console.log(navATag);

//svg icons variables
const a = document.querySelectorAll('.a');
const b = document.querySelectorAll('.b');
const e = document.querySelectorAll('.e');
const c = document.querySelectorAll('.c');

//function window event listner when load page funtion init
window.addEventListener('DOMContentLoaded', init);

function init() {
	getOneProject(projectID);
}

function getOneProject(projectID) {
	db
		.collection('projects')
		.doc(projectID)
		.get()
		.then((snapshot) => {
			displayOneProject(snapshot.data());
		})
		.catch((err) => console.log(err));
}

function displayOneProject(data) {
	const copy = document.querySelector('.main-temp').content.cloneNode(true);

	copy.querySelector('.project-photo').src = data.imgURL;

	copy.querySelector('h2').textContent = data.title;
	copy.querySelector('h4').textContent = data.year;
	copy.querySelector('h3').textContent = data.place;
	copy.querySelector('.text-project p').textContent = data.description;
	copy.querySelector('.role-detail p').textContent = data.role;

	const imageList = copy.querySelector('.galery-container .swiper-wrapper');
	if (data.gallery === null) {
		copy.querySelector('.galery-container').innerHTML = data.video;
	} else {
		data.gallery.forEach((image) => {
			const html = `
			<div class="swiper-slide">
				<img src="${image}" alt="project-images" />
			</div>;`;

			imageList.innerHTML += html;
		});
	}

	if (data.link === '') {
		copy.querySelector('.link').classList.add('hide');
	} else {
		copy.querySelector('.link a').href = data.link;
	}

	if (data.github) {
		copy.querySelector('.github a').href = data.github;
	} else {
		copy.querySelector('.github').classList.add('hide');
	}

	document.querySelector('#each-project').appendChild(copy);

	const projSwiper = new Swiper('.swiper-container', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		initialSlide: 0,
		spaceBetween: 30,
		allowTouchMove: true,
		//pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		}
	});
}
