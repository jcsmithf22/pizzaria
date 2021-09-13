const scrollTopBtn = document.querySelector(".scrollup");
var target = document.querySelector(".nav-wrapper");

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      scrollTopBtn.classList.add("hideBtn");
    } else {
      scrollTopBtn.classList.remove("hideBtn");
    }
  });
};

const scrollTop = () => {
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}
scrollTopBtn.addEventListener("click", scrollTop);


let observer = new IntersectionObserver(callback);
observer.observe(target);