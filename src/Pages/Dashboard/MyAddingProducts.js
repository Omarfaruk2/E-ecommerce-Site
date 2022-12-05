import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import swal from 'sweetalert'
import auth from '../../firebase.init'
import Loadding from '../Share/Loadding'

const MyAddingProducts = () => {

    const [user, loading,] = useAuthState(auth)

    const { isLoading, error, data, refetch } = useQuery(['addingItem'], () =>
        fetch(`https://e-commarce-server.onrender.com/itemquery?email=${user?.email}`).then(res =>
            res.json()
        )
    )

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

                    const url = `https://e-commarce-server.onrender.com/item/${id}`
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



    if (isLoading || loading) {
        <Loadding />
    }
    // refetch()
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
                                <th>Email:</th>
                                <th>Grade</th>
                                <th>categoryName</th>
                                <th>Price</th>
                                <th>Image</th>

                                {/* <th>Date</th> */}
                                <th>Delete Item</th>
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
                                    <th>{order?.ProductName}</th>
                                    <td>{order?.sellerEmail}</td>
                                    <td>{order?.grade}</td>
                                    <td>{order?.categoryName}</td>
                                    <td>{order?.price}</td>
                                    <td><img width="50px" src={order?.img} alt="" /></td>

                                    {/* <td>{order?.date}</td> */}
                                    <td><button
                                        onClick={() => handleDelete(order?._id)}
                                        className='btn btn-error'>Delete Item</button></td>

                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MyAddingProducts