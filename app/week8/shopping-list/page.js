"use client"

import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";


export default function Page(){
    const [items, newItem] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(" ");
    
    const handleAddItem = (event) => {
        newItem([...items, event]);
    }

    const handleItemSelect = (item) => {
        // Clean up the item name by removing the size and emoji
        const cleanedItemName = item.name
        .split(',')[0]
        .replace(/🍗|🍞|🥛|🥚|🍌|🥦|🍝/g, "")
        .replace(" ", '_')
        setSelectedItemName(cleanedItemName);
    };

    return(
        <main className="p-5">
            <h1 className="m-2 text-3xl">Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items} onItemSelect={handleItemSelect}/>
            <MealIdeas ingredient={selectedItemName} />
        </main>
    )
}