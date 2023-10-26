"use client"

import React from "react";
import Item from "./item";
import { useState } from "react";

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState("name");
    const newList = [...items];
    
    if (sortBy == "name"){
        newList.sort((a,b) => a.name.localeCompare(b.name))
    }
    else if (sortBy == "category"){
        newList.sort((a,b) => a.category.localeCompare(b.category))
    }

    return(
        <div>
            <div className="flex flex-row m-2 gap-2 pl-3">
                <button className="btn" onClick={() => setSortBy("name")}>name</button>
                <button className="btn" onClick={() => setSortBy("category")}>category</button>
            </div>
            <div>
                <ul>
                    {newList.map((item) => (
                        <li key={item.id}>
                            <Item
                                name={item.name}
                                quantity={item.quantity}
                                category={item.category}
                                onSelect={() => onItemSelect(item)}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
