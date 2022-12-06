import React from 'react'
import { Link } from 'react-router-dom'

const Singlecatagori = ({ singlecatagori }) => {

    const { name, idName, img } = singlecatagori || {}

    // console.log(singlecatagori)

    return (
        <div>
            {/*  */}
            <Link
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1500"
                // to={"/tour/japan"}
                to={`items/${idName}`}
            >
                <div className="card lg:w-11/12 h-full mx-auto bg-base-100 shadow-xl hover:shadow-2xl">
                    <div className="card-body">
                        <img src={img} alt="" />
                        <h2 className="card-title">{name}</h2>
                    </div>

                </div>
            </Link>
            {/*  */}
        </div>

    )
}

export default Singlecatagori