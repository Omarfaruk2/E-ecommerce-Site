import { signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../../src/img/logo.png"
import auth from '../../firebase.init'
import useAdmin from '../Hooks/useAdmin'
import useSeller from '../Hooks/useSeller'
import Loadding from './Loadding'

const Navbar = () => {

    const navigate = useNavigate()
    const [user, loading,] = useAuthState(auth)

    const [nameUser, setNameUser] = useState("")


    const [admin] = useAdmin(user)
    const [seller] = useSeller(user)



    if (loading) {
        return <Loadding />
    }

    const handlelogout = () => {
        signOut(auth)
        localStorage.removeItem("accessToken")
    }

    //  if (seller) {
    //         return setNameUser("SELLER")
    //     }

    //     if (admin) {
    //         return setNameUser("admin")
    //     }

    //     else{
    //         return  setNameUser("User")
    //     }

    //     console.log(nameUser, "atai asol")



    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link
                        to={"/"}
                        className="btn btn-ghost normal-case text-xl">
                        <img className='w-3/4' src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li
                            onClick={() => navigate("/")}
                        ><a>Home</a></li>

                        {/* <li
                            onClick={() => navigate("/singup")}
                        ><a>Sign Up</a></li> */}

                        <li
                            onClick={() => navigate("/dashboard")}
                        ><a>Dashboard</a></li>



                        {
                            user ?
                                <li>
                                    <button className='logoutbutton' onClick={() => handlelogout()} href="">Log Out</button>
                                </li>

                                :
                                <li
                                    onClick={() => navigate("/login")}
                                ><a>Log In</a></li>
                        }


                    </ul>
                </div>
                <div className="navbar-end">
                    {admin ?
                        <a className="btn">Admin Panal</a>
                        : ""
                    }

                    {seller ?
                        <a className="btn">Seller Panal</a>
                        : ""
                    }

                    {(!admin && !seller) ?
                        <a className="btn">User</a>
                        : ""
                    }

                </div>
            </div>
        </div>
    )
}

export default Navbar