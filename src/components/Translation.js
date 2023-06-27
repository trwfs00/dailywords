import React from 'react'

const Translation = (props) => {
  return (
    <div className='translation'>
        <div className='translate'>
            <p>ความหมาย</p>
            <h1>{props.randomWord.translation}</h1>
        </div>
        <div className='syn-anonym'>
            <div className='synonym'>
                <p>คำพ้องความหมาย</p>
                <h2>{props.randomWord.synonym}</h2>
            </div>
            <div className='antonym'>
                <p>คำตรงกันข้าม</p>
                <h2>{props.randomWord.antonym}</h2>
            </div>
        </div>
        <div className='example'>
            <p>ตัวอย่างการใช้งาน</p>
            <h2>{props.randomWord.example}</h2>
        </div>
    </div>
  )
}

export default Translation