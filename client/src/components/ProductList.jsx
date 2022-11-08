import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const ProductList = (props) => {
    const { removeFromDom } = props

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/product/delete/${productId}`)
        .then( res => removeFromDom( productId ))
        .catch( err => console.log( err ))
    }
    return (
        <div>
            {props.products.map( (product, i) => {
                return(
                    <div key={i} className='m-3 d-flex gap-3 justify-content-center align-items-center'>
                        <Link to={ "/" + product._id}></Link>
                        <a href={ `http://localhost:3000/${product._id}` }>{product.title}</a>
                        <button onClick={ (e) => { deleteProduct( product._id ) }} className='btn btn-outline-danger'>Delete</button>
                    </div>
                    )
                })}
        </div>
    )
}

export default ProductList
