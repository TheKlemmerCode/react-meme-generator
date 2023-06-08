import '../css/meme.css'
import memesData from '../data/memesData'
import { useState } from 'react'

function Meme() {
    const [memeImage, setMemeImage] = useState("")

    function handleClick() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
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
                    <img src={memeImage}/>
                </div>
            </section>
        </div>
    )
}

export default Meme
