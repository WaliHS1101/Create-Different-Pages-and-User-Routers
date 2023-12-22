import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="container text-center text-light ">

        <div className="row mt-3">

          <div className="col-lg-6 col-12 p-2 bg-gradient ">
            <img src="https://images.pexels.com/photos/19187317/pexels-photo-19187317/free-photo-of-hidden.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="100%" alt="" />
          </div>

          <div className="col-lg-6 col-12 mt-3 mt-lg-0  p-2 bg-gradient ">
            <h3 className='mt-3'>Welcome to this website </h3>
            <h4 className="mt-3 text-info">please let us know if you have any questions</h4>
            <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi delectus perferendis sapiente aliquid tempora corporis nisi cum distinctio sed recusandae? Eaque animi eos laudantium reiciendis provident, maiores ullam deleniti voluptas.</p>
            <Link to="Contact"> <button className='btn btn-success mt-3'>Contact</button></Link>
          </div>

        </div>

        <div className="row mt-3">

          <div className="col-lg-6 col-12 mt-3 mt-lg-0  p-2 bg-gradient ">
            <h3 className='mt-3'>See All Products </h3>
            <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi delectus perferendis sapiente aliquid tempora corporis nisi cum distinctio sed recusandae? Eaque animi eos laudantium reiciendis provident, maiores ullam deleniti voluptas.</p>
            <Link to="AllProducts"> <button className='btn btn-success mt-3'>See All Products</button></Link>
          </div>

          <div className="col-lg-6 col-12 p-2 bg-gradient ">
            <img src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600" width="100%" alt="" />
          </div>

        </div>

      </div>
    </>
  )
}

export default Home