import React, { useState } from 'react'

export default function Lista() {
    const [producto, setProducto] = useState("")
    const [lista, setLista] = useState([])

    function handleInputChange(e) {
        setProducto(e.target.value)
    }

    function agregarProducto() {
        setLista([...lista, producto])
        setProducto("")
    }

    return (
        <div>
            <hr />
            <input
                className='border border-black'
                type="text"
                value={producto}
                onChange={handleInputChange} />
            <button onClick={agregarProducto}>Agregar</button>
            <ul>
                {lista.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>

        </div>
    )
}
