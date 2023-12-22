import React from 'react'

function Products(props) {
  return (
    <>
      <div className="container">
        <div className=' d-flex flex-wrap justify-content-around text-center  '>
          {props.CardsCar.map((elements) => {
            return (
              <div className="card mt-3" style={{ width: "22rem" }}>
                <img src={elements.img} className='card-img-top' alt="" style={{ height: "180px" }} />
                <div className='card-body'>
                  <h4 className='card-title '>Model: {elements.name}</h4>
                  <h5 className='card-text '>Price: {elements.price} $</h5>
                  <div className='card-footer '>
                    <h6 className='card-text'>{elements.dec} </h6>
                  </div>
                </div>
              </div>
            )
          })}
          </div>
      </div>
    </>
  )
}

export default Products