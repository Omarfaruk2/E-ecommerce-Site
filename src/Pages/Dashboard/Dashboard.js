import { Icon } from '@iconify/react'
import React from 'react'
import { useQuery } from 'react-query'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import useAdmin from '../Hooks/useAdmin'
import Loadding from '../Share/Loadding'
import useSeller from '../Hooks/useSeller'


const Dashboard = () => {

    const [user, loading,] = useAuthState(auth)

    const [admin] = useAdmin(user)
    const [seller] = useSeller(user)

    if (loading) {
        return <Loadding />
    }

    console.log(seller, "seller paisi")

    return (
        <div className="drawer drawer-mobile">
            <input id="Dashboard-SIdebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* <!-- Page content here --> */}
                <p className='text-3xl text-center'>Dashboard</p>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="Dashboard-SIdebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-300 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard"><Icon icon="healthicons:ui-user-profile" /> My Profile</Link></li>

                    {admin &&
                        <>
                            <li><Link to="/dashboard/alluser"><Icon icon="icon-park-solid:transaction-order" /> All User</Link></li>
                            <li><Link to="/dashboard/allorder"><Icon icon="carbon:review" />All Order</Link></li>
                            <li li > <Link to="/dashboard/allProducts"><Icon icon="carbon:review" />All Products</Link></li>

                        </>
                    }
                    {seller &&
                        <>
                            <li><Link to="/dashboard/addProducts"><Icon icon="carbon:review" />Add Products</Link></li>
                            <li><Link to="/dashboard/myaddingProducts"><Icon icon="carbon:review" />My Adding Products</Link></li>
                        </>

                    }
                    {!admin & !seller &&
                        <>
                            <li><Link to="/dashboard/myorder"><Icon icon="carbon:review" />My Order</Link></li>
                        </>
                    }


                </ul>

            </div>
        </div >
    )
}

export default Dashboard