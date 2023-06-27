import React, { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from 'firebase/database';
import { Alert, Button, Tooltip } from 'antd';
import random from '../img/random.svg';
import MyWords from './Words';
import MyTranslation from './Translation';

const firebaseConfig = {
    apiKey: "AIzaSyAUFOnJmeYPpzWz6kCN7T_AglO-AxMQKoM",
    authDomain: "site-dailywords.firebaseapp.com",
    databaseURL: "https://site-dailywords-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "site-dailywords",
    storageBucket: "site-dailywords.appspot.com",
    messagingSenderId: "969436157867",
    appId: "1:969436157867:web:f15f9aebed04908b85a4ee"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const vocabularyRef = ref(database, 'vocabulary');

const Vocabulary = (props) => {
    const [alert, setAlert] = useState(false);
    const [level, setLevel] = useState(props.level);
    const [randomWord, setRandomWord] = useState(null);
    const [vocabularyData, setVocabularyData] = useState(null);

    useEffect(() => {
        const onDataChange = (snapshot) => {
            const data = snapshot.val();
            setVocabularyData(data);
        };

        onValue(vocabularyRef, onDataChange);
    }, []);

    useEffect(() => {
        if (!props.level) {
            setLevel(null);
        } else {
            setLevel(props.level);
            setAlert(false);
        }
    }, [props.level]);

    const getRandomWord = () => {
        if (!level) {
            setAlert(true);
        } else {
            const words = vocabularyData ? vocabularyData[level] : [];
            const randomIndex = Math.floor(Math.random() * words.length);
            const word = words[randomIndex];
            setRandomWord(word);
        };
    };
    
    const dailywords = {
        word: "Dailywords",
        partOfSpeech: "n.",
        pronunciation: "เดรี่เวิร์ดสฺ",
        translation: "คำศัพท์ประจำวัน",
        synonym: "Wordaily",
        antonym: "Non-Dailywords",
        example: "Today I got surprise from Dailywords."
    }
    return (
        <div className='vocabulary'>
            {alert && (
                <>
                    <Alert message="กรุณาเลือกระดับของคำศัพท์" type="info" showIcon closable onClose={() => { setAlert(false) }} style={{marginBottom: 20}} />
                </>
            )}
            {randomWord ? (
                <div className='content' style={{marginTop: 20}}>
                    {
                        <>
                        <MyWords randomWord={randomWord}/>
                        <MyTranslation randomWord={randomWord}/>
                        </>
                    }
                </div>
            ):(
                <div className='content' style={{marginTop: 20}}>
                    {
                        <>
                        <MyWords randomWord={dailywords}/>
                        <MyTranslation randomWord={dailywords}/>
                        </>
                    }
                </div>
            )}
            <div className='btn-vocab'>
                <Tooltip title="เริ่มสุ่มคำศัพท์" placement="bottom">
                    <Button className='btn-random' type="text" shape="circle" onClick={getRandomWord} style={{ width: 110, height: 110 }}>
                        <img src={random} alt='Random' style={{ width: 100, height: 100 }} />
                    </Button>
                </Tooltip>
            </div>
        </div>
    )
}

export default Vocabulary