import React, { useState, useEffect } from "react"
import {db} from "../firebase/firebase-config.js";
import {collection, getDocs} from "firebase/firestore";
import {userEmail} from "../landing_page/LogIn.js";
import { Carousel } from "react-bootstrap"


function MyProfile() {
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
                console.log(postings.userEmail)
                if (postings.userEmail === userEmail) {
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

                            </div>
    
                            
                            
                            
                        </div>
                    );
                } else {
                    return <div></div>
                }
            })}
            
        </div>
    )
}

export default MyProfile;