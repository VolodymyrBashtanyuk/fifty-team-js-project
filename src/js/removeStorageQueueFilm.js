function removeStorageQueueFilm(id) {
    localStorage.setItem("queueFilm", JSON.stringify(JSON.parse(localStorage.getItem('queueFilm') ?? '[]')
  .filter((item) => item.id !== id))
    );
  };