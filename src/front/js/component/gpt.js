const gpt = () => {
    return (
        <div className="app_1">
        <section className="side-bar">
            <button>
            <i className="fa-regular fa-square-plus"></i>New Chat
            </button>
            <ul className="history">
                <li>Stuff</li>
            </ul>
            <nav>
                <p>Fueled by Crypto PopTarts</p>
            </nav>
        </section>
        <section className="main">
            <h1>CryptoGPT</h1>
            <ul className="feed">

            </ul>
            <div className="bottom-section">
                <div className="input-container">
                    <input />
                    <div id="submit">
                    <i className="fa-regular fa-paper-plane"></i>
                    </div>
                </div>
                <p className="info">
                    CryptoGPT Version 8.14.  Free preview, rendered to make AI more sage and safe for us all.
                    Feedback is much appreciated.
                </p>
            </div>
        </section>
        </div>
    );
}

export default gpt;