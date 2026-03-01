const supportsIntersectionObserver = "IntersectionObserver" in window;

if (supportsIntersectionObserver) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("vis");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  document.querySelectorAll(".fu").forEach((el) => observer.observe(el));
}

