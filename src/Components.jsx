import React from 'react';
import CategoryAll from './Components/CategoryAll';
import { Route, Routes } from 'react-router-dom';
import ProductAll from './Components/ProductAll';
import PostProduct from './Components/PostProduct';
import PostCategory from './Components/PostCategory';
import ProductSearch from './Components/ProductSearch';

function Components(props) {
    return (
        <div className='container-fluid'>
            <div class="row">
               <div className='offset-md-1 shadow mt-3 col-md-10'>
                    <Routes>
                        <Route path={'/categoryall'} element={<CategoryAll/>}></Route>
                        <Route path={'/productall'} element={<ProductAll/>}></Route>
                        <Route path={'/postproduct'} element={<PostProduct/>}></Route>
                        <Route path={'/postcategory'} element={<PostCategory/>}></Route>
                        <Route path={'/productsearch'} element={<ProductSearch/>}></Route>
                        <Route path={'/search/:catid'} element={<ProductSearch/>}></Route>
                    </Routes>
               </div>
            </div>
        </div>
    )};


export default Components;