const collected = 'https://jsonplaceholder.typicode.com/posts';

fetch(collected)
  .then((res) => res.json())
  .then((data) => displayData(data));

// selection
const items = document.getElementById('items');
// div.setAttribute('class','border')
// div.setAttribute('class', 'border mt-5');

function displayData(data) {
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    // console.log(element);

    // create elements
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const list = document.createElement('div');
    // set inner text
    h3.innerText = element.title;
    p.innerText = element.body;
    // css added
    // div.setAttribute('class', 'border mt-5');
    h3.setAttribute('class', 'text-primary');
    p.setAttribute('class', 'text-danger-emphasis');
    list.setAttribute('class', 'border mt-5 p-3 rounded shadow');

    // show to browser and where
    list.appendChild(h3);
    list.appendChild(p);
    items.appendChild(list);
  }
}

// function sendData(a,b) {
//   console.log('display data');
// }

// sendData(2,5);

//   const vehicles = ['oddi','farari','sdf','asfsf']
// const vehicles = {
//   type: 'Fiat',
//   model: '500',
//   color: 'white',
// };

// console.dir(vehicles.model);

// const numbers = [2, 3, 4,7 , 4, 6, 7, 4, 9, 09, 9, 8, 9, 9];
// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i];
//   console.log(element);
// }
