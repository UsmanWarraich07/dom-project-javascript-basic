const start = document.getElementById('start'),
  stop = document.getElementById('stop');
start.addEventListener('click', function () {
  const myInterval = setInterval(() => {
    const hexColor = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexColor[Math.floor(Math.random() * 16)];
      continue;
    }
    document.body.style.backgroundColor = color;
  }, 1000);
  stop.addEventListener('click', function () {
    clearInterval(myInterval);
  });
});
