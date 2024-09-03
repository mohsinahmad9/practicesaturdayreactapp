import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ProductAll(props) {

    const [product, setProduct] = useState([]);
    async function getProductAll()
    {
        const d = await axios.get('http://localhost:6500/');
        setProduct(d.data);
    }
    useEffect(()=>{
        getProductAll();
    },[]);
    return (
        <div>
            <table className='table table-light table-striped table-hover'>
                <thead>
                    <tr>
                        <td>Product ID</td>
                        <td>Title</td>
                        <td>Category Id</td>
                        <td>Price</td>
                        <td>Description</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map(item=>(
                            <>
                                <tr>
                                    <td>{item.product_id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.category_id}</td>
                                    <td>{item.price}</td>
                                    <td>{item.description}</td>
                                    <td><button className='btn btn-warning'>Edit</button></td>
                                    <td><button className='btn btn-danger'>Delete</button></td>
                                </tr>
                            </>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ProductAll;