const reveal = [...document.querySelectorAll('.reveal')];

document.addEventListener('scroll', showHiddenElement);

function showHiddenElement() {
  const windowHeight = window.innerHeight;
  reveal.forEach((el) => {
    const currentPosition = el.getBoundingClientRect().top;
    if (windowHeight > currentPosition) {
      el.classList.add('reveal_active');
    }
  });
}