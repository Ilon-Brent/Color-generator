// let colorName = document.getElementById('colorName');
// let colorBlock = document.getElementById('colorBlock');
let colorButton = document.getElementById('colorButton');

colorButton.addEventListener('click',generate);

function generate(elem) {
    let element = document.getElementById('colorBlock');
    let block = document.getElementById('colorName');
    r = Math.floor(Math.random() * (256)),
    g = Math.floor(Math.random() * (256)),
    b = Math.floor(Math.random() * (256)),
    color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

    element.style.background = color;
    block.innerHTML = color;
}
