
let tema_1_descripcion = "Negro sobre Blanco";
let tema_2_descripcion = "Blanco sobre Negro";
let tema_actual = 1;
document.getElementById("boton").onclick = function() {
    console.log("click");
    if (tema_actual == 1){
    tema_actual = 2;
    document.getElementById("tema").innerHTML = "El tema actual  es " + tema_2_descripcion + " (2)";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}
    else {
        tema_actual = 1;
        document.getElementById("tema").innerHTML = "El tema actual  es " + tema_1_descripcion + " (1)";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
}



