import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const corazones = {
  nombre: 'corazon',
  icono: '♥',
  color: 'red'
}
const diamantes = {
  nombre: 'diamante',
  icono: '♦',
  color: 'red'
}
const picas = {
  nombre: 'picas',
  icono: '♠',
  color: 'Black'
}
const treboles = {
  nombre: 'trebol',
  icono: '♣',
  color: 'Black'
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generarCarta(){
  
  let cartas =[corazones,diamantes,picas,treboles];
  let valoresCarta=["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
  let carta = cartas [getRandomInt(4)];
  let valorCarta=valoresCarta[getRandomInt(13)];

  let iconos = document.getElementsByClassName("icono");
  
  iconos[0].innerText=carta.icono;
  iconos[0].style.color=carta.color;

  iconos[1].innerText=carta.icono;
  iconos[1].style.color=carta.color;

  let valor = document.getElementsByClassName("valor");
  valor[0].innerText=valorCarta;
  valor[0].style.color=carta.color;

}

function escalarCarta(){
  let width = document.getElementById("inputWidth");
  let heigth = document.getElementById("inputHeight");
  let elemento = document.getElementsByClassName("card");
  console.dir(elemento);
  let newWidth = Number(width.value)/200;
  let newHeight = Number(heigth.value)/300;
  let comandoEscalar = `scale(${newWidth},${newHeight})`;
  console.log(comandoEscalar);
  elemento[0].style.transform = comandoEscalar;
  /*elemento[0].style.width= width;
  elemento[0].style.height= heigth;*/
}

window.onload = function() {
  //write your code here
  let boton = document.getElementsByTagName("button");
  
  boton[0].addEventListener("click",escalarCarta);
  boton[1].addEventListener("click",generarCarta);

  generarCarta();
  setInterval(generarCarta,10000);  

};

