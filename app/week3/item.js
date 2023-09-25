export default function Item({ name, quantity, category }) {
    return(
        <div className="bg-blue-600 w-96 m-4 p-2 rounded-md">
            <ul className="p-5">
                <li className="font-bold text-xl">{name}</li>
                <li className="text-s">Buy {quantity} of them in the {category} aisle</li>
            </ul>
        </div>
    )
}