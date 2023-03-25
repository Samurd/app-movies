const slides = document.querySelectorAll(".slide")
const imgsSlide = document.querySelectorAll(".img-slide")
const titles = document.querySelectorAll(".title")
const descs = document.querySelectorAll(".description")
const btnR = document.querySelector(".btnR button")
const btnL = document.querySelector(".btnL button")
let current = 0;


async function callApiRenderMainMovies () {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=3fd98058cfc374cfff84bc470ea77e90');
        console.log(response);
        const date = await response.json();
        const dateResults = await date.results;
        console.log(dateResults)
        imgsSlide[0].src = `https://image.tmdb.org/t/p/w500/${dateResults[0].backdrop_path}`
        titles[0].textContent = `${dateResults[0].title}`
        descs[0].textContent = `${dateResults[0].overview}`
        console.log(imgsSlide)
        imgsSlide[1].src = `https://image.tmdb.org/t/p/w500/${dateResults[1].backdrop_path}`
        titles[1].textContent = `${dateResults[1].title}`
        descs[1].textContent = `${dateResults[1].overview}`
        imgsSlide[2].src = `https://image.tmdb.org/t/p/w500/${dateResults[2].backdrop_path}`
        titles[2].textContent = `${dateResults[2].title}`
        descs[2].textContent = `${dateResults[2].overview}`
        console.log(slides)

    } catch(error) {
        console.log(error);
    }
}

callApiRenderMainMovies();

function cls() {
    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
}

btnR.addEventListener("click", next);

function next() {
    cls();
    if(current === slides.length - 1) current = - 1;
    current++

    slides[current].style.display = 'block'
}

btnL.addEventListener("click", prev);

function prev() {
    cls();
    if(current === 0) current = slides.length;
    current--;

    slides[current].style.display = 'block'
    slides[current].style.transition = "500s ease-in"
}

function start() {
    cls();
    slides[current].style.display = 'block';
}

start()

