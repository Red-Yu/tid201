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

    if (windowWidth < 768) {
      moveDistance = 850; // 小於480px時的移動距離
      originalOffset = 580; // 小於480px時的原始偏移
    } else if (windowWidth < 850) {
      moveDistance = 750; // 在480px到768px之間的移動距離
      originalOffset = 540; // 在480px到768px之間的原始偏移
    } else if (windowWidth < 950) {
      moveDistance = 720;
      originalOffset = 480;
    } else if (windowWidth < 1024) {
      moveDistance = 650; // 在768px到1024px之間的移動距離
      originalOffset = 400; // 在768px到1024px之間的原始偏移
    } else if (windowWidth < 1200) {
      moveDistance = 590; // 在1024px到1200px之間的移動距離
      originalOffset = 340; // 在1024px到1200px之間的原始偏移
    } else {
      moveDistance = 530; // 大於或等於1200px時的移動距離
      originalOffset = 250; // 大於或等於1200px時的原始偏移
    }

    // if (windowWidth < 1024) {
    //   moveDistance = 650; // 小於1024px時的移動距離
    //   originalOffset = 400; // 小於1024px時的原始偏移
    // } else {
    //   moveDistance = 530; // 大於或等於1024px時的移動距離
    //   originalOffset = 250; // 大於或等於1024px時的原始偏移
    // }

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

  // 獲取 goToTop 元素
  const goToTopButton = document.querySelector(".goToTop");

  // 添加點擊事件監聽器
  goToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0, // 滾動到頁面頂部
      behavior: "smooth", // 平滑滾動
    });
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
