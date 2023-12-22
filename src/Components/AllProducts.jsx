import React from 'react'
import { Link } from 'react-router-dom'

function AllProducts() {
    return (
        <>
            <div className="container">

                <div className=" d-flex flex-wrap justify-content-around text-center">

                    <div className="card col-lg-5 col-12 mt-4 ">

                        <img className='card-img-top' style={{ height: "350px" }} src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600" width="100%" alt="" />

                        <h4 className='m-3'>Car</h4>

                        <div className='card-footer'>

                            <Link to="/Cars"><button className='btn btn-primary m-3'>See More</button></Link>

                        </div>

                    </div>

                    <div className="card col-lg-5 col-12 mt-4  ">

                        <img className='card-img-top' style={{ height: "350px" }} src="https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

                        <h4 className='m-3'>Phone</h4>

                        <div className='card-footer'>

                            <Link to="/Phones"><button className='btn btn-primary mt-3'>See More</button></Link>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default AllProducts