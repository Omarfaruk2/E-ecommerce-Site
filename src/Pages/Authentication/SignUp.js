import React from 'react'
import { useNavigate } from 'react-router'
import { useForm } from "react-hook-form"
import auth from '../../firebase.init'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import useToken from '../Hooks/useToken'
import Loadding from '../Share/Loadding'


const SignUp = () => {

    const [updateProfile, updating, uperror] = useUpdateProfile(auth)

    const navigate = useNavigate()

    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth)
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth)

    const { register, formState: { errors }, handleSubmit } = useForm()

    const handlegoogleSingin = () => {
        signInWithGoogle()
    }

    const onSubmit = async (data) => {
        const displayName = data.displayName
        await createUserWithEmailAndPassword(data?.email, data?.password)
        await updateProfile({ displayName })
        // alert('Updated profile')
        // console.log(data)


    }
    // --------------------------------------------------------------

    // console.log(user, "lortem")
    const [token] = useToken(guser || user)

    if (error || gerror || uperror) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        )
    }
    if (loading || gloading || updating) {
        <Loadding />
    }

    if (token) {
        navigate("/")
    }

    // --------------------------------------------------------------------

    // console.log(guser, "guse")
    // console.log(user, "user email")

    return (

        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sing Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">

                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" className="input input-bordered" {...register("displayName", { required: true })} />
                                    {errors.name?.type === 'required' && "First name is required"}
                                </div>

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

                                        <p>Already have an account? <Link className="text-primary underline" to="/login">Please Login</Link></p>
                                        {/* <Link to="/login">Login</Link> */}

                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary">Sign Up</button>
                                </div>
                            </form>
                            <div className="grid h-15 flex-grow card  rounded-box place-items-center">
                                <button onClick={() => handlegoogleSingin()} className="btn btn-primary">Google</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp