import React from 'react'
import { useQuery } from 'react-query'
import Loadding from '../Share/Loadding'

const GetAllOrder = () => {



    const { isLoading, error, data, refetch } = useQuery(['AllOrders'], () =>
        fetch("http://localhost:5000/allorders").then(res =>
            res.json()
        )
    )


    if (isLoading) {
        <Loadding />
    }

    console.log(data)


    return (
        <div>
            <p className='font-bold text-center text-2xl'>Our Booking Country Number: {data?.length}</p>


            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>Serial</th>
                                <th>Your Address</th>
                                <th>Email:</th>
                                <th>Your Phone:</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Image</th>

                                {/* <th>Date</th> */}
                                <th>Order Cencel</th>
                                {/* <th>Payment</th> */}
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data?.length === 0 && <p className=' text-2xl text-red-500'>You Have No Order yet</p>
                            }
                            {
                                data?.map((order, index) => <tr
                                    key={index}
                                >
                                    <th>{index + 1}</th>
                                    <th>{order?.address}</th>
                                    <td>{order?.buyingEmail}</td>
                                    <td>{order?.phone}</td>
                                    <td>{order?.quantity}</td>
                                    <td>{order?.totalprice}</td>
                                    <td><img width="50px" src={order?.img} alt="" /></td>

                                    {/* <td>{order?.date}</td> */}
                                    <td><button
                                        // onClick={() => handleDelete(order._id)} 
                                        className='btn btn-error'>Cencle</button></td>
                                    {/* <td>
                    {(order?.totalprice && order?.paid) && <span className='btn btn-disabled'>Cencle</span>}
                    {(order?.totalprice && !order?.paid) && <button onClick={() => handleDelete(order._id)} className='btn btn-error'>Cencle</button>}
                </td> */}

                                    {/* <td>
                    {(order?.totalprice && !order?.paid) && <Link to={`/dashboard/payment/${order?._id}`}><button className='btn btn-success'>Pay</button></Link>}
                    {(order?.totalprice && order?.paid) && <span className='text-success'>Already Paid</span>}
                </td> */}

                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default GetAllOrder