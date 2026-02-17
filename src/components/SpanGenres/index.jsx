import { Container } from "./styles";

function SpanGenres({ genres }) { // Desestruturando o props para pegar apenas o children

    return (

        <Container>
            {genres &&
                genres.map((genre) => <span key={genre.id}>{genre.name}</span>)}
        </Container>
    )
}

export default SpanGenres;