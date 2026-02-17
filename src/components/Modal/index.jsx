import { useEffect, useState } from "react";
import { Background, Container } from "./styles";
import { getMovieVideos } from "../../services/getData";

function Modal({ movieId, setShowModal }) { // Desestruturando o props para pegar apenas o children
    const [movie, setMovie] = useState()

    useEffect(() => {
        async function getMovies() {
            setMovie(await getMovieVideos(movieId))
        }

        getMovies()
    }, []) // Colocar o movieId como dependência para que a função seja chamada toda vez que o movieId mudar

        
    return (
        <Background onClick={() => setShowModal(false)}>
            {movie && (
                <Container>
                    <iframe
                        src={`https://www.youtube.com/embed/${movie[0].key}`}
                        title="Youtube Video Player"
                        height="500px"
                        width="100%"></iframe>
                </Container>
            )}
        </Background>
    )
}

export default Modal;