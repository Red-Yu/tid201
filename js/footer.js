function updateImagePositions() {
  let offset = (window.innerWidth - 520 * 2) / 2; // 計算中間距離
  let distance = -400; // 設定保持的距離

  $(".imgLeft").css("transform", `translateX(${offset + distance}px)`);
  $(".imgRight").css("transform", `translateX(${(offset + distance) * -1}px)`);
}

$(window).on("resize", updateImagePositions);
$(document).ready(updateImagePositions); // 初始調用

// -----------------trigger--------------------

$(function () {
  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();

    // console.log(scrollTop);

    let documentHeight = $(document).height();
    let windowHeight = $(window).height();
    let windowWidth = $(window).width();

    let triggerDistance = documentHeight - windowHeight - 150;
    let moveDistance = 570;

    let originalOffset = 270;

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

// -------------------gsap-------------------

// document.addEventListener("DOMContentLoaded", (event) => {
//   gsap.registerPlugin(ScrollTrigger);
//   // gsap code here!

//   gsap.to(".imgLeft", {
//     x: -570, // 向左移動 500px
//     scrollTrigger: {
//       trigger: ".imgLeft", // 觸發的元素
//       start: "top center", // 當這個元素的頂部到達視口中心時開始
//       end: "bottom center", // 當這個元素的底部到達視口中心時結束
//       scrub: true, // 平滑的滾動效果
//       markers: true, // 可選，顯示標記以便調試
//     },
//   });

//   gsap.to(".imgRight", {
//     x: 570, // 向右移動 500px
//     scrollTrigger: {
//       trigger: ".imgRight", // 觸發的元素
//       start: "top center", // 當這個元素的頂部到達視口中心時開始
//       end: "bottom center", // 當這個元素的底部到達視口中心時結束
//       scrub: true, // 平滑的滾動效果
//       markers: true, // 可選，顯示標記以便調試
//     },
//   });
// });
