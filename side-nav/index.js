(() => {
  const containerBar = document.getElementsByClassName('container--bar');
  containerBar[0].addEventListener('click', sideAnimation);
  function sideAnimation() {
    const containerNav = document.getElementsByClassName('container--side-nav');
    if (containerNav[0].style.marginLeft === '170px') {
      containerNav[0].style.marginLeft = '0';
    } else {
      containerNav[0].style.marginLeft = '170px';
    }
  }

  const secondLevel = document.getElementsByClassName('side-level2');
  secondLevel[0].addEventListener('click', showLevel2);
  function showLevel2() {
    const containerNav = document.getElementsByClassName('container--side-nav');
    if (containerNav[0].style.marginLeft === '240px') {
      containerNav[0].style.marginLeft = '170px';
    } else {
      containerNav[0].style.marginLeft = '240px';
    }
  }

  const subLevel = document.getElementsByClassName('side-sub');
  subLevel[0].addEventListener('click', showSub);
  function showSub() {
    const sideSub = document.getElementsByClassName('side-sub--level');
    sideSub[0].classList.toggle('show-sub-level');
  }
})();
