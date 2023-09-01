// Función que muestra y oculta un elemento
// Para que funcione se nesecita que el elemento que activará la función tenga la clase 'deplegar' y el atributo enlace que contendrá el id del elemeto a mostrar
const mostrarOcultar = (event) => {

    let element = document.querySelector(event.target.getAttribute('enlace'));
    console.log(element);

    if (element != null) {
        element.classList.toggle('show');
    }

}

function cambiarColor(){

    let color = true;

    return function() {
        if (color) {
            document.documentElement.style.setProperty('--rosa', '#CCB7B3');
            document.documentElement.style.setProperty('--verdeClaro', '#727D75');
            document.documentElement.style.setProperty('--verde', '#616F6D');
            document.documentElement.style.setProperty('--verdeOscuro', '#54645D');
            document.documentElement.style.setProperty('--blanco', '#2a2a34');
            document.documentElement.style.setProperty('--negro', '#121218');
            document.documentElement.style.setProperty('--letra', '#fefdfc');
            document.documentElement.style.setProperty('--fondoRosa', '#121218');
            document.documentElement.style.setProperty('--footer', '#444444');
            document.getElementById("modo").src = 'img/sun.svg';
            document.getElementById("btnMenu").src = 'img/menuClaro.svg';

            console.log('ModoOscuro');
        } else {
            document.documentElement.style.setProperty('--rosa', '#F4E7E3');
            document.documentElement.style.setProperty('--verdeClaro', '#C8DBCD');
            document.documentElement.style.setProperty('--verde', '#ACC4C0');
            document.documentElement.style.setProperty('--verdeOscuro', '#7E998D');
            document.documentElement.style.setProperty('--blanco', '#fefdfc');
            document.documentElement.style.setProperty('--negro', '#121218');
            document.documentElement.style.setProperty('--letra', '#121218');
            document.documentElement.style.setProperty('--fondoRosa', '#F4E7E3');
            document.documentElement.style.setProperty('--footer', '#e0e0e0');
            document.getElementById("modo").src = 'img/moon.svg';
            document.getElementById("btnMenu").src = 'img/menu.svg';
            console.log('ModoClaro');
        }

        color = !color;
    }
}

document.addEventListener('DOMContentLoaded', function(){

    document.querySelectorAll('.desplegar').forEach((element) => {
        element.addEventListener('click', mostrarOcultar);
    });

    document.getElementById('cambiarColor').addEventListener('click', cambiarColor());

    AOS.init();

})