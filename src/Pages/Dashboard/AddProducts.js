import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router'
import auth from '../../firebase.init'
import useAdmin from '../Hooks/useAdmin'

const AddProducts = () => {

    const [user, loading,] = useAuthState(auth)
    const [admin] = useAdmin(user)


    const [categoryName, setCategoryName] = useState("")
    const [imgurl, setImgurl] = useState("")

    const navigate = useNavigate()

    const { register, formState: { errors }, handleSubmit } = useForm()

    const imgStoruageKey = "9d81a4d8cc96f4d663c965e210ea2f5b"



    const { isLoading, error, data: catagorilist, refetch } = useQuery(['catagorilist'], () =>
        fetch('http://localhost:5000/catagorilist').then(res =>
            res.json()
        )
    )

    if (isLoading || loading) {
        return <p>Loading</p>
    }

    // catagorilist?.map(x => console.log(x?.idName, "hello"))
    console.log(catagorilist, "hello data")



    const handlelist = () => {
        let seceltevalue = document.getElementById("list").value
        console.log(seceltevalue)
        setCategoryName(seceltevalue)
    }



    const onSubmit = (data) => {
        const sellerEmail = user.email
        const img = data.img[0]
        const formData = new FormData()
        formData.append('image', img)

        // console.log(categoryName, "from ar bitore")
        // const categoryName = 

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
                        categoryName: categoryName,
                        price: data.price,
                        ProductName: data.ProductName,
                        grade: data.grade,
                        description: data.description,
                        brand: data.brand
                    }

                    if (admin) {

                        const fullFile = { sellerEmail, ...updatedate }
                        const role = "admin"
                        const final = { role: role, ...fullFile }

                        const url = "http://localhost:5000/item"
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
                        const allFile = { sellerEmail, ...updatedate }
                        const role = "seller"
                        const final = { role: role, ...allFile }

                        const url = "http://localhost:5000/item"
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


    // load all catagori list



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
                                {...register("ProductName", { required: true })} type="text"
                                placeholder="Type here" className="input input-bordered sm:w-full lg:w-11/12" />
                            <label className="label">
                                <span className="label-text-alt">{errors.ProductName && <p>Last name is required</p>}</span>
                            </label>
                        </div>

                        {/* categoryName */}
                        <div className="form-control lg:w-5/12 sm:w-full my-0 mr-0 ml-6 inline-block mx-auto" >
                            <label className="label">
                                <span className="label-text">Catagoriname Name</span>
                            </label>
                            <div className="input-group">
                                <select id='list' onChange={() => handlelist()} className="select select-bordered">
                                    <option disabled selected>Pick category</option>
                                    {
                                        catagorilist?.map(x =>
                                            <option
                                                key={x._id}
                                            >{x?.idName}</option>
                                        )
                                    }

                                    {/* <option>cement</option>
                                    <option>waterTanks</option>
                                    <option>hardware</option>
                                    <option>renovation</option>
                                    <option>decoration</option> */}

                                </select>
                            </div>
                            {/* <input
                                {...register("categoryName", { required: true })} type="text"
                                placeholder="Type here" className="input input-bordered sm:w-full lg:w-11/12" />
                            <label className="label">
                                <span className="label-text-alt">{errors.categoryName && <p>Last name is required</p>}</span>
                            </label> */}

                        </div>

                        {/* from daisi ui */}

                        {/* <div className="">
                        <div className="input-group">
                                <select id='list' onChange={() => handlelist()} className="select select-bordered">
                                    <option disabled selected>Pick category</option>
                                    <option>T-shirts</option>
                                    <option>Mugs</option>
                                </select>
                            </div>
                        </div> */}


                        {/* grade */}
                        <div className="form-control lg:w-5/12 sm:w-full my-0 mr-0 ml-6 inline-block mx-auto" >
                            <label className="label">
                                <span className="label-text">Grade Name</span>
                            </label>
                            <input
                                {...register("grade", { required: true })} type="text"
                                placeholder="Type here" className="input input-bordered sm:w-full lg:w-11/12" />
                            <label className="label">
                                <span className="label-text-alt">{errors.grade && <p>Last name is required</p>}</span>
                            </label>
                        </div>

                        {/* brand */}
                        <div className="form-control lg:w-5/12 sm:w-full my-0 mr-0 ml-6 inline-block mx-auto" >
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <input
                                {...register("brand", { required: true })} type="text"
                                placeholder="Type here" className="input input-bordered sm:w-full lg:w-11/12" />
                            <label className="label">
                                <span className="label-text-alt">{errors.brand && <p>Last name is required</p>}</span>
                            </label>
                        </div>


                        {/* image */}

                        <div className="form-control lg:w-5/12 my-0 mr-0 ml-6 inline-block mx-auto" >
                            <label className="label">
                                <span className="label-text">Photo Upload</span>
                            </label>
                            <input
                                {...register("img", { required: true })} type="file"
                                placeholder="Type here" className="input input-bordered sm:w-full lg:w-11/12" />
                            <label className="label">
                                <span className="label-text-alt">{errors.image && <p>Last name is required</p>}</span>
                            </label>
                            {imgurl &&
                                <img src={imgurl} alt="" />
                            }
                        </div>

                        {/* minquantity */}

                        {/* <div className="form-control lg:w-5/12 my-0 mr-0 ml-6 inline-block mx-auto" >
                            <label className="label">
                                <span className="label-text">Minimum Quantity</span>
                            </label>
                            <input
                                {...register("minquantity", { required: true })} type="number"
                                placeholder="Type here" className="input input-bordered sm:w-full lg:w-11/12" />
                            <label className="label">
                                <span className="label-text-alt">{errors.minquantity && <p>Last name is required</p>}</span>
                            </label>
                        </div>
 */}
                        {/* avilablequantity */}
                        {/* 
                        <div className="form-control lg:w-5/12 my-0 mr-0 ml-6 inline-block mx-auto" >
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input
                                {...register("avilablequantity", { required: true })} type="number"
                                placeholder="Type item available" className="input input-bordered sm:w-full lg:w-11/12" />
                            <label className="label">
                                <span className="label-text-alt">{errors.avilablequantity && <p>Last name is required</p>}</span>
                            </label>
                        </div> */}

                        {/* price */}

                        <div className="form-control lg:w-5/12 my-0 mr-0 ml-6 inline-block mx-auto" >
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                {...register("price", { required: true })} type="number"
                                placeholder="Type items price" className="input input-bordered sm:w-full lg:w-11/12" />
                            <label className="label">
                                <span className="label-text-alt">{errors.price && <p>Last name is required</p>}</span>
                            </label>
                        </div>

                        {/* description */}

                        <div className="form-control lg:w-5/12 my-0 mr-0 ml-6 inline-block mx-auto" >
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea
                                {...register("description", { required: true })} type="text"
                                placeholder="Type here" className="input input-bordered w-11/12" />
                            <label className="label">
                                <span className="label-text-alt">{errors?.description && <p>Last name is required</p>}</span>
                            </label>
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

export default AddProducts