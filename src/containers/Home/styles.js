import styled, {keyframes} from "styled-components";

const scale = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`

export const Background = styled.div`
    background-image: url(${(props) => props.img});
    height: 100vh;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
    }
`

export const Container = styled.div`
    display: flex;
    margin-top: 100px;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    max-width: 1500px;
`

export const Info = styled.div`
    z-index: 2;
    padding: 20px;
    width: 50%;
    margin-left: 100px;
    h1{
        font-size: 3rem;
        font-weight: 700;
        color: #ffffff;

    }

    p {
        font-size: 20px;
        font-weight: 500;
        color: #ffffff;
        margin-top: 30px;
        margin-bottom: 20px;
    }
`

export const Poster = styled.div`
    z-index: 2;
    img {
        width: 300px;
        border-radius: 30px;
        margin-right: 250px;
        animation: ${scale} 0.5s linear;
    }
`

export const ContainerButton = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 30px;
`

