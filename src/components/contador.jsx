// IMPORTANTE
// Letra maiúscula (funções)
// arquivos é bom tbm...

// ESTADOS é aqui
import { useState } from "react";

// { função } é para importar diretamente uma função
// é relacionado com o export default (tudo) e direto numa função...
// funções com export direto são mais complexas, e dependem de outras...

function Counter() {

    const [count, setCount] = useState(0);

    // A entrada do useState é o valor que vai pro count
    // e setCount é a função que muda o valor de novo

    return (
        <div id="diva">

            <p>Clicado {count} vezes</p>
            <button onClick={() => setCount(count + 1)}>Clicar</button>
            {/* Tem que ser arrow function (pelo menos nesse caso) */}            
        
        </div>
    )
}

export default Counter