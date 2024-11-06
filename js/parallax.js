function doFirst() {
  var scene = document.getElementById("scene");
  var parallaxInstance = new Parallax(scene);
}

window.addEventListener("load", doFirst);
