const keyInsert = document.getElementById('insert');

window.addEventListener('keypress', function (evant) {
  const keyName = evant.key;
  let keys = [];
  keys.push(keyName);
  //let keysArr = Array.from(keys);
  //console.log(keys);

  keyInsert.innerHTML += `
    <table>
        <tr colspan="6">
          <td>${keys}</td>
        </tr>
    </table>
  `;
});
