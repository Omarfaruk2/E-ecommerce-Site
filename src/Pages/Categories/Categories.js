import React from 'react'
import { useQuery } from 'react-query'
import Singlecatagori from './Singlecatagori'

const Categories = () => {


    const { isLoading, error, data: catagori, refetch } = useQuery(['repoData'], () =>
        fetch('catagori.json').then(res =>
            res.json()
        )
    )

    if (isLoading || catagori.length === 6) {
        return <p>Loading</p>
    }



    return (
        <div className='my-20'>
            <h2 className='text-center font-bold text-4xl'>Categories</h2>

            <div className='grid lg:grid-cols-4 lg-w-11/12 mx-auto  sm:grid-cols-1'>

                {
                    catagori.map((singlecatagori, index) =>
                        <Singlecatagori
                            singlecatagori={singlecatagori}
                            key={index}
                        />
                    )
                }

                {/* Building matarials */}

            </div>


        </div>
    )
}

export default Categories