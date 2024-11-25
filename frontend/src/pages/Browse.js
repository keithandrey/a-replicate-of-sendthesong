import { useState, useEffect } from "react"

import SearchBar from "../components/Search"
import { useParams, Link } from "react-router-dom";

const Browse = () => {

    const params = useParams();

    const [messages, setMessages] = useState(null)

    useEffect(() => {

        const fetchMessages = async () => {

            const response = await fetch('/api/' + params.recipient)
            const json = await response.json()

            if (response.ok) {

                setMessages(json)

            }

        }

        fetchMessages()

    }) 

    return (
        <>  
            <div className="content">

                <SearchBar/>
                <div className="messages">
                    {messages && messages.map((message) => (
                        <Link to={`/${message._id}`}>
                            <p key={(message._id)}>{message.title}<br></br>{message.body}<br></br>{message.recipient}</p>
                        </Link>
                    ))}
                </div>

            </div>
        </>
    )

}

export default Browse