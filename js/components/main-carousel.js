// 1 Acessar a Janela (browser) == window
// 2 Pegar HTML todo == .document
// 3 Pegar o Botão == .querySelector(Mesma declaração realizada no css);
// 4 Saber que está sendo clicado no botão == variável.addEventListener('click', function(){})
// 5 Acessar a Janela (browser)
// 6 Pegar HTML todo
// 7 Pegar elements
// 8 Mover o elements para a direita
// const == declaração de variável (não pode alterar o valor da variável declarada)
// let == variável que pode ser alterado o valor
const btnRight = window.document.querySelector('.button-arrow.-right'); //declarando váriavel Botão Direito
const btnLeft = document.querySelector('.button-arrow.-left');
const elements = window.document.querySelector('.elements');
let pixels = 0;
let pixels1 = 0;

btnRight.addEventListener('click', function() {
    pixels = pixels + 10;
    elements.style = `transform: translateX(${pixels}px)`;
});

btnLeft.addEventListener('click', function() {
    pixels = pixels - 10;
    elements.style = `transform: translateX(${pixels}px)`;
});
