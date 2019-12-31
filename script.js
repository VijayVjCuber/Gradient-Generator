var display = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

display.textContent = body.style.background + ";";

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

function randomGradient(){
	var c1 = {
		r: Math.floor(Math.random()*255),
		g: Math.floor(Math.random()*255),
		b: Math.floor(Math.random()*255)
	};
	var c2 = {
		r: Math.floor(Math.random()*255),
		g: Math.floor(Math.random()*255),
		b: Math.floor(Math.random()*255)
	};
	c1.rgb = 'rgb('+c1.r+', '+c1.g+', '+c1.b+')';
	c2.rgb = 'rgb('+c2.r+', '+c2.g+', '+c2.b+')';
	body.style.background = "linear-gradient(to right, "+c1.rgb+", "+c2.rgb+")";
	display.textContent = body.style.background + ";";
}

button.addEventListener("click", randomGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);