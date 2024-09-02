import { useState } from "react";

function MudarTexto() {

    const [texto, mudarTexto] = useState('');

    const textoMudou = (event) => mudarTexto(event.target.value);

    return (
        // ESPELHO
        <div id="diva">
            <textarea onChange={textoMudou}></textarea>
            <p>{texto}</p>
        </div>
    )
}

export default MudarTexto