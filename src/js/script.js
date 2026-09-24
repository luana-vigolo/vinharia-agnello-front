const intro = document.getElementById("intro");

const video = document.getElementById("videoIntro");

const btnEntrar = document.getElementById("btnEntrar");

const btnFechar = document.getElementById("btnFechar");


btnEntrar.addEventListener("click", () => {

    video.play();

    btnEntrar.style.display = "none";

});

btnFechar.addEventListener("click", () => {
    video.pause();
    video.currentTime = 0;
    intro.style.display = "none";
});

video.addEventListener("ended", () => {

    intro.style.display = "none";

});