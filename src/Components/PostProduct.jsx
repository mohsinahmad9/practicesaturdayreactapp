import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PostProduct(props) {

    const [data,setData] =  useState({});
    const navigate = useNavigate();
    function handlerSubmit(e)
    {
        e.preventDefault();
        axios.post('http://localhost:6500', data)
        .then(function(msg){
            console.log(msg);
            navigate('/productall')
        }).catch(function(err){
            console.log(err);
        })
    }
    return (
        <form onSubmit={handlerSubmit}>
        <div class="mb-3">
          <label>Product Id</label>
          <input onChange={(e)=> setData({...data, product_id:e.target.value})} type="text" class="form-control"/>
        </div>
        <div class="mb-3">
          <label>Title</label>
          <input onChange={(e)=> setData({...data, title:e.target.value})} type="text" class="form-control"/>
        </div>
        <div class="mb-3">
          <label>Category ID</label>
          <input onChange={(e)=> setData({...data, category_id:e.target.value})} type="text" class="form-control"/>
        </div>
        <div class="mb-3">
          <label>Price</label>
          <input onChange={(e)=> setData({...data, price:e.target.value})} type="text" class="form-control"/>
        </div>
        
        <div class="mb-3">
          <label>Description</label>
          <input onChange={(e)=> setData({...data, description:e.target.value})} type="text" class="form-control"/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    );
}

export default PostProduct;