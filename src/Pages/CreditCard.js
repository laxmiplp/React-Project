import { useState } from "react"
import validator from "validator"

const CreditCard = () => {
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [cardNum, setCardNum] = useState('')
    const handleValidator = (e) => {
        const cardNum = e.target.value
        setCardNum(cardNum)
        if (validator.isCreditCard(cardNum)) {
            setError("Valid Credit Card Number")
        } else {
            setError("Invalid Credit Number")
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (validator.isCreditCard(cardNum)) {
            setMessage("successfully submitted credit card Number")
            setError('')

        } else {
            setMessage("Failed to submit because of Invalid credit card number")

        }

    }
    return (
        <>
            <h1>Credit Card using validator</h1>
            <form onSubmit={handleSubmit}>
                <label>Credit Card:</label>
                <input type="text" name="creditCard" id="creditCard" onChange={handleValidator}></input>
                <span style={{ color: 'red' }}>{error}</span><br />
                <button type="submit" >Submit</button>
            </form>
            <br /><br />
            {message && <h1 style={{ color: 'green' }}>{message}</h1>}
        </>
    )

}
export default CreditCard