function doFirst() {
  gsap.registerPlugin(ScrollTrigger);

  const images = gsap.utils.toArray(".fade-img");
  const pinElement = document.querySelector(".mainImg");

  const timeline = gsap.timeline({
    paused: true,
    defaults: { duration: 1 },
    onReverseComplete: () => {
      images.forEach((img, i) => {
        if (i > 0) {
          img.style.opacity = 0; // 只有img2到img5在反向滚动时变为0
        }
      });
    },
  });

  // 处理img1的透明度
  // timeline.set(images[0], { opacity: 1 });

  // images.forEach((img, i) => {
  //   if (i > 0) {
  //     timeline.to(img, { opacity: 1 }, `+=0.3`); // 每张图片在前一张显示后1秒出现
  //   }
  // });

  gsap.to(".img2", {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: pinElement, // 當這個元素進入視口時觸發
      start: "top-=59 top", // 當容器的上邊緣進入視口的上邊緣
      end: "bottom top", // 滾動到容器的底部時
      scrub: true, // 滾動時進行動畫

      //   markers: true,
    },
  });

  gsap.to(".img3", {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: pinElement, // 當這個元素進入視口時觸發
      start: "top+=400 top", // 當容器的上邊緣進入視口的上邊緣
      end: "bottom+=400 top", // 滾動到容器的底部時
      scrub: true, // 滾動時進行動畫
      //   markers: true,
    },
  });

  gsap.to(".img4", {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: pinElement, // 當這個元素進入視口時觸發
      start: "top+=800 top", // 當容器的上邊緣進入視口的上邊緣
      end: "bottom+=800 top", // 滾動到容器的底部時
      scrub: true, // 滾動時進行動畫
      //   markers: true,
    },
  });

  gsap.to(".img5", {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: pinElement, // 當這個元素進入視口時觸發
      start: "top+=1200 top", // 當容器的上邊緣進入視口的上邊緣
      end: "bottom+=1200 top", // 滾動到容器的底部時
      scrub: true, // 滾動時進行動畫
      //   markers: true,
    },
  });

  // 创建ScrollTrigger来控制滚动行为
  ScrollTrigger.create({
    trigger: pinElement,
    start: "top-=59 top",
    end: "+=3000", // 根据需要调整滚动高度
    pin: true,
    scrub: 1, // 添加scrub属性以使动画根据滚动距离变化
    // onEnter: () => timeline.play(),
    // onLeaveBack: () => {
    //   timeline.reverse();
    //   gsap.set(images[0], { opacity: 1 }); // 让img1保持不变
    // },
    markers: true, // 调试用的标记（发布时可以移除）
  });

  // ------------------------------------------

  // gsap.registerPlugin(ScrollTrigger);

  // const images = gsap.utils.toArray(".fade-img");
  // const pinElement = document.querySelector(".mainImg");

  // const timeline = gsap.timeline({
  //   paused: true,
  //   defaults: { duration: 1 },
  //   onReverseComplete: () => {
  //     images.forEach((img, i) => {
  //       if (i > 0) {
  //         img.style.opacity = 0; // 只有img2到img5在反向滚动时变为0
  //       }
  //     });
  //   },
  // });

  // // 处理img1的透明度
  // timeline.set(images[0], { opacity: 1 });

  // images.forEach((img, i) => {
  //   if (i > 0) {
  //     timeline.to(img, { opacity: 1 }, `+=1`); // 每张图片在前一张显示后1秒出现
  //   }
  // });

  // // 创建ScrollTrigger来控制滚动行为
  // ScrollTrigger.create({
  //   trigger: pinElement,
  //   start: "top-=59 top",
  //   end: "+=1000", // 根据需要调整滚动高度
  //   pin: true,
  //   scrub: 1, // 添加scrub属性以使动画根据滚动距离变化
  //   onEnter: () => timeline.play(),
  //   onLeaveBack: () => {
  //     timeline.reverse();
  //     gsap.set(images[0], { opacity: 1 }); // 让img1保持不变
  //   },
  //   markers: true, // 调试用的标记（发布时可以移除）
  // });
}

window.addEventListener("load", doFirst);
