let button = document.querySelector("#pokeName"); /* Enlazamos el botón */
let pokeInput = document.querySelector("#pokeValue");

button.addEventListener('click', event =>{ /* Creamos un escuchador de eventos */

    let pokeName = pokeInput.value;
    console.log(pokeInput.value);
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.other.home.front_default;
            pokeImage(pokeImg);

            let pokeNombre = document.getElementById("nombre");
            pokeNombre.textContent = data.name;

            let pokeHP = document.getElementById("hp");
            pokeHP.textContent = "HP: "+ data.stats[0].base_stat;
            pokeHP.style="background-color: blue"

            let pokeAttack = document.getElementById("attack");
            pokeAttack.textContent = "Attack: " + data.stats[1].base_stat;
            pokeAttack.style="background-color: red"

            let pokeDefense = document.getElementById("defense");
            pokeDefense.textContent = "Defense: "+ data.stats[2].base_stat;
            pokeDefense.style="background-color: green"


            console.log(pokeImg);
        }
    });
});

/*const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
        }
    });
}*/

let pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
