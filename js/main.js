var menu_button = document.querySelector(".page-header__menu--close");
var menu = document.querySelector(".page-header__menu--open");

menu_button.addEventListener("click", function(event) {
  if (menu.classList.contains("page-header__menu--open-show")) {
      event.preventDefault();
      console.log("клик таки");
      menu.classList.remove("page-header__menu--open-show");
  }
  else {
      event.preventDefault();
      menu.classList.add("page-header__menu--open-show");
  }
});


var menu_button = document.querySelector(".page-header__search--close");
var menu = document.querySelector(".page-header__search--open");

menu_button.addEventListener("click", function(event) {
  if (menu.classList.contains("page-header__search--open-show")) {
      event.preventDefault();
      console.log("клик таки");
      menu.classList.remove("page-header__search--open-show");
  }
  else {
      event.preventDefault();
      menu.classList.add("page-header__search--open-show");
  }
});
