"use client"

import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import ItemList from "./item-list";


export default function Page(){
    const [items, newItem] = useState(itemsData);
    
    const handleAddItem = (event) => {
        newItem([...items, event]);
    }

    return(
        <main className="justify-center m-10">
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items}/>
        </main>
    )
}