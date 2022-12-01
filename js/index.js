const name = document.getElementById("name");
const eyecolor = document.getElementById("eyecolor");
const button = document.querySelector(".getRandomCharacter");

button.addEventListener('click',(e) => {
    e.preventDefault()
    const randomNumber =  Math.ceil(Math.random() * 83)
    fetch(`https://swapi.dev/api/people/${randomNumber}/`)
        .then(response => response.json())
        .then(character => {
            name.innerHTML = character['name'];
            eyecolor.innerHTML = character['eye_color'];
        })
})       
