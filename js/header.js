function doFirst() {
  $(document).ready(function () {
    $(".hamburger").click(function () {
      $(this).toggleClass("active");
    });
  });
}

window.addEventListener("load", doFirst);
