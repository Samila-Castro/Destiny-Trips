var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function handleMobileNavBar() {
  let el = document.getElementById("navbarToggleExternalContent2");

  if (el.classList.contains("show-mobile-nav-bar")) {
    el.classList.remove("show-mobile-nav-bar");
  } else el.classList.add("show-mobile-nav-bar");
}
