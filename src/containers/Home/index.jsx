import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Background, Container, ContainerButton, Info, Poster } from './styles';
import Button from '../../components/Button';
import Slider from '../../components/Slider';
import { getImages } from '../../utils/getImages';
import Modal from '../../components/Modal';
import { getMovies, getTopMovies, getTopSeries, getPopularSeries, getTopPeople } from '../../services/getData';

function Home() {
    const [movie, setMovie] = useState()
    const [showModal, setShowModal] = useState(false)
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [topPeople, setTopPeople] = useState()
    const navigate = useNavigate()

       useEffect(() => {
        async function getAllData() {
            Promise.all([
                getMovies(),
                getTopMovies(),
                getTopSeries(),
                getPopularSeries(),
                getTopPeople()
            ]).then(([movie, topMovies, topSeries, popularSeries, topPeople]) => {
                setMovie(movie)
                setTopMovies(topMovies)
                setTopSeries(topSeries)
                setPopularSeries(popularSeries)
                setTopPeople(topPeople)
            }).catch((error) => console.error(error))
        }
        
        getAllData()
    }, [])

    return (
        <>
            {movie && (
                <Background img={getImages(movie.backdrop_path)}>
                    {showModal && <Modal movieId={movie.id} setShowModal={setShowModal} />}
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButton>
                                <Button red={true} onClick={() => navigate(`/detalhe/${movie.id}`)}>Assista Agora</Button>
                                <Button red={false} onClick={() => setShowModal(true)}>Assista o Trailer</Button>
                            </ContainerButton>
                        </Info>
                        <Poster>
                            <img src={getImages(movie.poster_path)} alt="capa-do-filme" />
                        </Poster>
                    </Container>
                </Background>
            )}
            {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
            {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
            {popularSeries && <Slider info={popularSeries} title={'Séries Populares'} />}
            {topPeople && <Slider info={topPeople} title={'Top Artistas'} />}
        </>
    )
}

export default Home;