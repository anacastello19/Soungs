//Funcion
function playSonido(idElementAudio){
    document.querySelector(idElementAudio).play();
}
//lista que selecciona a todas las clases tecla
const listTeclas= document.querySelectorAll('.tecla');

//variable contador
let contador=0;

//Funcion mientras, la condicion es que contador es menor q 9(es el numero de elemento que tiene la list)
while (contador < 9){

    const tecla= listTeclas[contador];
    const instrumento= tecla.classList[1];

    const idAudio= `#sonido_${instrumento}`;
    console.log(idAudio);

    tecla.onclick= function(){
        playSonido(idAudio)
    };
    //Con la condicon, contador era dando vuelta del 0 he ira sumando hasta el 9
    contador = contador + 1;
}
