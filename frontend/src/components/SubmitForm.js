import axios from "axios"
import { useState } from "react"

const SubmitForm = () => {

    const [recipient, setRecipient] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleSubmit = async (e) => {
        
        e.preventDefault()
        
        const data = {title, body, recipient}

        const response = await fetch('/api/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }    
        })
    };

    return (

        <form className="submit-form" onSubmit={handleSubmit}>

            <label>Recipient's Name</label>
            <input type="text" onChange={(e) => setRecipient(e.target.value)} value={recipient} placeholder="Enter recipient's name" required/>

            <label>Title</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Write your title here" required />

            <label>Message</label>
            <input type="text" onChange={(e) => setBody(e.target.value)} value={body} placeholder="Write your message here" required />

            <button type="submit" value="submit">Submit</button>

        </form>

    )

}

export default SubmitForm;