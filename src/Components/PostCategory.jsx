import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PostCategory(props) {

    const [data,setData] =  useState({});
    const navigate = useNavigate();
    function handlerSubmit(e)
    {
        e.preventDefault();
        axios.post('http://localhost:6500/category', data)
        .then(function(msg){
            console.log(msg);
            toast('Successfully Inserted Data');
            //navigate('/categoryall');
        }).catch(function(err){
            console.log(err);
        })
    }
    return (
        <>
        <button onClick={()=>toast('wow')} className='btn btn-primary'>Toast</button>
        <ToastContainer/>
        <form onSubmit={handlerSubmit}>
        <div class="mb-3">
          <label>Category Id</label>
          <input onChange={(e)=> setData({...data, category_id:e.target.value})} type="text" class="form-control"/>
        </div>
        <div class="mb-3">
          <label>Category</label>
          <input onChange={(e)=> setData({...data, category:e.target.value})} type="text" class="form-control"/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
        </>
    );
}

export default PostCategory;