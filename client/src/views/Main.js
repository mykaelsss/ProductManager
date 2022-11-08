import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'
const Main = (props) => {
    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect( () => {
        axios.get('http://localhost:8000/api/product/all')
        .then( res => {
            setProducts( res.data )
            setLoaded( true )
        })
        .catch( err => console.log( err ) )
    }, [] )
    return (
        <div>
            <ProductForm />
            <hr/>
            <h1>All Products:</h1>
            {loaded && <ProductList products={products}/>}
        </div>
    )
}

export default Main
