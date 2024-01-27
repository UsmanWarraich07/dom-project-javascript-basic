const height = document.getElementById('height');
const weight = document.getElementById('weight');
const calc = document.querySelector('button');
const result = document.getElementById('results');

calc.addEventListener('click', function (e) {
  e.preventDefault();
  const getHeight = parseInt((height.value / 100) * 2);
  const getWeight = parseInt(weight.value);

  if (getHeight == '' || getHeight < 0 || isNaN(getHeight)) {
    result.innerText = 'Plese enter a valid number.';
  } else if (getWeight == '' || getWeight < 0 || isNaN(getWeight)) {
    result.innerText = 'Plese enter a valid number.';
  } else {
    const calcBMI = Math.floor(getWeight / getHeight).toFixed(1);
    result.innerText = `Your BMI weight is " ${calcBMI} "`;
  }
});
