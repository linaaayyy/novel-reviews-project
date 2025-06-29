document.addEventListener("DOMContentLoaded", () => {
  const readMoreButtons = document.querySelectorAll(".read-more-btn");
  const readLessButtons = document.querySelectorAll(".read-less-btn");

  readMoreButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const content = btn.previousElementSibling;
      content.style.display = "block";
      btn.style.display = "none";
    });
  });

  document.addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("read-less-btn")) {
      const content = e.target.closest(".read-more-content");
      const moreBtn = content.nextElementSibling;
      content.style.display = "none";
      moreBtn.style.display = "inline-block";
    }
  });
});
