if (typeof Parallax !== "undefined") {
  console.log("Parallax 已加載");
} else {
  console.log("Parallax 未加載");
}
// var scene = document.getElementById("scene");
// var parallaxInstance = new Parallax(scene);

let parallax = document.querySelector(".parallax");
let front = document.querySelectorAll(".front_layer");
let back = document.querySelectorAll(".back_layer");

let sFront = 150;
let sBack = 400;

parallax.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  front.style.transform = `
    translate(
    ${x / sFront}%,
    ${y / sFront}%)`;

  back.style.transform = `
    translate(
    ${x / sBack}%,
    ${y / sBack}%)`;
});
