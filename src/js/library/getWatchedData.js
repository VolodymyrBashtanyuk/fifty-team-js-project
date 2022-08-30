export function getWatchedData() {
    try {
        const watched = JSON.parse(localStorage.getItem('filmsWatched')) 
        return watched
    } catch (error) {
        console.log(error);
    }
}