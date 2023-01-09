const header = document.querySelector('header');

document.querySelectorAll("nav a").forEach(button => {
  button.addEventListener("click", e => {
    e.preventDefault();

    let href = e.target.getAttribute("href");
    let section = document.getElementById(href);
    let closeButton = section.childNodes[1].childNodes[1];

    header.style.display = 'none';

    if (section) {
      section.classList.toggle("show");
      closeButton.addEventListener('click', e => {
        e.target.parentNode.parentNode.classList.toggle("show");
 
        header.style.display = 'flex';
      }, { once: true });
    }
  });
});