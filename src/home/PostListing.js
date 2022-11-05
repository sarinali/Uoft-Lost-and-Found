import TextField, {HelperText, Input} from '@material/react-text-field';
import React, { useState, useEffect } from "react"
import {addDoc, collection} from "firebase/firestore";
import {db} from "../firebase/firebase-config.js";
import { storage } from "../firebase/firebase-config.js";
import { ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage";
import {v4} from 'uuid'
import {userEmail} from '../landing_page/LogIn.js';


function PostListing() {
    const [itemName, setItemName] = useState("")
    const [buildlingName, setBuildlingName] = useState("")
    const [exactLocation, setExactLocation] = useState("")
    const [date, setDate] = useState("")
    const [caption, setCaption] = useState("")
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);

    const postingsCollectionRef = collection(db, "postings");

    // TODO: fix the timestamp 
    const createPosting = async () => {
        console.log(userEmail)
        // firebase.auth().currentUser.email
        await addDoc(postingsCollectionRef, {
            itemName: itemName, 
            building: buildlingName,
            exactLocation: exactLocation,
            date: date,
            caption: caption,
            timestamp: 2,
            imageList: imageList, 
            })
        setItemName("")
        setBuildlingName("")
        setExactLocation("")
        setDate("")
        setCaption("")
        setImageList([])
    }

    const center = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    

    // const imageListRef = ref(storage, "images/")

    const uploadImage  = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                var urlName = url;
                console.log(urlName)
                setImageList((prev) => [...prev, url]);
            })
        });
    };
    // useEffect(() => {
    //     listAll(imageListRef).then((response) => {
    //         response.items.forEach((item) => {
    //             getDownloadURL(item).then((url) => {
    //                 setImageList((prev) => [...prev, url]); 
    //             })
    //         })
    //     })

    // }, []);
    return (
        <div>
            <h1>Post Listing</h1>
\
            <div style={center}>Item Name</div>

            <div style={center}>
                <TextField helperText={<HelperText></HelperText>} variant="outlined">
                        <Input value={itemName} onChange={e=>setItemName(e.target.value)}/>
                </TextField>
            </div>

            <div style={center}>Building Name</div>

            <div style={center}>
                <TextField helperText={<HelperText></HelperText>} variant="outlined">
                    <Input value={buildlingName} onChange={e=>setBuildlingName(e.target.value)}/>
                </TextField>
            </div>

            <div style={center}>Exact Location</div>

            <div style={center}>
                <TextField helperText={<HelperText></HelperText>} variant="outlined">
                    <Input value={exactLocation} onChange={e=>setExactLocation(e.target.value)}/>
                </TextField>
            </div>

            <div style={center}>Date Found</div>

            <div style={center}>
                <TextField helperText={<HelperText></HelperText>} variant="outlined">
                    <Input value={date} onChange={e=>setDate(e.target.value)}/>
                </TextField>
            </div>

            <div style={center}>Caption</div>

            <div style={center}>
                <TextField helperText={<HelperText></HelperText>} variant="outlined">
                    <Input value={caption} onChange={e=>setCaption(e.target.value)}/>
                </TextField>
            </div>

            <button onClick={createPosting}>submit</button>
            <input type = "file" onChange={(event) => {setImageUpload(event.target.files[0])}}/> 
        <button onClick={uploadImage}> Upload Image</button>
            {imageList.map((url) => {
                console.log("running")
                return <img src={url} />;
            })}
        </div>
    )
}

export default PostListing;