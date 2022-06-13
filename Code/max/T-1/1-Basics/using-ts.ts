const num1 = document.querySelector('#num1')! as HTMLInputElement;
const num2 = document.querySelector('#num2')! as HTMLInputElement;
const btn = document.querySelector('button')! as HTMLElement;
const result = document.querySelector('p')! as HTMLElement;

function add(num1: number, num2: number) {

  return num1 + num2
}

btn.addEventListener('click', () => {

  console.log(add(+num1.value, +num2.value))
})

