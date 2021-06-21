let body = document.getElementById("body");
let left = document.getElementById("leftcolor");
let right = document.getElementById("rightcolor");
let currentcss =  document.getElementById("currentcss");
let direction = document.querySelector(".direction");

for(let child of direction.children) {
	child.addEventListener('input', (event)=>{changeBg(event)});
}

left.addEventListener('input', changeBg);
right.addEventListener('input', changeBg);

function changeBg(e){
	body.style.background = `linear-gradient(${e.srcElement.value}, ${left.value}, ${right.value})`;
	currentcss.innerHTML = `linear-gradient(${e.srcElement.value}, ${left.value}, ${right.value});`;
}