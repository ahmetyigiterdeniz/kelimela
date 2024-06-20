import Head from "next/head";
import {
  Container,
  Main,
  Title,
  Description
} from "@/components/sharedstyles";
import { Navbar, NavLink } from "@/components/navbar";
import { TextInput, Input, Button, Grid } from "@/components/gamedisplay";
import Row from "@/components/Row";
import { useState } from "react";

export default function Home() {
  const [wordList, setWordList] = useState(["mug", "don", "fun"]);
  const [chosenWord, setChosenWord] = useState(wordList[1]);
  const [guessedWordsList, setGuessedWordsList] = useState([...Array(3)]);
  const [val, setVal] = useState("");
  const [failed, setFailed] = useState(false);
  const [gameState, setGameState] = useState(true);
  console.log(guessedWordsList)
  const [guessNumber, setGuessNumber] = useState(0);
  const splitChosenWord = chosenWord.split('');

  return (
    <Container>
      <Head>
        <title>Kelimela</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar>
        <NavLink href="/about">About</NavLink>
      </Navbar>
      <Main>
      <Input><TextInput onChange={(e) => setVal(e.target.value)} value = {val} />{gameState === true ? <Button onClick={() => {
        if(val.length === 3){
          if(val===chosenWord){
// TRUE            
            setGameState(false);
            setGuessedWordsList((prevGuesses) => {
              let newGuesses = [...prevGuesses]
              newGuesses[guessNumber] = val
              return newGuesses
            });
          }

          else {
            if(guessNumber === 2 && val !== chosenWord){
// FALSE            
            setGuessedWordsList((prevGuesses) => {
              let newGuesses = [...prevGuesses]
              newGuesses[guessNumber] = val
              return newGuesses
            });
            setGameState(false);
            setFailed(true);
            setGuessNumber(guessNumber + 1);
          } 
          
          setGuessedWordsList((prevGuesses) => {
            let newGuesses = [...prevGuesses]
            newGuesses[guessNumber] = val
            return newGuesses
          });
          setGuessNumber(guessNumber + 1);
        }
      } else {
        alert("String must be 3 letters long.")
      }
        }}>Submit</Button> : null}</Input>

        {gameState ? <Grid>
          <Row word={chosenWord} guess={guessedWordsList[0]} />
          <Row word={chosenWord} guess={guessedWordsList[1]} />
          <Row word={chosenWord} guess={guessedWordsList[2]} />
        </Grid> : <><br></br><p>You finished game.</p></>}
        {guessNumber === 3 && (guessedWordsList.includes(chosenWord) === false)  ? <><p>You failed the game.</p><br></br><Button onClick={() => {
          setGameState(true);
          setGuessNumber(0);
          setGuessedWordsList([undefined, undefined, undefined]);
        }}>Restart</Button></> : null}
      </Main>
    </Container>
  );
}