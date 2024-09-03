import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductSearch(props) {

    const [product, setProduct] = useState([]);
    const [cat, setCat] = useState(''); 
    const  {catid}= useParams();
    
    async function getProductAll()
    {
        setCat(catid);
        const d = await axios.get('http://localhost:6500/search/'+catid);
        setProduct(d.data);
    }
    useEffect(()=>{
        getProductAll();
    },[]);
    async function handlerSearch()
    {
        const d = await axios.get('http://localhost:6500/search/'+cat);
        console.log(d);
        setProduct(d.data);
    }
    return (
        <div>
        <div className='m-3'>
        <input type="text" onChange={(e)=>setCat(e.target.value)} className='form-control'/>
        <button onClick={handlerSearch} className='btn btn-primary m-2'>Search</button>
        </div>
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

export default ProductSearch;
