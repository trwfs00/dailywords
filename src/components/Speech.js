import React, { useState } from 'react'
import { Button, Tooltip } from 'antd';
import voice from '../img/sound.svg'

const Speech = (props) => {
    const [response, setResponse] = useState('');

    const handleSpeak = async () => {
        try {
          const options = {
            method: 'POST',
            headers: {
              'Botnoi-Token': '23086dd315b6473634de872ec3c409c054576dacbad805082b1874e49392046a',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              text: props.msg,
              speaker: '21',
              volume: 1,
              speed: 1,
              type_media: 'm4a',
            }),
          };
    
          const response = await fetch('https://api-voice.botnoi.ai/api/service/generate_audio', options);
          const data = await response.json();
          setResponse(data);
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <Tooltip title="เล่นเสียง" placement="top">
            <Button className='btn-voice' type="text" shape="circle" onClick={handleSpeak} style={{ width: 60, height: 60 }}>
                <img src={voice} alt='Random' style={{ width: 50, height: 50 }} />
            </Button>
            <audio src={response.audio_url} autoPlay hidden />
        </Tooltip>
    )
}

export default Speech