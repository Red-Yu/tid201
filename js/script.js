function updateImagePositions() {
  let offset = (window.innerWidth - 520 * 2) / 2; // 計算中間距離
  let distance = -100; // 設定保持的距離

  $(".imgLeft").css("transform", `translateX(${offset + distance}px)`);
  $(".imgRight").css("transform", `translateX(${(offset + distance) * -1}px)`);
}

$(window).on("resize", updateImagePositions);
$(document).ready(updateImagePositions); // 初始調用

$(function () {
  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();

    // console.log(scrollTop);

    let triggerDistance = 4850;
    // 設定移動距離
    let moveDistance = 300;

    if (scrollTop > triggerDistance) {
      // 更新圖像位置
      $(".imgLeft").css("transform", "translateX(-" + moveDistance + "px)");
      $(".imgRight").css("transform", "translateX(" + moveDistance + "px)");
    } else {
      // 回到原位
      $(".imgLeft").css("transform", "translateX(0)");
      $(".imgRight").css("transform", "translateX(0)");
    }
  });
});
