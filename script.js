document.addEventListener("DOMContentLoaded", () => {
  const shark = document.getElementById("shark");
  const stage = document.querySelector(".stage");

  shark.addEventListener("mousedown", () => {
    shark.classList.add("active");
  });

  document.addEventListener("mouseup", () => {
    shark.classList.remove("active");
  });

  shark.addEventListener("touchstart", (e) => {
    e.preventDefault();
    shark.classList.add("active");
  });

  document.addEventListener("touchend", () => {
    shark.classList.remove("active");
  });

  stage.addEventListener("mousemove", (e) => {
    const rect = stage.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const moveX = x * 0.04;
    const moveY = y * 0.03;

    shark.style.transform = `translate3d(${moveX}px, ${20 + moveY}px, 0)`;
  });

  stage.addEventListener("mouseleave", () => {
    shark.style.transform = "translate3d(0px, 20px, 0)";
    shark.style.transition = "transform 1.2s ease-out";
  });

  stage.addEventListener("mouseenter", () => {
    shark.style.transition = "none";
  });
});
