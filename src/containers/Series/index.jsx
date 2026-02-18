import { useState, useEffect } from "react";
import capa_series from "../../assets/capa_series.png"
import Slider from "../../components/Slider";
import { getPopularSeries, getSeriesNext, getSeriesToday, getTopSeries } from "../../services/getData";
import { Container, Info } from "./styles";

function Series() {
    const [topSeries, settopSeries] = useState();
    const [popularSeries, setPopularSeries] = useState();
    const [seriesToday, setSeriesToday] = useState();
    const [seriesNext, setSeriesNext] = useState();

    useEffect( () =>{
        async function getAllData(){
            Promise.all([
                getTopSeries(),        
                getPopularSeries(),    
                getSeriesToday(),      
                getSeriesNext(),       
            ])
            .then(([topSeries, popularSeries, seriesToday, seriesNext]) => {
                
                settopSeries(topSeries);
                setPopularSeries(popularSeries);
                setSeriesToday(seriesToday);
                setSeriesNext(seriesNext);
            })
            .catch(error => console.log(error)); 
        }

       
        getAllData();
    }, []) 

    return(
        <>
            <Container>
                <Info>
                    <img src={capa_series} alt="capa de série" />
                </Info>
            </Container>
            {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
            {popularSeries && <Slider info={popularSeries} title={'Séries Populares'} />}
            {seriesToday && <Slider info={seriesToday} title={'Séries Lançadas Hoje'} />}
            {seriesNext && <Slider info={seriesNext} title={'Séries Lançadas nos Próximos Dias'} />}
        </>
    )
}


export default Series;