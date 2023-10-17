"use client"

import NewItem from "./new-item";
import itemData from "./items.json";
import { useState } from "react";
import Item from "./item";
import ItemList from "./item-list";


export default function Page(){
    const [items, newItem] = useState(itemData);

    const handleAddItem = (addItem) => {
        newItem([...items, addItem]);
    }

    return(
        <main className="justify-center m-10">
            <NewItem onAddItem={handleAddItem}/>
            <ItemList item={items}/>
        </main>
    )
}