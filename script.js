let skills = document.getElementById("skills");
skills.addEventListener("mouseover", func, false);

function func()
{  
let elem = document.querySelectorAll(".bar");
elem.forEach((userItem) => {
	let userClass = userItem.classList;
	console.log(userClass)
	if (userClass.contains('advanced')) {
		userClass.add('advanced1'); 
	}
	if (userClass.contains('expert')) {
		userClass.add('expert1'); 
	}

	if (userClass.contains('intermediate')) {
		userClass.add('intermediate1'); 
	}


	if (userClass.contains('basic')) {
		userClass.add('basic1'); 
	}

	const rgba2hex = (rgba) => `#${rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)$/).slice(1).map((n, i) => (i === 3 ? Math.round(parseFloat(n) * 255) : parseFloat(n)).toString(16).padStart(2, '0').replace('NaN', '')).join('')}`

	userItem.style.backgroundColor = rgba2hex('rgba(255, 255, 255, 0.3)'); 
})
}



