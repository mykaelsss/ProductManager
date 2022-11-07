import React, { useState } from 'react'
import axios from 'axios'
const ProductForm = () => {
    const [ title, setTitle ] = useState("")
    const [ price, setPrice ] = useState("")
    const [ description, setDescription ] = useState("")

    const onSubmitHandler = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
        .then( res => console.log( res ))
        .catch( err => console.log( err ))
    }
    return (
        <div>
            <form onSubmit={ onSubmitHandler }>
                <h1>Product Manager</h1>
                <p>
                    <label htmlFor="">Title</label><br/>
                    <input type="text" onChange={ (e) => setTitle(e.target.value) } />
                </p>
                <p>
                    <label htmlFor="">Price</label><br/>
                    <input type="number" onChange={ (e) => setPrice(e.target.value) } />
                </p>
                <p>
                    <label htmlFor="">Description</label><br/>
                    <input type="text" onChange={ (e) => setDescription(e.target.value) } />
                </p>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ProductForm
