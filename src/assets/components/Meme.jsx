import '../css/meme.css'

function Meme() {
  return (
    <div className="meme--content">
        <section className="meme--input">
            <form className="meme--form">
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
                >
                    Get a new meme image 🖼
                </button>
            </form> 
        </section>
    </div>
  )
}

export default Meme
