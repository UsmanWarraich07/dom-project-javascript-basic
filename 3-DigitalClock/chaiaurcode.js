const time = document.getElementById('clock');

setInterval(() => {
  time.innerText = new Date().toLocaleTimeString();
}, 1000);
