import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import swal from 'sweetalert'
import auth from '../../firebase.init'
import Loadding from '../Share/Loadding'

const AllProdcts = () => {

    const [user, loading,] = useAuthState(auth)

    const { isLoading, error, data, refetch } = useQuery(['allItems'], () =>
        fetch("https://desolate-river-18269.herokuapp.com/item").then(res =>
            res.json()
        )
    )
    refetch()


    const handleDelete = (id) => {
        swal({
            title: "Are you  want to remove Products?",
            text: "Once deleted, you will not be able to recover user!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {

                if (willDelete) {
                    refetch()
                    swal("Successfullly remove your boking", {
                        icon: "success",
                    })

                    const url = `https://desolate-river-18269.herokuapp.com/item/${id}`
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
                    swal("Failed to remove booking")
                }
            })
    }

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
                                <th>ProductName</th>
                                <th>Addider Email:</th>
                                <th>Who Add</th>

                                <th>Id</th>
                                <th>Price</th>
                                <th>Image</th>

                                {/* <th>Date</th> */}
                                <th>Remove Order</th>
                                {/* <th>Payment</th> */}
                            </tr>
                        </thead>
                        <tbody className='text-center'>

                            {
                                data?.length === 0 && <p className=' text-2xl text-red-500'>You Have No Order yet</p>
                            }
                            {
                                data?.map((order, index) => <tr
                                    key={index}
                                >
                                    <th>{index + 1}</th>
                                    <th>{order?.ProductName}</th>
                                    <td>{order?.sellerEmail}</td>
                                    <td> <b >[ {order?.role?.toUpperCase()} ]</b></td>
                                    <td>{order?._id}</td>
                                    <td>{order?.price}</td>
                                    <td><img width="50px" src={order?.img} alt="" /></td>

                                    {/* <td>{order?.date}</td> */}
                                    <td><button
                                        onClick={() => handleDelete(order?._id)}
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

export default AllProdcts