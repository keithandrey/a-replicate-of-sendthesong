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

            <h1>support nyo ang naghimo sang orig.</h1>
            <h2>crush ko sa, hihihihi</h2>

        </div>
    )

}

export default Home