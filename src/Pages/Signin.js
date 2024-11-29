import React, { useState } from 'react';

const Signin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errPassword, setErrPassword] = useState("")

    const emailHandle = (e) => {
        setEmail(e.target.value)
    }
    const passwordHandle = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = () => {
        if (password.length < 8) {
            setErrPassword("Min password length should be 8 characters")
        }
        else {
            setErrPassword("")
        }

    }
    const alertMsg = () => {
        alert("Login!")
    }
    const promptMsg = () => {
        alert("Signin!")
    }
    return (
        <>
            <div className='container h-100'>
                <div className="row w-100 vh-100 align-items-center">
                    <div className='col-6'>
                        <h1>
                            Welcome To Signin Page!
                        </h1>
                        <p>Learn React How to Code by Practicing Form Validations</p>
                    </div>
                    <div className='col-6'>
                        <form>
                            <div class="mb-3 text-start">
                                <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => emailHandle(e)} />
                            </div>
                            <div class="mb-3 text-start">
                                <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" onChange={e => passwordHandle(e)} />
                                <span className='text-danger'>{errPassword}</span>
                            </div>
                            <div class="mb-3 form-check text-start">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <div className='text-start'>
                                <button type="submit" className="btn btn-primary" onSubmit={e => handleSubmit()}>Submit</button>
                            </div>
                            <div className='text-start'>
                                <button type="submit" className="btn btn-primary" onClick={e => alertMsg()}>Login</button>
                            </div><div className='text-start'>
                                <button type="submit" className="btn btn-primary" onClick={e => promptMsg()}>Sigin</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Signin



// import React from 'react';

// const Signin = () => {
//     return (
//         <>
//             <div className='container vh-100'> {/* Full-screen height */}
//                 <div className='row h-100'>
//                     <div className='col-12 d-flex align-items-center justify-content-center'>
//                         <div className="row w-100 h-auto">
//                             <div className='col-md-6 text-center'>
//                                 <h1>Welcome To Signin Page!</h1>
//                                 <p>Learn React How to Code by Practicing Form Validations</p>
//                             </div>
//                             <div className='col-md-6'>
//                                 <form>
//                                     <div className="mb-3">
//                                         <label htmlFor="exampleInputEmail1" className="form-label text-left">
//                                             Email address
//                                         </label>
//                                         <input
//                                             type="email"
//                                             className="form-control"
//                                             id="exampleInputEmail1"
//                                             aria-describedby="emailHelp"
//                                         />
//                                     </div>
//                                     <div className="mb-3">
//                                         <label htmlFor="exampleInputPassword1" className="form-label">
//                                             Password
//                                         </label>
//                                         <input
//                                             type="password"
//                                             className="form-control"
//                                             id="exampleInputPassword1"
//                                         />
//                                     </div>
//                                     <div className="mb-3 form-check">
//                                         <input
//                                             type="checkbox"
//                                             className="form-check-input"
//                                             id="exampleCheck1"
//                                         />
//                                         <label className="form-check-label" htmlFor="exampleCheck1">
//                                             Check me out
//                                         </label>
//                                     </div>
//                                     <button type="submit" className="btn btn-primary">
//                                         Submit
//                                     </button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Signin;
