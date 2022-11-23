import React from 'react'
import { useQuery } from 'react-query'
import Singlecatagori from './Singlecatagori'

const Categories = () => {


    const { isLoading, error, data: catagorio, refetch } = useQuery(['repoDatdfa'], () =>
        fetch('http://localhost:5000/catagorilist').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <p>Loading</p>
    }
    refetch()






    return (
        <div className='my-20'>
            <h2 className='text-center font-bold text-4xl'>Categories</h2>

            <div className='grid lg:grid-cols-4 lg-w-11/12 mx-auto  sm:grid-cols-1'>

                {
                    catagorio.map((singlecatagori, index) =>
                        <Singlecatagori
                            singlecatagori={singlecatagori}
                            key={index}
                        />
                    )
                }


            </div>


        </div>
    )
}

export default Categories