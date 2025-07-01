import { useState } from "react"

export default function Contador() {
    const [contador, setContador] = useState(0)
    /* function sumarUno() {
        setContador(contador + 1)
    } */
    function restarUno() {
        setContador(contador - 1)
    }

    return (
        <div>
            <hr />
            <h2>Hola este es el contador</h2>
            <div className=" flex gap-5">
                <button onClick={() => { setContador(contador + 1) }}>+1</button>
                <p>{contador}</p>
                <button onClick={restarUno}>-1</button>
            </div>
        </div>
    )
}
