import React from 'react'

function Contact(props) {
    return (
        <>

            <div className="container mt-3 text-center ">
                <div className="row">

                    <div className="col-lg-6 col-12 mt-lg-0 ">

                        <div className='card bg-light  '>

                            <h3 className="card-title "> Contact</h3>

                            <div className='card-footer  '>

                                <h4 className='card-text '> Phone Number : {props.LoContact.number}</h4>
                                <h4 className='card-text '> Whatsapp : {props.LoContact.Whatsapp}</h4>
                                <h4 className='card-text mb-2'> Email : {props.LoContact.Email}</h4>

                            </div>

                        </div>
                    </div>

                    <div className="col-lg-6 col-12 mt-lg-0 mt-4 ">

                        <div className='card bg-light  '>

                            <h3 className="card-title "> Social Account</h3>

                            <div className='card-footer  '>

                                <h5>YouTube : <a href="https://www.youtube.com/@WHS-GAME/featured"><i class="fa-brands fa-youtube" style={{ color: "#d42121" }}></i></a></h5>

                                <h5>Facebook : <a href="https://facebook.com/profile.php?id=100009470432828"><i class="fa-brands fa-facebook-f" style={{ color: "#1970b3" }}></i></a></h5>

                                <h5>Twitter : <a href="https://twitter.com/WaliHus51975846"><i class="fa-brands fa-x-twitter" style={{ color: "black" }}></i></a></h5>

                                <h5>Instagram : <a href="https://instagram.com/walih1101"><i class="fa-brands fa-instagram" style={{ color: "black" }}></i></a></h5>

                                <h5>Facebook Page : <a href="https://facebook.com/WHS-GAME-114240440013315/?modal=admin_todo_tour"><i class="fa-brands fa-facebook-f" style={{ color: "#1970b3" }}></i></a></h5>

                            </div>

                        </div>

                    </div>

                </div>

            </div >

        </>
    )
}

export default Contact