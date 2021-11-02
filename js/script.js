// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
// in cui ogni cella contiene un numero tra quelli compresi in un range: con difficoltà 1  tra 1 e 100, con difficoltà 2  tra 1 e 81, con difficoltà 3  tra 1 e 49. => 

// Funzione che genera div con classe square: function elementoGen (elemento, classe); 
// var userDiffChoose = prompt;
// indiceCelle = 100; if (userDiffChoose === 2) { indiceCelle = 81}; if (userDiffChoose === 3) { indiceCelle = 49}; 
// for (let i = 0; i < indiceCelle; i++ ) 
// const squareCont = document.querySelectorAll(".square"); 
// if (indiceCelle === 81) { squareCont.width = "calc(100% / 9"; } else if (indiceCelle === 49) { squareCont.width = "calc(100% / 7)"}

const gridCont = document.getElementById("grid");
indiceCelle = 100;

function elementoGen(elemento, classe) {
    let nodo = document.createElement(elemento);
    nodo.classList.add(classe);
    gridCont.append(nodo);
    return nodo;
}

let userDiffChoose = prompt("Inserisci un numero di difficoltà da 1 a 3");
while ( (userDiffChoose != "1") && (userDiffChoose != "2") && (userDiffChoose != "3") ) {
    userDiffChoose = prompt("Inserisci un numero di difficoltà da 1 a 3");
}
console.log(userDiffChoose);


if (userDiffChoose === "2") {
    indiceCelle = 81;
} else if (userDiffChoose === "3") {
    indiceCelle = 49;
}
console.log(indiceCelle);


for (let i = 0; i < indiceCelle; i++) {
    // elementoGen("div", "square");
    elementoGen("div", "square").addEventListener("click",
        function () {
            this.classList.add("active");
        }
    ); 
}


let squareCont = document.querySelectorAll(".square");

for (let i = 0; i < indiceCelle; i++) {
    if (indiceCelle === 81) {
        squareCont[i].style.width = "calc(100% / 9)";
    } else if (indiceCelle === 49) {
        squareCont[i].style.width = "calc(100% / 7)";
    }
}

