import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import SingleItems from './SingleItems'

const Item = () => {

    const param = useParams()
    const categoryName = param?.categoryName

    console.log(categoryName)


    const { isLoading, error, data: products, refetch } = useQuery(['repoData'], () =>
        fetch(`https://desolate-river-18269.herokuapp.com/item/${categoryName}`).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <p>Loading</p>
    }
    // refetch()
    // console.log(products)


    return (
        <div>
            <h2>{categoryName}</h2>

            <div className='grid lg:grid-cols-4 lg-w-11/12 mx-auto  sm:grid-cols-1'>

                {
                    products.map((singleProducts, index) =>
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