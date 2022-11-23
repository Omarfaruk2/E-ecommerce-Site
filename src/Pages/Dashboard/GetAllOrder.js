import React from 'react'
import { useQuery } from 'react-query'
import swal from 'sweetalert'
import Loadding from '../Share/Loadding'

const GetAllOrder = () => {



    const { isLoading, error, data, refetch } = useQuery(['AllOrders'], () =>
        fetch("https://desolate-river-18269.herokuapp.com/allorders").then(res =>
            res.json()
        )
    )


    if (isLoading) {
        <Loadding />
    }

    const handleDelete = (id) => {
        swal({
            title: "Are you  want to remove Catagori?",
            text: "Once deleted, you will not be able to recover user!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {

                if (willDelete) {
                    refetch()
                    swal("Successfullly remove your Catagori", {
                        icon: "success",
                    })

                    const url = `https://desolate-river-18269.herokuapp.com/allorders/${id}`
                    fetch(url, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data?.deletedCount > 0) {
                                console.log(data, "Success to delete")
                                refetch()
                            }
                        })
                } else {
                    swal("Failed to remove Catagori")
                }
            })
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
                                <th>Payment</th>
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
                                        onClick={() => handleDelete(order._id)}
                                        className='btn btn-error'>Cencle</button></td>
                                    <td><button

                                        className='btn btn-secondary'>Pay</button></td>

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