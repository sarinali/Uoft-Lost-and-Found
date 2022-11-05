import "../css/landing.css";
import React from "react";
import {db} from "../firebase/firebase-config.js";
import {collection, getDocs} from "firebase/firestore";
import {useEffect, useState} from 'react';
import { auth } from "../firebase/firebase-config";
//import compress from 'browser-image-compression';

async function resizeImage(file) {
    const Compress = require('compress.js')
    const compress = new Compress()
    const resizedImage = await compress.compress([file], {
      size: 2, // the max size in MB, defaults to 2MB
      quality: 1, // the quality of the image, max is 1,
      maxWidth: 300, // the max width of the output image, defaults to 1920px
      maxHeight: 300, // the max height of the output image, defaults to 1920px
      resize: true // defaults to true, set false if you do not want to resize the image width and height
    })
    const img = resizedImage[0];
    const base64str = img.data
    const imgExt = img.ext
    const resizedFiile = Compress.convertBase64ToFile(base64str, imgExt)
    return resizedFiile;
}

function CreateListing() {
    const [postings, setPostings] = useState([]);
    const postingsCollectionRef = collection(db, "postings");

    useEffect(() => {
        const getPostings = async () => {
            const data = await getDocs(postingsCollectionRef);
            setPostings(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getPostings();
    }, [postingsCollectionRef]);
    // const getData = async () => {
    //     const snapshot = await collection('users').get();
    //     snapshot.forEach((doc) => {
    //         console.log(doc.id, '=>', doc.data());
    //       });
    // }

    return (
        <div>
            {postings.map((postings) => {
                
                return (
                    <div>
                        {" "}
                        <h1>Item Name: {postings.itemName}</h1>
                        <h1>Caption: {postings.caption}</h1>
                        <h1>Date: {postings.date}</h1>
                        <h1>Building: {postings.building}</h1>
                        <h1>Exact Location: {postings.exactLocation}</h1>
                        {postings.imageList.map((images) => {
                            return (
                                
                                <img src={images} alt="" height = '500'/>
                            )
                        })}
                        
                    </div>
                );
            })}
            
        </div>
    )
}

export default CreateListing;
