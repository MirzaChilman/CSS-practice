(() => {
  const container = document.getElementsByClassName('container');
  container[0].addEventListener('click', sideActive);
  function sideActive() {
    this.classList.toggle('change');
  }
})();
