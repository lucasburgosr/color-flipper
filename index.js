const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025", "orange"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    //para conseguir un número al azar entre 0 y 3
    const numAzar = numeroAleatorio();
    document.body.style.backgroundColor = colors[numAzar];
    color.textContent = colors[numAzar];
});

function numeroAleatorio(){
    return Math.floor(Math.random()*colors.length);
}