import React, { useEffect } from 'react'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import auth from '../../firebase.init'
import useToken from '../Hooks/useToken'
import Loadding from '../Share/Loadding'

const Login = () => {

    let location = useLocation()
    let from = location.state?.from?.pathname || "/"
    const navigate = useNavigate()
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth)
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth)
    const [token] = useToken(guser || user)

    const { register, formState: { errors }, handleSubmit } = useForm()

    const handlegoogleSingin = () => {
        signInWithGoogle()
    }
    const onSubmit = (data) => {
        signInWithEmailAndPassword(data?.email, data?.password)
        console.log(data)
    }



    useEffect(() => {

        if (token) {
            navigate(from, { replace: true })
        }


    }, [from, navigate, token])

    if (error || gerror) {

        return <p>Error: {error.message}</p>


    }

    if (loading || gloading) {
        return <Loadding />
    }


    return (
        <div>
            {/*  Start*/}

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">

                            {/* start from */}
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: "Email Address is required" })} />
                                    <p>{errors.email?.message}</p>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                                    <p>{errors.password?.message}</p>

                                    <label className="label">
                                        <button>Forgot password?</button> <br /> <br />
                                        <p>New to Made Easy Menufacturere?
                                            <Link className="text-primary underline" to="/singup">Creat new account</Link>
                                        </p>
                                        <br />
                                        <p className='mt-6'>Are you seller ?
                                            <Link className="text-primary underline" to="/sellerlogin">Creat new account</Link>
                                        </p>

                                        {/* <Link to="/singup">SingUp</Link> */}

                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            {/* end from */}
                        </div>
                    </div>
                </div>
            </div>

            {/* End */}
        </div>
    )
}

export default Login