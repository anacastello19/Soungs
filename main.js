//Funcion
function playSonido(idElementAudio){
    document.querySelector(idElementAudio).play();
}
//lista que selecciona a todas las clases tecla
const listTeclas= document.querySelectorAll('.tecla');

for(let contador = 0; contador < listTeclas.length; contador++){
    const tecla = listTeclas[contador];
    const instrumento = tecla.classList[1];
    console.log(contador)

    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio)

    tecla.onclick = function (){
        playSonido(idAudio);
    };
    tecla.onkeydown = function(evento){
        console.log(evento.code==='Space' || evento.code === 'Enter')// ||= or
        if(evento.code==='Space'){
            tecla.classList.add('activa');
        }
        
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('activa');

    }
    // Agregue el código necesario aquí para eliminar la clase 'activa' tan pronto como la tecla deje de ser presionada.
}






//variable contador
//let contador=0;

//Funcion mientras, la condicion es que contador es menor q 9(es el numero de elemento que tiene la list)
// while (contador < 9){

    // const tecla= listTeclas[contador];
    // const instrumento= tecla.classList[1];

    // const idAudio= `#sonido_${instrumento}`;
    // console.log(idAudio);

    // tecla.onclick= function(){
    //     playSonido(idAudio)
    // };
     //Con la condicon, contador era dando vuelta del 0 he ira sumando hasta el 9
//     contador = contador + 1;
// }
