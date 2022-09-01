export default function getQueueData() {
    try {
        const watched = JSON.parse(localStorage.getItem('filmsQueue')) || [];
        if (watched === null) {
            return [];
        }
        return watched;
    } catch (error) {
        console.log(error);
    }
}
