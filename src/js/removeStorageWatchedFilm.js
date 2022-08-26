
 function removeStorageWatchedFilm(id) {
    localStorage.setItem("watchedFilm", JSON.stringify(JSON.parse(localStorage.getItem('watchedFilm') ?? '[]')
  .filter((item) => item.id !== id))
    );
  };
  