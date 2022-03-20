export default function Meme() {
    return (
        <main>
            <form className="form">
                <input 
                    type="text" 
                    placeholder="TOP TEXT"
                    className="form--input"
                />
                <input 
                    type="text" 
                    placeholder="BOTTOM TEXT"
                    className="form--input"
                />
                <button className="button"><div className="button-text">
                    Get a new meme image  🖼</div></button>
            </form>
        </main>
    )
}