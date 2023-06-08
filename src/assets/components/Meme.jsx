import '../css/meme.css'
import memesData from '../data/memesData'
import { useState } from 'react'

function Meme() {
    const [allMemeImages, setAllMemeImages] = useState(memesData)
    const [meme, setMeme] = useState({
        topText: "", 
        bottomText: "", 
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

    return (
        <div className="meme--content">
            <section className="meme--input">
                <div className="meme--form">
                    <input 
                        type="text"
                        placeholder="Top Text"
                        className="meme--form-input"
                    />
                    <input 
                        type="text"
                        placeholder="Bottom Text"
                        className="meme--form-input"
                    />
                    <button
                        className="meme--form-button"
                        onClick={handleClick}
                    >
                        Get a new meme image 🖼
                    </button>
                </div>
                <div className="meme--image">
                    <img src={meme.randomImage}/>
                </div>
            </section>
        </div>
    )
}

export default Meme
