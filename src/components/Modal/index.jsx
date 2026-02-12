import { useEffect, useState } from "react";
import { Background, Container } from "./styles";
import api from "../../services/api";

function Modal({ movieId, setShowModal }) { // Desestruturando o props para pegar apenas o children
    const [movie, setMovie] = useState()

    useEffect(() => {
        async function getMovies() {
            const { data: { results }
            } = await api.get(`/movie/${movieId}/videos`) //desestruturar a resposta da API

            setMovie(results[0])
        }

        getMovies()
    }, []) // Colocar o movieId como dependência para que a função seja chamada toda vez que o movieId mudar

    return (
        <Background onClick={() => setShowModal(false)}>
            {movie && (
                <Container>
                    <iframe
                        src={`https://www.youtube.com/embed/${movie.key}`}
                        title="Youtube Video Player"
                        height="500px"
                        width="100%"></iframe>
                </Container>
            )}
        </Background>
    )
}

export default Modal;