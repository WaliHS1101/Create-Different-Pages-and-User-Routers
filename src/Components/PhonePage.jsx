import React from 'react'
import PhoneProducts from "./PhoneProducts"

function Phone() {
    return (
        <>
            <div className="container">
                <div className='d-flex flex-wrap justify-content-around text-center '>

                    {PhoneProducts.map((items) => {
                        return (
                            <>
                                <div className="card mt-3" style={{ width: "22rem" }}>

                                    <img className='card-img-top ' src={items.img} alt="" style={{ height: "250px" }} />

                                    <div className='card-body '>

                                        <h5 className='card-title'>Model: {items.name}</h5>

                                        <h5 className='card-title'>Price: {items.price} $</h5>

                                        <div className="card-footer ">

                                            <h6 className="card-text ">{items.dec}</h6>

                                        </div>

                                    </div>

                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Phone