function doFirst() {
//   gsap.registerPlugin(ScrollTrigger);

//   const images = document.querySelectorAll(".wrapper img");

//   // 獲取最後一張圖片
//   const lastImage = images[images.length - 1];

//   // 為每個圖片創建一個動畫
//   images.forEach((img, index) => {
//     gsap.to(img, {
//       opacity: 1, // 使圖片從透明變為不透明
//       scrollTrigger: {
//         trigger: img,
//         start: "top 80%", // 當圖片進入視口時
//         end: "top 30%", // 直到圖片達到一定位置
//         scrub: true, // 當滾動時平滑過渡
//         markers: true,
//       },
//     });
//   });

//   // 鎖定滾動直到最後一張圖片出現
//   ScrollTrigger.create({
//     trigger: lastImage,
//     start: "top bottom", // 當最後一張圖片完全出現在視口中
//     end: "top+=100 top", // 調整結束位置以確保完全顯示
//     onEnter: () => {
//       // 鎖定滾動
//       document.body.style.overflow = "hidden"; // 鎖定滾動
//       gsap.to(window, { scrollTo: { y: window.scrollY, autoKill: false } });
//     },
//     onLeave: () => {
//       // 解除鎖定
//       document.body.style.overflow = ""; // 解除鎖定
//     },
//     onEnterBack: () => {
//       // 鎖定滾動
//       document.body.style.overflow = "hidden"; // 鎖定滾動
//     },
//     onLeaveBack: () => {
//       // 解除鎖定
//       document.body.style.overflow = ""; // 解除鎖定
//     },
//   });
// }

window.addEventListener("load", doFirst);
