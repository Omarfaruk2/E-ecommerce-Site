import React from 'react'
import { useNavigate } from 'react-router'

const SingleItems = ({ singleProducts }) => {

    console.log(singleProducts)

    const navigate = useNavigate()

    const { ProductName, brand, _id, grade, img, name, price } = singleProducts

    return (
        <div
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1500"
        >
            <div className="card lg:w-11/12 mx-auto bg-base-100 shadow-xl">
                <div className="card-body">
                    <img src={img} alt="" />
                    <h2 className="card-title">{ProductName}</h2>
                    <button onClick={() => navigate(`${_id}`)} className="btn btn-info">Add to cart</button>
                </div>
            </div>

        </div>
    )
}

export default SingleItems