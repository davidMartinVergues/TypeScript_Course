var num1 = document.querySelector('#num1');
var num2 = document.querySelector('#num2');
var btn = document.querySelector('button');
var result = document.querySelector('p');
function add(num1, num2) {
    return num1 + num2;
}
btn.addEventListener('click', function () {
    console.log(add(+num1.value, +num2.value));
});
