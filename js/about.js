function doFirst() {
  //==========隨滾動距離出現=============

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
  // // timeline.set(images[0], { opacity: 1 });

  // // images.forEach((img, i) => {
  // //   if (i > 0) {
  // //     timeline.to(img, { opacity: 1 }, `+=0.3`); // 每张图片在前一张显示后1秒出现
  // //   }
  // // });

  // gsap.to(".img2", {
  //   opacity: 1,
  //   duration: 1,
  //   scrollTrigger: {
  //     trigger: pinElement, // 當這個元素進入視口時觸發
  //     start: "top-=59 top", // 當容器的上邊緣進入視口的上邊緣
  //     end: "bottom top", // 滾動到容器的底部時
  //     scrub: true, // 滾動時進行動畫

  //     //   markers: true,
  //   },
  // });

  // gsap.to(".img3", {
  //   opacity: 1,
  //   duration: 1,
  //   scrollTrigger: {
  //     trigger: pinElement, // 當這個元素進入視口時觸發
  //     start: "top+=400 top", // 當容器的上邊緣進入視口的上邊緣
  //     end: "bottom+=400 top", // 滾動到容器的底部時
  //     scrub: true, // 滾動時進行動畫
  //     //   markers: true,
  //   },
  // });

  // gsap.to(".img4", {
  //   opacity: 1,
  //   duration: 1,
  //   scrollTrigger: {
  //     trigger: pinElement, // 當這個元素進入視口時觸發
  //     start: "top+=800 top", // 當容器的上邊緣進入視口的上邊緣
  //     end: "bottom+=800 top", // 滾動到容器的底部時
  //     scrub: true, // 滾動時進行動畫
  //     //   markers: true,
  //   },
  // });

  // gsap.to(".img5", {
  //   opacity: 1,
  //   duration: 1,
  //   scrollTrigger: {
  //     trigger: pinElement, // 當這個元素進入視口時觸發
  //     start: "top+=1200 top", // 當容器的上邊緣進入視口的上邊緣
  //     end: "bottom+=1200 top", // 滾動到容器的底部時
  //     scrub: true, // 滾動時進行動畫
  //     //   markers: true,
  //   },
  // });

  // // 创建ScrollTrigger来控制滚动行为
  // ScrollTrigger.create({
  //   trigger: pinElement,
  //   start: "top-=59 top",
  //   end: "+=3000", // 根据需要调整滚动高度
  //   pin: true,
  //   scrub: 1, // 添加scrub属性以使动画根据滚动距离变化
  //   // onEnter: () => timeline.play(),
  //   // onLeaveBack: () => {
  //   //   timeline.reverse();
  //   //   gsap.set(images[0], { opacity: 1 }); // 让img1保持不变
  //   // },
  //   markers: true, // 调试用的标记（发布时可以移除）
  // });

  // ----------trigger後自動依序出現---------------------

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

  // ===========每一個img之間新增trigger=================

  gsap.registerPlugin(ScrollTrigger);

  let images = gsap.utils.toArray(".fade-img");
  let pinElement = document.querySelector(".mainImg");
  let triggerDistance;

  // 根據窗口寬度設置 triggerDistance
  function updateTriggerDistance() {
    let windowWidth = window.innerWidth;

    if (windowWidth < 480) {
      triggerDistance = 450; // 小於480px時的觸發距離
    } else if (windowWidth < 768) {
      triggerDistance = 600; // 在480px到768px之間的觸發距離
    } else if (windowWidth < 1024) {
      triggerDistance = 800; // 在768px到1024px之間的觸發距離
    } else {
      triggerDistance = 1000; // 大於或等於1024px時的觸發距離
    }
  }

  // 初始設置
  updateTriggerDistance();

  // 當窗口大小改變時更新 triggerDistance
  window.addEventListener("resize", updateTriggerDistance);

  // 初始化所有图片的透明度为0，除了img1
  images.forEach((img, i) => {
    if (i > 0) {
      gsap.set(img, { opacity: 0 });
    }
  });

  // 创建timeline处理img1和img2的透明度
  let timeline = gsap.timeline({
    paused: true,
    defaults: { duration: 1 },
    onReverseComplete: () => {
      images.forEach((img, i) => {
        if (i === 1) {
          // 处理 img2
          img.style.opacity = 0;
        }
      });
    },
  });

  // 处理img1的透明度
  timeline.set(images[0], { opacity: 1 });
  timeline.to(images[1], { opacity: 1 }, `+=1`); // img2在1秒后出现

  // 创建ScrollTrigger来控制img1和img2的滚动行为
  ScrollTrigger.create({
    trigger: pinElement,
    start: "top-=59 top",
    end: `+=${triggerDistance * 8}`, // 根据需要调整滚动高度
    pin: true,
    scrub: 1,
    onEnter: () => timeline.play(),
    onLeaveBack: () => {
      timeline.reverse();
      gsap.set(images[0], { opacity: 1 }); // 让img1保持不变
    },
    // markers: true, // 调试用的标记（发布时可以移除）
  });

  // 为img3创建独立的ScrollTrigger
  let img3Timeline = gsap.timeline({
    paused: true,
    defaults: { duration: 1 },
    onReverseComplete: () => {
      images[2].style.opacity = 0; // 反向时img3变为0
    },
  });

  // 处理img3的透明度
  img3Timeline.to(images[2], { opacity: 1 });

  // 创建ScrollTrigger来控制img3的滚动行为
  ScrollTrigger.create({
    trigger: images[2], // 以img3为触发元素
    start: `top+=${triggerDistance * 3} top`, // 根据需要调整触发位置
    onEnter: () => img3Timeline.play(),
    onLeaveBack: () => {
      img3Timeline.reverse();
    },
    // markers: true, // 调试用的标记（发布时可以移除）
  });

  // 为img4创建独立的ScrollTrigger
  let img4Timeline = gsap.timeline({
    paused: true,
    defaults: { duration: 1 },
    onReverseComplete: () => {
      images[3].style.opacity = 0; // 反向时img4变为0
    },
  });

  // 处理img4的透明度
  img4Timeline.to(images[3], { opacity: 1 });

  // 创建ScrollTrigger来控制img4的滚动行为
  ScrollTrigger.create({
    trigger: images[3], // 以img4为触发元素
    start: `top+=${triggerDistance * 5} top`, // 根据需要调整触发位置
    onEnter: () => img4Timeline.play(),
    onLeaveBack: () => {
      img4Timeline.reverse();
    },
    // markers: true, // 调试用的标记（发布时可以移除）
  });

  // 为img5创建独立的ScrollTrigger
  let img5Timeline = gsap.timeline({
    paused: true,
    defaults: { duration: 1 },
    onReverseComplete: () => {
      images[4].style.opacity = 0; // 反向时img5变为0
    },
  });

  // 处理img5的透明度
  img5Timeline.to(images[4], { opacity: 1 });

  // 创建ScrollTrigger来控制img5的滚动行为
  ScrollTrigger.create({
    trigger: images[4], // 以img5为触发元素
    start: `top+=${triggerDistance * 7} top`, // 根据需要调整触发位置
    onEnter: () => img5Timeline.play(),
    onLeaveBack: () => {
      img5Timeline.reverse();
    },
    // markers: true, // 调试用的标记（发布时可以移除）
  });

  //-----------------加上文字------------------
  gsap.registerPlugin(ScrollTrigger);

  let textElements = gsap.utils.toArray(".textElement");

  // 初始化文字的透明度为0，除了textElement1
  textElements.forEach((textElement, i) => {
    if (i > 0) {
      gsap.set(textElement, { opacity: 0 });
    }
  });

  // 让textElement1始终保持不变
  gsap.set(textElements[0], { opacity: 1 });

  // 为每个文字创建独立的ScrollTrigger
  let createTextTimeline = (textElement, prevTextElement, startOffset) => {
    let textTimeline = gsap.timeline({
      paused: true,
      defaults: { duration: 1 },
    });

    // 处理当前文字和上一段文字的透明度
    textTimeline.to(textElement, { opacity: 1 });
    if (prevTextElement) {
      textTimeline.to(prevTextElement, { opacity: 0 }, "<"); // 同时将上一段透明度设为0
    }

    ScrollTrigger.create({
      trigger: textElement,
      start: `top+=${startOffset} top`,
      onEnter: () => textTimeline.play(),
      onLeaveBack: () => {
        textTimeline.reverse();
        // 确保在滚动回去时，前一段文字的透明度立即设置为0
        if (prevTextElement) {
          gsap.set(prevTextElement, { opacity: 0 });
        }
      },
      // markers: true,
    });
  };

  // 创建每段文字的ScrollTrigger
  createTextTimeline(textElements[1], textElements[0], triggerDistance * 2); // textElement2在img2后出现
  createTextTimeline(textElements[2], textElements[1], triggerDistance * 4); // textElement3在img3后出现
  createTextTimeline(textElements[3], textElements[2], triggerDistance * 6); // textElement4在img4后出现
}

window.addEventListener("load", doFirst);
