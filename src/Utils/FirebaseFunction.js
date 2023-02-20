import React from 'react'
import {doc, setDoc} from 'firebase/firestore';
import { firestore, } from '../firebase.config';

//saving new Item
const saveItem = async (data)=>{
    await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
        marge: true,
    });
};

export default saveItem;