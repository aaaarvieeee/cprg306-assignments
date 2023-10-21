"use client"

import React from "react";
import Item from "./item";
import { useState } from "react";

export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState("name");
    const newList = [...items];
    
    if (sortBy == "name"){
        newList.sort((a,b) => a.name.localeCompare(b.name))
    }
    else if (sortBy == "category"){
        newList.sort((a,b) => a.category.localeCompare(b.category))
    }

    return(
        <main>
            <div className="flex flex-row">
                <button className="btn" onClick={() => setSortBy("name")}>name</button>
                <button className="btn" onClick={() => setSortBy("category")}>category</button>
            </div>
            <ul>
                {newList.map((item) => (
                    <React.Fragment key={item.id}>
                        <Item
                            name={item.name}
                            quantity={item.quantity}
                            category={item.category}
                        />
                    </React.Fragment>
                ))}
            </ul>
        </main>
    )
}
