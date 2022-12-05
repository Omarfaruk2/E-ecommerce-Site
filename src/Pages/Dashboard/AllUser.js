import React from 'react'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import swal from 'sweetalert'
import Loadding from '../Share/Loadding'

const AllUser = () => {


    const { isLoading, error, data: alluser, refetch } = useQuery(['helluser'], () =>
        fetch("https://e-commarce-server.onrender.com/user").then(res =>
            res.json()
        )
    )

    if (isLoading) {
        <Loadding />
    }

    const makeAdmin = (email) => {

        swal({
            title: "Are you sure want to make an Admin?",
            text: "Once deleted, you will not be able to make an Admin !",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    refetch()
                    swal("Successfullly made an Admin", {
                        icon: "success",

                    })


                    fetch(`https://e-commarce-server.onrender.com/user/admin/${email}`, {
                        method: 'PUT',
                        headers: {
                            "authorization": `Bearer ${localStorage.getItem("accessToken")}`
                        }
                    })
                        .then(res => {
                            if (res.status === 403) {
                                toast.error("Failed to make an admin")
                            }
                            return res.json()
                        }
                        )
                        .then(data => {
                            if (data.modifiedCount > 0) {
                                refetch()
                                toast.success(`Successfullly made an Admin`)
                            }
                        })


                } else {
                    swal("Failed to make an admin")
                }
            })


    }


    const handleuserDelete = (id) => {

        swal({
            title: "Are you sure want to remove user?",
            text: "Once deleted, you will not be able to recover user!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    refetch()
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    })


                    const url = `https://e-commarce-server.onrender.com/user/${id}`
                    console.log(id)
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
                    swal("Your imaginary file is safe!")
                }
            })
    }


    return (
        <div
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1000"
        >
            <h2 className='text-center text-3xl'>All Users: {alluser?.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr className='bg-base-300 text-center'>
                            <th>Serial</th>
                            <th>Email</th>
                            <th>Seller</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>

                        </tr>
                    </thead>
                    <tbody className='text-center '>
                        {
                            alluser?.map((user, index) => <tr
                                key={user._id}
                            >
                                <th>{index + 1}</th>
                                <td>{user?.email}</td>
                                {/* <td><button onClick={() => makeAdmin(user?.email)} className='btn btn-xs'>Make Admin</button></td>
                                <td><button className='btn btn-xs'>Remove User</button></td> */}

                                <td> {user?.role === "seller" && <button className='btn btn-primary'>Seller</button>} </td>

                                <td> {user?.role !== "admin" && <button onClick={() => makeAdmin(user?.email)} className='btn btn-xs'>Make Admin</button>} </td>

                                <td> <button onClick={() => handleuserDelete(user?._id)} className='btn btn-xs btn-error'>Remove User</button> </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllUser