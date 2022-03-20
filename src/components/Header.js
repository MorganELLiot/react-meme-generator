import troll from "../images/troll-face.png";

export default function Navbar() {
    return (
        <div className="nav">
            <img src={troll} className="nav--logo" alt="Troll face logo" />
            <h1 className="nav--title">Meme Generator</h1>
            <h2 className="nav--subtitle">React Course - Project 3</h2>
        </div>
    )
}