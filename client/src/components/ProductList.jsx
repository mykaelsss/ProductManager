import React from 'react'
const ProductList = (props) => {
    return (
        <div>
            {props.products.map( (product, i) =>
            <p key={i}>
                <a href={ `http://localhost:3000/${product._id}` }>{product.title}</a>
            </p>
            )}
        </div>
    )
}

export default ProductList
