import React, { useState } from 'react'
import MyNav from './Navigation.js'
import MyVocabulary from './Vocabulary.js';

const Widjet = () => {
  const [level, setLevel] = useState('');

  const handleLevelData = (data) => {
      setLevel(data);
  };
  return (
    <div className='widjet'>
      <MyNav sendData={handleLevelData} />
      <MyVocabulary level={level}/>
    </div>
  )
}

export default Widjet