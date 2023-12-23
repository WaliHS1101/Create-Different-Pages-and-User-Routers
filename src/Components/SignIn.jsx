import React from 'react'

function SignIn() {
    return (
        <>
            <div className="container text-white d-flex justify-content-center ">
                <div>
                    <form className='border border-1 border-info p-3' style={{ width: "18rem" }} >

                        <h1 className='text-center'>SignUp</h1>

                        <label htmlFor="SignUpUserName" className='form-label mt-2'>UserName</label>
                        <input type="text" placeholder='UserName' className='form-control' />

                        <label htmlFor="UserPassword" className='form-label mt-2'>Password</label>
                        <input type="password" placeholder='Password' className='form-control' />

                        <input type="submit" className='mt-4 btn btn-success d-block m-auto ' />
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignIn