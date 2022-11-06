import "../css/landing.css";
import React from "react";
import {db} from "../firebase/firebase-config.js";
import {collection, getDocs} from "firebase/firestore";
import {useEffect, useState} from 'react';
import { auth } from "../firebase/firebase-config";
import { Carousel } from "react-bootstrap";
import "../css/loggedin.css"
import Button from 'react-bootstrap/Button';
import {userEmail} from "../landing_page/LogIn";
import { Link } from "react-router-dom";

function BrowseListing() {
    // function contactFinder() {
    //     return (
    //         <Link
    //             to='#'
    //             onClick={(e) => {
    //                 window.location.href = userEmail;
    //                 e.preventDefault();
    //             }}
    //         >
    //             {/* {label} */}
    //         </Link>
    //     );
    // }
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
        <div className="posting-grid">
            {postings.map((postings) => {
                return (
                    <div className="posting-container">
                        {" "}
                        <div style={{width: 375}}>

                            <Carousel>
                                {postings.imageList.map((images) => {
                                    return (
                                        <Carousel.Item>
                                            <img src={images} alt="" height = '500'/>
                                        </Carousel.Item>
                                    );

                                })}
                            </Carousel>
                        </div>

                        <div className="posting-information">
                            <div className="item-name">{postings.itemName}</div>
                            <div className="lost-date">Found on {postings.date}</div>
                            <div className="building">Found at {postings.building}</div>
                            <div className="exact-location">at {postings.exactLocation}</div>
                            <div className="caption">{postings.caption}</div>
                            <Button variant="primary" className="contact-button">
                                <a href={"mailto:" + postings.userEmail} className="contact-text">Contact Finder</a>
                            </Button>{' '}
                        </div>

                        
                        
                        
                    </div>
                );
            })}
            
        </div>
    )
}

export default BrowseListing;
