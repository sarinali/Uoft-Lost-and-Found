import "../css/landing.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ColourPalette, { Colours } from "../constants/ColourPalette.js"
import ImageStorage from "./ImageStorage";
import {db} from '../firebase/firebase-config.js';
import {collection, getDocs} from "firebase/firestore"

function Home() {
        // const getData = async () => {
    //     const snapshot = await db.collection('users').get();
    //     snapshot.forEach((doc) => {
    //         console.log(doc.id, '=>', doc.data());
    //       });
    // }

    return (
        ImageStorage()
    )
}

export default Home;
