import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'

const Detail = (props) => {
    const [ product, setProduct ] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()
    const { removeFromDom } = props

    useEffect( () => {
        // `http://localhost:8000/api/products/${id}`
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then( res => {
            console.log(res)
            setProduct( res.data )
        })
        .catch( err => console.log( err ))
    }, [id] )
    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/product/delete/${productId}`)
        .then( res => removeFromDom( productId ))
        .catch( err => console.log( err ))
        navigate("/")
    }
    return (
        <div>
            <h1>{ product.title }</h1>
            <p> Price: ${ product.price } </p>
            <p>Description: { product.description }</p>
            <Link to={`/${product._id}/edit`}>Edit</Link><br/>
            <button className='btn btn-outline-danger' onClick={ (e) => { deleteProduct( product._id)}}>Delete</button>
        </div>
    )
}

export default Detail
