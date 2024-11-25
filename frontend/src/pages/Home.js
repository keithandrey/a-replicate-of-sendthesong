import { useEffect, useState } from "react"

const Home = () => {

    const [messages, setMessages] = useState(null)

    useEffect(() => {

        const fetchMessages = async () => {

            const response = await fetch('/api/')
            const json = await response.json()

            if (response.ok) {

                setMessages(json)

            }

        }

        fetchMessages()

    }, [])

    return (
        <div className="content">

            <h1 className="quote">a bunch of the untold words, sent through the song</h1>
            <p className="description-1">Express your untold message through the song.</p>

        </div>
    )

}

export default Home