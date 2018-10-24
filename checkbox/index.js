const check = document.querySelectorAll('input[type="checkbox"]');
const a = document.getElementsByName('checkbox__ku');
const lbl = document.querySelectorAll('.custom__label');

function ulala() {
  if (a[0].checked === true) {
    lbl[0].classList.add('show');
  } else {
    lbl[0].classList.remove('show');
  }

  if (check[0].checked === true) {
    console.log('checked');
  } else {
    console.log('not checked');
  }
}

a[0].addEventListener('click', ulala);
