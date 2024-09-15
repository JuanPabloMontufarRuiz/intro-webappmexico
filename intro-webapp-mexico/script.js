// Obtener los sliders y los cuadros de color
const greenSlider = document.getElementById("greenSlider");
const redSlider = document.getElementById("redSlider");

const box1 = document.getElementById("box1");
const box3 = document.getElementById("box3");

const hexCodeGreen = document.getElementById("hexCodeGreen");
const hexCodeWhite = document.getElementById("hexCodeWhite");
const hexCodeRed = document.getElementById("hexCodeRed");

// Actualizar los colores y el código hexadecimal
function updateColors() {
    const green = greenSlider.value;
    const red = redSlider.value;

    // Aplicar los colores a los recuadros
    box1.style.backgroundColor = `rgb(0, ${green}, 0)`;
    box3.style.backgroundColor = `rgb(${red}, 0, 0)`;

    // Convertir los valores a hexadecimal
    const hexGreen = parseInt(green).toString(16).padStart(2, '0');
    const hexRed = parseInt(red).toString(16).padStart(2, '0');

    // Actualizar el texto con los códigos hexadecimales
    hexCodeGreen.textContent = `#00${hexGreen}00`;
    hexCodeRed.textContent = `#${hexRed}0000`;
}

// Agregar eventos a los sliders
greenSlider.addEventListener("input", updateColors);
redSlider.addEventListener("input", updateColors);

// Iniciar con colores predeterminados
updateColors();
