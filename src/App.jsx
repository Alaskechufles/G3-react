import { Card } from "./components/Card"

let data = [{
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
}]

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Vite + React Hola</h1>
      <p className="text-blue-500">¡Bienvenido a tu aplicación Vite con React y Tailwind CSS!</p>
      <div className=" flex gap-10">
        {data.map((item, index) => (
          <Card key={index} content={item.content} text={item.text} lore={index} />
        ))}
      </div>


    </div>
  )
}

export default App
