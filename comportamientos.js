


let tema_1_descripcion = "Blanco sobre Negro";
let tema_2_descripcion = "Negro sobre Blanco";
let tema_actual = 1;
document.getElementById("boton").onclick = function() {
    if (tema_actual == 1){
    tema_actual = 2;
    document.getElementById("tema").innerHTML = "El tema actual  es " + tema_2_descripcion + " (2)";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}
    else {
        tema_actual = 1;
        document.getElementById("tema").innerHTML = "El tema actual  es " + tema_1_descripcion + " (1)";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
}

document.getElementById("boton_info").onclick = function() {
    document.getElementById("texto_experiencia").style.display = "none";
    document.getElementById("texto_habilidades").style.display = "none";
    document.getElementById("info").style.display = "";
    document.getElementById("texto_info").style.display = "";
    document.getElementById("experiencia").style.display = "";
    document.getElementById("habilidades").style.display = "";
}

document.getElementById("boton_experiencia").onclick = function() {
    document.getElementById("texto_info").style.display = "none";
    document.getElementById("texto_habilidades").style.display = "none";
    document.getElementById("experiencia").style.display = "";
    document.getElementById("texto_experiencia").style.display = "";
    document.getElementById("info").style.display = "";
    document.getElementById("habilidades").style.display = "";
}

document.getElementById("boton_habilidades").onclick = function() {
    document.getElementById("texto_info").style.display = "none";
    document.getElementById("texto_experiencia").style.display = "none";
    document.getElementById("habilidades").style.display = "";
    document.getElementById("texto_habilidades").style.display = "";
    document.getElementById("info").style.display = "";
    document.getElementById("experiencia").style.display = "";
}

document.getElementById("texto_experiencia").style.display = "none";
document.getElementById("texto_habilidades").style.display = "none";
