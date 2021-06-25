let price = document.getElementById("price");
let slider = document.getElementById("slider");

price.innerHTML = "$" + slider.value + ".00";
slider.oninput = function(){
    let position = Number(this.value) * 100 / 40;
    let color = "linear-gradient(90deg, var(--soft-cyan) "+position+"%, var(--light-grayish-blue) "+position+"%)";
    slider.style.background = color;
    price.innerHTML = "$" + this.value + ".00";
}