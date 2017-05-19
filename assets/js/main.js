var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];
pictures.forEach(function(imagen){
    var imagenes = document.getElementById("imagenes");
    var img = document.createElement("img");
    img.setAttribute("src", imagen);
    img.classList.add("panditas");
    imagenes.appendChild(img);
});
