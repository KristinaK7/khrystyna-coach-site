const stars = document.querySelectorAll(".rating span");
const ratingInput = document.getElementById("ratingValue");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    const value = Number(star.dataset.value);

    ratingInput.value = value;

    stars.forEach((s) => {
      if (Number(s.dataset.value) <= value) {
        s.classList.add("active");
      } else {
        s.classList.remove("active");
      }
    });
  });
});

const track = document.querySelector(".testimonials-track");
const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");

if (track && prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => {
    track.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  });

  nextBtn.addEventListener("click", () => {
    track.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  });
}

const copyButtons = document.querySelectorAll(".copy-btn");

const copyToClipboard = async (value) => {
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(value);
      return;
    } catch (error) {
      // Fall back for local file previews or browsers that block clipboard access.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
};

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.dataset.copy;
    const originalTitle = button.getAttribute("title");
    const doneText = button.dataset.done || "Copied";

    try {
      await copyToClipboard(value);
      button.setAttribute("title", doneText);
      button.classList.add("copied");

      setTimeout(() => {
        button.setAttribute("title", originalTitle);
        button.classList.remove("copied");
      }, 1600);
    } catch (error) {
      button.setAttribute("title", originalTitle);
    }
  });
});
