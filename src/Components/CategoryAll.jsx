import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CategoryAll(props) {

    const [category, setCategory] = useState([]);
    const navigate = useNavigate()
    async function getCategoryAll()
    {
        const d = await axios.get('http://localhost:6500/category');
        setCategory(d.data);
    }
    useEffect(()=>{
        getCategoryAll();
    },[]);
    function hanlersearch(catid)
    {
            navigate('/search/'+catid);
    }
    return (
        <div>
            <table className='table table-light table-striped table-hover'>
                <thead>
                    <tr>
                        <td>Category ID</td>
                        <td>Category</td>
                        <td>View</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        category.map(item=>(
                            <>
                                <tr>
                                    <td>{item.category_id}</td>
                                    <td>{item.category}</td>
                                    <td><button onClick={()=>hanlersearch(item.category_id)} className='btn btn-primary'>View All</button></td>
                                </tr>
                            </>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default CategoryAll;