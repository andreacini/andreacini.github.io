// Abstract/BibTeX toggles and BibTeX copy on the publications page.
document.querySelectorAll(".pub-actions button").forEach(function (button) {
  button.addEventListener("click", function () {
    var panel = document.getElementById(button.getAttribute("aria-controls"));
    var open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
    panel.hidden = open;
  });
});

document.querySelectorAll(".pub-copy").forEach(function (button) {
  button.addEventListener("click", function () {
    var text = button.nextElementSibling.textContent;
    navigator.clipboard.writeText(text).then(function () {
      button.textContent = "Copied";
      setTimeout(function () { button.textContent = "Copy"; }, 1500);
    });
  });
});
