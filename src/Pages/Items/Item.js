import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import Loadding from '../Share/Loadding'
import SingleItems from './SingleItems'

const Item = () => {

    const param = useParams()
    const categoryName = param?.categoryName

    console.log(categoryName)


    const { isLoading, data: products, refetch } = useQuery(['repoData'], () =>
        fetch(`https://e-commarce-server.onrender.com/item/${categoryName}`).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        <Loadding />
    }
    // refetch()
    // console.log(products)


    return (
        <div>
            <h2>{categoryName}</h2>

            <div className='grid lg:grid-cols-4 lg-w-11/12 mx-auto  sm:grid-cols-1'>

                {
                    products?.map((singleProducts, index) =>
                        <SingleItems
                            singleProducts={singleProducts}
                            key={index}

                        />
                    )
                }

                {/* Building matarials */}

            </div>


        </div>
    )
}

export default Item