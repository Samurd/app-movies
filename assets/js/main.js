const slides = document.querySelectorAll(".slide")
const imgsSlide = document.querySelectorAll(".img-slide")
const titles = document.querySelectorAll(".title")
const descs = document.querySelectorAll(".description")
const description = document.querySelector(".description")
const btnR = document.querySelector(".btnR button")
const btnL = document.querySelector(".btnL button")
const btnLLatest = document.querySelector(".btnL-latest button")
const btnRLatest = document.querySelector(".btnR-latest button")
const containerUpComing = document.querySelector(".container-upcoming")
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


async function callApiRenderUpComingMovies () {
    try {
        const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=3fd98058cfc374cfff84bc470ea77e90")
        console.log(response)
        const data = await response.json();
        const dataResults = await data.results
        console.log(dataResults)
        let moviesUpcoming = ''
        dataResults.forEach(movie => {
            moviesUpcoming = moviesUpcoming + `<div class="card-upcoming">
            <img class="img-card-upcoming" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="">
            <h3 class="title-upcoming">${movie.title}</h3>
        </div>`
        });

        containerUpComing.innerHTML = moviesUpcoming;

    } catch (error) {
        console.log(error);
    }
}

callApiRenderUpComingMovies()


btnLLatest.addEventListener("click", latestScrollLeft)

function latestScrollLeft() {

    containerUpComing.scrollLeft -= document.querySelector(".img-card-upcoming").offsetWidth + 12;

}

btnRLatest.addEventListener("click", latestScrollRight)

function latestScrollRight() {

    containerUpComing.scrollLeft += document.querySelector(".img-card-upcoming").offsetWidth + 12;
}

function cls() {
    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
}

setInterval(() => {
    next()
}, 5000)

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

