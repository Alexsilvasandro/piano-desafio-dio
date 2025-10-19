const pianoKeys = document.querySelectorAll(".piano-keys .key");
let mapedKeys = [];
let audio = new Audio("./src/tunes/a.wav");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".keys-check input");

const playTune = (key) => {
    audio.src = `./src/tunes/${key}.wav`;
    audio.play();
    const clickedKey = document.querySelector(`.piano-keys .key[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};

pianoKeys.forEach((key) => {
    console.log(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key)) {
        playTune(e.key);
    }
});

// Função para ajustar o volume do áudio
const handleVolume = (e) => {
    audio.volume = e.target.value / 100;
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

volumeSlider.addEventListener("input", handleVolume);

keysCheckbox.addEventListener("click", showHideKeys);