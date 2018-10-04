const inp = document.getElementById('validMe');
inp.addEventListener('blur', validateMe);
function validateMe() {
  const regex = /[0-9]{4,4}[-][a-d]{2,}/gm;
  const str = inp.value;
  let m;

  while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      console.log('asd');
      regex.lastIndex++;
    }

    // The result can be accessed through the `m`-variable.
    m.forEach(() => {
      inp.setAttribute('class', 'error');
      inp.setAttribute('disabled', 'disabled');
    });
  }
}
