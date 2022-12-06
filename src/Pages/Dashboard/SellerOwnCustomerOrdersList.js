import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import auth from '../../firebase.init'
import Loadding from '../Share/Loadding'

const SellerOwnCustomerOrdersList = () => {

    const [user] = useAuthState(auth)
    const param = useParams()
    const categoryName = param?.categoryName

    console.log(categoryName)


    const { isLoading, data: sellerOrders, refetch } = useQuery(['repoData'], () =>
        fetch(`https://e-commarce-server.onrender.com/sellerorder/${user?.email}`).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        <Loadding />
    }
    refetch()

    console.log(sellerOrders, "sellerOrders")


    return (
        <div>
            <h3>Hello, Seller Orders
                <span className='text-primary'> {sellerOrders?.length}</span>
            </h3>
        </div>
    )
}

export default SellerOwnCustomerOrdersList