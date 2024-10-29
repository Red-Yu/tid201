function updateImagePositions() {
  let offset = (window.innerWidth - 520 * 2) / 2; // 計算中間距離
  let distance = -400; // 設定保持的距離

  $(".imgLeft").css("transform", `translateX(${offset + distance}px)`);
  $(".imgRight").css("transform", `translateX(${(offset + distance) * -1}px)`);
}

$(window).on("resize", updateImagePositions);
$(document).ready(updateImagePositions); // 初始調用

$(function () {
  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();

    // console.log(scrollTop);

    let documentHeight = $(document).height();
    let windowHeight = $(window).height();
    // let windowWidth = $(window).width();

    let triggerDistance = documentHeight - windowHeight - 150;
    let moveDistance = 540;
    // let moveDistance = windowWidth * 0.425;
    let originalOffset = 270;
    // let originalOffset = windowWidth * 0.2;

    if (scrollTop > triggerDistance) {
      // 更新圖像位置
      $(".imgLeft").css("transform", "translateX(-" + moveDistance + "px)");
      $(".imgRight").css("transform", "translateX(" + moveDistance + "px)");
    } else {
      // 回到原位
      // $(".imgLeft").css("transform", "translateX(0)");
      // $(".imgRight").css("transform", "translateX(0)");
      $(".imgLeft").css("transform", "translateX(-" + originalOffset + "px)");
      $(".imgRight").css("transform", "translateX(" + originalOffset + "px)");
    }
  });
});
