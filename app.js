// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//document.addEventListener("DOMContentLoaded", () => {
    {
    const nameInput = document.getElementById("amigo");
    const addButton = document.querySelector(".button-add");
    const drawButton = document.querySelector(".button-draw");
    const nameList = document.getElementById("listaAmigos");
    const resultDisplay = document.getElementById("resultado");
    
    let friends = [];

    window.agregarAmigo = function() {
        const name = nameInput.value.trim(); //Se agrega .trim para eliminar espacios en blanco y evitar errores.
        if (name === "") {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }
        friends.push(name);
        updateNameList();
        nameInput.value = "";
        console.log(name) //Se coloca console.log para verificar el nombre en la consola.
        
    };

    window.sortearAmigo = function() {
        if (friends.length === 0) {
            alert("La lista está vacía. Agrega al menos un nombre.");
            return;
        }
        const randomIndex = Math.floor(Math.random() * friends.length);
        resultDisplay.innerHTML = `<li>El amigo secreto es: ${friends[randomIndex]}</li>`;
        console.log(friends[randomIndex]);
    };

    function updateNameList() {
        nameList.innerHTML = "";
        friends.forEach(name => {
            const listItem = document.createElement("li");
            listItem.textContent = name;
            nameList.appendChild(listItem);
        });
    }
};
