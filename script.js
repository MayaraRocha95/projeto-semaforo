const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

const trafficLight = (event) => {
   stopAutomatic();
 turnOn[event.target.id]();
}

const nextIndex = () => {
  if( colorIndex < 2){
    colorIndex++
  }else {
    colorIndex = 0;
  }
}
const changecolor = () => {
  const colors = ['red', 'green', 'yellow']
  const color = colors[ colorIndex ]; //chamando funções de forma dinamica
  turnOn[color]();
  nextIndex();
}
const stopAutomatic = () => {
  clearInterval( intervalId );
}
const turnOn = { //funções dentro de objeto
  'red': () => img.src = '/imagens/vermelho.png',
  'yellow': () => img.src = '/imagens/amarelo.png',
  'green': () => img.src = '/imagens/verde.png',
  'automatic': () => intervalId = setInterval( changecolor, 1000) 
}

buttons.addEventListener('click', trafficLight);