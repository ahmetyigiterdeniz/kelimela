import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Input = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    align-items: center;
`;

const TextInput = styled.input`
    background-color: white;
    margin: 10px;
    color: black;
    font-size: 20px;
    outline: none;
    height: 70px;
    width: 290px;
    padding-left: 15px;

    @media(max-width: 240px){
        width: 140px;
        height: 30px;
        font-size: 15px;
    }

    @media(max-width: 600px) and (min-width: 240px) {
        width: 200px;
        height: 50px;
        font-size: 20px;
    }

    @media(max-width: 1000px) and (min-width: 600px) and (min-height: 700px){
        width: 380px;
        height: 65px;
        font-size: 26px;
    }

    @media(min-width: 1000px) and (min-height: 800px){
        width: 500px;
        height: 80px;
        font-size: 40px;
    }
`;

const Button = styled.button`
    padding: 15px;
    background-color: green;
    color: white;
    font-size: 30px;
    font-weight: 700;
    border-radius: 10px;
    display: grid;
    place-items: center;
    height: 70px;
    width: 290px;

    @media(max-width: 240px){
        padding: 10px;
        width: 140px;
        height: 30px;
        font-size: 8px;
    }

    @media(max-width: 600px) and (min-width: 240px) {
        width: 200px;
        height: 50px;
        font-size: 20px;
    }

    @media(max-width: 1000px) and (min-width: 600px) and (min-height: 700px){
        width: 380px;
        height: 65px;
        font-size: 26px;
    }

    @media(min-width: 1000px) and (min-height: 800px){
        width: 500px;
        height: 80px;
        font-size: 40px;
    }

    margin-bottom: 10px;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
`;

const Card = styled.div`
    width: 90px;
    height: 90px;
    color: black;
    display: grid;
    place-items: center;
    font-size: 40px;
    font-weight: 800;
    background: white;

    @media(max-width: 240px){
        width: 40px;
        height: 40px;
        font-size: 22px;
    }

    @media(max-width: 600px) and (min-width: 240px) {
        width: 60px;
        height: 60px;
        font-size: 40px;
    }

    @media(max-width: 1000px) and (min-width: 600px) and (min-height: 700px) {
        width: 120px;
        height: 120px;
        font-size: 58px;
    }

    @media(min-width: 1000px) and (min-height: 800px){
        width: 160px;
        height: 160px;
        font-size: 100px;
    }

    animation: 1s ${fadeIn} ease-out;
`;
const GreenCard = styled.div`
    width: 90px;
    height: 90px;
    color: black;
    display: grid;
    place-items: center;
    font-size: 40px;
    font-weight: 800;
    background: green;
    
    @media(max-width: 240px){
        width: 40px;
        height: 40px;
        font-size: 22px;
    }

    @media(max-width: 600px) and (min-width: 240px) {
        width: 60px;
        height: 60px;
        font-size: 40px;
    }

    @media(max-width: 1000px) and (min-width: 600px) and (min-height: 700px) {
        width: 120px;
        height: 120px;
        font-size: 58px;
    }

    @media(min-width: 1000px) and (min-height: 800px){
        width: 160px;
        height: 160px;
        font-size: 100px;
    }

    animation: 1s ${fadeIn} ease-out;
`;

const YellowCard = styled.div`
    width: 90px;
    height: 90px;
    color: black;
    display: grid;
    place-items: center;
    font-size: 40px;
    font-weight: 800;
    background: yellow;
    
    @media(max-width: 240px){
        width: 40px;
        height: 40px;
        font-size: 22px;
    }

    @media(max-width: 600px) and (min-width: 240px) {
        width: 60px;
        height: 60px;
        font-size: 40px;
    }

    @media(max-width: 1000px) and (min-width: 600px) and (min-height: 700px){
        width: 120px;
        height: 120px;
        font-size: 58px;
    }

    @media(min-width: 1000px) and (min-height: 800px){
        width: 160px;
        height: 160px;
        font-size: 100px;
    }

    animation: 1s ${fadeIn} ease-out;
`;

const RowStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
`;

export { TextInput, Input, Button, GreenCard, YellowCard, Card, RowStyle, Grid };
