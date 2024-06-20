import React from "react";
import { Card, RowStyle, YellowCard, GreenCard } from "./gamedisplay";

export default function Row({ guess, word }){

    if(guess){
        const splitGuess = guess.split('');
        const splitChosen = word.split('');
        const formattedGuess = [...Array(3)];

        splitGuess.forEach((l, i) => {
            if(l === splitChosen[i]){
                formattedGuess[i] = ({ key: l, color: 'green' })
            } 
            else if(splitChosen.includes(l) && splitChosen[i] !== l){
                formattedGuess[i] = ({ key: l, color: 'yellow' })
            }
            else if(splitChosen.includes(l) !== true) {
                formattedGuess[i] = ({ key: l, color: 'none' })
            }
        })

        // const listofitems = formattedGuess.map((l) => <Card className={l.color}>{l.key}</Card>)
        const listofitems = formattedGuess.map((l) => {
            if(l.color === 'green'){return (<GreenCard>{l.key}</GreenCard>)}
            else if(l.color === 'yellow'){return (<YellowCard>{l.key}</YellowCard>)}
            else {return (<Card>{l.key}</Card>)}
        })

        return(
            <RowStyle>
                {listofitems}
            </RowStyle>
        )

    }

    else {
        return (
        <RowStyle>
            <Card> </Card>
            <Card> </Card>
            <Card> </Card>
        </RowStyle>
    )}
}