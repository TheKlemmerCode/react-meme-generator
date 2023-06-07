import trollFace from '../img/troll-face.png'

import '../css/header.css'

function Header() {
    return (
      <header className="meme--header">
        <div className="meme--header-content">
            <section className="meme--header-left">
                <img alt="Troll Face" src={trollFace} />
                <h2>Meme Generator</h2>
            </section>
            <section className="meme--header-right">
                <h4>React Course - Project 3</h4>
            </section>
        </div>
      </header>
    )
  }
  
export default Header
  