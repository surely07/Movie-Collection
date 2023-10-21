const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzUzMjBkNzY3YzgwZGEwZDU0ZDlkMjQxMjdlOWVkOSIsInN1YiI6IjY1MmZjOGM3MzU4ZGE3NWI2MWZhMDRlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uj9aWONZob_7Jpf-N2mmPcPhP4I0g9jVTWaqGFETuaE'
    }
};



const data = fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
        let result = response.results
        result.forEach((a) => {
            console.log(a);
            addMovie(a);
        })
        return data;
    })
    .catch(err => console.error(err));

function addMovie(movie) {
    const img = 'https://image.tmdb.org/t/p/w300' + movie['poster_path'];
    const title = movie['title'];
    const va = movie['vote_average'];
    const overview = movie['overview'];
    const idA = movie['id'];

    const card = document.createElement('div');
    const imgEle = document.createElement('img');
    const titleEle = document.createElement('h2');
    const vaEle = document.createElement('h5');
    const explEle = document.createElement('p');

    imgEle.src = img;
    titleEle.textContent = title;
    vaEle.textContent = va;
    explEle.textContent = overview;

    card.append(imgEle, titleEle, vaEle, explEle);

    document.getElementById('movies-container').append(card);
    card.addEventListener('click', () => {
      alert("That Movie's ID is : " + idA + " , Thank you");
})}

    // let cardGrid = document.querySelector(".card-grid");
    // for (const tt of movie) {
    //     console.log(cardGrid);

    //     let title = movie.title;
    //     let rating = movie.rating;
    //     let medium_cover_image = movie.medium_cover_image;

    //     let newMovie = document.createElement("div");
    //     newMovie.className = "card";
    //     newMovie.style = "width:300px";
    //     let cardImg = `<img class='card-img-top' src='${medium_cover_image}' alt='Card image'><div class='card-body'><h4 class='card-title'>${title}</h4><p class='card-text'>평점 ${rating}</p><button class='btn btn-danger'>영화 삭제</button></div>`;
    //     newMovie.innerHTML = cardImg;

    //     cardGrid.append(newMovie);
    







// function addMovie(movie) {
//   const div = document.createElement("div")
//   div.classList.add("movieInfo")
// }



// div.innerHTML = `<div class="movie-card__poster">
//   <img src=https://image.tmdb.org/t/p/w500${poster_path} /></div>
// <div class="movie-card__content">
//   <div class="movie-card__title">${movie.title}</div>
//   <div class="movie-card__overview">${movie.overview}</div>
//   <div class="movie-card__vote-average">Ratings : ${movie.vote_average}</div>
// </div>`;


//   div.addEventListener("click", () => alert(`영화 id : ${movie.id}`));
//   div.id = movie.id;
//   movieCards.append(div);
