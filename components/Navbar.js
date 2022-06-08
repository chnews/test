import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
       <div className=''>
       <nav className="navbar navbar-expand-md navbar-white bg-white mb-4 ">
  <div className="container-fluid">
      <Link href="/">
        <a className="navbar-brand" >
            Home
        </a>
      </Link>
    
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
      aria-controls="navbarCollapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
        <Link href="/about">
        <a className="nav-link active" aria-current="page">
            About
          </a>
      </Link>
          
        </li>
        <li className="nav-item">
        <Link href="/contact">
            <a className="nav-link active" aria-current="page">
            Contact
          </a>
        </Link>
        </li>
        <li className="nav-item">
        <Link href="/posts">
            <a className="nav-link active" aria-current="page">
            Posts
          </a>
        </Link>
        </li>

        <li className="nav-item">
        <Link href="/portfolio">
            <a className="nav-link active" aria-current="page">
            Portfolio
          </a>
        </Link>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form> */}
    </div>
  </div>
</nav>
       </div>

    
    </>
  )
}

export default Navbar