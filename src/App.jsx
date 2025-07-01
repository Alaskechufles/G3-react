import { Card } from "./components/Card"
/* import { useState } from "react" */
import Contador from "./components/Contador"
import Formulario from "./components/Formulario"
import Array from "./components/Array"

/* let data = [{
  content: "1",
  text: "2",
  lore: "3"
}
  , {
  content: "a",
  text: "b",
  lore: "c"
}, {
  content: "Domingo",
  text: "Lunes",
  lore: "Martes"
}] */

/* useState -> manejar estados */

function App() {
  /* const [text, setText] = useState("bye")

  function cambiarTexto() {
    setText("hola")
  } */

  return (
    <div>
      <h1 className="text-3xl font-bold">Vite + React Hola</h1>
      <p className="text-blue-500">¡Bienvenido a tu aplicación Vite con React y Tailwind CSS!</p>
      {/* <div className=" flex gap-10">
        {data.map((item, index) => (
          <Card key={index} content={item.content} text={item.text} lore={index} />
        ))}
      </div> */}
      {/*       <button onClick={cambiarTexto} className="bg-green-400 p-4">{text}</button>*/}
      <Contador />
      <Formulario />
      <Array />
    </div>
  )
}

export default App
