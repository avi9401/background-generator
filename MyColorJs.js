var css = document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body = document.getElementById("gradient");
var ranumber = document.getElementById("random");

function ChangeCol(){

	body.style.background = "linear-gradient(to right, "+ color1.value +", " + color2.value +")";

	css.textContent = body.style.background +";";
}



function GetRandomColor(){
	var letters = '0123456789ABCDEF';
	var colors = '#';
	for(var i = 0; i <6; i++){
	 colors+=letters[Math.floor(Math.random() * 16)];
    }
    return colors;
}

function RandomColors(){
	color1.value = GetRandomColor();
	color2.value = GetRandomColor();

	ChangeCol();
}

  

ChangeCol();

color1.addEventListener("input", ChangeCol);
	

color2.addEventListener("input", ChangeCol);

ranumber.addEventListener("click", RandomColors);









