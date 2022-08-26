function addToQueueFilm(data) {
    localStorage.setItem("queueFilm", JSON.stringify(data));
    let listFilm = [];
    if(localStorage.getItem("queueFilm")) {
        listFilm = JSON.parse(localStorage.getItem('queueFilm'));
        console.log(listFilm);
    }
    };