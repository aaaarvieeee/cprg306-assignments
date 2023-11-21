import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query} from "firebase/firestore";

export const getShoppingList = async(userId) =>{
    try{
        const items = [];

        const itemCol = query(collection(db, `users/${userId}/items`));
        const itemSnapshot = await getDocs(itemCol);

        itemSnapshot.forEach((doc) => {
                items.push({id: doc.id, ...doc.data()});
        });
        return items;
    }
    catch(error){
        console.log(error);
    }
}

export const addItem = async(userId, item) => {
    try{
        const itemCol = collection(db, `users/${userId}/items`);
        const docRef = await addDoc(itemCol, item);
        return docRef.id;
    }
    catch(error){
        console.log(error);
    }
}