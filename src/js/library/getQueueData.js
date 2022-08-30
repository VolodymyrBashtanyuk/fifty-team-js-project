export default function getQueueData() {
    try {
        const watched = JSON.parse(localStorage.getItem('filmsQueue')) 
        return watched
    } catch (error) {
        console.log(error);
    }
}
