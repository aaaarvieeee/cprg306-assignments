"use client";

import { useState } from "react";

export default function NewItem({onAddItem}) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            name,
            quantity,
            category,
        };

        onAddItem(item);
        
        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
        <div className="bg-grey-100 p-3">
            <form className="justify-center" onSubmit={handleSubmit}>
                <div className="">
                    <div className="flex flex-row gap-2 mb-2 mt-2">
                        <input required className="input input-bordered text-black" type="text" value={name} onChange={(event) => setName(event.target.value)} />
                        <input className="input input-bordered text-black " type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
                    </div>
                    <div className="flex flex-row gap-2">
                        <select className="select select-bordered w-full max-w-xs text-black" value={category} onChange={(event) => setCategory(event.target.value)}>
                            <option value="produce">Produce</option>
                            <option value="dairy">Dairy</option>
                            <option value="bakery">Bakery</option>
                            <option value="meat">Meat</option>
                            <option value="frozen">Frozen</option>
                            <option value="canned goods">Canned Goods</option>
                            <option value="dry goods">Dry Goods</option>
                            <option value="beverages">beverages</option> 
                            <option value="Snacks">Snacks</option>
                            <option value="household">Household</option>
                            <option value="other">Other</option>
                        </select>
                        <button className="btn"type="submit">Add Item</button>
                    </div>
                </div>
            </form>
        </div>
    )
}