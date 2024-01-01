import React, { useState } from 'react'
import Users from "./Users"
import "./SignUp.css"
import { Link } from 'react-router-dom';

function SignUp() {

    const [user, setUser] = useState(Users);
    const [SignUpUserName, SetSignUpUserName] = useState("");
    const [SignUpUserEmail, SetSignUpUserEmail] = useState("");
    const [SignUpUserProfile, SetSignUpUserProfile] = useState("")
    const [SignUpUserPwd, SetSignUpUserPwd] = useState("");

    function SignUp(e) {

        e.preventDefault();

        if (SignUpUserEmail === "" || SignUpUserName === "" || SignUpUserPwd === "" || SignUpUserProfile === "") {
            alert("Please Fill the form")
        }

        else {
            const UserFoundEmail = user.find((user) => SignUpUserEmail === user.uEmail)
            const UserFoundUserName = user.find((user) => SignUpUserName === user.uName)

            if (UserFoundEmail) {
                alert("Email already in use")
            }
            else if (UserFoundUserName) {
                alert("User Name already in use")

            }
            else {
                const Person = { uName: SignUpUserName, uEmail: SignUpUserEmail, uProfile: SignUpUserProfile, uPwd: SignUpUserPwd }
                setUser([...user, Person])
                console.log(user)
            }
        }

    }

    return (
        <>
            <div className="container text-white d-flex justify-content-center ">
                <div>
                    <form className='border border-1 border-info p-3' onSubmit={SignUp} style={{ width: "18rem" }} >

                        <h1 className='text-center'>SignUp</h1>

                        <label htmlFor="SignUpUserName" className='form-label mt-2'>UserName</label>
                        <input type="text" placeholder='UserName' className='form-control' onChange={(e) => { SetSignUpUserName(e.target.value) }} />

                        <label htmlFor="SignUpUserEmail" className='form-label mt-2'>Email</label>
                        <input type="email" placeholder='Email' className='form-control' onChange={(e) => { SetSignUpUserEmail(e.target.value) }} />

                        <label htmlFor="SignUpUserPrifile" className='form-label mt-2'>Profile Photo</label>
                        <input type="text" placeholder='Profile Photo' className='form-control' onChange={(e) => { SetSignUpUserProfile(e.target.value) }} />

                        <label htmlFor="UserPassword" className='form-label mt-2'>Password</label>
                        <input type="password" placeholder='Password' className='form-control' onChange={(e) => { SetSignUpUserPwd(e.target.value) }} />

                        <Link to="/SignIn" className='m-1'><p>Already have account click here</p></Link>

                        <input type="submit" className='mt-4 btn btn-success d-block m-auto ' />
                    </form>
                </div>
            </div>

            <div>
                <div className="container">
                    {user.map((elements) => {
                        return (
                            <div className="row text-center text-white mt-4">
                                <div className="col-lg-8 bg-dark m-auto">
                                    <div className=" col-12 ">
                                        <img className='m-3 SignUpProfile' src={elements.uProfile} alt="" />
                                        <h1 className='m-3'>UserName: {elements.uName} </h1>
                                        <h3 className='m-3'>Email: {elements.uEmail}</h3>
                                        <h6 className='m-3'>Password: {elements.uPwd} </h6>
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

export default SignUp