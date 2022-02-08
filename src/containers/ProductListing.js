import React, {useEffect} from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';
import Product from './Product';
import { useDispatch } from 'react-redux';
import {setProducts} from "../redux/actions"
import Cart from './CartItems';
const ProductListing = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        fetchProducts()
    },[])

    const fetchProducts = async ( ) => {
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch(err => console.log(err))
        dispatch(setProducts(response.data))
    }
    console.log("object")
    return (
        <div className='ui grid container'>
            {/* <Cart /> */}
            <Product />
        </div>
    )
}

export default ProductListing
