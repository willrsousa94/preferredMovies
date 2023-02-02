preferredMovies.forEach(function (el, i) {
  document
    .querySelector("section")
    .insertAdjacentHTML(
      "beforebegin",
      `<img src=${preferredMovies[i]} alt="Filme ${i}">`
    );
});
