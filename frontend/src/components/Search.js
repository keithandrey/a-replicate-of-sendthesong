import { useState } from "react"

const RecipientSearchForm = () => {

    const [recipient, setRecipient] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        window.location.href = '/browse/' + recipient
    }

    return (

        <form className="search" onSubmit={handleSubmit}>
            <label>search</label>
            <input type="text" value={recipient} onChange={(e) => setRecipient(e.target.value)}/>
        </form>

    )

}

export default RecipientSearchForm;
