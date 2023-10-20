const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzUzMjBkNzY3YzgwZGEwZDU0ZDlkMjQxMjdlOWVkOSIsInN1YiI6IjY1MmZjOGM3MzU4ZGE3NWI2MWZhMDRlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uj9aWONZob_7Jpf-N2mmPcPhP4I0g9jVTWaqGFETuaE'
  }
};



fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(data => {
    const moviesContainer = document.getElementById('movies-container');

    data.results.forEach(movie => {
      const card = document.createElement('div');
      card.classList.add('movie-card');

      const img = document.createElement('img');
      img.src = 'https://image.tmdb.org/t/p/w300' + movie['poster_path'];

      const title = document.createElement('h2');
      title.textContent = movie['title'];

      const rating = document.createElement('h5');
      rating.textContent = '⭐ Rating: ' + movie['vote_average'];

      const overview = document.createElement('p');
      overview.textContent = movie['overview'];

      card.append(img, rating, title, overview);
      moviesContainer.appendChild(card);

      card.addEventListener('click', () => {
        alert("Movie's ID : " + movie['id']);
      });
    });
  })
  .catch(err => console.error(err));






// // 검색기능 구현
// const searchInput = document.getElementById('search-input');
// const searchButton = document.getElementById('search-btn');
// const movieCards = document.querySelectorAll('.movie-card');

// function performSearch() {
//   const searchText = searchInput.value.toLowerCase();
//   const title = card.querySelector('h2').textContent.toLowerCase();

//   movieCards.forEach(card => {
//     if (title.includes(searchText)) {
//       card.style.display = 'block';
//     } else {
//       card.style.display = 'none';
//     }
//   })
// }

// // 검색 버튼 클릭시 함수 실행
// searchButton.addEventListener('click', function () {
//   console.log("확인")
//   performSearch();
// });

// // 인풋 상자에서 엔터키 누르면 검색 실행
// searchInput.addEventListener('keydown', function (event) {
//   if (event.key === 'Enter') {
//     performSearch();
//   }
// });