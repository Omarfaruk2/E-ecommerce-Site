import { Icon } from '@iconify/react'
import React, { useRef, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router'
import auth from '../../firebase.init'
import useAdmin from '../Hooks/useAdmin'
import useSeller from '../Hooks/useSeller'
import Loadding from '../Share/Loadding'

const SingleShipItems = () => {

    const [user, loading,] = useAuthState(auth)

    const [admin] = useAdmin(user)
    const [seller] = useSeller(user)

    console.log(seller, "seller", admin, "admin")

    const param = useParams()
    const { id, categoryName } = param

    // console.log(id, categoryName)
    const navigate = useNavigate()
    const [totalprice, setTotalPrice] = useState('')
    // const [quantity, setQuantity] = useState('')

    const valueRaf = useRef("")

    const { register, formState: { errors }, handleSubmit } = useForm()



    const { isLoading, error, data, refetch } = useQuery(['repoData'], () =>
        fetch(`https://e-commarce-server.onrender.com/item/${categoryName}/${id}`).then(res =>
            res.json()
        )
    )

    const main = data[0]

    if (!main || isLoading || loading) {
        <Loadding />
    }

    const { ProductName, img, price, brand, grade, name, _id, description, sellerEmail } = main
    refetch()
    const sellerEmailbackend = sellerEmail

    const onSubmit = (from) => {

        // console.log(totalprice, "helo")
        const quantity = valueRaf.current?.value
        const address = from.address
        const phone = from.phone
        // const totalprice = from.totalprice
        // const totalprice = totalprice
        const buyingEmail = user.email
        const username = user?.displayName

        let voo = { address, phone, quantity, totalprice, buyingEmail, name, img, username, sellerEmailbackend }
        console.log(voo)

        refetch()


        const url = "https://e-commarce-server.onrender.com/myorders"
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(voo)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId);
                voo = {}
                refetch()
                navigate('/dashboard/myorder')
            })

    }



    if (isLoading) {
        return <p>Loading</p>
    }




    return (
        <div className='mt-12'>
            <div className='grid w-4/5 mx-auto grid-cols-2'>
                <div>
                    <img className='mx-auto' src={img} alt="" />
                    <p className='mt-10 font-bold text-xl'>{description}</p>
                </div>
                <div>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{ProductName}</h2>
                            <p>Brand :{brand}</p>
                            <p>Grade :{grade}</p>
                            <small>Id: {_id}</small>

                            <b className='mt-2'>Per Pics Price :$ {price}</b>

                            {/* start input */}

                            {/* input start */}
                            <form className='form-input ' onSubmit={handleSubmit(onSubmit)}>


                                <div className='lg:flex lg:justify-around'>
                                    <div className="form-control order-form">
                                        <label className="label">
                                            <span className="label-text">Your Address</span>
                                        </label>

                                        <input {...register("address", { required: true })} type="text" placeholder='Address' className="input input-bordered " />
                                        <label className="label">
                                            <span className="label-text-alt"> {errors.address && <p>Address is required</p>}</span>
                                        </label>
                                    </div>

                                    <div className="form-control  order-form">
                                        <label className="label">
                                            <span className="label-text">Your Number</span>
                                        </label>
                                        <input {...register("phone", { required: true })} type="number" placeholder='Number' className="input input-bordered" />
                                        <label className="label">
                                            <span className="label-text-alt"> {errors.phone && <p>Last name is required</p>}</span>
                                        </label>
                                    </div>
                                </div>

                                {/*---------------------------------- avilable quantity price----------------------- */}


                                <div className='lg:flex lg:justify-around'>

                                    <div className="form-control order-form">
                                        <label className="label">
                                            <span className="label-text">Order Quantity</span>
                                        </label>

                                        <input ref={valueRaf}
                                            onChange={() => setTotalPrice(valueRaf.current?.value * price)}
                                            // {...register("orderquantity")}
                                            // name="orderquantity"
                                            type="number" placeholder="Quantity" className="input input-bordered lg:w-48 " />



                                        <label className="label">
                                            <span className="label-text-alt"> {errors.orderquantity && <p>Last name is required</p>}</span>
                                        </label>
                                    </div>

                                    {/* total price */}


                                    <div className="form-control  order-form">
                                        <label className="label">
                                            <span className="label-text">Total Price</span>
                                        </label>
                                        <input defaultValue={price}
                                            readOnly
                                            value={totalprice}
                                            // {...register("totalprice", { required: true })} 
                                            className="input input-bordered" />
                                        <label className="label">
                                            <span className="label-text-alt"> {errors.orderquantity && <p>Last name is required</p>}</span>
                                        </label>
                                    </div>
                                </div>



                                {seller ?
                                    <p className='text-center'>
                                        {/* <button className="btn" disabled>Disabled using attribute</button> */}
                                        <button type="submit" className='btn w-3/5 ' disabled>Submit</button>
                                    </p>
                                    : ""
                                }

                                {admin ?
                                    <p className='text-center'>
                                        {/* <button className="btn" disabled>Disabled using attribute</button> */}
                                        <button type="submit" className='btn w-3/5 ' disabled>Submit</button>
                                    </p>
                                    : ""
                                }

                                {(!admin && !seller) ?
                                    <p className='text-center'><button type="submit" className='btn btn-primary w-3/5 btn-outline'>Submit</button></p>

                                    : ""
                                }


                            </form>

                            {/* End */}


                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default SingleShipItems