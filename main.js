// 영화DB 시작
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzUzMjBkNzY3YzgwZGEwZDU0ZDlkMjQxMjdlOWVkOSIsInN1YiI6IjY1MmZjOGM3MzU4ZGE3NWI2MWZhMDRlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uj9aWONZob_7Jpf-N2mmPcPhP4I0g9jVTWaqGFETuaE'
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
// 영화DB 끝


<ul>
  {data ? (
   data.results.map((movie) => (
     <li key={movie.id}>
       <img src={getImageUrl(movie.poster_path)}
            alt="movie poster"
       />
       <p>{movie.title}</p>
       <p>{movie.vote_average}</p>
	</li>
   ))
  ) : (
  <h1>Loading...</h1>
  )}
</ul>