import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import useAdmin from '../Hooks/useAdmin'
import useSeller from '../Hooks/useSeller'

const AddCategories = () => {

    const [imgurl, setImgurl] = useState("")
    const navigate = useNavigate()
    const [user, loading,] = useAuthState(auth)
    const { register, formState: { errors }, handleSubmit } = useForm()

    const [admin] = useAdmin(user)
    const [seller] = useSeller(user)





    const imgStoruageKey = "9d81a4d8cc96f4d663c965e210ea2f5b"

    const onSubmit = (data) => {
        const catagoriEmail = user.email
        const img = data.img[0]
        const formData = new FormData()
        formData.append('image', img)

        const url = `https://api.imgbb.com/1/upload?key=${imgStoruageKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    setImgurl(result.data.url)
                    const updatedate = {
                        img: result.data.url,
                        name: data.name,
                        idName: data.idName
                    }

                    if (admin) {
                        const allFile = { catagoriEmail, ...updatedate }
                        const role = "admin"
                        const final = { role: role, ...allFile }


                        const url = "http://localhost:5000/catagorilist"
                        fetch(url, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(final)
                        })
                            .then(res => res.json())
                            .then(e => {
                                if (e.insertedId);
                                data = {}
                                navigate('/')
                            })
                    }
                    else {
                        const allFile = { catagoriEmail, ...updatedate }

                        const role = "seller"
                        const final = { role: role, ...allFile }


                        const url = "http://localhost:5000/catagorilist"
                        fetch(url, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(final)
                        })
                            .then(res => res.json())
                            .then(e => {
                                if (e.insertedId);
                                data = {}
                                navigate('/')
                            })
                    }



                }

            })

    }



    return (
        <div>
            <div className="card w-5/6 mx-auto bg-base-100 shadow-2xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">Add Items</h2>

                    {/* form------------------------------------------------------ */}
                    <form className='mx-auto' onSubmit={handleSubmit(onSubmit)}>

                        {/* name */}
                        <div className="form-control lg:w-5/12 sm:w-full my-0 mr-0 ml-6 inline-block mx-auto" >
                            <label className="label">
                                <span className="label-text">Products Name</span>
                            </label>
                            <input
                                {...register("name", { required: true })} type="text"
                                placeholder="Type here" className="input input-bordered sm:w-full lg:w-11/12" />
                            <label className="label">
                                <span className="label-text-alt">{errors.name && <p>Last name is required</p>}</span>
                            </label>
                        </div>

                        {/* categoryName */}
                        <div className="form-control lg:w-5/12 sm:w-full my-0 mr-0 ml-6 inline-block mx-auto" >
                            <label className="label">
                                <span className="label-text">Catagoriname Name</span>
                            </label>

                            <input
                                {...register("idName", { required: true })} type="text"
                                placeholder="Type here" className="input input-bordered sm:w-full lg:w-11/12" />
                            <label className="label">
                                <span className="label-text-alt">{errors.idName && <p>Last name is required</p>}</span>
                            </label>

                        </div>

                        {/* image */}

                        <div className="form-control lg:w-5/12 my-0 mr-0 ml-6 inline-block mx-auto" >
                            <label className="label">
                                <span className="label-text">Photo Upload</span>
                            </label>

                            <input
                                {...register("img", { required: true })} type="file"
                                placeholder="Type here" className="file-input file-input-bordered file-input-secondary sm:w-full lg:w-11/12" />

                            {/* <input type="file" className=" " /> */}



                            <label className="label">
                                <span className="label-text-alt">{errors.image && <p>Last name is required</p>}</span>
                            </label>
                            {imgurl &&
                                <img src={imgurl} alt="" />
                            }
                        </div>

                        <div className='mx-auto'>
                            <p className='ml-10'> <button className='btn btn-primary w-1/5 mx-auto' type='submit'> Submit</button></p>
                        </div>

                    </form>


                    {/* from--------------------------------------------- */}


                </div>
            </div>

        </div>
    )
}

export default AddCategories