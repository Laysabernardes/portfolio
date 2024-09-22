import "../styles/Technologies.css";


function Technologies({ isDarkTheme }) {

    return (
        <div className="container-tech">
            <div className="browser-bar-tech">
                <div className="circle-tech "></div>
                <div className="circle-tech "></div>
                <div className="circle-tech "></div>
            </div>
            <div className="separator-line-tech"></div>

            <h1 className="titulo-section-tech">Hard Skills</h1>


            <div className="group-button">
                <button className="button-tech btn-outro">Outros</button>
                <button className="button-tech btn-back">Back-end</button>
                <button className="button-tech btn-front">Front-end</button>
            </div>
            <div className="container-icon">
                <p className="texto-tech">Essas são as linguagens, bibliotecas, frameworks e ferramentas com as quais tenho experiência, juntamente com meu nível de proficiência em cada uma delas.</p>
                <h2>Tech.</h2>
            </div>

        </div>
    )
}

export default Technologies;