const intro = document.getElementById("intro");

const video = document.getElementById("videoIntro");

const btnEntrar = document.getElementById("btnEntrar");

btnEntrar.addEventListener("click", () => {

    video.play();

    btnEntrar.style.display = "none";

});

video.addEventListener("ended", () => {

    intro.style.display = "none";

});