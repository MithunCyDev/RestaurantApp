import React from 'react'
import {collection, doc, getDoc, orderBy, query, setDoc} from 'firebase/firestore';
import { firestore, } from '../firebase.config';

//saving new Item
const saveItem = async (data)=>{
    await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
        marge: true,
    });
};

const getAllFoodItems = async ()=>{
    const items = await getDoc(
        query(collection(firestore, "foodItems"), orderBy('id', 'desc'))
    );
    return items.docs.map((doc) => doc.data());
};

export default (saveItem, getAllFoodItems);