import { useState } from "react"

const Jokes = () => {
    const [showJokes, setShowJokes] = useState('')
    const handleAPI = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setShowJokes(data.joke))
            .catch((error) => console.log("Error Fetching Joke:", error))

    }



    return (
        <>
            <h1>Welcome to Jokes App</h1>
            <button onClick={handleAPI}>Click Here To Generate Jokes!</button><br />
            <p>{showJokes}</p><br /><br />
        </>
    )
}
export default Jokes