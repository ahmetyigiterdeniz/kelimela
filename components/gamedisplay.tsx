import styled from "styled-components";

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

    @media(max-width: 600px){
        width: 140px;
        height: 30px;
        font-size: 15px;
    }
`;

const Button = styled.button`
    padding: 15px;
    background-color: green;
    color: white;
    font-size: 30px;
    font-weight: 700;
    border-radius: 10px;
    height: 70px;
    width: 290px;
    height: 70px;
    width: 290px;

    @media(max-width: 600px){
        padding: 8px;
        font-size: 10px;
        width: 140px;
        height: 30px;
        border-radius: 3px;
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

    @media(max-width: 600px) {
        width: 40px;
        height: 40px;
        font-size: 20px;
    }
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

    @media(max-width: 600px) {
        width: 40px;
        height: 40px;
        font-size: 20px;
    }
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

    @media(max-width: 600px) {
        width: 40px;
        height: 40px;
        font-size: 20px;
    }
`;

const RowStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
`;

export { TextInput, Input, Button, GreenCard, YellowCard, Card, RowStyle, Grid };