import React from 'react'
import { Link } from 'react-router-dom'

function AllProducts() {
    return (
        <>
            <Link to="/Cars"><button className='btn btn-primary '>See All Cars</button></Link>
            <Link to="/Phone"><button className='btn btn-primary '>See All Phone</button></Link>
        </>
    )
}

export default AllProducts