const body = document.querySelector('body');

const IMG_NUMBER = 5;

// api를 통해 image를 가져오게 되면 load 관련 event handler 사용 가능
// function handleImgLoad() {
// 	console.log('finished loading');
// }

function paintImage(imgNumber) {
	const img = new Image();
	img.src = `images/${imgNumber}.jpg`;
	img.classList.add('bgImage');
	// api를 통해 image를 가져오게 되면 load 관련 event handler 사용 가능
	// img.addEventListener('loadend', handleImgLoad);
	body.appendChild(img);
}

function genRandomNumber() {
	const number = Math.ceil(Math.random() * IMG_NUMBER);
	return number;
}

function init() {
	const randomNumber = genRandomNumber();
	paintImage(randomNumber);
}

init();
