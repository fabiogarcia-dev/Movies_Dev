import { Container } from "./styles";
import {Swiper, SwiperSlide} from 'swiper/react';
import Card from "../Card";

function Slider({ info, title}) {
    console.log(info, title)
    return (
        <Container>
            <h2>{title}</h2>
            <Swiper grabCursor
             spaceBetween={10}
             slidesPerView={'auto'}
             className="swiper">
                {info.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div>
                            <Card item={item}/>                          
                        </div>
                    </SwiperSlide>
                ))}
                <SwiperSlide></SwiperSlide>
            </Swiper>
        </Container>
    )
}

export default Slider;