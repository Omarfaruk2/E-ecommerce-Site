import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import swal from 'sweetalert'
import auth from '../../firebase.init'
import useAdmin from '../Hooks/useAdmin'
import useSeller from '../Hooks/useSeller'

const ManageAllCatagori = () => {


    const [user, loading,] = useAuthState(auth)

    const [admin] = useAdmin(user)
    const [seller] = useSeller(user)

    const { isLoading, error, data: catagorio, refetch } = useQuery(['loadAllCatagori'], () =>
        fetch('https://desolate-river-18269.herokuapp.com/catagorilist').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <p>Loading</p>
    }
    refetch()


    const handleCatagoriDelete = (id) => {
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

                    const url = `https://desolate-river-18269.herokuapp.com/catagorilist/${id}`
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

    return (
        <div
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="1000"
        >
            <h2 className='text-center text-3xl'>All Users: {catagorio?.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr className='bg-base-300 text-center'>
                            <th>Serial</th>
                            <th>Who Add Catagori</th>
                            <th>Catagori Image</th>
                            <th>Remove Catagori</th>

                        </tr>
                    </thead>
                    <tbody className='text-center '>
                        {
                            catagorio?.map((users, index) => <tr
                                key={users._id}
                            >
                                <th>{index + 1}</th>
                                <td>{users?.catagoriEmail} ,
                                    <b>({users?.role?.toUpperCase()})</b>
                                </td>
                                <td><img width="50px" className='mx-auto' src={users?.img} alt="" /></td>

                                <td> <button onClick={() => handleCatagoriDelete(users?._id)} className='btn btn-xs btn-error'>Delete Catagori</button> </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManageAllCatagori