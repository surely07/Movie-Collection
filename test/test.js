const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzUzMjBkNzY3YzgwZGEwZDU0ZDlkMjQxMjdlOWVkOSIsInN1YiI6IjY1MmZjOGM3MzU4ZGE3NWI2MWZhMDRlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uj9aWONZob_7Jpf-N2mmPcPhP4I0g9jVTWaqGFETuaE'
    }
};


fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        const result = response.results;
        result.forEach((movie) => {
            addMovie(movie);
        });
    })
    .then(() => { // 이걸 몰라서 고통받음.
        searchMovie();
    })
    .catch((err) => console.error(err));

function searchMovie() {
    const movieCard = movieCards.querySelectorAll(".movie-card");
    const searchValue = document.getElementById("search__value");
    const searchBtn = document.querySelector(".search__btn");

    function handleSearch(e) {
        e.preventDefault();
        let value = searchValue.value;
        movieCard.forEach((element) => {
            element.classList.remove("hidden");
            let movieTitle = element.childNodes[2].childNodes[1].innerText;
            if (!movieTitle.toLowerCase().includes(value)) {
                element.classList.add("hidden");
            }
        });
    }
    searchBtn.addEventListener("click", handleSearch);
}