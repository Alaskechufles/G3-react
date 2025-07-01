export function Card(props) {
    return (
        <div className=" h-[1
        00px] w-[100px] bg-amber-300 p-5 border border-black">
            <p>{props.content}</p>
            <p>{props.text}</p>
            <p>{props.lore}</p>
        </div>
    )
}