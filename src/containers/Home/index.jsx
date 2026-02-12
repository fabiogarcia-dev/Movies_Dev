import { useState, useEffect } from 'react';
import api from '../../services/api';
import { Background, Container, ContainerButton, Info, Poster } from './styles';
import Button from '../../components/Button';
import Slider from '../../components/Slider';
import { getImages } from '../../utils/getImages';
import Modal from '../../components/Modal';

function Home() {
    const [movie, setMovie] = useState()
    const [showModal, setShowModal] = useState(false)
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [topPeople, setTopPeople] = useState()

    useEffect(() => {
        async function getMovies() {
            const { data: { results }
            } = await api.get('/movie/popular') //desestruturar a resposta da API

            setMovie(results[1])
        }

         async function getTopMovies() {
            const { data: { results }
            } = await api.get('/movie/top_rated') //desestruturar a resposta da API

            
            setTopMovies(results)
        }

         async function getTopSeries() {
            const { data: { results }
            } = await api.get('/tv/top_rated') //desestruturar a resposta da API

            
            setTopSeries(results)
        }

        async function getPopularSeries() {
            const { data: { results }
            } = await api.get('/tv/popular') //desestruturar a resposta da API

            
            setPopularSeries(results)
        } 
        
        async function getTopPeople() {
            const { data: { results }
            } = await api.get('/person/popular') //desestruturar a resposta da API

            
            setTopPeople(results)
        }
        
        getMovies()
        getTopMovies()
        getTopSeries()
        getPopularSeries()
        getTopPeople()

    }, []) // O useEffect vazio faz com que a função rode apenas uma vez quando o componente for montado



    return (
        <>
            {movie && (
                <Background img={getImages(movie.backdrop_path)}>
                    {showModal && <Modal movieId={movie.id} setShowModal={setShowModal}/>}
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButton>
                                <Button red={true}>Assista Agora</Button>
                                <Button red={false} onClick={() => setShowModal(true)}>Assista o Trailer</Button>
                            </ContainerButton>
                        </Info>
                        <Poster>
                            <img src={getImages(movie.poster_path)} alt="capa-do-filme" />
                        </Poster>
                    </Container>
                </Background>
            )}
            {topMovies && <Slider info={topMovies} title={'Top Filmes'}/>}
            {topSeries && <Slider info={topSeries} title={'Top Séries'}/>}
            {popularSeries && <Slider info={popularSeries} title={'Séries Populares'}/>}
            {topPeople && <Slider info={topPeople} title={'Top Artistas'}/>}
        </>
    )
}

export default Home;