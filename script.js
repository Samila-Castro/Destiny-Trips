const menuItems = document.querySelectorAll(".menu-header a");

menuItems.forEach((item) => item.addEventListener("click", scrollToIdOnclick));

function scrollToIdOnclick(event) {
  const element = event.target;
  const id = element.getAttribute("href");
  const section = document.querySelector(id);
}

function handleMobileNavBar() {
  let el = document.getElementById("navbarToggleExternalContent2");

  if (el.classList.contains("show-mobile-nav-bar")) {
    el.classList.remove("show-mobile-nav-bar");
  } else el.classList.add("show-mobile-nav-bar");
}
