import React, { useState } from 'react'

export default function Array() {
    const [array, setArray] = useState(["fresa", "sandia"])
    function agregarFruta() {
        setArray([...array, "pera"])
    }


    return (
        <div>
            <hr />
            <p>Array</p>
            <button onClick={agregarFruta}>agregar fruta</button>
            <p>{array}</p>
        </div>
    )
}
