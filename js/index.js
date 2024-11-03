function doFirst() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".img2", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".mainImg", // 當這個元素進入視口時觸發
      start: "top top", // 當容器的上邊緣進入視口的上邊緣
      end: "bottom top", // 滾動到容器的底部時
      scrub: true, // 滾動時進行動畫
      //   markers: true,
    },
  });

  gsap.to(".img1", {
    scale: 1.3,
    x: "-15%", // 最終移動到左側
    y: "37%", // 最終移動到下方
    scrollTrigger: {
      trigger: ".mainImg", // 當這個元素進入視口時觸發
      start: "top top", // 當容器的上邊緣進入視口的上邊緣
      end: "bottom top", // 滾動到容器的底部時
      scrub: true, // 滾動時進行動畫
      //   markers: true,
    },
  });
  // 獲取所有的視頻元素
  let videos = document.querySelectorAll("video");

  // 判斷是否為手機尺寸
  function isMobile() {
    return window.innerWidth <= 480; // 根據需要調整這個寬度
  }

  // 遍歷所有視頻，為每個視頻添加事件監聽器
  videos.forEach((video) => {
    // 設定視頻靜音
    video.muted = true;
    video.setAttribute("playsinline", ""); // 確保視頻不會全屏播放

    if (isMobile()) {
      // 手機尺寸下，自動播放視頻
      video.play();
    } else {
      let parent = video.parentElement;

      parent.addEventListener("mouseover", () => {
        video.play(); // 滑鼠懸停時播放視頻
      });

      parent.addEventListener("mouseout", () => {
        video.pause(); // 滑鼠移開時暫停視頻
        video.currentTime = 0; // 重置到視頻的開始
      });
    }
  });

  // 監聽視窗調整大小
  window.addEventListener("resize", () => {
    videos.forEach((video) => {
      if (isMobile()) {
        video.play(); // 在手機尺寸下自動播放
      } else {
        // 如果不在手機尺寸，則可以選擇暫停或保持現有行為
        video.pause(); // 可選，根據需求調整
      }
    });
  });
}

window.addEventListener("load", doFirst);
