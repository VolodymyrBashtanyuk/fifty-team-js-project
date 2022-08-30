export function getWatchedData() {
    try {
        const watched = JSON.parse(localStorage.getItem('filmsWatched')) 
        console.log(watched);
        return watched
    } catch (error) {
        console.log(error);
    }
}