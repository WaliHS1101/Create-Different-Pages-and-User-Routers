import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogInData from '../Hooks/useLogInContext';


function SignIn() {
    const { user } = useLogInData();
    const [SignUpUserNameOrEmail, setSignUpUserNameOrEmail] = useState("");
    const [SignUpUserPwd, setSignUpUserPwd] = useState("");

    function SignIn(e) {

        e.preventDefault();
        if (SignUpUserNameOrEmail === "" || SignUpUserPwd === "") {
            alert("Fill the Form")
        }
        else {
            const UserFound = user.find((user) => (SignUpUserNameOrEmail === user.uEmail || SignUpUserNameOrEmail === user.uName) && SignUpUserPwd === user.uPwd)
            if (UserFound) {
                alert("LogIn")
            }
            else {
                alert("User Not Found")
            }
        }

    }
    return (
        <>
            <div className="container text-white d-flex justify-content-center ">
                <div>
                    <form className='border border-1 border-info p-3' onSubmit={SignIn} style={{ width: "18rem" }} >

                        <h1 className='text-center'>SignUp</h1>

                        <label htmlFor="SignUpUserNameOrEmail" className='form-label mt-2'>UserName or Email</label>
                        <input type="text" placeholder='UserName or Email' className='form-control' onChange={(e) => { setSignUpUserNameOrEmail(e.target.value) }} />

                        <label htmlFor="UserPassword" className='form-label mt-2'>Password</label>
                        <input type="password" placeholder='Password' className='form-control' onChange={(e) => { setSignUpUserPwd(e.target.value) }} />

                        <Link to="/SignUp" className='m-1'><p>don't have account click here</p></Link>


                        <input type="submit" className='mt-4 btn btn-success d-block m-auto ' />
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignIn