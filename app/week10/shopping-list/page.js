"use client";

import NewItem from "./new-item";
import { useState, useEffect } from "react";
import MealIdeas from "./meal-ideas";
import ItemList from "./item-list";
import { getShoppingList, addItem } from "../_services/shopping-list-service";
import { useUserAuth  } from "../_utils/auth-context";
import { getAuth } from "firebase/auth";

export default function Page(){ 

    const { user } = useUserAuth();
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState(" ");

    const loadItems = async() => {
        try{
            const items = await getShoppingList(user.uid);
            console.log(items);
            console.log(user.uid);
            setItems(items);
        }
        catch(error){
            console.log(error);
        }
    }

    const handleAddItem = async(item) => {
        try{
            const newItem = await addItem(user.uid, item);
            setItems((previousItems) => [...previousItems, newItem]);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        loadItems();
    }, [user]);

    const handleItemSelect = (item) => {
        // Clean up the item name by removing the size and emoji
        const cleanedItemName = item.name
        .split(',')[0]
        .replace(/🍗|🍞|🥛|🥚|🍌|🥦|🍝/g, "")
        .replace(" ", '_')
        setSelectedItemName(cleanedItemName);
    };


    if (!user) {
        return null;
    }

    return(
        <main className="p-5">
            <h1 className="m-2 text-3xl">Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items} onItemSelect={handleItemSelect}/>
            <MealIdeas ingredient={selectedItemName} />
        </main>
    )
}

