import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          
        <Link class="navbar-brand" to="/">Application</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/categoryall">All Categories</Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/productall">All Product</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/postcategory">Post Category</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/postproduct">Post Product</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/abc">Product Search</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;