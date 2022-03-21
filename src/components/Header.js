import troll from "../images/troll-face.png";

export default function Navbar() {
    return (
        <div className="header">
            <img src={troll} className="header--logo" alt="Troll face logo" />
            <h1 className="header--title">Meme Generator</h1>
            <h2 className="header--subtitle">React Course - Project 3</h2>
        </div>
    )
}