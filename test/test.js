
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const movieList = document.getElementById("movieList");

    searchButton.addEventListener("click", function () {
        const searchTerm = searchInput.value;
        // 사용자 입력을 검색어로 TMDb API에 보내고 결과를 처리하는 코드를 작성하세요.
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const movieList = document.getElementById("movieList");

    const apiKey = '835320d767c80da0d54d9d24127e9ed9';

    searchButton.addEventListener("click", function () {
        const searchTerm = searchInput.value;
        
        if (searchTerm.trim() === "") {
            alert("검색어를 입력하세요.");
            return;
        }

        const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                movieList.innerHTML = ''; // 이전 검색 결과를 지우기

                const movies = data.results;

                if (movies.length === 0) {
                    movieList.innerHTML = '검색 결과가 없습니다.';
                    return;
                }

                movies.forEach(movie => {
                    const movieItem = document.createElement("div");
                    movieItem.innerHTML = `
                        <h2>${movie.title}</h2>
                        <p>개봉일: ${movie.release_date}</p>
                        <p>평점: ${movie.vote_average}</p>
                        <p>${movie.overview}</p>
                    `;
                    movieList.appendChild(movieItem);
                });
            })
            .catch(error => {
                console.error('에러:', error);
            });
    });
});
