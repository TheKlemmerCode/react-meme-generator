import '../css/meme.css'
import memesData from '../data/memesData'
import { useState } from 'react'

function Meme() {
    const [allMemeImages, setAllMemeImages] = useState(memesData)
    const [meme, setMeme] = useState({
        topText: "One does not simply", 
        bottomText: "Walk into Mordor", 
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    function handleClick() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: memesArray[randomNumber].url
        }))
    }


    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    return (
        <div className="meme--content">
            <section className="meme--input">
                <div className="meme--form">
                    <input 
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        className="meme--form-input"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        className="meme--form-input"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                    <button
                        className="meme--form-button"
                        onClick={handleClick}
                    >
                        Get a new meme image 🖼
                    </button>
                </div>
                <div className="meme--image">
                    <img src={meme.randomImage} />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </section>
        </div>
    )
}

export default Meme
