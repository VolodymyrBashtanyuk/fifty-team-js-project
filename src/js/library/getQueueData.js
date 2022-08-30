export default function getQueueData() {
    try {
        const watched = JSON.parse(localStorage.getItem('filmsQueue')) 
        console.log(watched);
        return watched
    } catch (error) {
        console.log(error);
    }
}
