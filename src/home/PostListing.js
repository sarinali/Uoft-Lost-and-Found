import TextField, {HelperText, Input} from '@material/react-text-field';
import React, { useState } from "react"
import {addDoc, collection} from "firebase/firestore";
import {db} from "../firebase/firebase-config.js";

function PostListing() {
    const [itemName, setItemName] = useState("")
    const [buildlingName, setBuildlingName] = useState("")
    const [exactLocation, setExactLocation] = useState("")
    const [date, setDate] = useState("")
    const [caption, setCaption] = useState("")

    const postingsCollectionRef = collection(db, "postings");

    // TODO: fix the timestamp 
    const createPosting = async () => {
        await addDoc(postingsCollectionRef, {itemName: itemName, building: buildlingName, exactLocation: exactLocation, date: date, caption: caption, timestamp: 2})
        setItemName("")
        setBuildlingName("")
        setExactLocation("")
        setDate("")
        setCaption("")
    }

    const center = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        <div>
            <h1>Post Listing</h1>
            <div style={center}>Item Name</div>
            <TextField helperText={<HelperText></HelperText>} variant="outlined">
                    <Input value={itemName} onChange={e=>setItemName(e.target.value)}/>
            </TextField>
            <div style={center}>Building Name</div>
            <TextField helperText={<HelperText></HelperText>} variant="outlined">
                <Input value={buildlingName} onChange={e=>setBuildlingName(e.target.value)}/>
            </TextField>
            <div style={center}>Exact Location</div>
            <TextField helperText={<HelperText></HelperText>} variant="outlined">
                <Input value={exactLocation} onChange={e=>setExactLocation(e.target.value)}/>
            </TextField>
            <div style={center}>Date Found</div>
            <TextField helperText={<HelperText></HelperText>} variant="outlined">
                <Input value={date} onChange={e=>setDate(e.target.value)}/>
            </TextField>
            <div style={center}>Caption</div>
            <TextField helperText={<HelperText></HelperText>} variant="outlined">
                <Input value={caption} onChange={e=>setCaption(e.target.value)}/>
            </TextField>
            <button onClick={createPosting}>submit</button>
        </div>
    )
}

export default PostListing;