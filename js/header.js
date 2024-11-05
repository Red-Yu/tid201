function doFirst() {
  $(document).ready(function () {
    $(".hamburger").click(function () {
      $(this).toggleClass("active");
      $(".hamburgerCircle").toggleClass("active");
      $(".hamburgerContent").toggleClass("active");

      // 切換 .hamburgerCircle 的動畫狀態
      if ($(".hamburger").hasClass("active")) {
        // 添加 .active 類別，觸發進場動畫
        $(".hamburgerCircle").removeClass("not-active").addClass("active");
        $(".hamburgerContent").removeClass("not-active").addClass("active");
      } else {
        // 移除 .active 類別，觸發退場動畫
        $(".hamburgerCircle").removeClass("active").addClass("not-active");
        $(".hamburgerContent").removeClass("active").addClass("not-active");
      }
    });
  });
}

window.addEventListener("load", doFirst);
