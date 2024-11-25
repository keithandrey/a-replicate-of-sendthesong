import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const Home = () => {

    const params = useParams();
    const [message, setMessage] = useState('')

    useEffect(() => {
        const fetchMessage = async () => {

            const response = await fetch('/api/id/' + params.id)
                .then(function(promise){
                    promise.json()
                    .then(function(j){
                        setMessage(j)
                    })
                    .catch(function(e){
                        console.log(e);
                    });
                })
                .catch(function(e){
                    console.log(e);
                });

        }

        fetchMessage()

    });


    return (
        <div className="content">

            <h2>Hello, <p className="cursive">{message.recipient}</p></h2>

        </div>
    )

}

export default Home