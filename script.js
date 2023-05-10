
let inputTextArea = document.getElementById("input-textarea");
let characCount = document.getElementById("charac-count");
let wordCount = document.getElementById("word-count");


inputTextArea.addEventListener("input", wordCounter);

function wordCounter() {
    // value.length especifica la longitud máxima del valor en bytes
    // textContent establece o devuelve el contenido de texto del nodo especificado
    characCount.textContent = inputTextArea.value.length;
    // trim() elimina los espacios en blanco de ambos extremos de una cadena
    let txt = inputTextArea.value.trim();
    // txt.split(/\s+/) divide el arreglo en cada tipo de carácter de espacio en blanco (tab, salto de linea, etc)
    wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
}

wordCounter();