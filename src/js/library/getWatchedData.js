export default function getWatchedData() {
    try {
        const watched = JSON.parse(localStorage.getItem('filmsWatched'));
        if (watched === null) {
            return [];
        }
        return watched;
    } catch (error) {
        console.log(error);
    }
}
