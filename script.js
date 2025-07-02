
window.addEventListener("scroll", () => {
  const events = document.querySelectorAll(".timeline-event");
  events.forEach((event) => {
    const rect = event.getBoundingClientRect();
    if (rect.top >= 0 && rect.top <= window.innerHeight / 1.2) {
      event.classList.add("active");
    }
  });
});
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollX || document.documentElement.scrollLeft;
  const scrollWidth = document.documentElement.scrollWidth - window.innerWidth;
  const scrollPercent = (scrollTop / scrollWidth) * 100;
  document.getElementById("scroll-indicator-bar").style.width = scrollPercent + "%";
});
