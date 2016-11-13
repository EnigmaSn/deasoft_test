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

var menu_close = document.querySelector(".page-header__menu-close");
    menu_close.addEventListener("click", function(event) {
        event.preventDefault();
        menu.classList.remove("page-header__menu--open-show");
    });


var search_button = document.querySelector(".page-header__search--close");
var search = document.querySelector(".page-header__search--open");

search_button.addEventListener("click", function(event) {
  if (search.classList.contains("page-header__search--open-show")) {
      event.preventDefault();
      console.log("клик таки");
      search.classList.remove("page-header__search--open-show");
  }
  else {
      event.preventDefault();
      search.classList.add("page-header__search--open-show");
  }
});
