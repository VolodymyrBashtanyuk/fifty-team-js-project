import getQueueData from "./getQueueData"
import getWatchedData from "./getWatchedData"

export default function findFilmByIdLs(id) {
    const films = [...getQueueData(), ...getWatchedData()]
    const film = films.find((film) => film.id == id)
    return film
}
