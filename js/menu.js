// 當頁面加載時，默認顯示 sushiMenuOsushi
window.onload = function () {
  switchMenu("sushiMenuOsushi");
};

// 切換菜單的函數
function switchMenu(menuClass) {
  // 隱藏所有菜單
  var menus = document.querySelectorAll(".sushiMenu");
  menus.forEach(function (menu) {
    menu.classList.remove("active");
  });

  // 顯示被選中的菜單
  var activeMenu = document.querySelector("." + menuClass);
  if (activeMenu) {
    activeMenu.classList.add("active");
  }
}
