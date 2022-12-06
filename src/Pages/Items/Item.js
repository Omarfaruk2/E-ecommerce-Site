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


    return (
        <div>

            <div className='grid lg:grid-cols-4 lg-w-11/12 mx-auto mt-10 sm:grid-cols-1'>

                {
                    products?.map((singleProducts, index) =>
                        <SingleItems
                            singleProducts={singleProducts}
                            key={index}

                        />
                    )
                }

            </div>


        </div>
    )
}

export default Item