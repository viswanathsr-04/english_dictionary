import React from 'react';
import './Words.css';

function Words({ result }) {
    const { word, meanings } = result;
    return (
        <div className='Words'>
            <div>
                <h3 className='Words__word'>Word</h3>
                <div className='Words__word__container'>
                    <p className='Words__word__word'>{word} :</p>
                    <p className='Words__word__pos'>{meanings[0].partOfSpeech}</p>
                </div>
                <div className='Words__meaning__container'>
                    <h3 className='Words__meaning' >Meaning</h3>
                    <center><p className='Words__meaning__p'>{meanings[0].definitions[0].definition}</p></center>
                </div>
                <div className='Words__synonyms__container'>
                    <h2 className='Words__synonyms'>Synonyms</h2>
                    <p className='Words__synonyms__p'>
                        {meanings[0].synonyms.map((item, index) => {
                            return <p key={index}>{item}</p>
                        })}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Words