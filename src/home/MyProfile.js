import React, { useState, useEffect } from "react"
import {db} from "../firebase/firebase-config.js";
import {collection, getDocs} from "firebase/firestore";
import {userEmail} from "../landing_page/LogIn.js"

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

                } else {
                    return <div></div>
                }
            })}
            
        </div>
    )
}

export default MyProfile;