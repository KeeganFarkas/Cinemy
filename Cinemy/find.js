const resultsList = document.querySelector(".results__list");
const resultsSearched = document.querySelector(".results__searched");
let userSearch = "batman";

async function registerResults(event) {
  if (localStorage.getItem("search")) {
    userSearch = localStorage.getItem("search");
    localStorage.clear();
  }

  if (event) {
    userSearch = event.path[2][0].value;
  }

  resultsSearched.innerHTML = `Search Results: <span class="blue">${userSearch}</span>`;

  userSearch = userSearch.split(" ").join("");

  resultsList.classList += " .results__loading";
  const movieResults = await fetch(
    `https://omdbapi.com/?apikey=f696630&s=${userSearch}`
  );
  const movieResultsData = await movieResults.json("");
  resultsList.classList.remove(".results__loading");

  if (movieResultsData.Response === "False") {
    resultsList.innerHTML = `<h2 class="results__none">Sorry, no results found.</h2>`;
  } else {
    resultsList.innerHTML = movieResultsData.Search.map((movie) =>
      resultHTML(movie)
    ).join("");
  }
}

function resultHTML(movie) {
  return `<div class="result" onclick="notImplemented()">
              <figure class="result__img--wrapper">
              <img
                  src="${movie.Poster}"
                  alt=""
                  class="result__img"
              />
              </figure>
              <div class="result__description">
              <h3 class="result__title blue">
                  ${movie.Title}
              </h3>
              <p class="result__type">${movie.Type}</p>
              <p class="result__year blue">${movie.Year}</p>
              </div>
          </div>`;
}

registerResults();
