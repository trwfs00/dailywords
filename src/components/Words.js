import React from 'react'
import MySpeech from './Speech'

const Words = (props) => {
    return (
        <div className='words'>
            <MySpeech msg={props.randomWord.word}/>
            <div className='word-wrapper'>
                <h1>{props.randomWord.word}</h1>
                <p>({props.randomWord.partOfSpeech}) {props.randomWord.pronunciation}</p>
            </div>
        </div>
    )
}

export default Words