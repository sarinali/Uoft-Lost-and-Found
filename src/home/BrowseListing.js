import "../css/landing.css";
import React from "react";
import {db} from "../firebase/firebase-config.js";
import {collection, getDocs} from "firebase/firestore";
import {useEffect, useState} from 'react';
import { auth } from "../firebase/firebase-config";
import { Carousel } from "react-bootstrap";

function BrowseListing() {
    const [postings, setPostings] = useState([]);
    const postingsCollectionRef = collection(db, "postings");

    useEffect(() => {
        const getPostings = async () => {
            const data = await getDocs(postingsCollectionRef);
            setPostings(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getPostings();
    }, [postingsCollectionRef]);

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
                        <Carousel>
                            {postings.imageList.map((images) => {
                                console.log(images)
                                return (
                                    <Carousel.Item>
                                        <img src={images} alt="" height = '500'/>
                                    </Carousel.Item>
                                
                                    
                                );

                            })}
                        </Carousel>
                        
                        
                    </div>
                );
            })}
            
        </div>
    )
}

export default BrowseListing;
