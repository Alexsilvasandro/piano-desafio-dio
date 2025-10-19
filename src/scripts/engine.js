const pianoKeys = document.querySelectorAll(".piano-keys .key");
let mapedKeys = [];
let audio = new Audio("./src/tunes/a.wav");

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

    const key = e.key;
    pianoKeys.forEach((pianoKey) => {
        if (pianoKey.dataset.key === key) playTune(key);
    });
});