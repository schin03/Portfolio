function toggleBlackjack() {
  const demo = document.getElementById("blackjack-demo");
  const buttons = document.querySelectorAll(".demo-button");

  demo.classList.toggle("open");

  const isOpen = demo.classList.contains("open");

  buttons.forEach((button) => {
    button.textContent = isOpen ? "▼ Hide Demo" : "▶ Play Demo";
  });

  if (isOpen) {
    setTimeout(() => {
      demo.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 100);
  }
}
