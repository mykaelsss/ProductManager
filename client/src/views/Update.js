import React, { useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Update = () => {
    const [ title, setTitle ] = useState("")
    const [ price, setPrice ] = useState("")
    const [ description, setDescription ] = useState("")
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect( () => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then( res => {
            setTitle( res.data.title )
            setPrice( res.data.price )
            setDescription( res.data.description )
        })
        .catch( err => console.log( err ))
    }, [id])

    const updateProduct = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/product/${id}`, {
            title,
            price,
            description
        })
        .then( res => console.log( res ))
        .catch( err => console.log( err ))
        navigate("/")
    }
    return (
        <div>
            <h1>Update Product</h1>
            <form onSubmit={ updateProduct }>
                <p>
                    <label>Title</label><br/>
                    <input
                    type="text"
                    name='title'
                    value={ title }
                    onChange={ (e) => { setTitle( e.target.value ) }}
                    />
                </p>
                <p>
                    <label>Price</label><br/>
                    <input
                    type="number"
                    name='rating'
                    value={ price }
                    onChange={ (e) => { setPrice( e.target.value ) }}
                    />
                </p>
                <p>
                    <label>Description</label><br/>
                    <input
                    type="text"
                    name='description'
                    value={ description }
                    onChange={ (e) => { setDescription( e.target.value ) }}
                    className=" w-25"
                    />
                </p>
                <input type="submit" value="Submit" className='btn btn-outline-primary'/>
            </form>
        </div>
    )
}

export default Update
